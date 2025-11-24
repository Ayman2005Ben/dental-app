// quizzes/year-4/oce-y4.js

const oceQuizzes = [
  {
    title: "Cicatrisation Dentino-Pulpaire",
    subject: "oce-y4",
    questions: [
      {
        questionText: "La dentine :",
        options: [
          "Est dite réparatrice si elle est élaborée par les odontoblastes primaires",
          "Est dite réactionnelle si elle est élaborée par les odontoblastes secondaires",
          "Contient des facteurs de croissance",
          "Est dite sclérotique si elle réduit le volume des tubuli dentinaires",
          "Est vascularisée"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La dentine réparatrice est produite par des odontoblastes de remplacement (secondaires), tandis que la dentine réactionnelle est sécrétée par les odontoblastes primaires. La dentine contient bien des facteurs de croissance et devient sclérotique lorsque les tubules se resserrent pour se protéger."
      },
      {
        questionText: "Les paramètres permettant d'estimer l'état pulpaire peuvent être :",
        options: [
          "L'épaisseur de la dentine résiduelle (EDR)",
          "La symptomatologie",
          "L'histoire dentaire",
          "Le type d'évolution carieuse",
          "L'âge du patient."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "L'évaluation de l'état pulpaire se base sur un ensemble de critères, incluant l'épaisseur de dentine restante, les symptômes (douleur), le type de carie (lente ou rapide), l'âge du patient et l'historique de la dent."
      },
      {
        questionText: "Suite à une carie à évolution lente :",
        options: [
          "L'odontoblaste secrète la dentine réactionnelle",
          "L'odontoblaste peut être amené à disparaître",
          "On peut noter une brève réponse inflammatoire suivie d'une dentinogénèse réparatrice",
          "La formation de dentine de cicatrisation commence par la synthèse d'ostéodentine",
          "La dentine de cicatrisation est secrétée sans intervention thérapeutique"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Face à une agression lente et de faible intensité comme une carie chronique, les odontoblastes primaires ne sont pas détruits et entrent dans une phase de sécrétion active, produisant une dentine réactionnelle. Ce processus de défense peut se faire spontanément."
      },
      {
        questionText: "Concernant la dentine réparatrice :",
        options: [
          "Sa formation se fait grâce à un matériau de coiffage placé au contact de la pulpe exposée",
          "Elle se produit en réponse à une agression très intense",
          "Elle est secrétée par des odontoblastes-like issus de la différenciation des odontoblastes de première génération",
          "Elle est constituée de deux couches de dentine: primaire et secondaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La dentine réparatrice se forme après une agression intense (comme une exposition pulpaire) qui détruit les odontoblastes primaires. Un matériau de coiffage stimule alors des cellules pulpaires à se différencier en nouveaux odontoblastes (odontoblastes-like) qui créent un pont dentinaire."
      },
      {
        questionText: "La formation de dentine cicatricielle en réponse à l'hydroxyde de calcium :",
        options: [
          "Est due à la capacité bio-inductrice du matériau",
          "Résulte de la réaction de la pulpe induite par la nature irritante du matériau",
          "Est constatée dès la première semaine après l'application du produit",
          "Son mécanisme de déclenchement est similaire à celui du MTA",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La formation de dentine réparatrice sous hydroxyde de calcium n'est pas due à une action bio-inductrice directe, mais plutôt à une réaction de défense de la pulpe face à l'irritation causée par le pH très alcalin du matériau. Ce mécanisme est similaire à celui observé avec le MTA."
      },
      {
        questionText: "Le coiffage dentinaire est indiqué :",
        options: [
          "Dans le cas de carie à évolution rapide",
          "Dans le cas de fractures coronaires pénétrantes",
          "En présence d'un opercule de dentine décalcifiée",
          "Dans le cas des plaies pulpaires",
          "Dans le cas des plaies vives de la dentine"
        ],
        correctOptionIndexes: [4],
        explanation: "Le coiffage dentinaire est indiqué pour toutes les plaies de la dentine où la pulpe n'est pas exposée. Cela inclut les caries rapides non pénétrantes, les fractures non pénétrantes, et les dénudations du collet."
      },
      {
        questionText: "Le coiffage naturel de Bonsack :",
        options: [
          "Est une thérapeutique particulière à la carie à évolution rapide",
          "Est un coiffage pulpaire direct",
          "Est un coiffage pulpaire indirect",
          "Est un coiffage dentinaire avec atteinte du parenchyme pulpaire",
          "Nécessite un curetage dentinaire parfait"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le coiffage naturel est une technique de coiffage pulpaire indirect, spécifiquement indiquée dans les cas de caries à évolution rapide et profonde pour éviter l'exposition pulpaire."
      },
      {
        questionText: "Les indications du coiffage pulpaire indirect sont :",
        options: [
          "Les lésions carieuses actives",
          "Les fractures horizontales ou obliques pénétrantes",
          "La carie à évolution lente",
          "La pulpite réversible",
          "La pulpite chronique hyperplasique"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le coiffage pulpaire indirect est indiqué pour les caries profondes et actives (rapides) où la pulpe est encore vivante mais enflammée de manière réversible (hyperhémie), afin d'éviter une exposition pulpaire lors du curetage."
      },
      {
        questionText: "L'Oxyde de Zinc-Eugénol :",
        options: [
          "A une action sédative grâce à la fonction eugénol",
          "Renforcé, peut être représenté par l'IRM ou l'EBA",
          "A un pH proche de celui de la pulpe",
          "Est contre-indiqué sous un composite",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'oxyde de zinc-eugénol (OZE) a des propriétés sédatives pour la pulpe grâce à l'eugénol. Son pH est neutre (environ 7), il est donc peu agressif. Les versions renforcées comme l'IRM existent. Cependant, l'eugénol inhibe la polymérisation des résines composites, ce qui le contre-indique sous ces restaurations."
      },
      {
        questionText: "La réponse pulpo-dentinaire à nos thérapeutiques entraîne la formation de :",
        options: [
          "Dentine réactionnelle, formée par la première génération d'odontoblastes",
          "Dentine secondaire, formée après la naissance",
          "Dentine de réparation, produite par des odontoblastes de remplacement",
          "Dentine tertiaire, identique à la dentine réactionnelle",
          "Dentine élaborée par les cellules progénitrices, appelée dentine de réparation"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La dentine réactionnelle est sécrétée par les odontoblastes d'origine. En cas d'agression sévère, ces derniers sont détruits et des cellules progénitrices se différencient en nouveaux odontoblastes pour former une dentine de réparation."
      },
      {
        questionText: "En cas d'atteinte dentinaire, le curetage se fait :",
        options: [
          "À l'aide d’une fraise boule montée sur contre-angle",
          "À l'aide d'une curette et d'un excavateur",
          "Jusqu’à la dentine dure",
          "Avec une sonde jusqu'au cri dentinaire",
          "À l'aide d'une fraise diamantée montée sur turbine"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le curetage de la dentine cariée se fait à basse vitesse avec une fraise boule ou manuellement avec un excavateur. L'objectif est d'éliminer toute la dentine ramollie jusqu'à atteindre une dentine dure, qui produit un son caractéristique appelé 'cri dentinaire'."
      },
      {
        questionText: "La dentine réactionnelle :",
        options: [
          "Survient naturellement au cours du vieillissement de la dent",
          "Est appelée aussi la dentine affectée",
          "Se retrouve en regard d'un fond de cavité ayant subi un coiffage",
          "Est élaborée par des fibroblastes",
          "Est élaborée par des odontoblastes dits odontoblastes-like"
        ],
        correctOptionIndexes: [2],
        explanation: "La dentine réactionnelle est une dentine tertiaire sécrétée par les odontoblastes primaires en réponse à une irritation modérée, comme celle présente sous une carie chronique ou après un coiffage dentinaire (indirect)."
      },
      {
        questionText: "Le fond protecteur sous une obturation a pour rôle de :",
        options: [
          "Protéger l’obturation contre la salive",
          "Empêcher les transmissions thermiques et l'intoxication de la pulpe par les acides",
          "Protéger la dent du milieu buccal",
          "Protéger la pulpe",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le rôle principal d'un fond de cavité (ou fond protecteur) est d'isoler et de protéger le complexe dentino-pulpaire des agressions thermiques, chimiques (acidité des matériaux) et électriques provenant du matériau de restauration coronaire."
      },
      {
        questionText: "Les thérapeutiques dentinogènes :",
        options: [
          "Intéressent l'émail et la dentine",
          "Intéressent la pulpe",
          "Intéressent le complexe pulpo-dentinaire",
          "Intéressent la dentine seulement",
          "Ont pour but la cicatrisation de la pulpe"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Les thérapeutiques dentinogènes s'adressent à l'ensemble du complexe pulpo-dentinaire et visent à stimuler la formation de dentine (dentinogenèse) afin de permettre la cicatrisation et la préservation de la vitalité pulpaire."
      },
      {
        questionText: "L'hydroxyde de calcium :",
        options: [
          "Est très peu soluble dans l'eau et les fluides tissulaires",
          "Est un antiseptique",
          "A un pH=10",
          "Est toxique pour la pulpe",
          "Est très radio-opaque"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'hydroxyde de calcium est faiblement soluble, ce qui lui permet une action prolongée. Son pH très alcalin (environ 12,4) lui confère une forte action antiseptique. Il n'est pas radio-opaque par lui-même."
      },
      {
        questionText: "Les indications majeures de coiffage pulpaire direct sont dans :",
        options: [
          "Les cas d’une inflammation pulpaire totale",
          "Les fractures radiculaires accidentelles",
          "Les caries juxta-pulpaires",
          "Le cas de fractures radiculaires horizontales ou obliques pénétrantes",
          "La mise à nu iatrogène de la pulpe"
        ],
        correctOptionIndexes: [4],
        explanation: "L'indication principale du coiffage pulpaire direct est l'exposition accidentelle (iatrogène) d'une pulpe saine lors du curetage d'une carie profonde, ou lors d'un traumatisme récent sur une dent saine."
      },
      {
        questionText: "Le Biodentine :",
        options: [
          "Est biocompatible avec des restaurations sur dent à pulpe vivante",
          "A un pouvoir dentinogène",
          "A un pouvoir antibactérien",
          "Est radio-opaque",
          "Ne peut être modifié lors de sa cristallisation par l'humidité"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La Biodentine est un substitut dentinaire biocompatible, bioactif (stimule la formation de dentine), antibactérien et radio-opaque. Cependant, une humidité excessive pendant sa prise peut perturber sa cristallisation."
      },
      {
        questionText: "Le coiffage d'un opercule décalcifié :",
        options: [
          "Se fait avec l'oxyphosphate de calcium",
          "Est un coiffage pulpaire direct",
          "Le curetage doit être parfait (cri dentinaire)",
          "Est un coiffage pulpaire indirect",
          "La restauration est réalisée à la même séance"
        ],
        correctOptionIndexes: [3],
        explanation: "Cette technique est une forme de coiffage pulpaire indirect où l'on laisse intentionnellement une fine couche de dentine décalcifiée (affectée mais non infectée) au-dessus de la pulpe pour éviter son exposition. Le curetage n'est donc parfait qu'en périphérie."
      },
      {
        questionText: "Les indications majeures du coiffage pulpaire direct sont :",
        options: [
          "L'inflammation pulpaire totale",
          "Les caries juxta-pulpaires",
          "Les pulpites irréversibles",
          "Les caries à évolution rapide (cerne laiteux de Marmasse)",
          "Dans le cas d'une mise à nu de la pulpe iatrogène"
        ],
        correctOptionIndexes: [4],
        explanation: "Le coiffage pulpaire direct est principalement indiqué lors d'une exposition accidentelle (iatrogène) d'une pulpe saine. Le 'cerne laiteux' est un signe qui oriente plutôt vers un coiffage indirect."
      },
      {
        questionText: "La dentine réactionnelle :",
        options: [
          "Se retrouve en regard d'un fond de cavité ayant subi un coiffage",
          "Est appelée aussi dentine physiologique",
          "Est appelée aussi dentine affectée",
          "Survient naturellement au cours du vieillissement de la dent",
          "Est secrétée par les fibroblastes"
        ],
        correctOptionIndexes: [0],
        explanation: "La dentine réactionnelle est une dentine tertiaire formée par les odontoblastes en réponse à une agression de faible intensité, typiquement sous une carie chronique ou après une procédure de coiffage dentinaire."
      },
      {
        questionText: "Lors d'un coiffage dentinaire :",
        options: [
          "Le curetage dentinaire de toute la cavité doit être parfait",
          "Le premier temps du curetage dentinaire est réalisé manuellement (excavateur)",
          "On laisse un opercule de dentine infiltrée",
          "Le curetage dentinaire doit être parfait au niveau des parois mais pas au niveau pulpaire",
          "L'anesthésie est obligatoire"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Pour un coiffage dentinaire standard, tout le tissu carié doit être retiré jusqu'à atteindre une dentine saine et dure. L'utilisation d'un excavateur manuel est souvent recommandée pour la dentine profonde afin de mieux contrôler le geste et d'éviter l'exposition pulpaire. L'anesthésie n'est pas toujours obligatoire et peut masquer le 'cri dentinaire'."
      },
      {
        questionText: "Le coiffage naturel :",
        options: [
          "Est une thérapeutique particulière à la carie à évolution rapide",
          "Est un coiffage pulpaire indirect",
          "Le curetage dentinaire doit être parfait (cri dentinaire)",
          "Est un coiffage pulpaire direct"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le 'coiffage naturel' est un autre terme pour le coiffage pulpaire indirect. Il est spécifiquement indiqué pour les caries profondes à évolution rapide afin de stimuler une réponse de défense de la pulpe (dentinogenèse réactionnelle) sans l'exposer."
      },
      {
        questionText: "Le coiffage dentinaire est indiqué :",
        options: [
          "Dans le cas de fractures coronaires pénétrantes",
          "Dans le cas de carie à évolution rapide",
          "En présence d'un opercule de dentine décalcifiée",
          "Dans le cas des plaies pulpaires"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le coiffage dentinaire s'applique à toutes les situations où la dentine est exposée mais la pulpe est intacte. Cela inclut les caries rapides qui n'ont pas encore atteint la pulpe et la technique spécifique du coiffage sur opercule décalcifié (coiffage indirect)."
      },
      {
        questionText: "Dans le coiffage pulpaire direct :",
        options: [
          "Les fibroblastes se différencient en odontoblastes",
          "Le pont dentinaire se fait à partir de la fin de la 3ème semaine",
          "Est indiqué dans le cas des caries profondes",
          "Est indiqué dans le cas des atteintes pulpaires totales",
          "L'alcalinité de Ca(OH)2 provoque une nécrose pulpaire superficielle"
        ],
        correctOptionIndexes: [4],
        explanation: "Lors d'un coiffage direct, le pH très élevé de l'hydroxyde de calcium induit une nécrose de coagulation superficielle de la pulpe. Cette zone de nécrose crée un environnement favorable au recrutement de cellules souches pulpaires (et non des fibroblastes) qui se différencieront en nouveaux odontoblastes pour former un pont de dentine réparatrice."
      },
      {
        questionText: "Les cellules de synthèse sont des cellules :",
        options: [
          "Qui participent au processus de réparation",
          "Qui participent au processus de résorption",
          "Quiescentes",
          "Présentées par les cellules épithéliales de MALASSEZ"
        ],
        correctOptionIndexes: [0],
        explanation: "Dans le contexte de la cicatrisation pulpaire, les 'cellules de synthèse' désignent les cellules (comme les odontoblastes de remplacement) qui se différencient et migrent pour produire de la nouvelle matrice dentinaire, participant ainsi activement au processus de réparation."
      },
      {
        questionText: "La dentine décalcifiée :",
        options: [
          "Est appelée aussi dentine infectée",
          "Est appelée aussi dentine affectée",
          "Est appelée aussi boue dentinaire",
          "Peut être retrouvée dans une atteinte dentinaire superficielle"
        ],
        correctOptionIndexes: [1],
        explanation: "La dentine 'affectée' est la couche de dentine déminéralisée mais dont la trame de collagène est encore intacte et qui est peu contaminée par les bactéries. Elle est considérée comme potentiellement reminéralisable. La dentine 'infectée', plus superficielle, est irréversiblement détruite et doit être retirée."
      },
      {
        questionText: "La dentine péri-pulpaire est une :",
        options: [
          "Dentine réactionnelle et canaliculaire",
          "Dentine non canaliculaire",
          "Dentine tertiaire",
          "Dentine formée par les néo-odontoblastes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "La dentine réactionnelle est bien une dentine tertiaire, formée par les odontoblastes de première génération et conserve une structure tubulaire (canaliculaire). Cependant, l'association de toutes ces affirmations dans les options rend la question ambiguë. La réponse 'toutes les réponses sont fausses' est considérée correcte car aucune option ne décrit parfaitement et sans ambiguïté la situation."
      },
      {
        questionText: "La dentine de réparation :",
        options: [
          "Est due à une stimulation plus agressive",
          "Ressemble à la dentine réactionnelle",
          "Résulte de nouveaux odontoblastes",
          "Provient des cellules progénitrices",
          "Est issue de la réactivation des odontoblastes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentine de réparation se forme en réponse à une agression sévère qui a détruit les odontoblastes originels. Des cellules souches/progénitrices de la pulpe sont alors recrutées pour se différencier en nouveaux odontoblastes (odontoblastes-like) et produire cette nouvelle dentine."
      },
      {
        questionText: "La pulpite réversible :",
        options: [
          "Est une urgence inflammatoire",
          "Est une urgence infectieuse",
          "Représente le stade ultime au-delà duquel une pulpectomie devient obligatoire",
          "Nécessite la préparation d'un antalgique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La pulpite réversible est une inflammation pulpaire (urgence inflammatoire) où la pulpe peut encore guérir si l'irritant est éliminé. C'est le dernier stade avant que l'inflammation ne devienne irréversible, nécessitant alors une pulpectomie."
      }
    ]
  },
  {
    title: "Principes et Indications du Traitement Endodontique",
    subject: "oce-y4",
    questions: [
      {
        questionText: "On appelle LAM :",
        options: [
          "Le premier instrument qui atteint la limite apicale",
          "Le dernier instrument qui atteint librement la limite apicale",
          "L'instrument avec lequel on réalise le cathétérisme",
          "L'instrument avec lequel on réalise la récapitulation",
          "Une lime mécanisée de petit diamètre"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La LAM (Lime Apicale Maîtresse) est le dernier et plus gros instrument qui atteint la longueur de travail. Elle sert de référence pour la suite de la préparation et est utilisée lors de la récapitulation pour s'assurer que le canal reste perméable jusqu'à l'apex."
      },
      {
        questionText: "Le traitement endodontique est contre-indiqué :",
        options: [
          "Chez le patient âgé",
          "Chez le patient immunodéprimé",
          "Temporairement chez le patient sous chimiothérapie",
          "Temporairement chez le diabétique jusqu'à équilibration de son diabète",
          "Temporairement chez la femme enceinte durant le deuxième trimestre"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "L'âge n'est pas une contre-indication. Cependant, certaines conditions médicales générales nécessitent des précautions ou un report du traitement. Un diabète non équilibré ou une grossesse (notamment le 1er et 3ème trimestre) sont des contre-indications relatives et temporaires."
      },
      {
        questionText: "Le traitement endodontique consiste :",
        options: [
          "À extirper uniquement le paquet vasculo-nerveux",
          "En la dévitalisation de la dent puis en l'obturation du système canalaire",
          "À nettoyer (cleaning) le système endo-canalaire",
          "À obturer (filling) le réseau canalaire sans irriter le péri-apex",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le traitement endodontique est un processus complet qui inclut le nettoyage, la mise en forme (shaping) et la désinfection de tout le système canalaire, suivi de son obturation tridimensionnelle et étanche pour prévenir toute réinfection."
      },
      {
        questionText: "La réussite du traitement endodontique est assurée par :",
        options: [
          "La pose du diagnostic précis",
          "Un examen radiologique de qualité",
          "Une étanchéité apicale uniquement",
          "Une étanchéité coronaire uniquement",
          "Une étanchéité apicale et coronaire"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Le succès du traitement repose sur un diagnostic correct et des examens de qualité. D'un point de vue technique, une étanchéité parfaite à la fois au niveau apical (bout de la racine) et au niveau coronaire (restauration finale) est cruciale pour empêcher la réinfection du système canalaire."
      },
      {
        questionText: "Le traitement endodontique est indiqué dans le cas de :",
        options: [
          "Pulpite symptomatique",
          "Pulpite asymptomatique",
          "Gangrène pulpaire",
          "Syndrome du septum",
          "Atteinte pulpaire superficielle sur dent permanente immature"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement endodontique est indiqué lorsque l'inflammation pulpaire est irréversible (pulpite, symptomatique ou non) ou lorsque la pulpe est nécrosée (gangrène). Une atteinte superficielle sur une dent immature relève de thérapies de conservation pulpaire."
      },
      {
        questionText: "Le traitement endodontique conventionnel ne peut être réalisé dans le cas de :",
        options: [
          "Cardiopathie à haut risque infectieux quand la pulpe est nécrosée",
          "Dent de sagesse non fonctionnelle",
          "Dent immature",
          "Présence de lésion apicale",
          "Support parodontal insuffisant"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les contre-indications incluent un risque infectieux majeur (endocardite), les dents non stratégiques (sagesse non fonctionnelle), un support parodontal très faible (dent 'perdue'). Une dent immature ou avec une lésion apicale peut souvent être traitée avec des protocoles spécifiques (apexification, etc.)."
      },
      {
        questionText: "Les objectifs de traitement endodontique sont :",
        options: [
          "Éliminer toutes les substances organiques contenues dans le réseau canalaire",
          "Préparer le canal principal en suivant sa forme initiale",
          "Obturer le réseau canalaire de façon tridimensionnelle",
          "Obtenir l'élongation radiculaire",
          "Obtenir la formation d'un pont dentinaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les trois objectifs fondamentaux du traitement endodontique sont le nettoyage complet du système canalaire, sa mise en forme conique respectant l'anatomie initiale, et son obturation tridimensionnelle et étanche."
      },
      {
        questionText: "La pulpectomie est indiquée :",
        options: [
          "Dans la catégorie II de Baume",
          "Dans la catégorie IV de Baume",
          "Dans les échecs de coiffage pulpaire",
          "Dans tous les cas de symptomatologie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La pulpectomie (retrait total de la pulpe) est indiquée lorsque les thérapies de conservation pulpaire (comme le coiffage) ont échoué ou ne sont pas indiquées en raison d'une inflammation irréversible ou d'une nécrose."
      },
      {
        questionText: "La lime de perméabilité est utilisée pour :",
        options: [
          "Mesurer la longueur de travail",
          "Explorer le canal « Le cathétérisme »",
          "La préparation canalaire",
          "Libérer le canal de toute obstruction",
          "Vérifier la vacuité apicale après le passage de tout instrument actif"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La lime de perméabilité est une lime de petit diamètre utilisée pour vérifier et maintenir la perméabilité de la portion apicale du canal. Elle permet d'éliminer les débris dentinaires compactés et de s'assurer que le chemin jusqu'à l'apex reste libre tout au long de la préparation."
      },
      {
        questionText: "Le traitement endodontique est réalisé dans le cas de :",
        options: [
          "Échecs des coiffages pulpaires directs",
          "Échecs des coiffages pulpaires indirects",
          "Dyschromie d'origine carieuse",
          "Polypes pulpaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le traitement endodontique devient nécessaire après l'échec d'une thérapie de conservation comme le coiffage direct. Une dyschromie (coloration grise) d'origine carieuse est souvent le signe d'une nécrose pulpaire, qui est également une indication."
      },
      {
        questionText: "Le traitement endodontique est nécessaire dans les cas suivants :",
        options: [
          "Fracture amélo-dentinaire avec exposition pulpaire sur dent immature",
          "Dans un but prothétique",
          "Dyschromie d'origine traumatique sans facture sur dent mature",
          "Pulpite purulente",
          "Parodontite apicale aiguë"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Les indications incluent la dévitalisation pour des raisons prothétiques (création d'un ancrage), la nécrose suite à un traumatisme (indiquée par la dyschromie), et les pathologies pulpaires (pulpite purulente) ou péri-apicales (parodontite apicale aiguë)."
      },
      {
        questionText: "Le traitement endodontique est contre-indiqué dans les cas suivants :",
        options: [
          "Atteinte pulpaire sur dent temporaire au stade II",
          "Maladie générale à risque infectieux majeur",
          "Ankylose endo-canalaire",
          "Dent de sagesse fonctionnelle",
          "Mobilité dentaire importante"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Les contre-indications absolues ou relatives comprennent un état de santé général ne permettant pas le traitement (risque d'endocardite), une impossibilité technique (ankylose/calcification canalaire), ou un pronostic dentaire trop faible (mobilité excessive due à une maladie parodontale sévère)."
      }
    ]
  },
  {
    title: "Reconstitutions Corono-Radiculaires",
    subject: "oce-y4",
    questions: [
      {
        questionText: "L'objectif du coffrage lors d'une reconstitution complexe sur dent vivante est de :",
        options: [
          "Préserver la vitalité pulpaire",
          "Empêcher le débordement cervical",
          "Reproduire le point de contact interdentaire",
          "Assurer une rétention extrinsèque",
          "Assurer une rétention intrinsèque"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le coffrage (matrice) a pour but de contenir le matériau de restauration, d'assurer un bon ajustage au niveau cervical pour éviter les débordements, et de permettre la reconstitution d'un point de contact correct avec la dent voisine."
      },
      {
        questionText: "Les moyens de coffrage pour une reconstitution complexe sur dent vivante sont :",
        options: [
          "Les tenons dentinaires",
          "Les tenons radiculaires",
          "Les matrices",
          "Les coins interdentaires",
          "Les moules préformés"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Le coffrage est assuré par les matrices (métalliques ou plastiques), les coins interdentaires (qui adaptent la matrice à la dent) et les moules préformés (couronnes transparentes). Les tenons sont des moyens de rétention, pas de coffrage."
      },
      {
        questionText: "Les avantages des tenons fibrés par rapport aux tenons métalliques sont :",
        options: [
          "Ils sont moins rigides, ce qui diminue les risques de fracture radiculaire",
          "Ils ne sont pas sujets à la corrosion qui est une source de descellement",
          "Ils répondent aux exigences esthétiques",
          "Peuvent être utilisés lorsque la limite cervicale est sous-gingivale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les tenons fibrés ont un module d'élasticité proche de la dentine, répartissant mieux les contraintes et réduisant le risque de fracture. Ils sont également esthétiques (blancs ou translucides) et ne se corrodent pas. Le collage en milieu sous-gingival reste cependant difficile."
      },
      {
        questionText: "Une reconstitution corono-radiculaire est :",
        options: [
          "Indiquée uniquement sur dents antérieures",
          "Indiquée uniquement sur dents postérieures",
          "Une technique de restauration sur dents vivantes",
          "Une technique de restauration sur dents non vivantes",
          "Elles peuvent être coulées ou foulées"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La reconstitution corono-radiculaire (RCR) est une technique spécifique aux dents dévitalisées (non vivantes). Elle peut être réalisée en technique directe au fauteuil (foulée) ou en technique indirecte via une empreinte et une pièce de laboratoire (coulée)."
      },
      {
        questionText: "Quels sont les critères de choix d'un tenon radiculaire ?",
        options: [
          "La forme",
          "La radio-opacité",
          "La nature du matériau",
          "Le diamètre",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Le choix d'un tenon dépend de multiples facteurs : sa forme (adaptée à l'anatomie canalaire), son diamètre (assez large pour la rétention mais conservant les parois radiculaires), sa nature (métal, fibre), et sa radio-opacité pour le contrôle radiographique."
      },
      {
        questionText: "Qu'est-ce que l'endo-couronne ?",
        options: [
          "Une reconstitution corono-radiculaire foulée",
          "Une restauration en céramique monobloc collée",
          "Une reconstitution coronaire complexe sur dent vivante",
          "Une facette en résine composite",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "L'endocouronne est une restauration monobloc (généralement en céramique) qui restaure la partie coronaire d'une dent dépulpée (surtout les molaires) en s'ancrant directement dans la chambre pulpaire, sans utiliser de tenon canalaire."
      },
      {
        questionText: "Quel est l'avantage des tenons en fibres ?",
        options: [
          "Ils sont sujets à la corrosion",
          "Ils sont rigides et fragilisent la racine",
          "Leur module d'élasticité est proche de celui de la dentine",
          "Ils sont inesthétiques",
          "Ils sont flexibles"
        ],
        correctOptionIndexes: [2],
        explanation: "Le principal avantage biomécanique des tenons fibrés est leur module d'élasticité similaire à celui de la dentine. Cela permet une meilleure répartition des contraintes occlusales et diminue significativement le risque de fracture radiculaire par rapport aux tenons métalliques rigides."
      },
      {
        questionText: "Qu'est-ce qui caractérise une restauration corono-radiculaire coulée ?",
        options: [
          "Elle nécessite une étape au laboratoire de prothèse",
          "Elle est réalisée avec un matériau inséré en phase plastique",
          "Elle est indiquée uniquement lorsque la limite cervicale est supra-gingivale",
          "Elle est indiquée dans le cas de délabrement coronaire supérieur à la moitié du volume initial",
          "Elle peut être réalisée même en présence d'une perte de substance"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La RCR coulée (inlay-core) est une technique indirecte qui nécessite une empreinte et une fabrication au laboratoire. Elle est particulièrement indiquée lorsque le délabrement de la couronne est très important (plus de la moitié du volume)."
      },
      {
        questionText: "Face au phénomène galvanique, les effets redoutés sont :",
        options: [
          "Une perte de l'étanchéité",
          "Une dyschromie dentaire",
          "Une tension électrique",
          "Dégradation du matériau de restauration",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le galvanisme buccal (contact entre deux métaux différents en milieu salivaire) peut créer un courant électrique (provoquant des douleurs ou un goût métallique) et accélérer la corrosion de l'un des métaux, ce qui entraîne sa dégradation et une perte d'étanchéité de la restauration."
      },
      {
        questionText: "Quel est l'objectif du coffrage dans une reconstitution complexe sur dent vivante ?",
        options: [
          "Permettre un bon ajustage cervical",
          "Restaurer le point de contact",
          "Obtenir un état de surface lisse dans les zones proximales",
          "Rétablir l'occlusion",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le coffrage (matrice et coin) permet de reconstituer les parois manquantes d'une cavité, d'assurer une bonne adaptation du matériau au niveau cervical, de recréer un point de contact correct et d'obtenir une surface lisse dans les zones interdentaires."
      },
      {
        questionText: "Le tenon radiculaire en fibre de verre :",
        options: [
          "Est seulement indiqué dans le cas des dents dépulpées antérieures",
          "Améliore la rétention de la reconstitution coronaire",
          "Est constitué d’une matrice résineuse avec des fibres de renforcement constituées d'un mélange de carbone et de zircone",
          "A un module d'élasticité très élevé proche de celui de la dentine",
          "Nécessite un logement égal au 1/3 radiculaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Le rôle principal d'un tenon est d'améliorer la rétention de la reconstitution coronaire sur la partie radiculaire de la dent. Les tenons en fibre de verre ont un module d'élasticité bas, proche de celui de la dentine."
      },
      {
        questionText: "L'onlay :",
        options: [
          "Est une restauration partielle indirecte impliquant un recouvrement corono-périphérique complet de la dent",
          "Est indiqué lorsque la pièce prothétique réalise un recouvrement cuspidien",
          "Est collé à la dent à l'aide d'un système adhésif seul",
          "Nécessite une préparation occlusale afin d'obtenir un trottoir cervical supra-gingival",
          "Ne nécessite aucun enregistrement de l'occlusion"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Un onlay est une restauration partielle indirecte qui se distingue de l'inlay par le fait qu'il recouvre au moins une cuspide. Sa préparation doit être entièrement supra-gingivale pour permettre un collage efficace."
      },
      {
        questionText: "La restauration corono-radiculaire foulée (RCRF) :",
        options: [
          "Améliore la résistance de la dent",
          "Est une RCR directe, réalisée en bouche par le praticien",
          "Est indiquée lorsqu'il y a 2 à 4 parois résiduelles d'épaisseur supérieure à 1 mm et une hauteur insuffisante avec une limite cervicale infra-gingivale",
          "Nécessite la réalisation d'un tenon anatomique",
          "Nécessite une prise d'empreinte de l'occlusion"
        ],
        correctOptionIndexes: [1],
        explanation: "La RCR foulée est une technique directe où le matériau de reconstitution (composite ou amalgame) est modelé directement en bouche, souvent autour d'un tenon préfabriqué. Elle est réalisée en une seule séance, sans passer par un laboratoire."
      },
      {
        questionText: "Une restauration complexe :",
        options: [
          "Améliore la résistance de la dent",
          "Peut faire appel au tenon radiculaire afin de distribuer les forces appliquées à la restauration coronaire au sein de la dentine radiculaire",
          "Est indiquée dans le cas des cavités de classe I très profondes",
          "Est une technique de restauration obligatoirement indirecte",
          "Est indiquée uniquement sur dents dépulpées"
        ],
        correctOptionIndexes: [1],
        explanation: "Une restauration est dite 'complexe' lorsqu'elle nécessite des moyens de rétention supplémentaires (puits, rainures, tenons). Sur une dent dépulpée, le tenon radiculaire sert d'ancrage et aide à distribuer les contraintes le long de la racine."
      },
      {
        questionText: "Les moyens de rétention intrinsèque :",
        options: [
          "Sont réalisés au niveau radiculaire",
          "Sont représentés par le tenon dentinaire",
          "Assurent la rétention mésio-distale par une convergence des parois en direction occlusale",
          "Sont les tenons dentinaires vissés dans des puits dentinaires préalablement percés",
          "Sont les rainures ou les ailettes qui assurent la rétention mésio-distale de la restauration"
        ],
        correctOptionIndexes: [4],
        explanation: "Les moyens de rétention intrinsèques sont des aménagements taillés directement dans la dentine résiduelle de la dent (et non rapportés). Les rainures, les puits ou les cannelures en font partie et augmentent la stabilité de la restauration."
      },
      {
        questionText: "L'endocouronne :",
        options: [
          "Peut être réalisée sur les dents antérieures",
          "Est une restauration monobloc collée qui prend place dans la chambre pulpaire des molaires fortement endommagées",
          "Nécessite une préparation axiale avec une convergence des parois en direction occlusale",
          "Nécessite une préparation périphérique afin d'obtenir une limite cervicale juxta-gingivale",
          "Utilise un tenon radiculaire en fibre de verre"
        ],
        correctOptionIndexes: [1],
        explanation: "L'endocouronne est une restauration adhésive monobloc spécifiquement indiquée pour les dents postérieures (molaires) très délabrées. Sa rétention est assurée par le collage dans la chambre pulpaire, ce qui la dispense de l'utilisation d'un tenon."
      },
      {
        questionText: "Parmi les paramètres à observer lors de la réalisation d’une RCR directe adhésive nous retrouvons :",
        options: [
          "La préparation du logement pour le tenon radiculaire doit se faire sur le 1/3 de la longueur canalaire",
          "La longueur du tenon ne doit pas dépasser l'entrée canalaire",
          "Le diamètre du tenon est choisi de façon à ce qu'il flotte dans le canal",
          "La préparation du logement est réalisée à l'aide d'une fraise Zekrya endo",
          "L'empreinte du logement est réalisée à la même séance"
        ],
        correctOptionIndexes: [2],
        explanation: "Le choix du tenon est crucial. Son diamètre doit être adapté à celui du canal après préparation : il ne doit ni être trop serré (risque de fracture), ni 'flotter' (manque de rétention). L'espace doit être suffisant pour l'agent de collage."
      },
      {
        questionText: "Par rapport à un tenon métallique, le tenon en fibre de verre :",
        options: [
          "Possède un module d'élasticité plus faible",
          "Possède une résistance à la traction et à la flexion plus faible",
          "Est vissé dans le canal radiculaire",
          "Montre une tendance à griser la racine qui va accentuer l'effet d'ombre cervical",
          "Nécessite un élargissement en excès des canaux"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le tenon en fibre de verre a un module d'élasticité plus faible, proche de celui de la dentine, ce qui est un avantage biomécanique. Sa résistance mécanique intrinsèque (traction, flexion) est cependant inférieure à celle des alliages métalliques."
      },
      {
        questionText: "Les tenons fibrés peuvent être collés à l'aide de :",
        options: [
          "Ciment verre-ionomère",
          "Composite photo-polymérisable",
          "Ciment à l'oxyphosphate de zinc",
          "Ciment eugénate",
          "Composite dual"
        ],
        correctOptionIndexes: [4],
        explanation: "Le collage des tenons fibrés se fait avec un composite de collage 'dual' (ou double prise). Ce type de composite polymérise à la fois grâce à la lumière (partie coronaire) et par réaction chimique (partie apicale, où la lumière ne pénètre pas), assurant une prise complète."
      },
      {
        questionText: "Les moyens de rétention extrinsèques dans le cas de restauration complexe peuvent être :",
        options: [
          "Des screw-posts",
          "Des tenons dentinaires",
          "Des tenons en fibre de carbone",
          "Des tenons en zircone",
          "Des rainures"
        ],
        correctOptionIndexes: [1],
        explanation: "Les moyens extrinsèques sont des éléments ajoutés (et non taillés dans la dent). Les tenons dentinaires (petites vis ancrées dans la dentine coronaire) sont un exemple classique. Les rainures sont un moyen intrinsèque."
      },
      {
        questionText: "Les tenons en fibre de verre :",
        options: [
          "Sont radio-clairs",
          "Possèdent la même élasticité que la dentine",
          "Se corrodent",
          "Absorbent et dissipent les contraintes coronaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les tenons en fibre de verre ont un module d'élasticité très proche de celui de la dentine. Cette propriété leur permet d'absorber et de mieux répartir les contraintes, réduisant ainsi le risque de fracture radiculaire."
      },
      {
        questionText: "Le composite Dual est :",
        options: [
          "Un composite fluide",
          "Uniquement photo-polymérisable",
          "Uniquement auto-polymérisable",
          "Un composite de collage des tenons en fibres de verre",
          "Un composite de restauration coronaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Un composite 'dual' combine une polymérisation chimique (auto) et une polymérisation photo-induite. Il est spécifiquement utilisé pour le collage des tenons en fibre de verre, assurant une prise complète même en profondeur du canal."
      },
      {
        questionText: "La silanisation est l'application complexe :",
        options: [
          "D'un adhésif sur le tenon",
          "D'un composite dual sur le tenon",
          "D'un gel acide ortho-phosphorique à 37% pendant 15 secondes",
          "Des trois éléments cités en a, b et c",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "La silanisation est un traitement de surface qui consiste à appliquer un agent de couplage, le silane, sur le tenon en fibre de verre. Le silane améliore la liaison chimique entre la matrice résineuse du tenon et le composite de collage."
      },
      {
        questionText: "Lors d’une RCRC adhésive, le protocole fait appel à l'utilisation :",
        options: [
          "De l'EDTA pour éliminer la boue dentinaire",
          "D'un adhésif dual",
          "D'un composite de collage dual",
          "D'un composite photo-polymérisable",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Le protocole de collage d'un tenon fibré est rigoureux : il faut nettoyer le canal (EDTA), appliquer un système adhésif 'dual' sur la dentine, coller le tenon avec un composite de collage 'dual', puis reconstituer la partie coronaire avec un composite de restauration classique."
      },
      {
        questionText: "Les tenons radiculaires métalliques peuvent être :",
        options: [
          "En acier inoxydable",
          "Autoforants",
          "En titane",
          "À friction",
          "En acier doré"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les tenons métalliques existent en différents alliages, les plus courants étant l'acier inoxydable, le titane (plus biocompatible) et des alliages plaqués or."
      },
      {
        questionText: "Les tenons fibres :",
        options: [
          "Sont moins résistants à la fatigue que les tenons métalliques",
          "Sont moins radio-opaques que la dentine",
          "Sont cylindriques",
          "Augmentent l'effet de coin et les fractures",
          "Sont très esthétiques"
        ],
        correctOptionIndexes: [4],
        explanation: "L'un des grands avantages des tenons en fibres (verre, quartz) est leur esthétique. Leur translucidité permet d'éviter l'ombre grisâtre au niveau du collet de la dent, souvent visible avec les tenons métalliques, surtout sous des couronnes tout-céramique."
      },
      {
        questionText: "Dans la technique d'une RCR collée ou RCR adhésive nous utilisons :",
        options: [
          "Des tenons métalliques",
          "Des tenons fibrés",
          "Des ciments de scellement type oxyphosphate de zinc",
          "Des colles de type DUAL",
          "Des tenons vissés ou scellés (métalliques)"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La technique de RCR adhésive ('collée') repose sur l'utilisation de tenons fibrés (pour leur compatibilité mécanique et chimique) et de colles composites 'dual' (pour assurer une polymérisation complète et une adhésion forte)."
      },
      {
        questionText: "Les tenons fibrés sont collés à l'aide de :",
        options: [
          "Ciment Verre-ionomère",
          "Composite photo-polymérisable",
          "Ciment à l'oxyphosphate de zinc",
          "D'hydroxyde de calcium",
          "Composite dual"
        ],
        correctOptionIndexes: [4],
        explanation: "Le collage des tenons fibrés nécessite un composite 'dual'. Sa double polymérisation (chimique et lumineuse) est indispensable pour garantir le durcissement de la colle dans la partie profonde du canal radiculaire, où la lumière de la lampe ne peut pénétrer."
      }
    ]
  },
  {
    title: "Dentisterie Préventive et ICDAS",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Selon le concept médical préventif :",
        options: [
          "Les restaurations usagées sont remplacées systématiquement",
          "Les restaurations usagées peuvent être réparées",
          "La reprise des restaurations se fait après réduction du RCI",
          "Les tissus déminéralisés sont présumés infectés",
          "Les tissus déminéralisés sont présumés reminéralisables"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La dentisterie moderne privilégie la réparation des restaurations plutôt que leur remplacement systématique. Toute intervention restauratrice ne doit se faire qu'après avoir contrôlé le risque carieux individuel (RCI). Enfin, un tissu déminéralisé (tache blanche) n'est pas forcément cavitaire et est considéré comme potentiellement reminéralisable."
      },
      {
        questionText: "La classification ICDAS :",
        options: [
          "Est une classification topographique",
          "Est une classification visuelle",
          "Est une classification basée sur des signes radiographiques",
          "Prend en considération les stades et les sites",
          "Prend en considération les sites de cariosensibilité"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ICDAS (International Caries Detection and Assessment System) est un système de classification standardisé basé uniquement sur l'inspection visuelle de la surface de la dent (sèche ou humide) pour détecter et évaluer la sévérité des lésions carieuses."
      },
      {
        questionText: "La dentisterie préventive :",
        options: [
          "Est le synonyme de la dentisterie micro-invasive",
          "Est un ensemble de moyens qui évite l'expansion de la carie",
          "Est un ensemble de moyens thérapeutiques",
          "Est un ensemble de moyens préventifs",
          "A pour objectif d'éviter l'apparition de la carie"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La dentisterie préventive englobe toutes les stratégies et actions visant à prévenir l'apparition de nouvelles caries, à stopper ou ralentir l'expansion des lésions existantes, et à éviter les récidives."
      },
      {
        questionText: "Le code 0 selon l'ICDAS :",
        options: [
          "Correspond à une déminéralisation superficielle de l'émail",
          "Correspond à des lésions non cavitaires",
          "Se manifeste par l'apparition du white-spot",
          "Se manifeste par l'apparition du brown-spot",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Le code 0 de la classification ICDAS correspond à une surface dentaire parfaitement saine, sans aucun signe visible de déminéralisation ou de carie."
      },
      {
        questionText: "La rupture localisée de l'émail sans exposition dentinaire :",
        options: [
          "Correspond au code 2 selon la classification ICDAS",
          "Correspond au code 3 selon la classification ICDAS",
          "Correspond au code 4 selon la classification ICDAS",
          "Correspond au code 5 selon la classification ICDAS",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Le code ICDAS 3 est défini comme une micro-cavitation, c'est-à-dire une perte localisée de la surface de l'émail due à la carie, mais sans que la dentine sous-jacente ne soit visible."
      },
      {
        questionText: "Quels sont les principes de base de la dentisterie moderne ?",
        options: [
          "Principe d'économie tissulaire",
          "Principe de fluoration excessive",
          "Principe d'adhésion",
          "Principe de bio-intégration",
          "Principe d'application systématique de vernis fluoré"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentisterie moderne repose sur des concepts clés : préserver au maximum les tissus dentaires sains (économie tissulaire), utiliser des matériaux qui se lient chimiquement ou micromécaniquement à la dent (adhésion) et sont bien tolérés par l'organisme (bio-intégration)."
      },
      {
        questionText: "Quels sont les effets des fluorures topiques sur la prévention de la carie dentaire ?",
        options: [
          "Inhibent l'activité des bactéries du biofilm",
          "Arrêtent le processus de minéralisation",
          "Favorisent la formation de dentine tertiaire",
          "Rendent l'émail moins soluble à l'acide",
          "Arrêtent la progression de la carie"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Les fluorures topiques agissent de plusieurs manières : ils réduisent le métabolisme acide des bactéries de la plaque, ils favorisent la reminéralisation de l'émail déminéralisé et le rendent plus résistant aux futures attaques acides, ce qui peut stopper la progression d'une lésion carieuse débutante."
      },
      {
        questionText: "Quelles sont les indications du scellement prophylactique des puits et fissures dentaires à l'aide de résines de scellement ?",
        options: [
          "Les dents présentant des lésions carieuses occlusales",
          "Une mauvaise hygiène bucco-dentaire",
          "Les sillons occlusaux profonds",
          "Des patients à risque carieux modéré ou sévère",
          "Des dents en cours d'éruption"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le scellement de sillons est une mesure préventive indiquée chez les patients à risque carieux, particulièrement sur les molaires présentant des sillons profonds et anfractueux où la plaque peut facilement s'accumuler et être difficile à nettoyer."
      },
      {
        questionText: "La classification ICDAS est basée sur des signes :",
        options: [
          "Visuels",
          "Radiographiques",
          "Visuels et radiographiques",
          "À visée thérapeutique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "L'ICDAS est un système de détection et d'évaluation des caries qui se base exclusivement sur l'observation clinique visuelle de la dent."
      },
      {
        questionText: "Le code/score 4 de la classification ICDAS correspond :",
        options: [
          "À une rupture localisée de l'émail sans exposition dentinaire",
          "À une déminéralisation du 1/3 externe de la dentine",
          "À une déminéralisation limitée à la moitié externe de l'émail",
          "À un changement visible de l'émail après séchage",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Le code 4 de l'ICDAS signale une étape plus avancée de la carie : une ombre ou une décoloration de la dentine est visible à travers un émail apparemment intact, indiquant que la déminéralisation a atteint la dentine."
      },
      {
        questionText: "Les lésions carieuses du site 2 stade 2 sont traitées par :",
        options: [
          "Un scellement au CVI",
          "Une infiltration avec la résine ICON",
          "Une mini-préparation et obturation au composite",
          "Une technique de reminéralisation",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Une lésion Site 2 (proximale) Stade 2 (atteinte dentinaire modérée) selon la classification Si/Sta a dépassé le stade de la reminéralisation. Elle nécessite une intervention a minima, comme une préparation en tunnel ou une mini-cavité verticale, suivie d'une obturation au composite."
      },
      {
        questionText: "Les dentifrices :",
        options: [
          "Sont tous à base de fluorures de sodium",
          "Leur concentration varie entre 1000 et 1500 ppm",
          "Sont utilisés par voie systémique pour la reminéralisation des lésions carieuses initiales",
          "Sont utilisés par voie topique pour la reminéralisation des lésions amélaires initiales",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Les dentifrices sont un moyen de fluoration topique (appliqué localement) qui favorise la reminéralisation des lésions d'émail débutantes. Ils existent avec différents types de fluor et leurs concentrations varient (en dessous et au-dessus de 1500 ppm)."
      },
      {
        questionText: "Les gels fluorés sont :",
        options: [
          "Des concentrés de fluorures dans une base de résine",
          "Très adhérents aux surfaces dentaires",
          "Utilisés à domicile à une faible concentration",
          "Indiqués à raison de deux fois par an en denture mixte si le RCI est élevé",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Les gels fluorés peuvent être utilisés par le patient à domicile, généralement à des concentrations plus faibles, en complément du brossage. Les vernis fluorés, et non les gels, sont des concentrés de fluor dans une base de résine."
      },
      {
        questionText: "Le scellement thérapeutique :",
        options: [
          "Est indiqué pour les lésions carieuses initiales des faces vestibulaires",
          "Est indiqué pour les lésions carieuses initiales des faces proximales",
          "Consiste en l'infiltration d’une résine dans les porosités de la dentine",
          "Est indiqué pour les lésions carieuses initiales des faces occlusales",
          "Utilise un concentré de fluorure"
        ],
        correctOptionIndexes: [3],
        explanation: "Le scellement thérapeutique est indiqué pour les lésions carieuses non cavitaires au niveau des puits et sillons (faces occlusales), correspondant aux codes ICDAS 1 ou 2. Il consiste à appliquer une résine de scellement pour stopper la progression de la carie."
      },
      {
        questionText: "Les vernis fluorés :",
        options: [
          "Sont utilisés à l'aide d'une porte-empreinte au cabinet",
          "Sont appliqués au cabinet par le médecin-dentiste",
          "Peuvent être utilisés à domicile",
          "Sont indiqués à raison de 4 fois par an chez l'enfant à RCI élevé",
          "Sont des fluorures administrés par voie systémique"
        ],
        correctOptionIndexes: [1],
        explanation: "Les vernis fluorés ont une concentration élevée en fluor et leur application est réservée au cabinet dentaire, réalisée par le praticien. Ils sont appliqués directement sur la dent à l'aide d'un petit pinceau."
      },
      {
        questionText: "L'infiltration résineuse :",
        options: [
          "Est indiquée pour les lésions carieuses initiales des puits et sillons des faces occlusales",
          "Consiste en l'infiltration d’une résine de haute viscosité à travers les porosités de l'émail déminéralisé",
          "Permet de créer une véritable barrière de surface contre la pénétration des bactéries",
          "Est indiquée uniquement pour les dents permanentes",
          "Est indiquée pour les lésions initiales situées sur les faces lisses et proximales des dents"
        ],
        correctOptionIndexes: [4],
        explanation: "L'infiltration résineuse (technique ICON) est une approche de micro-dentisterie qui utilise une résine de très faible viscosité pour pénétrer et combler les porosités d'une lésion carieuse initiale non cavitaire (tache blanche), principalement sur les faces lisses et proximales."
      },
      {
        questionText: "Le scellement prophylactique :",
        options: [
          "Est une thérapeutique réservée aux lésions de site 1",
          "Est une thérapeutique réservée à toutes les lésions de stade 1",
          "Est une thérapeutique réservée à l'enfant",
          "Est une thérapeutique non invasive",
          "Peut être réalisé avec un CVI"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Le scellement prophylactique est une mesure préventive non invasive qui consiste à obturer les puits et sillons sains mais à risque. Les matériaux utilisés peuvent être des résines de scellement (sealants) ou des ciments verres ionomères (CVI)."
      },
      {
        questionText: "Dans la classification de Si/Sta, les techniques de reminéralisation sont indiquées :",
        options: [
          "Exclusivement au stade 0",
          "Au stade 0 et 1",
          "Tous les cas de stade 1 - site 1",
          "Au stade 1 - site 2",
          "Au stade 1 - site 3"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les techniques de reminéralisation (fluor, infiltration) sont indiquées pour les lésions de stade 1 (lésion initiale sans cavitation) quel que soit le site (occlusal, proximal ou cervical)."
      },
      {
        questionText: "La micro-dentisterie :",
        options: [
          "Traite la lésion carieuse à un stade précoce",
          "A pour principe l’extension préventive des cavités",
          "A pour principe l'économie tissulaire",
          "A pour but la préservation de l'intégrité tissulaire",
          "Repose sur la réalisation de mini-préparations"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La micro-dentisterie (ou dentisterie a minima) est une approche de prévention tertiaire qui s'oppose à l'extension préventive. Elle vise à traiter les lésions débutantes en préservant un maximum de tissu dentaire sain, grâce à des préparations de très petite taille."
      },
      {
        questionText: "Le code 1, selon la classification ICDAS, correspond à / au :",
        options: [
          "Une surface amélaire saine",
          "Une surface amélaire déminéralisée",
          "Un changement visuel de l'émail après séchage",
          "Un changement distinct de l’émail",
          "Stade de la tache blanche"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Le code 1 de l'ICDAS décrit la première modification visuelle de l'émail (tache blanche), qui n'est visible que sur une surface séchée. Il indique une déminéralisation active mais sans perte de structure (lésion non cavitaire)."
      },
      {
        questionText: "Les apports de fluorures pour la reminéralisation de la lésion carieuse se font par :",
        options: [
          "Dentifrices",
          "Lait",
          "Gels",
          "Eau fluorée",
          "Vernis"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La reminéralisation des lésions existantes est principalement obtenue par des apports topiques de fluorures, c'est-à-dire appliqués directement sur la dent. Les dentifrices, les gels et les vernis sont les moyens les plus courants."
      },
      {
        questionText: "L'évaluation du risque carieux individuel est basée sur :",
        options: [
          "La présence de lésions actives",
          "Une hygiène orale déficiente",
          "La quantité de salive",
          "Le pH de la salive",
          "L'absence de brossage"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "L'évaluation du risque carieux individuel (RCI) prend en compte plusieurs facteurs. La présence de lésions carieuses actives, une accumulation importante de plaque dentaire et une hygiène bucco-dentaire insuffisante (absence de brossage) sont des indicateurs majeurs d'un risque élevé."
      },
      {
        questionText: "La reminéralisation d'une lésion carieuse :",
        options: [
          "Est indiquée uniquement pour les lésions des surfaces lisses",
          "Est indiquée uniquement dans le cas des sillons anfractueux",
          "Est assurée par l'absorption de fluorures systémiques",
          "S'applique aussi aux dents temporaires",
          "N'est pas limitée aux surfaces occlusales"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La reminéralisation peut être tentée sur tout type de surface (lisse, occlusale) et sur les dents temporaires comme sur les dents permanentes, tant que la lésion est non cavitaire. L'action des fluorures systémiques est préventive et non curative."
      },
      {
        questionText: "La prévention tertiaire consiste en :",
        options: [
          "La suppression des facteurs de risque",
          "La reminéralisation des lésions précoces",
          "La décontamination du SM",
          "La restauration des lésions dentinaires",
          "La mise en place de contrôles"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La prévention tertiaire intervient lorsque la lésion est cavitaire. Elle consiste à restaurer la dent de la manière la plus conservatrice possible (micro-dentisterie) et à assurer un suivi régulier pour éviter les récidives."
      },
      {
        questionText: "Le scellement des puits et fissures est indiqué :",
        options: [
          "Sur les molaires permanentes affectées par une MIH",
          "Chez les enfants avec un risque carieux élevé",
          "Dans le cas de lésions dentinaires au niveau des molaires",
          "Sur les molaires saines si les sillons sont anfractueux",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le scellement est indiqué pour protéger les sillons à risque : chez un enfant à risque carieux élevé, sur une molaire saine mais avec des sillons profonds, ou sur une molaire fragilisée par une hypominéralisation (MIH)."
      },
      {
        questionText: "En dentisterie préventive, les fluorures systémiques :",
        options: [
          "Peuvent être apportés par le lait ou l'eau",
          "Sont administrés par voie orale et ingérés",
          "Sont administrés par voie orale et non ingérés",
          "Peuvent être apportés par les gommes à mâcher",
          "Peuvent être apportés par les dentifrices"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les fluorures systémiques sont ceux qui sont ingérés et agissent pendant la formation de la dent. Les sources principales sont l'eau de boisson fluorée, le sel, le lait ou les compléments sous forme de gouttes ou comprimés."
      },
      {
        questionText: "Le vernis fluoré :",
        options: [
          "Est utilisé en fluoration systémique",
          "Est utilisé en fluoration topique",
          "Est un concentré de fluorures dans une base résine",
          "Son action est optimisée par son excellente adhérence aux surfaces dentinaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le vernis fluoré est un agent de fluoration topique. Il s'agit d'une laque très concentrée en fluor qui adhère à la surface de la dent, permettant une libération prolongée et efficace des ions fluor."
      },
      {
        questionText: "La cavité tunnel :",
        options: [
          "Est indiquée dans les cavités de Classe I",
          "Est indiquée dans les cavités de Classe II",
          "Permet la conservation du point de contact",
          "Permet de préserver la crête marginale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La préparation en tunnel est une technique ultra-conservatrice pour traiter les caries proximales (Classe II) débutantes. Elle permet d'accéder à la carie par la face occlusale tout en préservant la crête marginale et le point de contact."
      },
      {
        questionText: "En dentisterie préventive, les fluorures topiques :",
        options: [
          "Sont apportés par voie orale et non ingérés",
          "Sont apportés par les dentifrices pharmaceutiques et cosmétiques",
          "Sont apportés uniquement par les dentifrices pharmaceutiques",
          "Sont indiqués chez les enfants à RCI élevé seulement",
          "Favorisent la reminéralisation des lésions initiales"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les fluorures topiques sont appliqués localement en bouche (et non avalés) via les dentifrices, bains de bouche, etc. Leur rôle principal est de favoriser la reminéralisation de l'émail et de le rendre plus résistant aux acides."
      },
      {
        questionText: "L'aéro-abrasion fait appel à :",
        options: [
          "Un jet de poudre d'alumine",
          "Des inserts diamantés",
          "Des fraises diamantées",
          "Des particules d'alumine d'une taille de 27 microns",
          "Aucune réponse juste"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'aéro-abrasion est une technique de préparation a minima qui utilise un jet d'air à haute pression projetant de fines particules d'oxyde d'aluminium (généralement de 27 à 50 microns) pour éliminer le tissu dentaire."
      },
      {
        questionText: "Le traitement non invasif a pour but :",
        options: [
          "De traiter la lésion carieuse",
          "De stopper la progression de la lésion carieuse",
          "D'appliquer des vernis fluorés",
          "D'intercepter la lésion carieuse"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les traitements non invasifs (prévention primaire et secondaire) visent à agir sur les lésions avant qu'elles ne deviennent cavitaires. L'objectif est de stopper leur progression et de favoriser la reminéralisation, notamment par l'application de produits fluorés comme les vernis."
      },
      {
        questionText: "Le traitement invasif :",
        options: [
          "Utilise des moyens préventifs",
          "Est indiqué dans les lésions cavitaires",
          "Utilise la dentisterie à minima",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le traitement invasif (prévention tertiaire) devient nécessaire lorsque la lésion est cavitaire. L'approche moderne privilégie la dentisterie à minima (ou micro-dentisterie), qui consiste à éliminer uniquement le tissu infecté et à restaurer la cavité."
      },
      {
        questionText: "La Carie de la Petite Enfance (CPE) :",
        options: [
          "Le traitement invasif consiste en la mise en place d'un CVI",
          "Les incisives maxillaires sont restaurées au composite",
          "Les CPP trouvent leurs indications",
          "La prise en charge débute par l'arrêt de l'habitude néfaste",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La prise en charge de la CPE est multifactorielle. Elle commence par la correction des habitudes alimentaires (arrêt du biberon sucré). Pour les restaurations, le Ciment Verre Ionomère (CVI) est souvent utilisé pour sa libération de fluor, et les couronnes préformées (CPP) sont indiquées pour les dents très délabrées."
      },
      {
        questionText: "Le CVI :",
        options: [
          "Sa mise en place nécessite l'utilisation d'un conditionneur",
          "Sa mise en place nécessite une désinfection à l'NaOCl à 1,5%",
          "Est indiqué chez l'enfant à RCI élevé",
          "Est un matériau de restauration définitive"
        ],
        correctOptionIndexes: [2],
        explanation: "Le Ciment Verre Ionomère (CVI) est particulièrement indiqué chez les patients à haut risque carieux, comme les enfants, en raison de sa capacité à libérer des ions fluor. Il peut être utilisé comme restauration temporaire ou semi-définitive."
      },
      {
        questionText: "La CPP :",
        options: [
          "Est indiquée après une pulpotomie",
          "Est indiquée après un traitement endodontique",
          "Sa mise en place nécessite une préparation a minima",
          "Est scellée avec un eugénate"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La Couronne Pédodontique Préformée (CPP) est une restauration de choix pour les dents temporaires très délabrées, notamment après un traitement pulpaire (pulpotomie ou pulpectomie). Sa pose nécessite une préparation périphérique minimale, et elle est scellée avec un ciment sans eugénol (comme un CVI)."
      }
    ]
  },
  {
    title: "Lésions Iatrogènes et Perforations",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Parmi les lésions suivantes, laquelle n'est pas d'origine iatrogène ?",
        options: [
          "Sensibilité post-opératoire",
          "Nécrose pulpaire",
          "Érosion suite à un reflux gastro-œsophagien (RGO)",
          "Exposition pulpaire",
          "Blessures gingivales"
        ],
        correctOptionIndexes: [2],
        explanation: "Une lésion iatrogène est un dommage non intentionnel causé par un acte médical. L'érosion dentaire due à un reflux gastrique est liée à une pathologie interne du patient et n'est pas causée par le praticien."
      },
      {
        questionText: "La sensibilité post-opératoire :",
        options: [
          "Peut être due à une photopolymérisation insuffisante du composite",
          "Est plus fréquente lorsque la restauration est de faible étendue",
          "Peut être due à une contraction de prise du composite et à la formation de hiatus",
          "Peut être due à l'absence d'un fond protecteur sous un amalgame",
          "Touche plus les dents postérieures que les dents antérieures"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La sensibilité post-opératoire est multifactorielle. Elle peut être causée par le stress de contraction du composite, une polymérisation incomplète, ou le manque d'isolation sous un amalgame. Elle est plus fréquente sur les dents postérieures et pour les restaurations volumineuses."
      },
      {
        questionText: "La prévention des expositions pulpaires iatrogènes consiste à :",
        options: [
          "Procéder à un curetage dentinaire allant du fond de la cavité vers la périphérie",
          "Évaluer radiographiquement l'épaisseur de dentine résiduelle (EDR)",
          "Contrôler visuellement et tactilement les zones dentinaires altérées ou saines lors du fraisage",
          "Avoir une bonne connaissance des épaisseurs des tissus dentaires coronaires",
          "Réaliser un curetage dentinaire à vitesse élevée"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Pour éviter une exposition pulpaire, il faut évaluer la profondeur de la carie sur une radio, bien connaître l'anatomie dentaire, et procéder au curetage avec précaution (de la périphérie vers le centre, à faible vitesse), en contrôlant constamment la dureté de la dentine."
      },
      {
        questionText: "Les facteurs limitant les conséquences iatrogènes des préparations peuvent être :",
        options: [
          "Formation de la boue dentinaire (smear layer)",
          "Formation de dentine déminéralisée",
          "Épaisseur de dentine résiduelle (EDR) importante",
          "Épaisseur de dentine résiduelle (EDR) très faible",
          "Formation de dentine sclérotique"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Plusieurs facteurs naturels peuvent protéger la pulpe : une épaisseur de dentine résiduelle importante (> 2mm), la formation de dentine sclérotique (plus dense), et la présence de la boue dentinaire (smear layer) qui obture les tubuli."
      },
      {
        questionText: "Les pulpites iatrogènes :",
        options: [
          "Sont le plus souvent de caractère infectieux",
          "Peuvent survenir à tout moment d'une intervention à visée diagnostique",
          "Peuvent avoir des conséquences irréversibles sur l'organe dentaire",
          "Résultent d'une pratique agressive ou du choix de matériaux inappropriés",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les pulpites iatrogènes sont des inflammations pulpaires causées par l'acte thérapeutique lui-même (fraisage trop agressif, produit irritant). Elles sont d'origine physique ou chimique, non infectieuse, et peuvent malheureusement conduire à une nécrose pulpaire (conséquence irréversible)."
      },
      {
        questionText: "L'élévation de température au cours d'un fraisage est liée :",
        options: [
          "À la capacité de coupe de la fraise",
          "Au sens de rotation de la fraise",
          "À la vitesse de rotation",
          "À la forme de la fraise",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La chaleur générée par le fraisage dépend de la friction. Une fraise usée, une vitesse de rotation excessive ou un sens de rotation incorrect augmentent cette friction et donc l'échauffement potentiellement néfaste pour la pulpe."
      },
      {
        questionText: "Les perforations du plancher :",
        options: [
          "Surviennent au cours de la recherche des entrées canalaires",
          "Mettent en communication l'endodonte et le parodonte",
          "Ce sont des perforations sous forme de stripping",
          "Peuvent être apicales ou coronaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une perforation du plancher pulpaire est un accident qui survient souvent lors de la création de la cavité d'accès ou de la recherche des orifices des canaux. Elle crée une communication artificielle entre le système endodontique et le parodonte (l'os et le ligament autour de la racine)."
      },
      {
        questionText: "Le traitement des perforations se fait :",
        options: [
          "Avec le MTA",
          "Avec la Biodentine",
          "À l'oxyde de zinc-eugénol",
          "À la gutta-percha",
          "À l'amalgame d'argent"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le traitement moderne des perforations repose sur l'utilisation de matériaux bioactifs et étanches. Le MTA (Mineral Trioxide Aggregate) et la Biodentine sont les deux matériaux de choix pour leurs excellentes propriétés de biocompatibilité et d'étanchéité."
      }
    ]
  },
  {
    title: "Adhésion et Techniques Sandwich",
    subject: "oce-y4",
    questions: [
      {
        questionText: "L'effet du mordançage au niveau dentinaire est :",
        options: [
          "De préserver la boue dentinaire (smear layer)",
          "Déminéraliser la dentine péritubulaire et élargir les canalicules dentinaires",
          "Déminéraliser la dentine intertubulaire et exposer les fibres de collagène",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le mordançage à l'acide phosphorique élimine la boue dentinaire, déminéralise la surface de la dentine (péri et intertubulaire) sur quelques microns, ce qui expose le réseau de fibres de collagène et ouvre les entrées des tubuli."
      },
      {
        questionText: "L'application du primer au niveau de la dentine aura pour effet de :",
        options: [
          "Diminuer la mouillabilité de la dentine",
          "Empêcher le collapsus des fibres de collagène",
          "Faciliter la pénétration de la résine liquide",
          "Éliminer la boue dentinaire (smear layer)",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le primer, composé de solvant et de monomères hydrophiles, a pour rôle de réhydrater le réseau de collagène exposé (pour éviter son affaissement ou collapsus) et de servir d'intermédiaire compatible entre la dentine humide et la résine adhésive hydrophobe."
      },
      {
        questionText: "Parmi les caractéristiques de la boue dentinaire :",
        options: [
          "Source d'infection sous les restaurations",
          "Constitue une barrière protectrice contre la diffusion des fluides à travers les tubuli oblitérés",
          "Augmente l'énergie de surface",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La boue dentinaire (smear layer) est une couche de débris créée lors du fraisage. Elle peut abriter des bactéries (source d'infection) mais elle oblitère aussi les tubuli, agissant comme une barrière qui diminue la perméabilité dentinaire. Son adhérence à la dentine est faible."
      },
      {
        questionText: "L'adhésion du ciment aux verres ionomères (CVI) :",
        options: [
          "Est une adhésion micromécanique",
          "Est une adhésion chimique",
          "Nécessite un traitement des surfaces dentaires à l'acide orthophosphorique",
          "Ne nécessite pas d'agent de liaison",
          "Implique des échanges ioniques au niveau de l'interface CVI/surface dentaire"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Les CVI ont une propriété unique d'adhésion chimique intrinsèque aux tissus dentaires. Cette adhésion se fait par des liaisons ioniques entre l'acide polyacrylique du ciment et le calcium de la dent. Ils ne nécessitent donc pas de système adhésif complexe."
      },
      {
        questionText: "Dans les systèmes adhésifs :",
        options: [
          "Les SAM permettent de réduire le risque de sensibilité postopératoire",
          "Les SAM ont une forte valeur d'adhérence sur l'émail comparée à celle des systèmes M&R",
          "Le système M&R est le système de choix pour les restaurations antérieures",
          "Les SAM visent à stabiliser la boue dentinaire",
          "Les M&R visent à éliminer la boue dentinaire"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Les systèmes auto-mordançants (SAM) ne rincent pas l'acide et n'éliminent pas complètement la boue dentinaire, ce qui réduit le risque de sensibilités. Les systèmes à mordançage-rinçage (M&R) éliminent la boue dentinaire et offrent une meilleure adhésion à l'émail, ce qui en fait un choix privilégié pour l'esthétique en secteur antérieur."
      },
      {
        questionText: "La technique Stamp :",
        options: [
          "Est une technique dite « bulk-fill »",
          "Est une technique de restauration des caries cervicales",
          "Consiste en la prise d'empreinte de l'anatomie occlusale",
          "Est une technique sandwich ouvert",
          "Est une technique de restauration indirecte"
        ],
        correctOptionIndexes: [2],
        explanation: "La 'Stamp technique' (technique du tampon) est une méthode de restauration directe qui consiste à prendre une empreinte de la morphologie occlusale saine de la dent avant de curer la carie. Cette empreinte (le 'stamp') est ensuite utilisée pour modeler la couche finale de composite et reproduire parfaitement l'anatomie initiale."
      },
      {
        questionText: "Un système adhésif :",
        options: [
          "Comprend la résine adhésive",
          "Comprend un acide",
          "Comprend une résine adhésive adhérant mécaniquement à l'émail",
          "Comprend un primer",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Un système adhésif moderne est un ensemble de produits qui comprend généralement un acide (pour le mordançage), un primer (pour l'imprégnation de la dentine) et une résine adhésive (pour la liaison micromécanique et la couche de collage)."
      },
      {
        questionText: "La couche hybride :",
        options: [
          "Est formée grâce à l'action du primer qui empêche le collapsus des fibres de collagène",
          "Est formée de fibres de collagène imprégnées de primer et de la résine adhésive",
          "Les tags résineux constituent l'interphase de collage des résines composites aux surfaces dentaires",
          "Ne sera de bonne qualité que si le séchage est fait sans asséchage",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La couche hybride est la structure clé de l'adhésion à la dentine. Elle correspond à l'interdiffusion de la résine (primer + adhésif) au sein du réseau de collagène exposé par le mordançage. Les 'tags' sont les prolongements de résine dans les tubuli. Un séchage trop poussé fait s'effondrer le collagène et empêche une bonne hybridation."
      },
      {
        questionText: "Le système adhésif avec mordançage préalable :",
        options: [
          "Est appelé aussi SAM",
          "Ne peut s'appliquer qu'en 3 temps",
          "S'applique en un seul temps",
          "Ne nécessite pas d'application d'acide ortho-phosphorique au préalable",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Le système adhésif avec mordançage préalable est appelé M&R (Mordançage et Rinçage). Il existe en versions à 2 ou 3 temps (M&R2, M&R3). Il nécessite, par définition, une étape de mordançage à l'acide phosphorique qui est ensuite rincée."
      },
      {
        questionText: "Le Primer est :",
        options: [
          "Responsable de l'adhésion micromécanique à l'émail",
          "Responsable de l'adhésion micromécanique à la dentine",
          "Responsable de l'adhésion chimique à la dentine",
          "Une molécule hydrophile",
          "Une molécule hydrophobe"
        ],
        correctOptionIndexes: [2],
        explanation: "Le primer est une molécule bifonctionnelle avec une extrémité hydrophile (qui se lie à la dentine humide) et une extrémité hydrophobe (compatible avec la résine adhésive). Il assure ainsi la transition chimique entre ces deux milieux."
      },
      {
        questionText: "Les thérapeutiques restauratrices adhésives directes :",
        options: [
          "Utilisent la stratification des résines composites fluides",
          "Utilisent la stratification des résines composites de restauration",
          "N'utilisent dans les procédures cliniques que le système M&R",
          "N'utilisent dans les procédures cliniques que les systèmes adhésifs SAM",
          "Sont réalisées en plusieurs séances"
        ],
        correctOptionIndexes: [1],
        explanation: "Les restaurations directes en composite sont réalisées en une seule séance. La technique la plus courante est la stratification, qui consiste à appliquer et polymériser le composite de restauration par couches successives pour reproduire l'anatomie et la teinte de la dent, tout en contrôlant le stress de polymérisation."
      },
      {
        questionText: "La stratification des résines composites au niveau antérieur :",
        options: [
          "Utilise le guide palatin",
          "Utilise le guide en résine",
          "Utilise une seule couche de composite",
          "Nécessite systématiquement un ancrage radiculaire",
          "Ne nécessite aucune préparation au niveau de l'émail"
        ],
        correctOptionIndexes: [0],
        explanation: "Pour les restaurations antérieures complexes (comme les fractures de classe IV), on utilise souvent une clé (ou guide) en silicone réalisée sur un modèle en cire (wax-up). Cette clé, positionnée en palatin, sert de guide pour monter la première couche de composite et recréer la forme de la face palatine."
      },
      {
        questionText: "La restauration adhésive :",
        options: [
          "À la résine composite, la réaction entre l'interphase de collage et la résine composite est chimique",
          "Lorsqu'elle est indirecte, ne nécessite pas la prise d'empreinte",
          "Lorsqu'elle est directe, concerne les microcavités ou les cavités de moyenne étendue",
          "Sur les dents postérieures, les cavités proximales peuvent être restaurées par la technique sandwich",
          "La technique sandwich signifie l'utilisation associée de l'hydroxyde de calcium et de la résine composite"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les restaurations directes sont idéales pour les cavités de petite à moyenne étendue. Pour les cavités proximales profondes sur dents postérieures, la technique sandwich (base en CVI recouverte de composite) est une option intéressante."
      },
      {
        questionText: "La technique sandwich :",
        options: [
          "Utilise un CVI associé à un composite dual",
          "Utilise un CVI conventionnel associé à un CVIMAR",
          "Utilise un composite hybride avec un CVI",
          "Est dite ouverte lorsqu'elle est réalisée sur la face occlusale",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La technique 'sandwich' consiste à superposer deux matériaux : une base de Ciment Verre Ionomère (CVI) pour remplacer la dentine profonde, recouverte par une restauration en résine composite hybride pour remplacer l'émail."
      },
      {
        questionText: "La technique sandwich ouvert nécessite l'utilisation :",
        options: [
          "D'un CVIMAR qui est placé sur la paroi cervicale",
          "D'un CVIMAR qui est placé sur la paroi pulpo-axiale",
          "D'un CVIMAR qui est au-dessous du point de contact",
          "D'un CVIMAR qui est au-dessus du point de contact",
          "D'un matériau non fluoré"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Dans la technique du sandwich 'ouvert', le CVI (souvent un CVIMAR) est placé au niveau du fond de la boîte proximale (paroi cervicale) et reste exposé au milieu buccal dans l'embrasure. Il doit impérativement être positionné sous le futur point de contact, qui sera restauré en composite."
      },
      {
        questionText: "L'inlay-onlay sont deux modes de restauration partielles indiqués au niveau :",
        options: [
          "Des dents postérieures dépulpées",
          "Des dents antérieures pulpées",
          "Des dents postérieures pulpées",
          "Des dents antérieures dépulpées",
          "Des dents antérieures et postérieures vivantes"
        ],
        correctOptionIndexes: [2],
        explanation: "Les inlays et onlays sont des restaurations partielles collées (RPC) principalement indiquées pour restaurer des pertes de substance de volume moyen à grand sur les dents postérieures vivantes (pulpées)."
      },
      {
        questionText: "La technique sandwich utilise :",
        options: [
          "Un verre ionomère - un composite fluide",
          "Un composite fluide - un composite",
          "Un verre ionomère - un composite",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Le principe de la technique sandwich est de combiner les avantages de deux matériaux : le Ciment Verre Ionomère (CVI) en base pour son adhérence chimique et son relargage de fluor, et la résine composite en surface pour ses propriétés mécaniques et esthétiques."
      }
    ]
  },
  {
    title: "Urgences Endodontiques",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Parmi les objectifs du traitement d'urgence en OCE :",
        options: [
          "Soulager la douleur du patient (objectif principal)",
          "Stopper l'évolution d'un processus pathologique",
          "Prévenir les complications potentielles",
          "Le retour le plus proche et le plus rapidement possible à la normalité",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement d'urgence vise avant tout à soulager la douleur du patient, mais aussi à arrêter le processus inflammatoire ou infectieux en cours pour éviter son aggravation et l'apparition de complications."
      },
      {
        questionText: "Le traitement d'urgence d'une pulpite irréversible consiste à :",
        options: [
          "Pratiquer après anesthésie une pulpotomie sur monoradiculée",
          "Pratiquer après anesthésie une pulpectomie sur pluriradiculée",
          "Faire un drainage",
          "Toutes les réponses sont justes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Le traitement d'urgence d'une pulpite irréversible consiste à éliminer le tissu pulpaire enflammé. La procédure de choix est la pulpectomie (retrait total) sur une dent monoradiculée, et la pulpotomie (retrait de la pulpe camérale) sur une dent pluriradiculée."
      },
      {
        questionText: "Lors d'une parodontite apicale aiguë :",
        options: [
          "La douleur est continue, lancinante et pulsatile",
          "Le traitement consiste à réaliser un drainage de la collection purulente",
          "Un traitement antibiotique et antalgique est de règle",
          "Le traitement consiste à réaliser une désinfection canalaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La parodontite apicale aiguë se caractérise par une douleur intense due à la pression dans l'os. Le traitement d'urgence consiste à drainer l'exsudat ou le pus via le canal, à désinfecter et à prescrire des antalgiques. Les antibiotiques sont souvent nécessaires."
      },
      {
        questionText: "L'urgence de catégorie III de Baume consiste à réaliser :",
        options: [
          "Une biopulpectomie",
          "Un parage plus une désinfection canalaire",
          "Un drainage",
          "Un coiffage pulpaire direct",
          "Une pulpotomie"
        ],
        correctOptionIndexes: [0],
        explanation: "La catégorie III de Baume concerne les dents vivantes nécessitant une dévitalisation (biopulpectomie) pour des raisons non pathologiques (prothétiques, iatrogènes, etc.). Le traitement consiste en l'ablation de la pulpe vivante et l'obturation canalaire."
      },
      {
        questionText: "La nécrose pulpaire peut nécessiter une intervention d'urgence quand elle est compliquée :",
        options: [
          "D'une infection périapicale chronique",
          "D'une atteinte périapicale aiguë",
          "D'un abcès alvéolaire aigu",
          "D'une atteinte périapicale chronique fistulisée",
          "D'un abcès Phoenix"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Une pulpe nécrosée est souvent asymptomatique. L'urgence survient lors d'une complication aiguë, comme une parodontite apicale aiguë, un abcès alvéolaire, ou un 'abcès Phoenix' (réactivation aiguë d'une lésion chronique préexistante)."
      }
    ]
  },
  {
    title: "Urgences Endodontiques (2)",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Traitement d'urgence sur une monoradiculée présentant une pulpite aiguë :",
        options: [
          "Le coiffage pulpaire direct",
          "La pulpotomie",
          "La pulpectomie totale",
          "Parage canalaire plus désinfection",
          "Pulpectomie plus mise en forme jusqu'au N°25"
        ],
        correctOptionIndexes: [2],
        explanation: "Sur une dent monoradiculée, le traitement d'urgence le plus efficace pour une pulpite irréversible est la pulpectomie totale, c'est-à-dire l'élimination complète du tissu pulpaire enflammé, ce qui soulage immédiatement la pression et la douleur."
      },
      {
        questionText: "Le traitement d'urgence sur une pluriradiculée présentant une pulpite aiguë associée à une parodontite apicale est :",
        options: [
          "Une pulpotomie",
          "Un pansement sédatif",
          "Une pulpectomie",
          "Une pulpectomie plus une mise en forme canalaire associée à une irrigation",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "Lorsqu'une pulpite irréversible s'accompagne d'une inflammation du ligament (pulpo-desmodontite), le traitement d'urgence doit être complet pour soulager la douleur. Il consiste à réaliser une pulpectomie totale suivie d'une préparation initiale des canaux sous irrigation pour éliminer un maximum d'irritants."
      },
      {
        questionText: "En Odontologie Conservatrice-Endodontie, les voies d'extériorisation du pus sont la voie :",
        options: [
          "Trans-canalaire",
          "Trans-ligamentaire",
          "Osseuse",
          "Dentinaire",
          "Transcutanée"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Lors d'un abcès, le pus peut s'évacuer par plusieurs chemins : à travers le canal de la dent (trans-canalaire), le long du ligament parodontal, à travers l'os (fistule), ou plus rarement, à travers la peau (transcutanée)."
      },
      {
        questionText: "Le traitement d'urgence de la parodontite apicale aiguë consiste à :",
        options: [
          "Réaliser un drainage",
          "Effectuer une mise en sous-occlusion de la dent",
          "Prescrire systématiquement une antibiothérapie",
          "Prescrire systématiquement un traitement anti-inflammatoire",
          "Réaliser une obturation canalaire au Ca(OH)2 dans la même séance"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Face à une parodontite apicale aiguë, l'urgence est de soulager la pression. Cela se fait en drainant l'exsudat (par ouverture du canal) et en meulant légèrement la dent pour la mettre en sous-occlusion, ce qui évite les contacts douloureux lors de la mastication."
      },
      {
        questionText: "Le traitement d'urgence de la pulpite irréversible consiste à :",
        options: [
          "Réaliser une pulpotomie sur une monoradiculée",
          "Administrer un antibiotique après réalisation de l'acte d'urgence",
          "Réaliser une mise en sous-occlusion de la dent",
          "Réaliser une pulpectomie du canal saignant sur une pluriradiculée lorsque l'hémostase n'est pas obtenue",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Sur une dent pluriradiculée, si une simple pulpotomie (retrait de la pulpe de la chambre) ne suffit pas à arrêter le saignement (signe d'inflammation profonde), il faut compléter le geste en réalisant une pulpectomie (retrait de la pulpe) dans le ou les canaux qui continuent de saigner."
      },
      {
        questionText: "Le traitement d'urgence de la parodontite apicale aiguë débutante :",
        options: [
          "Est une pulpectomie",
          "Est une pulpotomie",
          "Est une mise en sous-occlusion de la dent",
          "Est identique à celui de la pulpo-desmodontite",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La parodontite apicale aiguë débutante est aussi appelée pulpo-desmodontite. Son traitement d'urgence est le même : pulpectomie pour éliminer la source de l'inflammation et mise en sous-occlusion pour soulager la douleur à la percussion."
      },
      {
        questionText: "Dans le syndrome du septum :",
        options: [
          "Il n'y a pas de douleurs",
          "Les douleurs surviennent avant les repas",
          "La papille gingivale est d'aspect normal",
          "On note l'absence de point de contact interdentaire",
          "Les douleurs peuvent faire penser à une atteinte dentinaire"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Le syndrome du septum est causé par le tassement alimentaire dans une zone où le point de contact entre deux dents est absent ou défectueux. Cela provoque une inflammation douloureuse de la papille gingivale, qui peut mimer une douleur d'origine dentaire."
      },
      {
        questionText: "Le traitement d'urgence sur une pluriradiculée présentant une pulpite aiguë associée à une parodontite est :",
        options: [
          "La pulpotomie",
          "La pulpectomie",
          "Une désinfection canalaire",
          "Un traitement coronaire plus traitement radiculaire",
          "Un pansement calmant (pulperyl)"
        ],
        correctOptionIndexes: [1],
        explanation: "Lorsque l'inflammation pulpaire (pulpite) s'est étendue au ligament (parodontite), une simple pulpotomie est souvent insuffisante. Le traitement d'urgence de choix est alors la pulpectomie complète pour éliminer la totalité du tissu enflammé."
      },
      {
        questionText: "Le traitement d'urgence d'une dent immature fracturée datant de quelques mois est :",
        options: [
          "Une pulpotomie",
          "Un coiffage pulpaire direct",
          "Une thérapeutique d'apexogénèse",
          "Un traitement endodontique conventionnel",
          "Une thérapeutique d'apexification"
        ],
        correctOptionIndexes: [4],
        explanation: "Une fracture ancienne sur une dent immature a très probablement entraîné une nécrose pulpaire, stoppant le développement de la racine (apex ouvert). Le traitement indiqué est l'apexification, qui vise à induire la formation d'une barrière calcifiée à l'extrémité de la racine pour permettre son obturation."
      },
      {
        questionText: "Le traitement d'urgence d’une fracture amélo-dentinaire avec exposition pulpaire bien étendue sur dent immature consiste à réaliser :",
        options: [
          "Une contention à l'aide d'un bandeau de CVI",
          "Un coiffage pulpaire direct",
          "Un coiffage pulpaire indirect",
          "Une restauration esthétique",
          "Une pulpotomie partielle"
        ],
        correctOptionIndexes: [4],
        explanation: "Sur une dent immature avec une exposition pulpaire large ou ancienne de quelques heures, le coiffage direct a peu de chances de réussir. On réalise alors une pulpotomie partielle (technique de Cvek), qui consiste à retirer les 2 mm superficiels de la pulpe exposée avant de la coiffer pour préserver la vitalité du reste de la pulpe et permettre la poursuite de l'édification radiculaire (apexogénèse)."
      },
      {
        questionText: "Parmi les causes iatrogènes de l'atteinte septale, nous retrouvons :",
        options: [
          "La présence d’une couronne prothétique",
          "Une obturation débordante",
          "Une réparation de la lyse osseuse",
          "Un point de contact restauré",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Une atteinte septale (syndrome du septum) peut être causée par le dentiste (iatrogène) si une restauration (composite, amalgame, couronne) est débordante ou ne recrée pas un point de contact correct, ce qui entraîne un tassement alimentaire chronique."
      },
      {
        questionText: "Dans les traitements d'urgence, il y a lieu de faire :",
        options: [
          "Un drainage",
          "Une réimplantation dentaire",
          "Un composite",
          "Une médication sédative si nécessaire",
          "Une pulpotomie"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La panoplie des traitements d'urgence est large et dépend du diagnostic : drainage pour un abcès, réimplantation pour une dent expulsée, pulpotomie pour une pulpite, et prescription de médicaments pour gérer la douleur post-opératoire."
      },
      {
        questionText: "Le traitement d'urgence de la parodontite apicale aiguë :",
        options: [
          "Est le drainage de la collection purulente",
          "Un traitement antibiotique et antalgique est de règle",
          "La dent est laissée ouverte jusqu'à une séance ultérieure",
          "La dent est obturée la première séance",
          "La dent est mise en sous-occlusion"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Le protocole d'urgence classique pour un abcès apical aigu est : 1) ouvrir la dent pour drainer le pus, 2) laisser la dent ouverte pendant 24-48h pour que le drainage continue, et 3) meuler l'occlusion pour soulager la dent de toute pression masticatoire."
      },
      {
        questionText: "Les urgences endodontiques les plus souvent rencontrées sont :",
        options: [
          "La pulpite aiguë irréversible",
          "L'abcès apical aigu",
          "La perte d'un composite",
          "Fracture Amélo-Dentinaire",
          "Cellulite d'origine endodontique"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les véritables urgences endodontiques impliquant une douleur intense et/ou une infection sont principalement les pulpites irréversibles, les abcès apicaux aigus, et leur complication la plus grave, la cellulite (infection diffuse des tissus mous du visage)."
      },
      {
        questionText: "Le traitement d'urgence d'une pulpite irréversible associée à une desmodontite aiguë sur une pluriradiculée est :",
        options: [
          "Une pulpotomie cervicale",
          "Une pulpectomie totale",
          "Prescrire un anti-inflammatoire",
          "Poser un pansement sédatif",
          "Faire un drainage"
        ],
        correctOptionIndexes: [1],
        explanation: "Quand une pulpite est déjà compliquée par une inflammation du ligament (desmodontite), cela signifie que l'inflammation est sévère et étendue. Le traitement le plus efficace pour soulager complètement le patient est de réaliser une pulpectomie totale, même sur une pluriradiculée."
      },
      {
        questionText: "Le motif d'une consultation d'urgence en odontologie conservatrice-endodontie est la douleur en rapport avec un :",
        options: [
          "Processus inflammatoire (pulpite, parodontite)",
          "Échec de traitement prothétique",
          "Syndrome infectieux (abcès)",
          "Séquelles de traumatisme",
          "Traumatisme (fracture, luxation)"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les principales raisons qui amènent un patient à consulter en urgence sont une douleur intense due à une inflammation (pulpite, parodontite), une infection (abcès, cellulite) ou un traumatisme dentaire récent."
      },
      {
        questionText: "Lors d'un traitement d'urgence d'un abcès apical aigu :",
        options: [
          "Le drainage se fait par voie trans-canalaire",
          "Une médication intracanalaire à base de Ca(OH)2 est mise en place",
          "Un traitement antibiotique est systématique",
          "La dent est laissée ouverte",
          "La dent est mise en sous-occlusion"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'objectif premier face à un abcès est de drainer le pus. La voie la plus simple est d'ouvrir la chambre pulpaire (drainage trans-canalaire) et de laisser la dent ouverte pour que le drainage puisse se poursuivre, ce qui soulage la pression et la douleur."
      },
      {
        questionText: "Le coiffage pulpaire indirect est réalisé dans l'urgence d'une :",
        options: [
          "Pulpite réversible",
          "Exposition dentinaire après un traumatisme",
          "Pulpite irréversible",
          "Exposition pulpaire après un traumatisme",
          "Parodontite apicale aiguë"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le coiffage pulpaire indirect (ou coiffage dentinaire) est indiqué en urgence soit pour traiter une pulpite réversible causée par une carie profonde (en laissant une fine couche de dentine affectée), soit pour protéger une large surface de dentine exposée après un traumatisme."
      },
      {
        questionText: "Dans le cas d'une recrudescence d'une parodontite apicale chronique, le traitement d'urgence consiste à :",
        options: [
          "Ré-instrumenter le canal sous irrigation",
          "Dépasser le foramen apical avec une lime fine",
          "Laisser la dent ouverte",
          "Prescrire une antibiothérapie",
          "Mettre la dent en sous-occlusion"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "La recrudescence d'une lésion chronique (abcès Phoenix) crée une forte pression périapicale. L'acte d'urgence consiste à décompresser cette zone en passant délicatement une petite lime au-delà de l'apex pour permettre le drainage, et à soulager la dent des contraintes occlusales en la meulant légèrement (mise en sous-occlusion)."
      },
      {
        questionText: "Le traitement d'urgence d'une pulpite irréversible consiste à :",
        options: [
          "Réaliser une pulpotomie sur une monoradiculée",
          "Réaliser une pulpectomie sur une pluriradiculée",
          "Éliminer les irritants bactériens de la chambre pulpaire",
          "Mettre en place une médication sédative systématique",
          "Diminuer la surpression dans la chambre pulpaire"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "La douleur de la pulpite est due à une surpression dans la chambre pulpaire. L'urgence consiste donc à ouvrir la dent pour diminuer cette pression et à éliminer le tissu pulpaire enflammé (la source des irritants) de la chambre pulpaire (pulpotomie) ou de tout le canal (pulpectomie)."
      },
      {
        questionText: "La douleur d'origine endodontique est :",
        options: [
          "À l'origine de 95% des consultations d'urgence",
          "Due à la surpression",
          "Uniquement pulpaire",
          "Pulpaire et/ou parodontale",
          "Pulpaire et parodontale"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les douleurs d'origine endodontique, qui représentent la grande majorité des urgences dentaires, peuvent provenir de la pulpe (pulpite) ou des tissus péri-apicaux (parodontite). Leur mécanisme principal est l'augmentation de la pression à l'intérieur de ces tissus confinés."
      }
    ]
  },
  {
    title: "Traumatologie Dentaire",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Dans le cas d'une fracture radiculaire située dans le tiers apical de la racine, quel est le principal défi clinique pour le diagnostic ?",
        options: [
          "La fracture est généralement visible immédiatement après le traumatisme sur les radiographies conventionnelles",
          "La fracture radiculaire dans le tiers apical présente souvent une mobilité excessive",
          "Le test à la percussion est indolore et la fracture peut être difficile à détecter radiologiquement",
          "Le fragment coronaire est toujours extrudé, ce qui rend le diagnostic plus facile",
          "Le test de sensibilité pulpaire est immédiatement positif dans tous les cas"
        ],
        correctOptionIndexes: [2],
        explanation: "Une fracture du tiers apical est souvent non déplacée et le fragment coronaire reste stable. La dent peut donc être asymptomatique, non mobile et le trait de fracture difficile à voir sur une radio si les fragments ne sont pas écartés. C'est le traumatisme le plus favorable."
      },
      {
        questionText: "Quel est le traitement de choix pour une fracture coronaire compliquée récente chez un enfant ?",
        options: [
          "Pulpectomie immédiate et coiffage pulpaire",
          "Coiffage pulpaire direct ou pulpotomie partielle",
          "Extraction systématique de la dent",
          "Contention rigide pendant 6 semaines",
          "Antibiothérapie systématique et suivi radiographique uniquement"
        ],
        correctOptionIndexes: [1],
        explanation: "Sur une dent immature (chez un enfant), l'objectif prioritaire est de conserver la vitalité pulpaire pour permettre à la racine de finir de se former (apexogénèse). Selon la taille de l'exposition et le délai, on réalisera un coiffage pulpaire direct ou une pulpotomie partielle."
      },
      {
        questionText: "Un patient de 9 ans présente une fracture radiculaire du 1/3 moyen sur une incisive maxillaire immature. Quelle est la meilleure conduite à tenir ?",
        options: [
          "Extraction immédiate et mise en place d'un mainteneur d'espace",
          "Traitement endodontique complet suivi d'une contention prolongée",
          "Repositionnement du fragment coronaire et contention souple pendant 4 semaines",
          "Coiffage pulpaire direct et surveillance de la fermeture apicale",
          "Application de MTA pour favoriser la cicatrisation osseuse"
        ],
        correctOptionIndexes: [2],
        explanation: "En cas de fracture radiculaire au tiers moyen avec déplacement, le traitement consiste à repositionner le fragment coronaire et à le stabiliser avec une contention souple (non rigide) pendant environ 4 semaines pour permettre une cicatrisation du ligament et de l'os."
      },
      {
        questionText: "Quel facteur parmi les suivants influence le pronostic de réimplantation d'une dent expulsée ?",
        options: [
          "L'âge du patient uniquement",
          "Le temps extra-alvéolaire, le milieu de conservation, et le stade d'édification radiculaire",
          "Le type de fracture alvéolaire présente uniquement",
          "La technique de réimplantation utilisée, indépendamment du temps passé hors de l'alvéole",
          "Le type de contention utilisée après la réimplantation"
        ],
        correctOptionIndexes: [1],
        explanation: "Le succès de la réimplantation dépend de la survie des cellules du ligament parodontal sur la racine. Les trois facteurs critiques sont : le temps passé hors de la bouche (le plus court possible, idéalement < 60 min), le milieu de conservation (qui doit être humide et biocompatible), et le stade de développement de la racine (un apex ouvert sur une dent immature offre un meilleur pronostic)."
      },
      {
        questionText: "Lors d'une fracture coronaire pénétrante sur dent permanente immature vivante :",
        options: [
          "Le rétablissement de l'esthétique n'est pas recherché",
          "Le choix thérapeutique dépend de la taille d'exposition pulpaire",
          "L'objectif principal est la poursuite de l'édification radiculaire",
          "Le traitement pourra être une apexogénèse",
          "Le traitement pourra être une apexification"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'objectif majeur est de maintenir la pulpe vivante pour qu'elle continue à former la racine (apexogénèse). Le choix du traitement (coiffage direct, pulpotomie) dépendra de l'étendue de l'exposition pulpaire et du temps écoulé depuis le traumatisme."
      },
      {
        questionText: "Dans le cas de fracture coronaire amélo-dentinaire non pénétrante :",
        options: [
          "La dent peut être restaurée par collage du fragment fracturé",
          "La dent peut être restaurée à l'aide d'un composite collé",
          "Un coiffage pulpaire direct s'impose",
          "La réalisation d'un bandeau de verre ionomère est le traitement de choix",
          "Un coiffage de la plaie dentinaire est de rigueur"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "En l'absence d'exposition pulpaire, il faut d'abord protéger la dentine exposée (coiffage dentinaire ou indirect). La restauration peut ensuite se faire soit en recollant le fragment original s'il a été conservé, soit avec une résine composite."
      },
      {
        questionText: "La prise en charge des traumatismes des dents permanentes immatures avec exposition pulpaire :",
        options: [
          "L’apexogénèse est indiquée en première intention",
          "Le coiffage pulpaire direct est réalisé si l’exposition est minime depuis moins de 7 jours",
          "La pulpotomie partielle est indiquée d’emblée",
          "La technique d’apexification est conditionnée par la taille de l’exposition pulpaire",
          "La pulpotomie cervicale est indiquée en absence d’hémostase lors de la pulpotomie partielle"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "L'apexogénèse (poursuite de l'édification radiculaire) est toujours l'objectif prioritaire. Si lors d'une pulpotomie partielle, le saignement ne s'arrête pas, cela indique une inflammation plus profonde. Il faut alors passer à une pulpotomie cervicale (retrait de toute la pulpe coronaire)."
      },
      {
        questionText: "Le protocole de la réimplantation d’une dent expulsée consiste à réaliser :",
        options: [
          "Un rinçage délicat de l’alvéole avec du sérum physiologique",
          "Un curetage de l’alvéole pour éliminer le caillot sanguin",
          "Le traitement canalaire est extra-oral si le temps extra-alvéolaire à sec dépasse les 2 heures",
          "Une contention pendant 1 à 2 semaines lorsqu’il n’y a pas de fracture alvéolaire associée",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le protocole vise à être le moins traumatisant possible pour les tissus. On rince doucement l'alvéole sans la cureter. La contention doit être souple et de courte durée (1-2 semaines). Si le temps hors de la bouche a été très long, le ligament est considéré comme non viable et le traitement endodontique peut être débuté hors de la bouche."
      },
      {
        questionText: "La prise en charge des intrusions des dents permanentes matures :",
        options: [
          "La ré-éruption spontanée est possible si le déplacement est inférieur à 7 mm",
          "L'extrusion orthodontique doit être entreprise en présence de déplacement de 3 à 7 mm",
          "Une contention est indiquée pendant 4 semaines",
          "L’extrusion chirurgicale sera réalisée d'emblée lors d’un déplacement supérieur à 7 mm",
          "Le repositionnement traumatique de la dent au moyen d'une traction digitale douce peut être réalisé"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Pour une dent mature, la ré-éruption spontanée est peu probable si l'intrusion dépasse 3 mm. Pour une intrusion de 3 à 7 mm, une extrusion orthodontique est indiquée. Après repositionnement (orthodontique ou chirurgical), une contention de 4 semaines est nécessaire."
      },
      {
        questionText: "La contention en cas de traumatisme :",
        options: [
          "Maintient les dents traumatisées dans leur position physiologique",
          "Est réalisée du côté palatin pour des raisons esthétiques",
          "Nécessite un fil métallique qui sera collé en tout premier sur les dents traumatisées, puis sur les dents les plus distales",
          "Est maintenue pendant 1 à 2 semaines après la réimplantation d'une dent immature sans fracture alvéolaire associée",
          "Nécessite des étapes au laboratoire"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La contention vise à stabiliser la dent dans sa position pour permettre la cicatrisation. Elle est souvent placée en palatin. Le fil doit d'abord être collé sur les dents saines adjacentes, puis sur la dent traumatisée. Pour une réimplantation simple, une durée de 1 à 2 semaines est suffisante."
      },
      {
        questionText: "Traitement d'urgence d’une fracture coronaire avec exposition pulpaire d’une dent mature consiste à réaliser :",
        options: [
          "Une pulpotomie",
          "Coiffage pulpaire direct",
          "Coiffage pulpaire indirect",
          "Une pulpectomie dans un traitement endodontique conventionnel",
          "Une contention"
        ],
        correctOptionIndexes: [3],
        explanation: "Sur une dent mature, le potentiel de cicatrisation pulpaire est réduit et l'objectif n'est plus la croissance de la racine. En cas d'exposition pulpaire, le traitement de choix est la pulpectomie complète (traitement de canal)."
      },
      {
        questionText: "Les signes de guérison pulpaire après traitement d'une fracture coronaire pénétrante sont :",
        options: [
          "Absence de symptôme clinique",
          "Absence de pathologies intra ou péri-radiculaires",
          "Absence de réponse aux tests de sensibilité pulpaire",
          "Présence d'un pont dentinaire visible à la radiographie",
          "Présence de réponse aux tests de sensibilité pulpaire"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La réussite d'une thérapie de conservation pulpaire (apexogénèse) se traduit par l'absence de douleur, le maintien de la vitalité pulpaire (réponse positive aux tests), et des signes radiologiques de guérison comme la formation d'un pont dentinaire et l'absence de lésion apicale."
      },
      {
        questionText: "Lors d'une fracture radiculaire au niveau apical :",
        options: [
          "La dent est très mobile",
          "La dent n’est pas du tout mobile",
          "Le traitement consiste en l'extraction de la dent",
          "Le traitement consiste à faire une résection apicale",
          "Le traitement consiste en l'abstention et surveillance"
        ],
        correctOptionIndexes: [4],
        explanation: "Une fracture du tiers apical est de très bon pronostic. Le fragment coronaire est bien maintenu par l'os et est souvent stable. Dans la plupart des cas, aucun traitement n'est nécessaire, une simple surveillance clinique et radiologique suffit."
      },
      {
        questionText: "Lors d'une pulpotomie sur dent traumatisée :",
        options: [
          "L'amputation est réalisée à l'aide d'une fraise diamantée cylindrique sous irrigation",
          "L'amputation est réalisée sur une hauteur de 1 mm",
          "Apparition d'une couche d'odontoblastes après la 4ème semaine",
          "Les tests de vitalité pulpaire sont négatifs lors des contrôles",
          "Le Biodentine est également utilisé comme matériau de reconstitution temporaire"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Lors d'une pulpotomie, l'amputation se fait avec une fraise boule stérile sur environ 2 mm. La formation du pont dentinaire par les nouveaux odontoblastes commence à être visible radiologiquement après environ 4 semaines. Le Biodentine peut servir à la fois de matériau de coiffage et de restauration temporaire."
      },
      {
        questionText: "En traumatologie, le traitement d'une :",
        options: [
          "Extrusion : repositionnement par traction orthodontique",
          "Luxation latérale : repositionnement digital",
          "Intrusion sur dent permanente immature : abstention (ré-éruption spontanée)",
          "Subluxation : réaliser toujours une contention",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Luxation latérale : la dent est déplacée latéralement et doit être repositionnée manuellement. Intrusion sur dent immature : on peut attendre une ré-éruption spontanée. L'extrusion est repositionnée par pression digitale, et la subluxation ne nécessite pas toujours de contention."
      },
      {
        questionText: "La réimplantation est contre-indiquée en cas de :",
        options: [
          "Dent temporaire expulsée quel que soit le temps extra-alvéolaire",
          "Dent temporaire expulsée au stade 2",
          "Dent temporaire expulsée au stade 3",
          "Dent permanente mature expulsée depuis plus de 24h",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "La réimplantation d'une dent temporaire est toujours contre-indiquée en raison du risque d'endommager le germe de la dent permanente sous-jacente. Pour une dent permanente, un temps hors de la bouche supérieur à 24h rend le pronostic nul."
      },
      {
        questionText: "La pulpotomie partielle sur dent traumatisée :",
        options: [
          "Consiste à amputer la pulpe camérale sur une hauteur de 2 mm",
          "Est indiquée sur dent permanente mature",
          "Est indiquée si le temps entre la consultation et le traumatisme est supérieur à 3 jours",
          "Est une thérapeutique intermédiaire",
          "Induit la formation d'un pont dentinaire"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "La pulpotomie partielle (de Cvek) consiste à retirer environ 2 mm de pulpe exposée. C'est une thérapie de conservation pulpaire (intermédiaire) qui vise à induire la formation d'un pont dentinaire pour protéger la pulpe sous-jacente. Elle est indiquée sur dent immature dans les 72h suivant le traumatisme."
      },
      {
        questionText: "Le traitement d'une dent à la suite d'une luxation latérale consiste en :",
        options: [
          "Un repositionnement digital de la dent dans sa position alvéolaire initiale",
          "Une réimplantation",
          "Il se fera sous anesthésie",
          "Sera obligatoirement suivi d'une contention",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Une dent luxée latéralement doit être débloquée de sa position et repositionnée manuellement dans son alvéole. Ce geste, souvent douloureux, nécessite une anesthésie. Une contention souple est ensuite indispensable pour la maintenir en place pendant la cicatrisation."
      },
      {
        questionText: "Le traitement de la dent permanente immature présentant une exposition pulpaire minime suite à une fracture amélo-dentinaire compliquée et sans aucune symptomatologie clinique sera :",
        options: [
          "Une apexification à l'hydroxyde de calcium",
          "Un coiffage pulpaire indirect",
          "Une pulpotomie cervicale",
          "Une pulpotomie partielle",
          "Un coiffage pulpaire direct"
        ],
        correctOptionIndexes: [4],
        explanation: "Dans les conditions idéales (exposition minime, < 1mm ; consultation rapide, < 24h ; pulpe saine), le traitement le plus conservateur est le coiffage pulpaire direct, qui consiste à placer un matériau bioactif directement sur la pulpe exposée."
      },
      {
        questionText: "En traumatologie, la pulpotomie cervicale est indiquée si :",
        options: [
          "La dent est mature",
          "L'exposition pulpaire est minime",
          "Le patient consulte immédiatement après le traumatisme",
          "La dent est immature",
          "L'exposition pulpaire est importante"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La pulpotomie cervicale (ablation de toute la pulpe de la chambre) est une option de deuxième intention sur une dent immature. Elle est indiquée lorsque l'exposition est trop large ou trop ancienne pour un traitement plus conservateur, ou en cas d'échec d'hémostase lors d'une pulpotomie partielle."
      },
      {
        questionText: "En traumatologie, après la réimplantation de la dent, le traitement endodontique à l'hydroxyde de calcium est fait obligatoirement :",
        options: [
          "Au bout de 7 jours si la dent est immature",
          "Avant la revascularisation",
          "Au bout de 7 jours si la dent est mature",
          "En extra-alvéolaire",
          "Après dépose de la contention"
        ],
        correctOptionIndexes: [2],
        explanation: "Sur une dent mature réimplantée, une revascularisation est impossible et la nécrose pulpaire est inévitable. Pour prévenir les résorptions inflammatoires, le traitement de canal doit être initié rapidement, environ 7 à 10 jours après la réimplantation."
      },
      {
        questionText: "À la suite d'une expulsion dentaire, la revascularisation pulpaire :",
        options: [
          "Est possible si la dent est mature",
          "Elle est possible si l'ouverture apicale est supérieure à 1 mm",
          "Elle débute quinze jours après le traumatisme",
          "Elle débute 4 jours après le traumatisme",
          "Elle intéresse le tissu pulpaire et le tissu parodontal"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Une revascularisation de la pulpe et du parodonte n'est possible que sur une dent immature avec un apex largement ouvert (> 1 mm). Ce processus de cicatrisation biologique commence environ 4 jours après la réimplantation."
      }
    ]
  },
  {
    title: "Lésions Apicales (Parodontites)",
    subject: "oce-y4",
    questions: [
      {
        questionText: "La symptomatologie lors d'une parodontite apicale chronique est caractérisée par :",
        options: [
          "Des douleurs provoquées à la mastication",
          "Des douleurs spontanées intenses",
          "Les tests de sensibilité sont négatifs",
          "Des tests de percussion positifs",
          "La présence d'une fistule peut aggraver les douleurs"
        ],
        correctOptionIndexes: [2],
        explanation: "La parodontite apicale chronique est, par définition, une lésion asymptomatique ou paucisymptomatique. Elle résulte d'une nécrose pulpaire, donc les tests de sensibilité pulpaire sont négatifs. La présence d'une fistule est un signe de chronicité et sert de drainage, ce qui rend la lésion indolore."
      },
      {
        questionText: "Les étiologies des parodontites apicales sont :",
        options: [
          "Les caries pénétrantes",
          "La sur-instrumentation avec des limes endodontiques souillées lors des traitements",
          "L'infection par anachorèse",
          "Les pulpites irréversibles",
          "La gangrène pulpaire ouverte ou fermée"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Toute situation menant à une contamination bactérienne ou à une nécrose de la pulpe peut causer une parodontite apicale. Cela inclut les caries profondes, les traumatismes, les actes iatrogènes (contamination lors du traitement), l'évolution d'une pulpite, ou plus rarement, une infection par voie sanguine (anachorèse)."
      },
      {
        questionText: "Le traitement des parodontites apicales est :",
        options: [
          "Symptomatologique",
          "Étiologique",
          "Le traitement endodontique est de première intention",
          "Le traitement chirurgical de la lésion péri-apicale est de première intention",
          "Cémentogène"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement vise à éliminer la cause (étiologique), c'est-à-dire l'infection à l'intérieur du canal. Le traitement endodontique conventionnel (nettoyage et obturation du canal) est donc le traitement de première intention. Il vise aussi à soulager les symptômes lorsqu'il y en a."
      },
      {
        questionText: "L'abcès Phoenix est :",
        options: [
          "Est une exacerbation d'une lésion chronique préexistante",
          "Est une parodontite apicale aiguë primaire",
          "Peut se compliquer et donner un kyste",
          "Peut se compliquer et donner un granulome",
          "Peut se fistuliser et donner une parodontite apicale chronique fistulisée"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "L'abcès 'Phoenix' est la réactivation ou l'exacerbation aiguë d'une lésion apicale chronique préexistante (comme un granulome). La collection de pus peut alors créer un trajet de drainage et se fistuliser à la gencive."
      },
      {
        questionText: "Sans traitement, le granulome évolue vers :",
        options: [
          "Un kyste en poche",
          "Un abcès Phoenix",
          "Une parodontite apicale chronique fistulisée",
          "Un kyste vrai",
          "Un abcès apical aigu"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Un granulome non traité peut soit rester stable, soit s'infecter et devenir un abcès (abcès Phoenix), soit évoluer en kyste (en poche ou vrai), soit se drainer spontanément via une fistule."
      },
      {
        questionText: "Une obturation intermédiaire à l'hydroxyde de calcium trouve son indication dans :",
        options: [
          "Une parodontite apicale chronique",
          "Une pulpite irréversible",
          "Une parodontite apicale aiguë",
          "Une pulpite réversible",
          "Un abcès Phoenix"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "L'hydroxyde de calcium est utilisé comme médication intra-canalaire entre les séances pour ses puissantes propriétés antiseptiques. Il est donc indiqué dans tous les cas de canaux infectés : parodontites apicales (chroniques ou aiguës) et abcès Phoenix."
      },
      {
        questionText: "La présence d'une fistule :",
        options: [
          "Est un signe de gravité",
          "Est un signe de chronicité",
          "Nécessite la réalisation d'une radiographie 3D",
          "Est une soupape de sécurité",
          "Nécessite la réalisation d'une radiographie avec un cône de gutta placé dans l'ostium"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Une fistule est un canal de drainage qui se forme pour évacuer le pus d'une infection chronique. Elle agit comme une 'soupape de sécurité', ce qui rend la lésion indolore. Pour identifier la dent responsable, on insère un cône de gutta-percha dans la fistule avant de prendre une radio."
      },
      {
        questionText: "La parodontite apicale aiguë primaire est appelée également :",
        options: [
          "Parodontite apicale aiguë d'origine pulpaire",
          "Parodontite apicale aiguë d'origine parodontale",
          "Pulpo-desmodontite",
          "Abcès péri-apical sans fistule",
          "Abcès péri-apical primaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La parodontite apicale aiguë primaire est le premier stade de l'inflammation du ligament apical, directement causée par l'extension de l'inflammation pulpaire. On l'appelle aussi couramment pulpo-desmodontite."
      },
      {
        questionText: "La gravité des dépassements du matériau d'obturation :",
        options: [
          "Est fonction de sa résorption",
          "Est fonction de l’état général du patient",
          "Est fonction de son importance",
          "Est fonction de l'anatomie de la zone apicale",
          "Peut générer des parodontites apicales"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Un dépassement de matériau peut irriter les tissus péri-apicaux et causer une parodontite. Sa gravité dépend du volume et de la toxicité du matériau, de sa capacité à se résorber, de la proximité de structures anatomiques nobles (nerf, sinus) et de la capacité de cicatrisation du patient."
      },
      {
        questionText: "La parodontite apicale fistulisée est :",
        options: [
          "Un abcès péri-apical avec fistule",
          "Un granulome avec fistule",
          "Un abcès pulpaire",
          "Un abcès récurrent",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une parodontite apicale fistulisée est simplement une lésion apicale chronique (granulome ou abcès chronique) qui a créé un trajet de drainage (fistule) vers la cavité buccale ou la peau."
      },
      {
        questionText: "Dans la parodontite apicale chronique avec fistule, le test de sensibilité pulpaire :",
        options: [
          "Est toujours positif",
          "Est toujours négatif",
          "Peut être positif ou négatif",
          "Est réalisé au chlorure de sodium",
          "Est effectué au collet de la dent"
        ],
        correctOptionIndexes: [1],
        explanation: "Une lésion d'origine endodontique implique que la pulpe de la dent est nécrosée. Par conséquent, la dent ne répondra à aucun test de sensibilité (froid, chaud, électrique). La réponse est donc toujours négative."
      },
      {
        questionText: "L'abcès apical aigu :",
        options: [
          "Est une parodontite apicale aiguë purulente",
          "Est drainé de préférence par voie trans-canalaire",
          "Autorise une obturation coronaire si le drainage est parfait",
          "Nécessite la prescription d'un antibiotique adapté",
          "Nécessite une anesthésie para-apicale"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'abcès apical aigu est le stade suppuratif de la parodontite apicale aiguë. Le traitement d'urgence consiste à drainer le pus, idéalement par la voie la plus simple, c'est-à-dire en ouvrant la chambre pulpaire (voie trans-canalaire). L'obturation est réalisée dans une séance ultérieure."
      },
      {
        questionText: "Les principaux signes des parodontites apicales symptomatiques sont :",
        options: [
          "Douleur spontanée, intense, pulsatile",
          "Réponse négative aux tests de vitalité",
          "Présence systématique d'une tuméfaction",
          "Réponse positive à la percussion",
          "Absence de fistule"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Une parodontite symptomatique (aiguë) se caractérise par une douleur intense et une forte sensibilité à la percussion. Comme elle résulte d'une nécrose pulpaire, les tests de vitalité sont négatifs. La tuméfaction n'est pas toujours présente au stade initial."
      },
      {
        questionText: "Les parodontites apicales :",
        options: [
          "Sont des lésions inflammatoires du parodonte profond",
          "Sont des lésions infectieuses du parodonte",
          "Sont la conséquence de l'infection de la pulpe",
          "Sont souvent asymptomatiques",
          "Peuvent être symptomatiques"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les parodontites apicales sont des inflammations du parodonte profond (os et ligament autour de l'apex) causées par l'infection provenant du système canalaire (conséquence de l'infection pulpaire). Elles peuvent être chroniques (asymptomatiques) ou aiguës (symptomatiques)."
      },
      {
        questionText: "La jonction cémento-dentinaire (JCD) :",
        options: [
          "Constitue la frontière entre l'endodonte et le parodonte",
          "Est le point de rétrécissement maximal du canal",
          "Se situe au niveau de l'apex anatomique",
          "Se situe en retrait par rapport à l'apex radiographique",
          "Est souvent détruite par l'infection endodontique"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La JCD est la limite histologique entre le tissu pulpaire et le ligament. C'est aussi la partie la plus étroite du canal (constriction apicale) et se situe en moyenne à 0,5-1 mm en retrait de l'apex visible à la radio. L'infection chronique peut entraîner sa résorption."
      },
      {
        questionText: "La parodontite apicale aiguë :",
        options: [
          "Peut être primaire",
          "Peut être symptomatique ou asymptomatique",
          "Peut évoluer vers une parodontite apicale chronique",
          "Est une urgence dentaire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La parodontite apicale aiguë est par définition symptomatique et constitue une urgence. Elle peut être 'primaire' (apparaissant sur un apex sain) ou 'secondaire' (exacerbation d'une lésion chronique). Si non traitée, l'inflammation aiguë peut s'atténuer et passer à la chronicité."
      },
      {
        questionText: "L'abcès péri-apical aigu se caractérise par :",
        options: [
          "Une réponse inflammatoire exsudative",
          "Une réponse inflammatoire suppurative",
          "Des douleurs spontanées rebelles aux antalgiques",
          "Peut évoluer vers la cellulite",
          "Entraîne une altération de l'état général du patient"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "L'abcès est une collection de pus (réponse suppurative), provoquant des douleurs très intenses, souvent accompagnées de fièvre (altération de l'état général). S'il n'est pas drainé, l'infection peut se diffuser aux tissus mous du visage, entraînant une cellulite."
      },
      {
        questionText: "Le kyste péri-apical :",
        options: [
          "Est une forme chronique des parodontites apicales",
          "Se développe à partir du granulome",
          "Entraîne des résorptions osseuses importantes",
          "Nécessite systématiquement un traitement chirurgical",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le kyste est une forme de parodontite apicale chronique qui se développe souvent à partir d'un granulome préexistant. Il s'agit d'une cavité pathologique bordée d'un épithélium qui grandit lentement en provoquant une lyse osseuse. Son traitement est d'abord endodontique."
      },
      {
        questionText: "La présence d’une fistule :",
        options: [
          "Est un signe de gravité",
          "Contre-indique le traitement endodontique",
          "Est un signe de chronicité",
          "Est une soupape de sécurité",
          "Nécessite la réalisation du test du cône de gutta"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "La fistule est le signe d'une infection chronique qui s'est drainée spontanément. Elle agit comme une valve de décompression, rendant la lésion indolore. Il est indispensable de l'explorer avec un cône de gutta pour identifier radiographiquement l'origine de l'infection."
      },
      {
        questionText: "Les agents étiologiques principaux des parodontites apicales sont :",
        options: [
          "Les micro-organismes intra-canalaires",
          "Les micro-organismes du sulcus gingival",
          "Les micro-infiltrations coronaires",
          "Les traumatismes occlusaux",
          "Les maladies systémiques"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'origine des parodontites apicales est presque toujours bactérienne. Les bactéries peuvent provenir de l'intérieur du canal (nécrose pulpaire), d'une poche parodontale profonde communiquant avec l'apex, ou d'une infiltration sous une restauration coronaire non étanche."
      },
      {
        questionText: "Les parodontites symptomatiques :",
        options: [
          "Sont dues à des bactéries anaérobies strictes",
          "Résultent d'un échec du traitement endodontique",
          "Sont une exacerbation d’une lésion péri-apicale chronique",
          "Sont la conséquence des différentes agressions pouvant altérer la pulpe dentaire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Les parodontites symptomatiques (aiguës) sont causées par une flore bactérienne mixte et virulente. Elles peuvent être la conséquence d'une nécrose pulpaire initiale (suite à une carie, un traumatisme...) ou la réactivation aiguë d'une lésion chronique (abcès Phoenix)."
      },
      {
        questionText: "Dans l'abcès apical aigu :",
        options: [
          "La dent est mobile",
          "La radiographie met en évidence toujours une image radioclaire péri-apicale",
          "L'évolution se fait toujours vers l'abcès péri-apical récurrent",
          "Le traitement consiste à réaliser toujours un drainage chirurgical",
          "Il y a présence d'une fistule"
        ],
        correctOptionIndexes: [0],
        explanation: "L'inflammation et la pression intenses au niveau de l'apex rendent la dent mobile et très sensible à la percussion. Une image radioclaire n'est pas toujours visible au début, et une fistule est un signe de chronicité, pas d'infection aiguë."
      },
      {
        questionText: "Dans le cas de parodontite apicale aiguë liée au traumatisme occlusal :",
        options: [
          "La dent ne répond pas au test de sensibilité pulpaire",
          "Il y a sensibilité au test de percussion axiale",
          "L'élimination des interférences occlusales ne permet pas une rémission",
          "L'origine bactérienne peut être l'étiologie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Un traumatisme occlusal (contact prématuré) peut provoquer une inflammation du ligament (desmodontite) sans nécrose pulpaire. La dent reste donc vivante, mais devient très sensible à la pression exercée dans son axe (percussion axiale)."
      },
      {
        questionText: "La parodontite apicale aiguë primaire :",
        options: [
          "Peut être débutante",
          "Peut être installée",
          "Peut être débutante mais la dent ne répond pas au test de sensibilité pulpaire",
          "Peut être installée mais la dent répond au test de sensibilité pulpaire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "La PAA primaire (ou pulpo-desmodontite) correspond à l'extension de l'inflammation pulpaire au desmodonte. Au stade débutant, la pulpe peut encore être vivante et répondre aux tests. Au stade installé, la pulpe est généralement nécrosée et ne répond plus."
      },
      {
        questionText: "La Desmodontite médicamenteuse :",
        options: [
          "Peut être due à une mèche endocanalaire",
          "Répond aux tests de percussion",
          "Est provoquée par la percolation de l'exsudat",
          "Répond au test de vitalité",
          "Est un acte iatrogène"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Il s'agit d'une inflammation iatrogène du ligament (desmodontite) causée par l'irritation chimique d'un produit utilisé dans le canal (médicament, irrigant) ou par le refoulement d'exsudat. Elle se manifeste par une douleur à la percussion."
      },
      {
        questionText: "Quelles sont les causes physiques des LIPOE ?",
        options: [
          "Les traumatismes alvéolo-dentaires",
          "Les accidents thérapeutiques endodontiques",
          "Les débordements de pâtes ou ciments d'obturation, dépassement d'un cône de gutta",
          "Le dépassement instrumental",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les LIPOE (Lésions Inflammatoires Périodontales d'Origine Endodontique) ne sont pas toujours infectieuses. Elles peuvent être causées par une irritation physique/mécanique, comme un traumatisme, un dépassement d'instrument ou l'extrusion de matériaux d'obturation dans le périapex."
      },
      {
        questionText: "Le granulome péri-apical :",
        options: [
          "Est un lieu de prolifération bactérienne",
          "Est un lieu de destruction bactérienne",
          "Guérit grâce à la réaction inflammatoire immunitaire adaptative",
          "Traduit un équilibre rompu entre la réponse inflammatoire et la réponse tissulaire",
          "Son diagnostic différentiel avec le kyste péri-apical se fait radiologiquement"
        ],
        correctOptionIndexes: [1],
        explanation: "Le granulome est un tissu de défense inflammatoire chronique qui se forme pour contenir l'infection provenant du canal. C'est un lieu d'équilibre où les défenses de l'hôte (cellules immunitaires) luttent pour détruire les bactéries. Seule une analyse histologique permet de le différencier d'un kyste."
      },
      {
        questionText: "La parodontite apicale aiguë :",
        options: [
          "Est une lésion primaire du desmodonte",
          "N'a pas d'image radiologique dans sa forme primaire",
          "Est une inflammation des tissus situés autour du foramen apical",
          "Est dite secondaire ou abcès phénix",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La forme primaire de la PAA peut ne pas avoir de signe radiologique car la destruction osseuse n'a pas encore eu le temps de se produire. La forme secondaire est l'exacerbation aiguë d'une lésion chronique préexistante, et est aussi appelée 'abcès Phoenix'."
      },
      {
        questionText: "Les changements histo-physio-pathologiques pulpaires et parodontaux peuvent être en rapport avec :",
        options: [
          "Des agressions d'origines non infectieuses",
          "Des agressions d'origines infectieuses",
          "Des expositions chroniques aux agents carieux",
          "Des expositions coronaires suite à des traumatismes",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Les pathologies pulpaires et parodontales peuvent être déclenchées par une multitude de facteurs : infectieux (bactéries de la carie), physiques (traumatisme, chaleur), ou chimiques (matériaux irritants)."
      },
      {
        questionText: "La lésion inflammatoire péri-apicale d'origine endodontique (LIPOE) :",
        options: [
          "Peut être aiguë ou chronique",
          "Le traitement antibiotique et antalgique est systématique",
          "S'accompagne toujours d'une image radio-claire apicale",
          "Le drainage est systématique",
          "Le traitement de première intention est la chirurgie endodontique"
        ],
        correctOptionIndexes: [0],
        explanation: "Une LIPOE peut se présenter sous une forme aiguë (symptomatique, comme un abcès) ou chronique (asymptomatique, comme un granulome). Le traitement de première intention est toujours le traitement de canal conventionnel."
      },
      {
        questionText: "Les bactéries sont à l'origine de :",
        options: [
          "Toute infection pulpaire",
          "Toute inflammation pulpaire",
          "Des pathologies pulpaires ou parodontales",
          "Des abcès dentaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les bactéries sont la cause principale de la plupart des pathologies pulpaires et parodontales d'origine endodontique, et sont systématiquement à l'origine des infections suppurées comme les abcès. Cependant, d'autres causes (virales, physiques) peuvent exister."
      },
      {
        questionText: "La parodontite apicale aiguë :",
        options: [
          "Est toujours primaire",
          "Est la conséquence d’une nécrose pulpaire",
          "Se manifeste toujours par la présence d’une collection purulente apicale",
          "La radiographie met en évidence une image radioclaire au niveau apical"
        ],
        correctOptionIndexes: [1],
        explanation: "La parodontite apicale aiguë est une inflammation des tissus péri-apicaux causée par les toxines et les bactéries issues de la nécrose pulpaire. Le stade purulent (abcès) n'est pas systématique, et l'image radioclaire peut être absente au début."
      },
      {
        questionText: "L'étiologie de la parodontite apicale aiguë est :",
        options: [
          "Une dent dépulpée",
          "Un dépassement apical",
          "Une maladie parodontale",
          "Une infection secondaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les causes de PAA sont variées : infection d'une dent déjà dépulpée (traitée ou non), irritation mécanique (dépassement d'instrument) ou chimique (dépassement de matériau), ou propagation d'une infection depuis une poche parodontale."
      },
      {
        questionText: "La parodontite apicale chronique :",
        options: [
          "Le granulome comporte une poche liquidienne et des cellules épithéliales nombreuses",
          "Le granulome évolue vers une forme kystique",
          "Le diagnostic différentiel entre le granulome et le kyste se fait radiographiquement",
          "Est de découverte fortuite"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Étant asymptomatique, la parodontite apicale chronique est souvent découverte de manière fortuite lors d'un examen radiographique de routine. Avec le temps, un granulome peut évoluer et se transformer en kyste. Seule une analyse histologique permet de les différencier avec certitude."
      },
      {
        questionText: "Les principaux signes de parodontites symptomatiques sont :",
        options: [
          "Douleur spontanée",
          "Une réponse négative aux tests de vitalité pulpaire",
          "La présence toujours d’une tuméfaction",
          "Une percussion négative"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les parodontites symptomatiques (aiguës) se manifestent par des douleurs spontanées. La pulpe étant nécrosée, les tests de vitalité sont négatifs. La percussion est typiquement positive et très douloureuse."
      },
      {
        questionText: "La parodontite apicale aiguë peut être :",
        options: [
          "Primaire débutante",
          "Primaire, primaire",
          "Une pulpo-desmodontite",
          "Une parodontite apicale avec hyper-cémentose"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La PAA primaire (qui apparaît sur un apex sain) est aussi appelée 'pulpo-desmodontite' à son stade débutant. L'hypercémentose est une réaction observée dans certaines formes de parodontite chronique, pas aiguë."
      },
      {
        questionText: "La LIPOE :",
        options: [
          "Est une lésion infectieuse",
          "Est une LOE",
          "Est toujours chronique",
          "Le traitement consiste à réaliser toujours un drainage"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "LIPOE signifie 'Lésion Inflammatoire Périodontale d'Origine Endodontique'. C'est un terme général qui englobe toutes les lésions inflammatoires (aiguës ou chroniques) du péri-apex causées par une pathologie endodontique, le plus souvent infectieuse."
      },
      {
        questionText: "L'abcès apical aigu :",
        options: [
          "Douleur spontanée, continue, intense calmée par les antalgiques",
          "L'état général du patient peut être altéré",
          "Le test de percussion est positif",
          "La tuméfaction en regard de la dent est le signe pathognomonique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'abcès apical aigu provoque des douleurs très intenses (souvent non calmées par les antalgiques classiques) et une forte sensibilité à la percussion. L'infection peut s'accompagner de signes généraux comme la fièvre (altération de l'état général)."
      },
      {
        questionText: "La parodontite apicale aiguë secondaire abcédée :",
        options: [
          "Est une exacerbation d’une lésion péri-apicale chronique",
          "Est une exacerbation de l'abcès apical aigu",
          "Évolue vers la parodontite apicale chronique",
          "Évolue vers la cellulite aiguë"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Cette pathologie, aussi appelée 'abcès Phoenix', est une poussée inflammatoire aiguë sur une lésion chronique préexistante. Si l'infection n'est pas contenue, elle peut se diffuser dans les tissus mous adjacents et provoquer une cellulite."
      },
      {
        questionText: "La parodontite apicale chronique granulomateuse :",
        options: [
          "Évolue toujours vers le kyste",
          "Est diagnostiquée par son volume à la radiographie",
          "Est une réaction inflammatoire de faible intensité et de longue durée du tissu conjonctif péri-apical",
          "Contient des cellules épithéliales"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le granulome est un tissu de défense inflammatoire chronique qui se forme en réponse à une irritation de faible intensité mais persistante. Il est histologiquement composé de nombreuses cellules inflammatoires et peut contenir des débris de cellules épithéliales, qui sont à l'origine de son évolution potentielle en kyste."
      },
      {
        questionText: "Les traitements des LIPOE sont :",
        options: [
          "Un traitement endodontique",
          "Un retraitement en deuxième intention",
          "Une chirurgie endodontique en première intention",
          "La suppression de l'infection endocanalaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le traitement de toute LIPOE est étiologique : il faut supprimer la cause, c'est-à-dire l'infection présente dans le système canalaire. Le traitement endodontique (ou le retraitement si la dent est déjà traitée) est donc toujours la première intention."
      },
      {
        questionText: "Le cône dentinaire :",
        options: [
          "Est la réunion de plusieurs tubuli dentinaires",
          "Est l'espace contenant la pulpe radiculaire",
          "Est appelé espace de Black",
          "Est limité à la fois par la dentine et le cément radiculaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Le 'cône dentinaire' est un terme anatomique qui désigne l'espace occupé par la pulpe à l'intérieur de la racine, de la chambre pulpaire jusqu'à la jonction cémento-dentinaire."
      }
    ]
  },
  {
    title: "Accidents et Complications en Endodontie",
    subject: "oce-y4",
    questions: [
      {
        questionText: "La chaleur émise par les instruments rotatifs peut entraîner :",
        options: [
          "Une élévation de la température pulpaire",
          "L'élaboration de dentine réactionnelle",
          "La dénaturation de la dentine",
          "Une thrombose",
          "Une nécrose pulpaire localisée"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Un échauffement excessif lors du fraisage peut avoir des conséquences multiples sur la pulpe : inflammation, thrombose des vaisseaux, nécrose localisée, mais aussi une réaction de défense par la formation de dentine réactionnelle si l'agression est modérée."
      },
      {
        questionText: "La prévention des bouchons dentinaires se fait par :",
        options: [
          "Le respect de la récapitulation",
          "Le respect de la séquence opératoire",
          "L'utilisation des instruments manuels en rotation complète",
          "L'utilisation des instruments manuels en rotation anti-horaire",
          "L'utilisation souple des instruments"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Pour éviter de compacter les débris au fond du canal, il faut irriguer abondamment, utiliser les instruments dans l'ordre croissant sans forcer, et surtout, repasser régulièrement une petite lime jusqu'à l'apex (récapitulation) pour maintenir la voie libre."
      },
      {
        questionText: "La fracture instrumentale :",
        options: [
          "Est essentiellement due à un défaut de fabrication",
          "Est due à la fatigue cyclique des instruments en acier inoxydable",
          "Concerne uniquement les instruments endodontiques manuels",
          "Concerne rarement les instruments endodontiques mécanisés",
          "Peut survenir au niveau apical"
        ],
        correctOptionIndexes: [4],
        explanation: "La fracture d'un instrument peut survenir n'importe où dans le canal, mais elle est fréquente dans le tiers apical en raison des courbures et de l'étroitesse du canal. Elle est souvent due à une utilisation incorrecte ou à la fatigue du métal après plusieurs usages."
      },
      {
        questionText: "La prévention des perforations :",
        options: [
          "Passe par une bonne lecture de la radiographie préliminaire",
          "Se fait par l'élimination des zones d'interférence au niveau de la cavité d'accès",
          "Se fait par une irrigation abondante",
          "Se fait par l'élimination des instruments fatigués",
          "Se fait par la mise en place d'un champ opératoire étanche"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Pour éviter une perforation lors de la création de la cavité d'accès, il est essentiel d'analyser l'anatomie sur la radiographie pré-opératoire et de créer un accès en ligne droite vers les canaux en éliminant toutes les interférences coronaires."
      },
      {
        questionText: "L'exposition pulpaire au cours d'un curetage dentinaire :",
        options: [
          "Est due à une faute d'asepsie",
          "Est un acte iatrogène",
          "Peut être le résultat d'un mouvement brusque du patient",
          "Peut être traitée par un coiffage pulpaire direct",
          "Peut être traitée par un coiffage pulpaire indirect"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Une exposition pulpaire pendant le curetage peut être un accident causé par le praticien (iatrogène) ou un mouvement inopiné du patient. Si les conditions sont favorables (pulpe saine, exposition minime), elle peut être traitée par un coiffage pulpaire direct."
      },
      {
        questionText: "La perforation du plancher :",
        options: [
          "Peut survenir au début du traitement",
          "Peut survenir lors de la réalisation de la cavité d'accès",
          "Peut survenir lors de la recherche des orifices canalaires",
          "Peut survenir lors de l'obturation des canaux",
          "Est plus fréquente sur les molaires mandibulaires"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les perforations du plancher pulpaire surviennent typiquement au début du traitement, lors de la création de la cavité d'accès ou en cherchant les entrées des canaux, particulièrement sur les molaires mandibulaires où l'anatomie peut être complexe."
      },
      {
        questionText: "Un bouchon dentinaire :",
        options: [
          "Est constitué par des débris organiques",
          "Est constitué par des débris minéraux uniquement",
          "Est constitué par des débris minéraux et des débris organiques",
          "Est causé par la coupe intempestive des limes",
          "Est favorisé par l'oubli de la récapitulation"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Un bouchon est un amalgame de copeaux de dentine (minéraux) et de débris pulpaires (organiques), compacté au fond du canal par une instrumentation agressive, une irrigation insuffisante ou l'absence de récapitulation."
      },
      {
        questionText: "Le stripping :",
        options: [
          "Est l'usure de la partie interne de la courbure canalaire",
          "Est l'usure de la partie externe de la courbure canalaire",
          "Peut aller jusqu'à la perforation",
          "Est une exérèse incomplète du tissu pulpaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le 'stripping' est un amincissement excessif de la paroi interne d'un canal courbe lors de la préparation. Si cet amincissement est trop important, il peut mener à une perforation latérale de la racine."
      },
      {
        questionText: "L'élévation de température au cours d'un fraisage est liée à :",
        options: [
          "La capacité de coupe de la fraise",
          "Au mauvais sens de rotation de la fraise",
          "À la vitesse de rotation",
          "À la forme de la fraise",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La chaleur dégagée est directement liée à la friction. Une fraise usée (mauvaise capacité de coupe), une vitesse de rotation trop élevée ou un sens de rotation incorrect sont les principaux facteurs augmentant cette friction et l'échauffement."
      },
      {
        questionText: "Pour la prévention des actes iatrogènes d'origine biologique, nous devons :",
        options: [
          "Travailler par attouchement",
          "Travailler sous digue",
          "Travailler sous irrigation continue",
          "Travailler selon un mouvement de balayage",
          "Rincer la cavité avec une solution antiseptique"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La prévention de la contamination biologique (infection) repose sur des principes d'asepsie stricts : isolation du champ opératoire (digue), irrigation continue avec un désinfectant (hypochlorite de sodium), et utilisation d'instruments stériles."
      },
      {
        questionText: "La perforation du plancher :",
        options: [
          "Surviennent au cours de la recherche des entrées canalaires",
          "Mettent en communication l'endodonte et le parodonte",
          "Sont des perforations sous forme de stripping",
          "Peuvent être hautes ou basses",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La perforation du plancher est un accident créant une communication entre la chambre pulpaire (endodonte) et les tissus de soutien de la dent (parodonte). Elle se produit souvent en cherchant les orifices des canaux avec une fraise."
      },
      {
        questionText: "Les perforations iatrogènes :",
        options: [
          "Sont causées par le praticien",
          "Peuvent servir de logement intra-radiculaire",
          "Apicales se nomment stripping",
          "Du plancher se traitent par obturation canalaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Une perforation est dite 'iatrogène' lorsqu'elle est causée involontairement par l'acte du praticien lors du traitement."
      },
      {
        questionText: "Lors du traitement endodontique, les matériaux utilisés pour l'obturation de la zone perforée sont :",
        options: [
          "Oxyde de Zinc-Eugénol",
          "Ca(OH)2",
          "MTA",
          "Biodentine",
          "CVI"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les matériaux de choix pour réparer une perforation sont des ciments biocéramiques comme le MTA (Mineral Trioxide Aggregate) et la Biodentine, en raison de leur excellente étanchéité et de leur biocompatibilité."
      },
      {
        questionText: "Les facteurs qui ont un rôle dans la production de la chaleur au niveau de la pulpe sont :",
        options: [
          "La vitesse de rotation",
          "La pression",
          "La dimension de la fraise",
          "La forme de la fraise",
          "La durée de contact de la fraise avec la dentine"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Tous ces facteurs influencent l'échauffement : une vitesse ou une pression excessive, une fraise de grande taille, et un temps de contact prolongé augmentent la quantité de chaleur transmise à la pulpe."
      },
      {
        questionText: "Le bouchon apical :",
        options: [
          "Survient lorsque l'irrigation canalaire est insuffisante",
          "Est à l’origine d'un transport interne du foramen",
          "Peut être à l'origine d’une butée apicale",
          "Est fréquent quand la concentration de la solution d'irrigation est faible",
          "Est toujours accompagné d’une déchirure apicale"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le bouchon apical est une accumulation de débris dentinaires compactés à l'apex, souvent due à une irrigation insuffisante. Il peut bloquer la progression des instruments et créer une 'butée' avant la longueur de travail réelle."
      },
      {
        questionText: "Tous ces accidents surviennent au cours de la préparation canalaire et sont localisés au 1/3 apical :",
        options: [
          "Le bouchon apical",
          "Le stripping",
          "Le faux canal",
          "La butée",
          "Le transport externe du canal"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Les accidents spécifiques à la préparation du tiers apical incluent le bouchon de débris, la création d'une butée, la perforation via un faux canal, et le transport du foramen (zipping). Le stripping concerne plutôt la paroi interne des courbures radiculaires."
      },
      {
        questionText: "La perforation du plancher pulpaire :",
        options: [
          "Peut être obturée après l'obturation des canaux au cours de la même séance",
          "Est obturée au MTA",
          "Peut être obturée au Ca(OH)2",
          "Peut être évitée si le praticien utilise une fraise Endo Zekrya",
          "Peut être obturée au Biodentine"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Une perforation du plancher doit être réparée rapidement, souvent dans la même séance que l'obturation des canaux, avec un matériau biocompatible (MTA, Biodentine). L'utilisation de fraises à bout inactif (comme l'Endo-Z) permet de lisser les parois de la cavité d'accès sans risque de perforer le plancher."
      },
      {
        questionText: "Lors du traitement endodontique, les perforations peuvent concerner :",
        options: [
          "Le plafond de la chambre pulpaire",
          "Le plancher de la chambre pulpaire",
          "La dentine coronaire",
          "La dentine radiculaire",
          "Le foramen apical"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les perforations iatrogènes en endodontie peuvent se produire à deux niveaux principaux : au niveau du plancher de la chambre pulpaire (lors de la recherche des canaux) ou le long des parois de la dentine radiculaire (lors de la mise en forme des canaux)."
      },
      {
        questionText: "Pour le retrait d'un instrument fracturé dans le canal, le praticien peut utiliser :",
        options: [
          "La technique du By-pass",
          "La boîte de Masseran",
          "LARS",
          "Le kit PROTAPER",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Plusieurs techniques existent pour gérer un instrument fracturé : essayer de le contourner (by-pass), le saisir avec des dispositifs spécifiques (trousse de Masseran, ultrasons), ou utiliser des techniques plus avancées comme le laser (LARS)."
      },
      {
        questionText: "Les risques liés à l'anesthésie sont :",
        options: [
          "La dystonie neuro-végétative",
          "L'œdème de Quincke",
          "Le choc anaphylactique",
          "La sensibilité allergique",
          "Les antécédents médicaux"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Les risques de l'anesthésie locale sont principalement d'ordre allergique, allant d'une simple réaction locale à des réactions graves comme l'œdème de Quincke ou le choc anaphylactique. La prise en compte des antécédents médicaux du patient est donc primordiale."
      },
      {
        questionText: "Le faux canal :",
        options: [
          "Est un canal accessoire",
          "Provoque une hémorragie",
          "Doit être traité comme un vrai canal",
          "Aboutit dans le desmodonte",
          "Est un accident iatrogène"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Le faux canal est une perforation créée par le praticien (accident iatrogène). Il débouche dans le desmodonte, ce qui provoque une hémorragie. Une fois créé, il doit être désinfecté et obturé comme s'il s'agissait d'un canal naturel pour prévenir l'infection."
      }
    ]
  },
  {
    title: "Cicatrisation Apicale",
    subject: "oce-y4",
    questions: [
      {
        questionText: "Concernant la cicatrisation apicale, laquelle des affirmations est correcte :",
        options: [
          "Elle correspond toujours à une régénération complète des tissus péri-radiculaires",
          "Elle implique systématiquement la formation d'un tissu conjonctif fibreux avant la réparation osseuse",
          "Elle se fait uniquement par une ostéogenèse rapide après le traitement endodontique",
          "Elle passe généralement par trois étapes : disparition de l'inflammation, formation d'un tissu conjonctif, réparation tissulaire",
          "Elle dépend uniquement du potentiel de cicatrisation du desmodonte et non de la réponse immunitaire"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La cicatrisation apicale est un processus de réparation (et non de régénération complète). Elle se déroule en plusieurs phases : d'abord la résolution de l'inflammation, suivie de la formation d'un tissu de granulation qui se transforme en tissu conjonctif fibreux, puis la réparation osseuse et cémentaire."
      },
      {
        questionText: "Toute infection endodontique entraîne au niveau apical une réaction inflammatoire qui aura par conséquent :",
        options: [
          "Une augmentation de l'activité synthétique",
          "Une augmentation des phénomènes ostéoclasiques",
          "Une diminution de l'activité cémentoblastique",
          "Un arrêt de l'activité cellulaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'inflammation d'origine infectieuse stimule les cellules de la résorption osseuse (ostéoclastes) et cémentaire (cémentoclastes), tout en inhibant l'activité des cellules formatrices (ostéoblastes, cémentoblastes). Le bilan est donc une destruction tissulaire."
      },
      {
        questionText: "Parmi les critères cliniques et radiologiques de la cicatrisation apicale, nous pouvons citer :",
        options: [
          "Absence de symptomatologie",
          "Percussion douloureuse",
          "Ligament régulier élargi",
          "Absence de la lamina dura",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Le principal critère clinique de succès est l'absence totale de symptômes (douleur spontanée ou à la percussion, pas de fistule). Radiologiquement, on recherche la reformation d'un ligament et d'une lamina dura d'aspect normal."
      },
      {
        questionText: "La cicatrisation des lésions péri-radiculaires après un traitement endodontique conventionnel est un phénomène de :",
        options: [
          "Dentinogenèse",
          "Cémentogenèse",
          "Ostéo-cémentogenèse",
          "Réparation",
          "Régénération"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La guérison apicale est un processus de réparation tissulaire qui vise à reformer les tissus détruits : l'os alvéolaire (ostéogenèse) et le cément à la surface de la racine (cémentogenèse)."
      },
      {
        questionText: "Le potentiel réparateur de la zone péri-apicale inclut :",
        options: [
          "La dentinogenèse",
          "La fibrogenèse",
          "La cémentogenèse",
          "L'ostéogenèse"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La réparation de la zone péri-apicale après un traitement endodontique fait intervenir plusieurs processus : la formation d'une trame de tissu conjonctif (fibrogenèse), la reformation de l'os alvéolaire (ostéogenèse) et la reformation du cément sur la racine (cémentogenèse)."
      },
      {
        questionText: "Le potentiel réparateur de la zone péri-apicale inclut :",
        options: [
          "La fibrogenèse",
          "La dentinogenèse",
          "La cémentogenèse",
          "L'ostéogenèse",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La cicatrisation apicale implique la reformation des tissus du parodonte profond : le tissu conjonctif du ligament (fibrogenèse), le cément radiculaire (cémentogenèse) et l'os alvéolaire (ostéogenèse). Il n'y a pas de formation de dentine."
      },
      {
        questionText: "Parmi les critères cliniques et radiologiques de la cicatrisation apicale, on cite :",
        options: [
          "Absence de symptomatologie",
          "Ligament régulier élargi",
          "Absence d'image péri-apicale",
          "Présence d'une fistule",
          "Percussion douloureuse"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les critères de succès d'un traitement endodontique sont à la fois cliniques (dent asymptomatique) et radiologiques (disparition de la lésion péri-apicale et aspect normal du ligament)."
      },
      {
        questionText: "La reconnaissance et la présentation d'antigènes et leur phagocytose au cours de la réaction inflammatoire est liée à l'action des :",
        options: [
          "Fibroblastes",
          "Macrophages",
          "Lymphocytes",
          "Mastocytes",
          "Histiocytes"
        ],
        correctOptionIndexes: [1],
        explanation: "Les macrophages sont des cellules clés de la réponse immunitaire. Ce sont des cellules présentatrices d'antigènes (elles 'présentent' l'agent infectieux aux lymphocytes) et elles ont une grande capacité de phagocytose (elles 'mangent' les bactéries et les débris)."
      },
      {
        questionText: "Parmi les critères de cicatrisation apicale on retient :",
        options: [
          "La dent est asymptomatique",
          "Présence de fistule",
          "Présence d'image péri-apicale",
          "Absence d'image péri-apicale",
          "Diminution de l'image péri-apicale"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Une cicatrisation complète est définie par l'absence de symptômes cliniques ET la disparition totale de l'image radioclaire à la radiographie."
      },
      {
        questionText: "Toute infection endodontique entraîne au niveau apical une réaction inflammatoire qui aura pour conséquences :",
        options: [
          "Une augmentation de l'activité synthétique",
          "Une augmentation de l'activité ostéoclastique",
          "Une diminution de l'activité synthétique",
          "Une augmentation de l'activité ostéoblastique",
          "Une diminution de l'activité ostéoclastique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'inflammation chronique induite par l'infection perturbe l'équilibre osseux : elle stimule les cellules qui détruisent l'os (ostéoclastes) et inhibe celles qui le construisent (ostéoblastes), ce qui conduit à une perte osseuse visible à la radio (lésion apicale)."
      },
      {
        questionText: "La cicatrisation apicale :",
        options: [
          "Est un phénomène succédant à la formation de granulome apical",
          "Se fait en parallèle avec l’installation de l'inflammation péri-apicale",
          "Englobe le terme de régénération et de réparation apicale",
          "Est stimulée par le matériau d'obturation canalaire",
          "Se fait en réponse à la présence de germes dans la région apicale"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La cicatrisation est un processus complexe de réparation tissulaire qui peut inclure des phénomènes de régénération. Elle n'est possible qu'une fois l'infection éliminée. Un matériau d'obturation biocompatible et étanche crée les conditions favorables à cette cicatrisation."
      },
      {
        questionText: "Une dent est dite fonctionnelle en voie de cicatrisation apicale :",
        options: [
          "Si l'image de la résorption apicale diminue de volume",
          "Après 2 ans post-traitement endodontique",
          "Après 1 an post-traitement endodontique",
          "En l'absence de symptomatologie, même avec persistance de l'image",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "On considère qu'une dent est en voie de guérison si elle est totalement asymptomatique et que l'image radiologique de la lésion diminue de taille ou reste stable. Parfois, une cicatrice fibreuse peut persister sans que cela soit un signe d'échec."
      },
      {
        questionText: "La richesse en capillaires du tissu de granulation cicatriciel :",
        options: [
          "Est à l’origine de son aspect histologique granulé",
          "Est le résultat d'une stimulation thérapeutique",
          "Peut être le résultat d'une défense de la zone péri-apicale",
          "N'est observée que sur la dent permanente immature",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Le tissu de granulation est un tissu de défense très vascularisé qui se forme en réponse à l'infection. Il est riche en cellules inflammatoires et en capillaires pour lutter contre les bactéries."
      },
      {
        questionText: "Quels sont les critères cliniques de cicatrisation apicale ?",
        options: [
          "Absence de symptomatologie",
          "Absence de fistule ou de tuméfaction",
          "Percussion non douloureuse",
          "Disparition de l'image péri-apicale préexistante",
          "Diminution de l'image péri-apicale préexistante"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les critères cliniques de succès sont stricts : la dent ne doit présenter absolument aucun symptôme, que ce soit une douleur spontanée, une douleur à la percussion ou à la palpation, ou la présence d'une fistule ou d'un gonflement."
      },
      {
        questionText: "Lors de la cicatrisation apicale, il y a :",
        options: [
          "Formation d'une trame organique",
          "Absence de symptomatologie",
          "Percussion douloureuse",
          "Régénération osseuse",
          "Élargissement du ligament alvéolo-dentaire"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le processus de cicatrisation inclut la formation d'une nouvelle matrice osseuse (trame organique puis minéralisation). Cliniquement, il se traduit par une absence totale de symptômes. Un élargissement du ligament est un signe de pathologie, pas de guérison."
      },
      {
        questionText: "Le siège de la réparation apicale est :",
        options: [
          "L'espace de Black",
          "Le cône cémentaire de Kuttler",
          "Le ligament alvéolo-dentaire",
          "Le tissu de transition entre la pulpe et le desmodonte",
          "Le centre nourricier"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La réparation se produit dans les tissus péri-apicaux riches en cellules et en vascularisation, notamment le tissu de transition pulpe-desmodonte et ce que l'on appelle l'espace de Black (centre nourricier)."
      },
      {
        questionText: "Au niveau apical, lors d'une désinfection canalaire, il y a :",
        options: [
          "Prolifération des ostéoclastes",
          "Transformation du tissu fibreux en tissu inflammatoire",
          "Diminution des cellules inflammatoires",
          "Diminution de l'activité synthétique",
          "Minéralisation des fibres de Sharpey"
        ],
        correctOptionIndexes: [2],
        explanation: "La désinfection du canal élimine la source de l'irritation. En réponse, la première étape de la guérison est la diminution de l'inflammation dans la zone péri-apicale, avec une réduction du nombre de cellules inflammatoires."
      },
      {
        questionText: "La régénération apicale se produit après une :",
        options: [
          "Désinfection canalaire",
          "Mise en forme et une obturation canalaire",
          "Obturation canalaire",
          "Médication inter-séance",
          "Chirurgie endodontique"
        ],
        correctOptionIndexes: [1],
        explanation: "La cicatrisation apicale ne peut commencer qu'une fois le traitement endodontique terminé, c'est-à-dire une fois que le système canalaire a été complètement nettoyé, mis en forme ET obturé de manière tridimensionnelle et étanche."
      },
      {
        questionText: "Les critères de cicatrisation de la lésion apicale sont :",
        options: [
          "Absence de symptomatologie",
          "Présence de fistule",
          "Absence d'image apicale",
          "Une percussion douloureuse"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Une lésion apicale est considérée comme guérie lorsque la dent est cliniquement silencieuse (asymptomatique) et que la radiographie montre une disparition complète de l'image radioclaire."
      },
      {
        questionText: "La réparation tissulaire de la région péri-apicale :",
        options: [
          "Se fait au niveau du tissu de transition entre la pulpe et le desmodonte",
          "Engendre de la néo-dentine",
          "Aboutit à la formation de néo-cément",
          "Concerne l'os alvéolaire"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La réparation se déroule au niveau des tissus péri-apicaux (zone de transition pulpe-desmodonte) et implique la reformation des tissus qui ont été détruits : l'os alvéolaire et le cément à la surface de la racine. Il n'y a pas de formation de nouvelle dentine."
      },
      {
        questionText: "L'induction de la cicatrisation apicale se fait :",
        options: [
          "Par la prise d'anti-inflammatoires",
          "Par la suppression de l'étiologie",
          "Par la fermeture hermétique du système canalaire",
          "Par l'irrigation au sérum physiologique du canal"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le corps ne peut commencer à cicatriser que si la cause de l'inflammation (l'infection dans le canal) est totalement supprimée et si l'espace canalaire est scellé hermétiquement pour empêcher toute nouvelle contamination."
      }
    ]
  },
  {
    title: "Éclaircissement et Esthétique",
    subject: "oce-y4",
    questions: [
      {
        questionText: "L'éclaircissement dentaire :",
        options: [
          "Technique esthétique visant à corriger les malformations dentaires",
          "Technique esthétique visant à éliminer les chromophores présents dans la dent",
          "Intéresse seulement les dents mortifiées",
          "Permet un résultat définitif",
          "Permet un changement de perception de la couleur de la dent"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "L'éclaircissement est une technique chimique qui vise à décomposer les molécules colorées (chromophores) à l'intérieur de la dent, ce qui modifie la perception de sa couleur et la rend plus claire. Il peut être réalisé sur des dents vivantes ou dévitalisées."
      },
      {
        questionText: "Le mécanisme de l'éclaircissement consiste en :",
        options: [
          "La diffusion du produit éclaircissant au niveau de l'émail",
          "La diffusion du produit éclaircissant au niveau du parenchyme pulpaire",
          "Les dents jeunes permettent une bonne diffusion du produit éclaircissant",
          "Les restaurations coronaires empêchent la diffusion du produit éclaircissant",
          "La diffusion du produit éclaircissant est meilleure sur une dent mortifiée"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le produit éclaircissant (peroxyde) diffuse à travers la structure poreuse de l'émail et de la dentine pour atteindre les pigments. Cette diffusion est facilitée sur les dents jeunes (plus perméables) et est bloquée par la présence de restaurations."
      },
      {
        questionText: "La technique d'éclaircissement externe :",
        options: [
          "Est indiquée pour les fluoroses sévères",
          "Est contre-indiquée en cas de sensibilité dentinaire",
          "Nécessite la confection de gouttières lorsqu'elle est réalisée au fauteuil",
          "Utilise le H2O2 ou le peroxyde de carbamide",
          "Utilise le port nocturne de gouttières chargées de nitrate de potassium pour la technique en ambulatoire"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'éclaircissement externe utilise des agents oxydants comme le peroxyde d'hydrogène ou de carbamide. Une sensibilité dentinaire préexistante est une contre-indication car le produit peut l'aggraver."
      },
      {
        questionText: "Les risques d'un éclaircissement sont :",
        options: [
          "Les hypersensibilités dentinaires",
          "La fusée du matériau d'obturation canalaire",
          "Les résorptions cervicales externes",
          "Les résorptions cervicales internes",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les complications les plus fréquentes sont les sensibilités dentinaires post-opératoires (généralement temporaires). Un risque plus rare mais plus grave, surtout avec les techniques internes sur dents dévitalisées, est la résorption cervicale externe."
      },
      {
        questionText: "Durant l'éclaircissement sur dent à pulpe vitale :",
        options: [
          "Le praticien peut assurer en parallèle une désensibilisation",
          "Il se fait une oxydation du produit éclaircissant",
          "Le pigment de double liaison se fragmente en une simple liaison",
          "Les cycles aromatiques se fragmentent facilement",
          "Les molécules chromophores reçoivent les radicaux libres"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le mécanisme d'action est une réaction d'oxydo-réduction. Les radicaux libres issus du peroxyde attaquent les molécules colorées (chromophores), brisant leurs doubles liaisons et leurs cycles aromatiques, ce qui les transforme en molécules plus petites et incolores."
      },
      {
        questionText: "Lors de l'éclaircissement interne :",
        options: [
          "La technique ambulatoire utilise du perborate de sodium",
          "La technique thermocatalytique en chauffant un fouloir est de choix",
          "Le produit est activé par la lumière des lampes LED",
          "Le produit est activé avec une fibre LASER",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "L'activation du produit éclaircissant peut se faire de différentes manières. Au fauteuil, on peut utiliser des sources lumineuses comme une lampe LED ou un laser pour accélérer la réaction. La technique thermocatalytique (chauffage) est aujourd'hui proscrite en raison des risques élevés."
      },
      {
        questionText: "Le produit éclaircissant :",
        options: [
          "Est le peroxyde d'hydrogène à 16% sur dent à pulpe vitale",
          "De type peroxyde de carbamide se décompose en donnant deux ions d'O2",
          "Donne un résultat meilleur avec de grandes concentrations mais augmente le risque de survenue des complications",
          "Le produit agit mieux lorsqu'il libère de l'H2O",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "L'efficacité de l'éclaircissement est dose-dépendante : une concentration plus élevée de peroxyde donnera un résultat plus rapide et plus marqué. Cependant, cela augmente aussi proportionnellement le risque et l'intensité des effets secondaires (sensibilités, irritations)."
      },
      {
        questionText: "Le masque esthétique :",
        options: [
          "Permet au patient de valider la teinte de la dent",
          "Permet au prothésiste de valider la forme de la dent",
          "Permet au patient de valider la forme de la future facette",
          "Est réalisé en technique directe par un wax-up",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "Le masque esthétique (ou 'mock-up') est une maquette provisoire en résine réalisée directement sur les dents du patient. Il permet de prévisualiser le résultat final d'un projet esthétique (facettes, couronnes) et de faire valider la forme et le volume par le patient avant de commencer le traitement."
      },
      {
        questionText: "La facette en résine composite :",
        options: [
          "Est indiquée en présence d'articulé inversé",
          "En présence d'hypoplasie",
          "Sa taille donne une forme en toboggan sur la dent",
          "Peut être réalisée en résine composite photopolymérisable ou thermo-polymérisable",
          "La technique indirecte nécessite des étapes de collage"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Les facettes en composite sont une option pour corriger des défauts de forme (comme l'hypoplasie) ou de couleur. La technique indirecte (facette fabriquée au laboratoire puis collée en bouche) est une des possibilités."
      },
      {
        questionText: "La technique ambulatoire d'éclaircissement interne :",
        options: [
          "Indiquée en cas de nécrose pulpaire",
          "Le patient met lui-même l'agent éclaircissant dans la cavité d'accès",
          "Est contre-indiquée chez les patients de moins de 16 ans",
          "L'isolation de l'obturation canalaire n’est pas obligatoire",
          "Le produit utilisé est le perborate de sodium et de l'eau distillée ou de l'eau oxygénée"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Cette technique ('walking bleach') est réservée aux dents dépulpées (nécrosées). Le praticien place un produit (souvent à base de perborate de sodium) à l'intérieur de la dent. Elle est contre-indiquée chez les adolescents en raison de la perméabilité dentinaire élevée."
      },
      {
        questionText: "Les facettes collées en céramique :",
        options: [
          "Sont réalisées en technique directe",
          "Nécessitent une empreinte et une confection au laboratoire",
          "Sont réalisées par stratification ou par estampage au composite",
          "Ne nécessitent aucune préparation de la dent",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Les facettes en céramique sont des restaurations indirectes. Elles nécessitent une préparation (taille) a minima de la dent, une prise d'empreinte, et sont fabriquées sur mesure au laboratoire de prothèse avant d'être collées en bouche."
      },
      {
        questionText: "L'éclaircissement externe :",
        options: [
          "Est utilisé sur dent non vitale",
          "Résulte d’une réaction chimique oxydative",
          "Est indiqué pour les dents temporaires",
          "Ne présente aucune contre-indication",
          "Ne provoque aucune hypersensibilité post-opératoire"
        ],
        correctOptionIndexes: [1],
        explanation: "L'éclaircissement est un processus d'oxydo-réduction où un agent oxydant (le peroxyde) décompose les molécules colorées. C'est une technique pour les dents vitales, qui présente des contre-indications (grossesse, sensibilités) et peut provoquer des sensibilités."
      },
      {
        questionText: "Le peroxyde d'hydrogène :",
        options: [
          "Est appelé aussi l'hypochlorite de sodium",
          "Est utilisé à des concentrations très élevées jusqu'à 90%",
          "Provoque une dyschromie des dents",
          "Ne provoque aucune lésion des tissus mous",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Le peroxyde d'hydrogène (eau oxygénée) est un agent d'éclaircissement. Les concentrations utilisées en dentisterie vont jusqu'à environ 35-40%. Il est un agent éclaircissant (et non dyschromiant) et peut être caustique pour les tissus mous s'il n'est pas correctement manipulé."
      },
      {
        questionText: "Les facettes collées peuvent être :",
        options: [
          "Des facettes en céramique confectionnées au laboratoire",
          "Des facettes directes par stratification au composite",
          "Des facettes directes par estampage",
          "Des facettes préfabriquées en céramique",
          "Des facettes préfabriquées en composite"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Il existe une grande variété de facettes : celles en céramique (faites au laboratoire), celles en composite réalisées directement en bouche (par stratification ou avec un moule), et des facettes préfabriquées (principalement en composite) qui sont adaptées et collées."
      },
      {
        questionText: "L'éclaircissement sur les dents pulpées est indiqué dans le cas :",
        options: [
          "Des fluoroses",
          "Des colorations dues au vieillissement",
          "Des colorations congénitales",
          "Des dyschromies très accentuées",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'éclaircissement externe est efficace pour les colorations légères à modérées, qu'elles soient dues au vieillissement, à des facteurs externes, ou à des pathologies comme une fluorose légère. Il est peu efficace sur les dyschromies très sévères (ex: tétracyclines stade 3)."
      },
      {
        questionText: "Dans l'éclaircissement des dents dépulpées au fauteuil, le praticien utilise :",
        options: [
          "Le perborate de sodium",
          "Le peroxyde de carbamide",
          "Le peroxyde d'hydrogène",
          "Une gouttière",
          "Une digue étanche"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Pour un éclaircissement interne, divers produits peuvent être utilisés (perborate, peroxydes). L'isolation avec une digue est absolument indispensable pour protéger le patient et les tissus mous des agents chimiques, et pour assurer des conditions de travail aseptiques."
      },
      {
        questionText: "La technique d'éclaircissement sur dents pulpées en ambulatoire :",
        options: [
          "Se fait par voie externe",
          "Utilise le peroxyde de carbamide",
          "Utilise le peroxyde d'hydrogène",
          "Utilise une gouttière confectionnée au laboratoire",
          "Nécessite une fluoration en fin de traitement"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La technique ambulatoire (home bleaching) se fait par voie externe. Elle consiste pour le patient à porter des gouttières sur mesure contenant un gel de peroxyde de carbamide. Une application de fluor en fin de traitement est souvent recommandée pour gérer les sensibilités."
      },
      {
        questionText: "Avant l’éclaircissement sur dent traitée endodontiquement, l'obturation canalaire est protégée par :",
        options: [
          "Ca(OH)2",
          "ZnO-eugénol",
          "CVI",
          "Coton",
          "Vernis"
        ],
        correctOptionIndexes: [2],
        explanation: "Pour un éclaircissement interne, il est crucial de réaliser un bouchon étanche au-dessus de l'obturation canalaire pour empêcher le produit éclaircissant de diffuser vers le péri-apex. Un Ciment Verre Ionomère (CVI) est le matériau de choix pour ce bouchon cervical."
      },
      {
        questionText: "La technique thermo-catalytique d'éclaircissement dentaire fait appel à :",
        options: [
          "Au rayonnement laser",
          "À une source de lumière",
          "À une source de chaleur",
          "L'eau oxygénée à 100 volumes",
          "L'eau oxygénée à 10 volumes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La technique thermocatalytique, aujourd'hui abandonnée, consistait à activer un peroxyde très concentré (eau oxygénée à 100-130 volumes, soit 30-35%) à l'aide d'un instrument chauffé. Les risques de brûlure et de résorption radiculaire l'ont rendue obsolète."
      },
      {
        questionText: "La technique immédiate d'éclaircissement est réalisée :",
        options: [
          "Au peroxyde de carbamide à 1%",
          "Au peroxyde de carbamide à 35%",
          "Au moyen d’une gouttière",
          "Sur dents pulpées",
          "Sur dents dépulpées"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La technique 'immédiate' (ou 'in-office') se fait au fauteuil sur des dents pulpées. Elle utilise des produits très concentrés (comme le peroxyde de carbamide à 35%) pour obtenir un résultat rapide en une seule séance."
      },
      {
        questionText: "Le perborate de sodium :",
        options: [
          "Est utilisé pour l’éclaircissement des dents par technique ambulatoire dite médiate",
          "Est utilisé par voie intra-coronaire",
          "Est utilisé pour l’éclaircissement des dents dépulpées",
          "Est utilisé pour l’éclaircissement des dents vivantes",
          "Se présente sous forme d'un gel contenu dans un tube"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le perborate de sodium est un agent éclaircissant sous forme de poudre, utilisé spécifiquement pour l'éclaircissement interne (voie intra-coronaire) des dents dépulpées, notamment dans la technique ambulatoire 'walking bleach'."
      },
      {
        questionText: "L'apparition de résorption cervicale peut être liée à :",
        options: [
          "L'éclaircissement au perborate de sodium",
          "L'éclaircissement au peroxyde d'hydrogène",
          "Un polissage dentaire",
          "L'utilisation d'eau oxygénée à forte concentration"
        ],
        correctOptionIndexes: [3],
        explanation: "La résorption cervicale externe est une complication rare mais grave de l'éclaircissement interne. Elle est principalement associée à la diffusion de peroxyde d'hydrogène à forte concentration à travers les tubuli dentinaires au niveau de la jonction amélo-cémentaire, provoquant une réaction inflammatoire."
      },
      {
        questionText: "La micro-abrasion amélaire :",
        options: [
          "Est indiquée dans les fluoroses sévères",
          "Élimine juste la partie la plus superficielle de l'émail",
          "Est indiquée dans les séquelles des traumatismes de dents temporaires sur les dents permanentes",
          "Utilise le peroxyde de carbamide à 35%",
          "Utilise une ponce à base d'oxyde de silicium"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La micro-abrasion est une technique qui élimine chimiquement et mécaniquement une très fine couche superficielle de l'émail. Elle utilise une pâte contenant un acide (HCl) et un abrasif (ponce, oxyde de silicium). Elle est indiquée pour les taches superficielles de l'émail, comme celles causées par un traumatisme sur la dent temporaire sous-jacente."
      },
      {
        questionText: "La micro-abrasion est indiquée :",
        options: [
          "Avant l’éclaircissement",
          "Après l’éclaircissement",
          "Dans tous les cas de dyschromies",
          "Dans le cas de fluorose sévère",
          "Dans le cas de MIH légère"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "La micro-abrasion est indiquée pour les taches superficielles. Dans les cas de dyschromies mixtes (taches et coloration de fond), elle est souvent réalisée avant une séance d'éclaircissement pour en améliorer le résultat. Elle peut être efficace sur les opacités d'une MIH légère."
      }
    ]
  }
];


module.exports = oceQuizzes;