// quizzes/year-4/prothese-y4-y4.js

const prothesey4Quizzes = [
  {
    title: "Examen Clinique",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Lors de la réalisation d'une prothèse fixée:",
        options: [
          "la dévitalisation des dents pillers est recommandée",
          "L’examen radiologique est facultatif",
          "L’analyse occlusale se fait après réalisation de la prothèse",
          "le choix de la couleur se fait après la taille de la dent",
          "l’examen de la profondeur du sulcus est primordial"
        ],
        correctOptionIndexes: [4],
        explanation: "A : la dévitalisation n’est pas systématique. B : L'examen radiologique est indispensable. C : l'analyse occlusale doit être faite avant et pendant. D : le choix de la couleur est réalisé avant la préparation dentaire."
      },
      {
        questionText: "L'indication ou la contre-indication de l'ancrage dépend de :",
        options: [
          "La rétention exigée par le bridge.",
          "La vitalité pulpaire.",
          "L'importance du secteur édente.",
          "La situation de la dent sur l'arcade au niveau antérieure ou postérieur"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le choix de l'ancrage (ex: onlay, couronne, inlay-core) dépend de la vitalité (pulpée ou dépulpée), de l'étendue de l'édentement, de la position de la dent et de la rétention nécessaire."
      },
      {
        questionText: "La loi de DUCHANGE est utilisée pour :",
        options: [
          "Choisie les dents supports",
          "Choisie le type d'ancrage",
          "Choisie les dents pulpées",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "D'après la loi de Duchange: 'la somme des coefficient masticatoires des dents piliers doit être supérieur ou égale à la somme des coefficient masticatoire des dents absentes'."
      },
      {
        questionText: "Lors de l’examen clinique :",
        options: [
          "La hauteur de la dent intervient dans la rétention de la prothèse fixée",
          "L'examen radiologique est complémentaire",
          "Une mauvaise hygiène contre indique la réalisation de la prothèse fixée",
          "L'équilibration occlusale pré prothétique est systématique",
          "L'ancrage est choisi en fonction de la dent support"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La hauteur du moignon est un facteur clé de rétention. Une mauvaise hygiène est une contre-indication (au moins temporaire). L'ancrage dépend de la dent support. L'examen radiologique est indispensable (pas seulement complémentaire). L'équilibration n'est pas systématique (seulement si nécessaire)."
      },
      {
        questionText: "Lors de l’examen clinique :",
        options: [
          "La hauteur de la dent n'intervient pas dans la rétention de la prothèse fixée",
          "L'examen radiologique est facultatif",
          "Une mauvaise hygiène ne contre indiquée pas la réalisation prothétique",
          "L'ancrage est choisi en fonction de la dent support"
        ],
        correctOptionIndexes: [3],
        explanation: "L'ancrage est choisi en fonction de la dent support. Les autres propositions sont fausses : La hauteur est essentielle pour la rétention, l'examen radiologique est indispensable, et une mauvaise hygiène est une contre-indication."
      },
      {
        questionText: "La valeur d'une dent support est fonction : (1- De sa position sur l'arcade. 2- De la largeur de sa racine. 3- De la longueur de sa racine. 4- De son état parodontal. 5- Toutes les réponses sont justes.)",
        options: [
          "(1-3)",
          "(1-5)",
          "(3-4)",
          "(5)",
          "(2-4)"
        ],
        correctOptionIndexes: [3],
        explanation: "La valeur d'une dent support (pilier) dépend de tous ces facteurs combinés : sa position (loi de Roy), le volume de sa racine (largeur et longueur) et son état parodontal (tissu de soutien)."
      }
    ]
  },
  {
    title: "Principes Généraux de Préparation",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Le choix de la forme de la limite cervicale dépend :",
        options: [
          "De la situation prothétique",
          "Du cas clinique",
          "Des exigences de notre patient",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausse"
        ],
        correctOptionIndexes: [3],
        explanation: "Le choix de la forme de la limite cervicale dépend de la situation clinique (il n'y a pas de limite universelle) et du type de restauration prothétique (ex: CCM vs Céramo-céramique)."
      },
      {
        questionText: "La rétention d'une couronne de recouvrement total dépend :",
        options: [
          "De la surface de recouvrement : plus elle est grande meilleure est la rétention",
          "De l'angle de divergence des parois : l'angle variera entre 5° et 10°",
          "De la hauteur du moignon",
          "De la forme de la limite cervicale."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La rétention est principalement assurée par la hauteur du moignon et la surface totale de contact. L'angle de divergence (dépouille) doit être faible (idéalement 6-10°) ; un angle de 5-10° est correct, mais la proposition B est marquée à 0% dans la source, la rendant incorrecte dans ce QCM."
      },
      {
        questionText: "Le mouvement de renversement responsable du descellement d'un bridge est du :",
        options: [
          "Aux forces qui s'appliquent verticalement sur les versants cuspidiens.",
          "Aux forces qui s'appliquent horizontalement sur les versants cuspidiens",
          "Aux forces qui s'appliquent obliquement sur les versants cuspidiens",
          "Aux forces qui s'appliquent verticalement et latéralement sur les versants cuspidiens"
        ],
        correctOptionIndexes: [2],
        explanation: "Ce mouvement de renversement est provoqué par les forces obliques lors des mouvements mandibulaires (propulsion et latéralité)."
      },
      {
        questionText: "Pour augmenter la rétention d'une couronne céramo-metallique. il faut : (1- Accentuer la convergence des parois du moignon. 2- Accentuer l'anatomie cuspidienne. 3- Réduire la hauteur du moignon 4- Augmenter le parallélisme des parois... 5- Toutes les réponses sont fausses)",
        options: [
          "(1:3)",
          "(1,4)",
          "(3,4)",
          "(5)",
          "(2.4)"
        ],
        correctOptionIndexes: [4],
        explanation: "Pour augmenter la rétention : (2) Accentuer les reliefs occlusaux augmente la résistance à la rotation. (4) Augmenter le parallélisme (réduire la convergence/dépouille) rend la désinsertion plus difficile. (1) et (3) sont faux car ils diminuent la rétention."
      },
      {
        questionText: "La rétention d'une couronne sur une dent courte est améliorée : (1- En diminuant les reliefs cuspidiens 2- En diminuant le parallélisme des parois 3- En réalisant des surfaces occlusales planes 4- En augmentant le parallélisme des parois 5- En utilisant pour le scellement, des colles résines)",
        options: [
          "(1,2)",
          "(3,4)",
          "(1,5)",
          "(2,5)",
          "(4,5)"
        ],
        correctOptionIndexes: [4],
        explanation: "(4) Augmenter le parallélisme (réduire la dépouille) compense la faible hauteur. (5) Utiliser des colles résines (collage) offre une rétention chimique, bien supérieure au scellement mécanique, ce qui est crucial pour les moignons courts."
      },
      {
        questionText: "l'axe d'insertion dans le cas d'une prothèse unitaire :",
        options: [
          "Se fait par un mouvement de rotation vertical",
          "Il faut faire apparaitre une légère divergence des parois axiale",
          "L'angle de convergence des parois axiales doit être légèrement supérieur à 16°",
          "Se fait par un mouvement de translation vertical",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "L'axe d'insertion est une trajectoire rectiligne, un mouvement de translation vertical, par lequel la prothèse vient s'adapter sur la préparation."
      },
      {
        questionText: "Pour toute restauration prothétique postérieure, il convient de respecter le gradient thérapeutique en mettant en œuvre :",
        options: [
          "La solution la moins conservatrice pour le tissu dentaire en fonction du cas clinique",
          "La solution la plus conservatrice pour le tissu dentaire en fonction du cas clinique",
          "La solution la plus esthétique en fonction du cas clinique",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Le gradient thérapeutique impose de toujours choisir la solution la plus conservatrice (préservant le maximum de tissu dentaire sain) adaptée à la situation clinique."
      }
    ]
  },
  {
    title: "Introduction à la Prothèse Conjointe",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "L'inlay-core est :",
        options: [
          "Un ancrage à recouvrement total",
          "Un ancrage à recouvrement partiel",
          "Une couronne de substitution corono-radiculaire.",
          "Une couronne provisoire à recouvrement partiel",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0],
        explanation: "L'inlay-core (ou reconstitution corono-radiculaire) est un ancrage qui prépare la racine à recevoir un ancrage à recouvrement total (la couronne). La source indique 'Correcte' pour 'recouvrement total' et 'Faux' pour 'couronne de substitution' (qui est la Richmond)."
      },
      {
        questionText: "L'ancrage en prothèse conjointe est représentés par :",
        options: [
          "La partie de la prothèse conjointe qui recouvre l'espace édente",
          "La partie de la prothèse conjointe qui recouvre le moignon",
          "La partie de la prothèse conjointe qui assure la liaison entre deux dents piliers",
          "La partie de la prothèse conjointe qui remplace la dent absente",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ancrage est la partie de la prothèse (ex: la couronne) qui recouvre la dent support préparée (le moignon). La partie qui remplace la dent absente est le pontic ou intermédiaire."
      },
      {
        questionText: "Parmi les couronnes de recouvrement partiel on retrouve :",
        options: [
          "La facette.",
          "L'onlay.",
          "L'overlay.",
          "L'inlay-core",
          "L'inlay."
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "L'inlay, l'onlay, l'overlay et la facette sont des restaurations partielles. L'inlay-core est une reconstitution corono-radiculaire, pas une couronne de recouvrement partiel."
      }
    ]
  },
  {
    title: "Introduction à la Prothèse Collée",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Le collage en prothèse fixé peut se faire avec :",
        options: [
          "Une colle sans potentiel adhésif",
          "Une colle avec potentiel adhésif",
          "Une colle auto-adhésive",
          "Un composite flow"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le collage se fait avec des colles (ciments-résines) qui ont un potentiel adhésif, qu'il soit obtenu via un système adhésif (mordançage + primer/adhésif) ou qu'il soit 'auto-adhésif' (simplifié)."
      },
      {
        questionText: "Le collage a la céramique :",
        options: [
          "Nécessite l'application de l'acide suivi de silane pour la zircone",
          "Est précédé par le sablage avec l'alumine pour les céramiques mordançables",
          "Est optimum par l'application de silice pour les céramiques non mordançables",
          "Est obtenu par des colles de type MDP pour les céramiques renforcées"
        ],
        correctOptionIndexes: [3],
        explanation: "Les céramiques non mordançables (comme la zircone, une céramique renforcée) sont sablées, puis un primer spécifique contenant du MDP est appliqué pour créer une liaison chimique. Les céramiques mordançables (feldspathiques) sont mordancées (acide fluorhydrique) puis silanisées."
      },
      {
        questionText: "Le collage au métal :",
        options: [
          "Est obtenu par rétention mécanique",
          "Se fait par macro rétention",
          "Se fait par micro rétention",
          "Est obtenu par des cônes avec potentiel adhésif"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le collage au métal repose sur la création de rétentions mécaniques à sa surface. Celles-ci peuvent être macro-rétentives (ex: perforations, billes) ou micro-rétentives (obtenues par sablage, mordançage électrolytique, ou étamage)."
      },
      {
        questionText: "L'adhésif :",
        options: [
          "Se lie a la surface dentinaire",
          "Est une résine fluide",
          "Responsable de l'adhésion micromecanique avec la dentine lors du collage",
          "Doit pénétrer les canicules dentinaires",
          "Pénètre a la surface de la restauration prothétique pour former la couche hybride"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'adhésif est une résine fluide qui pénètre dans la dentine (tubuli/canalicules) après mordançage et application du primer. Il se lie à la dentine et forme la couche hybride, assurant une adhésion micromécanique."
      },
      {
        questionText: "Lors du collage en prothèse fixée, le primer :",
        options: [
          "est appliqué après l'adhésif",
          "contient un groupement fonctionnel hydrophobe",
          "contient un groupement fonctionnel hydrophile",
          "permet de dissoudre les composants minéraux de la dentine",
          "doit être rincé abondamment"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le primer est un agent de couplage. Il possède un côté hydrophile pour se lier à la dentine (humide) et un côté hydrophobe pour se lier à l'adhésif (résine hydrophobe). Il est appliqué avant l'adhésif et ne doit pas être rincé."
      },
      {
        questionText: "le système adhésif MR2 :",
        options: [
          "l'acide phosphorique et l'adhésif se trouvent dans un seul flacon",
          "l'acide phosphorique et le primer el l'adhésif se trouvent dans le même flacon",
          "On procède à l'application du prieur et l'adhésif sans mordançage",
          "On applique le primer avant l'adhésif",
          "la boue dentinaire est éliminée l'application de l'acide phosphorique suivi d'un rinçage"
        ],
        correctOptionIndexes: [4],
        explanation: "MR2 (Mordançage et Rinçage en 2 étapes) implique un mordançage séparé (acide phosphorique) qui élimine la boue dentinaire, suivi d'un rinçage. Ensuite, un flacon unique contenant le primer et l'adhésif est appliqué."
      },
      {
        questionText: "le collage à l'email :",
        options: [
          "est partiellement chimique",
          "est partiellement micromécanique",
          "est physico-chimique",
          "se fait essentiellement sur une surface aprismatique",
          "nécessite le mordançage à l'acide fluoridrique pendant 15 secondes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le collage à l'émail est principalement micromécanique (créé par l'acide orthophosphorique à 37%) mais aussi physico-chimique. Il est moins efficace sur l'émail aprismatique."
      },
      {
        questionText: "Le primer :",
        options: [
          "Est un promoteur d'adhésion",
          "Permet une liaison chimique au métal de la restauration prothétique",
          "Permet une liaison chimique aux fibres collagéniques de la dentine",
          "Contient un groupe fonctionnel hydrophobe",
          "Contient un groupe fonctionnel hydrophile"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Le primer est un promoteur d'adhésion (agent de couplage) avec un pôle hydrophile (pour la dentine/collagène) et un pôle hydrophobe (pour la résine/adhésif)."
      },
      {
        questionText: "La colle de choix pour les alliages métalliques, c'est :",
        options: [
          "10-MDP",
          "4-MDP",
          "10-MET",
          "4-MET",
          "Aucune de ces colles ne convient aux alliages"
        ],
        correctOptionIndexes: [3],
        explanation: "Les résines “4-META” (4-méthacryloyloxyéthyl trimellitate anhydride) ex: SuperBond®, sont la colle de choix pour les alliages métalliques."
      },
      {
        questionText: "L'assemblage des restaurations à base de céramique vitreuse nécessite :",
        options: [
          "Un conditionnement du substrat dentaire à l'acide fluorhydrique",
          "Un conditionnement du substrat dentaire et/ou prothétique",
          "Un agent de couplage (le silane) et un mordançage de la pièce prophétique",
          "Aucun conditionnement",
          "Un collage SOUS digue à l'aide d'une colle sans potentiel adhésif intrinèèque"
        ],
        correctOptionIndexes: [2],
        explanation: "Les céramiques vitreuses (mordançables) nécessitent un mordançage de l'intrados prothétique (acide fluorhydrique) suivi de l'application d'un agent de couplage (silane) pour lier la céramique à la résine de collage."
      },
      {
        questionText: "La colle de choix pour les alliages métalliques, c'est :",
        options: [
          "10-MDP. [cite: 2984]",
          "4-MDP. [cite: 2985]",
          "10-MET [cite: 2986]",
          "4-MET [cite: 2987]",
          "Aucune de ces colles ne convient aux alliages. [cite: 2988]"
        ],
        correctOptionIndexes: [3],
        explanation: "Les résines “4-META” : [cite: 2990] (4-méthacryloyloxyéthyl trimellitate anhydride) [cite: 2991] ex : SuperBond® de Sun Medical, Total C-ram® de ITENA. [cite: 2992] – C’est la colle de choix pour les alliages métalliques. » [cite: 2993]"
      },
      {
        questionText: "Lors du collage en prothèse fixée, le primer :",
        options: [
          "est appliqué après l'adhésif [cite: 3000]",
          "contient un groupement fonctionnel hydrophobe [cite: 3001]",
          "contient un groupement fonctionnel hydrophile [cite: 3002]",
          "permet de dissoudre les composants minéraux de la dentine [cite: 3003]",
          "doit être rincé abondamment [cite: 3004]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Ils peuvent réagir avec les deuxmatériaux de façon à rétablir leur adhésion. [cite: 3006] A : avant l’adhésif [cite: 3007]"
      },
      {
        questionText: "le système adhésif MR2 :",
        options: [
          "l'acide phosphorique et l'adhésif se trouvent dans un seul flacon [cite: 3014]",
          "l'acide phosphorique et le primer el l'adhésif se trouvent dans le même flacon [cite: 3015]",
          "On procède à l'application du prieur et l'adhésif sans mordançage [cite: 3016]",
          "On applique le primer avant l'adhésif [cite: 3017]",
          "la boue dentinaire est éliminée l'application de l'acide phosphorique suivi d'un rinçage [cite: 3018]"
        ],
        correctOptionIndexes: [4],
        explanation: " [cite: 3019]"
      },
      {
        questionText: "le collage à l'email :",
        options: [
          "est partiellement chimique [cite: 3027]",
          "est partiellement micromécanique [cite: 3028]",
          "est physico-chimique [cite: 3029]",
          "se fait essentiellement sur une surface aprismatique [cite: 3030]",
          "nécessite le mordançage à l'acide fluoridrique pendant 15 secondes [cite: 3031]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "est l’application d’acide orthophosphorique à 37 %, durant 15 secondes. [cite: 3033] Surface aprismatique peu propice au collage. [cite: 3034]"
      },
      {
        questionText: "Le primer :",
        options: [
          "Est un promoteur d'adhésion [cite: 3041]",
          "Permet une liaison chimique au métal de la restauration prothétique [cite: 3042]",
          "Permet une liaison chimique aux fibres collagéniques de la dentine [cite: 3043]",
          "Contient un groupe fonctionnel hydrophobe [cite: 3044]",
          "Contient un groupe fonctionnel hydrophile [cite: 3045]"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: ""
      },
      {
        questionText: "Le collage a Ia céramique :",
        options: [
          "Nécessite l'application de l'acide suivi de silane pour la zircone [cite: 3053]",
          "Est précédé par le sablage avec l'alumine pour les céramiques mordançables [cite: 3054]",
          "Est optimum par l'application de silice pour les céramiques non mordançables [cite: 3055]",
          "Est obtenu par des colles de type MDP pour les céramiques renforcées [cite: 3056]",
          "Toutes les réponses sont fausses [cite: 3057]"
        ],
        correctOptionIndexes: [3],
        explanation: "Céramiques mordançables : on dépose à la surface de la céramique un silane [cite: 3059] Céramiques non mordançables : -Le traitement par sablage de l’intrados de la prothèse avec de l’alumine à 50 μm [cite: 3060]"
      },
      {
        questionText: "Le collage au métal :",
        options: [
          "Est obtenu par rétention mécanique [cite: 3067]",
          "Se fait par macro rétention [cite: 3068]",
          "Se fait par micro rétention [cite: 3069]",
          "Est obtenu par des cônes avec potentiel adhésif [cite: 3070]",
          "Toutes les réponses sont fausses [cite: 3071]"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "L'adhésif :",
        options: [
          "Se lie a la surface dentinaire [cite: 3079]",
          "Est une résine fluide [cite: 3080]",
          "Responsable de l'adhésion micromecanique avec la dentine lors du collage [cite: 3081]",
          "Doit pénétrer les canicules dentinaires [cite: 3082]",
          "Pénètre a la surface de la restauration prothétique pour former la couche hybride [cite: 3083]"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Le collage en prothèse fixé peut se faire avec :",
        options: [
          "Une colle sans potentiel adhésif [cite: 3090]",
          "Une colle avec potentiel adhésif [cite: 3091]",
          "Une colle auto-adhésive [cite: 3092]",
          "Un composite flow [cite: 3093]",
          "Toutes les réponses sont fausses [cite: 3094]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      },
      {
        questionText: "L'assemblage des restaurations à base de céramique vitreuse nécessite :",
        options: [
          "Un conditionnement du substrat dentaire à l'acide fluorhydrique. [cite: 3101]",
          "Un conditionnement du substrat dentaire et/ou prothétique. [cite: 3102]",
          "Un agent de couplage (le silane) et un mordançage de la pièce prophétique. [cite: 3103]",
          "Aucun conditionnement [cite: 3104]",
          "Un collage SOUS digue à l'aide d'une colle sans potentiel adhésif intrinèèque. [cite: 3105]"
        ],
        correctOptionIndexes: [2],
        explanation: "Le Silane : [cite: 3107] C’est un agent de couplage assurant la liaison entre la céramique et la résine de collage. [cite: 3108] 1: Mordançage de l’intrados de la pièce prothétique à l’acide fluorhydrique à 9 % pendant 60”. [cite: 3109] Conditionnement des surfaces dentaires : [cite: 3110] - Nettoyage des surfaces à coller (Ultrasons, pâtes abrasives sans fluorures). [cite: 3111] - Mise en place de la digue (pour un champ opératoire sec et propre). [cite: 3112] Céramiques mordançables : (Silicates) [cite: 3113] • Mordançage de l’intrados de la pièce prothétique à l’acide fluorhydrique à 9 % pendant 60”. [cite: 3114] • Rinçage abondant de l’agent de mordançage , séchage. [cite: 3115] • Application d’un agent de couplage “ le Silane “ sur la céramique mordancée pendant 1 minute puis séchage. [cite: 3116] ➡ Ce type de céramique étant translucide permet la photopolymérisation. [cite: 3117]"
      }
    ]
  },
  {
    title: "Limites Cervicales",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Quels sont les intérêts de l'épaulement en prothèse conjointe?:",
        options: [
          "Il assure une rétention mécanique de la restauration.",
          "Il fournit une zone de transition entre la surface de la dent et la prothèse.",
          "Il est particulièrement utile pour les restaurations en ceramo-ceramique.",
          "Il facilite l'adaptation de la couronne sur la dent préparée."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'épaulement est indiqué pour les couronnes céramo-céramiques car il offre une épaisseur suffisante au matériau. Il assure aussi une bonne rétention (par son mur axial) et facilite l'adaptation marginale."
      },
      {
        questionText: "En prothèse fixée, les préparations intra-sulculaires: (1- Sont les plus délicates à réaliser 2- Facilitent la prise d'empreinte et le scellement de la couronne prothétique 3- Augmentent la rétention des préparations périphériques 4- Sont des préparations inesthétiques 5- Sont des préparations biologiques)",
        options: [
          "(1,2,3)",
          "(2,3,4)",
          "(1,3)",
          "(3,4)",
          "(2,4)"
        ],
        correctOptionIndexes: [2],
        explanation: "(1) Elles sont délicates car la visibilité est réduite. (3) Elles augmentent la hauteur du moignon préparé, donc la rétention. (2) Elles compliquent l'empreinte. (4) Elles sont indiquées pour l'esthétique. (5) Elles présentent un risque biologique pour l'attache gingivale."
      },
      {
        questionText: "La limite cervicale est :",
        options: [
          "Une limite entre le parodonte profond et superficiel",
          "Une limite entre le parodonte profond et Ia dent préparé",
          "Une limite entre la partie préparée et la partie non préparée de la gencive",
          "Une limite entre La partie préparé et la partie non préparée du moignon Dentaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "La limite cervicale est la ligne de finition de la préparation ; c'est la jonction entre la partie de la dent qui a été taillée et la partie qui est restée intacte."
      },
      {
        questionText: "l'inconvénient de la limite cervicale supra gingivale est :",
        options: [
          "Un contrôle difficile lors de la taille du moignon,",
          "Un contrôle difficile lors de l'empreinte du moignon",
          "Un contrôle difficile de cette limite par le prothésiste au laboratoire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "L'inconvénient majeur de la limite supra-gingivale est son aspect inesthétique. Tous les contrôles (taille, empreinte, laboratoire) sont au contraire facilités car la limite est visible et accessible."
      },
      {
        questionText: "En prothèse fixe, une préparation cervicale périphérique de type épaulement :",
        options: [
          "Est plus conservatrice qu'une préparation cervicale type chanfrein",
          "Impose en complément la réalisation d'un angle interne arrondi",
          "Est indiquée pour les couronnes céramo-céramiques",
          "Est indiquée pour les couronnes métalliques"
        ],
        correctOptionIndexes: [2],
        explanation: "L'épaulement est la préparation de choix pour les couronnes tout céramique car il ménage une épaisseur suffisante. Il est cependant très mutilant (moins conservateur que le chanfrein). L'angle interne doit être arrondi pour éviter les stress."
      },
      {
        questionText: "En prothèse fixée, les préparations intra-sulculaire :",
        options: [
          "Sont les plus délicates à réaliser",
          "Facilitent la prise d'empreinte et le scellement de la couronne prothétique",
          "Augmentent la rétention des préparations périphériques",
          "Sont des préparations inesthétiques"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Elles sont délicates à réaliser (manque de visibilité) mais augmentent la hauteur de la préparation et donc la rétention. Elles sont utilisées pour des raisons esthétiques."
      }
    ]
  },
  {
    title: "La Couronne Coulée",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Quels sont les principes de taille des dents à considérer lors de la préparation pour une couronne coulée ?:",
        options: [
          "Minimiser la réduction de la structure dentaire saine.",
          "Éviter les parois trop minces qui pourraient fragiliser les piliers.",
          "Réaliser une préparation à congé",
          "Maintenir une hauteur de préparation suffisante pour garantir la rétention de la couronne.",
          "Ignorer la considération des parois dentaires car la couronne renforce la dent."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La préparation doit être la moins mutilante possible (A), tout en assurant une épaisseur suffisante pour la couronne et la dent (B), une hauteur suffisante pour la rétention (D), et une limite en congé (C), qui est la limite de choix pour les couronnes métalliques."
      },
      {
        questionText: "Pourquoi est-il crucial de vérifier l'occlusion lors de la pose clinique d'une couronne coulée en métal?:",
        options: [
          "Pour éviter les contraintes excessives sur la dent préparée et sur les structures environnantes.",
          "Pour minimiser le risque d'inconfort pour le patient pendant la mastication.",
          "Pour maximiser la stabilité marginale de la couronne.",
          "Pour garantir une adhérence maximale entre la couronne et la dent préparée."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Une occlusion incorrecte (surocclusion) entraîne des contraintes excessives (A) et de l'inconfort (B). L'ajustement occlusal garantit la stabilité et la longévité de la restauration (C). L'adhérence (D) dépend du ciment."
      },
      {
        questionText: "Quels sont les avantages de l'utilisation d'une couronne à incrustation vestibulaire par rapport à une couronne complète en métal?:",
        options: [
          "Conservation de la structure dentaire saine.",
          "Renforcement significatif de la dent préparée.",
          "Minimisation du risque de sensibilité post-opératoire",
          "Meilleure esthétique due à la présence d'un matériau cosmétique sur la face vestibulaire de la couronne.",
          "Coût moindre pour le patient."
        ],
        correctOptionIndexes: [3],
        explanation: "L'avantage principal de la CIV (Couronne à Incrustation Vestibulaire) par rapport à la couronne coulée (CC) est l'esthétique, grâce à la facette cosmétique vestibulaire."
      },
      {
        questionText: "La couronne coulée peut être utilisée comme ancrage :",
        options: [
          "De bridge de grand porté",
          "De bridge de moyenne porté intéressant le bloc incisivo-canin supérieur",
          "Unitaire de la première prémolaire supérieure",
          "Sur une molaire ayant une réaction péri apicale au niveau de la racine distale non traitée",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "La couronne coulée est très résistante et offre une excellente rétention, elle est donc l'ancrage de choix pour les bridges de grande étendue (en l'absence d'exigence esthétique). Les lésions apicales non traitées sont une contre-indication."
      },
      {
        questionText: "La réduction de la face occlusale d'une dent afin d'être restaurée par une couronne coulée CC:",
        options: [
          "Se fait par une mise à plat de toute la face occlusale",
          "Se fait par une mise à plat de la cuspide guide uniquement",
          "Est plus importante sur la cuspide d'appui que sur cuspide guide",
          "Est plus importante sur la cuspide guide que sur cuspide d'appui",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La réduction occlusale doit être anatomique (suivre les pentes cuspidiennes) et être plus importante sur les cuspides d'appui (1.5mm) que sur les cuspides guides (1mm) pour assurer une épaisseur de métal suffisante."
      },
      {
        questionText: "L'intégration biologique de la couronne coulée :",
        options: [
          "Permet de respecter le parodonte marginal",
          "Permet de respecter le parodonte profond",
          "Ne permet pas de respecter le profil d'émergence",
          "Toutes les réponses sont justes.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une couronne bien réalisée, avec des limites précises et un profil d'émergence correct, doit s'intégrer biologiquement en respectant le parodonte marginal (gencive) et profond (attache)."
      },
      {
        questionText: "La limite cervicale d'un moignon court destine à recevoir un ancrage type couronne coulée est :",
        options: [
          "Située en supra-gingivale",
          "Située en juxta-gingivale",
          "Située en intra-sulculaire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Pour un moignon court, la rétention est faible. On cherche donc à augmenter la hauteur de la préparation en plaçant la limite en intra-sulculaire pour maximiser la surface de rétention."
      },
      {
        questionText: "Lors de la taille de la face occlusale d'un moignon destine à recevoir un ancrage type couronne coulée :",
        options: [
          "On réalise un chanfrein de la cuspide guide",
          "On réalise un chanfrein de la cuspide d'appui",
          "On aplatit toute la face occlusale",
          "On taille beaucoup plus la cuspide guide par apport a la cuspide d'appui",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1],
        explanation: "Pour les couronnes coulées, un chanfrein fonctionnel (biseau large) est réalisé sur le versant externe des cuspides d'appui (Vestibulaires mandibulaires, Palatines maxillaires) pour assurer une épaisseur de métal suffisante."
      }
    ]
  },
  {
    title: "La Couronne à Incrustation Vestibulaire",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Quelles sont les caractéristiques d'une couronne à incrustation vestibulaire bien adaptée ?",
        options: [
          "Absence de surplombs excessifs.",
          "Une bonne adaptation marginale.",
          "Un ajustement précis au niveau de la partie vestibulaire de la dent.",
          "Une occlusion appropriée sans interférences.",
          "Une couleur partiellement assortie à celle des dents adjacentes."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Toutes ces caractéristiques sont requises (A, B, C, D). La couleur doit être parfaitement assortie, et non 'partiellement' (E est faux)."
      },
      {
        questionText: "Le joint dento-prothétique d'une restauration prothétique céramo-métallique peut être : (1- En céramique sur la face vestibulaire de la dent et métallique sur la face palatine 2- En céramique sur la face vestibulaire et palatine de la dent 3- Métallique sur la face vestibulaire de la dent et céramique sur la face palatine 4- Métallique sur la face vestibulaire et palatine de la dent 5- Toutes les réponses sont fausses)",
        options: [
          "(1,2,3)",
          "(1,3,4)",
          "(2,3,4)",
          "(5)",
          "(1,2,4)"
        ],
        correctOptionIndexes: [4],
        explanation: "Le joint (limite) peut être : (1) Céramique en vestibulaire et métal en palatin (le plus courant pour l'esthétique), (2) Tout céramique (épaulement circulaire), ou (4) Tout métallique (congé métallique circulaire). L'option (3) est fausse."
      },
      {
        questionText: "La couronne a incrustation vestibulaire est indiquée pour :",
        options: [
          "Une dent fortement délabrée",
          "Une dent présentant une mobilité dentaire importante",
          "La région visible de l’arcade",
          "Les dents antérieures uniquement",
          "Restauration unitaire et plurale"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "La CIV est indiquée pour la région visible (esthétique) et peut servir de restauration unitaire ou d'ancrage de bridge (plurale). Elle est contre-indiquée si le délabrement est trop important ou si la mobilité est forte."
      },
      {
        questionText: "La couronne a incrustation vestibulaire en résine est une couronne qui :",
        options: [
          "Ne possède pas la solidité d’une couronne a recouvreront métallique",
          "Possède une meilleure solidité qu'une couronne a recouvrement métallique",
          "Ne subit pas une décoloration par infiltration de l’élément cosmétique",
          "Présente un risque de descellement de l'élément cosmétique",
          "Permet le rétablissement de l'esthétique"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Elle permet de rétablir l'esthétique (D). Cependant, la résine (contrairement à la céramique) n'a pas d'adhésion chimique au métal, d'où un risque de descellement (C). Elle subit aussi une décoloration et une usure."
      },
      {
        questionText: "Couronne a incrustation vestibulaire est contre indiquée :",
        options: [
          "Lorsque l'occlusion est serre",
          "Pour des dents en malposition",
          "Sur une dent dépulpée délabrée",
          "En présence d’une lésion apicale non traitée",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Toute lésion apicale non traitée est une contre-indication à une restauration prothétique permanente. Les autres options (A, B, C) sont des indications."
      },
      {
        questionText: "La couronne a incrustation vestibulaire :",
        options: [
          "Est une couronne à recouvrement partiel",
          "Fait partie des couronnes céramo-métalique",
          "Est une couronne à recouvrement total.",
          "Porte sur l'ensemble de ses faces un élément cosmétique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "C'est une couronne de recouvrement total (C) qui fait partie de la famille des couronnes céramo-métalliques (ou résine-métal) (B). L'élément cosmétique n'est que sur la face vestibulaire."
      },
      {
        questionText: "La couronne à incrustation vestibulaire est indiquée :",
        options: [
          "Pour la région visible de l'arcade",
          "Lorsque l'occlusion est serrée",
          "Pour restauration unitaire uniquement",
          "Toutes les réponses sont fausses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Elle est indiquée pour la région visible (grâce à sa facette esthétique) et lorsque l'occlusion est serrée (car la face palatine/occlusale est en métal résistant)."
      },
      {
        questionText: "Lors de la préparation de l'ancrage pour réaliser une CIV :",
        options: [
          "La face vestibulaire est taillée selon deux plans incisifs et cervicaux",
          "La face vestibulaire est taillée selon un plan incisif",
          "La mise de dépouille des faces proximales et obtenue avec une fraise boule diamantée",
          "La limite cervicale au niveau de la face palatine est un épaulement",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "La face vestibulaire des dents antérieures doit être réduite en deux plans (cervical et incisif) pour préserver le tissu dentaire et créer suffisamment d'espace pour le cosmétique. La limite palatine est un congé."
      },
      {
        questionText: "Le descellement du matériau cosmétique est du :",
        options: [
          "L'absence d'adhésion du matériau cosmétique",
          "A l'absence de cohésion du matériau cosmétique",
          "A une réduction insuffisante de la face vestibulaire.",
          "Toutes les réponses sont fausses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Ceci est particulièrement vrai pour les CIV en résine, où l'adhésion au métal est faible (principalement mécanique) et le risque de descellement de la facette est élevé."
      }
    ]
  },
  {
    title: "La Couronne Jacket",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Au laboratoire, la matrice en platine de la couronne Jacket:",
        options: [
          "est destinée à supporter la porcelaine au cours de la cuisson.",
          "doit être laminée en feuilles minces de 2/100 mm.",
          "ne doit pas s'oxyder pendant la cuisson",
          "ne doit pas contracter de liaison avec la céramique.",
          "doit voir un point de fusion inférieur à celui de la céramique."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La matrice en feuille de platine sert de support (A), ne doit pas s'oxyder (C) ni se lier à la céramique (D) pour être retirée après cuisson. Son point de fusion doit être *supérieur* à celui de la céramique (E est faux). L'épaisseur est de 0.025mm, soit 2.5/100 mm (B est faux)."
      },
      {
        questionText: "La couronne Jacket est indiquée :",
        options: [
          "Lorsque les impératifs esthétiques ne priment pas",
          "Sur dents fracturées sans mise à nu de la pulpe.",
          "Sur dents fracturées avec mise à nu de la pulpe.",
          "Chez les patients âgés, dans le cas de couronne Jacket en porcelaine.",
          "Chez les patients jeunes, dans le cas de couronne Jacket en résine."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Indications : Dents inesthétiques, fractures sans mise à nu pulpaire (B). La version en résine est souvent indiquée chez les patients jeunes (E)."
      },
      {
        questionText: "La matrice de platine destinée à supporter la porcelaine au cours de Ia cuisson d'une couronne Jacket :",
        options: [
          "Est réaliser avec un métal laminé en feuilles minces de 20/10mm",
          "Ne doit pas s'oxyder pendant la cuisson",
          "Doit contracter de liaison avec la céramique",
          "Doit être suffisamment rigide",
          "Doit avoir un point de fusion supérieur a celui de la céramique"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La matrice doit être rigide (D), ne pas s'oxyder (B) et avoir un point de fusion supérieur à la céramique (E). Elle ne doit pas contracter de liaison (C est faux)."
      },
      {
        questionText: "La couronne Jacket:",
        options: [
          "Résine ou en céramique",
          "Sa limite cervicale est un épaulement vestibulaire relié d'un congé palatin ou lingual",
          "Peut être utilisée comme ancrage partiel de bridge",
          "Peut être élaborée au laboratoire par la technique de mise en moufle quand elle est réalisée en céramique",
          "Peut-être usinée par CFAO"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "La couronne Jacket est une restauration unitaire (C est faux) en résine ou céramique (A). Elle peut être usinée (CFAO) (E). La limite est un épaulement continu (B est faux). La mise en moufle concerne la résine (D est faux)."
      },
      {
        questionText: "Couronne Jacket :",
        options: [
          "Est une coiffe de recouvrement total constituée d’une matrice et d'une supra structure en résine ou en céramique",
          "Sa limite cervicale est un épaulement vestibulaire relie d'un conge palatin ou lingual",
          "Peut être utilisé comme ancrage partiel de bridge",
          "Peut être élaboré au laboratoire par la technique de mise en moufle quand elle est réalisée en céramique",
          "Peut-être usinée par CFAO"
        ],
        correctOptionIndexes: [4],
        explanation: "C'est une coiffe de recouvrement total (A est faux, pas de matrice dans la version finale). La limite est un épaulement continu (B est faux). C'est une CI comme pilier de bridge (C est faux). La mise en moufle concerne la résine (D est faux). Elle peut être usinée par CFAO (E)."
      }
    ]
  },
  {
    title: "Les Procédés Céramo-Céramiques",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "En prothèse fixée, la perception de la couleur est :",
        options: [
          "Physique: selon la qualité de perception et d'interprétation de l'œil et du cerveau.",
          "Physique: dépendant directement de l'interaction lumière/objet observé.",
          "Physiologique : en relation avec l'affect, l'émotion, l'interprétation culturelle et l'environnement immédiat de la couleur observée.",
          "Physiologique: selon la qualité de perception et d'interprétation de l'oeil et du cerveau",
          "Psychologique : en relation avec l'affect, l'émotion, l'interprétation culturelle et l'environnement immédiat de la couleur observée"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La couleur a une composante Physique (interaction lumière/objet), Physiologique (perception par l'œil et interprétation par le cerveau) et Psychologique (affect, culture)."
      },
      {
        questionText: "Les impératifs qui dictent la préparation d'une dent antérieure pour une couronne céramo céramique",
        options: [
          "La longueur de moignon compatible avec le couple rétention résistance.",
          "La largeur de moignon compatible avec le couple rétention-résistance.",
          "L'épaisseur suffisante du métal assurant un bon rendu esthétique.",
          "L'épaisseur suffisante de céramique assurant un bon rendu esthétique.",
          "L'espace palatin ou lingual nécessaire à la fonction occlusale et au guidage antérieur"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Il faut une hauteur suffisante pour la rétention (A), une épaisseur suffisante pour la céramique (esthétique et résistance) (D), et préserver l'espace pour la fonction occlusale (E). (C) est faux car il n'y a pas de métal."
      },
      {
        questionText: "La facette en céramique :",
        options: [
          "Est indiquée dans le cas de fracture coronaire basse",
          "Est indiquée clans le cas de fracture coronaire haute",
          "A une épaisseur qui varie entre 1mm et 1.5 mm",
          "Nécessite impérativement une préparation avec un retour palatin",
          "Permet un allongement de couronnes cliniques courtes"
        ],
        correctOptionIndexes: [4],
        explanation: "Les facettes permettent de corriger la forme, y compris allonger des couronnes courtes (E). L'épaisseur est plus faible (0.4-0.8mm) (C est faux)."
      },
      {
        questionText: "La zircone : (1- Est un composé minéral de dioxyde d'yttrium 2- Possède des cristaux d'oxyde d'aluminium 3- Permet la conception des infrastructures en prothèse fixée uniquement 4- Ne contient que des cristaux minéraux sans aucune phase vitreuse 5- Est appelée aussi une céramique polycristalline)",
        options: [
          "(1,2)",
          "(3,4)",
          "(4,5)",
          "(1,4,5)",
          "(1,3,5)"
        ],
        correctOptionIndexes: [3],
        explanation: "La zircone (ZrO2) est stabilisée à l'yttrium (1). C'est une céramique polycristalline (5) ne contenant pas de phase vitreuse (4). Ses indications sont larges, pas seulement les infrastructures de PF (3 est faux)."
      },
      {
        questionText: "la zircone :",
        options: [
          "Est un compose minéral de diaxyde d'yttrium",
          "Contient que des cristaux minéraux sans aucune phase vitreuse",
          "Permet la conception d'infrastructures en prothèse fixée",
          "Est une céramique cuite sur un revêtement réfractaire",
          "Fait appel a un procédé d'usinage"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Zircone stabilisée à l'yttrium (A), polycristalline sans phase vitreuse (B), utilisée pour les infrastructures (C) et mise en œuvre par usinage (CFAO) (E). Les céramiques cuites sont les feldspathiques (D est faux)."
      },
      {
        questionText: "Le procédé d'usinage:",
        options: [
          "intéresse les céramiques à base de zircone",
          "intéresse les céramiques alumineuses",
          "intéresse les vitro céramiques renforcées",
          "intéresse les céramiques polycristallines",
          "permet la conception de restaurations monolithiques"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "L'usinage (CFAO) est un procédé qui s'applique à tous ces types de céramiques : polycristallines (Zircone, Alumine) et vitro-céramiques (renforcées). Il permet de créer des restaurations monolithiques (en un seul bloc)."
      },
      {
        questionText: "La restauration céramo céramique :",
        options: [
          "nécessite une préparation avec une limite cervicale en forme d'épaulement à angle droit",
          "nécessite une mise de dépouille bien marquée",
          "peut-être usinée",
          "est à infrastructure zircone recouverte d'une céramique dite « ln céram »",
          "ne peut se concevoir comme ancrage dans le cas de bridge de grande étendue"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les CCC peuvent être usinées (C). Elles nécessitent une dépouille claire (B). La limite doit être un épaulement à angle interne *arrondi* (A est faux). La zircone *peut* être utilisée pour des bridges de grande étendue (E est faux)."
      },
      {
        questionText: "La facette céramique :",
        options: [
          "est indiquée pour corriger des malpositions légères",
          "sa préparation conserve toujours le point de contact",
          "sa limite au niveau proximale est dite toboggan lorsque le point de contact est supprimé",
          "peut être usinée",
          "peut fermer un grand diastème"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les facettes corrigent les malpositions légères (A) et peuvent être usinées (CFAO) (D). La fermeture d'un *grand* diastème est compliquée (E est faux)."
      },
      {
        questionText: "Les céramiques polycristallines :",
        options: [
          "Sont des céramiques à matrice vitreuse avec phase cristalline dispersée",
          "Sont des céramiques à matrice cristalline avec phase vitreuse dispersée",
          "Leur indication est limitée aux restaurations unitaires",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Elles ne contiennent que des cristaux minéraux sans aucune phase vitreuse (A et B sont faux). Leurs indications incluent les bridges de grande étendue (Zircone) (C est faux)."
      },
      {
        questionText: "La restauration ceramo - céramique :",
        options: [
          "Ne peut se faire sur des dents vivantes",
          "Est indiquée dans le cas des dents antérieures très minces",
          "Exige une limite cervicale en forme d'un épaulement a angle droit",
          "Nécessite une réduction homothétique avec des angles vifs",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Elle peut se faire sur dent vivante (A est faux). Elle est CI sur dents minces (B est faux). Elle exige un épaulement à angle interne *arrondi* et des angles *arrondis* (C et D sont faux)."
      },
      {
        questionText: "Les céramiques dentaires :",
        options: [
          "Présentent un excellent état de surface mais une grande adhésion a de la plaque dentaire",
          "Présentent une grande résistance a la compression et a la flexion",
          "Présentent une faible résistance a la compression et a la traction",
          "Sont des matériaux bio- inertes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Les céramiques sont très biocompatibles (bio-inertes) (D). Elles ont une faible adhésion à la plaque (A est faux). Elles résistent bien à la compression mais mal à la traction/flexion (B et C sont faux)."
      },
      {
        questionText: "Les vitrocéramiques renforcées sont :",
        options: [
          "Des céramiques polycristallines renforcées a la leucite",
          "Des céramiques polycristallines renforcées au disilicate de lithium",
          "Indiquées pour les infrastructures et non pour le recouvrement cosmétique",
          "Mises en œuvre par le procédé de cuisson ou par la pressée mais impossible par l'usinage",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Ce sont des *vitro*céramiques, pas des polycristallines (A, B faux). Elles peuvent être monolithiques (C faux). Elles peuvent être usinées (D faux)."
      },
      {
        questionText: "Les restaurations céramiques monolithiques peuvent être réalisées avec :",
        options: [
          "de la céramique feldspathique cuite sur modèle réfractaire [cite: 2514]",
          "une armature métallique recouverte de céramique [cite: 2515]",
          "de la vitrocéramique renforcée pressée ou usinée [cite: 2516]",
          "de la zircone usinée par CFAO [cite: 2517]",
          "de la zircone renforcée [cite: 2518]"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : « Les céramiques cuites sur revêtement réfractaire : ce sont des céramiques feldspathiques et vitrocéramiques. [cite: 2520] Ce procédé est par stratification (multicouche), pas monolithique. [cite: 2521] B : céramo-métallique, pas monolithique. [cite: 2522]"
      },
      {
        questionText: "Parmi ces matériaux, lesquels sont des céramiques polycristallines?:",
        options: [
          "Feldspath [cite: 2529]",
          "Alumine [cite: 2530]",
          "Vitrocéramique [cite: 2531]",
          "Disilicate de Lithium [cite: 2532]",
          "Zircone [cite: 2533]"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "« Les céramiques polycristallines ne contiennent que des cristaux minéraux sans aucune phase vitreuse. [cite: 2535] L’alumine et la zircone permettent la conception d’infrastructures aux propriétés mécaniques importantes. » [cite: 2536]"
      },
      {
        questionText: "Concernant la préparation pour une couronne céramo-céramique (CCC):",
        options: [
          "une réduction occlusale minimale de 0,5mm est suffisante [cite: 2543]",
          "une réduction palatine est plus importante que vestibulaire [cite: 2544]",
          "une réduction vestibulaire de 1 à 1,5 mm est recommandée [cite: 2545]",
          "la limite cervicale est en forme d'un épaulement à angle droit [cite: 2546]",
          "les angles vifs doivent être accentués pour guider l'insertion [cite: 2547]"
        ],
        correctOptionIndexes: [2],
        explanation: "« Une réduction tissulaire, impérativement homothétique, doit ménager une épaisseur suffisante pour la céramique tout en préservant la vitalité pulpaire. [cite: 2549] Réduction vestibulaire : 1 à 1,5 mm ; [cite: 2550] Réduction proximale : 1 mm ; [cite: 2551] Réduction occlusale/incisale : 1,5 à 2 mm ; [cite: 2552] Réduction palatine : 1 à 1,2 mm. [cite: 2553] L’épaulement doit être à angle interne arrondi, jamais droit. [cite: 2554] Les angles vifs doivent être arrondis (éviter la concentration de contraintes). » [cite: 2555]"
      },
      {
        questionText: "Une facette céramique est indiquée dans les situations suivantes :",
        options: [
          "dyschromie sévère d'origine médicamenteuse sur dent dépulpée [cite: 2562]",
          "fluorose modérée avec défauts d'émail localisés [cite: 2563]",
          "diastème important avec pertes de substances étendues [cite: 2564]",
          "carie proximale profonde sur prémolaire [cite: 2565]",
          "légères malpositions dentaires [cite: 2566]"
        ],
        correctOptionIndexes: [1, 4],
        explanation: ""
      },
      {
        questionText: "Le procédé d'usinage:",
        options: [
          "intéresse les céramiques à base de zircone [cite: 2574]",
          "intéresse les céramiques alumineuses [cite: 2575]",
          "intéresse les vitro céramiques renforcées [cite: 2576]",
          "intéresse les céramiques polycristallines [cite: 2577]",
          "permet la conception de restaurations monolithiques [cite: 2578]"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: ""
      },
      {
        questionText: "La restauration céramo céramique :",
        options: [
          "nécessite une préparation avec une limite cervicale en forme d'épaulement à angle droit [cite: 2585]",
          "nécessite une mise de dépouille bien marquée [cite: 2586]",
          "peut-être usinée [cite: 2587]",
          "est à infrastructure zircone recouverte d'une céramique dite « ln céram » [cite: 2588]",
          "ne peut se concevoir comme ancrage dans le cas de bridge de grande étendue [cite: 2589]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Une limite cervicale en forme d'épaulement avec angle interne arrondi [cite: 2591] Bridge de grande étendue : zircone [cite: 2592]"
      },
      {
        questionText: "La facette céramique :",
        options: [
          "est indiquée pour corriger des malpositions légères [cite: 2599]",
          "sa préparation conserve toujours le point de contact [cite: 2600]",
          "sa limite au niveau proximale est dite toboggan lorsque le point de contact est supprimé [cite: 2601]",
          "peut être usinée [cite: 2602]",
          "peut fermer un grand diastème [cite: 2603]"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Corrections de la morphologie dentaire : [cite: 2605] - Dysplasies des dents antérieures ; [cite: 2606] - Hypoplasies des dents antérieures ; [cite: 2607] - Fracture dentaire ; [cite: 2608] - Allongement de couronnes cliniques ; [cite: 2609] - Diastème [cite: 2610]"
      },
      {
        questionText: "Les céramiques polycristallines :",
        options: [
          "Sont des céramiques à matrice vitreuse avec phase cristalline dispersée [cite: 2617]",
          "Sont des céramiques à matrice cristalline avec phase vitreuse dispersée c-Sont cultes sur un revêtement réfractaire [cite: 2618]",
          "Leur indication est limitée aux restaurations unitaires [cite: 2619]",
          "Toutes les réponses sont fausses [cite: 2620]"
        ],
        correctOptionIndexes: [3],
        explanation: "Les céramiques polycristallines ne contiennent que des cristaux minéraux sans aucune phase vitreuse. [cite: 2622]"
      },
      {
        questionText: "La restauration ceramo - céramique :",
        options: [
          "Ne peut se faire sur des dents vivantes [cite: 2628]",
          "Est indiquée dans le cas des dents antérieures très minces [cite: 2629]",
          "Exige une limite cervicale en forme d'un épaulement a angle droit [cite: 2630]",
          "Nécessite une réduction homothétique avec des angles vifs [cite: 2631]",
          "Toutes les réponses sont fausses [cite: 2632]"
        ],
        correctOptionIndexes: [4],
        explanation: "dications : [cite: 2634] - Dent pulpée ou dépulpée ; [cite: 2635] - Dysplasie ; [cite: 2636] - Coloration des dents ; [cite: 2637] - Fractures des angles cuspidiens. [cite: 2638] Une limite cervicale en forme d'épaulement avec angle interne arrondiprendre soin d’arrondir les angles vifs (éviter la concentration de contraintes) [cite: 2639]"
      },
      {
        questionText: "La facette en céramique :",
        options: [
          "Est indiquée dans le cas de fracture coronaire basse [cite: 2646]",
          "Est indiquée clans le cas de fracture coronaire haute [cite: 2647]",
          "A une épaisseur qui varie entre 1mm et 1.5 mm [cite: 2648]",
          "Nécessite impérativement une préparation avec un retour palatin [cite: 2649]",
          "Permet un allongement de couronnes cliniques courtes [cite: 2650]"
        ],
        correctOptionIndexes: [4],
        explanation: "Entre 0 ,4 à 0,8mm [cite: 2652]"
      },
      {
        questionText: "La zircone :",
        options: [
          "1- Est un composé minéral de dioxyde d'yttrium [cite: 2658]",
          "2- Possède des cristaux d'oxyde d'aluminium [cite: 2659]",
          "3- Permet la conception des infrastructures en prothèse fixée uniquement [cite: 2660]",
          "4- Ne contient que des cristaux minéraux sans aucune phase vitreuse [cite: 2661]",
          "5- Est appelée aussi une céramique polycristalline [cite: 2662]"
        ],
        correctAnswers: ["A. (1,2) [cite: 2663]","B. (3,4) [cite: 2664]","C. (4,5) [cite: 2665]","D. (1,4,5) [cite: 2666]","E. (1,3,5) [cite: 2667]"],
        correctOptionIndexes: [3], // Assuming D is the correct choice based on explanation
        explanation: "Les céramiques polycristallines ne contiennent que des cristaux minéraux sans [cite: 2669] aucune phase vitreuse. [cite: 2670] L'alumine et la zircone permettent la conception d'infrastructures aux propriétés mécaniques importantes. [cite: 2671] Leur opacité nécessite leur recouvrement par des céramiques cosmétiques. [cite: 2672] 2: c'est les céramiques alumineuses pures : Elles ne contiennent que des cristaux d'alumine AI203 sans phase vitreuse. [cite: 2673] 3: En implantologie, du fait de sa bonne ostéo‐intégration, la zircone est un matériau pour [cite: 2674] l’implant, le pilier ou même la couronne sur implant. Elle sert également à réaliser des prothèses amovibles complètes sur implants (PACSI). [cite: 2675] On la retrouve aussi dans des matériaux composites, des reconstitutions corono‐radiculaires [cite: 2676] coulées ou collées (les inlay‐core ou les tenons fibrés). Elle trouve des indications en prothèse [cite: 2677] fixe partielle ou totale dans la conception de couronnes, de bridges, d’onlay ou encore de [cite: 2678] facettes. [cite: 2679]"
      },
      {
        questionText: "Les céramiques dentaires :",
        options: [
          "Présentent un excellent état de surface mais une grande adhésion a de la plaque dentaire [cite: 2686]",
          "Présentent une grande résistance a la compression et a la flexion [cite: 2687]",
          "Présentent une faible résistance a la compression et a la traction [cite: 2688]",
          "Sont des matériaux bio- inertes [cite: 2689]",
          "Toutes les réponses sont fausses [cite: 2690]"
        ],
        correctOptionIndexes: [3],
        explanation: "L’excellence des états de surface entraîne une faible adhésion de la plaque dentaire.la résistance est comparable à celle de l’émail mais avec une épaisseur supérieure à 1.5mm et elle est nettement moins en flexion [cite: 2692]"
      },
      {
        questionText: "Les vitrocéramiques renforcées sont :",
        options: [
          "Des céramiques polycristallines renforcées a la leucite [cite: 2699]",
          "Des céramiques polycristallines renforcées au disilicate de lithium [cite: 2700]",
          "Indiquées pour les infrastructures et non pour le recouvrement cosmétique [cite: 2701]",
          "Mises en œuvre par le procédé de cuisson ou par la pressée mais impossible par l'usinage [cite: 2702]",
          "Toutes les réponses sont fausses [cite: 2703]"
        ],
        correctOptionIndexes: [4],
        explanation: "Ce sont des vitrocéramiques renforcées à la leucite ou au disilicate de lithium on peutconcevoir des infrastructures et des recouvrements cosmétiques soit la cuisson, soit la pressée, soit l'usinage. [cite: 2705]"
      },
      {
        questionText: "la zircone :",
        options: [
          "Est un compose minéral de diaxyde d'yttrium [cite: 2712]",
          "Contient que des cristaux minéraux sans aucune phase vitreuse [cite: 2713]",
          "Permet la conception d'infrastructures en prothèse fixée [cite: 2714]",
          "Est une céramique cuite sur un revêtement réfractaire [cite: 2715]",
          "Fait appel a un procédé d'usinage [cite: 2716]"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les céramiques cuites sont les céramiques feldspathiques et les vitrocéramiques. [cite: 2718]"
      },
      {
        questionText: "Les céramiques cuites sur revêtement réfractaire :",
        options: [
          "Font appel à la technique de la cire perdue [cite: 2725]",
          "Sont des vitrocéramiques renforcées au disilicate de lithium [cite: 2726]",
          "Sont des vitrocéramiques renforcées a Ia leucite [cite: 2727]",
          "Sont des vitrocéramiques [cite: 2728]",
          "Sont des céramiques feldspathiques [cite: 2729]"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Les procédés de pressage font appel à la technique de la cire perdue [cite: 2731]"
      },
      {
        questionText: "Les céramiques in Ceram\" version Zirconia\" :",
        options: [
          "Sont destinées aux restaurations esthétiques sans impératif mécanique important [cite: 2738]",
          "Sont destinées aux restaurations esthétiques soumises à des efforts mécaniques moyens [cite: 2739]",
          "Sont destines aux restaurations esthétiques soumises à des efforts mécaniques majeurs [cite: 2740]",
          "Sont destinées aux restaurations soumises à des forces importantes sans impératif esthétique majeur [cite: 2741]",
          "Toutes les réponses sont fausses [cite: 2742]"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les céramiques usinées :",
        options: [
          "Sont préparées manuellement sous forme de blocs [cite: 2750]",
          "Sont destinés à être façonnés par soustraction dans un système spécifique CFAO [cite: 2751]",
          "Sont les seules à mettre en forme les infrastructures par soustraction de matériau [cite: 2752]",
          "Sont les seules à mettre en forme les infrastructures par addition de matériau [cite: 2753]",
          "Toutes les réponses sont justes [cite: 2754]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les céramiques usinées sont préparées industriellement sous forme de blocs [cite: 2756]"
      },
      {
        questionText: "Les vitrocéramiques renforcées :",
        options: [
          "1- Sont des vitrocéramiques renforcées à la leucite [cite: 2763]",
          "2- Sont des vitrocéramiques renforcées au disilicate de lithium. [cite: 2764]",
          "3- Sont des céramiques pressées. [cite: 2765]",
          "4- Sont des céramiques usinées. [cite: 2766]",
          "5- Présentent une grande opacité, [cite: 2767]"
        ],
        correctAnswers: ["A. (1,3,4,5) [cite: 2768]","B. (2,4,5) [cite: 2769]","C. (1.2.3) [cite: 2770]","D. (1.2,3,4) [cite: 2771]","E. (2,3,4,5) [cite: 2772]"],
        correctOptionIndexes: [3], // Assuming D is the correct choice based on explanation
        explanation: "Les vitrocéramiques renforcées : [cite: 2774] Ce sont des vitrocéramiques renforcées à la leucite ou au disilicate de lithium ,on peut concevoir des infrastructures et des recouvrements cosmétiques, en utilisant soit la cuisson, soit la pressée, soit l'usinage.Expl : [cite: 2775] ▪ L'IPS Empress® [cite: 2776] ▪ L’IPS Empress II® [cite: 2777] ▪ L'IPS e.max® (Ivoclar-Vivadent) [cite: 2778] 5: c'est Les céramiques polycristallines [cite: 2779]"
      },
      {
        questionText: "Les couronnes céramo-céramiques sont des restaurations prothétiques réalisées avec une :",
        options: [
          "Infrastructure en alumine et une suprastructure en vitrocéramique. [cite: 2786]",
          "Infrastructure en céramique et une suprastructure en zircone. [cite: 2787]",
          "Infrastructure en zircon et une suprastructure en alumine. [cite: 2788]",
          "Infrastructure en zircone et une suprastructure en céramique feldspathique. [cite: 2789]",
          "Infrastructure et une suprastructure en monobloc tout zircone. [cite: 2790]"
        ],
        correctOptionIndexes: [3],
        explanation: "C’est une couronne qui est totalement en matériaux cosmétique (Infrastructure en céramique+ matériau cosmétique). [cite: 2792]"
      },
      {
        questionText: "Les restaurations céramiques monolithiques peuvent être réalisées avec :",
        options: [
          "de la céramique feldspathique cuite sur modèle réfractaire [cite: 2213]",
          "une armature métallique recouverte de céramique [cite: 2214]",
          "de la vitrocéramique renforcée pressée ou usinée [cite: 2215]",
          "de la zircone usinée par CFAO [cite: 2216]",
          "de la zircone renforcée [cite: 2217]"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : « Les céramiques cuites sur revêtement réfractaire : ce sont des céramiques feldspathiques et vitrocéramiques. [cite: 2219] Ce procédé est par stratification (multicouche), pas monolithique. [cite: 2220] B : céramo-métallique, pas monolithique. [cite: 2221]"
      },
      {
        questionText: "Parmi ces matériaux, lesquels sont des céramiques polycristallines?:",
        options: [
          "Feldspath [cite: 2228]",
          "Alumine [cite: 2229]",
          "Vitrocéramique [cite: 2230]",
          "Disilicate de Lithium [cite: 2231]",
          "Zircone [cite: 2232]"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "« Les céramiques polycristallines ne contiennent que des cristaux minéraux sans aucune phase vitreuse. [cite: 2234] L’alumine et la zircone permettent la conception d’infrastructures aux propriétés mécaniques importantes. » [cite: 2235]"
      },
      {
        questionText: "Concernant la préparation pour une couronne céramo-céramique (CCC):",
        options: [
          "une réduction occlusale minimale de 0,5mm est suffisante [cite: 2242]",
          "une réduction palatine est plus importante que vestibulaire [cite: 2243]",
          "une réduction vestibulaire de 1 à 1,5 mm est recommandée [cite: 2244]",
          "la limite cervicale est en forme d'un épaulement à angle droit [cite: 2245]",
          "les angles vifs doivent être accentués pour guider l'insertion [cite: 2246]"
        ],
        correctOptionIndexes: [2],
        explanation: "« Une réduction tissulaire, impérativement homothétique, doit ménager une épaisseur suffisante pour la céramique tout en préservant la vitalité pulpaire. [cite: 2248] Réduction vestibulaire : 1 à 1,5 mm ; [cite: 2249] Réduction proximale : 1 mm ; [cite: 2250] Réduction occlusale/incisale : 1,5 à 2 mm ; [cite: 2251] Réduction palatine : 1 à 1,2 mm. [cite: 2252] L’épaulement doit être à angle interne arrondi, jamais droit. [cite: 2253] Les angles vifs doivent être arrondis (éviter la concentration de contraintes). » [cite: 2254]"
      },
      {
        questionText: "Une facette céramique est indiquée dans les situations suivantes :",
        options: [
          "dyschromie sévère d'origine médicamenteuse sur dent dépulpée [cite: 2261]",
          "fluorose modérée avec défauts d'émail localisés [cite: 2262]",
          "diastème important avec pertes de substances étendues [cite: 2263]",
          "carie proximale profonde sur prémolaire [cite: 2264]",
          "légères malpositions dentaires [cite: 2265]"
        ],
        correctOptionIndexes: [1, 4],
        explanation: ""
      },
      {
        questionText: "Le procédé d'usinage:",
        options: [
          "intéresse les céramiques à base de zircone [cite: 2273]",
          "intéresse les céramiques alumineuses [cite: 2274]",
          "intéresse les vitro céramiques renforcées [cite: 2275]",
          "intéresse les céramiques polycristallines [cite: 2276]",
          "permet la conception de restaurations monolithiques [cite: 2277]"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: ""
      },
      {
        questionText: "La restauration céramo céramique :",
        options: [
          "nécessite une préparation avec une limite cervicale en forme d'épaulement à angle droit [cite: 2284]",
          "nécessite une mise de dépouille bien marquée [cite: 2285]",
          "peut-être usinée [cite: 2286]",
          "est à infrastructure zircone recouverte d'une céramique dite « ln céram » [cite: 2287]",
          "ne peut se concevoir comme ancrage dans le cas de bridge de grande étendue [cite: 2288]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Une limite cervicale en forme d'épaulement avec angle interne arrondi [cite: 2290] Bridge de grande étendue : zircone [cite: 2291]"
      },
      {
        questionText: "La facette céramique :",
        options: [
          "est indiquée pour corriger des malpositions légères [cite: 2298]",
          "sa préparation conserve toujours le point de contact [cite: 2299]",
          "sa limite au niveau proximale est dite toboggan lorsque le point de contact est supprimé [cite: 2300]",
          "peut être usinée [cite: 2301]",
          "peut fermer un grand diastème [cite: 2302]"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Corrections de la morphologie dentaire : [cite: 2305] - Dysplasies des dents antérieures ; [cite: 2306] - Hypoplasies des dents antérieures ; [cite: 2307] - Fracture dentaire ; [cite: 2308] - Allongement de couronnes cliniques ; [cite: 2309] - Diastème [cite: 2310]"
      },
      {
        questionText: "Les céramiques polycristallines :",
        options: [
          "Sont des céramiques à matrice vitreuse avec phase cristalline dispersée [cite: 2316]",
          "Sont des céramiques à matrice cristalline avec phase vitreuse dispersée c-Sont cultes sur un revêtement réfractaire [cite: 2317]",
          "Leur indication est limitée aux restaurations unitaires [cite: 2318]",
          "Toutes les réponses sont fausses [cite: 2319]"
        ],
        correctOptionIndexes: [3],
        explanation: "Les céramiques polycristallines ne contiennent que des cristaux minéraux sans aucune phase vitreuse. [cite: 2321]"
      },
      {
        questionText: "La restauration ceramo - céramique :",
        options: [
          "Ne peut se faire sur des dents vivantes [cite: 2327]",
          "Est indiquée dans le cas des dents antérieures très minces [cite: 2328]",
          "Exige une limite cervicale en forme d'un épaulement a angle droit [cite: 2329]",
          "Nécessite une réduction homothétique avec des angles vifs [cite: 2330]",
          "Toutes les réponses sont fausses [cite: 2331]"
        ],
        correctOptionIndexes: [4],
        explanation: "dications : [cite: 2333] - Dent pulpée ou dépulpée ; [cite: 2334] - Dysplasie ; [cite: 2335] - Coloration des dents ; [cite: 2336] - Fractures des angles cuspidiens. [cite: 2337] Une limite cervicale en forme d'épaulement avec angle interne arrondiprendre soin d’arrondir les angles vifs (éviter la concentration de contraintes) [cite: 2338]"
      },
      {
        questionText: "La facette en céramique :",
        options: [
          "Est indiquée dans le cas de fracture coronaire basse [cite: 2345]",
          "Est indiquée clans le cas de fracture coronaire haute [cite: 2346]",
          "A une épaisseur qui varie entre 1mm et 1.5 mm [cite: 2347]",
          "Nécessite impérativement une préparation avec un retour palatin [cite: 2348]",
          "Permet un allongement de couronnes cliniques courtes [cite: 2349]"
        ],
        correctOptionIndexes: [4],
        explanation: "Entre 0 ,4 à 0,8mm [cite: 2351]"
      },
      {
        questionText: "La zircone :",
        options: [
          "1- Est un composé minéral de dioxyde d'yttrium [cite: 2357]",
          "2- Possède des cristaux d'oxyde d'aluminium [cite: 2358]",
          "3- Permet la conception des infrastructures en prothèse fixée uniquement [cite: 2359]",
          "4- Ne contient que des cristaux minéraux sans aucune phase vitreuse [cite: 2360]",
          "5- Est appelée aussi une céramique polycristalline [cite: 2361]"
        ],
        correctAnswers: ["A. (1,2) [cite: 2362]","B. (3,4) [cite: 2363]","C. (4,5) [cite: 2364]","D. (1,4,5) [cite: 2365]","E. (1,3,5) [cite: 2366]"],
        correctOptionIndexes: [3], // Assuming D is the correct choice based on explanation
        explanation: "Les céramiques polycristallines ne contiennent que des cristaux minéraux sans [cite: 2368] aucune phase vitreuse. [cite: 2369] L'alumine et la zircone permettent la conception d'infrastructures aux propriétés mécaniques importantes. [cite: 2370] Leur opacité nécessite leur recouvrement par des céramiques cosmétiques. [cite: 2371] 2: c'est les céramiques alumineuses pures : Elles ne contiennent que des cristaux d'alumine AI203 sans phase vitreuse. [cite: 2372] 3: En implantologie, du fait de sa bonne ostéo‐intégration, la zircone est un matériau pour [cite: 2373] l’implant, le pilier ou même la couronne sur implant. Elle sert également à réaliser des prothèses amovibles complètes sur implants (PACSI). [cite: 2374] On la retrouve aussi dans des matériaux composites, des reconstitutions corono‐radiculaires [cite: 2375] coulées ou collées (les inlay‐core ou les tenons fibrés). Elle trouve des indications en prothèse [cite: 2376] fixe partielle ou totale dans la conception de couronnes, de bridges, d’onlay ou encore de [cite: 2377] facettes. [cite: 2378]"
      },
      {
        questionText: "Les céramiques dentaires :",
        options: [
          "Présentent un excellent état de surface mais une grande adhésion a de la plaque dentaire [cite: 2385]",
          "Présentent une grande résistance a la compression et a la flexion [cite: 2386]",
          "Présentent une faible résistance a la compression et a la traction [cite: 2387]",
          "Sont des matériaux bio- inertes [cite: 2388]",
          "Toutes les réponses sont fausses [cite: 2389]"
        ],
        correctOptionIndexes: [3],
        explanation: "L’excellence des états de surface entraîne une faible adhésion de la plaque dentaire.la résistance est comparable à celle de l’émail mais avec une épaisseur supérieure à 1.5mm et elle est nettement moins en flexion [cite: 2391]"
      },
      {
        questionText: "Les vitrocéramiques renforcées sont :",
        options: [
          "Des céramiques polycristallines renforcées a la leucite [cite: 2398]",
          "Des céramiques polycristallines renforcées au disilicate de lithium [cite: 2399]",
          "Indiquées pour les infrastructures et non pour le recouvrement cosmétique [cite: 2400]",
          "Mises en œuvre par le procédé de cuisson ou par la pressée mais impossible par l'usinage [cite: 2401]",
          "Toutes les réponses sont fausses [cite: 2402]"
        ],
        correctOptionIndexes: [4],
        explanation: "Ce sont des vitrocéramiques renforcées à la leucite ou au disilicate de lithium on peutconcevoir des infrastructures et des recouvrements cosmétiques soit la cuisson, soit la pressée, soit l'usinage. [cite: 2404]"
      },
      {
        questionText: "la zircone :",
        options: [
          "Est un compose minéral de diaxyde d'yttrium [cite: 2411]",
          "Contient que des cristaux minéraux sans aucune phase vitreuse [cite: 2412]",
          "Permet la conception d'infrastructures en prothèse fixée [cite: 2413]",
          "Est une céramique cuite sur un revêtement réfractaire [cite: 2414]",
          "Fait appel a un procédé d'usinage [cite: 2415]"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les céramiques cuites sont les céramiques feldspathiques et les vitrocéramiques. [cite: 2417]"
      },
      {
        questionText: "Les céramiques cuites sur revêtement réfractaire :",
        options: [
          "Font appel à la technique de la cire perdue [cite: 2425]",
          "Sont des vitrocéramiques renforcées au disilicate de lithium [cite: 2426]",
          "Sont des vitrocéramiques renforcées a Ia leucite [cite: 2427]",
          "Sont des vitrocéramiques [cite: 2428]",
          "Sont des céramiques feldspathiques [cite: 2429]"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Les procédés de pressage font appel à la technique de la cire perdue [cite: 2430]"
      },
      {
        questionText: "Les céramiques in Ceram\" version Zirconia\" :",
        options: [
          "Sont destinées aux restaurations esthétiques sans impératif mécanique important [cite: 2437]",
          "Sont destinées aux restaurations esthétiques soumises à des efforts mécaniques moyens [cite: 2438]",
          "Sont destines aux restaurations esthétiques soumises à des efforts mécaniques majeurs [cite: 2439]",
          "Sont destinées aux restaurations soumises à des forces importantes sans impératif esthétique majeur [cite: 2440]",
          "Toutes les réponses sont fausses [cite: 2441]"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les céramiques usinées :",
        options: [
          "Sont préparées manuellement sous forme de blocs [cite: 2449]",
          "Sont destinés à être façonnés par soustraction dans un système spécifique CFAO [cite: 2450]",
          "Sont les seules à mettre en forme les infrastructures par soustraction de matériau [cite: 2451]",
          "Sont les seules à mettre en forme les infrastructures par addition de matériau [cite: 2452]",
          "Toutes les réponses sont justes [cite: 2453]"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les céramiques usinées sont préparées industriellement sous forme de blocs [cite: 2455]"
      },
      {
        questionText: "Les vitrocéramiques renforcées :",
        options: [
          "1- Sont des vitrocéramiques renforcées à la leucite [cite: 2462]",
          "2- Sont des vitrocéramiques renforcées au disilicate de lithium. [cite: 2463]",
          "3- Sont des céramiques pressées. [cite: 2464]",
          "4- Sont des céramiques usinées. [cite: 2465]",
          "5- Présentent une grande opacité, [cite: 2466]"
        ],
        correctAnswers: ["A. (1,3,4,5) [cite: 2467]","B. (2,4,5) [cite: 2468]","C. (1.2.3) [cite: 2469]","D. (1.2,3,4) [cite: 2470]","E. (2,3,4,5) [cite: 2471]"],
        correctOptionIndexes: [3], // Assuming D is the correct choice based on explanation
        explanation: "Les vitrocéramiques renforcées : [cite: 2473] Ce sont des vitrocéramiques renforcées à la leucite ou au disilicate de lithium ,on peut concevoir des infrastructures et des recouvrements cosmétiques, en utilisant soit la cuisson, soit la pressée, soit l'usinage.Expl : [cite: 2474] ▪ L'IPS Empress® [cite: 2475] ▪ L’IPS Empress II® [cite: 2476] ▪ L'IPS e.max® (Ivoclar-Vivadent) [cite: 2477] 5: c'est Les céramiques polycristallines [cite: 2478]"
      },
      {
        questionText: "Les couronnes céramo-céramiques sont des restaurations prothétiques réalisées avec une :",
        options: [
          "Infrastructure en alumine et une suprastructure en vitrocéramique. [cite: 2485]",
          "Infrastructure en céramique et une suprastructure en zircone. [cite: 2486]",
          "Infrastructure en zircon et une suprastructure en alumine. [cite: 2487]",
          "Infrastructure en zircone et une suprastructure en céramique feldspathique. [cite: 2488]",
          "Infrastructure et une suprastructure en monobloc tout zircone. [cite: 2489]"
        ],
        correctOptionIndexes: [3],
        explanation: "C’est une couronne qui est totalement en matériaux cosmétique (Infrastructure en céramique+ matériau cosmétique). [cite: 2491]"
      }
    ]
  },
  {
    title: "La Couronne Céramo-Métallique",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Selon MUNSELL, n'importe quelle couleur se positionne dans un espace cylindrique dans lequel :",
        options: [
          "L'axe vertical définit la teinte (T)",
          "Le rayon définit la luminosité (L)",
          "Sur le pourtour se situe la saturation (S)",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Axe vertical = Luminosité (L). Rayon = Saturation (S). Pourtour = Teinte (T). Toutes les propositions sont fausses."
      },
      {
        questionText: "La luminosité :",
        options: [
          "Est due essentiellement à la qualité et à la translucidité de la dentine",
          "Est due essentiellement à la qualité et à la translucidité de l'email",
          "Correspond à la quantité de blanc contenue dans une couleur",
          "Correspond à la quantité de noir contenue dans une couleur"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La luminosité correspond à la quantité de blanc (ou gris) dans une couleur, et est principalement liée à la qualité et la translucidité de l'émail."
      },
      {
        questionText: "La saturation :",
        options: [
          "Est liée à la quantité de pigment pur content dans une couleur",
          "Définit l'intensité ou la concentration de la teinte.",
          "Est due à la dentine",
          "Dépend de la translucidité et de l'épaisseur de la couche l'email",
          "Correspond à l'éclaircissement d'une couleur par adjonction de blanc ou à son ternissement par adjonction de noir"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La saturation est l'intensité/pureté du pigment (A, B), elle est principalement donnée par la dentine (C) et est influencée par l'émail qui la recouvre (D)."
      },
      {
        questionText: "La teinte :",
        options: [
          "Est la tonalité chromatique d'une couleur,",
          "Est prise avec un teintier standard",
          "Est prise avec un spectrophotomètre Shade Vision de lame X-Rite",
          "Est prise avec un colorimètre Easyshade de Ia firme VITA",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "La teinte est la couleur elle-même (tonalité chromatique, ex: jaune, rouge). Les options B, C, D décrivent des outils pour mesurer la couleur (qui inclut la teinte), mais pas la définition de la teinte."
      },
      {
        questionText: "La couronne céramo-métallique :",
        options: [
          "Est une coiffe de recouvrement total constituée d'une chape métallique en alliage précieux uniquement",
          "Est recouverte entièrement ou en partie d'une couche cosmétique ou en céramique ou en résine",
          "Fait partie des couronnes dites esthétiques",
          "Combine la dureté et la précision de la céramique ave l'esthétique du métal coulé",
          "Est utilisée comme ancrage coronaire partiel"
        ],
        correctOptionIndexes: [2],
        explanation: "La CCM est une couronne de recouvrement total (E faux) esthétique (C). L'alliage n'est pas uniquement précieux (A faux). La couche cosmétique est la céramique (B est ambigu avec 'résine'). Elle combine la résistance du métal et l'esthétique de la céramique (D est inversé)."
      }
    ]
  },
  {
    title: "Les Ancrages Corono-Radiculaires",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Une couronne Richmond :",
        options: [
          "Peut-être aussi dénommée « couronne a tenon »",
          "Est une reconstitution corono-radiculaire",
          "Est indiquée en d'occlusion serrée",
          "Est une restauration à deux étages"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La couronne Richmond (ou 'dent à tenon') est une restauration 'monobloc' (un étage, D est faux) qui intègre la reconstitution corono-radiculaire (B) et la couronne. Elle est indiquée en cas d'occlusion serrée."
      },
      {
        questionText: "Un inlay core ne peut être réalise et scène que sur une dent traité et stabilisée endodontiquement car :",
        options: [
          "La résection apicale ne peut pas être pratiquée chez tous les malades",
          "Son descellement est toujours accompagne de fracture radiculaire",
          "Son descellement est extrêmement difficile et fortement déconseille",
          "La reprise de traitement endodontique est contre-indiquée"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Il est impératif que le traitement endodontique soit réussi avant de sceller l'inlay-core, car son retrait (pour reprendre le traitement) est très difficile (C) et risque de fracturer la racine. La résection apicale (A) n'est pas toujours une solution viable."
      },
      {
        questionText: "La résine calcinable utilisée dans Ia technique d'empreinte directe d'une préparation canalaire pour un Inlay core :",
        options: [
          "Peut-être sujette a des variations dimensionnelles",
          "Se présente sous forme de deux pates, base et catalyseur",
          "Nécessite l'utilisation d'un tuteur calcinable",
          "Nécessite la coulée du modèle de travail au laboratoire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La résine calcinable (ex: Duralay) est utilisée avec un tuteur (tenon calcinable) (C). Elle est sensible à la dessiccation et peut subir des variations dimensionnelles (A). Elle est envoyée directement au laboratoire pour la coulée (pas de modèle de travail) (D est faux)."
      },
      {
        questionText: "L'indication de L'Inlay core se pose :",
        options: [
          "Quand les parois résiduelles de la dent sont insuffisantes pour envisager une restauration foulée",
          "Quand les parois résiduelles de la dent sont suffisantes pour envisager une restauration foulée",
          "Quand le nombre des parois présentes de la dent est insuffisant pour envisager une restauration foulé",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'inlay-core est indiqué lorsque le délabrement coronaire est trop important et que les parois résiduelles sont insuffisantes en nombre ou en épaisseur pour supporter une restauration classique (foulée) ou une couronne seule."
      },
      {
        questionText: "Le rôle du cone de raccordement entre le tenon et Ia supra structure coronaire de l'inlay core est :",
        options: [
          "De résister aux forces de rotation",
          "De renforcer la résistance mécanique",
          "De minimiser les frottements",
          "De renforcer la stabilisation"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le cône de raccordement (ou 'ferrule effect' s'il est sur la dentine) augmente la résistance mécanique de la jonction (B), améliore la stabilisation (D) et participe à la résistance anti-rotationnelle (A)."
      },
      {
        questionText: "La forme de Ia préparation canalaire pour L'inlay core :",
        options: [
          "Doit être cylindrique",
          "Doit être conique",
          "Doit être tronconique",
          "Toutes les réponses sont fausses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "La forme de préparation canalaire idéale est cylindro-conique, alliant la rétention de la forme cylindrique et la préservation tissulaire de la forme conique."
      },
      {
        questionText: "La fragilisation de la résistance mécanique d'une dent est causée par :",
        options: [
          "une préparation canalaire en vue de recevoir un tenon radiculaire.",
          "une préparation dentaire en vue de la dévitaliser",
          "une atteinte carieuse importante.",
          "une occlusion serrée."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La dent est fragilisée par la perte de substance, que ce soit par carie (C), par la préparation de la cavité d'accès endodontique (B) ou par l'alésage canalaire pour le tenon (A)."
      },
      {
        questionText: "La Richmond:",
        options: [
          "est une construction prothétique entièrement coulée qui recevra un élément à recouvrement total.",
          "présente la difficulté de la prise d'empreinte pour enregistrer l'anatomie canalaire et la limite cervicale de la préparation.",
          "indiquée pour des dents anatomiquement courtes ou abrasées.",
          "indiquée en cas de mobilité importante.",
          "Indiquée en cas de fracture radiculaire."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La Richmond est une restauration monobloc (A est faux). Elle est indiquée pour les dents courtes (C). La prise d'empreinte est complexe car elle doit enregistrer le canal et la limite cervicale en même temps (B). Elle est CI en cas de mobilité ou fracture (D, E faux)."
      },
      {
        questionText: "L'instrumentation nécessaire pour Ia préparation canalaire d'un ancrage radiculaire type inlay core contient :",
        options: [
          "Des forets de Gates et/ou Largo",
          "Une fraise boule long col",
          "Une fraise fissure tres longue",
          "Des inserts endodontiques"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La préparation utilise des forets de Gates/Largo pour la désobturation et l'élargissement (A), des inserts ultrasonores (D) et des fraises (comme boule long col) pour la chambre pulpaire (B)."
      },
      {
        questionText: "Les reconstitutions corono-radiculaires coulées en alliages presentent un module d'elasticite :",
        options: [
          "Qui differe selon l'alliage utilise",
          "Plus eleve que celui de la dentine",
          "Plus faible que celui de la dentine",
          "Identique a celui de l'email.",
          "Plus eleve que ceiui de l'email"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les alliages métalliques ont un module d'élasticité (rigidité) très élevé, bien supérieur à celui de la dentine (B). Cela signifie qu'ils absorbent peu les contraintes et les transmettent à la racine (risque de fracture)."
      }
    ]
  },
  {
    title: "Les Ancrages Partiels",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Un onlay MOD:",
        options: [
          "reconstitue les parois proximales et occlusales sans recouvrir les cuspides",
          "reconstitue les parois proximales et occlusales avec recouvrement cuspidien",
          "permet de remplacer les tissus dentaires",
          "permet de renforcer la structure dentaire"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'Onlay MOD (Mésio-Occluso-Distal) reconstitue les parois proximales et occlusales (remplace les tissus C) et recouvre les cuspides (B) pour renforcer la structure dentaire (D). L'inlay ne recouvre pas les cuspides (A est faux)."
      },
      {
        questionText: "La couronne 3/4 sur dent maxillaire :",
        options: [
          "permet la conservation de la face proximale des incisives",
          "permet la conservation de la face vestibulaire des prémolaires",
          "ne doit jamais couvrir la cuspide vestibulaire",
          "permet la conservation de la face occlusale d'une molaire",
          "toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "La couronne 3/4 classique est un ancrage partiel qui préserve la face vestibulaire de la dent (souvent prémolaire ou canine maxillaire) pour des raisons esthétiques."
      },
      {
        questionText: "Un onlay en alliage :",
        options: [
          "Reconstitue exclusivement la face occlusale des molaires",
          "Reconstitue la face occlusale sans recouvrement cuspidien",
          "Peut recouvrir toutes les cuspides dune molaire maxillaire",
          "Recouvre au moins une cuspide",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La définition d'un onlay est qu'il recouvre au moins une cuspide (D). Un overlay peut recouvrir toutes les cuspides (C). L'inlay ne recouvre pas de cuspide (B est faux)."
      },
      {
        questionText: "Les ancrages partiels en alliage :",
        options: [
          "Sont des restaurations coronaires directes",
          "Sont des restaurations corono-radiculaires indirectes",
          "Sont fabriques à partir d'un module en platre",
          "Peuvent reconstituer la face occlusale",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Ce sont des restaurations coronaires (B est faux) *indirectes* (A est faux), fabriquées au laboratoire à partir d'un modèle en plâtre (C), qui reconstituent une partie de la dent, y compris la face occlusale (D)."
      },
      {
        questionText: "L'overlay est :",
        options: [
          "Une couronne 7/8",
          "Une couronne 3/4",
          "Une endocouronne",
          "Toutes les réponses sont Justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'overlay est une couronne de recouvrement partielle qui inclut la couronne 3/4 et la couronne 7/8."
      }
    ]
  },
  {
    title: "Les Restaurations Collées",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Les restaurations partielles collés sont indiquées :",
        options: [
          "Pour restaurer les cavités dont leur largeur est inférieure au 1/3 de la largeur vestibulolinguale",
          "Comme piler de bridge de petite étendue",
          "Comme pilier de bridge de grande étendue",
          "Dans le cas de la perte totale de la partie couronnaire de la dent",
          "Dans le cas des cavités de classe I et II de Black"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Elles sont indiquées pour les cavités de Cl I et II (E) (surtout si la largeur est *supérieure* à 1/3, rendant A faux) et peuvent servir de pilier pour des bridges de *petite* étendue (B)."
      },
      {
        questionText: "L'inlay est une pièce prothétique qui :",
        options: [
          "Ne construit aucune cuspide",
          "Reconstruit cuspide ou plus, mais pas toutes",
          "Reconstruit toutes les cuspides",
          "Est réalisée sur molaire délabrée et dévitalisée en exploitant Ia chambre pulpaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "L'inlay est une restauration purement intra-coronaire qui ne recouvre aucune cuspide. L'onlay recouvre au moins une cuspide."
      },
      {
        questionText: "Les restaurations collées indirectes:",
        options: [
          "Sont particulièrement indiquées pour les pertes de substance d'origine carieuse et les lésions occlusales d'usure",
          "Peuvent être assemblées par l'oxyphosphate de zinc",
          "Peuvent être réalisées sur des dents pulpées",
          "Peuvent être réalisées sur des dents dépulpées",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Elles sont indiquées pour les pertes de substance (A), sur dents pulpées (C) ou dépulpées (D). Elles nécessitent un *collage* (ciment-résine), pas un scellement à l'oxyphosphate (B est faux)."
      },
      {
        questionText: "Les restaurations collies Indirectes sont contre-indiquées :",
        options: [
          "Quand limite de la carie est sous gingivale",
          "Quand limite de la carie est supra gingivale",
          "En présence d'une para-fonction (Bruxisme)",
          "Quand la dent est courte",
          "Quand l'hygiène buccale est insuffisante"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Le collage devient impossible ou peu fiable si la limite est sous-gingivale (A). Le bruxisme (C), une hauteur de dent insuffisante (D) et une mauvaise hygiène (E) sont des contre-indications majeures."
      },
      {
        questionText: "L'onlay en céramique:",
        options: [
          "Est une reconstitution corono - radiculaire",
          "Restaure la face vestibulaire de la dent postérieure",
          "Est collé l'oxyphosphate de zinc",
          "Est utilisé comme pilier de bridge",
          "Est un traitement prothétique non conservateur"
        ],
        correctOptionIndexes: [3],
        explanation: "L'onlay est une restauration coronaire (A faux) conservatrice (E faux) qui est *collée* (C faux). Il peut servir d'ancrage pour un bridge de petite étendue (D)."
      },
      {
        questionText: "Le mordançage de la céramique est réalisé avec:",
        options: [
          "L'acide orthophosphorique à 9%",
          "L'acide acétylsalicylique à 9%",
          "L'acide clavulanique à 9%",
          "L'acide ascorbique à 9%",
          "L'acide fluorhydrique à 9%"
        ],
        correctOptionIndexes: [4],
        explanation: "Les céramiques mordançables (silicates) sont traitées par mordançage à l’acide fluorhydrique à 9 % pendant 60 secondes."
      },
      {
        questionText: "Quels sont les avantages des restaurations collées indirectes par rapport aux composites directs?:",
        options: [
          "Rétention mécanique accrue",
          "Meilleure stabilité de teinte dans le temps",
          "Moins de contraction lors de la polymérisation",
          "Mise en œuvre plus simple",
          "Réparabilité plus aisée en bouche"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Avantages de l'indirect : Meilleure stabilité de teinte (B) et absence de contraction de polymérisation en bouche (C), ce qui protège l'interface. La rétention est adhésive, pas mécanique (A faux)."
      },
      {
        questionText: "Les Veneerlays:",
        options: [
          "sont réservés exclusivement aux dents antérieures",
          "recouvrent les faces vestibulaires et occlusales",
          "sont réalisés en céramique feldspathique exclusivement",
          "sont indiqués en cas de dyschromies postérieures",
          "nécessitent toujours un recouvrement lingual"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les veneerlays sont des restaurations partielles *postérieures* (A faux) qui recouvrent la face vestibulaire et occlusale (B). Elles sont indiquées pour les dyschromies postérieures (D) et peuvent être en diverses céramiques (C faux)."
      },
      {
        questionText: "Parmi les avantages dos restaurations partielles Indirectes en céramique:",
        options: [
          "la possibilité de réaliser des limites sous gingivales.",
          "la possibilité de réintervenir en cas de fracture",
          "la préservation des points de contact naturels",
          "préservation de la teinte dans le temps",
          "la restauration d'une grande perte de substance au niveau du collet de la dent"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Avantages : Stabilité de la teinte dans le temps (D) et meilleure restitution/stabilité des points de contact (C) par rapport à une restauration directe. Les limites sous-gingivales (A) sont une contre-indication au collage."
      },
      {
        questionText: "Les principes de préparation d'une restauration partielle collée sont:",
        options: [
          "une dépouille de 10 à 15°",
          "la boite proximale est moins profonde que la cavité occlusale.",
          "les limites occlusales de la préparation doivent être en contact avec les dents antagonistes",
          "le fond de la cavité est parallèle au plan d'occlusion",
          "le mur dentinaire doit être supérieur à 1 mm"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "La dépouille doit être de 10-15° (A). Le fond de la cavité doit être plat et parallèle au plan d'occlusion (D). L'épaisseur de dentine résiduelle (mur) doit être suffisante (E). La boite proximale est *plus* profonde que l'occlusale (B faux)."
      },
      {
        questionText: "Dans la réalisation clinique des restaurations collées :",
        options: [
          "les préparations se font avec extension prophylactique en queue d'aronde",
          "les préparations nécessitent la réalisation d'extensions pour augmenter la rétention",
          "la rétention est assurée par la géométrie de la cavité et non par la colle",
          "la préparation exige un fond plat",
          "la profondeur de la cavité de préparation ne dépasse pas 1.5 mm"
        ],
        correctOptionIndexes: [3],
        explanation: "La préparation doit avoir un fond plat pour stabiliser la pièce. La rétention est assurée par le *collage* (C faux), et non par des formes de rétention mécaniques comme les queues d'aronde (A, B faux)."
      },
      {
        questionText: "Le Smear layer :",
        options: [
          "Doit se lier à l'adhésif pour assurer le collage dentinaire",
          "Doit se lier au silane pour assurer le collage a la restauration prothétique",
          "Est éliminé totally par un rinçage et un séchage",
          "Est éliminé par un fraisage de la dentine",
          "Est constitué en majeur partie d'hydroxyapatite"
        ],
        correctOptionIndexes: [4],
        explanation: "La smear layer (boue dentinaire) est constituée principalement de débris d'hydroxyapatite. Elle est éliminée par le mordançage (acide), pas par un simple rinçage (C faux). Sa liaison à la dentine est faible (A faux)."
      },
      {
        questionText: "L'inlay en céramique :",
        options: [
          "Recouvre une seule cuspide",
          "Intéresse seulement une face de la dent",
          "Est indiqué pour les dents courtes",
          "Sa préparation nécessite un fond plat",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "L'inlay ne recouvre *aucune* cuspide (A faux) mais peut intéresser plusieurs faces (B faux). Sa préparation nécessite un fond plat pour la stabilité."
      },
      {
        questionText: "Le mordançage de la céramique est réalisé avec:",
        options: [
          "L'acide orthophosphorique à 9%.",
          "L'acide acétylsalicylique à 9%.",
          "L'acide clavulanique à 9%.",
          "L'acide ascorbique à 9%.",
          "L'acide fluorhydrique à 9%."
        ],
        correctOptionIndexes: [4],
        explanation: "✴ Céramiques mordançables : (Silicates) • Mordançage de l’intrados de la pièce prothétique à l’acide fluorhydrique à 9 % pendant 60”."
      },
      {
        questionText: "Quels sont les avantages des restaurations collées indirectes par rapport aux composites directs?:",
        options: [
          "Rétention mécanique accrue",
          "Meilleure stabilité de teinte dans le temps",
          "Moins de contraction lors de la polymérisation",
          "Mise en œuvre plus simple",
          "Réparabilité plus aisée en bouche"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "▪ Restitution optimale de l'anatomie de la dent en particulier occlusale et proximale ▪ Meilleur contrôle de la limite cervicale, du profil d'émergence, du point ou de la zone de contact. ▪ Absence de contraction : réduction du risque de hiatus à l'interface matériaux-dent, plus le composite aura un volume important, plus les forces exercées sur les parois seront importantes, et fragilisent l’interface dent-restauration, avec un risque de récidive plus important."
      },
      {
        questionText: "Les Veneerlays:",
        options: [
          "sont réservés exclusivement aux dents antérieures",
          "recouvrent les faces vestibulaires et occlusales",
          "sont réalisés en céramique feldspathique exclusivement",
          "sont indiqués en cas de dyschromies posteriores",
          "nécessitent toujours un recouvrement lingual"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "« Les veneerlays sont des restaurations partielles postérieures collées. ▪ Elles recouvrent à la fois la face vestibulaire et la face occlusale de la dent. ▪ Elles ne sont pas limitées aux dents antérieures. ▪ Elles peuvent être réalisées en différentes céramiques (feldspathique, disilicate de lithium…). ▪ Indiquées notamment dans les dyschromies postérieures ou pour corriger la morphologie occlusale. ▪ Le recouvrement lingual n’est pas systématique, il dépend de l’indication clinique. »"
      },
      {
        questionText: "Parmi les avantages dos restaurations partielles Indirectes en céramique:",
        options: [
          "la possibilité de réaliser des limites sous gingivales.",
          "la possibilité de réintervenir en cas de fracture",
          "la préservation des points de contact naturels",
          "préservation de la teinte dans le temps",
          "la restauration d'une grande perte de substance au niveau du collet de la dent"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Avantages : -Esthétique -Biocompatibilité -Stabilité dans le temps des contacts proximaux et occlusaux -Stabilité dans le temps de la teinte -Peu d’accumulation de plaque"
      },
      {
        questionText: "Les principes de préparation d'une restauration partielle collée sont:",
        options: [
          "une dépouille de 10 à 15°",
          "la boite proximale est moins profonde que la cavité occlusale.",
          "les limites occlusales de la préparation doivent être en contact avec les dents antagonistes",
          "le fond de la cavité est parallèle au plan d'occlusion",
          "le mur dentinaire doit être supérieur à 1 mm"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "boite proximale : 1 à 1.5 mm plus profonde que la cavité occlusale"
      },
      {
        questionText: "Dans la réalisation clinique des restaurations collées :",
        options: [
          "les préparations se font avec extension prophylactique en queue d'aronde",
          "les préparations nécessitent la réalisation d'extensions pour augmenter la rétention ,",
          "la rétention est assurée par la géométrie de la cavité et non par la colle",
          "la préparation exige un fond plat",
          "la profondeur de la cavité de préparation ne dépasse pas 1.5 mm"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Le Smear layer :",
        options: [
          "Doit se lier à l'adhésif pour assurer le collage dentinaire",
          "Doit se lier au silane pour assurer le collage a la restauration prothétique",
          "Est éliminé totalement par un rinçage et un séchage",
          "Est éliminé par un fraisage de la dentine",
          "Est constitué en majeur partie d'hydroxyapatite"
        ],
        correctOptionIndexes: [4],
        explanation: "La boue dentinaire obture les tubulis dentinaires. Cependant ça liaison avec la dentine est faible et par conséquent ne peut jamais être utile pour l'adhésion avec la résine Le mordançage permet de dissoudre les composants minéraux de la boue dentinaire"
      },
      {
        questionText: "L'onlay en céramique:",
        options: [
          "Est une reconstitution corono - radiculaire",
          "Restaure la face vestibulaire de la dent postérieure",
          "Est collé l'oxyphosphate de zinc",
          "Est utilisé comme pilier de bridge",
          "Est un traitement prothétique non conservateur"
        ],
        correctOptionIndexes: [3],
        explanation: "Onlay : est une extension de l’inlay qui donnera un recouvrement cuspidien incomplet"
      },
      {
        questionText: "L'inlay en céramique :",
        options: [
          "Recouvre une seule cuspide",
          "Intéresse seulement une face de la dent",
          "Est indiqué pour les dents courtes",
          "Sa préparation nécessite un fond plat",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "L’inlay restaure d’une à cinq faces de la couronne d’une dent sans recouvrement cuspidien"
      },
      {
        questionText: "Les restaurations partielles collés sont indiquées :",
        options: [
          "Pour restaurer les cavités dont leur largeur est inférieure au 1/3 de la largeur vestibulolinguale",
          "Comme piler de bridge de petite étendue",
          "Comme pilier de bridge de grande étendue",
          "Dans le cas de la perte totale de la partie couronnaire de la dent",
          "Dans le cas des cavités de classe I et II de Black"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "-Les cavités où la largeur est supérieure au tiers de la largeur vestibulo-linguale"
      },
      {
        questionText: "L'inlay est une pièce prothétique qui :",
        options: [
          "Ne construit aucune cuspide",
          "Reconstruit cuspide ou plus, mais pas toutes",
          "Reconstruit toutes les cuspides",
          "Est réalisée sur molaire délabrée et dévitalisée en exploitant Ia chambre pulpaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Les restaurations collées indirectes:",
        options: [
          "Sont particulièrement indiquées pour les pertes de substance d'origine carieuse et les lésions occlusales d'usure",
          "Peuvent être assemblées par l'oxyphosphate de zinc",
          "Peuvent être réalisées sur des dents pulpées",
          "Peuvent être réalisées sur des dents dépulpées",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: ""
      },
      {
        questionText: "Les restaurations collies Indirectes sont contre-indiquées :",
        options: [
          "Quand limite de la carie est sous gingivale",
          "Quand limite de la carie est supra gingivale",
          "En présence d'une para-fonction (Bruxisme)",
          "Quand la dent est courte",
          "Quand l'hygiène buccale est insuffisante"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Contre indications: - Hygiène buccale insuffisante - Les habitudes parafonctionnelles - Dent courte qui empêche la réalisation clinique (minimum 1.5 mm) - Limite sous gingivale difficilement accessible (empêche le collage). -Grosse cavité dont les extensions dépassent le collet anatomique et ou l’email n’est plus présent."
      }
    ]
  },
  {
    title: "Choix et Indications des Ancrages",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "L'ancrage d'un bridge de longue portée sur dents pulpées peut être :",
        options: [
          "une couronne coulée (CC).",
          "une couronne à incrustation vestibulaire (CIV).",
          "une couronne céramo-métallique (CCM).",
          "une couronne Jacket (CJ)",
          "un inlay"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les bridges de longue portée nécessitent des ancrages à recouvrement total offrant une rétention maximale, comme la CC, la CIV ou la CCM. La Couronne Jacket (CJ) et l'inlay sont contre-indiqués."
      },
      {
        questionText: "L'ancrage:",
        options: [
          "représente la partie du pont qui est scellée sur une dent pilier",
          "représente la partie de la dent préparée pour recevoir un élément prothétique.",
          "a comme premier rôle d'unir le corps du bridge aux éléments intermédiaires.",
          "a comme premier rôle d'unir le corps du bridge aux piliers.",
          "doit restaurer la forme, la fonction, et l'esthétique"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "L'ancrage (ex: la couronne) est l'élément prothétique scellé sur le pilier (A) pour y fixer le bridge (D). Il doit également restaurer la forme, la fonction et l'esthétique de la dent pilier (E)."
      },
      {
        questionText: "En prothèse conjointe, un ancrage :",
        options: [
          "Représente to partie du pont qui est scellée sur une dent adjacente",
          "Doit restaurer uniquement la forme",
          "Doit restaurer uniquement la fonction",
          "Doit restaurer uniquement l’esthétique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Il est scellé sur une dent *support* (pilier), pas 'adjacente'. Il doit restaurer la forme, la fonction *et* l'esthétique. Par conséquent, toutes les propositions (A, B, C, D) sont fausses."
      },
      {
        questionText: "En cas de faible hauteur coronaire sur une molaire I'ancrage le mieux indique est :",
        options: [
          "Une couronne céramo-ceramique monobloc",
          "Une couronne céramo-ceramique stratifiee",
          "Une couronne métallique coulée",
          "Une couronne céramo-metallique.",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "La couronne métallique coulée (CC) offre la meilleure rétention avec la préparation la moins épaisse, ce qui est idéal pour les moignons courts où l'esthétique n'est pas prioritaire (molaire)."
      },
      {
        questionText: "La taille pour la mise en place d'un ancrage :",
        options: [
          "Doit être suffisante pour assurer à la structure métallique une épaisseur garantissant sa résistance",
          "Doit être économe pour éviter de fragiliser la dent piller",
          "Doit protéger la dent contre les chocs thermiques",
          "Doit protéger la dent contre la carie",
          "Doit protéger la dent contre la fracture"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "La préparation doit être économe en tissu (B), mais suffisante pour la résistance du matériau (A). L'ancrage (la couronne) sert aussi à protéger la dent pilier contre la fracture (E)."
      },
      {
        questionText: "Sur dents pulpées :",
        options: [
          "Si la travée de bridge est longue il conviendra d'utiliser les ancrages recouvrement partiel : couronne coulée, CIV ou CCM.",
          "Si la travée de bridge n’est pas trop longue et que les dents supports sont assez volumineuses, il conviendra d’utiliser des inlays.",
          "Si to travée de bridge est très courte et que les dents piliers sont très volumineuses il conviendra d'utiliser un onlay.",
          "Toutes les réponses sont justes.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "A est faux : CC, CIV, CCM sont des recouvrements *totaux*. B est faux : on utiliserait des *onlays*, pas des inlays. C est faux : pour une travée très courte, on utiliserait des *inlays*, pas des onlays. Toutes les réponses sont fausses."
      }
    ]
  },
  {
    title: "Classifications des Ponts",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Le bridge de moyenne porté :",
        options: [
          "Remplace les dents antérieures avec une seule dent pilier",
          "Peut-être de forme rectiligne ou curviligne",
          "Doit comporter un seul Intermédiaire",
          "Peut comporter deux intermédiaires",
          "Son Infrastructure doit être en métal"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le bridge de moyenne portée remplace deux dents (D), qu'elles soient contiguës ou non. Il peut donc avoir une forme rectiligne (ex: 45-46-47) ou curviligne (ex: 12-13-21)."
      },
      {
        questionText: "Pour augmenter Ia résistance du bridge aux mouvements qui le descellent :",
        options: [
          "On augmente le nombre des dents piliers non alignées",
          "On utilise des appuis supplémentaires lorsque le bridge est en forme d'une courbure prononcée",
          "Les dents piliers doivent être dans le même plan de ROY",
          "La somme des coefficients de mastication des dents absentes doit être supérieure a la somme des coefficients des der piliers",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "A (Loi de Beliard) : des piliers non alignés créent un polygone de sustentation stable. B (Loi de Sadrin) : les courbures prononcées nécessitent des appuis supplémentaires pour contrer le renversement."
      },
      {
        questionText: "La flexion que subit Ia travé d'un pont :",
        options: [
          "Dépend de sa longueur et non de son épaisseur",
          "Est inversement proportionnel à sa longueur",
          "Est proportionnelle à son épaisseur",
          "Dépend du module de YOUNG de l'alliage utilise",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "La flexion est proportionnelle au cube de la longueur et inversement proportionnelle au cube de l'épaisseur (A, B, C sont faux). Elle dépend aussi de la rigidité (Module d'Young) du matériau (D)."
      },
      {
        questionText: "L'équilibre biomécanique d'un pont dépend :",
        options: [
          "Du nombre des dents à remplacer et non de leur situation",
          "De la nature de L'alliage utilise et de l'élément cosmétique",
          "De la forme de l'intermédiaire et non des faces axiales des ancrages",
          "De la morphologie occlusale de la restauration prothétique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'équilibre biomécanique dépend de la rigidité de l'infrastructure (nature de l'alliage) (B) et de la gestion des forces, qui est dictée par la morphologie occlusale (D)."
      },
      {
        questionText: "Un bridge de moyenne portée :",
        options: [
          "Remplace une dent absente",
          "Est généralement un",
          "Remplace des dents non contiguës",
          "Remplace deux dents contiguës",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le bridge de moyenne portée est défini comme remplaçant deux dents, qu'elles soient adjacentes (contiguës) (D) ou non (C)."
      },
      {
        questionText: "Comme ancrage d'un bridge de courte portée, on peut utiliser :",
        options: [
          "Un onlay type couronne 4/5 sur une canine",
          "Un onlay type couronne 3/5 sur une molaire",
          "Une couronne coulée sur la première prémolaire",
          "Une couronne jacket",
          "Une couronne céramo métallique"
        ],
        correctOptionIndexes: [4],
        explanation: "Un bridge de courte portée (remplacement d'une dent) peut utiliser des ancrages à recouvrement total (CCM, CC) ou partiel (Onlay). La Couronne Jacket est contre-indiquée. Parmi les choix, la CCM est un ancrage très fiable."
      },
      {
        questionText: "Le bridge dento implants porté",
        options: [
          "peut provoquer une perte osseuse péri implantaire",
          "peut provoquer une fracture des composants implantaires",
          "peut causer une égression de la dent naturelle",
          "est mieux toléré que le bridge implanto porté",
          "n’est indiqué que lorsque la dent naturelle est intermédiaire entre 2 implants ……."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "Le bridge colle",
        options: [
          "est indiqué en cas d'edentement de petite étendus",
          "présente une longévité incertaine",
          "a le statut d'une prothèse provisoire à long terme",
          "est très mutant pour les dents piliers",
          "est un bridge dento-implanto porté"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "ROY a divisé l’arcade en cinq plans",
        options: [
          "Un plan incisif qui est soumis aux forces latérales",
          "Un plan canin qui est soumis aux forces antéro-postérieurs",
          "Un plan prémolo-molaire qui est soumis aux forces horizontales",
          "La théorie de ROV est intéressante pour les bridges de contention",
          "Selon ROY les dents piliers doivent être choisies dans un seul plan"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Loi de ROY Il a divisé l’arcade dentaire en 5 plans : 1. Un plan incisif qui est soumis aux forces post-antérieures. 2. Un plan pour chaque canine. Ce plan est soumis aux forces latérales. 3. Un plan pour prémolo-molaire. Qui est soumis aux forces horizontales. La théorie de ROY est intéressante pour les bridges de contention ; les dents piliers doivent être choisies dans plusieurs plans pour assurer l’immobilisation de bridge. - Si les 2 dents à remplacer sont situées dans deux plans différents de ROY, il est nécessaire de prendre 4 piliers à raison de 2 pour chaque côté de l’édentement."
      },
      {
        questionText: "Les bridges inamovibles:",
        options: [
          "sont articules et démontables en partie par le praticien.",
          "utilisent la force de friction entre les ancrages scellés et la travée.",
          "Sont composés d'éléments scellés sur les dents et supportent des travées qui reproduisent les dents absentes.",
          "présente la nécessité de l'enlever périodiquement pour vérifier la muqueuse sous-jacente.",
          "nécessitent une mutilation tissulaire"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "A/D : Bridge amovo-inamovible B : Bridge amovible"
      },
      {
        questionText: "Le bridge de courte portée à double encastrement:",
        options: [
          "ne remplace qu'une dent sur l'arcade.",
          "comporte deux piliers supports avec ancrage sur dent pulpée uniquement.",
          "peut remplacer jusqu'à deux dents.",
          "ne peut être que rectiligne.",
          "ne peut être curviligne."
        ],
        correctOptionIndexes: [0],
        explanation: "B :sur dent pulpée ou dépulpée D/E : il peut être rectiligne ou curviligne BCP à double encastrement rectiligne "
      },
      {
        questionText: "Le bridge de courte porté:",
        options: [
          "A besoin de deux ancrages",
          "A besoin d'un seul ancrage",
          "Est indiqué exclusivement à la région antérieure",
          "Peut avoir un onlay comme moyen d'ancrage",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "l'inconvénient réside dans la mutilation de deux dents pour remplacer une seule dent. Bcp à double encastrement rectiligne (secteurs latéraux de l'arcade dentaire) BCP à double encastrement curviligne (secteur antérieur) "
      },
      {
        questionText: "Le bridge de moyenne porte :",
        options: [
          "Est indiqué pour remplacer deux dents adjacentes",
          "Est indiqué pour remplacer deux dents non adjacentes",
          "Est réalisable uniquement sur des piliers alignes",
          "A besoin d'un seul ancrage",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "remplacement de deux dents absentes contigües ou non. encastrement rectiligne ou curviligne "
      },
      {
        questionText: "Le bridge inamovible :",
        options: [
          "Est démontable périodiquement par le praticien pour nettoyage",
          "Est moins confortable qu'un bridge amovible",
          "Son hygiène est facilitée",
          "C'est une prothèse qui assure un maximum d'économie tissulaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "A : Bridge amovo-inamovible Ils présentent comme avantages leur sensation de confort, de sécurité et de stabilité ne sont pas totalement prophylactiques. par contre, ils nécessitent une mutilation tissulaire"
      },
      {
        questionText: "Le bridge de moyenne porté :",
        options: [
          "Remplace les dents antérieures avec une seule dent pilier",
          "Peut-être de forme rectiligne ou curviligne",
          "Doit comporter un seul Intermédiaire",
          "Peut comporter deux intermédiaires",
          "Son Infrastructure doit être en métal"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "[Image showing medium span bridge with two pontics highlighted]"
      },
      {
        questionText: "La flexion que subit Ia travé d'un pont :",
        options: [
          "Dépend de sa longueur et non de son épaisseur",
          "Est inversement proportionnel à sa longueur",
          "Est proportionnelle à son épaisseur",
          "Dépend du module de YOUNG de l'alliage utilise",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "La flexion de la travée de bridge est 8 fois plusimportante si la longueur est double . La flexion (X) d'une travée de bridge d'épaisseur (t) est huit fois moindre que celle d'une travée deux fois moins épaisse ."
      },
      {
        questionText: "L'équilibre biomécanique d'un pont dépend :",
        options: [
          "Du nombre des dents à remplacer et non de leur situation",
          "De la nature de L'alliage utilise et de l'élément cosmétique",
          "De la forme de l'intermédiaire et non des faces axiales des ancrages",
          "De la morphologie occlusale de la restauration prothétique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Morphologie des ancrages / Morphologie des éléments intermédiaires et Morphologie axiale / Morphologie des surfaces occlusales et équilibration occlusale / Choix des dents supports"
      },
      {
        questionText: "Pour augmenter Ia résistance du bridge aux mouvements qui le descellent :",
        options: [
          "On augmente le nombre des dents piliers non alignées",
          "On utilise des appuis supplémentaires lorsque le bridge est en forme d'une courbure prononcée",
          "Les dents piliers doivent être dans le même plan de ROY",
          "La somme des coefficients de mastication des dents absentes doit être supérieure a la somme des coefficients des der piliers",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Loi de BELIARD : L’augmentation du nombre des dents piliers non alignées améliore les conditions d’équilibre en limitant le nombre des axes de rotation [Image illustrating Beliard's Law]. Loi de SADRIN : Une courbure prononcée détermine un mouvement de renversement qui doit être équilibré par l’utilisation d’appuis supplémentaires Loi de ROY : Il a divisé l’arcade dentaire en 5 plans Loi de DUCHANGE : la somme des coefficients des dents piliers (force de résistance) doit être supérieure ou égale à la somme des coefficients des dents absentes (force de travaille)"
      },
      {
        questionText: "Comme ancrage d'un bridge de courte portée, on peut utiliser :",
        options: [
          "Un onlay type couronne 4/5 sur une canine",
          "Un onlay type couronne 3/5 sur une molaire",
          "Une couronne coulée sur la première prémolaire",
          "Une couronne jacket",
          "Une couronne céramo métallique"
        ],
        correctOptionIndexes: [4],
        explanation: "Exemple remplacement de la première PM (taille de la 2eme pm plus un onlay sur la canine) [Image showing a short span bridge with an onlay and a crown]"
      },
      {
        questionText: "Un bridge de moyenne portée :",
        options: [
          "Remplace une dent absente",
          "Est généralement un",
          "Remplace des dents non contiguës",
          "Remplace deux dents contiguës",
          "Toutes les réponses sont justesToutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "Un bridge a simple encastrement :",
        options: [
          "Est appelé cantilever",
          "Est indiqué en raison des forces passives sur les dents piliers.",
          "Est contre-indique en raison des risques de torsions sur les dents piliers",
          "Est contre-indique en raison des mouvements de renversement,",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Indications plus orientées vers le remplacement desincisives latérales ou prémolaires, lorsque l’alternative implantaire est impossible ."


      },
      {
        questionText: "polygonal:",
        options: [
          "Peut-titre partiel sous forme d'arc.",
          "Peut-titre partiel sous forme parabolique.",
          "Peut-titre total",
          "S'inscrit dans 2 à 3 plans de ROY.",
          "S'inscrit dans les 5 plans de ROY."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: ""
      },
      {
        questionText: "La résistance mécanique d'un bridge :",
        options: [
          "Dépend du choix de l'alliage",
          "Dépend de l’épaisseur de la travée",
          "Dépend de l'étendu de la construction",
          "Est augmentée par le choix des alliages précieux",
          "Est augmentée par le choix des alliages non précieux"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Pour des constructions très étendues qui comportent des travées de longues amplitudes on choisira les alliages non précieux à base de NI- Cr qui garantissent une rigidité accrue."
      },
      {
        questionText: "Un bridge polygonal:",
        options: [
          "Remplace seulement deux dents",
          "Peut restaurer un endentement partiel",
          "Peut restaurer complètement une arcade dentaire",
          "Peut-titre amovo inamovible",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "2 possibilités : Restaurer la partie antérieure de l’arcade de PM à PM ; Restaurer la partie latérale et rectiligne de l’arcade "
      }
    ]
  },
  {
    title: "Les Intermédiaires de Bridges (Pontiques)",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "l’intermédiaire de bridge doit :",
        options: [
          "être en sous occlusion",
          "Restaurer uniquement l'esthétique",
          "Etre toujours en contact avec la crête édentée",
          "Remplacer les dents absentes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Fournir des rapports occlusaux favorables aux dents piliers et aux dents antagonistes ainsi qu’au reste de la denture. Il peut etre contra/supra ou intra muqueux"
      },
      {
        questionText: "La morphologie des pontiques :",
        options: [
          "Doit avoir une surface vestibulaire surdimensionnée",
          "Doit avoir une table occlusale sous dimensionnée",
          "Assure une bombé vestibulaire très marque",
          "Assure l’absence de contacte occlusale avec la dent antagoniste",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Les faces vestibulaire et linguale doivent avoir un profil convexe, et reconstituer le bombé cervical Le rétablissement des rapports occlusaux avec les dents antagonistes permet de restituer l’efficacité masticatoire et de maintenir la stabilité de l’occlusion."
      },
      {
        questionText: "L'embrasure gingivale d'un bridge :",
        options: [
          "Est situé entre le point de contact et la muqueuse gingivale",
          "Doit être hermétiquement fermée",
          "Doit être suffisamment dégagée",
          "Doit permettre un nettoyage efficace",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La morphologie de l’intermédiaire doit permettre le nettoyage par des embrasures qui ne doivent pas être trop dégagées (bourrage alimentaire latéral) ou trop serrées (nettoyage difficile). [Image showing cervical embrasure angle]"
      },
      {
        questionText: "L'intermédiaire intra-muqueux:",
        options: [
          "n’est pas toléré par les crêtes résiduelles",
          "Permet un meilleur contrôle de la plaque",
          "Donne un résultat esthétique satisfaisant",
          "Est indiqué dans la région molaire mandibulaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "il est séduisant au niveau esthétique,MAIS le plus souvent impossible à entretenir et conduisant à une rétention bactérienne source d’inflammation gingivale"
      },
      {
        questionText: "Une pontique ovoïde :",
        options: [
          "N'autorise pas un bon dégagement des embrasures",
          "Autorise une bonne hygiène",
          "Est indiqué principalement pour le secteur postérieur",
          "Etablie un contact minime avec la crête",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Cette forme est facile à nettoyer à cause des embrasures dégagées "
      },
      {
        questionText: "Plus la travée d'un bridge est courte :",
        options: [
          "1- Plus les forces de flexion qui agissent sur elle sont grandes",
          "2- Plus les forces de flexion sont faibles",
          "3- Plus les dents piliers subissent des pressions",
          "4- Moins les dents piliers subissent des pressions",
          "5- Toutes les réponses sont fausses"
        ],
        correctAnswers: ["A. (1,3)","B. (2,4)","C. (5)","D. (2,3)","E. (1,4)"],
        correctOptionIndexes: [1], // Assuming B is the correct choice based on explanation
        explanation: "La flexion d’un pont est proportionnelle au cube de la longueur de la travée. Donc, si on double la longueur de la travée, la flexion augmente par 8 , et si on la triple, elle augmente par 27 .\" \"Fundamentals of Fixed Prosthodontics\" , 4th Edition, Quintessence Publishing, 2012."
      },
      {
        questionText: "l’intermédiaire de bridge doit :",
        options: [
          "être en sous occlusion",
          "Restaurer uniquement l'esthétique",
          "Etre toujours en contact avec la crête édentée",
          "Remplacer les dents absentes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Est l’élément prothétique artificiel du bridge qui remplace la dent absente Les pontiques occupent l’espace édenté formants ainsi la travée du bridge"
      },
      {
        questionText: "La résistance d'une travée est :",
        options: [
          "1- proportionnelle à sa largeur",
          "2- inversement proportionnelle à sa largeur",
          "3- proportionnelle au carré de son épaisseur",
          "4- inversement proportionnelle à sa longueur",
          "5- proportionnelle à sa longueur"
        ],
        correctAnswers: ["A. A(1,2,3)","B. B(2,3,4)","C. C (1.3.4)","D. D(3,4,5)","E. E(1.4.5)"],
        correctOptionIndexes: [2], // Assuming C is the correct choice based on explanation
        explanation: "[Image showing the formula for pontic resistance R = l * e^2 / L]"
      },
      {
        questionText: "Le rétablissement des rapports occlusaux des pontiques avec les dents antagonistes permet :",
        options: [
          "De restituer l'efficacité masticatoire",
          "De maintenir la stabilité de L'occlusion",
          "De repartir les efforts sur les tissus du parodonte superficiel des dents piliers",
          "Toutes les réponses sont fausses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "diriger et répartir les efforts sur les tissus du parodonte profond des dents piliers."
      },
      {
        questionText: "La résistance d’une travé de bridge:",
        options: [
          "A est proportionnelle à largeur",
          "Est proportionnelle au carrée de son épaisseur.",
          "Est inversement proportionnelle à sa longueur",
          "Est donnée par la formule R = L*e2. /1 (avec R= Résistance, largeur, e=épaisseur et L=Longueur)",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La résistance d’une travée est proportionnelle à sa largeur, au carré de son épaisseur et inversement proportionnelle à sa longueur R = l ∗ e2/L"
      },
      {
        questionText: "Selon GLICKMAN l'intermédiaire (travée) de bridge doit répondre aux exigences suivantes:",
        options: [
          "Doit être esthétiquement acceptable.",
          "Doit fournir des rapports occlusaux favorables aux dents piliers et aux dents antagonistes.",
          "Doit permettre une autostimulation des tissus grâce au maximum de contacts de la langue des joues, des lèvres et des aliments.",
          "Doit rétablir l'efficacité masticatoire de la dent qu'il remplace.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: ""
      },
      {
        questionText: "La résistance d’une travé de bridge:",
        options: [
          "A est proportionnelle à largeur",
          "Est proportionnelle au carrée de son épaisseur.",
          "Est inversement proportionnelle à sa longueur",
          "Est donnée par la formule R = L*e2. /1 (avec R= Résistance, largeur, e=épaisseur et L=Longueur)",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La résistance d’une travée est proportionnelle à sa largeur, au carré de son épaisseur et inversement proportionnelle à sa longueur R = l ∗ e2/L"
      },
      {
        questionText: "L'intermédiaire de bridge est en rapport avec des tissus différents :",
        options: [
          "La face occlusale répondant la crête.",
          "Les faces proximales répondant respectivement aux joues et à la langue.",
          "Les faces gingivales répondent aux dents antagonistes.",
          "Les faces vestibulaire et linguale répondant aux moyens d'ancrage et aux dents support",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: ""
      },
      {
        questionText: "La résistance d’une travé de bridge:",
        options: [
          "A est proportionnelle à largeur",
          "Est proportionnelle au carrée de son épaisseur.",
          "Est inversement proportionnelle à sa longueur",
          "Est donnée par la formule R = L*e2. /1 (avec R= Résistance, largeur, e=épaisseur et L=Longueur)",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La résistance d’une travée est proportionnelle à sa largeur, au carré de son épaisseur et inversement proportionnelle à sa longueur R = l ∗ e2"
      }
    ]
  },
  {
    title: "Prothèse Fixée et Parodonte",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Vis a vis du parodonte, Ia prothèse provisoire fixé va assurer plusieurs rôles :",
        options: [
          "Maintenir la gencive libre dans une position physiologique après la préparations",
          "Faciliter la cicatrisation des tissus parodontaux autour des dents non préparées",
          "Améliorer et faciliter les conditions de la préparations",
          "Anticiper sur la forme et la morphologie de la prothèse définitive",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La prothèse provisoire est essentielle pour maintenir la gencive marginale (libre) à son niveau (A) et pour valider la forme et le profil d'émergence de la future prothèse (D)."
      },
      {
        questionText: "L'évaluation de la santé parodontale pré-prothétique :",
        options: [
          "est facultative",
          "s'intéresse à l'appréciation de l'espace biologique des dents piliers",
          "s'intéresse uniquement à l'évaluation du parodonte superficiel des dents piliers",
          "s'intéresse uniquement à l'évaluation du parodonte profond des dents piliers",
          "s'intéresse à l'évaluation du parodonte superficiel et du parodonte profond des dents piliers"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "L'évaluation parodontale est un prérequis obligatoire (A est faux). Elle doit être complète, incluant le parodonte superficiel (gencive) et profond (os) (E), et doit impérativement évaluer la position de l'espace biologique (B)."
      },
      {
        questionText: "La limite cervicale intra-sulculaire :",
        options: [
          "ne doit pas empiéter sur l'espace biologique",
          "doit éviter la partie apicale du sulcus",
          "ne doit pas éviter la partie apicale du sulcus",
          "doit exploiter la partie coronaire du sulcus",
          "ne doit pas exploiter la partie coronaire du sulcus"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Pour préserver la santé parodontale, la limite intra-sulculaire doit rester dans la partie haute (coronaire) du sulcus (D), ne jamais atteindre le fond (partie apicale) (B), et surtout ne jamais violer l'espace biologique (A)."
      },
      {
        questionText: "La prise d'empreinte avec un minimum de risques pour l'attache épithéliale est assurée par :",
        options: [
          "Les techniques chimio mécaniques",
          "Les techniques d'éviction gingivale mécaniques",
          "Les techniques de déflexion en utilisant des cordonnets",
          "Les techniques d'éviction gingivale chirurgicales",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les techniques les moins invasives sont chimio-mécaniques (A), qui utilisent des agents chimiques (astringents) et une pression mécanique (cordonnets (C) ou pâtes)."
      },
      {
        questionText: "Vis a vie du parodonte, Ia prothèse provisoire va assurer plusieurs rôles :",
        options: [
          "Maintenir la gencive attachée dans une position physiologique après la préparation",
          "Entraver la cicatrisation des tissus parodontaux autour des dents préparées",
          "Améliorer et faciliter les conditions de la prise de l'empreinte",
          "Anticiper sur la forme et la morphologie de Ia prothèse définitive",
          "Assurer une éviction gingivale"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "En guidant la cicatrisation gingivale, la provisoire (bien adaptée) améliore les conditions pour l'empreinte (C) et sert de maquette pour la prothèse définitive (D)."
      },
      {
        questionText: "L'espace biologique :",
        options: [
          "Fut décrit pour la première fois par Garguilo et Winter en 1916",
          "Sa hauteur moyenne est de 2 mm",
          "Est constitué par la zone d'attache des tissus gingivaux a Ia surface radiculaire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'espace biologique (décrit par Gargiulo en 1961, A est faux) a une hauteur moyenne d'environ 2.04 mm (B) et comprend l'attache conjonctive et l'attache épithéliale (C)."
      },
      {
        questionText: "D'un point de vue parodontal, la meilleure localisation des limites cervicales :",
        options: [
          "Est supra gingivale",
          "Juxta gingivale",
          "Intra-sulculaire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "La limite supra-gingivale est la plus respectueuse du parodonte car elle est facile à nettoyer et n'interfère pas avec l'attache gingivale."
      },
      {
        questionText: "Le bilan parodontale pré-prothétique:",
        options: [
          "est indispensable avant tout traitement par prothèse fixée",
          "vise à apprécier la capacité du parodonte à tolérer une prothèse fixée",
          "ne comporte pas d'examen de mobilité dentaire",
          "est facultatif en cas de prothèse fixée",
          "doit être fait cliniquement et radiologiquement"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "C : « Les Mobilités dentaires sont évaluées à l’aide du manche du miroir ou à l’aide de précelles… » D : « L’évaluation de la santé parodontale repose sur un triptyque indissociable : analyse des tissus mous superficiels, examen du parodonte profond, et l’étude radiologique. »"
      },
      {
        questionText: "L'accès aux limites cervicales:",
        options: [
          "se fait avant la prise d'empreinte",
          "peut uniquement être réalisé par des moyens mécaniques",
          "peut se faire avec des cordonnets rétracteurs",
          "peut se faire avec une prothèse provisoire",
          "peut se faire avec un syndesmotome"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B : « Accéder aux limites cervicales en écartant temporairement la gencive marginale par des méthodes : – Mécaniques : cordonnets rétracteurs, prothèse provisoire, – Chimio-mécaniques : cordonnets rétracteurs imprégnés ; système de pâte de déflection (Expasyl), – Chirurgicales : fraises, laser, bistouri électrique. »"
      },
      {
        questionText: "L'évaluation de la santé parodontale pré-prothétique :",
        options: [
          "est facultative",
          "s'intéresse à l'appréciation de l'espace biologique des dents piliers",
          "s'intéresse uniquement à l'évaluation du parodonte superficiel des dents piliers",
          "s'intéresse uniquement à l'évaluation du parodonte profond des dents piliers",
          "s'intéresse à l'évaluation du parodonte superficiel et du parodonte profond des dents piliers"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "A : La clé de réussite"
      },
      {
        questionText: "La limite cervicale intra-sulculaire :",
        options: [
          "ne doit pas empiéter sur l'espace biologique",
          "doit éviter la partie apicale du sulcus",
          "ne doit pas éviter la partie apicale du sulcus",
          "doit exploiter la partie coronaire du sulcus",
          "ne doit pas exploiter la partie coronaire du sulcus"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: ""
      },
      {
        questionText: "La prise d'empreinte avec un minimum de risques pour l'attache épithéliale est assurée par :",
        options: [
          "Les techniques chimio mécaniques",
          "Les techniques d'éviction gingivale mécaniques",
          "Les techniques de déflexion en utilisant des cordonnets",
          "Les techniques d'éviction gingivale chirurgicales",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La technique de choix consiste à faire appel à une déflexion par deux cordonnets; le premier fil non imprégné est laissé au fond du sulcus lors de l'empreinte alors que le second imprégné est retiré juste avant. [Image showing gingival deflection with cords]"
      },
      {
        questionText: "Vis a vie du parodonte, Ia prothèse provisoire va assurer plusieurs rôles :",
        options: [
          "Maintenir la gencive attachée dans une position physiologique après la préparation",
          "Entraver la cicatrisation des tissus parodontaux autour des dents préparées",
          "Améliorer et faciliter les conditions de la prise de l'empreinte",
          "Anticiper sur la forme et la morphologie de Ia prothèse définitive",
          "Assurer une éviction gingivale"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Vis du parodonte, la prothèse provisoire va assurer plusieurs rôles: Maintenir la gencive marginale dans une position physiologique après la préparation Faciliter la cicatrisation des tissus parodontaux autour des dents préparées améliorer et faciliter les conditions de l'empreinte anticiper sur la forme et la morphologie de la prothèse définitive"
      },
      {
        questionText: "La prise d'empreinte avec un minimum de risques pour l'attache épithéliale est assurée par :",
        options: [
          "Les techniques chimio-mécanique",
          "Les techniques d'éviction gingivale",
          "Les techniques de déflexion en utilisant des cordonnets",
          "L'utilisation d'une pâte de consistance épaisse comme l'Expasyl",
          "Toutes les réponses sont Justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L’apparition de l'Expasyl® qui une pâte de consistance épaisse injectée dans le sulcus et qui permet d'assurer une déflexion latérale de la gencive marginale associée à un effet hémostatique ce qui facilite la prise d’empreinte avec un minimum de risques pour l’attache épithéliale, particulièrement en cas de parodonte fin."
      },
      {
        questionText: "Vis a vis du parodonte, Ia prothèse provisoire va assurer plusieurs rôles :",
        options: [
          "Maintenir la gencive attachée dans une position physiologique après la préparation",
          "Entraver la cicatrisation des tissus parodontaux autour des dents préparées",
          "Améliorer et faciliter les conditions de l'empreinte",
          "Anticiper sur la forme et la morphologie de la prothèse définitive",
          "Stimuler le parodonte profond"
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "Vis a vis du parodonte, Ia prothèse provisoire fixé va assurer plusieurs rôles :",
        options: [
          "Maintenir la gencive libre dans une position physiologique après la préparations",
          "Faciliter la cicatrisation des tissus parodontaux autour des dents non préparées",
          "Améliorer et faciliter les conditions de la préparations",
          "Anticiper sur la forme et la morphologie de la prothèse définitive",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: ""
      },
      {
        questionText: "L'espace biologique :",
        options: [
          "Fut décrit pour la première fois par Garguilo et Winter en 1916",
          "Sa hauteur moyenne est de 2 mm",
          "Est constitué par la zone d'attache des tissus gingivaux a Ia surface radiculaire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’espace biologique fut décrit pour la première fois par Garguilo et Wintez en 1961,"
      },
      {
        questionText: "D'un point de vue parodontal, la meilleure localisation des limites cervicales :",
        options: [
          "Est supra gingivale",
          "Juxta gingivale",
          "Intra-sulculaire",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Cette limite présente l’avantage de faciliter la réalisation prothétique et de diminuer l'agression parodontale."
      }
    ]
  },
  {
    title: "L’Occlusion",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "La réussite d'une restauration prothétique fixée dépend :",
        options: [
          "Essentiellement de ses rapports en occlusion en relation centrée",
          "essentiellement de ses rapports en occlusion d'intercuspidation existante",
          "Principalement de l'harmonie des rapports occlusaux inter arcades en statique et dynamique",
          "Partiellement de la dysharmonie des rapports occlusaux inter arcades corrigée",
          "de la non-participation de cette restauration fixe à l'articulé du patient"
        ],
        correctOptionIndexes: [2],
        explanation: "La réussite à long terme dépend de l'intégration parfaite de la prothèse dans l'occlusion du patient, à la fois en statique (PIM) et en dynamique (propulsion, latéralité)."
      },
      {
        questionText: "Les points supports de l'occlusion du premier groupe :",
        options: [
          "sont les plus importants pour assurer la stabilité de l'occlusion en occlusion en relation centrée",
          "sont les plus importants pour assurer la stabilité de l'occlusion en occlusion en intercuspidation maximale",
          "Parmi elles ont compte la cuspide et la fosse des molaires dites clef de l'occlusion",
          "S’articulent partiellement avec les crêtes marginales mandibulaires et maxillaires",
          "S’articulent principalement avec les crêtes marginales mandibulaires et maxillaires"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Le groupe 1 (cuspides d'appui vs crêtes marginales) participe à la stabilité de la PIM (B) et se situe principalement sur les crêtes marginales (E)."
      },
      {
        questionText: "La table occlusale rebasée est :",
        options: [
          "une table de guidance d'occlusion",
          "une cire d'occlusion",
          "une maquette d'occlusion",
          "indiquée pour l'enregistrement d'une intercuspidation maximale",
          "indiquée pour l'enregistrement d'une intercuspidation maximale en relation centrée"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "C'est une technique d'enregistrement de la PIM (D) utilisant une cire (B) qui est rebasée en bouche."
      },
      {
        questionText: "La relation centrée est :",
        options: [
          "Une coaptation bilatérale indépendantes condylo disco - temporale",
          "Une coaptation latérale synchrone condylo disco - temporale",
          "Une coaptation bilatérale synchrone condylo disco temporale",
          "Une relation fiable dans le sens horizontal et vertical",
          "Déterminée uniquement par deux déterminantes horizontales"
        ],
        correctOptionIndexes: [2],
        explanation: "Définition de la RC : une position condylienne haute, bilatérale, synchrone et stabilisée."
      },
      {
        questionText: "La restauration par une prothèse fixée d'une prémolaire droite chez un patient dont toutes les dents sont présentes :",
        options: [
          "Une réhabilitation en PIM avec une fonction groupe en latérale respectée du cote gauche de l'arcade",
          "Une réhabilitation en PIM coïncidant avec Ia relation centrée avec une fonction canine en latéralité du cote droit de l'arcade",
          "Une réhabilitation en OIM avec absence d'un guidage antérieure",
          "Une réhabilitation en PIM avec une fonction latérale respectée du cote gauche de l'arcade et une guidance antérieure respectée",
          "Une réhabilitation en PIM avec une fonction latérale respectée du cote droit de l'arcade et une guidage antérieure respectée"
        ],
        correctOptionIndexes: [4],
        explanation: "L'objectif est d'intégrer la nouvelle couronne dans la PIM (Position d'Intercuspidie Maximale) existante, en respectant les guidages existants (le guidage antérieur et la fonction latérale du côté droit)."
      },
      {
        questionText: "L'occlusion :",
        options: [
          "Tout état statique et dynamique a un instant donne par un rapport inter arcades",
          "Définie par au moins de deux points de contact occlusal",
          "Correspond à toute situation de contact inter arcades",
          "Définie par au moins un point de contact occlusal",
          "Est le passage d'une position occlusale a une autre sans perte de contact entre les dents"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'occlusion est définie comme *tout* contact statique entre les surfaces occlusales (C), ce qui implique qu'un seul point de contact suffit (D)."
      },
      {
        questionText: "Les cuspides secondaires :",
        options: [
          "Sont des cuspides de soutien",
          "Leurs pointes se situent toujours dans les aires occlusales antagonistes en intercuspidation maximale",
          "Sont des cuspides de soutien centrées",
          "Sont des cuspides de guidage et de préhension",
          "Sont des cuspides de guidage et de soutien"
        ],
        correctOptionIndexes: [3],
        explanation: "Les cuspides secondaires (ou guides) sont les Vestibulaires supérieures et Linguales inférieures. Elles servent à la préhension et au guidage lors des mouvements (D). Les cuspides primaires sont les cuspides de soutien (A, C, E sont faux)."
      },
      {
        questionText: "La relation centrée est :",
        options: [
          "Coïncide avec l'occlusion en intercuspidation maximale",
          "Se trouve en avant de l'occlusion en intercuspidation maximale",
          "Se trouve en arrière de l'occlusion en intercuspidation maximale",
          "Une position occlusale thérapeutique immanquable",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Chez 90% des individus, la PIM (position dentaire) se situe en avant de la RC (position articulaire). La RC est donc en arrière de la PIM."
      },
      {
        questionText: "La position d'intercuspidie maximale (PIM) :",
        options: [
          "Est une position de référencé dentaire",
          "Est une position de référencé articulaire",
          "Peut coexister avec des condyles en relation centrée (RC)",
          "Ne peut pas coexister avec des condyles en relation centrée (RC)",
          "Petit coexister avec des condyles en intercuspidie maximale (IM)"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La PIM est la position de contact maximal, c'est une référence dentaire (A). Dans de rares cas (10%), la PIM et la RC coïncident (C), on parle alors d'Occlusion en Relation Centrée (ORC)."
      },
      {
        questionText: "La position de repos (R) :",
        options: [
          "Est une position de référencé particulière a cheque individu",
          "Est une position de référencé commune tous les individus",
          "Est une position de laquelle commence et se termine tous les mouvements mandibulaires",
          "Est une position pendant laquelle les dents ne sont pas en contact",
          "Est une position pendant laquelle les dents sont en contact"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La position de repos est une posture musculaire (A) où il existe un espace libre entre les dents (D). Elle sert de point de départ et d'arrivée aux mouvements mandibulaires (C)."
      },
      {
        questionText: "La relation centrée est une position de référencé mandibulo-cranienne qui se définie par :",
        options: [
          "Une composante verticale qui est la DVO",
          "Une composante verticale qui est la DVR",
          "Deux composantes horizontales",
          "Deux composantes verticales.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La RC est une position articulaire de référence. Elle a des composantes horizontales (antéro-postérieure et transversale) (C) et une composante verticale (la Dimension Verticale d'Occlusion en RC) (A)."
      },
      {
        questionText: "On appelle table occlusale la surface occlusale des dents pluri cuspidées formé par:",
        options: [
          "Les versants internes des cuspides vestibulaires et palatines",
          "Les versants internes des cuspides vestibulaires et linguales",
          "Les versants externes des cuspides vestibulaires et palatines",
          "Les versants externes des cuspides vestibulaires et linguales",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La table occlusale est la surface fonctionnelle de la dent, délimitée par les sommets des cuspides vestibulaires et linguales/palatines, et comprenant donc leurs versants internes."
      },
      {
        questionText: "Les cuspides d'appui :",
        options: [
          "Sont les cuspides palatines supérieures et les cuspides vestibulaires inferieures",
          "Sont les cuspides vestibulaires supérieures et les cuspides linguales inferieures",
          "Sont appelées cuspides primaires",
          "Sont appelées cuspides secondaires",
          "Maintiennent la dimension verticale d'occlusion DVO"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les cuspides d'appui (ou primaires (C), ou de soutien) sont les Palatines supérieures et Vestibulaires inférieures (A). Elles sont responsables du maintien de la DVO (E)."
      },
      {
        questionText: "La restauration par une prothèse fixée d'une canine droite chez un patient dont la DVO est conservée exige :",
        options: [
          "Une réhabilitation en PIM avec une fonction groupe en latéralité du cote gauche de l'arcade",
          "Une réhabilitation en PIM coïncidant avec la relation contrée avec une fonction canine en latéralité du cote droit de l'arcade",
          "Une réhabilitation en PIM avec une fonction groupe antérieure pure en latéralité du cote droit de l'arcade",
          "Une réhabilitation en PIM avec une fonction canine en latéralité du cote gauche de l'arcade et one guidance antérieur respectée",
          "Une réhabilitation en PIM avec une fonction canine en latéralité du cote droit de l'arcade et une guidance antérieure respectée"
        ],
        correctOptionIndexes: [4],
        explanation: "L'objectif est d'intégrer la prothèse dans la PIM, en rétablissant la fonction canine du côté travaillant (côté droit) et en respectant le guidage antérieur."
      },
      {
        questionText: "La réussite d'une restauration prothétique fixée dépend :",
        options: [
          "Essentiellement de ses rapports en occlusion en relation centrée",
          "essentiellement de ses rapports en occlusion d'intercuspidation existante",
          "Principalement de l'harmonie des rapports occlusaux inter arcades en statique et dynamique",
          "Partiellement de la dysharmonie des rapports occlusaux inter arcades corrigée",
          "de la non-participation de cette restauration fixe à l'articulé du patient"
        ],
        correctOptionIndexes: [2],
        explanation: ""
      },
      {
        questionText: "Les points supports de l'occlusion du premier groupe :",
        options: [
          "sont les plus importants pour assurer la stabilité de l'occlusion en occlusion en relation centrée",
          "sont les plus importants pour assurer la stabilité de l'occlusion en occlusion en intercuspidation maximale",
          "Parmi elles ont compte la cuspide et la fosse des molaires dites clef de l'occlusion",
          "S’articulent partiellement avec les crêtes marginales mandibulaires et maxillaires",
          "S’articulent principalement avec les crêtes marginales mandibulaires et maxillaires"
        ],
        correctOptionIndexes: [1, 4],
        explanation: ""
      },
      {
        questionText: "La table occlusale rebasée est :",
        options: [
          "une table de guidance d'occlusion",
          "une cire d'occlusion",
          "une maquette d'occlusion",
          "indiquée pour l'enregistrement d'une intercuspidation maximale",
          "indiquée pour l'enregistrement d'une intercuspidation maximale en relation centrée"
        ],
        correctOptionIndexes: [1, 3],
        explanation: ""
      },
      {
        questionText: "La relation centrée est :",
        options: [
          "Une coaptation bilatérale indépendantes condylo disco - temporale",
          "Une coaptation latérale synchrone condylo disco - temporale",
          "Une coaptation bilatérale synchrone condylo disco temporale",
          "Une relation fiable dans le sens horizontal et vertical",
          "Déterminée uniquement par deux déterminantes horizontales"
        ],
        correctOptionIndexes: [2],
        explanation: "la relation centrée est la situation condylienne de référence la plus haute, réalisant une coaptation bilatérale condylo-disco-temporale, simultanée et transversalement stabilisée, suggérée etobtenue par contrôle non forcé."
      },
      {
        questionText: "La restauration par une prothèse fixée d'une prémolaire droite chez un patient dont toutes les dents sont présentes :",
        options: [
          "Une réhabilitation en PIM avec une fonction groupe en latérale respectée du cote gauche de l'arcade",
          "Une réhabilitation en PIM coïncidant avec Ia relation centrée avec une fonction canine en latéralité du cote droit de l'arcade",
          "Une réhabilitation en OIM avec absence d'un guidage antérieure",
          "Une réhabilitation en PIM avec une fonction latérale respectée du cote gauche de l'arcade et une guidance antérieure respectée",
          "Une réhabilitation en PIM avec une fonction latérale respectée du cote droit de l'arcade et une guidage antérieure respectée"
        ],
        correctOptionIndexes: [4],
        explanation: ""
      },
      {
        questionText: "L'occlusion :",
        options: [
          "Tout état statique et dynamique a un instant donne par un rapport inter arcades",
          "Définie par au moins de deux points de contact occlusal",
          "Correspond à toute situation de contact inter arcades",
          "Définie par au moins un point de contact occlusal",
          "Est le passage d'une position occlusale a une autre sans perte de contact entre les dents"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "tout état statique mandibulaire obtenu par des \"rapports de contact entre les surfaces occlusales des arcades dentaires quelle que soit la position de la mandibule\""
      },
      {
        questionText: "Les cuspides secondaires :",
        options: [
          "Sont des cuspides de soutien",
          "Leurs pointes se situent toujours dans les aires occlusales antagonistes en intercuspidation maximale",
          "Sont des cuspides de soutien centrées",
          "Sont des cuspides de guidage et de préhension",
          "Sont des cuspides de guidage et de soutien"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "La relation centrée est :",
        options: [
          "Coïncide avec l'occlusion en intercuspidation maximale",
          "Se trouve en avant de l'occlusion en intercuspidation maximale",
          "Se trouve en arrière de l'occlusion en intercuspidation maximale",
          "Une position occlusale thérapeutique immanquable",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: ""
      },
      {
        questionText: "La restauration par une prothèse fixée d'une canine droite chez un patient dont la DVO est conservée exige :",
        options: [
          "Une réhabilitation en PIM avec une fonction groupe en latéralité du cote gauche de l'arcade",
          "Une réhabilitation en PIM coïncidant avec la relation contrée avec une fonction canine en latéralité du cote droit de l'arcade",
          "Une réhabilitation en PIM avec une fonction groupe antérieure pure en latéralité du cote droit de l'arcade",
          "Une réhabilitation en PIM avec une fonction canine en latéralité du cote gauche de l'arcade et one guidance antérieur respectée",
          "Une réhabilitation en PIM avec une fonction canine en latéralité du cote droit de l'arcade et une guidance antérieure respectée"
        ],
        correctOptionIndexes: [4],
        explanation: ""
      },
      {
        questionText: "La position d'intercuspidie maximale (PIM) :",
        options: [
          "Est une position de référencé dentaire",
          "Est une position de référencé articulaire",
          "Peut coexister avec des condyles en relation centrée (RC)",
          "Ne peut pas coexister avec des condyles en relation centrée (RC)",
          "Petit coexister avec des condyles en intercuspidie maximale (IM)"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "peut coexister avec des condyles en relation centrée (RC)et dans ce cas on parle d’occlusion en relation centrée (ORC)."
      },
      {
        questionText: "La position de repos (R) :",
        options: [
          "Est une position de référencé particulière a cheque individu",
          "Est une position de référencé commune tous les individus",
          "Est une position de laquelle commence et se termine tous les mouvements mandibulaires",
          "Est une position pendant laquelle les dents ne sont pas en contact",
          "Est une position pendant laquelle les dents sont en contact"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: ""
      },
      {
        questionText: "La relation centrée est une position de référencé mandibulo-cranienne qui se définie par :",
        options: [
          "Une composante verticale qui est la DVO",
          "Une composante verticale qui est la DVR",
          "Deux composantes horizontales",
          "Deux composantes verticales.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: ""
      },
      {
        questionText: "On appelle table occlusale la surface occlusale des dents pluri cuspidées formé par:",
        options: [
          "Les versants internes des cuspides vestibulaires et palatines",
          "Les versants internes des cuspides vestibulaires et linguales",
          "Les versants externes des cuspides vestibulaires et palatines",
          "Les versants externes des cuspides vestibulaires et linguales",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "Les cuspides d'appui :",
        options: [
          "Sont les cuspides palatines supérieures et les cuspides vestibulaires inferieures",
          "Sont les cuspides vestibulaires supérieures et les cuspides linguales inferieures",
          "Sont appelées cuspides primaires",
          "Sont appelées cuspides secondaires",
          "Maintiennent la dimension verticale d'occlusion DVO"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: ""
      }
    ]
  }
];

module.exports = prothesey4Quizzes;