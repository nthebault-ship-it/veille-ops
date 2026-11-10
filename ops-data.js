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
  "updated": "2026-11-10",
  "editions": [
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
        "summary": "Les meilleures opérations ne posent pas un logo dans le programme : elles créent un rituel ou une scène que seule la marque peut raconter.",
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
            "d": "Chez Emmerdale comme dans GZSZ, la fiction pose le sujet, puis la marque répond : le message arrive sur un terrain préparé.",
            "ops": [
              "emmerdale-pompes-a-chaleur",
              "l-oreal-paris-gzsz"
            ]
          },
          {
            "t": "Un effet qui se mesure",
            "d": "+90 % de trafic sur le site de Disneyland Paris pendant le direct, ×2 sur les recherches Google après Emmerdale : le lien avec l'antenne se prouve.",
            "ops": [
              "disneyland-paris-dancing-with-the-stars",
              "emmerdale-pompes-a-chaleur"
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
        "summary": "Quand la régie produit pour la marque, le produit devient le décor ou le prétexte, jamais l'argument de vente : le talent et le récit portent le message.",
        "points": [
          {
            "t": "Un talent, un ton",
            "d": "Un humoriste porte le rail chez Channel 4 comme chez VIA Rail : une seule voix, sur tous les supports.",
            "ops": [
              "rail-delivery-group-train-ing-it",
              "via-rail-andrew-phung"
            ]
          },
          {
            "t": "Le produit au second plan",
            "d": "Un soin qui n'est jamais démontré, des poules expliquées par le jeu : on raconte avant de vendre.",
            "ops": [
              "avene-marquer-l-invisible",
              "happy-egg-tiny-farmers"
            ]
          },
          {
            "t": "Pas besoin d'un gros budget",
            "d": "VIA Rail change d'image en huit semaines ; Train-ing It dépasse de 94 % ses objectifs dès la première saison.",
            "ops": [
              "via-rail-andrew-phung",
              "rail-delivery-group-train-ing-it"
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
        "summary": "La publicité elle-même peut devenir un événement : en changeant de forme, avec une coupure annoncée, du clic ou de l'IA, elle regagne l'attention sans produire plus.",
        "points": [
          {
            "t": "La coupure devient un rendez-vous",
            "d": "Chez Ster, le bloc de Noël gagne +120 % de visionnage différé ; BMW offre deux minutes sans coupure.",
            "ops": [
              "ster-bloc-de-pub-de-noel-en-prime-time",
              "bmw-ix3-le-compte-a-rebours"
            ]
          },
          {
            "t": "Zéro production en plus",
            "d": "Channel 4 Enhance rend un spot existant cliquable en 5 jours ouvrés, sans frais de production.",
            "ops": [
              "channel-4-enhance"
            ]
          },
          {
            "t": "L'IA baisse le ticket d'entrée",
            "d": "M6 Unlimited produit un spot par l'IA pour une petite marque et le teste avant diffusion : un signal concurrent direct.",
            "ops": [
              "m6-spots-crees-par-l-ia"
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
        "summary": "Les licences et les plateformes fonctionnent quand la marque entre dans le jeu des fans, avant ou autour du programme, plutôt que dans l'écran publicitaire.",
        "points": [
          {
            "t": "Le fandom avant le programme",
            "d": "Snapchat ouvre Poudlard quatre mois avant la série ; Zalando habille la Star Academy pour ses 25 ans.",
            "ops": [
              "harry-potter-snapchat",
              "zalando-star-academy"
            ]
          },
          {
            "t": "Un rituel, une marque",
            "d": "Dans la villa de Love Island USA, chaque moment a la sienne : +643 % de mémorisation pour les partenaires intégrés.",
            "ops": [
              "love-island-usa-21-marques"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
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
      "scope": "regie"
    },
    {
      "id": "zalando-star-academy",
      "chapter": "social",
      "edition": "2026-11-10",
      "label": "France · TF1 · oct. 2026",
      "title": "Zalando × Star Academy",
      "image": "",
      "categories": [
        "Brand Entertainment",
        "Brand Fandoms"
      ],
      "confidence": "Moyen",
      "scores": [
        7,
        6,
        9,
        7,
        8
      ],
      "facts": [
        "2e édition du partenariat, pour les 25 ans de la Star Academy",
        "Quatre duos créateurs et anciens élèves passent 24 h au château, sur TF1+",
        "« La Cabine par Zalando » avec Loïc Prigent sur TF1+"
      ],
      "why": "Référence maison : un dispositif construit autour d'un programme, de talents et de créateurs.",
      "forTF1": "Sert de base de comparaison avec les opérations des autres régies. Sources de presse spécialisée, à compléter avec les chiffres internes.",
      "adaptations": "Sert de référence interne pour comparer les mécaniques des autres opérations.",
      "sources": [
        {
          "label": "Saison 2026",
          "url": "https://gensdinternet.fr/2026/10/05/zalando-reitere-son-partenariat-avec-la-star-academy-et-des-createurs-de-contenu/"
        },
        {
          "label": "Dispositif 2025",
          "url": "https://www.cbnews.fr/marques/zalando-partenaire-360deg-nouvelle-saison-star-academy"
        }
      ],
      "pitch": "Pour les 25 ans de la Star Academy, Zalando habille l'aventure : créateurs au château, anciens élèves et Loïc Prigent en cabine.",
      "context": {
        "Annonceur": "Zalando France",
        "Campagne": "« Ça se sape pour la Star Ac' avec Zalando »",
        "Chaîne": "TF1 et TF1+",
        "Programme": "Star Academy, saison 14 (25 ans)",
        "Date": "À partir d'octobre 2026"
      },
      "steps": [
        "Le format « Before Star Academy » revient le 7 octobre sur TF1+ et les réseaux.",
        "Quatre duos créateurs et anciens élèves passent 24 h au château, avec les cours des candidats.",
        "« La Cabine par Zalando » : sur TF1+, les élèves sortants racontent leur aventure et leurs tenues avec Loïc Prigent.",
        "Le château est ouvert aux journalistes et aux influenceurs pour des images exclusives."
      ],
      "results": [],
      "insights": [
        {
          "t": "La mode au cœur de l'aventure",
          "d": "Les tenues font partie de l'histoire des élèves."
        },
        {
          "t": "Créateurs et anciens",
          "d": "On mélange les codes des réseaux et la nostalgie du programme."
        },
        {
          "t": "Référence maison",
          "d": "La base de comparaison TF1 pour lire les opérations des autres régies."
        }
      ],
      "concepts": [
        {
          "b": "Petit budget",
          "t": "La capsule TF1+",
          "d": "Un format court de marque autour des coulisses d'un programme TF1, avec un expert reconnu."
        },
        {
          "b": "Budget moyen",
          "t": "Les 24 h des créateurs",
          "d": "Des influenceurs vivent l'expérience d'un programme TF1, filmés pour TF1+ et les réseaux."
        },
        {
          "b": "Opération signature",
          "t": "Le partenaire 360",
          "d": "Une marque présente à l'antenne, sur TF1+, chez les créateurs et en retail sur toute une saison."
        }
      ],
      "partners": "Agences Beastly (influence) et Social Club (La Cabine)",
      "scope": "inspiration"
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
      "scope": "inspiration"
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
      "scope": "inspiration"
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
      "scope": "inspiration"
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
      "scope": "inspiration"
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
      "scope": "inspiration"
    }
  ]
};
