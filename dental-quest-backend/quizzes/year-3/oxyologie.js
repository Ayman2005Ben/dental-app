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
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le malaise vagal et les réactions allergiques sont fréquentes. L'hypertension peut être découverte ou s'aggraver. L'arrêt cardiaque est rare."
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
        explanation: "L'évaluation neurologique rapide inclut la vérification de la conscience (réponse verbale, motrice, orientation - nom, lieu, temps)."
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
        correctOptionIndexes: [0, 3],
        explanation: "Le malaise vagal est très fréquent. L'inhalation/ingestion de petits instruments ou matériaux est un risque spécifique au cabinet dentaire."
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
        correctOptionIndexes: [0, 1, 2],
        explanation: "En urgence, l'évaluation se concentre sur les fonctions vitales : neurologique (conscience), respiratoire (ventilation) et cardio-circulatoire (pouls, tension)."
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
        correctOptionIndexes: [0, 3],
        explanation: "Le tensiomètre et l'oxymètre de pouls sont essentiels pour surveiller les signes vitaux (tension artérielle, saturation en oxygène, fréquence cardiaque). Les autres sont du matériel d'oxygénothérapie ou d'aspiration."
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
        correctOptionIndexes: [0, 3],
        explanation: "Le débit par lunettes est bien de 0,5 à 5 L/min, correspondant à une FiO2 de 25-40%. Le débit au masque simple peut aller jusqu'à 15 L/min. Le masque à haute concentration (avec réserve) vise à corriger une hypoxie."
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
        correctOptionIndexes: [0],
        explanation: "Le masque à haute concentration (avec réserve) est indiqué pour délivrer une FiO2 élevée en cas d'hypoxémie aiguë sévère."
      },
      {
        questionText: "La valve unidirectionnelle d'un BAVU permet :",
        options: [
          "Séparer l'air inspiré de l'air expiré",
          "Re insufflation du CO2",
          "Eviter la réinsufflassions du CO2",
          "Mélange d'air inspiré et l'air expiré",
          "Eviter le stockage du Co2"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La valve unidirectionnelle du BAVU dirige l'air frais vers le patient lors de la compression et l'air expiré vers l'extérieur lors du relâchement, empêchant ainsi la ré-inhalation du CO2 expiré."
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
        correctOptionIndexes: [1, 3],
        explanation: "A: Saturation normale > 95%. C: Atropine augmente la fréquence cardiaque. E: Glucagon s'injecte en IM. La canule de Guedel maintient les voies aériennes ouvertes, et l'atropine a un effet anticholinergique qui diminue les sécrétions."
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
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'hydrocortisone est un glucocorticoïde ayant des propriétés anti-inflammatoires et antiallergiques. Il est indiqué dans les réactions allergiques sévères et l'asthme, à une posologie de 100-200 mg IV."
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
        correctOptionIndexes: [0, 1, 3],
        explanation: "La canule de Guedel est un matériel de maintien de la liberté des voies aériennes, utilisée chez le patient inconscient pour empêcher la langue d'obstruer le pharynx. Elle n'est pas utilisée chez le patient conscient."
      },
      {
        questionText: "Le débit d’oxygénothérapie est de :",
        options: [
          "0,5à 5 L/mn sous lunettes",
          "10 à 15 L/mn sous lunettes",
          "30 L/mn sous lunettes",
          "15 L/mn sous masque à Oxygène",
          "2à 4L /mn sous masque à réserve"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le débit sous lunettes nasales est de 0.5 à 5 L/min. Sous masque à haute concentration (avec réserve), le débit peut atteindre 15 L/min."
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
        correctOptionIndexes: [1, 2],
        explanation: "L'oxymètre de pouls (ou saturomètre) est un appareil de monitorage qui mesure la saturation pulsée en oxygène (SpO2) et la fréquence cardiaque. La saturation normale est > 95%."
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
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'atropine est un anticholinergique qui augmente la fréquence cardiaque, diminue les sécrétions et a un effet spasmolytique. Elle est indiquée dans le malaise vagal avec bradycardie."
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
        correctOptionIndexes: [1, 2, 4],
        explanation: "Le glucagon est une hormone hyperglycémiante indiquée en cas d'hypoglycémie sévère, à la dose de 1 mg en injection IM ou SC."
      },
      {
        questionText: "À propos de l'oxygène médical :",
        options: [
          "Se présente sous forme gazeuse uniquement",
          "Peut se présenter sous forme liquide",
          "Est délivré à 5 l/mn par lunettes à oxygène.",
          "Est délivré à 15 l/mn par lunettes à oxygène",
          "Doit être humidifié"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "L'oxygène médical peut être stocké sous forme gazeuse ou liquide. Le débit maximal par lunettes est d'environ 5 L/min. L'humidification est recommandée pour les débits élevés."
      },
      {
        questionText: "L'adrénaline :",
        options: [
          "Est un médicament d'urgence",
          "Indiqué dans le choc infectieux",
          "Indiqué dans le l'œdème de Quincke",
          "S'administre uniquement en sous cutané",
          "Est contre indiqué dans l'arrêt cardiaque"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'adrénaline est un médicament essentiel de l'urgence, indiqué notamment dans le choc anaphylactique, l'œdème de Quincke et l'arrêt cardiaque. Elle peut être administrée en IM, IV ou SC."
      },
      {
        questionText: "Le matériel d'urgence dans un cabinet dentaire comporte:",
        options: [
          "Bouteille d'oxygène",
          "Canule de GUEDEL",
          "Aspirateur de mucosités",
          "Drogues d'urgence: adrénaline, atropine",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tout cabinet dentaire doit disposer d'un matériel minimal d'urgence incluant de quoi assurer l'oxygénation, l'aspiration, et les drogues vitales."
      },
      {
        questionText: "Le chariot d'urgence contient :",
        options: [
          "Adrénaline",
          "Atropine",
          "Salbutamol",
          "Sérum glucose 30%",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Un chariot d'urgence bien équipé contient les médicaments essentiels pour les principales détresses : Adrénaline, Atropine, Salbutamol, Glucosé, Corticoïdes, etc."
      },
      {
        questionText: "les médicaments d'urgence au cabinet dentaire :",
        options: [
          "Atropine, Adrénaline, Valium",
          "Hémisuccinate d'hydrocortisone",
          "Amoxicilline",
          "Lidocaïne",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les médicaments essentiels incluent Adrénaline, Atropine, Corticoïdes (Hydrocortisone), Benzodiazépines (Valium), Bronchodilatateurs (Salbutamol), Glucagon/Glucosé."
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
        correctOptionIndexes: [0, 1, 3],
        explanation: "La chaîne de survie inclut l'alerte précoce, la RCP précoce (libération des voies aériennes, MCE, ventilation), et les soins spécialisés. L'adrénaline est injectée à 1mg."
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
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les causes cardiaques (fibrillation ventriculaire), pulmonaires (embolie massive), métaboliques (hyperkaliémie) sont des étiologies fréquentes d'arrêt cardiaque."
      },
      {
        questionText: "L'arrêt cardiaque est :",
        options: [
          "Urgence absolue",
          "Aboutit à une anoxie cérébrale",
          "La mort neuronale survient en 2 mn en l'absence de réanimation",
          "Se traduit par un ECG plat",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C'est une urgence absolue menant à une anoxie cérébrale. La mort neuronale survient en 4-6 minutes sans RCP. L'ECG peut montrer une asystolie (plat), mais aussi une fibrillation ventriculaire."
      },
      {
        questionText: "Le diagnostic de l'arrêt cardiaque se pose par:",
        options: [
          "Marbrures",
          "Myosis bilatéral",
          "Absence du pouls fémoral",
          "Présence d'une ventilation sans GASPS",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagnostic repose sur 3 signes : inconscience, absence de ventilation (ou gasps agoniques), et absence de pouls central (carotidien ou fémoral)."
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
        correctOptionIndexes: [1],
        explanation: "La profondeur est de 5-6 cm. Le rythme est de 30 compressions pour 2 insufflations. La zone est le milieu de la moitié inférieure du sternum. Les bras doivent être tendus."
      },
      {
        questionText: "Parmi ces étiologies d'arrêt cardiaque une est fausse :",
        options: [
          "Plaie artérielle",
          "Hyperkaliémie",
          "Hyperoxie",
          "Fibrillation ventriculaire",
          "Asthme aigue grave"
        ],
        correctOptionIndexes: [2],
        explanation: "L'hypoxie (manque d'oxygène) est une cause fréquente d'arrêt cardiaque, pas l'hyperoxie (excès d'oxygène)."
      },
      {
        questionText: "Les signes cliniques d’un arrêt cardiaque sont :",
        options: [
          "Myosis serré bilatéral",
          "Mydriase bilatérale",
          "Absence de poul radial",
          "Un poul fémoral battant",
          "Hyperventilation"
        ],
        correctOptionIndexes: [1],
        explanation: "Les signes cardinaux sont l'inconscience, l'absence de respiration et l'absence de pouls central. La mydriase bilatérale aréactive apparaît ensuite."
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
        correctOptionIndexes: [0, 1],
        explanation: "Le patient doit être allongé sur le dos sur un plan dur. La libération des voies aériennes est une étape préalable. Les bras doivent être tendus, et le rythme est de 30:2."
      },
      {
        questionText: "devant une mort subite par fibrillation ventriculaire :",
        options: [
          "Faire un choc électrique externe",
          "Le choc électrique est de 1500-200 joules",
          "Les 2 électrodes sont placées sous l’épaule droite",
          "La défibrillation se fait par défibrillateur",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La fibrillation ventriculaire est une indication majeure de défibrillation, réalisée avec un défibrillateur. L'énergie est de 150-200 Joules. Les électrodes sont placées en position antéro-latérale."
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
        correctOptionIndexes: [0],
        explanation: "L'arrêt cardio-circulatoire est l'interruption brutale de la circulation et de la ventilation, entraînant une anoxie cérébrale."
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
        correctOptionIndexes: [0, 2],
        explanation: "Le MCE consiste en des compressions thoraciques sur un patient allongé sur le dos. Le rythme est de 30:2."
      },
      {
        questionText: "L'arrêt cardio-circulatoire survient par :",
        options: [
          "Hypovolémie",
          "Hypoxie",
          "Fibrillation ventriculaire",
          "Intoxication au CO",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les causes d'arrêt cardiaque incluent les causes cardiaques, l'hypovolémie, l'hypoxie, les troubles métaboliques, etc."
      },
      {
        questionText: "conduite d'urgence d'un arrêt cardio-vasculaire :",
        options: [
          "Massage cardiaque externe",
          "Injection de 1 mg d'adrénaline en intraveineux",
          "Injection de 20mg d'adrénaline en intraveineux",
          "Intubation et oxygénothérapie",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La prise en charge immédiate repose sur la RCP de base (MCE). Les soins médicaux avancés incluent l'intubation, l'oxygénothérapie, et l'adrénaline (1mg IV)."
      },
      {
        questionText: "Les signes cliniques de l'arrêt cardio-respiratoire :",
        options: [
          "Abolition du poul carotidien et radial",
          "Myosis serré",
          "Mydriase bilatérale",
          "Respiration normale",
          "Conscience normale"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Inconscience, absence de respiration, abolition des pouls centraux et périphériques. La mydriase bilatérale aréactive est un signe plus tardif."
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
        correctOptionIndexes: [4],
        explanation: "Toutes ces conditions peuvent conduire à un arrêt cardiaque."
      },
      {
        questionText: "la prise en charge d'urgence d'un arrêt cardio-circulatoire nécessite :",
        options: [
          "L'appréciation de l'état respiratoire",
          "L'appréciation de l'état circulatoire",
          "Une organisation en chaine de l'accès au secours",
          "La restauration de la circulation et de la ventilation",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La prise en charge suit la chaîne de survie : évaluation rapide, alerte, et gestes de réanimation."
      },
      {
        questionText: "la réanimation cardio-pulmonaire de base repose sur :",
        options: [
          "vérifier la réactivité",
          "liberté des voies aériennes supérieures par extension de la tete",
          "liberté des voies aériennes par flexion de la tête",
          "ventilation au masque",
          "ventilation aux lunettes d'oxygène"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La RCP de base comprend la vérification de la réactivité, la libération des voies aériennes (par extension de la tête), l'alerte, les compressions et la ventilation (bouche-à-masque, BAVU)."
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
        correctOptionIndexes: [0, 2],
        explanation: "Interruption brutale de la circulation et de la ventilation menant à l'anoxie cérébrale. La mort neuronale survient en 4-6 minutes sans RCP."
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
        correctOptionIndexes: [4],
        explanation: "Toutes ces situations peuvent entraîner un arrêt cardio-circulatoire."
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
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "La RCP de base comprend l'alerte, la libération des voies aériennes, la ventilation (au masque ou BAVU) et le massage cardiaque externe."
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
        correctOptionIndexes: [0, 1, 4],
        explanation: "Inconscience, arrêt respiratoire, absence de pouls, signes cutanés. La mydriase est aréactive."
      }
    ]
  },
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
        correctOptionIndexes: [0, 1, 4],
        explanation: "Pendant une crise, le patient peut se blesser ou chuter (traumatismes). Certains médicaments antiépileptiques causent une hyposialie (sécheresse buccale) augmentant le risque carieux, et d'autres une hyperplasie gingivale."
      },
      {
        questionText: "Devant une crise d'épilepsie il faut.:",
        options: [
          "Arrêter les soins",
          "Assurer une oxygénothérapie",
          "Donner du valium en intramusculaire",
          "Mettre le patient en position latérale",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Arrêter immédiatement les soins. Protéger le patient. Mettre en PLS après la fin des convulsions pour maintenir les voies aériennes libres."
      },
      {
        questionText: "les impacts des antiépileptiques sur la cavité buccale sont :",
        options: [
          "Hyperplasie gingivale",
          "Hyposialie",
          "cardiosensibilité",
          "Toutes ces réponses sont justes",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Certains antiépileptiques (ex: phénytoïne) causent une hyperplasie gingivale. D'autres peuvent entraîner une hyposialie, ce qui favorise la carie (cariosensibilité)."
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
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'épilepsie peut être idiopathique ou secondaire à diverses causes : métaboliques (hypoglycémie), structurales (tumeur, AVC), infectieuses, toxiques, etc."
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
        correctOptionIndexes: [4],
        explanation: "L'épilepsie est définie par une prédisposition à générer des crises répétées, dues à une décharge neuronale excessive et hypersynchrone."
      },
      {
        questionText: "la prise en charge d'une convulsion :",
        options: [
          "Une oxygénothérapie",
          "Vérifier la respiration et le poul",
          "Le dosage de la glycémie",
          "L'administration d'anesthésiques",
          "Assurer la liberté des voies aériennes supérieures"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Pendant et après la crise : assurer la liberté des voies aériennes, vérifier les signes vitaux, administrer de l'oxygène si nécessaire, et rechercher une cause (glycémie capillaire)."
      },
      {
        questionText: "Devant une crise d'épilepsie :",
        options: [
          "Arrêter les soins",
          "Continuer les soins",
          "Vérifier la respiration et le poul carotidien",
          "Oxygénothérapie",
          "Empêcher les mouvements du patient"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Arrêter les soins. Ne pas entraver les mouvements mais protéger le patient. Surveiller les fonctions vitales et oxygéner si besoin."
      },
      {
        questionText: "les étiologies des crises convulsives sont :",
        options: [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Prise d'alcool",
          "Accident vasculaire cérébrale",
          "Injection de Valium en intramusculaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "De nombreuses causes peuvent déclencher des convulsions : métaboliques, neurologiques, toxiques, etc."
      },
      {
        questionText: "L'épilepsie est :",
        options: [
          "Affection neurologique de survenue brutale",
          "Spasme musculaire involontaire",
          "Des crises convulsives répétées",
          "Perte de connaissance",
          "Correspond à des crises de syncope répétées."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'épilepsie se caractérise par la répétition de crises, souvent brutales et accompagnées de perte de connaissance."
      },
      {
        questionText: "la conduite d'urgence devant une épilepsie :",
        options: [
          "Arrêter les soins",
          "Mettre le patient en position latérale de sécurité",
          "Oxygénothérapie",
          "Essayer d'empêcher les mouvements du patient",
          "Administration d'un antalgique"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Arrêt des soins, protection du patient, PLS post-critique, oxygénothérapie si cyanose."
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
        correctOptionIndexes: [2, 4],
        explanation: "La manœuvre de Heimlich est pour l'obstruction des voies aériennes (inhalation). Le sauveteur se place derrière, les mains sur l'épigastre, et pousse vers le haut et l'intérieur. Des manœuvres spécifiques existent pour le nourrisson."
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
        correctOptionIndexes: [0, 1, 3],
        explanation: "Plusieurs facteurs favorisent l'inhalation : petits instruments, position allongée, et diminution des réflexes protecteurs due à l'anesthésie ou la sédation."
      },
      {
        questionText: "Devant une inhalation:",
        options: [
          "Faire la manœuvre d' HEIMLISCH",
          "Retirer l'objet avec une pince",
          "Eviter de faire tousser le patient",
          "Oxygénothérapie a faible débit",
          "Donner une forte tape dans le dos"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Si obstruction partielle avec toux efficace, encourager la toux et donner des tapes dans le dos. Si obstruction complète, manœuvre de Heimlich."
      },
      {
        questionText: "la conduite d'urgence devant une inhalation :",
        options: [
          "Manœuvre de HEIMLISCH",
          "Retrait de l'objet avec une pince",
          "Faire tousser le patient",
          "Oxygénothérapie à faible débit",
          "Donner une forte tape dans le dos"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Encourager la toux et tapes dorsales si obstruction partielle. Manœuvre de Heimlich si obstruction totale."
      },
      {
        questionText: "La conduite d'urgence devant l'inhalation d'un corps étranger :",
        options: [
          "Faire une endoscopie systématiquement",
          "Pratiquer la manœuvre de HEMLISCH",
          "Une oxygénothérapie à haut débit",
          "Faire tousser le patient",
          "Antibiothérapie a large spectre"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La conduite dépend de la sévérité : encourager la toux, tapes dorsales, Heimlich, oxygénothérapie si besoin, et alerte médicale."
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
        correctOptionIndexes: [4],
        explanation: "Tous ces facteurs contribuent au risque d'inhalation accidentelle au cabinet dentaire."
      },
      {
        questionText: "La conduite d’urgence devant l’inhalation d’un corps étranger:",
        options: [
          "Oxygénothérapie",
          "Manœuvre de HEMLISCH",
          "Bronchoscopie si nécessaire",
          "Antibiothérapie",
          "Adrénaline à 1 mg en intraveineux"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Gestes immédiats : Heimlich si obstruction totale. Puis oxygénothérapie si besoin. Extraction par bronchoscopie si l'objet reste bloqué. Antibiothérapie si risque d'infection."
      },
      {
        questionText: "Les complications de l'inhalation sont :",
        options: [
          "Détresse respiratoire aigue",
          "Troubles de la conscience",
          "Abcès pulmonaire",
          "Une bradycardie",
          "Une hypoglycémie"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'inhalation peut causer une obstruction immédiate (détresse respiratoire) ou des complications infectieuses tardives (pneumonie, abcès pulmonaire)."
      },
      {
        questionText: "conduite à tenir devant une inhalation :",
        options: [
          "Manœuvre de HEMLISCH",
          "Retirer l’objet avec une pince",
          "Faire une tape sur le dos",
          "Oxygénothérapie à haut débit",
          "Oxygénothérapie à faible débit"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Tapes dorsales si toux efficace. Heimlich si obstruction complète. Oxygénothérapie à haut débit si détresse respiratoire."
      },
      {
        questionText: "devant l’ingestion d’un corps étranger :",
        options: [
          "Assurer la ventilation du patient",
          "Faire radiographie pour localiser le corps étranger",
          "Faire une manœuvre de HEMLISCH",
          "Restaurer un régime pauvre en fibres",
          "Prescription d’antibiotiques et d’anti-inflammatoires"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Assurer la ventilation pour exclure une inhalation. Une radiographie peut être nécessaire. Surveillance et régime riche en fibres sont recommandés."
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
        correctOptionIndexes: [0, 2, 3],
        explanation: "Obstruction des voies aériennes, détresse respiratoire, et complications infectieuses comme l'abcès pulmonaire."
      }
    ]
  },
  {
    title: "Détresse neurologique",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Le choc vagal:",
        options: [
          "Est une activité excessive du système parasympathique",
          "Est une activité excessive du système sympathique",
          "S’exprime par une bradycardie",
          "S’exprime par une tachycardie",
          "S’exprime par une perte de connaissance"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Le malaise vagal résulte d'une hyperactivité parasympathique, entraînant bradycardie, hypotension et potentiellement une perte de connaissance."
      },
      {
        questionText: "Les facteurs déclenchant d’un malaise hypoglycémique:",
        options: [
          "Stress",
          "Atteinte hépatique",
          "Insuffisance cardiaque",
          "Surdosage en antidiabétiques",
          "Surdosage en anesthésiques locaux"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'hypoglycémie peut être due à un surdosage en antidiabétiques, un jeûne, une atteinte hépatique, etc."
      },
      {
        questionText: "LE MALAISE vagal est du :",
        options: [
          "Activité excessive du sympathique",
          "Activité excessive du parasympathique",
          "Hypoglycémie",
          "Douleur aigue",
          "Atmosphère surchauffée"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Le mécanisme est une hyperactivité parasympathique. Les déclencheurs fréquents incluent la douleur, le stress, la chaleur, la vue du sang, etc."
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
        correctOptionIndexes: [0, 2, 3],
        explanation: "Arrêter les soins, allonger le patient, surélever les jambes pour améliorer le retour veineux cérébral, et surveiller les signes vitaux."
      },
      {
        questionText: "La syncope:",
        options: [
          "Est une perte de connaissance brève",
          "Est suivie d'un retour spontané de conscience",
          "Résulte d’une augmentation du débit sanguin cérébral",
          "Perte transitoire du tonus postural",
          "Peut être reflexe vaso-vagale"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La syncope est une perte de connaissance brève, complète, avec perte du tonus postural, due à une hypoperfusion cérébrale globale transitoire, et suivie d'une récupération spontanée."
      },
      {
        questionText: "La syncope Non cardiaque :",
        options: [
          "Survient en station debout prolongée",
          "après phase prodromique",
          "Survient sans phase prodromique",
          "Reprise de conscience sur place",
          "Reprise de conscience quelques heures"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les syncopes non cardiaques, notamment vasovagales, surviennent souvent en position debout prolongée, sont précédées de prodromes, et la récupération est rapide une fois allongé."
      },
      {
        questionText: "Le malaise vagal est du à :",
        options: [
          "Activité excessive du système parasympathique",
          "Inhibition du système sympathique",
          "Bradycardie",
          "Hypertension artérielle",
          "Hypotension"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Hyperactivité parasympathique et/ou baisse de l'activité sympathique, entraînant bradycardie et hypotension."
      },
      {
        questionText: "La conduite d'urgence devant un malaise vagal :",
        options: [
          "Interrompre les soins",
          "Allonger le patient les jambes surélevées",
          "Adrénaline en intraveineux",
          "hémisuccinate d'hydrocortisone",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Arrêt des soins, position allongée avec jambes surélevées."
      },
      {
        questionText: "Le malaise vagale est due à :",
        options: [
          "Activité basse du système parasympathique",
          "Activité excessive du système sympathique",
          "Accélération du rythme cardiaque",
          "Elévation de la pression artérielle",
          "Perte de connaissance : lipothymie ou syncope"
        ],
        correctOptionIndexes: [4],
        explanation: "Le malaise vagal résulte d'une hyperactivité parasympathique, causant bradycardie et hypotension, pouvant mener à une perte de connaissance."
      },
      {
        questionText: "conduite d'urgence devant un malaise hypoglycémique :",
        options: [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée",
          "Vérifier la vacuité des voies aériennes supérieures",
          "Injection d'Insuline",
          "Injection Intraveineuse lente de sérum salé"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Si patient conscient : position confortable, administration de sucre oral. Si inconscient : PLS, vérifier voies aériennes, injection de glucagon IM ou glucosé IV."
      },
      {
        questionText: "LE malaise vagal est du à :",
        options: [
          "Activité excessive du système parasympathique",
          "Activité excessive du système sympathique",
          "Ralentissement du rythme cardiaque",
          "Élévation de la pression artérielle",
          "Perte de connaissance partielle : lipothymie ou totale syncope."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Hyperactivité parasympathique causant bradycardie et potentiellement lipothymie/syncope."
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
        correctOptionIndexes: [0, 1, 2],
        explanation: "Arrêt des soins, position de Trendelenburg (allongé jambes surélevées), surveillance des signes vitaux."
      },
      {
        questionText: "la conduite d'urgence devant un malaise hypoglycémique :",
        options: [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée",
          "Vérifier la vacuité des voies aériennes supérieures",
          "injection d'insuline",
          "Injection intraveineuse lente de sérum glucose"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Position de confort. Sucre oral si conscient. Vérifier voies aériennes si inconscient. Injection de sérum glucosé IV si inconscient."
      },
      {
        questionText: "le terme syncope :",
        options: [
          "Perte de connaissance à début rapide et durée rapide et transitoire",
          "Associe une rigidité",
          "Résulte d'un arrêt bref du débit sanguin cérébral",
          "Associe un trouble visuel",
          "N’est jamais précédé de prodromes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Perte de connaissance brève et transitoire due à une hypoperfusion cérébrale globale."
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
          "Bilan d'hémostase",
          "Faire plusieurs bains de bouche",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La priorité est l'hémostase locale par compression prolongée. Un bilan d'hémostase est indiqué si le saignement est anormal. Les bains de bouche sont à éviter initialement."
      },
      {
        questionText: "Les complications de L'inhalation sont:",
        options: [
          "Abcès pulmonaire",
          "Pneumonie",
          "Objet bloqué dans l'appareil respiratoire",
          "Détresse respiratoire",
          "Toutes ces réponses sont juste"
        ],
        correctOptionIndexes: [4],
        explanation: "L'inhalation peut causer une obstruction aiguë (détresse respiratoire), rester bloquée, ou entraîner des complications infectieuses pulmonaires (pneumonie, abcès)."
      },
      {
        questionText: "Parmi ces actes à risque lesquels sont hémorragique :",
        options: [
          "Avulsion en zone inflammatoire",
          "Chirurgie parodontale",
          "Implants multiples",
          "Chirurgie apicale lésion < 0,5 cms",
          "Greffe gingival"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les actes chirurgicaux étendus présentent un risque hémorragique plus élevé qu'une chirurgie apicale mineure."
      },
      {
        questionText: "les actes à risque hémorragiques:",
        options: [
          "Avulsion de plus de 3 dents",
          "Avulsion en zone inflammatoire",
          "Enucléation kystique",
          "Chirurgie parodontale",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tous ces actes chirurgicaux sont considérés comme présentant un risque hémorragique notable."
      },
      {
        questionText: "Le bilan d’hémostase devant hémorragie dentaire:",
        options: [
          "Numération formule sanguine",
          "Urée -créatinémie",
          "Taux de prothrombine",
          "Glycémie à jeun",
          "Dosage de la vitamine B1B6"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Un bilan standard d'hémostase comprend la NFS (numération plaquettaire), le TP/INR et le TCA."
      },
      {
        questionText: "Parmi les actes à risque hémorragique:",
        options: [
          "Avulsion en zone inflammatoire",
          "Greffe gingivale",
          "Implants multiples",
          "Chirurgie d'une lithiase salivaire",
          "Extraction dentaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'avulsion simple présente un faible risque. Les avulsions complexes, en zone inflammatoire, les greffes et la pose d'implants multiples sont à risque plus élevé."
      },
      {
        questionText: "Devant une hémorragie dentaire faire :",
        options: [
          "taux de prothrombine",
          "Refaire une anesthésie locale sans vasoconstricteur si nécessaire",
          "Nettoyer l' alvéole avec du surgicel",
          "Extraire l'apex résiduel",
          "Faire une compression pendant 2 minutes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La prise en charge inclut : compression prolongée, nettoyage, anesthésie AVEC vasoconstricteur, hémostatique local, recherche de cause locale, et bilan si nécessaire."
      },
      {
        questionText: "Devant une hémorragie dentaire Il faut :",
        options: [
          "Cureter une lésion apicale si elle existe",
          "Bilan d’hémostase : TP-INR-TCA-et une FNS",
          "Hémostatique local type Surgicel",
          "Anesthésie locale avec vasoconstricteur",
          "Faire plusieurs bains de bouche"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La CAT comprend le traitement de la cause, des mesures d'hémostase locale (compression, anesthésie avec VC, Surgicel), et un bilan si nécessaire."
      },
      {
        questionText: "Parmi les étiologies de l'hémorragie au cabinet dentaire une seule est fausse :",
        options: [
          "intervention en présence d'une inflammation",
          "Insuffisance hépatique",
          "Fracture avéolaire",
          "Anémies et thrombopathies",
          "Carence en vitamine K"
        ],
        correctOptionIndexes: [1],
        explanation: "Toutes ces conditions peuvent être des causes ou facteurs favorisants d'hémorragie. La question est probablement mal formulée."
      },
      {
        questionText: "la conduite d'urgence devant une hémorragie dentaire est :",
        options: [
          "Faire une radiographie panoramique dentaire",
          "Bilan d’hémostase : TP.INR-TCA-FNS.",
          "Hémostase local type surgicel",
          "Faire une compression qui sera maintenue quelques secondes",
          "Faire plusieurs bains de bouche"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Hémostase locale (Surgicel, suture...). Bilan d'hémostase si nécessaire. Compression prolongée (minutes)."
      },
      {
        questionText: "L'urgence hémorragique est liée à :",
        options: [
          "L'acte anesthésique",
          "L'acte chirurgical",
          "La gestion des anticoagulants",
          "La pathologie dentaire",
          "L'effraction vasculaire"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "L'hémorragie peut être déclenchée par l'acte lui-même, aggravée par une pathologie locale ou un état général du patient."
      },
      {
        questionText: "Parmi les étiologies de l'hémorragie au cabinet dentaire une seule est fausse :",
        options: [
          "intervention en présence d'une inflammation",
          "Insuffisance hépatique",
          "Fracture alvéolaire",
          "Anémies et thrombopathies",
          "Surcharge en vitamine k"
        ],
        correctOptionIndexes: [4],
        explanation: "Une carence en vitamine K perturbe la coagulation et peut causer des hémorragies. Une surcharge n'est pas une cause d'hémorragie."
      }
    ]
  },
  {
    title: "Choc anaphylactique",
    subject: "oxyologie",
    questions: [
      {
        questionText: "Les signes cliniques du stade l du choc anaphylactique sont:",
        options: [
          "Prurit palmo-plantaire",
          "OEdème de Quincke pharyngé",
          "Hypotension",
          "Tachycardie",
          "Atteinte multi viscérale"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le Stade I de l'anaphylaxie se limite aux signes cutanéo-muqueux généralisés : prurit, urticaire, érythème, œdème de Quincke."
      },
      {
        questionText: "Le choc anaphylactique:",
        options: [
          "Urgence diagnostic et thérapeutique",
          "Dé granulation des éosinophiles",
          "Entraine une vasoplégie",
          "Entraine une vasodilatation",
          "Traité par adrénaline"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "C'est une urgence absolue due à la dégranulation des mastocytes et basophiles. Il provoque une vasodilatation massive. Le traitement de première intention est l'adrénaline."
      },
      {
        questionText: "La conduite à tenir devant un choc anaphylactique:",
        options: [
          "Assurer la liberté des voies aériennes supérieures et oxygénothérapie",
          "Adrénaline en intraveineux",
          "Remplissage vasculaire par sérum glucosé 10 %",
          "Remplissage vasculaire par cristalloïdes",
          "Histamine en intraveineux"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Prise en charge : arrêt de l'allergène, liberté des voies aériennes, oxygénothérapie, adrénaline (IM ++), remplissage vasculaire par cristalloïdes, corticoïdes et anti-histaminiques."
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
        correctOptionIndexes: [0, 1, 3],
        explanation: "Urgence vitale due à la dégranulation des mastocytes et basophiles. Le traitement essentiel est l'adrénaline."
      },
      {
        questionText: "Le choc anaphylactique nécessite :",
        options: [
          "un traitement par adrénaline",
          "Antihistaminiques",
          "Corticoïdes",
          "massage cardiaque externe",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement de base est l'adrénaline. Les antihistaminiques et les corticoïdes sont des traitements adjuvants."
      },
      {
        questionText: "Au cours du choc anaphylactique on observe :",
        options: [
          "Prurit palmo -plantaire",
          "Exanthème",
          "œdème de Quincke",
          "Atteints multi-Viscérale",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les signes cliniques varient selon le stade : cutanéo-muqueux (stade I), puis respiratoires, cardiovasculaires et multiviscéraux aux stades avancés."
      },
      {
        questionText: "Le choc anaphylactique est :",
        options: [
          "Une urgence vitale et diagnostique",
          "due à une dégranulation des mastocytes",
          "Secondaire à une réaction allergique",
          "Lié à une vasoplégie",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Urgence vitale, due à la dégranulation mastocytaire souvent déclenchée par une réaction allergique, entraînant une vasoplégie majeure."
      },
      {
        questionText: "le choc anaphylactique est :",
        options: [
          "Etat de choc par pénétration d'allergènes",
          "Etat de choc par pénétration d'haptènes",
          "Dû à la dégranulation des mastocytes",
          "Dû à la dégranulation des polynucléaires basophiles",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Déclenché par un allergène, il résulte de la libération massive de médiateurs par les mastocytes et les basophiles."
      },
      {
        questionText: "L'anaphylaxie est :",
        options: [
          "Une Réaction allergique sévère",
          "Difficulté respiratoire",
          "Choc anaphylactique",
          "Du à une hypo volémie",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'anaphylaxie est une réaction allergique systémique sévère. Le choc anaphylactique en est la forme la plus grave avec défaillance circulatoire."
      },
      {
        questionText: "L'état de choc est :",
        options: [
          "Souffrance cellulaire",
          "Défaut de perfusion tissulaire",
          "Chute importante de la pression artérielle",
          "Défaut de production d'ATP",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'état de choc est une insuffisance circulatoire aiguë entraînant une hypoperfusion tissulaire, responsable d'une souffrance cellulaire par manque d'oxygène."
      },
      {
        questionText: "Le choc anaphylactique est :",
        options: [
          "Urgence vital, diagnostique et thérapeutique",
          "dégranulation des mastocytes et polynucléaires basophiles",
          "Associe des signes cutanés et atteinte multi viscérale",
          "Nécessite un traitement par antihistaminique",
          "Nécessite un traitement par Adrénaline"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Urgence, dégranulation mastocytaire/basophile, signes cliniques variables. Traitement principal : adrénaline. Antihistaminiques en complément."
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
          "Un tirage sus sternal et intercostal"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La crise d'asthme typique se manifeste par une dyspnée sifflante à prédominance expiratoire, une toux sèche, et des sibilants à l'auscultation."
      },
      {
        questionText: "Le traitement d'une crise d' asthme sévère repose sur :",
        options: [
          "Oxygénothérapie au débit de 1 L/mn",
          "Hémisuccinate d'hydrocortisone 100 mg en IV",
          "Bricanyl en IVX",
          "Position décubitus dorsal stricte",
          "Adrénaline 3 mg en aérosol"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Traitement de la crise sévère : Oxygénothérapie à haut débit, bronchodilatateurs inhalés ou injectables (Terbutaline), corticoïdes IV (Hydrocortisone). Position assise."
      },
      {
        questionText: "Le malaise vagal est :",
        options: [
          "Trouble de la conscience régressif",
          "lié à l'augmentation de l'activité sympathique",
          "lié à l'augmentation de l'activité parasympathique",
          "Lié à la baisse de l'activité parasympathique",
          "la douleur aigue est l'un de ses facteurs déclenchants"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Malaise bref avec altération de la conscience, dû à une hyperactivité parasympathique, souvent déclenché par la douleur, le stress, etc."
      },
      {
        questionText: "Parmi les étiologies de détresse respiratoire:",
        options: [
          "Inhalation d’un corps étranger",
          "Accident d’ingestion de corps étranger",
          "L’hypocapnie",
          "Œdème de Quincke",
          "Alcalose métabolique"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Causes fréquentes de détresse respiratoire aiguë : obstruction des voies aériennes (corps étranger, œdème de Quincke), asthme, pneumonie, embolie pulmonaire, etc."
      },
      {
        questionText: "la conduite d’urgence devant une crise d’asthme:",
        options: [
          "La position assise",
          "Oxygène à faible débit",
          "Ventoline en bouffées",
          "Corticoïdes en IV",
          "Mise en place d’une canule de GUEDEL"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Position assise. Oxygène à haut débit. Bronchodilatateur inhalé (Ventoline). Corticoïdes IV si crise sévère."
      },
      {
        questionText: "La dyspnée est:",
        options: [
          "Urgence respiratoire",
          "Polypnée ou Bradypnée",
          "Toujours inspiratoire",
          "Relâchement des muscles abdominaux",
          "N’as pas de retentissement sur la pression artérielle"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La dyspnée est une gêne respiratoire subjective, pouvant être une urgence. Elle peut se manifester par une polypnée ou une bradypnée."
      },
      {
        questionText: "la dyspnée :",
        options: [
          "Une géne respiratoire",
          "Survient à l’effort ou au repos",
          "Peut être inspiratoire ou expiratoire",
          "Soit une polypnée ou une bradypnée",
          "Est toujours inspiratoire"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Gêne respiratoire subjective, survenant au repos ou à l'effort, pouvant être rapide ou lente, à l'inspiration, l'expiration ou les deux."
      },
      {
        questionText: "La prise en charge d' une crise d'asthme:",
        options: [
          "Malade en position demi assise",
          "Ventoline en bouffées",
          "Amoxicilline en intraveineux",
          "Atropine en sous cutané",
          "Mise en place d'une canule de GUEDEL"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Position demi-assise. Bronchodilatateur bêta-2 mimétique inhalé (Ventoline). Corticoïdes si besoin."
      },
      {
        questionText: "la crise d’asthme :",
        options: [
          "Respiration sifflante",
          "D’origine allergique",
          "Ne s’accompagne jamais d’agitation",
          "Dyspnée expiratoire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Caractérisée par une dyspnée expiratoire avec sifflements. Souvent d'origine allergique. Peut s'accompagner d'agitation."
      },
      {
        questionText: "la conduite à tenir devant une détresse respiratoire :",
        options: [
          "Assurer la liberté des voies aériennes supérieures",
          "Injecter 1 mg d’adrénaline en IV",
          "Oxygénothérapie",
          "Position latérale de sécurité",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Priorité : libérer les voies aériennes, administrer de l'oxygène, position adaptée (souvent assise), identifier et traiter la cause."
      },
      {
        questionText: "les étiologies des détresses ventilatoires :",
        options: [
          "Pneumothorax",
          "Hypercapnie",
          "L'asthme aigu grave",
          "L'œdème Quincke",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Asthme aigu grave, obstruction des voies aériennes (œdème de Quincke), pneumothorax, embolie pulmonaire, etc., peuvent causer une détresse respiratoire."
      },
      {
        questionText: "Les signes cliniques d'une crise d’asthme :",
        options: [
          "Gêne respiratoire",
          "Sensation de soif d'air",
          "Dyspnée à l'inspiration",
          "Cyanose des extrémités",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Gêne respiratoire, sensation d'étouffement. La dyspnée est principalement expiratoire. La cyanose est un signe de gravité."
      },
      {
        questionText: "la prise en charge d'urgence d'une crise d’asthme :",
        options: [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux",
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit",
          "Mise en place d'une canule de Guedel"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Position assise, Ventoline inhalée, Corticoïdes IV si sévère. Oxygène à haut débit."
      },
      {
        questionText: "Devant une détresse respiratoire :",
        options: [
          "Vérifier les mouvements respiratoires",
          "Calculer la fréquence respiratoire",
          "Rechercher une cyanose des extrémités",
          "Rechercher un tirage et une contracture des muscles accessoires",
          "Palper le poul carotidien."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'évaluation respiratoire inclut l'observation des mouvements, la mesure de la fréquence, la recherche de signes de lutte et de signes d'hypoxie."
      },
      {
        questionText: "l'hyperventilation est due à",
        options: [
          "Angoisse",
          "Douleur",
          "L'hypercapnie",
          "L'acidose métabolique",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'hyperventilation peut être psychogène, réactionnelle à la douleur, ou compensatoire à une hypercapnie ou une acidose métabolique."
      },
      {
        questionText: "la dyspnée est :",
        options: [
          "Perception consciente d'une gêne respiratoire",
          "peut-être inspiratoire ou expiratoire ou au deux temps",
          "Le diagnostic repose sur la radiographie pulmonaire",
          "Soit une bradypnée soit une polypnée",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Gêne respiratoire consciente, peut être rapide ou lente, inspiratoire/expiratoire/mixte. Diagnostic clinique."
      },
      {
        questionText: "La crise d'asthme est :",
        options: [
          "Accès de dyspnée intense",
          "Peut apparaitre à l'issue d'une anesthésie locale",
          "Sensation de douleur thoracique retro sternale",
          "Dyspnée surtout à l'inspiration",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Accès de dyspnée, potentiellement déclenché par le stress lié aux soins ou un composant de l'anesthésique."
      },
      {
        questionText: "Parmi les circonstances de survenue de la crise d'asthme une est fausse laquelle :",
        options: [
          "Allergique",
          "Après anesthésie locale",
          "Après corticothérapie",
          "Saisonnière en rapport avec la température ambiante",
          "Après un geste douloureux"
        ],
        correctOptionIndexes: [2],
        explanation: "La corticothérapie est un traitement de l'asthme, elle ne déclenche pas de crise. Les autres sont des déclencheurs possibles."
      },
      {
        questionText: "La conduite d'urgence devant une crise d'asthme:",
        options: [
          "Oxygénation au masque 10-15L /mn",
          "Position décubitus dorsal stricte",
          "Ventoline en bouffées",
          "Hemisuccinate d'hydrocortisone 100-200 mg en intraveineux",
          "Amoxicilline forte dose"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Oxygène haut débit, Ventoline inhalée, Corticoïdes IV si besoin. Position assise."
      },
      {
        questionText: "L'évaluation de la fonction respiratoire se fait par :",
        options: [
          "Vérification des mouvements respiratoires",
          "Fréquence respiratoire",
          "Signes de lutte tirage, contracture des muscles accessoires",
          "Le patient ne répond pas aux stimulations, En la prise du pouls carotidien"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Évaluation clinique : observer les mouvements, compter la fréquence, rechercher les signes de lutte."
      },
      {
        questionText: "la dyspnée est :",
        options: [
          "Perception consciente d’un gène respiratoire",
          "Soit inspiratoire soit expiratoir",
          "Un syndrome objectif",
          "Syndrome subjectif ressenti par le patient",
          "Inspiratoire expiratoire ou aux deux temps"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "C'est une sensation subjective de gêne respiratoire. Elle peut survenir à l'inspiration, l'expiration ou les deux."
      },
      {
        questionText: "la crise d'Asthme est :",
        options: [
          "Accès de dyspnée intense.",
          "Apparait à l'issue d'une anesthésie locale",
          "Dyspnée surtout inspiratoire",
          "Le pronostic vital est mis en jeu",
          "N’évolue jamais vers une détresse respiratoire"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Accès de dyspnée, potentiellement déclenché par l'anesthésie/stress. Peut engager le pronostic vital et évoluer en détresse respiratoire."
      },
      {
        questionText: "la prise en charge d'urgence d'une crise d’asthme :",
        options: [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux",
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit",
          "Mise en place d'une canule de Guedel"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Position assise, Ventoline, Corticoïdes IV si sévère. Oxygène haut débit."
      }
    ]
  },
  {
    title: "2016/2017",
    subject: "oxyologie",
    questions: [
        {
            questionText: "L'évaluation de la fonction respiratoire se fait par :",
            options: [
                "Vérification des mouvements respiratoires",
                "Fréquence respiratoire",
                "Signes de lutte tirage, contracture des muscles accessoires",
                "Le patient ne répond pas aux stimulations, En la prise du pouls carotidien"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "L'évaluation de la ventilation se fait en observant les mouvements thoraciques, en comptant leur fréquence et en recherchant des signes de détresse respiratoire. La proposition (D) concerne la conscience et la circulation."
        },
        {
            questionText: "Les médicaments d'urgence au cabinet dentaire :",
            options: [
                "Atropine, Adrénaline, Valium",
                "Hémisuccinate d'hydrocortisone",
                "Amoxicilline",
                "Lidocaïne",
                "Toutes ces réponses sont justes"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La trousse d'urgence doit contenir les médicaments essentiels : Adrénaline, Atropine, Valium® (diazépam), et des corticoïdes injectables."
        },
        {
            questionText: "La conduite d'urgence devant une Inhalation",
            options: [
                "Manœuvre d' HEIMLISCH",
                "Retirer l'objet avec une pince",
                "Éviter de faire tousser le patient",
                "Oxygénothérapie à haut débit",
                "Donner une forte tape dans le dos"
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "Si toux inefficace : 5 tapes dorsales, puis 5 compressions abdominales (Heimlich). L'oxygénothérapie est utile en cas de cyanose. Retirer l'objet n'est possible que s'il est visible."
        },
        {
            questionText: "La prise en charge d'urgence d'un arrêt cardio-vasculaire nécessite :",
            options: [
                "l'appréciation de l'état ventilatoire",
                "l'appréciation de l'état circulatoire",
                "une organisation en chaine de l'accès aux secours",
                "la restauration de la circulation et de la ventilation",
                "toutes ces réponses sont fausses"
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "La prise en charge de l'arrêt cardiaque suit la 'chaîne de survie' : reconnaissance, alerte précoce, et RCP immédiate."
        },
        {
            questionText: "La conduite d'urgence devant un arrêt Cardio-Circulatoire :",
            options: [
                "alerte médicale précoce",
                "liberté des voies aériennes supérieures",
                "ventilation au masque",
                "administration des corticoïdes",
                "massage cardiaque externe"
            ],
            correctOptionIndexes: [0, 1, 2, 4],
            explanation: "La séquence d'action est : Alerter, Libérer les voies aériennes, Ventiler et Masser. Les corticoïdes n'ont pas leur place dans la RCP de base."
        },
        {
            questionText: "Les anesthésiques locaux :",
            options: [
                "Inhibent toutes les fibres nerveuses sensitives",
                "inhibent toutes les fibres nerveuses motrices",
                "inhibent toutes les fibres nerveuses végétatives",
                "inhibent la dépolarisation et la conduction nerveuse d'une manière réversible",
                "bloquent l'orifice intracellulaire du canal sodique"
            ],
            correctOptionIndexes: [0, 1, 2, 3, 4],
            explanation: "Les anesthésiques locaux sont des bloqueurs non spécifiques des canaux sodiques. Ils agissent sur toutes les fibres nerveuses de manière réversible en se liant à la face interne du canal."
        },
        {
            questionText: "La toxicité des anesthésiques locaux dépend de :",
            options: [
                "la dose injectée",
                "Le site d'injection",
                "La vitesse d'injection",
                "L'adjonction d'adrénaline",
                "toutes ces réponses sont justes"
            ],
            correctOptionIndexes: [4],
            explanation: "La toxicité systémique dépend de la concentration plasmatique, qui est influencée par tous ces facteurs."
        },
        {
            questionText: "Les signes cliniques de l'arrêt cardio-respiratoire :",
            options: [
                "Perte de conscience",
                "Abolition des mouvements respiratoires",
                "Présence d'un pouls radial, carotidien, fémoral",
                "Mydriase bilatérale à réactive",
                "signes cutanées : pâleur, marbrures, cyanose."
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "Le diagnostic de l'arrêt cardiaque est : patient inconscient, qui ne respire pas, et sans pouls. Les signes cutanés et la mydriase aréactive sont des conséquences."
        },
        {
            questionText: "La dyspnée est :",
            options: [
                "perception consciente d'une gène respiratoire",
                "soit inspiratoire soit expiratoire",
                "un syndrome objectif",
                "syndrome subjectif ressenti par le patient",
                "inspiratoire expiratoire ou aux deux temps"
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "La dyspnée est la sensation subjective de difficulté à respirer. Elle peut survenir à l'un ou l'autre temps de la respiration, ou aux deux."
        },
        {
            questionText: "La crise d'Asthme est :",
            options: [
                "accès de dyspnée intense.",
                "apparaît à l'issue d'une anesthésie locale",
                "dyspnée surtout inspiratoire"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La crise d'asthme est un accès de dyspnée qui peut être déclenché par le stress ou un allergène. La dyspnée est classiquement à prédominance expiratoire."
        },
        {
            questionText: "La prise en charge d'urgence d'une crise d'asthme :",
            options: [
                "malade en position assise",
                "Hémisuccinate d'hydrocortisone 100 à 200 mg en intraveineux",
                "Ventoline en bouffées",
                "oxygénothérapie à faible débit",
                "mise en place d'une canule de GUEDEL"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "CAT : position assise, Salbutamol/Ventoline, et si crise sévère, oxygénothérapie à haut débit et corticoïdes IV."
        },
        {
            questionText: "L'épilepsie est :",
            options: [
                "Affection neurologique de survenue brutale",
                "spasme musculaire involontaire",
                "des crises convulsives répétées",
                "perte de connaissance",
                "correspond à des crises de syncope répétées."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "L'épilepsie est une affection chronique se manifestant par des crises brutales avec convulsions et souvent perte de connaissance."
        },
        {
            questionText: "Les étiologies des épilepsies sont :",
            options: [
                "hypoglycémie",
                "tumeur cérébral",
                "accident vasculaire cérébral",
                "prise d'alcool",
                "toutes les réponses sont fausses."
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "Une crise convulsive peut être idiopathique ou secondaire à une multitude de causes : métaboliques, lésionnelles ou toxiques."
        },
        {
            questionText: "La conduite d'urgence devant une épilepsie :",
            options: [
                "Arrêter les soins",
                "mettre le patient en position latérale de sécurité",
                "Oxygénothérapie",
                "essayer d'empêcher les mouvements du patient",
                "Administration d'un antalgique."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Il faut protéger le patient, arrêter les soins, et dès la fin de la crise, le mettre en PLS. L'oxygénothérapie est indiquée."
        },
        {
            questionText: "LE malaise vagal est du à :",
            options: [
                "Activité excessive du système parasympathique",
                "activité excessive du système sympathique",
                "ralentissement du rythme cardiaque",
                "élévation de la pression artériel",
                "Perte de connaissance partielle : lipothymie ou totale syncope."
            ],
            correctOptionIndexes: [0, 2, 4],
            explanation: "Le malaise vagal est une hyperstimulation parasympathique, qui entraîne une bradycardie et une hypotension, menant à une lipothymie ou une syncope."
        },
        {
            questionText: "La conduite d'urgence devant un malaise vagal :",
            options: [
                "interrompre les soins",
                "Allonger le patient les jambes surélevées",
                "surveiller la respiration et la circulation",
                "Adrénaline en intraveineux",
                "Corticoïdes en intraveineux"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La prise en charge est simple : arrêt des soins, position de Trendelenburg, et surveillance."
        },
        {
            questionText: "La conduite d'urgence devant un malaise hypoglycémique :",
            options: [
                "Allonger le patient en position de confort",
                "Faire absorber une boisson sucrée",
                "vérifier la vacuité des voies aériennes supérieures",
                "injection d'insuline",
                "injection intraveineuse lente de sérum glucose"
            ],
            correctOptionIndexes: [0, 1, 2, 4],
            explanation: "Si le patient est conscient, resucrage oral. S'il est inconscient, PLS et administration de glucose par voie IV."
        },
        {
            questionText: "La conduite d'urgence devant une hémorragie dentaire est :",
            options: [
                "faire une radiographie panoramique dentaire ou retro alvéolaire",
                "Bilan d'hémostase: TP-INR TCA et une FNS",
                "hémostatique local type Surgicel",
                "faire une compression qui sera maintenue quelques secondes",
                "Faire plusieurs bains de bouche,"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La CAT inclut des mesures locales (compression prolongée, Surgicel) et la recherche d'une cause locale (radio) ou générale (bilan d'hémostase)."
        },
        {
            questionText: "Le terme syncope :",
            options: [
                "Perte de connaissance à début rapide et durée rapide et transitoire",
                "associe une rigidité",
                "Résulte d'un arrêt bref du débit sanguin cérébral",
                "associe un trouble visuel",
                "n'est jamais précédé de prodromes"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "C'est une perte de connaissance brève due à une hypoperfusion cérébrale globale. Elle est souvent précédée de prodromes."
        },
        {
            questionText: "Le choc anaphylactique est :",
            options: [
                "urgence vitale, diagnostique et thérapeutique",
                "Dégranulation des mastocytes et des polynucléaires basophiles",
                "associe des signes cutanés et atteinte multi viscérale",
                "nécessite un traitement par antihistaminiques",
                "nécessite un traitement par adrénaline"
            ],
            correctOptionIndexes: [0, 1, 2, 4],
            explanation: "C'est une urgence absolue due à une réaction allergique systémique. Le traitement vital est l'injection immédiate d'adrénaline."
        }
    ]
  },
  {
    title: "2017/2018",
    subject: "oxyologie",
    questions: [
        {
            questionText: "La conduite d'urgence devant l'inhalation d'un corps étranger :",
            options: [
                "Faire une endoscopie systématiquement",
                "Pratiquer la manœuvre de HEMLISCH",
                "Une oxygénothérapie à haut débit",
                "faire tousser le patient"
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "Si obstruction partielle, encourager la toux. Si obstruction complète, effectuer la manœuvre de Heimlich. L'oxygénothérapie est un complément si besoin."
        }
    ]
  },
  {
    title: "2018/2019",
    subject: "oxyologie",
    questions: [
        {
            questionText: "Les signes cliniques de l'arrêt cardio-respiratoire :",
            options: [
                "perte de conscience",
                "Abolition des mouvements respiratoires",
                "Présence d'un poul radial, carotidien, Fémoral",
                "Mydriase bilatérale réactives"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Le diagnostic repose sur l'inconscience et l'absence de respiration (ou gasps). Le pouls est absent et la mydriase est aréactive."
        }
    ]
  },
  {
    title: "2019/2020",
    subject: "oxyologie",
    questions: [
        {
            questionText: "Devant une crise d'épilepsie il faut.:",
            options: [
                "Arrêter les soins",
                "Assurer une oxygénothérapie",
                "Donner du valium en intramusculaire",
                "Mettre le patient en position latérale",
                "Toutes ces réponses sont fausses"
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "Toutes ces actions sont appropriées : arrêter les soins, protéger le patient, mettre en PLS post-crise, administrer de l'oxygène. Si la crise se prolonge, l'injection de benzodiazépine est indiquée."
        }
    ]
  }
];

module.exports = oxyologieQuizzes;