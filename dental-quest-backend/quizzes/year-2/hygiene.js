const hygieneQuizzes = [
  {
    "title": "Ergonomie au Cabinet Dentaire",
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
        "questionText": "Sont considérées comme salles facultatives :",
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
        "questionText": "Pour l'éclairage de la cavité buccale il est nécessaire que :",
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
        "questionText": "Les paramètres d'aménagement de l'espace de travail sont :",
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
        "explanation": "Un bon éclairage et un environnement calme sont des paramètres fondamentaux d'ergonomie qui améliorent le confort et la qualité du travail."
      },
      {
        "questionText": "Parmi les objectifs de l'ergonomie, on a :",
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
        "questionText": "Le facteur scientifique en ergonomie comporte :",
        "options": [
          "La conception.",
          "La totalité de l'équipe stomatologique.",
          "Le facteur le plus mobile.",
          "Deux directions fondamentales."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La base de l'ergonomie est la conception (design) des outils, des espaces et des méthodes de travail pour qu'ils soient adaptés au corps humain."
      },
      {
        "questionText": "La température idéale dans un cabinet dentaire est de :",
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
      }
    ]
  },
  {
    "title": "Risques et Maladies Professionnelles",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Le germe de la tuberculose est :",
        "options": [
          "Un virus.",
          "Un champignon.",
          "Le bacille de Koch.",
          "Le staphylocoque doré."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La tuberculose est une maladie infectieuse causée par une bactérie spécifique appelée Mycobacterium tuberculosis, ou Bacille de Koch (BK)."
      },
      {
        "questionText": "Dans les infections herpétiques, le chirurgien-dentiste est le plus souvent exposé à :",
        "options": [
          "L'herpès simplex 2 (génital).",
          "L'herpès simplex 1 (labial).",
          "L'herpès zoster (zona).",
          "L'herpès virus 6."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le dentiste travaillant au niveau de la bouche est principalement exposé au virus de l'herpès de type 1, responsable des \"boutons de fièvre\" sur et autour des lèvres."
      },
      {
        "questionText": "Les germes du 3ème groupe (risque majeur) incluent :",
        "options": [
          "La flore buccale normale.",
          "Les virus des maladies infantiles (ex: rougeole).",
          "Le VIH, les virus des hépatites B et C.",
          "Les streptocoques et staphylocoques."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le troisième groupe rassemble les agents pathogènes les plus dangereux transmis par le sang ou les sécrétions, qui peuvent causer des maladies graves et chroniques."
      },
      {
        "questionText": "La contagiosité de la tuberculose pulmonaire diminue fortement après :",
        "options": [
          "La première dose de traitement.",
          "24 heures de traitement.",
          "2 à 4 semaines de traitement efficace.",
          "6 mois de traitement."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un traitement antibiotique approprié réduit rapidement le nombre de bactéries que le patient peut transmettre, le rendant non contagieux en quelques semaines."
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
      }
    ]
  },
  {
    "title": "Fluor",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Les fluorures agissent en :",
        "options": [
          "Rendant l'émail plus résistant aux attaques acides.",
          "Inhibant le métabolisme des bactéries cariogènes.",
          "Favorisant la reminéralisation de l'émail.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le fluor a une triple action : il renforce la structure de l'émail (en formant de la fluorapatite), il perturbe les bactéries responsables des caries pour qu'elles produisent moins d'acide, et il aide l'émail à se réparer après une attaque acide."
      },
      {
        "questionText": "L'utilisation des dentifrices fluorés est recommandée :",
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
    "title": "Économie de la Santé",
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
      }
    ]
  },
  {
    "title": "Épidémiologie et Biostatistique",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "L'épidémiologie est l'étude de :",
        "options": [
          "Des épidermes et des maladies de peau.",
          "La distribution et des déterminants des maladies dans les populations.",
          "La fabrication des médicaments.",
          "L'anatomie humaine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'épidémiologie ne s'intéresse pas à un seul malade, mais à l'ensemble d'une population pour comprendre qui tombe malade, où, quand et pourquoi."
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
        "questionText": "La biostatistique est essentielle en santé pour :",
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
      }
    ]
  },
  {
    "title": "Code de la Santé",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "Le Code de la santé publique est :",
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
      }
    ]
  },
  {
    "title": "Dentisterie Communautaire",
    "subject": "hygiene",
    "questions": [
      {
        "questionText": "La dentisterie communautaire s'intéresse principalement à :",
        "options": [
          "Un patient individuel et sa pathologie.",
          "La santé bucco-dentaire d'un groupe ou d'une population.",
          "La fabrication des prothèses pour une communauté.",
          "Les urgences dentaires dans un quartier."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La dentisterie communautaire change d'échelle : au lieu de se focaliser sur la bouche d'UN patient (approche clinique), elle se focalise sur les problèmes de santé bucco-dentaire d'UNE population (approche de santé publique)."
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
      }
    ]
  },
  {
    "title": "Alimentation, Nutrition et Santé Dentaire",
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
        "questionText": "Les protéines sont indispensables en santé bucco-dentaire car elles :",
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
      }
    ]
  }
];

module.exports = hygieneQuizzes;