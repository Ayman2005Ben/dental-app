// quizzes/year-5/patho-medical.js

const pathoMedicalQuizzes = [
  {
    title: "Endocardite Infectieuse",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Endocardite Infectieuse est une (cocher la réponse juste).",
        options: [
          "Septicémie",
          "Hyperthermie",
          "Maladie se greffant seulement sur cœur pathologique",
          "Maladie se greffant seulement sur cœur sain",
          "N'entraine pas de désordres immunitaire"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est une septicémie due à une bactérie ou une levure se greffant sur l'endocarde d'un cœur sain ou pathologique."
      },
      {
        questionText: "Les signes cardiaques au cours de l'endocardite Infectieuse (Coches la réponse fausse)",
        options: [
          "L'apparition ou la modification d'un souffle cardiaque",
          "L'insuffisance cardiaque surtout associée à la fièvre",
          "Rarement une attente coronarienne",
          "La myocardite",
          "Nécrose d'un doigt"
        ],
        correctOptionIndexes: [3],
        explanation: "La 'Nécrose d'un doigt' est un signe vasculaire/périphérique (embolie), pas un signe cardiaque direct comme l'insuffisance ou le souffle. La myocardite est une complication possible."
      },
      {
        questionText: "Les cardiopathies à haut risque d'endocardite Infectieuse (Cochez la réponse fausse )",
        options: [
          "Prothèse valvulaire",
          "Antécédent d'endocardite infectieuse",
          "Cardiopathies rhumatismales",
          "Cardiopathie congénitale cyanogène",
          "Communication Inter-auriculaire"
        ],
        correctOptionIndexes: [4],
        explanation: "Cardiopathies à haut risque: Antécédent d'EI, Prothèse valvulaire, Cardiopathies congénitales cyanogènes. La CIA (Communication Inter-auriculaire) non compliquée est généralement à faible risque."
      },
      {
        questionText: "En l'absence d'allergie, l'antibioprophylaxie recommandée avant un geste à haut risque d'endocardite infectieuse",
        options: [
          "Amoxicilline 1g pendant 10 jours",
          "Amoxicilline 500mg juste avant le geste",
          "Amoxicilline 2 g une heure après le geste",
          "Amoxicilline 2 à 3 g, 3 jours avant et 3 jours après le geste",
          "Amoxicilline 2 à 3 g dose unique, 30 à 60 minutes avant le geste"
        ],
        correctOptionIndexes: [4],
        explanation: "Le protocole standard est une dose unique d'Amoxicilline (2 à 3g) prise 30 à 60 minutes avant le geste à risque."
      },
      {
        questionText: "Dans l'endocardite infectieuse: (cochez la réponse juste)",
        options: [
          "La porte d'entrée est toujours retrouvée quand elle est recherchée avec soins.",
          "C'est due à une bactérie se greffant uniquement sur l'endocarde d'un cœur pathologique.",
          "Le staphylocoque, les streptocoques issus souvent lors de soins dentaires avec saignement.",
          "La porte d'entrée bucco-dentaire est de loin la plus fréquente.",
          "La porte d'entrée urinaire est très fréquente"
        ],
        correctOptionIndexes: [3],
        explanation: "La porte d'entrée bucco-dentaire est la plus fréquente, notamment pour les streptocoques. Le staphylocoque est souvent lié à la peau ou aux cathéters."
      },
      {
        questionText: "L'antibioprophylaxie en cas de cardiopathie à risque d'endocardite infectieuse : (Réponse Fausse)",
        options: [
          "Caries superficielles et préparations prothétiques supragingivales exsangues sur dents pulpées.",
          "traitement des pulpopathies et de la denture",
          "traitement de la racine dentaire",
          "Intervention sur les voies urinaires",
          "Intervention sur les voies aériennes"
        ],
        correctOptionIndexes: [0],
        explanation: "Les gestes dentaires à risque sont ceux qui manipulent la gencive ou la région péri-apicale, ou qui perforent la muqueuse. Les soins sur des caries superficielles ne sont généralement pas considérés à haut risque."
      },
      {
        questionText: "L'antibiotique de choc dans le traitement d'une pneumonie communautaire sans signe de gravité chez un sujet jeune : (RJ)",
        options: [
          "Aminoside",
          "Amoxicilline + acide clavulanique",
          "Céphalosporine 3ème génération + fluoroquinolone",
          "Céphalosporine 3ème génération",
          "Amoxicilline"
        ],
        correctOptionIndexes: [4],
        explanation: "Pour une pneumonie communautaire simple (PAC) chez un sujet jeune sans comorbidités, l'Amoxicilline est le traitement de première intention."
      },
      {
        questionText: "Quel est le principal critère MAJEUR de Duke pour l'Endocardite Infectieuse ?",
        options: [
          "Fièvre > 38°C",
          "Phénomènes vasculaires (embolies)",
          "Hémocultures positives (micro-organismes typiques)",
          "Phénomènes immunologiques (glomérulonéphrite)",
          "Souffle cardiaque nouveau"
        ],
        correctOptionIndexes: [2],
        explanation: "Les critères majeurs de Duke sont : 1) Hémocultures positives pour des germes typiques d'EI. 2) Signes d'atteinte endocardique à l'échocardiographie (végétation, abcès, désinsertion de prothèse)."
      },
      {
        questionText: "En cas d'allergie à la pénicilline, quelle antibioprophylaxie est recommandée avant un geste dentaire à risque ?",
        options: [
          "Céphalexine 2g",
          "Clindamycine 600 mg",
          "Azithromycine 500 mg",
          "Vancomycine 1g IV",
          "Aucune"
        ],
        correctOptionIndexes: [1],
        explanation: "En cas d'allergie aux pénicillines, la Clindamycine (600 mg) est l'alternative la plus couramment recommandée, prise 30 à 60 minutes avant le geste."
      },
      {
        questionText: "Qu'est-ce qu'une 'végétation' dans le contexte de l'endocardite infectieuse ?",
        options: [
          "Une nouvelle croissance de tissu valvulaire sain",
          "Une lésion cutanée spécifique",
          "Une tumeur bénigne du cœur",
          "Un amas de plaquettes, fibrine, et micro-organismes sur l'endocarde",
          "Une calcification de l'anneau mitral"
        ],
        correctOptionIndexes: [3],
        explanation: "La végétation est la lésion caractéristique de l'EI. C'est un amas septique composé de fibrine, de plaquettes et de colonies microbiennes, adhérant à une valve ou à l'endocarde."
      }
    ]
  },
  {
    title: "Maladies Systémiques",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Toutes ces propositions sont justes sauf une : (cocher la réponse Juste)",
        options: [
          "Le lupus peut atteindre plusieurs organes ou même temps (la peau/rein, articulations…)",
          "la maladie de Bechet peut mettre en jeu le pronostic visuel",
          "la sclérodermie n'atteint que la peau",
          "le syndrome de Jorgen est une maladie auto-immune entraînant une sécheresse oculaire et buccale",
          "la maladie de takayasu est une vascularite des gros troncs artères"
        ],
        correctOptionIndexes: [2],
        explanation: "La sclérodermie est une maladie systémique qui peut toucher de nombreux organes (poumons, reins, tube digestif...) et pas seulement la peau."
      },
      {
        questionText: "Le maître symptôme d'une sclérodermie est : (cochez la réponse juste)",
        options: [
          "La fièvre",
          "Des troubles digestifs",
          "Une sclérose cutanée",
          "Un vespertilio",
          "La pneumopathie interstitielle"
        ],
        correctOptionIndexes: [2],
        explanation: "La sclérodermie se caractérise par un durcissement et un épaississement anormaux de la peau (sclérose cutanée)."
      },
      {
        questionText: "Les maladies auto-immunes sont : (choisir la réponse juste)",
        options: [
          "Des infections bactériennes",
          "Des tumeurs malignes",
          "Dues à une réaction immunitaire dirigée contre des auto-antigènes",
          "Des maladies contagieuses",
          "des hémopathies malignes"
        ],
        correctOptionIndexes: [2],
        explanation: "La définition d'une maladie auto-immune est une rupture de la tolérance immunitaire, où le système immunitaire attaque les propres constituants de l'organisme (auto-antigènes)."
      },
      {
        questionText: "L'aphtose bipolaire (buccale et génitale) est fréquente au cours de : (choisir la réponse juste)",
        options: [
          "La maladie coeliaque",
          "Le lupus",
          "La maladie de Behçet",
          "La sclérodermie",
          "la tuberculose"
        ],
        correctOptionIndexes: [2],
        explanation: "L'aphtose bipolaire (buccale et génitale) est un des critères majeurs de la maladie de Behçet."
      },
      {
        questionText: "Les maladies auto-immune spécifiques d'organes sont (RJ)",
        options: [
          "Thyroïdite d'Hashimoto",
          "Anémie de Biermer",
          "Lupus érythémateux systématique",
          "Maladie d'Addison",
          "Sclérodermie systématique"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Hashimoto (thyroïde), Biermer (estomac), et Addison (surrénales) sont spécifiques d'organes. Le Lupus et la Sclérodermie sont systémiques (non spécifiques)."
      },
      {
        questionText: "Les signes évoquant un Lupus érythémateux systématique sont ()",
        options: [
          "Photosensibilité avec rash cutané discoïde",
          "Déficit moteur bilatéral et symétrique",
          "Microstomie avec déchaussement dentaire",
          "Glomérulonéphrite avec risque d'insuffisance rénale",
          "Anémie auto-immune"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Le Lupus (LES) associe souvent des signes cutanés (photosensibilité, rash), une atteinte rénale (glomérulonéphrite) et des signes hématologiques (anémie auto-immune)."
      },
      {
        questionText: "Les pathologies regroupées sous le terme de connectivite sont (RJ) :",
        options: [
          "Maladie de Behçet",
          "Syndrome de GOUGEROT SJOGREN",
          "SCLERODERMIE SYSTEMATIQUE",
          "POLYARTHRITE RHUMATOIDE",
          "Syndrome de Sharp"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Les connectivites (ou collagénoses) incluent le Sjogren, la Sclérodermie, la Polyarthrite Rhumatoïde, et le syndrome de Sharp. La maladie de Behçet est classée comme une vascularite."
      },
      {
        questionText: "Le syndrome de Gougerot Sjogren peut se manifester par (RJ) :",
        options: [
          "Syndrome sec",
          "Caries dentaires",
          "Gingivite",
          "Sclérose cutanée",
          "Hypertrophie parotidienne"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Le Sjogren cause un syndrome sec (oculaire et buccal), ce qui favorise les caries (hyposialie). L'hypertrophie des glandes salivaires (parotides) est aussi un signe classique."
      },
      {
        questionText: "Les vascularites touchant les vaisseaux de gros calibre sont (RJ)",
        options: [
          "Maladie de Horton",
          "Maladie de Behçet",
          "Maladie de Kawasaki",
          "Périarthrite noueuse",
          "Maladie de Takayasu"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Les vascularites des gros vaisseaux (aorte et ses branches) sont principalement la maladie de Horton (artérite à cellules géantes) et la maladie de Takayasu."
      },
      {
        questionText: "Les éléments faisant partie des critères de classification de la maladie de Behçet (RJ)",
        options: [
          "Sacro-iléite",
          "Aphtose buccale récidivante",
          "Atteinte oculaire : uvéite, vasculite rétinienne",
          "Phénomène de Raynaud",
          "Syndrome sec oculo-buccal"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les critères majeurs de la maladie de Behçet incluent l'aphtose buccale récidivante (obligatoire) associée à d'autres atteintes comme l'aphtose génitale, l'atteinte oculaire (uvéite), ou des lésions cutanées."
      }
    ]
  },
  {
    title: "Pathologie Médicale (Ophtalmologie)",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Les signes cliniques des conjonctivites sont (RJ)",
        options: [
          "Baisse de l'acuité visuelle",
          "Œil rouge douloureux",
          "Sensation de corps étranger",
          "Sécrétion conjonctivale",
          "Vision floue"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "La conjonctivite classique donne un œil rouge, des sécrétions (purulentes si bactérienne, claires si virale), et une sensation de 'grains de sable' (corps étranger). La vision floue est possible mais une baisse d'acuité visuelle doit faire suspecter une atteinte plus grave (kératite, uvéite)."
      },
      {
        questionText: "Quelle est la cause la plus fréquente de conjonctivite infectieuse ?",
        options: [
          "Bactérienne (Staphylocoque, Streptocoque)",
          "Virale (Adénovirus)",
          "Fongique (Candida)",
          "Parasitaire (Chlamydia)",
          "Allergique"
        ],
        correctOptionIndexes: [1],
        explanation: "Les conjonctivites virales, notamment celles dues aux Adénovirus, sont la cause la plus fréquente des conjonctivites infectieuses. Elles sont très contagieuses."
      },
      {
        questionText: "Une conjonctivite avec prurit (démangeaisons intenses) est le plus souvent d'origine :",
        options: [
          "Virale",
          "Bactérienne",
          "Allergique",
          "Traumatique",
          "Toxique"
        ],
        correctOptionIndexes: [2],
        explanation: "Le prurit (démangeaison) est le signe cardinal de la conjonctivite allergique, souvent saisonnière (pollens)."
      },
      {
        questionText: "La présence de 'follicules' sous la paupière est caractéristique d'une conjonctivite :",
        options: [
          "Virale ou à Chlamydia",
          "Bactérienne purulente",
          "Allergique (papilles géantes)",
          "Néonatale",
          "Caustique"
        ],
        correctOptionIndexes: [0],
        explanation: "Les follicules (petits amas lymphoïdes) sont typiques des infections virales (Adénovirus) ou des infections à Chlamydia trachomatis (trachome)."
      },
      {
        questionText: "Quelle conjonctivite néonatale est la plus grave et doit être traitée en urgence pour éviter la cécité ?",
        options: [
          "Conjonctivite à Chlamydia",
          "Conjonctivite à Gonocoque",
          "Conjonctivite herpétique",
          "Conjonctivite chimique (nitrate d'argent)",
          "Conjonctivite staphylococcique"
        ],
        correctOptionIndexes: [1],
        explanation: "La conjonctivite à Gonocoque chez le nouveau-né (ophtalmia neonatorum) est une urgence absolue (hyper-purulente) en raison du risque de perforation cornéenne rapide et de cécité."
      },
      {
        questionText: "Qu'est-ce qui distingue principalement une kératite d'une conjonctivite simple ?",
        options: [
          "La couleur de la rougeur",
          "La présence de sécrétions",
          "La baisse de l'acuité visuelle et la douleur",
          "La présence de démangeaisons",
          "La contagiosité"
        ],
        correctOptionIndexes: [2],
        explanation: "La conjonctivite affecte la conjonctive (surface). La kératite est une inflammation de la cornée (transparente) ; elle entraîne presque toujours une baisse de vision et une douleur importante (ciliospasme)."
      },
      {
        questionText: "Une conjonctivite bactérienne simple chez l'adulte est le plus souvent traitée par :",
        options: [
          "Corticoïdes collyre",
          "Antihistaminiques collyre",
          "Antibiotique collyre (ex: Azithromycine, Tobramycine)",
          "Sérum physiologique uniquement",
          "Antiviraux par voie orale"
        ],
        correctOptionIndexes: [2],
        explanation: "Le traitement est un collyre antibiotique à large spectre, après lavage oculaire fréquent au sérum physiologique."
      },
      {
        questionText: "Le 'syndrome œil sec' (Kératoconjonctivite sèche) est souvent associé à quelle maladie systémique ?",
        options: [
          "Diabète",
          "Maladie de Crohn",
          "Syndrome de Gougerot-Sjögren",
          "Hypertension artérielle",
          "Psoriasis"
        ],
        correctOptionIndexes: [2],
        explanation: "Le syndrome de Gougerot-Sjögren est une maladie auto-immune qui détruit les glandes exocrines, provoquant un syndrome sec (oculaire et buccal)."
      },
      {
        questionText: "Une rougeur localisée en 'secteur' sur le blanc de l'œil, sans douleur ni sécrétion, est typique de :",
        options: [
          "Conjonctivite virale",
          "Uvéite",
          "Hémorragie sous-conjonctivale",
          "Glaucome aigu",
          "Kératite"
        ],
        correctOptionIndexes: [2],
        explanation: "Une 'tache de sang' sur l'œil, bien délimitée, sans douleur et sans baisse de vision, est une hémorragie sous-conjonctivale, généralement bénigne et spontanément résolutive."
      },
      {
        questionText: "Quel conseil d'hygiène est primordial en cas de conjonctivite virale (Adénovirus) ?",
        options: [
          "Se laver les mains très fréquemment et ne pas partager les serviettes",
          "Porter des lunettes de soleil en permanence",
          "Mettre du miel dans l'œil",
          "Arrêter de cligner des yeux",
          "Prendre des antibiotiques"
        ],
        correctOptionIndexes: [0],
        explanation: "La conjonctivite virale est extrêmement contagieuse par contact direct (mains, objets). L'hygiène des mains et l'éviction (ne pas partager le linge) sont essentielles."
      }
    ]
  },
  {
    title: "Diabète",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Quelles atteintes correspondent à la microangiopathie diabétique (cochez la réponse juste):",
        options: [
          "L'ischémie coronaire",
          "L'hypertension artérielle",
          "L'infarctus cérébral",
          "La néphropathie",
          "L'artériopathie des membres inferieurs"
        ],
        correctOptionIndexes: [3],
        explanation: "Microangiopathie (atteinte des petits vaisseaux) = Rétinopathie, Néphropathie, Neuropathie. Les autres options sont des complications de la Macroangiopathie (atteinte des gros vaisseaux)."
      },
      {
        questionText: "Quel fruit à l'Index glycémique le plus bas (cochez la réponse juste):",
        options: [
          "La Ananas",
          "Poire",
          "Fraise",
          "Cerise",
          "Abricot"
        ],
        correctOptionIndexes: [2],
        explanation: "Parmi les options, les fraises ont l'index glycémique le plus bas (environ 25-40 selon les sources), plus bas que la poire, l'ananas, l'abricot ou la cerise."
      },
      {
        questionText: "Dans le syndrome du côlon irritable, les examens complémentaires sont réalisés : 1. pour éliminer une maladie organique 2. pour confirmer le diagnostic 3. sont normaux 4. la coproculture n'est pas recommandée",
        options: [
          "1, 2, 3",
          "1, 3, 4",
          "1",
          "1, 2",
          "1, 2, 3, 4"
        ],
        correctOptionIndexes: [1],
        explanation: "Le diagnostic du SII est un diagnostic d'exclusion (1). Les examens sont donc normaux (3) et visent à éliminer autre chose (organique). La coproculture n'est pas recommandée en routine (4)."
      },
      {
        questionText: "Le diagnostic du Syndrome du côlon irritable est: 1-purement clinique 2-radiologique 3-biologique 4-diagnostic d'exclusion",
        options: [
          "1, 2, 4",
          "2, 3, 4",
          "1, 3, 4",
          "1, 4",
          "1, 2, 3"
        ],
        correctOptionIndexes: [3],
        explanation: "Le diagnostic du SII est basé sur les symptômes (clinique) et posé après avoir exclu d'autres pathologies (diagnostic d'exclusion)."
      },
      {
        questionText: "Les signes faisant craindre la survenue d'un diabète à long terme sont: (réponse fausse )",
        options: [
          "alimentation riche en gras et salée",
          "nourriture sucrée à base de cerises, de confitures et de plats industriels",
          "un BMI ≥ 30 kg/m²",
          "absence d'activité physique",
          "un tour de taille inférieur à 80 cm chez la femme"
        ],
        correctOptionIndexes: [4],
        explanation: "Un tour de taille inférieur à 80 cm chez la femme est un signe de bonne santé métabolique, et non un facteur de risque de diabète."
      },
      {
        questionText: "Le diabète type 2 est définit par (cocher la réponse juste) :",
        options: [
          "Glycémie 2 heures après HGPO > 1.26 g/l",
          "Glycémie a jeun > 2 g/l",
          "Glycémie a jeun ≥ 1.26g/l sur deux prélèvements",
          "Glycémie 2heures après HGPO entre 1.40 et 2 g/l",
          "Glycémie faite à n'importe quel moment de la journée > 1.26 g/l"
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagnostic du diabète se pose (entre autres) par une glycémie à jeun supérieure ou égale à 1.26 g/l, confirmée à deux reprises."
      },
      {
        questionText: "Un sujet qui pèse 80 kg pour une taille de 1.70m a un Body Mass Index a (cocher Ia réponse juste) /",
        options: [
          "27,68 Kg/m2",
          "31.66 Kg/m2",
          "21.59 Kg/m2",
          "17.69 Kg/m2",
          "37.56 Kg/m2"
        ],
        correctOptionIndexes: [0],
        explanation: "Calcul de l'IMC (BMI) = Poids / (Taille * Taille) = 80 / (1.70 * 1.70) = 80 / 2.89 ≈ 27.68 Kg/m2 (Surpoids)."
      },
      {
        questionText: "Signes cliniques d'alarmes qui font rechercher une maladie organique avant de poser le diagnostic du syndrome de l'intestin irritable : (cochez Ia réponse juste)",
        options: [
          "Age < 50 ans",
          "Amaigrissement",
          "Aggravation des symptômes",
          "Présence de sang dans les selles",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'amaigrissement, l'aggravation récente, le sang dans les selles, ou un âge > 50 ans sont des 'red flags' qui imposent des explorations avant de conclure à un SII."
      },
      {
        questionText: "Comment définit-on un diabète : (cochez Ia réponse fausse) :",
        options: [
          "HbA1C > a 6,5%",
          "Glycémie > 2 g/l à n'importe quel moment de Ia journée (avec symptômes)",
          "Glycémie à jeun ≥ 1,40 g/l à deux reprises",
          "glycémie postprandiale a 2 g/l après 2h (HGPO)",
          "glycémie à jeun ≥ 1,26 g/l a deux reprises"
        ],
        correctOptionIndexes: [2],
        explanation: "Le seuil de 1.40 g/l à jeun n'est pas un critère diagnostic standard. Les critères sont : G à jeun ≥ 1.26 g/l, G après HGPO ≥ 2 g/l, ou HbA1c ≥ 6.5%."
      },
      {
        questionText: "Trouver l'aliment a indice glycémique élevé (cochez la réponse juste) :",
        options: [
          "Gingembre",
          "Pate al dente",
          "Epinards",
          "Pain de mie",
          "Orge"
        ],
        correctOptionIndexes: [3],
        explanation: "Le pain de mie (surtout blanc) a un indice glycémique (IG) élevé, tandis que les pâtes 'al dente', l'orge, et les légumes verts (épinards) ont un IG bas."
      },
      {
        questionText: "Le diabète type 2 est défini par une (RJS) :",
        options: [
          "Glycémie 2 heures après HGPO > 2.0 g/l",
          "Glycémie a jeun > 2 g/l",
          "Glycémie a jeun > 1.26 g/l sur deux prélèvements",
          "Glycémie postprandiale entre 1.40 et 2 g/l",
          "Glycémie faite n'importe quel moment de la journée > 1.26 g/l"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les critères diagnostiques du diabète incluent une glycémie à jeun ≥ 1.26 g/l (confirmée) OU une glycémie 2h après HGPO ≥ 2.0 g/l."
      },
      {
        questionText: "Les explorations suivantes sont nécessaires au dépistage des complications dégénératives du diabète sucré RJS :",
        options: [
          "Electrocardiogramme",
          "Fond d'Œil",
          "Echographie doppler des membres supérieurs",
          "Echographie cardiaque",
          "Dosage microalbuminurie"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Dépistage : ECG (macroangiopathie), Fond d'œil (rétinopathie), Microalbuminurie (néphropathie). L'écho doppler se fait aux membres inférieurs (AOMI), pas supérieurs."
      },
      {
        questionText: "Chez un diabétique type 1, une hypoglycémie est suspectée devant (cocher la réponse fausse) /",
        options: [
          "Nervosité",
          "Sueurs",
          "Bradycardie",
          "Confusion",
          "Sensation de faim"
        ],
        correctOptionIndexes: [2],
        explanation: "L'hypoglycémie déclenche une réaction adrénergique (sympathique) qui provoque une TACHYCARDIE (accélération du cœur), et non une bradycardie (ralentissement)."
      }
    ]
  },
  {
    title: "Urticaire, Eczéma, Psoriasis",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Le psoriasis se caractérise par :",
        options: [
          "Un érythème",
          "Des squames",
          "Sa contagiosité",
          "La présence des cas similaires dans la famille"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le psoriasis est une papule érythémato-squameuse (rouge et avec des squames). Il n'est pas contagieux. Il y a une prédisposition génétique (facteurs familiaux dans 30% des cas)."
      },
      {
        questionText: "Les types cellulaires retrouvés dans l’épiderme sont :",
        options: [
          "Kératinocytes",
          "Cellule dendritique",
          "Follicule pilosébacés",
          "Cellule de Merkel",
          "Cellule Langerhans"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "L'épiderme contient 4 types cellulaires : Kératinocytes (majoritaires), Mélanocytes, Cellules de Langerhans (immunitaires), et Cellules de Merkel (sensorielles)."
      },
      {
        questionText: "La lésion élémentaire de l'urticaire est :",
        options: [
          "Une papule squameuse",
          "Une vésicule liquide",
          "Une plaque érythémateuse et œdémateuse, mobile et fugace",
          "Une bulle tendue",
          "Un nodule inflammatoire"
        ],
        correctOptionIndexes: [2],
        explanation: "La lésion typique de l'urticaire est la papule œdémateuse (gonflement), prurigineuse (démangeaison), fugace (dure quelques heures) et mobile (change de place)."
      },
      {
        questionText: "L'eczéma de contact est une réaction d'hypersensibilité de type :",
        options: [
          "Type I (Immédiate - IgE)",
          "Type II (Cytotoxique)",
          "Type III (Complexes immuns)",
          "Type IV (Retardée - Cellulaire)",
          "Aucune de ces réponses"
        ],
        correctOptionIndexes: [3],
        explanation: "L'eczéma de contact allergique est le prototype de l'hypersensibilité retardée (Type IV), médiée par les lymphocytes T, survenant 24-48h après le contact avec l'allergène."
      },
      {
        questionText: "Le 'signe de Koebner' décrit :",
        options: [
          "L'apparition de lésions d'urticaire après une pression",
          "L'apparition de lésions de psoriasis sur une zone de traumatisme cutané",
          "Le blanchiment d'une plaque d'urticaire à la pression",
          "La présence de prurit intense dans l'eczéma",
          "Une desquamation en nappe"
        ],
        correctOptionIndexes: [1],
        explanation: "Le phénomène de Koebner est l'apparition de lésions spécifiques (ex: psoriasis, lichen plan) sur une peau saine ayant subi un traumatisme (grattage, cicatrice)."
      },
      {
        questionText: "Quelle est la principale complication de l'eczéma atopique (dermatite atopique) ?",
        options: [
          "La transformation en psoriasis",
          "La surinfection bactérienne (impétiginisation)",
          "La formation de chéloïdes",
          "La chute des cheveux",
          "L'hypertension"
        ],
        correctOptionIndexes: [1],
        explanation: "À cause du prurit intense, les lésions d'eczéma sont souvent grattées, ce qui brise la barrière cutanée et favorise la surinfection, le plus souvent par le Staphylocoque doré."
      },
      {
        questionText: "Le psoriasis est une maladie inflammatoire chronique due à :",
        options: [
          "Une infection virale latente",
          "Un renouvellement épidermique trop lent",
          "Un renouvellement épidermique accéléré et une inflammation",
          "Une allergie alimentaire",
          "Une insuffisance veineuse"
        ],
        correctOptionIndexes: [2],
        explanation: "Le psoriasis est caractérisé par un cycle de renouvellement des kératinocytes anormalement rapide (7 jours au lieu de 28), associé à une inflammation à médiation immunitaire."
      },
      {
        questionText: "L'urticaire chronique est définie par des lésions quotidiennes ou quasi-quotidiennes durant plus de :",
        options: [
          "24 heures",
          "1 semaine",
          "6 semaines",
          "6 mois",
          "1 an"
        ],
        correctOptionIndexes: [2],
        explanation: "On parle d'urticaire aiguë si elle dure moins de 6 semaines, et d'urticaire chronique si elle persiste au-delà de 6 semaines."
      },
      {
        questionText: "Quelle localisation est typique du psoriasis 'vulgaire' (en plaques) ?",
        options: [
          "Les plis de flexion (coudes, genoux)",
          "Les zones de frottement (coudes, genoux, cuir chevelu, région lombo-sacrée)",
          "Le visage exclusivement",
          "Les paumes des mains et plantes des pieds",
          "L'intérieur de la bouche"
        ],
        correctOptionIndexes: [1],
        explanation: "Le psoriasis en plaques (le plus courant) touche typiquement les surfaces d'extension et les zones de frottement : coudes, genoux, cuir chevelu et la région lombo-sacrée."
      },
      {
        questionText: "Le traitement de première intention d'une crise d'eczéma aigu suintant est :",
        options: [
          "Antibiotiques oraux",
          "Dermocorticoïdes (crème ou pommade)",
          "Antihistaminiques oraux",
          "Hydratation par crème émolliente",
          "Photothérapie"
        ],
        correctOptionIndexes: [1],
        explanation: "Le traitement de la crise d'eczéma repose sur les anti-inflammatoires topiques, c'est-à-dire les dermocorticoïdes. Les émollients sont utilisés en entretien (hors crise)."
      }
    ]
  },
  {
    title: "Ostéoporose et Ostéomalacie",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Les bilans à demander devant une ostéoporose sont (cochez la réponse fausse) :",
        options: [
          "Dosage de la vitamine A",
          "Calcémie",
          "Radio standard",
          "Densitométrie osseuse",
          "Phosphorémie"
        ],
        correctOptionIndexes: [0],
        explanation: "Le bilan d'ostéoporose inclut un bilan phosphocalcique (Calcémie, Phosphorémie, Vitamine D) et la Densitométrie. Le dosage de la vitamine A n'est pas pertinent."
      },
      {
        questionText: "L'ostéoporose est définit : (Cochez Ia réponse fausse) :",
        options: [
          "Diminution de la densité osseuse",
          "Altérations de la microarchitecture osseuse",
          "Maladie généralisée du squelette",
          "Perte osseuse prédomine au rachis",
          "Prédomine dans la période post-ménopausique tardive"
        ],
        correctOptionIndexes: [4],
        explanation: "La perte osseuse post-ménopausique est rapide et précoce, prédominant sur l'os trabéculaire (rachis). L'ostéoporose 'sénile' (plus tardive) touche os cortical et trabéculaire."
      },
      {
        questionText: "L'ostéomalacie est : (cochez Ia réponse juste)",
        options: [
          "Une insuffisance de minéralisation des travées osseuses",
          "Due à un déficit en vitamine D, plus rarement un déficit en phosphore",
          "L'ostéomalacie de l'adulte est L’équivalent du rachitisme chez l'enfant",
          "Favorise l'absorption intestinale du calcium et du phosphore",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'ostéomalacie est un défaut de minéralisation (A) de l'os adulte (C = rachitisme chez l'enfant), le plus souvent dû à une carence en Vitamine D (B). La Vit D favorise l'absorption (D)."
      },
      {
        questionText: "La Densitométrie Osseuse (DMO) mesure le 'T-score'. Un T-score de -1.5 indique :",
        options: [
          "Une densité normale",
          "Une ostéopénie",
          "Une ostéoporose",
          "Une ostéoporose sévère",
          "Une ostéomalacie"
        ],
        correctOptionIndexes: [1],
        explanation: "Classification OMS : Normal (T-score > -1), Ostéopénie (T-score entre -1 et -2.5), Ostéoporose (T-score ≤ -2.5)."
      },
      {
        questionText: "Quelle est la principale cause d'ostéomalacie dans le monde ?",
        options: [
          "Insuffisance rénale chronique",
          "Maladie cœliaque (malabsorption)",
          "Traitement anti-épileptique",
          "Carence en Vitamine D (défaut d'exposition solaire ou d'apport)",
          "Hypophosphatémie"
        ],
        correctOptionIndexes: [3],
        explanation: "La cause la plus fréquente d'ostéomalacie est une carence profonde en Vitamine D, nécessaire à l'absorption du calcium et sa fixation sur l'os."
      },
      {
        questionText: "Biologiquement, l'ostéomalacie carentielle (Vit D) se caractérise typiquement par :",
        options: [
          "Calcémie et Phosphorémie élevées",
          "Calcémie basse, Phosphorémie basse, Phosphatases Alcalines (PAL) élevées",
          "Calcémie élevée, Phosphorémie basse, PAL normales",
          "Calcémie normale, Phosphorémie normale, PAL normales",
          "Uniquement une Vitamine D basse"
        ],
        correctOptionIndexes: [1],
        explanation: "La carence en Vit D entraîne une hypocalcémie et hypophosphorémie (défaut d'absorption). L'os tente de compenser (hyperparathyroïdie secondaire) et 'souffre', ce qui augmente les PAL."
      },
      {
        questionText: "Quelle fracture est la plus 'spécifique' de l'ostéoporose ?",
        options: [
          "Fracture du crâne",
          "Fracture de la cheville",
          "Fracture du poignet (Pouteau-Colles) après 50 ans",
          "Fracture de fatigue du tibia",
          "Fracture de la clavicule"
        ],
        correctOptionIndexes: [2],
        explanation: "Les fractures ostéoporotiques 'typiques' surviennent pour un traumatisme de faible énergie. Les sites les plus fréquents sont le poignet (Pouteau-Colles), le col du fémur et les vertèbres (tassements)."
      },
      {
        questionText: "Le traitement de l'ostéoporose post-ménopausique repose en première intention sur :",
        options: [
          "Vitamine D et Calcium seuls",
          "Bisphosphonates (ex: Alendronate) + Vitamine D/Calcium",
          "Traitement hormonal substitutif (THS)",
          "Raloxifène (SERM)",
          "Teriparatide (analogue PTH)"
        ],
        correctOptionIndexes: [1],
        explanation: "Les Bisphosphonates (anti-résorbeurs) sont le traitement de première intention, toujours associés à une supplémentation en Vitamine D et Calcium pour être efficaces."
      },
      {
        questionText: "Qu'est-ce qu'une 'strie de Looser-Milkman' visible à la radiographie ?",
        options: [
          "Un tassement vertébral ostéoporotique",
          "Une fracture du col du fémur",
          "Une géode de l'arthrose",
          "Une pseudo-fracture caractéristique de l'ostéomalacie",
          "Une lésion lytique du myélome"
        ],
        correctOptionIndexes: [3],
        explanation: "Les stries de Looser-Milkman sont des bandes claires, perpendiculaires à la corticale, correspondant à de l'os non minéralisé (ostéoïde). C'est un signe pathognomonique de l'ostéomalacie."
      },
      {
        questionText: "Quelle affirmation concernant l'ostéoporose est VRAIE ?",
        options: [
          "C'est une maladie douloureuse même sans fracture",
          "Elle touche uniquement les femmes",
          "L'os est de 'mauvaise qualité' mais la minéralisation est normale",
          "Elle se voit par une hyperdensité à la radio",
          "Le diagnostic se fait par biopsie osseuse"
        ],
        correctOptionIndexes: [2],
        explanation: "Contrairement à l'ostéomalacie (défaut de minéralisation), l'ostéoporose est un os 'rare' (perte de trame) mais correctement minéralisé. Elle est asymptomatique (non douloureuse) jusqu'à la fracture."
      }
    ]
  },
  // quizzes/year-5/patho-medical.js
// [PARTIE 2]

  {
    title: "Syndrome hémorragique et anémies",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Lorsqu'un patient est sous traitement anticoagulant type anti vitamine K (AVK) pou événement thromboembolique :",
        options: [
          "C'est le dentiste qui évalue le risque hémorragique",
          "C'est le médecin traitant qui évalue le risque hémorragique",
          "C'est le dentiste ou le médecin traitant qui évalue le risque hémorragique",
          "Ce sont le dentiste et le médecin traitant qui évaluent le risque hémorragique",
          "Seul le risque hémorragique compte dans la gestion du traitement anticoagulant, en cas d'acte dentaire"
        ],
        correctOptionIndexes: [3],
        explanation: "L'évaluation du risque hémorragique est une décision partagée. Le dentiste évalue le risque lié à l'acte, et le médecin traitant (ou cardiologue) évalue le risque thrombotique du patient."
      },
      {
        questionText: "Selon la Société Française de Chirurgie Orale (2016), un acte à haut risque hémorragique:",
        options: [
          "est un acte qui nécessite une technique délicate",
          "est un acte d'une durée opératoire supérieure à trente minutes",
          "est un acte invasif",
          "une avulsion dentaire est un acte à haut risque"
        ],
        correctOptionIndexes: [2],
        explanation: "Un acte à haut risque est défini comme un acte invasif qui, s'il entraîne une hémorragie, ne peut être contrôlé par des moyens locaux. Une avulsion simple est généralement à faible risque."
      },
      {
        questionText: "Les signes de gravité de l'anémie dépendent de (cochez la réponse fausse):",
        options: [
          "intensité de l’anémie",
          "la rapidité d'installation de l'anémie de l’étiologie",
          "l’existence d'un tableau de choc hypovolémique (chute de la tension artérielle, tachycardie)",
          "l’existence de pathologies antérieures, en particulier cardio-vasculaires"
        ],
        correctOptionIndexes: [1],
        explanation: "La gravité dépend de l'intensité (profondeur), de la rapidité d'installation (aiguë vs chronique), du retentissement (choc) et du terrain (pathologies cardio-vasculaires)."
      },
      {
        questionText: "Devant un allongement isolé du TCA révélé par un syndrome hémorragique vous évoquez (réponse juste):",
        options: [
          "Hémophile congénitale et maladie de Willebrand",
          "Carence en vitamine K",
          "Déficit en facteur X",
          "Thrombopénie",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Un allongement isolé du TCA (Temps de Céphaline Activée) oriente vers un déficit de la 'voie intrinsèque' (Facteurs VIII, IX, XI, XII), typique de l'hémophilie. La maladie de Willebrand peut aussi l'allonger."
      },
      {
        questionText: "La gravité du syndrome hémorragique est appréciée par (réponse juste) :",
        options: [
          "Extension: limité ou généralisé",
          "Présences d'hémorragies viscérales (digestives, hématuries)",
          "L'existence de bulles hémorragiques buccales et/ou d'hémorragies rétiniennes",
          "Retentissement sur l'état hémodynamique",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Tous ces éléments participent à l'évaluation de la gravité d'un syndrome hémorragique."
      },
      {
        questionText: "Les causes générales indirectes des hémorragies bucco-dentaires peuvent être(RJS):",
        options: [
          "Paracetamol",
          "Amoxicilline",
          "Anti-inflammatoires non stéroïdiens",
          "Acide acétylsalicylique",
          "Antivitamine k"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Les AINS, l'Aspirine (Acide acétylsalicylique) et les AVK (Antivitamine K) sont des médicaments qui altèrent l'hémostase et augmentent le risque hémorragique."
      },
      {
        questionText: "L'anémie sidéropénique peut être due à (RJS):",
        options: [
          "Saignements chroniques",
          "Augmentation de besoin en fer lors de la grossesse",
          "Alimentation inadapté (excès de viandes)",
          "Maladie cœliaque",
          "Transfusions sanguines fréquentes"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'anémie par carence en fer (sidéropénique) est due à des pertes (saignements), une augmentation des besoins (grossesse), ou un défaut d'absorption (maladie cœliaque). Un excès de viande (riche en fer) n'en est pas la cause."
      },
      {
        questionText: "Quels examens biologiques explorent l'hémostase primaire ? (RJS)",
        options: [
          "Temps de Quick (TP)",
          "Numération plaquettaire",
          "Temps de Céphaline Activée (TCA)",
          "Temps de Saignement (TS)",
          "Dosage du Fibrinogène"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'hémostase primaire (formation du clou plaquettaire) est explorée par la numération des plaquettes (quantité) et le Temps de Saignement (fonctionnalité)."
      },
      {
        questionText: "Une anémie microcytaire (VGM < 80 fL) et hypochrome est typiquement : (RJS)",
        options: [
          "Une anémie par carence en Fer (sidéropénique)",
          "Une anémie par carence en Vitamine B12",
          "Une thalassémie",
          "Une anémie inflammatoire (chronique)",
          "Une anémie hémolytique"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'anémie microcytaire (petits globules rouges) est due à un défaut de synthèse de l'hémoglobine, le plus souvent par manque de fer (anémie sidéropénique), un défaut de la globine (thalassémie), ou un blocage du fer (anémie inflammatoire)."
      },
      {
        questionText: "Qu'est-ce que l'INR (International Normalized Ratio) ? (RJS)",
        options: [
          "Un test pour l'hémophilie",
          "Une mesure de la vitesse de sédimentation",
          "Un test de surveillance du traitement par Héparine",
          "Une standardisation du Temps de Quick (TP) pour surveiller les AVK",
          "Un marqueur de l'anémie"
        ],
        correctOptionIndexes: [3],
        explanation: "L'INR est le résultat du Temps de Quick (TP) exprimé de façon standardisée, permettant une surveillance fiable des traitements par Antivitamine K (AVK) quel que soit le laboratoire."
      }
    ]
  },
  {
    title: "Hépatites et Cirrhoses",
    subject: "patho-medical",
    questions: [
      {
        questionText: "La cirrhose: (Cochez la réponse fausse)",
        options: [
          "Correspond à une évolution naturelle, réversible des hépatites chroniques",
          "Est caractérisée par une fibrose annulaire est des nodules de régénération",
          "peut être compensée ou décompensée",
          "peut se manifester par des signes d'HTP",
          "se complique souvent d'hémorragies digestives qui peuvent révéler la maladie"
        ],
        correctOptionIndexes: [0],
        explanation: "La cirrhose est l'évolution cicatricielle IRRÉVERSIBLE de toute maladie chronique du foie."
      },
      {
        questionText: "Une hépatite chronique (cochez la répense fausse)",
        options: [
          "Est tout processus inflammatoire au niveau du foie",
          "Sa durée est supérieure a 6 mois",
          "Peut être transmise par voie sexuelle, sanguine",
          "Peut être d'origine virale: VHB, VHC, VHA",
          "peut être cytolytique ou cholestatique"
        ],
        correctOptionIndexes: [3],
        explanation: "Une hépatite chronique (inflammation > 6 mois) peut être due aux virus B, C, D (et E chez l'immunodéprimé). Le VHA (Virus de l'Hépatite A) ne chronique JAMAIS."
      },
      {
        questionText: "Une hépatite chronique (Cochez la réponse fausse):",
        options: [
          "Est tout processus inflammatoire au niveau du foie",
          "Sa durée est supérieure à 6 mois",
          "Peut être transmise par voie sexuelle, sanguine",
          "Peut être d'origine virale: VHB, VHC, VHD,VHA.",
          "peut être cytolytique ou cholestatique"
        ],
        correctOptionIndexes: [3],
        explanation: "Même question que la précédente. Le VHA (Virus de l'Hépatite A) ne cause que des hépatites aiguës, il ne chronique jamais."
      },
      {
        questionText: "Le traitement de l'hépatite virale C, repose sur: (cochez la réponse fausse)",
        options: [
          "Le traitement de la forme algue",
          "La vaccination",
          "Éducation du patient",
          "Éviction des comportements à risque",
          "Recherche des co-Infections"
        ],
        correctOptionIndexes: [1],
        explanation: "Il n'existe PAS de vaccin contre l'hépatite C (VHC). La prévention repose sur l'éviction des risques (sang, matériel)."
      },
      {
        questionText: "Le marqueur sérologique qui signe une infection ancienne et guérie de l'Hépatite B est :",
        options: [
          "Ag HBs (+), Ac anti-HBc IgM (+)",
          "Ag HBs (+), Ac anti-HBc IgG (+)",
          "Ag HBs (-), Ac anti-HBc IgG (+), Ac anti-HBs (+)",
          "Ag HBs (-), Ac anti-HBc (-), Ac anti-HBs (+)",
          "Ag HBe (+)"
        ],
        correctOptionIndexes: [2],
        explanation: "Hépatite B guérie : Le virus (Ag HBs) a disparu, le patient a fabriqué des anticorps protecteurs (Ac anti-HBs) et garde la 'mémoire' de l'infection (Ac anti-HBc IgG)."
      },
      {
        questionText: "Quelle(s) est (sont) la (les) principale(s) complication(s) de la cirrhose décompensée ? (RJS)",
        options: [
          "Ascite",
          "Hémorragie digestive (rupture de varices œsophagiennes)",
          "Encéphalopathie hépatique",
          "Ictère (jaunisse)",
          "Pancréatite aiguë"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La décompensation de la cirrhose se manifeste par : l'ascite (eau dans le ventre), l'hémorragie digestive (par hypertension portale), l'encéphalopathie (confusion par accumulation de toxines) et l'ictère (par insuffisance hépatique)."
      },
      {
        questionText: "Les hépatites virales à transmission fécale-orale (péril fécal) sont : (RJS)",
        options: [
          "Hépatite A",
          "Hépatite B",
          "Hépatite C",
          "Hépatite D",
          "Hépatite E"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Les virus A et E (VHA, VHE) se transmettent par l'eau et les aliments souillés (voie fécale-orale). Les virus B, C et D se transmettent par le sang et les voies sexuelles."
      },
      {
        questionText: "Quel signe clinique est un indicateur d'Insuffisance Hépato-Cellulaire (IHC) chez un patient cirrhotique ? (RJS)",
        options: [
          "Angiomes stellaires",
          "Splénomégalie (grosse rate)",
          "Circulation veineuse collatérale",
          "Erythrose palmaire",
          "Ascite"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les angiomes stellaires et l'érythrose palmaire sont des signes cutanés d'IHC (défaut du foie). L'ascite, la splénomégalie et la circulation collatérale sont des signes d'Hypertension Portale (HTP)."
      },
      {
        questionText: "La co-infection par le virus de l'Hépatite D (VHD) ne peut survenir qu'en présence d'une infection par :",
        options: [
          "Le VHA",
          "Le VHB",
          "Le VHC",
          "Le VIH",
          "Le VHE"
        ],
        correctOptionIndexes: [1],
        explanation: "Le VHD est un virus 'satellite' ou 'défectif'. Il a besoin de l'enveloppe du VHB (l'Antigène HBs) pour se répliquer. On ne peut donc être infecté par le VHD que si on est déjà infecté par le VHB."
      },
      {
        questionText: "Chez un dentiste, quelle est la principale précaution pour éviter la transmission des hépatites B et C ?",
        options: [
          "Vaccination contre le VHC",
          "Prise d'antibiotiques avant les soins",
          "Respect des précautions universelles d'hygiène (gants, masque, stérilisation)",
          "Vaccination contre le VHA",
          "Rinçage buccal du patient"
        ],
        correctOptionIndexes: [2],
        explanation: "Les VHB et VHC étant transmis par le sang (AES), le respect strict des précautions universelles (gestion des instruments piquants/tranchants, stérilisation) est fondamental. La vaccination contre le VHB est aussi obligatoire pour les soignants."
      }
    ]
  },
  {
    title: "La maladie coronarienne et insuffisance cardiaque",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Le risque infectieux peut être prévenu par : cocher la réponse juste)",
        options: [
          "Une antibioprophylaxie chez les patients à risques.",
          "Une hygiène bucco-dentaire rigoureuse",
          "Une application d'antiseptiques en préopératoire",
          "Une manipulation le moins traumatisante possible.",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Tous ces éléments (hygiène, antiseptiques, geste atraumatique, et antibioprophylaxie ciblée) contribuent à la prévention du risque infectieux."
      },
      {
        questionText: "Au cours de l'angor d'effort (citer la proposition fausse) :",
        options: [
          "La douleur cède au repos",
          "l’ECG de repos est généralement normal",
          "La douleur cède à la trinitrine",
          "Les enzymes cardiaques (troponines et CPK) sont élevées",
          "L’échocardiographie est normal"
        ],
        correctOptionIndexes: [3],
        explanation: "Dans l'angor d'effort (stable), il y a ischémie (manque d'oxygène) mais pas nécrose (mort cellulaire). Les enzymes cardiaques (Troponine) ne s'élèvent qu'en cas de nécrose, c'est-à-dire un infarctus (IDM)."
      },
      {
        questionText: "Les soins dentaires d'un patient subit pour une insuffisance coronarienne exposent à un risque (proposition fausse) :",
        options: [
          "Hémorragique important lié au traitement",
          "Anesthésique important",
          "Important d'interactions médicamenteuses",
          "Risque de syndrome coronaire aigu",
          "infectieux important"
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire (source 742) indique 'Infectieux: pas de risque'. Les autres risques (hémorragique, anesthésique, médicamenteux, SCA) sont réels."
      },
      {
        questionText: "L'insuffisance cardiaque droite se manifeste par: (Cochez la réponse fausse): :",
        options: [
          "Dyspnée à type d'orthopnée",
          "Hépatalgies avec reflux hépato-jugulaire",
          "Œdèmes des membres inférieurs",
          "Signe de Harzer, tachycardie et souffle d'insuffisance tricuspide.",
          "Ascite"
        ],
        correctOptionIndexes: [0],
        explanation: "L'orthopnée (difficulté à respirer allongé) est un signe typique d'insuffisance cardiaque GAUCHE (stase pulmonaire). L'insuffisance droite donne des signes de stase 'en amont' (veines) : œdèmes, hépatalgie, turgescence jugulaire."
      },
      {
        questionText: "Les étiologies de l'insuffisance cardiaques gauches sont: (1 RF) :",
        options: [
          "Valvulopathies mitrales ou aortiques",
          "Cardiomyopathies hypertrophiques",
          "Embolie pulmonaire",
          "Coronaropathies",
          "Génétique"
        ],
        correctOptionIndexes: [2],
        explanation: "L'embolie pulmonaire est une cause classique d'insuffisance cardiaque DROITE aiguë (cœur pulmonaire aigu). Les autres options affectent principalement le cœur gauche."
      },
      {
        questionText: "Les traitements de l'insuffisance coronarienne sont : 1. Antiagrégants plaquettaires(AAP) seuls 2. AAP, et inhibiteurs de l'enzyme de conversion 3. Statines 4. Bétabloquants",
        options: [
          "1, 2",
          "3, 4",
          "2, 3, 4",
          "1",
          "2, 3"
        ],
        correctOptionIndexes: [2],
        explanation: "Le traitement de l'insuffisance coronarienne (angor stable, post-IDM) repose sur plusieurs classes, dont les AAP, les Bêtabloquants, les Statines et les IEC (Inhibiteurs de l'Enzyme de Conversion)."
      },
      {
        questionText: "Au cours de l'IDM (cochez la réponse juste (RJ):",
        options: [
          "Les enzymes cardiaques sont élevées",
          "La douleur thoracique cède au repos",
          "La douleur thoracique cède à la trinitrine",
          "L'ECG est normal",
          "L'angioplastie est le seul traitement"
        ],
        correctOptionIndexes: [0],
        explanation: "L'infarctus du myocarde (IDM) est une nécrose du muscle cardiaque, ce qui libère des enzymes (Troponine) dans le sang. La douleur est typiquement résistante au repos et à la trinitrine."
      },
      {
        questionText: "Pour une extraction dentaire ambulatoire chez un IDM très récent RJ :",
        options: [
          "Vous arrêtez les antiagrégants plaquettaires et vous faites les soins",
          "Vous mettez une antibioprophylaxie",
          "Vous demandez avis de son cardiologue traitant",
          "Vous l'adressez en structure hospitalière pour ses soins dentaires",
          "Vous l'adresser à un autre confrère."
        ],
        correctOptionIndexes: [3],
        explanation: "Un IDM très récent (moins d'un mois) est une situation à très haut risque. Les soins dentaires urgents doivent être réalisés en milieu hospitalier."
      },
      {
        questionText: "Vous devez réaliser une extraction dentaire en ambulatoire chez un patient avant présente un IDM il y a moins d'un mois (cochez Ia réponse juste) :",
        options: [
          "Vous arrêtez les a antiagrégants plaquettaires et vous faites les soins",
          "Vous mettez une antibioprophylaxie",
          "Vous demandez avis de son cardiologue traitant",
          "Vous l'adressez en structure hospitalière pour ses soins dentaires",
          "Vous l'adresser à un autre confrère,"
        ],
        correctOptionIndexes: [3],
        explanation: "Identique à la question précédente. Un IDM de moins d'un mois (≤ 30 jours) impose une prise en charge hospitalière pour les soins urgents."
      },
      {
        questionText: "Les facteurs de risque cardiovasculaire au cours de l'insuffisance coronarienne sont :(cochez Ia réponse fausse)",
        options: [
          "HTA",
          "Diabète",
          "RAA",
          "Obésité",
          "Hypercholesterolernie"
        ],
        correctOptionIndexes: [2],
        explanation: "Le RAA (Rhumatisme Articulaire Aigu) est un facteur de risque de valvulopathies, pas de l'athérosclérose (insuffisance coronarienne). Les autres sont des facteurs de risque cardiovasculaire classiques."
      },
      {
        questionText: "Les signes de l'insuffisance cardiaque gauche sont : (cochez Ia réponse fausse):",
        options: [
          "Râles crépitants",
          "Galop gauche",
          "Hépatomégalie",
          "Dyspnée",
          "œdème aigu du poumon"
        ],
        correctOptionIndexes: [2],
        explanation: "L'hépatomégalie (gros foie) est un signe de stase veineuse 'en amont' du cœur droit, donc un signe d'insuffisance cardiaque DROITE."
      },
      {
        questionText: "La douleur angineuse typique de l'angor stable :",
        options: [
          "Est rétrosternale",
          "Est une urgence absolue",
          "Irradie vers la machoire",
          "Est constrictive",
          "Persiste au repos"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Douleur typique : rétrosternale (A), constrictive (en étau) (D), irradiant (mâchoire, bras gauche) (C). Elle cède au repos (E est faux) et n'est pas une urgence absolue comme l'IDM (B est faux)."
      }
    ]
  },
  {
    title: "Asthme et allergies",
    subject: "patho-medical",
    questions: [
      {
        questionText: "La survenue d'une crise d'asthme en peropératoire impose: (Cochez la réponse fausse)",
        options: [
          "l'arrêt immédiat des soins et la mise en route d'un traitement d'urgence",
          "s'assurer de la vacuité de la cavité buccale et installer le patient en position demi-assise",
          "administrer deux bouffées de B2-agoniste (Ventoline)",
          "oxygénothérapie avec un débit de 6 à 9 l/min",
          "administrer des corticoïdes par voie inhalée"
        ],
        correctOptionIndexes: [4],
        explanation: "En urgence, les B2-agonistes (Ventoline) sont inhalés. Les corticoïdes sont administrés par voie générale (IV ou IM) ou orale, pas inhalée, pour un effet systémique."
      },
      {
        questionText: "chez l'asthmatique avant les soins on doit: (Cocher la réponse fausse)",
        options: [
          "Évaluer le nombre de crises d'asthme par semaine",
          "Apprécier la survenue diurne ou nocturne et la durée des intervalles libres",
          "faire une spirométrie (exploration fonctionnelle respiratoire)",
          "pratiquer un DEP (débit expiratoire de pointe)",
          "prescrire éventuellement un sédatif"
        ],
        correctOptionIndexes: [2],
        explanation: "La spirométrie (EFR) est un examen spécialisé. Le dentiste peut évaluer la sévérité par l'interrogatoire (fréquence des crises) ou un DEP (Peak Flow), mais ne réalise pas de spirométrie au fauteuil."
      },
      {
        questionText: "L'asthme est (cochez la réponse fausse)",
        options: [
          "Se voit sur terrain allergique le plus souvent",
          "Est une dyspnée continue s'aggravant à l'effort",
          "Est une dyspnée paroxystique à prédominance nocturne",
          "L'étude de la fonction respiratoire est normale en dehors des crises",
          "Est une pathologie qui se voit le plus souvent chez le jeune"
        ],
        correctOptionIndexes: [1],
        explanation: "L'asthme est une dyspnée (gêne respiratoire) PAROXYSTIQUE (survenant par crises), elle n'est pas continue."
      },
      {
        questionText: "La crise d'asthme: (cochez la réponse juste)",
        options: [
          "Contre indique les soins dentaires",
          "L'anesthésie générale est préférée à l'anesthésie locale lors de soins spécialisés",
          "L'utilisation d'anesthésiques à base de sulfites est préférable",
          "Nécessite de reporter la séance et de prescrire des corticoïdes au malade avant",
          "La prescription d'un sédatif antihistaminique est préconisée"
        ],
        correctOptionIndexes: [3],
        explanation: "Si un patient est en crise ou instable, il faut reporter le soin. Les anesthésiques avec sulfites (conservateurs) sont à éviter car ils peuvent déclencher une crise."
      },
      {
        questionText: "Le traitement de l'asthme comprend: (cochez la réponse fausse)",
        options: [
          "Les corticoïdes par voie orale",
          "Les bêta 2 sympathomimétiques inhalées",
          "Les anti-inflammatoires non stéroïdiens par voie orale",
          "Les antihistaminiques",
          "Les corticoïdes par voie inhalée"
        ],
        correctOptionIndexes: [2],
        explanation: "Les AINS (Anti-inflammatoires non stéroïdiens) et l'aspirine sont contre-indiqués chez certains asthmatiques (syndrome de Widal) car ils peuvent déclencher une crise grave."
      },
      {
        questionText: "Les critères de gravité d'une réaction allergique sont",
        options: [
          "Hypertension artérielle",
          "Bronchospasme",
          "Urticaire cutanée",
          "Tachycardie",
          "Vasoconstriction"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le bronchospasme (atteinte respiratoire) et la tachycardie (signe de choc/atteinte cardiovasculaire) sont des signes de gravité (choc anaphylactique)."
      },
      {
        questionText: "Donner 2 signes cliniques qui évoquent une crise aiguë d'asthme bronchique",
        options: [
          "Difficultés à parler",
          "Orthopnée",
          "Cyanose",
          "Contraction des muscles sterno-cléido-mastoïdiens",
          "Bradycardie"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Signes de crise aiguë : orthopnée (position assise), difficultés à parler (parle mot par mot), cyanose (lèvres bleues), et mise en jeu des muscles respiratoires accessoires (tirage)."
      },
      {
        questionText: "Quel est le facteur déclenchant d'une crise d'asthme?",
        options: [
          "Poussières de fraisage",
          "Le latex",
          "Stress",
          "Anesthésiques locaux avec sulfites",
          "AINS (Aspirine)"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Tous ces éléments sont des déclencheurs potentiels d'une crise d'asthme au cabinet dentaire."
      },
      {
        questionText: "La réaction allergique est une réaction d'hypersensibilité de (RJ)) cour: Conduite à tenir devant un risque allergique)",
        options: [
          "Type 1",
          "Type 2",
          "Type 3",
          "Type 4",
          "Aucune de ces réponses"
        ],
        correctOptionIndexes: [0],
        explanation: "La réaction allergique 'classique' (anaphylaxie, urticaire, rhinite) est une hypersensibilité de Type I, immédiate, médiée par les IgE."
      },
      {
        questionText: "La cause la plus fréquente d'une réaction allergique RJ) cour: Conduite à tenir devant un risque allergique)",
        options: [
          "Les anti-inflammatoires non stéroïdiens",
          "Les antibiotiques",
          "Les produits de remplissage vasculaires",
          "Les aliments et les vitamines",
          "Les agents anesthésistes et apparentes"
        ],
        correctOptionIndexes: [4],
        explanation: "En contexte péri-opératoire, les agents anesthésistes (curares, latex) sont une cause majeure de réactions anaphylactiques."
      },
      {
        questionText: "Le Critère de gravité de réaction allergique (cocher la réponse fausse): ) cour: Conduite à tenir devant un risque allergique)",
        options: [
          "Urticaire cutanée",
          "Hypotension artérielle",
          "Tachycardie",
          "Bronchospasme",
          "Collapsus"
        ],
        correctOptionIndexes: [0],
        explanation: "L'urticaire isolée est un signe cutanéo-muqueux modéré. Les autres signes (hypotension, tachycardie, bronchospasme, collapsus) définissent l'atteinte grave (anaphylaxie)."
      },
      {
        questionText: "Au Cours d'une crise s'asthme sévère (RJ :)",
        options: [
          "La radiographie standard n'est jamais normale",
          "Le traitement repose sur les oxygénations bronchodilatatrices et corticoïdes",
          "Il faut absolument allonger le malade bien a plat",
          "L'antibiothérapie est systématique",
          "En cas de persistance de la crise, le transfert en réanimation est proscrit"
        ],
        correctOptionIndexes: [1],
        explanation: "Le traitement de la crise sévère repose sur : Oxygène, B2-mimétiques (bronchodilatateurs) et Corticoïdes systémiques. Le patient doit être en position assise (orthopnée), non allongée."
      }
    ]
  },
  {
    title: "ARTHROSE ARTHRITES",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Parmi les propositions suivantes concernant les signes radiologiques de l'arthrose, laquelle est fausse ?",
        options: [
          "en pincement homogène de l'interligne articulaire",
          "un pincement localisé de l'interligne articulaire.",
          "des géodes sous chondrales grosses",
          "La présence d'ostéophytes.",
          "Un os sous chondral condensé."
        ],
        correctOptionIndexes: [0],
        explanation: "L'arthrose se caractérise par un pincement LOCALISÉ (zone de pression). Le pincement HOMOGÈNE (total) est typique de l'ARTHRITE."
      },
      {
        questionText: "L'arthrite septique se manifeste par (cocher la réponse juste): 1. Une tuméfaction articulaire. 2. Une impotence fonctionnelle. 3. Un syndrome inflammatoire. 4. Un pincement articulaire. 5. Une raideur articulaire.",
        options: [
          "1, 2, 3, 5",
          "1, 2, 3, 4",
          "1, 4, 5",
          "1, 2, 4, 5",
          "1, 2, 3, 4, 5"
        ],
        correctOptionIndexes: [0],
        explanation: "L'arthrite septique (infection) est une urgence. Elle donne des signes inflammatoires locaux (douleur, tuméfaction, impotence, raideur) et généraux (fièvre, syndrome inflammatoire biologique)."
      },
      {
        questionText: "La prise en charge d'une arthrite septique comporte (cocher la réponse juste): 1. Une corticothérapie. 2. Une antibiothérapie. 3. Une immobilisation. 4. Un antalgique. 5. Un drainage articulaire.",
        options: [
          "1, 2, 3, 4",
          "2, 3, 4, 5",
          "1, 3, 4, 5",
          "1, 2, 3, 5",
          "1, 2, 3, 4, 5"
        ],
        correctOptionIndexes: [1],
        explanation: "Le traitement de l'arthrite septique est une urgence : Antibiothérapie (2), Drainage/lavage articulaire (5), Antalgiques (4) et Immobilisation (3). Les corticoïdes (1) sont contre-indiqués en phase infectieuse."
      },
      {
        questionText: "Le traitement de l'arthrose débutante comporte (cocher la réponse juste): 1. Antalgique de palier et anti-inflammatoire. 2. Anti-arthrosique à action lente. 3. Infiltration intra-articulaire de dérivés cortisoniques. 4. Mise en place d'une prothèse. 5. Correction chirurgicale d'un vice architectural comme l'ostéotomie.",
        options: [
          "1, 2, 3, 4",
          "2, 3, 4, 5",
          "1, 3, 4, 5",
          "1, 2, 4, 5",
          "1, 2, 3, 5"
        ],
        correctOptionIndexes: [4],
        explanation: "Le traitement de l'arthrose débutante est médical : Antalgiques/AINS (1), Anti-arthrosiques lents (2), Infiltrations (3). La chirurgie corrective (ostéotomie) (5) est possible. La prothèse (4) est réservée à l'arthrose terminale."
      },
      {
        questionText: "Tous ces éléments sont en faveur de l'origine inflammatoire d'un épanchement articulaire sauf un, lequel ?",
        options: [
          "Un liquide riche en protéines",
          "Un liquide riche en cellules",
          "La présence de dépôts de cristaux",
          "Un liquide visqueux",
          "La présence de germes"
        ],
        correctOptionIndexes: [3],
        explanation: "Un liquide articulaire INFLAMMATOIRE est fluide (pauvre en acide hyaluronique, donc peu visqueux). Un liquide MÉCANIQUE (arthrose) est au contraire très visqueux."
      },
      {
        questionText: "Les facteurs de risque d'arthropathie chronique dégénérative sont (cocher la réponse fausse):",
        options: [
          "L'obésité",
          "L'âge",
          "Les maladies métaboliques",
          "Les stations thermales",
          "Les traumatismes"
        ],
        correctOptionIndexes: [3],
        explanation: "L'arthropathie dégénérative (arthrose) est favorisée par l'âge, l'obésité, les traumatismes, et certaines maladies métaboliques. Les stations thermales (crénothérapie) sont un moyen de traitement, pas un facteur de risque."
      },
      {
        questionText: "L'arthrose primaire :",
        options: [
          "A une prévalence qui diminue avec L’âge",
          "Est associe à une altération de cartilage",
          "Se caractérise par un dérouillage matinal",
          "S'accompagne d’une raideur et perte fonctionnelle",
          "Est due à une anomalie articulaire congénitale"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'arthrose est l'usure/altération du cartilage (B). Elle donne une raideur et une perte de fonction (D). L'arthrose secondaire (E) est due à une cause (congénitale, trauma). L'arthrose primaire (A) augmente avec l'âge."
      },
      {
        questionText: "Quels signes cliniques différencient une ARTHRITE d'une ARTHROSE ? (RJS)",
        options: [
          "Douleur de type inflammatoire (nocturne, réveillant le patient)",
          "Dérouillage matinal prolongé (> 30 minutes)",
          "Présence de signes généraux (fièvre, fatigue)",
          "Douleur de type mécanique (à l'effort, calmée par le repos)",
          "Dérouillage matinal court (< 10 minutes)"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'ARTHRITE (inflammatoire) : douleur nocturne, dérouillage long (>30 min), signes généraux. L'ARTHROSE (mécanique) : douleur à l'effort, dérouillage court (<10 min)."
      },
      {
        questionText: "La Polyarthrite Rhumatoïde (PR) est une arthrite qui touche typiquement : (RJS)",
        options: [
          "Le rachis lombaire",
          "Les articulations interphalangiennes distales (IPD)",
          "Les grosses articulations (genou, hanche) de façon asymétrique",
          "Les petites articulations (mains, poignets) de façon bilatérale et symétrique",
          "Le rachis cervical haut"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La PR est un rhumatisme inflammatoire chronique qui touche préférentiellement les petites articulations des mains (Métacarpo-phalangiennes, Interphalangiennes proximales) et les poignets, de manière bilatérale et symétrique. Elle peut aussi toucher le rachis cervical haut."
      },
      {
        questionText: "Qu'est-ce qu'un 'ostéophyte' ? (bec de perroquet)",
        options: [
          "Une destruction osseuse sous-chondrale (géode)",
          "Une production osseuse anormale en marge de l'articulation arthrosique",
          "Une calcification des tendons",
          "Un corps étranger articulaire",
          "Un signe d'arthrite inflammatoire"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ostéophyte ('bec de perroquet') est une excroissance osseuse qui se forme en périphérie de l'articulation, en réaction au processus arthrosique. C'est un signe radiologique cardinal de l'arthrose."
      }
    ]
  },
  {
    title: "VIH (Virus de l'Immunodéficience Humaine)",
    subject: "patho-medical",
    questions: [
      {
        questionText: "la contamination par le virus HIV se fait surtout par (coches la réponse fausse):",
        options: [
          "Sperme",
          "Salive",
          "Sang",
          "Lait maternel",
          "Secrétions cervico-vaginales"
        ],
        correctOptionIndexes: [1],
        explanation: "Le VIH est présent dans le sang, le sperme, les sécrétions vaginales et le lait maternel. La salive contient une quantité de virus très faible, rendant le risque de transmission par cette voie nul (sauf en cas de saignement)."
      },
      {
        questionText: "La contamination par le virus d'immunodéficience acquis peut être (RJS):",
        options: [
          "Sexuelle",
          "Alimentaire",
          "Sanguine",
          "Parasitaire",
          "Fœto-maternelle"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les 3 modes de transmission du VIH sont : sexuel (principal), sanguin (partage de seringues, transfusion avant 1985), et fœto-maternel (grossesse, accouchement, allaitement)."
      },
      {
        questionText: "Quel est le principal type de cellule ciblé par le VIH ?",
        options: [
          "Les lymphocytes B",
          "Les lymphocytes T CD4+",
          "Les plaquettes",
          "Les globules rouges",
          "Les neurones"
        ],
        correctOptionIndexes: [1],
        explanation: "Le VIH infecte préférentiellement les lymphocytes T CD4+ (auxiliaires), qui sont les 'chefs d'orchestre' du système immunitaire. La destruction de ces cellules entraîne l'immunodépression."
      },
      {
        questionText: "Le stade SIDA (Syndrome d'Immunodéficience Acquise) est défini par : (RJS)",
        options: [
          "Un test VIH positif (sérologie)",
          "Un taux de lymphocytes T CD4+ inférieur à 200/mm³",
          "La survenue d'une primo-infection symptomatique",
          "La survenue d'une infection opportuniste (ex: candidose œsophagienne, pneumocystose)",
          "Une charge virale détectable"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le stade SIDA est le stade avancé de l'infection. Il est défini soit biologiquement (T CD4+ < 200/mm³) soit cliniquement (apparition d'une maladie/infection opportuniste classant SIDA)."
      },
      {
        questionText: "Qu'est-ce que la 'primo-infection' au VIH ? (RJS)",
        options: [
          "Le stade SIDA",
          "La phase où le patient est séronégatif mais contaminant",
          "Un syndrome pseudo-grippal survenant 2 à 6 semaines après la contamination",
          "La phase chronique asymptomatique",
          "Le premier test de dépistage positif"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La primo-infection est la phase qui suit la contamination (2-6 semaines). Elle est souvent symptomatique (syndrome grippal). Durant cette phase, la charge virale est très élevée (contagiosité) mais les anticorps (sérologie) peuvent être encore négatifs ('fenêtre sérologique')."
      },
      {
        questionText: "Le traitement antirétroviral (TARV ou trithérapie) actuel : (RJS)",
        options: [
          "Guérit l'infection au VIH",
          "Empêche la transmission sexuelle si la charge virale est indétectable (U=U)",
          "Restaure une immunité et prévient les infections opportunistes",
          "Doit être pris à vie",
          "Est une monothérapie"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le TARV (association de plusieurs molécules) ne guérit pas (doit être pris à vie), mais il bloque la réplication du virus. Il restaure l'immunité et rend la charge virale indétectable, ce qui empêche la transmission (Indétectable = Intransmissible, U=U)."
      },
      {
        questionText: "Qu'est-ce qu'un TPE (Traitement Post-Exposition) après un Accident d'Exposition au Sang (AES) ?",
        options: [
          "Une vaccination d'urgence",
          "Une antibioprophylaxie",
          "Une trithérapie antirétrovirale à débuter idéalement dans les 4h (max 48-72h)",
          "Une sérologie immédiate pour confirmer l'infection",
          "Un lavage simple de la plaie"
        ],
        correctOptionIndexes: [2],
        explanation: "Le TPE (ou PEP en anglais) est un traitement antirétroviral d'urgence prescrit pour 28 jours, à débuter le plus tôt possible après une exposition à risque (AES, rapport sexuel non protégé) pour empêcher le virus de s'installer."
      },
      {
        questionText: "Parmi les manifestations buccales suivantes, lesquelles sont fortement associées à une immunodépression sévère (VIH/SIDA) ? (RJS)",
        options: [
          "Candidose oro-pharyngée (muguet)",
          "Leucoplasie orale chevelue (EBV)",
          "Sarcôme de Kaposi buccal",
          "Gingivite érythémateuse linéaire",
          "Ulcérations aphteuses mineures"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La candidose (surtout œsophagienne), la leucoplasie chevelue, le Kaposi et les atteintes parodontales spécifiques (gingivite linéaire, PUNA) sont des signes classiques d'immunodépression liée au VIH."
      },
      {
        questionText: "Le dépistage du VIH repose en première intention sur :",
        options: [
          "La mesure des CD4",
          "La mesure de la Charge Virale (PCR)",
          "Une sérologie (ELISA 4ème génération : détection Ac + Ag p24)",
          "Une biopsie de ganglion",
          "Un frottis buccal"
        ],
        correctOptionIndexes: [2],
        explanation: "Le dépistage standard est un test sanguin (sérologie) qui recherche à la fois les anticorps (Ac) anti-VIH et l'antigène p24 (Ag p24) du virus, ce qui réduit la fenêtre sérologique."
      },
      {
        questionText: "Quelle affirmation est VRAIE concernant le VIH au cabinet dentaire ?",
        options: [
          "Le VIH est très résistant et survit des jours sur les surfaces",
          "Le risque de transmission au soignant par piqûre est plus élevé que pour le VHB",
          "Un patient VIH+ indétectable ne nécessite aucune précaution particulière",
          "Les précautions d'hygiène universelles protègent efficacement contre le VIH",
          "Il faut refuser de soigner les patients VIH+"
        ],
        correctOptionIndexes: [3],
        explanation: "Le VIH est un virus fragile. Le risque de transmission par piqûre est faible (0.3%) et bien inférieur à celui du VHB (30%) ou VHC (3%). Les précautions universelles (gants, masque, stérilisation) sont conçues pour protéger contre TOUS les pathogènes sanguins, y compris le VIH."
      }
    ]
  },
  {
    title: "MTEV (Maladie Thrombo-Embolique Veineuse)",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Les précautions à prendre face au risque hémorragique : (Cochez la réponse fausse)",
        options: [
          "Les anti-inflammatoires non stéroïdiens sont contre-indiqués chez les patients sous anticoagulants.",
          "L'aspirine est contre-indiqués chez les patients sous anticoagulants",
          "Les barbituriques sont contre-indiqués chez les patients sous antivitamines K",
          "Les tétracyclines sont contre-indiquées chez les patients sous antivitamines K",
          "L'amoxicilline est contre indiqué chez les patients sous anticoagulants"
        ],
        correctOptionIndexes: [4],
        explanation: "L'Amoxicilline n'a pas d'interaction majeure avec les anticoagulants et n'est pas contre-indiquée. Les AINS, l'Aspirine et certains autres médicaments (Tétracyclines, Barbituriques) interagissent avec les AVK et sont contre-indiqués."
      },
      {
        questionText: "Un patient, à haut risque thromboembolique, sous anticoagulant oraux .embolie pulmonaire qui nécessite un acte dentaire à haut risque hémorragique. Vous devez :",
        options: [
          "Ne pas arrêter son traitement AOD",
          "Arrêter son traitement AOD sans relais héparine",
          "Arrêter son traitement AOD avec relais héparine",
          "Switcher (changer) son traitement AOD par un anti vitamine K (AVK)",
          "Switcher (Changer) son traitement AOD par de l'aspirine la veille de l'acte dentaire"
        ],
        correctOptionIndexes: [2],
        explanation: "Face à un risque thrombotique élevé et un risque hémorragique élevé, la conduite est l'arrêt temporaire de l'AOD avec un 'relais' par héparine (HBPM) pour maintenir l'anticoagulation, en accord avec le médecin prescripteur."
      },
      {
        questionText: "Un patient présente les signes suivants : 1. Un œdème unilatéral du membre inférieur 2. Une diminution du ballottement du mollet 3. Un membre chaud 4. Un érythème (rougeur) avec des lésions vésiculeuses sur le membre. Le diagnostic de thrombose veineuse est évoqué devant :",
        options: [
          "1, 3, 4",
          "2, 3, 4",
          "1, 2, 3",
          "1, 2, 3, 4"
        ],
        correctOptionIndexes: [2],
        explanation: "Les signes classiques de thrombose veineuse profonde (Phlébite) sont l'œdème unilatéral (1), le membre chaud (3), la douleur, et la diminution du ballottement du mollet (mollet 'dur') (2)."
      },
      {
        questionText: "Concernant l'exploration d'un événement thromboembolique veineux : (Réponse Fausse)",
        options: [
          "Le dosage des D-Dimères > 500ng/ml confirme le diagnostic.",
          "L'incompressibilité de la veine avec la sonde d'échographie est un signe direct d'un thrombose veineuse.",
          "L'échographie couplée au Doppler pulsé et couleur est l'examen qui confirme le diagnostic de thrombose veineuse",
          "L'élévation des biomarqueurs cardiaques confirment le diagnostic d'une embolie pulmonaire."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "1- D-Dimères > 500 ont une bonne valeur prédictive NÉGATIVE (si < 500, on exclut le diagnostic), mais s'ils sont > 500, ils ne confirment PAS (non spécifique). 2- L'incompressibilité est un signe ÉCHO-DOPPLER, pas un signe 'direct' (clinique). 3- Les biomarqueurs cardiaques (Troponine) peuvent s'élever en cas d'embolie pulmonaire grave (signe de gravité), mais ne confirment pas le diagnostic (lequel repose sur l'Angioscanner)."
      },
      {
        questionText: "Le diagnostic de thrombose veineuse est évoqué cher un patient qui présente : 1. Un Œdème unilatéral du membre inférieur 2. Une diminution du ballottement du mollet 3. Un membre chaud 4. Un érythème (rougeur) avec des lésions vésiculeuses sur le membre",
        options: [
          "1, 3, 4",
          "2, 3, 4",
          "1, 2, 3",
          "1, 2, 3, 4",
          "aucun"
        ],
        correctOptionIndexes: [2],
        explanation: "Identique à la question précédente. Les signes de TVP sont l'œdème unilatéral, le mollet dur (diminution ballottement) et le membre chaud."
      },
      {
        questionText: "parmi les propositions suivantes laquelle est une micro angiopathie :",
        options: [
          "coronarite",
          "AVC",
          "HTA",
          "rétinopathie",
          "infarctus du myocarde"
        ],
        correctOptionIndexes: [3],
        explanation: "La rétinopathie (atteinte des petits vaisseaux de la rétine) est une microangiopathie (typiquement diabétique ou hypertensive). Les autres sont des atteintes de 'gros' vaisseaux (macroangiopathie)."
      },
      {
        questionText: "Les facteurs de risque de survenue d'une MTEV sont : (cochez la réponse juste): 1- La grossesse et la contraception orale oestro-progestative 2- Le cancer 3- La chimiothérapie 4- La prothèse de hanche",
        options: [
          "(1, 4)",
          "(2, 3)",
          "(1, 2, 4)",
          "aucune réponse",
          "toutes les réponses"
        ],
        correctOptionIndexes: [4],
        explanation: "Tous ces facteurs augmentent le risque de MTEV (Thrombose) : Grossesse/Pilule (état d'hypercoagulabilité), Cancer/Chimiothérapie (idem), et Chirurgie orthopédique lourde (prothèse de hanche, alitement)."
      },
      {
        questionText: "L’index de pression systolique (RJ) :",
        options: [
          "Indique Ia présence de lésion artérielle obstructive",
          "Se mesure chez le sujet couche",
          "Se mesure à l'aide d'un scanner",
          "Permet le diagnostic de la thrombose veineuse",
          "A une valeur normale comprise entre 1 et 2 ."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'IPS (Index de Pression Systolique) compare la pression artérielle à la cheville et au bras. Il se mesure couché. Un IPS < 0.9 signe une Artériopathie Oblitérante des Membres Inférieurs (AOMI) (lésion obstructive). Sa valeur normale est entre 0.9 et 1.3."
      },
      {
        questionText: "Les facteurs augmentant le risque de thrombose veineuse profonde sont : (RJ)",
        options: [
          "Hypertension artérielle",
          "Traitement par œstrogène",
          "Néoplasie abdominale",
          "Varices",
          "Chirurgie"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Facteurs de risque de TVP : Traitement par œstrogène, cancer (néoplasie), varices (stase veineuse), chirurgie (alitement, inflammation)."
      },
      {
        questionText: "Le risque immédiat d'une thrombose veineuse profonde est :",
        options: [
          "La gangrène",
          "L'ulcère",
          "L'embolie pulmonaire,",
          "Le syndrome post-phlébitique",
          "La contagion"
        ],
        correctOptionIndexes: [2],
        explanation: "La complication aiguë et la plus grave de la thrombose veineuse (phlébite) est la migration du caillot vers les poumons, provoquant une embolie pulmonaire, qui peut être mortelle."
      }
    ]
  },
  {
    title: "INFECTIONS DES VAS",
    subject: "patho-medical",
    questions: [
      {
        questionText: "le traitement des infections de voies aériennes supérieures (VAS) (coches la réponse juste):",
        options: [
          "L'infection virale nécessite une antibiothérapie",
          "Le meilleur prise en charge d'une épidémie d'infection des VAS reste la prévention",
          "Le traitement d'une surinfection bactérienne est basé sur les corticoïdes",
          "L'antibiotique de première intention est la vancomycine",
          "Les séances d'inhalation sont contre indiquées"
        ],
        correctOptionIndexes: [1],
        explanation: "Les infections des VAS sont majoritairement virales. Le traitement est symptomatique, et la prévention (lavage des mains, vaccin grippal) est essentielle. Les antibiotiques ne sont utilisés qu'en cas de surinfection bactérienne (Amoxicilline en 1ère intention)."
      },
      {
        questionText: "Citer les mesures préventive de la transmission des infections des voies aériennes Supérieures (cocher la réponse fausse)",
        options: [
          "Lavage des mains.",
          "Le port de bavette.",
          "Vaccin anti grippal,",
          "Arrêt du tabac,",
          "éviction des allergènes."
        ],
        correctOptionIndexes: [4],
        explanation: "L'éviction des allergènes prévient les rhinites allergiques, mais pas les infections des VAS (virales/bactériennes). Les autres mesures sont correctes."
      },
      {
        questionText: "citer les principaux symptômes non spécifique d'une infection des VAS: (cochez la réponse fausse):",
        options: [
          "rhinorrhée",
          "toux sèche ou productive",
          "symptômes généraux, asthénie fièvre",
          "myalgies",
          "mal de gorge ou odynophagie"
        ],
        correctOptionIndexes: [1],
        explanation: "La rhinorrhée (nez qui coule), le mal de gorge et la fièvre sont des signes non spécifiques d'atteinte HAUTE (VAS). La toux productive oriente plus vers une atteinte BASSE (bronchite, pneumonie)."
      },
      {
        questionText: "La rhinopharyngite (cocher la réponse fausse)",
        options: [
          "Est une atteinte inflammatoire du pharynx et des fosses nasales.",
          "Touche le plus souvent les enfants de moins de 6 ans.",
          "Est toujours d'origine bactérienne.",
          "Peut se manifester par une rhinorrhée et fièvre",
          "A une évolution spontanément favorable."
        ],
        correctOptionIndexes: [2],
        explanation: "La rhinopharyngite ('rhume') est quasi-exclusivement d'origine VIRALE, surtout chez l'enfant. Elle est bénigne et guérit spontanément."
      },
      {
        questionText: "Le traitement antibiotique de 1ère intention de la sinusite maxillaire aiguë de l'adulte est (cocher la réponse juste).",
        options: [
          "Amoxicilline.",
          "Métronidazole.",
          "Azithromycine.",
          "Acyclovir.",
          "Ciprofloxacine."
        ],
        correctOptionIndexes: [0],
        explanation: "En cas de suspicion de sinusite maxillaire bactérienne, l'Amoxicilline (ou l'association Amoxicilline-Acide Clavulanique) est l'antibiotique de première intention."
      },
      {
        questionText: "La rhinopharyngite (RJS):",
        options: [
          "Est une atteinte inflammatoire du pharynx et des fosses nasales",
          "Touche le plus souvent les enfants de moins de 6 ans",
          "Est toujours d'origine bactérienne",
          "Peut se manifester par une rhinorrhée et fièvre",
          "A une évolution spontanément favorable"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La rhinopharyngite est virale (C est faux), touche le pharynx/fosses nasales (A), surtout l'enfant (B), donne fièvre/rhinorrhée (D) et guérit seule (E)."
      },
      {
        questionText: "Les complications sévères de l'otite moyenne aiguë sont (RJS):",
        options: [
          "Mastoidite",
          "Hématome sous dural",
          "Abcès sous périosté",
          "Méningite",
          "Labyrinthite"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "L'otite moyenne aiguë (OMA) peut se compliquer par extension de l'infection : Mastoïdite (os derrière l'oreille), Labyrinthite (oreille interne), Méningite (cerveau), ou abcès."
      },
      {
        questionText: "Qu'est-ce que le 'Test de Diagnostic Rapide' (TDR) pour l'angine ?",
        options: [
          "Un test sanguin pour la Mononucléose",
          "Un prélèvement de gorge pour savoir si l'angine est virale ou bactérienne (Streptocoque A)",
          "Une radiographie des sinus",
          "Un test d'allergie",
          "Un test de dépistage de la grippe"
        ],
        correctOptionIndexes: [1],
        explanation: "Le TDR Angine est un test fait au cabinet sur prélèvement de gorge pour détecter la présence du Streptocoque A. Si positif -> Antibiothérapie. Si négatif -> Viral -> Pas d'antibiotiques."
      },
      {
        questionText: "La sinusite maxillaire d'origine dentaire est une complication fréquente. Quels sont les signes évocateurs ? (RJS)",
        options: [
          "Une douleur sous-orbitaire unilatérale",
          "Une rhinorrhée purulente unilatérale",
          "Une cacosmie (mauvaise odeur perçue par le patient)",
          "Des antécédents de soins sur une molaire ou prémolaire maxillaire du même côté",
          "Fièvre"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "La sinusite maxillaire d'origine dentaire est typiquement unilatérale (A, B), avec une rhinorrhée fétide (cacosmie) (C), et un contexte dentaire (D). La fièvre (E) est fréquente."
      },
      {
        questionText: "Quelle est la principale complication d'une angine à Streptocoque A non traitée ?",
        options: [
          "Le Rhumatisme Articulaire Aigu (RAA)",
          "La sinusite chronique",
          "La bronchite",
          "La rhinopharyngite",
          "La surdité"
        ],
        correctOptionIndexes: [0],
        explanation: "Le traitement antibiotique de l'angine à Streptocoque A vise principalement à prévenir les complications post-streptococciques graves, notamment le Rhumatisme Articulaire Aigu (RAA) et la Glomérulonéphrite."
      }
    ]
  },
  {
    title: "Maladie Ulcéreuse et SII",
    subject: "patho-medical",
    questions: [
      {
        questionText: "l'ulcère duodénal est définis (cochez la réponse juste)",
        options: [
          "siège à la face antérieur est hémorragique",
          "forme essentiellement linéaire",
          "biopsie et contrôle systématique",
          "le FOGD est indiqué si existence de facteur de risque au complications",
          "peut se compliquer de cancer gastrique"
        ],
        correctOptionIndexes: [3],
        explanation: "L'ulcère duodénal ne dégénère jamais en cancer (E faux), les biopsies ne sont pas systématiques (C faux). La FOGD est indiquée pour le diagnostic et en cas de complications."
      },
      {
        questionText: "le traitement du Syndrome du colon stable (cocher la réponse fausse)",
        options: [
          "Repose sur le régime sans résidus",
          "Repose sur l'activité physique",
          "est symptomatique",
          "repose sur des mesures sédatives",
          "éviter les brocolis"
        ],
        correctOptionIndexes: [4],
        explanation: "Le traitement du SII est symptomatique, incluant des règles hygiéno-diététiques. Les brocolis (riches en FODMAPs) sont souvent à éviter. Un régime sans résidus (A) est parfois proposé."
      },
      {
        questionText: "dans le syndrome du côlon Irritable, les examens complémentaires sont réalisés 1. pour éliminer une maladie organique 2. pour confirmer le diagnostic 3. sont normaux 4. la coproculure n’est pas recommandée",
        options: [
          "A : 1, 2, 3",
          "B : 1, 3, 4",
          "c : 1, 2",
          "D : 1, 2, 3, 4"
        ],
        correctOptionIndexes: [1],
        explanation: "Le diagnostic du SII est un diagnostic d'exclusion (1). Les examens (biologie, coloscopie) sont normaux (3) et visent à éliminer une maladie organique. La coproculture n'est pas un examen de routine (4)."
      },
      {
        questionText: "le diagnostic du Syndrome du colon irritable est : 1- purement clinique 2- radiologique 3- biologique 4- diagnostic d'exclusion",
        options: [
          "a: 1, 2, 4",
          "b: 2, 3, 4",
          "c: 1, 3, 4",
          "d: 1, 4",
          "e: 1, 2, 3"
        ],
        correctOptionIndexes: [3],
        explanation: "Le diagnostic est basé sur les critères cliniques (Rome IV) (1) et sur l'absence d'anomalies aux examens complémentaires (diagnostic d'exclusion) (4)."
      },
      {
        questionText: "Signes cliniques d'alarmes qui font rechercher une maladie organique avant de poser le diagnostic du syndrome de l'intestin Irritable : (cochez la réponse juste)",
        options: [
          "Age < 50 ans",
          "Amaigrissement",
          "Aggravation des symptômes",
          "Présence de sang dans les selles",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'amaigrissement, l'aggravation récente, le sang dans les selles (rectorragies), ou un début des symptômes après 50 ans sont des 'drapeaux rouges' (red flags) qui imposent des explorations."
      },
      {
        questionText: "Dans le traitement du Syndrome de l'intestin irritable (cochez la réponse fausse) :",
        options: [
          "Il repose sur le régime sans gluten",
          "Une psychothérapie est recommandée",
          "Il est symptomatique",
          "il y a une indication aux antidépresseurs",
          "Un régime pauvre en gras et riche en fibres est préconisé"
        ],
        correctOptionIndexes: [0],
        explanation: "Le régime sans gluten n'est pas recommandé en première intention, sauf si une sensibilité est prouvée. On recommande plutôt un régime pauvre en FODMAPs. Les autres options sont correctes."
      },
      {
        questionText: "Le diagnostic différentiel des Ulcères gastroduodénaux se pose avec :",
        options: [
          "pancréatite",
          "syndrome coronarien",
          "cancer gastrique",
          "syndrome de Zollinger-Ellison",
          "toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Une douleur épigastrique peut mimer une pancréatite, un infarctus (syndrome coronarien), ou un cancer gastrique. Le Zollinger-Ellison est une cause rare d'ulcères multiples."
      },
      {
        questionText: "Dans l'ulcère duodénal : (cochez la réponse juste) :",
        options: [
          "Il siège à la face antérieure est hémorragique",
          "Sa forme est essentiellement linéaire",
          "La biopsie et le contrôle est systématique",
          "la FOGD est indiquée si existence de facteur de risque ou de complications",
          "se transforme en cancer"
        ],
        correctOptionIndexes: [3],
        explanation: "L'ulcère duodénal ne dégénère jamais (E faux). Les biopsies ne sont pas systématiques (C faux) car il est bénin, contrairement à l'ulcère gastrique."
      },
      {
        questionText: "Dans l'Ulcère gastroduodénal : (cochez la réponse fausse) :",
        options: [
          "L'ulcère gastrique peut se compliquer de cancer gastrique",
          "Le traitement utilisé est les anti sécrétoires",
          "La douleur est de siège péri-ombilical",
          "La douleur est rythmée par les repas",
          "Peut se compliquer d'hémorragies digestives"
        ],
        correctOptionIndexes: [2],
        explanation: "La douleur de l'ulcère est typiquement ÉPIGASTRIQUE ('creux de l'estomac'), et non péri-ombilicale."
      },
      {
        questionText: "Les complications possibles de l'ulcère gastroduodénal sont (RF) :",
        options: [
          "Cancérisation",
          "Hémorragie digestive",
          "Reflux gastro-œsophagien",
          "Perforation digestive",
          "Sténose duodénale"
        ],
        correctOptionIndexes: [2],
        explanation: "Les 4 complications classiques de l'ulcère sont : Hémorragie, Perforation, Sténose (cicatrisation fibreuse) et Cancérisation (uniquement pour l'ulcère gastrique). Le RGO est une pathologie différente."
      },
      {
        questionText: "La colopathie fonctionnelle est évoquée en cas de (cocher la réponse fausse)",
        options: [
          "Douleurs abdominales",
          "Troubles du transit",
          "Ballonnement abdominal",
          "Présence d'hémorroïdes",
          "Dyspepsie"
        ],
        correctOptionIndexes: [3],
        explanation: "Les hémorroïdes sont une pathologie proctologique fréquente mais ne font pas partie des critères diagnostiques du SII (colopathie fonctionnelle), qui associe douleurs, ballonnements et troubles du transit."
      },
      {
        questionText: "Tous ces traitements sont prescrits en cas de colopathie fonctionnelle (cocher la réponse fausse)",
        options: [
          "Laxatifs osmotiques",
          "Antispasmodiques",
          "Corticoïdes",
          "Antidépresseurs tricycliques",
          "Antisécrétoires"
        ],
        correctOptionIndexes: [2],
        explanation: "Le SII n'est pas une maladie inflammatoire. Les corticoïdes n'ont aucune indication et sont contre-indiqués. On utilise des antispasmodiques, laxatifs ou antidiarrhéiques, et parfois des antidépresseurs à faible dose pour la douleur."
      },
      {
        questionText: "Le diagnostic de colopathie fonctionnelle est évoqué devant (RJS)",
        options: [
          "Masse abdominale",
          "Ballonnement abdominal",
          "Troubles de transit",
          "Hémorroïdes",
          "Dyspepsie"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La triade classique est : Douleur abdominale, Troubles du transit (constipation, diarrhée ou alternance), et Ballonnements. La dyspepsie (gêne digestive haute) est souvent associée."
      }
    ]
  },
  {
    title: "MICI (Maladies Inflammatoires Chroniques de l'Intestin)",
    subject: "patho-medical",
    questions: [
      {
        questionText: "L'examen histologique de la maladie de crohn retrouve :",
        options: [
          "Un granulome tuberculoïde sans nécrose caséeuse",
          "Un granulome tuberculoide avec nécrose caséeuse",
          "Les lésions sièges au niveau du colon seulement",
          "Des lésions continues, uniformes et homogènes",
          "Un infiltrat lympho-plasmocytaire"
        ],
        correctOptionIndexes: [0],
        explanation: "La lésion histologique pathognomonique (mais inconstante) de la Maladie de Crohn est le granulome giganto-épithélioïde sans nécrose caséeuse (ce qui la différencie de la tuberculose)."
      },
      {
        questionText: "La recto-colite hémorragique se présente cliniquement par :",
        options: [
          "Fissures anales",
          "Occlusion intestinale",
          "Diarrhée chronique associée à un syndrome dysentérique chronique",
          "Fistules anales",
          "Abcès profond"
        ],
        correctOptionIndexes: [2],
        explanation: "La RCH se manifeste par un syndrome dysentérique (diarrhée glairo-sanglante, épreintes, ténesme) car l'inflammation touche le rectum et le côlon. Les complications anales (fissures, fistules) sont typiques de Crohn."
      },
      {
        questionText: "La rectocolite ulcéro-Hémorragique (RJS):",
        options: [
          "Est d'étiologie indéterminée",
          "Touche surtout les sujets âgés",
          "Atteint constamment la muqueuse rectale",
          "Est une affection aigue",
          "Évolue en poussées entrecoupées de Rémission"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La RCH est une maladie chronique (D faux), d'origine inconnue (A), qui évolue par poussées/rémissions (E). Elle débute TOUJOURS au rectum (C) et remonte. Elle touche le sujet jeune (B faux)."
      },
      {
        questionText: "Les maladies inflammatoires chroniques de l'intestin se manifeste par (RJS) :",
        options: [
          "Sacro-iléite",
          "Erythème noueux",
          "Colites infectieuses",
          "Uvéite antérieure",
          "Néoplasie hépatique"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les MICI (Crohn, RCH) ont des manifestations extra-digestives : articulaires (Sacro-iléite), cutanées (Erythème noueux), et oculaires (Uvéite)."
      },
      {
        questionText: "En cas de fistule anale, le diagnostic le plus probable est (RJ) :",
        options: [
          "Une amibiase.",
          "Une colite hémorragique.",
          "Une maladie de Crohn.",
          "Une giardiase",
          "Une maladie de Whipple"
        ],
        correctOptionIndexes: [2],
        explanation: "Les lésions proctologiques (fissures, abcès, fistules anales) sont très fréquentes et caractéristiques de la maladie de Crohn. Elles sont absentes dans la RCH."
      },
      {
        questionText: "La recto-colite ulcéro-hémorragique (cocher la réponse fausse) :",
        options: [
          "Est d'étiologie indéterminée.",
          "Touche Surtout les sujets très âgés",
          "Atteint constamment la muqueuse rectale",
          "Est une affection de longue durée.",
          "Évolue en poussées entrecoupées de rémissions."
        ],
        correctOptionIndexes: [1],
        explanation: "La RCH (comme Crohn) est une maladie du sujet jeune, avec un pic de diagnostic entre 15 et 30 ans."
      },
      {
        questionText: "Quelle(s) caractéristique(s) distingue(nt) la Maladie de Crohn de la RCH ? (RJS)",
        options: [
          "Atteinte transmurale (toute l'épaisseur de la paroi)",
          "Atteinte possible de tout le tube digestif (de la bouche à l'anus)",
          "Lésions discontinues (intervalles de muqueuse saine)",
          "Présence de granulome à la biopsie",
          "Absence d'atteinte rectale"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Crohn : Transmurale, tout le tube digestif, discontinue (skip lesions), granulome, respecte souvent le rectum. RCH : Muqueuse, colon uniquement, continue, pas de granulome, atteinte rectale constante."
      },
      {
        questionText: "Le risque principal à long terme de la RCH et de la colite de Crohn est :",
        options: [
          "La sténose intestinale",
          "La fistule",
          "Le cancer colorectal",
          "L'appendicite",
          "L'ulcère duodénal"
        ],
        correctOptionIndexes: [2],
        explanation: "L'inflammation chronique du côlon (colite) dans les deux maladies augmente significativement le risque de dysplasie et de cancer colorectal, justifiant une surveillance par coloscopie régulière."
      },
      {
        questionText: "Le traitement de fond des MICI (poussées modérées à sévères) repose sur : (RJS)",
        options: [
          "Antibiothérapie au long cours",
          "Antispasmodiques",
          "Immunosuppresseurs (ex: Azathioprine) ou Biothérapies (Anti-TNF)",
          "Laxatifs",
          "Régime sans gluten"
        ],
        correctOptionIndexes: [2],
        explanation: "Le traitement vise à contrôler l'inflammation. Il utilise des corticoïdes en crise, puis des traitements de fond comme les immunosuppresseurs (Azathioprine) ou les biothérapies (Anti-TNF) pour maintenir la rémission."
      },
      {
        questionText: "Quelles sont les manifestations buccales possibles de la Maladie de Crohn ? (RJS)",
        options: [
          "Aphtose buccale majeure",
          "Hyperplasie gingivale",
          "Ulcérations linéaires 'en rail'",
          "Chéilite granulomateuse (gonflement des lèvres)",
          "Candidose"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La maladie de Crohn peut débuter ou se manifester dans la bouche par des aphtes profonds, des ulcérations spécifiques (en rail), un aspect de 'pavés' sur la muqueuse, ou un gonflement des lèvres (chéilite)."
      }
    ]
  },
  {
    title: "HTA ET AVC",
    subject: "patho-medical",
    questions: [
      {
        questionText: "Quels sont les complications de l'hypertension artérielle (Coches la réponse fausse)",
        options: [
          "les troubles du rythme cardiaque",
          "la thrombophlébite",
          "les accidents vasculaires cérébraux",
          "l'insuffisance rénale",
          "la cécité"
        ],
        correctOptionIndexes: [1],
        explanation: "L'HTA est une maladie ARTÉRIELLE. La thrombophlébite est une maladie VEINEUSE, non directement liée à l'HTA. L'HTA complique le cœur (troubles rythme), le cerveau (AVC), le rein (insuffisance rénale) et l'œil (cécité par rétinopathie)."
      },
      {
        questionText: "Quels sont les classes thérapeutiques disponibles pour l'hypertension artérielle? (Coches la réponse fausse)",
        options: [
          "Les inhibiteurs de l'enzyme de conversion de l'angiotensine",
          "les inhibiteurs des canaux ioniques",
          "les bêtabloquants",
          "les diurétiques",
          "les inhibiteurs centraux"
        ],
        correctOptionIndexes: [1],
        explanation: "Les classes majeures incluent IEC, Diurétiques, Bêtabloquants, Inhibiteurs Calciques (et non 'ioniques' en général), et ARA II. Les inhibiteurs centraux existent mais sont moins utilisés."
      },
      {
        questionText: "L'hypertension artérielle (cochez la réponse fausse)",
        options: [
          "Peut se compliquer d'hémorragie cérébrale",
          "Peut se compliquer d'AVC ischémique",
          "La MAPA est indispensable au diagnostic",
          "Peut entraîner une rétinopathie",
          "Peut être associée à une insuffisance rénale"
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagnostic de l'HTA se fait par des mesures répétées au cabinet. La MAPA (Mesure Ambulatoire) ou l'automesure sont utiles pour confirmer le diagnostic (éliminer 'blouse blanche') mais pas indispensables."
      },
      {
        questionText: "Les seuils de pression artérielle qui définissent l'hypertension sont:",
        options: [
          "PAS > 160 mmHg et/ou PAD > 100 mmHg au cabinet médicale",
          "PAS > 135 mmHg et/ou PAD > 85 mmHg en automesure",
          "PAS > 135 mmHg et/ou PAD > 80 mmHg à la MAPA en éveil",
          "PAS > 120 mmHg et/ou PAD > 70 à la MAPA en Sommeil",
          "PAS > 180 mmHg et/ou PAD > 110 mmHg au cabinet médicale"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les seuils sont : ≥ 140/90 en consultation, ≥ 135/85 en automesure, ≥ 130/80 en MAPA sur 24h (ou 135/85 en éveil (C est faux) et 120/70 en sommeil (D est juste))."
      },
      {
        questionText: "L'hypertension artérielle masquée est définie par ::",
        options: [
          "Une pression artérielle élevée en consultation",
          "Une pression artérielle normale en ambulatoire",
          "Une pression artérielle normale en ambulatoire et élevée en consultation",
          "Une pression artérielle élevée en ambulatoire et normale en consultation",
          "L'absence d'hypertension artérielle"
        ],
        correctOptionIndexes: [3],
        explanation: "HTA 'masquée' : le patient est normal au cabinet (rassuré) mais hypertendu dans sa vie quotidienne (mesures ambulatoires élevées). C'est l'inverse de l'effet 'blouse blanche'."
      },
      {
        questionText: "Quels sont les effets de l'hypertension artérielle sur les organes suivants : 1. Le cœur 2. Le cerveau 3. Les reins",
        options: [
          "1: Cardiopathie ischémique, IVG",
          "2: AVC ischémique, Hémorragie cérébrale",
          "3: Insuffisance rénale",
          "Toutes ces réponses sont justes",
          "Aucune de ces réponses"
        ],
        correctOptionIndexes: [3],
        explanation: "L'HTA atteint ses 'organes cibles' : Cœur (Hypertrophie, insuffisance, cardiopathie ischémique), Cerveau (AVC), Rein (Néphroangiosclérose, insuffisance rénale)."
      },
      {
        questionText: "Dans l'hypertension artérielle : (cochez la réponse juste) :: 1- Faut s'assurer que le patient ne prends ni anticoagulant ni aspirine avant toute intervention chirurgicale 2- Prescrire des anesthésiques vasoconstricteurs 3- Préférer un anesthésique à base d'épinéphrine 4- procéder à la levée progressive de la chaise dentaire 5- éviter de prescrire des sédatifs",
        options: [
          "(1, 2, 3)",
          "(1, 3, 5)",
          "(2, 3, 4)",
          "(1, 3, 4)",
          "(1, 3)"
        ],
        correctOptionIndexes: [3],
        explanation: "1- L'HTA est souvent associée à des traitements (Aspirine), à vérifier. 3- L'épinéphrine est préférable (meilleure hémostase, anesthésie plus profonde) mais en quantité limitée. 4- Lever progressif pour éviter l'hypotension orthostatique (due aux médicaments)."
      },
      {
        questionText: "Ces signes cliniques sont évocateurs d'un AVC (cochez la réponse fausse)",
        options: [
          "Paralysie du visage",
          "Céphalées",
          "Vertiges",
          "Troubles de l'audition",
          "hypertension artérielle"
        ],
        correctOptionIndexes: [3],
        explanation: "Les signes d'AVC sont : Paralysie faciale, troubles de la parole, faiblesse d'un membre, troubles de la vue, vertiges, céphalées intenses. Les troubles de l'audition ne sont pas un signe typique."
      },
      {
        questionText: "Ces signes cliniques sont évocateurs d'un AVC (cochez la réponse fausse)",
        options: [
          "Paralysie du visage",
          "Céphalées",
          "Troubles de la parole",
          "Troubles de l'audition",
          "Vertiges violents"
        ],
        correctOptionIndexes: [3],
        explanation: "Identique à la question précédente. Les troubles de l'audition sont rares et non spécifiques d'un AVC."
      },
      {
        questionText: "Les causes d'accident vasculaire cérébral hémorragiques sont",
        options: [
          "Malformation vasculaire",
          "Athérosclérose",
          "Thrombose veineuse cérébrale",
          "Hypertension artérielle",
          "Accident vasculaire cérébral ischémique"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'AVC hémorragique est dû à la rupture d'un vaisseau. Causes : HTA (principale), malformation vasculaire (anévrisme), thrombose veineuse. L'athérosclérose (B) cause les AVC ISCHÉMIQUES."
      },
      {
        questionText: "L'hypertension artérielle est favorisée par (RJ)",
        options: [
          "Un régime riche en lipides",
          "Un régime pauvre en sel",
          "Un régime riche en fruits et légumes",
          "Une surcharge pondérale",
          "Une forte pression professionnelle"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Facteurs favorisant l'HTA : Régime riche en lipides (A) et en sel (B est faux), surcharge pondérale (D), stress (pression professionnelle) (E). Un régime riche en fruits/légumes est protecteur (C est faux)."
      }
    ]
  }
];

module.exports = pathoMedicalQuizzes;