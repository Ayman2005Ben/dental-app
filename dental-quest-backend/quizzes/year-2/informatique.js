const informatiqueQuizzes = [
  {
    title: "SCHÉMA D'ORGANISATION & SYSTÈME D'INFORMATION",
    subject: "informatique",
    questions: [
      {
        questionText: "Au niveau d'une organisation, le système opérant réceptionne les informations interne et externe.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "Le système opérant est chargé de la transformation des flux, tandis que le système d'information est responsable de la collecte, du traitement et de la diffusion des informations internes et externes."
      },
      {
        questionText: "Au niveau d'une organisation, le système de pilotage réceptionne les instructions sur l'exécution des tâches.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "Le système de pilotage émet les instructions. C'est le système opérant qui réceptionne et exécute ces instructions."
      },
      {
        questionText: "Au niveau d'une organisation, le système d'information réceptionne les instructions sur l'exécution des tâches et les informations sur l'état d'exécution des tâches.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "Le système d'information collecte et traite les informations, y compris celles sur l'état d'exécution des tâches, mais il ne 'réceptionne' pas directement les instructions d'exécution de la même manière que le système opérant. Les instructions viennent du système de pilotage."
      },
      {
        questionText: "Au niveau d'une organisation, le système d'information fixe les méthodes et les moyens pour atteindre les objectifs arrêtés par le système de pilotage.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "C'est le système de pilotage qui fixe les objectifs et les stratégies. Le système d'information fournit les outils et les données pour suivre la réalisation de ces objectifs et pour aider à la prise de décision."
      },
      {
        questionText: "Quels sont les différents sous-systèmes qui composent une organisation ?",
        options: [
          "Le système financier, le système commercial, le système des ressources humaines",
          "Le système de pilotage, le système d'information, le système opérant",
          "Le système décisionnel, le système administratif, le système de contrôle",
          "Le système central, le système périphérique, le système de support"
        ],
        correctOptionIndexes: [1],
        explanation: "Les sous-systèmes qui composent une organisation sont généralement : Le système de pilotage (ou de décision), Le système d'information, Le système opérant (ou de production)."
      }
    ]
  },
  {
    title: "LE SYSTÈME D'INFORMATION AUTOMATISÉ",
    subject: "informatique",
    questions: [
      {
        questionText: "Lors du traitement automatique, la mise à jour consiste à modifier, à saisir ou supprimer les données qui se trouvent dans la base d'information.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "La mise à jour est une opération essentielle qui inclut la modification, la saisie (ajout) et la suppression de données pour maintenir l'actualité et la pertinence de l'information. Note: L'explication contredit la réponse donnée dans le document source."
      },
      {
        questionText: "Lors du traitement automatique, le contrôle permet de réceptionner les données correctes et de rejeter les données erronées.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "La fonction de contrôle dans un système d'information vise précisément à assurer l'intégrité des données en acceptant les données valides et en rejetant les données non conformes ou erronées. Note: L'explication contredit la réponse donnée dans le document source."
      },
      {
        questionText: "Au niveau d'un système d'information automatique, la fonction d'accès consiste à transformer les données mémorisées en sorties vers l'environnement extérieur.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "La fonction d'accès concerne la récupération des données, tandis que la transformation en sorties vers l'environnement extérieur relève plutôt de la fonction de diffusion ou de restitution."
      },
      {
        questionText: "L'informatique est :",
        options: [
          "La science du traitement des connaissances",
          "Un ordinateur",
          "La science du traitement automatique de l'information"
        ],
        correctOptionIndexes: [2],
        explanation: "L'informatique est la science qui étudie le traitement automatique et rationnel de l'information."
      },
      {
        questionText: "La tâche de stockage des grandes masses d'information dans un système automatique est :",
        options: [
          "Souple",
          "Volatile",
          "Sécurisé"
        ],
        correctOptionIndexes: [2],
        explanation: "Le stockage dans un système automatique doit être sécurisé pour garantir l'intégrité et la disponibilité des données."
      },
      {
        questionText: "Pour réaliser un traitement, l'ordinateur a besoin :",
        options: [
          "Un programme",
          "Des résultats",
          "Des données"
        ],
        correctOptionIndexes: [0],
        explanation: "Un ordinateur a besoin d'un programme pour exécuter des instructions et traiter des données."
      },
      {
        questionText: "L'informatique est :",
        options: [
          "La science du traitement des connaissances",
          "La science du traitement Rationnel de l'information",
          "Un ordinateur"
        ],
        correctOptionIndexes: [1],
        explanation: "L'informatique est la science du traitement rationnel et automatique de l'information."
      }
    ]
  },
  {
    title: "Questions générales sur l'informatique",
    subject: "informatique",
    questions: [
      {
        questionText: "L'informatique est :",
        options: [
          "La science du traitement des connaissances",
          "La science du traitement Rationnel de l'information",
          "Un ordinateur",
          "Windows"
        ],
        correctOptionIndexes: [1],
        explanation: "L'informatique est la science du traitement rationnel de l'information."
      },
      {
        questionText: "Peut-il exister un système d'information sans Équipement informatique ?",
        options: [
          "Oui, car les données sont toujours sauvegardées",
          "Non, car une base de données est nécessaire pour stocker l'information",
          "Oui, car on a longtemps échangé des informations pour travailler sans disposer d'informatique",
          "Non, car on ne peut pas échanger des informations sans informatique"
        ],
        correctOptionIndexes: [2],
        explanation: "Un système d'information peut exister sans équipement informatique (ex: système manuel). L'informatique est l'automatisation de ce système."
      },
      {
        questionText: "Où se trouvent mes nouveaux courriels avant que je démarre mon logiciel de messagerie ?",
        options: [
          "Sur une machine quelconque de l'internet",
          "Déjà sur ma machine",
          "En attente sur la machine de l'expéditeur",
          "Sur le serveur de ma messagerie"
        ],
        correctOptionIndexes: [3],
        explanation: "Les courriels sont stockés sur le serveur de messagerie jusqu'à ce que le client de messagerie de l'utilisateur les télécharge."
      },
      {
        questionText: "Pour réaliser un traitement, l'ordinateur a besoin :",
        options: [
          "Des données",
          "Un programme",
          "D'un système d'exploitation",
          "D'un réseau"
        ],
        correctOptionIndexes: [0],
        explanation: "Pour effectuer un traitement, un ordinateur a toujours besoin de données à manipuler. (Note: un programme et un OS sont également essentiels)."
      },
      {
        questionText: "Les fonctionnalités de base d'un système d'information sont ?",
        options: [
          "Mémoire cache",
          "Transmission",
          "Traitement",
          "Réception",
          "Mémorisation",
          "La connexion"
        ],
        correctOptionIndexes: [1, 2, 3, 4, 5],
        explanation: "Les fonctionnalités clés d'un SI incluent la collecte (réception), le stockage (mémorisation), le traitement, la diffusion (transmission) et l'accès (connexion)."
      },
      {
        questionText: "Les fonctionnalités de base d'un système d'information AUTOMATIQUE sont ?",
        options: [
          "Collecte",
          "Recherche",
          "Affectation"
        ],
        correctOptionIndexes: [0],
        explanation: "Les systèmes d'information automatiques sont conçus pour collecter, traiter, stocker et diffuser des informations de manière automatisée."
      },
      {
        questionText: "L'informatique est :",
        options: [
          "La science du traitement des connaissances",
          "La science du traitement automatique de l'information",
          "Un ordinateur"
        ],
        correctOptionIndexes: [1],
        explanation: "L'informatique est la science du traitement automatique de l'information. (Note: La réponse 'BDEF' du document source est invalide)."
      },
      {
        questionText: "Où se trouvent mes nouveaux courriels avant que je démarre mon logiciel de messagerie ?",
        options: [
          "Sur une machine quelconque de l'internet",
          "Déjà sur ma machine",
          "En attente sur la machine de l'expéditeur",
          "Sur le serveur de ma messagerie"
        ],
        correctOptionIndexes: [3],
        explanation: "Les courriels sont stockés sur le serveur de messagerie du fournisseur de services tant qu'ils n'ont pas été téléchargés par le client de messagerie."
      }
    ]
  },
  {
    title: "STRUCTURE DE BASE D'UN ORDINATEUR",
    subject: "informatique",
    questions: [
      {
        questionText: "L'unité centrale est chargée d'envoyer, de recevoir et de stocker les informations.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "L'unité centrale (CPU) est principalement chargée du traitement des informations. Le stockage est effectué par les dispositifs de stockage (disque dur, RAM) et l'envoi/réception est géré par des interfaces et des périphériques."
      },
      {
        questionText: "La carte graphique est fixée sur la carte mère, composée de processeurs, de circuits imprimés, de connecteurs et de ventilateurs.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [0],
        explanation: "La carte graphique est bien un composant connecté à la carte mère. La carte mère elle-même est le circuit principal qui connecte tous les autres composants, y compris le CPU (processeur), la RAM, etc."
      },
      {
        questionText: "La carte mère d'un ordinateur est constituée de slots, de chipset, de ports et de socket.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [0],
        explanation: "La carte mère est le composant central sur lequel tous les autres éléments (processeur via le socket, mémoire via les slots, périphériques via les ports) sont connectés et gérés par le chipset."
      },
      {
        questionText: "Le boîtier de l'unité centrale est muni d'un ensemble de ports et de slots destinés à brancher les périphériques.",
        options: [
          "OUI",
          "NON"
        ],
        correctOptionIndexes: [1],
        explanation: "Les ports et slots pour les périphériques sont sur la carte mère (qui est dans le boîtier), mais le boîtier lui-même est une enveloppe protectrice et non le lieu direct des connexions internes des périphériques."
      },
      {
        questionText: "Si un Microprocesseur possède 1 Go de mémoire, qu'est-ce que cela signifie ?",
        options: [
          "Il a 1Go de mémoire cache",
          "Il a une extension mémoire de 1Go",
          "Il a 1Go de RAM"
        ],
        correctOptionIndexes: [2],
        explanation: "La mémoire associée directement à un microprocesseur dans ce contexte fait généralement référence à la mémoire RAM (Random Access Memory) qu'il peut adresser."
      },
      {
        questionText: "Si un élément de l'ordinateur possède une capacité de 300 Go, de quoi s'agit-il ?",
        options: [
          "De la mémoire vive",
          "De la clé USB",
          "Du disque dur"
        ],
        correctOptionIndexes: [2],
        explanation: "300 Go est une capacité de stockage typique pour un disque dur, qui est une mémoire de masse non volatile."
      },
      {
        questionText: "La carte d'interface (extension) permet ?",
        options: [
          "D'ajouter des fonctionnalités nouvelles à l'ordinateur",
          "De remplacer la carte Mère",
          "D'ajouter des capacités nouvelles au Système d'Exploitation"
        ],
        correctOptionIndexes: [0],
        explanation: "Les cartes d'extension (par exemple, carte son, carte réseau) sont conçues pour ajouter des fonctionnalités spécifiques qu'un ordinateur n'a pas par défaut."
      },
      {
        questionText: "À quoi sert la mémoire RAM dans un ordinateur ?",
        options: [
          "À relier les périphériques",
          "À exécuter les programmes",
          "À se connecter à Internet"
        ],
        correctOptionIndexes: [1],
        explanation: "La mémoire RAM est la mémoire de travail où sont chargés les programmes et les données en cours d'utilisation pour que le processeur puisse y accéder rapidement."
      },
      {
        questionText: "Quel matériel permet de stocker une grande quantité de données ?",
        options: [
          "La carte magnétique",
          "La bande magnétique",
          "La carte mémoire"
        ],
        correctOptionIndexes: [1],
        explanation: "Parmi les options données, la bande magnétique est traditionnellement utilisée pour stocker de très grandes quantités de données pour l'archivage et la sauvegarde."
      },
      {
        questionText: "Pour dissiper la chaleur du micro-ordinateur, un ventilateur est placé sur :",
        options: [
          "La carte Mère",
          "Le microprocesseur",
          "Le disque dur"
        ],
        correctOptionIndexes: [1],
        explanation: "Le microprocesseur est le composant qui génère le plus de chaleur et nécessite un ventilateur pour éviter la surchauffe."
      },
      {
        questionText: "Dans le boîtier d'un PC, la carte vidéo est placée sur :",
        options: [
          "Le disque dur",
          "La carte mère",
          "Le microprocesseur"
        ],
        correctOptionIndexes: [1],
        explanation: "La carte vidéo (ou carte graphique) est insérée dans un slot d'extension (PCIe) sur la carte mère."
      },
      {
        questionText: "Pour utiliser un programme, il faut le charger :",
        options: [
          "Sur disquette",
          "En mémoire RAM",
          "Sur l'écran"
        ],
        correctOptionIndexes: [1],
        explanation: "Un programme doit être chargé en mémoire vive (RAM) pour être exécuté par le processeur."
      },
      {
        questionText: "Les programmes de base du micro-ordinateur se trouvent dans :",
        options: [
          "La ROM",
          "La RAM",
          "Un disque"
        ],
        correctOptionIndexes: [0],
        explanation: "Les programmes de base (comme le BIOS/UEFI) sont stockés dans la mémoire morte (ROM)."
      },
      {
        questionText: "Une interface de connexion est... :",
        options: [
          "Un langage de programmation",
          "Un système d'exploitation",
          "Un élément de la carte mère"
        ],
        correctOptionIndexes: [2],
        explanation: "Une interface de connexion (comme un port USB) est un élément physique de la carte mère qui permet de relier des périphériques."
      },
      {
        questionText: "Si un ordinateur possède 1 Go de mémoire vive, qu'est-ce que cela signifie ?",
        options: [
          "Il a 1Go de mémoire cache",
          "Il a 1 Go de RAM",
          "Il a une extension mémoire de 1 Go"
        ],
        correctOptionIndexes: [1],
        explanation: "'Mémoire vive' est un synonyme de RAM (Random Access Memory)."
      },
      {
        questionText: "Que fournit essentiellement l'utilisation d'une clé USB ?",
        options: [
          "Un moyen d'augmenter la mémoire vive",
          "Un moyen d'accélérer l'ordinateur",
          "Un moyen de stocker des données."
        ],
        correctOptionIndexes: [2],
        explanation: "Une clé USB est un périphérique de stockage externe portable."
      },
      {
        questionText: "Dans le micro-ordinateur le traitement de l'information est réalisé par :",
        options: [
          "le microprocesseur",
          "la mémoire RAM",
          "la mémoire ROM"
        ],
        correctOptionIndexes: [0],
        explanation: "Le microprocesseur (CPU) est le cerveau de l'ordinateur, responsable de l'exécution des instructions."
      },
      {
        questionText: "La mémoire RAM est :",
        options: [
          "non volatile",
          "souple",
          "volatile"
        ],
        correctOptionIndexes: [2],
        explanation: "La mémoire RAM est volatile, ce qui signifie qu'elle perd son contenu lorsque l'ordinateur est éteint."
      },
      {
        questionText: "Si le microprocesseur d'un ordinateur possède 256 Ko de mémoire, qu'est-ce que cela signifie ?",
        options: [
          "Il a 256 Ko de mémoire cache",
          "Il a 256 Ko de RAM",
          "Il a une extension mémoire de 256 Ko"
        ],
        correctOptionIndexes: [0],
        explanation: "Une petite quantité de mémoire très rapide directement associée au microprocesseur est généralement la mémoire cache."
      },
      {
        questionText: "Comment se caractérise une connectique USB ?",
        options: [
          "Forme carré ou rectangulaire sans broche",
          "Forme carré ou rectangulaire avec broches",
          "Forme ronde sans broche"
        ],
        correctOptionIndexes: [0],
        explanation: "Les connecteurs USB sont typiquement de forme rectangulaire et n'ont pas de broches externes apparentes."
      },
      {
        questionText: "La mémoire RAM sert à ?",
        options: [
          "Relier les périphériques",
          "Connecter à Internet",
          "Exécuter les programmes",
          "Démarrer l'ordinateur",
          "À sauvegarder les données en exécution"
        ],
        correctOptionIndexes: [2],
        explanation: "La RAM est la mémoire de travail utilisée pour charger et exécuter les programmes et les données."
      },
      {
        questionText: "Dans le boîtier d'un PC, la RAM, la ROM, la carte écran..., sont placées sur :",
        options: [
          "Le disque dur",
          "La disquette",
          "La carte mère"
        ],
        correctOptionIndexes: [2],
        explanation: "Tous ces composants sont connectés ou insérés sur la carte mère."
      },
      {
        questionText: "Si un élément de l'ordinateur possède une capacité de 300 Go, de quoi s'agit-il ?",
        options: [
          "De la mémoire vive",
          "Du disque dur",
          "De la clé USB"
        ],
        correctOptionIndexes: [1],
        explanation: "300 Go est une capacité de stockage typique pour un disque dur de stockage."
      },
      {
        questionText: "Quels sont les différents connecteurs (PORTS) d'un ordinateur ?",
        options: [
          "rg44",
          "PS2",
          "Hdmi"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les ports comme PS/2, HDMI, et RJ45 (probablement ce que 'rg44' voulait dire) sont des connecteurs courants."
      },
      {
        questionText: "Classez ces périphériques de stockage de la plus petite à la plus grande capacité : Disque dur, Disquette, Clé USB, CDROM, DVDROM, Carte magnétique.",
        options: [
          "Disque dur < Clé USB < DVD-ROM < CD-ROM < Disquette < Carte magnétique",
          "Carte magnétique < Disquette < CD-ROM < DVD-ROM < Clé USB < Disque dur",
          "Disquette < Carte magnétique < Clé USB < CD-ROM < DVD-ROM < Disque dur",
          "CD-ROM < DVD-ROM < Disquette < Carte magnétique < Disque dur < Clé USB"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ordre est : Carte magnétique < Disquette < CD-ROM < DVD-ROM < Clé USB < Disque dur."
      },
      {
        questionText: "Quels sont les différents connecteurs (PORTS) d'un ordinateur ?",
        options: [
          "USB, HDMI, Ethernet (RJ45)",
          "CPU, RAM, Disque Dur",
          "Windows, Microsoft Office, Photoshop",
          "Ventilateur, Bloc d'alimentation, Port série"
        ],
        correctOptionIndexes: [0],
        explanation: "Les ports courants incluent : USB, HDMI, DisplayPort, Ethernet (RJ45), Jack audio, PS/2, etc."
      },
      {
        questionText: "Qu'est-ce qu'un microprocesseur ?",
        options: [
          "La mémoire volatile qui stocke les programmes en cours d'exécution",
          "Le principal dispositif de stockage à long terme des données",
          "Un circuit électronique qui exécute les instructions des programmes (le 'cerveau')",
          "Le logiciel de base qui gère le matériel et les logiciels"
        ],
        correctOptionIndexes: [2],
        explanation: "Un microprocesseur (CPU) est un composant électronique qui exécute les instructions des programmes informatiques. C'est le 'cerveau' de l'ordinateur."
      },
      {
        questionText: "Citez au moins six périphériques d'entrée ?",
        options: [
          "Écran, Imprimante, Haut-parleurs, Casque, Vidéoprojecteur, Traceur",
          "Clavier, Souris, Scanner, Microphone, Webcam, Manette de jeu",
          "Disque dur, Clé USB, SSD, Carte mémoire, CD-ROM, DVD-ROM",
          "Clavier, Écran, Souris, Imprimante, Scanner, Haut-parleurs"
        ],
        correctOptionIndexes: [1],
        explanation: "Clavier, souris, microphone, scanner, webcam, pavé tactile, manette de jeu."
      },
      {
        questionText: "Quels sont les différents supports de stockage des données informatiques ?",
        options: [
          "Disque dur, SSD, Clé USB, Carte mémoire",
          "Processeur, Carte mère, Mémoire RAM, Carte graphique",
          "Écran, Imprimante, Haut-parleurs, Vidéoprojecteur",
          "Clavier, Souris, Webcam, Scanner"
        ],
        correctOptionIndexes: [0],
        explanation: "Disque dur (HDD), SSD, clé USB, carte mémoire, CD, DVD, Blu-ray, bande magnétique."
      },
      {
        questionText: "Citez au moins 8 périphériques d'entrée ?",
        options: [
          "Clavier, Souris, Scanner, Microphone, Webcam, Pavé tactile, Manette de jeu, Lecteur de codes-barres",
          "Écran, Imprimante, Haut-parleurs, Casque, Vidéoprojecteur, Traceur, Clavier, Souris",
          "Processeur, RAM, Disque dur, SSD, Carte mère, Carte graphique, Alimentation, Boîtier",
          "Windows, Linux, MacOS, Android, iOS, Word, Excel, PowerPoint"
        ],
        correctOptionIndexes: [0],
        explanation: "Clavier, souris, microphone, scanner, webcam, pavé tactile, manette de jeu, lecteur de codes-barres."
      }
    ]
  }
];

module.exports = informatiqueQuizzes;