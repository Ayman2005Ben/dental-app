// quizzes/year-3/occlusio.js

const occlusioQuizzes = [
  {
    title: "Généralités et terminologie",
    subject: "occlusio",
    questions: [
      {
        questionText: "La position d’intercuspidation maximale est :",
        options: [
          "Une position de contact entre les deux arcades dentaires avec un maximum de points de contact.",
          "Une situation des dents à l’état statique et/ou dynamique.",
          "Prouvée dans la déglutition, phonation et dans la mastication.",
          "Considérée comme pathologique chez les patients et la recherche de la relation centrée est nécessaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'Intercuspidation Maximale (ICM) est une position de référence dentaire où les arcades ont le maximum de points de contact. Elle est fonctionnelle (déglutition, mastication) et n'est pas considérée comme pathologique en soi."
      },
      {
        questionText: "L’occlusion en relation centrée est :",
        options: [
          "Une position de référence articulaire et dentaire.",
          "La position de référence en prothèse totale.",
          "La situation condylienne de référence la plus basse.",
          "Réitérative dans un temps donné et pour une posture corporelle donnée."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La Relation Centrée (RC) est une position de référence purement articulaire (condyles en position haute et antérieure), indépendante des contacts dentaires. Elle est réitérative et sert de référence, notamment en prothèse amovible complète."
      },
      {
        questionText: "L’occlusion est :",
        options: [
          "Tout état statique mandibulaire obtenu par contact entre les surfaces occlusales des arcades dentaires quel que soit la position de la mandibule.",
          "Cette relation de contact est sous la dépendance de la position des dents sur les maxillaires.",
          "Cette relation de contact est sous la dépendance de la position des condyles dans leur cavité glénoïde.",
          "Cette relation de contact est indépendante de la position des condyles."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'occlusion désigne les contacts statiques entre les dents. Cette relation dépend à la fois de la position des dents sur les arcades et de la position des condyles qui guide la mandibule."
      },
      {
        questionText: "L’articulé :",
        options: [
          "Est tout état statique mandibulaire obtenu par des contacts dentaires.",
          "Le passage d’une position occlusale à une autre avec perte de contact dentaire.",
          "Le passage d’une position occlusale à une autre sans perte de contact dentaire.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "Contrairement à l'occlusion qui est statique, l'articulé dentaire est un concept dynamique qui décrit le mouvement de la mandibule avec des contacts dentaires continus."
      },
      {
        questionText: "La position de repos est :",
        options: [
          "Position qu’occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d’équilibre et de tonicité minimale.",
          "La position qu’occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d’équilibre et de tonicité maximale.",
          "La position qu’occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d’activité.",
          "La position qu’occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en tonicité égale à zéro."
        ],
        correctOptionIndexes: [0],
        explanation: "La position de repos physiologique est une position posturale de la mandibule, déterminée par l'équilibre tonique des muscles, sans aucun contact dentaire."
      }
    ]
  },
  {
    title: "Anatomie Physiologique",
    subject: "occlusio",
    questions: [
      {
        questionText: "Les cuspides d'appui primaires :",
        options: [
          "Sont les cuspides vestibulaires supérieures et linguales inférieures.",
          "Permettent la protection des lèvres, des joues et de la langue.",
          "Déterminent et maintiennent la dimension verticale de l'étage inférieur de la face.",
          "Participent à l'écrasement du bol alimentaire au cours de la mastication."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les cuspides d'appui (vestibulaires inférieures et palatines supérieures) maintiennent la Dimension Verticale d'Occlusion (DVO) et sont responsables de l'écrasement des aliments."
      },
      {
        questionText: "Les déterminants postérieurs de l'occlusion :",
        options: [
          "Sont définis par les articulations temporo-mandibulaires.",
          "Sont des paramètres modifiables par le praticien.",
          "Peuvent être étudiés et reproduits sur un articulateur semi-adaptable.",
          "Toutes les réponses sont correctes."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les déterminants postérieurs (ATM) sont des facteurs anatomiques fixes, non modifiables par le praticien. Ils peuvent être enregistrés et simulés à l'aide d'un articulateur."
      },
      {
        questionText: "Le ptérygoidien médial est un muscle :",
        options: [
          "Elévateur de la mandibule par sa contraction unilatérale.",
          "Diducteur de la mandibule par sa contraction bilatérale.",
          "Propulseur de la mandibule par sa contraction bilatérale.",
          "Diducteur de la mandibule par sa contraction unilatérale."
        ],
        correctOptionIndexes: [3],
        explanation: "La contraction bilatérale du ptérygoïdien médial provoque l'élévation de la mandibule. Sa contraction unilatérale provoque un mouvement de diduction (mouvement latéral) du côté opposé."
      },
      {
        questionText: "Le ménisque intercondylien :",
        options: [
          "Est un manchon fibreux lâche, d'épaisseur variable, ayant la forme d'un tronc de cône.",
          "Représente le principal moyen d'union de l'articulation.",
          "Se fixe sur le pourtour de la surface articulaire du temporal et sur le col du condyle mandibulaire.",
          "Est de structure collagénique rétablissant la concordance des surfaces articulaires."
        ],
        correctOptionIndexes: [3],
        explanation: "Le ménisque (ou disque articulaire) est une lentille biconcave de structure fibro-cartilagineuse qui rétablit la concordance entre le condyle mandibulaire et la fosse mandibulaire."
      },
      {
        questionText: "Les surfaces articulaires de l'ATM sont constituées de :",
        options: [
          "La cavité glénoïde",
          "La fosse temporale.",
          "L'éminence temporale.",
          "La capsule articulaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les surfaces articulaires de l'ATM sont la cavité glénoïde (ou fosse mandibulaire) et l'éminence temporale (ou condyle temporal) au niveau de l'os temporal, et le condyle mandibulaire."
      },
      {
        questionText: "Dans le diagramme de POSSELT, le trajet de fermeture en protrusion s'effectue :",
        options: [
          "En allant de l'ouverture maximale jusqu'à la propulsion extrême.",
          "En allant de l'ouverture maximale jusqu'à l'intercuspidie maximale.",
          "En passant par la position de repos.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Le trajet de fermeture habituel, représenté sur le diagramme de Posselt, va de l'ouverture maximale à la position d'intercuspidation maximale (PIM)."
      },
      {
        questionText: "L'A.T.M :",
        options: [
          "Est une diarthrose",
          "Elle unit la fosse mandibulaire de l'os mandibulaire avec le condyle temporal",
          "Elle est mobilisée par les muscles peauciers",
          "L'articulation est renforcée par des ligaments intrinsèques et extrinsèques"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'ATM est une diarthrose (articulation mobile synoviale) qui unit la fosse mandibulaire de l'os temporal avec le condyle mandibulaire. Elle est mobilisée par les muscles masticateurs, non les muscles peauciers."
      },
      {
        questionText: "La mandibule se déplace dans les plans :",
        options: [
          "Sagittal et frontal",
          "Horizontal et vertical",
          "Horizontal, vertical et transversal",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La mandibule est capable de se déplacer dans les trois plans de l'espace : sagittal (propulsion/rétropulsion), frontal/coronal (diduction) et horizontal/transversal (latéralité)."
      }
    ]
  },
  {
    title: "Occlusion Clinique",
    subject: "occlusio",
    questions: [
      {
        questionText: "Lors d'une ouverture buccale de 20 millimètres d'amplitude, le condyle mandibulaire subit :",
        options: [
          "Un mouvement de rotation pure",
          "Un mouvement de translation pure",
          "Un mouvement complexe de rotation et translation",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0],
        explanation: "La première phase d'ouverture buccale (environ 20-25 mm) est caractérisée par un mouvement de rotation pure du condyle dans la cavité glénoïde."
      },
      {
        questionText: "Une amplitude d’ouverture buccale inférieure à 40 mm, signe :",
        options: [
          "Une laxité ligamentaire.",
          "La présence d’une latéro-déviation.",
          "Une pathologie de l'ATM d'ordre musculaire, articulaire ou occlusale.",
          "Une diminution de la Dimension Verticale d'Occlusion (DVO)"
        ],
        correctOptionIndexes: [2],
        explanation: "Une ouverture buccale limitée (inférieure à 40 mm) est un signe pathologique pouvant indiquer un problème musculaire (contracture), articulaire (luxation discale non réductible) ou occlusal."
      },
      {
        questionText: "Lors de l’examen de guidage en propulsion :",
        options: [
          "La désocclusion des dents antérieures doit être immédiate et totale.",
          "La désocclusion des dents postérieures doit être immédiate et totale.",
          "Un ou plusieurs contacts postérieurs représentent une prématurité.",
          "Un ou plusieurs contacts postérieurs représentent une interférence."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Un guidage antérieur fonctionnel en propulsion doit entraîner une désocclusion immédiate de toutes les dents postérieures. Tout contact postérieur durant ce mouvement est une interférence."
      },
      {
        questionText: "Les prématurités sont des contacts qui se font sur une ou plusieurs dents, situées le plus souvent sur les versants mésiaux des PM et M maxillaires et les versants distaux des PM et M mandibulaires :",
        options: [
          "Les prématurités apparaissent lors du mouvement de latéralité de la mandibule",
          "Les prématurités sont des obstacles lors de l’occlusion statique en RC",
          "Les prématurités sont des obstacles lors des mouvements de latéralité de la mandibule"
        ],
        correctOptionIndexes: [1],
        explanation: "Les prématurités sont les premiers contacts dentaires qui apparaissent lors de la fermeture de la mandibule en relation centrée, avant d'atteindre l'intercuspidation maximale."
      },
      {
        questionText: "Les déterminants postérieurs de l’occlusion sont :",
        options: [
          "La pente canine",
          "La pente condylienne",
          "La pente incisive",
          "L’angle de BENNET",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les déterminants postérieurs de l'occlusion sont liés à l'anatomie de l'ATM : la pente condylienne (dans le plan sagittal) et l'angle de Bennett (dans le plan horizontal)."
      }
    ]
  },
  {
    title: "Approche Clinique et Moyens de Diagnostic",
    subject: "occlusio",
    questions: [
      {
        questionText: "L'examen des moulages montés sur un articulateur semi-adaptable permet de vérifier :",
        options: [
          "L'existence d'anomalies parfois difficiles à voir cliniquement.",
          "S'il y a un obstacle lors des mouvements d'ouverture et de fermeture.",
          "L'existence d'interférences travaillantes ou non travaillantes lors des mouvements excentrés.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le montage sur articulateur permet une analyse occlusale précise et dynamique, en simulant les mouvements mandibulaires pour détecter les anomalies de contacts, les obstacles et les interférences."
      },
      {
        questionText: "Parmi les examens complémentaires permettant l'établissement d'un diagnostic :",
        options: [
          "L'examen de la cinématique mandibulaire.",
          "L'examen interarcades.",
          "Le scanner",
          "La radio panoramique"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le scanner et la radiographie panoramique sont des examens d'imagerie complémentaires essentiels pour analyser les structures osseuses et dentaires. L'examen de la cinématique et l'examen interarcades font partie de l'examen clinique."
      },
      {
        questionText: "Le plan axio-orbitaire est un plan horizontal de référence :",
        options: [
          "Passant par le point sous orbitaire et centre de rotation des condyles.",
          "Passant par le point sous orbitaire et le bord supérieur du conduit auditif externe.",
          "Passant par le centre de rotation de chaque condyle mandibulaire.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1],
        explanation: "Le plan axio-orbitaire (ou plan de Francfort) est un plan de référence céphalométrique horizontal défini par le point sous-orbitaire et le porion (bord supérieur du conduit auditif externe)."
      }
    ]
  },
  {
    title: "Le Dysfonctionnement de l’Appareil Manducateur (DAM)",
    subject: "occlusio",
    questions: [
      {
        questionText: "Le dysfonctionnement de l’appareil manducateur est :",
        options: [
          "Une affection musculaire et/ou articulaire de l’appareil manducateur",
          "Est encore appelé syndrome pathologique et dysfonctionnel de l’appareil manducateur",
          "Est d’étiologie multifactorielle",
          "Dans les formes sévères, l’ouverture buccale est impossible"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le DAM est une affection musculo-articulaire d'origine multifactorielle. Une de ses appellations est le SADAM (Syndrome Algo-Dysfonctionnel de l'Appareil Manducateur)."
      },
      {
        questionText: "Le bruxisme :",
        options: [
          "Est une des conséquences d’un dysfonctionnement de l’appareil manducateur",
          "Est une mise en contact fréquente des deux arcades dentaires",
          "Peut être traité par une injection de toxine botulique",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le bruxisme est une parafonction (cause ou facteur aggravant, et non conséquence) de mise en contact des dents. Dans les cas sévères, l'injection de toxine botulique est une option thérapeutique."
      },
      {
        questionText: "Une extraction dentaire non compensée :",
        options: [
          "Fait partie des étiologies du dysfonctionnement de l’appareil manducateur",
          "Peut générer des malpositions dentaires",
          "Peut générer un trouble de l’occlusion",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Une extraction non compensée peut entraîner des migrations dentaires, créant des troubles de l'occlusion (interférences, prématurités) qui sont un facteur de risque majeur de DAM."
      },
      {
        questionText: "La douleur dans le cas d’un dysfonctionnement de l’appareil manducateur :",
        options: [
          "Peut être d’origine musculaire et/ou articulaire",
          "Peut disparaître quand le condyle récupère le disque lors de l’ouverture buccale",
          "Peut être calmée par les antalgiques, les AINS et les myorelaxants",
          "Peut être à l’origine d’une limitation d’ouverture buccale (position antalgique)"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La douleur est un symptôme majeur du DAM. Elle peut être musculaire ou articulaire, traitée par des médicaments, et peut causer une limitation d'ouverture par réflexe de protection (antalgique)."
      },
      {
        questionText: "Les troubles de l’occlusion sont à l’origine des dysfonctionnements par :",
        options: [
          "Création d’une instabilité en OIM",
          "Déviation mandibulaire statique (ORC → OIM) par prématurité",
          "Limitation de l’enveloppe fonctionnelle par réflexe d’évitement",
          "Déviation mandibulaire dynamique liée à une interférence occlusale"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les troubles occlusaux peuvent causer des DAM en créant une instabilité, des déviations mandibulaires lors de la fermeture ou des mouvements, et des réflexes d'évitement qui contraignent le système neuro-musculaire."
      }
    ]
  },
  {
    title: "Conceptions Thérapeutiques et Prévention",
    subject: "occlusio",
    questions: [
      {
        questionText: "La butée occlusale antérieure :",
        options: [
          "Est une orthèse occlusale à visée articulaire",
          "Est réalisée avec de la résine autopolymérisable",
          "Aide à l’enregistrement de la relation centrée"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La butée antérieure est un dispositif interocclusal à visée musculaire, souvent réalisé en cabinet avec de la résine. En provoquant la désocclusion postérieure, elle lève les proprioceptions dentaires et aide à la décontraction musculaire, facilitant ainsi l'enregistrement de la relation centrée."
      },
      {
        questionText: "La gouttière de repositionnement permet :",
        options: [
          "De corriger les pathologies d’ordre musculo-articulaire",
          "De traiter une luxation discale réductible",
          "De décomprimer une luxation discale irréductible",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La gouttière de repositionnement a pour but de modifier la position mandibulaire pour recapturer un disque luxé (luxation réductible) ou décomprimer l'articulation (luxation irréductible), traitant ainsi les pathologies musculo-articulaires."
      },
      {
        questionText: "L’équilibration occluso-fonctionnelle :",
        options: [
          "Fait partie des traitements préventifs réversibles des DAM",
          "Se fait sur un articulateur semi ou non adaptable",
          "Permet de mettre en évidence les prématurités en RC",
          "Permet de corriger les interférences au cours des excursions mandibulaires"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'équilibration occlusale par meulage sélectif est un traitement irréversible. Elle doit être planifiée sur un articulateur (semi ou totalement adaptable) pour corriger précisément les prématurités et les interférences."
      },
      {
        questionText: "La gouttière de relaxation :",
        options: [
          "Est une orthèse occlusale",
          "Est indiquée en cas de spasmes musculaires",
          "Est nécessaire dans le cas de bruxisme"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La gouttière de relaxation (ou de Michigan) est une orthèse qui couvre toute une arcade. Elle est indiquée pour traiter les spasmes musculaires (myalgies) et pour protéger les dents des effets du bruxisme."
      },
      {
        questionText: "Les gouttières occlusales permettent de :",
        options: [
          "Mettre la mandibule au repos",
          "Stabiliser les mouvements mandibulaires",
          "Corriger les interférences",
          "Soulager les muscles masticateurs"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les gouttières ne corrigent pas les interférences de manière permanente (c'est le rôle de l'équilibration ou de l'orthodontie), mais elles permettent de mettre au repos le système neuromusculaire, de soulager les muscles et de guider la mandibule dans une position stable."
      }
    ]
  },
  {
    title: "OCCLUSODONTIE 2015/2016",
    subject: "occlusio",
    questions: [
      {
        questionText: "La Position de repos est :",
        options: [
          "position qu'occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d'équilibre et de tonicité minimale",
          "la position qu'occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d'équilibre et de tonicité maximale",
          "position qu'occupe la mandibule lorsque les muscles élévateurs et les abaisseurs sont en état d'équilibre et de tonicité égale à zéro."
        ],
        correctOptionIndexes: [0],
        explanation: "La position de repos mandibulaire est une position posturale maintenue par le tonus musculaire de base (activité minimale) des muscles manducateurs, créant l'espace libre d'inoclusion."
      },
      {
        questionText: "Interférences :",
        options: [
          "sont des obstacles aux mouvements fonctionnels de la mandibule",
          "Sont des obstacles lors des contacts statiques du maxillaire et la mandibule",
          "sont des obstacles aux mouvements de latéralité de la mandibule.",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Une interférence occlusale est tout contact dentaire qui empêche les autres dents de se toucher de manière stable et harmonieuse, que ce soit en statique ou en dynamique."
      },
      {
        questionText: "Les premiers contacts de prématurité en relation centrée se font sur les versants mésiaux des PM et M maxillaires et les versants distaux des PM et M mandibulaires.",
        options: [
          "VRAI",
          "FAUX"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est la description classique d'un contact prématuré en RC. Lors de la fermeture en rotation pure, le premier contact se fait souvent sur ces versants spécifiques."
      },
      {
        questionText: "Lors des mouvements de diduction, on parle de guidage latéral qui se fait soit :",
        options: [
          "par la face palatine de la canine : c'est la fonction canine",
          "par un groupe comprenant la face palatine de la canine et les versants internes des cuspides vestibulaires des prémolaires et molaires supérieures : c'est la fonction de groupe",
          "doit entrainer la désocclusion immédiate des dents non-concernées par le guidage latéral du côté travaillant et de toutes les dents du côté non-travaillant.",
          "le guiage latéral est indépendant des dents i concerne les condyles dans leurs déplacements"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le guidage latéral peut être assuré par la canine seule (fonction canine) ou par un groupe de dents (fonction de groupe). Dans les deux cas, il doit provoquer une désocclusion immédiate du côté non-travaillant."
      },
      {
        questionText: "Lors des examens radiologiques :",
        options: [
          "Le cône-Beam est préféré au denta-scan car l'irradiation est moins importante",
          "Le denta-scan permet de visualiser les parties molles",
          "Les deux examens donnent les mêmes résultats",
          "Aucune réponse n'est juste."
        ],
        correctOptionIndexes: [0],
        explanation: "Le Cone Beam (CBCT) offre une excellente résolution pour les tissus durs avec une dose d'irradiation significativement plus faible que le scanner médical (Denta-scan)."
      },
      {
        questionText: "Les manifestations articulaires des DAM sont :",
        options: [
          "les douleurs, les bruits avec une limitation de l'ouverture buccale",
          "les douleurs, les bruits",
          "les douleurs et crispations musculaires",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0],
        explanation: "Les manifestations articulaires des DAM (Désordres de l'Appareil Manducateur) incluent les bruits (claquements, crépitements) et les douleurs localisées à l'ATM, souvent accompagnées d'une limitation ou déviation de l'ouverture."
      },
      {
        questionText: "Le diagnostic différentiel entre les atteintes musculaires et articulaires se fait par :",
        options: [
          "Test de COSTEN",
          "Test de KROGH-POULSEN",
          "Test de BENNET"
        ],
        correctOptionIndexes: [1],
        explanation: "Les tests de palpation musculaire (comme ceux décrits par Krogh-Poulsen) et les tests de provocation articulaire sont utilisés pour différencier une douleur d'origine musculaire d'une douleur d'origine articulaire."
      },
      {
        questionText: "lors des mouvements de propulsion mandibulaire :",
        options: [
          "Les condyles mandibulaires glissent le long des condyles temporaux",
          "On a une désocclusion postérieure",
          "Les contacts dento-dentaires sont répartis sur toute l'arcade",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Lors de la propulsion, les condyles se déplacent vers l'avant et le bas le long de la pente condylienne. Ce mouvement, guidé par les dents antérieures, doit normalement entraîner une désocclusion de toutes les dents postérieures."
      },
      {
        questionText: "parmi les muscles élévateurs :",
        options: [
          "le muscle mylo-hyoïdien",
          "le muscle masséter",
          "le muscle ptérygoïdien médial",
          "le muscle digastrique",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les principaux muscles élévateurs de la mandibule sont le masséter, le temporal et le ptérygoïdien médial."
      },
      {
        questionText: "un articulateur se compose de:",
        options: [
          "une tige incisive",
          "un arc facial",
          "une branche supérieure",
          "un pointeau sous orbitaire",
          "toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les composants de base d'un articulateur sont : une branche supérieure, une branche inférieure, un système de condyles, et une tige incisive. L'arc facial est un accessoire de transfert."
      },
      {
        questionText: "l'arc facial de l'articulateur quick master de FAG se compose de :",
        options: [
          "un appui nasal",
          "une fourchette occlusale",
          "des embouts auriculaires",
          "un axe support",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "C'est la description des composants d'un arc facial de type FAG Quick Master, utilisé pour enregistrer la position du maxillaire par rapport à l'axe charnière du patient."
      },
      {
        questionText: "l'angle de Bennett est :",
        options: [
          "matérialisé par une aile de Bennett",
          "matérialisé par un insert angulé préfabriqué",
          "permet la programmation de l'angulation non travaillante",
          "est déterminé par rapport au plan sagittal médian"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'angle de Bennett représente le déplacement latéral et vers l'avant du condyle non-travaillant, mesuré dans le plan horizontal par rapport au plan sagittal médian. Sur les articulateurs, il est réglé à l'aide d'inserts angulés."
      },
      {
        questionText: "parmi les mesures de prévention des DAM :",
        options: [
          "réalisation d'équilibration occlusale post orthodontique",
          "interception des para fonctions",
          "le curetage parodontal",
          "équilibration systématique des prothèses",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La prévention des DAM passe par la création et le maintien d'une occlusion équilibrée (après orthodontie, sur les prothèses) et la gestion des parafonctions. Le curetage parodontal n'est pas une mesure de prévention occlusale."
      },
      {
        questionText: "Parmi les moyens d'union de l'articulation temporo-mandibulaire :",
        options: [
          "La cavité glénoïde",
          "La capsule articulaire",
          "Le condyle mandibulaire",
          "La membrane synoviale"
        ],
        correctOptionIndexes: [1],
        explanation: "Les moyens d'union de l'ATM sont la capsule articulaire et les ligaments qui maintiennent les surfaces osseuses en contact."
      },
      {
        questionText: "La gouttière occlusale permet :",
        options: [
          "Le relâchement musculaire",
          "Le repositionnement du condyle dans la cavité glénoïde",
          "Diminue l'hyper-pression intra-articulaire douloureuse",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "La gouttière occlusale a plusieurs objectifs : elle désengrène les dents pour permettre un relâchement musculaire, aide à repositionner les condyles dans une position thérapeutique, et diminue la pression sur les structures articulaires."
      },
      {
        questionText: "La butée antérieure :",
        options: [
          "utilisé un articulateur semi-adaptable",
          "Repère les interférences du chemin de fermeture uniquement",
          "Sert à rétablir les cycles masticatoires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Aucune proposition ne décrit correctement la butée antérieure (jig de Lucia), qui est un dispositif utilisé pour déprogrammer les muscles élévateurs et trouver la relation centrée."
      },
      {
        questionText: "Les surfaces occlusales d'appuis sont :",
        options: [
          "Cuspides vestibulaires des PM et M mandibulaires",
          "Bords libres des incisifs mandibulaires et cuspide de la canine mandibulaire",
          "Cuspides palatines des DM et M maxillaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les surfaces d'appui (ou cuspides de soutien) qui maintiennent la DVO sont les cuspides vestibulaires mandibulaires et les cuspides palatines/linguales maxillaires."
      }
    ]
  },
  {
    title: "2018/2019",
    subject: "occlusio",
    questions: [
      {
        questionText: "Parmi les muscles élévateurs de la mandibule on retrouve :",
        options: [
          "le muscle mylo-hyoïdien",
          "le muscle temporal .",
          "le muscle masséter",
          "le muscle ptérygoïdien latéral",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les principaux muscles élévateurs sont le temporal, le masséter et le ptérygoïdien médial. Le ptérygoïdien latéral est principalement un propulseur."
      },
      {
        questionText: "réponse(s) juste(s) :",
        options: [
          "Les dysfonctionnements de l'appareil manducateur se présentent uniquement sous forme de manifestations musculaires douloureuses",
          "Les dysfonctionnements de l'appareil manducateur se présentent sous forme de manifestations articulaires, douleurs et bruit",
          "Les dysfonctionnements de l'appareil manducateur se présentent sous forme de manifestations de la triade BAD (Bruit, Algie, Dyskinesie)",
          "Le stress est la seule cause des dysfonctionnements",
          "Les traitements orthodontiques sont la cause unique des dysfonctionnements"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les DAM (ou DCM) sont un ensemble de pathologies affectant les muscles et/ou l'articulation. La triade symptomatique classique est Bruit-Algie(douleur)-Dyskinésie(trouble du mouvement). L'étiologie est multifactorielle."
      },
      {
        questionText: "Les interférences apparaissent :",
        options: [
          "Lors des mouvements fonctionnels de la mandibule",
          "Lors de l'occlusion statique en ICM.",
          "Lors des mouvements de latéralité de la mandibule.",
          "Lors de l'occlusion statique en RC."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les interférences peuvent être des contacts prématurés en RC ou des contacts perturbant les mouvements de latéralité ou de propulsion."
      },
      {
        questionText: "La prévention du dysfonctionnement de l'appareil manducateur nécessite :",
        options: [
          "Un Traitement des troubles de l'occlusion",
          "Un traitement prothétique",
          "Un traitement orthodontique",
          "Un traitement chirurgical"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La prévention passe par la mise en place et le maintien d'une occlusion fonctionnelle et équilibrée, que ce soit par traitement orthodontique, prothétique, ou par simple équilibration occlusale."
      },
      {
        questionText: "La butée occlusale antérieure permet :",
        options: [
          "La décontraction neuromusculaire du patient",
          "Un contrôle des cycles de mastication",
          "Une prévention des dysfonctionnements de l'appareil manducateur",
          "Un traitement d'urgence des dysfonctionnements de l'appareil manducateur"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La butée antérieure (jig) est un outil de diagnostic et de traitement d'urgence. Elle déprogramme les muscles en supprimant les interférences postérieures, ce qui permet un relâchement musculaire."
      },
      {
        questionText: "cochez :",
        options: [
          "Les prématurités sont des contacts qui se font sur une ou plusieurs dents, situées le plus souvent sur les versants mésiaux des PM et M maxillaires et les versants distaux des PM et M Mandibulaires",
          "Les prématurités apparaissent lors du mouvement de latéralité droit",
          "Les prématurités sont des obstacles lors de l'occlusion statique en RC",
          "Les prématurités sont des obstacles lors des mouvements de latéralité de la mandibule"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La prématurité est par définition un contact précoce qui se produit lors de la fermeture en Relation Centrée (RC). Sa localisation est classiquement celle décrite en (A)."
      },
      {
        questionText: "Lors de l'examen radiologique de l'ATM :",
        options: [
          "la Rx panoramique est le premier examen demande",
          "le denta scan est préféré au cône- Beam car l'irradiation est moins importante.",
          "Le denta-scan est indiqué pour l'examen des parties molles",
          "denta-scan donne une très grande qualité informative sur l'état osseux de"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le panoramique est souvent le premier examen d'orientation. Le scanner (Dentascan) donne une excellente image des structures osseuses, mais le CBCT est maintenant préféré car moins irradiant. L'IRM est nécessaire pour les parties molles."
      },
      {
        questionText: "L'articulé :",
        options: [
          "est tout état statique",
          "Le passage d'une position occlusale à une autre avec perte de contact dentaire",
          "Le passage d'une position occlusale à une autre sans perte de contact dentaire",
          "toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "L'articulé dentaire décrit une position statique de contact entre les dents. L'occlusion englobe à la fois les aspects statiques (articulé) et dynamiques (mouvements)."
      },
      {
        questionText: "Le guidage antérieur :",
        options: [
          "Dépend de la DVO",
          "Dépend de la pente condylienne",
          "N'assure que la fonction de protrusion",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Le guidage antérieur est déterminé par le surplomb (overjet) et le recouvrement (overbite) des dents antérieures, qui sont directement liés à la Dimension Verticale d'Occlusion (DVO)."
      },
      {
        questionText: "Les gouttières occlusales permettent de :",
        options: [
          "Mettre la mandibule au repos",
          "Stabiliser les mouvements mandibulaires",
          "Corriger les interférences",
          "soulager les muscles masticateurs"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La gouttière occlusale est un outil thérapeutique qui permet de relaxer les muscles, de stabiliser l'occlusion dans une position thérapeutique, et de neutraliser les interférences dentaires."
      },
      {
        questionText: "Les déterminants postérieurs de l'occlusion sont :",
        options: [
          "La pente canine",
          "La pente condylienne",
          "La pente incisive",
          "L'angle de BENNET"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les déterminants postérieurs de l'occlusion sont anatomiques et liés à l'ATM : la pente condylienne et le mouvement de Bennett."
      },
      {
        questionText: "Le traitement symptomatique myorelaxants est indiqué :",
        options: [
          "Pour les douleurs type musculaire",
          "Pour les douleurs type articulaire",
          "Pour les douleurs type musculo articulaire",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Les myorelaxants (relaxants musculaires) sont indiqués spécifiquement pour soulager les douleurs d'origine musculaire (contractures, spasmes)."
      }
    ]
  }
];

module.exports = occlusioQuizzes;