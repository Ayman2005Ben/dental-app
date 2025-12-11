const ocQuizzes = [
  {
    "title": "Moyen et conduit de diagnostic",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Quel test permet d'évaluer la vitalité pulpaire?",
        "options": [
          "Test de la mobilité dentaire",
          "Test de sensibilité électrique (EPT)",
          "Test de morsure",
          "Radiographie rétroalvéolaire",
          "Palpation au fond du vestibule en regard de l'apex de la dent causale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Test De La Mobilité Dentaire: La mobilité dentaire peut être mise en évidence soit:- En faisant bouger la dent vers la face vestibulaire/ linguale ou palatine.- En plaçant l’index sur la face linguale et on applique une force latérale à l’aide d’un instrument.\nC : Test de morsure: Réalisé à l’aide d’une feuille de digue enroulée autour d’une spatule à bouche ou d’un toothslooth. - Le test se fait dent par dent, cuspide par cuspide au niveau du secteur incriminé.\nD :  Clichés rétroalvéolaires: C’est un outil indispensable pour le diagnostic, le contrôle et la surveillance du traitement endodontique.\nE : La Palpation: La palpation des tissus mous en regard des apex des racines dentaires par l’index permet la détection de tuméfactions résultant d’une pathologie pulpaire."
      },
      {
        "questionText": "Quelle méthode permet de détecter les lésions proximales non cavitaires?",
        "options": [
          "Passage du fil dentaire ciré",
          "Passage du fil dentaire non ciré",
          "Test à la percussion",
          "Test du cône de Gutta",
          "Test de cavité"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le passage du fil dentaire non ciré détecte les cavitations proximales. Pour des lésions débutantes non cavitaires le fil n’est d’aucune utilité = diagnostique.\nC : Test à la percussion Renseigne sur l’état de santé du parodonte\nD : Test du cône de Gutta Lorsqu’une fistule est découverte, une radiographie retro-alvéolaire est prise avec un cône de gutta.\nE : Le Test cavitaire = Test au fraisage: Le test au fraisage est réalisé en dernier recours, quand tous les autres tests se sont montrés non concluants."
      },
      {
        "questionText": "Quelle est la principale utilité de la transillumination?",
        "options": [
          "Détecter les lésions occlusales précoces",
          "Diagnostiquer les lésions carieuses proximales",
          "Diagnostiquer les fêlures dentaires",
          "Tester la sensibilité pulpaire",
          "Evaluer la mobilité dentaire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Cette méthode consiste appliquer une source lumineuse perpendiculairement sur la dent à examiner, la présence de fêlures ou caries est recherchée par Trans illumination."
      },
      {
        "questionText": "le test de cavité est",
        "options": [
          "Réalisé à l'aide de la sonde parodontale.",
          "Réalisé à l'aide de la sonde exploratrice,",
          "Un test invasif.",
          "Un test non invasif",
          "Fait à l'aide du manche de miroir."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Il est effectué sans anesthésie, à l’aide d’un contre-angle. Le test au fraisage est réalisé en dernier recours, quand tous les autres tests se sont montrés non concluants."
      },
      {
        "questionText": "Les signes subjectifs :",
        "options": [
          "Sont décrits par le patient.",
          "Sont issus à partir de la radiographie.",
          "Sont issus à partir de l'examen de la dent",
          "Sont constatés par le praticien.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les signes subjectifs, aussi appelés symptômes, sont des manifestations de maladie ou de malaise ressenties et rapportées par le patient COMME : - La douleur provoquée ou spontanée - Facteurs déclenchant. - L’intensité Caractéristiques - La localisation. - La durée - Si elle cède aux antalgiques (ou non)."
      },
      {
        "questionText": "L'ANAMNESE:",
        "options": [
          "Est la première étape pour établir le diagnostic",
          "Permet de révéler les maladies chroniques",
          "Permet de révéler un état physiologique",
          "Permet d'établir une relation de confiance patient-praticien",
          "En cas d'urgence, elle se fait dans un second temps"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Même dans une situation d’urgence, cette étape reste indispensable et représente le meilleur point de départ pour établir un diagnostic car Elle peut révéler des maladies chroniques, des antécédents médicaux importants, des allergies, des traitements passés, et d'autres éléments clés pour le diagnostic et la prise en charge du patient"
      },
      {
        "questionText": "LE TEST AU FRAISAGE :",
        "options": [
          "Se fait toujours en complément au test de sensibilité",
          "Peut-être invasif",
          "Est réalisé au niveau de la dentine",
          "Est réalisé au niveau de l'émail",
          "Est réalisé systématiquement lors de l'examen clinique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : il n'est pas nécessairement toujours réalisé en complément d'autres tests de sensibilité\nD : Non, le test au fraisage consiste à enlever l'émail pour exposer la dentine, il n'est donc pas réalisé au niveau de l'émail\nE : Il est généralement effectué en cas de suspicion de sensibilité dentaire ou d'autres problèmes dentaires spécifiques."
      },
      {
        "questionText": "LE TEST DE SENSIBILITE AU FROID EST REALISE:",
        "options": [
          "Au chlorure de sodium",
          "Au chlorure d'éthyle",
          "Au niveau du fond de de la cavité",
          "Au niveau du tiers cervical de la face vestibulaire",
          "Toujours après une isolation et séchage de la dent"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Après séchage ; Il est nécessaire, avant de tester la dent étudiée, de réaliser le test sur la dent adjacente ou controlatérale afin de connaître la réponse « normale » du patient. Il est conseillé de l’appliquer sur une durée d’environ 2,5 secondes"
      },
      {
        "questionText": "L'EXAMEN RADIOGRAPHIQUE - LORS DU DIAGNOSTIC PULPAIRE-PEUT NOUS RENSEIGNER SUR:",
        "options": [
          "Le degré de l'inflammation pulpaire",
          "La vitalité pulpaire",
          "L'épaisseur de dentine résiduelle",
          "La présence de résorption radiculaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Elle permet d’apprécier l’existence de lésions carieuses ; la profondeur et les rapports avec la pulpe, les restaurations iatrogènes. Les calcifications canalaires, les fractures radiculaires, les résorptions, les réactions apicales."
      },
      {
        "questionText": "le teste du cône de percha est réaliser dans le cas de :",
        "options": [
          "Parodontite apicale aigue",
          "Kyste radiculo dentinaire",
          "Granulome",
          "Parodontite apicale chronique avec fistule",
          "Pulpite"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Lorsqu’une fistule est découverte, une radiographie retro-alvéolaire est prise avec un cône de gutta. Il est introduit dans l’ostium fistulaire de façon à remonter le trajet fistulaire jusqu’à la dent ou la racine causale."
      },
      {
        "questionText": "la radiographie en oc est un examen :",
        "options": [
          "Systématique",
          "Complémentaire",
          "Qui permet d’apprécier la profondeur de la lésion carieuse",
          "Réaliser avant l’examen clinique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "D : réaliser apres l’examen clinique"
      },
      {
        "questionText": "le test au froid :",
        "options": [
          "Déclenche une douleur quel que soit l'atteinte pulpaire",
          "Il est réalisé à l’aide d’une boulette de coton imbibé de chlorure d'éthyle",
          "Il est réalisé à l'aide d'une boulette de coton imbibé de kélene",
          "Il est réalisé au niveau du collet ( vestibulairement ) de la dent bien asséchée",
          "Il est réalisé à l'aide d'une boulette de cotton imbibé d'eugénol"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Dans le cas de : pulpite aigue purulente, la douleur est calmée par le froid. Une pulpe nécrosée ne répond pas au froid ."
      },
      {
        "questionText": "le test a la percussion nous renseigne sur l'état :",
        "options": [
          "Amélaire",
          "Dentinaire",
          "Pulpaire",
          "Parodontal",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La percussion réaliser avec le manche d’une sonde ou d’un miroirs:détermine une douleur ou une stimulation au niveau des tissus de soutien dentaires: P/Axiale +: inflammation du périapex. P/Transversale +: participation du parodonte."
      },
      {
        "questionText": "dans les signes objectif son note",
        "options": [
          "Le siège de la lésion",
          "L’intensité de la douleur",
          "Le caractère de la douleur",
          "Le résultat du test de sensibilité",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Dans les signes objectif on note :N° de la dent / La classe de la cavité de carie( siége) /L’état de délabrement de la perte de substance/ Coloration de la dent. La profondeur. /Contenu et nature des tissus affectés"
      },
      {
        "questionText": "la transillumination permet de détecter :",
        "options": [
          "Les lésions pulpaires",
          "Les récidives de caries",
          "Les réactions périapicales",
          "Les fêlures",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Cette méthode consiste appliquer une source lumineuse perpendiculairement sur la dent à examiner, la présence de fêlures ou caries est recherchée par transillumination"
      },
      {
        "questionText": "le test au fraisage est réalisé :",
        "options": [
          "A la turbine",
          "Au contre angle",
          "Anu niveau de la dentine saine",
          "Au niveau de la dentine décalcifiée",
          "Au niveau de la dentine ramollie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "ectué en fraisant à ,l’aide d’un contre angle à travers la jonction amelo dentinaire sans anesthésie.Le patient prévient à la moindre douleur, signifiant alors que le tissu nerveux est encore fonctionnel ( sur dentine saine )"
      },
      {
        "questionText": "On appelle test de sensibilité pulpaire le test",
        "options": [
          "(1,2,5)",
          "(2,3,4)",
          "(1,2,3)",
          "(4,5)",
          "(2,3,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1: Les tests de sensibilité évaluent l’état de santé pulpaire en appliquant un stimulus au niveau de la dent. Ils ont plusieurs objectifs :\n- Évaluer la santé pulpaire en se basant sur la réponse sensorielle.\n- Reproduire les symptômes déclencheurs de la douleur décrits par les patients\n2: Le Test Au Chaud:Gutta-Percha Chaude: La gutta-percha chauffée est le test au chaud le plus fréquemment employé. Il suffit de chauffer un bâtonnet de gutta-percha à l’aide d’une flamme, et de l’appliquer ensuite sur la dent préalablement vaselinée pour éviter l’adhésion. L’application ne doit pas excéder 5 secondes afin d’éviter tout dommage pulpaire.\n5: c'est le test électrique : pulp-tester"
      },
      {
        "questionText": "Les entités anatomiques pouvant se superposer avec une pathologie d'origine endodontique sont :",
        "options": [
          "Le foramen mentonnier.",
          "Le sinus maxillaire.",
          "Les canaux incisifs.",
          "La fosse nasale.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A. Le foramen mentonnier est une ouverture située sur la mandibule, et il peut se superposer avec les racines des dents inférieures, ce qui peut rendre l'interprétation des radiographies difficile en cas de pathologie endodontique.\nB. Le sinus maxillaire est une cavité aérienne située dans les os maxillaires, et il est adjacent aux racines des dents maxillaires postérieures. Une pathologie endodontique peut parfois être confondue avec une sinusite ou vice versa en raison de leur proximité.\nC. Les canaux incisifs sont de petits canaux situés dans les os maxillaires, et ils peuvent se superposer avec les racines des dents antérieures maxillaires sur les radiographies, ce qui peut compliquer l'interpretation en cas de pathologie endodontique.\nD. La fosse nasale est située dans le crâne et peut se superposer avec les racines des dents antérieures maxillaires sur les radiographies, rendant ainsi difficile l'interprétation en cas de pathologie endodontique"
      },
      {
        "questionText": "Le test de sensibilité au froid est réaliser :",
        "options": [
          "Au chlorure de sodium.",
          "Au chlorure d’éthyle",
          "Au fond de la cavité.",
          "Toujours après une isolation et séchage de la dent.",
          "Au niveau cervical."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "Après séchage il est réaliser à l’aide d’une boulette de coton imbibé de « Friljet » et déposé au niveau du collet c.a.d dans la région la plus proche de la pulpe"
      },
      {
        "questionText": "Dans les signes subjectifs on note :",
        "options": [
          "Le caractère de la douleur.",
          "L'intensité de la douleur.",
          "La durée de la douleur.",
          "Le siège de la carie.",
          "La profondeur de la carie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On note les caractères des symptômes : La douleur provoquée ou spontanée- Facteurs déclenchant. L’intensité –Caractéristiques - La localisation. La durée- Si elle est calmée par la prise des antalgiques ou non"
      },
      {
        "questionText": "le test au chaud :",
        "options": [
          "Est réalisé avec une cupule en caoutchouc montée sur contre angle",
          "Permet de tester la vitalité pulpaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Il suffit de mettre en mouvement une cupule en caoutchouc au contact de la dent ( chaleur de friction ) / permet de tester la sensibilité pulpaire et non pas la vitalité"
      },
      {
        "questionText": "le test de cavité est :",
        "options": [
          "Un test de vitalité",
          "Un test ultime"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Est réalisé en dernier recours, quand tous les autres tests se sont montrés non concluants."
      },
      {
        "questionText": "la transillumination est réalisée avec",
        "options": [
          "Une fibre optique simple (FOTI)",
          "Une lampe halogène"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "le test au froid :",
        "options": [
          "Est réalisé avec un produit réfrigérant",
          "Permet de tester la vitalité pulpaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Permet de tester la sensibilité pulpaire et non pas la vitalié"
      },
      {
        "questionText": "le test électrique est :",
        "options": [
          "Un test de vitalité",
          "Réalisé avec un pulp-tester"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le patient tient une électrode à la main, et une autre électrode est placée au niveau d'une dent non suspecte. On augmente le courant progressivement jusqu'à apparition d'une douleur. On teste pareillement la dent suspecte."
      },
      {
        "questionText": "la transillumination permet de détecter :",
        "options": [
          "Les lésions pulpaires",
          "Les récidives de caries",
          "Les réactions périapicales",
          "Les fêlures",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Cette méthode consiste appliquer une source lumineuse perpendiculairement sur la dent à examiner, la présence de fêlures ou caries est recherchée par transillumination"
      },
      {
        "questionText": "On appelle test de sensibilité pulpaire le test",
        "options": [
          "(1,2,5)",
          "(2,3,4)",
          "(1,2,3)",
          "(4,5)",
          "(2,3,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1: Les tests de sensibilité évaluent l’état de santé pulpaire en appliquant un stimulus au niveau de la dent. Ils ont plusieurs objectifs :\n- Évaluer la santé pulpaire en se basant sur la réponse sensorielle.\n- Reproduire les symptômes déclencheurs de la douleur décrits par les patients\n2: Le Test Au Chaud:Gutta-Percha Chaude: La gutta-percha chauffée est le test au chaud le plus fréquemment employé. Il suffit de chauffer un bâtonnet de gutta-percha à l’aide d’une flamme, et de l’appliquer ensuite sur la dent préalablement vaselinée pour éviter l’adhésion. L’application ne doit pas excéder 5 secondes afin d’éviter tout dommage pulpaire.\n5: c'est le test électrique : pulp-tester"
      },
      {
        "questionText": "le test au fraisage est réalisé :",
        "options": [
          "A la turbine",
          "Au contre angle",
          "Anu niveau de la dentine saine",
          "Au niveau de la dentine décalcifiée",
          "Au niveau de la dentine ramollie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "ectué en fraisant à ,l’aide d’un contre angle à travers la jonction amelo dentinaire sans anesthésie.Le patient prévient à la moindre douleur, signifiant alors que le tissu nerveux est encore fonctionnel ( sur dentine saine )"
      },
      {
        "questionText": "Les entités anatomiques pouvant se superposer avec une pathologie d'origine endodontique sont :",
        "options": [
          "Le foramen mentonnier.",
          "Le sinus maxillaire.",
          "Les canaux incisifs.",
          "La fosse nasale.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A. Le foramen mentonnier est une ouverture située sur la mandibule, et il peut se superposer avec les racines des dents inférieures, ce qui peut rendre l'interprétation des radiographies difficile en cas de pathologie endodontique.\nB. Le sinus maxillaire est une cavité aérienne située dans les os maxillaires, et il est adjacent aux racines des dents maxillaires postérieures. Une pathologie endodontique peut parfois être confondue avec une sinusite ou vice versa en raison de leur proximité.\nC. Les canaux incisifs sont de petits canaux situés dans les os maxillaires, et ils peuvent se superposer avec les racines des dents antérieures maxillaires sur les radiographies, ce qui peut compliquer l'interpretation en cas de pathologie endodontique.\nD. La fosse nasale est située dans le crâne et peut se superposer avec les racines des dents antérieures maxillaires sur les radiographies, rendant ainsi difficile l'interprétation en cas de pathologie endodontique"
      },
      {
        "questionText": "Le test de sensibilité au froid est réaliser :",
        "options": [
          "Au chlorure de sodium.",
          "Au chlorure d’éthyle",
          "Au fond de la cavité.",
          "Toujours après une isolation et séchage de la dent.",
          "Au niveau cervical."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "Après séchage il est réaliser à l’aide d’une boulette de coton imbibé de « Friljet » et déposé au niveau du collet c.a.d dans la région la plus proche de la pulpe"
      },
      {
        "questionText": "le test au chaud est réalisé :",
        "options": [
          "Avec un cône de gutta",
          "Sur la face vestibulaire de la dent",
          "Après avoir vernis la dent",
          "Avec un bâtonnet de gutta",
          "Avec une fraise boule"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On utilesera le batônnet de gutta pour les dents antérieures et un morceau de cône de gutta placé à l’extrimité d’une spatule en bouche pour les dents posteriores après avoir vaseliner la face vestibulaire afin qu’elle n’adhére pas à la dent"
      },
      {
        "questionText": "le teste de cavité :",
        "options": [
          "Est réalisé avec une fraise boule",
          "Est un puits d'observation",
          "Est douloureux quand la dent est vivante",
          "Est appelé test au fraisage",
          "Se fait au pulptester"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Il est effectué sans anesthésie à l’aide d’un contre-angle pour éviter tout délabrement inutile, et sous irrigation abondante."
      },
      {
        "questionText": "Dans les signes subjectifs on note :",
        "options": [
          "Le caractère de la douleur.",
          "L'intensité de la douleur.",
          "La durée de la douleur.",
          "Le siège de la carie.",
          "La profondeur de la carie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On note les caractères des symptômes : La douleur provoquée ou spontanée- Facteurs déclenchant. L’intensité –Caractéristiques - La localisation. La durée- Si elle est calmée par la prise des antalgiques ou non"
      },
      {
        "questionText": "le test au chaud est réalisé :",
        "options": [
          "Avec un cône de gutta",
          "Sur la face vestibulaire de la dent",
          "Après avoir vernis la dent",
          "Avec un bâtonnet de gutta",
          "Avec une fraise boule"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On utilesera le batônnet de gutta pour les dents antérieures et un morceau de cône de gutta placé à l’extrimité d’une spatule en bouche pour les dents posteriores après avoir vaseliner la face vestibulaire afin qu’elle n’adhére pas à la dent"
      },
      {
        "questionText": "le teste de cavité :",
        "options": [
          "Est réalisé avec une fraise boule",
          "Est un puits d'observation",
          "Est douloureux quand la dent est vivante",
          "Est appelé test au fraisage",
          "Se fait au pulptester"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Il est effectué sans anesthésie à l’aide d’un contre-angle pour éviter tout délabrement inutile, et sous irrigation abondante."
      },
      {
        "questionText": "Dans les signes subjectifs on note :",
        "options": [
          "Le caractère de la douleur.",
          "L'intensité de la douleur.",
          "La durée de la douleur.",
          "Le siège de la carie.",
          "La profondeur de la carie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "On note les caractères des symptômes : La douleur provoquée ou spontanée- Facteurs déclenchant. L’intensité –Caractéristiques - La localisation. La durée- Si elle est calmée par la prise des antalgiques ou non"
      }
    ]
  },
  {
    "title": "insensibilisation dentaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Une molécule anesthésique est composée chimiquement:",
        "options": [
          "D'un pôle hydrophobe",
          "D'une chaine intermédiaire",
          "D'un pôle hydrophile",
          "D'un pôle lipophilie",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "A : Un anesthésique local est une molécule amphiphile, c’est-à-dire constituée d’un pôle hydrophile d’un pôle lipophile aromatique"
      },
      {
        "questionText": "Les conditions nécessaires pour la réalisation des anesthésies locales sont:",
        "options": [
          "Un interrogatoire précis",
          "Une éventuelle prémédication à dose modérée chez les patients trop émotifs",
          "L'Injection en milieu infiammatoire ou infecté est possible",
          "Disposer d'une source d'oxygène à proximité",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Conditions necessaires pour la réalisation des anésthésies locales (AL):\nL’utilisation des AL nécessite:\n1- Un interrogatoire précis pour mettre en évidence : toute maladie, tout traitement ou antécédent susceptible d’interférer avec les constituants du produit anesthésique.\n2- Une éventuelle prémédication à dose modérée chez les patients trop émotifs.\n3- D’éviter l’injection en milieu inflammatoire ou infecté.\n4- De maintenir le contact verbal avec le patient dés le début de l’anesthésie\n5- De disposer d’une source d’oxygène à proximité."
      },
      {
        "questionText": "Les limes H:",
        "options": [
          "Sont aussi appelées racleurs",
          "Sont fabriquées en acier inoxydable ou nickel-titane",
          "Leur utilisation s'effectue uniquement en rotation",
          "Sont de section carrée",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C : Ces instruments ne son utilisables qu’en traction.\nD : très tranchants, usinés à partir d’une ébauche de section ronde."
      },
      {
        "questionText": "L'anesthésie de surface",
        "options": [
          "Peut être faite à l'aide d'un Cryo-anesthésique",
          "Peut être faite à l'aide de crème type xylocaine 10%",
          "Peut être faite par pulvérisation en bouche de chlorure d'éthyle",
          "Peut être appliquée dans le cas de peur de la piqûre de l'aiguille lors d'une injection",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "D: Actuellement, il est contre-indiqué de l’utiliser dans la cavité buccale surtout chez les enfants de moins de 6 ans."
      },
      {
        "questionText": "PARMI LES ACCIDENTS LOCAUX DE L'ANESTHESIE REGIONALE:",
        "options": [
          "Fracture de l'aiguille",
          "Injection douloureuse v",
          "Hémorragie",
          "Bronchospasme",
          "Paralysie faciale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'INFILTRATION PARA-APICALE:",
        "options": [
          "Est une technique locale",
          "Est une anesthésie de contact",
          "Est réalisée le plus proche du site concerné",
          "Permet d’anesthésier la gencive, la pulpe dentaire et l'os alvéolaire",
          "Permet d’anesthésier les terminaisons nerveuses>"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "UN ANESTHESIQUE LOCAL EST UN AGENT QUI :",
        "options": [
          "Bloque la conduction nerveuse",
          "Est un amino-amide oU amino-ester",
          "Sa résorption dépend đu šite dinjecion",
          "L'acidose diminue sa difusion",
          "l'adjonction du vasoconstricteur diminue sa durée d'action"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "LE VASOCONSTRICTEUR : - Ralentir la vitesse d’absorption / Augmenter le temps de contact"
      },
      {
        "questionText": "Le traitement endodontique sur la 33 atteinte d'une pulpite aigue irréversible nécessite une anesthésie :",
        "options": [
          "Intra-pulpaire",
          "intra-ligamentaire",
          "Para-apicale",
          "De contact",
          "Tronculaire à l'épine de Spix"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L ’ anesthésie para apicale: est utilisée pour toutes les dents à l’exception des molaires mandibulaires (qui nécessitent une anesthésie tronculaire)."
      },
      {
        "questionText": "L'insensibilisation par escarrification:",
        "options": [
          "Permet la réalisation du traitement endodontique la même séance",
          "Est réalisée sur les dents antérieures",
          "Est réalisée sur une dent mature présentant une cavité cervicale",
          "Est indiquée dans le cas d'échec d'anesthésie locale et/u locorégionale",
          "Est réalisée lors d'une biopulpectomie"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "l‘anesthésie local :",
        "options": [
          "Est une insensibilisation",
          "Est indiquée pour un coiffage pulpaire directe",
          "Concerne une région étendue",
          "Et très efficace dans un milieu acide",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C’est la perte de sensibilité d’une région limitée. En milieu acide, notamment en cas d’infection ou d’inflammation,les anesthésiques locaux se retrouvent essentiellement sous forme ionisée et donc à une moindre efficacité."
      },
      {
        "questionText": "les molécules d’anesthésie :",
        "options": [
          "Est une molécule amphiphile",
          "Est à fonction ester le plus souvent",
          "Composée de pôle hydrophile – pôle hydrophobe – chaîne intermédiaire",
          "Est une base faible",
          "Constitué de majeure partie de la carpule d’anesthésie"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le vasoconstricteur :",
        "options": [
          "Modifié le diamètre des vaisseaux sanguins",
          "Est un agent conservateur",
          "Augmenté le temps de contact de l'anesthésique local avec le nerf",
          "Est de règle chez tous les patients",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "une molécule capable d’entrainer la contraction de la paroi vasculaire et la réduction ou l’arrêt de la circulation sanguinene pas utiliser chez les malades sous biphosohonates, en cas d’irradiation cervico faciale, ou certaines cardiopathies..."
      },
      {
        "questionText": "Le traitement endodontique sur dent à pulpe vivants peut nécessiter:",
        "options": [
          "Une anesthésie intra osseuse",
          "Une anesthésie intra septale",
          "Une anesthésie tronculaire pour les molaires inférieures",
          "Une escarrification dans le cas d'allergie à l'anesthésie"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "anesthésie intra septale est indiqué s’il y’aura un échec des autre anesthésies"
      },
      {
        "questionText": "L'insensibilisation par escarrification:",
        "options": [
          "Entraîne une thrombose et dégénérescence pulpaire",
          "Est la technique de choix pour l'insensibilisation",
          "Est indiquée chez les patients ayant des troubles de coagulation",
          "Est indiquée sur dents permanentes immatures",
          "Est contre-indiquée sur les dents temporaires"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Perturbation vasculaire : Se manifeste par une inflammation congestion, hyperhémie, thrombose et dégénérescence.\nCertaines pathologies hématologiques causant des problèmes d’hemostase, peuvent indiquer l’utilisation de l’escarrotique.\nD : contre indication"
      },
      {
        "questionText": "Une anesthésie locale par infiltration",
        "options": [
          "Est une anesthésie par badigeonnage",
          "Peut se faire par une Cryo anesthésie",
          "Est indiquée en présence d'une collection suppurée.",
          "Utilise une solution acide faible.",
          "Toutes les réponses fausses"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Anesthésie par infiltration : C’est de porter à l’aide d’une seringue, le produit anesthésique au contact des terminaisons nerveuses profondes, donc on parle d’anesthésie terminale.\nA/B : anesthésiques de surface\nC : En milieu acide elle est inefficace \nD : base faible"
      },
      {
        "questionText": "Concernant l’irrigation canalaire pendant le traitement endodontique :",
        "options": [
          "L'injection doit être passive contact, retrait, éjection",
          "C'est le mouvement des instruments dans le canal (va et vient) qui fait pénétrer la solution sur tout le trajet du canal jusqu'à la limite apicale.",
          "Il faut une grande pression de l'éjection pour atteindre le péri-apex",
          "Le praticien utilise une seringue avec une aiguille.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’irrigation efficace du canal radiculaire dépend du mouvement actif des instruments à l’intérieur du canal. Ce va-et-vient favorise la pénétration de la solution d’irrigation (comme l’hypochlorite de sodium) sur toute la longueur du canal, jusqu’à la constriction apicale, en facilitant l’élimination des débris et des bactéries. Cette technique est appelée « irrigation active ». Les autres affirmations sont inexactes : l’injection n’est pas passive, une pression excessive peut provoquer une extrusion apicale dangereuse, et l’utilisation d’une seringue avec aiguille, bien qu’habituelle, ne garantit pas à elle seule une irrigation efficace sans mouvement actif.",
        "citations": []
      },
      {
        "questionText": "Le vasoconstricteur:",
        "options": [
          "Réduit le risque de surdosage",
          "Permet d'augmenter l'efficacité de l'anesthésie",
          "Augmente le risque de toxicité",
          "Peut présenter des contre-indications",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'anesthésie locale:",
        "options": [
          "Est une privation temporaire de la sensation",
          "Est souvent associée à un état d'inconscience",
          "Utilise des drogues",
          "Peut être à l'origine de complications",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement endodontique sur dent à pulpe vivants peut nécessiter:",
        "options": [
          "Une anesthésie intra osseuse",
          "Une anesthésie intra septale",
          "Une anesthésie tronculaire pour les molaires inférieures",
          "Une escarrification dans le cas d'allergie à l'anesthésie"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "anesthésie intra septale est indiqué s’il y’aura un échec des autre anesthésies"
      },
      {
        "questionText": "L'insensibilisation par escarrification:",
        "options": [
          "Entraîne une thrombose et dégénérescence pulpaire",
          "Est la technique de choix pour l'insensibilisation",
          "Est indiquée chez les patients ayant des troubles de coagulation",
          "Est indiquée sur dents permanentes immatures",
          "Est contre-indiquée sur les dents temporaires"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Perturbation vasculaire : Se manifeste par une inflammation congestion, hyperhémie, thrombose et dégénérescence.\nCertaines pathologies hématologiques causant des problèmes d’hemostase, peuvent indiquer l’utilisation de l’escarrotique.\nD : contre indication"
      },
      {
        "questionText": "Une anesthésie locale par infiltration",
        "options": [
          "Est une anesthésie par badigeonnage",
          "Peut se faire par une Cryo anesthésie",
          "Est indiquée en présence d'une collection suppurée.",
          "Utilise une solution acide faible.",
          "Toutes les réponses fausses"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Anesthésie par infiltration : C’est de porter à l’aide d’une seringue, le produit anesthésique au contact des terminaisons nerveuses profondes, donc on parle d’anesthésie terminale.\nA/B : anesthésiques de surface\nC : En milieu acide elle est inefficace \nD : base faible"
      },
      {
        "questionText": "Concernant l’irrigation canalaire pendant le traitement endodontique :",
        "options": [
          "L'injection doit être passive contact, retrait, éjection",
          "C'est le mouvement des instruments dans le canal (va et vient) qui fait pénétrer la solution sur tout le trajet du canal jusqu'à la limite apicale.",
          "Il faut une grande pression de l'éjection pour atteindre le péri-apex",
          "Le praticien utilise une seringue avec une aiguille.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’irrigation efficace du canal radiculaire dépend du mouvement actif des instruments à l’intérieur du canal. Ce va-et-vient favorise la pénétration de la solution d’irrigation (comme l’hypochlorite de sodium) sur toute la longueur du canal, jusqu’à la constriction apicale, en facilitant l’élimination des débris et des bactéries. Cette technique est appelée « irrigation active ». Les autres affirmations sont inexactes : l’injection n’est pas passive, une pression excessive peut provoquer une extrusion apicale dangereuse, et l’utilisation d’une seringue avec aiguille, bien qu’habituelle, ne garantit pas à elle seule une irrigation efficace sans mouvement actif.",
        "citations": []
      },
      {
        "questionText": "Le vasoconstricteur:",
        "options": [
          "Réduit le risque de surdosage",
          "Permet d'augmenter l'efficacité de l'anesthésie",
          "Augmente le risque de toxicité",
          "Peut présenter des contre-indications",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'anesthésie locale:",
        "options": [
          "Est une privation temporaire de la sensation",
          "Est souvent associée à un état d'inconscience",
          "Utilise des drogues",
          "Peut être à l'origine de complications",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le vasoconstricteur:",
        "options": [
          "Réduit le risque de surdosage",
          "Permet d'augmenter l'efficacité de l'anesthésie",
          "Augmente le risque de toxicité",
          "Peut présenter des contre-indications",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'anesthésie locale:",
        "options": [
          "Est une privation temporaire de la sensation",
          "Est souvent associée à un état d'inconscience",
          "Utilise des drogues",
          "Peut être à l'origine de complications",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "instrumentation en endodontie",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Les longueurs utilisées pour les instruments normalisés de préparation endodontique manuelle sont",
        "options": [
          "16 mm",
          "21 mm",
          "25 mm",
          "31 mm",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : La longueur de la partie active a été fixée dans tous les cas à 16mm. Longueurs: Les limes et les alésoirs sont disponibles dans trois longueurs standardisées: 21 mm, 25 mm et 31 millimètres, en mesurant à partir du dessous du manche."
      },
      {
        "questionText": "Quel est l'avantage principal des Instruments en Nickel-Titane?",
        "options": [
          "La Grande flexibilité",
          "Le Prix très abordable",
          "L'Utilisation manuelle uniquement",
          "L'Usage unique, non stérilisables",
          "La Rigidité."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Cout élevé.\nC : en techniques mécanisées\nD : stérilisables\nE : flexibilité et Mémoire de forme: capacité de retrouver sans déformation sa forme originale après contrainte."
      },
      {
        "questionText": "Le calibre de l'instrument endodontique manuel correspond:",
        "options": [
          "Au numéro inscrit sur le manche",
          "Au diamètre de l'instrument au niveau de sa pointe",
          "Au diamètre de l'instrument au niveau de la lame active",
          "A l'augmentation de diamètre par millimètre de longueur",
          "A la couleur du manche"
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": "Un système de numérotation des instruments à canaux et des cônes d’obturation utilisant des numéros de 06 à 140. Les numéros correspondants aux diamètres des instruments et des cônes exprimés en centième de millimètre. Ces diamètres sont mesurés au niveau de leurs extrémités actives"
      },
      {
        "questionText": "Le foret de Gates:",
        "options": [
          "Est un instrument de mise en forme canalaire",
          "Est un instrument en acier inoxydable",
          "Est un instrument en NITI",
          "Présente une partie active de forme elliptique",
          "Présente une partie active de 16mm"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-Foret de Gâtes utilisés pour l’élargissement de l’entrée canalaire."
      },
      {
        "questionText": "L'instrumentation mécanisée :",
        "options": [
          "Est fabriquée en NITI",
          "A une conicité constante de 2%",
          "Peut avoir une conicité majorée",
          "Peut avoir une conicité variable sur la lame active",
          "Peut avoir une conicité constante sur la lame active"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "les conicités sont variables d’un système à l’autre, de 2 % à 12 %, voire jusqu’à 19 %. La même séquence possède généralement des instruments de plusieurs conicités et une même lame peut présenter plusieurs conicités (instruments à conicité variable)"
      },
      {
        "questionText": "LES INSTRUMENTS ENDODONTIQUES MECANISES SONT:",
        "options": [
          "Fabriqués en acier inoxydable",
          "Fabriqués en NITi",
          "Utilisés seion une vitesse et un torque déterminés",
          "Utilisés sur des contre-angles endodontiques spécifiques",
          "Utlisés que pour les canaux larges sans courbures"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La lime K 10 de 29 millimètre est:",
        "options": [
          "Utilisé lors du cathétérisme",
          "Utilisé lors de la mise en place canalaire",
          "De longueur de tige de 13mm",
          "De diamètre de pointe de 0.9mm",
          "De section ronde"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "De diamètre de pointe de 0.1mm de section carrée"
      },
      {
        "questionText": "La lime H 30 de 21 millimètre, est une lime",
        "options": [
          "Utilisé lors de l'élargissement canalaire",
          "Utilisé par un mouvement de rotation d'un quart de tour sens horaire et antihoraire",
          "De couleur de manche bleu",
          "De section quarré",
          "De diamètre de pointe de 0.3 mm"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les limes H (pour Hedstrom) ou racleurs, sont des instruments endodontiques de mise en forme canalaire, très tranchants, usinés à partir d’une ébauche de section ronde. Mouvement de traction"
      },
      {
        "questionText": "La fraise endo zekria est :",
        "options": [
          "Utilisée pour l'ouverture de la chambre pulpaire.",
          "Utilisée pour l'extension des parois camérales.",
          "En acier inoxydable.",
          "Utilisée en rotation continue",
          "Utilisée pour la préparation canalaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a: Fraise turbine boule longue (14mm) n° 1 à 3 ou fraise chirurgicale, pour trépanation camérale proprement dite.\nc : La fraise Zekrya Endo est une fraise conique en carbure de tungstène \nd : elle est idéale pour la réalisation d'un accès et d'un élargissement vers la chambre pulpaire."
      },
      {
        "questionText": "Les instruments en nickel-titane:",
        "options": [
          "(1,3)",
          "(1,3,4)",
          "(2, 3,4)",
          "(3,5)",
          "(4.5)."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "1: Les instruments en NiTi peuvent être utilisés aussi bien manuellement que de manière mécanisée.\n3: les conicités sont variables d’un système à l’autre, de 2 % à 12 %, voire jusqu’à 19 % pour les instruments courts dédiés à l’ouverture coronaire\n5: L’utilisation des instruments Ni-Ti en rotation continue permettait de compenser le manque d’efficacité de coupe de l’alliage constaté lors d’utilisation purement manuelles et pas manuelement"
      },
      {
        "questionText": "Les instruments utilisés pour la préparation canalaire sont :",
        "options": [
          "(1,2,3)",
          "(1, 4)",
          "(2,3)",
          "(2,3,4)",
          "(4,5)."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1: lime K sont des instruments endodontiques destinés à la mise en forme canalaire. Elles existent en acier inoxydable, torsadées ou usinées. Cette torsion importante donne à la lime un pas serré, de section carrée.\n2: lime H Les limes H (pour Hedstrom) ou racleurs, sont des instruments endodontiques de mise en forme canalaire, très tranchants, usinés à partir d’une ébauche de section ronde. Ces instruments ne sont utilisables qu’en traction. Ils servent aussi à l’élargissement, après le passage de la lime k du même numéro, ainsi que pour l’évacuation des débris générés et des tissus organiques.\n3: broche Les broches sont des instruments endodontiques torsadés ou usinés à partir d’une ébauche en acier inoxydable ou en NiTi. Actuellement, de section triangulaire à pas long, donc à faible nombre de spires. Il s’agit d’un instrument de faible encombrement, adapté à l’élimination de déchets organiques et minéraux pendant les phases terminales de préparation et de finition, ainsi qu’aux retraitements endodontiques.\n4: Les limes Endoflare sont particulièrement adaptées pour redresser et élargir l'accès au canal dentaire\n5: La fraise Endo Zekria. Fraise « Zekrya Endo » ou Endo Z pour l’extension des parois camérales."
      },
      {
        "questionText": "une lime H de 25 centième de 21 mm de longueur :",
        "options": [
          "a un manche de couleur rouge",
          "présente une lame active de section transversale ronde",
          "présente une tige de 5mm de longueur",
          "s’utilise par des mouvements de traction",
          "présente une pointe de diamètre de 0.25 mm"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "l’instrumentations endodontiques de préparations canalaires :",
        "options": [
          "Manuelle en Ni-Ti est plus coupante que la mécanisée en Ni-Ti",
          "Manuelle en Ni-Ti est plus coupante que manuel en acier inoxydable",
          "Mécanisée présente une conicité fixe de 0.02mm",
          "Mécanisée en M wire présente une élasticité meilleure que le Ni-Ti non traité",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les instruments manuels en Ni-Ti ont toutefois l’inconvénient, d’une moindre efficacité de coupe que ceux en acier inoxydable.\nConicités élevées de 2 à 12 ℅\nLes températures utilisées sont très élevées mais sans fuser l’alliage (M wire treatment).Ceci a permis d’améliorer davantage leur élasticité et donc leur résistance à la fracture tout en préservant leur capacité de coupe."
      },
      {
        "questionText": "La lime K diffère de la broche par :",
        "options": [
          "La fabrication.",
          "Le nombre de Spires.",
          "Le diamètre.",
          "La longueur",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Pour réalisation de la cavité on peut utiliser :",
        "options": [
          "Un foret de Gates.",
          "Une fraise endo zekrya.",
          "Une fraise boule long col.",
          "Une lime K.",
          "Un spreader"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "D : est utilisé pour la préparation canalaire \nE : pour obturation canalaire"
      },
      {
        "questionText": "La lime de perméabilité:",
        "options": [
          "Est une lime K n°25",
          "Une lime H n°10",
          "Permet de vérifier la vacuité apicale.",
          "Est utilisée à la fin de la préparation canalaire.",
          "Est une lime K n°10"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La broche possède:",
        "options": [
          "Un nombre de spires plus important que la lime k.",
          "Une partie active de 16mm",
          "Une conicité de 2%.",
          "Un carré comme symbole.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Elle présente un pas de spires long, donc à faible nombre de spires. Le symbole d’identification est un triangle"
      },
      {
        "questionText": "Dans la préparation endodontique mécanisée les instruments",
        "options": [
          "Sont en nickel-titane",
          "Ont une conicité de 2%",
          "Utilisent la rotation continue ou la réciprocité.",
          "Ont une conicité majorée.",
          "Sont utilisés selon le concept du crown down"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le spreader est utilisé pour",
        "options": [
          "La préparation endodontique",
          "L'obturation canalaire.",
          "La désobturation canalaire.",
          "Le retrait des instruments fracturés dans le canal.",
          "Pour l'ouverture de la chambre pulpaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La normalisation des instruments endodontique manuels concerne :",
        "options": [
          "(1-2)",
          "(2-3)",
          "(1-4)",
          "(2-5)",
          "(3-4)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Normalisation des instruments de préparation endodontique manuels :\nQuatre critères ont été retenus(1971):\n-Identité des diamètres et des formes pour tous les instruments d’un même gabarit;\n-Choix définitif de la forme conique pour tous les instruments;\n-Progression uniforme des diamètres des instruments;\n-Permanence des formes quelque soit le diamètre de l’instrument.\nDiamètres: C’est la dimension de la section transversale de l’instrument en un point donné.\nConicité: Variation du diamètre en centième de mm, le long d’un volume à partir d’un point donné\nLongueurs: Les limes et les alésoirs sont disponibles dans trois longueurs standardisées: 21 mm, 25 mm et 31 millimètres, en mesurant à partir du dessous du manche.\nCodes couleurs: La couleur des manches des instruments indique le diamètre de la pointe (D1)."
      },
      {
        "questionText": "La normalisation des instruments endodontique manuels concerne :",
        "options": [
          "C'est l'amputation partielle de la pulpe.",
          "C'est l'amputation totale de la pulpe.",
          "Concerne dents permanentes immatures.",
          "Concerne dents permanentes matures.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Dents matures pluriradiculées : C’est une thérapeutique transitoire en attendant la réalisation de la pulpectomie"
      },
      {
        "questionText": "La fraise Zekrya-Endo:",
        "options": [
          "Permet de traverser la couronne métallique",
          "Est une fraise boule avec une pointe mousse",
          "Permet d'élargir et de finir la cavité d'accès",
          "Sa particularité est sa pointe mousse",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Une fraise Zekrya-endo (endoZ)de maillefer (pointe mousse) qui permet d’élargir et de finir la cavité sans risque de perforation"
      },
      {
        "questionText": "Les instruments de préparation canalaire mécanisé en NiTi :",
        "options": [
          "Sont utilisés en rotation continue",
          "Ils ont tous des conicités élevées variables sur la lame",
          "Ils ne respectent pas les normes ISO",
          "Ils respectent mieux l'anatomie canalaire",
          "Présentent des conicités majorées"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La lime H:",
        "options": [
          "Est un instrument endodontique mécanisé",
          "Est un instrument endodontique manuel.",
          "Utilise un mouvement de va et vient.",
          "Utilise un mouvement rotatif.",
          "Est montée sur contre-angle"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ces instruments ne sont utilisables qu’en traction. tout mouvement de rotation est à proscrire (fracture)"
      },
      {
        "questionText": "La lime K:",
        "options": [
          "Est un instrument de choix pour le cathétérisme.",
          "Peut être fabriquée en Nickel-Titane.",
          "Peut être fabriqué en acier inoxydable.",
          "Est utilisé avec un mouvement de rotation-traction.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "les limes K sont utilisées lor de la préparation canalaire, particulièrement dans les phases de repérage et de perméabilisation dont elles restent les instruments de choix"
      },
      {
        "questionText": "La fraise ZEKRYA ENDO sert:",
        "options": [
          "Pour le curetage dentinaire",
          "Pour la taille de cavité",
          "Pour l'extension des parois camérales",
          "Pour la désobturation canalaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les limes K:",
        "options": [
          "Sont des instruments endodontiques destinés à la mise en forme canalaire",
          "Existent en acier inoxydable ou usinées",
          "Sont de section triangulaire ou carrée",
          "Sont disponibles en Ni-Ti",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les limes H (pour HESTROM) ou racleurs:",
        "options": [
          "Sont des instruments endodontiques de mise en forme canalaire",
          "Sont usines à partir d'une ébauche de section ronde",
          "Sont fabriqués en Ni-Ti uniquement",
          "Sont fabriques en acier et en NiTi",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les broches:",
        "options": [
          "Sont des instruments endodontiques",
          "Sont torsadés ou usinés à partir d'une ébauche en acier inoxydable ou enNi-Ti de section triangulaire",
          "S'utilisent en rotation qu'en translation lors de la préparation",
          "Ont un angle d'hélice de 40ème en moyenne",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’utilisation de ces limes s’effectue principalement en traction et/ou rotation.\nAngle d’hélice de 20° en moyenne.( L'angle d'hélice : C’est l’angle compris entre le grand axe de l’instrument et l’axe des spires, il varie de 20 à60° )"
      },
      {
        "questionText": "La fraise endo zekria est :",
        "options": [
          "Utilisée pour l'ouverture de la chambre pulpaire.",
          "Utilisée pour l'extension des parois camérales.",
          "En acier inoxydable.",
          "Utilisée en rotation continue",
          "Utilisée pour la préparation canalaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a: Fraise turbine boule longue (14mm) n° 1 à 3 ou fraise chirurgicale, pour trépanation camérale proprement dite.\nc : La fraise Zekrya Endo est une fraise conique en carbure de tungstène \nd : elle est idéale pour la réalisation d'un accès et d'un élargissement vers la chambre pulpaire."
      },
      {
        "questionText": "Les instruments en nickel-titane:",
        "options": [
          "(1,3)",
          "(1,3,4)",
          "(2, 3,4)",
          "(3,5)",
          "(4.5)."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "1: Les instruments en NiTi peuvent être utilisés aussi bien manuellement que de manière mécanisée.\n3: les conicités sont variables d’un système à l’autre, de 2 % à 12 %, voire jusqu’à 19 % pour les instruments courts dédiés à l’ouverture coronaire\n5: L’utilisation des instruments Ni-Ti en rotation continue permettait de compenser le manque d’efficacité de coupe de l’alliage constaté lors d’utilisation purement manuelles et pas manuelement"
      },
      {
        "questionText": "Les instruments utilisés pour la préparation canalaire sont :",
        "options": [
          "(1,2,3)",
          "(1, 4)",
          "(2,3)",
          "(2,3,4)",
          "(4,5)."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1: lime K sont des instruments endodontiques destinés à la mise en forme canalaire. Elles existent en acier inoxydable, torsadées ou usinées. Cette torsion importante donne à la lime un pas serré, de section carrée.\n2: lime H Les limes H (pour Hedstrom) ou racleurs, sont des instruments endodontiques de mise en forme canalaire, très tranchants, usinés à partir d’une ébauche de section ronde. Ces instruments ne sont utilisables qu’en traction. Ils servent aussi à l’élargissement, après le passage de la lime k du même numéro, ainsi que pour l’évacuation des débris générés et des tissus organiques.\n3: broche Les broches sont des instruments endodontiques torsadés ou usinés à partir d’une ébauche en acier inoxydable ou en NiTi. Actuellement, de section triangulaire à pas long, donc à faible nombre de spires. Il s’agit d’un instrument de faible encombrement, adapté à l’élimination de déchets organiques et minéraux pendant les phases terminales de préparation et de finition, ainsi qu’aux retraitements endodontiques.\n4: Les limes Endoflare sont particulièrement adaptées pour redresser et élargir l'accès au canal dentaire\n5: La fraise Endo Zekria. Fraise « Zekrya Endo » ou Endo Z pour l’extension des parois camérales."
      },
      {
        "questionText": "La lime K diffère de la broche par :",
        "options": [
          "La fabrication.",
          "Le nombre de Spires.",
          "Le diamètre.",
          "La longueur",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Pour réalisation de la cavité on peut utiliser :",
        "options": [
          "Un foret de Gates.",
          "Une fraise endo zekrya.",
          "Une fraise boule long col.",
          "Une lime K.",
          "Un spreader"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "D : est utilisé pour la préparation canalaire \nE : pour obturation canalaire"
      },
      {
        "questionText": "La broche possède:",
        "options": [
          "Un nombre de spires plus important que la lime k.",
          "Une partie active de 16mm",
          "Une conicité de 2%.",
          "Un carré comme symbole.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Elle présente un pas de spires long, donc à faible nombre de spires. Le symbole d’identification est un triangle"
      },
      {
        "questionText": "Dans la préparation endodontique mécanisée les instruments",
        "options": [
          "Sont en nickel-titane",
          "Ont une conicité de 2%",
          "Utilisent la rotation continue ou la réciprocité.",
          "Ont une conicité majorée.",
          "Sont utilisés selon le concept du crown down"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le spreader est utilisé pour",
        "options": [
          "La préparation endodontique",
          "L'obturation canalaire.",
          "La désobturation canalaire.",
          "Le retrait des instruments fracturés dans le canal.",
          "Pour l'ouverture de la chambre pulpaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La normalisation des instruments endodontique manuels concerne :",
        "options": [
          "(1-2)",
          "(2-3)",
          "(1-4)",
          "(2-5)",
          "(3-4)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Normalisation des instruments de préparation endodontique manuels :\nQuatre critères ont été retenus(1971):\n-Identité des diamètres et des formes pour tous les instruments d’un même gabarit;\n-Choix définitif de la forme conique pour tous les instruments;\n-Progression uniforme des diamètres des instruments;\n-Permanence des formes quelque soit le diamètre de l’instrument.\nDiamètres: C’est la dimension de la section transversale de l’instrument en un point donné.\nConicité: Variation du diamètre en centième de mm, le long d’un volume à partir d’un point donné\nLongueurs: Les limes et les alésoirs sont disponibles dans trois longueurs standardisées: 21 mm, 25 mm et 31 millimètres, en mesurant à partir du dessous du manche.\nCodes couleurs: La couleur des manches des instruments indique le diamètre de la pointe (D1)."
      },
      {
        "questionText": "La normalisation des instruments endodontique manuels concerne :",
        "options": [
          "C'est l'amputation partielle de la pulpe.",
          "C'est l'amputation totale de la pulpe.",
          "Concerne dents permanentes immatures.",
          "Concerne dents permanentes matures.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Dents matures pluriradiculées : C’est une thérapeutique transitoire en attendant la réalisation de la pulpectomie"
      },
      {
        "questionText": "La lime K:",
        "options": [
          "Est un instrument de choix pour le cathétérisme.",
          "Peut être fabriquée en Nickel-Titane.",
          "Peut être fabriqué en acier inoxydable.",
          "Est utilisé avec un mouvement de rotation-traction.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "les limes K sont utilisées lor de la préparation canalaire, particulièrement dans les phases de repérage et de perméabilisation dont elles restent les instruments de choix"
      },
      {
        "questionText": "La lime H:",
        "options": [
          "Est un instrument endodontique mécanisé",
          "Est un instrument endodontique manuel.",
          "Utilise un mouvement de va et vient.",
          "Utilise un mouvement rotatif.",
          "Est montée sur contre-angle"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ces instruments ne sont utilisables qu’en traction. tout mouvement de rotation est à proscrire (fracture)"
      },
      {
        "questionText": "La fraise Zekrya-Endo:",
        "options": [
          "Permet de traverser la couronne métallique",
          "Est une fraise boule avec une pointe mousse",
          "Permet d'élargir et de finir la cavité d'accès",
          "Sa particularité est sa pointe mousse",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Une fraise Zekrya-endo (endoZ)de maillefer (pointe mousse) qui permet d’élargir et de finir la cavité sans risque de perforation"
      },
      {
        "questionText": "Les instruments de préparation canalaire mécanisé en NiTi :",
        "options": [
          "Sont utilisés en rotation continue",
          "Ils ont tous des conicités élevées variables sur la lame",
          "Ils ne respectent pas les normes ISO",
          "Ils respectent mieux l'anatomie canalaire",
          "Présentent des conicités majorées"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La lime K:",
        "options": [
          "Est un instrument de choix pour le cathétérisme.",
          "Peut être fabriquée en Nickel-Titane.",
          "Peut être fabriqué en acier inoxydable.",
          "Est utilisé avec un mouvement de rotation-traction.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "les limes K sont utilisées lor de la préparation canalaire, particulièrement dans les phases de repérage et de perméabilisation dont elles restent les instruments de choix"
      },
      {
        "questionText": "La lime H:",
        "options": [
          "Est un instrument endodontique mécanisé",
          "Est un instrument endodontique manuel.",
          "Utilise un mouvement de va et vient.",
          "Utilise un mouvement rotatif.",
          "Est montée sur contre-angle"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ces instruments ne sont utilisables qu’en traction. tout mouvement de rotation est à proscrire (fracture)"
      },
      {
        "questionText": "La fraise Zekrya-Endo:",
        "options": [
          "Permet de traverser la couronne métallique",
          "Est une fraise boule avec une pointe mousse",
          "Permet d'élargir et de finir la cavité d'accès",
          "Sa particularité est sa pointe mousse",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Une fraise Zekrya-endo (endoZ)de maillefer (pointe mousse) qui permet d’élargir et de finir la cavité sans risque de perforation"
      },
      {
        "questionText": "Les instruments de préparation canalaire mécanisé en NiTi :",
        "options": [
          "Sont utilisés en rotation continue",
          "Ils ont tous des conicités élevées variables sur la lame",
          "Ils ne respectent pas les normes ISO",
          "Ils respectent mieux l'anatomie canalaire",
          "Présentent des conicités majorées"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La sonde de RHEIN N3 sert:",
        "options": [
          "Pour Ile repérage des entrées canalaires",
          "Pour vérifier l'absence de tout surplomb, après ouverture de la chambre pulpaire",
          "Pour Il 'obturation canalaire",
          "Pour la désobturation canalaire",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Sonde de « Rhein » après élimination du parenchyme pulpaire, permet le repérage des entrées canalaires.\nSonde N° « 17 » utilisé pour vérifier l’absence de tout surplomb."
      },
      {
        "questionText": "La fraise ZEKRYA ENDO sert:",
        "options": [
          "Pour le curetage dentinaire",
          "Pour la taille de cavité",
          "Pour l'extension des parois camérales",
          "Pour la désobturation canalaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les limes K:",
        "options": [
          "Sont des instruments endodontiques destinés à la mise en forme canalaire",
          "Existent en acier inoxydable ou usinées",
          "Sont de section triangulaire ou carrée",
          "Sont disponibles en Ni-Ti",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les limes H (pour HESTROM) ou racleurs:",
        "options": [
          "Sont des instruments endodontiques de mise en forme canalaire",
          "Sont usines à partir d'une ébauche de section ronde",
          "Sont fabriqués en Ni-Ti uniquement",
          "Sont fabriques en acier et en NiTi",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les broches:",
        "options": [
          "Sont des instruments endodontiques",
          "Sont torsadés ou usinés à partir d'une ébauche en acier inoxydable ou enNi-Ti de section triangulaire",
          "S'utilisent en rotation qu'en translation lors de la préparation",
          "Ont un angle d'hélice de 40ème en moyenne",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’utilisation de ces limes s’effectue principalement en traction et/ou rotation.\nAngle d’hélice de 20° en moyenne.( L'angle d'hélice : C’est l’angle compris entre le grand axe de l’instrument et l’axe des spires, il varie de 20 à60° )"
      },
      {
        "questionText": "Les instruments endodontiques en nickel-titane présentent:",
        "options": [
          "Une plus grande flexibilité en torsion.",
          "Une plus grande flexibilité en courbure.",
          "Une plus grande résistance à la rupture en torsion que les limes acier inoxydable.",
          "Une moindre résistance à la rupture en torsion que les limes en acier inoxydable.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "Les atteintes pulpo-dentinaires",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Dans les caries débutantes:",
        "options": [
          "L'infection bactérienne est absente",
          "Les interventions non invasives sont les thérapeutiques de choix",
          "La déminéralisation progresse latéralement sous la JA",
          "La dentine subit seulement une déminéralisation circonscrite",
          "La dent ne répond pas au test au froid"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "A : L’infection bactérienne y est absente ou limitée superficiellement.\nCarie débutante :\n• Dès que la lésion atteint la jonction amélo-dentinaire (JAD), elle s’étend latéralement sous celle-ci.\n• Atteinte dentinaire :\no Déminéralisation circonscrite à une zone limitée correspondant à la zone amélaire déminéralisée \no L’atteinte reste superficielle et limitée.\n• Prise en charge clinique :\no Conservation des tissus dentaires altérés potentiellement reminéralisables.\no Approche non invasive privilégiée (surveillance, fluor, hygiène...)."
      },
      {
        "questionText": "Dans la lésion à progression rapide:",
        "options": [
          "La destruction des odontoblastes est rapide",
          "Le cerne laiteux de Marmasse est caractéristique",
          "La production d'acides issus du métabolisme est faible",
          "L'évolution est souvent asymptomatique",
          "Les caries cachées représentent la caractéristique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Lésion à progression rapide :\n• Production d’acides issue du métabolisme bactérien est intense\n• Destruction rapide des odontoblastes\n• Pas de dentine sclérotique\n• Cavitation rapide de l’émail et de la dentine (une semaine, un mois)\n• Lésions le plus souvent symptomatiques (réactions inflammatoires pulpaires)\n• Retrouvées chez le jeune\n• Caractéristiques des caries cachées"
      },
      {
        "questionText": "Le diagnostic différentiel des anomalies des structures dentaires se fait avec :",
        "options": [
          "Les dyschromies extrinsèques",
          "Les fractures radiculaires",
          "Les lésions carieuses",
          "Les déminéralisations post-orthodontiques",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "LES ANOMALIES DE STRUCTURE DENTAIRE : Ce sont des altérations microscopiques ou macroscopiques des tissus durs dentaires d’étiologies héréditaires ou acquises. Elles sont consécutives à un « accident de parcours »lors DE L’ODONTOGENÈSE.\nDiagnostic différentiel des anomalies de structure dentaire se fait avec :\n▪ Les dyschromies extrinsèques\n▪ Les lésions carieuses\n▪ Les déminéralisations post-orthodontiques"
      },
      {
        "questionText": "La dentine réactionnelle est:",
        "options": [
          "Une dentine secondaire",
          "Une dentine tertiaire",
          "Est située à l'intérieur des tubuli dentinaires",
          "Elaborée par les odontoblastes secondaires",
          "Elaborée suite à une agression"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La dentine tertiaire : dentine réactionnelle, se constitue à la périphérie de la pulpe lors des agressions.\nLa sclérodentine : correspond à une hyper minéralisation de la dentine primaire par oblitération des tubuli dentinaire.\nLa dentine réparatrice : elle se constitue par les odontoblastes secondaires « LIKE »"
      },
      {
        "questionText": "Parmi les critères de diagnostic différentiel des anomalies de structure de la dent:",
        "options": [
          "L'amélogénèse imparfaite concerne souvent les deux dentures",
          "On parle d'une dent fantôme lorsqu'il s'agit de l'odontogenèse imparfaite",
          "La fluorose dentaire peut concerner toute la denture",
          "L'émail est de mauvaise qualité dans le cas de la dentinogenèse imparfaite",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans les pathologies pulpo-dentinaires",
        "options": [
          "L'état général du patient influe sur la prise en charge",
          "Une hypersensibilité dentinaire peut causer une inflammation pulpaire chronique",
          "L'érosion est causée par le bruxisme",
          "Une dentine tertiaire est formée quel que soit le type de la lésion carieuse",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’érosion : Elle est d’origine purement chimique due essentiellement à une consommation excessive de boissons acides, médicaments (acide ascorbique, aspirine), mais aussi à des reflux gastro-oesophagiens\nLa dentine tertiaire est, quant à elle, sécrétée en réponse à une agression, elle est cicatricielle"
      },
      {
        "questionText": "AU NIVEAU DE L'EMAIL DENTAIRE:",
        "options": [
          "Les taches blanches traduisent des plages de déminéralisation au niveau de sites de stagnation et de rétention de la plaque.",
          "Après 04 semaines, les taches blanches deviennent visibles après séchage seulement.",
          "Les taches blanches peuvent éventuellement se colorer en brun ou en jaune.",
          "Les colorations des taches blanches sont d'origine endogène.",
          "Le cône carieux forme un rectangle dont le sommet est dirigé vers la jonction amélo dentinaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Après 2 semaines; ces taches cliniquement visibles après séchage. Au bout de 4 semaines ; elles sont détectables au travers du film salivaire\nD : coloration est d’origine exogène (alimentaire, bactérienne ou tabagique)"
      },
      {
        "questionText": "DANS LES CARIES DEBUTANTES:",
        "options": [
          "La dentine subit seulement une déminéralisation circonscrite.",
          "L'infection bactérienne y est limitée superficiellement.",
          "Nous favorisons dans nos thérapeutiques les interventions non invasives.",
          "La déminéralisation progresse verticalement sous la JAD.",
          "Le test au froid est négatif."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "À ce stade, la dentine subit seulement une déminéralisation, circonscrites à une zone limitée correspondant à la zone amélaire déminéralisée."
      },
      {
        "questionText": "DANS LA LESION A PROGRESSION RAPIDE :",
        "options": [
          "La production d'acides issus du métabolisme est intense",
          "La destruction des odontoblastes est lente; donc pas de dentine sclérotique",
          "La destruction cavitaire de l'émail et de la dentine est rapide",
          "La dent est souvent symptomatique",
          "La présence des caries cachées est caractéristique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Destruction rapide des odontoblastes et donc pas de dentine sclérotique.\nCes lésions sont le plus souvent symptomatiques (réactions inflammatoires pulpaires chez le jeune caractéristique des caries cachées."
      },
      {
        "questionText": "dans la classification si/sta, le stade 0 :",
        "options": [
          "Est un stade réversible",
          "Est une lésion initiale active, superficielle",
          "Est une lésion sans cavitation, strictement amélaire",
          "Est une lésion nécessite le recours à une intervention restauratrice",
          "Est une lésion qui nécessite un traitement préventif non invasif"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Ne nécessitant pas le recours à une intervention restauratrice, mais un traitement préventif non invasif."
      },
      {
        "questionText": "les atteintes pulpo-dentinaires :",
        "options": [
          "S’initient par une inflammation pulpaire réversible",
          "S’initient par un syndrome douloureux dentinaire",
          "Sont asymptomatique",
          "Peuvent être des anomalies dentaires de nombre",
          "Peuvent être des pulpites irréversibles"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C : Les atteintes pulpo-dentinaires sont généralement associées à des symptômes, notamment une douleur dentaire.\nD : les anomalies dentaires de nombre sont généralement des problèmes de développement dentaire distincts des atteintes pulpo-dentinaires."
      },
      {
        "questionText": "en cariologie, la tache blanche sur une surface dentaire lisse est :",
        "options": [
          "Une dyschromie",
          "Une déminéralisation amélaire pouvant être réversible",
          "Accompagnée souvent d’une réaction pulpaire",
          "Une atteinte symptomatique",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Une tache blanche sur une surface dentaire lisse est généralement une déminéralisation de l'émail, pas une dyschromie.\nB : Une tache blanche n'est pas nécessairement une atteinte symptomatique."
      },
      {
        "questionText": "l’érosion dentaire :",
        "options": [
          "Est une lésion due aux contraintes occlusales",
          "Est une attaque acide d’origine bactérienne",
          "Peut concerner les faces palatines des dents antérieures supérieures",
          "Est une destruction progressive de l’émail et de la dentine",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A : L'érosion dentaire n'est généralement pas due aux contraintes occlusales, mais plutôt à l'action d'acides sur les dents.\nB : LES ACIDES INTERVENANT dans les processus d’érosion NE SONT PAS D’ORIGINE BACTERIENNE."
      },
      {
        "questionText": "Le processus carieux au niveau de la dentine :",
        "options": [
          "Est toujours réversible",
          "Est douloureux",
          "Entraine automatiquement une destruction de la palissade odontoblastique",
          "Est une dentinite",
          "Se présente histologiquement sous forme d’un cône carieux"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans l'atteinte dentinaire stade 2 :",
        "options": [
          "Le patient se plaint de douleurs provoquées uniquement au froid.",
          "Le patient se plaint de douleurs provoquées uniquement.",
          "Le patient se plaint de douleurs aux variations thermiques,",
          "Le patient se plaint de douleurs aux acides et sucres.",
          "Le patient se plaint de douleurs spontanées"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "lésion active, de moyenne étendue. ayant progressée dans le 1/3 médian de la dentine, Et donc les douleurs sont provoqué uniquement ( aux différents stimulations )"
      },
      {
        "questionText": "l’abrasion est due à un processus :",
        "options": [
          "Chimique",
          "Mécanique",
          "Infectieux",
          "Dégénératif",
          "Malformatif"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'abrasion dentaire est généralement due à un processus mécanique, comme le brossage dentaire excessif, l'utilisation de dentifrices abrasifs, l'utilisation de dentifrices durs, le grincement des dents (bruxisme), ou l'utilisation de brosses à dents dures. Cela provoque l'usure de l'émail dentaire"
      },
      {
        "questionText": "Les pulpites irréversibles chroniques :",
        "options": [
          "(1-2-3)",
          "(2-3-4)",
          "(1-4)",
          "(1-3-5)",
          "(2-3)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Taches blanches : des plages de déminéralisation d’émail au niveau des sites de stagnation et de rétention de la plaque. Après 2 semaines ; ces taches cliniquement visibles après séchage. Au bout de 4 semaines ; elles sont détectables au travers du film salivaire(Fejerskov et al. 2003).\n2 : Sur les surfaces lisses proximales\n3 : Ces dernières peuvent secondairement se colorer en brun ou en jaune"
      },
      {
        "questionText": "Dans la classification de Black modifiée, la classe VI est :",
        "options": [
          "Une carie proximale avec atteinte du bord incisif au niveau des incisives et des canines.",
          "Une carie cervicale au niveau des incisives, des canines, des prémolaires et des molaires.",
          "Une carie proximale sans atteinte du bord incisif au niveau des incisives et des canines",
          "Une carie des bords incisifs et du sommet des cuspides.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la classification Si/STA, le stade 3 correspond à :",
        "options": [
          "Une lésion de petite étendue.",
          "Une lésion d’importante étendue.",
          "Une lésion ayant progressé dans le 1/3 interne de la dentine au point de Fragiliser les structures cuspidiennes.",
          "Une lésion ayant touché une corne pulpaire.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La carie secondaire :",
        "options": [
          "Est une lésion carieuse se développant aux marges d'une restauration existante.",
          "Est appelée aujourd'hui récidive de carie",
          "Est appelée aujourd'hui carie récurrente.",
          "Est appelée mylolyse.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La carie récurrente ou secondaire = récidivante"
      },
      {
        "questionText": "La tache blanche de l'émail :",
        "options": [
          "(1-2-3)",
          "(2-3-4)",
          "(1-4)",
          "(1-3-5)",
          "(2-3)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "2: Ces tâches ont trois sites principaux :\n➢ Au niveau du collet sous forme d’un croissant bordant la gencive\n➢ Sur les faces proximales, prenant l’aspect d’un triangle bordant les dents adjacentes.\n➢ Dans les sillons occlusaux et marginaux.\n4: est appelée white spot."
      },
      {
        "questionText": "Les facteurs indispensables au développement carieux sont:",
        "options": [
          "(1-4)",
          "(1-2)",
          "(1-3)",
          "(2-5)",
          "(3-4)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "1e facteur : la surface dentaire et l’organisme (importance des facteurs systémiques)\n2e facteur : les substances alimentaires et les produits de leurs décompositions = Adhérents à la surface dentaire, servent de véritables bouillons de cultures\naux micro-organismes.\n3e facteur : les micro-organismes.\nCe sont les facteurs 2 et 3, qui constituent la plaque dentaire, à laquelle on attribue aujourd’hui le rôle le plus important du point de vue de la pathogénie de la carie.\n4e facteur : le temps."
      },
      {
        "questionText": "Dans la classification de Black modifiée, la classe VI est :",
        "options": [
          "Une carie proximale avec atteinte du bord incisif au niveau des incisives et des canines.",
          "Une carie cervicale au niveau des incisives, des canines, des prémolaires et des molaires.",
          "Une carie proximale sans atteinte du bord incisif au niveau des incisives et des canines",
          "Une carie des bords incisifs et du sommet des cuspides.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la classification Si/STA, le stade 3 correspond à :",
        "options": [
          "Une lésion de petite étendue.",
          "Une lésion d’importante étendue.",
          "Une lésion ayant progressé dans le 1/3 interne de la dentine au point de Fragiliser les structures cuspidiennes.",
          "Une lésion ayant touché une corne pulpaire.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La carie secondaire :",
        "options": [
          "Est une lésion carieuse se développant aux marges d'une restauration existante.",
          "Est appelée aujourd'hui récidive de carie",
          "Est appelée aujourd'hui carie récurrente.",
          "Est appelée mylolyse.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La carie récurrente ou secondaire = récidivante"
      },
      {
        "questionText": "La tache blanche de l'émail :",
        "options": [
          "(1-2-3)",
          "(2-3-4)",
          "(1-4)",
          "(1-3-5)",
          "(2-3)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "2: Ces tâches ont trois sites principaux :\n➢ Au niveau du collet sous forme d’un croissant bordant la gencive\n➢ Sur les faces proximales, prenant l’aspect d’un triangle bordant les dents adjacentes.\n➢ Dans les sillons occlusaux et marginaux.\n4: est appelée white spot."
      },
      {
        "questionText": "Les facteurs indispensables au développement carieux sont:",
        "options": [
          "(1-4)",
          "(1-2)",
          "(1-3)",
          "(2-5)",
          "(3-4)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "1e facteur : la surface dentaire et l’organisme (importance des facteurs systémiques)\n2e facteur : les substances alimentaires et les produits de leurs décompositions = Adhérents à la surface dentaire, servent de véritables bouillons de cultures\naux micro-organismes.\n3e facteur : les micro-organismes.\nCe sont les facteurs 2 et 3, qui constituent la plaque dentaire, à laquelle on attribue aujourd’hui le rôle le plus important du point de vue de la pathogénie de la carie.\n4e facteur : le temps."
      },
      {
        "questionText": "L’érosion dentaire :",
        "options": [
          "Résulte d’une déminéralisation d’acide d’origine bactérienne",
          "Résulte d’une déminéralisation acide d’origine intrinsèque ou extrinsèque alimentaire",
          "La lésion a une forme en cuvette",
          "La lésion peut siéger sur la face occlusale des dents",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Elle résulte d’un processus chimique ou physicochimique faisant intervenir des acides d’origine endogène ou exogène sur les surfaces dentaires.\nLES ACIDES INTERVENANT dans les processus d’érosion NE SONT PAS D’ORIGINE BACTERIENNE"
      },
      {
        "questionText": "La lésion pré-carieuse de l’émail :",
        "options": [
          "Est une hypo minéralisation",
          "Est appelée MIII",
          "Devient une lésion arrêtée par recharge en éléments minéraux",
          "Résulte de réaction physicochimique"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les lésions précarieuses ou taches blanches peuvent évoluer en s'aggravant (caries actives) ou se stabiliser et devenir des taches brunes (caries arrêtées)"
      },
      {
        "questionText": "la lésion carieuse arrêtée :",
        "options": [
          "Présente une déminéralisation",
          "Est due à un apport important en hydrates de carbones",
          "Est une stabilité de la lésion",
          "Se présentes sous forme de taches brunes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "la lésion carieuse amélaire arrêtée de couleur marron foncé à noir . La surface est dure et lisse au sondage . Elle est non cavitaire"
      },
      {
        "questionText": "dans le cas de la dentinite (1/3 externe de la dentine) :",
        "options": [
          "Les douleurs sont provoquées non durables",
          "Les douleurs sont provoquées durables",
          "Les douleurs sont spontanées",
          "Il n’y a pas de douleurs spontanées",
          "Toute les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "therapeutiques des mortifications pulpaires",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Le traitement de la gangrène pulpaire comprend",
        "options": [
          "La dépulpation",
          "Le parage canalaire",
          "La désinfection canalaire",
          "L'obturation canalaire",
          "La reconstitution coronaire hermétique et précoce"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "A : dans le cas d’une pulpe vivante enflammé \nLe traitement de la gangrène pulpaire comprend 4 étapes:\n-Le parage canalaire\n-La désinfection canalaire\n-L’obturation canalaire \n-La reconstitution coronaire hermétique et précoce."
      },
      {
        "questionText": "DANS LA THERAPEUTIQUE DES GANGRENES PULPAIRES, NOUS POUVONS UTILISER COMME IRRIGANT",
        "options": [
          "L'hypochlorite de sodium",
          "L'eau oxygénée.",
          "La chlorhexidine.",
          "L'acide éthylène diamine tétra acétique.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement de la gangrène pulpaire consiste à faire:",
        "options": [
          "Une pulpectomie",
          "Un drainage",
          "Un parage canalaire",
          "Une irrigation canalaire",
          "Un parage et une désinfection canalaire"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le traitement de la gangrène pulpaire comprend 4 étapes:-Le parage canalaire\n-La désinfection canalaire-L’ obturation canalaire—La reconstitution coronaire hermétique et précose"
      },
      {
        "questionText": "LE TRAITEMENT DE LA GANGRENE PULPAIRE CONSISTE A REALISER :",
        "options": [
          "Une pulpectomie",
          "Un drainage",
          "Une pulpotomie",
          "Une pulpectomie et une désinfection canalaire",
          "Un parage canalaire et une désinfection canalaire"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Ce traitement endodontique (canalaire) consiste en: La suppression définitive du foyer infectieux et nécrotique du contenu canalaire."
      },
      {
        "questionText": "l’étiologies des gangrènes pulpaires peut être :",
        "options": [
          "Des réactions exothermiques de certains matériaux dentaires",
          "Des fractures par exposition pulpaire",
          "Des expositions dentinaires ( abrasion ; érosion )",
          "Une taille ou un meulage",
          "Une infection par anachorèse"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans les thérapeutiques des mortifications pulpaires, l'hypochlorite de sodium est utilisé:",
        "options": [
          "En association avec l'eau oxygénée.",
          "En irrigation.",
          "Juste après la réalisation de la cavité d'accès.",
          "A l'aide d'une seringue endodontique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’hypochlorite de sodium demeure jusqu’à présent l’irrigant de référence en endodontie (a l’avantage d’être largement testé)"
      },
      {
        "questionText": "Dans le traitement de la gangrène pulpaire:",
        "options": [
          "La limite apicale de la préparation est le foramen apical.",
          "La limite apicale de la préparation est la jonction cémento-dentinaire.",
          "Le processus cicatriciel est cémentogène",
          "Le processus cicatriciel est ostéo-cémentogène.",
          "Toutes les sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans le traitement de la gangrène pulpaire:",
        "options": [
          "La limite apicale de la préparation est le foramen apical.",
          "La limite apicale de la préparation est la jonction cémento-dentinaire.",
          "Le processus cicatriciel est cémentogène",
          "Le processus cicatriciel est ostéo-cémentogène.",
          "Toutes les sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "Protection Dentino-Pulpaires et Les Coiffages Pulpo Dentinaires",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LES FACTEURS INFLUENCANT LA PERMEABILITE DENTINAIRE SONT:",
        "options": [
          "La présence ou l'absence de la dentine affectée.",
          "Le diamètre des tubuli.",
          "L'application topique du calcium.",
          "La densité de la dentine.",
          "La longueur des tubuli"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : La présence de boue dentinaire\nC : Les applications topiques de fluor"
      },
      {
        "questionText": "LES MECANISMES DE DEFENSE DU COMPLEXE PULPO-DENTINAIRE FACE A UNE AGRESSION, PEUVENT ETRE:",
        "options": [
          "L'élaboration de dentine sclérotique",
          "L'élaboration de dentine réactionnelle",
          "L'élaboration de dentine nécrotique",
          "L'inflammation pulpaire chronique",
          "L'inflammation pulpaire aigue"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ligne de défense dentinaire : La dentine réactionnelle ; Dentine réactionnelle sclérotique ; La dentine réparatrice\nLa ligne de défense pulpaire : l’inflammation"
      },
      {
        "questionText": "le BIODENTINE :",
        "options": [
          "Est un matériau de restauration",
          "Est biocompatible",
          "Peut être utilisé comme restauration pendant une période de 6 mois",
          "Est un substitut dentinaire",
          "Assure l’étanchéité coronaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Biodentine est un substitut dentinaire bioactif. Biodentine possède des propriétés mécaniques similaires à la dentine saine et peut la remplacer tant au niveau coronaire qu’au niveau radiculaire, sans traitement de surface préalable des tissus calcifiés."
      },
      {
        "questionText": "Lors d'un coiffage dentinaire :",
        "options": [
          "(1,2)",
          "(1,3)",
          "(2.4)",
          "(4,5)",
          "(1,5)"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "1- Le curetage dentinaire doit être parfait. ✅ Correct.\n2- Le curetage est réalisé à l'aide de deux types de fraises : boule et cylindrique. ❌ Faux, la fraise cylindrique est utilisée pour la taille de la cavité.\n3- On laisse un opercule de dentine décalcifiée. ❌ Faux, cette approche est spécifique au coiffage pulpaire indirect.\n4- On laisse un opercule de dentine infiltrée au centre, mais le curetage doit être parfait au niveau des parois. ❌ Faux, cela concerne également le coiffage pulpaire indirect.\n5- L'anesthésie n'est pas obligatoire. ✅ Correct."
      },
      {
        "questionText": "Les indications majeures du coiffage pulpaire.direct sont :",
        "options": [
          "L'inflammation pulpaire partielle",
          "Les caries profondes",
          "Les fractures coronaires pénétrantes anciennes de diamètre de moins de 1 mm",
          "Les caries à évolution rapide",
          "La mise à nue iatrogène sur dent immature"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Indication du coiffge pulpaire direct\n-Fractures (incisives) avec effraction pulpaire inférieure al mm 2-\n- Ouverture accidentelle de la pulpe lors de l'excavation d'une dent jeune avec dentine saine\n- Ouverture accidentelle de la pulpe lors de l'excavation d'une carie d' une dent mais dont la croissance des racine n'est pas achevée\n-Une pulpe non inflammatoire exposée par inadvertance lors d'une préparation dentinaire possède une forte potentiel régénératif\n- Les dénudation occasionnées par les abrasion ou les érosions cunéiformes"
      },
      {
        "questionText": "la protection dentino pulpaire :",
        "options": [
          "Protège la pulpe dentaire contre la nécrose",
          "Protège la pulpe dentaire contre la toxicité de certains matériaux de restauration définitive",
          "Peut être assurée par un eugénate sous un amalgame sur dent dévitalisée",
          "Peut être assurée par l’application de Ca(OH), sous un composite sur dent à pulpe vitale",
          "Peut être assurée par les systèmes adhésifs dans les cavités peu profondes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C’est l’ensemble des mesures qui peuvent être prises lors de la restauration des dents pour éviter les atteintes pulpaires susceptibles d’engendrer des douleurs pour le patient ou de conduire à la nécrose pulpaire."
      },
      {
        "questionText": "LE FOND DE CAVITE :",
        "options": [
          "Est indiqué uniquement sur dents à pulpes vitales",
          "Permet de renforcer la dent",
          "Est toujours une couche de faible épaisseur",
          "Peut avoir le rôle de substitut dentinaire",
          "Peut être réalisé par un ciment verre ionomère sous un composite pour les cavités profondes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Il s’agit de poser un produit sous le matériau de restauration définitive et sur la dentine en regard de la pulpe (le fond de la cavité) dans le but de protéger cette dernière contre les agressions mécaniques et/ou chimiques et pour renforcer la structure dentaire."
      },
      {
        "questionText": "le coiffage pulpaire indirect :",
        "options": [
          "Nécessite un curetage dentinaire total et parfait",
          "Nécessite une hémostase",
          "Permet une restauration définitive de la même séance",
          "Peut être réalisé à l’aide d’oxyde de zinc eugénol",
          "Nécessite la mise du produit de coiffage seulement en regarde de la pulpe"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A : n’est pas complet : total au niveau des parois et partiel en regard de la pulpe \nB : c’est le coiffage pulpaire direct qui nécessite l’Hémostase \nC : d’abord une restauration provisoire et puis la restauration définitive à une séance ultérieure \nD : Peut être réalisé à l’aide d’hydroxyde de calcuim / MTA / Biodentine"
      },
      {
        "questionText": "les indications des coiffages pulpaires indirects sont :",
        "options": [
          "Les lésions carieuse actives",
          "Les fractures horizontales ou obliques pénétrante",
          "Les caries à évolution lente",
          "Les pulpites réversibles",
          "Les pulpites chronique hyperplasique"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C : c’est l’indication du coiffage dentinaire \nE : Les pulpites chronique fermé"
      },
      {
        "questionText": "les indications du coiffage pulpaire direct sont :",
        "options": [
          "La pulpotomie",
          "Les caries très profondes (proche de la pulpe)",
          "La mise à nu iatrogène de la pulpe",
          "Les fractures coronaires non pénétrantes",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "B : l’indication de coiffage indirect \nD : Les fractures coronaires avec exposition pulpaire"
      },
      {
        "questionText": "le coiffage naturel de BONSACK :",
        "options": [
          "Est un coiffage pulpaire direct",
          "Est un coiffage dentinaire",
          "Est appliqué pendant une durée d’un mois et demi",
          "Nécessite un curetage dentinaire parfait",
          "Est une thérapeutique particulière à la carie à évolution rapide"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A/B : Est un Coiffage juxta pulpaire\nC : Dans un coiffage juxta-pulpaire, on laisse au plus le produit de coiffage pendant au moins 3 mois, après lequel il devient possible de restaurer définitivement la dent."
      },
      {
        "questionText": "lors d’un coiffage pulpaire direct , le pont dentinaire est formé par :",
        "options": [
          "La dentine réactionnelle",
          "La dentine secondaire",
          "La dentine tertiaire",
          "La dentine réparatrice",
          "La dentine physiologique"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Lors d'un CPD, la réussite du traitement aboutit à l'élaboration d'un pont dentinaire minéralisé par le tissu pulpaire. La dentine réparatrice ainsi sécrétée permet donc la formation d’un pont dentinaire qui s’élabore en moyenne en 6 semaines après la mise en place d’un biomatériau au contact de la zone pulpaire lésée ."
      },
      {
        "questionText": "Le curetage dentinaire est :",
        "options": [
          "Total dans le coiffage pulpaire indirect",
          "Incomplet dans le coiffage pulpaire direct",
          "Mécanique dans un premier temps.",
          "Réalisé sous anesthésie de contact",
          "Total dans la pulpotomie."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "a : dans le coiffage pulpaire indirect le curetage dentinaire est inomplet = total au niveau des parois et partiel en regard de la pulpe \nb: sensé être réaliser avant lexposition pulpaire"
      },
      {
        "questionText": "La durée approximative d'application du produit de cofffage dentinaire est de :",
        "options": [
          "06 mois.",
          "06 semaines.",
          "03 mois.",
          "03 semaines.",
          "01 semaine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le coiffage pulpaire direct :",
        "options": [
          "Est appelé coiffage naturel.",
          "Le produit de coiffage est l'oxyde de zinc eugénol",
          "Consiste à placer le produit de coiffage sur la plaie pulpaire.",
          "Est indiqué dans le cas de pulpite réversible",
          "Le produit de coiffage est le Biodentine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A/D : Le coiffage pulpaire indirect est indiqué"
      },
      {
        "questionText": "Le curetage dentinaire :",
        "options": [
          "Est toujours total.",
          "Précède la taille de cavité.",
          "Met à nu les tubuli dentinaires.",
          "Est mécanique, puis manuel.",
          "Est toujours réalisé sous anesthésie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L e curetage dentinaire consiste à enlever la dentine cariée, mettant ainsi à nu les tubuli dentinaires, qui sont de minuscules canaux dans la dentine.\nLe curetage dentinaire peut se faire avec ou sans anesthésie locale ou loco-régionale."
      },
      {
        "questionText": "Le coiffage pulpaire indirect :",
        "options": [
          "Est indiqué dans le cas de pulpite réversible.",
          "Est indiqué dans les cavités profondes.",
          "La restauration peut être réalisée la même séance.",
          "Est une thérapeutique cémentogène.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le but de cette technique étant la formation de la dentine tertiaire durant le laps du temps séparant les deux séances.\nEst une thérapeutique dentinegène"
      },
      {
        "questionText": "LE CHOIX DU MATERIAU DE PROTECTION PULPO-DENTINAIRE SE FAIT EN FONCTION:",
        "options": [
          "De l'épaisseur de la dentine résiduelle (EDR) avant la préparation qui doit être inférieure à 0,5mm.",
          "Du matériau de restauration utilisé.",
          "De l'état de surface de la dentine.",
          "De l'objectif recherché.",
          "Des impératifs liés à l'esthétique de la restauration."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : On considère qu’une EDR minimale de 0.5 mm est nécessaire pour éviter tout dommage à la pulpe"
      },
      {
        "questionText": "lors d’un coiffage pulpaire direct , le pont dentinaire est formé par :",
        "options": [
          "La dentine réactionnelle",
          "La dentine secondaire",
          "La dentine tertiaire",
          "La dentine réparatrice",
          "La dentine physiologique"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Lors d'un CPD, la réussite du traitement aboutit à l'élaboration d'un pont dentinaire minéralisé par le tissu pulpaire. La dentine réparatrice ainsi sécrétée permet donc la formation d’un pont dentinaire qui s’élabore en moyenne en 6 semaines après la mise en place d’un biomatériau au contact de la zone pulpaire lésée ."
      },
      {
        "questionText": "le coiffage naturel de BONSACK :",
        "options": [
          "Est un coiffage pulpaire direct",
          "Est un coiffage dentinaire",
          "Est appliqué pendant une durée d’un mois et demi",
          "Nécessite un curetage dentinaire parfait",
          "Est une thérapeutique particulière à la carie à évolution rapide"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A/B : Est un Coiffage juxta pulpaire\nC : Dans un coiffage juxta-pulpaire, on laisse au plus le produit de coiffage pendant au moins 3 mois, après lequel il devient possible de restaurer définitivement la dent."
      },
      {
        "questionText": "Le Biodentine est un :",
        "options": [
          "(1,2)",
          "(1,4)",
          "(2,5)",
          "(3,4)",
          "(5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Biodentine\na-Composition\n- Poudre à base de silicate tricalcique, silicate dicalcique carbonate et oxyde de calcium.\n-Liquide: Solution aqueuse de chlorure de calcium.\nLe biodentine est un substitut dentinaire bioactif.\nb-Propriétés : Il possède des propriétés mécaniques similaires à la dentinesaine et peut la remplacer tant au niveau coronaire qu'au niveau radiculaire, sans traitement de surface préalable des tissus calcifiés.Il ne supporte pas l'humidité durant sa prise (retarde sa prise de 12 minutes).Protections dentino-pulpaires et thérapeutiques bio conservatrices des dentinitesIl est biocompatible. Pouvoir dentinogène et antibactérien.Radio-opaque.\nc-Indications:\n-Coiffage pulpaire indirect;\n-Expositions pulpaires traumatiques;\n-Expositions pulpaires infectieuses cariogéniques;\n-Expositions pulpaires accidentelles pendant la préparation cavitaire;\n-Perforations et résorptions externes et internes ;\n-Obturation à rétro.\n-Apéxification,apexogénése."
      },
      {
        "questionText": "Le curetage dentinaire est :",
        "options": [
          "Total dans le coiffage pulpaire indirect",
          "Incomplet dans le coiffage pulpaire direct",
          "Mécanique dans un premier temps.",
          "Réalisé sous anesthésie de contact",
          "Total dans la pulpotomie."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "a : dans le coiffage pulpaire indirect le curetage dentinaire est inomplet = total au niveau des parois et partiel en regard de la pulpe \nb: sensé être réaliser avant lexposition pulpaire"
      },
      {
        "questionText": "La durée approximative d'application du produit de cofffage dentinaire est de :",
        "options": [
          "06 mois.",
          "06 semaines.",
          "03 mois.",
          "03 semaines.",
          "01 semaine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La réponse dentinaire face à nos thérapeutiques entraîne la formation :",
        "options": [
          "D'une dentine réactionnelle.",
          "D'une dentine secondaire.",
          "D'une dentine réparatrice.",
          "D'une prédentine,",
          "D'une dentine élaborée par les cellules progénétrices"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les thérapeutique vitales de la pulpe font appel à l’une des fonctions essentielles : la dentinogénèse"
      },
      {
        "questionText": "Le curetage dentinaire peut être :",
        "options": [
          "Mécanique.",
          "Manuelle.",
          "Réalisé sous irrigation.",
          "Chimique.",
          "Ultrasonique"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le curetage dentinaire est un act opératoire spécifique au traitement de la lésion carieuse"
      },
      {
        "questionText": "Le coiffage pulpaire direct :",
        "options": [
          "Est appelé coiffage naturel.",
          "Le produit de coiffage est l'oxyde de zinc eugénol",
          "Consiste à placer le produit de coiffage sur la plaie pulpaire.",
          "Est indiqué dans le cas de pulpite réversible",
          "Le produit de coiffage est le Biodentine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A/D : Le coiffage pulpaire indirect est indiqué"
      },
      {
        "questionText": "Le curetage dentinaire :",
        "options": [
          "Est toujours total.",
          "Précède la taille de cavité.",
          "Met à nu les tubuli dentinaires.",
          "Est mécanique, puis manuel.",
          "Est toujours réalisé sous anesthésie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L e curetage dentinaire consiste à enlever la dentine cariée, mettant ainsi à nu les tubuli dentinaires, qui sont de minuscules canaux dans la dentine.\nLe curetage dentinaire peut se faire avec ou sans anesthésie locale ou loco-régionale."
      },
      {
        "questionText": "Le coiffage pulpaire indirect :",
        "options": [
          "Est indiqué dans le cas de pulpite réversible.",
          "Est indiqué dans les cavités profondes.",
          "La restauration peut être réalisée la même séance.",
          "Est une thérapeutique cémentogène.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le but de cette technique étant la formation de la dentine tertiaire durant le laps du temps séparant les deux séances.\nEst une thérapeutique dentinegène"
      },
      {
        "questionText": "La réponse dentinaire à nos thérapeutiques entraine la formation :",
        "options": [
          "(1-3-5)",
          "(1-2-4)",
          "(2-5)",
          "(1-2-3)",
          "(2-3-4-5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Une agression d'intensité faible ou modérée va entrainer une brève réponse inflammatoire suivie d'une dentinogénese réactionnelle.\nDans le cas d'une agression de forte intensité (carie profonde ou traumatisme sévère), l'odontoblaste peut être amené à disparaitre et, tant que l'inflammation reste contrôlée, il y a formation d'un pont de dentine réparatrice.\nLorsque les odontoblastes sont détruits, un recrutement de cellules progénétrices locales ou distantes. Ces cellules viennent fermer la brèche.\nAprès exposition pulpaire et mise en place de matériau approprié, un pont dentinaire est formé en quelques semaines par des nouvelles cellules."
      },
      {
        "questionText": "Le curetage dentinaire peut être :",
        "options": [
          "Mécanique.",
          "Manuelle.",
          "Réalisé sous irrigation.",
          "Chimique.",
          "Ultrasonique"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le curetage dentinaire est un act opératoire spécifique au traitement de la lésion carieuse"
      },
      {
        "questionText": "Le coiffage pulpaire direct :",
        "options": [
          "Est appelé coiffage naturel.",
          "Le produit de coiffage est l'oxyde de zinc eugénol",
          "Consiste à placer le produit de coiffage sur la plaie pulpaire.",
          "Est indiqué dans le cas de pulpite réversible",
          "Le produit de coiffage est le Biodentine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A/D : Le coiffage pulpaire indirect est indiqué"
      },
      {
        "questionText": "Le curetage dentinaire :",
        "options": [
          "Est toujours total.",
          "Précède la taille de cavité.",
          "Met à nu les tubuli dentinaires.",
          "Est mécanique, puis manuel.",
          "Est toujours réalisé sous anesthésie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L e curetage dentinaire consiste à enlever la dentine cariée, mettant ainsi à nu les tubuli dentinaires, qui sont de minuscules canaux dans la dentine.\nLe curetage dentinaire peut se faire avec ou sans anesthésie locale ou loco-régionale."
      },
      {
        "questionText": "Le coiffage pulpaire indirect :",
        "options": [
          "Est indiqué dans le cas de pulpite réversible.",
          "Est indiqué dans les cavités profondes.",
          "La restauration peut être réalisée la même séance.",
          "Est une thérapeutique cémentogène.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le but de cette technique étant la formation de la dentine tertiaire durant le laps du temps séparant les deux séances.\nEst une thérapeutique dentinegène"
      },
      {
        "questionText": "La réponse dentinaire à nos thérapeutiques entraine la formation :",
        "options": [
          "(1-3-5)",
          "(1-2-4)",
          "(2-5)",
          "(1-2-3)",
          "(2-3-4-5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Une agression d'intensité faible ou modérée va entrainer une brève réponse inflammatoire suivie d'une dentinogénese réactionnelle.\nDans le cas d'une agression de forte intensité (carie profonde ou traumatisme sévère), l'odontoblaste peut être amené à disparaitre et, tant que l'inflammation reste contrôlée, il y a formation d'un pont de dentine réparatrice.\nLorsque les odontoblastes sont détruits, un recrutement de cellules progénétrices locales ou distantes. Ces cellules viennent fermer la brèche.\nAprès exposition pulpaire et mise en place de matériau approprié, un pont dentinaire est formé en quelques semaines par des nouvelles cellules."
      },
      {
        "questionText": "Le coiffage pulpaire indirect :",
        "options": [
          "Est indiqué dans le cas de pulpite réversible",
          "Est indiqué dans le cas des lésions carieuses profondes, sur Les dents symptomatiques.",
          "Le produit de coiffage est placé sur un opercule de dentine décalcifiée.",
          "Le produit de coiffage a une épaisseur de 2mm."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le coiffage pulpaire indirect est indiqué dans les lesion carieuse à évolution rapide profonde avec absence de signes cliniques de pulpites irréversibles"
      },
      {
        "questionText": "Le coiffage pulpaire direct :",
        "options": [
          "Est appelé coiffage juxtapulpaire.",
          "Le produit de coiffage est l’oxyde de zinc eugénol",
          "Consiste à placer sur la plaie de la pulpe un produit de coiffage.",
          "Est indiqué dans le cas d'une effraction iatrogène de plus de 1 mm."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La réponse dentinaire à nos thérapeutiques, entraîne la formation :",
        "options": [
          "D'une dentine réactionnelle.",
          "D'une dentine secondaire.",
          "D'une dentine réparatrice.",
          "D'une dentine intertubulaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le coiffage dentinaire :",
        "options": [
          "Consiste à coiffer une plaie au niveau de la pulpe.",
          "Est indiqué dans le cas de pulpites irréversibles.",
          "Est indiqué dans les fractures coronaires pénétrantes.",
          "Le curetage dentinaire est complet."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C’est une intervention qui consiste à placer sur une plaie vive de la dentine une substance capable de permettre une guérison pulpaire accompagnée d’une formation de dentine"
      },
      {
        "questionText": "Le curetage dentinaire :",
        "options": [
          "Est toujours total",
          "Précède la taille de la cavité.",
          "Met à nu les tubuli dentinaires.",
          "est mécanique puis manuel"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'hydroxyde de calcium (Ca(OH)2):",
        "options": [
          "Est utilisé comme produit de coiffage lors d'une restauration à l'amalgame.",
          "Est sédatif par les ions OH+",
          "Est un produit dentinogene",
          "Est un produit cariostatique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le Ca(OH) 2 a une action sédative dû à la libération des salicylates lors de la solubilisation progressive du ciment"
      },
      {
        "questionText": "Le MTA :",
        "options": [
          "A un PH égal à 11.",
          "Possède un pouvoir dentinogène.",
          "A une action bactericide.",
          "Possède des propriétés biologiques et histologiques supérieures à l'hydroxyde de calcium"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "PH =10,2."
      }
    ]
  },
  {
    "title": "Endodontie et préparation canalaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "La cavité d'accès endodontique",
        "options": [
          "Est une cavité à 5 parois",
          "Peut nécessiter l'utilisation d'une fraise boule long col",
          "Peut-être à 3 parois",
          "Peut-être réalisée par un endoflare",
          "Peut nécessiter l'utilisation une fraise ENDO-ZEKRYA"
        ],
        "correctOptionIndexes": [
          1,
          4
        ],
        "explanation": "A : Est une cavité de 3 à 4 parois. Constituer un réservoir permanent pour les solutions d’irrigation : Seule une cavité d’accès à quatre parois est la garante d’une irrigation peropératoire satisfaisante.\nD : Endoflare, instrument en nickel-titane pour la suppression des surplombs dentinaires aux entrées canalaires et la préparation du tiers coronaire des canaux.\nE : Une fraise Zekrya Endo (Endo Z) : permet d’élargir et de finir la cavité tout en évitant une action iatrogène par sa pointe mousse."
      },
      {
        "questionText": "Quels sont les éléments anatomiques qui sont visibles sur un radiogramme.",
        "options": [
          "L'apex radiologique",
          "L'apex anatomique",
          "L'apex physiologique",
          "Le foramen apical",
          "La jonction cémento-dentinaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’apex radiologique : C’est l’image projetée sur un support radiologique (argentique ou numérique) de la partie la plus apicale de la dent."
      },
      {
        "questionText": "Quel est l'objectif du cathétérisme canalaire ?",
        "options": [
          "Obturer temporairement le canal",
          "Eliminer la boue dentinaire",
          "Explorer la perméabilité canalaire",
          "Irriguer le canal radiculaire",
          "Calculer la longueur de travail"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Cathétérisme ou pénétration initiale\nDéfinition : C’est l’exploration active et initiale du système canalaire.\nObjectifs : Évaluation de la perméabilité canalaire et le repérage tactile de certaines anomalies canalaires et détermination de la trajectoire générale du canal. - Atteindre la JCD."
      },
      {
        "questionText": "La préparation canalaire est :",
        "options": [
          "Une procédure exclusivement chimique.",
          "Une procédure exclusively mécanique",
          "Une procédure à la fois mécanique et chimique.",
          "Une procédure qui vise à élargir le foramen apical pour faciliter l'obturation.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La préparation canalaire : Selon LAURICHESSE, La préparation canalaire est aujourd’hui le domaine exclusif d’une technologie mécanique et physico-chimique qui s’applique à redéfinir les parois canalaires pour aboutir à une cavité endodontique finale autorisant la mise en place d’une unité biocompatible de substitution, masse d’obturation dense, hermétique et durable respectant les structures anatomiques"
      },
      {
        "questionText": "Une restauration pré endodontique:",
        "options": [
          "Est une restauration coronaire provisoire",
          "Est réalisée au composite",
          "Permet d'avoir un réservoir étanché pour la solution d'irrigation",
          "Doit présenter au minimum deux parois",
          "Elle assure l'étanchéité du champ opératoire"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Actuellement, les ciments verre ionomère sont utilisable la reconstitution pré-endodontique permet de rétablir les 4 parois"
      },
      {
        "questionText": "La jonction cémento-dentinaire:",
        "options": [
          "Est le point de rétrécissement maximal du canal",
          "Est le siège des parodontites",
          "Représente le vertex de la dent",
          "Se situe en deçà de l'apex radiologique",
          "Est la limite de la préparation et de l'obturation canalaire lors de la pulpectomie"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "C’est là où se termine la préparation canalaire et où commence l'obturation pour assurer un scellement hermétique\nA : La constriction apicale (C)"
      },
      {
        "questionText": "Une cavité d'accès endodontique correctement réalisée devra:",
        "options": [
          "Permettre l'élimination de tout le contenu de la chambre pulpaire",
          "Permettre de visualiser au moins une entrée canalaire",
          "Permettre d'avoir au minimum 3 parois",
          "Permettre l'accès à l'endodonte",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La cavité doit être à 4 parois afin d'assurer un réservoir constant de solution d'irrigation. Les entrées canalaires doivent être visibles directement et l'accès des instruments dans les canaux doit pouvoir se faire sans interférence dentinaire et/ou amélaire."
      },
      {
        "questionText": "Le Cathétérisme ou la pénétration initiale:",
        "options": [
          "C'est l'exploration active du système canalaire",
          "Correspond à la négociation initiale du système canalaire",
          "Est toujours réalisée avec des limes manuelles en acier de faible diamètre de pointe",
          "Implique un enfoncement des instruments apicalement pour rechercher d'emblée la longueur de travail",
          "Permet la détermination de la longueur de travail"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C’est l’exploration passive. L’instrument de cathétérisme pénètre jusqu’au niveau où le canal peut l’accepter sans chercher à atteindre d’emblée la longueur de travail et sans jamais forcer."
      },
      {
        "questionText": "L'irrigation endodontique :",
        "options": [
          "Assure le nettoyage et la stérilisation du système canalaire",
          "Doit commencer avec la préparation canalaire et ne s’arrêter qu’une fois l’obturation canalaire terminée",
          "Doit être renouvelée après chaque passage instrumentale",
          "Permet l’élimination des débris organiques et minéraux ainsi que des micro-organismes",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les solutions d’irrigation doivent assurer le nettoyage et la désinfection et non pas la stérilisations. Elle doit commencer avec la cavité d’accès et ne s’arrêter qu’une fois la préparation canalaire terminée"
      },
      {
        "questionText": "Les systèmes de la mise en forme canalaire en rotation continue",
        "options": [
          "Possèdent des conicités élevées",
          "Diffèrent par leur alliage",
          "Diffèrent par leur section, leur angle d'hélice et leur pas d'hélice",
          "Sont à conicité variable, à l'exception du Protaper qui présente une conicité constante.",
          "Sont tous des systèmes mono-instrumentaux."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Ces instruments sont à conicité constante, à l’exception du ProTaper® qui présente une conicité variable."
      },
      {
        "questionText": "LE FORAMEN APICAL SE SITUE",
        "options": [
          "Entre 0,5 et 1 mm en deçà de l'apex radiologique",
          "Entre 1 mm et 1,5 mm en deçà de l'apex anatomique",
          "Entre 1,5 mm et 2 mm en deçà de l'apex anatomique",
          "Entre 0,5 mm et 1 mm du dôme apical",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le foramen apical (F), qui constitue la sortie principale du canal vers le parodonte"
      },
      {
        "questionText": "LES OBECTIFS D'UNE CAVITE DACCES ENDODONTIQUE IDEALE SONT:",
        "options": [
          "De visualiser au moins un canal",
          "avoir au moins 2 parois",
          "De supprimer tout le plafond pulpaire",
          "D'avoir au moins 3 parois",
          "D'avoir la forme de contour homothétique a la couronne"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": " Supprimer le plafond pulpaire et toute zone de contre-dépouille résiduelle sous peine de persistance de débris organiques.\n Visualiser les orifices canalaires en préservant le plancher pulpaire.\n Permettre un accès direct des instruments au tiers apical avec les parois coronaires lors de la mise en forme et de l’obturation.\n Constituer un réservoir permanent pour les solutions d’irrigation. \n Permettre une bonne assise du pansement temporaire."
      },
      {
        "questionText": "LE CNAL ACCESSOIRE EST UNE RAMIPICATION DU",
        "options": [
          "Canal secondaire",
          "Canal latéral",
          "Canal principal",
          "Canal apical",
          "Canal qui se situe au tiers moyen de la racine"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LE CATHETERISME OU LA PENETRATION INITIALE",
        "options": [
          "Cest l’explorations active du système canalaire",
          "Correspond à la négociation Initiale du système canalaire",
          "Toujours réalisée avec des limes en NITi manuelles de faible diamètre de pointe",
          "permet la détermination de la longueur de travail (LT).",
          "Les instruments de cathétérisme ne sont jamas forcés apicalement pour rechercher d'emblée la LT"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "l’exploration passive, correspond à la négociation initiale du système canalaire. Toujours réalisée avec des limes en acier manuelles de faible diamètre (généralement une lime K08 ou K10)"
      },
      {
        "questionText": "LE PRE-ELARGISSEMENT CANALAIRE",
        "options": [
          "Est obtenu avec des instruments de conicité élevée",
          "Est obtenu avec des instruments de diamètres 30, 35 et 40/100 )",
          "Permet de sécuriser la trajectoire canalaire, avant le passage des instruments de mise en forme",
          "Permet élimination torale du triangle de dentine coronaire",
          "A été développé afin de réduire le risque de fracture par torsion des instruments"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'endodontie comprend:",
        "options": [
          "Le coiffage pulpaire direct",
          "La pulpotomie cervicale",
          "La pulpectomie",
          "Le traitement endodontique",
          "L'étude des pathologies pulpaires"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LORS DE LA PREPARATION CANALAIRE, L'IRRIGATION EST:",
        "options": [
          "En début de préparation",
          "À la fin de la préparation",
          "Après chaque passage d'instrument endodontiques",
          "Au moyen d'hypochlorite alcalin",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Elle doit commencer avec la cavité d’accès, et ne s’arrêter qu’une fois la préparation canalaire terminée."
      },
      {
        "questionText": "LORS DE LA PREPARATION CANALAIRE, LE CATHETERISME EST REALISE AU MOYEN DE:",
        "options": [
          "Une Broche",
          "Une Lime K",
          "Une Lime H",
          "Un Tire-nerf",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C’est l’exploration active et initiale du système canalaire.(généralement une lime K08 ou K10)"
      },
      {
        "questionText": "LORS DE LA PREPARATION CANALAIRE, LA DETERMINATION DE LA LONGUEUR DE TRAVAIL FAIT:",
        "options": [
          "Avant le cathétérisme",
          "À la fin de la préparation canalaire",
          "Dès la trépanation du plafond de la chambre pulpaire",
          "Au moyen d'une sonde lisse endocanalaire",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La longueur de travail est une mesure millimétrique définie au début ou au cours du traitement endodontique."
      },
      {
        "questionText": "DANS LA PREPARATION CANALAIRE MECANISEE, LES INSTRUMENTS ENDOCANALAIRES",
        "options": [
          "Rigides",
          "Flexibles",
          "Fabriquées en acier inoxydable",
          "Fabriqués en Ni-TI",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La reconstitution pré-endodontique",
        "options": [
          "(1, 2. 3)",
          "(1,2,4)",
          "(2,4,5)",
          "(4,5)",
          "(1,2,5 )"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Objectifs\n- Rendre plus facile la pose de la digue, stabiliser le crampon ;\n- Créer un véritable réservoir de solutions d’irrigation tout au long du traitement.\n- Éviter les percolations liquidiennes des flux salivaires et gingivaux dans la cavité d’accès.\n- Faciliter la pose d’un pansement étanche évitant une infiltration bactérienne en interséance endodontique ou avant le projet final de restauration ;\n- Obtenir des repères occlusaux fiables par un placement reproductible des stops en silicone des instruments endodontiques utilisés lors de la mise en forme\n- Limiter les risques de fracture d’une dent très délabrée par renforcement des parois\nrésiduelles et mise en sous-occlusion coronaire.\n4: Actuellement, seuls les ciments verre ionomère remplissent le plus complètement ce cahier\ndes charges. Cependant, la présence de pertes volumineuses de substance dentaire nécessite soit un matériau plus résistant mécaniquement, du type composite, soit l’adjonction d’un artifice, pour cercler la dent."
      },
      {
        "questionText": "LE CANAL LATERAL:",
        "options": [
          "Est une ramification du canal principal",
          "Est une ramification du canal secondaire",
          "Est situé au niveau de la partie moyenne de la racine",
          "Est situé au niveau de la partie apicale de la racine",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Canal accessoire: ramification du canal secondaire.\nD : Canal secondaire: région apicale."
      },
      {
        "questionText": "LA RADIOGRAPHIE PREOPERATOIRE :",
        "options": [
          "Est une radiographie de contrôle",
          "Est un cliché retro-alvéolaire",
          "Est une radiographie préliminaire",
          "Est toujours un élément de diagnostic",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LA RECONSTITUTION PRE-ENDODONTIQUE:",
        "options": [
          "Est une étape systématique au cours du traitement endodontique",
          "Peut être réalisée à l'aide de CVI",
          "Permet de consolider la dent",
          "Permet de réévaluer le traitement",
          "Permet la pose du champ opératoire"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La reconstitution pré-endodontique est effectuée après avoir éliminé les tissus carieux ainsi que les restaurations non étanches, et restauré les contours de la dent"
      },
      {
        "questionText": "LA CAVITE D'ACCES ENDODONTIQUE:",
        "options": [
          "Conditionne le succès du traitement endodontique",
          "Est une cavité intra-coronaire.",
          "Est réalisée avant le curetage dentinaire",
          "Est réalisée après le curetage dentinaire",
          "Consiste à supprimer l'ancien matériau de restauration"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "OBJECTIFS :\nVisualiser les entrées canalaires en préservant le plancher pulpaire - Permettre un accès direct des instruments au 1/3 apical avec les parois canalaires lors de la mise en forme et de l’obturation. - Constituer un réservoir permanent pour les solutions d’irrigation. - Permettre une bonne assise du pansement temporaire."
      },
      {
        "questionText": "La préparation canalaire mécanisée:",
        "options": [
          "Nécessite des instruments en acier inoxydable.",
          "Nécessite des instruments en Nickel Titane.",
          "Est une technique apico-coronaire.",
          "Nécessite une irrigation abondante.",
          "Impose des mouvements de va et vient de grande amplitude"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "technique apico-coronaire est parmi les techniques des préparations mécanisées"
      },
      {
        "questionText": "Cochez les dynamiques instrumentales de la préparation canalaire mécanisée:",
        "options": [
          "Mouvement alternatif asymétrique.",
          "Rotation continue.",
          "Mouvement de raclage asymétrique.",
          "Mouvement vertical de grande amplitude"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La cavité d'accès endodontique au niveau d'une incisive centrale maxillaire:",
        "options": [
          "Est réalisée au niveau de la face vestibulaire.",
          "Est réalisée au niveau de la région cingulaire.",
          "Présente une forme triangulaire.",
          "Présente une forme trapézoïdale.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La cavité d'accès endodontique:",
        "options": [
          "Est réalisée toujours à partir de la cavité de carie pré existante.",
          "Permet la visibilité des apex radiculaires.",
          "Permet la visibilité des entrées canalaires.",
          "Doit suivre la configuration du contour externe de la dent.",
          "Se situe dans l'axe des canaux."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Elle consiste à réaliser une voie d’accès intra-coronaire de forme, de dimension et de position bien déterminées et qui doit permettre un passage direct des instruments vers les orifices canalaires en direction apicale"
      },
      {
        "questionText": "La préparation canalaire doit:",
        "options": [
          "Calquer l'anatomie originelle.",
          "Permettre l'élimination de la dentine pariétale dans le cas de gangrène (thérapeutique des gangrènes).",
          "Respecter les structures anatomiques apicales.",
          "Etre corono-apicale lorsqu'elle est mécanisée.",
          "Etre très conique lorsqu'elle est manuelle"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Créer une conicité régulière de l'apex à l'entrée canalaire\nQuel que soit le type de système utilisé, on réalise une séquence corono-apicale ( crown- down"
      },
      {
        "questionText": "Le cathétérisme:",
        "options": [
          "Est l'exploration active du système canalaire.",
          "Est l'exploration passive du système canalaire.",
          "Est l'exploration initiale du système canalaire.",
          "Est réalisée à l'aide d'une lime K n°10.",
          "Permet de déterminer la longueur de travail."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le canal accessoire:",
        "options": [
          "Est une ramification du canal principal.",
          "Est une ramification du canal secondaire.",
          "Est situé dans le tiers (1/3) apical.",
          "Est situé dans le tiers (1/3) moyen.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un canal secondaire : Situé dans (1/3) apical de l’apex ET le canal accessoire : ramification du canal secondaire"
      },
      {
        "questionText": "La longueur de travail :",
        "options": [
          "(1,3,5)",
          "(1,4,5)",
          "(2, 3,4)",
          "(2, 3,5)",
          "(2, 4,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "4 : le cathétérisme est la pénétration initiale du canal"
      },
      {
        "questionText": "Pour la préparation canalaire, le praticien peut utiliser :",
        "options": [
          "Des instruments manuels.",
          "Des instruments à conicité majorée.",
          "Des Instruments en nickel titane",
          "Des instruments rotatifs.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la préparation canalaire « Sérielle » le praticien utilise:",
        "options": [
          "Des broches et des limes H.",
          "Des limes K.",
          "Des forets de Gates",
          "Des broches préincurvées.",
          "Des largo"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La lime de perméabilité:",
        "options": [
          "Est une lime K n°25",
          "Une lime H n°10",
          "Permet de vérifier la vacuité apicale.",
          "Est utilisée à la fin de la préparation canalaire.",
          "Est une lime K n°10"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Une cavité d'accès correctement réalisée devra:",
        "options": [
          "Permettre l'élimination de tout le contenu canalaire.",
          "Éliminer complètement le plafond ainsi que les parois de la chambre pulpaire.",
          "Permettre l'accès direct au tiers apical des instruments endodontiques sans interférence avec les parois radiculaires.",
          "Permettre de visualiser au moins une entrée canalaire.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Eliminer complètement le plafond de la chambre pulpaire.\nPermettre un accès direct au tiers apical des instruments sans interférence avec les parois coronaires\nVisualiser directement tous les orifices canalaires"
      },
      {
        "questionText": "Une restauration pré-endodontique:",
        "options": [
          "Est une restauration coronaire provisoire",
          "Est un réservoir étanche la solution d'irrigation.",
          "Doit présenter quatre parois.",
          "Assure l'étanchéité du champ opératoire.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les instruments rotatifs et manuels utilisés pour la préparation de la cavité d'accès",
        "options": [
          "Les fraises boules diamantées et en carbure de tungstène n°14 et n°18.",
          "Les fraises endo Z",
          "Les forêts de Gates.",
          "Les forêts largo.",
          "La sonde de Rhein",
          "La sonde n°17"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une fraise boule diamantée : son action abrasive facilite l’éviction d’émail\nUne fraise Zekrya Endo (Cavity Access® Z Set).; à lame active, elle permet d’élargir et de finir la cavité\nUn foret de Gates permettant le marquage des orifices canalaires\nUne sonde de Rhein pour repérer les orifices canalaires avec précision"
      },
      {
        "questionText": "La cavité d'accès est réalisée sur:",
        "options": [
          "La face proximale des PM",
          "La face palatine ou linguale des dents antérieures.",
          "La face occlusale des molaires.",
          "La face cervicale dans le cas de la classe V (Black).",
          "Sur la face occlusale des prémolaires."
        ],
        "correctOptionIndexes": [
          1,
          2,
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le système PROTAPER:",
        "options": [
          "Est une méthode de préparation canalaire.",
          "Est une méthode d'obturation canalaire.",
          "Utilise des instruments manuels et mécanisés.",
          "Utilise des instruments endodontiques mécanisés.",
          "Utilise des instruments en NiTi"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La cavité d'accès:",
        "options": [
          "A pour objectif I 'élimination du plancher pulpaire",
          "Permet le passage des instruments endodontiques",
          "Nécessite l'utilisation d'une instrumentation spécifique",
          "Permet la pénétration du 1/3 coronaire",
          "Un pour objectif l'élimination partielle du plafond pulpaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Supprimer le plafond pulpaire\nPermettre un accès direct des instruments au tiers apical"
      },
      {
        "questionText": "La première molaire supérieure:",
        "options": [
          "Possède deux racines, une vestibulaire et une palatine.",
          "Possède 03 racinés, une vestibulaire et deux palatines.",
          "Possède 03 racines, une palatine et deux vestibulaires.",
          "Sa chambre pulpaire est trapézoïde.",
          "Sa chambre pulpaire est située en distal de la face occlusale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La cavité est située en mésiale de la cavité occlusale, et ne dépasse pas en général le pont d’émail."
      },
      {
        "questionText": "La première molaire mandibulaire:",
        "options": [
          "Possède trois racines, deux mésiales et une distale.",
          "Possède 02 racines, une mésiale et une distale.",
          "Possède 03 canaux, un distal et deux mésiaux.",
          "Sa chambre pulpaire est trapézoïdale",
          "Sn chambre pulpaire est située en distal de la face occlusale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La cavité d'accès est toujours située sur la partie mésiale de la dent et s'étend rarement au delà du sillon inter cuspidien lingual."
      },
      {
        "questionText": "Une cavité d'accès correctement réalisée devra:",
        "options": [
          "Permettre l'élimination de tout le contenu canalaire.",
          "Éliminer complètement le plafond ainsi que les parois de la chambre pulpaire.",
          "Permettre l'accès direct au tiers apical des instruments endodontiques sans interférence avec les parois radiculaires.",
          "Permettre de visualiser au moins une entrée canalaire.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Eliminer complètement le plafond de la chambre pulpaire.\nPermettre un accès direct au tiers apical des instruments sans interférence avec les parois coronaires\nVisualiser directement tous les orifices canalaires"
      },
      {
        "questionText": "Une restauration pré-endodontique:",
        "options": [
          "Est une restauration coronaire provisoire",
          "Est un réservoir étanche la solution d'irrigation.",
          "Doit présenter quatre parois.",
          "Assure l'étanchéité du champ opératoire.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les instruments rotatifs et manuels utilisés pour la préparation de la cavité d'accès",
        "options": [
          "Les fraises boules diamantées et en carbure de tungstène n°14 et n°18.",
          "Les fraises endo Z",
          "Les forêts de Gates.",
          "Les forêts largo.",
          "La sonde de Rhein",
          "La sonde n°17"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une fraise boule diamantée : son action abrasive facilite l’éviction d’émail\nUne fraise Zekrya Endo (Cavity Access® Z Set).; à lame active, elle permet d’élargir et de finir la cavité\nUn foret de Gates permettant le marquage des orifices canalaires\nUne sonde de Rhein pour repérer les orifices canalaires avec précision"
      },
      {
        "questionText": "La cavité d'accès est réalisée sur:",
        "options": [
          "La face proximale des PM",
          "La face palatine ou linguale des dents antérieures.",
          "La face occlusale des molaires.",
          "La face cervicale dans le cas de la classe V (Black).",
          "Sur la face occlusale des prémolaires."
        ],
        "correctOptionIndexes": [
          1,
          2,
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le système PROTAPER:",
        "options": [
          "Est une méthode de préparation canalaire.",
          "Est une méthode d'obturation canalaire.",
          "Utilise des instruments manuels et mécanisés.",
          "Utilise des instruments endodontiques mécanisés.",
          "Utilise des instruments en NiTi"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La cavité d'accès:",
        "options": [
          "A pour objectif I 'élimination du plancher pulpaire",
          "Permet le passage des instruments endodontiques",
          "Nécessite l'utilisation d'une instrumentation spécifique",
          "Permet la pénétration du 1/3 coronaire",
          "Un pour objectif l'élimination partielle du plafond pulpaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Supprimer le plafond pulpaire\nPermettre un accès direct des instruments au tiers apical"
      },
      {
        "questionText": "La première molaire supérieure:",
        "options": [
          "Possède deux racines, une vestibulaire et une palatine.",
          "Possède 03 racinés, une vestibulaire et deux palatines.",
          "Possède 03 racines, une palatine et deux vestibulaires.",
          "Sa chambre pulpaire est trapézoïde.",
          "Sa chambre pulpaire est située en distal de la face occlusale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La cavité est située en mésiale de la cavité occlusale, et ne dépasse pas en général le pont d’émail."
      },
      {
        "questionText": "La première molaire mandibulaire:",
        "options": [
          "Possède trois racines, deux mésiales et une distale.",
          "Possède 02 racines, une mésiale et une distale.",
          "Possède 03 canaux, un distal et deux mésiaux.",
          "Sa chambre pulpaire est trapézoïdale",
          "Sn chambre pulpaire est située en distal de la face occlusale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La cavité d'accès est toujours située sur la partie mésiale de la dent et s'étend rarement au delà du sillon inter cuspidien lingual."
      },
      {
        "questionText": "Les objectifs du cathétérisme sont:",
        "options": [
          "Détermination de la trajectoire générale du canal",
          "L'évaluation de la lumière canalaire",
          "Le jaugeage du diamètre du canal.",
          "Détermination de la longueur de travail",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Pour le cathétérisme, le praticien Utilise:",
        "options": [
          "Des limes H",
          "Des limes K.",
          "Des instruments pré-mesurés.",
          "Des Instruments pré-courbés.",
          "Une solution d'irrigation."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Au cours du traitement endodontique, la solution d'irrigation utilisée :",
        "options": [
          "Doit être biocompatible",
          "Doit avoir une action solvante.",
          "Doit avoir une action septique.",
          "Doit avoir une action minéralisante.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Action antiseptique"
      },
      {
        "questionText": "La longueur de travail:",
        "options": [
          "Est la distance entre deux points: un coronaire qui est un méplat horizontal choisi ou créé au niveau d'une cuspide, l'autre apical.",
          "Est la distance entre deux points: un choisi ou créé au niveau de l'entrée canalaire, l'autre apical.",
          "Elle précède la préparation canalaire.",
          "Elle précède le cathétérisme.",
          "Peut-être manuelle ou mécanisée"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La LT est définie comme la distance entre un point de référence prédéterminé sur la couronne qui est méplat horizontal reproductible (généralement le bord incisif pour une dent antérieure et un sommet cuspidien pour une dent postérieure) et un point correspondant à la limite de l’action de nettoyage, de mise en forme et d’obturation."
      },
      {
        "questionText": "La préparation mécanisée utilise:",
        "options": [
          "Des instruments en rotation continue.",
          "Des instruments en réciprocité",
          "Des instruments en nickel-titane.",
          "Le concept du crown-down.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'irrigation canalaire au cours du traitement endodontique:",
        "options": [
          "Se fait en alternance avec l'assainissement canalaire,",
          "Se fait en alternance avec l'élargissement canalaire,",
          "Se fait à l'aide de solution d'hypochlorite de sodium qui dissout la partie minérale de la boue dentinaire.",
          "Peut être activée par les ultrasons"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C : par l’EDTA\nIrrigation active Activation manuelle dynamique: le maitre-cône de GP + Mouvement vertical de faible amplitude (100mvt/mn) /Activation sonore: insert sonique (l’endoactivator) /Activation ultrasonore: lime ultrasonore"
      },
      {
        "questionText": "Concernant l'examen clinique, l'échec d'un traitement endodontique selon ANDEM est",
        "options": [
          "Fistule ou tuméfaction récurrentes",
          "Douleur au test au froid",
          "Absence de réparation osseuse",
          "Mobilité physiologique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les objectifs du cathétérisme sont:",
        "options": [
          "Détermination de la trajectoire générale du canal",
          "L'évaluation de la lumière canalaire.",
          "Le jaugeage du diamètre du canal.",
          "Détermination de la longueur de travail.",
          "Toutes les réponses justes"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Pour le cathétérisme, le praticien utilise:",
        "options": [
          "Des limes H.",
          "Des limes K.",
          "Des instruments pré mesurés.",
          "Des instruments pré courbés",
          "Une solution d'irrigation"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "thérapeutique des pulpopathies",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LA PULPOTOMIE EST UNE INTERVENTION QUI CONSISTE A:",
        "options": [
          "Réaliser un coiffage pulpaire directo",
          "Réaliser un coiffage pulpaire indirect",
          "Eliminer une partie de la pulpe.",
          "Eliminer la totalité de la pulpe coronaire.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LA PULPOTOMIE SOUS ANESTHESIE:",
        "options": [
          "Est réalisée en cas de nécrobie",
          "Est indiquée lors d'une dénudation pulpaire dans le cadre de l'urgence",
          "Est indiquée lors d'une ancienne fracture pénétrante",
          "Nécessite une radio peropératoire",
          "Est cervicale lorsqu'on retire 2 mm de la pulpe radiculaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C’est une thérapeutique endodontique des dents vitales. la pulpotomie coronaire partielle consiste en l’amputation de 2 mm de tissu pulpaire"
      },
      {
        "questionText": "la pulpe dentaire :",
        "options": [
          "est dotée d’une grande capacité de réparation",
          "se défend en élaborant de la dentine tertiaire",
          "se défend en élaborant de la dentine secondaire",
          "se défend par des phénomènes inflammatoires",
          "toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Face à une irritation physique, chimique ou infectieuse le tissu pulpaire se défend en élaborant une barrière de dentine tertiaire.\nMais au fur et à mesure que l’irritation s’intensifie, le tissu pulpaire répond par des phénomènes inflammatoires aigus ou chroniques."
      },
      {
        "questionText": "Le traitement d'une pulpite irréversible sur une 46 mature est:",
        "options": [
          "Une bio-pulpectomie.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Une pulpotomie partielle.",
          "Une pulpectomie immédiate"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La pulpite irréversible est une inflammation sévère qui ne régresse pas si la cause initiale est supprimée."
      },
      {
        "questionText": "Les indications du traitement canalaire sont:",
        "options": [
          "Pulpite réversible.",
          "Pulpite irréversible.",
          "Fracture coronaire non pénétrante.",
          "Parodontite apicale chronique.",
          "Atteinte dentinaire profonde"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A/E : un coiffage sera indiqué"
      },
      {
        "questionText": "Le traitement d'une pulpite irréversible sur une 46 mature est:",
        "options": [
          "Une bio-pulpectomie.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Une pulpotomie partielle.",
          "Une pulpectomie immédiate"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La pulpite irréversible est une inflammation sévère qui ne régresse pas si la cause initiale est supprimée."
      },
      {
        "questionText": "Un patient consulte à la suite d'un traumatisme sur la 21, la dent est mature, il y a une",
        "options": [
          "Une pulpotomie partielle.",
          "Une pulpectomie",
          "Un coiffage pulpaire direct.",
          "Une pulpotomie complète.",
          "Toutes tes réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Si un ancrage corono-radiculaire est nécessaire pour la rétention de la future couronne, le traitement endodontique est le traitement de choix.\nSi le fragment est disponible, il peut être recollé à la dent après réhydratation et que la pulpe exposée est traitée (le traitement pulpaire conservateur comme la pulpotomie partielle est préférable)"
      },
      {
        "questionText": "La pulpectomie est indiquée:",
        "options": [
          "Dans le cas d'une pulpe inflammatoire ou sans symptomatologie douloureuse",
          "Dans la Catégorie II de BAUME",
          "Pour des raisons prothétiques.",
          "Si la dent est nécrosée,",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les pulpites irréversibles symptomatiques et asymptomatiques (CAT III de Baume)\nDans le cas d’une restauration prothétique, si la préparation est trop mutilante et très proche de la pulpe."
      },
      {
        "questionText": "Dans la pulpotomie haute, la section de pulpe se fait à l'aide:",
        "options": [
          "D'une fraise long col",
          "D'un foret.",
          "D'une lime K.",
          "D'une fraise de Batt.",
          "D'une lime de Hedsfrom"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La pulpotomie haute (pulpotomie radiculaire) : est une pulpotomie qui se situe au 1/3 ou au 1/4 apical du canal appelée aussi pulpectomie partielle \nOn élimine le plafond pulpaire à l’aide d’une fraise mousse ( fraise de BATT )"
      },
      {
        "questionText": "La pulpectomie est une intervention",
        "options": [
          "Dentinogène.",
          "Cémentogène.",
          "Ostéo-cémentogène",
          "Indiquée en cas de pulpite réversible.",
          "Indiquée en cas de pulpite irréversible"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpotomie est indiquée :",
        "options": [
          "Dans le cas de pulpe vivante.",
          "Dans le cas de pulpe nécrosée.",
          "En cas de traumatisme.",
          "Dans la catégorie II de BAUME.",
          "Dans la catégorie IV de BAUME."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Pulpes vivantes avec symptômes proches d’une carie profonde (catégorie II de Baume).\nDénudations traumatiques de pulpes saines.\nC’est une thérapeutique endodontique des dents vitales jeunes à apex ouverts en cas d’exposition pulpaire par traumatisme ou carie"
      },
      {
        "questionText": "La pulpectomie est une intervention:",
        "options": [
          "Qui consiste en l'ablation de la pulpe camérale",
          "Qui consiste en l'ablation de la pulpe camérale et radiculaire.",
          "Cémentogène.",
          "Ostéo-cémentogène",
          "Pratiquée sous anesthésie"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Intervention consistant dans l’ablation totale de la pulpe (camérale et radiculaire) ,suivie de l’obturation de la cavité pulpaire pour supprimer sa vacuité et permettre la cicatrisation du desmodonte puis la fermeture cémentaire de l’orifice canalaire apical."
      },
      {
        "questionText": "La pulpectomie est indiquée dans :",
        "options": [
          "Les pulpites réversibles.",
          "Les pulpites irréversibles.",
          "La catégorie III de BAUME",
          "La catégorie IV de BAUME.",
          "Les pulpes nécrosées."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement de la pulpite aigue totale consiste à réaliser :",
        "options": [
          "Un coiffage pulpaire direct.",
          "Un coiffage juxta pulpaire.",
          "Un coiffage pulpaire indirect.",
          "Un traitement cémentogène.",
          "Un traitement ostocementogène"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpotomie:",
        "options": [
          "Est l'amputation partielle de la pulpe",
          "Est l'amputation totale de la pulpe",
          "Concerne les dents permanentes immatures.",
          "Concerne les dents permanentes matures.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpectomie est une intervention:",
        "options": [
          "Qui consiste en l'ablation de la pulpe camérale",
          "Qui consiste en l'ablation de la pulpe camérale et radiculaire.",
          "Cémentogène.",
          "Ostéo-cémentogène",
          "Pratiquée sous anesthésie"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Intervention consistant dans l’ablation totale de la pulpe (camérale et radiculaire) ,suivie de l’obturation de la cavité pulpaire pour supprimer sa vacuité et permettre la cicatrisation du desmodonte puis la fermeture cémentaire de l’orifice canalaire apical."
      },
      {
        "questionText": "La pulpectomie est indiquée dans :",
        "options": [
          "Les pulpites réversibles.",
          "Les pulpites irréversibles.",
          "La catégorie III de BAUME",
          "La catégorie IV de BAUME.",
          "Les pulpes nécrosées."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement de la pulpite aigue totale consiste à réaliser :",
        "options": [
          "Un coiffage pulpaire direct.",
          "Un coiffage juxta pulpaire.",
          "Un coiffage pulpaire indirect.",
          "Un traitement cémentogène.",
          "Un traitement ostocementogène"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpotomie:",
        "options": [
          "Est l'amputation partielle de la pulpe",
          "Est l'amputation totale de la pulpe",
          "Concerne les dents permanentes immatures.",
          "Concerne les dents permanentes matures.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpe est vivante au cours d'une:",
        "options": [
          "Pulpotomie sous anesthésie.",
          "Biopulpotomie.",
          "Amputation mortale",
          "Amputation vitale.",
          "Nécropulpotomie"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "zone interproximale / syndrome de septum",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LA ZONE DE CONTACT INTERPROXIMALE POSETERIEURE :",
        "options": [
          "Est une surface qui devient un point avec le temps",
          "Protège la papille gingivale",
          "Dissipe les forces de mastication o",
          "Transmet les forces de mastication d'une dent à celle adjacente (dans le sens horizontal)",
          "Située à l'intersection entre les tiers vestibulaires horizontalement et les tiers occlusaux verticalement"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LES DEFIS DE LA RESTITUTION DE LA ZONE DE CONTACT INTERPROXIMALE SONT:",
        "options": [
          "Le rétablissement d'un contact réunissant la totalité des surfaces proximales de deux dents",
          "La réalisation d'une restauration indirecte, en cas de destruction associée de l'assise cervicale",
          "De pouvoir restaurer la zone de contact, en plein inflammation gingivale",
          "Enlever le corps étranger sans faire saigner la gencive papillaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les signes objectifs lors d'un syndrome du septum sont:",
        "options": [
          "Absence de point de contact.",
          "Tassement alimentaire.",
          "La papille est tuméfiée et rouge.",
          "La papille saigne au sondage.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "• Signes objectifs:\n- Percussions transversales positives sur 2 dentsadjacentes.\n- Absence de point de contact.\n- Tassement alimentaire.\n- La papille est tuméfiée rouge, elle saigne au sondage.\n- Dent légèrementmobile.\n- En cas de migration de l’attache épithéliale avec dénudation du collet douleurs aux variations thermiques."
      },
      {
        "questionText": "Le point de contact assure :",
        "options": [
          "Le maintien de position de la dent.",
          "La préservation du parodonte.",
          "Une harmonie du sourire.",
          "Une réussite de la thérapeutique endodontique.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'espace inter-dentaire est formé de:",
        "options": [
          "La crête marginale.",
          "Le point de contact.",
          "Les embrasures.",
          "La papille gingivale.",
          "Le septum inter radiculaire"
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement d'urgence d'une lésion du septum est::",
        "options": [
          "Le retrait des éléments irritants.",
          "La restauration du point de contact.",
          "Le débridement à l'aide curette de Gracey.",
          "L'irrigation de la lésion avec solution dc Chlorhexidine à 12 et à 20%",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans le syndrome du septum, les signes les plus courants sont :",
        "options": [
          "Un bourrage alimentaire.",
          "Une papille gingivale d'aspect normal.",
          "Une sensation de pression avant les repas.",
          "Une halitose",
          "Un test de vitalité négatif"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "douleurs survenantsurtout après les repas."
      },
      {
        "questionText": "Le traitement d'urgence d'une lésion du septum est::",
        "options": [
          "Le retrait des éléments irritants.",
          "La restauration du point de contact.",
          "Le débridement à l'aide curette de Gracey.",
          "L'irrigation de la lésion avec solution dc Chlorhexidine à 12 et à 20%",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans le syndrome du septum, les signes les plus courants sont :",
        "options": [
          "Un bourrage alimentaire.",
          "Une papille gingivale d'aspect normal.",
          "Une sensation de pression avant les repas.",
          "Une halitose",
          "Un test de vitalité négatif"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "douleurs survenantsurtout après les repas."
      },
      {
        "questionText": "Le rétablissement incorrect du point de contact entre deux dents:",
        "options": [
          "Favorise le tassement alimentaire.",
          "Favorise l'extrusion de l'une des deux dents.",
          "Favorise la rotation des deux dents.",
          "Favorise l'intrusion de l'une des deux dents.",
          "Est à l'origine d'un syndrome du septum."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "pharmacologie endodontique",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LE PULPERYL EST COMPOSE",
        "options": [
          "De créosote",
          "De lidocaine",
          "De phénol",
          "D'eugénol",
          "D'un anesthésique, antiseptique et anti-inflarmatoire au même temps"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les propriétés minimales d'une solution d'irrigation en endodontie sont une action:",
        "options": [
          "(1,2)",
          "(1,3,5)",
          "(2,3,5)",
          "(2,4)",
          "(3,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Solutions d’irrigation endodontiques\nLes solutions d’irrigation doivent assurer le nettoyage et la désinfection et ils doivent également avoir les propriétés minimales requises suivantes :\n-Une action solvante sur les débris organiques pulpaires.\n-Une action solvante sur la boue dentinaire.\n-Une action antiseptique."
      },
      {
        "questionText": "L'hypochlorite de sodium:",
        "options": [
          "(1,3)",
          "(1,3,4)",
          "(2,4)",
          "(2,3,5)",
          "(3,4)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "1: utilisés à des concentrations de 1 à 5%\n2: L’hypochlorite de sodium est la solution d’irrigation de choix en endodontie grâce à ses propriétés antimicrobiennes et dissolvantes des tissus organiques.\n4: il est souvent utilisé avec d’autres solutions (EDTA, chlorhexidine) pour optimiser le nettoyage, ce n’est pas obligatoire ; l’hypochlorite peut être utilisée seule.\nHypochlorite de sodium\nL’action bactéricide de l'hypochlorite est liée à la libération de chlore et d'oxygène et à la formation d'acide hypochloreux. Le chlore, qui est un élément bactéricide très actif, peut être fixé par la matière organique, empêchant ainsi la formation de cet acide. \nL'action solvante de l'hypochlorite sur la matière organique entrave ainsi son action antiseptique.\nLe renouvellement de la solution est donc capital pour obtenir l'efficacité antiseptique souhaitée."
      },
      {
        "questionText": "L'hydroxyde de calcium:",
        "options": [
          "(1,2,3)",
          "(1,4)",
          "(2,3)",
          "(2,4,5)",
          "(4,5)."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Hydroxyde de calcium :\nParmi les médicaments intra-canalaire temporaires en inter-séance, il occupe aujourd'hui encore une place de choix, il peut être utilisé sous forme de préparation magistrale ou commerciale fluide pour les obturations canalaires réalisées à l'aide d'un bourre-pate.\nEn plus de ses propriétés antiseptiques, anti-inflammatoires et hémostatiques, il induirait des modifications tissulaires capables de stimuler les réactions de défense et le potentiel réparateur des structures dentaires et péridentaires."
      },
      {
        "questionText": "L'hypochlorite de sodium:",
        "options": [
          "Possède une action solvante sur les débris pulpaires.",
          "Est utilisé à une concentration de 2.5 à 5%.",
          "Est très efficace sur la boue dentinaire.",
          "Possède une action bactéricide et protéolytique.",
          "N'a aucun effet sur les virus et les champignons"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "utilisé à des concentrations de 1 à 6%\nAction antiseptique et action bactéricide, virucide, sporicide\nil n’a pas d’action solvant sur la matière minérale. Il ne parvient donc pas à dissoudre la smear layer et doit être couplé avec un produit à action chélatante comme l’EDTA"
      },
      {
        "questionText": "La solution d'irrigation endodontique idéale doit:",
        "options": [
          "Avoir une action antibactérienne.",
          "Permettre la dissolution des tissus organiques.",
          "Etre non irritante pour les tissus péri-apicaux.",
          "Permettre l'inhibition des toxines bactériennes.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L hydroxyde de calcium utilisé en endodontie :",
        "options": [
          "(1,2)",
          "(1,3)",
          "(2,4)",
          "(1,2,5)",
          "(1,5)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "1: L’hydroxyde de calcium peut être utilisé sous forme de préparation magistrale (un mélange de poudre d’hydroxyde de calcium pur avec du sérum physiologique ou de l’eau distillée) ou commerciale (fluide)\n2: Son pH est voisin de 12,4\n5: Ca(OH)2"
      },
      {
        "questionText": "L'Hydroxyde de Calcium:",
        "options": [
          "Stimule la cémentogénèse",
          "A une action hémostatique grâce aux ions (OH-)",
          "Sa formule est Ca(OH)2",
          "Il est utilisé comme produit antiseptique en inter séance sous forme de base/catalyseur",
          "Sa préparation magistrale est obtenue mélange de poudre de Ca(OH)2 avec sérum physiologique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les propriétés hémostatiques de Ca(OH)2 sont due à la présence de calcium qui est un des facteurs de la coagulation sanguine.\nD : est un mélange de poudre d’hydroxyde de calcium pur avec du sérum physiologique ou de l’eau distillée."
      },
      {
        "questionText": "Une bonne solution d'irrigation doit",
        "options": [
          "Avoir une bonne action antiseptique",
          "Être non toxique.",
          "Avoir une bonne action solvante sur les débris organiques.",
          "Être anesthésique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les propriétés minimales requises sont: Une action solvante sur les débris organiques pulpaires et de la boue dentinaires,"
      },
      {
        "questionText": "L'anhydride AS203:",
        "options": [
          "Est une forme oxydée de l'arsenic",
          "Est appelé escarotique",
          "Se transforme en anhydride arsénique AS205 par une réaction d'oxydoréduction.",
          "Provoque une mortification du tissu pulpaire.",
          "Toutes les sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'hypochlorite de sodium:",
        "options": [
          "Possède un PH alcalin.",
          "Possède une mauvaise action solvante sur les tissus organiques.",
          "Permet de lubrifier et nettoyer les parois canalaires",
          "Est antiseptique",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "-Action solvante très intéressante grâce à une action oxydante"
      },
      {
        "questionText": "Le produit d'irrigation idéal doit:",
        "options": [
          "Avoir une tension superficielle haute",
          "Être germicide et bactéricide",
          "Avoir une tension superficielle basse garder en suspension les débris dentinaires et pulpaires",
          "Dissoudre les résidus organiques",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'hypochlorite de sodium est:",
        "options": [
          "Un produit d'irrigation",
          "Un dérivé chloré",
          "Un produit acide",
          "Son PH varie entre 10 et 12",
          "Il est toxique à une concentration comprise entre 0.5% et 5.25%"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "des concentrations de 1 à 5%"
      },
      {
        "questionText": "L'hydroxyde de calcium a :",
        "options": [
          "Une action anti-inflammatoire",
          "Une action hémostatique",
          "Une action antimicrobienne",
          "Une activité ostéo-inductrice",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La formule chimique de l'hydroxyde de calcium est:",
        "options": [
          "Ca2 OH",
          "Ca (OH)2",
          "Ca OH2",
          "Ca2 OH2",
          "Ca OH"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "provient du mélange de chaux vive (CaO) et d’eau."
      },
      {
        "questionText": "L'hypochlorite de sodium est :",
        "options": [
          "Un produit d'irrigation.",
          "Un dérivé chloré.",
          "Un produit acide.",
          "Son pH doit varier entre 10 et 12",
          "Il est toxique à une concentration comprise entre et 0,5et 5,25%"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Pour réduire la toxicité, la majorité des auteurs préconise des dilutions variant de 2.5 à 5.25%"
      },
      {
        "questionText": "L'anhydride arsénieux:",
        "options": [
          "Peut être mortel à une certaine dose",
          "Entraine une intoxication cellulaire par asphyxie",
          "Est un escharotique",
          "Est utilisé pour réduire l'hyperesthésie dentinaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C’est un puissant escarotique cytotoxique sur la pulpe"
      },
      {
        "questionText": "Les chélateurs :",
        "options": [
          "(2-3)",
          "(2-4)",
          "(1-2-3)",
          "(2-3-4-5)",
          "(2-4-5)"
        ],
        "correctOptionIndexes": [
          1,
          4
        ],
        "explanation": "1: Ceux sont des acides faibles \n3: réagissant avec la partie minérale des parois dentinaires et la boue dentinaire mais ils sont dépourvus d'action solvante sur les tissus organiques."
      },
      {
        "questionText": "L'hypochlorite de sodium :",
        "options": [
          "(5)",
          "(2-4)",
          "(1-3-4)",
          "(1-2-3)",
          "(1-2-4)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'hypochlorite de sodium : solution d’irrigation de choix (Simon 2011), grâce à ses propriétés antibactériennes, son action solvante sur les composants organiques issus des tissus pulpaires nécrotiques et son absence de toxicité\nToxicité : Les solutions d’irrigation sont susceptibles de franchir le foramen apical et d’entrer en contact avec les tissus vivants.Elle est en rapport avec son alcalinité et sa concentration.Pour réduire la toxicité, la majorité des auteurs préconise des dilutions variant de 1 à 5,25 % et une technique d’irrigation appropriée, mais cliniquement une solution d’hypochlorite de sodium entre 0,5 et 2 % peut être utilisée en toute sécurité."
      },
      {
        "questionText": "Le produit d'irrigation idéal doit:",
        "options": [
          "Avoir une tension superficielle haute",
          "Être germicide et bactéricide",
          "Avoir une tension superficielle basse garder en suspension les débris dentinaires et pulpaires",
          "Dissoudre les résidus organiques",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'hypochlorite de sodium est:",
        "options": [
          "Un produit d'irrigation",
          "Un dérivé chloré",
          "Un produit acide",
          "Son PH varie entre 10 et 12",
          "Il est toxique à une concentration comprise entre 0.5% et 5.25%"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "des concentrations de 1 à 5%"
      },
      {
        "questionText": "L'hydroxyde de calcium a :",
        "options": [
          "Une action anti-inflammatoire",
          "Une action hémostatique",
          "Une action antimicrobienne",
          "Une activité ostéo-inductrice",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La formule chimique de l'hydroxyde de calcium est:",
        "options": [
          "Ca2 OH",
          "Ca (OH)2",
          "Ca OH2",
          "Ca2 OH2",
          "Ca OH"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "provient du mélange de chaux vive (CaO) et d’eau."
      },
      {
        "questionText": "L'hypochlorite de sodium est :",
        "options": [
          "Un produit d'irrigation.",
          "Un dérivé chloré.",
          "Un produit acide.",
          "Son pH doit varier entre 10 et 12",
          "Il est toxique à une concentration comprise entre et 0,5et 5,25%"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Pour réduire la toxicité, la majorité des auteurs préconise des dilutions variant de 2.5 à 5.25%"
      },
      {
        "questionText": "L'anhydride arsénieux:",
        "options": [
          "Peut être mortel à une certaine dose",
          "Entraine une intoxication cellulaire par asphyxie",
          "Est un escharotique",
          "Est utilisé pour réduire l'hyperesthésie dentinaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C’est un puissant escarotique cytotoxique sur la pulpe"
      },
      {
        "questionText": "Les chélateurs :",
        "options": [
          "(2-3)",
          "(2-4)",
          "(1-2-3)",
          "(2-3-4-5)",
          "(2-4-5)"
        ],
        "correctOptionIndexes": [
          1,
          4
        ],
        "explanation": "1: Ceux sont des acides faibles \n3: réagissant avec la partie minérale des parois dentinaires et la boue dentinaire mais ils sont dépourvus d'action solvante sur les tissus organiques."
      },
      {
        "questionText": "L'hypochlorite de sodium :",
        "options": [
          "(5)",
          "(2-4)",
          "(1-3-4)",
          "(1-2-3)",
          "(1-2-4)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'hypochlorite de sodium : solution d’irrigation de choix (Simon 2011), grâce à ses propriétés antibactériennes, son action solvante sur les composants organiques issus des tissus pulpaires nécrotiques et son absence de toxicité\nToxicité : Les solutions d’irrigation sont susceptibles de franchir le foramen apical et d’entrer en contact avec les tissus vivants.Elle est en rapport avec son alcalinité et sa concentration.Pour réduire la toxicité, la majorité des auteurs préconise des dilutions variant de 1 à 5,25 % et une technique d’irrigation appropriée, mais cliniquement une solution d’hypochlorite de sodium entre 0,5 et 2 % peut être utilisée en toute sécurité."
      }
    ]
  },
  {
    "title": "Sensibilité et hyperesthésie Dentinaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "L'HYPERESTHESIE DENTINAIRE;:",
        "options": [
          "Se caractérise par une douleur vive de longue durée.",
          "Est une réaction exagérée à un stimulus bénin provenant d'une exposition dentinaire non liée à des bactéries.",
          "Est favorisée par la présence d'une carie cervicale",
          "Se caractérise par une douleur vive de courte durée.",
          "Peut-être aggravée par une récession gingivale"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A :L’hyperesthésie dentinaire se caractérise plutôt par une douleur vive de courte durée en réponse à des stimuli.\nC : L'hyperesthésie dentinaire est principalement liée à une exposition de la dentine et n'est pas nécessairement favorisée par la présence d'une carie cervicale."
      },
      {
        "questionText": "le traitement de l’hyperesthésie dentinaire :",
        "options": [
          "Commence en ambulatoire",
          "Est une association de thérapeutiques étiologiques et symptomatiques lorsqu’elle est installée",
          "Sur une échelle graduelle selon la sévérité de la symptomatologie",
          "Lorsqu’il est symptomatique permet l’oblitération des canalicules dentinaires par des gels et des pâtes",
          "Est une méthode invasive lorsque l’hypersensibilité est sévère"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'abrasion est due à un processus :",
        "options": [
          "Chimique.",
          "Mécanique.",
          "Infectieux.",
          "Dégénératif.",
          "Malformatif."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "principalement lié à : la technique de brossage inadaptée (brossage horizontal, ou le fait de se brosser les dents trop vigoureusement)."
      },
      {
        "questionText": "L'hypersensibilité dentinaire peut être en rapport avec :",
        "options": [
          "L'attrition.",
          "L'abrasion.",
          "L'érosion.",
          "L'abfraction.",
          "La fêlure."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le traitement de l'hyperesthésie dentinaire :",
        "options": [
          "Est médicamenteux.",
          "Est étiologique.",
          "Consiste à réaliser dans tous les cas un coiffage dentinaire.",
          "Consiste à réaliser dans tous les cas une pulpectomie.",
          "Consiste à utiliser dans tous les cas un dentifrice à haute teneur en fluor"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La plupart des traitements chimiques ou physiques proposés actuellement visent à limiter la perméabilité dentinaire afin de réduire les mouvements hydrodynamiques qui sont à l'origine de la sensibilité, et/ou à augmenter le seuil d'excitation des fibres nerveuses pour les rendre moins sensibles aux stimuli extérieurs"
      },
      {
        "questionText": "L'hyperesthésie dentinaire :",
        "options": [
          "Est appelée aussi hypersensibilité dentinaire.",
          "Se manifeste par une douleur sourde de longue durée.",
          "Se manifeste par une douleur vive de longue durée.",
          "Se manifeste par une douleur vive de courte durée.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Hyperesthésie dentinaire (HD) se caractérise par une douleur vive de courte durée provenant de la dentine exposée en réponse à de différents stimulus"
      },
      {
        "questionText": "L'hyperesthésie dentinaire est liée à :",
        "options": [
          "Une exposition dentinaire seulement.",
          "Une exposition dentinaire et en présence de nombreux tubilis ouverts.",
          "Une exposition dentinaire en relation avec une lésion carieuse",
          "Une fissure ou un défaut de l'émail.",
          "Toutes les réponses sont juste"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pour qu’il y ait genèse de l’influx nerveux et par conséquent de douleur, il faut que la dentine soit exposée mais aussi que les tubuli soient ouverts (pour créer une communication entre la cavité buccale et le complexe dentino-pulpaire).\nUne exposition dentinaire en relation avec une lésion non carieuse"
      },
      {
        "questionText": "L'hyperesthésie dentinaire est traitée :",
        "options": [
          "En première intention au fauteuil.",
          "Le praticien assure le traitement étiologique en dernière intention.",
          "Son traitement comprend le traitement étiologique et symptomatique.",
          "La correction de la méthode de brossage est un traitement symptomatique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A) d’abord le traitement étiologique \nB) En première intention.\nC) est un traitement étiologique."
      },
      {
        "questionText": "L'hyperesthésie dentinaire est traitée au cabinet dentaire :",
        "options": [
          "En appliquant un vernis fluoré.",
          "En appliquant une résine adhésive",
          "En réalisant une restauration au composite.",
          "Par une pulpectomie en dernier recours",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L’objectif du traitement est de limiter la transmission nerveuse, ou recouvrir et obturer les tubuli de la dentine exposée"
      },
      {
        "questionText": "Dans l'hyperesthésie dentinaire, la douleur est :",
        "options": [
          "Vive.",
          "Chronique",
          "Aigue.",
          "De courte durée.",
          "Irradiée."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L’hypersensibilité dentinaire se caractérise par une douleur vive de courte durée provenant de la dentine exposée en réponse à des stimuli thermiques, évaporatifs, tactiles, osmotiques ou chimiques qui ne peut être attribuée à aucune autre forme d’anomalie ou de maladie dentaire"
      },
      {
        "questionText": "L'hyperesthésie dentinaire :",
        "options": [
          "Est appelée aussi hypersensibilité dentinaire.",
          "Se manifeste par une douleur sourde de longue durée.",
          "Se manifeste par une douleur vive de longue durée.",
          "Se manifeste par une douleur vive de courte durée.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Hyperesthésie dentinaire (HD) se caractérise par une douleur vive de courte durée provenant de la dentine exposée en réponse à de différents stimulus"
      },
      {
        "questionText": "L'hyperesthésie dentinaire est liée à :",
        "options": [
          "Une exposition dentinaire seulement.",
          "Une exposition dentinaire et en présence de nombreux tubilis ouverts.",
          "Une exposition dentinaire en relation avec une lésion carieuse",
          "Une fissure ou un défaut de l'émail.",
          "Toutes les réponses sont juste"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pour qu’il y ait genèse de l’influx nerveux et par conséquent de douleur, il faut que la dentine soit exposée mais aussi que les tubuli soient ouverts (pour créer une communication entre la cavité buccale et le complexe dentino-pulpaire).\nUne exposition dentinaire en relation avec une lésion non carieuse"
      },
      {
        "questionText": "L'hyperesthésie dentinaire est traitée :",
        "options": [
          "En première intention au fauteuil.",
          "Le praticien assure le traitement étiologique en dernière intention.",
          "Son traitement comprend le traitement étiologique et symptomatique.",
          "La correction de la méthode de brossage est un traitement symptomatique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A) d’abord le traitement étiologique \nB) En première intention.\nC) est un traitement étiologique."
      },
      {
        "questionText": "L'hyperesthésie dentinaire est traitée au cabinet dentaire :",
        "options": [
          "En appliquant un vernis fluoré.",
          "En appliquant une résine adhésive",
          "En réalisant une restauration au composite.",
          "Par une pulpectomie en dernier recours",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L’objectif du traitement est de limiter la transmission nerveuse, ou recouvrir et obturer les tubuli de la dentine exposée"
      },
      {
        "questionText": "Dans l'hyperesthésie dentinaire, la douleur est :",
        "options": [
          "Vive.",
          "Chronique",
          "Aigue.",
          "De courte durée.",
          "Irradiée."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L’hypersensibilité dentinaire se caractérise par une douleur vive de courte durée provenant de la dentine exposée en réponse à des stimuli thermiques, évaporatifs, tactiles, osmotiques ou chimiques qui ne peut être attribuée à aucune autre forme d’anomalie ou de maladie dentaire"
      }
    ]
  },
  {
    "title": "obturation canalaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LA GUTTA PERCHA",
        "options": [
          "Est soluble dans le chloroforme",
          "Est non Résorbable",
          "Adhère aux parois dentinaires",
          "Peut étre utilisé avec un ciment contenant de la résine époxy",
          "Possède un pouvoir ostéogène"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "LES TECHNIQUES D'OBTURATION CANALAIRE:",
        "options": [
          "A la gutta percha non chauffée utilisent la malléabilité de celle-si",
          "À la gutta percha chauffée utilisent la plasticité de celle-ci",
          "Dans la technique de Schilder utilise le Spreader",
          "Dans la technique de condensation latérale à froid utilise des Pluggers",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La condensation verticale à chaud (la technique de schilder)"
      },
      {
        "questionText": "LA TECHNIQUE D'OBTURATION CANALAIRE DITE MONOCONE MODIFIEE :",
        "options": [
          "Nécessite l'utilisation d'un bourre pate-Lentulo pour transporter le ciment dans le canal",
          "Nécessite l'utilisation d'un cône de gutte percha de conicité augmentée",
          "La dimension du cône de gutta percha correspond à la dimension de la dernière lime utilisée",
          "Le ciment occupe la majorité de l'espace endodontique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le ciment de scellement idéal:",
        "options": [
          "Doit être résorbable",
          "Se place en fine couche sur les parois canalaires",
          "Doit être soluble dans un produit spécifique autre que les fluides buccaux",
          "Doit avoir une action ostéogénique et cémentogène",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La gutta percha :",
        "options": [
          "Doit présenter une certaine viscosité",
          "Se casse lorsqu'elle est oxydée",
          "Constitue le corps de l'obturation canalaire",
          "À la capacité de se lier aux parois dentinaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Viscosité inversement proportionnelle à la température, risque de dépassement apical si peu visqueuse. \nOxydation à l’air et à la lumière, devient cassante \nPas d’adhérence à la dentine, d’où nécessité d’utilisation d’un ciment endodontique."
      },
      {
        "questionText": "L'obturation canalaire à l'aide de thermafill",
        "options": [
          "(1,2)",
          "(1,3,4)",
          "(1,2,3)",
          "(4,5)",
          "(1,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "1: Vérifier la conicité de la préparation (un vérifieur du même diamètre que le dernier instrument de mise en forme utilisé à la LT, est utilisé pour jauger le diamètre apical du canal.),\n3: Le Thermafil requiert une préparation canalaire adaptée et calibrée :\n« Vérifier la conicité de la préparation / le thermafil sélectionné est de même calibre que le vérifieur\n4: Risque élevé d’extrusion du matériau en cas d’absence ou de mauvaise maîtrise de la butée apicale.\n5 : Coût non négligeable (des obturateurs et de l'appareil de préchauffage)"
      },
      {
        "questionText": "La technique de compactage vertical à chaud utilise",
        "options": [
          "Des cônes de gutta normalisés.",
          "Des cônes de gutta non normalisés.",
          "Des fouloirs verticaux de diamètres croissants.",
          "Des fouloirs verticaux de diamètres décroissants.",
          "Une quantité de ciment d'environ 5%."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "is fouloirs à canaux de calibre décroissant : - Le 1er : le plus gros doit pouvoir pénétrer librement au niveau du tiers coronaire. \n- Le 2 iéme : le médian doit atteindre, dans les mêmes conditions, le tires moyen.\n - Le 3 iéme : le plus petit doit progresser aisément jusque dans la région du 1/3 apical"
      },
      {
        "questionText": "Les cônes de gutta-percha:",
        "options": [
          "Sont toujours normalisés.",
          "Sont proposés exclusivement selon la norme ISO.",
          "S'oxydent à la lumière.",
          "S'oxydent à l'air.",
          "Doivent être décontaminés à l'hypochlorite de sodium."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A : normalisé ou non normalisés"
      },
      {
        "questionText": "Le ciment de scellement endodontique:",
        "options": [
          "Constitue le matériau d'obturation principal.",
          "N'est pas utilisé dans les techniques de compactage.",
          "Joue le rôle d'un joint..",
          "Assure l'adhésion de la gutta aux parois dentinaires.",
          "Est utilisé en fine couche."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : La gutta-percha est le matériau principale  \nB : utilsé dans la technique La condensation latérale à froid ; La condensation verticale à chaud ; La technique de compactage thermomécanique de Mac ……"
      },
      {
        "questionText": "La technique de compactage latéral à froid:",
        "options": [
          "Exploite la malléabilité de la gutta.",
          "Exploite la plasticité de la gutta.",
          "Impose une préparation conique. '",
          "Utilise des spreaders.",
          "Utilise une quantité de ciment d'environ 15%."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La gutta percha utilisée pour l'obturation canalaire peut se présenter sous forme de:",
        "options": [
          "Cônes normalisés.",
          "Bâtonnets.",
          "Cônes non normalisés.",
          "Tuteur enrobé de gutta (obturateur).",
          "Une base et un catalyseur"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La gutta percha à usage endodontique Elle se présente en cônes normalisés ou non normalisés en cartouches ou en bâtonnets"
      },
      {
        "questionText": "Pour l'obturation à la gutta par condensation verticale, le praticien utilise :",
        "options": [
          "Des spreaders de taille décroissant",
          "Des pluggers de taille croissante.",
          "Des fouloirs latéraux.",
          "De la gutta percha en bâtonnets.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "B : 3 fouloirs verticaux de diamètre décroissant1er plugger pénètre librement dans le 1/3 coronaire2ème plugger pénètre au 1/3moyen3ème plugger à 5 à 7 mm de l’apex\nD : Cônes de gutta normalisés dont le diametre et la conicité correspondent aux normes ISO"
      },
      {
        "questionText": "Dans la condensation latérale à froid de la gutta, on utilise:",
        "options": [
          "Spreaders",
          "Des heat carriers",
          "Des pluggers.",
          "Des cônes de gutta en bâtonnets.",
          "Un ciment de scellement."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La technique d'obturation canalaire << Thermafil » fait appel à:",
        "options": [
          "Des bâtonnets de gutta.",
          "Des cônes de gutta normalisés.",
          "Des obturateurs.",
          "Des verifiers",
          "Un ciment de scellement."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Obturateur « Thermafil® »: composé d’un fin tuteur en plastique biocompatible enrobé de GP dont la conicité varie avec celle du canal à obturer. \nVérifiers ou jauges en résine \nAppareil de chauffage précis (four spécial)"
      },
      {
        "questionText": "Dans la technique d'obturation canalaire par condensation thermomécanique ou technique",
        "options": [
          "Une source de chaleur",
          "Un thermocompacteur.",
          "un obturateur thermafil",
          "Un heat carrier",
          "Un cône de gutta non normalisé."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Matériel et matériaux :Cônes de gutta NN / Ciment de scellement / Fouloirs verticaux/ Compacteur de Mac Spadden"
      },
      {
        "questionText": "Un ciment de scellement utilisé pour l'obturation canalaire:",
        "options": [
          "Peut-être à base d'oxyde de zinc eugénol.",
          "Agit commee lubrifiant.",
          "Assure le joint entre la masse de gutta percha et les parois canalaires.",
          "Permet l'obturation des zones non instrumentées.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La technique d'obturation canalaire monocône utilise:",
        "options": [
          "Un cône de gutta et une pâte à l'oxyde de zinc-eugénol.",
          "Un cône de gutta et une pâte à l'hydroxyde de calcium.",
          "Un boutre-pate de lentulo pour le transport de la pâte.",
          "Un plugger pour condenser la gutta",
          "Toutes les réponses sont justes.."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Matériels nécessaires:- Bourre-pâte de Lentulo- Cônes de GP normalisés- Pâte d’obturation canalaire type eugénate- Contre angle à bague bleue"
      },
      {
        "questionText": "En technique de condensation latérale de la gutta à froid:",
        "options": [
          "Est une technique rapide et facile à maitriser.",
          "Exploite la malléabilité de gutta.",
          "Utilise des spreaders.",
          "Utilise des pluggers.",
          "Est appelée technique de Schilder."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La technique de compactage vertical de la gutta :",
        "options": [
          "Exploite la malléabilité de gutta.",
          "Utilise des spreaders.",
          "Comporte deux phases.",
          "Permet un gain de temps considérable.",
          "Permet l'obturation des canaux secondaires."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A : c'est Compactage latéral à froid (CLF)\nB : Matériels et matériaux spécifiquesCônes de gutta-percha non normalisés de conicité majorée Fouloirs à compactage vertical ou pluggerRéchauffeur de gutta ou heat carrier chauffé sur la flamme d’un bruleur à gaz Récipient contenant de la poudre d’oxyde de zinc Compresses stériles\nC : 3 phases Phase corono-apicale (descente) :\nObturation de tiers apical (arborisation endodontique apical (delta et canauxaccessoires) sur toute la hauteur canalairePhase de remontée :\nRemplir les 2/3 coronaires du canalLa phase descendante"
      },
      {
        "questionText": "En technique de condensation latérale de la gutta à froid:",
        "options": [
          "Est une technique rapide et facile à maitriser.",
          "Exploite la malléabilité de gutta.",
          "Utilise des spreaders.",
          "Utilise des pluggers.",
          "Est appelée technique de Schilder."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La technique de compactage vertical de la gutta :",
        "options": [
          "Exploite la malléabilité de gutta.",
          "Utilise des spreaders.",
          "Comporte deux phases.",
          "Permet un gain de temps considérable.",
          "Permet l'obturation des canaux secondaires."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A : c'est Compactage latéral à froid (CLF)\nB : Matériels et matériaux spécifiquesCônes de gutta-percha non normalisés de conicité majorée Fouloirs à compactage vertical ou pluggerRéchauffeur de gutta ou heat carrier chauffé sur la flamme d’un bruleur à gaz Récipient contenant de la poudre d’oxyde de zinc Compresses stériles\nC : 3 phases Phase corono-apicale (descente) :\nObturation de tiers apical (arborisation endodontique apical (delta et canauxaccessoires) sur toute la hauteur canalairePhase de remontée :\nRemplir les 2/3 coronaires du canalLa phase descendante"
      },
      {
        "questionText": "Pour réaliser une obturation canalaire monocône, les matériaux utilisés sont:",
        "options": [
          "Hydroxyde de calcium",
          "Oxyde de zinc Eugénol.",
          "Biodentine.",
          "Cônes de gutta percha standardisés.",
          "Cônes de gutta percha non standardisés"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Lors de l'obturation canalaire à la pâte ZnO-Eugénol, le bourre pate de Lentulo doit avoir un diamètre:",
        "options": [
          "Égal à celui du canal radiculaire préparé.",
          "Égal à celui du dernier instrument de préparation canalaire.",
          "Supérieur celui du dernier instrument de préparation canalaire.",
          "Inférieur à celui du denier instrument de préparation canalaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le bourre pâte de Lentulo doit tourner:",
        "options": [
          "À vitesse moyenne.",
          "À basse vitesse.",
          "Dans le sens horaire.",
          "Dans le sens antihoraire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Tournant à basse vitesse, dans le sens des aiguilles d’une montre(ce qui permet de déposer la pâte dans le canal)"
      },
      {
        "questionText": "Pour sectionner l'extrémité émergeante d'un cône de gutta percha après obturation canalaire monocône, nous utilisons:",
        "options": [
          "Une lame de bistouri.",
          "Une paire de ciseaux stérile.",
          "Un instrument chauffé au rouge.",
          "Une fraise montée sur contre angle.",
          "N'importe quel instrument disponible (parmi ceux cités ci-dessus)."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les techniques de condensation à chaud de la gutta percha permettent l'obturation:",
        "options": [
          "Du canal principal.",
          "Des canaux latéraux.",
          "Des canaux secondaires.",
          "Des canaux accessoires.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Se fait en 2 phases: Phase descendante: obturation des canaux accessoires sur toute la hauteur + obturation du 1/3 apical (MC)  \n Phase de remontée: remplir les 2/3 coronaires (cônes secondaires"
      },
      {
        "questionText": "Parmi les critères permettant l'obturation canalaire nous avons:",
        "options": [
          "Test de vitalité pulpaire positif",
          "Absence de douleurs spontanées.",
          "Absence de douleurs provoquées.",
          "Canal sec"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Les cônes de gutta percha utilisés dans les techniques de condensation à chaud:",
        "options": [
          "Existent en plusieurs calibres, correspondant à deux des instruments de préparation canalaire.",
          "Existent en un seul calibre.",
          "Sont radio-opaques",
          "Sont thermoplastiques"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Cônes de gutta percha non normalisés."
      },
      {
        "questionText": "Le maitre cône est:",
        "options": [
          "Choisi en fonction de la largeur du canal radiculaire.",
          "Choisi en fonction de longueur du canal radiculaire.",
          "Bien ajusté lorsqu'on constate une résistance au retrait",
          "Bien ajusté lorsqu'on constate une sensibilité apicale"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Pour les obturations canalaires d'inter-séances. Le Ca(OH)2 est mélange:",
        "options": [
          "À l'eau distillée.",
          "Au sérum physiologique.",
          "À un produit anesthésique sans vasoconstricteur.",
          "À un produit anesthésique avec vasoconstricteur"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L'obturation canalaire:",
        "options": [
          "Isole l'endodonte.",
          "S'oppose à la cicatrisation apicale.",
          "S'oppose aux phénomènes de percolation.",
          "Remplit le réseau canalaire.",
          "Emmure les bactéries."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Induire la cémentogenèse : la fermeture de l’entrée foraminale"
      }
    ]
  },
  {
    "title": "Pathologie pulpaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "LA PULPITE REVERSIBLE:",
        "options": [
          "Peut-être une inflammation pulpaire chronique",
          "Peut-être résolue par l'élimination du tissu infecté de la cavité et une restauration étanche",
          "Nécessite une pulpectomie",
          "Peut-être une hyperhémie pulpaire",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "En l’absence de traitement on aboutit à l’inflammation pulpaire totale aiguë ou chronique puis vers la nécrose. La lésion est réversible si elle est prise à temps (guérison)"
      },
      {
        "questionText": "La pulpite aigue",
        "options": [
          "Correspond toujours à une inflammation totale de la pulpe",
          "Nécessite une pulpectomie pour soulager le patient",
          "Est une inflammation partielle de la pulpe",
          "Condamne la dent à plus ou moins long terme",
          "Peut guérir spontanément"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La pulpe est vivante, enflammée de façon irréversible et présente des symptômes douloureux de pulpite.\nA: L'inflammation peut rester confinée à une seule corne pulpaire, sans nécessairement s’étendre aux autres parties de la pulpe.\nC: Dans la pulpite réversible l’inflammation pulpaire est limitée\nD: la pulpite aiguë irréversible ne guérit pas spontanément, Sans traitement l’évolution se fait vers la chronicité ou la nécrose."
      },
      {
        "questionText": "Les pulpites chroniques hyperplasiques :",
        "options": [
          "Sont observées chez les enfants",
          "Font partie de la catégorie IV de Baume",
          "Il y a perforation du plancher pulpaire",
          "Le polype est pédiculé",
          "Sont diagnostiquées par l'examen radiographique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "a : Elle évolue chez le patient jeune. Souvent sur des dents temporaires ou des dents définitives immatures.\nb :Font partie de la catégorie CAT III de Baume CAT\nc : Le plafond de la chambre pulpaire est ouvert par la carie, la pulpe apparait au milieu de la cavité carieuse.\nd: Le polype est constitué par un tissu conjonctif épais avec des vaisseaux sanguins très dilatés et traversé d’un grand nombre de cellules rondes. Souvent, le polype pulpaire est recouvert d’un épithélium stratifié. Cette épithélialisation est plus fréquente pour les dents temporaires que pour les dents permanentes.\ne: Diagnostic : L’extériorisation du polype rend le diagnostic de la pulpite hyperplasique évident. La symptomatologie est réduite à la seule sensibilité au contact."
      },
      {
        "questionText": "La pulpite irréversible aigue :",
        "options": [
          "(1,3)",
          "(1,3,4)",
          "(2,3)",
          "(2,3,5)",
          "(4,5)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "1 : Elle peut être primaire ou secondaire, lorsqu’il s’agit d’un retour en phase aigüe d’une phase chronique.\n2 : Les pulpites aigues sont des pulpites fermées ou indirectement ouvertes ou refermées fortuitement. Il n’y a pas de drainage possible, d’où les conséquences douloureuses.\n4: La caractéristique de ces pulpites est la douleur, qui est due à la compression œdémateuse des fibres sensitives, en raison de l’absence de drainage des sérosités de l’œdème inflammatoire ou du pus vers la cavité buccale.\n5: Douleurs spontanées sont caractéristiques; elles sont spontanées en apparence pour le malade et le praticien, car en réalité elles sont provoquées par les poussées congestives, survenant au cours de l’inflammation. Elles sont intermittentes, séparées par des périodes de rémission, intenses et pulsatiles."
      },
      {
        "questionText": "La pulpite irréversible chronique :",
        "options": [
          "(1,2,3)",
          "(1,3,5)",
          "(2,3)",
          "(2,3,5)",
          "(3,5)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les pulpites asymptomatiques  «  indolentes » sont des pulpites chroniques.\nLe terme chronique implique une action continue, un point d’équilibre établi entre les forces défensives de l’exsudation interne et le drainage et/ou la résorption de l’exsudat.\n1: c'est une pulpite asymptomatique\n2: La pulpite irréversible chronique peut se présenter sous forme ouverte (avec communication entre la pulpe et la cavité buccale) ou fermée (sans communication).\n3: Une pulpite irréversible chronique peut se réchauffer et présenter un accident aigu,\n4: Une pulpite irréversible nécessite généralement une plpectomie \n5: la pulpite chronique ouverte présente : \n- la pulpite chronique ulcéreuse.\n- la pulpite chronique hyperplasique."
      },
      {
        "questionText": "La pulpite réversible:",
        "options": [
          "(1, 2)",
          "(1,2,3)",
          "(2,3)",
          "(2,5)",
          "(3,4,5)."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "3: La pulpite réversible est un stade transitoire. La pulpe est vivante, avec des signes inflammatoires discrets, présentant des symptômes de pulpalgies, liés à un état hyperhémique transitoire de la pulpe.\n4: Les douleurs spontanées sont absentes ou discrètes.\n- Les douleurs sont provoquées par le froid, chaud, sucres et se prolongent peu de temps au-delà de la stimulation.\n5: réponse négative à la percussion axiale"
      },
      {
        "questionText": "Dans la pulpite irreversible aigue :",
        "options": [
          "(1,2)",
          "(1,4)",
          "(2,4)",
          "(2,5)",
          "(3,5)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La conséquence la plus immédiate est l’arrêt de la dentinogénèse, à la suite de l’altération de la couche odontoblastique qui peut disparaître.\nLa pulpite est plus toxique qu’infectieuse . L’inflammation débute bien avant l’invasion microbienne , donc l’inflammation précède l’infection."
      },
      {
        "questionText": "Dans la pulpite irréversible aigue :",
        "options": [
          "(1-2)",
          "(1-2-4)",
          "(2-4-5)",
          "(1-4)",
          "(2-3)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "1: La conséquence la plus immédiate est l’arrêt de la dentinogénèse, à la suite de l’altération de la couche odontoblastique qui peut disparaître.\n2: la destruction des leucocytes permet la libération d’enzymes protéolytiques entrainant la destruction des fibres de collagènes et la substance fondamentale.\n3: Cette inflammation est engendrée par des toxines (substance provenant du catabolisme carieux , de la matrice organique de la dentine et des produits de destruction des germes).\n4 : La pulpite est plus toxique qu’infectieuse . L’inflammation débute bien avant l’invasion microbienne , donc l’inflammation précède l’infection.\n5: La caractéristique de ces pulpite est la douleur , qui est due à la compression oeudémateuse des fibres sensitives , en raison de l’absence de drainage des sérosités de l’oeudème inflammatoire ou du pus vers la cavité buccale."
      },
      {
        "questionText": "Les pulpites irréversibles chroniques :",
        "options": [
          "(1-3)",
          "(1-4)",
          "(2-3)",
          "(2-5)",
          "(3-5)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "1 : sont des pulpites asymptomatiques  « indolentes » \n4: Les réponses aux tests de vitalité varient peu de la normal (retardés).\n3/5: Sans traitement, l’évolution se fait vers la pulipte totale, puis vers la nécrose totale entrecoupée ou non d’accidents aigus. (Pulpite aigue secondaire)"
      },
      {
        "questionText": "L'évolution de la pulpite symptomatique totale se fait vers :",
        "options": [
          "La nécrose pulpaire",
          "La pulpite réversible.",
          "La nécrobiose.",
          "La parodontite apicale aigue",
          "La pulpite asymptomatique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la pulpite chronique hyperplasique:",
        "options": [
          "La chambre pulpaire est ouverte.",
          "La pulpe est ulcéreuse.",
          "Il y a présence d'un polype parodontal",
          "La chambre pulpaire est fermée.",
          "Il y a pas de syndrome douloureux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’évolution vers un bourgeonnement, vers une hyperplasie pulpaire sous forme d’un polype dont la dimension varie de celle d’une tête d’épingle à celle d’un petit pois.\nLa symptomatologie est réduite à la seule sensibilité au contact."
      },
      {
        "questionText": "L'évolution de la pulpite symptomatique totale se fait vers :",
        "options": [
          "La nécrose pulpaire",
          "La pulpite réversible.",
          "La nécrobiose.",
          "La parodontite apicale aigue",
          "La pulpite asymptomatique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la pulpite chronique hyperplasique:",
        "options": [
          "La chambre pulpaire est ouverte.",
          "La pulpe est ulcéreuse.",
          "Il y a présence d'un polype parodontal",
          "La chambre pulpaire est fermée.",
          "Il y a pas de syndrome douloureux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’évolution vers un bourgeonnement, vers une hyperplasie pulpaire sous forme d’un polype dont la dimension varie de celle d’une tête d’épingle à celle d’un petit pois.\nLa symptomatologie est réduite à la seule sensibilité au contact."
      },
      {
        "questionText": "La pulpite chronique ulcéreuse :",
        "options": [
          "Est une pulpite symptomatique.",
          "Est une pulpite réversible.",
          "Les douleurs sont rebelles aux antalgiques.",
          "Il y a présence d'un polype pulpaire.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "L'ulcère se présente comme une excavation locale de la surface de la pulpe provenant de la nécrose de liquéfaction du tissu. Comme le drainage empêche I ‘établissement de surpression, la lésion a tendance à rester localisée et asymptomatique"
      },
      {
        "questionText": "Lors de l'inflammation pulpaire:",
        "options": [
          "La concentration des cellules est en rapport avec la profondeur de la carie.",
          "Il y a diminution de la perméabilité vasculaire.",
          "Il y a diminution de la pression pulpaire",
          "Il y a destruction des odontoblastes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La pulpite réversible:",
        "options": [
          "Est appelée hyperhémie pulpaire.",
          "Est appelée hyperesthésie pulpaire",
          "Est appelée pulpite aigue.",
          "Présente des signes inflammatoires importants."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "D: La pulpite réversible est un stade transitoire. La pulpe est vivante, avec des signes inflammatoires discrets, présentant des symptômes de pulpalgies, liés à un état hyperhémique transitoire de la pulpe."
      },
      {
        "questionText": "La pulpite irréversible aigüe :",
        "options": [
          "Est toujours primaire",
          "Est une pulpite fermée.",
          "Est secondaire à une pulpite réversible.",
          "Peut-être purulente."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Evolution de la pulpite réversible : Si l’agression persiste ; on assiste à l’apparition d’une pulpite irréversible.\nIl existe deux formes de pulpites aigues :\nSéreuse\nPurulenteDans les formes séreuses : les douleurs sont spontanées ,intermittentes , irradiées, nocturnes, mais cèdent aux antalgiques . Elles son également provoquées par les variations thermiques , le sucre, les acides et se poursuivent un certain temps après l’arrêt du stimulus.Dans les formes purulentes : en plus des signes de congestion aigue, il y’a formation d’abcès pulpaires, qui peuvent rester localiser ou s’étendre à toute la pulpe. Les douleurs sont intenses , spontanées; continues, lancinantes, pulsatile et rebelles aux antalgiques"
      },
      {
        "questionText": "La pulpite irréversible aigüe :",
        "options": [
          "Les douleurs sont provoquées et/ou spontanées.",
          "Le PH est compris entre 5.3 et 5.7.",
          "Il y a invasion microbienne avant l'inflammation.",
          "Les douleurs sont spontanées, par stimulation des fibres C"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Dans la pulpite irréversible aigüe :",
        "options": [
          "Il y a arrêt de la dentinogénèse",
          "Il y a destruction des fibres de collagène",
          "La flore bactérienne est polymorphe.",
          "Est plus toxique qu'infectieuse"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "Désinfection, stérilisation, asepsie et antisepsie",
    "subject": "oc",
    "questions": [
      {
        "questionText": "dans l'infection exogène les différents modes de transmission croisée se font par",
        "options": [
          "Le contact",
          "Les gouttelettes",
          "L’air",
          "Les produits biologiques",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "les avantages de stérilisation par autoclave sont :",
        "options": [
          "L’efficacité absolue",
          "La rapidité d'action",
          "La température de stérilisation peu élevée",
          "La température de stérilisation très élevée",
          "La possibilité de conditionnement des dispositifs médicaux"
        ],
        "correctOptionIndexes": [
          0,
          1,
          4
        ],
        "explanation": "L’autoclave est utilisé pour stériliser les équipements médicaux qui sont réutilisables. \nCeci réduira les risques d'infections et de contaminations entre les patients"
      },
      {
        "questionText": "le conditionnement des instruments se fait :",
        "options": [
          "Avant la stérilisation",
          "Après la stérilisation",
          "Uniquement pour le matériel à stocker",
          "Pour le matériel à usage unique",
          "Après la désinfection"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les emballages de stérilisation peuvent être à usage unique ou réutilisables"
      },
      {
        "questionText": "la turbine et le contre angle sont :",
        "options": [
          "Stérilisés au poupinel",
          "Stérilisés à l'autoclave",
          "Désinfectés en fin de journée",
          "Désinfectés après chaque malade",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "L’infection nosocomiale est :",
        "options": [
          "Liée à l'affection pour laquelle le patient est hospitalisé.",
          "Liée à une infection dentaire.",
          "Contractée à l'hôpital.",
          "Contractée dès la sortie de l'hôpital",
          "Est une infection croisée"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Il s’agit d’une infection contractée à l’hôpital et non directement liée à l’affection pour laquelle le malade est hospitalisé. On considère que toute infection du site opératoire qui se révèle dans les 30 jours suivant une intervention chirurgicale est a priori nosocomiale."
      },
      {
        "questionText": "avec l'autoclave (chaleur humide) :",
        "options": [
          "L'efficacité de stérilisation est absolue.",
          "Il y a rapidité d’action 20 mn à 134°C.",
          "Conditionnement des dispositifs médicaux possible.",
          "La rapidité d'action n’est pas possible.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "Le stockage des dispositifs médicaux doit répondre à un certain nombre d’exigences",
        "options": [
          "Stocker dans un espace ventilé, sans poussière.",
          "Stocker dans un congélateur.",
          "Stocker à l'abri de toute détérioration mécanique.",
          "Stocker à l'abri de toute humidité,",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "(لا يوجد)"
      }
    ]
  },
  {
    "title": "Mortifications pulpaire",
    "subject": "oc",
    "questions": [
      {
        "questionText": "La nécrose pulpaire",
        "options": [
          "Est la mort aseptique du tissu pulpaire",
          "Peut être appelée nécrobiose",
          "Peut être appelée gangrène pulpaire",
          "Sa thérapeutique consiste en l'ablation totale du tissu pulpaire",
          "Présente toujours des complications périapicales"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Mortification pulpaire-nécrose pulpaire :\nIl s’agit d’une mortification d’un tissu, accompagnant sa destruction (pulpe). Elle peut être partielle ou totale selon qu’elle intéresse toute ou une partie du tissu.\na: cest la Nécrobiose de la pulpe ou nécrose ischémique\nd: La thérapeutique consiste en l’ablation totale du tissu pulpaire dans le cas des pulpites, et non dans celui de la gangrène.\nLe traitement de la gangrène pulpaire comprend 4étapes:\n-Le parage canalaire\n-La désinfection canalaire\n-L’ obturation canalaire \n-La reconstitution coronaire hermétique et précoce.\ne : sans traitement elle l’infection gagne la région périapicale et peut donner les complications suivantes :\n- Des pathologies périapicales aigues ou chroniques\n- Granulomes\n- Kystes radiculo-dentaires\n- Cellulites, ostéites et des sinusites."
      },
      {
        "questionText": "La mortification pulpaire:",
        "options": [
          "Regroupe nécrobiose et gangrène pulpaire",
          "Regroupe la gangrène pulpaire qui évolue en nécrobiose.",
          "Nécessite une thérapeutique cémontogène",
          "Nécessite une thérapeutique ostéocémentogène.",
          "Se diagnostique en présence de changement de teinte coronaire de la dent"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La gangrène pulpaire est :",
        "options": [
          "Une nécrose.",
          "Une nécrobiose.",
          "Fait suite à une pulpite irreversible.",
          "Septique",
          "Caractérisée par son odeur"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "(لا يوجد)"
      },
      {
        "questionText": "La dent nécrosée est caractérisée par :",
        "options": [
          "Sa couleur brune-grisâtre dans tous les cas.",
          "Un silence sémiologique.",
          "Une ouverture de la chambre indolore.",
          "Une réponse la percussion axiale obligatoire.",
          "Des douleurs spontanées nocturnes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le changement de teinte de la dent est en effet caractéristique. La dent devient grise cela est du au (differentes theories)"
      }
    ]
  },
  {
    "title": "Test 1: 1er EMD, 2019/2020",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Le traitement non invasif de l'hyperesthésie dentinaire consiste à :",
        "options": [
          "Réaliser une anesthésie.",
          "Prescrire des antalgiques.",
          "Appliquer un vernis.",
          "Appliquer un adhésif.",
          "Utiliser le LASER."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "Les traitements non invasifs visent à obturer les tubuli dentinaires. Les vernis fluorés, les adhésifs et certains types de lasers sont des méthodes reconnues pour atteindre cet objectif."
      },
      {
        "questionText": "La durée approximative d'application du produit de coiffage dentinaire est de :",
        "options": [
          "06 mois.",
          "06 semaines.",
          "03 mois.",
          "03 semaines.",
          "01 semaine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La période standard pour permettre la formation d'un pont de dentine réparatrice sous un matériau de coiffage est de 6 à 8 semaines."
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "Le coiffage juxta-pulpaire est un synonyme du coiffage pulpaire indirect. Il est indiqué sur des dents vivantes présentant une carie très profonde sans signes de pulpite irréversible (ex: pulpite chronique fermée)."
      },
      {
        "questionText": "Dans l'atteinte dentinaire stade 2 :",
        "options": [
          "Le patient se plaint de douleurs provoquées uniquement au froid.",
          "Le patient se plaint de douleurs provoquées uniquement.",
          "Le patient se plaint de douleurs aux variations thermiques.",
          "Le patient se plaint de douleurs aux acides et sucres.",
          "Le patient se plaint de douleurs spontanées."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Ce stade correspond à une pulpite réversible. La douleur est toujours provoquée (non spontanée) et cède à l'arrêt du stimulus (thermique, chimique, osmotique)."
      },
      {
        "questionText": "Le conditionnement des instruments se fait :",
        "options": [
          "Avant la stérilisation.",
          "Après la stérilisation.",
          "Uniquement pour le matériel à stocker.",
          "Pour le matériel à usage unique.",
          "Après la désinfection."
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": "La chaîne de stérilisation est : pré-désinfection, nettoyage, séchage, conditionnement (emballage), puis stérilisation. Le conditionnement se fait donc après désinfection et avant stérilisation."
      },
      {
        "questionText": "La turbine et le contre angle sont :",
        "options": [
          "Stérilisés au poupinel.",
          "Stérilisés à l'autoclave.",
          "Désinfectés en fin de journée.",
          "Désinfectés après chaque malade."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les instruments rotatifs doivent être désinfectés par lingette entre chaque patient, puis stérilisés à l'autoclave (cycle pour corps creux) à la fin de la séance ou journée."
      },
      {
        "questionText": "L'abrasion est due à un processus :",
        "options": [
          "Chimique.",
          "Mécanique.",
          "Infectieux.",
          "Dégénératif.",
          "Malformatif."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'abrasion est une usure mécanique pathologique causée par un agent externe (ex: brossage traumatique). L'usure chimique est l'érosion."
      },
      {
        "questionText": "L'hypersensibilité dentinaire peut être en rapport avec :",
        "options": [
          "L'attrition.",
          "L'abrasion.",
          "L'érosion.",
          "L'abfraction.",
          "La fêlure."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3,
          4
        ],
        "explanation": "Toute situation clinique entraînant une exposition des tubuli dentinaires est une cause potentielle d'hypersensibilité."
      },
      {
        "questionText": "Le traitement de l'hyperesthésie dentinaire :",
        "options": [
          "Est médicamenteux.",
          "Est étiologique.",
          "Consiste à réaliser dans tous les cas un coiffage dentinaire.",
          "Consiste à réaliser dans tous les cas une pulpectomie.",
          "Consiste à réaliser dans tous les cas un dentifrice à haute teneur en fluor."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le traitement primordial de toute pathologie est de supprimer sa cause (traitement étiologique). Les autres options sont des traitements symptomatiques."
      },
      {
        "questionText": "Le test de sensibilité au froid est réalisé :",
        "options": [
          "Au chlorure de sodium.",
          "Au chlorure d'éthyle.",
          "Au fond de la cavité.",
          "Toujours après une isolation et séchage de la dent.",
          "Au niveau cervical."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "Le test se fait avec un produit réfrigérant (chlorure d'éthyle), sur la dent isolée et séchée, au niveau du tiers cervical vestibulaire qui est la zone la plus sensible."
      },
      {
        "questionText": "Le test au fraisage est réalisé :",
        "options": [
          "A la turbine.",
          "Au contre angle.",
          "Au niveau de la dentine saine.",
          "Au niveau de la dentine décalcifiée.",
          "Au niveau de la dentine ramollie."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "C'est un test de vitalité ultime, réalisé sans anesthésie, à basse vitesse (contre-angle) et sur une zone de dentine saine pour être certain d'atteindre les prolongements odontoblastiques."
      },
      {
        "questionText": "Le diagnostic de la fêlure est confirmé par :",
        "options": [
          "Radiographie rétro-alvéolaire.",
          "Réponse positive au test au froid.",
          "Par la transillumination.",
          "Une réponse positive au test de percussion.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La transillumination est l'examen de choix. La lumière est stoppée par le trait de fêlure, créant une ombre qui le révèle."
      },
      {
        "questionText": "Dans les signes subjectifs, on note :",
        "options": [
          "Le caractère de la douleur.",
          "L'intensité de la douleur.",
          "La durée de la douleur.",
          "Le siège de la carie.",
          "La profondeur de la carie."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les signes subjectifs sont les informations rapportées par le patient lors de l'interrogatoire (anamnèse), relatives à sa douleur. Les autres sont des signes objectifs (cliniques)."
      },
      {
        "questionText": "L'infection nosocomiale est :",
        "options": [
          "Liée à l'affection pour laquelle le patient est hospitalisé.",
          "Liée à une infection dentaire.",
          "Contractée à l'hôpital.",
          "Contractée dès la sortie de l'hôpital.",
          "Est une infection croisée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est la définition même : une infection acquise dans un établissement de santé, qui n'était pas présente à l'admission."
      },
      {
        "questionText": "Le traitement non invasif de l'hyperesthésie dentinaire consiste à :",
        "options": [
          "Réaliser une anesthésie.",
          "Prescrire des antalgiques.",
          "Appliquer un vernis.",
          "Appliquer un adhésif.",
          "Utiliser le LASER."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "Les traitements non invasifs visent à obturer les tubuli dentinaires. Les vernis fluorés, les adhésifs et certains types de lasers sont des méthodes reconnues pour atteindre cet objectif."
      },
      {
        "questionText": "La durée approximative d'application du produit de coiffage dentinaire est de :",
        "options": [
          "06 mois.",
          "06 semaines.",
          "03 mois.",
          "03 semaines.",
          "01 semaine."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La période standard pour permettre la formation d'un pont de dentine réparatrice sous un matériau de coiffage est de 6 à 8 semaines."
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "Le coiffage juxta-pulpaire est un synonyme du coiffage pulpaire indirect. Il est indiqué sur des dents vivantes présentant une carie très profonde sans signes de pulpite irréversible (ex: pulpite chronique fermée)."
      },
      {
        "questionText": "Dans l'atteinte dentinaire stade 2 :",
        "options": [
          "Le patient se plaint de douleurs provoquées uniquement au froid.",
          "Le patient se plaint de douleurs provoquées uniquement.",
          "Le patient se plaint de douleurs aux variations thermiques.",
          "Le patient se plaint de douleurs aux acides et sucres.",
          "Le patient se plaint de douleurs spontanées."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "Ce stade correspond à une pulpite réversible. La douleur est toujours provoquée (non spontanée) et cède à l'arrêt du stimulus (thermique, chimique, osmotique)."
      },
      {
        "questionText": "Le conditionnement des instruments se fait :",
        "options": [
          "Avant la stérilisation.",
          "Après la stérilisation.",
          "Uniquement pour le matériel à stocker.",
          "Pour le matériel à usage unique.",
          "Après la désinfection."
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": "La chaîne de stérilisation est : pré-désinfection, nettoyage, séchage, conditionnement (emballage), puis stérilisation. Le conditionnement se fait donc après désinfection et avant stérilisation."
      },
      {
        "questionText": "La turbine et le contre angle sont :",
        "options": [
          "Stérilisés au poupinel.",
          "Stérilisés à l'autoclave.",
          "Désinfectés en fin de journée.",
          "Désinfectés après chaque malade."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Les instruments rotatifs doivent être désinfectés par lingette entre chaque patient, puis stérilisés à l'autoclave (cycle pour corps creux) à la fin de la séance ou journée."
      },
      {
        "questionText": "L'abrasion est due à un processus :",
        "options": [
          "Chimique.",
          "Mécanique.",
          "Infectieux.",
          "Dégénératif.",
          "Malformatif."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'abrasion est une usure mécanique pathologique causée par un agent externe (ex: brossage traumatique). L'usure chimique est l'érosion."
      },
      {
        "questionText": "L'hypersensibilité dentinaire peut être en rapport avec :",
        "options": [
          "L'attrition.",
          "L'abrasion.",
          "L'érosion.",
          "L'abfraction.",
          "La fêlure."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3,
          4
        ],
        "explanation": "Toute situation clinique entraînant une exposition des tubuli dentinaires est une cause potentielle d'hypersensibilité."
      },
      {
        "questionText": "Le traitement de l'hyperesthésie dentinaire :",
        "options": [
          "Est médicamenteux.",
          "Est étiologique.",
          "Consiste à réaliser dans tous les cas un coiffage dentinaire.",
          "Consiste à réaliser dans tous les cas une pulpectomie.",
          "Consiste à réaliser dans tous les cas un dentifrice à haute teneur en fluor."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le traitement primordial de toute pathologie est de supprimer sa cause (traitement étiologique). Les autres options sont des traitements symptomatiques."
      },
      {
        "questionText": "Le test de sensibilité au froid est réalisé :",
        "options": [
          "Au chlorure de sodium.",
          "Au chlorure d'éthyle.",
          "Au fond de la cavité.",
          "Toujours après une isolation et séchage de la dent.",
          "Au niveau cervical."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "Le test se fait avec un produit réfrigérant (chlorure d'éthyle), sur la dent isolée et séchée, au niveau du tiers cervical vestibulaire qui est la zone la plus sensible."
      },
      {
        "questionText": "Le test au fraisage est réalisé :",
        "options": [
          "A la turbine.",
          "Au contre angle.",
          "Au niveau de la dentine saine.",
          "Au niveau de la dentine décalcifiée.",
          "Au niveau de la dentine ramollie."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "C'est un test de vitalité ultime, réalisé sans anesthésie, à basse vitesse (contre-angle) et sur une zone de dentine saine pour être certain d'atteindre les prolongements odontoblastiques."
      },
      {
        "questionText": "Le diagnostic de la fêlure est confirmé par :",
        "options": [
          "Radiographie rétro-alvéolaire.",
          "Réponse positive au test au froid.",
          "Par la transillumination.",
          "Une réponse positive au test de percussion.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La transillumination est l'examen de choix. La lumière est stoppée par le trait de fêlure, créant une ombre qui le révèle."
      },
      {
        "questionText": "Dans les signes subjectifs, on note :",
        "options": [
          "Le caractère de la douleur.",
          "L'intensité de la douleur.",
          "La durée de la douleur.",
          "Le siège de la carie.",
          "La profondeur de la carie."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les signes subjectifs sont les informations rapportées par le patient lors de l'interrogatoire (anamnèse), relatives à sa douleur. Les autres sont des signes objectifs (cliniques)."
      },
      {
        "questionText": "L'infection nosocomiale est :",
        "options": [
          "Liée à l'affection pour laquelle le patient est hospitalisé.",
          "Liée à une infection dentaire.",
          "Contractée à l'hôpital.",
          "Contractée dès la sortie de l'hôpital.",
          "Est une infection croisée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C'est la définition même : une infection acquise dans un établissement de santé, qui n'était pas présente à l'admission."
      }
    ]
  },
  {
    "title": "Test 2: 3eme EMD, 2019/2020",
    "subject": "oc",
    "questions": [
      {
        "questionText": "La préparation canalaire mécanisée :",
        "options": [
          "Nécessite des instruments en acier inoxydable",
          "Nécessite des instruments en Nickel Titane.",
          "Est une technique apico-coronaire.",
          "Nécessite une irrigation abondante.",
          "Impose des mouvements de va et vient de grande amplitude."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La préparation mécanisée (rotation continue ou réciprocité) utilise des instruments en NiTi pour leur flexibilité. Elle est généralement corono-apicale (\"crown-down\") et requiert une irrigation abondante pour éliminer les débris."
      },
      {
        "questionText": "Cochez les dynamiques instrumentales de la préparation canalaire mécanisée :",
        "options": [
          "Mouvement alternatif asymétrique.",
          "Rotation continue.",
          "Mouvement de raclage asymétrique.",
          "Mouvement vertical de grande amplitude."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les deux principaux mouvements sont la rotation continue (ex: ProTaper, Revo-S) et le mouvement alternatif asymétrique ou \"réciprocité\" (ex: WaveOne, Reciproc). Le \"raclage\" décrit le contact de l'instrument contre les parois."
      },
      {
        "questionText": "Les indications du traitement canalaire sont :",
        "options": [
          "Pulpite réversible.",
          "Pulpite irréversible.",
          "Fracture coronaire non pénétrante.",
          "Parodontite apicale chronique.",
          "Atteinte dentinaire profonde."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le traitement canalaire (endodontique) est indiqué lorsque la pulpe est nécrosée ou atteinte d'une inflammation irréversible (pulpite irréversible, parodontite apicale)."
      },
      {
        "questionText": "L'hypochlorite de sodium :",
        "options": [
          "Possède une action solvante sur les débris pulpaires.",
          "Est utilisé à une concentration de 2.5 à 5%.",
          "Est très efficace sur la boue dentinaire.",
          "Possède une action bactéricide et protéolytique.",
          "N'a aucun effet sur les virus et les champignons."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "NaOCl est le principal irrigant. Il dissout les tissus organiques (débris pulpaires), est un puissant bactéricide, mais a une action limitée sur la boue dentinaire (partie minérale), qui nécessite un chélatant comme l'EDTA."
      },
      {
        "questionText": "Dans les thérapeutiques des mortifications pulpaires, l'hypochlorite de sodium est utilisé :",
        "options": [
          "En association avec l'eau oxygénée.",
          "En irrigation.",
          "Juste après la réalisation de la cavité d'accès.",
          "A l'aide d'une seringue endodontique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "L'irrigation avec NaOCl doit commencer dès l'ouverture de la chambre pulpaire et se poursuivre tout au long de la préparation, en utilisant une seringue endodontique spécifique pour éviter les extrusions. L'association avec H2O2 n'est plus recommandée."
      },
      {
        "questionText": "La solution d'irrigation endodontique idéale doit :",
        "options": [
          "Avoir une action antibactérienne.",
          "Permettre la dissolution des tissus organiques.",
          "Etre non irritante pour les tissus péri-apicaux.",
          "Permettre l'inhibition des toxines bactériennes.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Ces propositions décrivent l'ensemble des propriétés recherchées pour une solution d'irrigation idéale, bien qu'aucune solution unique ne les possède toutes parfaitement."
      },
      {
        "questionText": "Le traitement d'une pulpite irréversible sur une '46 mature est :",
        "options": [
          "Une bio-pulpectomie.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Une pulpotomie partielle.",
          "Une pulpectomie immédiate."
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": "Le traitement d'une pulpite irréversible sur une dent mature est la pulpectomie (ablation totale de la pulpe). \"Bio-pulpectomie\" est un synonyme pour une pulpectomie sur une dent vivante."
      },
      {
        "questionText": "La technique de compactage vertical à chaud utilise :",
        "options": [
          "Des cônes de gutta normalisés.",
          "Des cônes de gutta non normalisés.",
          "Des fouloirs verticaux de diamètres croissants.",
          "Des fouloirs verticaux de diamètres décroissants.",
          "Une quantité de ciment d'environ 5%."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "La technique de Schilder utilise des cônes non normalisés, des fouloirs (pluggers) de diamètres décroissants pour le compactage apical (\"down-pack\"), puis des diamètres croissants pour le \"back-pack\". Une faible quantité de ciment est utilisée."
      },
      {
        "questionText": "Les cônes de gutta-percha :",
        "options": [
          "Sont toujours normalisés.",
          "Sont proposés exclusivement selon la norme ISO.",
          "S'oxydent à la lumière.",
          "S'oxydent à l'air.",
          "Doivent être décontaminés à l'hypochlorite de sodium."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "La gutta-percha est sensible à l'oxydation par l'air et la lumière, ce qui la rend cassante. Avant utilisation, les cônes doivent être décontaminés par trempage rapide dans du NaOCl."
      },
      {
        "questionText": "Le ciment de scellement endodontique :",
        "options": [
          "Constitue le matériau d'obturation principal.",
          "N'est pas utilisé dans les techniques de compactage.",
          "Joue le rôle d'un joint.",
          "Assure l'adhésion de la gutta aux parois dentinaires.",
          "Est utilisé en fine couche."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "Le ciment comble les espaces entre la gutta-percha (matériau principal) et les parois, assurant l'étanchéité (joint) et l'adhésion. Il doit être appliqué en fine couche."
      },
      {
        "questionText": "La cavité d'accès endodontique au niveau d'une incisive centrale maxillaire :",
        "options": [
          "Est réalisée au niveau de la face vestibulaire.",
          "Est réalisée au niveau de la région cingulaire.",
          "Présente une forme triangulaire.",
          "Présente une forme trapézoïdale.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La cavité d'accès pour les incisives et canines maxillaires se situe au niveau de la face palatine (cingulum). Sa forme est triangulaire avec la base vers le bord incisif pour respecter les cornes pulpaires."
      },
      {
        "questionText": "La cavité d'accès endodontique :",
        "options": [
          "Est réalisée toujours à partir de la cavité de carie pré existante.",
          "Permet la visibilité des apex radiculaires.",
          "Permet la visibilité des entrées canalaires.",
          "Doit suivre la configuration du contour externe de la dent.",
          "Se situe dans l'axe des canaux."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "La cavité d'accès doit permettre un accès rectiligne aux canaux. Sa forme suit la morphologie de la chambre pulpaire (qui est une projection du contour externe de la dent)."
      },
      {
        "questionText": "La préparation canalaire doit :",
        "options": [
          "Calquer l'anatomie originelle.",
          "Permettre l'élimination de la dentine pariétale dans le cas de gangrènes (thérapeutique des gangrènes).",
          "Respecter les structures anatomiques apicales.",
          "Etre corono-apicale lorsqu'elle est mécanisée.",
          "Etre très conique lorsqu'elle est manuelle."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Les objectifs de la mise en forme sont de nettoyer et de conformer le canal en respectant son anatomie d'origine et la constriction apicale. Les techniques mécanisées sont majoritairement corono-apicales."
      },
      {
        "questionText": "La technique de compactage latéral à froid :",
        "options": [
          "Exploite la malléabilité de la gutta.",
          "Exploite la plasticité de la gutta.",
          "Impose une préparation conique.",
          "Utilise des spreaders.",
          "Utilise une quantité de ciment d'environ 15%."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3,
          4
        ],
        "explanation": "Cette technique utilise un maître-cône et des cônes accessoires compactés latéralement avec des \"spreaders\". Elle nécessite une préparation canalaire conique pour permettre l'insertion des instruments."
      },
      {
        "questionText": "Les signes objectifs lors d'un syndrome du septum sont :",
        "options": [
          "Absence de point de contact.",
          "Tassement alimentaire.",
          "La papille est tuméfiée et rouge.",
          "La papille saigne au sondage.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Le syndrome du septum est une inflammation de la papille interdentaire due à l'absence de point de contact. Tous les signes décrits (tassement, inflammation, saignement) sont caractéristiques."
      },
      {
        "questionText": "La réussite d'une restauration d'une cavité de classe II nécessite l'utilisation :",
        "options": [
          "Des coins inter-dentaires.",
          "Des matériaux biocompatibles.",
          "Obligatoire d'une bague en cuivre.",
          "D'une matrice simple.",
          "D'une matrice adaptée."
        ],
        "correctOptionIndexes": [
          0,
          3,
          4
        ],
        "explanation": "La restauration d'une classe II requiert un système de matriçage (matrice adaptée + coin interdentaire) pour reconstituer correctement le point de contact et le profil proximal."
      },
      {
        "questionText": "Le point de contact assure :",
        "options": [
          "Le maintien de position de la dent.",
          "La préservation du parodonte.",
          "Une harmonie du sourire.",
          "Une réussite de la thérapeutique endodontique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Un point de contact correct est crucial pour stabiliser la dent sur l'arcade, protéger la papille interdentaire et contribuer à l'esthétique du sourire."
      },
      {
        "questionText": "L'espace inter-dentaire est formé de :",
        "options": [
          "La crête marginale.",
          "Le point de contact.",
          "Les embrasures.",
          "La papille gingivale.",
          "Le septum inter radiculaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "L'espace inter-dentaire est une zone complexe délimitée occlusalement par les crêtes marginales, latéralement par les faces proximales (au niveau du point de contact), et remplie par la papille gingivale."
      },
      {
        "questionText": "Le cathétérisme :",
        "options": [
          "Est l'exploration active du système canalaire.",
          "Est l'exploration passive du système canalaire.",
          "Est l'exploration initiale du système canalaire.",
          "Est réalisée à l'aide d'une lime K n°10.",
          "Permet de déterminer la longueur de travail."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3,
          4
        ],
        "explanation": "C'est la première exploration passive du canal, réalisée avec une lime fine (K10 ou K15), pour évaluer sa perméabilité et déterminer la longueur de travail estimée."
      },
      {
        "questionText": "Le canal accessoire :",
        "options": [
          "Est une ramification du canal principal.",
          "Est une ramification du canal secondaire.",
          "Est situé dans le tiers (1/3) apical.",
          "Est situé dans le tiers (1/3) moyen.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Un canal accessoire est une ramification qui part d'un canal secondaire (qui lui-même part du canal principal) et qui débouche au niveau du cément. On les trouve le plus souvent dans le tiers apical."
      },
      {
        "questionText": "La préparation canalaire mécanisée :",
        "options": [
          "Nécessite des instruments en acier inoxydable",
          "Nécessite des instruments en Nickel Titane.",
          "Est une technique apico-coronaire.",
          "Nécessite une irrigation abondante.",
          "Impose des mouvements de va et vient de grande amplitude."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La préparation mécanisée (rotation continue ou réciprocité) utilise des instruments en NiTi pour leur flexibilité. Elle est généralement corono-apicale (\"crown-down\") et requiert une irrigation abondante pour éliminer les débris."
      },
      {
        "questionText": "Cochez les dynamiques instrumentales de la préparation canalaire mécanisée :",
        "options": [
          "Mouvement alternatif asymétrique.",
          "Rotation continue.",
          "Mouvement de raclage asymétrique.",
          "Mouvement vertical de grande amplitude."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les deux principaux mouvements sont la rotation continue (ex: ProTaper, Revo-S) et le mouvement alternatif asymétrique ou \"réciprocité\" (ex: WaveOne, Reciproc). Le \"raclage\" décrit le contact de l'instrument contre les parois."
      },
      {
        "questionText": "Les indications du traitement canalaire sont :",
        "options": [
          "Pulpite réversible.",
          "Pulpite irréversible.",
          "Fracture coronaire non pénétrante.",
          "Parodontite apicale chronique.",
          "Atteinte dentinaire profonde."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Le traitement canalaire (endodontique) est indiqué lorsque la pulpe est nécrosée ou atteinte d'une inflammation irréversible (pulpite irréversible, parodontite apicale)."
      },
      {
        "questionText": "L'hypochlorite de sodium :",
        "options": [
          "Possède une action solvante sur les débris pulpaires.",
          "Est utilisé à une concentration de 2.5 à 5%.",
          "Est très efficace sur la boue dentinaire.",
          "Possède une action bactéricide et protéolytique.",
          "N'a aucun effet sur les virus et les champignons."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "NaOCl est le principal irrigant. Il dissout les tissus organiques (débris pulpaires), est un puissant bactéricide, mais a une action limitée sur la boue dentinaire (partie minérale), qui nécessite un chélatant comme l'EDTA."
      },
      {
        "questionText": "Dans les thérapeutiques des mortifications pulpaires, l'hypochlorite de sodium est utilisé :",
        "options": [
          "En association avec l'eau oxygénée.",
          "En irrigation.",
          "Juste après la réalisation de la cavité d'accès.",
          "A l'aide d'une seringue endodontique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "L'irrigation avec NaOCl doit commencer dès l'ouverture de la chambre pulpaire et se poursuivre tout au long de la préparation, en utilisant une seringue endodontique spécifique pour éviter les extrusions. L'association avec H2O2 n'est plus recommandée."
      },
      {
        "questionText": "La solution d'irrigation endodontique idéale doit :",
        "options": [
          "Avoir une action antibactérienne.",
          "Permettre la dissolution des tissus organiques.",
          "Etre non irritante pour les tissus péri-apicaux.",
          "Permettre l'inhibition des toxines bactériennes.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Ces propositions décrivent l'ensemble des propriétés recherchées pour une solution d'irrigation idéale, bien qu'aucune solution unique ne les possède toutes parfaitement."
      },
      {
        "questionText": "Le traitement d'une pulpite irréversible sur une '46 mature est :",
        "options": [
          "Une bio-pulpectomie.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Une pulpotomie partielle.",
          "Une pulpectomie immédiate."
        ],
        "correctOptionIndexes": [
          0,
          4
        ],
        "explanation": "Le traitement d'une pulpite irréversible sur une dent mature est la pulpectomie (ablation totale de la pulpe). \"Bio-pulpectomie\" est un synonyme pour une pulpectomie sur une dent vivante."
      },
      {
        "questionText": "La technique de compactage vertical à chaud utilise :",
        "options": [
          "Des cônes de gutta normalisés.",
          "Des cônes de gutta non normalisés.",
          "Des fouloirs verticaux de diamètres croissants.",
          "Des fouloirs verticaux de diamètres décroissants.",
          "Une quantité de ciment d'environ 5%."
        ],
        "correctOptionIndexes": [
          1,
          3,
          4
        ],
        "explanation": "La technique de Schilder utilise des cônes non normalisés, des fouloirs (pluggers) de diamètres décroissants pour le compactage apical (\"down-pack\"), puis des diamètres croissants pour le \"back-pack\". Une faible quantité de ciment est utilisée."
      },
      {
        "questionText": "Les cônes de gutta-percha :",
        "options": [
          "Sont toujours normalisés.",
          "Sont proposés exclusivement selon la norme ISO.",
          "S'oxydent à la lumière.",
          "S'oxydent à l'air.",
          "Doivent être décontaminés à l'hypochlorite de sodium."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "La gutta-percha est sensible à l'oxydation par l'air et la lumière, ce qui la rend cassante. Avant utilisation, les cônes doivent être décontaminés par trempage rapide dans du NaOCl."
      },
      {
        "questionText": "Le ciment de scellement endodontique :",
        "options": [
          "Constitue le matériau d'obturation principal.",
          "N'est pas utilisé dans les techniques de compactage.",
          "Joue le rôle d'un joint.",
          "Assure l'adhésion de la gutta aux parois dentinaires.",
          "Est utilisé en fine couche."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "Le ciment comble les espaces entre la gutta-percha (matériau principal) et les parois, assurant l'étanchéité (joint) et l'adhésion. Il doit être appliqué en fine couche."
      },
      {
        "questionText": "La cavité d'accès endodontique au niveau d'une incisive centrale maxillaire :",
        "options": [
          "Est réalisée au niveau de la face vestibulaire.",
          "Est réalisée au niveau de la région cingulaire.",
          "Présente une forme triangulaire.",
          "Présente une forme trapézoïdale.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La cavité d'accès pour les incisives et canines maxillaires se situe au niveau de la face palatine (cingulum). Sa forme est triangulaire avec la base vers le bord incisif pour respecter les cornes pulpaires."
      },
      {
        "questionText": "La cavité d'accès endodontique :",
        "options": [
          "Est réalisée toujours à partir de la cavité de carie pré existante.",
          "Permet la visibilité des apex radiculaires.",
          "Permet la visibilité des entrées canalaires.",
          "Doit suivre la configuration du contour externe de la dent.",
          "Se situe dans l'axe des canaux."
        ],
        "correctOptionIndexes": [
          2,
          3,
          4
        ],
        "explanation": "La cavité d'accès doit permettre un accès rectiligne aux canaux. Sa forme suit la morphologie de la chambre pulpaire (qui est une projection du contour externe de la dent)."
      },
      {
        "questionText": "La préparation canalaire doit :",
        "options": [
          "Calquer l'anatomie originelle.",
          "Permettre l'élimination de la dentine pariétale dans le cas de gangrènes (thérapeutique des gangrènes).",
          "Respecter les structures anatomiques apicales.",
          "Etre corono-apicale lorsqu'elle est mécanisée.",
          "Etre très conique lorsqu'elle est manuelle."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Les objectifs de la mise en forme sont de nettoyer et de conformer le canal en respectant son anatomie d'origine et la constriction apicale. Les techniques mécanisées sont majoritairement corono-apicales."
      },
      {
        "questionText": "La technique de compactage latéral à froid :",
        "options": [
          "Exploite la malléabilité de la gutta.",
          "Exploite la plasticité de la gutta.",
          "Impose une préparation conique.",
          "Utilise des spreaders.",
          "Utilise une quantité de ciment d'environ 15%."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3,
          4
        ],
        "explanation": "Cette technique utilise un maître-cône et des cônes accessoires compactés latéralement avec des \"spreaders\". Elle nécessite une préparation canalaire conique pour permettre l'insertion des instruments."
      },
      {
        "questionText": "Les signes objectifs lors d'un syndrome du septum sont :",
        "options": [
          "Absence de point de contact.",
          "Tassement alimentaire.",
          "La papille est tuméfiée et rouge.",
          "La papille saigne au sondage.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Le syndrome du septum est une inflammation de la papille interdentaire due à l'absence de point de contact. Tous les signes décrits (tassement, inflammation, saignement) sont caractéristiques."
      },
      {
        "questionText": "La réussite d'une restauration d'une cavité de classe II nécessite l'utilisation :",
        "options": [
          "Des coins inter-dentaires.",
          "Des matériaux biocompatibles.",
          "Obligatoire d'une bague en cuivre.",
          "D'une matrice simple.",
          "D'une matrice adaptée."
        ],
        "correctOptionIndexes": [
          0,
          3,
          4
        ],
        "explanation": "La restauration d'une classe II requiert un système de matriçage (matrice adaptée + coin interdentaire) pour reconstituer correctement le point de contact et le profil proximal."
      },
      {
        "questionText": "Le point de contact assure :",
        "options": [
          "Le maintien de position de la dent.",
          "La préservation du parodonte.",
          "Une harmonie du sourire.",
          "Une réussite de la thérapeutique endodontique.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Un point de contact correct est crucial pour stabiliser la dent sur l'arcade, protéger la papille interdentaire et contribuer à l'esthétique du sourire."
      },
      {
        "questionText": "L'espace inter-dentaire est formé de :",
        "options": [
          "La crête marginale.",
          "Le point de contact.",
          "Les embrasures.",
          "La papille gingivale.",
          "Le septum inter radiculaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "L'espace inter-dentaire est une zone complexe délimitée occlusalement par les crêtes marginales, latéralement par les faces proximales (au niveau du point de contact), et remplie par la papille gingivale."
      },
      {
        "questionText": "Le cathétérisme :",
        "options": [
          "Est l'exploration active du système canalaire.",
          "Est l'exploration passive du système canalaire.",
          "Est l'exploration initiale du système canalaire.",
          "Est réalisée à l'aide d'une lime K n°10.",
          "Permet de déterminer la longueur de travail."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3,
          4
        ],
        "explanation": "C'est la première exploration passive du canal, réalisée avec une lime fine (K10 ou K15), pour évaluer sa perméabilité et déterminer la longueur de travail estimée."
      },
      {
        "questionText": "Le canal accessoire :",
        "options": [
          "Est une ramification du canal principal.",
          "Est une ramification du canal secondaire.",
          "Est situé dans le tiers (1/3) apical.",
          "Est situé dans le tiers (1/3) moyen.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Un canal accessoire est une ramification qui part d'un canal secondaire (qui lui-même part du canal principal) et qui débouche au niveau du cément. On les trouve le plus souvent dans le tiers apical."
      }
    ]
  },
  {
    "title": "Test 3: 1er CC OC, 2019/2020",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Le curetage dentinaire mécanique est réalisé au moyen :",
        "options": [
          "D'une fraise boule montée sur turbine.",
          "D'une fraise boule montée sur contre-angle.",
          "D'un excavateur.",
          "D'une curette.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le curetage mécanique se fait à basse vitesse pour un meilleur contrôle tactile et pour éviter de surchauffer la pulpe. On utilise donc une fraise boule sur contre-angle (bague bleue)."
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "Répétition de la question du test 1. C'est un coiffage pulpaire indirect, indiqué sur une dent vivante asymptomatique ou avec pulpite réversible (chronique fermée)."
      },
      {
        "questionText": "La technique radiologique pour visualiser les caries proximales exclusivement est :",
        "options": [
          "La rétro-alvéolaire.",
          "La rétro coronaire.",
          "Le bite wing.",
          "Le mordu occlusal.",
          "La panoramique dentaire."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La technique de choix pour le diagnostic des caries proximales est le cliché \"Bite-wing\" (ou rétro-coronaire), qui donne une image nette des couronnes des dents maxillaires et mandibulaires sans superposition."
      },
      {
        "questionText": "Dans les thérapeutiques dentinogènes, il y a formation :",
        "options": [
          "De dentine réactionnelle.",
          "De dentine tertiaire.",
          "De dentine sclérotique.",
          "De dentine décalcifiée.",
          "De barrière dentinaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "En réponse à une agression (carie, fraisage), la pulpe forme de la dentine tertiaire, qui peut être réactionnelle (formée par les odontoblastes primaires) ou réparatrice (formée par de nouveaux odontoblastes). La dentine sclérotique est une oblitération des tubuli. L'ensemble forme une barrière de protection."
      },
      {
        "questionText": "La digue :",
        "options": [
          "Empêche la chute d'instrument dans la gorge.",
          "Protège la dent de la salive.",
          "Empêche d'avaler de l'hypochlorite de sodium.",
          "Sert à isoler les dents.",
          "Est de couleur blanche."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "La digue assure une isolation parfaite du champ opératoire. Elle protège le patient (chute d'objet, ingestion de produits) et protège la dent de la contamination salivaire, garantissant la qualité des soins."
      },
      {
        "questionText": "La fraise de Batt est :",
        "options": [
          "Une fraise boule en carbure de Tungstène.",
          "Une fraise fissurée à bout rond en acier.",
          "Une fraise diamantée à cône renversé.",
          "Indiquée pour l'ablation du plafond pulpaire.",
          "Indiquée pour la trépanation de la chambre pulpaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La fraise de Batt est une fraise en carbure de tungstène, lisse, à bout mousse (inactif), utilisée pour élargir la cavité d'accès et éliminer les surplombs sans risque de perforer le plancher pulpaire. Aucune proposition ne la décrit parfaitement."
      },
      {
        "questionText": "La carie initiale :",
        "options": [
          "Correspond au stade 0 SISTA.",
          "Correspond à une atteinte amélaire.",
          "Correspond à une atteinte dentinaire.",
          "Correspond au stade de la tache blanche.",
          "Est traitée par reminéralisassions."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3,
          4
        ],
        "explanation": "La carie initiale est une lésion non cavitaire confinée à l'émail (stade 0 SISTA), se présentant cliniquement comme une tache blanche. Son traitement est non-invasif (reminéralisation par le fluor, hygiène)."
      },
      {
        "questionText": "L'oxyde de zinc eugénol :",
        "options": [
          "Est appelé aussi l'eugénolate.",
          "Possède un PH proche de celui du tissu pulpaire vital.",
          "Possède une action stimulante directe de la dentinogenèse.",
          "Peut être renforcé en incorporant-dans sa composition une résine.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'eugénol réagit avec l'oxyde de zinc pour former de l'eugénolate de zinc. Son pH est neutre. Il a une action sédative mais pas directement stimulante. Les ciments ZOE renforcés (type IRM) contiennent des résines."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est sa capacité de :",
        "options": [
          "Limiter les chutes de PH salivaire buccal.",
          "Lutter contre l'acidité buccale.",
          "Compenser les baisses de PH.",
          "Lubrifier les dents.",
          "Neutraliser les bactéries."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le pouvoir tampon (principalement dû aux bicarbonates) est la capacité de la salive à neutraliser les acides et à s'opposer aux variations de pH, protégeant ainsi l'émail de la déminéralisation."
      },
      {
        "questionText": "La turbine :",
        "options": [
          "Tourne à une vitesse de 30 000 tour/min.",
          "Elle a une source d'énergie fournie par l'air et l'eau.",
          "Est utilisée pour réaliser le biseautage.",
          "Elle comporte une tête porte fraise et un manche.",
          "Est utilisée pour réaliser le curetage dentinaire."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La turbine est un instrument rotatif à très haute vitesse (plus de 300 000 tr/min), actionnée par l'air comprimé (l'eau servant au refroidissement). Elle est utilisée pour les étapes de préparation qui nécessitent une coupe rapide de l'émail, comme le biseautage."
      },
      {
        "questionText": "Le curetage dentinaire mécanique est réalisé au moyen :",
        "options": [
          "D'une fraise boule montée sur turbine.",
          "D'une fraise boule montée sur contre-angle.",
          "D'un excavateur.",
          "D'une curette.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le curetage mécanique se fait à basse vitesse pour un meilleur contrôle tactile et pour éviter de surchauffer la pulpe. On utilise donc une fraise boule sur contre-angle (bague bleue)."
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "C'est un coiffage pulpaire indirect, indiqué sur une dent vivante asymptomatique ou avec pulpite réversible (chronique fermée)."
      },
      {
        "questionText": "La technique radiologique pour visualiser les caries proximales exclusivement est :",
        "options": [
          "La rétro-alvéolaire.",
          "La rétro coronaire.",
          "Le bite wing.",
          "Le mordu occlusal.",
          "La panoramique dentaire."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La technique de choix pour le diagnostic des caries proximales est le cliché \"Bite-wing\" (ou rétro-coronaire), qui donne une image nette des couronnes des dents maxillaires et mandibulaires sans superposition."
      },
      {
        "questionText": "Dans les thérapeutiques dentinogènes, il y a formation :",
        "options": [
          "De dentine réactionnelle.",
          "De dentine tertiaire.",
          "De dentine sclérotique.",
          "De dentine décalcifiée.",
          "De barrière dentinaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "En réponse à une agression (carie, fraisage), la pulpe forme de la dentine tertiaire, qui peut être réactionnelle (formée par les odontoblastes primaires) ou réparatrice (formée par de nouveaux odontoblastes). La dentine sclérotique est une oblitération des tubuli. L'ensemble forme une barrière de protection."
      },
      {
        "questionText": "La digue :",
        "options": [
          "Empêche la chute d'instrument dans la gorge.",
          "Protège la dent de la salive.",
          "Empêche d'avaler de l'hypochlorite de sodium.",
          "Sert à isoler les dents.",
          "Est de couleur blanche."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "La digue assure une isolation parfaite du champ opératoire. Elle protège le patient (chute d'objet, ingestion de produits) et protège la dent de la contamination salivaire, garantissant la qualité des soins."
      },
      {
        "questionText": "La fraise de Batt est :",
        "options": [
          "Une fraise boule en carbure de Tungstène.",
          "Une fraise fissurée à bout rond en acier.",
          "Une fraise diamantée à cône renversé.",
          "Indiquée pour l'ablation du plafond pulpaire.",
          "Indiquée pour la trépanation de la chambre pulpaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La fraise de Batt est une fraise en carbure de tungstène, lisse, à bout mousse (inactif), utilisée pour élargir la cavité d'accès et éliminer les surplombs sans risque de perforer le plancher pulpaire."
      },
      {
        "questionText": "La carie initiale :",
        "options": [
          "Correspond au stade 0 SISTA.",
          "Correspond à une atteinte amélaire.",
          "Correspond à une atteinte dentinaire.",
          "Correspond au stade de la tache blanche.",
          "Est traitée par reminéralisassions."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3,
          4
        ],
        "explanation": "La carie initiale est une lésion non cavitaire confinée à l'émail (stade 0 SISTA), se présentant cliniquement comme une tache blanche. Son traitement est non-invasif (reminéralisation par le fluor, hygiène)."
      },
      {
        "questionText": "L'oxyde de zinc eugénol :",
        "options": [
          "Est appelé aussi l'eugénolate.",
          "Possède un PH proche de celui du tissu pulpaire vital.",
          "Possède une action stimulante directe de la dentinogenèse.",
          "Peut être renforcé en incorporant-dans sa composition une résine.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'eugénol réagit avec l'oxyde de zinc pour former de l'eugénolate de zinc. Son pH est neutre. Il a une action sédative mais pas directement stimulante. Les ciments ZOE renforcés (type IRM) contiennent des résines."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est sa capacité de :",
        "options": [
          "Limiter les chutes de PH salivaire buccal.",
          "Lutter contre l'acidité buccale.",
          "Compenser les baisses de PH.",
          "Lubrifier les dents.",
          "Neutraliser les bactéries."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le pouvoir tampon (principalement dû aux bicarbonates) est la capacité de la salive à neutraliser les acides et à s'opposer aux variations de pH, protégeant ainsi l'émail de la déminéralisation."
      },
      {
        "questionText": "La turbine :",
        "options": [
          "Tourne à une vitesse de 30 000 tour/min.",
          "Elle a une source d'énergie fournie par l'air et l'eau.",
          "Est utilisée pour réaliser le biseautage.",
          "Elle comporte une tête porte fraise et un manche.",
          "Est utilisée pour réaliser le curetage dentinaire."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La turbine est un instrument rotatif à très haute vitesse (plus de 300 000 tr/min), actionnée par l'air comprimé (l'eau servant au refroidissement). Elle est utilisée pour les étapes de préparation qui nécessitent une coupe rapide de l'émail, comme le biseautage."
      },
      {
        "questionText": "Le curetage dentinaire mécanique est réalisé au moyen :",
        "options": [
          "D'une fraise boule montée sur turbine.",
          "D'une fraise boule montée sur contre-angle.",
          "D'un excavateur.",
          "D'une curette.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le curetage mécanique se fait à basse vitesse pour un meilleur contrôle tactile et pour éviter de surchauffer la pulpe. On utilise donc une fraise boule sur contre-angle (bague bleue)."
      },
      {
        "questionText": "Le coiffage juxta-pulpaire est :",
        "options": [
          "Un coiffage dentinaire.",
          "Un coiffage pulpaire direct.",
          "Un coiffage pulpaire indirect.",
          "Indiqué dans le cas de pulpite chronique ouverte.",
          "Indiqué dans le cas de pulpite chronique fermée."
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "C'est un coiffage pulpaire indirect, indiqué sur une dent vivante asymptomatique ou avec pulpite réversible (chronique fermée)."
      },
      {
        "questionText": "La technique radiologique pour visualiser les caries proximales exclusivement est :",
        "options": [
          "La rétro-alvéolaire.",
          "La rétro coronaire.",
          "Le bite wing.",
          "Le mordu occlusal.",
          "La panoramique dentaire."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La technique de choix pour le diagnostic des caries proximales est le cliché \"Bite-wing\" (ou rétro-coronaire), qui donne une image nette des couronnes des dents maxillaires et mandibulaires sans superposition."
      },
      {
        "questionText": "Dans les thérapeutiques dentinogènes, il y a formation :",
        "options": [
          "De dentine réactionnelle.",
          "De dentine tertiaire.",
          "De dentine sclérotique.",
          "De dentine décalcifiée.",
          "De barrière dentinaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "En réponse à une agression (carie, fraisage), la pulpe forme de la dentine tertiaire, qui peut être réactionnelle (formée par les odontoblastes primaires) ou réparatrice (formée par de nouveaux odontoblastes). La dentine sclérotique est une oblitération des tubuli. L'ensemble forme une barrière de protection."
      },
      {
        "questionText": "La digue :",
        "options": [
          "Empêche la chute d'instrument dans la gorge.",
          "Protège la dent de la salive.",
          "Empêche d'avaler de l'hypochlorite de sodium.",
          "Sert à isoler les dents.",
          "Est de couleur blanche."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          3
        ],
        "explanation": "La digue assure une isolation parfaite du champ opératoire. Elle protège le patient (chute d'objet, ingestion de produits) et protège la dent de la contamination salivaire, garantissant la qualité des soins."
      },
      {
        "questionText": "La fraise de Batt est :",
        "options": [
          "Une fraise boule en carbure de Tungstène.",
          "Une fraise fissurée à bout rond en acier.",
          "Une fraise diamantée à cône renversé.",
          "Indiquée pour l'ablation du plafond pulpaire.",
          "Indiquée pour la trépanation de la chambre pulpaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La fraise de Batt est une fraise en carbure de tungstène, lisse, à bout mousse (inactif), utilisée pour élargir la cavité d'accès et éliminer les surplombs sans risque de perforer le plancher pulpaire."
      },
      {
        "questionText": "La carie initiale :",
        "options": [
          "Correspond au stade 0 SISTA.",
          "Correspond à une atteinte amélaire.",
          "Correspond à une atteinte dentinaire.",
          "Correspond au stade de la tache blanche.",
          "Est traitée par reminéralisassions."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3,
          4
        ],
        "explanation": "La carie initiale est une lésion non cavitaire confinée à l'émail (stade 0 SISTA), se présentant cliniquement comme une tache blanche. Son traitement est non-invasif (reminéralisation par le fluor, hygiène)."
      },
      {
        "questionText": "L'oxyde de zinc eugénol :",
        "options": [
          "Est appelé aussi l'eugénolate.",
          "Possède un PH proche de celui du tissu pulpaire vital.",
          "Possède une action stimulante directe de la dentinogenèse.",
          "Peut être renforcé en incorporant-dans sa composition une résine.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'eugénol réagit avec l'oxyde de zinc pour former de l'eugénolate de zinc. Son pH est neutre. Il a une action sédative mais pas directement stimulante. Les ciments ZOE renforcés (type IRM) contiennent des résines."
      },
      {
        "questionText": "Le pouvoir tampon de la salive est sa capacité de :",
        "options": [
          "Limiter les chutes de PH salivaire buccal.",
          "Lutter contre l'acidité buccale.",
          "Compenser les baisses de PH.",
          "Lubrifier les dents.",
          "Neutraliser les bactéries."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le pouvoir tampon (principalement dû aux bicarbonates) est la capacité de la salive à neutraliser les acides et à s'opposer aux variations de pH, protégeant ainsi l'émail de la déminéralisation."
      },
      {
        "questionText": "La turbine :",
        "options": [
          "Tourne à une vitesse de 30 000 tour/min.",
          "Elle a une source d'énergie fournie par l'air et l'eau.",
          "Est utilisée pour réaliser le biseautage.",
          "Elle comporte une tête porte fraise et un manche.",
          "Est utilisée pour réaliser le curetage dentinaire."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "La turbine est un instrument rotatif à très haute vitesse (plus de 300 000 tr/min), actionnée par l'air comprimé (l'eau servant au refroidissement). Elle est utilisée pour les étapes de préparation qui nécessitent une coupe rapide de l'émail, comme le biseautage."
      }
    ]
  },
  {
    "title": "Test 5: QROC Convertis et Questions Manuscrites",
    "subject": "oc",
    "questions": [
      {
        "questionText": "Quels sont les avantages du curetage dentinaire par le LASER ? (Question convertie)",
        "options": [
          "Préparation cavitaire directe sans carbonisation.",
          "Travail sans bruit et sans vibration (confort du patient).",
          "Effet stérilisant et hémostatique.",
          "Moins de risque de fêlures (micro-fractures).",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le Laser (Er:YAG) permet un curetage sélectif, moins douloureux (moins de vibrations/bruit), stérilise la surface et évite les micro-fêlures souvent causées par les instruments rotatifs."
      },
      {
        "questionText": "Quelles sont les qualités biologiques requises d'un produit de coiffage ? (Question convertie)",
        "options": [
          "Être bactéricide et bactériostatique.",
          "Avoir un pH acide pour stimuler la pulpe.",
          "Être biocompatible et non irritant pour la pulpe.",
          "Stimuler la formation de dentine réparatrice (dentinogène).",
          "Assurer une étanchéité marginale."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3,
          4
        ],
        "explanation": "Un bon produit de coiffage doit être basique (pH alcalin) pour neutraliser l'acidité, biocompatible, sédatif, et induire la minéralisation (pont dentinaire)."
      },
      {
        "questionText": "Quels sont les tests de vérification du curetage dentinaire manuel ? (Question convertie)",
        "options": [
          "Le cri dentinaire (son clair au passage de la sonde).",
          "La dureté des parois à la sonde.",
          "L'absence de copeaux dentinaires lors du grattage.",
          "L'aspect brillant de la dentine.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le curetage est complet lorsque la dentine est dure (« cri dentinaire »), lisse, brillante et que l'excavateur ou la sonde ne ramène plus de copeaux mous."
      },
      {
        "questionText": "Quelle est la comparaison correcte entre la radiographie numérique et classique ? (Question convertie)",
        "options": [
          "La radio numérique nécessite plus de dose d'irradiation que la classique.",
          "La radio numérique permet un traitement d'image (contraste, zoom) impossible en classique.",
          "La radio numérique nécessite un développement chimique en chambre noire.",
          "La radio classique permet un archivage et un partage plus facile.",
          "Le stockage des films argentiques est plus durable que le stockage numérique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La radiographie numérique réduit la dose d'irradiation (jusqu'à -80%), élimine la chimie (développement), et permet le traitement et l'archivage informatique des images."
      },
      {
        "questionText": "Quel est l'aspect microscopique de la lésion amélaire initiale (Tache blanche) ? (Question convertie)",
        "options": [
          "Une destruction totale de la surface de l'émail.",
          "Une zone superficielle intacte recouvrant une zone déminéralisée (corps de la lésion).",
          "La présence de bactéries au sein des tubuli dentinaires.",
          "Une invasion de la jonction émail-dentine.",
          "Une cavitation macroscopique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Histologiquement, la tache blanche présente une couche de surface pseudo-intacte (grâce à la reminéralisation salivaire) qui recouvre le corps de la lésion (zone de déminéralisation sub-surface)."
      },
      {
        "questionText": "Quels facteurs influencent l'équilibre Déminéralisation / Reminéralisation ? (Question convertie)",
        "options": [
          "Le pH salivaire et le pouvoir tampon.",
          "La fréquence d'ingestion des sucres (hydrates de carbone).",
          "La présence de fluor.",
          "Le flux salivaire et l'hygiène bucco-dentaire.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La balance dépend de l'attaque acide (bactéries + sucres) contre les défenses (salive, fluor, hygiène)."
      },
      {
        "questionText": "Quel est l'intérêt de la digue en endodontie ? (Question convertie)",
        "options": [
          "Assurer l'asepsie (éviter la contamination salivaire).",
          "Protéger le patient contre l'ingestion d'instruments ou de produits.",
          "Améliorer la visibilité et l'accès.",
          "Protéger les tissus mous.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "La digue est obligatoire en endodontie pour l'asepsie, la sécurité (risque d'ingestion de limes/NaOCl) et le confort."
      },
      {
        "questionText": "Citez trois moyens de polissage des restaurations dentaires (Question convertie) :",
        "options": [
          "Disques abrasifs (ex: Sof-Lex) de grains décroissants.",
          "Pointes ou cupules en silicone (caoutchouc).",
          "Pâtes à polir diamantées ou à l'oxyde d'alumine.",
          "Fraises diamantées à grain grossier.",
          "Brossettes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "Le polissage se fait avec des abrasifs de plus en plus fins : disques, caoutchoucs, brossettes et pâtes. Les fraises à grain grossier servent à la taille, pas au polissage."
      },
      {
        "questionText": "Quelle est la contre-indication absolue du coiffage pulpaire direct ? (Question convertie)",
        "options": [
          "Une exposition pulpaire récente (< 24h).",
          "Une exposition pulpaire traumatique de petite taille.",
          "Une exposition pulpaire en milieu contaminé (ex: salive, carie profonde).",
          "Une dent jeune immature (apex ouvert).",
          "Une exposition accidentelle sur champ opératoire isolé (digue)."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le coiffage direct est voué à l'échec si la pulpe est enflammée de manière irréversible ou si le site est contaminé par la salive ou la carie. Il nécessite une pulpe saine et un champ opératoire stérile."
      }
    ]
  },
  {
    "title": "Test 4: 2eme CC, 2019/2020",
    "subject": "oc",
    "questions": [
      {
        "questionText": "La pulpectomie sur une dent permanente immature :",
        "options": [
          "Est une thérapeutique dentinogène.",
          "Est une thérapeutique cémentogène.",
          "Est réalisée sous anesthésie.",
          "Est réalisée sans anesthésie.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La pulpectomie sur dent immature (apexification) vise à obtenir une fermeture apicale par une barrière de tissu dur (dentinogène ou cémentogène). Elle se fait sur une dent nécrosée, mais l'instrumentation nécessite une anesthésie pour le confort du patient."
      },
      {
        "questionText": "La pulpectomie :",
        "options": [
          "Peut-être cémentogène ou dentinogène.",
          "Peut-être partielle ou totale.",
          "Peut-être basse ou haute.",
          "Est réalisée uniquement sur dent temporaire.",
          "Est réalisée uniquement sur dent permanente immature."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La pulpectomie peut être totale (traitement canalaire classique) ou partielle (pulpotomie). L'objectif sur dent immature est la formation d'une barrière apicale (cémentogène/dentinogène). Le terme \"haute/basse\" peut se référer au niveau de l'amputation pulpaire."
      },
      {
        "questionText": "Les matériaux de coiffage utilisés lors d'une pulpotomie sont :",
        "options": [
          "Le ciment verre ionomère.",
          "L'hydroxyde de calcium.",
          "Le MTA.",
          "Le ciment oxyphosphate de zinc.",
          "Le biodentine."
        ],
        "correctOptionIndexes": [
          1,
          2,
          4
        ],
        "explanation": "Les matériaux de choix pour une pulpotomie (coiffage de la pulpe radiculaire) doivent être biocompatibles et favoriser la formation d'un pont de tissu dur. L'hydroxyde de calcium, le MTA et la Biodentine sont les matériaux de référence."
      },
      {
        "questionText": "La forme de la cavité d'accès au niveau de la prémolaire maxillaire :",
        "options": [
          "Est aplatie à grand axe mésio-distal.",
          "Est aplatie à grand axe vestibulo-lingual.",
          "Est étroite dans le sens mésio-distal.",
          "Est étroite dans le sens vestibulo-lingual.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Les prémolaires maxillaires ont une chambre pulpaire aplatie dans le sens mésio-distal et allongée dans le sens vestibulo-lingual. La cavité d'accès sera donc de forme ovale ou de fente, étroite mésio-distalement."
      },
      {
        "questionText": "La cavité d'accès au niveau de la première molaire maxillaire :",
        "options": [
          "Est située en mésial de la face occlusale.",
          "Est située en distal de la face occlusale.",
          "Est de forme trapézoïdale.",
          "Est de forme triangulaire.",
          "Permet de visualiser les orifices canalaires."
        ],
        "correctOptionIndexes": [
          0,
          2,
          4
        ],
        "explanation": "La cavité d'accès de la première molaire maxillaire est située dans la moitié mésiale de la face occlusale pour accéder aux canaux (MV, DV et P). Elle a une forme trapézoïdale ou rhomboïdale à base mésiale."
      },
      {
        "questionText": "L'obturation canalaire n'est réalisée que :",
        "options": [
          "Si la dent est indolore.",
          "Si la préparation canalaire est terminée.",
          "Si la percussion est négative.",
          "Si l'image radiographique de résorption a disparu.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L'obturation se fait lorsque le canal est préparé et désinfecté, et que la dent est totalement asymptomatique (indolore spontanément et à la percussion). La guérison radiologique complète prend plusieurs mois et n'est pas un prérequis à l'obturation."
      },
      {
        "questionText": "Les méplats radiants :",
        "options": [
          "Permettent le respect du trajet canalaire.",
          "Permettent une sécurité de la préparation.",
          "Se trouvent au niveau de la pointe de l'instrument.",
          "Appelés aussi Radial Lands.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Les \"Radial Lands\" sont des surfaces plates sur la partie travaillante de certains instruments endodontiques mécanisés. Ils permettent de centrer l'instrument dans le canal et de réduire le risque de vissage ou de fracture, assurant ainsi un meilleur respect du trajet canalaire."
      },
      {
        "questionText": "Les biocéramiques :",
        "options": [
          "Se présentent sous forme de cône.",
          "Sont des matériaux hydrophobes.",
          "Sont des matériaux hydrophiles.",
          "Permettent l'obturation des canaux latéraux.",
          "Forment une liaison mécanique avec les parois dentinaires."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Les ciments biocéramiques (type MTA, Biodentine) sont hydrophiles (ils font leur prise en milieu humide). Grâce à leur fluidité et leur expansion de prise, ils ont une excellente capacité à sceller les canaux latéraux."
      },
      {
        "questionText": "L'hypochlorite de sodium (ClONa) a une action :",
        "options": [
          "Effervescente.",
          "Antiseptique.",
          "Désodorisante.",
          "Solvante sur la trame minérale.",
          "Solvante sur la trame organique."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "NaOCl est un puissant antiseptique qui dissout les tissus organiques (action protéolytique). La réaction avec les tissus produit un dégagement gazeux (effervescence) et aide à neutraliser les mauvaises odeurs. Il n'agit pas sur la trame minérale (boue dentinaire)."
      },
      {
        "questionText": "Le cathétérisme :",
        "options": [
          "Est une étape coronaire.",
          "Est exclusivement manuel.",
          "Utilise un racleur n°10.",
          "Est l'exploration active du canal radiculaire.",
          "Permet de déterminer la limite apicale de préparation."
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "Le cathétérisme (ou exploration initiale) est une étape essentielle qui permet d'évaluer la perméabilité du canal et de déterminer la longueur de travail (limite apicale de la préparation) à l'aide d'un localisateur d'apex."
      },
      {
        "questionText": "La longueur de travail :",
        "options": [
          "Est toujours la distance entre le bord libre et la jonction cémento-dentinaire.",
          "Est la distance entre le bord livre et l'apex radiologique selon l'approche standardisée.",
          "Est la distance entre les entrés canalaires et la constriction apicale.",
          "Peut être mesurée radiographiquement.",
          "Peut être mesurée tactilement."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La longueur de travail est la distance entre un repère coronaire et la constriction apicale. Elle est déterminée le plus souvent électroniquement (localisateur d'apex) et peut être confirmée par une radiographie (lime en place)."
      },
      {
        "questionText": "Les instruments mécanisés en NiTi :",
        "options": [
          "Ont une conicité faible et variable.",
          "Ont une capacité de coupe inférieure à celle des instruments en acier inoxydable.",
          "Sont flexibles.",
          "Ont une mémoire de forme.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Les deux propriétés révolutionnaires du Nickel-Titane sont sa super-élasticité (flexibilité) et sa mémoire de forme, qui permettent de négocier les courbures canalaires avec moins de risques."
      },
      {
        "questionText": "La cavité d'accès endodontique doit obéir aux critères suivants :",
        "options": [
          "Posséder quatre parois.",
          "Posséder trois parois au niveau des prémolaires.",
          "S'évaser en direction occlusale.",
          "S'évaser en direction apicale.",
          "Présenter des parois latérales en continuité avec les parois coronaires."
        ],
        "correctOptionIndexes": [
          0,
          2,
          4
        ],
        "explanation": "La cavité d'accès idéale doit éliminer complètement le plafond de la chambre pulpaire, avoir des parois de dépouille (évasées vers l'occlusal) en continuité avec les parois canalaires pour permettre un accès rectiligne des instruments."
      }
    ]
  }
];

module.exports = ocQuizzes;