// quizzes/year-3/anatomo-pathologie.js

const anatomoPathologieQuizzes = [
  {
    title: "Généralités",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "L'examen extemporané: (RF)\n1. Est réalisé en post opératoire\n2. Permet de déterminer la nature de la lésion\n3. Est effectué sur un prélèvement fixé au formol à 10 %%\n4. Est pratiqué dans le but d'orienter l'acte chirurgical\n5. La coupe se fait après congélation du prélèvement",
        options: [
          "(1, 2)",
          "(1, 3)",
          "(1, 5)",
          "(2, 3)",
          "(4, 5)"
        ],
        correctOptionIndexes: [1], // Correspond à (1, 3) - RF signifie Réponse Fausse نرجع نشوفها منب بعد
        explanation: "1 : Réalisé pendant l'intervention chirurgicale. 3 : Est effectué sur un prélèvement frais ou congelé, pas fixé au formol."
      },
      {
        questionText: "La fixation : (RF)\n1. Permet de préserver la structure tissulaire\n2. Se fait dans du formol à 10 %\n3. Est une étape obligatoire pour un examen anatomopathologique de routine\n4. Le volume du fixateur ne doit pas dépasser le volume du prélèvement\n5. Doit être tardive deux heures après L’intervention chirurgicale",
        options: [
          "(1, 2)",
          "(1, 3)",
          "(1, 5)",
          "(2, 3)",
          "(4, 5)"
        ],
        correctOptionIndexes: [4], // Correspond à (4, 5) - RF signifie Réponse Fausse
        explanation: "La quantité du fixateur utilisée doit être proportionnée à la taille de la pièce (vol du prélèvement) x10. La fixation doit être réalisée le plus tôt possible."
      },
      {
        questionText: "Les étapes techniques de routine en anatomopathologie sont : (RF)",
        options: [
          "La déshydratation",
          "Inclusion en paraffine",
          "La coloration au trichrome de Masson",
          "Coloration à l'hématéine éosine",
          "Montage de la préparation sous lamelle"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La coloration de routine est l'Hématéine Éosine (HE). Le Trichrome de Masson est une coloration spéciale."
      },
      {
        questionText: "L'examen cytologique : (1 RF)",
        options: [
          "Est un examen de certitude",
          "Etudie les prélèvements des liquides",
          "Etudie les frottis de brossage",
          "Etudie les prélèvements des ponctions ganglionnaires",
          "Autorise une fixation à l'air libre"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "L'examen cytologique est un examen d'orientation, le diagnostic de certitude nécessite souvent un examen histologique (biopsie)."
      },
      {
        questionText: "L'examen extemporané: (RJ)", // RJ = Réponse Juste
        options: [
          "Est réalisé en post opératoire",
          "Permet de confirmer la nature de la lésion",
          "Est effectué sur un prélèvement fixé au formol à 10%",
          "Est pratiqué dans le but d'orienter l'acte chirurgical",
          "La durée est de 24 heures"
        ],
        correctOptionIndexes: [3],
        explanation: "L'examen extemporané est réalisé pendant l'opération pour orienter le chirurgien (ex: vérifier si les marges sont saines)."
      },
      {
        questionText: "Quelle est la coloration de base en technique histopathologique : (RJ)",
        options: [
          "Hématoxyline de Harris",
          "Trichrome de Masson",
          "Imprégnation argentique",
          "Hématéine éosine",
          "Rouge Congo"
        ],
        correctOptionIndexes: [3],
        explanation: "La coloration H&E est la coloration standard en histopathologie, permettant de différencier les noyaux (bleu-violet) et le cytoplasme (rose)."
      },
      {
        questionText: "L'anatomie pathologique (RF)",
        options: [
          "Est une discipline médicale qui étudie les lésions pathologiques",
          "Se fait sur prélèvements tissulaires",
          "Est une étude clinique des lésions pathologiques",
          "Peut se faire sur un examen extemporané",
          "Pose diagnostic et évalue le pronostic"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'anatomie pathologique est une discipline de laboratoire, pas une étude clinique directe des patients."
      },
      {
        questionText: "La fixation: (RF)",
        options: [
          "Protège le prélèvement contre autolyse",
          "Se fait dans du formol à 10 %", // Corrigé : formol
          "Est une étape obligatoire pour un examen anatomopathologique de routine",
          "Le volume du fixateur ne dépend pas de la taille du prélèvement",
          "Doit être rapide dès les premières minutes"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le volume du fixateur doit être suffisant pour recouvrir complètement le prélèvement, généralement 10 fois le volume de la pièce."
      },
      {
        questionText: "Les étapes techniques de routine en anatomopathologie sont : (RF)",
        options: [
          "La déshydratation",
          "Inclusion en paraffine",
          "Coupe en congélation",
          "Coloration à l’hématéine éosine",
          "Montage de la préparation sous lamelles"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La coupe en congélation est utilisée pour l'examen extemporané, pas pour la technique de routine qui utilise l'inclusion en paraffine."
      },
      {
        questionText: "L'examen immunhistochimique: (RJ)",
        options: [
          "Est réalisé en complément de l'examen histologique de base",
          "Utilise des anticorps mono et polyclonaux",
          "Permet de confirmer le diagnostic anatomopathologique",
          "Permet la mise en évidence d'antigènes membranaires cytoplasmiques et nucléaires",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'immunohistochimie utilise des anticorps pour identifier des protéines spécifiques (antigènes) dans les tissus, aidant au diagnostic et au pronostic."
      },
      {
        questionText: "Le fixateur utilisé en anatomie pathologique pour préserver les tissus est:(Rj)",
        options: [
          "Liquide de Bouin",
          "Alcool",
          "Formol tamponné",
          "Paraffine",
          "Xylène"
        ],
        correctOptionIndexes: [2],
        explanation: "Le formol tamponné à 10% est le fixateur le plus couramment utilisé en routine."
      },
      {
        questionText: "Des biopsies non fixées au formol sont nécessaires pour certaines techniques particulières :(RF)",
        options: [
          "Examen extemporané",
          "Microscopie électronique standard",
          "Examen histologique",
          "Biologie moléculaire",
          "Cytogénétique"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'examen histologique de routine nécessite impérativement une fixation au formol."
      },
      {
        questionText: "Les conditions de fixation d'un tissu sont: (RF)",
        options: [
          "La rapidité d'acheminement inferieur à 1h",
          "Volume du fixateur une fois le volume du prélèvement",
          "Durée de fixation 2 à 6h pour les biopsies",
          "Fixation des pièces 24 à 48h",
          "Utiliser du formol tamponné"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "Le volume du fixateur doit être environ 10 fois supérieur au volume du prélèvement."
      },
      {
        questionText: "l’histologie désigne l’étude des : (RJ)",
        options: [
          "Etalements cellulaires",
          "Liquides d’aspirations",
          "Anomalies ultra structurales",
          "Lésions tissulaires constatées à l’œil nu",
          "Lésions tissulaires constatées à l’aide d’un microscope"
        ],
        correctOptionIndexes: [4],
        explanation: "L'histologie est l'étude microscopique de la structure des tissus."
      },
      {
        questionText: "l’étape de fixation pour un examen pathologique de routine : (RF)",
        options: [
          "Permet de conserver la morphologie cellulaire",
          "Doit être immédiate",
          "Est indispensable pour un examen extemporané",
          "Se fait au formol tamponné à 10 %"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'examen extemporané se fait sur tissu frais (congelé), sans fixation au formol."
      },
      {
        questionText: "l’examen extemporané permet : (RF)",
        options: [
          "Une orientation diagnostique rapide",
          "Une vérification des limites d’exérèse",
          "La contrôle de la nature du prélèvement",
          "De guider l’intervention chirurgical",
          "Une grande fiabilité diagnostique"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "L'examen extemporané est rapide mais moins fiable que l'examen histologique standard sur tissu fixé et inclus en paraffine."
      },
      {
        questionText: "la biopsie exérèse consiste à : (RJ)",
        options: [
          "Enlever une partie de la lésion",
          "Faire une microscopie à visée diagnostique",
          "Faire une réaction à visée thérapeutique",
          "Faire une ponction-biopsie",
          "Enlever la lésion dans sa totalité à visée diagnostique et thérapeutique"
        ],
        correctOptionIndexes: [4],
        explanation: "La biopsie-exérèse est l'ablation complète de la lésion, permettant à la fois le diagnostic et le traitement."
      },
      {
        questionText: "Un examen cytologique est réalisé sur tout le prélèvement suivant sauf un lequel : (RF)",
        options: [
          "Un frottis",
          "Un culot de centrifugation",
          "Un étalement",
          "Un centrage biopsique",
          "Une apposition"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Un centrage biopsique est une technique histologique (étude du tissu), tandis que les autres sont des techniques cytologiques (étude des cellules isolées)."
      },
      {
        questionText: "quelle est la coloration de base en technique histopathologique pour mettre en évidence les fibres conjonctives : (RJ)",
        options: [
          "Hématoxyline de Harris",
          "Trichrome de Masson",
          "Acide périodique Schiff ( PAS)",
          "Hématéine éosine ( HE)",
          "Coloration de Grocott"
        ],
        correctOptionIndexes: [1],
        explanation: "Le Trichrome de Masson est une coloration spéciale qui colore spécifiquement les fibres de collagène en bleu ou vert, les distinguant des autres structures."
      },
      {
        questionText: "mettre dans l’ordre chronologique les étapes pour un examen anatomopathologique :\na) Fixation\nb) Coupes des blocs de paraffine et coloration des lames\nc) Déshydratation\nd) Réalisation du prélèvement et enregistrement\ne) Inclusion dans la paraffine",
        options: [
          "d, a, c, e, b",
          "a, d, c, e, b",
          "d, c, a, e, b",
          "d, a, e, c, b"
        ],
        correctOptionIndexes: [0], // d/a/c/e/b
        explanation: "L'ordre correct est : Prélèvement -> Fixation -> Déshydratation -> Inclusion -> Coupe et Coloration."
      },
      {
        questionText: "Parmi ces propositions lesquelles correspondent à la technique usuelle d'une pièce opératoire : ( RJ)\n1. Fixation au formol 10%\n2. Inclusion en paraffine\n3. Fixation par congélation\n4. Coloration à l'hématéine éosine\n5. Imprégnation argentique\n6. Déshydratation",
        options: [
          "1-2-3-6",
          "1-3-4-6",
          "1-2-4-6",
          "2-3-4-6"
        ],
        correctOptionIndexes: [2], // Correspond à 1-2-4-6
        explanation: "La technique usuelle comprend la fixation au formol (1), la déshydratation (6), l'inclusion en paraffine (2), et la coloration HE (4). La congélation (3) est pour l'extemporané, l'imprégnation argentique (5) est une coloration spéciale."
      }
    ]
  },
  {
    title: "Lésions cellulaires et tissulaires élémentaires",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Les principales réponses adaptatives d'un tissu sont: (RF)",
        options: [
          "L'atrophie",
          "L'hypertrophie",
          "La pycnose",
          "L'hyperplasie",
          "La métaplasie"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La pycnose est une altération nucléaire irréversible indiquant la mort cellulaire, ce n'est pas une réponse adaptative."
      },
      {
        questionText: "L'apoptose : (RJ)\n1. Est une mort cellulaire accidentelle, due à une agression endogène\n2. Est un phénomène physiologique adaptatif\n3. Est génétiquement déterminée\n4. Permet l'élimination des cellules lésées\n5. Intervient dans le renouvellement des cellules à longue durée de vie",
        options: [
          "(1, 2)",
          "(1, 3)",
          "(1, 5)",
          "(3, 4)",
          "(4, 5)"
        ],
        correctOptionIndexes: [3], // Correspond à (3, 4)
        explanation: "L'apoptose est une mort cellulaire programmée (génétiquement déterminée) qui permet d'éliminer les cellules inutiles ou endommagées. Elle n'est pas accidentelle."
      },
      {
        questionText: "Une condensation de la chromatine correspond à: (RJ)",
        options: [
          "Mitose",
          "Cytolyse",
          "Pycnose",
          "Atrophie",
          "Caryorrhexis"
        ],
        correctOptionIndexes: [2],
        explanation: "La pycnose est la condensation irréversible de la chromatine dans le noyau d'une cellule subissant la nécrose ou l'apoptose."
      },
      {
        questionText: "Parmi ces associations laquelle correspond à la mort cellulaire : (RJ)\nA. Caryolyse\nB. Epaississement de la membrane nucléaire\nC. Carrhyorexis\nD. Altération des mitochondries\nE. Pseudo-vacuoles intracytoplasmiques",
        options: [
          "(A, B, C)", // Corrigé de 1,2,3
          "(A, C, D)", // Corrigé de 1,3,4
          "(B, C, E)", // Corrigé de 2,3,5
          "(A, C, E)", // Corrigé de 1,3,5
          "(B, D, E)"  // Corrigé de 2,4,5
        ],
        correctOptionIndexes: [1], // Correspond à (A, C, D)
        explanation: "La caryolyse (dissolution du noyau), la caryorrhexis (fragmentation du noyau) et l'altération des mitochondries sont des signes de mort cellulaire."
      },
      {
        questionText: "L'apoptose: (RF)",
        options: [
          "Est une mort cellulaire accidentelle, due à une agression endogène",
          "Est un phénomène physiologique",
          "Est génétiquement déterminée",
          "Permet l'élimination des cellules lésées",
          "Intervient dans le renouvellement des cellules à courte durée de vie"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "L'apoptose est une mort cellulaire programmée et physiologique, non accidentelle."
      },
      {
        questionText: "Les phénomènes d'adaptation cellulaire sont : (RF)",
        options: [
          "L'atrophie",
          "L'hypertrophie",
          "La métamorphose",
          "L'hyperplasie",
          "La métaplasie"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Métamorphose n'est pas un terme standard pour l'adaptation cellulaire en pathologie. Les adaptations sont: atrophie, hypertrophie, hyperplasie, métaplasie."
      },
      {
        questionText: "Les phénomènes d'adaptation cellulaire sont : (RF)",
        options: [
          "L'atrophie",
          "L'hypertrophie",
          "Le néoplasie",
          "L'hyperplasie",
          "La métaplasie"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La néoplasie (tumeur) est une prolifération anormale et autonome, pas une adaptation cellulaire réversible."
      },
      {
        questionText: "La métaplasie : (RF)",
        options: [
          "Est une anomalie congénitale",
          "Une Forme d'adaptation cellulaire",
          "Résulte de la transformation d'un tissu en un autre tissu normal par sa structure et anormal par sa localisation.",
          "Est un changement dans la différenciation cellulaire en réponse à une agression pour aboutir à un tissu mieux adapté à l'agression que le tissu d'origine",
          "Peut-être réversible"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "La métaplasie est une anomalie tissulaire acquise, non congénitale."
      },
      {
        questionText: "Les Principales réponses adaptatives d'une cellule et d'un tissu sont (RF)",
        options: [
          "Atrophie",
          "Hypertrophie",
          "Hyperplasie",
          "Métaplasie",
          "La Nécrose"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "La nécrose est une mort cellulaire pathologique, une lésion irréversible, pas une adaptation."
      },
      {
        questionText: "La nécrose cellulaire : (RJ)",
        options: [
          "Est irréversible",
          "Est un phénomène actif",
          "Est une mort cellulaire programmée",
          "Est un signe de bonne adaptation cellulaire",
          "Touchent le noyau et épargne le cytoplasme"
        ],
        correctOptionIndexes: [0],
        explanation: "La nécrose est une mort cellulaire pathologique et irréversible. L'apoptose est active et programmée. La nécrose touche noyau et cytoplasme."
      },
      {
        questionText: "Laquelle de ces lésions cellulaires est réversible: (RJ)",
        options: [
          "Dégénérescence hydropique",
          "Pycnose",
          "Caryolyse",
          "Caryorrhexis",
          "Nécrose"
        ],
        correctOptionIndexes: [0],
        explanation: "La dégénérescence hydropique (gonflement cellulaire par accumulation d'eau) est une lésion réversible précoce. Les autres sont des signes de mort cellulaire (irréversibles)."
      },
      {
        questionText: "Les lésions cellulaires observées au microscope optique sont : (RF)",
        options: [
          "Apoptose",
          "Anomalies de la membrane cytoplasmique",
          "Inclusion nucléaire",
          "Anomalies des organites",
          "Caryorrhexis"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Les anomalies des organites (mitochondries, RE...) sont généralement visibles uniquement en microscopie électronique."
      },
      {
        questionText: "l’apoptose : (RF)",
        options: [
          "Est une mort cellulaire programmée",
          "Concerne des cellules isolées c’est le plus souvent un mécanisme physiologique de * suicide* cellulaire essentiel au développement, à la maturation, et au renouvellement normal des tissus",
          "Est processus actif",
          "Induit une réponse inflammatoire importante"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "L'apoptose n'induit généralement pas de réponse inflammatoire, contrairement à la nécrose."
      },
      {
        questionText: "Lors de la mort cellulaire une condensation de la chromatine en un bloc correspond à une : (RF)", // Note: la question demande RF mais l'explication pointe vers Pycnose (RJ). Il y a une incohérence dans le document source. Je suppose que la question voulait RJ.
        options: [
          "Caryolyse",
          "Cytolyse",
          "Apoptose",
          "Caryorrhexis",
          "Pycnose"
        ],
        correctOptionIndexes: [4], // Supposant RJ
        explanation: "La pycnose est le phénomène de rétraction et condensation du noyau. Caryolyse = dissolution. Caryorrhexis = fragmentation."
      },
      {
        questionText: "l’agénésie : (RJ)",
        options: [
          "Diminution de la taille d’une cellule ou d’un organe",
          "Multiplication des cellules dans un organe donné",
          "Mort cellulaire ou tissulaire",
          "Défaut de développement d’un organe par absence de son ébauche",
          "Diminution du nombre des cellules germinales lors de l’embryogénèse"
        ],
        correctOptionIndexes: [3],
        explanation: "L'agénésie est l'absence totale de développement d'un organe due à l'absence de son bourgeon embryonnaire."
      }
      // Les QROC sont omises car elles demandent une réponse ouverte.
    ]
  },
  {
    title: "Pathologie des substances intercellulaires",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "L'amylose est: (RJ)",
        options: [
          "Une accumulation tissulaire de graisse végétale",
          "Un dépôt tissulaire interstitiel de protéines anormales",
          "Une accumulation anormale de triglycérides dans les cellules",
          "Un dépôt tissulaire interstitiel de complexes immuns",
          "Un dépôt tissulaire interstitiel de fibrine"
        ],
        correctOptionIndexes: [1],
        explanation: "L'amylose est caractérisée par le dépôt extracellulaire de protéines fibrillaires anormales (substance amyloïde)."
      },
      {
        questionText: "Les fibres de collagènes :(RJ)",
        options: [
          "Leur renouvellement est constant",
          "Sont dégradées par les collagénases",
          "Sont mises en évidence à l'histologie par la coloration de trichrome de Masson",
          "Sont responsables de la rigidité des tissus et de la cohésion des cellules",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les affirmations concernant les fibres de collagène sont correctes."
      },
      {
        questionText: "Le diagnostic de l'amylose est en général confirmé par l'examen biopsique, le lieu du prélèvement usuel est :(RJ)",
        options: [
          "Gingival",
          "Cutané",
          "Osseux",
          "Colon",
          "Hépatique"
        ],
        correctOptionIndexes: [0], // Note: Biopsie des glandes salivaires accessoires (lèvre) est très fréquente, la gencive aussi. Rectum aussi.
        explanation: "La biopsie des glandes salivaires accessoires labiales ou la biopsie rectale sont souvent utilisées pour le diagnostic d'amylose systémique. La biopsie gingivale est aussi possible."
      },
      {
        questionText: "La fibrose :(RF)",
        options: [
          "Correspond à une augmentation quantitative des fibres conjonctives dans un tissu",
          "Se traduit par une induration des tissus",
          "Est constituée de fibres de collagène le plus souvent",
          "D'origine cicatricielle, succède à la réaction inflammatoire",
          "Entraîne toujours une atrophie de l'organe atteint."
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "La fibrose peut entraîner une atrophie, mais aussi parfois une hypertrophie ou une fonction normale selon l'organe et l'étendue."
      },
      {
        questionText: "Parmi les propositions suivantes concernant l'amylose, laquelle est inexacte ? (RJ)", // Note: "inexacte" et "RJ" est contradictoire. Je suppose qu'on cherche la fausse (RF).
        options: [
          "Il s'agit de dépôts protéiques anormaux s'accumulant dans différents viscères de l'organisme",
          "En microscope optique, elle prend l'aspect d'une substance éosinophile, amorphe",
          "Elle est biréfringente en lumière polarisée après coloration par le rouge Congo",
          "L'architecture de l'organe est en général préservée",
          "Les dépôts amyloïdes entrainent une réaction inflammatoire à leur contact"
        ],
        correctOptionIndexes: [4], // Supposant RF. L'amylose n'entraîne pas typiquement de réaction inflammatoire significative.
        explanation: "Les dépôts amyloïdes sont généralement inertes et n'induisent pas de réaction inflammatoire majeure."
      },
      {
        questionText: "L'œdème est: (RF)",
        options: [
          "Une augmentation de la quantité d'eau dans les espaces extravasculaires",
          "Pauvre en protéines dans les œdèmes hémodynamiques.",
          "Un transsudat dans les œdèmes lésionnels",
          "Dit anasarque quand il est généralisé.",
          "D'évolution variable selon le siège, l'intensité et la rapidité d'installation."
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'œdème lésionnel (inflammatoire) est riche en protéines, c'est un exsudat. L'œdème hémodynamique est pauvre en protéines, c'est un transsudat."
      },
      {
        questionText: "la fibrose : (RF)",
        options: [
          "Correspond à une augmentation quantitatives et qualitative de fibres conjonctives dans un tissu",
          "Se traduit par dépôts de fibres de collagènes",
          "Est constitué de fibroblastes le plus souvent",
          "D’origine cicatricielle, succède à la réaction inflammatoire",
          "Peut entrainer une atrophie de l’organe"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "La fibrose est principalement une augmentation quantitative des fibres (surtout collagène), pas nécessairement qualitative."
      },
      {
        questionText: "les fibroses peuvent être d’origine : (RJ)",
        options: [
          "Cicatricielle",
          "Dystrophique",
          "Métabolique",
          "Post inflammatoire",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "La fibrose peut résulter de multiples causes : inflammation chronique, cicatrisation, troubles métaboliques, etc."
      },
      {
        questionText: "les fibres de collagènes : (RF)",
        options: [
          "Sont élaborées par les macrophages et les fibroblastes",
          "Leur renouvellement est constant",
          "Sont dégradée par les collagénases",
          "Sont mises en évidence à l’histologie par la coloration de trichron", // Trichrome
          "Sont retrouvé dans le tissu interstitiel"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le collagène est principalement synthétisé par les fibroblastes, pas par les macrophages."
      },
      {
        questionText: "les fibres de collagènes : (RJs)", // RJ pluriel = plusieurs réponses justes
        options: [
          "Sont élaborées par les macrophages",
          "Leur renouvellement est inconstant",
          "Sont dégradées par l'amylase",
          "Sont mises en évidence à l'histologie par la coloration de trichrome de Masson",
          "Sont responsable de la rigidité des tissus et la cohésion des cellules"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "A: Elaborées par les fibroblastes. B: Renouvellement constant. C: Dégradées par les collagénases."
      }
      // Le QROC est omis.
      // La question de correspondance est omise.
    ]
  },
  {
    title: "Processus inflammatoire",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "L'inflammation (RF) :",
        options: [
          "Est une réaction d'un tissu vivant vis-à-vis d'une agression.",
          "Est un processus qui comprend des réactions uniquement cellulaires.",
          "A pour but d'éliminer L’agent pathogène.",
          "A pour but de réparer les lésions tissulaires.",
          "Peut avoir lieu dans tous les tissus vascularisés de l’organisme"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "L'inflammation comprend des réactions cellulaires ET humorales (médiateurs chimiques, protéines plasmatiques)."
      },
      {
        questionText: "La détersion (RJ):\n1. Est la résorption des tissus nécrosés au cours de I ‘inflammation\n2. S'effectue uniquement par mécanisme physiologique\n3. Permet une bonne cicatrisation si elle est complète\n4. Se fait dans la circulation sanguine\n5. Est obligatoirement chirurgicale.",
        options: [
          "(1, 2)",
          "(1, 3)",
          "(2, 3)",
          "(4, 5)",
          "(1, 5)" // Note: ordre changé par rapport au doc source
        ],
        correctOptionIndexes: [1], // Correspond à (1, 3)
        explanation: "2: Peut être physiologique ou chirurgicale. 4: Se fait au site de l'inflammation. 5: Peut être spontanée (fistulisation)."
      },
      {
        questionText: "Un phlegmon se distingue d'un abcès par (R.J)",
        options: [
          "La richesse en polynucléaires neutrophiles.",
          "La présence de nombreux polynucléaires altérés.",
          "L'aspect diffus de la lésion.",
          "L'étendue des thromboses veineuses.",
          "L’intensité"
        ],
        correctOptionIndexes: [2],
        explanation: "L'abcès est une collection de pus localisée, tandis que le phlegmon est une inflammation suppurée diffuse, non collectée."
      },
      {
        questionText: "Les fonctions de la cellule endothéliale sont : (RF)",
        options: [
          "La perméabilité vasculaire",
          "L'adhésion intercellulaire",
          "La sécrétion de médiateurs chimiques",
          "La sécrétion de facteurs de croissance",
          "La phagocytose des particules étrangères"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "La phagocytose est principalement réalisée par les macrophages et les polynucléaires neutrophiles, pas par les cellules endothéliales."
      },
      {
        questionText: "Ces cellules inflammatoires ont des propriétés de phagocytose: (RJ)\nA- Polynucléaires neutrophiles\nB- Cellules épithéliales\nC- Polynucléaires basophiles\nD- Cellules épithéloides\nE- Macrophage",
        options: [
          "(A, B, C)", // Corrigé de 1, 2, 3
          "(A, D)",    // Corrigé de 1, 4
          "(A, D, E)", // Corrigé de 1, 4, 5
          "(B, C, D)", // Corrigé de 2, 3, 4
          "(D, E)"     // Corrigé de 4, 5
        ],
        correctOptionIndexes: [2], // Correspond à (A, D, E). Note: Cellules épithélioïdes (D) dérivent des macrophages et ont une capacité phagocytaire réduite mais présente.
        explanation: "Les polynucléaires neutrophiles (A) et les macrophages (E) sont les principales cellules phagocytaires. Les cellules épithélioïdes (D) en dérivent."
      },
      {
        questionText: "Toutes ces inflammations sont spécifiques sauf une : (RF)",
        options: [
          "La tuberculose",
          "La sarcoidose",
          "Le phlegmon",
          "La lèpre",
          "La maladie des griffes des chats"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Le phlegmon est une inflammation aiguë suppurée non spécifique. Les autres sont des inflammations granulomateuses spécifiques."
      },
      {
        questionText: "Le granulome Tuberculeux est: (RJ)",
        options: [
          "Est toujours diffus",
          "Se compose d'un agglomérat de cellules histiocytaires souvent bien limité",
          "La forme localisée est la forme la plus fréquente",
          "Selon son étiologie, il comporte souvent de la nécrose caséeuse",
          "Comporte uniquement des cellules géantes multinuclées"
        ],
        correctOptionIndexes: [3],
        explanation: "Le granulome tuberculeux est typiquement centré par de la nécrose caséeuse, entourée de cellules épithélioïdes, de cellules géantes de Langhans et d'une couronne lymphocytaire."
      },
      {
        questionText: "Le bourgeon charnu inflammatoire : (RF)\n1. Résulte de l'organisation du granulome inflammatoire\n2. Apparait tardivement après le 8ème jour après agression\n3. Son but est de combler la perte de substance\n4. Se constitue après la régénération épithéliale\n5. Son évolution se fait vers la cicatrisation fibreuse",
        options: [
          "(1, 2)",
          "(1, 4)",
          "(4, 5)",
          "(2, 4)",
          "(3, 5)"
        ],
        correctOptionIndexes: [3], // Correspond à (2, 4) - RF
        explanation: "2: Apparaît précocement (quelques jours). 4: Précède la régénération épithéliale qu'il soutient."
      },
      {
        questionText: "A l'histologie, la diapédèse leucocytaire se traduit par : (RF)",
        options: [
          "La formation de manchons polynucléaires contre la paroi des capillaires sanguins",
          "Marginalisation des leucocytes à l'endothélium vasculaire",
          "La présence de fibrine contre la parol vasculaire pour faciliter la diapédèse",
          "L'émission de pseudopodes par les leucocytes",
          "L'infiltration des leucocytes entre les cellules endothéliales"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La diapédèse est le passage actif des leucocytes entre les cellules endothéliales. La fibrine se forme dans l'exsudat mais ne facilite pas directement la diapédèse."
      },
      {
        questionText: "L'œdème inflammatoire est du à : (RF)",
        options: [
          "L'augmentation de la pression hydrostatique",
          "L'augmentation de la perméabilité vasculaire",
          "L'augmentation de la pression artérielle",
          "La congestion vasculaire active",
          "La vasodilatation artérielle"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'œdème inflammatoire est principalement dû à l'augmentation de la perméabilité vasculaire (fuite de plasma riche en protéines). La pression artérielle systémique n'est pas directement en cause."
      },
      {
        questionText: "L'inflammation (RF) :",
        options: [
          "Est une réaction d'un tissu vivant vis-à-vis d'une agression",
          "Est un processus qui comprend des réactions cellulaires et humorales",
          "A pour but d'éliminer l’agent pathogène.",
          "A pour but de réparer les lésions tissulaires.",
          "Peut avoir lieu dans tous les tissus de l'organisme"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "L'inflammation ne peut se dérouler que dans les tissus vascularisés (tissu conjonctif principalement), car elle implique des phénomènes vasculaires."
      },
      {
        questionText: "Les facteurs influençant la bonne qualité de la cicatrisation sont (RJ):",
        options: [
          "La durée longue de l'inflammation.",
          "La bonne trophicité tissulaire.",
          "L'absence du bourgeon charnu inflammatoire.",
          "Un apport nutritionnel pauvre en acides gras et en protéoglycanes",
          "Une détersion incomplète."
        ],
        correctOptionIndexes: [1],
        explanation: "Une bonne vascularisation et trophicité tissulaire est essentielle pour une cicatrisation de qualité. Une inflammation prolongée, une détersion incomplète ou des carences nutritionnelles nuisent à la cicatrisation."
      },
      {
        questionText: "Les éléments cellulaires suivants participent à la constitution du granulome tuberculeux sauf une",
        options: [
          "Cellules épithelioides.",
          "Cellules géantes multinuclées de type Langhans",
          "Lymphocytes",
          "Mastocytes",
          "Nécrose caséeuse"
        ],
        correctOptionIndexes: [3], // L'élément qui ne participe PAS
        explanation: "Le granulome tuberculeux typique contient cellules épithélioïdes, cellules de Langhans, lymphocytes et nécrose caséeuse. Les mastocytes ne sont pas un composant caractéristique."
      },
      {
        questionText: "Morphologiquement l'inflammation aigue se traduit par: (RF)",
        options: [
          "De l’œdème",
          "Un afflux de lymphocytes",
          "Une congestion active",
          "Un afflux de polynucléaires neutrophiles",
          "La présence de fibrine"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "L'inflammation aiguë est caractérisée par un afflux de polynucléaires neutrophiles. Les lymphocytes prédominent dans l'inflammation chronique."
      },
      {
        questionText: "la diapédèse leucocytaire : (RF)",
        options: [
          "Fait intervenir des récepteurs de surface",
          "Et une traversée passive des parois vasculaires",
          "Débute par une margination des leucocytes",
          "Est favorisée par le ralentissement du courant sanguin",
          "S'accompagne d'une dépolymérisation transitoire des membranes basales vasculaires"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "La diapédèse est une traversée ACTIVE des parois vasculaires par les leucocytes."
      },
      {
        questionText: "Le processus Inflammatoire : (RF)",
        options: [
          "Est une réponse des tissus vivants à une agression",
          "Il comprend des phénomènes généreux et locaux", // généraux?
          "Peut se dérouler dans un tissu épithélial",
          "Se déroule dans un tissu conjonctif vascularise",
          "Est habituellement bénéfique"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'inflammation se déroule dans le tissu conjonctif vascularisé, pas dans l'épithélium lui-même (qui est avasculaire)."
      },
      {
        questionText: "Lequel parmi médiateurs chimiques suivants celui qui est responsable de l'apparition de la congestion : (RJ)",
        options: [
          "L'histamine",
          "Les monokines",
          "Le système des kinines",
          "Les prostaglandines",
          "Les leucotriènes"
        ],
        correctOptionIndexes: [2], // Note: L'histamine (A) cause aussi vasodilatation/congestion. Les kinines (C) aussi. Le document source indique C.
        explanation: "L'histamine et le système des kinines (bradykinine) sont de puissants vasodilatateurs responsables de la congestion."
      },
      {
        questionText: "L'inflammation aigue : (RF)",
        options: [
          "Représente la réponse immediate à un agent agresseur",
          "Est de courte durée",
          "Est d'installation souvent brutale",
          "Se caractérisée par des phénomènes vasculo- exsudatifs intenses",
          "Guérit toujours spontanément sans laisser des séquelles"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "L'inflammation aiguë peut laisser des séquelles si la destruction tissulaire est importante ou si elle évolue vers la chronicité."
      },
      {
        questionText: "Parmi les étiologies Infectieuses du granulome tuberculoïde : cocher la (RF)",
        options: [
          "Tuberculose",
          "Syphilis",
          "Lèpre",
          "Sarcoïdose",
          "Maladie de Nicolas Favre"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse. Note: Sarcoïdose (D) est non-infectieuse. Maladie de Nicolas Favre cause aussi des granulomes. Le doc source pointe E.
        explanation: "La sarcoïdose est une cause de granulome tuberculoïde non infectieuse. La maladie de Nicolas-Favre (lymphogranulomatose vénérienne) est infectieuse (Chlamydia)."
      },
      {
        questionText: "La nécrose caséeuse: (RF)",
        options: [
          "Est caractéristique de la tuberculose",
          "Est une nécrose éosinophile anhiste craquelée",
          "Peut se ramollir et se liquéfier",
          "Peut se calcifier, s'enkyster pour durer Indéfiniment",
          "Ne se résorbe jamais spontanément"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "Le caséum ne se résorbe jamais spontanément, il évolue vers l'enkystement, la calcification ou le ramollissement/liquéfaction."
      },
      {
        questionText: "Une suppuration diffuse est : (RJ)",
        options: [
          "Un abcès",
          "Un furoncle",
          "Un empyème",
          "Un phlegmon.",
          "Une gangrène"
        ],
        correctOptionIndexes: [3],
        explanation: "Phlegmon = suppuration diffuse. Abcès = collection localisée. Empyème = pus dans une cavité préexistante."
      },
      {
        questionText: "la réaction inflammatoire est un suite d’évènement qui s’enchainent : (RF)",
        options: [
          "Caractérisée par des réactions de nature cellulaire et humorale",
          "Elle débute par une première phase vasculo-exsudative",
          "Une deuxième phase cellulaire",
          "Une angiogenèse avec prolifération de nouveaux capillaires",
          "Toujours d’origine infectieuse"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "L'inflammation peut être déclenchée par des causes non infectieuses (physiques, chimiques, immunitaires)."
      },
      {
        questionText: "La diapédèse leucocytaire : (RF)",
        options: [
          "Se produit lors de la phase vasculo-exsudative de l’inflammation",
          "Est caractérisée par la marginalisation des leucocytes à l’endothélium vasculaire",
          "Nécessite la présence de glycoprotéines membranaires d’adhésion",
          "Se traduit par l’émission de pseudopodes par les leucocytes",
          "C’est l’infiltration des leucocytes entre les cellules endothéliales"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse. L'adhésion via glycoprotéines est nécessaire. Le doc source est contradictoire.
        explanation: "La diapédèse nécessite des molécules d'adhésion sur les leucocytes et l'endothélium."
      },
      {
        questionText: "l’inflammation : (RF)",
        options: [
          "Est une réaction de défense de l’organisme",
          "Se déroule dans un territoire vasculaire",
          "Passe par deux phases", // Aigue et chronique, ou vasculo-exsudative et cellulaire... ambigu
          "S’accompagne toujours d’une infection",
          "Fait intervenir des médiateurs chimiques"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "L'inflammation n'est pas toujours d'origine infectieuse."
      },
      {
        questionText: "au cour de la phase aigüe de la réaction inflammatoire tous les éléments lésionnels constitue le bourgeon charnu inflammatoire sauf un lequel :",
        options: [
          "Vasodilation et congestion vasculaire",
          "Œdème interstitiel",
          "Polynucléaires",
          "Macrophage",
          "Le fibroblaste"
        ],
        correctOptionIndexes: [4], // L'élément qui n'est PAS dans la phase aiguë initiale mais dans la phase de réparation/bourgeon.
        explanation: "Le fibroblaste est la cellule clé de la phase de réparation et de formation du bourgeon charnu, qui succède à la phase aiguë vasculo-exsudative."
      },
      {
        questionText: "la nécrose caséeuse : (RF)",
        options: [
          "Est blanc jaunâtre , d’aspect pateux et onctueux",
          "Peut se ramollir",
          "Rappelle le fromage blanc",
          "Peut se voir dans les infections à staphylocoques",
          "Apparait sous forme de plages acellulaires craquelée, éosinophile à l’hématéine éosine"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "La nécrose caséeuse est typique de la tuberculose, pas des infections à staphylocoques (qui causent plutôt une nécrose de liquéfaction/suppurée)."
      },
      {
        questionText: "la conduite nécessaire est absolu à une bonne cicatrisation lors d’un processus inflammatoire est : (RJ)",
        options: [
          "Une bonne détersion",
          "Une bonne vascularisation tissulaire",
          "Une innervation adéquate",
          "L’age jeune",
          "Une carence en vitamine C"
        ],
        correctOptionIndexes: [0],
        explanation: "La détersion (élimination des tissus nécrosés et débris) est une étape indispensable pour permettre une cicatrisation correcte."
      },
      {
        questionText: "Au cour de la phase de la réaction inflammatoire un des éléments lésionnels suivants est observé lequel? : (RJ)", // Devrait être "phase de réparation/chronique"?
        options: [
          "Congestion vasculaire",
          "Œdème interstitiel",
          "La diapédèse leucocytaire",
          "Une néogenèse vasculaire",
          "La fibrose"
        ],
        correctOptionIndexes: [4], // La fibrose est le stade final de la réparation/inflammation chronique.
        explanation: "La congestion, l'œdème et la diapédèse sont caractéristiques de la phase aiguë. La néoangiogenèse et la fibrose apparaissent lors des phases de réparation ou chronique."
      },
      {
        questionText: "Le granulome tuberculoïdes est constitué par : (RF)",
        options: [
          "Une couronne lymphocytaire périphérique",
          "De cellules épitheloides",
          "De cellules géantes de type Langhans",
          "De nécrose caséeuse",
          "De macrophage"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse. Les macrophages se transforment en cellules épithélioïdes.
        explanation: "Le granulome est composé de cellules épithélioïdes (macrophages transformés), de cellules géantes, de lymphocytes et souvent de nécrose caséeuse, mais pas de macrophages non transformés en grand nombre."
      }
    ]
  },
  {
    title: "Oncologie générale et tumeurs bénignes",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Toutes ces tumeurs sont des bénignes sauf une laquelle? (RJ)", // RJ = Réponse Juste (celle qui n'est PAS bénigne)
        options: [
          "Adénome",
          "Fibrome",
          "Létomyome", // Leiomyome
          "Carcinome",
          "Papillome"
        ],
        correctOptionIndexes: [3],
        explanation: "Le carcinome est une tumeur maligne d'origine épithéliale. Les autres sont des tumeurs bénignes."
      },
      {
        questionText: "L'Angiosarcome est : (RJ)",
        options: [
          "Une tumeur maligne du muscle strié",
          "Une tumeur bénigne du muscle lisse",
          "Une tumeur maligne vasculaire",
          "Une tumeur maligne du cartilage",
          "Une tumeur bénigne adipeuse"
        ],
        correctOptionIndexes: [2],
        explanation: "Angio- = vaisseau, Sarcome = tumeur maligne conjonctive."
      },
      {
        questionText: "La thrombose (Rf)", // RF = Réponse Fausse
        options: [
          "Est la formation d’un caillot sanguins dans les cavités vasculaires durant la vie",
          "Est due à une altération de la paroi vasculaire",
          "Entraine une stase sanguine",
          "Due à une hypocoagulabilité sanguine",
          "Commence par une adhérence des plaquettes sur la lésion endothéliale"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "La thrombose est favorisée par un état d'hypercoagulabilité (coagulation excessive), pas d'hypocoagulabilité."
      },
      {
        questionText: "Toutes ces tumeurs sont malignes sauf: (Rj)", // RJ = Réponse Juste (celle qui N'EST PAS maligne)
        options: [
          "Chondrome",
          "Rhabdomyosarcome",
          "Adenocarcinome",
          "Leiomyosarcome",
          "Lymphome"
        ],
        correctOptionIndexes: [0],
        explanation: "Le chondrome est une tumeur bénigne du cartilage. Les autres sont des tumeurs malignes."
      },
      {
        questionText: "Toutes ces tumeurs sont de nature vasculaire sauf: (Rj)", // RJ = Réponse Juste (celle qui N'EST PAS vasculaire)
        options: [
          "Hémangiome capillaire",
          "Lymphangiome",
          "Hémangiome caverneux",
          "Batriomycome", // Botryomycome (granulome pyogénique)
          "Angiosarcome"
        ],
        correctOptionIndexes: [3],
        explanation: "Le botryomycome est un bourgeon charnu hyperplasique réactionnel, pas une vraie tumeur vasculaire."
      },
      {
        questionText: "Le suffixe carcinome est utilisé pour nommer: (RJ)",
        options: [
          "Tumeur maligne épithéliale",
          "Tumeur maligne conjonctive",
          "Tumeur bénigne épithéliale",
          "Tumeur embryonnaire",
          "Tumeur bénigne mésenchymateuse"
        ],
        correctOptionIndexes: [0],
        explanation: "Carcinome désigne une tumeur maligne développée à partir d'un tissu épithélial."
      },
      {
        questionText: "Le rhabdomyosarcome est : (RJ)",
        options: [
          "Une tumeur maligne du muscle strié",
          "Une tumeur bénigne du muscle lisse",
          "Une tumeur maligne vasculaire.",
          "Une tumeur maligne du cartilage",
          "Une tumeur maligne des vaisseaux lymphatiques"
        ],
        correctOptionIndexes: [0],
        explanation: "Rhabdo- = muscle strié, Myo- = muscle, Sarcome = tumeur maligne conjonctive."
      },
      {
        questionText: "Toutes ces tumeurs sont bénignes Sauf une laquelle ? (RJ)", // RJ = celle qui n'est pas bénigne
        options: [
          "Adénome",
          "Fibrome",
          "Léiomyome",
          "Ostéosarcome",
          "Papillome"
        ],
        correctOptionIndexes: [3],
        explanation: "L'ostéosarcome est une tumeur maligne de l'os."
      },
      {
        questionText: "Le leiomyosarcome est : (RJ)",
        options: [
          "Une tumeur maligne épithéliale",
          "Une tumeur maligne nerveuse périphérique",
          "Une tumeur maligne du muscle lisse",
          "Line tumeur maligne Vasculaire",
          "Une tumeur maligne du cartilage"
        ],
        correctOptionIndexes: [2],
        explanation: "Leio- = muscle lisse, Myo- = muscle, Sarcome = tumeur maligne conjonctive."
      },
      {
        questionText: "Un liposarcome est :(RJ)",
        options: [
          "Une tumeur maligne du muscle strie",
          "Une tumeur bénigne du muscle lisse",
          "Une tumeur maligne vasculaire",
          "Une tumeur du tissu adipeux", // Préciser maligne
          "Une tumeur maligne du cartilage"
        ],
        correctOptionIndexes: [3], // Lipo- = graisse, Sarcome = tumeur maligne. Donc T. maligne du tissu adipeux.
        explanation: "Le liposarcome est une tumeur maligne dérivée du tissu adipeux."
      },
      {
        questionText: "Le grade histolpatologique des tumeurs (RJ)", // histopathologique
        options: [
          "Est basé sur le degré de différenciation tumorale",
          "Est base sur l'activité mitotique",
          "Est basé sur le degré d'atypies cytonucléaires",
          "Est définit différemment pour chaque tumeur",
          "Est basé sur le degré d'extension tumorale"
        ],
        correctOptionIndexes: [0],
        explanation: "Le grade histologique évalue le degré de ressemblance de la tumeur avec le tissu normal d'origine (degré de différenciation). Il prend en compte les atypies et les mitoses."
      },
      {
        questionText: "Les tumeurs bénignes : (RF)",
        options: [
          "Restent cantonnées au tissu dans lequel elles ont pris naissance",
          "Leur croissance est lente",
          "Elles ne récidivent pas après ablation chirurgicale complète",
          "Elles retentissent gravement sur l'organisme",
          "Le tissu tumoral reproduit de très près la structure du tissu initial"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Les tumeurs bénignes ont généralement un retentissement limité sur l'organisme, sauf complications (compression, production hormonale)."
      },
      {
        questionText: "le liposarcome est : (RJ)",
        options: [
          "Une tumeur maligne du tissu osseux",
          "Une tumeur maligne du muscle lisse",
          "Une tumeur maligne du cartilage",
          "Une tumeur bénigne adipeuse",
          "Toutes ces réponses sont fausses." // => Tumeur MALIGNE adipeuse
        ],
        correctOptionIndexes: [4],
        explanation: "Le liposarcome est une tumeur MALIGNE du tissu adipeux. Aucune des options A-D n'est correcte."
      },
      {
        questionText: "Le neurofibrome est : (RJ)",
        options: [
          "Une tumeur bénigne du muscle strié a",
          "Une tumeur bénigne du tissu cartilagineux",
          "Une tumeur bénigne des gaines des nerfs périphériques",
          "Une tumeur bénigne du système nerveux central",
          "Une tumeur bénigne des cellules ganglionnaires des nerfs périphériques"
        ],
        correctOptionIndexes: [2],
        explanation: "Le neurofibrome est une tumeur bénigne développée à partir des cellules de soutien des gaines nerveuses périphériques."
      },
      {
        questionText: "Parmi ces tumeurs laquelle est maligne ? (RJ)",
        options: [
          "Adénome",
          "Fibrome",
          "Léiomyome",
          "Cylindrome",
          "Papillome"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cylindrome (ou carcinome adénoïde kystique) est une tumeur maligne des glandes salivaires. Les autres sont bénignes."
      },
      {
        questionText: "Une tumeur a les propriétés suivantes : (RF)",
        options: [
          "Capacité de générer ses propres signaux mitogènes",
          "D'être sensible aux signaux externes d'inhibition de la croissance",
          "De proliférer sans limite",
          "D'infiltrer les tissus adjacents",
          "De constituer une néo-vascularisation"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "Les cellules tumorales (surtout malignes) perdent leur sensibilité aux signaux normaux d'inhibition de la croissance (ex: inhibition de contact)."
      },
      {
        questionText: "Toutes ces tumeurs sont malignes sauf une laquelle (RJ)", // RJ = celle qui est bénigne
        options: [
          "Carcinome adénoïde kystique",
          "Synovialosarcome",
          "Cystadénolymphome",
          "Adénocarcinome",
          "Ostéosarcome"
        ],
        correctOptionIndexes: [2],
        explanation: "Le cystadénolymphome (ou tumeur de Warthin) est une tumeur bénigne des glandes salivaires."
      },
      {
        questionText: "Comment appelle-t-on une tumeur maligne de l'épithélium de revêtement buccal? (RJ)",
        options: [
          "Adénome",
          "Carcinome indifférencié",
          "Carcinome épidermoïde",
          "Adénocarcinome",
          "Angiome"
        ],
        correctOptionIndexes: [2],
        explanation: "L'épithélium de la muqueuse buccale est de type malpighien (épidermoïde). Une tumeur maligne issue de cet épithélium est un carcinome épidermoïde."
      },
      {
        questionText: "Le chondrosarcome est : (RJ)",
        options: [
          "Une tumeur maligne du tissu osseux",
          "Une tumeur maligne du muscle lisse",
          "Une tumeur maligne vasculaire",
          "Une tumeur maligne du cartilage",
          "Une tumeur maligne adipeuse"
        ],
        correctOptionIndexes: [3],
        explanation: "Chondro- = cartilage, Sarcome = tumeur maligne conjonctive."
      },
      {
        questionText: "Le Shwannome est : (RJ)", // Schwannome
        options: [
          "Une tumeur bénigne du muscle strié",
          "Une tumeur bénigne du tissu osseux",
          "Une tumeur bénigne des gaines des nerfs périphériques",
          "Une tumeur bénigne du système nerveux central",
          "Une tumeur bénigne des cellules ganglionnaires des nerfs périphériques"
        ],
        correctOptionIndexes: [2],
        explanation: "Le schwannome est une tumeur bénigne développée à partir des cellules de Schwann qui forment la gaine de myéline des nerfs périphériques."
      },
      {
        questionText: "Une tumeur bénigne : (RF)",
        options: [
          "Est souvent encapsulée",
          "Refoule le tissu normal",
          "Présente une évolution lente",
          "Peut récidiver localement", // Peut récidiver si exérèse incomplète
          "Envahit souvent les vaisseaux"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "L'invasion vasculaire est une caractéristique des tumeurs malignes, pas bénignes."
      },
      {
        questionText: "Toutes ces tumeurs sont malignes sauf une laquelle ? (RJ)", // RJ = bénigne
        options: [
          "Carcinome adénoïde kystique",
          "Synovialosarcome",
          "Cystadénolymphome",
          "Adénocarcinome",
          "Ostéosarcome"
        ],
        correctOptionIndexes: [2],
        explanation: "Le cystadénolymphome (tumeur de Warthin) est une tumeur bénigne."
      },
      {
        questionText: "Toutes ces tumeurs sont bénignes sauf une laquelle ? (RF)", // RF = celle qui est maligne? La question est ambiguë. Je suppose RJ = maligne.
        options: [
          "Adénome",
          "Chondrome",
          "Léiomyome",
          "Lymphome",
          "Papillome"
        ],
        correctOptionIndexes: [3], // Lymphome est malin.
        explanation: "Le lymphome est une tumeur maligne du tissu lymphoïde."
      },
      {
        questionText: "Le Shwannome est : (RJ)", // Schwannome
        options: [
          "Une tumeur bénigne du muscle strié",
          "Une tumeur bénigne du tissu osseux",
          "Une tumeur bénigne des gaines des nerfs périphériques",
          "Une tumeur bénigne du système nerveux central",
          "Une tumeur bénigne des cellules ganglionnaires des nerfs périphériques"
        ],
        correctOptionIndexes: [2],
        explanation: "Développé à partir des cellules de Schwann des nerfs périphériques."
      },
      {
        questionText: "Toutes ces tumeurs sont bénignes sauf une laquelle ? (RJ)", // RJ = maligne
        options: [
          "Adénome",
          "Cylindrome",
          "Léiomyome",
          "Nævus",
          "Schwanome" // Schwannome
        ],
        correctOptionIndexes: [1],
        explanation: "Le cylindrome (carcinome adénoïde kystique) est une tumeur maligne."
      },
      {
        questionText: "Le chondrosarcome est: (RJ/s)", // RJ = juste
        options: [
          "Une tumeur maligne du tissu osseux",
          "Une tumeur maligne du muscle strié",
          "Une tumeur maligne du muscle lisse",
          "Une tumeur maligne du vasculaire",
          "Une tumeur maligne du cartilage"
        ],
        correctOptionIndexes: [4],
        explanation: "Tumeur maligne du cartilage."
      },
      {
        questionText: "L'adénocarcinome est : (RJ)",
        options: [
          "Une tumeur maligne de muscle strié",
          "Une tumeur bénigne du muscle lisse",
          "Une tumeur maligne vasculaire",
          "Une tumeur épithéliale glandulaire", // Préciser maligne
          "Une tumeur maligne du cartilage"
        ],
        correctOptionIndexes: [3], // Adéno = glande, Carcinome = tumeur maligne épithéliale
        explanation: "L'adénocarcinome est une tumeur maligne développée à partir d'un épithélium glandulaire."
      },
      {
        questionText: "Toutes ces tumeurs sont malignes sauf une laquelle ? (RJ)", // RJ = bénigne
        options: [
          "Adenocarcinome",
          "Fibrosarcome",
          "Léimysarcome", // Leiomyosarcome
          "Mélanome",
          "Papillome"
        ],
        correctOptionIndexes: [4],
        explanation: "Le papillome est une tumeur épithéliale bénigne."
      },
      {
        questionText: "Le papillome de la gencive est : (RF)",
        options: [
          "Une tumeur bénigne mésenchymateuse de la gencive",
          "Se développe à partir de l'épithélium de la muqueuse gingivale",
          "Réalise un aspect (crête de coq)",
          "A l’histologie réalise une architecture papillaire sans atypies cytonucléaires",
          "Montre parfois des mitoses à l'histologie"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le papillome est une tumeur épithéliale bénigne, pas mésenchymateuse."
      },
      {
        questionText: "Le papillome est : (RF)",
        options: [
          "Une tumeur bénigne",
          "Peut dégénérer",
          "Réalise un aspect de « crête de coq >>",
          "D'architecture papillaire sans atypies cytonucléaires",
          "D'origine mésenchymateuse"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse. Dégénérescence très rare. Source indique B comme RF.
        explanation: "Le papillome est d'origine épithéliale. La dégénérescence maligne est exceptionnelle pour les papillomes buccaux courants."
      },
      {
        questionText: "La forme d'anaplasie désigne : (Rj)",
        options: [
          "le défaut de différenciation d'une ébauche embryonnaire",
          "la transformation d'un tissu ou d'un autre tissu",
          "l'absence de différenciation d'un processus tumoral",
          "L'origine embryonnaire d'une tumeur",
          "Une très grande différenciation cellulaire"
        ],
        correctOptionIndexes: [2],
        explanation: "L'anaplasie est la perte de différenciation cellulaire et structurelle caractéristique des tumeurs malignes."
      },
      {
        questionText: "Comment appelle t-on une tumeur maligne du revêtement buccal ? (RJ)",
        options: [
          "Carcinome épidermoïde",
          "Chorio-carcinome",
          "Carcinome anaplasique",
          "Adénocarcinome",
          "Adénome"
        ],
        correctOptionIndexes: [0],
        explanation: "Le revêtement buccal étant un épithélium malpighien (épidermoïde), la tumeur maligne correspondante est un carcinome épidermoïde."
      },
      {
        questionText: "Le rhabdomysarcome est : (RJ)", // rhabdomyosarcome
        options: [
          "Une tumeur maligne de muscle strié",
          "Une tumeur bénigne de muscle lisse",
          "Une tumeur maligne vasculaire",
          "Une tumeur maligne du cartilage",
          "Une tumeur blastémateuse"
        ],
        correctOptionIndexes: [0],
        explanation: "Tumeur maligne du muscle strié."
      },
      {
        questionText: "Toutes ces tumeurs sont malignes sauf une laquelle ? (RJ)", // RJ = bénigne
        options: [
          "Adénocarcinome",
          "Papillome",
          "Fibrosarcome",
          "Chondrosarcome",
          "Mélanome"
        ],
        correctOptionIndexes: [1],
        explanation: "Le papillome est une tumeur bénigne."
      }
    ]
  },
  {
    title: "Tumeurs malignes et tissu cancéreux",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Quel est l'élément essentiel oui permet de distinguer une tumeur bénigne d'une tumeur maligne : (RJ)",
        options: [
          "La nécrose",
          "L'infiltration",
          "La récidive",
          "L'absence d'anomalies cytonucléaires",
          "La métastase"
        ],
        correctOptionIndexes: [4],
        explanation: "La capacité à donner des métastases est la caractéristique la plus fiable de la malignité."
      },
      {
        questionText: "Une néoplasie est: (RF)",
        options: [
          "Une prolifération cellulaire excessive anarchique indéfinie n'obéissant pas aux règles biologiques de l’organisme",
          "Est une masse tissulaire ressemblant plus ou moins au tissu normal",
          "A tendance à persister et à croitre indéfiniment",
          "Toujours bénigne",
          "Résulte d'une succession d'évènements génétiques"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Une néoplasie peut être bénigne ou maligne."
      },
      {
        questionText: "Les tumeurs malignes: (RF)",
        options: [
          "Sont de croissance rapide.",
          "Sont toujours indifférenciées",
          "Sont mal limitées aux concours irréguliers.", // contours
          "Infiltrent localement et régionalement les tissus de voisinage",
          "Evoluent spontanément, en absence du traitement, vers la mort."
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "Les tumeurs malignes peuvent avoir différents degrés de différenciation (bien, moyennement, peu différenciées ou indifférenciées)."
      },
      {
        questionText: "Les tumeurs malignes: (RF)",
        options: [
          "Donnent naissance à des métastases",
          "Caractérisées par la présence d'atypies cyto-nucléaires",
          "De croissance lente",
          "L'évolution, en l'absence de traitement, se fait spontanément vers la mort.",
          "Leur traitement est souvent chirurgical"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La croissance des tumeurs malignes est généralement rapide, bien que variable."
      },
      {
        questionText: "Le cancer in situ : (RF)",
        options: [
          "Est une prolifération cellulaire qui touche toute la hauteur de l'épithélium.",
          "Présente des anomalies architecturales, des atypies cytonucléaires et des mitoses anormales.",
          "Est caractérisé par l'infiltration de la membrane basale.",
          "Evolue vers un cancer invasif.",
          "Est de bon pronostic."
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Le cancer in situ, par définition, ne franchit PAS la membrane basale."
      },
      {
        questionText: "Le stroma tumoral: (RF)",
        options: [
          "Est un tissu conjonctivo-vasculaire anormal", // Il est réactionnel, pas intrinsèquement anormal.
          "Joue un rôle de soutien",
          "Est plus développé dans les tumeurs malignes épithéliales", // Typiquement oui (stroma réaction)
          "Joue un rôle de nutrition",
          "Peut-être inflammatoire"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse. Le stroma est non-tumoral, élaboré par l'hôte.
        explanation: "Le stroma est le tissu de soutien non tumoral (conjonctif, vasculaire, inflammatoire) élaboré par l'hôte autour des cellules cancéreuses."
      },
      {
        questionText: "Le stroma tumoral : (RF)",
        options: [
          "S'élabore lors de la phase d'invasion.",
          "Est un tissu conjonctivo vasculaire.",
          "Est un tissu non tumoral élaboré par l'hôte sous l'influence des cellules cancéreuses.",
          "Est constitué de cellules conjonctives anormales, avec vaisseaux sanguins néoformés.",
          "A un rôle d'oxygénation et nutrition."
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le stroma est constitué de cellules conjonctives normales (fibroblastes, cellules inflammatoires) et de vaisseaux néoformés, mais les cellules elles-mêmes ne sont pas tumorales/anormales."
      },
      {
        questionText: "L'aspect suivant ne peut être observé lors de l'examen cytologique des cellules cancéreuses (RJ):", // RJ = ce qui n'est PAS observé
        options: [
          "Anisocytoses",
          "Anisocayoses", // Anisocaryose
          "Répartition inégale de la chromatine",
          "Mitoses toujours normales",
          "Nucléole volumineux et multiple"
        ],
        correctOptionIndexes: [3],
        explanation: "Les cellules cancéreuses présentent souvent des mitoses anormales (tri-, multipolaires), pas toujours normales."
      },
      {
        questionText: "Quel est le signe essentiel qui permet de distinguer une tumeur maligne d'une tumeur bénigne (RJ)", // RJ basé sur le commentaire
        options: [
          "La nécrose",
          "L'infiltration",
          "La récidive",
          "Les anomalies cytonucléaires et les mitoses",
          "Les mitoses anormales" // Note: Le commentaire pointe vers les mitoses, mais la métastase est LE critère absolu.
        ],
        correctOptionIndexes: [4], // Se basant sur le commentaire fourni.
        explanation: "Bien que les métastases soient le critère absolu, la présence de nombreuses mitoses, surtout anormales, est un critère histologique majeur de malignité."
      },
      {
        questionText: "L'invasion locale se caractérise par (RJ)",
        options: [
          "Franchissement de la membrane basale par les cellules cancéreuses.", // Oui, pour les carcinomes
          "Constitution du stroma tumoral.", // Se fait pendant l'invasion
          "Extension progressive dans l'organe où elle est née.", // Oui
          "Envahissement des organes de voisinage", // Invasion régionale
          "Toutes ces réponses sont juste"
        ],
        correctOptionIndexes: [1], // Le document source indique B. Ambigu.
        explanation: "L'invasion locale implique le franchissement des barrières (membrane basale), l'extension dans l'organe et l'induction d'un stroma réactionnel."
      },
      {
        questionText: "Une tumeur maligne est caractérisée par : (RF)",
        options: [
          "Les mitoses anormales",
          "Les métastases à distance",
          "La taille de la tumeur",
          "La récidive locale",
          "Les anomalies cytonucléaires"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La taille de la tumeur n'est pas un critère de malignité en soi (une grosse tumeur peut être bénigne, une petite maligne)."
      },
      {
        questionText: "Dans la dissémination des cancers, quelle est la voie la plus fréquemment utilisée par les cellules néoplasiques ? (RJ)",
        options: [
          "Veineuse",
          "Artérielle",
          "Lymphatique",
          "Péri-nerveuse",
          "Tissu conjonctif interstitiel"
        ],
        correctOptionIndexes: [2],
        explanation: "La voie lymphatique est la voie de dissémination initiale la plus fréquente pour les carcinomes."
      }
      // Les QROC sont omises.
    ]
  },
  {
    title: "Tumeurs épithéliales et mésenchymateuses",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Le cylindrome Rf", // RF = Réponse Fausse
        options: [
          "Est une tumeur maligne à évolution rapide", // Evolution lente mais inexorable
          "Représente plus de la moitié des tumeurs des glandes salivaires accessoires", // Fréquent mais pas > 50%
          "Est une tumeur maligne glandulaire", // Oui
          "Est une tumeur bénigne mésenchymateuse", // Non, maligne épithéliale
          "A une propension à l'extension nerveuse" // Oui
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le cylindrome (carcinome adénoïde kystique) est une tumeur maligne épithéliale (glandulaire)."
      },
      {
        questionText: "Les tumeurs suivantes sont purement épithélial sauf une laquelle ? (Rj)", // RJ = celle qui n'est PAS épithéliale
        options: [
          "Lymphomes",
          "Les carcinomes",
          "Les papillomes",
          "Les adénomes",
          "Les condylomes"
        ],
        correctOptionIndexes: [0],
        explanation: "Les lymphomes sont des tumeurs malignes du tissu lymphoïde (mésenchymateux)."
      },
      {
        questionText: "Les adénomes: (RF)",
        options: [
          "Sont des tumeurs épithéliales glandulaires bénignes",
          "D'aspect macroscopique nodulaire",
          "Sont encapsulées",
          "D'évolution souvent lente",
          "Ne se cancérisent jamais"
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "Certains adénomes (ex: adénome pléomorphe, adénome colique) ont un potentiel de transformation maligne."
      },
      {
        questionText: "Comment dénomme-t-on une tumeur maligne épithéliale d'origine glandulaire : (RJ)",
        options: [
          "Un carcinome muco-épidermoide",
          "Adénocarcinome",
          "Papillome",
          "Un adénosarcome",
          "Un chondrosarcome"
        ],
        correctOptionIndexes: [1],
        explanation: "Adéno- = glande, Carcinome = tumeur maligne épithéliale."
      },
      {
        questionText: "Les tumeurs mésenchymateuses malignes: (RF)",
        options: [
          "Sont d'évolution rapide",
          "Donnent des métastases par voie hématogène",
          "En général de bon pronostic",
          "Sont d'aspect macroscopique nodulaire, mal limitées",
          "Sont riches en mitoses et nécrose"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Les sarcomes (tumeurs mésenchymateuses malignes) sont généralement de mauvais pronostic."
      },
      {
        questionText: "Le papillome est : (RF)",
        options: [
          "Une pseudotumeur épithéliale", // C'est une vraie tumeur bénigne
          "Se développe a partir de l'épithélium de surface de la muqueuse buccale",
          "Réalise un aspect des crêtes de coq",
          "A l'histologie réalise une architecture polaire sans les cytonucléaires", // papillaire
          "Peut dégénérer en cancer" // Très rarement
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le papillome est une tumeur bénigne épithéliale vraie, pas une pseudotumeur."
      },
      {
        questionText: "Les tumeurs mésenchymateuses bénignes : (RF)",
        options: [
          "Sont plus fréquentes que les sarcomes", // Vrai
          "N'ont pas de potentiel métastatique", // Vrai
          "Récidivent toujours après exérèse.", // Non, si exérèse complète
          "Sont classiquement de petite taille de piège superficiel", // Pas toujours
          "Peuvent présenter des mitoses" // Rarement, et normales
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Une tumeur bénigne complètement excisée ne récidive pas. La récidive suggère une exérèse incomplète ou une nature plus agressive."
      },
      {
        questionText: "On appelle une tumeur maligne épithéliale d'origine glandulaire : (RJ)",
        options: [
          "Un carcinome épidermoïde",
          "Un adénocarcinome",
          "Un papillome",
          "Un adénosarcome",
          "Un carcinome urothélial"
        ],
        correctOptionIndexes: [1],
        explanation: "Adéno- = glande, Carcinome = tumeur maligne épithéliale."
      },
      {
        questionText: "Comment apelle t-on une tumeur maligne des parenchymes glandulaire? (RJ)", // appelle-t-on
        options: [
          "Carcinome épidermoide",
          "Fibrosarcome",
          "Carcinome anaplasique",
          "Adenocarcinome",
          "Adénome"
        ],
        correctOptionIndexes: [3],
        explanation: "Adénocarcinome."
      },
      {
        questionText: "le papillome est : (RF)",
        options: [
          "une lésion bénigne mésenchymateuse", // Non, épithéliale
          "se développe à partir de la muqueuse buccale",
          "réalise un aspect macroscopique végétant en crête de coq",
          "a l’histologie réalise une architecture papillaire respectant la membrane basale",
          "peur récidiver" // peut
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le papillome est une tumeur épithéliale bénigne."
      },
      {
        questionText: "Le cancer in situ : (RF)",
        options: [
          "Est une prolifération cellulaire qui touche toute la hauteur del'épithélium",
          "Présente des anomalies architecturales, des atypies cytonucléaires et des mitoses anormales.",
          "Est un état précancéreux.", // C'est un cancer non invasif, pas précancéreux.
          "Évolue rapidement vers un cancer invasif.", // Pas toujours rapidement.
          "Est de bon pronostic" // Oui, si traité.
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Le cancer in situ est déjà un cancer, mais limité à l'épithélium (non invasif). Les états précancéreux sont les dysplasies."
      },
      {
        questionText: "L'aspect macroscopique d'une tumeur maligne épithéliale buccale est : (RJ)",
        options: [
          "Souvent ulcéré",
          "Bourgeonnant",
          "Blanchâtre", // Peut l'être (leucoplasique)
          "Ulcéro-infiltrant",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Les carcinomes buccaux peuvent prendre divers aspects macroscopiques : ulcération, bourgeonnement, infiltration, plaque blanche ou rouge."
      },
      {
        questionText: "Les carcinomes épidermoïdes matures sont reconnus morphologiquement par : (RJ)",
        options: [
          "Des ponts d'unions et kératinisation",
          "Des ponts d'unions et mucosécrétion",
          "Des ponts d'unions ct architecture glandulaire", // et
          "Une architecture glandulaire et mucosécrétion",
          "Des ponts d'union, kératinisation et mucosécrétion."
        ],
        correctOptionIndexes: [0],
        explanation: "La différenciation malpighienne (épidermoïde) se caractérise par la présence de ponts intercellulaires (desmosomes) et la production de kératine."
      },
      {
        questionText: "Le papillome est : (RF)",
        options: [
          "Une tumeur bénigne à double composante épithéliale et mésenchymateuse", // Non, purement épithéliale
          "Se développe à partir de l'épithélium de revêtement buccal",
          "Réalise un aspect macroscopique de « crête de coq >>",
          "A l'histologie réalise une architecture pupillaire sans infiltration de la membrane basale", // papillaire
          "Peut récidiver."
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le papillome est une prolifération de l'épithélium de revêtement, soutenue par un axe conjonctivo-vasculaire mais ce dernier n'est pas tumoral."
      },
      {
        questionText: "Le cancer in situ : (RF)",
        options: [
          "Est une prolifération cellulaire qui touche toute la hauteur de l'épithélium",
          "Présente des anomalies architecturales, des atypies cytonucléaires et des mitoses anormales.",
          "Est un cancer qui ne franchit pas la membrane basale.",
          "Évolue rapidement vers un cancer invasif.", // Pas toujours rapidement
          "Est de très mauvais pronostic" // Non, excellent pronostic si traité
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "Le cancer in situ a un excellent pronostic car il n'a pas la capacité d'envahir localement ou de métastaser tant qu'il reste in situ."
      },
      {
        questionText: "Le papillome est : (RF)",
        options: [
          "Une tumeur maligne mésenchymateuse", // Non, bénigne épithéliale
          "Se développe à partir de l'épithélium de revêtement jugal", // Possible, mais pas seulement jugal
          "Réalise un aspect macroscopique de « crête de coq >>",
          "A l'histologie réalise une architecture papillaire sans infiltration de la membrane basale",
          "Peut dégénérer en cancer" // Très rarement
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Le papillome est une tumeur épithéliale bénigne."
      },
      {
        questionText: "Le papillome est : (RF/s)", // RF pluriel
        options: [
          "Une tumeur épithéliale bénigne",
          "Se développe à partir de l'épithélium de surface de la muqueuse buccale",
          "Réalise un aspect de « crête de coq >>",
          "A l'histologie réalise une architecture papillaire sans atypies cytonucléaires",
          "Ne récidive jamais à près exérèse" // Peut récidiver si exérèse incomplète
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "Comme toute tumeur bénigne, une exérèse incomplète peut entraîner une récidive locale."
      }
    ]
  },
  {
    title: "Pathologie odontogène",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Toutes ces tumeurs odontogénes sont d'origine épithéliale pure sauf une? (RJ)", // RJ = celle qui n'est pas épithéliale pure
        options: [
          "Ameloblastome",
          "Tumeur odontogène à cellules claires",
          "Tumeur odontogène épidermoïde",
          "Odonto-ameloblastome",
          "Tumour épithéliale odontogène calcifice (T de PINDBORG)" // Tumeur
        ],
        correctOptionIndexes: [3],
        explanation: "L'odonto-améloblastome est une tumeur mixte, épithéliale et mésenchymateuse, avec formation de tissus dentaires durs."
      },
      {
        questionText: "L'Ameloblastome: (RF)",
        options: [
          "Est une tumeur odontogène mixte épithéliale et mésenchymateuse", // Non, épithéliale pure
          "Peut récidiver localement après exérèse",
          "Une structure histologique rappelani la structure adamantine", // rappelant
          "Se développe préférentiellement au niveau de la mandibule",
          "A la radio on observe une image polygéodique ostéolytique"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "L'améloblastome est classé parmi les tumeurs odontogènes purement épithéliales."
      },
      {
        questionText: "Parmi toutes ces tumeurs odontegène laquelle est ectomésenchymateuse pure", // odontogène
        options: [
          "Ameloblastome",
          "Fibrodentinome ameloblastique",
          "Myxome odontogene",
          "Odontoaméloblastome",
          "T odontogène adenomatoide" // Tumeur
        ],
        correctOptionIndexes: [2],
        explanation: "Le myxome odontogène, le fibrome odontogène et le cémentoblastome sont classés comme tumeurs ectomésenchymateuses pures."
      },
      {
        questionText: "Toutes ces tumeurs odontogènes sont épithéliales pures(sauf une laquelle: (RJ)", // RJ = non épithéliale pure
        options: [
          "Améloblastome",
          "Tumeur odontogène à cellules claires",
          "Tumeur odontogène épidermoide",
          "Cementoblatome", // Cémentoblastome (mésenchymateuse pure)
          "Tumeur épithéliale odontogène calcifiée (T de PINDBORG)"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cémentoblastome est une tumeur d'origine ectomésenchymateuse pure."
      },
      {
        questionText: "Le carcinome adénoide kystique ou cylindrome: (RJ)",
        options: [
          "Est composé de cellules acineuses",
          "Envahie souvent les structures nerveuses", // Envahit
          "Est souvent encapsulé", // Non, infiltrant
          "Est une tumeur bénigne", // Non, maligne
          "Fréquent au niveau de la parotide" // Oui, mais aussi ailleurs
        ],
        correctOptionIndexes: [1],
        explanation: "Le carcinome adénoïde kystique (cylindrome) est connu pour son neurotropisme marqué (propension à envahir les nerfs)."
      },
      {
        questionText: "L'Améloblastome: (RF)",
        options: [
          "Est une tumeur odontogène mixte épithéliale et mésenchymateuse", // Non, épithéliale pure
          "Peut récidiver localement après exérèse",
          "Sa structure histologique rappelant la structure adamantine",
          "Se développe préférentiellement au niveau de mandibule",
          "Evolue lentement"
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Tumeur purement épithéliale."
      },
      {
        questionText: "L'Améloblastome :(RF)",
        options: [
          "Est une tumeur odontogène épithéliale pure",
          "Récidive souvent après exérèse",
          "D'aspect histologique rappelant la structure améloblastique",
          "Se développe préférentiellement au niveau du palais osseux", // Non, mandibule
          "Souvent de nature bénigne" // Oui, mais localement agressif
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le siège préférentiel de l'améloblastome est l'angle et la branche montante de la mandibule (80%)."
      },
      {
        questionText: "Toutes ces tumeurs odontogenes sont d'origine épithéliale et conjonctive Sauf une : (RJ)", // RJ = non mixte
        options: [
          "Fibrome améloblastique",
          "Fibro-dentinome ameloblastique",
          "Fibro-odontome ameloblastiquel", // améloblastique
          "Odonto-ameloblastomes",
          "Tumeur épithéliale odontogene calcifiée" // Epithéliale pure
        ],
        correctOptionIndexes: [4],
        explanation: "La tumeur épithéliale odontogène calcifiée (tumeur de Pindborg) est classée comme purement épithéliale."
      },
      {
        questionText: "L'Améloblastome: (RF)",
        options: [
          "Est une tumeur odontogène pure épithéliale",
          "Ne récidive jamais localement après exérèse", // Non, récidives fréquentes
          "A fréquemment une architecture histologique folliculaire",
          "Se développe préférentiellement au niveau de la mandibule",
          "Apparait le plus souvent sous la forme bénigne"
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "L'améloblastome est connu pour son taux élevé de récidive locale si l'exérèse n'est pas suffisamment large."
      },
      {
        questionText: "Parmi toutes ces tumeurs odontogènes laquelle est ectomésenchymateuse pure? (RJ)",
        options: [
          "Fibrome améloblastique",
          "Fibrodentinome améloblastique.",
          "Cémentoblastome",
          "Odonto Améloblastome",
          "Todontogénique adénomatoide" // Tumeur odontogène
        ],
        correctOptionIndexes: [2],
        explanation: "Le cémentoblastome est une tumeur ectomésenchymateuse pure."
      },
      {
        questionText: "L'Améloblastome: (RF)",
        options: [
          "Est une tumeur odontogène pure épithéliale",
          "Peut récidiver localement à prés exérèse", // après
          "Une structure histologique rappel la structure adamantine", // rappelle
          "Se développe préférentiellement au niveau de la mandibule",
          "Ne se présente jamais sous la forme maligne" // Formes malignes existent (rares)
        ],
        correctOptionIndexes: [4], // RF = Réponse Fausse
        explanation: "Il existe des formes malignes rares : l'améloblastome malin (cytologiquement malin) et le carcinome améloblastique (métastasant)."
      },
      {
        questionText: "L'Améloblastome: (RJ/s)", // RJ = Juste(s)
        options: [
          "Est une tumeur odontogène mixte épithéliale et conjonctive", // Faux
          "Ne récidive jamais après exérèse", // Faux
          "Réalise une structure histologique rappelant la structure du cément dentaire.", // Faux (organe de l'émail)
          "se développe préférentiellement au niveau du palais osseux", // Faux (mandibule)
          "souvent de nature bénigne" // Vrai
        ],
        correctOptionIndexes: [4],
        explanation: "L'améloblastome est le plus souvent bénin, mais localement agressif et récidivant."
      },
      {
        questionText: "Toutes ces tumeurs odontogènes sont d'origine épithéliale et conjonctive sauf une laquelle : (RJ)", // RJ = non mixte
        options: [
          "Fibrome améloblastique",
          "Tumeur odontogène adénomatoide", // Considérée mixte par certains, épithéliale par d'autres.
          "Fibrodentinome améloblastique",
          "Odontome complexe",
          "Tumeur odontogène à cellules claires" // Epithéliale pure maligne
        ],
        correctOptionIndexes: [4], // La plus clairement non-mixte bénigne ici. TOA est débattue.
        explanation: "Le fibrome améloblastique, le fibrodentinome améloblastique et l'odontome complexe sont des tumeurs mixtes. La tumeur odontogène à cellules claires est épithéliale (et maligne). La TOA est principalement épithéliale."
      },
      {
        questionText: "Parmi toutes ces tumeurs odontogènes laquelle est d'origine épithéliale et conjonctive: (RJ)",
        options: [
          "Améloblastome", // Epithéliale pure
          "Tumeur odontogène à cellules claires", // Epithéliale pure
          "Tumeur odontogène épidermoide", // Epithéliale pure
          "Odonto-améloblastome", // Mixte
          "Tumeur épithéliale odontogène calcifiée (T de PINDBORG)" // Epithéliale pure
        ],
        correctOptionIndexes: [3],
        explanation: "L'odonto-améloblastome combine les caractéristiques d'un améloblastome et d'un odontome, il est donc mixte."
      },
      {
        questionText: "L'Améloblastome (RF)",
        options: [
          "Est une tumeur odontogène mixte épithéliale et mésenchymateuse", // Faux
          "Peut récidiver localement après exérèse",
          "Une structure histologique rappelant la structure adamantine",
          "Se développe préférentiellement au niveau de mandibule",
          "Fait de lobules de cellules épithéliales enchâssées dans un stroma riche en vaisseaux" // Stroma souvent peu abondant.
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "Tumeur odontogène épithéliale pure."
      },
      {
        questionText: "Parmi toutes ces tumeurs odontogènes laquelle est d'origine conjonctive: (RJ)", // = Ectomésenchymateuse pure
        options: [
          "Améloblastome",
          "Tumeur odontogène à cellules claires",
          "Tumeur odontogène épidermoide",
          "Odontome composé", // Mixte
          "Tumeur épithéliale odontogène calcifiée (T de PINDBORG)" // Epithéliale pure
        ],
        correctOptionIndexes: [4], // ERREUR dans le doc source? Aucune n'est purement conjonctive. La moins fausse serait Odontome? Mais c'est mixte.
        explanation: "Il semble y avoir une erreur dans les options ou la réponse attendue. Aucune de ces tumeurs n'est classée comme 'conjonctive pure'. Les tumeurs ectomésenchymateuses pures sont fibrome odonto, myxome odonto, cémentoblastome."
      },
      {
        questionText: "Toutes ces tumeurs odontogènes sont d'origine épithéliale sauf une laquelle: (RJ)", // RJ = non épithéliale
        options: [
          "Améloblastome",
          "Tumeur odontogène à cellules claires",
          "Tumeur odontogène épidermoide",
          "Odonto-améloblastome", // Mixte
          "Tumeur épithéliale odontogène calcifiée (T de PINDBORG)"
        ],
        correctOptionIndexes: [3],
        explanation: "L'odonto-améloblastome est une tumeur mixte (épithéliale et mésenchymateuse)."
      }
    ]
  },
  {
    title: "Pathologie des glandes salivaires",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "L'adénome pleomorphe :Rf?", // RF = Réponse Fausse
        options: [
          "Est appelée aussi tumeur mixte",
          "Récidive parfois",
          "Siège surtout au niveau de la parotide",
          "Est une tumeur maligne des glandes salivaires accessoires", // Non, bénigne et Pples > Acc
          "Est fait d'une prolifération glandulaire avec stroma mucoide, chondroide et myxoide."
        ],
        correctOptionIndexes: [3],
        explanation: "L'adénome pléomorphe est la tumeur bénigne la plus fréquente, siégeant surtout dans la parotide."
      },
      {
        questionText: "Comment appelle t-on une tumeur maligne glandulaire? (RJ)",
        options: [
          "Un carcinome épidermoïde",
          "Un chorio-carcinome",
          "Un carcinome anaplasique",
          "Un adénocarcinome",
          "Un adénome"
        ],
        correctOptionIndexes: [3],
        explanation: "Adéno- = glande, Carcinome = tumeur maligne épithéliale."
      },
      {
        questionText: "Quelle est la tumeur maligne la plus fréquente de la cavité buccale: (RJ)",
        options: [
          "Angiosarcome",
          "Carcinome épidermoide",
          "Mélanome",
          "Lymphome",
          "Un adenocarcinome"
        ],
        correctOptionIndexes: [1],
        explanation: "Le carcinome épidermoïde représente plus de 90% des cancers de la cavité buccale."
      },
      {
        questionText: "Toutes ces tumeurs des maxillaires sont bénignes sauf une, laquelle: (RJ)", // RJ = maligne
        options: [
          "Ostéome ostéoïde",
          "Chondrosarcome",
          "Ostéoblastome",
          "Chondroblastome",
          "Chondrome"
        ],
        correctOptionIndexes: [1],
        explanation: "Le chondrosarcome est une tumeur maligne du cartilage."
      },
      {
        questionText: "L'adénome pléomorphe : (RJ)",
        options: [
          "Est une tumeur mésenchymateuse maligne,",
          "Touche surtout les glandes salivaires accessoires,", // Non, principales
          "Seule la cytoponction permet de poser le diagnostic,", // Non, histologie post-op
          "Ne se cancérise jamais", // Peut se cancériser (rarement)
          "Est une tumeur mixte à stroma remanié chondroide, myxoide et mucoide." // Oui
        ],
        correctOptionIndexes: [4],
        explanation: "C'est une tumeur épithéliale bénigne, mixte (épithéliale et stromale), touchant surtout la parotide. Peut récidiver et se cancériser."
      },
      {
        questionText: "La tumeur bénigne la plus fréquente des glandes salivaires est: (RJ)",
        options: [
          "Le carcinome muco épidermoide",
          "L'adénome pléomorphe",
          "La tumeur de Warthin ou cystadénolymphome",
          "Le carcinome adénoïde kystique",
          "Les adénocarcinomes"
        ],
        correctOptionIndexes: [1],
        explanation: "L'adénome pléomorphe est de loin la tumeur salivaire bénigne la plus fréquente."
      },
      {
        questionText: "Dans la dissémination métastatique des carcinomes épidermoïdes de la cavité buccale, quelle est la voie la plus fréquemment utilisée par les cellules néoplasiques ? (RJ)",
        options: [
          "Endocavitare",
          "Artérielle",
          "Lymphatique",
          "Endonerveuse",
          "Tissu conjonctif interstitie" // interstitiel
        ],
        correctOptionIndexes: [2],
        explanation: "La dissémination des carcinomes se fait préférentiellement par voie lymphatique vers les ganglions régionaux."
      },
      {
        questionText: "L'adénome pléomorphe :(RF)",
        options: [
          "Est une tumeur épithéliale bénignes",
          "Récidive souvent après exérèse", // Récidive PARFOIS
          "Fréquent au niveau de la parotide",
          "Caractérisée souvent par une paralysie finale sur le plan clinique", // faciale? Non, signe de malignité.
          "Fait d'une prolifération épithéliale à stroma remanié myxoide, chondroide et hyalin"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "La paralysie faciale associée à une tumeur parotidienne est un signe de malignité, non d'adénome pléomorphe."
      },
      {
        questionText: "Le cylindrome: (RF)",
        options: [
          "Est une tumeur maligne épithéliale à évolution rapide", // Evolution lente
          "Réalise sur le plan histologique une architecture lobulaire cribriforme",
          "Siège le plus souvent au niveau des glandes salivaires accessoires",
          "Est une tumeur bénigne mésenchymateuse", // Non, maligne épithéliale
          "A une propension à l'extension nerveuse"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le cylindrome (carcinome adénoïde kystique) est une tumeur maligne épithéliale."
      },
      {
        questionText: "Le carcinome adénoïde kystique ou cylindrome : (RJ)",
        options: [
          "Est composé de cellules acineuses",
          "Envahie souvent les structures nerveuses", // Envahit
          "Est souvent encapsule", // Non
          "Est une tumeur bénigne", // Non
          "fréquent au niveau de la parotide" // Oui, mais + fréquent dans les accessoires
        ],
        correctOptionIndexes: [1],
        explanation: "Neurotropisme marqué."
      },
      {
        questionText: "L'adénome pléomorphe est : (RF)",
        options: [
          "Une tumeur bénigne épithéliale salivaire",
          "Son stroma est mixte mucoide, chondroide et osteoide", // Ostéoïde rare
          "Ne récidive pas après exérèse", // Si, parfois
          "Siège surtout au niveau des glandes salivaires principales",
          "Peut se transformer en adénocarcinome" // Carcinome ex-adénome pléomorphe
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'adénome pléomorphe peut récidiver, surtout si l'exérèse est incomplète ou si la capsule est rompue."
      },
      {
        questionText: "La tumeur la plus fréquente des glandes salivaires est : (RJ)",
        options: [
          "Tumeur de Wartin",
          "Carcinome épidermoide",
          "Mélanome",
          "Carcinome adénoide kystique",
          "Adénome pléomorphe"
        ],
        correctOptionIndexes: [4],
        explanation: "L'adénome pléomorphe est la plus fréquente de toutes les tumeurs salivaires (bénignes et malignes confondues)."
      },
      {
        questionText: "L'adénome pléomorphe est :(RF)",
        options: [
          "Une tumeur bénigne épithéliale du revêtement glandulaire salivaire",
          "Son stroma est remanié mucoide, chondroide el ostéoide", // et. Ostéoïde rare.
          "Récidive souvent après exérèse", // Souvent? Plutôt Parfois. Mais c'est la RF pointée.
          "Plus fréquent au niveau des glandes salivaires accessoires que la parotide", // Non, Parotide >> Accessoires
          "Peut se transformer en adénocarcinome" // Carcinome ex-AP
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse (selon le doc source, mais D est plus fausse)
        explanation: "La récidive n'est pas 'souvent', mais elle est possible. Le siège le plus fréquent est de loin la parotide."
      },
      {
        questionText: "L'adénome pléomorphe est: (RF)",
        options: [
          "Une tumeur bénigne épithéliale de revêtement glandulaire salivaire",
          "Son stroma est remanié mucoide, chondroide et ostéoide", // Ostéoïde rare
          "Ne récidive jamais après exérèse", // Si, parfois
          "Siège surtout au niveau de la parotide",
          "Peut se transformer en adénocarcinome" // Carcinome ex-AP
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "La récidive est possible."
      },
      {
        questionText: "Quel est le type histologique le plus fréquemment rencontré des tumeurs des glandes salivaires? (RJ/s)",
        options: [
          "Adénocarcinome",
          "Carcinome mixte",
          "Adénome pléomorphe",
          "Carcinome épidermoïde",
          "Cylindrome"
        ],
        correctOptionIndexes: [2],
        explanation: "L'adénome pléomorphe domine largement en fréquence."
      },
      {
        questionText: "Le kyste mucoide dit « Grenouillette » est :(RF/s)", // RF pluriel? Supposons RF simple.
        options: [
          "Est une tumeur bénigne épithéliales", // Non, pseudo-kyste
          "Se voit au niveau de la langue", // Non, plancher buccal
          "Ne dégénère jamais en cancer", // Vrai
          "Il est fait d'une paroi revêtue d'un épithélium cylindrique mucineux", // Non, pas de revêtement épithélial propre
          "Son traitement est l'exérèse" // Oui, ou marsupialisation
        ],
        correctOptionIndexes: [2], // Le doc source indique C comme RF. C est pourtant juste. A, B et D sont fausses. Incohérence.
        explanation: "La grenouillette est un pseudo-kyste (par extravasation de mucus) du plancher buccal, sans paroi épithéliale propre. Elle ne dégénère pas."
      },
      {
        questionText: "L'adénome pléomorphe : (RF)",
        options: [
          "Est une tumeur maligne à évolution rapide", // Non, bénigne lente
          "Est rare au niveau des glandes salivaires accessoires", // Moins fréquent que parotide, mais pas rare.
          "Présente une symptomatologie douloureuse", // Généralement indolore
          "Réalise à l'histologie une architecture glandulaire cribriforme", // Non, ça c'est le cylindrome
          "A une propension à l'extension nerveuse" // Non
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "L'adénome pléomorphe est une tumeur bénigne à croissance lente."
      },
      {
        questionText: "Quel est le type histologique de cancer le plus fréquemment rencontré dans les glandes salivaires? (RJ)",
        options: [
          "Carcinome adénoïde kystique", // Fréquent mais pas LE plus
          "Carcinome épidermoide", // Rare sauf métastase ou extension
          "Carcinome mixte", // Terme ambigu
          "Angiosarcome", // Très rare
          "Mélanome" // Très rare
        ],
        correctOptionIndexes: [0], // Le doc source indique A. Le Carcinome Mucoépidermoïde est souvent considéré le plus fréquent.
        explanation: "Parmi les cancers salivaires, le carcinome mucoépidermoïde est souvent cité comme le plus fréquent, suivi par le carcinome adénoïde kystique."
      },
      {
        questionText: "Le kyste mucoide dit << grenouillette » est : (RF)",
        options: [
          "Est une tumeur bénigne épithéliale", // Non, pseudo-kyste
          "Se voit surtout au niveau de la langue", // Non, plancher
          "Peut entrainer une gêne fonctionnelle", // Oui
          "Il est fait d'une paroi revêtue d'un épithélium cylindrique mucineux", // Non
          "Son traitement est l'exérèse" // Oui
        ],
        correctOptionIndexes: [0], // RF = Réponse Fausse
        explanation: "La grenouillette n'est pas une tumeur mais un pseudo-kyste."
      },
      {
        questionText: "Le cylindrome : (RF)",
        options: [
          "Est une tumeur maligne à évolution rapide", // Lente
          "Réalisé des massifs d'aspect cribriforme sur le plan histologique", // Réalise
          "Siège le plus souvent au niveau de la parotide", // Non, accessoires ++
          "Est d'origine épithéliale",
          "A une propension à l'extension nerveuse"
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "Le cylindrome (carcinome adénoïde kystique) est plus fréquent dans les glandes salivaires accessoires (palais notamment) que dans la parotide."
      },
      {
        questionText: "Le cylindrome des glandes salivaires (RF) :",
        options: [
          "Est une tumeur maligne à évolution rapide", // Lente
          "Récidive souvent après exérèse", // Oui
          "Siège surtout au niveau des glandes salivaires accessoires", // Oui
          "Réalisé à l'histologie des structures glandulaires bien différenciées", // Non, peu différenciées, aspect cribriforme typique
          "Infiltre le nerf facial" // Peut infiltrer les nerfs
        ],
        correctOptionIndexes: [2], // Le doc source indique C comme RF. Pourtant C est plutôt juste. A et D sont fausses. Incohérence.
        explanation: "Le cylindrome a une évolution lente mais un fort potentiel de récidive et d'infiltration nerveuse. Son siège préférentiel est les glandes accessoires."
      }
    ]
  },
  {
    title: "Pathologie buccale et maxillaire",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Le papillome de la gencive est: RF", // RF = Réponse Fausse
        options: [
          "Une tumeur bénigne",
          "Se développe à partir du chorion de la muqueuse gingivale", // Non, épithélium
          "Réalise un aspect de « crête de coq",
          "A l’histologie réalise une architectures papillaire",
          "Absence d'atypies cytonucléaires"
        ],
        correctOptionIndexes: [1],
        explanation: "Le papillome se développe à partir de l'épithélium de surface, pas du chorion (tissu conjonctif sous-jacent)."
      },
      {
        questionText: "L'épulis est:RF",
        options: [
          "Une pseudotumeur hyperplasique", // Souvent réactionnelle/hyperplasique
          "Siège habituellement sur le versant vestibulaire de la région incisure canine inférieure", // incisivo-canine
          "D'origine inflammatoire", // Souvent
          "Une tumeur bénigne d'origine vasculaire", // Peut être vasculaire (granulome pyo) mais pas toujours
          "Succède souvent à une ulcération provoquée par l'appareil de prothèse dentaire" // Plutôt diapneusie
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse. L'épulis n'est pas toujours une tumeur vasculaire.
        explanation: "Épulis est un terme clinique désignant une excroissance gingivale. L'histologie varie (fibreuse, inflammatoire, vasculaire, à cellules géantes...). Ce n'est pas toujours une tumeur vasculaire."
      },
      {
        questionText: "Comment appelle: on une tumeur maligne de revêtement gingival Rj", // appelle-t-on, RJ
        options: [
          "Carcinome épidermoïdes",
          "Fibrosarcome",
          "Carcinome anaplasique",
          "Adénocarcinome",
          "Adénome"
        ],
        correctOptionIndexes: [0],
        explanation: "Le revêtement gingival est un épithélium malpighien (épidermoïde)."
      },
      {
        questionText: "Quel est le type histologique le plus fréquemment rencontré dans le cancer du palais mous (RJ)", // mou
        options: [
          "Adénocarcinome", // fréquent car glandes accessoires
          "Carcinome épidermoïde", // fréquent aussi
          "Carcinome mixte",
          "Angiosarcome",
          "Mélanome"
        ],
        correctOptionIndexes: [1], // Le doc source indique B. Les deux (adénoK et CE) sont fréquents au palais mou.
        explanation: "Le palais mou contient à la fois un épithélium de revêtement malpighien et de nombreuses glandes salivaires accessoires. Le carcinome épidermoïde et l'adénocarcinome (notamment adénoïde kystique) y sont fréquents."
      },
      {
        questionText: "Une lésion gingivale rougeâtre et sessile, de petite taille dont l'examen histopathologique montre un granulome inflammatoire au sein d'un tissu fibreux richement vascularisé avec quelques ostéoclastes correspond à : (RJ)",
        options: [
          "Une diapneusie,",
          "Un botryomycome,",
          "Un papillome,",
          "Une épulis,", // Terme clinique général
          "Un kératoacanthome"
        ],
        correctOptionIndexes: [3], // L'histologie décrite correspond à une épulis périphérique à cellules géantes.
        explanation: "La description histologique (granulome inflammatoire, vascularisation, cellules géantes/ostéoclastes) est typique de l'épulis périphérique à cellules géantes."
      },
      {
        questionText: "Le papillome de la gencive est : (RF)",
        options: [
          "Une tumeur épithéliale bénigne",
          "Se développe à partir du chorion de la muqueuse gingivale", // Non, épithélium
          "Réalise un aspect de « crête de coq »",
          "A l'histologie réalise une architecture papillaire sans atypies cytonucléaires",
          "Peut évoluer vers la malignité" // Très rarement
        ],
        correctOptionIndexes: [1], // RF = Réponse Fausse
        explanation: "Origine épithéliale."
      },
      {
        questionText: "Comment appelle-t-on une tumeur maligne de l'épithélium de revêtement de la gencive?",
        options: [
          "Carcinome épidermoide",
          "Carcinosarcome",
          "Carcinoïde",
          "Adénocarcinome",
          "Adénome tubuleux"
        ],
        correctOptionIndexes: [0],
        explanation: "Carcinome épidermoïde."
      },
      {
        questionText: "Les lésions blanches de la muqueuse buccale regroupent: (RF)",
        options: [
          "Leucoplasie",
          "Lichen",
          "Angiome", // Lésion rouge/violacée
          "Candidose chronique", // Souvent blanche
          "Papillomatose floride" // Souvent blanche/verruqueuse
        ],
        correctOptionIndexes: [2], // RF = Réponse Fausse
        explanation: "L'angiome est une lésion vasculaire, typiquement rouge ou bleutée, pas blanche."
      },
      {
        questionText: "Toutes ces propositions concernant les aphtes sont justes sauf une laquelle ? (RJ)", // RJ = celle qui est fausse
        options: [
          "Se présentent comme des ulcérations à fond nécrotiques,", // fond jaunâtre fibrineux
          "Sont d'origine traumatique,", // Non, idiopathique/immunitaire
          "Peuvent siéger à n'importe quel point de la cavité buccale,", // Muqueuse non kératinisée ++
          "Leur évolution se fait par poussée",
          "Peuvent être géants"
        ],
        correctOptionIndexes: [1],
        explanation: "L'étiologie exacte des aphtes reste inconnue mais n'est pas d'origine traumatique directe (même si un traumatisme peut déclencher une poussée)."
      },
      {
        questionText: "Le kyste mucoide est : (RF)",
        options: [
          "Est un processus tumoral bénin épithélial", // Non, pseudo-kyste
          "Peut se voire au niveau de la cavité buccale", // voir
          "Entraine une gêne fonctionnelle",
          "Il est fait d'une paroi revêtue d'u épithélium cylindrique sécrétant mucoide", // Non, pas d'épithélium
          "Son traitement est l'exérèse"
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Le kyste mucoïde par extravasation (le plus fréquent) n'a pas de paroi épithéliale propre, c'est une collection de mucus entourée de tissu de granulation."
      },
      {
        questionText: "Toutes ces tumeurs de la cavité buccale sont malignes sauf une laquelle ? (RJ)", // RJ = bénigne
        options: [
          "Cylindrome",
          "Carcinome épidermoide",
          "Cystadénolymphome", // Bénigne (T. de Warthin)
          "Adenocarcinome",
          "Lymphome"
        ],
        correctOptionIndexes: [2],
        explanation: "Le cystadénolymphome est une tumeur bénigne."
      },
      {
        questionText: "La biopsie des lésions buccales est indiquée si: (RJ)",
        options: [
          "Augmentation de la taille de la lésion", // Oui
          "Évolution rapide", // Oui
          "Étiologie incertaine", // Oui
          "Pas de réponse au traitement", // Oui
          "Lésion douloureuse" // Pas forcément un critère
        ],
        correctOptionIndexes: [3], // Le doc source indique D (Pas de réponse au Tx). A, B, C sont aussi valides. Ambigu.
        explanation: "Une biopsie est indiquée pour toute lésion suspecte, persistante (> 2 sem), d'étiologie incertaine, évolutive, ou ne répondant pas au traitement initial."
      },
      {
        questionText: "L'épulis est : (RF)",
        options: [
          "Une lésion hyperplasique d'origine inflammatoire", // Souvent
          "Siège habituellement sur le versant vestibulaire de la région incisure canine inférieure", // Fréquent mais pas exclusif
          "Est une tumeur épithéliale bénigne gingivale", // Non, origine conjonctive le plus souvent
          "Son traitement est chirurgical",
          "De bon pronostic"
        ],
        correctOptionIndexes: [1], // Le doc source indique B comme RF. C est aussi faux.
        explanation: "L'épulis peut survenir n'importe où sur la gencive, bien que la région antérieure soit fréquente. Son origine n'est pas épithéliale."
      },
      {
        questionText: "Toutes ces lésions sont des pseudotumeurs de maxillaire sauf: (RJ/s)", // RJ = Vraie tumeur
        options: [
          "Chondrome", // Vraie tumeur bénigne
          "Dysplasie fibreuse", // Pseudotumeur/dystrophie
          "Fibrome ossifiant", // Vraie tumeur bénigne
          "Kyste solitaire", // Pseudotumeur/pseudo-kyste
          "Ostéoblastome" // Vraie tumeur bénigne
        ],
        correctOptionIndexes: [2], // Le doc source indique D (Kyste solitaire). Mais Chondrome, Fibrome ossifiant, Ostéoblastome sont aussi de vraies tumeurs. Ambigu.
        explanation: "Le kyste solitaire et la dysplasie fibreuse sont considérés comme des pseudotumeurs. Les autres sont de vraies tumeurs bénignes."
      },
      {
        questionText: "Toutes ces lésions sont des pseudotumeurs du maxillaire sauf une laquelle ? (RJ)", // RJ = Vraie tumeur
        options: [
          "Kyste anévrysmal", // Pseudotumeur
          "Ostéodysplasie fibreuse", // Pseudotumeur (Dysplasie fibreuse)
          "Fibrome ossifiant", // Vraie tumeur bénigne
          "Ostéome ostéoide", // Vraie tumeur bénigne
          "Lacune fibreuse" // Pseudotumeur (Défaut ostéofibreux)
        ],
        correctOptionIndexes: [2], // Fibrome ossifiant et Ostéome ostéoïde sont de vraies tumeurs. Le doc source indique C.
        explanation: "Le fibrome ossifiant est une vraie tumeur bénigne fibro-osseuse."
      },
      {
        questionText: "Le kyste mucoide est : (RF)",
        options: [
          "Est une pseudotumeur bénigne mésenchymateuse", // Oui
          "Peut se voir au niveau de la joue", // Oui (lèvre, plancher...)
          "Entraine une gêne fonctionnelle", // Souvent
          "Il est fait d'une paroi revêtue d'un épithélium cylindrique mucoide", // Non
          "Sont traitement est l'exérèse" // Son
        ],
        correctOptionIndexes: [3], // RF = Réponse Fausse
        explanation: "Pas de revêtement épithélial propre pour le kyste mucoïde par extravasation."
      },
      {
        questionText: "L'épulis est: (RF)",
        options: [
          "Une pseudotumeur hyperplasique",
          "Siège habituellement sur le versant vestibulaire de la région canine inférieure",
          "Est d'origine inflammatoire", // Le doc source indique C comme RF. L'origine est souvent inflammatoire/réactionnelle. A est plus juste comme RF car ce n'est pas toujours une pseudoT. Ambigu.
          "Son traitement est chirurgical",
          "Souvent d'origine inflammatoire" // Répétition de C?
        ],
        correctOptionIndexes: [2], // Selon le doc source.
        explanation: "Bien que souvent d'origine inflammatoire ou réactionnelle, ce n'est pas systématique (ex: épulis congénital)."
      },
      {
        questionText: "Une de ces lésions est une pseudotumeur du maxillaire laquelle: (RJ)",
        options: [
          "Chondrome",
          "Tumeur à cellule géantes", // Peut être réactionnelle (pseudoT) ou vraie tumeur
          "Fibrome ossifiant", // Vraie tumeur
          "Ostéosarcome", // Vraie tumeur maligne
          "Angiome capillaire" // Vraie tumeur / malformation
        ],
        correctOptionIndexes: [2], // Le doc source indique C. Mais le fibrome ossifiant est une vraie tumeur. Ambigu.
        explanation: "La 'tumeur' à cellules géantes peut correspondre au granulome central à cellules géantes, qui est une lésion réactionnelle (pseudotumeur)."
      },
      {
        questionText: "Toutes ces lésions sont des pseudotumeurs du maxillaire sauf une laquelle: (RJ)", // RJ = vraie tumeur
        options: [
          "Kyste anévrysmal",
          "Dysplasie fibreuse",
          "Kyste épidermoide", // Vrai kyste
          "Kyste solitaire",
          "Lymphome" // Vraie tumeur maligne
        ],
        correctOptionIndexes: [4],
        explanation: "Le lymphome est une tumeur maligne, pas une pseudotumeur."
      }
    ]
  },
{
    title: "1er Semestre 2019/2020",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "L'histologie désigne l'étude des : (RJ)",
        options: [
          "Etalements cellulaires",
          "Liquides d'aspiration",
          "Anomalies ultra structurales",
          "Lésions tissulaires constatées à l'œil nu",
          "Lésions tissulaires constatées à l'aide d'un microscope"
        ],
        correctOptionIndexes: [4],
        explanation: "L'histologie est par définition l'étude de la structure microscopique des tissus biologiques."
      },
      {
        questionText: "L'étape de fixation pour un examen pathologique de routine : (RF)",
        options: [
          "Permet de conserver la morphologie cellulaire",
          "Doit être immédiate",
          "Est indispensable pour un examen extemporané",
          "Se fait au formol tamponné à 10%"
        ],
        correctOptionIndexes: [2],
        explanation: "La question demande de cocher la réponse fausse (RF). La fixation est indispensable pour la technique de routine (paraffine), mais l'examen extemporané se fait par définition sur du tissu frais, non fixé, qui est congelé."
      },
      {
        questionText: "Les lésions cellulaires observées au microscope optiquesont : (RF)",
        options: [
          "Apoptose",
          "Anomalies de la membrane cytoplasmique",
          "Inclusion nucléaire",
          "Anomalies des organites",
          "Caryorrhexis"
        ],
        correctOptionIndexes: [3],
        explanation: "La question demande de cocher la réponse fausse (RF). Les anomalies des organites (mitochondries, réticulum endoplasmique...) sont des lésions ultra-structurales qui ne sont visibles qu'en microscopie électronique, et non en microscopie optique."
      },
      {
        questionText: "L'examen extemporané permet : (RF)",
        options: [
          "Une orientation diagnostique rapide",
          "Une vérification des limites d'exérèse",
          "Le contrôle de la nature du prélèvement",
          "De guider l'intervention chirurgical",
          "Une grande fiabilité diagnostique"
        ],
        correctOptionIndexes: [4],
        explanation: "La question demande de cocher la réponse fausse (RF). L'examen extemporané fournit une orientation rapide mais n'a pas la même fiabilité que l'analyse histologique standard sur paraffine. Le diagnostic est provisoire et doit toujours être confirmé."
      },
      {
        questionText: "La fibrose : (RF)",
        options: [
          "Correspond à une augmentation quantitative et qualitative de fibres conjonctives dans un tissu",
          "Se traduit par dépôts de fibres collagènes",
          "Est constituée de fibroblastes le plus souvent",
          "D'origine cicatricielle, succède à la réaction inflammatoire",
          "Peut entrainer une atrophie de l'organe"
        ],
        correctOptionIndexes: [0],
        explanation: "Bien que la fibrose soit une augmentation de fibres, la proposition (A) est considérée fausse dans le corrigé, probablement à cause du terme \"qualitative\" qui est ambigu. La fibrose est avant tout une augmentation quantitative de collagène."
      },
      {
        questionText: "La biopsie exérèse consiste à : (RJ)",
        options: [
          "Enlever une partie de la lésion",
          "Faire une microscopie à visée diagnostique",
          "Faire une réaction à visée thérapeutique",
          "Faire une ponction-biopsie",
          "Enlever la lésion dans sa totalité à visée diagnostique et thérapeutique"
        ],
        correctOptionIndexes: [4],
        explanation: "Une biopsie-exérèse (ou exérèse-biopsie) consiste à enlever la totalité de la lésion. Cet acte a un double but : thérapeutique (retirer la lésion) et diagnostique (l'analyser)."
      },
      {
        questionText: "Les fibroses peuvent être d'origine : (RJ)",
        options: [
          "Cicatricielle",
          "Dystrophique",
          "Métabolique",
          "Post inflammatoire",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "La fibrose est un processus de réparation ou de réaction qui peut être déclenché par de multiples causes : inflammation, cicatrisation, troubles métaboliques, etc."
      },
      {
        questionText: "Un examen cytologique est réalisé sur tout le prélèvement suivantsauf un lequel : (RF)",
        options: [
          "Un frottis",
          "Un culot de centrifugation",
          "Un étalement",
          "Un centrage biopsique",
          "Une apposition"
        ],
        correctOptionIndexes: [3],
        explanation: "Les frottis, culots, étalements et appositions sont des techniques de cytologie (étude des cellules isolées). Le centrage biopsique fait référence à une biopsie tissulaire (histologie)."
      }
    ]
  },
  {
    title: "1er Semestre 2017/2018",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "La métaplasie :(RF)",
        options: [
          "Est une forme d'adaptation cellulaire",
          "Est une anomalie congénitale",
          "Est la transformation d'un tissu normal par sa structure en un autre tissu anormal par sa localisation",
          "Est un changement dans la différenciation cellulaire en réponse à une agression pour aboutir à un tissu mieux adapté à l'agression d'origine",
          "Peut être réversible"
        ],
        correctOptionIndexes: [1],
        explanation: "La métaplasie est un processus d'adaptation acquis en réponse à une irritation chronique, ce n'est pas une anomalie congénitale."
      },
      {
        questionText: "Les principales réponses adaptatives d'une cellule et d'un tissu sont :(RF)",
        options: [
          "L'atrophie (ou hypotrophie)",
          "L'hypertrophie",
          "L'hyperplasie",
          "La métaplasie",
          "La nécrose"
        ],
        correctOptionIndexes: [4],
        explanation: "La nécrose est une mort cellulaire pathologique, ce n'est pas un mécanisme d'adaptation. Les mécanismes d'adaptation sont l'atrophie, l'hypertrophie, l'hyperplasie et la métaplasie."
      },
      {
        questionText: "La nécrose cellulaire : (RJ)",
        options: [
          "Désigne les modifications morphologiques irréversibles coïncidant avec la mortcellulaire",
          "...",
          "Est une mort cellulaire programmée",
          "Est un signe de bonne adaptation cellulaire",
          "Ne provoque pas de reponse inflammatoire"
        ],
        correctOptionIndexes: [0],
        explanation: "La nécrose est l'ensemble des altérations morphologiques qui suivent la mort d'une cellule au sein d'un tissu vivant, résultant d'une agression. Elle induit toujours une réaction inflammatoire."
      },
      {
        questionText: "L'apoptose : (RF)",
        options: [
          "Est une mort cellulaire programmée",
          "Concerne des cellules isolées c est le plus souvent un mécanisme physiologique de « suicide » cellulaire essentiel au développement, à la maturation, et au renouvellement normal des tissus.",
          "Est un processus actif",
          "Induit une réponse inflammatoire importante"
        ],
        correctOptionIndexes: [3],
        explanation: "La question demande la réponse fausse. L'apoptose est un processus actif de mort cellulaire programmée qui, contrairement à la nécrose, ne déclenche PAS de réaction inflammatoire. La proposition \"induit une réponse inflammatoire importante\" est donc fausse."
      },
      {
        questionText: "Parmi ces lésions cellulaires laquelle est réversible : (RJ)",
        options: [
          "Dégénérescence hydropique",
          "Pycnose",
          "Caryolyse",
          "Caryorrhexis",
          "Densifications matricielles mitochondriales"
        ],
        correctOptionIndexes: [0],
        explanation: "La dégénérescence hydropique (gonflement cellulaire par entrée d'eau) est le premier stade de l'altération cellulaire et est réversible si l'agression cesse. Les autres (Pycnose, Caryolyse, Caryorrhexis) sont des signes de mort cellulaire irréversible."
      },
      {
        questionText: "Quelle est la coloration de base en technique histopathologique pour mettre en évidence les fibres conjonctives ? (RJ)",
        options: [
          "Hématoxyline de Harris",
          "Trichrome de Masson",
          "Acide Périodique Schiff (PAS)",
          "Hémateine eosine (HE)",
          "Coloration de Grocott"
        ],
        correctOptionIndexes: [1],
        explanation: "Le Trichrome de Masson est la coloration de choix pour visualiser le collagène (fibres conjonctives), qu'il colore typiquement en bleu ou en vert."
      },
      {
        questionText: "La réaction inflammatoire est une suite d'évènements qui s'enchainent ? (RF)",
        options: [
          "Caractérisée par des réactions de nature cellulaire et humorale",
          "Elle débute par une première phase vasculo-exsudative",
          "Une deuxième phase cellulaire",
          "Une angiogenèse avec prolifération de nouveaux capillaires",
          "Toujours d'origine infectieuse"
        ],
        correctOptionIndexes: [4],
        explanation: "La question demande la réponse fausse. L'inflammation est une réponse à une agression, qui peut être infectieuse, mais aussi physique (brûlure, trauma), chimique (toxines) ou immunologique. Elle n'est donc pas toujours d'origine infectieuse."
      },
      {
        questionText: "La diapédèse leucocytaire ? (RF)",
        options: [
          "Se produit lors de la phase vasculo-exsudative de l'inflammation",
          "Est caractérisée par la marginalisation des leucocytes à l'endothélium vasculaire",
          "...",
          "Se traduit par l'émission de pseudopodes par les leucocytes",
          "c'est l'infiltration des leucocytes entre les cellules endothéliales"
        ],
        correctOptionIndexes: [2],
        explanation: "La diapédèse est le processus actif de traversée de la paroi vasculaire par les leucocytes. La marginalisation (B) précède la diapédèse."
      },
      {
        questionText: "L'examen extemporané : (RF)",
        options: [
          "Permet de déterminer la nature exacte de la lésion",
          "Permet un diagnostic histopathologique de présomption",
          "Est réalisé en pré opératoire",
          "Est pratiqué dans le but d'orienter l'acte chirurgical",
          "Est effectué sur un prélèvement congelé"
        ],
        correctOptionIndexes: [2],
        explanation: "C'est un examen per-opératoire (pendant l'opération), non pré-opératoire."
      },
      {
        questionText: "Lors de la mort cellulaire une condensation de la chromatine en un bloc correspond à une : (RF)",
        options: [
          "Caryolyse",
          "Cytolyse",
          "Apoptose",
          "Caryorrhexis",
          "Pycnose"
        ],
        correctOptionIndexes: [3],
        explanation: "La condensation de la chromatine en un bloc dense et rétracté est la définition de la pycnose (E). La caryorrhexis est la fragmentation de ce noyau pycnotique."
      },
      {
        questionText: "L'épulis : (RF)",
        options: [
          "Est une pseudotumeur hyperplasique",
          "Siège habituellement sur le versant vestibulaire gingival de la canine",
          "D'origine autoimmune",
          "Est d'origine vasculaire",
          "Succède souvent à une ulcération provoquée par l'appareil de prothèse dentaire"
        ],
        correctOptionIndexes: [2],
        explanation: "L'épulis est une hyperplasie réactionnelle du tissu conjonctif gingival, le plus souvent en réponse à une irritation locale chronique (tartre, prothèse mal adaptée). Ce n'est pas une maladie auto-immune."
      }
    ]
  },
  {
    title: "2016/2017",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Les fibres de collagènes : (RJs)",
        options: [
          "Sont élaborées par les macrophages",
          "Leur renouvellement est inconstant",
          "Sont dégradées par l'amylase",
          "Sont mises en évidence à l'histologie par la coloration de trichrome de Masson",
          "Sont responsable de la rigidité des tissus et la cohésion des cellules"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Le collagène est synthétisé par les fibroblastes (pas les macrophages) et mis en évidence par le Trichrome de Masson. Il assure la rigidité et la cohésion des tissus."
      }
    ]
  },
  {
    title: "1er Semestre 2015/2016",
    subject: "anatomo-pathologie",
    questions: [
      {
        questionText: "Les lésions cellulaires observées au microscope optique sont : (RF)",
        options: [
          "Vacuoles cytoplasmique",
          "Anomalies des mithocondries",
          "Inclusion nucléaire",
          "Pycnose",
          "Caryolyse"
        ],
        correctOptionIndexes: [1],
        explanation: "La question demande la réponse fausse. Les anomalies des mitochondries sont des altérations ultrastructurales visibles uniquement en microscopie électronique."
      },
      {
        questionText: "Quelle est la coloration de base en technique histopathologique : (RJ)",
        options: [
          "Hématoxyline de Harris",
          "Hématine",
          "Hémateine éosine",
          "Eosine",
          "Trichrome de Masson"
        ],
        correctOptionIndexes: [2],
        explanation: "La coloration standard et universelle en histopathologie est l'Hématéine-Éosine (HE), qui colore les noyaux en bleu/violet et les cytoplasmes en rose/rouge."
      },
      {
        questionText: "Parmi ces associations laquelle ne correspond pas à la mort cellulaire (RJ)",
        options: [
          "Caryorexis",
          "Dégénérescence hydropique",
          "Pycnose",
          "Pseudo- vacuoles intanucléaires",
          "Dégénérescence cireuse éosinophile"
        ],
        correctOptionIndexes: [1],
        explanation: "La question demande ce qui NE correspond PAS à la mort cellulaire. La dégénérescence hydropique est une lésion réversible. Tous les autres sont des signes de lésions irréversibles ou de mort cellulaire."
      },
      {
        questionText: "Parmi ces propositions lesquelles correspondent à la technique usuelle d'une pièce opératoire ? (RJ)",
        options: [
          "Fixation au formol 10%",
          "Inclusion en paraffine",
          "Fixation par congélation",
          "Coloration à l'hémateine éosine",
          "Imprégnation argentique",
          "Déshydratation"
        ],
        correctOptionIndexes: [0, 1, 3, 5],
        explanation: "La technique standard en histologie est : Fixation au formol (1), Déshydratation (6), Inclusion en paraffine (2), Coupe, et Coloration HE (4). La congélation est pour l'extemporané et l'imprégnation argentique est une coloration spéciale."
      },
      {
        questionText: "Au cour de la phase de la réaction inflammatoire un des éléments lésionnels suivants est observé lequel ? (RJ)",
        options: [
          "Congestion vasculaire",
          "Œdème interstitiel",
          "La diapédèse leucocytaire",
          "Une néogenèse vasculaire",
          "La fibrose"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La phase vasculo-exsudative de l'inflammation aiguë comprend la congestion (vasodilatation), l'œdème (augmentation de la perméabilité) et la diapédèse (sortie des leucocytes). La néogenèse et la fibrose appartiennent à la phase de réparation."
      },
      {
        questionText: "Faite les correspondances suivantes :\na- Métaplasie, b- Nécrose, c- Atrophie, d- Agénésie, e- Hyperplasie\n1. diminution de la taille d'une cellule ou d'un organe\n2. multiplication des cellules dans un organe donné\n3. défaut de développement d'un organe par absence d'Ebauche\n4. mort cellulaire ou tissulaire\n5. Transformation d'un tissu en un autre tissu normal par la fonction et anormal par sa topographie",
        options: [
          "a-5, b-4, c-1, d-3, e-2",
          "a-1, b-2, c-3, d-4, e-5",
          "a-2, b-3, c-4, d-5, e-1",
          "a-4, b-5, c-2, d-1, e-3"
        ],
        correctOptionIndexes: [0],
        explanation: "Correspondance des définitions de base en pathologie générale: Métaplasie (a-5), Nécrose (b-4), Atrophie (c-1), Agénésie (d-3), Hyperplasie (e-2)."
      },
      {
        questionText: "L'examen extemporané : (RF)",
        options: [
          "Est réalisé en pré opératoire",
          "Permet de déterminer la nature de la lésion",
          "Est effectué sur un prélèvement frais",
          "Est pratiqué dans le but d'orienter l'acte chirurgical",
          "Permet de donner un diagnostic de présomption"
        ],
        correctOptionIndexes: [0],
        explanation: "La question demande la réponse fausse. L'examen extemporané est per-opératoire (pendant l'opération), pas pré-opératoire."
      }
    ]
  },
];

module.exports = anatomoPathologieQuizzes;