// quizzes/year-4/paro-y4.js

const paroy4Quizzes = [
  {
    title: "Thérapeutique chirurgicale des parodontites",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Les incisions de décharge:",
        options: [
          "Sont des incisions intrasulculaires.", // 0%
          "Sont indispensables dans les interventions à lambeaux.", // 25%
          "Sont toujours des incisions de pleine épaisseur.", // 25%
          "Toutes les réponses sont fausses." // 50%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "B : Ils sont absolument essentiels si le lambeau doit être déplacé dans une autre position que la position préopératoire." // [cite: 11]
      },
      {
        questionText: "Le curetage parodontal à l’aveugle est indiqué:",
        options: [
          "Pour la plupart des gingivites", // 17%
          "En présence d'une poche parodontal inferieure à 6 mm.", // 50%
          "Pour évaluer la réponse tissulaire cicatricielle.", // 33%
          "Dans les atteintes de furcation classe I et Ill de Glickman." // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage, matches comment indication (<5mm)
        explanation: "Indications\n• Dans le cas de gingivite qui ne régresse pas après un détartrage sauf dans le cas de gingivite hyperplasique [cite: 24]\n• Poches parodontales : Curetage à l’aveugle (Poche parodontale supra-osseuse inférieur à 5 mm) [cite: 25]\n• Préparation à une chirurgie parodontale plus complexe, afin d’apprécier la réaction tissulaire et l’aptitude du patient à contrôler le biofilm bactérien. [cite: 26]\n• En cas d’abcès parodontal, le curetage accélère la guérison. [cite: 27]\n• Chez les patients où une technique chirurgicale agressive est contre-indiquée en raison de maladie systémique ou des problèmes psychologiques. [cite: 28]\n• Curetage peut être effectué sur des visites de contrôle comme une méthode de traitement de maintenance pour les zones d'inflammation récurrente. [cite: 29]"
      },
      {
        questionText: "En chirurgie parodontale, une incision de pleine épaisseur implique:",
        options: [
          "La dissection de toutes les couches du tissu gingival jusqu'à l'os.", // 100%
          "Une dissection superficielle pour préserver le périoste.", // 0%
          "Une incision de l'épithélium uniquement.", // 0%
          "Aucune différence par rapport à une incision partielle." // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Ce lambeau intéresse l’épithélium, le chorion gingival et le périoste, ce dernier est décollé de l’os sous-jacent. [cite: 41]\nB : c’est le lambeau d’épaisseur partielle (lambeau muqueux) [cite: 42]"
      },
      {
        questionText: "La chirurgie parodontale mini-invasive:",
        options: [
          "Nécessite futilisation de microscopes et de loupes.", // 33%
          "A été développée dans le but de préserver le tissu gingival marginal.", // 67%
          "Implique une incision intrasulculaire sous le point de contact dentaire pour les papilles.", // 0%
          "A comme inconvénient la perte des papilles interdentaires et des récessions postchirurgicales." // 0%
        ],
        correctOptionIndexes: [0, 1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "L'intervention chirurgicale qui permet la préservation d'une bande de gencive attachée est:",
        options: [
          "Le lambeau déplacé apicalement", // 100%
          "La greffe gingivale libre", // 0%
          "Le lambeau déplacé coronairement", // 0%
          "Le lambeau déplacé latéralement" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Cette intervention est issue des techniques de la chirurgie osseuse résèctrice dans le traitement des lésions osseuses induite par les parodontites. [cite: 65]\nLe but de traitement est de créer par résection une architecture osseuse proche de celle observée à l’état sain, en considérant qu’elle conditionne la morphologie gingivale. [cite: 66]"
      },
      {
        questionText: "Le lambeau muco periosté se caractérise par :",
        options: [
          "Une incision à biseau interne", // 42%
          "Une incision intrasulculare", // 42%
          "La présence d'un lit conjonctif vascularisé crée après son décollement", // 8%
          "une cicatrisation de seconde intention" // 7%
        ],
        correctOptionIndexes: [0, 1], // Highest percentages
        explanation: "C : Lambeau muqueux [cite: 78]"
      },
      {
        questionText: "Les incisions de décharge sont indiquées dans les types de lambeaux suivants :",
        options: [
          "Lambeau de Widman", // 44%
          "Lambeau positionné apicalement", // 39%
          "Lambeau de Widman modifié", // 10%
          "Lambeau de préservation des papilles" // 7%
        ],
        correctOptionIndexes: [0], // Highest percentage (though comment implies B)
        explanation: "Les incisions de décharge augmentent la laxité du lambeau, facilite sa manipulation et permettent de procurer un meilleur accès au site opératoire. [cite: 90]"
      },
      {
        questionText: "Parmi ces lambeaux, quel est celui qui n'est pas adapté sur le plan technique en cas de poche profonde:",
        options: [
          "lambeau de préservation des papilles", // 40%
          "lambeau de Widman modifi", // 12%
          "Lambeau de Widman", // 6%
          "Lambeau positionné apicalement" // 42%
        ],
        correctOptionIndexes: [3], // Highest percentage, consistent with comment
        explanation: "Inconvénients du Lambeau positionné apicalement :\nSacrifice des tissus parodontaux par résection osseuse. [cite: 103]\nL’exposition des surfaces radiculaires peut être à l’origine de problèmes esthétiques, d’une hypersensibilité radiculaire et peut augmenter le risque de caries radiculaires. [cite: 104]\nInadapté au traitement des poches parodontales profondes. [cite: 105]"
      },
      {
        questionText: "Le Curetage à ciel ouvert:",
        options: [
          "est indiqué dans le traitement de poches parodontales profondes", // 32%
          "s'effectue avec réclinaison d'un lambeau", // 30%
          "est indiqué dans le traitement de poches intra-osseuses", // 23%
          "est indiqué dans le traitement d'abcès parodontaux" // 15%
        ],
        correctOptionIndexes: [0, 1], // Highest percentage
        explanation: "c’est une Technique par laquelle l’élimination de l’épithélium de la poche est faite sous vision directe, obtenue après le décollement d’un lambeau. [cite: 117]"
      },
      {
        questionText: "Le lambeau classé selon l’exposition osseuse a ses réflexion, est :",
        options: [
          "lambeau simple", // 2%
          "lambeau de double épaisseur", // 31%
          "lambeau d'épaisseur partielle", // 29%
          "lambeau repositionné", // 3%
          "lambeau muqueux-périosté" // 35%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "A/D : Selon le repositionnement du lambeau après chirurgie [cite: 130]" // B/C/E relate to thickness/exposure
      },
      {
        questionText: "Le succès de la chirurgie parodontale min-invasive repose sur :",
        options: [
          "Le respect de intégrité des tissus", // 35%
          "Une instrumentation spécifiques", // 33%
          "Des incisions très étendues", // 0%
          "une meilleure cicatrisation" // 33%
        ],
        correctOptionIndexes: [0], // Highest percentage (A, B, D are all factors but A has slightly higher %)
        explanation: "Elle consiste à accéder à un défaut inter-proximale par une incision horizontale dans la gencive attaché connecté avec les incisions intra-sulculaire [cite: 141]"
      },
      {
        questionText: "Dans la technique de lambeau de Widman modifié; les incisions suivent la chronologie suivante:",
        options: [
          "Incision intrasulculaire-incision horizontale-incision à biseau Interne", // 13%
          "Incision à biseau interne - Incision horizontale-incision Intrasulculaire", // 4%
          "incision à biseau interne-incision Intrasulculaire-incision horizontale" // 83%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "1er incision à biseau interne: à 1mm du rebord gingival [cite: 151]\n2ème incision intra sulculaire: de toutes les dents à traiter [cite: 152]\n3ème incision horizontale : afin de détacher la paroi interne de la poche [cite: 153]"
      },
      {
        questionText: "Le curetage parodontal à ciel ouvert est indiqué dans le cas de poche parodontale intraosseuse :",
        options: [
          "Vrai", // 84%
          "Faux" // 16%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 163]
      },
      {
        questionText: "Le lambeau de Newman :",
        options: [
          "Nécessite une Incision a biseau interne", // 28%
          "Est décollé d'épaisseur partielle", // 4%
          "Nécessite des incisions de décharge", // 64%
          "La paroi du lambeau est éliminée par incision" // 4%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "A : une incision intra sulculaire [cite: 173]\nB : d’épaisseur totale [cite: 174]\nD : la paroi du lambeau est curetée afin d’éliminer l’épithélium de la poche et le tissu de granulation [cite: 175]"
      },
      {
        questionText: "L'intervention chirurgicale qui permet la préservation d'une bande de gencive attachée est :",
        options: [
          "Lambeau déplacé apicalement", // 44%
          "Greffe gingivale libre", // 12%
          "Lambeau déplacé coronairement", // 28%
          "Lambeau déplacé latéralement" // 16%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Le lambeau positionné apicalement a été proposé pour conserver le volume de gencive attachée lors de la chirurgie d’assainissement [cite: 187]"
      },
      {
        questionText: "Le lambeau de Widman modifie :",
        options: [
          "Nécessite une dissection en épaisseur partielle", // 4%
          "Se caractérise par une série de 3 incisions : biseau interne, intra sulculaire et horizontale", // 49%
          "Nécessite une dissection en épaisseur totale", // 43%
          "Nécessite une dissection mixte en épaisseur totale et en épaisseur partielle" // 4%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 199]
      },
      {
        questionText: "Les lambeaux peuvent être classes selon :",
        options: [
          "L'exposition de l'os", // 46%
          "Le positionnement du lambeau après chirurgie", // 47%
          "La hauteur du tissu kératinisé", // 7%
          "La position des dents sur l'arcade" // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 208]
      },
      {
        questionText: "L'objectif commun à tous les points de sutures matelassiers est de permettre une traction plus forte du lambeau en minimisant le risque de déchirure :",
        options: [
          "Vrai", // 90%
          "Faux" // 10%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 216]
      },
      {
        questionText: "Le lambeau de double épaisseur est un lambeau présentant :",
        options: [
          "Une partie en épaisseur totale comprenant de l'épithélium, du conjonctif et du périoste", // 54%
          "Une partie en épaisseur partielle comprenant uniquement du conjonctif et de l'épithélium", // 39%
          "Une partie en épaisseur totale comprenant de l'épithélium et du conjonctif", // 6%
          "Une partie apicale en épaisseur partielle comprenant uniquement de l'épithélium" // 2%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // Image provided in source [cite: 226]
      },
      {
        questionText: "Parmi les incisions cites ci-dessous, laquelle est éliminé dans la technique du lambeau de WIDMAN modifiée :",
        options: [
          "Incision a biseau interne", // 3%
          "Incision intra sulculaire", // 3%
          "Incision de décharge", // 92%
          "Incision horizontale" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // Image provided in source [cite: 237]
      },
      {
        questionText: "Dans le Lambeau de double épaisseur :",
        options: [
          "La partie coronaire est en épaisseur partielle", // 6%
          "La partie apicale est en épaisseur partielle", // 42%
          "La partie coronaire est en épaisseur totale", // 45%
          "La partie apicale est en épaisseur totale" // 7%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 247, 257]
      },
      {
        questionText: "Dans le Lambeau de préservation papillaire simplifie (SPPT), l'incision au niveau vestibulaire est :",
        options: [
          "Oblique", // 10%
          "Horizontale", // 6%
          "A biseau interne", // 6%
          "Intrasulculaire" // 77%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 267]
      },
      {
        questionText: "Le lambeau de Widman modifie est :",
        options: [
          "Reserve aux secteurs antérieurs", // 9%
          "Un lambeau d'épaisseur mixte", // 9%
          "Un lambeau d'accès", // 74%
          "Un lambeau repositionne" // 9%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "A : Réservé aux secteurs Prémolo molaires [cite: 279]\nB : d’épaisseur total [cite: 280]\nD : Un lambeaux replacé ( non repositionnés ) [cite: 281]"
      }
    ]
  },
  {
    title: "Traitement des anomalies alvéolaire dans le sens sagittal vertical et transversal",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Le traitement de l’endoalvéolie symétrique avec articulé inversé bilatérale peut ce faire avec:",
        options: [
          "Une plaque palatine avec vérin médian, en denture mixte stable", // 81%
          "Une plaque palatine avec vérin médian, en denture permanente", // 5%
          "Meulage des pointes canines temporaires", // 12%
          "Une plaque palatine avec vérin asymétrique" // 2%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "En denture permanente : quad hélix soudé sur bagues molaires 16/26 associé à une thérapeutique fixe multi-attaches. [cite: 465, 476, 487, 498, 509, 520, 531, 542, 553]" // Content repeated in source
      }
      // Note: The source file "uestion n° 70 .docx" repeats the same question multiple times. Included only once.
    ]
  },
  {
    title: "Lésion inter radiculaire",
    subject: "paro-y4",    questions: [
      {
        questionText: "Dans lésions interradiculaires, parmi les facteurs locaux suivants, quels sont ceux qui présentent plus d'options de traitement de ces lésions?",
        options: [
          "Les racines fusionnées", // 0%
          "Les dents à tronc radiculaire long et à racine courte", // 0%
          "Les dents à tronc radiculaire court à modéré et racines longues", // 50%
          "Les dents aux racines largement séparées", // 50%
          "Les dents à tronc radiculaire long" // 0%
        ],
        correctOptionIndexes: [2, 3], // Highest percentages
        explanation: " Longueur de la racine\n• Détermine la quantité d’attaches soutenant la dent. [cite: 868]\n• Racines courtes + tronc radiculaire long → perte de support importante dès l’atteinte de la furcation. [cite: 869]\n• Racines longues + tronc court ou modéré → traitement plus favorable car attaches suffisantes. [cite: 870]\n Largeur de l’espace interradiculaire\n• Influence la planification du traitement. [cite: 872]\n• Racines étroitement rapprochées ou fusionnées → instrumentation difficile (détartrage, surfaçage, chirurgie). [cite: 873]\n• Racines largement séparées → plus d’options thérapeutiques, traitement facilité. [cite: 874]"
      },
      {
        questionText: "La tunnelisation est une procédure chirurgicale :",
        options: [
          "Envisagée pour les molaires mandibulaires", // 33%
          "Indiquée en présence de tronc radiculaire court et de racines divergentes", // 25%
          "Indiquée en présence de tronc radiculaire long et de racines divergentes", // 8%
          "envisagée pour les molaires maxillaires", // 0%
          "Qui consiste en l'exposition de la zone de la furcation" // 33%
        ],
        correctOptionIndexes: [0, 4], // Highest percentages
        explanation: "Cette technique est envisagée pour les molaires mandibulaires avec une atteinte de furcation de dasse 3, avec un tronc radiculaire court, un espace inter radiculaire large. [cite: 887]"
      },
      {
        questionText: "Dans la classification des lésions Interradiculaires de Hamp et Fletcher, la classe IIB, correspond à une:",
        options: [
          "atteinte de part en part, et la sonde peut entièrement passer entre les racines et perte osseuse verticale comprise entre 4 et 6 mm", // 33% (Source 905)
          "lyse osseuse horizontale supérieure à 3 mm mais non transfixante et perte osseuse verticale comprise entre 4 et 6 mm", // 67% (Source 906)
          "atteinte de part en part, et la sonde peut entièrement passer entre les racines et perte osseuse verticale égale ou supérieure à 7 mm", // 0% (Source 907)
          "lyse asseuse horizontale supérieure à 3 mm mals non transfixante et perte osseuse verticale égale ou supérieure à 7 mm", // 0% (Source 908)
          "perte osseuse verticale inférieure à 3 mm et une perte osseuse verticale comprise entre 4 et 6 mm" // 0% (Source 909)
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Classes de Hamp et al. [cite: 911]\n1. Classe I : \n o Lyse osseuse horizontale < 3 mm. [cite: 913]\n2. Classe II : \n o Lyse osseuse horizontale > 3 mm. [cite: 915]\n o Non transfixante (la sonde ne passe pas complètement). [cite: 916]\n3. Classe III : \n o Lyse osseuse transfixante. [cite: 918]\n o La sonde passe entièrement entre les racines. [cite: 919]\n(Note: Fletcher adds vertical component A/B/C)"
      },
      {
        questionText: "Dans la Classification de Tarnow et Fletcher, la sous classe B détermine la:",
        options: [
          "Perte horizontale d'os interradiculaire à partir de la furcation.", // 13%
          "Perte verticale d'os interradiculaire à partir de la furcation.", // 38%
          "Profondeur verticale de 1 à 3 mm.", // 0%
          "Profondeur verticale de 4 à 6 mm." // 50%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "-Classification de TARNOW et FLETCHER: (1984) composante verticale [cite: 931]\nDegré A: défaut osseux vertical 1 à 3mm [cite: 932]\nDegré B: défaut osseux vertical 4 à 6mm [cite: 933]\nDegré C : défaut osseux vertical > ou = 7mm [cite: 934]"
      },
      {
        questionText: "Les thérapeutiques régénératrices:",
        options: [
          "sont possibles sur une racine avec hémi-septum inter-radiculaire total ou partiel d'une 46.", // 25%
          "sont toujours préférables pour les lésions infra-osseuses de plus de 05 mm.", // 50%
          "constitue un choix thérapeutique pour le rebord irrégulier inter-radiculaire d'une 36.", // 25%
          "aboutissent à la formation d'un épithélium jonctionnel long." // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 945]
      },
      {
        questionText: "Parmi les possibilités thérapeutiques suivantes, quelles sont les techniques chirurgicales qui peuvent gérer une lésion interradiculaire de classe I de Hamp et al?",
        options: [
          "Chirurgie à lambeau.", // 100%
          "Résection radiculaire.", // 0%
          "Tunnellisation.", // 0%
          "Chirurgie de RTG" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage (matches image table)
        explanation: "" // Image provided in source [cite: 955]
      },
      {
        questionText: "Les possibilités de guérison des lésions parodontales regroupent plusieurs éléments parmi eux:",
        options: [
          "La capacité d'induction de la matrice osseuse minéralisée.", // 22%
          "Des concepts pour le conditionnement de la surface osseuse vasculaire", // 22%
          "La bioacceptance retrouvée après détoxication d'une surface radiculaire auparavant décontaminée.", // 11%
          "Le concept de compartiment des tissus.", // 22%
          "Le réseau local composé de facteurs de croissance, de médiateurs cellulaires et de molécules d'adhésion." // 22%
        ],
        // All options A, B, D, E have the highest percentage (22%)
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "" // No specific comment provided in source [cite: 968]
      },
      {
        questionText: "L'allogreffe Peut être associée à un matériau alloplastique:",
        options: [
          "OUI", // 0%
          "NON" // 100%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "ALLO-GREFFES: [cite: 978]\nOs d'origine humain, ces allogreffes sont constitués d'os lyophilisé, congelé et déminéralisé ou non déminéralisé. [cite: 979]\nSelon certains auteurs ces matériaux permettent une régénération importantes des lésions, pour d'autres le pouvoir ostéo- Inducteur est faible la variabilité des résultats peut être expliquée par la nature de l'allogreffe. [cite: 980]"
      },
      {
        questionText: "L'hémisection est indiquée :",
        options: [
          "En cas d'atteinte de furcation de classe 3", // 50%
          "Pour des racines non divergentes", // 0%
          "En cas de tronc radiculaire réduit", // 50%
          "En cas de tronc radiculaire long" // 0%
        ],
        correctOptionIndexes: [0, 2], // Highest percentages
        explanation: "Hémisection: [cite: 992]\nUne hémisection peut aussi souvent être suivie par l'extraction d'une des moitiés de dents sectionnée. [cite: 993]\nC'est le cas quand la perte sévère d'attachement est restreint à une seule racine, l'autre racine pouvant être traitée séparément et qu'il n'y a pas d'autre piliers distaux stables. [cite: 994]\nInconvénients: [cite: 995]\nIndications limitées car la technique nécessite des conditions de réalisation telles que: [cite: 996]\n-un tronc radiculaire court, des racines très divergentes et volumineuses. [cite: 997]"
      },
       {
        questionText: "Dans la Classification de Tarnow et Fletcher, la sous classe A détermine la:",
        options: [
          "Perte horizontale d'os interradiculaire à partir de la furcation.", // 5%
          "Perte verticale d'os interradiculaire à partir de la furcation.", // 60%
          "Profondeur verticale de 1 à 4 mm.", // 26% (Should be 1-3mm based on comment)
          "Profondeur verticale de 4 à 6 mm.", // 4%
          "La destruction des tissus parodontaux ne dépassant pas le 1/3 de la largeur de la dent." // 6%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "- degré A : perte osseuse verticale inférieure à 3mm; [cite: 1010]\n- degré B : perte osseuse verticale comprise entre 3 et 6mm; [cite: 1011]\n- degré C : perte osseuse verticale supérieure à 6mm. [cite: 1012]"
      },
      {
        questionText: "Selon McGuire les atteintes de furcation degré II peuvent présenter un pronostic:",
        options: [
          "Moyen", // 17%
          "Mauvais", // 27%
          "Bon", // 6%
          "Sombre", // 6%
          "Réservé" // 44%
        ],
        correctOptionIndexes: [4], // Highest percentage, consistent with one part of the comment
        explanation: "atteinte de furcation degré II (localisation et Profondeur fournissent une maintenance possible mais difficile) : Pronostic mauvais [cite: 1025]\natteinte de furcation degré II (accès difficile) : Pronostic réservé [cite: 1026]"
      },
      {
        questionText: "Dans l'étiologie des lésions interradiculaires, parmi les facteurs embryologiques on retrouve les les hypoplasies amélaires atypiques:",
        options: [
          "Vrai", // 25%
          "Faux" // 75%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Les hypoplasies cémentaire atypiques et non pas amélaires [cite: 1036]"
      },
      {
        questionText: "La tunnelisation est une procédure chirurgicale:",
        options: [
          "Indiquée en cas de hauteur du tronc radiculaire importante avec espace radiculaire large", // 7%
          "Qui consiste en l'exposition de l'espace inter-radiculaire", // 78%
          "Indiquée en cas alvéolyse inter-radiculaire supra-osseuse", // 8%
          "Indiquée lorsque la perte sévère d'attachement est restreinte à une seule racine", // 2%
          "Indiquée en cas de résorption périapicale sévère" // 4%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "d’aménager les tissus parodontaux pour permettre un accès au contrôle de plaque dans la furcation en autorisant le passage d’une brossette interdentaire de part en part. [cite: 1049]\nElle est indiquée pour les LIR modérées à sévères, essentiellement mandibulaires, en présence de tronc radiculaire court et de racines divergentes et longues. [cite: 1050]"
      },
      {
        questionText: "Dans les thérapeutiques des lésions interradiculaires de classe 1 on retrouve:",
        options: [
          "Des Opération à lambeaux", // 30%
          "L'Odontoplastie", // 33%
          "La Gingivectomie/gingivoplastie", // 34%
          "La Tunnélisation", // 3%
          "La Résection radiculaire" // 0%
        ],
        correctOptionIndexes: [2], // Highest percentage (matches image table)
        explanation: "" // Image provided in source [cite: 1062]
      }
    ]
  },
  {
    title: "Défauts osseux parodontaux",
    subject: "paro-y4",    
    questions: [
       {
        questionText: "Les possibilités de guérison des lésions parodontales regroupent plusieurs éléments parmi eux:",
        options: [
          "La capacité d'induction de la matrice osseuse minéralisée.", // 22%
          "Des concepts pour le conditionnement de la surface osseuse vasculaire", // 22%
          "La bioacceptance retrouvée après détoxication d'une surface radiculaire auparavant décontaminée.", // 11%
          "Le concept de compartiment des tissus.", // 22%
          "Le réseau local composé de facteurs de croissance, de médiateurs cellulaires et de molécules d'adhésion." // 22%
        ],
        correctOptionIndexes: [0, 1, 3, 4], // Highest percentages (tied)
        explanation: "" // No comment in source [cite: 968, 2628] (Question duplicated across files)
      },
       {
        questionText: "Le cratère osseux:",
        options: [
          "est une vraie poche infra-osseuse.", // 10%
          "est une lésion supra-osseuse à 02 parois osseuses résiduelles.", // 20%
          "peut-être une perte de substance osseuse entourant la dent.", // 30%
          "est une lésion Intra-osseuse." // 40%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Le cratère :\n• Concavités situées à l’intérieur de la crête inter-dentaire. [cite: 2570]\n• Bordées par deux parois : vestibulaire et buccale. [cite: 2571]\n• Plus rarement : entre surface dentaire et table osseuse vestibulaire/buccale, ou entourant toute la dent. [cite: 2572]\nClassification d’Ochsenbein et Bohannan (1964) [cite: 2574]\n• Classe 1 : Cratère concave de 2-3 mm, parois épaisses (vestibulaire et buccale). [cite: 2575]\n• Classe 2 : Cratère concave de 4-5 mm, orifice large, parois plus minces. [cite: 2576]\n• Classe 3 : Cratère concave de 6-7 mm. [cite: 2577]\n• Classe 4 : Cratère de profondeur variable, parois osseuses fines. [cite: 2578]"
      },
      {
        questionText: "Le diagnostic des défauts osseux Induits par la plaque :",
        options: [
          "est basé essentiellement sur la radiographie.", // 18%
          "se fait par le sondage parodontal horizontal et vertical.", // 45%
          "précède l'examen de la gencive.", // 9%
          "peut être associé à un abcès parodontal." // 27%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "A : Le diagnostic des défauts osseux et de leur morphologie est une étape clé. [cite: 2590]\nCelui-ci repose sur un examen clinique et des examens complémentaires. [cite: 2591]\nB : Sonde parodontale : elle permet l'évaluation du degré d'atteinte verticale cad la profondeur de la poche et la perte d'attache; [cite: 2592]"
      },
      {
        questionText: "La déhiscence:",
        options: [
          "est une fenestration plus large affectant les faces vestibulaires des Incisives.", // 22%
          "Indique un biotype osseux fin.", // 56%
          "est un défaut supra-osseux.", // 11%
          "à ce niveau, la racine n'est recouverte que par le périoste et la gencive ou la muqueuse sus-jacente." // 11%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Déhiscence: [cite: 2604]\nElle se présente comme une accentuation importante du feston de la crête alvéolaire la transformant en une véritable échancrure. [cite: 2605]\nC'est un défaut en forme de U sur la face vestibulaire ou buccale qui se prolongent jusqu'au rebord osseux. [cite: 2606]"
      },
      {
        questionText: "L'intervention combinée ostéoectomie/ostéoplastie :",
        options: [
          "est Indiquée en cas de cratère inter-dentaire de 02mm.", // 18%
          "crée une sensibilité dentinaire.", // 18%
          "crée une sensibilité cémentaire.", // 18%
          "est possible sur une 36 avec un contour bulbeux de l'os." // 45%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2617]
      },
      {
        questionText: "Dans les lésions Intra-osseuses, la lésion circonscrite par des parois dentaires avasculaires et conjonctives concerne :",
        options: [
          "Une lésion Intra-osseuses à trois parois", // 10%
          "Une lésion Intra-osseuses à une paroi", // 56%
          "Une lésion Intra-osseuses à deux parois", // 12%
          "Le cratère osseux" // 21%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Dans ce type de lésion, seul un mur osseux interdentaire est préservé ; [cite: 2640]\nles corticales vestibulaire et linguale ou palatine sont détruites. [cite: 2641]"
      },
      {
        questionText: "Parmi les indications de la chirurgie osseuse résectrice, on cite:",
        options: [
          "Profondeur du défaut intra-osseux de 3 mm", // 38%
          "Lésion Interradiculaire de classe I ou II", // 32%
          "Lésion interradiculaire de classe II ou III", // 20%
          "Poche parodontale supérieure à 8 mm" // 10%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Autre : [cite: 2652]\nCorriger les balcons osseux ; les tori et les exostoses [cite: 2653]\nPour améliorer le profil osseux irrégulier [cite: 2654]\nB : si le diamètre du tunnel de la furcation est étroit ou si l’accès à la furcation est restreint ; [cite: 2655]\nune ostéoplastie peut être nécessaires [cite: 2656]"
      },
       {
        questionText: "L'ostéoinduction:",
        options: [
          "est un processus physico-chimique", // 17%
          "est un processus chimique", // 30%
          "est un processus au cours de laquelle les molécules contenues dans le greffon induisent la différenciation des cellules adjacentes en ostéoblastes", // 47%
          "est un processus au cours de laquelle la matrice du greffon forme une plate-forme favorisant sa pénétration par des ostéoblastes.." // 6%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "D : Ostéoconduction [cite: 2668]"
      },
      {
        questionText: "L'architecture osseuse est dite négative, lorsque :",
        options: [
          "le niveau osseux radiculaire est plus bas que celui interdentaire.", // 27%
          "le niveau osseux radiculaire est au même niveau que celui de l'os radiculaire.", // 5%
          "le niveau osseux interdentaire est plus apical que le niveau osseux radiculaire", // 66%
          "l'os alvéolaire au niveau proximal est plus haut qu'au vestibulaire ou au lingual" // 2%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2679]
      },
      {
        questionText: "Les lyses osseuses vestibulaire et linguale peuvent être évaluées :",
        options: [
          "a la radiographie", // 12%
          "au sondage parodontal", // 19%
          "par la mesure de la perte d'attache", // 7%
          "qu'après exposition chirurgicale", // 51%
          "Toutes les réponses sont justes" // 11%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "A : Les lyses verticales ou angulaires localisées en inter-dentaires peuvent être visibles dans la radiographie. [cite: 2690]"
      },
       {
        questionText: "Les saillies sont:",
        options: [
          "Des rebords irréguliers de l’os", // 20%
          "Des excroissances de l’os", // 13%
          "Provoquées par la résorption des tables osseuses épaisses", // 63%
          "Des concavités situées à L’intérieur de la crête inter-dentaire", // 1%
          "Des atteintes du septum interdentaire" // 2%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Ce sont des rebords osseux en plateau [cite: 2702]\nB : exostoses [cite: 2703]\nD : les cratères osseux [cite: 2704]"
      },
      {
        questionText: "La Régénération tissulaire guidée est un procédé qui utilise les allogreffes pour stimuler la croissance osseuse:",
        options: [
          "Vrai", // 23%
          "Faux" // 77%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "La régénération tissulaire guidée par membrane résorbable ou non résorbable [cite: 2714]"
      },
       {
        questionText: "L'ostéoplastie est une chirurgie soustractive :",
        options: [
          "Vrai", // 89%
          "Faux" // 11%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Ostéoplastie : c’est l’élimination d’une partie de l’os non impliqué dans l’attache [cite: 2723]"
      },
      {
        questionText: "En chirurgie osseuse résectrice, les incisions de décharge sont contre-indiquées si le lambeau est déplacé apicalement :",
        options: [
          "Vrai", // 13% (Source 2729) , 4% (Source 2844)
          "Faux" // 87% (Source 2730) , 96% (Source 2845)
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "si le lambeau sera déplacé (apicalement) des incisions de décharge doivent être réalisées [cite: 2732]" // Question duplicated
      },
       {
        questionText: "Les hémi-septa sont :",
        options: [
          "Des portions des septa inter-dentaires résiduelles après perte des parois mésiale ou distale", // 53%
          "Des défauts Infra-osseux", // 34%
          "Des défauts osseux de l'os marginal", // 10%
          "Toutes les réponses sont Justes" // 2%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "DEFAUTS INFRA-OSSEUX (LYSE VERTICALE OU ANGULAIRE) [cite: 2743]"
      },
      {
        questionText: "La chirurgie régénérative dans le traitement des défauts osseux:",
        options: [
          "Englobe Ie détartrage et surfaçage radiculaire.", // 15%
          ") Consiste à réaliser une ostéoectomie et ostéoplastie,", // 1%
          "Utilise des matériaux de substitution osseuse,", // 78%
          "Toutes les réponses sont Justes" // 5%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "A : techniques conservatrice [cite: 2755]\nB : RÉSECTRICE [cite: 2756]"
      },
       {
        questionText: "Les cratères inter - dentaires :",
        options: [
          "Possèdent des parois formées par l'os marginal vestibulaire ou lingual", // 28%
          "Sont généralement divises en deux types : superficiel et profond", // 5%
          "sont des lésions en forme de coupe dans le septum inter - dentaire", // 25%
          "Font parties des lésions de l'os marginal", // 6%
          "Sont des défauts Infra - osseux" // 36%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "Ils peuvent généralement être divisés en trois types : cratères superficiels (1,0 à 2,0 mm), cratères moyens (3,0 à 4,0 mm) et les cratères profonds (5,0 mm et plus). [cite: 2768]"
      },
      {
        questionText: "Parmi les défauts osseux suivants lesquels ont un bon pronostic :",
        options: [
          "Défauts intra - osseux à 2 parois", // 8%
          "Défauts supra - osseux entre 50-75 %", // 19%
          "Défauts Intra - osseux à 3 parois", // 65%
          "Défauts supra - osseux supérieurs a 75 %" // 9%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2780]
      },
       {
        questionText: "Cochez les réponses justes, parmi les propositions suivantes :",
        options: [
          "Reattachement : est la réunion de l'épithélium ou du tissu conjonctif avec la surface radiculaire", // 20%
          "Nouvelle attache : est L'union du tissu conjonctif et L'épithélium avec la surface radiculaire", // 9%
          "Allogreffe : greffon d'un même individu", // 10%
          "Xenogreffe : greffon d’une autre espèce" // 60%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Reattachement : est la réunion du tissu conjonctif avec la surface radiculaire [cite: 2790]\nNouvelle attache : est L'union du tissu conjonctif avec la surface radiculaire [cite: 2791]\nAllogreffe : Elle consiste à transférer un tissu d'un donneur vers un receveur appartenant à la même espèce mais, n'ayant pas le même code génétique [cite: 2792]"
      },
       {
        questionText: "Parmi les défauts osseux suivants, lesquels sont des lésions de l'os marginal?",
        options: [
          "Hemiseptum", // 8%
          "Fenestration", // 29%
          "Exostose", // 28%
          "Saillies", // 29%
          "Cratères osseux" // 6%
        ],
        correctOptionIndexes: [1, 3], // Highest percentages (tied)
        explanation: "" // No specific comment provided in source [cite: 2805]
      },
       {
        questionText: "Le défaut osseux horizontal :",
        options: [
          "Présente un potentiel de régénération élevé", // 18%
          "Est fréquent dans les parodontites chroniques", // 77%
          "Est classé selon le nombre de paroi en lésions à une, deux ou trois parois", // 4%
          "Toutes les réponses sont justes" // 2%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "C : c’est les DEFAUTS INFRA-OSSEUX [cite: 2815]"
      },
       {
        questionText: "Une Architecture osseuse est dite favorable lorsque :",
        options: [
          "Le niveau osseux radiculaire est plus bas que celui interdentaire", // 29%
          "L'architecture osseuse présente un aspect festonné", // 44%
          "Le niveau osseux vestibulaire est au même niveau que celui de l'os radiculaire", // 20%
          "Le niveau osseux interdentaire est plus apical que le niveau osseux radiculaire" // 8%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2826]
      },
       {
        questionText: "Les allogreffes sont des matériaux capables d'induire :",
        options: [
          "Une ostéogenèse", // 8%
          "Une ostéogenèse et une osteo-induction", // 16%
          "Une ostéogenèse et une osteo-conduction", // 16%
          "Une osteo-induction et une osteo-conduction" // 61%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Effet ostéo-inducteur : Capacité d'induire une prolifération vasculaire et une différenciation cellulaire pour la synthèse d'une matrice osseuse minéralisée. [cite: 2836]\nEffet ostéo-conducteur : Propriété passive d’un matériau à recevoir la repousse osseuse, par invasion vasculaire et cellulaire à partir d’un tissu osseux receveur, au contact de ce matériau. [cite: 2837]"
      },
       {
        questionText: "Un défaut osseux combiné :",
        options: [
          "Peut concerner les lyses angulaires en interdentaire uniquement", // 0%
          "Peut concerner les lyses angulaires en interdentaire, en vestibulaire et en linguale.", // 43%
          "Présente un nombre de parois différent en coronaire et en apical", // 54%
          "L'os alvéolaire est réduit en hauteur mais le bord marginal de l'os reste perpendiculaire a la dent" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "lésion osseuse combinée, destruction en forme de clé. [cite: 2857]"
      },
       {
        questionText: "L'approche thérapeutique des défauts osseux est déterminée par :",
        options: [
          "La forme des parois osseuses restantes", // 32%
          "La topographie des parois osseuses restantes", // 31%
          "Le nombre des parois osseuses restantes", // 36%
          "Toutes les réponses sont fausses" // 1%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2867]
      },
       {
        questionText: "Parmi les lésions osseuses suivantes, quelles sont celles considérés comme défauts Infra osseux :",
        options: [
          "Lésion de l'os marginal", // 1%
          "Hemiseptum", // 26%
          "Lésion inter-radiculaire", // 15%
          "Défauts intra-osseux", // 29%
          "Cratères" // 30%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "La lésion infra-osseuse est un défaut osseux dont la base est apicale par rapport à la crête osseuse adjacente. [cite: 2879]"
      },
       {
        questionText: "Le pronostic d'un défauts osseux à 2 parois est :",
        options: [
          "Bon", // 21%
          "Très bon", // 0%
          "Reserve", // 77%
          "Très réservé" // 2%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2890]
      },
       {
        questionText: "La déhiscence est :",
        options: [
          "Caractérisée par un rebord osseux intact", // 5%
          "Une des lésions qui peut toucher l'os marginal", // 46%
          "Constatée cliniquement", // 16%
          "Découverte lors de la chirurgie" // 33%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Les capacités de réparation ou de régénération d'un défaut décroissent inversement au nombre de parois résiduelles [cite: 2902]"
      },
      {
        questionText: "Les défauts osseux sont classes en fonction :",
        options: [
          "Du nombre des parois osseuses détruites", // 5%
          "Du nombre des parois osseuses restantes", // 59%
          "Du fond de la lésion osseuse", // 21%
          "De L'angle forme par la paroi osseuse" // 15%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "sont situées le long d'une ou de plusieurs racines dénudées comprises entre 1,2,3 parois osseuses ; [cite: 2914]\nla quatrième paroi est formée par la surface radiculaire. [cite: 2915]"
      },
      {
        questionText: "Les défauts osseux qui offrent le meilleur potentiel de régénération osseuse suite a un traitement chirurgical sont :",
        options: [
          "Les défauts supra-osseux", // 28%
          "Les défauts infra-osseux a une paroi", // 6%
          "Les défauts infra- osseux a deux parois", // 0%
          "Les défauts osseux infra-osseux a trois parois" // 67%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "-Lésion infra-osseuse à 3 parois: défaut osseux parodontal limité par 1 paroi dentaire et 3 parois osseuses. [cite: 2926]"
      },
       {
        questionText: "Parmi les défauts osseux suivants, lesquels sont en rapport avec les lésions de l'os marginal ?",
        options: [
          "Les cratères supra-osseux", // 5%
          "Les fenestrations", // 46%
          "Les exostoses", // 47%
          "Les atteintes de furcations" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "LESION DE L’OS MARGINAL : *Rebords irréguliers *Rebord épais : Os de contrefort [cite: 2937]\n*Exostose *Saillies *Fenestration *Déhiscence [cite: 2938]"
      },
       {
        questionText: "Dans les défauts supra-osseux :",
        options: [
          "L’os alvéolaire est réduit en largeur", // 30%
          "L’os alvéolaire est réduit en hauteur avec un bord marginal osseux parallèle a la dent", // 31% (Should be perpendicular?)
          "Les tables osseuses vestibulaire et linguale sont toujours atteintes au même degré", // 8%
          "C'est la forme de lyse la plus fréquente de la maladie parodontale", // 32%
          "La lyse est angulaire" // 0%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 2950]
      },
      {
        questionText: "Parmi les propositions suivantes, quelles sont les réponses justes:\n1- Autogreffe : greffon obtenu du même individu.\n2- Allogreffe : greffon d'une autre espèce.\n3- Xénogreffe : greffon d'un autre individu d'une même espèce.\n4- Greffon alioplastique : matériau synthétique.\n5- Facteurs de croissance : sont des dérivés des protéines de l'email.",
        options: [
          "(2-3)", // 0%
          "(3-4)", // 0%
          "(4-5)", // 0%
          "(1-4)", // 100%
          "(2-5)" // 0%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "GREFFE OSSEUSE: [cite: 2967]\n*La greffe autogène : En raison de son action ostéo-inductrice et ostéo conductrice, l'os autologue vivant reste le meilleur matériau... [cite: 2968, 2969]\n* les allogreffes: Une allogreffe consiste à transférer un tissu d'un donneur vers receveur appartenant à la même espèce mais n'ayant pas le même code génétique. [cite: 2972, 2973]\nLes Xénogreffe: L'os xénogenèse, le plus souvent d'origine porcine ou bovine. [cite: 2977, 2978]\n*Matériels alloplastiques: ...de nombreux matériaux synthétiques ont été utilisés... [cite: 2979, 2980]"
      }
    ]
  },
  {
    title: "Cicatrisation parodontale",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "la réattache épithélio-conjonctive:",
        options: [
          "Peut s'étendre jusqu'au niveau de la crête osseuse uniquement.", // 0%
          "Son adhérence à la surface radiculaire se fait par l'intermédiaire de fibres collagènes.", // 25%
          "Peut s'étendre jusqu'au niveau ou apicalement à la crête osseuse.", // 50%
          "correspond à une régénération des quatre tissus parodontaux avec rétablissement de la fonction." // 25%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "la réattache épithélio-conjonctive : [cite: 1507]\nPeut s’étendre jusqu’au niveau ou apicalement à la crête osseuse. L’adhérence à la surface radiculaire se fait par l’intermédiaire d’hémidesmosomes. [cite: 1508]\nA : -Adhérence conjonctive [cite: 1509]\nB : -Pontage fibreux [cite: 1510]"
      },
      {
        questionText: "Le Pontage fibreux est une réunion des fibres conjonctives du lambeau avec les terminaisons des fibres de collagène de la surface coronaire.",
        options: [
          "Vraie", // 67%
          "faux" // 33%
        ],
        correctOptionIndexes: [0], // Highest percentage (but explanation says 'radiculaire')
        explanation: "Pontage fibreux : [cite: 1519]\nRéunion des fibres conjonctives du lambeau avec les terminaisons des fibres de collagène de la surface radiculaire. [cite: 1520]"
      },
      {
        questionText: "La formation excessive de tissu cicatriciel au-delà du bord d'une blessure s'appelle un(e) :",
        options: [
          "fibrome.", // 4%
          "fibrose", // 88%
          "polype fibro-épithélial.", // 2%
          "hyperplasie épithélial" // 6%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "La fibrose se définit comme l'augmentation de la trame conjonctive d'un tissu. [cite: 1532]\nEn particulier lorsque les conditions nécessaires à une bonne cicatrisation ne sont pas remplies, l'évolution est moins favorable. [cite: 1533]\nLe bourgeon charnu se développe exagérément [cite: 1534]"
      },
      {
        questionText: "Mettez en ordre les différentes étapes de la réparation conjonctive, lors de la cicatrisation Gingivale de première intention:\na. formation d'une matrice de collagène avec un remodelage fonctionnel des tissus\nb. formation du caillot sanguin\nc. formation et évolution du tissu de granulation",
        options: [
          "(a,b,c)", // 1%
          "(b,a,c)", // 11%
          "(b,c,a)" // 88%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "1- Phase inflammatoire (hémostase et inflammation) [cite: 1548]\n2- Phase de prolifération : Formation de tissu de granulation [cite: 1549]\n3- Phase de maturation (remodelage) : Maturation du collagène [cite: 1550]"
      },
      {
        questionText: "Les facteurs mécaniques influençant le processus de cicatrisation sont:",
        options: [
          "la distance séparant les berges", // 48%
          "les déficits immunitaires", // 1%
          "le volume du caillot", // 46%
          "les déficits en facteurs de coagulation", // 3%
          "le stress" // 1%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Autres : [cite: 1563]\nForces exercées sur le lambeau / Dépose des sutures [cite: 1564]\nB/D/E : Facteurs généraux [cite: 1565]"
      },
      {
        questionText: "L'objectif primordial à atteindre lors de la cicatrisation est:",
        options: [
          "Un arrêt de la perte d'attache", // 18%
          "Une élimination, réduction de l'inflammation", // 12%
          "Une reconstitution des tissus perdus", // 62%
          "Une réparation des poches" // 8%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "L’objectif primordial reste la guérison du parodonte et la reconstitution complète des tissus perdus c’est-à-dire une restitutio ad integrum. [cite: 1577]"
      },
       {
        questionText: "Après chirurgie de greffe épithello-conionctive,la cicatrisation du site donneur :",
        options: [
          "est une cicatrisation par première intention", // 13%
          "est une cicatrisation par seconde intention", // 49%
          "est caractérisée par formation d'un tissu de granulation" // 39%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Cicatrisation du site donneur : La plaie cicatrise par 2ème intention. [cite: 1588]\nLe caillot sanguin est remplacé par un tissu de granulation qui se transforme en tissu conjonctif. [cite: 1589]\nEn 10 à 15 jours, la plaie est complètement recouverte par un nouvel épithélium. [cite: 1590]\nLa cicatrisation totale est obtenue en 4 semaines. [cite: 1591]"
      },
      {
        questionText: "Pendant la cicatrisation des tissus parodontaux, la présence de tissue de granulation:",
        options: [
          "Signe une réparation de mauvaise qualité des tissus", // 2% (Source 1598), 4% (Source 1894), 2% (Source 1883)
          "Sera remplacé par un tissu conjonctif", // 48% (Source 1599), 46% (Source 1895), 48% (Source 1884)
          "apparaît après résorption du caillot", // 49% (Source 1600), 49% (Source 1896), 49% (Source 1885)
          "est un signe qui marque une infection de la plaie" // 1% (Source 1601), 0% (Source 1897), 2% (Source 1886)
        ],
        correctOptionIndexes: [2], // Highest percentage consistently
        explanation: "" // Question duplicated 3 times in source files [cite: 1602, 1887, 1898]
      },
      {
        questionText: "Le long épithélium de jonction:",
        options: [
          "est une caractéristique de la cicatrisation parodontale par réparation", // 41%
          "est une caractéristique de la cicatrisation parodontale par régénération est une adhérence à la surface radiolaire", // 10%
          "est une caractéristique de la cicatrisation parodontale par première intention", // 17%
          "est une caractéristique de ta cicatrisation parodontale par seconde Intention" // 32%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Les cellules de l’épithélium buccal prolifèrent le long de la surface radiculaire pour atteindre le niveau où se situait l’épithélium de poche [cite: 1614]"
      },
       {
        questionText: "La présence d’un épithélium de jonction long après cicatrisation parodontal, offre une protection contre l'ankylose:",
        options: [
          "Vrai", // 78%
          "Faux" // 22%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 1623]
      },
       {
        questionText: "La nouvelle attache correspond à:",
        options: [
          "une régénération tissus parodontale", // 69%
          "un épithélium de Jonction long", // 7%
          "une attache épithéliale", // 17%
          "une réattache du tissu conjonctif à la surface radiculaire" // 7%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "nouveau lien d’attache entre le tissu conjonctif et la surface radiculaire auparavant dénudée en raison de la pathologie. [cite: 1634]\nC’est-à-dire nouvelle formation de cément avec ancrage de fibres desmodontales [cite: 1635]"
      },
      {
        questionText: "Selon Kramer, la présence d'un sillon gingivodentaire court :",
        options: [
          "Caractérise une cicatrisation parodontale de mauvaise qualité", // 10%
          "Est une cicatrisation par réparation", // 21%
          "est associée à une nouvelle attache par régénération" // 69%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Réattache par réparation: [cite: 1645]\nÉpithélium jonctionnel long adhésion épithéliale ou conjonctive. [cite: 1646]\nPas de néo-cément, ni néo-ligament, peut être néoformation osseuse. [cite: 1647]\nSGD(sillon gingivo-dentaire) plus profond que la normale. [cite: 1648]\nNouvelle attache par régénération : [cite: 1649]\nEpithélium jonctionnel court [cite: 1650]\nNéo-cément [cite: 1651]\nNéo-ligament [cite: 1652]\nNouvel os [cite: 1653]\nSillon gingivo-dentaire court [cite: 1654]"
      },
      {
        questionText: "La cicatrisation est retardée :",
        options: [
          "Par un caillot sanguin réduit", // 25%
          "Sur une dent dépulpée", // 70%
          "En absence de mobilité pathologique", // 4%
          "Chez re jeune patient" // 1%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 1664]
      },
       {
        questionText: "Dans la régénération tissulaire guidée:",
        options: [
          "Un comblement osseux est primordial", // 8%
          "Une nouvelle attache se forme", // 37%
          "Un long épithélium se forme", // 7%
          "L'exclusion cellulaire est l'un de ses principes" // 48%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Ce processus vise à promouvoir la régénération des tissus en empêchant la migration des cellules épithéliales et conjonctives de la gencive adjacente dans la zone de cicatrisation. [cite: 1675]"
      },
      {
        questionText: "La détersion suppurée :",
        options: [
          "Est une phase de la cicatrisation par 1ére intention", // 6%
          "Fait appel au tissu de granulation", // 25%
          "Elle assure la fermeture de la plaie", // 16%
          "Est un processus infectieux dans la plaie" // 53%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "La détersion suppurée : Est le préalable à la cicatrisation, elle élimine tous les tissus nécrosés et tout ce qui gêne le bourgeonnement. [cite: 1686]\nL’infection suppurée est un processus normal sans lequel la détersion serait démesurément longue. [cite: 1687]"
      },
       {
        questionText: "Une plaie parodontale cicatrise par seconde intention lorsque :",
        options: [
          "L'hémostase est parfaite.", // 3%
          "Une surface périostée est laissée à nu.", // 45%
          "La coaptation des berges est Incomplète.", // 45%
          "Les tissus mous sont soigneusement appliqués aux tissus durs pendant toute la phase de cicatrisation." // 6%
        ],
        correctOptionIndexes: [1, 2], // Highest percentages (tied)
        explanation: "La cicatrisation est dite de seconde intention lorsque les deux berges de la plaie ne peuvent pas être coaptées et qu'une quantité importante de tissus a été détruite [cite: 1699]"
      },
       {
        questionText: "Le bourgeon charnu :",
        options: [
          "Est le symbole de la cicatrisation parodontale par seconde intention.", // 30%
          "Se forme au cours de la phase inflammatoire et vasculaire de la cicatrisation parodontale par seconde intention.", // 14%
          "Permet de combler la perte de substance produite au cours de la cicatrisation parodontale par seconde Intention.", // 32%
          "Se forme à partir des berges de la plaie" // 24%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 1709]
      },
      {
        questionText: "La cicatrisation après une greffe de conjonctif partiellement enfoui se fait par :",
        options: [
          "Première intention au niveau du site donneur.", // 35%
          "Seconde intention au niveau du site donneur.", // 16%
          "Première intention au niveau de la partie coronaire du défaut radiculaire.", // 16%
          "Seconde intention au niveau de la partie coronaire du défaut radiculaire" // 32%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Dans les techniques de GC partiellement et la technique de l’enveloppe, le greffon reste exposé au niveau de la partie coronaire du défaut radiculaire, sa cicatrisation est de 2ème intention. [cite: 1720]" // Comment contradicts highest percentage. Assuming comment is more reliable for 'partie coronaire', D should be correct there. Site donneur cicatrizes by first intention if sutured. Assuming A refers to donor site.
      },
      {
        questionText: "La réparation parodontale :",
        options: [
          "Est caractérisé par la formation d’une nouvelle attache", // 5%
          "Aboutit à la néoformation cementaire", // 5%
          "Aboutit a la formation de nouvelles fibres desmodontales", // 7%
          "Toutes les réponses sont fausses" // 82%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Épithélium jonctionnel long adhésion épithéliale ou conjonctive. [cite: 1732]\nPas de néo-cément, ni néo-ligament, peut être néoformation osseuse. [cite: 1733]\nSGD(sillon gingivo-dentaire) plus profond que la normale. [cite: 1734]"
      },
      {
        questionText: "Parmi les cellules suivantes, lesquelles sont responsables de la formation du manchon fibreux sous épithélium de jonction dans la cicatrisation parodontale :",
        options: [
          "Les cellules de l'épithélium gingival.", // 13%
          "Les cellules du conjonctif gingival.", // 63%
          "Les cellules osseuses.", // 2%
          "Les cellules desmodontales" // 22%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "formation de nouveaux vaisseaux sanguins (angiogénèse) et prolifération de cellules conjonctives (fibroblastes, macrophages) produisant des fibres collagènes. [cite: 1745]"
      },
      {
        questionText: "Pendant la cicatrisation des tissus parodontaux suite aux interventions à lambeaux, la présence de tissu de granulation:‎\n1- ‎Signe une réparation de mauvaise qualité des tissus‎\n2- ‎Apres résorption, il sera remplacé par du tissu conjonctif‎\n3- ‎Apparait après résorption du caillot‎\n4- ‎Est un signe qui marque une infection de la plaie‎\n5- ‎Apparait avant la formation du caillot‎",
        options: [
          "(1,5)‎", // 0%
          "(3,4)‎", // 5%
          "(4.5)‎", // 0%
          "(1,4)‎", // 10%
          "(2,3)‎" // 85%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "1/4 : « Le tissu de granulation [...] contribue à la réparation. » [cite: 1762]\nLe tissu de granulation est un élément normal et nécessaire à la cicatrisation [cite: 1763]\n2: Le tissu de granulation disparaît pour laisser place à un tissu conjonctif fibreux [cite: 1764]\n3 : Le tissu lâche néoformé remplaçant la première matrice provisoire constituée par le thrombus rouge est dénommé tissu de granulation. [cite: 1765]\n» [cite: 1766]\nLe « thrombus rouge » fait référence au caillot initial. [cite: 1767]\n5: Le caillot est formé immédiatement après la blessure , bien avant le tissu de granulation . [cite: 1768]"
      },
      {
        questionText: "La cicatrisation parodontale par première intention est caractérisée par :‎\n1- ‎Une réparation conjonctive‎\n2- ‎La formation d'un bourgeon charnu‎\n3- ‎Une réparation épithéliale‎\n4- ‎Un écartement des berges‎\n5- ‎Une susceptibilité accrue à l'infection‎",
        options: [
          "(1,3)‎", // 68%
          "(1,2)‎", // 9%
          "(1,2,3)‎", // 18%
          "(2,4,5)‎", // 0%
          "(1,3,5)‎" // 5%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Cicatrisation par première intention : [cite: 1786]\nse réalise en présence d’une incision chirurgicale. Elle présente deux aspects : [cite: 1787]\n➢ Réparation conjonctive : ... [cite: 1788-1803]\n➢ Réparation épithéliale : Se caractérise par 3 phénomènes : Différenciation, prolifération et migration cellulaire. [cite: 1804, 1805]" // Summary of the long explanation
      },
       {
        questionText: "La cicatrisation parodontale par première intention est caractérisée par :",
        options: [
          "Une réparation conjonctive", // 42%
          "La formation d'un bourgeon charnu", // 11%
          "Une réparation épithéliale", // 44%
          "Un écartement des berges", // 2%
          "Une susceptibilité accrue a l'infection" // 1%
        ],
        correctOptionIndexes: [2], // Highest percentage (Question similar to previous QCM format)
        explanation: "" // No specific comment provided in source [cite: 1820]
      },
      {
        questionText: "Dans la classification de cicatrisation de Kramer, une réattache par réparation comprend :",
        options: [
          "Formation de Néo-ligament", // 10%
          "Epithelium jonctionnel long", // 52%
          "Epithelium jonctionnel court", // 10%
          "Une néoformation osseuse" // 28%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "La réparation : processus biologique au cours duquel la continuité tissulaire est rétablie [cite: 1831]"
      },
      {
        questionText: "Selon bouchard et Etienne, la cicatrisation par première intention est une cicatrisation aseptique :",
        options: [
          "Vrai", // 81%
          "Faux" // 19%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "La cicatrisation par première intention se produit lorsque les bords de la plaie sont fermés et maintenus ensemble, favorisant ainsi une guérison rapide et sans infection. [cite: 1841]\nCela se produit souvent dans les petites plaies chirurgicales [cite: 1842]"
      },
      {
        questionText: "Apres cicatrisation parodontal, le pontage fibreux est caractérisé par :",
        options: [
          "L'adhérence épithéliale a la surface radiculaire par l'intermédiaire d'hémi desmosomes", // 13%
          "Une orientation parallèle des fibres conjonctives a la dent", // 6%
          "La réunion des fibres conjonctives du lambeau avec les terminaisons des fibres de collagène de la surface radiculaire", // 79%
          "Une régénération des tissus parodontaux" // 2%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "cela permet de restaurer l'attache entre la gencive et la dent, fournissant un soutien structurel et une protection [cite: 1853]"
      },
      {
        questionText: "La cicatrisation parodontale par seconde Intention, est caractérisée par :",
        options: [
          "La formation d'un épithélium de jonction long", // 24%
          "La formation de bourgeon charnu", // 41%
          "La formation de tissu de granulation", // 28%
          "La formation d'un manchon epithelio-conjonctif" // 7%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 1864]
      },
       {
        questionText: "Un caillot de faible volume favorise Ia bonne cicatrisation des tissus :",
        options: [
          "Vrai", // 74%
          "Faux" // 26%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Le caillot sanguin est l’élément clé de la réparation des tissus. [cite: 1874]\nIl est en effet un réservoir provisoire contenant les facteurs moléculaires . [cite: 1875]\nIl est conseillé d’essayer d’obtenir un caillot le moins épais possible afin de faciliter la fermeture de la plaie. [cite: 1876]"
      },
      {
        questionText: "Dans le cadre d’une intervention a Lambeau la réparation épithéliale aboutit a la formation:",
        options: [
          "D'un épithélium de jonction long", // 57%
          "D’une nouvelle attache", // 9%
          "D'une reattache", // 22%
          "D'une attache épithéliale", // 12%
          "Dune fibrose" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 1909]
      }
    ]
  },
  {
    title: "Les récessions parodontales",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Le phénotype parodontal est déterminé par :",
        options: [
          "L'épaisseur de la gencive keratinisée", // 0%
          "L'épaisseur des tables osseuses", // 0%
          "Le biotype gingival et le morphotype osseux", // 100%
          "L'épaisseur et la hauteur des tissus kératinisés" // 0%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Le phénotype parodontal est déterminé par le biotype gingival incluant l’épaisseur et la hauteur des tissus kératinisés et le morphotype osseux [cite: 2997]"
      },
       {
        questionText: "La récession gingivale est :",
        options: [
          "La migration du bord marginal de la gencive en direction apicale", // 50%
          "Souvent associée à une fenestration ou déhiscence", // 17%
          "Considérée comme un facteur favorisant l'apparition de la maladie parodontale", // 33%
          "Un signe pathognomonique de la maladie parodontale" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "La récession gingivale est la migration de la gencive marginale en direction apicale par rapport à la jonction amélo-cémentaire JAC. [cite: 3008]\nCette migration est souvent associée à une perte d’autres composants du parodonte, la récession parodontale fournit une représentation plus précise de cet état clinique. [cite: 3009]"
      },
      {
        questionText: "La récession gingivale peut être causée par :",
        options: [
          "Un brossage traumatique horizontal", // 43%
          "Une occlusion traumatique", // 29%
          "Une fente labiale", // 0%
          "Une insertion haute du frein labial" // 29%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Pathogénie : [cite: 3021]\n1. Traumatique : [cite: 3022]\n-Un brossage agressif provoque une blessure... [cite: 3023-3025]\nTraumatisme occlusal: Ce facteur est très controversé... [cite: 3026-3029]\nTraction des freins et de brides, vestibule peu profond: une traction iatrogène peut être mise en évidence... [cite: 3030-3033]"
      },
      {
        questionText: "La classe III de Miller correspond à une récession de la gencive:",
        options: [
          "Sans perte de tissu inter proximal", // 0%
          "Et est associée à une perte d'attache inter proximale inférieur à la récession", // 0%
          "Qui atteint ou dépasse la LMG, les tissus proximaux se situent au niveau de la base de la récession, et celle-ci intéresse plus d'une face de la dent", // 33%
          "Avec un tissu gingival proximal en position apicale à la JAC tout en restant coronaire à la base de la récession" // 67%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // Image provided in source [cite: 3044]
      },
      {
        questionText: "L'abrasion se traduit cliniquement par :",
        options: [
          "Une lésion large et plane", // 17%
          "Une lésion concave et large", // 60%
          "Une lésion en forme d'entaille (lésion en V) étroite et profonde", // 15%
          "Un bandeau amélaire franc en juxta-gingival" // 8%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Ce sont des lésions cervicales induites par un processus d’usure mécanique , d’origine extrinsèque [cite: 3056]\nC : abfraction [cite: 3057]\nD : érosion [cite: 3058]"
      },
       {
        questionText: "Parmi les facteurs prédisposant à la survenue des récessions parodontales, on retrouve:",
        options: [
          "Un biotype parodontale fin", // 38%
          "Le brossage traumatique", // 17%
          "Les lésions cervicales non carieuses", // 7%
          "La traction des freins et des brides" // 39%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "B/C : facteurs déclenchants [cite: 3070]"
      },
      {
        questionText: "Dans la Classification de Cairo, la perte d'attache interproximale est le critère d'identification des différentes classes",
        options: [
          "Vrai", // 100%
          "Faux" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source [cite: 3079]
      },
       {
        questionText: "Dans La classification des recessions de Cairo :",
        options: [
          "La récession type 1 (RT1) de Cairo chevauche avec les classes de Miller I et II", // 44%
          "La récession type 2 (RT2) de Cairo chevauche avec la classe de Miller Ill", // 30%
          "La récession type 3 (RT3) de Cairo chevauche avec les classes de Miller IV et Ill", // 9%
          "La récession type 2 (RT2), la perte d'attache interproximale est inferieure a la perte d'attache vestibulaire" // 18%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "B : clase de Miller III [cite: 3090]\nC : les classes de Miller IV [cite: 3091]\nD : la perte d'attache interproximale est inferieure ou égale a la perte d'attache vestibulaire [cite: 3092]"
      },
      {
        questionText: "Dans le cadre des recessions gingivales, L'action du tabac peut être expliquée par :",
        options: [
          "Une absence de la réponse immunitaire.", // 18% (Source 3099, 3132)
          "Une réduction de la vascularisation.", // 46% (Source 3100, 3133)
          "Une augmentation de la vascularisation.", // 3% (Source 3101, 3134)
          "Une action mécanique du brossage excessif du patient fumeur" // 33% (Source 3102, 3135)
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "A : une altération de la réponse immunitaire [cite: 3104, 3137]" // Question duplicated
      },
       {
        questionText: "La récession gingivale:‎\n1- ‎Est toujours associée à une perte d'attache‎\n2- ‎Son étendue est mesurée sur une radiographie retro alvéolaire\n3- ‎Est la distance entre la jonction émail-cément et le fond de la poche\n4- ‎ Est la distance entre le bord marginal de la gencive et la jonction émail-cément\n5- ‎Est la distance entre le bord marginal de gencive et le fond de la poche‎",
        options: [
          "(1,2)‎", // 0%
          "(1,2,5)‎", // 0%
          "(1,2,4)‎", // 10%
          "(1,2,3)‎", // 0%
          "(1,4)‎" // 90%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "Définition [cite: 3122]\nLa récession gingivale est la migration de la gencive marginale en direction apicale par rapport à la jonction amélo-cémentaire JAC. [cite: 3123]\n1: Cette migration est souvent associée à une perte d’autres composants du parodonte [cite: 3124]\n3: La distance du fond de la poche à la jonction émail – Cément représente la perte d’attache [cite: 3125]\n5: La distance du fond de la poche au bord libre de la gencive, mesure la profondeur de la poche parodontale. [cite: 3126]"
      }
    ]
  },// End of "Les récessions parodontales" quiz
  {
    title: "Freinectomie",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Parmi les indications suivantes, laquelle ne justifie pas une frénectomie?",
        options: [
          "Un frein lingual court entrainant un frein de langue restrictif (ankyloglossie)", // 0%
          "Un diastème inter-incisif supérieur causé par un frein labial hypertrophique.", // 0%
          "Un traumatisme récurrent causé par un frein hypertrophique.", // 0%
          "Une augmentation de la gencive attachée." // 100%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "A/B/C : c’est l’indication de la frénectomie"
      },
      {
        questionText: "Un frein labial pathologique :",
        options: [
          "Est un frein inséré au niveau de la gencive attachée", // 6%
          "Est un facteur étiologique de la récession gingivale", // 39%
          "Peut-être hypertrophique.", // 34%
          "est un frein qui limite le mouvement labial" // 21%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Un frein pathologique :\nFrein tractant la gencive marginale\nFrein anormalement volumineux\nFrein hypertrophique.\nFrein lingual court."
      },
      {
        questionText: "Dans la classification des freins selon Placek et all, quelle est la classification qui peut favoriser persistance d'un diastème",
        options: [
          "L'attache papillaire", // 8%
          "L'attache muqueuse", // 0%
          "L'attachement papillaire pénétrant", // 89%
          "L'attache gingivale" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "L’intégralité de la papille dentaire est colonisée par les fibres du frein ;\ncette situation peut favoriser la persistance d’un diastème"
      },
      {
        questionText: "Un frein labial mal inséré peut engendrer :",
        options: [
          "La formation d’une poche parodontale", // 13%
          "L'apparition d'une récession gingivale", // 42%
          "L'apparition d'un accroissement gingivale", // 4%
          "La persistance d'un diastème" // 40%
        ],
        correctOptionIndexes: [1], // Highest percentage (Slightly higher than D)
        explanation: "B : attache papillaire\nD : attache papillaire pénétrante"
      },
      {
        questionText: "La freinectomie labiale est indiquée, Lorsque l'insertion du frein se trouve dans la gencive attaché :",
        options: [
          "Vrai", // 3%
          "Faux" // 97%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // Image provided in source
      },
      {
        questionText: "Quelle est la chirurgie qui laisse une plaie périostée :",
        options: [
          "Frenectomie", // 32%
          "Frenotomie" // 68%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "frénectomie : éliminer chirurgicalement l'ensemble des fibres du frein.\nFrénotomie : sectionner et disséquer un frein, puis le suturer en position apicale.\nDans ce cas, l'exérèse des fibres n'est pas réalisée"
      }
    ]
  },
  {
    title: "La chirurgie parodontale",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "En chirurgie parodontale:",
        options: [
          "Le décolleur est généralement constitué d'une partie concave (contre la gencive) et d'une partie convexe (contre los pour les décollements de pleine épaisseur).", // 33%
          "La lame 11 est utilisée pour les incisions lors de drainages d'abcès ou de cellulites.", // 33%
          "l’aiguille triangulaire est la plus utilisée car elle est moins traumatique pour les tissus.", // 0%
          "Les aiguilles 3/8 et sont les plus utilisées." // 33% (Assuming 3/8 refers to needle curvature)
        ],
        correctOptionIndexes: [0, 1, 3], // Highest percentages (tied)
        explanation: "A : Ils sont en général faits d’une partie convexe (contre la gencive)et une partie concave (contre l’os pour les décollements de pleine épaisseur)"
      },
      {
        questionText: "La chirurgie plastique parodontale a pour but :",
        options: [
          "L'aménagement des tissus pour réduire la poche parodontale", // 22%
          "L'élimination des facteurs anatomiques à risque", // 29%
          "Le recouvrement radiculaire", // 37%
          "de réduire l'inflammation parodontale" // 12%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Objectifs :\nCréation d'une zone adéquate de gencive kératinisée,\nStabiliser l'évolution de la maladie parodontale.\nElimination des freins et des insertions musculaires pathologiques,\nApprofondissement du vestibule étroit,\nRecouvrement radiculaire (préjudice esthétique, hypersensibilités),\nPrévenir ou Minimiser la récession gingivale durant le traitement orthodontique"
      },
      {
        questionText: "Selon la classification de Kramer de la chirurgie parodontale et en fonction de cicatrisation, dans la réattache par réparation, on trouve /",
        options: [
          "Un épithélium jonctionnel court", // 8%
          "Un épithélium jonctionnel long", // 43%
          "Un sillon gingivo-dentaire court", // 9%
          "Un sillon gingivo-dentaire long", // 36%
          "Un néo-cément" // 4%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // Image provided in source comparing Réparation vs Régénération
      },
      {
        questionText: "Dans les techniques reconstructrices de la chirurgie parodontale selon la classification de Teccucianu se trouvent",
        options: [
          "Les lambeaux de glissement apical", // 23%
          "Gingivoplastie", // 8%
          "Le curetage", // 2%
          "Greffe osseuse", // 34%
          "Greffe gingivale" // 33%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "B : la gingivoplastie se trouve dans la technique correctrices\nC : le curetage se trouve dans la technique conservatrice"
      },
      {
        questionText: "Selon Sato, les objectifs de la chirurgie parodontale sont /",
        options: [
          "Réduction de l'inflammation", // 15%
          "Accessibilité des instruments aux surfaces coronaires", // 7%
          "Correction des défauts gingivaux", // 38%
          "Régénération des lésions induites par la maladie parodontale" // 40%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "A : élimination de l’inflammation\nB : Accessibilité des instruments aux surfaces radiculaires"
      },
      {
        questionText: "Un Patient avec une forme modérée d'anémie constitue une contre-indication absolue a une chirurgie parodontale /",
        options: [
          "Vrai", // 0%
          "Faux" // 100%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Les contre indication absolues :\nCardiopathie sévère ; hémophilie maligne ; risque hémorragique ; radiothérapie cervico faciale\nPatients ayant leur mécanisme de défense diminué face à l’infection bactérienne"
      },
      {
        questionText: "Dans les techniques conservatrices de chirurgie parodontale selon la classification de Tecucianu se trouvent :",
        options: [
          "Les ostéotomies", // 1%
          "Le curetage des furcations", // 42%
          "Le curetage des lisions osseuses a 3 parois", // 21%
          "Le traitement des lésions endo-parodontales", // 9%
          "Les lambeaux repos" // 27% (Assuming 'repos' means 'repositionnés')
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // Image provided in source showing conservatrice includes curetage furcations and lésions 1 à 2 parois, lambeaux repositionnés.
      },
      {
        questionText: "Les lames de bistouri N°12 sont :",
        options: [
          "Les plus utilisées", // 3%
          "Recommandées pour le drainage d'abcès", // 8%
          "Utilisées pour les régions tubérositaires", // 42%
          "Utiles pour prélever un greffon conjonctif", // 4%
          "Utilisées pour les faces distales des dents postérieures" // 43%
        ],
        correctOptionIndexes: [4], // Highest percentage
        explanation: "A : c’est les lames N°15 et N°15c les plus utilisées\nB / D : c’est les lames N°11"
      },
      {
        questionText: "La chirurgie parodontale est relativement contre-indiquée en cas de :",
        options: [
          "Prothèse valvulaire", // 6%
          "Diabète", // 44%
          "Patient Irradie dans la sphère cervico-faciale", // 7%
          "Grossesse : première troisième période d’aménorrhée" // 43%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "A/C : c’est des contre-indication absolues\nD : grossesse : 1ére trimestre ( risque d’avortement ) / 3éme trimestre ( risque d’accouchement prématuré )"
      },
      {
        questionText: "La lame de bistouri N 11, est recommandée pour :",
        options: [
          "Le drainage d'abcès", // 49%
          "Prélever un greffon conjonctif", // 47%
          "Les régions tuberositaires", // 1%
          "Les faces distales de dents postérieures" // 2%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Les fils a résorption rapide se résorbent :",
        options: [
          "Entre 10 et 14 jours", // 47%
          "Entre 20 et 35 jours", // 1%
          "Entre 3 et 8 jours", // 11%
          "Par hydrolyse" // 41%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "B : les fils à résorption normale"
      },
      {
        questionText: "La chirurgie parodontale mini-invasive :",
        options: [
          "Nécessite des microscopes et des loupes", // 30%
          "Ne permet pas le respect de l'intégrité des tissus", // 1%
          "Préservé au maximum les tissus parodontaux", // 35%
          "Permet une meilleure cicatrisation" // 34%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Dans la classification de la chirurgie parodontale selon Kramer, la nouvelle attache par régénération :\n1- Comprend un long épithélium de jonction.\n2- Comprend un néo-cément et néo-ligament.\n3- Comprend un sillon gingivo-dentaire plus profond.\n4- Comprend un épithélium jonctionnel court.\n5- N'assure pas une néoformation osseuse.",
        options: [
          "(1-2-3)", // 6%
          "(1-3)", // 6%
          "(2-4)", // 87%
          "(3-5)", // 0%
          "(1-5)" // 0%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "*Réattache par réparation:\nEpithélium jonctionnel long\nAdhésion épithéliale ou conjonctive\nPas de néo-cément, néo ligament, peut être un nouvel os\nSGD plus profond que la normale\n*Nouvelle attache par régénération:\nEpithélium jonctionnel court\nNéo-cément, néo-ligament, un nouvel os\nSGD court."
      },
      {
        questionText: "Dans les techniques addictives de chirurgie parodontale, se rangent :\n1- Les greffes pédiculées.\n2- Le distal-Wedge.\n3- Les lambeaux d'assainissement.\n4- Les comblements osseux.\n5- Toutes les réponses sont justes.",
        options: [
          "(1-3-4)", // 16%
          "(1-2-4)", // 10%
          "(1-4)", // 71%
          "(3-4)", // 0%
          "(5)" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Les greffes de gencives pédiculées impliquent le prélèvement...déplacé et suturé sur la zone de récession pour la recouvrir = régénération = additive .\nLe distal wedge est réalisé afin de diminuer l'épaisseur tissulaire et de permettre à la patiente d'accéder à l'hygiène\nLes lambeaux d'assainissement sont des thérapies parodontales permettant de traiter les récessions dentaire et donc une régénération ." // Interpretation: Distal wedge reduces tissue (not additive). Lambeau d'assainissement is debatable if additive (can be just access). Greffes pediculées and comblements are additive.
      }
    ]
  },
  {
    title: "Vestibuloplastie greffes gingivales / lambeaux de repositionnement",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Quel est le principal résultat attendu après une greffe épithélio-conjonctive réussie?",
        options: [
          "La régénération complète du ligament parodontal.", // 0%
          "Une augmentation de la hauteur et de l'épaisseur de la gencive attachée.", // 83%
          "Une couverture complète de la racine exposée.", // 17%
          "Une réduction immédiate de la mobilité dentaire." // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Objectifs :\n• Augmenter le volume de tissu kératinisé.\n• Stopper la progression de récessions... et recouvrir celles-ci.\n• Approfondir un vestibule.\n• Favoriser l'intégration parodontale prothétique et implantaire...\n• Permettre de créer des sites de cicatrisation de première intention...\n• Éliminer des tatouages gingivaux."
      },
      {
        questionText: "Quelle complication peut survenir après une greffe épithélio-conjonctive?",
        options: [
          "Une perte de vitalité pulpaire des dents adjacentes.", // 0%
          "Une cicatrisation par fibrose excessive.", // 100%
          "Une diminution de la largeur de la gencive attachée.", // 0%
          "Une infection sévère nécessitant une extraction." // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "La chirurgie de lambeaux:",
        options: [
          "Est indiquée en cas de poches résiduelles supérieures à 5 mm avec saignement au sondage.", // 29%
          "Le lambeau repositionné est celui placé à sa position préchirurgicale à la fin de fintervention.", // 29%
          "La base du lambeau est systématiquement plus large que sa marge.", // 29%
          "L'incision intrasulculaire est systématique." // 14%
        ],
        correctOptionIndexes: [0, 1, 2], // Highest percentages (tied)
        explanation: "A : Les opérations à lambeau sont indiquées pour les poches parodontales de plus de 5 mm de profondeur (actives), qui ne peuvent pas être contrôlées par le traitement initiale.\nB : Le lambeau repositionné :\nPlacé à une nouvelle position à la fin de l’intervention soit latéralement, coronairement ou apicalement." // Comment B contradicts the option B text. Assuming Option B meant 'replacé'. Option C (base wider) is generally true for vascularity.
      },
      {
        questionText: "Parmi les facteurs au niveau du site donneur, qui détermineront le choix de la technique chirurgicale des récessions, on cite:",
        options: [
          "La position des dents", // 20%
          "La ligne du sourire et son rapport avec la récession", // 0%
          "L'épaisseur des tissus mous palatins", // 20%
          "L'épaisseur de tissu keratinisé" // 60%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "« …Il faut donc disposer d’au moins 3 mm d’épaisseur de tissus mous palatins sur le site donneur. »" // Comment mentions palatal thickness, but option D (keratinized tissue thickness) got higher %. Possibly refers to recipient site donor tissue for pedicle flaps?
      },
      {
        questionText: "La greffe épithélio-conjonctive est utilisée principalement pour :",
        options: [
          "Augmenter la hauteur et l'épaisseur de la gencive kératinisée.", // 100%
          "Remplacer l'os alvéolaire manquant.", // 0%
          "Restaurer la papille interdentaire perdue.", // 0%
          "Traiter les lésions apicales parodontales." // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Objectifs :\n• Augmenter le volume de tissu kératinisé.\n• Stopper la progression de récessions... et recouvrir celles-ci.\n• Approfondir un vestibule.\n• Favoriser l'intégration parodontale prothétique et implantaire...\n• Permettre de créer des sites de cicatrisation de première intention...\n• Éliminer des tatouages gingivaux."
      },
       {
        questionText: "Pour recouvrir les récessions étroites, il est préféré :",
        options: [
          "Un lambeau bipapillaire", // 100%
          "Un lambeau semilunaire", // 0%
          "Une greffe de conjonctif enfoule", // 0%
          "Une greffe épithélio-conjonctive" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage. Comment refers to semilunar flap. Need clarification if Bipapillary is preferred for narrow recessions.
        explanation: "Lambeau semi-lunaire\nC’est une variante du lambeau déplacé coronairement, décrite par TARNOW en 1986.\nIndication\n• Récession de CL1 de MILLER, simple ou multiples.\n• Il est impératif qu’il y ait un tissu kératinisé relativement épais, apicalement à la récession à traiter."
      },
      {
        questionText: "L'indication de la chirurgie muco-gingivale inclut les propositions suivantes sauf:",
        options: [
          "Une insuffisance de gencive attachée", // 0%
          "Un vestibule peu profond", // 0%
          "Une poche infra-osseuse", // 50%
          "Un frein à insertion haute" // 50%
        ],
        correctOptionIndexes: [2, 3], // Highest percentages (tied) - looking for the exception. Infra-osseous pocket is usually flap access, not muco-gingival surgery per se. High frenum IS an indication. So C is the exception.
        explanation: "A : OBJECTIFS : Augmenter la zone de gencive attachée quand celle-ci est insuffisante.\nB : Approfondissement suffisant du fond du vestibule pour permettre un brossage efficace et une bonne déflexion alimentaire pendant la mastication\nD : Supprimer la tention et les tractions sur le bord de la gencive libre."
      },
      {
        questionText: "La vestibuloplastie: Indiquée:",
        options: [
          "Pour le recouvrement radiculaire en présence de vestibule réduit", // 13%
          "Pour améliorer l'hygiène buccodentaire", // 55%
          "Pour éliminer une insertion pathologique d'un frein labial", // 3%
          "pour augmenter la hauteur de tissu keratinisé" // 28%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Indication :\nfacilitant une bonne déflexion alimentaire ainsi qu’une hygiène et brossage adéquat.\nPrésence d’un ou plusieurs freins ou brides à insertion anormalement haute\nAbsence de gencive attachée sur tout un sextant\nBrièveté vestibulaire."
      },
      {
        questionText: "Les avantages de la greffe pédiculée sont :",
        options: [
          "Meilleur support vasculaire du tissu greffe", // 36%
          "Bon résultat esthétique", // 36%
          "Augmentation de volume de tissu kératinisé", // 12%
          "Recouvrement de récessions multiples", // -11% ??? Assuming typo, maybe 11%?
          "Toutes les réponses sont justes" // 4%
        ],
        correctOptionIndexes: [0, 1], // Highest percentages (tied)
        explanation: "" // No specific comment provided in source
      },
       {
        questionText: "Dans les greffes pédiculées, quelle est la technique qui nécessite la présence de hauteur de tissu kératinisé suffisante pour effectuer le déplacement du lambeau :",
        options: [
          "Le lambeau déplacé latéralement", // 14%
          "Le lambeau déplacé coronairement" // 86%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "La hauteur du tissu kératinisée doit être supérieure d’au moins 3mm par rapport à la profondeur"
      },
       {
        questionText: "L'objectif d'application d'acide éthylène diamine tetracetique (EDTA) sur la surface radiculaire, est d'augmenter les chances de recouvrement radiculaire :",
        options: [
          "Vrai", // 29%
          "Faux" // 71%
        ],
        correctOptionIndexes: [1], // Highest percentage (comment implies it helps adhesion, not directly recouvrement)
        explanation: "L’objectif de l’utilisation de cet agent chélatant au pH neutre est d’éliminer la couche de débris qui s’accumule dans les tubules dentinaires .( après surfaçage cette élimination permet d’exposer les fibrille de collagène contenues dans les tubules dentinaires ce qui permettra l’adhésion du caillot à première étape essentielle pour la cicatrisation de la plaie parodontale"
      },
      {
        questionText: "La face externe des papilles anatomiques de Ia gencive sont desepithelialisee dans la technique de recouvrement radiculaire suivante :",
        options: [
          "Greffe epithelioconjonctive", // 21%
          "Greffe de conjonctif", // 30%
          "Régénération tissulaire guidée", // 4%
          "Lambeau positionne coronairement" // 45%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source (but see Q58)
      },
       {
        questionText: "Dans la technique de greffe epithelioconjonctive, le greffon est enfoui sous un lambeau tracté coronairement :",
        options: [
          "Vrai", // 30%
          "Faux" // 70%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // Image provided in source showing graft placed on periosteum, not under flap
      },
      {
        questionText: "Parmi ces techniques chirurgicales de recouvrement de récession gingivale, quelle est celle qui donne un aspect inesthétique après cicatrisation :",
        options: [
          "Greffe epithelioconjonctive", // 72%
          "Greffe de conjonctif", // 16%
          "Lambeau positionne coronairement", // 7%
          "Lambeau positionne latéralement", // 5%
          "Régénération tissulaire guidée" // 0%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Le greffe présente un aspect de rustine de même couleur que le site de prélèvement généralement plus clair"
      },
       {
        questionText: "Le recouvrement de la récession gingivale par lambeau positionne latéralement nécessite 2 sites :",
        options: [
          "Vrai", // 32%
          "Faux" // 68%
        ],
        correctOptionIndexes: [1], // Highest percentage (Only recipient and adjacent donor site)
        explanation: "" // Image provided in source
      },
      {
        questionText: "Dans la régénération parodontale, est (sont) classé (s):",
        options: [
          "L'amputation radiculaire.", // 1%
          "Le lambeau repositionne coronairement.", // 4%
          "Les techniques de comblement.", // 44%
          "La régénération tissulaire guidée" // 51%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "La face externe des papilles anatomiques de la gencive peut être désépithélialisée dans les techniques de recouvrement radiculaire suivantes :\n1- La greffe épithélio-conjonctive\n2- La greffe de conjonctif\n3- Le lambeau positionné coronairement\n4- Le lambeau positionné latéralement\n5- Toutes les réponses sont justes",
        options: [
          "(1,2)", // 3%
          "(1,4)", // 13%
          "(2,3)", // 59%
          "(3,4)", // 15%
          "(5)" // 10%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "2- La greffe de conjonctif : La face externe des papilles anatomiques de la gencive est désépithélialisée.\n3- Le lambeau positionné coronairement : La face externe des papilles anatomiques de la gencive est désépithélialisée." // Image provided in source
      },
       {
        questionText: "La vestibuloplastie « d'Edlan et Mejchar » :",
        options: [
          "Implique le décollement d'un lambeau d'épaisseur totale", // 23%
          "Implique le décollement d'un lambeau d'épaisseur partielle", // 28%
          "Consiste à faire 2 incisions horizontales et 1 incision verticale", // 6%
          "Consiste à faire 2 incisions verticales et 1 incision horizontale" // 43%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Les incisions verticales à partir de la gencive marginal\nL’incision horizontale dans la profondeur du vestibule" // Image provided in source
      },
       {
        questionText: "La régénération tissulaire guidée RTG a pour but de :",
        options: [
          "réparer le système d'attache", // 8% (Source 3174), 9% (Source 2742)
          "Créer un long épithélium de jonction", // 11% (Source 3175), 3% (Source 2743)
          "Reconstituer le système d'attache", // 40% (Source 3176), 44% (Source 2744)
          "Régénérer complétement le support parodontal" // 41% (Source 3177), 44% (Source 2745)
        ],
        correctOptionIndexes: [3], // Highest percentage consistently
        explanation: "" // Question duplicated
      },
      {
        questionText: "Lors de Ia greffe epithelio-conjonctive :",
        options: [
          "Au niveau du site receveur Ia dissection se fait en épaisseur totale", // 12%
          "Au niveau du site receveur Ia dissection se fait en épaisseur partielle", // 38%
          "Le greffon peut être seulement prélevé du palais", // 4%
          "Le greffon peut être majoritairement prélevé du palais" // 46%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
       {
        questionText: "Parmi ces techniques de régénération osseuse, quel est le processus de régénération ou l'ostéogenèse est assurée par le site receveur :",
        options: [
          "L'ostéoinduction", // 30%
          "L'ostéoconductione", // 37%
          "La régénération tissulaire guidée", // 30%
          "Les dérivés de Ia matrice amélaire" // 3%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Lorsque l'ostéoconduction est utilisée, un matériau de régénération osseuse...fournit une structure tridimensionnelle qui permet aux cellules osseuses...de se déplacer, de proliférer et de former de nouveaux tissus osseux."
      },
      {
        questionText: "Les facteurs de croissance sont des materiaux osteoinducteurs:",
        options: [
          "Vrai", // 78%
          "Faux" // 22%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "Les facteurs de croissance sont des composés biologiques qui ont la capacité de stimuler la régénération et la croissance des tissus, y compris l'os."
      },
       {
        questionText: "la régénération parodontale induite est basée sur le concept d'exclusion cellulaire afin de guider les processus cicatriciels vers une régénération parodontale :",
        options: [
          "Vrai", // 68%
          "Faux" // 32%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
       {
        questionText: "Le Lambeau déplacé apicalement est une des techniques qui peut être utilisée pour :",
        options: [
          "La chirurgie resectrice", // 21%
          "L'élongation coronaire", // 37%
          "Les techniques de régénération parodontale", // 14%
          "Eliminer les poches parodontales" // 28%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Devant le cas clinique suivant Un jeune patient présentant des poches parodontales résiduelles, après traitement étiologique, allant de 6 à 7 mm au niveau du secteur antérieur supérieur avec présence de diastèmes inter dentaires.\nQuelle est la technique chirurgicale de choix à proposer ?",
        options: [
          // This is a QROC (Question à Réponse Ouverte Courte), options are not applicable in the standard format.
          // The provided answer is "Le lambeau esthétique d’accès"
          "Le lambeau esthétique d’accès",
          "Gingivectomie",
          "Lambeau déplacé apicalement",
          "Greffe gingivale"
        ],
        correctOptionIndexes: [0], // Based on provided answer
        explanation: "Le lambeau esthétique d’accès" // Directly from source
      },
      {
        questionText: "La réparation parodontale est un processus biologique au cours duquel :",
        options: [
          "L'architecture et la fonction des tissus lésés sont complètement restaurées", // 16%
          "L'architecture et/ou la fonction des tissus lésés ne sont pas complétement restaurées", // 30%
          "Un épithélium de jonction long est obtenu", // 39%
          "Une nouvelle attache obtenue" // 16%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Les Lambeaux repositionnes visent :",
        options: [
          "Eliminer les poches parodontales", // 21%
          "Corriger les faits muco gingivaux", // 34%
          "Restaurer les tissus détruits par la maladie parodontale", // 33%
          "Toutes les réponses sont justes" // 12%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      }
    ]
  },
  {
    title: "Pronostic",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Le stress",
        options: [
          "Est un facteur déclenchant de la maladie parodontale", // 0%
          "N'affecte pas le système immunitaire", // 0%
          "Peut affecter le contrôle de plaque du patient", // 50%
          "Peut affecter l'évolution de la maladie parodontale" // 50%
        ],
        correctOptionIndexes: [2, 3], // Highest percentages (tied)
        explanation: "Le stress émotionnel\nUn stress de longue durée quelle que soit son origine transforme les réactions immunitaires et modifie par conséquent la réponse de l’hôte.\nA ce titre, il est susceptible de provoquer l’apparition ou d’influencer l’évolution d’une parodontite.\nDe plus, les patients depréssifs ont souvent tendance à négliger les soins corporels ce qui aura une incidence sur le contrôle de plaque."
      },
       {
        questionText: "Lors d'une parodontite",
        options: [
          "La mobilité dentaire est toujours un signe d'un mauvais pronostic", // 0%
          "La profondeur de poche est l'élément déterminant du pronostic", // 0%
          "La perte d'attache est l'élément déterminant du pronostic", // 25%
          "L'état général influence le pronostic" // 75%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "A : La mobilité ne signifie pas forcément une dégradation de l ‘état parodontal mais peut résulter d’une force excessive sur la dent.\nB : La profondeur de la poche n’est pas un élément déterminant sauf dans les cas de parodontolyse subterminale\nD : Une santé momentanément compromise change souvent le tableau inflammatoire sans cependant influer profondément sur l’évolution."
      },
       {
        questionText: "Selon McGuire, le pronostic est dit moyen lorsque 50% de perte d'attache sont observés :",
        options: [
          "Vrai", // 21%
          "Faux" // 79%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Pronostic mauvais: 50% de perte d’attache,\nSelon McGuire, le pronostic est dit moyen lorsque 25% de perte d'attache"
      },
       {
        questionText: "Un pronostic est dit réservé Iorsque",
        options: [
          "La mobilité dentaire est de degré 3", // 12%
          "L'atteinte de furcation est de classe 3", // 18%
          "La profondeur de poche parodontale est de 8mm", // 34%
          "La proximité radiculaire est défavorable", // 23%
          "Toutes les réponses sont fausses" // 14%
        ],
        correctOptionIndexes: [2], // Highest percentage (matches image table: 6-8mm)
        explanation: "" // Image table provided in source
      },
      {
        questionText: "A quantité égale de destruction osseuse et a égalité d'éléments étiologiques chez deux sujets d’Age diffèrent atteints de parodontite, le pronostic sera meilleur chez le sujet jeune :",
        options: [
          "Vrai", // 26%
          "Faux" // 74%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Le pronostic est meilleur chez le sujet agé"
      },
      {
        questionText: "Une diminution de l'immunité de l'hôte :",
        options: [
          "Influence le pronostic unitaire de la maladie parodontale.", // 3%
          "Influence le pronostic global de la maladie parodontale.", // 50%
          "Peut avoir un impact négatif sur Ia progression de Ia maladie parodontale.", // 47%
          "Aucune réponse n’est juste" // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Aggravent l’évolution de la maladie parodontale"
      },
       {
        questionText: "Le pronostic des atteintes de furcation :",
        options: [
          "Est défavorable d'emblée pour les prémolaires et molaires supérieures", // 2%
          "Dépend du degré de l'atteinte.", // 37%
          "Dépend de l'anatomie de la zone de furcation.", // 33%
          "Dépend de l'anatomie du défaut osseux.", // 28%
          "Toutes les réponses sont justes" // 1%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Une lésion endo-parodontale combinée :",
        options: [
          "Peut-être favorable au pronostic global.", // 13%
          "Le pronostic est plus favorable lorsque la lésion est d'origine parodontale.", // 2%
          "Le pronostic est plus favorable lorsque la lésions est d'origine endodontique", // 44%
          "Le pronostic dépend du degré de la lyse osseuse." // 41%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source
      }
    ]
  },
  {
    title: "Réévaluation",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "La réévaluation radiographique",
        options: [
          "Est faite sur la base de superposition de radio panoramique avant et après traitement", // 25%
          "Est réalisée 4 à 6 semaines après le traitement Initial", // 0%
          "Est systématique dans le suivi de toute parodontopathie", // 50%
          "Toutes les réponses sont fausses." // 25%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "B : Tous les 3 ans si absence de signes cliniques suspects.\nTous les 6 mois pour :\n• Sites à risque.\n• Sites traités par thérapeutique réparatrice ou régénératrice."
      },
      {
        questionText: "La réévaluation:",
        options: [
          "Est la dernière étape du traitement parodontal", // 0%
          "Est la deuxième étape du traitement parodontal", // 50%
          "permet le maintien des résultats obtenue après traitement", // 0%
          "conditionne la suite du traitement" // 50%
        ],
        correctOptionIndexes: [1, 3], // Highest percentages (tied)
        explanation: "La réévaluation de l’état parodontal, fait suite soit après la thérapeutique initiale soit après la chirurgie ou l’entretien (la maintenance)."
      },
       {
        questionText: "La réévaluation microbiologique :",
        options: [
          "Est un examen de première Intention", // 0%
          "Est un examen de certitude", // 33%
          "Est réalisé lors de la thérapeutique Initiale", // 0%
          "N'est pas systématique dans le traitement des parodontites" // 67%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Réévaluation microbiologique: Des prélèvements bactériens peuvent être effectués afin de dépister un éventuel changement de la flore quantitatif ou qualitatif."
      },
       {
        questionText: "Lors de la phase de réévaluation et dans des situations à risque; les clichés rétroalvéolaires sont réalisés :",
        options: [
          "Chaque année", // 6%
          "Tous les 06 mois", // 71%
          "Tous les 03 mois", // 17%
          "Chaque mois" // 6%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "les sites à risque peuvent faire l’objet d’un suivi radiographique plus rapproché et des clichés rétroalvéolaires sont alors réalisés tous les 6 mois."
      },
      {
        questionText: "Apres Ia thérapeutique étiologique la réévaluation :",
        options: [
          "Est systématiquement radio - clinique", // 13%
          "Elle peut indiquer le passage a la phase de maintenance", // 43%
          "Peut amener le praticien a reconsidérer le pronostic initial", // 39%
          "Toutes les réponses sont justes" // 4%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Les paramètres cliniques utilises pour la réévaluation dépendent des résultats obtenus après chaque étape thérapeutique :",
        options: [
          "Vrai", // 71%
          "Faux." // 29%
        ],
        correctOptionIndexes: [0], // Highest percentage (Despite comment saying they are the same as initial)
        explanation: "Les mesures cliniques sont les même que celle enregistrées lors de l’examen clinique parodontal initial."
      },
      {
        questionText: "La réduction de la profondeur des poches après traitement initial, est la somme : de la diminution de l’œdème gingival, de la diminution du saignement gingival et de gain d'attache.:",
        options: [
          "Vrai", // 84%
          "Faux." // 16%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "La réévaluation parodontale :",
        options: [
          "Est réalisée 6 a 9 mois après la thérapeutique étiologique.", // 8%
          "Permet d'évaluer la coopération du patient au traitement parodontal.", // 31%
          "Permet d'orienter la suite a donner au traitement parodontal.", // 29%
          "Permet d'évaluer les modifications tissulaires obtenues après traitement." // 32%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "A : 6 à 9 semaines ( cas de parodontite )"
      },
       {
        questionText: "Apres Ia thérapeutique étiologique, Ia persistance d'un saignement important au sondage a la réévaluation malgré une bonne démarche diagnostique et thérapeutique :",
        options: [
          "Peut - être en rapport avec un mauvais contrôle de la plaque", // 48%
          "Représente souvent un facteur d'un mauvais pronostic", // 45%
          "Indique le passage obligatoire a la phase chirurgicale", // 4%
          "Toutes les réponses sont justes" // 3%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source
      }
    ]
  },
  {
    title: "Le curetage gingivale / gingivectomie / gingivoplastie",
    subject: "paro-y4",    
    questions: [
      {
        questionText: "Le curetage gingival a pour but:",
        options: [
          "De parfaire la suppression des dépôts mous uniquement de la surface dentaire", // 0%
          "d’éliminer le cément infiltré par les concrétions tartrique,", // 40%
          "d’éliminer le tissu épithélial pathologique bordant la base de la poche,", // 40%
          "D'accélérer la cicatrisation en réduisant la tâche des enzymes et des phagocytes,", // 20%
          "La formation d'une nouvelle attache conjonctive uniquement, au niveau de la surface radiculaire." // 0%
        ],
        correctOptionIndexes: [1, 2], // Highest percentages (tied)
        explanation: "A : la suppression des dépôts mous et calcifiés de la surface dentaire\nE : la formation d’une nouvelle attache conjonctive et/ou épithéliale au niveau de la surface radiculaire,"
      },
      {
        questionText: "Les objectifs de la gingivectomie sont:",
        options: [
          "L'élimination radicale des poches parodontales et la restauration d'un contour gingival normal", // 0%
          "La correction des contours gingivaux et réduction des accroissements gingivaux.", // 40%
          "L'élimination radicale des parodontites sévères.", // 0%
          "L'accès à l’élimination du tartre et les dépôts radiculaires.", // 40%
          "L'amélioration de l’accès aux procédés de restaurations endodontiques." // 20%
        ],
        correctOptionIndexes: [1, 3], // Highest percentages (tied)
        explanation: "Les objectifs de la gingivectomie :\nL’élimination radicale des poches parodontales et la restauration d’un contour gingival normal\nRAMFORD 1979 : a redéfinit les objectifs comme suit :\n- Correction des contours gingivaux et réduction des hyperplasies ou hypertrophies.\n- L’élimination radicale des parodontites modérées.\n- Accès à l’élimination du tartre et les dépôts radiculaires.\n- Amélioration de l’accès aux procédés de restaurations.\n- Obtention d’une morphologie favorisant le control de plaque bactérienne et favorable à la cicatrisation."
      },
      {
        questionText: "Classé les étapes chirurgicales de la gingivectomie\nA. incision en direction apico-coronaire\nB. sondage des poches\nC. marquage des points sanglant\nD. élimination des tissus incisés",
        options: [
          "b ,a,d,c", // 0%
          "b,a,c,d", // 0%
          "b,c,a,d" // 100%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Technique\n1. Réaliser les mesures précises...avec une sonde parodontale\n2. Reporter par des points sanglants...\n3. Inciser en suivant une ligne apicale et parallèle aux points sanglants...\n4. Éliminer le tissu gingival avec une curette" // Images provided
      },
       {
        questionText: "De quel type de gingivectomie s'agit-il /", // Assuming the image showed external bevel
        options: [
          "Gingivectomie à biseau externe", // 83%
          "Gingivectomie à biseau interne" // 17%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "La technique d'éviction gingivale pour la gingivectomie à biseau interne est très proche de la technique de lambeau de Widman modifié" // Assuming the question implies external bevel based on the high % for A.
      },
      {
        questionText: "L'ostéoplastie peut être réalisée lors:",
        options: [
          "du curetage gingival", // 11%
          "de la gingivectomie à biseau externe", // 23%
          "de la gingivectomie à biseau interne", // 53%
          "de la gingivoplastie" // 14%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Cette ostéoplastie se fait a minima dans le cas de volume osseux augmenté"
      },
      {
        questionText: "La gingivectomie à biseau interne:",
        options: [
          "permet d'exposer la furcation", // 9%
          "Est une technique soustractive", // 45%
          "est associé à une antibiothérapies", // 2%
          "Permet l'exposition du rebord alvéolaire" // 44%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "On doit rechercher le contact osseux avec le sommet de la crête osseuse"
      },
       {
        questionText: "Après un curetage gingival, on s'attend à une contraction maximale des tissus quand ceux-ci sont:",
        options: [
          "fibro-oedémateux.", // 13%
          "œdémateux.", // 56%
          "fibreux.", // 27%
          "associés avec la formation d'exsudat" // 4%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
       {
        questionText: "gingivectomie à biseau externe est contre-indiquée dans les cas suivants:",
        options: [
          "poches supra-osseuses peu profondes", // 6%
          "sites d'accès difficiles", // 16%
          "quand il existe des poches intra-osseuses", // 36%
          "quand l'architecture osseuse doit être modifiée", // 32%
          "En cas d'hypertrophie au niveau du bloc incisivo-canin supérieur" // 9%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "A/B : parmi les indications\nContre-indications :\n-Une contre-indication absolue : l’impossibilité d’obtenir de son malade une hygiène rigoureuse et efficace.\n- Gencive attachée étroite ou absente ; - Poches intra-osseuses ; - Epaississement osseux marginau"
      },
      {
        questionText: "Le curetage gingival:",
        options: [
          "permet l'élimination du tissu gingival en excès", // 0%
          "est accompli durant le détartrage", // 17%
          "élimine la paroi molle de la poche gingivale", // 79%
          "permet la correction du contour d'une gencive" // 3%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "le curetage consiste à enlever le tissu dégénéré et nécrotique qui borde la paroi gingivale des poches parodontales."
      },
       {
        questionText: "Le curetage gingival (aveugle) a pour but :",
        options: [
          "De vérifier et de parfaire la suppression des dépôts durs", // 9%
          "D'éliminer le cément infiltre", // 36%
          "De polir la surface radiculaire", // 30%
          "De permettre aussi d'éliminer le tissu épithélial" // 24%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "A : De vérifier et de parfaire la suppression des dépôts MOUS ( Le curetage gingival consiste à cureter les tissus mous de la paroi gingivale d’une poche parodontale )\nD : Éliminer du tissu épithélial pathologique bordant la poche\nC : la nécessité d’une surface «cliniquement » lisse, car elle garantit au mieux l’élimination de tous les dépôts calcifiés."
      },
      {
        questionText: "Le curetage parodontal a I ‘aveugle est indiqué :",
        options: [
          "Pour la plupart des variétés de l'hypertrophie gingivale", // 9%
          "En présence d'une poche parodontale inferieure a 7 mm", // 5%
          "Pour évaluer la réponse tissulaire cicatricielle", // 32%
          "Dans les atteintes de furcation classe I et II de Glickman", // 23%
          "En cas d'abcès parodontal" // 31%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "" // No specific comment provided in source (but matches previous indication list)
      },
      {
        questionText: "Parmi les cause de l'accroissement gingival on trouve :",
        options: [
          "Inflammation d'origine bactérienne", // 34%
          "Maladies cardio-vasculaires", // 3%
          "Certains médicaments", // 40%
          "Leucémie" // 23%
        ],
        correctOptionIndexes: [2], // Highest percentage
        explanation: "Accroissement d’origine bactérienne\nAccroissement d’origine Médicamenteuse : Immunosuppresseurs / Anticonvulsants\nAccroissement causé par une maladie systémique : Leucémie / Maladie granulomateuse\nAccroissement associé à une maladie ou condition systémique : Grossesse ;Puberté ;Epulis\nAccroissement néoplasique (tumeurs gingivales)"
      },
      {
        questionText: "La gingivectomie est indiquée dans le traitement de (cochez la réponse fausse) /",
        options: [
          "L'accroissement gingival d'origine médicamenteuse", // 17%
          "La Gingivite induite par la plaque", // 15%
          "L'éruption passive altérée", // 10%
          "La poche parodontale infra osseuse" // 59%
        ],
        correctOptionIndexes: [3], // Highest percentage (as it's a contraindication)
        explanation: "Contre-indications de la gingivectomie :\nPoche infraosseuse\nHauteur insuffisante de gencive kératinisée\nNécessité de chirurgie osseuse\nPerte d’attache (risque d’exposition radiculaire)"
      },
       {
        questionText: "Cochez les propositions fausses à propos de la gingivectomie :",
        options: [
          "La gingivectomie est contre indiquée en cas de mauvaise hygiène", // 7%
          "Le laser apporte de meilleurs résultats par rapport à l'utilisation du bistouri", // 35%
          "Le pansement parodontal est Indique dans la gingivectomie a biseau interne", // 46%
          "La gingivectomie peut être effectué dans le traitement prothétique pour l'élongation coronaire" // 12%
        ],
        correctOptionIndexes: [2], // Highest percentage (False proposition)
        explanation: "B : l’utilisation de Laser pour l'incision risquerait de traumatiser la dent et le paquet vasculonerveux de la pulpe dentaire.\nC : dans la gingivectomie a biseau externe Afin de protéger la plaie au cours de la période de la cicatrisation"
      },
       {
        questionText: "Dans le traitement chirurgical parodontal, la gingivectomie a biseau interne est caractérisée par :",
        options: [
          "L'incision Initiale qui se fait en direction apico-coronaire par rapport à l'axe de la dent", // 5%
          "L'incision initiale qui se fait en direction corono apicale par rapport à l'axe de la dent", // 41%
          "Le décollement du lambeau en épaisseur totale", // 25%
          "La réalisation des points sanglants indiquant la profondeur des poches parodontales" // 29%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "A : Inciser la gencive attachée avec un bistouri faisant un angle entre 10 et 45° de coronaire en apical par rapport au grand axe de la dent.\nD : c’est dans la Gingivectomie à biseau externe"
      },
       {
        questionText: "Les phases suivantes représentent les étapes du curetage parodontal à l'aveugle, parmi les propositions ci-dessous, laquelle correspond à l'ordre chronologique de ces phases ::\nA. Curetage du tissu de granulation et de l'épithélium infiltre de la paroi interne de la poche\nB. Curetage de l'attachement epithelio-conjonctive\nC. Surfaçage radiculaire\nD. Révision de la plaie et protection",
        options: [
          "A-B-C-D", // 18%
          "A-C-B-D", // 6%
          "C-A-B-D", // 35%
          "C-B-A-D" // 41%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "" // Image provided in source showing SRP first, then soft tissue curettage. Sequence B->A might depend on interpretation.
      },
      {
        questionText: "Lors de la gingivectomie a biseau externe :",
        options: [
          "On doit rechercher un contact osseux lors de l'incision", // 3%
          "On doit rechercher un contact dentaire lors de l'incision", // 89%
          "Un rebord alvéolaire doit être exposé après l'incision", // 5%
          "Le Lambeau doit être repositionne à la fin de l'intervention" // 3%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
      {
        questionText: "Le curetage gingival est une technique :", // Note: Source seems to have merged Q91 and Q97 titles
        options: [
          "Qui élimine la paroi molle de la poche et le tissu conjonctif gingival", // 48%
          "Qui s'effectue apicalement a épithélium de jonction", // 4%
          "Qui s'effectue en sous-gingival", // 46%
          "Qui permet d'analyser le tissu resèque en vue d'un diagnostic" // 2%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source
      },
       {
        questionText: "Dans la classification de I ‘accroissement gingival associe aux conditions systématiques, on retrouve:",
        options: [
          "La grossesse", // 36%
          "La leucémie", // 28%
          "La malnutrition", // 18%
          "La Fibromatose gingivale" // 18%
        ],
        correctOptionIndexes: [0], // Highest percentage
        explanation: "" // No specific comment provided in source (Refers back to Q68 list)
      },
       {
        questionText: "La gingivectomie est contre indiquée en cas de perte d'attache, pourquoi ?", // QROC
        options: [
          "Risque d’exposition radiculaire",
          "Difficulté de cicatrisation",
          "Manque de gencive kératinisée",
          "Contre-indication esthétique"
        ],
        correctOptionIndexes: [0], // Based on provided answer
        explanation: "(Risque d’exposition radiculaire)"
      },
      {
        questionText: "La gingivectomie à biseau interne :\n1- Est caractérisée par l'orientation de la lame de coronaire en apical\n2- Est caractérisée par une cicatrisation par deuxième intention\n3- Nécessite des sutures\n4- La lame de bistouri est mise en contact avec le sommet de la crête osseuse\n5- Toutes les réponses sont justes",
        options: [
          "(1,4)", // 17%
          "(1,3,4)", // 74%
          "(1,2,3)", // 3%
          "(1,3)", // 6%
          "(5)" // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "2 : une cicatrisation de première intention ( sutures )\nGingivectomie à biseau interne\n...Cette technique ne laisse pas de zone cruentée...\nInciser la gencive attachée avec un bistouri faisant un angle entre 10 et 45° de coronaire en apical...\nRechercher le contact osseux avec le sommet de la crête osseuse.\n...Réaliser une série de points de suture suspendus." // Summary of long explanation
      },
      {
        questionText: "Les indications de la gingivectomie sont :\n1- L'accroissement gingival.\n2- La fibromatose gingivale héréditaire.\n3- La poche infra-osseuse.\n4- L'éruption passive altérée.\n5- Toutes les réponses sont justes.",
        options: [
          "(1-2-3)", // 3%
          "(1-2-4)", // 69%
          "(1-2)", // 10%
          "(1-4)", // 17%
          "(5)" // 0%
        ],
        correctOptionIndexes: [1], // Highest percentage
        explanation: "Indications\nAccroissement gingival suite à une gingivite induite par la plaque\nAccroissement gingival d'origine médicamenteuse..., hormonale ou génétique...\nEruption passive altérée\nÉlongation coronaire pré-prothétique\n3: la poche infra osseuse est une Contre-indication"
      },
      {
        questionText: "Lors de la gingivectomie, le marquage des points sanglants :\n1- Correspondent aux points d'injection de l'anesthésie.\n2- Correspondent à la portion de gencives à exciser.\n3- Correspondent à la portion de gencives à ne pas toucher.\n4- Correspondent au tracé de l'incision.\n5- Marquent le niveau de la poche.",
        options: [
          "(2-4)", // 13%
          "(1-3)", // 0%
          "(1-2-5)", // 0%
          "(2-4-5)", // 77%
          "(4-5)" // 10%
        ],
        correctOptionIndexes: [3], // Highest percentage
        explanation: "Le fond des poches est marqué à l’aide des précelles de DEPPELER...\nCe marquage permet d’obtenir des points sanglants qui serviront de repère pour l’incision" // Image provided
      }
    ]
  }
];

module.exports = paroy4Quizzes;
