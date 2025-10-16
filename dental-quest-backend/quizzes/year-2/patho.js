const pathoQuizzes = [
  {
    title: "Examen clinique du patient et fiche d'observation",
    subject: "patho",
    questions: [
      {
        questionText: "L'examen clinique exo-buccal",
        options: [
          "Est une étape incontournable de la consultation initiale",
          "Permet de déceler les signes subjectifs d'une patho",
          "Est toujours précédé d'un bilan radiologique.",
          "Doit rechercher une réaction péri-apicale"
        ],
        correctOptionIndexes: [0],
        explanation: "L'examen clinique exo-buccal est une étape essentielle de la consultation initiale car il permet au clinicien d'observer des signes objectifs. Les signes subjectifs (symptômes) sont recueillis lors de l'interrogatoire. Le bilan radiologique est complémentaire et non systématique. Les réactions péri-apicales sont généralement identifiées par radiographie."
      },
      {
        questionText: "L'examen de la cinétique mandibulaire met en évidence:",
        options: [
          "Le degré de l'ouverture buccale.",
          "Une suppuration",
          "L'état des muqueuses.",
          "Le jeu des condyles mandibulaires"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'examen de la cinétique mandibulaire vise à évaluer les mouvements de la mandibule et le fonctionnement de l'articulation temporo-mandibulaire, incluant le degré d'ouverture buccale et le jeu des condyles mandibulaires."
      },
      {
        questionText: "L'examen clinique endo-buccal:",
        options: [
          "Permet de mettre en lumière un risque lié à une patho générale.",
          "Est une étape incontournable de la consultation initiale.",
          "Doit rechercher une réaction péri-apicale.",
          "Doit être précédé d'un bilan radiologique."
        ],
        correctOptionIndexes: [1],
        explanation: "L'examen clinique endo-buccal est une étape initiale fondamentale pour le diagnostic de toute patho médicale. Les risques liés à une patho générale sont mis en évidence par l'interrogatoire. Bien qu'il aide à détecter les signes indirects de réaction péri-apicale, cela nécessite des examens radiographiques complémentaires pour un diagnostic fiable. Le bilan radiologique est complémentaire et non systématique."
      },
      {
        questionText: "En pratique quotidienne, l'interrogatoire:",
        options: [
          "Permet souvent de déterminer un diagnostic de certitude.",
          "Permet de mettre en évidence les signes subjectifs d'une maladie.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Doit toujours être complété par des examens radiologiques et/ou biologiques"
        ],
        correctOptionIndexes: [1],
        explanation: "L'interrogatoire a pour but de recueillir les signes subjectifs, c'est-à-dire les symptômes ressentis et décrits par le patient. Il oriente le diagnostic mais ne permet pas toujours une certitude immédiate, contient plus que l'état civil et les examens complémentaires ne sont pas toujours obligatoires."
      },
      {
        questionText: "La fiche d'observation clinique :",
        options: [
          "Est un document optionnel.",
          "Est un document médico-légal.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Est rédigée par le patient."
        ],
        correctOptionIndexes: [1],
        explanation: "La fiche d'observation clinique est un document essentiel à la fois pédagogique, scientifique et médico-légal. Elle contient des informations complètes (état civil, antécédents, résultats cliniques et complémentaires) et est rédigée par le praticien, non par le patient."
      },
      {
        questionText: "L'examen des aires ganglionnaires:",
        options: [
          "Est obligatoire chez un patient diabétique déséquilibré",
          "Est systématique quel que soit le motif de consultation.",
          "Doit être complété par un examen radiologique.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [3],
        explanation: "L'examen des aires ganglionnaires n'est pas systématique, il est orienté par le contexte pathologique et recommandé dans des situations spécifiques (infections, inflammations). C'est un examen clinique qui ne nécessite pas forcément de radiographie."
      },
      {
        questionText: "L'examen clinique endo-buccal",
        options: [
          "Permet de mettre en évidence un risque lié à une patho générale",
          "Doit être précédé d'un bilan radiologique",
          "Est une étape incontournable de la consultation initiale",
          "Doit rechercher une réaction péri-apicale"
        ],
        correctOptionIndexes: [2],
        explanation: "L'examen clinique endo-buccal est une étape essentielle de la consultation initiale. La recherche d'un risque lié à une patho générale relève de l'interrogatoire, et le bilan radiologique est complémentaire et non systématique. La vérification des réactions péri-apicales est un objectif important mais n'englobe pas l'entièreté de cette étape incontournable."
      },
      {
        questionText: "Parmi ces propositions, laquelle (s) est (sont) juste(s):",
        options: [
          "Les examens complémentaires sont prescrits systématiquement au terme de l'examen clinique",
          "Un examen bucco-facial rigoureux est une étape indispensable du bilan pré-opératoire,",
          "L'examen des aires ganglionnaires se fait lors de l'examen endo-buccal.",
          "L'examen de la cinétique mandibulaire met en évidence l'état des muqueuses"
        ],
        correctOptionIndexes: [1],
        explanation: "Un examen bucco-facial rigoureux est effectivement indispensable avant une intervention. Les examens complémentaires ne sont pas systématiques. L'examen des aires ganglionnaires est exo-buccal, et la cinétique mandibulaire évalue les mouvements, non l'état des muqueuses."
      },
      {
        questionText: "Citez dans l'ordre les étapes de l'examen clinique",
        options: [
          "Examen exo-buccal, Examen endo-buccal, Interrogatoire, Examen complémentaire",
          "Interrogatoire, Examen exo-buccal, Examen endo-buccal, Examen complémentaire",
          "Interrogatoire, Examen endo-buccal, Examen exo-buccal, Examen complémentaire",
          "Examen complémentaire, Interrogatoire, Examen exo-buccal, Examen endo-buccal"
        ],
        correctOptionIndexes: [1],
        explanation: "Les étapes de l'examen clinique sont: Interrogatoire, Examen exo-buccal, Examen endo-buccal, Examen complémentaire (si nécessaire)."
      }
    ]
  },
  {
    title: "Cabinet dentaire et dispositifs chirurgicaux",
    subject: "patho",
    questions: [
      {
        questionText: "Les conditions d'ouverture d'un cabinet dentaire sont, un local:",
        options: [
          "Equipé d'un laboratoire dentaire.",
          "Avec un sol imperméable permettant un nettoyage fréquent et facile.",
          "Possédant une aération permanente.",
          "Avec au moins un lavabo."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Un laboratoire dentaire est un élément facultatif, non une condition obligatoire pour l'ouverture d'un cabinet dentaire. Les autres conditions (sol imperméable, aération, lavabo) sont, elles, essentielles pour l'hygiène et le bon fonctionnement."
      },
      {
        questionText: "Parmi les conditions d'ouverture d'un cabinet dentaire :",
        options: [
          "Local équipé d'appareil de radiographie panoramique obligatoire.",
          "Le médecin dentiste doit être inscrit au conseil de l'ordre.",
          "Un local sufficiently aéré et éclairé (lumière naturelle).",
          "Doit être installé au rez-de-chaussée."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'inscription au conseil de l'ordre est une obligation légale, et un bon éclairage et une ventilation adéquate sont essentiels. L'équipement radiographique n'est pas obligatoire pour tous les cabinets, et l'installation au rez-de-chaussée n'est pas une obligation."
      },
      {
        questionText: "Le micromoteur:",
        options: [
          "Est un accessoire facultatif du fauteuil dentaire,",
          "Permet l'insertion de la turbine.",
          "Permet l'insertion des contre-angles et de pièces à main",
          "Son sens de rotation peut être choisi"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le micromoteur est un instrument essentiel (non facultatif) qui permet l'insertion des contre-angles et des pièces à main, et son sens de rotation peut être choisi. Il n'est pas utilisé pour insérer la turbine, qui fonctionne indépendamment."
      },
      {
        questionText: "Eclairage:",
        options: [
          "La lumière préconisée est celle que assure une répartition graduelle",
          "L'asthénie visuelle n'est pas en rapport avec l'éclairage",
          "La lumière de la salle doit être plus intense que le scialytique",
          "La loupe binoculaire est d'une grande utilisé"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Une lumière à répartition graduelle et l'utilisation de loupes binoculaires sont recommandées pour un bon éclairage. L'asthénie visuelle (fatigue oculaire) est directement liée à un mauvais éclairage. La lumière de la salle doit être moins intense que le scialytique pour éviter l'éblouissement."
      },
      {
        questionText: "La posture:",
        options: [
          "La posture ne constitue pas une mesure pour le confort du praticien",
          "Le transfert de charge de plus de 60% au niveau de la zone charnière lombo sacrée",
          "La position debout est la position la plus admise",
          "Le Médecin dentiste doit se déplacé dans son cabinet"
        ],
        correctOptionIndexes: [1],
        explanation: "En dentisterie, la posture est cruciale pour le confort du praticien, et un transfert de charge important vers la zone lombo-sacrée est une réalité ergonomique. La position assise est généralement préférée à la position debout pour la plupart des actes."
      },
      {
        questionText: "Les instruments rotatifs qui accompagnent le fauteuil dentaire:",
        options: [
          "La turbine qui fonctionne à grande vitesse à 160000/420000 tr/m.",
          "La turbine qui fonctionne à faible vitesse.",
          "Le micromoteur qui fonctionne par air comprimé qui tourne à 400000 tr/mn",
          "Le micromoteur qui fonctionne par courant électrique qui tourne à 400000 tr/mn"
        ],
        correctOptionIndexes: [0],
        explanation: "Les turbines dentaires sont des instruments rotatifs conçus pour fonctionner à de très grandes vitesses (160 000 à 420 000 tr/min), idéales pour travailler sur les tissus durs comme l'émail. Les micromoteurs fonctionnent à des vitesses bien inférieures (environ 40 000 tr/min)."
      },
      {
        questionText: "Le fauteuil dentaire est toujours équipé :",
        options: [
          "D'une aspiration chirurgicale.",
          "D'une pompe à salive.",
          "D'un laser.",
          "D'un piezotome."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le fauteuil dentaire est systématiquement équipé d'une aspiration chirurgicale et d'une pompe à salive pour maintenir un champ opératoire sec. Le laser et le piézotome sont des équipements spécialisés, non systématiquement présents sur tous les fauteuils dentaires."
      },
      {
        questionText: "Les instruments rotatifs (turbines, contre angle..)",
        options: [
          "Sont autoclavables.",
          "Ne sont pas autoclavables.",
          "Leur désinfection suffit pour une autre réutilisation.",
          "Leur stérilisation se fait uniquement par la chaleur sèche"
        ],
        correctOptionIndexes: [0],
        explanation: "Les instruments rotatifs dentaires modernes sont conçus pour être autoclavés, ce qui est la méthode de stérilisation la plus courante et recommandée pour garantir l'efficacité et la sécurité. La désinfection seule est insuffisante et la stérilisation par chaleur sèche n'est plus la méthode de référence."
      },
      {
        questionText: "La pince gouge :",
        options: [
          "Est une pince qui sert à suturé la muqueuse",
          "Est une pince qui sert à la dissection",
          "Est une pince qui sert à réséquer l'os alvéolaire",
          "Est une pince qui sert à extraire les racines"
        ],
        correctOptionIndexes: [2],
        explanation: "La pince gouge est un instrument chirurgical dentaire spécifiquement utilisé pour réséquer ou remodeler l'os alvéolaire, en particulier lors d'extractions complexes."
      },
      {
        questionText: "Citez dans l'ordre les étapes de la stérilisation",
        options: [
          "Stérilisation, Conditionnement, Nettoyage, Pré-désinfection, Stockage",
          "Pré-désinfection, Nettoyage, Rinçage + Séchage, Conditionnement, Stérilisation, Stockage",
          "Nettoyage, Rinçage, Stérilisation, Stockage, Conditionnement",
          "Pré-désinfection, Stérilisation, Nettoyage, Conditionnement, Stockage"
        ],
        correctOptionIndexes: [1],
        explanation: "Les étapes de la chaîne de stérilisation sont: Pré-désinfection, Nettoyage, Rinçage + Séchage, Conditionnement, Stérilisation, Stockage."
      }
    ]
  },
  {
    title: "Approche psychologique du patient au cabinet dentaire",
    subject: "patho",
    questions: [
      {
        questionText: "La prémédication sédative",
        options: [
          "Remplace efficacement l'approche psychologique de patios ayant soul",
          "Doit tenir compte des prescriptions médicamenteuses en cours",
          "Est systématique en présence d'un état infectieux local",
          "Permet le bon déroulement de l'intervention"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La prémédication sédative ne remplace pas l'approche psychologique, mais la complète. Il est impératif de prendre en compte les prescriptions médicamenteuses du patient pour éviter les interactions. Elle n'est pas systématique en cas d'infection locale mais peut faciliter le déroulement de l'intervention en réduisant l'anxiété."
      }
    ]
  },
  {
    title: "Antisepsie, asepsie et stérilisation au cabinet dentaire",
    subject: "patho",
    questions: [
      {
        questionText: "La pré-désinfection:",
        options: [
          "Permet d'obtenir des instruments en état de stérilisation",
          "A pour objectif de faciliter le nettoyage en évitant le séchage des matières organiques",
          "Se fait d'abord au poupinel puis à l'autoclave afin de renforcer ce procédé",
          "Se fait par immersion des instruments dans un bac contenant un produit détergent-désinfectant pendant 15 min minimum"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La pré-désinfection vise à réduire la charge microbienne et à empêcher le séchage des souillures sur les instruments avant le nettoyage. Elle s'effectue par immersion dans une solution détergente-désinfectante. La stérilisation permet d'obtenir des instruments stériles, et l'autoclave est pour la stérilisation, non la pré-désinfection."
      },
      {
        questionText: "Conditionnement:",
        options: [
          "Est l'étape finale de la chaine d'asepsie.",
          "N'est nécessaire que si la stérilisation se fait par la chaleur séche",
          "A pour but de protéger le matériel propre avant stérilisation.",
          "Permet de conserver l'état stérile après stérilisation."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le conditionnement est une étape cruciale qui protège le matériel propre avant la stérilisation et assure le maintien de la stérilité après celle-ci, quelle que soit la méthode utilisée. Le stockage est l'étape finale de la chaîne d'asepsie."
      },
      {
        questionText: "Le cabinet dentaire doit être équipé :",
        options: [
          "D'un autoclave de classe S.",
          "D'un autoclave de classe B",
          "D'un poupinel",
          "D'un stérilisateur ultrasonique."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cabinet dentaire doit être équipé d'un autoclave de classe B, car il assure une stérilisation complète d'une large gamme d'instruments. Le poupinel est obsolète, et un stérilisateur ultrasonique est un nettoyeur, pas un stérilisateur."
      },
      {
        questionText: "Parmi ces propositions, laquelle(s) est (sont) juste(s):",
        options: [
          "La pré-désinfection a pour but d'éviter le séchage des souillures sur le matériel",
          "Le nettoyage assure l'élimination de toute forte microbienne",
          "Le traitement requis en zone Test un bionettoyage quotidien",
          "Le conditionnement des dispositifs médicaux n'est nécessaire que si la stérilisation se fait par la chaleur sèche"
        ],
        correctOptionIndexes: [0],
        explanation: "La pré-désinfection réduit la charge microbienne et empêche le séchage des souillures. Le nettoyage réduit les saletés mais ne garantit pas l'élimination de tous les microbes. Le conditionnement est toujours nécessaire."
      },
      {
        questionText: "La gestion des OPCT:",
        options: [
          "Répond à une réglementation bien spécifique..",
          "Est la même que pour les DASRI",
          "Se fait à l'aide de conteneurs rigides.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les OPCT (objets piquants, coupants, tranchants) nécessitent des conteneurs rigides spécifiques et une réglementation distincte de celle des DASRI généraux."
      },
      {
        questionText: "Les instruments réutilisables dits critiques:",
        options: [
          "Sont représentés par les instruments chirurgicaux",
          "Nécessitent une stérilisation sans emballage.",
          "Sont les instruments qui sont en contact avec la muqueuse buccale.",
          "Nécessitent une stérilisation avec emballage"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les instruments critiques, comme les instruments chirurgicaux, sont ceux qui pénètrent dans les tissus stériles. Ils nécessitent une stérilisation avec conditionnement (emballage)."
      },
      {
        questionText: "La stérilisation à l'autoclave:",
        options: [
          "Se fait grâce à la vapeur d'eau saturée.",
          "Le plateau thermique peut atteindre 134°C.",
          "Concerne seulement les instruments.",
          "Ne nécessite pas une désinfection préalable."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La stérilisation à l'autoclave utilise la vapeur d'eau saturée et atteint typiquement 134°C. Elle concerne tous les dispositifs médicaux réutilisables et nécessite une préparation préalable."
      },
      {
        questionText: "Dans un cabinet dentaire.",
        options: [
          "La zone 2 nécessite un nettoyage quotidien avec un produit détergent",
          "La zone 3 nécessite un bionettoyage après toute intervention avec un produit détergent désinfectant nomé",
          "La circulation à sens unique du patient est préconisée",
          "Le risque de contamination aérienne se situe uniquement dans la salle de soin"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La Zone 3 (intervention) nécessite un bionettoyage après chaque acte. Une circulation à sens unique est recommandée pour l'hygiène."
      },
      {
        questionText: "Le lavage des mains:",
        options: [
          "Se fait avec une solution hydroalcoolique.",
          "Peut remplacer le port des gants",
          "Se fait après chaque soin.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [2],
        explanation: "Le lavage des mains (ou l'antisepsie) doit être effectué après chaque soin et ne remplace pas le port des gants."
      },
      {
        questionText: "La stérilisation:",
        options: [
          "A pour objectif de prévenir le risque infectieux, tant pour le patient que pour l'équipe soignante.",
          "Vise à obtenir un état propreté macroscopique à la surface de l'instrumentation.",
          "S'effectue au moyen d'un thermo-désinfecteur dont le principe est de combiner la chaleur et pression élevée.",
          "S'adresse uniquement aux dispositifs médicaux non dynamiques."
        ],
        correctOptionIndexes: [0],
        explanation: "La stérilisation a pour objectif principal d'éliminer tous les micro-organismes pour prévenir les infections."
      },
      {
        questionText: "En pratique quotidienne, les instruments rotatif:",
        options: [
          "Ne sont pas autoclavables",
          "Leur désinfection suffit pour une autre réutilisation",
          "Leur stérilisation se fait uniquement à la chaleur sèche afin d'assurer leur longévité",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [3],
        explanation: "Les instruments rotatifs modernes sont autoclavables et nécessitent une stérilisation complète, généralement par chaleur humide. Aucune des propositions n'est donc correcte."
      },
      {
        questionText: "La stérilisation des instruments doit se faire:",
        options: [
          "A la chaleur sèche",
          "Par immersion dans un bac contenant un produit détergent-désinfection. en respectant un temps minimum de 30 min",
          "A la chaleur humide avec une température de 134, maintenu au moins 18 minutes",
          "D'abord au poupinel puis à l'autoclave afin de renforcer ce procédé"
        ],
        correctOptionIndexes: [2],
        explanation: "La stérilisation de référence se fait par chaleur humide (autoclave) à 134°C pendant au moins 18 minutes."
      }
    ]
  },
  {
    title: "Indications et contre-indications des extractions dentaires",
    subject: "patho",
    questions: [
      {
        questionText: "Les contre-indications de l'extraction dentaire sont:",
        options: [
          "Une dent de sagesse incluse asymptomatique",
          "Une résorption radiculaire.",
          "Une dent fonctionnelle cariée.",
          "Une dent de lait mobile"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Une dent de sagesse incluse asymptomatique et une dent fonctionnelle cariée (qui peut être traitée) sont des contre-indications à l'extraction. La résorption radiculaire et une dent de lait mobile sont généralement des indications."
      },
      {
        questionText: "L'avulsion d'une dent de lait est indiquée, si:",
        options: [
          "Elle est à l'origine d'une parulie",
          "Elle siège sur le trait de fracture",
          "Elle est cariée.",
          "La dent permanente est absente"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'avulsion d'une dent de lait est indiquée si elle est à l'origine d'une infection (parulie) ou si elle siège sur un trait de fracture. Une simple carie peut être traitée."
      },
      {
        questionText: "Avant une avulsion dentaire, le risque hémorragique est évalué chez :",
        options: [
          "Les malades souffrant d'un trouble plaquettaire.",
          "Les malades sous anticoagulants.",
          "Les malades traités par radiothérapie cervico-faciale.",
          "Les hémophiles."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le risque hémorragique doit être évalué chez les patients ayant des troubles plaquettaires, ceux sous anticoagulants ou les hémophiles."
      },
      {
        questionText: "Parmi les propositions suivantes, quelle(s) est(sont) celle(s) qui est(sont) vraie(s)?",
        options: [
          "Les cardiopathies à risque infectieux peuvent subir une extraction dentaire avec un INR égale à 2.",
          "Une dent responsable d'un épisode infectieux type cellulite doit être extraite.",
          "Toute dent en malposition doit être extraite",
          "L'avulsion de la dent de sagesse mandibulaire peut être indiquée pour maintenir le résultat esthétique et éviter les récidives."
        ],
        correctOptionIndexes: [3],
        explanation: "L'avulsion de la dent de sagesse mandibulaire peut être indiquée pour des raisons esthétiques ou orthodontiques. Une dent infectée (cellulite) n'est extraite que si elle est irrécupérable. Les dents en malposition ne sont pas toujours extraites."
      },
      {
        questionText: "Par définition, une dent ectopique:",
        options: [
          "Est située au niveau du maxillaire mais éloignée du site normal",
          "Est située en dehors des maxillaires",
          "Occupe une place normale sur l'arcade mais elle a subi une rotation de 45° à 180° autour de son axe longitudinal",
          "A subi une rotation de 180° autour de l'axe mésio-distal"
        ],
        correctOptionIndexes: [0],
        explanation: "Une dent ectopique est une dent dont l'éruption se produit dans une position anormale, éloignée de son site habituel, mais toujours au niveau des maxillaires."
      },
      {
        questionText: "Parmi les indications d'extraction des dents temporaires :",
        options: [
          "Dents cariées présentant une pulpite irréversible.",
          "Dents temporaires à l'origine de parulies.",
          "Dents temporaires qui bloquent l'éruption physiologique des dents permanentes.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [3],
        explanation: "Toutes les propositions (pulpite irréversible, parulie, blocage de l'éruption) sont des indications valides pour l'extraction des dents temporaires."
      },
      {
        questionText: "Chez les patients présentant un risque hémorragique, l'extraction dentaire est effectuée:",
        options: [
          "Avec un taux d'INR récent compris entre 2-4.",
          "Avec un taux d'INR récent supérieur à 4.",
          "Avec un taux de plaquettes inférieur à 50 000/mm³",
          "Avec un taux de plaquettes supérieur à 100 000/mm."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'extraction est réalisable avec un INR entre 2 et 4, ou un taux de plaquettes supérieur à 100 000/mm³. Un INR > 4 ou des plaquettes < 50 000/mm³ indiquent un risque trop élevé."
      },
      {
        questionText: "L'antibioprophylaxie lors de l'extraction dentaire chez les cardiopathies à risque d'endocardite infectieuse est:",
        options: [
          "Obligatoire.",
          "Facultative.",
          "Basée sur l'administration de 2 gr d'amoxicilline 30 min à 1h avant l'acte.",
          "Basée sur l'administration de 2gr d'amoxicilline 48 h avant l'acte."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'antibioprophylaxie est obligatoire chez les patients à haut risque et consiste en 2g d'amoxicilline 30-60 minutes avant l'acte."
      },
      {
        questionText: "Parmi les indications locales de l'extraction de la dent de 6 ans, nous citons:",
        options: [
          "Une atteinte de la furcation par lésion carieuse avancée.",
          "La présence d'une lésion péri-apicale volumineuse à l'origine d'une cellulite..",
          "Une dyschromie.",
          "Une fracture longitudinale radiculaire sous une couronne coulée."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Une atteinte de furcation, une lésion péri-apicale compliquée ou une fracture radiculaire sont des indications d'extraction. Une dyschromie ne l'est pas."
      },
      {
        questionText: "Parmi les contre-indications de l'extraction d'une dent de sagesse, nous citons:",
        options: [
          "Evolution avec positionnement correcte de la dent sur l'arcade.",
          "Dent cariée à l'origine d'accidents infectieux récurrents,",
          "Dent située sur un trait de fracture de l'angle mandibulaire,",
          "Dent saine entravant l'éruption physiologique de la dent adjacente"
        ],
        correctOptionIndexes: [0],
        explanation: "Une dent de sagesse bien positionnée, fonctionnelle et asymptomatique est une contre-indication à l'extraction."
      },
      {
        questionText: "Les extractions dentaires sont contre-indiquées dans les cas suivants:",
        options: [
          "Une péricoronarite suppurée en rapport avec une 38 enclavée.",
          "Un patient porteur de prothèse valvulaire avec un INR égale à 4.90.",
          "Un patient porteur d'une prothèse valvulaire avec un INR égale à 2.30.",
          "Un patient diabétique mal équilibré sans aucune précaution particulière."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Un INR de 4.90 ou un diabète mal contrôlé sont des contre-indications temporaires. La péricoronarite est une indication, et un INR de 2.30 est acceptable."
      },
      {
        questionText: "Dans quel cas l'indication de l'avulsion parait indiscutable",
        options: [
          "A chaque fois qu'il y a un processus caricux",
          "Devant toutes anomalies de position.",
          "Lorsqu'il ya une maladie parodontale avec une perte osseuse et mobilité dentaire",
          "Lors d'une cellulite séreuse"
        ],
        correctOptionIndexes: [2],
        explanation: "Une maladie parodontale avancée avec perte osseuse et mobilité est une indication indiscutable d'extraction. Les autres situations peuvent souvent être traitées autrement."
      },
      {
        questionText: "Une femme enceinte de 04 mois se présente pour l'avulsion de la 36:",
        options: [
          "Il est préférable d'attendre après l'accouchement pour réaliser l'avulsion",
          "L'avulsion est possible mais avec une prémédication sédative",
          "L'avulsion peut être réalisée mais en évitant l'anesthésie tronculaire",
          "L'avulsion peut être réalisée en toute sécurité"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Pour les interventions non urgentes, il est préférable d'attendre après l'accouchement. Cependant, si nécessaire, l'avulsion peut être réalisée en toute sécurité pendant le deuxième trimestre."
      },
      {
        questionText: "Parmi ces propositions, laquelle est vraie ?",
        options: [
          "L'avulsion est contre-indiquée chez toutes les personnes âgées sans bilan sanguin préalable",
          "Chez un patient sous anticoagulants il convient d'évaluer le risque hémorragique avant d'intervenir.",
          "L'avulsion dentaire expose à un risque hémorragique tous les patients qui présentent un antécédent d'endocardite d'Osler",
          "L'avulsion dentaire peut être réalisée en toute sécurité chez les patients sous immuno-suppresseurs"
        ],
        correctOptionIndexes: [1],
        explanation: "Il est crucial d'évaluer le risque hémorragique chez les patients sous anticoagulants. Les autres propositions contiennent des généralisations incorrectes."
      }
    ]
  },
  {
    title: "Anesthésie en odontostomatologie",
    subject: "patho",
    questions: [
      {
        questionText: "Dans une carpule anesthésique, le produit est sous forme:",
        options: [
          "Non ionisée",
          "Ionisée",
          "Diffusible",
          "Non diffusible."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'anesthésique dans la carpule est sous forme non ionisée et diffusible pour pénétrer les tissus. Il devient ionisé au contact de la membrane nerveuse."
      },
      {
        questionText: "L'anesthésie tronculaire à l'épine de Spix est:",
        options: [
          "Complétée par une anesthésie muqueuse.",
          "Utilisée pour l'extraction des dents maxillaires.",
          "Utilisée pour l'extraction du bloc incisivo-canin mandibulaire.",
          "Toujours complétée par une anesthésie intra-septale."
        ],
        correctOptionIndexes: [0],
        explanation: "L'anesthésie tronculaire à l'épine de Spix est principalement pour les molaires mandibulaires et nécessite une anesthésie péri-apicale vestibulaire complémentaire car la muqueuse est innervée par le nerf buccal."
      },
      {
        questionText: "Le vasoconstricteur présente l'avantage:",
        options: [
          "D'augmenter la résorption de la molécule.",
          "De diminuer la résorption de la molécule.",
          "D'augmenter la durée d'anesthésie.",
          "D'augmenter le saignement pendant les actes chirurgicaux."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les vasoconstricteurs réduisent la résorption de l'anesthésique et augmentent sa durée d'action en diminuant le flux sanguin local, ce qui réduit aussi le saignement."
      },
      {
        questionText: "Parmi les contre-indications des vasoconstricteurs:",
        options: [
          "Hémophilie.",
          "Femme enceinte",
          "Diabète équilibré.",
          "Tumeur de la médullo-surrénale."
        ],
        correctOptionIndexes: [3],
        explanation: "Les vasoconstricteurs sont contre-indiqués en cas de tumeur de la médullo-surrénale en raison de leurs effets tachycardisants et hypertensifs."
      },
      {
        questionText: "Lors de phénomènes inflammatoires, le milieu dans lequel on injecte le produit anesthésique est déjà acide, le produit est donc :",
        options: [
          "Immédiatement activé.",
          "Immédiatement diffusé.",
          "Ne diffuse pas",
          "Non ionisé"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "En milieu inflammatoire acide, le produit anesthésique est immédiatement ionisé (activé), ce qui l'empêche de diffuser efficacement vers les terminaisons nerveuses."
      },
      {
        questionText: "L'anesthésie de surface est:",
        options: [
          "Indiquée en cas d'un drainage exobuccal",
          "Peut être utilisée au niveau cutané",
          "Généralement commercialisée sous formes de carpules de 1.8ml.",
          "Suffit pour l'avulsion des dents de lait"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'anesthésie de surface insensibilise temporairement la muqueuse ou la peau. Elle n'est pas commercialisée en carpules et ne suffit généralement pas pour une extraction."
      },
      {
        questionText: "L'anesthésie intra-ligamentaire;",
        options: [
          "Consiste à infiltrer la solution analgésique dans le desmodonte.",
          "Est indiquée pour l'extraction des molaires.",
          "Est parfois utilisée en complément d'une anesthésie para-apicale.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'anesthésie intra-ligamentaire consiste à injecter dans le desmodonte et est souvent utilisée en complément, mais ne suffit pas seule pour l'extraction de molaires."
      },
      {
        questionText: "Les accidents allergiques immédiats liés aux anesthésiques locaux:",
        options: [
          "Sont fréquents.",
          "Sont souvent dus aux conservateurs et aux stabilisants présents dans la carpule.",
          "Se voient surtout avec les molécules amino-esters.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les réactions allergiques immédiates sont rares, plus souvent dues aux conservateurs et plus fréquentes avec les amino-esters."
      },
      {
        questionText: "La mépivacaine est :",
        options: [
          "Une solution anesthésique de la famille des amino-esters",
          "Contre-indiquée chez tous les malades à risque.",
          "La plus récente des anesthésiques locaux.",
          "Moins vasodilatatrice que la lidocaine."
        ],
        correctOptionIndexes: [3],
        explanation: "La mépivacaïne est de la famille des amino-amides, moins vasodilatatrice que la lidocaïne, ce qui permet son utilisation sans adrénaline chez les patients à risque."
      },
      {
        questionText: "Parmi les techniques anesthésiques suivantes, laquelle est réalisée en deux temps:",
        options: [
          "L'anesthésie intra-ligamentaire.",
          "L'anesthésie intra-pulpaire.",
          "L'anesthésie muqueuse.",
          "L'anesthésie para-apicale"
        ],
        correctOptionIndexes: [3],
        explanation: "L'anesthésie para-apicale est réalisée en deux temps (vestibulaire puis palatin/lingual)."
      },
      {
        questionText: "La dépolarisation est due à:",
        options: [
          "La sortie du potassium de la fibre nerveuse à partir de liquide extracellulaire.",
          "La sortie du sodium de la fibre nerveuse,",
          "L'entrée du sodium de la fibre nerveuse",
          "L'entrée du potassium de la fibre nerveuse."
        ],
        correctOptionIndexes: [2],
        explanation: "La dépolarisation de la fibre nerveuse, qui initie l'influx nerveux, est principalement due à l'entrée du sodium (Na+) dans la fibre."
      },
      {
        questionText: "L'infiltration du produit anesthésique se fait toujours à distance du foyer infectieux, car:",
        options: [
          "L'effet anesthésique est moindre.",
          "Le risque d'allergie est augmenté.",
          "Il y a un risque hémorragique important",
          "Elle peut provoquer un essaimage bactérien à distance"
        ],
        correctOptionIndexes: [3],
        explanation: "L'infiltration près d'un foyer infectieux risque de disséminer les bactéries. De plus, l'acidité du milieu réduit l'efficacité de l'anesthésie."
      },
      {
        questionText: "L'adjonction d'adrénaline aux anesthésiques locaux présente l'avantage:",
        options: [
          "De diminuer la résorption de la molécule.",
          "D'augmenter la résorption de la molécule",
          "D'augmenter la durée d'anesthésie.",
          "D'augmenter le saignement pendant les actes chirurgicaux."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'adrénaline, en tant que vasoconstricteur, diminue la résorption de l'anesthésique, ce qui prolonge la durée d'anesthésie et réduit le saignement."
      },
      {
        questionText: "Les anesthésiques locaux sont différents par:",
        options: [
          "Le pka",
          "La capacité de liaison aux protéines",
          "Le mode de conditionnement des carpules d'anesthésie.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les anesthésiques locaux diffèrent par leur pKa (délai d'installation) et leur capacité de liaison aux protéines (durée d'action)."
      },
      {
        questionText: "L'influx nerveux est bloqué par les anesthésiques locaux :",
        options: [
          "En inhibant le flux potassique entrant.",
          "En inhibant le flux sodique entrant.",
          "En inhibant le flux potassique sortant.",
          "En inhibant le flux sodique sortant."
        ],
        correctOptionIndexes: [1],
        explanation: "Les anesthésiques locaux agissent en bloquant la conduction de l'influx nerveux en inhibant spécifiquement l'entrée du flux sodique dans la cellule."
      },
      {
        questionText: "Le risque d'une nécrose osseuse peut être retrouvé suite:",
        options: [
          "A une anesthésie tronculaire à l'épine de Spix.",
          "A une anesthésie intra-osseuse.",
          "A une anesthésie locale au niveau du palais.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La nécrose osseuse est un risque potentiel des anesthésies intra-osseuses et des anesthésies locales au niveau du palais si elles sont mal effectuées."
      },
      {
        questionText: "Le Tétrafluorodichloroethane (Friljet):",
        options: [
          "Est utilisé pour une anesthésie par réfrigération.",
          "Est utilisé pour une anesthésie par infiltration,",
          "Est indiquée en pré anesthésie chez les sujets anxieux.",
          "Est indiqué pour l'avulsion de dent monoradiculée."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le Friljet est un produit de réfrigération pour une anesthésie de surface rapide, utile en pré-anesthésie chez les patients anxieux."
      },
      {
        questionText: "L'anesthésie tronculaire à l'épine de Spix:",
        options: [
          "Est indiquée pour l'avulsion des incisives mandibulaires",
          "Est réalisée chez les patients sous anticoagulants",
          "Se fait avec vasoconstricteur.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [3],
        explanation: "L'anesthésie tronculaire à l'épine de Spix est pour les molaires mandibulaires, est contre-indiquée sans précaution chez les patients sous anticoagulants, et se fait souvent sans vasoconstricteur."
      },
      {
        questionText: "L'analgésie du nerf alvéolaire inférieur:",
        options: [
          "Nécessite une technique d'anesthésie tronculaire à la lingula (épine de Spix)",
          "Peut être obtenue par une technique d'anesthésie locale",
          "Est indiquée pour l'extraction des molaires mandibulaires",
          "Se fait à l'aide d'un porte campule ordinaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'analgésie du nerf alvéolaire inférieur est obtenue par anesthésie tronculaire à la lingula et est indiquée pour l'extraction des molaires mandibulaires."
      },
      {
        questionText: "L'anesthésie para-apicale:",
        options: [
          "Est une technique régionale courante",
          "Est indiquée pour l'extraction des mobiles supérieure",
          "Est suffisante pour les prémolaires inférieure",
          "peut être complétée par une infiltration"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'anesthésie para-apicale est une technique d'infiltration locale, indiquée pour les dents mobiles supérieures et peut être complétée si nécessaire."
      },
      {
        questionText: "L'articaine est :",
        options: [
          "Faiblement dosée en vasoconstricteur",
          "Est métabolisée au niveau hépatique",
          "Fait partie de la famille des amino ester",
          "Est réservée à l'adulte"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'articaine est rapidement métabolisée par les estérases plasmatiques et hépatiques. Elle peut être faiblement dosée en vasoconstricteur et n'est pas exclusivement réservée aux adultes."
      },
      {
        questionText: "Les vasoconstricteurs",
        options: [
          "Permettent d'accélérer la diffusion des AL",
          "A forte dose peuvent entrainer un malaise cardiaque"
        ],
        correctOptionIndexes: [1],
        explanation: "Les vasoconstricteurs à forte dose peuvent entraîner un malaise cardiaque. Ils ralentissent la diffusion des anesthésiques locaux."
      },
      {
        questionText: "L'anesthésie tronculaire à la Lingula:",
        options: [
          "Est indiquée pour l'extraction de la 36,",
          "Est contre indiquée en cas de trouble d'hémostase chez le patient",
          "Se fait souvent avec VC",
          "Est utilisée de préférence pour une chirurgie au maxillaire supérieur."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'anesthésie tronculaire à la Lingula est pour les extractions des molaires mandibulaires (ex: 36) et est contre-indiquée en cas de troubles de l'hémostase."
      },
      {
        questionText: "Les anesthésiques locaux doivent avoir:",
        options: [
          "Une activité spécifique transitoire et irréversible.",
          "Une action non irritante pour les tissus",
          "Un délai d'action lent",
          "Solubles dans l'eau et les graisses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les anesthésiques locaux doivent être non irritants, solubles dans l'eau et les graisses, et leur action doit être transitoire et réversible avec un délai d'action rapide."
      },
      {
        questionText: "Parmi les causes d'échec d'une anesthésie buccale:",
        options: [
          "Abaissement du pH des tissus (l'anesthésique ne pénètre pas les tissus nerveux).",
          "L'importance de l'épaisseur de la table externe du maxillaire.",
          "Absence d'anastomoses.",
          "Injection d'une quantité insuffisante d'anesthésique"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Un pH bas dans les tissus inflammatoires ou une quantité insuffisante d'anesthésique peuvent entraîner un échec de l'anesthésie."
      },
      {
        questionText: "Avec une carpule de 3% de scandicaine, et pour une personne de poids moyen de 65kg la dose toxique est atteinte à :",
        options: [
          "10 carpules de 1.8ml",
          "06 carpules de 1.8ml",
          "08 carpules de 1.8ml",
          "04 carpules de 1.8ml"
        ],
        correctOptionIndexes: [2],
        explanation: "Dose max = 6mg/kg. Pour 65kg = 390mg. 1 carpule 3% = 54mg. 390/54 ≈ 7.2 carpules. La dose toxique est atteinte à 8 carpules."
      },
      {
        questionText: "Dans le cas d'une pulpectomie sur la 23:",
        options: [
          "L'anesthésie de la muqueuse palatine est nécessaire",
          "L'anesthésie vestibulaire est complétée par une injection palatine",
          "L'anesthésie palatine se fait au trou rétro incisif",
          "L'anesthésie vestibulaire peut être complétée par une anesthésie intrapulpaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Pour une pulpectomie, une anesthésie vestibulaire est essentielle et peut être complétée par une anesthésie intrapulpaire si l'anesthésie vestibulaire est insuffisante."
      },
      {
        questionText: "L'anesthésie du nerf alvéolaire inférieur :",
        options: [
          "Utilise un anesthésique avec vasoconstricteur",
          "Peut avoir comme complication un hématome latéro-pharyngé",
          "Doit être complétée par une injection vestibulaire pour une pulpectomie sur la 46",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Une complication potentielle de l'anesthésie du nerf alvéolaire inférieur est l'hématome latéro-pharyngé."
      },
      {
        questionText: "L'anesthésie intraosseuse",
        options: [
          "Peut remplacer une anesthésie du nerf alvéolaire inférieur à la lingula pour l'avulsion d'une 38",
          "Est réalisé avec le même matériel qu'une anesthésie tronculaire",
          "L'anesthésie de la muqueuse vestibulaire n'est pas nécessaire",
          "L'injection se fait au contact de la corticale vestibulaire"
        ],
        correctOptionIndexes: [0],
        explanation: "L'anesthésie intra-osseuse peut remplacer l'anesthésie tronculaire pour l'avulsion de certaines dents mandibulaires. Elle nécessite un matériel spécifique."
      }
    ]
  },
  {
    title: "Techniques simples d'extractions dentaires",
    subject: "patho",
    questions: [
        {
            questionText: "Le temps alvéolaire:",
            options: [
                "Consiste à éliminer le tissu de granulation",
                "Sera suivi obligatoirement par la réalisation de sutures afin de prévenir une éventuelle hémorragie.",
                "Permet de retirer le fragment osseux fracturé",
                "Ne concerne que les dents pluriradiculées."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Le temps alvéolaire (révision/curetage) consiste à explorer l'alvéole pour retirer les débris et peut permettre de retirer un fragment osseux fracturé. La suture n'est pas toujours obligatoire."
        },
        {
            questionText: "Pour les conseils post-opératoires, il faut prescrire :",
            options: [
                "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse,",
                "Une alimentation chaude le premier jour.",
                "Un antalgique type salicylé pour diminuer les douleurs post-extractionnelles.",
                "Toutes les réponses sont fausses."
            ],
            correctOptionIndexes: [3],
            explanation: "Après une avulsion, il faut éviter les bains de bouche pendant 24h, proscrire les boissons chaudes et les salicylés (aspirine). Toutes les réponses proposées sont fausses."
        },
        {
            questionText: "Lors de la luxation:",
            options: [
                "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent voisine.",
                "Le maintien des tables osseuses est nécessaire.",
                "L'opérateur se place devant et à gauche du patient pour les dents maxillaires",
                "L'instrument utilisé est un élévateur tenu à plein main"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Lors de la luxation, il faut maintenir les tables osseuses et tenir l'élévateur à pleine main. Il ne faut pas prendre appui sur les dents voisines."
        },
        {
            questionText: "L'instrumentation nécessaire pour l'avulsion dentaire simple est :",
            options: [
                "Le syndesmotome.",
                "Le bistouri",
                "Le décolleur.",
                "La pince gouge."
            ],
            correctOptionIndexes: [0],
            explanation: "Le syndesmotome est l'instrument clé pour sectionner les fibres desmodontales avant l'avulsion."
        },
        {
            questionText: "Le davier utilisé pour l'extraction de la 1 molaire supérieure comporte des :",
            options: [
                "Mors symétriques, égaux, jointifs.",
                "Mors symétriques, égaux, sous forme de S allongé",
                "Mors asymétriques avec un ergot médian qui vient s'insérer dans la furcation vestibulaire",
                "Mors larges et longs, sans ergot médian."
            ],
            correctOptionIndexes: [2],
            explanation: "Le davier pour la 1ère molaire supérieure a des mors asymétriques avec un ergot médian qui s'insère dans la furcation vestibulaire."
        },
        {
            questionText: "Le davier utilisé pour l'extraction de la 1ère prémolaire supérieure:",
            options: [
                "Comporte des mors asymétriques avec un ergot médian qui vient s'insérer dans la furcation vestibulaire.",
                "Comporte des mors symétriques, égaux, jointifs.",
                "Comporte des mors symétriques, égaux, sous forme de S allongé.",
                "Sert indifféremment pour le côté droit et gauche."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Le davier pour la 1ère prémolaire supérieure a des mors symétriques, non jointifs, en forme de S, et il sert indifféremment pour les deux côtés."
        },
        {
            questionText: "Après une avulsion dentaire simple, il faut prescrire:",
            options: [
                "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse.",
                "Une alimentation chaude le premier jour",
                "Systématiquement un antibiotique afin d'éviter une surinfection post-extractionnelle",
                "Toutes les réponses sont fausses."
            ],
            correctOptionIndexes: [3],
            explanation: "Après une avulsion simple, il faut éviter les bains de bouche pendant 24h, les boissons chaudes, et les antibiotiques ne sont pas systématiques."
        },
        {
            questionText: "L'instrumentation nécessaire pour l'avulsion dentaire simple est:",
            options: [
                "Le syndesmotome.",
                "Le bistouri",
                "Le décolleur.",
                "La curette"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le syndesmotome sectionne les fibres desmodontales et la curette est utilisée pour le nettoyage alvéolaire."
        },
        {
            questionText: "La syndesmotomie :",
            options: [
                "Consiste à couper les fibres du ligament alvéolo-dentaire autour de la dent.",
                "L'instrument utilisé est appelé élévateur tenu comme un stylo.",
                "L'instrument est introduit entre la sertissure gingivale et le collet des dents.",
                "L'instrument est introduit entre l'os alvéolaire et le cément de la racine."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La syndesmotomie consiste à couper les fibres du ligament autour de la dent et est réalisée avec un syndesmotome introduit entre la gencive et le collet."
        },
        {
            questionText: "Avant toute extraction dentaire:",
            options: [
                "L'examen clinique est obligatoire.",
                "L'examen radiologique n'est pas systématique.",
                "La difficulté opératoire est déterminée par l'évaluation de l'état parodontal",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [0],
            explanation: "L'examen clinique est une étape initiale essentielle et systématique avant toute avulsion dentaire."
        },
        {
            questionText: "Lors de l'avulsion d'une dent lactate",
            options: [
                "La luxation se fait uniquement en vestibulo linguale afin d'éviter la lésion du germe définitive",
                "Le praticien se positionne en face et à droite de l'opéré pour la mandibule",
                "Le curetage alvéolaire n'est pas recommandé",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [2],
            explanation: "Le curetage alvéolaire n'est pas recommandé lors de l'avulsion d'une dent lactéale car il peut endommager le germe de la dent permanente."
        },
        {
            questionText: "La révision alvéolaire :",
            options: [
                "N'est pas systématique après une avulsion dentaire",
                "Doit toujours comprendre un curetage alvéolaire",
                "Permet une hémostase locale",
                "Permet d'éliminer les débris dentaires et osseux"
            ],
            correctOptionIndexes: [3],
            explanation: "La révision alvéolaire permet d'éliminer les débris dentaires, osseux et les tissus pathologiques résiduels."
        },
        {
            questionText: "Le mouvement imprimé au davier pour extraire une 45 est :",
            options: [
                "Un mouvement de rotation combiné à une traction vers le haut",
                "Un mouvement de traction vers le haut uniquement",
                "Un mouvement vestibulo-linguale",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [2],
            explanation: "Pour extraire une 45 (première prémolaire mandibulaire), le mouvement approprié est généralement un mouvement vestibulo-lingual pour luxer la dent."
        }
    ]
  },
  {
    title: "Complications avulsionnelles (per et post opératoires)",
    subject: "patho",
    questions: [
        {
            questionText: "L'atteinte du nerf lingual:",
            options: [
                "Fait suite à l'extraction d'une dent mandibulaire",
                "Est une complication sans conséquence, rapidement résolutive.",
                "Entraine une séduction de la mobilité linguale.",
                "Aucune réponse n'est juste."
            ],
            correctOptionIndexes: [3],
            explanation: "La lésion du nerf lingual est une complication grave de l'extraction des 3èmes molaires inférieures, affectant la sensation et non la mobilité. Sa résolution peut être longue ou incomplète."
        },
        {
            questionText: "La communication bucco-sinusienne:",
            options: [
                "Fait suite à l'extraction de dents antrales.",
                "Se manifeste par un test de Valsalva positif",
                "Se manifeste par un test de Valsalva négatif.",
                "Se traduit cliniquement par un refoulement de liquide par le nez."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La communication bucco-sinusienne suit l'extraction de dents antrales, est diagnostiquée par un test de Valsalva positif et peut entraîner un reflux de liquide par le nez."
        },
        {
            questionText: "L'alvéolite suppurée:",
            options: [
                "Est une surinfection du caillot at parfois de l'alvéole.",
                "Est due à une anomalie de fibrinolyse déstabilisant le caillot",
                "Se manifeste par des douleurs plus intenses que l'alvéolite sèche",
                "Entraine une fièvre et adénopathie régionale."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "L'alvéolite suppurée est une infection de l'alvéole ou du caillot, entraînant fièvre et adénopathie, avec des douleurs intenses."
        },
        {
            questionText: "La manœuvre de Valsalva est pratiquée devant",
            options: [
                "Une avulsion d'une dent antrale",
                "Une avulsion dentaire faite au maxillaire",
                "Toute extraction dentaire",
                "Une sinusite maxillaire d'origine dentaire"
            ],
            correctOptionIndexes: [0],
            explanation: "La manœuvre de Valsalva est utilisée pour diagnostiquer une communication bucco-sinusienne, souvent après l'extraction d'une dent antrale."
        },
        {
            questionText: "La projection d'une dent de sagesse supérieure dans le sinus maxillaire:",
            options: [
                "S'accompagne d'une communication bucco-sinusienne.",
                "Se traduit cliniquement par une hypoesthésie de la région naso-génienes",
                "Suit une manœuvre de luxation mal contrôlée.",
                "Nécessite une abstention thérapeutique en raison de la complexité des suites post-opératoires."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La projection d'une dent de sagesse dans le sinus entraîne une communication bucco-sinusienne et est souvent le résultat d'une luxation mal contrôlée."
        },
        {
            questionText: "L'alvéolite suppurée est :",
            options: [
                "Le plus souvent rencontrée sur les prémolaires mandibulaires",
                "Associée à une perte partielle ou totale du caillot sanguin",
                "Accompagnée de douleurs d'intensité moins importante que dans l'alvéolite sèche",
                "Généralement spontanément résolutive"
            ],
            correctOptionIndexes: [2],
            explanation: "L'alvéolite suppurée est une infection de l'alvéole et ses douleurs peuvent être moins intenses que celles de l'alvéolite sèche. Elle n'est pas spontanément résolutive."
        },
        {
            questionText: "Pour prévenir l'apparition d'une CBS:",
            options: [
                "La radiographie pré-opératoire est obligatoire.",
                "Le curetage est systématique.",
                "L'extraction doit être atraumatique.",
                "Une attention particulière pour les dents maxillaires antérieures."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Une radiographie pré-opératoire et une extraction atraumatique sont essentielles pour prévenir une communication bucco-sinusienne, surtout pour les dents maxillaires postérieures."
        },
        {
            questionText: "La paralysie faciale transitoire peut être une complication:",
            options: [
                "De l'anesthésie péri-apicale.",
                "De l'extraction des dents de sagesse mandibulaires.",
                "De l'anesthésie tronculaire à l'épine de Spix.",
                "De l'extraction des dents de sagesse maxillaires."
            ],
            correctOptionIndexes: [2],
            explanation: "La paralysie faciale transitoire est une complication possible de l'anesthésie tronculaire à l'épine de Spix si l'anesthésique diffuse vers le nerf facial."
        },
        {
            questionText: "La luxation de l'ATM:",
            options: [
                "Peut survenir suite à une ouverture buccale prolongée lors de l'extraction.",
                "Se résout par la manœuvre de Nelaton.",
                "Se manifeste par une limitation de l'ouverture buccale.",
                "L'atteinte de l'ATM est irréversible."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La luxation de l'ATM peut survenir après une ouverture buccale prolongée et se réduit par la manœuvre de Nelaton. Elle se manifeste par une incapacité à fermer la bouche."
        },
        {
            questionText: "La fracture d'une table osseuse externe au cours d'une extraction dentaire:",
            options: [
                "Est parfois mutilante dans la mesure où elle compromet la réhabilitation prothétique.",
                "Peut être à l'origine d'une dénudation des racines des dents adjacentes.",
                "Le praticien se doit de retirer le fragment osseux qui pourrait venir perturber la cicatrisation osseuse.",
                "Survient fréquemment lors de l'avulsion d'une dent lactéale."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La fracture d'une table osseuse peut compromettre la prothèse, dénuder les racines adjacentes, et le fragment doit être retiré. Elle est rare lors de l'extraction de dents lactéales."
        },
        {
            questionText: "La fracture de la tubérosité:",
            options: [
                "Survient fréquemment à la suite de l'extraction de la 2ème molaire supérieure",
                "Se traduit cliniquement par une hypoesthésie de la région nasogénienne",
                "Fait suite à un mouvement de luxation mal contrôlé",
                "Peut-être prévenue par la réalisation d'un examen radiologique"
            ],
            correctOptionIndexes: [2, 3],
            explanation: "La fracture de la tubérosité survient souvent lors d'un mouvement de luxation mal contrôlé et peut être prévenue par un examen radiologique."
        },
        {
            questionText: "l'effraction accidentelle de sinus maxillaire",
            options: [
                "Est diagnostiquée par la manœuvre de Nelaton",
                "Est une complication immédiate de l'avulsion dentaire",
                "Se manifeste cliniquement par un reflux des liquides par le nez",
                "Est d'évolution favorable, ne nécessitant aucun traitement"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "L'effraction du sinus maxillaire est une complication immédiate de l'avulsion, se manifestant par un reflux de liquide par le nez. Elle peut nécessiter un traitement."
        },
        {
            questionText: "L'alvéolite sèche:",
            options: [
                "Est une complication immédiate de l'avulsion dentaire",
                "Est la conséquence d'une surinfection de l'alvéole ou du caillot sanguin.",
                "Se caractérise par une alvéole comblée par des détritus d'odeur fétide.",
                "Son traitement est à base de bain de bouche antiseptique"
            ],
            correctOptionIndexes: [2],
            explanation: "L'alvéolite sèche se manifeste par une alvéole béante avec un os visible et des détritus d'odeur fétide. Son traitement implique un curetage et un pansement."
        },
        {
            questionText: "Une atteinte du nerf lingual:",
            options: [
                "Survient fréquemment à la suite de l'extraction de la 1 molaire mandibulaire.",
                "Se traduit cliniquement par une paralysie de l'hémi-langue homolatérale.",
                "S'améliore habituellement lentement au cours des six premiers mois post-opératoires.",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [2],
            explanation: "Les lésions du nerf lingual peuvent s'améliorer lentement. Elles entraînent une atteinte sensitive (anesthésie/paresthésie), pas une paralysie."
        },
        {
            questionText: "Dans le cas d'une alvéolite sèche :",
            options: [
                "Le curetage se fera sous anesthésie locale sans vasoconstricteur.",
                "Le curetage se fera sous anesthésie locale avec vasoconstricteur.",
                "Le traitement antibiotique est systématique.",
                "Le curetage permet d'éliminer un tissu de granulation."
            ],
            correctOptionIndexes: [0],
            explanation: "Le traitement de l'alvéolite sèche inclut un curetage sous anesthésie locale sans vasoconstricteur pour favoriser une bonne circulation. L'alvéolite sèche est caractérisée par l'absence de tissu de granulation."
        },
        {
            questionText: "Une de ces complications ne peut pas survenir après l'extraction d'une molaire inferieure:",
            options: [
                "Une communication bucco-sinusienne.",
                "Un refoulement de dent de sagesse dans le plancher buccal.",
                "Une fracture de la table osseuse.",
                "Une hypoesthésie labio-mentonnière par lésion nerveuse."
            ],
            correctOptionIndexes: [0],
            explanation: "Une communication bucco-sinusienne ne peut pas survenir après l'extraction d'une molaire inférieure car il n'y a pas de proximité avec le sinus maxillaire."
        }
    ]
  },
  {
    title: "Éruption dentaire normale et pathologique",
    subject: "patho",
    questions: [
        {
            questionText: "L'éruption dentaire:",
            options: [
                "Est un processus biologique par lequel une dent en développement émerge à travers l'os et la muqueuse orale.",
                "Est un processus continu qui ne se termine qu'avec la perte de la dent.",
                "Correspond aux phénomènes liés à l'évolution des dents sur l'arcade.",
                "Désigne l'ensemble des dents en place sur l'arcade"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'éruption dentaire est le processus biologique d'émergence de la dent, et c'est un processus continu. La 'dentition' correspond aux phénomènes évolutifs, et la 'denture' à l'ensemble des dents en place."
        },
        {
            questionText: "La chute prématurée des dents temporaires:",
            options: [
                "Est due au développement précoce du germe d'une dens permanente.",
                "Est généralement associée à des pathos générales telles que le Chérubisme.",
                "Concerne préférentiellement la canine maxillaire, l'incisive latérale maxillaire",
                "Concerne l'ensemble des dents temporaires"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La chute prématurée des dents temporaires peut être due au développement précoce du germe permanent ou être associée à des pathos générales comme le Chérubisme."
        },
        {
            questionText: "Dans la dentition temporaire:",
            options: [
                "L'éruption a lien plus tôt chez les garçons que chez les filles.",
                "L'éruption chez les filles précède celle des garçons sauf pour les molaires et incisives.",
                "Les dents mandibulaires précédent les dents maxillaires",
                "Les incisives centrales mandibulaires précèdens leurs homologues maxillaires."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Dans la dentition temporaire, l'éruption est plus précoce chez les garçons, et les incisives centrales mandibulaires précèdent leurs homologues maxillaires."
        },
        {
            questionText: "La phase post-éruptive:",
            options: [
                "Débute lorsque les dents sont fonctionnelles et continue lentement tant que la dent reste sur l'arcade.",
                "Débute de l'émergence dans la cavité buccale jusqu'au contact occlusal",
                "Commence du début du développement radiculaire jusqu'à l'émergence dans la cavité buccale.",
                "Commence du début de l'édification radiculaire et se termine lorsque la dent atteint un contact occlusal"
            ],
            correctOptionIndexes: [0],
            explanation: "La phase post-éruptive (ou fonctionnelle) débute lorsque les dents sont fonctionnelles et se poursuit tant qu'elles restent sur l'arcade."
        },
        {
            questionText: "L'éruption tardive d'une dent unitaire:",
            options: [
                "Est relativement fréquente",
                "Est liée généralement à un facteur local tel une malposition dentaire.",
                "Est liée à un facteur systémique comme une carence vitaminique A et D.",
                "Toutes les réponses sont justes,"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'éruption tardive d'une dent unitaire est fréquente et souvent liée à un facteur local. Les facteurs systémiques sont plus associés à l'éruption tardive de plusieurs dents."
        },
        {
            questionText: "Une dent néo-natale:",
            options: [
                "Est présente dans la cavité buccale à la naissance.",
                "Est habituellement peu développée avec peu ou pas de formation radiculaire.",
                "Se situe uniquement au niveau de la région des incisives mandibulaires.",
                "Toutes les réponses sont justes."
            ],
            correctOptionIndexes: [1],
            explanation: "La dent néonatale fait son éruption dans les 30 premiers jours de vie. Elle est souvent mobile avec une édification radiculaire incomplète."
        },
        {
            questionText: "Parmi les anomalies chronologiques, nous citons",
            options: [
                "Les dents néonatales qui sont présentes à la naissance,",
                "La folliculite expulsive de Capdepont.",
                "Le défaut primaire d'éruption.",
                "La transposition qui est la permutation des positions de deux dents"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La folliculite expulsive de Capdepont et les défauts primaires d'éruption sont des anomalies chronologiques. La transposition est une anomalie topographique."
        },
        {
            questionText: "Une éruption dentaire est retardée :",
            options: [
                "Lorsqu'elle survient 6 mois après les dates normales d'éruption pour les dents temporaires",
                "Lorsqu'elle survient 6 mois après les dates normales d'éruption pour les dents permanentes.",
                "Lorsque l'homologue de la dent permanente évolue depuis plus de 6 mois,",
                "Plus fréquemment en dentition permanente qu'en dentition temporaire"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Une éruption est retardée si elle survient 6 mois après la date normale pour les dents temporaires, ou si l'homologue a évolué depuis plus de 6 mois. Les retards sont plus fréquents en dentition permanente."
        },
        {
            questionText: "L'éruption dentaire est:",
            options: [
                "Un mécanisme physiologique qui permet de déplacer la dent depuis son site initial jusqu'à l'occlusion.",
                "Un phénomène mécanique qui permet l'émergence de la dent sur l'arcade.",
                "Coordonnée et régulée par le sac folliculaire.",
                "Coordonnée et régulée par la croissance radiculaire et la pression intra-pulpaire."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "L'éruption dentaire est un processus physiologique complexe coordonné et régulé par le sac folliculaire, qui est essentiel pour la phase intra-osseuse."
        },
        {
            questionText: "L'éruption tardive des dents permanentes est liée:",
            options: [
                "A la calcification du follicule dentaire hyperplasique",
                "A la carence en vitamine B et D",
                "A une anomalie morphologique de l'os alvéolaire",
                "Au syndrome de Turner"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "L'éruption tardive peut être liée à une calcification du follicule, une anomalie osseuse, ou au syndrome de Turner. Une carence en vitamines A et D est également un facteur."
        },
        {
            questionText: "Une dent natale:",
            options: [
                "Est la présence d'une dent sur l'arcade à la naissance",
                "Est une dent faisant son éruption dans les 30 premiers jours de vie.",
                "Concerne rarement l'incisive centrale mandibulaire",
                "Est due à une position très superficielle du germe"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Une dent natale est présente à la naissance et est souvent due à une position très superficielle du germe. Elle concerne fréquemment les incisives centrales mandibulaires."
        },
        {
            questionText: "Parmi les causes du retard d'éruption des dents lactéales:",
            options: [
                "Une anomalie morphologique de la dent",
                "Une surcharge nutritionnelle.",
                "Une hyperfonction endocrinienne",
                "Une origine héréditaire"
            ],
            correctOptionIndexes: [3],
            explanation: "Le retard d'éruption des dents lactéales peut avoir une origine héréditaire. Les déficits nutritionnels et les hypofonctions endocriniennes peuvent être des causes, mais pas l'inverse."
        },
        {
            questionText: "Le follicule dentaire joue un rôle essentiel dans le phénomène éruptif de la dent:",
            options: [
                "Durant la phase intra-osseuse",
                "Durant la phase extra-osseuse",
                "Durant la formation de la racine",
                "Durant la formation du ligament parodontal"
            ],
            correctOptionIndexes: [0],
            explanation: "Le follicule dentaire est essentiel à l'éruption, en particulier durant la phase intra-osseuse, en contribuant à la formation du chemin d'éruption."
        }
    ]
  },
  {
    title: "Anomalies dentaires",
    subject: "patho",
    questions: [
        {
            questionText: "La forme hypoplasique de l'amélogénèse imparfaite",
            options: [
                "Correspond à une déficience de la quantité d'email",
                "Atteint particulièrement les molaires temporaires",
                "Est caractérisée par une minéralisation normale de l'émail contrairement aux autres formes",
                "Est une anomalie acquise"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "L'amélogenèse imparfaite hypoplasique se caractérise par une déficience de la quantité d'émail et une minéralisation normale. C'est une anomalie héréditaire."
        },
        {
            questionText: "Dans la dentinogénèse imparfaite de type 1:",
            options: [
                "La denture permanente est moins atteinte que la denture temporaire.",
                "Il n'y a pas d'atteinte osseuse",
                "La radiographie panoramique montre une anomalie de forme dentaire très caractéristique",
                "Présente les mêmes caractéristiques cliniques que la dentinogénèse imparfaite de type II."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "La DI de type I affecte les deux dentures, est associée à l'ostéogenèse imparfaite, montre des anomalies radiographiques et des similitudes cliniques avec le type II."
        },
        {
            questionText: "La gémination:",
            options: [
                "Est une dysmorphie coronaire,",
                "Est le déplacement de la dent au sein du maxillaire.",
                "Est l'union de deux germes dentaires.",
                "Peut être confondue avec la fusion"
            ],
            correctOptionIndexes: [3],
            explanation: "La gémination résulte d'une tentative de division d'un seul germe dentaire et peut être confondue avec la fusion, qui est l'union de deux germes distincts."
        },
        {
            questionText: "La dilacération:",
            options: [
                "Est une anomalie de structure héréditaire",
                "Peut être confondue avec le taurodonitisme.",
                "Survient quand un traumatisme mécanique affecte une dent temporaire et se répercute au niveau du germe définitif.",
                "Est une dysmorphie coronaire"
            ],
            correctOptionIndexes: [2],
            explanation: "La dilacération est une modification de l'axe de la dent due à un traumatisme sur le germe dentaire. Ce n'est pas une anomalie héréditaire."
        },
        {
            questionText: "L'inclusion des dents permanentes est généralement due à :",
            options: [
                "Une anomalie de croissance de l'os alvéolaire",
                "Une évolution d'une maladie carieuse,",
                "La présence d'un odontome ou dents surnuméraires.",
                "Toutes les réponses sont justes."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "L'inclusion est due à des facteurs locaux comme l'espace insuffisant, des obstacles (odontome) et des anomalies de croissance osseuse. Elle n'est pas due à une maladie carieuse."
        },
        {
            questionText: "La dentinogénèse imparfaite:",
            options: [
                "Est toujours associée à des signes généraux.",
                "Est souvent confondue avec l'amélogénèse imparfaite",
                "Affecte les deux dentures à des degrés différents.",
                "Est une anomalie de structure où seules les couronnes dentaires présentent une altération."
            ],
            correctOptionIndexes: [2],
            explanation: "La dentinogenèse imparfaite affecte les deux dentures à des degrés différents et n'est pas toujours associée à des signes généraux. Elle affecte principalement la dentine."
        },
        {
            questionText: "Le taurodontisme:",
            options: [
                "Est une dysmorphie coronaire.",
                "Survient quand un traumatisme mécanique affecte une dent temporaire.",
                "Affecte habituellement les molaires.",
                "Peut constituer une entité clinique isolée ou être associé à une amélogénèse imparfaite."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Le taurodontisme est une anomalie de forme radiculaire, affectant principalement les molaires, et peut apparaître seul ou être associé à d'autres troubles."
        },
        {
            questionText: "L'agénésie dentaire",
            options: [
                "Est définie par l'absence d'une ou plusieurs dents sur arcade",
                "Est la conséquence de l'union de deux germes dentaires",
                "Affecte principalement la denture temporaire",
                "Peut être associée à plusieurs syndromes"
            ],
            correctOptionIndexes: [3],
            explanation: "L'agénésie est l'absence congénitale d'une ou plusieurs dents et peut être associée à plusieurs syndromes. Elle affecte plus fréquemment la denture permanente."
        },
        {
            questionText: "Parmi ces propositions, laquelle (lesquelles) est (sont) juste (s) :",
            options: [
                "Le mésiodens est une dent dysmorphique, le plus souvent conoïde",
                "Le tubercule de Bolk est une dysmorphie corons radiculaire",
                "La dilacération peut être confondue avec le traurodonisme",
                "Une dent ectopique est une dent située en dehors de son couloir d'éruption"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le mésiodens est une dent surnuméraire dysmorphique. Une dent ectopique est située en dehors de son couloir d'éruption."
        },
        {
            questionText: "Le mésiodens :",
            options: [
                "Est une anomalie dentaire de structure",
                "Désigne une dent dysmorphique, le plus souvent conoïde.",
                "Est susceptible d'entraver l'éruption des dents permanente",
                "Siège le plus souvent en juxta-palatin des prémolaires."
            ],
            correctOptionIndexes: [1],
            explanation: "Le mésiodens est une dent surnuméraire dysmorphique (souvent conoïde), qui peut entraver l'éruption des incisives permanentes et siège dans la région antérieure du maxillaire."
        },
        {
            questionText: "L'agénésie:",
            options: [
                "Est définie par l'absence d'une dent sur arcade",
                "Est une anomalie beaucoup plus fréquente en denture temporaire",
                "Peut être associée à d'autres anomalies, dans de nombreux syndromes.",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [2],
            explanation: "L'agénésie peut être associée à d'autres anomalies et syndromes. Elle est plus fréquente en denture permanente."
        },
        {
            questionText: "Définissez : A. L'ectopie B. L'hétérotopie C. Anodontie D. La dilacération",
            options: [
              "A: angulation, B: absence totale, C: hors maxillaire, D: site éloigné",
              "A: site éloigné, B: hors maxillaire, C: absence totale, D: angulation",
              "A: hors maxillaire, B: site éloigné, C: angulation, D: absence totale",
              "A: absence totale, B: angulation, C: site éloigné, D: hors maxillaire"
            ],
            correctOptionIndexes: [1],
            explanation: "L'ectopie: dent éruptant dans un site éloigné mais au niveau du maxillaire. L'hétérotopie: dent se situant en dehors des maxillaires. L'anodontie: absence totale de dents. La dilacération: angulation de la dent."
        }
    ]
  }
];

module.exports = pathoQuizzes;