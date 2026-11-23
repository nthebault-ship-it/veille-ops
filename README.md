# Veille OPS · TF1 PUB

Données du site « Veille OPS » (opérations spéciales des régies TV et plateformes).

**Les données sont chiffrées.** `ops-data.enc.js` n'est lisible qu'avec le mot de passe de l'équipe : le site le demande à l'ouverture et déchiffre dans le navigateur. Le mot de passe n'est jamais écrit dans ce dépôt.

- `ops-data.enc.js` : la mémoire du site (chiffrée). Le site la lit ici (GitHub Pages, sinon jsDelivr). Elle ne repart jamais de zéro, chaque mois ajoute une édition.
- `merge.js` : ajoute une édition en validant tout, puis efface le fichier d'édition en clair. Toutes les commandes demandent le mot de passe dans `VEILLE_PASS` :
  - `VEILLE_PASS='…' node merge.js editions/edition-AAAA-MM.json`
  - `VEILLE_PASS='…' node merge.js --check`
  - `--export x.plain.json` / `--import x.plain.json` pour une correction manuelle (les fichiers `*.plain.json` sont ignorés par git : ne jamais les publier).
- `crypt.js` : chiffrement AES-256-GCM, clé dérivée du mot de passe (PBKDF2-SHA256, 250 000 itérations).
- `example-edition.json` : format d'une édition mensuelle (contenu fictif).
- `AGENT-PROMPT.md` : consignes complètes de l'agent de veille.

Revenir en arrière : dans GitHub, onglet « Commits », ouvrir le dernier commit de l'agent puis « Revert ».
