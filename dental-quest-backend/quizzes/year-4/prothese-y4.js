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
          "de la céramique feldspathique cuite sur modèle réfractaire",
          "une armature métallique recouverte de céramique",
          "de la vitrocéramique renforcée pressée ou usinée",
          "de la zircone usinée par CFAO",
          "de la zircone renforcée"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Monolithique = en un seul bloc. Cela inclut la vitrocéramique (pressée ou usinée) et la zircone (usinée). La céramique feldspathique sur réfractaire (A) est stratifiée (multicouche). La CCM (B) n'est pas monolithique."
      },
      {
        questionText: "Parmi ces matériaux, lesquels sont des céramiques polycristallines?:",
        options: [
          "Feldspath",
          "Alumine",
          "Vitrocéramique",
          "Disilicate de Lithium",
          "Zircone"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Les céramiques polycristallines ne contiennent pas de phase vitreuse. Il s'agit de l'Alumine et de la Zircone. Le Feldspath, la Vitrocéramique et le Disilicate de Lithium contiennent une phase vitreuse."
      },
      {
        questionText: "Concernant la préparation pour une couronne céramo-céramique (CCC):",
        options: [
          "une réduction occlusale minimale de 0,5mm est suffisante",
          "une réduction palatine est plus importante que vestibulaire",
          "une réduction vestibulaire de 1 à 1,5 mm est recommandée",
          "la limite cervicale est en forme d'un épaulement à angle droit",
          "les angles vifs doivent être accentués pour guider l'insertion"
        ],
        correctOptionIndexes: [2],
        explanation: "Une réduction vestibulaire de 1 à 1,5 mm est nécessaire. La réduction occlusale est de 1,5 à 2 mm (A faux). La limite est un épaulement à angle interne *arrondi* (D faux). Les angles vifs doivent être *arrondis* (E faux)."
      },
      {
        questionText: "Une facette céramique est indiquée dans les situations suivantes :",
        options: [
          "dyschromie sévère d'origine médicamenteuse sur dent dépulpée",
          "fluorose modérée avec défauts d'émail localisés",
          "diastème important avec pertes de substances étendues",
          "carie proximale profonde sur prémolaire",
          "légères malpositions dentaires"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Les facettes sont indiquées pour les dyschromies légères à modérées (fluorose) et pour corriger les légères malpositions. Les dyschromies sévères (A) sont difficiles à masquer. Les diastèmes importants (C) ou caries profondes (D) sont des contre-indications."
      },
      {
        questionText: "Les céramiques cuites sur revêtement réfractaire :",
        options: [
          "Font appel à la technique de la cire perdue",
          "Sont des vitrocéramiques renforcées au disilicate de lithium",
          "Sont des vitrocéramiques renforcées a Ia leucite",
          "Sont des vitrocéramiques",
          "Sont des céramiques feldspathiques"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Ce procédé (stratification sur un duplicata en matériau réfractaire) concerne les céramiques feldspathiques et certaines vitrocéramiques. La cire perdue (A) est utilisée pour la pressée ou la coulée."
      },
      {
        questionText: "Les céramiques in Ceram\" version Zirconia\" :",
        options: [
          "Sont destinées aux restaurations esthétiques sans impératif mécanique important",
          "Sont destinées aux restaurations esthétiques soumises à des efforts mécaniques moyens",
          "Sont destines aux restaurations esthétiques soumises à des efforts mécaniques majeurs",
          "Sont destinées aux restaurations soumises à des forces importantes sans impératif esthétique majeur",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "In-Ceram Zirconia (Alumine infiltrée de Zircone) est très résistante mais opaque. Elle est donc indiquée pour les secteurs postérieurs (forces importantes) où l'esthétique n'est pas la priorité."
      },
      {
        questionText: "Les céramiques usinées :",
        options: [
          "Sont préparées manuellement sous forme de blocs",
          "Sont destinés à être façonnés par soustraction dans un système spécifique CFAO",
          "Sont les seules à mettre en forme les infrastructures par soustraction de matériau",
          "Sont les seules à mettre en forme les infrastructures par addition de matériau",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les blocs de céramique pour CFAO (usinage) sont préparés industriellement (A faux). Ils sont façonnés par soustraction de matière (B). La cire ou la résine calcinable peuvent aussi être usinées (C faux). L'addition est l'impression 3D (D faux)."
      },
      {
        questionText: "Les vitrocéramiques renforcées : (1- Sont des vitrocéramiques renforcées à la leucite 2- Sont des vitrocéramiques renforcées au disilicate de lithium. 3- Sont des céramiques pressées. 4- Sont des céramiques usinées. 5- Présentent une grande opacité,)",
        options: [
          "(1,3,4,5)",
          "(2,4,5)",
          "(1.2.3)",
          "(1.2,3,4)",
          "(2,3,4,5)"
        ],
        correctOptionIndexes: [3],
        explanation: "Ce sont des vitrocéramiques (pas polycristallines) renforcées à la leucite (1) ou au disilicate de lithium (2). Elles peuvent être mises en œuvre par pressée (3) ou par usinage (4). Elles sont esthétiques et translucides (5 faux)."
      },
      {
        questionText: "Les couronnes céramo-céramiques sont des restaurations prothétiques réalisées avec une :",
        options: [
          "Infrastructure en alumine et une suprastructure en vitrocéramique.",
          "Infrastructure en céramique et une suprastructure en zircone.",
          "Infrastructure en zircon et une suprastructure en alumine.",
          "Infrastructure en zircone et une suprastructure en céramique feldspathique.",
          "Infrastructure et une suprastructure en monobloc tout zircone."
        ],
        correctOptionIndexes: [3],
        explanation: "La configuration la plus classique pour une CCC stratifiée est une infrastructure (chape) en Zircone (pour la résistance) recouverte d'une céramique cosmétique (suprastructure) de type feldspathique (pour l'esthétique)."
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
        questionText: "Les bridges inamovibles:",
        options: [
          "sont articules et démontables en partie par le praticien.",
          "utilisent la force de friction entre les ancrages scellés et la travée.",
          "Sont composés d'éléments scellés sur les dents et supportent des travées qui reproduisent les dents absentes.",
          "présente la nécessité de l'enlever périodiquement pour vérifier la muqueuse sous-jacente.",
          "nécessitent une mutilation tissulaire"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le bridge inamovible (fixe) est scellé (C) et nécessite la taille des dents piliers (mutilation tissulaire) (E). Les options A et D décrivent les bridges amovo-inamovibles."
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
        explanation: "Le bridge de *courte* portée (BCP) remplace une seule dent (A). Le bridge de *moyenne* portée en remplace deux (C est faux). Il peut être rectiligne (postérieur) ou curviligne (antérieur) (D, E faux)."
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
        explanation: "Le BCP standard (à double encastrement) nécessite deux ancrages (A). Il peut être ancré par des recouvrements partiels comme des onlays (D). Il existe en antérieur et en postérieur (C est faux)."
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
        explanation: "Il remplace deux dents, qu'elles soient adjacentes (A) ou non (B). Il peut donc être rectiligne ou curviligne (C est faux)."
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
        explanation: "A est faux (c'est l'amovo-inamovible). B est faux (il est plus confortable). C est faux (l'hygiène est plus difficile). D est faux (il nécessite une mutilation tissulaire). Toutes les réponses sont fausses."
      },
      {
        questionText: "Le bridge dento implants porté",
        options: [
          "peut provoquer une perte osseuse péri implantaire",
          "peut provoquer une fracture des composants implantaires",
          "peut causer une égression de la dent naturelle",
          "est mieux toléré que le bridge implanto porté",
          "n’est indiqué que lorsque la dent naturelle est intermédiaire entre 2 implants"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Connecter une dent (mobile, desmodonte) à un implant (rigide, ankylosé) est controversé et crée des contraintes. Celles-ci peuvent causer une perte osseuse (A), une fracture de l'implant (B) ou une égression/intrusion de la dent naturelle (C)."
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
        explanation: "Le bridge collé (type Maryland) est une solution conservatrice (D faux) pour des édentements de petite étendue (A). Sa longévité dépend fortement du collage, elle est donc considérée comme moins certaine (B) ou parfois comme une solution provisoire à long terme (C)."
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
        explanation: "Loi de Roy : Plan incisif (forces postéro-antérieures), Plans canins (forces latérales), Plans prémolo-molaires (forces horizontales) (C). La théorie est utile pour les bridges de contention, où les piliers doivent être dans *plusieurs* plans (D)."
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
        explanation: "Le bridge à simple encastrement (un seul pilier ou piliers d'un seul côté) est appelé Cantilever (A). Il est généralement contre-indiqué car il génère d'importantes forces de torsion (C) et de renversement (D) sur les piliers."
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
        explanation: "Un bridge polygonal peut être partiel (ex: forme d'arc, A) ou total (arcade complète, C). Il s'inscrit par définition dans plusieurs plans de Roy (D, E)."
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
        explanation: "La résistance dépend de la rigidité (module d'Young) de l'alliage (A), de l'épaisseur de la travée (B) et de sa longueur (étendue) (C). Les alliages non précieux (Ni-Cr, Co-Cr) sont plus rigides et donc augmentent la résistance (E)."
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
        explanation: "Un bridge polygonal (sur plusieurs plans) peut restaurer un édentement partiel (ex: secteur antérieur) (B) ou une arcade complète (C). Il peut aussi être conçu comme amovo-inamovible (D)."
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
        explanation: "La fonction première de l'intermédiaire (pontique) est de remplacer la ou les dents absentes (D). Il doit être en occlusion (A faux), restaurer fonction et esthétique (B faux), et peut être à distance de la crête (contra-muqueux) (C faux)."
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
        explanation: "La table occlusale (largeur V-L) de l'intermédiaire est souvent réduite (sous-dimensionnée) pour diminuer l'intensité des forces transmises aux piliers. Le contact occlusal doit exister (D faux)."
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
        explanation: "C'est l'espace situé sous le point de contact (A). Il doit être ouvert (dégagé) (C) pour permettre le passage des brossettes interdentaires et assurer un nettoyage efficace (D)."
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
        explanation: "La pontique ovoïde (contra-muqueux) est indiquée au secteur postérieur (C). Elle établit un contact ponctiforme/minime (D) et dégage largement les embrasures (A faux), ce qui autorise une bonne hygiène (B)."
      },
      {
        questionText: "Plus la travée d'un bridge est courte : (1- Plus les forces de flexion qui agissent sur elle sont grandes 2- Plus les forces de flexion sont faibles 3- Plus les dents piliers subissent des pressions 4- Moins les dents piliers subissent des pressions 5- Toutes les réponses sont fausses)",
        options: [
          "(1,3)",
          "(2,4)",
          "(5)",
          "(2,3)",
          "(1,4)"
        ],
        correctOptionIndexes: [1],
        explanation: "La flexion est proportionnelle au cube de la longueur. Si la longueur diminue, la flexion diminue (2). Moins de flexion signifie moins de stress et de pressions sur les dents piliers (4)."
      },
      {
        questionText: "l’intermediaire Intra-muqueux:",
        options: [
          "Ne permet pas de restaurer l'esthétique",
          "Est toléré par les crêtes résiduelles",
          "Est contre-indique dans le secteur incisif",
          "Est indiqué dans la région molaire mandibulaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "L'intermédiaire intra-muqueux (pontique ovoïde esthétique) est conçu pour les secteurs antérieurs à haute demande esthétique (A, C, D sont faux). Il est bien toléré s'il est bien poli (B est vrai, mais la réponse E (85%) est plébiscitée)."
      },
      {
        questionText: "Les intermédiaires de bridges sont les dents artificielles d’une prothèse fixée :",
        options: [
          "Qui remplacent les dents naturelles délabrées",
          "Qui restaurent les fonctions des dents naturelles délabrées",
          "Qui restaurent l'esthétiques des dents naturelles délabrées",
          "Qui doivent s'intégrer parfaitement sur le plan biologique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Ils remplacent les dents *absentes* (A, B, C sont faux). Leur conception (contact muqueux, embrasures) est cruciale pour l'intégration biologique et la maintenabilité (D)."
      },
      {
        questionText: "La résistance d'une travée est : (1- proportionnelle à sa largeur 2- inversement proportionnelle à sa largeur 3- proportionnelle au carré de son épaisseur 4- inversement proportionnelle à sa longueur 5- proportionnelle à sa longueur)",
        options: [
          "A(1,2,3)",
          "B(2,3,4)",
          "C (1.3.4)",
          "D(3,4,5)",
          "E(1.4.5)"
        ],
        correctOptionIndexes: [2],
        explanation: "Formule de la résistance (R) : R = (largeur * épaisseur^2) / longueur. Donc : (1) proportionnelle à la largeur, (3) proportionnelle au carré de l'épaisseur, et (4) inversement proportionnelle à la longueur."
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
        explanation: "Des contacts occlusaux corrects sur les pontiques restaurent l'efficacité masticatoire (A) et maintiennent la stabilité de l'occlusion (B). Les efforts sont transmis au parodonte *profond* (C est faux)."
      },
      {
        questionText: "La morphologie de la pontique:",
        options: [
          "est dictée par les mouvements fonctionnels de la mandibule",
          "dépend de la morphologie des dents antagonistes",
          "dépend de la morphologie des dents adjacentes",
          "doit établie un large contact travée ancrage tout en dégageant l'embrasure",
          "est de profile concave au niveau des faces linguales pour faciliter le nettoyage"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La morphologie occlusale est dictée par les mouvements mandibulaires (A) et les dents antagonistes (B). Le contact avec les ancrages (dents adjacentes) doit être large mais dégager l'embrasure (C, D). Les profils doivent être *convexes* pour l'hygiène (E faux)."
      },
      {
        questionText: "L’intermédiaire de type intra-muqueux",
        options: [
          "est systématiquement conseillé car le plus esthétique",
          "parfaitement compatible avec l'hygiène",
          "provoque une rétention bactérienne",
          "entraine souvent une inflammation des tissus gingivaux",
          "indiqué dans le cas des crêtes très résorbées"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Ce type de pontique, bien qu'esthétique (donnant l'illusion d'une dent qui sort), est très difficile, voire impossible, à entretenir (B faux). Il provoque une rétention de plaque (C) et une inflammation gingivale (D)."
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
        explanation: "Il donne un bon résultat esthétique (C) mais est très mal toléré (A) car il est impossible à nettoyer (B faux) et provoque une inflammation. Il est contre-indiqué (D faux)."
      },
      {
        questionText: "L'embrasure d'un bridge :",
        options: [
          "Est situé entre le tiers cervical et le tiers occlusal des faces proximales",
          "Doit être hermétiquement fermée",
          "Doit permettre un nettoyage efficace",
          "Est absente au niveau des incisives",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "L'embrasure gingivale (sous le point de contact) doit être conçue pour permettre un nettoyage efficace (ex: passage de brossettes)."
      },
      {
        questionText: "Une pontique ovoïde :",
        options: [
          "Ne permet pas de dégager les embrasures",
          "N'autorise pas une bonne hygiène",
          "Est indiquée principalement pour le secteur esthétiques",
          "Etablie une large surface de contact avec la crête",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "La pontique ovoïde (contra-muqueux) est indiquée au *postérieur* (C faux), dégage les embrasures (A faux), autorise une bonne hygiène (B faux) et a un contact *minime* (ponctiforme) (D faux)."
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
        explanation: "La résistance (R) est proportionnelle à la largeur (l), proportionnelle au carré de l'épaisseur (e²) et inversement proportionnelle à la longueur (L). La formule est R = l * e²/L. (D est faux)."
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
        explanation: "Toutes ces exigences (esthétique, occlusion, fonction, auto-nettoyage/stimulation) sont des objectifs clés dans la conception d'un pontique."
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
        explanation: "Face occlusale -> antagonistes (C faux). Faces proximales -> ancrages/dents supports (D faux). Face gingivale -> crête (A faux). Faces V/L -> joues/langue (B faux)."
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
        explanation: "Le bilan parodontal est indispensable (A, D faux) et doit être clinique (mobilité, sondage) et radiologique (E) pour évaluer si le parodonte peut supporter la prothèse (B)."
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
        explanation: "L'accès à la limite (éviction gingivale) se fait juste avant l'empreinte (A) par des moyens mécaniques (cordonnets, provisoire) (C, D) ou chimio-mécaniques (pâtes) ou chirurgicaux (B faux)."
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
        explanation: "Les méthodes les moins invasives sont la déflexion mécanique (cordonnets) (C) ou les techniques chimio-mécaniques (A) comme les pâtes (Expasyl) (D), particulièrement indiquées si le parodonte est fin."
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
          "essentiellement de ses rapports en occlusion en relation centrée",
          "de ses rapports en occlusion d'intercuspidation existante",
          "principalement de l'harmonie des rapports occlusaux inter arcades en statique et dynamique",
          "particulièrement de la dysharmonie des rapports occlusaux inter arcades non corrigée",
          "de la participation de cette restauration fixe à l'articulé du patient"
        ],
        correctOptionIndexes: [2],
        explanation: "La réussite d'une restauration prothétique conjointe dépend du maintien de l'harmonie des rapports occlusaux en statique et dynamique."
      },
      {
        questionText: "Les points supports de l'occlusion du premier groupe :",
        options: [
          "sont les plus importantes pour assurer la stabilité de l'occlusion en occlusion en relation centrée",
          "sont les plus importantes pour assurer la stabilité de l'occlusion en occlusion uniquement en intercuspidation maximale",
          "parmi elles on ne compte pas la cuspide et la fosse des molaires dites clef de l'occlusion",
          "s'articulent partiellement avec les crêtes marginales mandibulaires et maxillaires",
          "s'articulent principalement avec les crêtes marginales mandibulaires et maxillaires"
        ],
        correctOptionIndexes: [4],
        explanation: "Les points supports du premier groupe (cuspides V mandibulaires) sont les plus importants pour la stabilité de la PIM (B est faux) et s'articulent *principalement* avec les crêtes marginales maxillaires (E)."
      },
      {
        questionText: "La table occlusale rebasée est :",
        options: [
          "indiquée pour l'enregistrement d'une intercuspidation maximale",
          "indiquée pour l'enregistrement de l'articulé en latéralité",
          "une cire d'occlusion sectorielle",
          "une maquette d'occlusion",
          "une table incisive de guidance"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "C'est une technique d'enregistrement de l'OIM (PIM) (A est faux) qui est sectorielle (C) et utilise un matériau rigide comme la cire ou la résine (D)."
      }
    ]
  },
  {
    title: "Le Scellement",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Le scellement :",
        options: [
          "N'a pas à confirmer les relations d'occlusion validées auparavant",
          "Est une étape de désagrégation de la pièce prothétique",
          "Permet la stabilisation et le calage de l'élément prothétique sur Ia préparation",
          "Fixe la restauration en infiltrant les irrégularités de l'intrados et de la face de la préparation",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le scellement (conventionnel) stabilise la prothèse (C) en comblant l'espace et en s'infiltrant dans les micro-irrégularités (rétention macro/micro-mécanique) (D)."
      },
      {
        questionText: "Les matériaux de scellements doivent :",
        options: [
          "Avoir un temps de travail court",
          "Avoir une Haute viscosité",
          "Etre biocompatible",
          "Avoir un temps de prise long",
          "Avoir une résistance élevée a la déformation plastique"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Qualités requises : Biocompatibilité (C), Résistance (E), Temps de travail *long* (A faux), Temps de prise *court* (D faux), Viscosité *faible* (B faux)."
      },
      {
        questionText: "Les ciments résines :",
        options: [
          "Sont des ciments organiques",
          "Sont des ciments minéraux a liants organique",
          "Sont indiqués pour facettes céramique et bridges colles",
          "Sont indiqués comme fond protecteur",
          "Libèrent du fluor"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les ciments résines sont purement organiques (A). Ils sont utilisés pour le *collage* (adhésion forte), ce qui est nécessaire pour les facettes et les bridges collés (C)."
      },
      {
        questionText: "Le descellement est indiqué en cas de:",
        options: [
          "parodontite stabilisée",
          "complication corono-radiculaire",
          "perte ou décoloration de l'élément cosmétique",
          "complications parodontales",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le descellement (dépose) est indiqué en cas d'échec : complications sous la couronne (B), complications parodontales (D), ou échec esthétique/matériau (C)."
      },
      {
        questionText: "Les ciments de scellements peuvent être classés selon leur composition chimique en :",
        options: [
          "ciments de scellement provisoire",
          "ciments de scellement permanent",
          "ciments de scellements minéraux",
          "ciments de scellements minéraux à liant organique et ciments organiques",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "La classification chimique est : 1. Minéraux (ex: Oxyphosphate de Zinc), 2. Minéraux à liant organique (ex: OZE, Verres Ionomères), 3. Organiques (ex: Ciments Résines)."
      },
      {
        questionText: "Les ciments verre ionomères hybrides sont:",
        options: [
          "considérés comme étant des colles",
          "des ciments organiques purs",
          "des ciments verre ionomères modifiés par adjonction de résine",
          "des ciments minéraux",
          "des ciments minéraux à liant organique"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Les CVIMAR (ou Hybrides) sont dans la famille des ciments minéraux à liant organique (E), et sont spécifiquement des Verres Ionomères modifiés par l'ajout de résine (C)."
      },
      {
        questionText: "Le scellement :",
        options: [
          "Permet de stabiliser la prothèse conjointe sur son support",
          "Assure l'herméticité du joint dento – prothetique",
          "Assure la rétention",
          "Fixe la prothèse conjointe par un mécanisme d'adhésion micro – mécanique",
          "Fixe la prothèse conjointe par un mécanisme d'adhésion macro- mécanique"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Le scellement (au sens large) a pour rôles de stabiliser (A), assurer l'étanchéité (B) et la rétention (C). Ceci est obtenu par adhésion macro-mécanique (scellement conventionnel) (E) ou micro-mécanique (collage) (D)."
      },
      {
        questionText: "Les ciments minéraux :",
        options: [
          "Composes systématiquement d'eugénol",
          "Peuvent être utilises sur dents vivantes",
          "N'adhèrent pas a la structure dentaire",
          "Ne possèdent pas une épaisseur fine du film",
          "Possèdent une grande dureté"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Exemple : Oxyphosphate de Zinc. Il ne contient pas d'eugénol (A faux). Il peut être utilisé sur dents vivantes (B). Il n'a pas d'adhésion chimique (C). Il est très dur et rigide (E)."
      },
      {
        questionText: "Les ciments minéraux a liant organique regroupent :",
        options: [
          "Oxyphosphate de zinc, oxyde de zinc eugénol",
          "Oxyde de zinc eugénol, oxyphosphate de zinc et verres ionomeres",
          "Oxyphosphate de zinc, verre ionomere et verre ionomere hybride",
          "Oxyde de zinc eugénol, verre ionomere et verre ionomere hybride",
          "Oxyde de zinc eugénol, verre ionomere et ciment résine"
        ],
        correctOptionIndexes: [3],
        explanation: "Ce groupe comprend l'Oxyde de Zinc Eugénol (OZE), les Verres Ionomères (VI), et les Verres Ionomères Hybrides (CVIMAR). L'Oxyphosphate est minéral pur, les Ciments Résines sont organiques."
      },
      {
        questionText: "Les ciments résines : (1- Sont des ciments organiques 2- Sont des ciments minéraux à liants organique 3- Sont indiqués pour facettes céramiques et bridges collés 4- Sont indiqués comme fond protecteur 5- Libèrent du fluor)",
        options: [
          "(1,2,3)",
          "(2,3,4)",
          "(1,3,4)",
          "(1,3)",
          "(2,3)"
        ],
        correctOptionIndexes: [3],
        explanation: "(1) Ils sont organiques (vrai). (2) Faux (ce sont les VI/OZE). (3) Ils sont indiqués pour le collage (vrai). (4) Faux (ce sont les VI). (5) Faux (ce sont les VI)."
      },
      {
        questionText: "La propriété recherchée pour les matériaux de scellement est :",
        options: [
          "La viscosité élevée",
          "L'épaisseur du film supérieure a 25 u",
          "Le temps de travail court",
          "Le temps de prise long",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "On recherche : Viscosité *faible* (A faux), épaisseur *inférieure* à 25µ (B faux), temps de travail *long* (C faux), temps de prise *court* (D faux). Toutes les propositions sont fausses."
      },
      {
        questionText: "Les ciments minéraux a liant organique sont :",
        options: [
          "L'Oxyphosphate de zinc",
          "Les ciments verre ionomeres hybrides",
          "Les ciments résines",
          "Les verres ionomeres",
          "L'oxyde de zinc eugénol"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Ce groupe inclut les OZE (E), les VI (D) et les VI Hybrides (B). L'Oxyphosphate (A) est minéral pur. Les Ciments Résines (C) sont organiques."
      },
      {
        questionText: "Le descellement :",
        options: [
          "Ne peut pas être réalisé mécaniquement",
          "Peut être réalisé avec des vibrations ultrasoniques",
          "Peut-être indique en cas de surocclusion",
          "Nest pas indique en cas de complications parodontales",
          "Est indiqué en cas de perte de la suprastructure cosmétique"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Le descellement (dépose) peut se faire par ultrasons (B). Il est indiqué en cas de surocclusion (C) ou d'échec esthétique (E). Il est *indiqué* en cas de complications parodontales (D est faux)."
      },
      {
        questionText: "Les ciments de scellement provisoires ou temporaires sont :",
        options: [
          "ciments oxyde de zinc eugénol sans agressivité pulpaire.",
          "Les ciments oxyde de zinc amélioré ayant une meilleur résistance à la compression et à la traction",
          "Les ciments polycarboxylate qui ont un effet calmant sur la pulpe, si ils contiennent de l'oxyde de zinc eugenol.",
          "Les ciments polycarboxylate présentent une légère acidité, ils sont irritant pour la pulpe.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'OZE a un pH neutre (7) et n'est pas agressif (A). Les polycarboxylates peuvent avoir un effet calmant s'ils contiennent de l'OZE (C). Les OZE améliorés (B) sont des ciments permanents. Les polycarboxylates sont peu irritants (D faux)."
      },
      {
        questionText: "Les ciments de scellement définitifs sont :",
        options: [
          "Les ciments phosphate de zinc avec pouvoir adhésif.",
          "Les ciments verre ionomère assurant une adhésion physico chimique comparable à celle des agents de collage.",
          "Les ciments verre ionomère CVI très irritant pour la pulpe.",
          "Les ciments verre ionomère hybrides, assurant une adhésion chimique et micro mécanique.",
          "Les CVIMAR ayant une propriété mécanique inférieure à celle des CVI conventionnels."
        ],
        correctOptionIndexes: [3],
        explanation: "Les CVIMAR (hybrides) offrent une adhésion chimique (verre ionomère) et micromécanique (résine) (D). Le phosphate de zinc n'est pas adhésif (A faux). L'adhésion des CVI est faible (B faux) et ils sont peu irritants (C faux). Les CVIMAR sont *plus* résistants (E faux)."
      }
    ]
  },
  {
    title: "Les Empreintes et leur Traitements",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Les élastomères type silicone sont utilisés :",
        options: [
          "Pour comprimer un tissu avant l'empreinte",
          "Pour décharger un élément anatomique incompressible",
          "Pour enregistrer la finesse des détails",
          "Pour absorber la salive",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Les silicones (polyéthers, PVS) sont des matériaux de haute précision, capables d'enregistrer des détails très fins, ce qui est essentiel en prothèse fixée."
      },
      {
        questionText: "Les matériaux a empreinte utilises en prothèse fixée ont :",
        options: [
          "Une faible stabilité dimensionnelle",
          "Un comportement plastique",
          "Plusieurs viscosités",
          "Un temps de travail court et un temps de prise buccal long",
          "Un faible pouvoir mouillant"
        ],
        correctOptionIndexes: [2],
        explanation: "Les élastomères (silicones, polyéthers) existent en plusieurs viscosités (Putty, Heavy, Regular, Light) (C) pour s'adapter à différentes techniques (ex: double mélange, wash-technique)."
      },
      {
        questionText: "Dans Ia Wash Technique nous devons :",
        options: [
          "Rebaser la totalité de la pré-empreinte",
          "Utiliser deux viscosités ayant le même état de plasticité",
          "Réaliser des évents d'évacuation",
          "Laisser le cordonnet déflecteur pendant la première empreinte avec le heavy",
          "Nécessite un porte empreinte individuel espace rigide"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La 'Wash Technique' (ou rebasage) nécessite d'aménager l'empreinte primaire (Putty) en créant des évents d'évacuation (C) pour le matériau fluide (Light). Le premier cordonnet est laissé en place lors de la 1ère empreinte (D)."
      },
      {
        questionText: "Le vernis d'espacement :",
        options: [
          "Est appliqué sur toute Ia surface du modèle positif unitaire",
          "Existe sous plusieurs couleurs et plusieurs épaisseurs",
          "Permet d'isoler la couronne sculptée en cire du modèle positif unitaire",
          "Aménage l'espace pour le ciment de scellement",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le vernis (ex: 20-40 µm) (B) est appliqué sur le die (modèle unitaire) *sauf* près de la limite cervicale, pour créer l'espace nécessaire au futur ciment de scellement (D)."
      },
      {
        questionText: "En prothèse conjointe, la Wash technique est : (1- Une technique d'empreinte en un temps 2- Une technique d'empreinte nécessitant une chape en résine 3- Une technique d'empreinte en 2 temps 4- Une technique nécessitant trois types de matériaux à empreinte 5- Une technique nécessitant deux types de matériaux à empreinte)",
        options: [
          "(1,5)",
          "(2,3)",
          "(1,4)",
          "(3,5)",
          "(3)"
        ],
        correctOptionIndexes: [3],
        explanation: "La Wash Technique (ou rebasage) se fait en 2 temps (3) : un premier temps avec un matériau haute viscosité (Putty), et un second temps avec un matériau basse viscosité (Light). Elle utilise donc 2 matériaux (5)."
      },
      {
        questionText: "Le fractionnement du modèle de travail :",
        options: [
          "Peut être de première intention",
          "Doit être de seconde intention",
          "Utilise un système Pindex ou Dilock",
          "Ne nécessite pas des dowel pins",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le fractionnement (pour créer des 'dies' amovibles) peut être de 1ère intention (Dowel pins placés avant coulée) (A) ou de 2nde intention (ex: Pindex, Di-lock, où les pins sont placés après la coulée) (C)."
      },
      {
        questionText: "La décontamination d’une empreinte aux silicones réticulant par condensation se fait :",
        options: [
          "Immédiatement après désinsertion de la cavité orale",
          "Par pulvérisation de solution alcoolique a 90°",
          "Par immersion car c'est un matériau hydrophobe",
          "Par immersion dans Ia Glutaraldehyde a 2%",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'empreinte doit être décontaminée immédiatement (A). Les silicones C sont hydrophobes (C) et supportent bien l'immersion dans une solution désinfectante comme la Glutaraldéhyde 2% (D)."
      },
      {
        questionText: "Le matériau hydro colloïde réversible :",
        options: [
          "Présente une grande fluidité",
          "Présente une hydrophilie réduite",
          "Se caractérise par une faible résistance aux contraintes",
          "Ne nécessite pas de traitement immédiat de I ‘empreinte",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les hydrocolloïdes (ex: Agar-agar) sont très fluides (A), très hydrophiles (B faux), mais ont une faible résistance mécanique (C) et une très mauvaise stabilité dimensionnelle (coulée immédiate obligatoire) (D faux)."
      },
      {
        questionText: "Les matériaux « polyvinyl-siloxanes » :",
        options: [
          "Sont des polyéthers",
          "Sont des élastomères",
          "Sont des silicones par réaction d'addition",
          "Sont des silicones par réaction de condensation",
          "Sont plus hydrophiles que les hydro colloïdes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les Polyvinyl-siloxanes (PVS) sont des élastomères (B) de la famille des silicones, qui réticulent par réaction d'addition (C). Les silicones C réticulent par condensation (D faux)."
      },
      {
        questionText: "La technique dite « double mélange » :",
        options: [
          "Est une technique d'empreinte en deux temps",
          "Associe deux matériaux de viscosités rapprochées",
          "Est indiquée uniquement pour des restaurations prothétiques plurales",
          "Est une technique d'empreinte monophasée",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Le 'double mélange' (ou 'simultanée') est une technique en *un temps* (A faux) qui utilise deux viscosités (ex: Putty + Light) ou des viscosités *rapprochées* (ex: Heavy + Light) (B). Elle n'est pas monophasée (D faux)."
      },
      {
        questionText: "La pâte appelée EXPASYL :",
        options: [
          "Doit être associée a la technique d'éviction gingivale par curetage rotatif",
          "Permet la déflexion gingivale par une action mécanique",
          "Permet la déflexion gingivale par une action chimique",
          "N'entraine pas une action hémostatique",
          "Est composée de chlorure d'aluminium et de kaolin"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Expasyl est une pâte d'éviction mécano-chimique. Elle contient du Kaolin (action mécanique de compression) (B) et du chlorure d'aluminium (action chimique astringente et hémostatique) (C, E). (D est faux)."
      },
      {
        questionText: "La technique d'empreinte du double mélange (1- Est une technique en deux temps 2- Est une technique avec guidage unitaire 3- Est une technique sans guidage unitaire 4- Est une technique en 1 temps 5- Toutes les réponses sont fausses)",
        options: [
          "(1,3)",
          "(2,4)",
          "(3,4)",
          "(1,2)",
          "(5)"
        ],
        correctOptionIndexes: [2],
        explanation: "La technique du double mélange est une technique en *un temps* (4). Elle se fait sans guidage unitaire (pas de chape) (3). (Ne pas confondre avec la Wash Technique qui est en 2 temps)."
      },
      {
        questionText: "le matériau a empreinte « polyéther » :",
        options: [
          "Présente une mauvaise stabilité dimensionnelle",
          "Est un matériau hydrophile",
          "Présente une dureté élevée",
          "Est un élastomère silicone",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les polyéthers sont des élastomères (D faux) connus pour leur excellente stabilité dimensionnelle (A faux), leur hydrophilie naturelle (B) et leur grande rigidité/dureté (C)."
      },
      {
        questionText: "La déflexion gingivale peut être assurée par :",
        options: [
          "Un simple cordonnet",
          "Un double cordonnet",
          "L'application d'EXPASYL",
          "La prothèse provisoire",
          "Le curetage rotatif"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Toutes ces méthodes (sauf E) sont des techniques de déflexion (temporaires) : simple/double cordonnet (A, B), pâte (C), ou conditionnement par la provisoire (D). Le curetage rotatif (E) est une technique d'éviction (définitive)."
      },
      {
        questionText: "Pour obtenir des MPU amovibles intégrés dans un modèle :",
        options: [
          "On utilise systématiquement des dowel pins",
          "On fait appel a un système de forage des puits",
          "La mise en place des dowel pins se fait systématiquement avant la coulée de l'empreinte",
          "La mise en place des dowel pins se fait systématiquement après la coulée de l'empreinte",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Pour obtenir des MPU (Modèles Positifs Unitaires) amovibles, on utilise un système de pins (A est vrai, mais pas 'systématiquement'). Le système 'Pindex' (le plus courant) utilise un forage *après* la coulée (B). C et D sont faux car les deux techniques (avant/après) existent."
      },
      {
        questionText: "La coulée de l'empreinte par le système de monobloc :",
        options: [
          "Ne nécessite pas des dowels pins",
          "Permet d'obtenir un seul MPU",
          "Les MPU sont réalisés après la coulée",
          "Le socle n'est pas fractionné",
          "Est une coulée par un système d'emboitage démontable"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le système monobloc (ou Di-Lock) (E) consiste à couler l'empreinte, puis à forer et placer les pins (C). Le socle lui-même n'est pas scié (D)."
      },
      {
        questionText: "La technique d'empreinte dite Monophasé :",
        options: [
          "Est une technique qui ne nécessite pas une technique d'accès a la limite cervicale",
          "Utilise deux matériaux de viscosités différentes préparés en un seul temps",
          "Est une technique d'empreinte avec guidage unitaire",
          "Toutes les réponses sont fausses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "La technique monophase utilise *un seul* matériau (viscosité moyenne) en *un seul temps* (B est faux). Elle nécessite comme les autres un accès à la limite (A est faux). Toutes les propositions sont fausses."
      },
      {
        questionText: "L'enregistrement des limites intra-sulculaires exige :",
        options: [
          "Une éviction gingivale par la technique des deux cordonnets",
          "Une déflexion gingivale par élimination de la collerette gingivale",
          "Une éviction gingivale par la technique d'un seul cordonnet",
          "L'utilisation d'une pate Expasyl face a un parodonte fin",
          "Une éviction par curetage rotatif"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'enregistrement de ces limites nécessite une éviction/déflexion. La technique à deux cordonnets (A) est très efficace. Les pâtes (Expasyl) (D) sont aussi une option, surtout si le parodonte est fin et fragile."
      },
      {
        questionText: "Parmi Les élastomères de synthèse nous avons :",
        options: [
          "Les polyéthers, disponibles en plusieurs viscosités, avec excellente stabilité dimensionnelle.",
          "Les polysulfures utilisés uniquement pour les préparations unitaires ou corono-radiculaires",
          "Les silicones réticulant par condensation avec une très bonne stabilité dimensionnelle",
          "Les silicones réticulant par addition ayant une polymérisation ne générant aucun produit de réaction",
          "Les silicones réticulant par addition ayant une polymérisation avec élimination de petites molécules d'eau"
        ],
        correctOptionIndexes: [2],
        explanation: "Polyéthers : une seule viscosité (A faux). Silicones C (condensation) : mauvaise stabilité (C faux). Silicones A (addition) : pas de produit de réaction (D vrai, E faux). [Note: La réponse C est sélectionnée malgré l'explication, reflétant une incohérence dans la source]."
      },
      {
        questionText: "La technique d'empreinte par double mélange est une technique:",
        options: [
          "compressive indiquée pour les préparations Intrasulculaires",
          "qui peut être indiquée pour préparations périphériques et/ou radiculaires.",
          "effectuée en un seul temps avec 2 matériaux de même nature mais de viscosité rapprochée.",
          "effectuée en 2 temps avec 2 matériaux de même nature et de même consistance",
          "effectuer en 1 temps avec 2 matériaux de même nature et de même consistance"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Technique du double mélange (1 temps) utilise 2 viscosités rapprochées (C). Elle est peu compressive (A faux) et indiquée pour les préparations périphériques et radiculaires (B)."
      },
      {
        questionText: "L'empreinte du logement canalaire peut être effectuée par utilisation de :",
        options: [
          "la méthode en double mélange de silicones à l'aide de tenons normalisés ou non",
          "de la résine calcinable sans tuteur support de matériau",
          "de la technique indirecte nécessitant Futilisation de tuteur métallique de surcoulée sous dimensionné.",
          "de la technique indirecte avec tenon calcinable de faible dimension enrobé de matériau à empreinte.",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Technique indirecte : Utilise une empreinte globale (ex: double mélange) avec des tuteurs (normalisés ou non) (A). Technique directe : Utilise une résine calcinable avec un tuteur (B faux)."
      },
      {
        questionText: "Parmi ces matériaux, lequel est compatible avec une désinfection par Immersion dans du glutaraldehyde à 2% ? :",
        options: [
          "Hydrocolloides",
          "Silicones de type A",
          "Polyéthers",
          "Silicones de type C",
          "Alginate"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les matériaux hydrophobes (Silicones A et C) supportent l'immersion. Les matériaux hydrophiles (Hydrocolloïdes, Polyéthers, Alginate) ne doivent être que pulvérisés."
      },
      {
        questionText: "résine époxy présente :",
        options: [
          "une faible précision des détails",
          "une incompatibilité avec les polysulfures",
          "un temps de prise court (<1 heure)",
          "une excellente résistance à l'abrasion",
          "une compatibilité avec les élastomères de synthèse."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Résine époxy : Très bonne précision (A faux), compatible avec les élastomères (B faux, E vrai), temps de prise long (3-4h) (C faux), et excellente résistance à l'abrasion (D)."
      },
      {
        questionText: "L'enregistrement des limites intra-sulculaires exige :",
        options: [
          "Une éviction gingivale par la technique des deux cordonnets",
          "Une déflexion gingivale par élimination de la collerette gingivale",
          "Une éviction gingivale par la technique d'un seul cordonnet",
          "L'utilisation d'une pate Expasyl face a un parodonte fin",
          "Une éviction par curetage rotatif"
        ],
        correctOptionIndexes: [4],
        explanation: "L'éviction par curetage rotatif (gingivectomie) est une technique chirurgicale d'accès à la limite. Les autres (A, C, D) sont des techniques de déflexion temporaire."
      },
      {
        questionText: "En prothèse fixe, la technique d'empreinte dite des coffrages métallo-résineux est une technique : (1- Sans guidage unitaire. 2- Avec guidage unitaire. 3- En un temps opératoire. 4- Qui nécessite l'utilisation d'un seul matériau à empreinte. 5- En deux temps opératoires.)",
        options: [
          "(1-3)",
          "(2-4)",
          "(2-5)",
          "(1-5)",
          "(3)"
        ],
        correctOptionIndexes: [2],
        explanation: "Cette technique utilise un guidage unitaire (2) et se déroule en deux temps (5) : d'abord la création des coffrages, puis l'empreinte globale."
      },
      {
        questionText: "En prothèse fixe, la technique dite des coffrages métallo-résineux est une technique d'empreinte : (1- Numérique. 2- Sans guidage unitaire. 3- Des coiffes en résine. 4- En trois temps. 5- Toutes les réponses sont fausses.)",
        options: [
          "(1-2)",
          "(3-5)",
          "(2-4)",
          "(1-3)",
          "(5)"
        ],
        correctOptionIndexes: [4],
        explanation: "C'est une technique physique (1 faux), avec guidage unitaire (2 faux), qui utilise des coiffes (3 vrai) et se fait en deux temps (4 faux). Puisque la (3) est vraie, la (5) 'Toutes fausses' est techniquement incorrecte, mais plébiscitée (96%)."
      },
      {
        questionText: "En prothèse conjointe, la technique du double mélange : (1- Nécessite l'utilisation de bagues ajustées en résine. 2- Nécessite l'utilisation de bagues en cuivre. 3- Est une technique d'empreinte avec guidage unitaire. 4- Est une technique d'empreinte en deux temps. 5- Toutes les réponses sont fausses.)",
        options: [
          "(1-2)",
          "(2-4)",
          "(1-3)",
          "(2-3)",
          "(5)"
        ],
        correctOptionIndexes: [4],
        explanation: "Le double mélange n'utilise pas de bagues (1, 2 faux), est sans guidage unitaire (3 faux) et se fait en *un temps* (4 faux). Donc, toutes les réponses sont fausses (5)."
      },
      {
        questionText: "Les techniques d'accès aux limites cervicales peuvent être :",
        options: [
          "Médiate à l'aide d'un isomoulage.",
          "Immédiate à l'aide d'une pate déflectrice, astringente et hémostatique.",
          "Médiate à l'aide du double cordonnet déflecteur.",
          "Médiate a l'aide d'un simple cordonnet.",
          "La rétraction gingivale est irréversible."
        ],
        correctOptionIndexes: [1],
        explanation: "Les pâtes (Expasyl) sont une technique immédiate (B). Les cordonnets (C, D) sont aussi immédiats. La déflexion est réversible (E faux)."
      },
      {
        questionText: "Parmi ces produits lesquels sont utilisés pour la désinfection des empreintes:",
        options: [
          "L'alcool",
          "L’hypochlorite",
          "L’hydroxyde de calcium",
          "Le glutar-aldehyde",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les désinfectants standards pour les empreintes sont l'hypochlorite de sodium et le glutaraldéhyde."
      },
      {
        questionText: "Parmi les techniques d'accès aux limites cervicales par déflexion on retrouve :",
        options: [
          "Les solutions chimiques",
          "L'électro chirurgie",
          "Le curetage rotatif",
          "La couronne provisoire",
          "Le cordonnet"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "La *déflexion* (écartement temporaire) inclut les cordonnets (E), la provisoire (D) et les solutions chimiques (astringents) (A). L'électrochirurgie (B) et le curetage (C) sont des techniques d'éviction (chirurgicales)."
      },
      {
        questionText: "La wash technique:",
        options: [
          "Correspond à une prise d'empreinte en 2 temps et avec 2 matériaux de viscosité",
          "Utilise un élastomère de haute viscosité ; une fois durci; rebase par un élastomère de faible viscosité",
          "Utilise en même temps 2 élastomères de haute et de basse viscosité",
          "Ne nécessite pas une déflexion gingivale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La Wash Technique est une technique en 2 temps (A) : une première empreinte au matériau haute viscosité (Putty), qui est ensuite rebasée avec un matériau faible viscosité (Light) (B). (C) décrit le double mélange."
      },
      {
        questionText: "La pâte appelée EXPASYL :",
        options: [
          "C'est matériau hémostatique",
          "Est un matériau astringent",
          "Possède une action mécanique",
          "Possède une action chimique",
          "Entraine l'éviction gingivale pour l'ouverture du sulcus"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Expasyl est mécano-chimique : Kaolin (mécanique) (C) + Chlorure d'aluminium (chimique) (D). Le chlorure d'aluminium est astringent (B) et hémostatique (A)."
      },
      {
        questionText: "Le système d'emboitage démontable appelé DI-LOK :",
        options: [
          "Réalise des MPU avant la coulée de I ‘empreinte",
          "Obtient d'abord un modèle monobloc meule de façon ce qu'il puisse être introduit dans le moule",
          "Réalise les MPU en fracturant le socle du modèle",
          "Permet de reconstituer l'ensemble des MPU dans le moule prise grâce aux dentelures gravées sur sa face interne",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le système Di-Lok (monobloc) consiste à couler un modèle monobloc (B), puis à le fracturer (C) pour séparer les MPU. Le moule en plastique avec ses dentelures permet de repositionner précisément les MPU (D)."
      }
    ]
  },
  {
    title: "Les Techniques au Laboratoire",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "Lors de la polymérisation ou la cuisson de la résine : (1- Les moufles sont placés dans l'eau bouillante. 2- Les moufles sont placés dans l'eau tiède 3- Les moufles sont placés dans l'eau froide. 4- La polymérisation permet d'éliminer la cire des maquettes prothétiques. 5- Toutes les réponses sont fausses)",
        options: [
          "(1)",
          "(3,4)",
          "(2,4)",
          "(3)",
          "(5)"
        ],
        correctOptionIndexes: [3],
        explanation: "(3) La polymérisation à chaud de la résine doit commencer avec le moufle dans l'eau *froide*, puis la température est augmentée progressivement. (4) L'élimination de la cire (ébouillantage) se fait *avant* la polymérisation."
      },
      {
        questionText: "Le pré-chauffage du cylindre :",
        options: [
          "Permet la fusion de l'alliage",
          "Précède l'étape de la coulée",
          "Permet d'éliminer la cire calcinable",
          "Prépare le cylindre à recevoir le métal au moment de la coulée",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le pré-chauffage du cylindre (contenant la maquette en cire et le revêtement) se fait juste avant la coulée (B). Il a deux rôles : éliminer la cire par combustion (C) et amener le cylindre à la bonne température (dilatation) pour recevoir le métal en fusion (D)."
      },
      {
        questionText: "La stabilisation dans le cycle de cuisson d'une céramique :",
        options: [
          "Permet d'évacuer l'excès humide dans la pate",
          "Permet une agglomération de la céramique",
          "Permet de comprimer Ia masse de céramique",
          "Permet d'éliminer les et les colorants organiques",
          "Sa pratique a température modérée"
        ],
        correctOptionIndexes: [2],
        explanation: "La stabilisation (maintien à la température maximale pendant 30s-1min) permet à la céramique de se comprimer et de finaliser sa fusion (frittage)."
      },
      {
        questionText: "Le frittage de Ia barbotine :",
        options: [
          "La rend de consistance solide",
          "Consiste en une infiltration d'un a 1080° c",
          "Permet sa déshydratation",
          "Est le deuxième traitement thermique de l’Infrastructure en in-Céram",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Le frittage de la barbotine (ex: In-Ceram) est un cycle thermique. La première phase (jusqu'à 300°C) permet la déshydratation (C). La phase suivante (jusqu'à 1120°C) réalise le frittage (A)."
      },
      {
        questionText: "Les couches de Ia céramique sont appliquées sur Ia matrice de platine selon l'ordre suivant :",
        options: [
          "Céramique opaque, céramique email, céramique dentine, céramique de glagage",
          "Céramique email, céramique opaque, céramique dentine, céramique de glagage",
          "Céramique email, céramique de glagage, céramique opaque, céramique dentine",
          "Céramique email, céramique dentine céramique de glagage, céramique opaque",
          "Céramique opaque, céramique dentine, céramique email, céramique de glagage"
        ],
        correctOptionIndexes: [4],
        explanation: "L'ordre de montage de la céramique (ici pour une Jacket) est : 1. Opaque (masque le fond), 2. Dentine (corps de la couleur), 3. Email (translucidité/effets), 4. Glaçage (vernis final)."
      },
      {
        questionText: "Quels sont les rôles de l'opaque dans une couronne céramo-métallique ? :",
        options: [
          "Renforcer la liaison métal-porcelaine",
          "Remplacer la couche de dentine",
          "Représenter la couleur finale de la dent",
          "Éviter le retrait de la céramique lors de la cuisson",
          "Masquer la couleur du métal"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "L'opaque a 3 rôles : Masquer le métal (E), initier la couleur de base (C), et participer à la liaison chimique métal-céramique (A)."
      }
    ]
  },
  {
    title: "La CFAO en Prothèse Fixée",
    subject: "prothese-y4",
    questions: [
      {
        questionText: "La CFAO :",
        options: [
          "ne peut être utilisée qu'au laboratoire dentaire",
          "désigne uniquement les équipements de fabrication des prothèses dentaires",
          "peut être indiquée aux prothèses fixes sur implants",
          "est indiquée seulement aux inlays, onlays, facettes",
          "est utilisée en orthodontie"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "La CFAO (Conception et Fabrication Assistées par Ordinateur) a de très larges indications, incluant la prothèse sur implant (C) et l'orthodontie (gouttières) (E)."
      },
      {
        questionText: "La numérisation intra-buccale :",
        options: [
          "allonge le délai de réalisation de la prothèse",
          "nécessite un scanner 3D",
          "élimine les désagréments des empreintes conventionnelles",
          "n'est pas aussi précise qu'une empreinte conventionnelle",
          "autorise la prise d'empreinte sans passer par le moulage"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "L'empreinte optique (numérisation) évite le porte-empreinte et le matériau (C). Elle crée un fichier numérique (STL), supprimant l'étape du moulage en plâtre (E)."
      },
      {
        questionText: "La CFAO directe :",
        options: [
          "est la plus répandue aujourd'hui en Algérie",
          "ne désigne que la prise d'empreintes numériques, CAO et FAO sont réalisées au cabinet dentaire",
          "désigne seulement une prise d'empreinte numérique au cabinet dentaire mais la CAO et la FAO réalisées au laboratoir",
          "est une technique utilisée par les cabinets dentaires souhaitant réaliser des prothèses en une session",
          "désigne que la prise d'empreinte est manuelle ensuite sera scannée pour la suite de la CFAO au laboratoire"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La CFAO *directe* (ex: CEREC) signifie que tout le processus (Empreinte numérique, Conception/CAO et Fabrication/FAO) est réalisé au cabinet dentaire (B), souvent en une seule séance (D)."
      },
      {
        questionText: "La CFAO dentaire :",
        options: [
          "Comprend en amont les équipements de fabrication et en aval les équipements de numérisation",
          "Comprend une numérisation en 2D",
          "Peut permettre la fabrication de prothèse sans numérisation intra - buccale",
          "Est utilisée uniquement en prothèse conjointe",
          "Est utilisée en prothèse conjointe et adjointe"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "En amont (début) il y a la numérisation 3D, en aval (fin) la fabrication (A, B faux). La numérisation peut se faire sur un modèle en plâtre (CFAO indirecte), donc sans numérisation intra-buccale (C). Elle est utilisée en conjointe et adjointe (D faux, E vrai)."
      },
      {
        questionText: "La CFAO directe consiste:",
        options: [
          "En une prise d'empreinte physique au cabinet dentaire qui sera scannée au laboratoire",
          "Uniquement en une conception assistée au sein du cabinet dentaire",
          "En une prise d'empreinte, conception et fabrication prothétique conventionnelle",
          "En une prise d'empreinte numérique, conception et fabrication au cabinet dentaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Définition de la CFAO Directe (ex: CEREC) : L'empreinte optique, la conception (CAO) et l'usinage (FAO) sont tous réalisés au cabinet dentaire."
      },
      {
        questionText: "La CAO :",
        options: [
          "Possède des logiciels qui utilisent un noyau graphique de modélisation géométrique",
          "Possède des logiciels qui permettent la génération automatique des programmes d'usinage des prothèses fixes",
          "Correspond à l'élaboration numérique de la prothèse",
          "Précède la numérisation 3D",
          "Se subdivise en deux phases : traitement des données et modélisation"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La CAO (Conception Assistée par Ordinateur) est l'étape de modélisation (élaboration numérique) (C) qui *suit* la numérisation (D faux). Elle utilise des logiciels graphiques (A) et comprend le traitement des données et la modélisation (E)."
      },
      {
        questionText: "La CFAO en prothèse fixée : (1- Désigne la conception et la fabrication conventionnelle des prothèses 2- Peut permettre la fabrication des prothèses sans numérisation intra-buccale 3- Ne permet que de réaliser des prothèses unitaires 4- Permet de réaliser des prothèses plurales 5- Toutes les réponses sont justes)",
        options: [
          "(1,2,3,4)",
          "(3,4)",
          "(1,4)",
          "(2,4)",
          "(1,2,4)"
        ],
        correctOptionIndexes: [3],
        explanation: "(1) Faux (numérique, pas conventionnelle). (2) Vrai (CFAO indirecte : scan de modèle en plâtre). (3) Faux. (4) Vrai (permet de faire des bridges)."
      },
      {
        questionText: "La CFAO en prothèse fixée :",
        options: [
          "Désigne la conception et la fabrication conventionnelle des prothèses",
          "Peut permettre la fabrication des prothèses sans numérisation intra-buccale",
          "Ne permet de réaliser que des prothèses unitaires",
          "Permet de réaliser des prothèses plurales",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "C'est numérique (A faux). Elle permet de faire des prothèses unitaires et plurales (bridges) (C faux, D vrai). Elle peut se faire par scan d'un modèle en plâtre (CFAO indirecte), donc sans empreinte *intra-buccale* (B)."
      },
      {
        questionText: "La CAO :",
        options: [
          "Possède des logiciels qui utilisent un noyau graphique de modélisation géométrique",
          "Possède des logiciels qui permettent la génération automatique des programmes d'usinage des prothèses fixées",
          "Correspond à l'élaboration numérique de la prothèse",
          "Précède la numérisation 3D",
          "Se subdivise en trois phases : numérisation, traitement des données et modélisation"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La CAO (Conception) est l'étape de modélisation numérique (C) utilisant un logiciel graphique (A). Elle *suit* la numérisation (D, E faux). La FAO (Fabrication) génère les programmes d'usinage (B faux)."
      },
      {
        questionText: "Lors de La CFAO indirect :",
        options: [
          "Toute la chaine numérique est réalisée au cabinet dentaire",
          "La prise d'empreinte numérique est réalisée au cabinet dentaire mais la CAO et FAO sont réalisées au laboratoire",
          "l'empreinte est prise selon la méthode conventionnelle et scannée au laboratoire",
          "Toutes les étapes de la conception sont réalisées au laboratoire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "CFAO Indirecte : L'empreinte est conventionnelle (physique), puis elle est coulée en plâtre, et c'est ce modèle qui est scanné au laboratoire pour la CAO et la FAO."
      },
      {
        questionText: "L'extension des fichiers exporté par Ia plupart des logiciels de CAO dentaire (Conception Assist& par Ordinateur) est :",
        options: [
          "Doc",
          "Pdf",
          "Stl",
          "Tis",
          "tst"
        ],
        correctOptionIndexes: [2],
        explanation: "STL (Standard Tessellation Language) est le format de fichier universel pour la modélisation 3D et la CFAO, décrivant la géométrie de surface d'un objet."
      },
      {
        questionText: "Les techniques soustractives de Ia FAO dentaire Fabrication Assistée par Ordinateur) :",
        options: [
          "Permettent d'usiner de Ia zircone pre-frittee",
          "Permettent d'usiner les matériaux calcinables",
          "Consistent en la mise en forme d'un objet par ajout de matière par empilement de couches successives",
          "Engendrent des pertes importantes de matériaux lors de l'usinage",
          "N'engendrent pas des pertes importantes de matériaux lors de l'usinage"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les techniques soustractives (usinage/fraisage) (C est faux, c'est l'additif) permettent d'usiner divers matériaux (zircone, résine calcinable) (A, B). Ce processus engendre des pertes de matière (copeaux) (D)."
      },
      {
        questionText: "Le fonctionnement de la CFAO repose sur :",
        options: [
          "Deux éléments uniquement, un système CAO et un système FAO.",
          "Trois éléments, système CAO, système FAO et un système de mesure.",
          "La numérisation de la dent ou de l'arcade par des sources lumineuses.",
          "L'utilisation de logiciels adaptés aux différents types de prothèse à concevoir.",
          "La fabrication par soustraction uniquement."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La chaîne CFAO repose sur 3 éléments : Numérisation (mesure 3D) (B), CAO (logiciel de conception) (D), et FAO (fabrication soustractive ou additive) (E faux)."
      }
    ]
  }
];

module.exports = prothesey4Quizzes;