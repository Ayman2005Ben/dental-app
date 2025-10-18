// quizzes/year-3/oxyologie.js

const oxyologieQuizzes = [
  {
    title: "Introduction a l’oxyologie",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Parmi les urgences médicales les plus fréquentes au cabinet dentaire :",
        options: [
          "Malaise vagal",
          "Allergie aux anesthésiques locaux",
          "Arrêt cardiaque",
          "Hypertension artérielle",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D based on common knowledge & source implying C is rare.
        explanation: "Le malaise vagal et les réactions allergiques (vraies allergies aux AL sont rares, mais réactions possibles) sont fréquentes. L'hypertension peut être découverte ou s'aggraver. L'arrêt cardiaque est rare[cite: 4387, 4388]."
      },
      {
        questionText: "L'évaluation de la fonction neurologique consiste à :",
        options: [
          "Evaluer la réponse verbale",
          "Evaluer la réaction motrice",
          "Evaluer la sensibilité",
          "Demander au patient son Nom",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'évaluation neurologique rapide inclut la vérification de la conscience (réponse verbale, motrice, orientation - nom, lieu, temps)[cite: 4398]."
      },
      {
        questionText: "Parmi les urgences les plus fréquentes au cabinet dentaire",
        options: [
          "Malaise vagal",
          "Pneumothorax",
          "Hyperglycémie",
          "Inhalation bronchique",
          "Arrêt cardiaque"
        ],
        correctOptionIndexes: [0, 3], // A, D based on general knowledge in dentistry.
        explanation: "Le malaise vagal est très fréquent. L'inhalation/ingestion de petits instruments ou matériaux est un risque spécifique au cabinet dentaire[cite: 4405, 4408]."
      },
      {
        questionText: "Le bilan des grandes fonctions consiste:",
        options: [
          "Evaluer la fonction neurologique",
          "Evaluer la fonction respiratoire",
          "Evaluer la fonction cardio-vasculaire",
          "Evaluer la fonction digestive",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "En urgence, l'évaluation se concentre sur les fonctions vitales : neurologique (conscience), respiratoire (ventilation) et cardio-circulatoire (pouls, tension)[cite: 4416, 4417, 4418]."
      }
    ]
  },
  {
    title: "Matériel et drogues d’urgence au cabinet dentaire",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Le matériel de monitorage obligatoire au cabinet dentaire :",
        options: [
          "Oxymètre du pouls",
          "Débilitre à oxygène",
          "Canule de Guedel",
          "Tensiomètre",
          "Aspirateur de mucosités"
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "Le tensiomètre et l'oxymètre de pouls sont essentiels pour surveiller les signes vitaux (tension artérielle, saturation en oxygène, fréquence cardiaque)[cite: 780, 783]. Les autres sont du matériel d'oxygénothérapie ou d'aspiration[cite: 786]."
      },
      {
        questionText: "Concernant l’oxygénothérapie :",
        options: [
          "Le débit délivré par lunette à 02 est de 0,5 à 5 L/mn",
          "La Fio2 délivrée par lunettes à 02 est de 80-90%",
          "Le débit d'o2 au masque ne dépasse pas 10 l/mn",
          "Le masque à réserve en oxygène est utilisé pour prévenir une hypoxie tissulaire",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "Le débit par lunettes est bien de 0,5 à 5 L/min, correspondant à une FiO2 de 25-40%[cite: 792, 798]. Le débit au masque simple peut aller jusqu'à 15 L/min[cite: 799]. Le masque à haute concentration (avec réserve) vise à corriger une hypoxie[cite: 795]."
      },
      {
        questionText: "Le masque à réserve d'oxygène est indiqué:",
        options: [
          "Indiqué en cas d'hypoxémie",
          "Hypercapnie",
          "Hypoxie chronique",
          "Chez un patient comateux scoré à 3 sur l'échelle de Glasgow",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0], // A
        explanation: "Le masque à haute concentration (avec réserve) est indiqué pour délivrer une FiO2 élevée en cas d'hypoxémie aiguë sévère[cite: 805]."
      },
      {
        questionText: "La valve unidirectionnelle d'un BAVU permet :",
        options: [
          "Séparer l'air inspiré de l'air expiré",
          "Re insufflation du CO2",
          "Eviter la réinsufflassions du CO2", // ré-inhalation
          "Mélange d'air inspiré et l'air expiré",
          "Eviter le stockage du Co2" // Éviter l'accumulation
        ],
        correctOptionIndexes: [0, 2, 4], // A, C, E sont des descriptions valides de la fonction
        explanation: "La valve unidirectionnelle du BAVU dirige l'air frais vers le patient lors de la compression et l'air expiré vers l'extérieur lors du relâchement, empêchant ainsi la ré-inhalation du CO2 expiré[cite: 816, 818, 820]."
      },
      {
        questionText: "Cochez la ou (les )vraie proposition:",
        options: [
          "la saturation normale en 02 est de 85%",
          "La canule de GUEDEL empêche la chute de la langue",
          "L'atropine baisse la fréquence cardiaque",
          "L'atropine diminue les secrétions salivaires et gastrique",
          "Le Glucagon s'injecte en intraveineux"
        ],
        correctOptionIndexes: [1, 3], // B, D
        explanation: "A: Saturation normale > 95%[cite: 833]. C: Atropine augmente la fréquence cardiaque[cite: 834]. E: Glucagon s'injecte en IM[cite: 835]. La canule de Guedel maintient les voies aériennes ouvertes [cite: 828], et l'atropine a un effet anticholinergique qui diminue les sécrétions[cite: 830]."
      },
      {
        questionText: "L'Hémmisuccinate d'hydrocortisone est :",
        options: [
          "Antiallergique, antiinflammatoire",
          "Est un Minéralocorticoïde",
          "Sa posologie est de 100-200 mg en IV",
          "Indiqué dans l'asthme",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "L'hydrocortisone est un glucocorticoïde [cite: 847] ayant des propriétés anti-inflammatoires et antiallergiques[cite: 841, 848]. Il est indiqué dans les réactions allergiques sévères et l'asthme [cite: 844], à une posologie de 100-200 mg IV[cite: 843]."
      },
      {
        questionText: "La canule de GUEDEL est :",
        options: [
          "Est un matériel de réanimation",
          "Utilisée chez le patient sédaté",
          "Utilisé chez le patient conscient",
          "Empêche la chute de la langue contre le pharynx",
          "Contre indiquée chez l’enfant"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "La canule de Guedel est un matériel de maintien de la liberté des voies aériennes [cite: 854], utilisée chez le patient inconscient (sédaté, comateux, arrêt cardiaque) pour empêcher la langue d'obstruer le pharynx [cite: 857, 860-863]. Elle n'est pas utilisée chez le patient conscient[cite: 856]."
      },
      {
        questionText: "Le débit d’oxygénothérapie est de :",
        options: [
          "0,5à 5 L/mn sous lunettes",
          "10 à 15 L/mn sous lunettes",
          "30 L/mn sous lunettes",
          "15 L/mn sous masque à Oxygène", // Masque haute concentration
          "2à 4L /mn sous masque à réserve"
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "Le débit sous lunettes nasales est de 0.5 à 5 L/min[cite: 869]. Sous masque à haute concentration (avec réserve), le débit peut atteindre 15 L/min[cite: 873]."
      },
      {
        questionText: "L’oxymètre du pouls est :",
        options: [
          "Un matériel de réanimation",
          "Mesure la saturation en oxygène",
          "Mesure la fréquence cardiaque",
          "La saturation normale est de 50 %",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [1, 2], // B, C
        explanation: "L'oxymètre de pouls (ou saturomètre) est un appareil de monitorage qui mesure la saturation pulsée en oxygène (SpO2) et la fréquence cardiaque[cite: 881, 882, 883]. La saturation normale est > 95%[cite: 886]."
      },
      {
        questionText: "L’atropine:",
        options: [
          "Augmente la fréquence cardiaque",
          "Augmente la fréquence respiratoire",
          "Diminue les secrétions salivaires",
          "A un effet antispasmodique",
          "Est contre indiquée dans le malaise vagal"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "L'atropine est un anticholinergique qui augmente la fréquence cardiaque [cite: 892], diminue les sécrétions (salivaires, bronchiques...) [cite: 894] et a un effet spasmolytique[cite: 895]. Elle est indiquée dans le malaise vagal avec bradycardie[cite: 898]."
      },
      {
        questionText: "Le glucagon est:",
        options: [
          "Une hormone hypoglycémiante",
          "Une hormone hyperglycémiante",
          "Indiqué dans le coma hypoglycémiant",
          "Indiqué dans le coma hyperglycémiant",
          "Sa posologie est de 1 mg en une injection unique"
        ],
        correctOptionIndexes: [1, 2, 4], // B, C, E
        explanation: "Le glucagon est une hormone hyperglycémiante [cite: 905] indiquée en cas d'hypoglycémie sévère (coma hypoglycémique) chez le diabétique [cite: 906], à la dose de 1 mg en injection IM ou SC[cite: 908]."
      },
      {
        questionText: "propos de l'oxygène médical :", // À propos
        options: [
          "Se présente sous forme gazeuse uniquement",
          "Peut se présenter sous forme liquide",
          "Est délivré à 5 l/mn par lunettes à oxygène.", // Débit maximal par lunettes
          "Est délivré à 15 l/mn par lunettes à oxygène",
          "Doit être humidifié" // Si administration prolongée ou haut débit
        ],
        correctOptionIndexes: [1, 2, 4], // B, C, E
        explanation: "L'oxygène médical peut être stocké sous forme gazeuse (bouteilles) ou liquide (réservoirs cryogéniques)[cite: 916, 921]. Le débit maximal par lunettes est d'environ 5 L/min[cite: 917]. L'humidification est recommandée pour les débits élevés ou l'administration prolongée[cite: 919]."
      },
      {
        questionText: "L'adrénaline :",
        options: [
          "Est un médicament d'urgence",
          "Indiqué dans le choc infectieux", // Plutôt noradrénaline
          "Indiqué dans le l'œdème de Quincke",
          "S'administre uniquement en sous cutané",
          "Est contre indiqué dans l'arrêt cardiaque"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "L'adrénaline est un médicament essentiel de l'urgence [cite: 939], indiqué notamment dans le choc anaphylactique, l'œdème de Quincke [cite: 941, 945] et l'arrêt cardiaque[cite: 945]. Elle peut être administrée en IM, IV ou SC[cite: 946]."
      },
      {
        questionText: "Le matériel d'urgence dans un cabinet dentaire comporte:",
        options: [
          "Bouteille d'oxygène",
          "Canule de GUEDEL",
          "Aspirateur de mucosités",
          "Drogues d'urgence: adrénaline, atropine",
          "Toutes ces réponses sont fausses" // Toutes sont justes
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Tout cabinet dentaire doit disposer d'un matériel minimal d'urgence incluant de quoi assurer l'oxygénation (bouteille, masque, BAVU, canules), l'aspiration, et les drogues vitales (adrénaline, etc.) [cite: 977-980]."
      },
      {
        questionText: "Le chariot d'urgence contient :",
        options: [
          "Adrénaline",
          "Atropine",
          "Salbutamol", // Bronchodilatateur
          "Sérum glucose 30%",
          "Toutes ces réponses sont fausses" // Toutes sont justes/utiles
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Un chariot d'urgence bien équipé contient les médicaments essentiels pour les principales détresses : Adrénaline (anaphylaxie, arrêt cardiaque), Atropine (malaise vagal), Salbutamol (asthme), Glucosé (hypoglycémie), Corticoïdes, etc. [cite: 988-991]."
      },
      {
        questionText: "les médicaments d'urgence au cabinet dentaire :",
        options: [
          "Atropine, Adrénaline, Valium", // Valium (diazépam) pour convulsions
          "Hémisuccinate d'hydrocortisone",
          "Amoxicilline", // Antibiotique, pas urgence vitale
          "Lidocaïne", // Anesthésique local
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Les médicaments essentiels incluent Adrénaline, Atropine, Corticoïdes (Hydrocortisone), Benzodiazépines (Valium), Bronchodilatateurs (Salbutamol), Glucagon/Glucosé[cite: 1010, 1011]."
      }
    ]
  },
  {
    title: "Détresse cardio-circulatoire",
    subject: "oxyologie",
    questions: [
      {
        questionText: "La conduite devant un arrêt Cardiocirculatoire est:",
        options: [
          "Alerte médicale précoce",
          "Liberté des voies aériennes supérieures",
          "Ventilation au lunettes à 02",
          "Massage cardiaque externe",
          "Injection de 15 mg d'adrénaline en IV"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "La chaîne de survie inclut l'alerte précoce, la RCP précoce (libération des voies aériennes, massage cardiaque externe, ventilation - pas avec lunettes), la défibrillation précoce et les soins spécialisés [cite: 349, 350, 352, 355-359]. L'adrénaline est injectée à 1mg[cite: 515]."
      },
      {
        questionText: "Parmi les étiologies de l'arrêt cardiaque",
        options: [
          "Fibrillation ventriculaire",
          "Embolie pulmonaire massive",
          "Crise hypertensive",
          "Syndrome de GUILLAIN BARRE",
          "Hyperkaliémie"
        ],
        correctOptionIndexes: [0, 1, 4], // A, B, E
        explanation: "Les causes cardiaques (fibrillation ventriculaire), pulmonaires (embolie massive), métaboliques (hyperkaliémie) sont des étiologies fréquentes d'arrêt cardiaque[cite: 365, 366, 369]."
      },
      {
        questionText: "L'arrêt cardiaque est :",
        options: [
          "Urgence absolue",
          "Aboutit à une anoxie cérébrale",
          "La mort neuronale survient en 2 mn en l'absence de réanimation",
          "Se traduit par un ECG plat", // Pas toujours (FV, TVSP...)
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "C'est une urgence absolue [cite: 376] menant à une anoxie cérébrale[cite: 377]. La mort neuronale survient en 4-6 minutes sans RCP[cite: 382]. L'ECG peut montrer une asystolie (plat), mais aussi une fibrillation ventriculaire ou une tachycardie ventriculaire sans pouls."
      },
      {
        questionText: "Le diagnostic de l'arrêt cardiaque se pose par:",
        options: [
          "Marbrures", // Signe tardif/choc
          "Myosis bilatéral", // Plutôt mydriase
          "Absence du pouls fémoral",
          "Présence d'une ventilation sans GASPS", // Absence de ventilation
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [2], // C
        explanation: "Le diagnostic repose sur 3 signes : inconscience (absence de réponse), absence de ventilation (ou gasps agoniques), et absence de pouls central (carotidien ou fémoral)[cite: 390, 441, 442]."
      },
      {
        questionText: "La compression thoracique lors du massage cardiaque :",
        options: [
          "Doit être profonde de 10 cms",
          "Au rythme de 30 compressions et 2 insufflations",
          "Au rythme de 20 compressions et 2 insufflations",
          "La zone de compression est le 1/3 supérieur et 2/3 inferieurs",
          "Les bras doivent être en flexion"
        ],
        correctOptionIndexes: [1], // B
        explanation: "La profondeur est de 5-6 cm[cite: 406]. Le rythme est de 30 compressions pour 2 insufflations[cite: 401, 457]. La zone est le milieu de la moitié inférieure du sternum[cite: 406]. Les bras doivent être tendus[cite: 406]."
      },
      {
        questionText: "Parmi ces étiologies d'arrêt cardiaque une est fausse :",
        options: [
          "Plaie artérielle", // Hémorragie massive -> hypovolémie
          "Hyperkaliémie",
          "Hyperoxie", // C'est l'hypoxie
          "Fibrillation ventriculaire",
          "Asthme aigue grave" // Asphyxie -> hypoxie
        ],
        correctOptionIndexes: [2], // C est faux
        explanation: "L'hypoxie (manque d'oxygène) est une cause fréquente d'arrêt cardiaque, pas l'hyperoxie (excès d'oxygène)[cite: 424, 428]."
      },
      {
        questionText: "Les signes cliniques d’un arrêt cardiaque sont :",
        options: [
          "Myosis serré bilatéral",
          "Mydriase bilatérale", // Tardif, aréactive
          "Absence de poul radial", // Pouls central est le critère
          "Un poul fémoral battant",
          "Hyperventilation"
        ],
        correctOptionIndexes: [1], // B (tardif mais signe classique) + Absence pouls central (non proposé seul)
        explanation: "Les signes cardinaux sont l'inconscience, l'absence de respiration et l'absence de pouls central (carotidien/fémoral) [cite: 440-442]. La mydriase bilatérale aréactive apparaît ensuite[cite: 435, 443]. Les signes cutanés comme la pâleur, cyanose, marbrures sont aussi présents[cite: 444]."
      },
      {
        questionText: "Le massage cardiaque se fait :",
        options: [
          "Patient en décubitus dorsal",
          "Après liberté des voies aériennes supérieures",
          "Bras fléchis",
          "Alternance de 10 compressions et 5 insufflations",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Le patient doit être allongé sur le dos sur un plan dur[cite: 450]. La libération des voies aériennes est une étape préalable essentielle[cite: 451, 456]. Les bras doivent être tendus [cite: 406], et le rythme est de 30 compressions pour 2 insufflations[cite: 457]."
      },
      {
        questionText: "devant une mort subite par fibrillation ventriculaire :",
        options: [
          "Faire un choc électrique externe",
          "Le choc électrique est de 1500-200 joules", // 150-200 J
          "Les 2 électrodes sont placées sous l’épaule droite",
          "La défibrillation se fait par défibrillateur",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "La fibrillation ventriculaire est une indication majeure de défibrillation (choc électrique externe)[cite: 463, 467], réalisée avec un défibrillateur. L'énergie recommandée pour un choc biphasique est de 150-200 Joules[cite: 464, 469]. Les électrodes sont placées en position antéro-latérale (sous-claviculaire droite et axillaire gauche)[cite: 470]."
      },
      {
        questionText: "L'arrêt cardio circulatoire :",
        options: [
          "une interruption brutale de la circulation",
          "une interruption brutale de la ventilation",
          "aboutit à une hyperoxic cérébral",
          "Toutes ces réponses sont fausses",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0], // A
        explanation: "L'arrêt cardio-circulatoire est défini par l'interruption brutale et simultanée de la circulation et de la ventilation [cite: 476, 477, 482], entraînant une anoxie (manque d'oxygène) cérébrale [cite: 482], pas une hyperoxie[cite: 478]."
      },
      {
        questionText: "le massage cardiaque externe se fait :",
        options: [
          "Compression thoracique par le praticien",
          "Alternance de 10 compressions et 1 insufflation",
          "Patient couché en décubitus dorsal",
          "Patient couché en décubitus latéral",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Le MCE consiste en des compressions thoraciques [cite: 489] effectuées sur un patient allongé sur le dos (décubitus dorsal)[cite: 491]. Le rythme est de 30 compressions pour 2 insufflations[cite: 497]."
      },
      {
        questionText: "L'arrêt cardio-circulatoire survient par :",
        options: [
          "Hypovolémie",
          "Hypoxie",
          "Fibrillation ventriculaire",
          "Intoxication au CO", // -> Hypoxie
          "Toutes ces réponses sont fausses" // Toutes sont justes/possibles
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Les causes d'arrêt cardiaque sont multiples et incluent les causes cardiaques (ex: fibrillation ventriculaire), l'hypovolémie (hémorragie), l'hypoxie (asphyxie, intoxication CO, asthme grave), les troubles métaboliques, etc. [cite: 503-506]."
      },
      {
        questionText: "conduite d'urgence d'un arrêt cardio-vasculaire :",
        options: [
          "Massage cardiaque externe",
          "Injection de 1 mg d'adrénaline en intraveineux", // Fait partie des soins spécialisés
          "Injection de 20mg d'adrénaline en intraveineux",
          "Intubation et oxygénothérapie", // Fait partie des soins spécialisés
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D (B et D sont des soins avancés)
        explanation: "La prise en charge immédiate repose sur la RCP de base (alerte, MCE, ventilation)[cite: 519]. Les soins médicaux avancés incluent l'intubation, l'oxygénothérapie [cite: 517], l'administration de drogues comme l'adrénaline (1mg IV toutes les 3-5 min) [cite: 515] et la défibrillation si indiquée[cite: 519]."
      },
      {
        questionText: "Les signes cliniques de l'arrêt cardio-respiratoire :",
        options: [
          "Abolition du poul carotidien et radial",
          "Myosis serré",
          "Mydriase bilatérale", // Tardive
          "Respiration normale",
          "Conscience normale"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Inconscience [cite: 533], absence de respiration [cite: 532], abolition des pouls centraux (carotidien, fémoral) et périphériques (radial)[cite: 525, 531]. La mydriase bilatérale aréactive est un signe plus tardif[cite: 527]."
      },
      {
        questionText: "Les étiologies de l'arrêt cardiaque sont :",
        options: [
          "Hypoxie",
          "Hypo volémie",
          "Fibrillation ventriculaire",
          "Intoxication médicamenteuse",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "Toutes ces conditions peuvent conduire à un arrêt cardiaque [cite: 539-543]."
      },
      {
        questionText: "la prise en charge d'urgence d'un arrêt cardio-circulatoire nécessite :",
        options: [
          "L'appréciation de l'état respiratoire",
          "L'appréciation de l'état circulatoire",
          "Une organisation en chaine de l'accès au secours",
          "La restauration de la circulation et de la ventilation",
          "Toutes ces réponses sont fausses" // Toutes sont justes
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "La prise en charge suit la chaîne de survie : évaluation rapide (respiration, circulation), alerte, et gestes de réanimation (restauration circulation et ventilation) [cite: 550-554]."
      },
      {
        questionText: "la réanimation cardio-pulmonaire de base repose sur :",
        options: [
          "vérifier la réactivité",
          "liberté des voies aériennes supérieures par extension de la tete",
          "liberté des voies aériennes par flexion de la tête",
          "ventilation au masque", // Masque facial simple ou BAVU
          "ventilation aux lunettes d'oxygène"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "La RCP de base comprend la vérification de la réactivité [cite: 561], la libération des voies aériennes (par extension de la tête ou subluxation mandibulaire) [cite: 562], l'alerte, les compressions thoraciques et la ventilation (bouche-à-bouche, bouche-à-masque, BAVU)[cite: 564]."
      },
      {
        questionText: "l'arrêt cardio-circulatoire est :",
        options: [
          "Une interruption brutale de la circulation",
          "Une interruption brutale de la ventilation",
          "Aboutit à une anoxie cérébrale",
          "La mort neuronale survient après une demi-heure en absence de réanimation",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Interruption brutale de la circulation [cite: 572] (et de la ventilation) menant à l'anoxie cérébrale[cite: 574]. La mort neuronale survient en 4-6 minutes sans RCP[cite: 578]."
      },
      {
        questionText: "Les causes de l'arrêt cardio-circulatoire :",
        options: [
          "Etats de choc",
          "Plaie artérielle",
          "Asthme aigue grave",
          "Intoxication médicamenteuse",
          "toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "Toutes ces situations peuvent entraîner un arrêt cardio-circulatoire [cite: 584-588]."
      },
      {
        questionText: "la conduite d'urgence devant un arrêt Cardio-Circulatoire :",
        options: [
          "Alerte médicale précoce",
          "Liberté des voies aériennes supérieures",
          "Ventilation au masque",
          "Administration des corticoïdes",
          "Massage cardiaque externe"
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "La RCP de base comprend l'alerte [cite: 606], la libération des voies aériennes [cite: 607], la ventilation (au masque ou BAVU) [cite: 608] et le massage cardiaque externe[cite: 610]."
      },
      {
        questionText: "les signes cliniques d'un arrêt cardio-circulatoire :",
        options: [
          "perte de conscience",
          "Abolition des mouvements respiratoires",
          "Présence d'un poul radial, carotidien, Fémoral",
          "Mydriase bilatérale réactives",
          "Signe cutanées pâleur, marbrures. Cyanose"
        ],
        correctOptionIndexes: [0, 1, 4], // A, B, E
        explanation: "Inconscience [cite: 617], arrêt respiratoire [cite: 618], absence de pouls [cite: 619], signes cutanés[cite: 621]. La mydriase est aréactive[cite: 620]."
      }
    ]
  },
  // ... Ajout des autres modules ...
    {
    title: "Crises convulsives et épilepsies",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Parmi les impacts de l’épilepsie sur la cavité buccale on note :",
        options: [
          "Traumatisme dentaire",
          "Blessure gingivales",
          "Hypersialorie",
          "Hypoplasie gingivale",
          "Cariosensibilité"
        ],
        correctOptionIndexes: [0, 1, 4], // A, B, E
        explanation: "Pendant une crise, le patient peut se mordre (blessures) ou chuter (traumatismes dentaires)[cite: 3141, 3142]. Certains médicaments antiépileptiques causent une hyposialie (sécheresse buccale) augmentant le risque carieux [cite: 3147, 3145], et d'autres une hyperplasie gingivale[cite: 3148]."
      },
      {
        questionText: "Devant une crise d'épilepsie il faut.:",
        options: [
          "Arrêter les soins",
          "Assurer une oxygénothérapie", // Si cyanose ou détresse respi
          "Donner du valium en intramusculaire", // Plutôt IV ou intrarectal si persiste
          "Mettre le patient en position latérale", // PLS après la crise
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3], // A, D (D après la crise)
        explanation: "Arrêter immédiatement les soins[cite: 3154]. Protéger le patient de se blesser pendant la crise. Mettre en PLS après la fin des convulsions pour maintenir les voies aériennes libres[cite: 3157]."
      },
      {
        questionText: "les impacts des antiépileptiques sur la cavité buccale sont :",
        options: [
          "Hyperplasie gingivale",
          "Hyposialie",
          "cardiosensibilité", // Cariosensibilité
          "Toutes ces réponses sont justes",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [3], // D (A, B, Cariosensibilité sont vrais)
        explanation: "Certains antiépileptiques (ex: phénytoïne) causent une hyperplasie gingivale[cite: 3165]. D'autres peuvent entraîner une hyposialie[cite: 3166], ce qui favorise la carie (cariosensibilité)."
      },
      {
        questionText: "Parmi les étiologies de l'épilepsie :",
        options: [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Accident vasculaire cérébral",
          "Intoxication aux analgésiques",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "L'épilepsie peut être idiopathique ou secondaire à diverses causes : métaboliques (hypoglycémie), structurales (tumeur, AVC, traumatisme), infectieuses, toxiques, etc. [cite: 3176-3178]."
      },
      {
        questionText: "L'épilepsie est une affection neurologique :",
        options: [
          "Due à des spasmes musculaires involontaires",
          "Due à une activité exagérée des neurones",
          "Se manifeste par des crises convulsives répétées",
          "Toutes ces réponses sont fausses",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "L'épilepsie est définie par une prédisposition à générer des crises répétées [cite: 3189], dues à une décharge neuronale excessive et hypersynchrone[cite: 3188]. Les spasmes sont une manifestation possible[cite: 3187]."
      },
      {
        questionText: "la prise en charge d'une convulsion :",
        options: [
          "Une oxygénothérapie", // Si besoin
          "Vérifier la respiration et le poul",
          "Le dosage de la glycémie", // Important pour éliminer hypoglycémie
          "L'administration d'anesthésiques",
          "Assurer la liberté des voies aériennes supérieures"
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "Pendant et après la crise : assurer la liberté des voies aériennes [cite: 3202], vérifier les signes vitaux (respiration, pouls) [cite: 3199], administrer de l'oxygène si nécessaire [cite: 3198], et rechercher une cause (glycémie capillaire)[cite: 3200]."
      },
      {
        questionText: "Devant une crise d'épilepsie :",
        options: [
          "Arrêter les soins",
          "Continuer les soins",
          "Vérifier la respiration et le poul carotidien", // Après la crise
          "Oxygénothérapie", // Si besoin
          "Empêcher les mouvements du patient" // Non, protéger seulement
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "Arrêter les soins[cite: 3209]. Ne pas entraver les mouvements mais protéger le patient. Surveiller les fonctions vitales [cite: 3211] et oxygéner si besoin[cite: 3212]."
      },
      {
        questionText: "les étiologies des crises convulsives sont :",
        options: [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Prise d'alcool", // Sevrage ou intoxication
          "Accident vasculaire cérébrale",
          "Injection de Valium en intramusculaire" // Valium traite les convulsions
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "De nombreuses causes peuvent déclencher des convulsions : métaboliques (hypoglycémie), neurologiques (tumeur, AVC), toxiques (alcool), etc. [cite: 3219-3222]."
      },
      {
        questionText: "L'épilepsie est :",
        options: [
          "Affection neurologique de survenue brutale", // Les crises sont brutales
          "Spasme musculaire involontaire", // Une manifestation possible
          "Des crises convulsives répétées", // Définition de la maladie épileptique
          "Perte de connaissance", // Fréquent pendant les crises généralisées
          "Correspond à des crises de syncope répétées." // Non, mécanisme différent
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "L'épilepsie se caractérise par la répétition de crises [cite: 3232], souvent brutales [cite: 3230] et accompagnées de perte de connaissance[cite: 3233]. Les spasmes sont une forme de crise[cite: 3231]."
      },
      {
        questionText: "la conduite d'urgence devant une épilepsie :",
        options: [
          "Arrêter les soins",
          "Mettre le patient en position latérale de sécurité", // Après la crise
          "Oxygénothérapie", // Si besoin
          "Essayer d'empêcher les mouvements du patient",
          "Administration d'un antalgique"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Arrêt des soins [cite: 3252], protection du patient, PLS post-critique [cite: 3253], oxygénothérapie si cyanose[cite: 3254]."
      }
    ]
  },
   {
    title: "Accident d’ ingestion et d’ inhalation",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Dans la manœuvre d'HEMLISCH en cas d' ingestion corps étranger:",
        options: [
          "Le praticien doit se placer devant le patient",
          "La pression se fait au niveau du thorax",
          "Les deux mains doivent être placés sur l'épigastre",
          "Le praticien exerce une pression du haut vers le bas car c'est une ingestion",
          "Elle ne s'applique pas chez le nourrisson de moins un an."
        ],
        correctOptionIndexes: [2, 4], // C, E. Note: Heimlich est pour l'OBSTRUCTION (inhalation), pas l'ingestion.
        explanation: "La manœuvre de Heimlich (compressions abdominales) est pour l'obstruction des voies aériennes (inhalation). Le sauveteur se place derrière [cite: 3269], les mains sur l'épigastre [cite: 3265], et pousse vers le haut et l'intérieur[cite: 3269]. Des manœuvres spécifiques existent pour le nourrisson[cite: 3267]."
      },
      {
        questionText: "La pathogénie de l'inhalation en médecine dentaire s'explique par :",
        options: [
          "la petitesse des instruments utilisés en dentisterie",
          "La position allongé du patient",
          "La sédation protège contre l'inhalation",
          "La sédation favorise l'inhalation",
          "La pathogénie de l'inhalation n'est pas encore connue"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Plusieurs facteurs favorisent l'inhalation : petits instruments [cite: 3275], position allongée [cite: 3276], et diminution des réflexes protecteurs due à l'anesthésie locale ou la sédation[cite: 3278, 3281]."
      },
      {
        questionText: "Devant une inhalation:",
        options: [
          "Faire la manœuvre d' HEIMLISCH", // Si obstruction complète
          "Retirer l'objet avec une pince", // Si visible et accessible
          "Eviter de faire tousser le patient", // Non, encourager la toux si efficace
          "Oxygénothérapie a faible débit",
          "Donner une forte tape dans le dos" // Si obstruction partielle
        ],
        correctOptionIndexes: [0, 4], // A, E (dépend si obstruction partielle ou totale)
        explanation: "Si obstruction partielle avec toux efficace, encourager la toux et donner des tapes dans le dos[cite: 3291]. Si obstruction complète (pas de toux, cyanose), manœuvre de Heimlich[cite: 3287]."
      },
      {
        questionText: "la conduite d'urgence devant une inhalation :",
        options: [
          "Manœuvre de HEIMLISCH", // Si obstruction totale
          "Retrait de l'objet avec une pince", // Si visible
          "Faire tousser le patient", // Si obstruction partielle
          "Oxygénothérapie à faible débit",
          "Donner une forte tape dans le dos" // Si obstruction partielle
        ],
        correctOptionIndexes: [0, 2, 4], // A, C, E (selon le cas)
        explanation: "Encourager la toux [cite: 3300] et tapes dorsales [cite: 3302] si obstruction partielle. Manœuvre de Heimlich si obstruction totale[cite: 3298]. Une fibroscopie peut être nécessaire[cite: 3305]."
      },
      {
        questionText: "La conduite d'urgence devant l'inhalation d'un corps étranger :",
        options: [
          "Faire une endoscopie systématiquement",
          "Pratiquer la manœuvre de HEMLISCH", // Si obstruction totale
          "Une oxygénothérapie à haut débit", // Si détresse respi
          "Faire tousser le patient", // Si obstruction partielle
          "Antibiothérapie a large spectre"
        ],
        correctOptionIndexes: [1, 2, 3], // B, C, D (selon le cas)
        explanation: "La conduite dépend de la sévérité : encourager la toux [cite: 3320], tapes dorsales [cite: 3321], Heimlich [cite: 3321], oxygénothérapie si besoin [cite: 3322], et alerte médicale[cite: 3323]."
      },
      {
        questionText: "l'accident d'inhalation est du :",
        options: [
          "Position allongé du patient",
          "Petitesse de l'instrumentation utilisé en dentisterie",
          "Diminution des réflexes de protection des voies aériennes supérieures par la sédation",
          "Proximité des voies aériennes et de la zone du praticien",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "Tous ces facteurs contribuent au risque d'inhalation accidentelle au cabinet dentaire [cite: 3329-3332]."
      },
       {
        questionText: "La conduite d’urgence devant l’inhalation d’un corps étranger:",
        options: [
          "Oxygénothérapie", // Si détresse
          "Manœuvre de HEMLISCH", // Si obstruction totale
          "Bronchoscopie si nécessaire", // Pour extraction
          "Antibiothérapie", // Si infection secondaire
          "Adrénaline à 1 mg en intraveineux"
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D (selon le stade et complications)
        explanation: "Gestes immédiats : Heimlich si obstruction totale[cite: 4692]. Puis oxygénothérapie si besoin[cite: 4691]. Extraction par bronchoscopie si l'objet reste bloqué[cite: 4693]. Antibiothérapie si risque d'infection[cite: 4694]."
      },
      {
        questionText: "Les complications de l'inhalation sont :",
        options: [
          "Détresse respiratoire aigue",
          "Troubles de la conscience", // Dû à l'hypoxie
          "Abcès pulmonaire", // Infection secondaire
          "Une bradycardie", // Possible si hypoxie sévère
          "Une hypoglycémie"
        ],
        correctOptionIndexes: [0, 2], // A, C (Les plus directes)
        explanation: "L'inhalation peut causer une obstruction immédiate (détresse respiratoire) [cite: 4701] ou des complications infectieuses tardives (pneumonie, abcès pulmonaire)[cite: 4703, 4707]."
      },
      {
        questionText: "conduite à tenir devant une inhalation :",
        options: [
          "Manœuvre de HEMLISCH", // Si obstruction totale
          "Retirer l’objet avec une pince", // Si visible
          "Faire une tape sur le dos", // Si obstruction partielle
          "Oxygénothérapie à haut débit", // Si détresse
          "Oxygénothérapie à faible débit"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D (selon le cas)
        explanation: "Tapes dorsales si toux efficace[cite: 4715]. Heimlich si obstruction complète[cite: 4713]. Oxygénothérapie à haut débit si détresse respiratoire[cite: 4716]."
      },
      {
        questionText: "devant l’ingestion d’un corps étranger :",
        options: [
          "Assurer la ventilation du patient", // Vérifier qu'il ne s'agit pas d'une inhalation
          "Faire radiographie pour localiser le corps étranger", // Si symptomatique ou objet dangereux
          "Faire une manœuvre de HEMLISCH", // Non, pour inhalation
          "Restaurer un régime pauvre en fibres", // Non, riche en fibres
          "Prescription d’antibiotiques et d’anti-inflammatoires" // Non, sauf complication
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Assurer la ventilation pour exclure une inhalation[cite: 4731]. Une radiographie peut être nécessaire pour localiser l'objet[cite: 4732]. Surveillance et régime riche en fibres sont recommandés pour favoriser l'élimination naturelle[cite: 4734]."
      },
      {
        questionText: "les complications de l’inhalation sont :",
        options: [
          "Abcès pulmonaire",
          "Hypertension artérielle",
          "Objet bloqué dans l’appareil respiratoire",
          "Détresse respiratoire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "Obstruction des voies aériennes [cite: 4742], détresse respiratoire [cite: 4743], et complications infectieuses comme l'abcès pulmonaire[cite: 4740]."
      }
    ]
  },
  {
    title: "Détresse neurologique",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Le choc vagal:", // Malaise vagal
        options: [
          "Est une activité excessive du système parasympathique",
          "Est une activité excessive du système sympathique",
          "S’exprime par une bradycardie",
          "S’exprime par une tachycardie",
          "S’exprime par une perte de connaissance"
        ],
        correctOptionIndexes: [0, 2, 4], // A, C, E
        explanation: "Le malaise vagal résulte d'une hyperactivité parasympathique [cite: 4212] ou d'une hypoactivité sympathique [cite: 4218], entraînant bradycardie [cite: 4214, 4219], hypotension et potentiellement une perte de connaissance (lipothymie ou syncope)[cite: 4216]."
      },
      {
        questionText: "Les facteurs déclenchant d’un malaise hypoglycémique:", // Question mélange hypoglycémie et vagal? Titre dit neuro, mais option D est hypogly.
        options: [
          "Stress", // Déclencheur vagal ou hyperglycémie
          "Atteinte hépatique", // Hypoglycémie
          "Insuffisance cardiaque",
          "Surdosage en antidiabétiques", // Hypoglycémie
          "Surdosage en anesthésiques locaux" // Toxicité neuro/cardio
        ],
        correctOptionIndexes: [1, 3], // B, D (causes d'hypoglycémie)
        explanation: "L'hypoglycémie peut être due à un surdosage en antidiabétiques [cite: 4228, 4232], un jeûne [cite: 4231], une atteinte hépatique [cite: 4226, 4231], etc. Le stress [cite: 4225, 4231] est plutôt un facteur déclenchant de malaise vagal."
      },
      {
        questionText: "LE MALAISE vagal est du :",
        options: [
          "Activité excessive du sympathique",
          "Activité excessive du parasympathique",
          "Hypoglycémie",
          "Douleur aigue", // Déclencheur
          "Atmosphère surchauffée" // Déclencheur
        ],
        correctOptionIndexes: [1, 3, 4], // B, D, E (B=mécanisme, D/E=déclencheurs)
        explanation: "Le mécanisme est une hyperactivité parasympathique[cite: 4239, 4244]. Les déclencheurs fréquents incluent la douleur [cite: 4241], le stress, la chaleur[cite: 4242], la vue du sang, etc."
      },
      {
        questionText: "Devant un malaise vagal",
        options: [
          "Surveiller la respiration et la circulation",
          "Ne jamais interrompre les soins",
          "Surélever les jambes",
          "Allonger le patient en décubitus dorsal",
          "Injecter 1 mg d’adrénaline"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "Arrêter les soins, allonger le patient [cite: 4253], surélever les jambes pour améliorer le retour veineux cérébral [cite: 4252], et surveiller les signes vitaux[cite: 4250]."
      },
      {
        questionText: "La syncope:",
        options: [
          "Est une perte de connaissance brève",
          "Est suivie d'un retour spontané de conscience",
          "Résulte d’une augmentation du débit sanguin cérébral", // Diminution
          "Perte transitoire du tonus postural",
          "Peut être reflexe vaso-vagale" // réflexe
        ],
        correctOptionIndexes: [0, 1, 3, 4], // A, B, D, E
        explanation: "La syncope est une perte de connaissance brève [cite: 4261], complète, avec perte du tonus postural [cite: 4264], due à une hypoperfusion cérébrale globale transitoire [cite: 4285], et suivie d'une récupération spontanée[cite: 4262]. La syncope vasovagale est la plus fréquente[cite: 4273]."
      },
      {
        questionText: "a syncope Non cardiaque :", // La
        options: [
          "Survient en station debout prolongée", // Typique vasovagale
          "après phase prodromique", // Typique vasovagale
          "Survient sans phase prodromique", // Possible (ex: HTO)
          "Reprise de conscience sur place", // Typique syncope
          "Reprise de conscience quelques heures" // Non, récupération rapide
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D (caractéristiques fréquentes des syncopes non cardiaques type vasovagal)
        explanation: "Les syncopes non cardiaques, notamment vasovagales, surviennent souvent en position debout prolongée [cite: 4278], sont précédées de prodromes (sueurs, nausées...) [cite: 4279], et la récupération est rapide une fois allongé[cite: 4281]."
      },
      {
        questionText: "Le malaise vagal est du à :",
        options: [
          "Activité excessive du système parasympathique",
          "Inhibition du système sympathique", // Baisse de l'activité sympathique
          "Bradycardie", // Conséquence
          "Hypertension artérielle", // Hypotension
          "Hypotension" // Conséquence
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "Hyperactivité parasympathique [cite: 4291] et/ou baisse de l'activité sympathique [cite: 4292], entraînant bradycardie [cite: 4293] et hypotension[cite: 4295]."
      },
      {
        questionText: "La conduite d'urgence devant un malaise vagal :",
        options: [
          "Interrompre les soins",
          "Allonger le patient les jambes surélevées",
          "Adrénaline en intraveineux", // Non, sauf si arrêt
          "hémisuccinate d'hydrocortisone", // Non
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Arrêt des soins [cite: 4302], position allongée avec jambes surélevées[cite: 4303]."
      },
      {
        questionText: "Le malaise vagale est due à :", // vagal
        options: [
          "Activité basse du système parasympathique",
          "Activité excessive du système sympathique",
          "Accélération du rythme cardiaque", // Ralentissement
          "Elévation de la pression artérielle", // Chute
          "Perte de connaissance : lipothymie ou syncope" // Conséquence
        ],
        correctOptionIndexes: [4], // E
        explanation: "Le malaise vagal résulte d'une hyperactivité parasympathique ou hypoactivité sympathique, causant bradycardie et hypotension [cite: 4319], pouvant mener à une perte de connaissance partielle (lipothymie) ou totale (syncope)[cite: 4317, 4320]."
      },
      {
        questionText: "conduite d'urgence devant un malaise hypoglycémique :",
        options: [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée", // Si conscient
          "Vérifier la vacuité des voies aériennes supérieures", // Si inconscient
          "Injection d'Insuline", // Aggraverait
          "Injection Intraveineuse lente de sérum salé" // Sérum glucosé
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Si patient conscient : position confortable [cite: 4326], administration de sucre oral (boisson, sucre)[cite: 4327]. Si inconscient : PLS, vérifier voies aériennes [cite: 4328], injection de glucagon IM ou glucosé IV[cite: 4332]."
      },
      {
        questionText: "LE malaise vagal est du à :",
        options: [
          "Activité excessive du système parasympathique",
          "Activité excessive du système sympathique",
          "Ralentissement du rythme cardiaque", // Conséquence
          "Élévation de la pression artérielle",
          "Perte de connaissance partielle : lipothymie ou totale syncope." // Conséquence
        ],
        correctOptionIndexes: [0, 2, 4], // A, C, E
        explanation: "Hyperactivité parasympathique [cite: 4338] causant bradycardie [cite: 4340] et potentiellement lipothymie/syncope[cite: 4342]."
      },
      {
        questionText: "la conduite d'urgence devant un malaise vagal :",
        options: [
          "Interrompre les soins",
          "Allonger le patient les jambes surélevées",
          "Surveiller la respiration et la circulation",
          "Adrénaline en intraveineux",
          "Corticoïdes en intraveineux"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Arrêt des soins [cite: 4349], position de Trendelenburg (allongé jambes surélevées) [cite: 4350], surveillance des signes vitaux[cite: 4351]."
      },
      {
        questionText: "la conduite d'urgence devant un malaise hypoglycémique :",
        options: [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée", // Si conscient
          "Vérifier la vacuité des voies aériennes supérieures", // Si inconscient
          "injection d'insuline",
          "Injection intraveineuse lente de sérum glucose" // Oui, si inconscient et voie veineuse dispo
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "Position de confort[cite: 4360]. Sucre oral si conscient[cite: 4361]. Vérifier voies aériennes si inconscient[cite: 4362]. Injection de sérum glucosé IV si inconscient[cite: 4364]."
      },
      {
        questionText: "le terme syncope :",
        options: [
          "Perte de connaissance à début rapide et durée rapide et transitoire",
          "Associe une rigidité", // Possible mais pas définition
          "Résulte d'un arrêt bref du débit sanguin cérébral",
          "Associe un trouble visuel", // Possible prodrome
          "N’est jamais précédé de prodromes" // Souvent précédé (malaise vagal)
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Perte de connaissance brève et transitoire [cite: 4371] due à une hypoperfusion cérébrale globale[cite: 4373]."
      }
    ]
  },
   {
    title: "Hémorragie au cabinet dentaire",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Devant une hémorragie dentaire :",
        options: [
          "Faire une compression pendant quelques secondes.",
          "Hémostase locale",
          "Bilan d'hémostase", // Si non contrôlée ou suspicion trouble
          "Faire plusieurs bains de bouche",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2], // B, C
        explanation: "La priorité est l'hémostase locale par compression prolongée (au moins 10 min)[cite: 1822, 1828]. Un bilan d'hémostase est indiqué si le saignement est anormal ou si un trouble est suspecté[cite: 1824]. Les bains de bouche sont à éviter initialement[cite: 1829]."
      },
      {
        questionText: "Les complications de L'inhalation sont:",
        options: [
          "Abcès pulmonaire",
          "Pneumonie",
          "Objet bloqué dans l'appareil respiratoire",
          "Détresse respiratoire",
          "Toutes ces réponses sont juste" // justes
        ],
        correctOptionIndexes: [4], // E
        explanation: "L'inhalation peut causer une obstruction aiguë (détresse respiratoire) [cite: 1838], rester bloquée [cite: 1837], ou entraîner des complications infectieuses pulmonaires (pneumonie, abcès)[cite: 1835, 1836]."
      },
      {
        questionText: "Parmi ces actes à risque lesquels sont hémorragique :",
        options: [
          "Avulsion en zone inflammatoire",
          "Chirurgie parodontale",
          "Implants multiples",
          "Chirurgie apicale lésion < 0,5 cms",
          "Greffe gingival" // gingivale
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "Les actes chirurgicaux étendus (avulsions multiples ou en zone inflammatoire, chirurgie parodontale, implants multiples, greffes) présentent un risque hémorragique plus élevé qu'une chirurgie apicale mineure [cite: 1846-1848, 1850]. Chirurgie apicale à risque si lésion > 2cm[cite: 1852]."
      },
      {
        questionText: "les actes à risque hémorragiques:",
        options: [
          "Avulsion de plus de 3 dents",
          "Avulsion en zone inflammatoire",
          "Enucléation kystique",
          "Chirurgie parodontale",
          "Toutes ces réponses sont fausses" // Toutes sont justes
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Tous ces actes chirurgicaux sont considérés comme présentant un risque hémorragique notable [cite: 1858-1861]."
      },
      {
        questionText: "Le bilan d’hémostase devant hémorragie dentaire:",
        options: [
          "Numération formule sanguine", // Pour plaquettes
          "Urée -créatinémie",
          "Taux de prothrombine", // TP/INR
          "Glycémie à jeun",
          "Dosage de la vitamine B1B6"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Un bilan standard d'hémostase comprend la NFS (numération plaquettaire), le TP/INR (voie extrinsèque) et le TCA (voie intrinsèque)[cite: 1869, 1871]."
      },
      {
        questionText: "Parmi les actes à risque hémorragique:",
        options: [
          "Avulsion en zone inflammatoire",
          "Greffe gingivale",
          "Implants multiples",
          "Chirurgie d'une lithiase salivaire", // Dépend localisation/taille
          "Extraction dentaire" // Simple extraction = risque faible
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C (E faible risque, D variable)
        explanation: "L'avulsion simple présente un faible risque[cite: 1884]. Les avulsions multiples/complexes [cite: 1886], en zone inflammatoire [cite: 1880], les greffes [cite: 1881] et la pose d'implants multiples [cite: 1882] sont à risque plus élevé."
      },
      {
        questionText: "Devant une hémorragie dentaire faire :",
        options: [
          "taux de prothrombine", // Bilan si besoin
          "Refaire une anesthésie locale sans vasoconstricteur si nécessaire", // Avec vasoconstricteur
          "Nettoyer l' alvéole avec du surgicel", // Après nettoyage/compression
          "Extraire l'apex résiduel", // Si c'est la cause
          "Faire une compression pendant 2 minutes" // Minimum 10-20 min
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D (actions possibles selon la cause et sévérité)
        explanation: "La prise en charge inclut : compression prolongée (20 min) [cite: 1900], nettoyage de l'alvéole, anesthésie AVEC vasoconstricteur si besoin [cite: 1899], application d'hémostatique local (Surgicel) [cite: 1895], suture, recherche de cause locale (apex résiduel [cite: 1896]), et bilan si nécessaire[cite: 1893]."
      },
      {
        questionText: "Devant une hémorragie dentaire :", // Identique Q15
        options: [
          "Faire une compression pendant quelques secondes",
          "Hémostase locale",
          "Bilan d’hémostase",
          "Faire plusieurs bain de bouche",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2], // B, C
        explanation: "Hémostase locale par compression prolongée[cite: 1907]. Bilan d'hémostase si indiqué[cite: 1908]."
      },
      {
        questionText: "Devant une hémorragie dentaire Il faut :",
        options: [
          "Cureter une lésion apicale si elle existe", // Possible cause
          "Bilan d’hémostase : TP-INR-TCA-et une FNS", // Si indiqué
          "Hémostatique local type Surgicel", // Moyen d'hémostase
          "Anesthésie locale avec vasoconstricteur", // Aide à l'hémostase
          "Faire plusieurs bains de bouche" // Non
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "La CAT comprend l'identification et le traitement de la cause (lésion apicale [cite: 1918]), des mesures d'hémostase locale (compression, anesthésie avec VC [cite: 1921], Surgicel [cite: 1920]), et un bilan si nécessaire[cite: 1919]."
      },
      {
        questionText: "Parmi les étiologies de l'hémorragie au cabinet dentaire une seule est fausse :",
        options: [
          "intervention en présence d'une inflammation",
          "Insuffisance hépatique", // Cause générale
          "Fracture avéolaire", // Cause locale
          "Anémies et thrombopathies", // Cause générale
          "Carence en vitamine K" // Cause générale
        ],
        correctOptionIndexes: [1], // Le doc source indique B. Toutes les options A, B, C, D, E peuvent causer/favoriser une hémorragie. Question probablement mal formulée.
        explanation: "Toutes ces conditions peuvent être des causes ou facteurs favorisants d'hémorragie : inflammation locale [cite: 1929], fracture [cite: 1931], troubles généraux de l'hémostase (insuffisance hépatique, thrombopathie, carence Vit K)[cite: 1930, 1932, 1933]."
      },
      {
        questionText: "la conduite d'urgence devant une hémorragie dentaire est :",
        options: [
          "Faire une radiographie panoramique dentaire", // Si suspicion cause osseuse
          "Bilan d’hémostase : TP.INR-TCA-FNS.", // Si indiqué
          "Hémostase local type surgicel", // Moyen
          "Faire une compression qui sera maintenue quelques secondes", // Non, prolongée
          "Faire plusieurs bains de bouche" // Non
        ],
        correctOptionIndexes: [1, 2], // B, C (A est conditionnel)
        explanation: "Hémostase locale (Surgicel, suture...)[cite: 1942]. Bilan d'hémostase si nécessaire[cite: 1941]. Compression prolongée (minutes)[cite: 1943]."
      },
      {
        questionText: "L'urgence hémorragique est liée à :",
        options: [
          "L'acte anesthésique", // Rarement, sauf blessure vaisseau
          "L'acte chirurgical", // Cause fréquente
          "La gestion des anticoagulants", // Facteur patient
          "La pathologie dentaire", // Ex: inflammation
          "L'effraction vasculaire" // Mécanisme
        ],
        correctOptionIndexes: [1, 2, 3, 4], // B, C, D, E
        explanation: "L'hémorragie peut être déclenchée par l'acte lui-même (chirurgie, effraction vasculaire) [cite: 1952, 1955], aggravée par une pathologie locale (inflammation) [cite: 1954] ou un état général du patient (anticoagulants)[cite: 1953]."
      },
      {
        questionText: "Parmi les étiologies de l'hémorragie au cabinet dentaire une seule est fausse :",
        options: [
          "intervention en présence d'une inflammation",
          "Insuffisance hépatique",
          "Fracture alvéolaire",
          "Anémies et thrombopathies",
          "Surcharge en vitamine k" // Carence en Vit K cause hémorragie, pas surcharge
        ],
        correctOptionIndexes: [4], // E est faux
        explanation: "Une carence en vitamine K perturbe la coagulation et peut causer des hémorragies[cite: 1933]. Une surcharge n'est pas une cause d'hémorragie[cite: 1966]."
      }
    ]
  },
   {
    title: "Choc anaphylactique",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Les signes cliniques du stade l du choc anaphylactique sont:", // Stade I
        options: [
          "Prurit palmo-plantaire",
          "OEdème de Quincke pharyngé", // Œdème
          "Hypotension", // Stade II/III
          "Tachycardie", // Stade II/III
          "Atteinte multi viscérale" // Stade III/IV
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Le Stade I de l'anaphylaxie se limite aux signes cutanéo-muqueux généralisés : prurit, urticaire, érythème, œdème de Quincke[cite: 1032, 1038]."
      },
      {
        questionText: "Le choc anaphylactique:",
        options: [
          "Urgence diagnostic et thérapeutique",
          "Dé granulation des éosinophiles", // Mastocytes et basophiles
          "Entraine une vasoplégie", // Vasodilatation majeure
          "Entraine une vasodilatation",
          "Traité par adrénaline" // Traitement de choix
        ],
        correctOptionIndexes: [0, 2, 3, 4], // A, C, D, E
        explanation: "C'est une urgence absolue [cite: 1044] due à la dégranulation des mastocytes et basophiles[cite: 1050]. Il provoque une vasodilatation massive (vasoplégie)[cite: 1046, 1047]. Le traitement de première intention est l'adrénaline[cite: 1048]."
      },
      {
        questionText: "La conduite à tenir devant un choc anaphylactique:",
        options: [
          "Assurer la liberté des voies aériennes supérieures et oxygénothérapie",
          "Adrénaline en intraveineux", // IM ou SC en 1ère intention sauf si arrêt/collapsus
          "Remplissage vasculaire par sérum glucosé 10 %", // Cristalloïdes
          "Remplissage vasculaire par cristalloïdes", // Sérum salé ou Ringer Lactate
          "Histamine en intraveineux" // Anti-histaminiques
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "Prise en charge immédiate : arrêt de l'allergène, position adaptée, liberté des voies aériennes, oxygénothérapie [cite: 1057], adrénaline (IM ++), remplissage vasculaire par cristalloïdes[cite: 1060], corticoïdes et anti-histaminiques."
      },
      {
        questionText: "Le choc anaphylactique est :",
        options: [
          "Urgence vitale et thérapeutique",
          "Dégranulation des mastocytes",
          "Dégranulation des éosinophiles",
          "Traité par adrénaline",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Urgence vitale [cite: 1069] due à la dégranulation des mastocytes [cite: 1070] et basophiles. Le traitement essentiel est l'adrénaline[cite: 1072]. Le traitement dépend du stade[cite: 1075]."
      },
      {
        questionText: "Le choc anaphylactique nécessite :",
        options: [
          "un traitement par adrénaline",
          "Antihistaminiques", // En complément
          "Corticoïdes", // En complément, action retardée
          "massage cardiaque externe", // Si arrêt cardiaque
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Le traitement de base est l'adrénaline[cite: 1092]. Les antihistaminiques [cite: 1093] et les corticoïdes [cite: 1094] sont des traitements adjuvants."
      },
      {
        questionText: "Au cours du choc anaphylactique on observe :",
        options: [
          "Prurit palmo -plantaire", // Stade I
          "Exanthème", // Stade I
          "œdème de Quincke", // Stade I
          "Atteints multi-Viscérale", // Stade III/IV
          "Toutes ces réponses sont fausses" // Toutes sont possibles selon stade
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Les signes cliniques varient selon le stade : cutanéo-muqueux (prurit, érythème, œdème) au stade I [cite: 1103-1105], puis respiratoires, cardiovasculaires et multiviscéraux aux stades avancés[cite: 1106]."
      },
      {
        questionText: "Le choc anaphylactique est :",
        options: [
          "Une urgence vitale et diagnostique",
          "due à une dégranulation des mastocytes",
          "Secondaire à une réaction allergique", // Le plus souvent IgE-dépendant
          "Lié à une vasoplégie",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "Urgence vitale [cite: 1114], due à la dégranulation mastocytaire [cite: 1115] souvent déclenchée par une réaction allergique [cite: 1116], entraînant une vasoplégie majeure[cite: 1117]."
      },
      {
        questionText: "le choc anaphylactique est :",
        options: [
          "Etat de choc par pénétration d'allergènes", // Oui
          "Etat de choc par pénétration d'haptènes", // Oui, après couplage
          "Dû à la dégranulation des mastocytes",
          "Dû à la dégranulation des polynucléaires basophiles",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D (B est un cas particulier d'allergène)
        explanation: "Déclenché par un allergène [cite: 1125] (parfois un haptène couplé [cite: 1126]), il résulte de la libération massive de médiateurs par les mastocytes [cite: 1127] et les basophiles[cite: 1128]."
      },
      {
        questionText: "L'anaphylaxie est :",
        options: [
          "Une Réaction allergique sévère",
          "Difficulté respiratoire", // Un symptôme possible
          "Choc anaphylactique", // Le stade le plus grave de l'anaphylaxie
          "Du à une hypo volémie", // Choc hypovolémique est différent
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "L'anaphylaxie est une réaction allergique systémique sévère[cite: 1136]. Le choc anaphylactique en est la forme la plus grave avec défaillance circulatoire[cite: 1138]."
      },
      {
        questionText: "L'état de choc est :",
        options: [
          "Souffrance cellulaire", // Conséquence
          "Défaut de perfusion tissulaire", // Mécanisme central
          "Chute importante de la pression artérielle", // Signe fréquent mais pas définition
          "Défaut de production d'ATP", // Conséquence cellulaire
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "L'état de choc est une insuffisance circulatoire aiguë entraînant une hypoperfusion tissulaire [cite: 1148], responsable d'une souffrance cellulaire [cite: 1147] par manque d'oxygène et défaut de production d'énergie (ATP)[cite: 1150]. La chute de PA est un signe[cite: 1149]."
      },
      {
        questionText: "Le choc anaphylactique est :", // Répétition
        options: [
          "Urgence vital, diagnostique et thérapeutique",
          "dégranulation des mastocytes et polynucléaires basophiles",
          "Associe des signes cutanés et atteinte multi viscérale", // Oui, selon stade
          "Nécessite un traitement par antihistaminique", // Adjuvant
          "Nécessite un traitement par Adrénaline" // Principal
        ],
        correctOptionIndexes: [0, 1, 2, 4], // A, B, C, E
        explanation: "Urgence [cite: 1158], dégranulation mastocytaire/basophile [cite: 1159], signes cliniques variables selon la gravité[cite: 1160]. Traitement principal : adrénaline[cite: 1162]. Antihistaminiques en complément[cite: 1161]."
      }
    ]
  },
  {
    title: "Détresse respiratoire aigue",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Le diagnostic clinique de crise d' Asthme",
        options: [
          "Accès de dyspnée de type expiratoire",
          "Toux sèche et pénible",
          "Des râles sibilants à l'auscultation",
          "Des râles crépitants à l'auscultation",
          "Un tirage sus sternal et intercostal" // Signe de gravité
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "La crise d'asthme typique se manifeste par une dyspnée sifflante à prédominance expiratoire [cite: 2514, 2520], une toux sèche [cite: 2515], et des sibilants à l'auscultation[cite: 2516]."
      },
      {
        questionText: "Le traitement d'une crise d' asthme sévère repose sur :",
        options: [
          "Oxygénothérapie au débit de 1 L/mn", // Haut débit
          "Hémisuccinate d'hydrocortisone 100 mg en IV", // Oui
          "Bricanyl en IVX", // Bricanyl (terbutaline) SC ou IV
          "Position décubitus dorsal stricte", // Position assise/demi-assise
          "Adrénaline 3 mg en aérosol" // Possible mais Salbutamol en 1ère ligne
        ],
        correctOptionIndexes: [1, 2], // B, C (Bricanyl IV ou SC)
        explanation: "Traitement de la crise sévère : Oxygénothérapie à haut débit (10-15 L/min) [cite: 2532], bronchodilatateurs inhalés (Salbutamol) ou injectables (Terbutaline [cite: 2528], Adrénaline), corticoïdes IV (Hydrocortisone [cite: 2527]). Position assise[cite: 2569]."
      },
      {
        questionText: "Le malaise vagal est :",
        options: [
          "Trouble de la conscience régressif", // Oui (lipothymie/syncope)
          "lié à l'augmentation de l'activité sympathique",
          "lié à l'augmentation de l'activité parasympathique",
          "Lié à la baisse de l'activité parasympathique",
          "la douleur aigue est l'un de ses facteurs déclenchants"
        ],
        correctOptionIndexes: [0, 2, 4], // A, C, E
        explanation: "Malaise bref avec altération de la conscience [cite: 2538], dû à une hyperactivité parasympathique [cite: 2540, 2545] ou hypoactivité sympathique [cite: 2546], souvent déclenché par la douleur, le stress, etc.[cite: 2542]."
      },
      {
        questionText: "Parmi les étiologies de détresse respiratoire:",
        options: [
          "Inhalation d’un corps étranger",
          "Accident d’ingestion de corps étranger",
          "L’hypocapnie", // Conséquence hyperventilation, pas cause de détresse
          "Œdème de Quincke", // Obstruction VAS
          "Alcalose métabolique"
        ],
        correctOptionIndexes: [0, 3], // A, D
        explanation: "Causes fréquentes de détresse respiratoire aiguë : obstruction des voies aériennes (corps étranger [cite: 2552, 2560], œdème de Quincke [cite: 2555]), asthme [cite: 2559], pneumonie [cite: 2558], embolie pulmonaire [cite: 2561], pneumothorax [cite: 2562], causes cardiaques[cite: 2563]."
      },
      {
        questionText: "la conduite d’urgence devant une crise d’asthme:",
        options: [
          "La position assise",
          "Oxygène à faible débit", // Haut débit
          "Ventoline en bouffées", // Bêta-2 mimétique inhalé
          "Corticoïdes en IV", // Si sévère ou pas d'amélioration rapide
          "Mise en place d’une canule de GUEDEL" // Non indiqué sauf si inconscience/arrêt
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "Position assise[cite: 2569]. Oxygène à haut débit[cite: 2575]. Bronchodilatateur inhalé (Ventoline/Salbutamol)[cite: 2571]. Corticoïdes IV si crise sévère[cite: 2572]."
      },
      {
        questionText: "La dyspnée est:",
        options: [
          "Urgence respiratoire", // Symptôme d'une urgence potentielle
          "Polypnée ou Bradypnée", // Peut être l'un ou l'autre
          "Toujours inspiratoire",
          "Relâchement des muscles abdominaux", // Contracture
          "N’as pas de retentissement sur la pression artérielle" // Peut avoir retentissement hémodynamique
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "La dyspnée est une gêne respiratoire subjective [cite: 2581], pouvant être une urgence[cite: 2581]. Elle peut se manifester par une accélération (polypnée) ou un ralentissement (bradypnée) de la fréquence respiratoire[cite: 2582]. Elle peut être inspiratoire, expiratoire ou aux deux temps[cite: 2587]. Des signes de lutte (tirage, contracture abdo) et un retentissement hémodynamique sont possibles[cite: 2588, 2589]."
      },
       {
        questionText: "la dyspnée :", // Similaire à Q27
        options: [
          "Une géne respiratoire", // gène
          "Survient à l’effort ou au repos",
          "Peut être inspiratoire ou expiratoire",
          "Soit une polypnée ou une bradypnée",
          "Est toujours inspiratoire"
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "Gêne respiratoire subjective [cite: 2595], survenant au repos ou à l'effort [cite: 2596], pouvant être rapide ou lente [cite: 2598], à l'inspiration, l'expiration ou les deux[cite: 2597]."
      },
      {
        questionText: "La prise en charge d' une crise d'asthme:",
        options: [
          "Malade en position demi assise", // Oui
          "Ventoline en bouffées", // Oui
          "Amoxicilline en intraveineux", // Non, sauf si infection associée
          "Atropine en sous cutané", // Non (plutôt anticholinergique inhalé type ipratropium)
          "Mise en place d'une canule de GUEDEL" // Non sauf si inconscience
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Position demi-assise[cite: 2606]. Bronchodilatateur bêta-2 mimétique inhalé (Ventoline)[cite: 2607]. Corticoïdes si besoin[cite: 2612]."
      },
       {
        questionText: "la dyspnée :", // Similaire Q27, Q56
        options: [
          "Simple gêne respiratoire",
          "Survient au repos ou à l’effort",
          "Soit polypnée ou bradypnée",
          "Est toujours inspiratoire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Gêne respiratoire [cite: 2619], au repos ou effort [cite: 2620], rapide ou lente[cite: 2621]. Peut être inspi, expi ou les deux[cite: 2626]."
      },
      {
        questionText: "la crise d’asthme :",
        options: [
          "Respiration sifflante",
          "D’origine allergique", // Souvent mais pas toujours
          "Ne s’accompagne jamais d’agitation", // Faux
          "Dyspnée expiratoire", // Typiquement
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Caractérisée par une dyspnée expiratoire [cite: 2635, 2639] avec sifflements[cite: 2632]. Souvent d'origine allergique[cite: 2633]. Peut s'accompagner d'agitation, cyanose, sueurs[cite: 2638]."
      },
      {
        questionText: "la conduite à tenir devant une détresse respiratoire :",
        options: [
          "Assurer la liberté des voies aériennes supérieures",
          "Injecter 1 mg d’adrénaline en IV", // Non systématique
          "Oxygénothérapie", // Oui, haut débit
          "Position latérale de sécurité", // Si inconscient SANS détresse respi avérée
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2], // A, C
        explanation: "Priorité : libérer les voies aériennes [cite: 2645], administrer de l'oxygène[cite: 2647], position adaptée (souvent assise), identifier et traiter la cause."
      },
      {
        questionText: "les étiologies des détresses ventilatoires :", // respiratoires
        options: [
          "Pneumothorax",
          "Hypercapnie", // Conséquence, pas cause primaire
          "L'asthme aigu grave",
          "L'œdème Quincke",
          "Toutes ces réponses sont justes" // A, C, D sont des causes
        ],
        correctOptionIndexes: [4], // E (car A, C, D sont justes)
        explanation: "Asthme aigu grave [cite: 2683], obstruction des voies aériennes (œdème de Quincke [cite: 2684]), pneumothorax[cite: 2681], embolie pulmonaire, etc., peuvent causer une détresse respiratoire."
      },
      {
        questionText: "Les signes cliniques d'une crise d’asthme :",
        options: [
          "Gêne respiratoire",
          "Sensation de soif d'air",
          "Dyspnée à l'inspiration", // Expiratoire ++
          "Cyanose des extrémités", // Signe de gravité
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Gêne respiratoire [cite: 2692], sensation d'étouffement ('soif d'air')[cite: 2693]. La dyspnée est principalement expiratoire[cite: 2699]. La cyanose est un signe de gravité[cite: 2695]."
      },
      {
        questionText: "la prise en charge d'urgence d'une crise d’asthme :",
        options: [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux", // Si sévère
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit", // Haut débit
          "Mise en place d'une canule de Guedel" // Non
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Position assise [cite: 2705], Ventoline inhalée [cite: 2707], Corticoïdes IV si sévère[cite: 2706]. Oxygène à haut débit[cite: 2711]."
      },
      {
        questionText: "Devant une détresse respiratoire :",
        options: [
          "Vérifier les mouvements respiratoires",
          "Calculer la fréquence respiratoire",
          "Rechercher une cyanose des extrémités",
          "Rechercher un tirage et une contracture des muscles accessoires",
          "Palper le poul carotidien." // Evaluation circulatoire
        ],
        correctOptionIndexes: [0, 1, 2, 3], // A, B, C, D
        explanation: "L'évaluation respiratoire inclut l'observation des mouvements [cite: 2717], la mesure de la fréquence [cite: 2718], la recherche de signes de lutte (tirage, mise en jeu des muscles accessoires [cite: 2720, 2723]) et de signes d'hypoxie (cyanose [cite: 2719])."
      },
      {
        questionText: "l'hyperventilation est due à",
        options: [
          "Angoisse",
          "Douleur",
          "L'hypercapnie", // Stimule la ventilation
          "L'acidose métabolique", // Compensation respiratoire
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4], // E
        explanation: "L'hyperventilation peut être psychogène (angoisse [cite: 2729]), réactionnelle à la douleur [cite: 2730], ou compensatoire à une hypercapnie [cite: 2731] ou une acidose métabolique[cite: 2732]."
      },
      {
        questionText: "la dyspnée est :", // Similaire Q27, 56, 64
        options: [
          "Perception consciente d'une gêne respiratoire",
          "peut-être inspiratoire ou expiratoire ou au deux temps",
          "Le diagnostic repose sur la radiographie pulmonaire", // Non, clinique
          "Soit une bradypnée soit une polypnée",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Gêne respiratoire consciente [cite: 2740], peut être rapide ou lente [cite: 2743], inspiratoire/expiratoire/mixte[cite: 2741]. Diagnostic clinique[cite: 2661]."
      },
      {
        questionText: "La crise d'asthme est :",
        options: [
          "Accès de dyspnée intense",
          "Peut apparaitre à l'issue d'une anesthésie locale", // Possible déclencheur (stress, sulfite?)
          "Sensation de douleur thoracique retro sternale", // Oppression thoracique possible, pas douleur typique
          "Dyspnée surtout à l'inspiration", // Expiratoire
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1], // A, B
        explanation: "Accès de dyspnée[cite: 2751]. Peut être déclenchée par divers facteurs, y compris le stress lié aux soins ou un composant de l'anesthésique[cite: 2752]."
      },
      {
        questionText: "Parmi les circonstances de survenue de la crise d'asthme une est fausse laquelle :",
        options: [
          "Allergique",
          "Après anesthésie locale",
          "Après corticothérapie", // Corticoïdes traitent l'asthme
          "Saisonnière en rapport avec la température ambiante",
          "Après un geste douloureux"
        ],
        correctOptionIndexes: [2], // C est faux
        explanation: "La corticothérapie est un traitement de fond ou de crise de l'asthme, elle ne déclenche pas de crise[cite: 2764]. Les autres sont des déclencheurs possibles (allergènes [cite: 2762], stress/douleur [cite: 2766], anesthésie [cite: 2763], changements de température [cite: 2765])."
      },
      {
        questionText: "La conduite d'urgence devant une crise d'asthme:",
        options: [
          "Oxygénation au masque 10-15L /mn",
          "Position décubitus dorsal stricte", // Assise
          "Ventoline en bouffées",
          "Hemisuccinate d'hydrocortisone 100-200 mg en intraveineux", // Si sévère
          "Amoxicilline forte dose" // Non
        ],
        correctOptionIndexes: [0, 2, 3], // A, C, D
        explanation: "Oxygène haut débit [cite: 2773], Ventoline inhalée [cite: 2775], Corticoïdes IV si besoin[cite: 2776]. Position assise."
      },
      {
        questionText: "L'évaluation de la fonction respiratoire se fait par :", // Similaire Q108
        options: [
          "Vérification des mouvements respiratoires",
          "Fréquence respiratoire",
          "Signes de lutte tirage, contracture des muscles accessoires",
          "Le patient ne répond pas aux stimulations, En la prise du pouls carotidien" // Neuro + Cardio
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Évaluation clinique : observer les mouvements [cite: 2784], compter la fréquence [cite: 2785], rechercher les signes de lutte[cite: 2786]."
      },
       {
        questionText: "la dyspnée est :", // Similaire Q27, 56, 64, 116
        options: [
          "Perception consciente d’un gène respiratoire", // une gêne
          "Soit inspiratoire soit expiratoir", // expiratoire
          "Un syndrome objectif", // Subjectif
          "Syndrome subjectif ressenti par le patient",
          "Inspiratoire expiratoire ou aux deux temps"
        ],
        correctOptionIndexes: [0, 3, 4], // A, D, E (B est incomplet)
        explanation: "C'est une sensation subjective de gêne respiratoire[cite: 2794, 2797]. Elle peut survenir à l'inspiration, l'expiration ou les deux[cite: 2798]."
      },
      {
        questionText: "la crise d'Asthme est :", // Similaire Q80, 117
        options: [
          "Accès de dyspnée intense.",
          "Apparait à l'issue d'une anesthésie locale",
          "Dyspnée surtout inspiratoire", // Expiratoire
          "Le pronostic vital est mis en jeu", // Oui, si sévère
          "N’évolue jamais vers une détresse respiratoire" // Faux
        ],
        correctOptionIndexes: [0, 1, 3], // A, B, D
        explanation: "Accès de dyspnée [cite: 2805], potentiellement déclenché par l'anesthésie/stress[cite: 2806]. Peut engager le pronostic vital [cite: 2808] et évoluer en détresse respiratoire."
      },
      {
        questionText: "la prise en charge d'urgence d'une crise d’asthme :", // Similaire Q103, 119
        options: [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux",
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit", // Haut débit
          "Mise en place d'une canule de Guedel" // Non
        ],
        correctOptionIndexes: [0, 1, 2], // A, B, C
        explanation: "Position assise [cite: 2816], Ventoline [cite: 2818], Corticoïdes IV si sévère[cite: 2817]. Oxygène haut débit[cite: 2819]."
      }
    ]
  }
];

module.exports = oxyologieQuizzes;