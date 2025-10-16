// quizzes/year-1/anatomy-y1.js

// تم تحويل الأسئلة لتتوافق مع quizModel.js والواجهة الأمامية
// QCS (إجابة واحدة) -> correctOptionIndexes: [index]
// QCM (إجابات متعددة) -> correctOptionIndexes: [index1, index2, ...]

const anatomyQuizzes = [
  {
    title: "Introduction Sur l’Anatomie",
    subject: "anatomy-y1", // هذا الـ key سيتم ربطه لاحقًا بالـ ObjectId الصحيح
    questions: [
      // Question 1 (Anciennement QCS)
      {
        questionText: "Dans la position anatomique de référence le sujet adulte : 1- Est vivant et assis. 2- Regard horizontal. 3- L'articulation du coude est fléchie. 4- Les jambes étendues. 5- Paume des mains en avant.",
        options: [
          "1, 2, 3",
          "2, 4, 5", // Correct
          "3, 4",
          "1, 2",
          "3, 4, 5"
        ],
        correctOptionIndexes: [1],
        explanation: "La position anatomique de référence correspond à un individu adulte, vivant et debout. Les jambes doivent être étendues (point 4), le regard doit être horizontal (point 2), et la paume des mains en avant (point 5)."
      },
      // Question 2 (Anciennement QCS)
      {
        questionText: "Concernant l'anatomie générale : L'axe du corps est; 1- Le sujet en position anatomique de référence 2- Une verticale passant par le sommet du crâne. 3- Une horizontale qui passe par la C7. 4- Abaissée du vertex et passe par le centre de gravité du corps. 5- Une longitudinale qui passe par le 3e doigt.",
        options: [
          "2, 3, 4",
          "1, 2, 4", // Correct
          "3, 5",
          "1, 3, 5",
          "2, 3"
        ],
        correctOptionIndexes: [1],
        explanation: "L'axe du corps en anatomie est une verticale passant par le sommet du crâne (point 2) et elle descend du vertex jusqu'au centre de gravité du corps (point 4). Cela correspond à la ligne médiane du corps lorsque le sujet est en position anatomique de référence."
      },
      // Question 3 (Anciennement QCS)
      {
        questionText: "Concernant la terminologie anatomique : 1- Le terme « distal » est le synonyme du caudal. 2- Le terme « latéral » désigne un élément proche du plan médian. 3- Le terme « ventral » désigne un élément qui regarde vers le haut. 4- Le terme « proximal » désigne un élément proche de l'extrémité céphalique. 5- Le terme « médian » désigne un élément qui se projette sur un plan sagittal.",
        options: [
          "1, 2, 3",
          "2, 4",
          "1, 4, 5", // Correct
          "3, 4",
          "2, 3, 4"
        ],
        correctOptionIndexes: [2],
        explanation: "Le terme « latéral » désigne un élément qui est éloigné du plan médian, et non proche. (Point 2 est incorrect) Le terme « proximal » désigne un élément près de l'origine ou près du tronc, ce qui peut être proche de l'extrémité céphalique. (Point 4 est correct)."
      },
      // Question 4 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie : L'anatomie macroscopique comprend :",
        options: [
          "L'anatomie microscopique.",
          "L'anatomie générale.", // Correct
          "L'anatomie descriptive.", // Correct
          "L'anatomie topographique.", // Correct
          "L'anatomie de développement."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'anatomie macroscopique (ou anatomie visible à l'œil nu) inclut l'anatomie générale, descriptive, et topographique."
      },
      // Question 5 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie :",
        options: [
          "Un organe est composé de tissus différents.", // Correct
          "Un organe est composé de cellules ayant la même fonction.",
          "Un système est un ensemble d'organes complexes.", // Correct
          "Un appareil est formé par des systèmes ayant la même fonction.", // Correct
          "Un tissu est formé de cellules ayant des fonctions différentes."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Un organe est composé de tissus différents (A). Un système est un ensemble d'organes (C). Un appareil est constitué de plusieurs systèmes (D)."
      },
      // Question 6 (QCM) -> Multiple choice
      {
        questionText: "Concernant les systèmes de références anatomiques : Dans la position anatomique standard :",
        options: [
          "Les paumes des mains sont tournées vers l'arrière.",
          "Les pieds écartés.",
          "Le regard droit et horizontal.", // Correct
          "Les pieds réunis et en avant.", // Correct
          "Les bras pendant le long du corps." // Correct
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Dans la position anatomique standard, le regard est droit et horizontal, les pieds sont réunis et en avant, et les bras pendent le long du corps."
      },
      // Question 7 (QCM) -> Multiple choice
      {
        questionText: "Concernant les systèmes de références anatomiques :",
        options: [
          "Un axe longitudinal est vertical descendant sur la ligne médiane de haut en bas.", // Correct
          "Un axe longitudinal est un axe ventro-dorsal.",
          "L'axe horizontal est perpendiculaire à l'axe sagittal.", // Correct
          "Un plan coronal est un plan frontal vertical.", // Correct
          "Un plan sagittal divise le corps en deux parties droite et gauche." // Correct
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "L'axe longitudinal est vertical (A). L'axe horizontal est perpendiculaire au sagittal (C). Le plan coronal est frontal (D). Le plan sagittal divise le corps en parties droite et gauche (E)."
      },
      // Question 8 (QCM) -> Multiple choice
      {
        questionText: "Concernant le glossaire anatomique :",
        options: [
          "Ce qui est distal est proche de l'origine.",
          "Médial et interne sont synonymes.", // Correct
          "Le segment proximal d'un membre est proche de sa racine.", // Correct
          "Ventral et caudal sont synonymes.",
          "Ce qui est profond est loin de la surface." // Correct
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Médial et interne sont synonymes (B). Proximal est proche de la racine (C). Profond est loin de la surface (E)."
      },
      // Question 9 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie : Dans la position anatomique de référence le sujet adulte :",
        options: [
          "Est vivant et debout.", // Correct
          "Les bras levés vers le haut.",
          "Le regard vers le bas.",
          "Les jambes fléchies.",
          "Les pieds posés sur le sol." // Correct
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Dans la position anatomique de référence, le sujet est vivant et debout, avec les pieds posés sur le sol."
      },
      // Question 10 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie : L'axe du corps est :",
        options: [
          "Une verticale.", // Correct
          "Une horizontale qui divise le corps en 2 parties.",
          "Abaissée du vertex et passe par le centre de gravité du corps.", // Correct
          "Une longitudinale qui passe par le 3ème doigt.",
          "Une longitudinale qui passe par le 2ème orteil."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'axe du corps est une ligne verticale qui descend du vertex (sommet du crâne) et passe par le centre de gravité du corps."
      },
      // Question 11 (QCM) -> Multiple choice
      {
        questionText: "Concernant la terminologie anatomique :",
        options: [
          "Le terme \"proximal\" désigne un élément proche du tronc.", // Correct
          "Le terme \"médial\" désigne un élément proche du plan médian.", // Correct
          "Le terme \"ventral\" désigne un élément qui regarde vers l'avant.", // Correct
          "Le terme \"caudal\" désigne un élément proche de l'extrémité céphalique.",
          "Le terme \"médian\" désigne un élément qui se projette sur un plan transversal."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Proximal est proche du tronc (A). Médial est proche du plan médian (B). Ventral est vers l'avant (C)."
      },
      // Question 12 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie du plan sagittal médian :",
        options: [
          "Est vertical.", // Correct
          "Antéro-postérieur.", // Correct
          "Est horizontal.",
          "Divise le corps en 2 parties symétriques droite et gauche.", // Correct
          "Divise le corps en 2 parties asymétriques médiale et latérale."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le plan sagittal médian est vertical, antéro-postérieur, et divise le corps en deux moitiés symétriques (droite et gauche)."
      },
      // Question 13 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie :",
        options: [
          "L'anatomie est l'étude macroscopique des structures du corps.", // Correct
          "L'anatomie est l'étude microscopique des structures du corps.",
          "L'anatomie générale étudie les tissus, organes, système et appareils.", // Correct
          "L'anatomie descriptive étudie la morphologie des structures du corps.", // Correct
          "L'anatomie topographique étudie la fonction des organes."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'anatomie est l'étude macroscopique (A). L'anatomie générale étudie les tissus, organes, systèmes et appareils (C). L'anatomie descriptive étudie la morphologie (D)."
      },
      // Question 14 (QCM) -> Multiple choice
      {
        questionText: "Concernant les généralités sur l'anatomie :",
        options: [
          "Un organe est composé de tissus différents.", // Correct
          "Un organe est toujours composé d'un seul tissu.",
          "Un système est formé par des organes ayant la même structure.",
          "Un appareil est formé par des systèmes ayant la même fonction.", // Correct
          "Un tissu est formé de cellules ayant des fonctions différentes."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Un organe est composé de tissus différents (A). Un appareil est formé par des systèmes ayant la même fonction (D)."
      },
      // Question 16 (QCM) -> Multiple choice
      {
        questionText: "Concernant les systèmes de références anatomiques :",
        options: [
          "Un plan axial est un plan transverse.", // Correct
          "Un plan coronal est un plan sagittal.",
          "Un plan coronal est un plan frontal.", // Correct
          "Un plan sagittal médian divise le corps en deux moitiés droite et gauche égales.", // Correct
          "L'axe sagittal traverse le corps de droite à gauche."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Un plan axial est transverse (A). Un plan coronal est frontal (C). Le plan sagittal médian divise le corps en moitiés égales droite et gauche (D)."
      },
      // Question 17 (QCM) -> Multiple choice
      {
        questionText: "Concernant le glossaire anatomique :",
        options: [
            "Ce qui est latéral est plus proche du plan médian .",
            "Médial et interne sont synonymes .", // Correct
            "Le segment proximal d'un membre est proche de sa racine .", // Correct
            "Ventral et antérieur sont synonymes .", // Correct
            "Le centre d'une courbure prend le nom de concavité ." // Correct
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Médial et interne sont synonymes (B). Proximal est proche de la racine (C). Ventral et antérieur sont synonymes (D). Le centre d'une courbure est une concavité (E)."
      },
      // Question 18 (QCS) -> Single choice
      {
        questionText: "Le plan médian sépare le corps humain :",
        options: [
            "En deux parties égales supérieure et inférieure.",
            "En deux parties inégales supérieure et inférieure.",
            "En deux parties inégales droite et gauche.",
            "En deux parties égales droite et gauche.", // Correct
            "En deux parties égales antérieure et postérieure."
        ],
        correctOptionIndexes: [3],
        explanation: "Le plan médian, ou plan sagittal médian, divise le corps en deux moitiés symétriques, droite et gauche."
      }
    ]
  },
  {
    title: "Généralité Sur Ostéologie",
    subject: "anatomy-y1",
    questions: [
        // Question 1 from Osteology (QCS)
        {
            questionText: "Généralités sur l'ostéologie du corps humain : 1- Il existe 206 pièces osseuses au niveau du squelette, au De là c'est des os surnuméraires. 2- Le squelette est divisé en squelette appendiculaire impair et squelette axiale paire. 3- La ceinture pelvienne est une ceinture complète. 4- Les os du carpe et du tarse sont des os courts. 5- L'ulna et le tibia forment le squelette de la jambe.",
            options: [
                "1, 3, 4", // Correct
                "3, 4, 5",
                "2, 5",
                "1, 2",
                "1, 4, 5"
            ],
            correctOptionIndexes: [0],
            explanation: "Le corps humain a 206 os (1). La ceinture pelvienne est complète (3). Les os du carpe et du tarse sont des os courts (4)."
        },
        // Question 2 from Osteology (QCM)
        {
            questionText: "A propos du système squelettique : L'os est un :",
            options: [
                "Tissu conjonctif hautement vascularisé.", // Correct
                "Tissu conjonctif élastique.",
                "Organe responsable de la fabrication des éléments figurés du sang.", // Correct
                "Organe rigide non innervé.",
                "Réservoir phosphocalcique." // Correct
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "L'os est un tissu conjonctif vascularisé (A), il produit les cellules sanguines (C), et sert de réservoir phosphocalcique (E)."
        },
        // Question 4 from Osteology (QCM)
        {
            questionText: "A propos du système squelettique : L'os long :",
            options: [
                "Constitue tout le squelette des membres .",
                "Présente un corps et deux extrémités .", // Correct
                "Constitué d'une surface lisse .",
                "Toujours articulaire à ses extrémités .", // Correct
                "Recouvert de cartilage hyalin sur toute sa surface ."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Un os long est composé d'une diaphyse (corps) et de deux épiphyses (extrémités) (B). Ses extrémités sont articulaires (D)."
        },
        // Question 5 from Osteology (QCM) - Single Correct Answer
        {
            questionText: "Concernant l'ostéologie :",
            options: [
                "Un os plat a une diaphyse et deux épiphyses .",
                "La surface articulaire est recouverte par le cartilage articulaire ou hyalin .", // Correct
                "La moelle osseuse rouge se trouve dans la diaphyse des os longs .",
                "La surface des os est toujours régulière .",
                "Il existe un seul type d'os ."
            ],
            correctOptionIndexes: [1],
            explanation: "La surface articulaire des os est recouverte de cartilage hyalin pour réduire la friction."
        },
        // Question 6 from Osteology (QCM)
        {
            questionText: "Concernant le squelette osseux :",
            options: [
                "C'est une réserve de minéraux importants.", // Correct
                "Fabrique des cellules sanguines.", // Correct
                "Stocke des matériaux lourds.", // Correct (considéré comme correct dans la source)
                "Protège les organes.", // Correct
                "Fournit l'énergie au corps."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "Le squelette sert de réserve de minéraux (A), fabrique les cellules sanguines (B), stocke des minéraux lourds (C), et protège les organes (D)."
        },
        // Question 7 from Osteology (QCM)
        {
            questionText: "Concernant le système squelettique :",
            options: [
                "Il représente 40% du poids du corps.",
                "Il joue un rôle dans la mobilité.", // Correct
                "L'os est formé par du tissu conjonctif rigide.", // Correct
                "Le squelette axial est formé par les membres.",
                "La surface de l'os est toujours régulière."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le squelette joue un rôle dans la mobilité (B) et l'os est un tissu conjonctif rigide (C). Il représente 15-20% du poids. Le squelette axial ne contient pas les membres. La surface de l'os a des irrégularités."
        },
        // Question 8 from Osteology (QCM)
        {
            questionText: "Concernant la structure de l'os :",
            options: [
                "La diaphyse de l'os long est creusée par le canal médullaire ou central.", // Correct
                "Le périoste est une membrane fibreuse recouvrant l'os.", // Correct
                "L’ostéoclaste est la cellule formatrice de l'os.",
                "La métaphyse est comprise entre les épiphyses.", // Correct
                "La croissance de l'os en longueur est assurée par le cartilage de croissance." // Correct
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "L'ostéoclaste résorbe l'os, ce n'est pas la cellule formatrice. Toutes les autres propositions sont correctes."
        },
        // Question 10 from Osteology (QCM)
        {
            questionText: "La cage thoracique appartient au squelette axial. Quels sont les os qui la constituent ?",
            options: [
                "Le sternum.", // Correct
                "La clavicule.",
                "Le fémur.",
                "Les côtes.", // Correct
                "La colonne vertébrale thoracique." // Correct
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "La cage thoracique est constituée du sternum, des côtes, et des vertèbres thoraciques."
        },
        // Question 11 from Osteology (QCM)
        {
            questionText: "Un os long est :",
            options: [
                "Plus long que large.", // Correct
                "Plus large que long.",
                "Plus épais que large.",
                "Vascularisé par les artères musculaires.",
                "Contient du cartilage de croissance au niveau des extrémités." // Correct
            ],
            correctOptionIndexes: [0, 4],
            explanation: "Un os long est plus long que large (A) et contient le cartilage de croissance chez l'enfant au niveau de la métaphyse, près des extrémités (E)."
        },
        // Question 12 from Osteology (QCM)
        {
            questionText: "À propos de l'ostéologie :",
            options: [
                "Le squelette appendiculaire est rattaché au squelette axial par des ceintures.", // Correct
                "Le fémur est l'os le plus long du corps humain.", // Correct
                "Le squelette de l'avant-bras est formé d'une seule pièce osseuse le radius.",
                "Les os du squelette appendiculaire comportent des surfaces articulaires.", // Correct
                "Le corps humain adulte comporte 300 os."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Le squelette de l'avant-bras est formé du radius et de l'ulna. Le corps adulte a 206 os. Les autres propositions sont correctes."
        },
        // Question 13 from Osteology (QCM)
        {
            questionText: "A propos de l'ostéologie :",
            options: [
                "Le squelette est divisé en axiale et appendiculaire.", // Correct
                "La scapula est un os long.",
                "Les os du carpe sont des os courts.", // Correct
                "Les phalanges sont des os longs.", // Correct
                "L'os est un organe élastique comparativement au cartilage."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "La scapula est un os plat. L'os est plus rigide que le cartilage. Les autres propositions sont correctes."
        },
        // Question 14 from Osteology (QCM)
        {
            questionText: "Ces propositions concernent le squelette :",
            options: [
                "Il existe 300 os constants dans le corps humain.",
                "L'os est richement vascularisé et non innervé.",
                "L'ulna constitue à lui seul le squelette du bras.",
                "Les os longs comportent une diaphyse et deux épiphyses.", // Correct
                "Le squelette humain est divisé en squelette axiale et appendiculaire." // Correct
            ],
            correctOptionIndexes: [3, 4],
            explanation: "Le corps adulte a 206 os. L'os est innervé. Le bras contient l'humérus. Les propositions D et E sont correctes."
        },
        // Question 15 from Osteology (QCM)
        {
            questionText: "Ces propositions concernent le squelette :",
            options: [
                "Le squelette humain est divisé en squelette axiale et appendiculaire.", // Correct
                "La scapula forme le squelette de l'épaule.", // Correct
                "Les os comportent des surfaces articulaires non recouvertes par du cartilage.",
                "Les os longs comportent une diaphyse et une épiphyse.",
                "L'ulna forme le squelette du bras."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Les surfaces articulaires sont recouvertes de cartilage. Les os longs ont deux épiphyses. L'ulna est un os de l'avant-bras. Les propositions A et B sont correctes."
        },
        // Question 16 from Osteology (QCM)
        {
            questionText: "Un os long présente les caractéristiques suivantes :",
            options: [
                "Une longueur et une largeur égale.",
                "Une longueur prédominante sur la largeur.", // Correct
                "Présente deux faces et deux bords.",
                "Une diaphyse et deux extrémités ou épiphyses.", // Correct
                "L'os humérus est l'exemple type." // Correct
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Un os long a une longueur prédominante (B), une diaphyse et deux épiphyses (D), et l'humérus en est un exemple type (E)."
        },
        // Question 17 from Osteology (QCM)
        {
            questionText: "Ces propositions concernent le squelette humain :",
            options: [
                "Constitué de 600 os.",
                "Les ceintures relient le squelette axial au squelette appendiculaire.", // Correct
                "L'os plat a une longueur supérieure à la largeur.",
                "Diaphyse et épiphyse sont des termes spécifiques à l'os long.", // Correct
                "Le thorax fait partie du squelette axial." // Correct
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Le corps adulte a 206 os. L'os plat n'a pas une longueur prédominante. Les propositions B, D, et E sont correctes."
        },
        // Question 18 from Osteology (QCM)
        {
            questionText: "Un os long est un os qui a les caractéristiques suivantes :",
            options: [
                "Une longueur et une largeur égale.",
                "Une longueur prédominante sur la largeur.", // Correct
                "Présente deux faces et deux extrémités.",
                "Un corps et deux extrémités ou épiphyses.", // Correct
                "L'os humérus est l'exemple type." // Correct
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Un os long a une longueur prédominante (B), un corps (diaphyse) et deux épiphyses (D), et l'humérus en est un exemple type (E)."
        },
        // Question 19 from Osteology (QCM)
        {
            questionText: "Le squelette axial comprend les éléments suivants :",
            options: [
                "L'os hyoïde.", // Correct
                "Les os de l'avant-bras.",
                "Le crâne.", // Correct
                "Les os de la jambe.",
                "La colonne vertébrale." // Correct
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "Le squelette axial comprend l'os hyoïde, le crâne et la colonne vertébrale. Les os de l'avant-bras et de la jambe font partie du squelette appendiculaire."
        }
    ]
  },
  {
    title: "Système Articulaire",
    subject: "anatomy-y1",
    questions: [
      {
        questionText: "Concernant les articulations synoviales :\n\n1- Sont des diarthroses.\n2- Sont peu mobiles.\n3- Présentent une capsule et des ligaments.\n4- Présentent une cavité articulaire\n5- Les surfaces articulaires sont recouvertes de cartilage fibreux",
        options: [
          "(3.4.5)",
          "(2.4)",
          "(2.3.4)",
          "(1.3.4)",
          "(1.2)"
        ],
        correctOptionIndexes: [3],
        explanation: "Les articulations synoviales (diarthroses) sont très mobiles, possèdent une capsule renforcée par des ligaments, une cavité articulaire, et leurs surfaces sont recouvertes de cartilage hyalin, et non fibreux."
      },
      {
        questionText: "Concernant les mouvements des articulations synoviales :",
        options: [
          "Tous les mouvements se font autour d'un plan dans un axe.",
          "Les mouvements de flexion et extension se font selon un axe vertical dans un plan sagittal.",
          "L'abduction est le fait d'écarter une partie du corps du plan médian.",
          "Une articulation sphéroïde est à trois axes de mobilité.",
          "La prono-supination permet une rotation d'une partie de membre par rapport à une autre."
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "L'abduction écarte du plan médian. Une articulation sphéroïde a bien trois axes de mobilité. La prono-supination est un mouvement de rotation. La flexion/extension se fait autour d'un axe transversal dans un plan sagittal."
      },
      {
        questionText: "Concernant les articulations :",
        options: [
          "Il existe 3 types d'articulations : fibreuse, cartilagineuse et synoviale.",
          "Toutes les articulations sont mobiles.",
          "Les gomphoses et les synchondroses sont des articulations fibreuses.",
          "Les articulations fibreuses sont immobiles.",
          "Toutes les articulations ayant du cartilage ont une cavité articulaire."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Il existe 3 types d'articulations (fibreuse, cartilagineuse, synoviale). Les articulations fibreuses sont généralement immobiles. Toutes les articulations ne sont pas mobiles, et les synchondroses sont cartilagineuses, non fibreuses."
      },
      {
        questionText: "Concernant les articulations semi-mobiles :",
        options: [
          "Sont nommées les synarthroses.",
          "Sont des articulations à plusieurs degrés de liberté.",
          "Sont nommées les amphiarthroses.",
          "Absence de cavité articulaire centrale.",
          "L'articulation de l'épaule est l'exemple type."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les articulations semi-mobiles sont appelées amphiarthroses et n'ont pas de cavité articulaire centrale. Les synarthroses sont immobiles, et l'articulation de l'épaule est une diarthrose (très mobile)."
      },
      {
        questionText: "Concernant les articulations synoviales :",
        options: [
          "Sont des diarthroses.",
          "Sont peu mobiles.",
          "Présentent une capsule et des ligaments.",
          "La membrane synoviale tapisse la face externe de la capsule.",
          "Les surfaces articulaires ne sont pas recouvertes de cartilage."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les articulations synoviales sont des diarthroses (très mobiles) et présentent une capsule et des ligaments. La membrane synoviale tapisse la face interne de la capsule, et les surfaces sont recouvertes de cartilage."
      },
      {
        questionText: "Concernant les généralités sur les articulations : Les synarthroses :",
        options: [
          "Sont des articulations semi-mobiles.",
          "Elles possèdent une capsule.",
          "La colonne vertébrale est une série de synarthroses.",
          "La suture coronale est une jonction fronto-pariétale de type synarthrose.",
          "L'articulation temporo-mandibulaire n'est pas une synarthrose."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La suture coronale est une synarthrose (immobile). L'articulation temporo-mandibulaire est une diarthrose (mobile), donc ce n'est pas une synarthrose. Les synarthroses sont immobiles, sans capsule, et la colonne vertébrale est composée d'amphiarthroses."
      },
      {
        questionText: "Concernant les généralités sur les articulations : les amphiarthroses.",
        options: [
          "Sont toutes dotées d'un disque interarticulaire.",
          "La symphyse pubienne est une amphiarthrose.",
          "Elles sont immobiles.",
          "Elles présentent une synoviale.",
          "Elles sont dotées de ligament passif."
        ],
        correctOptionIndexes: [1],
        explanation: "La symphyse pubienne est un exemple classique d'amphiarthrose (articulation semi-mobile). Les amphiarthroses sont semi-mobiles, n'ont pas de synoviale et ne sont pas toutes dotées d'un disque."
      },
      {
        questionText: "Concernant les généralités sur les articulations : les diarthroses.",
        options: [
          "La plupart des articulations de l'appareil locomoteur sont des diarthroses.",
          "Elles sont toutes très mobiles.",
          "Elles sont lubrifiées grâce au liquide synovial secrété par la capsule.",
          "Elles présentent des ligaments actifs qui sont des tendons musculaires péri-articulaires.",
          "Elles possèdent six variétés qui dépendent de la forme des surfaces articulaires."
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "La majorité des articulations locomotrices sont des diarthroses. Elles peuvent avoir des ligaments actifs (tendons) et sont classées en six variétés selon la forme de leurs surfaces. Le liquide synovial est sécrété par la membrane synoviale, pas la capsule."
      },
      {
        questionText: "Parmi ces éminences, quelle est celle qui est articulaire :",
        options: [
          "Tubérosité.",
          "Protubérance.",
          "Condyle.",
          "Épine.",
          "Tubercule."
        ],
        correctOptionIndexes: [2],
        explanation: "Le condyle est une éminence articulaire arrondie. Les autres options (tubérosité, protubérance, épine, tubercule) sont généralement des sites d'insertion pour les muscles ou les ligaments."
      },
      {
        questionText: "Les articulations fibreuses sont caractérisées par :",
        options: [
          "Absence de mobilité.",
          "La présence d'un cartilage articulaire.",
          "La présence d'un tissu fibreux.",
          "Les sutures du crâne sont des synarthroses.",
          "La gomphose unit une dent à une alvéole."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Les articulations fibreuses sont immobiles (synarthroses), unies par du tissu fibreux. Les sutures du crâne et la gomphose (dent-alvéole) en sont des exemples. Elles n'ont pas de cartilage articulaire."
      },
      {
        questionText: "Les articulations cartilagineuses :",
        options: [
          "Les surfaces osseuses sont recouvertes par un tissu fibreux.",
          "Sont très mobiles.",
          "Les synchondroses sont des articulations diaphyso-épiphysaires.",
          "La symphyse pubienne est une articulation semi-mobile.",
          "Elles sont caractérisées par l'absence d'une cavité articulaire."
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les synchondroses se trouvent entre la diaphyse et l'épiphyse. La symphyse pubienne est semi-mobile. Les articulations cartilagineuses n'ont pas de cavité articulaire. Leurs surfaces sont recouvertes de cartilage, et elles sont peu mobiles."
      },
      {
        questionText: "Les articulations synoviales :",
        options: [
          "Sont des diarthroses.",
          "Sont peu mobiles.",
          "Présentent une capsule et des ligaments.",
          "La membrane synoviale tapisse la face externe de la capsule.",
          "Les surfaces articulaires sont recouvertes par un cartilage."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les articulations synoviales sont des diarthroses (mobiles), possèdent une capsule et des ligaments, et leurs surfaces sont recouvertes de cartilage hyalin. La membrane synoviale tapisse la face interne de la capsule."
      },
      {
        questionText: "Les articulations synoviales :",
        options: [
          "La forme géométrique des surfaces articulaires détermine l'amplitude des mouvements.",
          "L'articulation sphéroïde présente 1 seul axe libre.",
          "L'articulation scapulo-humérale est une articulation plane.",
          "L'articulation du coude présente 3 axes de mobilité.",
          "Le poignet est articulation synoviale."
        ],
        correctOptionIndexes: [0, 4],
        explanation: "La forme des surfaces articulaires détermine bien l'amplitude des mouvements, et le poignet est une articulation synoviale. L'articulation sphéroïde a 3 axes, la scapulo-humérale est sphéroïde, et le coude a 1 axe de mobilité."
      },
      {
        questionText: "Les articulations synoviales :\n\nA. Les surfaces d'adaptation sont des fibro-cartilages.\nB. Les surfaces d'adaptation assurent la liaison entre les surfaces articulaires.\nC. Le ménisque est présent à l'extérieur de la capsule articulaire.\nD. Le disque est un anneau fibro-cartilagineux.\nE. L'abduction est un mouvement qui permet de rapprocher le membre vers l'axe du corps.",
        options: [
          "A et B sont correctes",
          "C est correcte",
          "D est correcte",
          "E est correcte",
          "Aucune réponse correcte"
        ],
        correctOptionIndexes: [0],
        explanation: "Les surfaces d'adaptation (comme le ménisque) sont des fibro-cartilages qui assurent la congruence entre les surfaces articulaires. Le ménisque est à l'intérieur de la capsule, et l'abduction éloigne le membre de l'axe du corps."
      },
      {
        questionText: "L'articulation fibreuse se caractérise par :",
        options: [
          "L'absence de mobilité.",
          "Appelée aussi : syndesmose.",
          "L'interzone articulaire est occupée par un tissu adipeux.",
          "La présence d'un cartilage articulaire.",
          "La gomphose c'est une articulation fibreuse qui unit 2 surfaces osseuses unies par un ligament."
        ],
        correctOptionIndexes: [0],
        explanation: "La caractéristique principale des articulations fibreuses est l'absence de mobilité (synarthrose). La syndesmose est un type d'articulation fibreuse, mais ce n'est pas un synonyme pour toutes."
      },
      {
        questionText: "Concernant l'articulation cartilagineuse :",
        options: [
          "Les surfaces osseuses sont recouvertes par un tissu fibreux.",
          "Elles sont unies par des tendons des muscles.",
          "Présence d'une cavité articulaire centrale.",
          "Très mobile.",
          "La Symphyse pubienne est un exemple type."
        ],
        correctOptionIndexes: [4],
        explanation: "La symphyse pubienne est un exemple typique d'articulation cartilagineuse (semi-mobile). Ces articulations sont unies par du cartilage, n'ont pas de cavité articulaire et sont peu mobiles."
      },
      {
        questionText: "A propos de l'articulation synoviale :",
        options: [
          "Appelée aussi : synarthrose.",
          "Très peu mobile.",
          "Les surfaces articulaires sont recouvertes par un cartilage hyalin.",
          "Absence d'une cavité articulaire.",
          "La forme géométrique des surfaces articulaires détermine l'amplitude des mouvements."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Les surfaces des articulations synoviales sont recouvertes de cartilage hyalin, et leur forme géométrique détermine l'amplitude de mouvement. Elles sont appelées diarthroses, sont très mobiles et possèdent une cavité articulaire."
      },
      {
        questionText: "A propos des articulations :",
        options: [
          "Elles réunissent deux ou plusieurs surfaces osseuses.",
          "Il existe 3 types selon le degré de leur mobilité.",
          "Toutes les articulations possèdent une cavité articulaire.",
          "Leur mouvement est assuré par un système ligamentaire.",
          "Le liquide."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les articulations unissent des os et il en existe 3 types classés par mobilité. Seules les articulations synoviales (diarthroses) possèdent une cavité articulaire. Le liquide synovial est également spécifique aux articulations synoviales."
      },
      {
        questionText: "Ces propositions concernent les articulations :",
        options: [
          "Assurent le mouvement du squelette.",
          "Il existe 4 types selon leur degré de mobilité.",
          "Les articulations de l'appareil locomoteur sont toutes mobiles.",
          "Elles réunissent deux ou plusieurs surfaces osseuses.",
          "Le cartilage articulaire est un tissu richement vascularisé."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les articulations assurent le mouvement et réunissent les os. Il existe 3 types d'articulations selon leur mobilité, pas 4. Toutes les articulations de l'appareil locomoteur ne sont pas mobiles (ex: symphyse pubienne), et le cartilage est avasculaire."
      },
      {
        questionText: "Une articulation semi mobile :",
        options: [
          "Est nommée synarthrose.",
          "À un seul axe de mouvement.",
          "C'est une articulation à plusieurs degrés de liberté.",
          "Est nommée amphiarthrose.",
          "L'articulation du poignet est l'exemple type."
        ],
        correctOptionIndexes: [3],
        explanation: "Une articulation semi-mobile est nommée amphiarthrose. Les synarthroses sont immobiles. Le poignet est une articulation très mobile (diarthrose)."
      },
      {
        questionText: "Ces propositions concernent les articulations :",
        options: [
          "Il existe trois types d'articulations.",
          "Tout les types d'articulations ont une membrane synoviale.",
          "La capsule et la synoviale sont propres à l'articulation mobile.",
          "La synoviale tapisse la face périphérique de la capsule.",
          "Le liquide synovial nourrit le cartilage."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Il y a 3 types d'articulations. La capsule et la membrane synoviale sont spécifiques aux articulations mobiles (synoviales). Le liquide synovial nourrit le cartilage. La synoviale tapisse la face interne de la capsule."
      },
      {
        questionText: "L'articulation de type diarthrose est :",
        options: [
          "Présente plusieurs axes de mouvement.",
          "C'est une articulation fixe.",
          "C'est une articulation semi mobile.",
          "Réunit deux ou plusieurs surfaces osseuses.",
          "L'articulation de l'épaule est l'exemple type."
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Une diarthrose (ex: l'épaule) réunit plusieurs os, est très mobile et présente souvent plusieurs axes de mouvement. Elle n'est ni fixe ni semi-mobile."
      },
      {
        questionText: "Une articulation est une union de deux ou plusieurs pièces osseuses, elle peut être :",
        options: [
          "Semi mobile nommée diarthrose.",
          "Immobile nommée synarthrose.",
          "Mobile nommée synarthrose.",
          "Mobile nommée diarthrose.",
          "Immobile nommée amphiarthrose."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Classification correcte : Immobile = Synarthrose. Mobile = Diarthrose. Semi-mobile = Amphiarthrose."
      },
      {
        questionText: "Une articulation de type diarthrose possède les caractéristiques suivantes :",
        options: [
          "C'est une articulation semi-mobile.",
          "Présente une membrane synoviale.",
          "Mobile nommée synarthrose.",
          "Présente une cavité articulaire.",
          "Présente un ménisque interarticulaire."
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Une diarthrose est mobile (pas semi-mobile), et possède une membrane synoviale et une cavité articulaire. Certaines, comme le genou, ont un ménisque."
      },
      {
        questionText: "Les mouvements de flexion et d'extension se font :",
        options: [
          "Dans un plan frontal, autour de l'axe sagittal.",
          "Dans un plan transversal, autour de l'axe longitudinal.",
          "Dans un plan sagittal, autour de l'axe frontal.",
          "Dans un plan frontal, autour de l'axe longitudinal.",
          "Dans un plan sagittal, autour de l'axe transversal."
        ],
        correctOptionIndexes: [4],
        explanation: "Les mouvements de flexion et d'extension se produisent dans le plan sagittal (qui divise le corps en droite et gauche) et tournent autour de l'axe transversal (ou frontal)."
      },
      {
        questionText: "Ces propositions concernent l'articulation scapulo-humérale :",
        options: [
          "C'est une diarthrose de type condylienne.",
          "Réunit le membre thoracique au tronc.",
          "Ses mouvements se font autour de plusieurs axes.",
          "C'est une articulation très mobile et très solide.",
          "Les ligaments gléno-huméraux la protègent en avant."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "L'articulation scapulo-humérale relie le membre thoracique au tronc, a plusieurs axes de mouvement (car elle est sphéroïde, pas condylienne), et est protégée en avant par les ligaments gléno-huméraux. Elle est très mobile mais relativement instable (pas très solide)."
      }
    ]
  },
  {
    title: "Généralité Sur Le Système Musculaire",
    subject: "anatomy-y1",
    questions: [
      {
        questionText: "Le système musculaire : Le muscle est doué des propriétés suivantes\n\n1- De tonus\n2- De contractilité\n3- De rigidité\n4- D'immobilité\n5- D'excitabilité",
        options: [
          "(3.5)",
          "(1.2.5)",
          "(3.4)",
          "(2.3.5)",
          "(1.3.4)"
        ],
        correctOptionIndexes: [1],
        explanation: "Les muscles présentent plusieurs propriétés essentielles pour leur fonctionnement, parmi lesquelles on trouve le tonus (contraction légère et continue), la contractilité (capacité à se contracter), et l'excitabilité (capacité à réagir à une stimulation)."
      },
      {
        questionText: "Le système musculaire,\n\n1- Le muscle digastrique est formé d'un seul ventre\n2- Le muscle cardiaque est un muscle strié\n3- Les muscles lisses sont dits volontaires\n4- Les muscles représentent 20% de la masse corporelle\n5- La fibre musculaire est l'unité fonctionnelle du muscle",
        options: [
          "(1.4.5)",
          "(2.3.5)",
          "(1.2.4)",
          "(3.4)",
          "(2.5)"
        ],
        correctOptionIndexes: [4],
        explanation: "Le muscle cardiaque est un muscle strié (mais involontaire) et la fibre musculaire est bien l'unité fonctionnelle du muscle. Le muscle digastrique a deux ventres, les muscles lisses sont involontaires et les muscles représentent environ 40% de la masse corporelle."
      },
      {
        questionText: "Concernant les articulations\n\n1- Ce sont les composantes les plus solides du squelette\n2- La synfibrose est une articulation mobile\n3- La capsule articulaire est un moyen d'union\n4- Le ménisque adapte les surfaces articulaires.\n5- La membrane synoviale est une membrane nourricière.",
        options: [
          "(1.3.5)",
          "(3.4.5)",
          "(2.3)",
          "(1.5)",
          "(2.3.4)"
        ],
        correctOptionIndexes: [1],
        explanation: "La capsule articulaire est un moyen d'union, le ménisque adapte les surfaces articulaires, et la membrane synoviale est nourricière. Les os sont plus solides que les articulations, et la synfibrose est une articulation immobile."
      },
      {
        questionText: "Concernant le système musculaire.\n\n1- Le tendon est la partie contractile du muscle.\n2- Le tendon est l'unité fonctionnelle du muscle\n3- Une disposition des fibres musculaires convergentes vers le tendon donne un muscle fusiforme.\n4- Un muscle long est mono-articulaire.\n5- La contraction du muscle lisse est involontaire",
        options: [
          "(1.3)",
          "(3.4.5)",
          "(3.5)",
          "(2.3.4)",
          "(3.5)"
        ],
        correctOptionIndexes: [2],
        explanation: "Une disposition des fibres musculaires convergentes vers le tendon crée un muscle fusiforme, et la contraction du muscle lisse est involontaire. La partie contractile du muscle est la fibre musculaire, et un muscle long peut être mono ou pluri-articulaire."
      },
      {
        questionText: "Concernant le muscle strié :",
        options: [
          "Il peut être relié au squelette.",
          "Il peut être relié à la peau.",
          "Il est de contraction volontaire.",
          "Il forme la paroi musculaire des viscères.",
          "Il est de contraction lente."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les muscles striés squelettiques sont reliés au squelette, les muscles peauciers (striés) sont reliés à la peau, et leur contraction est volontaire. La paroi des viscères est formée de muscles lisses et la contraction des muscles striés est rapide."
      },
      {
        questionText: "Concernant les muscles :",
        options: [
          "La texture d'un muscle dépend de la disposition des fibres musculaires par rapport aux tendons.",
          "Dans le muscle fusiforme, les fibres sont parallèles.",
          "Dans le muscle plat, les fibres musculaires sont convergentes vers le tendon.",
          "Une gaine fibreuse enveloppe le tendon.",
          "Une gaine synoviale enveloppe le muscle."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La texture (forme) d'un muscle dépend de la disposition de ses fibres. Une gaine fibreuse protège bien le tendon. Dans un muscle fusiforme, les fibres sont convergentes (non parallèles), et dans un muscle plat, elles sont parallèles. La gaine synoviale enveloppe certains tendons pour réduire la friction, pas le muscle lui-même."
      }
    ]
  },
  {
    title: "Appareil Cardio-Vasculaire",
    subject: "anatomy-y1",
    questions: [
      {
        questionText: "Concernant le cœur, cochez la ou les propositions justes :",
        options: [
          "Ses cavités sont alignées sur un seul axe.",
          "Son apex regarde en bas et en avant.",
          "Il occupe le thorax entre les deux poumons.",
          "Son apex regarde en bas et en dehors.",
          "Il est fonctionnellement divisé en cœur droit et cœur gauche."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Le cœur est situé entre les poumons dans le thorax. Son apex (pointe) est orienté vers le bas, l'avant et la gauche (et non en dehors). Fonctionnellement, il est divisé en un cœur droit et un cœur gauche."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "Se situe en arrière du sternum.",
          "Est divisé en cœur droit et cœur gauche sur le plan fonctionnel.",
          "Son apex regarde en haut.",
          "Occupe le médiastin antérieur."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le cœur est situé en arrière du sternum, dans le médiastin antérieur. Il est fonctionnellement divisé en cœur droit et cœur gauche, et son apex regarde en bas."
      },
      {
        questionText: "Concernant les atriums :",
        options: [
          "L’atrium droit draine tout le sang veineux du corps.",
          "Ils sont séparés par une cloison perméable.",
          "Ils ont une forme cubique.",
          "L’atrium gauche occupe la base du cœur.",
          "Ils communiquent avec les ventricules correspondants par leur paroi antérieure."
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les atriums ont une forme cubique, l'atrium gauche occupe la base du cœur, et ils communiquent avec les ventricules via l'orifice atrio-ventriculaire. L'atrium droit draine le sang veineux systémique (mais pas pulmonaire) et la cloison est imperméable chez l'adulte."
      },
      {
        questionText: "Concernant le système lymphatique :",
        options: [
          "Est constitué de vaisseaux et de ganglions.",
          "Recueille le sang veineux.",
          "Se termine dans le système veineux.",
          "Contient des valvules.",
          "Draine le liquide interstitiel."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Le système lymphatique est constitué de vaisseaux (contenant des valvules) et de ganglions. Il draine le liquide interstitiel (lymphe) et se jette finalement dans le système veineux. Il ne recueille pas le sang veineux."
      },
      {
        questionText: "Concernant la circulation générale :",
        options: [
          "Elle débute au cœur.",
          "Elle emprunte le système cave.",
          "Elle emprunte les artères pulmonaires.",
          "Elle se fait par l’aorte.",
          "Elle se fait uniquement via l’artère pulmonaire."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La circulation générale (systémique) débute au ventricule gauche du cœur, passe par l'aorte pour irriguer le corps, et le sang revient au cœur par le système des veines caves."
      },
      {
        questionText: "Concernant la crosse de l’aorte :",
        options: [
          "Donne naissance au tronc brachiocéphalique.",
          "Donne naissance à l’artère carotide commune gauche.",
          "Donne naissance à l’artère subclavière gauche.",
          "Donne naissance à l’artère pulmonaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La crosse de l'aorte donne naissance, de droite à gauche, au tronc brachiocéphalique, à l'artère carotide commune gauche et à l'artère subclavière gauche."
      },
      {
        questionText: "Concernant le système veineux :",
        options: [
          "Les veines pulmonaires drainent les jambes.",
          "Les veines caves sont situées au niveau de la cage thoracique.",
          "La veine azygos est une collatérale de la veine cave supérieure.",
          "La veine porte draine le sang des membres supérieurs.",
          "Le système porte ramène le sang veineux du tube digestif."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Les veines caves sont dans le thorax. La veine azygos est une collatérale de la veine cave supérieure. Le système porte draine le sang du tube digestif. Les veines pulmonaires drainent les poumons."
      },
      {
        questionText: "Concernant la chaîne lymphatique :",
        options: [
          "Est composée uniquement de ganglions.",
          "Comprend des conduits afférents.",
          "Comprend des ganglions.",
          "Comprend des conduits efférents.",
          "Comprend des troncs collecteurs."
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "La chaîne lymphatique est un réseau complexe qui n'est pas composé uniquement de ganglions, mais aussi de conduits afférents et efférents, et de troncs collecteurs."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "Son apex regarde en haut.",
          "Il est situé dans le médiastin antérieur.",
          "Ses cavités droites et gauches communiquent.",
          "Sa base s’oriente en avant.",
          "Il est formé de seulement deux faces."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cœur est situé dans le médiastin antérieur. Son apex regarde en bas et en avant, ses cavités ne communiquent pas, et sa base s'oriente en arrière."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "Sa base regarde en avant.",
          "Sa face antérieure est pulmonaire.",
          "Sa face inférieure est en rapport avec l’estomac par le diaphragme.",
          "L’atrium gauche reçoit les veines caves supérieure et inférieure.",
          "L’atrium droit reçoit le sinus coronaire."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "La face inférieure du cœur repose sur le diaphragme. L'atrium droit reçoit le sinus coronaire. La base regarde en arrière, et l'atrium droit reçoit les veines caves."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "L’ostium atrioventriculaire gauche est fermé par la valve mitrale.",
          "Le cœur droit expulse le sang dans l’aorte.",
          "Le péricarde est extensible.",
          "Le péricarde fibreux est la partie profonde du péricarde.",
          "Le cœur est irrigué par des artères de type terminal : les coronaires."
        ],
        correctOptionIndexes: [0, 4],
        explanation: "L'ostium atrioventriculaire gauche est bien fermé par la valve mitrale. Le cœur est irrigué par les artères coronaires de type terminal. Le cœur droit expulse le sang dans l'artère pulmonaire et le péricarde est peu extensible."
      },
      {
        questionText: "Le cœur présente les caractéristiques suivantes :",
        options: [
          "Orienté dans le thorax selon un axe oblique de haut en bas et de dehors en dedans.",
          "À la paroi antérieure de l’atrium droit s’ouvre l’orifice atrioventriculaire.",
          "Est un muscle lisse creux doté d’un automatisme.",
          "L’artère coronaire gauche irrigue uniquement le cœur gauche.",
          "Les ventricules droit et gauche sont séparés par une cloison perméable."
        ],
        correctOptionIndexes: [1],
        explanation: "L'orifice atrioventriculaire droit (tricuspide) s'ouvre bien à la paroi antérieure de l’atrium droit. Le cœur est un muscle strié et la cloison interventriculaire est imperméable."
      },
      {
        questionText: "Ces propositions concernent l’artère aortique :",
        options: [
          "Prend origine au niveau du ventricule droit.",
          "Traverse le diaphragme à hauteur de Th12.",
          "Se termine à hauteur de L3.",
          "L’aorte thoracique présente trois segments.",
          "Ses premières collatérales sont les artères coronaires."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "L'aorte traverse le diaphragme au niveau de Th12 et ses premières collatérales sont les artères coronaires. Elle prend origine au niveau du ventricule gauche."
      },
      {
        questionText: "Ces propositions concernent les artères :",
        options: [
          "Sont des vaisseaux extensibles.",
          "L’artère aortique se charge de la circulation systémique (circulation générale).",
          "L’artère pulmonaire sort du ventricule gauche.",
          "Elles sont chargées de véhiculer le sang oxygéné.",
          "Elles véhiculent le liquide interstitiel."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'aorte gère la circulation systémique et les artères (sauf la pulmonaire) transportent le sang oxygéné. L'artère pulmonaire sort du ventricule droit."
      },
      {
        questionText: "À propos du cœur :",
        options: [
          "Est situé au-dessous du diaphragme.",
          "Est divisé en cœur droit et cœur gauche sur le plan fonctionnel.",
          "Les cavités droites communiquent avec les cavités gauches.",
          "Il occupe le médiastin antérieur du thorax.",
          "Il a la forme d’une pyramide à 2 faces et 2 bords."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le cœur est fonctionnellement divisé en deux (droit et gauche) et occupe le médiastin antérieur. Il est situé au-dessus du diaphragme."
      },
      {
        questionText: "Les artères se caractérisent par :",
        options: [
          "Véhiculent le sang oxygéné du cœur aux tissus.",
          "Sont des vaisseaux inextensibles.",
          "L’artère aortique est le principal conduit du sang.",
          "Elles se disposent en plan superficiel et profond.",
          "Pour chaque artère existe deux veines satellites."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les artères (sauf la pulmonaire) véhiculent le sang oxygéné du cœur aux tissus, et l'aorte est le conduit principal de la circulation systémique."
      },
      {
        questionText: "Ces propositions concernent le système veineux :",
        options: [
          "Le drainage veineux est assuré essentiellement par deux principaux vaisseaux appelés veines caves.",
          "Véhicule le liquide interstitiel.",
          "La veine porte est exemple type.",
          "Tout le sang veineux aboutira à l’atrium gauche.",
          "Toutes les veines sont munies de valvules."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le drainage veineux systémique est assuré par les veines caves. La veine porte est un exemple de système veineux particulier. Le sang veineux aboutit à l'atrium droit."
      },
      {
        questionText: "À propos du cœur :",
        options: [
          "C’est un muscle lisse et creux.",
          "Divisé en cœur droit et cœur gauche sur le plan fonctionnel.",
          "Les cavités droites communiquent avec les cavités gauches.",
          "Il occupe le médiastin postérieur du thorax.",
          "Sa paroi est faite de 3 couches dont le myocarde est la couche moyenne."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Le cœur est un muscle strié, divisé fonctionnellement en cœur droit et gauche. Sa paroi a 3 couches, dont le myocarde au milieu. Il occupe le médiastin antérieur."
      },
      {
        questionText: "Ces propositions concernent le système veineux :",
        options: [
          "Le drainage veineux est assuré par deux principaux vaisseaux appelés veines caves.",
          "Les veines véhiculent le sang des tissus vers le cœur.",
          "Pour chaque artère existe deux veines satellites.",
          "Tout le sang veineux aboutira à l’atrium gauche.",
          "Toutes les veines sont munies de valvules."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le drainage veineux est bien assuré par les veines caves, et les veines ramènent le sang des tissus vers le cœur (atrium droit)."
      },
      {
        questionText: "Ces propositions concernent les atriums :",
        options: [
          "L’atrium droit draine tout le sang veineux du corps.",
          "Ils sont séparés par une cloison perméable.",
          "Ils ont une forme cubique.",
          "L’atrium gauche occupe la base du cœur.",
          "Ils communiquent avec les ventricules correspondants par leur paroi antérieure."
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les atriums ont une forme cubique, l'atrium gauche est à la base du cœur, et ils communiquent avec les ventricules. La cloison est imperméable chez l'adulte."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "C’est un muscle lisse creux.",
          "Il est divisé en cœur droit et cœur gauche sur le plan fonctionnel.",
          "Ses cavités communiquent.",
          "Il occupe le médiastin antérieur.",
          "A la forme d’une pyramide à deux faces et deux bords."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le cœur est un muscle strié, divisé fonctionnellement en droit et gauche, et il occupe le médiastin antérieur. Ses cavités ne communiquent pas."
      },
      {
        questionText: "Concernant le système lymphatique :",
        options: [
          "Il est constitué de vaisseaux et de ganglions.",
          "Constitue un système anastomotique entre artères et veines.",
          "La lymphe se déverse dans le système veineux.",
          "Son rôle est exclusivement la défense.",
          "Il draine le liquide interstitiel."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Le système lymphatique est fait de vaisseaux et ganglions, draine le liquide interstitiel, et se jette dans le système veineux. Il a aussi un rôle dans le transport des lipides."
      },
      {
        questionText: "Concernant l’oreillette droite :",
        options: [
          "À sa paroi inférieure s’ouvre l’orifice de la veine cave inférieure.",
          "À sa paroi latérale se situe le vestige du trou de Botal.",
          "Elle a une forme cubique.",
          "Elle possède une paroi médiale (septum inter‑atrial).",
          "Elle communique avec le ventricule droit par sa paroi antérieure."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "L'oreillette droite a une forme cubique, reçoit la VCI à sa paroi inférieure, a un septum médial (contenant le vestige du trou de Botal), et communique avec le ventricule droit."
      },
      {
        questionText: "Concernant les ventricules du cœur :",
        options: [
          "La paroi du ventricule gauche est moins épaisse que celle du ventricule droit.",
          "Ils communiquent au niveau de leur base avec les atriums.",
          "Ils sont séparés par un septum de 10 mm d’épaisseur.",
          "L’ostium atrio‑ventriculaire droit est pourvu de la valve mitrale.",
          "Les piliers et cordages appartiennent exclusivement au ventricule gauche."
        ],
        correctOptionIndexes: [1],
        explanation: "Les ventricules communiquent bien avec les atriums à leur base. La paroi du ventricule gauche est plus épaisse, et l'ostium droit a la valve tricuspide."
      },
      {
        questionText: "L’axe du cœur :",
        options: [
          "Est vertical de haut en bas.",
          "Est oblique de haut en bas et de droite à gauche.",
          "Est oblique de bas en haut et de droite à gauche.",
          "Dirigé de bas en haut et de dedans en dehors."
        ],
        correctOptionIndexes: [1],
        explanation: "L'axe du cœur est orienté obliquement de haut en bas, de droite à gauche et d'arrière en avant."
      },
      {
        questionText: "Ces propositions concernent les artères :",
        options: [
          "Elles sont des vaisseaux extensibles.",
          "L’aorte est le conduit principal du sang.",
          "L’artère pulmonaire sort du ventricule gauche.",
          "Les artères coronaires sont les premières collatérales de l’aorte.",
          "Elles véhiculent le liquide interstitiel."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'aorte est le conduit principal du sang systémique, et les artères coronaires sont ses premières collatérales. L'artère pulmonaire sort du ventricule droit."
      },
      {
        questionText: "Concernant le cœur :",
        options: [
          "Est situé dans le médiastin antérieur.",
          "Son péricarde est extensible.",
          "Le myocarde constitue la couche moyenne de sa paroi.",
          "Les cavités droites et gauches communiquent entre elles.",
          "Le cœur se contracte spontanément (automatisme propre)."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Le cœur est dans le médiastin antérieur, le myocarde est sa couche moyenne, et il a un automatisme propre. Son péricarde est peu extensible et ses cavités ne communiquent pas."
      },
      {
        questionText: "Ces propositions concernent les veines :",
        options: [
          "Le sang veineux s’oxygène dans les capillaires.",
          "Elles ramènent le sang des tissus vers le cœur.",
          "Elles possèdent une paroi plus épaisse que celle des artères.",
          "Les veines perforantes relient le réseau superficiel au réseau profond.",
          "Elles jouent un rôle de réservoir."
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Les veines ramènent le sang vers le cœur, les perforantes relient les réseaux superficiel et profond, et elles agissent comme un réservoir sanguin. Leur paroi est plus fine que celle des artères."
      },
      {
        questionText: "Branches collatérales de l’aorte abdominale :",
        options: [
          "Les artères phréniques supérieures.",
          "Les artères rénales.",
          "L’artère mésentérique inférieure.",
          "Les artères lombaires.",
          "Les artères gonadiques (testiculaires/ovariques)."
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Les artères rénales, mésentérique inférieure, lombaires et gonadiques sont toutes des branches de l'aorte abdominale."
      },
      {
        questionText: "Concernant le système lymphatique :",
        options: [
          "Est formé par le conduit thoracique et la grande veine lymphatique.",
          "La citerne de Pecquet (citerne du chyle) se situe à la jonction jugulo‑subclavière.",
          "Le conduit thoracique se jette dans l’oreillette droite.",
          "Le canal lymphatique droit draine toute la moitié gauche du corps.",
          "La citerne de Pecquet est l’origine du conduit thoracique."
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Les troncs collecteurs principaux sont le conduit thoracique et la grande veine lymphatique. La citerne de Pecquet est bien l'origine du conduit thoracique, située dans l'abdomen."
      },
      {
        questionText: "Concernant l’aorte :",
        options: [
          "Prend naissance au ventricule droit.",
          "Traverse le diaphragme au niveau de Th12.",
          "Donne en premier les artères sous‑clavières.",
          "L’aorte thoracique comporte deux segments seulement.",
          "Ses premières collatérales sont les artères coronaires."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "L'aorte traverse le diaphragme en Th12, et ses premières collatérales sont les artères coronaires. Elle naît du ventricule gauche."
      },
      {
        questionText: "Ces propositions concernent les artères :",
        options: [
          "Elles sont inextensibles.",
          "L’aorte se charge de la circulation systémique (générale).",
          "L’artère pulmonaire naît du ventricule gauche.",
          "Elles transportent le sang oxygéné (sauf l’artère pulmonaire).",
          "Elles véhiculent le liquide interstitiel."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'aorte est le pilier de la circulation systémique. Les artères transportent le sang oxygéné, à l'exception de l'artère pulmonaire qui naît du ventricule droit."
      },
      {
        questionText: "Orientation du cœur :",
        options: [
          "En haut et à droite.",
          "En haut et à gauche.",
          "En avant et à droite.",
          "En avant, en bas et à gauche.",
          "Verticale."
        ],
        correctOptionIndexes: [3],
        explanation: "L'orientation générale de l'apex du cœur est en avant, en bas et à gauche."
      },
      {
        questionText: "L’ostium atrio‑ventriculaire droit (orifice tricuspide) :",
        options: [
          "Sépare l’atrium gauche du ventricule gauche.",
          "Sépare l’atrium droit du ventricule droit.",
          "Sépare l’atrium droit de l’atrium gauche.",
          "Sépare le ventricule droit du ventricule gauche.",
          "Sépare l’atrium gauche du ventricule droit."
        ],
        correctOptionIndexes: [1],
        explanation: "L'ostium atrio-ventriculaire droit, muni de la valve tricuspide, permet la communication entre l'atrium droit et le ventricule droit."
      },
      {
        questionText: "Le pédicule pulmonaire :",
        options: [
          "Comprend seulement la bronche souche.",
          "Comprend la bronche souche, l’artère et les artères bronchiques.",
          "Comprend la bronche souche et la veine pulmonaire uniquement.",
          "Comprend la bronche souche, l’artère pulmonaire et la veine pulmonaire.",
          "Comprend la bronche souche et deux artères pulmonaires."
        ],
        correctOptionIndexes: [3],
        explanation: "Le pédicule pulmonaire (ou hile pulmonaire) est l'ensemble des structures qui entrent et sortent du poumon : la bronche souche, l'artère pulmonaire, et les veines pulmonaires."
      },
      {
        questionText: "La fosse ovale (fosse du septum inter‑atrial) :",
        options: [
          "Se situe sur la paroi latérale de l’atrium gauche.",
          "Se situe sur la paroi médiale de l’atrium droit.",
          "Se situe sur la paroi postérieure de l’atrium droit.",
          "Se situe sur la paroi antérieure du ventricule gauche.",
          "Se situe sur la paroi inférieure du ventricule droit."
        ],
        correctOptionIndexes: [1],
        explanation: "La fosse ovale est le vestige du foramen ovale fœtal et se trouve sur la paroi médiale (septum inter-atrial) de l'atrium droit."
      },
      {
        questionText: "Concernant les collatérales de l’aorte abdominale :",
        options: [
          "L’artère phrénique inférieure.",
          "Les artères lombaires.",
          "Les artères gonadiques.",
          "L’artère hépatique.",
          "L’artère mésentérique inférieure."
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les artères phrénique inférieure, lombaires, gonadiques, et mésentérique inférieure sont des collatérales de l'aorte abdominale. L'artère hépatique est une branche du tronc cœliaque."
      },
      {
        questionText: "Concernant l’aorte abdominale :",
        options: [
          "Elle fait suite à l’aorte thoracique au niveau de la 10e vertèbre thoracique.",
          "Le tronc cœliaque est sa première collatérale viscérale.",
          "Elle se termine en trois branches.",
          "Elle donne les artères gonadiques.",
          "Elle chemine à droite de la veine cave inférieure."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le tronc cœliaque est sa première collatérale viscérale. Elle se termine en 3 branches (2 iliaques communes, 1 sacrale médiane) et donne les artères gonadiques. Elle débute en Th12 et chemine à gauche de la VCI."
      },
      {
        questionText: "Ces propositions concernent l’aorte thoracique :",
        options: [
          "Elle s’étend du cœur au diaphragme.",
          "De son segment horizontal naissent les artères brachio‑céphaliques.",
          "Elle se continue par l’aorte abdominale au niveau de Th12.",
          "Son segment descendant chemine dans le médiastin postérieur.",
          "Son segment ascendant se porte en haut et à droite jusqu’au troisième cartilage costal."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Elle s'étend du cœur au diaphragme (Th12), son segment horizontal (arc) donne les troncs brachio-céphaliques, et son segment descendant est dans le médiastin postérieur."
      }
    ]
  },
  {
    title: "Les Organes des Sens",
    subject: "anatomy-y1",
    questions: [
        {
            questionText: "À propos de l’oreille",
            options: [
                "L’oreille externe comprend le pavillon, le conduit auditif et la trompe d’Eustache.",
                "L’oreille moyenne est appelée vestibule.",
                "La trompe d’Eustache fait communiquer l’oreille moyenne et le pharynx.",
                "Le nerf cochléaire est le nerf de l’audition.",
                "Le nerf vestibulaire est le nerf de l’audition."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "La trompe d’Eustache relie la caisse du tympan au pharynx et assure l’aération de l’oreille moyenne. Le nerf cochléaire (faisant partie du nerf vestibulo-cochléaire ou VIII) est le nerf de l’ouïe. Le nerf vestibulaire est impliqué dans l'équilibre, pas l'audition. L'oreille externe comprend le pavillon et le conduit auditif, mais pas la trompe d'Eustache. L'oreille moyenne contient la caisse du tympan et les osselets, le vestibule fait partie de l'oreille interne."
        },
        {
            questionText: "Les milieux transparents de l’œil",
            options: [
                "Le cristallin.",
                "La sclère.",
                "L’humeur vitrée.",
                "La cornée.",
                "L’humeur aqueuse."
            ],
            correctOptionIndexes: [0, 2, 4], // Note: Option D (La cornée) is also transparent, but the explanation clarifies the context. I've followed your original checkmarks.
            explanation: "Seuls le cristallin, l’humeur aqueuse et l’humeur vitrée sont des milieux transparents internes de l'œil, permettant le passage de la lumière vers la rétine. La cornée est la partie antérieure transparente de la sclère mais est souvent considérée comme une enveloppe. La sclère n'est pas transparente."
        },
        {
            questionText: "À propos du globe oculaire",
            options: [
                "Il est contenu dans la cavité orbitaire.",
                "Il est formé par 4 tuniques.",
                "Il est formé d’une coque membraneuse contenant trois tuniques (sclérotique, choroïde, rétine).",
                "Il est constitué de trois tuniques.",
                "Il comporte un seul axe visuel."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "L’œil comporte trois tuniques (fibro-séreuse avec la sclère et la cornée, vasculaire avec la choroïde, le corps ciliaire et l'iris, et sensorielle avec la rétine) et est logé dans l’orbite."
        },
        {
            questionText: "À propos des enveloppes de l’œil",
            options: [
                "La choroïde est la membrane nutritive.",
                "La cornée est la partie postérieure de la sclère.",
                "L’iris est la membrane sensorielle.",
                "L’iris régule la quantité de lumière qui pénètre dans l’œil.",
                "La papille optique est une zone dépourvue de photorécepteurs (tâche aveugle)."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "La choroïde, richement vascularisée, nourrit la rétine ; l’iris contrôle la quantité de lumière qui pénètre dans l'œil en modifiant le diamètre de la pupille ; la papille optique est une zone aveugle car elle ne contient pas de photorécepteurs. La cornée est la partie antérieure et transparente de la sclère, pas postérieure. L'iris est une membrane pigmentée, pas sensorielle (la rétine est sensorielle)."
        },
        {
            questionText: "Concernant l’oreille et l’audition",
            options: [
                "L’oreille externe capte le son.",
                "L’oreille moyenne transforme les ondes sonores en influx nerveux.",
                "L’oreille interne est logée dans la cavité nasale.",
                "La chaîne ossiculaire se compose de la trompe et du conduit auditif.",
                "L’oreille interne est responsable de l’audition et de l’équilibre."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "Le pavillon et le conduit auditif externe (oreille externe) collectent le son ; la chaîne ossiculaire transmet les vibrations à l'oreille interne. L'oreille interne, avec la cochlée et le vestibule, gère l’audition et l’équilibre, et transforme les vibrations en influx nerveux. L'oreille interne est logée dans l'os temporal."
        },
        {
            questionText: "À propos de l’oreille",
            options: [
                "L’oreille moyenne est aussi appelée caisse du tympan.",
                "La trompe d’Eustache fait communiquer la caisse du tympan avec le pharynx.",
                "Le conduit auditif externe est entièrement cartilagineux.",
                "L’antre mastoïdien est une cavité contenant des cellules mastoïdes.",
                "Le labyrinthe est l’organe de l’audition."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La caisse du tympan correspond à l’oreille moyenne ; la trompe d’Eustache l’ouvre sur le pharynx ; l’antre mastoïdien communique avec les cellules mastoïdiennes. Le conduit auditif externe est osseux et cartilagineux. Le labyrinthe osseux contient le labyrinthe membraneux, dont la cochlée est l'organe de l'audition, mais le labyrinthe dans son ensemble inclut aussi les structures de l'équilibre."
        },
        {
            questionText: "Concernant l’oreille",
            options: [
                "La trompe d’Eustache sépare l’oreille externe de l’oreille moyenne.",
                "Le tympan sépare l’oreille externe de l’oreille moyenne.",
                "Les canaux semi-circulaires interviennent dans l’équilibre.",
                "Les osselets de l’oreille sont l’enclume, le marteau et le maxillaire.",
                "La chaîne ossiculaire est constituée du marteau, de l’enclume et de l’étrier."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "Le tympan limite l’oreille externe de l'oreille moyenne ; les canaux semi-circulaires participent à l’équilibre ; la chaîne des osselets inclut le marteau, l'enclume et l'étrier."
        },
        {
            questionText: "À propos du globe oculaire",
            options: [
                "L’uvée est la tunique moyenne (choroïde, corps ciliaire et iris).",
                "La sclère est vascularisée.",
                "La rétine est externe et nourricière.",
                "L’iris représente la partie colorée de l’œil.",
                "Le cristallin est un milieu transparent biconvexe."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "L’uvée correspond à la tunique vasculaire et moyenne de l'œil (choroïde, corps ciliaire et iris) ; l’iris est la partie colorée de l'œil ; le cristallin est le milieu transparent biconvexe. La sclère est peu vascularisée. La rétine est interne et sensorielle."
        },
        {
            questionText: "Concernant le globe oculaire",
            options: [
                "Il est une sphère dans une cavité membraneuse.",
                "Il communique par un canal avec la boîte crânienne.",
                "L’humeur aqueuse est secrétée par les cellules de la cornée.",
                "Il est mobilisé grâce à six muscles extrinsèques.",
                "Son nerf sensitif est le nerf optique (II)."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le globe est une sphère logée dans l’orbite et mobilisée par six muscles extrinsèques. L’humeur aqueuse est produite par les procès ciliaires. Le nerf sensitif de la vision est bien le nerf optique (II)."
        },
        {
            questionText: "Au sujet de la rétine",
            options: [
                "La rétine est la membrane neurosensorielle.",
                "Les bâtonnets assurent la vision diurne.",
                "La papille est le point aveugle (absence de cellules visuelles).",
                "La macula (tache jaune) se trouve sur l’axe visuel.",
                "Les cônes assurent la vision nocturne."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "La rétine est la tunique sensorielle ; la papille est la zone aveugle (pas de photorécepteurs) ; la macula est sur l’axe visuel et est la zone de la vision la plus nette. Les bâtonnets sont responsables de la vision nocturne et les cônes de la vision diurne et des couleurs."
        },
        {
            questionText: "Les enveloppes de l’œil",
            options: [
                "La sclère est la membrane externe fibreuse.",
                "La choroïde est la membrane interne sensorielle.",
                "L’iris est la tunique externe.",
                "Le cristallin fait partie de la tunique externe.",
                "Les bâtonnets permettent la vision nocturne."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "La sclère est la membrane externe et fibreuse ; la choroïde est la tunique moyenne et vasculaire ; l’iris appartient à l’uvée (tunique moyenne) et les bâtonnets assurent la vision nocturne."
        },
        {
            questionText: "À propos de l’oreille",
            options: [
                "Elle est divisée en deux parties.",
                "L’oreille moyenne transmet les vibrations sonores à l’oreille interne.",
                "L’oreille moyenne est appelée oreille interne.",
                "L’oreille interne est une cavité aérienne.",
                "Le nerf auditif est issu de l’oreille interne."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "L’oreille se compose de trois parties (externe, moyenne, interne) ; la caisse du tympan (oreille moyenne) transmet les vibrations de l'oreille externe à l'oreille interne et l’oreille interne renferme le nerf cochléaire (faisant partie du nerf auditif ou vestibulo-cochléaire). L'oreille interne est remplie de liquide."
        },
        {
            questionText: "Concernant l’oreille",
            options: [
                "L’oreille externe est composée du pavillon et du conduit auditif.",
                "Le tympan est membraneux et sépare l’oreille moyenne de l’oreille interne.",
                "Le labyrinthe osseux est creusé dans l’os temporal.",
                "Le labyrinthe membraneux contient l’endolymphe.",
                "Le nerf acoustique naît de l’oreille externe."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "L’oreille externe comprend le pavillon et le conduit auditif externe ; le tympan sépare l'oreille externe de l'oreille moyenne. Le labyrinthe osseux est creusé dans l’os temporal ; l’endolymphe est contenue dans le labyrinthe membraneux. Le nerf acoustique (vestibulo-cochléaire) naît de l'oreille interne."
        },
        {
            questionText: "À propos de l’œil",
            options: [
                "L’humeur vitrée est un liquide acqueux.",
                "La pupille est un orifice variable qui régule l’entrée de lumière.",
                "La macula est la zone de vision la plus précise.",
                "Le cristallin est une lentille simple et biconcave.",
                "La cornée est un tissu muqueux."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La pupille s’ouvre et se ferme selon la lumière pour en réguler l'entrée ; la macula (ou fovéa) est la zone centrale de vision précise. Le cristallin est biconvexe et la cornée est un tissu transparent fibreux, pas muqueux. L'humeur vitrée est gélatineuse."
        },
        {
            questionText: "À propos des organes sensoriels",
            options: [
                "L’organe olfactif se trouve dans le toit des cavités nasales.",
                "L’organe de l’audition est situé dans l’oreille externe.",
                "L’organe du goût est constitué de bourgeons gustatifs répartis sur la langue et les muqueuses buccales.",
                "La membrane tympanique ne vibre pas.",
                "Les voies gustatives passent notamment par les nerfs trijumeau, facial et glossopharyngien."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "L’olfaction se trouve dans la partie supérieure des fosses nasales ; la gustation se fait via les bourgeons gustatifs reliés aux nerfs glossopharyngien (IX), facial (VII) et vague (X), le trijumeau (V) est pour la sensibilité générale. L'organe de l'audition est dans l'oreille interne. La membrane tympanique vibre sous l'effet des ondes sonores."
        },
        {
            questionText: "Les annexes de l’œil",
            options: [
                "La glande lacrymale est un organe annexe.",
                "Les muscles moteurs extrinsèques.",
                "Le corps ciliaire.",
                "La conjonctive.",
                "L’iris."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Les annexes comprennent les muscles extrinsèques, la glande lacrymale et la conjonctive ; le corps ciliaire et l’iris appartiennent à l’uvée (tunique moyenne du globe oculaire)."
        },
        {
            questionText: "Les fosses nasales",
            options: [
                "Se situent au-dessus des orbites.",
                "Ne communiquent jamais avec l’oropharynx.",
                "Au nombre de deux (droite et gauche).",
                "Sont séparées par un septum entièrement cartilagineux.",
                "Sont des organes sensoriels (olfaction)."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "Les fosses nasales sont deux cavités séparées par une cloison osseuse et cartilagineuse, siège de l’organe olfactif. Elles communiquent avec l'oropharynx via le nasopharynx. Elles sont situées sous la base du crâne, et non au-dessus des orbites."
        },
        {
            questionText: "L’appareil visuel",
            options: [
                "Le corps vitré transmet les ondes lumineuses.",
                "L’humeur aqueuse occupe le segment postérieur.",
                "La mobilité de l’œil est assurée par quatre muscles droits et deux obliques.",
                "La conjonctive recouvre la cornée.",
                "L’appareil lacrymal comprend la glande lacrymale et les voies lacrymales (canal, sac et conduit)."
            ],
            correctOptionIndexes: [0, 4], // Option C is also correct. I followed your checkmarks.
            explanation: "L’humeur aqueuse remplit le segment antérieur ; le corps vitré est dans le segment postérieur et transmet la lumière. L’œil est mobilisé par six muscles (quatre droits et deux obliques) ; la conjonctive ne couvre pas la cornée (elle couvre la sclère visible et la face interne des paupières)."
        },
        {
            questionText: "À propos de la vision",
            options: [
                "La rétine se situe en avant de l’œil.",
                "La pupille se dilate (myosis) lorsque la lumière est faible.",
                "La macula est responsable de la vision nocturne.",
                "Le cristallin se bombe lors de l’accommodation (vision de près).",
                "La papille optique est une zone aveugle (pas de photorécepteurs)."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "La rétine tapisse la face interne postérieure de l'œil. La pupille se dilate (mydriase) lorsque la lumière est faible, et se contracte (myosis) lorsque la lumière est intense. La vision nocturne est assurée par les bâtonnets, non la macula. La papille est la tâche aveugle."
        },
        {
            questionText: "Le V lingual",
            options: [
                "Il correspond à l’os hyoïde.",
                "Il est formé par les papilles circumvallées.",
                "Il accueille le conduit de Sténون (glande parotide).",
                "Il est constitué de papilles fongiformes.",
                "Il est constitué de papilles filiformes."
            ],
            correctOptionIndexes: [1],
            explanation: "Le V lingual délimite la racine de la langue et est constitué de papilles circumvallées."
        },
        {
            questionText: "Les annexes de l’œil",
            options: [
                "La sclère.",
                "Le corps ciliaire.",
                "L’appareil lacrymal.",
                "L’humeur vitrée.",
                "Les paupières."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "Les annexes comprennent l’appareil lacrymal et les paupières ; la sclère, le corps ciliaire et l’humeur vitrée font partie du globe oculaire lui-même."
        },
        {
            questionText: "Les fosses nasales",
            options: [
                "Possèdent un rôle respiratoire et olfactif.",
                "Sont des cavités osseuses.",
                "Sont séparées par une cloison médiane osseuse et cartilagineuse.",
                "S’ouvrent en avant par les choanes.",
                "Sont situées en dessous des orbites."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Les fosses nasales ont un rôle olfactif et respiratoire ; elles sont divisées par une cloison osseo-cartilagineuse. Elles sont des cavités, mais pas uniquement osseuses. Elles s'ouvrent en arrière par les choanes. Elles sont situées au-dessus de la cavité buccale et en dessous des orbites est faux, elles sont médiales aux orbites."
        },
        {
            questionText: "Concernant l’appareil visuel",
            options: [
                "Il est formé de quatre tuniques.",
                "La cornée est le prolongement antérieur de la choroïde.",
                "La sclérotique est vascularisée.",
                "Le cristallin est une lentille biconvexe qui assure l’accommodation.",
                "L’iris et le corps ciliaire appartiennent au segment antérieur de l’uvée."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "La cornée est la partie antérieure transparente de la sclère ; la sclère est fibreuse et avasculaire. L’iris et le corps ciliaire constituent l'uvée antérieure (partie de la tunique moyenne). Le cristallin est une lentille biconvexe qui assure l'accommodation. L'œil a trois tuniques."
        },
        {
            questionText: "Au sujet du tact et de la peau",
            options: [
                "La peau est un organe de protection du corps.",
                "Les fibres de collagène sont situées dans l’épiderme.",
                "Les ongles croissent d’environ 2 mm par jour.",
                "À chaque follicule pileux est annexée une glande sébacée.",
                "La peau est richement vascularisée mais dépourvue d’innervation."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "La peau protège le corps ; les glandes sébacées sont annexées aux follicules pileux ; les fibres de collagène se trouvent dans le derme et les ongles croissent d’environ 0,1 mm par jour. La peau est richement vascularisée et innervée."
        },
        {
            questionText: "Concernant l’appareil visuel",
            options: [
                "Le contenu du globe oculaire comprend l’humeur aqueuse, l’humeur vitrée et le cristallin.",
                "Les muscles droits et obliques sont au nombre de cinq.",
                "Le cristallin divise l’humeur aqueuse en deux compartiments.",
                "Le nerf optique est le premier nerf crânien.",
                "La chambre antérieure est située entre la cornée et l’iris."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "Le globe oculaire contient trois milieux transparents (humeur aqueuse, humeur vitrée, cristallin) ; il y a six muscles oculomoteurs (quatre droits et deux obliques). La chambre antérieure est située entre la cornée et l’iris. Le cristallin divise l'œil en segment antérieur (humeur aqueuse) et segment postérieur (humeur vitrée). Le nerf optique est le deuxième nerf crânien."
        },
        {
            questionText: "Concernant l’oreille interne",
            options: [
                "Elle communique avec l’oreille moyenne par l’antre mastoïdien.",
                "Elle transmet directement les vibrations au cerveau.",
                "La cochlée est l’organe de l’équilibre.",
                "Le nerf vestibulo‑cochléaire traverse le conduit auditif interne.",
                "Elle communique avec la caisse du tympan par la fenêtre ronde."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "Le nerf vestibulo‑cochléaire (VIII) passe dans le conduit auditif interne. L'oreille interne communique avec l'oreille moyenne par la fenêtre ovale et la fenêtre ronde. La cochlée est l’organe de l’audition et le vestibule celui de l’équilibre."
        },
        {
            questionText: "À propos de la langue",
            options: [
                "La langue est constituée d’un squelette ostéo‑fibreux, de muscles et d’une muqueuse.",
                "Elle comporte une racine mobile et un corps fixe.",
                "Elle transmet les sensations gustatives au cortex par des fibres nerveuses.",
                "Les papilles circumvallées se trouvent au sommet de la langue.",
                "Sa face inférieure présente le frein de la langue."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "La langue est un organe musculaire fixé à l’os hyoïde (squelette ostéo-fibreux) ; la racine est fixe et le corps est mobile (l'inverse est dit dans l'option B). Les papilles circumvallées forment le V lingual sur la face dorsale postérieure de la langue. La transmission des sensations gustatives se fait bien par des fibres nerveuses vers le cortex."
        },
        {
            questionText: "L’oreille moyenne",
            options: [
                "Contient la cochlée, le vestibule et les canaux semi-circulaires.",
                "Contient le marteau, l’enclume et le marteau.",
                "Communique avec le nasopharynx par la trompe auditive.",
                "Transmet les vibrations sonores.",
                "Contient la chaîne des osselets."
            ],
            correctOptionIndexes: [2, 3, 4],
            explanation: "La caisse du tympan (oreille moyenne) communique avec le pharynx par la trompe d’Eustache (trompe auditive) ; elle abrite les trois osselets (marteau, enclume, étrier) et transmet les vibrations sonores de la membrane tympanique à l'oreille interne. La cochlée, le vestibule et les canaux semi-circulaires font partie de l'oreille interne."
        },
        {
            questionText: "À propos des fosses nasales",
            options: [
                "On y trouve deux cornets (supérieur et moyen).",
                "Les sinus para-nasaux sont des cavités pneumatiques annexées aux fosses nasales.",
                "Le plancher est représenté par la voûte palatine (os palatin).",
                "L’os lacrymal forme en partie la paroi médiale.",
                "Le sinus maxillaire communique avec les fosses nasales par un orifice."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "Il existe trois cornets (supérieur, moyen, inférieur) ; les sinus (maxillaire, frontal, ethmoïdal, sphénoïdal) s’ouvrent dans les fosses nasales et sont des cavités pneumatiques. Le plancher est constitué des os palatin et maxillaire. L'os lacrymal forme une partie de la paroi latérale des fosses nasales, pas médiale."
        },
        {
            questionText: "Les fosses nasales",
            options: [
                "Se trouvent dans l’extrémité céphalique (tête).",
                "Leur plancher est appelé lame criblée.",
                "Présentent des parois latérales complexes avec des cornets.",
                "Communiquent avec le pharynx par l’avant.",
                "Ont uniquement un rôle respiratoire."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Les fosses nasales sont situées dans la tête ; leurs parois latérales comportent des cornets. La lame criblée est la partie supérieure de l’ethmoïde et ne constitue pas le plancher. Elles communiquent avec le pharynx par l'arrière (choanes). Elles ont un rôle respiratoire et olfactif."
        }
    ]
  },
  {
    title: "Le Système Endocrinien",
    subject: "anatomy-y1",
    questions: [
        {
            questionText: "Concernant Le système endocrinien :",
            options: [
                "Il est formé par des glandes dites exocrines.",
                "Ce système agit par le biais de messagers chimiques.",
                "Les hormones sont libérées dans le milieu intra‑cellulaire.",
                "Ce système agit sur le développement et le fonctionnement des organes.",
                "Les hormones agissent sur des récepteurs cellulaires spécifiques."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Le système endocrinien est constitué de glandes endocrines, qui se distinguent des glandes exocrines. Il fonctionne par la libération d'hormones, qui sont des messagers chimiques. Ces hormones sont libérées dans la circulation sanguine (milieu extracellulaire) et agissent sur des cellules cibles possédant des récepteurs spécifiques. Il joue un rôle fondamental dans la régulation de nombreuses fonctions corporelles, incluant le développement et le fonctionnement des organes."
        },
        {
            questionText: "Concernant le système endocrinien :",
            options: [
                "Une glande est dite endocrine lorsqu’elle sécrète des hormones à l’intérieur de la cellule.",
                "Une glande est dite exocrine lorsqu’elle sécrète des hormones à l’extérieur de la cellule.",
                "Une glande est dite amphicrine hétérotype lorsque les fonctions endocrine et exocrine sont assurées par des cellules différentes.",
                "Le pancréas est considéré comme une glande amphicrine homotype.",
                "Les glandes exocrines déversent leurs sécrétions par l’intermédiaire d’un canal excréteur."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "Une glande endocrine sécrète ses hormones directement dans la circulation sanguine. Une glande exocrine déverse ses sécrétions (non hormonales) à l'extérieur de l'organisme ou dans une cavité reliée à l'extérieur, généralement via un canal excréteur. Une glande amphicrine hétérotypique (comme le pancréas) possède des fonctions endocrines et exocrines assurées par des cellules différentes. Le pancréas est une glande amphicrine hétérotypique, pas homotypique."
        },
        {
            questionText: "Concernant la glande thyroïde :",
            options: [
                "Elle est formée de deux lobes reliés par un isthme.",
                "De forme concave en arrière enserrant le larynx et la trachée.",
                "Elle joue un rôle dans la régulation de la fréquence cardiaque.",
                "Fabrique des hormones thyroïdiennes (T3, T4) à partir de l’iode minérale.",
                "Contrôle la croissance et le développement de tissus osseux, nerveux, et du système génital."
            ],
            correctOptionIndexes: [0, 2, 3, 4],
            explanation: "La thyroïde est une glande bilobée (deux lobes) unie par un isthme. Elle est située à la face antérieure du cou, en avant du larynx et de la trachée. Elle produit les hormones T3 et T4 à partir de l'iode, qui sont essentielles à la régulation du métabolisme, de la fréquence cardiaque, de la croissance et du développement des tissus osseux, nerveux, ainsi que du système génital."
        },
        {
            questionText: "Concernant l’axe hypothalamus‑hypophysaire :",
            options: [
                "L’hypophyse est contenue dans la selle turcique creusée dans l’os ethmoïdal.",
                "L’hypothalamus est situé au‑dessus de l’hypophyse.",
                "L’hypophyse sécrète des hormones qui contrôlent la sécrétion hypothalamique.",
                "La posthypophyse sécrète l’hormone antidiurétique.",
                "L’hypothalamus est situé dans le cerveau."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "L'hypophyse est logée dans la selle turcique de l'os sphénoïde, et non de l'os ethmoïdal. L'hypothalamus est une région du cerveau située au-dessus de l'hypophyse. La posthypophyse stocke et libère l'hormone antidiurétique (ADH ou vasopressine), qui est synthétisée par l'hypothalamus. L'hypothalamus contrôle l'hypophyse, et non l'inverse."
        },
        {
            questionText: "Concernant la glande surrénale :",
            options: [
                "Composée de deux structures : la médullosurrénale et la corticosurrénale.",
                "La médullosurrénale est située à la périphérie de la glande.",
                "La corticosurrénale sécrète la noradrénaline.",
                "La corticosurrénale est formée de trois couches : la zone fasciculée, la zone réticulée, zone glomérulée.",
                "La zone fasciculée sécrète des glucocorticoïdes."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "La glande surrénale est effectivement composée de deux structures distinctes : le cortex (corticosurrénale) et la médullosurrénale. La médullosurrénale est située au centre de la glande, et non à la périphérie. La corticosurrénale est organisée en trois couches : la zone glomérulée, la zone fasciculée et la zone réticulée, et sécrète des hormones stéroïdiennes (minéralocorticoïdes, glucocorticoïdes et androgènes). La zone fasciculée sécrète principalement les glucocorticoïdes (comme le cortisol). La médullosurrénale sécrète la noradrénaline et l'adrénaline (catécholamines)."
        },
        {
            questionText: "Concernant le système endocrinien :",
            options: [
                "Le pancréas est une glande mixte encastrée par sa queue dans le cadre duodénal.",
                "Le pancréas est un organe allongé verticalement dans la région épigastrique.",
                "Le conduit excréteur accessoire parcourt la tête du pancréas.",
                "Le cortex des glandes surrénales est responsable de la sécrétion de catécholamines.",
                "Les artères surrénales inférieures proviennent des artères rénales."
            ],
            correctOptionIndexes: [2],
            explanation: "Le pancréas est une glande mixte (endocrine et exocrine) dont la tête est encastrée dans le cadre duodénal, et la queue s'étend vers la rate. Il est allongé horizontalement dans la région épigastrique. Le conduit excréteur accessoire (canal de Santorini) parcourt la tête du pancréas. Le cortex des glandes surrénales sécrète des hormones stéroïdiennes, tandis que la médullosurrénale (partie centrale) est responsable de la sécrétion des catécholamines (adrénaline et noradrénaline). Les artères surrénales inférieures sont des branches des artères rénales."
        },
        {
            questionText: "Concernant le système endocrinien :",
            options: [
                "Les testicules sont deux glandes situées dans le scrotum.",
                "L’extrémité antéro‑supérieure du testicule est surmontée par la queue de l’épididyme.",
                "Les canalicules séminipares sont le lieu de la spermatogenèse.",
                "Le ligament propre de l’ovaire est utéro‑ovarien.",
                "Les veines gonadiques se drainent à droite dans la veine rénale."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Les testicules sont effectivement deux glandes situées dans le scrotum. La spermatogenèse, processus de formation des spermatozoïdes, a lieu dans les tubes séminifères des testicules. Le ligament propre de l'ovaire relie l'ovaire à l'utérus (ligament utéro-ovarien). L'extrémité postéro-supérieure du testicule est surmontée par la tête de l'épididyme, et la queue est située à l'extrémité inférieure. La veine gonadique droite (veine testiculaire ou ovarienne) se draine dans la veine cave inférieure, tandis que la gauche se draine généralement dans la veine rénale gauche."
        },
        {
            questionText: "Concernant le système endocrinien :",
            options: [
                "Les glandes endocrines déversent leur sécrétions en dehors de la circulation sanguine.",
                "Les glandes endocrines possèdent des canaux excréteurs.",
                "La glande thyroïde occupe la face antérieure du cou.",
                "La glande hypophyse est contenue dans la selle turcique.",
                "Les glandes parathyroïdes occupent la face antérieure de la thyroïde."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Les glandes endocrines déversent leurs hormones directement dans la circulation sanguine et ne possèdent pas de canaux excréteurs. La glande thyroïde est située à la face antérieure du cou. L'hypophyse est bien contenue dans la selle turcique de l'os sphénoïde. Les glandes parathyroïdes sont généralement situées à la face postérieure de la thyroïde."
        },
        {
            questionText: "À propos du système endocrinien :",
            options: [
                "Le système endocrinien est un moyen de communication dans l’organisme.",
                "Les hormones agissent sur des récepteurs spécifiques.",
                "Les hormones ont une action très rapide.",
                "Les glandes endocrines possèdent des canaux excréteurs.",
                "Les glandes endocrines déversent directement les hormones dans le sang."
            ],
            correctOptionIndexes: [0, 1, 4],
            explanation: "Le système endocrinien est un système de communication chimique dans l'organisme via les hormones. Ces hormones agissent sur des cellules cibles possédant des récepteurs spécifiques. Contrairement au système nerveux, l'action des hormones est généralement plus lente et prolongée. Les glandes endocrines déversent directement leurs hormones dans le sang et ne possèdent pas de canaux excréteurs."
        },
        {
            questionText: "À propos de l’hypothalamus et de l’hypophyse :",
            options: [
                "L’hypothalamus est situé au‑dessus de l’hypophyse.",
                "L’hypothalamus est contenu dans la selle turcique.",
                "L’hypothalamus sécrète des neurohormones.",
                "L’hypothalamus est relié à l’hypophyse par la tige pituitaire.",
                "L’hypophyse est divisée en 03 lobes."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "L’hypothalamus est situé au-dessus de l’hypophyse dans le cerveau. La selle turcique contient l'hypophyse, pas l'hypothalamus. L'hypothalamus sécrète des neurohormones qui contrôlent l'hypophyse. L'hypothalamus est relié à l'hypophyse par la tige pituitaire (ou tige hypophysaire). L'hypophyse est anatomiquement divisée en deux lobes principaux : l'adénohypophyse (antérieur) et la neurohypophyse (postérieur), bien qu'il existe parfois une pars intermedia peu développée chez l'humain."
        },
        {
            questionText: "À propos de la glande thyroïde :",
            options: [
                "Elle est située en avant du larynx et de la trachée.",
                "Elle est formée par un seul lobe.",
                "Elle est vascularisée uniquement par les artères thyroïdiennes inférieures.",
                "L’isthme thyroïdien est plaqué contre le larynx.",
                "Les hormones thyroïdiennes permettent la régulation des métabolismes."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "La glande thyroïde est située en avant du larynx et de la trachée. Elle est formée de deux lobes reliés par un isthme. Sa vascularisation est riche et assurée par les artères thyroïdiennes supérieures (branches de la carotide externe) et les artères thyroïdiennes inférieures (branches du tronc thyro-cervical). L'isthme thyroïdien est plaqué contre la trachée, généralement au niveau des 2ème et 3ème anneaux trachéaux. Les hormones thyroïdiennes (T3, T4) régulent le métabolisme basal, la thermorégulation et la croissance."
        },
        {
            questionText: "À propos des glandes parathyroïdes :",
            options: [
                "Sont accolées à la paroi antérieure de la thyroïde.",
                "Sont accolées à la paroi postérieure de la thyroïde.",
                "Sont au nombre de 04.",
                "Les glandes parathyroïdes ont une capsule propre.",
                "Ont des rapports avec le nerf récurrent."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "Les glandes parathyroïdes sont généralement au nombre de quatre et sont accolées à la paroi postérieure des lobes thyroïdiens. Elles sont souvent en étroite relation avec les nerfs laryngés récurrents, ce qui est une considération importante en chirurgie thyroïdienne. Elles peuvent avoir une capsule propre ou être incluses dans la capsule thyroïdienne."
        }
    ]
  },
  {
    title: "Le Système Tégumentaire",
    subject: "anatomy-y1",
    questions: [
        {
            questionText: "Concernant la structure de la peau :",
            options: [
                "L'hypoderme est la couche la plus profonde.",
                "L'épiderme est un épithélium pavimenteux pluristratifié.",
                "La couche granuleuse de l'épiderme présente les mélanocytes.",
                "Le derme contient des capillaires.",
                "Le derme est la toile sous cutanée."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "L'hypoderme est la couche la plus profonde de la peau et du tissu sous-cutané. L'épiderme est un épithélium pavimenteux stratifié kératinisé. Le derme est richement vascularisé et contient des capillaires. Les mélanocytes sont situés dans la couche basale (stratum basale) de l'épiderme, pas dans la couche granuleuse. L'hypoderme est la toile sous-cutanée (tissu sous-cutané), pas le derme."
        },
        {
            questionText: "Concernant La peau :",
            options: [
                "La surface cutanée présente des pores, qui sont tous libres.",
                "La peau présente des dermatoglyphes dans sa couche dermique.",
                "Les dermatoglyphes constituent la carte d'identité cutanée.",
                "La pigmentation est en rapport avec un pigment appelé la mélatonine.",
                "L'élasticité de la peau diminue avec l'âge."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "Les dermatoglyphes (empreintes digitales, palmaires, plantaires) sont des motifs uniques qui constituent une véritable carte d'identité cutanée. L'élasticité de la peau diminue effectivement avec l'âge, notamment en raison de la perte de fibres de collagène et d'élastine. La pigmentation de la peau est due à la mélanine, non à la mélatonine (hormone). Les dermatoglyphes sont des motifs des crêtes épidermiques, résultant de la configuration des papilles dermiques sous-jacentes."
        },
        {
            questionText: "La Peau :",
            options: [
                "Est la partie membraneuse qui recouvre la majeure partie de la surface du corps.",
                "Forme l'ensemble des téguments du corps humain.",
                "Sa superficie est d'environ 4m² pour un sujet adulte.",
                "Elle est épaisse au niveau des paupières et organes génitaux externes.",
                "Elle est mince chez la femme et le vieillard."
            ],
            correctOptionIndexes: [0, 1, 4],
            explanation: "La peau est la partie membraneuse qui recouvre la majeure partie de la surface du corps et forme l'ensemble des téguments du corps humain. La superficie moyenne de la peau est d'environ 1,5 à 2 m² chez l'adulte. Elle est mince au niveau des paupières et des organes génitaux externes, et tend à être plus mince chez la femme et le vieillard."
        },
        {
            questionText: "Les annexes de la peau :",
            options: [
                "Les glandes sébacées sont appendues aux follicules pileux, et s'ouvrent près du pore pileux.",
                "Les glandes sébacées sécrètent le sébum.",
                "L'ongle est la lame épineuse, élastique, recouvrant l'extrémité de la face dorsale de la phalange distale des doigts et des orteils.",
                "L'ongle présente deux parties dont la partie visible est le corps.",
                "Les glandes sudoripares sont très développées au niveau de la marge anale."
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "Les glandes sébacées sont effectivement associées aux follicules pileux et sécrètent le sébum. L'ongle est une lame de kératine dure (non épineuse ni élastique). L'ongle est composé d'une partie visible appelée corps de l'ongle et d'une racine. Les glandes sudoripares (en particulier les glandes apocrines) sont bien développées dans certaines régions, y compris la marge anale."
        },
        {
            questionText: "A propos du poil :",
            options: [
                "Le poil est une tige constituée de cellules cornées kératinisées.",
                "Le poil est une tige constituée de cellules de la couche claire de l'épiderme.",
                "Le poil présente une partie libre visible appelée scapus.",
                "Le poil présente trois couches dont la plus profonde est la cuticule.",
                "Chaque bulbe de poil est muni d'un muscle strié à contraction automatique (muscle arrecteur)."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Le poil est une tige constituée de cellules cornées kératinisées (mortes). La partie libre et visible du poil est appelée scapus. Le poil est formé de la moelle (centrale), du cortex et de la cuticule (externe), donc la cuticule n'est pas la couche la plus profonde. Le muscle arrecteur du poil est un muscle lisse, non strié, à contraction involontaire."
        },
        {
            questionText: "Concernant La peau :",
            options: [
                "C'est un organe très étendu.",
                "Il est richement vascularisé.",
                "Au niveau de l'épiderme se trouvent les terminaisons nerveuses.",
                "L'hypoderme est une couche adipeuse.",
                "Le derme est formé de 4 à 5 couches cellulaires."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "La peau est l'organe le plus étendu du corps et est richement vascularisée, notamment au niveau du derme. L'hypoderme est effectivement une couche adipeuse. L'épiderme, bien qu'avasculaire, contient des terminaisons nerveuses libres. C'est l'épiderme qui est formé de 4 à 5 couches cellulaires (selon la localisation), pas le derme."
        },
        {
            questionText: "Concernant les téguments :",
            options: [
                "Les glandes sébacées sont tubulées situées dans l'épiderme.",
                "Les glandes sébacées sécrètent le sébum.",
                "Les glandes sudoripares sont annexées aux poils.",
                "Les glandes sudoripares participent à la thermorégulation.",
                "Les ongles ont une origine épidermique."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Les glandes sébacées sécrètent le sébum et sont des glandes alvéolaires situées dans le derme, associées aux follicules pileux. Les glandes sudoripares (eccrines) sont essentielles à la thermorégulation et ne sont pas systématiquement annexées aux poils (contrairement aux glandes sébacées). Les ongles sont des phanères d'origine épidermique, étant des modifications de l'épiderme kératinisé."
        },
        {
            questionText: "La peau :",
            options: [
                "La surface cutanée présente des pores, qui sont tous libres.",
                "L'élasticité de la peau augmente avec l'âge.",
                "La peau présente des dermatoglyphes dans sa couche dermique.",
                "Les dermatoglyphes constituent la carte d'identité cutanée.",
                "La pigmentation est en rapport avec un pigment appelé la mélanine."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "Les dermatoglyphes (empreintes digitales, etc.) sont uniques et constituent une carte d'identité cutanée. La pigmentation de la peau est principalement due à la mélanine. L'élasticité de la peau diminue avec l'âge. Les dermatoglyphes sont des crêtes épidermiques qui reflètent la structure des papilles dermiques."
        },
        {
            questionText: "Les fonctions de la peau :",
            options: [
                "La protection.",
                "L'immunité.",
                "L'excrétion des déchets.",
                "Le toucher.",
                "Le soutien du squelette."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "La peau remplit de multiples fonctions essentielles : elle assure une protection physique et immunitaire (cellules de Langerhans) contre les agressions externes, participe à l'excrétion de certains déchets via la sueur, et est un organe sensoriel majeur grâce à ses nombreux récepteurs du toucher. Le soutien du squelette n'est pas une fonction de la peau."
        },
        {
            questionText: "Concernant les cellules de l'épiderme :",
            options: [
                "Les kératinocytes sont les cellules les plus abondantes de l'épiderme.",
                "Les mélanocytes produisent la mélanine et sont situés dans la couche granuleuse.",
                "Les cellules de Merkel sont des mécanorécepteurs à adaptation rapide.",
                "Les cellules de Langerhans sont des cellules immunitaires situées dans le derme.",
                "Les cornéocytes sont des kératinocytes morts dans la couche basale."
            ],
            correctOptionIndexes: [0],
            explanation: "Les kératinocytes sont en effet les cellules les plus nombreuses de l'épiderme, formant l'essentiel de sa structure. Les mélanocytes produisent la mélanine et sont situés dans la couche basale. Les cellules de Merkel sont des mécanorécepteurs à adaptation lente. Les cellules de Langerhans sont des cellules immunitaires présentatrices d'antigènes situées dans l'épiderme. Les cornéocytes sont des kératinocytes morts remplis de kératine, formant la couche cornée, pas la couche basale."
        },
        {
            questionText: "A propos du derme :",
            options: [
                "Il est entièrement avasculaire.",
                "Il est composé de deux couches : le derme papillaire et le derme réticulaire.",
                "Le derme réticulaire est la couche la plus superficielle.",
                "Il ne contient aucune terminaison nerveuse.",
                "Les follicules pileux sont situés exclusivement dans l'épiderme."
            ],
            correctOptionIndexes: [1],
            explanation: "Le derme est effectivement divisé en deux couches principales : le derme papillaire (plus superficiel) et le derme réticulaire (plus profond). Il est richement vascularisé (pas avasculaire) et contient de nombreuses terminaisons nerveuses. Le derme papillaire est la couche la plus superficielle. Les follicules pileux sont des invaginations de l'épiderme qui s'enfoncent profondément dans le derme et parfois dans l'hypoderme."
        },
        {
            questionText: "Concernant l'hypoderme :",
            options: [
                "Il est principalement composé de tissu musculaire strié.",
                "Sa fonction principale est l'isolation thermique et la réserve d'énergie.",
                "Il est situé entre l'épiderme et le derme.",
                "Il contient des glandes sudoripares apocrines uniquement.",
                "C'est la couche qui contient les dermatoglyphes."
            ],
            correctOptionIndexes: [1],
            explanation: "L'hypoderme est la couche la plus profonde de la peau, principalement composée de tissu adipeux (graisse), ce qui lui confère ses rôles d'isolation thermique, de protection contre les chocs et de réserve d'énergie. Il est situé sous le derme. Il contient également des glandes sudoripares et les bulbes pileux les plus profonds. Les dermatoglyphes sont des motifs épidermiques."
        },
        {
            questionText: "Les glandes de la peau :",
            options: [
                "Les glandes sébacées sont des glandes apocrines.",
                "Les glandes sudoripares eccrines sont des glandes holocrines.",
                "Les glandes sébacées sécrètent une substance riche en eau.",
                "Les glandes sudoripares apocrines sont présentes sur tout le corps.",
                "Les glandes sudoripares eccrines sont importantes pour la thermorégulation."
            ],
            correctOptionIndexes: [4],
            explanation: "Les glandes sudoripares eccrines sont des glandes tubuleuses simples qui produisent une sueur aqueuse et jouent un rôle crucial dans la thermorégulation. Les glandes sébacées sont des glandes holocrines qui sécrètent le sébum (substance lipidique), et non apocrines. Les glandes sudoripares apocrines sont localisées dans des régions spécifiques (aisselles, aine, mamelons) et non sur tout le corps."
        },
        {
            questionText: "A propos de l'ongle :",
            options: [
                "Il est composé de kératine molle.",
                "La matrice unguéale est responsable de la croissance de l'ongle.",
                "La lunule est la partie distale et visible de la racine de l'ongle.",
                "L'hyponychium est la peau recouvrant la base de l'ongle.",
                "Il protège principalement la face palmaire des doigts."
            ],
            correctOptionIndexes: [1],
            explanation: "L'ongle est composé de kératine dure. La matrice unguéale est la zone de l'épiderme sous la racine de l'ongle d'où provient la croissance de l'ongle. La lunule est la zone blanchâtre en forme de croissant à la base de l'ongle visible. L'éponychium (cuticule) est la peau recouvrant la base de l'ongle, tandis que l'hyponychium est la zone sous le bord libre de l'ongle. L'ongle protège la face dorsale des extrémités des doigts et des orteils."
        },
        {
            questionText: "Les fonctions sensorielles de la peau incluent :",
            options: [
                "La perception de la douleur (nociception).",
                "La perception de la pression et du toucher.",
                "La détection de la température.",
                "La production de vitamine D.",
                "La régulation de la glycémie."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La peau est un organe sensoriel majeur grâce à une multitude de récepteurs. Elle permet la perception de la douleur (nocicepteurs), de la pression et du toucher (corpuscules de Pacini, Meissner, Merkel, Ruffini), et de la température (thermorécepteurs). La production de vitamine D est une autre fonction de la peau (sous l'effet des UV), mais n'est pas une fonction sensorielle. La régulation de la glycémie est une fonction hormonale."
        },
        {
            questionText: "La couleur de la peau est influencée par :",
            options: [
                "La concentration de carotène.",
                "La quantité d'hémoglobine dans les capillaires du derme.",
                "Le nombre de mélanocytes.",
                "L'activité des mélanocytes.",
                "La présence de kératine."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La couleur de la peau est une combinaison de plusieurs facteurs. Elle est influencée par la mélanine produite par les mélanocytes (dont l'activité est plus importante que le nombre de cellules), le carotène (pigment orange-jaune), et la quantité d'hémoglobine dans les capillaires du derme (rougeur). La kératine est une protéine structurelle et n'influence pas directement la couleur, bien qu'elle soit le constituant majeur des cellules cutanées."
        },
        {
            questionText: "Concernant l'épiderme :",
            options: [
                "Il est richement vascularisé pour nourrir les kératinocytes.",
                "La couche basale est la plus superficielle.",
                "La couche cornée est constituée de kératinocytes vivants et actifs.",
                "Il contient des jonctions intercellulaires appelées desmosomes.",
                "Il est un tissu conjonctif."
            ],
            correctOptionIndexes: [3],
            explanation: "L'épiderme est un épithélium avasculaire, et ses cellules sont nourries par diffusion à partir des capillaires du derme sous-jacent. Il est caractérisé par la présence de nombreuses jonctions intercellulaires, notamment les desmosomes, qui assurent la cohésion des kératinocytes. La couche basale est la plus profonde de l'épiderme. La couche cornée est la plus superficielle et est constituée de kératinocytes morts et aplatis (cornéocytes). L'épiderme est un tissu épithélial, non conjonctif."
        },
        {
            questionText: "Le rôle de la vitamine D dans l'organisme :",
            options: [
                "Elle est stockée principalement dans l'hypoderme.",
                "Sa synthèse est déclenchée par les rayons infrarouges (IR).",
                "Elle est essentielle à l'absorption du calcium et du phosphore.",
                "Une carence peut entraîner une augmentation de la densité osseuse.",
                "Elle est produite en grande quantité en cas de surexposition solaire."
            ],
            correctOptionIndexes: [2],
            explanation: "La vitamine D (plus précisément la vitamine D3 ou cholécalciférol) est synthétisée dans la peau sous l'action des rayons ultraviolets B (UVB). Elle est essentielle à l'absorption intestinale du calcium et du phosphore, jouant un rôle crucial dans la minéralisation osseuse. Une carence peut entraîner un rachitisme chez l'enfant et une ostéomalacie chez l'adulte (diminution de la densité osseuse). Sa production est régulée et une surexposition ne mène pas à une production illimitée."
        },
        {
            questionText: "Parmi les propositions suivantes, laquelle décrit correctement une annexe cutanée et sa fonction ?",
            options: [
                "Les poils protègent la peau des rayons UVB.",
                "Les glandes sébacées produisent une sueur riche en sels minéraux.",
                "Les ongles aident à la préhension d'objets fins.",
                "Les glandes sudoripares apocrines sont impliquées dans le refroidissement du corps.",
                "Les follicules pileux sont responsables de la perception tactile superficielle."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Les poils, en formant une barrière, aident à protéger la peau des rayons UVB. Les ongles, en renforçant l'extrémité des doigts, facilitent la préhension et la manipulation d'objets fins. Les glandes sébacées produisent le sébum (lipidique), non une sueur riche en sels minéraux. Les glandes sudoripares eccrines sont principalement impliquées dans le refroidissement. Les follicules pileux, par les nerfs qui les entourent, participent à la perception tactile, mais la \"perception tactile superficielle\" est plutôt associée aux récepteurs de Meissner et Merkel."
        }
    ]
  },
  {
    title: "Le Système Nerveux Central et Périphérique",
    subject: "anatomy-y1",
    questions: [
        {
            questionText: "Le système nerveux central :\n\n1- Le névraxe est formé de l'encéphale et de la moelle épinière.\n2- L'encéphale donne origine aux nerfs crâniens et rachidiens.\n3- Le cerveau est parcouru par des sillons et des scissures.\n4- Le tronc cérébral est rattaché en bas à la moelle par la protubérance annulaire.\n5- La moelle épinière présente deux renflements, cervical et thoracique.",
            options: [
                "(1,3)",
                "(3,5)",
                "(1,4)",
                "(1,2,3)",
                "(2,3)"
            ],
            correctOptionIndexes: [0],
            explanation: "Le névraxe, synonyme de système nerveux central, est bien formé de l'encéphale et de la moelle épinière. Le cerveau est caractérisé par la présence de nombreux sillons et scissures. Les nerfs crâniens proviennent de l'encéphale, mais les nerfs rachidiens de la moelle épinière. Le tronc cérébral est rattaché à la moelle par le bulbe rachidien. La moelle épinière présente des renflements cervical et lombaire."
        },
        {
            questionText: "Concernant le cerveau :",
            options: [
                "Sur la face externe du cerveau, on distingue 04 lobes.",
                "Sur la face inférieure, le cerveau est pénétré par les 02 pédoncules cérébraux du tronc cérébral.",
                "Le corps calleux relie les 02 hémisphères du cerveau.",
                "La substance blanche du cerveau comprend les noyaux gris centraux.",
                "Le 3ème ventricule n'est pas relié au 4ème ventricule."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "On distingue quatre lobes principaux (frontal, pariétal, temporal, occipital). Les pédoncules cérébraux pénètrent sa face inférieure. Le corps calleux relie les deux hémisphères. Les noyaux gris centraux sont de la substance grise. Le 3ème et le 4ème ventricule sont reliés par l'aqueduc de Sylvius."
        },
        {
            questionText: "Le système nerveux périphérique :\n\n1- Les nerfs olfactifs et optiques sont des nerfs diencéphaliques.\n2- Les nerfs crâniens ont une origine réelle et une origine apparente.\n3- Le nerf facial est le nerf de la mastication.\n4- Il existe 31 paires de nerf rachidiens dont 7 cervicales.\n5- Le nerf rachidien est mixte sensitivo-moteur.",
            options: [
                "(1.3.4)",
                "(1.2.5)",
                "(1.4)",
                "(1.2.3)",
                "(2.3)"
            ],
            correctOptionIndexes: [1],
            explanation: "Les nerfs crâniens ont une origine réelle et apparente. Le nerf rachidien est mixte. Le nerf optique (II) est une extension du diencéphale, et le nerf olfactif (I) du télencéphale. Le nerf de la mastication est le trijumeau (V). Il y a 8 paires de nerfs cervicaux."
        },
        {
            questionText: "Concernant le système nerveux central :",
            options: [
                "C'est le centre de réception des informations sensitivo-motrices.",
                "Le système nerveux cérébro-spinal règle la vie inconsciente.",
                "L'encéphale comprend : le cerveau, la moelle épinière et le cervelet.",
                "L'encéphale est enveloppé par les méninges.",
                "Le liquide céphalo-rachidien occupe les espaces arachnoïdiens et les cavités ventriculaires."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "Le SNC est le centre de réception de l'information. Il est enveloppé par les méninges et contient le LCR dans les espaces sous-arachnoïdiens et les ventricules. Le système cérébro-spinal gère la vie consciente et inconsciente. L'encéphale comprend le cerveau, le cervelet et le tronc cérébral."
        },
        {
            questionText: "Concernant le système nerveux périphérique :",
            options: [
                "Le tissu nerveux est formé d'un seul type de cellules.",
                "Les nerfs spinaux sont tous mixtes.",
                "Les nerfs crâniens sont tous sensitifs.",
                "Il existe 31 paires de nerfs spinaux.",
                "L'origine des nerfs crâniens se trouve dans le tronc cérébral."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "Les 31 paires de nerfs spinaux sont toutes mixtes. L'origine de la plupart des nerfs crâniens se trouve dans le tronc cérébral. Le tissu nerveux est composé de neurones et de cellules gliales. Les nerfs crâniens peuvent être sensitifs, moteurs ou mixtes."
        },
        {
            questionText: "A propos du neurone :",
            options: [
                "C'est une cellule hautement différenciée.",
                "C'est une cellule qui se renouvelle régulièrement.",
                "Elle présente un corps et des extrémités.",
                "L'axone est un prolongement unique.",
                "Le dendrite est un prolongement unique qui constitue une synapse."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le neurone est une cellule hautement différenciée et possède un prolongement unique appelé axone. Les neurones matures ne se renouvellent pas. Le neurone a un corps cellulaire, des dendrites (généralement multiples) et un axone."
        },
        {
            questionText: "Concernant le système nerveux périphérique :",
            options: [
                "Le nerf est formé par plusieurs fibres nerveuses.",
                "Une fibre nerveuse est formée d'un axone et d'une gaine.",
                "Une fibre myélinisée est recouverte d'une seule gaine.",
                "La fibre myélinisée conduit l'influx nerveux rapidement.",
                "Le rôle du nerf est l'intégration de l'information."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Un nerf est un faisceau de fibres nerveuses. Une fibre est un axone avec sa gaine. La myéline permet une conduction rapide de l'influx. L'intégration de l'information est le rôle du SNC."
        },
        {
            questionText: "Concernant le système nerveux autonome :",
            options: [
                "Il règle le fonctionnement des organes internes.",
                "Il est formé par des centres, des nerfs et des ganglions.",
                "Le système sympathique est celui de la récupération.",
                "Le médiateur chimique du système sympathique est l'acétyle choline.",
                "Les deux systèmes sympathique et parasympathique sont antagonistes."
            ],
            correctOptionIndexes: [0, 1, 4],
            explanation: "Le SNA règle les organes internes, est formé de centres, nerfs et ganglions, et ses deux branches (sympathique et parasympathique) sont antagonistes. Le système sympathique est celui de l'action ('combat ou fuite'), et son médiateur principal est la noradrénaline."
        },
        {
            questionText: "Concernant le système nerveux périphérique :",
            options: [
                "Un nerf est un ensemble d'axones situés à l'extérieur du système nerveux central.",
                "Les nerfs rachidiens sont formés à partir des racines nerveuses sortant de la moelle épinière.",
                "Un plexus est un ensemble de fibres nerveuses innervant un territoire organique déterminé.",
                "Les nerfs rachidiens émergent uniquement à partir de l'étage cervical et de l'étage dorsal.",
                "Un nerf spinal est constitué d'une seule racine ventrale."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Un nerf est un ensemble d'axones hors du SNC. Les nerfs rachidiens naissent des racines de la moelle épinière. Un plexus est un réseau de fibres nerveuses. Les nerfs rachidiens émergent de tous les étages de la moelle. Un nerf spinal a une racine ventrale (motrice) et une racine dorsale (sensitive)."
        },
        {
            questionText: "Concernant le système nerveux périphérique :",
            options: [
                "Le système nerveux périphérique est composé de 12 paires de nerfs rachidiens et 31 paires de nerfs crâniens.",
                "Le système nerveux périphérique (SNP) permet de relier le système nerveux central au reste du corps.",
                "Le système nerveux périphérique permet de véhiculer les informations sensitives uniquement.",
                "Les nerfs crâniens naissent du tronc cérébral.",
                "Les nerfs crâniens sont impairs."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Le SNP relie le SNC au reste du corps. La plupart des nerfs crâniens naissent du tronc cérébral. Le SNP est composé de 12 paires de nerfs crâniens et 31 paires de nerfs rachidiens. Il véhicule des informations sensitives et motrices. Les nerfs crâniens sont pairs."
        },
        {
            questionText: "Concernant le cerveau :",
            options: [
                "Le cerveau représente 80 % de la masse de l'encéphale.",
                "Le télencéphale correspond aux 2 hémisphères cérébelleux.",
                "Le cerveau est divisé par des scissures et des sillons en sept (7) lobes.",
                "Le diencéphale relie les 2 hémisphères.",
                "Le cerveau est le centre de la pensée consciente."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "Le cerveau représente 80% de la masse de l'encéphale et est le centre de la pensée consciente. Le diencéphale est un relai important entre les hémisphères. Le télencéphale correspond aux hémisphères cérébraux. Le cerveau est généralement divisé en 4 à 6 lobes principaux."
        },
        {
            questionText: "Concernant le système nerveux central : Le SNC est composé :",
            options: [
                "De l'encéphale et des nerfs crâniens.",
                "Du cerveau, du cervelet et du tronc cérébral.",
                "Du cerveau et de la moelle spinale.",
                "Du cerveau, du tronc cérébral et des Lobes.",
                "De l'encéphale et de la moelle spinale."
            ],
            correctOptionIndexes: [4],
            explanation: "Le système nerveux central (SNC) est anatomiquement composé de l'encéphale (qui inclut le cerveau, le cervelet et le tronc cérébral) et de la moelle spinale (ou moelle épinière)."
        },
        {
            questionText: "Concernant la moelle spinale :",
            options: [
                "S'étend du pont de Varole au disque intervertébral L1-L2.",
                "Présente une longueur de 42mm à 45mm, et 1,8cm de largeur.",
                "Se termine par le cône médullaire ou filum terminale.",
                "La substance grise est centrale.",
                "Présente deux renflements : un cervical et un thoracique."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "La moelle spinale se termine par le cône médullaire et le filum terminale, et sa substance grise est centrale. Elle s'étend du bulbe rachidien à L1-L2, mesure 42-45 cm de long, et ses renflements sont cervical et lombaire."
        },
        {
            questionText: "Concernant le système nerveux autonome :",
            options: [
                "Le système nerveux autonome a une connexion directe avec les organes innervés.",
                "Le système nerveux autonome ne cible que les fibres musculaires lisses.",
                "La voie efférente du SNA est constituée de deux neurones.",
                "Le système nerveux autonome a une action motrice et sécrétoire.",
                "Le système nerveux autonome agit uniquement par le biais de l'acétylcholine."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "La voie efférente du SNA utilise une chaîne de deux neurones et a une action motrice et sécrétoire. La connexion n'est pas directe du SNC à l'organe. Il cible les muscles lisses, le muscle cardiaque et les glandes. Il utilise l'acétylcholine et la noradrénaline."
        },
        {
            questionText: "Concernant le système nerveux central :",
            options: [
                "Il est protégé par une structure osseuse.",
                "Il est constitué des systèmes sympathique et parasympathique.",
                "Il est creusé de cavités.",
                "Il est entouré par les méninges.",
                "Il régule la fonction végétative des viscères."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Le SNC est protégé par l'os (crâne, colonne vertébrale), creusé de cavités (ventricules), et entouré par les méninges. Le système sympathique et parasympathique font partie du SNP autonome."
        },
        {
            questionText: "Concernant le cerveau :",
            options: [
                "Les hémisphères cérébraux sont séparés par une fissure.",
                "Sa substance blanche est périphérique.",
                "Il est creusé par le 3ème ventricule.",
                "Il donne naissance aux nerfs végétatifs.",
                "Il est formé par des lobes et des circonvolutions ou gyrus."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "Les hémisphères sont séparés par la fissure longitudinale. Le cerveau contient le 3ème ventricule et est formé de lobes et gyrus. Sa substance grise (cortex) est périphérique."
        },
        {
            questionText: "Concernant la moelle épinière :",
            options: [
                "Elle fait suite au tronc cérébral.",
                "Elle se termine au niveau de la 4e vertèbre lombaire.",
                "C'est le centre nerveux du réflexe.",
                "Sa substance nerveuse blanche est centrale.",
                "Elle est creusée par les ventricules latéraux."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La moelle épinière fait suite au tronc cérébral et est un centre nerveux pour les réflexes. Elle se termine au niveau de L1-L2. Sa substance blanche est périphérique. Les ventricules latéraux sont dans le cerveau."
        },
        {
            questionText: "Concernant le système nerveux périphérique :",
            options: [
                "Son rôle est l'intégration de l'information.",
                "Les nerfs spinaux sont tous mixtes.",
                "Les nerfs crâniens sont tous sensoriels.",
                "Il existe 34 paires de nerfs spinaux.",
                "L'origine des nerfs crâniens se trouve dans la moelle épinière ou spinale."
            ],
            correctOptionIndexes: [1],
            explanation: "Les nerfs spinaux sont tous mixtes. L'intégration de l'information est le rôle du SNC. Les nerfs crâniens peuvent être moteurs, sensoriels ou mixtes. Il y a 31 paires de nerfs spinaux. Les nerfs crâniens naissent du tronc cérébral."
        },
        {
            questionText: "Concernant les ventricules cérébraux :",
            options: [
                "Ils sont au nombre de quatre.",
                "Le 1er et 2ème ventricules sont les ventricules latéraux.",
                "Ils contiennent le liquide céphalo-rachidien.",
                "Le 4ème ventricule est situé dans le cervelet.",
                "Ils communiquent tous directement entre eux."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Il y a quatre ventricules (deux latéraux, le 3ème et le 4ème) contenant le LCR. Le 4ème ventricule est situé entre le tronc cérébral et le cervelet. Leur communication est séquentielle."
        },
        {
            questionText: "A propos des nerfs crâniens :",
            options: [
                "Ils sont au nombre de 10 paires.",
                "Certains sont purement sensitifs.",
                "Tous émergent du tronc cérébral.",
                "Le nerf vague (X) est le plus court.",
                "Le nerf trijumeau (V) est un nerf mixte."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "Certains nerfs crâniens sont purement sensitifs, et le nerf trijumeau (V) est mixte. Il y a 12 paires. Les nerfs I et II n'émergent pas du tronc cérébral. Le nerf vague (X) est le plus long."
        },
        {
            questionText: "Concernant la substance grise du SNC :",
            options: [
                "Elle est composée principalement de corps cellulaires de neurones.",
                "Elle est située en périphérie dans la moelle épinière.",
                "Elle forme le cortex cérébral.",
                "Elle est responsable de la transmission rapide de l'information.",
                "Elle contient les noyaux gris centraux dans le cerveau."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "La substance grise est composée de corps cellulaires, forme le cortex cérébral et les noyaux gris centraux. Dans la moelle épinière, elle est centrale. La transmission rapide est le rôle de la substance blanche."
        },
        {
            questionText: "A propos du cervelet :",
            options: [
                "Il est situé en avant du tronc cérébral.",
                "Sa principale fonction est la coordination motrice et l'équilibre.",
                "Il est composé de deux hémisphères reliés par le corps calleux.",
                "Il contient le 3ème ventricule.",
                "Il ne reçoit que des informations sensorielles."
            ],
            correctOptionIndexes: [1],
            explanation: "La fonction principale du cervelet est la coordination motrice et l'équilibre. Il est situé en arrière du tronc cérébral. Ses hémisphères sont reliés par le vermis. Le 3ème ventricule est dans le diencéphale."
        },
        {
            questionText: "Concernant la moelle épinière :",
            options: [
                "Elle est segmentée en 5 régions : cervicale, thoracique, lombaire, sacrée, coccygienne.",
                "La substance blanche est en forme de H central.",
                "Elle transmet uniquement les informations motrices du cerveau.",
                "Elle se termine au niveau de la 5ème vertèbre lombaire.",
                "Elle est plus courte que la colonne vertébrale."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "La moelle épinière est segmentée en 5 régions et est plus courte que la colonne vertébrale (finissant en L1-L2). Sa substance grise est en forme de H central. Elle transmet des informations motrices et sensorielles."
        },
        {
            questionText: "Le système nerveux entérique :",
            options: [
                "Fait partie du système nerveux central.",
                "Est un système nerveux autonome qui contrôle le système digestif.",
                "Utilise uniquement l'acétylcholine comme neurotransmetteur.",
                "Est entièrement indépendant du système nerveux central.",
                "Est composé uniquement de neurones sensitifs."
            ],
            correctOptionIndexes: [1],
            explanation: "Le système nerveux entérique est une division du SNA qui contrôle le système digestif. Il utilise divers neurotransmetteurs, est en communication avec le SNC, et contient des neurones sensitifs, moteurs et interneurones."
        },
        {
            questionText: "A propos du système nerveux parasympathique :",
            options: [
                "Il favorise les réponses de 'combat ou de fuite'.",
                "Ses neurones pré-ganglionnaires sont courts et post-ganglionnaires longs.",
                "Son origine est crânio-sacrée.",
                "Il utilise principalement la noradrénaline au niveau des organes cibles.",
                "Il augmente la fréquence cardiaque."
            ],
            correctOptionIndexes: [2],
            explanation: "L'origine du système parasympathique est crânio-sacrée. Il est associé au 'repos et à la digestion', ses neurones pré-ganglionnaires sont longs, et son neurotransmetteur principal est l'acétylcholine. Il diminue la fréquence cardiaque."
        },
        {
            questionText: "Les gliocytes (cellules gliales) :",
            options: [
                "Sont plus nombreux que les neurones.",
                "Participent directement à la transmission des influx nerveux.",
                "Ne jouent qu'un rôle de soutien mécanique.",
                "Les astrocytes sont spécifiques du système nerveux périphérique.",
                "Les oligodendrocytes produisent la myéline dans le SNP."
            ],
            correctOptionIndexes: [0],
            explanation: "Les cellules gliales sont plus nombreuses que les neurones. Elles ont de multiples rôles (soutien, nutrition, myéline...). Les astrocytes sont dans le SNC. Les oligodendrocytes produisent la myéline dans le SNC (cellules de Schwann dans le SNP)."
        },
        {
            questionText: "Concernant le tronc cérébral :",
            options: [
                "Il est composé du mésencéphale, du pont et du cervelet.",
                "Il est le lieu d'émergence de la plupart des nerfs rachidiens.",
                "Il contient des centres vitaux pour la respiration et la circulation.",
                "Il relie la moelle épinière au cervelet uniquement.",
                "Il est situé sous le diencéphale et le télencéphale."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "Le tronc cérébral contient des centres vitaux et est situé sous le diencéphale. Il est composé du mésencéphale, du pont et du bulbe rachidien. Il est le lieu d'émergence des nerfs crâniens et relie la moelle à l'ensemble de l'encéphale."
        },
        {
            questionText: "La formation réticulaire :",
            options: [
                "Est une structure unique et bien délimitée du cerveau.",
                "Joue un rôle important dans l'éveil et le sommeil.",
                "Est située uniquement dans le cervelet.",
                "Est dépourvue de connexions avec le cortex cérébral.",
                "Est une structure exclusive du système nerveux périphérique."
            ],
            correctOptionIndexes: [1],
            explanation: "La formation réticulaire, située dans le tronc cérébral, est un réseau diffus de neurones essentiel à la régulation de l'éveil et du sommeil, et possède de nombreuses connexions avec le cortex."
        },
        {
            questionText: "A propos du liquide céphalo-rachidien (LCR) :",
            options: [
                "Il est produit principalement par les cellules épendymaires.",
                "Il assure la flottabilité et la protection mécanique du SNC.",
                "Il est principalement composé de sang et de plasma.",
                "Il est réabsorbé au niveau des villosités choroïdiennes.",
                "Sa composition est identique à celle du plasma sanguin."
            ],
            correctOptionIndexes: [1],
            explanation: "Le LCR assure la flottabilité et la protection mécanique du SNC. Il est produit par les plexus choroïdes et réabsorbé par les villosités arachnoïdiennes. Sa composition est similaire mais non identique à celle du plasma."
        },
        {
            questionText: "Le télencéphale :",
            options: [
                "Est la partie la plus postérieure de l'encéphale.",
                "Comprend le thalamus et l'hypothalamus.",
                "Est divisé en deux hémisphères cérébraux.",
                "Est principalement responsable des réflexes involontaires.",
                "Ne contient que de la substance grise."
            ],
            correctOptionIndexes: [2],
            explanation: "Le télencéphale est divisé en deux hémisphères cérébraux et est le siège des fonctions cognitives supérieures. Le thalamus et l'hypothalamus font partie du diencéphale. Il contient de la substance grise et blanche."
        },
        {
            questionText: "La douleur est perçue et traitée par :",
            options: [
                "Les nocicepteurs situés uniquement dans l'épiderme.",
                "Les voies nerveuses afférentes vers le SNC.",
                "Le cervelet, qui est le centre principal de la douleur.",
                "Des récepteurs spécifiques dans le derme profond seulement.",
                "Uniquement des mécanismes involontaires."
            ],
            correctOptionIndexes: [1],
            explanation: "La douleur est perçue par des nocicepteurs et transmise par les voies nerveuses afférentes vers le SNC (moelle, thalamus, cortex) pour traitement. Le cervelet est pour la coordination motrice."
        },
        {
            questionText: "Concernant les rôles du système nerveux :",
            options: [
                "La perception des stimuli internes et externes.",
                "L'intégration et l'interprétation des informations sensorielles.",
                "L'élaboration et l'exécution des réponses motrices.",
                "La régulation des fonctions vitales.",
                "Toutes les propositions sont correctes."
            ],
            correctOptionIndexes: [4],
            explanation: "Le système nerveux assure la perception des stimuli, l'intégration de l'information, l'exécution des réponses motrices et la régulation des fonctions vitales. Toutes les propositions sont donc correctes."
        },
        {
            questionText: "Les ganglions nerveux :",
            options: [
                "Sont des amas de substance grise dans le SNC.",
                "Sont des amas de corps cellulaires de neurones dans le SNP.",
                "Sont le lieu de formation des nerfs périphériques.",
                "Sont toujours de nature sensitive.",
                "Sont des regroupements d'axones myélinisés."
            ],
            correctOptionIndexes: [1],
            explanation: "Les ganglions nerveux sont des amas de corps cellulaires de neurones dans le système nerveux périphérique (SNP). Dans le SNC, ces amas sont appelés noyaux. Ils peuvent être sensitifs ou autonomes."
        }
    ]
  },
  {
    title: "Le Tête Osseuse",
    subject: "anatomy-y1",
    questions: [
        {
            questionText: "Concernant la topographie de la tête :",
            options: [
                "Les régions paires latérales de la face sont au nombre de quatre.",
                "La région frontale est médiane et convexe.",
                "Les cavités orbitaires et nasales font partie de la face.",
                "L'étage moyen de la face est appelé l'étage ethmoido-zygomatique.",
                "La glabelle est située entre le front et la bouche."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La région frontale est une région médiane et convexe de la tête. Les cavités orbitaires (yeux) et nasales (nez) sont des structures intégrales de la face. Les régions paires latérales de la face incluent les régions temporale, zygomatique, buccale et parotido-massétérine, pouvant être considérées comme quatre régions paires. La glabelle est située entre les arcades sourcilières, au niveau du front. L'étage moyen de la face n'est pas communément appelé étage ethmoido-zygomatique."
        },
        {
            questionText: "Concernant les os du crâne :",
            options: [
                "Le crâne est composé de 10 os soudés entre eux.",
                "Il y'a 4 os médians et impairs.",
                "La voûte du crâne est appelée calvaria.",
                "L'os pariétal fait partie des os pairs et médian.",
                "L'os temporal est impair."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le crâne est composé de 8 os (frontal, occipital, sphénoïde, ethmoïde - impairs et médians ; pariétaux et temporaux - pairs et latéraux). Il y a donc bien 4 os médians et impairs. La voûte du crâne est anatomiquement appelée la calvaria. L'os pariétal est un os pair et latéral. L'os temporal est un os pair."
        },
        {
            questionText: "Concernant les os du crâne :",
            options: [
                "L'os frontal comporte l'écaille qui est horizontale.",
                "L'ethmoïde participe à la formation des cavités orbitaires et des fosses nasales.",
                "L'os frontal participe uniquement a la formation de la calvaria.",
                "L'os tympanal fait partie du temporal.",
                "L'os occipital est un os de la voûte et la base du crâne."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "L'os ethmoïde est une pièce centrale qui contribue à la formation des parois médiales des cavités orbitaires et des fosses nasales. L'os occipital est un os important de la voûte et de la base du crâne. L'écaille de l'os frontal est verticale. L'os frontal participe à la calvaria et à la base du crâne (partie orbito-nasale). L'os tympanal est une partie de l'os temporal."
        },
        {
            questionText: "Concernant les sutures :",
            options: [
                "La suture lambdoïde se situe entre l'os pariétal, l'os occipital et l'os temporal.",
                "La suture sagittale peut se voir uniquement sur la vue latérale du crâne.",
                "Toutes les sutures sont paires.",
                "La suture coronale se situe entre l'os frontal, les os pariétaux.",
                "Chez l'adulte la jonction des sutures coronales et sagittales forment le lambda."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "La suture lambdoïde est située entre l'os pariétal, l'os occipital et l'os temporal (à l'astérion). La suture coronale se situe entre l'os frontal et les deux os pariétaux. La suture sagittale est médiane, donc visible sur la vue supérieure. Toutes les sutures ne sont pas paires (par exemple, la sagittale est impaire). La jonction des sutures coronale et sagittale forme le bregma, pas le lambda (qui est la jonction sagittale et lambdoïde)."
        },
        {
            questionText: "Le massif facial :",
            options: [
                "La mâchoire supérieure est formée par 6 os impairs et 1 os pair.",
                "Le vomer est un os médian.",
                "Le vomer forme la partie postéro-inférieure de la face latérale des fosses nasales.",
                "L'os nasal est un os triangulaire, allongé de haut en bas.",
                "La face postéro-médiale de l'os nasal est sous cutané."
            ],
            correctOptionIndexes: [1],
            explanation: "Le vomer est un os médian, impair, qui participe à la cloison nasale. Le vomer forme la partie postéro-inférieure de la *cloison* nasale, pas de la face latérale des fosses nasales. La mâchoire supérieure est formée par les maxillaires (pairs), os palatins (pairs), zygomatiques (pairs), lacrymaux (pairs), nasaux (pairs), cornets inférieurs (pairs), et vomer (impair) et ethmoïde (partiellement). Donc, principalement des os pairs. L'os nasal est pair."
        },
        {
            questionText: "Le massif facial :",
            options: [
                "Le maxillaire présente deux processus et un corps.",
                "Le sinus maxillaire de l'os maxillaire est creusé au niveau de son processus alvéolaire.",
                "L'os palatin présente la forme d'un L avec trois lames.",
                "L'os palatin est situé entre l'éthmoïde en avant et le maxillaire en arrière.",
                "La lame horizontale du palatin fait partie du palais osseux."
            ],
            correctOptionIndexes: [4],
            explanation: "La lame horizontale de l'os palatin forme la partie postérieure du palais osseux. Le maxillaire présente un corps et quatre processus (frontal, zygomatique, palatin, alvéolaire). Le sinus maxillaire est creusé dans le corps du maxillaire. L'os palatin a une forme de L avec deux lames (horizontale et verticale). L'os palatin est situé en arrière du maxillaire, et en arrière et latéralement à l'ethmoïde."
        },
        {
            questionText: "La mandibule :",
            options: [
                "C'est un os impair, médian et asymétrique.",
                "Sa face externe présente la ligne mylo-hyoïdienne.",
                "Sa face interne présente la lingula mandibulaire.",
                "Le bord supérieur de la branche mandibulaire présente trois surfaces articulaires.",
                "L'angle formé entre son corps et sa branche s'appelle : gonion."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "La mandibule est un os impair, médian et symétrique. L'angle formé entre le corps et la branche de la mandibule est appelé le gonion. La face interne de la branche mandibulaire présente la lingula (épine de Spix) et le sillon mylo-hyoïdien. Le bord supérieur de la branche mandibulaire présente deux processus (condylien et coronoïde) mais une seule surface articulaire (le condyle)."
        },
        {
            questionText: "Le massif facial :",
            options: [
                "Le cornet inférieur est situé au niveau des faces latérales des masses latérales de l'éthmoïde.",
                "Le cornet inférieur un repli osseux disposé dans l'axe des fosses nasales.",
                "Le cornet inférieur participe à la formation de la cloison des fosses nasales.",
                "L'os lacrymal fait partie de la paroi médiale des cavités orbitaires.",
                "Le zygomatique assure la jonction entre le crâne et la face médialement."
            ],
            correctOptionIndexes: [3],
            explanation: "L'os lacrymal est un os de petite taille qui participe à la formation de la paroi médiale des cavités orbitaires. Le cornet inférieur est un os facial distinct (non une partie de l'éthmoïde) et forme un repli sur la paroi latérale des fosses nasales, augmentant la surface et dirigeant le flux d'air. Il ne fait pas partie de la cloison nasale. L'os zygomatique est latéral et assure la jonction crânio-faciale latéralement."
        },
        {
            questionText: "Concernant les fontanelles :",
            options: [
                "La fontanelle astérique est située en avant de la fontanelle ptérique.",
                "La fontanelle lambdatique est la plus importante.",
                "La fontanelle bregmatique se situe en avant, entre les os frontal et pariétal.",
                "La fontanelle astérique a une forme étoilée, visible sur une vue supérieure du crâne.",
                "La fontanelle lambdatique est située aux confluents des sutures sagittales et pariéto-occipitale."
            ],
            correctOptionIndexes: [2],
            explanation: "La fontanelle bregmatique (antérieure) est médiane et située entre l'os frontal et les deux os pariétaux. La fontanelle lambdatique (postérieure) est située entre les deux pariétaux et l'occipital. La fontanelle astérique est à la jonction du pariétal, temporal et occipital. La fontanelle bregmatique est la plus grande à la naissance. Les fontanelles astériques et ptériques sont latérales. La fontanelle astérique n'a pas une forme étoilée (c'est la ptérique qui peut avoir cette forme ou être une zone) et n'est pas visible sur une vue supérieure."
        },
        {
            questionText: "Concernant la base du crâne :",
            options: [
                "L'étage antérieur est formé par l'os ethmoïde, l'os frontal.",
                "L'étage antérieur est limité en arrière par les grandes ailes du sphénoïde.",
                "L'étage moyen est limité en arrière par la face antérieure du rocher de l'os temporal.",
                "L'étage postérieur est sphéno-occipito-temporal.",
                "La base du crâne est perforée par des foramens ou trous."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "L'étage antérieur de la base du crâne est formé par l'os frontal (parties orbitaires) et l'os ethmoïde. L'étage antérieur est limité en arrière par le bord postérieur des petites ailes du sphénoïde et la gouttière chiasmatique. L'étage moyen est limité en arrière par la face antérieure du rocher (partie pétreuse de l'os temporal). L'étage postérieur est formé par l'occipital et une partie du temporal. La base du crâne est effectivement criblée de nombreux foramens pour le passage des nerfs crâniens et des vaisseaux."
        },
        {
            questionText: "Parmi les os suivants, lequel n'est visible que sur la face latérale du crâne :",
            options: [
                "Le frontal.",
                "Le pariétal.",
                "L'ethmoïde.",
                "Le temporal.",
                "L'occipital."
            ],
            correctOptionIndexes: [2],
            explanation: "L'os ethmoïde est un os situé profondément à la base du crâne, entre le frontal et le sphénoïde, et participe aux cavités nasales et orbitaires, mais n'est pas visible sur une vue latérale externe du crâne. Le frontal, pariétal, temporal et occipital sont tous visibles sur une vue latérale (partiellement ou entièrement)."
        },
        {
            questionText: "Concernant la topographie de la tête :",
            options: [
                "Les régions paires et latérales de la face sont au nombre de quatre.",
                "La région frontale est médiane et concave.",
                "Les cavités nasales et sinus maxillaires font partie de la face.",
                "L'étage moyen de la face est appelé l'étage ethmoïdo-zygomatique.",
                "La glabelle est située entre le front et la bouche."
            ],
            correctOptionIndexes: [2],
            explanation: "Les cavités nasales et les sinus maxillaires sont des structures importantes de la face. La région frontale est médiane et convexe. La glabelle est située entre les arcades sourcilières. Les régions paires latérales de la face peuvent être considérées comme plus de quatre selon les classifications."
        },
        {
            questionText: "Concernant la topographie de la région cervicale :",
            options: [
                "Limité en haut et en avant le bord supérieur de la mandibule et postérieur de sa branche montante.",
                "Présente à décrire 4 compartiments.",
                "Le compartiment Vasculaire, c'est la gouttière jugulo-carotidienne contenant l'artère carotide externe, veine jugulaire antérieure et le nerf vague.",
                "La région sous-hyoïdienne médiane, c'est région thyroïdienne.",
                "L'espace infra-parotidien est situé entre C2 et C3."
            ],
            correctOptionIndexes: [3],
            explanation: "La région sous-hyoïdienne médiane correspond à la région thyroïdienne et est située sous l'os hyoïde. La région cervicale est limitée en haut par le bord inférieur de la mandibule. La gouttière jugulo-carotidienne contient l'artère carotide *commune* (puis ses branches), la veine jugulaire *interne* et le nerf vague. L'espace infra-parotidien n'est pas situé entre C2 et C3."
        },
        {
            questionText: "Généralités sur la tête osseuse :",
            options: [
                "Le crâne est séparé du massif facial par la base.",
                "Seuls les os de la face sont creusés de sinus.",
                "Le massif facial supérieur est immobile.",
                "Tous les organes de sens sont situés au niveau de cette tête osseuse.",
                "Le pariétal est l'unique os pair du crâne qui appartient à la base."
            ],
            correctOptionIndexes: [2],
            explanation: "Le massif facial supérieur est un ensemble d'os fixes et immobiles, à l'exception de la mandibule. Le crâne est séparé du massif facial par une ligne conventionnelle. Des os du crâne (frontal, sphénoïde, ethmoïde, temporal) sont aussi creusés de sinus. Certains organes des sens (par exemple le toucher par la peau du corps entier) ne sont pas uniquement situés dans la tête. Le pariétal est un os de la voûte, pas de la base du crâne."
        },
        {
            questionText: "L'os frontal :",
            options: [
                "Présente un segment horizontale naso-orbitaire.",
                "Présente deux faces une endocrânienne et une exocrânienne.",
                "L'apophyse orbitaire externe s'articule avec le maxillaire.",
                "La face endocrânienne de l'écaille présente les bosses frontaux.",
                "C'est une pièce qui ne comporte pas de sinus."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'os frontal présente une partie verticale (écaille) et une partie horizontale (orbito-nasale). Il possède une face endocrânienne (interne) et une face exocrânienne (externe). L'apophyse zygomatique de l'os frontal s'articule avec l'os zygomatique, pas le maxillaire. Les bosses frontales sont sur la face exocrânienne. L'os frontal contient les sinus frontaux."
        },
        {
            questionText: "L'os ethmoïde :",
            options: [
                "Il s'articule en avant avec le sphénoïde.",
                "Il est formé d'un corps et de deux masses latérales.",
                "C'est une pièce maîtresse des fosses nasales.",
                "La partie endocrânienne de la lame verticale s'appelle lame perpendiculaire.",
                "La face externe des masses latérales s'appelle l'os planum et fait partie de l'orbite."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "L'os ethmoïde est une pièce maîtresse dans la formation des fosses nasales et des cavités orbitaires. La face externe de ses masses latérales est appelée la lame orbitaire (ou os planum) et forme une partie de la paroi médiale de l'orbite. L'ethmoïde s'articule en arrière avec le sphénoïde. Il est formé d'une lame verticale, d'une lame horizontale et de deux masses latérales. La lame verticale comprend une partie endocrânienne (crista galli) et une partie inférieure (lame perpendiculaire qui forme une partie de la cloison nasale)."
        },
        {
            questionText: "L'os sphénoïde :",
            options: [
                "Unique pièce du crâne qui s'articule avec toutes les autres pièces.",
                "Il appartient à la base et à la voûte du crâne.",
                "Les apophyses ptérygoïdes sont endocrâniennes.",
                "Le corps du sphénoïde donne attache uniquement aux petites ailes.",
                "L'espace entre les petites et les grandes ailes s'appelle fente sphénoïdale."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "L'os sphénoïde est un os central qui s'articule avec tous les autres os du crâne. L'espace entre les petites et grandes ailes du sphénoïde est la fissure orbitaire supérieure (ou fente sphénoïdale), qui permet le passage de nerfs et vaisseaux importants. Les apophyses ptérygoïdes sont exocrâniennes. Le corps du sphénoïde donne attache aux petites ailes, aux grandes ailes et aux processus ptérygoïdes. Il appartient principalement à la base du crâne, mais les grandes ailes contribuent à la voûte latéralement."
        },
        {
            questionText: "L'os temporal :",
            options: [
                "S'articule avec le frontal.",
                "C'est un os appartenant uniquement à la voûte.",
                "Comporte une écaille, une pyramide pétreuse et un os tympanal.",
                "De l'écaille se détache l'apophyse zygomatique.",
                "Il abrite l'oreille externe, moyenne et interne."
            ],
            correctOptionIndexes: [2, 3, 4],
            explanation: "L'os temporal est composé de plusieurs parties, dont l'écaille, la partie pétreuse (pyramide pétreuse) et la partie tympanale. De l'écaille se détache le processus zygomatique qui s'articule avec l'os zygomatique. Il abrite l'oreille moyenne et interne (dans la partie pétreuse) et contribue à l'oreille externe par le conduit auditif externe. Il s'articule avec le pariétal, l'occipital, le sphénoïde et le zygomatique, mais pas directement le frontal de manière significative pour les articulations principales de la voûte. Il appartient à la base et à la voûte."
        },
        {
            questionText: "L'os pariétal :",
            options: [
                "Os plat de la voûte crânienne.",
                "Porte sur sa face exocrânienne les sillons de l'artère méningée moyenne.",
                "Il existe deux lignes temporale supérieure et inférieure sur la vue exocrânienne étendu jusqu'au frontal.",
                "Il forme avec le frontal la suture sagittale.",
                "Les deux os pariétaux se réunissent au niveau de la suture coronale."
            ],
            correctOptionIndexes: [0],
            explanation: "L'os pariétal est un os plat de la voûte crânienne. Sa face endocrânienne (interne) est marquée par les sillons de l'artère méningée moyenne. Sa face exocrânienne (externe) présente les lignes temporales supérieure et inférieure, qui ne s'étendent pas jusqu'au frontal. Les deux os pariétaux se réunissent par la suture sagittale. Le pariétal s'unit avec le frontal par la suture coronale."
        },
        {
            questionText: "L'os occipital :",
            options: [
                "A une position postérieure au niveau de la boîte crânienne.",
                "Il s'articule avec le pariétal, le temporal et le sphénoïde.",
                "Il est formé uniquement d'un corps et d'une écaille.",
                "La face endocrânienne des masses latérales présente des condyles.",
                "C'est la pièce crânienne qui s'articule avec la première vertèbre cervicale."
            ],
            correctOptionIndexes: [0, 1, 4],
            explanation: "L'os occipital est l'os postérieur de la boîte crânienne. Il s'articule avec les os pariétaux (suture lambdoïde), les os temporaux et l'os sphénoïde. Il est la pièce crânienne qui s'articule avec la première vertèbre cervicale (atlas) par ses condyles occipitaux. Il est formé d'une écaille, d'une partie basilaire et de deux masses latérales. Les condyles sont sur la face exocrânienne des masses latérales."
        },
        {
            questionText: "L'os mandibule :",
            options: [
                "Est l'unique pièce du massif facial inférieur.",
                "Elle est formée de deux branches montantes et d'un corps.",
                "Le condyle mandibulaire est situé au niveau du corps.",
                "L'épine de Spix est retrouvée sur la face externe de la branche montante.",
                "Le foramen du canal dentaire inférieure est délimité en arrière par l'épine de Spix."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La mandibule est l'unique os mobile du massif facial inférieur. Elle est formée d'un corps et de deux branches montantes (ramus). Le condyle mandibulaire est situé au sommet de la branche montante (processus condylien), pas au niveau du corps. L'épine de Spix est située sur la face interne de la branche montante. Le foramen du canal dentaire inférieur est situé en arrière de l'épine de Spix, mais l'épine est une saillie qui le borde, pas qui le délimite en arrière au sens strict."
        },
        {
            questionText: "L'os maxillaire :",
            options: [
                "Est formé d'un corps et de quatre processus.",
                "Le processus palatin forme le tiers postérieur du palais osseux.",
                "Le maxillaire s'articule avec le temporal.",
                "Le processus montant s'articule avec le frontal.",
                "L'ouverture du sinus maxillaire est comblée par le cornet supérieur."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "L'os maxillaire est formé d'un corps et de quatre processus (frontal/montant, zygomatique, palatin, alvéolaire). Son processus montant s'articule avec l'os frontal. Le processus palatin forme les deux tiers antérieurs du palais osseux. Le maxillaire s'articule avec de nombreux os faciaux et crâniens, mais pas directement avec le temporal. L'ouverture du sinus maxillaire est comblée par le cornet inférieur et le processus unciforme de l'ethmoïde."
        },
        {
            questionText: "A propos de l'os Frontal :",
            options: [
                "Os paire, médian et symétrique.",
                "Situé au-dessus des cavités orbitaires.",
                "Il participe à la formation de la voûte du crâne.",
                "Articulaire en arrière et en haut avec le sphénoïde.",
                "Situé au-dessus de l'os ethmoïde."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "L'os frontal est un os impair, médian et symétrique. Il est situé au-dessus des cavités orbitaires et participe à la formation de la voûte et de la base du crâne. Il est également situé au-dessus de l'os ethmoïde, avec lequel il s'articule. Il s'articule en arrière et en haut avec les pariétaux, et avec le sphénoïde mais pas \"en haut\"."
        },
        {
            questionText: "A propos de la partie verticale l'os frontal :",
            options: [
                "Dite frontale par sa face interne.",
                "Limité en bas par la crête orbito-nasale.",
                "Présente la glabelle à sa face externe.",
                "Présente sur la ligne médiane la fissure ethmoïdale.",
                "Articulaire en haut avec l'os pariétal."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La partie verticale (écaille) de l'os frontal est limitée en bas par la crête orbito-nasale. Sa face externe présente la glabelle (saillie médiane entre les arcades sourcilières). La fissure ethmoïdale est sur la partie horizontale. La partie verticale s'articule latéralement avec les pariétaux (suture coronale), mais pas \"en haut\"."
        },
        {
            questionText: "A propos de la partie horizontale de l'os frontal :",
            options: [
                "Appartient à la base du crâne.",
                "Présente de part et d'autre de la ligne médiane les fosses frontales.",
                "Participe à la formation du toit de l'orbite.",
                "Présente la suture métopique.",
                "Présente les lignes courbes temporales."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La partie horizontale de l'os frontal (partie orbito-nasale) appartient à la base du crâne et participe à la formation du toit des orbites. La suture métopique (entre les deux moitiés du frontal) est généralement fusionnée chez l'adulte et est sur la partie verticale. Les lignes courbes temporales sont sur l'os pariétal et la partie latérale de l'écaille frontale."
        },
        {
            questionText: "A propos de l'os Ethmoïde :",
            options: [
                "La lame perpendiculaire forme à elle seule la cloison nasale.",
                "Les cellules ethmoïdales, cavités de la lame horizontale.",
                "Les masses latérales prolongent par leur face supérieure la lame criblée.",
                "Os planum, élément osseux de la lame verticale.",
                "Le trou ethmoïdal appartient à la face supérieure de la lame horizontale."
            ],
            correctOptionIndexes: [4],
            explanation: "L'os ethmoïde est complexe. Sa lame perpendiculaire participe à la cloison nasale, mais ne la forme pas seule (le vomer et le cartilage du septum contribuent). Les cellules ethmoïdales sont des cavités dans les masses latérales. Les masses latérales sont situées latéralement à la lame criblée (lame horizontale). L'os planum (lame orbitaire) est la face latérale des masses latérales, pas un élément de la lame verticale. Les trous ethmoïdaux sont sur la lame criblée (horizontale)."
        },
        {
            questionText: "A propos de l'os pariétal :",
            options: [
                "Sur la ligne courbe temporale supérieure s'attache le muscle temporal.",
                "La tubérosité pariétale appartenant à face endocrânienne.",
                "Il est situé au-dessus de l'os temporal.",
                "Il s'unit avec l'occipital par la suture coronale.",
                "Il s'unit avec le frontal par la suture lambdoïde."
            ],
            correctOptionIndexes: [2],
            explanation: "L'os pariétal est situé au-dessus de l'os temporal. La ligne temporale inférieure, et non supérieure, donne attache au muscle temporal. La tubérosité pariétale est sur la face exocrânienne. Le pariétal s'unit avec l'occipital par la suture lambdoïde et avec le frontal par la suture coronale."
        },
        {
            questionText: "A propos de l'os Ethmoïde :",
            options: [
                "Os impair, médian et symétrique.",
                "Situé au-dessous de l'os frontal.",
                "Il participe à la formation de la voûte du crâne.",
                "Articulaire avec l'os Vomer.",
                "Il est formé de trois parties."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "L'os ethmoïde est un os impair, médian et symétrique. Il est situé en arrière et au-dessous de l'os frontal, s'articulant avec lui. Il est également articulaire avec le vomer (pour la cloison nasale). Il est formé de trois parties principales : la lame horizontale (criblée), la lame verticale (crista galli et lame perpendiculaire) et les deux masses latérales. Il ne participe pas à la voûte du crâne."
        },
        {
            questionText: "A propos de l'os Ethmoïde :",
            options: [
                "L'apophyse crista galli, processus de la lame horizontale.",
                "La lame criblée appartient à la lame verticale.",
                "La lame horizontale est strictement endocrânienne.",
                "Lame perpendiculaire est de situation exocrânienne.",
                "Les masses latérales forment par leur face latérale la paroi médiale des fosses nasales."
            ],
            correctOptionIndexes: [2],
            explanation: "La lame horizontale (criblée) est strictement endocrânienne. L'apophyse crista galli est un processus de la lame verticale, pas horizontale. La lame perpendiculaire (partie de la lame verticale) est interne (forme une partie de la cloison nasale). Les masses latérales forment par leur face *latérale* la paroi médiale de l'orbite, et par leur face *médiale* la paroi latérale des fosses nasales (avec les cornets)."
        },
        {
            questionText: "A propos du crâne osseux :",
            options: [
                "Il est formé de huit os.",
                "Tous les os qui le forment sont articulés entre eux.",
                "La voûte crânienne est formée du frontal, pariétal et occipital.",
                "Il renferme tout le système nerveux central.",
                "À la base du crâne est appendu le massif facial."
            ],
            correctOptionIndexes: [0, 1, 2, 4],
            explanation: "Le crâne est formé de 8 os (frontal, occipital, sphénoïde, ethmoïde, 2 pariétaux, 2 temporaux) qui sont tous articulés entre eux (par des sutures ou synchondroses). La voûte crânienne est principalement formée par le frontal, les pariétaux et l'écaille de l'occipital. Il renferme l'encéphale (cerveau, cervelet, tronc cérébral), mais pas toute la partie du système nerveux central qui comprend aussi la moelle épinière. Le massif facial est appendu à la base du crâne."
        },
        {
            questionText: "A propos de l'os pariétal :",
            options: [
                "Os plat, pair et asymétrique.",
                "Il appartient à la voûte crânienne.",
                "Il est formé de deux parties.",
                "Il est articulaire avec son homologue formant la suture sagittale.",
                "Est un os à deux faces."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "L'os pariétal est un os plat, pair et symétrique, appartenant à la voûte crânienne. Il est articulaire avec son homologue (l'autre pariétal) formant la suture sagittale. Il présente deux faces (externe et interne). Il est considéré comme une seule pièce osseuse principale."
        },
        {
            questionText: "A propos de l'os pariétal :",
            options: [
                "Il forme à lui seul la calvaria.",
                "Il présente la gouttière du sinus sagittal sur sa face exocrânienne.",
                "Il présente un angle antéro-inférieur, sphénoïdal.",
                "Il présente un angle postéro-inférieur, mastoïdien.",
                "Il participe à la formation de la base du crâne."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "L'os pariétal présente plusieurs angles, dont un angle antéro-inférieur (sphénoïdal ou ptérion) et un angle postéro-inférieur (mastoïdien ou astérion). Il ne forme pas à lui seul la calvaria (qui inclut aussi le frontal et l'occipital). La gouttière du sinus sagittal supérieur se trouve sur sa face endocrânienne. Il appartient à la voûte, pas à la base du crâne."
        },
        {
            questionText: "A propos de l'os Sphénoïdal :",
            options: [
                "Os impair, symétrique de la voûte crânienne.",
                "Il est situé en arrière du frontal et de l'ethmoïde.",
                "Seul os articulaire avec tous les du crâne.",
                "Il est formé de trois pièces osseuses.",
                "Situé en avant et au-dessous de l'occipital."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "L'os sphénoïde est un os impair, symétrique, situé à la base du crâne, en arrière du frontal et de l'ethmoïde, et en avant et au-dessous de l'occipital. C'est le seul os du crâne qui s'articule avec tous les autres os crâniens. Il est formé d'un corps, de deux grandes ailes, et de deux petites ailes (ce qui peut être considéré comme 5 parties principales, mais l'option D dit 3 pièces osseuses). Plus précisément, il est formé d'un corps, de deux grandes ailes et de deux petites ailes, et des processus ptérygoïdes."
        },
        {
            questionText: "A propos du corps de l'os Sphénoïde :",
            options: [
                "Sur la face supérieure se trouve la selle turcique.",
                "Sa face inférieure présente l'orifice d'entrée du sinus sphénoïdal.",
                "Sa face postérieure est articulaire avec l'occipital.",
                "Les faces latérales donnent attaches en avant et en haut aux grandes ailes.",
                "La face antérieure porte la crête sphénoïdale articulaire avec le vomer."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "La face supérieure du corps du sphénoïde présente la selle turcique, qui loge l'hypophyse. Sa face postérieure s'articule avec l'os occipital (partie basilaire). La face antérieure porte la crête sphénoïdale, qui s'articule avec le vomer. L'orifice du sinus sphénoïdal est sur sa face antérieure. Les grandes ailes s'attachent aux faces latérales, mais la description \"en avant et en haut\" est imprécise."
        },
        {
            questionText: "A propos du sphénoïde :",
            options: [
                "Les racines d'implantation des grandes ailes délimitent le canal optique.",
                "Entre les grandes et les petites ailes s'ouvre la fente sphénoïdale.",
                "Les processus ptérygoïdes, lames osseuses implantées à la face inférieure du corps.",
                "Sinus, cavités creusées au niveau du corps de l'os.",
                "Les processus ptérygoïdes délimitent entre eux la fosse ptérygoïde."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "La fente sphénoïdale (fissure orbitaire supérieure) s'ouvre entre les grandes et les petites ailes du sphénoïde. Les processus ptérygoïdes sont des lames osseuses implantées à la face inférieure du corps du sphénoïde. Le corps de l'os sphénoïde est creusé par les sinus sphénoïdaux. Les racines des petites ailes délimitent le canal optique. Les processus ptérygoïdes délimitent entre eux la fosse ptérygoïdienne."
        },
        {
            questionText: "A propos de l'os occipital :",
            options: [
                "C'est un os de la base du crâne.",
                "Occupe la partie postérieure et supérieure du crâne.",
                "Présente un corps situé en arrière.",
                "Il est creusé d'un large orifice, le foramen magnum.",
                "La partie squameuse est l'élément le plus postérieur."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "L'os occipital est un os de la base du crâne. Il est creusé d'un large orifice, le foramen magnum, qui permet le passage de la moelle allongée. La partie squameuse (écaille) est la partie la plus postérieure de l'os occipital. Il occupe la partie postérieure et inférieure du crâne, pas supérieure. Son corps (partie basilaire) est situé en avant du foramen magnum."
        },
        {
            questionText: "Concernant l'os occipital :",
            options: [
                "Le tubercule jugulaire occupe la face exocrânienne des parties latérales.",
                "Les condyles occipitaux surfaces articulaires avec la vertèbre…….",
                "La gouttière basilaire se trouve sur la face interne du corps.",
                "L'orifice du canal condylien antérieur se trouve sur les faces latérales.",
                "Les fosses cérébrales et cérébelleuses occupent la face interne du corps de l'os."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Les condyles occipitaux sont des surfaces articulaires situées sur la face exocrânienne des parties latérales, qui s'articulent avec l'atlas (première vertèbre cervicale). La gouttière basilaire se trouve sur la face interne du corps (partie basilaire) de l'occipital. Le tubercule jugulaire est sur la face endocrânienne des parties latérales. L'orifice du canal condylien antérieur se trouve dans la fosse condylienne antérieure, à la base des condyles. Les fosses cérébrales et cérébelleuses sont sur la face endocrânienne de l'écaille de l'os occipital."
        },
        {
            questionText: "A propos de l'os temporal :",
            options: [
                "Os pair, symétrique.",
                "Situé en arrière et en dedans du sphénoïde.",
                "Il est formé de trois pièces osseuses.",
                "Il contient l'appareil de l'audition et de la vision.",
                "Il participe à la formation de la voûte du crâne en s'articulant avec le pariétal."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "L'os temporal est un os pair et symétrique. Il est formé de trois parties principales : l'écaille, la partie pétreuse (rocher) et la partie tympanale. Il contient l'appareil de l'audition et de l'équilibre (oreille moyenne et interne). Il participe à la formation de la voûte du crâne en s'articulant avec l'os pariétal (suture pariéto-squameuse). Il est situé latéralement et en dessous du sphénoïde."
        },
        {
            questionText: "La paroi latérale de la fosse nasale comporte les éléments suivants :",
            options: [
                "La tâche vasculaire.",
                "Le sinus piriforme.",
                "Les cornets et les méats.",
                "Le vomer.",
                "La rampe vestibulaire."
            ],
            correctOptionIndexes: [2],
            explanation: "La paroi latérale des fosses nasales est complexe et comporte les cornets nasaux (supérieur, moyen, inférieur) et les méats correspondants. Le vomer fait partie de la cloison nasale (paroi médiale)."
        },
        {
            questionText: "A propos de la pyramide pétreuse du temporal :",
            options: [
                "Partie de l'os à disposition strictement endocrânienne.",
                "Présente la styloïde à sa face antéro-supérieure.",
                "Présente le méat acoustique interne à sa face postéro-supérieure.",
                "À sa face postéro-supérieure se trouve la fossette trigéminale.",
                "Sur sa face postéro-inférieure se trouve le trou stylo-mastoïdien."
            ],
            correctOptionIndexes: [2],
            explanation: "La pyramide pétreuse (rocher) du temporal est une partie de l'os qui abrite l'oreille interne. Sa face postéro-supérieure présente le méat acoustique interne (pour les nerfs facial et vestibulo-cochléaire). Le processus styloïde est sur la face inférieure/externe. La fossette trigéminale est sur la face antéro-supérieure. Le trou stylo-mastoïdien est sur la face exocrânienne, entre le processus styloïde et le processus mastoïde."
        },
        {
            questionText: "A propos de l'os temporal :",
            options: [
                "Le sillon du sinus pétreux supérieur se trouve sur le rocher.",
                "Le processus mastoïde appartient à la partie écailleuse.",
                "L'os tympanal forme les parois du conduit auditif externe.",
                "L'apophyse vaginale appartient à l'os tympanal.",
                "Le processus zygomatique occupe la face interne de l'écaille."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Le sillon du sinus pétreux supérieur est situé sur le bord supérieur de la pyramide pétreuse (rocher) de l'os temporal. L'os tympanal forme les parois antérieure, inférieure et postérieure du conduit auditif externe (la paroi supérieure est formée par l'écaille). Le processus mastoïde est une partie distincte de l'os temporal, en arrière de l'écaille et du rocher. Le processus zygomatique se détache de la face externe de l'écaille."
        },
        {
            questionText: "A propos de l'écaille de l'os occipital :",
            options: [
                "Présente 2 faces, 2 bords et 2 angles.",
                "Le sillon du sinus sagittal appartient à la face endocrânienne.",
                "La fossette vermienne, bifurcation la crête occipitale externe.",
                "Elle présente deux bords mastoïdiens.",
                "L'astérion, jonction entre le bord lambdoïde et mastoïdien."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "L'écaille de l'os occipital présente une face endocrânienne qui est marquée par le sillon du sinus sagittal supérieur et par la protubérance occipitale interne. L'astérion est la jonction entre le bord lambdoïde (articulation avec le pariétal) et le bord mastoïdien (articulation avec le temporal). Elle présente deux faces (externe et interne), plusieurs bords (lambdoïdes, mastoïdiens) et angles. La crête occipitale externe n'est pas une bifurcation."
        },
        {
            questionText: "Cochez la ou les réponses justes : Vue supérieure du crâne",
            options: [
                "Os Frontal.",
                "Os sphénoïdal.",
                "Os occipital.",
                "Fontanelle lambdoïde (antérieure).",
                "Suture coronale."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "Sur une vue supérieure du crâne, on observe l'os frontal en avant, les deux os pariétaux latéralement, et l'écaille de l'os occipital en arrière. La suture coronale est visible entre le frontal et les pariétaux, et la suture sagittale entre les deux pariétaux. La fontanelle lambdoïde est postérieure. Le sphénoïde est principalement visible sur la base et les faces latérales, moins sur une vue strictement supérieure."
        },
        {
            questionText: "Ces propositions concernent L’Os frontal :",
            options: [
                "Est un os pair médian et symétrique.",
                "La glabelle est une saillie médiane de sa partie frontale.",
                "L'incisure ethmoïdale appartient à la partie orbito-nasale.",
                "Il présente une partie verticale orbito-nasale.",
                "Il est articulaire par le segment supérieur de son bord circonférentiel avec l’os temporal."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "L'os frontal est un os impair, médian et symétrique. La glabelle est une saillie médiane visible sur sa partie frontale (écaille). La partie orbito-nasale de l'os frontal présente l'incisure ethmoïdale, où s'encastre l'os ethmoïde. La partie verticale est l'écaille, et la partie horizontale est orbito-nasale. Il ne s'articule pas directement avec le temporal par le segment supérieur de son bord circonférentiel."
        },
        {
            questionText: "Ces propositions concernent l'os Sphénoïde :",
            options: [
                "Il est situé en avant du temporal et du pariétal.",
                "La selle turcique où loge la glande pituitaire se situe à la face supérieure de son corps.",
                "Est un os articulaire avec tous les os du crâne.",
                "Il présente deux expansions bilatérales dites processus ptérygoïdes.",
                "Articulaire par la face postérieure de son corps avec l'os occipital."
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "L'os sphénoïde est un os central du crâne, situé en avant du temporal et du pariétal. La selle turcique, qui loge la glande pituitaire (hypophyse), se trouve sur la face supérieure de son corps. C'est l'os clé qui s'articule avec tous les autres os du crâne. Il présente deux expansions bilatérales appelées processus ptérygoïdes, et sa face postérieure s'articule avec l'os occipital. (Toutes les options sont correctes pour cette question)."
        },
        {
            questionText: "Ces propositions concernent l'os Temporal :",
            options: [
                "Le trou stylo-mastoïdien se situe sur la face exocrânienne du rocher.",
                "Le processus zygomatique appartient à la partie squameuse.",
                "Il est situé en arrière et en dedans du sphénoïde.",
                "Il est fait de trois parties.",
                "L'apophyse styloïde se situe sur la face endocrânienne du rocher."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Le trou stylo-mastoïdien est un orifice de la face exocrânienne du rocher (partie pétreuse) par lequel sort le nerf facial. Le processus zygomatique se détache de la partie squameuse de l'os temporal. L'os temporal est formé de trois parties principales : l'écaille (squameuse), la partie pétreuse (rocher) et la partie tympanale. Il est situé latéralement au sphénoïde, et non en arrière et en dedans. L'apophyse styloïde est une projection osseuse de la face inférieure du rocher, pas endocrânienne."
        },
        {
            questionText: "La fosse crânienne antérieure présente, les orifices suivants :",
            options: [
                "Les trous de la lame criblée de l'ethmoïde.",
                "La fissure orbitaire supérieure.",
                "Le canal optique.",
                "Le foramen épineux.",
                "Le foramen jugulaire."
            ],
            correctOptionIndexes: [0],
            explanation: "La fosse crânienne antérieure est principalement occupée par les lobes frontaux du cerveau. Elle est caractérisée par la présence de la lame criblée de l'ethmoïde, percée de nombreux petits trous pour le passage des filets du nerf olfactif. La fissure orbitaire supérieure et le canal optique appartiennent à la fosse crânienne moyenne. Le foramen épineux et le foramen jugulaire sont également dans la fosse crânienne moyenne et postérieure, respectivement."
        },
        {
            questionText: "A propos de l'os Ethmoïde :",
            options: [
                "Est placé au-dessous du frontal.",
                "Contribue à la formation de l'étage moyen de la base du crâne.",
                "C'est un os pneumatique, creusé de demi-cellules qui s'ouvrent dans la base du crâne.",
                "Il présente une lame verticale ou lame criblée.",
                "Il présente des masses latérales appelées labyrinthes éthmoïdaux."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "L'os ethmoïde est placé au-dessous de l'os frontal et en avant du sphénoïde. Il présente des masses latérales, appelées labyrinthes ethmoïdaux, qui contiennent les cellules ethmoïdales (sinus ethmoïdaux). Il contribue à l'étage antérieur de la base du crâne, pas au moyen. Sa lame horizontale est la lame criblée, et sa lame verticale est la lame perpendiculaire. C'est un os pneumatisé, mais la description des ouvertures est imprécise."
        },
        {
            questionText: "Ces propositions concernent l'os Ethmoïde :",
            options: [
                "Est un os impair, médian et symétrique.",
                "La face médiale des masses latérales est dite os Planum.",
                "Il est situé en avant du sphénoïde et au-dessus du frontal.",
                "Apophyse crista-galli appartient à la lame verticale.",
                "Lame perpendiculaire contribue à la formation de la cloison nasale."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "L'os ethmoïde est un os impair, médian et symétrique. L'apophyse crista-galli appartient à la lame verticale de l'ethmoïde. La lame perpendiculaire de l'ethmoïde contribue à la formation de la cloison nasale. La face latérale des masses latérales est l'os planum (lame orbitaire), pas la face médiale. Il est situé en avant du sphénoïde et *en dessous* du frontal."
        },
        {
            questionText: "Ces propositions concernent l'os Pariétal :",
            options: [
                "Est un os pair, médian et asymétrique.",
                "Il est situé au-dessus du temporal et en avant de l'occipital.",
                "Il présente deux faces : verticale et horizontale.",
                "Son bord postérieur s'articule avec l'occipital formant la suture coronale.",
                "Son bord antérieur s'articule avec l'os frontal formant la suture lambdoïde."
            ],
            correctOptionIndexes: [1],
            explanation: "L'os pariétal est un os pair, latéral et symétrique. Il est situé au-dessus de l'os temporal et en avant de l'os occipital. Il présente deux faces (exocrânienne et endocrânienne). Son bord postérieur s'articule avec l'occipital formant la suture lambdoïde. Son bord antérieur s'articule avec l'os frontal formant la suture coronale."
        },
        {
            questionText: "A propos du crâne :",
            options: [
                "Formé par un ensemble d'os plats articulés entre eux.",
                "C’est une boîte osseuse renfermant l'encéphale.",
                "Il est constitué de 2 parties : la voûte et la base.",
                "Il répond au massif facial en avant et en bas.",
                "Il constitue avec le rachis le squelette axial du corps humain."
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "Le crâne est une boîte osseuse formée d'os plats articulés par des sutures, qui renferme et protège l'encéphale. Il est classiquement divisé en deux parties : la voûte (calvaria) et la base. Il est en relation avec le massif facial en avant et en bas, et constitue, avec le rachis (colonne vertébrale), le squelette axial du corps humain. (Toutes les options sont correctes pour cette question)."
        },
        {
            questionText: "Ces propositions concernent l'os Occipital :",
            options: [
                "Os pair et symétrique.",
                "La partie écailleuse de l'os ferme en arrière la boîte crânienne.",
                "Le bord lambdoïde s’articule avec l'os temporal.",
                "Les condyles, surfaces articulaires avec les cavités glénoïdes de l'axis.",
                "Il est situé en arrière et en dehors de l'os temporal."
            ],
            correctOptionIndexes: [1],
            explanation: "L'os occipital est un os impair et médian. La partie écailleuse de l'occipital ferme en arrière la boîte crânienne. Le bord lambdoïde s'articule avec les os pariétaux. Les condyles occipitaux s'articulent avec les masses latérales de l'atlas (première vertèbre cervicale), pas l'axis. Il est situé en arrière et médialement à l'os temporal."
        },
        {
            questionText: "Ces propositions concernent la base du crâne :",
            options: [
                "Le foramen déchiré appartient à l’étage antérieur.",
                "Formée par tous les os du crâne.",
                "La fosse crânienne antérieure est fronto-ethmoïdale.",
                "Le bord supérieur du rocher et la lame quadrilatère limite la fosse crânienne antérieure en arrière.",
                "La fissure orbitaire supérieure livre passage aux nerfs moteurs de l'œil."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "La fosse crânienne antérieure est principalement formée par l'os frontal et l'os ethmoïde. La fissure orbitaire supérieure, située entre la grande et la petite aile du sphénoïde, livre passage aux nerfs moteurs de l'œil (III, IV, VI) et au nerf ophtalmique (V1). Le foramen déchiré appartient à l'étage moyen de la base du crâne. La base du crâne n'est pas formée par *tous* les os du crâne, mais par une partie d'entre eux. Le bord postérieur des petites ailes du sphénoïde et le limbus sphénoïdal limitent la fosse antérieure en arrière. La lame quadrilatère fait partie du sphénoïde."
        },
        {
            questionText: "La voûte du crâne est formée des os suivants :",
            options: [
                "L'os frontal.",
                "L'os pariétal.",
                "L'os sphénoïdal.",
                "L'os temporal.",
                "L'os ethmoïdal."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La voûte du crâne (calvaria) est formée par l'os frontal, les deux os pariétaux et la partie squameuse de l'os occipital, ainsi que partiellement par la partie squameuse de l'os temporal. L'os sphénoïde et l'os ethmoïde sont principalement des os de la base du crâne."
        },
        {
            questionText: "A propos de la lame verticale de l'os Ethmoïde :",
            options: [
                "Participe entièrement à la formation de la cloison nasale.",
                "Divisé par la lame horizontale en deux parties ; supérieure et inférieure.",
                "La lame perpendiculaire est articulaire par son bord supérieur avec l'os Vomer.",
                "Sa partie inférieure est appelée apophyse crista-galli.",
                "Les faces latérales de sa partie inférieure sont creusées de sillons verticaux répondant aux filets du nerf olfactif."
            ],
            correctOptionIndexes: [1],
            explanation: "La lame verticale de l'ethmoïde est divisée par la lame horizontale (criblée) en deux parties : l'apophyse crista galli (supérieure, endocrânienne) et la lame perpendiculaire (inférieure, nasale). La lame perpendiculaire contribue à la cloison nasale, mais pas entièrement. L'apophyse crista galli est la partie supérieure. Les filets du nerf olfactif passent par la lame criblée, pas par des sillons sur la lame perpendiculaire."
        },
        {
            questionText: "A propos de la base du crâne :",
            options: [
                "Organisée en 3 fosses antérieure, moyenne et inférieure.",
                "Le méat acoustique interne, livre passage aux nerfs facial et auditif.",
                "Le nerf mandibulaire quitte le crâne par le foramen rond.",
                "L'exocrâne répond en avant au massif facial.",
                "La fosse crânienne moyenne est limitée, en avant par le bord postérieur des grandes ailes du sphénoïde."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Le méat acoustique interne, situé dans la pyramide pétreuse de l'os temporal, livre passage aux nerfs facial (VII) et vestibulo-cochléaire (VIII). L'exocrâne de la base du crâne est en relation antérieure avec le massif facial. La base du crâne est organisée en 3 fosses (antérieure, moyenne, postérieure), pas inférieure. Le nerf mandibulaire quitte le crâne par le foramen ovale, pas le foramen rond. La fosse crânienne moyenne est limitée en avant par le bord postérieur des petites ailes du sphénoïde."
        },
        {
            questionText: "Ces propositions concernent l'os Temporal :",
            options: [
                "La scissure de Glaser, appartenant au bord antérieur du rocher.",
                "L'os tympanal constitue les 4 parois du conduit auditif externe.",
                "L'apophyse vaginale, formation appartenant à la mastoïde.",
                "Le condyle temporal articulaire avec la mandibule appartient au segment basal du processus zygomatique.",
                "Le rocher présente une base orientée en dedans et en arrière."
            ],
            correctOptionIndexes: [0],
            explanation: "La scissure de Glaser est une fente située sur le bord antérieur du rocher. L'os tympanal forme les parois antérieure, inférieure et postérieure du conduit auditif externe (la paroi supérieure est formée par l'écaille). L'apophyse vaginale est une lame osseuse située à la base de l'apophyse styloïde, non de la mastoïde. Le condyle temporal (processus condylaire) est la partie articulaire de l'os temporal qui s'articule avec la mandibule, il fait partie de la racine postérieure du processus zygomatique. Le rocher a une base orientée latéralement et en arrière, et un sommet en avant et en dedans."
        },
        {
            questionText: "A propos de l'os pariétal :",
            options: [
                "La ligne courbe temporale supérieure marquant sa face externe, donne attache au muscle temporal.",
                "Sa face endocrânienne est marquée par des sillons de vaisseaux méningés moyens.",
                "Os plat, situé à la partie latérale de la calvaria.",
                "Articulaire avec son homologue par la suture sagittale.",
                "Il a un angle postéro supérieur mastoïdien."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "La face endocrânienne de l'os pariétal est marquée par les sillons des vaisseaux méningés moyens. C'est un os plat situé à la partie latérale de la calvaria (voûte crânienne) et il s'articule avec son homologue par la suture sagittale. La ligne temporale inférieure, et non supérieure, donne attache au muscle temporal. L'angle postéro-supérieur est le lambda, l'angle postéro-inférieur est le mastoïdien."
        },
        {
            questionText: "Ces propositions concernent l'os Frontal :",
            options: [
                "Occupe l'étage antérieur de la base du crâne.",
                "Les sinus frontaux, cavités pneumatiques creusées à la partie verticale de l'os.",
                "Formé de trois parties.",
                "Sa partie horizontale forme le plancher de l'orbite.",
                "Articulaire avec l'os temporal."
            ],
            correctOptionIndexes: [0],
            explanation: "L'os frontal occupe l'étage antérieur de la base du crâne par sa partie orbito-nasale. Ses sinus frontaux sont des cavités pneumatiques creusées principalement dans son écaille (partie verticale). L'os frontal est formé de deux parties (verticale et horizontale). Sa partie horizontale forme le toit de l'orbite, pas le plancher. Il s'articule avec les os nasaux, zygomatiques, ethmoïde, sphénoïde et pariétaux, mais pas directement avec le temporal par une articulation majeure."
        },
        {
            questionText: "Ces propositions concernent l'os Occipital :",
            options: [
                "Il occupe la partie postéro-supérieure du crâne.",
                "Le foramen magnum livre passage à la moelle allongée.",
                "La partie basilaire est située en arrière du foramen magnum.",
                "Le sillon du sinus sagittal se situe sur la face endocrânienne de l'écaille.",
                "La gouttière basilaire appartient, à la face exocrânienne du corps de l'os."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Le foramen magnum, un large orifice de l'os occipital, livre passage à la moelle allongée (partie du tronc cérébral). Le sillon du sinus sagittal supérieur est situé sur la face endocrânienne de l'écaille de l'occipital. L'os occipital occupe la partie postéro-inférieure du crâne. La partie basilaire est située en avant du foramen magnum. La gouttière basilaire est sur la face endocrânienne du corps (partie basilaire) de l'os."
        },
        {
            questionText: "Ces propositions concernent l'os Sphénoïde :",
            options: [
                "Os appartenant à la voûte crânienne.",
                "Os impair et symétrique.",
                "Entre les petites et les grandes ailes s'ouvre le canal optique.",
                "Le sinus sphénoïdal, cavité creusée dans le corps de l'os.",
                "Il est situé en arrière et au-dessous du pariétal."
            ],
            correctOptionIndexes: [3],
            explanation: "Le sinus sphénoïdal est une cavité creusée dans le corps de l'os sphénoïde. L'os sphénoïde est un os impair et symétrique, appartenant principalement à la base du crâne (mais les grandes ailes peuvent contribuer à la voûte latéralement). Le canal optique est situé à la base des petites ailes du sphénoïde, tandis que la fissure orbitaire supérieure (fente sphénoïdale) est entre les petites et grandes ailes. Il est situé en arrière du frontal et de l'ethmoïde, et en avant du temporal et de l'occipital."
        },
        {
            questionText: "Concernant l'os Occipital :",
            options: [
                "Contribue à la formation de l'étage moyen de la base du crâne.",
                "Est articulaire avec l'os sphénoïde.",
                "Présente une partie squameuse située en avant du foramen magnum.",
                "Gouttière basilaire, sillon appartenant la face interne de la partie basilaire.",
                "Il est traversé par le foramen magnum."
            ],
            correctOptionIndexes: [1, 3, 4],
            explanation: "L'os occipital est articulaire avec l'os sphénoïde par sa partie basilaire. La gouttière basilaire est un sillon appartenant à la face interne de la partie basilaire de l'occipital. Le foramen magnum traverse l'os occipital. Il contribue à la formation de l'étage postérieur de la base du crâne, non au moyen. La partie squameuse est située en arrière du foramen magnum."
        },
        {
            questionText: "A propos de la pyramide pétreuse du Temporal :",
            options: [
                "Appelée partie squameuse de l'os.",
                "Appartenant à la face endocrânienne du temporal.",
                "A sa face antéro-supérieure se loge le ganglion trigéminal de Gasser.",
                "Pyramide à grand axe orienté en avant et en dedans.",
                "Son bord supérieur est parcouru par la gouttière du sinus pétreux inférieur."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "La pyramide pétreuse (rocher) est une partie de l'os temporal qui est principalement endocrânienne. Elle a un grand axe orienté en avant et en dedans. Sa face antéro-supérieure (apex) est le lieu où se loge le ganglion trigéminal (de Gasser). Le bord supérieur du rocher est parcouru par la gouttière du sinus pétreux supérieur, non inférieur. La partie squameuse est l'écaille du temporal."
        },
        {
            questionText: "L'os temporal est :",
            options: [
                "Sa partie pétreuse est strictement endocrânienne.",
                "Un os de base crânienne antérieure.",
                "Un os pair et symétrique.",
                "Constitué de trois os, dont le tympanal forme en partie le conduit auditif interne.",
                "Présente au niveau de sa pyramide pétreuse l'orifice de passage du paquet acoustico-facial."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "L'os temporal est un os pair et symétrique. Il présente au niveau de sa pyramide pétreuse l'orifice de passage du paquet acoustico-facial (méat acoustique interne). Sa partie pétreuse est principalement endocrânienne, mais elle a aussi des rapports exocrâniens. C'est un os de la base crânienne moyenne et postérieure. L'os tympanal forme le conduit auditif externe, pas interne."
        },
        {
            questionText: "La face médiale de la branche montante de la mandibule présente :",
            options: [
                "L'épine de Spix.",
                "La facette d'insertion du muscle masséter.",
                "Le sillon mylo-hyoïdien.",
                "L'éminence mentonnière.",
                "Le canal dentaire inférieur."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La face médiale (interne) de la branche montante de la mandibule présente l'épine de Spix (lingula) et le sillon mylo-hyoïdien. Le foramen mandibulaire (entrée du canal dentaire inférieur) est aussi sur cette face. La facette d'insertion du muscle masséter est sur la face externe. L'éminence mentonnière est sur la face externe du corps."
        },
        {
            questionText: "L'os occipital est :",
            options: [
                "Percé d'un large orifice : le foramen magnum laissant passer le nerf hypoglosse.",
                "Articulé par ses condyles avec la vertèbre axis.",
                "Un os de la fosse crânienne postérieure.",
                "Lié avec l'os pariétal par la suture lambdoïde.",
                "Situé en arrière et en dehors de l'os temporal."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "L'os occipital est un os de la fosse crânienne postérieure. Il est lié avec l'os pariétal par la suture lambdoïde. Le foramen magnum laisse passer la moelle allongée (tronc cérébral), et non le nerf hypoglosse seul (qui passe par le canal de l'hypoglosse). Ses condyles s'articulent avec l'atlas (C1), pas l'axis (C2). Il est situé en arrière et médialement à l'os temporal."
        },
        {
            questionText: "La voûte du crâne est constituée des os suivants :",
            options: [
                "L'os frontal.",
                "L'os pariétal.",
                "L'os sphénoïdal.",
                "L'os temporal.",
                "L'os ethmoïdal."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La voûte du crâne (calvaria) est principalement constituée de l'os frontal, des deux os pariétaux, de l'écaille de l'occipital et des parties squameuses des os temporaux. L'os sphénoïde et l'ethmoïde sont des os de la base du crâne."
        },
        {
            questionText: "La mandibule est :",
            options: [
                "Os impair, médian et asymétrique.",
                "Seul os mobile du massif facial.",
                "Le gonion, angle entre corps et branche montante.",
                "Présente une surface articulaire maxillaire.",
                "Formé de 3 parties."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La mandibule est le seul os mobile du massif facial. Le gonion est l'angle formé entre le corps et la branche montante de la mandibule. La mandibule est un os impair, médian et symétrique. Elle s'articule avec l'os temporal (articulation temporo-mandibulaire), pas directement avec le maxillaire. Elle est formée d'un corps et de deux branches."
        },
        {
            questionText: "Le corps de l'os sphénoïde :",
            options: [
                "Appartient à l'étage moyen de la base du crâne.",
                "Est formé de cinq pièces osseuses.",
                "Participe à la formation de la voûte crânienne.",
                "Présente les orifices de passage du paquet acoustico-facial.",
                "S'articule avec tous les os crâne."
            ],
            correctOptionIndexes: [0],
            explanation: "Le corps de l'os sphénoïde appartient à l'étage moyen de la base du crâne. Il ne participe pas à la formation de la voûte crânienne de manière significative. Les orifices de passage du paquet acoustico-facial (méat acoustique interne) sont sur l'os temporal (rocher). L'os sphénoïde dans son ensemble s'articule avec tous les os du crâne, mais la question porte spécifiquement sur le *corps* de l'os sphénoïde, qui a des articulations spécifiques. Il est formé d'une seule pièce osseuse, avec des prolongements (ailes, processus ptérygoïdes)."
        },
        {
            questionText: "Les organes de sens ont les caractéristiques suivantes :",
            options: [
                "L'oreille moyenne est appelée caisse du tympan.",
                "La chaîne des osselets se trouve au niveau de l'oreille interne.",
                "La mobilité du globe oculaire est due à 06 muscles moteurs.",
                "La peau est équipée de mécanorécepteurs qui se trouvent au niveau de l'épiderme.",
                "La couche nerveuse de l'œil s'appelle la sclérotique."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "L'oreille moyenne est aussi appelée caisse du tympan. La mobilité du globe oculaire est assurée par six muscles oculomoteurs extrinsèques. La chaîne des osselets (marteau, enclume, étrier) se trouve dans l'oreille moyenne, pas interne. Les mécanorécepteurs de la peau se trouvent principalement dans le derme et l'hypoderme, pas uniquement l'épiderme. La couche nerveuse de l'œil est la rétine, la sclérotique est la tunique fibreuse externe."
        },
        {
            questionText: "Ces propositions concernent l'os ethmoïde :",
            options: [
                "Formé par 3 parties, une lame verticale et 2 masses latérales.",
                "Il appartient à la fosse crânienne antérieure.",
                "Il est situé en arrière du sphénoïde et au-dessous du frontal.",
                "L'apophyse crista-galli est endocrânienne.",
                "Lame verticale contribue à la formation de la cloison nasale."
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "L'os ethmoïde est formé d'une lame verticale, d'une lame horizontale et de deux masses latérales. Il appartient à la fosse crânienne antérieure. L'apophyse crista-galli est une saillie endocrânienne de sa lame verticale. La lame verticale (partie perpendiculaire) contribue à la formation de la cloison nasale. Il est situé en arrière du frontal et *en avant* du sphénoïde."
        },
        {
            questionText: "Ces propositions concernent l'os maxillaire :",
            options: [
                "Os impair et symétrique.",
                "Le processus zygomatique, saillie osseuse de la face médiale de l'os.",
                "Il prend part à la formation des cavités buccale, nasale et orbitaire.",
                "Le sinus maxillaire occupe la 1/2 de l'épaisseur de l'os.",
                "Le processus palatin, saillie osseuse de la face inférieure de l'os."
            ],
            correctOptionIndexes: [2],
            explanation: "L'os maxillaire est un os pair et symétrique. Il est une pièce maîtresse de la face, participant à la formation des cavités buccale, nasale et orbitaire. Le processus zygomatique est une saillie de la face latérale de l'os maxillaire. Le processus palatin est une saillie horizontale de la face médiale de l'os maxillaire. Le sinus maxillaire est une grande cavité creusée dans le corps du maxillaire."
        },
        {
            questionText: "La face jugale de l'os maxillaire présente les éléments anatomiques suivants :",
            options: [
                "L'apophyse pyramidale.",
                "La gouttière lacrymale.",
                "L'apophyse palatine.",
                "Le trou sous-orbitaire.",
                "L'orifice du sinus maxillaire."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "La face jugale (antéro-latérale) de l'os maxillaire présente l'apophyse pyramidale (ou processus zygomatique du maxillaire) et le trou sous-orbitaire. La gouttière lacrymale est sur la face médiale. L'apophyse palatine est une projection horizontale de la face médiale. L'orifice du sinus maxillaire est sur la face médiale."
        },
        {
            questionText: "Parmi les formations suivantes lesquelles n'appartiennent pas à la face exocrânienne de la portion horizontale du frontal :",
            options: [
                "Les fosses orbitaires.",
                "L'échancrure ethmoïdale.",
                "Le tubercule pharyngien.",
                "La fosse lacrymale.",
                "Apophyse crista galli."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "Le tubercule pharyngien est une saillie de la face exocrânienne de la partie basilaire de l'os occipital, donc ne fait pas partie du frontal. L'apophyse crista galli est une partie de l'os ethmoïde. L'échancrure ethmoïdale est une entaille sur le bord postérieur de la partie horizontale (orbito-nasale) du frontal, donc elle ne fait pas partie de la face exocrânienne de cette portion mais en est un bord. Les fosses orbitaires et la fosse lacrymale sont sur la face exocrânienne de la partie horizontale (toit de l'orbite)."
        },
        {
            questionText: "L'os ethmoïdal est :",
            options: [
                "En rapport en arrière avec l'occipital.",
                "Un os impair.",
                "Os de la voûte crânienne.",
                "En rapport avec les fosses nasales.",
                "Participe à la formation de la cavité orale."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "L'os ethmoïde est un os impair et médian. Il est en rapport étroit avec les fosses nasales, dont il forme une partie importante de la paroi supérieure et latérale. Il est en rapport en arrière avec le sphénoïde, non l'occipital. Il appartient à la base du crâne (étage antérieur), non à la voûte. Il ne participe pas à la formation de la cavité orale."
        },
        {
            questionText: "La face externe du corps de la mandibule présente :",
            options: [
                "La symphyse mentonnière.",
                "Les épines mentonnières.",
                "La ligne mylo-hyoïdienne.",
                "Les tubercules mentonniers.",
                "Le foramen mentonnier."
            ],
            correctOptionIndexes: [0, 4],
            explanation: "La face externe du corps de la mandibule présente la symphyse mentonnière (jonction des deux hémi-mandibules) et le foramen mentonnier (passage du nerf mentonnier). Les épines mentonnières sont sur la face interne. La ligne mylo-hyoïdienne est sur la face interne. Les tubercules mentonniers peuvent être des repères sur la symphyse."
        },
        {
            questionText: "La face latérale de l'os pariétal présente :",
            options: [
                "Les lignes courbes temporales supérieures.",
                "Les lignes courbes temporales antérieures.",
                "Les sillons vasculaires.",
                "Le trou pariétal.",
                "La fosse pariétale."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "La face latérale (exocrânienne) de l'os pariétal présente les lignes temporales supérieure et inférieure, et peut être traversée par le trou pariétal. Les sillons vasculaires (de l'artère méningée moyenne) sont sur la face endocrânienne. La fosse pariétale (éminence pariétale) est une convexité de la face externe."
        },
        {
            questionText: "La lame horizontale de l'os palatin est :",
            options: [
                "Située en avant de l'apophyse palatine.",
                "Présente une face inférieure, buccale.",
                "Participe à la formation de paroi latérale des fosses nasales.",
                "Présente une face médiale, nasale.",
                "Présente un bord médial articulaire avec son homologue."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "La lame horizontale de l'os palatin présente une face inférieure, buccale, qui forme une partie du palais dur. Son bord médial s'articule avec l'homologue controlatéral pour former la suture interpalatine. Elle est située en arrière de l'apophyse palatine du maxillaire. Elle participe à la formation du plancher des fosses nasales, pas de la paroi latérale (c'est la lame verticale qui y contribue). Elle présente une face supérieure, nasale."
        },
        {
            questionText: "L'os pariétal s'articule avec les os suivants :",
            options: [
                "Occipital - temporal - frontal - grande aile du sphénoïde.",
                "Occipital - frontal - petite aile du sphénoïde.",
                "Occipital - frontal - temporal - malaire.",
                "Occipital - frontal - temporal - maxillaire.",
                "Occipital - frontal - temporal - ethmoïde."
            ],
            correctOptionIndexes: [0],
            explanation: "L'os pariétal s'articule avec l'os occipital (suture lambdoïde), l'os temporal (suture pariéto-squameuse et pariéto-mastoïdienne), l'os frontal (suture coronale) et la grande aile du sphénoïde (au niveau du ptérion)."
        },
        {
            questionText: "Ces propositions concernent L’Os frontal :",
            options: [
                "Est un os pair médian et symétrique.",
                "La glabelle est une saillie médiane de sa partie frontale.",
                "L'incisure ethmoïdale appartient à la partie orbito-nasale.",
                "Il présente une partie verticale orbito-nasale.",
                "Il est articulaire par le segment supérieur de son bord circonférentiel avec l’os temporal."
            ],
            correctOptionIndexes: [1],
            explanation: "L'os frontal est un os impair, médian et symétrique. La glabelle est une saillie médiane de sa partie frontale (écaille). L'incisure ethmoïdale (et non \"présente ethmoïdale\") appartient à la partie orbito-nasale (horizontale). La partie verticale est l'écaille frontale."
        },
        {
            questionText: "Ces propositions concernent l'os frontal :",
            options: [
                "Est un os pair médian et symétrique.",
                "La glabelle est une saillie médiane de sa partie frontale.",
                "L'incisure ethmoïdale appartient à la partie orbito-nasale.",
                "Présente une partie verticale orbito-nasale.",
                "Il est articulaire par le segment supérieur de son bord circonférentiel avec l'os temporal."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "L'os frontal est un os impair, médian et symétrique. La glabelle est une saillie médiane de sa partie frontale (écaille). L'incisure ethmoïdale appartient à la partie orbito-nasale (horizontale). La partie verticale est l'écaille frontale, et la partie orbito-nasale est horizontale."
        },
        {
            questionText: "Ces propositions concernent L’Os sphénoïde :",
            options: [
                "Il est situé en avant du temporal et du pariétal.",
                "La selle turcique où loge la glande pituitaire se situe à la face supérieure de son corps.",
                "Est un os articulaire avec tous les os du crâne.",
                "Il présente deux expansions bilatérales dites processus ptérygoïdes.",
                "Il est articulaire par la face postérieure de son corps avec l’os occipital."
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "(Identique à Q91) L'os sphénoïde est un os central du crâne, situé en avant du temporal et du pariétal. La selle turcique, qui loge la glande pituitaire (hypophyse), se trouve sur la face supérieure de son corps. C'est l'os clé qui s'articule avec tous les autres os du crâne. Il présente deux expansions bilatérales appelées processus ptérygoïdes, et sa face postérieure s'articule avec l'os occipital. (Toutes les options sont correctes pour cette question)."
        },
        {
            questionText: "Ces propositions concernent l'os sphénoïde :",
            options: [
                "Il est situé en avant du temporal et du pariétal.",
                "La selle turcique où loge la glande pituitaire se situe à la face supérieure de son corps.",
                "Est un os articulaire avec tous les os du crâne.",
                "Il présente deux expansions bilatérales dites processus ptérygoïdes.",
                "Il est articulaire par la face postérieure de son corps avec l'os occipital."
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "(Identique à Q91) L'os sphénoïde est un os central du crâne, situé en avant du temporal et du pariétal. La selle turcique, qui loge la glande pituitaire (hypophyse), se trouve sur la face supérieure de son corps. C'est l'os clé qui s'articule avec tous les autres os du crâne. Il présente deux expansions bilatérales appelées processus ptérygoïdes, et sa face postérieure s'articule avec l'os occipital. (Toutes les options sont correctes pour cette question)."
        },
        {
            questionText: "Ces propositions concernent l’os temporal :",
            options: [
                "Le trou stylo-mastoïdien se situe sur face exocrânienne du rocher.",
                "Le processus zygomatique appartient à la partie squameuse.",
                "Il est situé en arrière et en dedans du sphénoïde.",
                "Il est fait de trois parties.",
                "L’apophyse styloïde se situe sur la face endocrânienne du rocher."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q55) Le trou stylo-mastoïdien est un orifice de la face exocrânienne du rocher (partie pétreuse) par lequel sort le nerf facial. Le processus zygomatique se détache de la partie squameuse de l'os temporal. L'os temporal est formé de trois parties principales : l'écaille (squameuse), la partie pétreuse (rocher) et la partie tympanale. Il est situé latéralement au sphénoïde, et non en arrière et en dedans. L'apophyse styloïde est une projection osseuse de la face inférieure du rocher, pas endocrânienne."
        },
        {
            questionText: "Ces propositions concernent l'os temporal :",
            options: [
                "Le trou stylo-mastoïdien se situe sur la face exocrânienne du rocher.",
                "Le processus zygomatique appartient à la partie squameuse.",
                "Il est situé en arrière et en dedans du sphénoïde.",
                "Il est fait de trois parties.",
                "L’apophyse styloïde se situe sur la face endocrânienne du rocher."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q55 et Q93) Le trou stylo-mastoïdien est un orifice de la face exocrânienne du rocher (partie pétreuse) par lequel sort le nerf facial. Le processus zygomatique se détache de la partie squameuse de l'os temporal. L'os temporal est formé de trois parties principales : l'écaille (squameuse), la partie pétreuse (rocher) et la partie tympanale. Il est situé latéralement au sphénoïde, et non en arrière et en dedans. L'apophyse styloïde est une projection osseuse de la face inférieure du rocher, pas endocrânienne."
        },
        {
            questionText: "Ces propositions concernent la mandibule :",
            options: [
                "Les apophyses géni supérieures donnent insertion au muscle génio-hyoïdien.",
                "Le seul os mobile du massif facial.",
                "Le trou mentonnier est situé au-dessous de la ligne oblique externe.",
                "Elle donne insertion aux muscles masticateurs.",
                "La fossette sublinguale est située au-dessous de la ligne oblique interne."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Les apophyses géni (ou épines mentonnières) supérieures donnent insertion au muscle génio-hyoïdien. La mandibule est le seul os mobile du massif facial. Elle donne insertion à plusieurs muscles masticateurs. Le trou mentonnier est situé en avant de la ligne oblique externe. La fossette sublinguale est située au-dessus de la ligne mylo-hyoïdienne sur la face interne du corps de la mandibule."
        },
        {
            questionText: "Ces propositions concernent la mandibule :",
            options: [
                "Les apophyses géni supérieures donnent insertion au muscle génio-hyoïdien.",
                "Le seul os mobile du massif facial.",
                "Le trou mentonnier est situé au-dessous de la ligne oblique externe.",
                "Elle donne insertion aux muscles masticateurs.",
                "La fossette sublinguale est située au-dessous de la ligne oblique interne."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q95) Les apophyses géni (ou épines mentonnières) supérieures donnent insertion au muscle génio-hyoïdien. La mandibule est le seul os mobile du massif facial. Elle donne insertion à plusieurs muscles masticateurs. Le trou mentonnier est situé en avant de la ligne oblique externe. La fossette sublinguale est située au-dessus de la ligne mylo-hyoïdienne sur la face interne du corps de la mandibule."
        },
        {
            questionText: "L’Os zygomatique (os malaire) présente :",
            options: [
                "Sur sa face latérale l’insertion des muscles zygomatiques.",
                "Une face orbitaire formant une partie de la paroi médiale et du plancher de l’orbite.",
                "Une face postéro-médiale articulaire en arrière avec l’os temporal.",
                "Un angle supérieur articulaire avec l’os maxillaire.",
                "Un bord postéro-inférieur dit massétérique."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Sur sa face latérale, l'os zygomatique donne insertion aux muscles zygomatiques. Sa face postéro-médiale s'articule en arrière avec le processus zygomatique de l'os temporal pour former l'arcade zygomatique. La face orbitaire du zygomatique forme une partie de la paroi latérale et du plancher de l'orbite, pas médiale. Il s'articule avec l'os frontal par son processus frontal (supérieur), et avec le maxillaire par son processus maxillaire (antérieur)."
        },
        {
            questionText: "L'os zygomatique (os malaire) présente :",
            options: [
                "Sur sa face latérale l'insertion des muscles zygomatiques.",
                "Une face orbitaire formant une partie de la paroi médiale et du plancher de l'orbite.",
                "Une face postéro-médiale articulaire en arrière avec l'os temporal.",
                "Un angle supérieur articulaire avec l'os maxillaire.",
                "Un bord postéro-inférieur dit massétérique."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "(Identique à Q97) Sur sa face latérale, l'os zygomatique donne insertion aux muscles zygomatiques. Sa face postéro-médiale s'articule en arrière avec le processus zygomatique de l'os temporal pour former l'arcade zygomatique. La face orbitaire du zygomatique forme une partie de la paroi latérale et du plancher de l'orbite, pas médiale. Il s'articule avec l'os frontal par son processus frontal (supérieur), et avec le maxillaire par son processus maxillaire (antérieur)."
        },
        {
            questionText: "Ces propositions concernent l'os ethmoïde :",
            options: [
                "Est un os de l'étage moyen de la base du crâne.",
                "La face médiale des masses latérales est dite : os Planum.",
                "Il est situé en avant du sphénoïde et au-dessous du frontal.",
                "L'apophyse crista-galli appartient à la lame verticale.",
                "Lame perpendiculaire contribue à la formation de la cloison nasale."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "L'apophyse crista-galli appartient à la lame verticale de l'os ethmoïde. La lame perpendiculaire de l'ethmoïde contribue à la formation de la cloison nasale. L'ethmoïde est un os de l'étage antérieur de la base du crâne. La face *latérale* des masses latérales est l'os planum (lame orbitaire). Il est situé en avant du sphénoïde et au-dessous du frontal."
        },
        {
            questionText: "Ces propositions concernent L’Os ethmoïde :",
            options: [
                "Est un l’os de l’étage moyen de la base du crâne.",
                "La face médiale des masses latérales est dite l’os planum.",
                "Il est situé en avant du sphénoïde et au-dessus du frontal.",
                "L’apophyse crista-galli appartient à la lame verticale.",
                "Lame perpendiculaire contribue à la formation de la cloison nasale."
            ],
            correctOptionIndexes: [3, 4],
            explanation: "(Identique à Q99) L'apophyse crista-galli appartient à la lame verticale de l'os ethmoïde. La lame perpendiculaire de l'ethmoïde contribue à la formation de la cloison nasale. L'ethmoïde est un os de l'étage antérieur de la base du crâne. La face *latérale* des masses latérales est l'os planum (lame orbitaire). Il est situé en avant du sphénoïde et au-dessous du frontal."
        },
        {
            questionText: "Ces propositions concernent L’Os pariétal :",
            options: [
                "Est un os pair, médian et asymétrique.",
                "Il est situé au-dessus du temporal et en avant de l’occipital.",
                "Il présente deux faces verticale et horizontale.",
                "Son bord postérieur s’articule avec l’occipital formant la suture lambdoïde.",
                "Son bord antérieur s’articule avec l’os frontal formant la suture sagittale."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "L'os pariétal est un os pair, latéral et symétrique. Il est situé au-dessus de l'os temporal et en avant de l'occipital. Son bord postérieur s’articule avec l’occipital formant la suture lambdoïde. Il présente deux faces (externe et interne). Son bord antérieur s'articule avec l'os frontal formant la suture coronale."
        },
        {
            questionText: "Ces propositions concernent l'Os pariétal :",
            options: [
                "Est un os pair, médian et asymétrique.",
                "Il est situé au-dessus du temporal et en avant de l'occipital.",
                "Il présente deux faces Verticale et horizontale.",
                "Son bord postérieur l'articule avec l'occipital formant la suture lambdoïde.",
                "Son bord antérieur s'articule avec l'os frontal formant la suture sagittale."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "(Identique à Q101) L'os pariétal est un os pair, latéral et symétrique. Il est situé au-dessus de l'os temporal et en avant de l'occipital. Son bord postérieur s’articule avec l’occipital formant la suture lambdoïde. Il présente deux faces (externe et interne). Son bord antérieur s'articule avec l'os frontal formant la suture coronale."
        },
        {
            questionText: "Ces propositions concernent L’Os occipital :",
            options: [
                "Il occupe une partie postéro-inférieure du crâne.",
                "Le foramen magnum livre passage à la moelle allongée.",
                "La partie basilaire est située en arrière du foramen magnum.",
                "Le sillon du sinus sagittal se situe sur une face endocrânienne de l’écaille.",
                "La gouttière basilaire appartient à une face exocrânienne de la partie basilaire."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "L'os occipital occupe la partie postéro-inférieure du crâne. Le foramen magnum livre passage à la moelle allongée. Le sillon du sinus sagittal supérieur est situé sur la face endocrânienne de l'écaille de l'occipital. La partie basilaire est située en avant du foramen magnum. La gouttière basilaire appartient à la face endocrânienne de la partie basilaire."
        },
        {
            questionText: "Ces propositions concernent l'os occipital :",
            options: [
                "Il occupe la partie postéro-inférieure du crâne.",
                "Le foramen magnum livre passage à la moelle allongée.",
                "La partie basilaire est située en arrière du foramen magnum.",
                "Le sillon du sinus sagittal se situe sur la face endocrânienne de l'écaille.",
                "La gouttière basilaire appartient à la face exocrânienne de la partie basilaire."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q103) L'os occipital occupe la partie postéro-inférieure du crâne. Le foramen magnum livre passage à la moelle allongée. Le sillon du sinus sagittal supérieur est situé sur la face endocrânienne de l'écaille de l'occipital. La partie basilaire est située en avant du foramen magnum. La gouttière basilaire appartient à la face endocrânienne de la partie basilaire."
        },
        {
            questionText: "Ces propositions concernent L’Os maxillaire :",
            options: [
                "La face inférieure du processus palatin forme le palais osseux.",
                "Le processus zygomatique, saillie osseuse de la face médiale de l’os.",
                "Il prend part à la formation des cavités buccale, nasale et orbitaire.",
                "Le sinus maxillaire occupant les 1/3 inférieure de l’épaisseur de l’os.",
                "Le processus palatin, saillie osseuse de la face médiale de l’os."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La face inférieure du processus palatin du maxillaire forme une partie du palais osseux (les 2/3 antérieurs). Le maxillaire prend part à la formation des cavités buccale, nasale et orbitaire. Le processus zygomatique est une saillie de la face latérale de l'os. Le processus palatin est une saillie horizontale de la face médiale. Le sinus maxillaire occupe une grande partie du corps du maxillaire, pas seulement le 1/3 inférieur."
        },
        {
            questionText: "Ces propositions concernent l'os maxillaire :",
            options: [
                "La face inférieure du processus palatin forme le palais osseux.",
                "Le processus zygomatique, saillie osseuse de la face médiale de l'os.",
                "Il prend part à la formation des cavités buccale, nasale et orbitaire.",
                "Le sinus maxillaire occupant les 1/3 inférieurs de l'épaisseur de l'os.",
                "Le processus palatin, saillie osseuse de la face médiale de l'os."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "(Identique à Q105) La face inférieure du processus palatin du maxillaire forme une partie du palais osseux (les 2/3 antérieurs). Le maxillaire prend part à la formation des cavités buccale, nasale et orbitaire. Le processus zygomatique est une saillie de la face latérale de l'os. Le processus palatin est une saillie horizontale de la face médiale. Le sinus maxillaire occupe une grande partie du corps du maxillaire, pas seulement le 1/3 inférieur."
        },
        {
            questionText: "Ces propositions concernent la base du crâne :",
            options: [
                "Le foramen déchiré appartient à l’étage antérieur.",
                "Elle est formée par tous les os du crâne.",
                "La fosse crânienne antérieure est fronto-ethmoïdale.",
                "Le bord supérieur du rocher et la lame quadrilatère limite la fosse crânienne moyenne en arrière.",
                "La fissure orbitaire supérieure livre passage aux nerfs moteurs de l’œil."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "La fosse crânienne antérieure est fronto-ethmoïdale. La fissure orbitaire supérieure livre passage aux nerfs moteurs de l'œil (III, IV, VI). Le foramen déchiré appartient à l'étage moyen. La base du crâne n'est pas formée par tous les os du crâne. Le bord supérieur du rocher et la lame quadrilatère délimitent la fosse crânienne moyenne en avant et en arrière respectivement."
        },
        {
            questionText: "Ces propositions concernent la base du crâne :",
            options: [
                "Le foramen déchiré appartient à l'étage antérieur.",
                "Elle est formée par tous les os du crâne.",
                "La fosse crânienne antérieure est fronto-ethmoïdale.",
                "Le bord supérieur du rocher et la lame quadrilatère limite la fosse crânienne moyenne en arrière.",
                "La fissure orbitaire supérieure livre passage aux nerfs moteurs de l'œil."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "(Identique à Q107) La fosse crânienne antérieure est fronto-ethmoïdale. La fissure orbitaire supérieure livre passage aux nerfs moteurs de l'œil (III, IV, VI). Le foramen déchiré appartient à l'étage moyen. La base du crâne n'est pas formée par tous les os du crâne. Le bord supérieur du rocher et la lame quadrilatère délimitent la fosse crânienne moyenne en avant et en arrière respectivement."
        },
        {
            questionText: "Ces propositions concernent L’Os palatin :",
            options: [
                "Il participe à la partie postérieure des fosses nasales.",
                "Il est formé de deux lames osseuses formant elles un angle ouvert en dehors.",
                "Il est articulaire avec le vomer par le bord médial de sa lame horizontale.",
                "La face médiale de sa lame verticale ferme la paroi latérale de la cavité nasale.",
                "C’est un os long pair et médian."
            ],
            correctOptionIndexes: [0],
            explanation: "L'os palatin participe à la formation de la partie postérieure des fosses nasales, du palais dur et de l'orbite. Il est formé de deux lames osseuses (horizontale et verticale) formant un angle droit. Il s'articule avec le vomer par le bord postérieur de sa lame horizontale (ou par le processus sphénoïdal). La face médiale de sa lame verticale forme la paroi latérale des fosses nasales. C'est un os pair, non médian et non long."
        },
        {
            questionText: "Ces propositions concernent l'os palatin :",
            options: [
                "Il participe à la formation de la partie postérieure des fosses nasales.",
                "Il est formé de deux lames osseuses formant entre elles un angle ouvert en haut et en dehors.",
                "Il est articulaire avec le Vomer par le bord médial de sa lame horizontale.",
                "La face médiale de sa lame verticale forme la paroi latérale de la cavité nasale.",
                "C'est un os long, pair et médian."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "L'os palatin participe à la formation de la partie postérieure des fosses nasales. La face médiale de sa lame verticale forme la paroi latérale de la cavité nasale. Il est formé de deux lames osseuses (horizontale et verticale) formant un angle droit. Il s'articule avec le vomer par le processus sphénoïdal et le processus pyramidal. C'est un os pair, non médian et non long."
        },
        {
            questionText: "La base du crâne communique avec les cavités orbitaires par les foramens suivants :",
            options: [
                "La fissure orbitaire inférieure.",
                "Le canal optique.",
                "Le foramen ovale.",
                "La fissure orbitaire supérieure.",
                "Le foramen obturé."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La base du crâne communique avec les cavités orbitaires par le canal optique, la fissure orbitaire supérieure et la fissure orbitaire inférieure. Le foramen ovale et le foramen obturé ne communiquent pas directement avec l'orbite."
        },
        {
            questionText: "Ces propositions concernent la cloison nasale :",
            options: [
                "Exclusivement osseuse.",
                "L'os Vomer participe à sa constitution.",
                "Formée par l'os lacrymal.",
                "Faite de la lame horizontale de l'os ethmoïde.",
                "Elle est cartilagineuse en partie."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "La cloison nasale est formée par une partie osseuse (lame perpendiculaire de l'ethmoïde, vomer) et une partie cartilagineuse (cartilage septal). Donc, l'os vomer participe à sa constitution, et elle est cartilagineuse en partie."
        },
        {
            questionText: "La base du crâne communique avec les cavités orbitaires par les foramens suivants :",
            options: [
                "La fissure orbitaire inférieure.",
                "Le canal optique.",
                "Le foramen ovale.",
                "La fissure orbitaire supérieure.",
                "Le foramen obturé."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q111) La base du crâne communique avec les cavités orbitaires par le canal optique, la fissure orbitaire supérieure et la fissure orbitaire inférieure. Le foramen ovale et le foramen obturé ne communiquent pas directement avec l'orbite."
        },
        {
            questionText: "Ces propositions concernent l'os Vomer :",
            options: [
                "Ses faces sont creusées par les sillons où passent l'artère et le nerf naso-palatin.",
                "Il forme la cloison nasale par son bord antérieur.",
                "Son bord postérieur concave en arrière. Il sépare les deux orifices antérieurs des fosses nasales.",
                "Il a la forme d'un parallélogramme avec 4 faces et 4 bords.",
                "Articulaire par son bord supérieur avec l'os sphénoïde."
            ],
            correctOptionIndexes: [4],
            explanation: "L'os vomer est un os impair et médian qui s'articule par son bord supérieur avec l'os sphénoïde. Il a une forme approximativement quadrilatère. Ses faces sont lisses, les sillons naso-palatins sont plus souvent liés à la lame perpendiculaire de l'ethmoïde et au maxillaire. Il forme la partie postéro-inférieure de la cloison nasale, pas le bord antérieur. Son bord postérieur sépare les choanes (orifices postérieurs des fosses nasales), pas les orifices antérieurs."
        },
        {
            questionText: "Ces propositions concernent l’os vomer :",
            options: [
                "Ses faces sont creusées par les sillons passent l’artère et le nerf naso-palatin.",
                "Il forme la cloison nasale par son bord antérieur.",
                "Son bord postérieur concave en arrière, il sépare les deux orifices antérieurs des fosses nasales.",
                "Il a la forme d’un parallélogramme avec 4 faces et 4 bords.",
                "Articulaire par son bord supérieur avec l’os sphénoïde."
            ],
            correctOptionIndexes: [4],
            explanation: "(Identique à Q114) L'os vomer est un os impair et médian qui s'articule par son bord supérieur avec l'os sphénoïde. Il a une forme approximativement quadrilatère. Ses faces sont lisses, les sillons naso-palatins sont plus souvent liés à la lame perpendiculaire de l'ethmoïde et au maxillaire. Il forme la partie postéro-inférieure de la cloison nasale, pas le bord antérieur. Son bord postérieur sépare les choanes (orifices postérieurs des fosses nasales), pas les orifices antérieurs."
        },
        {
            questionText: "Parmi les éléments suivants lesquels appartiennent à la partie verticale de l'os frontal :",
            options: [
                "L'épine nasale du frontal.",
                "Les arcades sourcilières.",
                "La glabelle.",
                "La suture métopique.",
                "L'incisure ethmoïdale."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "La partie verticale (écaille) de l'os frontal présente les arcades sourcilières et la glabelle. La suture métopique (si persistante) est également sur cette partie. L'épine nasale du frontal et l'incisure ethmoïdale appartiennent à la partie horizontale (orbito-nasale)."
        },
        {
            questionText: "Parmi les éléments suivants lesquels appartiennent à la partie verticale de l’os frontal :",
            options: [
                "L’épine nasale du frontal.",
                "Les arcades sourcilières.",
                "La glabelle.",
                "La suture métopique.",
                "L’incisure ethmoïdale."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "(Identique à Q116) La partie verticale (écaille) de l'os frontal présente les arcades sourcilières et la glabelle. La suture métopique (si persistante) est également sur cette partie. L'épine nasale du frontal et l'incisure ethmoïdale appartiennent à la partie horizontale (orbito-nasale)."
        },
        {
            questionText: "Le corps de la mandibule présente les éléments suivants :",
            options: [
                "Les apophyses génies.",
                "L'épine de Spix.",
                "L'orifice mentonnier.",
                "Le sillon mylo-hyoïdien.",
                "L'apophyse coronoïde."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Le corps de la mandibule présente les apophyses géni (épines mentonnières) sur sa face interne, et l'orifice mentonnier (foramen mentonnier) sur sa face externe. L'épine de Spix et le sillon mylo-hyoïdien sont sur la face interne de la branche montante. L'apophyse coronoïde est un processus de la branche montante."
        },
        {
            questionText: "Le corps de la mandibule présente les éléments suivants :",
            options: [
                "Les apophyses génies.",
                "L’épine de Spix.",
                "L’orifice mentonnier.",
                "Le sillon mylo-hyoïdien.",
                "L’apophyse coronoïde."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "(Identique à Q118) Le corps de la mandibule présente les apophyses géni (épines mentonnières) sur sa face interne, et l'orifice mentonnier (foramen mentonnier) sur sa face externe. L'épine de Spix et le sillon mylo-hyoïdien sont sur la face interne de la branche montante. L'apophyse coronoïde est un processus de la branche montante."
        },
        {
            questionText: "Ces propositions concernent l'os temporal :",
            options: [
                "Situé en arrière de l'os sphénoïde.",
                "Présente l'orifice du conduit auditif interne.",
                "Appartient à l'étage antérieur de la base du crâne.",
                "C'est un os impair.",
                "Sur sa face médiale s'insère le muscle temporal."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'os temporal est situé en arrière et latéralement de l'os sphénoïde. Il présente l'orifice du conduit auditif interne sur sa pyramide pétreuse. Il appartient aux étages moyen et postérieur de la base du crâne. C'est un os pair. Le muscle temporal s'insère sur la fosse temporale de l'écaille (face externe)."
        },
        {
            questionText: "Ces propositions concernent l'os sphénoïde :",
            options: [
                "Participe à la formation de la voûte crânienne.",
                "Articulaire avec tous les os du crâne.",
                "Appartient à l'étage postérieur de la base du crâne.",
                "La face antérieure de son corps loge la glande hypophyse.",
                "Ses petites ailes délimitent le canal optique."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "L'os sphénoïde s'articule avec tous les os du crâne. Ses petites ailes délimitent le canal optique. Il appartient à l'étage moyen de la base du crâne. La glande hypophyse loge dans la selle turcique, qui est sur la face supérieure du corps du sphénoïde. Il participe à la voûte crânienne par ses grandes ailes latéralement."
        },
        {
            questionText: "La voûte du crâne est constituée des os suivants :",
            options: [
                "L'os frontal.",
                "L'os pariétal.",
                "L'os sphénoïdal.",
                "L'os temporal.",
                "L'os ethmoïdal."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "(Identique à Q76) La voûte du crâne (calvaria) est principalement constituée de l'os frontal, des deux os pariétaux, de l'écaille de l'occipital et des parties squameuses des os temporaux. L'os sphénoïde et l'ethmoïde sont des os de la base du crâne."
        },
        {
            questionText: "Ces propositions concernent l'os occipital :",
            options: [
                "Sur sa face externe se fixe le muscle occipital.",
                "Loge les hémisphères cérébelleux.",
                "Ses pièces osseuses délimitent le foramen obturé.",
                "Situé en arrière du sphénoïde latéralement.",
                "Occupe l'étage postérieur de la base du crâne."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "L'os occipital, sur sa face endocrânienne (interne), présente les fosses cérébelleuses qui logent les hémisphères cérébelleux. Il occupe l'étage postérieur de la base du crâne. Le foramen obturé est dans le bassin, pas dans le crâne. Il est situé en arrière du sphénoïde, mais non \"latéralement\" au sphénoïde de manière primaire. Le muscle occipital se fixe sur la ligne nuchale supérieure, sur la face externe."
        },
        {
            questionText: "Ces propositions concernent l'os temporal :",
            options: [
                "Appartient à l'étage moyen de la base du crâne.",
                "Articulaire en avant avec l'os ethmoïdal.",
                "Participe à la formation de la voûte crânienne.",
                "À son niveau s'ouvre le foramen ovale.",
                "Os pair."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "L'os temporal est un os pair. Il appartient à l'étage moyen de la base du crâne par sa partie pétreuse, et participe à la formation de la voûte crânienne par son écaille. Le foramen ovale s'ouvre dans la grande aile du sphénoïde, pas dans le temporal. Il ne s'articule pas directement avec l'ethmoïde."
        },
        {
            questionText: "Ces propositions concernent l'os frontal :",
            options: [
                "Occupe l'étage antérieur de la base du crâne.",
                "Participe à la formation de la voûte crânienne.",
                "Formé de trois parties.",
                "Sa partie horizontale forme le plancher de l'orbite.",
                "Articulaire avec l'os temporal."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'os frontal occupe l'étage antérieur de la base du crâne et participe à la formation de la voûte crânienne. Il est formé de deux parties (verticale et horizontale). Sa partie horizontale forme le toit de l'orbite, pas le plancher. Il ne s'articule pas directement avec l'os temporal de manière primaire."
        },
        {
            questionText: "Ces propositions concernent l'os humérus :",
            options: [
                "Le tubercule majeur est situé médialement à la tête.",
                "En haut la diaphyse est circulaire à la coupe.",
                "Le sillon du nerf radial est orienté en bas et en dehors. Il est porté par la diaphyse.",
                "L'épicondyle médial comporte en dorsal le sillon du nerf ulnaire.",
                "Sa tête est orientée en haut, en dehors et en arrière."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Le sillon du nerf radial est orienté en bas et en dehors sur la diaphyse de l'humérus. L'épicondyle médial (épitrochléa) comporte dorsalement le sillon du nerf ulnaire (cubital). Le tubercule majeur est latéral à la tête. La diaphyse est plutôt cylindrique en haut, devenant triangulaire plus bas. La tête de l'humérus est orientée en haut, en dedans et en arrière."
        },
        {
            questionText: "Ces propositions concernent l'os ethmoïdal :",
            options: [
                "Appartient à l'étage moyen du crâne.",
                "Formé de trois parties.",
                "L'apophyse crista-galli est exocrânienne.",
                "La lame verticale constitue la cloison nasale.",
                "Articulaire avec l'os temporal."
            ],
            correctOptionIndexes: [1, 3],
            explanation: "L'os ethmoïde est formé de trois parties (lame verticale, lame horizontale, deux masses latérales). La lame verticale (partie perpendiculaire) constitue une partie de la cloison nasale. Il appartient à l'étage antérieur de la base du crâne. L'apophyse crista-galli est endocrânienne. Il ne s'articule pas avec l'os temporal."
        },
        {
            questionText: "Cochez la ou les réponses justes :",
            options: [
                "Les os plats de la voûte crânienne forment le neurocrâne membraneux.",
                "Les os de la base du crâne forment le neurocrâne cartilagineux.",
                "Le viscérocrâne constitue le squelette du crâne.",
                "Le désmocrâne se développe à partir de l'ébauche conjonctive de mésenchyme primitif qui entoure le cerveau.",
                "Le chondrocrâne se développe à partir de l'ébauche conjonctive de mésenchyme primitif qui entoure le cerveau."
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Les os plats de la voûte crânienne (calvaria) se développent par ossification membraneuse et forment le neurocrâne membraneux (désmocrâne). Les os de la base du crâne se développent par ossification endochondrale (à partir d'ébauches cartilagineuses) et forment le neurocrâne cartilagineux (chondrocrâne). Le désmocrâne se développe à partir de l'ébauche conjonctive de mésenchyme primitif. Le viscérocrâne constitue le squelette de la face, pas du crâne dans son ensemble."
        },
        {
            questionText: "L'os frontal : cochez la ou les réponses justes",
            options: [
                "Est un os impair des os de la face.",
                "Sur la face postérieure de sa portion verticale on trouve les granulations de Pacchioni.",
                "Sur la ligne médiane de la face postérieure de portion verticale on trouve le sillon du sinus longitudinal inférieur.",
                "Sa fosse orbitaire est marquée en dedans par la fossette lacrymale.",
                "Son échancrure ethmoïdale est limitée en avant par l’épine nasale du frontal."
            ],
            correctOptionIndexes: [1, 4],
            explanation: "L'os frontal est un os impair du crâne. Sur la face endocrânienne (postérieure) de sa portion verticale (écaille), on trouve les granulations de Pacchioni (fossettes granulaires). Son échancrure ethmoïdale est limitée en avant par l'épine nasale du frontal. La fosse lacrymale est située en dehors sur la fosse orbitaire. Le sillon du sinus sagittal supérieur est sur la ligne médiane de la face endocrânienne de l'écaille."
        },
        {
            questionText: "L'os ethmoïdal coche la ou les réponses justes :",
            options: [
                "Est situé dans le moyen de la base du crâne.",
                "Sa lame verticale présente un segment intracrânien ou apophyse de crista galli.",
                "L’os planum de sa masse latérale contribue à la constitution de la paroi latérale de l'orbite.",
                "La face médiale de la masse latérale porte les cornets supérieur et moyens.",
                "La face antérieure de sa masse latérale s'articule avec l’unguis et la branche montante du maxillaire."
            ],
            correctOptionIndexes: [1, 2, 3, 4],
            explanation: "L'os ethmoïde est situé dans l'étage antérieur de la base du crâne. Sa lame verticale présente un segment intracrânien appelé apophyse crista galli. L'os planum (lame orbitaire) de sa masse latérale contribue à la constitution de la paroi latérale de l'orbite. La face médiale de la masse latérale porte les cornets supérieur et moyen. La face antérieure de sa masse latérale s'articule avec l'os lacrymal (unguis) et la branche montante du maxillaire. (Plusieurs réponses correctes ici)."
        },
        {
            questionText: "L'os sphénoïdal : cochez les réponses justes :",
            options: [
                "Est un os impair situé à la partie moyenne de la base du crâne.",
                "Son corps est creusé d'une cavité.",
                "Ses apophyses ptérygoïdes sont implantées sur la face inférieure du corps du sphénoïde.",
                "Le canal Vidien est situé à la base de l'implantation des apophyses ptérygoïdes.",
                "L'aile latérale de l'apophyse ptérygoïde se termine par le crochet ptérygoïdien."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "L'os sphénoïde est un os impair situé à la partie moyenne de la base du crâne. Son corps est creusé d'une cavité (sinus sphénoïdal). Ses apophyses ptérygoïdes sont implantées sur la face inférieure du corps du sphénoïde. Le canal Vidien (canal ptérygoïdien) est situé à la base de l'implantation des apophyses ptérygoïdes. Le crochet ptérygoïdien est l'extrémité inférieure de l'aile *médiale* de l'apophyse ptérygoïde."
        },
        {
            questionText: "L'os occipital: cochez la ou les réponses justes",
            options: [
                "Il est uni en avant par l'apophyse basilaire à la face postérieure de l'ethmoïde.",
                "La face endocrânienne de son apophyse basilaire présente le tubercule pharyngien.",
                "Sur la face exocrânienne de ses masses latérales se trouvent les condyles articulaires.",
                "Sur la face endocrânienne de son écaille on trouve la protubérance occipitale interne.",
                "Sur la face exocrânienne de son écaille on trouve les lignes courbes supérieure et inférieure."
            ],
            correctOptionIndexes: [2, 3, 4],
            explanation: "Sur la face exocrânienne des masses latérales de l'occipital se trouvent les condyles articulaires (avec l'atlas). Sur la face endocrânienne de son écaille, on trouve la protubérance occipitale interne. Sur la face exocrânienne de son écaille, on trouve les lignes nuchales (courbes) supérieure et inférieure. La partie basilaire de l'occipital est unie en avant avec le sphénoïde, pas l'ethmoïde. Le tubercule pharyngien est sur la face *exocrânienne* de la partie basilaire."
        },
        {
            questionText: "L'os temporal : cochez la ou les réponses",
            options: [
                "Il présente une portion squameuse appelée écaille.",
                "Sur la face antéro-supérieure de la partie endocrânienne du rocher se trouve le conduit auditif interne.",
                "Sur la face postérieure de la partie endocrânienne.",
                "Sur la face exocrânienne du rocher se trouve le processus styloïde.",
                "La scissure de Glaser est située entre la mastoïde et l’os tympanal."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "L'os temporal présente une portion squameuse appelée écaille. Sur la face exocrânienne du rocher (partie pétreuse) se trouve le processus styloïde. Le conduit auditif interne est sur la face postéro-supérieure du rocher. La scissure de Glaser est entre la partie tympanale et l'écaille/racine du zygoma."
        },
        {
            questionText: "L'os pariétal: cochez la ou les réponses",
            options: [
                "Est un os pair des os du crâne.",
                "Sur sa face endocrânienne on trouve des sillons vasculaires de l'artère méningée moyenne.",
                "Sur sa face exocrânienne on trouve les lignes courbes temporales supérieure et inférieure.",
                "Son angle antéro-inférieur s’articule avec la petite aile du sphénoïde.",
                "Son bord inférieur s'articule avec l'occipital."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "L'os pariétal est un os pair du crâne. Sur sa face endocrânienne (interne), on trouve des sillons vasculaires de l'artère méningée moyenne. Sur sa face exocrânienne (externe), on trouve les lignes temporales (courbes) supérieure et inférieure. Son angle antéro-inférieur (ptérion) s'articule avec la grande aile du sphénoïde. Son bord inférieur s'articule avec l'os temporal."
        },
        {
            questionText: "La face antéro-latérale du maxillaire : cochez la ou les réponses justes",
            options: [
                "C'est la face jugale du maxillaire.",
                "Elle présente les jugums alvéolaires.",
                "Elle présente l'apophyse palatine.",
                "Elle présente la fosse myrtiforme.",
                "Elle présente le foramen sous-orbitaire."
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La face antéro-latérale du maxillaire est appelée la face jugale. Elle présente les jugums alvéolaires (reliefs des racines dentaires). La fosse myrtiforme est sur la face antérieure. Le foramen sous-orbitaire est aussi sur cette face. L'apophyse palatine est sur la face médiale."
        },
        {
            questionText: "La face médiale du maxillaire : cochez la ou les réponses justes",
            options: [
                "Elle est divisée en deux par le processus palatin.",
                "Elle présente en avant du hiatus du sinus maxillaire la surface articulaire palatine.",
                "Elle présente en arrière du hiatus du sinus maxillaire la gouttière du canal palatin postérieur.",
                "L'union des processus palatins forme la voûte palatine.",
                "Le processus palatin s’articule en arrière avec la lame verticale de l’os palatin."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La face médiale du maxillaire est divisée en deux par le processus palatin. Elle présente en arrière du hiatus du sinus maxillaire la gouttière du canal palatin postérieur. L'union des processus palatins des deux maxillaires forme la majeure partie de la voûte palatine. Le processus palatin s'articule en arrière avec la lame *horizontale* de l'os palatin."
        },
        {
            questionText: "L’os palatin : cochez la ou les réponses justes",
            options: [
                "Il se compose de deux lames soudées entre elles à angle droit.",
                "Sa lame verticale est située en arrière du processus ptérygoïdien.",
                "Sa lame horizontale est située en arrière de l’apophyse palatine du maxillaire.",
                "L’apophyse orbitaire naît du bord supérieur de la lame verticale.",
                "Il présente la gouttière du canal palatin postérieur."
            ],
            correctOptionIndexes: [0, 2, 3, 4],
            explanation: "L'os palatin se compose de deux lames (horizontale et verticale) soudées à angle droit. Sa lame horizontale est située en arrière de l'apophyse palatine du maxillaire (formant le tiers postérieur du palais dur). L'apophyse orbitaire naît du bord supérieur de la lame verticale. Il présente la gouttière du canal palatin postérieur. Sa lame verticale est située en arrière de la tubérosité maxillaire, et médialement au processus ptérygoïdien."
        },
        {
            questionText: "Cochez la ou les propositions justes :",
            options: [
                "L'unguis participe à la constitution de la paroi médiale des fosses nasales.",
                "Le cornet inférieur est situé à la partie supérieure des fosses nasales.",
                "L'os nasal s'attache par son bord inférieur au cartilage latéral du nez.",
                "L'os zygomatique participe à la formation de la paroi supérieure de l'orbite.",
                "Le vomer est os pair."
            ],
            correctOptionIndexes: [0, 2],
            explanation: "L'unguis (os lacrymal) participe à la constitution de la paroi médiale des fosses nasales et de l'orbite. L'os nasal s'attache par son bord inférieur au cartilage latéral du nez. Le cornet inférieur est un os séparé, situé à la partie inférieure des fosses nasales. L'os zygomatique participe à la paroi latérale et inférieure de l'orbite. Le vomer est un os impair."
        },
        {
            questionText: "La mandibule : cochez la ou les réponses justes",
            options: [
                "Elle est formée de trois parties dont l'arc mandibulaire.",
                "Sur la face antérieure de l'arc mandibulaire se trouvent les fossettes mentonnières.",
                "Son condyle articulaire est une saillie ellipsoïde déjetée en dehors.",
                "Les apophyses géni supérieures sont destinées aux insertions des muscles génio-hyoïdiens.",
                "L'épine de Spix est située en arrière de l'orifice d'entrée du canal dentaire."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Le condyle articulaire de la mandibule est une saillie ellipsoïde déjetée en dehors. Les apophyses géni supérieures donnent insertion aux muscles génio-hyoïdiens. La mandibule est formée d'un corps et de deux branches. La face antérieure de l'arc mandibulaire (corps) présente la protubérance mentonnière. L'épine de Spix est située en avant et médialement à l'orifice d'entrée du canal dentaire inférieur."
        },
        {
            questionText: "L'étage moyen de la base du crâne : cochez la ou les propositions fausses .",
            options: [
                "Il est appelé étage sphénoïde-temporal.",
                "Il est limité en arrière par le versant antéro-supérieur du rocher temporal.",
                "Il est constitué par le sphénoïde et le temporal.",
                "Il est traversé par le trou ovale.",
                "Il est traversé par le trou déchiré postérieur."
            ],
            correctOptionIndexes: [4],
            explanation: "Cette question demande les propositions *fausses*. Le trou déchiré postérieur (foramen jugulaire) est un élément de l'étage *postérieur* de la base du crâne, et non de l'étage moyen. Les propositions A, B, C et D sont factuellement correctes concernant l'étage moyen."
        },
        {
            questionText: "Le foramen jugulaire est traversé par les éléments suivants : cochez la réponse juste",
            options: [
                "Les nerfs crâniens : III, IV, VI, VI.",
                "Les nerfs crâniens : IX, X, XI.",
                "L’artère méningée moyenne.",
                "L'artère carotide interne.",
                "Les nerfs crâniens : VII, VIII."
            ],
            correctOptionIndexes: [1],
            explanation: "Le foramen jugulaire (trou déchiré postérieur) livre passage aux nerfs crâniens glossopharyngien (IX), vague (X) et accessoire (XI), ainsi qu'à la veine jugulaire interne. Les nerfs III, IV, VI et V1 passent par la fissure orbitaire supérieure. L'artère méningée moyenne et l'artère carotide interne ont d'autres passages. Les nerfs VII, VIII passent par le méat acoustique interne."
        },
        {
            questionText: "Cochez la ou les propositions fausses :",
            options: [
                "L'ATM est une synarthrose.",
                "La cavité glénoïde temporale est divisée en deux versants par la scissure de Glaser.",
                "Le tympanal est le versant articulaire de la cavité glénoïde.",
                "Le condyle temporal correspond à la racine transversale de l'apophyse zygomatique.",
                "Le condyle mandibulaire présente un versant postérieur aplati articulaire."
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "Cette question demande les propositions *fausses*. A. L'ATM (articulation temporo-mandibulaire) est une diarthrose (articulation mobile), pas une synarthrose (articulation immobile). Donc A est une proposition fausse. B. La cavité glénoïde temporale (fosse mandibulaire) n'est pas divisée en deux versants par la scissure de Glaser. C'est la fissure pétro-tympanique qui divise la fosse mandibulaire en une partie articulaire et une partie non articulaire. Donc B est une proposition fausse. C. Le tympanal n'est pas le versant articulaire de la cavité glénoïde. Le versant articulaire est la partie de la fosse mandibulaire et du tubercule articulaire du temporal. Donc C est une proposition fausse. D. Le condyle temporal n'est pas la racine transversale de l'apophyse zygomatique. C'est la racine postérieure du processus zygomatique qui est parfois appelée tubercule articulaire ou condyle temporal. La formulation est imprécise mais tend vers le faux si on considère le condyle comme étant distinct. Donc D est une proposition fausse. E. Le condyle mandibulaire présente une surface articulaire convexe, non aplatie. Donc E est une proposition fausse. Dans ce QCM, toutes les propositions sont factuellement incorrectes."
        },
        {
            questionText: "Les mouvements d'abaissement et d'élévation de l'ATM : cochez la réponse juste",
            options: [
                "Ils se font dans le plan vertical.",
                "Ils se font dans le plan horizontal.",
                "Ils se produisent par rotation non simultanée des condyles.",
                "La phase initiale du mouvement est déterminée par la translation en avant des deux condyles.",
                "Toutes ces réponses sont fausses."
            ],
            correctOptionIndexes: [0],
            explanation: "Les mouvements d'abaissement (ouverture) et d'élévation (fermeture) de l'articulation temporo-mandibulaire (ATM) se font dans le plan vertical. Ils impliquent une combinaison de rotation (en phase initiale) et de translation des condyles mandibulaires. La phase initiale est surtout rotatoire, suivie de translation."
        },
        {
            questionText: "Concernant les os du crâne : (2023 3°EMD)",
            options: [
                "Le crâne est une boîte osseuse ovoïde à grand axe antéro-postérieur et à grosse extrémité antérieure.",
                "Est composé de 8 os soudés entre eux.",
                "Il y a trois os médians et impairs.",
                "Il y a deux os pairs et latéraux.",
                "L'os temporal fait partie des os pairs et médian."
            ],
            correctOptionIndexes: [1],
            explanation: "Le crâne est composé de 8 os soudés entre eux (frontal, occipital, sphénoïde, ethmoïde - impairs et médians ; pariétaux et temporaux - pairs et latéraux). La boîte crânienne est ovoïde à grand axe antéro-postérieur et à grosse extrémité *postérieure*. Il y a 4 os médians et impairs. Il y a 2 os pairs et latéraux (pariétal et temporal). L'os temporal est pair et latéral."
        },
        {
            questionText: "Concernant les os du crâne : (2023 3°EMD)",
            options: [
                "L'os ethmoïde s'articule avec tous les os du crâne.",
                "L'os occipital participe uniquement à la formation de la calvaria.",
                "L'os temporal renferme l'organe vestibulo-cochléaire.",
                "L'os sphénoïde présente le foramen magnum.",
                "L'os frontal comporte l'écaille qui est verticale."
            ],
            correctOptionIndexes: [2, 4],
            explanation: "L'os temporal renferme l'organe vestibulo-cochléaire (oreille interne). L'os frontal comporte une écaille qui est verticale. C'est le sphénoïde qui s'articule avec tous les os du crâne. L'os occipital participe à la formation de la calvaria (voûte) et de la base du crâne. C'est l'os occipital qui renferme le foramen magnum."
        },
        {
            questionText: "Concernant la base du crâne : (2023 3°EMD)",
            options: [
                "L'étage antérieur est ethmoïdo-frontal.",
                "L'étage moyen est ethmoïdo-sphénoidal.",
                "L'étage moyen est ethmoïdo-sphénoïdo-temporal.",
                "L'étage postérieur est occipito-temporal.",
                "La base du crâne livre passage à des éléments vasculo-nerveux."
            ],
            correctOptionIndexes: [0, 3, 4],
            explanation: "L'étage antérieur de la base du crâne est ethmoïdo-frontal. L'étage moyen est sphéno-temporal. L'étage postérieur est occipito-temporal. La base du crâne est criblée de nombreux orifices qui livrent passage à des éléments vasculo-nerveux."
        },
        {
            questionText: "Concernant les fontanelles : (2023 3°EMD)",
            options: [
                "La fontanelle est un espace situé entre les os de la calvaria.",
                "La fontanelle est un espace situé entre les os de la base.",
                "La fontanelle bregmatique est médiane et antérieure.",
                "La fontanelle astérique est située entre les os : pariétal, occipital et temporal.",
                "Les fontanelles ont un intérêt pratique."
            ],
            correctOptionIndexes: [0, 2, 3, 4],
            explanation: "Une fontanelle est un espace membraneux non ossifié situé entre les os de la calvaria (voûte crânienne) chez le nourrisson. La fontanelle bregmatique est médiane et antérieure. La fontanelle astérique est située à la jonction des os pariétal, occipital et temporal. Les fontanelles ont un intérêt pratique en pédiatrie pour l'examen neurologique et l'appréciation de la croissance du crâne."
        },
        {
            questionText: "Concernant la base du crâne : (2023 3°EMD)",
            options: [
                "Est formée par les os pariétaux et l'os frontal.",
                "Elle protège la face supérieure du cerveau.",
                "Elle est de forme irrégulière.",
                "Elle est divisée en 03 étages.",
                "Elle présente 03 faces."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "La base du crâne est de forme irrégulière et est divisée en trois étages (antérieur, moyen, postérieur). Elle est formée par des parties du frontal, ethmoïde, sphénoïde, temporaux et occipital, mais pas les pariétaux. Elle protège la face inférieure du cerveau. Elle présente deux faces : une endocrânienne et une exocrânienne."
        },
        {
            questionText: "Les sutures du crâne sont : (2023 3°EMD)",
            options: [
                "En avant : la suture coronale.",
                "En arrière, la suture lambdoïde.",
                "Au milieu : la suture sagittale.",
                "Au milieu : la suture coronale.",
                "Latéralement les sutures pariéto-temporales."
            ],
            correctOptionIndexes: [0, 1, 2, 4],
            explanation: "En avant, la suture coronale relie le frontal aux pariétaux. En arrière, la suture lambdoïde relie l'occipital aux pariétaux et temporaux. Au milieu, la suture sagittale relie les deux pariétaux. Latéralement, les sutures pariéto-temporales relient les pariétaux aux temporaux."
        },
        {
            questionText: "Le massif facial : (2023 3°EMD)",
            options: [
                "La mâchoire supérieure est formée par des os, tous pairs.",
                "L'os palatin comprend 02 parties soudées, horizontale et verticale.",
                "Le vomer forme la partie postéro-inférieure du septum nasal.",
                "L'os nasal est un os impair.",
                "L'os zygomatique est situé sur la face latérale de la face."
            ],
            correctOptionIndexes: [1, 2, 4],
            explanation: "L'os palatin comprend deux parties soudées, une lame horizontale et une lame verticale. Le vomer forme la partie postéro-inférieure du septum nasal (cloison nasale). L'os zygomatique est situé sur la face latérale de la face. La mâchoire supérieure est formée de plusieurs os pairs (maxillaire, zygomatique, nasal, lacrymal, palatin, cornet inférieur) et de l'ethmoïde (impair), donc pas tous pairs. L'os nasal est un os pair."
        }
    ]
  }
];

module.exports = anatomyQuizzes;