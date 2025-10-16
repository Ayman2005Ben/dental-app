// quizzes/year-1/physiology.js

const physiologyQuizzes = [
  {
    title: "Milieu Intérieur",
    subject: "physiology",
    questions: [
      {
        questionText: "Le milieu intérieur échange les électrolytes et les nutriments avec le milieu extérieur. (RJ)",
        options: [
          "Via l'usage des surfaces épithéliales respiratoire et glomérulaire",
          "Au travers l'épithélium intestinal et l'endothélium artériolaire tubulaire",
          "Via l'interface endothélium artériolaire et épithélium de la cellule glomérulaire",
          "Le but des mouvements électrolytiques entre les compartiments est le maintien de l'équilibre du milieu intérieur.",
          "Les échanges hydriques et électrolytiques assurent une survie à la cellule"
        ],
        correctOptionIndexes: [0, 2, 4], // Correspond à (1, 3, 5)
        explanation: "Le milieu intérieur est un intermédiaire entre les cellules et le milieu extérieur. Cet échange se fait via des surfaces spécialisées comme les poumons et les reins (épithélium respiratoire et glomérulaire). Le but de ces échanges est de maintenir un environnement stable pour les cellules (homéostasie), ce qui est vital pour leur survie."
      },
      {
        questionText: "Le milieu extra cellulaire est (RJ)",
        options: [
          "Constitué de la lymphe canalaire, le plasma, le potassium est l'électrolyte dominant",
          "Constitué de plasma, de lymphe interstitielle, le sodium est l'électrolyte dominant",
          "Constitué du milieu vasculaire et du milieu interstitiel",
          "Constitué de plasma, de lymphe et du milieu interstitiel",
          "Constitué de sang, d'interstitium, de potassium"
        ],
        correctOptionIndexes: [1, 2, 3], // Correspond à (2, 3, 4)
        explanation: "Le liquide extracellulaire (LEC), ou milieu intérieur, est composé du plasma et du liquide interstitiel (qui inclut la lymphe). Le cation le plus abondant dans ce compartiment est le sodium (Na⁺). Le potassium (K⁺) est dominant dans le LIC."
      },
      {
        questionText: "Le sodium et le potassium sont (RJ)",
        options: [
          "Les principaux cations du milieu extra cellulaire",
          "Leur concentration plasmatique est respectivement égale à 128 mmol/l et 3 mmol/l",
          "Les transferts ioniques se font parfois via un transport actif",
          "La concentration plasmatique du sodium est de 140 mmol/l",
          "La sortie massive du potassium définie une repolarisation"
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à (3, 4, 5)
        explanation: "La distribution inégale est maintenue par la pompe Na⁺/K⁺ (transport actif). La concentration plasmatique de Na⁺ est bien ~140 mmol/L. La sortie de K⁺ est la phase clé de la repolarisation."
      },
      {
        questionText: "Les protéines sont essentielles à la vie cellulaire (RJ)",
        options: [
          "Ce sont les cations intracellulaires",
          "Ce sont des anions extracellulaires",
          "Composés principalement d'albumine, de globuline et de prothrombine",
          "Ce sont des anions composant le milieu extracellulaire",
          "Ce sont des anions extracellulaires composés d'albumine de globuline et de fibrinogène"
        ],
        correctOptionIndexes: [1, 3, 4], // Correspond à (2, 4, 5)
        explanation: "Les protéines (chargées négativement) agissent comme des anions. Le plasma (partie du LEC) contient une forte concentration d'albumine, globulines et fibrinogène, ce qui en fait des anions majeurs de ce compartiment."
      },
      {
        questionText: "Selon la présentation, la proportion d'eau dans le corps humain :",
        options: [
          "Est d'environ 70% chez le nourrisson.",
          "Est plus élevée chez la femme (60%) que chez l'homme (50%).",
          "Diminue avec l'âge.",
          "Est plus importante dans le tissu adipeux que dans le muscle squelettique.",
          "Est d'environ 60% du poids corporel chez l'adulte."
        ],
        correctOptionIndexes: [0, 2, 4], // Correspond à (1, 3, 5)
        explanation: "L'eau représente ~60% du poids chez l'adulte et ~70% chez le nourrisson. Elle diminue avec l'âge. Elle est plus faible chez la femme (~50%) que chez l'homme (~60%) car le tissu adipeux contient moins d'eau que le muscle."
      },
      {
        questionText: "Parmi les fonctions physiologiques de l'eau listées, lesquelles sont correctes ?",
        options: [
          "Elle agit comme solvant universel pour les sels minéraux et les gaz.",
          "Elle participe directement aux réactions d'hydrolyse.",
          "Elle joue un rôle dans la thermorégulation via l'évaporation de la sueur.",
          "Elle est le principal véhicule pour l'élimination des déchets comme l'urée.",
          "Elle assure la lubrification des articulations via les liquides synoviaux."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4], // Correspond à (1, 2, 3, 4, 5)
        explanation: "Toutes ces affirmations sont correctes. L'eau agit comme solvant, participe à l'hydrolyse, régule la température, lubrifie et élimine les déchets."
      },
      {
        questionText: "La répartition de l'eau totale dans le corps se fait comme suit :",
        options: [
          "Le liquide intracellulaire (LIC) représente 1/3 de l'eau totale.",
          "Le liquide extracellulaire (LEC) représente 2/3 de l'eau totale.",
          "Le plasma représente 1/4 du liquide extracellulaire.",
          "Le liquide interstitiel contient 3/4 de l'eau du compartiment extracellulaire.",
          "Pour un adulte de 70 kg, le volume du LIC est d'environ 28 litres."
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à (3, 4, 5)
        explanation: "L'eau totale se répartit en 2/3 pour le LIC (approx. 28 L) et 1/3 pour le LEC (approx. 14 L). Le LEC est ensuite divisé en 3/4 de liquide interstitiel et 1/4 de plasma."
      },
      {
        questionText: "Laquelle de ces affirmations définit correctement l'homéostasie ?",
        options: [
          "Un état d'immobilité totale des compartiments liquidiens.",
          "Le maintien de conditions constantes et stables dans le milieu intérieur.",
          "Un équilibre dynamique entre les entrées et les sorties de substances.",
          "Un concept qui ne concerne que la régulation de la température.",
          "La capacité des cellules à ne pas être affectées par les conditions extérieures grâce à la stabilité du milieu intérieur."
        ],
        correctOptionIndexes: [1, 2, 4], // Correspond à (2, 3, 5)
        explanation: "L'homéostasie est le maintien de conditions stables dans le milieu intérieur. Cet équilibre est dynamique (résultant d'un bilan constant) et son but est de protéger les cellules des variations externes."
      },
      {
        questionText: "Concernant la composition ionique des compartiments liquidiens :",
        options: [
          "Le Na⁺ est le cation le plus abondant dans le liquide intracellulaire (LIC).",
          "Le K⁺ est le cation le plus abondant dans le liquide extracellulaire (LEC).",
          "Le plasma contient significativement plus de protéines que le liquide interstitiel.",
          "Les anions les plus abondants dans le LEC sont le Cl⁻ et le HCO₃⁻.",
          "La concentration des ions est radicalement différente entre le plasma et le liquide interstitiel."
        ],
        correctOptionIndexes: [2, 3], // Correspond à (3, 4)
        explanation: "Le K⁺ est abondant dans le LIC, et le Na⁺ dans le LEC. Le plasma a beaucoup plus de protéines que l'interstitium. Le Cl⁻ et le HCO₃⁻ sont bien les anions principaux du LEC. La composition ionique (hors protéines) du plasma et du liquide interstitiel est très similaire."
      },
      {
        questionText: "Les échanges liquidiens entre le plasma et le liquide interstitiel (forces de Starling) :",
        options: [
          "La pression hydrostatique capillaire (PHc) tend à faire sortir le liquide du capillaire.",
          "La pression oncotique capillaire (POc) tend à faire entrer le liquide dans le capillaire.",
          "Au pôle artériolaire du capillaire, la filtration prédomine car PHc > POc.",
          "Au pôle veineux du capillaire, la réabsorption prédomine car POc > PHc.",
          "L'excédent de liquide filtré qui n'est pas réabsorbé est drainé par les vaisseaux lymphatiques."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4], // Correspond à (1, 2, 3, 4, 5)
        explanation: "Toutes ces affirmations décrivent correctement les forces de Starling. La pression hydrostatique pousse (filtration), l'oncotique retient (réabsorption). La filtration domine au pôle artériolaire et la réabsorption au pôle veineux. La lymphe draine l'excédent."
      },
      {
        questionText: "Le passage de molécules à travers la membrane cellulaire entre le LIC et le liquide interstitiel peut se faire par :",
        options: [
          "Diffusion simple pour les molécules liposolubles comme l'O₂ et le CO₂.",
          "Diffusion facilitée via des canaux protéiques pour les ions comme le Na⁺.",
          "Transport actif contre un gradient de concentration, nécessitant de l'ATP.",
          "Osmose pour le mouvement de l'eau.",
          "Endocytose pour les grosses particules."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4], // Correspond à (1, 2, 3, 4, 5)
        explanation: "La membrane utilise tous ces mécanismes : diffusion simple (gaz), diffusion facilitée (ions, glucose), transport actif (pompes), osmose (eau), and transport vésiculaire (endocytose/exocytose)."
      },
      {
        questionText: "Quelle est la définition correcte de l'osmolarité ?",
        options: [
          "Le nombre de moles de soluté par kilogramme de solvant.",
          "La masse du soluté par litre de solution.",
          "Le nombre total de particules dissoutes dans un litre de solution.",
          "Une mesure qui ne varie pas avec la température.",
          "Son principal déterminant dans le plasma est le potassium."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "L'osmolarité est le nombre total de particules par litre de solution (sensible à la T°). L'osmolalité est par kg de solvant (indépendante de la T°). Le déterminant principal est le sodium."
      },
      {
        questionText: "Le transport actif secondaire :",
        options: [
          "Utilise directement l'énergie issue de l'hydrolyse de l'ATP.",
          "Utilise l'énergie stockée dans le gradient de concentration d'un autre ion (souvent le Na⁺).",
          "Le symport est un type de transport où deux substances se déplacent dans la même direction.",
          "L'antiport est un type de transport où deux substances se déplacent dans des directions opposées.",
          "Ne peut pas déplacer une substance contre son gradient de concentration."
        ],
        correctOptionIndexes: [1, 2, 3], // Correspond à (2, 3, 4)
        explanation: "Le transport actif secondaire utilise l'énergie d'un gradient (souvent Na+) créé par le transport primaire. Il déplace des substances contre leur gradient et existe sous forme de symport (même sens) et d'antiport (sens opposé)."
      },
      {
        questionText: "Concernant les compartiments liquidiens :",
        options: [
          "Le plasma et le liquide interstitiel sont séparés par la membrane cellulaire.",
          "Le LIC et le LEC sont séparés par la paroi capillaire.",
          "L'osmolalité est normalement la même dans le LIC et le LEC.",
          "Toute différence d'osmolalité entre LIC et LEC induit un flux d'eau pour rétablir l'équilibre.",
          "Le rein est l'organe principal qui maintient l'équilibre entre les entrées et les sorties de substances de l'organisme."
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à (3, 4, 5)
        explanation: "LIC/LEC sont séparés par la membrane cellulaire; Plasma/Interstitiel sont séparés par la paroi capillaire. L'osmolalité entre LIC et LEC doit rester égale, tout déséquilibre provoque des flux d'eau. Le rein est le régulateur clé de l'équilibre externe."
      },
      {
        questionText: "Lequel des mécanismes suivants est un exemple de transport actif primaire ?",
        options: [
          "Le passage de l'O₂ à travers la membrane.",
          "Le mouvement de l'eau via une aquaporine.",
          "Le cotransporteur sodium-glucose.",
          "La pompe Na⁺/K⁺ ATPase.",
          "La phagocytose d'une bactérie."
        ],
        correctOptionIndexes: [3], // Correspond à (4)
        explanation: "Le transport actif primaire utilise directement l'ATP. L'exemple type est la pompe Na⁺/K⁺. Les autres sont : diffusion simple (O₂), osmose (eau), actif secondaire (cotransporteur), et transport vésiculaire (phagocytose)."
      },
      {
        questionText: "À propos de l'exocytose et de l'endocytose :",
        options: [
          "L'exocytose est un mécanisme de transport vers l'intérieur de la cellule.",
          "L'endocytose est un mécanisme de transport vers l'extérieur de la cellule.",
          "La phagocytose est un type d'endocytose où la cellule 'mange' des particules solides.",
          "La pinocytose est un type d'endocytose où la cellule 'boit' du liquide extracellulaire.",
          "La libération de neurotransmetteurs dans la fente synaptique est un exemple d'exocytose."
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à (3, 4, 5)
        explanation: "Exocytose = sortie. Endocytose = entrée. Phagocytose ('manger cellulaire') et Pinocytose ('boire cellulaire') sont des types d'endocytose. La libération de neurotransmetteurs est l'exemple classique de l'exocytose."
      },
      {
        questionText: "La paroi capillaire est :",
        options: [
          "Très perméable à l'eau et aux petits solutés.",
          "Totalement imperméable aux protéines comme l'albumine.",
          "Sépare le compartiment plasmatique du compartiment intracellulaire.",
          "Le lieu des échanges liquidiens décrits par les forces de Starling.",
          "Sa perméabilité est constante dans tout l'organisme."
        ],
        correctOptionIndexes: [0, 3], // Correspond à (1, 4)
        explanation: "La paroi capillaire est perméable à l'eau/solutés et peu (mais pas totalement) perméable aux protéines. Elle sépare le plasma de l'interstitiel. Les échanges y sont régis par les forces de Starling. Sa perméabilité varie selon les tissus."
      },
      {
        questionText: "Le volume sanguin total d'un adulte représente environ :",
        options: [
          "5% du poids du corps.",
          "8% du poids du corps.",
          "15% du poids du corps.",
          "20% du poids du corps.",
          "40% du poids du corps."
        ],
        correctOptionIndexes: [1], // Correspond à (2)
        explanation: "Le volume sanguin total est la somme du volume plasmatique (~5%) et du volume globulaire (~3%), soit un total d'environ 8% du poids corporel."
      },
      {
        questionText: "Qu'est-ce qu'un électrolyte ?",
        options: [
          "Une molécule organique comme le glucose qui ne se dissocie pas dans l'eau.",
          "Un composé chimique qui se dissocie en ions dans l'eau.",
          "Un synonyme de protéine.",
          "Une substance qui ne conduit pas l'électricité en solution.",
          "Les sels inorganiques, les acides et les bases sont des exemples d'électrolytes."
        ],
        correctOptionIndexes: [1, 4], // Correspond à (2, 5)
        explanation: "Un électrolyte est un composé qui se dissocie en ions (cations/anions) dans l'eau, la rendant conductrice. Les sels, acides et bases en sont des exemples. Le glucose est un non-électrolyte."
      },
      {
        questionText: "Le liquide céphalo-rachidien et le liquide pleural font partie de quel compartiment ?",
        options: [
          "Liquide intracellulaire (LIC).",
          "Plasma.",
          "Liquide interstitiel.",
          "Volume globulaire.",
          "Ne font partie d'aucun compartiment liquidien."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "Le liquide interstitiel comprend l'eau intercellulaire, la lymphe, et les liquides non sanguins (transcellulaires) tels que le liquide céphalo-rachidien et pleural."
      },
      {
        questionText: "Laquelle des affirmations suivantes concernant les compartiments liquidiens est FAUSSE ?",
        options: [
          "La composition ionique du plasma et du liquide interstitiel est très similaire, à l'exception des protéines.",
          "L'osmolalité du liquide intracellulaire est physiologiquement maintenue égale à celle du liquide extracellulaire.",
          "La pompe Na⁺/K⁺ ATPase est la principale responsable de la faible concentration de Na⁺ et de la forte concentration de K⁺ dans le liquide extracellulaire.",
          "Le concept de 'milieu intérieur' a été introduit par Claude Bernard.",
          "Le rein joue un rôle prépondérant dans le maintien de la stabilité du milieu intérieur."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "L'affirmation 3 est fausse. La pompe Na⁺/K⁺ ATPase est responsable de la faible [Na⁺] et de la forte [K⁺] dans le liquide INtracellulaire (LIC)."
      },
      {
        questionText: "Un patient souffrant d'une maladie rénale sévère présente une hypoprotidémie. Quelle serait la conséquence directe sur les échanges capillaires selon les forces de Starling ?",
        options: [
          "Une augmentation de la Pression Oncotique Capillaire (POc), favorisant la réabsorption.",
          "Une diminution de la Pression Oncotique Capillaire (POc), favorisant la filtration et pouvant causer des œdèmes.",
          "Une augmentation de la Pression Hydrostatique Capillaire (PHc), favorisant la filtration.",
          "Une diminution de la Pression Hydrostatique Capillaire (PHc), favorisant la réabsorption.",
          "Aucun changement, car la pression oncotique n'affecte pas les mouvements d'eau."
        ],
        correctOptionIndexes: [1], // Correspond à (2)
        explanation: "Les protéines plasmatiques créent la POc. Une hypoprotidémie (moins de protéines) diminue la POc. Comme la POc s'oppose à la filtration, sa diminution favorise la sortie nette de liquide des capillaires vers l'interstitium, causant des œdèmes."
      },
      {
        questionText: "Concernant la perméabilité membranaire et les transports, laquelle de ces associations est INCORRECTE ?",
        options: [
          "Diffusion simple → O₂, CO₂, hormones stéroïdiennes.",
          "Diffusion facilitée → Glucose, acides aminés, ions via des canaux.",
          "Transport actif primaire → Pompe Na⁺/K⁺.",
          "Transport actif secondaire → Mouvement de l'eau via les aquaporines.",
          "Endocytose → Phagocytose de bactéries par un macrophage."
        ],
        correctOptionIndexes: [3], // Correspond à (4)
        explanation: "L'association 4 est incorrecte. Le mouvement de l'eau via les aquaporines est l'osmose (transport passif). Le transport actif secondaire concerne des cotransporteurs (ex: Na+/Glucose)."
      },
      {
        questionText: "Si l'osmolalité du liquide extracellulaire augmente soudainement (déshydratation), quel sera le mouvement net de l'eau ?",
        options: [
          "L'eau se déplacera du LEC vers le LIC.",
          "L'eau se déplacera du LIC vers le LEC.",
          "Il n'y aura aucun mouvement d'eau.",
          "Les ions Na⁺ se déplaceront massivement du LEC vers le LIC.",
          "Les deux compartiments perdront de l'eau vers le milieu extérieur."
        ],
        correctOptionIndexes: [1], // Correspond à (2)
        explanation: "L'eau se déplace toujours du milieu le moins concentré (faible osmolalité) vers le plus concentré (forte osmolalité). Si le LEC devient hypertonique, l'eau quitte les cellules (LIC) pour diluer le LEC, causant une déshydratation cellulaire."
      },
      {
        questionText: "Laquelle de ces propositions décrit le mieux la relation entre la molarité et la molalité ?",
        options: [
          "Elles sont identiques et interchangeables.",
          "La molarité est basée sur le volume de la solution (sensible à la T°), tandis que la molalité est basée sur la masse du solvant (indépendante de la T°).",
          "La molalité est basée sur le volume (sensible à la T°), tandis que la molarité est basée sur la masse (indépendante de la T°).",
          "La molarité concerne les électrolytes et la molalité les non-électrolytes.",
          "La molarité est toujours une valeur plus élevée que la molalité."
        ],
        correctOptionIndexes: [1], // Correspond à (2)
        explanation: "Molarité = moles/Litre de solution (sensible à la T°). Molalité = moles/kg de solvant (indépendante de la T°)."
      },
      {
        questionText: "Toutes les affirmations suivantes concernant le liquide interstitiel sont vraies, SAUF UNE. Laquelle ?",
        options: [
          "Il représente environ 15% du poids du corps.",
          "Sa composition ionique est très similaire à celle du plasma.",
          "Il contient la lymphe et le liquide céphalo-rachidien.",
          "Il est séparé du liquide intracellulaire par la paroi capillaire.",
          "Sa concentration en protéines est très faible par rapport au plasma."
        ],
        correctOptionIndexes: [3], // Correspond à (4)
        explanation: "L'affirmation 4 est fausse. Le liquide interstitiel est séparé du LIC par la membrane cellulaire. Il est séparé du plasma par la paroi capillaire."
      },
      {
        questionText: "Le transport de glucose dans la plupart des cellules est une diffusion facilitée. Qu'est-ce que cela implique ?",
        options: [
          "Le transport nécessite une dépense directe d'ATP.",
          "Le transport se fait contre le gradient de concentration.",
          "Le transport nécessite une protéine de transport membranaire spécifique.",
          "Le glucose peut traverser librement la bicouche lipidique.",
          "Ce mécanisme est plus lent que la diffusion simple."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "La diffusion facilitée est passive (suit le gradient, pas d'ATP) mais nécessite un transporteur protéique car le glucose est trop gros/polaire pour passer la membrane seul."
      },
      {
        questionText: "Quel est le rôle du système lymphatique dans les échanges capillaires ?",
        options: [
          "Il augmente activement la pression hydrostatique capillaire.",
          "Il produit les protéines responsables de la pression oncotique.",
          "Il draine l'excès de liquide et les protéines qui ont filtré dans l'espace interstitiel et les retourne à la circulation sanguine.",
          "Il transporte l'oxygène directement aux cellules.",
          "Il est la principale voie de réabsorption du liquide."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "La filtration capillaire est toujours légèrement supérieure à la réabsorption. Cet excès de liquide et de protéines qui s'échappent dans l'interstitium est collecté par les vaisseaux lymphatiques pour éviter l'œdème."
      },
      {
        questionText: "La pression oncotique nette (ΔPO) est (POc – POi). Pourquoi la POi (Pression oncotique interstitielle) est-elle généralement très faible ?",
        options: [
          "Parce que les protéines sont activement pompées hors de l'interstitium.",
          "Parce que la paroi capillaire est très peu perméable aux protéines, limitant leur fuite du plasma.",
          "Parce que le liquide interstitiel est hypertonique.",
          "Parce que les protéines sont rapidement dégradées dans l'interstitium.",
          "Parce que le volume interstitiel est beaucoup plus grand."
        ],
        correctOptionIndexes: [1], // Correspond à (2)
        explanation: "La pression oncotique est due aux protéines. Comme la paroi capillaire retient la plupart des protéines dans le plasma, leur concentration est élevée dans le capillaire (POc élevée) et très faible dans l'interstitium (POi faible)."
      },
      {
        questionText: "Un blocage de la pompe Na⁺/K⁺ ATPase dans une cellule nerveuse aurait pour conséquence à long terme :",
        options: [
          "Une hyperpolarisation de la membrane.",
          "Une augmentation du gradient de Na⁺.",
          "Une diminution progressive des gradients de Na⁺ et de K⁺, menant à une perte du potentiel de repos.",
          "Une augmentation de l'efficacité du transport actif secondaire.",
          "Une diminution du volume cellulaire (sortie d'eau)."
        ],
        correctOptionIndexes: [2], // Correspond à (3)
        explanation: "La pompe maintient les gradients (Na+ dehors, K+ dedans). Son blocage entraîne une fuite passive qui dissipe ces gradients. Sans les gradients, le potentiel de repos disparaît et la cellule devient inexcitable."
      }
    ]
  },
  {
    title: "Groupes Sanguins",
    subject: "physiology",
    questions: [
      {
        questionText: "Votre patient nécessite une transfusion sanguine, il est du groupe AB. Quel type de sang doit-on lui transfuser ?",
        options: [
          "AB ou O",
          "O ou A",
          "B ou O",
          "AB ou B",
          "A ou B"
        ],
        correctOptionIndexes: [1, 3], // Correspond à (2, 4)
        explanation: "Un sujet AB est 'receveur universel' (pas d'anticorps anti-A ni anti-B). Il peut recevoir des globules rouges de tous les groupes : A, B, AB, et O. Les options 2 (O ou A) et 4 (AB ou B) couvrent toutes les compatibilités."
      },
      {
        questionText: "Le sang est un organe constitué par (RJ)",
        options: [
          "Du plasma, d'eau et éléments figurés",
          "Des granulocytes et plasmocytes",
          "Du plasma, de plaquettes et de caryocytes",
          "Du plasma, leucocytes, thrombocytes et érythrocytes",
          "Eau, électrolytes, érythrocytes et leucocytes"
        ],
        correctOptionIndexes: [0, 3, 4], // Correspond à (1, 4, 5)
        explanation: "Le sang est composé de plasma (eau, électrolytes...) et d'éléments figurés (érythrocytes, leucocytes, thrombocytes). Les plasmocytes ne sont pas normalement circulants."
      },
      {
        questionText: "Les structures histologiques de la paroi vasculaire sont définies par (RJ)",
        options: [
          "De l'extérieur vers l'intérieur une adventice, média et intima",
          "L'adventice est la couche la plus profonde",
          "L'intima est la couche externe du vaisseau sanguin",
          "Le média sépare l'intima de l'adventice",
          "L'intima est la couche se trouvant en contact du flux sanguin"
        ],
        correctOptionIndexes: [0, 3, 4], // Correspond à (1, 4, 5)
        explanation: "L'ordre de l'extérieur vers l'intérieur est : Adventice, Média, Intima. L'intima est donc la couche interne, en contact avec le sang."
      },
      {
        questionText: "Le sang est un organe constitué par (RF - Réponses Fausses)",
        options: [
          "Plasma et éléments figurés",
          "Plasma, granulocytes et plasmocytes",
          "Plasma, plaquette et caryocytes",
          "Plasma, leucocytes, thrombocytes et érythrocytes",
          "Eau, électrolytes, érythrocytes et leucocytes"
        ],
        correctOptionIndexes: [1, 2], // Correspond à (2, 3)
        explanation: "Les affirmations 2 et 3 sont fausses. Les plasmocytes ne sont pas des constituants normaux du sang circulant. Le terme 'caryocytes' n'est pas spécifique."
      },
      {
        questionText: "Votre patient nécessite une transfusion sanguine, il est du groupe AB-, quel type de sang pourrait lui être administrer (RJ)",
        options: [
          "AB⁺ ou O⁻",
          "O⁻ ou A⁻",
          "B⁺ ou O⁺",
          "AB⁻ ou B⁻",
          "A⁻ ou B⁺"
        ],
        correctOptionIndexes: [1, 3], // Correspond à (2, 4)
        explanation: "Un receveur AB est universel (ABO), mais étant Rhésus négatif (Rh-), il ne doit recevoir que du sang Rh- pour éviter l'immunisation. Les options compatibles sont donc O⁻, A⁻, B⁻, et AB⁻."
      },
      {
        questionText: "Le sang joue un rôle dans (réponse Juste)",
        options: [
          "Les échanges nutritionnels",
          "Les échanges gazeux",
          "Transport thermique",
          "Défense immunitaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3], // Correspond à ABCD
        explanation: "Le sang a toutes ces fonctions : transport de nutriments/gaz, thermorégulation, et transport des cellules immunitaires."
      },
      {
        questionText: "Les leucocytes (RJ)",
        options: [
          "Rôle dans le transport des gaz dissous",
          "Action bactériolytique",
          "Action dans la phase initiale de l'hémostase",
          "Rôle dans la défense immunitaire"
        ],
        correctOptionIndexes: [1, 3], // Correspond à BD
        explanation: "Les leucocytes (globules blancs) assurent la défense immunitaire, y compris l'action bactériolytique (phagocytose). Le transport des gaz est le rôle des érythrocytes; l'hémostase initiale est le rôle des plaquettes."
      },
      {
        questionText: "Qui a découvert le système des groupes sanguins ABO ?",
        options: [
          "Louis Pasteur",
          "Alexander Fleming",
          "Karl Landsteiner",
          "Marie Curie"
        ],
        correctOptionIndexes: [2],
        explanation: "Karl Landsteiner a découvert les groupes sanguins ABO en 1900-1901, ce qui lui a valu le prix Nobel."
      },
      {
        questionText: "Qu'est-ce qui détermine le groupe sanguin d'un individu dans le système ABO ?",
        options: [
          "La présence d'anticorps A ou B dans le plasma.",
          "La forme des globules rouges.",
          "La présence ou l'absence d'antigènes A et B à la surface des érythrocytes.",
          "Le type d'hémoglobine présente."
        ],
        correctOptionIndexes: [2],
        explanation: "Le groupe sanguin est défini par la présence ou l'absence des antigènes A et B (agglutinogènes) sur les globules rouges."
      },
      {
        questionText: "Un individu de groupe sanguin O possède :",
        options: [
          "L'antigène A et l'anticorps anti-B.",
          "Aucun antigène et les anticorps anti-A et anti-B.",
          "L'antigène B et l'anticorps anti-A.",
          "Les antigènes A et B et aucun anticorps."
        ],
        correctOptionIndexes: [1],
        explanation: "Le groupe O n'a aucun antigène A ou B à la surface de ses hématies et possède les deux anticorps, anti-A et anti-B, dans son plasma."
      },
      {
        questionText: "Comment sont qualifiés les anticorps du système ABO (anti-A, anti-B) ?",
        options: [
          "Irréguliers et immuns.",
          "Réguliers et naturels.",
          "Acquis et temporaires.",
          "Pathologiques et rares."
        ],
        correctOptionIndexes: [1],
        explanation: "Ce sont des anticorps 'naturels' et 'réguliers', c'est-à-dire qu'ils existent de façon constante chez tout individu qui ne possède pas l'antigène correspondant."
      },
      {
        questionText: "Le système Rhésus est principalement déterminé par :",
        options: [
          "La présence de l'antigène A.",
          "La présence de l'antigène B.",
          "La présence ou l'absence de l'antigène D.",
          "La présence d'anticorps anti-D."
        ],
        correctOptionIndexes: [2],
        explanation: "Le système RHD détermine si un individu est Rhésus positif (antigène D présent) ou Rhésus négatif (antigène D absent)."
      },
      {
        questionText: "Un individu de groupe A peut donner son sang à :",
        options: [
          "Uniquement à un receveur de groupe A.",
          "À un receveur de groupe A et de groupe O.",
          "À un receveur de groupe A et de groupe AB.",
          "À un receveur de groupe B et de groupe AB."
        ],
        correctOptionIndexes: [2],
        explanation: "Un donneur A peut donner à un receveur A (isogroupe) et à un receveur AB (receveur universel)."
      },
      {
        questionText: "Que se passe-t-il lors d'une réaction d'agglutination ?",
        options: [
          "Les globules rouges se multiplient rapidement.",
          "Les anticorps du receveur se fixent sur les antigènes des globules rouges du donneur, provoquant leur agrégation.",
          "Le plasma du donneur détruit les globules rouges du receveur.",
          "Les plaquettes forment un caillot sanguin."
        ],
        correctOptionIndexes: [1],
        explanation: "L'agglutination est la réaction immunologique où les anticorps (agglutinines) se lient aux antigènes (agglutinogènes) sur les hématies, causant leur agrégation et potentiellement leur destruction (hémolyse)."
      },
      {
        questionText: "Les anticorps anti-D du système Rhésus sont :",
        options: [
          "Présents naturellement chez les individus Rh-.",
          "Acquis uniquement après une exposition à du sang Rh+.",
          "Présents naturellement chez les individus Rh+.",
          "Toujours sans danger lors d'une transfusion."
        ],
        correctOptionIndexes: [1],
        explanation: "Ce sont des anticorps 'irréguliers' (non naturels) acquis suite à une immunisation (exposition à l'antigène D)."
      },
      {
        questionText: "Dans quel contexte l'incompatibilité Rhésus fœto-maternelle est-elle un risque ?",
        options: [
          "Mère Rh+, fœtus Rh-.",
          "Mère Rh-, fœtus Rh+.",
          "Mère et fœtus sont tous deux Rh-.",
          "Mère et fœtus sont tous deux Rh+."
        ],
        correctOptionIndexes: [1],
        explanation: "Le risque survient lorsqu'une mère Rh- porte un enfant Rh+. Lors de l'accouchement, elle peut être immunisée contre l'antigène D et développer des anticorps anti-D qui attaqueront les globules rouges d'un futur fœtus Rh+."
      },
      {
        questionText: "Les épreuves globulaires (Beth-Vincent) pour le groupage sanguin consistent à mettre en contact :",
        options: [
          "Le plasma du patient avec des hématies-tests A et B.",
          "Les hématies du patient avec des sérums-tests anti-A et anti-B.",
          "Le plasma du patient avec du sérum anti-D.",
          "Les leucocytes du patient avec des hématies-tests."
        ],
        correctOptionIndexes: [1],
        explanation: "L'épreuve globulaire identifie les antigènes sur les hématies du patient en utilisant des sérums contenant des anticorps connus (anti-A, anti-B)."
      },
      {
        questionText: "Un 'donneur universel' de globules rouges est de groupe :",
        options: [
          "AB+",
          "AB-",
          "O+",
          "O-"
        ],
        correctOptionIndexes: [3],
        explanation: "Le groupe O- est donneur universel car ses globules rouges n'ont ni antigène A, ni B, ni D, minimisant le risque de réaction."
      },
      {
        questionText: "Les antigènes des groupes sanguins sont des molécules situées :",
        options: [
          "À l'intérieur du noyau des érythrocytes.",
          "Dissoutes dans le plasma.",
          "À la surface des membranes des érythrocytes.",
          "Uniquement sur les leucocytes."
        ],
        correctOptionIndexes: [2],
        explanation: "Les phénotypes érythrocytaires (groupes sanguins) correspondent à des antigènes situés sur la membrane des érythrocytes."
      },
      {
        questionText: "Laquelle des affirmations suivantes concernant les anticorps des systèmes ABO et Rhésus est FAUSSE ?",
        options: [
          "Les anticorps ABO sont dits 'naturels' tandis que les anti-D sont 'immuns'.",
          "Une transfusion incompatible dans le système ABO peut déclencher une hémolyse massive souvent mortelle.",
          "Un sujet Rh- possède naturellement des anticorps anti-D dès la naissance.",
          "La concentration des anticorps ABO naturels est très faible à la naissance et augmente durant l'enfance."
        ],
        correctOptionIndexes: [2],
        explanation: "L'affirmation C est fausse. Un sujet Rh- ne produit des anticorps anti-D qu'après une exposition (immunisation) à l'antigène D. Ils ne sont pas naturels."
      },
      {
        questionText: "Un donneur de plasma de groupe AB est considéré comme 'donneur universel' de plasma. Pourquoi ?",
        options: [
          "Car son plasma contient des antigènes A et B.",
          "Car son plasma ne contient ni anticorps anti-A, ni anti-B.",
          "Car ses globules rouges n'ont pas d'antigènes.",
          "Car il peut recevoir du plasma de tous les groupes."
        ],
        correctOptionIndexes: [1],
        explanation: "Pour une transfusion de plasma, on regarde les anticorps du donneur. Le plasma d'un sujet AB ne contient aucun anticorps anti-A ou anti-B, il peut donc être donné à n'importe quel receveur sans risque d'agglutiner les hématies de ce dernier."
      },
      {
        questionText: "L'épreuve plasmatique (ou test de Simonin) confirme le groupage sanguin en mettant en évidence :",
        options: [
          "Les antigènes sur les hématies du patient.",
          "La présence de l'antigène D.",
          "Les anticorps naturels présents dans le plasma du patient.",
          "La présence d'anticorps irréguliers."
        ],
        correctOptionIndexes: [2],
        explanation: "L'épreuve plasmatique (inverse de Beth-Vincent) consiste à mettre le plasma du patient en contact avec des hématies-tests A et B connues pour identifier les anticorps (agglutinines) présents dans son plasma."
      },
      {
        questionText: "Toutes les affirmations suivantes sont des raisons pour lesquelles le système ABO est le plus important en transfusion, SAUF UNE. Laquelle ?",
        options: [
          "La présence constante d'anticorps naturels réguliers.",
          "Les anticorps ABO sont capables d'induire une hémolyse massive.",
          "Les antigènes A et B sont exprimés uniquement sur les érythrocytes.",
          "L'incompatibilité ABO représente un obstacle infranchissable."
        ],
        correctOptionIndexes: [2],
        explanation: "L'affirmation C est fausse. Bien que principalement sur les érythrocytes, les antigènes A et B peuvent aussi être exprimés sur d'autres cellules et dans les sécrétions."
      },
      {
        questionText: "Un patient de groupe A, Rh+ a besoin de globules rouges O, Rh+. Est-ce viable ?",
        options: [
          "Non, car le donneur doit toujours être du même groupe.",
          "Oui, car le groupe O est donneur universel et le Rh+ est compatible avec Rh+.",
          "Non, car le plasma du donneur O contient des anticorps anti-A.",
          "Oui, mais uniquement si on transfuse le sang total."
        ],
        correctOptionIndexes: [1],
        explanation: "Pour une transfusion de concentrés de globules rouges (CGR), on regarde les antigènes du donneur vs anticorps du receveur. Les CGR O n'ont pas d'antigène A ou B et ne seront donc pas attaqués par les anticorps anti-B du receveur A. Rh+ est compatible."
      },
      {
        questionText: "Quelle est la base biochimique des antigènes A et B du système ABO ?",
        options: [
          "Protéines transmembranaires complexes.",
          "Différences dans la séquence de la globine.",
          "Structures lipidiques spécifiques.",
          "Sucres (oligosaccharides) ajoutés à une substance de base (Substance H)."
        ],
        correctOptionIndexes: [3],
        explanation: "Les antigènes A et B sont des glucides. La différence réside dans le dernier sucre ajouté à une chaîne commune (la substance H), déterminé par une enzyme (glycosyltransférase) spécifique."
      },
      {
        questionText: "Si une agglutination est observée avec le sérum anti-B, mais pas avec le sérum anti-A, quel est le groupe sanguin ?",
        options: [
          "Groupe A",
          "Groupe B",
          "Groupe AB",
          "Groupe O"
        ],
        correctOptionIndexes: [1],
        explanation: "L'agglutination avec le sérum anti-B signifie que les hématies du patient possèdent l'antigène B. L'absence d'agglutination avec le sérum anti-A signifie l'absence de l'antigène A. C'est la définition du groupe B."
      },
      {
        questionText: "Pourquoi un individu de groupe AB est-il 'receveur universel' (de globules rouges) ?",
        options: [
          "Parce que son plasma est riche en anticorps.",
          "Parce que ses globules rouges n'ont aucun antigène.",
          "Parce que son plasma ne contient ni anticorps anti-A ni anti-B pour attaquer les globules transfusés.",
          "Parce qu'il peut produire rapidement des anticorps."
        ],
        correctOptionIndexes: [2],
        explanation: "L'absence d'anticorps naturels anti-A et anti-B dans le plasma d'un sujet AB lui permet de recevoir des globules rouges des groupes A, B, AB, et O sans réaction."
      },
      {
        questionText: "La 'loi de Landsteiner' stipule que (pour le système ABO) :",
        options: [
          "Un individu possède les anticorps correspondants aux antigènes sur ses hématies.",
          "Un individu possède toujours les anticorps naturels dirigés contre les antigènes absents de ses propres hématies.",
          "La transfusion est toujours sans risque si les groupes ABO sont identiques.",
          "Le système Rhésus est plus important que le système ABO."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est le principe fondamental : la présence régulière et naturelle des anticorps correspondant aux antigènes absents (Ex: Groupe A -> Antigène A -> Anticorps Anti-B)."
      },
      {
        questionText: "Un accident transfusionnel hémolytique aigu (incompatibilité ABO) est principalement causé par :",
        options: [
          "La destruction des hématies du receveur par les anticorps du donneur.",
          "Une réaction allergique aux conservateurs.",
          "La destruction des hématies du donneur par les anticorps naturels (anti-A ou anti-B) du plasma du receveur.",
          "Une activation massive des plaquettes."
        ],
        correctOptionIndexes: [2],
        explanation: "Le mécanisme principal est l'attaque et la destruction (hémolyse) des globules rouges incompatibles du donneur par les anticorps préexistants et puissants (agglutinines) du receveur."
      }
    ]
  },
  {
    title: "Cycle Cardiaque et Physiologie Cardiaque",
    subject: "physiology",
    questions: [
      {
        questionText: "Dans la structure anatomophysiologique de la pompe cardiaque (RJ)",
        options: [
          "La valve tricuspide sépare le ventricule gauche de l'auricule gauche",
          "La valve mitrale sépare l'étage supérieure de l'inferieure du cœur gauche",
          "La direction du sang se fait dans double sens indépendamment du gradient de pression",
          "Le sang circule a sens unique respectant le gradient de pression intra cavitaire",
          "La valve aortique s'ouvre au moment de la systole ventriculaire et permet l'éjection"
        ],
        correctOptionIndexes: [1, 3, 4], // Correspond à C (2, 4, 5)
        explanation: "La valve mitrale sépare bien l'oreillette gauche du ventricule gauche. La circulation sanguine est unidirectionnelle grâce aux valves et suit toujours un gradient de pression. Lors de la systole, la pression VG dépasse la pression aortique, ouvrant la valve aortique."
      },
      {
        questionText: "La systole cardiaque correspond à (RJ)",
        options: [
          "La phase de remplissage ventriculaire",
          "La phase d'éjection ventriculaire",
          "La phase de contraction auriculaire",
          "La phase de contraction ventriculaire",
          "La phase de contraction et d'éjection cardiaque"
        ],
        correctOptionIndexes: [1, 3, 4], // Correspond à D (2, 4, 5)
        explanation: "La systole ventriculaire englobe la contraction (phase isovolumétrique) et l'éjection du sang vers les artères. Le remplissage correspond à la diastole."
      },
      {
        questionText: "Le cycle cardiaque est défini par (RJ)",
        options: [
          "Une systole auriculaire mettant fin à la diastole ventriculaire",
          "Une phase de remplissage ventriculaire qui correspond a la diastole auriculaire",
          "Une phase de relaxation iso-volumétrique qui correspond à l'ouverture des valves A-V",
          "Une contraction ventriculaire qui marque la systole du ventricule",
          "Une phase d'éjection ventriculaire qui correspond à la systole du ventricule"
        ],
        correctOptionIndexes: [0, 3, 4], // Correspond à A (1, 4, 5)
        explanation: "La systole auriculaire achève le remplissage de fin de diastole. La systole ventriculaire est la phase de contraction et d'éjection. La relaxation isovolumétrique précède (et provoque) l'ouverture des valves A-V."
      },
      {
        questionText: "Les conséquences d'une accélération du rythme cardiaque sont (RJ)",
        options: [
          "Raccourcissement de la diastole",
          "Une augmentation de la perfusion des artères coronaires",
          "Disparition de la phase du remplissage rapide du ventricule",
          "Augmentation du volume d'éjection lors de la systole ventriculaire",
          "Limite dans la majoration du débit cardiaque"
        ],
        correctOptionIndexes: [0, 2, 4], // Correspond à A (1, 3, 5)
        explanation: "Lorsque la fréquence cardiaque augmente, c'est surtout la diastole qui se raccourcit. Cela compromet le temps de remplissage ventriculaire et le temps de perfusion coronaire (qui a lieu en diastole), limitant ainsi l'augmentation maximale du débit cardiaque."
      },
      {
        questionText: "Le cycle cardiaque est (RU - Réponse Unique ?)",
        options: [
          "Une circonvolution rythmique de diastoles-relaxations",
          "Une succession cyclique de remplissage-relaxation-contraction",
          "Un rythme cyclique de relaxation contraction auriculo-ventriculaire",
          "Un cycle en boucle de systole et de diastole",
          "Une succession de remplissage ventriculaire, contraction isovolumétrique et d'éjection"
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à D (3, 4, 5)
        explanation: "Le cycle cardiaque est une boucle de systole et de diastole, impliquant une succession de phases (remplissage, contraction isovolumétrique, éjection, relaxation) et une coordination auriculo-ventriculaire."
      },
      {
        questionText: "Les bruits du cœur correspondent à (RJ)",
        options: [
          "Le B1 à la fermeture de la valve pulmonaire",
          "Le B2 à la fermeture de la valve tricuspide",
          "Le B1 à la fermeture de la valve mitrale",
          "Le B1 à la fermeture de la valve mitrale et tricuspide",
          "Le B2 à la fermeture de la valve aortique et pulmonaire"
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à D (3, 4, 5)
        explanation: "Le B1 (début systole) correspond à la fermeture des valves auriculo-ventriculaires (Mitrale et Tricuspide). Le B2 (fin systole) correspond à la fermeture des valves sigmoïdes (Aortique et Pulmonaire)."
      },
      {
        questionText: "La configuration anatomique différente du cœur droit et gauche est liée à (RJ)",
        options: [
          "Un niveau du gradient de pression entre étage auriculaire et ventriculaire",
          "Une connexion sur des systèmes vasculaires différents (Systémique et pulmonaire)",
          "Des niveaux de pression auxquels ils sont soumis",
          "L'importance du débit sanguin dans chaque coté",
          "Des niveaux de résistances différents des deux cotés"
        ],
        correctOptionIndexes: [1, 2, 4], // Correspond à C (2, 3, 5)
        explanation: "La paroi du VG est épaisse car elle pompe dans la circulation systémique (haute résistance, haute pression). Le VD est mince car il pompe dans la circulation pulmonaire (basse résistance, basse pression). Les débits sont égaux, mais les résistances et pressions diffèrent."
      },
      {
        questionText: "L'analyse histologique du cœur décrit de l'extérieur vers l'intérieur (RJ)",
        options: [
          "Péricarde séreux dur, un endocarde et un myocarde",
          "Endocarde, un espace péricardique et un myocarde",
          "Péricarde fibreux un myocarde, et un endocarde",
          "Péricarde, un myocarde et un endocarde",
          "Péricarde fibreux, un espace péricardique, un péricarde séreux, un myocarde, un endocarde"
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à D (3, 4, 5)
        explanation: "L'ordre complet de l'extérieur vers l'intérieur est : Péricarde fibreux, espace péricardique, péricarde séreux (dont l'épicarde), myocarde (muscle), et endocarde (interne). Les options 3 et 4 sont des versions simplifiées correctes."
      },
      {
        questionText: "La paroi du cœur présente de l'intérieur vers l'extérieur (RJ)",
        options: [
          "Intima- Média - Adventice",
          "Media-Intima - Adventice",
          "Adventice - Intima- Média",
          "Intima - Adventice - Média",
          "Média-Intima - Adventice"
        ],
        correctOptionIndexes: [0],
        explanation: "Par analogie avec les vaisseaux : Endocarde (Intima), Myocarde (Média), Épicarde/Péricarde (Adventice). L'ordre interne -> externe est donc Intima - Média - Adventice."
      },
      {
        questionText: "La paroi vasculaire définie trois tuniques (RJ)",
        options: [
          "Intima tunique moyenne",
          "Media tunique interne en contact avec le sang",
          "Adventice tunique externe",
          "Tunique interne intima en contact avec le sang."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'adventice est la tunique externe, et l'intima est la tunique interne en contact avec le sang."
      },
      {
        questionText: "Les déterminants des résistances vasculaires périphériques sont (RF - Réponse Fausse)",
        options: [
          "Epaisseur de la paroi vasculaire",
          "La viscosité sanguine",
          "La longueur du vaisseau sanguin",
          "Le diamètre vasculaire"
        ],
        correctOptionIndexes: [0],
        explanation: "La résistance (Loi de Poiseuille) dépend de la viscosité, de la longueur et (principalement) du diamètre/rayon. L'épaisseur de la paroi n'est pas un déterminant direct de la résistance à l'écoulement."
      },
      {
        questionText: "L'anatomie ventriculaire renseigne sur l'importance du travail cardiaque (RJ)",
        options: [
          "Le cœur est formé d'un ventricule gauche circulaire et fin",
          "Le ventricule gauche a une paroi épaisse car fait face à une grande circulation résistive",
          "Le ventricule droit à paroi fine car fait face à une circulation à basse pression",
          "Le ventricule droit entoure le ventricule gauche"
        ],
        correctOptionIndexes: [1, 2, 3], // Correspond à BCD
        explanation: "Le VG est circulaire et épais (haute résistance systémique). Le VD est plus fin, en forme de croissant et 'entoure' le VG (basse pression pulmonaire)."
      },
      {
        questionText: "Deux types de circulations régissent la vascularisation territoriale (RJ)",
        options: [
          "Grande circulation pulmonaire",
          "Petite circulation ou circulation à haute pression",
          "Circulation a haute pression en rapport avec la longueur du réseau vasculaire",
          "Grande circulation se faisant contre une grande résistance vasculaire"
        ],
        correctOptionIndexes: [3],
        explanation: "La grande circulation (systémique) est le circuit à haute pression et haute résistance. La petite (pulmonaire) est à basse pression/résistance."
      },
      {
        questionText: "Où se situe le cœur dans le corps humain ?",
        options: [
          "Dans l'abdomen, sous le diaphragme.",
          "Dans le médiastin, entre les deux poumons.",
          "Directement derrière le sternum, centré.",
          "Dans la partie supérieure gauche du thorax."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cœur est situé dans la cavité thoracique, au sein du médiastin, entre les deux poumons et repose sur le diaphragme."
      },
      {
        questionText: "Quel est le rôle principal des oreillettes (atria) ?",
        options: [
          "Pomper le sang vers la circulation systémique.",
          "Agir comme des réservoirs pour le sang revenant au cœur.",
          "Produire les impulsions électriques.",
          "Filtrer le sang."
        ],
        correctOptionIndexes: [1],
        explanation: "Les oreillettes ont principalement un rôle de réservoir, recevant le sang du retour veineux (caves et pulmonaires) avant de le passer aux ventricules."
      },
      {
        questionText: "Les valves sigmoïdes (ou semi-lunaires) sont :",
        options: [
          "La valve mitrale et la valve tricuspide.",
          "La valve aortique et la valve pulmonaire.",
          "Uniquement la valve aortique.",
          "Les valves qui séparent les oreillettes des ventricules."
        ],
        correctOptionIndexes: [1],
        explanation: "Ce sont les valves d'éjection situées entre les ventricules et les grandes artères (Aorte et Artère Pulmonaire)."
      },
      {
        questionText: "Laquelle de ces propriétés n'est PAS une propriété fondamentale des cardiomyocytes ?",
        options: [
          "Excitabilité",
          "Contractilité",
          "Régénération",
          "Automaticité"
        ],
        correctOptionIndexes: [2],
        explanation: "Les cardiomyocytes possèdent l'excitabilité, la contractilité, la conductibilité et l'automaticité. Leur capacité de régénération (division) est quasi nulle chez l'adulte."
      },
      {
        questionText: "Quel est le 'pacemaker' naturel du cœur ?",
        options: [
          "Le nœud auriculo-ventriculaire (AV)",
          "Le faisceau de His",
          "Le réseau de Purkinje",
          "Le nœud sinusal (SA)"
        ],
        correctOptionIndexes: [3],
        explanation: "Le nœud sinusal (ou sino-auriculaire, ou de Keith et Flack) est le centre de l'automatisme primaire ; il génère l'impulsion électrique et impose son rythme (le rythme sinusal) au reste du cœur."
      },
      {
        questionText: "Pourquoi les artères coronaires sont-elles perfusées principalement pendant la diastole ?",
        options: [
          "La pression dans l'aorte est plus élevée pendant la diastole.",
          "Pendant la systole, la contraction du myocarde comprime les artères coronaires, augmentant la résistance.",
          "Les valves coronaires ne s'ouvrent que pendant la diastole.",
          "La demande en oxygène du myocarde est plus faible pendant la systole."
        ],
        correctOptionIndexes: [1],
        explanation: "Pendant la systole (contraction), le muscle cardiaque est tellement contracté qu'il écrase les vaisseaux coronaires qui le traversent, empêchant le sang de circuler. C'est pendant la diastole (relaxation) que le muscle se détend et permet au sang de perfuser le myocarde."
      },
      {
        questionText: "L'importance fonctionnelle de la phase de 'plateau' (Phase 2) du potentiel d'action cardiaque est de :",
        options: [
          "Permettre une repolarisation très rapide.",
          "Prolonger la période réfractaire absolue, empêchant la tétanisation du cœur.",
          "Elle est due à une sortie massive d'ions sodium.",
          "Elle n'a pas de rôle fonctionnel connu."
        ],
        correctOptionIndexes: [1],
        explanation: "La longue phase de plateau (due à l'entrée lente de Ca2+) prolonge la période réfractaire. Cela garantit que le cœur ne peut pas être restimulé avant d'avoir fini son cycle de contraction/relaxation, empêchant la tétanisation (contraction soutenue) et lui permettant de fonctionner comme une pompe."
      },
      {
        questionText: "Quelle est la différence distinctive d'une cellule du nœud sinusal (pacemaker) ?",
        options: [
          "Elle a un potentiel de repos stable.",
          "Son potentiel d'action est déclenché par le calcium.",
          "Elle présente une dépolarisation diastolique spontanée (pente ascendante), lui conférant son automaticité.",
          "Son potentiel d'action est plus long que celui d'un cardiomyocyte."
        ],
        correctOptionIndexes: [2],
        explanation: "Les cellules pacemaker n'ont pas de potentiel de repos stable. Elles ont une 'pente de dépolarisation diastolique' (due au courant 'funny') qui leur permet d'atteindre spontanément le seuil d'excitation et de générer un influx de manière rythmique."
      },
      {
        questionText: "Toutes les affirmations sur la circulation coronaire sont vraies, SAUF UNE. Laquelle ?",
        options: [
          "Elle naît directement de la base de l'aorte.",
          "Le sang veineux coronaire est drainé dans l'oreillette gauche via le sinus coronaire.",
          "Elle est de type 'terminale', rendant le myocarde vulnérable à l'ischémie.",
          "Elle assure l'apport en O2 au muscle cardiaque lui-même."
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation B est fausse. Le sinus coronaire (qui collecte la majorité du sang veineux du cœur) se jette dans l'OREILLETTE DROITE (OD), et non la gauche."
      },
      {
        questionText: "La propriété du cardiomyocyte de réagir à un stimulus (mécanique, chimique ou électrique) est :",
        options: [
          "La contractilité",
          "La conductibilité",
          "L'excitabilité",
          "L'automaticité"
        ],
        correctOptionIndexes: [2],
        explanation: "L'excitabilité est la capacité de la cellule myocardique de répondre à un stimulus et de le convertir en influx électrique (potentiel d'action)."
      },
      {
        questionText: "Quelle est la fonction du liquide péricardique ?",
        options: [
          "Nourrir les cellules du myocarde.",
          "Conduire l'influx électrique.",
          "Servir de lubrifiant pour permettre le glissement des feuillets du péricarde sans frottement.",
          "Maintenir les valves cardiaques fermées."
        ],
        correctOptionIndexes: [2],
        explanation: "Le liquide péricardique dans l'espace péricardique agit comme un lubrifiant, empêchant le frottement entre les feuillets viscéral (épicarde) et pariétal lors des battements cardiaques."
      },
      {
        questionText: "Laquelle de ces structures n'appartient PAS au tissu nodal intrinsèque de conduction ?",
        options: [
          "Le nœud de Keith et Flack (nœud sinusal).",
          "Les fibres du système nerveux sympathique.",
          "Le faisceau de His.",
          "Le nœud d'Aschoff-Tawara (nœud auriculo-ventriculaire)."
        ],
        correctOptionIndexes: [1],
        explanation: "Le système nerveux sympathique (tout comme le parasympathique) est un régulateur EXTRINSÈQUE (il module la fréquence/force). Le tissu nodal INTRINSÈQUE est composé des nœuds (SA et AV), du faisceau de His et du réseau de Purkinje."
      },
      {
        questionText: "La 'période réfractaire absolue' d'un cardiomyocyte correspond à la période durant laquelle :",
        options: [
          "Un stimulus, même très intense, ne peut pas déclencher un nouveau potentiel d'action.",
          "Seul un stimulus plus intense que la normale peut déclencher un potentiel d'action.",
          "La cellule est hyper-excitable.",
          "La cellule se contracte de manière maximale."
        ],
        correctOptionIndexes: [0],
        explanation: "C'est la période (correspondant au plateau du PA) où la fibre myocardique ne peut réagir à aucun nouvel influx, car ses canaux sodiques sont inactivés."
      },
      {
        questionText: "La différence d'épaisseur entre le myocarde ventriculaire et le myocarde auriculaire s'explique par :",
        options: [
          "Une différence de vascularisation.",
          "Une différence de fonction : les ventricules sont des pompes, les oreillettes de simples réservoirs.",
          "Une différence de type de cellules musculaires.",
          "Une différence d'innervation."
        ],
        correctOptionIndexes: [1],
        explanation: "Le myocarde est plus épais à l'étage ventriculaire car les ventricules génèrent une pression élevée pour pomper le sang. Les oreillettes, agissant comme réservoirs, ont une paroi musculaire beaucoup plus fine."
      },
      {
        questionText: "Lequel de ces énoncés décrit correctement une circulation régionale 'en parallèle' ?",
        options: [
          "Le sang doit passer par le cerveau avant d'irriguer les reins.",
          "Le débit cardiaque total est divisé entre les différents organes, chacun recevant une fraction du sang artériel systémique simultanément.",
          "La circulation pulmonaire et la circulation systémique fonctionnent en parallèle.",
          "Toutes les artères du corps sont de même diamètre."
        ],
        correctOptionIndexes: [1],
        explanation: "La circulation systémique est montée 'en parallèle' : l'aorte donne des branches distinctes pour chaque organe (cerveau, reins, muscles...), permettant à chacun de recevoir du sang fraîchement oxygéné simultanément et de réguler son propre débit."
      }
    ]
  },
  {
    title: "Physiologie Musculaire",
    subject: "physiology",
    questions: [
      {
        questionText: "Quels sont les trois types de muscles décrits dans l'introduction ?",
        options: [
          "Strié squelettique, strié cardiaque, lisse.",
          "Volontaire, involontaire, mixte.",
          "Long, court, circulaire.",
          "Masticateur, facial, buccal."
        ],
        correctOptionIndexes: [0],
        explanation: "Le cours distingue le muscle strié squelettique (volontaire), le muscle strié cardiaque (involontaire) et le muscle lisse (involontaire)."
      },
      {
        questionText: "Quelle est l'unité morphologique et fonctionnelle du muscle strié squelettique ?",
        options: [
          "La fibre musculaire.",
          "La myofibrille.",
          "Le sarcomère.",
          "Le faisceau musculaire."
        ],
        correctOptionIndexes: [2],
        explanation: "Le sarcomère, délimité par deux stries Z, est l'unité contractile fondamentale du muscle."
      },
      {
        questionText: "Comment se nomme la membrane qui entoure une fibre musculaire individuelle ?",
        options: [
          "L'épimysium.",
          "Le périmysium.",
          "L'endomysium.",
          "Le sarcolemme."
        ],
        correctOptionIndexes: [3],
        explanation: "Le sarcolemme est la membrane plasmique de la cellule (fibre) musculaire. L'endomysium est la gaine de tissu conjonctif qui l'entoure."
      },
      {
        questionText: "Les filaments épais dans un sarcomère sont principalement constitués de quelle protéine ?",
        options: [
          "Actine",
          "Myosine",
          "Titine",
          "Troponine"
        ],
        correctOptionIndexes: [1],
        explanation: "Les filaments épais sont des assemblages de molécules de myosine."
      },
      {
        questionText: "Quel est le rôle du réticulum sarcoplasmique (RS) ?",
        options: [
          "Produire de l'ATP.",
          "Transmettre le potentiel d'action au centre de la fibre.",
          "Stocker et libérer les ions calcium (Ca²⁺).",
          "Synthétiser les protéines contractiles."
        ],
        correctOptionIndexes: [2],
        explanation: "Le RS, et ses citernes terminales, est le principal réservoir de calcium intracellulaire, essentiel pour le couplage excitation-contraction."
      },
      {
        questionText: "Quelle protéine régulatrice masque les sites de liaison de la myosine sur l'actine au repos ?",
        options: [
          "La troponine C.",
          "L'actine G.",
          "La titine.",
          "La tropomyosine."
        ],
        correctOptionIndexes: [3],
        explanation: "Au repos, la tropomyosine est positionnée de manière à couvrir physiquement les sites actifs de l'actine, empêchant la formation des ponts d'union."
      },
      {
        questionText: "Quel ion se lie à la troponine pour initier la contraction musculaire ?",
        options: [
          "Le sodium (Na⁺).",
          "Le potassium (K⁺).",
          "Le calcium (Ca²⁺).",
          "Le magnésium (Mg²⁺)."
        ],
        correctOptionIndexes: [2],
        explanation: "La libération de Ca²⁺ par le RS et sa liaison à la troponine C provoquent un changement de conformation qui déplace la tropomyosine et expose les sites de liaison de l'actine."
      },
      {
        questionText: "La structure formée par un tubule T et deux citernes terminales du réticulum sarcoplasmique est appelée :",
        options: [
          "Sarcomère.",
          "Triade.",
          "Jonction neuromusculaire.",
          "Myofibrille."
        ],
        correctOptionIndexes: [1],
        explanation: "La triade est la structure clé qui permet au potentiel d'action (transmis par le tubule T) de déclencher la libération de calcium par le RS."
      },
      {
        questionText: "Quel neurotransmetteur est libéré à la jonction neuromusculaire pour déclencher la contraction d'un muscle squelettique ?",
        options: [
          "La noradrénaline.",
          "La sérotonine.",
          "L'acétylcholine.",
          "Le GABA."
        ],
        correctOptionIndexes: [2],
        explanation: "Le motoneurone libère de l'acétylcholine (ACh) dans la fente synaptique, qui se lie à des récepteurs sur le sarcolemme et déclenche un potentiel d'action musculaire."
      },
      {
        questionText: "Que se passe-t-il au niveau du sarcomère lors d'une contraction musculaire ?",
        options: [
          "Les filaments d'actine et de myosine se raccourcissent.",
          "Les filaments d'actine glissent sur les filaments de myosine, rapprochant les stries Z.",
          "Seuls les filaments de myosine se raccourcissent.",
          "Les stries Z s'éloignent l'une de l'autre."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est le mécanisme du glissement des filaments : les filaments eux-mêmes ne changent pas de longueur, mais leur chevauchement augmente, ce qui raccourcit le sarcomère."
      },
      {
        questionText: "Une contraction où le muscle développe une tension mais ne change pas de longueur est dite :",
        options: [
          "Isotonique.",
          "Isométrique.",
          "Tétanique.",
          "Concentrique."
        ],
        correctOptionIndexes: [1],
        explanation: "Isométrique signifie 'longueur constante'. C'est le cas lorsqu'on essaie de soulever un objet trop lourd."
      },
      {
        questionText: "Une contraction où la tension musculaire reste constante pendant que le muscle se raccourcit est dite :",
        options: [
          "Isotonique.",
          "Isométrique.",
          "Tétanique.",
          "Excentrique."
        ],
        correctOptionIndexes: [0],
        explanation: "Isotonique signifie 'tension constante'. C'est le cas lorsqu'on porte un livre."
      },
      {
        questionText: "Quelle est la source d'énergie immédiate utilisée pour la contraction musculaire ?",
        options: [
          "Le glucose.",
          "Les acides gras.",
          "La phosphocréatine.",
          "L'ATP (adénosine triphosphate)."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ATP est la seule source d'énergie directement utilisée par la tête de myosine pour le cycle des ponts d'union."
      },
      {
        questionText: "Pour un effort intense et très court (quelques secondes), quelle est la principale voie de régénération de l'ATP ?",
        options: [
          "La phosphocréatine (PCr).",
          "La glycolyse anaérobie.",
          "La respiration cellulaire aérobie.",
          "L'oxydation des acides gras."
        ],
        correctOptionIndexes: [0],
        explanation: "La voie de la phosphocréatine permet une régénération quasi instantanée de l'ATP, idéale pour des efforts maximaux de très courte durée."
      },
      {
        questionText: "La glycolyse anaérobie produit de l'ATP et un sous-produit. Lequel ?",
        options: [
          "De l'eau.",
          "Du dioxyde de carbone.",
          "De l'acide lactique.",
          "De l'oxygène."
        ],
        correctOptionIndexes: [2],
        explanation: "En l'absence d'oxygène suffisant, la dégradation du glucose s'arrête au stade de l'acide lactique (ou lactate), produisant rapidement une quantité limitée d'ATP."
      },
      {
        questionText: "Les fibres musculaires de type I (lentes) sont caractérisées par :",
        options: [
          "Une contraction rapide et puissante.",
          "Une grande fatigabilité.",
          "Une richesse en mitochondries et une grande résistance à la fatigue.",
          "Une couleur blanche."
        ],
        correctOptionIndexes: [2],
        explanation: "Les fibres lentes (Rouges) sont spécialisées dans le métabolisme aérobie, ce qui les rend très résistantes à la fatigue et adaptées aux efforts d'endurance (riches en mitochondries et myoglobine)."
      },
      {
        questionText: "Quelle protéine de structure relie les filaments de myosine à la strie Z et est responsable de l'élasticité passive du muscle ?",
        options: [
          "La nébuline.",
          "L'alpha-actinine.",
          "La dystrophine.",
          "La titine."
        ],
        correctOptionIndexes: [3],
        explanation: "La titine est une protéine élastique géante qui ancre les filaments épais à la strie Z et permet au sarcomère de revenir à sa longueur de repos après un étirement."
      },
      {
        questionText: "Le 'potentiel de plaque motrice' (PPM) est :",
        options: [
          "Le potentiel d'action qui se propage le long de l'axone du motoneurone.",
          "Une dépolarisation locale du sarcolemme au niveau de la jonction neuromusculaire, déclenchée par l'acétylcholine.",
          "Le potentiel de repos de la fibre musculaire.",
          "Le signal qui provoque la libération de calcium par les tubules T."
        ],
        correctOptionIndexes: [1],
        explanation: "Le PPM est le potentiel gradué créé par la liaison de l'ACh à ses récepteurs. S'il atteint le seuil, il déclenche un potentiel d'action musculaire."
      },
      {
        questionText: "Quel est le rôle de la myosine ATPase ?",
        options: [
          "Synthétiser l'ATP.",
          "Pomper le calcium dans le réticulum sarcoplasmique.",
          "Hydrolyser l'ATP pour fournir l'énergie nécessaire au basculement de la tête de myosine.",
          "Lier l'actine."
        ],
        correctOptionIndexes: [2],
        explanation: "La tête de myosine contient un site ATPase qui hydrolyse l'ATP en ADP + Pi, libérant l'énergie qui 'arme' la tête pour le cycle de contraction."
      },
      {
        questionText: "Les tubules T sont des invaginations de quelle structure ?",
        options: [
          "Du réticulum sarcoplasmique.",
          "Du périmysium.",
          "Du sarcolemme.",
          "De la myofibrille."
        ],
        correctOptionIndexes: [2],
        explanation: "Les tubules T sont des invaginations (replis) du sarcolemme (la membrane cellulaire), permettant de propager le potentiel d'action rapidement au cœur de la fibre."
      },
      {
        questionText: "Laquelle des affirmations suivantes sur la myopathie de Duchenne est la plus précise ?",
        options: [
          "Elle est causée par une absence de myosine.",
          "Elle résulte d'une anomalie dans le codage de la dystrophine, rendant instable l'interaction cellule-matrice extracellulaire.",
          "Elle est due à un manque de calcium dans le RS.",
          "Elle affecte uniquement les fibres musculaires de type II."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cours explique que la dystrophine relie le cytosquelette interne à la matrice externe et qu'une anomalie dans son codage (absence ou dysfonction) est la cause de myopathies comme celle de Duchenne."
      },
      {
        questionText: "Quel événement provoque directement le détachement de la tête de myosine de l'actine à la fin d'un cycle ?",
        options: [
          "L'hydrolyse de l'ATP en ADP + Pi.",
          "La libération du phosphate inorganique (Pi).",
          "La liaison d'une nouvelle molécule d'ATP à la tête de myosine.",
          "Le re-pompage du Ca²⁺ dans le réticulum sarcoplasmique."
        ],
        correctOptionIndexes: [2],
        explanation: "Après le basculement (power stroke), la tête de myosine reste attachée à l'actine (état de 'rigor'). La liaison d'une nouvelle molécule d'ATP est nécessaire pour rompre cette liaison. (L'absence d'ATP = rigidité cadavérique)."
      },
      {
        questionText: "Un marathonien dépendra principalement de quelle voie énergétique ?",
        options: [
          "La phosphocréatine.",
          "La glycolyse anaérobie.",
          "La voie aérobie (respiration cellulaire), utilisant glucose et acides gras.",
          "Uniquement la glycolyse anaérobie."
        ],
        correctOptionIndexes: [2],
        explanation: "Le marathon est un effort d'endurance prolongé qui ne peut être soutenu que par la production massive et durable d'ATP via la voie aérobie (phosphorylation oxydative)."
      },
      {
        questionText: "Toutes les affirmations suivantes décrivent le relâchement musculaire, SAUF UNE. Laquelle ?",
        options: [
          "L'acétylcholine est dégradée par l'acétylcholinestérase.",
          "Le Ca²⁺ est activement re-capté par le réticulum sarcoplasmique (pompe SERCA).",
          "La liaison de l'ATP à la tête de myosine provoque le détachement des ponts d'union.",
          "La troponine se lie à la tropomyosine pour la maintenir en position de blocage."
        ],
        correctOptionIndexes: [3],
        explanation: "L'affirmation D est fausse. C'est l'inverse : lorsque le Ca²⁺ se détache de la troponine C, l'ensemble du complexe troponine-tropomyosine retourne passivement à sa conformation de repos, où la tropomyosine masque à nouveau les sites de l'actine."
      },
      {
        questionText: "Comment le PA généré à la plaque motrice atteint-il les myofibrilles au centre de la fibre ?",
        options: [
          "Par diffusion lente du sodium.",
          "En se propageant le long du sarcolemme et en descendant dans les tubules T.",
          "Par un signal hormonal.",
          "Par transmission via les filaments de titine."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est le rôle fondamental du système T (tubules transverses) : conduire l'onde de dépolarisation de la surface de la cellule jusqu'aux citernes terminales du RS situées en profondeur."
      },
      {
        questionText: "Que se passe-t-il lors d'une contraction isométrique au niveau moléculaire ?",
        options: [
          "Les têtes de myosine ne se lient pas à l'actine.",
          "Les filaments ne glissent pas, malgré la formation et le cycle des ponts d'union.",
          "L'ATP n'est pas hydrolysé.",
          "Le calcium n'est pas libéré."
        ],
        correctOptionIndexes: [1],
        explanation: "Lors d'une contraction isométrique, le cycle des ponts (liaison, basculement, hydrolyse d'ATP) se produit, mais la charge externe est trop grande pour permettre un raccourcissement. La tension est générée, mais il n'y a pas de glissement net."
      },
      {
        questionText: "Pourquoi un muscle est-il un 'organe' et pas seulement un 'tissu' ?",
        options: [
          "Parce qu'il est capable de se contracter.",
          "Car il est composé de plusieurs tissus : musculaire, conjonctif (gaines), nerveux et vaisseaux sanguins.",
          "Parce qu'il est attaché à un os.",
          "Parce qu'il contient des cellules multinucléées."
        ],
        correctOptionIndexes: [1],
        explanation: "La définition d'un organe est un assemblage de différents tissus pour une fonction commune. Le muscle contient du tissu musculaire, conjonctif (endo/peri/epimysium), nerveux et sanguin."
      },
      {
        questionText: "Lequel de ces événements est la PREMIÈRE étape du couplage excitation-contraction (après l'arrivée du PA neuronal) ?",
        options: [
          "La libération de calcium par le RS.",
          "La liaison de la myosine à l'actine.",
          "La libération d'acétylcholine par le motoneurone.",
          "Le basculement de la tête de myosine."
        ],
        correctOptionIndexes: [2],
        explanation: "La séquence est : 1) Arrivée du PA neuronal -> 2) Libération d'ACh -> 3) Potentiel de Plaque Motrice -> 4) PA musculaire -> 5) Libération de Ca²⁺ -> 6) Contraction."
      },
      {
        questionText: "Si une fibre musculaire est trop étirée, pourquoi sa force de contraction diminue-t-elle ?",
        options: [
          "Les filaments de titine se rompent.",
          "La concentration en ATP diminue.",
          "Le chevauchement entre actine et myosine est réduit, diminuant le nombre de ponts d'union possibles.",
          "Les tubules T sont endommagés."
        ],
        correctOptionIndexes: [2],
        explanation: "La force dépend du nombre de ponts d'union pouvant se former. Si le sarcomère est trop étiré, les filaments fins et épais ne se chevauchent presque plus, il n'y a donc pas de prise possible pour les têtes de myosine."
      }
    ]
  },
  {
    title: "Physiologie Rénale",
    subject: "physiology",
    questions: [
      {
        questionText: "La formation de l'urine primitive est sous la dépendance de (RJ)",
        options: [
          "D'un contrôle hormonal régit par l'aldostérone",
          "D'un contrôle central sous la dépendance du système nerveux végétatif",
          "D'un gradient de pression (différence entre pression hydrostatique et oncotique)",
          "Du débit de la filtration glomérulaire",
          "De la pression oncotique qui règne dans le capillaire glomérulaire"
        ],
        correctOptionIndexes: [2, 3, 4], // Correspond à B (3, 4, 5)
        explanation: "La formation de l'urine primitive (filtrat) est un phénomène de filtration physique dépendant du gradient de pression (Pression Nette de Filtration), qui détermine le Débit de Filtration Glomérulaire (DFG). La pression oncotique est une des composantes clés de ce gradient."
      },
      {
        questionText: "Le rein est un organe régulateur du milieu intérieur (RJ)",
        options: [
          "Rôle exocrine par synthèse de rénine",
          "Rôle endocrine par la synthèse d'érythropoïétine (EPO)",
          "Rôle exocrine par l'excrétion urinaire",
          "Rôle principal dans l'équilibre glycémique",
          "Rôle dans l'équilibre acido-basique"
        ],
        correctOptionIndexes: [1, 2, 4], // Correspond à D (2, 3, 5)
        explanation: "Le rein a une fonction endocrine (EPO), une fonction exocrine (urine), et un rôle vital dans l'équilibre acido-basique. La rénine est endocrine (pas exocrine). L'équilibre glycémique est le rôle du pancréas/foie."
      },
      {
        questionText: "Quelles sont les deux zones distinctes d'un rein sur une coupe anatomique ?",
        options: [
          "Le pôle vasculaire et le pôle urinaire.",
          "La capsule et le bassinet.",
          "La corticale (cortex) et la médullaire (medulla).",
          "Les pyramides de Malpighi et les colonnes de Bertin."
        ],
        correctOptionIndexes: [2],
        explanation: "Le rein est divisé en une zone périphérique, le cortex (corticale), et une zone centrale profonde, la médullaire (qui contient les pyramides)."
      },
      {
        questionText: "De quoi est constitué l'appareil juxtaglomérulaire ?",
        options: [
          "Uniquement des cellules de la macula densa.",
          "Du glomérule et de la capsule de Bowman.",
          "Cellules de la macula densa, cellules juxtaglomérulaires (granuleuses) et cellules mésangiales extraglomérulaires.",
          "Du tube contourné proximal et du tube collecteur."
        ],
        correctOptionIndexes: [2],
        explanation: "L'appareil juxtaglomérulaire est une structure spécialisée composée de ces trois types de cellules, jouant un rôle clé dans la régulation de la PA (via la rénine) et de la filtration."
      },
      {
        questionText: "Laquelle de ces affirmations concernant l'autorégulation du débit sanguin rénal est FAUSSE ?",
        options: [
          "Elle maintient le DFG constant malgré les variations de la PA systémique.",
          "Le mécanisme myogénique implique la contraction de l'artériole afférente.",
          "Le rétrocontrôle tubulo-glomérulaire est médié par la macula densa qui détecte la concentration de K⁺.",
          "Elle est principalement assurée par des mécanismes intrinsèques au rein."
        ],
        correctOptionIndexes: [2],
        explanation: "L'affirmation C est fausse. La macula densa est sensible au débit et à la concentration de NaCl (chlorure de sodium) dans le tube distal, pas au potassium."
      },
      {
        questionText: "Un diurétique qui inhibe la pompe Na⁺/K⁺/2Cl⁻ agit principalement sur quelle partie du néphron ?",
        options: [
          "Le tube contourné proximal.",
          "La branche descendante fine de l'anse de Henlé.",
          "La branche ascendante large de l'anse de Henlé.",
          "Le tube collecteur."
        ],
        correctOptionIndexes: [2],
        explanation: "La branche ascendante large de l'anse de Henlé est le site principal du cotransporteur Na⁺/K⁺/2Cl⁻ (NKCC2), qui est crucial pour la réabsorption de ces ions et l'établissement du gradient médullaire."
      },
      {
        questionText: "Comment l'hormone antidiurétique (ADH) augmente-t-elle la réabsorption de l'eau ?",
        options: [
          "En augmentant la réabsorption de sodium dans le tube proximal.",
          "En stimulant la soif.",
          "En provoquant une vasoconstriction de l'artériole efférente.",
          "En favorisant l'insertion d'aquaporines (canaux à eau) dans la membrane des cellules du tube collecteur."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ADH (Vasopressine) se lie à ses récepteurs V2 sur les cellules du tube collecteur, ce qui déclenche l'insertion d'Aquaporine-2 dans la membrane apicale, rendant le tube perméable à l'eau et permettant sa réabsorption passive."
      },
      {
        questionText: "Toutes les substances suivantes sont filtrées librement au niveau du glomérule, SAUF UNE. Laquelle ?",
        options: [
          "Le glucose.",
          "L'urée.",
          "L'albumine.",
          "Le sodium."
        ],
        correctOptionIndexes: [2],
        explanation: "La barrière de filtration glomérulaire empêche le passage des grosses molécules (comme les protéines) et des molécules chargées négativement. L'albumine (grosse protéine chargée négativement) n'est quasiment pas filtrée."
      },
      {
        questionText: "Une sténose de l'artère rénale entraîne quelle conséquence sur le système Rénine-Angiotensine (SRAA) ?",
        options: [
          "Une diminution de la sécrétion de rénine.",
          "Une augmentation de la sécrétion de rénine, entraînant une hypertension.",
          "Aucune modification du SRAA.",
          "Une inhibition de la sécrétion d'aldostérone."
        ],
        correctOptionIndexes: [1],
        explanation: "La sténose diminue la pression de perfusion dans l'artériole afférente. L'appareil juxtaglomérulaire l'interprète comme une hypotension systémique et réagit en sécrétant massivement de la rénine, ce qui active le SRAA et provoque une hypertension sévère."
      },
      {
        questionText: "Quelle est la différence entre réabsorption obligatoire et facultative ?",
        options: [
          "Obligatoire = eau, Facultative = solutés.",
          "Obligatoire = anse de Henlé, Facultative = tube proximal.",
          "Obligatoire = automatique (majoritaire, tube proximal), Facultative = régulée par des hormones (tube distal/collecteur).",
          "Il n'y a pas de différence."
        ],
        correctOptionIndexes: [2],
        explanation: "La réabsorption obligatoire (env. 85% du filtrat) se produit automatiquement (surtout dans le TProximal). La réabsorption facultative est l'ajustement fin (eau et Na+) qui a lieu dans le tube distal et collecteur, sous contrôle hormonal (ADH, Aldostérone)."
      },
      {
        questionText: "La 'clairance rénale' d'une substance représente :",
        options: [
          "La quantité totale excrétée dans l'urine par minute.",
          "Le volume de plasma totalement épuré de cette substance par les reins par unité de temps.",
          "La concentration de cette substance dans l'urine.",
          "La vitesse de filtration de cette substance."
        ],
        correctOptionIndexes: [1],
        explanation: "La clairance est un volume virtuel (en mL/min). C'est le volume de plasma que les reins 'nettoient' complètement d'une substance donnée en une minute. C'est l'outil principal pour mesurer la fonction rénale."
      },
      {
        questionText: "Si une substance est filtrée, mais ni réabsorbée ni sécrétée, sa clairance est égale à :",
        options: [
          "Zéro.",
          "Au débit plasmatique rénal (DPR).",
          "Au débit de filtration glomérulaire (DFG).",
          "Inférieure au DFG."
        ],
        correctOptionIndexes: [2],
        explanation: "Si la substance n'est que filtrée, la quantité excrétée est exactement égale à la quantité filtrée. Le volume de plasma 'nettoyé' est donc exactement égal au volume de plasma 'filtré' (DFG). C'est le principe de la mesure du DFG (ex: Inuline)."
      },
      {
        questionText: "Laquelle de ces fonctions n'est PAS assurée par le rein ?",
        options: [
          "Élimination de l'urée.",
          "Régulation de l'équilibre acido-basique.",
          "Production d'angiotensinogène.",
          "Activation de la vitamine D (en calcitriol)."
        ],
        correctOptionIndexes: [2],
        explanation: "L'angiotensinogène est une protéine produite par le FOIE. Le rein produit la RÉNINE (qui active l'angiotensinogène)."
      }
    ]
  },
  {
    title: "Physiologie Respiratoire",
    subject: "physiology",
    questions: [
      {
        questionText: "Le surfactant est (RJ)",
        options: [
          "Une couche de phospholipides",
          "Constituant alvéolaire qui augmente sa tension superficielle",
          "Élément qui protège l'alvéole contre l'infarcissement (collapsus)",
          "Augmente la compliance du poumon",
          "Réduit les forces de rétraction du poumon"
        ],
        correctOptionIndexes: [0, 2, 3, 4], // Correspond à D (1, 3, 4, 5)
        explanation: "Le surfactant (phospholipides) réduit la tension superficielle (donc 2 est faux). En faisant cela, il empêche l'affaissement des alvéoles (collapsus), augmente la compliance (souplesse) du poumon et réduit les forces de rétraction élastique."
      },
      {
        questionText: "Quelle est la principale fonction de la 'zone de conduction' des voies aériennes ?",
        options: [
          "Assurer les échanges gazeux avec le sang.",
          "Acheminer, purifier, réchauffer et humidifier l'air inspiré.",
          "Produire le surfactant.",
          "Participer à la phonation."
        ],
        correctOptionIndexes: [1],
        explanation: "La zone de conduction (nez, trachée, bronches) prépare l'air avant qu'il n'atteigne la zone respiratoire (alvéoles) en le filtrant, le réchauffant et l'humidifiant."
      },
      {
        questionText: "Quel est le principal muscle de l'inspiration au repos ?",
        options: [
          "Les muscles intercostaux externes.",
          "Le diaphragme.",
          "Les muscles abdominaux.",
          "Le sterno-cléido-mastoïdien."
        ],
        correctOptionIndexes: [1],
        explanation: "Le diaphragme est le muscle inspiratoire dominant, assurant 60 à 75% du volume d'air inspiré au repos par sa contraction (qui l'aplatit)."
      },
      {
        questionText: "Expliquez le concept d''espace mort anatomique'.",
        options: [
          "Le volume d'air qui reste dans les poumons après une expiration maximale.",
          "Le volume des alvéoles qui sont ventilées mais non perfusées.",
          "Le volume d'air contenu dans la zone de conduction qui ne participe pas aux échanges gazeux.",
          "La quantité totale d'air dans les poumons."
        ],
        correctOptionIndexes: [2],
        explanation: "L'espace mort anatomique correspond au volume des voies aériennes de conduction (trachée, bronches... environ 150 ml) où l'air est simplement transporté mais ne peut pas participer aux échanges gazeux (qui n'ont lieu que dans les alvéoles)."
      },
      {
        questionText: "La loi de Fick (diffusion) stipule que la diffusion d'un gaz à travers la membrane alvéolo-capillaire est :",
        options: [
          "Inversement proportionnelle à la surface et proportionnelle à l'épaisseur.",
          "Proportionnelle à la surface et à la différence de pression, et inversement proportionnelle à l'épaisseur.",
          "Indépendante de la nature du gaz (solubilité).",
          "Uniquement dépendante du débit sanguin."
        ],
        correctOptionIndexes: [1],
        explanation: "La diffusion (Loi de Fick) est favorisée par une grande surface d'échange (S), une grande différence de pression partielle (ΔP) et une faible épaisseur (E). Elle dépend aussi de la solubilité du gaz."
      },
      {
        questionText: "Pourquoi le CO₂ diffuse-t-il environ 20 fois plus facilement que l'O₂ à travers la membrane alvéolo-capillaire ?",
        options: [
          "Parce que la différence de pression pour le CO₂ est 20 fois plus grande.",
          "Parce que le CO₂ est transporté activement.",
          "Parce que le CO₂ est beaucoup plus soluble dans les liquides (membrane, plasma) que l'O₂.",
          "Parce que les pores de la membrane sont plus larges pour le CO₂."
        ],
        correctOptionIndexes: [2],
        explanation: "La diffusibilité d'un gaz dépend de sa solubilité (Sol) et de son Poids Moléculaire (PM). Bien que l'O₂ soit plus léger, la solubilité extrêmement élevée du CO₂ (environ 24 fois celle de l'O₂) est le facteur dominant qui le rend beaucoup plus diffusible."
      },
      {
        questionText: "Quel est le rôle du centre pneumotaxique (situé dans la protubérance) ?",
        options: [
          "Il stimule directement la contraction du diaphragme.",
          "Il est le principal récepteur des variations de PCO₂.",
          "Il aide à 'couper' l'inspiration (inhibe le centre apneustique), régulant ainsi la fréquence respiratoire.",
          "Il n'est actif que pendant l'expiration forcée."
        ],
        correctOptionIndexes: [2],
        explanation: "Les centres bulbaires règlent le rythme. Le centre pneumotaxique (pont) agit comme un modulateur qui 'arrête' l'inspiration, contrôlant ainsi la durée du cycle et donc la fréquence respiratoire."
      },
      {
        questionText: "Qu'est-ce que la 'Capacité Vitale' (CV) ?",
        options: [
          "Le volume d'air total que les poumons peuvent contenir (CPT).",
          "Le volume d'air qui reste après une expiration normale (CRF).",
          "Le plus grand volume d'air qui peut être mobilisé (inspiré max puis expiré max).",
          "Le volume d'air échangé au repos (VT)."
        ],
        correctOptionIndexes: [2],
        explanation: "La Capacité Vitale (CV) est le volume maximal d'air pouvant être expiré après une inspiration maximale. CV = Volume Courant (VT) + Volume de Réserve Inspiratoire (VRI) + Volume de Réserve Expiratoire (VRE)."
      },
      {
        questionText: "Comment une baisse de la PO₂ artérielle (hypoxie) est-elle principalement détectée pour stimuler la ventilation ?",
        options: [
          "Par les chémorécepteurs centraux (bulbe rachidien).",
          "Par les mécanorécepteurs dans la plèvre.",
          "Par les chémorécepteurs périphériques (crosse aortique et corpuscules carotidiens).",
          "Directement par le diaphragme."
        ],
        correctOptionIndexes: [2],
        explanation: "La ventilation est surtout régulée par la PCO₂ (via les récepteurs centraux). Cependant, une baisse de la PO₂ (hypoxie) est un stimulus puissant détecté spécifiquement par les chémorécepteurs périphériques (carotides et aorte)."
      }
    ]
  },
  {
    title: "Physiologie Digestive",
    subject: "physiology",
    questions: [
      {
        questionText: "La digestion est définie par certaines étapes (RJ)",
        options: [
          "Le suc pancréatique neutralise le PH du chyme",
          "La digestion gastrique des protéines se fait sous l'action de la pepsine",
          "La grande part de la digestion gastrique des protéines se fait au niveau iléale",
          "L'absorption des lipides est possible grâce à la lipase pancréatique",
          "L'absorption des lipides se fait majoritairement au niveau duodénal"
        ],
        correctOptionIndexes: [0, 1, 3], // Correspond à C (1, 2, 4)
        explanation: "Le suc pancréatique (riche en bicarbonate) neutralise l'acidité du chyme. Dans l'estomac, la pepsine commence la digestion des protéines. La lipase pancréatique est essentielle pour digérer les lipides (qui sont absorbés dans le duodénum/jéjunum)."
      },
      {
        questionText: "Quels sont les deux types de motilité du tube digestif ?",
        options: [
          "Contraction et relaxation.",
          "Mouvements propulsifs (péristaltisme) et mouvements de brassage (segmentation).",
          "Motilité volontaire et involontaire.",
          "Sécrétion et absorption."
        ],
        correctOptionIndexes: [1],
        explanation: "Le péristaltisme (propulsif) assure la progression du bol alimentaire, tandis que les mouvements de segmentation (brassage) mélangent le contenu avec les sucs digestifs."
      },
      {
        questionText: "De l'intérieur vers l'extérieur, l'ordre des quatre couches principales du tube digestif est :",
        options: [
          "Musculaire, séreuse, muqueuse, sous-muqueuse.",
          "Muqueuse, sous-muqueuse, musculaire, séreuse.",
          "Séreuse, musculaire, sous-muqueuse, muqueuse.",
          "Sous-muqueuse, muqueuse, musculaire, séreuse."
        ],
        correctOptionIndexes: [1],
        explanation: "La couche la plus interne (en contact avec les aliments) est la muqueuse, suivie de la sous-muqueuse (vaisseaux, nerfs), de la musculaire (interne circulaire, externe longitudinale) et enfin de la séreuse (externe)."
      },
      {
        questionText: "Quel est le rôle principal de l'acide chlorhydrique (HCl) sécrété par l'estomac ?",
        options: [
          "Commencer la digestion des glucides.",
          "Solubiliser les aliments, dénaturer les protéines et détruire les micro-organismes.",
          "Protéger la muqueuse gastrique.",
          "Permettre l'absorption de la vitamine B12."
        ],
        correctOptionIndexes: [1],
        explanation: "HCl crée un pH très bas (~1-2) qui tue les bactéries, dénature les protéines (facilitant l'action de la pepsine) et active le pepsinogène en pepsine."
      },
      {
        questionText: "Les 'cellules pacemaker' du tube digestif, responsables du rythme électrique de base, sont :",
        options: [
          "Cellules G.",
          "Cellules pariétales.",
          "Cellules interstitielles de Cajal (CIC).",
          "Cellules de Paneth."
        ],
        correctOptionIndexes: [2],
        explanation: "Les cellules interstitielles de Cajal génèrent spontanément des 'ondes lentes' (dépolarisations rythmiques) qui définissent le rythme de base des contractions intestinales."
      },
      {
        questionText: "Quel est le rôle du plexus myentérique (d'Auerbach) ?",
        options: [
          "Il commande essentiellement la sécrétion et le débit sanguin.",
          "Il commande essentiellement la motilité (contractions) du tractus gastro-intestinal.",
          "Il produit la gastrine.",
          "Il n'a aucun rôle régulateur."
        ],
        correctOptionIndexes: [1],
        explanation: "Le plexus myentérique est situé ENTRE les couches musculaires (myo = muscle) et contrôle principalement le péristaltisme et la segmentation. Le plexus sous-muqueux (Meissner) contrôle plutôt les sécrétions."
      },
      {
        questionText: "Comment agit le système nerveux parasympathique sur le tube digestif ?",
        options: [
          "Il inhibe la motricité et contracte les sphincters.",
          "Il stimule la motricité, les sécrétions et relâche les sphincters.",
          "Il n'a aucun effet sur la motricité.",
          "Il stimule uniquement la sécrétion."
        ],
        correctOptionIndexes: [1],
        explanation: "Le système parasympathique (nerf Vague) est le système du 'repos et de la digestion' (rest and digest). Il est globalement excitateur pour toutes les fonctions digestives."
      },
      {
        questionText: "Quelle hormone est responsable de la contraction de la vésicule biliaire et de la sécrétion d'enzymes pancréatiques ?",
        options: [
          "La gastrine.",
          "La sécrétine.",
          "La cholécystokinine (CCK).",
          "La somatostatine."
        ],
        correctOptionIndexes: [2],
        explanation: "La CCK est libérée par le duodénum en réponse aux graisses. Elle a deux cibles : la vésicule biliaire (contraction -> libération de bile) et le pancréas (libération d'enzymes digestives comme la lipase)."
      },
      {
        questionText: "Qu'est-ce que le microbiote intestinal ?",
        options: [
          "Le système immunitaire de l'intestin.",
          "L'ensemble des micro-organismes (bactéries, virus, etc.) qui colonisent le tube digestif.",
          "Une maladie inflammatoire de l'intestin.",
          "Les cellules qui absorbent les nutriments."
        ],
        correctOptionIndexes: [1],
        explanation: "Le microbiote (ou flore intestinale) est la population complexe de milliards de micro-organismes résidant dans notre tube digestif, essentielle à la digestion et à l'immunité."
      },
      {
        questionText: "Quelle immunoglobuline joue un rôle clé dans la protection des muqueuses digestives ?",
        options: [
          "IgG",
          "IgM",
          "IgE",
          "IgA"
        ],
        correctOptionIndexes: [3],
        explanation: "L'IgA sécrétoire (IgAs) est l'anticorps prédominant au niveau de toutes les muqueuses (digestive, respiratoire...), où il neutralise les pathogènes avant qu'ils n'entrent dans l'organisme."
      },
      {
        questionText: "Qu'est-ce qu'un 'réflexe long' dans le système digestif ?",
        options: [
          "Un réflexe entièrement contenu dans la paroi intestinale.",
          "Un réflexe dont l'arc nerveux passe par le système nerveux central (cerveau ou moelle).",
          "Un réflexe qui ne met en jeu que des hormones.",
          "Un réflexe qui prend plusieurs minutes."
        ],
        correctOptionIndexes: [1],
        explanation: "Un réflexe court est géré localement par le SNE (dans la paroi). Un réflexe long implique des afférences vers le SNC et des efférences (souvent via le nerf Vague) qui retournent au tube digestif."
      },
      {
        questionText: "Toutes les affirmations sur les Cellules Interstitielles de Cajal (CIC) sont vraies, SAUF UNE. Laquelle ?",
        options: [
          "Elles agissent comme des pacemakers en générant des ondes lentes.",
          "Elles sont des cellules musculaires hautement contractiles.",
          "Leur rythme varie selon le segment du tube digestif.",
          "Les ondes lentes rapprochent le potentiel de membrane du seuil de contraction."
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation B est fausse. Le cours précise que ces cellules 'ressemblent à des cellules musculaires mais ne sont pas contractiles'. Elles génèrent le rythme, les vraies cellules musculaires lisses exécutent la contraction."
      },
      {
        questionText: "Comment la sécrétine et la CCK agissent-elles de manière complémentaire ?",
        options: [
          "Les deux stimulent l'acide gastrique.",
          "Sécrétine (réponse à l'acide) -> stimule le bicarbonate. CCK (réponse aux graisses) -> stimule les enzymes.",
          "CCK neutralise l'acide et Sécrétine digère les graisses.",
          "Elles sont antagonistes."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est une synergie parfaite : l'acide du chyme libère la Sécrétine (qui commande au pancréas du bicarbonate pour neutraliser l'acide). Les graisses/protéines libèrent la CCK (qui commande au pancréas des enzymes pour les digérer)."
      },
      {
        questionText: "Quelle est la fonction principale des plaques de Peyer ?",
        options: [
          "Sécréter le mucus.",
          "Absorber les acides gras.",
          "Agir comme des centres de surveillance immunitaire (GALT/MALT).",
          "Produire des enzymes digestives."
        ],
        correctOptionIndexes: [2],
        explanation: "Les plaques de Peyer sont des composants majeurs du GALT (tissu lymphoïde associé à l'intestin), agissant comme des 'postes de garde' immunitaires."
      },
      {
        questionText: "Le phénomène de 'dysbiose' fait référence à :",
        options: [
          "Une absorption anormalement élevée.",
          "Un déséquilibre dans la composition et la fonction du microbiote intestinal.",
          "Une contraction excessive de l'estomac.",
          "Une production insuffisante de bile."
        ],
        correctOptionIndexes: [1],
        explanation: "La dysbiose est une altération de la flore intestinale (microbiote), qui peut être liée à diverses pathologies (inflammation, hyperperméabilité)."
      },
      {
        questionText: "Que sont les incrétines (GIP, GLP-1) ?",
        options: [
          "Sécrétées par l'estomac en réponse à une hypoglycémie.",
          "Elles diminuent la sécrétion d'insuline.",
          "Libérées par l'intestin en réponse aux nutriments, elles potentialisent la sécrétion d'insuline.",
          "Elles accélèrent la vidange gastrique."
        ],
        correctOptionIndexes: [2],
        explanation: "Les incrétines sont des hormones intestinales (libérées quand on mange) qui préparent le pancréas à l'arrivée du glucose en stimulant fortement la sécrétion d'insuline."
      },
      {
        questionText: "Comment le système nerveux sympathique affecte-t-il le débit sanguin digestif ?",
        options: [
          "Il provoque une vasodilatation.",
          "Il provoque une vasoconstriction, redirigeant le sang loin du tube digestif.",
          "Il n'a aucun effet.",
          "Il augmente le débit sanguin mais inhibe la motilité."
        ],
        correctOptionIndexes: [1],
        explanation: "Lors d'une situation de 'combat ou fuite' (sympathique), le corps arrête les fonctions non essentielles comme la digestion. Il provoque une vasoconstriction splanchnique (digestive) pour dériver le sang vers les muscles et le cerveau."
      },
      {
        questionText: "Quel est le rôle des jonctions serrées entre les cellules épithéliales de l'intestin ?",
        options: [
          "Permettre le passage libre de toutes les molécules.",
          "Ancrer les villosités.",
          "Former une barrière physique qui limite le passage incontrôlé (voie paracellulaire) de substances.",
          "Faciliter la communication électrique."
        ],
        correctOptionIndexes: [2],
        explanation: "Les jonctions serrées (zonula occludens) 'scellent' l'espace entre les cellules, forçant les substances à passer À TRAVERS la cellule (voie transcellulaire, contrôlée) plutôt qu'ENTRE les cellules, formant ainsi la barrière intestinale."
      },
      {
        questionText: "La ghréline, 'l'hormone de la faim', est principalement produite par :",
        options: [
          "Le duodénum.",
          "Le côlon.",
          "Le pancréas.",
          "Le fundus de l'estomac."
        ],
        correctOptionIndexes: [3],
        explanation: "La majorité de la ghréline (qui stimule l'appétit) est synthétisée et sécrétée par la muqueuse du fundus gastrique, surtout lorsque l'estomac est vide."
      },
      {
        questionText: "Lequel de ces processus n'a PAS lieu dans l'intestin grêle ?",
        options: [
          "Neutralisation du chyme acide.",
          "Digestion des macronutriments.",
          "Absorption de la quasi-totalité des nutriments.",
          "Sécrétion de pepsinogène."
        ],
        correctOptionIndexes: [3],
        explanation: "Le pepsinogène (précurseur de la pepsine) est sécrété exclusivement par les cellules principales de l'ESTOMAC."
      }
    ]
  },
  {
    title: "Organisation du Système Nerveux (SNC)",
    subject: "physiology",
    questions: [
      {
        questionText: "Le système nerveux central (SNC) est composé de :",
        options: [
          "L'encéphale et des nerfs crâniens.",
          "L'encéphale et de la moelle épinière.",
          "La moelle épinière et des nerfs rachidiens.",
          "Uniquement du cerveau."
        ],
        correctOptionIndexes: [1],
        explanation: "Le SNC (ou névraxe) comprend l'encéphale (cerveau, cervelet, tronc cérébral) et la moelle épinière. Les nerfs (crâniens et rachidiens) constituent le Système Nerveux Périphérique (SNP)."
      },
      {
        questionText: "L'unité de base du système nerveux, capable de générer et de conduire un influx nerveux, est :",
        options: [
          "La cellule gliale.",
          "Le neurone.",
          "L'astrocyte.",
          "La synapse."
        ],
        correctOptionIndexes: [1],
        explanation: "Le neurone est l'unité fondamentale du SN, possédant les propriétés d'excitabilité (réagir à un stimulus) et de conductivité (transmettre un influx)."
      },
      {
        questionText: "Dans un neurone, dans quel sens l'information circule-t-elle généralement ?",
        options: [
          "Axone → Dendrites → Corps cellulaire.",
          "Axone → Corps cellulaire → Dendrites.",
          "Dendrites → Corps cellulaire → Axone.",
          "Corps cellulaire → Dendrites → Axone."
        ],
        correctOptionIndexes: [2],
        explanation: "Les dendrites reçoivent l'information (afférence), le corps cellulaire (soma) l'intègre, et l'axone la conduit (efférence) vers la terminaison synaptique."
      },
      {
        questionText: "Quelle cellule gliale forme la gaine de myéline dans le Système Nerveux Central (SNC) ?",
        options: [
          "L'astrocyte.",
          "La cellule de Schwann.",
          "L'oligodendrocyte.",
          "La microglie."
        ],
        correctOptionIndexes: [2],
        explanation: "Les oligodendrocytes myélinisent les axones dans le SNC. Les cellules de Schwann font la même chose mais dans le SNP (Système Nerveux Périphérique)."
      },
      {
        questionText: "La phase de dépolarisation rapide du potentiel d'action est principalement due à :",
        options: [
          "Une entrée massive d'ions K⁺.",
          "Une sortie massive d'ions Na⁺.",
          "Une entrée massive d'ions Na⁺.",
          "Une entrée massive d'ions Cl⁻."
        ],
        correctOptionIndexes: [2],
        explanation: "Lorsque le seuil est atteint, les canaux sodiques (Na+) voltage-dépendants s'ouvrent massivement, provoquant une entrée rapide de charges positives (Na+) qui inverse la polarité de la membrane."
      },
      {
        questionText: "Qu'est-ce qu'une synapse ?",
        options: [
          "Le corps cellulaire d'un neurone.",
          "L'enveloppe protectrice d'un nerf.",
          "Une zone de contact fonctionnelle entre un neurone et une autre cellule (neurone, muscle, glande).",
          "Un type de cellule gliale."
        ],
        correctOptionIndexes: [2],
        explanation: "La synapse est la structure qui permet la transmission de l'information (chimique ou électrique) d'un neurone à un autre ou à un effecteur."
      },
      {
        questionText: "La voie sensitive ou afférente du SNP a pour fonction de :",
        options: [
          "Transmettre les commandes motrices du SNC aux muscles.",
          "Transporter les influx provenant des récepteurs sensoriels vers le SNC.",
          "Régler l'activité des muscles lisses et des glandes.",
          "Nourrir les neurones."
        ],
        correctOptionIndexes: [1],
        explanation: "La voie afférente (sensitive) conduit l'information 'vers' le centre (SNC). La voie efférente (motrice) conduit les ordres 'hors' du centre."
      },
      {
        questionText: "Quel est le principal rôle de la microglie ?",
        options: [
          "Former la gaine de myéline.",
          "Assurer la fonction immunitaire et de 'nettoyage' (phagocytose) du SNC.",
          "Participer à la nutrition des neurones.",
          "Tapisser les ventricules cérébraux."
        ],
        correctOptionIndexes: [1],
        explanation: "La microglie (cellules microgliales) agit comme le système immunitaire résident du SNC, fonctionnant comme des macrophages pour phagocyter les débris et les pathogènes."
      },
      {
        questionText: "Le potentiel de repos (-70 mV) est principalement maintenu par :",
        options: [
          "Une perméabilité égale à tous les ions.",
          "La pompe Na⁺/K⁺ et une plus grande perméabilité passive au K⁺ (canaux de fuite).",
          "L'absence de mouvement d'ions.",
          "Une entrée passive de protéines négatives."
        ],
        correctOptionIndexes: [1],
        explanation: "Le potentiel de repos résulte de l'équilibre de diffusion du K+ (qui sort passivement via les canaux de fuite, laissant l'intérieur négatif) et de l'action de la pompe Na+/K+ ATPase qui maintient ces gradients de concentration."
      },
      {
        questionText: "Qu'est-ce que la conduction saltatoire ?",
        options: [
          "La conduction lente le long d'une fibre amyélinique.",
          "Le 'saut' du potentiel d'action d'un nœud de Ranvier à l'autre le long d'une fibre myélinisée.",
          "Le transport des neurotransmetteurs le long de l'axone.",
          "L'échange d'ions au niveau de la synapse."
        ],
        correctOptionIndexes: [1],
        explanation: "La gaine de myéline isolante force le potentiel d'action à ne se régénérer qu'au niveau des interruptions (nœuds de Ranvier), permettant à l'influx de 'sauter' d'un nœud à l'autre, ce qui est beaucoup plus rapide."
      },
      {
        questionText: "Quelle est la différence entre une synapse chimique et une synapse électrique ?",
        options: [
          "Chimique est bidirectionnelle, Électrique est unidirectionnelle.",
          "Chimique utilise des neurotransmetteurs (lente), Électrique utilise des jonctions communicantes (rapide).",
          "Électrique est beaucoup plus lente que Chimique.",
          "Chimique = SNC, Électrique = SNP."
        ],
        correctOptionIndexes: [1],
        explanation: "La synapse chimique (la majorité) utilise des neurotransmetteurs traversant une fente synaptique (délai, unidirectionnelle). La synapse électrique a un contact physique (jonction communicante ou 'gap') pour un passage ionique direct (rapide, souvent bidirectionnel)."
      },
      {
        questionText: "Dans un arc réflexe (ex: rotulien), quel est le rôle de l'interneurone inhibiteur ?",
        options: [
          "Il stimule le muscle agoniste (quadriceps).",
          "Il inhibe le motoneurone du muscle antagoniste (ischio-jambiers) pour permettre le mouvement.",
          "Il transmet le signal au cerveau.",
          "Il n'y a pas d'interneurone inhibiteur dans ce réflexe."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est l'inhibition réciproque. Pour que le quadriceps (agoniste) puisse s'étendre, le muscle opposé (ischio, antagoniste) doit être relâché. Le neurone sensitif active donc le motoneurone du quadriceps ET un interneurone qui inhibe le motoneurone de l'ischio."
      },
      {
        questionText: "Quelle est la conséquence d'un blocage du transport axonal antérograde ?",
        options: [
          "Les déchets s'accumuleraient dans la terminaison axonale.",
          "Le corps cellulaire mourrait.",
          "La terminaison axonale serait privée de protéines, mitochondries et neurotransmetteurs, entraînant une défaillance synaptique.",
          "La gaine de myéline se dégraderait."
        ],
        correctOptionIndexes: [2],
        explanation: "Le transport antérograde (du corps cellulaire vers l'axone) est crucial pour acheminer tout le matériel (protéines, vésicules, organites) nécessaire au fonctionnement et à l'entretien de l'axone. Son blocage entraîne la dégénérescence de la terminaison."
      },
      {
        questionText: "Toutes les affirmations sur la période réfractaire sont vraies, SAUF UNE. Laquelle ?",
        options: [
          "Elle empêche la propagation rétrograde (vers l'arrière) du PA.",
          "La période réfractaire absolue est due à l'inactivation des canaux K⁺ voltage-dépendants.",
          "Elle limite la fréquence maximale de décharge du neurone.",
          "Elle protège le neurone d'une excitation ininterrompue."
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation B est fausse. La période réfractaire absolue est due à l'inactivation des canaux Na⁺ (sodiques) voltage-dépendants, qui ne peuvent pas se rouvrir tant que la membrane n'est pas repolarisée."
      },
      {
        questionText: "Un potentiel postsynaptique excitateur (PPSE) est une dépolarisation locale causée le plus souvent par l'ouverture de canaux :",
        options: [
          "Uniquement K⁺.",
          "Uniquement Cl⁻.",
          "K⁺ et Cl⁻.",
          "Na⁺ (et parfois Ca²⁺)."
        ],
        correctOptionIndexes: [3],
        explanation: "Une dépolarisation (excitation, rapprochement du seuil) est causée par une entrée de charges positives. L'ouverture de canaux sodiques (Na+) provoque cette entrée."
      },
      {
        questionText: "Laquelle de ces fonctions n'est PAS principalement attribuée aux astrocytes ?",
        options: [
          "Participer à la formation de la barrière hémato-encéphalique (BHE).",
          "Assurer la phagocytose des débris cellulaires dans le SNC.",
          "Participer à la nutrition des neurones (lien capillaires-neurones).",
          "Recapter les neurotransmetteurs (ex: glutamate) de la fente synaptique."
        ],
        correctOptionIndexes: [1],
        explanation: "La fonction de phagocytose et de surveillance immunitaire est le rôle principal de la MICROGLIE. Les astrocytes ont tous les autres rôles listés (support BHE, nutrition, recapture)."
      },
      {
        questionText: "La 'loi du tout ou rien' du potentiel d'action signifie que :",
        options: [
          "Soit le neurone est excitable, soit il ne l'est pas.",
          "Si le stimulus atteint le seuil, le PA généré aura toujours la même amplitude, quelle que soit l'intensité du stimulus.",
          "Tous les PA dans le corps ont la même durée.",
          "Un neurone ne génère qu'un seul PA dans sa vie."
        ],
        correctOptionIndexes: [1],
        explanation: "Une fois le seuil de dépolarisation atteint, la réponse (le PA) est maximale et stéréotypée (toujours la même amplitude). Un stimulus plus fort ne crée pas un PA 'plus grand', il crée seulement 'plus de PAs' (augmentation de la fréquence)."
      },
      {
        questionText: "Quel est le rôle principal du cervelet ?",
        options: [
          "Initier les mouvements volontaires.",
          "Contrôler la respiration et le rythme cardiaque.",
          "Traiter la vision et l'ouïe.",
          "Coordonner les mouvements, maintenir l'équilibre et la posture."
        ],
        correctOptionIndexes: [3],
        explanation: "Le cervelet agit comme un comparateur : il compare le mouvement planifié (info du cortex) au mouvement réel (info des propriocepteurs) pour corriger et affiner la coordination motrice en temps réel."
      },
      {
        questionText: "Une praxie (ex: mastication) est mieux décrite comme :",
        options: [
          "Un simple réflexe médullaire.",
          "Une action purement volontaire contrôlée consciemment.",
          "Un enchaînement coordonné de gestes, volontaire à l'initiation et réflexe/automatique dans l'exécution.",
          "Une fonction uniquement contrôlée par le tronc cérébral."
        ],
        correctOptionIndexes: [2],
        explanation: "Les praxies (comme mâcher, avaler, parler) sont des compétences motrices. On décide volontairement de les commencer, mais l'enchaînement complexe des muscles est ensuite géré par des circuits automatiques (impliquant le tronc cérébral)."
      },
      {
        questionText: "Si un virus (comme la rage) utilise le transport axonal pour atteindre le SNC depuis la périphérie, quel mécanisme utilise-t-il ?",
        options: [
          "Transport antérograde (via kinésines).",
          "Transport rétrograde (via dynéines).",
          "Diffusion simple le long de l'axone.",
          "Conduction saltatoire."
        ],
        correctOptionIndexes: [1],
        explanation: "Le virus doit voyager de la périphérie (terminaison nerveuse) vers le centre (corps cellulaire dans le SNC). Ce trajet (vers l'arrière) est assuré par le transport axonal rétrograde, qui utilise les protéines motrices dynéines se déplaçant sur les microtubules."
      }
    ]
  }
];

module.exports = physiologyQuizzes;