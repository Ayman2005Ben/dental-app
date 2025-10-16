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
        correctOptionIndexes: [2],
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
        correctOptionIndexes: [1],
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
  }
];

module.exports = occlusioQuizzes;