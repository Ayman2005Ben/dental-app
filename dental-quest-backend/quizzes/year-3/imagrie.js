const imagrieQuizzes = [
  {
    "title": "Contrôle qualité en radiologie _ biologie",
    "subject": "imagrie",
    "questions": [
      {
        "questionText": "N°10 (2025 1°EMD DENTAIRE - Q199\nCritères de qualités mécaniques d'un générateur dentaire:",
        "options": [
          "Avoir une facilité de déplacement et de positionnement.",
          "Avoir une petite taille.",
          "Avoir un bras qui permet d'obtenir une parfaite stabilisation.",
          "Etre léger pour que le praticien puisse maintenir le générateur durant la prise du cliché."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les critères de qualité d’un générateur sont :\n\tPetite taille.\n\tFacilité de déplacement et de positionnement.\n\tStabilité et bon équilibrage pour rester en place.\n\tBras permettant une parfaite stabilisation du tube radiogène.\n\tInterdiction pour le praticien ou le patient de maintenir le générateur pendant la prise du cliché.\n\nD : ni le praticien, ni le patient ne doivent maintenir le générateur durant la prise du cliché"
      },
      {
        "questionText": "N°11 (2025 1°EMD DENTAIRE - Q206\nCritères de qualités techniques d'un générateur dentaire :",
        "options": [
          "Avoir une haute tension qui généralement varie entre 60 à 70 KV.",
          "L'intensité du courant doit être la plus faible possible afin de réduire l'exposition.",
          "Utiliser une filtration de 1.5",
          "Une collimation par une couche de plomb circulaire ou rectangulaire est recommandée."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "B : on privilégie une intensité plus élevée pour réduire le temps d’exposition et donc la dose au patient."
      },
      {
        "questionText": "N°20 (2025 1°EMD DENTAIRE - Q398\nDosimétrie en radiologie dentaire :",
        "options": [
          "C'est l'ensemble des moyens de prévention visant à réduire les effets nocifs des radiations produits sur les personnes.",
          "Le dosimètre témoin toujours placé en dehors du cabinet.",
          "Le dosimètre d'ambiance placé dans la zone surveillée ou contrôlée.",
          "L'exposition professionnelle est limitée à la Dose Maximale Admissible."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : La dosimétrie a pour but de mesurer la quantité d'énergie déposée dans un matériau ou un tissu vivant lors d'une exposition à des RX.\n\nOn doit trouver au cabinet dentaire trois dosimètres :\n1-le dosimètre témoin toujours placé en dehors du cabinet (hors zone à accès réglementé),\n2- le dosimètre personnel (identifié au nom du praticien bénéficiant de cette surveillance dosimétrique),\n3- le dosimètre d'ambiance placé dans la zone surveillée ou contrôlée."
      },
      {
        "questionText": "N°20 (2024 1°EMD - Q672\nprotection de l'opérateur des rayonnements est possible si le praticien",
        "options": [
          "Evite les clichés inutiles",
          "S'éloigne le plus possible du patient",
          "Maintient le film dans la bouche du patient",
          "Utilise des angulateurs ou des portes-films"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2023 1°EMD - Q863\nParmi les critères de qualité d'un générateur dentaire:",
        "options": [
          "L'utilisation d'un générateur de haute fréquence est recommandée",
          "Plus la tension est importante (10mA), moins le nombre d'électrons produits est grand",
          "Une collimation de 1,5 mm d'aluminium est recommandée pour les générateurs de 50 à 70 kV.",
          "Le cône d'espacement doit être long afin d'augmenter le volume irradié."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2023 1°EMD - Q878\nMaintenance et contrôles de qualité du matériel en radiologie dentaire:",
        "options": [
          "Le contrôle de qualité est dit interne, s'il est réalisé par l'exploitant ou sous sa responsabilité par un prestataire.",
          "Le contrôle de qualité est dit externe, S'il est réalisé par un organisme indépendant de l'exploitant",
          "Le contrôle de qualité externe comprend des contrôles trimestriels puis annuels",
          "Le contrôle de qualité est obligatoire à la réception des équipements, avant leur première utilisation."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "C : c’est pour le Le contrôle de qualité est dit interne.Les contrôles techniques de radioprotection sont à mettre en œuvre à la réception des équipements, avant leur première utilisation, puis périodiquement."
      },
      {
        "questionText": "N°14 (2023 1°EMD - Q885\nLe rayonnement X a des effets biologiques::",
        "options": [
          "Il a la propriété d'ioniser la matière.",
          "Il peut provoquer une exposition interne lorsqu'il employé en médecine dentaires",
          "L'exposition provoquée par rayonnement direct (provenant du tube radiogène concerne toute personne présente dans la salle de soins.",
          "La dose efficace est la dose équivalente reçue par tout l'organisme calculée à partir de l'irradiation partielle d'un tissu"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2023 1°EMD - Q965\nLa qualité de l'image radiographique est affectée par:",
        "options": [
          "Le temps d'exposition très court.",
          "Le temps du traitement du film radiographique.",
          "La tension des rayons émis et l'intensité faible du courant électrique.",
          "La distance focale (foyer-objet)."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Il faut veiller à choisir des temps d’exposition les plus bas possibles tout en garantissant une qualité d’image suffisante au diagnostic"
      },
      {
        "questionText": "N°64 (2022 Résidanat - Q1315\nLa radioprotection 1- Est suffisante dès lors que les murs de la salle de radio sont plombés. 2- Exige dans ses normes que les murs de la salle de radio soient plombés. 3- Exige un ensemble de moyens et de comportements à prendre en compte. 4- Ne concerne que les techniques extraorales. 5- Ne concerne jamais les techniques intraorales.",
        "options": [
          "(1,4)",
          "(2,5)",
          "(2,3)",
          "(1,4,5)",
          "(1,5)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "4/5 : lle s’applique àtoutes les techniques, y compris intra-orales."
      }
    ]
  },
  {
    "title": "explorations radiologiques",
    "subject": "imagrie",
    "questions": [
      {
        "questionText": "N°12 (2025 2°EMD DENTAIRE - Q229\nDans le cône beam le plan de coupe axiale",
        "options": [
          "Est un plan selon l'axe des dents maxillaires,",
          "Est un plan selon l'axe des dents mandibulaires.",
          "Est un plan dans le sens horizontal,",
          "Est un plan parallèle au plan d'occlusion maxillaire et mandibulaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Incidence axiale :Au maxillaire : Le plan de référence est parallèle au plan d’occlusion ou au palais osseux, qui correspond à l’étude des sinus, du maxillaire, de l’ethmoide, du frontale et du sphénoïde.A la mandibule : Le plan de coupe est parallèle au bord basilaire"
      },
      {
        "questionText": "N°13 (2025 2°EMD DENTAIRE - Q265\nL'Orthopantomogramme:",
        "options": [
          "Est une incidence de première intention.",
          "Présente des images avec artéfacts difficilement interprétables.",
          "Présente quelques artefacts.",
          "Permet l'étude des sinus maxillaires."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : il est important de reconnaitre les défauts radiologiques appelés artefacts, et qui rendent parfois les images ininterprétables, il peut s’agir d’artefact de mouvement lors de la réalisation de la coupe, et certaines images trompeuses comme les boucles d’oreilles ou les percings nasaux ou labiaux.D : permet l’étude de :-\tAnomalies dentaires (forme et nombre)-\tDents incluses et complications-\tPermet de déterminer l’âge dentaire-\tDénombrement, identification des dents (agénésie, surnuméraires)-\tPathologie dentaire (caries et complications)-\tAppréciation topographie verticale (retard d’évolution, inclusion)-\tMorphologie coronaire et radiculaire-\tTraumatismes dentaires et lésions osseuses associées-\tMaladies parodontales-\tImages radio-claires des maxillaires-\tImages radio-denses des maxillaires"
      },
      {
        "questionText": "N°14 (2025 2°EMD DENTAIRE - Q273\nParmi les incidences extra orales que vous connaissez quelles sont celles qui explorent les ATM",
        "options": [
          "Radiographie face basse bouche ouverte.",
          "Incidence face basse bouche fermée.",
          "TDM articulaire.",
          "Incidence schuller."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A :  Incidence face basse bouche ouverte« Ouverture buccale pour dégager les condyles des mastoïdes.Intérêt : Vue globale et de bonne qualité de la mandibule – Condyles et cols condyliens… »D : Incidence de Schuller« Point de centrage au milieu de l’interligne de l’ATM…Intérêt : Anatomie de l’ATM – Fracture condylienne ou sous-condylienne – Dysfonctionnement de l’ATM – Étude de l’interligne articulaire des ATM. »"
      },
      {
        "questionText": "N°2 (2024 2°EMD - Q425\nLes clichés interproximaux (bite-wing) permettent d'obtenir une image précise sur :",
        "options": [
          "Le rapport d'une obturation avec la pulpes",
          "L'état des septa-interdentaires.",
          "Le stade d'édification radiculaire",
          "La lamina dura et l'espace desmodental"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Dépistage précoce des caries proximales ;Détecter les reprises de caries sous amalgame ;Rapport d’une obturation avec la pulpe ;Apprécier l’adaptation marginale des reconstitutions coronaires ;Apprécier l’état des septa-interdentaires."
      },
      {
        "questionText": "N°3 (2024 2°EMD - Q437\nLe ConeBeam est préconisé dans les cas suivants",
        "options": [
          "Dent de sagesse inferieure semblant en rapport avec le canal mandibulaire",
          "Exploration des sinus de la face",
          "Pathologies osseuses du maxillaire après injection de produit de contraste",
          "Exploration des glandes salivaires"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le Cone Beam est préconisé dans les cas suivantsExploration pré-implantairesExploration des sinus de la face et de la base du cranePathologie de l’ATM (articulation temporo-mandibulaire)ODF et chirurgie maxillo-facialeDents de sagesse et rapport avec le canalPathologies tumoralesDents incluseD : par L’échographie"
      },
      {
        "questionText": "N°12 (2023 2°EMD - Q859\nL'intérêt de l'incidence de SCHULLER réside dans l'étude de :",
        "options": [
          "Des bases squelettiques cranio-faciales.",
          "L'anatomie dentomaxillaire.",
          "L'anatomie de l'ATM.",
          "L'architecture maxillomandibulaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2023 2°EMD - Q870\nL'ouverture buccale dans l'incidence face basse bouche ouverte nous permet de :",
        "options": [
          "Dégager les parties antérieures et postérieures de la mandibule",
          "Dégager les DDS inferieures et supérieures.",
          "Bien visualiser la région de l'apophyse coronoïde.",
          "Dégager les condyles des mastoides."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2021 2°EMD - Q1487\nLe cliché de première intention pour l’exploration des sinus est :",
        "options": [
          "Blondeau",
          "Le panoramique dentaire",
          "Le cône beam",
          "La TDM"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Incidence de Blondeau (nez-menton-plaque): C’est le cliché ORL pour l’exploration des cavités pneumatiques de la face (sinus maxillaires, frontaux et cellules éthmoïdales) et en médecine dentaire et maxillo-faciale,complète le panoramique dans les indications concernant les sinus maxillaires, àtype de sinusite odontogène."
      },
      {
        "questionText": "N°11 (2021 2°EMD - Q1497\nPour évaluer le rapport vestibulo lingual des dents de sagesse mandibulaire avec le canal alvéolaire inférieur :",
        "options": [
          "Une radiographie panoramique suffit",
          "Un maxillaire défilé suffi",
          "Le mordu occlusal est indispensable",
          "Une face basse en bouche ouverts est contribuent"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "l’incidence face basse en bouche ouverte fournissant une vue frontale des parties de la mandibule non visibles de profil sur le panoramiqueElle s’avère d’une importance capitale dans la mise en évidence des condylesmandibulaires, coronés, branches montantes, branche horizontale. Surtout les régions postérieures, la face basse bouche ouverte permet une approche topographique dans le plan frontal des rapports dents de sagesse-canal alvéolaire inférieur."
      },
      {
        "questionText": "N°12 (2021 2°EMD - Q1514\nPour un bilan pré-implantaire l’incidence de choix est",
        "options": [
          "Un IRM",
          "Une radiographie panoramique",
          "TDM",
          "Une cone beam"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le Cone beam permet de poser l'indication en implantologie s'il subsiste le moindre doute ou de confirmer l'impossibilité ou la dangerosité de pose d'implant"
      },
      {
        "questionText": "N°5 (2020 2°EMD - Q1748\nle cliché de première intention en odontostomatologie",
        "options": [
          "la RVG",
          "la panoramique dentaire",
          "le cone beam",
          "la TDM"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2019 2°EMD - Q2130\nQuelles sont les investigations radiologiques qui permettent l’étude des ATM :",
        "options": [
          "Incidence de Hirtz",
          "IRM",
          "Incidence de Schuller",
          "Orthopantomogramme"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°32 (2019 Résidanat - Q2270\nLe cône beam présente les avantages suivants : 1- Une meilleure acquisition sur les petites structures osseuses. 2- Une meilleure acquisition en 3D. 3- Une exposition aux rayons X inférieure à celle du scanner. 4- Une présentation des parties molles avec le dégagement des superpositions gênantes avec un coût moins élevé. 5- Une comparaison des deux côtés.",
        "options": [
          "(1-2-3-5)",
          "(1-2-3-4-5)",
          "(2-5)",
          "(2-3)",
          "(3-5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "4: FauxLeCBCT n'est pas performant pour l’analyse des parties molles(muscles, ganglions, glandes, etc.) — contrairement au scanner ou à l’IRM.Il estmoins coûteux, maisne permet pas un bon dégagement des structures mollescar le contraste tissulaire est faible.Indications: Le cone beam est préconisé dans les cas suivantso Exploration pré-implantaireso Exploration des sinus de la face et de la base du craneo Pathologie de l’ATM (articulation temporo-mandibulaire)o ODF et chirurgie maxillo-facialeo Dents de sagesse et rapport avec le canalo Pathologies tumoraleso Dents incluses"
      },
      {
        "questionText": "N°11 (2018 2°EMD - Q2482\nLa siolographie est une technique d’imagerie utilisée pour :",
        "options": [
          "Etudier les différentes glandes salivaires accessoires",
          "Opacifier et étudier les glandes salivaires ( glandes parotidiennes ou sous maxillaires )",
          "Bilan d’extension et de surveillance des pathologies glandulaires",
          "Bilan ganglionnaire cervico-facial"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Elle consiste à injecter un agent de contraste dans les canaux salivaires afin de visualiser leur structure, leur fonctionnement et de détecter d'éventuelles anomalies ou obstructions"
      },
      {
        "questionText": "N°6 (2017 2°EMD - Q2689\nQuelles sont les investigations radiologiques qui permettent l’étude des ATM :",
        "options": [
          "TDM",
          "IRM",
          "Incidence de schuller",
          "Orthopantomogramme"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2017 2°EMD - Q2756\nQuelles sont les radiographies qu’on peut réaliser dans le cas d’une canine incluse :",
        "options": [
          "Cliché retro-alvéolaire",
          "Tomodensitométrie",
          "Sialographie",
          "Mordu occlusal"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Mordu occlusal"
      },
      {
        "questionText": "N°30 (2015 Résidanat - Q3039\nLa radiographie panoramique contribue principalement à :",
        "options": [
          "Evaluer le status dentaire",
          "Confirmer une fracture du maxillaire (supérieur)",
          "Déterminer la dimension de l'implant",
          "L'évaluation des tissus mous (glandes salivaires)",
          "Visualiser la colonne vertébrale cervicale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Radiographie panoramique :Permet d’évaluer le status dentaire : nombre de dents, position, inclusion, anomalies, caries, rapports avec l’os alvéolaire.Lecture critique de l’OPT :Anomalies dentaires (forme et nombre)Dents incluses et complicationsPermet de déterminer l’âge dentaireDénombrement, identification des dents (agénésie, surnuméraires)Pathologie dentaire (caries et complications)Appréciation topographie verticale (retard d’évolution, inclusion)Morphologie coronaire et radiculaireTraumatismes dentaires et lésions osseuses associéesMaladies parodontalesImages radio-claires des maxillairesImages radio-denses des maxillaires"
      }
    ]
  },
  {
    "title": "Facteurs influençant la qualité de l’image radiolo",
    "subject": "imagrie",
    "questions": [
      {
        "questionText": "N°6 (2025 1°EMD DENTAIRE - Q117\nL'imprécision géométrique :",
        "options": [
          "Est causée par le croisement des rayons à la périphérie de l'objet.",
          "La pénombre est causée par la dimension du foyer.",
          "Peut provenir de différentes sources telles que les radiations secondaires et diffuses.",
          "Est généralement augmenté par l'emploi de capteurs sensibles."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : Ce genre d'imprécision est causé par le croisement des rayons à la périphérie de l'objet ce qui nous donne une image aux contours flous. Ce flou périphérique s'appelle la pénombre\n\nB : …Cette pénombre est causée par la dimension du foyer\n\nC : Le brouillard radiologique peut provenir de différentes sources telles que les radiations secondaires et diffuses\n\nD : Le brouillard radiologique est généralement augmentés par l'emploi de capteurs sensibles"
      },
      {
        "questionText": "N°7 (2025 1°EMD DENTAIRE - Q142\nLa densité peut être affectée par :",
        "options": [
          "La filtration, le genre d'objet.",
          "La distance objet-radiogramme.",
          "La distance foyer-objet.",
          "La distance objet-radiogramme."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a densité peut aussi être affectée par d'autres facteurs comme la sensibilité du capteur, la filtration, le genre d'objet, la distance foyer-objet et la distance objet-radiogramme"
      },
      {
        "questionText": "N°8 (2025 1°EMD DENTAIRE - Q160\nLe brouillard radiologique:",
        "options": [
          "Est produit par une réaction générale du capteur à un facteur extérieur.",
          "Est produit par la radiation secondaire qui fait apparaître une image voilée sur la radiographie.",
          "Son augmentation entraîne nécessairement une augmentation de la densité.",
          "Son augmentation entraine nécessairement une diminution de la densité."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "« Le brouillard radiologique est produit par une réaction générale du capteur à un facteur extérieur tel que la radiation secondaire qui fait apparaître une image voilée sur la radiographie. »\n\n« Une augmentation du brouillard radiologique entraîne nécessairement une augmentation de la densité. »"
      },
      {
        "questionText": "N°9 (2025 1°EMD DENTAIRE - Q179\nUne augmentation de la filtration du faisceau des rayons X :",
        "options": [
          "Aura le même effet que l'augmentation du kilovoltage",
          "Aura le même effet que la diminution du kilovoltage.",
          "Entraine une diminution du contraste.",
          "Entraine une augmentation du contraste."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "« Filtration : L'augmentation de la filtration du faisceau des rayons X a le même effet que l'augmentation du kilovoltage. De plus, les filtres constituent des facteurs de radiations secondaires. Donc si la filtration augmente le contraste diminue. »"
      },
      {
        "questionText": "N°3 (2024 1°EMD - Q444\nLes caractéristiques des images radiologiques",
        "options": [
          "Les zones non exposées matérialisent les structures ayant arrêté sélectivement le faisceau de rayons",
          "Les zones non exposées vont apparaître en blanc.",
          "Les zones exposées, qui n'ont rencontré aucun obstacle, apparaissent en blanc",
          "Les nombreuses variations de gris témoignent de la densité atomique de chaque structure."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les zones exposées, où les rayons X ont traversé sans être absorbés, noircissent le film radiographique et apparaissent en noir ou en différentes nuances de gris sur l'image radiologique."
      },
      {
        "questionText": "N°5 (2024 1°EMD - Q474\nL'agrandissement de l'image radiographique désigne : FACTEURS INFLUENÇANT LA QUALITÉ DE L’IMAGE RADIOGRAPHIQUE",
        "options": [
          "L'allongement (élongation) de l'image.",
          "Le raccourcissement de l'image.",
          "La distorsion de l'image.",
          "Une image modifiée dans ses dimensions et n'est pas dans sa forme géométrique."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "-L’allongement permet que la structure anatomique apparaît plus grande sur l'image qu'en réalité-Le raccourcissement permet que la structure anatomique apparaît plus grande sur l'image qu'en réalité"
      },
      {
        "questionText": "N°6 (2024 1°EMD - Q478\nLa ou les principales causes du flou en radiologie sont",
        "options": [
          "Un mouvement du patient.",
          "Le mouvement du tube radiogène lors de la prise de la radiographie.",
          "La grande distance objet-film.",
          "La sous exposition de la structure à radiographier."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Tout mouvement du patient, du tube radiogène ou du film lors de la prise du cliché entraîne un flou de l’image"
      },
      {
        "questionText": "N°3 (2023 1°EMD - Q721\nL'agrandissement",
        "options": [
          "Augmente si la distance objet-film augmente et la distance source-objet diminue",
          "Augmente si la distance objet-film diminue et la distancé source-objet augmente",
          "A par conséquence une augmentation du flou géométrique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2023 1°EMD - Q979\nLes facteurs liés à la qualité de l'image radiographique numérique sont:",
        "options": [
          "La luminosité.",
          "La résolution du contraste.",
          "La taille du capteur.",
          "La taille de l'écran d'affichag"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-La luminosité-La résolution du contraste-La résolution spatiale -La distorsion"
      },
      {
        "questionText": "N°20 (2023 1°EMD - Q993\nUne image radiographique floue peut être obtenue dans le(les) cas suivant :",
        "options": [
          "Le mouvement du patient.",
          "Le mouvement du tube radiogène ou du film lors de la prise de la radiographie.",
          "La température du révélateur trop élevée.",
          "La surexposition de la structure à radiographier"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Tout mouvement du patient, du tube radiogène ou du film lors de la prise du cliché entraîneun flou de l’image."
      }
    ]
  },
  {
    "title": "Le film radiologique",
    "subject": "imagrie",
    "questions": [
      {
        "questionText": "N°16 (2025 1°EMD DENTAIRE - Q323\nLe film argentique est :",
        "options": [
          "De haute définition, sans écran, en plastique",
          "Contenu dans une pochette étanche.",
          "Contient une émulsion de grains de bromure de cuivre (Br-Cu).",
          "Souple, ce qui lui permet de s'adapter aux structures anatomiques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Le film argentique est de très haute définition, sans écran, en plastique.\n\nB : Il est contenu dans une pochette étanche à la lumière et à l’environnement.\n\nC : L’émulsion contient des grains de bromure d’argent (AgBr) et non de bromure de cuivre (Br-Cu).\n\nD : Le support en polyester est souple, ce qui permet au film de s’adapter aux structures anatomiques."
      },
      {
        "questionText": "N°17 (2025 1°EMD DENTAIRE - Q343\nLes caractéristiques techniques du film argentique:",
        "options": [
          "Plus les grains de bromure d'argent sont fins, plus la définition de l'image produite est bonne.",
          "Plus les grains de bromure de cuivre sont gros, moins la définition de l'image produite est bonne.",
          "Plus les grains de bromure d'argent sont gros moins le film est sensible.",
          "Les films ISO E et F sont les plus utilisés de nos jours."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Il n’y a pas de bromure de cuivre, seulement du bromure d’argent.\n\nC : C’est l’inverse : plus les grains sont gros, plus le film est sensible (et donc moins bonne est la définition)."
      },
      {
        "questionText": "N°18 (2025 1°EMD DENTAIRE - Q358\nLors de la prise d'une radiographie avec le film argentique :",
        "options": [
          "La face à ne pas exposer aux rayons X est généralement bicolore.",
          "La face à exposer aux rayons X est généralement bicolore.",
          "La face à ne pas exposer aux rayons X ne présente pas de bossage.",
          "La face à exposer aux rayons X ne présente pas de bossage."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : C’est la face à ne pas exposer qui est bicolore, pas celle à exposer.\n\nD : La face à exposer présente un bossage dans un angle"
      },
      {
        "questionText": "N°19 (2025 1°EMD DENTAIRE - Q380\nEffet biologique du rayonnement X :",
        "options": [
          "Ces rayonnements ont la propriété d'ioniser la matière.",
          "L'emploi des rayons X dentaires peut provoquer une exposition interne.",
          "la dose efficace est la dose équivalente reçue par tout l'organisme calculée à partir de l'irradiation partielle d'un tissu",
          "La radiologie dentaire est une modalité faiblement irradiante."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : Les rayons X sont des radiations ionisantes, ils ont la capacité d’ioniser la matière.\n\nB : L’exposition est externe en radiologie dentaire, pas interne (il n’y a pas de source radioactive introduite dans l’organisme).\n\nD : La radiologie dentaire est considérée comme faiblement irradiante par rapport à d’autres modalités d’imagerie médicale."
      },
      {
        "questionText": "N°7 (2024 1°EMD - Q499\nDans l'imagerie numérique",
        "options": [
          "Les capteurs sont plus sensibles que les films conventionnels.",
          "La résolution d'image est généralement inferieure à celle de l'imagerie conventionnelle.",
          "L'obtention d'image nécessite une dose d'irradiation plus importante.",
          "L'obtention d'image nécessite une dose d'irradiation moins importante."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A: La sensibilité du film :Les capteurs numériques sont plus sensibles que les films conventionnels, et qu’il est possible d’obtenir une image avec 25% de la dose de rayons X utilisée pour un filmArgentiqueB: La résolution de l’image :Les capteurs ERLM : jusqu’à 12 pl/mm,Les capteurs CCD/CMOS entre 7 et 14 pl/mm pour les anciens modèles.D:Dose d’irradiation :Le capteur numérique le plus sensible de la série entraîne une diminution de la dose de 87,5% par rapport au film argentique le plus sensible (ISO F)."
      },
      {
        "questionText": "N°12 (2024 1°EMD - Q559\nDe quoi est formé le film argentique en radiologie dentaire",
        "options": [
          "De cristaux de plomb",
          "De cristaux de bromure de cuivre",
          "De cristaux d'argent",
          "De cristaux de bromure d'argent"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le film argentique se compose d’un support en plastique sur lequel est déposée l’émulsion de grains de bromure d’argent (AgBr) sensibles aux rayons X et à la lumière du jour, qui sont noyés dans une matrice."
      },
      {
        "questionText": "N°13 (2024 1°EMD - Q575\nLes films intra-oraux sont-ils présentés dans une enveloppe opaque et étanche pour",
        "options": [
          "Eviter toute exposition aux rayons",
          "Eviter toute exposition à la lumière et à l'humidité",
          "Améliorer la qualité de l'image radiologique",
          "Réduire le cout de production"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Il s’agit d’une pochette thermo-soudée étanche à la lumière et à l’eau, évitant ainsi la contamination du film par la salive et/ou sang du patient."
      },
      {
        "questionText": "N°14 (2024 1°EMD - Q594\nLes capteurs numériques",
        "options": [
          "Permettent de réduire le temps d'exposition.",
          "Permettent d'augmenter la dose d'irradiation d'environ 40 à 50% par rapport aux films argentiques",
          "Leurs utilisations est source d'une augmentation du nombre de clichés pris.",
          "Leurs temps d'exposition est égale à 0,32 secondes pour une prémolaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2024 1°EMD - Q600\nLe capteur qui dispose de la technologie ACE (Automatic Control Exposure",
        "options": [
          "Permet un meilleur centrage du faisceau primaire",
          "Calcule en temps réel l'énergie nécessaire pour obtenir une image de qualité",
          "Envoie le capteur instantanément, une fois la dose suffisante obtenue,",
          "Stoppe l'émission des rayons X suite à une information au générateur",
          "Permet de réduire le nombre de clichés à reprendre"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2024 1°EMD - Q632\nQuel est le principal avantage de la radiographie numérique par rapport à la radiographie conventionnelle",
        "options": [
          "Permet de réduire l'exposition aux rayons X",
          "Permet d'avoir une image nette et d'établir ainsi un diagnostic plus fiable.",
          "Nécessite une formation pour être utilisé correctement.",
          "Permet l'archivage des données."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2024 1°EMD - Q645\nparmi les caractéristiques techniques du film argentique",
        "options": [
          "Plus les grains de bromure d'argent sont fins plus la définition de l'image produite est bonne.",
          "Plus les grains de bromure d'argent sont gros plus la définition de l'image produite est bonne.",
          "Les films ISO E et F sont les plus utilisés de nos jours",
          "Le film argentique E permet une réduction de la dose d'irradiation."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2024 1°EMD - Q658\nDans l'imagerie numérique ;",
        "options": [
          "Les capteurs sont plus sensibles que les films conventionnels",
          "L'obtention de l'image nécessite une dose importante d'irradiation.",
          "La résolution de l'image est généralement inferieur par rapport l'imagerie conventionnelle",
          "Le capteur CCD utilise la technologie des microprocesseurs et des mémoires"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2023 1°EMD - Q790\nLe film argentique:",
        "options": [
          "Est de haute définition, sans écran, en plastique",
          "Doit etre contenu dans une pochette étanche.",
          "Sur le support en plastique il y a l'émulsion de grains de bromure de cuivre (Br-Cu).",
          "Sera souple, ce qui lui permet de s'adapter facilement aux structures anatomiques."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Le film argentique se compose d’un support en plastique sur lequel est déposée l’émulsion de grains de bromure d’argent (AgBr)"
      },
      {
        "questionText": "N°9 (2023 1°EMD - Q806\nLes caractéristiques techniques du film argentique indiquent que :",
        "options": [
          "Plus les grains de bromure d'argent sont fins, plus la définition de l'image produite est bonne.",
          "plus les grains de bromure d'argent sont gros, moins la définition de l'image produite est bonne.",
          "plus les grains de bromure d'argent sont gros moins le film est sensible",
          "Les films ISO E et F sont les plus utilisés de nos jours"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2023 1°EMD - Q829\nLe capteur numérique:",
        "options": [
          "Subit un procédé physique et non chimique pour l'obtention du cliché,",
          "Pour sa lecture nécessite obligatoirement l'informatisation du cabinet dentaire",
          "Possède un Dispositif à Transfert de Charge obligatoirement.",
          "Donne toujours une image lisible instantanément."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A :(traitement informatique)B : dentaire (ordinateur, imprimante, systèmes de sauvegarde) ainsi que d’un logiciel adapté au système de radiologie numérique utilisé."
      },
      {
        "questionText": "N°11 (2023 1°EMD - Q848\nL'imagerie numérique",
        "options": [
          "Possède des capteurs plus sensibles que les films conventionnels",
          "Nécessite une dose d'irradiation importante.",
          "La résolution d'image est généralement inférieure par rapport à l'imagerie conventionnelle.",
          "L'imagerie indirecte nécessite un traitement supplémentaire du capteur, une fois soumis aux rayons X"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Dose d’irradiation réduite,-Résolution spatiale : inférieure aux films conventionnels."
      },
      {
        "questionText": "N°6 (2022 1°EMD - Q1086\nLe film dentaire contient une plaque de plomb:",
        "options": [
          "Pour éviter le flou  radial",
          "Pour protéger l’image",
          "Pour éviter le flou du aux radiations secondaires",
          "Pour protéger les autres dents",
          "Pour protéger le patient"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La plaque de plomb est utilisée pour bloquer ou atténuer les radiations secondaires et les rayons X dispersés, aidant ainsi à produire une image dentaire plus nette en réduisant le flou causé par ces radiations secondaires"
      },
      {
        "questionText": "N°7 (2022 1°EMD - Q1114\nLa dimension des films intra buccaux et de:",
        "options": [
          "31x41",
          "23x36",
          "27x54",
          "28x55",
          "75x90"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les films rétro alvéolaire  31x41 / 27x54 / 22 x 35*41, 2235, 2754"
      },
      {
        "questionText": "N°6 (2021 1°EMD - Q1414\nLe film dentaire contient une plaque de plomb:",
        "options": [
          "Pour éviter le flou  radial",
          "Pour éviter le flou du aux radiations secondaires",
          "Pour protéger le patient",
          "Pour protéger les autres dents"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2021 1°EMD - Q1592\nLe film 57 x 76 est un film :",
        "options": [
          "Retro alvéolaire",
          "Retro coronaire",
          "Bite Wing",
          "Occlusal"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Rayon X _ image radiologique",
    "subject": "imagrie",
    "questions": [
      {
        "questionText": "N°12 (2025 1°EMD DENTAIRE - Q231\nLe contraste de l'image radiologique :",
        "options": [
          "Déterminé par la netteté des contours de l'image.",
          "C'est la différence de noircissement entre deux régions voisines sur l'image.",
          "C'est la possibilité d'un système radiologique de distinguer deux objets l'un de l'autre.",
          "C'est l'absence de netteté de l'image."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Définition : Déterminée par la netteté des contours de l'image.\n\nC : Résolution : C'est la possibilité d'un système radiologique de distinguer deux objets l'un de l'autre.\n\nD : Le flou est l’absence de netteté de l’image."
      },
      {
        "questionText": "N°13 (2025 1°EMD DENTAIRE - Q264\nComment diminuer le flou géométrique de l'image radiologique:",
        "options": [
          "Choix d'un grand foyer.",
          "Placer la structure intéressante le plus près possible du film.",
          "L'augmentation de la distance foyer-sujet nécessite l'emploi de tube puissant.",
          "Supprimer ou réduire les causes de mouvements."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : il faut un petit foyer.\n\nD : ça concerne le flou cinétique, pas le flou géométrique.\n\n« Diminution du flou géométrique : Choix d'un petit foyer – Diminution de la distance sujet-film : il faut essayer de placer la structure intéressante le plus près possible du film – Augmentation de la distance foyer-sujet : malheureusement cela nécessite l'emploi de tube puissant et donc de gros foyer. »"
      },
      {
        "questionText": "N°14 (2025 1°EMD DENTAIRE - Q278\nL'atténuation des rayons X par la matière organique varie en fonction de :",
        "options": [
          "La distance écran / objet.",
          "L'épaisseur des objets.",
          "L'énergie des rayons x.",
          "La densité de l'organe."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A : ça joue sur le flou géométrique / agrandissement, pas sur l’atténuation."
      },
      {
        "questionText": "N°4 (2024 1°EMD - Q451\nL'interaction électrostatique avec un électron atomique est appelée",
        "options": [
          "Ionisation",
          "Excitation",
          "Freinage",
          "collision"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Chacun des photons générés par ces collisions forme une partie du spectre continu de rayons X"
      },
      {
        "questionText": "N°16 (2024 1°EMD - Q622\nL'image radiante en radiologie dentaire désigne une image",
        "options": [
          "Non interprétable.",
          "Formée sur le récepteur.",
          "Au niveau de l'objet examiné.",
          "Formée au niveau du foyer."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2023 1°EMD - Q688\nLa formation de l'image radiologique se fait par :",
        "options": [
          "Une interaction des photons avec la matière",
          "Une augmentation progressive des photons",
          "Une atténuation progressive du faisceau des rayons X",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "On appelle une “image radiante” la distribution de l'intensité du faisceau transmis, cette image radiante est invisible à l'œil et révélé par le récepteur dont le rôle est de la transformer en image lumineuse visible par l'observateur."
      },
      {
        "questionText": "N°2 (2023 1°EMD - Q705\nL'atténuation des rayons X dépend de:",
        "options": [
          "L'épaisseur de l'objet à radiographier",
          "La composition des structures",
          "La densité et numéro atomique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'atténuation des RX dépend de l'épaisseur à radiographier, mais aussi de la composition des structures à radiographier, en particulier la densité (masse volumique) et le numéro atomique des atomes constituants."
      },
      {
        "questionText": "N°5 (2023 1°EMD - Q751\nLa source usuelle des rayons X",
        "options": [
          "Il s'agit d'un tube ou règne un vide poussé et dans lequel se trouvent trois électrodes",
          "est le tube de Coolidge",
          "sa tension accélératrice variée selon les besoins de l'utilisation",
          "Il s'agit d'un tube ou règne un vide poussé et dans lequel se trouvent deux  électrodes"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La source usuelle des rayons X est le tube de Coolidge. Il s’agit d’un tube ou règne un vide poussé et dans lequel se trouvent deux électrodes : l’anode ou l’anticathode et la cathode.La tension accélératrice variée selon les besoins de l’utilisation des rayons X: 50 kV en radioscopie. 100 kV en radiographie. 200 kV en radiothérapie."
      },
      {
        "questionText": "N°6 (2023 1°EMD - Q759\nLe spectre continu de rayons X",
        "options": [
          "se traduit par l'émission d'un photon de rayon X qui rayonne à partir du site de la collision",
          "est appelé le rayonnement de freinage",
          "est appelé le spectre de raies",
          "se traduit par l'émission d'un photon de rayon X qui rayonne à partir du site de freinage."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2023 1°EMD - Q782\nEn imagerie médicale:",
        "options": [
          "L'interprétation des images est à sens unique soit technique soit clinique.",
          "Nous utilisons des sources de rayonnement exclusivement ionisantes.",
          "En soigne un patient, on ne soigne pas des images:",
          "L'image obtenue est fidèle"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2023 1°EMD - Q915\nUne anode dans un tube à rayons X:",
        "options": [
          "Est la source de production de rayons.",
          "Appelée aussi \" cible ou anticathode \".",
          "Elle est responsable de l'émission des électrons.",
          "Composée généralement de tungstène et de trace de thorium."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "correspond à la partie positive du tube. Lorsque les électrons entrent en contact avec cette dernière, leur énergie cinétique est transformée en énergie électromagnétique donc en rayonnement X."
      },
      {
        "questionText": "N°16 (2023 1°EMD - Q930\nUne gaine dans un tube à rayons X:",
        "options": [
          "Assure une protection mécanique de l'enveloppe du tube.",
          "Assure une protection du personnel du rayonnement de fuite.",
          "Permet une isolation électrique du tube et elle est reliée à la terre.",
          "Facilite le raccordement des câbles pour l'anode et la cathode."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2023 1°EMD - Q946\nL'application des rayons X en pratique médicale:",
        "options": [
          "Radiographie standard du squelette osseux.",
          "Imagerie par résonance magnétique (IRM).",
          "Tomodensitométrie.",
          "Radiothérapie."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Application en pratique médicale :- Radiographie standard du squelette osseux- Radiographie pulmonaire - Radiographie de l'abdomen sans préparation – Mammographie - Examen spécialisé - Tomodensitométrie- Radiothérapie - Angiographie"
      },
      {
        "questionText": "N°20 (2022 1°EMD - Q1270\nL'absorption de photons X :",
        "options": [
          "Aboutit à une image finale",
          "Développe le film radiographique",
          "Aboutit à une image latente",
          "Se fait sur les deux faces du film",
          "Permet de visualiser une image"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Lorsque les photons X sont absorbés par le film radiographique, ils créent une image latente qui doit ensuite être développée pour obtenir l'image finale."
      },
      {
        "questionText": "N°20 (2021 1°EMD - Q1631\nL'absorption de photons X:",
        "options": [
          "Aboutit à une image finale",
          "Développe le film radiographique",
          "Aboutit à une image latente",
          "Se fait sur les deux faces du film"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      }
    ]
  }
];

module.exports = imagrieQuizzes;
