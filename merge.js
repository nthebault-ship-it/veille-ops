#!/usr/bin/env node
/* Veille OPS — ajoute une édition mensuelle à ops-data.js SANS jamais rien supprimer.
   Usage :  node merge.js edition-AAAA-MM.json      (valide, puis fusionne)
            node merge.js --check                    (valide seulement ops-data.js)
   Format du fichier d'édition : voir example-edition.json */
const fs = require('fs');
const FILE = 'ops-data.js';
const raw = fs.readFileSync(FILE, 'utf8');
const cut = raw.indexOf('window.VEILLE_OPS');
if (cut < 0) { console.error('ops-data.js illisible'); process.exit(1); }
const header = raw.slice(0, cut);
const load = txt => { const w = {}; new Function('window', txt)(w); return w.VEILLE_OPS; };
const D = load(raw);
const errors = [];
const err = m => errors.push(m);
const isDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s || '');
const slug = s => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s || '');
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '');
const url = u => /^https?:\/\/\S+$/i.test(u || '');

function checkOp(o, chapterKeys, where) {
  const w = `${where} ${o.id || '?'}`;
  if (!slug(o.id)) err(`${w}: id invalide (minuscules, chiffres, tirets)`);
  if (!chapterKeys.includes(o.chapter)) err(`${w}: chapitre inconnu "${o.chapter}"`);
  if (!isDate(o.edition)) err(`${w}: edition doit être une date AAAA-MM-JJ`);
  for (const k of ['label', 'title', 'pitch', 'why', 'forTF1', 'adaptations', 'confidence']) if (!o[k] || typeof o[k] !== 'string') err(`${w}: champ "${k}" manquant`);
  if (!Array.isArray(o.scores) || o.scores.length !== 5 || o.scores.some(n => !Number.isFinite(n) || n < 0 || n > 10)) err(`${w}: scores = 5 notes entre 0 et 10`);
  if (!Array.isArray(o.sources) || !o.sources.length || o.sources.some(s => !s || !s.label || !url(s.url))) err(`${w}: au moins une source {label,url} valide`);
  if (!Array.isArray(o.facts) || !o.facts.length) err(`${w}: facts manquants`);
  if (!Array.isArray(o.steps)) err(`${w}: steps doit être une liste`);
  if (!Array.isArray(o.results)) err(`${w}: results doit être une liste ([] si aucun chiffre)`);
  if (!Array.isArray(o.insights)) err(`${w}: insights doit être une liste`);
  if (!Array.isArray(o.concepts) || o.concepts.length !== 3) err(`${w}: concepts = exactement 3 pistes`);
  if (!['regie', 'inspiration'].includes(o.scope)) err(`${w}: scope = "regie" ou "inspiration"`);
  if (!Array.isArray(o.categories)) err(`${w}: categories doit être une liste`);
}
function checkRetain(key, r, ids) {
  if (!r || !r.summary || !Array.isArray(r.points) || r.points.length !== 3) { err(`retain ${key}: summary + 3 points exigés`); return; }
  r.points.forEach((p, i) => {
    if (!p.t || !p.d) err(`retain ${key} point ${i + 1}: t et d exigés`);
    if (p.ops && (!Array.isArray(p.ops) || p.ops.some(id => !ids.has(id)))) err(`retain ${key} point ${i + 1}: ops doit référencer des id existants`);
  });
}
function checkAll(data) {
  const keys = data.chapters.map(c => c.key), seen = new Set();
  data.ops.forEach(o => { if (seen.has(o.id)) err(`id en double : ${o.id}`); seen.add(o.id); checkOp(o, keys, 'op'); });
  data.chapters.forEach(c => c.retain && checkRetain(c.key, c.retain, seen));
}

if (process.argv[2] === '--check') {
  checkAll(D);
  if (errors.length) { console.error('ERREURS :\n- ' + errors.join('\n- ')); process.exit(1); }
  console.log(`OK : ${D.ops.length} opérations, ${D.editions.length} édition(s).`); process.exit(0);
}

const file = process.argv[2];
if (!file) { console.error('Usage : node merge.js edition-AAAA-MM.json'); process.exit(1); }
const E = JSON.parse(fs.readFileSync(file, 'utf8'));
const before = D.ops.length, keys = D.chapters.map(c => c.key);
if (!E.edition || !isDate(E.edition.date) || !E.edition.title || !E.edition.note) err('edition: {date, title, note} exigés');
if (D.editions.some(e => e.date === (E.edition || {}).date)) err('une édition existe déjà à cette date');
if (!Array.isArray(E.ops) || !E.ops.length) err('ops: au moins une opération');
const existingIds = new Set(D.ops.map(o => o.id)), existingTitles = new Set(D.ops.map(o => norm(o.title)));
const added = [], skipped = [];
for (const o of (E.ops || [])) {
  o.image = '';                    // pas d'image sur les nouveautés : l'équipe les ajoute en mode édition
  o.edition = E.edition && E.edition.date;
  if (existingIds.has(o.id) || existingTitles.has(norm(o.title))) { skipped.push(o.id || o.title); continue; }
  checkOp(o, keys, 'nouvelle op'); added.push(o); existingIds.add(o.id); existingTitles.add(norm(o.title));
}
const all = new Set([...D.ops.map(o => o.id), ...added.map(o => o.id)]);
for (const [k, v] of Object.entries(E.chapters || {})) {
  const c = D.chapters.find(c => c.key === k); if (!c) { err(`chapitre inconnu: ${k}`); continue; }
  if (v.retain) { checkRetain(k, v.retain, all); c.retain = v.retain; }
  if (v.question) c.question = v.question;
}
if (!added.length) err('aucune nouvelle opération à ajouter (toutes en doublon ?)');
if (errors.length) { console.error('ERREURS — rien n\'a été modifié :\n- ' + errors.join('\n- ')); process.exit(1); }
D.editions.unshift(E.edition); D.updated = E.edition.date; D.ops.push(...added);
if (D.ops.length < before) { console.error('Sécurité : des opérations auraient disparu. Abandon.'); process.exit(1); }
fs.writeFileSync(FILE, header + 'window.VEILLE_OPS = ' + JSON.stringify(D, null, 2) + ';\n');
const chk = load(fs.readFileSync(FILE, 'utf8')); if (chk.ops.length !== before + added.length) { console.error('Relecture incohérente'); process.exit(1); }
console.log(`OK : +${added.length} opération(s) (${skipped.length} doublon(s) ignoré(s)), total ${D.ops.length}.`);
if (skipped.length) console.log('Doublons ignorés : ' + skipped.join(', '));
