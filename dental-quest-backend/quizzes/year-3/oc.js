// quizzes/year-3/oc.js

const ocQuizzes = [
  {
    title: "Moyens et conduite diagnostique",
    subject: "oc",
    questions: [
      {
        questionText: "Quel test permet d’évaluer la vitalité pulpaire ?",
        options: [
          "Test de mobilité dentaire",
          "Test de sensibilité électrique (EPT)",
          "Test de morsure",
          "Radiographie rétroalvéolaire",
          "Palpation au fond du vestibule en regard de l’apex de la dent causale"
        ],
        correctOptionIndexes: [1],
        explanation: "L’EPT mesure la réponse nerveuse de la pulpe à une stimulation électrique. C’est un test de vitalité qui permet de différencier une pulpe vivante d’une pulpe nécrosée."
      },
      {
        questionText: "Quelle méthode permet de détecter les lésions proximales non cavitaires ?",
        options: [
          "Passage du fil dentaire ciré",
          "Passage du fil dentaire non ciré",
          "Test à la percussion",
          "Test du cône de gutta",
          "Test de cavité"
        ],
        correctOptionIndexes: [1],
        explanation: "Le fil dentaire non ciré permet de détecter un accrochage entre les dents, signe de déminéralisation ou de lésion proximale débutante."
      },
      {
        questionText: "Quelle est la principale utilité de la transillumination ?",
        options: [
          "Détecter les lésions occlusales précoces",
          "Diagnostiquer les lésions carieuses proximales",
          "Diagnostiquer les fêlures dentaires",
          "Tester la sensibilité pulpaire"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La transillumination utilise une lumière dirigée pour révéler les variations de structure. Les zones déminéralisées (caries proximales) ou fissurées apparaissent plus sombres."
      },
      {
        questionText: "Le test de cavité est…",
        options: [
          "Réalisé à l’aide de la sonde parodontale",
          "Réalisé à l’aide de la sonde exploratrice",
          "Un test invasif",
          "Un test non invasif"
        ],
        correctOptionIndexes: [2],
        explanation: "Il est effectué sans anesthésie, à l’aide d’un contre-angle. Le test au fraisage est réalisé en dernier recours, quand les autres tests ne sont pas concluants."
      },
      {
        questionText: "Le test du cône de gutta est utilisé pour le diagnostic de...",
        options: [
          "Parodontite apicale aiguë",
          "Kyste radiculo-dentaire",
          "Granulome",
          "Parodontite apicale chronique avec fistule",
          "Pulpite"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cône de gutta percha est inséré dans le trajet d'une fistule pour suivre son origine jusqu'à la dent causale, ce qui est visible sur une radiographie."
      }
    ]
  },
  {
    title: "Désinfection, stérilisation, asepsie et antisepsie",
    subject: "oc",
    questions: [
      {
        questionText: "Un gant de consultation non contaminé par du sang ou de la salive est à mettre dans :",
        options: [
          "Les sacs de déchets d’activité de soins biologiques et/ou infectieux (DASRI)",
          "Les sacs de déchets ménagers et assimilés (DMA)",
          "Les conteneurs de déchets d’activité de soins biologiques et/ou infectieux (DASRI)",
          "Les sacs de déchets d’activité de soins à risque chimiques et/ou toxiques (DRCT)"
        ],
        correctOptionIndexes: [1],
        explanation: "Les gants non souillés par des produits biologiques sont considérés comme des déchets ménagers et ne nécessitent pas un traitement DASRI."
      },
      {
        questionText: "Avant la réalisation d’un acte opératoire, un bain de bouche :",
        options: [
          "Permet la désinfection de ce champ opératoire",
          "Assure l’antisepsie du champ opératoire",
          "Est réalisé en utilisant de la chlorhexidine",
          "Est réalisé en utilisant un aldéhyde"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le bain de bouche préopératoire assure l'antisepsie (réduction temporaire des micro-organismes sur les tissus vivants) et la chlorhexidine est l’antiseptique de choix pour cet usage."
      },
      {
        questionText: "Quels déchets font partie des DASRI (Déchets d'Activités de Soins à Risques Infectieux) ?",
        options: [
          "Déchets piquants/coupants",
          "Matériaux et médicaments périmés",
          "Déchets anatomiques",
          "Déchets radioactifs",
          "Déchets mercuriels"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les DASRI incluent les objets piquants/tranchants, les produits sanguins, et les déchets anatomiques humains. Les déchets radioactifs et mercuriels suivent des filières d'élimination spécifiques."
      },
      {
        questionText: "Une infection nosocomiale est une infection contractée :",
        options: [
          "Dans un établissement de santé",
          "Dans les 6 heures qui suivent un traitement dentaire",
          "Dans un délai d’au moins 48 h après le début de la prise en charge hospitalière",
          "Dans un délai de 2 mois après une intervention chirurgicale sans implantation"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Toute infection apparaissant au moins 48 heures après l'admission dans un établissement de santé est considérée comme nosocomiale. Pour un site opératoire, le délai est de 30 jours (ou 1 an avec implant)."
      },
      {
        questionText: "La stérilisation à l’autoclave a pour avantages :",
        options: [
          "L’efficacité non absolue",
          "Une température de stérilisation peu élevée (134 °C)",
          "Un conditionnement possible",
          "Une rapidité d’action"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L’autoclave assure une stérilisation fiable et absolue, à une température modérée (121°C ou 134°C), avec une action rapide et la possibilité de stériliser du matériel préalablement conditionné."
      }
    ]
  },
  {
    title: "Les atteintes pulpo-dentinaires",
    subject: "oc",
    questions: [
      {
        questionText: "Dans la lésion à progression rapide :",
        options: [
          "La destruction des odontoblastes est rapide",
          "Le cerne léteux de Marmasse est caractéristique",
          "La production d’acides issus du métabolisme est faible",
          "Les caries cachées représentent la caractéristique"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les lésions à progression rapide entraînent une destruction pulpo-dentinaire accélérée avec une production d'acides intense, une présence fréquente de caries cachées, et le cerne léteux est un signe histologique associé."
      },
      {
        questionText: "Dans les caries débutantes :",
        options: [
          "La dentine subit seulement une déminéralisation circonscrite",
          "L’infection bactérienne y est limitée superficiellement",
          "Les interventions non invasives sont privilégiées",
          "La déminéralisation progresse verticalement sous la JAD"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Dans les caries débutantes, la déminéralisation est limitée et superficielle, ce qui permet des approches thérapeutiques non invasives. La progression se fait latéralement sous la JAD."
      },
      {
        questionText: "Dans la classification Si/Sta, le stade 0 :",
        options: [
          "Est un stade réversible",
          "Lésion initiale active, superficielle",
          "Lésion sans cavitation, strictement amélaire",
          "Lésion nécessitant une intervention restauratrice",
          "Lésion nécessitant un traitement préventif non invasif"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Le stade 0 (lésion initiale) est réversible, sans cavitation et strictement amélaire. Il est traité par des mesures préventives non invasives, sans besoin d’intervention restauratrice."
      },
      {
        questionText: "Dans le cas de la dentinite (1/3 externe de la dentine) :",
        options: [
          "Les douleurs sont provoquées non durables.",
          "Les douleurs sont provoquées durables.",
          "Les douleurs sont spontanées.",
          "Il n’y a pas de douleurs spontanées."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La dentinite superficielle se manifeste par des douleurs brèves (non durables), déclenchées par un stimulus, sans douleur spontanée."
      }
    ]
  },
  {
    title: "Sensibilité et hyperesthésie dentinaire",
    subject: "oc",
    questions: [
      {
        questionText: "Les facteurs prédisposant à l’hypersensibilité dentinaire sont :",
        options: [
          "La perte de dentine par érosion, abrasion, attrition et/ou abfraction",
          "La mise à nu de la pulpe",
          "La perte de la couche de boue dentinaire qui recouvre la dentine exposée",
          "La perte du cément suite à une récession gingivale et exposition de la dentine"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L’hypersensibilité dentinaire est favorisée par la disparition de la boue dentinaire protectrice et par l’exposition de la dentine radiculaire (suite à la perte du cément) après une récession gingivale."
      },
      {
        questionText: "Le principe du traitement de l’hypersensibilité dentinaire est basé sur :",
        options: [
          "Une modification de la réponse nerveuse pulpaire",
          "Exacerbation de la réponse nerveuse pulpaire",
          "Une obliteration des tubuli dentinaires",
          "Une altération du mouvement de fluide intra-tubulaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le traitement vise à réduire la conduction nerveuse (modifier la réponse) et/ou à limiter le mouvement de fluide dans les tubuli (altération), conformément à la théorie hydrodynamique."
      },
      {
        questionText: "L’hypersensibilité dentinaire :",
        options: [
          "Peut être déclenchée par une perte cimentaire cervicale",
          "Peut être causée par un éclaircissement dentaire",
          "Est expliquée par la théorie de Brännström",
          "Peut être à l’origine d’une atteinte pulpaire algique aux stades avancés"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les étiologies de l’hyperesthésie dentinaire sont multiples. La théorie hydrodynamique de Brännström explique le rôle des mouvements de fluide dans la douleur, qui peut évoluer vers une atteinte pulpaire."
      },
      {
        questionText: "Dans la théorie hydrodynamique de Brännström, les éléments impliqués dans la sensibilité dentinaire sont :",
        options: [
          "Les fibres nerveuses C",
          "Les fibres nerveuses A",
          "Les odontoblastes",
          "Les fluides dentinaires"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le déplacement des fluides dentinaires (fluides intra-tubulaires) active les fibres nerveuses pulpaires de type A, responsables de la douleur vive et brève."
      }
    ]
  },
  {
    title: "Protection dentino-pulpaire et les coiffages pulpo-dentinaires",
    subject: "oc",
    questions: [
      {
        questionText: "Le coiffage pulpaire direct :",
        options: [
          "Exige que la restauration définitive soit réalisée la même séance",
          "Est réalisé avec le ciment verre ionomère (CVI)",
          "N'est réalisé que si le curetage dentinaire est parfait",
          "Nécessite une hémostase"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le coiffage direct se fait sur une pulpe saine après un curetage parfait et nécessite une hémostase avant d'appliquer le matériau (MTA, Biodentine). La restauration définitive est différée."
      },
      {
        questionText: "Les facteurs influençant la perméabilité dentinaire sont :",
        options: [
          "La présence ou l'absence de la dentine affectée",
          "Le diamètre des tubuli",
          "L'application topique du calcium",
          "La densité des tubuli",
          "La longueur des tubuli"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La perméabilité dentinaire dépend de facteurs structurels comme le diamètre, la densité (nombre par unité de surface) et la longueur des tubuli dentinaires."
      },
      {
        questionText: "Le Biodentine :",
        options: [
          "Est un matériau de restauration",
          "Est biocompatible",
          "Peut être utilisé comme restauration pendant une période de 6 mois",
          "Est un substitut dentinaire"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Biodentine est un substitut dentinaire bioactif et biocompatible. Il peut servir de restauration temporaire jusqu'à 6 mois avant la restauration définitive."
      },
      {
        questionText: "Les indications du coiffage pulpaire direct sont :",
        options: [
          "La pulpotomie",
          "Les caries très profondes (proche de la pulpe)",
          "La mise à nu iatrogène de la pulpe",
          "Les fractures coronaires non pénétrantes"
        ],
        correctOptionIndexes: [2],
        explanation: "L'indication principale du coiffage direct est l'exposition pulpaire accidentelle (iatrogène) sur une pulpe saine. Les caries profondes relèvent du coiffage indirect."
      }
    ]
  },
  {
    title: "Pathologie pulpaire",
    subject: "oc",
    questions: [
      {
        questionText: "Les pulpopathies regroupent :",
        options: [
          "Les pulpites symptomatiques",
          "Les pulpites d’origine iatrogène",
          "La gangrène pulpaire",
          "Le syndrome du septum",
          "Le granulome et les kystes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les pulpopathies correspondent à l’ensemble des affections pulpaires (pulpites, gangrène). Le granulome et les kystes sont des lésions périapicales, et le syndrome du septum est une lésion parodontale."
      },
      {
        questionText: "Le signe pathognomonique de la pulpite aiguë purulente est :",
        options: [
          "L’exacerbation de la douleur en position décubitus",
          "La douleur continue rebelle aux antalgiques",
          "La douleur à la percussion",
          "L’exacerbation de la douleur par le chaud et calmée par le froid",
          "L’exacerbation de la douleur par le froid et sa disparition au chaud"
        ],
        correctOptionIndexes: [3],
        explanation: "Dans la pulpite purulente, l’augmentation de pression intrapulpaire par la chaleur intensifie la douleur, tandis que le froid la soulage transitoirement. C'est un signe pathognomonique."
      },
      {
        questionText: "La pulpite chronique hyperplasique :",
        options: [
          "Évolue uniquement sur les dents permanentes immatures",
          "Évolue le plus souvent sur les dents permanentes matures",
          "Est une forme ouverte",
          "Est une forme fermée",
          "Se caractérise par sa tendance à la nécrose"
        ],
        correctOptionIndexes: [2],
        explanation: "Il s’agit d’une pulpite chronique ouverte (polype pulpaire), rencontrée chez l’enfant et l’adolescent, caractérisée par une pulpe qui prolifère à travers une cavité largement ouverte."
      },
      {
        questionText: "Dans la pulpite aigue séreuse, la douleur est :",
        options: [
          "Spontanée",
          "Provoquée",
          "Pulsatile",
          "Continue",
          "Intermittente"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "La pulpite aiguë séreuse (phase initiale) se manifeste par des douleurs spontanées, intermittentes, qui sont aussi provoquées par des stimuli."
      }
    ]
  },
  {
    title: "Mortification pulpaire",
    subject: "oc",
    questions: [
      {
        questionText: "Quel type de flore bactérienne est majoritairement retrouvé dans une gangrène pulpaire fermée :",
        options: [
          "Aérobie stricts",
          "Anaérobies facultatifs",
          "Anaérobies stricts",
          "Bactéries lactiques"
        ],
        correctOptionIndexes: [2],
        explanation: "La flore des gangrènes fermées est dominée par les anaérobies stricts qui se développent dans le milieu clos, pauvre en oxygène."
      },
      {
        questionText: "La dyschromie associée à une gangrène pulpaire est due à :",
        options: [
          "La nécrose des fibres odontoblastiques dans les canalicules dentinaires",
          "La protéolyse ou dégradation des protéines",
          "La présence de la dentine réactionnelle",
          "La déshydratation de la dent",
          "La pénétration hémorragique des pigments sanguins dans les tubuli dentinaires"
        ],
        correctOptionIndexes: [4],
        explanation: "La coloration est due à l’imprégnation dentinaire par les produits de décomposition des pigments sanguins : hémine (noir bleuâtre), hématoïdine (orange), hématidine (brun foncé)."
      },
      {
        questionText: "Les caractéristiques de la gangrène pulpaire fermée sont :",
        options: [
          "Un pH de 6,2 à 6,8",
          "Elle est peu ou pas odorante",
          "Elle a une flore très riche par rapport à la gangrène ouverte",
          "La dent est laissée ouverte après traitement de son canal"
        ],
        correctOptionIndexes: [1],
        explanation: "La gangrène fermée présente un pH alcalin (8,2–8,4), une flore moins abondante que la gangrène ouverte et une odeur discrète. Le canal ne doit jamais être laissé ouvert."
      },
      {
        questionText: "La gangrène pulpaire est :",
        options: [
          "Une nécrose",
          "Une nécrobiose",
          "Fait suite à une pulpite irréversible",
          "Septique",
          "Caractérisée par son odeur"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La gangrène pulpaire est une nécrose septique (infectée), souvent consécutive à une pulpite irréversible, avec une odeur fétide caractéristique."
      }
    ]
  },
  {
    title: "Insensibilité dentaire (Anesthésie)",
    subject: "oc",
    questions: [
      {
        questionText: "Les conditions nécessaires pour la réalisation des anesthésies locales sont :",
        options: [
          "Un interrogatoire précis",
          "Une éventuelle prémédication à dose modérée chez les patients trop émotifs",
          "L’injection en milieu inflammatoire ou infecté est possible",
          "Disposer d’une source d’oxygène à proximité"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'injection en milieu inflammatoire ou infecté (acide) est à éviter car elle diminue l'efficacité de l'anesthésique et risque de diffuser l'infection."
      },
      {
        questionText: "L’anesthésie de surface :",
        options: [
          "Peut être faite à l’aide d’un cryo-anesthésique",
          "Peut être faite à l’aide d’une crème type Xylocaïne 10 %",
          "Peut être faite par pulvérisation en bouche de chlorure d’éthyle",
          "Peut être appliquée dans le cas de peur de la piqûre de l’aiguille lors d’une injection"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'utilisation du chlorure d’éthyle en pulvérisation directe dans la cavité buccale est contre-indiquée, surtout chez les jeunes enfants."
      },
      {
        questionText: "L’infiltration para-apicale :",
        options: [
          "Est une technique locale",
          "Est une anesthésie de contact",
          "Est réalisée le plus proche du site concerné",
          "Permet d’anesthésier la gencive, la pulpe dentaire et l’os alvéolaire",
          "Permet d’anesthésier les terminaisons nerveuses"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "L'infiltration para-apicale est une anesthésie locale par injection, pas de contact. Elle anesthésie les terminaisons nerveuses et donc les tissus environnants (gencive, pulpe, os)."
      },
      {
        questionText: "Le vasoconstricteur :",
        options: [
          "Modifie le diamètre des vaisseaux sanguins",
          "Est un agent conservateur",
          "Augmente le temps de contact de l’anesthésique local avec le nerf",
          "Est de règle chez tous les patients"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le vasoconstricteur contracte les vaisseaux sanguins, ce qui prolonge l’action de l’anesthésie. Il est contre-indiqué chez certains patients (ex: cardiopathies sévères)."
      }
    ]
  },
  {
    title: "Instrumentation en endodontie",
    subject: "oc",
    questions: [
      {
        questionText: "Les longueurs utilisées pour les instruments normalisés de préparation endodontique manuelle sont :",
        options: [
          "16 mm",
          "21 mm",
          "25 mm",
          "31 mm"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les longueurs standard pour les instruments endodontiques manuels sont généralement de 21 mm, 25 mm et 31 mm."
      },
      {
        questionText: "Quel est l’avantage principal des instruments en nickel-titane :",
        options: [
          "La grande flexibilité",
          "Le prix très abordable",
          "L’utilisation manuelle uniquement",
          "La rigidité"
        ],
        correctOptionIndexes: [0],
        explanation: "Le NiTi est très apprécié pour sa grande flexibilité ('mémoire de forme'), ce qui est particulièrement utile pour la préparation des canaux courbes."
      },
      {
        questionText: "Le foret de Gates :",
        options: [
          "Est un instrument de mise en forme canalaire",
          "Est un instrument en acier inoxydable",
          "Présente une partie active de forme elliptique",
          "Présente une partie active de 16 mm"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le foret de Gates est utilisé pour l’élargissement de l'entrée et du tiers coronaire du canal. Il est en acier inoxydable et sa partie active est en forme de flamme (elliptique)."
      },
      {
        questionText: "La lime K 10 de 29 mm est :",
        options: [
          "Utilisée lors du cathétérisme",
          "Utilisée lors de la mise en forme canalaire",
          "De longueur de tige de 13 mm",
          "De diamètre de pointe de 0,9 mm",
          "De section ronde"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Une lime de 29mm a une tige de 13mm (29-16). Le diamètre de la pointe d'une lime n°10 est de 0,10 mm. Sa section est carrée."
      }
    ]
  },
  {
    title: "Pharmacologie endodontique",
    subject: "oc",
    questions: [
      {
        questionText: "L’hydroxyde de calcium forme magistrale :",
        options: [
          "Est un matériau d’obturation canalaire définitive",
          "Est un pansement désinfectant",
          "Est utilisé dans le cas de persistance d’un suintement canalaire",
          "Est antibactérien par la libération des ions (OH⁻)"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L’hydroxyde de calcium est utilisé comme pansement temporaire grâce à son action antibactérienne (pH élevé dû aux ions OH⁻) et ses propriétés désinfectantes, notamment en cas de suintement."
      },
      {
        questionText: "La gutta percha à usage endodontique est composée de :",
        options: [
          "Gutta percha",
          "Hydroxyde de calcium",
          "Sulfate de baryum pour rigidifier les cônes",
          "Cires et résines comme plastifiants",
          "Colorants"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "La gutta-percha est composée de gutta-percha (matrice), d'oxyde de zinc (charge), de cires/résines (plastifiants), de sulfate de baryum (radio-opacifiant) et de colorants."
      },
      {
        questionText: "L’hypochlorite de sodium (NaOCl) :",
        options: [
          "Est considéré comme la solution d’irrigation de choix",
          "À 1 %, il désinfecte mais n’élimine pas les débris par dissolution",
          "Est préférablement utilisé en étant mélangé avec l’EDTA",
          "Le chauffage de la solution majore son pouvoir solvant"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L’hypochlorite de sodium est la solution d'irrigation de choix. Le mélange avec l'EDTA est déconseillé car il inactive le chlore. Le chauffage augmente son efficacité."
      },
      {
        questionText: "L’EDTA sous forme de gel permet :",
        options: [
          "La lubrification des instruments",
          "La progression des instruments",
          "Le ramollissement de la dentine pariétale",
          "L’élimination complète de la boue dentinaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L’EDTA en gel (ex: RC-Prep) facilite la mise en forme mécanique en lubrifiant et en ramollissant légèrement la dentine. L’élimination de la boue dentinaire (smear layer) se fait avec l’EDTA en solution liquide."
      }
    ]
  }
];

module.exports = ocQuizzes;