const oceQuizzes = [
  {
    title: "Introduction à l'odontologie conservatrice endodontie",
    subject: "oce",
    questions: [
      {
        questionText: "La dentine tertiaire:",
        options: [
          "Se produit durant toute la vie de la dent.",
          "Se produit suite à une agression.",
          "C'est une dentine réparatrice.",
          "C'est une dentine réactionnelle."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La dentine tertiaire est une dentine de réponse à une agression (carie, abrasion), qui peut être réactionnelle ou réparatrice selon le type et la sévérité de l'agression. Elle est élaborée par les odontoblastes primaires ou par des cellules souches différenciées."
      },
      {
        questionText: "La dentine réactionnelle:",
        options: [
          "Est une dentine primaire.",
          "Produite par des odontoblastes de 1ère génération.",
          "Produite par des odontoblastes de 2ème génération.",
          "Produite par des cellules souches diffé renciées en cellules dentinogénétique."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentine réactionnelle est une dentine primaire formée par les odontoblastes de 1ère génération (ou par des cellules souches se différenciant en cellules dentinogénétiques) en réponse à une agression non invasive ou de faible intensité."
      },
      {
        questionText: "L'émail:",
        options: [
          "Est un tissu acellulaire.",
          "A la capacité de se régénérer après être détruit.",
          "A la capacité de se reminéraliser suite à une déminéralisation.",
          "C'est une barrière semi-perméable grâce à la substance inter-prismatique."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'émail est un tissu acellulaire et ne peut pas se régénérer après destruction. Cependant, il a la capacité de se reminéraliser et agit comme une barrière semi-perméable grâce à sa substance inter-prismatique."
      },
      {
        questionText: "Au cours de la dentinogenèse:",
        options: [
          "La dentine primaire se forme jusqu'à édification complète de la racine",
          "La dentine primaire se forme durant toute la vie de la dent.",
          "La dentine secondaire se forme après édification complète de la racine.",
          "La dentine secondaire se forme durant toute la vie de la dent."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentine primaire se forme jusqu'à l'édification complète de la racine. La dentine secondaire commence à se former après l'édification radiculaire et continue durant toute la vie de la dent."
      },
      {
        questionText: "La dentine tertiaire:",
        options: [
          "Se forme à la périphérie de la cavité pulpaire",
          "Traduit un vieillissement prématuré de la pulpe.",
          "Est le produit des odontoblastes qui face aux agressions pathologiques.",
          "Se forme à l'intérieur de la masse dentinaire.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La dentine tertiaire se forme localement à la périphérie de la cavité pulpaire, précisément sous la zone agressée, à l'intérieur de la masse dentinaire, en réponse à une agression pathologique."
      },
      {
        questionText: "L'émail:",
        options: [
          "Est une structure minéralisée d'origine épithéliale",
          "Est une structure organique d'origine épithéliale.",
          "Est une structure minéralisée d'origine mésenchymateuse.",
          "Est une structure amélinisée d'origine mésenchymateuse."
        ],
        correctOptionIndexes: [0],
        explanation: "L'émail est une structure minéralisée d'origine épithéliale, formé par les améloblastes."
      },
      {
        questionText: "La pulpe:",
        options: [
          "Produit la dentine par l'intermédiaire de ses odontoblastes.",
          "Produit la dentine et le cément par l'intermédiaire de ses odontoblastes.",
          "Produit la dentine et l'émail par l'intermédiaire de ses odontoblastes.",
          "Produit la dentine par l'intermédiaire de ses odontoblastes."
        ],
        correctOptionIndexes: [3],
        explanation: "La pulpe dentaire, via ses odontoblastes, est responsable de la formation de la dentine. Le cément et l'émail sont produits par d'autres cellules."
      },
      {
        questionText: "La dentine:",
        options: [
          "Constitue la majeure partie de la dent",
          "Est un tissu minéralisé d'origine ectodermique",
          "Est traversée par des canalicules sur toute son épaisseur, de la pulpe à la jonc tion amélo-dentinaire.",
          "Ne peut se régénérer suite à une agression"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La dentine constitue la majeure partie de la dent et est traversée par des canalicules dentinaires sur toute son épaisseur. Elle est d'origine mésenchymateuse et possède une capacité de réparation limitée."
      },
      {
        questionText: "La dentine tertiaire:",
        options: [
          "Se produit durant toute la vie de la dent.",
          "Se produit suite à une agression.",
          "C'est une dentine réparatrice.",
          "C'est une dentine réactionnelle.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La dentine tertiaire est une dentine de réponse à une agression, qu'elle soit réactionnelle ou réparatrice. Elle ne se produit pas nécessairement durant toute la vie de la dent comme la dentine secondaire."
      },
      {
        questionText: "Donnez les rôles de la pulpe:",
        options: [
          "Produire l'émail et le cément",
          "Assurer la nutrition de la dentine, sa sensibilité et sa formation",
          "Ancrer la dent dans l'os alvéolaire",
          "Protéger la dent des chocs mécaniques uniquement"
        ],
        correctOptionIndexes: [1],
        explanation: "La pulpe dentaire a plusieurs rôles essentiels : elle produit la dentine par l'intermédiaire de ses odontoblastes, elle assure la nutrition et la sensibilité de la dentine par son réseau vasculaire et ses nerfs, et elle a la capacité d'édifier une nouvelle dentine dans certaines conditions physiologiques ou pathologiques."
      }
    ]
  },
  {
    title: "Schéma clinique de la lésion carieuse",
    subject: "oce",
    questions: [
      {
        questionText: "Le curetage dentinaire:",
        options: [
          "Est l'action de débarrasser la cavité de tous les tissus dentinaires altérés.",
          "Est réalisé à l'aide de fraise boule montée sur CA et d'excavateurs.",
          "Est réalisé en premier à l'aide de fraise boule montée sur CA puis complété à l'excavateur.",
          "Est réalisé en premier à l'aide d'excavateurs après avec une fraise boule montée sur CA."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le curetage dentinaire vise à éliminer les tissus dentinaires altérés, et est réalisé à l'aide de fraise boule montée sur contre-angle et d'excavateurs, en commençant souvent par l'excavateur."
      },
      {
        questionText: "Parmi ces propositions, quelles sont celles qui sont justes:",
        options: [
          "La trépanation se fait à l'aide d'une fraise boule montée sur turbine.",
          "La trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine.",
          "Curetage se fait à l'aide d'une fraise boule montée sur contre angle.",
          "L'extension se fait à l'aide d'une fraise cylindrique montée sur turbine."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La trépanation peut se faire avec une fraise boule ou cylindrique sur turbine. Le curetage se fait avec une fraise boule sur contre-angle. L'extension se fait avec une fraise cylindrique sur turbine."
      },
      {
        questionText: "Pour une taille de cavité sans risque pour le complexe dentino-pulpaire:",
        options: [
          "Le fraisage se fait d'une façon continue.",
          "La vitesse de rotation doit être réduite.",
          "Il faut exercer plus de pression.",
          "Travailler sous spray d'eau."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Pour une taille de cavité sans risque, il faut réduire la vitesse de rotation et travailler sous spray d'eau afin d'éviter la surchauffe et les dommages pulpaires. Le fraisage continu et une pression excessive sont à éviter."
      },
      {
        questionText: "Les préparations des cavités selon BLACK I:",
        options: [
          "Se limitent uniquement aux lésions carieuses au niveau des sillons, puits et fissures",
          "Englobent systématiquement tous les réseaux des sillons, puits et fissures",
          "Les angles cavo-superficiels ne sont pas accessibles au brossage.",
          "L'extension prophylactique est réalisée aux dépens des tissus sains."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La classification de Black pour les cavités de classe I implique l'englobement systématique de tous les réseaux de sillons, puits et fissures. Les angles cavo-superficiels de ces cavités ne sont généralement pas accessibles au brossage, ce qui rend l'extension prophylactique nécessaire pour éviter la récidive de carie."
      },
      {
        questionText: "L'extension prophylactique:",
        options: [
          "C'est une extension de la cavité pour prévenir l'apparition de carie.",
          "Elle se fait sur des zones de prédilec tion de la lésion carieuse.",
          "Se fait pour que la cavité devient rétentive.",
          "Rend les limites de l'obturation acces sibles au brossage."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'extension prophylactique vise à prévenir l'apparition de caries, se fait sur des zones de prédilection de la lésion carieuse et rend les limites de l'obturation accessibles au brossage."
      },
      {
        questionText: "Où est-ce qui cause une élévation de température lors de la taille de la cavité :",
        options: [
          "Le fraisage continu et à grande vitesse.",
          "Le système d'irrigation des instruments rotatifs.",
          "La pression exercée lors du fraisage.",
          "Des fraises usées."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le fraisage continu à grande vitesse, la pression excessive exercée et l'utilisation de fraises usées sont toutes des causes d'élévation de température lors de la taille de la cavité. Un système d'irrigation efficace réduit cette élévation."
      },
      {
        questionText: "Un pont dentinaire minéralisé:",
        options: [
          "Est une nouvelle dentine de réparation.",
          "Se forme en réponse à une lésion carieuse profonde.",
          "Est créé pour protéger la pulpe exposée.",
          "Permet à la pulpe de se défendre et de se régénérer.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Le pont dentinaire minéralisé est une nouvelle dentine de réparation formée en réponse à une lésion carieuse profonde pour protéger la pulpe exposée, lui permettant de se défendre et de se régénérer."
      },
      {
        questionText: "L'obturation d'une cavité:",
        options: [
          "Doit restaurer la forme anatomique de la dent.",
          "Doit restaurer la fonction masticatoire de la dent.",
          "Doit empêcher la pénétration de bactéries.",
          "Doit avoir une bonne esthétique.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Une obturation canalaire réussie doit restaurer la forme anatomique et la fonction masticatoire de la dent, empêcher la pénétration bactérienne, et offrir une bonne esthétique."
      },
      {
        questionText: "L'extension prophylactique:",
        options: [
          "C'est une extension de la cavité pour prévenir l'apparition de carie.",
          "Elle se fait sur des zones de prédilection de la lésion carieuse.",
          "Se fait pour que la cavité devient rétentive.",
          "Rend les limites de l'obturation accessibles au brossage."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'extension prophylactique a pour but de prévenir l'apparition de caries en étendant la cavité aux zones de prédilection de la lésion carieuse, ce qui rend les limites de l'obturation accessibles au brossage."
      },
      {
        questionText: "Le curetage dentinaire:",
        options: [
          "Est l'action de débarrasser la cavité de tous les tissus dentinaires altérés.",
          "Est réalisé à l'aide de fraise boule montée sur CA et d'excavateurs.",
          "Est réalisé en premier à l'aide de fraise boule montée sur CA puis complété à l'excavateur.",
          "Est réalisé en premier à l'aide d'excavateurs après avec une fraise boule montée sur CA."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le curetage dentinaire consiste à éliminer les tissus dentinaires altérés. Il est réalisé avec des fraises boules montées sur contre-angle et des excavateurs, souvent en commençant par l'excavateur."
      }
    ]
  },
  {
    title: "Préparation des cavités de type classe I",
    subject: "oce",
    questions: [
      {
        questionText: "Pour les molaires supérieures avec un pont d'émail sain, la cavité type classe I est composée de :",
        options: [
          "Des cavités situées de part et d'autre de pont d'émail.",
          "Une cavité mésiale de forme de croissant à concavité palatine.",
          "Une cavité distale plus réduite de taille occupant le sillon disto- vestibulaire.",
          "Une queue d'aronde toujours mésiale."
        ],
        correctOptionIndexes: [0],
        explanation: "Pour les molaires supérieures avec un pont d'émail sain, la cavité de classe I est composée de deux cavités distinctes situées de part et d'autre du pont d'émail."
      },
      {
        questionText: "Dans le cas où la cavité type classe I est très profonde la stabilité est assurée par :",
        options: [
          "La réalisation d'un biseau sur les bords de la cavité",
          "L'utilisation d'un matériau d'obturation très fluide",
          "La création d'un 'Trottoir de Black' à un niveau supérieur du fond",
          "L'élargissement excessif de l'isthme de la cavité"
        ],
        correctOptionIndexes: [2],
        explanation: "Pour une cavité de classe I très profonde, la stabilité est assurée par un trottoir autour du fond sphérique, réalisé à un niveau supérieur appelé « Trottoir de Black »."
      },
      {
        questionText: "Pour une cavité de classe I de Black sur la (27) on réalisera :",
        options: [
          "Une cavité distale en forme de croissant à concavité vestibulaire.",
          "Une cavité englobant le sillon mésio-palatin à concavité palatine.",
          "La suppression du pont d'émail quand celui-ci est miné par la carie.",
          "Systématiquement une queue d'aronde distale et mésiale."
        ],
        correctOptionIndexes: [2],
        explanation: "Pour une cavité de classe I sur une molaire (ex: 27), on réalise une cavité mésiale de forme de croissant à concavité vestibulaire et on supprime le pont d'émail si celui-ci est miné par la carie."
      }
    ]
  },
  {
    title: "Préparation des cavités de type classe II",
    subject: "oce",
    questions: [
      {
        questionText: "Classe II a mésiale sur la (16) est:",
        options: [
          "Réalisée en cas d'absence de la (17).",
          "Réalisée en présence d'une cavité de classée I distale sur (15).",
          "Réalisée si la crête marginale mésiale n'est pas altérée par la carie.",
          "Réalisée en présence d'une cavité MOD sur la (15)."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Une classe II mésiale sur la (16) est réalisée si la crête marginale mésiale n'est pas altérée par la carie. La (15) est une prémolaire supérieure droite, et la (16) est une 2ème molaire supérieure droite."
      },
      {
        questionText: "La cavité secondaire pour une classe II distale sur (27):",
        options: [
          "Englobe le sillon disto-palatin en totalité",
          "Réalisée avec conservation du pont d'émail",
          "Présente une paroi axiale parallèle à l'axe de la dent.",
          "Présente une paroi distale légèrement oblique."
        ],
        correctOptionIndexes: [1],
        explanation: "La cavité secondaire pour une classe II distale sur la (27) présente une paroi axiale et une cavité principale parallèle à l'axe de la pulpe, avec conservation du pont d'émail."
      },
      {
        questionText: "La cavité MOD sur une (36):",
        options: [
          "Présente une cavité principale et une cavité secondaire.",
          "Touche une face proximale et la face occlusale à la fois.",
          "Présente un isthme de largeur inférieure à 2 mm.",
          "Présente deux parois axiales et une paroi pulpaire."
        ],
        correctOptionIndexes: [3],
        explanation: "Une cavité MOD (Mésio-Occluso-Distale) sur une (36) est une seule cavité englobant les deux faces proximales à travers la face occlusale. Elle présente deux parois axiales et une paroi pulpaire."
      }
    ]
  },
  {
    title: "Préparation des cavités de type classe III, IV et V",
    subject: "oce",
    questions: [
      {
        questionText: "La classe IIIC est:",
        options: [
          "L'existence de 2 cavités de classe III sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire.",
          "Vestibulo-Prox-Linguale ou Mesio-Pala to-Distale.",
          "Une cavité simple englobant au mini mum trois faces coronaire.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "La classe IIIC est une cavité complexe englobant au minimum trois faces coronaires (vestibulo-prox-linguale ou mésio-palato-distale)."
      },
      {
        questionText: "Pour augmenter la rétention dans une préparation de cavité classe IIIA on réalise :",
        options: [
          "Un vertuis au niveau des angles trièdres",
          "A l'aide d'une fraise cylindrique dans une direction verticale.",
          "Un encoche à l'aide d'une fraise cylindrique ou du fond de la cavité (Élargir le fond) surtout pour le cas de cavité simple étendue.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [3],
        explanation: "Pour augmenter la rétention dans une préparation de cavité classe IIIA, on réalise des rétentions avec une fraise cylindrique dans une direction oblique. Cela inclut la création d'une encoche au niveau du fond de la cavité (élargir le fond) ou d'un vertuis."
      },
      {
        questionText: "La classe IIIC est:",
        options: [
          "Une cavité simple englobant au mini mum trois faces coronaire.",
          "L'existence de 2 cavités de classe III sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire."
        ],
        correctOptionIndexes: [0],
        explanation: "La classe IIIC est une cavité complexe englobant au minimum trois faces coronaires (vestibulo-prox-linguale ou mésio-palato-distale)."
      },
      {
        questionText: "Donnez le protocole opératoire de la réalisation d'une cavité type classe III mésiale sur le 12 révélée par une frac ture coronaire totale de la 11.",
        options: [
          "Réaliser un accès palatin et une queue d'aronde pour la rétention",
          "Profiter de l'accès direct offert par la fracture pour réaliser une cavité simple",
          "Transformer la préparation en classe IV en incluant l'angle incisif",
          "Utiliser une fraise tunnel pour préserver la crête marginale"
        ],
        correctOptionIndexes: [1],
        explanation: "La fracture coronaire totale de la 11 permet un accès direct à la cavité de carie. Cela permettra de réaliser une cavité de classe III simple mésiale qui concerne la face mésiale de la couronne."
      }
    ]
  },
  {
    title: "Les tissus dentaires et moyens de défense",
    subject: "oce",
    questions: [
      {
        questionText: "La dégénérescence pulpaire :",
        options: [
          "Une sclérose pulpaire lente spécifiquement au niveau du tiers apical.",
          "Se forme par dépôt permanent de dentine inter tubulaire.",
          "C'est une sclérose du 1/3 coronaire.",
          "Est une sénescence pulpaire."
        ],
        correctOptionIndexes: [3],
        explanation: "La dégénérescence pulpaire est une sénescence pulpaire caractérisée par une sclérose rapide du 1/3 apical, causée par le dépôt permanent de dentine intertubulaire."
      },
      {
        questionText: "L'atrophie pulpaire:",
        options: [
          "Fait suite à l'inflammation pulpaire.",
          "Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
          "Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire",
          "Est une altération dégénérative de la pulpe."
        ],
        correctOptionIndexes: [3],
        explanation: "L'atrophie pulpaire est une altération dégénérative de la pulpe. Elle se manifeste par une réduction du volume de la chambre pulpaire due à la production de dentine secondaire."
      },
      {
        questionText: "La sclérose dentinaire:",
        options: [
          "Est due à des produits chimiques nocifs et de microorganismes provenant de l'extérieur.",
          "C'est de la dentine inter tubulaire.",
          "C'est de la dentine péri tubulaire.",
          "Est une dentine tertiaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La sclérose dentinaire est une réponse de la dentine due à des produits chimiques nocifs ou des microorganismes externes, caractérisée par un dépôt de dentine péritubulaire."
      },
      {
        questionText: "La phase extracellulaire dans la dentinogenèse :",
        options: [
          "C'est une phase d'élaboration et de sécrétion.",
          "C'est une phase de maturation qui aboutit à la minéralisation et à la formation de la dentine.",
          "C'est la phase ou les processus de minéralisation se situent au niveau de la zone de dentine.",
          "C'est la phase de synthèse des précur seurs de la trame organique de la dent."
        ],
        correctOptionIndexes: [1],
        explanation: "La phase extracellulaire dans la dentinogenèse correspond à la phase de maturation, qui aboutit à la minéralisation et à la formation de la dentine."
      },
      {
        questionText: "L'atrophie:",
        options: [
          "Fait suite à l'inflammation pulpaire.",
          "Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
          "Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire",
          "Est une altération dégénérative de la pulpe."
        ],
        correctOptionIndexes: [3],
        explanation: "L'atrophie est une altération dégénérative de la pulpe, caractérisée par une réduction du volume de la chambre pulpaire due au dépôt de dentine secondaire."
      },
      {
        questionText: "La réponse exsudative dans l'inflam mation pulpaire:",
        options: [
          "Est une réponse retardée.",
          "Se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agres seur.",
          "Se caractérise par une production de tis sus de granulation élaboré par de nouvelles cellules.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "La réponse exsudative dans l'inflammation pulpaire est un afflux de liquide qui vise à détoxiquer l'agent agresseur. Ce n'est pas une réponse retardée ni une production de tissu de granulation."
      },
      {
        questionText: "La carie à évolution lente:",
        options: [
          "Lésion stationnaire.",
          "Lésion chronique et indolore.",
          "La dentinogenèse stabilise l'évolution de la carie.",
          "La dentinogenèse est arrêtée ou ralentie."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La carie à évolution lente est une lésion chronique et indolore où la dentinogenèse stabilise son évolution."
      }
    ]
  },
  {
    title: "Cariologie",
    subject: "oce",
    questions: [
      {
        questionText: "Parmi ces procédés lequel ou lesquels sont utilisés dans la prévention ca rieuse:",
        options: [
          "La déminéralisation.",
          "La reminéralisation.",
          "Le scellement des anfractuosités.",
          "Le scellement des puits et des fissures."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les procédés utilisés dans la prévention carieuse sont la reminéralisation, le scellement des anfractuosités, et le scellement des puits et des fissures. La déminéralisation est le processus inverse."
      },
      {
        questionText: "La dentine réactionnelle scléro tique:",
        options: [
          "Est formée à l'interface dentine-pulpe.",
          "Appelle également dentine péripulpaire.",
          "Elle est formée à l'intérieure des tubuli dentinaires.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "La dentine réactionnelle sclérotique est formée à l'intérieur des tubuli dentinaires, et non à l'interface dentine-pulpe."
      },
      {
        questionText: "Citez le rôle de la salive.",
        options: [
          "Uniquement la lubrification des aliments pour la déglutition",
          "Favoriser la déminéralisation en abaissant le pH buccal",
          "Pouvoir tampon, nettoyage, et réservoir d'ions pour la reminéralisation",
          "Transporter les nutriments vers la pulpe dentaire"
        ],
        correctOptionIndexes: [2],
        explanation: "La salive a un rôle de pouvoir tampon par la neutralisation des acides bactériens par le flux. Elle assure l'élimination des aliments et des bactéries. Elle assure également le rôle de réservoir d'ions (calcium, phosphate, fluor). Elle permet une reminéralisation de l'émail."
      },
      {
        questionText: "Les bactéries les plus cariogènes sont:",
        options: [
          "Les lactobacilles.",
          "Les bactéries qui décomposent les polysaccharides et produisent de l'acide lactique.",
          "Les Streptocoques mutans.",
          "A cocci gram positif."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les Streptocoques mutans et les lactobacilles sont les bactéries les plus cariogènes, connues pour décomposer les polysaccharides et produire de l'acide lactique."
      },
      {
        questionText: "La trilogie de keys:",
        options: [
          "Établie la relation entre les trois principaux facteurs de risques de la carie : hôte + microflore acide.",
          "Établie la relation entre les trois principaux facteurs de risques de la carie : hôte + microflore + substrat alimentaire.",
          "Est modifié par Konig qui rajoute un facteur « temps ».",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La trilogie de Keys établit la relation entre l'hôte, la microflore et le substrat alimentaire comme principaux facteurs de risque de la carie, et a été modifiée par Konig qui a ajouté le facteur 'temps'."
      },
      {
        questionText: "L'indice CAOD :",
        options: [
          "Est la somme du nombre de faces ca riées absentes et obturées.",
          "Est la somme du nombre de dents cariées absentes et obturées.",
          "Varie de 0 à 32.",
          "Est toujours inférieur à 128."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'indice CAOD (Caries Absentes Obturées Dents) est la somme du nombre de faces cariées absentes et obturées, et varie de 0 à 32. L'indice CAOF (Caries Absentes Obturées Faces) est toujours inférieur à 128."
      },
      {
        questionText: "Les facteurs de risques liés à la présence de carie dentaire sont:",
        options: [
          "Des tissus parodontaux altérés.",
          "Le biofilm et les bactéries cariogènes.",
          "Le glucose présent dans la salive.",
          "Une hygiène bucco-dentaire parfaite."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les facteurs de risque liés à la présence de carie dentaire incluent le biofilm et les bactéries cariogènes, ainsi que le glucose présent dans la salive. L'hygiène bucco-dentaire parfaite n'est pas un facteur de risque."
      },
      {
        questionText: "L'évaluation du risque carieux per met:",
        options: [
          "De détecter les individus hautement susceptibles de développer des lésions carieuses.",
          "Elle permet de déterminer les mesures préventives efficaces.",
          "De choisir quels matériaux utiliser pour la restauration.",
          "Permet de déterminer si les lésions peuvent être traitées de manière non invasive."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'évaluation du risque carieux permet de détecter les individus susceptibles, de déterminer les mesures préventives, de choisir les matériaux de restauration et de décider si les lésions peuvent être traitées de manière non invasive."
      },
      {
        questionText: "La carie à évolution lente:",
        options: [
          "Lésion stationnaire.",
          "Lésion chronique et indolore.",
          "La dentinogenèse stabilise l'évolution de la carie.",
          "La dentinogenèse est arrêtée ou ralentie."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La carie à évolution lente est une lésion chronique et indolore où la dentinogenèse stabilise l'évolution de la carie."
      },
      {
        questionText: "La lésion carieuse initiale se caracté rise par:",
        options: [
          "Amplification des phénomènes de reminéralisation aux dépens de ceux de déminéralisation.",
          "Délocalisation des cristaux superficiels d'hydroxyapatite."
        ],
        correctOptionIndexes: [1],
        explanation: "La lésion carieuse initiale est caractérisée par la délocalisation des cristaux superficiels d'hydroxyapatite, qui conduit à la déminéralisation de l'émail."
      },
      {
        questionText: "Le cacao naturel contient trois subs tances au pouvoir anticariogène :",
        options: [
          "Les polyphénols.",
          "Le fluor.",
          "L'aspartame.",
          "Les phosphates.",
          "Le cyclamate."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le cacao naturel contient trois substances au pouvoir anticariogène : les polyphénols, le fluor et les phosphates."
      },
      {
        questionText: "La carie à évolution lente :",
        options: [
          "Lésion douloureuse.",
          "Lésion chronique et indolore.",
          "Dentinogenèse est arrêtée.",
          "La dentinogenèse stabilise l'évolution de la carie."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La carie à évolution lente est une lésion chronique et indolore, où la dentinogenèse stabilise son évolution, la rendant non douloureuse."
      },
      {
        questionText: "La Ca(OH)2 a:",
        options: [
          "Un pH alcalin",
          "Une faible résistance à la compression",
          "Un pouvoir dentinogène",
          "Une action hémostatique"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'hydroxyde de calcium (Ca(OH)2) a un pH alcalin, une faible résistance à la compression, et une action hémostatique, en plus de son pouvoir dentinogène."
      },
      {
        questionText: "Dans l'environnement buccal, l'Hydroxy apatite est en équilibre avec la salive saturée en Ca2+ et PO3 :",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Il est vrai que dans l'environnement buccal, l'hydroxyapatite est en équilibre avec la salive, qui est saturée en ions calcium et phosphate."
      },
      {
        questionText: "La carie dentaire est:",
        options: [
          "Un processus dynamique.",
          "Pathologie multifactorielle.",
          "Maladie transmissible.",
          "Maladie infectieuse pré-éruptive.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La carie dentaire est un processus dynamique, une pathologie multifactorielle et une maladie transmissible. Elle n'est pas pré-éruptive."
      },
      {
        questionText: "La lésion carieuse sub-clinique:",
        options: [
          "Est appelé également white spot.",
          "Est une lésion indolore.",
          "C'est une lésion qui peut se reminéraliser.",
          "Est une lésion amélaire cavitaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La lésion carieuse sub-clinique est également appelée 'white spot', est indolore et peut se reminéraliser. Elle n'est pas une lésion amélaire cavitaire."
      },
      {
        questionText: "La carte du cément :",
        options: [
          "Est fréquentée chez les personnes âgées après dénudation et exposition radiculaire.",
          "Se présente sous la forme d'une mince couche superficielle hyperminéralisée.",
          "Forte et rapide résistance à une lésion carieuse de la dentine au niveau du 1/3 cervical de la racine.",
          "Se présente sous la forme d'une mince couche superficielle partiellement déminé ralés."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La carie du cément est fréquente chez les personnes âgées après dénudation radiculaire. Elle présente une résistance à la lésion carieuse au niveau du tiers cervical de la racine. Elle n'est pas mince ni hyperminéralisée."
      },
      {
        questionText: "Dans quel cas; l'équilibre déminé ralisation-reminéralisation peut être rompu en faveur de la déminéralisation:",
        options: [
          "Un brossage régulier avec un dentifrice fluoré",
          "Une salivation abondante et un pH buccal neutre",
          "Des apports de sucres fermentescibles fréquents et répétés",
          "La consommation d'aliments riches en calcium et phosphates"
        ],
        correctOptionIndexes: [2],
        explanation: "L'équilibre déminéralisation-reminéralisation peut être rompu en faveur de la déminéralisation en cas d'apports de sucres fermentescibles en grande quantité mais surtout prolongés ou répétés à intervalles rapprochés."
      },
      {
        questionText: "Le PH continue de baisser:",
        options: [
          "Les phénomènes de déminéralisation s'amplifient aux dépens de ceux de la reminéralisation.",
          "Il se produit une dislocation des cristaux superficiels d'hydroxyapatite.",
          "Il se produit un élargissement des es paces cristallins",
          "Il se produit une augmentation de la porosité de l'émail."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Quand le pH continue de baisser, les phénomènes de déminéralisation s'amplifient, entraînant la dislocation des cristaux superficiels d'hydroxyapatite et une augmentation de la porosité de l'émail."
      },
      {
        questionText: "La reminéralisation de l'émail est caractérisée par quoi ?",
        options: [
          "Une perte de minéraux et une augmentation de la porosité",
          "L'apparition d'une cavitation visible à l'œil nu",
          "Une augmentation de la densité minérale et la consolidation de la lésion",
          "La disparition complète et immédiate de la tache blanche (white spot)"
        ],
        correctOptionIndexes: [2],
        explanation: "La reminéralisation de l'émail est caractérisée par une augmentation de la densité minérale de l'émail, ce qui permet la réorganisation initiale des prismes d'émail. Des taches blanches restent toujours visibles. On parlera alors de consolidation des lésions."
      },
      {
        questionText: "Parmi ces procédés lequel ou lesquels sont utilisés dans la prévention ca rieuse:",
        options: [
          "La déminéralisation.",
          "La reminéralisation.",
          "La scellement des anfractuosités.",
          "La scellement des puits et des fissures."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La reminéralisation, le scellement des anfractuosités et le scellement des puits et des fissures sont des procédés de prévention carieuse."
      },
      {
        questionText: "La carie dentaire est:",
        options: [
          "Un processus dynamique.",
          "Pathologie multifactorielle.",
          "Maladie transmissible.",
          "Maladie infectieuse pré-éruptive."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La carie dentaire est un processus dynamique, une pathologie multifactorielle et une maladie transmissible. Elle n'est pas exclusivement pré-éruptive."
      },
      {
        questionText: "La lésion ou white spot :",
        options: [
          "Est une lésion de sub-surface.",
          "Est une lésion de surface.",
          "Prend l'aspect de tache blanche.",
          "Peut se déminéraliser et donner nais sance à la tache brune ou « brown spot ».",
          "Est une atteinte de l'émail sans cavitation."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Une lésion white spot est une lésion de sub-surface, qui apparaît comme une tache blanche et peut évoluer vers une tache brune. C'est une atteinte de l'émail sans cavitation."
      }
    ]
  },
  {
    title: "Dynamique de la lésion carieuse",
    subject: "oce",
    questions: [
      {
        questionText: "Le phénomène de reminéralisation :",
        options: [
          "Est un processus favorisé par la présence d'ions fluor.",
          "Est un lieu au pH de l'environnement.",
          "N'implique pas la présence d'ions cal cium.",
          "Est similaire pour la dentine et le cément."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La reminéralisation est un processus favorisé par la présence d'ions fluor et influencé par le pH de l'environnement. Elle implique la présence d'ions calcium et phosphate. Le processus est similaire pour la dentine et le cément."
      },
      {
        questionText: "Le phénomène de reminéralisation :",
        options: [
          "Est un processus favorisé par la présence d'ions fluor.",
          "Est un lieu au pH de l'environnement.",
          "N'implique pas la présence d'ions cal cium.",
          "Est similaire pour la dentine et le cément."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La reminéralisation est un processus favorisé par la présence d'ions fluor, influencé par le pH de l'environnement, et similaire pour la dentine et le cément. Elle implique la présence d'ions calcium."
      },
      {
        questionText: "À un pH critique de 6,5, l'hydroxyapa tite réagit en surface avec les ions hydrogènes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "C'est à un pH critique de 5,5 que l'hydroxyapatite réagit en surface avec les ions hydrogènes, provoquant la déminéralisation de l'émail."
      },
      {
        questionText: "La lésion carieuse sub-clinique :",
        options: [
          "Est appelé également white spot.",
          "Est une lésion indolore.",
          "C'est une lésion qui peut se reminéraliser.",
          "Est une lésion amélaire cavitaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La lésion carieuse sub-clinique, ou 'white spot', est indolore et a le potentiel de se reminéraliser. Elle ne présente pas encore de cavitation."
      },
      {
        questionText: "Une atteinte de l'émail sans cavitation.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Une atteinte de l'émail sans cavitation est vraie pour la lésion carieuse initiale, souvent visible comme une 'white spot'."
      }
    ]
  },
  {
    title: "Instrumentation",
    subject: "oce",
    questions: [
      {
        questionText: "Quelle est l'instrumentation spéci fique au coffrage ?",
        options: [
          "Le brunissoir.",
          "La matrice.",
          "Le strip lisse.",
          "Les coins inter dentaires."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'instrumentation spécifique au coffrage inclut le brunissoir pour polir, la matrice pour reformer la paroi, le strip lisse pour l'ajustement proximal et les coins interdentaires pour la stabilité et l'étanchéité."
      },
      {
        questionText: "L'amalgame permet :",
        options: [
          "De condenser l'amalgame.",
          "De prélever et placer l'amalgame dans la cavité.",
          "De prélever le composite.",
          "De pré sculpter l'amalgame."
        ],
        correctOptionIndexes: [1],
        explanation: "L'amalgame est utilisé pour prélever et placer l'amalgame dans la cavité. La condensation se fait avec des condenseurs."
      },
      {
        questionText: "L'instrumentation spécifique à l'anesthésie est:",
        options: [
          "La cupule.",
          "La carpule.",
          "Le porte carpule.",
          "L'aiguille."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'instrumentation spécifique à l'anesthésie comprend la carpule (contenant l'anesthésique), le porte-carpule et l'aiguille."
      },
      {
        questionText: "La digue est:",
        options: [
          "Un moyen de coffrage.",
          "Un moyen d'isolation.",
          "Un champ opératoire.",
          "Moyen de finition du matériau de restau ration."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La digue est un moyen d'isolation qui crée un champ opératoire sec, essentiel pour de nombreuses procédures dentaires."
      },
      {
        questionText: "Les coins inter dentaires sont :",
        options: [
          "Des petits artifices quadrangulaires en bois",
          "Des petits artifices triangulaires en bois.",
          "Des petits artifices qui permettent de rétablir le point de contact inter dentaire.",
          "Des petits artifices utiliser dans les res taurations de type classe III."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les coins interdentaires sont de petits artifices triangulaires en bois ou en plastique, utilisés pour rétablir le point de contact interdentaire et assurer l'étanchéité lors des restaurations, notamment de classe II et III."
      },
      {
        questionText: "Parmi les moyens de coffrage nous avons:",
        options: [
          "Les moules Odus de Caulk utilisés pour les restaurations des cavités de classe V.",
          "Les strips lisses en polyéthylène utilisés pour les restaurations de classe III et IV de Black.",
          "Le ruban matrice qui est un ruban transparent.",
          "Les matrices cervicales de Hawe uti lisées pour les restaurations de classe V (traitement des myololyse et hypoplasie)."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les moyens de coffrage incluent les moules Odus de Caulk et les matrices cervicales de Hawe pour les restaurations de classe V, ainsi que les strips lisses en polyéthylène pour les restaurations de classe III et IV de Black. Le ruban matrice est un moyen de coffrage général."
      },
      {
        questionText: "La turbine:",
        options: [
          "Est montée sur un micromoteur qui fonctionne à l'air comprimé.",
          "Permet la taille des cavités en un temps record, sans de vibration.",
          "Possède une grande vitesse : 1200000/ mn."
        ],
        correctOptionIndexes: [0],
        explanation: "La turbine est montée sur un micromoteur fonctionnant à l'air comprimé et permet la taille des cavités. Cependant, elle est caractérisée par une grande vitesse de rotation (plus de 1 200 000 tr/min) mais peut générer des vibrations."
      },
      {
        questionText: "Le volume des carpules d'anesthésie est standardisé à :",
        options: [
          "1,4 ml",
          "1,6 ml",
          "1,2 ml",
          "1,8 ml"
        ],
        correctOptionIndexes: [1],
        explanation: "Le volume standardisé des carpules d'anesthésie est de 1,6 ml."
      },
      {
        questionText: "La mise en place de la digue :",
        options: [
          "Nous permet de travailler rapidement.",
          "Nous permet une meilleure visibilité.",
          "Rend l'accès plus difficile.",
          "Nous permet d'obtenir un champ opéra toire étanche."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La mise en place de la digue permet une meilleure visibilité et d'obtenir un champ opératoire étanche, mais elle peut rendre l'accès plus difficile et ne permet pas nécessairement de travailler plus rapidement."
      },
      {
        questionText: "Les moules Odus de Caulk sont utili sés pour:",
        options: [
          "Les restauration classe II.",
          "Les restauration classe III.",
          "Les restauration classe V.",
          "Les restauration classe V."
        ],
        correctOptionIndexes: [2],
        explanation: "Les moules Odus de Caulk sont utilisés pour les restaurations de classe V."
      },
      {
        questionText: "Les coins inter dentaires sont :",
        options: [
          "Des petits artifices quadrangulaires en bois",
          "Des petits artifices triangulaires en bois.",
          "Des petits artifices qui permettent de rétablir le point de contact inter dentaire.",
          "Des petits artifices utiliser dans les res taurations de type classe III."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les coins interdentaires sont de petits artifices triangulaires en bois ou en plastique, utilisés pour rétablir le point de contact interdentaire et assurer l'étanchéité lors des restaurations, notamment de classe III."
      },
      {
        questionText: "Parmi les moyens de coffrage nous avons:",
        options: [
          "Les moules Odus de Caulk utilisées pour les restaurations des cavités de classe V.",
          "Les strips lisses en polyéthylène utilisés pour les restaurations de classe III et IV de Black.",
          "Le ruban matrice qui est un ruban transparent.",
          "Les matrices cervicales de Hawe uti lisées pour les restaurations de classe V (traitement des myololyse et hypoplasie)."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les moyens de coffrage incluent les moules Odus de Caulk et les matrices cervicales de Hawe pour les restaurations de classe V, ainsi que les strips lisses en polyéthylène pour les restaurations de classe III et IV."
      },
      {
        questionText: "L'utilisation de la digue nécessite :",
        options: [
          "La mise en place de rouleau de cotons.",
          "L'utilisation d'une aspiration avec une pompe à salive.",
          "Des feuilles de digues en latex.",
          "Une anesthésie locale."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'utilisation de la digue nécessite l'emploi de feuilles de digues en latex et l'utilisation d'une aspiration. Les rouleaux de coton peuvent être utilisés mais ne sont pas obligatoires avec la digue. L'anesthésie locale est souvent nécessaire avant la pose de la digue mais ne fait pas partie de l'instrumentation de la digue."
      },
      {
        questionText: "La matrice cervicale de Hawe est utili sée pour les:",
        options: [
          "Restaurations de classe III.",
          "Restaurations de classe III.",
          "Restaurations de classe V.",
          "Restaurations de classe V."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les matrices cervicales de Hawe sont utilisées pour les restaurations de classe V."
      }
    ]
  },
  {
    title: "Les concepts actuels de préparation de cavités",
    subject: "oce",
    questions: [
      {
        questionText: "Parmi les options thérapeutiques en dentisterie à minima :",
        options: [
          "Les soins préventifs non invasifs.",
          "Les soins opératoires à minima.",
          "Les soins restaurateurs non convention nels.",
          "Les soins opératoires invasifs."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les options thérapeutiques en dentisterie à minima incluent les soins préventifs non invasifs et les soins opératoires à minima."
      },
      {
        questionText: "Le risque carieux :",
        options: [
          "Susceptibilité faible : faces occlusales des dents inférieures.",
          "Susceptibilité moyenne : faces occlu sales + cervicales postérieures.",
          "Susceptibilité élevée : les faces occlu sales + dents antérieures particulièrement les canines inférieures.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [3],
        explanation: "Le risque carieux varie, de faible à élevé, en fonction de la localisation des lésions et de la susceptibilité de la dent."
      },
      {
        questionText: "Le modèle chirurgical peut invasif :",
        options: [
          "Utilise des méthodes prophylactiques peu invasives.",
          "Utilise des méthodes prophylactiques non invasives.",
          "Les tissus cariés et déminéralisés sont éliminés.",
          "Les tissus caries sont éliminés."
        ],
        correctOptionIndexes: [3],
        explanation: "Le modèle chirurgical implique l'élimination des tissus cariés, même s'il peut être invasif. Les méthodes prophylactiques sont généralement non invasives ou peu invasives."
      },
      {
        questionText: "La laserothérapie entraîne :",
        options: [
          "Une cavitation de l'émail.",
          "Une carbonisation de l'émail.",
          "Une altération de l'émail.",
          "Une fissuration de l'émail."
        ],
        correctOptionIndexes: [3],
        explanation: "La laserothérapie peut entraîner une fissuration de l'émail. Elle ne cause pas de cavitation, carbonisation ou altération généralisée de l'émail si elle est correctement utilisée."
      },
      {
        questionText: "En obéissant au principe d'économie tissulaire :",
        options: [
          "On va ménager l'émail.",
          "On va préserver les tissus résiduels.",
          "On va assurer le maintien du matériau de restauration.",
          "On garantit la longévité de la de dent naturelle restaurée."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "En obéissant au principe d'économie tissulaire, on préserve les structures dentaires saines et les tissus résiduels, ce qui garantit la longévité de la dent naturelle restaurée."
      },
      {
        questionText: "Dans le modèle médical préventif non invasif on pratique des mesures prophy lactiques tel que:",
        options: [
          "L'application de fluor.",
          "Le scellement adhésif des puits et des fissures."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Dans le modèle médical préventif non invasif, on pratique des mesures prophylactiques telles que l'application de fluor et le scellement adhésif des puits et des fissures."
      },
      {
        questionText: "Une cavité tunnel est:",
        options: [
          "Une cavité de site 2 avec préservation de la crête marginale.",
          "Toujours réalisée avec un accès du côté vestibulaire.",
          "Réalisée avec accès au niveau de la fossette pour les molaires avec destruction de la crête marginale.",
          "Obturée avec un composite fluide « flow »."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une cavité tunnel est une cavité de site 2 avec préservation de la crête marginale, réalisée avec un accès vestibulaire ou du côté palatin pour les molaires."
      },
      {
        questionText: "Une finition par biseau des bords amélaires sera réalisée :",
        options: [
          "De manière à assurer la meilleure adhé sion possible sur l'émail",
          "De telle sorte que l'éviction des tissus carieux laissés sera la meilleure.",
          "De manière à assurer la meilleure étan chéité.",
          "Dans un souci d'économie tissulaire."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Une finition par biseau des bords amélaires est réalisée pour assurer une meilleure adhésion sur l'émail, une meilleure étanchéité et dans un souci d'économie tissulaire."
      },
      {
        questionText: "Les options thérapeutiques en dentis terie à minima :",
        options: [
          "Les soins préventifs non invasifs.",
          "Les soins opératoires à minima.",
          "Les soins restaurateurs non convention nels.",
          "Les soins opératoires invasifs."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La dentisterie à minima vise à préserver au maximum les tissus dentaires sains, en privilégiant les soins préventifs non invasifs et les soins opératoires à minima."
      },
      {
        questionText: "La dentisterie à minima :",
        options: [
          "Consiste en des actes non chirurgicaux ciblé.",
          "Consiste en des actes chirurgicaux non ciblés.",
          "Implique un accès réduit et un curetage limité aux seuls tissus pathologiques.",
          "Vise à réduire au maximum les struc tures saines."
        ],
        correctOptionIndexes: [2],
        explanation: "La dentisterie à minima implique un accès réduit et un curetage limité aux seuls tissus pathologiques, dans le but de préserver un maximum de tissus sains."
      }
    ]
  },
  {
    title: "Dentisterie a minima",
    subject: "oce",
    questions: [
      {
        questionText: "Quel est le matériel nécessaire en dentisterie à minima :",
        options: [
          "Des aides optiques.",
          "Radiographie rétrocoronaire.",
          "Des fraises de gros diamètre.",
          "Des matériaux de restauration adhésifs."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le matériel nécessaire en dentisterie à minima inclut la radiographie rétrocoronaire et les matériaux de restauration adhésifs. Les aides optiques sont utiles mais non 'nécessaires', et on utilise des fraises de petit diamètre."
      },
      {
        questionText: "Les techniques d'obturation par col lage sont les techniques de choix mieux aux critères de conservation tissulaire:",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les techniques d'obturation par collage sont les techniques de choix qui permettent de répondre au mieux aux critères de conservation tissulaire."
      },
      {
        questionText: "Dentisterie à minima :",
        options: [
          "Une approche chirurgicale qui préconise l'extension systématique des cavités",
          "Une approche moderne et conservatrice visant à préserver au maximum les tissus sains",
          "L'utilisation exclusive d'amalgame pour toutes les restaurations",
          "Un traitement qui ignore les mesures préventives"
        ],
        correctOptionIndexes: [1],
        explanation: "La dentisterie à minima est une dentisterie moderne qui est apparue avec l'avènement des nouveaux matériaux de restauration. Elle vise à être conservatrice."
      }
    ]
  },
  {
    title: "Lésions des tissus durs de la dent d'origine autre qu'infectieuse et traumatique",
    subject: "oce",
    questions: [
      {
        questionText: "Afin de prévenir les érosions il faut:",
        options: [
          "Utiliser un dentifrice abrasif.",
          "Utiliser un dentifrice à teneur élevé en fluor.",
          "Limiter les boissons acides.",
          "Utiliser une brosse à dent à polis souple."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Pour prévenir les érosions, il est recommandé d'utiliser un dentifrice à teneur élevée en fluor, de limiter les boissons acides et d'utiliser une brosse à dents à poils souples. Les dentifrices abrasifs sont à éviter."
      },
      {
        questionText: "L'attrition:",
        options: [
          "Est un processus d'usure dentaire",
          "Nécessitant la stabilisation de DVO à l'aide d'un composite.",
          "Engendre des troubles occluso-fonctionnels.",
          "Se situe au collet, à la jonction cémen to-dentinaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'attrition est un processus d'usure dentaire (destruction des surfaces occlusales par frottement) qui peut nécessiter une stabilisation de la DVO avec un composite et engendrer des troubles occluso-fonctionnels. Elle ne se situe pas au collet."
      },
      {
        questionText: "Les facteurs étiologiques d'origine intrinsèque, impliquées dans le processus d'érosion sont :",
        options: [
          "L'anorexie.",
          "La rumination.",
          "La boulimie.",
          "Le reflux gastro-oesophagien."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les facteurs étiologiques intrinsèques impliqués dans le processus d'érosion sont l'anorexie, la rumination, la boulimie et le reflux gastro-œsophagien, car ils exposent les dents à des acides endogènes."
      },
      {
        questionText: "Le phénomène d'attrition :",
        options: [
          "Est fréquemment retrouvé chez les bruxomanes.",
          "Est également appelé myololyse.",
          "Est due à un serrage exagéré des deux maxillaires.",
          "Touche plus le maxillaire supérieur."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'attrition est souvent retrouvée chez les bruxomanes et est due à un serrage exagéré des deux maxillaires. Ce n'est pas la myololyse."
      },
      {
        questionText: "La thérapeutique des lésions d'usures des tissus durs de la dent :",
        options: [
          "Nécessite toujours une restauration au composite.",
          "Nécessite l'utilisation du composite en technique indirecte ou direct.",
          "Peut se limitée uniquement à un traite ment préventif.",
          "À pour but de préserver les structures dentaires restantes."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La thérapeutique des lésions d'usures des tissus durs de la dent vise à préserver les structures dentaires restantes et peut se limiter à un traitement préventif. L'utilisation du composite peut être directe ou indirecte."
      },
      {
        questionText: "Le phénomène induit par des acides exogènes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Un phénomène induit par des acides exogènes est vrai pour l'érosion dentaire, qui est causée par des acides d'origine externe."
      },
      {
        questionText: "Le phénomène induit principalement par un processus chimique.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Il est vrai que l'érosion dentaire est induite principalement par un processus chimique, à savoir l'action des acides."
      },
      {
        questionText: "L'abrasion est:",
        options: [
          "Est une perte de substance occlusale.",
          "Est une perte de substance dans la jonction amélo-cémentaire.",
          "Se manifeste suite à l'application des charges occlusales excessives.",
          "Fait suite à une intervention Bactério logique."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'abrasion est une perte de substance dans la jonction amélo-cémentaire due à l'application de charges occlusales excessives ou à un brossage traumatique."
      },
      {
        questionText: "L'érosion est:",
        options: [
          "Une pathologie chronique localisée sans envahissement bactérien.",
          "Un phénomène induit uniquement par un processus chimique.",
          "Est induite par des acides d'origine en dogène comme les jus de fruit.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'érosion est une pathologie chronique localisée, sans envahissement bactérien, induite par un processus chimique. Elle peut être causée par des acides d'origine endogène ou exogène."
      },
      {
        questionText: "La décoloration des dents associées au praticien peuvent êtres superficielles ou incorporées à l'intérieur des struc tures dentaires :",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Il est faux que les décolorations des dents associées au praticien soient des facteurs étiologiques d'origine intrinsèque."
      },
      {
        questionText: "Le phénomène d'attrition est :",
        options: [
          "Due au frottement des dents à une substance autre que la dent antagoniste.",
          "Se situe au niveau du collet.",
          "Due au brossage intempestif.",
          "Est un phénomène d'usure due au frot tement des dents entre elles."
        ],
        correctOptionIndexes: [3],
        explanation: "L'attrition est un phénomène d'usure des dents causé par le frottement des dents entre elles (occlusal ou interproximal). Elle n'est pas due au frottement avec une substance autre, ni au brossage, ni située au collet."
      },
      {
        questionText: "Le dioxyde d'hydrogène est:",
        options: [
          "Utilisé à des concentrations allant jusqu'à 35%.",
          "Présente un pH acide",
          "Est dangereux pour la peau et la mu queuse buccale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "Le peroxyde d'hydrogène (H2O2) est utilisé à des concentrations variables, peut présenter un pH acide, et est dangereux pour la peau et les muqueuses buccales."
      },
      {
        questionText: "La technique d'éclaircissement externe :",
        options: [
          "Est indiquée pour le traitement des dyschromies sur dents vitales.",
          "Utilise le perborate de sodium.",
          "Est réservée à l'éclaircissement des dents dépulpées.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0],
        explanation: "La technique d'éclaircissement externe est indiquée pour le traitement des dyschromies sur dents vitales."
      }
    ]
  },
  {
    title: "Dyschromies dentaires",
    subject: "oce",
    questions: [
      {
        questionText: "Les dyschromies extrinsèques :",
        options: [
          "Peuvent survenir durant ou après la formation de l'émail.",
          "Sont des colorations superficielles.",
          "Peuvent être génétiques ou congénitales.",
          "Sont incorporées à la structure externe de l'émail."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les dyschromies extrinsèques sont des colorations superficielles, survenant après la formation de l'émail et incorporées à la structure externe de l'émail. Elles ne sont pas génétiques."
      },
      {
        questionText: "Dans le système colorimétrique de la dent, la saturation :",
        options: [
          "Dépend principalement de la dentine.",
          "Est le degré de clarté de la couleur.",
          "Se situe dans le jaune-orange.",
          "Dépend de la translucidité de l'émail."
        ],
        correctOptionIndexes: [0],
        explanation: "Dans le système colorimétrique de la dent, la saturation dépend principalement de la dentine, qui exprime la densité ou la quantité de pigments contenus dans une couleur."
      },
      {
        questionText: "Les dyschromies intrinsèques sont des atteintes :",
        options: [
          "Pré éruptives uniquement.",
          "Génétiques ou congénitales.",
          "Poste éruptives.",
          "Par incorporation d'agents colorants au sein du complexe pulpo-dentinaire."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les dyschromies intrinsèques peuvent être génétiques, congénitales, ou survenir en post-éruptif par l'incorporation d'agents colorants au sein du complexe pulpo-dentinaire."
      },
      {
        questionText: "La translucidité de la dent :",
        options: [
          "Diminue avec l'âge.",
          "Dépend principalement de l'épaisseur de la dentine.",
          "Augmente avec l'âge.",
          "Exprime la densité des pigments dans la couleur."
        ],
        correctOptionIndexes: [1],
        explanation: "La translucidité de la dent dépend principalement de l'épaisseur de l'émail et de la dentine, et non de son épaisseur seule."
      },
      {
        questionText: "Parmi les causes de dyschromie dentaire associé aux traitements réalisés par le praticien :",
        options: [
          "Les obturations à l'amalgame et aux composites.",
          "L'endodontie complète.",
          "L'hémorragie pulpaire.",
          "La fluorose dentaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Les obturations à l'amalgame et aux composites peuvent causer des dyschromies. L'hémorragie pulpaire est une cause intrinsèque, et la fluorose est une dyschromie intrinsèque mais non causée par le praticien."
      },
      {
        questionText: "L'amélogenèse imparfaite :",
        options: [
          "Est une dyschromie Pré-éruptive.",
          "Est une maladie héréditaire d'étiologie mono génique.",
          "Touche uniquement les dents déciduées.",
          "Présente un émail d'épaisseur réduite et aminci laisse apparaître la dentine sous jacente."
        ],
        correctOptionIndexes: [3],
        explanation: "L'amélogenèse imparfaite est une dyschromie pré-éruptive, héréditaire, où l'émail est d'épaisseur réduite et aminci, laissant apparaître la dentine sous-jacente. Elle peut toucher les dents déciduées et permanentes."
      },
      {
        questionText: "La coloration aux tétracyclines :",
        options: [
          "Peut être sévère et dépend du dosage et de la durée.",
          "Peut être due à la chlorotétracycline et donner une coloration gris-noir.",
          "Peut être due à l'oxytétracycline et donner une coloration jaune orangée.",
          "Peut être due à la tétracycline et donner une coloration gris-brun."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La coloration aux tétracyclines est sévère et dépend du dosage et de la durée. La chlorotétracycline donne une coloration gris-noir, et l'oxytétracycline une coloration jaune orangée."
      },
      {
        questionText: "L'éclaircissement dentaire :",
        options: [
          "Consiste en une réaction chimique entre l'agent colorant et la dent.",
          "Est un adoucissement de la teinte de la dent à l'aide de produit chimique.",
          "Peut être réalisé sur dent dévitalisée",
          "Peut être réalisé sur dent dépulpées"
        ],
        correctOptionIndexes: [0],
        explanation: "L'éclaircissement dentaire est une réaction chimique entre l'agent décolorant et la matière organique pigmentée de la dent. Il s'agit d'un processus de blanchiment."
      },
      {
        questionText: "La luminosité de la dent :",
        options: [
          "Dépend principalement de la dentine.",
          "Est la quantité de lumière réfléchie par la dent.",
          "Dépend uniquement de la qualité de l'émail.",
          "Elle constitue la propriété de la dentine à transformer la lumière."
        ],
        correctOptionIndexes: [1],
        explanation: "La luminosité de la dent est le degré de clarté ou d'obscurité d'une couleur, dépendant principalement de la quantité et de la qualité de l'émail."
      },
      {
        questionText: "La technique d'éclaircissement externe:",
        options: [
          "Est indiquée pour le traitement des dyschromies sur dents vitales.",
          "Utilise le perborate de sodium.",
          "Est réservée à l'éclaircissement des dents dépulpées.",
          "Utilise l'eau oxygénée."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La technique d'éclaircissement externe est indiquée pour le traitement des dyschromies sur dents vitales et utilise le peroxyde d'hydrogène (eau oxygénée)."
      },
      {
        questionText: "La couleur naturelle de la dent est défini par:",
        options: [
          "La teinte.",
          "La maturation.",
          "La saturation.",
          "La luminosité."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La couleur naturelle de la dent est définie par la teinte (teinte, saturation, luminosité)."
      },
      {
        questionText: "Les dyschromies dentaires :",
        options: [
          "Sont des dépigmentations des dents.",
          "Peuvent être dues à des causes iatro gènes.",
          "Peuvent être dues au patient elles sont donc dites endogènes.",
          "Peuvent survenir pendant ou après la formation de la dentine et de l'émail."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les dyschromies dentaires sont des altérations de la couleur des dents, qui peuvent être dues à des causes iatrogènes (liées aux traitements) ou survenir pendant ou après la formation de la dentine et de l'émail."
      },
      {
        questionText: "L'oxytetracycline provoque une colo ration gris-brun de la dent :",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'oxytétracycline provoque une coloration jaune-orangée, tandis que la chlorotétracycline est associée à des colorations gris-noir."
      },
      {
        questionText: "La luminosité de la dent :",
        options: [
          "Correspond à la translucidité de l'émail",
          "Dépend en grande partie de la dentine",
          "Est la quantité de lumière réfléchie par la dent.",
          "Augmente avec l'âge"
        ],
        correctOptionIndexes: [2],
        explanation: "La luminosité de la dent est le degré de clarté ou d'obscurité d'une couleur, dépendant de la quantité et de la qualité de la lumière réfléchie par la dent."
      },
      {
        questionText: "La translucidité de la dent :",
        options: [
          "Diminue avec l'âge.",
          "Dépend principalement de l'épaisseur de l'émail.",
          "Augmente avec l'âge.",
          "Exprime la densité des pigments dans la couleur."
        ],
        correctOptionIndexes: [1],
        explanation: "La translucidité de la dent dépend principalement de l'épaisseur de l'émail, qui est transparente, et de la dentine, qui a une couleur plus intense."
      },
      {
        questionText: "Les colorations intrinsèques post éruptives sont représentées par :",
        options: [
          "La fluorose endémique.",
          "Les colorations dues au vieillissement de l'organe dentaire.",
          "Les colorations post traumatiques.",
          "Les colorations dues aux tétracyclines."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les colorations intrinsèques post-éruptives sont dues au vieillissement de l'organe dentaire et aux traumatismes. La fluorose et les tétracyclines sont des causes pré-éruptives ou de développement."
      },
      {
        questionText: "Les colorations intrinsèques pré-éruptives sont représentées par :",
        options: [
          "La mélanodontie infantile.",
          "La fluorose dentaire.",
          "L'hémorragie pulpaire post traumatique.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les colorations intrinsèques pré-éruptives sont représentées par la mélanodontie infantile, la fluorose dentaire et l'hémorragie pulpaire post-traumatique."
      },
      {
        questionText: "La translucidité de la dent :",
        options: [
          "Diminue avec l'âge.",
          "Dépend principalement de l'épaisseur de l'émail.",
          "Augmente avec l'âge.",
          "Exprime la densité des pigments dans la couleur.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "La translucidité de la dent dépend principalement de l'épaisseur de l'émail et de la dentine. Elle ne diminue pas nécessairement avec l'âge."
      },
      {
        questionText: "Dans le système colorimétrique de la dent la saturation:",
        options: [
          "Dépend principalement de la dentine.",
          "Est le degré de clarté de la couleur.",
          "Se situe dans le jaune-orange.",
          "Dépend de la translucidité de l'émail.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0],
        explanation: "La saturation de la couleur de la dent dépend principalement de la dentine, qui exprime la densité ou la quantité de pigments contenus dans une couleur."
      }
    ]
  },
  {
    title: "Les moyens de détection des lésions carieuses",
    subject: "oce",
    questions: [
      {
        questionText: "La lésion carieuse :",
        options: [
          "Se traduit par une image radio opaque sur un cliché radiographique.",
          "Se manifeste par une image radio claire sur le diagnostic.",
          "Se traduit par une augmentation de fluorescence.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "La lésion carieuse se traduit par une augmentation de fluorescence sous certains systèmes de détection. Elle apparaît radio-claire (radio-transparente) sur un cliché radiographique, non radio-opaque."
      },
      {
        questionText: "Dans la détection des lésions ca rieuses, le sondage est effectué à l'aide des sondes numéro 19 et 7 :",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le sondage dans la détection des lésions carieuses est effectué avec une sonde parodontale numéro 17."
      },
      {
        questionText: "L'inspection clinique présente les avantages suivants :",
        options: [
          "Sa facilité.",
          "Peu de moyen de mise en œuvre.",
          "Sa facilité d'accès à certains sites notamment les faces proximales.",
          "La facilité d'avoir un bon éclairage au niveau des zones postérieures."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'inspection clinique est facile et nécessite peu de moyens. Cependant, elle peut être limitée pour l'accès aux faces proximales et l'éclairage des zones postérieures."
      },
      {
        questionText: "La transillumination est le:",
        options: [
          "Qui permet de détecter les caries occlu sales débutantes",
          "Se fait moyen d'un Diagnodent",
          "Permet de lire la valeur de la déminérali sation sur l'opac.",
          "Qui permet de détecter les fêlures ou de caries proximales par interruption de la lumière diffusée."
        ],
        correctOptionIndexes: [3],
        explanation: "La transillumination permet de détecter les fêlures ou les caries proximales par interruption de la lumière diffusée. Elle n'est pas effectuée avec un Diagnodent."
      },
      {
        questionText: "Le Photodiagnoser:",
        options: [
          "Produit une image de la dent et donne une valeur numérique de la déminéralisa tion.",
          "Permet un diagnostic précoce des lé sions carieuses.",
          "Permet des résultats faibles même en présence de plaque et de tartre.",
          "Est sans douleur."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le Photodiagnoser permet un diagnostic précoce des lésions carieuses et est sans douleur. Il fournit une valeur numérique de la déminéralisation. Ses résultats peuvent être affectés par la présence de plaque et de tartre."
      },
      {
        questionText: "Examen radiographique rétro-coro naire:",
        options: [
          "Appelée aussi rétro-alvéolaire.",
          "Appelée aussi bite-wing.",
          "Apporte au praticien le maximum d'in formation sur l'intégrité tissulaire coro naire.",
          "Est un examen réalisé en bouche ou verte."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'examen radiographique rétro-coronaire (ou bite-wing) fournit le maximum d'informations sur l'intégrité tissulaire coronaire et est réalisé en bouche fermée."
      },
      {
        questionText: "Expliquez le principe de la Fluores cence Laser dans la détection des lésions carieuses.",
        options: [
          "Le tissu sain émet une forte fluorescence, tandis que le tissu carié l'absorbe",
          "Les zones déminéralisées émettent une fluorescence plus importante que les tissus sains",
          "Le laser mesure la résistance électrique des tissus pour détecter la carie",
          "Le laser chauffe la dent et une caméra thermique détecte les zones cariées"
        ],
        correctOptionIndexes: [1],
        explanation: "Les dents sont illuminées avec une lumière Laser de longueur d'onde de 655nm qui est absorbée par la substance organique et inorganique. Les zones déminéralisées (la carie dentaire) sont mises en évidence par une fluorescence importante. Le Diagnodent ne produit pas une image de la dent, mais affiche une valeur numérique de 1 à 99 indiquant ainsi le degré de déminéralisation du site testé. S'il est sain, l'appareil donnera une valeur numérique très faible."
      }
    ]
  }
];

module.exports = oceQuizzes;