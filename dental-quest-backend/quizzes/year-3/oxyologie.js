const oxyologieQuizzes = [
  {
    "title": "Accident d’ ingestion et d’ inhalation",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°12 (2025 EMD - Q237\nDevant une inhalation il faut :",
        "options": [
          "Faire la Manœuvre de Heimlisch",
          "Retirer l'objet avec une pince",
          "Faire tousser le patient",
          "Oxygénothérapie à très faible débit",
          "Antibiothérapie en urgence"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Conduite à tenir devant une inhalation :•\tMettre le patient en position assise•\tDemander au patient de tousser ou le faire tousser•\tTourner la tête sur le côté + bon éclairage + retirer l’objet à la pince si visible•\tSi détresse respiratoire → Manœuvre de Heimlich + tapes dans le dos•\tOxygénothérapie : à haut débit (9–15 L/min)•\tAntibiotiques : uniquement après extraction (prévention secondaire), pas en urgence immédiate"
      },
      {
        "questionText": "N°13 (2025 EMD - Q259\nLa liberté des voies aériennes supérieures est assurée par :",
        "options": [
          "Hyperextension de la tète",
          "Flexion de la tête en avant.",
          "Placement de la canule de GUDEL.",
          "Intubation trachéale.",
          "Position déclive stricte"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La canule de Guedel a pour rôle d’empêcher la chute de la langue contre le pharynx."
      },
      {
        "questionText": "N°16 (2025 EMD - Q321\nLa prévention de l'inhalation au cabinet dentaire se base sur:",
        "options": [
          "La sédation profonde du patient",
          "L'entrainement à la manipulation des instruments",
          "L'usage de la digue.",
          "Antalgique avant les soins",
          "Position dorsale stricte"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "A : Eviter la sédationE : c’est un facteur de risque"
      },
      {
        "questionText": "N°17 (2025 EMD - Q341\nConcernant la réaction anaphylactique min",
        "options": [
          "Elle survient souvent 24 heures après exposition au déclencheur",
          "Se manifeste par un état de choc",
          "Se manifeste par un angioeodeme",
          "Atteinte multiviscérale menaçant la vie",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Les réactions anaphylactiques et anaphylactoïdes surviennent le plus souvent dans les 15 minutes suivant l’exposition au déclencheur.B : Chute de tension artérielle provoquant un évanouissement, état de choc » → mais cela concerne les stades II/III/IVC : Signes cutanéo-muqueux généralisés : prurit, urticaire, exanthème, œdème de Quincke pharyngé ou laryngé.D : Atteinte multi-viscérale menaçant la vie : exemple infarctus du myocarde. » ;➡️ Cela correspond au stade III"
      },
      {
        "questionText": "N°19 (2025 EMD - Q384\nLes complications de L'inhalation sont :",
        "options": [
          "Abcès pulmonaire",
          "Pneumonie",
          "Objet bloqué dans l'appareil respiratoire",
          "Détresse respiratoire",
          "Troubles de la conscience"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Complications de l’inhalation) :•\t« Abcès pulmonaire »•\t« Pneumonie »•\t« Les objets bloqués peuvent irriter l’appareil respiratoire et empêcher le passage de l’air » → donc obstruction respiratoire = complication.•\t« Empêcher le passage de l’air » correspond aussi à une détresse respiratoire"
      },
      {
        "questionText": "N°17 (2024 1°EMD - Q636\nDans la manœuvre d'HEMLISCH en cas d' ingestion corps étranger:",
        "options": [
          "Le praticien doit se placer devant le patient",
          "La pression se fait au niveau du thorax",
          "Les deux mains doivent être placés sur l'épigastre",
          "Le praticien exerce une pression du haut vers le bas car c'est une ingestion",
          "Elle ne s'applique pas chez le nourrisson de moins un an."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "le praticien Placé derrière le patient il exerce avec ses mains une pression ferme et brusque, en direction du diaphragme, donc du bas vers le haut,"
      },
      {
        "questionText": "N°19 (2024 1°EMD - Q659\nLa pathogénie de l'inhalation en médecine dentaire s'explique par :",
        "options": [
          "la petitesse des instruments utilisés en dentisterie",
          "La position allongé du patient",
          "La sédation protège contre l'inhalation",
          "La sédation favorise l'inhalation",
          "La pathogénie de l'inhalation n'est pas encore connue"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "la sédation entraînant une diminution du réflexe de protection des voies aériennes"
      },
      {
        "questionText": "N°18 (2023 1°EMD - Q970\nLa conduite d’urgence devant l’inhalation d’un corps étranger:",
        "options": [
          "Oxygénothérapie",
          "Manœuvre de HEMLISCH",
          "Bronchoscopie si nécessaire",
          "Antibiothérapie",
          "Adrénaline à 1 mg en intraveineux"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2022 1°EMD - Q1237\nLes complications de l'inhalation sont :",
        "options": [
          "Détresse respiratoire aigue",
          "Troubles de la conscience",
          "Abcès pulmonaire",
          "Une bradycardie",
          "Une hypoglycémie"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les objets bloqués peuvent irriter l’appareil respiratoire et empêcher le passage de l’air"
      },
      {
        "questionText": "N°20 (2022 1°EMD - Q1272\nconduite à tenir devant une inhalation :",
        "options": [
          "Manœuvre de HEMLISCH",
          "Retirer  l’objet avec une pince",
          "Faire une tape sur le dos",
          "Oxygénothérapie à haut débit",
          "Oxygénothérapie à faible débit"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2021 1°EMD - Q1521\ndevant l’ingestion d’un corps étranger :",
        "options": [
          "Assurer la ventilation du patient",
          "Faire radiographie pour localiser le corps étranger",
          "Faire une manœuvre  de HEMLISCH",
          "Restaurer un régime pauvre en fibres",
          "Prescription d’antibiotiques et d’anti-inflammatoires"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "l’ingestion d’un corps étranger, la conduite à tenir comprend :Assurer la ventilation du patient → sécurité vitaleFaire radiographie pour localiser le corps étrangerPrescrire antibiotiques et anti-inflammatoires si nécessaireSurveiller les selles et favoriser un régime riche en fibres pour faciliter l’élimination naturelle"
      },
      {
        "questionText": "N°19 (2021 1°EMD - Q1624\nles complications de l’inhalation sont :",
        "options": [
          "Abcès pulmonaire",
          "Hypertension artérielle",
          "Objet bloqué dans l’appareil respiratoire",
          "Détresse respiratoire",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2020 1°EMD - Q1881\nDevant une inhalation:",
        "options": [
          "Faire la manœuvre d' HEIMLISCH",
          "Retirer l'objet avec une pince",
          "Eviter de faire tousser le patient",
          "Oxygénothérapie a faible débit",
          "Donner une forte tape dans le dos"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2019 1°EMD - Q2259\nla conduite d'urgence devant une inhalation :",
        "options": [
          "Manœuvre de HEIMLISCH",
          "Retrait de l'objet avec une pince",
          "Faire tousser le patient",
          "Oxygénothérapie à faible débit",
          "Donner une forte tape dans le dos"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L es corps étrangers sont expulsés dans 90% des cas par les voies naturelles. une fibroscopie sera nécessaire pour retirer le corps étranger sous anesthésie générale"
      },
      {
        "questionText": "N°1 (2018 1°EMD - Q2293\nLa conduite d'urgence devant l'inhalation d'un corps étranger :",
        "options": [
          "Faire une endoscopie systématiquement",
          "Pratiquer la manœuvre de HEMLISCH",
          "Une oxygénothérapie à haut débit",
          "Faire tousser le patient",
          "Antibiothérapie a large spectre"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "la conduite d’urgence devant l’inhalation d’un corps étranger comprend :Mettre le patient en position assiseFaire tousser le patient ou l’aider à tousserTaper vigoureusement dans le dos si obstruction partielle (en alternant avec la manœuvre de Heimlich si nécessaire)Oxygénothérapie à haut débit en cas de détresse respiratoireAppeler le SAMU si détresse respiratoire sévère"
      },
      {
        "questionText": "N°9 (2018 1°EMD - Q2432\nl'accident d'inhalation est du :",
        "options": [
          "Position allongé du patient",
          "Petitesse de l'instrumentation utilisé en dentisterie",
          "Diminution des réflexes de protection des voies aériennes supérieures par la sédation",
          "Proximité des voies aériennes et de la zone du praticien",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2017 1°EMD - Q2652\nconduite à tenir devant une inhalation :",
        "options": [
          "Manœuvre de HEMLISCH",
          "Retirer  l’objet avec une pince",
          "Faire une tape sur le dos",
          "Oxygénothérapie à haut débit",
          "Donner une forte tape dans le dos"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3,
          4
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Choc anaphylactique",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°8 (2025 EMD - Q161\nLa conduite thérapeutique d'un choc anaphylactique se base sur :",
        "options": [
          "Histamine en comprimé",
          "Massage cardiaque externe",
          "Adrénaline 0,1 mg en intraveineux",
          "Remplissage vasculaire par des cristalloïdes",
          "Remplissage vasculaire par du sérum glucosé"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "\tLes mesures générales :Arrêt de l’allergèneOxygénation + libération des VASRemplissage vasculaire par des cristalloïdes (10–20 ml/kg)Surélévation des membres inférieurs ou mettre le malade en positon de Trendelenburg.\tLe traitement spécifique :Adrénaline 0,1 mg IV (bolus répétés si besoin, ou 1 mg IV si stade IV)Corticoïdes (effet retardé)Antihistaminiques = inutiles en urgence\tEn cas d’arrêt circulatoire → massage cardiaque externe."
      },
      {
        "questionText": "N°16 (2023 1°EMD - Q936\nLes signes cliniques du stade l du choc anaphylactique sont:",
        "options": [
          "Prurit palmo-plantaire",
          "OEdème de Quincke pharyngé",
          "Hypotension",
          "Tachycardie",
          "Atteinte multi viscérale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Stade I : signes cutanéo-muqueux généralisés (Prurit palmo-plantaire, urticaire, exanthème, oedème de Quincke pharyngé ou laryngé."
      },
      {
        "questionText": "N°17 (2023 1°EMD - Q941\nLe choc anaphylactique:",
        "options": [
          "Urgence diagnostic et thérapeutique",
          "Dé granulation des éosinophiles",
          "Entraine une vasoplégie",
          "Entraine une vasodilatation",
          "Traité par adrénaline"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Dégranulation des mastocytes et des PN basophilesTraité en fonction du stade"
      },
      {
        "questionText": "N°18 (2023 1°EMD - Q962\nLa conduite à tenir devant un choc anaphylactique:",
        "options": [
          "Assurer la liberté des voies aériennes supérieures et oxygénothérapie",
          "Adrénaline en intraveineux",
          "Remplissage vasculaire par sérum glucosé 10 %",
          "Remplissage vasculaire par cristalloïdes",
          "Histamine en intraveineux"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2022 1°EMD - Q1219\nLe diagnostic d'un choc anaphylactique :",
        "options": [
          "Œdème de Quinck laryngé",
          "Hyperréactivité bronchiques",
          "Hypotension artérielle",
          "Hypertension artérielle",
          "Bradycardie"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "hypotension,tachycardie et hyperréactivité bronchique."
      },
      {
        "questionText": "N°17 (2022 1°EMD - Q1226\nLe choc anaphylactique est :",
        "options": [
          "Urgence vitale et thérapeutique",
          "Dégranulation des mastocytes",
          "Dégranulation des éosinophiles",
          "Traité par adrénaline",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Traité En fonction du stade clinique"
      },
      {
        "questionText": "N°12 (2021 1°EMD - Q1516\nle choc anaphylactique est :",
        "options": [
          "Urgence vitale et thérapeutique",
          "Dégranulations des mastocytes et des polynucléaires basophiles",
          "Traité par antihistaminiques",
          "Traité par adrénaline",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2020 1°EMD - Q1765\nLe choc anaphylactique nécessite :",
        "options": [
          "un traitement par adrénaline",
          "Antihistaminiques",
          "Corticoïdes",
          "massage cardiaque externe",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2020 1°EMD - Q1779\nAu cours du choc anaphylactique on observe :",
        "options": [
          "Prurit palmo -plantaire",
          "Exanthème",
          "œdème de Quincke",
          "Atteints multi-Viscérale",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2020 1°EMD - Q1795\nLe choc anaphylactique est :",
        "options": [
          "Une urgence vitale et diagnostique",
          "due à une dégranulation des mastocytes",
          "Secondaire à une réaction allergique",
          "Lié à une vasoplégie",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2019 1°EMD - Q2109\nle choc anaphylactique est :",
        "options": [
          "Etat de choc par pénétration d'allergènes",
          "Etat de choc par pénétration d'haptènes",
          "Dû à la dégranulation des mastocytes",
          "Dû à la dégranulation des polynucléaires basophiles",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2019 1°EMD - Q2125\nL'anaphylaxie est :",
        "options": [
          "Une Réaction allergique sévère",
          "Difficulté respiratoire",
          "Choc anaphylactique",
          "Du à une hypo volémie",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2019 1°EMD - Q2137\nL'état de choc est :",
        "options": [
          "Souffrance cellulaire",
          "Défaut de perfusion tissulaire",
          "Chute importante de la pression artérielle",
          "Défaut de production d'ATP",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2019 1°EMD - Q2224\nLe choc anaphylactique est :",
        "options": [
          "Urgence vital, diagnostique et thérapeutique",
          "dégranulation des mastocytes et polynucléaires basophiles",
          "Associe des signes cutanés et atteinte multi viscérale",
          "Nécessite un traitement par antihistaminique",
          "Nécessite un traitement par Adrénaline"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2017 1°EMD - Q2827\nle choc anaphylactique est :",
        "options": [
          "Urgence vitale, diagnostique et thérapeutique",
          "Dégranulation des mastocytes et des polynucléaires basophiles",
          "Associe des signes cutanés et atteinte multi viscérale",
          "Nécessite un traitement par antihistaminiques.",
          "Nécessite un traitement par adrénaline"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "CRISES CONVULSIVES ET EPILEPSIES",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°15 (2023 1°EMD - Q901\nParmi les impacts de l’épilepsie sur la cavité buccale on note :",
        "options": [
          "Traumatisme dentaire",
          "Blessure gingivales",
          "Hypersialorie",
          "Hypoplasie gingivale",
          "Cariosensibilité"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "hyposialiehyperplasie gingivale d’ origine médicamenteuse"
      },
      {
        "questionText": "N°2 (2020 1°EMD - Q1710\nDevant une crise d'épilepsie il faut.:",
        "options": [
          "Arrêter les soins",
          "Assurer une oxygénothérapie",
          "Donner du valium en intramusculaire",
          "Mettre le patient en position latérale",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2020 1°EMD - Q1732\nles impacts des antiépileptiques sur la cavité buccale sont :",
        "options": [
          "Hyperplasie gingivale",
          "Hyposialie",
          "cardiosensibilité",
          "Toutes ces réponses sont justes",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2020 1°EMD - Q1740\nParmi les étiologies de l'épilepsie :",
        "options": [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Accident vasculaire cérébral",
          "Intoxication aux analgésiques",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2020 1°EMD - Q1763\nL'épilepsie est une affection neurologique :",
        "options": [
          "Due à des spasmes musculaires involontaires",
          "Due à une activité exagérée des neurones",
          "Se manifeste par des crises convulsives répétées",
          "Toutes ces réponses sont fausses",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2019 1°EMD - Q2212\nla prise en charge d'une convulsion :",
        "options": [
          "Une oxygénothérapie",
          "Vérifier la respiration et le poul",
          "Le dosage de la glycémie",
          "L'administration d'anesthésiques",
          "Assurer la liberté des voies aériennes supérieures"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2018 1°EMD - Q2448\nDevant une crise d'épilepsie :",
        "options": [
          "Arrêter les soins",
          "Continuer les soins",
          "Vérifier la respiration et le poul carotidien",
          "Oxygénothérapie",
          "Empêcher les mouvements du patient"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2018 1°EMD - Q2575\nles étiologies des crises convulsives sont :",
        "options": [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Prise d'alcool",
          "Accident vasculaire cérébrale",
          "Injection de Valium en intramusculaire"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2017 1°EMD - Q2759\nL'épilepsie est :",
        "options": [
          "Affection neurologique de survenue brutale",
          "Spasme musculaire involontaire",
          "Des crises convulsives répétées",
          "Perte de connaissance",
          "Correspond à des crises de syncope répétées."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2017 1°EMD - Q2770\nles étiologies des épilepsies sont :",
        "options": [
          "Hypoglycémie",
          "Tumeur cérébrale",
          "Accident vasculaire cérébral",
          "Prise d'alcool",
          "Toutes les réponses sont fausses."
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
        "questionText": "N°14 (2017 1°EMD - Q2784\nla conduite d'urgence devant une épilepsie :",
        "options": [
          "Arrêter les soins",
          "Mettre le patient en position latérale de sécurité",
          "Oxygénothérapie",
          "Essayer d'empêcher les mouvements du patient",
          "Administration d'un antalgique"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Détresse cardio-circulatoire",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°10 (2025 EMD - Q187\nL'arrêt cardiaque peut survenir en cas:",
        "options": [
          "D 'hypovolémie",
          "Hyperoxie",
          "Fibrillation ventriculaire",
          "Embolie pulmonaire",
          "Traumatique par plaie artérielle"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L’arrêt Cardio-circulatoire peut survenir :•\tPar hypovolémie•\tPar hypoxie•\tPar fibrillation ventriculaireA – Étiologies cardiovasculaires :•\tFibrillation ventriculaire•\tEmbolie pulmonaire massive•\tÉtats de choc, infarctus du myocarde massif•\tTroubles de la conduction•\tTraumatiques : plaie artérielle•\tTamponnade"
      },
      {
        "questionText": "N°11 (2025 EMD - Q212\nParmi les causes respiratoires d'arrêt cardiaque :",
        "options": [
          "Asthme aigue grave",
          "Embolie pulmonaire",
          "Hypovolémie",
          "Hyperkaliémie",
          "Syndrome de GUILLAIN BARRE"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Causes respiratoires d’arrêt cardiaque•\tAsthme aigu grave•\tPneumothorax•\tObstruction des voies aériennes par un corps étranger•\tHypoxémie"
      },
      {
        "questionText": "N°14 (2025 EMD - Q269\nLe massage cardiaque est réalisé :",
        "options": [
          "Sur un patient en décubitus dorsal",
          "la zone d'appuie est les 1/3 supérieur et 2/3 inferieur du sternum",
          "La compression est de 10cms de profondeur",
          "La compression est de 5 à 6 cms de profondeur.",
          "Les épaules sont à l'aplomb de la poitrine de la victime."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "A : Le patient est couchée sur le dos sur un plan dur « décubitus dorsalB : Déterminer la zone d'appui qui est la jonction du 1/3 inférieur avec les 2/3 supérieurs du sternumC : Bras tendus, comprimez verticalement le sternum en l'enfonçant de 5 à 6 cm"
      },
      {
        "questionText": "N°8 (2024 1°EMD - Q506\nLa conduite devant un arrêt Cardiocirculatoire est:",
        "options": [
          "Alerte médicale précoce",
          "Liberté des voies aériennes supérieures",
          "Ventilation au lunettes à 02",
          "Massage cardiaque externe",
          "Injection de 15 mg d'adrénaline en IV"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La chaine de survie se compose de 4 maillons :1-Alerte précoce2-RCP précoce3-Défibrilation précoce4-Réanimation spécialisée préhospitalière et hospitalière"
      },
      {
        "questionText": "N°9 (2024 1°EMD - Q521\nParmi les étiologies de l'arrêt cardiaque",
        "options": [
          "Fibrillation ventriculaire",
          "Embolie pulmonaire massive",
          "Crise hypertensive",
          "Syndrome de GUILLAIN BARRE",
          "Hyperkaliémie"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2024 1°EMD - Q534\nL'arrêt cardiaque est :",
        "options": [
          "Urgence absolue",
          "Aboutit à une anoxie cérébrale",
          "La mort neuronale survient en 2 mn en l'absence de réanimation",
          "Se traduit par un ECG plat",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La mort neuronale survient en 4 à 6 minutes en l’ absence de Réanimation adéquate."
      },
      {
        "questionText": "N°11 (2024 1°EMD - Q555\nLe diagnostic de l'arrêt cardiaque se pose par:",
        "options": [
          "Marbrures",
          "Myosis bilatéral",
          "Absence du pouls fémoral",
          "Présence d'une ventilation sans GASPS",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Absence de respiration=abolition des mouvements respiratoire s +/- Gasps."
      },
      {
        "questionText": "N°16 (2024 1°EMD - Q617\nLa compression thoracique lors du massage cardiaque :",
        "options": [
          "Doit être profonde de 10 cms",
          "Au rythme de 30 compressions et 2 insufflations",
          "Au rythme de 20 compressions et 2 insufflations",
          "La zone de compression est le 1/3 supérieur et 2/3 inferieurs",
          "Les bras doivent être en flexion"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Doit être profonde de 5 cms sans dépasser 6cms la zone d'appui qui est la jonction du 1/3 inférieur avec les 2/3 supérieurs du sternum Bras tendus,"
      },
      {
        "questionText": "N°8 (2023 1°EMD - Q787\nDevant un arrêt cardio-circulatoire :",
        "options": [
          "Alerte médicale précoce",
          "Liberté des voies aériennes supérieures",
          "Ventilation aux lunettes d’oxygène",
          "Massage cardiaque externe",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2022 1°EMD - Q1074\nParmi ces étiologies d'arrêt cardiaque une est fausse :",
        "options": [
          "Plaie artérielle",
          "Hyperkaliémie",
          "Hyperoxie",
          "Fibrillation ventriculaire",
          "Asthme aigue grave"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C : hypoxie"
      },
      {
        "questionText": "N°6 (2022 1°EMD - Q1087\nLes signes cliniques d’un arrêt cardiaque sont :",
        "options": [
          "Myosis serré bilatéral",
          "Mydriase bilatérale",
          "Absence de poul radial",
          "Un poul fémoral battant",
          "Hyperventilation"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Absence de réponse=perte de connaissanceAbsence de respirationAbsence de pouls Radial ,carotidien, fémoral.Modification du diamètre des pupilles myosis,puis Mydriase bilatérale aréactiveSignes cutanés : marbrures cyanose,pâleur"
      },
      {
        "questionText": "N°7 (2022 1°EMD - Q1110\nLe massage cardiaque se fait :",
        "options": [
          "Patient en décubitus dorsal",
          "Après liberté des voies aériennes supérieures",
          "Bras fléchis",
          "Alternance de 10 compressions et 5 insufflations",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Faire une Extension de la tète30 compressions et 2 insufflations."
      },
      {
        "questionText": "N°11 (2021 1°EMD - Q1503\nle massage cardiaque externe se fait :",
        "options": [
          "Compression thoracique par le praticien",
          "Alternance de 10 compressions et 1 insufflation",
          "Patient couché en décubitus dorsal",
          "Patient couché en décubitus latéral",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : « Après avoir libéré les voies aériennes, la prise en charge sera différente si le praticien est seul ou en présence de personnel formé. S’il n’est pas seul, le praticien débute le massage… ».B : « 30 compressions pour 2 insufflations »."
      },
      {
        "questionText": "N°14 (2021 1°EMD - Q1534\ndevant une mort subite par fibrillation ventriculaire :",
        "options": [
          "Faire un choc électrique externe",
          "Le choc électrique est de 1500-200 joules",
          "Les 2 électrodes sont placées sous l’épaule droite",
          "La défibrillation se fait par défibrillateur",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "B : Défibrillation =choc électrique de 150 à 200 joules biphasiqueL’une se place au-dessous de la clavicule droite l’autre sur le côté gauche du thorax, 5 à 10 cm au-dessous de l’aisselle."
      },
      {
        "questionText": "N°9 (2020 1°EMD - Q1805\nL'arrêt cardio circulatoire :",
        "options": [
          "une interruption brutale de la circulation",
          "une interruption brutale de la ventilation",
          "aboutit à une hyperoxic cérébral",
          "Toutes ces réponses sont fausses",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "interruption brutale de la circulation et de la ventilation aboutissant à une anoxie"
      },
      {
        "questionText": "N°10 (2020 1°EMD - Q1824\nL'arrêt cardio-circulatoire survient par :",
        "options": [
          "Hypovolémie",
          "Hypoxie",
          "Fibrillation ventriculaire",
          "Intoxication au CO",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2020 1°EMD - Q1841\nconduite d'urgence d'un arrêt cardio-vasculaire :",
        "options": [
          "Massage cardiaque externe",
          "Injection de 1 mg d'adrénaline en intraveineux",
          "Injection de 20mg d'adrénaline en intraveineux",
          "Intubation et oxygénothérapie",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2019 1°EMD - Q1965\nLes signes cliniques de l'arrêt cardio-respiratoire :",
        "options": [
          "Abolition du poul carotidien et radial",
          "Myosis serré",
          "Mydriase bilatérale",
          "Respiration normale",
          "Conscience normale"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : Absence de pouls Radial ,carotidien, fémoral.D : Absence de respiration=abolitionE : Absence de réponse=perte de connaissance"
      },
      {
        "questionText": "N°8 (2019 1°EMD - Q2096\nLes étiologies de l'arrêt cardiaque sont :",
        "options": [
          "Hypoxie",
          "Hypo volémie",
          "Fibrillation ventriculaire",
          "Intoxication médicamenteuse",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2019 1°EMD - Q2248\nla prise en charge d'urgence d'un arrêt cardio-circulatoire nécessite :",
        "options": [
          "L'appréciation de l'état respiratoire",
          "L'appréciation de l'état circulatoire",
          "Une organisation en chaine de l'accès au secours",
          "La restauration de la circulation et de la ventilation",
          "Toutes ces réponses sont fausses"
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
        "questionText": "N°2 (2018 1°EMD - Q2304\nla réanimation cardio-pulmonaire de base repose sur :",
        "options": [
          "vérifier la réactivité",
          "liberté des voies aériennes supérieures par extension de la tete",
          "liberté des voies aériennes par flexion de la tête",
          "ventilation au masque",
          "ventilation aux lunettes d'oxygène"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2018 1°EMD - Q2375\nl'arrêt cardio-circulatoire est :",
        "options": [
          "Une interruption brutale de la circulation",
          "Une interruption brutale de la ventilation",
          "Aboutit à une anoxie cérébrale",
          "La mort neuronale survient après une demi-heure en absence de réanimation",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "D : La mort neuronale survient en 4 à 6 minutes en l’ absence de Réanimation adéquate."
      },
      {
        "questionText": "N°7 (2018 1°EMD - Q2407\nLes causes de l'arrêt cardio-circulatoire :",
        "options": [
          "Etats de choc",
          "Plaie artérielle",
          "Asthme aigue grave",
          "Intoxication médicamenteuse",
          "toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2018 1°EMD - Q2596\nla prise en charge d'urgence d'un arrêt cardio-circulatoire nécessite :",
        "options": [
          "L'appréciation de l'état ventilatoire",
          "L'appréciation de l'état circulatoire",
          "Une organisation en chaine de l'accès au secours",
          "La restauration de la circulation et de la ventilation",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2017 1°EMD - Q2666\nla conduite d'urgence devant un arrêt Cardio-Circulatoire :",
        "options": [
          "Alerte médicale précoce",
          "Liberté des voies aériennes supérieures",
          "Ventilation au masque",
          "Administration des corticoïdes",
          "Massage cardiaque externe"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2017 1°EMD - Q2722\nles signes cliniques d'un arrêt cardio-circulatoire :",
        "options": [
          "perte de conscience",
          "Abolition des mouvements respiratoires",
          "Présence d'un poul radial, carotidien, Fémoral",
          "Mydriase bilatérale réactives",
          "Signe cutanées pâleur, marbrures. Cyanose"
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Détresse neurologique",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°18 (2025 EMD - Q347\nOn évalue la fonction neurologique par:",
        "options": [
          "Evaluation de la réponse verbale",
          "Evaluation de réaction motrice",
          "Evaluation de la sensibilité",
          "L'ouverture des yeux",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L’évaluation neurologique, qui se fait par :•\tRéponse verbale•\tRéaction motrice•\tOuverture des yeux•\tÉvaluation de la sensibilité"
      },
      {
        "questionText": "N°13 (2023 1°EMD - Q872\nLe choc vagal:",
        "options": [
          "Est une activité excessive du système parasympathique",
          "Est une activité excessive du système sympathique",
          "S’exprime par une bradycardie",
          "S’exprime par une tachycardie",
          "S’exprime par une perte de connaissance"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "une baisse de l activité sympathique.S’exprime par un ralentissement du rythme cardiaque"
      },
      {
        "questionText": "N°14 (2023 1°EMD - Q887\nLes facteurs déclenchant d’un malaise hypoglycémiquee choc vagal:",
        "options": [
          "Stress",
          "Atteinte hépatique",
          "Insuffisance cardiaque",
          "Surdosage en antidiabétiques",
          "Surdosage en anesthésiques locaux"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "chez les patients non diabétiques: état de jeûne ou régime alimentaire inadapté /stress/alcoolisme /atteinte hépatique.chez les diabétiques connus: insuffisance d’ apport en glucose/ infections /insuffisance rénale /surdosage en antidiabétiques /interférences médicamenteuses"
      },
      {
        "questionText": "N°11 (2022 1°EMD - Q1153\nLE MALAISE vagal est du :",
        "options": [
          "Activité excessive du sympathique",
          "Activité excessive du parasympathique",
          "Hypoglycémie",
          "Douleur aigue",
          "Atmosphère surchauffée"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "une activité excessive du système nerveux parasympathique ou une baisse de l activité sympathique."
      },
      {
        "questionText": "N°12 (2022 1°EMD - Q1171\nDevant un malaise vagal",
        "options": [
          "Surveiller la respiration et la circulation",
          "Ne jamais interrompre les soins",
          "Surélever les jambes",
          "Allonger le patient en décubitus dorsal",
          "Injecter 1 mg d’adrénaline"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2022 1°EMD - Q1181\nLa syncope:",
        "options": [
          "Est une perte de connaissance brève",
          "Est suivie d'un retour spontané de conscience",
          "Résulte d’une augmentation du débit sanguin cérébral",
          "Perte transitoire du tonus postural",
          "Peut être reflexe vaso-vagale"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Ce symptôme résulte d’ une diminution subite ou d’ un arrêt bref du débit sanguin cérébrale"
      },
      {
        "questionText": "N°15 (2022 1°EMD - Q1203\na syncope Non cardiaque :",
        "options": [
          "Survient en station debout prolongée",
          "après phase prodromique",
          "Survient sans phase prodromique",
          "Reprise de conscience sur place",
          "Reprise de conscience quelques heures"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2020 1°EMD - Q1893\nLe malaise vagal est du à :",
        "options": [
          "Activité excessive du système parasympathique",
          "Inhibition du système sympathique",
          "Bradycardie",
          "Hypertension artérielle",
          "Hypotension"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2020 1°EMD - Q1898\nLa conduite d'urgence devant un malaise vagal :",
        "options": [
          "Interrompre les soins",
          "Allonger le patient les jambes surélevées",
          "Adrénaline en intraveineux",
          "hémisuccinate d'hydrocortisone",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2019 1°EMD - Q1991\nLe malaise vagale est due à :",
        "options": [
          "Activité basse du système parasympathique",
          "Activité excessive du système sympathique",
          "Accélération du rythme cardiaque",
          "Elévation de la pression artérielle",
          "Perte de connaissance : lipothymie ou syncope"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Il se manifeste par :Ralentissement du rythme cardiaque. ;Chute de la pression artérielle.très brève partielle lipothymie / totale syncope"
      },
      {
        "questionText": "N°17 (2019 1°EMD - Q2226\nconduite d'urgence devant un malaise hypoglycémique :",
        "options": [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée",
          "Vérifier la vacuité des voies aériennes supérieures",
          "Injection d'Insuline",
          "Injection Intraveineuse lente de sérum salé"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "injection en intra veineux lente de 10 à 20 ml de sérum glucosé"
      },
      {
        "questionText": "N°15 (2017 1°EMD - Q2794\nLE malaise vagal est du à :",
        "options": [
          "Activité excessive du système parasympathique",
          "Activité excessive du système sympathique",
          "Ralentissement du rythme cardiaque",
          "Élévation de la pression artérielle",
          "Perte de connaissance partielle : lipothymie ou totale syncope."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2017 1°EMD - Q2802\nla conduite d'urgence devant un malaise vagal :",
        "options": [
          "Interrompre les soins",
          "Allonger le patient les jambes surélevées",
          "Surveiller la respiration et la circulation",
          "Adrénaline en intraveineux",
          "Corticoïdes en intraveineux"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2017 1°EMD - Q2808\nla conduite d'urgence devant un malaise hypoglycémique :",
        "options": [
          "Allonger le patient en position de confort",
          "Faire absorber une boisson sucrée",
          "Vérifier la vacuité des voies aériennes supérieures",
          "injection d'insuline",
          "Injection intraveineuse lente de sérum glucose"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2017 1°EMD - Q2822\nle terme syncope :",
        "options": [
          "Perte de connaissance à début rapide et durée rapide et transitoire",
          "Associe une rigidité",
          "Résulte d'un arrêt bref du débit sanguin cérébral",
          "Associe un trouble visuel",
          "N’est jamais précédé de prodromes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Détresse respiratoire aigue",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°5 (2025 EMD - Q102\nLa détresse ventilatoire au cabinet dentaire peut être due:",
        "options": [
          "Crise d'asthme",
          "infection de plusieurs dents",
          "œdème de Quincke",
          "Neuropathie chronique",
          "Surdosage en Xylocaïne"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Parmi les causes de détresse ventilatoire au cabinet dentaire, on retrouve :\n• Crise d’asthme \n• Œdème de Quincke (réaction allergique grave avec obstruction des voies aériennes)\n• Surdosage en Xylocaïne (toxicité des anesthésiques locaux → convulsions, troubles respiratoires, voire arrêt)"
      },
      {
        "questionText": "N°20 (2025 EMD - Q402\nLa crise d' asthme est :",
        "options": [
          "Une dyspnée expiratoire",
          "Une dyspnée inspiratoire",
          "Râles sibilants sont retrouvés à l'auscultation",
          "Râles sous crépitants sont retrouvés à l'auscultation",
          "Peut être secondaire à une anesthésie locale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : La crise d’asthme se manifeste par une dyspnée marquée surtout à l’expirationD : Les râles sous-crépitants sont plutôt en faveur d’un œdème aigu du poumon"
      },
      {
        "questionText": "N°12 (2024 1°EMD - Q562\nLe diagnostic clinique de crise d' Asthme",
        "options": [
          "Accès de dyspnée de type expiratoire",
          "Toux sèche et pénible",
          "Des râles sibilants à l'auscultation",
          "Des râles crépitants à l'auscultation",
          "Un tirage sus sternal et intercostal"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C’est une dyspnée survenant à l’ expiration"
      },
      {
        "questionText": "N°13 (2024 1°EMD - Q574\nLe traitement d'une crise d' asthme sévère repose sur :",
        "options": [
          "Oxygénothérapie au débit de 1 L/mn",
          "Hémisuccinate d'hydrocortisone 100 mg en IV",
          "Bricanyl en IVX",
          "Position décubitus dorsal stricte",
          "Adrénaline 3 mg en aérosol"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Oxygénation au masque 10 à 15 l/mn à haut débit"
      },
      {
        "questionText": "N°14 (2024 1°EMD - Q591\nLe malaise vagal est :",
        "options": [
          "Trouble de la conscience régressif",
          "lié à l'augmentation de l'activité sympathique",
          "lié à l'augmentation de l'activité parasympathique",
          "Lié à la baisse de l'activité parasympathique",
          "la douleur aigue est l'un de ses facteurs déclenchants"
        ],
        "correctOptionIndexes": [
          0,
          2,
          4
        ],
        "explanation": "pouvant être du à: une activité excessive du système nerveux parasympathique ou une baisse de l activité sympathique."
      },
      {
        "questionText": "N°7 (2023 1°EMD - Q784\nParmi les étiologies de détresse respiratoire:",
        "options": [
          "Inhalation d’un corps étranger",
          "Accident d’ingestion de corps étranger",
          "L’hypocapnie",
          "Œdème de Quincke",
          "Alcalose métabolique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1-PNEUMONIE :inhalation de liquide gastrique2-ASTHME3-OBSTRUCTIONS DES VOIES AERIENNES SUPERIEURES PAR UN CORPS ETRANGER4-EMBOLIE PULMONAIRE5-COLLAPSUS PULMONAIRE =pneumothorax6-ORIGINES CARDIAQUES"
      },
      {
        "questionText": "N°9 (2023 1°EMD - Q811\nla conduite d’urgence devant une crise d’asthme:",
        "options": [
          "La position assise",
          "Oxygène à faible débit",
          "Ventoline en bouffées",
          "Corticoïdes en IV",
          "Mise en place d’une canule de GUEDEL"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Oxygène à haut débit"
      },
      {
        "questionText": "N°10 (2023 1°EMD - Q828\nLa dyspnée est:",
        "options": [
          "Urgence respiratoire",
          "Polypnée ou Bradypnée",
          "Toujours inspiratoire",
          "Relâchement des muscles abdominaux",
          "N’as pas de retentissement sur la pression artérielle"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "ée peut être inspiratoire ;éxpiratoire ou au 2 temps. -contracture des muscles abdominaux,cyanose,sueures-Retentissement hémodynamique et psychique."
      },
      {
        "questionText": "N°14 (2022 1°EMD - Q1196\nLa prise en charge d' une crise d'asthme:",
        "options": [
          "Malade en position demi assise",
          "Ventoline en bouffées",
          "Amoxicilline en intraveineux",
          "Atropine en sous cutané",
          "Mise en place d'une canule de GUEDEL"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-Crise d’ asthme avec des manifestations cutanées =Hémsuccinate d’hydrocortisone:100 à 200 mg en intraveineux -Crise d’ asthme survenant chez un asthmatique connu = Ventoline en boufées *Bricanyl en aéorosols ou en intraveineux"
      },
      {
        "questionText": "N°19 (2022 1°EMD - Q1248\nla dyspnée :",
        "options": [
          "Une géne respiratoire",
          "Survient à l’effort ou au repos",
          "Peut être inspiratoire  ou expiratoire",
          "Soit une polypnée ou une bradypnée",
          "Est toujours inspiratoire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2021 1°EMD - Q1569\na dyspnée :",
        "options": [
          "Simple gêne respiratoire",
          "Survient au repos ou à l’effort",
          "Soit polypnée ou bradypnée",
          "Est toujours inspiratoire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "a polypnée à la bradypnée voir apnée-Dyspnée peut être inspiratoire ;éxpiratoire ou au 2 temps."
      },
      {
        "questionText": "N°18 (2021 1°EMD - Q1613\nla conduite à tenir devant une détresse respiratoire :",
        "options": [
          "Assurer la liberté des voies aériennes supérieures",
          "Injecter 1 mg d’adrénaline en IV",
          "Oxygénothérapie",
          "Position latérale de sécurité",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2021 1°EMD - Q1632\nla crise d’asthme :",
        "options": [
          "Respiration sifflante",
          "D’origine allergique",
          "Ne s’accompagne jamais d’agitation",
          "Dyspnée expiratoire",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C : s’accompagne d’une cyanose, des sueurs et une agitationC’est une dyspnée survenant à l’ expiration"
      },
      {
        "questionText": "N°12 (2020 1°EMD - Q1848\nLa dyspnée :",
        "options": [
          "Survient au repos ou à l'effort",
          "Est une bradypnée ou polypnée",
          "Est une apnée",
          "peut être inspiratoire ou expiratoire",
          "Se diagnostique à la radiographie"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "e diagnostic repose sur l’ anamnèse- l’étude des antécédents médicaux-les tests permettent de cibler l’ étiologie"
      },
      {
        "questionText": "N°13 (2020 1°EMD - Q1872\nla crise d'Asthme est :",
        "options": [
          "Accès de dyspnée intense",
          "Apparait à l'issue d'une anesthésie locale",
          "Dyspnée surtout inspiratoire",
          "Le pronostic vital est mis en jeu",
          "N’évolue jamais vers une détresse respiratoire"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Une crise d'asthme non contrôlée peut évoluer vers une détresse respiratoire sévère, en particulier si elle n'est pas traitée ou si le traitement n'est pas adéquat."
      },
      {
        "questionText": "N°17 (2020 1°EMD - Q1906\nles étiologies des détresses ventilatoires :",
        "options": [
          "Pneumothorax",
          "Hypercapnie",
          "L'asthme aigu grave",
          "L'œdème Quincke",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2019 1°EMD - Q2076\nLes signes cliniques d'une crise d’asthme :",
        "options": [
          "Gêne respiratoire",
          "Sensation de soif d'air",
          "Dyspnée à l'inspiration",
          "Cyanose des extrémités",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "« urgence respiratoire »C’est une dyspnée survenant à l’ expiration"
      },
      {
        "questionText": "N°18 (2019 1°EMD - Q2236\nla prise en charge d'urgence d'une crise d’asthme :",
        "options": [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux",
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit",
          "Mise en place d'une canule de Guedel"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "D-Oxygénation au masque 10 à 15 l/mn à haut débit"
      },
      {
        "questionText": "N°4 (2018 1°EMD - Q2345\nDevant une détresse respiratoire :",
        "options": [
          "Vérifier les mouvements respiratoires",
          "Calculer la fréquence respiratoire",
          "Rechercher une cyanose des extrémités",
          "Rechercher un tirage et une contracture des muscles accessoires",
          "Palper le poul carotidien."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "la présence de tirage (rétractions des tissus entre les côtes ou au niveau du cou) et de contracture des muscles accessoires (utilisation des muscles du cou et des épaules pour aider à la respiration) peut indiquer une détresse respiratoire sévère."
      },
      {
        "questionText": "N°12 (2018 1°EMD - Q2492\nl'hyperventilation est due à",
        "options": [
          "Angoisse",
          "Douleur",
          "L'hypercapnie",
          "L'acidose métabolique",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2018 1°EMD - Q2516\nla dyspnée est :",
        "options": [
          "Perception consciente d'une gêne respiratoire",
          "peut-être inspiratoire ou expiratoire ou au deux temps",
          "Le diagnostic repose sur la radiographie pulmonaire",
          "Soit une bradypnée soit une polypnée",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2018 1°EMD - Q2542\nLa crise d'asthme est :",
        "options": [
          "Accès de dyspnée intense",
          "Peut apparaitre à l'issue d'une anesthésie locale",
          "Sensation de douleur thoracique retro sternale",
          "Dyspnée surtout à l'inspiration",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2018 1°EMD - Q2549\nParmi les circonstances de survenue de la crise d'asthme une est fausse laquelle :",
        "options": [
          "Allergique",
          "Après anesthésie locale",
          "Après corticothérapie",
          "Saisonnière en rapport avec la température ambiante",
          "Après un geste douloureux"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2018 1°EMD - Q2556\nLa conduite d'urgence devant une crise d'asthme:",
        "options": [
          "Oxygénation au masque 10-15L /mn",
          "Position décubitus dorsal stricte",
          "Ventoline en bouffées",
          "Hemisuccinate d'hydrocortisone 100-200 mg en intraveineux",
          "Amoxicilline forte dose"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2017 1°EMD - Q2636\nL'évaluation de la fonction respiratoire se fait par :",
        "options": [
          "Vérification des mouvements respiratoires",
          "Fréquence respiratoire",
          "Signes de lutte tirage, contracture des muscles accessoires",
          "Le patient ne répond pas aux stimulations, En la prise du pouls carotidien"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2017 1°EMD - Q2736\nla dyspnée est :",
        "options": [
          "Perception consciente d’un gène respiratoire",
          "Soit inspiratoire soit expiratoir",
          "Un syndrome objectif",
          "Syndrome subjectif ressenti par le patient",
          "Inspiratoire expiratoire ou aux deux temps"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2017 1°EMD - Q2741\nla crise d'Asthme est :",
        "options": [
          "Accès de dyspnée intense.",
          "Apparait à l'issue d'une anesthésie locale",
          "Dyspnée surtout inspiratoire",
          "Le pronostic vital est mis en jeu",
          "N’évolue jamais vers une détresse respiratoire"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "e : pouvant évoluer vers une détresse respiratoire."
      },
      {
        "questionText": "N°11 (2017 1°EMD - Q2753\nla prise en charge d'urgence d'une crise d’asthme :",
        "options": [
          "Malade en position assise",
          "Hémisuccinate d'hydrocortisone 100 à 200 mg intraveineux",
          "Ventoline en bouffées",
          "Oxygénothérapie au masque a faible débit",
          "Mise en place d'une canule de Guedel"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Introduction a l’oxyologie",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°1 (2025 EMD - Q14\nParmi ces urgences vitales lesquelles sont plus fréquentes au cabinet dentaire :",
        "options": [
          "Réactions allergiques",
          "Arrêt cardiaque",
          "Malaise hypoglycémique",
          "Abcès dentaire",
          "inhalation bronchique"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "B : Arrêt cardiaque (rare).D : urgence dentaire, pas vitaleles urgences médicales les plus fréquentes au cabinet dentaire sont :•\tMalaise vagal•\tHyperventilation psychogène, crise d’asthme•\tRéactions allergiques aux anesthésiques locaux•\tHypoglycémie•\tAngor (syndrome coronarien aigu)•\tCrise convulsive•\tInhalation bronchique ou ingestion d’un corps étranger•\tCrise hypertensive•\tArrêt cardiaque (rare)"
      },
      {
        "questionText": "N°1 (2024 1°EMD - Q409\nParmi les urgences médicales les plus fréquentes au cabinet dentaire :",
        "options": [
          "Malaise vagal",
          "Allergie aux anesthésiques locaux",
          "Arrêt cardiaque",
          "Hypertension artérielle",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Arrêt cardiaque (rare)"
      },
      {
        "questionText": "N°20 (2020 1°EMD - Q1927\nL'évaluation de la fonction neurologique consiste à :",
        "options": [
          "Evaluer la réponse verbale",
          "Evaluer la réaction motrice",
          "Evaluer la sensibilité",
          "Demander au patient son Nom",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2019 1°EMD - Q2160\nLe bilan des grandes fonctions consiste:",
        "options": [
          "Evaluer la fonction neurologique",
          "Evaluer la fonction respiratoire",
          "Evaluer la fonction cardio-vasculaire",
          "Evaluer la fonction digestive",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2019 1°EMD - Q2161\nParmi les urgences les plus fréquentes au cabinet dentaire",
        "options": [
          "Malaise vagal",
          "Pneumothorax",
          "Hyperglycémie",
          "Inhalation bronchique",
          "Arrêt cardiaque"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Matériel et drogues d’urgence au cabinet dentaire",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°2 (2025 EMD - Q30\nConcernant l'oxygène médical :",
        "options": [
          "C'est un médicament avec AMM",
          "A fort débit il est contre indiqué chez le cardiaque",
          "Peut se présenter sous forme liquide",
          "Se présente uniquement sous forme gazeuse",
          "son humidification n'est pas obligatoire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : L’oxygène medical est un médicament avec AMM (Autorisation de Mise sur le Marché)B : Dans les urgences vitales (ex : arrêt cardiorespiratoire), l’oxygène à haut débit est indispensable.C : sous forme liquide présenté en récipient cryogénique mobile ou en évaporateur fixeD : il peut être gazeux ou liquide.E : débitmètre + humidificateur, donc l’humidification est nécessaire"
      },
      {
        "questionText": "N°3 (2025 EMD - Q55\nLe débit délivré par lunettes à oxygène :",
        "options": [
          "0,5 1/mn à 5 1/mn",
          "10-15 1/mn",
          "FIO2 =25%",
          "Fio2=40%",
          "Dépond de l'effort inspiratoire du patient"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Ça correspond au masque à oxygène, pas aux lunettes."
      },
      {
        "questionText": "N°4 (2025 EMD - Q62\nLa valve unidirectionnelle du BAVU permet :",
        "options": [
          "Séparer l'air inspiré de l'air expiré",
          "Permet l'inspiration d'air ambiant",
          "Le stockage du CO2 dans le ballon",
          "Eviter le risque de réinsufflation du CO2.",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La valve unidirectionnelle permet de séparer l’air inspiré de l’air expiré afin d’éviter le stockage du gaz carbonique dans le ballon et le risque de réinsufflation du CO₂."
      },
      {
        "questionText": "N°6 (2025 EMD - Q111\nL'atropine est :",
        "options": [
          "Est un anticholinergique",
          "A un effets bradycardisant",
          "Augmente les secrétions salivaires",
          "A un effet antispasmodique",
          "Diminue les secrétions gastriques"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "B : Molécule anticholinergique s’opposant aux effets bradycardisants de l’acétylcholine.C : Diminue les sécrétions salivaires, lacrymales, gastriques et sudorales"
      },
      {
        "questionText": "N°7 (2025 EMD - Q125\nL'adrénaline est :",
        "options": [
          "Molécule vasoconstrictrice",
          "Tachycardisante",
          "Broncho constrictrice",
          "Contre indiquée dans l'œdème de Quincke",
          "Indiquée dans l'arrêt cardiaque"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Augmente la fréquence cardiaque et la pression artérielleC : Action bronchodilatatrice et inhibe la libération des médiateurs de l’inflammation et de l’allergieD : Indication :•\tŒdème de Quincke•\tChoc anaphylactique•\tArrêt cardio-circulatoire"
      },
      {
        "questionText": "N°9 (2025 EMD - Q168\nLe Glucagon :",
        "options": [
          "Est une hormone hypoglycémiante",
          "Prescrite dans le coma hypoglycémique",
          "S'administre en intramusculaire",
          "Stimule la glycogenèse",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Hormone hyperglycémianteD : Stimule la glycogénolyse"
      },
      {
        "questionText": "N°2 (2024 1°EMD - Q427\nLe matériel de monitorage obligatoire au cabinet dentaire :",
        "options": [
          "Oxymètre du pouls",
          "Débilitre à oxygène",
          "Canule de Guedel",
          "Tensiomètre",
          "Aspirateur de mucosités"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "B/C : Matériels d’ oxygénothérapie:"
      },
      {
        "questionText": "N°3 (2024 1°EMD - Q438\nConcernant l’oxygénothérapie :",
        "options": [
          "Le débit délivré par lunette à 02 est de 0,5 à 5 L/mn",
          "La Fio2 délivrée par lunettes à 02 est de 80-90%",
          "Le débit d'o2 au masque ne dépasse pas 10 1/mn",
          "Le masque à réserve en oxygène est utilisé pour prévenir une hypoxie tissulaire",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B :Le Débit délivré est de 0,5 à 5 l/mn ce qui correspond à une FIO2 de 25-40 %C : Le débit en oxygène peut atteindre 15 l/mn avec ce masque"
      },
      {
        "questionText": "N°4 (2024 1°EMD - Q447\nLe masque à réserve d'oxygène est indiqué:",
        "options": [
          "Indiqué en cas d'hypoxémie",
          "Hypercapnie",
          "Hypoxie chronique",
          "Chez un patient comateux scoré à 3 sur l'échelle de Glasgow",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2024 1°EMD - Q470\nLa valve unidirectionnelle d'un BAVU permet :(Ballon Auto remplisseur à Valve Unidirectionnelle)",
        "options": [
          "Séparer l'air inspiré de l'air expiré",
          "Re insufflation du CO2",
          "Eviter la réinsufflassions du CO2",
          "Mélange d'air inspiré et l'air expiré",
          "Eviter le stockage du Co2"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2024 1°EMD - Q480\nCochez la ou (les )vraie proposition:",
        "options": [
          "la saturation normale en 02 est de 85%",
          "La canule de GUEDEL empêche la chute de la langue",
          "L'atropine baisse la fréquence cardiaque",
          "L'atropine diminue les secrétions salivaires et gastrique",
          "Le Glucagon s'injecte en intraveineux"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : La saturation normale en oxygène (SpO2) chez un individu en bonne santé est généralement entre 95% et 100%C :Atropine: Augmente la fréquence cardiaqueE : Voie d’administration en IM"
      },
      {
        "questionText": "N°7 (2024 1°EMD - Q498\nL'Hémmisuccinate d'hydrocortisone est :",
        "options": [
          "Antiallergique, antiinflammatoire",
          "Est un Minéralocorticoïde",
          "Sa posologie est de 100-200 mg en IV",
          "Indiqué dans l'asthme",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Hormone GlucorticoïdeAction : Antiallergique ; Anti-inflammatoire ; Antipyrétique ; Antalgique"
      },
      {
        "questionText": "N°4 (2023 1°EMD - Q730\nLa canule de GUEDEL est :",
        "options": [
          "Est un matériel de réanimation",
          "Utilisée chez le patient sédaté",
          "Utilisé chez le patient conscient",
          "Empêche la chute de la langue contre le pharynx",
          "Contre indiquée chez l’enfant"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "On l'utilise chez le patient :-Arrêt cardiorespiratoire-Patient sédaté-Patient comateux (état d’inconscience grave )"
      },
      {
        "questionText": "N°5 (2023 1°EMD - Q758\nLe débit d’oxygénothérapie est de :",
        "options": [
          "0,5à 5 L/mn sous lunettes",
          "10 à 15 L/mn sous lunettes",
          "30 L/mn sous lunettes",
          "15 L/mn sous masque à Oxygène",
          "2à 4L /mn sous masque à réserve"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2023 1°EMD - Q765\nL’oxymètre du pouls est :",
        "options": [
          "Un matériel de réanimation",
          "Mesure la saturation en oxygène",
          "Mesure la fréquence cardiaque",
          "La saturation normale est de 50 %",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La saturation normal chez l ‘adulte est de 96% à 100 %"
      },
      {
        "questionText": "N°19 (2023 1°EMD - Q981\nL’atropine:",
        "options": [
          "Augmente la fréquence cardiaque",
          "Augmente la fréquence respiratoire",
          "Diminue les secrétions salivaires",
          "A un effet antispasmodique",
          "Est contre indiquée dans le malaise vagal"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Indication :Malaise vagal"
      },
      {
        "questionText": "N°20 (2023 1°EMD - Q997\nLe glucagon est:",
        "options": [
          "Une hormone hypoglycémiante",
          "Une hormone hyperglycémiante",
          "Indiqué dans le coma hypoglycémiant",
          "Indiqué dans le coma hyperglycémiant",
          "Sa posologie est de 1 mg en une injection unique"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2022 1°EMD - Q1013\npropos de l'oxygène médical :",
        "options": [
          "Se présente sous forme gazeuse uniquement",
          "Peut se présenter sous forme liquide",
          "Est délivré à 5 1/mn par lunettes à oxygène.",
          "Est délivré à 15 l/mn par lunettes à oxygène",
          "Doit être humidifié"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-l’oxygène medical se présente :sous forme gazeuse presenté en bouteille c’est un gaz comprimé ou sous forme liquide présenté en recipient cryogénique mobile ou en évaporateur fixe"
      },
      {
        "questionText": "N°2 (2022 1°EMD - Q1026\nLa canule de GUEDEL:",
        "options": [
          "Empêche la chute de la langue contre le pharynx",
          "Indiquée dans l'arrêt cardiaque",
          "Est contre indiqué chez le patient sédaté",
          "Est contre indiqué chez le comateux que",
          "ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "On l'utilise chez le patient : Arrêt cardiorespiratoire ;Patient sédaté ;Patient comateux (état d’inconscience grave"
      },
      {
        "questionText": "N°3 (2022 1°EMD - Q1047\nL'adrénaline :",
        "options": [
          "Est un médicament d'urgence",
          "Indiqué dans le choc infectieux",
          "Indiqué dans le l'œdème de Quincke",
          "S'administre uniquement en sous cutané",
          "Est contre indiqué dans l'arrêt cardiaque"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Indication : oedeme de quinck ;choc anaphylactique ;arrêt cardio-circulatoireD : Voie d’ administration: IM,IV ou S/C"
      },
      {
        "questionText": "N°4 (2022 1°EMD - Q1064\nLe glucagon est :",
        "options": [
          "Hormone hyperglycémiante",
          "Hormone hypoglycémiantes",
          "S'administre à 1 mg en une injection unique",
          "S 'administre en intraveineux",
          "toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "D : Voie d’administration :IM"
      },
      {
        "questionText": "N°4 (2021 1°EMD - Q1388\nLa canule de GUEDEL:",
        "options": [
          "Utilisée chez le patient en arrête  cardiaque",
          "Utilisée chez le patient sédatée",
          "Utilisée chez le patient conscient",
          "Permet la chute de la langue contre le pharynx",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C : Patient comateux (état d’inconscience grave )D : empêche la chute de la langue contre le pharynx."
      },
      {
        "questionText": "N°19 (2020 1°EMD - Q1925\nLe matériel d'urgence dans un cabinet dentaire comporte:",
        "options": [
          "Bouteille d'oxygène",
          "Canule de GUEDEL",
          "Aspirateur de mucosités",
          "Drogues d'urgence: adrénaline, atropine",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2019 1°EMD - Q2176\nLe chariot d'urgence contient :",
        "options": [
          "Adrénaline",
          "Atropine",
          "Salbutamol",
          "Sérum glucose 30%",
          "Toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2018 1°EMD - Q2362\nLe matériel d'urgence dans un cabinet dentaire comporte:",
        "options": [
          "Bouteille d'oxygène",
          "Canule de GUEDEL",
          "Aspirateur de mucosités",
          "Drogues d'urgence: adrénaline, atropine",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2017 1°EMD - Q2645\nles médicaments d'urgence au cabinet dentaire :",
        "options": [
          "Atropine, Adrénaline, Valium",
          "Hémisuccinate d'hydrocortisone",
          "Amoxicilline",
          "Lidocaïne",
          "Toutes ces réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "médicaments de l’appareil respiratoire",
    "subject": "oxyologie",
    "questions": [
      {
        "questionText": "N°7 (2025 3°EMD DENTAIRE - Q139\nUn malade atteint de tuberculose pulmonaire se présente à vous pour des soins dentaires, quel(s) est le comportement à adopter dans votre prise en charge :",
        "options": [
          "Le prendre en charge come tout autre malade avec les mêmes exigences professionnels cliniques;",
          "Utiliser les équipements de soins conventionnels;",
          "Demander l'état de contagiosité du malade pour décider de la prise en charge;",
          "Ne prendre en charge que les patient qui sont sous antituberculeux."
        ],
        "correctOptionIndexes": [],
        "explanation": "Demander l’avis du médecin traitant qui va définir le degré de contagion du malade, s’il est jugé contagieux des précautions s’imposent :– port des gants, masque, lunettes et casque de protection ;– utilisation réduite des instruments rotatifs et sprays ;– instruments à usage unique de préférence ;– vaccination du personnel."
      },
      {
        "questionText": "N°8 (2025 3°EMD DENTAIRE - Q158\nDans les cas d'asthme; quel est le stade ou type représentant une contre-indication absolue pour un acte chirurgical :",
        "options": [
          "Asthme instable;",
          "Le stade 2;",
          "Le stade 1 ;",
          "Aucune réponse n'est juste."
        ],
        "correctOptionIndexes": [],
        "explanation": "« L’asthme instable : constitue une réelle contre-indication à toute chirurgie buccale.L’asthme de stade 4 : chirurgie exclusivement en milieu hospitalier afin de faire face à une crise sévère éventuelle. »"
      },
      {
        "questionText": "N°9 (2025 3°EMD DENTAIRE - Q177\nUne anesthésie chez un asthmatique doit être :",
        "options": [
          "Avec une intubation quel que soit son type, local ou général ;",
          "Faite par voie locale;",
          "Faite dans un milieu hospitalier exclusivement;",
          "Faite par voie générale obligatoirement"
        ],
        "correctOptionIndexes": [],
        "explanation": "«Préférer l’anesthésie locale ou locorégionale à l’anesthésie générale avec intubation → ↓ risque de bronchospasme. »﻿"
      },
      {
        "questionText": "N°10 (2025 3°EMD DENTAIRE - Q196\nLa corticothérapie en préopératoire chez un asthmatique préconise:",
        "options": [
          "Le Prédnisolone sans sulfites;",
          "La Bétaméthasone sans sulfite;",
          "La corticothérapie d'urgence avec le Bètaméthasone:",
          "Tous les corticoïdes sans exceptions."
        ],
        "correctOptionIndexes": [],
        "explanation": "« Corticothérapie courte en préopératoire : une molécule sans sulfites comme la prednisolone (Solupred) est privilégiée et éliminer la bêtaméthasone (Célestène) renfermant des sulfites.B : la bétaméthasone contient des sulfitesC : Corticothérapie d’urgence : pour les mêmes raisons, la méthylprednisolone (Solumédrol) est préférée à la dexaméthasone (Soludécadron) contenant des sulfites. »"
      },
      {
        "questionText": "N°1 (2024 3°EMD - Q411\nLors de la prise en charge d'un patient asthmatique dans votre cabinet dentaire, quelle est l'action prioritaire s'il présente une crise d'asthme pendant le geste de soin :",
        "options": [
          "Appeler le médecin traitant",
          "Evacuation vers un service hospitalier",
          "Administration de son bronchodilatateur",
          "Attendre que la crise d'asthme passe"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Administrer 1 double bouffée de B2-adrénergique en spray :—salbutamol (Ventoline) ;—terbutaline (Bricanyl)"
      },
      {
        "questionText": "N°2 (2024 3°EMD - Q421\nSi un patient atteint de tuberculose pulmonaire se présente pour des soins dentaire, quelle est la précaution majeure à respecter:",
        "options": [
          "Ne pas le traiter jusqu'à sa guérison",
          "Commencer par se protéger et protéger l'environnement de soin pour éviter toute contamination",
          "Demander l'état de contagiosité du patient",
          "Utiliser les instruments de rotation les plus performants et les stériliser juste après leur utilisation"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C; Demander l’avis du médecin traitant qui va définir le degré de contagion du malade,D ;-Utiliser des instruments À usage unique de préférence"
      },
      {
        "questionText": "N°3 (2024 3°EMD - Q434\nParmi les composants des médicaments suivants utilisés lors de l'anesthésie d'un asthmatique, quels sont ceux qui sont contre-indiqués :",
        "options": [
          "Les produits contenant les anti-inflammatoires stéroïdiens",
          "Les excipients de la famille des parabènes et sulfites",
          "L'adrénaline et les anticholériques",
          "Tous les anti-inflammatoires et tous les sympathomimétiques"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-Excipients allergisants :Les parabens : rôle bactériostatique et antifongique : contre indiqué chez le patient asthmatique"
      },
      {
        "questionText": "N°1 (2023 2°EMD - Q694\nParmi les médicaments suivants lequel pourrait aggraver la sécheresse buccale ?",
        "options": [
          "L'ipratropium",
          "La phénylephrine",
          "Le salbutamol",
          "L'adrénaline"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2023 2°EMD - Q966\nLes risques nécessitant des précautions à prendre par le médecin dentiste chez les patients déjà sous corticothérapie ne concernent pas :",
        "options": [
          "Le risque ulcérogène",
          "Le risque hémorragique",
          "Le risque bronchospastique",
          "Le risque infectieux local et général"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2021 2°EMD - Q1586\nDans les pathologies respiratoires d'origine inflammatoire le médecin dentiste doit:",
        "options": [
          "Demander un bilan médical préopératoire avant tout geste chirurgical",
          "Procéder au geste chirurgical sans aucune précaution particulière",
          "Procéder au geste chirurgicale même en période de crise",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2021 2°EMD - Q1598\nConcernant l'anesthésie chez un patient asthmatique:",
        "options": [
          "Om préfère l'anesthésie général à locorégionale",
          "L'anesthésie général peut provoquer un bronchospasme",
          "Les parabènes bactériostatiques et antifongiques sont sans danger",
          "Les sulfites antioxydants et conservateurs sont contre-indiqués pour leurs effets sédatifs"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-Préférer l’anesthésie locale ou locorégionale à l’anesthésie généraleavec intubation→↓ risque bronchospasme."
      },
      {
        "questionText": "N°16 (2019 3°EMD - Q2216\nLe salbutamol (ventoline):",
        "options": [
          "Est un anti inflammatoire stéroïdien",
          "Est utilisé dans le traitement de la crise d'asthme par voie orale chez l'adulte",
          "Peut être utilisé dans le traitement de la crise d'asthme par voie souscutanée",
          "Peut être utilisé dans le traitement de fond de l'asthme par voie inhalée"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2019 3°EMD - Q2232\nParmi les médicaments suivants, quel(s) est (sont) celui (ceux) qui peut (vent) être prescrit(s) sans danger à un patient asthmatique",
        "options": [
          "Codéine",
          "Ibuprofène",
          "Paracétamol",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2018 3°EMD - Q2480\nParmi ces propositions concernant les médicaments de l'appareil respiratoire une seule est fausse, laquelle",
        "options": [
          "Les corticostéroïdes inhalés provoquent des candidoses oropharyngées",
          "Les AINS diminuent le risque d'ulcération et d'hémorragie gastro- intestinale induite par corticoïdes",
          "Corticoïdes systémiques entrainement une diminution de la densité osseuse et un retard de cicatrisation",
          "L'usage des anesthésiques avec vasoconstricteurs contenant des sulfites est conte indiqué chez les asthmatiques cortico-dépendants"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2017 2°EMD - Q2712\nParmi les médicaments suivants, quel(s) est (sont) celui (ceux) qui peut (vent) être prescrit(s) sans danger à un patient asthmatique:",
        "options": [
          "Codéine",
          "Ibuprofène",
          "Spiramycine",
          "Paracétamol"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2017 2°EMD - Q2728\nParmi la (les) situation(s) clinique(s) suivante(s), quelle(s) est(sont) celle(s) qui contre indique (ent) des soins dentaires:",
        "options": [
          "Patient se présentant avec une angine à staphylocoque",
          "Patient atteint d'asthme instable",
          "Patient attient de sarcoïdose",
          "Patient ayant fait une crise d'asthme une heure avant son arrivée au cabinet dentaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      }
    ]
  }
];

module.exports = oxyologieQuizzes;
