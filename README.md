# Veille OPS · TF1 PUB

Données du site « Veille OPS » (opérations spéciales des régies TV et plateformes).

- `ops-data.js` : la mémoire du site. Le site le lit ici (GitHub Pages, sinon jsDelivr) ; il ne repart jamais de zéro, chaque mois ajoute une édition.
- `merge.js` : ajoute une édition en validant tout (`node merge.js edition-AAAA-MM.json`) ; ne supprime jamais rien. `node merge.js --check` vérifie le fichier.
- `example-edition.json` : format d'une édition mensuelle.
- `AGENT-PROMPT.md` : consignes complètes de l'agent de veille.
- `editions/` : les fichiers d'édition déjà fusionnés (historique).

Revenir en arrière : dans GitHub, onglet « Commits », ouvrir le dernier commit de l'agent puis « Revert ».
