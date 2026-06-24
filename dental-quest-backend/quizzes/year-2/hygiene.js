const hygieneQuizzes = [
  {
    "title": "Ergonomie au cabinet dentaire",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Sont considérés comme salles importantes dans un cabinet dentaire :",
        "options": [
          "Le secrétariat.",
          "Les sanitaires.",
          "La salle de radiologie.",
          "La salle des pansement."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La salle d'attente, la salle de soins (opératoire), la salle de stérilisation et celle de radiographie sont vitales pour le fonctionnement du cabinet. Les sanitaires sont nécessaires mais pas considérés comme une salle 'technique' principale."
      },
      {
        "questionText": "N°15 (2022 EMD - Q1453\nSont considérées comme salles facultatives:",
        "options": [
          "La salle de stérilisation.",
          "La salle des machines.",
          "La salle de repos.",
          "Le laboratoire."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Un cabinet peut fonctionner sans avoir sa propre salle de repos ou son propre laboratoire de prothèse (il peut externaliser ce service)."
      },
      {
        "questionText": "N°16 (2022 EMD - Q1471\nPour l'éclairage de la cavité buccale il est nécessaire que",
        "options": [
          "La zone devrait être éclairée entre 8000 et 12000 LUX.",
          "La zone devrait être éclairée moms de 8000 LUX.",
          "la zone devrait être éclairée plus de 12000 LUX.",
          "Peu importe l'intensité d'éclairage."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Un éclairage intense et précis (entre 8000 et 12000 LUX) sur la zone de travail est crucial pour bien voir les détails dans la bouche et travailler en sécurité."
      },
      {
        "questionText": "N°3 (2020 EMD - Q1903\nLes paramètres d'aménagement de l'espace de travail sont:",
        "options": [
          "Avoir au minimum deux fauteuils dentaires.",
          "Doter le cabinet dentaire de lumière artificielle pour un bon éclairage.",
          "Avoir un équipement le plus sophistiqué possible.",
          "Avoir une bonne situation du cabinet loin du bruit."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les paramètres d’aménagement de l’espace de travail: sont essentiellement, la lumière, la chromatique, le bruit, la température et\n l’éclairage.\n On doit assurer au cabinet la lumière naturelle, par l’orientation de la fenêtre vers le Nord."
      },
      {
        "questionText": "N°11 (2020 EMD - Q1925\nParmi les objectifs de l'ergonomie, on a",
        "options": [
          "L'amélioration de la rentabilité du cabinet médical.",
          "L'amélioration des connaissances du praticien.",
          "L'adaptation des systèmes de travail et d'usage à l'homme.",
          "Le renouvellement continu des équipements du cabinet."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'ergonomie vise à adapter le travail à l'humain pour améliorer son confort et son efficacité. Une meilleure efficacité entraîne naturellement une meilleure rentabilité."
      },
      {
        "questionText": "N°3 (2018 Synthèse - Q2051\nLe facteur scientifique en ergonomie :",
        "options": [
          "La conception.",
          "La totalité de l'équipe stomatologique.",
          "Le facteur le plus mobile.",
          "Deux directions fondamentales."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Fa Le facteur scientifique : l’ergonomie stomatologique est orientée dès ses débuts vers 3 directions fondamentales : \n \n la recherche\n la conception (la projection)\n la correction \n  \n la totalité de l’équipe stomatologique est le facteur humain.\n Le facteur le plus mobile est le facteur technique."
      },
      {
        "questionText": "N°13 (2021 EMD - Q1771\nLa température idéale dans un cabinet dentaire est de :",
        "options": [
          "Entre 16 et 18 degrés.",
          "20 degrés.",
          "25 degrés.",
          "Toujours supérieure à 20 degrés."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une température de 20°C est considérée comme le meilleur compromis pour le confort des patients (souvent immobiles) et de l'équipe soignante (en activité)."
      },
      {
        "questionText": "L'ergonomie a pour objectif principal :",
        "options": [
          "D'augmenter la vitesse de travail.",
          "De réduire la fatigue et les risques de maladies professionnelles.",
          "De diminuer les coûts du matériel.",
          "De rendre le cabinet plus esthétique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le but ultime de l'ergonomie est de préserver la santé du praticien et de son équipe en réduisant les contraintes physiques et mentales."
      },
      {
        "questionText": "La \"zone de transfert\" dans le travail à quatre mains se situe :",
        "options": [
          "Derrière la tête du patient.",
          "Au-dessus de la poitrine du patient.",
          "À côté du praticien.",
          "Dans le dos de l'assistante."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est la zone neutre et sécurisée au-dessus du torse du patient où le praticien et l'assistante peuvent s'échanger les instruments sans risque et sans quitter le champ de vision."
      },
      {
        "questionText": "Une bonne posture de travail pour le dentiste inclut :",
        "options": [
          "Le dos courbé pour mieux voir.",
          "Les pieds croisés sous le tabouret.",
          "Les cuisses parallèles au sol et les pieds à plat.",
          "Les épaules relevées pour atteindre les instruments."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Cette position neutre assure une bonne répartition du poids et minimise les tensions sur la colonne vertébrale, les épaules et le cou."
      },
      {
        "questionText": "Le \"travail à quatre mains\" implique la collaboration entre :",
        "options": [
          "Deux chirurgiens-dentistes.",
          "Le chirurgien-dentiste et son prothésiste.",
          "Le chirurgien-dentiste et l'aide-dentaire.",
          "Le patient et le chirurgien-dentiste."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est le concept de travail coordonné entre le praticien et son assistant(e) pour optimiser l'efficacité, réduire la fatigue et améliorer la qualité des soins."
      },
      {
        "questionText": "Pour un praticien droitier, la zone de travail de l'opérateur se situe classiquement :",
        "options": [
          "Entre 12h et 14h.",
          "Entre 14h et 17h.",
          "Entre 7h et 12h.",
          "Entre 4h et 7h."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "En se basant sur un cadran d'horloge autour du patient, la zone du praticien droitier est positionnée entre 7h et 12h pour permettre un accès direct et sans torsion."
      },
      {
        "questionText": "Un mouvement de Classe III dans la classification des mouvements implique :",
        "options": [
          "Uniquement les doigts.",
          "Les doigts, le poignet et le coude.",
          "Le bras entier depuis l'épaule.",
          "Le torse."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La classification va de I (doigts seuls) à V (torse). La classe III implique tout l'avant-bras, c'est-à-dire les doigts, le poignet et le coude. Il faut viser les mouvements les plus économiques (classe I et II)."
      },
      {
        "questionText": "L'éclairage d'ambiance général du cabinet dentaire doit être :",
        "options": [
          "Plus puissant que l'éclairage du scialytique.",
          "De même intensité que le scialytique pour éviter les contrastes.",
          "Suffisant pour la circulation mais nettement moins intense que le scialytique.",
          "De couleur chaude (jaune) pour relaxer le patient."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Pour éviter la fatigue visuelle due à des contrastes trop violents, l'éclairage général (environ 500 Lux) doit être moins fort que celui du champ opératoire (plus de 8000 Lux), mais suffisant pour ne pas être dans la pénombre."
      },
      {
        "questionText": "Les troubles musculo-squelettiques (TMS) sont principalement causés par :",
        "options": [
          "Le stress psychologique.",
          "Les mauvaises postures et les mouvements répétitifs.",
          "L'exposition au bruit.",
          "Le contact avec les produits chimiques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les TMS sont des maladies qui touchent les muscles, les tendons et les nerfs, et qui sont directement liées aux contraintes physiques d'une mauvaise posture et de la répétition des mêmes gestes."
      },
      {
        "questionText": "N°11 (2021 EMD - Q1725\nL'ergonomie :",
        "options": [
          "C'est le rapport entre l'homme et l'outil ;",
          "C'est une science qui repose sur les facteurs techniques et scientifiques uniquement;",
          "C'est l'étude des conditions de travail;",
          "A pour objectif l'économie des mouvements."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Le terme ERGONOMIE C’est l’étude des conditions de travail c'est-à dire les rapports entre l’homme et l’outil.\n L’objectif de toute ergonomie est l’économie des mouvements qui s’obtient par l’organisation du travail.\n C’est une science qui repose sur les facteurs scientifiques, techniques et humain."
      },
      {
        "questionText": "N°12 (2021 EMD - Q1742\nLes paramètres ergonomiques de l'espace de travail :",
        "options": [
          "La lumière;",
          "La chromatique ;",
          "Le bruit ;",
          "La température."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Les paramètres ergonomiques de l’espace de travail sont :\n   La lumière\n  La chromatique \n  Le bruit \n  La température\n  L’éclairage"
      },
      {
        "questionText": "N°9 (2023 EMD - Q1004\nLa température idéale dans un cabinet stomatologique est de",
        "options": [
          "Entre 16 et 18 degrés",
          "20 degrés",
          "25 degrés",
          "Supérieur à 20 degrés"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2022 EMD - Q1450\nSont considérées comme salles importantes dans un cabinet dentaire ou les normes doivent êtres respectées :",
        "options": [
          "Le secrétariat;",
          "Les sanitaires;",
          "La salle de radiologie;",
          "La salle des pansements"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les salles importantes dans un cabinet dentaire sont :\n -Le secrétariat\n -La salle de radiographie\n -La salle d’attente\n -Les sanitaires\n -La salle opératoire\n -La salle des machines\n -La salle de stérilisation"
      }
    ]
  },
  {
    "title": "Risques et maladies professionnelles",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°15 (2018 EMD - Q2089\nLe germe de la tuberculose:",
        "options": [
          "Un virus.",
          "Un champignon.",
          "Le bacille de Koch.",
          "Le staphylocoque doré."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les praticiens peuvent contrôler leur état d'immunité antituberculeuse par le test d'Intradermoréaction (IDR) à la tuberculine, afin de pratiquer si nécessaire un rappel vaccinal.\n Les mycobactéries responsables sont bacilles de Koch.\n la contagiosité disparaît en 2 à 4 semaines, à condition d'associer les antituberculeux et les prescrire pendant au moins 9 mois.\n Pour le chirurgien dentiste, la meilleure prophylaxie est vaccinale."
      },
      {
        "questionText": "N°12 (2019 EMD - Q2009\nDans les infections herpétiques, le chirurgien dentiste:",
        "options": [
          "L'herpès simplex 2 (génital).",
          "L'herpès simplex 1 (labial).",
          "L'herpès zoster (zona).",
          "L'herpès virus 6."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les herpès virus humains 1 et plus rarement 2, peuvent être accidentellement transmis au praticien. Communément appelés Herpes Simplex I et II. \n Les praticiens ne peuvent se protéger qu'en appliquant rigoureusement les mesures habituelles d'hygiène et de prévention, en évitant de traiter des patients présentant une lésion herpétique manifeste."
      },
      {
        "questionText": "N°7 (2021 EMD - Q1661\nLes germes du 3ème groupe :",
        "options": [
          "La flore buccale normale.",
          "Les virus des maladies infantiles (ex: rougeole).",
          "Le VIH, les virus des hépatites B et C.",
          "Les streptocoques et staphylocoques."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "-Le troisième groupe, est constitue de germes pathogènes portés par des patients malades et qui représentent un risque professionnel majeur pour le personnel soignant. Il s'agit de la tuberculose, de la grippe, des infections à herpès virus, des hépatites A, B et C et du Sida.\n -C’est Le second groupe qui comporte des germes pathogènes, mais fréquents, comme les bactéries pyogènes (Staphylocoques aureus, Streptocoques pyogènes), les virus respiratoires, les virus des maladies de l'enfance, ainsi que les Candida Albicans."
      },
      {
        "questionText": "N°8 (2021 EMD - Q1676\nLa tuberculose pulmonaire:",
        "options": [
          "La première dose de traitement.",
          "24 heures de traitement.",
          "2 à 4 semaines de traitement efficace.",
          "6 mois de traitement."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La contagiosité disparaît en 2 à 4 semaines, à condition d'associer les antituberculeux et les prescrire pendant au moins 9 mois.\n Le contrôle de l’état d'immunité antituberculeuse est fait par le test d'Intradermoréaction (IDR) à la tuberculine."
      },
      {
        "questionText": "Une maladie est dite \"professionnelle\" si elle est :",
        "options": [
          "Attrapée au travail par un collègue.",
          "La conséquence directe de l'exposition à un risque lié à l'exercice habituel de la profession.",
          "Une maladie grave qui empêche de travailler.",
          "Une chute ou un accident ponctuel sur le lieu de travail."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La définition légale d'une maladie professionnelle implique un lien de causalité direct entre la maladie et les risques spécifiques et habituels du métier exercé."
      },
      {
        "questionText": "La principale voie de transmission du VIH au cabinet dentaire est :",
        "options": [
          "La projection d'aérosols.",
          "Le contact avec la salive.",
          "L'exposition percutanée au sang (piqûre, coupure).",
          "Le contact avec la peau intacte."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le risque majeur de transmission du VIH, de l'hépatite B et C est l'Accident d'Exposition au Sang (AES) via une piqûre ou coupure avec un instrument contaminé."
      },
      {
        "questionText": "Quel vaccin est essentiel et fortement recommandé pour le personnel du cabinet dentaire ?",
        "options": [
          "Le vaccin contre la grippe.",
          "Le vaccin contre l'hépatite B.",
          "Le vaccin contre le tétanos.",
          "Le vaccin contre la rougeole."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "En raison du risque élevé d'exposition au sang et de la gravité de l'hépatite B, la vaccination est la mesure de prévention la plus efficace et une obligation pour les soignants."
      },
      {
        "questionText": "Les troubles musculo-squelettiques (TMS) chez le dentiste affectent le plus souvent :",
        "options": [
          "Les pieds et les chevilles.",
          "Le rachis cervical, les épaules et les poignets.",
          "Les genoux et les hanches.",
          "L'abdomen."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les postures statiques, les mouvements répétitifs et les positions contraignantes sollicitent énormément le cou, le haut du dos, les épaules et les mains, qui sont les zones les plus touchées."
      },
      {
        "questionText": "L'allergie au latex peut se manifester par :",
        "options": [
          "Uniquement une toux sèche.",
          "Des démangeaisions, de l'urticaire ou un choc anaphylactique.",
          "Des caries dentaires.",
          "Une perte de cheveux."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'allergie au latex a un spectre de réactions allant de la simple irritation cutanée (eczéma) à la réaction systémique grave et potentiellement mortelle (choc anaphylactique)."
      },
      {
        "questionText": "Le risque chimique historiquement associé aux cabinets dentaires est lié à l'exposition aux vapeurs de :",
        "options": [
          "Chlore.",
          "Formaldéhyde.",
          "Mercure.",
          "Oxygène."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les amalgames dentaires ('plombages') contiennent du mercure. Leur préparation et leur dépose peuvent libérer des vapeurs de mercure toxiques pour le système nerveux."
      },
      {
        "questionText": "Que doit faire un soignant immédiatement après une piqûre accidentelle avec une aiguille souillée ?",
        "options": [
          "Terminer le soin en cours.",
          "Mettre un pansement et ne rien dire.",
          "Ne pas nettoyer la plaie pour ne pas diffuser le virus.",
          "Nettoyer la plaie à l'eau et au savon, rincer, désinfecter et déclarer l'accident."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C'est la procédure d'urgence. Il faut nettoyer immédiatement pour réduire la charge virale, désinfecter, et surtout déclarer l'accident pour évaluer le risque et démarrer si besoin un traitement post-exposition."
      },
      {
        "questionText": "Le risque lié aux aérosols produits par les instruments rotatifs est principalement de nature :",
        "options": [
          "Chimique.",
          "Infectieuse.",
          "Traumatique.",
          "Thermique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les aérosols sont des micro-gouttelettes contenant de la salive, du sang et des micro-organismes de la bouche du patient, qui peuvent être inhalés par le personnel soignant et contaminer les surfaces."
      },
      {
        "questionText": "La surdité professionnelle chez le dentiste peut être causée par :",
        "options": [
          "Le silence prolongé entre les patients.",
          "Les conversations avec les patients.",
          "Le bruit aigu et répété de la turbine et du détartreur.",
          "L'utilisation du compresseur."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'exposition chronique aux hautes fréquences sonores (sons aigus) émises par les instruments dynamiques peut, à long terme, causer des lésions irréversibles des cellules de l'oreille interne."
      },
      {
        "questionText": "Le panaris péri-unguéal herpétique est une infection qui touche :",
        "options": [
          "La gencive.",
          "La lèvre.",
          "Le doigt.",
          "L'œil."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est une infection herpétique qui peut se développer sur le doigt d'un praticien (notamment avant l'usage systématique des gants) suite à un contact avec la salive d'un patient porteur du virus."
      },
      {
        "questionText": "Le burn-out, ou épuisement professionnel, est un risque :",
        "options": [
          "Infectieux.",
          "Chimique.",
          "Physique.",
          "Psychosocial."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C'est un état de fatigue intense, de perte de contrôle et de démotivation lié au stress chronique au travail. C'est un risque psychosocial majeur dans les professions de santé."
      },
      {
        "questionText": "N°6 (2021 EMD - Q1643\nDans les infections herpétiques, le médecin dentiste :",
        "options": [
          "Est le plus souvent exposé à l'herpès simplex 2;",
          "Est le plus souvent exposé à l'herpès simplex 1 ;",
          "Est le plus souvent exposé aux deux types de virus dans la même proportion;",
          "Ne pas éviter de traiter des patients dont les lésions sont manifestes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les herpès virus humains 1 et plus rarement 2, peuvent être accidentellement transmis au praticien. Communément appelés Herpes Simplex I et II. \n Les praticiens ne peuvent se protéger qu'en appliquant rigoureusement les mesures habituelles d'hygiène et de prévention, en évitant de traiter des patients présentant une lésion herpétique manifeste."
      },
      {
        "questionText": "N°9 (2021 EMD - Q1687\nLes germes en cause dans la transmission des maladies infectieuses chez le médecin dentiste :",
        "options": [
          "Germes du premier groupe;",
          "Germes du 2ème groupe uniquement;",
          "Germes du 2ème et 3eme groupe;",
          "Germes du 3e groupe uniquement."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les germes susceptibles d'être transmis par les patients peuvent être séparés en trois groupes : Dans le premier, sont réunies les flores commensales orales et rhinopharyngées des patients sains, qui ne constituent aucune menace pour le personnel soignant contrairement aux germe du 2ème et 3ème groupe."
      },
      {
        "questionText": "N°10 (2021 EMD - Q1704\nLes germes du 1er groupe représentent :",
        "options": [
          "Les germes pathogènes majeurs ;",
          "La tuberculose ainsi que les germes de l'hépatite;",
          "Les virus ainsi que les candidas albicans;",
          "La flore commensale orale et rhinopharyngée."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Dans les germes du premier gourpes, sont réunies les flores commensales orales et rhinopharyngées des patients sains, qui ne constituent aucune menace pour le personnel soignant."
      },
      {
        "questionText": "N°14 (2020 EMD - Q1935\nUne maladie professionnelle est la conséquence de:",
        "options": [
          "Chute accidentelle dans le cabinet.",
          "L'exposition à un risque lors de l'exercice habituel de la profession,",
          "La transmission d'agents infectieux véhiculés par le sang.",
          "Malaise lipothymique du malade."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "-Une maladie professionnelle est la conséquence de l’exposition plus ou moins prolongée à un risque (physique, chimique, psychique ou biologique) qui existe lors de l’exercice habituel de la profession (dont le risque de transmission d'agents infectieux concerne l'ensemble des germes véhiculés par le sang ou les liquides biologiques du patient)"
      },
      {
        "questionText": "N°15 (2019 EMD - Q2014\nles germes en cause dans la transmission des maladies infectieuses chez le chirurgien dentiste:",
        "options": [
          "Germes du premier groupe",
          "Germes du 2eme groupe uniquement",
          "Germes du 2eme et 3eme groupe",
          "Germes du 3eme groupe uniquement"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "•Dans le premier groupe, sont réunies les flores commensales orales et rhinopharyngées des patients sains, qui ne constituent aucune menace pour le personnel soignant."
      },
      {
        "questionText": "N°1 (2018 Synthèse - Q2042\nLe second groupe des germes pathogènes comporte:",
        "options": [
          "Les germes de la tuberculose",
          "Les germes de l'hépatite A",
          "La flore commensale",
          "Les staphylocoques aureus, les streptocoques pyogènes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le second groupe comporte des germes pathogènes, mais fréquents, comme les bactéries pyogènes (Staphylocoques aureus, Streptocoques pyogènes), les virus respiratoires, les virus des maladies de l'enfance, ainsi que les Candida Albicans.\n La tuberculose et l’hepatite A sont des germes du 3ème groupe.\n Les flores commensales sont des germes du premier groupe"
      },
      {
        "questionText": "N°2 (2018 Synthèse - Q2046\nLa contamination parentérale :",
        "options": [
          "Peut être directe",
          "Est une contamination aérienne",
          "Peut être indirecte",
          "Se fait par le biais d'une aiguille souillée par le sang"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Contamination par voie parentérale peut être directe par contact entre le sang ou la salive infectée et une coupure même minime au niveau des mains du praticien. La transmission peut être indirecte par le biais d'un instrument ou d'une aiguille souillée par le sang ou la salive."
      },
      {
        "questionText": "N°4 (2023 EMD - Q913\nLe contrôle du risque infectieux passe par:",
        "options": [
          "L'utilisation des instruments à usage unique",
          "Le refus de prendre en charge des malades à risque",
          "Faire des contrôles sanitaires du personnel médical",
          "La disposition d'un lave-mains à commande."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2022 EMD - Q1375\nUne infection Herpétique:",
        "options": [
          "Est une maladie du 2eme groupe",
          "Est une maladie du 3eme groupe",
          "Herpes simplex I est plus fréquemment transmissible au c",
          "Le type II est caractérisé par des éruptions principalement labiales"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Herpes Simplex I et plus rarement II peuvent être accidentellement transmis au praticien.\n Le type I est plus fréquent dans les éruptions labiales et le type II, dans les éruptions génitales."
      },
      {
        "questionText": "N°11 (2022 EMD - Q1387\nL'hépatite",
        "options": [
          "Est de transmission uniquement percutanée",
          "Peut-être à transmission verticale",
          "Est un virus ADN",
          "Fait partie du 3eme groupe."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les 3 modes de transmission principaux sont : \n • La transmission percutanée (l'exposition accidentelle professionnelle au sang, les transfusions sanguines ou des dérivés sanguins, toxicomanie intraveineuse).\n • La transmission sexuelle.\n • La transmission verticale de la mère A l'enfant."
      }
    ]
  },
  {
    "title": "Fluor",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°5 (2023 EMD - Q928\nLes fluorures agissent:",
        "options": [
          "Rendant l'émail plus résistant aux attaques acides.",
          "Inhibant le métabolisme des bactéries cariogènes.",
          "Favorisant la reminéralisation de l'émail.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les fluorures agissent essentiellement sur le métabolisme cellulaire des améloblastes responsables de la formation et de la maturation initiale de l’émail. Les fluorures interviennent successivement sur les phases de sécrétion de la matrice amélaire ( email immature riche en amelogenine ) , de réabsorption matricielle( dégradation enzymatique de l’amelogénine) et de minéralisation aboutissant à une forme stable d’hydroxyapatite carbonatée ou l’en présume que le fluor s’est intégré à la maille cristalline.\n -Les fluorures inhibent le métabolisme des bacteries cariogènes par interaction avec l’énolase (métalloenzyme responsable de la conversion des glucides en acides dans la voie de la glycolyse); l’inhibition de l’énolase reduit directement la production acide par interruption de la glycolyse."
      },
      {
        "questionText": "N°15 (2020 EMD - Q1936\nL'utilisation des dentifrices fluorés:",
        "options": [
          "Uniquement pour les enfants.",
          "Uniquement pour les personnes à risque carieux élevé.",
          "Dès l'apparition de la première dent.",
          "Seulement à partir de 6 ans."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La recommandation actuelle est de commencer le brossage avec une trace de dentifrice fluoré (adapté à l'âge) dès la sortie de la toute première dent de lait pour une protection précoce."
      },
      {
        "questionText": "Le risque principal d'un apport excessif en fluor pendant la formation des dents est :",
        "options": [
          "L'apparition de caries.",
          "La coloration jaune des dents.",
          "La fluorose dentaire.",
          "La perte prématurée des dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un excès de fluor durant la période où les dents se forment dans la mâchoire perturbe la minéralisation de l'émail, créant des taches blanches ou brunes appelées fluorose."
      },
      {
        "questionText": "Quelle est la principale source d'apport en fluor par voie topique (locale) ?",
        "options": [
          "L'eau de boisson.",
          "Le sel fluoré.",
          "Les dentifrices et bains de bouche.",
          "Certains poissons et thés."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'action topique signifie que le fluor est appliqué directement sur la surface des dents. Les dentifrices et les bains de bouche sont les moyens les plus courants et efficaces pour cet apport local."
      },
      {
        "questionText": "L'action du fluor est plus efficace quand l'apport est :",
        "options": [
          "Unique mais à très forte dose.",
          "Quotidien et à faible dose.",
          "Uniquement en phase pré-éruptive (avant la sortie des dents).",
          "Uniquement sous forme de comprimés."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La recherche a montré qu'une exposition régulière et fréquente des dents au fluor, même à faible concentration (comme avec le dentifrice), est la stratégie la plus efficace pour prévenir la carie."
      },
      {
        "questionText": "Le fluor agit sur le métabolisme des bactéries en inhibant une enzyme clé appelée :",
        "options": [
          "L'amylase.",
          "La lipase.",
          "L'énolase.",
          "La pepsine."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le fluor bloque l'énolase, une enzyme essentielle pour que les bactéries puissent transformer le sucre en acide. En bloquant cette enzyme, on réduit la production d'acides qui attaquent l'émail."
      },
      {
        "questionText": "La concentration en fluor dans un dentifrice pour un enfant de 3 à 6 ans doit être :",
        "options": [
          "Inférieure à 500 ppm.",
          "Entre 1000 et 1500 ppm.",
          "Nulle, il faut un dentifrice sans fluor.",
          "Identique à celle d'un adulte."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Pour cet âge, on recommande une concentration de 500 ppm (ou moins) pour assurer une protection efficace tout en minimisant le risque de fluorose si l'enfant avale du dentifrice."
      },
      {
        "questionText": "L'application de vernis fluorés par le dentiste est une mesure :",
        "options": [
          "De prévention primaire.",
          "De traitement curatif de la carie.",
          "De diagnostic.",
          "Esthétique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C'est une mesure de prévention destinée à empêcher l'apparition de nouvelles caries, en particulier chez les patients à risque élevé, en renforçant l'émail."
      },
      {
        "questionText": "Laquelle de ces affirmations sur la fluorose est VRAIE ?",
        "options": [
          "Elle rend les dents plus fragiles et plus susceptibles à la carie.",
          "Elle peut être corrigée par un simple brossage.",
          "Elle n'apparait que sur les dents de lait.",
          "Elle est un défaut esthétique de l'émail mais les dents atteintes sont souvent très résistantes à la carie."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Bien que la fluorose soit un problème esthétique (taches), l'émail touché par une forme légère à modérée est hyperminéralisé en surface, ce qui le rend paradoxalement plus résistant aux attaques acides."
      },
      {
        "questionText": "L'hydroxyapatite est le principal composant minéral de l'émail. Sous l'action du fluor, elle se transforme en :",
        "options": [
          "Carbonate d'apatite.",
          "Chlorapatite.",
          "Fluorapatite.",
          "Oxyapatite."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le fluor remplace certains groupements 'hydroxy' de l'hydroxyapatite pour former de la fluorapatite, un cristal qui est chimiquement plus stable et moins soluble dans les acides."
      },
      {
        "questionText": "L'action post-éruptive du fluor signifie qu'il agit :",
        "options": [
          "Uniquement sur les dents des personnes âgées.",
          "Après l'éruption de la dent dans la cavité buccale.",
          "Pendant la formation de la dent dans la mâchoire.",
          "Après une éruption volcanique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est l'action topique du fluor (dentifrice, bain de bouche) qui agit directement sur la surface de l'émail des dents déjà présentes en bouche."
      },
      {
        "questionText": "La quantité de dentifrice recommandée pour un enfant de moins de 3 ans est :",
        "options": [
          "La taille d'un petit pois.",
          "La taille d'un grain de riz.",
          "La longueur de la brosse à dents.",
          "Aucune."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pour les tout-petits, une quantité infime (la taille d'un grain de riz cru) de dentifrice fluoré est suffisante pour être efficace et sans danger en cas d'ingestion."
      },
      {
        "questionText": "L'apport systémique de fluor (par ingestion) est surtout important :",
        "options": [
          "Chez l'adulte.",
          "Chez la personne âgée.",
          "Pendant la période de formation des dents (odontogenèse).",
          "N'a aucune importance."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'apport systémique (eau, comprimés) permet au fluor d'être intégré directement dans la structure de l'émail pendant sa minéralisation, avant que la dent ne sorte."
      },
      {
        "questionText": "Lequel de ces aliments est une source naturelle notable de fluor ?",
        "options": [
          "Le lait.",
          "Le thé.",
          "Les pommes.",
          "Le pain."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les feuilles de théier ont la particularité de concentrer le fluor présent dans le sol. Le thé est donc l'une des sources alimentaires les plus riches en fluor."
      },
      {
        "questionText": "Les gels fluorés à haute concentration utilisés au cabinet dentaire :",
        "options": [
          "Sont destinés à un usage quotidien à la maison.",
          "Sont réservés aux adultes.",
          "Sont une application professionnelle pour les patients à haut risque carieux.",
          "Sont utilisés pour blanchir les dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Ces produits très concentrés ne doivent être manipulés que par un professionnel pour une application ciblée et sécurisée, afin de donner un 'coup de fouet' protecteur aux dents les plus à risque."
      },
      {
        "questionText": "N°19 (2021 EMD - Q1869\nAprès éruption de la dent, le fluor:",
        "options": [
          "Limite la déminéralisation et favorise la reminéralisation;",
          "Agit essentiellement sur le métabolisme cellulaire des améloblastes;",
          "Un effet sur le métabolisme cellulaire des odonblastes;",
          "Inhibe le métabolisme des bactéries cariogènes."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les fluorures limitent la déminéralisation et favorisent la reminéralisation : Une faible concentration de fluor (inferieure à 0,1ppm) avait la capacité d’inhiber la progression des lésions carieuses .\n Au cours de la phase de reminéralisation, les ions fluor peuvent s’insérer dans les cristaux en cours de reformation de la surface et de la sub-surface de l’émail contribuant à la formation de cristaux enrichis en hydroxyapatite fluorée.\n Les fluorures agissent essentiellement sur le métabolisme cellulaire des améloblasteset ont également un effet sur le métabolisme cellulaire des odonblastes pendant la phase de formation et de maturation pré- éruptive.\n Les fluorures inhibent le métabolisme des bactéries cariogènes :\n Lors de diminution de PH au sein de la plaque, la sensibilité des bactéries aux fluorures est accrue. Plus le PH extracellulaire est bas, plus les ions fluorures pénètrent facilement dans la cellule"
      },
      {
        "questionText": "N°20 (2021 EMD - Q1878\nLa fluorose dentaire :",
        "options": [
          "Est un surdosage en fluor pendant plusieurs mois et années, survenant lors de la période de minéralisation des dents;",
          "Se manifeste par des taches opaques blanches plus ou moins étendues sur l'émail;",
          "N'atteint que les sujets jeunes;",
          "Est un risque lié à un apport excessif en fluor."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "la fluorose dentaire : elle est due à un surdosage en fluor pendant plusieurs mois et années, survenant lors de la période de minéralisation des dents. Le développement complet des cristaux de l’émail est perturbé par l’excès de fluor conduisant à un tissu fluorotique poreux. Elle se manifeste par des taches opaques blanches plus au moins étendues sur l’émail, Il s’agit de zones d’hypo minéralisation ou de porosités diffuses surmontées d’une petite couche d’émail hypermineralisé. Il en résulte une grande vulnérabilité de l’émail avec perte de substance et coloration dans le temps pour les stades les plus avancés."
      },
      {
        "questionText": "N°12 (2020 EMD - Q1928\nLes fluorures agissent sur:",
        "options": [
          "Les tissus dentaires en phase pré- éruptive et post- éruptive.",
          "Le métabolisme cellulaire des améloblastes,",
          "Le composant minéral de la dent et produit une fluoro-hydroxyapatite plus sensible à de futurs épisodes de déminéralisation,",
          "Le métabolisme des bactéries cariogènes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2019 EMD - Q2023\nLes fluorures",
        "options": [
          "Interviennent sur les phases de sécrétion de la matrice dentinaire",
          "Interviennent sur les phases de minéralisation uniquement",
          "Interviennent sur les tissus dentaires en phase pré- éruptive et en phase post-éruptive",
          "Aboutissent à la formation d'une forme instable d'hydroxyapatite"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2019 EMD - Q2025\nLe risque principal de l'apport excessif en fluor",
        "options": [
          "Est la fluorose qui correspond à des zones de porosités diffuses surmontées d'une petite couche d'émail hypo minéral",
          "Est la fluorose dentaire qui se manifeste par des taches opaques blanches plus ou moins étendues sur l'émail",
          "Il en résulte une faible vulnérabilité de l'émail avec perte de substance",
          "La dose à ne pas dépasser pour éviter tout risque de fluorose est de 0,5mg/) par kg de poids corporel"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2018 EMD - Q2052\nUn consensus au sein de la communauté scientifique (OMS) a permis d'établir les recommandations suivantes :",
        "options": [
          "une exposition quotidienne et fréquente à de taux importants de fluorures aura une meilleure action",
          "les apports doivent être réguliers, en particulier sous forme de dentifrices",
          "Conseils hygiéno-diététiques (alimentation fibreuse, riche en protéines et vitamines, pauvre en glucides) et visites régulières chez le médecin dentiste",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "-Une exposition quotidienne et fréquente à de faibles taux de fluorures aura une meilleure action."
      },
      {
        "questionText": "N°13 (2018 EMD - Q2084\nLe fluor pendant la phase de formation et de maturation pré-éruptive:",
        "options": [
          "agit essentiellement sur le métabolisme cellulaire des améloblastes",
          "intervient uniquement sur la phase de sécrétion de la matrice amélaire",
          "aboutit à la formation d'une forme instable d'hydroxyapatite",
          "toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2018 EMD - Q2087\nSelon Les recommandations cliniques d'utilisation des fluorures par les dentistes:",
        "options": [
          "Les personnes à risque élevé de carie dentaire sont uniquement les personnes qui ne se brossent pas les dents avec un dentifrice fluoré",
          "les patients présentant un faible risque carieux ne doivent pas bénéficier d'applications toniques professionnelles de fluorures",
          "Les enfants à risque élevé doivent bénéficier d'applications de fluor à des intervalles de 3 à",
          "Les vernis fluorés contiennent une quantité plus importante de fluor comparativement aux gels fluores"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "En dessous de 6 ans:Le vernis fluoré contient une quantité moindre de fluor comparativement aux gels fluorés."
      },
      {
        "questionText": "N°11 (2024 EMD - Q661\nLes actions du fluor sont:",
        "options": [
          "Des problèmes de fluorose",
          "Be Un effet sur le métabolisme cellulaire des odontoblastes",
          "Inhiber la progression de lésions carieuses",
          "Activer le métabolisme des bactéries cariogènes"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2024 EMD - Q680\nLa Supplémentation de fluor pour la prévention se fait :",
        "options": [
          "Par comprimés ou pastilles à sucer dès 4 ans",
          "Par des bains de bouche fluorés à partir de 6 ans.",
          "La prescription de gouttes à badigeonner dès 2 ans",
          "Par application de vernis ou de gel fluorés pour patients à risque élevé"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2023 EMD - Q978\nL'utilisation de dentifrices fluorés:",
        "options": [
          "Est recommandée dès l'apparition des premières dents permanentes;",
          "Dosés entre 1000 et 1500 ppm est recommandée à partir de l'âge de 6 ans ;",
          "Avant 6 ans : le dentifrice est déposé dans le sens de la longueur de la brosse à dents;",
          "Est indépendante du risque carieux."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "-Leur utilisation est recommandée dès l’apparition des premières dents temporaires.\n -Avant 6 ans le dentifrice est deposé dans le sens de la largeur de la brosse à dents."
      }
    ]
  },
  {
    "title": "Santé Bucco-Dentaire et Populations à Risque",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Les maladies parodontales peuvent augmenter le risque de :",
        "options": [
          "Maladies cardio-vasculaires.",
          "Accouchement prématuré.",
          "Déséquilibre du diabète.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L'inflammation chronique et les bactéries issues de la maladie parodontale peuvent passer dans la circulation sanguine et avoir un impact négatif sur la santé générale, notamment sur le cœur, le contrôle du diabète et le déroulement de la grossesse."
      },
      {
        "questionText": "La formation d'hyperplasies gingivales (augmentation du volume de la gencive) peut être liée à la prise de :",
        "options": [
          "Paracétamol.",
          "Antibiotiques.",
          "Ciclosporine (un anti-rejet).",
          "Vitamines."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Certains médicaments, comme la ciclosporine (utilisée chez les patients greffés) ou certains anti-épileptiques, ont comme effet secondaire connu de provoquer une croissance excessive du tissu gingival."
      },
      {
        "questionText": "Les maladies parodontales sont principalement des maladies :",
        "options": [
          "Virales et inflammatoires.",
          "Infectieuses (bactériennes) et inflammatoires.",
          "Dégénératives et génétiques.",
          "Kystiques et tumorales."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Elles sont initiées par des bactéries de la plaque dentaire, mais la destruction des tissus de soutien (gencive, os) est principalement causée par la réaction inflammatoire de l'organisme contre ces bactéries."
      },
      {
        "questionText": "Chez les patients âgés, un mauvais état bucco-dentaire peut conduire à :",
        "options": [
          "Une dénutrition.",
          "Un isolement social.",
          "Un risque accru d'infections pulmonaires.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Des dents absentes ou douloureuses empêchent de bien manger (dénutrition), peuvent faire honte (isolement) et les bactéries buccales peuvent être inhalées et causer des pneumonies, surtout chez les personnes fragiles."
      },
      {
        "questionText": "Quel est le principal facteur de risque commun aux caries et aux maladies parodontales ?",
        "options": [
          "Le stress.",
          "Une mauvaise hygiène bucco-dentaire (plaque dentaire).",
          "La consommation de café.",
          "La génétique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La plaque dentaire est le biofilm bactérien qui est à l'origine à la fois des acides qui causent la carie et de l'inflammation qui cause la maladie parodontale."
      },
      {
        "questionText": "Pourquoi les patients diabétiques sont-ils une population à risque pour les maladies parodontales ?",
        "options": [
          "Ils consomment trop de sucre.",
          "Le diabète diminue la production de salive.",
          "L'hyperglycémie altère la cicatrisation et la réponse immunitaire.",
          "Leurs dents sont plus fragiles."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un diabète mal contrôlé entraîne un état inflammatoire chronique, une mauvaise circulation sanguine et une réponse immunitaire affaiblie, ce qui rend les gencives plus vulnérables à l'infection et à la destruction."
      },
      {
        "questionText": "La \"carie du biberon\" touche principalement :",
        "options": [
          "Les molaires permanentes des adolescents.",
          "Les incisives supérieures des très jeunes enfants.",
          "Les incisives inférieures des adultes.",
          "Les canines des personnes âgées."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est une forme de carie agressive qui apparaît chez les nourrissons et jeunes enfants qu'on laisse s'endormir avec un biberon de liquide sucré (lait, jus). Les dents les plus touchées sont les incisives du haut."
      },
      {
        "questionText": "Le tabagisme est un facteur de risque majeur pour :",
        "options": [
          "Les maladies parodontales et les cancers buccaux.",
          "Uniquement les caries.",
          "Uniquement les colorations dentaires.",
          "L'usure des dents."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le tabac est l'un des pires ennemis de la bouche. Il 'masque' les saignements de gencive, aggrave la destruction de l'os, retarde la cicatrisation et contient des substances cancérigènes."
      },
      {
        "questionText": "La xérostomie est un terme médical qui désigne :",
        "options": [
          "Une mauvaise haleine.",
          "Le grincement des dents.",
          "Une sécheresse buccale.",
          "Une peur du dentiste."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La xérostomie est le symptôme de bouche sèche, souvent causé par la prise de nombreux médicaments, ce qui augmente fortement le risque de caries car la salive ne protège plus les dents."
      },
      {
        "questionText": "Pourquoi les femmes enceintes sont-elles considérées comme une population à risque ?",
        "options": [
          "Elles ne peuvent pas se brosser les dents.",
          "Les changements hormonaux peuvent exacerber l'inflammation gingivale.",
          "Le fœtus 'pompe' le calcium des dents de la mère.",
          "Elles ne peuvent pas recevoir de soins dentaires."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'augmentation de certaines hormones (progestérone, œstrogènes) rend les gencives beaucoup plus sensibles aux bactéries de la plaque, provoquant une 'gingivite de grossesse' qui peut s'aggraver. Le mythe du fœtus qui prend le calcium des dents est faux."
      },
      {
        "questionText": "Les patients sous chimiothérapie ou radiothérapie de la tête et du cou sont à risque de :",
        "options": [
          "Mucite (inflammation des muqueuses).",
          "Xérostomie (bouche sèche).",
          "Risque accru de caries et d'infections.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Ces traitements anticancéreux sont très agressifs pour les cellules à renouvellement rapide de la bouche, provoquant des inflammations douloureuses (mucites) et endommageant souvent les glandes salivaires (xérostomie), ce qui dégrade fortement la santé bucco-dentaire."
      },
      {
        "questionText": "Le \"grignotage\" (manger fréquemment entre les repas) est un comportement à risque car :",
        "options": [
          "Il fait prendre du poids.",
          "Il maintient un pH acide constant dans la bouche.",
          "Il use prématurément les dents.",
          "Il favorise la mauvaise haleine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Chaque prise alimentaire, surtout sucrée, provoque une chute du pH (attaque acide). Le grignotage empêche la salive de neutraliser cette acidité entre les repas, ce qui favorise la déminéralisation de l'émail et donc les caries."
      },
      {
        "questionText": "Une personne atteinte de boulimie-anorexie présente souvent des lésions dentaires typiques appelées :",
        "options": [
          "Caries.",
          "Fractures.",
          "Érosions.",
          "Colorations."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les vomissements répétés exposent les dents à l'acide gastrique très puissant, ce qui provoque une dissolution chimique de l'émail (érosion), surtout sur la face interne des dents supérieures."
      },
      {
        "questionText": "Quel est le principal problème bucco-dentaire chez les personnes âgées dépendantes en institution ?",
        "options": [
          "Le manque d'accès aux soins de blanchiment.",
          "Les difficultés d'hygiène bucco-dentaire au quotidien.",
          "L'orthodontie.",
          "Les maladies rares."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La perte d'autonomie rend le brossage des dents difficile, voire impossible, sans l'aide d'un tiers. L'hygiène est donc souvent négligée, entraînant une accumulation de plaque, de caries et d'infections."
      },
      {
        "questionText": "Les consommateurs de drogues (notamment méthamphétamine) présentent souvent un état dentaire délabré à cause de :",
        "options": [
          "La xérostomie sévère induite par la drogue.",
          "Le bruxisme (grincement de dents) intense.",
          "La négligence de l'hygiène et une alimentation très sucrée.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C'est un cocktail destructeur : la drogue assèche la bouche, provoque des envies de sucre, fait grincer des dents et entraîne une négligence totale de l'hygiène et des soins."
      }
    ]
  },
  {
    "title": "L'asepsie au Cabinet Dentaire (Contrôle de l'infection)",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "La stérilisation est une opération qui vise à :",
        "options": [
          "Simplement nettoyer les instruments.",
          "Éliminer et tuer tous les micro-organismes, y compris les spores.",
          "Uniquement éliminer les bactéries, mais pas les virus.",
          "Rendre les instruments brillants."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La stérilisation est le niveau le plus élevé de décontamination. C'est le seul procédé qui garantit la destruction de toute forme de vie microbienne, y compris les formes les plus résistantes que sont les spores bactériennes."
      },
      {
        "questionText": "Le contrôle du risque infectieux passe par :",
        "options": [
          "L'utilisation d'instruments à usage unique autant que possible.",
          "Le refus de soigner les patients à risque.",
          "Le lavage des mains uniquement en fin de journée.",
          "La stérilisation des gants entre deux patients."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'utilisation de matériel jetable est une méthode très efficace pour prévenir la transmission croisée car elle élimine le besoin de retraitement (nettoyage, stérilisation) de l'instrument."
      },
      {
        "questionText": "L'objectif principal du contrôle des infections est de :",
        "options": [
          "Gagner du temps entre les patients.",
          "Économiser sur les produits de désinfection.",
          "Protéger les patients et le personnel de la contamination croisée.",
          "Respecter uniquement les obligations légales."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Toute la chaîne d'asepsie vise à briser la chaîne de transmission des infections, pour éviter qu'un micro-organisme ne passe d'un patient à un autre, ou d'un patient au soignant (et inversement)."
      },
      {
        "questionText": "Un antiseptique est une substance utilisée pour :",
        "options": [
          "Stériliser les instruments.",
          "Nettoyer les sols du cabinet.",
          "Désinfecter les tissus vivants (peau, muqueuses).",
          "Parfumer l'air ambiant."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La grande différence entre un antiseptique et un désinfectant est son lieu d'application. L'antiseptique est appliqué sur le corps (ex: désinfection de la peau avant une injection), alors que le désinfectant est pour les surfaces et objets inertes."
      },
      {
        "questionText": "Dans la chaîne de retraitement des instruments, quelle étape précède la mise sous sachet ?",
        "options": [
          "Le stockage.",
          "L'utilisation sur le patient.",
          "Le nettoyage et le séchage.",
          "La stérilisation."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un instrument doit être parfaitement propre et sec avant d'être emballé, car toute salissure restante peut empêcher la vapeur du stérilisateur d'atteindre la surface de l'instrument et donc compromettre la stérilisation."
      },
      {
        "questionText": "Quel est l'appareil de référence pour la stérilisation des instruments au cabinet dentaire ?",
        "options": [
          "Le four à micro-ondes.",
          "Le bain à ultrasons.",
          "L'autoclave (stérilisateur à vapeur d'eau).",
          "La cocotte-minute."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'autoclave est le standard car il utilise la chaleur de la vapeur d'eau sous pression (généralement à 134°C) pour tuer de manière fiable et contrôlable tous les micro-organismes."
      },
      {
        "questionText": "\"L'hygiène des mains\" est considérée comme :",
        "options": [
          "Une mesure facultative.",
          "La mesure la plus importante pour prévenir les infections.",
          "Utile uniquement si les mains sont visiblement sales.",
          "Réservée aux chirurgiens hospitaliers."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les mains sont le principal vecteur de transmission des germes. Un lavage des mains rigoureux et fréquent, ou l'utilisation d'une solution hydro-alcoolique, est la pierre angulaire de la prévention des infections."
      },
      {
        "questionText": "Les \"précautions standard\" s'appliquent :",
        "options": [
          "Uniquement pour les patients connus comme étant infectés.",
          "Pour tous les patients, quel que soit leur statut infectieux.",
          "Uniquement lors des actes chirurgicaux.",
          "Uniquement pour les patients qui saignent."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le principe des précautions standard est de considérer que TOUT patient est potentiellement porteur d'une infection transmissible. On applique donc les mêmes mesures de protection (gants, masque...) pour tout le monde, tout le temps."
      },
      {
        "questionText": "Un désinfectant est un produit qui :",
        "options": [
          "Tue tous les microbes, y compris les spores.",
          "Est appliqué sur la peau avant un soin.",
          "Permet d'obtenir une réduction momentanée du nombre de micro-organismes sur une surface inerte.",
          "Nettoie et stérilise en même temps."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La désinfection vise à réduire le nombre de microbes sur une surface à un niveau jugé sûr. Contrairement à la stérilisation, elle ne garantit pas l'élimination des spores."
      },
      {
        "questionText": "La décontamination (ou pré-désinfection) des instruments après usage sert à :",
        "options": [
          "Les stériliser rapidement.",
          "Protéger le personnel qui va les manipuler et nettoyer.",
          "Les rendre plus faciles à ranger.",
          "Les affûter."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est la première étape. On plonge immédiatement les instruments souillés dans un bain désinfectant pour abaisser la charge microbienne et rendre leur manipulation ultérieure (nettoyage manuel ou en machine) moins dangereuse pour l'assistant(e)."
      },
      {
        "questionText": "Que signifie \"AES\" dans le contexte du contrôle de l'infection ?",
        "options": [
          "Asepsie Efficace et Sûre.",
          "Appareil à Stériliser.",
          "Accident d'Exposition au Sang.",
          "Antisepsie et Stérilisation."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un AES est un contact avec du sang ou un liquide biologique potentiellement infectieux, par piqûre, coupure ou projection sur une muqueuse. C'est une urgence médicale."
      },
      {
        "questionText": "Le port du masque chirurgical par le soignant vise principalement à :",
        "options": [
          "Protéger le patient des microbes du soignant.",
          "Protéger le soignant des projections et aérosols du patient.",
          "Les deux à la fois.",
          "Garder le visage au chaud."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le masque agit comme une barrière dans les deux sens : il protège le patient des gouttelettes émises par le soignant (parole, toux) et protège le soignant des projections (sang, salive) émises par la bouche du patient."
      },
      {
        "questionText": "La gestion des déchets de soins à risques infectieux (DASRI) implique :",
        "options": [
          "De les jeter dans la poubelle normale.",
          "De les collecter dans des conteneurs spécifiques (boîtes jaunes).",
          "De les brûler dans le jardin du cabinet.",
          "De les donner au patient."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les déchets piquants, coupants ou souillés de sang (compresses, aiguilles...) doivent suivre une filière d'élimination spéciale et sécurisée pour protéger le personnel de collecte et l'environnement."
      },
      {
        "questionText": "Entre chaque patient, le plan de travail, le fauteuil et les poignées du scialytique doivent être :",
        "options": [
          "Simplement essuyés avec un chiffon sec.",
          "Nettoyés et désinfectés avec un produit adapté.",
          "Recouverts de papier aluminium.",
          "Stérilisés à l'autoclave."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ces surfaces sont considérées comme contaminées par les projections. Elles doivent être traitées avec un spray ou des lingettes désinfectantes pour éviter de contaminer le patient suivant."
      },
      {
        "questionText": "La traçabilité de la stérilisation consiste à :",
        "options": [
          "Connaître la marque des instruments.",
          "Noter l'heure de début et de fin de chaque soin.",
          "Archiver la preuve que chaque cycle de stérilisation a été efficace et associer chaque sachet à un patient.",
          "Peser les instruments avant et après la stérilisation."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est une obligation légale. Il faut pouvoir prouver (grâce à des tests et des enregistrements) que les instruments utilisés pour un soin donné avaient bien été stérilisés correctement."
      }
    ]
  },
  {
    "title": "Economie de la santé",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "La \"carte sanitaire\" est un outil qui vise à :",
        "options": [
          "Imposer des restrictions aux études de médecine.",
          "Rationaliser l'offre de soins en fonction des besoins de la population.",
          "Augmenter le nombre de cliniques privées.",
          "Fournir une carte de crédit pour les soins de santé."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un outil de planification qui analyse les besoins de santé d'une région pour mieux répartir les médecins, les hôpitaux et les équipements, et ainsi éviter les 'déserts médicaux'."
      },
      {
        "questionText": "L'une des principales causes de l'accroissement des dépenses de santé est :",
        "options": [
          "La diminution du nombre de médecins.",
          "La transition sanitaire (plus de maladies chroniques) et le vieillissement de la population.",
          "La baisse de la couverture sociale.",
          "La simplification des techniques médicales."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les maladies chroniques (diabète, maladies cardiaques...) et le traitement des personnes âgées coûtent cher et durent longtemps, ce qui fait augmenter mécaniquement les dépenses globales de santé."
      },
      {
        "questionText": "Le \"dossier médical informatisé\" (ex: carte Chifa) a pour objectif de :",
        "options": [
          "Augmenter les dépenses en médicaments.",
          "Limiter l'accès aux soins.",
          "Mieux coordonner les soins et maîtriser les dépenses.",
          "Remplacer les médecins par des ordinateurs."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "En centralisant les informations du patient, on évite les examens et prescriptions redondants, on améliore le suivi et on peut mieux réguler les remboursements."
      },
      {
        "questionText": "Un système de santé \"libéral\" est principalement basé sur :",
        "options": [
          "L'intervention totale de l'État.",
          "La gratuité complète de tous les soins.",
          "Le jeu de l'offre et de la demande et le financement privé.",
          "L'absence de médecins."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Dans un système libéral, les professionnels de santé sont des entrepreneurs indépendants, les prix sont moins régulés et le financement provient majoritairement des assurances privées et des patients eux-mêmes."
      },
      {
        "questionText": "\"L'aléa moral\" en économie de la santé signifie que :",
        "options": [
          "Les médecins ont une morale douteuse.",
          "Une personne assurée peut être moins prudente avec sa santé ou consommer plus de soins.",
          "Les patients choisissent toujours les traitements les moins chers.",
          "Il est immoral de faire payer les soins."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est le concept selon lequel, lorsqu'on est couvert par une assurance, le coût direct des soins est faible, ce qui peut nous inciter à prendre plus de risques ('ce n'est pas grave, je suis remboursé') ou à consulter pour des motifs mineurs."
      },
      {
        "questionText": "Le \"ticket modérateur\" est :",
        "options": [
          "Le prix total d'une consultation.",
          "Un ticket de transport pour aller à l'hôpital.",
          "La partie des dépenses de santé qui reste à la charge du patient après le remboursement de l'assurance maladie.",
          "Un appareil qui modère la douleur."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est la part non remboursée par la sécurité sociale de base. Il a pour but de responsabiliser le patient en lui faisant supporter une petite partie du coût."
      },
      {
        "questionText": "La \"sélection adverse\" (ou anti-sélection) est un problème où :",
        "options": [
          "Les médecins sélectionnent les patients les plus faciles à soigner.",
          "Seules les personnes qui se savent malades ou à risque ont tendance à souscrire une assurance santé.",
          "Les assurances refusent systématiquement les personnes malades.",
          "Les patients choisissent le mauvais médecin."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un risque pour les assureurs : si seuls les 'mauvais risques' (les gens qui coûtent cher) s'assurent, les primes deviennent très élevées pour tout le monde, ce qui fait fuir les 'bons risques' (les gens en bonne santé)."
      },
      {
        "questionText": "Le système de \"tiers payant\" permet au patient :",
        "options": [
          "De payer ses soins en trois fois.",
          "De ne pas avancer les frais chez le professionnel de santé (qui est payé directement par l'assurance).",
          "De faire payer ses soins par une tierce personne.",
          "D'être remboursé plus rapidement."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Grâce au tiers payant, le patient n'a pas à sortir d'argent (ou seulement le ticket modérateur). L'assurance maladie et/ou la mutuelle règlent directement le médecin, le pharmacien, etc."
      },
      {
        "questionText": "L'une des spécificités du marché de la santé est \"l'asymétrie d'information\". Cela signifie que :",
        "options": [
          "Le patient en sait plus que le médecin sur sa maladie.",
          "Le médecin en sait beaucoup plus que le patient.",
          "L'information est toujours parfaitement partagée.",
          "Les dossiers médicaux sont incomplets."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Il existe un déséquilibre de connaissances majeur entre le professionnel de santé ('l'expert') et le patient ('le profane'), ce qui donne au médecin un pouvoir important dans la décision de soins."
      },
      {
        "questionText": "La \"demande induite\" en santé correspond à la situation où :",
        "options": [
          "Le patient demande des soins dont il n'a pas besoin.",
          "L'offre de soins (le médecin) peut influencer et augmenter la demande de soins.",
          "Les épidémies augmentent la demande de soins.",
          "Les médicaments induisent des effets secondaires."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Du fait de l'asymétrie d'information, le médecin peut prescrire plus d'actes, d'examens ou de médicaments que ce qui est strictement nécessaire, 'induisant' ainsi une consommation (et donc des dépenses) plus élevée."
      },
      {
        "questionText": "Un système de santé \"Beveridgien\" (comme au Royaume-Uni) est caractérisé par :",
        "options": [
          "Un financement par des assurances privées obligatoires.",
          "Un financement par l'impôt et un accès universel aux soins.",
          "Un paiement direct des soins par les patients.",
          "Un système réservé aux travailleurs."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le modèle de Beveridge repose sur trois 'U' : Universel (pour tous les résidents), Uniforme (les mêmes prestations pour tous) et Unifié (financé par l'impôt et géré par l'État)."
      },
      {
        "questionText": "Le coût d'opportunité en santé, c'est par exemple :",
        "options": [
          "Le prix d'un médicament.",
          "L'opportunité de voir un médecin rapidement.",
          "Le fait que l'argent dépensé pour un nouvel équipement très cher ne peut pas être utilisé pour la prévention ou les soins de base.",
          "Le coût d'une opération manquée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est le principe fondamental de l'économie. Chaque euro dépensé dans un domaine est un euro qui n'est pas disponible pour un autre. Il faut donc faire des choix (des arbitrages) sur la meilleure façon d'allouer les ressources limitées."
      },
      {
        "questionText": "L'évaluation médico-économique sert à :",
        "options": [
          "Évaluer les compétences économiques des médecins.",
          "Comparer le coût et l'efficacité de différentes stratégies de santé.",
          "Fixer le prix des consultations.",
          "Calculer les bénéfices des hôpitaux."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un ensemble d'outils qui aide à décider s'il est 'rentable' pour la société d'investir dans un nouveau traitement, un vaccin ou un programme de dépistage, en comparant son coût à ses bénéfices en termes de santé."
      },
      {
        "questionText": "Un système de santé \"Bismarckien\" (comme en France ou en Allemagne) est caractérisé par :",
        "options": [
          "Un financement par l'impôt.",
          "Un financement basé sur les cotisations sociales (sur les salaires).",
          "Un système réservé aux fonctionnaires.",
          "L'absence totale de régulation."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le modèle de Bismarck est un système d'assurance sociale obligatoire, où le droit à la santé est lié au travail et financé par des cotisations payées par les employés et les employeurs."
      },
      {
        "questionText": "Les \"déterminants de la santé\" sont :",
        "options": [
          "Uniquement les médecins et les hôpitaux.",
          "Uniquement les gènes d'une personne.",
          "L'ensemble des facteurs qui influencent l'état de santé (style de vie, environnement, système de soins, biologie...).",
          "Uniquement le régime alimentaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le système de soins ne compte que pour une petite partie de notre état de santé. Des facteurs comme le niveau d'éducation, les conditions de travail, le logement, l'alimentation et les comportements (tabac, alcool) ont une influence beaucoup plus importante."
      },
      {
        "questionText": "N°20 (2024 EMD - Q818\nParmi les critères relatifs au système de santé, on retrouve:",
        "options": [
          "L'efficience qui doit éviter les différences entre différents groupes de personnes.",
          "L'équité qui permet une bonne adéquation entre les ressources et les résultats.",
          "La pérennité qui est la reproductibilité dans le temps et dans l'espace avec des ressources locales.",
          "Les facteurs démographiques, susceptibles d'influencer l'état de santé de l'individu"
        ],
        "correctOptionIndexes": [],
        "explanation": "Les 3 grands critères relatifs à tout systeme de santé : \n L’efficience : la bonne adeequation entre les ressources et les resultats.\n L’equité : est l’absence de différences évitables ou remediables entre différents groupes de personnes, qu’ils soient définis selon des critères sociaux, économiques, démographiques ou géographiques.\n La pérennité : c’est la reproductibilité dans le temps et dans l’espace avec des ressources locales."
      },
      {
        "questionText": "N°3 (2023 EMD - Q889\nParmi les spécificités du marché des soins de santé :",
        "options": [
          "Il obéit au jeu de l'offre et de la demande",
          "Les prix des biens et services sont administrés",
          "Le marché est perturbé par d'innombrables asymétries de l'information",
          "L'intervention des pouvoirs publics est minime."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2023 EMD - Q950\nLa macro-économie de la santé permet d'analyser :",
        "options": [
          "Le fonctionnement d'un programme du système de santé",
          "Le choix du prestataire (public ou privé) par le patient",
          "Comment le financer, par l'impôt, par les cotisations sociales",
          "La hiérarchisation des services de santé."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "-Permet d’analyser le fonctionnement globale des systèmes de santé\n -La réponse B est fausse c’est la micro-économie."
      },
      {
        "questionText": "N°5 (2022 EMD - Q1293\nLe tarif de référence a pour objectif principal:",
        "options": [
          "Limiter la production de services médicaux,",
          "Responsabiliser le consommateur,",
          "D'inciter les praticiens à prescrire des médicaments génériques plutôt que des princeps,",
          "D'inciter les assurés à prendre en charge une partie des dépenses non remboursables par la sécurité sociale."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le tarif de référence a pour objectif principal d’inciter les praticiens à prescrire des médicaments génériques plutôt que des princeps."
      },
      {
        "questionText": "N°6 (2022 EMD - Q1314\nLa carte sanitaire vise:",
        "options": [
          "A rationaliser l'offre des soins.",
          "A prendre en considération autant que possible les besoins de santé des habitants,",
          "A maîtriser l'offre de la démographie médicale,",
          "A imposer des restrictions au nombre de candidats admis aux études de médecine et de pharmacie"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La mise en place, en Algérie, d’une carte sanitaire visant à rationaliser l’offre des soins, et prendre en considération autant que possible les besoins de santé des habitants."
      },
      {
        "questionText": "N°7 (2022 EMD - Q1319\nLes principales causes de l'accroissement des dépenses de santé :",
        "options": [
          "Une offre de soins étendue et diversifiée,",
          "Une transition sanitaire n'imposant pas des dépenses plus lourdes pour les maladies non transmissibles,",
          "Une large couverture sociale,",
          "Un système de santé non dualiste et maîtrisé."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les principales causes de l’accroissement des dépenses de santé :\n \n -Une large couverture sociale.\n -Une offre de soins étendue et diversifiée. \n -Une transition sanitaire imposant des dépenses plus lourdes pour les maladies non transmissibles.\n  \n -Un système de santé dualiste et non maîtrisé."
      },
      {
        "questionText": "N°8 (2022 EMD - Q1345\nEn Algérie, la maitrise médicalisée des dépenses de santé table principalement sur :",
        "options": [
          "Le dispositif du «< dossier médical informatisé » à travers la carte « Chifa »",
          "L'augmentation des dépenses en médicaments.",
          "La prise en charge des remboursements à un montant global de 5000 DA pour deux ordonnances avec une périodicité de trois mois entre deux traitements aigus semblables.",
          "L'instauration d'outils de régulation qui permettent de circonscrire l'évolution de ces dépenses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "diminuer de façon sensible les dépenses en médicaments\n  la prise en charge des remboursements à un montant global de 3000 DA pour deux ordonnances avec une périodicité de trois mois entre deux traitements aigus semblables.\n instaurer une hiérarchisation des soins, rationaliser les dépenses de santé et promouvoir la qualité de prise en charge des citoyens."
      },
      {
        "questionText": "N°9 (2022 EMD - Q1363\nL'option pour l'économie de marché s'est manifestée sur le terrain par :",
        "options": [
          "L'emplacement des cliniques privées loin des structures sanitaires publiques,",
          "La coexistence de deux logiques de régulation des dépenses de santé : l'une « dirigiste » et l'autre de « type libéral »",
          "L'émergence d'un système de soins où le secteur privé occupe une place de plus en plus importante,",
          "La déresponsabilisation des gestionnaires des hôpitaux qui ne se considèrent aucunement incités à administrer au mieux les ressources."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Epidémiologie et biostatistique",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°19 (2023 EMD - Q1188\nL'épidémiologie",
        "options": [
          "Des épidermes et des maladies de peau.",
          "La distribution et des déterminants des maladies dans les populations.",
          "La fabrication des médicaments.",
          "L'anatomie humaine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’épidémiologie est une discipline scientifique dont l’objet est l'étude de la distribution des problèmes de santé dans une population et le rôle des facteurs qui la déterminent.\n L’épidémiologie étudie des groupes de personnes et non des individus. L’analyse porte sur les individus en bonne santé et sur les individus frappés par la maladie.\n L’épidémiologie permet de recueillir, interpréter, utiliser l’information sur les problèmes de santé. Ses objectifs sont la promotion de la santé et la réduction des problèmes de santé."
      },
      {
        "questionText": "La \"prévalence\" d'une maladie mesure :",
        "options": [
          "Le nombre de nouveaux cas apparus pendant une période.",
          "Le nombre total de cas (anciens et nouveaux) à un moment donné.",
          "La vitesse de propagation de la maladie.",
          "Le nombre de décès causés par la maladie."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La prévalence est comme une 'photographie' de la maladie. Elle nous dit combien de personnes sont malades dans une population à un instant T."
      },
      {
        "questionText": "\"L'incidence\" d'une maladie mesure :",
        "options": [
          "Le nombre de nouveaux cas apparus pendant une période donnée.",
          "La gravité de la maladie.",
          "Le nombre total de personnes malades.",
          "L'impact de la maladie sur l'économie."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'incidence est comme un 'film' de la maladie. Elle mesure la vitesse d'apparition de nouveaux cas et donc le risque de tomber malade."
      },
      {
        "questionText": "Une étude \"cas-témoins\" (case-control study) est une étude où :",
        "options": [
          "On suit un groupe de personnes dans le futur pour voir qui tombe malade.",
          "On compare des personnes déjà malades (les cas) à des personnes non-malades (les témoins) en regardant leur passé.",
          "On teste un nouveau médicament sur deux groupes.",
          "On décrit simplement un cas clinique rare."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est une étude rétrospective. On part de la fin (la maladie) et on cherche les causes dans le passé en comparant les malades et les non-malades."
      },
      {
        "questionText": "Une étude \"de cohorte\" (cohort study) est une étude où :",
        "options": [
          "On interroge des gens à un seul moment.",
          "On compare des gens malades et non-malades sur leur passé.",
          "On suit dans le temps un groupe de personnes exposées à un facteur et un groupe non exposé pour voir qui développe la maladie.",
          "On analyse des statistiques de mortalité."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est une étude prospective. On part du début (l'exposition à un facteur de risque, ex: tabagisme) et on avance dans le temps pour mesurer l'apparition de la maladie."
      },
      {
        "questionText": "La \"morbidité\" se rapporte :",
        "options": [
          "Au nombre de décès.",
          "À l'ensemble des maladies et à leur fréquence dans une population.",
          "Au sentiment d'être malade.",
          "À la morsure des insectes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La morbidité est un terme général qui englobe tout ce qui a trait à la maladie (incidence, prévalence, gravité...) au sein d'une population."
      },
      {
        "questionText": "Une étude \"transversale\" (cross-sectional study) :",
        "options": [
          "Suit les gens sur plusieurs années.",
          "Est utilisée pour tester l'efficacité d'un vaccin.",
          "Collecte des données à un seul moment précis dans le temps.",
          "Regarde uniquement les dossiers du passé."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Comme son nom l'indique, elle fait une 'coupe transversale' à un instant T pour mesurer par exemple la prévalence d'une maladie et l'exposition à des facteurs de risque en même temps."
      },
      {
        "questionText": "L'espérance de vie à la naissance est :",
        "options": [
          "Le nombre d'années maximum qu'un humain peut vivre.",
          "La durée de vie moyenne d'une population à un moment donné.",
          "L'âge moyen des personnes décédées.",
          "Un objectif à atteindre pour chaque individu."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un indicateur statistique qui représente le nombre moyen d'années qu'un nouveau-né peut s'attendre à vivre si les conditions de mortalité actuelles restent inchangées tout au long de sa vie."
      },
      {
        "questionText": "En biostatistique, le \"p-value\" (ou la valeur p) aide à déterminer :",
        "options": [
          "La taille de l'échantillon.",
          "La probabilité que les résultats observés soient dus au hasard.",
          "Le coût de l'étude.",
          "La prévalence d'une maladie."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une petite valeur p (généralement < 0.05) suggère que la différence observée entre deux groupes (par exemple) est probablement réelle et non le fruit du hasard. On dit alors que le résultat est 'statistiquement significatif'."
      },
      {
        "questionText": "Qu'est-ce qu'un \"biais\" dans une étude épidémiologique ?",
        "options": [
          "Un résultat statistiquement significatif.",
          "Une erreur systématique dans la conception ou la conduite de l'étude qui fausse les résultats.",
          "Le financement de l'étude par une entreprise.",
          "L'utilisation de statistiques complexes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un biais est un défaut de l'étude qui l'oriente systématiquement dans une mauvaise direction. Par exemple, si on ne sélectionne que des cas graves pour une étude, les résultats seront biaisés."
      },
      {
        "questionText": "La \"mortalité\" se rapporte :",
        "options": [
          "Au nombre de personnes malades.",
          "À la fréquence des décès dans une population.",
          "À la peur de mourir.",
          "Aux maladies mortelles uniquement."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La mortalité est l'indicateur qui mesure le nombre de décès survenant dans une population pendant une période donnée."
      },
      {
        "questionText": "Un essai clinique randomisé en double aveugle signifie que :",
        "options": [
          "L'étude est réalisée dans le noir.",
          "L'attribution du traitement (ou placebo) se fait au hasard, et ni le patient ni le médecin ne savent qui reçoit quoi.",
          "Les patients sont choisis au hasard mais savent ce qu'ils prennent.",
          "Seuls les patients aveugles peuvent participer."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est le 'gold standard' des études. La randomisation (hasard) et le double aveugle permettent d'éviter les biais liés au choix du traitement et à l'effet psychologique (placebo), assurant ainsi une comparaison très objective."
      },
      {
        "questionText": "Un facteur de risque est :",
        "options": [
          "La cause certaine d'une maladie.",
          "Une caractéristique qui est statistiquement associée à une augmentation de la probabilité de développer une maladie.",
          "Une maladie qui augmente le risque d'en avoir une autre.",
          "Un comportement dangereux."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un facteur de risque (ex: fumer) n'entraîne pas automatiquement la maladie (le cancer), mais il augmente fortement la probabilité que cela arrive. Il s'agit d'une association statistique, pas d'une certitude."
      },
      {
        "questionText": "L'endémie correspond à :",
        "options": [
          "Une épidémie mondiale.",
          "L'apparition soudaine d'un grand nombre de cas.",
          "La présence habituelle et constante d'une maladie dans une région donnée.",
          "La disparition totale d'une maladie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Par exemple, le paludisme est endémique dans de nombreuses régions tropicales, ce qui signifie qu'il est toujours présent avec un nombre de cas relativement stable. La grippe, elle, est épidémique (flambées saisonnières)."
      },
      {
        "questionText": "N°20 (2023 EMD - Q1204\nLa bio statistique",
        "options": [
          "Uniquement compter le nombre de patients.",
          "Décrire l'état de santé d'une population, tester des hypothèses et prendre des décisions basées sur des preuves.",
          "Gérer le budget d'un hôpital.",
          "Rédiger les ordonnances."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les statistiques sont les outils mathématiques qui permettent de donner un sens aux données de santé : passer de 'quelques patients ont eu un problème' à 'ce médicament augmente le risque de 20%, et ce résultat est fiable'."
      },
      {
        "questionText": "N°14 (2021 EMD - Q1789\nL'épidémiologie descriptive:",
        "options": [
          "A pour but d'analyser le rôle des facteurs susceptibles d'influencer l'incidence des phénomènes de santé ;",
          "C'est l'étude de la distribution de la maladie dans les populations selon certaines caractéristiques;",
          "Comprend les enquêtes longitudinales qui observent la fréquence de survenue d'un phénomène de santé, dans une population, à un moment précis ;",
          "Mesure la variation de la répartition des problèmes de santé."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "C’est l’épidémiologie analytique qui a pour but d’analyser le rôle des facteurs susceptibles d’influencer l’incidence des phénomènes de santé.\n Comprend les enquêtes transversales qui permettent d’observer la fréquence de survenue d’un phénomène de santé, dans une population, à un moment précis."
      },
      {
        "questionText": "N°15 (2021 EMD - Q1790\nLes études des effets thérapeutiques avant/ après :",
        "options": [
          "Font partie de l'épidémiologie d'intervention;",
          "Le recueil d'information est toujours rétrospectif;",
          "Ont pour but d'analyser le rôle des facteurs susceptibles d'influencer l'incidence des phénomènes de santé",
          "Également appelées études exposés/ non exposés."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "-L’épidémiologie évaluative ou d’intervention : Elle a pour objectif d’étudier les effets des interventions préventives ou curatives dans le domaine de la santé.\n -Le receuil d’information est toujours rétrospectif dans les études cas témoins.\n -C’est l’épidémiologie analytiquequi a pour but d’analyser le rôle des facteurs susceptibles d’influencer l’incidence des phénomènes de santé.\n -Les études de cohortes : Egalement appelées études exposés/ non exposés."
      },
      {
        "questionText": "N°16 (2021 EMD - Q1810\nLa covid 19 est une :",
        "options": [
          "Epidémie ;",
          "Endémie ;",
          "Pandémie ;",
          "Epidémie permanente."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2020 EMD - Q1950\nParmi les indicateurs de santé, on retrouve",
        "options": [
          "L'incidence,",
          "La prévalence,",
          "La morbidité,",
          "Une épidémie."
        ],
        "correctOptionIndexes": [],
        "explanation": "les indicateurs de santé sont:\n Espérance de vie\n Espérance de vie \n Mortalité \n Morbidité\n Incidence \n Prévalence"
      },
      {
        "questionText": "N°20 (2020 EMD - Q1951\nLes études de prévalence sont:",
        "options": [
          "Des enquêtes longitudinales,",
          "Des études à visée analytique,",
          "Elles permettent d'observer la fréquence de survenue d'un phénomène de santé, dans une population, à un moment précis,",
          "Un indicateur dynamique de mortalité."
        ],
        "correctOptionIndexes": [],
        "explanation": "-Les études de prévalence sont des enquêtes transversales: elles permettent d’observer la fréquence de survenue d’un phénomène de santé, dans une population, à un moment précis\n -Les études d’incidence sont des enquêtes longitudinales.\n -Les études à visée analytique sont l’enquête de cohortes et l’enquête cas témoins."
      },
      {
        "questionText": "N°1 (2019 EMD - Q1968\nla morbidité:",
        "options": [
          "C'est la fréquence des pathologies au sein d'une population",
          "c'est la fréquence des mortalités au sein d'une population",
          "c'est l'incidence des décès au sein d'une population",
          "c'est la prévalence des décès au sein d'une population"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2019 EMD - Q1970\nune enquête cas témoin:",
        "options": [
          "est appelée également étude exposée-non exposée",
          "Compare la fréquence d'apparition de la maladie entre sujets exposés et non exposés à un facteur.",
          "Compare la fréquence de l'exposition à des facteurs de risque entre des sujets malades et des sujets indemnes de la maladie",
          "elle est toujours prospective"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C’est Les études de cohortes qui sont appelées études exposés / non exposés et compare la fréquence d’apparition de la maladie entre exposés et non exposés a un facteur.\n -Elle est toujours rétrospectif."
      },
      {
        "questionText": "N°6 (2018 EMD - Q2062\nL'enquête de cohorte:",
        "options": [
          "Est une enquête descriptive.",
          "Compare la fréquence d'apparition de la maladie entre sujets exposés et non exposés à un facteur.",
          "Compare la fréquence d'exposition à des facteurs de risque entre des sujets malades et des sujets indemnes de la maladie."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C’est une enquete analytique.-La réponse C est fausse :"
      },
      {
        "questionText": "N°17 (2018 Synthèse - Q2095\nL'étude de prévalence :",
        "options": [
          "Est une étude à visée analytique.",
          "Est une enquête transversale",
          "Nécessite le suivi des patients dans le temps"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Est une étude à visée descriptive.\n La notion de suivie des patients dans le temps est absente. C’est un indicateur statique de morbidité."
      },
      {
        "questionText": "N°7 (2024 EMD - Q595\nl'épidémiologie analytique a pour but :",
        "options": [
          "Rechercher les causes des maladies et les facteurs de risque influençant leurs survenues au sein d'une population",
          "Etudier les actions de prévention ou de traitement",
          "Permettre d'établir des relations de causalité entre l'exposition à un facteur de risque et la maladie.",
          "Permettre la description d'un phénomène de santé dans une population en fonction des caractéristiques de cette population"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L’ÉPIDÉMIOLOGIE ANALYTIQUE OU ÉTIOLOGIQUE OU CAUSALE:\n -Elle a pour but de rechercher les causes des maladies et les facteurs ou marqueurs de risque influençant leurs survenues au sein d’une population. \n -Elle permet ainsi d’établir des relations de causalité entre l’exposition à un facteur ou marqueur de risque et la maladie. \n -La réponse B : fausse c’est l’épidémiologie évaluative qui étudie les actions de prévention ou de traitement.\n -La réponse D : fausse c’est l’épidémiologie descriptive qui est la description d’un phénomène de santé dans une population (fréquence, variations) en fonction des caractéristiques de cette population et de paramètres tels que le temps et l’espace."
      },
      {
        "questionText": "N°8 (2024 EMD - Q605\nL'épidémiologie présente des objectifs :",
        "options": [
          "Détecter une épidémie",
          "Evaluer I ‘importance d'un problème",
          "Observer le malade",
          "Rechercher les causes des affections"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les objectifs de l’épidémiologie:\n 1-détecter une épidémie.\n 2-Rechercher les causes des affections.\n 3-Evaluer l’importance d’un problème.\n 4-Formuler des hypothèses et les vérifier.\n 5-Evaluer les soins (techniques diagnostiques et de dépistage, traitement, programmes de santé publique).\n 6-Evaluer les progrès grâce à la chute de la mortalité ou de la morbidité."
      },
      {
        "questionText": "N°9 (2024 EMD - Q633\nLes études épidémiologiques non expérimentales :",
        "options": [
          "Appelées aussi études observationnelles",
          "Présentent une réalisation d'étude souvent limitée en raison de contraintes éthiques",
          "Peuvent intervenir sur les personnes exposées",
          "Sont des études descriptives"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "-La réponse B est fausse c’est la réalisation d’études expérimentales est souvent limitée en raison de contraintes éthiques.\n -La réponse C est fausse c’est les études expérimentales qui peuvent intervenir sur les personnes exposées."
      }
    ]
  },
  {
    "title": "Code de la santé",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°5 (2021 EMD - Q1629\nLe code de la santé publique est tout d'abord organisé en:",
        "options": [
          "Un guide de bonnes pratiques sans valeur légale.",
          "Un ensemble de lois et de règlements qui encadrent les professions et les activités de santé.",
          "Une annexe du code pénal.",
          "Un magazine destiné aux professionnels de santé."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est le principal recueil de textes juridiques (lois, décrets) qui organise et réglemente tout le système de santé, des droits des patients aux obligations des professionnels."
      },
      {
        "questionText": "Le secret professionnel, inscrit dans le code, s'impose :",
        "options": [
          "Uniquement aux médecins.",
          "Uniquement face à la justice.",
          "À tout professionnel de santé pour tout ce qu'il a appris dans l'exercice de ses fonctions.",
          "Peut être levé si la famille du patient le demande."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le secret professionnel est une obligation absolue qui couvre tout ce qui a été confié, vu, entendu ou compris lors du soin. Il protège l'intimité du patient et le lien de confiance. Il ne peut être levé que dans de très rares cas prévus par la loi."
      },
      {
        "questionText": "L'exercice illégal de la médecine ou de l'art dentaire est :",
        "options": [
          "Une simple faute administrative.",
          "Un délit pénal.",
          "Autorisé en cas d'urgence.",
          "Toléré pour les actes simples."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pratiquer la médecine ou l'art dentaire sans les diplômes et l'autorisation requis est une infraction grave, sévèrement punie par la loi pour protéger la santé publique."
      },
      {
        "questionText": "Le consentement libre et éclairé du patient signifie que :",
        "options": [
          "Le patient doit signer une décharge avant chaque soin.",
          "Le patient doit recevoir une information claire et adaptée pour pouvoir accepter ou refuser un acte médical.",
          "Le patient doit être d'accord avec le prix.",
          "Le consentement est implicite dès qu'il entre dans le cabinet."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un droit fondamental. Aucun acte médical ne peut être pratiqué sans le consentement du patient. Pour être 'éclairé', ce consentement doit être précédé d'une information complète sur l'acte, ses risques, ses bénéfices et les alternatives possibles."
      },
      {
        "questionText": "Parmi les missions des ordres professionnels (Ordre des médecins, Ordre des chirurgiens-dentistes) on trouve :",
        "options": [
          "La fixation des prix des consultations.",
          "Le maintien de la compétence et de la morale professionnelle (déontologie).",
          "Le remboursement des soins.",
          "La gestion des hôpitaux."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'Ordre a pour mission principale de réglementer la profession : il gère le tableau des inscrits, veille au respect du code de déontologie (les devoirs des professionnels) et exerce un pouvoir disciplinaire."
      },
      {
        "questionText": "Le Code de la santé publique protège :",
        "options": [
          "Uniquement les droits des professionnels de santé.",
          "Uniquement les intérêts de l'État.",
          "À la fois la santé publique en général et les droits fondamentaux des patients.",
          "Uniquement les fabricants de médicaments."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le code a ce double objectif : organiser le système pour protéger la population (ex: gestion des épidémies, sécurité des produits) et garantir les droits de chaque individu au sein de ce système (droit à l'information, consentement, secret...)."
      },
      {
        "questionText": "La publicité pour les professions médicales et dentaires est :",
        "options": [
          "Totalement libre.",
          "Autorisée si elle est comparative.",
          "Strictement réglementée et limitée à de l'information factuelle.",
          "Obligatoire pour se faire connaître."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La santé n'est pas un commerce comme les autres. Le code interdit la publicité à caractère commercial et n'autorise que la diffusion d'informations discrètes et objectives (adresse, horaires, qualifications...)."
      },
      {
        "questionText": "La non-assistance à personne en danger est :",
        "options": [
          "Une faute morale mais pas légale pour un soignant.",
          "Une obligation qui ne concerne que les médecins du SAMU.",
          "Un délit pénal applicable à tout citoyen, et une faute déontologique grave pour un soignant.",
          "Autorisée si le soignant n'est pas en service."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Tout citoyen a l'obligation de porter secours. Pour un professionnel de santé, cette obligation est encore plus forte et manquer à ce devoir est à la fois une faute pénale et une faute professionnelle très grave."
      },
      {
        "questionText": "Le \"dossier patient\" doit être conservé par le professionnel de santé :",
        "options": [
          "Pendant 1 an.",
          "Pendant 5 ans.",
          "Pendant une durée légale spécifique (souvent 20 ans).",
          "Jusqu'au décès du patient."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le code impose des durées de conservation minimales pour les dossiers médicaux, afin de garantir la continuité des soins et de permettre au patient d'accéder à ses informations ou de faire valoir ses droits."
      },
      {
        "questionText": "La délivrance de médicaments est réservée :",
        "options": [
          "Aux médecins.",
          "Aux pharmaciens.",
          "Aux infirmières.",
          "À toute personne travaillant dans le domaine de la santé."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le code de la santé publique établit un monopole pharmaceutique : seuls les pharmaciens diplômés et exerçant en officine ou à l'hôpital ont le droit de dispenser des médicaments au public."
      },
      {
        "questionText": "Que régit le Code de déontologie dentaire ?",
        "options": [
          "Les techniques de soin autorisées.",
          "Les devoirs du chirurgien-dentiste envers ses patients, ses confrères et la société.",
          "Les tarifs des actes dentaires.",
          "Les horaires d'ouverture des cabinets."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le code de déontologie est une partie intégrante du code de la santé. Il fixe les règles morales et professionnelles que tout dentiste doit respecter (qualité des soins, secret, information, confraternité...)."
      },
      {
        "questionText": "Le droit à l'accès à son dossier médical par le patient est :",
        "options": [
          "Un droit fondamental, avec quelques exceptions.",
          "Accordé uniquement sur décision de justice.",
          "Limité aux informations que le médecin veut bien donner.",
          "Payant."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La loi reconnaît le droit pour toute personne d'accéder directement aux informations médicales la concernant. Le professionnel doit répondre à cette demande."
      },
      {
        "questionText": "L'Ordre des chirurgiens-dentistes a un pouvoir :",
        "options": [
          "Législatif (il vote les lois).",
          "Exécutif (il dirige le ministère de la Santé).",
          "Judiciaire (il peut emprisonner un dentiste).",
          "Disciplinaire (il peut sanctionner un dentiste pour manquement à la déontologie)."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Si un dentiste ne respecte pas ses obligations professionnelles, il peut être jugé par une chambre disciplinaire de l'Ordre, qui peut prononcer des sanctions allant de l'avertissement à l'interdiction d'exercer."
      },
      {
        "questionText": "La rédaction d'un \"faux certificat\" est :",
        "options": [
          "Tolérée si c'est pour rendre service.",
          "Une faute administrative mineure.",
          "Un délit pénal sévèrement puni par la loi.",
          "De la responsabilité de la secrétaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un certificat médical est un document officiel qui engage la responsabilité de son auteur. En rédiger un qui atteste de faits matériellement inexacts est une faute très grave (usage de faux)."
      },
      {
        "questionText": "La finalité principale du Code de la santé publique est :",
        "options": [
          "De protéger les revenus des professionnels de santé.",
          "De réduire les dépenses de l'État.",
          "La protection de la santé de la population.",
          "De complexifier le système de soins."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Malgré sa complexité, l'objectif ultime de l'ensemble de ces lois et règlements est de garantir le plus haut niveau de santé et de sécurité possible pour tous les citoyens."
      },
      {
        "questionText": "N°19 (2022 EMD - Q1537\nParmi les tâches et activités des médecins-dentistes:",
        "options": [
          "Fourniture d'une bonne hygiène de vie à la population;",
          "Fourniture de soins médicaux appropriés:",
          "Participer à l'éducation sanitaire",
          "Veiller au bon fonctionnement des structures sanitaires,"
        ],
        "correctOptionIndexes": [],
        "explanation": "Les dentistes sont tenus :\n -De veiller à la protection de la santé de la population par la fourniture de soins medicaux appropriés.\n -de participer à l’éducation sanitaire.\n -D’assurer la formation, le perfectionnement, le recyclage des personnels de santé, et de participer à la recherche scientifique, conformément à la réglementation en vigueur."
      },
      {
        "questionText": "N°20 (2022 EMD - Q1553\nParmi les dispositions pénales relatives aux personnels de santé :",
        "options": [
          "L'exercice illégal de la fonction;",
          "Faute professionnelle causant une incapacité permanente à une personne ;",
          "Un changement dans la destination des locaux à usage médical",
          "Non observation du secret professionnel."
        ],
        "correctOptionIndexes": [],
        "explanation": "-Dispositions pénales relatives aux personnels de santé:"
      },
      {
        "questionText": "N°4 (2021 EMD - Q1610\nLe code de la santé est :",
        "options": [
          "Une Série de textes législatifs qui régit les questions de la santé publique ;",
          "Une Série de règles strictes et une certaine déontologie qui doivent être appliquées à la santé publique :",
          "Il est le garant de la déontologie médicale;",
          "Devrait veiller avec une vigilance particulière au respect de ces principes de la déontologie."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2019 EMD - Q1974\nLe code de santé publique:",
        "options": [
          "est un ensemble de lois et d'articles",
          "est une annexe du code pénal",
          "est divisé en code de la famille et code de sécurité sociale",
          "Protège le droit des personnes en matière de sécurité sociale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2018 EMD - Q2099\nCiter les objectifs du code de santé publique :",
        "options": [],
        "correctOptionIndexes": [],
        "explanation": "Les objectifs du code de santé publique sont:"
      },
      {
        "questionText": "N°1 (2024 EMD - Q468\nLes locaux à usage de la médecine, de la chirurgie dentaire et de la pharmacie doivent obéir aux :",
        "options": [
          "Normes de prescription de construction",
          "Normes d'hygiène et de sécurité",
          "Normes d'équipement fixées par voie non réglementaire",
          "N'obéissent à aucune loi réglementaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Art. 215.- Les locaux à usage de la médecine, de la chirurgie dentaire et de la pharmacie doivent obéir aux normes de prescription de construction, d'hygiène et de sécurité et d'équipement fixées par voie réglementaire."
      },
      {
        "questionText": "N°2 (2024 EMD - Q492\nL'exercice, à titre privé, des médecins, des chirurgiens-dentistes et des pharmaciens",
        "options": [
          "Sont fixés par voie réglementaire",
          "Les tarifs des actes accomplis sont fixés aléatoirement selon le choix du praticien",
          "Aucun dépassement n'est autorisé sauf autorisation par le ministère de la santé",
          "Le médecin et le chirurgien-dentiste sont libres, chacun dans son domaine d'activité, de prescrire les médicaments inscrits dans le cadre de la nomenclature nationale."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Art. 208. -Les activités de santé exercées à titre privé sont assurées dans des cabinets dentaires, des officines pharmaceutiques, des cabinets de consultations et de soins, des laboratoires d'analyses médicales, d'optique médicale et de lunetterie de prothèse médicale. La nature et l'importance des équipements nécessaires aux activités de santé exercées à titre privé et définies à l'alinéa ci-dessus, sont fixées par voie réglementaire.Art. 211. Les tarifs des actes accomplis par les médecins, les chirurgiens-dentistes et les pharmaciens, sont fixés par voie réglementaire.Art. 204.- Le médecin et le chirurgien-dentiste sont libres, chacun dans son domaine d'activité, de prescrire les médicaments inscrits dans le cadre de la nomenclature nationale."
      },
      {
        "questionText": "N°10 (2023 EMD - Q1022\nLa carte sanitaire :",
        "options": [
          "C'est l'ensemble des objectifs en matière de santé visant à la protection de la vie de l'individu",
          "C'est le schéma directeur d'aménagement des structures sanitaires.",
          "Permet la généralisation de la pratique de l'éduction physique, des sports et des loisirs",
          "Permet un recensement exhaustif des plateaux techniques et logistiques."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Dentisterie communautaire",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°1 (2020 EMD - Q1895\nLa dentisterie communautaire :",
        "options": [
          "Un patient individuel et sa pathologie.",
          "La santé bucco-dentaire d'un groupe ou d'une population.",
          "La fabrication des prothèses pour une communauté.",
          "Les urgences dentaires dans un quartier."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-les concepts et pratiques de la dentisterie communautaire peuvent être appliqués par tous les professionnels de la santé dentaire, y compris les dentistes généralistes, spécialistes, les hygiénistes dentaires et les assistants dentaires.\n -Cest une branche de la dentisterie qui se concentre sur la santé\n orale de la population dans son ensemble."
      },
      {
        "questionText": "Dans l'approche communautaire, la première étape est souvent :",
        "options": [
          "Le traitement de tous les individus.",
          "L'analyse des besoins de la population (enquête épidémiologique).",
          "La construction d'un nouveau cabinet dentaire.",
          "La distribution de brosses à dents."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On ne peut pas mettre en place une action efficace sans savoir d'où l'on part. Il faut d'abord mesurer l'ampleur des problèmes (combien de caries ? qui est le plus touché ?) pour définir les priorités."
      },
      {
        "questionText": "Les concepts clés de la dentisterie communautaire sont :",
        "options": [
          "La promotion de la santé, la prévention et la planification des soins.",
          "Uniquement la restauration des dents cariées.",
          "La communication et le marketing.",
          "L'économie et la gestion."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C'est une démarche globale qui inclut des actions pour améliorer la santé (promotion), éviter les maladies (prévention), et organiser les soins de manière efficace pour ceux qui en ont besoin (planification)."
      },
      {
        "questionText": "Un programme de scellement des sillons des premières molaires dans les écoles est une action de :",
        "options": [
          "Dentisterie curative.",
          "Dentisterie communautaire préventive.",
          "Dentisterie esthétique.",
          "Recherche fondamentale."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est une action de prévention (le scellement protège la dent avant l'apparition de la carie) qui s'adresse à un groupe cible (les enfants d'un certain âge dans leur milieu de vie, l'école), ce qui est typique de l'approche communautaire."
      },
      {
        "questionText": "L'approche communautaire s'occupe des pathologies qui touchent :",
        "options": [
          "Les patients à risque uniquement.",
          "La communauté dans son ensemble.",
          "Exclusivement les adultes.",
          "Seulement la cavité buccale."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Même si elle peut cibler des groupes prioritaires (enfants, personnes âgées), sa perspective est toujours la santé globale de la communauté et les facteurs qui l'influencent."
      },
      {
        "questionText": "Quelle est la différence entre l'approche clinique et l'approche communautaire ?",
        "options": [
          "Il n'y en a aucune.",
          "L'approche clinique se fait à l'hôpital, l'approche communautaire en ville.",
          "L'approche clinique traite un patient, l'approche communautaire analyse une population et planifie un programme.",
          "L'approche clinique est moins chère."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le clinicien fait un examen et un traitement sur un individu ; le professionnel en santé communautaire fait une enquête et un programme pour une population."
      },
      {
        "questionText": "La \"promotion de la santé\" en dentisterie communautaire vise à :",
        "options": [
          "Promouvoir un cabinet dentaire spécifique.",
          "Donner aux gens les moyens d'améliorer leur propre santé bucco-dentaire.",
          "Vendre des produits d'hygiène.",
          "Uniquement soigner les maladies existantes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La promotion de la santé va au-delà de la prévention. Elle cherche à agir sur les déterminants de la santé (éducation, environnement, compétences) pour que les individus et les communautés puissent avoir un meilleur contrôle sur leur santé."
      },
      {
        "questionText": "L'un des principaux outils de la dentisterie communautaire est :",
        "options": [
          "L'extraction dentaire.",
          "L'éducation pour la santé.",
          "Le blanchiment des dents.",
          "La pose d'implants."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Informer et éduquer la population sur les causes des maladies et les moyens de les éviter (hygiène, alimentation) est une stratégie fondamentale et très rentable en dentisterie communautaire."
      },
      {
        "questionText": "La planification d'un programme communautaire implique de :",
        "options": [
          "Fixer des objectifs clairs et mesurables.",
          "Identifier les ressources nécessaires (personnel, budget).",
          "Prévoir une méthode d'évaluation.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Un programme de santé publique n'est pas une improvisation. Il doit être planifié rigourously avec des objectifs ('réduire de 20% le nombre de caries chez les enfants de 6 ans'), des moyens, un plan d'action et une évaluation finale pour savoir si ça a marché."
      },
      {
        "questionText": "L'évaluation d'un programme communautaire sert à :",
        "options": [
          "Sanctionner les participants.",
          "Mesurer si les objectifs ont été atteints et si le programme a été efficace.",
          "Uniquement calculer les coûts.",
          "Rédiger un article scientifique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'évaluation est l'étape finale mais essentielle qui permet de juger de la réussite du programme, de comprendre ce qui a bien ou mal fonctionné, et d'améliorer les actions futures."
      },
      {
        "questionText": "Les \"inégalités sociales de santé\" en dentisterie signifient que :",
        "options": [
          "Les personnes riches ont de plus belles dents.",
          "Les personnes issues de milieux défavorisés ont en moyenne un moins bon état de santé bucco-dentaire.",
          "Tout le monde a les mêmes chances face à la carie.",
          "Les dentistes préfèrent soigner les personnes riches."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C'est un constat majeur en santé publique. La prévalence des caries, des maladies parodontales et des édentements est plus élevée dans les populations à faible revenu et faible niveau d'éducation. La dentisterie communautaire cherche à réduire ces inégalités."
      },
      {
        "questionText": "Un programme de fluoration de l'eau de boisson est une mesure de :",
        "options": [
          "Dentisterie communautaire.",
          "Dentisterie individuelle.",
          "Traitement orthodontique.",
          "Soin d'urgence."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C'est l'exemple historique et typique d'une mesure de santé publique : une action collective, passive (les gens n'ont rien à faire de particulier) et qui bénéficie à l'ensemble de la population desservie par le réseau d'eau."
      },
      {
        "questionText": "Quel indice est souvent utilisé en épidémiologie communautaire pour mesurer l'expérience carieuse ?",
        "options": [
          "L'indice de plaque.",
          "L'indice gingival.",
          "L'indice CAO (Cariée, Absente, Obturée).",
          "L'indice de satisfaction du patient."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'indice CAOD (pour les dents permanentes) ou caod (pour les dents temporaires) est l'indicateur universel. On compte pour chaque individu le nombre de dents cariées, absentes pour cause de carie, et obturées (soignées), ce qui donne un score qui reflète son 'histoire' avec la maladie carieuse."
      },
      {
        "questionText": "Le marketing social en santé communautaire utilise les techniques du marketing commercial pour :",
        "options": [
          "Vendre des produits de santé.",
          "Inciter à des comportements bénéfiques pour la santé.",
          "Faire du profit pour l'hôpital.",
          "Promouvoir des médecins célèbres."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Au lieu de vendre un produit, on 'vend' un comportement ou une idée (ex: 'brossez-vous les dents 2 fois par jour', 'arrêtez de fumer'). On utilise les mêmes techniques (ciblage, communication, message attractif) pour un objectif de santé publique."
      },
      {
        "questionText": "La principale limite des actions de dentisterie communautaire est souvent :",
        "options": [
          "Le manque de maladies à traiter.",
          "Le manque de motivation des professionnels.",
          "La difficulté à pérenniser les actions et à obtenir un financement durable.",
          "Le refus des populations de participer."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Beaucoup de programmes de santé publique sont efficaces mais fonctionnent sur des financements ponctuels. La plus grande difficulté est souvent de les intégrer de manière permanente dans le système de santé et d'assurer leur financement sur le long terme."
      },
      {
        "questionText": "N°9 (2020 EMD - Q1919\nDans l'approche communautaire, il s'agit:",
        "options": [
          "D'un patient,",
          "D'un diagnostic,",
          "D'un traitement,",
          "D'une enquête épidémiologique."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L’épidémiologie s’intéresse à un groupe d’individu et non à l’individu (comme la dentisterie communautaire)."
      },
      {
        "questionText": "N°6 (2018 Synthèse - Q2060\nDans la démarche communautaire, le praticien réalise :",
        "options": [
          "un examen clinique",
          "une enquête épidémiologique",
          "un diagnostic",
          "une analyse des résultats"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’épidémiologie s’intéresse à un groupe d’individu et non à l’individu (comme la dentisterie communautaire)"
      },
      {
        "questionText": "N°17 (2024 EMD - Q764\nQuelle est l'activité principale des dentistes communautaires?",
        "options": [
          "Effectuer des examens cliniques et des soins dentaires.",
          "Réaliser des restaurations, des couronnes et des bridges",
          "Éduquer le public sur la santé bucco-dentaire et mener des programmes de prévention",
          "Effectuer des chirurgies buccales"
        ],
        "correctOptionIndexes": [],
        "explanation": "L'activité principale des dentistes communautaires consiste à fournir des soins dentaires de base et préventifs à la population ainsi que eduquer et sensibiliser le public sur l'importance de l’hygiene bucco-dentaire et des visites régulières chez le dentiste."
      }
    ]
  },
  {
    "title": "Alimentation, nutrition et santé dentaire",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Le déséquilibre glycémique (comme dans le diabète) peut :",
        "options": [
          "Provoquer une plus grande sensibilité aux infections parodontales.",
          "Être amélioré par la présence d'une parodontite.",
          "Provoquer un retard de cicatrisation après un acte chirurgical.",
          "N'a aucun lien avec la santé bucco-dentaire."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Un taux de sucre élevé dans le sang (hyperglycémie) affaiblit les défenses immunitaires et la capacité de réparation des tissus. Cela rend les gencives plus vulnérables aux infections et complique la guérison après une intervention. De plus, l'infection parodontale peut elle-même aggraver le déséquilibre glycémique."
      },
      {
        "questionText": "Une carence sévère en vitamine C (scorbut) se manifeste dans la bouche par :",
        "options": [
          "Une sécheresse buccale intense.",
          "Des saignements gingivaux spontanés et importants.",
          "L'apparition rapide de nombreuses caries.",
          "Une décoloration blanche de la langue."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La vitamine C est essentielle à la fabrication du collagène, un constituant majeur des gencives et des vaisseaux sanguins. Sa carence fragilise les tissus, ce qui entraîne des hémorragies gingivales caractéristiques."
      },
      {
        "questionText": "Une consommation élevée de nutriments riches en glucides fermentescibles cause principalement :",
        "options": [
          "Des problèmes d'occlusion.",
          "Une usure accélérée de l'émail.",
          "Des caries dentaires.",
          "Des colorations jaunes sur les dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les bactéries de la plaque dentaire, en particulier Streptococcus mutans, utilisent les sucres (glucides fermentescibles) comme nourriture et les transforment en acides. Ce sont ces acides qui déminéralisent l'émail et créent la carie."
      },
      {
        "questionText": "Une carence en calcium peut entraîner :",
        "options": [
          "Une déminéralisation de l'émail des dents déjà formées.",
          "Une augmentation de la production de salive.",
          "Une moins bonne minéralisation de l'os alvéolaire.",
          "Un blanchiment des dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le calcium est un composant essentiel de l'os. Une carence peut rendre l'os alvéolaire (l'os qui soutient les dents) plus poreux et moins dense (ostéoporose), affaiblissant ainsi le support de la dent."
      },
      {
        "questionText": "N°2 (2020 EMD - Q1898\nLes protéines sont:",
        "options": [
          "Neutralisent les acides de la plaque.",
          "Sont le principal composant de l'émail.",
          "Participent à la formation du collagène et à la réponse immunitaire.",
          "Blanchissent les dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Comme pour la vitamine C, les protéines (acides aminés) sont les 'briques' nécessaires à la construction du collagène des gencives et du ligament. Elles sont aussi vitales pour fabriquer les anticorps et les cellules de l'immunité qui combattent les infections."
      },
      {
        "questionText": "Quel est l'aliment ou la boisson le/la plus cariogène ?",
        "options": [
          "Un morceau de fromage.",
          "Un verre d'eau.",
          "Un soda sucré siroté pendant une heure.",
          "Une pomme croquée rapidement."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le pire scénario est la combinaison d'une forte concentration en sucre, d'une acidité élevée (présente dans les sodas) et d'une exposition prolongée et répétée. Siroter un soda maintient un pH très bas dans la bouche pendant une longue période."
      },
      {
        "questionText": "L'analyse alimentaire en cabinet dentaire vise à :",
        "options": [
          "Mettre le patient au régime pour qu'il perde du poids.",
          "Vérifier si le patient mange assez de protéines.",
          "Identifier la fréquence et la nature des prises alimentaires à risque carieux.",
          "Donner des conseils de cuisine."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'objectif principal est de repérer les habitudes dangereuses pour les dents, notamment la fréquence des grignotages sucrés et la consommation de boissons acides, afin de donner des conseils ciblés."
      },
      {
        "questionText": "Le pouvoir cariogène d'un aliment dépend de :",
        "options": [
          "Sa teneur en glucides fermentescibles.",
          "Sa consistance (collante ou non).",
          "Le moment de sa consommation (pendant ou entre les repas).",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Ce n'est pas seulement la quantité de sucre qui compte, mais aussi sa capacité à coller aux dents (un caramel est pire qu'un jus) et surtout la fréquence de sa consommation. Manger 5 bonbons d'un coup est moins pire que d'en manger un toutes les heures."
      },
      {
        "questionText": "Les lipides (graisses) peuvent avoir un rôle protecteur contre la carie en :",
        "options": [
          "Formant un film protecteur sur l'émail.",
          "Tuant directement les bactéries.",
          "Reminéralisant l'émail.",
          "Augmentant le flux de salive."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Certains lipides peuvent former une fine couche hydrophobe à la surface de la dent, ce qui pourrait isoler l'émail des acides et empêcher les sucres et les bactéries d'y adhérer facilement."
      },
      {
        "questionText": "Quel comportement alimentaire est le MOINS à risque pour les dents ?",
        "options": [
          "Grignoter des biscuits toute la matinée.",
          "Boire un café sucré toutes les heures.",
          "Manger un dessert sucré juste à la fin du repas principal.",
          "Manger des bonbons juste avant de se coucher sans se brosser les dents."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Manger du sucre à la fin d'un repas est le 'moins pire' des scénarios car le repas a stimulé un grand flux de salive, qui va aider à neutraliser rapidement les acides produits."
      },
      {
        "questionText": "Une malnutrition prolongée peut provoquer au niveau parodontal :",
        "options": [
          "Une meilleure résistance des tissus.",
          "Une modification et une aggravation de la réponse inflammatoire à la plaque.",
          "Une stabilisation de la flore microbienne.",
          "Une diminution de la mobilité des dents."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un organisme affaibli par des carences nutritionnelles ne peut plus se défendre correctement. La réponse immunitaire et inflammatoire devient inefficace et désordonnée, ce qui aggrave la destruction des tissus parodontaux."
      },
      {
        "questionText": "La consommation de tabac aggrave les maladies parodontales en :",
        "options": [
          "Diminuant l'apport sanguin dans la gencive (vasoconstriction).",
          "Masquant les saignements, un signe d'alerte.",
          "Altérant la fonction des cellules de défense.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le tabac est un poison pour la gencive : il réduit l'oxygénation, cache les symptômes, affaiblit les défenses et retarde la cicatrisation, créant un environnement parfait pour la progression de la maladie."
      },
      {
        "questionText": "Un déficit en vitamine D est néfaste pour la santé bucco-dentaire car cette vitamine est essentielle pour :",
        "options": [
          "L'absorption du calcium et la minéralisation osseuse.",
          "La production de salive.",
          "La prévention de la mauvaise haleine.",
          "Le goût des aliments."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La vitamine D est indispensable pour que l'organisme puisse absorber et utiliser le calcium. Sans elle, même un apport suffisant en calcium ne sert à rien, ce qui affaiblit l'os alvéolaire et les dents."
      },
      {
        "questionText": "Les aliments dits \"cariostatiques\" ou \"protecteurs\" sont par exemple :",
        "options": [
          "Les sodas light.",
          "Les bonbons sans sucre.",
          "Le fromage et les noix.",
          "Le pain blanc."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Certains aliments comme le fromage sont riches en calcium, en phosphate et en caséine. Ils ne sont pas cariogènes et peuvent même aider à neutraliser les acides et à favoriser la reminéralisation après une prise de sucre."
      },
      {
        "questionText": "Quel conseil est le plus important pour un patient ayant un risque carieux élevé ?",
        "options": [
          "Arrêter totalement et définitivement le sucre.",
          "Se brosser les dents une fois par jour.",
          "Réduire la fréquence des prises de sucre, en particulier entre les repas.",
          "Utiliser un bain de bouche à la menthe."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le facteur le plus critique dans le développement de la carie est la fréquence des attaques acides. Le conseil le plus efficace est donc de limiter la consommation de sucres aux repas principaux et d'éviter le grignotage."
      },
      {
        "questionText": "N°18 (2022 EMD - Q1518\nLa carence en calcium entraine:",
        "options": [
          "La déminéralisation de l'email",
          "La destruction du ligament alvéolo-dentaire",
          "La malformation de la dentine secondaire:",
          "La destruction de l'os alvéolaire."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le calcium est tres important car sa carence antraine la destruction du ligament alvéolo-dentaire et meme role au niveau de l’os."
      },
      {
        "questionText": "N°2 (2021 EMD - Q1586\nLa vitamine C provoque en cas de carence :",
        "options": [
          "Le scorbut;",
          "Une lésion blanche;",
          "Des hémorragies spontanées;",
          "Une ulcération."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "Vitamine C : déficit provoque le scorbut (stomatite scorbutique, gingivite rouge vive, hémorragies spontanées, ulcération, atteinte des éléments de soutien des dents voir leur chute)."
      },
      {
        "questionText": "N°5 (2020 EMD - Q1907\nLes maladies parodontales sont :",
        "options": [
          "Des maladies inflammatoires,",
          "Des maladies dégénératives,",
          "D'origine bactérienne,",
          "Des maladies qui affectent les tissus durs de la dent."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les maladies parodontales sont des maladies inflammatoires d’origine bactérienne qui affectent les tissus de soutien de la dent."
      },
      {
        "questionText": "N°7 (2020 EMD - Q1913\nLes aliments les plus cariogènes sont",
        "options": [
          "Des aliments cariostatiques,",
          "Ceux riches en glucides fermentes cibles,",
          "Ayant une durée de rétention longue en bouche,",
          "Rapidement solubles dans la salive."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les aliments cariostatiques sont les aliments protecteurs càd qui ne contribuent pas à la carie.\n Les aliments les plus cariogènes sont ceux riches en glucides fermentes cibles, ayant une durée de rétention longue en bouche, lentement soluble dans la salive."
      },
      {
        "questionText": "N°16 (2020 EMD - Q1941\nL'analyse alimentaire vise",
        "options": [
          "A vérifier la conformité des rations alimentaires du patient,",
          "A étudier les comportements psychologiques potentiellement dangereux pour la santé bucco-dentaire.",
          "A orienter le patient vers un médecin interniste,",
          "A mettre en place des conseils sur l'hygiène bucco-dentaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’analyse alimentaire vise à vérifier la conformité des rations alimentaires du patient en fonctions des recommandations nationales."
      },
      {
        "questionText": "N°8 (2019 EMD - Q1996\nLe pouvoir cariogène d'un aliment est défini par",
        "options": [
          "Son pouvoir cariostatique.",
          "Sa capacité à induire des caries.",
          "Sa contribution a la carie.",
          "Sa capacité à rendre efficace le pouvoir tampon de la salive."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C’est les aliments protecteurs qui sont définies par leurs pouvoir cariostatique."
      },
      {
        "questionText": "N°9 (2019 EMD - Q1997\nLes lipides jouent un rôle dans:",
        "options": [
          "La fabrication de toutes nos cellules, de notre système hormonal et de toutes nos membranes cellulaires.",
          "La régulation de l'appétit.",
          "Le fonctionnement de la thyroïde.",
          "La coagulation du sang et dans la consolidation des os"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C’est les glucides qui ont un rôle dans la régulation de l’appétit.C’est la vitamine K qui joue un rôle dans la coagulation du sang et la consolidation des os.C’est l’iode qui joue un rôle dans le fonctionnement de la thyroïde"
      },
      {
        "questionText": "N°10 (2019 EMD - Q2001\nLes comportements alimentaires potentiellement dangereux pour la santé bucco-dentaire sont:",
        "options": [
          "Ne pas manger de sucreries dans certaines conditions (devant la télévision ou l'ordinateur, en voiture, avant d'aller se coucher etc.).",
          "Collations en fin de soirée.",
          "Associer bonbons et confiseries aux moments festifs occasionnel (anniversaire) et suivre l'absorption par un brossage efficace des dents",
          "Limiter les collations et encourager les repas à table, en prenant tant que possible son temps pour mastiquer et apprécier."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2019 EMD - Q2006\nUne malnutrition prolongée provoque:",
        "options": [
          "La modification de la réponse des tissus parodontaux.",
          "La stabilisation de la flore microbienne orale.",
          "une aide précieuse dans la défense de l'organisme contre les maladies.",
          "La facilitation de la dégustation, mastication, déglutition, la digestion et la phonation."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2018 EMD - Q2079\nUn déficit en protéine conduit au niveau parodontal à :",
        "options": [
          "Un élargissement du LAD",
          "Un collagène moins dense",
          "Un épithélium aminci",
          "Une destruction osseuse"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2024 EMD - Q637\nComment réduire le risque de carie ?",
        "options": [
          "Brossage des dents",
          "Prendre des aliments riches en sucre",
          "Prendre des aliments collants",
          "Réduire le nombre de grignotages entre les repas"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2023 EMD - Q1038\nLes micronutriments",
        "options": [
          "Sont les vitamines et les oligo-éléments,",
          "B- Sont les protéines, les lipides et les glucides,",
          "Ne peuvent être produits par le corps.",
          "D- Peuvent être produits par le corps."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "-Les protéines, les lipides et les glucides sont des macronutriments."
      },
      {
        "questionText": "N°13 (2023 EMD - Q1085\nLes aliments protecteurs",
        "options": [
          "Ont une durée de rétention longue en bouche,",
          "Sont lentement solubles dans la salive",
          "Sont les aliments cariostatiques,",
          "Ne contribuent pas à la carie."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "-C’est les aliments cariogène qui ont une durée de rétention longue en bouche et lentement solubles dans la salive."
      },
      {
        "questionText": "N°18 (2023 EMD - Q1158\nParmi les habitudes nocives nous citons :",
        "options": [
          "La consommation fréquente de sucreries, addiction aux colas, boissons sucrées et acides, café, etc.",
          "La promotion de la santé buccodentaire dans les écoles",
          "Le tabagisme, la consommation d'alcool.",
          "L'utilisation des fluorures."
        ],
        "correctOptionIndexes": [],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2022 EMD - Q1489\nLa consommation des nutriments très riche en glucides cause:",
        "options": [
          "Des problèmes d'occlusion",
          "Un développement de microbes",
          "Des problèmes parodontaux;",
          "Des caries dentaires."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Une augmentation de la consommation des nutriments très riche en glucides conduira vers l’apparition de caries. Il ya aussi la facilité de dévloppement des microbes en fournissant l’essentiel de la matrice inter-microbienne, d’ou les problèmes parodontaux vont se developper dans des proportions dramatiques."
      }
    ]
  },
  {
    "title": "Contrôle de l’infection au cabinet hygiène hospita",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "N°17 (2021 EMD - Q1839\nLa stérilisation est une opération :",
        "options": [
          "Qui permet de tuer les micro-organismes;",
          "Qui permet de multiplier les bactéries;",
          "Qui permet d'éliminer les déchets de bactéries;",
          "Qui permet de désinfecter les instruments."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La stérilisation est une opération permettant d’éliminer ou de tuer les\n micro-organismes."
      },
      {
        "questionText": "N°18 (2021 EMD - Q1851\nLe Tri des déchets permet :",
        "options": [
          "D'augmenter la sécurité des personnes;",
          "De respecter les règles d'hygiène ;",
          "D'éliminer des déchets à la fois ;",
          "De diminuer la contamination croisée des personnes."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le Tri des déchets permet :\n - D’assurer la sécurité des personnes\n - De respecter les règles d’hygiène\n - De contrôler l’incidence économique de l’élimination\n des déchets.\n - D’éliminer chaque type de déchet par la filière\n appropriée dans le respect de la réglementation"
      },
      {
        "questionText": "N°4 (2020 EMD - Q1906\nLa stérilisation est:",
        "options": [
          "Un processus qui permet de décontaminer et de désinfecter les instruments souillés,",
          "Une opération permettant le rinçage du matériel,",
          "Une opération qui permet l'essuyage des instruments,",
          "Une opération permettant d'éliminer et de tuer les micro-organismes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La stérilisation est une opération permettant d’éliminer ou de tuer les\n micro-organismes.\n La stérilisation des instruments désigne le processus qui permet de décontaminer et de désinfecter les instruments souillés."
      },
      {
        "questionText": "N°10 (2020 EMD - Q1922\nLe contrôle du risque infectieux passe par:",
        "options": [
          "A L'utilisation des instruments à usage unique,",
          "Le refus de prendre en charge des malades à risque,",
          "Les contrôles sanitaires du personnel médical.",
          "La disposition d'un lave-mains à commande"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2020 EMD - Q1944\nl'objectif du contrôle des infections est:",
        "options": [
          "De protéger les patients et le personnel contre les infections,",
          "De réduire le nombre de micro organismes pathogènes pour permettre au système immunitaire de prévenir les infections,",
          "De diminuer l'efficacité de l'ensemble des micro-organismes,",
          "D'éliminer la contamination croisée."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "En réduisant le nombre de micro-organismes pathogènes automatiquement on va diminuer leurs efficacité aussi."
      },
      {
        "questionText": "N°4 (2019 EMD - Q1979\nun antiseptique est",
        "options": [
          "une substance antibactérienne nom spécifique",
          "une substance antibactérienne spécifique",
          "une substance qui agit partiellement et rapidement sur les bactéries",
          "une substance qui permet de justifier les micro-organismes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Contrairement aux antibiotiques, qui sont spécifiques à certains types de bactéries, les antiseptiques sont généralement non spécifiques et peuvent être efficaces contre une large gamme de micro-organismes, y compris les bactéries, les virus et les champignons."
      },
      {
        "questionText": "N°5 (2019 EMD - Q1982\nla stérilisation est une opération",
        "options": [
          "qui permet de tuer les micro-organismes",
          "qui permet de multiplier les bactéries",
          "qui permet d'éliminer les déchets de bactéries",
          "qui permet de désinfecter les instruments"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La stérilisation est une opération permettant d’éliminer ou de tuer les\n micro-organismes."
      },
      {
        "questionText": "N°8 (2018 EMD - Q2068\nun antiseptique est",
        "options": [
          "une substance antibactérienne nom spécifique",
          "une substance antibactérienne spécifique",
          "une substance qui agit globalement et rapidement sur les bactéries",
          "une substance qui permet d'éliminer les micro-organismes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Un antiseptique est une substance qui permet d’éliminer ou de tuer les micro-organismes ou bien d’inactiver les virus en fonction des objectifs fixés.\n Contrairement aux antibiotiques, qui sont spécifiques à certains types de bactéries, les antiseptiques sont généralement non spécifiques et peuvent être efficaces contre une large gamme de micro-organismes, y compris les bactéries, les virus et les champignons."
      },
      {
        "questionText": "N°9 (2018 Synthèse - Q2073\nla stérilisation est une opération",
        "options": [
          "qui permet de tuer les microorganismes",
          "qui permet d'éliminer les bactéries",
          "permet de conserver la forme de l'instrument",
          "de nettoyer les instruments"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La stérilisation est une opération permettant d’éliminer ou de tuer les\n micro-organismes (dont les bactéries)."
      },
      {
        "questionText": "N°10 (2018 Synthèse - Q2075\nLe Tri des déchets permet",
        "options": [
          "d'assurer la sécurité des personnes",
          "de respecter les règles d'hygiène",
          "d'éliminer chaque type de déchet par la filière",
          "d'éviter la contamination des personnes"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2018 Synthèse - Q2100\nLe choix d'un antiseptique est fonction de :",
        "options": [
          "Son efficacité sur l'ensemble des micro-organism",
          "sa tolérance",
          "sa vitesse d'action",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2018 EMD - Q2101\nciter les étapes du cycle de la désinfection.",
        "options": [],
        "correctOptionIndexes": [],
        "explanation": "-Trempage\n -Nettoyage\n -Séchage"
      },
      {
        "questionText": "N°20 (2018 EMD - Q2102\nla stérilisation est une opération",
        "options": [
          "qui permet de tuer les microorganismes",
          "qui permet d'éliminer les bactéries",
          "qui permet de conserver la forme de l'instrument",
          "qui permet de nettoyer les instruments"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La stérilisation est une opération permettant d’éliminer ou de tuer les\n micro-organismes (dont les bacteries)."
      },
      {
        "questionText": "N°20 (2018 Synthèse - Q2103\nles objectifs du contrôle des infections sont :",
        "options": [
          "la Protection des patients et le personnel contre les infections",
          "la réduction du nombre de micro-organismes pathogènes pour permet de prévenir les infections",
          "l'élimination de la contamination croisée",
          "toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2024 EMD - Q697\nDéfinition d'une infection nosocomiale:",
        "options": [
          "Infection communautaire",
          "Infection contractée à l'hôpital",
          "Absente à l'admission à hôpital",
          "Survient chez tout individu sans terrain pathologique favorisant"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Infection nosocomiale:\n  Infection contractée à l’hôpital :\n - qui apparaît au-delà de 48h d’hospitalisation\n - absente à l’admission à hôpital\n - non en incubation\n - lien causal entre hospitalisation et infection"
      },
      {
        "questionText": "N°14 (2024 EMD - Q711\nLa désinfection des mains est:",
        "options": [
          "Une action bactériostatique par effet chimique",
          "Réalisée par solution antiseptique à base d'alcool",
          "Effectuée avant chaque soin.",
          "Un effet prolongé de deux à six heures peut être obtenu"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "-La réponse A est fausse c’est une action bactéricide par effet chimique \n -La réponse D est fausse c’est la désinfection chirurgicale des mains qui peut avoir un effet prolongé de deux à six heures."
      },
      {
        "questionText": "N°19 (2024 EMD - Q805\nPour maintenir l'hygiène au cabinet dentaire :",
        "options": [
          "Le lavage des mains se fait avant la prise en charge de chaque patient",
          "Les instruments non jetables peuvent être utilisés après une simple désinfection",
          "Le nettoyage et la désinfection des sols et des surfaces se fait une fois par semaine",
          "Les instruments à usage unique sont utilisés pour tous les patients"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le lavage des mains est effectué avant et après chaque soin et chaque fois que les mains sont souillées.\n Les instruments non jettable doivent subir une désinfection de haut niveau ou une stérilisation, toujours précédée d’un nettoyage approfondi."
      },
      {
        "questionText": "N°7 (2023 EMD - Q969\nDans un cabinet dentaire le lavage et désinfection des mains se font:",
        "options": [
          "Après chaque soin uniquement",
          "Avant la mise des gants,",
          "En mouillant les mains (sans les savonner",
          "En les séchant après rinçage."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le lavage des mains est effectué avant et après chaque soin et chaque fois que les mains sont souillées.\n Se laver soigneusement les mains avec un savon liquide de pH neutre ou\n utiliser des gels hydro-alcooliques."
      },
      {
        "questionText": "N°12 (2023 EMD - Q1052\nLe nettoyage et désinfection des plateaux et instruments manuels se feront:",
        "options": [
          "Immédiatement après leur utilisation; avant la stérilisation",
          "En emballant ces derniers pour les placés dans l'autoclave",
          "En procédant à leur décontamination",
          "En nettoyant manuellement à l'aide d'une brosse pour bien éliminer les résidus de sang ou autres."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      }
    ]
  }
];

module.exports = hygieneQuizzes;
