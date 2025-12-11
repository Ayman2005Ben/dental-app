const paroQuizzes = [
  {
    "title": "La gencive",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La Gencive marginale :",
        "options": [
          "A. C'est la partie la plus coronaire de la gencive située entre deux dents adjacentes.",
          "B. S'étend du sillon marginal jusqu'à la gencive attachée.",
          "C. Présente une hauteur qui varie entre 1 à 9 mm.",
          "D. Est séparée de la surface dentaire par le sulcus gingival."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La gencive marginale est séparée de la dent par le sulcus gingival (sillon gingivo-dentaire). L'option A décrit la papille interdentaire. L'option B est fausse car elle s'étend du bord marginal. Sa hauteur normale (C) est d'environ 1 à 2 mm."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. Est située apicalement à la gencive marginale.",
          "B. Est située coronairement à la gencive marginale.",
          "C. Est la portion de gencive qui occupe l'embrasure gingivale.",
          "D. Présente une hauteur plus importante au maxillaire qu'à la mandibule."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La gencive attachée est située apicalement (en dessous) de la gencive marginale et sa hauteur est plus importante au maxillaire qu'à la mandibule. L'option C (embrasure) est occupée par la gencive interdentaire."
      },
      {
        "questionText": "La gencive papillaire est :",
        "options": [
          "1- La partie de la gencive libre qui occupe l’espace interdentaire",
          "2- Constituée par deux papilles (vestibulaire et linguale) reliées par le col gingival",
          "3- Forme une collerette festonnée qui sertit le collet des dents",
          "4- Lisse et arrondie en l'absence de contact interdentaire",
          "5- De texture piquetée en peau d'orange"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "La gencive papillaire (1) occupe l'espace interdentaire. Elle est formée de deux papilles reliées par un col (2). En l'absence de contact, elle devient lisse et arrondie (4). La texture piquetée (5) et la collerette festonnée (3) décrivent respectivement la gencive attachée et la gencive marginale dans son ensemble."
      },
      {
        "questionText": "Le chorion gingival :",
        "options": [
          "1- A un rôle de fixation grâce à ses fibres",
          "2- A un rôle de protection grâce à sa kératinisation",
          "3- A un rôle émonctoire",
          "4- A un rôle de défense grâce à ses cellules immunitaires",
          "5- A un rôle nutritif pour l'épithélium"
        ],
        "correctOptionIndexes": [
          0,
          3,
          4
        ],
        "explanation": "Le chorion (tissu conjonctif) assure la fixation, la défense, la nutrition et le rôle sensoriel. La protection par kératinisation et le rôle émonctoire (desquamation) sont des fonctions de l'épithélium."
      },
      {
        "questionText": "Le sillon gingival libre est :",
        "options": [
          "1- Une invagination de la surface gingivale",
          "2- Sépare la gencive marginale de la gencive attachée",
          "3- Est plus prononcé sur la surface linguale",
          "4- Est distant de 0,5 à 2mm du rebord marginal",
          "5- Est toujours présent cliniquement"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "C'est une invagination (1) qui sépare la gencive marginale de la gencive attachée (2), située à 0,5-2mm du bord libre (4). Il est plus prononcé du côté vestibulaire et peut être absent."
      },
      {
        "questionText": "Le parodonte superficiel est un tissu :",
        "options": [
          "1- Epithélial",
          "2- Conjonctif",
          "3- Musculaire",
          "4- Nerveux",
          "5- Epithélio-conjonctif"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le parodonte superficiel, qui correspond à la gencive, est un tissu composite formé d'un épithélium et d'un tissu conjonctif (chorion)."
      },
      {
        "questionText": "Le rebord marginal est :",
        "options": [
          "1- Mince et effilé",
          "2- Epaissi et arrondi",
          "3- Incliné apicalement vers la surface dentaire",
          "4- Incliné coronairement vers la surface dentaire",
          "5- Une légère dépression"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le rebord marginal de la gencive saine est la limite la plus coronaire. Il est mince, effilé et incliné vers la couronne de la dent."
      },
      {
        "questionText": "Le sulcus gingival :",
        "options": [
          "1- Est une petite invagination en forme de V",
          "2- Sa profondeur moyenne est de 2mm",
          "3- Limité par la surface osseuse",
          "4- Limité par le revêtement épithélial externe de la gencive marginale",
          "5- Fermé à sa base par l'attache conjonctive"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le sulcus est l'espace en forme de V entre la dent et la gencive libre. Sa profondeur saine est en moyenne de 0.5 à 2mm. Sa paroi molle est l'épithélium sulculaire (interne) et son fond est l'attache épithéliale."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "1- Située apicalement à la gencive marginale",
          "2- Fermement attachée à la dent et à l'os alvéolaire sous-jacent",
          "3- Séparée de la gencive marginale par la ligne muco-gingivale",
          "4- Présente une consistance molle",
          "5- Présente une texture lisse"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La gencive attachée est localisée sous la gencive marginale, à laquelle elle est fermement fixée ainsi qu'à l'os. Elle est séparée de la gencive marginale par le sillon gingival libre. Sa consistance est ferme et sa texture piquetée."
      },
      {
        "questionText": "La couleur de la gencive varie selon :",
        "options": [
          "1- L'épaisseur de l'épithélium",
          "2- Le degré de kératinisation",
          "3- La pigmentation mélanique",
          "4- La vascularisation du tissu conjonctif",
          "5- L'état d'hydratation"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "La couleur rosée de la gencive saine dépend de plusieurs facteurs : la vascularisation du chorion, l'épaisseur de l'épithélium qui la recouvre, le degré de kératinisation de surface et la présence de pigments mélaniques."
      },
      {
        "questionText": "L'épithélium oral gingival :",
        "options": [
          "1- Recouvre les surfaces vestibulaires et linguales/palatines de la gencive",
          "2- Se termine apicalement par la ligne muco-gingivale",
          "3- Est composé de 3 couches cellulaires",
          "4- Se termine coronairement par le sillon gingival libre",
          "5- C'est un épithélium pavimenteux, stratifié, non kératinisé"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'épithélium oral recouvre les faces externes de la gencive. Sa limite apicale est la ligne muco-gingivale. Il est kératinisé et composé de 4 couches. Sa limite coronaire est le bord libre."
      },
      {
        "questionText": "L'épithélium oral sulculaire :",
        "options": [
          "1- S'étend de l'épithélium de jonction au sommet de la gencive marginale",
          "2- Tapisse la face interne de la gencive marginale",
          "3- Forme la paroi tissulaire molle du sulcus",
          "4- Est kératinisé",
          "5- Est séparé de la dent par un espace virtuel"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'épithélium sulculaire tapisse la face interne de la gencive marginale, formant ainsi la paroi molle du sulcus. Il s'étend de la crête gingivale jusqu'à la partie la plus coronaire de l'attache épithéliale. Il est non kératinisé."
      },
      {
        "questionText": "L'épithélium sulculaire :",
        "options": [
          "1- Constitue la paroi du sillon gingival",
          "2- Est continu avec l'épithélium oral gingival sans démarcation",
          "3- S'étend jusqu'à l'attache conjonctive",
          "4- Est non kératinisé",
          "5- Est en contact direct avec la dent"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Il constitue la paroi molle du sulcus, se continue avec l'épithélium oral au niveau de la crête gingivale, et s'étend jusqu'à l'épithélium de jonction. Il est non kératinisé et n'est pas en contact avec la dent (il borde le sulcus)."
      },
      {
        "questionText": "Le sillon gingivo-dentaire :",
        "options": [
          "A. Est également appelé sillon marginal.",
          "B. Est constitué d'une paroi molle représentée par l'attache épithéliale.",
          "C. Présente une profondeur qui varie entre 3 à 4 mm.",
          "D. Est rattaché à la dent par l'attache épithéliale."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le sillon gingivo-dentaire (sulcus) est rattaché à la dent via l'attache épithéliale. Sa paroi molle est la gencive marginale (B). Sa profondeur normale est de 0.5 à 2 mm (C)."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. C'est une fine bande plate et lisse qui entoure les dents à la façon d'un collier.",
          "B. Est située apicalement à la gencive marginale jusqu'à la ligne mucco-gingivale.",
          "C. Sa hauteur est plus importante à la mandibule qu'au maxillaire.",
          "D. Ne présente aucune caractéristique anatomique qui la démarque de la muqueuse palatine."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Elle se situe apicalement à la gencive marginale jusqu'à la ligne muco-gingivale. Du côté palatin, elle se continue avec la muqueuse palatine sans démarcation nette (D). L'option A décrit la gencive marginale. Sa hauteur est plus grande au maxillaire (C)."
      },
      {
        "questionText": "Le chorion gingival a pour rôle :",
        "options": [
          "A. La fixation, grâce aux différents groupes de fibres et leur orientation.",
          "B. la protection, grâce à la kératinisation de sa couche superficielle.",
          "C. La défense, grâce à la présence de leucocytes et de lymphocytes.",
          "D. Le turn over."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Le chorion assure la fixation (A), la défense (C) et le turnover (D). La kératinisation (B) concerne l'épithélium, pas le chorion."
      },
      {
        "questionText": "La gencive a un rôle de protection qui se fait grâce à :",
        "options": [
          "A. L'organisation des cellules en strates.",
          "B. La cohésion des cellules entres elles par leurs jonctions inter cellulaires.",
          "C. La kératinisation de la couche basale.",
          "D. La présence de terminaisons nerveuses."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La protection est assurée par l'organisation en strates et la cohésion des cellules grâce aux jonctions intercellulaires. La kératinisation se fait en surface (pas la couche basale). Les terminaisons nerveuses (D) sont pour le rôle sensoriel."
      },
      {
        "questionText": "La couleur de la gencive est liée à :",
        "options": [
          "A. La vascularisation",
          "B. L'épaisseur de l'épithélium gingival",
          "C. La kératinisation et la pigmentation",
          "D. La startification de l'épithélium gingival"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La vascularisation du chorion est le principal facteur de la couleur rosée. L'épaisseur (B), la kératinisation et la pigmentation (C) peuvent influencer cette teinte mais ne sont pas la cause principale."
      },
      {
        "questionText": "La jonction gingivo dentaire :",
        "options": [
          "A. Occupe le sillon gingivo-dentaire",
          "B. Occupe l'espace biologique",
          "C. Est composée exclusivement de fibres conjonctives",
          "D. Correspond à l'attache épithéliale"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La jonction gingivo-dentaire correspond à l'attache épithéliale et fait partie de l'espace biologique (qui inclut aussi l'attache conjonctive). Elle n'occupe pas le sillon (A)."
      },
      {
        "questionText": "La gencive attachée est séparée de la muqueuse alvéolaire par:",
        "options": [
          "A. Le sillon gingival libre",
          "B. Le rebord gingival",
          "C. Le sillon marginal",
          "D. La ligne muco-gingivale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La ligne muco-gingivale est la limite anatomique claire entre la gencive attachée (kératinisée et fixe) et la muqueuse alvéolaire (non kératinisée et mobile)."
      },
      {
        "questionText": "Le sulcus gingival :",
        "options": [
          "A. Est une dépression qui sépare la gencive marginale de la dent",
          "B. Son fond est l'attache conjonctive",
          "C. Est mesuré à l'aide d'une sonde parodontale graduée",
          "D. Mesure de 1.5 à 2.4 mm"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le sulcus est la dépression entre la gencive marginale et la dent, et sa profondeur est mesurée avec une sonde parodontale. Son fond est l'attache épithéliale. Sa profondeur saine est de 0.5 à 2 mm."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. Est située apicalement à la gencive marginale",
          "B. Est située apicalement à la ligne muco-gingivale",
          "C. Présente une texture piquetée dite en peau d'orange.",
          "D. Présente une hauteur plus importante à la mandibule qu'au maxillaire"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La gencive attachée est située apicalement (en dessous) de la gencive marginale et présente une consistance ferme et une texture piquetée (en peau d'orange). Sa hauteur est plus importante au maxillaire."
      },
      {
        "questionText": "Une gencive saine se caractérise par :",
        "options": [
          "A. Une couleur rouge framboisée",
          "B. Un contour régulier",
          "C. Une consistance molle",
          "D. Une texture piquetée en peau d'orange"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Une gencive saine se caractérise par : une couleur rose corail, un contour régulier, une consistance ferme et une texture piquetée en peau d'orange."
      },
      {
        "questionText": "Quels est le rôle de l'épithélium dans la physiologie de la gencive:",
        "options": [
          "A. Rôle de protection",
          "B. Rôle de fixation",
          "C. Rôle d'homéostasie",
          "D. Rôle sensoriel"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les rôles de l'épithélium sont la protection, la régénération rapide et l'homéostasie. La fixation et le rôle sensoriel appartiennent au chorion."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. Est située coronairement à la gencive marginale",
          "B. Séparée de la muqueuse alvéolaire par la ligne mucco-gingivale",
          "C. Fermement attachée à la dent et à l'os alvéolaire sous-jacent",
          "D. Sa hauteur est plus importante à la mandilude qu'au maxillaire"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La gencive attachée est située apicalement à la gencive marginale et est séparée de la muqueuse alvéolaire par la ligne mucco-gingivale. Elle est fermement attachée à l'os. Sa hauteur est plus importante au maxillaire."
      },
      {
        "questionText": "La gencive inter dentaire :",
        "options": [
          "A. Est appelée aussi papillaire",
          "B. Elle se situe apicalement à la geneive attachée",
          "C. La papille gingivale a one forme arpendie antérièurement",
          "D. Le col gingival relie la papille vestibulaire et linguale"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La gencive interdentaire (papillaire) occupe l'embrasure gingivale. Au niveau prémolo-molaire, le col gingival relie les papilles vestibulaire et linguale. Sa forme est pyramidale antérieurement."
      },
      {
        "questionText": "La gencive :",
        "options": [
          "A. C'est la partie de la muqueuse buccale qui entoure les dents dans leur partie apicale",
          "B. Est divisée en gencive libre et gencive attachés",
          "C. Est séparée de la surface dentaire par un espace virtuel dit sillon marginal",
          "D. La gencive marginale s'étend coronairement à partir du bord libre gingival"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La gencive est anatomiquement divisée en gencive libre (marginale) et gencive attachée."
      },
      {
        "questionText": "La gencive papillaire est:",
        "options": [
          "A. La gencive libre interdentaire.",
          "B. Est piquetée en peau d'orange.",
          "C. Occupe l'embrasure interdentaire.",
          "D. Entoure les dents à la façon d'un collier."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La gencive papillaire est la partie interdentaire de la gencive libre et occupe l'embrasure gingivale. L'aspect piqueté (B) concerne la gencive attachée. L'option D décrit la gencive marginale."
      },
      {
        "questionText": "La gencive assure les rôles suivants :",
        "options": [
          "A. Absorbe le choc des forces excessives.",
          "B. Assure la protection des structures profondes.",
          "C. Assure l'élimination des déchets.",
          "D. Assure le renouvellement des tissus profonds."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La gencive assure la protection des structures parodontales profondes et joue un rôle émonctoire (élimination des déchets) par la desquamation de ses cellules."
      },
      {
        "questionText": "La gencive marginale est:",
        "options": [
          "A. En forme d'un collier",
          "B. Comprise entre le bord libre et la ligne muco-gingivale",
          "C. Se trouve dans l'espace inter dentaire",
          "D. D'aspect piqueté"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La gencive marginale entoure la zone cervicale des dents à la façon d'un collier. Elle s'étend du rebord marginal au sillon gingival libre (pas la ligne muco-gingivale). L'aspect piqueté (D) est celui de la gencive attachée."
      },
      {
        "questionText": "Le sillon gingival libre est:",
        "options": [
          "A. En forme d'un collier",
          "B. Compris entre le bord libre et la gencive attachée",
          "C. Sillon interposé entre la gencive marginale et la surface dentaire.",
          "D. Sertit le collet des dents"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le sillon gingival libre est une légère dépression linéaire sur la surface de la gencive, séparant la gencive marginale (bord libre) de la gencive attachée."
      },
      {
        "questionText": "La muqueuse masticatrice représente :",
        "options": [
          "A. La face interne des lèvres",
          "B. Le palais mou",
          "C. La gencive",
          "D. Le plancher buccal"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La muqueuse masticatoire recouvre les zones soumises aux forces de mastication, principalement la gencive et le palais dur."
      },
      {
        "questionText": "Le rôle émonctoire de la gencive c'est :",
        "options": [
          "A. La fixation,",
          "B. Le renouvellement permanent des cellules épithéliales,",
          "C. Le Turn Over,",
          "D. L'élimination des déchets par desquamation."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le rôle émonctoire (d'élimination) de la gencive est assuré par le renouvellement constant (Turn Over) des cellules épithéliales, qui mène à leur desquamation."
      },
      {
        "questionText": "La muqueuse masticatoire comprend :",
        "options": [
          "A. La face interne des lèvres,",
          "B. Le palais mou,",
          "C. La gencive,",
          "D. Le plancher buccal."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La muqueuse masticatoire inclut la gencive et la muqueuse du palais dur."
      },
      {
        "questionText": "La gencive marginale est:",
        "options": [
          "A. En forme d'un collier.",
          "B. Comprise entre le bord libre et la ligne muco-gingivale,",
          "C. Se trouve dans l'espace interdentaire.",
          "D. D'aspect piqueté"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La gencive marginale entoure la dent à la façon d'un collier. L'aspect piqueté (D) correspond à la gencive attachée."
      },
      {
        "questionText": "Le parodonte superficiel est un tissu :",
        "options": [
          "1- Epithélial",
          "2- Conjonctif",
          "3- Musculaire",
          "4- Nerveux",
          "5- Epithélio-conjonctif"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le parodonte superficiel (la gencive) est un tissu épithélio-conjonctif."
      },
      {
        "questionText": "Le rebord marginal est :",
        "options": [
          "1- Mince et effilé",
          "2- Epaissi et arrondi",
          "3- Incliné coronairement vers la surface dentaire",
          "4- Incliné apicalement vers la surface dentaire",
          "5- Une légère dépression"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le rebord marginal (bord libre) de la gencive saine est mince et effilé, et incliné coronairement vers la dent."
      },
      {
        "questionText": "Le sulcus gingival :",
        "options": [
          "1- Est une petite invagination en forme de V",
          "2- Sa profondeur moyenne est de 2mm",
          "3- Limité par la surface osseuse",
          "4- Limité par le revêtement épithélial externe de la gencive marginale",
          "5- Fermé à sa base par l'attache conjonctive"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le sulcus est une invagination en V, d'une profondeur moyenne de 2mm. Il est limité par la dent, l'épithélium interne (pas externe), et fermé par l'attache épithéliale (pas conjonctive)."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "1- Située apicalement à la gencive marginale",
          "2- Fermement attachée à la dent et à l'os alvéolaire sous-jacent",
          "3- Séparée de la gencive marginale par la ligne muco-gingivale",
          "4- Présente une consistance molle",
          "5- Présente une texture lisse"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La gencive attachée est située apicalement à la gencive marginale et est fermement attachée à l'os. Elle a une consistance ferme et une texture piquetée."
      },
      {
        "questionText": "La couleur de la gencive varie selon :",
        "options": [
          "1- L'épaisseur de l'épithélium",
          "2- Le degré de kératinisation",
          "3- La pigmentation mélanique",
          "4- La vascularisation du tissu conjonctif",
          "5- L'état d'hydratation"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La couleur de la gencive est influencée par l'épaisseur de l'épithélium, la pigmentation (mélanine) et la vascularisation."
      },
      {
        "questionText": "L'épithélium oral gingival :",
        "options": [
          "1- Recouvre les surfaces vestibulaires et linguales/palatines de la gencive",
          "2- Se termine apicalement par la ligne muco-gingivale",
          "3- Est composé de 3 couches cellulaires",
          "4- Se termine coronairement par le sillon gingival libre",
          "5- C'est un épithélium pavimenteux, stratifié, non kératinisé"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Il recouvre les surfaces externes de la gencive et s'étend apicalement jusqu'à la ligne muco-gingivale. Il est kératinisé et composé de 4 couches."
      },
      {
        "questionText": "L'épithélium oral sulculaire :",
        "options": [
          "1- S'étend de l'épithélium de jonction au sommet de la gencive marginale",
          "2- Tapisse la face interne de la gencive marginale",
          "3- Forme la paroi tissulaire molle du sulcus",
          "4- Est kératinisé",
          "5- Est séparé de la dent par un espace virtuel"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Il s'étend depuis l'épithélium de jonction jusqu'au sommet de la gencive marginale, formant la paroi molle du sulcus. Il est non kératinisé."
      },
      {
        "questionText": "L'épithélium sulculaire :",
        "options": [
          "1- Constitue la paroi du sillon gingival",
          "2- Est continu avec l'épithélium oral gingival sans démarcation",
          "3- S'étend jusqu'à l'attache conjonctive",
          "4- Est non kératinisé",
          "5- Est en contact direct avec la dent"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Il constitue la paroi du sillon gingival, se continue avec l'épithélium oral, et s'étend jusqu'à l'épithélium jonctionnel. Il est non kératinisé."
      }
    ]
  },
  {
    "title": "L'écosystème buccal",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Quels sont les premiers microorganismes à coloniser la cavité buccale après la naissance ? :",
        "options": [
          "A. Streptococcus salivaires et Actinomyces.",
          "B. Streptococcus salivaires et Spirochètes.",
          "C. Streptococcus salivaires et Vibrions.",
          "D. Streptococcus salivaires et Lactobacilles."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Streptococcus salivarius et Actinomyces sont parmi les premiers colonisateurs de la bouche après la naissance. Les spirochètes et lactobacilles apparaissent plus tard."
      },
      {
        "questionText": "Quels types de bactéries augmentent avec l'éruption des dents ?",
        "options": [
          "A. Aérobies.",
          "B. Anaérobies.",
          "C. Streptocoques uniquement.",
          "D. Spirochètes et Fusiformes."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'éruption dentaire crée de nouvelles niches anaérobies (comme le sulcus gingival), favorisant l'augmentation des bactéries anaérobies (B). Les spirochètes et fusiformes (D) apparaissent également avec la maturation de la plaque."
      },
      {
        "questionText": "Quel impact l'édentation totale a -t- elle sur la flore buccale ?",
        "options": [
          "A. Elle augmente la quantité de pathogènes parodontaux.",
          "B. Elle diminue la quantité de pathogènes parodontaux.",
          "C. Elle n'a aucun effet.",
          "D. Elle favorise uniquement les streptocoques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'édentation totale supprime les niches écologiques (sulcus, surface dentaire) nécessaires aux pathogènes parodontaux, entraînant ainsi leur diminution."
      },
      {
        "questionText": "Le synergisme correspond à :",
        "options": [
          "A. Une relation où deux espèces isolées ne peuvent pas provoquer une pathologie.",
          "B. Une compétition entre espèces.",
          "C. Une relation où une espèce profite sans nuire à l'autre.",
          "D. Une lutte entre espèces pour les nutriments."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le synergisme est une relation où deux espèces, non pathogènes individuellement, le deviennent lorsqu'elles sont associées. L'option C décrit le commensalisme."
      },
      {
        "questionText": "Quels sont les premiers microorganismes à coloniser la cavité buccale après la naissance?",
        "options": [
          "A. Streptococcus salivaires et Actinomyces.",
          "B. Streptococcus salivaires et Spirochètes.",
          "C. Streptococcus salivaires et Vibrions.",
          "D. Streptococcus salivaires et Lactobacilles."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les Streptococcus salivarius (prédominants) et les Actinomyces sont parmi les premiers à coloniser la cavité buccale du nouveau-né."
      },
      {
        "questionText": "Quels types de bactéries augmentent avec l'éruption des dents?",
        "options": [
          "A. Aerobies.",
          "B. Anaérobies.",
          "C. Streptocoques uniquement.",
          "D. Spirochètes et Fusiformes."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'éruption des dents crée des niches anaérobies (sulcus), favorisant la multiplication des anaérobies (B). Les spirochètes et fusiformes (D) apparaissent aussi avec la maturation de la plaque et les maladies parodontales."
      },
      {
        "questionText": "Quel impact l'édentation totale a -t-elle sur la flore buccale?",
        "options": [
          "A. Elle augmente la quantité de pathogènes parodontaux.",
          "B. Elle diminue la quantité de pathogènes parodontaux.",
          "C. Elle n'a aucun effet.",
          "D. Elle favorise uniquement les streptocoques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'absence de dents (édentation) élimine les sites de colonisation (sulcus), ce qui diminue la quantité de pathogènes parodontaux."
      },
      {
        "questionText": "Le synergisme correspond à :",
        "options": [
          "A. Une relation où deux espèces isolées ne peuvent pas provoquer une pathologie,",
          "B. Une compétition entre espèces,",
          "C. Une relation où une espèce profite sans nuire à l'autre.",
          "D. Une lutte entre espéces pour les nutriments."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le synergisme décrit une situation où deux espèces, non pathogènes seules, peuvent provoquer une pathologie lorsqu'elles sont ensemble. L'option C est le commensalisme."
      },
      {
        "questionText": "Le milieu buccal occupe et influence la cavité buccale et abrite :",
        "options": [
          "A. Des éléments propres mais provisoires (fluide gingival)",
          "B. Des éléments propres mais constants (l'air)",
          "C. Les gencives, les muqueuses et les dents",
          "D. Des éléments de transit (salive)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le milieu buccal abrite des constituants fixes comme les gencives, les muqueuses et les dents. Il contient aussi des éléments de transit (air, aliments) et des éléments propres mais provisoires ou constants (salive, fluide gingival)."
      },
      {
        "questionText": "Par définition, l'écosystème buccal est :",
        "options": [
          "A. Un complexe bactérien",
          "B. C'est l'interaction entre des bactéries et leur milieu physique",
          "C. Un complexe biotique",
          "D. Un ensemble Abiotique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'écosystème buccal est défini comme l'interaction entre des groupes d'organismes (communauté biotique) et leur milieu physique (milieu abiotique)."
      },
      {
        "questionText": "Les facteurs modifient la flore buccale soul",
        "options": [
          "A. L'humidité du milieu",
          "B. Certains facteurs génétiques",
          "C. La ménopause",
          "D. Facteurs environnementaux"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La flore buccale est modifiée par des facteurs liés à l'hôte, y compris les changements hormonaux (comme la ménopause) et des facteurs génétiques."
      },
      {
        "questionText": "Parmi les bactéries du nouveau-né édenté :",
        "options": [
          "A. Streptocoques sanguins",
          "B. Streptocoques mitis",
          "C. Streptocoques mutans",
          "D. Streptocoques salivarius"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Chez le nouveau-né édenté, la flore est dominée par des espèces ayant une affinité pour les cellules épithéliales, comme Streptococcus mitis et Streptococcus salivarius."
      },
      {
        "questionText": "Les niches écologiques sont:",
        "options": [
          "A. Susceptibles d'abriter des microorganismes :",
          "B. Des zones exposées au bol alimentaire",
          "C. Des populations ou groupe d'individus de la même espèce",
          "D. Les fissures et puits des faces occlusales."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Une niche écologique est une zone susceptible d'abriter des micro-organismes, comme le sillon gingival, le dos de la langue, ou les fissures et puits des faces occlusales."
      },
      {
        "questionText": "Les facteurs modifiant la flore buccale sont:",
        "options": [
          "A. Un processus pathologique tumoral",
          "B. La flore buccale est plus complexe chez l'adulte que chez l'enfant.",
          "C. Les changements hormonaux: adolescence - grossesse -ménopauses",
          "D. L'hypersalivation."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La flore est modifiée par des facteurs pathologiques (A), l'âge (B, plus complexe chez l'adulte) et les changements hormonaux (C)."
      },
      {
        "questionText": "Le microbiote :",
        "options": [
          "A. Correspond au biotope vivant à l'état normal ou pathologique dans la cavité buccale",
          "B. Eléments physiques et biochimiques de l'écosystème buccal",
          "C. Correspond à la biocénose",
          "D. Est variable d'un individu à un autre"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le microbiote (l'ensemble des micro-organismes) constitue la biocénose de l'écosystème. Sa composition varie d'un individu à l'autre."
      },
      {
        "questionText": "La flore saprophyte :",
        "options": [
          "A. S'organise au sein de niches écologiques",
          "B. Ensemble de bactéries qui entretiennent des relations instables avec l'hôte",
          "C. A pour rôle de protéger les dents, les gencives et les muqueuses",
          "D. Correspond à la flore commensale"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "La flore saprophyte, aussi appelée flore commensale, entretient des relations stables avec l'hôte et est compatible avec un bon état de santé (rôle protecteur)."
      },
      {
        "questionText": "La flore pathogène",
        "options": [
          "A. Peut-être causée par un changement brutal des conditions",
          "B. Peut être dû à la disparition de certaines espèces",
          "C. Conduit uniquement à l'apparition de caries dentaires",
          "D. Des facteurs génétiques peuvent influencer son apparition"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Un déséquilibre de la flore (flore pathogène) peut être causé par un changement des conditions, la disparition de certaines espèces, et des facteurs génétiques peuvent y contribuer."
      },
      {
        "questionText": "Le commensalisme :",
        "options": [
          "A. Relation non symbiotique",
          "B. Relation dont deux populations tirent profit",
          "C. Relation dont une population tire profit, alors que l'autre n'en subit aucun préjudice et n'en retire aucun bénéfice",
          "D. Relation dont un organisme tire profit au détriment d'un autre"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le commensalisme ('partage de la même table') est une relation où une espèce tire profit, tandis que l'hôte n'en tire ni bénéfice ni préjudice."
      },
      {
        "questionText": "Le mutualisme",
        "options": [
          "A. Forme de symbiose,",
          "B. Relation dont un organisme tire profit au détriment d'un autre,",
          "C. Relation dont une population tire profit, alors que l'autre n'en subit aucun préjudice et n'en tire aucun bénéfice,",
          "D. Relation dont deux populations tirent profit."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le mutualisme (ou synergisme) est une relation symbiotique où les deux populations tirent un profit mutuel."
      },
      {
        "questionText": "Le microbiote :",
        "options": [
          "A. Correspond à la biocénose,",
          "B. Communauté abiotique de l'écosystème buccal,",
          "C. Variable d'un individu à un autre,",
          "D. Est plus complexe chez l'enfant que chez l'adulte."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le microbiote (la flore) correspond à la biocénose (la communauté biotique). Il est variable d'un individu à l'autre. Il est plus complexe chez l'adulte."
      },
      {
        "questionText": "La flore pathogène :",
        "options": [
          "A. Ensemble de bactéries qui entretiennent des relations stables avec l'hôte,",
          "B. Peut être due la disparition de certaines espèces,",
          "C. Des facteurs génétiques peuvent influencer son apparition,",
          "D. Peut conduire à l'apparition de maladies parodontales."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La flore pathogène résulte d'un déséquilibre (relations instables), pouvant être causé par la disparition d'espèces ou influencé par la génétique, et peut conduire à des maladies parodontales."
      },
      {
        "questionText": "La biocénose :",
        "options": [
          "1- correspond au microbiote",
          "2- Est un ensemble de bactéries qui entretiennent des relations instables avec l'hôte",
          "3- Est un élément physique et biochimique de l’écosystème buccal",
          "4- Est variable d’un individu à un autre",
          "5- Est plus complexe chez l’enfant que l’adulte"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La biocénose correspond au microbiote (l'ensemble des organismes vivants). Elle est variable d'un individu à l'autre. Elle entretient des relations stables à l'état sain et est plus complexe chez l'adulte."
      },
      {
        "questionText": "La biocénose:",
        "options": [
          "A. Ensemble de micro-organismes vivant à l'état normal ou pathologique dans la cavité buccale",
          "B. Eléments physiques et biochimiques de l'écosystème buccal",
          "C. Variable d'un individu à un autre",
          "D. Est plus complexe chez l'adulte que chez l'enfant"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La biocénose (microbiote) est l'ensemble des micro-organismes vivants. Elle est variable d'un individu à l'autre et est plus complexe chez l'adulte que chez l'enfant."
      },
      {
        "questionText": "La flore commensale :",
        "options": [
          "A. Ensemble de bactéries qui entretiennent des relations instables avec l'hôte",
          "B. A pour rôle de protéger les dents, les gencives et les muqueuses",
          "C. S'organise au sein de niches écologiques",
          "D. Peut conduire à l'apparition de maladies parodontales"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La flore commensale (saprophyte) est compatible avec la santé et a un rôle protecteur. Elle s'organise au sein des différentes niches écologiques de la bouche."
      },
      {
        "questionText": "La flore pathogène :",
        "options": [
          "A. Flore compatible avec un bon état de santé bucco-dentaire",
          "B. Peut être due à une modification de la croissance de certaines souches",
          "C. Peut être due à la disparition de certaines espèces",
          "D. Des facteurs génétiques peuvent influencer son apparition"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La flore devient pathogène lors d'un déséquilibre, qui peut être dû à une modification de la croissance de certaines souches, à la disparition d'autres espèces, ou influencé par des facteurs génétiques."
      },
      {
        "questionText": "Le milieu abiotique :",
        "options": [
          "A. Correspond au microbiote",
          "B. Eléments physiques et biochimiques de l'écosystème buccal",
          "C. Correspond au biotope",
          "D. Apporte à la communauté biotique des surfaces d'adhésion, des conditions nutritives nécessaires à sa Survie"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le milieu abiotique (ou biotope) comprend tous les éléments physiques et biochimiques et fournit les conditions (surfaces, nutriments) nécessaires à la survie de la communauté biotique (microbiote)."
      },
      {
        "questionText": "Le commensalisme :",
        "options": [
          "A. Forme de symbiose",
          "B. Relation dont deux populations firent profit",
          "C. Relation symbiotique dont un organisme tire profit au détriment d'un autre",
          "D. Relation dont une population tire profit, alors que l'autre n'en subit aucun préjudice et n'en retire aucun bénéfice"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le commensalisme est une relation où une population tire profit, tandis que l'autre (l'hôte) n'en subit aucun préjudice ni n'en retire de bénéfice."
      }
    ]
  },
  {
    "title": "L'attache épithéliale",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "L'attache épithéliale :",
        "options": [
          "A. Représente l'union entre les cellules conjonctives et la surface dentaire.",
          "B. Se situe à différents niveaux au cours de la vie de la dent.",
          "C. Elle est délimitée coronairement par les fibres les plus superficielles du desmodonte.",
          "D. Elle est délimitée apicalement par le fond du sulcus."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La position de l'attache épithéliale varie avec l'éruption et l'usure de la dent. Elle unit les cellules épithéliales (pas conjonctives) à la dent. Elle est délimitée coronairement par le fond du sulcus et apicalement par les fibres du desmodonte."
      },
      {
        "questionText": "Vers 20 ans, l'attache épithéliale se place sur :",
        "options": [
          "1- L'émail seulement",
          "2- Le cément seulement",
          "3- La jonction émail-cément",
          "4- L'os alvéolaire",
          "5- La dentine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Avec l'éruption passive et l'usure physiologique, l'attache épithéliale migre apicalement. Vers 20 ans, elle se situe typiquement au niveau de la jonction amélo-cémentaire (Stade II de Gottlieb)."
      },
      {
        "questionText": "L'épithélium oral gingival :",
        "options": [
          "1- Est kératinisé",
          "2- Recouvre les surfaces externes de la gencive",
          "3- Est composé de 4 couches",
          "4- A un rôle de protection",
          "5- Est non kératinisé"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'épithélium oral gingival est l'épithélium qui recouvre les surfaces externes (vestibulaire et linguale/palatine) de la gencive. Il est pavimenteux, stratifié et kératinisé."
      },
      {
        "questionText": "L'attache épithéliale :",
        "options": [
          "1- Est un épithélium pavimenteux stratifié kératinisé",
          "2- Unit la surface dentaire au tissu conjonctif gingival",
          "3- Est plus épaisse coronairement qu'apicalement",
          "4- Sépare le milieu intérieur de la cavité buccale",
          "5- A un renouvellement lent"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'attache épithéliale est une structure qui unit la gencive à la dent, formant une barrière qui sépare le milieu interne (parodonte) du milieu externe (cavité buccale). Elle est non kératinisée et a un renouvellement très rapide."
      },
      {
        "questionText": "L'épithélium oral sulculaire :",
        "options": [
          "1- S'étend de l'épithélium de jonction au sommet de la gencive marginale",
          "2- Tapisse la face interne de la gencive marginale",
          "3- Forme la paroi tissulaire molle du sulcus",
          "4- Est kératinisé",
          "5- Est séparé de la dent par un espace virtuel"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'épithélium sulculaire tapisse la face interne de la gencive libre, formant ainsi la paroi molle du sulcus. Il s'étend du sommet de la gencive marginale jusqu'à l'épithélium de jonction. Il est non kératinisé."
      },
      {
        "questionText": "parmi les rôles de l'attache épithéliale, on retrouve :",
        "options": [
          "A. L'homéostasie.",
          "B. Le turn over de ses cellules.",
          "C. Un rôle sensoriel.",
          "D. L'adhésion à la surface dentaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'attache épithéliale assure l'adhésion à la dent, maintient l'homéostasie grâce aux mitoses, et possède un renouvellement (turnover) rapide. Elle n'a pas de rôle sensoriel."
      },
      {
        "questionText": "Le potentiel de défense de l'attache épithéliale est assuré par :",
        "options": [
          "A. La perméabilité de l'attache.",
          "B. La kératinisation de ses cellules.",
          "C. L'adhésivité des différents éléments de l'attache épithéliale.",
          "D. L'homéostasie de l'attache épithéliale."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Son potentiel de défense vient de sa perméabilité (passage de cellules de défense) et de son adhésivité (barrière physique). Elle est non kératinisée."
      },
      {
        "questionText": "L'attache épithéliale :",
        "options": [
          "A. C’est l'union entre les cellules épithéliales et la surface dentaire.",
          "B. C'est une bande annulaire d'épithélium pavimenteux stratifié kératinisé.",
          "C. Elle se situe entre la surface dentaire, le fond du sulcus et les fibres les plus superficielles du desmodonte.",
          "D. Se trouve au niveau du sulcus à la limite entre gencive attachée et muqueuse alvéolaire."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "C'est l'union des cellules épithéliales à la surface dentaire (A), et elle est située anatomiquement entre la surface dentaire, le fond du sulcus et les fibres coronaires du desmodonte (C). Elle est non kératinisée (B)."
      },
      {
        "questionText": "L'epithélium jonctionnel est fixé à la dent par :",
        "options": [
          "A. La lame basale",
          "B. Les desmosomes",
          "C. L'épithélium adamantin réduit",
          "D. La membrane de Nasmyth"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Il est fixé à la dent via la lame basale interne (et les hémidesmosomes). Les desmosomes (B) relient les cellules entre elles."
      },
      {
        "questionText": "L'épithélium jonctionnel :",
        "options": [
          "A. Tapisse le sillon gingival",
          "B. Est perméable",
          "C. Est semi perméable",
          "D. Dérive initialement de l'épithélium adamantin réduit"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'épithélium jonctionnel est perméable (permettant le passage du FGC et des cellules) et dérive de l'épithélium adamantin réduit. L'épithélium du sillon (A) tapisse le sillon gingival."
      },
      {
        "questionText": "Quel type de cellules joue un rôle crucial dans la formation et le maintien de l'attache épithéliale?",
        "options": [
          "A. Fibroblastes",
          "B. Améloblastes",
          "C. Odontoblastes",
          "D. Kératinocytes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'attache épithéliale est une structure épithéliale (donc kératinocytes), mais les fibroblastes du tissu conjonctif sous-jacent sont cruciaux pour son maintien et son induction."
      },
      {
        "questionText": "Parmi ces propositions quelles sont les composantes de l'attache épithéliale?",
        "options": [
          "A. Desmosomes",
          "B. Hémidesmosomes",
          "C. Fibres de collagène",
          "D. Fibres d'élastine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'attache épithéliale est fixée à la dent (via la lame basale interne) par des hémidesmosomes."
      },
      {
        "questionText": "Quel est le principal rôle de l'attache épithéliale dans le parodonte?",
        "options": [
          "A. Protéger les dents contre les caries",
          "B. Permettre la mobilité des dents",
          "C. Fixer les gencives à la surface des dents",
          "D. Faciliter la croissance des os alvéolaires"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le rôle principal de l'attache épithéliale est de fixer la gencive à la surface de la dent, créant ainsi un joint étanche."
      },
      {
        "questionText": "Où se situe principalement l'attache épithéliale ?",
        "options": [
          "A. Entre l'émail et la dentine W",
          "B. Entre le cément radiculaire et le ligament alvécio-dentaire",
          "C. Entre l'épithélium gingival et le cément radiculaire",
          "D. Entre la pulpe dentaire et le périoste"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'attache épithéliale unit l'épithélium gingival (au fond du sulcus) à la surface dentaire (émail ou cément)."
      },
      {
        "questionText": "Le rôle de compensation du cément :",
        "options": [
          "A. Permet la rhizalyse",
          "B. Compense l'usure dentaire dans le seas vertical",
          "C. Permet l'exfoliation des dents temporaires",
          "D. S'opère par dépôt de cément en plus grande quantité dans les x de furcation"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le dépôt continu de cément, notamment au niveau apical et des furcations, compense l'usure occlusale verticale de la dent."
      },
      {
        "questionText": "Quel rôle jour l'attache épithéliale dentaire dans la cavité buccale ?",
        "options": [
          "A. Ancrage de la dent dans l'os alvéolaire",
          "B. Maintien de l'herméticité parodentale",
          "C. Sécrétion de salive",
          "D. Maintien de In jonction entre la gencive ct la dent"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'attache épithéliale maintient la jonction entre la gencive et la dent, assurant ainsi l'herméticité du parodonte."
      },
      {
        "questionText": "Quel type de jonction est principalement présent dans l'attache épithéliale dentaire ?",
        "options": [
          "A. Jonctions serrées",
          "B. Desmosomes",
          "C. Jonctions gap",
          "D. Jonctions adhérentes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les cellules épithéliales sont reliées entre elles par des desmosomes. (L'attache à la dent se fait par hémidesmosomes)."
      },
      {
        "questionText": "La distance de l'attache épithéliale par rapport à la crête alvéolaire reste constante pendant l'éruption passive:",
        "options": [
          "A. Vrai",
          "B. Faux"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La position de l'attache épithéliale migre apicalement lors de l'éruption passive, mais l'espace biologique (distance à la crête) tend à être maintenu par remodelage."
      },
      {
        "questionText": "L'attache épithéliale:",
        "options": [
          "A. Est bordée par deux lames basales:",
          "B. Est un ensemble biologique séparant le milieu interne de la cavité buccale.",
          "C. Est plus épaisse au niveau de la partie apicale:",
          "D. Est un épithélium pavimenteux stratifié kératinisé."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Elle possède une lame basale interne (côté dent) et externe (côté conjonctif), et sépare le milieu interne du milieu buccal. Elle est plus épaisse coronairement et non kératinisée."
      },
      {
        "questionText": "La structure histologique de l'attache épithéliale est formée par :",
        "options": [
          "A. La cuticule dentaire",
          "B. La lame basale interne",
          "C. La lame basale externe",
          "D. Une bordure linéaire."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La structure de l'attache inclut l'épithélium lui-même, la lame basale interne (côté dent) et la lame basale externe (côté conjonctif)."
      },
      {
        "questionText": "Lors de la formation de l'attache épithéliale:",
        "options": [
          "A. La couronne est revêtue par un épithélium adamantin réduit après l'éruption:",
          "B. La couche superficielle de l'",
          "C. Les améloblastes se transforment en cellules malpighiennes au moment de l'éruption;",
          "D. Avant l'éruption la couche profonde de l'"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Avant l'éruption, la couronne est revêtue par l'épithélium adamantin réduit. Au moment de l'éruption, cet épithélium fusionne avec l'épithélium buccal, et les améloblastes se transforment en cellules malpighiennes pour former l'attache épithéliale primaire."
      },
      {
        "questionText": "L'épithélium de jonction",
        "options": [
          "A. Est kératinisé",
          "B. Est situé sous le fond du SGD",
          "C. Est bordé d'une lame basale interne",
          "D. Est bordé d'une lame basale externe."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "L'épithélium de jonction est non kératinisé, situé sous le fond du sulcus, et est bordé par une lame basale interne (côté dent) et externe (côté conjonctif)."
      },
      {
        "questionText": "La Cuticule dentaire",
        "options": [
          "A. C'est une mince couche électro dense, interposée entre la surface de l'émail et les ameloblastes réduits.",
          "B. Elle est secrétée par les améloblastes au moment de leur transformation en cellules granuleuses.",
          "C. Elle contient des protéines dépourvues de glycoprotéines et de polysaccharides: quinines, fibronectine, ténaxine.",
          "D. Son rôle est essentiellement actif"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La cuticule dentaire est une couche électro-dense entre l'émail et l'épithélium adamantin réduit. Elle est sécrétée par les améloblastes lors de leur transformation en cellules squameuses. Son rôle est passif."
      },
      {
        "questionText": "La lame basale externe",
        "options": [
          "A. C'est une structure qui sépare l'épithélium de jonction du tissu conjonctif.",
          "B. C'est une couche de cellules épithéliales",
          "C. Elle n'existe même pas",
          "D. Elle est d'origine adamantine"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La lame basale externe est la structure acellulaire qui sépare l'épithélium de jonction du tissu conjonctif sous-jacent."
      },
      {
        "questionText": "Les hémi-desmosomes qui composent l'attache épithéliale sont:",
        "options": [
          "A. Des jonctions qui relient la lame basale interne et les cellules de l'épithélium sulculaire,",
          "B. Des jonctions qui relient la lame basale interne et les cellules de l'épithélium adamantin réduit,",
          "C. Des prolongements situés sur la face externe des cellules épithéliales,",
          "D. Des excroissances situées sur la face interne des cellules épithéliales appelées \"plaque d'attache\"."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les hémidesmosomes sont des plaques d'attache sur la face interne des cellules épithéliales qui les relient à la lame basale interne. L'épithélium jonctionnel dérive de l'épithélium adamantin réduit."
      },
      {
        "questionText": "Le renouvellement de l'attache épithéliale s'effectue:",
        "options": [
          "A. partir des mitoses des cellules qui se trouvent à proximité de la lame basale externe,",
          "B. Par le glissement le long de l’émail au fur et à mesure que la couronne émerge",
          "C. Par le passage des différents métabolites du tissu conjonctif vers l’espace sulculaire,",
          "D. Par les polynucléaires et l'activité lysosomiale propre aux cellules épithéliales."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le renouvellement rapide (turnover) de l'épithélium jonctionnel se fait par les mitoses des cellules de la couche basale, situées à proximité de la lame basale externe (côté conjonctif)."
      },
      {
        "questionText": "l'attache épithéliale:",
        "options": [
          "A. Est une bande annualire d’épithélium pavimenteux stratifié non kératinisé",
          "B. Est une bande annualire d’épithélium pavimenteux stratifié et kératinisé",
          "C. Sert à unir la surface dentaire au tissu osseux",
          "D. Sert à unir la surface dentaire au ligament alvéolo-dentaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'attache épithéliale est un épithélium pavimenteux stratifié non kératinisé qui unit la gencive à la surface dentaire."
      },
      {
        "questionText": "L'attache épithéliale :",
        "options": [
          "1- Est un épithélium pavimenteux stratifié kératinisé",
          "2- Unit la surface dentaire au tissu conjonctif gingival",
          "3- Est plus épaisse coronairement qu'apicalement",
          "4- Sépare le milieu intérieur de la cavité buccale",
          "5- A un renouvellement lent"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Elle unit la surface dentaire au tissu conjonctif gingival et sépare le milieu interne du milieu externe. Elle est non kératinisée, plus épaisse coronairement, et a un renouvellement rapide."
      },
      {
        "questionText": "Vers 20 ans, l'attache épithéliale se place sur :",
        "options": [
          "1- L'émail seulement",
          "2- Le cément seulement",
          "3- La jonction émail-cément",
          "4- L'os alvéolaire",
          "5- La dentine"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'image de référence montre qu'avec l'éruption passive (Stade II et III), l'attache se situe au niveau de la jonction émail-cément ou entièrement sur le cément. L'option '1 et 2' est probablement une erreur dans la source, mais elle est sélectionnée."
      },
      {
        "questionText": "L'épithélium oral sulculaire :",
        "options": [
          "1- S'étend de l'épithélium de jonction au sommet de la gencive marginale",
          "2- Tapisse la face interne de la gencive marginale",
          "3- Forme la paroi tissulaire molle du sulcus",
          "4- Est kératinisé",
          "5- Est séparé de la dent par un espace virtuel"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Il s'étend de l'épithélium de jonction au sommet de la gencive marginale et forme la paroi molle du sulcus. Il est non kératinisé."
      },
      {
        "questionText": "Histologiquement l'attache épithéliale est constituée par :",
        "options": [
          "A. Une membrane basale externe,",
          "B. Un produit inorganique,",
          "C. Une membrane basale interne,",
          "D. Des hémi-desmosomes."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La structure de l'attache épithéliale comprend les cellules épithéliales, une lame basale externe (côté conjonctif), une lame basale interne (côté dent) et des hémidesmosomes pour l'ancrage."
      }
    ]
  },
  {
    "title": "La salive",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La parotide :",
        "options": [
          "A. Sécrète une salive riche en enzyme via son canal excréteur de Whatton Stenon",
          "B. Est la deuxième plus grande glande salivaire après la sublinguale",
          "C. Constituée presque exclusivement de cellules sécrétrices séreuses",
          "D. Présente une viscosité salivaire élevée (supérieure à &centipoises) AS"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La parotide est la plus grande glande salivaire (B est faux). Elle est presque exclusivement séreuse (C), produisant une salive fluide (D est faux). Son canal est celui de Sténon, pas Wharton (A)."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est dû :",
        "options": [
          "A. Aux carbonates.",
          "B. Aux mucines.",
          "C. Aux lipides.",
          "D. Au phosphore.",
          "E. Aux lipopolysaccharides."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La capacité tampon de la salive, qui lui permet de neutraliser les acides, est principalement assurée par le système bicarbonate/acide carbonique. Le système phosphate joue un rôle secondaire."
      },
      {
        "questionText": "Parmi les éléments organiques de la salive, on trouve",
        "options": [
          "1- Albumines",
          "2- Amylase",
          "3- Bicarbonates",
          "4- Calcium",
          "5- Chlorures"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Les composés organiques de la salive incluent des protéines comme l'albumine (d'origine sérique) et des enzymes comme l'amylase (d'origine glandulaire). Les bicarbonates, calcium et chlorures sont des composants inorganiques."
      },
      {
        "questionText": "Les différentes propriétés physiques de la salive sont :",
        "options": [
          "A. Viscosité plus importante pour la glande sublinguale",
          "B. Un PH salivaire variant entre 8.5 1.10 6,5a7.2",
          "C. Un volume salivaire variant de 0,5L à 1.3 voire 1.5L par jour",
          "D. Un PH buccal maintenu grâce au pouvoir tampon"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La glande sublinguale (muqueuse) produit une salive plus visqueuse (A). Le volume journalier est de 0,5 à 1,5L (C). Le pouvoir tampon maintient le pH stable (D). Le pH normal (B) est de 6,8 à 7,2."
      },
      {
        "questionText": "Parmi les fonctions principales de la salive on retrouve :",
        "options": [
          "A. Lubrification buccale",
          "B. Initiation de la dégradation des glucides grâce aux lipases a",
          "C. Maintien du PH buccal entre 8.5 et 10 6",
          "D. Reminéralisation dentaire grâce aux ions calcium et phosphate"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La salive assure la lubrification et la reminéralisation (grâce au Ca2+ et PO4-). La digestion des glucides (B) se fait par l'amylase. Le pH (C) est autour de 6,8-7,2."
      },
      {
        "questionText": "Parmi les facteurs influençant la sécrétion salivaire :",
        "options": [
          "A. L'âge, avec réduction de la sécrétion chez les personnes âgées",
          "B. Sexe : augmentée chez les femmes",
          "C. Hydratation personnelle qui est proportionnelle la sécrétion salivaire",
          "D. L'alcool, qui augmente le flux salivaire."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La sécrétion diminue avec l'âge (A) et augmente avec une bonne hydratation (C). Elle est souvent plus élevée chez les hommes (B). L'alcool diminue le flux (D)."
      },
      {
        "questionText": "La salive:",
        "options": [
          "A. Peut exercer une influence directe sur la santé parodontale",
          "B. La fonction salivaire peut être perturbée par certaines maladies systémiques et prise de médicaments",
          "C. Contient des protéines tel que les lysozymes, qui confère à la salive sa viscosité",
          "D. Est issue pour 20% à 30% des glandes salivaires accessoires."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La salive influence la santé parodontale (A) et sa fonction peut être perturbée par des maladies ou médicaments (B). La viscosité (C) vient des mucines. Les glandes accessoires (D) produisent 5-8%."
      },
      {
        "questionText": "Le pouvoir tampon de la salive:",
        "options": [
          "A. Exprime la résistance aux variations du pH en un point arbitraire",
          "B. L'effet tampon se réfère à la qualité d'acide nécessaire pour changer un pH d'un échantillon salivaire",
          "C. Permet le maintien d'un pH salivaire équilibré",
          "D. Toute solution qui contient à la fois l'acide faible et ses sels est considérée comme solution tampon."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Le pouvoir tampon est la capacité à résister aux variations de pH, maintenant ainsi un pH stable. Une solution tampon est un mélange d'un acide faible et de sa base conjuguée."
      },
      {
        "questionText": "La salive est un liquide visqueux selon :",
        "options": [
          "A. Les conditions de sa sécrétion",
          "B. Uniquement durant une atteinte pathologique de l'individu",
          "C. Sa provenance",
          "D. Tout le temps"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La viscosité de la salive varie selon sa provenance (ex: parotide fluide, sublinguale visqueuse) et les conditions de sa sécrétion (stimulée ou non)."
      },
      {
        "questionText": "La salive est élaborée par des glandes salivaires :",
        "options": [
          "A. Exocrines et endocrines",
          "B. Mineures et majeures",
          "C. Principales et accessoires",
          "D. Uniquement par la glande parotide"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La salive est produite par trois paires de glandes majeures (principales : parotides, sous-mandibulaires, sublinguales) et par de nombreuses glandes mineures (accessoires). Elles sont exocrines."
      },
      {
        "questionText": "La formation de la salive est régulée par :",
        "options": [
          "A. Un système nerveux autonome",
          "B. Un système hormonal",
          "C. Aucun système ne régit sa formation",
          "D. Elle se fait en une seule phase continue"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La formation de la salive se fait en deux phases (primaire dans l'acinus, secondaire dans le canal) et est régulée par le système nerveux autonome et le système hormonal."
      },
      {
        "questionText": "Les propriétés de la salive sont :",
        "options": [
          "A. Débit salivaire",
          "B. La viscosité",
          "C. Le pouvoir tampon",
          "D. PH salivaire"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Les propriétés de la salive incluent le pH, le débit, le pouvoir tampon, la concentration ionique et la viscosité."
      },
      {
        "questionText": "La salive est une sécrétion aqueuse claire sécrétée :",
        "options": [
          "A. Par toutes les glandes salivaires",
          "B. Située dans la cavité buccale,",
          "C. Destinée à humidifier les muqueuses de la bouche et à commencer la digestion des aliments.",
          "D. S'effectue uniquement par contact avec des aliments"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La salive est une sécrétion aqueuse des glandes salivaires, située dans la cavité buccale, servant à humidifier les muqueuses et initier la digestion."
      },
      {
        "questionText": "La salive est :",
        "options": [
          "A. Très efficace dans la cicatrisation de la muqueuse buccale",
          "B. Capitale pour maintenir une bouche saine et des dents en bonne santé",
          "C. Riche en eau environ 5. %",
          "D. Transmetteur de maladies"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La salive est capitale pour la santé buccale, aide à la cicatrisation et peut transmettre des maladies. Elle est composée à 99% d'eau."
      },
      {
        "questionText": "La salive présente :",
        "options": [
          "A. Une fonction digestive",
          "B. Une fonction gustative",
          "C. Une fonction protectrice",
          "D. Une fonction de cicatrisation et de réparation"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "La salive a de nombreuses fonctions, notamment digestive, gustative, de lubrification, protectrice et de cicatrisation/réparation."
      },
      {
        "questionText": "Les glandes salivaires :",
        "options": [
          "A. Sont enfermées dans des capsules conjonctives, vascularisées et innervées.",
          "B. Leurs cellules sécrétrices sont assemblées en agglomérats qui sécrètent la salive dans leur cavité",
          "C. Les muscles lisses qui entourent, permettraient de faciliter l'expulsion de la salive.",
          "D. Sont au nombre de huit : quatre de chaque côté de la bouche"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Elles sont encapsulées, vascularisées et innervées. Les cellules sont en agglomérats (acinus). Des muscles lisses (myoépithéliales) aident à l'expulsion."
      },
      {
        "questionText": "Les glandes salivaires accessoires sont disseminées dans :",
        "options": [
          "A. Le vermillon des lèvres",
          "B. La muqueuse de la face interne de la joue",
          "C. La muqueuse de la face internet de la lèvre",
          "D. La muqueuse gingivale"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "On trouve des glandes salivaires accessoires dans la muqueuse jugale (joue) et labiale (lèvre), mais pas dans le vermillon des lèvres ni la gencive."
      },
      {
        "questionText": "La salive est :",
        "options": [
          "A. Très efficace dans la cicatrisation de la muqueuse buccale,",
          "B. Capitale pour maintenir une bouche saine,",
          "C. Riche en eau à hauteur de 50 pour cent,",
          "D. Transmetteur de maladie."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La salive aide à la cicatrisation, est capitale pour la santé buccale, et peut transmettre des maladies. Elle est composée à 99% d'eau."
      },
      {
        "questionText": "La salive présente un rôle :",
        "options": [
          "A. Digestif,",
          "B. Gustatif,",
          "C. Masticatoire,",
          "D. De lubrification de la cavité buccale."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Les fonctions de la salive incluent la digestion, le goût (gustatif) et la lubrification."
      },
      {
        "questionText": "Les glandes sub-linguales:",
        "options": [
          "A. Sont situées sous la langue,",
          "B. Sécrètent la salive par de multiples canaux,",
          "C. Les cellules sécrétrices sont séreuses et surtout muqueuses,",
          "D. La salive est déversée au niveau des lèvres."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Elles sont situées sous la langue, ont de multiples canaux, et sont mixtes à prédominance muqueuse."
      },
      {
        "questionText": "Les glandes salivaires :",
        "options": [
          "A. sont enfermées dans des capsules conjonctives, vascularisées et innervées.",
          "B. Leurs cellules sécrétrices sont assemblées en agglomérats qui sécrètent la salive dans leur cavité",
          "C. Les muscles lisses qui entourent, permettraient de facilite: l'expulsion de la salive.",
          "D. sont au nombre de huit quatre de chaque côté de la bouche"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Elles sont encapsulées, vascularisées et innervées. Les cellules forment des acini. Les cellules myoépithéliales (muscles lisses) facilitent l'expulsion."
      },
      {
        "questionText": "La salive présente un rôle :",
        "options": [
          "A. digestif",
          "B. gustatif",
          "C. masticateur",
          "D. de lubrificateur de la bouche"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La salive a des fonctions digestives, gustatives, et de lubrification."
      },
      {
        "questionText": "La salive est :",
        "options": [
          "A. Très efficace dans la cicatrisation de la muqueuse buccale",
          "B. Capitale pour maintenir une bouche saine et des dents en santé,",
          "C. Riche en eau environ 5. %",
          "D. Transmetteur de maladies Le commensalisme"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La salive est efficace pour la cicatrisation et capitale pour la santé buccale. Elle est composée à 99% d'eau et peut transmettre des maladies."
      },
      {
        "questionText": "La salive est une sécrétion aqueuse claire sécrétée :",
        "options": [
          "A. Par les glandes salivaires principales",
          "B. Située dans la cavité buccale,",
          "C. Destinée à humidifier les muqueuses de la bouche et à commencer la digestion des aliments.",
          "D. S'effectue uniquement par contact avec des aliments"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La salive est une sécrétion aqueuse des glandes salivaires (principales et accessoires), située dans la cavité buccale, destinée à humidifier et commencer la digestion."
      },
      {
        "questionText": "les glandes parotides:",
        "options": [
          "A. Sont situées à l'arrière de la bouche sous les oreilles",
          "B. La salive est déversée au niveau de la joue par le canal de Wharton",
          "C. Elles sont constituées presque exclusivement de cellules muqueuses",
          "D. Sécrètent le plus grand volume de salive."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les parotides sont situées sous les oreilles et sécrètent le plus grand volume de salive. Leur canal est le Sténon (pas Wharton). Elles sont presque exclusivement séreuses (pas muqueuses)."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est dû :",
        "options": [
          "A. Aux carbonates.",
          "B. Aux mucines.",
          "C. Aux lipides.",
          "D. Au phosphore.",
          "E. Aux lipopolysaccharides."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le système tampon le plus significatif de la salive est le système carbonates/bicarbonates. Les phosphates jouent un rôle secondaire."
      }
    ]
  },
  {
    "title": "Le desmodonte",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Les vaisseaux sanguins du desmodonte :",
        "options": [
          "A. Sont de moyen calibre.",
          "B. Proviennent de la fibromuqueuse.",
          "C. Proviennent du périoste.",
          "D. Proviennent de la partie apicale."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La vascularisation du desmodonte provient de vaisseaux de moyen calibre, issus du périoste alvéolaire et de la région apicale (via les vaisseaux pulpaires)."
      },
      {
        "questionText": "La largeur du ligament alvéolo-dentaire :",
        "options": [
          "A. Varie en fonction de l'âge,",
          "B. N'est pas influencée par l'âge.",
          "C. Est de 0.18 mm à l'âge de 50 ans",
          "D. Est de 0.15 mm à l'âge de 70 ans"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La largeur du desmodonte varie et diminue avec l'âge. Les valeurs spécifiques données (0.18 mm à 50 ans et 0.15 mm à 70 ans) sont des exemples de cette réduction progressive."
      },
      {
        "questionText": "Le desmodonte est un tissu :",
        "options": [
          "A. Conjonctif fibreux lâche, dense",
          "B. Qui fait partie du parodonte superficiel,",
          "C. Qui fait partie du parodonte profond,",
          "D. Situé entre le cément et l'os alvéolaire."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le desmodonte est un tissu conjonctif fibreux dense spécialisé qui fait partie du parodonte profond (appareil d'attache). Il est localisé dans l'espace entre le cément de la racine et l'os alvéolaire."
      },
      {
        "questionText": "Le rôle sensoriel du desmodomte:",
        "options": [
          "A. Permet une perception des contacts.",
          "B. Permet une perception des mouvements mandibulaires.",
          "C. Permet la proprioception buccale.",
          "D. Permet la coordination des positions mandibulaires."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Le rôle sensoriel du desmodonte est très complet : il détecte les contacts, perçoit les mouvements, participe à la proprioception et aide à la coordination mandibulaire."
      },
      {
        "questionText": "Quel est le rôle des fibres de Sharpey?",
        "options": [
          "A. Assurer la nutrition du desmodonte.",
          "B. Ancrer la dent à l'os alvéolaire.",
          "C. Amortir les forces masticatoires.",
          "D. Protéger la dent contre les bactéries."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les fibres de Sharpey sont les extrémités des fibres du desmodonte qui s'insèrent dans le cément et l'os alvéolaire, ancrant ainsi la dent dans son alvéole."
      },
      {
        "questionText": "Laquelle des propositions suivantes est incorrecte concernant le desmodonte ?",
        "options": [
          "A. Il contient des terminaisons nerveuses responsables de la proprioception dentaire.",
          "B. Il est vascularisé, assurant ainsi la nutrition des cellules.",
          "C. Il est impliqué dans la formation de l'émail dentaire.",
          "D. Il joue un rôle dans la défense immunitaire locale."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le desmodonte n'intervient pas dans la formation de l'émail (C). Il contient des nerfs (A), des vaisseaux (B), et des cellules de défense (D)."
      },
      {
        "questionText": "Parmi les propositions suivantes, lesquelles sont des fonctions du desmodonte liées à son rôle sensoriel?",
        "options": [
          "A. Proprioception dentaire.",
          "B. Perception de la douleur.",
          "C. Réflexe de mastication.",
          "D. Contrôle de la salivation."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le rôle sensoriel inclut la proprioception (A), la nociception (douleur) (B) et l'initiation de réflexes masticatoires (C). Il ne contrôle pas la salivation (D)."
      },
      {
        "questionText": "Comment les fibres de collagène du desmodonte sont-elles organisées pour résister aux forces masticatoires?",
        "options": [
          "A. Elles sont disposées de manière aléatoire.",
          "B. Elles sont orientées parallèlement à la surface radiculaire.",
          "C. Elles sont organisées en faisceaux avec des orientations spécifiques.",
          "D. Elles forment un réseau dense et homogène."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les fibres sont organisées en groupes (faisceaux) avec des orientations spécifiques (obliques, horizontales, etc.) pour résister efficacement aux différentes forces."
      },
      {
        "questionText": "Le ligament alvéolodentaire se développe :",
        "options": [
          "A. Après la cémentogenèse",
          "B. A partir du sac folliculaire :",
          "C. Avant l'édification radiculaire",
          "D. Après fragmentation de la gaine de HERTWIG."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le desmodonte (ligament) provient des cellules du sac folliculaire. Sa formation commence après la fragmentation de la gaine d'Hertwig, en même temps que la cémentogenèse."
      },
      {
        "questionText": "Les Fibres de collagène alvéolo dentaires du desmodonte sont classées en :",
        "options": [
          "A. Fibres obliques",
          "B. Fibres circulaires",
          "C. Fibres inter radiculaires",
          "D. Fibres cémento périostées."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les fibres alvéolo-dentaires sont classées en 5 groupes, incluant les fibres obliques (principales) et les fibres inter-radiculaires (annexes). Les fibres circulaires (B) sont gingivales."
      },
      {
        "questionText": "L'innervation du desmodonte joue un grand rôle car :",
        "options": [
          "A. Elle contient des récepteurs sensoriels",
          "B. Elle est proprioceptive",
          "C. Elle est sensitive et motrice",
          "D. Informe sur les positions des dents."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'innervation (nerf trijumeau) est sensitive et proprioceptive. Elle contient des récepteurs sensoriels (propriocepteurs) qui informent sur la position et les mouvements des dents."
      },
      {
        "questionText": "Le desmodonte se caractérise par :",
        "options": [
          "A. Un turn over 15 fois plus rapide que celui du conjonctif gingival",
          "B. Grace à sa richesse vasculaire, assure la nutrition du cément",
          "C. Résiste aux forces à direction apicale par les fibres obliques",
          "D. Sa largeur qui augmente avec l'âge."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le desmodonte est richement vascularisé et assure la nutrition du cément et de l'os. Il résiste aux forces occlusales (apicales) grâce à ses fibres, notamment obliques. Son turnover est 5 fois plus rapide que le conjonctif gingival. Sa largeur diminue avec l'âge."
      },
      {
        "questionText": "Les fibres de Sharpey :",
        "options": [
          "A. Sont de nature exclusivement collagénique",
          "B. Sont produites par les fibroblastes du desmodonte",
          "C. Sont produites par les fibroblastes du cément",
          "D. Correspondent à la partie moyenne des fibres principales des modontales"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Ce sont les extrémités terminales (pas moyennes) des fibres principales collagéniques, produites par les fibroblastes du desmodonte."
      },
      {
        "questionText": "La sensibilité proprioceptive :",
        "options": [
          "A. Est commune à tous les tissus parodontaux",
          "B. Est exclusive au ligament alvéolo-dentaire",
          "C. Donne des informations concernant les mouvements et la position des dents",
          "D. Correspond à la sensibilité à la sensation douloureuse"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La proprioception (perception de la position/mouvement) est exclusive au ligament alvéolo-dentaire. La douleur (D) est la nociception."
      },
      {
        "questionText": "Le tissu parodontal le moins stable est :",
        "options": [
          "A. L'os alvéolaire",
          "B. La gencive",
          "C. Le desmodonte",
          "D. Le cément"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'os alvéolaire est le tissu le moins stable car il se résorbe facilement en réponse aux stimuli (inflammation, forces)."
      },
      {
        "questionText": "Le desmodonte contient principalement :",
        "options": [
          "A. Collagène type I",
          "B. Collagène type III",
          "C. Collagene type let IV",
          "D. Collagène type I et II"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le desmodonte est principalement composé de collagène de type I (résistance) et de type III (souplesse). Le type IV est dans les lames basales et le type II dans le cartilage."
      },
      {
        "questionText": "Les fibres du desmodonte qui résistent aux forces verticales et instrusives sont les fibres :",
        "options": [
          "A. Transseptales",
          "B. Horizontales",
          "C. Obliques",
          "D. De la crête alvéolaire"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les fibres horizontales et les fibres de la crête alvéolaire s'opposent aux forces d'intrusion (verticales). Les fibres obliques résistent à l'extrusion (C)."
      },
      {
        "questionText": "Les glycosaminoglycanes présents dans la substance fondamentale du desmodonte sont représentés essentiellement par :",
        "options": [
          "A. L'acide hyaluronique",
          "B. La fibronectine",
          "C. La laminine",
          "D. L'acide hyaluronique et la calcitonine"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La substance fondamentale contient des glycoprotéines d'adhésion comme la fibronectine et la laminine. L'acide hyaluronique (A) est un GAG mais pas une glycoprotéine."
      },
      {
        "questionText": "Les Fibres Trans septales sont :",
        "options": [
          "A. Des fibres de réticuline",
          "B. Concernent toutes les dents d'une même arcade",
          "C. Des fibres épaisses ondulées non anastomosées",
          "D. Passent au-dessus de la crête alvéolaire"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les fibres transseptales s'étendent de dent en dent sur toute l'arcade, passant au-dessus de la crête alvéolaire."
      },
      {
        "questionText": "Les fibres collagènes du groupe crestal ont pour rôle :",
        "options": [
          "A. D'assurer la stabilité de la dent",
          "B. De résister aux forces à direction apicale",
          "C. De s'opposer aux forces latérales",
          "D. De résister aux versions, aux rotations et à la luxation"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les fibres du groupe crestal (crête alvéolaire) assurent la stabilité de la dent et s'opposent aux forces latérales."
      },
      {
        "questionText": "Le desmodonte :",
        "options": [
          "A. Est une structure épithéliale molle.",
          "B. Est une structure conjonctive molle.",
          "C. Fait la jonction entre l'os alvéolaire et le cément radiculaire par les fibres de Sharon.",
          "D. Fait la jonction entre la gencive et l'os alvéolaire par les fibres de Sharpey."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le desmodonte est une structure conjonctive molle qui fait la jonction entre l'os alvéolaire et le cément radiculaire via les fibres de Sharpey."
      },
      {
        "questionText": "La substance fondamentale du desmodonte:",
        "options": [
          "A. Est le véritable milieu extérieur.",
          "B. Les muco-polysaccharides y sont peu abondants.",
          "C. L'eau est un élément peu important.",
          "D. Présente une viscoélasticité qui joue un rôle important dans l'amortissement des forces exercées sur la dent."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La substance fondamentale est le milieu intérieur (A). Les mucopolysaccharides y sont peu abondants (B), mais l'eau y est importante (C). Sa viscoélasticité joue un rôle d'amortissement (D)."
      },
      {
        "questionText": "L'innervation du desmodonte",
        "options": [
          "A. Est sensitive et proprioceptive.",
          "B. Fournit au système nerveux central, toute information sur les positions et les mouvements des dents et conditionne donc les mouvements reflexes.",
          "C. Assure à la fois la nutrition du conjonctif desmodontal et les tissus minéralisés qui le bordent",
          "D. Fournit les cellules chargées de reconstituer les structures détruites"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'innervation du desmodonte est sensitive et proprioceptive. Ces nerfs proprioceptifs renseignent le SNC sur la position de la dent, conditionnant les réflexes."
      },
      {
        "questionText": "Les fibres desmodontales collagéniques:",
        "options": [
          "A. Sont les éléments fibreux les moins nombreux du desmodonte.",
          "B. Présentent, à l'état de repos, des ondulations caractéristiques qui s'effacent lorsqu'une traction est exercée sur la dent.",
          "C. Sont orientées de façon à s'opposer à l'enfoncement, à l'extrusion et même à la rotation de la dent.",
          "D. On en distingue 7 groupes de fibres."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Elles sont les plus nombreuses (A). Elles présentent des ondulations au repos (B) et leur orientation s'oppose aux forces (C). On distingue 5 groupes (D)."
      },
      {
        "questionText": "Le desmodonte ou ligament parodontal :",
        "options": [
          "1- Est bien vascularisé et innervé",
          "2- Dérive de la gaine de Hertwig",
          "3- Sert à l'attache de la dent à l'os alvéolaire",
          "4- Voit sa largeur diminuer en cas d`augmentation de sollicitations fonctionnelles",
          "5- Est un tissu conjonctif dense"
        ],
        "correctOptionIndexes": [
          0,
          2,
          4
        ],
        "explanation": "Le desmodonte est un tissu conjonctif dense, bien vascularisé et innervé, servant à l'attache de la dent. Il dérive du sac folliculaire. Sa largeur augmente avec les sollicitations."
      },
      {
        "questionText": "Le ligament alvéolo-dentaire",
        "options": [
          "A. Est un tissu conjonctif fibreux spécialisé",
          "B. Est un tissu conjonctif mou",
          "C. Dérive de la couche moyenne du sac folliculaire",
          "D. Dérive de l'épithélium adamantin réduit"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "C'est un tissu conjonctif fibreux spécialisé qui dérive du sac folliculaire."
      },
      {
        "questionText": "Le desmodonte",
        "options": [
          "A. Occupe un espace d'environ 0.5 mm",
          "B. Sa largeur est plus importante au niveau de la partie moyenne",
          "C. Sa largeur augmente en cas d'augmentation des sollicitations fonctionnelles",
          "D. Radiologiquement, le desmodonte est un espace radio-opaque"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La largeur du desmodonte (environ 0.25 mm) augmente avec les sollicitations fonctionnelles. Elle est plus étroite au milieu (hypomochlion). C'est un espace radio-clair."
      },
      {
        "questionText": "Les fibres principales du desmodonte",
        "options": [
          "A. Sont de nature exclusivement collagénique",
          "B. Leur partie intermédiaire est appelée : fibre de Sharpey",
          "C. Le groupe oblique de ces fibres est tendu du cément jusqu'à l'os en direction apicale",
          "D. Le groupe interradiculaires est observé seulement dans les dents multi radiculaires,"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Elles sont de nature collagénique. Les fibres de Sharpey sont la partie terminale (B). Les fibres obliques vont du cément à l'os en direction coronaire (C). Les interradiculaires sont sur les dents multiradiculées (D)."
      },
      {
        "questionText": "Le desmodonte assure:",
        "options": [
          "A. Le soutien des tissus gingivaux dans les zones inter proximales par les fibres obliques",
          "B. Un rôle dans l'organogénétique aboutissant à la reconstruction des tissus détruits",
          "C. L'amortissement des forces occlusales importantes grâce au frein hydraulique de Weski",
          "D. Une sensibilité nociceptive donnant des informations sur les mouvements et les positions"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le desmodonte a un rôle d'organogenèse (réparation) et d'amortissement (frein hydraulique). Le soutien gingival (A) est par les fibres transseptales. L'information sur les mouvements (D) est proprioceptive."
      },
      {
        "questionText": "Le desmodonte est un tissu :",
        "options": [
          "A. Conjonctif fibreux lâche, dense",
          "B. Qui fait partie du parodonte superficiel,",
          "C. Qui fait partie du parodonte profond,",
          "D. Situé entre le cément et l'os alvéolaire."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le desmodonte est un tissu conjonctif fibreux dense, faisant partie du parodonte profond, situé entre le cément et l'os alvéolaire."
      },
      {
        "questionText": "La largeur du ligament alvéolo-dentaire :",
        "options": [
          "A. Varie en fonction de rage,",
          "B. N'est pas influencée par l'âge.",
          "C. Est de 0.18 mm à l'âge de 50 ans",
          "D. Est de 0.15 mm à l'âge de 70 ans"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La largeur du desmodonte varie avec l'âge, diminuant. Les valeurs spécifiques de 0.18 mm à 50 ans et 0.15 mm à 70 ans sont données comme exemples."
      }
    ]
  },
  {
    "title": "Le biofilm dentaire",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le biofilm dentaire :",
        "options": [
          "A. Est un dépôt granuleux, mou et amorphe, qui s'accumule sur les faces des dents etrestaurations dentaires.",
          "B. Est une association de bactéries d'une même ou de plusieurs espèces",
          "C. Ne peut être détaché que par un nettoyage mécanique",
          "D. Est considéré mature après accumulation d'environ io couches bactériennes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le biofilm (plaque) est un dépôt mou (A), composé d'une communauté de bactéries (B), qui nécessite un nettoyage mécanique pour être enlevé (C). Il est considéré mature après environ 30 couches (D)."
      },
      {
        "questionText": "La plaque dentaire :",
        "options": [
          "A. Est classée en plaque supra-gingivale et sous-gingivale",
          "B. La plaque supra-gingivale contient exclusivement des germes anaérobies",
          "C. La plaque sous-gingivale est plus adhérente et plus dense que la plaque supra- gingivale",
          "D. Présente une discontinuité entre la plaque supra et sous-gingivale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La plaque est classée en supra-gingivale et sous-gingivale. La plaque supra (B) contient des aérobies/facultatifs. La plaque sous (C) est moins dense et moins adhérente. Il n'y a pas de discontinuité nette (D)."
      },
      {
        "questionText": "La pellicule acquise exogène :",
        "options": [
          "A. Est un film protéique d'origine salivaire riche en cellules de défense",
          "B. Apparait en quelques minutes après le brossage",
          "C. Représente la première étape de la formation du biofilm",
          "D. Est colonisée en second lieu par des bactéries qui adhérent à cette PAE d'une manière réversible uniquement."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La pellicule acquise exogène (PAE) est la première étape de formation du biofilm (C) et se forme en quelques minutes après un brossage (B). Elle est acellulaire (A). L'adhésion bactérienne peut devenir irréversible (D)."
      },
      {
        "questionText": "Parmi les éléments favorisant la rétention de la plaque bactérienne, on retrouve :",
        "options": [
          "A. Les facteurs anatomiques : malpositions dentaires",
          "B. Restaurations dentaires à l'amalgame",
          "C. Révélateurs de plaque à base d'érythrosine",
          "D. Les poches gingivales et parodontales."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les facteurs anatomiques comme les malpositions (A) et la présence de poches (D) créent des zones de rétention. Les restaurations défectueuses (B) favorisent aussi l'accumulation."
      },
      {
        "questionText": "La mise en évidence qualitative de la plaque se fait :",
        "options": [
          "A. Test immunologique",
          "B. Erythrosine",
          "C. Système plack-lite",
          "D. Test PCR."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les tests qualitatifs identifient les types de bactéries. Les tests immunologiques (A) et la PCR (D) le permettent. L'érythrosine (B) et Plaque-Lite (C) sont quantitatifs (mesurent la quantité)."
      },
      {
        "questionText": "La plaque bactérienne est :",
        "options": [
          "A. Classée en plaque supra-gingivale et sus-gingivale",
          "B. La plaque supra-gingivale se compose essentiellement de germes aérobie strict",
          "C. La plaque sous-gingivale s'accumulant sur le sillon gingivo-dentaire est faite de germes aérobies",
          "D. Aucune démarcation ne peut être décelée cliniquement entre la plaque supra et sous-gingivale"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La plaque supra-gingivale est dominée par des germes aérobies ou anaérobies facultatifs (B). Cliniquement, la limite entre supra et sous-gingivale n'est pas nette (D). La plaque sous-gingivale (C) est riche en anaérobies stricts."
      },
      {
        "questionText": "Par définition le biofilm est:",
        "options": [
          "A. Une accumulation homogène, adhérente à la surface des dents",
          "B. Situé dans l'espace gingivo-dentaire et sur les restaurations dentaires",
          "C. Compose d'une communauté microbienne, riche en bactéries aérobies et anaérobies",
          "D. Enrobé dans une matrice intercellulaire d'origine microbienne et salivaire"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le biofilm est une accumulation hétérogène (A est faux) située sur les dents, restaurations, etc. (B). Il est composé d'une communauté microbienne (C) enrobée dans une matrice (D)."
      },
      {
        "questionText": "Parmi les éléments favorisant la rétention de la plaque, on retrouve:",
        "options": [
          "A. L'absence de point de contact inter dentaire",
          "B. La présence de caries",
          "C. Les obturations débordantes, en surocclusion",
          "D. La présence d'une inflammation gingivale."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les facteurs de rétention incluent les lésions carieuses (B), les anomalies morphologiques comme l'absence de point de contact (A), et les facteurs iatrogènes comme les obturations débordantes (C)."
      },
      {
        "questionText": "Le biofilm dentaire est défini comme :",
        "options": [
          "A. Un ensemble de cellules conjonctives",
          "B. Un dépôt calcifié blanc jaunâtre",
          "C. Une communauté microbienne, riche en bactéries aérobics ct anaérobics",
          "D. Une accumulation de différentes espèces bactériennes"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le biofilm est une accumulation (D) hétérogène d'une communauté microbienne (C) riche en bactéries aérobies et anaérobies."
      },
      {
        "questionText": "La plaque dentaire",
        "options": [
          "A. Est visible que lorsqu'elle présente une certaine épaisseur",
          "B. Apparait comme un enduit blanc jaunâtre localisé au niveau de la geneive attachée",
          "C. On peut rencontrer les dépôts de plaque uniquement sur les surfaces dentaires",
          "D. Elle est mise en évidence en utilisant une solution révélatrice"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La plaque n'est visible que si elle est épaisse (A). Quand elle est fine, on utilise un révélateur (D). Elle se localise d'abord le long du rebord gingival (B) et se trouve aussi sur les restaurations, prothèses, etc. (C)."
      },
      {
        "questionText": "En plus des bactéries dans le biofilm on retrouve des virus et des protozoaires :",
        "options": [
          "A. Vrai",
          "B. Faux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La communauté microbienne buccale (biofilm) est variée et peut contenir des virus, mycoplasmes, bactéries, champignons et protozoaires."
      },
      {
        "questionText": "Le biofilm est mature:",
        "options": [
          "A. Entre le 3ème et le 6ème jour",
          "B. Après que les spirochètes et les spinellas s'installent",
          "C. Après le dépôt des veillonellas et lorsque quelques bactéroides et fusobactériums se fixent",
          "D. Lorsque la plaque est jeune"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La maturation du biofilm implique une succession écologique, avec l'installation d'espèces anaérobies strictes et mobiles comme les spirochètes."
      },
      {
        "questionText": "La formation de la cuticule acquise:",
        "options": [
          "A. Est la première à se déposer sur la surface dentaire",
          "B. Elle se dépose d'abord sur la surface gingivale",
          "C. Elle se forme quelques minutes après le brossage",
          "D. Elle va faciliter l'attache des premières bactéries"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La pellicule acquise (PAE) est la première couche à se déposer sur la dent (A). Elle se forme en quelques minutes (C) et facilite l'adhésion des bactéries pionnières (D)."
      },
      {
        "questionText": "la pellicule acquise exogène se définie comme étant :",
        "options": [
          "A. Des hydrates de carbones,",
          "B. Un film organique,",
          "C. Un film bactérien,",
          "D. Un film mou et translucide."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La pellicule acquise exogène (PAE) est un film organique, acellulaire (donc pas bactérien), composé de protéines salivaires, qui recouvre les surfaces buccales."
      },
      {
        "questionText": "L'adhérence irréversible implique :",
        "options": [
          "A. Les récepteurs,",
          "B. Les médiateurs,",
          "C. Les chromosomes bactériens,",
          "D. Les adhésines."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "L'adhésion irréversible implique des interactions spécifiques entre des molécules à la surface des bactéries, appelées adhésines (D), et des molécules complémentaires sur la pellicule, appelées récepteurs (A)."
      },
      {
        "questionText": "Le biofilm bactérien est défini comme :",
        "options": [
          "A. Un ensemble de cellules épithéliales,",
          "B. Un environnement aqueux qui adhère à la dent,",
          "C. Une accumulation de différentes espèces bactériennes,",
          "D. Un dépôt calcifié plus ou moins coloré."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le biofilm se définit comme une accumulation de micro-organismes, de différentes espèces, adhérant à une surface."
      },
      {
        "questionText": "La maturation du biofilm bactérien comprend :",
        "options": [
          "A. L'excrétion de protéines,",
          "B. L'adhésion bactérienne,",
          "C. La formation d'une matrice extra-cellulaire,",
          "D. La formation de la pellicule acquise."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La formation du biofilm commence par l'adhésion (B). La maturation (C) implique la multiplication et l'excrétion de polymères (protéines, polysaccharides) (A) pour former la matrice."
      },
      {
        "questionText": "Les bactéries se fixent à la surface dentaire grâce aux:",
        "options": [
          "A. Hydrates de carbones",
          "B. Adhésines",
          "C. Teneur salivaire",
          "D. Flagelles",
          "E. Fluide gingival."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'adhésion peut être facilitée par des appendices comme les flagelles (D). L'adhésion spécifique (irréversible) se fait via des adhésines (B) qui se lient à des récepteurs."
      },
      {
        "questionText": "La plaque sous gingivale est :",
        "options": [
          "A. Visible à l'œil nu",
          "B. Constituée de bactéries aérobies",
          "C. Facilement éliminée par le brossage",
          "D. Baignée par la salive",
          "E. Accumulée dans le sillon gingivo-dentaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La plaque sous-gingivale s'accumule dans le sillon gingival. Elle est invisible (A), anaérobie (B), et baignée par le fluide gingival (D)."
      },
      {
        "questionText": "La pellicule acquise:",
        "options": [
          "1- Est un film protéique d’origine salivaire",
          "2- Se forme en quelques minutes après le brossage",
          "3- Facilite l’attachement des premières bactéries",
          "4- A un rôle de protection contre la déminéralisation",
          "5- Est principalement composée de bactéries"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La PAE est un film protéique acellulaire (5 est faux) d'origine salivaire (1). Elle se forme en quelques minutes (2), facilite l'adhésion bactérienne (3), et peut avoir un rôle protecteur (4)."
      },
      {
        "questionText": "Classez par ordre les étapes de formation du Biofilm dentaire :",
        "options": [
          "1- Maturation (Multiplication et matrice)",
          "2- Dispersion",
          "3- Formation de la pellicule acquise",
          "4- Adhésion réversible (transport)",
          "5- Adhésion irréversible (colonisation initiale)"
        ],
        "correctOptionIndexes": [
          2,
          3,
          4,
          0,
          1
        ],
        "explanation": "Ordre : Formation de la PAE (3), Adhésion réversible (4), Adhésion irréversible (5), Maturation (1), et Dispersion (2)."
      },
      {
        "questionText": "Dans le Biofilm bactérien, les canaux aqueux :",
        "options": [
          "A. Ont un rôle dans l'adhérence des bactéries",
          "B. Produisent les facteurs de virulence",
          "C. Permettent des échanges intercellulaires",
          "D. Constituent la matrice d'exopolymères",
          "E. Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Dans le biofilm mature, les canaux aqueux sont créés pour apporter les nutriments et l'oxygène, permettant les échanges nécessaires à la survie des bactéries."
      },
      {
        "questionText": "Le biofilm bactérien est défini comme:",
        "options": [
          "A. Un ensemble de cellules épithéliales",
          "B. Un dépôt calcifié plus ou moins coloré",
          "C. Un environnement aqueux qui adhère à la dent",
          "D. Une accumulation de différentes espèces bactériennes",
          "E. Une plaque dentaire."
        ],
        "correctOptionIndexes": [
          3,
          4
        ],
        "explanation": "Le biofilm est une accumulation de micro-organismes de différentes espèces (D). Lorsqu'il est sur la dent, il est appelé plaque dentaire (E)."
      },
      {
        "questionText": "On reconnait plusieurs types de plaque dentaire:",
        "options": [
          "A. Une Plaque des surfaces lisses",
          "B. Une Plaque des muqueuses",
          "C. Une Plaque sous-gingivale",
          "D. Une Plaque cariogène",
          "E. Une Plaque non adhérente"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les types de plaque sont classés par localisation : plaque supra-gingivale (qui inclut celle des surfaces lisses, proximales, et sillons) et plaque sous-gingivale."
      },
      {
        "questionText": "Le complexe bactérien rouge de Socransky comprend:",
        "options": [
          "A. Fusobacterium nucleatum",
          "B. Porphyromonas gingivalis",
          "C. Aggregatibacter actinomycetemcomitans",
          "D. Treponema denticola",
          "E. Prevotella intermedia"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le complexe rouge, fortement associé à la parodontite, comprend principalement Porphyromonas gingivalis, Treponema denticola, et Tannerella forsythia."
      },
      {
        "questionText": "L'adhérence irréversible implique :",
        "options": [
          "A. Les récepteurs",
          "B. Les médiateurs",
          "C. Les chromosomes bactériens",
          "D. Les adhésines",
          "E. Le glycocalyx"
        ],
        "correctOptionIndexes": [
          0,
          3,
          4
        ],
        "explanation": "L'adhérence irréversible est une étape spécifique impliquant des interactions moléculaires entre les adhésines à la surface des bactéries et les récepteurs sur la pellicule acquise. Le glycocalyx (une couche de polymères) peut aussi jouer un rôle majeur dans cette adhésion forte."
      },
      {
        "questionText": "La plaque sous gingivale est :",
        "options": [
          "A. Visible à l'œil nu",
          "B. Constituée de bactéries aérobies",
          "C. Facilement éliminée par le brossage",
          "D. Baignée par la salive",
          "E. Accumulée dans le sillon gingivo-dentaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La plaque sous-gingivale se forme dans le sillon gingivo-dentaire. Elle est masquée par la gencive (non visible), composée majoritairement de bactéries anaérobies, et est baignée par le fluide gingival, non par la salive."
      },
      {
        "questionText": "La pellicule acquise:",
        "options": [
          "1- Est un film protéique d’origine salivaire",
          "2- Se forme en quelques minutes après le brossage",
          "3- Facilite l’attachement des premières bactéries",
          "4- A un rôle de protection contre la déminéralisation",
          "5- Est principalement composée de bactéries"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La pellicule acquise est un film protéique acellulaire d'origine salivaire, qui se forme en quelques minutes, facilite l'adhésion bactérienne et peut avoir un rôle protecteur contre la déminéralisation."
      },
      {
        "questionText": "Classez par ordre les étapes de formation du Biofilm dentaire :",
        "options": [
          "1- Maturation (Multiplication et matrice)",
          "2- Dispersion",
          "3- Formation de la pellicule acquise",
          "4- Adhésion réversible (transport)",
          "5- Adhésion irréversible (colonisation initiale)"
        ],
        "correctOptionIndexes": [
          2,
          3,
          4,
          0,
          1
        ],
        "explanation": "L'ordre correct est : 3 (Formation de la pellicule acquise), puis 4 (Adhésion réversible des premières bactéries), puis 5 (Adhésion irréversible et colonisation), suivie de 1 (Maturation et croissance du biofilm), et enfin 2 (Dispersion de bactéries pour coloniser d'autres sites)."
      },
      {
        "questionText": "Dans le Biofilm bactérien, les canaux aqueux :",
        "options": [
          "A. Ont un rôle dans l'adhérence des bactéries",
          "B. Produisent les facteurs de virulence",
          "C. Permettent des échanges intercellulaires",
          "D. Constituent la matrice d'exopolymères",
          "E. Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Au sein de la matrice du biofilm mature, des canaux aqueux se forment pour permettre la circulation des nutriments, de l'oxygène et l'élimination des déchets, facilitant ainsi les échanges pour les bactéries en profondeur."
      },
      {
        "questionText": "Le biofilm bactérien est :",
        "options": [
          "1- Un ensemble de cellules épithéliales",
          "2- Un dépôt calcifié plus ou moins coloré",
          "3- Un environnement aqueux qui adhère à la dent",
          "4- Une accumulation de différentes espèces bactériennes",
          "5- Une plaque dentaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le biofilm est une accumulation de différentes espèces bactériennes. Un dépôt calcifié est du tartre. Bien qu'il soit lié à la plaque, ce n'est pas sa définition principale."
      },
      {
        "questionText": "Le biofilm bactérien est :",
        "options": [
          "1- Un ensemble de cellules épithéliales",
          "2- Un dépôt calcifié plus ou moins coloré",
          "3- Un environnement aqueux qui adhère à la dent",
          "4- Une accumulation de différentes espèces bactériennes",
          "5- Une plaque dentaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le biofilm est une accumulation de différentes espèces bactériennes (4). Un dépôt calcifié (2) est du tartre, pas un biofilm actif."
      }
    ]
  },
  {
    "title": "Le cément",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le cément est un tissu :",
        "options": [
          "A. Qui est très minéralisé.",
          "B. Qui n'est pas innervé.",
          "C. Qui est dense et vascularisé.",
          "D. Qui subit une apposition."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément n'est pas innervé (B) et subit une apposition continue tout au long de la vie (D). Il est avasculaire (C) et faiblement minéralisé (A)."
      },
      {
        "questionText": "Les caractéristiques du cément sont :",
        "options": [
          "A. Couleur plus foncé que celle de la dentine",
          "B. Présence d'une hypercémentose",
          "C. Même dureté que celle de l'os",
          "D. Présence d'une courbe arrondie vers l'extérieur",
          "E. N'est pas calcifié."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément peut présenter un épaississement anormal (hypercémentose). À la jonction amélo-cémentaire, il peut former une courbe. Sa couleur est plus claire que la dentine, il est moins dur que l'os et il est bien un tissu calcifié."
      },
      {
        "questionText": "Les cémentocytes sont des :",
        "options": [
          "1- Cellules cuboïdes",
          "2- Cellules étoilées",
          "3- Cellules emprisonnées dans des lacunes",
          "4- Cellules multinucléées",
          "5- Cellules conjonctives indifférenciées"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les cémentocytes sont les cémentoblastes qui ont été piégés dans la matrice cémentaire qu'ils ont sécrétée. Ils résident dans des lacunes (cémentoplastes) et ont une forme étoilée caractéristique avec des prolongements cytoplasmiques."
      },
      {
        "questionText": "Parmi les caractéristiques du cément cellulaire :",
        "options": [
          "A. Situation au niveau du 1/3 cervical.",
          "B. Présence de Cémentoblastes.",
          "C. Il se forme après l'éruption des dents.",
          "D. Epaisseur importante."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le cément cellulaire contient des cémentoblastes (B), se forme après l'éruption (C) et est plus épais (D). Il se trouve au niveau du tiers apical et des furcations (A)."
      },
      {
        "questionText": "Les constituants organiques du cément sont :",
        "options": [
          "A. Hydroxyproline.",
          "B. Glycine.",
          "C. Collagène.",
          "D. Alanine"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le principal constituant organique est le collagène (C). La glycine (B) et l'alanine (D) sont des acides aminés présents en abondance."
      },
      {
        "questionText": "Le cément a pour rôle :",
        "options": [
          "A. La réparation des lésions radiculaires.",
          "B. La protection de la dentine.",
          "C. L'attachement de la dent à son alvéole.",
          "D. Empêcher l'hyperesthésie du collet."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Le cément a de multiples rôles : réparation (A), protection de la dentine (B), attachement via les fibres de Sharpey (C), et prévention de l'hyperesthésie (D)."
      },
      {
        "questionText": "Parmi les caractéristiques du cément cellulaire :",
        "options": [
          "A. Situation au niveau du 1/3 cervical",
          "B. Présence de cémentoblastes",
          "C. Quantité importante de fibres de scharpey",
          "D. Epaisseur importante"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément cellulaire contient des cémentoblastes (B) et est plus épais (D). Il se trouve dans le tiers apical (A) et contient peu de fibres de Sharpey (C)."
      },
      {
        "questionText": "Les caractéristiques du cément sont:",
        "options": [
          "A. Couleur plus foncé que celle de la dentines",
          "B. Présence d'une hypercementose",
          "C. Même dureté que celle du cément",
          "D. Présence d'une courbe arrondie vers l'extérieur."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément peut présenter une hypercémentose (B) et forme une courbe à la jonction amélo-cémentaire (D). Sa couleur est plus claire (A) et sa dureté est inférieure à celle de la dentine (C)."
      },
      {
        "questionText": "Le cément intermédiaire se trouve la surface de:",
        "options": [
          "A. L'émail",
          "B. Le cément",
          "C. La dentine",
          "D. La jonction amelo cémentaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le cément intermédiaire (ou cuticule primaire) recouvre l'émail nouvellement formé avant l'éruption."
      },
      {
        "questionText": "Le cément acellulaire afibrillaire est retrouve au niveau :",
        "options": [
          "A. Du 1/3 moyen de la racine",
          "B. Du 1/3 cervical de la racine",
          "C. De l'émail",
          "D. Du 1/3 apical de la racine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le cément acellulaire afibrillaire se trouve en taches isolées sur l'émail, près de la jonction amélo-cémentaire."
      },
      {
        "questionText": "Le cément se différencie de l'os alveolaire par",
        "options": [
          "A. Un perpétuel remaniement",
          "B. Une absence de vaisseaux et de nerfs",
          "C. Une plus grande minéralisation",
          "D. Une apposition continue"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément est avasculaire et non innervé (B), et il subit une apposition continue (D), contrairement à l'os qui se remanie (A)."
      },
      {
        "questionText": "Le cément cellulaire :",
        "options": [
          "A. Est retrouvé au niveau de la partie haute de la séparation des racines",
          "B. Est retrouvé au niveau du tiers coronaire de la racine",
          "C. Est composé de fibres matricielles dites extrinsèques",
          "D. On y retrouve des cellules cémentaires"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le cément cellulaire contient des cémentocytes (D). Il se trouve au niveau du 1/3 apical (B). Ses fibres matricielles sont intrinsèques (C)."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. Est constitué de fibres intrinsèques, produites par les cémentoblastes",
          "B. Primaire est souvent trouvé au niveau du tiers apical",
          "C. Est constitué de fibres matricielles, orientées parallèlement à la surface radiculaire",
          "D. Est caractérisé par une apposition progressive tout au long de la vie"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Les fibres matricielles sont les fibres intrinsèques, produites par les cémentoblastes et parallèles à la surface (A, C). Le cément a une apposition continue (D). Le cément primaire est coronaire (B)."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. Est issue des pré-cémentoblastes de la couche interne du SRC folliculaire",
          "B. B-A une épaisseur maximale dans le 1/3 apical (150 à 200 pm)",
          "C. Est riche en récepteurs neurologiques",
          "D. Est caractérisé par une résorption progressive tout au long de la vie"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Les cémentoblastes proviennent du sac folliculaire interne (A). Son épaisseur est maximale au 1/3 apical (150-200 µm) (B). Il n'est pas innervé (C) et subit une apposition (D)."
      },
      {
        "questionText": "La jonction amélo-cémentaire :",
        "options": [
          "A. Peut prendre deux former de dispositions anatomiques",
          "B. Réalise la coache granuleuse de Tomes",
          "C. Est en bout à bout dans 60 A 65% des cas",
          "D. Est dans 5 à 10% des cas en disjoaction pouvant denner une hypersensibilité dentaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Il y a 3 types de jonction (A). Le cas où le cément recouvre l'émail est le plus fréquent (60-65%). La disjonction (D) survient dans 5-10% des cas et expose la dentine. La couche de Tomes (B) est à la jonction cément-dentine."
      },
      {
        "questionText": "Histologiquement, le cément",
        "options": [
          "A. Primaire est souvent trouvé au niveau des deux tiers coronaires de la racine",
          "B. Cellulaire est retrouvé sur les surfaces inter-radiculaires des dents pluri-radiculées",
          "C. Est constitué de fibres extrinsèques, produites par les cémentoblastes",
          "D. Est constitué de fibres matricielles, orientées parallèlement à la surface radiculaire"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Cément primaire (acellulaire) est coronaire (A). Cément secondaire (cellulaire) est apical et inter-radiculaire (B). Les fibres matricielles (D) sont intrinsèques et parallèles. Les fibres extrinsèques (C) sont produites par les fibroblastes."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. Est constitué d'un tissu conjonctif minéralisé et calcifié.",
          "B. Est un tissu vivant en constant remaniement et remodelage.",
          "C. Il est ni vascularisé, ni innervé.",
          "D. Se caractérise par une apposition progressive tout au long de l'éruption active de la dent."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le cément est un tissu conjonctif minéralisé (A). Il est avasculaire et non innervé (C). Il ne subit pas de remodelage (B) mais une apposition continue tout au long de la vie (D)."
      },
      {
        "questionText": "Le Cément secondaire:",
        "options": [
          "A. Se forme au moment du développement de la racine et de l'éruption de la dent.",
          "B. Se caractérise par la présence d'odontoblastes.",
          "C. Contient des fibres intrinsèques qui comblent l'espace entre les fibres extrinsèques.",
          "D. Se dépose en taches isolées sur l'émail et sur la jonction émail cément."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le cément secondaire (cellulaire) se forme après l'éruption. Il contient des cémentocytes (B). Il contient des fibres intrinsèques qui comblent l'espace entre les fibres extrinsèques (Sharpey)."
      },
      {
        "questionText": "Le cément primaire:",
        "options": [
          "A. Est un cément cellulaire.",
          "B. Situé au 2.3 cervicaux de la surface radiculaire.",
          "C. Contient une proportion importante de fibres intrinsèques dites de sharpey.",
          "D. Se forme avant l'éruption de la dent."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément primaire (acellulaire) se forme pendant le développement et l'éruption (D). Il est situé aux 2/3 cervicaux (B). Il est acellulaire (A) et riche en fibres extrinsèques (Sharpey) (C)."
      },
      {
        "questionText": "Le cément se forme :",
        "options": [
          "A. Après fragmentation de la gaine de Hertwig",
          "B. Avant l'édification radiculaire",
          "C. Débute avec la minéralisation des fibres de collagène",
          "D. Avant fragmentation de la gaine de Hertwig"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La cémentogenèse débute après la fragmentation de la gaine de Hertwig (A), lorsque les cémentoblastes se différencient. La formation commence par la minéralisation des fibrilles de collagène (C)."
      },
      {
        "questionText": "Le cément secondaire",
        "options": [
          "A. Est un cément fibrillaire et cellulaire",
          "B. Est un cément cellulaire uniquement",
          "C. Se dépose en taches isolées",
          "D. Est un cément fonctionnel"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le cément secondaire est cellulaire et fibrillaire (A). Il se forme après l'éruption en réponse aux exigences fonctionnelles (D)."
      },
      {
        "questionText": "La jonction cément-dentine",
        "options": [
          "A. Est une zone peu minéralisée",
          "B. Apparait comme une ligne mince histologiquement",
          "C. Apparait radio-dense à la radiographie",
          "D. Est une zone très minéralisée"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La jonction cément-dentine apparaît comme une ligne mince. C'est une zone hyperminéralisée et donc radio-dense."
      },
      {
        "questionText": "l’aspect morphologique du cément est en fonction:",
        "options": [
          "A. de l’âge de l’individu,",
          "B. de la migration physiologique dentaire.",
          "C. de la fonction occlusale,",
          "D. des mouvements fonctionnels."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'aspect du cément (ex: épaisseur) est influencé par l'âge, la fonction occlusale et les mouvements fonctionnels."
      },
      {
        "questionText": "Hypercémentose:",
        "options": [
          "A. est un épaississement cémentaire pathologique,",
          "B. se localise au niveau des dents monaradiculées,",
          "C. est un épaississement physiologique qui atteint les sujets jeunes,",
          "D. est à l'origine d’absence de dents antagonistes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'hypercémentose est un épaississement pathologique du cément (A). L'absence de dent antagoniste (D) peut être une cause, pas une origine."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. ne subit pas de résorption physiologique,",
          "B. participe à la fixation et l'attachement de la dent dans son alvéole,",
          "C. ne participe pas aux échanges avec la pulpe et le desmodonte,",
          "D. Joue un rôle de protection de la dentine."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le cément participe à l'attache (B) et à la protection de la dentine (D). Il ne subit pas de résorption physiologique (sauf rhizalyse des dents temporaires) (A). Il est avasculaire et ne participe donc pas aux échanges (C)."
      },
      {
        "questionText": "Les cémentocytes sont des :",
        "options": [
          "1- Cellules cuboïdes",
          "2- Cellules étoilées",
          "3- Cellules emprisonnées dans des lacunes",
          "4. Cellules multinucléées",
          "5- Cellules conjonctives indifférenciées"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les cémentocytes sont d'anciens cémentoblastes qui se différencient, prennent une forme étoilée et sont emprisonnés dans des lacunes (cémentoplastes)."
      },
      {
        "questionText": "Parmi les propriétés physiques du cément :",
        "options": [
          "A. Son imperméabilité.",
          "B. Sa forte densité plus importante que celle de l'émail et de la dentine.",
          "C. Sa moindre dureté que celle de l'émail et de la dentine.",
          "D. Sa translucidité supérieure à celle de l'email."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le cément est le moins dur des tissus minéralisés de la dent (C). Il est perméable (A), a une faible densité (B), et est moins translucide que l'émail (D)."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. Est constitué d'un tissu conjonctif minéralisé et calcifié.",
          "B. Est un tissu vivant en constant remaniement et remodelage.",
          "C. Il est ni vascularisé, ni innervé.",
          "D. Se caractérise par une apposition progressive tout au long de l'éruption active de la dent."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le cément est un tissu conjonctif minéralisé (A). Il est avasculaire et non innervé (C). Il ne subit pas de remodelage (B) mais une apposition continue tout au long de la vie (D)."
      },
      {
        "questionText": "Le Cément secondaire:",
        "options": [
          "A. Se forme au moment du développement de la racine et de l'éruption de la dent.",
          "B. Se caractérise par la présence d'odontoblastes.",
          "C. Contient des fibres intrinsèques qui comblent l'espace entre les fibres extrinsèques.",
          "D. Se dépose en taches isolées sur l'émail et sur la jonction émail cément."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le cément secondaire (cellulaire) se forme après l'éruption (A). Il contient des cémentocytes (B). Il est riche en fibres intrinsèques qui comblent l'espace entre les fibres extrinsèques (Sharpey) (C)."
      },
      {
        "questionText": "Le cément primaire:",
        "options": [
          "A. Est un cément cellulaire.",
          "B. Situé au 2.3 cervicaux de la surface radiculaire.",
          "C. Contient une proportion importante de fibres intrinsèques dites de sharpey.",
          "D. Se forme avant l'éruption de la dent."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément primaire (acellulaire) se forme lors du développement de la racine et de l'éruption (D). Il est situé aux 2/3 cervicaux (B). Il est acellulaire (A) et riche en fibres extrinsèques (Sharpey), pas intrinsèques (C)."
      },
      {
        "questionText": "Le cément se forme :",
        "options": [
          "A. Après fragmentation de la gaine de Hertwig",
          "B. Avant l'édification radiculaire",
          "C. Débute avec la minéralisation des fibres de collagène",
          "D. Avant fragmentation de la gaine de Hertwig"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La cémentogenèse débute après la fragmentation de la gaine d'Hertwig (A), lorsque les cémentoblastes se différencient. La formation (minéralisation) commence par la matrice collagénique (C)."
      },
      {
        "questionText": "Le cément secondaire",
        "options": [
          "A. Est un cément fibrillaire et cellulaire",
          "B. Est un cément cellulaire uniquement",
          "C. Se dépose en taches isolées",
          "D. Est un cément fonctionnel"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le cément secondaire est à la fois cellulaire (contient des cémentocytes) et fibrillaire. Il se forme après l'éruption en réponse aux exigences fonctionnelles (D)."
      },
      {
        "questionText": "La jonction cément-dentine",
        "options": [
          "A. Est une zone peu minéralisée",
          "B. Apparait comme une ligne mince histologiquement",
          "C. Apparait radio-dense à la radiographie",
          "D. Est une zone très minéralisée"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Histologiquement, c'est une ligne mince (B). C'est une zone hyperminéralisée (D), qui apparaît donc radio-dense (C)."
      },
      {
        "questionText": "Les caractéristiques du cément sont :",
        "options": [
          "A. Couleur plus foncé que celle de la dentine",
          "B. Présence d'une hypercémentose",
          "C. Même dureté que celle de l'os",
          "D. Présence d'une courbe arrondie vers l'extérieur",
          "E. N'est pas calcifié."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'hypercémentose (B) est un épaississement anormal. La jonction amélo-cémentaire (D) peut avoir une forme arrondie. Il est moins dur que la dentine (C) et plus clair (A). Il est calcifié (E)."
      },
      {
        "questionText": "Le cément est:",
        "options": [
          "A. un élément du parodonte profond,",
          "B. ni vascularisé et innervé qui recouvre toute la surface radiculaire,",
          "C. riche en fibres de collagènes",
          "D. considéré comme une barrière cémentaire entre le desmodonte et la dentine."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Le cément fait partie du parodonte profond (A), est avasculaire et non innervé (B), riche en collagène (C), et recouvre la dentine (D)."
      },
      {
        "questionText": "l’aspect morphologique du cément est en fonction:",
        "options": [
          "A. de l’âge de l’individu,",
          "B. de la migration physiologique dentaire.",
          "C. de la fonction occlusale,",
          "D. des mouvements fonctionnels."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'aspect (épaisseur) du cément varie en fonction de l'âge, de la fonction occlusale et des mouvements fonctionnels."
      },
      {
        "questionText": "Hypercémentose:",
        "options": [
          "A. est un épaississement cémentaire pathologique,",
          "B. se localise au niveau des dents monaradiculées,",
          "C. est un épaississement physiologique qui atteint les sujets jeunes,",
          "D. est à l'origine d’absence de dents antagonistes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'hypercémentose est un épaississement pathologique du cément. L'absence de dent antagoniste (D) est une cause, pas une conséquence."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. ne subit pas de résorption physiologique,",
          "B. participe à la fixation et l'attachement de la dent dans son alvéole,",
          "C. ne participe pas aux échanges avec la pulpe et le desmodonte,",
          "D. Joue un rôle de protection de la dentine."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le cément participe à l'attache (B) et protège la dentine (D). Il est avasculaire et n'a pas d'échanges (C). Il ne subit pas de résorption physiologique (A) (sauf pour les dents temporaires)."
      },
      {
        "questionText": "Le cément acellulaire :",
        "options": [
          "A. Se forme essentiellement sur le tiers apical de la dent",
          "B. Est un cément de réparation",
          "C. Les fibres de sharpey constituent la partie la plus importante de sa satructure",
          "D. Son épaisseur est entre 150à 200 microns"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le cément acellulaire (primaire) est riche en fibres de Sharpey (extrinsèques). Il se trouve sur les 2/3 supérieurs (A), se forme lors de l'éruption (B), et son épaisseur est faible (20-50 µm) (D)."
      }
    ]
  },
  {
    "title": "L'os alvéolaire",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La crête alvéolaire :",
        "options": [
          "A. C'est le point où se réunissent les tables osseuses et l'os de la paroi alvéolaire",
          "B. Est située 1.5 à 2mm au-dessus du niveau de la jonction amélo-cémentaireu",
          "C. Les malpositions dentaires n'entrainent pas des modifications du profil de la crête alvéolaire",
          "D. Elle est normalement légèrement arrondie en bourrelet."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La crête est la jonction des tables et de la paroi alvéolaire (A) et présente un contour arrondi (D). Elle est située 1.5-2mm en apical (en dessous) de la JEC (B) et les malpositions peuvent modifier son profil (C)."
      },
      {
        "questionText": "Histologiquement, l'os alvéolaire est constitué :",
        "options": [
          "A. D'un os compact au niveau du septum interdentaire.",
          "B. D'un os spongieux au niveau des corticales.",
          "C. D'un périoste qui recouvre la corticale interne.",
          "D. De fibres de Sharpey incluses au niveau des septa.",
          "E. D'un tissu osseux fasciculé formant la paroi alvéolaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La paroi de l'alvéole dentaire, aussi appelée lamina dura, est constituée d'os fasciculé, nommé ainsi car il reçoit l'insertion des faisceaux de fibres de Sharpey. Les septa sont spongieux et les corticales sont compactes."
      },
      {
        "questionText": "L'os alvéolaire est un tissu dynamique en perpétuel remaniement, les quatre phases de ce remaniement sont :",
        "options": [
          "A. Activation - Résorption - Formation - Inversion.",
          "B. Activation - Résorption - Inversion - Formation.",
          "C. Formation - Activation - Résorption - Inversion.",
          "D. Résorption - Activation Formation - Inversion.",
          "E. Activation - Inversion - Formation - Résorption."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le cycle du remodelage osseux suit une séquence précise : l'Activation des précurseurs des ostéoclastes, la Résorption de l'os ancien, une phase d'Inversion où le site est préparé, et enfin la Formation d'os nouveau par les ostéoblastes."
      },
      {
        "questionText": "La formation de l'os alvéolaire :",
        "options": [
          "A. Se fait vers la fin du 3ème mois de la vie intra utérine.",
          "B. Débute lorsque la formation du cément primaire est complètement achevée.",
          "C. Est induite par l'action des ostéoclastes.",
          "D. Débute au stade de la lame primitive.",
          "E. Dérive de la face externe du sac folliculaire du germe dentaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L'os alvéolaire est d'origine ectomésenchymateuse et dérive de la partie externe du sac folliculaire qui entoure le germe dentaire. Sa formation (ostéogenèse) débute à partir de la fin du stade de la cloche."
      },
      {
        "questionText": "La phase minérale du tissu osseux est composée de :",
        "options": [
          "1- Phosphate",
          "2- Calcium",
          "3- Magnésium",
          "4- Hydroxyapatite",
          "5- Carbonate"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La phase minérale de l'os, qui représente environ 70% de son poids, est principalement constituée de phosphate et de calcium, sous forme de cristaux d'hydroxyapatite. Elle contient aussi d'autres ions comme le magnésium et le carbonate."
      },
      {
        "questionText": "Les tables osseuses:",
        "options": [
          "A. Sont constituées de corticales osseuses externes",
          "B. L'épaisseur est plus réduite au niveau du maxillaire qu'au niveau de la mandibule",
          "C. Ces corticales sont constituées de tissu osseux spongieux",
          "D. L'épaisseur est plus épaisse au niveau postérieur qu'au niveau antérieur."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'épaisseur des tables (faites d'os compact) est plus faible au maxillaire (B) et plus faible en antérieur qu'en postérieur (D). Elles sont formées de corticales externes et internes (A)."
      },
      {
        "questionText": "L'os alvéolaire est :",
        "options": [
          "A. Situé dans le prolongement de l'os basal.",
          "B. Séparé de l'os basal par une ligne de démarcation.",
          "C. Assure la fixation des fibres ligamentaires.",
          "D. Le principal tissu de soutien de l'organe dentaire."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'os alvéolaire est dans le prolongement de l'os basal (A), sans ligne de démarcation nette (B). Il assure la fixation des fibres (C) et est le principal tissu de soutien (D)."
      },
      {
        "questionText": "Les septa interdentaires :",
        "options": [
          "A. Sont situés entre les racines d'une même dent.",
          "B. Séparent deux alvéoles contiguës.",
          "C. Sont constituées d'os compact.",
          "D. Sont situés entre les racines de deux dents adjacentes."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les septa interdentaires (ou interalvéolaires) séparent les alvéoles de deux dents adjacentes (B, D). Les septa interradiculaires (A) séparent les racines d'une même dent. Ils sont constitués d'os spongieux (C)."
      },
      {
        "questionText": "Une déhiscence est :",
        "options": [
          "A. Un défaut anatomique.",
          "B. Une dénudation isolée de l'os alvéolaire qui se prolonge jusqu'au rebord alvéolaire",
          "C. Une partie isolée où la racine est mise à nu, le bord alvéolaire est intact.",
          "D. La crête marginale étant relativement intacte."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Une déhiscence est un défaut anatomique (A) où la dénudation de la racine atteint le rebord alvéolaire (B). Si le rebord est intact (C, D), c'est une fenestration."
      },
      {
        "questionText": "La paroi alvéolaire est :",
        "options": [
          "A. Une mince couche de tissu osseux spongieux.",
          "B. Constituée d'une mince couche de tissu osseux fasciculé.",
          "C. Caractérisée par une grande opacité sur les clichés radiographiques.",
          "D. Limite l'alvéole et entoure la racine dentaire."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La paroi alvéolaire (lamina dura) limite l'alvéole (D), est constituée d'os fasciculé (B) et apparaît radio-opaque (C). Elle est composée d'os compact (A)."
      },
      {
        "questionText": "L'os fasciculé est appelé ainsi en raison de la :",
        "options": [
          "A. Formation de multiples lacunes au niveau de I 'os cortical",
          "B. Présence de fibres de sharpey",
          "C. Incorporation de fibres intrinsèques dans l'os alvéolaire",
          "D. Présence de dépôts cémentaires dans l'os alvéolaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le terme 'os fasciculé' (pour la paroi alvéolaire) provient de l'insertion massive des fibres de Sharpey (faisceaux de collagène) dans cet os."
      },
      {
        "questionText": "Le composant principal des tables osseuses vestibulaire et linguale est représenté par",
        "options": [
          "A. Os cortical",
          "B. Os spongieux",
          "C. Os trabéculaire",
          "D. Moelle osseuse"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les tables osseuses (vestibulaire et linguale) sont principalement formées d'os cortical (compact)."
      },
      {
        "questionText": "Le système de Havers est absent au niveau de :",
        "options": [
          "A. La corticale externe",
          "B. L'os lamellaire",
          "C. Travées spongieuses",
          "D. L'os fasciculé"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les systèmes de Havers (ostéons) sont l'unité structurelle de l'os compact (corticales, os lamellaire), mais ils sont absents des fines travées de l'os spongieux."
      },
      {
        "questionText": "La A paro alvéolaire:",
        "options": [
          "A. Est aussi nommée lamina dura pour son aspect radio-class",
          "B. Donne insertion aux fibres de Sharpey",
          "C. Se confond toujours interne avec la corticale",
          "D. Est faite de tissu osseux fasciculé"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La paroi alvéolaire est appelée lamina dura en radio (A), donne insertion aux fibres de Sharpey (B), et est faite d'os fasciculé (D)."
      },
      {
        "questionText": "Le périoste :",
        "options": [
          "A. Est constitué d'une double membrane",
          "B. Recouvre les corticales externes des tables assesses",
          "C. Est situé en dessous de la gencive attachée",
          "D. Est doté d'un faible potentiel osteogène>"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le périoste est une double membrane (A) située sous la gencive attachée (C). Il recouvre les corticales externes et internes (B) et a un fort potentiel ostéogène (D)."
      },
      {
        "questionText": "L'os alvéolaire est constitué de :",
        "options": [
          "A. Deux tables osseuses",
          "B. Quatre tables osseuses",
          "C. Des alvéoles cementaires",
          "D. Des septa inter radiculaires"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "L'os alvéolaire comprend deux tables osseuses (vestibulaire et linguale/palatine), les alvéoles dentaires, et les septa (inter-dentaires et inter-radiculaires)."
      },
      {
        "questionText": "Les fenestrations sont :",
        "options": [
          "A. des Anomalies anatomiques",
          "B. Des résorptions osseuses",
          "C. Des zones isolées où la racine est mise à nu",
          "D. Des zones sans rebord marginal osseux"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les fenestrations sont des zones isolées (fenêtres) où la racine est mise à nu, mais le rebord osseux marginal est intact. La déhiscence (D) est l'absence du bord marginal."
      },
      {
        "questionText": "les ostéoblastes:",
        "options": [
          "A. Sont des cellules d'origine mésenchymateuse",
          "B. Sont responsable de la résorption osseuse",
          "C. Sont des cellules incorporées dans le tissu ostéoïde calcifié à l'intérieur de lacunes dites ostéoplastes",
          "D. Ont un rôle dans la réparation osseuse"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les ostéoblastes sont d'origine mésenchymateuse (A) et ont pour fonction la synthèse (formation) et la réparation osseuse (D). Les ostéoclastes (B) résorbent l'os. Les ostéocytes (C) sont les cellules incorporées."
      },
      {
        "questionText": "La crête alvéolaire :",
        "options": [
          "A. C'est le point où se réunissent les tables osseuses et l'os de la paroi alvéolaire",
          "B. Elle est située 1.5 à 2mm au-dessus du niveau de la jonction amélo-cémentaire",
          "C. Les malpositions dentaires n'entrainent pas de modifications du profil de la crête alvéolaire",
          "D. elle est normalement légèrement arrondie en bourrelet"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La crête est la jonction des tables et de la paroi (A) et est normalement arrondie (D). Elle est située 1.5-2mm en dessous (apicalement) de la JEC (B) et les malpositions modifient son profil (C)."
      },
      {
        "questionText": "Les septa inter dentaires :",
        "options": [
          "A. Sont situés entre les racines d'une même dent",
          "B. Séparent deux alvéoles contigués",
          "C. Sont constitués d'os compact",
          "D. Sont creusés de canaux par où passent les vaisseaux sanguins et les nerfs"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les septa interdentaires séparent deux alvéoles voisines (B) et sont traversés par des canaux neurovasculaires (D). Ils sont faits d'os spongieux (C)."
      },
      {
        "questionText": "Une déhiscence :",
        "options": [
          "A. Est un défaut anatomique",
          "B. Est une dénudation isolée de l'os alvéolaire en forme de V qui se prolonge jusqu'au rebord alvéolaire",
          "C. Est une partie isolée où la racine est mise à nu. le bord alvéolaire est intact",
          "D. La crête marginale étant relativement Intacte"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La déhiscence est un défaut (A) caractérisé par une absence de bord marginal osseux, formant une dénudation en V (B). Si le bord est intact (C), c'est une fenestration."
      },
      {
        "questionText": "La paroi alvéolaire :",
        "options": [
          "A. Limite l'alvéole et entoure la racine dentaire",
          "B. Est une mince couche de tissu osseux spongieux",
          "C. Donne insertion aux fibres du ligament parodontal",
          "D. Est caractériste par une ligne radio-claire sur les clichés radiographiques"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La paroi alvéolaire limite l'alvéole (A) et donne insertion aux fibres du ligament (fibres de Sharpey) (C). Elle est faite d'os compact/fasciculé (B) et apparaît radio-opaque (lamina dura) (D)."
      },
      {
        "questionText": "Le périoste:",
        "options": [
          "A. Recouvre la surface externe de l'os alvéolaire.",
          "B. Contient des cellules ostéoprogénitrices.",
          "C. Est composé d'une seule membrane.",
          "D. Est composé d'une double membrane."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le périoste est une double membrane (D) qui recouvre la surface externe de l'os (A). Sa couche interne est ostéogène et contient des cellules ostéoprogénitrices (B)."
      },
      {
        "questionText": "La migration dentaire physiologique :",
        "options": [
          "A. Est un processus progressif. discontinu, pendant toute la vie de la dent.",
          "B. Est de direction mésio-occlusale.",
          "C. Est consécutive à l'usure des points de contacts inter-dentaires.",
          "D. S'accompagne d'apposition osseuse au fond de l'alvéole"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "C'est un processus continu (A), de direction mésio-occlusale (B), qui compense l'usure des points de contact (C). L'apposition se fait sur le versant distal (D)."
      },
      {
        "questionText": "l'os alvéolaire est constitué :",
        "options": [
          "A. D'os spongieux",
          "B. D'os compact",
          "C. D'os fibrillaire",
          "D. De crête alvéolaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'os alvéolaire est constitué de couches d'os compact (corticales, paroi alvéolaire) et d'os spongieux intermédiaire. La limite cervicale est la crête alvéolaire."
      },
      {
        "questionText": "Les septa inter dentaires et inter radiculaires:",
        "options": [
          "A. Ont une pointe cervicale",
          "B. Leur pointe cervicale est réduite au niveau des molaires.",
          "C. Ont une forme pyramidale",
          "D. Ils contiennent des artères et des nerfs."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Les septa ont une forme pyramidale (C) avec une pointe cervicale (A). Ils sont traversés par des canaux nourriciers (D). La pointe est réduite au niveau incisivo-canin (B)."
      },
      {
        "questionText": "L'hypo fonction occlusale entraine:",
        "options": [
          "A. Un élargissement du ligament alvéolaire",
          "B. Une résorption osseuse",
          "C. Une diminution de la hauteur de l'alvéole",
          "D. Une atrophie fonctionnelle."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "L'hypofonction (manque de stimulation) entraîne un rétrécissement du ligament, une diminution du nombre de travées osseuses, une diminution de la hauteur de l'alvéole et une atrophie fonctionnelle."
      },
      {
        "questionText": "Parmi les caractéristiques d'un os sain:",
        "options": [
          "A. Un contour festonné suivant le collet des dents",
          "B. Présence de déhiscence",
          "C. Bord cervical se situant à 1 mm en deçà de la limite email-cément",
          "D. Lamina dura radio opaque et discontinue."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'os sain a un contour festonné (A) et son sommet se situe à environ 1 mm sous la JEC (C). La lamina dura doit être continue (D). La déhiscence (B) est un défaut."
      },
      {
        "questionText": "La crête alvéolaire :",
        "options": [
          "A. C'est le point où se réunissent les tables osseuses et l'os de la paroi alvéolaire",
          "B. Elle est située 1.5 à 2mm au-dessus du niveau de la jonction amélo-cémentaire",
          "C. Les malpositions dentaires n'entrainent pas de modifications du profil de la crête alvéolaire",
          "D. elle est normalement légèrement arrondie en bourrelet"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "C'est la jonction des tables et de la paroi (A), normalement arrondie (D). Elle est située 1.5-2mm en dessous (apicalement) de la JEC (B)."
      },
      {
        "questionText": "les septainterdentaires :",
        "options": [
          "A. Sont situés entre les racines d'une même dent,",
          "B. Séparent deux alvéoles contiguës,",
          "C. Sont constituées d'os compact.",
          "D. Chez l'enfant, les crêtes des septa inter-dentaires sont plates."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les septa interdentaires séparent deux alvéoles contiguës (B). Ils sont en os spongieux (C). Chez l'enfant, leurs crêtes sont plates (D)."
      },
      {
        "questionText": "l'os alvéolaire :",
        "options": [
          "A. Est situé dans le prolongement de l'os basal,",
          "B. Est séparé de l'os basal par une ligne de démarcation.",
          "C. Assure la fixation des fibres ligamentaires,",
          "D. Subit une hypertrophie progressive avec l’âge."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'os alvéolaire est dans le prolongement de l'os basal (A) et assure la fixation des fibres (C). Il n'y a pas de ligne de démarcation nette (B). Il a tendance à s'atrophier avec l'âge ou l'hypofonction (D)."
      },
      {
        "questionText": "La paroi alvéolaire",
        "options": [
          "A. limite l'alvéole et entoure la racine dentaire,",
          "B. est une mince couche de tissu osseux spongieux,",
          "C. donne insertion aux fibres du ligament parodontal,",
          "D. est caractérisée par une grande opacité sur les clichés radiographiques."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La paroi alvéolaire (lamina dura) limite l'alvéole (A), donne insertion aux fibres (C) et est radio-opaque (D). Elle est faite d'os compact/fasciculé (B)."
      },
      {
        "questionText": "Une déhiscence:",
        "options": [
          "A. est un défaut anatomique",
          "B. est une dénudation isolée de l'os alvéolaire qui se prolonge jusqu'au rebord alvéolaire,",
          "C. est une partie isolée où la racine est mise à nu, le bord alvéolaire est intact,",
          "D. la crête marginale étant relativement intacte."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La déhiscence est un défaut anatomique (A) où la dénudation osseuse atteint le rebord alvéolaire (B). Si le bord est intact (C, D), c'est une fenestration."
      },
      {
        "questionText": "La labilité physiologique de l'os alvéolaire provoque du côté pression une:",
        "options": [
          "1- Circulation sanguine active",
          "2- Transformation des fibroblastes en ostéoclastes",
          "3- Sécrétion d'une substance ostéoide",
          "4- Destruction osseuse par résorption",
          "5- Augmentation du nombre de fibroblastes"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La pression sur l'os diminue la circulation sanguine, entraîne la transformation de cellules (comme les fibroblastes) en ostéoclastes (2), et provoque une destruction osseuse par résorption (4)."
      },
      {
        "questionText": "L'os alvéolaire est un tissu dynamique en perpétuel remaniement, les quatre phases de ce remaniement sont :",
        "options": [
          "A. Activation - Résorption - Formation - Inversion.",
          "B. Activation - Résorption - Inversion - Formation.",
          "C. Formation - Activation - Résorption - Inversion.",
          "D. Résorption - Activation Formation - Inversion.",
          "E. Activation - Inversion - Formation - Résorption."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le cycle de remodelage osseux suit l'ordre : Activation (des précurseurs), Résorption (par les ostéoclastes), Inversion (phase de transition), et Formation (par les ostéoblastes)."
      },
      {
        "questionText": "Histologiquement, l'os alvéolaire est constitué :",
        "options": [
          "A. D'un os compact au niveau du septum interdentaire.",
          "B. D'un os spongieux au niveau des corticales.",
          "C. D'un périoste qui recouvre la corticale interne.",
          "D. De fibres de Sharpey incluses au niveau des septa.",
          "E. D'un tissu osseux fasciculé formant la paroi alvéolaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La paroi alvéolaire (lamina dura) est formée de tissu osseux fasciculé (E). Les septa (A, D) sont spongieux. Les corticales (B) sont compactes. Le périoste (C) recouvre la corticale externe."
      },
      {
        "questionText": "La formation de l'os alvéolaire :",
        "options": [
          "A. Se fait vers la fin du 3ème mois de la vie intra utérine.",
          "B. Débute lorsque la formation du cément primaire est complètement achevée.",
          "C. Est induite par l'action des ostéoclastes.",
          "D. Débute au stade de la lame primitive.",
          "E. Dérive de la face externe du sac folliculaire du germe dentaire."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L'os alvéolaire dérive du sac folliculaire (E). L'ostéogenèse débute vers la fin du stade de la cloche (D)."
      },
      {
        "questionText": "La phase minérale du tissu osseux est composée de :",
        "options": [
          "1- Phosphate",
          "2- Calcium",
          "3- Magnésium",
          "4- Hydroxyapatite",
          "5- Carbonate"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La fraction minérale (70% du poids) est constituée principalement de phosphate et de calcium, ainsi que de magnésium, carbonate, etc.."
      }
    ]
  },
  {
    "title": "Collagène",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le collagène est une protéine basique car elle contient :",
        "options": [
          "A. Un nombre réduit de groupes carboxyles",
          "B. Des chaines polypeptidiques",
          "C. Un nombre important d'acides aminés avec glycine et alanine",
          "D. Des ponts disulfures"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le collagène est considéré comme basique car il contient un faible nombre de groupes carboxyles (acides), ce qui augmente sa basicité relative. Il ne contient pas de ponts disulfures (D)."
      },
      {
        "questionText": "Le collagène est synthétisé dans sa première phase au niveau :",
        "options": [
          "A. De l'épithélium.",
          "B. Du réticulum endoplasmique.",
          "C. De l'appareil de Golgi.",
          "D. De la membrane cytoplasmique.",
          "E. Du noyau du fibroblaste."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La première étape de la synthèse intracellulaire du collagène est la traduction des chaînes polypeptidiques pro-alpha sur les ribosomes attachés au réticulum endoplasmique granulaire."
      },
      {
        "questionText": "Le collagène est une protéine hydrophile car elle contient :",
        "options": [
          "A. L'hydroxyproline et l'hydroxylysine",
          "B. Une proportion faible de chaines latérales lipophiles",
          "C. Des groupes carboxyles",
          "D. Des ponts hydrogénés"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Son caractère hydrophile est favorisé par une faible proportion de chaînes latérales lipophiles (B). Les autres éléments (A, C, D) contribuent à la fixation de l'eau mais ne sont pas la raison principale."
      },
      {
        "questionText": "L'étape extracellulaire de la formation et la maturation du collagène comporte :",
        "options": [
          "A. La formation de la chaine pro a",
          "B. La synthèse polypeptidique",
          "C. La formation de la triple hélice",
          "D. La sécrétion."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La phase extracellulaire commence par la sécrétion (D). Elle inclut la synthèse polypeptidique (B) et la formation de la triple hélice (C). La formation de la chaîne pro-α (A) est intracellulaire."
      },
      {
        "questionText": "Le tropocollagène est :",
        "options": [
          "A. Le monomère du collagène fibreux insoluble",
          "B. Constitué d'acides aminés avec prédominance de la glycine",
          "C. Constitué de 4 chaines a",
          "D. Une glycoprotéine stabilisée par des liaisons hydrogénées."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "C'est le monomère insoluble du collagène (A), très riche en glycine (B). C'est une glycoprotéine (D). Il est formé de 3 chaînes α (C)."
      },
      {
        "questionText": "Parmi les pathologies liées aux défauts de synthèse du collagène, on a :",
        "options": [
          "A. Le scorbut",
          "B. La maladie des os de verre",
          "C. Les collagénoses",
          "D. Le sida"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les pathologies incluent le scorbut (carence Vit C), la maladie des os de verre (ostéogenèse imparfaite), et les collagénoses."
      },
      {
        "questionText": "Le collagène :",
        "options": [
          "A. Vient du grec Kolla qui veut dire colle",
          "B. Est composé de 2 chaînes polypeptidiques associées nommées chaînes Béta",
          "C. En microscopie électronique, ses fibrilles apparaissent striées",
          "D. Présente différents types I, II, III, IV"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Le nom vient du grec 'Kolla' (colle) (A). Les fibrilles sontstriées (C). Il existe plusieurs types (I, II, III, IV, V...) (D). Il est composé de 3 chaînes alpha (B)."
      },
      {
        "questionText": "Dans la structure chimique du collagène :",
        "options": [
          "A. Le tropocollagene est l'unité moleculaire fondamentale de collagène",
          "B. Son poids moleculaire est de 300000 dalton",
          "C. Sa longueur de 1000 à 1500 A°",
          "D. Constitué de 02 chaines alpha enroulees en double bélice"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le tropocollagène est l'unité fondamentale (A) avec un poids moléculaire de 300 000 Da (B). Sa longueur est de 2800-3000 A° (C). Il est formé de 3 chaînes alpha (D)."
      },
      {
        "questionText": "Il existe différents types de collagène :",
        "options": [
          "A. Le type I est retrouve dans l'email",
          "B. Le type II est retrouvé dans la substance fondamentale du cartilage",
          "C. Le type III est retrouvé dans la parei des vaisseaux sanguins.",
          "D. Le type IV est retrouvé dans les James basales"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Type II est dans le cartilage (B). Type III est dans les muscles et parois des vaisseaux (C). Type IV est dans les lames basales (D). Type I (A) est dans la dentine, os, cément, etc., mais pas l'émail."
      },
      {
        "questionText": "Dans la chaine alpha :",
        "options": [
          "A. Il existe près de 500 acides aminés",
          "B. Chaque 3rd position dans la séquence d'une chaine de collagène est use prelia",
          "C. Il existe des glucides fixés par l'Hydroxylysine",
          "D. n’existe 02 groupements amine terminal NH2"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La chaîne alpha contient près de 1000 acides aminés (A). La Glycine (pas proline) est en 3ème position (B). Des glucides sont fixés par l'Hydroxylysine (C). Elle a un groupement amine et un carboxyle (D)."
      },
      {
        "questionText": "Lors de la biosynthèse de collagène :",
        "options": [
          "A. II est synthétisé par des cellules d'origine mésenchymatesse",
          "B. L'Hydroxylation des acides aminés ne peut se faire sans la présence de vitamine C",
          "C. Les chaines pre-alpha vont se lier grâce à des ponts di-sulfares",
          "D. Les protéoglycanes attachées aux fibres de collagène diminuent sen insolubilité"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Il est synthétisé par des cellules mésenchymateuses (A). L'hydroxylation nécessite la Vitamine C (B). Les chaînes pro-alpha (pas pre-alpha) se lient par ponts disulfures (C). Les protéoglycanes augmentent l'insolubilité (D)."
      },
      {
        "questionText": "La maturation du collagène",
        "options": [
          "A. Se fait lors de la phase intracellulaire",
          "B. Se fait lors de la phase extracellulaire",
          "C. Le procollagène se transforme en tropocollagène après adjonction de ses estrémités globulaires par des protéases spécifiques",
          "D. Chaque molecule est décalée de la molecule adjacente sur 1/4 de sa longueur."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La maturation (assemblage en fibrilles) est extracellulaire (B). Le procollagène devient tropocollagène par coupure (pas adjonction) des extrémités (C). Les molécules s'alignent avec un décalage de 1/4 de leur longueur (D)."
      },
      {
        "questionText": "Le collagène est synthétisé dans sa première phase au niveau :",
        "options": [
          "A. Du noyau du fibroblaste.",
          "B. Du réticulum endoplasmique",
          "C. De l'appareil de Golgi",
          "D. De la membrane cytoplasmique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La biosynthèse du collagène (synthèse des chaînes pro-alpha et hydroxylation) débute dans le réticulum endoplasmique granulaire (REG)."
      },
      {
        "questionText": "Les fibroblastes peuvent phagocyter :",
        "options": [
          "A. Le collagène natif.",
          "B. Le collagène réticulé",
          "C. Le tropocollagène",
          "D. Le collagène insoluble."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les fibroblastes sont capables de phagocyter et de dégrader les fibrilles de collagène insoluble."
      },
      {
        "questionText": "La destruction enzymatique pathologique du collagène se fait par :",
        "options": [
          "A. Les leucocytes polynucléaires",
          "B. La diminution des activateurs",
          "C. L'absence de pro collagénase",
          "D. Les macrophages."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La destruction pathologique peut être due à une augmentation des collagénases tissulaires, ou à l'arrivée de cellules (leucocytes polynucléaires, macrophages) ou de bactéries porteuses de collagénases."
      },
      {
        "questionText": "Le collagène est synthétisé dans sa première phase au niveau:",
        "options": [
          "A. De l'épithélium",
          "B. Du réticulum endoplasmique",
          "C. De l'appareil de Golgi",
          "D. De la membrane cytoplasmique",
          "E. Du noyau des fibroblastes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La première phase de la synthèse (traduction des chaînes polypeptidiques) se déroule sur les ribosomes liés au réticulum endoplasmique."
      },
      {
        "questionText": "L'hydroxylation de la proline et de la lysine a besoin :",
        "options": [
          "A. La glycosyltransferase",
          "B. L'oxygène sanguine",
          "C. La proline-hydroxylase",
          "D. La concentration en vitamine"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "L'hydroxylation est catalysée par des enzymes (comme la proline-hydroxylase) (C) et nécessite de l'oxygène sanguin (B) et une concentration suffisante en vitamine C (D)."
      },
      {
        "questionText": "Le procollagène",
        "options": [
          "A. Est la molécule formée au cours de la biosynthèse du collagène,",
          "B. Est une molécule extra-cellulaire,",
          "C. Est formée d'une seule chaine alpha,",
          "D. Est formée de 3 chaine alpha."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le procollagène est la molécule précurseur formée à l'intérieur de la cellule (A). Elle est constituée de trois chaînes alpha enroulées en triple hélice (D)."
      },
      {
        "questionText": "Dans une chaine alpha du collagène",
        "options": [
          "A. L'alanine est l'acide aminé le plus présent,",
          "B. La glycine est l'acide aminé le plus présent,",
          "C. Constitué par la réplétion de 4 acides aminés,",
          "D. Constitué par la réplétion de 3 acides aminés."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La glycine est l'acide aminé le plus abondant, représentant 1/3 de tous les acides aminés (Gly-X-Y)."
      },
      {
        "questionText": "Le tropocollagène :",
        "options": [
          "A. Représente la chaine alpha du collagène,",
          "B. Est constitué d'acides aminés,",
          "C. Représente l'unité structurale du collagène,",
          "D. Contient du tryptophane."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le tropocollagène est l'unité structurale (C). C'est une glycoprotéine formée de 3 chaînes polypeptidiques (donc constituée d'acides aminés) (B). Le collagène type I ne contient pas de tryptophane (D)."
      }
    ]
  },
  {
    "title": "Physiologie de l’appareil manducateur",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le mouvement de rotation fait intervenir :",
        "options": [
          "A. Le compartiment condylo-discal.",
          "B. Le glissement du condyle mandibulaire en avant",
          "C. La contraction'des muscles abaisseurs sous hyoidien",
          "D. Le compartiment supérieur."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le mouvement de rotation pure se fait dans le compartiment inférieur (condylo-discal). Le glissement (B) se fait dans le compartiment supérieur (D)."
      },
      {
        "questionText": "La diduction consiste en :",
        "options": [
          "A. Une rotation de la mandibule",
          "B. Un déplacement de la mandibule vers le côté pivotant",
          "C. Une contraction du muscle temporal",
          "D. Une formation d'un angle appelé l'angle de Bennett"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La diduction est un déplacement latéral de la mandibule vers le côté travaillant (ou pivotant). Ce mouvement est accompagné, du côté opposé (côté non-travaillant), par un déplacement du condyle qui forme un angle avec le plan sagittal, appelé l'angle de Bennett."
      },
      {
        "questionText": "La position d'intercuspidation maximale est :",
        "options": [
          "A. La position de la mandibule qui assure un maximum de contact avec les dents antagonistes.",
          "B. Le rapport de contact entre les surfaces occlusales.",
          "C. La position de la denture dans laquelle les dents sont en contact.",
          "D. La position de repos"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La position d'intercuspidation maximale (PIM) est spécifiquement la position qui offre le plus grand nombre de points de contact entre les dents des deux arcades."
      },
      {
        "questionText": "La propulsion :",
        "options": [
          "A. Consiste en un glissement vers l'arrière et en bas de la mandibule,",
          "B. Les muscles associés sont les ptérygoïdiens latéraux,",
          "C. Les muscles associés sont les temporaux et les digastriques,",
          "D. Consiste en un glissement vers l'avant et en bas de la mandibule."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La propulsion est le mouvement de la mandibule qui glisse vers l'avant et vers le bas. Ce mouvement est principalement initié par la contraction bilatérale des muscles ptérygoïdiens latéraux. La rétropulsion, le mouvement inverse, est réalisée par les muscles temporaux et digastriques."
      },
      {
        "questionText": "La diduction:",
        "options": [
          "A. Au cours de ce mouvement, la mandibule se porte latéralement,",
          "B. Le disque et la tête mandibulaire solidaires glissent en avant et en bas,",
          "C. Les muscles contribuant sont les muscles: digastriques, mylo-hyoïdiens et géniohyoïdiens,",
          "D. Les muscles contribuant à la diduction sont: temporaux, masséters et ptérygoïdiens médiaux."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La diduction est le mouvement par lequel la mandibule se déplace latéralement. C'est un mouvement asymétrique : le condyle du côté où le mouvement se dirige (côté travaillant) effectue une rotation, tandis que le condyle du côté opposé (côté non-travaillant) effectue une translation vers l'avant, le bas et l'intérieur."
      }
    ]
  },
  {
    "title": "ATM",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Par définition l'articulation temporo-mandibulaire est :",
        "options": [
          "A. Une articulation qui fixe la mandibule à la fosse glénoïde.",
          "B. Une articulation bicondylienne.",
          "C. Une articulation paire et asymétrique.",
          "D. Une articulation située en avant du conduit auditif externe."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'articulation temporo-mandibulaire (ATM) est une articulation bicondylienne, car elle implique les deux condyles mandibulaires. Elle se situe juste en avant du conduit auditif externe. C'est une articulation paire et symétrique (et non asymétrique) qui unit la mandibule à l'os temporal."
      },
      {
        "questionText": "La capsule articulaire de l'articulation temporo-mandibulaire est :",
        "options": [
          "1- Une gaine fibreuse épaisse et serrée",
          "2- De forme tronconique",
          "3- S'insère sur la cavité glénoïde et le col du temporal",
          "4- Un moyen d'union",
          "5- Renforcée en dehors par le ligament latéral externe"
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "La capsule est un moyen d'union de l'articulation (4), de forme tronconique (2), et elle est renforcée latéralement par le ligament latéral externe (5). C'est une gaine mince et lâche, qui s'insère sur l'os temporal et le col du condyle mandibulaire."
      },
      {
        "questionText": "Parmi les ligaments intra-articulaires de l'ATM, nous avons :",
        "options": [
          "A. Le ligament stylo-mandibulaire.",
          "B. Le ligament ptérygo-mandibulaire.",
          "C. Le ligament latéral externe.",
          "D. Le ligament sphéno-mandibulaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le ligament latéral externe (ou temporo-mandibulaire latéral) est un ligament principal de soutien, considéré comme intrinsèque (intra-articulaire) car il renforce la capsule. Les ligaments stylo-mandibulaire, ptérygo-mandibulaire et sphéno-mandibulaire sont des ligaments accessoires, considérés comme extrinsèques (extra-articulaires)."
      },
      {
        "questionText": "La capsule articulaire :",
        "options": [
          "A. Est un moyen d'union.",
          "B. Est une gaine fibreuse assez mince et lâche de forme tronconique.",
          "C. C'est un tendon mince et fibreux de nature cartilagineuse.",
          "D. Divise la cavité articulaire en deux segments par la scissure de Glasser."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La capsule articulaire est un manchon fibreux qui constitue un moyen d'union pour l'ATM. Elle se présente comme une gaine mince et lâche, en forme de cône tronqué, qui entoure l'ensemble de l'articulation."
      },
      {
        "questionText": "Le condyle temporal:",
        "options": [
          "A. Est une saillie oblongue,",
          "B. Est une simple cavité de réception pour le condyle mandibulaire,",
          "C. Est formée par la racine transverse du zygoma,",
          "D. Est situé en arrière dans l'écartement des deux racines du zygoma."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le condyle du temporal est la surface articulaire convexe de l'os temporal. Il est formé par la racine transverse du processus zygomatique. La cavité glénoïde (fosse mandibulaire) est la cavité de réception située en arrière de ce condyle."
      },
      {
        "questionText": "Le ligament latéral externe :",
        "options": [
          "A. Il est court, épais, en éventail ouvert en haut et très puissant,",
          "B. Il représente à lui seul le principal moyen d'union de l'articulation,",
          "C. Il est résistant et renforce en dedans la capsule,",
          "D. Il tapisse la face profonde de la capsule."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le ligament latéral externe est un ligament intrinsèque (renforçant la capsule) qui est court, épais, puissant et en forme d'éventail. Il est considéré comme le principal moyen de renforcement et d'union de l'articulation."
      },
      {
        "questionText": "La mandibule est un os Impair médian et symétrique :",
        "options": [
          "A. Il s'articule par l'intermédiaire de son processus condylaire avec le temporal, au niveau de l’articulation temporo-mandibulaire,",
          "B. Il s'articule par l'intermédiaire de son processus temporal avec les ligaments au niveau de l'articulation temporo-mandibulaire,",
          "C. il s'articule par l'intermédiaire de son processus maxillaire avec le condyle au niveau de l'articulation temporo-mandibulaire,",
          "D. Il s'articule par l'intermédiaire de son processus condylaire avec le temporal au niveau de l'articulation maxillo-mandibulaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La mandibule est un os unique qui s'articule avec les os temporaux du crâne. Cette articulation se fait par l'intermédiaire de ses processus condylaires (condyles), formant ainsi l'articulation temporo-mandibulaire (ATM)."
      },
      {
        "questionText": "les articulations temporo-mandibulaire : Paires et symétriques, de type Diarthrose, bicondylienne; :",
        "options": [
          "A. Relient la mandibule au crâne,",
          "B. C'est les seules articulations mobiles de la face,",
          "C. Elles comprennent des surfaces conjonctives temporale et condylienne mandibulaire,",
          "D. Il s'agit d'un système ligamentaire."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Les articulations temporo-mandibulaires (ATM) assurent la liaison entre la mandibule et le crâne. Ce sont les seules articulations véritablement mobiles de la face. Elles sont complexes, impliquant des os, un disque, une capsule et des ligaments."
      },
      {
        "questionText": "La Capsule est un moyen d'union, elle est formée de :",
        "options": [
          "A. Manchon fibreux mince et lâche, de nature collagénique,",
          "B. Tendon mince et fibreux de nature cartilagineuse,",
          "C. Elle divise la cavité articulaire en quatre,",
          "D. Elle est Sus discale (temporo-discale ou de translation)."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La capsule articulaire est un manchon fibreux de nature collagénique, qui est à la fois mince et lâche pour permettre les mouvements. Le disque articulaire, situé à l'intérieur, divise la cavité en deux compartiments (supérieur et inférieur)."
      },
      {
        "questionText": "La capsule articulaire de l'articulation temporo-mandibulaire est :",
        "options": [
          "1- Une gaine fibreuse épaisse et serrée",
          "2- De forme tronconique",
          "3- S'insère sur la cavité glénoïde et le col du temporal",
          "4- Un moyen d'union",
          "5- Renforcée en dehors par le ligament latéral externe"
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "La capsule est un moyen d'union (4), de forme tronconique (2), et est renforcée en dehors par le ligament latéral externe (5). C'est une gaine mince et lâche (1 est faux) et s'insère sur le pourtour de la cavité glénoïde du temporal et le col du condyle mandibulaire (3 est faux)."
      }
    ]
  },
  {
    "title": "Le fluide gingival",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le fluide gingival devient fluide oral quand il se mêle à :",
        "options": [
          "A. la phase liquide de la salive ;",
          "B. A la phase liquide de l'eedème gingival ;",
          "C. A la phase séreuse émanant d'une gingivite ;",
          "D. A la phase liquide du milieu buccal."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le fluide oral est le terme général pour le liquide présent dans la bouche. Il est principalement composé de salive, mais inclut également le fluide gingival qui s'écoule du sulcus et s'y mélange."
      },
      {
        "questionText": "Le prélèvement par l'utilisation du périotron consiste à :",
        "options": [
          "A. Utiliser des pointes capillaires.",
          "B. Peser ces pointes dans leurs flacons de transport.",
          "C. Lire directement la quantité du fluide prélevé.",
          "D. Faire bouger le capillaire dans le sulcus.",
          "E. Convertir la valeur du fluide en microlitres."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le Periotron est un appareil qui mesure la capacité électrique d'une pointe de papier humidifiée par le fluide. Il donne une lecture numérique (en unités Periotron) qui doit ensuite être convertie en un volume réel (microlitres) à l'aide d'une courbe d'étalonnage."
      },
      {
        "questionText": "Le fluide gingival créviculaire est un véritable marqueur de la progression de la maladie parodontale, il est utilisé pour diagnostiquer",
        "options": [
          "A. les gingivites",
          "B. Les parodontites",
          "C. Quantifier les bactéries parodontopathogènes",
          "D. Il permet l'activation des ostéoclastes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'analyse du fluide gingival créviculaire (FGC) est un outil de diagnostic. Son volume et sa composition changent en présence de gingivites et de parodontites. Il contient des médiateurs inflammatoires qui peuvent activer les ostéoclastes, contribuant ainsi à la destruction osseuse."
      },
      {
        "questionText": "Le fluide gingival créviculaire (FGC) joue un rôle clé dans la pathogénie des gingivites et des parodontites :",
        "options": [
          "A. Vrai",
          "B. Faux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C'est vrai. Le FGC joue un rôle central dans la maladie parodontale en transportant des médiateurs inflammatoires, des enzymes de destruction tissulaire et des produits bactériens, participant activement à l'inflammation et à la dégradation des tissus."
      },
      {
        "questionText": "Le FGC, peut être mis en évidence par plusieurs méthodes : cochez au moins sur deux d'entre elles.",
        "options": [
          "A. Tests sanguins",
          "B. Tests biochimiques",
          "C. Tests des marqueurs spécifiques",
          "D. Tests salivaires."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le fluide gingival est prélevé directement au niveau du sulcus. Il peut ensuite être analysé par des tests biochimiques pour ses composants généraux, ou par des tests plus ciblés pour rechercher des marqueurs spécifiques de l'inflammation ou de la maladie."
      },
      {
        "questionText": "Le fluide gingival:",
        "options": [
          "A. Est un liquide inorganique",
          "B. Est un élément propre au milieu buccal",
          "C. Est un élément constant car très dépendant de l'inflammation de la gencive",
          "D. A pour origine les vaisseaux sanguins du chorion gingival"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le fluide gingival est un liquide organique (A est faux) qui est un élément propre au milieu buccal (B). Son origine est sérique, provenant des vaisseaux du chorion gingival (D). Sa présence est inconstante car elle dépend de l'état inflammatoire (C est faux)."
      },
      {
        "questionText": "Le fluide gingival",
        "options": [
          "A. Est d'origine sérique, vasculaire",
          "B. Filtre à partir du chorlen gingival à travers l'épithélium oral gingival",
          "C. Peut véhiculer certains antibiotiques vers le sulcus gingival",
          "D. Est un dément en transit dans la cavité buccale"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le FGC est d'origine sérique, issu des vaisseaux du chorion (A). Il peut transporter des antibiotiques de la circulation sanguine vers le sulcus (C). Il filtre à travers l'épithélium de jonction et sulculaire (B est faux) et est un élément propre mais provisoire, non de transit (D)."
      },
      {
        "questionText": "Dans la composition do fluide gingival :",
        "options": [
          "A. Les composants sont comparables à cens de la salive",
          "B. Le nombre des leucocytes augmente avec le degré de l'inflammation",
          "C. Les enzymes d'origine lysosomale contribuent au potentiel antibactérien du fluide",
          "D. Les facteurs du complément augmentent le degré de gingivite"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les composants du FGC sont comparables à ceux du sérum sanguin (A est faux). Le nombre de leucocytes augmente avec l'inflammation (B). Certaines enzymes lysosomales sont destructrices, d'autres sont antibactériennes (C est ambigu). Certaines prostaglandines, pas les facteurs du complément, sont directement liées à l'augmentation du degré de gingivite (D)."
      },
      {
        "questionText": "Le fluide gingival créviculaire :",
        "options": [
          "A. Est un exsudat",
          "B. Est un transsudat",
          "C. Peut participer A la formation de plaque bactérienne",
          "D. Peut renforcer l'attache de l'épithélium sulculaire"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "À l'état sain, le FGC est un transsudat (issu de la pression osmotique). En cas d'inflammation, il devient un exsudat. Il peut servir de milieu de culture et de substrat nutritionnel pour les bactéries, contribuant ainsi à la formation de la plaque."
      },
      {
        "questionText": "L'augmentation du flux du fluide gingival peut être due :",
        "options": [
          "A. A une inflammation du tissu gingival",
          "B. A la mastication d'aliments mous",
          "C. A l'effet de la progestérone et les astrogènes",
          "D. All brossage ct au massage dentaire"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Le flux de FGC augmente principalement avec l'inflammation. Il augmente également lors de stimulations mécaniques (mastication d'aliments durs, brossage, massage) et sous l'influence hormonale (contraceptifs, ovulation) qui augmente la perméabilité vasculaire."
      },
      {
        "questionText": "Le fluide gingival est:",
        "options": [
          "A. Un liquide sulculaire provisoire",
          "B. Un liquide sulculaire permanent",
          "C. Il se retrouve en abondance mélangé à la salive",
          "D. Rapidement dégluti et inconstant"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le fluide gingival est un liquide provisoire du sulcus. Sa présence et sa quantité sont inconstantes, dépendant de l'inflammation, et il est rapidement éliminé par la déglutition."
      },
      {
        "questionText": "Le fluide gingival résulte :",
        "options": [
          "A. D'une transudation seule",
          "B. D'une exsudation seule",
          "C. D'une exsudation ou d'une transudation",
          "D. Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le FGC est un transsudat (liquide qui suinte mécaniquement) à l'état sain et en très faible quantité. Il devient un exsudat (liquide suintant d'une surface enflammée) lors d'une gingivite ou parodontite."
      },
      {
        "questionText": "Le prélèvement du fluide gingival se fait à l'aide de :",
        "options": [
          "A. Un cône de Gutta percha",
          "B. De boulettes de coton salivaire",
          "C. De cône en papier absorbant",
          "D. De fil de soie dentaire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La méthode la plus commune pour prélever le fluide gingival consiste à insérer délicatement une pointe ou un cône de papier absorbant standardisé dans le sulcus pendant une durée déterminée."
      },
      {
        "questionText": "La quantité de fluide gingival :",
        "options": [
          "A. Diminue avec le temps",
          "B. Diminue lors de la mastication",
          "C. Augmente avec l'inflammation gingivale",
          "D. Augmente avec la mastication d'aliments mous"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La quantité de fluide gingival est directement corrélée au degré d'inflammation de la gencive. Elle augmente aussi avec la mastication d'aliments durs et le brossage, mais pas avec des aliments mous."
      },
      {
        "questionText": "Le fluide gingival :",
        "options": [
          "A. Correspond à un élément constant et permanent du sillon gingivo-dentaire,",
          "B. Dénommé également fluide créviculaire,",
          "C. Peut-être exsudat ou transsudat,",
          "D. Est d'origine sérique."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Le fluide gingival, aussi appelé fluide créviculaire, est d'origine sérique (issu du sang). Il peut être un transsudat (sain) ou un exsudat (inflammatoire). Sa présence est inconstante, pas permanente."
      },
      {
        "questionText": "La technique de prélèvement du fluide gingival avec papier filtre repose sur :",
        "options": [
          "A. La lecture du prélèvement dans des tubes capillaires,",
          "B. La lecture du prélèvement par un instrument de mesure électronique,",
          "C. La lecture de la différence de poids avant et après prélèvement,",
          "D. La lecture du prélèvement sur le corps d'une seringue."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Une des méthodes quantitatives avec papier filtre consiste à peser la pointe de papier avant et après le prélèvement. La différence de poids correspond à la quantité de fluide recueillie. La lecture par instrument électronique (Periotron) est une autre technique."
      },
      {
        "questionText": "Le prélèvement par l'utilisation du périotron consiste à :",
        "options": [
          "A. Utiliser des pointes capillaires.",
          "B. Peser ces pointes dans leurs flacons de transport.",
          "C. Lire directement la quantité du fluide prélevé.",
          "D. Faire bouger le capillaire dans le sulcus.",
          "E. Convertir la valeur du fluide en microlitres."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le Periotron est un appareil électronique qui mesure la quantité de fluide absorbé par une pointe de papier standardisée. L'appareil donne une valeur numérique qui est ensuite convertie en un volume (en microlitres) à l'aide d'une courbe d'étalonnage."
      },
      {
        "questionText": "Le fluide gingival est considéré comme",
        "options": [
          "A. Un élément propre au milieu buccal.",
          "B. Provisoire car lentement dégluti.",
          "C. Un élément constant",
          "D. Très dépendant du processus inflammatoire de la gencive."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le fluide gingival est un élément propre au milieu buccal, mais sa présence et sa quantité sont inconstantes et très dépendantes de l'état inflammatoire de la gencive. Il est rapidement dégluti (B est faux)."
      },
      {
        "questionText": "Le fluide gingival :",
        "options": [
          "A. Est un liquide organique sécrété par l'attache épithéliale,",
          "B. Transite à travers la crête osseuse,",
          "C. Suinte au niveau du silion gingival,",
          "D. Baigne l'environnement supra-gingival."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le FGC est un liquide organique qui provient des vaisseaux du chorion, transite à travers l'attache épithéliale et suinte dans le sillon gingival. L'environnement supra-gingival est baigné par la salive."
      },
      {
        "questionText": "Les rôles négatifs du fluide gingival:",
        "options": [
          "A. Permettent le développement des bactéries (substrat nutritionnel).",
          "B. Empêchent les bactéries de se fixer sur les surfaces de la dent et la surface des cellules de la gencive",
          "C. Entretiennent l'inflammation: polynucléaires, lymphocytes et les enzymes.",
          "D. Contribuent à l'élimination des bactéries par les substances anti-bactériennes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le FGC a un double rôle. Ses aspects négatifs sont qu'il peut servir de substrat nutritionnel pour les bactéries sous-gingivales et qu'il véhicule des cellules (polynucléaires) et des médiateurs qui entretiennent la réaction inflammatoire et la destruction tissulaire."
      }
    ]
  },
  {
    "title": "EMD 1 2023",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le desmodonte :",
        "options": [
          "A. Est une structure épithéliale molle.",
          "B. Est une structure conjonctive molle.",
          "C. Fait la jonction entre l'os alvéolaire et le cément radiculaire par les fibres de Sharon.",
          "D. Fait la jonction entre la gencive et l'os alvéolaire par les fibres de Sharpey."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le desmodonte est une structure conjonctive molle qui relie le cément radiculaire à l'os alvéolaire par les fibres de Sharpey."
      },
      {
        "questionText": "Le cément primaire:",
        "options": [
          "A. Est un cément cellulaire.",
          "B. Est situé au 2/3 cervicaux de la surface radiculaire.",
          "C. Contient une proportion importante de fibres intrinsèques dites de sharpey.",
          "D. Se forme avant ou pendant l'éruption de la dent."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le cément primaire est acellulaire (A est faux), se forme pendant le développement de la racine (D est vrai), est situé aux 2/3 cervicaux (B est vrai), et est riche en fibres extrinsèques (fibres de Sharpey), pas intrinsèques (C est faux)."
      },
      {
        "questionText": "La substance fondamentale du desmodonte:",
        "options": [
          "A. Est le véritable milieu extérieur.",
          "B. Les muco-polysaccharides y sont peu abondants.",
          "C. L'eau est un élément peu important.",
          "D. Présente une viscoélasticité qui joue un rôle important dans l'amortissement des forces."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La substance fondamentale est le milieu intérieur (A est faux), l'eau y est très importante (C est faux). Elle contient peu de mucopolysaccharides (B est vrai) et sa viscoélasticité est cruciale pour l'amortissement (D est vrai)."
      },
      {
        "questionText": "L'attache épithéliale:",
        "options": [
          "A. Est bordée par une lame basale interne et une lame basale externe.",
          "B. Sépare le milieu interne de la cavité buccale.",
          "C. Est plus épaisse au niveau de sa partie apicale.",
          "D. Est un épithéliale pavimenteux stratifié kératinisé."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'attache épithéliale est bordée par deux lames basales (A), et elle forme une barrière entre le milieu interne et la cavité buccale (B). Elle est non kératinisée (D est faux) et plus épaisse dans sa partie coronaire (C est faux)."
      },
      {
        "questionText": "La structure histologique de l'attache épithéliale est formée par :",
        "options": [
          "A. La cuticule dentaire",
          "B. La lame basale interne",
          "C. La lame basale externe",
          "D. Les hémidesmosomes"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La structure de l'attache épithéliale comprend les cellules épithéliales elles-mêmes, qui sont connectées à la dent via la lame basale interne et les hémidesmosomes, et au tissu conjonctif via la lame basale externe."
      },
      {
        "questionText": "La lamina dura:",
        "options": [
          "A. Est une lame osseuse qui donne insertion aux fibres de Sharpey.",
          "B. Est traversée par de nombreux canaux de Volkmann.",
          "C. Se caractérise par sa radio-clarté sur les clichés radiographiques.",
          "D. Sa discontinuité radiographique peut être un signe de pathologie parodontale."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La lamina dura (paroi alvéolaire) donne insertion aux fibres de Sharpey (A) et est traversée par des canaux de Volkmann (B). Sa discontinuité est un signe pathologique (D). Elle est radio-opaque, pas radio-claire (C est faux)."
      },
      {
        "questionText": "Le périoste:",
        "options": [
          "A. Recouvre la surface externe de l'os alvéolaire.",
          "B. Contient des cellules ostéoprogénitrices dans sa couche interne.",
          "C. Est composé d'une seule membrane fibreuse.",
          "D. Est composé d'une double membrane."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le périoste est une double membrane (D) recouvrant la surface externe de l'os (A). Sa couche interne est ostéogène et contient des cellules ostéoprogénitrices (B)."
      },
      {
        "questionText": "L'innervation du desmodonte:",
        "options": [
          "A. Est sensitive et proprioceptive.",
          "B. Renseigne le SNC sur la position et les mouvements des dents.",
          "C. Est principalement motrice pour contrôler la position de la dent.",
          "D. Est absente, le desmodonte étant un tissu insensible."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'innervation du desmodonte est riche et assure la sensibilité (douleur, pression) et la proprioception, informant le système nerveux central de la position de la dent."
      },
      {
        "questionText": "La gencive papillaire est:",
        "options": [
          "A. La partie de la gencive libre située dans l'espace interdentaire.",
          "B. Toujours piquetée en 'peau d'orange'.",
          "C. Formée d'une seule pyramide dans les secteurs postérieurs.",
          "D. Entoure le collet de la dent à la façon d'un collier."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La gencive papillaire est la portion de la gencive libre qui occupe l'embrasure interdentaire. L'aspect piqueté (B) est celui de la gencive attachée. Dans les secteurs postérieurs, elle est formée de deux papilles (vestibulaire et linguale) reliées par un col (C est faux)."
      },
      {
        "questionText": "Parmi les propriétés physiques du cément :",
        "options": [
          "A. Il est plus dur que la dentine.",
          "B. Sa perméabilité augmente avec l'âge.",
          "C. Il est de couleur jaune clair, plus clair que la dentine.",
          "D. Il est le tissu le moins minéralisé de la dent."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le cément est le tissu le moins dur et le moins minéralisé de la dent (A est faux, D est vrai). Sa couleur est jaune clair (C est vrai). Sa perméabilité diminue avec l'âge (B est faux)."
      },
      {
        "questionText": "Le cément :",
        "options": [
          "A. Subit un remaniement constant comme l'os.",
          "B. Est caractérisé par une apposition continue tout au long de la vie.",
          "C. Est vascularisé et innervé.",
          "D. Son épaisseur est uniforme sur toute la racine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le cément ne subit pas de remodelage mais une apposition continue (A est faux, B est vrai). Il est avasculaire et non innervé (C est faux). Son épaisseur est plus importante dans la région apicale (D est faux)."
      }
    ]
  },
  {
    "title": "EMD 2 2023",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Concernant le fluide gingival :",
        "options": [
          "A. Sa quantité diminue en cas d'inflammation gingivale.",
          "B. En état de santé, il est considéré comme un transsudat.",
          "C. Sa composition est très différente de celle du sérum sanguin.",
          "D. Son flux augmente avec la mastication d'aliments mous."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le flux de fluide gingival augmente avec l'inflammation (A est faux). À l'état sain, il s'agit d'un transsudat (B est vrai). Sa composition est similaire à celle du sérum (C est faux). Le flux augmente avec la mastication d'aliments durs, pas mous (D est faux)."
      },
      {
        "questionText": "La formation du biofilm dentaire débute par :",
        "options": [
          "A. L'adhésion irréversible de bactéries anaérobies.",
          "B. La formation de la pellicule acquise exogène.",
          "C. La multiplication des spirochètes.",
          "D. La précipitation de sels de calcium salivaires."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La toute première étape de la formation du biofilm est l'adsorption de glycoprotéines salivaires sur la surface de la dent, formant un film acellulaire appelé la pellicule acquise exogène (PAE)."
      },
      {
        "questionText": "La salive contribue à la santé bucco-dentaire par :",
        "options": [
          "A. Son pouvoir tampon, principalement dû aux protéines.",
          "B. Son action de lubrification des muqueuses.",
          "C. Sa richesse en ions Fluor, Calcium et Phosphate favorisant la reminéralisation.",
          "D. L'action de l'amylase salivaire qui dégrade les protéines bactériennes."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La salive lubrifie (B) et contient des ions pour la reminéralisation (C). Son pouvoir tampon est principalement dû au système bicarbonate (A est faux). L'amylase dégrade l'amidon, pas les protéines (D est faux)."
      },
      {
        "questionText": "Le collagène :",
        "options": [
          "A. Sa synthèse nécessite de la vitamine C pour l'hydroxylation de la proline et de la lysine.",
          "B. Est principalement de type II dans le desmodonte.",
          "C. Est une protéine insoluble, rigide, sans élasticité.",
          "D. L'unité fondamentale est le procollagène, une molécule extracellulaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La vitamine C est un cofacteur essentiel pour les enzymes qui hydroxylent la proline et la lysine, une étape cruciale de la synthèse du collagène (A est vrai). Le collagène du desmodonte est principalement de type I et III (B est faux). Il possède une certaine élasticité (C est faux). L'unité fondamentale est le tropocollagène; le procollagène est le précurseur intracellulaire (D est faux)."
      },
      {
        "questionText": "En plus des bactéries, le biofilm dentaire peut contenir :",
        "options": [
          "A. Des virus",
          "B. Des champignons (levures)",
          "C. Des protozoaires",
          "D. Des ostéoblastes"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le biofilm est une communauté microbienne complexe qui peut abriter des bactéries, des virus, des champignons (comme Candida) et des protozoaires. Les ostéoblastes sont des cellules osseuses et ne font pas partie du biofilm."
      },
      {
        "questionText": "Quel est le rôle principal de la pellicule acquise exogène (PAE) ?",
        "options": [
          "A. Calcifier le biofilm pour former le tartre.",
          "B. Servir de surface d'attachement pour les bactéries pionnières.",
          "C. Neutraliser directement les acides produits par les bactéries.",
          "D. Détruire les bactéries par action enzymatique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le rôle principal de la PAE dans la formation du biofilm est de modifier la surface de la dent et de fournir des récepteurs spécifiques auxquels les premières bactéries (pionnières) peuvent s'attacher."
      },
      {
        "questionText": "Laquelle de ces affirmations sur le microbiote buccal est correcte ?",
        "options": [
          "A. Il est identique chez tous les individus.",
          "B. L'éruption des dents ne modifie pas sa composition.",
          "C. La flore commensale participe à la défense contre les pathogènes externes.",
          "D. Il est exclusivement composé de bactéries aérobies."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La flore commensale (normale) occupe les niches écologiques et entre en compétition avec les micro-organismes pathogènes, jouant ainsi un rôle de barrière. Le microbiote est unique à chaque individu (A), change radicalement avec l'éruption dentaire (B), et contient une grande diversité de bactéries aérobies et anaérobies (D)."
      }
    ]
  },
  {
    "title": "RATT 2024",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Quel type de cellules joue un rôle crucial dans la formation et le maintien de l'attache épithéliale?",
        "options": [
          "A. Fibroblastes",
          "B. Améloblastes",
          "C. Odontoblastes",
          "D. Kératinocytes"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "L'attache est un épithélium, donc composée de Kératinocytes (D). Cependant, les fibroblastes du tissu conjonctif sous-jacent jouent un rôle essentiel dans son induction et son maintien. Les améloblastes (B) sont à son origine mais se transforment."
      },
      {
        "questionText": "Parmi ces propositions, quelles sont les composantes de l'attache épithéliale?",
        "options": [
          "A. Desmosomes",
          "B. Hémidesmosomes",
          "C. Fibres de collagène",
          "D. Lame basale interne"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'attache épithéliale est ancrée à la surface de la dent par l'intermédiaire de la lame basale interne et des hémidesmosomes."
      },
      {
        "questionText": "Parmi les pathologies liées aux défauts de synthèse du collagène, on a :",
        "options": [
          "A. Le scorbut",
          "B. La maladie des os de verre (Ostéogenèse imparfaite)",
          "C. Les collagénoses",
          "D. Le rachitisme"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le scorbut (carence en Vit C), l'ostéogenèse imparfaite (défaut génétique du collagène I) et les collagénoses (inflammation du tissu conjonctif) sont des pathologies du collagène. Le rachitisme est lié à un défaut de minéralisation (carence en Vit D)."
      },
      {
        "questionText": "Une gencive saine se caractérise par :",
        "options": [
          "A. Une couleur rose corail",
          "B. Un contour régulier et festonné",
          "C. Une consistance ferme",
          "D. Une texture piquetée en 'peau d'orange' au niveau de la gencive attachée"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Toutes ces caractéristiques décrivent une gencive saine: couleur rose corail, contour régulier, consistance ferme et texture piquetée de la gencive attachée."
      },
      {
        "questionText": "Le fluide gingival:",
        "options": [
          "A. Est un exsudat inflammatoire en cas de gingivite.",
          "B. Sa quantité est un indicateur de la santé parodontale.",
          "C. Provient de la salive qui filtre dans le sulcus.",
          "D. Contient des cellules de défense comme les polynucléaires neutrophiles."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le fluide gingival devient un exsudat en cas d'inflammation (A), sa quantité augmente avec la maladie (B), et il contient des cellules de défense (D). Il provient du sérum sanguin via les vaisseaux du chorion, pas de la salive (C est faux)."
      },
      {
        "questionText": "L'os alvéolaire est constitué de :",
        "options": [
          "A. Deux tables osseuses (vestibulaire et linguale/palatine).",
          "B. L'os spongieux qui remplit l'espace entre les tables.",
          "C. La paroi alvéolaire (lamina dura).",
          "D. Le cément qui recouvre la paroi interne de l'alvéole."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L'os alvéolaire comprend les tables osseuses externes, l'os spongieux central, et la paroi alvéolaire propre qui tapisse l'alvéole. Le cément recouvre la racine de la dent, pas l'os."
      },
      {
        "questionText": "Les fibres transseptales du desmodonte:",
        "options": [
          "A. S'insèrent de l'os alvéolaire au cément.",
          "B. S'étendent de cément à cément au-dessus de la crête alvéolaire.",
          "C. Contribuent au maintien de l'alignement des dents sur l'arcade.",
          "D. Sont le groupe de fibres le plus nombreux du desmodonte."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les fibres transseptales relient les dents adjacentes en passant au-dessus de la crête osseuse (B), aidant à maintenir leur alignement (C). Les fibres obliques sont le groupe le plus nombreux (D est faux)."
      },
      {
        "questionText": "Les facteurs modifiant la flore buccale sont:",
        "options": [
          "A. L'âge",
          "B. Les changements hormonaux (grossesse, puberté)",
          "C. L'alimentation",
          "D. Le brossage des dents"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Tous ces facteurs peuvent modifier l'équilibre de la flore buccale. L'âge, les hormones et l'alimentation modifient l'environnement et le substrat. Le brossage réduit la biomasse et désorganise le biofilm."
      }
    ]
  },
  {
    "title": "EMD 1 2025",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La Gencive marginale :",
        "options": [
          "A. Occupe l'embrasure gingivale entre deux dents.",
          "B. S'étend du sillon marginal jusqu'à la ligne muco-gingivale.",
          "C. Sa hauteur est physiologiquement d'environ 1 à 2 mm.",
          "D. Est séparée de la surface dentaire par le sulcus gingival."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "La gencive marginale (ou libre) est le collet de gencive autour de la dent, séparée de celle-ci par le sulcus (D). Sa hauteur est de 1-2 mm (C). La papille interdentaire occupe l'embrasure (A). Elle s'étend jusqu'au sillon gingival libre (B)."
      },
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. Est séparée de la muqueuse alvéolaire par le sillon gingival libre.",
          "B. Est située apicalement à la gencive marginale.",
          "C. Sa hauteur est généralement plus grande à la mandibule qu'au maxillaire.",
          "D. Se continue avec la muqueuse palatine sans ligne de démarcation nette."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Elle est située sous (apicalement) la gencive marginale (B). Côté palatin, elle se fond dans la muqueuse palatine (D). Elle est séparée de la gencive marginale par le sillon gingival libre et de la muqueuse alvéolaire par la ligne muco-gingivale (A). Sa hauteur est plus importante au maxillaire (C)."
      },
      {
        "questionText": "L'attache épithéliale :",
        "options": [
          "A. Est un épithélium pavimenteux stratifié kératinisé.",
          "B. Se renouvelle très rapidement (turnover élevé).",
          "C. Est totalement imperméable aux cellules et fluides.",
          "D. Se situe entre la surface dentaire, le fond du sulcus et le chorion gingival."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'attache épithéliale a un turnover très rapide (B) et se situe bien entre la dent et le chorion, formant le fond du sulcus (D). Elle est non kératinisée (A) et semi-perméable (C)."
      },
      {
        "questionText": "Quel est le rôle des fibres de Sharpey?",
        "options": [
          "A. Assurer la nutrition du cément.",
          "B. Ancrer les fibres principales du desmodonte dans le cément et l'os alvéolaire.",
          "C. Transmettre les informations proprioceptives.",
          "D. Former la matrice organique de l'os alvéolaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les fibres de Sharpey sont les portions terminales des fibres de collagène du desmodonte qui sont minéralisées et encastrées dans le cément et l'os alvéolaire, assurant ainsi l'ancrage de la dent."
      },
      {
        "questionText": "Le cément cellulaire (secondaire) :",
        "options": [
          "A. Se trouve principalement dans les deux tiers coronaires de la racine.",
          "B. Contient des cémentocytes emprisonnés dans des lacunes.",
          "C. Se forme avant l'éruption de la dent.",
          "D. Est le principal site d'insertion pour les fibres de Sharpey."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le cément cellulaire se caractérise par la présence de cémentocytes (B). Il se trouve dans le tiers apical et les furcations (A), se forme après l'éruption en réponse aux fonctions (C), et est moins riche en fibres de Sharpey que le cément acellulaire (D)."
      },
      {
        "questionText": "Une déhiscence osseuse est :",
        "options": [
          "A. Une zone isolée de racine exposée, entourée d'os marginal.",
          "B. Un défaut osseux où le rebord marginal est absent, exposant la racine.",
          "C. Un épaississement de l'os alvéolaire.",
          "D. Toujours située sur la face linguale des dents."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une déhiscence est un défaut en forme de V où l'os marginal est manquant. Une zone isolée d'exposition radiculaire avec un rebord marginal intact est une fenestration (A)."
      },
      {
        "questionText": "La paroi alvéolaire (lamina dura) :",
        "options": [
          "A. Est une fine couche d'os spongieux.",
          "B. Apparaît comme une ligne radio-claire sur les radiographies.",
          "C. Est aussi appelée os fasciculé en raison de l'insertion des fibres de Sharpey.",
          "D. Est en remaniement constant, plus rapide que le reste de l'os alvéolaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La paroi alvéolaire est appelée os fasciculé car elle est traversée par de nombreux faisceaux de fibres de Sharpey (C). C'est de l'os compact (A), qui apparaît radio-opaque (B)."
      },
      {
        "questionText": "Concernant l'ATM :",
        "options": [
          "A. Le mouvement de rotation pure se produit dans le compartiment temporo-discal (supérieur).",
          "B. Le ligament latéral externe est le principal ligament de renfort de la capsule.",
          "C. Le disque articulaire est avasculaire et non innervé dans sa partie centrale.",
          "D. C'est une articulation de type synarthrose."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le ligament latéral externe renforce la capsule (B) et la partie centrale du disque est avasculaire et non innervée (C). La rotation se produit dans le compartiment inférieur (condylo-discal) (A). C'est une diarthrose (articulation mobile) (D)."
      }
    ]
  },
  {
    "title": "RATT 2025",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La gencive attachée :",
        "options": [
          "A. Est située apicalement à la gencive marginale.",
          "B. Présente une texture lisse et brillante.",
          "C. Est séparée de la muqueuse alvéolaire par le sillon gingival libre.",
          "D. Sa hauteur est plus importante au maxillaire qu'à la mandibule."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La gencive attachée est bien située apicalement à la gencive marginale (A) et sa hauteur est plus importante au maxillaire (D). Sa texture est piquetée ('peau d'orange'), pas lisse (B). Elle est séparée de la muqueuse alvéolaire par la ligne muco-gingivale (C)."
      },
      {
        "questionText": "Parmi les rôles de l'attache épithéliale, on retrouve :",
        "options": [
          "A. L'adhésion de la gencive à la dent.",
          "B. La transmission des forces occlusales à l'os.",
          "C. Un renouvellement cellulaire (turnover) très rapide.",
          "D. La formation du cément."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'attache épithéliale assure l'adhésion (A) et possède un turnover très rapide, ce qui est un mécanisme de défense important (C). La transmission des forces est le rôle du desmodonte (B). La formation du cément est assurée par les cémentoblastes (D)."
      },
      {
        "questionText": "Le rôle sensoriel du desmodonte permet :",
        "options": [
          "A. La perception de la température des aliments.",
          "B. La proprioception (perception de la position et des forces appliquées sur la dent).",
          "C. Le goût des aliments.",
          "D. La coordination des muscles masticateurs via des réflexes."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Grâce à ses mécanorécepteurs, le desmodonte assure la proprioception (B) et déclenche des réflexes qui aident à coordonner les muscles de la mastication pour protéger la dent (D). La perception de la température et du goût est assurée par d'autres structures."
      },
      {
        "questionText": "La crête alvéolaire saine est typiquement :",
        "options": [
          "A. Située à 1-2 mm en position apicale par rapport à la jonction amélo-cémentaire.",
          "B. Pointue et en lame de couteau.",
          "C. Plus coronaire au niveau interproximal qu'au niveau vestibulaire.",
          "D. Visible comme une ligne radio-claire sur une radiographie."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La crête osseuse saine se trouve 1-2 mm sous la JEC (A) et suit un tracé festonné, étant plus coronaire en interproximal (C). Elle est normalement arrondie (B) et apparaît radio-opaque (D)."
      },
      {
        "questionText": "Les premiers microorganismes à coloniser la surface dentaire sont :",
        "options": [
          "A. Des spirochètes et des bacilles fusiformes.",
          "B. Principalement des cocci et des bacilles Gram-positif facultatifs.",
          "C. Des levures comme Candida albicans.",
          "D. Des bactéries anaérobies strictes pigmentées en noir."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La colonisation initiale (plaque jeune) est dominée par des bactéries pionnières, qui sont majoritairement des cocci et bacilles Gram-positif facultatifs, comme les espèces de Streptococcus et Actinomyces."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est principalement assuré par :",
        "options": [
          "A. Le système bicarbonate/acide carbonique.",
          "B. Les protéines comme les mucines.",
          "C. Les ions calcium.",
          "D. L'enzyme lysozyme."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le principal système tampon de la salive, crucial pour neutraliser les acides et prévenir la déminéralisation, est le système bicarbonate/acide carbonique."
      },
      {
        "questionText": "Le FGC (fluide gingival créviculaire) peut être utilisé comme outil de diagnostic car :",
        "options": [
          "A. Il contient des marqueurs de l'inflammation et de la destruction tissulaire.",
          "B. Son volume diminue en cas de parodontite.",
          "C. Il permet de mesurer directement la profondeur de poche.",
          "D. Il est facile à collecter en grande quantité."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le FGC est un filtrat du sérum qui transporte des cellules, des enzymes et des médiateurs de l'inflammation (cytokines, prostaglandines). L'analyse de ces marqueurs peut refléter l'état de santé ou de maladie du parodonte. Son volume augmente avec la maladie (B)."
      },
      {
        "questionText": "La différence majeure entre le cément et l'os alvéolaire est :",
        "options": [
          "A. Le cément n'est pas un tissu minéralisé.",
          "B. L'os alvéolaire n'est pas vascularisé.",
          "C. Le cément ne subit pas de remodelage physiologique constant.",
          "D. L'os alvéolaire ne contient pas de collagène."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Contrairement à l'os, qui est dans un état de remodelage constant (résorption et apposition), le cément est caractérisé par une apposition lente et continue tout au long de la vie, sans phase de résorption physiologique."
      }
    ]
  },
  {
    "title": "EMD 2 2025",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Quels sont les premiers microorganismes à coloniser la cavité buccale d'un nouveau-né (édenté) ?",
        "options": [
          "A. Streptococcus mutans et Lactobacilles.",
          "B. Porphyromonas gingivalis et Spirochètes.",
          "C. Streptococcus salivarius et Actinomyces.",
          "D. Candida albicans et Veillonella."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les colonisateurs primaires de la muqueuse buccale du nouveau-né sont des bactéries capables d'adhérer aux cellules épithéliales, comme Streptococcus salivarius."
      },
      {
        "questionText": "Quel impact l'édentation totale a-t-elle sur la flore buccale ?",
        "options": [
          "A. Elle n'a aucun effet significatif.",
          "B. Elle augmente la proportion de bactéries anaérobies strictes.",
          "C. Elle diminue drastiquement la quantité de pathogènes parodontaux comme les spirochètes.",
          "D. Elle favorise exclusivement la croissance des streptocoques."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'édentation totale supprime les surfaces dures non desquamantes (dents) et les niches anaérobies (sulcus), ce qui entraîne une réduction massive des bactéries qui en dépendent, notamment les pathogènes parodontaux."
      },
      {
        "questionText": "La parotide :",
        "options": [
          "A. Est la plus grande des glandes salivaires principales.",
          "B. Produit une salive principalement muqueuse et visqueuse.",
          "C. Son canal excréteur est le canal de Wharton.",
          "D. Est constituée presque exclusivement de cellules sécrétrices séreuses."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La parotide est la plus grande glande salivaire (A) et sa sécrétion est presque purement séreuse, donc fluide (D). Son canal est le canal de Sténon. La salive muqueuse est produite par la sublinguale et la sous-maxillaire (B). Le canal de Wharton est celui de la glande sous-maxillaire (C)."
      },
      {
        "questionText": "Parmi les fonctions principales de la salive, on retrouve :",
        "options": [
          "A. Une action antibactérienne grâce aux lysozymes et lactoperoxydases.",
          "B. L'initiation de la digestion des lipides grâce à la lipase salivaire.",
          "C. Le maintien d'un pH buccal stable grâce à son pouvoir tampon.",
          "D. La formation de la pellicule acquise exogène."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La salive a une action antibactérienne (A), un pouvoir tampon (C), et ses glycoprotéines forment la pellicule acquise (D). La lipase salivaire initie la digestion des lipides, mais c'est un rôle moins majeur que l'amylase pour les glucides (B est vrai mais moins central)."
      },
      {
        "questionText": "La pellicule acquise exogène (PAE) :",
        "options": [
          "A. Est un film cellulaire constitué de bactéries pionnières.",
          "B. Se forme en plusieurs heures après un brossage.",
          "C. Protège l'émail contre l'attaque acide.",
          "D. Fournit des récepteurs pour l'adhésion bactérienne."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "La PAE est un film acellulaire (A) qui se forme en quelques minutes (B). Elle a un double rôle : elle peut protéger l'émail (barrière de diffusion) (C) mais sert aussi de substrat d'ancrage pour les bactéries (D)."
      },
      {
        "questionText": "Le fluide gingival devient un exsudat lorsque :",
        "options": [
          "A. Le patient est en parfaite santé parodontale.",
          "B. La perméabilité vasculaire du plexus gingival augmente à cause de l'inflammation.",
          "C. Le débit salivaire est très élevé.",
          "D. Le patient consomme des aliments très durs."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le passage d'un transsudat (santé) à un exsudat (maladie) est caractérisé par une augmentation du flux et de la concentration en protéines, causée par l'augmentation de la perméabilité vasculaire due à la réponse inflammatoire."
      },
      {
        "questionText": "L'hydroxylation de la proline et de la lysine, étape clé de la synthèse du collagène, dépend de :",
        "options": [
          "A. La vitamine D",
          "B. La vitamine C (acide ascorbique)",
          "C. La présence de calcium",
          "D. La vitamine K"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La vitamine C est un cofacteur indispensable pour les enzymes prolyl et lysyl hydroxylases. Une carence sévère en vitamine C (scorbut) conduit à une synthèse défectueuse du collagène."
      },
      {
        "questionText": "La maturation du biofilm (plaque ancienne) se caractérise par :",
        "options": [
          "A. Une diminution de la diversité bactérienne.",
          "B. Une augmentation de la proportion de bactéries anaérobies strictes et mobiles.",
          "C. Une structure en 'épi de maïs' (corn-cob).",
          "D. Une diminution de la résistance aux agents antimicrobiens."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La plaque mature est plus complexe, avec une augmentation des anaérobies (B). Des structures de co-agrégation spécifiques comme les 'épis de maïs' apparaissent (C). La diversité augmente (A est faux) et la résistance aux antimicrobiens augmente (D est faux)."
      }
    ]
  },
  {
    "title": "Examen Blanc EMD 1",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "Le col gingival :",
        "options": [
          "A. Est la partie la plus coronaire de la papille interdentaire.",
          "B. Est une dépression qui relie la papille vestibulaire et la papille linguale.",
          "C. Est recouvert d'un épithélium épais et kératinisé.",
          "D. A une forme pyramidale dans la région des molaires."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le col gingival est la dépression située sous le point de contact qui relie les papilles vestibulaire et linguale (B). Il est recouvert d'un épithélium mince et non kératinisé, ce qui le rend fragile (C est faux). Il a la forme d'une vallée, pas d'une pyramide (D est faux)."
      },
      {
        "questionText": "L'épithélium de jonction (attache épithéliale) se distingue de l'épithélium oral par :",
        "options": [
          "A. Son absence de kératinisation.",
          "B. Un taux de renouvellement cellulaire (turnover) beaucoup plus lent.",
          "C. Des espaces intercellulaires plus larges.",
          "D. Sa capacité à former des hémidesmosomes pour s'attacher à la dent."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'épithélium de jonction est non kératinisé (A), a des espaces intercellulaires plus larges le rendant plus perméable (C), et s'attache à la dent via des hémidesmosomes (D). Son turnover est extrêmement rapide, bien plus que celui de l'épithélium oral (B est faux)."
      },
      {
        "questionText": "Les fibres obliques du desmodonte ont pour rôle principal de :",
        "options": [
          "A. Résister aux forces de rotation.",
          "B. Empêcher les mouvements latéraux de la dent.",
          "C. Transformer les forces de pression occlusale en forces de tension sur l'os alvéolaire.",
          "D. Maintenir la dent en contact avec la dent adjacente."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les fibres obliques, le groupe le plus nombreux, sont orientées du cément (plus apical) vers l'os (plus coronal). Cette orientation leur permet de suspendre la dent dans l'alvéole et de convertir les forces de compression verticales (mastication) en forces de tension sur la paroi alvéolaire, ce qui est optimal pour la physiologie osseuse."
      },
      {
        "questionText": "Qu'est-ce qui différencie fondamentalement le cément de l'os alvéolaire ?",
        "options": [
          "A. L'os alvéolaire est minéralisé, alors que le cément ne l'est pas.",
          "B. Le cément est avasculaire et non innervé.",
          "C. L'os alvéolaire ne contient pas de cellules (ostéocytes).",
          "D. Le cément subit un remodelage physiologique constant."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La différence majeure est que le cément est un tissu avasculaire et non innervé, ce qui explique sa plus grande résistance à la résorption. L'os est vascularisé, innervé, et subit un remodelage constant. Les deux sont des tissus minéralisés contenant des cellules."
      },
      {
        "questionText": "La lamina dura est une structure importante en radiologie parodontale. Elle correspond à :",
        "options": [
          "A. L'image radiologique du cément radiculaire.",
          "B. Une ligne radio-claire représentant l'espace desmodontal.",
          "C. Une ligne radio-opaque représentant la paroi osseuse de l'alvéole.",
          "D. L'image de la jonction amélo-cémentaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La lamina dura ('lame dure') est l'appellation radiologique de la paroi de l'alvéole dentaire. Comme cet os est compact et dense, il apparaît comme une fine ligne blanche (radio-opaque) continue autour de la racine sur une radiographie saine."
      }
    ]
  },
  {
    "title": "Examen Blanc EMD 2",
    "subject": "paro-y2",
    "questions": [
      {
        "questionText": "La maturation du biofilm dentaire se caractérise par :",
        "options": [
          "A. Une diminution du nombre total de bactéries.",
          "B. Une transition d'une flore dominée par des cocci Gram+ vers une flore dominée par des bacilles Gram- anaérobies.",
          "C. Une diminution de l'épaisseur de la matrice extracellulaire.",
          "D. Une perte des structures de co-agrégation comme les 'épis de maïs'."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La maturation du biofilm, ou succession écologique, est un processus clé où l'environnement devient plus anaérobie, permettant la croissance d'une flore plus complexe et pathogène, caractérisée par des bacilles Gram- anaérobies (B). La biomasse et la complexité structurelle augmentent (A, C, D sont faux)."
      },
      {
        "questionText": "Le fluide gingival créviculaire (FGC) :",
        "options": [
          "A. Provient principalement de la dégradation des cellules épithéliales desquamées.",
          "B. Son flux est un indicateur fiable de l'inflammation gingivale.",
          "C. Est considéré comme un transsudat en cas de parodontite sévère.",
          "D. A un rôle purement protecteur en éliminant les bactéries."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La quantité de FGC qui s'écoule du sulcus est directement proportionnelle à l'intensité de l'inflammation gingivale, ce qui en fait un excellent indicateur (B). Il provient du sérum sanguin (A est faux), devient un exsudat (et non un transsudat) en cas d'inflammation (C est faux), et a un rôle ambivalent : protecteur (lavage, défense) mais aussi destructeur (véhicule des enzymes de dégradation) (D est faux)."
      },
      {
        "questionText": "Le principal système tampon de la salive, qui protège les dents contre les attaques acides, est :",
        "options": [
          "A. Le système phosphate.",
          "B. Le système des protéines salivaires.",
          "C. Le système bicarbonate/acide carbonique.",
          "D. Le système des mucines."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Bien que les phosphates et les protéines contribuent, le système bicarbonate est de loin le plus important et le plus efficace pour neutraliser les acides produits par le biofilm après une consommation de sucre, et ainsi maintenir le pH buccal au-dessus du seuil critique de déminéralisation."
      },
      {
        "questionText": "Une étape cruciale de la maturation extracellulaire du collagène est :",
        "options": [
          "A. L'hydroxylation des résidus proline et lysine à l'intérieur du fibroblaste.",
          "B. L'assemblage des trois chaînes pro-alpha en une triple hélice.",
          "C. Le clivage des propeptides terminaux du procollagène pour former le tropocollagène.",
          "D. La glycosylation des chaînes polypeptidiques dans l'appareil de Golgi."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les étapes A, B et D sont des événements intracellulaires. Une fois la molécule de procollagène sécrétée dans l'espace extracellulaire, des enzymes spécifiques (procollagène peptidases) coupent les propeptides aux extrémités, permettant aux molécules de tropocollagène résultantes de s'auto-assembler en fibrilles."
      },
      {
        "questionText": "Une 'niche écologique' dans la cavité buccale est :",
        "options": [
          "A. Uniquement une zone où les bactéries peuvent causer des caries.",
          "B. L'ensemble de la flore bactérienne d'un individu.",
          "C. Un site spécifique (ex: sillon gingival, fissure occlusale) offrant des conditions physico-chimiques particulières.",
          "D. Une relation de bénéfice mutuel entre deux espèces bactériennes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Une niche écologique est un micro-environnement qui, par ses caractéristiques (pH, potentiel redox, nutriments, surface), favorise la colonisation et la croissance de certaines espèces microbiennes. Le sillon gingival est une niche anaérobie, différente d'une fissure occlusale (riche en sucres) ou du dos de la langue."
      }
    ]
  }
];

module.exports = paroQuizzes;