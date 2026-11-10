/* ===================================================================
   VEILLE OPS · TF1 PUB · données du site
   Ce fichier est le seul à modifier pour mettre le site à jour.
   - Ajouter une opération : copier un bloc dans "ops", changer "id"
     (unique, sans accent ni espace) et mettre la date d'édition dans "edition".
   - Nouvelle mise à jour : ajouter une ligne dans "editions" (la plus récente
     en premier) et changer "updated".
   - Image : déposer le fichier dans le dossier images/ et écrire
     "image": "images/nom-du-fichier.jpg".
   - Fiche : "pitch" (l'idée en une phrase), "context" (faits clés), "steps" (le dispositif),
     "results" (chiffres publiés, [] si aucun), "insights" (pourquoi ça marche),
     "concepts" (3 pistes TF1 PUB par budget), "quote" (citation, facultatif).
   - "scope" : "regie" (régie TV concurrente, à privilégier ≈ 70 %) ou "inspiration" (social, plateforme, hors TV ≈ 30 %).
   - "chapters[].retain" : « Ce qu'on retient » de chaque chapitre (une phrase + 3 enseignements),
     à réécrire à chaque mise à jour ; "deck.subtitle" : sous-titre de la couverture du PDF.
   - "scores" = [originalité, innovation, potentiel TF1 PUB, facilité, potentiel commercial], notes sur 10.
   =================================================================== */
window.VEILLE_OPS = {
  "updated": "2026-11-11",
  "editions": [
    {
      "date": "2026-11-11",
      "title": "Édition du 11 novembre 2026",
      "note": "Veille du 11 septembre au 10 novembre 2026 : 11 opérations repérées, toutes de régies TV (Channel 4, M6 Unlimited, ITV, Seven.One Media, Ad Alliance), dont 2 à vérifier."
    },
    {
      "date": "2026-11-10",
      "title": "Première édition",
      "note": "21 opérations repérées sur EGTA, la presse de Channel 4 et Adweek, avec les régies TV concurrentes en priorité."
    }
  ],
  "deck": {
    "subtitle": "Le radar des Ops qui cassent les codes"
  },
  "chapters": [
    {
      "key": "programme",
      "name": "Marque × programme",
      "intro": "Quand la marque entre dans le programme : un décor, une intrigue, un rituel d'émission conçus pour elle.",
      "colors": [
        "#FF007A",
        "#FF6A4D",
        "#FFB21E"
      ],
      "ink": "#03001E",
      "question": "Comment les marques peuvent-elles entrer au cœur de nos programmes ?",
      "retain": {
        "summary": "Les meilleures opérations ne posent pas un logo dans le programme : elles créent un rituel, une scène ou un prolongement que seule la marque peut raconter.",
        "points": [
          {
            "t": "Un rituel qui revient",
            "d": "Le « rider » d'Albert Heijn revient chaque semaine, le vote Sprite chaque épisode : la marque devient un rendez-vous de l'émission.",
            "ops": [
              "albert-heijn-lift-you-up",
              "sprite-playground"
            ]
          },
          {
            "t": "Une scène avant le spot",
            "d": "Chez Emmerdale comme dans GZSZ, la fiction pose le sujet, puis la marque répond ; Melitta, elle, entre dans l'émission de pitch de VOX (détails à confirmer).",
            "ops": [
              "emmerdale-pompes-a-chaleur",
              "l-oreal-paris-gzsz",
              "melitta-die-hoehle-der-loewen"
            ]
          },
          {
            "t": "L'émission se prolonge et se mesure",
            "d": "+90 % de trafic sur le site de Disneyland Paris pendant le direct ; chez SIMon mobile, placements, YouTube et pub d'un créateur prolongent THE RACE sur Joyn.",
            "ops": [
              "disneyland-paris-dancing-with-the-stars",
              "simon-mobile-the-race-joyn"
            ]
          }
        ]
      }
    },
    {
      "key": "contenu",
      "name": "Contenus de marque",
      "intro": "Quand la régie devient studio : séries, documentaires et divertissements produits pour une marque.",
      "colors": [
        "#00D2FF",
        "#00FFCE",
        "#7DF9FF"
      ],
      "ink": "#03001E",
      "question": "Comment proposer aux marques des contenus qui leur ressemblent ?",
      "retain": {
        "summary": "Quand la régie produit pour la marque, le produit devient le décor ou le prétexte, jamais l'argument de vente : le talent, le format et le récit portent le message.",
        "points": [
          {
            "t": "Un talent, un ton, un format",
            "d": "Un humoriste porte le rail chez Channel 4 comme chez VIA Rail, Davina McCall porte Whitworths sur ITV, Movember détourne un jeu existant : la voix et le format font la marque.",
            "ops": [
              "rail-delivery-group-train-ing-it",
              "via-rail-andrew-phung",
              "whitworths-eat-cook-move-with-davina",
              "a-comedy-thing-movember"
            ]
          },
          {
            "t": "Le produit au second plan",
            "d": "Un soin jamais démontré, des poules expliquées par le jeu, un parfum devenu personnalité de héroïne : on raconte avant de vendre.",
            "ops": [
              "avene-marquer-l-invisible",
              "happy-egg-tiny-farmers",
              "sol-de-janeiro-the-guest-list"
            ]
          },
          {
            "t": "Un programme de marque se construit en saisons",
            "d": "Train-ing It dépasse de 94 % ses objectifs dès la première saison ; Made in France revient pour une saison 2 avec ses partenaires : la récurrence fidélise.",
            "ops": [
              "rail-delivery-group-train-ing-it",
              "made-in-france-saison-2-m6"
            ]
          }
        ]
      }
    },
    {
      "key": "formats",
      "name": "Formats & tech",
      "intro": "Quand la publicité elle-même change de forme : coupures événement, spots interactifs, IA.",
      "colors": [
        "#DFFF57",
        "#00FFCE",
        "#B8FF7A"
      ],
      "ink": "#03001E",
      "question": "Comment réinventer l'écran publicitaire avec la tech et l'IA ?",
      "retain": {
        "summary": "La publicité elle-même peut devenir un événement : en changeant de forme, avec une coupure annoncée, du clic, un QR code ou de l'IA, elle regagne l'attention sans produire plus.",
        "points": [
          {
            "t": "La coupure devient un rendez-vous",
            "d": "Chez Ster, le bloc de Noël gagne +120 % de visionnage différé ; BMW offre deux minutes sans coupure ; Channel 4 réunit cinq PME B Corp dans une coupure spéciale.",
            "ops": [
              "ster-bloc-de-pub-de-noel-en-prime-time",
              "bmw-ix3-le-compte-a-rebours",
              "channel-4-b-corp-coupure-speciale"
            ]
          },
          {
            "t": "Du spot à l'action, simplement",
            "d": "Channel 4 Enhance rend un spot cliquable en 5 jours ouvrés ; M6 offre un QR code vers le wallet ; Channel 4 vend un point d'achat unique pour couvrir plusieurs écrans en 48 heures.",
            "ops": [
              "channel-4-enhance",
              "fitness-park-habillage-wallet",
              "channel-4-instant-re4ch"
            ]
          },
          {
            "t": "L'IA et l'écran d'accueil comme terrain",
            "d": "M6 Unlimited produit un spot par l'IA pour une petite marque et détourne l'accueil de M6+ pour Carrefour : un signal concurrent direct sur le streaming.",
            "ops": [
              "m6-spots-crees-par-l-ia",
              "carrefour-m6-collection-hack6"
            ]
          }
        ]
      }
    },
    {
      "key": "social",
      "name": "Licences & plateformes",
      "intro": "Quand une licence ou une plateforme sert de terrain de jeu : fandoms, téléréalité, événements live.",
      "colors": [
        "#B44DFF",
        "#FF4FB8",
        "#9D00FF"
      ],
      "ink": "#FFFFFF",
      "question": "Comment faire vivre nos licences auprès des fans, sur tous les écrans ?",
      "retain": {
        "summary": "Les licences et les plateformes fonctionnent quand la marque entre dans le jeu des fans et des créateurs, avant ou autour du programme, plutôt que dans l'écran publicitaire.",
        "points": [
          {
            "t": "Le fandom avant le programme",
            "d": "Snapchat ouvre Poudlard quatre mois avant la série : filtres, tenues d’avatar et événements fans installent l’univers avant la diffusion.",
            "ops": [
              "harry-potter-snapchat"
            ]
          },
          {
            "t": "Un rituel, des créateurs, une marque",
            "d": "Dans la villa de Love Island USA, chaque moment a la sienne : +643 % de mémorisation pour les partenaires intégrés ; chez Seven.One, un casting social de créateurs devient le spot Knorr.",
            "ops": [
              "love-island-usa-21-marques",
              "knorr-seven-one-next-gen-casting"
            ]
          },
          {
            "t": "Une histoire déjà aimée",
            "d": "Walmart rejoue le Noël des Muppets, Netflix crée un nouveau rendez-vous sport et musique : le public connaît déjà le décor.",
            "ops": [
              "walmart-the-muppets",
              "netflix-american-express"
            ]
          }
        ]
      }
    }
  ],
  "method": [
    {
      "title": "Comment lire les scores",
      "points": [
        "Chaque axe est noté sur 10 par la rédaction : c'est un jugement éditorial, pas une performance déclarée par la marque",
        "Pondération : originalité 20 %, innovation 20 %, potentiel TF1 PUB 30 %, facilité de mise en œuvre 15 %, potentiel commercial 15 %",
        "Score global sur 100 = somme pondérée, calculée de la même façon pour toutes les fiches"
      ]
    },
    {
      "title": "D'où viennent les opérations",
      "points": [
        "En priorité : les cas créatifs TV d'EGTA et les sites des régies concurrentes (ITV, Channel 4, Ad Alliance, DPG Media, Canal+, M6 Unlimited)",
        "Ensuite la presse professionnelle pour les plateformes et le social",
        "Chaque fiche renvoie à sa source ; les chiffres de résultats sont ceux communiqués par les régies"
      ]
    },
    {
      "title": "Ce que cette veille n'est pas",
      "points": [
        "Une sélection éditoriale au 10/11/2026, pas un flux en temps réel : les nouveautés arrivent à chaque mise à jour",
        "Les pistes d'adaptation sont exploratoires : aucun programme, talent ou inventaire n'est annoncé comme disponible",
        "Toute reprise demande une validation commerciale, éditoriale, juridique et opérationnelle"
      ]
    }
  ],
  "ops": [
    {
      "id": "albert-heijn-lift-you-up",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Belgique · DPG Media · 2026",
      "title": "Albert Heijn × Lift You Up",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "IRL Advertising"
      ],
      "confidence": "Élevé",
      "scores": [
        8,
        7,
        9,
        6,
        9
      ],
      "facts": [
        "Le « rider » des artistes (leur liste de demandes en coulisses) devient une liste de courses",
        "Pop-up supermarché sur le plateau ; les produits du « Rider of the Week » sont achetables dès le lendemain via l'appli",
        "8 épisodes sur 8 semaines ; notoriété top-of-mind ×3,4 chez les téléspectateurs (chiffre communiqué par la régie)"
      ],
      "why": "Un décor, un rituel d'émission et un parcours d'achat ont été conçus pour la marque : l'émission devient un point de vente, bien au-delà d'un sponsoring.",
      "forTF1": "Très proche de ce que TF1 PUB peut proposer avec un divertissement en direct : un contenu qui mène à l'achat. Le point clé est de relier l'antenne à un distributeur (appli, drive, promo le lendemain).",
      "adaptations": "TV : billboards et intégrations dans le programme. TF1+ : pre-roll et placements. Social : dispositif de participation du public. Terrain : pop-up en magasin. Annonceurs compatibles : distribution, FMCG. Piste à valider selon grille, droits et disponibilités.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/dpg-media-albert-heijn/"
        }
      ],
      "pitch": "Le caprice de star devient une liste de courses : chaque semaine, le « rider » d'un artiste se retrouve en rayon le lendemain matin.",
      "context": {
        "Annonceur": "Albert Heijn (supermarchés)",
        "Objectif": "Dépasser le parrainage : engagement, notoriété, considération et ventes",
        "Régie et chaîne": "DPG Media (studio Integreate) · VTM et VTM GO",
        "Programme": "Lift You Up, émission musicale de prime time",
        "Durée": "8 épisodes sur 8 semaines"
      },
      "steps": [
        "L'idée : le « rider », liste de demandes des artistes en coulisses, devient une liste de courses familiale (produits sains uniquement).",
        "Un pop-up store Albert Heijn est installé dans les coulisses du plateau.",
        "À l'antenne : 16 billboards de 7 s, placement produit, intégrations dans l'émission (les candidats imaginent leur rider) et générique de fin.",
        "Chaque semaine, le « Rider of the Week » est disponible dès le lendemain via l'appli et le dépliant promo de l'enseigne.",
        "Sur les réseaux : contenus avec les candidats et mécanique « Create Your Own Rider »."
      ],
      "results": [
        {
          "n": "×3,4",
          "l": "notoriété spontanée chez les téléspectateurs"
        },
        {
          "n": "+14 pts",
          "l": "de considération chez les non-clients ou clients occasionnels"
        },
        {
          "n": "800 000+",
          "l": "téléspectateurs par épisode (39 % de part de marché)"
        }
      ],
      "insights": [
        {
          "t": "Un rituel, pas un logo",
          "d": "Le rider revient chaque semaine : la marque devient un moment attendu de l'émission."
        },
        {
          "t": "De l'écran au panier en 24 h",
          "d": "Le lien avec l'appli de l'enseigne transforme l'audience en ventes mesurables."
        },
        {
          "t": "Le décor raconte la marque",
          "d": "Le pop-up en coulisses rend la présence naturelle, sans casser le programme."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La liste du candidat",
          "d": "Dans une émission de talents de TF1, chaque semaine un candidat partage sa liste de courses « porte-bonheur », disponible en drive chez l'enseigne partenaire."
        },
        {
          "b": "Budget moyen",
          "t": "Le pop-up des coulisses",
          "d": "Un corner de l'enseigne dans les coulisses de Star Academy ou The Voice, avec des produits mis en avant à chaque prime et un relais promo le lendemain."
        },
        {
          "b": "Opération signature",
          "t": "Le prime « du plateau au panier »",
          "d": "Une soirée entière où les choix du public pendant le direct deviennent l'offre de l'enseigne dès le lendemain, en magasin et sur l'appli."
        }
      ],
      "partners": "DPG Media, Integreate, VTM, VTM GO",
      "scope": "regie",
      "oneLine": "Dans l'émission musicale Lift You Up (VTM), les demandes de coulisses des artistes sont devenues une liste de courses Albert Heijn : les téléspectateurs pouvaient acheter le lendemain, via l'appli, les produits du « Rider of the Week ».",
      "concept": "Un « rider », c'est la liste de ce qu'un artiste exige dans sa loge. Albert Heijn a repris cette idée pour en faire un rendez-vous hebdomadaire : un pop-up store dans les coulisses, des billboards et placements de produits à l'antenne, puis la liste de courses disponible dès le lendemain. La marque ne se contente pas de parrainer l'émission, elle donne à voir et à acheter ce qui s'y passe."
    },
    {
      "id": "l-oreal-paris-gzsz",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Allemagne · RTL / Ad Alliance · 2025",
      "title": "L'Oréal Paris × GZSZ",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        8,
        7,
        9,
        6,
        8
      ],
      "facts": [
        "Une scène de harcèlement de rue est écrite dans la série quotidienne, avec un échange façon SMS entre la marque et un personnage",
        "Deux formats créés pour l'occasion : « Chatmove » et « Cut In » autour de l'intrigue",
        "Budget cité : environ 500 000 € bruts ; 84 % des personnes en contact jugent l'intégration crédible"
      ],
      "why": "Le message de marque est porté par l'écriture de la série, avec des formats publicitaires conçus pour cette intrigue, et non par un spot en pause.",
      "forTF1": "Transposable à une série ou une quotidienne de TF1 pour une cause de marque. Le sujet est sensible : la crédibilité et la séparation entre éditorial et commercial sont décisives, à valider avec les équipes concernées.",
      "adaptations": "TV : intégration dans l'intrigue et formats autour. TF1+ : vidéo à partager. Social : relais par les comptes de la série. Terrain : action liée à la cause. Annonceurs compatibles : beauté, banque, assurance. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/rtl-loreal/"
        }
      ],
      "pitch": "Une série quotidienne écrit une scène de harcèlement de rue pour porter le programme de formation de L'Oréal Paris.",
      "context": {
        "Annonceur": "L'Oréal Paris, programme Stand Up (avec l'ONG Right To Be)",
        "Objectif": "Faire connaître la formation en ligne Stand Up et donner un geste concret aux témoins",
        "Régie et chaîne": "Ad Alliance · RTL",
        "Programme": "Gute Zeiten, schlechte Zeiten (GZSZ), quotidienne",
        "Période": "17 juillet – 8 août 2025",
        "Budget": "≈ 500 000 € bruts"
      },
      "steps": [
        "Une situation de harcèlement est intégrée à l'intrigue ; des affiches sur le plateau portent « Your lipstick is not to blame ».",
        "« Backstory Chatmove » : un échange façon SMS entre la marque et le personnage Moritz Bode s'affiche à l'écran.",
        "Des « Cut Ins » publicitaires répètent le message Stand Up et précisent le rôle de la marque.",
        "Sur les réseaux de la série et dans la presse, le héros intervient grâce aux conseils de l'appli Stand Up.",
        "Une vidéo partageable montre les bons réflexes et renvoie vers la formation."
      ],
      "results": [
        {
          "n": "84 %",
          "l": "jugent l'intégration crédible"
        },
        {
          "n": "55 %",
          "l": "des personnes exposées veulent suivre la formation"
        },
        {
          "n": "+144 %",
          "l": "sur l'image « engagement social » de la marque"
        }
      ],
      "insights": [
        {
          "t": "La fiction rend la cause concrète",
          "d": "On voit la scène avant d'entendre le message : l'émotion précède la marque."
        },
        {
          "t": "Des formats sur mesure",
          "d": "Chatmove et Cut Ins prolongent l'intrigue au lieu de l'interrompre."
        },
        {
          "t": "Un geste simple à la fin",
          "d": "Chaque prise de parole renvoie vers une action : suivre la formation."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le message du personnage",
          "d": "Après une scène clé d'une quotidienne TF1, un message façon SMS d'un personnage renvoie vers l'engagement de la marque."
        },
        {
          "b": "Budget moyen",
          "t": "L'arc engagé",
          "d": "Une intrigue de quelques épisodes dans Plus belle la vie ou Ici tout commence autour d'une cause, avec des formats publicitaires qui la prolongent."
        },
        {
          "b": "Opération signature",
          "t": "La semaine de la cause",
          "d": "Arc scénarisé, spots du casting, contenus TF1+ et partenariat associatif sur une semaine complète."
        }
      ],
      "partners": "Ad Alliance, RTL, Right To Be",
      "quote": {
        "q": "Harassment is never your fault.",
        "who": "Message affiché sur le plateau de GZSZ"
      },
      "scope": "regie",
      "oneLine": "L'Oréal Paris a fait écrire dans la série quotidienne GZSZ (RTL) une scène de harcèlement de rue, qui sert de point d'entrée à son programme de formation « Stand Up ».",
      "concept": "Plutôt que de parler du sujet dans un spot, la marque l'a fait vivre à des personnages que des millions de fans suivent chaque jour. L'intrigue inclut un échange façon SMS entre la marque et un personnage, et deux formats ont été créés pour l'occasion (« Chatmove » et « Cut In »). Le budget cité est d'environ 500 000 € bruts, et 84 % des personnes en contact jugent l'intégration crédible."
    },
    {
      "id": "universal-let-s-dance",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Allemagne · Ad Alliance · mai 2025",
      "title": "Universal × Let's Dance",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Hacking Culture"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        8,
        8,
        8,
        7
      ],
      "facts": [
        "Pendant la coupure, le plateau de l'émission devient une arène de dragons (film « Dragons »)",
        "L'IA génère l'animation du décor ; le personnage principal est produit de façon classique pour respecter la marque",
        "Présenté comme un format reproductible et économique ; aucun résultat chiffré publié"
      ],
      "why": "Un format publicitaire créé pour un film, dans l'univers visuel exact du programme en direct.",
      "forTF1": "Idée facile à transposer sur un grand prime de TF1 pour des sorties cinéma ou streaming, avec peu de production lourde. Vigilance sur les droits d'image du personnage et la validation du détenteur de licence.",
      "adaptations": "TV : coupure habillée dans le décor du programme. TF1+ : version courte en pre-roll. Social : making-of du décor. Annonceurs compatibles : cinéma, entertainment, jeux. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/rtl-universal-pictures-international/"
        }
      ],
      "pitch": "Pendant la coupure, le plateau de Let's Dance se transforme en arène de dragons, grâce à l'IA.",
      "context": {
        "Annonceur": "Universal Pictures International Germany, film « Dragons » en prises de vues réelles",
        "Objectif": "Faire de la pause un moment lié à l'émission et à la sortie du film",
        "Régie": "Ad Alliance (format) · agence EssenceMediacom",
        "Programme": "Let's Dance, prime time",
        "Période": "Mai 2025"
      },
      "steps": [
        "La pause commence dans le même studio que l'émission.",
        "Le plateau se transforme en arène de dragons : l'IA anime décor, lumières et mouvement.",
        "La forme de la scène reste visible : on reste « dans » Let's Dance.",
        "Le dragon Krokmou est produit de façon classique, pour respecter la charte du film."
      ],
      "results": [],
      "insights": [
        {
          "t": "Continuité parfaite",
          "d": "Le spectateur ne sent pas la coupure : la pub commence dans le décor qu'il regarde."
        },
        {
          "t": "L'IA au service du décor",
          "d": "Elle produit vite l'environnement ; le personnage sous licence reste fait à la main."
        },
        {
          "t": "Un format réplicable",
          "d": "Tout programme tourné en studio peut l'accueillir."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le plateau qui change",
          "d": "Sur un grand prime TF1, la coupure s'ouvre sur le plateau transformé aux couleurs d'un film qui sort en salle."
        },
        {
          "b": "Budget moyen",
          "t": "La saison des sorties",
          "d": "Un format « décor IA » proposé aux distributeurs de films sur plusieurs primes, avec un relais TF1+."
        },
        {
          "b": "Opération signature",
          "t": "La soirée univers",
          "d": "Un prime de Danse avec les stars dont les coupures prolongent l'univers d'un film, et une chorégraphie inspirée du film."
        }
      ],
      "partners": "Ad Alliance, EssenceMediacom, RTL",
      "quote": {
        "q": "The stage remains the stage.",
        "who": "Principe créatif cité par EGTA"
      },
      "scope": "regie",
      "oneLine": "Pendant la coupure pub de Let's Dance, le plateau de l'émission a été transformé grâce à l'IA en arène de dragons pour promouvoir le film « Dragons » d'Universal.",
      "concept": "Le décor réel de l'émission sert de base : l'IA génère l'animation qui l'habille, tandis que le personnage principal du film est produit de façon classique pour respecter la marque. Le format est présenté comme reproductible et économique, mais aucun résultat chiffré n'a été publié."
    },
    {
      "id": "disneyland-paris-dancing-with-the-stars",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Belgique · DPG Media · mars–juin 2025",
      "title": "Disneyland Paris × Dancing With The Stars",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Brand Fandoms"
      ],
      "confidence": "Élevé",
      "scores": [
        8,
        6,
        9,
        5,
        8
      ],
      "facts": [
        "Un épisode entier de 90 minutes transformé en expérience Disney, proposé par la régie sans brief du client",
        "Chaque danse raconte une histoire Disney ; Mickey et Minnie sur scène ; animateurs filmés à Disneyland Paris",
        "Plus de 800 000 spectateurs, 5,3 M de vues vidéo, trafic du site +90 % pendant la diffusion (chiffres régie)"
      ],
      "why": "Épisode conçu spécialement pour la marque, imaginé par la régie avant toute demande de l'annonceur.",
      "forTF1": "Modèle « la régie propose » : rapprocher une marque d'un programme fort sans attendre un brief. Compatible avec les grands divertissements de TF1 ; demande des droits de licence et un calendrier calé sur la marque.",
      "adaptations": "TV : épisode ou prime à thème. TF1+ : replay et extraits. Social : extraits des performances. Terrain : tournage sur un site de la marque. Annonceurs compatibles : tourisme, loisirs, entertainment. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/dpg-media-disneyland/"
        }
      ],
      "pitch": "Sans attendre de brief, la régie propose à Disneyland Paris un épisode entier de Dancing With The Stars à sa gloire.",
      "context": {
        "Annonceur": "Disneyland Paris",
        "Objectif": "Promouvoir le Disney Music Festival",
        "Régie et chaîne": "DPG Media (Integreate) · VTM et VTM GO",
        "Programme": "Dancing With The Stars, direct de 90 min",
        "Période": "Mars – juin 2025 (13 semaines)"
      },
      "steps": [
        "La régie imagine seule un épisode Disney, hors brief ; la marque accepte tout de suite.",
        "Chaque danse raconte une histoire Disney différente.",
        "Les animateurs tournent à Disneyland Paris avec Elsa, Stitch, Jack Sparrow… pour choisir les chansons.",
        "Mickey et Minnie ouvrent le direct sur scène, parmi les danseurs.",
        "Relais : bandes-annonces, affichage et pre-rolls sur VTM et VTM GO."
      ],
      "results": [
        {
          "n": "800 000+",
          "l": "téléspectateurs devant le direct"
        },
        {
          "n": "5,3 M",
          "l": "vues vidéo (VTM GO, VTM.be, hln.be)"
        },
        {
          "n": "+90 %",
          "l": "de trafic sur le site de Disneyland Paris pendant le direct"
        }
      ],
      "insights": [
        {
          "t": "La régie prend l'initiative",
          "d": "Proposer une idée avant le brief change la relation avec l'annonceur."
        },
        {
          "t": "Un univers fait pour la danse",
          "d": "Les histoires Disney donnent naturellement des chorégraphies."
        },
        {
          "t": "Un pic mesurable",
          "d": "Le trafic du site bondit pendant le direct : l'effet est visible tout de suite."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La danse thématique",
          "d": "Une chorégraphie d'un prime de Danse avec les stars inspirée de l'univers d'un parc ou d'un studio partenaire."
        },
        {
          "b": "Budget moyen",
          "t": "Le tournage chez la marque",
          "d": "Les candidats ou les animateurs filment des séquences sur le site de la marque, diffusées dans le direct."
        },
        {
          "b": "Opération signature",
          "t": "Le prime de la marque",
          "d": "Un prime entièrement thématisé autour d'un univers de divertissement, proposé par TF1 PUB à l'annonceur avant tout brief."
        }
      ],
      "partners": "DPG Media, Integreate, VTM",
      "quote": {
        "q": "Seeing Mickey and Minnie come together among the dancers on the stage was the highlight of this partnership.",
        "who": "Isabelle Willemsen, Disneyland Paris"
      },
      "scope": "regie",
      "oneLine": "La régie de VTM a proposé à Disneyland Paris, sans que la marque l'ait demandé, un épisode entier de 90 minutes de Dancing With The Stars aux couleurs de Disney.",
      "concept": "L'idée : ne pas vendre des spots, mais offrir à l'annonceur un programme à sa gloire. Chaque danse racontait une histoire Disney, Mickey et Minnie montaient sur scène et des animateurs avaient été filmés à Disneyland Paris. La régie annonce plus de 800 000 spectateurs et +90 % de trafic sur le site du parc pendant la diffusion."
    },
    {
      "id": "emmerdale-pompes-a-chaleur",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Royaume-Uni · ITV · avril (année non précisée)",
      "title": "Emmerdale × pompes à chaleur",
      "image": "",
      "categories": [
        "RSE Show",
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        6,
        8,
        8,
        7
      ],
      "facts": [
        "Dans la série, un personnage parle des pompes à chaleur ; un spot contextuel diffusé juste après l'explique",
        "Spot tourné sur le décor de la série, narré par un ancien acteur, signé Project Planet (initiative durable d'ITV)",
        "Budget cité : moins de 250 k£ ; 62 % des téléspectateurs envisagent d'en installer une, contre 28 % des non-téléspectateurs"
      ],
      "why": "Un spot créé pour l'occasion prolonge une scène de la série : le message est lié à l'intrigue et au décor.",
      "forTF1": "Budget modeste et mécanique simple : un spot « de contexte » juste après la scène. Transposable à des causes d'intérêt général ou à des annonceurs en transition (énergie, banque, assurance), sous réserve de séparation éditoriale.",
      "adaptations": "TV : mention scénaristique puis spot dans la pause suivante. TF1+ : extrait explicatif. Social : relais par la distribution de la série. Annonceurs compatibles : énergie, institutionnel, assurance. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/itv-emmerdale/"
        }
      ],
      "pitch": "Un personnage d'Emmerdale parle de pompes à chaleur ; à la pause suivante, un spot tourné sur le même décor explique tout.",
      "context": {
        "Annonceur": "Ministère britannique de l'Énergie (Dept. for Energy Security & Net Zero)",
        "Objectif": "Rendre les pompes à chaleur crédibles et expliquer l'aide publique",
        "Chaîne": "ITV, initiative Project Planet",
        "Programme": "Emmerdale, feuilleton",
        "Période": "10 – 24 avril, deux semaines",
        "Budget": "Moins de 250 000 £"
      },
      "steps": [
        "Dans l'épisode, le Dr Liam Cavanagh évoque les pompes à chaleur, dans une intrigue déjà en cours.",
        "Une pompe à chaleur est installée à la clinique du village, à l'écran.",
        "À la pause suivante : un spot tourné sur le décor, avec la voix d'un ancien acteur de la série, explique l'aide de l'État.",
        "Les comptes sociaux de la série relaient le message avec le casting."
      ],
      "results": [
        {
          "n": "66 %",
          "l": "des téléspectateurs jugent la pompe à chaleur crédible (32 % chez les non-téléspectateurs)"
        },
        {
          "n": "62 %",
          "l": "envisagent d'en installer une (28 % chez les non-téléspectateurs)"
        },
        {
          "n": "×2",
          "l": "recherches Google « heat pumps » les jours de diffusion"
        }
      ],
      "insights": [
        {
          "t": "La scène prépare le spot",
          "d": "Le public a déjà entendu le sujet dans la série : le spot répond à une question posée."
        },
        {
          "t": "Petit budget, grand effet",
          "d": "Moins de 250 k£ pour une mécanique simple et reproductible."
        },
        {
          "t": "La confiance du feuilleton",
          "d": "Un décor familier rend crédible un sujet jugé compliqué."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le spot de contexte",
          "d": "Après une scène d'une quotidienne TF1 qui évoque un sujet de vie pratique, un spot tourné sur le même décor l'explique."
        },
        {
          "b": "Budget moyen",
          "t": "L'objet dans le décor",
          "d": "Le produit ou le service s'installe durablement dans le décor d'une série, avec des spots de contexte réguliers."
        },
        {
          "b": "Opération signature",
          "t": "La transition au quotidien",
          "d": "Un mois thématique (énergie, mobilité) entre fiction, spots de contexte, TF1+ et pédagogie sur les réseaux."
        }
      ],
      "partners": "ITV, Project Planet, Savanta (étude)",
      "scope": "regie",
      "oneLine": "Dans la série Emmerdale (ITV), un personnage parle de pompes à chaleur, et à la pause suivante un spot tourné sur le même décor explique comment cela fonctionne.",
      "concept": "Le spot reprend l'univers de la série et il est raconté par un ancien acteur, ce qui prolonge l'histoire au lieu de la couper. Le dispositif est signé Project Planet, l'initiative durable d'ITV, pour un budget cité de moins de 250 000 £. Selon ITV, 62 % des téléspectateurs envisagent d'en installer une, contre 28 % des non-téléspectateurs."
    },
    {
      "id": "sprite-playground",
      "chapter": "programme",
      "edition": "2026-11-10",
      "label": "Belgique · RMB / RTBF · oct. 2025–janv. 2026",
      "title": "Sprite × PLAYGROUND",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Hacking Culture"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        6,
        7,
        7,
        7
      ],
      "facts": [
        "Casting d'une émission de rap belge : le public note chaque candidat de 1 à 10 via un QR code à l'écran",
        "Les notes du public s'ajoutent à celles du jury pour un classement en temps réel",
        "Sponsoring global : antenne, pre-roll, sampling et activations terrain ; aucun chiffre publié"
      ],
      "why": "Une mécanique de vote a été conçue pour l'émission, avec des activations de marque construites tout autour.",
      "forTF1": "Pertinent pour toucher les 15-24 ans via un programme de talents sur TF1+ et les réseaux. Le vote par QR code est simple à reproduire ; il faut cadrer la protection des données et les règles de jeu.",
      "adaptations": "TV : vote en direct et présence de la marque à l'antenne. TF1+ : épisodes longs. Social : extraits et contenus exclusifs. Terrain : sampling. Annonceurs compatibles : boissons, snacking. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/rmb-sprite-deli-choc/"
        }
      ],
      "pitch": "Le public note les rappeurs de 1 à 10 avec un QR code : Sprite et Deli Choc deviennent les partenaires d'une nouvelle scène.",
      "context": {
        "Annonceurs": "Sprite et Deli Choc",
        "Objectif": "Notoriété auprès des jeunes et image ancrée dans la culture urbaine",
        "Régie et diffuseurs": "RMB · RTBF et Tarmac",
        "Programme": "PLAYGROUND, casting rap en direct",
        "Période": "Été 2025 (pré-casting) puis oct. 2025 – janv. 2026"
      },
      "steps": [
        "Été 2025 : appel à candidatures sur les réseaux de Tarmac, collecte de freestyles.",
        "50 candidats en casting diffusé en direct sur Auvio, YouTube et TikTok.",
        "Le public note chaque passage de 1 à 10 via un QR code ; ses notes s'ajoutent à celles du jury.",
        "Les marques sont partout : co-branding, studio, QR codes, pre-rolls, échantillonnage.",
        "Teasers et exclusivités sur TikTok et Instagram entre les directs."
      ],
      "results": [],
      "insights": [
        {
          "t": "La marque donne la parole",
          "d": "Le vote par QR code fait du public un acteur de l'émission."
        },
        {
          "t": "Crédibilité culturelle",
          "d": "Soutenir des talents émergents vaut plus qu'un logo auprès des 15-24 ans."
        },
        {
          "t": "Pensé plateformes d'abord",
          "d": "Le direct vit sur Auvio, YouTube et TikTok, là où est la cible."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le vote de la marque",
          "d": "Un vote par QR code « offert par » une marque pendant un programme de talents TF1 ou TF1+."
        },
        {
          "b": "Budget moyen",
          "t": "Le casting en ligne",
          "d": "Un pré-casting sur les réseaux de TF1+ porté par une marque jeune, avec diffusion des meilleurs passages."
        },
        {
          "b": "Opération signature",
          "t": "La nouvelle scène",
          "d": "Un programme TF1+ de découverte de talents co-construit avec une marque, en direct sur les plateformes et en tournée terrain."
        }
      ],
      "partners": "RMB, RTBF, Tarmac, Auvio",
      "scope": "regie",
      "oneLine": "Dans l'émission de rap PLAYGROUND (RMB / RTBF), le public note chaque rappeur de 1 à 10 en scannant un QR code à l'écran, sous la marque Sprite et Deli Choc.",
      "concept": "Les notes des spectateurs s'ajoutent à celles du jury pour un classement en temps réel : la marque est partenaire du moment où le public décide. Le sponsoring est global : antenne, pre-roll, sampling et activations sur le terrain. Aucun chiffre n'a été publié."
    },
    {
      "id": "rail-delivery-group-train-ing-it",
      "chapter": "contenu",
      "edition": "2026-11-10",
      "label": "Royaume-Uni · Channel 4 · annonce du 5 nov. 2026",
      "title": "Rail Delivery Group × Train-ing It",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        6,
        9,
        7,
        8
      ],
      "facts": [
        "Série de divertissement de marque tournée dans des trains, où l'humoriste Joe Wilkinson interroge des invités du spectacle, du sport et de la culture",
        "Diffusée sur YouTube, Channel 4 Streaming, Spotify et Apple Podcasts ; saison 2 en novembre 2026, saison 3 commandée",
        "Objectifs dépassés de 94 % ; partenariat de divertissement de marque le plus engageant de la chaîne YouTube de Channel 4 (chiffres communiqués par la chaîne)"
      ],
      "why": "Un programme complet a été imaginé et produit pour la marque avec un talent de la chaîne, au lieu d'un simple spot ou sponsoring.",
      "forTF1": "Opération la plus récente d'une régie concurrente dans cette veille. Montre qu'un divertissement de marque peut être renouvelé sur plusieurs saisons et vivre sur YouTube et en audio : piste pour un talent TF1 et TF1+.",
      "adaptations": "TV : relais en spots et extraits. TF1+ : saisons du programme. Social et audio : YouTube, podcast. Annonceurs compatibles : transport, tourisme, banque. Piste exploratoire à valider (talents, droits, production).",
      "sources": [
        {
          "label": "Channel 4 — communiqué",
          "url": "https://www.channel4.com/press/news/channel-4-and-rail-delivery-group-recommission-train-ing-it-joe-wilkinson-two-further"
        }
      ],
      "pitch": "Un humoriste, un train, des invités célèbres : la pub pour le rail devient une émission qui en est à sa troisième saison.",
      "context": {
        "Annonceur": "Rail Delivery Group (opérateurs ferroviaires britanniques)",
        "Objectif": "Rappeler le temps gagné en train (campagne « On the train you can »)",
        "Chaîne": "Channel 4 · agence Spark Foundry",
        "Programme": "Train-ing It with Joe Wilkinson, produit par Electric Robin",
        "Date": "Annonce du 5 novembre 2026, saison 2 ce mois-ci"
      },
      "steps": [
        "Joe Wilkinson voyage en train à travers la Grande-Bretagne.",
        "Il interroge à bord des invités du spectacle, du sport et de la culture (saison 2 : Richard Ayoade, Richard Osman).",
        "Les épisodes vivent sur YouTube, les réseaux, Channel 4 Streaming, Spotify et Apple Podcasts.",
        "Le succès de la saison 1 entraîne une saison 2 et une saison 3."
      ],
      "results": [
        {
          "n": "+94 %",
          "l": "au-dessus des objectifs pour la saison 1"
        },
        {
          "n": "N°1",
          "l": "partenariat de marque le plus engageant de la chaîne YouTube de Channel 4"
        },
        {
          "n": "Gold",
          "l": "Best Use of Content, Media Week Awards"
        }
      ],
      "insights": [
        {
          "t": "Le produit est le décor",
          "d": "Le train n'est pas vanté : il est le lieu où tout se passe."
        },
        {
          "t": "Un talent, un ton",
          "d": "Le style détendu de l'humoriste crée une audience fidèle."
        },
        {
          "t": "Une marque qui dure",
          "d": "Trois saisons : le contenu devient un actif, pas une campagne."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La pastille en voyage",
          "d": "Une série courte TF1+ où un talent de la chaîne interviewe un invité pendant un trajet."
        },
        {
          "b": "Budget moyen",
          "t": "Le podcast vidéo",
          "d": "Une saison de conversations filmées pour TF1+ et les plateformes audio, avec une marque de mobilité."
        },
        {
          "b": "Opération signature",
          "t": "Le divertissement récurrent",
          "d": "Un programme de marque pensé pour plusieurs saisons avec un visage de TF1, relayé à l'antenne."
        }
      ],
      "partners": "Channel 4, Electric Robin (Banijay UK), Spark Foundry",
      "quote": {
        "q": "It's rare for advertiser-led content to resonate with audiences at this scale.",
        "who": "Jonathan Hill, Spark Foundry"
      },
      "scope": "regie",
      "oneLine": "Pour promouvoir le train, Rail Delivery Group a produit avec Channel 4 « Train-ing It », une émission où l'humoriste Joe Wilkinson interroge des invités célèbres à bord de trains.",
      "concept": "C'est du divertissement de marque : un vrai programme, diffusé sur YouTube, Channel 4 Streaming, Spotify et Apple Podcasts, où le train est le décor des conversations. La saison 2 sort en novembre 2026 et une saison 3 est commandée. Channel 4 annonce des objectifs dépassés de 94 %."
    },
    {
      "id": "bauhaus-soiree-electorale",
      "chapter": "contenu",
      "edition": "2026-11-10",
      "label": "Finlande · Sanoma · avril 2025",
      "title": "Bauhaus × soirée électorale",
      "image": "",
      "categories": [
        "Content Jacking",
        "Absurd Era"
      ],
      "confidence": "Élevé",
      "scores": [
        8,
        7,
        7,
        6,
        7
      ],
      "facts": [
        "Programme d'humour de marque inséré dans les émissions de résultats électoraux : une « élection des prix »",
        "Relayé à la télé, en streaming, dans la presse et à la radio",
        "Près de 600 000 téléspectateurs en moyenne sur 7 jours ; 1,5 M de vues sur IS.fi (chiffres régie)"
      ],
      "why": "La marque s'invite dans un moment d'audience très suivi avec un contenu humoristique qu'elle ne pourrait pas obtenir par un spot.",
      "forTF1": "Idée transposable aux grandes soirées de TF1 (événements, finales). Vigilance forte : ne jamais créer de confusion avec l'information, surtout sur un sujet électoral.",
      "adaptations": "TV : séquence humoristique de marque dans une soirée spéciale. TF1+ : version longue. Social : extraits. Annonceurs compatibles : bricolage, distribution. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/sanoma-bauhaus/"
        }
      ],
      "pitch": "Le soir des élections, Bauhaus organise sa propre « élection des prix », avec un candidat en costume de directeur des prix.",
      "context": {
        "Annonceur": "Bauhaus (bricolage)",
        "Objectif": "Parler prix tout en construisant la marque",
        "Régie": "Sanoma, premier diffuseur finlandais",
        "Programme": "« Hintavaalit » dans les soirées électorales",
        "Période": "Avril 2025"
      },
      "steps": [
        "Bauhaus s'invite dans les longues émissions de résultats des élections municipales et régionales.",
        "Un programme humoristique parodie la campagne : Martin, « directeur des prix », fait son discours aux électeurs.",
        "Délai serré : la date de l'élection impose une production très rapide.",
        "Sanoma relaie à la télé, en streaming, à la radio et en une de la presse (Helsingin Sanomat, Aamulehti)."
      ],
      "results": [
        {
          "n": "≈ 600 000",
          "l": "téléspectateurs en moyenne sur 7 jours"
        },
        {
          "n": "1,5 M",
          "l": "vues sur le flux IS.fi"
        }
      ],
      "insights": [
        {
          "t": "S'inviter dans le moment",
          "d": "La marque se greffe à un rendez-vous que tout le pays regarde."
        },
        {
          "t": "L'humour désamorce le prix",
          "d": "Parler promo sans faire une promo."
        },
        {
          "t": "Toute la régie mobilisée",
          "d": "TV, streaming, radio et presse amplifient le même gag."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le gag du grand soir",
          "d": "Une pastille humoristique de marque glissée dans une grande soirée événement de TF1 (hors information)."
        },
        {
          "b": "Budget moyen",
          "t": "La parodie de campagne",
          "d": "Une mini-série TF1+ où une marque « fait campagne » pour ses prix, relayée sur les réseaux."
        },
        {
          "b": "Opération signature",
          "t": "La soirée détournée",
          "d": "Une marque construit tout un dispositif humoristique autour d'une finale ou d'une cérémonie, avec relais 360."
        }
      ],
      "partners": "Sanoma, Helsingin Sanomat, IS.fi",
      "quote": {
        "q": "Completely crazy.",
        "who": "Heidi Isohanni, Sanoma, sur l'idée de départ"
      },
      "scope": "regie",
      "oneLine": "Le soir des élections en Finlande, Bauhaus a glissé dans les émissions de résultats sa propre « élection des prix », avec un candidat en costume de directeur des prix.",
      "concept": "Le programme d'humour de marque reprend les codes d'une soirée électorale pour parler des prix bas enseigne. Il a été relayé à la télé, en streaming, dans la presse et à la radio. La régie Sanoma annonce près de 600 000 téléspectateurs en moyenne sur 7 jours et 1,5 M de vues sur IS.fi."
    },
    {
      "id": "avene-marquer-l-invisible",
      "chapter": "contenu",
      "edition": "2026-11-10",
      "label": "France · CANAL+ Brand Solutions · dès avril 2026",
      "title": "Avène × « Marquer l'Invisible »",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Advertising Therapy"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        6,
        8,
        6,
        7
      ],
      "facts": [
        "Film documentaire sur le tatouage, les cicatrices et la réparation émotionnelle, co-construit dès le départ avec la marque",
        "Le produit apparaît dans le parcours des témoignages, sans démonstration",
        "Disponible sur l'appli CANAL+, teaser en pre-roll, relais social ; aucun chiffre publié"
      ],
      "why": "Le film a été conçu avec la marque et le studio de la régie : un récit éditorial où le produit s'insère, et non un spot.",
      "forTF1": "Concurrent français direct : preuve que le contenu de marque documentaire se vend. Pour TF1 PUB, piste de docu ou mini-série sur TF1+ avec un studio créatif intégré.",
      "adaptations": "TV : teaser et diffusion ciblée. TF1+ : documentaire complet. Social : formats courts. Annonceurs compatibles : beauté, santé-bien-être. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/canal-plus-brand-solutions-avene/"
        }
      ],
      "pitch": "Un vrai documentaire sur le tatouage et les cicatrices, où le soin Cicalfate+ trouve sa place sans jamais être démontré.",
      "context": {
        "Annonceur": "Avène, gamme Cicalfate+",
        "Objectif": "Associer le soin à un récit de réparation, sans démonstration produit",
        "Régie": "CANAL+ Brand Solutions · studio LA FACTORY",
        "Programme": "Documentaire « Marquer l'Invisible »",
        "Période": "À partir du 6 avril 2026",
        "Cible": "Femmes 25-54 ans"
      },
      "steps": [
        "Le projet part d'un vrai témoignage sur la peau sensible et le soin après tatouage.",
        "LA FACTORY, le studio de la régie, produit le documentaire avec la marque dès le départ.",
        "Le film complet est disponible sur l'application CANAL+.",
        "Un teaser de 20 s tourne en pre-roll sur STREAM+, HBO Max et Free Ciné.",
        "Le média Clique prolonge sur YouTube, Instagram et TikTok."
      ],
      "results": [],
      "insights": [
        {
          "t": "Le récit avant le produit",
          "d": "Le soin apparaît dans le parcours des témoins, comme un détail vrai."
        },
        {
          "t": "Un studio dans la régie",
          "d": "LA FACTORY montre qu'un concurrent français vend du documentaire de marque."
        },
        {
          "t": "Une diffusion premium",
          "d": "Le streaming payant donne au film un statut éditorial."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le portrait de marque",
          "d": "Un court documentaire TF1+ autour d'un témoignage réel lié à l'univers d'une marque de soin."
        },
        {
          "b": "Budget moyen",
          "t": "La mini-série docu",
          "d": "Trois épisodes sur TF1+ et les réseaux, co-écrits dès le départ avec la marque."
        },
        {
          "b": "Opération signature",
          "t": "Le documentaire événement",
          "d": "Un documentaire long diffusé en seconde partie de soirée, avec avant-première et campagne sociale."
        }
      ],
      "partners": "CANAL+ Brand Solutions, LA FACTORY, Clique, STREAM+",
      "scope": "regie",
      "oneLine": "Avène a co-construit avec CANAL+ Brand Solutions un vrai documentaire sur le tatouage et les cicatrices, dans lequel son soin Cicalfate+ apparaît sans être démontré.",
      "concept": "Le film aborde la réparation émotionnelle, pas le produit : le soin trouve sa place dans le parcours des témoignages. Il est disponible sur l'appli CANAL+, avec un teaser en pre-roll et des relais sur les réseaux. Aucun chiffre n'a été publié."
    },
    {
      "id": "happy-egg-tiny-farmers",
      "chapter": "contenu",
      "edition": "2026-11-10",
      "label": "Royaume-Uni · Channel 4 · janv.–févr. 2026",
      "title": "Happy Egg × « Tiny Farmers »",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        5,
        8,
        7,
        7
      ],
      "facts": [
        "Épisode familial produit pour la marque : quatre enfants relèvent des défis de fermiers",
        "Lancé sur YouTube, extraits sur quatre réseaux, puis épisode complet en streaming et pub TV pour y renvoyer",
        "Premier partenariat de la « Partner Lab », l'équipe de partenariats créatifs de Channel 4 ; aucun résultat publié"
      ],
      "why": "Un programme complet a été produit pour la marque avec la chaîne, diffusé sur plusieurs plateformes.",
      "forTF1": "Montre une équipe dédiée aux partenariats créatifs chez un concurrent. Piste pour TF1 PUB : formats courts familiaux sur TF1+ et YouTube, avec la pub TV comme relais.",
      "adaptations": "TV : spot de renvoi. TF1+ : épisode complet. Social : extraits. Annonceurs compatibles : alimentation, famille. Piste exploratoire.",
      "sources": [
        {
          "label": "Advanced Television",
          "url": "https://www.advanced-television.com/2026/01/19/c4-happy-egg-co-partner-on-branded-entertainment"
        }
      ],
      "pitch": "Quatre enfants apprennent à rendre des poules heureuses : un épisode familial produit pour une marque d'œufs.",
      "context": {
        "Annonceur": "The Happy Egg Co (œufs)",
        "Chaîne": "Channel 4 Partner Lab · agence OMD UK",
        "Programme": "Tiny Farmers, produit par Interstellar TV",
        "Période": "YouTube dès le 19 janv. 2026, streaming le 2 févr."
      },
      "steps": [
        "Deux animatrices connues (Clarkson's Farm, Taskmaster) présentent l'épisode.",
        "Des experts expliquent comment reconnaître une poule heureuse et le parcours de l'œuf.",
        "Quatre enfants relèvent des défis de fermiers et cuisinent.",
        "Lancement sur YouTube, extraits sur Instagram, Facebook, TikTok et YouTube.",
        "Un spot Channel 4 renvoie vers l'épisode, disponible ensuite en streaming."
      ],
      "results": [],
      "insights": [
        {
          "t": "Le produit expliqué par le jeu",
          "d": "La qualité de l'œuf se comprend à travers les défis des enfants."
        },
        {
          "t": "Une équipe dédiée",
          "d": "Le Partner Lab de Channel 4 structure ces partenariats créatifs."
        },
        {
          "t": "Digital d'abord, TV en relais",
          "d": "La pub TV sert à pousser vers le contenu en ligne."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le défi familial",
          "d": "Une pastille TF1+ où des enfants découvrent la fabrication d'un produit du quotidien."
        },
        {
          "b": "Budget moyen",
          "t": "L'épisode de marque",
          "d": "Un épisode familial complet sur TF1+ et YouTube, avec un spot TF1 qui y renvoie."
        },
        {
          "b": "Opération signature",
          "t": "La série du terroir",
          "d": "Une saison familiale autour de filières françaises, avec plusieurs marques alimentaires."
        }
      ],
      "partners": "Channel 4 Partner Lab, Interstellar TV, OMD UK",
      "quote": {
        "q": "Tiny Farmers is what happens when audience-first thinking meets platform-native storytelling.",
        "who": "Emma Parrett, OMD UK"
      },
      "scope": "regie",
      "oneLine": "Pour la marque d'œufs Happy Egg, Channel 4 a produit un épisode familial, « Tiny Farmers », où quatre enfants relèvent des défis de fermiers pour rendre des poules heureuses.",
      "concept": "L'épisode est d'abord lancé sur YouTube, avec des extraits sur quatre réseaux sociaux, puis l'épisode complet passe en streaming, soutenu par une pub TV qui y renvoie. C'est le premier partenariat de la « Partner Lab », l'équipe de partenariats créatifs de Channel 4. Aucun résultat n'a été publié."
    },
    {
      "id": "via-rail-andrew-phung",
      "chapter": "contenu",
      "edition": "2026-11-10",
      "label": "Canada · CBC · 8 semaines (publié en fév. 2026)",
      "title": "VIA Rail × Andrew Phung",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        6,
        5,
        8,
        7,
        8
      ],
      "facts": [
        "Série de contenus longs animée par l'humoriste Andrew Phung, qui voyage à bord du nouveau matériel de VIA Rail",
        "Une même voix en vidéo, audio, réseaux sociaux CBC et avec des influenceurs",
        "Résultats cités : impression globale +10 %, objectif de vues vidéo dépassé de 175 %"
      ],
      "why": "Le concept multiplateforme a été conçu et produit de bout en bout par la régie autour d'un talent de la chaîne.",
      "forTF1": "Exploite un talent connu pour faire changer une perception. Piste pour TF1 PUB avec un visage de l'antenne et une production intégrée.",
      "adaptations": "TV : contenu long diffusé en programme. TF1+ : série de contenus. Social : relais du talent. Annonceurs compatibles : transport, tourisme, automobile. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/cbc-via-rail/"
        }
      ],
      "pitch": "Un humoriste préfère le train à la voiture, en vidéo, en audio et sur les réseaux : VIA Rail change d'image en huit semaines.",
      "context": {
        "Annonceur": "VIA Rail (train voyageurs, Canada)",
        "Objectif": "Lancer la nouvelle flotte et lever les idées reçues face à la voiture",
        "Régie": "CBC/Radio-Canada, production de bout en bout",
        "Talent": "Andrew Phung, acteur et humoriste",
        "Durée": "8 semaines",
        "Budget": "≈ 140 000 $ de production"
      },
      "steps": [
        "Les scénarios partent des galères de la voiture (bouchons, fatigue).",
        "Andrew Phung voyage de Toronto à Ottawa et London à bord des nouvelles rames.",
        "Il montre le concret : grandes fenêtres, allées larges, repas, wifi pour travailler.",
        "Un spot audio de 60 s sur CBC Listen renvoie vers l'espace partenaire.",
        "Vidéo sur CBC.ca et CBC Gem, relais influence sur TikTok et Meta."
      ],
      "results": [
        {
          "n": "+15 %",
          "l": "d'évolution sur l'idée que la voiture est plus pratique (étude brand lift)"
        },
        {
          "n": "+10 %",
          "l": "sur l'image globale de VIA Rail"
        },
        {
          "n": "175 %",
          "l": "de l'objectif de vues vidéo atteint"
        }
      ],
      "insights": [
        {
          "t": "Montrer plutôt qu'affirmer",
          "d": "On voit le confort du train au lieu de l'entendre vanter."
        },
        {
          "t": "Une seule voix partout",
          "d": "Le même talent en vidéo, audio et social rend le message cohérent."
        },
        {
          "t": "Petit budget",
          "d": "Environ 140 000 $ pour des résultats d'image mesurés."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le carnet de route",
          "d": "Un talent TF1 raconte un trajet en format court sur TF1+ et les réseaux."
        },
        {
          "b": "Budget moyen",
          "t": "Le match des trajets",
          "d": "Une mini-série où le talent compare deux façons de voyager, avec une marque de mobilité."
        },
        {
          "b": "Opération signature",
          "t": "La tournée",
          "d": "Une série multi-villes avec un visage de l'antenne, déclinée en vidéo, audio et influence."
        }
      ],
      "partners": "CBC/Radio-Canada, Narcity",
      "quote": {
        "q": "People needed a clearer picture of the onboard experience, not a louder claim about it.",
        "who": "EGTA, sur l'insight de la campagne"
      },
      "scope": "regie",
      "oneLine": "VIA Rail et CBC ont lancé pendant huit semaines une série de contenus animée par l'humoriste Andrew Phung, qui voyage à bord du nouveau matériel de la compagnie et dit préférer le train à la voiture.",
      "concept": "La même voix se retrouve en vidéo, en audio, sur les réseaux de CBC et chez des influenceurs, pour changer l'image de VIA Rail. Les résultats cités sont une impression globale en hausse de 10 % et un objectif de vues vidéo dépassé de 175 %."
    },
    {
      "id": "channel-4-enhance",
      "chapter": "formats",
      "edition": "2026-11-10",
      "label": "Royaume-Uni · Channel 4 Sales · juin 2026",
      "title": "Channel 4 Enhance",
      "image": "",
      "categories": [
        "Personalization Power",
        "Streaming Routine"
      ],
      "confidence": "Moyen",
      "scores": [
        6,
        8,
        9,
        9,
        8
      ],
      "facts": [
        "Transforme une pub TV existante en format interactif sur le streaming, sans nouvelle production",
        "4 formats : localisation, QR code, compte à rebours, carrousel de produits (technologie BrightLine)",
        "Coût média : +3 £ de CPM ; première campagne en ligne en 5 jours ouvrés ; aucun résultat publié"
      ],
      "why": "Format publicitaire spécial sur l'inventaire streaming : la pub existante devient interactive.",
      "forTF1": "Très transposable sur TF1+ : rend les spots existants actionnables à faible coût. À étudier avec les équipes produit et les partenaires techniques.",
      "adaptations": "TV : spot réutilisé. TF1+ : version interactive. Annonceurs compatibles : retail, automobile, banque. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/channel-4-enhance/"
        }
      ],
      "pitch": "N'importe quel spot TV devient interactif sur le streaming de Channel 4, sans tourner une image de plus.",
      "context": {
        "Annonceurs": "Solmar Villas, Easy Bathrooms (exemples)",
        "Objectif": "Rendre les spots existants actionnables sur la TV connectée",
        "Régie": "Channel 4 Sales · technologie BrightLine",
        "Format": "Enhance, 4 formats CTV",
        "Lancement": "Juin 2026"
      },
      "steps": [
        "L'annonceur choisit un format : géolocalisation, QR code, compte à rebours ou carrousel produits.",
        "Il fournit son spot validé et les éléments (lien, couleurs, appel à l'action).",
        "Channel 4 gère tout : média, adaptation, validation Clearcast, mise en ligne.",
        "Aucuns frais de production : +3 £ de CPM.",
        "Mesure possible avec Adalyser (visites et conversions liées à la diffusion)."
      ],
      "results": [
        {
          "n": "5 jours",
          "l": "ouvrés entre la réservation et la mise en ligne (Solmar)"
        },
        {
          "n": "+3 £",
          "l": "de CPM, sans frais de production"
        }
      ],
      "insights": [
        {
          "t": "Zéro production",
          "d": "La barrière à l'entrée disparaît : on réutilise le spot existant."
        },
        {
          "t": "La TV devient cliquable",
          "d": "QR code et carrousel transforment l'écran en point de contact."
        },
        {
          "t": "Un parcours simple",
          "d": "Un seul interlocuteur gère tout, de l'adaptation à la mesure."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le QR code TF1+",
          "d": "Ajouter un QR code et un appel à l'action à un spot existant sur TF1+, pour un surcoût de CPM."
        },
        {
          "b": "Budget moyen",
          "t": "Le compte à rebours",
          "d": "Un habillage compte à rebours pour les soldes ou les lancements, sur l'inventaire streaming."
        },
        {
          "b": "Opération signature",
          "t": "La gamme interactive",
          "d": "Une offre packagée de formats CTV interactifs avec un partenaire technique et une mesure des conversions."
        }
      ],
      "partners": "Channel 4 Sales, BrightLine, Clearcast, Adalyser",
      "quote": {
        "q": "Enhance is a pivotal addition to our product suite.",
        "who": "David Amodio, Channel 4"
      },
      "scope": "regie",
      "oneLine": "Channel 4 Enhance permet de transformer un spot TV déjà tourné en pub interactive sur le streaming de Channel 4, sans tourner une image de plus.",
      "concept": "Le spot existant reçoit un habillage interactif parmi quatre formats : localisation, QR code, compte à rebours ou carrousel de produits (technologie BrightLine). Le surcoût média est de 3 £ de CPM et une première campagne peut être en ligne en 5 jours ouvrés. Aucun résultat n'a encore été publié."
    },
    {
      "id": "m6-spots-crees-par-l-ia",
      "chapter": "formats",
      "edition": "2026-11-10",
      "label": "France · M6 Unlimited · mai 2026 (test)",
      "title": "M6 : spots créés par l'IA",
      "image": "",
      "categories": [
        "Personalization Power"
      ],
      "confidence": "Élevé",
      "scores": [
        5,
        8,
        9,
        8,
        8
      ],
      "facts": [
        "Test avec Waymark : l'IA génère une vidéo à partir du brief et des éléments de marque, vérifiée par la régie",
        "Le spot est pré-testé (Toluna) face à la base de référence de M6 Unlimited",
        "Pré-test : top 20 % en attention et rappel de marque ; résonance émotionnelle dans les 40 % les plus bas"
      ],
      "why": "Innovation de format côté régie plutôt qu'opération pour une marque : elle ouvre la TV et le streaming à des annonceurs plus petits.",
      "forTF1": "Signal concurrent en France : M6 abaisse le ticket d'entrée pour les PME. À suivre de près, en lien avec les réflexions sur l'achat simplifié.",
      "adaptations": "TV : spot généré puis validé. TF1+ : même spot en streaming. Annonceurs compatibles : PME, commerce local. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/m6-unlimited-ai-spot-creation/"
        }
      ],
      "pitch": "M6 Unlimited teste un spot entièrement produit par l'IA pour une petite marque, et le passe au pré-test avant diffusion.",
      "context": {
        "Annonceur": "INGA (éponges réutilisables)",
        "Objectif": "Ouvrir la TV et le streaming aux PME",
        "Régie": "M6 Unlimited, inventaire M6+",
        "Outils": "Waymark (création), Toluna (pré-test)",
        "Date": "Publié en mai 2026 (test)"
      },
      "steps": [
        "INGA fournit son brief, ses messages, son identité et l'adresse de son site.",
        "Waymark génère un spot à partir de ces éléments.",
        "M6 Unlimited vérifie qu'il est adapté à la TV.",
        "Le spot est pré-testé avec Toluna face à la base de référence.",
        "Il entre ensuite dans un plan média ; un « ad manager » pour PME est en préparation."
      ],
      "results": [
        {
          "n": "Top 20 %",
          "l": "attention, rappel de marque et du message"
        },
        {
          "n": "Top 40 %",
          "l": "sympathie"
        },
        {
          "n": "Bas 40 %",
          "l": "résonance émotionnelle, point à améliorer"
        }
      ],
      "insights": [
        {
          "t": "Le ticket d'entrée baisse",
          "d": "Sans budget de production, une PME peut passer en TV."
        },
        {
          "t": "L'IA, mais testée",
          "d": "Le pré-test sécurise la qualité avant d'acheter de l'espace."
        },
        {
          "t": "Signal concurrent direct",
          "d": "M6 prépare un parcours d'achat simplifié pour les nouveaux annonceurs."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le spot express",
          "d": "Un spot généré à partir des éléments de marque, validé par TF1 PUB, pour une première campagne TF1+."
        },
        {
          "b": "Budget moyen",
          "t": "Le pack première TV",
          "d": "Création assistée, pré-test et plan TF1+ ciblé vendus ensemble aux PME."
        },
        {
          "b": "Opération signature",
          "t": "La plateforme self-service",
          "d": "Un parcours d'achat en ligne avec création assistée par IA, pré-test et reporting."
        }
      ],
      "partners": "M6 Unlimited, Waymark, Toluna",
      "quote": {
        "q": "Clean, sober, clear and quick.",
        "who": "Retour du pré-test sur le spot"
      },
      "scope": "regie",
      "oneLine": "M6 Unlimited a testé un spot entièrement créé par l'IA pour une petite marque (INGA), puis l'a soumis à un pré-test d'efficacité avant diffusion.",
      "concept": "Avec l'outil Waymark, l'IA génère la vidéo à partir du brief et des éléments de marque, et la régie la vérifie. Le spot est ensuite pré-testé (Toluna) face à la base de référence de M6 Unlimited : il se place dans le top 20 % en attention et en rappel de marque, mais dans les 40 % les plus bas en résonance émotionnelle."
    },
    {
      "id": "ster-bloc-de-pub-de-noel-en-prime-time",
      "chapter": "formats",
      "edition": "2026-11-10",
      "label": "Pays-Bas · Ster · 6 déc. 2025",
      "title": "Ster : bloc de pub de Noël en prime time",
      "image": "",
      "categories": [],
      "confidence": "Élevé",
      "scores": [
        8,
        6,
        8,
        8,
        7
      ],
      "facts": [
        "Nouvelles pubs de Noël regroupées en blocs en prime time sur NPO 1, introduits par la mascotte de la chaîne",
        "1er bloc juste après le journal, avant Wie is de Mol ; un 2e bloc ajouté face à la demande",
        "Visionnage différé +120 % et rétention 74 % contre 66 % pour le 1er bloc (chiffres régie)"
      ],
      "why": "Le bloc publicitaire est devenu un rendez-vous de programmation, avec une ouverture créée pour l'occasion.",
      "forTF1": "L'ad break comme événement : cohérent avec Noël ou la rentrée sur TF1. Demande l'accord de la chaîne sur la grille et un habillage éditorial.",
      "adaptations": "TV : bloc événementiel avec habillage de la chaîne. TF1+ : replay du bloc. Social : teasers. Annonceurs compatibles : distribution, jouets, FMCG. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/ster-christmas-break/"
        }
      ],
      "pitch": "Toutes les nouvelles pubs de Noël réunies dans un bloc en prime time : la coupure devient un rendez-vous qu'on ne zappe pas.",
      "context": {
        "Annonceurs": "Plusieurs annonceurs néerlandais",
        "Régie": "Ster, sur NPO 1",
        "Créneau": "Après le NOS Journaal, avant Wie is de Mol",
        "Date": "Samedi 6 décembre 2025"
      },
      "steps": [
        "Au lieu de disperser les pubs de Noël, Ster les regroupe en blocs dédiés.",
        "Premier bloc vers 20h20, entre le journal et un jeu très suivi.",
        "Face à la demande des annonceurs, un second bloc est ajouté vers 21h25.",
        "Chaque bloc s'ouvre avec la mascotte historique de Ster, Loeki de Leeuw.",
        "L'événement est annoncé à la TV, à la radio et en ligne."
      ],
      "results": [
        {
          "n": "+120 %",
          "l": "de visionnage différé pour le 1er bloc"
        },
        {
          "n": "74 %",
          "l": "de rétention, contre 66 % habituellement"
        },
        {
          "n": "+53 %",
          "l": "de visionnage différé pour le 2e bloc"
        }
      ],
      "insights": [
        {
          "t": "La coupure devient programme",
          "d": "Un habillage et une annonce suffisent à créer l'attente."
        },
        {
          "t": "La force du collectif",
          "d": "Toutes les pubs de Noël ensemble font un événement."
        },
        {
          "t": "Les chiffres suivent",
          "d": "Le public reste et revoit en différé."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La coupure annoncée",
          "d": "Un écran publicitaire de Noël habillé et annoncé sur TF1, avant un grand programme de décembre."
        },
        {
          "b": "Budget moyen",
          "t": "Le bloc des nouveautés",
          "d": "Un rendez-vous réservé aux nouvelles campagnes de fêtes, avec relais TF1+ et réseaux."
        },
        {
          "b": "Opération signature",
          "t": "La nuit des pubs de Noël",
          "d": "Une soirée événement autour des campagnes de fêtes, avec une mascotte ou un visage TF1."
        }
      ],
      "partners": "Ster, NPO 1",
      "quote": {
        "q": "Creating dedicated, clearly framed advertising moments can turn commercial breaks into television events.",
        "who": "EGTA"
      },
      "scope": "regie",
      "oneLine": "Ster a regroupé les nouvelles pubs de Noël dans un bloc spécial en prime time sur NPO 1, présenté par la mascotte de la chaîne, juste après le journal.",
      "concept": "L'idée est de faire de la coupure un rendez-vous que le public attend, plutôt qu'un moment à éviter. Le premier bloc passait avant Wie is de Mol, et un deuxième a été ajouté face à la demande. La régie annonce +120 % de visionnage différé et 74 % de rétention contre 66 % pour le premier bloc."
    },
    {
      "id": "bmw-ix3-le-compte-a-rebours",
      "chapter": "formats",
      "edition": "2026-11-10",
      "label": "Belgique · Ads & Data · date non précisée",
      "title": "BMW iX3 : le compte à rebours",
      "image": "",
      "categories": [],
      "confidence": "Moyen",
      "scores": [
        7,
        6,
        7,
        8,
        6
      ],
      "facts": [
        "Film ininterrompu de 2 minutes en prime time qui compte jusqu'à 805 km d'autonomie",
        "Diffusé seulement deux fois, juste avant le jeu ; ensuite billboards de 7 s et spots de 30 s",
        "Plus d'un million de téléspectateurs par épisode du programme associé ; autres résultats qualitatifs"
      ],
      "why": "Format spécial conçu autour d'un chiffre-clé du produit et d'un emplacement précis dans la grille.",
      "forTF1": "Facile à reproduire pour un lancement produit : un moment unique et rare, puis des relais courts. Peu de production nécessaire.",
      "adaptations": "TV : film unique en prime time. TF1+ : relais courts. Annonceurs compatibles : automobile, tech. Piste exploratoire.",
      "sources": [
        {
          "label": "EGTA — cas créatif",
          "url": "https://www.egta.com/ads-and-data-bmw/"
        }
      ],
      "pitch": "Deux minutes sans coupure, un compteur qui grimpe jusqu'à 805 km : l'autonomie de la BMW iX3 devient un moment de télé.",
      "context": {
        "Annonceur": "BMW Belux, iX3 électrique",
        "Objectif": "Mettre l'autonomie au cœur du lancement",
        "Régie": "Ads & Data (Brand Studio) · Play Media",
        "Programme": "Juste avant « De Slimste Mens Ter Wereld », prime time"
      },
      "steps": [
        "Un film de 2 min en lead-in du jeu : un compte à rebours monte jusqu'à 805 km.",
        "Il n'est diffusé que deux fois, pour garder l'effet d'événement.",
        "Ensuite, des billboards de 7 s encadrent les épisodes.",
        "Des spots de 30 s reprennent le même repère visuel jusqu'à la fin de la campagne."
      ],
      "results": [
        {
          "n": "1 M+",
          "l": "de téléspectateurs par épisode du programme associé"
        },
        {
          "n": "×2",
          "l": "diffusions seulement du film de 2 minutes"
        }
      ],
      "insights": [
        {
          "t": "Un chiffre devient une histoire",
          "d": "805 km se vivent au lieu de se lire."
        },
        {
          "t": "La rareté fait l'événement",
          "d": "Deux diffusions seulement : on en parle."
        },
        {
          "t": "Un repère qui dure",
          "d": "Les formats courts gardent le même code visuel."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le repère visuel",
          "d": "Des billboards TF1 qui reprennent un chiffre clé du produit, épisode après épisode."
        },
        {
          "b": "Budget moyen",
          "t": "Le film unique",
          "d": "Un film long ininterrompu juste avant un grand jeu, diffusé une ou deux fois seulement."
        },
        {
          "b": "Opération signature",
          "t": "Le lancement en prime",
          "d": "Film événement, billboards et TF1+ autour d'un lancement produit, sur plusieurs semaines."
        }
      ],
      "partners": "Ads & Data, Play Media",
      "quote": {
        "q": "Working with Ads & Data allowed us to showcase the new BMW iX3 at the perfect moment.",
        "who": "Georges Pagalis, BMW Belux"
      },
      "scope": "regie",
      "oneLine": "Pour lancer la BMW iX3, un film de 2 minutes sans coupure, diffusé en prime time, montre un compteur qui grimpe jusqu'à 805 km d'autonomie.",
      "concept": "Le film n'a été diffusé que deux fois, juste avant le jeu du programme associé, pour en faire un vrai moment de télé. Il a ensuite été prolongé par des billboards de 7 secondes et des spots de 30 secondes. Le programme associé réunit plus d'un million de téléspectateurs par épisode."
    },
    {
      "id": "love-island-usa-21-marques",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "États-Unis · Peacock · juin 2026",
      "title": "Love Island USA : 21 marques",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        6,
        5,
        9,
        7,
        9
      ],
      "facts": [
        "Produits dans la villa : CeraVe, Maybelline, Motorola…",
        "Une marque sponsorise l'émission d'après",
        "Des pubs tournées avec les candidats"
      ],
      "why": "Les marques sont intégrées au programme et prolongées avec les candidats.",
      "forTF1": "Montre qu'un programme fort peut accueillir de nombreuses marques sans perdre en crédibilité. Repris de la veille précédente, à revérifier.",
      "adaptations": "Piste : intégration de produits dans un programme de téléréalité, avec des pubs tournées avec les candidats. À valider.",
      "sources": [
        {
          "label": "NBCUniversal — communiqué",
          "url": "https://www.nbcuniversal.com/article/love-island-usa-season-8-heats-fiji-sizzling-brand-lineup"
        },
        {
          "label": "Axios",
          "url": "https://www.axios.com/2026/06/01/love-island-usa-advertisers-season-8"
        }
      ],
      "pitch": "Dans la villa de Love Island USA, chaque moment est une place pour une marque, sans que l'émission perde son charme.",
      "context": {
        "Plateforme": "Peacock (NBCUniversal)",
        "Programme": "Love Island USA, saison 8",
        "Diffusion": "Dès le 2 juin 2026, 6 jours sur 7 pendant 7 semaines",
        "Marques": "CeraVe, Maybelline, Motorola, poppi, Coffee mate, Cuervo… et des partenaires médias"
      },
      "steps": [
        "Intégrations dans la vie de la villa : préparation, recouplages, le fameux « I've got a text! ».",
        "Aftersun : Cuervo permet aux fans de poser leurs questions aux candidats éliminés.",
        "Des spots tournés avec les stars de la franchise pour Hellmann's, M&M'S, Nescafé…",
        "Commerce intégré et Pause Ads cliquables sur Peacock.",
        "Hors écran : événements, collaborations sous licence et éditions limitées."
      ],
      "results": [
        {
          "n": "223 M",
          "l": "interactions sociales sur la saison 7"
        },
        {
          "n": "+643 %",
          "l": "de mémorisation de marque pour les partenaires intégrés (saison 7)"
        },
        {
          "n": "N°1",
          "l": "série en streaming auprès de la génération Z (saison 7)"
        }
      ],
      "insights": [
        {
          "t": "Un programme quotidien",
          "d": "Six jours sur sept : la marque vit avec le public tout l'été."
        },
        {
          "t": "Chaque rituel a sa marque",
          "d": "Le texto, la préparation, l'after : des places naturelles."
        },
        {
          "t": "De l'écran à l'achat",
          "d": "Commerce intégré et éditions limitées prolongent l'émission."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le rituel sponsorisé",
          "d": "Un moment récurrent d'une téléréalité TF1 ou TF1+ porté par une marque."
        },
        {
          "b": "Budget moyen",
          "t": "L'after des éliminés",
          "d": "Un format TF1+ où les candidats éliminés répondent aux fans, offert par une marque."
        },
        {
          "b": "Opération signature",
          "t": "L'écosystème de marques",
          "d": "Plusieurs marques intégrées dans un programme quotidien, avec spots avec le casting et éditions limitées."
        }
      ],
      "partners": "NBCUniversal, Peacock",
      "quote": {
        "q": "Love Island is airing six days a week for seven weeks, so that level of fandom is incredibly powerful for brands.",
        "who": "Karen Kovacs, NBCUniversal"
      },
      "scope": "inspiration",
      "oneLine": "Sur Peacock, la régie a vendu à 21 marques une place dans Love Island USA : leurs produits sont dans la villa, l'une sponsorise l'émission d'après, d'autres tournent des pubs avec les candidats.",
      "concept": "Concrètement, CeraVe, Maybelline ou Motorola sont présents dans le quotidien de la villa, Cuervo sponsorise l'« Aftersun » qui suit l'émission, des pubs sont tournées avec les candidats, des Pause Ads sont achetables en direct et des événements prolongent le tout. L'émission garde son charme parce que chaque marque a un moment précis dans le rituel du programme. Les partenaires intégrés affichent +643 % de mémorisation."
    },
    {
      "id": "walmart-the-muppets",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "États-Unis · Walmart × Disney · 26 oct. 2026",
      "title": "Walmart × The Muppets",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Brand Fandoms"
      ],
      "confidence": "Moyen",
      "scores": [
        8,
        6,
        8,
        4,
        7
      ],
      "facts": [
        "Réinterprétation du téléfilm « The Muppet Christmas Carol » : Scrooge est joué par le porte-parole de la marque, Walton Goggins",
        "Trois nouveaux fantômes qui incarnent l'offre de fêtes : produits, offres, livraison express",
        "Réalisé avec Disney et The Muppets Studio ; diffusion et résultats non précisés dans l'extrait consulté"
      ],
      "why": "Une licence connue est détournée pour raconter l'offre de la marque, en s'appuyant sur un univers que le public aime déjà.",
      "forTF1": "Illustre l'exploitation d'une licence de film ou de programme par une marque. Pour TF1 PUB : piste autour d'un programme ou d'un film de la chaîne, sous réserve de droits très encadrés.",
      "adaptations": "TV : court récit de fêtes en prime time. TF1+ : version longue. Social : extraits. Annonceurs compatibles : distribution, jouets. Piste exploratoire à valider (licences).",
      "sources": [
        {
          "label": "Adweek",
          "url": "https://www.adweek.com/creativity/walmart-brings-the-muppets-and-walton-goggins-together-for-its-own-holiday-carol/"
        }
      ],
      "pitch": "Walmart rejoue le Noël des Muppets : trois nouveaux fantômes présentent ses cadeaux, ses offres et sa livraison express.",
      "context": {
        "Annonceur": "Walmart (plateforme « Who Knew? »)",
        "Licence": "The Muppet Christmas Carol, avec Disney et The Muppets Studio",
        "Talent": "Walton Goggins en Scrooge",
        "Date": "Lancement le 26 octobre 2026"
      },
      "steps": [
        "Le film de 1992 est réinterprété en « A Who Knew Carol ».",
        "Le porte-parole de la marque joue Scrooge au milieu des Muppets.",
        "Trois nouveaux fantômes incarnent l'offre : cadeaux, offres à venir, livraison express."
      ],
      "results": [],
      "insights": [
        {
          "t": "Une histoire déjà aimée",
          "d": "La licence apporte l'émotion ; la marque n'a plus qu'à s'y glisser."
        },
        {
          "t": "L'offre devient un personnage",
          "d": "Chaque fantôme est un argument commercial, mais on rit."
        },
        {
          "t": "Le talent de la marque",
          "d": "Le porte-parole habituel relie la campagne aux précédentes."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le clin d'œil",
          "d": "Un spot de fêtes qui reprend les codes d'un programme culte de TF1, avec l'accord des ayants droit."
        },
        {
          "b": "Budget moyen",
          "t": "Le conte revisité",
          "d": "Un court récit de Noël avec une licence connue, diffusé en prime time et sur TF1+."
        },
        {
          "b": "Opération signature",
          "t": "Le téléfilm de marque",
          "d": "Un téléfilm de fêtes coproduit avec une marque et un studio de licences."
        }
      ],
      "partners": "Disney, The Muppets Studio",
      "scope": "inspiration",
      "oneLine": "Walmart a réinterprété le film de Noël « The Muppet Christmas Carol » avec Disney : Scrooge y est joué par son porte-parole Walton Goggins, face à trois nouveaux fantômes.",
      "concept": "Les trois fantômes incarnent l'offre de fêtes de l'enseigne : les produits, les offres et la livraison express. La marque emprunte une histoire que le public connaît déjà pour présenter ses cadeaux. La diffusion et les résultats ne sont pas précisés dans l'extrait consulté."
    },
    {
      "id": "harry-potter-snapchat",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "Plateforme · HBO Max × Snapchat · dès sept. 2026",
      "title": "Harry Potter × Snapchat",
      "image": "",
      "categories": [
        "Brand Fandoms",
        "IRL Advertising"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        8,
        6,
        6,
        6
      ],
      "facts": [
        "12 filtres, tenues d'avatars et miroirs dans des événements fans",
        "4 mois de lancement avant la série, le 25 décembre",
        "La série se lance là où sont les jeunes"
      ],
      "why": "Activation sociale conçue pour le lancement d'une série, jouant sur le fandom.",
      "forTF1": "Inspire un lancement « social first » d'un programme de TF1+. Repris de la veille précédente, à revérifier.",
      "adaptations": "Piste : filtres et contenus fans pour un lancement de programme. À valider.",
      "sources": [
        {
          "label": "Social Media Today",
          "url": "https://socialmediatoday.com/news/snapchat-introduces-harry-potter-themed-activations/829382"
        },
        {
          "label": "SocialDay",
          "url": "https://socialday.live/features/snapchats-harry-potter-activation-shows-what-pre-launch-marketing-looks-like-whe"
        }
      ],
      "pitch": "Quatre mois avant la série, Snapchat ouvre les portes de Poudlard : filtres, tenues d'avatar et miroirs magiques.",
      "context": {
        "Marques": "Snapchat × HBO Max",
        "Licence": "Nouvelle série Harry Potter de HBO",
        "Date": "Activations dès le 1er sept. 2026, série à Noël",
        "Pays": "Événements aux États-Unis et au Royaume-Uni"
      },
      "steps": [
        "12 filtres en réalité augmentée autour de l'histoire.",
        "Fonds de discussion et tenues Bitmoji de sorcier.",
        "Événements fans avec des Snap Mirrors pour essayer les tenues de sa maison.",
        "Icônes d'application aux couleurs de la série."
      ],
      "results": [
        {
          "n": "12",
          "l": "filtres AR au lancement"
        }
      ],
      "insights": [
        {
          "t": "Le fandom avant la série",
          "d": "On fait vivre l'univers des mois avant la sortie."
        },
        {
          "t": "Jouer plutôt que regarder",
          "d": "Le public s'approprie la licence avec son avatar."
        },
        {
          "t": "Du digital au réel",
          "d": "Les miroirs relient l'appli et les événements."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le filtre de lancement",
          "d": "Un filtre AR pour le lancement d'une saison d'un programme TF1, porté par une marque."
        },
        {
          "b": "Budget moyen",
          "t": "Le pré-lancement social",
          "d": "Plusieurs semaines de contenus fans sur les réseaux avant une nouvelle série TF1+."
        },
        {
          "b": "Opération signature",
          "t": "L'univers à vivre",
          "d": "Filtres, événement fans et produits dérivés autour d'une fiction phare, avec une marque partenaire."
        }
      ],
      "partners": "Snapchat, HBO Max",
      "scope": "inspiration",
      "oneLine": "Quatre mois avant la sortie de la série Harry Potter sur HBO Max (le 25 décembre), Snapchat lance 12 filtres de réalité augmentée, des tenues d'avatars et des événements pour fans autour de Poudlard.",
      "concept": "L'idée est de faire vivre l'univers là où se trouvent les jeunes, bien avant que la série n'existe à l'écran. Les utilisateurs essaient filtres, tenues Bitmoji et « miroirs magiques », et des événements fans prolongent l'expérience. Le lancement de la série est ainsi préparé par quatre mois de fandom sur la plateforme."
    },
    {
      "id": "l-oreal-la-serie-elle",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "États-Unis · Prime Video · juillet 2026",
      "title": "L'Oréal × la série Elle",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Moyen",
      "scores": [
        6,
        5,
        7,
        6,
        7
      ],
      "facts": [
        "L'Oréal Paris est sponsor maquillage officiel de « Elle », préquelle de « La Revanche d'une blonde »",
        "Les produits de l'époque (1995) sont intégrés à la série",
        "Prolongé par une campagne 360, des pop-ups, une expérience fans et des vidéos « Get Ready With Me »"
      ],
      "why": "Les produits sont intégrés à l'histoire d'une série, avec des prolongements hors écran.",
      "forTF1": "Placement de produit prolongé hors écran : transposable à une fiction TF1 avec une marque beauté, sous réserve des règles de placement de produit.",
      "adaptations": "Piste : placement de produit prolongé par du retail et du social. À valider.",
      "sources": [
        {
          "label": "Cosmetics Business",
          "url": "https://cosmeticsbusiness.com/loreal-paris-partners-with-legally-blonde-prequel-elle"
        },
        {
          "label": "Trend Hunter",
          "url": "https://www.trendhunter.com/trends/prime-video-series"
        }
      ],
      "pitch": "L'Oréal Paris maquille la jeune Elle Woods de 1995, avec les produits de l'époque, à l'écran et hors écran.",
      "context": {
        "Annonceur": "L'Oréal Paris, sponsor maquillage officiel",
        "Série": "Elle, préquelle de « La Revanche d'une blonde »",
        "Plateforme": "Prime Video",
        "Date": "Lancement le 1er juillet 2026"
      },
      "steps": [
        "Les produits de l'époque sont intégrés à la série : mascara Voluminous, Colour Riche, True Match.",
        "Campagne 360 sur les réseaux, pop-ups et grands événements.",
        "Présence à l'avant-première mondiale et dans « Elle World », expérience immersive fans.",
        "Vidéos « Get Ready With Me » vues par Elle Woods."
      ],
      "results": [],
      "insights": [
        {
          "t": "Le produit d'époque",
          "d": "La marque fait partie de l'histoire, au sens propre."
        },
        {
          "t": "La nostalgie comme levier",
          "d": "Une licence culte touche plusieurs générations."
        },
        {
          "t": "Le personnage parle la langue des réseaux",
          "d": "Le GRWM d'Elle Woods rend l'héroïne contemporaine."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le GRWM du personnage",
          "d": "Des vidéos « Get Ready With Me » d'un personnage d'une série TF1, avec une marque beauté."
        },
        {
          "b": "Budget moyen",
          "t": "Le partenaire officiel",
          "d": "Une marque devient partenaire officiel d'une fiction TF1 : produits à l'écran et contenus du casting."
        },
        {
          "b": "Opération signature",
          "t": "L'expérience fans",
          "d": "Avant-première, pop-up et campagne 360 autour d'une fiction événement."
        }
      ],
      "partners": "Prime Video",
      "quote": {
        "q": "Natural, undeniable synergy.",
        "who": "Laura Branik, L'Oréal Paris USA"
      },
      "scope": "inspiration",
      "oneLine": "L'Oréal Paris est le sponsor maquillage officiel de « Elle » (Prime Video), la préquelle de « La Revanche d'une blonde », et les produits de 1995 apparaissent dans la série.",
      "concept": "Le maquillage de la jeune Elle Woods est celui de l'époque, ce qui relie la marque à l'histoire sans casser le récit. L'opération est prolongée hors écran par une campagne 360, des pop-ups, une expérience pour les fans et des vidéos « Get Ready With Me »."
    },
    {
      "id": "netflix-american-express",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "Plateforme · Netflix · 25 nov. 2026",
      "title": "Netflix × American Express",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "Faible",
      "scores": [
        7,
        6,
        6,
        4,
        7
      ],
      "facts": [
        "Netflix diffuse le premier match NFL de la veille de Thanksgiving (Packers – Rams, 25 nov. 2026)",
        "U2 assure le show de la mi-temps",
        "Le rôle d'American Express n'est pas confirmé par les pages consultées (Netflix Tudum, SVG)"
      ],
      "why": "Un événement live nommé d'après la marque, avec un concert pensé pour l'occasion.",
      "forTF1": "À vérifier avant toute utilisation : sans confirmation du rôle de la marque, la fiche sert seulement d'exemple d'événement live créé par une plateforme.",
      "adaptations": "Piste : nommage d'un événement live. À valider (droits et budget).",
      "sources": [
        {
          "label": "Netflix Tudum",
          "url": "https://www.netflix.com/tudum/articles/nfl-thanksgiving-eve-game-2026-halftime-u2"
        },
        {
          "label": "NFL.com",
          "url": "https://www.nfl.com/news/u2-to-headline-halftime-of-nfl-s-first-ever-thanksgiving-eve-gameday-live-on-netflix"
        }
      ],
      "pitch": "Netflix diffuse le tout premier match NFL de la veille de Thanksgiving, avec U2 à la mi-temps.",
      "context": {
        "Plateforme": "Netflix, inclus dans tous les abonnements",
        "Événement": "Packers – Rams, SoFi Stadium",
        "Date": "25 novembre 2026",
        "Marque": "American Express : rôle non confirmé par les pages consultées"
      },
      "steps": [
        "Premier match NFL programmé la veille de Thanksgiving.",
        "U2 joue la mi-temps pour les 50 ans du groupe.",
        "Le match fait partie d'une série de rendez-vous NFL sur Netflix cette saison."
      ],
      "results": [],
      "insights": [
        {
          "t": "Créer un nouveau rendez-vous",
          "d": "Une date inédite devient un événement."
        },
        {
          "t": "Sport et musique",
          "d": "La mi-temps élargit l'audience au-delà des fans de foot."
        },
        {
          "t": "À vérifier",
          "d": "Le nommage par American Express n'apparaît pas dans les sources consultées."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La mi-temps offerte",
          "d": "Une séquence musicale d'un grand direct TF1 présentée par une marque."
        },
        {
          "b": "Budget moyen",
          "t": "Le rendez-vous nommé",
          "d": "Un événement récurrent de TF1+ porté par une marque, avec son nom dans le titre."
        },
        {
          "b": "Opération signature",
          "t": "L'événement live",
          "d": "Une soirée spéciale construite avec une marque autour d'un concert ou d'un show, avec droits à valider."
        }
      ],
      "partners": "Netflix, NFL",
      "scope": "inspiration",
      "oneLine": "Netflix diffuse en direct le premier match NFL de la veille de Thanksgiving (Packers – Rams, le 25 novembre 2026), avec un concert de U2 à la mi-temps.",
      "concept": "Netflix crée ainsi un nouveau rendez-vous qui mêle sport et musique. Attention : le rôle d'American Express dans l'opération n'est pas confirmé par les pages consultées (Netflix Tudum, SVG), la fiche est donc à lire comme un signal sur l'événement, pas comme une opération de marque établie."
    },
    {
      "id": "sol-de-janeiro-the-guest-list",
      "chapter": "contenu",
      "edition": "2026-11-11",
      "label": "Royaume-Uni · Channel 4 Sales · 13 oct. 2026 (diffusion dès le 24 oct.)",
      "title": "Sol de Janeiro × The Guest List",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Brand Fandoms"
      ],
      "confidence": "Élevé",
      "scores": [
        8,
        8,
        8,
        6,
        8
      ],
      "pitch": "Une série verticale de fiction où chaque héroïne incarne un parfum de la marque : Channel 4 vend un micro-drame, pas un spot.",
      "facts": [
        "Première série verticale de marque de Channel 4 : « The Guest List », 5 épisodes courts, en ligne dès le 24 octobre 2026 sur les comptes Meta, TikTok et YouTube de Channel 4",
        "Le récit passe par le groupe de discussion de quatre amies d'une vingtaine d'années à Londres ; chaque personnage s'inspire d'un parfum de la gamme Intense Mist de Sol de Janeiro",
        "Produite par curly media, partenariat négocié par Zenith UK ; aucun chiffre d'audience ni de budget publié"
      ],
      "why": "La régie commissionne une fiction conçue autour de la marque : le produit inspire les personnages au lieu d'être montré dans un spot.",
      "forTF1": "Très transposable pour TF1+ et les réseaux sociaux de TF1 : le micro-drame vertical cible les 25-45 ans à faible coût de production. Points de vigilance : droits des comédiens, séparation éditoriale et commerciale, mentions du partenariat de marque, casting à valider avec les équipes de fiction.",
      "adaptations": "TV : bande-annonce en coupure. TF1+ : mini-série verticale de marque. Social : épisodes sur TikTok, Instagram, YouTube. Terrain : événement avec les héroïnes. Annonceurs compatibles : beauté, parfum, mode. Piste exploratoire.",
      "sources": [
        {
          "label": "Channel 4 — communiqué de presse (13 oct. 2026)",
          "url": "https://www.channel4.com/press/news/channel-4-commissions-its-first-vertical-drama-series-partnership-sol-de-janeiro"
        },
        {
          "label": "VideoWeek — Channel 4 announces first branded microdrama (14 oct. 2026)",
          "url": "https://videoweek.com/2026/10/14/channel-4-announces-first-branded-microdrama-in-latest-digital-push/"
        }
      ],
      "context": {
        "Annonceur": "Sol de Janeiro (beauté et parfum)",
        "Régie": "Channel 4 Sales, partenariat négocié par Zenith UK",
        "Format": "Série de micro-drame vertical, 5 épisodes",
        "Production": "curly media",
        "Plateformes": "Meta, TikTok et YouTube de Channel 4",
        "Période": "Annonce le 13 oct. 2026, diffusion dès le 24 oct."
      },
      "steps": [
        "Channel 4 commissionne avec Sol de Janeiro une série verticale en 5 épisodes courts (annonce le 13 octobre 2026).",
        "L'histoire suit quatre amies de Londres à travers leur groupe de discussion : carrières, nouvelles romances, sorties.",
        "Chaque personnage s'inspire d'un parfum de la gamme Intense Mist.",
        "curly media produit la série, avec un casting de comédiennes (Deba Hekmat, Jadesola Odunjo, Mia Ito Smith, Felicity Ali).",
        "Mise en ligne dès le 24 octobre sur Meta, TikTok et YouTube de Channel 4."
      ],
      "results": [],
      "insights": [
        {
          "t": "Le produit devient un personnage",
          "d": "Le parfum n'est pas démontré : il donne sa personnalité à chaque héroïne."
        },
        {
          "t": "Le format du moment",
          "d": "Le micro-drame vertical parle aux jeunes femmes sur les plateformes où elles sont déjà."
        },
        {
          "t": "La régie comme studio",
          "d": "Channel 4 commissionne et produit : la marque achète une idée, pas seulement de l'espace."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le groupe de discussion",
          "d": "Une mini-série verticale de 5 épisodes sur TF1+ et TikTok, avec des talents issus de l'univers d'une fiction ou d'une quotidienne TF1 à valider."
        },
        {
          "b": "Budget moyen",
          "t": "Une héroïne, un produit",
          "d": "Une marque de beauté inspire les personnages d'une fiction courte, avec un épisode bonus en clin d'œil à Star Academy."
        },
        {
          "b": "Opération signature",
          "t": "La saison de marque",
          "d": "Une série verticale en plusieurs saisons, lancée en coupure TF1 et prolongée sur TF1+ et les réseaux, avec événement terrain."
        }
      ],
      "partners": "Channel 4, Sol de Janeiro, curly media, Zenith UK",
      "scope": "regie",
      "oneLine": "Channel 4 a produit pour Sol de Janeiro « The Guest List », une mini-série verticale de 5 épisodes courts où chaque héroïne s'inspire d'un parfum de la marque.",
      "concept": "Au lieu d'un spot, la régie vend un micro-drame diffusé sur les comptes Meta, TikTok et YouTube de Channel 4 dès le 24 octobre 2026. L'histoire suit le groupe de discussion de quatre amies d'une vingtaine d'années à Londres, et chaque personnage incarne un parfum de la gamme Intense Mist. Aucun chiffre d'audience ni de budget n'est publié."
    },
    {
      "id": "carrefour-m6-collection-hack6",
      "chapter": "formats",
      "edition": "2026-11-11",
      "label": "France · M6 Unlimited · annonce du 5 oct. 2026",
      "title": "Carrefour × M6+ : collection et HACK6",
      "image": "",
      "categories": [
        "Hacking Culture",
        "Brand Entertainment"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        7,
        9,
        8,
        8
      ],
      "pitch": "Carrefour détourne l'écran d'accueil de M6+ et y ouvre une page « famille » pour son Mois Monopoly : la marque s'installe dans la navigation.",
      "facts": [
        "Première collection exclusive d'une marque sur M6+ : une page dédiée à l'univers familial, créée avec Carrefour pour le retour du jeu « Le Mois Monopoly »",
        "Format HACK6 : une transition animée de 10 secondes sur l'écran d'accueil de M6+, suivie d'un spot Carrefour de 15 secondes",
        "Relais sur Facebook, Instagram et X ainsi que sur M6+ (mise en avant éditoriale, newsletter, jingle, bannières) ; aucun chiffre de performance publié. La page indique une campagne du 8 sept. au 12 oct., soit un début antérieur à l'annonce du 5 oct."
      ],
      "why": "Un dispositif conçu pour la marque : une page éditoriale dédiée et un format qui détourne l'écran d'accueil, au-delà de la diffusion d'un spot.",
      "forTF1": "Très transposable sur TF1+ : une page « collection » de marque et un détournement de l'accueil pour les temps forts (jeux concours, retail). Points de vigilance : séparation éditoriale et commerciale, ergonomie de l'accueil, données personnelles pour les jeux.",
      "adaptations": "TV : spot de relais. TF1+ : page de marque et habillage d'accueil. Social : relais sur les comptes TF1. Terrain : jeu en magasin. Annonceurs compatibles : grande distribution, jeux, famille. Piste exploratoire.",
      "quote": {
        "q": "un univers éditorial affinitaire et fédérateur autour de la famille",
        "who": "M6 Unlimited, communiqué du 5 oct. 2026"
      },
      "sources": [
        {
          "label": "M6 Unlimited — communiqué Carrefour (5 oct. 2026)",
          "url": "https://m6unlimited.fr/m6-unlimited-innove-avec-une-premiere-collection-inedite-sur-m6-pour-carrefour/"
        },
        {
          "label": "The Media Leader FR — M6 Unlimited et Carrefour lancent une collection sur M6+",
          "url": "https://fr.themedialeader.com/m6-unlimited-et-carrefour-lancent-une-collection-sur-m6/"
        }
      ],
      "context": {
        "Annonceur": "Carrefour",
        "Objectif": "Accompagner le retour du jeu « Le Mois Monopoly »",
        "Régie": "M6 Unlimited, avec Arena Média et Havas play",
        "Format": "Page collection sur M6+ et format HACK6",
        "Période": "Annonce le 5 oct. 2026 (campagne du 8 sept. au 12 oct. selon la page)"
      },
      "steps": [
        "M6 Unlimited crée sur M6+ une page collection dédiée à l'univers de la famille, avec Carrefour.",
        "Le format HACK6 détourne l'écran d'accueil : transition animée de 10 secondes puis spot de 15 secondes.",
        "Des relais sociaux sont activés sur les comptes M6 et M6+ (Facebook, Instagram, X).",
        "Sur M6+, mise en avant éditoriale, newsletter, jingle et bannières accompagnent la page."
      ],
      "results": [],
      "insights": [
        {
          "t": "La plateforme comme décor",
          "d": "La marque entre dans la navigation, pas seulement dans la coupure."
        },
        {
          "t": "Un thème, pas un produit",
          "d": "La famille donne un cadre éditorial à un jeu promotionnel."
        },
        {
          "t": "Un dispositif empilé",
          "d": "Accueil, page, newsletter et social se renforcent sans production lourde."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "L'accueil détourné",
          "d": "Un habillage animé de l'écran d'accueil de TF1+ de quelques secondes, suivi d'un spot, pour une promotion retail."
        },
        {
          "b": "Budget moyen",
          "t": "La collection de marque",
          "d": "Une page TF1+ thématique (famille, cuisine) autour de programmes TF1 choisis et d'une marque partenaire."
        },
        {
          "b": "Opération signature",
          "t": "Le mois jeu",
          "d": "Un jeu national relayé en antenne, sur TF1+ et en magasin, avec page de marque et temps forts dans une quotidienne TF1."
        }
      ],
      "partners": "M6 Unlimited, Carrefour, Arena Média, Havas play",
      "scope": "regie",
      "oneLine": "Carrefour s'est installé dans la navigation de M6+ : une page « famille » dédiée à son Mois Monopoly et une transition animée de 10 secondes sur l'écran d'accueil, suivie d'un spot de 15 secondes.",
      "concept": "C’est la première collection exclusive d’une marque sur M6+ : le format HACK6 détourne l’écran d’accueil, là où l’utilisateur choisit son programme. L’opération est relayée sur les réseaux sociaux et sur M6+ (mise en avant éditoriale, newsletter, jingle, bannières), sans chiffre de performance publié."
    },
    {
      "id": "fitness-park-habillage-wallet",
      "chapter": "formats",
      "edition": "2026-11-11",
      "label": "France · M6 Unlimited · 14 sept. 2026 (campagne du 24 août au 30 sept.)",
      "title": "Fitness Park : l'Habillage Wallet",
      "image": "",
      "categories": [
        "Personalization Power",
        "Streaming Routine"
      ],
      "confidence": "Élevé",
      "scores": [
        6,
        7,
        9,
        8,
        8
      ],
      "pitch": "Un QR code dans le spot permet de glisser l'offre de la marque directement dans le wallet du smartphone.",
      "facts": [
        "Nouveau format publicitaire de M6 Unlimited, conçu par Adways, inauguré par Fitness Park pour sa toute première campagne avec ce format",
        "Pendant le spot, une incrustation invite à scanner un QR code ; l'offre promotionnelle s'ajoute au wallet du smartphone en un geste",
        "Disponible sur les trois écrans (TV connectée et OTT) ; campagne du 24 août au 30 septembre 2026 ; aucun résultat publié"
      ],
      "why": "Format publicitaire spécial qui transforme le spot en action immédiate : l'offre quitte l'écran pour le téléphone.",
      "forTF1": "Transposable sur TF1+ et la TV connectée pour promotions, ouvertures et fidélité. Points de vigilance : lisibilité du QR code sur grand écran, données personnelles, compatibilité avec les wallets des annonceurs.",
      "adaptations": "TV : spot avec incrustation. TF1+ : format interactif sur TV connectée. Social : relais de l'offre. Terrain : scan en magasin. Annonceurs compatibles : retail, loisirs, banque. Piste exploratoire.",
      "quote": {
        "q": "toute première campagne utilisant ce format publicitaire innovant",
        "who": "M6 Unlimited, communiqué du 14 sept. 2026"
      },
      "sources": [
        {
          "label": "M6 Unlimited — Fitness Park inaugure l'Habillage Wallet",
          "url": "https://m6unlimited.fr/fitness-park-inaugure-l-habillage-wallet-le-nouveau-format-publicitaire-de-m6-unlimited/"
        }
      ],
      "context": {
        "Annonceur": "Fitness Park",
        "Régie": "M6 Unlimited, avec l'agence Cospirit",
        "Format": "Habillage Wallet (conçu par Adways)",
        "Écrans": "TV connectée et OTT",
        "Période": "Du 24 août au 30 sept. 2026, annoncé le 14 sept."
      },
      "steps": [
        "Le spot est diffusé avec une incrustation invitant à scanner un QR code.",
        "Le spectateur scanne le code avec son smartphone.",
        "L'offre promotionnelle s'ajoute au wallet du téléphone en un simple geste.",
        "Le format convient aux promotions, lancements d'offres, grands événements et programmes de fidélité (selon la régie)."
      ],
      "results": [],
      "insights": [
        {
          "t": "Du spot à l'action",
          "d": "L'offre quitte l'écran en quelques secondes."
        },
        {
          "t": "Un geste connu",
          "d": "Le wallet est un réflexe : pas besoin d'application."
        },
        {
          "t": "Un format réutilisable",
          "d": "Un seul format sert à toutes les promotions, avec peu de production."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le coupon dans la poche",
          "d": "Un spot TF1+ avec QR code qui ajoute un bon de réduction au wallet, pour une promotion ponctuelle."
        },
        {
          "b": "Budget moyen",
          "t": "La carte de fidélité TF1+",
          "d": "Un habillage wallet intégré aux pauses d'une quotidienne, avec une offre de saison."
        },
        {
          "b": "Opération signature",
          "t": "Le pass événement",
          "d": "Un billet ou un pass ajouté au wallet pendant une soirée spéciale TF1, par exemple Danse avec les stars."
        }
      ],
      "partners": "M6 Unlimited, Fitness Park, Cospirit, Adways",
      "scope": "regie",
      "oneLine": "Dans un spot de M6 Unlimited, un QR code à scanner permet à Fitness Park d'ajouter son offre directement dans le wallet du smartphone du téléspectateur.",
      "concept": "Le format, conçu par Adways, affiche une incrustation pendant le spot : le téléspectateur scanne, et l'offre arrive dans son téléphone en un geste. Il est disponible sur les trois écrans (TV connectée et OTT). Fitness Park l'a inauguré pour sa première campagne avec ce format, du 24 août au 30 septembre 2026."
    },
    {
      "id": "made-in-france-saison-2-m6",
      "chapter": "contenu",
      "edition": "2026-11-11",
      "label": "France · M6 Unlimited · annonce du 6 nov. 2026 (diffusion dès le 9 nov.)",
      "title": "Made in France : ils inventent l'industrie de demain (saison 2)",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "RSE Show"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        6,
        8,
        5,
        7
      ],
      "pitch": "Un programme de compétition d'apprentis, produit par l'agence de la régie, pour redonner envie des métiers de l'industrie.",
      "facts": [
        "Saison 2 de « Made in France : ils inventent l'industrie de demain » sur M6 : 4 épisodes de 26 minutes le samedi matin du 21 novembre au 12 décembre, intégrale le 19 décembre",
        "Capsules d'une minute sur les cinq apprentis et leurs mentors du 9 novembre au 12 décembre, à l'antenne et sur M6+ ; quatre contenus exclusifs présentés par Jean-Michel Karam",
        "Partenaires institutionnels : Bpifrance (via La French Fab) et OPCO 2i (via Avec l'Industrie) ; programme porté par M6&Beyond, l'agence créative de M6 Unlimited"
      ],
      "why": "Programme conçu pour des partenaires, avec un casting, des capsules et un prolongement sur la plateforme : un vrai contenu de marque produit par la régie.",
      "forTF1": "Modèle de programme court de cause ou de filière, finançable par des institutions et des marques. Points de vigilance : partenaires institutionnels (et non marques classiques), indépendance éditoriale, rôle du jury, création d'une grille adaptée.",
      "adaptations": "TV : programme court en journée ou week-end. TF1+ : capsules et contenus exclusifs. Social : portraits des candidats. Terrain : finale en public. Annonceurs compatibles : industrie, formation, banque, énergie. Piste exploratoire.",
      "quote": {
        "q": "Chez Bpifrance, nous croyons profondément que cette réindustrialisation se gagnera aussi dans les cœurs et les vocations.",
        "who": "Nicolas Dufourcq, directeur général de Bpifrance"
      },
      "sources": [
        {
          "label": "M6 Unlimited — communiqué saison 2 de Made in France (6 nov. 2026)",
          "url": "https://m6unlimited.fr/la-french-fab-et-avec-lindustrie-accompagnes-par-m6-unlimited-renouvellent-leur-engagement-autour-dune-deuxieme-saison-de-made-in-france-ils-inventent-lindustrie-de-demain-sur-m6/"
        }
      ],
      "context": {
        "Partenaires": "Bpifrance (La French Fab), OPCO 2i (Avec l'Industrie)",
        "Régie": "M6 Unlimited, production M6&Beyond",
        "Programme": "Compétition de cinq apprentis, jury, mentors",
        "Format": "4 × 26 min, capsules d'1 min, contenus exclusifs",
        "Période": "Du 9 nov. au 19 déc. 2026"
      },
      "steps": [
        "Cinq apprentis de secteurs variés (santé, environnement, robotique, cosmétique) portent chacun un projet innovant.",
        "Des mentors les accompagnent ; des capsules d'une minute les présentent à l'antenne et sur M6+ dès le 9 novembre.",
        "Quatre épisodes de 26 minutes sont diffusés le samedi matin du 21 novembre au 12 décembre.",
        "En finale, chaque apprenti pitche deux minutes devant le jury ; le gagnant reçoit 5 000 euros.",
        "Quatre contenus exclusifs sont présentés par Jean-Michel Karam, issu de « Qui veut être mon associé ? »."
      ],
      "results": [
        {
          "n": "1,5 million",
          "l": "de téléspectateurs pour la compétition de la saison 1 (chiffre du communiqué)"
        }
      ],
      "insights": [
        {
          "t": "Un programme, pas un spot",
          "d": "Casting, jury et finale donnent un récit complet aux partenaires."
        },
        {
          "t": "Des capsules pour durer",
          "d": "Les formats d'une minute prolongent le programme avant et après."
        },
        {
          "t": "Un talent connu en renfort",
          "d": "Un visage du paysage business crédibilise le sujet."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Les apprentis en capsules",
          "d": "Des portraits d'une minute sur TF1+ et en coupure, portés par une filière ou un annonceur formation."
        },
        {
          "b": "Budget moyen",
          "t": "Le concours de l'avenir",
          "d": "Une compétition courte en week-end sur TF1, produite pour des partenaires, avec jury et finale."
        },
        {
          "b": "Opération signature",
          "t": "La saison de filière",
          "d": "Un programme récurrent soutenu par plusieurs partenaires, décliné en capsules, contenus exclusifs sur TF1+ et finale en public."
        }
      ],
      "partners": "M6 Unlimited, M6&Beyond, Bpifrance, La French Fab, OPCO 2i, Avec l'Industrie",
      "scope": "regie",
      "oneLine": "M6 diffuse la saison 2 de « Made in France », un programme de compétition d'apprentis produit par l'agence de sa régie pour donner envie des métiers de l'industrie.",
      "concept": "Quatre épisodes de 26 minutes passent le samedi matin du 21 novembre au 12 décembre, avec des capsules d'une minute sur les cinq apprentis et leurs mentors à l'antenne et sur M6+. Le programme est porté par M6&Beyond, l'agence créative de M6 Unlimited, avec Bpifrance et l'OPCO 2i comme partenaires institutionnels."
    },
    {
      "id": "channel-4-instant-re4ch",
      "chapter": "formats",
      "edition": "2026-11-11",
      "label": "Royaume-Uni · Channel 4 Sales · 15 oct. 2026 (disponible dès janv. 2027)",
      "title": "Channel 4 : Instant Re4ch",
      "image": "",
      "categories": [
        "Streaming Routine"
      ],
      "confidence": "Élevé",
      "scores": [
        5,
        6,
        8,
        5,
        8
      ],
      "pitch": "Un seul point d'achat pour couvrir en 48 heures la télé, le streaming et YouTube de deux groupes publics.",
      "facts": [
        "Offre publicitaire annoncée le 15 octobre 2026, disponible pour les annonceurs à partir de janvier 2027",
        "Créneaux garantis aux heures de forte audience le même soir sur les chaînes linéaires de Channel 4, Paramount, UKTV et Narrative",
        "Deux campagnes « boost » de 48 heures : sur les plateformes de streaming, puis sur plus de 30 chaînes YouTube de Channel 4 ; aucun résultat publié"
      ],
      "why": "Offre packagée qui change la façon d'acheter l'écran : couverture rapide et coordonnée sur plusieurs supports. Opération moins créative que les autres fiches, retenue comme signal concurrent.",
      "forTF1": "Signal concurrent : une régie qui vend un point d'achat unique et un effet de couverture en 48 heures. Pour TF1 PUB, piste de package coordonné antenne, TF1+ et réseaux sociaux. Points de vigilance : lien avec les conditions de vente, disponibilité des espaces, absence de création spécifique.",
      "adaptations": "TV : créneaux garantis en prime time. TF1+ : boost de 48 heures. Social : boost sur les chaînes YouTube du groupe. Annonceurs compatibles : lancements, retail, automobile. Piste exploratoire.",
      "quote": {
        "q": "marks the first time in Europe that advertisers can access two public service broadcasters through a single buying point.",
        "who": "David Amodio, Head of Sales, Channel 4"
      },
      "sources": [
        {
          "label": "Channel 4 — communiqué Instant Re4ch (15 oct. 2026)",
          "url": "https://www.channel4.com/press/news/channel-4-sales-launches-instant-re4ch-it-scales-advertising-opportunities-across-its"
        },
        {
          "label": "Advanced Television — Channel 4 Sales unveils Instant Re4ch",
          "url": "https://www.advanced-television.com/2026/10/15/channel-4-sales-unveils-instant-re4ch/"
        }
      ],
      "context": {
        "Régie": "Channel 4 Sales",
        "Périmètre": "Channel 4, Paramount, UKTV, Narrative, YouTube de Channel 4",
        "Format": "Offre « Instant Re4ch » : créneaux garantis et deux boosts de 48 h",
        "Contexte": "Channel 4 Sales sera partenaire exclusif de Paramount au Royaume-Uni à partir de 2027",
        "Disponibilité": "Janvier 2027"
      },
      "steps": [
        "Planification prioritaire sur l'ensemble du portefeuille de Channel 4 Sales.",
        "Créneaux garantis le même soir aux heures de forte audience sur les chaînes linéaires du portefeuille.",
        "Un boost de 48 heures sur les plateformes de streaming de Channel 4, Paramount et UKTV.",
        "Un second boost de 48 heures sur les chaînes YouTube de Channel 4."
      ],
      "results": [
        {
          "n": "48 h",
          "l": "durée de chacune des deux campagnes boost (streaming, puis YouTube)"
        },
        {
          "n": "30+",
          "l": "chaînes YouTube de Channel 4 concernées par le boost"
        }
      ],
      "insights": [
        {
          "t": "Un achat, plusieurs écrans",
          "d": "L'annonceur évite de négocier chaque support séparément."
        },
        {
          "t": "La vitesse comme argument",
          "d": "48 heures suffisent pour créer un pic de visibilité."
        },
        {
          "t": "Le portefeuille comme produit",
          "d": "La régie vend la puissance de son écosystème élargi."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le pic de 48 heures",
          "d": "Un boost de deux jours sur TF1+ et les réseaux de TF1, adossé à un temps fort de la grille."
        },
        {
          "b": "Budget moyen",
          "t": "Le même soir partout",
          "d": "Un package garantissant l'antenne, TF1+ et les chaînes du groupe le même soir pour un lancement."
        },
        {
          "b": "Opération signature",
          "t": "Le lancement coordonné",
          "d": "Une offre packagée de couverture instantanée autour d'un événement TF1, avec point d'achat unique."
        }
      ],
      "partners": "Channel 4 Sales, Paramount, UKTV, Narrative, YouTube",
      "scope": "regie",
      "oneLine": "Channel 4 propose aux annonceurs un seul achat pour couvrir en 48 heures la télé, le streaming et YouTube de deux groupes publics.",
      "concept": "L'offre, annoncée le 15 octobre 2026 et disponible dès janvier 2027, garantit des créneaux aux heures de forte audience le même soir sur les chaînes linéaires de Channel 4, Paramount, UKTV et Narrative. Elle ajoute deux campagnes « boost » de 48 heures, sur les plateformes de streaming puis sur plus de 30 chaînes YouTube de Channel 4. Aucun résultat n'est publié."
    },
    {
      "id": "a-comedy-thing-movember",
      "chapter": "contenu",
      "edition": "2026-11-11",
      "label": "Royaume-Uni · Channel 4 (A Comedy Thing) · 1er oct. 2026",
      "title": "Movember × Guess The Moustache",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "RSE Show"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        5,
        7,
        8,
        5
      ],
      "pitch": "Un jeu de comédiens où l'on cherche la vraie moustache parmi les fausses : le symbole de Movember devient le format.",
      "facts": [
        "Édition spéciale de « Guess The Moustache », première collaboration de marque de la chaîne digitale A Comedy Thing de Channel 4, en ligne le 4 octobre 2026",
        "Trois humoristes (Vittorio Angelone, Finlay Christie, Ed Night) doivent retrouver une vraie moustache parmi des fausses très crédibles",
        "Diffusé sur YouTube et les réseaux d'A Comedy Thing ; produit par Strong Watch Studios ; aucun résultat publié"
      ],
      "why": "Le jeu existant est adapté autour du symbole de la marque : une vraie création éditoriale sur un format qui plaît déjà à l'audience.",
      "forTF1": "Modèle simple et réplicable : adapter un format court existant d'une chaîne digitale à une cause ou une marque. Points de vigilance : cause à fort enjeu (santé), cohérence avec l'audience, séparation éditoriale et commerciale.",
      "adaptations": "TV : relais en coupure. TF1+ : édition spéciale d'un format court. Social : YouTube et TikTok TF1. Terrain : action en novembre. Annonceurs compatibles : santé, assurance, cause. Piste exploratoire.",
      "sources": [
        {
          "label": "Channel 4 — communiqué A Comedy Thing × Movember (1er oct. 2026)",
          "url": "https://www.channel4.com/press/news/channel-4s-comedy-thing-teams-movember-first-ever-branded-partnership"
        }
      ],
      "context": {
        "Partenaire": "Movember (association de santé masculine)",
        "Régie": "Channel 4 et sa chaîne digitale A Comedy Thing",
        "Format": "Édition spéciale du jeu « Guess The Moustache »",
        "Production": "Strong Watch Studios",
        "Période": "Communiqué du 1er oct. 2026, mise en ligne le 4 oct."
      },
      "steps": [
        "Channel 4 et A Comedy Thing associent Movember au jeu « Guess The Moustache ».",
        "Trois humoristes tentent de repérer la vraie moustache dans une série de fausses.",
        "L'épisode est produit par Strong Watch Studios.",
        "Mise en ligne sur YouTube et les réseaux d'A Comedy Thing le 4 octobre."
      ],
      "results": [
        {
          "n": "60 %",
          "l": "d'hommes dans l'audience YouTube d'A Comedy Thing"
        },
        {
          "n": "58 %",
          "l": "de moins de 35 ans dans l'audience YouTube d'A Comedy Thing"
        }
      ],
      "insights": [
        {
          "t": "Un symbole devenu règle du jeu",
          "d": "La moustache est à la fois le thème et la mécanique."
        },
        {
          "t": "Une audience qui colle à la cause",
          "d": "Le public de la chaîne correspond à la cible de Movember."
        },
        {
          "t": "Un format léger",
          "d": "Un épisode court et peu coûteux, facile à répéter."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "L'épisode spécial",
          "d": "Une édition de marque d'un format court TF1+ ou TikTok, tournée en une journée."
        },
        {
          "b": "Budget moyen",
          "t": "La saison partenaire",
          "d": "Quatre éditions spéciales d'un jeu court, signées par une marque ou une cause, avec relais en antenne."
        },
        {
          "b": "Opération signature",
          "t": "Le mois cause",
          "d": "Un mois de contenus de cause sur TF1, TF1+ et les réseaux, autour d'un programme de divertissement."
        }
      ],
      "partners": "Channel 4, A Comedy Thing, Movember, Strong Watch Studios",
      "scope": "regie",
      "oneLine": "Pour Movember, la chaîne digitale A Comedy Thing de Channel 4 a produit une édition spéciale de son jeu « Guess The Moustache », où trois humoristes doivent retrouver la vraie moustache parmi des fausses.",
      "concept": "C’est la première collaboration de marque de cette chaîne : le symbole de la cause devient le principe du jeu. L’émission est diffusée sur YouTube et les réseaux d’A Comedy Thing, produite par Strong Watch Studios, sans résultat publié."
    },
    {
      "id": "channel-4-b-corp-coupure-speciale",
      "chapter": "formats",
      "edition": "2026-11-11",
      "label": "Royaume-Uni · Channel 4 Sales · 2 oct. 2026",
      "title": "Channel 4 : la coupure des B Corp",
      "image": "",
      "categories": [
        "RSE Show"
      ],
      "confidence": "Élevé",
      "scores": [
        6,
        5,
        7,
        7,
        6
      ],
      "pitch": "Cinq PME certifiées B Corp se partagent une coupure spéciale en soirée, gagnée par concours.",
      "facts": [
        "Les gagnants du deuxième concours B Corp de Channel 4 Sales, organisé avec B Lab UK, partagent une coupure spéciale diffusée dimanche soir pendant « The Great Celebrity Pottery Throw Down »",
        "Cinq entreprises (Faith In Nature, Holy Moly Dips, Klyk, SURI, TOTM) ; les films passeront ensuite sur le streaming de Channel 4",
        "Le prix fait partie d'une dotation de 600 000 £ d'espace publicitaire de Channel 4 ; aucun résultat publié"
      ],
      "why": "Format publicitaire créé pour l'occasion : une coupure collective qui offre à de petites marques leur première visibilité TV.",
      "forTF1": "Piste d'offre d'entrée sur TF1 et TF1+ pour de petites marques engagées, avec effet RSE. Points de vigilance : valeur commerciale de l'espace offert, critères du concours, calendrier de diffusion et validation des films.",
      "adaptations": "TV : coupure spéciale en soirée. TF1+ : reprise des films à la demande. Social : portraits des gagnants. Annonceurs compatibles : PME, marques engagées. Piste exploratoire.",
      "sources": [
        {
          "label": "Channel 4 — communiqué B Corp (2 oct. 2026)",
          "url": "https://www.channel4.com/press/news/five-b-corp-businesses-set-tv-advertising-debut-following-channel-4-competition-win"
        }
      ],
      "context": {
        "Régie": "Channel 4 Sales, avec B Lab UK",
        "Format": "Coupure partagée par cinq annonceurs, issue d'un concours",
        "Programme porteur": "The Great Celebrity Pottery Throw Down",
        "Dotation": "600 000 £ d'espace publicitaire",
        "Période": "2 oct. 2026"
      },
      "steps": [
        "Channel 4 Sales et B Lab UK lancent un concours réservé aux entreprises certifiées B Corp.",
        "Un jury choisit cinq gagnants ; chacun reçoit de l'espace et un film.",
        "Les cinq films sont regroupés dans une coupure spéciale, le dimanche soir.",
        "Ils passent ensuite sur la plateforme de streaming, dans des placements adaptés à chaque cible."
      ],
      "results": [
        {
          "n": "600 000 £",
          "l": "d'espace publicitaire Channel 4 mis en jeu (dotation du concours)"
        },
        {
          "n": "5",
          "l": "entreprises B Corp dans la même coupure"
        }
      ],
      "insights": [
        {
          "t": "La coupure devient un événement",
          "d": "Un casting d'annonceurs en fait un moment à regarder."
        },
        {
          "t": "Un concours qui crée du récit",
          "d": "Les gagnants racontent leur première fois à la télévision."
        },
        {
          "t": "Une porte d'entrée",
          "d": "La télévision s'ouvre à des marques qui n'y venaient pas."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le spot du lauréat",
          "d": "Un concours TF1+ qui offre un spot à une petite marque engagée dans une coupure dédiée."
        },
        {
          "b": "Budget moyen",
          "t": "La coupure des audacieux",
          "d": "Cinq marques gagnantes d'un concours dans une coupure collective en prime time, relayée sur TF1+."
        },
        {
          "b": "Opération signature",
          "t": "Le tremplin annuel",
          "d": "Un rendez-vous annuel TF1 PUB : concours, coupure spéciale, portraits des gagnants et suivi des résultats."
        }
      ],
      "partners": "Channel 4 Sales, B Lab UK, Faith In Nature, Holy Moly Dips, Klyk, SURI, TOTM",
      "scope": "regie",
      "oneLine": "Channel 4 a offert à cinq PME certifiées B Corp, gagnantes d'un concours, une coupure pub partagée en soirée pendant « The Great Celebrity Pottery Throw Down ».",
      "concept": "Le prix fait partie d'une dotation de 600 000 £ d'espace publicitaire, organisée avec B Lab UK : de petites marques à mission accèdent à la télé sans budget média. Les cinq entreprises sont Faith In Nature, Holy Moly Dips, Klyk, SURI et TOTM, et leurs films passeront ensuite sur le streaming de Channel 4."
    },
    {
      "id": "whitworths-eat-cook-move-with-davina",
      "chapter": "contenu",
      "edition": "2026-11-11",
      "label": "Royaume-Uni · ITV · 9 nov. 2026 (diffusion début 2027)",
      "title": "Whitworths × Eat, Cook, Move with Davina",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "À vérifier",
      "scores": [
        6,
        4,
        8,
        7,
        7
      ],
      "pitch": "Une marque de fruits secs s'associe à Davina McCall pour une série santé de 10 épisodes sur ITV1 et ITVX.",
      "facts": [
        "Série « Eat, Cook, Move with Davina » : 10 épisodes de 30 minutes sur ITV1 et ITVX, production Whisper, lancement prévu au début de la nouvelle année puis samedis matin",
        "La série est réalisée en partenariat avec Whitworths (fruits secs, noix, snacks plus sains)",
        "Détails du dispositif de marque non précisés dans les articles lus ; sources de presse secondaires, aucun communiqué ITV lu, à confirmer"
      ],
      "why": "Série lancée avec une marque partenaire et un talent : plus qu'un sponsoring selon la marque, mais le dispositif exact reste à confirmer.",
      "forTF1": "Modèle de programme de bien-être porté par un talent et une marque, adapté à TF1 en journée ou week-end. À confirmer : nature exacte du partenariat (sponsoring, intégration, contenus). Points de vigilance : allégations santé et nutrition, séparation éditoriale et commerciale.",
      "adaptations": "TV : programme de week-end. TF1+ : recettes et exercices en capsules. Social : conseils du talent. Annonceurs compatibles : agroalimentaire sain, sport, santé. Piste exploratoire.",
      "quote": {
        "q": "so much more than a sponsorship for us",
        "who": "Phil Gowland, commercial director, Whitworths"
      },
      "sources": [
        {
          "label": "Retail Times — Whitworths partners with Davina McCall (9 nov. 2026)",
          "url": "https://retailtimes.co.uk/whitworths-partners-with-davina-mccall-for-new-itv-health-and-wellness-series/"
        },
        {
          "label": "Televisual — Whisper to Eat, Cook, Move with Davina",
          "url": "https://www.televisual.com/news/whisper-to-eat-cook-move-with-davina/"
        }
      ],
      "context": {
        "Marque": "Whitworths",
        "Régie et chaîne": "ITV (ITV1 et ITVX)",
        "Programme": "Eat, Cook, Move with Davina, 10 × 30 min",
        "Production": "Whisper",
        "Période": "Annoncé le 9 nov. 2026, diffusion au début de l'année suivante"
      },
      "steps": [
        "ITV commissionne une série santé et bien-être présentée par Davina McCall.",
        "Chaque épisode réunit chefs, invités et experts autour de recettes, d'exercices et de conseils.",
        "Whitworths est partenaire de la série ; la forme précise du partenariat n'est pas détaillée dans les articles lus."
      ],
      "results": [],
      "insights": [
        {
          "t": "Un talent de confiance",
          "d": "Davina McCall porte un sujet santé crédible pour la marque."
        },
        {
          "t": "Une marque, une promesse",
          "d": "Les snacks plus sains s'accordent avec le thème du programme."
        },
        {
          "t": "Un partenariat dès la commande",
          "d": "La marque est associée avant la diffusion."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Les capsules du talent",
          "d": "Des capsules recettes et exercices de 2 minutes sur TF1+, avec un animateur TF1 et une marque."
        },
        {
          "b": "Budget moyen",
          "t": "La série bien-être",
          "d": "Un programme de week-end sur TF1 co-construit avec une marque santé, annoncé dès la commande."
        },
        {
          "b": "Opération signature",
          "t": "Le rendez-vous forme",
          "d": "Une série annuelle avec un talent TF1, une marque partenaire, des capsules TF1+ et un événement terrain."
        }
      ],
      "partners": "ITV, Whitworths, Whisper, Silverlining Rights",
      "scope": "regie",
      "oneLine": "ITV prépare avec la marque de fruits secs Whitworths une série santé de 10 épisodes présentée par Davina McCall, « Eat, Cook, Move with Davina », sur ITV1 et ITVX.",
      "concept": "La série dure 10 épisodes de 30 minutes, produite par Whisper, avec un lancement prévu au début de l'année puis le samedi matin. À vérifier : le détail du dispositif de marque n'est pas précisé dans les articles lus, qui sont des sources de presse secondaires, sans communiqué d'ITV."
    },
    {
      "id": "knorr-seven-one-next-gen-casting",
      "chapter": "social",
      "edition": "2026-11-11",
      "label": "Allemagne · Seven.One Media (NEXT.GEN) · 5 nov. 2026",
      "title": "Knorr × casting NEXT.GEN",
      "image": "",
      "categories": [
        "Brand Fandoms",
        "Personalization Power"
      ],
      "confidence": "Élevé",
      "scores": [
        7,
        6,
        8,
        7,
        7
      ],
      "pitch": "Un casting social de créateurs désigne le nouveau visage de Knorr, puis les gagnants prennent le relais en spot sur Joyn et en TV.",
      "facts": [
        "Six créateurs ont participé en septembre à un casting social pour trouver le nouveau « visage Knorr » (mélange d'assaisonnement pour friteuse à air)",
        "Les candidatures sont devenues un spot communautaire diffusé en TV depuis fin septembre comme spot co-brandé Joyn ; les deux gagnants témoignent à partir du 6 novembre, puis dans un spot #InspireMe étendu dès le 15 novembre",
        "Dispositif de NEXT.GEN, unité « Social First » de Seven.One Media créée en 2026 ; aucun chiffre de portée ou de performance publié"
      ],
      "why": "Dispositif conçu pour la marque : un casting communautaire génère le contenu, la TV et le streaming l'amplifient.",
      "forTF1": "Transposable avec TF1+ et les réseaux : un casting social alimente un spot de marque. Points de vigilance : droits à l'image des créateurs, règles des concours, transparence sur les partenariats, sécurité de marque.",
      "adaptations": "TV : spot co-brandé issu du casting. TF1+ : versions courtes. Social : candidatures et vote. Terrain : rencontre avec les gagnants. Annonceurs compatibles : alimentaire, beauté, retail. Piste exploratoire.",
      "sources": [
        {
          "label": "Seven.One Media — communiqué NEXT.GEN (5 nov. 2026)",
          "url": "https://www.presseportal.de/pm/42713/6384730"
        }
      ],
      "context": {
        "Annonceur": "Knorr",
        "Régie": "Seven.One Media, unité NEXT.GEN",
        "Dispositif": "Casting social de créateurs, spot communautaire, témoignages, spot #InspireMe",
        "Plateformes": "Social, Joyn, TV",
        "Période": "Septembre à novembre 2026"
      },
      "steps": [
        "Six créateurs participent en septembre à un casting social pour trouver le nouveau visage Knorr.",
        "Les candidatures sont assemblées en un spot communautaire, diffusé en TV comme spot co-brandé Joyn depuis fin septembre.",
        "À partir du 6 novembre, les deux gagnants apparaissent en témoignages.",
        "À partir du 15 novembre, ils jouent dans un spot #InspireMe plus long ; des versions courtes tournent sur Joyn et les réseaux."
      ],
      "results": [],
      "insights": [
        {
          "t": "Le casting est le contenu",
          "d": "Les candidatures fabriquent le spot sans tournage classique."
        },
        {
          "t": "Des créateurs, puis la TV",
          "d": "Le social lance le dispositif, l'antenne lui donne de la portée."
        },
        {
          "t": "Une campagne qui avance",
          "d": "Casting, spot communautaire, témoignages puis spot final : des étapes à suivre."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le casting TikTok",
          "d": "Un appel à candidatures de créateurs sur les réseaux de TF1 pour choisir le visage d'une marque."
        },
        {
          "b": "Budget moyen",
          "t": "Le spot communautaire",
          "d": "Les candidatures deviennent un spot diffusé sur TF1 et TF1+, avec les gagnants en témoignage."
        },
        {
          "b": "Opération signature",
          "t": "Le visage de la saison",
          "d": "Un casting lié à un programme TF1 (Star Academy ou Koh-Lanta), avec vote public, antenne et TF1+."
        }
      ],
      "partners": "Seven.One Media (NEXT.GEN), Knorr, Joyn, créateurs de contenu",
      "scope": "regie",
      "oneLine": "Seven.One Media a organisé pour Knorr un casting de créateurs sur les réseaux sociaux afin de choisir le nouveau « visage Knorr », puis a transformé l'opération en spot TV.",
      "concept": "Six créateurs ont participé en septembre au casting ; leurs candidatures sont devenues un spot communautaire diffusé en TV depuis fin septembre, en spot co-brandé Joyn. Les deux gagnants prennent le relais dès le 6 novembre, puis dans un spot #InspireMe étendu dès le 15 novembre, un dispositif de NEXT.GEN, l’unité « Social First » de Seven.One Media."
    },
    {
      "id": "simon-mobile-the-race-joyn",
      "chapter": "programme",
      "edition": "2026-11-11",
      "label": "Allemagne · Seven.One Media (NEXT.GEN) · annonce du 5 nov. 2026 (dès févr. 2027)",
      "title": "SIMon mobile × THE RACE",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Streaming Routine"
      ],
      "confidence": "Élevé",
      "scores": [
        6,
        6,
        8,
        6,
        7
      ],
      "pitch": "Une marque télécom s'invite dans une émission de streaming : placements, partenariat YouTube et publicité faite par un créateur du format.",
      "facts": [
        "La saison 4 de « THE RACE » démarre en février 2027 avec la « Wildcard Challenge » sur Joyn, partenariat de SIMon mobile (seconde marque de Vodafone)",
        "Le paquet comprend des placements de produit, des partenariats sur les épisodes YouTube et une publicité réalisée avec un créateur du format, en pré-roll et mid-roll pendant quatre semaines de co-sponsoring sur Joyn",
        "Les épisodes arrivent sur la chaîne YouTube du format deux semaines après leur première sur Joyn ; aucun chiffre publié"
      ],
      "why": "Intégration dans un programme avec création pour la marque : placements, parrainage et publicité réalisée par un créateur du format.",
      "forTF1": "Modèle de package pour un programme TF1+ : placements, co-sponsoring et pub confiée à un talent du format. Points de vigilance : règles de placement de produit, droits du format, calendrier de diffusion et d'engagement.",
      "adaptations": "TV : parrainage de l'émission. TF1+ : épisodes bonus et co-sponsoring. Social : extraits sur YouTube. Annonceurs compatibles : télécoms, banque, énergie. Piste exploratoire.",
      "sources": [
        {
          "label": "Seven.One Media — communiqué NEXT.GEN (5 nov. 2026)",
          "url": "https://www.presseportal.de/pm/42713/6384730"
        }
      ],
      "context": {
        "Annonceur": "SIMon mobile (Vodafone)",
        "Régie": "Seven.One Media, unité NEXT.GEN",
        "Programme": "THE RACE, saison 4, Joyn et YouTube",
        "Dispositif": "Placements, partenariats YouTube, co-sponsoring et publicité créée avec un créateur du format",
        "Période": "Annoncé le 5 nov. 2026, à partir de février 2027"
      },
      "steps": [
        "Une « Wildcard Challenge » ouvre la saison 4 de THE RACE sur Joyn en février 2027.",
        "Des placements de produit sont intégrés au programme.",
        "Les épisodes arrivent sur YouTube deux semaines après Joyn, avec des partenariats d'épisodes.",
        "Une publicité réalisée avec un créateur du format passe en pré-roll et mid-roll pendant un co-sponsoring de quatre semaines."
      ],
      "results": [],
      "insights": [
        {
          "t": "Une marque, deux plateformes",
          "d": "Joyn puis YouTube prolongent la présence de la marque."
        },
        {
          "t": "Le créateur joue pour la marque",
          "d": "La publicité est faite par un visage connu du format."
        },
        {
          "t": "Un package, pas un spot",
          "d": "Placements, parrainage et publicité forment un seul dispositif."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le pré-roll du talent",
          "d": "Une publicité tournée avec un participant d'un programme TF1+, diffusée en pré-roll sur ses épisodes."
        },
        {
          "b": "Budget moyen",
          "t": "Le défi de marque",
          "d": "Un épisode ou défi sponsorisé dans une émission TF1+, avec placements et co-sponsoring."
        },
        {
          "b": "Opération signature",
          "t": "La saison partenaire",
          "d": "Un package pour toute une saison d'un programme TF1 (Koh-Lanta ou Star Academy) : placements, défi, publicité du talent et prolongement YouTube."
        }
      ],
      "partners": "Seven.One Media (NEXT.GEN), SIMon mobile, Vodafone, Joyn, YouTube",
      "scope": "regie",
      "oneLine": "La marque télécom SIMon mobile (seconde marque de Vodafone) devient partenaire de la saison 4 de « THE RACE » sur Joyn, avec des placements de produits, un partenariat YouTube et une pub faite par un créateur du format.",
      "concept": "La saison démarre en février 2027 avec la « Wildcard Challenge » et inclut quatre semaines de co-sponsoring sur Joyn, avec une publicité en pre-roll et mid-roll réalisée avec un créateur du format. Les épisodes arrivent sur YouTube deux semaines après leur première sur Joyn, sans chiffre publié."
    },
    {
      "id": "melitta-die-hoehle-der-loewen",
      "chapter": "programme",
      "edition": "2026-11-11",
      "label": "Allemagne · Ad Alliance / VOX · 14 sept. 2026",
      "title": "Melitta × Die Höhle der Löwen",
      "image": "",
      "categories": [
        "Brand Entertainment"
      ],
      "confidence": "À vérifier",
      "scores": [
        5,
        4,
        6,
        7,
        5
      ],
      "pitch": "Melitta entre pour la première fois dans le décor de l'émission de startups de VOX, avec un placement de produit.",
      "facts": [
        "Titre du communiqué Ad Alliance du 14 septembre 2026 : « Vor dem Pitch erst mal Kaffee: Melitta zieht mit erstem Product Placement in die VOX-Gründershow ein »",
        "Lecture partielle de l'article, à confirmer : seul le titre est lu, la page de l'article n'a pas pu être ouverte",
        "Aucun chiffre ni détail de dispositif disponible"
      ],
      "why": "Intégration d'une marque dans un programme de VOX, mais le contenu du dispositif n'est pas établi : à lire avant toute reprise.",
      "forTF1": "À vérifier avant d'en tirer une piste : si le placement est simple, c'est un rappel que les rituels de pitch ou de pause peuvent accueillir des marques. Points de vigilance : règles du placement de produit, séparation éditoriale et commerciale.",
      "adaptations": "TV : placement dans une émission de pitch. TF1+ : contenus bonus. Social : coulisses. Annonceurs compatibles : boissons, alimentaire, équipement. Piste exploratoire, à confirmer.",
      "sources": [
        {
          "label": "Ad Alliance — Premiere bei DIE HÖHLE DER LÖWEN (14 sept. 2026)",
          "url": "https://www.ad-alliance.de/news/premiere-bei-die-hoehle-der-loewen"
        }
      ],
      "context": {
        "Marque": "Melitta",
        "Régie et chaîne": "Ad Alliance, VOX",
        "Programme": "Die Höhle der Löwen (émission de startups)",
        "Dispositif": "Premier product placement de la marque, d'après le titre du communiqué",
        "Période": "14 sept. 2026"
      },
      "steps": [
        "Melitta fait son premier placement de produit dans « Die Höhle der Löwen » (d'après le titre du communiqué ; détails non lus)."
      ],
      "results": [],
      "insights": [
        {
          "t": "Un rituel d'émission",
          "d": "Le café avant le pitch s'inscrit dans le déroulé du programme."
        },
        {
          "t": "Une première pour la marque",
          "d": "Le titre insiste sur l'entrée de Melitta dans l'émission."
        },
        {
          "t": "À confirmer",
          "d": "Le dispositif exact reste à lire dans la source."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "Le café du plateau",
          "d": "Un placement de boisson dans une émission de pitch ou de jeu de TF1, à valider avec la grille et les droits."
        },
        {
          "b": "Budget moyen",
          "t": "Le rituel de coulisses",
          "d": "Une séquence récurrente avant l'épreuve, signée par une marque, dans un programme TF1."
        },
        {
          "b": "Opération signature",
          "t": "La saison du café",
          "d": "Une marque partenaire d'une saison entière : placement, séquence récurrente et contenus bonus sur TF1+."
        }
      ],
      "partners": "Ad Alliance, VOX, Melitta",
      "scope": "regie",
      "oneLine": "Melitta fait son entrée avec un premier placement de produit dans « Die Höhle der Löwen », l'émission de startups de VOX.",
      "concept": "À vérifier : seul le titre du communiqué d'Ad Alliance du 14 septembre 2026 a pu être lu, la page de l'article n'a pas pu être ouverte. On ne sait donc pas encore comment le café apparaît à l'écran. Aucun chiffre ni détail de dispositif n'est disponible."
    }
  ]
};
