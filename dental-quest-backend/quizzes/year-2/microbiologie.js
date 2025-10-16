const microbiologyQuizzesY2 = [
  {
    title: "7- Critères de choix d'un antibiotique",
    subject: "microbiologie",
    questions: [
      {
        questionText: "La détermination de la concentration minimale inhibitrice est un test de laboratoire qui permet de :",
        options: [
          "Vérifier la sensibilité de la bactérie vis-à-vis d'un antibiotique",
          "Adapter la posologie de l'antibiotique",
          "Doser l'antibiotique dans le sang",
          "Evaluer le risque de toxicité",
          "Déterminer le support génétique de la résistance"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La CMI est la concentration minimale capable d'inhiber la croissance visible d'une bactérie. Elle est essentielle pour évaluer la sensibilité (A) et pour choisir une dose thérapeutique suffisante (B), évitant les doses excessives.",
        citations: [1000, 1001]
      },
      {
        questionText: "L'antibiogramme est réalisé :",
        options: [
          "Selon des techniques standardisées",
          "Sur une culture bactérienne pure",
          "En utilisant une liste commune d'antibiotiques pour toutes les bactéries",
          "En respectant un inoculum bactérien précis",
          "Dans le but de détecter les résistances acquises"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "L'antibiogramme doit être réalisé sur une culture pure (B), en respectant un inoculum précis (D) et des techniques standardisées (A) pour évaluer les résistances (E). La liste des antibiotiques dépend de l'espèce bactérienne et du site de l'infection.",
        citations: [1002, 1003]
      },
      {
        questionText: "Les tests de sensibilité aux antibiotiques sont : (cocher la réponse fausse)",
        options: [
          "L'antibiogramme",
          "La détermination de la concentration minimale inhibitrice (CMI)",
          "La détection de bêta-lactamase",
          "Le dosage des antibiotiques dans le sérum",
          "La détermination de la concentration minimale bactéricide (CMB)"
        ],
        correctOptionIndexes: [3],
        explanation: "L'antibiogramme, la CMI, la détection de bêta-lactamase et la CMB sont des tests de sensibilité. Le dosage dans le sérum mesure la concentration de l'ATB chez le patient, mais n'informe pas directement sur la sensibilité de la bactérie.",
        citations: [1004, 1005]
      },
      {
        questionText: "Une association d'antibiotiques est indiquée pour : (cocher la réponse fausse)",
        options: [
          "Elargir le spectre d'activité",
          "Obtenir une synergie",
          "Traiter les infections à bactéries multi-résistantes",
          "Couvrir une infection pluri-microbienne",
          "Réduire la durée du traitement"
        ],
        correctOptionIndexes: [4],
        explanation: "Les objectifs d'une association sont : obtenir un effet synergique, élargir le spectre, gérer les infections polymicrobiennes et limiter l'émergence de résistances. La réduction de la durée du traitement n'est pas un objectif principal ou garanti.",
        citations: [1006, 1007]
      },
      {
        questionText: "Pour le choix d'une thérapie à base d'antibiotiques, certains critères bactériologiques sont à respecter comme: (cocher les réponses fausses)",
        options: [
          "L'antibiotique dépend de la bactérie responsable de l'infection.",
          "Le choix de l'antibiotique dépend de la sensibilité de la bactérie à cet antibiotique.",
          "Le choix de l'antibiotique dépend de l'individu malade, son âge et son état physiologique.",
          "Il faut respecter les spectres d'activité des antibiotiques pour éviter toute éventuelle résistance possible.",
          "Ce choix fait suite à la connaissance des résistances naturelles et les taux de résistances acquises dans la région."
        ],
        correctOptionIndexes: [2],
        explanation: "Les critères A, B, D et E sont des critères bactériologiques. Le critère C (âge, état physiologique de l'individu) est un critère pharmacologique/clinique relatif à l'hôte, non bactériologique.",
        citations: [1008, 1009, 1010, 1011, 1012, 1013, 1014]
      },
      {
        questionText: "L'antibiogramme: (cocher la réponse fausse)",
        options: [
          "est réalisé sur gélose nutritive.",
          "est réalisé avec un inoculum bactérien de 10^6 - 10^7 bactérie/ml.",
          "Les bactéries sensibles aux antibiotiques présentent généralement de grands diamètres d'inhibition.",
          "Est une expression indirecte de la CMI (concentration minimale d'inhibition).",
          "Est la technique la plus utilisée dans nos laboratoires pour étudier la sensibilité des bactéries aux antibiotiques"
        ],
        correctOptionIndexes: [0],
        explanation: "L'antibiogramme est réalisé sur une gélose spécifique (Mueller-Hinton), et non sur une gélose nutritive. L'inoculum standard est également différent.",
        citations: [1015, 1016, 1017, 1018, 1019, 1020, 1021]
      }
    ]
  },
  {
    title: "8- Diagnostic bactériologique en odontologie",
    subject: "microbiologie",
    questions: [
      {
        questionText: "Le diagnostic bactériologique direct comporte toutes ces étapes sauf une, laquelle ? (cocher la réponse fausse)",
        options: [
          "Examen cytologique",
          "Mise en culture",
          "Recherche d'anticorps spécifiques",
          "Antibiogramme",
          "Examen microscopique à l'état frais"
        ],
        correctOptionIndexes: [2],
        explanation: "Les étapes directes (A, B, D, E) visent à voir ou cultiver l'agent pathogène. La recherche d'anticorps spécifiques (C) est une méthode de diagnostic indirect.",
        citations: [1021, 1022, 1023]
      },
      {
        questionText: "Le diagnostic sérologique permet:",
        options: [
          "La mise en évidence d'anticorps spécifiques développés suite à une infection bactérienne",
          "L'appréciation de l'efficacité d'une vaccination",
          "La mise en évidence d'antigènes solubles bactériens",
          "La recherche du génome bactérien",
          "L'évaluation de la sensibilité des bactéries aux antibiotiques"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le diagnostic sérologique étudie la réponse immunitaire de l'hôte. Il permet de mettre en évidence les anticorps spécifiques produits en réponse à l'infection (A) ou à la vaccination (B).",
        citations: [1024, 1025, 1026]
      },
      {
        questionText: "Le diagnostic bactériologique permet de: (cocher des réponses fausses)",
        options: [
          "Confirmer une infection suspectée cliniquement",
          "Identifier l'agent incriminé dans l'infection",
          "Prescrire un traitement antibiotique sur la base d'un dosage dans le sérum",
          "Dépister des infections cliniquement symptomatiques",
          "Rectifier un traitement antibiotique sur la base d'un antibiogramme"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le diagnostic bactériologique permet de confirmer une infection (A), d'identifier l'agent pathogène (B) et de guider le traitement via un antibiogramme (E). Le dosage sérique (C) ne sert pas à la prescription initiale et le dépistage peut aussi concerner des infections asymptomatiques (D).",
        citations: [1026, 1027, 1028, 1029, 1030]
      },
      {
        questionText: "L'utilisation d'un milieu de transport pour les prélèvements permet de: (cocher des réponses fausses)",
        options: [
          "Protéger les anaérobies de la toxicité de l'oxygène",
          "Protéger le prélèvement de la dessiccation",
          "Maintenir les proportions des différentes espèces présentes dans le prélèvement",
          "Assurer la multiplication des bactéries aérobies",
          "Inhiber la multiplication des bactéries anaérobies"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Un milieu de transport vise à maintenir la viabilité et les proportions des bactéries présentes (A, B, C) sans favoriser leur multiplication (D faux) ni les inhiber (E faux).",
        citations: [1031, 1032]
      },
      {
        questionText: "Ceci est l'antibiogramme d'une souche Escherichia coli. Classer la bactérie en «R ou I ou S» pour chaque antibiotique : Ampicilline 12 mm (seuil R < 20), Céfazoline 22 mm (seuils I: 17-23), Céfuroxime 28 mm (seuils S: 25-33), Gentamicine 14 mm (seuil R < 18), Amikacine 26 mm (seuil S > 22).",
        options: [
          "Ampicilline: S, Céfazoline: R, Céfuroxime: I, Gentamicine: S, Amikacine: R",
          "Ampicilline: R, Céfazoline: I, Céfuroxime: S, Gentamicine: R, Amikacine: S",
          "Ampicilline: I, Céfazoline: S, Céfuroxime: R, Gentamicine: I, Amikacine: S"
        ],
        correctOptionIndexes: [1],
        explanation: "La classification est: Ampicilline (12mm) est Résistante (<20). Céfazoline (22mm) est Intermédiaire (17-23). Céfuroxime (28mm) est Sensible (25-33). Gentamicine (14mm) est Résistante (<18). Amikacine (26mm) est Sensible (>22).",
        citations: [1033, 1034, 1035]
      },
      {
        questionText: "L'antibiogramme (Cochez la réponse fausse)",
        options: [
          "Permet de déterminer la sensibilité des bactéries à plusieurs antibiotiques",
          "Est réalisé avec un inoculum bactérien de 10^6 à 10^7 bactéries/ml.",
          "Est réalisé sur milieu Mueller-Hinton",
          "Les bactéries résistantes présentent des diamètres d'inhibition réduits par rapport aux bactéries sensibles.",
          "Est une technique complémentaire de la CMI"
        ],
        correctOptionIndexes: [1],
        explanation: "L'inoculum standard pour l'antibiogramme est de 10^8 bactéries/ml (densité équivalente à une échelle 0,5 McFarland), donc l'option B est fausse.",
        citations: [1035, 1036, 1037]
      },
      {
        questionText: "Les milieux de culture pour la recherche des anaérobies sont : (cochez les réponses justes)",
        options: [
          "Désoxygénés au préalable",
          "Enrichis en substances réductrices",
          "Conservés à +4°C",
          "Incubés en anaérobiose au plus 48H",
          "Enrichis en sang généralement"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les milieux pour anaérobies doivent être désoxygénés (A), contenir des agents réducteurs (B) et sont souvent enrichis en sang (E). La conservation à +4°C inhibe la croissance et l'incubation peut dépasser 48H.",
        citations: [1038, 1039]
      },
      {
        questionText: "Quel est le prélèvement bactériologique indiqué pour confirmer une endocardite infectieuse?",
        options: [
          "Prélèvement urinaire (premier jet) pour Examen cytologique.",
          "Examen cytobactériologique de pus de plaie opératoire.",
          "Prélèvement de sang pour Hémoculture.",
          "Ecouvillonnage oro-pharyngé pour microbiote buccal.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [2],
        explanation: "Pour confirmer une endocardite infectieuse, l'examen de référence est l'hémoculture, qui permet d'isoler l'agent pathogène dans le sang.",
        citations: [1223, 1224, 1225, 1226, 1227]
      },
      {
        questionText: "L'Antibiogramme: (cocher la réponse fausse)",
        options: [
          "Permet de déterminer la sensibilité des bactéries à plusieurs antibiotiques",
          "Est réalisé avec un inoculum bactérien de 10^6 à 10^7 bactéries/ml.",
          "Est une technique rapide",
          "Est réalisé sur milieu Mueller Hinton",
          "Les bactéries résistantes présentent des diamètres d'inhibition réduits par rapport aux bactéries sensibles."
        ],
        correctOptionIndexes: [2],
        explanation: "L'antibiogramme nécessite une phase de culture et de diffusion (plusieurs heures à jours), ce n'est donc pas une technique rapide.",
        citations: [1228, 1229, 1230, 1231]
      },
      {
        questionText: "La culture bactérienne (cocher la réponse fausse):",
        options: [
          "Est une technique de diagnostic direct.",
          "Nécessite l'incubation dans une étuve à 37°C.",
          "N'est jamais réalisée en anaérobiose.",
          "Est faussée si le patient a pris des antibiotiques.",
          "Donne des colonies très riches en bactéries vivantes."
        ],
        correctOptionIndexes: [2],
        explanation: "La culture en anaérobiose est indispensable pour les bactéries anaérobies. L'affirmation qu'elle n'est jamais réalisée en anaérobiose est donc fausse.",
        citations: [1231, 1232, 1233, 1234, 1235]
      },
      {
        questionText: "Quel est le prélèvement poly microbien parmi les suivants (cocher la réponse juste) :",
        options: [
          "Sang",
          "Urine",
          "Liquide céphalorachidien",
          "Crachats",
          "Liquide articulaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Les crachats contiennent la flore commensale des voies respiratoires en plus des pathogènes potentiels, ce qui en fait un prélèvement polymicrobien. Les autres sites sont normalement stériles.",
        citations: [1235, 1236, 1237]
      },
      {
        questionText: "L'examen microscopique après coloration de GRAM (cocher la réponse fausse):",
        options: [
          "Permet d'apprécier la forme des bactéries.",
          "Permet de détecter les mycobactéries.",
          "Est une technique de diagnostic direct.",
          "Est basé sur la composition chimique de la paroi bactérienne.",
          "Ne comporte pas d'étape de coloration à chaud."
        ],
        correctOptionIndexes: [1],
        explanation: "La coloration de Gram n'est pas adaptée pour les mycobactéries (agent de la tuberculose), qui nécessitent une coloration spécifique dite de Ziehl-Neelsen.",
        citations: [1237, 1238, 1239, 1240, 1241, 1242]
      },
      {
        questionText: "Suite à un prélèvement de pus d'abcès dentaire pour INFECTION à Fusobacterium nucleatum, l'antibiogramme donne Erythromycine I. La réponse «I» veut dire : (cocher la réponse juste)",
        options: [
          "Insertion (peut donner ATB)",
          "Incompétent (allergique)",
          "Intermédiaire (efficace ou inefficace/variable)",
          "Irrégulier (devenir variable)",
          "Incomplet (pas de guérison complète)"
        ],
        correctOptionIndexes: [2],
        explanation: "Le résultat Intermédiaire (I) signifie que l'efficacité de l'antibiotique est limite et variable ; il peut être efficace à des doses plus élevées ou si le site d'infection est bien perfusé.",
        citations: [1242, 1243, 1244, 1245]
      }
    ]
  },
  {
    title: "1- Introduction au monde microbien & 2- Structure générale des cellules procaryotes",
    subject: "microbiologie",
    questions: [
      {
        questionText: "Les caractères permettant de distinguer la cellule procaryote de la cellule eucaryote sont: (cocher la réponse juste)",
        options: [
          "Une taille entre 10 et 100 μm",
          "Un ADN complexe et linéaire",
          "Une paroi rigide",
          "Un réticulum endoplasmique",
          "Des mitochondries"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les procaryotes (bactéries) se distinguent des eucaryotes par la présence fréquente d'une paroi rigide (C) et l'absence d'organites membranaires comme le réticulum endoplasmique (D) et les mitochondries (E).",
        citations: [1040]
      },
      {
        questionText: "La coloration de Gram colore en VIOLET:",
        options: [
          "N'importe quel microorganisme",
          "Les mycoplasmes",
          "Les virus",
          "Les bactéries qui possèdent une membrane externe",
          "Les bactéries à Gram positif"
        ],
        correctOptionIndexes: [4],
        explanation: "La coloration de Gram est spécifique aux bactéries. Les bactéries à Gram positif retiennent le premier colorant (Cristal Violet) et apparaissent en violet grâce à leur épaisse couche de peptidoglycane.",
        citations: [1041, 1042]
      },
      {
        questionText: "Parmi les éléments suivants composant la structure des bactéries, lesquels ne sont pas obligatoires?",
        options: [
          "Plasmide",
          "Paroi",
          "Membrane cytoplasmique",
          "Chromosome",
          "Capsule"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Les éléments obligatoires sont le nucléoïde (chromosome), le cytoplasme, la membrane plasmique et la paroi. La capsule (E) et le plasmide (A) sont des éléments facultatifs.",
        citations: [1043, 1044, 1045]
      },
      {
        questionText: "Les plasmides sont: (cocher la réponse fausse)",
        options: [
          "Des éléments de la résistance extra-chromosomiques",
          "Responsables de la multi-résistance",
          "Capables de s'auto-répliquer",
          "Transférables d'une bactérie à une autre",
          "Des fragments d'ADN simple brin extra chromosomiques"
        ],
        correctOptionIndexes: [4],
        explanation: "Les plasmides sont des molécules d'ADN double brin (et non simple brin), circulaires et extra-chromosomiques, qui peuvent porter des gènes de résistance, se répliquer et se transférer.",
        citations: [1046]
      },
      {
        questionText: "Laquelle des propositions suivantes caractérise obligatoirement toutes les bactéries? (réponse juste)",
        options: [
          "Ont une structure cellulaire de type Eucaryote.",
          "Peuvent vivre en présence ou l'absence d'oxygène selon les espèces.",
          "Reproduction par phénomène de mitose à partir de tous les constituants.",
          "Respirent par l'intermédiaire de mitochondries.",
          "Elles possèdent toujours plus d'un chromosome."
        ],
        correctOptionIndexes: [1],
        explanation: "Les bactéries sont des procaryotes (pas d'organites, pas de mitose), ont majoritairement un seul chromosome et se divisent par scissiparité. Elles présentent une grande diversité métabolique, incluant la capacité de vivre en milieu aérobie ou anaérobie.",
        citations: [1047, 1048, 1049, 1050, 1051]
      },
      {
        questionText: "Tous les éléments suivants sont obligatoires à la structure bactérienne sauf: (réponse fausse)",
        options: [
          "Le cytoplasme.",
          "La muréine.",
          "Le noyau bactérien.",
          "Les ribosomes.",
          "L'ADN."
        ],
        correctOptionIndexes: [2],
        explanation: "Les bactéries sont des procaryotes et ne possèdent donc pas de noyau délimité par une membrane.",
        citations: [1052, 1053, 1054, 1055]
      },
      {
        questionText: "Quel est l'aspect morphologique de la bactérie indiquée en flèche si elle prend une couleur violette après coloration de Gram? (réponse juste)",
        options: [
          "Grappe de Cocci G+",
          "Cocco-bacillaire G-",
          "Bacille long G+",
          "Chaine de Cocci G-",
          "Bacille G-"
        ],
        correctOptionIndexes: [2],
        explanation: "Une couleur violette après coloration de Gram indique une bactérie Gram positif (G+). La forme allongée correspond à un bacille long.",
        citations: [1056, 1057, 1058]
      },
      {
        questionText: "Lequel des caractères suivants permet à certaines bactéries pathogènes pour l'Homme de survivre dans un environnement hostile (réponse juste)",
        options: [
          "Épaisseur du peptidoglycane",
          "Caractère acido-alcoolo-résistant",
          "Caractère anaérobie strict",
          "Caractère sporulé",
          "Réticulation de la membrane nucléaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Le caractère sporulé implique la formation de spores, des structures dormantes extrêmement résistantes aux stress environnementaux (chaleur, radiations, produits chimiques).",
        citations: [1058, 1059]
      }
    ]
  },
  {
    title: "9- Relations hôte - bactérie- Microbiote humain - plaque et carie dentaires",
    subject: "microbiologie",
    questions: [
        {
            questionText: "Le microbiote humain : (cocher la réponse fausse)",
            options: [
                "S'installe dès la naissance",
                "Joue un rôle important dans l'équilibre physiologique",
                "Constitue une barrière contre les pathogènes",
                "Contribue à la synthèse de vitamine K",
                "Est majoritairement composé de bactéries à Gram positif."
            ],
            correctOptionIndexes: [4],
            explanation: "Le microbiote est composé à la fois de bactéries Gram positif et Gram négatif. Par exemple, E. coli (Gram-) est très abondant dans l'intestin. La composition n'est donc pas majoritairement Gram positif.",
            citations: [1060, 1061, 1062]
        },
        {
            questionText: "Une bactérie est dite commensale lorsqu'elle : (cocher la réponse juste)",
            options: [
                "Vit au contact des revêtements de l'hôte sans entraîner de désordres",
                "Est capable de provoquer une maladie",
                "Est d'emblée pathogène",
                "Synthétise des vitamines et des antibiotiques",
                "Possède une capsule."
            ],
            correctOptionIndexes: [0],
            explanation: "Le commensalisme est une relation où la bactérie coexiste avec l'hôte sans lui nuire. Elle peut être bénéfique, mais n'est pas intrinsèquement pathogène.",
            citations: [1063, 1064, 1065]
        },
        {
            questionText: "Une bactérie pathogène est : (cocher la réponse juste)",
            options: [
                "Toujours saprophyte",
                "Commensale",
                "Responsable de maladie infectieuse",
                "Toujours dans l'environnement",
                "Strictement humaine."
            ],
            correctOptionIndexes: [2],
            explanation: "Une bactérie pathogène est définie par sa capacité à provoquer une maladie infectieuse chez un hôte.",
            citations: [1066, 1067, 1068]
        },
        {
            questionText: "Dans la symbiose: (cocher la réponse juste)",
            options: [
                "La bactérie et l'hôte profitent tous deux de leur association",
                "La bactérie est douée d'un pouvoir pathogène",
                "La bactérie profite de l'hôte en se multipliant dans ses cellules",
                "La bactérie vit sur les végétaux en décomposition",
                "La bactérie fournit des enzymes à l'hôte."
            ],
            correctOptionIndexes: [0],
            explanation: "La symbiose, ou mutualisme, est une relation où les deux partenaires tirent un bénéfice de leur association.",
            citations: [1069, 1070, 1071]
        },
        {
            questionText: "Les bactéries commensales (cocher la réponse juste)",
            options: [
                "Vivent à la surface ou dans les cavités naturelles de l'hôte sans lui nuire",
                "Peuvent devenir pathogènes à tout moment",
                "Sont toujours anaérobies strictes",
                "Se divisent très lentement",
                "Ne survivent pas dans l'environnement."
            ],
            correctOptionIndexes: [0],
            explanation: "La définition du commensalisme est de vivre en association avec un hôte sans lui causer de tort. Elles peuvent devenir pathogènes opportunistes sous certaines conditions.",
            citations: [1072, 1073, 1074]
        },
        {
            questionText: "La plaque dentaire est composée de : (cocher la réponse fausse)",
            options: [
                "Bactéries et substance intercellulaire",
                "Microorganismes et matrice intercellulaire",
                "20% matière solide et 80% eau",
                "70 à 80% matière solide d'origine alimentaire",
                "Bactéries Gram+ et Gram- à prédominance anaérobies."
            ],
            correctOptionIndexes: [3],
            explanation: "La plaque dentaire est composée d'environ 80% d'eau et 20% de matière solide. Cette matière solide est principalement constituée de bactéries et de leur matrice, et non d'origine alimentaire.",
            citations: [1075, 1076, 1077]
        },
        {
            questionText: "La poche parodontale (cocher la réponse fausse):",
            options: [
                "Fait partie de la plaque sous-gingivale",
                "L'auto-nettoyage par la salive y est faible",
                "La concentration en bactéries anaérobies y est faible",
                "Se situe en milieu fermé",
                "La concentration en oxygène y est très réduite."
            ],
            correctOptionIndexes: [2],
            explanation: "La poche parodontale est un milieu fermé avec une très faible concentration en oxygène, ce qui favorise une forte concentration de bactéries anaérobies, et non une faible concentration.",
            citations: [1078, 1079]
        },
        {
            questionText: "Les défenses immunitaires de l'organisme sont représentées par : (cocher la réponse fausse)",
            options: [
                "Les barrières anatomiques (peau, muqueuses)",
                "La production d'anticorps",
                "La vaccination",
                "La réaction inflammatoire",
                "La flore bactérienne commensale."
            ],
            correctOptionIndexes: [2],
            explanation: "Les barrières anatomiques, la production d'anticorps, la réaction inflammatoire et la flore commensale sont des défenses naturelles de l'organisme. La vaccination est une intervention médicale artificielle pour stimuler l'immunité.",
            citations: [1080, 1081, 1082]
        },
        {
            questionText: "Dans le contexte de relation hôte-bactérie, la notion de commensalisme exprime:",
            options: [
                "Un mutualisme",
                "Le fait de vivre dans l'hôte sans provoquer de processus infectieux",
                "Une bactérie saprophytique",
                "Une bactérie pathogène en multiplication active",
                "Une bactérie pathogène responsable d'une infection guérie."
            ],
            correctOptionIndexes: [1],
            explanation: "Le commensalisme est défini par la coexistence de la bactérie avec l'hôte sans lui nuire. Le mutualisme (A) implique un bénéfice mutuel.",
            citations: [1083, 1084, 1085]
        }
    ]
},
{
    title: "10- Pouvoir pathogène des bactéries et réponse de l'hôte",
    subject: "microbiologie",
    questions: [
        {
            questionText: "Une bactérie pathogène spécifique (cocher les réponses justes)",
            options: [
                "Provoque une pathologie spécifique",
                "Est douée d'un pouvoir agressif",
                "Est une bactérie commensale",
                "N'entraine jamais de maladie infectieuse",
                "Est une bactérie saprophyte de l'environnement."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Les pathogènes spécifiques (ou stricts) sont capables de provoquer une maladie cliniquement définie grâce à leur pouvoir agressif (facteurs de virulence). Les autres options décrivent des bactéries non pathogènes ou opportunistes.",
            citations: [1085, 1086, 1087]
        },
        {
            questionText: "Le pouvoir pathogène des bactéries dépend de : (cochez la réponse fausse)",
            options: [
                "Facteurs de surface permettant d'échapper à la phagocytose",
                "La sécrétion de toxines",
                "La synthèse d'enzymes lytiques",
                "La capacité à se multiplier rapidement dans l'hôte",
                "L'antibio-résistance du germe."
            ],
            correctOptionIndexes: [4],
            explanation: "Le pouvoir pathogène (virulence) dépend des facteurs qui aident la bactérie à envahir l'hôte et à causer des dommages (A, B, C, D). L'antibiorésistance (E) est un mécanisme de survie face au traitement, pas un facteur direct de virulence.",
            citations: [1088, 1089, 1090]
        },
        {
            questionText: "Une maladie infectieuse: (cocher la réponse fausse)",
            options: [
                "Est toujours provoquée par un microorganisme",
                "Peut être transmissible d'homme à homme",
                "Peut être transmissible de l'animal à l'homme (zoonose)",
                "Est une maladie de transmission héréditaire",
                "Résulte d'un conflit entre l'hôte et la bactérie."
            ],
            correctOptionIndexes: [3],
            explanation: "Une maladie infectieuse est causée par un agent infectieux (bactérie, virus, etc.) et peut être transmissible. Les maladies héréditaires sont dues à des anomalies génétiques et ne sont pas infectieuses.",
            citations: [1091, 1092, 1093]
        },
        {
            questionText: "La période d'incubation: (cocher la réponse juste)",
            options: [
                "Est la période qui suit la phase d'état de la maladie",
                "Est une phase cliniquement silencieuse",
                "Correspond à la phase de guérison",
                "Est caractérisée par une fièvre constante",
                "Toutes les réponses sont justes."
            ],
            correctOptionIndexes: [1],
            explanation: "La période d'incubation est la phase initiale de l'infection, entre la contamination et l'apparition des premiers symptômes. Durant cette phase, le micro-organisme se multiplie mais le nombre de germes est insuffisant pour provoquer des manifestations cliniques.",
            citations: [1094, 1095]
        },
        {
            questionText: "Les modes de transmission des bactéries pathogènes peuvent être : (cocher la réponse fausse)",
            options: [
                "Directs (contact entre individus)",
                "Indirects (via un objet ou un vecteur)",
                "Horizontaux (entre individus d'une même génération)",
                "Verticaux (de la mère à l'enfant)",
                "Toutes ces propositions sont fausses."
            ],
            correctOptionIndexes: [4],
            explanation: "Tous les modes de transmission listés (Directs, Indirects, Horizontaux, Verticaux) sont des voies de transmission correctes pour les bactéries pathogènes. Par conséquent, l'affirmation 'Toutes ces propositions sont fausses' est fausse.",
            citations: [1096, 1097, 1098]
        },
        {
            questionText: "La virulence des bactéries: (cocher la réponse fausse)",
            options: [
                "Est une notion qualitative",
                "Varie pour un même pouvoir pathogène",
                "Est la capacité à déclencher une maladie",
                "Définit la gravité de la maladie",
                "Varie d'une espèce à une autre."
            ],
            correctOptionIndexes: [0],
            explanation: "La virulence est la capacité d'un micro-organisme à provoquer une maladie. C'est une notion quantitative, souvent mesurée par la dose infectante (le nombre de germes nécessaires pour causer la maladie), et non qualitative.",
            citations: [1099, 1100, 1101, 1102]
        },
        {
            questionText: "Les bactéries pathogènes: (cocher la réponse juste)",
            options: [
                "Ont une transmission exclusivement interhumaine",
                "Sont toujours productrices de toxines",
                "Ne provoquent des désordres que chez l'immunodéprimé",
                "Peuvent être opportunistes",
                "Aucune de ces réponses n'est juste."
            ],
            correctOptionIndexes: [3],
            explanation: "Les bactéries pathogènes peuvent être opportunistes, c'est-à-dire qu'elles profitent d'une faiblesse de l'hôte pour provoquer une maladie. Les autres affirmations sont trop restrictives et donc fausses.",
            citations: [1102, 1103, 1104]
        },
        {
            questionText: "Ces éléments sont des facteurs de pathogénicité des bactéries sauf un, lequel?",
            options: [
                "La capsule",
                "Les fimbriae (pili)",
                "La formation de biofilm",
                "L'endotoxine (LPS)",
                "Le plasmide."
            ],
            correctOptionIndexes: [4],
            explanation: "La capsule, les fimbriae, le biofilm et les toxines sont des facteurs directs de virulence. Le plasmide est un support génétique qui peut porter des gènes de virulence, mais il n'est pas un facteur de pathogénicité en lui-même.",
            citations: [1105, 1106, 1107, 1108]
        }
    ]
},
{
    title: "3- Physiologie: Nutrition, Métabolisme et Croissance bactérienne",
    subject: "microbiologie",
    questions: [
        {
            questionText: "Les principaux besoins nutritifs élémentaires de la bactérie sont fournis par : (cocher la réponse juste)",
            options: [
                "Vitamine K",
                "Eau et glucose",
                "NAD",
                "NaCl",
                "Facteurs X et V."
            ],
            correctOptionIndexes: [1],
            explanation: "L'eau (source d'hydrogène et d'oxygène) et une source de carbone et d'énergie comme le glucose sont des besoins élémentaires pour la majorité des bactéries. Les autres options sont des besoins spécifiques à certaines espèces.",
            citations: [1109, 1110]
        },
        {
            questionText: "Les facteurs physico-chimiques qui influencent la croissance bactérienne sont: (cocher la réponse fausse)",
            options: [
                "La température d'incubation",
                "Le pH du milieu de culture",
                "Les vitamines",
                "La pression osmotique",
                "La pression partielle d'oxygène."
            ],
            correctOptionIndexes: [2],
            explanation: "La température, le pH, la pression osmotique et la pression en oxygène sont des facteurs physico-chimiques de l'environnement. Les vitamines sont des facteurs nutritifs (besoins de croissance).",
            citations: [1111, 1112, 1113]
        },
        {
            questionText: "Une bactérie de type trophique chimioorganohétérotrophe signifie qu'elle utilise : (réponse juste)",
            options: [
                "Energie lumineuse, Carbone du CO2, Substrat minéral",
                "Réactions d'oxydoréduction, Carbone du CO2, Substrat organique",
                "Energie lumineuse, Carbone organique, Substrat organique",
                "Réactions d'oxydoréduction, Carbone organique, Substrat organique"
            ],
            correctOptionIndexes: [3],
            explanation: "Chimio- : énergie issue de réactions d'oxydoréduction. Organo- : source d'électrons (substrat réducteur) organique. Hétérotrophe : source de carbone organique.",
            citations: [1114, 1115]
        },
        {
            questionText: "Le temps de génération est défini comme: (réponse juste)",
            options: [
                "Le temps nécessaire pour que la population bactérienne double son nombre",
                "Le temps de vie d'une colonie bactérienne jusqu'à sa destruction",
                "Le nombre de divisions cellulaires par unité de temps",
                "Le temps nécessaire pour acquérir de nouveaux caractères génétiques",
                "La vitesse de croissance de la bactérie"
            ],
            correctOptionIndexes: [0],
            explanation: "Le temps de génération, ou temps de doublement, est le temps requis pour qu'une cellule se divise ou pour qu'une population double. La vitesse de croissance est l'inverse du temps de génération.",
            citations: [1116, 1117, 1118]
        },
        {
            questionText: "Les bactéries produisent de l'énergie par: (cocher la réponse juste)",
            options: [
                "Fermentation uniquement",
                "Respiration aérobie uniquement",
                "Fermentation et respiration simultanément",
                "Respiration anaérobie uniquement",
                "Fermentation et/ou respiration, selon l'espèce et les conditions."
            ],
            correctOptionIndexes: [4],
            explanation: "Selon leur équipement enzymatique et la présence d'accepteurs d'électrons, les bactéries peuvent produire de l'énergie soit par fermentation, soit par respiration (aérobie ou anaérobie). L'option E est la plus complète.",
            citations: [1119, 1120, 1121]
        },
        {
            questionText: "Une bactérie anaérobie: (cocher la réponse juste)",
            options: [
                "Ne peut pas se multiplier en présence d'oxygène",
                "Se multiplie préférentiellement à une température inférieure à 4°C",
                "A un temps de génération supérieur à 20 heures",
                "Exige les facteurs de croissance X et V",
                "Préfère une croissance en milieu très acide."
            ],
            correctOptionIndexes: [0],
            explanation: "Une bactérie anaérobie stricte est définie par son incapacité à se multiplier ou à survivre en présence d'oxygène, qui est toxique pour elle.",
            citations: [1121, 1122]
        },
        {
            questionText: "L'énergie produite par la bactérie est utilisée pour : (la réponse juste)",
            options: [
                "Les réactions de biosynthèses (anabolisme)",
                "Les réactions de catabolisme",
                "Les échanges avec le milieu extérieur (transport actif)",
                "La mobilité (rotation des flagelles)",
                "Toutes ces réponses sont justes."
            ],
            correctOptionIndexes: [4],
            explanation: "L'énergie (ATP) produite par la bactérie est essentielle et utilisée pour toutes ses fonctions vitales : biosynthèse, transport actif à travers la membrane, mobilité, etc.",
            citations: [1123, 1124, 1125]
        },
        {
            questionText: "Les bactéries chimiotrophes produisent de l'énergie par : (cochez la réponse fausse)",
            options: [
                "Des réactions chimiques d'oxydoréduction",
                "La photosynthèse",
                "L'oxydation d'un substrat minéral ou organique",
                "Des voies métaboliques fermentaires ou respiratoires",
                "La phosphorylation de l'ADP en ATP."
            ],
            correctOptionIndexes: [1],
            explanation: "Les bactéries chimiotrophes tirent leur énergie de réactions chimiques. La photosynthèse est le mode de production d'énergie des bactéries phototrophes.",
            citations: [1125, 1126, 1127]
        },
        {
            questionText: "Dans le métabolisme énergétique bactérien, la production d'énergie se produit dans les structures suivantes, sauf une : (la réponse fausse)",
            options: [
                "Le cycle de Krebs",
                "La mitochondrie",
                "Le cytoplasme",
                "La chaîne respiratoire",
                "La membrane cytoplasmique."
            ],
            correctOptionIndexes: [1],
            explanation: "Les bactéries sont des procaryotes et ne possèdent pas de mitochondries. Leurs processus énergétiques se déroulent dans le cytoplasme (glycolyse, cycle de Krebs) et au niveau de la membrane cytoplasmique (chaîne respiratoire).",
            citations: [1128, 1129, 1130, 1131]
        }
    ]
},
{
    title: "4- Génétique bactérienne",
    subject: "microbiologie",
    questions: [
        {
            questionText: "Le transfert génétique bactérien par conjugaison: (cocher la réponse juste)",
            options: [
                "Nécessite un bactériophage comme vecteur",
                "Nécessite un plasmide F (facteur de fertilité)",
                "Ne nécessite pas de contact physique entre les bactéries",
                "Est un transfert d'ARN messager",
                "Concerne aussi bien les bactéries Gram+ que Gram-."
            ],
            correctOptionIndexes: [4],
            explanation: "La conjugaison est un transfert d'ADN qui nécessite un contact direct entre les bactéries (via un pilus sexuel) et peut se produire chez les bactéries Gram positif et Gram négatif.",
            citations: [1131, 1132, 1133]
        },
        {
            questionText: "Les caractères de la mutation sont: (cocher la réponse juste)",
            options: [
                "Rareté - Dépendance - Instabilité",
                "Rareté - Spontanéité - Stabilité",
                "Fréquence - Spontanéité - Instabilité",
                "Fréquence - Dépendance - Spécificité",
                "Rareté - Instabilité - Indépendance"
            ],
            correctOptionIndexes: [1],
            explanation: "Les mutations génétiques bactériennes se caractérisent par leur Spontanéité (elles surviennent sans cause extérieure identifiable), leur Rareté (faible fréquence) et leur Stabilité (elles sont transmises à la descendance).",
            citations: [1134, 1135]
        },
        {
            questionText: "La transduction est le transfert d'ADN bactérien grâce à un : (réponse juste)",
            options: [
                "Pili sexuel",
                "Transposon",
                "ADN chromosomique libre",
                "Intégron",
                "Bactériophage"
            ],
            correctOptionIndexes: [4],
            explanation: "La transduction est le processus de transfert de matériel génétique d'une bactérie à une autre par l'intermédiaire d'un bactériophage (un virus qui infecte les bactéries).",
            citations: [1136, 1137, 1138]
        },
        {
            questionText: "Parmi les caractères de la mutation on trouve les caractères suivants sauf : (réponse fausse)",
            options: [
                "Spontanéité",
                "Réversibilité",
                "Rareté",
                "Spécificité",
                "Stabilité"
            ],
            correctOptionIndexes: [1],
            explanation: "Les mutations sont généralement considérées comme des événements stables et non réversibles, bien qu'une seconde mutation (réversion) puisse restaurer la fonction initiale. Cependant, la réversibilité n'est pas un caractère fondamental de la mutation elle-même.",
            citations: [1138, 1139, 1140]
        },
        {
            questionText: "La transformation bactérienne consiste en: (cocher les réponses justes)",
            options: [
                "Le transfert d'ADN d'une bactérie mâle à une bactérie femelle",
                "L'incorporation d'ADN nu de l'environnement par une bactérie compétente",
                "La transformation du génome en plasmide"
            ],
            correctOptionIndexes: [1],
            explanation: "La transformation est le processus par lequel une bactérie capte de l'ADN libre (nu) présent dans son milieu, à condition d'être dans un état physiologique particulier appelé 'compétence'. L'ADN peut être d'origine chromosomique ou plasmidique.",
            citations: [1140, 1141, 1142, 1282, 1283]
        }
    ]
},
{
    title: "5- Les antibiotiques : Classification et Modes d'action",
    subject: "microbiologie",
    questions: [
        {
            questionText: "Lequel des antibiotiques suivants est actif sur la biosynthèse de la paroi bactérienne? (cocher la réponse juste)",
            options: [
                "Vancomycine",
                "Streptomycine",
                "Tétracycline",
                "Erythromycine",
                "Phénicolés"
            ],
            correctOptionIndexes: [0],
            explanation: "La vancomycine (un glycopeptide) inhibe la synthèse du peptidoglycane, un composant essentiel de la paroi bactérienne. Les autres options agissent sur la synthèse des protéines.",
            citations: [1143, 1144, 1145, 1146]
        },
        {
            questionText: "Les antibiotiques suivants sont des inhibiteurs de la synthèse des protéines: (cochez les réponses justes)",
            options: [
                "Aminosides",
                "Macrolides",
                "Fluoroquinolones",
                "Polymyxines",
                "Cyclines"
            ],
            correctOptionIndexes: [0, 1, 4],
            explanation: "Les Aminosides, les Macrolides et les Cyclines (Tétracyclines) ciblent différentes sous-unités du ribosome bactérien pour inhiber la synthèse protéique. Les Fluoroquinolones agissent sur l'ADN et les Polymyxines sur la membrane.",
            citations: [1147, 1148, 1149]
        },
        {
            questionText: "En cas d'infections à Staphylococcus aureus résistant à la méthicilline (SARM), on pourra prescrire les antibiotiques suivants : (cocher les réponses fausses)",
            options: [
                "Vancomycine",
                "Carbapenème",
                "Glycylcycline",
                "Pénicilline M",
                "Linézolide"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "La Vancomycine, la Glycylcycline et le Linézolide sont des options de traitement pour le SARM. Le SARM est par définition résistant à la Pénicilline M (méthicilline). Les Carbapénèmes sont également inefficaces.",
            citations: [1150, 1151, 1152, 1153, 1154]
        },
        {
            questionText: "Les pénicillines G appartiennent à la famille des : (cocher la réponse juste)",
            options: [
                "Aminosides",
                "Phénicolés",
                "Bêtalactamines",
                "Quinolones",
                "Glycopeptides"
            ],
            correctOptionIndexes: [2],
            explanation: "Les pénicillines sont la classe historique et principale des antibiotiques de la famille des β-lactamines.",
            citations: [1155, 1156]
        },
        {
            questionText: "Les antibiotiques suivants appartiennent à la famille des macrolides ou apparentés, sauf un: (cocher la réponse juste)",
            options: [
                "Erythromycine",
                "Azithromycine",
                "Pénicilline",
                "Clindamycine",
                "Pristinamycine"
            ],
            correctOptionIndexes: [2],
            explanation: "L'Erythromycine et l'Azithromycine sont des macrolides. La Clindamycine (lincosamide) et la Pristinamycine (streptogramine) sont des familles apparentées. La Pénicilline est une β-lactamine.",
            citations: [1157, 1158, 1159]
        },
        {
            questionText: "Laquelle des familles d'antibiotiques suivantes est active sur la paroi bactérienne? (réponse juste)",
            options: [
                "β-lactamine",
                "Aminoglycoside",
                "Tétracycline",
                "Macrolide",
                "Phénicolé"
            ],
            correctOptionIndexes: [0],
            explanation: "Les β-lactamines (pénicillines, céphalosporines...) agissent en inhibant la synthèse du peptidoglycane, composant majeur de la paroi bactérienne.",
            citations: [1159, 1160, 1161, 1162]
        },
        {
            questionText: "Lequel des caractères suivants définit la CMI d'un antibiotique? (réponse juste)",
            options: [
                "La plus forte concentration de l'antibiotique qui est inhibitrice",
                "Une concentration proche de la CMB pour un antibiotique bactériostatique",
                "La plus faible concentration de l'antibiotique qui inhibe toute croissance visible de la bactérie",
                "Est d'autant plus élevée que la bactérie est sensible",
                "La plus faible concentration qui tue la bactérie."
            ],
            correctOptionIndexes: [2],
            explanation: "La CMI (Concentration Minimale Inhibitrice) est définie comme la plus faible concentration d'un antibiotique qui inhibe toute croissance visible d'une souche bactérienne après incubation.",
            citations: [1163, 1164, 1165]
        },
        {
            questionText: "L'Erythromycine, la spiramycine et l'azithromycine sont des antibiotiques qui appartiennent à la famille:",
            options: [
                "β-lactamines",
                "Aminoglycosides",
                "Tétracyclines",
                "Macrolides",
                "Quinolones"
            ],
            correctOptionIndexes: [3],
            explanation: "L'Érythromycine, la Spiramycine et l'Azithromycine sont tous des membres de la famille des Macrolides, qui agissent en inhibant la synthèse protéique.",
            citations: [1166, 1167]
        },
        {
            questionText: "Le mode d'action des antibiotiques peut être une toxicité sélective en ciblant les structures suivantes, sauf: (réponse fausse)",
            options: [
                "La synthèse de la paroi",
                "La synthèse des protéines (ribosomes 70S)",
                "Le niveau de la mitochondrie",
                "La membrane cytoplasmique",
                "La synthèse des acides nucléiques"
            ],
            correctOptionIndexes: [2],
            explanation: "La toxicité sélective des antibiotiques repose sur des cibles présentes chez la bactérie mais absentes ou différentes chez l'homme. Les bactéries n'ayant pas de mitochondries, ce ne peut être une cible.",
            citations: [1168, 1169, 1170, 1171]
        },
        {
            questionText: "Les antibiotiques qui agissent sur les bactéries, par inhibition de la synthèse de la paroi bactérienne (Cochez la réponse juste)",
            options: [
                "Polymyxines",
                "Aminosides",
                "Tétracyclines",
                "Rifamycines",
                "Fosfomycine"
            ],
            correctOptionIndexes: [4],
            explanation: "La Fosfomycine est un antibiotique qui inhibe une des premières étapes de la synthèse du peptidoglycane de la paroi bactérienne. Les autres ciblent la membrane (A), les protéines (B) ou l'ADN/ARN (C, D).",
            citations: [1172, 1173, 1174]
        },
        {
            questionText: "Parmi les antibiotiques suivants, celui qui agit comme inhibiteur de la synthèse protéique (Cochez la réponse juste)",
            options: [
                "Quinolones",
                "Sulfamides",
                "Glycopeptides",
                "Macrolides",
                "β-lactamines"
            ],
            correctOptionIndexes: [3],
            explanation: "Les Macrolides sont des inhibiteurs de la synthèse protéique qui se lient à la sous-unité 50S du ribosome bactérien.",
            citations: [1175, 1176, 1177]
        },
        {
            questionText: "Lequel de ces antibiotiques n'a aucune activité sur les entérobactéries: (cocher la réponse juste)",
            options: [
                "Vancomycine",
                "Gentamicine",
                "Imipenème",
                "Amikacine",
                "Ciprofloxacine"
            ],
            correctOptionIndexes: [0],
            explanation: "La Vancomycine est un glycopeptide actif principalement contre les bactéries Gram positif. Elle est inactive sur les entérobactéries (Gram négatif) car sa grosse molécule ne peut pas traverser leur membrane externe.",
            citations: [1178, 1179, 1180, 1181]
        },
        {
            questionText: "Quel(s) antibiotique(s) inhibe(nt) la synthèse de la paroi bactérienne: (cochez la ou les réponses justes)",
            options: [
                "β-lactamines",
                "Aminosides",
                "Sulfamides",
                "Polymyxines",
                "Fosfomycine"
            ],
            correctOptionIndexes: [0, 4],
            explanation: "Les β-lactamines et la Fosfomycine sont deux familles d'antibiotiques qui inhibent différentes étapes de la synthèse de la paroi bactérienne.",
            citations: [1181, 1182, 1183]
        },
        {
            questionText: "Les aminosides : (cocher la réponse fausse)",
            options: [
                "Sont des antibiotiques bactéricides à large spectre",
                "Sont actifs sur la paroi bactérienne",
                "Sont inactifs sur les anaérobies stricts",
                "La Streptomycine est utilisée pour le traitement de la tuberculose",
                "Sont doués de néphrotoxicité."
            ],
            correctOptionIndexes: [1],
            explanation: "Les Aminosides sont des inhibiteurs de la synthèse protéique ; ils n'agissent pas sur la paroi bactérienne.",
            citations: [1271, 1272, 1273]
        },
        {
            questionText: "Le métronidazole : (cocher la réponse juste)",
            options: [
                "Est actif sur la paroi bactérienne",
                "Est actif sur les bactéries anaérobies",
                "Est actif sur les SARM",
                "Est un traitement de choix pour les infections urinaires",
                "Est utilisé dans le traitement de la fièvre typhoïde."
            ],
            correctOptionIndexes: [1],
            explanation: "Le métronidazole est un antibiotique dont le spectre d'action est principalement dirigé contre les bactéries anaérobies strictes et certains protozoaires.",
            citations: [1274, 1275, 1215, 1216]
        },
        {
            questionText: "Les antibiotiques bactéricides: (cochez la réponse juste)",
            options: [
                "Ralentissent la croissance des bactéries",
                "Entraînent la mort bactérienne",
                "Agissent comme des antiseptiques",
                "Agissent spécifiquement sur les bactéries résistantes",
                "Agissent sur n'importe quelle bactérie."
            ],
            correctOptionIndexes: [1],
            explanation: "Par définition, un antibiotique bactéricide est une substance qui tue les bactéries. Un bactériostatique se contente de ralentir ou d'arrêter leur croissance.",
            citations: [1217, 1218, 1219]
        }
    ]
},
{
    title: "6- Résistance bactérienne aux antibiotiques",
    subject: "microbiologie",
    questions: [
        {
            questionText: "La résistance bactérienne aux β-lactamines est due à : (cocher la réponse fausse)",
            options: [
                "La présence du mécanisme d'efflux seulement",
                "La production d'enzymes inactivant l'antibiotique",
                "La modification de la cible (PLP)",
                "La diminution de la perméabilité membranaire",
                "La production de β-lactamases à spectre étendu (BLSE)."
            ],
            correctOptionIndexes: [0],
            explanation: "Les mécanismes de résistance aux β-lactamines sont multiples (production d'enzymes, modification de la cible, diminution de la perméabilité). Le mécanisme d'efflux peut exister mais il n'est jamais le seul mécanisme.",
            citations: [1184, 1185, 1186]
        },
        {
            questionText: "La résistance bactérienne aux antibiotiques est: (cocher les réponses justes)",
            options: [
                "D'origine naturelle ou acquise",
                "Le résultat de mutations spontanées et fréquentes",
                "Portée par un support chromosomique ou extra-chromosomique",
                "Un problème majeur de santé publique",
                "Le résultat d'une prescription rationnelle et contrôlée des antibiotiques."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "La résistance peut être naturelle (intrinsèque) ou acquise. Elle est portée par des gènes sur le chromosome ou des éléments mobiles (plasmides). C'est un problème de santé publique majeur. Elle est aggravée par une prescription non rationnelle.",
            citations: [1186, 1187, 1188, 1189]
        },
        {
            questionText: "Lequel des mécanismes suivants de la résistance aux antibiotiques, est inexact? (Réponse fausse)",
            options: [
                "L'absence de pénétration de l'antibiotique dans la bactérie",
                "La modification de la cible, qui augmente son affinité pour l'antibiotique",
                "L'excrétion accrue de l'antibiotique hors de la bactérie (efflux)",
                "L'inactivation enzymatique de l'antibiotique",
                "L'évolution vers une forme L (sans paroi), insensible aux β-lactamines."
            ],
            correctOptionIndexes: [1],
            explanation: "La modification de la cible est un mécanisme de résistance qui entraîne une diminution de l'affinité de la cible pour l'antibiotique, le rendant moins efficace, et non une augmentation de l'affinité.",
            citations: [1189, 1190, 1191]
        },
        {
            questionText: "Une résistance bactérienne qui touche des molécules d'antibiotiques appartenant à la même famille est appelée: (réponse juste)",
            options: [
                "Résistance acquise",
                "Résistance intrinsèque",
                "Résistance clinique",
                "Résistance associée",
                "Résistance croisée."
            ],
            correctOptionIndexes: [4],
            explanation: "La résistance croisée se produit lorsqu'un mécanisme de résistance unique confère une résistance à plusieurs antibiotiques de la même famille chimique.",
            citations: [1192, 1193]
        },
        {
            questionText: "La production de β-lactamase chez Staphylococcus aureus induit une résistance à : (cochez la réponse fausse)",
            options: [
                "Pénicilline G",
                "Ampicilline",
                "Ticarcilline",
                "Pipéracilline",
                "Céphalosporines de 3ème génération."
            ],
            correctOptionIndexes: [4],
            explanation: "Les pénicillinases produites par S. aureus inactivent la plupart des pénicillines. Cependant, les céphalosporines de 3ème génération ont une structure qui les rend plus stables face à ces enzymes.",
            citations: [1194, 1195, 1196, 1197]
        },
        {
            questionText: "Lequel de ces antibiotiques n'a aucune activité sur les entérobactéries? (cocher la réponse juste)",
            options: [
                "Vancomycine",
                "Gentamicine",
                "Imipenème",
                "Colistine",
                "Fluoroquinolones"
            ],
            correctOptionIndexes: [0],
            explanation: "La vancomycine est un glycopeptide qui ne peut pas traverser la membrane externe des bactéries à Gram négatif comme les entérobactéries, ce qui les rend naturellement résistantes.",
            citations: [1197, 1198, 1199, 1200]
        },
        {
            questionText: "La résistance acquise (Cochez la réponse juste)",
            options: [
                "A un support génétique uniquement plasmidique",
                "Peut être transférable d'une bactérie à une autre",
                "N'est pas détectable par un antibiogramme standard",
                "Utilise des mécanismes totalement différents de la résistance naturelle",
                "Ne concerne que les bactéries responsables d'infections nosocomiales."
            ],
            correctOptionIndexes: [1],
            explanation: "Une caractéristique majeure de la résistance acquise est sa capacité à être transférée horizontalement entre bactéries via des éléments génétiques mobiles comme les plasmides.",
            citations: [1200, 1201, 1202]
        },
        {
            questionText: "Les souches SARM (Staphylococcus aureus résistant à la méticilline): (la réponse juste)",
            options: [
                "Sont résistantes à toutes les pénicillines",
                "Sont résistantes aux pénicillines et aux céphalosporines de 1ère génération",
                "Sont résistantes à toutes les β-lactamines sauf les carbapénèmes",
                "Sont résistantes à toutes les β-lactamines sauf Cefoxitine et Imipenème",
                "Sont résistantes à toutes les β-lactamines sauf les céphalosporines de 5ème génération."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "La résistance du SARM est due à la modification de la cible (PBP2a), ce qui le rend résistant à la quasi-totalité des β-lactamines, y compris les pénicillines et les céphalosporines. Seules certaines molécules plus récentes (céphalosporines de 5G) ou parfois les carbapénèmes peuvent rester actives.",
            citations: [1203, 1204, 1205, 1206]
        },
        {
            questionText: "La résistance acquise: (cocher la réponse juste)",
            options: [
                "Ne concerne que quelques espèces bactériennes vis-à-vis des β-lactamines",
                "Peut être transférée d'une bactérie à une autre par des éléments génétiques mobiles",
                "Ne se manifeste jamais in vitro, seulement in vivo",
                "Utilise des mécanismes de résistance qui sont différents de ceux de la résistance naturelle",
                "Ne concerne que les bactéries isolées en milieu hospitalier (nosocomiales)."
            ],
            correctOptionIndexes: [1],
            explanation: "La principale caractéristique de la résistance acquise est sa capacité à se propager entre bactéries par transfert horizontal de gènes (conjugaison, transduction, transformation).",
            citations: [1207, 1208]
        },
        {
            questionText: "La résistance naturelle à un antibiotique: (cochez la réponse fausse)",
            options: [
                "Touche les bactéries qui sont hors du spectre d'activité de l'antibiotique",
                "Peut être acquise par conjugaison plasmidique",
                "Est un caractère spécifique d'espèce ou de genre bactérien",
                "Est transmise de manière stable de génération en génération",
                "Peut être due à une imperméabilité de la paroi à l'antibiotique."
            ],
            correctOptionIndexes: [1],
            explanation: "La résistance naturelle est une caractéristique intrinsèque, codée sur le chromosome et transmise verticalement. Elle n'est pas acquise par des mécanismes de transfert horizontal comme la conjugaison.",
            citations: [1209, 1210, 1211, 1279, 1280]
        },
        {
            questionText: "Une souche MRSA (Staphylococcus aureus méticillino-résistant): (cocher la réponse juste)",
            options: [
                "Est sensible à la plupart des β-lactamines",
                "Est résistante aux pénicillines mais sensible aux autres β-lactamines",
                "Est résistante aux céphalosporines mais sensible aux autres β-lactamines",
                "Est résistante aux carbapénèmes mais sensible aux autres β-lactamines",
                "Est résistante à la quasi-totalité des β-lactamines."
            ],
            correctOptionIndexes: [4],
            explanation: "La résistance à la méticilline (MRSA) est un marqueur de résistance à l'ensemble des antibiotiques de la famille des β-lactamines, à l'exception de quelques molécules plus récentes.",
            citations: [1211, 1212]
        },
        {
            questionText: "Le support génétique de la résistance naturelle est un : (cocher la réponse Juste)",
            options: [
                "Plasmide",
                "Chromosome",
                "Transposon",
                "Intégron",
                "Toutes ces réponses sont justes"
            ],
            correctOptionIndexes: [1],
            explanation: "La résistance naturelle (ou intrinsèque) est une caractéristique codée par des gènes présents sur le chromosome de toutes les bactéries d'une même espèce.",
            citations: [1213, 1214, 1281]
        }
    ]
}
];

module.exports = microbiologyQuizzesY2;