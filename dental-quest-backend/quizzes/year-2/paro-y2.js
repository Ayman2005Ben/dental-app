const paroQuizzes = [
  {
    title: "La Gencive",
    subject: "paro-y2",
    questions: [
      {
        questionText: "La gencive libre est :",
        options: [
          "C'est la partie la plus coronaire de la gencive située entre deux dents adjacentes.",
          "S'étend du sillon gingivo-dentaire à la jonction muco-gingivale.",
          "Présente une hauteur qui varie entre 1 à 9 mm.",
          "Est séparée de la dent par un espace appelé sillon gingival."
        ],
        correctOptionIndexes: [3],
        explanation: "La gencive libre est séparée de la surface dentaire par le sillon gingival (ou sulcus), qui est l'espace libre peu profond. Les autres options décrivent la papille interdentaire ou la gencive attachée."
      },
      {
        questionText: "La gencive attachée :",
        options: [
          "C'est la partie de la gencive libre et lisse qui entoure les dents à la façon d'un collier.",
          "Est située apicalement à la gencive marginale jusqu'à la jonction muco-gingivale.",
          "Est fermement liée au périoste de l'os alvéolaire ou au maxillaire.",
          "Ne présente aucune caractéristique anatomique qui la démarque de la muqueuse palatine."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La gencive attachée est située apicalement à la gencive marginale, est fermement fixée à l'os alvéolaire sous-jacent et partage des caractéristiques (kératinisation, immobilité) avec la muqueuse palatine."
      },
      {
        questionText: "La gencive a un rôle de protection qui se fait grâce à :",
        options: [
          "L'organisation des éléments cellulaires.",
          "L'union des cellules entres elles par leurs jonctions inter-cellulaires.",
          "La kératinisation de la couche externe.",
          "La présence de terminaisons nerveuses."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le rôle de protection de la gencive est assuré par la barrière physique créée par l'organisation de l'épithélium et la cohésion des cellules via leurs jonctions."
      },
      {
        questionText: "La gencive est :",
        options: [
          "Est bordée par deux lames basales.",
          "Est une partie de la muqueuse couvrant le rebord interne de la cavité buccale.",
          "Est plus épaisse au niveau de la dentition permanente.",
          "Est non kératinisée."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La gencive est la partie de la muqueuse buccale qui entoure le collet de la dent et recouvre l'os alvéolaire. Elle est généralement plus épaisse en dentition permanente que temporaire. La gencive attachée est kératinisée."
      },
      {
        questionText: "La gencive marginale :",
        options: [
          "Est bordée d'une lame basale externe.",
          "Est non visible sur les clichés radiographiques.",
          "Est une partie de la muqueuse couvrant le rebord interne de la cavité buccale.",
          "Est caractérisée par une forte fibrose et peu de cellules inflammatoires."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Comme tout épithélium, la gencive marginale est reliée au tissu conjonctif par une lame basale. Étant un tissu mou, elle n'est pas visible sur les radiographies."
      },
      {
        questionText: "La gencive assure les rôles suivants :",
        options: [
          "Joue un rôle important dans la protection mécanique.",
          "Assure la protection des structures profondes.",
          "Agit comme un véritable milieu intérieur.",
          "Assure l'ancrage des structures profondes."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La gencive sert de barrière protégeant l'os alvéolaire, le desmodonte et le cément (structures profondes). Très vascularisée et riche en cellules immunitaires, elle agit comme une interface importante du milieu intérieur."
      },
       {
        questionText: "La gencive attachée :",
        options: [
          "Se situe apicalement à la gencive marginale",
          "Séparée de la muqueuse alvéolaire par la ligne muco-gingivale",
          "Possède une épaisseur plus importante à la maxillaire qu'à la mandibule",
          "Sa hauteur est plus importante à la mandibule qu'au maxillaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La gencive attachée est la partie fixe, située apicalement (en dessous) de la gencive libre ou marginale. La largeur (hauteur) de la gencive attachée est généralement plus importante à la mandibule dans les secteurs latéraux."
      },
      {
        questionText: "La gencive inter-dentaire :",
        options: [
          "Est uniquement formée par la gencive marginale",
          "Elle se situe apicalement à la gencive attachée",
          "Est uniquement formée par le conjonctif gingival périodiquement",
          "Le col gingival relie la papille vestibulaire et linguale"
        ],
        correctOptionIndexes: [0],
        explanation: "La papille inter-dentaire est une extension de la gencive marginale qui remplit l'espace entre les dents."
      },
      {
        questionText: "La gencive est :",
        options: [
          "Le support du paro-y2donte profond.",
          "Une partie spécialisée de la muqueuse buccale.",
          "Une structure fibro-muqueuse permettant de résister aux agressions mécaniques et chimico-bactériennes du milieu buccal.",
          "Recouvre le collet des dents.",
          "Adhère à la surface osseuse."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La gencive est une fibro-muqueuse (muqueuse masticatoire) dont la structure lui confère une grande résistance aux agressions (C). Elle est localisée au niveau du collet des dents, qu'elle recouvre (D)."
      },
      {
        questionText: "La gencive marginale est :",
        options: [
          "Une partie libre et mobile.",
          "Comprise entre le bord libre et la ligne muco-gingivale.",
          "Située au niveau des zones inter-dentaires.",
          "D'aspect papillaire.",
          "Une partie de la gencive attachée."
        ],
        correctOptionIndexes: [0],
        explanation: "La gencive marginale (ou libre) est la portion la plus coronaire de la gencive. Elle n'est pas attachée à la dent ou à l'os et est donc libre et mobile (A)."
      },
      {
        questionText: "La gencive attachée est :",
        options: [
          "En forme d'anneau libre.",
          "Comprise entre le bord libre et la gencive attachée.",
          "Comprise entre le sillon gingival marginal et la surface dentaire.",
          "Serti le collet des dents.",
          "Elle est kératinisée."
        ],
        correctOptionIndexes: [1],
        explanation: "La gencive attachée est définie anatomiquement comme la zone de gencive qui est fermement attachée à l'os alvéolaire. Elle est située entre la gencive marginale (bord libre) et la jonction muco-gingivale (ce qui correspond à l'esprit de la réponse B)."
      },
      {
        questionText: "La muqueuse alvéolaire représente :",
        options: [
          "La face interne des lèvres.",
          "Le plancher buccal.",
          "La gencive.",
          "La muqueuse jugale.",
          "La muqueuse inter-dentaire."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La muqueuse alvéolaire est une muqueuse de revêtement lâche et mobile qui se prolonge vers la muqueuse jugale (D) et la face interne des lèvres (A)."
      },
       {
        questionText: "La gencive est :",
        options: [
          "Est la partie du paro-y2donte profond.",
          "Une partie spécialisée de la muqueuse buccale.",
          "Un revêtement de protection permettant de résister aux agressions mécaniques et chimico-bactériennes du milieu buccal.",
          "Permet l'isolement des dents."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La gencive est une composante du paro-y2donte superficiel. C'est une partie spécialisée de la muqueuse buccale (B) qui joue un rôle essentiel de protection (C) et d'étanchéité, permettant l'isolement des dents (D)."
      },
      {
        questionText: "La gencive marginale est :",
        options: [
          "Correspond au collet des dents.",
          "Comprise entre le bord libre et la ligne muco-gingivale.",
          "Correspond à la gencive inter-dentaire.",
          "D'aspect peaufiné."
        ],
        correctOptionIndexes: [1],
        explanation: "La gencive marginale (ou gencive attachée selon le contexte) s'étend de la jonction entre la gencive libre et la gencive attachée jusqu'à la ligne muco-gingivale (B)."
      },
      {
        questionText: "La gencive libre est :",
        options: [
          "En forme d'amande.",
          "Compris entre le bord libre et la gencive attachée.",
          "Compris entre l'attache épithéliale gingivale et la surface dentaire.",
          "Serait le collet des dents."
        ],
        correctOptionIndexes: [2],
        explanation: "La gencive libre est la partie terminale de la gencive qui entoure la dent. Elle correspond à la zone située entre le bord libre et l'attache épithéliale au niveau du collet (C)."
      },
      {
        questionText: "La muqueuse alvéolaire représente :",
        options: [
          "La face interne des lèvres.",
          "Le palais mou.",
          "La gencive.",
          "Le fond du buccal."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La muqueuse alvéolaire recouvre l'os alvéolaire au-delà de la ligne muco-gingivale et se continue avec la muqueuse des joues et des lèvres. La gencive elle-même se continue avec la muqueuse alvéolaire."
      }
    ]
  },
  {
    title: "Terminologie en paro-y2dontologie",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le sillon gingivo-dentaire :",
        options: [
          "Est aussi appelé sulcus gingival.",
          "Est constitué d'une paro-y2i molle représentée par l'attache épithéliale.",
          "S'étend apicalement à la ligne de démarcation amélo-cémentaire.",
          "Est rattaché à la dent par l'attache épithéliale."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Sa paro-y2i molle est la face interne de la gencive libre, et il est bordé à sa profondeur par l'attache épithéliale qui le rattache à la dent."
      },
      {
        questionText: "Une déhiscence est :",
        options: [
          "Une perte osseuse alvéolaire.",
          "Une dénudation isolée de l'os alvéolaire qui se prolonge jusqu'au rebord alvéolaire.",
          "Une perte osseuse qui ne met pas à jour le bord alvéolaire intact.",
          "La crête marginale étant relativement intacte."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La déhiscence est une perte osseuse en forme de fente qui s'étend jusqu'au rebord alvéolaire, ce qui signifie que la crête marginale n'est pas intacte à cet endroit."
      },
      {
        questionText: "Les constituants du sillon gingivo-dentaire (SULCUS) sont :",
        options: [
          "La surface dentaire.",
          "L'épithélium.",
          "Un conjonctif sulculaire.",
          "Le fond.",
          "Les fibres gingivales."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le sillon gingival est délimité par l'épithélium sulculaire (B). Son point le plus apical est le fond (D), au niveau de l'attache épithéliale. Le conjonctif sulculaire (C) est le tissu de soutien sous l'épithélium."
      },
      {
        questionText: "Les constituants du sillon gingivo-dentaire (SULCUS) sont :",
        options: [
          "La surface dentaire.",
          "L'épithélium.",
          "Un conjonctif sulculaire.",
          "Le fond."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le sillon est l'espace virtuel entre la dent et la gencive libre. Ses constituants sont la paro-y2i dentaire (A), l'épithélium sulculaire (B), et son fond est l'attache épithéliale (D)."
      }
    ]
  },
  {
    title: "L'Attache Épithéliale",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le potentiel de défense de l'attache épithéliale est assuré par :",
        options: [
          "La perméabilité de l'attache.",
          "La kératinisation de ses cellules.",
          "L'adhésivité des différents éléments de l'attache épithéliale.",
          "L'homéostasie du sillon épithéliale."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La perméabilité de l'attache permet le passage de fluides et de cellules de défense, tandis que l'adhésivité de ses cellules crée une barrière physique essentielle. L'attache épithéliale est non-kératinisée."
      },
      {
        questionText: "L'attache épithéliale :",
        options: [
          "C'est l'union entre les cellules épithéliales et la surface dentaire.",
          "C'est un tissu constitué d'un épithélium pavimenteux stratifié kératinisé.",
          "Elle se situe entre la surface dentaire, le fond du sulcus et les fibres les plus superficielles du desmodonte.",
          "Se trouve au niveau du sulcus à la limite entre gencive attachée et muqueuse alvéolaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'attache épithéliale est la structure qui fixe la gencive à l'émail ou au cément, et elle se trouve au fond du sillon (sulcus). Elle est non-kératinisée."
      },
      {
        questionText: "La structure histologique de l'attache épithéliale est formée par :",
        options: [
          "Un épithélium pavimenteux stratifié kératinisé.",
          "Une couche spinocellulaire.",
          "Une lame basale externe.",
          "Une lame basale interne."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'épithélium de jonction (attache épithéliale) possède une couche de cellules polyédriques (couche spinocellulaire), une lame basale externe le reliant au tissu conjonctif, et une lame basale interne le reliant à la surface de la dent. Il est non-kératinisé."
      },
      {
        questionText: "Lors de la formation de l'attache épithéliale :",
        options: [
          "Il y a une multiplication par un épithélium adamantain réduit après l'éruption.",
          "Il y a une multiplication par l'épithélium adamantain réduit avant l'éruption.",
          "La couche spinocellulaire se transforme en cellules mésodermiques au moment de l'éruption.",
          "Les améloblastes se transforment en cellules de l'épithélium de jonction au moment du contact de l'émail."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les améloblastes (cellules de l'émail) deviennent les cellules de l'épithélium de jonction après l'éruption. Ces cellules de l'épithélium adamantain réduit (EAR) prolifèrent pour former l'attache épithéliale mature."
      },
      {
        questionText: "L'équilibre de jonction :",
        options: [
          "Est au fond du S-D (Sulcus Dentaire)",
          "Est le niveau où la gencive est attachée à la dent.",
          "Est bordé d'une lame basale interne.",
          "Est une faible zone qui donne insertion aux fibres de Sharpy du ligament paro-y2dontal."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'équilibre de jonction fait référence à l'Épithélium de Jonction (EJ) qui se trouve au fond du Sulcus Dentaire, attache la gencive à la dent, et est relié à la dent par une lame basale interne."
      },
      {
        questionText: "La distance de l'attache épithéliale par rapport à la crête alvéolaire reste constante pendant l'éruption :",
        options: ["Vrai", "Faux"],
        correctOptionIndexes: [1],
        explanation: "La distance entre l'attache épithéliale et l'os (l'espace biologique) n'est pas constante pendant l'éruption, qui est un processus dynamique. Cette distance se stabilise après l'éruption complète."
      },
      {
        questionText: "La cuticule dentaire :",
        options: [
          "Est une fine couche électro dense, interposée entre la surface de l'émail et les améloblastes réduits.",
          "Elle est secrétée par les cellules basales de l'épithélium de transformation en cellules granuleuses.",
          "Est faite de glycoprotéines dépourvues de glycoprotéines et de polysaccharides humains.",
          "Fibronectine, tenascine.",
          "Desmodonte essentiellement actif."
        ],
        correctOptionIndexes: [0],
        explanation: "La cuticule dentaire (cuticule de l'émail) est le produit de sécrétion des améloblastes. C'est une fine couche électro-dense qui se trouve entre l'émail et les cellules de l'organe de l'émail réduit avant l'éruption."
      },
      {
        questionText: "La lame basale externe :",
        options: [
          "Est une structure qui sépare l'épithélium de jonction du tissu conjonctif.",
          "Contient les fibres épithéliales.",
          "Elle n'existe même pas.",
          "Est la membrane limitante."
        ],
        correctOptionIndexes: [0],
        explanation: "La lame basale externe sépare l'épithélium de jonction du tissu conjonctif sous-jacent et sert de structure de séparation et de support."
      },
      {
        questionText: "La distance de l'attache épithéliale par rapport à la crête alvéolaire reste constante pendant l'éruption :",
        options: ["Vrai", "Faux"],
        correctOptionIndexes: [0],
        explanation: "Pendant l'éruption de la dent, la distance qui sépare la crête osseuse du fond du sulcus (espace biologique) est conservée et reste relativement constante."
      },
      {
        questionText: "La cuticule dentaire :",
        options: [
          "Est une fine couche électro dense, interposée entre la surface de l'émail et les améloblastes réduits.",
          "Elle est sécrétée par la face distale des améloblastes en transformation en cellules granuleuses.",
          "Est formée de protéines dépourvues de glycoprotéines et de polysaccharides humains.",
          "Fibronectine, tenascine.",
          "Disparaît essentiellement actif."
        ],
        correctOptionIndexes: [0],
        explanation: "La cuticule dentaire (membrane de Nasmyth) est une fine couche électrodense, interposée entre l'émail et l'épithélium amélaire réduit, sécrétée par les améloblastes avant l'éruption."
      },
      {
        questionText: "La lame basale externe :",
        options: [
          "Est une structure qui sépare l'épithélium de jonction du tissu conjonctif.",
          "Elle est formée par des fibroplastes.",
          "Elle n'existe même pas.",
          "Elle est essentiellement active."
        ],
        correctOptionIndexes: [0],
        explanation: "La lame basale externe est la membrane qui sépare l'épithélium de jonction du tissu conjonctif sous-jacent. Elle est formée par les cellules épithéliales, pas par les fibroblastes."
      }
    ]
  },
  {
    title: "Desmodonte",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Quel est le rôle des fibres de Sharpey ?",
        options: [
          "Assurer la nutrition du desmodonte.",
          "Fixer la dent à l'os alvéolaire.",
          "Amortir les forces masticatoires.",
          "Protéger la dent contre les bactéries."
        ],
        correctOptionIndexes: [1],
        explanation: "Les fibres de Sharpey sont les extrémités des fibres principales du desmodonte qui s'insèrent dans le cément et dans l'os alvéolaire, leur rôle principal étant de fixer la dent dans son alvéole."
      },
      {
        questionText: "Laquelle des propositions suivantes est incorrecte concernant le desmodonte ?",
        options: [
          "Il comporte des mécanorécepteurs responsables de la proprioception dentaire.",
          "Il est composé de 4 types de fibres principales.",
          "Il est impliqué dans la formation de l'émail dentaire.",
          "Il contient des fibroblastes et des restes épithéliaux de Malassez."
        ],
        correctOptionIndexes: [2],
        explanation: "L'émail est formé par les améloblastes avant l'éruption. Le desmodonte n'est pas impliqué dans sa formation. B est aussi faux car il y a 5 groupes de fibres, mais C est l'affirmation la plus incorrecte."
      },
      {
        questionText: "Parmi les propositions suivantes, lesquelles sont des fonctions du desmodonte liées à son rôle d'amortisseur ?",
        options: [
          "Proprioception dentaire.",
          "Soutien de la dent.",
          "Réflexe de mastication.",
          "Amortissement de la mastication."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La proprioception, le soutien de la dent et le réflexe de mastication sont des fonctions sensorielles et mécaniques directement liées au rôle d'amortisseur global du desmodonte."
      },
      {
        questionText: "Comment les fibres de collagène du desmodonte sont-elles organisées pour résister aux forces masticatoires ?",
        options: [
          "Elles sont disposées de manière aléatoire.",
          "Elles sont orientées parallèlement à la surface radiculaire.",
          "Elles sont organisées en faisceaux orientés selon des orientations spécifiques.",
          "Elles sont réparties de manière homogène."
        ],
        correctOptionIndexes: [2],
        explanation: "Les fibres sont groupées en faisceaux (fibres principales) orientés dans des directions précises (horizontales, obliques, etc.) pour résister aux différentes composantes des forces masticatoires."
      },
       {
        questionText: "Le ligament alvéolodentaire se développe :",
        options: [
          "Après la cémentogénèse",
          "À partir du sac folliculaire",
          "À partir du mésenchyme ectomésenchymateuse",
          "Après fragmentation de la gaine de HERTWIG"
        ],
        correctOptionIndexes: [1],
        explanation: "Le ligament alvéolodentaire (ou desmodonte) se développe à partir des cellules du sac folliculaire qui entoure la dent en développement."
      },
      {
        questionText: "Les fibres de collagène alvéolo-dentaires du desmodonte sont classées en :",
        options: [
          "Fibres circulaires",
          "Fibres alvéolaires",
          "Fibres obliques",
          "Fibres cémento-dentaires"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les faisceaux de fibres du desmodonte sont généralement nommés par leur insertion, comme alvéolo-dentaires (fibres insérées dans l'os alvéolaire), et par leur orientation, comme les fibres obliques qui sont les plus abondantes."
      },
      {
        questionText: "Le desmodonte joue un grand rôle car :",
        options: [
          "Il contient des récepteurs sensoriels",
          "Elle contient des cellules",
          "Elle est sensitive et motrice",
          "Assure la nutrition des dents"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le desmodonte est riche en terminaisons nerveuses (mécanorécepteurs) qui agissent comme des récepteurs sensoriels (proprioception). Il est donc richement innervé (sensitive) et joue un rôle dans le contrôle réflexe de la mastication (motrice)."
      },
      {
        questionText: "Le desmodonte se caractérise par :",
        options: [
          "Un turn over à la fois plus rapide que celui du conjonctif gingival",
          "Possède des fibres vasculaires, assure la nutrition du cément",
          "Possède six types de fibres collagènes dont des fibres obliques",
          "Sa largeur qui augmente avec l'âge (V/F)"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le desmodonte est très vascularisé et son rôle est d'assurer la nutrition des tissus voisins comme le cément et l'os alvéolaire. Il existe plusieurs groupes de fibres (horizontales, obliques, apicales, etc.)."
      },
      {
        questionText: "Les fibres inter-radiculaires :",
        options: [
          "Ont une direction horizontal",
          "Se situent au niveau de la jonction entre le desmodonte et le cément radiculaire",
          "Se situent uniquement au niveau de l'espace inter-radiculaire des dents pluriradiculaires",
          "Se terminent dans les zones inter-radiculaires du cément et l'os alvéolaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les fibres inter-radiculaires sont un groupe de fibres du desmodonte, orientées horizontalement (a), insérées dans le cément et l'os alvéolaire (b, d) des dents pluriradiculées (c)."
      },
      {
        questionText: "Le Desmodonte",
        options: [
          "Est une structure épithéliale molle",
          "Est un tissu conjonctif spécialisé",
          "Fait la jonction entre l'os alvéolaire et le cément radiculaire par les fibres de Sharron",
          "Fait la jonction entre la gencive et l'os alvéolaire par les fibres de Sharpy"
        ],
        correctOptionIndexes: [1],
        explanation: "Le desmodonte (ou ligament paro-y2dontal) est un tissu conjonctif fibreux spécialisé qui entoure la racine dentaire et relie le cément à l'os alvéolaire."
      },
      {
        questionText: "La fonction mécanique du desmodonte :",
        options: [
          "Est le véritable milieu intérieur.",
          "N'est pas caractérisé par un débit sanguin peu abondant.",
          "Assure l'amortissement des forces occlusales",
          "Possède une vascularisation qui joue un rôle important dans l'amortissement des forces exercées sur la dent"
        ],
        correctOptionIndexes: [2],
        explanation: "La fonction principale du desmodonte est de supporter la dent et de distribuer/amortir les forces occlusales pour protéger l'os alvéolaire et la dent elle-même."
      },
       {
        questionText: "Au moment de l'éruption de la dent :",
        options: [
          "Le desmodonte prend une densité plus importante que celle de l'émail et de la dentine.",
          "Sa densité diminue plus importante que celle de l'émail et de la dentine.",
          "Le tissu conjonctif sous-jacent devient le desmodonte.",
          "Sa structure supérieure à celle de l'émail."
        ],
        correctOptionIndexes: [3],
        explanation: "Bien que formulée de manière étrange, l'option D semble faire référence au fait que la partie supérieure de l'organe de l'émail (épithélium adamantain réduit) finit par former l'attache épithéliale qui est supérieure (plus coronaire) au cément et au desmodonte."
      },
      {
        questionText: "Le Desmodonte:",
        options: [
          "Se caractérise par une apposition progressive tout au long de l'éruption active de la dent.",
          "Assure la protection des structures profondes.",
          "Est situé au 2/3 cervicaux de la surface radiculaire.",
          "Possède un renouvellement cellulaire fréquent."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "En amortissant les forces occlusales, le desmodonte assure indirectement la protection de l'os alvéolaire (B). Il est le tissu de soutien qui entoure toute la racine, y compris les 2/3 cervicaux (C)."
      },
      {
        questionText: "L'innervation du desmodonte :",
        options: [
          "Est assurée par le système nerveux central.",
          "Envoie au système nerveux central toute information sur les positions et les mouvements des dents et rend compte des forces exercées sur les dents.",
          "Est assurée par des terminaisons de capteurs de pression et de tissus minéralisés qui le bordent.",
          "Fournit aux cellules des chemokines et des neuropeptides qui les stimulent."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'innervation est assurée par des branches du nerf trijumeau, dont l'origine est le SNC (A). Le desmodonte est riche en mécanorécepteurs qui fournissent des informations proprioceptives au SNC (B)."
      },
      {
        questionText: "Les fibres du desmodonte sont :",
        options: [
          "Sont les éléments libres, les moins nombreux du desmodonte.",
          "Sont organisées en groupes et en faisceaux qui se contractent lorsqu'une traction est exercée sur la dent.",
          "Sont orientées de façon à s'opposer à l'enfoncement, à l'extrusion et même à la rotation de la dent.",
          "De consistance 2/3 de cément et 1/3 de fibres."
        ],
        correctOptionIndexes: [2],
        explanation: "Les fibres du desmodonte sont disposées en groupes (alvéolo-dentaires, obliques, etc.) dont l'orientation est primordiale pour résister aux forces occlusales dans toutes les directions."
      },
       {
        questionText: "Le sac folliculaire (périradiculaire) :",
        options: [
          "Est formé au moment de la formation de la racine et de l'éruption de la dent.",
          "Contient les cellules à présence d'améloblastes.",
          "Contient des fibres élastiques qui comblent l'espace entre les fibres extrinsèques.",
          "Contient les fibres soudées sur l'émail et sur la jonction finale cément."
        ],
        correctOptionIndexes: [2],
        explanation: "Le sac folliculaire (ou follicule dentaire) est le précurseur du desmodonte. Il contient des fibres de collagène (l'option C est probablement une erreur et devrait mentionner collagène)."
      },
      {
        questionText: "Le desmodonte :",
        options: [
          "A une épaisseur d'environ 0.5 mm.",
          "Sa largeur est plus importante au niveau de la partie moyenne.",
          "Est le seul tissu capable d'assurer les mouvements dentaires fonctionnels.",
          "Radiologiquement, le desmodonte est un espace radio-opaque.",
          "Est un tissu conjonctif dense."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le desmodonte a une épaisseur moyenne d'environ 0.25 à 0.5 mm. Radiologiquement, il est un espace radio-clair (transparent), donc l'option D est fausse mais retenue par le corrigé."
      },
      {
        questionText: "Les fibres principales du desmodonte :",
        options: [
          "Sont de nature exclusivement collagénique.",
          "Leur partie osseuse est appelée fibres de Sharpey.",
          "La partie oblique de ces fibres est tendue du cément jusqu'à l'os en direction apicale.",
          "Le groupe inter-radiculaire est observé seulement dans les dents multi-radiculées.",
          "Sont surtout obliques."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les extrémités des fibres desmodontales insérées dans l'os ou le cément sont nommées fibres de Sharpey (B). Les fibres obliques, les plus nombreuses, s'étendent du cément vers l'os en direction apicale (C)."
      },
      {
        questionText: "Le desmodonte assure :",
        options: [
          "Le soutien des tissus gingivaux dans les zones inter-proximales par les fibres obliques.",
          "L'apport des nutriments et de l'oxygène conduisant à la reconstruction des tissus détruits.",
          "L'amortissement des forces occlusales importantes grâce au frein hydrodynamique (Weck).",
          "L'ajustement permanent et continu de la position des dents aux changements et les positions.",
          "L'amortissement de toutes les forces occlusales."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le desmodonte possède une fonction nutritive (B) et est essentiel à la régénération tissulaire. Sa fonction d'amortissement est assurée principalement par le mécanisme hydrodynamique des fluides interstitiels (C)."
      },
      {
        questionText: "Le ligament paro-y2dontal :",
        options: [
          "Est un tissu conjonctif fibreux spécialisé.",
          "Est bien vascularisé et innervé.",
          "Dérive de la couche moyenne du sac folliculaire.",
          "Sert à l'attache de la dent à l'os alvéolaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le ligament paro-y2dontal est, par définition, un tissu conjonctif fibreux spécialisé (A), richement vascularisé et innervé (B), et il dérive de la couche moyenne du sac folliculaire (C)."
      },
      {
        questionText: "Le desmodonte :",
        options: [
          "A une épaisseur d'environ 0,5 mm.",
          "Sa largeur est plus importante au niveau de la partie moyenne.",
          "Est un espace radio-opaque et discontinue.",
          "Radiologiquement, le desmodonte est un espace radio-opaque."
        ],
        correctOptionIndexes: [2],
        explanation: "Le desmodonte est un espace radio-CLAIR (radio-transparent). L'option C est donc biologiquement incorrecte, mais retenue par le corrigé fourni."
      },
      {
        questionText: "Les fibres principales du desmodonte :",
        options: [
          "Sont de nature exclusivement collagénique.",
          "Leur partie radiculaire est faite de fibres de Sharpey.",
          "La partie oblique de ces fibres est tendu du cément jusqu'à l'os en direction apicale.",
          "Le groupe interradiculaire est observé seulement dans les dents multi-radiculées."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les fibres principales sont principalement de nature collagénique (A). Le groupe de fibres interradiculaires (D) ne peut exister que sur les dents ayant plusieurs racines. L'option C est incorrecte car les fibres obliques vont du cément à l'os dans une direction coronaire."
      }
    ]
  },
  {
    title: "Le Cément",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le cément est un tissu :",
        options: [
          "Qui se dépose sans interruption.",
          "Qui n'est pas innervé.",
          "Qui subit une vascularisation.",
          "Qui subit une apposition."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le cément est un tissu avasculaire et non innervé. Il se forme par apposition intermittente tout au long de la vie."
      },
      {
        questionText: "Parmi les caractéristiques du cément cellulaire :",
        options: [
          "Situation au niveau du tiers radiculaire cervical.",
          "Présence de Cémentoblastes.",
          "Il se forme après l'éruption des dents.",
          "Épaisseur importante."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le cément cellulaire (secondaire) se trouve principalement dans la moitié apicale de la racine, contient des cémentocytes (formés par les cémentoblastes), se forme après l'éruption et est plus épais que le cément acellulaire."
      },
      {
        questionText: "Le cément a pour rôle :",
        options: [
          "La réparation des lésions radiculaires.",
          "L'attachement de la dent à son alvéole.",
          "L'attachement des fibres du desmodonte.",
          "L'attachement au niveau du collet."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le cément a un rôle de réparation, d'attachement de la dent à l'os via les fibres du desmodonte, et sert d'attache au niveau du collet pour les fibres gingivales et l'attache épithéliale."
      },
      {
        questionText: "Le cément primaire :",
        options: [
          "Se forme avant l'éruption de la dent",
          "Situé au 2/3 cervicaux de la surface radiculaire",
          "Est très mince, homogène et sans lame et sans fibres intrinsèques dites de sharpey.",
          "Se forme avant l'éruption de la dent."
        ],
        correctOptionIndexes: [3],
        explanation: "Le cément primaire (ou acellulaire) se forme avant l'éruption de la dent. Il est essentiel pour l'ancrage initial des fibres desmodontales."
      },
      {
        questionText: "Le cément secondaire :",
        options: [
          "Est le cément qui se forme après l'éruption de la dent.",
          "Est le cément qui se forme avant l'éruption de la dent.",
          "S'accumule à l'usure des points de contact interdentaires.",
          "Est très mince, homogène et sans fibres intrinsèques dites de Sharpey."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le cément secondaire (ou cellulaire) se forme après l'éruption de la dent et continue de se former tout au long de la vie, notamment pour compenser l'usure."
      },
      {
        questionText: "Parmi les propriétés physiques du cément :",
        options: [
          "Son élasticité est faible.",
          "Sa densité diminue plus importante que celle de l'émail et de la dentine.",
          "Sa porosité augmente en allant de la jonction cémento-dentinaire à la surface.",
          "Sa translucidité supérieure à celle de l'émail."
        ],
        correctOptionIndexes: [2],
        explanation: "La porosité du cément augmente à mesure qu'il s'éloigne de la dentine, cette porosité étant plus marquée dans le cément cellulaire."
      },
      {
        questionText: "Le cément :",
        options: [
          "Est un tissu vivant et non minéralisé qui subit un remaniement.",
          "Est un tissu vivant ce contenant remaniement et remodelage.",
          "Contient les fibres de Sharpy.",
          "Se caractérise par une apposition progressive tout au long de l'éruption active de la dent."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le cément est un tissu minéralisé mais considéré comme vivant car il peut subir un remodelage. Il incorpore les fibres de Sharpey pour assurer l'ancrage de la dent."
      },
      {
        questionText: "Le cément :",
        options: [
          "Est un tissu conjonctif fibreux spécialisé.",
          "Est peu minéralisé.",
          "Dérive de la couche moyenne du sac folliculaire.",
          "Sert au maintien des rapports dento-osseux.",
          "A un rôle de protection de la dentine."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le cément est un tissu minéralisé d'origine conjonctive fibreuse (A) qui se forme à partir du sac folliculaire (C). Il est considéré comme peu minéralisé (B) comparativement à l'émail et la dentine."
      },
      {
        questionText: "Le cément acellulaire :",
        options: [
          "Se trouve principalement sur le tiers apical de la dent.",
          "Représente le revêtement sur le tiers cervical de la dent.",
          "Est un cément de réparation.",
          "Les cémentocytes se trouvent dans la partie la plus importante de sa structure.",
          "Son épaisseur est entre 150 à 200 microns."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cément acellulaire (primaire) est le premier à se former. Il est caractérisé par l'absence de cellules et se retrouve principalement au niveau du tiers cervical de la racine."
      },
      {
        questionText: "Le cément cellulaire :",
        options: [
          "Apparaît après fragmentation de la gaine de Hertwig.",
          "Débute avec la minéralisation des fibres de collagène.",
          "Apparaît avant fragmentation de la gaine de Hertwig.",
          "Est un cément fibreux.",
          "Est un cément de réparation."
        ],
        correctOptionIndexes: [4],
        explanation: "Le cément cellulaire (secondaire) est souvent désigné comme un cément de réparation (E) car il se dépose de manière adaptative pour répondre aux forces occlusales ou réparer des lésions radiculaires."
      },
      {
        questionText: "Le cément de réparation :",
        options: [
          "Est un cément fibreux et cellulaire.",
          "Se forme après un traumatisme occlusal.",
          "Se dépose en taches isolées.",
          "N'a aucun rôle fonctionnel."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le cément de réparation est histologiquement fibreux et cellulaire (A). Il se caractérise par une déposition irrégulière, pouvant être en taches isolées (C)."
      },
      {
        questionText: "La jonction cément-dentine :",
        options: [
          "Est une zone hyper-minéralisée.",
          "Apparaît comme une ligne mince histologiquement.",
          "Est bien visible radiographiquement.",
          "Est une zone très minéralisée."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La jonction cément-dentine (JCD) est une zone de transition qui, bien qu'histologiquement très fine (B), est très minéralisée (D), ce qui la rend visible radiographiquement (C)."
      },
      {
        questionText: "Le cément acellulaire :",
        options: [
          "Est présent uniquement sur le tiers apical de la dent.",
          "Un cément de réparation.",
          "Ses fibres extrinsèques constituent la partie la plus importante de sa satructure.",
          "Son épaisseur est entre 150B 200 microns."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cément acellulaire (primaire) est présent sur les deux tiers coronaires de la racine. Il est caractérisé par le fait que la grande majorité de sa matrice est composée des fibres de Sharpey extrinsèques (C)."
      },
      {
        questionText: "Le cément cellulaire :",
        options: [
          "Après fragmentation de la gaine de Hertwig.",
          "Débute après l'éruption dentaire.",
          "Débute avec la minéralisation des fibres de collagène.",
          "Avant fragmentation de la gaine de Hertwig."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le cément cellulaire (secondaire) apparaît après la fragmentation de la gaine de Hertwig (A). Sa formation débute avec la minéralisation des fibres de collagène (C)."
      },
      {
        questionText: "Le cément intermédiaire :",
        options: [
          "Est un cément fibreux et cellulaire.",
          "A une structure plus ou moins cellulaire.",
          "Se dépose en taches isolées.",
          "Est un cément de réparation."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le cément intermédiaire est considéré comme une forme de cément fibreux et cellulaire (A), souvent associé à la réparation (D)."
      },
      {
        questionText: "La jonction cément-dentaire :",
        options: [
          "Est toujours une ligne minéralisée.",
          "Apparaît comme une ligne mince histologiquement.",
          "Est très radio-claire radiographique.",
          "Est une zone très minéralisée."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Histologiquement, elle apparaît comme une ligne mince (B). C'est une zone très minéralisée (D) et peut être visible radiographiquement (C)."
      }
    ]
  },
  {
    title: "L'Os Alvéolaire",
    subject: "paro-y2",
    questions: [
      {
        questionText: "L'os alvéolaire est :",
        options: [
          "Un prolongement de l'os basal.",
          "Séparé de la dent par l'os de la conservation.",
          "Le site de fixation des fibres ligamentaires.",
          "Le principal tissu de soutien de l'organe dentaire."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'os alvéolaire est un prolongement de l'os basal, sert de site d'insertion aux fibres ligamentaires (fibres de Sharpey) et constitue le support principal de la dent."
      },
      {
        questionText: "Les septas interdentaires :",
        options: [
          "Séparent les racines d'une même dent.",
          "Séparent deux alvéoles contiguës.",
          "Sont toujours de forme compacte.",
          "Sont situés entre les racines de deux dents adjacentes."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le septum interdentaire (ou interalvéolaire) est la cloison osseuse qui sépare les alvéoles de deux dents adjacentes."
      },
      {
        questionText: "La paro-y2i alvéolaire est :",
        options: [
          "Une mince couche de tissu osseux spongieux.",
          "Constituée d'une mince couche de tissu osseux fasciculé.",
          "Caractérisée par une grande opacité sur les clichés radiographiques (lamina dura).",
          "Recouverte de cément acellulaire."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La paro-y2i alvéolaire est une mince couche d'os compact (fasciculé) qui apparaît comme une ligne radio-opaque appelée lamina dura sur les radiographies. Elle est séparée du cément par le desmodonte."
      },
      {
        questionText: "Le sac alvéolaire est constitué :",
        options: [
          "D'os alvéolaire.",
          "D'os spongieux.",
          "D'os cortical.",
          "D'os fibrillaire.",
          "Des septa inter alvéolaires et inter radiculaires."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le sac alvéolaire est l'os qui entoure la racine. Il est formé d'os alvéolaire propre (fibrillaire, D) et d'os spongieux (B). Le terme générique 'os alvéolaire' (A) les englobe."
      },
      {
        questionText: "Les septa inter radiculaires :",
        options: [
          "Ont une forme conicale.",
          "Leur hauteur s'estompe ou se réduit au niveau des molaires.",
          "Ont une forme pyramidale.",
          "Sont parcourus par les vaisseaux et les nerfs.",
          "Sont recouverts de gencive."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les septa interradiculaires sont les cloisons osseuses entre les racines des dents pluriradiculées. Ils ont une forme conique, leur hauteur est réduite au niveau des molaires, et ils sont vascularisés et innervés."
      },
      {
        questionText: "L'hypo fonction occlusale entraine :",
        options: [
          "Une résorption de la crête alvéolaire.",
          "Une résorption osseuse.",
          "Un élargissement en hauteur de l'alvéole.",
          "Une atrophie fonctionnelle.",
          "Une résorption de la lamina dura."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le manque de stimulation fonctionnelle entraîne une atrophie (D), qui se manifeste par un élargissement de l'espace desmodontal et de l'alvéole (C)."
      },
      {
        questionText: "L'os alvéolaire d'un sujet sain :",
        options: [
          "Un contour festonné suivant le collet des dents.",
          "Un niveau de minéralisation identique à celui de la dentine.",
          "Bord osseux situé à 2 mm ou 3 mm de la limite émail-cément (JEC).",
          "Lamina dura radio opaque et discontinue.",
          "Os cortical compact dense."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La crête osseuse saine suit la JEC avec un contour festonné (A), se situe à 2-3 mm de celle-ci (C), et la lamina dura est visible comme une ligne radio-opaque sur la radiographie (D)."
      },
      {
        questionText: "L'os alvéolaire est constitué :",
        options: [
          "D'os alvéolaire.",
          "D'os spongieux.",
          "D'os fasciculé.",
          "D'os fibrillaire.",
          "De septas inter-alvéolaires et inter-radiculaires."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le terme 'Os alvéolaire' (A) est le nom générique. Il est structuré en os spongieux (B) et la paro-y2i interne de l'alvéole est l'os fasciculé/fibrillaire (D)."
      },
      {
        questionText: "Les septa inter-radiculaires :",
        options: [
          "Ont une forme conique/ovale.",
          "Sont plus volumineux au niveau des molaires.",
          "Ont une forme pyramidale.",
          "Contiennent le ligament, l'os et des nerfs."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les septa inter-radiculaires ont une forme pyramidale (C) et contiennent le ligament paro-y2dontal, l'os et des structures vasculo-nerveuses (D)."
      },
      {
        questionText: "L'hypo fonction occlusale entraine :",
        options: [
          "Une réabsorption de la crête alvéolaire.",
          "Une résorption osseuse.",
          "Une diminution de la hauteur de l'alvéole.",
          "Une atrophie fonctionnelle."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'hypofonction se traduit par une diminution de la densité osseuse, conduisant à une réabsorption de la crête (A) et une diminution de la hauteur de l'alvéole (C)."
      },
      {
        questionText: "L'examen radiologique d'une dent saine :",
        options: [
          "Un contour osseux est adouci suivant le trajet des dents.",
          "La largeur de l'espace desmodontal est homogène.",
          "Bord de l'os alvéolaire (cortical) en continuité de la limite émail-cément.",
          "lamina dura radio opaque et discontinue."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Pour une dent saine, le contour osseux est adouci (A) et le bord de l'os alvéolaire est en continuité avec la JEC (C). La largeur du desmodonte est aussi homogène et la lamina dura visible."
      },
      {
        questionText: "La lésion osseuse irréversible implique :",
        options: [
          "Les récepteurs.",
          "Les ostéoblastes.",
          "Les chromosomes bactériens.",
          "Les ostéocytes."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La destruction osseuse (paro-y2dontite) est un processus complexe régulé par des récepteurs (comme RANKL) et impliquant les ostéocytes, qui jouent un rôle dans la signalisation osseuse."
      }
    ]
  },
  {
    title: "ATM : Étude Statique",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Par définition l'articulation temporo-mandibulaire est :",
        options: [
          "Une articulation qui fixe la mandibule à la fosse glénoïde.",
          "Une articulation sans mouvement.",
          "Une articulation paire et asymétrique.",
          "Une articulation située en avant du conduit auditif externe."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'ATM est située en avant de l'orifice du conduit auditif externe (D). Elle est mobile, paire et symétrique. L'option B est fausse mais incluse dans le corrigé."
      },
      {
        questionText: "Parmi les ligaments intra-articulaires de l'ATM, nous avons :",
        options: [
          "Le ligament stylo-mandibulaire.",
          "Le ligament ptérygo-mandibulaire.",
          "Le ligament latéral externe.",
          "Le ligament sphéno-mandibulaire."
        ],
        correctOptionIndexes: [2],
        explanation: "Le ligament latéral externe (ou temporo-mandibulaire) est un ligament capsulaire (donc intra-articulaire). Les autres sont des ligaments extra-articulaires."
      },
      {
        questionText: "La capsule articulaire :",
        options: [
          "Est un cordon mince et fibreux de faisceaux de fibres buccolinguale.",
          "Est un cordon mince et fibreux de faisceaux de fibres supracoronales.",
          "Contient les terminaisons sensitives.",
          "Elle délimite les mouvements de la mâchoire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La capsule articulaire est une structure fibreuse (A) qui est richement innervée par des terminaisons sensitives pour la proprioception (C)."
      },
      {
        questionText: "La position d'intercuspidation maximale :",
        options: [
          "Est la position de contact entre les surfaces occlusales ou incisives des dents antagonistes.",
          "Est la position de repos.",
          "Est la position de contact entre les dents maxillaire et les dents des mandibule.",
          "Est la position de contact entre les surfaces occlusales des dents antagonistes."
        ],
        correctOptionIndexes: [0],
        explanation: "La Position d'Intercuspidation Maximale (PIM) est la position où il y a le nombre maximal de contacts entre les surfaces occlusales des dents des deux arcades."
      }
    ]
  },
  {
    title: "Fluide Gingival",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le fluide gingival devient fluide oral quand il se mêle à :",
        options: [
          "La salive non stimulée.",
          "À la phase liquide de l'exsudat gingival.",
          "À la phase liquide émanant d'une gingivite.",
          "À la phase liquide du milieu buccal."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le fluide gingival sort du sulcus et se mélange avec la salive (A) pour faire partie du fluide oral global, qui est la phase liquide du milieu buccal (D)."
      },
      {
        questionText: "Le liquide sulcal créviculaire est un véritable marqueur de la progression de la maladie paro-y2dontale, il est utilisé pour diagnostiquer :",
        options: [
          "La paro-y2dontite.",
          "Les paro-y2dontites et les caries paro-y2dontopathogènes.",
          "L'évolution des maladies paro-y2dontales.",
          "Il permet l'activation des macrophages."
        ],
        correctOptionIndexes: [1],
        explanation: "Le fluide contient des médiateurs inflammatoires (cytokines, enzymes, etc.) qui permettent de suivre l'activité et l'évolution des paro-y2dontites."
      },
      {
        questionText: "Le fluide gingival est :",
        options: [
          "Un liquide sulculaire provisoire",
          "Un transsudat constamment",
          "Il se retrouve en abondance mélangé à la salive",
          "De couleur claire et limpide"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le fluide créviculaire (ou fluide sulculaire) a un volume variable (provisoire). À l'état de santé, c'est un transsudat de nature séreuse, ce qui le rend clair et limpide."
      },
      {
        questionText: "Le fluide gingival résulte :",
        options: [
          "D'une transsudation seule",
          "D'une exsudation seule",
          "D'une exsudation ou d'une transsudation",
          "D'une simple sueur muqueuse"
        ],
        correctOptionIndexes: [2],
        explanation: "Il est un transsudat à l'état de santé (passage passif de plasma) et devient un exsudat en cas d'inflammation (gingivite/paro-y2dontite)."
      },
      {
        questionText: "Le prélèvement du fluide gingival se fait à l'aide de :",
        options: [
          "Un cône de Gutta percha",
          "Une curette paro-y2dontale",
          "Un cône en papier absorbant",
          "Une sonde paro-y2dontale"
        ],
        correctOptionIndexes: [2],
        explanation: "La méthode standard pour la collecte du fluide gingival utilise des cônes ou des bandelettes de papier absorbant insérés délicatement dans le sillon gingival."
      },
      {
        questionText: "La quantité de fluide gingival :",
        options: [
          "Diminue avec la mastication",
          "Diminue lors de la mastication",
          "Augmente en présence d'une lésion gingivale",
          "Augmente avec la mastication d'aliments mous"
        ],
        correctOptionIndexes: [2],
        explanation: "La quantité de fluide gingival est un marqueur d'inflammation. Elle augmente significativement lorsque le tissu conjonctif est enflammé."
      },
      {
        questionText: "Le fluide gingival :",
        options: [
          "Est un écoulement constant et permanent du sillon gingivo-dentaire.",
          "Dénommé également fluide créviculaire.",
          "Dénommé également transsudat.",
          "Est d'origine sérique."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le fluide gingival (appelé aussi fluide créviculaire) est un liquide de faible débit. Il est considéré comme un transsudat (à l'état sain) et est d'origine sérique (plasma sanguin)."
      },
      {
        questionText: "La technique de prélèvement du fluide gingival avec papier filtre repose sur :",
        options: [
          "La lecture du prélèvement dans des tubes capillaires.",
          "L'enregistrement du volume par l'intermédiaire d'une lecture électronique.",
          "La lecture de la différence de poids avant et après prélèvement.",
          "La lecture de la différence de la courbe d'une jauge graduée."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La quantification du fluide gingival recueilli sur papier filtre peut se faire par différentes techniques, notamment la lecture de la migration sur une jauge graduée (D) ou par capillarité dans des tubes (A)."
      }
    ]
  },
  {
    title: "La Salive",
    subject: "paro-y2",
    questions: [
      {
        questionText: "La paro-y2tide :",
        options: [
          "Produit une salive riche en enzyme via son canal excréteur de Wharton.",
          "Est la deuxième plus grande glande salivaire après la sublinguale.",
          "Constitue presque exclusivement de cellules séreuses.",
          "Présente une viscosité salivaire élevée (supérieure à 6 centipoises)."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La paro-y2tide est une glande séreuse pure (C) produisant une salive aqueuse riche en amylase. Son canal est celui de Sténon (l'option A est donc fausse mais retenue dans un corrigé)."
      },
      {
        questionText: "Les différentes propriétés physiques de la salive sont :",
        options: [
          "Viscosité plus importante pour la glande sublinguale.",
          "Un pH salivaire variant entre 6.5 à 10.",
          "Un volume de salive variant de 0.5L à 1.5L par jour.",
          "Un pH buccal maintenu grâce au pouvoir tampon."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La salive sublinguale est plus muqueuse donc plus visqueuse (A). Le débit quotidien est de 0.5 à 1.5L (C). Les systèmes tampons maintiennent le pH (D). La plage de pH normale est de 6.7 à 7.4, rendant B faux."
      },
      {
        questionText: "Parmi les fonctions principales de la salive on retrouve :",
        options: [
          "Lubrification buccale.",
          "Maintien de l'accumulation des glucides grâce aux lipases.",
          "Maintien du pH buccal entre 6.5 à 7.5.",
          "Reminéralisation des tissus dentaires grâce aux ions calcium et phosphate."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La salive a une fonction de lubrification (A) et de reminéralisation (D). Elle contient de l'amylase pour les glucides, pas de lipase."
      },
      {
        questionText: "Parmi les facteurs influençant la sécrétion salivaire :",
        options: [
          "Diminution chez les personnes âgées.",
          "Sexe : augmentée chez les femmes.",
          "Le rythme circadien influence proportionnellement à la sécrétion salivaire.",
          "L'alcool, qui augmente le flux salivaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La sécrétion salivaire diminue avec l'âge (souvent à cause des médicaments) et suit un rythme circadien (minimale la nuit, maximale en journée)."
      },
      {
        questionText: "La salive est un liquide visqueux selon :",
        options: [
          "Le taux en mucine",
          "L'âge",
          "Sa provenance",
          "Le temps de la journée"
        ],
        correctOptionIndexes: [0],
        explanation: "La mucine (glycoprotéine) est le composant qui détermine directement la viscosité (caractère filant) de la salive."
      },
      {
        questionText: "La salive est élaborée par des glandes salivaires :",
        options: [
          "Exocrines et endocrines",
          "Exocrines et accessoires",
          "Principales et accessoires",
          "Principales et accessoires paro-y2tide"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les glandes salivaires sont exocrines (sécrétion par un canal) et sont classées en principales (dont la paro-y2tide) et accessoires."
      },
      {
        questionText: "La formation de la salive est régulée par :",
        options: [
          "Le système nerveux végétatif",
          "Un système hormonal",
          "Des éléments de transit en formation",
          "Elle se fait en une seule phase continue"
        ],
        correctOptionIndexes: [0],
        explanation: "La sécrétion salivaire est principalement régulée par le système nerveux végétatif (autonome), notamment par le parasympathique."
      },
      {
        questionText: "Les propriétés de la salive sont :",
        options: [
          "Le pH tampon",
          "L'osmolarité",
          "Le pouvoir tampon",
          "L'hydratation"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'osmolarité de la salive (hypotonique par rapport au plasma) est une propriété physique essentielle. L'hydratation (ou mouillage) des muqueuses est une fonction mécanique et protectrice."
      },
      {
        questionText: "La salive présente :",
        options: [
          "Une fonction digestive",
          "Une fonction gustative",
          "Une fonction protectrice",
          "Une fonction de cicatrisation et de réparation"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La salive a un rôle multifonctionnel : digestive (via l'amylase), gustative (dissolution des substances), protectrice (tampon, lubrification, facteurs antimicrobiens) et de cicatrisation (facteurs de croissance)."
      },
      {
        questionText: "Les glandes salivaires :",
        options: [
          "Sont composées de capsules conjonctives, vascularisées et innervées.",
          "Leurs cellules sécrétrices sont assemblées en agglomérats qui sécrètent la salive dans leur cavité.",
          "Des canaux qui l'entourent, permettraient de faciliter l'expulsion de la salive.",
          "Sont au nombre de huit, quatre de chaque côté de la bouche."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "C'est la description histologique des glandes salivaires : enveloppées par du tissu conjonctif (A), contenant des acini (B), et la salive s'écoule par des canaux (C). Il y a six glandes salivaires majeures (3 paires)."
      }
    ]
  },
  {
    title: "Le Biofilm",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le biofilm dentaire :",
        options: [
          "Est un dépôt de bactéries, mou et amorphe, qui s'accumule sur les faces des dents et le long du collet gingival.",
          "Est une association de bactéries d'une même ou de plusieurs espèces.",
          "Est une matrice de polymères extracellulaires (PAE).",
          "Est considéré mature après accumulation d'environ 10 couches bactériennes."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Ce sont les trois éléments clés de la définition du biofilm (plaque dentaire) : dépôt mou et amorphe (A), association pluri-spécifique (B) dans une matrice de polymères extracellulaires (C)."
      },
      {
        questionText: "La plaque dentaire :",
        options: [
          "Existe uniquement sous forme supra-gingivale et sous-gingivale.",
          "La plaque supra-gingivale contient exclusivement des germes anaérobies.",
          "La plaque sous-gingivale présente une moins grande densité que la plaque supra-gingivale.",
          "Présente une discontinuité entre la plaque supra et sous-gingivale."
        ],
        correctOptionIndexes: [0],
        explanation: "La plaque est classée en deux localisations principales : supra-gingivale (sur la couronne) et sous-gingivale (dans le sulcus). C'est un continuum, et la plaque supra-gingivale est initialement aérobie."
      },
      {
        questionText: "La pellicule acquise exogène :",
        options: [
          "Est un film protéique d'origine salivaire riche en cellules de défense.",
          "Apparaît en quelques minutes après un brossage.",
          "Représente la première étape de la formation du biofilm.",
          "Est composée exclusivement des bactéries qui adhèrent à cette PAE d'une manière réversible uniquement."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La pellicule acquise se reforme très rapidement après nettoyage (B) et sert de substrat pour l'adhésion bactérienne (C). Elle est acellulaire."
      },
      {
        questionText: "Parmi les éléments favorisant la rétention de la plaque bactérienne, on retrouve :",
        options: [
          "Les malpositions et les anomalies morphologiques dentaires.",
          "Restaurations dentaires à l'amalgame.",
          "Les obturations dentaires et la prothèse dentaire.",
          "Les poches gingivales et paro-y2dontales."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les malpositions (dents chevauchées, surfaces irrégulières) sont des zones de rétention difficiles à nettoyer (A). Les poches paro-y2dontales sont des niches anaérobies idéales pour la rétention (D)."
      },
       {
        questionText: "En plus des bactéries dans le biofilm on retrouve des virus et des protozoaires :",
        options: ["Vrai", "Faux"],
        correctOptionIndexes: [0],
        explanation: "Le biofilm dentaire est une communauté microbienne très diverse. Il contient, en plus des bactéries dominantes, des archées, des virus, des champignons et des protozoaires."
      },
      {
        questionText: "Les ions libres qui existe dans le biofilm sous les formes suivantes :",
        options: [
          "Fluor",
          "Fer complexable",
          "Fluor fortement lié",
          "Fer faiblement complexable"
        ],
        correctOptionIndexes: [2],
        explanation: "Dans le biofilm, le fluor est rapidement incorporé et est principalement présent sous forme de composés stables ou fortement liés (comme le fluorure de calcium) et non sous forme d'ions libres."
      },
      {
        questionText: "La contamination de la cuticule acquise :",
        options: [
          "Est le point de départ de la destruction paro-y2dontale",
          "Elle se dépose d'abord sur la surface gingivale",
          "Elle se forme quelques minutes après le brossage",
          "Elle est facilitée par la colonisation des premières bactéries"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La pellicule acquise (cuticule) sert de base à la colonisation bactérienne (D), ce qui est la première étape du développement de la plaque et de la maladie paro-y2dontale (A)."
      },
      {
        questionText: "Le biofilm est mature :",
        options: [
          "Lorsqu'après les spirochètes les Actinomyces s'installent",
          "Lorsque après des Actinomyces et des streptocoques les spirochètes et fusobactérium se fixent",
          "Lors de la plaque dentaire",
          "Lors d'une sécrétion aqueuse claire secrétée"
        ],
        correctOptionIndexes: [1],
        explanation: "La maturation du biofilm implique une succession écologique. Les bactéries précoces (Streptocoques, Actinomyces) sont suivies par les bactéries plus pathogènes et anaérobies (spirochètes, fusobactéries)."
      },
      {
        questionText: "Le biofilm bactérien est défini comme :",
        options: [
          "Un biofilm microbien.",
          "Un environnement aqueux qui adhère à la dent.",
          "Une communauté de microorganismes et de bactéries.",
          "Un dépôt calcifié plus ou moins coloré."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le biofilm bactérien est une communauté microbienne complexe et organisée (A), qui adhère à la surface des dents dans un environnement aqueux (B)."
      },
      {
        questionText: "Les composantes du biofilm bactérien comprend :",
        options: [
          "L'excrétion de protéines.",
          "L'excrétion d'enzymes.",
          "La formation d'une matrice extra cellulaire.",
          "La formation d'une pellicule acquise."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le biofilm se construit sur la pellicule acquise (D) qui adhère initialement à la dent. Ensuite, les bactéries produisent une matrice extracellulaire (C) qui les cimente."
      },
      {
        questionText: "La pellicule acquise exogène se définit comme étant :",
        options: [
          "Des molécules de carbone.",
          "Un film organique.",
          "Un film minéralisé.",
          "Un film mou et translucide."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La pellicule acquise est un film organique (B), non minéralisé, qui se forme après le nettoyage. Elle est très mince, molle et translucide (D)."
      }
    ]
  },
  {
    title: "ATM: Étude Dynamique",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Le mouvement de rotation fait intervenir :",
        options: [
          "Le compartiment condylo-discal.",
          "Le glissement du condyle mandibulaire en avant.",
          "La contraction des muscles abaisseurs sous hyoïdien.",
          "Le compartiment supérieur."
        ],
        correctOptionIndexes: [0],
        explanation: "Le mouvement de rotation (première phase d'ouverture) se produit dans le compartiment inférieur de l'ATM (entre le condyle et le disque), appelé condylo-discal."
      },
      {
        questionText: "La diduction consiste en :",
        options: [
          "Une rotation de la mandibule.",
          "Un déplacement de la mandibule vers le côté pivotant.",
          "Une contraction du muscle le temporal.",
          "Une formation d'un angle appelé l'angle de Bennett."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La diduction est le mouvement de déplacement latéral de la mandibule (B). Le côté vers lequel la mandibule se déplace est le côté pivotant. L'angle de Bennett est l'angle formé par le condyle balancier (non travaillant) pendant ce mouvement (D)."
      }
    ]
  },
  {
    title: "Collagène",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Les constituants organiques du cément sont :",
        options: [
          "Hydroxyproline.",
          "Glycine.",
          "Collagène.",
          "Alanine."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le constituant organique principal du cément est le collagène (C), une protéine riche en acides aminés comme la glycine (B) et l'alanine (D)."
      },
      {
        questionText: "Le collagène est une protéine basique car elle contient :",
        options: [
          "Des groupements carboxyles.",
          "Des chaînes polypeptidiques.",
          "Une proportion importante d'acides aminés avec glycine et alanine.",
          "Des ponts disulfures."
        ],
        correctOptionIndexes: [0],
        explanation: "La nature amphotère (acide et basique) des protéines vient de la présence des groupes carboxyles (COOH) et amines (NH2). La présence des groupes carboxyles contribue au caractère acide/basique général."
      },
      {
        questionText: "Le collagène est une protéine hydrophile car elle contient :",
        options: [
          "De la proline et l'hydroxylysine.",
          "Une proportion faible de chaînes latérales lipophiles.",
          "Des groupements carboxyles.",
          "Des ponts hydrogène."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'hydroxylysine et l'hydroxyproline (A) sont très hydrophiles. Pour être hydrophile, la protéine doit avoir peu de régions lipophiles (B). La structure en triple hélice est stabilisée par des liaisons hydrogène (D)."
      },
      {
        questionText: "L'étape extracellulaire de la formation et la maturation du collagène comporte :",
        options: [
          "Le clivage de la chaîne pro α.",
          "La synthèse polypeptidique.",
          "La formation de la triple hélice.",
          "La sécrétion."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Note: Ce corrigé est trompeur. La synthèse (B) et la formation de la triple hélice (C) sont intracellulaires. La sécrétion (D) est la transition vers l'extérieur et le clivage (A) est extracellulaire."
      },
      {
        questionText: "Le tropocollagène est :",
        options: [
          "Le monomère du collagène fibreux insoluble.",
          "Constitué d'acides aminés avec prédominance de la glycine.",
          "Constitué de 4 chaînes α.",
          "Une glycoprotéine stabilisée par des liaisons hydrogénées."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le tropocollagène est l'unité de base (monomère) qui s'assemble pour former les fibres de collagène (A). Le collagène est très riche en glycine (B). Il est constitué de trois chaînes α."
      },
       {
        questionText: "Dans la structure chimique du collagène :",
        options: [
          "Le tropocollagène est l'unité moléculaire fondamentale du collagène",
          "Ses ponts de jonctions sont de faible énergie",
          "Constitué de 02 chaines alpha",
          "Constitué de 02 chaines alpha enroulées en double hélice"
        ],
        correctOptionIndexes: [0],
        explanation: "Le tropocollagène (composé de trois chaînes alpha) est l'unité monomérique qui s'assemble pour former les fibrilles de collagène."
      },
      {
        questionText: "Il existe différents types de collagène :",
        options: [
          "Le type I est l'unité moléculaire fondamentale du cartilage",
          "Le type III est retrouvé dans la paro-y2i des vaisseaux sanguins",
          "Le type III est retrouvé dans les lames basales",
          "Le type I se retrouve dans les os longs"
        ],
        correctOptionIndexes: [1],
        explanation: "Le collagène de Type III est typique des tissus conjonctifs lâches et extensibles (réticulaires), et il est effectivement présent en quantité importante dans la paro-y2i des vaisseaux sanguins."
      },
      {
        questionText: "Dans la chaîne alpha :",
        options: [
          "Il existe 02 groupements amides",
          "Chaque 3ème position dans la séquence d'une chaine de collagène est une proline",
          "Chaque 3ème position est une glycine dans la séquence",
          "Il existe 02 groupements amine terminal NH2"
        ],
        correctOptionIndexes: [2],
        explanation: "La séquence typique du collagène est (Glycine-X-Y)n, où la Glycine est obligatoirement en 3ème position pour permettre l'enroulement serré de la triple hélice."
      },
      {
        questionText: "Lors de la biosynthèse du collagène :",
        options: [
          "La biosynthèse de l'unité de collagène mésenchymateuse",
          "L'hydroxylation des acides aminés ne peut se faire sans la présence de vitamine C",
          "Les fibres sont stabilisées par des liaisons intermoléculaires faibles",
          "Les ponts de jonctions attachées aux fibres de collagène diminuent une insolubilité"
        ],
        correctOptionIndexes: [1],
        explanation: "L'hydroxylation de la proline et de la lysine est une étape cruciale de la biosynthèse du collagène et requiert la vitamine C (acide ascorbique) comme cofacteur essentiel."
      },
      {
        questionText: "La formation du collagène :",
        options: [
          "Se fait lors de la phase intracellulaire",
          "L'hydroxylation de la proline et de la lysine",
          "Le procollagène se transforme en tropocollagène après adjonction de ses extrémités globulaires",
          "Chaque molécule est décalée de la molécule adjacente sur 1/4 de sa longueur"
        ],
        correctOptionIndexes: [1],
        explanation: "L'hydroxylation de la proline et de la lysine est une étape enzymatique clé, nécessaire à la maturation et à la stabilité de la chaîne alpha du collagène."
      },
      {
        questionText: "Le collagène est synthétisé dans sa première phase au niveau :",
        options: [
          "Du noyau de la cellule",
          "Du réticulum endoplasmique",
          "De l'appareil de Golgi",
          "De la membrane cytoplasmique"
        ],
        correctOptionIndexes: [1],
        explanation: "La synthèse des chaînes protéiques (pro-collagène) et les premières modifications post-traductionnelles comme l'hydroxylation se déroulent dans le Réticulum Endoplasmique (RE) rugueux."
      },
      {
        questionText: "L'hydroxylation de la proline et de la lysine a besoin :",
        options: [
          "D'oxygène moléculaire",
          "L'oxygène sanguin",
          "L'hydroxylase et la lyase",
          "La concentration en vitamine D"
        ],
        correctOptionIndexes: [0],
        explanation: "Les enzymes prolyl et lysyl hydroxylases nécessitent de l'oxygène moléculaire (O2), du Fer (Fe2+), de l'alpha-cétoglutarate et de la vitamine C comme cofacteurs pour réaliser l'hydroxylation."
      },
      {
        questionText: "Lesquelles fibres peuvent phagocyter :",
        options: [
          "Le collagène natif",
          "Le collagène fibrillé",
          "Le tropocollagène",
          "Le tropocollagène fibrillé"
        ],
        correctOptionIndexes: [2],
        explanation: "La phagocytose par le fibroblaste se fait sur les précurseurs ou les produits de dégradation du collagène, notamment la molécule de tropocollagène (forme monomère soluble) après son clivage initial par les collagénases."
      },
      {
        questionText: "La destruction enzymatique pathologique du collagène se fait par :",
        options: [
          "Des collagénases",
          "Des protéases",
          "L'absence de pro collagénase",
          "Des métalloprotéases"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les collagénases (A) sont les enzymes spécifiques capables de cliver la triple hélice de collagène. Elles appartiennent à la grande famille des métalloprotéases matricielles (MMPs) (D)."
      },
      {
        questionText: "La procollagène :",
        options: [
          "Est synthétisé au cours de la biosynthèse du collagène.",
          "Est une molécule extra-cellulaire.",
          "Est formée d'une seule chaine alpha.",
          "Est formée de 3 chaines alpha."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le procollagène est la molécule précurseur du collagène. Il est formé de trois chaînes alpha (D). Il est synthétisé à l'intérieur de la cellule (le fibroblaste) puis sécrété à l'extérieur, devenant une molécule extra-cellulaire (B)."
      },
      {
        questionText: "Dans une chaîne alpha du collagène :",
        options: [
          "L'acide aminé le plus abondant est la glycine.",
          "La glycine est l'acide aminé le plus présent.",
          "Il contient de la proline et des acides aminés hydroxylés.",
          "Constitué par la répétition de 3 acides aminés."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La chaîne alpha du collagène a une séquence répétitive unique (Gly-X-Y)n. La Glycine (B) est l'acide aminé le plus abondant (environ un tiers). La séquence est caractérisée par la répétition d'un motif de 3 acides aminés (D)."
      },
      {
        questionText: "Le collagène acide :",
        options: [
          "Représente la chaîne alpha du collagène.",
          "Est conservé à l'état de l'évolution.",
          "Représente l'unité structurale du collagène.",
          "Contient du tryptophane."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le collagène est la protéine la plus abondante du corps, et sa structure de base est très conservée au cours de l'évolution (B). Le collagène est l'unité structurale (C) de nombreuses matrices. Il est caractérisé par l'absence de tryptophane."
      }
    ]
  },
  {
    title: "Microbiologie buccale - Écosystème Buccal",
    subject: "paro-y2",
    questions: [
      {
        questionText: "Quels sont les premiers micro-organismes à coloniser la cavité buccale après la naissance ?",
        options: [
          "Streptococcus salivaires et Actinomyces.",
          "Streptococcus salivaires et Spirochètes.",
          "Streptococcus salivaires et Lactobacilles.",
          "Streptococcus salivaires et Lactobacilles et Spirochètes."
        ],
        correctOptionIndexes: [0],
        explanation: "Les Streptococcus salivaires colonisent les surfaces muqueuses (premiers colonisateurs) avant l'éruption dentaire. Les Actinomyces arrivent également très tôt."
      },
      {
        questionText: "Quels types de bactéries augmentent avec l'éruption des dents ?",
        options: [
          "Anaérobies.",
          "Spirochètes uniquement.",
          "Streptocoques et Lactobacilles.",
          "Spirochètes et Anaérobies."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'éruption crée des surfaces dures (émail) pour les Streptocoques et Lactobacilles (C), et le sillon gingival, un milieu anaérobie favorable aux Spirochètes (B)."
      },
      {
        questionText: "Quel impact l'édentation totale a-t-elle sur la flore buccale ?",
        options: [
          "Elle augmente la quantité de pathogènes paro-y2dontaux.",
          "Elle diminue la quantité de pathogènes paro-y2dontaux.",
          "Elle n'a aucun effet.",
          "Elle conserve uniquement les streptocoques."
        ],
        correctOptionIndexes: [1],
        explanation: "L'absence de dents et de sulcus (édentation totale) entraîne la perte des niches écologiques profondes nécessaires aux bactéries pathogènes paro-y2dontales, réduisant leur quantité."
      },
      {
        questionText: "Le synergisme correspond à :",
        options: [
          "Une relation où les bactéries isolées ne peuvent pas provoquer une pathologie.",
          "Une compétition entre espèces.",
          "Une relation où une espèce profite sans nuire à l'autre.",
          "Une lutte entre espèces pour les nutriments."
        ],
        correctOptionIndexes: [0],
        explanation: "Le synergisme est une coopération où la présence simultanée de plusieurs espèces est nécessaire pour développer un effet pathogène qui n'aurait pas lieu avec les espèces isolées."
      },
       {
        questionText: "Le milieu buccal occupe et influence la cavité buccale et abrite :",
        options: [
          "Des éléments de structure (conjonctif gingival)",
          "Des éléments propres mais constants (l'air)",
          "Des éléments de la flore buccale sont",
          "Des éléments de transit (salive)"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le milieu buccal est un écosystème complexe qui abrite des éléments de structure comme le conjonctif gingival, des éléments constants comme l'air, et des éléments de transit comme la salive."
      },
      {
        questionText: "Par définition, l'écosystème buccal est :",
        options: [
          "L'ensemble bactérien",
          "C'est l'association de l'ensemble des bactéries et leur milieu physique",
          "L'ensemble des bactéries",
          "Un ensemble Abiotique"
        ],
        correctOptionIndexes: [1],
        explanation: "Un écosystème est défini par l'interaction entre les composantes biotiques (la flore bactérienne) et les composantes abiotiques (le milieu physique : salive, température, pH)."
      },
      {
        questionText: "Les facteurs influents la flore bactérienne sont :",
        options: [
          "L'humidité du milieu",
          "L'adhérence des surfaces physiques",
          "La rhéophase",
          "Les facteurs cémentaux"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'humidité (salive) est cruciale. L'adhérence aux surfaces est le mécanisme de base de la colonisation. La rhéophase (flux constant de fluides) influence la rétention et la distribution des bactéries."
      },
      {
        questionText: "Parmi les bactéries du nouveau-né ident :",
        options: [
          "Streptococcus oralis",
          "Actinomyces viscosus",
          "Streptococcus mitis",
          "Streptococcus salivarius"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Ces espèces bactériennes, principalement les Streptocoques, font partie des premières à coloniser la bouche du nouveau-né, avant même l'éruption dentaire."
      },
      {
        questionText: "Le microbiote :",
        options: [
          "Communauté microbienne vivant à l'état normal ou pathologique dans la cavité buccale",
          "Éléments physiques et biochimiques de l'écosystème buccal",
          "Est variable d'un individu à un autre",
          "Est variable d'un organe à un autre"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le microbiote est la collection de micro-organismes (A) vivant dans un environnement. Il est unique pour chaque individu (C) et sa composition varie selon le site (D)."
      },
      {
        questionText: "Le microbiote rapporté :",
        options: [
          "S'organise au sein de niches écologiques",
          "Est en état de prévention contre des dérèglements instables avec l'hôte",
          "A pour rôle de protéger les dents, les gencives et les muqueuses",
          "Est en état d'équilibre avec l'hôte"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La colonisation microbienne se fait dans des niches écologiques (A). Le microbiote sain joue un rôle de protection (C) et est en état d'équilibre (homéostasie) avec l'hôte (D)."
      },
      {
        questionText: "La flore pathogène :",
        options: [
          "Se caractérise par un développement brutal des conditions",
          "Est favorisée par des désordres environnementaux",
          "Corrélée aux facteurs génétiques.",
          "Des facteurs génétiques peuvent influencer son apparition"
        ],
        correctOptionIndexes: [2],
        explanation: "La progression vers la maladie (dysbiose) est fortement corrélée à la réponse immunitaire et génétique de l'hôte aux bactéries."
      },
      {
        questionText: "Le commensalisme :",
        options: [
          "Relation symbiotique",
          "Relation dont deux populations tirent profit",
          "Relation dont une population tire profit, alors que l'autre n'en subit aucun préjudice et s'en retire aucun bénéfice",
          "Relation dont un organisme tire profit au détriment d'un autre"
        ],
        correctOptionIndexes: [2],
        explanation: "Le commensalisme est défini par une relation où un organisme est avantagé (profite) tandis que l'autre (l'hôte) n'est ni affecté ni avantagé."
      },
      {
        questionText: "Le mutualisme :",
        options: [
          "Relation dont un organisme tire profit au détriment d’un autre.",
          "Association de deux populations qui tirent profit, sans que l’acte n’en subit aucun préjudice et n'en tire aucun bénéfice.",
          "Relation où les deux populations tirent profit.",
          "Un dépôt calcifié plus ou moins coloré."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le mutualisme (C) est une relation où les deux organismes tirent un bénéfice mutuel. L'option B décrit le commensalisme mais est incluse dans ce corrigé."
      }
    ]
  }
];
module.exports = paroQuizzes;
