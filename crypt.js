/* Veille OPS — chiffrement des données (AES-256-GCM, clé dérivée du mot de passe de l'équipe par PBKDF2-SHA256).
   Le site déchiffre dans le navigateur (WebCrypto) ; rien n'est lisible sans le mot de passe. */
const crypto = require('crypto');
const ITER = 250000;
function encrypt(obj, pass) {
  const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  const data = Buffer.concat([c.update(Buffer.from(JSON.stringify(obj), 'utf8')), c.final(), c.getAuthTag()]);
  return {v: 1, kdf: 'PBKDF2-SHA256', iter: ITER, salt: salt.toString('base64'), iv: iv.toString('base64'), data: data.toString('base64')};
}
function decrypt(enc, pass) {
  const key = crypto.pbkdf2Sync(pass, Buffer.from(enc.salt, 'base64'), enc.iter, 32, 'sha256');
  const buf = Buffer.from(enc.data, 'base64'), tag = buf.subarray(buf.length - 16), body = buf.subarray(0, buf.length - 16);
  const d = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(enc.iv, 'base64'));
  d.setAuthTag(tag);
  return JSON.parse(Buffer.concat([d.update(body), d.final()]).toString('utf8'));
}
const HEAD = '/* Veille OPS · TF1 PUB — données chiffrées avec le mot de passe de l\'équipe.\n   Ne pas modifier à la main : utiliser merge.js (voir README.md). */\n';
const toFile = enc => HEAD + 'window.VEILLE_ENC = ' + JSON.stringify(enc) + ';\n';
const fromFile = txt => { const w = {}; new Function('window', txt)(w); return w.VEILLE_ENC; };
module.exports = {encrypt, decrypt, toFile, fromFile};
