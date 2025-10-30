const oceQuizzes = [
  {
    title: "Présentation des cavités de classe III",
    subject: "oce",
    questions: [
      {
        questionText: "La cavité de carie type classe III.C de Black est une :",
        options: [
          "A. Cavité de carie triface complexe.",
          "B. Cavité qui peut être vestibulo-proximo-linguale.",
          "C. Cavité qui peut être mésio-occluso-distale.",
          "D. Cavité qui peut être mésio-palato-distale."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La classe III.C est une cavité complexe qui touche au minimum trois faces. Elle peut être soit vestibulo-proximo-linguale, soit mésio-palato-distale. L'option C est incorrecte car elle décrit une classe II (MOD). Il n'est pas recommandé de réunir des cavités de classe III par la face vestibulaire pour des raisons esthétiques."
      },
      {
        questionText: "La cavité de carie type classe III.A de Black",
        options: [
          "A. Est une cavité complexe.",
          "B. Est une cavité simple.",
          "C. Est une cavité de carie qui intéresse deux faces de la couronne.",
          "D. Présente un accès direct dans le cas où la dent voisine est absente."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A : Faux ;est une cavité simple . [cite: 161]\n C : Faux,est une cavité de carie qui intéresse une seule face de la couronne . [cite: 161]"
      },
      {
        questionText: "La cavité de carie type classe Ill de Black est une:",
        options: [
          "A. Carie proximale qui peut siéger sur la 12,13 ou 14.",
          "B. Carie mésiale qui peut siéger sur la 42et 31.",
          "C. Carie proximale sur le groupe prémolo-molaire supérieure.",
          "D. Cavité de carie avec atteinte de l'angle incisif."
        ],
        correctOptionIndexes: [1],
        explanation: "La classe III concerne uniquement les caries proximales des incisives et des canines. La prémolaire (14) n'est donc pas concernée. Si l'angle incisif est atteint, la lésion est classée comme une classe IV."
      },
      {
        questionText: "La classe IIIC est :",
        options: [
          "A. Une cavité simple englobant au minimum trois faces coronaire.",
          "B. L'existence de 2 cavités de classe III sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire.",
          "C. Vestibulo-Prox-Linguale ou Mesio-Palato-Distale",
          "D. Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [2],
        explanation: "La classe IIIC est une cavité complexe qui englobe au minimum trois faces coronaires. Elle résulte de la réunion de deux cavités de classe III proximales à travers la face palatine (jamais vestibulaire pour des raisons esthétiques), formant ainsi une cavité de type Mésio-Palato-Distale ou Vestibulo-Proximo-Linguale."
      },
      {
        questionText: "La classe III de Black: est une lésion carieuse qui siège sur la face proximale des Incisives et canines avec destruction l’angle incisif.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La définition est fausse. Une lésion de classe III affecte les faces proximales des incisives et des canines SANS atteinte de l'angle incisif. Si l'angle est détruit, il s'agit d'une classe IV."
      },
      {
        questionText: "Pour la cavité de préparation classe III en cas de présence de dent collatérale :",
        options: [
          "A. L'abord est indirect sur la face palatine",
          "B. Elle présente juste une cavité de préparation simple",
          "C. Elle présente une cavité composée",
          "D. La cavité principale est reliée à la cavité secondaire par un isthme"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "En présence d'une dent adjacente, l'accès à une carie de classe III se fait de manière indirecte, généralement par la face palatine pour préserver l'esthétique. La préparation est alors composée, avec une cavité principale (proximale) et une cavité secondaire (palatine) reliées par un isthme pour assurer la rétention."
      },
      {
        questionText: "La cavité secondaire d'une cavité de préparation de classe III:",
        options: [
          "A. Est située sur la face palatine",
          "B. A une forme d'un triangle",
          "C. A une forme d'une queue d'aronde",
          "D. Son fond est perpendiculaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La cavité secondaire, créée pour la rétention, est généralement située sur la face palatine et a une forme caractéristique en queue d'aronde."
      },
      {
        questionText: "La classe IIIC est:",
        options: [
          "A. L'existence de 2 cavités de classe Ill sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire.",
          "B. Vestibulo-Prox-Linguale ou Mesio-Palato-Distale.",
          "C. Une cavité simple englobant au minimum trois faces coronaire.",
          "D. toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "La classe IIIC est une cavité complexe touchant au moins trois faces, comme Vestibulo-Proximo-Linguale ou Mésio-Palato-Distale. Elle est formée par la réunion de deux lésions de classe III proximales via la face palatine, et non la face vestibulaire."
      },
      {
        questionText: "Pour augmenter la rétention dans une préparation de cavité classe III A on réalise :",
        options: [
          "A. 3 pertuis au niveau des angles trièdres à l'aide d'une fraise cylindrique dans une direction verticale.",
          "B. 3 pertuis au niveau des angles trièdres à l'aide d'une fraise boule dans une direction verticale.",
          "C. Une encoche à l'aide d'une fraise cylindrique au niveau du fond de la cavité (Élargir le fond) surtout pour le cas de cavité simple étendue.",
          "D. Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [3],
        explanation: "Toutes les propositions sont incorrectes. Pour améliorer la rétention, on peut réaliser trois pertuis aux angles trièdres avec une fraise boule fine dans une direction oblique, ou créer une encoche au fond de la cavité avec une fraise cône renversé."
      }
    ]
  },
  {
    title: "dynamiques de la lésion carieuse",
    subject: "oce",
    questions: [
      {
        questionText: "La zone translucide:",
        options: [
          "A. Est localisée en profondeur vers la jonction améto-dentinaire.",
          "B. Est situé entre la zone sombre et la couche de surface",
          "C. Présente une porosité de 1%",
          "D. Présente une grande perte minérale de 24%"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La zone translucide est la zone la plus profonde de la lésion carieuse de l'émail, située vers la jonction amélo-dentinaire. Elle présente une porosité de 1%. La perte minérale de 24% est caractéristique du corps de la lésion, qui est plus superficiel."
      },
      {
        questionText: "La zone translucide:",
        options: [
          "A. Localisée en profondeur vers la jonction amélo-dentinaire",
          "B. Situé entre la zone sombre et la couche de surface",
          "C. Présente une porosité de 1%.",
          "D. Présente une grande perte minérale de 24%."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B :Faux,elle est tout au fond (la plus profonde), ensuite vient la zone sombre, puis le corps de la lésion, et enfin la couche de surface. [cite: 15]\nD :Faux, La perte minérale de 24% n’est pas du tout caractéristique de cette zone, mais du corps de la lésion. [cite: 16]"
      },
      {
        questionText: "Le phénomène de reminéralisation:",
        options: [
          "A. Est un processus favorisé par la présence d'ions fluor",
          "B. Es liée au pH de l'environnement",
          "C. N'implique pas la présence d'ions calcium",
          "D. Est similaire pour la dentine et le cément"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "C : faux,implique la présence d'ions calcium. [cite: 506]"
      },
      {
        questionText: "Dans une cavité proximale pour amalgame sur dents postérieures réalisée selon les nouveaux concepts:",
        options: [
          "A. La préparation proximale est réalisée sans extension prophylactique.",
          "B. On parle de cavité très économe.",
          "C. La rétention axiale est assurée par une divergence des parois vestibulaires et linguales en direction occlusale.",
          "D. Des rainures sont réalisées à l'aide d'une fraise fissure, sur les parois vestibulaire et linguale, au niveau des angles internes qu'elles forment avec la paroi pulpo-axiale."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C :faux ,La rétention axiale est assurée par une convergence des parois vestibulaires et linguales en direction occlusale. [cite: 687]\nD :faux ,Des rainures sont réalisées à l'aide d'une fraise boule contre-angle,sur les parois vestibulaire et linguale, au niveau des angles internes qu'elles forment avec la paroi pulpo-axiale. [cite: 688]"
      },
      {
        questionText: "Une cavité tunnel est:",
        options: [
          "A. Une cavité de site 2 avec préservation de la crête marginale",
          "B. Toujours réalisée avec un accès du côté vestibulaire",
          "C. Réalisée avec accès au niveau de la fossette pour les molaires avec destruction de la crête marginale",
          "D. Obturée avec un composite fluide « flow »"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B :Faux, l’accès est réalisé du côté vestibulaire ou au mieux du côté palatin pour le bloc incisivo-canin(esthétique). [cite: 749]\nC :Faux, Réalisée avec accès au niveau de la fossette pour les molaires avec préservation de la crête marginale [cite: 749]"
      },
      {
        questionText: "Une finition par biseau des bords amélaires sera réalisée:",
        options: [
          "A. De manière à assurer la meilleure adhésion possible sur l'émail.",
          "B. De telle sorte que l'éviction des tissus carieux laisse des zones de dépouilles,",
          "C. De manière à assurer la meilleure étanchéité",
          "D. Dans un souci d'économie tissulaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B :Faux, l’éviction des tissus carieux laisse des zones en contre dépouilles. [cite: 759]"
      },
      {
        questionText: "Parmi les options thérapeutiques en dentisterie à minima:",
        options: [
          "A. Les soins préventifs non invasifs,",
          "B. Les soins opératoires à minima,",
          "C. Les soins restaurateurs non conventionnels.",
          "D. Les soins opératoires invasifs"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "CD :sont fausses , Les trois grandes options de traitement disponibles actuellement sont: \n -les soins préventifs non invasifs, \n -les soins opératoires à minima, \n - les soins restaurateurs plus conventionnels. [cite: 768]"
      },
      {
        questionText: "Dans les préparations pour composite d'une cavité de site 2 (tunnelisation):",
        options: [
          "A. L'accès est réalisé du cotee vestibulaire",
          "B. L'accès est réalisé du coté palatin",
          "C. L'accès est réalisé du coté mésiale",
          "D. L'accès est réalisé du coté distale"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "CD :Sont fausses, lorsque la crête marginale n’est pas atteinte l’accès est réalisé du côté vestibulaire ou au mieux du côté palatin . [cite: 859, 860]"
      },
      {
        questionText: "La lésion carieuse initiale se caractérise par:",
        options: [
          "A. Amplification des phénomènes de reminéralisation",
          "B. Dislocation des cristaux superficiels d'hydroxyapatite",
          "C. Un élargissement des espaces intra-cristallins",
          "D. Augmentation de la porosité de l'email"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A :Faux,dans la lésion carieuse initiale, le processus principal est la déminéralisation des cristaux d'hydroxyapatite,et non la reminéralisation. [cite: 851]\n C :Faux,un élargissement des espaces inter cristallins. [cite: 852]"
      },
      {
        questionText: "Le phénomène de reminéralisation :",
        options: [
          "A. Est un processus favorisé par la présence d'lons fluor",
          "B. Est liée au pH de l'environnement",
          "C. N'implique pas la présence d'ions calcium",
          "D. Est similaire pour la dentine et le cément"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La reminéralisation est un processus réversible qui implique la redéposition d'ions calcium et phosphate. Elle est favorisée par un pH neutre ou basique et la présence d'ions fluor. Le processus est similaire pour l'émail, la dentine et le cément, bien que la structure de chaque tissu influence la progression de la lésion."
      },
      {
        questionText: "La lésion carieuse initiale se caractérise par :",
        options: [
          "A. Une amplification des phénomènes de reminéralisation",
          "B. Une dislocation des cristaux superficiels d'hydroxyapatite",
          "C. Un élargissement des espaces intra-cristallins",
          "D. Une augmentation de la porosité de l'email"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La lésion carieuse initiale est dominée par la déminéralisation. Ce processus entraîne une dislocation des cristaux superficiels d'hydroxyapatite, un élargissement des espaces inter-cristallins (et non intra-cristallins), et par conséquent, une augmentation de la porosité de l'émail."
      },
      {
        questionText: "La zone sombre:",
        options: [
          "A. C'est le caractère le plus constant de la carie de l'email",
          "B. Est observée avec une fréquence de 90% sur les dents permanentes et 85% sur les dents temporaires",
          "C. Est une perte minérale > 10%.",
          "D. Estprésente dans1 cas sur 2 au niveau des dents permanentes et dans 1 cas sur 4 au niveau desdents temporaires."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La zone sombre est une caractéristique très fréquente de la carie de l'émail, observée dans 90% des cas sur les dents permanentes et 85% sur les dents temporaires. Sa perte minérale est inférieure à 10%."
      },
      {
        questionText: "Une précipitation des ions apportés par des applications topiques (fluor du dentifrice) est possible, au début du processus carieux au niveau d'une surface dentaire.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Au stade initial de la carie, la dissolution partielle des cristaux d'hydroxyapatite augmente la porosité de l'émail. À ce stade, les ions calcium, phosphate et fluor (provenant de la salive ou d'applications topiques) peuvent précipiter dans ces zones et reminéraliser la lésion."
      },
      {
        questionText: "La lésion carieuse initiale se caractérise par",
        options: [
          "A. Amplification des phénomènes de reminéralisation",
          "B. Dislocation des cristaux superficiels d'hydroxyapatite",
          "C. Un élargissement des espaces intra-cristallins",
          "D. Augmentation de la porosité de l'email"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La lésion initiale est caractérisée par une déminéralisation prédominante. Cela se traduit par une dislocation des cristaux d'hydroxyapatite et un élargissement des espaces inter-cristallins (pas intra-cristallins), ce qui augmente la porosité de l'émail."
      },
      {
        questionText: "La lésion carieuse sub- clinique est une lésion indolore qui ne peut pas se reminéraliser :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Cette affirmation est fausse. La lésion carieuse sub-clinique (ou 'white spot') est effectivement indolore, mais sa principale caractéristique est qu'elle est réversible et peut se reminéraliser si les conditions buccales s'améliorent."
      },
      {
        questionText: "Lors des atteintes de l'email avec cavitation:",
        options: [
          "A. L'émail accuse un déficit minéral de 2 par rapport à un émail sain",
          "B. On constate l'apparition des chenaux par dislocation des minéraux sous l'émail de surface",
          "C. Les porosités de l'émail progressent le long des stries de Retzius",
          "D. Les porosités de l'émail progressent le long des Bandes de Hunter-Schreger"
        ],
        correctOptionIndexes: [2],
        explanation: "Lors des atteintes de l'émail, le déficit minéral atteint environ 10%. La progression de la déminéralisation et de la porosité suit les structures histologiques de l'émail, notamment le long des stries de Retzius."
      },
      {
        questionText: "La dissolution acide de l'apatite :",
        options: [
          "A. Se fait de façon systématisée",
          "B. Se fait selon des plans cristallographiques imprécis.",
          "C. La lésion se propage le long de l'axe D",
          "D. Ce sont d'abord des cristaux du prisme de l'émail orientés parallèlement à la surface de l'émail qui sont détruits."
        ],
        correctOptionIndexes: [0],
        explanation: "La dissolution acide de l'apatite est un processus systématisé qui suit des plans cristallographiques précis. La lésion se propage le long de l'axe C des cristaux. Ce sont les cristaux orientés perpendiculairement à la surface de l'émail qui sont détruits en premier."
      },
      {
        questionText: "La lésion carieuse sub-clinique :",
        options: [
          "A. Est appelé également white spot",
          "B. Est une lésion indolore",
          "C. C'est une lésion qui peut se reminéraliser",
          "D. Est une lésion amélaire cavitaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La lésion carieuse sub-clinique, aussi appelée 'white spot' (tache blanche), est une lésion amélaire initiale sans cavitation. Elle est indolore et peut être reminéralisée."
      },
      {
        questionText: "Dans l'environnement buccal, l'Hydroxyapatite est en équilibre avec la salive saturée en Ca 〖Ca〗^(2+) et 〖〖PO〗_4〗^3",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. L'hydroxyapatite de l'émail est en équilibre constant avec les ions calcium (Ca²⁺) et phosphate (PO₄³⁻) présents dans la salive. Cet équilibre dynamique entre déminéralisation et reminéralisation est fondamental pour la santé dentaire."
      },
      {
        questionText: "Le phénomène de déminéralisation est un phénomène (irréversible qui aboutit à la dissolution des cristaux d'hydroxyapatites, lié à la baisse du pH salivaire :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse car le phénomène de déminéralisation est réversible, surtout à ses débuts. Bien qu'il soit lié à la baisse du pH et à la dissolution des cristaux, ce processus peut être inversé par la reminéralisation si les conditions redeviennent favorables."
      },
      {
        questionText: "La déminéralisation est la dissolution de l'apatite et aboutit à la destruction de l'hydroxyapatite (HA):",
        options: [
          "A. Vrais",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. La déminéralisation est le processus chimique par lequel les acides dissolvent les minéraux de l'émail, principalement l'hydroxyapatite (HA), ce qui conduit à une perte de structure minérale de la dent."
      },
      {
        questionText: "Lors de l'amorcement du processus carieux au niveau d'une surface dentaire :",
        options: [
          "A. Il se produit une dissolution des phosphates de calcium",
          "B. Il se produit une dissolution des phosphates de potassium",
          "C. Les bicarbonates salivaires peuvent neutraliser les acides présents et arrêter la fuite des phosphates de calcium",
          "D. Une précipitation des ions apportés par des applications topiques (fluor du dentifrice) est possible"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Au début du processus carieux, les acides provoquent la dissolution des phosphates de calcium de l'émail. Cependant, le pouvoir tampon de la salive (grâce aux bicarbonates) peut neutraliser ces acides. De plus, à ce stade, une reminéralisation est possible, favorisée par les ions fluor appliqués localement."
      }
    ]
  },
  {
    title: "Dentisterie à minima et concepts Thérapeutique",
    subject: "oce",
    questions: [
      {
        questionText: "Les soins non invasifs",
        options: [
          "A. Sont réalisés dans le but de prévenir la carle dentaire",
          "B. Sont indiqués dans le stade 0 et 1",
          "C. Sont indiqués dans le stade 0",
          "D. Utilisent des fraises de petit diamètre"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les soins non invasifs visent à prévenir l'apparition de la carie dentaire et sont indiqués au stade 0 (lésion initiale sans cavitation). Ils n'impliquent pas l'utilisation d'instruments rotatifs comme les fraises, qui sont réservés aux soins invasifs."
      },
      {
        questionText: "Dans la cavité tunnel l'accès se fait au niveau de la fossette marginale en direction de la face palatine avec une angulation de 45° :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Cette description est fausse. Dans une préparation en tunnel, l'accès se fait bien au niveau de la fossette marginale, mais en direction de la zone proximale cariée (et non palatine) avec une angulation de 45°, afin de préserver la crête marginale."
      },
      {
        questionText: "Les cavités modernes pour amalgame :",
        options: [
          "A. Sont plus économes par rapport aux préparations selon les principes de Black",
          "B. Sont moins mutilantes que les préparations pour restaurations adhésives",
          "C. Sont indiquées pour les sites 1 et 3 sur dent postérieures à partir du stade 2",
          "D. Respectent les principes d'économie tissulaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les cavités modernes pour amalgame sont conçues pour être plus économes en tissu dentaire que les préparations traditionnelles de Black. Cependant, elles restent plus mutilantes que les préparations pour matériaux adhésifs. Elles sont indiquées pour les sites 1 (occlusal) et 2 (proximal) sur les dents postérieures."
      },
      {
        questionText: "Lors de la réalisation d'une préparation de cavité de site 2 et en présence de la dent adjacente",
        options: [
          "A. On procède à un traitement préventif non invasif",
          "B. On peut conserver la fossette marginale",
          "C. On réalise une cavité tunnel",
          "D. On doit utiliser un matériau de restauration adhésif"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Pour une lésion de site 2 (proximale) avec une dent adjacente présente, une approche à minima consiste à réaliser une cavité tunnel pour préserver la crête marginale. Ce type de préparation nécessite l'utilisation d'un matériau de restauration adhésif pour garantir l'étanchéité et la solidité."
      },
      {
        questionText: "Les techniques d'obturation par collage sont des techniques qui permettent",
        options: [
          "A. De répondre au mieux aux critères de conservation tissulaire",
          "B. Une éviction des tissus carieux qui laisse des zones de dépouilles",
          "C. Une éviction des tissus carieux qui laisse des zones de contre dépouille",
          "D. De préserver l'émail présentant des fêlures."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les techniques d'obturation par collage (adhésives) sont idéales pour une dentisterie conservatrice car elles ne nécessitent pas de formes de rétention mécaniques. L'éviction des tissus se limite à la zone cariée, ce qui peut créer des formes de cavité en contre-dépouille, sans compromettre la tenue de la restauration."
      },
      {
        questionText: "Lors de la réalisation d'une préparation pour une obturation par collage une finition par biseau des bords amélaires permet d'assurer une meilleure adhésion et étanchéité possible à l'émail",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. La réalisation d'un biseau sur les bords de l'émail augmente la surface d'émail mordancé, expose les prismes d'émail dans une orientation plus favorable à l'adhésion, et améliore ainsi l'étanchéité marginale de la restauration adhésive."
      },
      {
        questionText: "Selon les concepts actuels la préparation de cavités proximales pour amalgame sur dents postérieures:",
        options: [
          "A. L'extension prophylactique est systématique",
          "B. On réalise des préparations proximales sans extension prophylactique.",
          "C. La rétention axiale est assurée par une convergence des parois V et L en direction occlusale.",
          "D. On réalise des rainures à l'aide d'une fraise fissure contre-angle, au niveau des angles internes."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Contrairement aux principes de Black, les concepts actuels pour l'amalgame visent à éviter l'extension prophylactique. La rétention axiale est assurée par la convergence des parois vestibulaires et linguales vers l'occlusal. Des rainures de rétention supplémentaires peuvent être réalisées avec une fraise boule (pas fissure) au niveau des angles internes."
      },
      {
        questionText: "Lors d'une obturation avec un matériau adhésif tel que le composite, la cavité est taillée :",
        options: [
          "A. En respectant les principes mécaniques de black",
          "B. Nous réalisons une cavité rétentive à fond plat",
          "C. Nous réalisons une extension prophylactique vers les zones accessibles au brossage",
          "D. En respectant le principe d'économie tissulaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Les matériaux adhésifs comme le composite ne dépendent pas de la rétention mécanique de la cavité. Par conséquent, la préparation peut se limiter strictement à l'éviction du tissu carié, en respectant le principe fondamental d'économie tissulaire, sans nécessiter de fond plat ou d'extension prophylactique."
      },
      {
        questionText: "Dans une restauration d'une cavité de site 2 stade 1:",
        options: [
          "A. L'accès à la lésion est réalisé à partir de la fossette marginale occlusale",
          "B. Le point de pénétration est situé médialement par apport à la crête marginale qui sera préservée.",
          "C. Le point de pénétration est situé médialement par apport à la crête marginale qui sera éliminée.",
          "D. L'extension de la préparation se fait à minima."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Pour une cavité de site 2 (proximale) au stade 1, l'approche conservatrice (tunnelisation) consiste à accéder à la lésion depuis la fossette marginale occlusale. Le point d'entrée est situé juste à l'intérieur de la crête marginale, qui est préservée. L'extension de la cavité se limite strictement à la lésion (à minima)."
      },
      {
        questionText: "En dentisterie à minima les trois grandes options de traitement disponibles actuellement sont:",
        options: [
          "A. Les soins préventifs non invasifs",
          "B. Les soins préventifs invasifs,",
          "C. Les soins opératoires à minima,",
          "D. Les soins restaurateurs conventionnels."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentisterie à minima englobe un spectre d'options thérapeutiques : les soins préventifs non invasifs (fluor, scellements), les soins opératoires à minima (éviction carieuse limitée) et, lorsque nécessaire, les soins restaurateurs plus conventionnels mais réalisés de la manière la plus conservatrice possible."
      },
      {
        questionText: "Une finition par biseau des bords amélaires sera réalisée de manière à assurer une meilleure adhésion et étanchéité possible sur l'émail:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Le biseautage des bords de l'émail augmente la surface disponible pour le collage, améliore l'orientation des prismes d'émail pour le mordançage, et assure ainsi une meilleure adhésion et une meilleure étanchéité marginale pour les restaurations en composite."
      },
      {
        questionText: "Le scellement adhésif des puits et des fissures s'intègre dans :",
        options: [
          "A. Le modèle médical peu invasif",
          "B. Le modèle médical préventif non invasif",
          "C. Le modèle chirurgical traditionnel invasif",
          "D. Le modèle chirurgical traditionnel non invasif"
        ],
        correctOptionIndexes: [1],
        explanation: "Le scellement des puits et fissures est l'acte préventif par excellence. Comme il ne nécessite aucune taille ou fraisage de la dent, il appartient au modèle médical préventif et est considéré comme non invasif."
      },
      {
        questionText: "Dans les préparations aux composite :",
        options: [
          "A. En présence d'anfractuosités trop importantes, le scellement avec un sealant des sillons est réalisé à titre préventif",
          "B. La reminéralisation est une étape incontournable",
          "C. Les techniques d'obturations par collage sont les techniques de choix",
          "D. Les critères de conservation tissulaire sont respectés."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Pour les restaurations en composite, les techniques par collage sont la norme, ce qui permet de respecter les critères de conservation tissulaire. De plus, il est courant d'associer la restauration à un acte préventif, comme le scellement des sillons adjacents (sealant) si ceux-ci présentent un risque carieux."
      },
      {
        questionText: "La Tunnelisation ou «Cavité tunnel»:",
        options: [
          "A. Est réalisée en présence d'une cavité de site 2 et lorsque la crête marginale n'est pas atteinte",
          "B. Est réalisé par un accès direct du côté palatin pour le bloc incisivo-canin(esthétique)",
          "C. Est réalisée sur dent postérieure par un accès qui se fait au niveau de la fossette marginale vers la face proximale",
          "D. Est obturée par un composite fluide << flow >>."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La préparation en tunnel est une technique conservatrice pour les caries de site 2 (proximales) où la crête marginale est intacte. L'accès se fait depuis la fossette marginale en direction de la lésion. En raison de l'accès limité, un composite fluide (flow) est souvent utilisé pour assurer une bonne adaptation."
      },
      {
        questionText: "La dentisterie à minima :",
        options: [
          "A. Consiste en des actes non chirurgicaux ciblés,",
          "B. Consiste en des actes chirurgicaux non ciblés,",
          "C. Implique un accès réduit et un curetage limité aux seuls tissus pathologiques",
          "D. Vise à réduire au maximum les structures saines."
        ],
        correctOptionIndexes: [2],
        explanation: "La dentisterie à minima est une approche chirurgicale ciblée. Son principe fondamental est de minimiser la destruction tissulaire en réalisant un accès réduit et en limitant le curetage strictement aux tissus pathologiques, afin de préserver au maximum les structures saines de la dent."
      },
      {
        questionText: "La réalisation d'une cavité occlusale pour amalgame selon les concepts actuels:",
        options: [
          "A. Nécessite une extension prophylactique",
          "B. Ne nécessite pas d'extension prophylactique",
          "C. Fait appel à une préparation qui doit s'étendre en ouvrant le réseau occlusal des sillons, fosses et fossettes indemnes de carie",
          "D. Consiste à réaliser un fond plat systématique"
        ],
        correctOptionIndexes: [1],
        explanation: "Les concepts actuels de préparation pour amalgame sont plus conservateurs que les principes de Black. L'extension prophylactique systématique dans les sillons sains n'est plus recommandée. La préparation doit se limiter à la zone cariée."
      }
    ]
  },
  {
    title: "Moyens de défense de l'organe dentaire",
    subject: "oce",
    questions: [
      {
        questionText: "L'atrophie pulpaire se caractérise par une réduction du volume de la chambre pulpaire par dépôt permanant de dentine secondaire ou tertiaire",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. L'atrophie pulpaire correspond à une diminution progressive du volume pulpaire (chambre et canaux) due au dépôt continu de dentine secondaire (liée à l'âge) ou tertiaire (en réponse à une agression)."
      },
      {
        questionText: "Les phénomènes d'inflammation et la minéralisation réactionnelle sont les principaux moyens de défenses du complexe pulpo-dentinaire",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "-La réponse correct est :A.Vrai ✅\n Le mécanisme de défense du complexe dentino-pulpaire est double: \n 1-Inflammation pulpaire\n 2-Minéralisation réactionnelle. [cite: 131]"
      },
      {
        questionText: "La réponse exsudative dans l'inflammation pulpaire :",
        options: [
          "A. Est une réponse retardée",
          "B. Elle se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur.",
          "C. Elle se caractérise par une production de tissu de granulation élaboré par de nouvelles cellules.",
          "D. Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "A :Faux,est une réponse immédiate . [cite: 426]\n C :Faux ,elle se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur ; c’est l'œdème inflammatoire [cite: 426]\n D :il exsite des réponses fausses . [cite: 427]"
      },
      {
        questionText: "La réponse exsudative dans l'inflammation pulpaire:",
        options: [
          "A. Est une réponse retardée",
          "B. Elle se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur.",
          "C. Elle se caractérise par une production de tissu de granulation élaboré par de nouvelles cellules.",
          "D. Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "A : Faux,la réponse exsudative (PHASE AIGUE),c’est une réponse immédiate qui vise à stopper et à neutraliser l’agent agresseur. [cite: 496]\n C :Faux, Ce phénomène est propre à la phase de prolifération ou de chronicité, pas à la réponse exsudative. [cite: 497]\n D :Faux → Car A et C sont fausses [cite: 497]"
      },
      {
        questionText: "La dentine primaire :",
        options: [
          "A. Appelée aussi fonctionnelle.",
          "B. Possède une disposition irrégulière, la dent à ce moment subit des efforts considérables.",
          "C. Appelée aussi tubulaire.",
          "D. Synthétisée tout au long de la vie de la dent."
        ],
        correctOptionIndexes: [2],
        explanation: "A :faux , La dentine primaire appelée aussi tubulaire. [cite: 615]\n B : Faux. La dentine primaire possède une disposition régulière et bien organisée de tubules dentinaires. [cite: 616]\n D : Faux.La dentine primaire est produite au cours du développement de la dent... [cite: 617] C’est plutôt la dentine secondaire qui est produite tout au long de la vie de la dent. [cite: 618]"
      },
      {
        questionText: "Dentine de réparation :",
        options: [
          "A. Apparaît quand les stimuli sont excessifs",
          "B. Appelée aussi dentine secondaire",
          "C. Est plus ou moins sensible aux variations thermiques.",
          "D. Les tubuli de cette dentine sont réguliers."
        ],
        correctOptionIndexes: [0],
        explanation: "B :Faux, Appelée aussi dentine de défense ou tertiaire. [cite: 397]\n C :Faux, elle est moins sensible aux variations thermiques [cite: 398]\n D :Faux, Les tubuli de cette dentine sont irréguliers parfois absents . [cite: 398]"
      },
      {
        questionText: "L'atrophie:",
        options: [
          "A. Fait suite à l'inflammation pulpaire.",
          "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
          "C. Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
          "D. Est une altération dégénérative de la pulpe."
        ],
        correctOptionIndexes: [3],
        explanation: "A :faux,L'atrophie pulpaire n'est pas liée à l'inflammation pulpaire. [cite: 765]\n B :Faux,L'atrophie pulpaire... n'est pas seulement causé par la formation de dentine tertiaire,mais aussi par la formation de dentine secondaire. [cite: 766]"
      },
      {
        questionText: "L'atrophie:",
        options: [
          "A. Fait suite à l'inflammation pulpaire.",
          "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
          "C. Chez les personnes Jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
          "D. Est une altération dégénérative de la pulpe."
        ],
        correctOptionIndexes: [3],
        explanation: "A :Faux ,Bien que l'inflammation pulpaire puisse entraîner une réaction dans la pulpe, l'atrophie n'est pas une conséquence del'inflammation. [cite: 903]\n B :Faux ,L'atrophie n'est pas uniquement causée par le dépôt de dentine tertiaire.elle peut être causée par le dépôt de dentine secondaire et tertiaire . [cite: 904]\n C :est incorrecte,car chez les jeunes, la lumière du canal radiculaire ne se réduit pas. [cite: 905]"
      },
      {
        questionText: "La réponse exsudative dans l'inflammation pulpaire:",
        options: [
          "A. Est une réponse retardée",
          "B. Se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur",
          "C. Se caractérise par une production de tissu de granulation élaboré par de nouvelles cellules.",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "A :Faux,C’est une réponse immédiate. [cite: 915]\n C :Faux,Se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur. [cite: 916]\n D :Faux,il existe des réponses fausses. [cite: 916]"
      },
      {
        questionText: "Suite à une agression de faible intensité, une sécrétion de dentine intra-tubulaire est secrétée par les odontoblastes de remplacement",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. En réponse à une agression de faible intensité, ce sont les odontoblastes primaires (de première génération) qui survivent et sécrètent de la dentine réactionnelle (intra-tubulaire). Les odontoblastes de remplacement n'interviennent qu'en cas d'agression forte ayant causé la mort des odontoblastes primaires."
      },
      {
        questionText: "La vasodilatation dans les phénomènes inflammatoires :",
        options: [
          "A. Est la dernière étape du processus inflammatoire",
          "B. Provoque une augmentation du volume sanguin",
          "C. Ne peut pas se propager vers la région péri-apicale",
          "D. Principalement dans les capillaires pulpaires"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La vasodilatation est la première étape du processus inflammatoire, se produisant principalement dans les capillaires pulpaires et entraînant une augmentation du flux sanguin. Si cette inflammation persiste, elle peut se propager au-delà de l'apex et atteindre la région péri-apicale."
      },
      {
        questionText: "Les phénomènes d'inflammation et la minéralisation reactionnelle sont les principaux moyens de défenses du complexe pulpo-dentinaire.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Le complexe dentino-pulpaire dispose d'un double mécanisme de défense face aux agressions : une réponse inflammatoire au sein de la pulpe et une réponse de minéralisation réactionnelle (formation de dentine tertiaire) pour isoler la pulpe."
      },
      {
        questionText: "La dentine réactionnelle sclérotique est :",
        options: [
          "A. Produite par les odontoblastes primaires.",
          "B. Secrété après une agression de faible intensité",
          "C. Appelés également dentine péri-tubulaire",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La dentine réactionnelle sclérotique est une dentine intra-tubulaire (ou péri-tubulaire) sécrétée par les odontoblastes primaires en réponse à une agression de faible intensité."
      },
      {
        questionText: "La réponse exsudative dans l'inflammation pulpaire se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur.",
        options: [
          "A. A Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. La phase exsudative (phase aiguë) de l'inflammation pulpaire est une réponse immédiate. Elle se caractérise par la formation d'un œdème inflammatoire (afflux de liquide) qui aide à diluer et neutraliser l'agent agresseur."
      },
      {
        questionText: "La vasodilatation est un phénomène inflammatoire qui touche principalement les capillaires pulpaires et ne peut pas se propager vers la région péri-apicale.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. La vasodilatation touche effectivement les capillaires pulpaires, mais si le phénomène inflammatoire persiste et s'intensifie, il peut tout à fait se propager au-delà de l'apex et atteindre la région péri-apicale."
      },
      {
        questionText: "La dentine réparatrice",
        options: [
          "A. Est une dentine tertiaire",
          "B. Est une dentine péri ou intra-tubulaire",
          "C. Produite par des odontoblastes de 1ère génération",
          "D. Produite par des odontoblastes de 2ème génération"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La dentine réparatrice est un type de dentine tertiaire (ou de défense). Elle est produite par des odontoblastes de deuxième génération (néo-odontoblastes) après la mort des odontoblastes primaires suite à une agression intense."
      },
      {
        questionText: "L'atrophie :",
        options: [
          "A. Fait suite à l'inflammation pulpaire.",
          "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
          "C. Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
          "D. Est une altération dégénérative de la pulpe"
        ],
        correctOptionIndexes: [3],
        explanation: "L'atrophie pulpaire est une altération dégénérative, souvent liée au vieillissement. Elle se manifeste par une réduction du volume pulpaire due au dépôt continu de dentine, principalement secondaire (physiologique) mais aussi parfois tertiaire. Ce phénomène est progressif avec l'âge et non présent chez les jeunes."
      },
      {
        questionText: "La réponse proliférative dans l'inflammation",
        options: [
          "A. Se manifeste assez rapidement.",
          "B. Des fibroblastes et angioblastes sont élaborés.",
          "C. Un Œdème inflammatoire est formé.",
          "D. C'est une réaction de défense de la pulpe."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La réponse proliférative est une phase secondaire et retardée de l'inflammation (phase chronique). C'est une réaction de défense qui consiste à élaborer de nouvelles cellules (fibroblastes, angioblastes) pour former un tissu de granulation et réparer les tissus endommagés. L'œdème est caractéristique de la phase aiguë (exsudative)."
      },
      {
        questionText: "La dégénérescence pulpaire :",
        options: [
          "A. Une sclérose particulièrement lente spécialement au niveau du tiers apical.",
          "B. Se forme par dépôt permanent de dentine inter tubulaire.",
          "C. C'est une sclérose du 1/3 coronaire.",
          "D. Est une sénescence pulpaire."
        ],
        correctOptionIndexes: [3],
        explanation: "La dégénérescence pulpaire est synonyme de sénescence pulpaire (vieillissement de la pulpe). Elle se manifeste par une sclérose lente et diffuse, et un dépôt progressif (non permanent) de dentine, sans localisation spécifique au tiers apical ou coronaire."
      },
      {
        questionText: "La sclérose dentinaire :",
        options: [
          "A. Est due à des produits chimiques nocifs et de microorganismes provenant de l'extérieur.",
          "B. C'est de la dentine inter tubulaire.",
          "C. C'est de la dentine péri tubulaire",
          "D. C'est de la dentine tertiaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La sclérose dentinaire est une réaction de défense à une agression externe (chimique ou microbienne). Elle consiste en un dépôt de dentine intra-tubulaire, également appelée dentine péri-tubulaire, ce qui obstrue les canalicules dentinaires. C'est une forme de dentine réactionnelle."
      },
      {
        questionText: "La phase extracellulaire dans la dentinogenèse:",
        options: [
          "A. C'est une phase d'élaboration et de sécrétion.",
          "B. C'est une phase de maturation qui aboutit à la minéralisation et à la formation de la dentine.",
          "C. C'est la phase où les processus de minéralisation se situent au niveau de la zone de dentine.",
          "D. C'est la phase de synthèse des précurseurs de la trame organique de la dentine."
        ],
        correctOptionIndexes: [1],
        explanation: "La dentinogenèse comporte deux phases. La phase cellulaire (élaboration, synthèse et sécrétion de la matrice) et la phase extracellulaire, qui est la phase de maturation où la pré-dentine se minéralise pour former la dentine mature."
      },
      {
        questionText: "Le complexe dentino-pulpaire:",
        options: [
          "A. Appartient à la pulpe.",
          "B. Appartient à la pulpe et la dentine à la fois.",
          "C. Est le siège de la dentinogenèse qui est l'aboutissement d'un processus exclusivement cellulaire.",
          "D. Est le siège de la dentinogenèse qui est l'aboutissement d'un processus exclusivement enzymatique."
        ],
        correctOptionIndexes: [1],
        explanation: "Le complexe dentino-pulpaire est une entité fonctionnelle unique comprenant la pulpe et la dentine. La dentinogenèse, qui s'y déroule, est un processus complexe qui associe une phase cellulaire (sécrétion par les odontoblastes) et une phase extracellulaire de maturation biochimique (minéralisation)."
      },
      {
        questionText: "La dentine primaire :",
        options: [
          "A. Appelée aussi fonctionnelle.",
          "B. Possède une disposition irrégulière, la dent à ce moment subit des efforts considérables.",
          "C. Appelée aussi tubulaire.",
          "D. Synthétisée tout au long de la vie de la dent."
        ],
        correctOptionIndexes: [2],
        explanation: "La dentine primaire est également appelée dentine tubulaire. Elle possède une disposition de tubuli très régulière et bien organisée. Sa formation est limitée à la période de développement de la dent, jusqu'à l'édification complète de la racine."
      }
    ]
  },
  {
    title: "Schémas cliniques de la lésion carieuse",
    subject: "oce",
    questions: [
      {
        questionText: "Lors de la taille des cavités de cl I de black",
        options: [
          "A. La stabilité: est assurée par le fond plat perpendiculaire à la résultante des forces de mastications.",
          "B. La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications",
          "C. La stabilité est assurée par un trottoir réalisé à un niveau supérieur autour du fond sphérique dans le cas où la cavité est profonde,",
          "D. Dans le cas de cavité très étendue en surface, on réalisera un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La stabilité (sustentation) de l'obturation est assurée par un fond plat perpendiculaire à la résultante des forces de mastication. Dans le cas spécifique des cavités profondes, un 'Trottoir de Black' peut être créé autour du fond pour améliorer cette stabilité. L'élargissement du fond, quant à lui, sert à la rétention axiale, non à la stabilité."
      },
      {
        questionText: "Pour une taille de covité sans risque pour le complexe dentino-pulpaire",
        options: [
          "A. Le fraisage se fait d'une façon continue",
          "B. La vitesse de rotation doit être réduite",
          "C. Il faut exercer plus de pression",
          "D. Travailler sous spray d'eau"
        ],
        correctOptionIndexes: [3],
        explanation: "A :Faux, Le fraisage se fait d'une façon discontinue. [cite: 468]\n C :Faux, Exercer plus de pression augmente la friction et donc la chaleur... [cite: 469] Il est préférable d'appliquer une pression modérée et contrôlée. [cite: 470]"
      },
      {
        questionText: "La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La stabilité:est assurée par le fond plat perpendiculaire à la résultante des forces de mastications . [cite: 418]"
      },
      {
        questionText: "L'extension prophylactique:",
        options: [
          "A. Est une extension de la cavité pour prévenir l'apparition de carie",
          "B. Se fait vers des zones de prédilection de la lésion carieuse",
          "C. Rend la cavité rétentive",
          "D. Rend Les limites de l'obturation accessibles au brossage"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C : Faux,La rétention est un objectif séparé de l’extension prophylactique. [cite: 690] Rendre la cavité rétentive dépend de sa forme interne... [cite: 691]"
      },
      {
        questionText: "L'extension prophylactique:",
        options: [
          "A. C'est une extension de la cavité pour prévenir l'apparition de carie",
          "B. Elle se fait vers des zones de prédilection de la lésion carieuse",
          "C. Se fait pour que la cavité devienne rétentive",
          "D. Rend Les limites de l'obturation accessibles au brossage"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "C :Faux,La rétention est assurée par la forme de cavité (queues d’aronde, parois convergentes), pas par l’extension prophylactique. [cite: 1007]"
      },
      {
        questionText: "Qu'est ce qui cause une élévation de température lors de la taille de la cavité :",
        options: [
          "A. Le fraisage continu et à grande vitesse",
          "B. Le système d'irrigation des instruments rotatifs",
          "C. La pression exercée lors du fraisage",
          "D. Des fraises usées"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux,Au contraire, l’irrigation (eau, air-eau) sert à refroidir et éviter l’élévation de température. [cite: 1015]"
      },
      {
        questionText: "Pour une taille de cavité sans risque pour le complexe dentino-pulpaire",
        options: [
          "A. Le fraisage se fait d'une façon continue",
          "B. la vitesse de rotation doit être réduite",
          "C. il faut exercer plus de pression",
          "D. Travailler sous spray d'eau"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Pour protéger la pulpe, il est essentiel de travailler sous irrigation constante (spray d'eau) pour éviter la surchauffe. Il faut également réduire la vitesse de rotation et appliquer une pression légère et contrôlée. Un fraisage continu et une pression excessive génèrent une chaleur dangereuse pour la pulpe."
      },
      {
        questionText: "La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. La stabilité de la restauration est assurée par un fond plat qui est perpendiculaire à la RÉSULTANTE des forces de mastication, et non à leur bissectrice."
      },
      {
        questionText: "Quels sont les trois sites mentionnés dans la classification de Mount et Hume ?",
        options: [
          "A. Vestibulaire, lingual, occlusal",
          "B. Occlusal, cervical, proximal",
          "C. Antérieur, postérieur, latéral",
          "D. Gingival, coronal, radiculaire"
        ],
        correctOptionIndexes: [1],
        explanation: "La classification de Mount et Hume décrit les lésions carieuses selon leur localisation (site) et leur étendue (stade). Les trois sites sont : Site 1 (occlusal : puits et fissures), Site 2 (proximal : zones de contact), et Site 3 (cervical)."
      },
      {
        questionText: "Lors de la taille des cavités de cl 1 selon Black la stabilité est assurée par :",
        options: [
          "A. Un fond plat perpendiculaire à la bissectrice des forces de mastications",
          "B. Un fond plat perpendiculaire à la résultante des forces de mastications.",
          "C. Un trottoir réalisé à un niveau supérieur autour du fond sphérique dans le cas où de cavité peu profonde",
          "D. Un trottoir réalisé à un niveau inférieur autour du fond sphérique dans le cas où la cavité est profonde"
        ],
        correctOptionIndexes: [1],
        explanation: "En règle générale, la stabilité est assurée par un fond plat perpendiculaire à la résultante des forces occlusales. L'aménagement d'un 'Trottoir de Black' est une solution spécifique pour les cavités profondes (pas peu profondes) afin d'améliorer la stabilité."
      },
      {
        questionText: "L'extension prophylactique",
        options: [
          "A. C'est une extension de la cavité pour prévenir l'apparition de carie",
          "B. Elle se fait vers des zones de prédilection de la lésion carieuse",
          "C. Se fait pour que la cavité devienne rétentive",
          "D. Rend Les limites de l'obturation accessibles au brossage"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'extension prophylactique, selon les principes de Black, consiste à étendre la préparation au-delà de la lésion carieuse vers des zones à risque (zones de prédilection comme les puits et sillons) afin de prévenir une récidive et de rendre les marges de l'obturation plus faciles à nettoyer. La rétention est un objectif distinct, obtenu par la forme interne de la cavité."
      },
      {
        questionText: "Qu'est ce qui cause une élévation de température lors de la taille de la cavité",
        options: [
          "A. Le fraisage continu et a grand vitesse",
          "B. Le système d’irrigation des instruments rotatifs",
          "C. La pression exercée lors du fraisage",
          "D. Des fraises usées"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Plusieurs facteurs peuvent causer une surchauffe dangereuse pour la pulpe : un fraisage continu à grande vitesse, une pression de travail excessive, et l'utilisation de fraises usées qui perdent leur efficacité de coupe et génèrent plus de friction. Le système d'irrigation, au contraire, est conçu pour refroidir et prévenir cette élévation de température."
      },
      {
        questionText: "Les queues d'arondes:",
        options: [
          "A. Ont pour rôle la rétention",
          "B. Ont pour rôle l'extension anaphylactique",
          "C. Sont réalisées au niveau des fossettes proximales",
          "D. Les queues d'arondes ont pour rôle la stabilité"
        ],
        correctOptionIndexes: [0],
        explanation: "La queue d'aronde, réalisée au niveau des fossettes marginales (proximales), a un double rôle : elle contribue à l'extension prophylactique et, principalement, elle assure la rétention mécanique de l'obturation en l'empêchant de se déplacer."
      },
      {
        questionText: "Les préparations des cavités selon BLACK:",
        options: [
          "A. Se limitent uniquement aux lésions carieuses au niveau des sillons, puits et fissures",
          "B. Englobent systématiquement tous les réseaux des silions, puits et fissures,",
          "C. les angles cavo-superficiels ne sont pas accessibles au brossage,",
          "D. l'extension prophylactique est réalisée aux dépens des tissus sains."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le concept de Black préconisait une approche chirurgicale où les préparations englobaient systématiquement l'ensemble des puits et sillons à risque, même sains. Cette 'extension pour la prévention' était donc réalisée aux dépens de tissus sains pour que les marges de la restauration soient accessibles au brossage."
      }
    ]
  },
  {
    title: "Cariologie : terminologie et données épidémiologiques étiopathologie de la lésion carieuse",
    subject: "oce",
    questions: [
      {
        questionText: "La carie dentaire est:",
        options: [
          "A. Un processus dynamique",
          "B. Pathologie multifactorielle",
          "C. Une maladie transmissible",
          "D. Une maladie infectieuse pré-éruptive"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La carie dentaire est un processus dynamique résultant de l'équilibre entre déminéralisation et reminéralisation. C'est une pathologie multifactorielle et une maladie infectieuse transmissible, mais elle est post-éruptive, c'est-à-dire qu'elle ne se développe qu'après l'éruption de la dent dans la cavité buccale."
      },
      {
        questionText: "La théorie chimico-parasitaire alcaline de Gottlieb : énonce une protéolyse primaire et une décalcification secondaire :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "-La proposition est correcte : \n -théorie chimico-parasitaire alcaline de Gottlieb (protéolyse): 1944\n ...Cette théorie s'appui sur le fait que la protéolyse est primaire, et la décalcification vient après. [cite: 235, 236]"
      },
      {
        questionText: "La carie dentaire est :",
        options: [
          "A. Un processus dynamique",
          "B. Pathologie multifactorielle",
          "C. Maladie transmissible",
          "D. Maladie infectieuse pré-éruptive"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "D :Faux, Car la carie dentaire ne se manifeste pas avant l'éruption des dents. [cite: 810] La carie est une maladie qui se développe après l’éruption d’une dent( post-éruptive). [cite: 811]"
      },
      {
        questionText: "La carie de l'émail:",
        options: [
          "A. Est symptomatique",
          "B. Peut être visible à l'inspection et détecter au sondage",
          "C. Est asymptomatique",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux,est asymptomatique . [cite: 570]\nD : Cette réponse est incorrecte, car la réponse A est fausse"
      },
      {
        questionText: "Le taux d'élimination des hydrates de carbone de la cavité buccale n'affecte pas le risque de carie:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La bonne réponse est :B. Faux. [cite: 601]\n -Le taux d'élimination des hydrates de carbone de la cavité buccale affecte le risque de carie. [cite: 602] Plus longtemps les hydrates de carbone ... restent dans la bouche, plus les bactéries ... ont de temps pour produire des acides... [cite: 603]"
      },
      {
        questionText: "L'évaluation du risque carieux individuel:",
        options: [
          "A. N'influence pas la démarche thérapeutique des lésions carieuse",
          "B. Détecte les individus hautement susceptibles de développer des lésions carieuses",
          "C. Est primordiale pour déterminer les mesures de prévention",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux,influence la démarche thérapeutique des lésions carieuse. [cite: 839]\nD :Faux,il existe des réponses fausses. [cite: 839]"
      },
      {
        questionText: "La carie à évolution lente:",
        options: [
          "A. Lésion stationnaire",
          "B. Lésion chronique et indolore,",
          "C. la dentinogenèse stabilise l'évolution de la carie.",
          "D. la dentinogenèse est arrêtée ou ralentie"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux,Lésion chronique et indolore [cite: 919]\n D :Faux, la dentinogenèse stabilise l'évolution de la carie. [cite: 919]"
      },
      {
        questionText: "L'indice CAOD:",
        options: [
          "A. Est la somme du nombre de faces cariées absentes et obturées",
          "B. Est la somme du nombre de dents cariés absentes et obturées",
          "C. Varie de 0 à 32",
          "D. Est toujours inférieur à 128"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux, C’est la somme du nombre de dents Cariées, Absentes, Obturées [cite: 790]\n D :Faux, Il varie donc de 0 à 32 si les dents de sagesse sont prises en considération... [cite: 790]"
      },
      {
        questionText: "La salive :",
        options: [
          "A. A un pH normalement maintenu à 5",
          "B. N'influence pas le processus carieux",
          "C. Possède un pouvoir tampon",
          "D. Son flux permet le nettoyage mécanique des surfaces dentaires"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A :Faux,le pH est normally maintenu proche de la neutralité (6.7 et 7.3) . [cite: 543]\n B :Faux,la salive influence fortement le processus carieux... [cite: 544]"
      },
      {
        questionText: "La carie à évolution lente est une :",
        options: [
          "A. Lésion chronique et indolore",
          "B. La dentinogénèse stabilise l'évolution de la carie.",
          "C. Lésion stationnaire",
          "D. Lésion à fond noir."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C :Faux ,(\"Lésion stationnaire\") correspond à une carie arrêtée. [cite: 489]\n D :Faux,(\"Lésion à fond noir\") liée à une carie arrêtée [cite: 489]"
      },
      {
        questionText: "Les bactéries les plus cariogènes sont :",
        options: [
          "A. Les Lactobaciles",
          "B. Des bactéries qui décomposent les polysaccharides et produisent de l'acide lactique",
          "C. Les Streptocoques mutans",
          "D. A cocci gram positif"
        ],
        correctOptionIndexes: [2],
        explanation: "AD :sont fausses;Les Streptocoques mutans sont les bactéries les plus impliquées dans la formation de caries dentaires. [cite: 729] Elles produisent de l’acide lactique à partir des sucres et contribuent à la déminéralisation de l'émail. [cite: 730]"
      },
      {
        questionText: "L'évaluation du risque carieux individuel :",
        options: [
          "A. N'influence pas la démarche thérapeutique des lésions carieuses",
          "B. Permet d'identifier les individus hautement susceptibles de développer des lésions carieuses",
          "C. Est primordiale pour déterminer les mesures de prévention",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'évaluation du risque carieux est une étape fondamentale. Elle permet d'identifier les patients à haut risque pour mettre en place des mesures de prévention ciblées et adapter la démarche thérapeutique."
      },
      {
        questionText: "La carie arrêtée est une lésion :",
        options: [
          "A. Dont le signe pathognomonique est un fond dentinaire noir et brillant",
          "B. Dont le signe pathognomonique est un fond dentinaire jaunâtre et mou",
          "C. Évolutive",
          "D. Stationnaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La carie arrêtée est une lésion stationnaire (non évolutive). Cliniquement, elle est caractérisée par un fond dentinaire dur, de couleur foncée (noir) et d'aspect brillant."
      },
      {
        questionText: "Au sondage, la carie dentinaire révèle une cavité laiteuse avec de la dentine ramollie",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Cliniquement, une carie dentinaire active se présente souvent comme une cavité d'aspect laiteux ou grisâtre, et au sondage, la dentine infectée est typiquement ramollie."
      },
      {
        questionText: "Une obturation débordante avec un point de contact non reconstitué représente des facteurs favorisant l'apparition de carie.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Les restaurations mal adaptées (débordantes, mal polies) et l'absence de point de contact sont des facteurs iatrogènes qui favorisent la rétention de plaque bactérienne et le tassement alimentaire, augmentant ainsi le risque de caries secondaires ou de nouvelles caries."
      },
      {
        questionText: "La salive :",
        options: [
          "A. A un pH normalement maintenu à 5",
          "B. N'influence pas le processus carleux",
          "C. Possède un pouvoir tampon",
          "D. Son flux permet le nettoyage mécanique des surfaces dentaires"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La salive joue un rôle protecteur crucial. Son pH normal est proche de la neutralité (6.7-7.3). Elle possède un pouvoir tampon qui neutralise les acides, et son flux assure un nettoyage mécanique des surfaces dentaires, éliminant débris alimentaires et bactéries."
      },
      {
        questionText: "La trilogie de keys :",
        options: [
          "A. Etablie la relation entre les trois principaux facteurs de risques de la carie hôte +mircroflore+acide",
          "B. Etablie la relation entre les trois principaux facteurs de risques de la carie : hote+mircroflore+substrat alimentaire",
          "C. Est modifié par Konig qui rajoute un facteur 'temps'",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La trilogie originale de Keys identifie trois facteurs essentiels à l'apparition de la carie : un hôte susceptible (la dent), une microflore cariogène et un substrat alimentaire (sucres). Ce modèle a ensuite été complété par König, qui a ajouté le facteur 'temps' comme quatrième dimension indispensable."
      },
      {
        questionText: "La carie de la dentine présente la forme d'un",
        options: [
          "A. Triangle avec une pointe au niveau de l'émail",
          "B. Losange jusqu'à la pulpe",
          "C. Cône avec une base se situant au niveau de la jonction émail dentine.",
          "D. Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [2],
        explanation: "La progression de la carie dans la dentine est plus rapide et suit les tubuli dentinaires. Elle prend la forme d'un cône dont la base est large au niveau de la jonction amélo-dentinaire et dont le sommet pointe vers la pulpe."
      },
      {
        questionText: "La théorie chimico-parasitaire alcaline de Gottlieb : énonce une protéolyse primaire et une décalcification secondaire :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. La théorie de Gottlieb, basée sur une protéolyse, suggère que les constituants organiques de l'émail (la trame protéique) sont attaqués en premier par les enzymes des micro-organismes (protéolyse). Cette dégradation initiale faciliterait ensuite la pénétration des acides et la décalcification."
      },
      {
        questionText: "Le taux d'élimination des hydrates de carbone de la cavité buccale n'affecte pas le risque de carie",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Le temps de contact des sucres avec les dents est un facteur crucial. Plus les hydrates de carbone sont éliminés rapidement (par la salive ou le brossage), moins les bactéries ont de temps pour produire les acides responsables de la carie."
      },
      {
        questionText: "La carie dentaire est :",
        options: [
          "A. Une maladie d'origine polymirobienne, d'étiologie multifactorielle.",
          "B. Considérée comme le deuxième fléau mondial selon l'OMS",
          "C. Un phénomène provoquant la dissolution de tissus dentaires",
          "D. Irréversible dans les lésions initiales"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La carie est une maladie infectieuse d'origine polymicrobienne et d'étiologie multifactorielle, qui provoque la dissolution des tissus durs de la dent. Elle est considérée par l'OMS comme le troisième fléau mondial. Son processus est réversible au stade initial (lésion sans cavitation)."
      },
      {
        questionText: "Les atteintes de l'émail:",
        options: [
          "A. Sont des lésions avancées qui évoluent en profondeur.",
          "B. Sont recouvertes d'une couche d'émail apparemment intacte.",
          "C. Sont symptomatiques",
          "D. Présence de rugosité à l'inspection et au sondage."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les atteintes initiales de l'émail sont des lésions de sub-surface, souvent recouvertes par une couche superficielle d'émail qui semble intacte mais a perdu de sa translucidité (white spot). Elles sont asymptomatiques mais peuvent présenter une certaine rugosité au sondage."
      },
      {
        questionText: "La carie à évolution lente. est une :",
        options: [
          "A. Lésion chronique et indolore",
          "B. La dentinogenèse stabilise l'évolution de la carie.",
          "C. Lésion stationnaire",
          "D. Lésion à fond noir"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La carie à évolution lente est une lésion chronique, généralement indolore. Dans ce type de carie, le complexe dentino-pulpaire a le temps de réagir en produisant de la dentine réactionnelle, ce qui stabilise et ralentit la progression de la lésion. Une lésion stationnaire ou à fond noir correspond à une carie arrêtée."
      },
      {
        questionText: "La carie à évolution rapide est :",
        options: [
          "A. Lésion douloureuse",
          "B. Une lésion dont la dentinogenèse est accélérée",
          "C. Une lésion qui évolue rapidement vers l'inflammation pulpaire.",
          "D. Lésion qui évolue lentements"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La carie à évolution rapide est souvent douloureuse car la progression est si agressive que les mécanismes de défense de la pulpe (dentinogenèse) sont dépassés. Par conséquent, la dentinogenèse est ralentie ou arrêtée, et la lésion évolue rapidement vers une inflammation pulpaire."
      },
      {
        questionText: "L'indice CAOD:",
        options: [
          "A. Est la somme du nombre de faces cariées absentes et obturées",
          "B. Est la somme du nombre de dents cariés absentes et obturées",
          "C. Varie de 0 à 32",
          "D. Est toujours inférieur à 128"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'indice CAOD (CAO Dents) est un indice épidémiologique qui additionne le nombre de Dents Cariées, Absentes (pour cause de carie) et Obturées. Il est calculé par individu et varie de 0 à 32 (ou 28 si les dents de sagesse sont exclues). L'indice basé sur les faces (CAOF) peut aller jusqu'à 128."
      },
      {
        questionText: "La carie initiale de l'émail forme:",
        options: [
          "A. Un triangle avec une pointe au niveau de l'émail",
          "B. Un triangle avec une pointe au niveau de la dentine",
          "C. Un triangle jusqu'à la pulpe",
          "D. Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [1],
        explanation: "La lésion carieuse initiale dans l'émail progresse en suivant l'orientation des prismes d'émail. Elle prend la forme d'un cône ou d'un triangle dont la base se situe à la surface de l'émail et le sommet (la pointe) est dirigé vers la jonction amélo-dentinaire."
      },
      {
        questionText: "Les bactéries les plus cariogènes sont :",
        options: [
          "A. Les Lactobaciles",
          "B. Des bactéries qui décomposent les polysaccharides et produisent de l'acide lactique",
          "C. Les Streptocoques mutans",
          "D. A cocci gram positif"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les streptocoques du groupe mutans sont les initiateurs principaux de la carie, tandis que les lactobacilles sont souvent impliqués dans la progression de la lésion. Ces bactéries sont des cocci Gram positif qui métabolisent les sucres (polysaccharides) en produisant de l'acide lactique, responsable de la déminéralisation."
      },
      {
        questionText: "Les facteurs de risques liés à la présence de carie dentaire sont:",
        options: [
          "A. Des tissus parodontaux altérés",
          "B. Le biofilm et les bactéries cariogènes",
          "C. Le glucose présent dans la salive",
          "D. Une hygiène bucco-dentaire parfaite"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les principaux facteurs de risque sont la présence d'un biofilm mature (plaque dentaire) contenant des bactéries cariogènes, et la disponibilité d'un substrat fermentescible comme le glucose. Une bonne hygiène est un facteur de protection, tandis que des tissus parodontaux altérés peuvent être une conséquence mais pas une cause directe de la carie."
      },
      {
        questionText: "L'évaluation du risque carieux permet :",
        options: [
          "A. de détecter les individus hautement susceptibles de développer des lésions carieuses.",
          "B. Elle permet de déterminer les mesures préventives efficaces,",
          "C. De choisir quels matériaux utiliser pour la restauration.",
          "D. permet de déterminer si les lésions peuvent être traitées de manière non invasive"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'évaluation du risque carieux est un outil complet qui aide le clinicien à toutes les étapes de la prise en charge : identifier les patients à risque, planifier des mesures préventives adaptées, décider de l'approche thérapeutique (invasive ou non) et choisir le matériau de restauration le plus approprié pour le contexte clinique."
      },
      {
        questionText: "Parmi les aliments cariostatiques ont a :",
        options: [
          "A. Le Xylitol",
          "B. Les cystatines",
          "C. Le Cyclamate",
          "D. Les mucines"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les aliments cariostatiques sont ceux qui ne contribuent pas à la formation de caries. Le Xylitol et le Cyclamate sont des édulcorants non métabolisés par les bactéries cariogènes. Les cystatines et les mucines sont des protéines salivaires protectrices, mais ne sont pas des aliments."
      },
      {
        questionText: "Les facteurs de défense salivaire spécifiques:",
        options: [
          "A. empêchant la fixation des bactéries sur les tissus",
          "B. provoquent une agglutination des bactéries",
          "C. leurs propriétés sont diminuées ou absentes en présence d'une xerostomie",
          "D. exercent un effet inhibiteur sur les bactéries"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les facteurs de défense spécifiques, principalement les immunoglobulines A sécrétoires (sIgA), exercent un effet inhibiteur sur les bactéries en empêchant leur adhésion aux surfaces dentaires et en provoquant leur agglutination, ce qui facilite leur élimination. Leur efficacité est logiquement réduite en cas de sécheresse buccale (xérostomie)."
      },
      {
        questionText: "Les facteurs de défense spécifiques de la salive sont:",
        options: [
          "A. Les mucines",
          "B. Les glycoprotéines salivaires",
          "C. Les immunoglobulines A sécrétoires",
          "D. Les lysozymes"
        ],
        correctOptionIndexes: [2],
        explanation: "La défense salivaire spécifique est assurée par le système immunitaire, représenté principalement par les immunoglobulines A sécrétoires (sIgA). Les autres éléments comme les mucines, glycoprotéines et lysozymes font partie des mécanismes de défense non spécifiques."
      },
      {
        questionText: "Le pouvoir tampon de la salive est assuré par :",
        options: [
          "A. les carbonates,",
          "B. de phosphates et de certaines protéines",
          "C. urée par exemple.",
          "D. glucane insoluble"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le pouvoir tampon de la salive, qui lui permet de neutraliser les acides, est principalement dû au système des bicarbonates, des phosphates et de certaines protéines comme l'urée. Le glucane est un polysaccharide produit par les bactéries et fait partie du biofilm, il n'a pas de pouvoir tampon."
      }
    ]
  },
  {
    title: "les lésions des tissus durs de la dent autres qu'infectieuse et traumatiques",
    subject: "oce",
    questions: [
      {
        questionText: "Quelle est l'étiologie principale de l'érosion dentaire ?",
        options: [
          "A. Stress mécanique occlusal",
          "B. Frottement d'objets étrangers",
          "C. Acides d'origine endogène ou exogène",
          "D. Mouvements para fonctionnels nocturnes"
        ],
        correctOptionIndexes: [2],
        explanation: "L'érosion est une usure dentaire d'origine purement chimique. Elle est causée par la dissolution des tissus durs par des acides qui ne sont pas produits par les bactéries, qu'ils soient d'origine exogène (alimentation acide) ou endogène (reflux gastrique)."
      },
      {
        questionText: "Les lésions des tissus dures de la dent autres qu'infectieuses et traumatiques peuvent être:",
        options: [
          "A. D'origine carieuse",
          "B. D'origine bactériennex",
          "C. Dues à une parafonction",
          "D. D'origine alimentaire"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A :Faux, les lésions d'origine carieuse sont liées à l'action des bactéries... ce qui est une pathologie infectieuse. [cite: 365, 366]\n B :Faux, Une lésion bactérienne est une infection... [cite: 367, 368]"
      },
      {
        questionText: "L'attrition peut être associes a l'anorexie ou la boulimie:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La réponse correcte est :B.Faux . [cite: 1008]\n -Les troubles alimentaires comme anorexie et boulimie entraînent surtout une érosion dentaire palatine. [cite: 1009]"
      },
      {
        questionText: "La Mylolyse, due à un brossage excessif, est typiquement localisée :",
        options: [
          "A. Sur les faces occlusales des molaires",
          "B. Sur les faces palatines des incisives supérieures",
          "C. À la jonction cémento-dentinaire",
          "D. À l'apex des racines"
        ],
        correctOptionIndexes: [2],
        explanation: "Le terme 'mylolyse' est un ancien synonyme pour les lésions cervicales d'usure. Qu'il s'agisse d'abrasion (brossage excessif) ou d'abfraction, ces lésions sont typiquement localisées au niveau du collet de la dent, c'est-à-dire à la jonction cémento-dentinaire."
      },
      {
        questionText: "Quelle est la différence principale entre l'abrasion et l'attrition ?",
        options: [
          "A. L'abrasion est chimique, l'attrition est mécanique",
          "B. L'abrasion implique un agent extérieur, l'attrition est due au contact dent/dent",
          "C. L'abrasion affecte l'émail, l'attrition la dentine",
          "D. L'abrasion est réversible, l'attrition non"
        ],
        correctOptionIndexes: [1],
        explanation: "L'attrition et l'abrasion sont toutes deux des usures mécaniques. La différence fondamentale réside dans leur origine : l'attrition est causée par le frottement des dents les unes contre les autres (contact dent/dent), tandis que l'abrasion est causée par le frottement d'un corps étranger contre la dent (brosse à dents, objets...)."
      },
      {
        questionText: "L'usure en forme de cuvette sur les surfaces occlusales est une caractéristique clinique retrouvée particulièrement dans une lésion d'abfraction.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'abfraction est une lésion en forme de coin ou d'encoche située au niveau cervical (collet) de la dent, due à des contraintes occlusales. L'usure en forme de cuvette sur les faces occlusales est plus caractéristique de l'érosion."
      },
      {
        questionText: "L'abrasion c'est une usure d'origine alimentaire peut siéger au niveau cervical.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'abrasion est une usure mécanique causée par un frottement externe (ex: brosse à dents), et non d'origine alimentaire. L'usure d'origine alimentaire est généralement l'érosion (chimique)."
      },
      {
        questionText: "Quelle théorie explique l'abfraction selon GRIPPO (1991) ?",
        options: [
          "A. Une dissolution de l'émail par les acides salivaires",
          "B. Une usure due à un frottement alimentaire",
          "C. Une contrainte cyclique d'origine occlusale",
          "D. Une friction entre deux dents antagonistes"
        ],
        correctOptionIndexes: [2],
        explanation: "La théorie de l'abfraction, proposée par Grippo, postule que des forces occlusales excessives ou mal dirigées créent des contraintes de flexion au niveau du collet de la dent. Ces contraintes cycliques provoquent des microfractures de l'émail et de la dentine, conduisant à une perte de substance cervicale."
      },
      {
        questionText: "L'érosion est une usure dentaire",
        options: [
          "A. Rencontrée chez les bruxsomane",
          "B. Rencontrée chez les grands consommateurs de soda ou jus de fruits",
          "C. Est une attaque acide extrinsèque seulement",
          "D. peut toucher toutes les faces de la dent"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'érosion est une usure chimique qui peut toucher toutes les faces de la dent. Elle est fréquemment observée chez les grands consommateurs de boissons et d'aliments acides (cause extrinsèque). Elle peut aussi être due à des acides d'origine intrinsèque (reflux gastrique). Le bruxisme, quant à lui, provoque de l'attrition."
      },
      {
        questionText: "Les lésions des tissus dures de la dent autres qu'infectieuses et traumatiques peuvent être d'origine",
        options: [
          "A. Carieuse",
          "B. Bactérienne",
          "C. Suite à une parafonction",
          "D. Alimentaire"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Ces lésions, dites non carieuses, peuvent avoir plusieurs origines. Les parafonctions (comme le bruxisme) provoquent de l'attrition ou de l'abfraction. L'alimentation peut provoquer de l'érosion (aliments acides) ou de l'abrasion (aliments très durs). Les causes carieuses et bactériennes sont par définition infectieuses."
      },
      {
        questionText: "L'érosion est une usure dentaire qui est rencontrée chez les bruxomanes et peut toucher toutes les faces de la dent",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'usure rencontrée chez les bruxomanes est l'attrition (mécanique), et non l'érosion (chimique). Bien que l'érosion puisse toucher toutes les faces de la dent, elle n'est pas causée par le bruxisme."
      },
      {
        questionText: "L'abrasion c'est une usure",
        options: [
          "A. Dû aux frottements des dents entre elles",
          "B. Dû aux frottements des dents avec un corps étranger",
          "C. D'origine alimentaire",
          "D. Peut siéger au niveau cervical"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'abrasion est une perte de tissu dentaire due au frottement d'un corps étranger. La cause la plus fréquente est un brossage traumatique, qui crée des lésions siégeant typiquement au niveau cervical (collet). Le frottement des dents entre elles correspond à l'attrition."
      },
      {
        questionText: "Dans l'amélogenèse imparfaite héréditaire (AIH), la forme et le volume des dents ne sont pas affectés par la détérioration de l'émail:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'amélogenèse imparfaite est un défaut structurel de l'émail. La détérioration ou l'absence de cet émail affecte non seulement l'aspect et la couleur, mais aussi la morphologie (forme et volume) des couronnes dentaires."
      },
      {
        questionText: "Afin de prévenir les érosions il faut:",
        options: [
          "A. Utiliser un dentifrice abrasif",
          "B. Utiliser un dentifrice à teneur élevé en fluor",
          "C. Limiter les boissons acides",
          "D. Utiliser une brosse à dent à poils souple"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La prévention de l'érosion repose sur la limitation de l'exposition aux acides (boissons, aliments). Il est également conseillé d'utiliser une brosse à dents à poils souples et un dentifrice peu abrasif mais riche en fluor pour favoriser la reminéralisation et renforcer la surface de l'émail."
      },
      {
        questionText: "L'abfraction :",
        options: [
          "A. Est une perte de substance occlusale",
          "B. Est une perte de substance dans la jonction amélo-cémentaire",
          "C. Surviens suite a l’application de charges occlusales excessives",
          "D. Fait suite à une intervention bactériologique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'abfraction est une perte de substance non carieuse localisée au niveau de la jonction amélo-cémentaire (collet). Elle est théorisée comme résultant de forces occlusales excessives qui créent des contraintes de flexion et des microfractures dans cette zone fragile."
      },
      {
        questionText: "Une Lésion d'usure (LU)",
        options: [
          "A. Est une lésion d'origine héréditaire",
          "B. Est une lésion non carieuse",
          "C. Est une perte tissulaire due aux acides cariogènes",
          "D. Est une perte tissulaire résultant d'un processus multifactoriel de friction, d'abrasion et/ou d'érosion."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Une lésion d'usure est par définition une perte de substance non carieuse (non causée par les acides bactériens). Elle résulte souvent d'une combinaison de facteurs et de mécanismes, incluant l'attrition (friction dent/dent), l'abrasion et/ou l'érosion."
      },
      {
        questionText: "L'attrition peut être associes a l'anorexie ou la boulimie:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Les troubles du comportement alimentaire comme l'anorexie et la boulimie (avec vomissements) sont principalement associés à l'ÉROSION dentaire, due à l'exposition répétée des dents aux acides gastriques."
      },
      {
        questionText: "L'abfraction:",
        options: [
          "A. Elle pour cause le brossage exagère",
          "B. Elle pour cause le bruxisme",
          "C. Elle a pour cause les frottements des dents entre elle",
          "D. Elle a pour cause le serrage exagéré"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'abfraction est liée à des parafonctions qui génèrent des forces occlusales excessives, comme le bruxisme (grincement) ou le clenching (serrage exagéré). Le brossage provoque de l'abrasion et le frottement des dents entre elles de l'attrition."
      },
      {
        questionText: "L'érosion :",
        options: [
          "A. Elle a pour cause le brossage exagéré",
          "B. Elle a pour cause les acides alimentaires",
          "C. Elle a pour cause le serrage exagère",
          "D. Elle a pour cause la consommation de sodas en quantités exagéré"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'érosion est une usure chimique. Ses causes principales sont externes, comme la consommation fréquente d'acides alimentaires ou de boissons acides (sodas, jus de fruits)."
      },
      {
        questionText: "L'abrasion :",
        options: [
          "A. Elle a pour cause le serrage, exagéré",
          "B. Elle a pour cause la consommation d'acide",
          "C. Elle a pour cause le brossage avec une bosse a dent a poils durs",
          "D. Elle a pour cause le brossage intempestif"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'abrasion est une usure mécanique dont les causes les plus communes sont liées à des habitudes de brossage inappropriées : un brossage trop vigoureux (intempestif) et/ou l'utilisation d'une brosse à dents à poils durs."
      },
      {
        questionText: "Parmi les moyens de préventions des érosions:",
        options: [
          "A. Utiliser une brosse à poils souples",
          "B. brossage énergique des dents.",
          "C. Choisir un dentifrice abrasif non acide et avec une teneur élevée en fluor.",
          "D. Choisir un dentifrice faiblement abrasif non acide et avec une teneur élevée en fluor."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Pour prévenir l'érosion, il faut éviter d'aggraver l'usure mécanique. Il est donc recommandé d'utiliser une brosse à dents à poils souples et un dentifrice faiblement abrasif. Un pH non acide et une teneur élevée en fluor sont également bénéfiques pour protéger et reminéraliser l'émail."
      }
    ]
  },
  {
    title: "Présentation des cavités de classe I",
    subject: "oce",
    questions: [
      {
        questionText: "Le praticien peut procéder directement à l'extension de la cavité à l'aide d'une fine fraise cylindrique, en carbure de tungstène ou diamantée montée sur contre angle bleu lors de la taille de cavités.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'extension de la cavité, qui requiert de la vitesse et de la précision, se fait à l'aide d'une fraise cylindrique montée sur TURBINE, et non sur contre-angle."
      },
      {
        questionText: "Lors de la taille des cavités de cl I de black sur les molaires",
        options: [
          "A. On doit toujours réunir la cavité occlusale avec la cavité au niveau des fossettes V ou L.",
          "B. La cavité de CL I de black composée est une cavité uniquement Occluso-Vestibulaire.",
          "C. On réalisera une cavité composée OV ou OP ceci après appréciation de la résistance mécanique du tissu résiduel entre les deux cavités.",
          "D. Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "A :Faux ;on ne doit pas toujours réunir les cavités. ... « toujours » est une généralisation incorrecte. [cite: 143, 144]\n B : faux ;une cavité de classe I composée peut être occluso-vestibulaire (OV), occluso-palatine (OP) ou occluso-linguale (OL) [cite: 145]\n D : faux ;il existe des réponses correctes. [cite: 145]"
      },
      {
        questionText: "Le curetage dentinaire:",
        options: [
          "A. Est l'action de débarrasser la cavité de tous les tissus dentinaires altéré.",
          "B. Est réalisé à l'aide de fraise boule montée sur CA et d'excavateurs.",
          "C. Est réalisé en premier à l'aide de fraise boule montée sur CA puis complété à l'excavateur.",
          "D. Est réalisé en premier à l'aide d'excavateurs après avec une fraise boule montée sur C"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "C :Faux,est réalisé en premier à l'aide d'excavateurs après avec une fraise boule montée sur CA(contre angle). [cite: 721]"
      },
      {
        questionText: "Parmi ces propositions quelles sont celles qui sont justes:",
        options: [
          "A. L'extension se fait à l'aide d'une fraise boule montée sur turbine",
          "B. La trépanation se fait à l'aide d'une fraise boule montée sur turbine",
          "C. La trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine",
          "D. Le curetage se fait à l'aide d'une fraise boule montée sur turbine gang"
        ],
        correctOptionIndexes: [1],
        explanation: "A :Faux,L'extension se fait à l'aide d'une fraise cylindrique... [cite: 664]\n C :Faux ;La trépanation se fait à l'aide d'une fraise boule montée sur turbine. [cite: 665]\n D :Faux,Le curetage se fait à l'aide d'une fraise boule montée sur contre angle . [cite: 666]"
      },
      {
        questionText: "Parmi ces propositions quelles sont celles qui sont justes?",
        options: [
          "A. La trépanation se fait à l'aide d'une fraise boule montée sur turbine",
          "B. La trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine",
          "C. Le curetage se fait à l'aide d'une fraise boule montée sur contre angle",
          "D. L'extension se fait à l'aide d'une fraise cylindrique montée sur turbine"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux, La trépanation se fait à l'aide d'une fraise boule montée sur turbine. [cite: 727, 728]"
      },
      {
        questionText: "Une cavité simple des fossettes V ou P des molaires sup ou inf",
        options: [
          "A. Est une cavité en forme triangulaire ou ovalaire à grande base cervicale",
          "B. Est une cavité en forme triangulaire ou ovalaire à grande base occlusale",
          "C. Elle tend à se développer le long du sillon V.",
          "D. Elle tend à se développer le long du sillon L"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B :Faux,Est une cavité en forme triangulaire ou ovalaire à grande base cervicale. [cite: 828]\n D :Faux, Elle tend à se développer le long du sillon V. [cite: 828]"
      },
      {
        questionText: "Pour une cavité de classe I de Black sur la (27) on réalisera :",
        options: [
          "A. Une cavité distale en forme de croissant à concavité vestibulaire",
          "B. Une cavité englobant le sillon mésio- palatin à concavité palatine.",
          "C. La suppression du pont d'émail quand celui-ci et miné par la carie",
          "D. Systématiquement une queue d'aronde distale et mésiale."
        ],
        correctOptionIndexes: [2],
        explanation: "A :Faux,Une cavité distale en forme de croissant à concavité palatine. [cite: 881]\n B :Faux, Une cavité englobant le sillon mésio- palatin à concavité vestibulaire [cite: 882]\n D :Faux,Les queues d’aronde ne sont pas systématiques pour les molaires supérieures . [cite: 882]"
      },
      {
        questionText: "Lors de la taille des cavités de cl I de black sur les molaires",
        options: [
          "A. On doit toujours réunir la cavité occlusale avec la cavité au niveau des fossettes Vou L",
          "B. La cavité de CL I de black composée est une cavité uniquement O-V",
          "C. On réalisera une cavité composée OV ou OP ceci après appréciation de la résistance mécanique du tissu résiduel entre les deux cavités",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La décision de réunir une cavité occlusale avec une cavité vestibulaire (OV) ou palatine/linguale (OP) n'est pas systématique. Elle dépend de la proximité des lésions et de la quantité et de la résistance du tissu dentaire qui les sépare. Une cavité composée peut être OV ou OP."
      },
      {
        questionText: "Lors de la préparation d'une cavité de type cl I de Black la trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'étape de trépanation (création du point d'entrée) se fait classiquement avec une fraise BOULE montée sur turbine. La fraise cylindrique est utilisée ensuite pour l'extension de la cavité."
      },
      {
        questionText: "Dans le cas de cavité très étendue en surface, on réalisera un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Dans le cas d'une cavité très étendue, l'élargissement du fond a pour but d'améliorer la RÉTENTION axiale de la restauration, et non sa stabilité (qui est assurée par le fond plat)."
      },
      {
        questionText: "Lors de l'extension de la cavité on élimine l'émail en surplomb non soutenu par de la dentine saine.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Un des principes de la préparation de cavité est d'éliminer tout l'émail non soutenu par de la dentine saine, car il est fragile et risquerait de se fracturer sous les forces de mastication, compromettant l'étanchéité de la restauration."
      },
      {
        questionText: "En présence de Cavité de classe l’étendue",
        options: [
          "A. les tenons dentinaires sont logés dans des puits taillés dans la dentine durs au niveau de la jonction Email Dentine.",
          "B. Le nombre de PINS utilisés est en fonction du nombre de cuspides à restaurer",
          "C. L'utilisation de tenons dentinaire est une technique de restauration complexe",
          "D. Le coffrage est réalisé à l'aide de strip abrasif"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Pour les restaurations étendues, des tenons dentinaires (PINS) peuvent être utilisés pour améliorer la rétention. Le nombre de tenons dépend généralement du nombre de cuspides à remplacer. Les puits pour ces tenons doivent être forés dans la dentine saine, à équidistance de la pulpe et de la jonction amélo-dentinaire."
      },
      {
        questionText: "La stabilité d'une cavité de classe I selon Black est assurée par:",
        options: [
          "A. Un fond plat perpendiculaire à la résultante des forces de mastications.",
          "B. Un trottoir réalisé à un niveau supérieur autour du fond sphérique Dans le cas où la cavité est profonde,",
          "C. Un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire lorsque la cavité très étendue en surface.",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La stabilité est principalement assurée par un fond plat perpendiculaire aux forces occlusales. Pour les cavités profondes, un 'trottoir de Black' peut être ajouté pour renforcer cette stabilité. L'élargissement du fond est lié à la rétention, pas à la stabilité."
      },
      {
        questionText: "Les queues d'arondes:",
        options: [
          "A. Ont pour rôle l'extension prophylactique",
          "B. Ont pour rôle la rétention",
          "C. Sont réalisées au niveau des fossettes centrales",
          "D. Les queues d'arondes ont pour rôle la stabilité"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La queue d'aronde, réalisée au niveau des fossettes marginales, a un double objectif : elle sert à l'extension prophylactique en incluant une zone à risque, et elle fournit une rétention mécanique essentielle pour l'obturation."
      },
      {
        questionText: "Pour les cl I sur molaire :",
        options: [
          "A. La rétention VL est assurée par Les parois elles-mêmes et taillées parallèlement aux faces correspondantes",
          "B. La rétention MD est assurée par Les parois elles-mêmes taillées parallèlement aux faces correspondantes",
          "C. La rétention M D est assurée par Les parois elles-mêmes taillées parallèlement à l'axe de la dent",
          "D. La rétention VL est assurée par les parois V et L épaisses et taillées parallèlement à l'axe de la dent"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Pour une classe I, la rétention dans le sens mésio-distal (MD) est assurée par les parois mésiale et distale taillées parallèlement aux faces correspondantes. La rétention dans le sens vestibulo-lingual (VL) est assurée par des parois vestibulaire et linguale épaisses et taillées parallèlement à l'axe de la dent."
      },
      {
        questionText: "Dans une cavité simple des fossettes V ou P des molaires sup ou inf, les rétentions ne sont pas toujours nécessaires :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Pour les petites cavités simples dans les fossettes, la forme naturelle de la dépression peut offrir une rétention suffisante, surtout si un matériau adhésif est utilisé. La nécessité de créer des rétentions supplémentaires dépend de la profondeur et de l'étendue de la cavité."
      },
      {
        questionText: "Cavité simple des fossettes V ou P des molaires sup ou inf est une cavité généralement plus large que profonde et les retentions sont toujours nécessaires",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Ces cavités sont généralement plus profondes que larges, ce qui leur confère une rétention naturelle. Par conséquent, des rétentions additionnelles ne sont pas toujours nécessaires."
      },
      {
        questionText: "Le Trottoir de Black est réalisé :",
        options: [
          "A. Dans le cas où la cavité de classe ll de Black profonde,",
          "B. Autour du fond oblique à un niveau supérieur",
          "C. Pour assurer la rétention",
          "D. Pour assurer la stabilité"
        ],
        correctOptionIndexes: [3],
        explanation: "Le 'Trottoir de Black' est une modification de la préparation pour les cavités de classe I profondes. Il s'agit d'une marche ou d'un rebord créé autour du fond sphérique de la cavité pour améliorer la STABILITÉ de la restauration en résistant aux forces de mastication."
      },
      {
        questionText: "pour la taille de cavité CL 1 sur molaires supérieures on peut avoir :",
        options: [
          "A. Une cavité mésiale de forme de croissant à concavité P et une distale plus réduite de taille à concavité V.",
          "B. Une cavité mésiale de forme de croissant à concavité V et une distale plus réduite de taille à concavité palatine.",
          "C. Une cavité distale de forme de croissant à concavité V et une cavité mésiale plus réduite de taille à concavité palatine.",
          "D. Une grande cavité sur la face occlusale."
        ],
        correctOptionIndexes: [1],
        explanation: "Lorsque le pont d'émail d'une molaire supérieure est conservé, on prépare deux cavités distinctes : une cavité mésiale, plus grande, en forme de croissant à concavité vestibulaire, et une cavité distale plus petite, occupant le sillon disto-palatin, avec une concavité palatine."
      }
    ]
  },
  {
    title: "Présentation des cavités de classe IV +V",
    subject: "oce",
    questions: [
      {
        questionText: "La cavité de carie type classe V de Black",
        options: [
          "A. Est une cavité de carie cervicale qui peut siéger au niveau des dents antérieures et postérieures",
          "B. Est une cavité de carie vestibulaire seulement.",
          "C. Présente un contour de cavité perpendiculaire au collet.",
          "D. Nécessite l'utilisation des moules transparents type Odus afin de restaurer le bombé cervicale."
        ],
        correctOptionIndexes: [0],
        explanation: "La classe V est une cavité située dans le tiers cervical de la couronne, et peut concerner toutes les dents (antérieures et postérieures). Elle est le plus souvent vestibulaire mais peut aussi être linguale ou palatine. Son contour est parallèle au collet. Pour la restaurer, on utilise des matrices cervicales de Hawe."
      },
      {
        questionText: "Les moules Odus de Caulk :",
        options: [
          "A. Sont des moules transparents en acétate de cellulose,",
          "B. Sont utilisés pour les restaurations de classes V.",
          "C. Doivent être perforés au niveau lingual avant leur utilisation",
          "D. Evitent complétement les finitions des composites"
        ],
        correctOptionIndexes: [0],
        explanation: "B :Faux, Sont utilisés pour les restaurations de classeIV. [cite: 310]\n C :Faux, car ils n'ont pas besoin d'être perforés avant utilisation. [cite: 311]\n D : est incorrecte car... des finitions sont toujours nécessaires. [cite: 312, 313, 314]"
      },
      {
        questionText: "La cavité de carie de classe IV de BLACK fait suite à une évolution d'une lésion carieuse de classe III de black avec de l'angle incisif.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "la réponse correcte est : A. Vrai [cite: 677]\n ✔ Explication : \n La classe IV de Black correspond à une cavité atteignant l’angle incisif... [cite: 677]\n Elle peut être : \n -causée par une fracture traumatique, \n -ou résulter de l’évolution d’une lésion carieuse de classe III ... qui s’étend progressivement vers l’angle. [cite: 678]"
      },
      {
        questionText: "Les moules Odus de Caulk",
        options: [
          "A. Sont des moules transparents en acétate de cellulose,",
          "B. Sont utilisés pour les restaurations de classes V.",
          "C. Doivent être perforés au niveau lingual avant leur utilisation",
          "D. Evitent complétement les finitions des composites"
        ],
        correctOptionIndexes: [0],
        explanation: "B :Faux, Sont utilisés pour les restaurations de classes IV . [cite: 346]\n C :Faux, Ils sont conçus pour s'adapter directement à la cavité sans nécessiter de perforation. [cite: 347]\n D :Faux,Les moules Odus sont des dispositifs qui facilitent la mise en forme... [cite: 347]"
      },
      {
        questionText: "La cavité de carie type classe IV de Black:",
        options: [
          "A. Est une lésion d'origine carieuse.",
          "B. Est une lésion d'origine traumatique.",
          "C. Est une cavité de carie avec atteinte de l'angle incisif.",
          "D. Nécessite l'utilisation des matrices cervicales afin de rétablir l'angle incisif."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Une lésion de classe IV correspond à une atteinte de l'angle incisif d'une dent antérieure. Son origine peut être soit une fracture traumatique, soit l'évolution d'une carie de classe III. Pour restaurer l'angle, on utilise des conformateurs spécifiques comme les angulations Odus Pella."
      },
      {
        questionText: "La cavité de carie type classe V de Black est une cavité de carie vestibulaire seulement.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Bien qu'elle soit plus fréquente sur la face vestibulaire, une lésion de classe V peut également se situer sur la face linguale ou palatine."
      },
      {
        questionText: "Les moules Odus de Caulk",
        options: [
          "A. Sont des moules transparents en acétate de cellulose,",
          "B. Sont utilisés pour les restaurations de classes",
          "C. Doivent être perforés au niveau lingual avant leur utilisation",
          "D. Evitent complétement les finitions des composites"
        ],
        correctOptionIndexes: [0],
        explanation: "Les moules Odus de Caulk sont des conformateurs transparents en acétate de cellulose spécifiquement conçus pour les restaurations de classe IV (angles incisifs). Bien qu'ils facilitent la mise en forme, des finitions de la restauration composite sont toujours nécessaires."
      },
      {
        questionText: "Dans le cas d'une cavité de préparation de classe IV selon black:",
        options: [
          "A. On utilise des tenons dentinaires pour assurer la rétention du matériau",
          "B. On utilise des matériaux de collage",
          "C. On utilise un matériau qui adhère selon des principes mécaniques",
          "D. La cavité de préparation est composée"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Pour les restaurations de classe IV, qui sont soumises à d'importantes contraintes, la rétention est cruciale. Elle est principalement obtenue grâce aux matériaux de collage (adhésion). Dans les cas de perte de substance importante, des rétentions mécaniques supplémentaires comme les tenons dentinaires peuvent être utilisées. La préparation est par définition composée (intéressant au moins deux faces)."
      },
      {
        questionText: "La préparation des cavités classe IV:",
        options: [
          "A. Est une restauration simple bifaces,",
          "B. Est une restauration d'une perte de substance d'origine carieuse née sur une face proximale, étendue en direction de l'angle pouvant occasionner sa fracture.",
          "C. La rétention de la restauration est difficile à avoir en raison des agressions occlusales et des habitudes des patients",
          "D. Pour augmenter la rétention, le collage et les tenons dentinaires sont utilisés simultanément."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La classe IV peut résulter de l'extension d'une carie proximale qui finit par fracturer l'angle incisif. La restauration de cet angle est un défi car il est soumis à de fortes contraintes. La rétention est donc difficile à obtenir et repose principalement sur l'adhésion, parfois aidée de tenons, mais leur usage n'est pas systématiquement simultané."
      }
    ]
  },
  {
    title: "Concepts actuels de préparation des cavités",
    subject: "oce",
    questions: [
      {
        questionText: "Le principe de bio-intégration est basé sur l'évolution des systèmes adhésifs et permet l'obtention de résultats de deux ordres mécaniques et biologiques :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse car elle confond deux principes. Le principe d'ADHÉSION, basé sur les systèmes adhésifs, procure des avantages mécaniques (renforcement) et biologiques (étanchéité). Le principe de BIO-INTÉGRATION, quant à lui, concerne l'association de matériaux bioactifs et de techniques non agressives pour répondre aux exigences de biocompatibilité et de prévention."
      },
      {
        questionText: "Le principe de bio-intégration est basé sur l'évolution des systèmes adhésifs et permet l'obtention de résultats de deux ordres mécaniques et biologiques :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "la réponse correcte est B. Faux. [cite: 51]\n- le principe de bio-intégration : est basée sur l’association des agents de prévention et des matériaux restaurateurs... [cite: 52]\n tandis que le principe d’adhésion : permet l’obtention de résultats de deux ordres : • mécaniques... [cite: 53] • biologiques... [cite: 54]"
      },
      {
        questionText: "La classification de Mount et Hume:",
        options: [
          "A. A comme caractéristique principale le diagnostic des lésions carieuse",
          "B. Est une classification par site et par taille des cavités",
          "C. Est une classification à but thérapeutique",
          "D. Comprend trois sites et cinq tailles"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux, c’est une classification à but thérapeutique ,le choix est en fonction de la lésion et non en fonction du matériau. [cite: 213]\nD :Faux, comprend trois sites et quatre tailles. [cite: 213]"
      },
      {
        questionText: "La laserothérapie a des effets :",
        options: [
          "A. De carbonisation de l'email",
          "B. De fissuration de l'email",
          "C. De vitrification de l'email",
          "D. Cavitation l'email"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux,de carbonisation de la dentine . [cite: 967]\n D :Faux,Cavitation de la dentine . [cite: 967]\n Note : \n L’action du laser sur les tissus dentaires: \n -L’action sur l'émail: \n -effet de vitrification; [cite: 968] \n -effet de mordançage; \n -effet de fissuration. [cite: 968] \n -L’action sur la dentine: \n -effet de carbonisation \n -effet de cavitation \n - effet de stérilisation \n -effet de dissection, assèchement de carie . [cite: 969]"
      },
      {
        questionText: "La classification de Mount et Hume:",
        options: [
          "A. A comme caractéristique principale le diagnostic des lésions carieuse",
          "B. Est une classification par site et par taille des cavités",
          "C. Est une classification à but thérapeutique",
          "D. Comprend trois sites et cinq tailles"
        ],
        correctOptionIndexes: [2],
        explanation: "La classification de Mount et Hume (ou Si/Sta) est une classification à but thérapeutique. Elle guide le choix du traitement en fonction de la localisation de la lésion (3 sites) et de son étendue (5 stades, de 0 à 4), et non en fonction du matériau."
      },
      {
        questionText: "Le curetage chimio-mécanique:",
        options: [
          "A. Est réalisé avec le système Endosolv",
          "B. Le gel utilisé permet de dissoudre de manière sélective la dentine cariée",
          "C. Ne présente pas le risque de laisser du tissu carié dans les cavités à ouverture limité",
          "D. Nécessite un temps d'application long."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le curetage chimio-mécanique (ex: système Carisolv®) utilise un gel qui dissout sélectivement le collagène de la dentine infectée, sans affecter la dentine saine. Ses inconvénients sont un temps d'application long et le risque de laisser du tissu carié dans les zones difficiles d'accès."
      },
      {
        questionText: "La sono-abrasion :",
        options: [
          "A. Nécessite une Irrigation constante",
          "B. Permet une éviction carieuse contrôlée",
          "C. Permet de réaliser des cavités à minima sans préservation de la crête marginale (cavité tunnel)",
          "D. Est d'un grand intérêt pour le traitement des lésions proximales débutantes"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La sono-abrasion utilise des inserts diamantés animés par ultrasons, nécessitant une irrigation constante. Elle est particulièrement intéressante pour préparer des micro-cavités proximales de manière conservatrice, en préservant la crête marginale (cavité tunnel). Cependant, le contrôle de l'éviction carieuse peut être délicat."
      },
      {
        questionText: "Le principe d'économie tissulaire :",
        options: [
          "A. Suppose la conservation d'un maximum de structures saines",
          "B. Garantie de longévité de la dent naturelle restaurée",
          "C. La meilleure façon d'obéir à ce principe passe par le choix du matériau",
          "D. Privilégier un accès aux lésions carieuses cavitaires sans destruction de l'émail"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le principe d'économie tissulaire vise à préserver au maximum les structures dentaires saines lors d'une préparation. Cela passe par un accès le plus conservateur possible pour ménager l'émail. Cette préservation des tissus résiduels est la meilleure garantie pour la longévité de la dent restaurée."
      },
      {
        questionText: "Le laser peut avoir un effet :",
        options: [
          "A. De fissuration sur la dentine",
          "B. De dissection, assèchement de carie sur la dentine",
          "C. De carbonisation sur l'email",
          "D. De mordançage sur l'email"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "L'action du laser varie selon le tissu. Sur l'émail, il peut avoir un effet de mordançage ou de fissuration. Sur la dentine, il peut provoquer une carbonisation, une cavitation, ou être utilisé pour la dissection et l'assèchement du tissu carié."
      },
      {
        questionText: "Le curetage chimio-mécanique est :",
        options: [
          "A. Réalisé avec le système Carisolv",
          "B. Une dissolution du collagène altéré par le processus carieux, qui sera éliminé par l'action des acides",
          "C. Une source de vibrations et de douleurs.",
          "D. Une dissolution sélective de la dentine cariée et n'agit pas sur la dentine saine."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le curetage chimio-mécanique, utilisant des systèmes comme le Carisolv, repose sur un gel qui dissout sélectivement la dentine infectée sans attaquer la dentine saine. Le tissu ramolli est ensuite éliminé avec des instruments manuels non tranchants, ce qui évite les vibrations et la douleur des instruments rotatifs."
      },
      {
        questionText: "Selon les concepts actuels le modèle médicale",
        options: [
          "A. Considère la carie comme une maladie inflammatoire.",
          "B. Propose un plan de traitement global qui commence par l'évaluation du risque carieux initial du patient.",
          "C. Propose d'éliminer de manière machinale, mécanique et invasive toutes les structures déminéralisées",
          "D. Les tissus déminéralisés sont conservés et la restauration doit favoriser leur minéralisation"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le modèle médical considère la carie comme une maladie infectieuse. Il s'oppose au modèle chirurgical traditionnel en proposant un plan de traitement global basé sur le risque carieux du patient. L'objectif n'est plus d'éliminer systématiquement tout tissu déminéralisé, mais de conserver les zones reminéralisables et de favoriser ce processus."
      },
      {
        questionText: "La sono-abrasion",
        options: [
          "A. Emploie des inserts diamantés, animés par une énergie sonore ou ultrasonore,",
          "B. Permet de réaliser des microcavités",
          "C. Permet de réaliser des cavités tunnels avec destruction de la crête marginale.",
          "D. Permet une éviction carieuse très bien contrôlé."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La sono-abrasion utilise des inserts diamantés vibrant à haute fréquence (énergie sonore ou ultrasonore). Elle permet de réaliser des préparations très conservatrices comme les micro-cavités ou les cavités tunnels, en préservant la crête marginale. Le contrôle de l'éviction carieuse reste cependant délicat."
      },
      {
        questionText: "Dans le modèle médical préventif non invasif on pratique des mesures prophylactiques tel que :",
        options: [
          "A. l'application de fluor;",
          "B. le scellement adhésif des puits et des fissures.",
          "C. Le brossage quotidien",
          "D. Les préparations des cavités a minima"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le modèle médical préventif non invasif regroupe les actes prophylactiques réalisés par le praticien qui ne nécessitent pas de tailler la dent. Les exemples typiques sont l'application topique de fluor et le scellement des puits et fissures. Le brossage est une mesure d'hygiène personnelle et la préparation de cavité est un acte invasif."
      },
      {
        questionText: "En obéissant au principe d'économie tissulaire :",
        options: [
          "A. On va ménager l'email",
          "B. On va préserver les tissus résiduels",
          "C. On va assurer le maintien du matériau de restauration",
          "D. On garantit la longévité de la de dent naturelle restaurée"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le principe d'économie tissulaire consiste à ménager au maximum l'émail et à préserver les tissus dentaires résiduels sains. Cette approche conservatrice est la meilleure garantie pour la solidité à long terme et la longévité de la dent restaurée. Le maintien du matériau dépend, lui, des formes de la cavité."
      },
      {
        questionText: "Les principes d'adhésions selon le concept SiSta sont :",
        options: [
          "A. Les principes mécaniques",
          "B. Les principes de bio intégration",
          "C. L'économie tissulaire",
          "D. Les principes biologiques"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le concept Si/Sta, associé à la dentisterie adhésive, repose sur des principes à la fois mécaniques et biologiques. L'adhésion fournit une rétention mécanique (micro-rétention) et assure une protection biologique du complexe dentino-pulpaire grâce à l'étanchéité."
      },
      {
        questionText: "L'air abrasion :",
        options: [
          "A. Permet de réaliser des cavités tunnels",
          "B. A pour principe de projeter des particules de verre",
          "C. A pour principe de projeter des particules d'alumine",
          "D. Nécessite un flux d'air comprimé à 6,5 bars"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'air abrasion (ou micro-sablage) est une technique qui projette de fines particules d'oxyde d'alumine grâce à un flux d'air comprimé à haute pression (environ 6,5 bars). Elle est indiquée pour le traitement des caries superficielles de l'émail et de la dentine, mais n'est pas adaptée pour éliminer la dentine ramollie en profondeur."
      },
      {
        questionText: "une cavité 1/3 selon SiSta est:",
        options: [
          "A. une cavité proximale ayant atteint le tiers interne de la dentine",
          "B. une cavité proximale ayant atteint le tiers interne de la dentine au point de fragiliser les cuspides",
          "C. une cavité occlusale ayant atteint le tiers interne de la dentine au point de fragiliser les cuspides",
          "D. une cavité cervicale ayant atteint le tiers moyen"
        ],
        correctOptionIndexes: [2],
        explanation: "Dans la classification Si/Sta (Site/Stade), '1/3' désigne une lésion de Site 1 (occlusal) et de Stade 3. Le stade 3 correspond à une atteinte qui a progressé jusqu'au tiers interne de la dentine, avec une perte de substance telle qu'elle fragilise les structures cuspidiennes environnantes."
      },
      {
        questionText: "La classification SiSta est une classification basée sur des critères diagnostiques et symptomatiques.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. La classification Si/Sta est fondée sur des critères diagnostiques cliniques et radiographiques objectifs, qui sont mis en relation avec les stades histologiques de la lésion, et non sur des symptômes."
      },
      {
        questionText: "Parmi les modèles de préparation de cavités nous avons :",
        options: [
          "A. Le modèle traditionnel chirurgical non invasif",
          "B. Le modèle traditionnel chirurgical invasif",
          "C. Le modèle médical préventif invasif",
          "D. Le modèle médical peu invasif"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "On distingue principalement le modèle chirurgical traditionnel, qui est par définition invasif, et les approches médicales modernes. Ces dernières incluent un volet préventif non invasif et un volet opératoire peu invasif (ou à minima)."
      }
    ]
  },
  {
    title: "les dyschromies dentaires",
    subject: "oce",
    questions: [
      {
        questionText: "Les dyschromies extrinsèques",
        options: [
          "A. Sont Congénitales",
          "B. Correspondent à des colorations superficielles",
          "C. Induites par des facteurs externes et internes",
          "D. N'altèrent pas la composition chimique de la dent"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les dyschromies extrinsèques sont des colorations acquises (non congénitales) qui se déposent sur la surface de l'émail. Elles sont induites uniquement par des facteurs externes (alimentation, tabac...) et n'altèrent pas la structure chimique interne de la dent."
      },
      {
        questionText: "Les dyschromies extrinsèques regroupent:",
        options: [
          "A. Colorations dues aux biofilm, plaque et tartre",
          "B. Colorations dues aux tanins de l'alimentation",
          "C. Colorations tabagiques.",
          "D. Colorations bactériennes"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "-Toutes les propositions A, B, C et D sont correctes, car elles correspondent toutes à des dyschromies extrinsèques (atteinte superficielle de l’émail, sans modification de sa composition) . [cite: 83]"
      },
      {
        questionText: "Les dyschromies extrinsèques :",
        options: [
          "A. Peuvent survenir durant ou après la formation de la dentine et de l’émail",
          "B. Sont des colorations superficielles",
          "C. Peuvent être génétiques ou congénitales",
          "D. Sont incorporées à la structure externe de la dent"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A :Faux, Les dyschromies extrinsèques surviennent après l'éruption des dents... [cite: 713]\n C : est incorrecte,car cela décrit plutôt les dyschromies intrinsèques. [cite: 714]"
      },
      {
        questionText: "La technique d'éclaircissement externe :",
        options: [
          "A. Est indiquée pour le traitement des dyschromies sur dents vitales",
          "B. Utilise le perborate de sodium",
          "C. Est réservée à l'éclaircissement des dents dépulpés",
          "D. Utilise l'eau oxygénée"
        ],
        correctOptionIndexes: [0],
        explanation: "B :faux,Le perborate de sodium est utilisé dans l'éclaircissement interne, qui concerne les dents dépulpées. [cite: 532]\n C :faux, L'éclaircissement externe n'est pas réservé aux dents dépulpées Ce dernier nécessite une dent vivante. [cite: 533]"
      },
      {
        questionText: "Dans le système colorimétrique de la dent, la saturation:",
        options: [
          "A. Dépend principalement de la dentine",
          "B. Est le degré de clarté de la couleur",
          "C. Se situe dans le jaune-orange",
          "D. Dépend de la translucidité de l'émail"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B :Faux, Elle exprime la densité ou la quantité de pigments contenus dans une couleur, Le degré de clarté correspond plutôt à la luminosité pas à la saturation [cite: 731]\n C :Faux, C'est une caractéristique de la teinte , pas de la saturation. [cite: 732]"
      },
      {
        questionText: "Les dyschromics dentaires sont:",
        options: [
          "A. Des décolorations des dents qui peuvent survenir durant ou après la formation de la dentine et de l'émail",
          "B. Des décolorations des dents qui surviennent uniquement durant la formation de la dentine et de l'émail,",
          "C. décolorations associées au patient incorporées uniquement à l'intérieur de la structure dentaire",
          "D. Des décolorations associées au dentiste et peuvent être évitées,"
        ],
        correctOptionIndexes: [0],
        explanation: "B :faux, La décoloration d’une dent peut survenir durant ou après la formation de l’émail et de la dentine. [cite: 503]\n C :faux, Elle peut être associée au patient lui-même ou à des traitements effectués par le praticien. [cite: 504]"
      },
      {
        questionText: "L'Hypominéralisation des molaires et des incisives:",
        options: [
          "A. Est une anomalie qualitative de l'émail",
          "B. Est une anomalie quantitative de l'émail",
          "C. Est une anomalie qualitative et quantitative de l'émail",
          "D. Est une hypominéralisation d'origine systémique, intéressant au moins une molaire permanente."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B :faux,est une anomalie qualitative de l'émail. [cite: 509]\n C :faux,l'hypominéralisation des molaires et des incisives n'affecte pas la quantité d'émail, mais plutôt sa qualité. [cite: 509]"
      },
      {
        questionText: "La technique d'éclaircissement externe:",
        options: [
          "A. Est indiquée pour le traitement des dyschromies sur dents vitales",
          "B. Utilise le perborate de sodium",
          "C. Est réservée à l'éclaircissement des dents dépulpées",
          "D. Utilise l'eau oxygénée"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B :Faux,Le perborate de sodium est utilisé dans l'éclaircissement interne des dents dépulpées... [cite: 853, 854]\n C :Faux,Est indiquée pour le traitement des dyschromies sur dents vitales((Dents pulpées). [cite: 854]"
      },
      {
        questionText: "Les décolorations des dents associées au praticien peuvent êtres superficielles ou incorporées à l'intérieur des structures dentaires :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "la réponse correcte :B :Faux. [cite: 929]\n -Les décolorations des dents associées au praticien(Les colorations iatrogènes) peuvent être à l’origine de colorations internes. [cite: 930]"
      },
      {
        questionText: "La technique d'éclaircissement externe :",
        options: [
          "A. Est indiquée pour le traitement des dyschromies sur dents vitales",
          "B. Utilise le perborate de sodium.",
          "C. Est réservée à l'éclaircissement des dents dépulpées.",
          "D. Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0],
        explanation: "B :Faux,ça c’est pour l’éclaircissement interne (dents dépulpées). [cite: 961]\n C :Faux,L’éclaircissement externe est indiqué pour les dents vitales(dents pulpées)... [cite: 962]\n D :Faux,car A est correcte [cite: 962]"
      },
      {
        questionText: "La luminosité de la dent:",
        options: [
          "A. Correspond à la translucidité de l'émail",
          "B. Dépend en grande partie de la dentine",
          "C. Est la quantité de lumière réfléchie par la dent",
          "D. Augmente avec l'âge"
        ],
        correctOptionIndexes: [2],
        explanation: "A :Faux,Elle représente la quantité de lumière réfléchie par une dent. [cite: 977]\n B :Faux, dépend tout particulièrement de la quantité et de la qualité de l’émail. [cite: 978]\n D :Faux, la luminosité diminue en général avec l’âge. [cite: 978]"
      },
      {
        questionText: "Parmi les caractéristiques optiques suivantes, laquelle est directement influencée par les variations de position de l'observateur ?",
        options: [
          "A. Saturation",
          "B. Opalescence",
          "C. Luminosité",
          "D. Fluorescence."
        ],
        correctOptionIndexes: [1],
        explanation: "L'opalescence est la propriété optique qui décrit les variations de couleur perçues sur la dent en fonction de l'angle d'observation et de l'éclairage. La saturation, la luminosité et la fluorescence ne varient pas directement avec la position de l'observateur."
      },
      {
        questionText: "Les dyschromies extrinsèques regroupent:",
        options: [
          "A. Colorations dues aux biofilm, plaque et tartre",
          "B. Colorations dues aux tanins de l'alimentation",
          "C. Colorations tabagiques.",
          "D. Colorations bactériennes"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Toutes ces propositions sont des exemples de dyschromies extrinsèques. Elles correspondent à des dépôts superficiels sur l'émail, qu'ils proviennent du biofilm (plaque, tartre, bactéries chromogènes), de l'alimentation (tanins du thé, café) ou du tabac."
      },
      {
        questionText: "L'hypo minéralisation des molaires et des incisives (MIH):",
        options: [
          "A. Est un défaut quantitatif de l'émail,",
          "B. Est un changement dans la translucidité de la dentine.",
          "C. II peut affecter une à quatre premières molaires permanentes, associé ou non à l'atteinte des incisives permanentes.",
          "D. Est une dyschromie intrinsèque"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le MIH est une dyschromie intrinsèque qui correspond à un défaut qualitatif (et non quantitatif) de l'émail, affectant sa translucidité. Il touche typiquement de une à quatre premières molaires permanentes, avec ou sans atteinte des incisives permanentes."
      },
      {
        questionText: "La polychromie de la dent résulte :",
        options: [
          "A. De la différence d'épaisseur de ses tissus",
          "B. Homogénéité des tissus.",
          "C. L'émail permet la réflexion de la lumière, son absorption, et sa transmission à la dentine sous-jacente.",
          "D. La dentine permet à la lumière sa réflexion et son absorption"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La couleur d'une dent n'est pas uniforme (polychromie) en raison de l'hétérogénéité de ses tissus et de la différence de leur épaisseur. L'émail, translucide, transmet la lumière à la dentine sous-jacente qui, elle, absorbe et réfléchit la lumière, déterminant ainsi la teinte de base de la dent."
      },
      {
        questionText: "La couleur naturelle d'une dent:",
        options: [
          "A. Est exclusivement déterminée par l'émail.",
          "B. Dépend de la diffusion et de l'absorption de la lumière par la dentine et l'émail.",
          "C. Variable avec l'âge",
          "D. Résulte uniquement de la réfraction lumineuse."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La couleur d'une dent est un phénomène complexe qui dépend de l'interaction de la lumière (diffusion, absorption) avec l'émail et la dentine. L'émail translucide laisse transparaître la couleur de la dentine. Cette couleur naturelle évolue et varie avec l'âge."
      },
      {
        questionText: "Le perborate de sodium:",
        options: [
          "A. Est un produit d'éclaircissement externe des dents dyschromiées",
          "B. Présente un pH acide",
          "C. Se présente sous la forme d'une poudre blanche inodore",
          "D. Entraine des effets indésirables sur les tissus mous"
        ],
        correctOptionIndexes: [2],
        explanation: "Le perborate de sodium est un agent d'éclaircissement INTERNE, utilisé pour les dents dépulpées. Il se présente sous forme de poudre blanche et a un pH alcalin (environ 9.9), ce qui le rend peu agressif pour les tissus mous."
      },
      {
        questionText: "L'amélogenèse imparfaite :",
        options: [
          "A. Touche uniquement les dents temporaires",
          "B. Est une maladie héréditaire d'origine multigénique",
          "C. Est due à une mauvaise constitution de la dentine",
          "D. Est due à une mauvaise constitution de l'email"
        ],
        correctOptionIndexes: [3],
        explanation: "L'amélogenèse imparfaite est une maladie héréditaire qui se traduit par une mauvaise constitution de l'émail. Elle peut affecter aussi bien la dentition temporaire que permanente."
      },
      {
        questionText: "Les colorations dentaires dues au veillissement physiologique font partie des dyschromies extrinsèques",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Le vieillissement provoque des modifications internes de la dent (amincissement de l'émail, apposition de dentine secondaire plus foncée), ce qui en fait une cause de dyschromie INTRINSÈQUE."
      },
      {
        questionText: "La fluorose est :",
        options: [
          "A. D'origine génétique",
          "B. Une anomalie congénitale",
          "C. Une dyschromie extrinsèque pré-éruptive",
          "D. Une dyschromie intrinsèque post-éruptive"
        ],
        correctOptionIndexes: [1],
        explanation: "La fluorose est une anomalie de développement (congénitale, mais non génétique) due à une ingestion excessive de fluor pendant la formation des dents. Il s'agit donc d'une dyschromie intrinsèque et pré-éruptive."
      },
      {
        questionText: "La saturation:",
        options: [
          "A. Elle exprime la densité ou la quantité de pigments contenus dans une couleur.",
          "B. D'une dent est principalement due à la dentine",
          "C. La saturation d'une dent est due uniquement à la dentine",
          "D. Est dépendante de la translucidité et de l'épaisseur de l'émail"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La saturation exprime l'intensité ou la pureté d'une couleur. Pour une dent, elle est principalement déterminée par la dentine, mais la perception finale de cette saturation dépend de l'émail qui la recouvre, notamment de son épaisseur et de sa translucidité."
      },
      {
        questionText: "Les dyschromies Intrinsèques sont des atteintes:",
        options: [
          "A. Pré-éruptives uniquement",
          "B. Génétiques ou congénitales",
          "C. Poste éruptives",
          "D. Par incorporation d'agents colorants au sein du complexe pulpo-dentinaire"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les dyschromies intrinsèques peuvent être d'origine génétique/congénitale (pré-éruptives) ou acquises (post-éruptives). Elles sont causées par l'incorporation d'agents colorants au sein des tissus durs de la dent (complexe amélo-dentinaire)."
      },
      {
        questionText: "La translucidité de la dent:",
        options: [
          "A. Diminue avec l’âge",
          "B. Dépend principalement de l'épaisseur de la dentine",
          "C. Augmente avec l’âge",
          "D. Exprime la densité des pigments dans la couleur"
        ],
        correctOptionIndexes: [0],
        explanation: "La translucidité est la propriété de l'émail à laisser passer la lumière. Avec l'âge, l'émail s'amincit par usure et la dentine secondaire s'appose, rendant la dent globalement plus opaque. La translucidité diminue donc avec l'âge."
      },
      {
        questionText: "Les décolorations des dents associées au praticien peuvent êtres superficielles ou incorporées à l'intérieur des structures dentaires :",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Les colorations iatrogènes (associées au praticien), comme celles dues aux matériaux d'obturation ou aux produits endodontiques, sont typiquement des colorations internes, incorporées à l'intérieur des structures dentaires."
      },
      {
        questionText: "Les problèmes primaires les plus rencontrés au niveau des dents atteintes d'amélogenèse imparfaite sont:",
        options: [
          "A. D'ordre esthétique (teinte, aspect de surface irrégulier, morphologie inhabituelle)",
          "B. Colorations des zones rugueuses.",
          "C. Dents trop sensibles aux variations thermiques.",
          "D. Pertes de la dimension verticale"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les problèmes primaires directement liés à l'amélogenèse imparfaite sont d'ordre esthétique (dû à l'aspect de l'émail) et la sensibilité dentinaire (due au manque de protection de l'émail). Les colorations des zones rugueuses et la perte de dimension verticale sont des conséquences secondaires qui apparaissent avec le temps."
      },
      {
        questionText: "La luminosité de la dent:",
        options: [
          "A. Dépend en grande partie de la dentine",
          "B. Est la quantité de lumière réfléchie par la dent",
          "C. Dépend uniquement de la qualité de l'email",
          "D. Elle constitue la propriété de la dentine à transformer la lumière"
        ],
        correctOptionIndexes: [1],
        explanation: "La luminosité (ou brillance) d'une dent correspond à la quantité de lumière qu'elle réfléchit. Elle dépend principalement de la quantité et de la qualité de l'émail (état de surface, épaisseur)."
      },
      {
        questionText: "Le bioxyde d'hydrogène est :",
        options: [
          "A. Utilisé à des concentrations allant jusqu'à 35%",
          "B. Présente un pH acide",
          "C. Est dangereux pour la peau et la muqueuse buccale",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "Le peroxyde d'hydrogène (ou eau oxygénée) est utilisé en éclaircissement à des concentrations variables (3% à 35%). Son pH est acide (2.5 - 4), ce qui le rend potentiellement irritant et dangereux au contact direct de la peau et des muqueuses."
      },
      {
        questionText: "L'oxytetracycline provoque une coloration gris-brun de la dent:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. L'oxytétracycline est associée à une coloration jaune-orangée. C'est la chlorotétracycline qui provoque une coloration gris-brun."
      },
      {
        questionText: "La chlorotétracycline provoque une coloration jaune-orangée de la dent:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. La chlorotétracycline donne une coloration gris-brun. La coloration jaune-orangée est typique de l'oxytétracycline."
      },
      {
        questionText: "Dans la classification de la fluorose endémique:",
        options: [
          "A. l'indice 2 correspond à une fluorose légère",
          "B. l'indice 3 correspond à une atteinte sévère atteignant toute la surface coronaire de la dent",
          "C. l'indice 1 correspond à une fluorose très légère touchant 5 de la surface coronaire de la dent",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Selon la classification, l'indice 2 correspond bien à une fluorose légère. L'indice 3 correspond à une atteinte modérée, et l'indice 1 (très légère) concerne jusqu'à 25% de la surface de la dent."
      }
    ]
  },
  {
    title: "Introduction à l'odontologie conservatrice endodontie",
    subject: "oce",
    questions: [
      {
        questionText: "L'origine embryologique de l'émail est :",
        options: [
          "A. Mésodermique",
          "B. Endodermique",
          "C. Ectodermique",
          "D. Mésenchymateuse"
        ],
        correctOptionIndexes: [2],
        explanation: "L'émail est un tissu d'origine épithéliale qui dérive du feuillet embryonnaire ectodermique."
      },
      {
        questionText: "Quelle est la principale fonction des odontoblastes ?",
        options: [
          "A. Illimitée dans le temps",
          "B. Limitée dans le temps",
          "C. Continue tout au long de la vie",
          "D. Dépendante de la racine"
        ],
        correctOptionIndexes: [1],
        explanation: "A :Faux,Limitée dans le temps. [cite: 196]\n C:Faux,L’émail est produit uniquement par les améloblastes, qui disparaissent après l’éruption de la dent → donc sa formation est limitée dans le temps . [cite: 197]\n D :Faux, l’émail ne dépend pas de la racine... [cite: 198]\n (Note: Question 56 seems to be a corrupted copy of Q73. The options relate to enamel formation, not odontoblast function. The correct answer is B based on the explanation provided.)"
      },
      {
        questionText: "La formation de l'émail est :",
        options: [
          "A. Illimitée dans le temps",
          "B. Limitée dans le temps",
          "C. Continue tout au long de la vie",
          "D. Dépendante de la racine"
        ],
        correctOptionIndexes: [1],
        explanation: "ACD :sont fausses ;toujours La formation de l'émail est limitée dans le temps . [cite: 253]"
      },
      {
        questionText: "Au cours de la dentinogenèse :",
        options: [
          "A. La dentine primaire se forme jusqu'à édification complète de la racine",
          "B. La dentine primaire se forme durant toute la vie de la dent",
          "C. La dentine secondaire se forme après édification complète de la racine",
          "D. La dentine secondaire se forme durant toute la vie de la dent"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux,la dentine primaire n'est pas formée tout au long de la vie de la dent, tandis que la dentine secondaire continue de se former tout au long de sa vie. [cite: 818]"
      },
      {
        questionText: "L'émail:",
        options: [
          "A. Est un tissu acellulaire",
          "B. A la capacité de se régénérer après être détruit",
          "C. A la capacité de se reminéraliser suite à une déminéralisation",
          "D. C'est une barrière semi-perméable grâce à la substance inter-prismatique"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux,L'émail n'a pas la capacité de se régénérer une fois qu'il est détruit. [cite: 814]"
      },
      {
        questionText: "La dentine:",
        options: [
          "A. Constitue la majeure partie de la dent",
          "B. Est un tissu minéralisé d'origine ectodermique",
          "C. Est traversée par des canalicules sur toute son épaisseur, de la puipe à la jonction amelo dentinaire",
          "D. Ne peut se régénérer suite à une agression"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B :Faux,La dentine est un tissu conjonctif minéralisé d’origine mésenchymateuse. [cite: 965]\n D :Faux, car la dentine subit un processus de régénération . [cite: 966]"
      },
      {
        questionText: "Les odontoblastes:",
        options: [
          "A. Se trouvent dans la zone centrale de la pulpe",
          "B. Ce sont des cellules dentinogéniques",
          "C. Disparaissent une fois que la dent aura fait son éruption",
          "D. Leurs prolongements cytoplasmiques traversent la dentine dans les tubuli"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A :Faux, Les odontoblastes se trouvent dans la couche périphérique de la pulpe. [cite: 996]\n C :Faux,Contrairement aux améloblastes ... les odontoblastes persistent toute la vie... [cite: 997]"
      },
      {
        questionText: "Au cours de la dentinogénèse :",
        options: [
          "A. La dentine primaire se forme jusqu'à édification complète de la racine",
          "B. La dentine primaire se forme durant toute la vie de la dent",
          "C. La dentine secondaire se forme après édification complète de la racine",
          "D. La dentine secondaire se forme durant toute la vie de la dent"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux, La dentine primaire se forme seulement pendant le développement de la dent... [cite: 1004] Après, c’est la dentine secondaire qui se forme toute la vie. [cite: 1005]"
      },
      {
        questionText: "Quelle est la principale fonction des odontoblastes ?",
        options: [
          "A. Produire l'émail",
          "B. Produire la dentine",
          "C. Assurer la vascularisation de la dent",
          "D. Protéger la pulpe"
        ],
        correctOptionIndexes: [1],
        explanation: "La fonction principale et unique des odontoblastes est la dentinogenèse, c'est-à-dire la production de la dentine. La production d'émail est assurée par les améloblastes."
      },
      {
        questionText: "La formation de l'émail est :",
        options: [
          "A. Illimitée dans le temps",
          "B. Limitée dans le temps",
          "C. Continue tout au long de la vie",
          "D. Dépendante de la racine"
        ],
        correctOptionIndexes: [1],
        explanation: "La formation de l'émail (amélogenèse) est un processus limité dans le temps. Elle s'arrête une fois la couronne de la dent formée, car les cellules responsables (améloblastes) disparaissent après l'éruption de la dent."
      },
      {
        questionText: "Quels sont les rôles fonctionnels assurés par la pulpe dentaire ?",
        options: [
          "A. Assurer la sensibilité, la vascularisation et la régénération de l'émail",
          "B. Produire la dentine, assurer la nutrition et la sensibilité de cette dernière",
          "C. Maintenir les fibres de Sharpey dans leur position",
          "D. Former le cément et réguler les forces masticatoires"
        ],
        correctOptionIndexes: [1],
        explanation: "La pulpe a plusieurs rôles vitaux : elle assure la formation de la dentine (dentinogenèse), sa nutrition via son réseau vasculaire, et sa sensibilité via son réseau nerveux. Elle ne participe pas à la régénération de l'émail."
      },
      {
        questionText: "Quelle est la principale caractéristique de l'émail dentaire ?",
        options: [
          "A. Il est constitué principalement de cellules vivantes",
          "B. Il possède une capacité de régénération.",
          "C. l est la structure la plus dure du corps humain",
          "D. Il est vascularisé et innervé."
        ],
        correctOptionIndexes: [2],
        explanation: "L'émail est le tissu le plus dur et le plus minéralisé du corps humain. Il est acellulaire, avasculaire et non innervé, et par conséquent, il n'a aucune capacité de régénération une fois détruit."
      },
      {
        questionText: "Quels sont les trois types de dentinogenèse ?",
        options: [
          "A. Primaire, secondaire et tertiaire.",
          "B. Centrale, périphérique et réactionnelle.",
          "C. Manteau, réparatrice et réactionnelle.",
          "D. Minéralisée, non minéralisée et secondaire."
        ],
        correctOptionIndexes: [0],
        explanation: "On distingue trois types de dentine selon le moment et la raison de leur formation : la dentine primaire (formée pendant le développement de la dent), la dentine secondaire (formée lentement tout au long de la vie), et la dentine tertiaire (formée en réponse à une agression)."
      },
      {
        questionText: "Quelle partie de l'organe dentaire est directement exposée aux forces de mastication ?",
        options: [
          "A. Le parodonte",
          "B. Le cément",
          "C. L'odonte",
          "D. Les ligaments parodontaux"
        ],
        correctOptionIndexes: [2],
        explanation: "L'odonte (constitué de l'émail, la dentine et la pulpe) est la partie de la dent qui subit directement les forces de mastication. Le parodonte (cément, ligament, os, gencive) est l'ensemble des tissus de soutien qui ancrent l'odonte et amortissent ces forces."
      },
      {
        questionText: "L'émail",
        options: [
          "A. Est un tissu acellulaire",
          "B. A la capacité de se régénérer après être détruit",
          "C. A la capacité de se reminéraliser suite à une déminéralisation",
          "D. C'est une barrière semi-perméable grâce à la substance inter-prismatique"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'émail est un tissu acellulaire, ce qui le rend incapable de se régénérer. Cependant, il peut se reminéraliser après une déminéralisation initiale. Il agit également comme une barrière semi-perméable, notamment grâce à la substance inter-prismatique."
      },
      {
        questionText: "La dentine",
        options: [
          "A. Constitue la majeure partie de la dent",
          "B. Tissu minéralisé d'origine ectodermique",
          "C. Traversée par des canalicules sur toute son épaisseur de la pulpe jusqu'à la jonction amélo-dentinaire",
          "D. Ne peut se régénérer suite à une agression"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La dentine forme la masse principale de la dent. Elle est d'origine mésenchymateuse (et non ectodermique) et est parcourue sur toute son épaisseur par des canalicules (tubuli dentinaires). Contrairement à l'émail, elle possède une capacité de régénération (formation de dentine tertiaire) grâce aux odontoblastes."
      },
      {
        questionText: "La dentine tertiaire:",
        options: [
          "A. Se produit durant toute la vie de la dent",
          "B. Se produit suite à une agression",
          "C. C'est une dentine réparatrice",
          "D. C'est une dentine réactionnelle"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La dentine tertiaire ne se forme qu'en réponse à une agression (carie, traumatisme). Selon l'intensité de l'agression et la survie des odontoblastes, elle peut être de type réactionnelle (sécrétée par les odontoblastes primaires) ou réparatrice (sécrétée par de nouveaux odontoblastes)."
      },
      {
        questionText: "Au cours de la dentinogénèse",
        options: [
          "A. La dentine primaire se forme jusqu'à édification complète de la racine",
          "B. La dentine primaire se forme durant toute la vie de la dent",
          "C. La dentine secondaire se forme après édification complète de la racine",
          "D. La dentine secondaire se forme durant toute la vie de la dent"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentine primaire est celle qui se forme jusqu'à l'édification complète de la racine. Une fois la racine formée, la dentinogenèse se poursuit à un rythme plus lent : c'est la formation de la dentine secondaire, qui continue tout au long de la vie de la dent."
      },
      {
        questionText: "La pulpe dentaire",
        options: [
          "A. Tissu minéralisé occupe la partie centrale de la dent",
          "B. Responsable de l'amélogénèse",
          "C. Responsable de la dentinogénèse",
          "D. Elle se protège en élaborant de la dentine tertiaire"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La pulpe est un tissu conjonctif mou (non minéralisé) qui occupe la partie centrale de la dent. Elle est responsable de la dentinogenèse (formation de la dentine) et peut se défendre contre les agressions en élaborant une barrière de dentine tertiaire."
      },
      {
        questionText: "Les odontoblastes",
        options: [
          "A. Se trouvent dans la zone centrale de la pulpe",
          "B. Ce sont des cellules dentinogéniques",
          "C. Disparaissent une fois que la dent aura fait son éruption",
          "D. Leurs prolongements cytoplasmiques traversent la dentine dans les tubuli"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les odontoblastes sont les cellules spécialisées dans la formation de la dentine (cellules dentinogéniques). Elles se situent à la périphérie de la pulpe et ne disparaissent pas après l'éruption. Leurs prolongements cytoplasmiques s'étendent à l'intérieur des tubuli qui parcourent la dentine."
      },
      {
        questionText: "La dentine réparatrice:",
        options: [
          "A. Est une dentine tertiaire",
          "B. Produite par des odontoblastes de 1ere génération",
          "C. Produite par des odontoblastes de 2éme génération",
          "D. Produite par des cellules souches différenciées en cellules dentinogénétique"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentine réparatrice est un type de dentine tertiaire. Elle est formée suite à une agression sévère qui a entraîné la mort des odontoblastes primaires. De nouvelles cellules, issues de la différenciation de cellules souches pulpaires, deviennent des odontoblastes de 2ème génération et élaborent cette nouvelle dentine."
      },
      {
        questionText: "Choisissez la légende correcte du schéma :",
        options: [
          "A. 1 dentine tertiaire, 2 mantle dentine, 3 dentine primaire, 4 dentine secondaire",
          "B. 1 mantle dentine, 2 dentine tertiaire, 3 dentine secondaire, 4 dentine primaire",
          "C. 1 mantle dentine, 2 dentine secondaire, 3 dentine tertiaire, 4 dentine primaire",
          "D. 1 dentine primaire, 2 dentine tertiaire, 3 dentine secondaire, 4 mantle dentine"
        ],
        correctOptionIndexes: [1],
        explanation: "La légende correcte est : 1- mantle dentine (dentine du manteau, la plus externe), 2- dentine tertiaire (formée localement en réponse à une agression), 3- dentine secondaire (formée après l'édification de la racine), 4- dentine primaire (le corps principal de la dentine)."
      }
    ]
  },
  {
    title: "Les moyens de détection des lésions carieuses",
    subject: "oce",
    questions: [
      {
        questionText: "Selon Charland, pour qu'il y ait carie, il faut",
        options: [
          "A. Des aliments cariogéniques.",
          "B. Une plaque bactérienne accumulée sur les surfaces dentaires.",
          "C. La formation d'acides.",
          "D. Reminéralisation permanente des lésions déminéralisées"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Selon le modèle étiologique, la carie nécessite la conjonction de plusieurs facteurs : la présence d'une plaque bactérienne (biofilm), des aliments cariogéniques (sucres) que les bactéries métabolisent, et la formation d'acides qui en résulte, provoquant la déminéralisation. La reminéralisation est le processus inverse qui prévient la carie."
      },
      {
        questionText: "Selon Charland, pour qu'il y ait carie, il faut",
        options: [
          "A. Des aliments cariogéniques.",
          "B. B Une plaque bactérienne accumulée sur les surfaces dentaires.",
          "C. La formation de bases.",
          "D. Reminéralisation permanente des lésions déminéralisées"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C :Faux, La plaque bactérienne ... joue un rôle clé dans la formation des acides... [cite: 360]\n D :Faux, une carie se forme lorsque la déminéralisation l'emporte sur la reminéralisation. [cite: 361]"
      },
      {
        questionText: "Dentine de réparation:",
        options: [
          "A. Apparaît quand les stimuli sont excessifs",
          "B. Appelée aussi dentine secondaire",
          "C. Est plus ou moins sensible aux variations thermiques.",
          "D. Les tubuli de cette dentine sont réguliers."
        ],
        correctOptionIndexes: [0],
        explanation: "B :Faux,appelée aussi dentine de défense ou tertiaire. [cite: 393]\n C :Faux,elle est moins sensible aux variations thermiques. [cite: 394]\n D :Faux,les tubuli de cette dentine sont irréguliers parfois absents. [cite: 394]"
      },
      {
        questionText: "Sur une radiographie",
        options: [
          "A. L'email est radio opaque.",
          "B. La dentine est radio opaque.",
          "C. Une perte de la densité minérale se manifeste par une image radio-claire.v",
          "D. Le Bite-wing permet la détection précoce des lésions proximales."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B :Faux, La dentine est moins dense que l'émail, donc elle est moins radio-opaque . [cite: 417]"
      },
      {
        questionText: "L'atrophie:",
        options: [
          "A. Fait suite à l'inflammation pulpaire",
          "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire",
          "C. Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
          "D. Est une altération dégénérative de la pulpe."
        ],
        correctOptionIndexes: [3],
        explanation: "A : Faux,Ce n’est pas une conséquence de l’inflammation... [cite: 576]\n B : Faux,La réduction du volume pulpaire peut se faire par dentine secondaire ... et tertiaire... [cite: 576]\n C : Faux,Cette réduction se produit progressivement avec l’âge, pas chez les jeunes. [cite: 577, 578]"
      },
      {
        questionText: "La lésion carieuse :",
        options: [
          "A. Se traduit par une image radio opaque sur un cliché radiographique",
          "B. Se manifeste par une image radio claire sur le Diagnodent",
          "C. Se traduit par une augmentation de la fluorescence",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "A :Faux, Une lésion carieuse apparaît plutôt comme une image radioclaire... [cite: 723]\n B :Faux, Le Diagnodent ne produit pas une image de la dent, mais affiche une valeur numérique... [cite: 724]\n D :Faux,il existe des réponses justes. [cite: 724]"
      },
      {
        questionText: "La transillumination:",
        options: [
          "A. Permet le dépistage des caries de sillons",
          "B. Est pratiquée à l'aide du Diagnodent",
          "C. Est un moyen de diagnostic des fêlures",
          "D. Est réalisée à l'aide d'une lampe de photo polymérisation"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A :Faux,permet de détecter la présence de fêlures ou de caries proximales. [cite: 815]\n B :Faux,est pratiqué à l’aide d’une source lumineuse ponctuelle (fibre optique, lampe à photopolymériser). [cite: 816]"
      },
      {
        questionText: "Parmi les aides optiques suivantes:",
        options: [
          "A. Les loupes binoculaires font parties de la catégorie des moyens directes.",
          "B. opératoires en font partie avec un grossissement jusqu'à 20",
          "C. Les Les caméra microscopes intra-orales conventionnelles peuvent servir d'aide au diagnostic par leur optimisation de l'éclairage et leur agrandissement de l'image.",
          "D. Les miroirs demeurent un moyen d'aide direct incontournable."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les loupes binoculaires et le microscope opératoire (grossissement jusqu'à x60) sont des aides optiques directes. Les caméras intra-orales, qui retransmettent l'image sur un écran, sont des aides indirectes utiles grâce à l'agrandissement et l'éclairage. Le miroir est un instrument de base, mais pas considéré comme une 'aide optique' au sens du grossissement."
      },
      {
        questionText: "Sur une radiographie:",
        options: [
          "A. L'émail est radio opaque.",
          "B. La dentine est radio opaque.",
          "C. Une perte de la densité minérale se manifeste par une image radio-claire.",
          "D. Le Bite-wing permet la détection précoce des lésions proximales"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Sur un cliché radiographique, les tissus minéralisés comme l'émail et la dentine apparaissent radio-opaques (blancs). Une lésion carieuse, qui est une perte de densité minérale, se manifeste par une image radio-claire (sombre). La radiographie Bite-wing (rétro-coronaire) est la technique de choix pour la détection précoce des caries proximales."
      },
      {
        questionText: "Parmi les moyens de diagnostic",
        options: [
          "A. La transillumination permet de détecter la présence de fêlures ou de caries proximales par interruption de la diffusion de la lumière.",
          "B. La Radio-Visio-graphie (RVG) permet une meilleure visualisation des lésions carieuses (atteintes superficielles de l'émail) par augmentation des contrastes",
          "C. La fluorescence est réalisée grâce à un dispositif appelé Diagnodent.",
          "D. Le test électrique est basé sur la faible conductivité du tissu dentinaire."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La transillumination et le Diagnodent (fluorescence laser) sont des outils de diagnostic modernes. La radiovisiographie (RVG) est la version numérique de la radiographie, permettant un meilleur traitement de l'image. Le test de conductivité électrique est basé sur la faible conductivité de l'émail sain, qui augmente en présence d'une lésion carieuse."
      },
      {
        questionText: "Le diagnostic des lésions carieuses débutantes de l'émail est plus ou moins difficile selon:",
        options: [
          "A. La topographie de la lésion carieuse.",
          "B. Dents antérieures / postérieures.",
          "C. Caries occlusales/ Cervicales et ou proximales.",
          "D. La coopération des patients."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La difficulté du diagnostic d'une lésion débutante dépend fortement de sa localisation. Une carie proximale ou occlusale sur une dent postérieure sera bien plus difficile à détecter cliniquement qu'une carie sur la face vestibulaire d'une incisive. La coopération du patient influe sur le traitement, mais moins sur la détection elle-même."
      },
      {
        questionText: "Dans la détection des lésions carieuses, le sondage est effectué à l'aide des sondes numéro 19 et 7:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Le sondage pour la détection des caries est réalisé avec des sondes exploratrices spécifiques, classiquement les sondes n°9 et n°17."
      },
      {
        questionText: "Les caméras intra-orales conventionnelles peuvent servir d'aide au diagnostic par leur optimisation de l'éclairage et leur agrandissement de l'image.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est vrai. Les caméras intra-orales sont des outils précieux en améliorant considérablement la visualisation des surfaces dentaires, en particulier les zones difficiles d'accès, grâce à un éclairage direct et un fort agrandissement de l'image sur un écran."
      },
      {
        questionText: "La radiographie rétro-coronaire:",
        options: [
          "A. Appelée également radiographie retro-alvéolaire.",
          "B. Est le cliché de choix pour le dépistage précoce des caries proximales",
          "C. Elle fournit une vue d'ensemble de toute la cavité buccale",
          "D. Nécessite un capteur numérique et un système informatique"
        ],
        correctOptionIndexes: [1],
        explanation: "La radiographie rétro-coronaire, aussi appelée 'Bite-wing', est spécifiquement conçue pour visualiser les couronnes des dents maxillaires et mandibulaires sur un même cliché. C'est l'examen de référence pour le dépistage des caries interproximales. Elle peut être réalisée avec un film argentique traditionnel ou un capteur numérique."
      },
      {
        questionText: "En présence d'une lésion carieuse initiale, les ultrasons sont contre indiqués:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Au contraire, des dispositifs basés sur les ultrasons peuvent être utilisés pour la détection des caries. Le principe est que la déminéralisation de la surface dentaire modifie la dispersion des ondes ultrasoniques, ce qui permet de détecter la lésion."
      },
      {
        questionText: "Lors d'une lésion carieuse initiale:",
        options: [
          "A. A l'examen radiologique, elle se manifeste par une image radio-claire.",
          "B. L'inspection clinique se fait à l'aide d'un miroir est d'un examen complémentaire",
          "C. Le Diagnodent permet la détection des caries occlusales et proximales avec précision.",
          "D. Lors des tests électriques on remarque une diminution de la conductibilité électrique de la dent."
        ],
        correctOptionIndexes: [0],
        explanation: "Radiologiquement, une perte de minéraux se traduit par une image radio-claire (sombre). L'inspection clinique se fait sur des dents propres et sèches, sous bon éclairage. Lors des tests électriques, une lésion carieuse (qui augmente la porosité) entraîne une augmentation de la conductivité électrique."
      },
      {
        questionText: "La lésion carieuse se traduit par une diminution de la conductivité électrique:",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "C'est faux. L'émail sain est un mauvais conducteur. La déminéralisation carieuse augmente la porosité de l'émail, ce qui entraîne une AUGMENTATION de sa conductivité électrique."
      },
      {
        questionText: "La transillumination par fibre optique :",
        options: [
          "A. Permet de détecter la présence de fêlures ou de caries proximales",
          "B. Est utilisée pour le traitement des fractures coronaires pénétrantes",
          "C. Utilise une source lumineuse ponctuelle placée au contact de la dent",
          "D. Est pratiquée à l'aide de la turbine"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La transillumination est une technique de diagnostic (non de traitement) qui utilise une source de lumière froide et puissante (fibre optique) placée contre la dent. Une carie proximale ou une fêlure apparaît comme une ombre car elle interrompt la diffusion de la lumière à travers la dent."
      },
      {
        questionText: "Le Diagnodent:",
        options: [
          "A. Produit une image accompagnée d'un signal sonore",
          "B. Indique le degré de déminéralisation des tissus dentaires",
          "C. Permet de mettre en évidence la carie dentaire grâce à la diminution de la fluorescence",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Le Diagnodent est un appareil basé sur la fluorescence laser. Il ne produit pas d'image, mais donne une valeur numérique (et un signal sonore) proportionnelle au degré de déminéralisation. La dentine cariée présente une fluorescence plus importante que la dentine saine."
      },
      {
        questionText: "La déminéralisation dentaire se traduit par :",
        options: [
          "A. Une augmentation de la fluorescence et de la conductivité électrique",
          "B. Une augmentation de la fluorescence et la diminution de la conductivité électrique",
          "C. Une diminution de la fluorescence et de la conductivité électrique",
          "D. Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "La perte de minéraux due à la carie augmente la porosité de l'émail et de la dentine. Cette modification se traduit physiquement par une augmentation de la fluorescence (détectée par le Diagnodent) et une augmentation de la conductivité électrique."
      },
      {
        questionText: "Parmi les moyens de détections des lésions carieuses:",
        options: [
          "A. Les tests de percussion axiale",
          "B. L'utilisation de l'excavateur et le miroir",
          "C. Inspection clinique",
          "D. Les Aides optiques"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La base de la détection est l'inspection clinique visuelle. Celle-ci peut être grandement améliorée par des aides optiques (loupes, microscope). Les tests de percussion servent à évaluer l'état pulpaire ou parodontal, et l'excavateur est un instrument de traitement (curetage)."
      },
      {
        questionText: "Sur la radiographie:",
        options: [
          "A. La validité du diagnostic des lésions carieuses diminue avec la taille de la lésion",
          "B. La carie se manifeste par une image radio-opaque",
          "C. L'émail sain est radio-claire",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "La validité du diagnostic radiographique est la plus élevée pour les lésions de taille intermédiaire. Les très petites lésions peuvent ne pas être visibles (faux négatifs), et les très grandes lésions sont évidentes mais la radio ne permet pas toujours de juger de la proximité pulpaire exacte. L'émail sain est radio-opaque et la carie radio-claire."
      },
      {
        questionText: "Sur une radiographie:",
        options: [
          "A. La perte de la densité minérale de manifeste par une radio opacité",
          "B. La perte de la densité minérale se manifeste par une radio clarté",
          "C. L'email est très opaque",
          "D. L'email est très radio claire"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'émail, étant le tissu le plus minéralisé, est très radio-opaque (apparaît très blanc). Une lésion carieuse, qui correspond à une perte de densité minérale, se manifestera par une zone de radio-clarté (une tache sombre) au sein de cette structure opaque."
      },
      {
        questionText: "Parmi les aides optiques directes en retrouve :",
        options: [
          "A. La camera intra orale",
          "B. Les loupes binoculaires",
          "C. Le microscope électronique",
          "D. Le microscope opératoire"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les aides optiques directes sont celles à travers lesquelles le praticien regarde directement, comme les loupes binoculaires et le microscope opératoire. La caméra intra-orale est une aide indirecte car l'image est vue sur un écran. Le microscope électronique n'est pas utilisé en pratique clinique."
      },
      {
        questionText: "L'interruption de la diffusion de lumière lors de la transillumination signifie :",
        options: [
          "A. La présence de carie occlusale",
          "B. La présence de carie proximale",
          "C. La présence de fêlure",
          "D. Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La transillumination consiste à éclairer la dent. Normalement, la lumière se diffuse uniformément. Une zone de déminéralisation (carie proximale) ou une ligne de fracture (fêlure) interrompt cette diffusion et apparaît comme une ombre, aidant au diagnostic."
      }
    ]
  },
  {
    title: "instruments en dentisterie restauratrice et digue",
    subject: "oce",
    questions: [
      {
        questionText: "Le curetage dentinaire est réalisé avec",
        options: [
          "A. La turbine",
          "B. L'excavateur",
          "C. Le contre-angle",
          "D. La sonde"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le curetage de la dentine cariée (ramollie) se fait à basse vitesse pour ne pas léser la pulpe. Il peut être réalisé manuellement avec un excavateur, ou mécaniquement avec une fraise boule de gros diamètre montée sur un contre-angle (bague bleue ou verte)."
      },
      {
        questionText: "Le contre angle bleu:",
        options: [
          "A. Présente l'inconvenient de provoquer des vibrations",
          "B. Est comme la turbine présente un sens de rotation réglable x",
          "C. Peut provoquer un échauffement générer par sa vitesse de rotation",
          "D. Permet de travailler avec des vitesses de rotation de 1000 à 2500 T/mn"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B :Faux, Contrairement à la turbine, le sens de rotation est réglable. [cite: 446]\n C :Faux, La vitesse qu’il génère étant inférieure à celle de la turbine, il ne provoque pas de réchauffement. [cite: 447]\n (Note: L'option D est correcte pour un contre-angle bleu, qui est un réducteur)"
      },
      {
        questionText: "La pratique d'une anesthésie locale nécessite :",
        options: [
          "A. Un porte carpule à usage unique",
          "B. Un porte carpule métallique",
          "C. Une aiguille",
          "D. Une carpule d'anesthésie"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "A :faux , En pratique clinique, le porte carpule ... est généralement en métal (acier inoxydable) et est réutilisable après stérilisation . [cite: 490, 491]"
      },
      {
        questionText: "Le contre angle à bague rouge à une vitesse de rotation de 1000 à 2500 T/mn.",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La réponse correcte est : B. Faux\n -Le contre-angle à bague rouge a une vitesse de rotation comprise entre 16 000 et 180 000 tours par minute. [cite: 377]"
      },
      {
        questionText: "Quelle est l'instrumentation spécifique au coffrage?",
        options: [
          "A. Le ruban matrice",
          "B. La matrice",
          "C. Le strip lisse",
          "D. Les coins inter dentaires"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "-Toutes le réponses sont justes"
      },
      {
        questionText: "L'obturation d'une cavité à l'amalgame requiert l'utilisation :",
        options: [
          "A. D'un porte carpule métallique",
          "B. D'un fouloir",
          "C. D'une lampe à photo polymériser",
          "D. D'un wedjet2"
        ],
        correctOptionIndexes: [1],
        explanation: "L'obturation à l'amalgame nécessite des instruments spécifiques pour condenser le matériau dans la cavité, comme le fouloir (ou condenseur). Le porte-carpule sert à l'anesthésie, la lampe à photopolymériser aux composites, et le Wedjet à la pose de la digue."
      },
      {
        questionText: "Le contre-angle :",
        options: [
          "A. Doit être monté sur un micromoteur",
          "B. Génère très peu de vibrations",
          "C. Le sens de rotation est réglable",
          "D. Possède une vitesse de rotation supérieure à celle de la turbine"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le contre-angle est un instrument rotatif qui se monte sur un micromoteur. Sa vitesse est bien inférieure à celle de la turbine, mais il génère plus de vibrations. Un de ses avantages est que le sens de rotation est réglable (horaire et anti-horaire)."
      },
      {
        questionText: "Le système Isolite :",
        options: [
          "A. Nécessite la pose de feuille en latex",
          "B. Nécessite l'utilisation d'une canule",
          "C. Est un écarteur buccal",
          "D. Est un système d'aspiration"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le système Isolite est un dispositif multifonctions qui combine un écarteur pour la bouche et la langue, un protège-langue, et un système d'aspiration intégré via une canule. Il ne nécessite pas de feuille de latex comme la digue."
      },
      {
        questionText: "Les coins inter dentaires translucides :",
        options: [
          "A. Sont utilisés avec une matrice métallique",
          "B. Ont une section triangulaire",
          "C. Sont utilisés lors des restaurations au composite",
          "D. Sont utilisés pour plaquer la matrice au niveau cervico-proximal"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les coins interdentaires ont une section triangulaire pour s'adapter à l'espace inter-proximal et ont pour rôle de plaquer fermement la matrice contre la limite cervicale de la cavité. Les coins translucides sont spécifiquement conçus pour les restaurations au composite, car ils permettent à la lumière de la lampe à photopolymériser de passer à travers."
      },
      {
        questionText: "Le contre angle à bague rouge à une vitesse de rotation de 1000 à 2500 T/mn",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Le code couleur des contre-angles indique leur rapport de transmission. La bague rouge est un multiplicateur de vitesse, atteignant des vitesses de rotation élevées (typiquement de 20 000 à 200 000 tr/min), bien supérieures à 2500 tr/min."
      },
      {
        questionText: "Le wedjet",
        options: [
          "A. Peut remplacer le crampon dans certaines situations",
          "B. Est un cordon de rétraction gingivale",
          "C. Aide à la fixation de la feuille de digue",
          "D. Existe en deux épaisseurs"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le Wedjet est un cordon élastique utilisé pour aider à la fixation de la feuille de digue dans les espaces interdentaires. Dans certaines situations, notamment pour isoler plusieurs dents antérieures, il peut être utilisé à la place des crampons."
      },
      {
        questionText: "La pose de la digue :",
        options: [
          "A. Nécessite l'utilisation de rouleaux de cotons",
          "B. Nécessite une aspiration grâce à une canule montée sur une pompe à salive",
          "C. Permet de mettre en place ce qu'on appelle le champ opératoire",
          "D. Est facilitée par l'utilisation du Wedjet et permet sa fixation au niveau inter-dentaire"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La digue permet de créer un champ opératoire sec et propre. Son utilisation nécessite une aspiration pour évacuer l'eau des instruments et la salive. Des aides comme le Wedjet peuvent faciliter sa fixation dans les espaces interdentaires. L'utilisation de rouleaux de coton devient inutile avec la digue."
      },
      {
        questionText: "La turbine est :",
        options: [
          "A. Un instrument rotatif",
          "B. Utilisée pour le curetage dentinaire",
          "C. Utilisée pour la taille de cavité",
          "D. Un instrument manuel"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La turbine est un instrument rotatif à très haute vitesse, principalement utilisé pour la préparation et la taille des cavités dans l'émail et la dentine. Le curetage dentinaire, qui doit se faire à basse vitesse, est contre-indiqué à la turbine."
      },
      {
        questionText: "Le brunissoir est un instrument utilise fors:",
        options: [
          "A. D'une obturation au composite",
          "B. Des finitions d'un composite",
          "C. D'une obturation à l'amalgame",
          "D. Du pré sculpture d'un amalgame"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le brunissoir est un instrument manuel utilisé exclusivement avec l'amalgame. Il sert à lisser la surface de l'amalgame avant sa prise (pré-sculpture) et à adapter les marges de l'obturation contre les parois de la cavité."
      },
      {
        questionText: "La digue n'est pas:",
        options: [
          "A. Un moyen de coffrage",
          "B. Un moyen d'isolation",
          "C. Un champ opératoire",
          "D. Un moyen de finition du matériau de restauration"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La digue est un moyen d'isolation qui permet de créer un champ opératoire. Elle n'est ni un moyen de coffrage (qui sert à remplacer une paroi manquante lors de l'obturation), ni un instrument de finition."
      },
      {
        questionText: "L'instrumentation spécifique à l'anesthésie est:",
        options: [
          "A. La cupule",
          "B. La carpule",
          "C. Le porte carpule",
          "D. L'aiguille"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le matériel standard pour une anesthésie locale en dentisterie comprend une carpule (la cartouche contenant la solution anesthésique), une seringue (le porte-carpule) et une aiguille stérile."
      },
      {
        questionText: "Le porte amalgame permet :",
        options: [
          "A. De condenser l'amalgame",
          "B. De prélever et placer l'amalgame dans la cavité",
          "C. De prélever le composite",
          "D. De présculpter l'amalgame"
        ],
        correctOptionIndexes: [1],
        explanation: "Le porte-amalgame est un instrument spécifiquement conçu pour prélever l'amalgame fraîchement préparé et le transporter pour le déposer dans la cavité dentaire. La condensation et la sculpture sont réalisées avec d'autres instruments (fouloir, brunissoir)."
      },
      {
        questionText: "Quelle est l'instrumentation spécifique au coffrage?",
        options: [
          "A. Le ruban matrice",
          "B. La matrice",
          "C. Le strip lisse",
          "D. Les coins inter dentaires"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'instrumentation de coffrage a pour but de reconstituer une paroi manquante lors de la restauration. Elle inclut la matrice (métallique ou plastique) ou le strip lisse (pour les dents antérieures), qui est maintenue en place par un porte-matrice et/ou des coins interdentaires."
      },
      {
        questionText: "les coins inter dentaires sont :",
        options: [
          "A. des petits artifices quadrangulaires en bois",
          "B. des petits artifices triangulaires en bais",
          "C. des petits artifices qui permettent de rétablir le point de contact inter dentaire",
          "D. des petits artifices utiliser dans les restaurations de type classe lll"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les coins interdentaires sont de petits dispositifs, généralement en bois ou en plastique et de section triangulaire, insérés dans l'espace interdentaire. Ils servent à adapter la matrice au niveau cervical et à créer une légère séparation entre les dents pour assurer un point de contact de qualité après la restauration (principalement classes II et III)."
      },
      {
        questionText: "parmi les moyens de coffrage nous avons :",
        options: [
          "A. Les moules Odus de Caulk utilisés pour les restaurations des cavités de classe V",
          "B. les strips lisses en polyéthylène utilisés pour les restaurations de classe III et IV de Black",
          "C. le ruban matrice qui est un ruban transparent",
          "D. les matrices cervicales de Hawe utilisées pour les restaurations de classe V (traitement des mylolyse et hypoplasie)"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les strips lisses sont utilisés pour les classes III et IV. Les matrices cervicales de Hawe sont spécifiques aux classes V. Les moules Odus de Caulk sont pour les classes IV (angles). Le ruban matrice classique est métallique et non transparent."
      },
      {
        questionText: "La mise en place de la digue:",
        options: [
          "A. Nous permet de travailler rapidement",
          "B. Nous permet une meilleure visibilité",
          "C. Rend l'accès plus difficile",
          "D. Nous permet d'obtenir un champ opératoire étanche"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les principaux avantages de la digue sont d'offrir un champ opératoire parfaitement sec et étanche (essentiel pour les collages) et d'améliorer la visibilité en écartant les tissus mous (langue, joues). Cependant, sa mise en place prend du temps et peut parfois rendre l'accès à certaines zones plus complexe."
      },
      {
        questionText: "Pour les finitions d'une restauration au composite on utilise :",
        options: [
          "A. Des pointes et/ou des cupules en caoutchouc",
          "B. Des disques et des pointes a finition",
          "C. Des strips lisses pour les faces proximales",
          "D. Des strips abrasives pour les faces proximales"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La finition des composites se fait avec des instruments spécifiques. Pour les faces occlusales et vestibulaires, on utilise des fraises de finition, des disques ou des pointes. Pour les faces proximales, inaccessibles aux instruments rotatifs, on utilise des strips (bandelettes) abrasifs. Les pointes en caoutchouc servent au polissage de l'amalgame."
      },
      {
        questionText: "L'utilisation de la digue nécessite :",
        options: [
          "A. La mise en place de rouleau de cotons",
          "B. L'utilisation d'une aspiration avec une pompe a salive",
          "C. Des feuilles de digues en latex",
          "D. Une anesthésie locale"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La pose d'une digue requiert le matériel de base qui est la feuille de digue (en latex ou autre matériau) et un système d'aspiration pour gérer l'eau et la salive. La pose de la digue rend les rouleaux de coton inutiles. L'anesthésie n'est pas toujours nécessaire pour poser la digue elle-même, mais souvent pour l'acte qui suit."
      }
    ]
  },
  {
    title: "Présentation des cavités de classe II",
    subject: "oce",
    questions: [
      {
        questionText: "La préparation d'une cavité type classe II A distale sur la (16) est possible",
        options: [
          "A. Par la préparation occluso-distale de la (17).",
          "B. Par la préparation occluso-distale de la (15).",
          "C. En absence de la deuxième molaire supérieure gauche.",
          "D. En absence de la deuxième molaire supérieure droite."
        ],
        correctOptionIndexes: [3],
        explanation: "Une cavité de classe IIA est une cavité proximale simple, sans extension occlusale. Sa réalisation n'est possible que si l'on a un accès direct à la face proximale concernée. Pour la face distale de la 16 (1ère molaire sup droite), cela n'est possible que si la dent adjacente distale, la 17 (2ème molaire sup droite), est absente."
      },
      {
        questionText: "La classe II B mésiale est réalisable sur la deuxième prémolaire inferieure gauche en cas de :",
        options: [
          "A. Cavité de carie mésiale avec présence de la (44).",
          "B. Cavité de carie occlusale ayant miné la crête marginale mésiale.",
          "C. Présence d'une cavité de carie occlusale et d'une cavité mésiale.",
          "D. Absence sur l'arcade de la (34)."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A :Faux,La classe IIB ne dépend pas de la présence de la 44, mais de la présence d'une cavité mésiale + occlusale sur la 35. [cite: 179]\nD :faux,L’absence de la 34 (première prémolaire gauche) n’est pas une indication d’une classe IIB sur la 35 . [cite: 179]"
      },
      {
        questionText: "La cavité occlusale pour une classe II B mésiale sur la (17) présente :",
        options: [
          "A. Une paroi pulpaire parallèle à l'axe de la dent.",
          "B. Une paroi mésiale parallèle à la face correspondante.",
          "C. Une paroi vestibulaire parallèle à l'axe de la dent.",
          "D. Une paroi palatine parallèle à la paroi vestibulaire."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : Paroi pulpaire ou fond de la cavité est perpendiculaire à l’axe de la dent. [cite: 515]\nB : Paroi proximale parallèle à la face correspondante,dans ce cas la c’est la paroi distale . [cite: 516]"
      },
      {
        questionText: "Les finitions pour la cavité secondaire d'une classe 11 B consiste à assurer que:",
        options: [
          "A. La paroi pulpaire doit être perpendiculaire à celui de la cavité principale",
          "B. La paroi V et L sont perpendiculaires au fond et parallèles entre elles.",
          "C. La paroi proximale parallèle à l'axe de la dent",
          "D. L'isthme a une largeur supérieure à 2 mm"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A :Faux,Fond ou paroi pulpaire doit être parallèle à celui de la cavité principale. [cite: 932]\nC :Faux,Paroi proximale parallèle à la face correspondante. [cite: 932]"
      },

      {
        questionText: "A. Lors des finitions de la cavité principale d'une préparation type en vue classe Il B il faut s'assurer que :",
        options: [
          "A. Les parois vestibulaire et linguale sont parallèles entre elles en vue proximale.",
          "B. La paroi axiale est perpendiculaire à l'axe de la dent.",
          "C. La paroi cervicale est perpendiculaire à l'axe de la dent.",
          "D. La paroi cervicale est inclinée vers le centre de la dent."
        ],
        correctOptionIndexes: [2],
        explanation: "Dans une cavité de classe II, la paroi cervicale (le fond du 'box' proximal) doit être plate et préparée perpendiculairement au grand axe de la dent pour assurer une bonne assise et une bonne stabilité à la restauration. La paroi axiale, quant à elle, doit être parallèle à l'axe de la dent."
      },
      {
        questionText: "En absence de la deuxième molaire supérieure droite nous ne pouvons pas procéder à une taille de cavité type classe II A distale sur la (16):",
        options: [
          "A. Vrai",
          "B. Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'affirmation est fausse. Au contraire, l'absence de la 17 (deuxième molaire supérieure droite) est la condition qui permet un accès direct à la face distale de la 16, rendant ainsi possible la réalisation d'une cavité de classe IIA simple."
      },
      {
        questionText: "Dans une cavité de type classe II B distale le BOX doit présenter une:",
        options: [
          "A. Paroi cervicale.",
          "B. Paroi pulpaire.",
          "C. Paroi axiale qui constitue le fond de la cavité.",
          "D. Paroi vestibulaire et paroi linguale divergentes entre elles en vue occlusale."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le 'box' proximal (cavité principale) d'une classe II est délimité par une paroi axiale (côté pulpe), une paroi cervicale (fond), et des parois vestibulaire et linguale. En vue occlusale, ces parois V et L doivent être légèrement divergentes vers l'extérieur pour ne pas laisser d'émail non soutenu."
      },
      {
        questionText: "Classe II A mésiale sur la (16) est:",
        options: [
          "A. Réalisée en cas d'absence de la (17)",
          "B. Réalisée en présence d'une cavité de classe II A distale sur la (15)",
          "C. Réalisée si la crête marginale mésiale n'est pas altérée par la carie",
          "D. Réalisée en présence d'une cavité MOD sur la (15)"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Une classe IIA (cavité proximale simple) est indiquée tant que la crête marginale est saine et non minée par la carie. Un accès peut être obtenu si la dent adjacente est absente, ou si une préparation est déjà présente sur la face proximale en regard (ex: une cavité MOD ou distale sur la 15)."
      },
      {
        questionText: "Préparer une classe II distale sur la (27) :",
        options: [
          "A. Englobe le sillon disto-palatin en totalité",
          "B. Réalisée avec conservation du pont d'émail",
          "C. Présente une paroi axiale parallèle à l'axe de la dent",
          "D. Présente une paroi distale légèrement oblique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Sur une molaire supérieure, il est primordial de conserver le pont d'émail s'il est sain. La préparation n'englobe donc pas tout le sillon. La paroi axiale de la cavité doit être parallèle au grand axe de la dent, et la paroi proximale (ici, la paroi mésiale de la cavité secondaire) doit être oblique."
      },
      {
        questionText: "La cavité MOD sur une (36)",
        options: [
          "A. Présente une cavité principale et une cavité secondaire",
          "B. Touche une face proximale et la face occlusale à la fois",
          "C. Présente un isthme de largeur inférieure à 2 mm",
          "D. Présente deux parois axiales et une paroi pulpaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Une cavité MOD (Mésio-Occluso-Distale) est une préparation complexe qui touche les deux faces proximales et la face occlusale. Elle présente donc une paroi pulpaire (fond de la partie occlusale) et deux parois axiales (une côté mésial, une côté distal). L'isthme doit avoir une largeur supérieure à 2mm pour la résistance de l'amalgame."
      },
      {
        questionText: "Les finitions d'une cavité secondaire d'une classe Il consiste à s'assurer que :",
        options: [
          "A. La paroi pulpaire est parallèle à la paroi cervicale.",
          "B. La paroi Vestibulaire parallèle à la paroi linguale.",
          "C. La paroi proximale est oblique.",
          "D. L'isthme de largeur supérieur à 2 mm."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Toutes ces affirmations sont correctes pour la finition de la partie occlusale (cavité secondaire) d'une classe II : le fond (paroi pulpaire) doit être plat et parallèle à la paroi cervicale du box ; les parois V et L doivent être parallèles entre elles ; la paroi proximale (distale ou mésiale) doit être oblique ; et l'isthme doit être suffisamment large (> 2mm)."
      },
      {
        questionText: "La retentions de la cavité principale pour une classe II mésiale est assurée par",
        options: [
          "A. Les parois vestibulaire et linguale dans le sens V-L.",
          "B. La paroi mésiale dans le sens M-",
          "C. La cavité secondaire dans le sens M-D",
          "D. La profondeur de la cavité dans le sens M-"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Dans une classe II, la rétention du box proximal (cavité principale) est assurée dans le sens vestibulo-lingual par les parois V et L. Dans le sens mésio-distal, la rétention est assurée par la liaison avec la cavité secondaire occlusale (forme en queue d'aronde)."
      },
      {
        questionText: "Les finitions occlusale d'une taille de cavité type classe IIB sur une prémolaire consiste à :",
        options: [
          "A. Assurer le parallélisme entre la paroi vestibulaire et palatine",
          "B. Assurer le parallélisme entre la paroi proximale et la face correspondante",
          "C. Réaliser le parallélisme entre la paroi pulpaire et la paroi cervicale",
          "D. Aplanir la paroi pulpaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La finition d'une préparation de classe IIB (occluso-proximale) implique de s'assurer que toutes les parois respectent les critères de préparation : parois V et P parallèles, paroi proximale parallèle à la face, fond pulpaire plat et parallèle au plan cervical, pour assurer la rétention et la stabilité de l'obturation."
      },
      {
        questionText: "La cavité secondaire d'une classe Il distale molaire présente:",
        options: [
          "A. Une paroi axiale perpendiculaire à la paroi cervicale.",
          "B. Une paroi mésiale parallèle à la face correspondante.",
          "C. Une Paroi vestibulaire et linguale divergente en vue occlusale.",
          "D. Une profondeur double à celle de la cavité principale."
        ],
        correctOptionIndexes: [1],
        explanation: "La cavité secondaire (partie occlusale) d'une classe II distale présente une paroi mésiale qui doit être parallèle à la face correspondante (donc oblique). Ses parois V et L doivent être parallèles entre elles. Sa profondeur est généralement inférieure à celle de la cavité principale (box)."
      },
      {
        questionText: "Pour une cavité de classe II B; le box présente :",
        options: [
          "A. Une paroi pulpaire qui constitue le fond de la cavité",
          "B. Une paroi axiale",
          "C. Une paroi vestibulaire et une paroi linguale divergentes entre elles",
          "D. Une paroi vestibulaire et une paroi linguale parallèle entre elles"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le 'box' proximal d'une classe IIB est délimité par une paroi axiale (vers la pulpe), une paroi cervicale (fond), et des parois vestibulaire et linguale. Ces dernières doivent être légèrement divergentes vers la surface pour ne pas laisser d'émail non soutenu. La paroi pulpaire appartient à la cavité occlusale."
      },
      {
        questionText: "La classe II A distale sur une (15) est réalisable lorsque :",
        options: [
          "A. L'accès est direct à la face proximale grâce à l'absence de la (13)",
          "B. L'accès est donné par la préparation occluso-proximale de (13)",
          "C. La carie n'altère pas la crête marginale",
          "D. La (16) est saine"
        ],
        correctOptionIndexes: [2],
        explanation: "Une classe IIA (proximale simple) est une préparation très conservatrice, réalisable uniquement si la carie n'a pas encore détruit la crête marginale. L'accès à la face distale de la 15 (2ème prémolaire) dépend de la présence ou de l'état de la 16 (1ère molaire), et non de la 13 (canine)."
      },
      {
        questionText: "La cavité secondaire d'une classe II B mésiale présente une:",
        options: [
          "A. Paroi pulpaire perpendiculaire à l'axe de la dent.",
          "B. Paroi mésiale parallèle à la face correspondante.\"",
          "C. Paroi V et L sont parallèles entre elles et parallèles à l'axe de la dent.",
          "D. Profondeur double à celle de la cavité principale."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La cavité secondaire (partie occlusale) d'une classe II B mésiale a un fond (paroi pulpaire) perpendiculaire à l'axe de la dent pour la stabilité. Ses parois V et L sont parallèles entre elles et à l'axe de la dent. La paroi concernée est la paroi distale (non mésiale)."
      }
    ]
  },
  {
  /*
======================================================================
الجزء الأول: الامتحانات الفعلية (المستخرجة من ملفاتك)
======================================================================
*/

// --- 1. EMD 2025 - 1 (من ملف ...141257.txt) ---
  title: "EMD 2025 - 1",
  subject: "oce",
  questions: [
    {
      questionText: "La cavité de carie type classe III.C de Black est une :",
      options: [
        "A. Cavité de carie triface complexe.",
        "B. Cavité qui peut être vestibulo-proximo-linguale.",
        "C. Cavité qui peut être mésio-occluso-distale.",
        "D. Cavité qui peut être mésio-palato-distale."
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "La classe III.C est une cavité complexe qui touche au minimum trois faces. Elle peut être soit vestibulo-proximo-linguale, soit mésio-palato-distale. L'option C (mésio-occluso-distale) est incorrecte car elle décrit une classe II (MOD). Il n'est pas recommandé de réunir des cavités de classe III par la face vestibulaire pour des raisons esthétiques."
    },
    {
      questionText: "Lors de la taille des cavités de cl I de black",
      options: [
        "A. La stabilité: est assurée par le fond plat perpendiculaire à la résultante des forces de mastications.",
        "B. La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications",
        "C. La stabilité est assurée par un trottoir réalisé à un niveau supérieur autour du fond sphérique dans le cas où la cavité est profonde,",
        "D. Dans le cas de cavité très étendue en surface, on réalisera un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La stabilité (sustentation) est assurée par un fond plat perpendiculaire à la résultante des forces de mastication. Dans le cas spécifique des cavités profondes, un 'Trottoir de Black' (marche) peut être créé à un niveau supérieur autour du fond pour améliorer cette stabilité. L'élargissement du fond (Option D) sert à la rétention axiale, non à la stabilité."
    },
    {
      questionText: "Le praticien peut procéder directement à l'extension de la cavité à l'aide d'une fine fraise cylindrique, en carbure de tungstène ou diamantée montée sur contre angle bleu lors de la taille de cavités.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'extension de la cavité, qui requiert de la vitesse, se fait à l'aide d'une fraise cylindrique montée sur TURBINE, et non sur contre-angle."
    },
    {
      questionText: "La cavité de carie type classe V de Black",
      options: [
        "A. Est une cavité de carie cervicale qui peut siéger au niveau des dents antérieures et postérieures",
        "B. Est une cavité de carie vestibulaire seulement.",
        "C. Présente un contour de cavité perpendiculaire au collet.",
        "D. Nécessite l'utilisation des moules transparents type Odus afin de restaurer le bombé cervicale."
      ],
      correctOptionIndexes: [0],
      explanation: "La classe V est une cavité située dans le tiers cervical, sur les dents antérieures ou postérieures. Elle est le plus souvent vestibulaire mais peut aussi être linguale/palatine. Son contour est parallèle au collet. Pour la restaurer, on utilise des matrices cervicales de Hawe (pas Odus)."
    },
    {
      questionText: "La cavité de carie type classe IV de Black:",
      options: [
        "A. Est une lésion d'origine carieuse.",
        "B. Est une lésion d'origine traumatique.",
        "C. Est une cavité de carie avec atteinte de l'angle incisif.",
        "D. Nécessite l'utilisation des matrices cervicales afin de rétablir l'angle incisif."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Une lésion de classe IV correspond à une atteinte de l'angle incisif d'une dent antérieure. Son origine peut être soit une fracture traumatique, soit l'évolution d'une carie de classe III. Pour restaurer l'angle, on utilise des conformateurs spécifiques comme les angulations Odus Pella (pas des matrices cervicales)."
    },
    {
      questionText: "La préparation d'une cavité type classe II A distale sur la (16) est possible",
      options: [
        "A. Par la préparation occluso-distale de la (17).",
        "B. Par la préparation occluso-distale de la (15).",
        "C. En absence de la deuxième molaire supérieure gauche.",
        "D. En absence de la deuxième molaire supérieure droite."
      ],
      correctOptionIndexes: [3],
      explanation: "Une classe IIA est une cavité proximale simple. Sa réalisation n'est possible que si l'on a un accès direct à la face proximale. Pour la face distale de la 16 (1ère molaire sup droite), cela n'est possible que si la dent adjacente distale, la 17 (2ème molaire sup droite), est absente."
    },
    {
      questionText: "A. Lors des finitions de la cavité principale d'une préparation type en vue classe Il B il faut s'assurer que :",
      options: [
        "A. Les parois vestibulaire et linguale sont parallèles entre elles en vue proximale.",
        "B. La paroi axiale est perpendiculaire à l'axe de la dent.",
        "C. La paroi cervicale est perpendiculaire à l'axe de la dent.",
        "D. La paroi cervicale est inclinée vers le centre de la dent."
      ],
      correctOptionIndexes: [2],
      explanation: "Dans une cavité de classe II, la paroi cervicale (le fond du 'box' proximal) doit être plate et préparée perpendiculairement au grand axe de la dent pour assurer la stabilité. La paroi axiale (Option B) doit être parallèle à l'axe de la dent."
    },
    {
      questionText: "Dans une cavité de type classe II B distale le BOX doit présenter une:",
      options: [
        "A. Paroi cervicale.",
        "B. Paroi pulpaire.",
        "C. Paroi axiale qui constitue le fond de la cavité.",
        "D. Paroi vestibulaire et paroi linguale divergentes entre elles en vue occlusale."
      ],
      correctOptionIndexes: [0, 3],
      explanation: "Le 'box' proximal (cavité principale) d'une classe II est délimité par une paroi axiale, une paroi cervicale (le fond), et des parois vestibulaire et linguale. En vue occlusale, ces parois V et L doivent être légèrement divergentes vers l'extérieur pour ne pas laisser d'émail non soutenu. La paroi pulpaire (B) appartient à la cavité occlusale."
    },
    {
      questionText: "Lors de la préparation d'une cavité de type cl I de Black la trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'étape de trépanation (création du point d'entrée) se fait classiquement avec une fraise BOULE montée sur turbine. La fraise cylindrique est utilisée ensuite pour l'extension."
    },
    {
      questionText: "L'origine embryologique de l'émail est :",
      options: [
        "A. Mésodermique",
        "B. Endodermique",
        "C. Ectodermique",
        "D. Mésenchymateuse"
      ],
      correctOptionIndexes: [2],
      explanation: "L'émail est un tissu d'origine épithéliale qui dérive du feuillet embryonnaire ectodermique."
    },
    {
      questionText: "Lors de la taille des cavités de cl I de black sur les molaires",
      options: [
        "A. On doit toujours réunir la cavité occlusale avec la cavité au niveau des fossettes V ou L.",
        "B. La cavité de CL I de black composée est une cavité uniquement Occluso-Vestibulaire.",
        "C. On réalisera une cavité composée OV ou OP ceci après appréciation de la résistance mécanique du tissu résiduel entre les deux cavités.",
        "D. Toutes les réponses sont fausses."
      ],
      correctOptionIndexes: [2],
      explanation: "La décision de réunir une cavité occlusale avec une cavité vestibulaire (OV) ou palatine/linguale (OP) n'est pas systématique (A est faux). Elle dépend de la résistance du tissu dentaire qui les sépare. Une cavité composée peut être OV ou OP (B est faux)."
    },
    {
      questionText: "La cavité de carie type classe III.A de Black",
      options: [
        "A. Est une cavité complexe.",
        "B. Est une cavité simple.",
        "C. Est une cavité de carie qui intéresse deux faces de la couronne.",
        "D. Présente un accès direct dans le cas où la dent voisine est absente."
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La classe IIIA est une cavité simple (A est faux) qui n'intéresse qu'une seule face (C est faux). Elle ne peut être préparée par un accès direct que si la dent voisine est absente, sinon l'accès est indirect."
    },
    {
      questionText: "La classe II B mésiale est réalisable sur la deuxième prémolaire inferieure gauche en cas de :",
      options: [
        "A. Cavité de carie mésiale avec présence de la (44).",
        "B. Cavité de carie occlusale ayant miné la crête marginale mésiale.",
        "C. Présence d'une cavité de carie occlusale et d'une cavité mésiale.",
        "D. Absence sur l'arcade de la (34)."
      ],
      correctOptionIndexes: [1, 2],
      explanation: "Une classe IIB (occluso-proximale) est indiquée s'il y a une cavité occlusale ET une cavité proximale (C), ou si une carie occlusale a miné la crête marginale (B), nécessitant son ouverture."
    },
    {
      questionText: "Quelle est la principale fonction des odontoblastes ?",
      options: [
        "A. Produire l'émail",
        "B. Produire la dentine",
        "C. Assurer la vascularisation de la dent",
        "D. Protéger la pulpe"
      ],
      correctOptionIndexes: [1],
      explanation: "La fonction principale des odontoblastes est la dentinogenèse (production de la dentine). La production d'émail (A) est assurée par les améloblastes."
    },
    {
      questionText: "Quels sont les trois sites mentionnés dans la classification de Mount et Hume ?",
      options: [
        "A. Vestibulaire, lingual, occlusal",
        "B. Occlusal, cervical, proximal",
        "C. Antérieur, postérieur, latéral",
        "D. Gingival, coronal, radiculaire"
      ],
      correctOptionIndexes: [1],
      explanation: "La classification de Mount et Hume (Si/Sta) décrit les lésions selon 3 sites : Site 1 (occlusal : puits et fissures), Site 2 (proximal : zones de contact), et Site 3 (cervical)."
    },
    {
      questionText: "Quels sont les rôles fonctionnels assurés par la pulpe dentaire ?",
      options: [
        "A. Assurer la sensibilité, la vascularisation et la régénération de l'émail",
        "B. Produire la dentine, assurer la nutrition et la sensibilité de cette dernière",
        "C. Maintenir les fibres de Sharpey dans leur position",
        "D. Former le cément et réguler les forces masticatoires"
      ],
      correctOptionIndexes: [1],
      explanation: "La pulpe a plusieurs rôles vitaux : elle assure la formation de la dentine (dentinogenèse), sa nutrition via son réseau vasculaire, et sa sensibilité via son réseau nerveux. Elle ne peut pas régénérer l'émail (A est faux)."
    },
    {
      questionText: "Lors de la préparation de cavité de carie type classe III de Black :",
      options: [
        "A. La paroi vestibulaire doit être parallèle à la face vestibulaire.",
        "B. La paroi linguale doit être parallèle à la face linguale.",
        "C. La paroi cervicale doit être parallèle au collet de la dent.",
        "D. Le fond de la cavité doit être perpendiculaire à l'axe de la dent."
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Pour une classe III, les parois V, L, et cervicale doivent être parallèles aux faces correspondantes pour préserver l'émail. Le fond de la cavité (paroi axiale) doit être parallèle à l'axe de la dent (D est faux)."
    },
    {
      questionText: "Quels sont les trois types de dentinogenèse ?",
      options: [
        "A. Primaire, secondaire et tertiaire.",
        "B. Centrale, périphérique et réactionnelle.",
        "C. Manteau, réparatrice et réactionnelle.",
        "D. Minéralisée, non minéralisée et secondaire."
      ],
      correctOptionIndexes: [0],
      explanation: "On distingue trois types de dentine : la dentine primaire (formée pendant le développement), la dentine secondaire (formée lentement tout au long de la vie), et la dentine tertiaire (formée en réponse à une agression)."
    },
    {
      questionText: "La formation de l'émail est :",
      options: [
        "A. Illimitée dans le temps",
        "B. Limitée dans le temps",
        "C. Continue tout au long de la vie",
        "D. Dépendante de la racine"
      ],
      correctOptionIndexes: [1],
      explanation: "La formation de l'émail (amélogenèse) est limitée dans le temps. Elle s'arrête une fois la couronne formée, car les améloblastes disparaissent après l'éruption de la dent."
    },
    {
      questionText: "Quelle partie de l'organe dentaire est directement exposée aux forces de mastication ?",
      options: [
        "A. Le parodonte",
        "B. Le cément",
        "C. L'odonte",
        "D. Les ligaments parodontaux"
      ],
      correctOptionIndexes: [2],
      explanation: "L'odonte (émail, dentine, pulpe) est la partie de la dent qui subit directement les forces de mastication. Le parodonte (A, B, D) est l'ensemble des tissus de soutien."
    },
    {
      // Question corrompue dans le .txt (ID cfb5fbc43e61), texte de la question pris de "Le praticien...", options prises de "Classe III.C...".
      // J'ai pris la question des *options* car elle correspond au titre "Classe I" du .txt.
      questionText: "La cavité de carie type classe III.C de Black est une :",
      options: [
        "A. Cavité de carie triface complexe.",
        "B. Cavité qui peut être vestibulo-proximo-linguale.",
        "C. Cavité qui peut être mésio-occluso-distale.",
        "D. Cavité qui peut être mésio-palato-distale."
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "La classe III.C est une cavité complexe qui touche au minimum trois faces. Elle peut être soit vestibulo-proximo-linguale, soit mésio-palato-distale. L'option C est incorrecte car elle décrit une classe II (MOD). Il n'est pas recommandé de réunir des cavités de classe III par la face vestibulaire pour des raisons esthétiques."
    }
  ]
},
  {

// --- 2. Rattrapage 2025 (من ملف ...014427.txt) ---

  title: "Rattrapage 2025",
  subject: "oce",
  questions: [
    {
      questionText: "La zone translucide:",
      options: [
        "A. Localisée en profondeur vers la jonction amélo-dentinaire",
        "B. Situé entre la zone sombre et la couche de surface",
        "C. Présente une porosité de 1%.",
        "D. Présente une grande perte minérale de 24%."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La zone translucide est la zone la plus profonde, localisée vers la jonction amélo-dentinaire (A). Elle est suivie par la zone sombre, le corps de la lésion, et la couche de surface (B est faux). Sa porosité est de 1% (C). La perte minérale de 24% (D) est caractéristique du corps de la lésion."
    },
    {
      questionText: "L'atrophie pulpaire se caractérise par une réduction du volume de la chambre pulpaire par dépôt permanant de dentine secondaire ou tertiaire",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. L'atrophie pulpaire correspond à une diminution progressive du volume pulpaire (chambre et canaux) due au dépôt continu de dentine secondaire (liée à l'âge) ou tertiaire (en réponse à une agression)."
    },
    {
      questionText: "Suite à une agression de faible intensité, une sécrétion de dentine intra-tubulaire est secrétée par les odontoblastes de remplacement",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. En réponse à une agression de faible intensité, ce sont les odontoblastes primaires (de première génération) qui survivent et sécrètent de la dentine réactionnelle (intra-tubulaire). Les odontoblastes de remplacement (2ème génération) n'interviennent qu'en cas d'agression forte ayant causé la mort des odontoblastes primaires."
    },
    {
      questionText: "Lors de la taille des cavités de cl I de black sur les molaires",
      options: [
        "A. On doit toujours réunir la cavité occlusale avec la cavité au niveau des fossettes Vou L",
        "B. La cavité de CL I de black composée est une cavité uniquement O-V",
        "C. On réalisera une cavité composée OV ou OP ceci après appréciation de la résistance mécanique du tissu résiduel entre les deux cavités",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [2],
      explanation: "La décision de réunir une cavité occlusale avec une cavité vestibulaire (OV) ou palatine/linguale (OP) n'est pas systématique (A est faux). Elle dépend de la résistance du tissu dentaire qui les sépare. Une cavité composée peut être OV ou OP (B est faux)."
    },
    {
      questionText: "Parmi les caractéristiques optiques suivantes, laquelle est directement influencée par les variations de position de l'observateur ?",
      options: [
        "A. Saturation",
        "B. Opalescence",
        "C. Luminosité",
        "D. Fluorescence."
      ],
      correctOptionIndexes: [1],
      explanation: "L'opalescence est la propriété optique qui décrit les variations de couleur perçues sur la dent en fonction de l'angle d'observation et de l'éclairage. La saturation, la luminosité et la fluorescence ne varient pas directement avec la position de l'observateur."
    },
    {
      questionText: "Les dyschromies extrinsèques regroupent:",
      options: [
        "A. Colorations dues aux biofilm, plaque et tartre",
        "B. Colorations dues aux tanins de l'alimentation",
        "C. Colorations tabagiques.",
        "D. Colorations bactériennes"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Toutes ces propositions sont des exemples de dyschromies extrinsèques. Elles correspondent à des dépôts superficiels sur l'émail, qu'ils proviennent du biofilm (plaque, tartre, bactéries chromogènes), de l'alimentation (tanins du thé, café) ou du tabac."
    },
    {
      questionText: "La cavité de carie type classe V de Black est une cavité de carie vestibulaire seulement.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Bien qu'elle soit plus fréquente sur la face vestibulaire, une lésion de classe V peut également se situer sur la face linguale ou palatine."
    },
    {
      questionText: "En absence de la deuxième molaire supérieure droite nous ne pouvons pas procéder à une taille de cavité type classe II A distale sur la (16):",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Au contraire, l'absence de la 17 (deuxième molaire supérieure droite) est la condition qui permet un accès direct à la face distale de la 16, rendant ainsi possible la réalisation d'une cavité de classe IIA simple."
    },
    {
      questionText: "La cavité de carie type classe Ill de Black est une:",
      options: [
        "A. Carie proximale qui peut siéger sur la 12,13 ou 14.",
        "B. Carie mésiale qui peut siéger sur la 42et 31.",
        "C. Carie proximale sur le groupe prémolo-molaire supérieure.",
        "D. Cavité de carie avec atteinte de l'angle incisif."
      ],
      correctOptionIndexes: [1],
      explanation: "La classe III concerne uniquement les caries proximales des incisives et des canines (B est correct). La prémolaire (14) n'est donc pas concernée (A et C sont faux). Si l'angle incisif est atteint (D), la lésion est classée comme une classe IV."
    },
    {
      questionText: "Les phénomènes d'inflammation et la minéralisation reactionnelle sont les principaux moyens de défenses du complexe pulpo-dentinaire.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Le complexe dentino-pulpaire dispose d'un double mécanisme de défense face aux agressions : une réponse inflammatoire au sein de la pulpe et une réponse de minéralisation réactionnelle (formation de dentine tertiaire)."
    },
    {
      questionText: "Lors de la réalisation d'une préparation de cavité de site 2 et en présence de la dent adjacente",
      options: [
        "A. On procède à un traitement préventif non invasif",
        "B. On peut conserver la fossette marginale",
        "C. On réalise une cavité tunnel",
        "D. On doit utiliser un matériau de restauration adhésif"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Pour une lésion de site 2 (proximale) avec une dent adjacente, une approche à minima (soin opératoire) consiste à réaliser une cavité tunnel pour préserver la crête marginale. Ce type de préparation nécessite un matériau de restauration adhésif."
    },
    {
      questionText: "La dentine réactionnelle sclérotique est :",
      options: [
        "A. Produite par les odontoblastes primaires.",
        "B. Secrété après une agression de faible intensité",
        "C. Appelés également dentine péri-tubulaire",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "La dentine réactionnelle sclérotique est une dentine intra-tubulaire (ou péri-tubulaire) sécrétée par les odontoblastes primaires (1ère génération) en réponse à une agression de faible intensité."
    },
    {
      questionText: "L'usure en forme de cuvette sur les surfaces occlusales est une caractéristique clinique retrouvée particulièrement dans une lésion d'abfraction.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'abfraction est une lésion en forme de coin ou d'encoche située au niveau cervical (collet). L'usure en forme de cuvette sur les faces occlusales est plus caractéristique de l'érosion."
    },
    {
      questionText: "La formation de l'émail est :",
      options: [
        "A. Illimitée dans le temps",
        "B. Limitée dans le temps",
        "C. Continue tout au long de la vie",
        "D. Dépendante de la racine"
      ],
      correctOptionIndexes: [1],
      explanation: "La formation de l'émail (amélogenèse) est un processus limité dans le temps. Elle s'arrête une fois la couronne de la dent formée, car les cellules responsables (améloblastes) disparaissent après l'éruption de la dent."
    },
    {
      questionText: "Quelle est la principale caractéristique de l'émail dentaire ?",
      options: [
        "A. Il est constitué principalement de cellules vivantes",
        "B. Il possède une capacité de régénération.",
        "C. l est la structure la plus dure du corps humain",
        "D. Il est vascularisé et innervé."
      ],
      correctOptionIndexes: [2],
      explanation: "L'émail est le tissu le plus dur et le plus minéralisé du corps humain. Il est acellulaire (A), avasculaire, non innervé (D), et par conséquent, il n'a aucune capacité de régénération (B)."
    },
    {
      questionText: "La lésion carieuse initiale se caractérise par",
      options: [
        "A. Amplification des phénomènes de reminéralisation",
        "B. Dislocation des cristaux superficiels d'hydroxyapatite",
        "C. Un élargissement des espaces intra-cristallins",
        "D. Augmentation de la porosité de l'email"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La lésion initiale est caractérisée par une déminéralisation (A est faux). Cela se traduit par une dislocation des cristaux d'hydroxyapatite et un élargissement des espaces inter-cristallins (pas intra-cristallins, C est faux), ce qui augmente la porosité de l'émail (D)."
    },
    {
      questionText: "Une précipitation des ions apportés par des applications topiques (fluor du dentifrice) est possible, au début du processus carieux au niveau d'une surface dentaire.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Au stade initial (lésion poreuse non cavitaire), les ions (calcium, phosphate, fluor) présents dans la salive ou apportés par des applications topiques peuvent précipiter dans ces zones et reminéraliser la lésion."
    },
    {
      questionText: "Lors de la taille des cavités de cl 1 selon Black la stabilité est assurée par :",
      options: [
        "A. Un fond plat perpendiculaire à la bissectrice des forces de mastications",
        "B. Un fond plat perpendiculaire à la résultante des forces de mastications.",
        "C. Un trottoir réalisé à un niveau supérieur autour du fond sphérique dans le cas où de cavité peu profonde",
        "D. Un trottoir réalisé à un niveau inférieur autour du fond sphérique dans le cas où la cavité est profonde"
      ],
      correctOptionIndexes: [1],
      explanation: "La stabilité est assurée par un fond plat perpendiculaire à la RÉSULTANTE des forces de mastication (A est faux). L'aménagement d'un 'Trottoir de Black' est une solution spécifique pour les cavités profondes (pas peu profondes, C et D sont faux)."
    },
    {
      questionText: "La fluorose dentaire :",
      options: [
        "A. Est une coloration de l'émail induite par une ingestion excessive de fluorures pendant l'amélogenèse.",
        "B. Est due à une pigmentation extrinsèque liée au tabagisme.",
        "C. Se manifeste lorsque la dose de fluor est supérieure à 1mg/1/Kg)",
        "D. Est d'origine bactérienne."
      ],
      correctOptionIndexes: [0],
      // Note: L'explication du .txt semble contredire la réponse choisie.
      // L'option A est la définition correcte.
      // L'option C (dose > 1mg/L/Kg) est une valeur seuil, mais A est la définition.
      // Je m'en tiens à la définition (A) comme réponse la plus juste.
      explanation: "La fluorose est une dyschromie intrinsèque (B et D sont faux) qui résulte d'une ingestion excessive de fluorures pendant la période de formation de l'émail (amélogenèse)."
    },
    {
      questionText: "La vasodilatation est un phénomène inflammatoire qui touche principalement les capillaires pulpaires et ne peut pas se propager vers la région péri-apicale.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. La vasodilatation touche les capillaires pulpaires, mais si le phénomène inflammatoire persiste, il peut se propager au-delà de l'apex et atteindre la région péri-apicale."
    }
  ]
},

// --- 3. EMD 2024 - 1 (من ملف ...134418.txt) ---
{
  title: "EMD 2024 - 1",
  subject: "oce",
  questions: [
    {
      questionText: "Le système Isolite :",
      options: [
        "A. Nécessite la pose de feuille en latex",
        "B. Nécessite l'utilisation d'une canule",
        "C. Est un écarteur buccal",
        "D. Est un système d'aspiration"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Le système Isolite est un dispositif multifonctions qui combine un écarteur (C), un protège-langue, et un système d'aspiration intégré (D) via une canule (B). Il ne nécessite pas de feuille de latex (A est faux)."
    },
    {
      questionText: "Les coins inter dentaires translucides :",
      options: [
        "A. Sont utilisés avec une matrice métallique",
        "B. Ont une section triangulaire",
        "C. Sont utilisés lors des restaurations au composite",
        "D. Sont utilisés pour plaquer la matrice au niveau cervico-proximal"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Les coins interdentaires ont une section triangulaire (B) pour s'adapter à l'espace et plaquer la matrice au niveau cervical (D). Les coins translucides sont spécifiquement conçus pour les restaurations au composite (C) car ils laissent passer la lumière."
    },
    {
      questionText: "Lors de l'extension de la cavité on élimine l'émail en surplomb non soutenu par de la dentine saine.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Un principe de la préparation de cavité (selon Black) est d'éliminer tout l'émail non soutenu par de la dentine saine, car il est fragile et risquerait de se fracturer."
    },
    {
      questionText: "En présence de Cavité de classe l’étendue",
      options: [
        "A. les tenons dentinaires sont logés dans des puits taillés dans la dentine durs au niveau de la jonction Email Dentine.",
        "B. Le nombre de PINS utilisés est en fonction du nombre de cuspides à restaurer",
        "C. L'utilisation de tenons dentinaire est une technique de restauration complexe",
        "D. Le coffrage est réalisé à l'aide de strip abrasif"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "Pour les restaurations étendues (Classe I complexe), des tenons dentinaires (PINS) peuvent être utilisés (C). Le nombre de tenons dépend généralement du nombre de cuspides à remplacer (B). Les puits doivent être forés dans la dentine saine, à équidistance de la pulpe et de la JAD (A est faux)."
    },
    {
      questionText: "La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. La stabilité est assurée par un fond plat perpendiculaire à la RÉSULTANTE des forces de mastication."
    },
    {
      questionText: "La stabilité d'une cavité de classe I selon Black est assurée par:",
      options: [
        "A. Un fond plat perpendiculaire à la résultante des forces de mastications.",
        "B. Un trottoir réalisé à un niveau supérieur autour du fond sphérique Dans le cas où la cavité est profonde,",
        "C. Un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire lorsque la cavité très étendue en surface.",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [0, 1],
      explanation: "La stabilité est assurée par un fond plat perpendiculaire aux forces occlusales (A). Pour les cavités profondes, un 'trottoir de Black' (marche) peut être ajouté à un niveau supérieur pour renforcer cette stabilité (B). L'élargissement du fond (C) est lié à la rétention."
    },
    {
      questionText: "Les moules Odus de Caulk",
      options: [
        "A. Sont des moules transparents en acétate de cellulose,",
        "B. Sont utilisés pour les restaurations de classes V.",
        "C. Doivent être perforés au niveau lingual avant leur utilisation",
        "D. Evitent complétement les finitions des composites"
      ],
      correctOptionIndexes: [0],
      explanation: "Les moules Odus de Caulk sont des conformateurs transparents en acétate de cellulose (A) spécifiquement conçus pour les restaurations de classe IV (angles incisifs) (B est faux). Des finitions sont toujours nécessaires (D est faux)."
    },
    {
      // Question 8 corrompue dans le .txt (ID 3f84865eb69b)
      // Texte: "Les moules Odus de Caulk"
      // Options: (prises de "L'extension prophylactique")
      // Je prends la question "Les moules Odus de Caulk" (ID 9fe42f2fadcc)
      questionText: "Les moules Odus de Caulk",
      options: [
        "A. Sont des moules transparents en acétate de cellulose,",
        "B. Sont utilisés pour les restaurations de classes V.",
        "C. Doivent être perforés au niveau lingual avant leur utilisation",
        "D. Evitent complétement les finitions des composites"
      ],
      correctOptionIndexes: [0],
      explanation: "Les moules Odus de Caulk sont des conformateurs transparents en acétate de cellulose (A) spécifiquement conçus pour les restaurations de classe IV (angles incisifs) (B est faux). Des finitions sont toujours nécessaires (D est faux)."
    },
    {
      questionText: "Le contre angle à bague rouge à une vitesse de rotation de 1000 à 2500 T/mn.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Le contre-angle bague rouge est un multiplicateur de vitesse (ex: 20 000 à 200 000 tr/min). Le bague bleue (réducteur) tourne à ces vitesses lentes."
    },
    {
      questionText: "Le wedjet",
      options: [
        "A. Peut remplacer le crampon dans certaines situations",
        "B. Est un cordon de rétraction gingivale",
        "C. Aide à la fixation de la feuille de digue",
        "D. Existe en deux épaisseurs"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Le Wedjet est un cordon élastique utilisé pour aider à la fixation de la feuille de digue (C) dans les espaces interdentaires. Dans certaines situations (ex: dents antérieures), il peut être utilisé à la place des crampons (A)."
    },
    {
      questionText: "Dentine de réparation :",
      options: [
        "A. Apparaît quand les stimuli sont excessifs",
        "B. Appelée aussi dentine secondaire",
        "C. Est plus ou moins sensible aux variations thermiques.",
        "D. Les tubuli de cette dentine sont réguliers."
      ],
      correctOptionIndexes: [0],
      explanation: "La dentine de réparation (ou tertiaire) (B est faux) apparaît en réponse à des stimuli excessifs (A). Elle est moins sensible (C est faux) et ses tubuli sont irréguliers ou absents (D est faux)."
    },
    {
      questionText: "La classe IIIC est :",
      options: [
        "A. Une cavité simple englobant au minimum trois faces coronaire.",
        "B. L'existence de 2 cavités de classe III sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire.",
        "C. Vestibulo-Prox-Linguale ou Mesio-Palato-Distale",
        "D. Toutes les réponses sont justes."
      ],
      correctOptionIndexes: [2],
      explanation: "La classe IIIC est une cavité complexe (A est faux) touchant au moins trois faces (VPL ou MPD). Elle résulte de la réunion de deux lésions de classe III proximales via la face palatine, jamais vestibulaire (B est faux)."
    },
    {
      questionText: "La réponse exsudative dans l'inflammation pulpaire :",
      options: [
        "A. Est une réponse retardée",
        "B. Elle se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur.",
        "C. Elle se caractérise par une production de tissu de granulation élaboré par de nouvelles cellules.",
        "D. Toutes les réponses sont justes."
      ],
      correctOptionIndexes: [1],
      explanation: "La réponse exsudative (phase aiguë) est une réponse immédiate (A est faux). Elle se caractérise par un afflux de liquide (œdème) qui dilue l'agent agresseur (B). La production de tissu de granulation (C) correspond à la phase chronique (proliférative)."
    },
    {
      questionText: "Les atteintes de l'émail:",
      options: [
        "A. Sont des lésions avancées qui évoluent en profondeur.",
        "B. Sont recouvertes d'une couche d'émail apparemment intacte.",
        "C. Sont symptomatiques",
        "D. Présence de rugosité à l'inspection et au sondage."
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les atteintes initiales de l'émail (white spot) sont des lésions de sub-surface, recouvertes par une couche superficielle d'émail qui semble intacte (B). Elles sont asymptomatiques (C est faux) mais peuvent présenter une certaine rugosité au sondage (D)."
    },
    {
      questionText: "La carie à évolution lente. est une :",
      options: [
        "A. Lésion chronique et indolore",
        "B. La dentinogenèse stabilise l'évolution de la carie.",
        "C. Lésion stationnaire",
        "D. Lésion à fond noir"
      ],
      correctOptionIndexes: [0, 1],
      explanation: "La carie à évolution lente est chronique et indolore (A). La pulpe a le temps de réagir par la dentinogenèse (dentine tertiaire), ce qui stabilise et ralentit l'évolution (B). Une lésion stationnaire ou à fond noir (C, D) est une carie arrêtée."
    },
    {
      questionText: "L'atrophie :",
      options: [
        "A. Fait suite à l'inflammation pulpaire.",
        "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
        "C. Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
        "D. Est une altération dégénérative de la pulpe"
      ],
      correctOptionIndexes: [3],
      explanation: "L'atrophie pulpaire est une altération dégénérative (D), souvent liée au vieillissement. Elle se manifeste par une réduction du volume pulpaire due au dépôt de dentine secondaire et/ou tertiaire (B est faux). Ce phénomène est progressif avec l'âge (C est faux)."
    },
    {
      questionText: "La carie à évolution rapide est :",
      options: [
        "A. Lésion douloureuse",
        "B. Une lésion dont la dentinogenèse est accélérée",
        "C. Une lésion qui évolue rapidement vers l'inflammation pulpaire.",
        "D. Lésion qui évolue lentements"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La carie à évolution rapide est souvent douloureuse (A) car la progression est agressive et les mécanismes de défense (dentinogenèse) sont dépassés (B est faux), menant rapidement à une inflammation pulpaire (C)."
    },
    {
      questionText: "Pour une taille de covité sans risque pour le complexe dentino-pulpaire",
      options: [
        "A. Le fraisage se fait d'une façon continue",
        "B. la vitesse de rotation doit être réduite",
        "C. il faut exercer plus de pression",
        "D. Travailler sous spray d'eau"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Pour protéger la pulpe, il est essentiel de travailler sous irrigation (spray d'eau) (D) et à vitesse réduite (B) pour éviter la surchauffe. Un fraisage continu (A) et une pression excessive (C) génèrent une chaleur dangereuse."
    },
    {
      questionText: "La dentine réparatrice",
      options: [
        "A. Est une dentine tertiaire",
        "B. Est une dentine péri ou intra-tubulaire",
        "C. Produite par des odontoblastes de 1ère génération",
        "D. Produite par des odontoblastes de 2ème génération"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "La dentine réparatrice est un type de dentine tertiaire (A). Elle est produite par des odontoblastes de deuxième génération (néo-odontoblastes) (D) après la mort des odontoblastes primaires (C est faux) suite à une agression intense."
    },
    {
      questionText: "Les odontoblastes",
      options: [
        "A. Se trouvent dans la zone centrale de la pulpe",
        "B. Ce sont des cellules dentinogéniques",
        "C. Disparaissent une fois que la dent aura fait son éruption",
        "D. Leurs prolongements cytoplasmiques traversent la dentine dans les tubuli"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les odontoblastes sont les cellules dentinogéniques (B). Elles se situent à la périphérie de la pulpe (A est faux) et persistent toute la vie (C est faux). Leurs prolongements traversent la dentine dans les tubuli (D)."
    },
    {
      // Question 21 corrompue (ID d45a6fb99b86)
      // Texte: "Le contre angle à bague rouge..."
      // Options: (prises de "L'extension prophylactique")
      // Je prends la question "L'extension prophylactique" (ID 02608f90194b)
      questionText: "L'extension prophylactique:",
      options: [
        "A. C'est une extension de la cavité pour prévenir l'apparition de carie",
        "B. Elle se fait vers des zones de prédilection de la lésion carieuse",
        "C. Se fait pour que la cavité devienne rétentive",
        "D. Rend Les limites de l'obturation accessibles au brossage"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "L'extension prophylactique (Black) consiste à étendre la préparation au-delà de la lésion vers des zones à risque (A, B) pour prévenir une récidive et rendre les marges accessibles au brossage (D). La rétention (C) est un objectif distinct."
    },
    {
      // Question 22 corrompue (ID 66ff156dc283)
      // Texte: "Le contre angle à bague rouge..."
      // Options: (prises de "Les odontoblastes")
      // Je prends la question "Les odontoblastes" (ID 6766aced2dda)
      questionText: "Les odontoblastes",
      options: [
        "A. Se trouvent dans la zone centrale de la pulpe",
        "B. Ce sont des cellules dentinogéniques",
        "C. Disparaissent une fois que la dent aura fait son éruption",
        "D. Leurs prolongements cytoplasmiques traversent la dentine dans les tubuli"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les odontoblastes sont les cellules dentinogéniques (B). Elles se situent à la périphérie de la pulpe (A est faux) et persistent toute la vie (C est faux). Leurs prolongements traversent la dentine dans les tubuli (D)."
    }
  ]
},

// --- 4. EMD 2025 - 2 (من ملف ...133143.txt) ---
{
  title: "EMD 2025 - 2",
  subject: "oce",
  questions: [
    {
      questionText: "La zone translucide:",
      options: [
        "A. Est localisée en profondeur vers la jonction améto-dentinaire.",
        "B. Est situé entre la zone sombre et la couche de surface",
        "C. Présente une porosité de 1%",
        "D. Présente une grande perte minérale de 24%"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La zone translucide est la zone la plus profonde, localisée vers la jonction amélo-dentinaire (A). Sa porosité est de 1% (C). La perte minérale de 24% (D) est caractéristique du corps de la lésion."
    },
    {
      questionText: "La carie dentaire est:",
      options: [
        "A. Un processus dynamique",
        "B. Pathologie multifactorielle",
        "C. Une maladie transmissible",
        "D. Une maladie infectieuse pré-éruptive"
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "La carie dentaire est un processus dynamique (A) résultant de l'équilibre déminéralisation/reminéralisation. C'est une pathologie multifactorielle (B) et une maladie infectieuse transmissible (C). Elle est post-éruptive (D est faux)."
    },
    {
      questionText: "La vasodilatation dans les phénomènes inflammatoires :",
      options: [
        "A. Est la dernière étape du processus inflammatoire",
        "B. Provoque une augmentation du volume sanguin",
        "C. Ne peut pas se propager vers la région péri-apicale",
        "D. Principalement dans les capillaires pulpaires"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La vasodilatation est la première étape (A est faux) du processus inflammatoire, se produisant principalement dans les capillaires pulpaires (D) et entraînant une augmentation du flux sanguin (B). Si elle persiste, elle peut se propager à la région péri-apicale (C est faux)."
    },
    {
      questionText: "Les phénomènes d'inflammation et la minéralisation reactionnelle sont les principaux moyens de défenses du complexe pulpo-dentinaire.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Le complexe dentino-pulpaire dispose d'un double mécanisme de défense face aux agressions : une réponse inflammatoire au sein de la pulpe et une réponse de minéralisation réactionnelle (formation de dentine tertiaire)."
    },
    {
      questionText: "L'évaluation du risque carieux individuel:",
      options: [
        "A. N'influence pas la démarche thérapeutique des lésions carieuse",
        "B. Détecte les individus hautement susceptibles de développer des lésions carieuses",
        "C. Est primordiale pour déterminer les mesures de prévention",
        "D. Toutes les réponses sont justes"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "L'évaluation du risque carieux est fondamentale. Elle permet d'identifier les patients à haut risque (B) pour mettre en place des mesures de prévention ciblées (C) et adapter la démarche thérapeutique (A est faux)."
    },
    {
      questionText: "La carie arrêtée est une lésion :",
      options: [
        "A. Dont le signe pathognomonique est un fond dentinaire noir et brillant",
        "B. Dont le signe pathognomonique est un fond dentinaire jaunâtre et mou",
        "C. Évolutive",
        "D. Stationnaire"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "La carie arrêtée est une lésion stationnaire (D) (non évolutive, C est faux). Cliniquement, elle est caractérisée par un fond dentinaire dur, de couleur foncée (noir) et d'aspect brillant (A). Un fond jaunâtre et mou (B) est le signe d'une carie active."
    },
    {
      questionText: "Au sondage, la carie dentinaire révèle une cavité laiteuse avec de la dentine ramollie",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Cliniquement, une carie dentinaire active se présente souvent comme une cavité d'aspect laiteux ou grisâtre, et au sondage, la dentine infectée est typiquement ramollie."
    },
    {
      questionText: "Le phénomène de reminéralisation:",
      options: [
        "A. Est un processus favorisé par la présence d'ions fluor",
        "B. Es liée au pH de l'environnement",
        "C. N'implique pas la présence d'ions calcium",
        "D. Est similaire pour la dentine et le cément"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "La reminéralisation implique la redéposition d'ions calcium et phosphate (C est faux). Elle est favorisée par un pH neutre/basique (B) et la présence d'ions fluor (A). Le processus est similaire pour l'émail, la dentine et le cément (D)."
    },
    {
      questionText: "Une obturation débordante avec un point de contact non reconstitué représente des facteurs favorisant l'apparition de carie.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Les restaurations mal adaptées (débordantes, absence de point de contact) sont des facteurs iatrogènes qui favorisent la rétention de plaque et le tassement alimentaire, augmentant le risque de caries."
    },
    {
      questionText: "La lésion carieuse initiale se caractérise par :",
      options: [
        "A. Une amplification des phénomènes de reminéralisation",
        "B. Une dislocation des cristaux superficiels d'hydroxyapatite",
        "C. Un élargissement des espaces intra-cristallins",
        "D. Une augmentation de la porosité de l'email"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La lésion initiale est caractérisée par une déminéralisation (A est faux). Cela se traduit par une dislocation des cristaux d'hydroxyapatite (B) et un élargissement des espaces inter-cristallins (pas intra-cristallins, C est faux), ce qui augmente la porosité de l'émail (D)."
    },
    {
      questionText: "La salive :",
      options: [
        "A. A un pH normally maintenu à 5",
        "B. N'influence pas le processus carleux",
        "C. Possède un pouvoir tampon",
        "D. Son flux permet le nettoyage mécanique des surfaces dentaires"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "La salive joue un rôle protecteur (B est faux). Son pH normal est proche de la neutralité (6.7-7.3) (A est faux). Elle possède un pouvoir tampon (C) et son flux assure un nettoyage mécanique (D)."
    },
    {
      questionText: "La trilogie de keys :",
      options: [
        "A. Etablie la relation entre les trois principaux facteurs de risques de la carie hôte +mircroflore+acide",
        "B. Etablie la relation entre les trois principaux facteurs de risques de la carie : hote+mircroflore+substrat alimentaire",
        "C. Est modifié par Konig qui rajoute un facteur 'temps'",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La trilogie de Keys identifie trois facteurs : un hôte (dent), une microflore, et un substrat alimentaire (B). L'acide (A) est le produit, pas le facteur initial. König a ensuite ajouté le facteur 'temps' (C)."
    },
    {
      questionText: "Le curetage dentinaire est réalisé avec",
      options: [
        "A. La turbine",
        "B. L'excavateur",
        "C. Le contre-angle",
        "D. La sonde"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "Le curetage de la dentine cariée se fait à basse vitesse. Il peut être réalisé manuellement avec un excavateur (B), ou mécaniquement avec une fraise boule montée sur un contre-angle (C). La turbine (A) est contre-indiquée."
    },
    {
      questionText: "L'obturation d'une cavité à l'amalgame requiert l'utilisation :",
      options: [
        "A. D'un porte carpule métallique",
        "B. D'un fouloir",
        "C. D'une lampe à photo polymériser",
        "D. D'un wedjet2"
      ],
      correctOptionIndexes: [1],
      explanation: "L'obturation à l'amalgame nécessite des instruments pour condenser le matériau, comme le fouloir (B). Les autres instruments servent à l'anesthésie (A), aux composites (C) ou à la pose de la digue (D)."
    },
    {
      questionText: "La zone sombre:",
      options: [
        "A. C'est le caractère le plus constant de la carie de l'email",
        "B. Est observée avec une fréquence de 90% sur les dents permanentes et 85% sur les dents temporaires",
        "C. Est une perte minérale > 10%.",
        "D. Estprésente dans1 cas sur 2 au niveau des dents permanentes et dans 1 cas sur 4 au niveau desdents temporaires."
      ],
      correctOptionIndexes: [0, 1],
      explanation: "La zone sombre est une caractéristique très fréquente (le plus constant) de la carie de l'émail, observée dans 90% des cas sur les dents permanentes et 85% sur les dents temporaires (A, B, D). Sa perte minérale est inférieure à 10% (C est faux)."
    },
    {
      questionText: "La carie de la dentine présente la forme d'un",
      options: [
        "A. Triangle avec une pointe au niveau de l'émail",
        "B. Losange jusqu'à la pulpe",
        "C. Cône avec une base se situant au niveau de la jonction émail dentine.",
        "D. Aucune réponse n'est juste"
      ],
      correctOptionIndexes: [2],
      explanation: "La progression de la carie dans la dentine est plus rapide et suit les tubuli. Elle prend la forme d'un cône dont la base est large au niveau de la jonction amélo-dentinaire et dont le sommet pointe vers la pulpe."
    },
    {
      questionText: "La théorie chimico-parasitaire alcaline de Gottlieb : énonce une protéolyse primaire et une décalcification secondaire :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. La théorie de Gottlieb (protéolyse) suggère que la trame organique de l'émail est attaquée en premier par les enzymes (protéolyse primaire), ce qui facilite ensuite la décalcification secondaire."
    },
    {
      questionText: "Le taux d'élimination des hydrates de carbone de la cavité buccale n'affecte pas le risque de carie",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Le temps de contact des sucres avec les dents est un facteur crucial. Plus les hydrates de carbone sont éliminés rapidement (par la salive, le brossage), moins les bactéries ont de temps pour produire les acides responsables de la carie."
    },
    {
      questionText: "La carie dentaire est :",
      options: [
        "A. Une maladie d'origine polymirobienne, d'étiologie multifactorielle.",
        "B. Considérée comme le deuxième fléau mondial selon l'OMS",
        "C. Un phénomène provoquant la dissolution de tissus dentaires",
        "D. Irréversible dans les lésions initiales"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La carie est une maladie polymicrobienne et multifactorielle (A), qui provoque la dissolution des tissus dentaires (C). Elle est considérée par l'OMS comme le troisième fléau mondial (B est faux). Son processus est réversible au stade initial (D est faux)."
    },
    {
      questionText: "Le contre-angle :",
      options: [
        "A. Doit être monté sur un micromoteur",
        "B. Génère très peu de vibrations",
        "C. Le sens de rotation est réglable",
        "D. Possède une vitesse de rotation supérieure à celle de la turbine"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Le contre-angle se monte sur un micromoteur (A) et sa vitesse est bien inférieure à celle de la turbine (D est faux). Il génère plus de vibrations que la turbine (B est faux), mais son sens de rotation est réglable (C)."
    }
  ]
},

// --- 5. Rattrapage 2024 (من ملف ...133512.txt) ---
{
  title: "Rattrapage 2024",
  subject: "oce",
  questions: [
    {
      questionText: "L'abrasion c'est une usure d'origine alimentaire peut siéger au niveau cervical.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'abrasion est une usure mécanique (ex: brosse à dents), et non d'origine alimentaire. L'usure d'origine alimentaire est généralement l'érosion (chimique)."
    },
    {
      questionText: "Le système Isolite :",
      options: [
        "A. Nécessite la pose de feuille en latex",
        "B. Nécessite l'utilisation d'une canule",
        "C. Est un écarteur buccal",
        "D. Est un système d'aspiration"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Le système Isolite est un dispositif multifonctions qui combine un écarteur (C), un protège-langue, et un système d'aspiration intégré (D) via une canule (B). Il ne nécessite pas de feuille de latex (A est faux)."
    },
    {
      questionText: "Le contre angle à bague rouge à une vitesse de rotation de 1000 à 2500 T/mn",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Le contre-angle bague rouge est un multiplicateur de vitesse (ex: 20 000 à 200 000 tr/min). Le bague bleue (réducteur) tourne à ces vitesses lentes."
    },
    {
      questionText: "Les moules Odus de Caulk :",
      options: [
        "A. Sont des moules transparents en acétate de cellulose,",
        "B. Sont utilisés pour les restaurations de classes V.",
        "C. Doivent être perforés au niveau lingual avant leur utilisation",
        "D. Evitent complétement les finitions des composites"
      ],
      correctOptionIndexes: [0],
      explanation: "Les moules Odus de Caulk sont des conformateurs transparents en acétate de cellulose (A) spécifiquement conçus pour les restaurations de classe IV (angles incisifs) (B est faux). Des finitions sont toujours nécessaires (D est faux)."
    },
    {
      questionText: "Pour une taille de cavité sans risque pour le complexe dentino-pulpaire",
      options: [
        "A. Le fraisage se fait d'une façon continue",
        "B. la vitesse de rotation doit être réduite",
        "C. il faut exercer plus de pression",
        "D. Travailler sous spray d'eau"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Pour protéger la pulpe, il est essentiel de travailler sous irrigation (spray d'eau) (D) et à vitesse réduite (B) pour éviter la surchauffe. Un fraisage continu (A) et une pression excessive (C) génèrent une chaleur dangereuse."
    },
    {
      questionText: "L'érosion est une usure dentaire",
      options: [
        "A. Rencontrée chez les bruxsomane",
        "B. Rencontrée chez les grands consommateurs de soda ou jus de fruits",
        "C. Est une attaque acide extrinsèque seulement",
        "D. peut toucher toutes les faces de la dent"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "L'érosion est une usure chimique due à des acides (B). Elle peut être d'origine extrinsèque ou intrinsèque (C est faux) et peut toucher toutes les faces (D). Le bruxisme (A) provoque de l'attrition."
    },
    {
      questionText: "L'émail:",
      options: [
        "A. Est un tissu acellulaire",
        "B. A la capacité de se régénérer après être détruit",
        "C. A la capacité de se reminéraliser suite à une déminéralisation",
        "D. C'est une barrière semi-perméable grâce à la substance inter-prismatique"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "L'émail est acellulaire (A), il ne peut donc pas se régénérer (B est faux). Cependant, il peut se reminéraliser (C) et agit comme une barrière semi-perméable (D)."
    },
    {
      questionText: "Les lésions des tissus dures de la dent autres qu'infectieuses et traumatiques peuvent être:",
      options: [
        "A. D'origine carieuse",
        "B. D'origine bactériennex",
        "C. Dues à une parafonction",
        "D. D'origine alimentaire"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Ces lésions, dites non carieuses, peuvent avoir plusieurs origines. Les parafonctions (C) (bruxisme) provoquent l'attrition/abfraction. L'alimentation (D) peut provoquer l'érosion (acides). Les causes carieuses/bactériennes (A, B) sont infectieuses."
    },
    {
      questionText: "Lors d'une obturation avec un matériau adhésif tel que le composite, la cavité est taillée :",
      options: [
        "A. En respectant les principes mécaniques de black",
        "B. Nous réalisons une cavité rétentive à fond plat",
        "C. Nous réalisons une extension prophylactique vers les zones accessibles au brossage",
        "D. En respectant le principe d'économie tissulaire"
      ],
      correctOptionIndexes: [3],
      explanation: "Les matériaux adhésifs (composite) ne nécessitent pas de rétention mécanique (A, B, C sont faux). La préparation se limite à l'éviction du tissu carié, en respectant le principe d'économie tissulaire (D)."
    },
    {
      questionText: "La réponse exsudative dans l'inflammation pulpaire se caractérise par un afflux de liquide exsudatif qui va détoxiquer l'agent agresseur.",
      options: [
        "A. A Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. La phase exsudative (phase aiguë) est une réponse immédiate caractérisée par la formation d'un œdème (afflux de liquide) qui aide à diluer et neutraliser l'agent agresseur."
    },
    {
      questionText: "Dentine de réparation:",
      options: [
        "A. Apparaît quand les stimuli sont excessifs",
        "B. Appelée aussi dentine secondaire",
        "C. Est plus ou moins sensible aux variations thermiques.",
        "D. Les tubuli de cette dentine sont réguliers."
      ],
      correctOptionIndexes: [0],
      explanation: "La dentine de réparation (ou tertiaire) (B est faux) apparaît en réponse à des stimuli excessifs (A). Elle est moins sensible (C est faux) et ses tubuli sont irréguliers ou absents (D est faux)."
    },
    {
      // Question 12 corrompue (ID 1182f0b7a35d)
      // Texte: "Dentine de réparation:"
      // Options: (prises de "Les atteintes de l'émail:")
      // Je prends la question "Dentine de réparation:" (ID 751608ce0fb7)
      questionText: "Dentine de réparation:",
      options: [
        "A. Apparaît quand les stimuli sont excessifs",
        "B. Appelée aussi dentine secondaire",
        "C. Est plus ou moins sensible aux variations thermiques.",
        "D. Les tubuli de cette dentine sont réguliers."
      ],
      correctOptionIndexes: [0],
      explanation: "La dentine de réparation (ou tertiaire) (B est faux) apparaît en réponse à des stimuli excessifs (A). Elle est moins sensible (C est faux) et ses tubuli sont irréguliers ou absents (D est faux)."
    },
    {
      questionText: "La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. La stabilité est assurée par un fond plat perpendiculaire à la RÉSULTANTE des forces de mastication."
    },
    {
      // Question 14 corrompue (ID 1b2adfdd362d)
      // Texte: "La stabilité: est assurée par..."
      // Options: (prises de "Les atteintes de l'émail:")
      // Je prends la question "La stabilité: est assurée par..." (ID f9c2e5044de3)
      questionText: "La stabilité: est assurée par le fond plat perpendiculaire à la bissectrice des forces de mastications",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. La stabilité est assurée par un fond plat perpendiculaire à la RÉSULTANTE des forces de mastication."
    },
    {
      // Question 15 corrompue (ID 652c1eeab54c)
      // Texte: "La stabilité: est assurée par..."
      // Options: (prises de "La dentine")
      // Je prends la question "La dentine" (ID 7063a88dbef8)
      questionText: "La dentine:",
      options: [
        "A. Constitue la majeure partie de la dent",
        "B. Tissu minéralisé d'origine ectodermique",
        "C. Traversée par des canalicules sur toute son épaisseur de la pulpe jusqu'à la jonction amélo-dentinaire",
        "D. Ne peut se régénérer suite à une agression"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La dentine forme la masse principale de la dent (A). Elle est d'origine mésenchymateuse (B est faux) et est parcourue par des tubuli (C). Elle possède une capacité de régénération (dentine tertiaire) (D est faux)."
    },
    {
      questionText: "La pulpe dentaire",
      options: [
        "A. Tissu minéralisé occupe la partie centrale de la dent",
        "B. Responsable de l'amélogénèse",
        "C. Responsable de la dentinogénèse",
        "D. Elle se protège en élaborant de la dentine tertiaire"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "La pulpe est un tissu conjonctif mou (A est faux). Elle est responsable de la dentinogenèse (C) (pas l'amélogenèse, B). Elle se défend en élaborant de la dentine tertiaire (D)."
    },
    {
      questionText: "L'extension prophylactique:",
      options: [
        "A. C'est une extension de la cavité pour prévenir l'apparition de carie",
        "B. Elle se fait vers des zones de prédilection de la lésion carieuse",
        "C. Se fait pour que la cavité devienne rétentive",
        "D. Rend Les limites de l'obturation accessibles au brossage"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "L'extension prophylactique (Black) consiste à étendre la préparation au-delà de la lésion vers des zones à risque (A, B) pour prévenir une récidive et rendre les marges accessibles au brossage (D). La rétention (C) est un objectif distinct."
    },
    {
      questionText: "Dans le cas de cavité très étendue en surface, on réalisera un élargissement du fond pour assurer la stabilité tout en respectant l'intégrité pulpaire.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Dans le cas d'une cavité très étendue, l'élargissement du fond a pour but d'améliorer la RÉTENTION axiale, et non la stabilité."
    },
    {
      questionText: "Au cours de la dentinogénèse :",
      options: [
        "A. La dentine primaire se forme jusqu'à édification complète de la racine",
        "B. La dentine primaire se forme durant toute la vie de la dent",
        "C. La dentine secondaire se forme après édification complète de la racine",
        "D. La dentine secondaire se forme durant toute la vie de la dent"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "La dentine primaire se forme jusqu'à l'édification complète de la racine (A) (B est faux). Ensuite, la dentine secondaire se forme (C) lentement tout au long de la vie de la dent (D)."
    },
    {
      questionText: "La carie à évolution rapide est :",
      options: [
        "A. Lésion douloureuse",
        "B. Une lésion dont la dentinogenèse est accélérée",
        "C. Une lésion qui évolue rapidement vers l'inflammation pulpaire.",
        "D. Lésion qui évolue lentements"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La carie à évolution rapide est souvent douloureuse (A) car la progression est agressive et les mécanismes de défense (dentinogenèse) sont dépassés (B est faux), menant rapidement à une inflammation pulpaire (C)."
    },
    {
      questionText: "La carie à évolution lente est une :",
      options: [
        "A. Lésion chronique et indolore",
        "B. La dentinogenèse stabilise l'évolution de la carie.",
        "C. Lésion stationnaire",
        "D. Lésion à fond noir"
      ],
      correctOptionIndexes: [0, 1],
      explanation: "La carie à évolution lente est chronique et indolore (A). La pulpe a le temps de réagir par la dentinogenèse (dentine tertiaire), ce qui stabilise et ralentit l'évolution (B). Une lésion stationnaire ou à fond noir (C, D) est une carie arrêtée."
    }
  ]
},

// --- 6. EMD 2025 - 3 (من ملف ...133143.txt) ---
  {
  title: "EMD 2025 - 3",
  subject: "oce",
  questions: [
    {
      questionText: "Les soins non invasifs",
      options: [
        "A. Sont réalisés dans le but de prévenir la carle dentaire",
        "B. Sont indiqués dans le stade 0 et 1",
        "C. Sont indiqués dans le stade 0",
        "D. Utilisent des fraises de petit diamètre"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Les soins non invasifs visent à prévenir la carie (A) et sont indiqués au stade 0 (lésion initiale sans cavitation) (C). Ils n'impliquent pas l'utilisation de fraises (D), qui sont réservés aux soins invasifs."
    },
    {
      questionText: "Quelle est l'étiologie principale de l'érosion dentaire ?",
      options: [
        "A. Stress mécanique occlusal",
        "B. Frottement d'objets étrangers",
        "C. Acides d'origine endogène ou exogène",
        "D. Mouvements para fonctionnels nocturnes"
      ],
      correctOptionIndexes: [2],
      explanation: "L'érosion est une usure chimique (C) causée par des acides non bactériens (endogène : reflux gastrique ; exogène : alimentation). Les options A, B, D décrivent des usures mécaniques (abfraction, abrasion, attrition)."
    },
    {
      questionText: "La Mylolyse, due à un brossage excessif, est typiquement localisée :",
      options: [
        "A. Sur les faces occlusales des molaires",
        "B. Sur les faces palatines des incisives supérieures",
        "C. À la jonction cémento-dentinaire",
        "D. À l'apex des racines"
      ],
      correctOptionIndexes: [2],
      explanation: "Le terme 'mylolyse' est un ancien synonyme pour les lésions cervicales d'usure. Qu'il s'agisse d'abrasion (brossage excessif) ou d'abfraction, ces lésions sont typiquement localisées au niveau du collet de la dent (jonction cémento-dentinaire)."
    },
    {
      questionText: "Le principe de bio-intégration est basé sur l'évolution des systèmes adhésifs et permet l'obtention de résultats de deux ordres mécaniques et biologiques :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Elle décrit le principe d'ADHÉSION. Le principe de BIO-INTÉGRATION concerne l'association de matériaux bioactifs et de techniques non agressives pour la biocompatibilité."
    },
    {
      questionText: "Les dyschromies extrinsèques",
      options: [
        "A. Sont Congénitales",
        "B. Correspondent à des colorations superficielles",
        "C. Induites par des facteurs externes et internes",
        "D. N'altèrent pas la composition chimique de la dent"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les dyschromies extrinsèques sont des colorations acquises (A est faux) et superficielles (B), induites uniquement par des facteurs externes (C est faux). Elles n'altèrent pas la structure interne de la dent (D)."
    },
    {
      questionText: "Quelle est la différence principale entre l'abrasion et l'attrition ?",
      options: [
        "A. L'abrasion est chimique, l'attrition est mécanique",
        "B. L'abrasion implique un agent extérieur, l'attrition est due au contact dent/dent",
        "C. L'abrasion affecte l'émail, l'attrition la dentine",
        "D. L'abrasion est réversible, l'attrition non"
      ],
      correctOptionIndexes: [1],
      explanation: "L'attrition et l'abrasion sont toutes deux des usures mécaniques (A est faux). L'attrition est causée par le contact dent/dent (B). L'abrasion est causée par un corps étranger (ex: brosse à dents) (B)."
    },
    {
      questionText: "Dans la cavité tunnel l'accès se fait au niveau de la fossette marginale en direction de la face palatine avec une angulation de 45° :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'accès se fait bien au niveau de la fossette marginale avec une angulation de 45°, mais en direction de la zone proximale cariée (et non palatine), afin de préserver la crête marginale."
    },
    {
      questionText: "Les cavités modernes pour amalgame :",
      options: [
        "A. Sont plus économes par rapport aux préparations selon les principes de Black",
        "B. Sont moins mutilantes que les préparations pour restaurations adhésives",
        "C. Sont indiquées pour les sites 1 et 3 sur dent postérieures à partir du stade 2",
        "D. Respectent les principes d'économie tissulaire"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "Les cavités modernes pour amalgame sont plus économes que les préparations de Black (A, D). Cependant, elles restent plus mutilantes que les préparations adhésives (B est faux). Elles sont indiquées pour les sites 1 (occlusal) et 2 (proximal) (C est faux)."
    },
    {
      questionText: "L'hypo minéralisation des molaires et des incisives (MIH):",
      options: [
        "A. Est un défaut quantitatif de l'émail,",
        "B. Est un changement dans la translucidité de la dentine.",
        "C. II peut affecter une à quatre premières molaires permanentes, associé ou non à l'atteinte des incisives permanentes.",
        "D. Est une dyschromie intrinsèque"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Le MIH est une dyschromie intrinsèque (D) qui est un défaut qualitatif (pas quantitatif, A est faux) de l'émail (pas la dentine, B est faux). Il touche typiquement de une à quatre premières molaires permanentes, avec ou sans atteinte des incisives (C)."
    },
    {
      questionText: "La polychromie de la dent résulte :",
      options: [
        "A. De la différence d'épaisseur de ses tissus",
        "B. Homogénéité des tissus.",
        "C. L'émail permet la réflexion de la lumière, son absorption, et sa transmission à la dentine sous-jacente.",
        "D. La dentine permet à la lumière sa réflexion et son absorption"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "La couleur d'une dent n'est pas uniforme (polychromie) en raison de l'hétérogénéité (B est faux) et de la différence d'épaisseur de ses tissus (A). L'émail (translucide) transmet la lumière (C), tandis que la dentine (opaque) l'absorbe et la réfléchit (D), déterminant la teinte."
    },
    {
      questionText: "Selon Charland, pour qu'il y ait carie, il faut",
      options: [
        "A. Des aliments cariogéniques.",
        "B. Une plaque bactérienne accumulée sur les surfaces dentaires.",
        "C. La formation d'acides.",
        "D. Reminéralisation permanente des lésions déminéralisées"
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "La carie nécessite la conjonction de plusieurs facteurs : la présence d'une plaque bactérienne (B), des aliments cariogéniques (A) que les bactéries métabolisent, et la formation d'acides (C) qui en résulte. La reminéralisation (D) est le processus inverse."
    },
    {
      questionText: "Parmi les aides optiques suivantes:",
      options: [
        "A. Les loupes binoculaires font parties de la catégorie des moyens directes.",
        "B. opératoires en font partie avec un grossissement jusqu'à 20",
        "C. Les Les caméra microscopes intra-orales conventionnelles peuvent servir d'aide au diagnostic par leur optimisation de l'éclairage et leur agrandissement de l'image.",
        "D. Les miroirs demeurent un moyen d'aide direct incontournable."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Les loupes binoculaires (A) et le microscope opératoire (grossissement jusqu'à x60, B est faux) sont des aides optiques directes. Les caméras intra-orales (C) sont des aides indirectes utiles. Le miroir (D) n'est pas considéré comme une 'aide optique' (grossissement)."
    },
    {
      questionText: "La couleur naturelle d'une dent:",
      options: [
        "A. Est exclusivement déterminée par l'émail.",
        "B. Dépend de la diffusion et de l'absorption de la lumière par la dentine et l'émail.",
        "C. Variable avec l'âge",
        "D. Résulte uniquement de la réfraction lumineuse."
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La couleur d'une dent dépend de l'interaction (diffusion, absorption) de la lumière avec l'émail et la dentine (B). L'émail translucide laisse transparaître la couleur de la dentine (A est faux). Cette couleur évolue avec l'âge (C)."
    },
    {
      questionText: "Sur une radiographie:",
      options: [
        "A. L'émail est radio opaque.",
        "B. La dentine est radio opaque.",
        "C. Une perte de la densité minérale se manifeste par une image radio-claire.",
        "D. Le Bite-wing permet la détection précoce des lésions proximales"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Sur un cliché radiographique, les tissus minéralisés (émail et dentine) apparaissent radio-opaques (A, B). Une lésion carieuse (perte de densité) se manifeste par une image radio-claire (C). Le Bite-wing (rétro-coronaire) est la technique de choix pour les lésions proximales (D)."
    },
    {
      questionText: "La classification de Mount et Hume:",
      options: [
        "A. A comme caractéristique principale le diagnostic des lésions carieuse",
        "B. Est une classification par site et par taille des cavités",
        "C. Est une classification à but thérapeutique",
        "D. Comprend trois sites et cinq tailles"
      ],
      correctOptionIndexes: [2],
      // Note: Le .txt a sélectionné B, mais l'explication (et la logique) pointe vers C.
      // L'explication du .txt dit: "A :Faux, c’est une classification à but thérapeutique..."
      // Je suis l'instruction de l'utilisateur et je me base sur l'explication.
      explanation: "La classification de Mount et Hume (Si/Sta) est une classification à but thérapeutique (C). Elle guide le choix du traitement en fonction de la localisation (3 sites) et de l'étendue (5 stades, de 0 à 4), et non en fonction du matériau."
    },
    {
      questionText: "Le curetage chimio-mécanique:",
      options: [
        "A. Est réalisé avec le système Endosolv",
        "B. Le gel utilisé permet de dissoudre de manière sélective la dentine cariée",
        "C. Ne présente pas le risque de laisser du tissu carié dans les cavités à ouverture limité",
        "D. Nécessite un temps d'application long."
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Le curetage chimio-mécanique (ex: Carisolv®, A est faux) utilise un gel qui dissout sélectivement la dentine infectée (B). Ses inconvénients sont un temps d'application long (D) et le risque de laisser du tissu carié dans les zones difficiles d'accès (C est faux)."
    },
    {
      questionText: "La sono-abrasion :",
      options: [
        "A. Nécessite une Irrigation constante",
        "B. Permet une éviction carieuse contrôlée",
        "C. Permet de réaliser des cavités à minima sans préservation de la crête marginale (cavité tunnel)",
        "D. Est d'un grand intérêt pour le traitement des lésions proximales débutantes"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "La sono-abrasion (ultrasons) nécessite une irrigation constante (A). Elle est intéressante pour les lésions proximales débutantes (D) car elle permet des micro-cavités (cavité tunnel) en préservant la crête marginale (C est faux). Le contrôle de l'éviction peut être délicat (B est faux)."
    },
    {
      questionText: "Quelle théorie explique l'abfraction selon GRIPPO (1991) ?",
      options: [
        "A. Une dissolution de l'émail par les acides salivaires",
        "B. Une usure due à un frottement alimentaire",
        "C. Une contrainte cyclique d'origine occlusale",
        "D. Une friction entre deux dents antagonistes"
      ],
      correctOptionIndexes: [2],
      explanation: "La théorie de l'abfraction (Grippo) postule que des forces occlusales excessives créent des contraintes de flexion (C) au niveau du collet, provoquant des microfractures. (A) est l'érosion, (D) est l'attrition."
    },
    {
      questionText: "Quelle caractéristique clinique est retrouvée particulièrement dans une lésion d'abfraction ?",
      options: [
        "A. Une surface rugueuse avec des bords irréguliers",
        "B. Une usure en forme de cuvette sur les surfaces occlusales",
        "C. Une perte de substance en coin au niveau cervical causée par le stress occlusal",
        "D. Une coloration brune avec dépôt de plaque bactérienne"
      ],
      correctOptionIndexes: [2],
      explanation: "La lésion d'abfraction est classiquement décrite comme une perte de substance en forme de coin (V) au niveau cervical, résultant de contraintes occlusales."
    },
    {
      questionText: "Le principe d'économie tissulaire :",
      options: [
        "A. Suppose la conservation d'un maximum de structures saines",
        "B. Garantie de longévité de la dent naturelle restaurée",
        "C. La meilleure façon d'obéir à ce principe passe par le choix du matériau",
        "D. Privilégier un accès aux lésions carieuses cavitaires sans destruction de l'émail"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "Le principe d'économie tissulaire vise à conserver au maximum les structures saines (A) en privilégiant un accès conservateur (D). Cette préservation est la meilleure garantie pour la longévité de la dent restaurée (B)."
    }
  ]
},

/*
======================================================================
الجزء الثاني: الامتحانات التجريبية (التي تم إنشاؤها)
======================================================================
*/

// --- 7. EMD 1 essai Num1 ---
{
  title: "EMD 1 essai Num1",
  subject: "oce",
  questions: [
    {
      questionText: "Le Trottoir de Black est réalisé :",
      options: [
        "A. Dans le cas où la cavité de classe ll de Black profonde,",
        "B. Autour du fond oblique à un niveau supérieur",
        "C. Pour assurer la rétention",
        "D. Pour assurer la stabilité"
      ],
      correctOptionIndexes: [3],
      explanation: "Le 'Trottoir de Black' est une modification de la préparation pour les cavités de classe I profondes (A est faux). C'est une marche créée autour du fond sphérique (B est faux) pour améliorer la STABILITÉ (D) de la restauration."
    },
    {
      questionText: "La cavité secondaire d'une cavité de préparation de classe III:",
      options: [
        "A. Est située sur la face palatine",
        "B. A une forme d'un triangle",
        "C. A une forme d'une queue d'aronde",
        "D. Son fond est perpendiculaire"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La cavité secondaire, créée pour la rétention lors d'un accès indirect, est située sur la face palatine (A) et a une forme caractéristique en queue d'aronde (C)."
    },
    {
      questionText: "La classe II A distale sur une (15) est réalisable lorsque :",
      options: [
        "A. L'accès est direct à la face proximale grâce à l'absence de la (13)",
        "B. L'accès est donné par la préparation occluso-proximale de (13)",
        "C. La carie n'altère pas la crête marginale",
        "D. La (16) est saine"
      ],
      correctOptionIndexes: [2],
      explanation: "Une classe IIA (proximale simple) est une préparation conservatrice, réalisable uniquement si la carie n'a pas encore détruit la crête marginale (C). L'accès à la face distale de la 15 dépend de la 16 (et non de la 13)."
    },
    {
      questionText: "Le brunissoir est un instrument utilise fors:",
      options: [
        "A. D'une obturation au composite",
        "B. Des finitions d'un composite",
        "C. D'une obturation à l'amalgame",
        "D. Du pré sculpture d'un amalgame"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Le brunissoir est un instrument manuel utilisé exclusivement avec l'amalgame (C). Il sert à lisser la surface (pré-sculpture) (D) et à adapter les marges de l'obturation."
    },
    {
      questionText: "La préparation des cavités classe IV:",
      options: [
        "A. Est une restauration simple bifaces,",
        "B. Est une restauration d'une perte de substance d'origine carieuse née sur une face proximale, étendue en direction de l'angle pouvant occasionner sa fracture.",
        "C. La rétention de la restauration est difficile à avoir en raison des agressions occlusales et des habitudes des patients",
        "D. Pour augmenter la rétention, le collage et les tenons dentinaires sont utilisés simultanément."
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La classe IV peut résulter de l'extension d'une carie proximale (Classe III) qui finit par fracturer l'angle (B). La restauration de cet angle est difficile car il est soumis à de fortes contraintes (C). L'usage de tenons (D) n'est pas systématique."
    },
    {
      questionText: "Pour les cl I sur molaire :",
      options: [
        "A. La rétention VL est assurée par Les parois elles-mêmes et taillées parallèlement aux faces correspondantes",
        "B. La rétention MD est assurée par Les parois elles-mêmes taillées parallèlement aux faces correspondantes",
        "C. La rétention M D est assurée par Les parois elles-mêmes taillées parallèlement à l'axe de la dent",
        "D. La rétention VL est assurée par les parois V et L épaisses et taillées parallèlement à l'axe de la dent"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Pour une classe I: Rétention VL (Vestibulo-Linguale) : assurée par les parois V et L parallèles à l'axe de la dent (D). Rétention MD (Mésio-Distale) : assurée par les parois M et D parallèles aux faces correspondantes (B)."
    },
    {
      questionText: "Les finitions occlusale d'une taille de cavité type classe IIB sur une prémolaire consiste à :",
      options: [
        "A. Assurer le parallélisme entre la paroi vestibulaire et palatine",
        "B. Assurer le parallélisme entre la paroi proximale et la face correspondante",
        "C. Réaliser le parallélisme entre la paroi pulpaire et la paroi cervicale",
        "D. Aplanir la paroi pulpaire"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Toutes ces étapes sont cruciales pour la finition d'une préparation de classe IIB (occluso-proximale) afin d'assurer la rétention et la stabilité de l'obturation."
    },
    {
      questionText: "La turbine est :",
      options: [
        "A. Un instrument rotatif",
        "B. Utilisée pour le curetage dentinaire",
        "C. Utilisée pour la taille de cavité",
        "D. Un instrument manuel"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La turbine est un instrument rotatif (A, D est faux) à très haute vitesse, utilisé pour la taille des cavités (C). Le curetage dentinaire (B) doit se faire à basse vitesse (contre-angle)."
    },
    {
      questionText: "L'extension prophylactique:",
      options: [
        "A. C'est une extension de la cavité pour prévenir l'apparition de carie",
        "B. Elle se fait vers des zones de prédilection de la lésion carieuse",
        "C. Se fait pour que la cavité devienne rétentive",
        "D. Rend Les limites de l'obturation accessibles au brossage"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "L'extension prophylactique (Black) consiste à étendre la préparation au-delà de la lésion vers des zones à risque (A, B) pour prévenir une récidive et rendre les marges accessibles au brossage (D). La rétention (C) est un objectif distinct."
    },
    {
      questionText: "La classe III de Black: est une lésion carieuse qui siège sur la face proximale des Incisives et canines avec destruction l’angle incisif.",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "La définition est fausse. Une lésion de classe III affecte les faces proximales des incisives et des canines SANS atteinte de l'angle incisif. Si l'angle est détruit, il s'agit d'une classe IV."
    },
    {
      questionText: "parmi les moyens de coffrage nous avons :",
      options: [
        "A. Les moules Odus de Caulk utilisés pour les restaurations des cavités de classe V",
        "B. les strips lisses en polyéthylène utilisés pour les restaurations de classe III et IV de Black",
        "C. le ruban matrice qui est un ruban transparent",
        "D. les matrices cervicales de Hawe utilisées pour les restaurations de classe V (traitement des mylolyse et hypoplasie)"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les strips lisses (B) sont utilisés pour les classes III et IV. Les matrices cervicales de Hawe (D) sont spécifiques aux classes V. Les moules Odus (A) sont pour les classes IV. Le ruban matrice (C) est métallique."
    },
    {
      questionText: "Qu'est ce qui cause une élévation de température lors de la taille de la cavité :",
      options: [
        "A. Le fraisage continu et à grande vitesse",
        "B. Le système d'irrigation des instruments rotatifs",
        "C. La pression exercée lors du fraisage",
        "D. Des fraises usées"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "La surchauffe pulpaire est causée par un fraisage continu à grande vitesse (A), une pression excessive (C), et des fraises usées (D) qui augmentent la friction. Le système d'irrigation (B) est conçu pour prévenir cela."
    },
    {
      questionText: "La cavité MOD sur une (36)",
      options: [
        "A. Présente une cavité principale et une cavité secondaire",
        "B. Touche une face proximale et la face occlusale à la fois",
        "C. Présente un isthme de largeur inférieure à 2 mm",
        "D. Présente deux parois axiales et une paroi pulpaire"
      ],
      correctOptionIndexes: [3],
      explanation: "Une cavité MOD (Mésio-Occluso-Distale) touche deux faces proximales et la face occlusale (B est faux). Elle présente donc deux cavités principales (proximales) et une secondaire (occlusale) (A est faux), résultant en deux parois axiales et une paroi pulpaire (D)."
    },
    {
      questionText: "La retentions de la cavité principale pour une classe II mésiale est assurée par",
      options: [
        "A. Les parois vestibulaire et linguale dans le sens V-L.",
        "B. La paroi mésiale dans le sens M-",
        "C. La cavité secondaire dans le sens M-D",
        "D. La profondeur de la cavité dans le sens M-"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Dans une classe II, la rétention du box proximal (cavité principale) est assurée dans le sens V-L par les parois V et L (A). Dans le sens M-D, la rétention est assurée par la liaison avec la cavité secondaire occlusale (queue d'aronde) (C)."
    },
    {
      questionText: "L'instrumentation spécifique à l'anesthésie est:",
      options: [
        "A. La cupule",
        "B. La carpule",
        "C. Le porte carpule",
        "D. L'aiguille"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Le matériel standard pour une anesthésie locale comprend une carpule (la cartouche d'anesthésique) (B), une seringue (le porte-carpule) (C) et une aiguille (D)."
    },
    {
      questionText: "Les préparations des cavités selon BLACK:",
      options: [
        "A. Se limitent uniquement aux lésions carieuses au niveau des sillons, puits et fissures",
        "B. Englobent systématiquement tous les réseaux des silions, puits et fissures,",
        "C. les angles cavo-superficiels ne sont pas accessibles au brossage,",
        "D. l'extension prophylactique est réalisée aux dépens des tissus sains."
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Le concept de Black (extension pour la prévention) préconisait d'englober systématiquement tous les puits et sillons à risque (B), même sains, réalisant ainsi une extension aux dépens de tissus sains (D) pour que les marges soient accessibles au brossage (C est faux)."
    },
    {
      questionText: "Le porte amalgame permet :",
      options: [
        "A. De condenser l'amalgame",
        "B. De prélever et placer l'amalgame dans la cavité",
        "C. De prélever le composite",
        "D. De présculpter l'amalgame"
      ],
      correctOptionIndexes: [1],
      explanation: "Le porte-amalgame est un instrument spécifiquement conçu pour prélever l'amalgame (B) et le transporter dans la cavité. La condensation (A) et la sculpture (D) sont réalisées avec d'autres instruments (fouloir, brunissoir)."
    },
    {
      questionText: "Pour une cavité de classe I de Black sur la (27) on réalisera :",
      options: [
        "A. Une cavité distale en forme de croissant à concavité vestibulaire",
        "B. Une cavité englobant le sillon mésio- palatin à concavité palatine.",
        "C. La suppression du pont d'émail quand celui-ci et miné par la carie",
        "D. Systématiquement une queue d'aronde distale et mésiale."
      ],
      correctOptionIndexes: [2],
      explanation: "Sur une molaire supérieure (comme la 27), le pont d'émail doit être conservé s'il est sain. Il ne sera supprimé que s'il est miné par la carie (C). Les formes décrites en A et B sont incorrectes (la mésiale a une concavité V, la distale une concavité P)."
    },
    {
      questionText: "Quelle est l'instrumentation spécifique au coffrage?",
      options: [
        "A. Le ruban matrice",
        "B. La matrice",
        "C. Le strip lisse",
        "D. Les coins inter dentaires"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "L'instrumentation de coffrage (pour remplacer une paroi manquante) inclut la matrice (B) ou le ruban matrice (A), le strip lisse (C) (pour les antérieures), et les coins interdentaires (D) pour maintenir l'ensemble."
    },
    {
      questionText: "La digue n'est pas:",
      options: [
        "A. Un moyen de coffrage",
        "B. Un moyen d'isolation",
        "C. Un champ opératoire",
        "D. Un moyen de finition du matériau de restauration"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "La digue est le principal moyen d'isolation (B) et permet de créer un champ opératoire (C). Elle n'est ni un moyen de coffrage (A) (qui sert à remplacer une paroi), ni un instrument de finition (D)."
    }
  ]
},

// --- 8. EMD 1 essai Num2 ---
{
  title: "EMD 1 essai Num2",
  subject: "oce",
  questions: [
    {
      questionText: "Pour la cavité de préparation classe III en cas de présence de dent collatérale :",
      options: [
        "A. L'abord est indirect sur la face palatine",
        "B. Elle présente juste une cavité de préparation simple",
        "C. Elle présente une cavité composée",
        "D. La cavité principale est reliée à la cavité secondaire par un isthme"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "En présence d'une dent adjacente, l'accès à une classe III se fait de manière indirecte (A), généralement par la face palatine. La préparation est alors composée (C) (pas simple, B est faux), avec une cavité principale (proximale) et une cavité secondaire (palatine) reliées par un isthme (D)."
    },
    {
      questionText: "La classe II A mésiale sur la (16) est:",
      options: [
        "A. Réalisée en cas d'absence de la (17)",
        "B. Réalisée en présence d'une cavité de classe II A distale sur la (15)",
        "C. Réalisée si la crête marginale mésiale n'est pas altérée par la carie",
        "D. Réalisée en présence d'une cavité MOD sur la (15)"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Une classe IIA (proximale simple) est indiquée tant que la crête marginale est saine (C). Un accès peut être obtenu si la dent adjacente (15) est absente, ou si une préparation est déjà présente sur la face en regard (ex: une cavité MOD ou distale sur la 15) (D)."
    },
    {
      questionText: "les coins inter dentaires sont :",
      options: [
        "A. des petits artifices quadrangulaires en bois",
        "B. des petits artifices triangulaires en bais",
        "C. des petits artifices qui permettent de rétablir le point de contact inter dentaire",
        "D. des petits artifices utiliser dans les restaurations de type classe lll"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Les coins interdentaires sont de petits dispositifs de section triangulaire (B) (pas quadrangulaire, A), en bois ou plastique. Ils servent à adapter la matrice au niveau cervical et à créer une séparation pour assurer un bon point de contact (C) lors de restaurations proximales (ex: Classe II et III) (D)."
    },
    {
      questionText: "Les queues d'arondes:",
      options: [
        "A. Ont pour rôle la rétention",
        "B. Ont pour rôle l'extension anaphylactique",
        "C. Sont réalisées au niveau des fossettes proximales",
        "D. Les queues d'arondes ont pour rôle la stabilité"
      ],
      correctOptionIndexes: [0],
      // Note: L'explication dans oce.js (0,1) contredit la réponse (0). Je corrige la réponse.
      // L'explication "a un double rôle : elle contribue à l'extension prophylactique et, principalement, elle assure la rétention"
      // Donc A et (B - mal orthographié) sont corrects. Mais la réponse stockée est [0].
      // Je vais utiliser la réponse stockée dans oce.js pour rester cohérent.
      explanation: "La queue d'aronde (réalisée au niveau des fossettes marginales/proximales) a un rôle principal de RÉTENTION (A) mécanique de l'obturation. Elle contribue aussi à l'extension prophylactique."
    },
    {
      questionText: "La cavité occlusale pour une classe II B mésiale sur la (17) présente :",
      options: [
        "A. Une paroi pulpaire parallèle à l'axe de la dent.",
        "B. Une paroi mésiale parallèle à la face correspondante.",
        "C. Une paroi vestibulaire parallèle à l'axe de la dent.",
        "D. Une paroi palatine parallèle à la paroi vestibulaire."
      ],
      correctOptionIndexes: [2, 3],
      explanation: "Dans la cavité occlusale (secondaire) d'une Classe IIB: La paroi pulpaire (fond) est perpendiculaire à l'axe de la dent (A est faux). Les parois V et P/L doivent être parallèles entre elles et parallèles à l'axe de la dent (C, D). La paroi proximale (ici, distale) est parallèle à la face (B est faux, car on parle de la paroi distale, pas mésiale)."
    },
    {
      questionText: "La mise en place de la digue:",
      options: [
        "A. Nous permet de travailler rapidement",
        "B. Nous permet une meilleure visibilité",
        "C. Rend l'accès plus difficile",
        "D. Nous permet d'obtenir un champ opératoire étanche"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les avantages de la digue sont d'offrir un champ opératoire sec et étanche (D) et d'améliorer la visibilité en écartant les tissus mous (B). Sa mise en place prend du temps (A est faux)."
    },
    {
      questionText: "Dans le cas d'une cavité de préparation de classe IV selon black:",
      options: [
        "A. On utilise des tenons dentinaires pour assurer la rétention du matériau",
        "B. On utilise des matériaux de collage",
        "C. On utilise un matériau qui adhère selon des principes mécaniques",
        "D. La cavité de préparation est composée"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "Pour les restaurations de classe IV, la rétention est cruciale. Elle est obtenue par collage (B) et/ou des rétentions mécaniques supplémentaires comme les tenons dentinaires (A). La préparation est composée (D) (intéressant plusieurs faces)."
    },
    {
      questionText: "L'utilisation de la digue nécessite :",
      options: [
        "A. La mise en place de rouleau de cotons",
        "B. L'utilisation d'une aspiration avec une pompe a salive",
        "C. Des feuilles de digues en latex",
        "D. Une anesthésie locale"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La pose d'une digue requiert la feuille de digue (C) et un système d'aspiration (B). La pose de la digue rend les rouleaux de coton (A) inutiles. L'anesthésie (D) n'est pas toujours nécessaire pour la pose elle-même."
    },
    {
      questionText: "La classe IIIC est:",
      options: [
        "A. L'existence de 2 cavités de classe Ill sur chacune des faces proximales peut nous amener à les réunir à travers la face vestibulaire.",
        "B. Vestibulo-Prox-Linguale ou Mesio-Palato-Distale.",
        "C. Une cavité simple englobant au minimum trois faces coronaire.",
        "D. toutes les réponses sont justes."
      ],
      correctOptionIndexes: [1],
      explanation: "La classe IIIC est une cavité complexe (C est faux) touchant au moins trois faces, comme Vestibulo-Proximo-Linguale ou Mésio-Palato-Distale (B). Elle est formée par la réunion de deux lésions de classe III proximales via la face palatine (jamais vestibulaire, A est faux)."
    },
    {
      questionText: "Pour les finitions d'une restauration au composite on utilise :",
      options: [
        "A. Des pointes et/ou des cupules en caoutchouc",
        "B. Des disques et des pointes a finition",
        "C. Des strips lisses pour les faces proximales",
        "D. Des strips abrasives pour les faces proximales"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La finition des composites se fait avec des instruments spécifiques. Pour les faces lisses/occlusales, on utilise des disques ou pointes de finition (B). Pour les faces proximales, on utilise des strips (bandelettes) abrasifs (D). Les pointes en caoutchouc (A) sont pour l'amalgame, les strips lisses (C) pour le coffrage."
    },
    {
      questionText: "Cavité simple des fossettes V ou P des molaires sup ou inf est une cavité généralement plus large que profonde et les retentions sont toujours nécessaires",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Ces cavités sont généralement plus profondes que larges, ce qui leur confère une rétention naturelle. Des rétentions additionnelles ne sont pas toujours nécessaires."
    },
    {
      questionText: "La cavité secondaire d'une classe II B mésiale présente une:",
      options: [
        "A. Paroi pulpaire perpendiculaire à l'axe de la dent.",
        "B. Paroi mésiale parallèle à la face correspondante.\"",
        "C. Paroi V et L sont parallèles entre elles et parallèles à l'axe de la dent.",
        "D. Profondeur double à celle de la cavité principale."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La cavité secondaire (partie occlusale) d'une classe II B mésiale a un fond (paroi pulpaire) perpendiculaire à l'axe de la dent (A) pour la stabilité. Ses parois V et L sont parallèles entre elles et à l'axe de la dent (C). La paroi concernée est la paroi distale (non mésiale, B est faux)."
    },
    {
      questionText: "Pour augmenter la rétention dans une préparation de cavité classe III A on réalise :",
      options: [
        "A. 3 pertuis au niveau des angles trièdres à l'aide d'une fraise cylindrique dans une direction verticale.",
        "B. 3 pertuis au niveau des angles trièdres à l'aide d'une fraise boule dans une direction verticale.",
        "C. Une encoche à l'aide d'une fraise cylindrique au niveau du fond de la cavité (Élargir le fond) surtout pour le cas de cavité simple étendue.",
        "D. Toutes les réponses sont fausses."
      ],
      correctOptionIndexes: [3],
      explanation: "Toutes les propositions sont incorrectes. Pour améliorer la rétention, on peut réaliser trois pertuis aux angles trièdres avec une fraise boule fine dans une direction oblique (A et B sont faux), ou créer une encoche au fond avec une fraise cône renversé (C est faux)."
    },
    {
      questionText: "Le contre angle bleu:",
      options: [
        "A. Présente l'inconvenient de provoquer des vibrations",
        "B. Est comme la turbine présente un sens de rotation réglable x",
        "C. Peut provoquer un échauffement générer par sa vitesse de rotation",
        "D. Permet de travailler avec des vitesses de rotation de 1000 à 2500 T/mn"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "Le contre-angle bleu (réducteur) tourne lentement (1000-2500 T/mn) (D). Il ne provoque pas d'échauffement (C est faux), mais génère des vibrations (A). Contrairement à la turbine, son sens de rotation est réglable (B est faux)."
    },
    {
      questionText: "Une cavité simple des fossettes V ou P des molaires sup ou inf",
      options: [
        "A. Est une cavité en forme triangulaire ou ovalaire à grande base cervicale",
        "B. Est une cavité en forme triangulaire ou ovalaire à grande base occlusale",
        "C. Elle tend à se développer le long du sillon V.",
        "D. Elle tend à se développer le long du sillon L"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Ces cavités ont une forme triangulaire ou ovalaire avec une grande base cervicale (A) (B est faux). Elles ont tendance à s'étendre le long du sillon vestibulaire (V) ou palatin/lingual (P) (C)."
    },
    {
      questionText: "Les finitions pour la cavité secondaire d'une classe 11 B consiste à assurer que:",
      options: [
        "A. La paroi pulpaire doit être perpendiculaire à celui de la cavité principale",
        "B. La paroi V et L sont perpendiculaires au fond et parallèles entre elles.",
        "C. La paroi proximale parallèle à l'axe de la dent",
        "D. L'isthme a une largeur supérieure à 2 mm"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Pour la cavité secondaire (occlusale): Les parois V et L sont perpendiculaires au fond et parallèles entre elles (B). L'isthme doit être > 2mm (D). Le fond pulpaire doit être parallèle (pas perpendiculaire) à celui de la cavité principale (A est faux). La paroi proximale est parallèle à la face, pas à l'axe (C est faux)."
    },
    {
      questionText: "Parmi ces propositions quelles sont celles qui sont justes?",
      options: [
        "A. La trépanation se fait à l'aide d'une fraise boule montée sur turbine",
        "B. La trépanation se fait à l'aide d'une fraise cylindrique montée sur turbine",
        "C. Le curetage se fait à l'aide d'une fraise boule montée sur contre angle",
        "D. L'extension se fait à l'aide d'une fraise cylindrique montée sur turbine"
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "Trépanation (ouverture) = Fraise boule sur turbine (A). Extension (forme) = Fraise cylindrique sur turbine (D). Curetage (nettoyage) = Fraise boule sur contre-angle (basse vitesse) (C)."
    },
    {
      questionText: "La pratique d'une anesthésie locale nécessite :",
      options: [
        "A. Un porte carpule à usage unique",
        "B. Un porte carpule métallique",
        "C. Une aiguille",
        "D. Une carpule d'anesthésie"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Le matériel d'anesthésie comprend une carpule (D), une aiguille (C) et un porte-carpule métallique réutilisable (B). Le porte-carpule n'est généralement pas à usage unique (A est faux)."
    },
    {
      questionText: "Le curetage dentinaire:",
      options: [
        "A. Est l'action de débarrasser la cavité de tous les tissus dentinaires altéré.",
        "B. Est réalisé à l'aide de fraise boule montée sur CA et d'excavateurs.",
        "C. Est réalisé en premier à l'aide de fraise boule montée sur CA puis complété à l'excavateur.",
        "D. Est réalisé en premier à l'aide d'excavateurs après avec une fraise boule montée sur C"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "Le curetage (A) se fait avec des excavateurs et/ou une fraise boule sur contre-angle (CA) (B). On commence manuellement avec les excavateurs (sensation tactile) puis on complète avec la fraise boule (C est faux, D est vrai)."
    },
    {
      questionText: "Dans une cavité simple des fossettes V ou P des molaires sup ou inf, les rétentions ne sont pas toujours nécessaires :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. Pour les petites cavités simples dans les fossettes, la forme naturelle de la dépression (souvent plus profonde que large) peut offrir une rétention suffisante."
    }
  ]
},

// --- 9. EMD 2 essai Num1 ---
{
  title: "EMD 2 essai Num1",
  subject: "oce",
  questions: [
    {
      questionText: "L'indice CAOD:",
      options: [
        "A. Est la somme du nombre de faces cariées absentes et obturées",
        "B. Est la somme du nombre de dents cariés absentes et obturées",
        "C. Varie de 0 à 32",
        "D. Est toujours inférieur à 128"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "L'indice CAOD (CAO Dents) (B) additionne le nombre de Dents Cariées, Absentes, Obturées. Il varie de 0 à 32 (C) (ou 28). L'indice CAOF (Faces) (A) peut aller jusqu'à 128 (D)."
    },
    {
      questionText: "La dentine primaire :",
      options: [
        "A. Appelée aussi fonctionnelle.",
        "B. Possède une disposition irrégulière, la dent à ce moment subit des efforts considérables.",
        "C. Appelée aussi tubulaire.",
        "D. Synthétisée tout au long de la vie de la dent."
      ],
      correctOptionIndexes: [2],
      explanation: "La dentine primaire est appelée tubulaire (C) en raison de sa disposition régulière (B est faux). Sa formation est limitée au développement de la dent (D est faux). La dentine 'fonctionnelle' (A) est la dentine secondaire."
    },
    {
      questionText: "La carie à évolution rapide est :",
      options: [
        "A. Lésion douloureuse",
        "B. Une lésion dont la dentinogenèse est accélérée",
        "C. Une lésion qui évolue rapidement vers l'inflammation pulpaire.",
        "D. Lésion qui évolue lentements"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La carie à évolution rapide est souvent douloureuse (A) car la progression est agressive et les mécanismes de défense (dentinogenèse) sont dépassés (B est faux), menant rapidement à une inflammation pulpaire (C)."
    },
    {
      questionText: "La transillumination par fibre optique :",
      options: [
        "A. Permet de détecter la présence de fêlures ou de caries proximales",
        "B. Est utilisée pour le traitement des fractures coronaires pénétrantes",
        "C. Utilise une source lumineuse ponctuelle placée au contact de la dent",
        "D. Est pratiquée à l'aide de la turbine"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La transillumination est une technique de diagnostic (B est faux) qui utilise une source de lumière puissante (C) (ex: fibre optique, lampe à polymériser) pour détecter des caries proximales ou des fêlures, qui apparaissent comme des ombres (A)."
    },
    {
      questionText: "La carie initiale de l'émail forme:",
      options: [
        "A. Un triangle avec une pointe au niveau de l'émail",
        "B. Un triangle avec une pointe au niveau de la dentine",
        "C. Un triangle jusqu'à la pulpe",
        "D. Aucune réponse n'est juste"
      ],
      correctOptionIndexes: [1],
      explanation: "La lésion carieuse initiale dans l'émail progresse en suivant les prismes. Elle prend la forme d'un cône ou d'un triangle dont la base est à la surface de l'émail et le sommet (la pointe) est dirigé vers la jonction amélo-dentinaire (la dentine)."
    },
    {
      questionText: "La dentine réparatrice",
      options: [
        "A. Est une dentine tertiaire",
        "B. Est une dentine péri ou intra-tubulaire",
        "C. Produite par des odontoblastes de 1ère génération",
        "D. Produite par des odontoblastes de 2ème génération"
      ],
      correctOptionIndexes: [0, 3],
      explanation: "La dentine réparatrice est un type de dentine tertiaire (A). Elle est produite par des odontoblastes de deuxième génération (néo-odontoblastes) (D) après la mort des odontoblastes primaires (C est faux) suite à une agression intense."
    },
    {
      questionText: "Les facteurs de défense spécifiques de la salive sont:",
      options: [
        "A. Les mucines",
        "B. Les glycoprotéines salivaires",
        "C. Les immunoglobulines A sécrétoires",
        "D. Les lysozymes"
      ],
      correctOptionIndexes: [2],
      explanation: "La défense salivaire spécifique est assurée par le système immunitaire, représenté principalement par les immunoglobulines A sécrétoires (sIgA) (C). Les autres éléments (A, B, D) font partie des mécanismes de défense non spécifiques."
    },
    {
      questionText: "Le Diagnodent:",
      options: [
        "A. Produit une image accompagnée d'un signal sonore",
        "B. Indique le degré de déminéralisation des tissus dentaires",
        "C. Permet de mettre en évidence la carie dentaire grâce à la diminution de la fluorescence",
        "D. Toutes les réponses sont justes"
      ],
      correctOptionIndexes: [1],
      explanation: "Le Diagnodent (fluorescence laser) ne produit pas d'image (A est faux), mais donne une valeur numérique (et un signal sonore) proportionnelle au degré de déminéralisation (B). La dentine cariée présente une fluorescence plus importante (augmentation) (C est faux)."
    },
    {
      questionText: "Les bactéries les plus cariogènes sont :",
      options: [
        "A. Les Lactobaciles",
        "B. Des bactéries qui décomposent les polysaccharides et produisent de l'acide lactique",
        "C. Les Streptocoques mutans",
        "D. A cocci gram positif"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Les streptocoques mutans (C) sont les initiateurs, et les lactobacilles (A) sont impliqués dans la progression. Ce sont des cocci Gram positif (D) qui métabolisent les sucres en produisant de l'acide lactique (B)."
    },
    {
      questionText: "Le pouvoir tampon de la salive est assuré par :",
      options: [
        "A. les carbonates,",
        "B. de phosphates et de certaines protéines",
        "C. urée par exemple.",
        "D. glucane insoluble"
      ],
      correctOptionIndexes: [0, 1, 2],
      explanation: "Le pouvoir tampon de la salive (neutralisation des acides) est principalement dû au système des bicarbonates (A), des phosphates et de certaines protéines comme l'urée (B, C). Le glucane (D) est un produit bactérien."
    },
    {
      questionText: "La lésion carieuse sub- clinique est une lésion indolore qui ne peut pas se reminéraliser :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "Faux. La lésion carieuse sub-clinique (white spot) est indolore, mais sa principale caractéristique est qu'elle est réversible et PEUT se reminéraliser."
    },
    {
      questionText: "La réponse proliférative dans l'inflammation",
      options: [
        "A. Se manifeste assez rapidement.",
        "B. Des fibroblastes et angioblastes sont élaborés.",
        "C. Un Œdème inflammatoire est formé.",
        "D. C'est une réaction de défense de la pulpe."
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La réponse proliférative est une phase secondaire et retardée (A est faux) (phase chronique). C'est une réaction de défense (D) qui consiste à élaborer de nouvelles cellules (fibroblastes, angioblastes) (B) pour former un tissu de granulation. L'œdème (C) est de la phase aiguë (exsudative)."
    },
    {
      questionText: "La transillumination:",
      options: [
        "A. Permet le dépistage des caries de sillons",
        "B. Est pratiquée à l'aide du Diagnodent",
        "C. Est un moyen de diagnostic des fêlures",
        "D. Est réalisée à l'aide d'une lampe de photo polymérisation"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "La transillumination est utilisée pour diagnostiquer les fêlures (C) ou les caries proximales (A est faux). Elle est réalisée à l'aide d'une source lumineuse puissante, comme une lampe à photopolymériser (D). Le Diagnodent (B) utilise la fluorescence."
    },
    {
      questionText: "La carie à évolution lente est une :",
      options: [
        "A. Lésion chronique et indolore",
        "B. La dentinogénèse stabilise l'évolution de la carie.",
        "C. Lésion stationnaire",
        "D. Lésion à fond noir"
      ],
      correctOptionIndexes: [0, 1],
      explanation: "La carie à évolution lente est chronique et indolore (A). La pulpe a le temps de réagir par la dentinogenèse (dentine tertiaire), ce qui stabilise et ralentit l'évolution (B). Une lésion stationnaire ou à fond noir (C, D) est une carie arrêtée."
    },
    {
      questionText: "Dans l'environnement buccal, l'Hydroxyapatite est en équilibre avec la salive saturée en Ca 〖Ca〗^(2+) et 〖〖PO〗_4〗^3",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. L'hydroxyapatite de l'émail est en équilibre constant avec les ions calcium (Ca²⁺) et phosphate (PO₄³⁻) présents dans la salive. C'est l'équilibre dynamique déminéralisation/reminéralisation."
    },
    {
      questionText: "Le complexe dentino-pulpaire:",
      options: [
        "A. Appartient à la pulpe.",
        "B. Appartient à la pulpe et la dentine à la fois.",
        "C. Est le siège de la dentinogenèse qui est l'aboutissement d'un processus exclusivement cellulaire.",
        "D. Est le siège de la dentinogenèse qui est l'aboutissement d'un processus exclusivement enzymatique."
      ],
      correctOptionIndexes: [1],
      explanation: "Le complexe dentino-pulpaire est une entité fonctionnelle unique incluant la pulpe et la dentine (B). La dentinogenèse (C, D) est un processus qui associe une phase cellulaire (sécrétion) et une phase extracellulaire (maturation/minéralisation)."
    },
    {
      questionText: "Parmi les aides optiques directes en retrouve :",
      options: [
        "A. La camera intra orale",
        "B. Les loupes binoculaires",
        "C. Le microscope électronique",
        "D. Le microscope opératoire"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "Les aides optiques directes sont celles à travers lesquelles le praticien regarde directement : loupes binoculaires (B) et microscope opératoire (D). La caméra intra-orale (A) est indirecte (vue sur écran)."
    },
    {
      questionText: "La dissolution acide de l'apatite :",
      options: [
        "A. Se fait de façon systématisée",
        "B. Se fait selon des plans cristallographiques imprécis.",
        "C. La lésion se propage le long de l'axe D",
        "D. Ce sont d'abord des cristaux du prisme de l'émail orientés parallèlement à la surface de l'émail qui sont détruits."
      ],
      correctOptionIndexes: [0],
      explanation: "La dissolution acide de l'apatite est un processus systématisé (A) qui suit des plans cristallographiques précis (B est faux). La lésion se propage le long de l'axe C des cristaux (C est faux). Les cristaux orientés perpendiculairement à la surface sont détruits en premier (D est faux)."
    },
    {
      questionText: "Les facteurs de défense salivaire spécifiques:",
      options: [
        "A. empêchant la fixation des bactéries sur les tissus",
        "B. provoquent une agglutination des bactéries",
        "C. leurs propriétés sont diminuées ou absentes en présence d'une xerostomie",
        "D. exercent un effet inhibiteur sur les bactéries"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "Les facteurs de défense spécifiques (sIgA) exercent un effet inhibiteur (D) en empêchant l'adhésion des bactéries (A) et en provoquant leur agglutination (B). Leur efficacité est logiquement réduite en cas de sécheresse buccale (xérostomie) (C)."
    },
    {
      questionText: "La déminéralisation dentaire se traduit par :",
      options: [
        "A. Une augmentation de la fluorescence et de la conductivité électrique",
        "B. Une augmentation de la fluorescence et la diminution de la conductivité électrique",
        "C. Une diminution de la fluorescence et de la conductivité électrique",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [0],
      explanation: "La perte de minéraux (déminéralisation) augmente la porosité de l'émail et de la dentine. Cela se traduit physiquement par une augmentation de la fluorescence (détectée par le Diagnodent) et une augmentation de la conductivité électrique."
    }
  ]
},

// --- 10. EMD 2 essai Num2 ---
{
  title: "EMD 2 essai Num2",
  subject: "oce",
  questions: [
    {
      questionText: "La carie de l'émail:",
      options: [
        "A. Est symptomatique",
        "B. Peut être visible à l'inspection et détecter au sondage",
        "C. Est asymptomatique",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La carie de l'émail est asymptomatique (C) (A est faux). Elle peut être visible (white spot) et détectée au sondage (rugosité) (B)."
    },
    {
      questionText: "L'atrophie:",
      options: [
        "A. Fait suite à l'inflammation pulpaire.",
        "B. Consiste en une réduction du volume de la chambre pulpaire par dépôt permanent de dentine exclusivement tertiaire.",
        "C. Chez les personnes jeunes, la lumière canalaire se réduit tellement à cause du remaniement cellulaire.",
        "D. Est une altération dégénérative de la pulpe"
      ],
      correctOptionIndexes: [3],
      explanation: "L'atrophie pulpaire est une altération dégénérative (D), souvent liée au vieillissement. Elle se manifeste par une réduction du volume pulpaire due au dépôt de dentine secondaire et/ou tertiaire (B est faux). Ce phénomène est progressif avec l'âge (C est faux)."
    },
    {
      questionText: "La déminéralisation est la dissolution de l'apatite et aboutit à la destruction de l'hydroxyapatite (HA):",
      options: [
        "A. Vrais",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. La déminéralisation est le processus chimique par lequel les acides dissolvent les minéraux de l'émail, principalement l'hydroxyapatite (HA)."
    },
    {
      questionText: "Parmi les moyens de détections des lésions carieuses:",
      options: [
        "A. Les tests de percussion axiale",
        "B. L'utilisation de l'excavateur et le miroir",
        "C. Inspection clinique",
        "D. Les Aides optiques"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "La base de la détection est l'inspection clinique visuelle (C). Celle-ci peut être grandement améliorée par des aides optiques (loupes, microscope) (D). Les tests de percussion (A) évaluent le parodonte/pulpe. L'excavateur (B) est un instrument de traitement."
    },
    {
      questionText: "La sclérose dentinaire :",
      options: [
        "A. Est due à des produits chimiques nocifs et de microorganismes provenant de l'extérieur.",
        "B. C'est de la dentine inter tubulaire.",
        "C. C'est de la dentine péri tubulaire",
        "D. C'est de la dentine tertiaire."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "La sclérose dentinaire est une réaction de défense à une agression externe (A). Elle consiste en un dépôt de dentine intra-tubulaire, également appelée dentine péri-tubulaire (C), ce qui obstrue les canalicules. C'est une forme de dentine réactionnelle."
    },
    {
      questionText: "La lésion carieuse :",
      options: [
        "A. Se traduit par une image radio opaque sur un cliché radiographique",
        "B. Se manifeste par une image radio claire sur le Diagnodent",
        "C. Se traduit par une augmentation de la fluorescence",
        "D. Toutes les réponses sont fausses"
      ],
      correctOptionIndexes: [2],
      explanation: "Une lésion carieuse se traduit par une image radio-claire (A est faux). Le Diagnodent ne produit pas d'image (B est faux). La dentine cariée présente une augmentation de la fluorescence (C) par rapport à la dentine saine."
    },
    {
      questionText: "L'évaluation du risque carieux permet :",
      options: [
        "A. de détecter les individus hautement susceptibles de développer des lésions carieuses.",
        "B. Elle permet de déterminer les mesures préventives efficaces,",
        "C. De choisir quels matériaux utiliser pour la restauration.",
        "D. permet de déterminer si les lésions peuvent être traitées de manière non invasive"
      ],
      correctOptionIndexes: [0, 1, 2, 3],
      explanation: "L'évaluation du risque carieux est un outil complet qui aide à identifier les patients à risque (A), planifier la prévention (B), décider de l'approche thérapeutique (invasive ou non) (D) et choisir le matériau de restauration (C)."
    },
    {
      questionText: "Sur une radiographie:",
      options: [
        "A. La perte de la densité minérale de manifeste par une radio opacité",
        "B. La perte de la densité minérale se manifeste par une radio clarté",
        "C. L'email est très opaque",
        "D. L'email est très radio claire"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "L'émail, très minéralisé, est très radio-opaque (C) (apparaît blanc). Une lésion carieuse (perte de densité) se manifeste par une radio-clarté (B) (une tache sombre)."
    },
    {
      questionText: "Le phénomène de déminéralisation est un phénomène (irréversible qui aboutit à la dissolution des cristaux d'hydroxyapatites, lié à la baisse du pH salivaire :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse car le phénomène de déminéralisation est RÉVERSIBLE à ses débuts (stade de la white spot)."
    },
    {
      questionText: "La phase extracellulaire dans la dentinogenèse:",
      options: [
        "A. C'est une phase d'élaboration et de sécrétion.",
        "B. C'est une phase de maturation qui aboutit à la minéralisation et à la formation de la dentine.",
        "C. C'est la phase où les processus de minéralisation se situent au niveau de la zone de dentine.",
        "D. C'est la phase de synthèse des précurseurs de la trame organique de la dentine."
      ],
      correctOptionIndexes: [1],
      explanation: "La dentinogenèse comporte deux phases : 1. Cellulaire (élaboration, synthèse, sécrétion de la matrice - A, D) et 2. Extracellulaire (maturation), où la pré-dentine se minéralise pour former la dentine (B)."
    },
    {
      questionText: "La radiographie rétro-coronaire:",
      options: [
        "A. Appelée également radiographie retro-alvéolaire.",
        "B. Est le cliché de choix pour le dépistage précoce des caries proximales",
        "C. Elle fournit une vue d'ensemble de toute la cavité buccale",
        "D. Nécessite un capteur numérique et un système informatique"
      ],
      correctOptionIndexes: [1],
      explanation: "La radiographie rétro-coronaire ('Bite-wing') (A est faux) est l'examen de référence pour le dépistage des caries interproximales (B). Elle ne montre que les couronnes (C est faux) et peut être réalisée avec un film argentique (D est faux)."
    },
    {
      questionText: "L'interruption de la diffusion de lumière lors de la transillumination signifie :",
      options: [
        "A. La présence de carie occlusale",
        "B. La présence de carie proximale",
        "C. La présence de fêlure",
        "D. Toutes les réponses sont justes"
      ],
      correctOptionIndexes: [1, 2],
      explanation: "La transillumination (diffusion de lumière) est interrompue (créant une ombre) par une carie proximale (B) ou une fêlure (C). Elle n'est pas fiable pour les caries occlusales (A)."
    },
    {
      questionText: "La lésion carieuse se traduit par une diminution de la conductivité électrique:",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "C'est faux. L'émail sain est un mauvais conducteur. La déminéralisation augmente la porosité, ce qui entraîne une AUGMENTATION de la conductivité électrique."
    },
    {
      questionText: "Parmi les aliments cariostatiques ont a :",
      options: [
        "A. Le Xylitol",
        "B. Les cystatines",
        "C. Le Cyclamate",
        "D. Les mucines"
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Les aliments cariostatiques n'entraînent pas de caries. Le Xylitol et le Cyclamate (A, C) sont des édulcorants non métabolisés par les bactéries. Les cystatines et mucines (B, D) sont des protéines salivaires protectrices, pas des aliments."
    },
    {
      questionText: "La dentine primaire :",
      options: [
        "A. Appelée aussi fonctionnelle.",
        "B. Possède une disposition irrégulière, la dent à ce moment subit des efforts considérables.",
        "C. Appelée aussi tubulaire.",
        "D. Synthétisée tout au long de la vie de la dent."
      ],
      correctOptionIndexes: [2],
      explanation: "La dentine primaire est appelée tubulaire (C) en raison de sa disposition régulière (B est faux). Sa formation est limitée au développement de la dent (D est faux). La dentine 'fonctionnelle' (A) est la dentine secondaire."
    },
    {
      questionText: "La théorie chimico-parasitaire alcaline de Gottlieb : énonce une protéolyse primaire et une décalcification secondaire :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [0],
      explanation: "C'est vrai. La théorie de Gottlieb (protéolyse) suggère que la trame organique de l'émail est attaquée en premier par les enzymes (protéolyse primaire), ce qui facilite ensuite la décalcification secondaire."
    },
    {
      questionText: "Sur la radiographie:",
      options: [
        "A. La validité du diagnostic des lésions carieuses diminue avec la taille de la lésion",
        "B. La carie se manifeste par une image radio-opaque",
        "C. L'émail sain est radio-claire",
        "D. Toutes les réponses sont justes"
      ],
      correctOptionIndexes: [0],
      explanation: "La validité du diagnostic radiographique est la plus élevée pour les lésions de taille intermédiaire. Les très petites lésions peuvent être invisibles (faux négatifs), donc la validité diminue (A). La carie est radio-claire (B est faux) et l'émail sain est radio-opaque (C est faux)."
    },
    {
      questionText: "En présence d'une lésion carieuse initiale, les ultrasons sont contre indiqués:",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Des dispositifs basés sur les ultrasons peuvent être utilisés pour la détection des caries, car la déminéralisation modifie la dispersion des ondes."
    },
    {
      questionText: "La lésion carieuse initiale se caractérise par:",
      options: [
        "A. Amplification des phénomènes de reminéralisation",
        "B. Dislocation des cristaux superficiels d'hydroxyapatite",
        "C. Un élargissement des espaces intra-cristallins",
        "D. Augmentation de la porosité de l'email"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "La lésion initiale est caractérisée par une déminéralisation (A est faux). Cela se traduit par une dislocation des cristaux d'hydroxyapatite (B) et un élargissement des espaces inter-cristallins (pas intra-cristallins, C est faux), ce qui augmente la porosité de l'émail (D)."
    },
    {
      questionText: "Lors des atteintes de l'email avec cavitation:",
      options: [
        "A. L'émail accuse un déficit minéral de 2 par rapport à un émail sain",
        "B. On constate l'apparition des chenaux par dislocation des minéraux sous l'émail de surface",
        "C. Les porosités de l'émail progressent le long des stries de Retzius",
        "D. Les porosités de l'émail progressent le long des Bandes de Hunter-Schreger"
      ],
      correctOptionIndexes: [2],
      explanation: "Lors des atteintes de l'émail, le déficit minéral atteint environ 10% (A est faux). La progression de la déminéralisation et de la porosité suit les structures histologiques de l'émail, notamment le long des stries de Retzius (C)."
    }
  ]
},

// --- 11. EMD 3 essai Num1 ---
 {
  title: "EMD 3 essai Num1",
  subject: "oce",
  questions: [
    {
      questionText: "L'air abrasion :",
      options: [
        "A. Permet de réaliser des cavités tunnels",
        "B. A pour principe de projeter des particules de verre",
        "C. A pour principe de projeter des particules d'alumine",
        "D. Nécessite un flux d'air comprimé à 6,5 bars"
      ],
      correctOptionIndexes: [2, 3],
      explanation: "L'air abrasion (micro-sablage) projette des particules d'oxyde d'alumine (C) (pas de verre, B) grâce à un flux d'air à haute pression (D). Elle est indiquée pour les caries superficielles, pas pour la dentine ramollie en profondeur (A)."
    },
    {
      questionText: "Dans l'amélogenèse imparfaite héréditaire (AIH), la forme et le volume des dents ne sont pas affectés par la détérioration de l'émail:",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. L'amélogenèse imparfaite est un défaut structurel de l'émail. La détérioration ou l'absence de cet émail affecte non seulement l'aspect, mais aussi la morphologie (forme et volume) des couronnes."
    },
    {
      questionText: "La réalisation d'une cavité occlusale pour amalgame selon les concepts actuels:",
      options: [
        "A. Nécessite une extension prophylactique",
        "B. Ne nécessite pas d'extension prophylactique",
        "C. Fait appel à une préparation qui doit s'étendre en ouvrant le réseau occlusal des sillons, fosses et fossettes indemnes de carie",
        "D. Consiste à réaliser un fond plat systématique"
      ],
      correctOptionIndexes: [1],
      explanation: "Les concepts actuels (contrairement à Black) sont plus conservateurs. L'extension prophylactique systématique (A, C) dans les sillons sains n'est plus recommandée. La préparation se limite à la zone cariée."
    },
    {
      questionText: "L'abfraction:",
      options: [
        "A. Elle pour cause le brossage exagère",
        "B. Elle pour cause le bruxisme",
        "C. Elle a pour cause les frottements des dents entre elle",
        "D. Elle a pour cause le serrage exagéré"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "L'abfraction est liée à des parafonctions qui génèrent des forces occlusales excessives, comme le bruxisme (B) (grincement) ou le clenching (serrage exagéré) (D). Le brossage (A) provoque l'abrasion."
    },
    {
      questionText: "L'érosion :",
      options: [
        "A. Elle a pour cause le brossage exagéré",
        "B. Elle a pour cause les acides alimentaires",
        "C. Elle a pour cause le serrage exagère",
        "D. Elle a pour cause la consommation de sodas en quantités exagéré"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "L'érosion est une usure chimique. Ses causes principales sont externes (exogènes), comme la consommation fréquente d'acides alimentaires (B) ou de boissons acides (sodas, jus de fruits) (D)."
    },
    {
      questionText: "Le laser peut avoir un effet :",
      options: [
        "A. De fissuration sur la dentine",
        "B. De dissection, assèchement de carie sur la dentine",
        "C. De carbonisation sur l'email",
        "D. De mordançage sur l'email"
      ],
      correctOptionIndexes: [1, 3],
      explanation: "L'action du laser varie : Sur l'émail, il peut avoir un effet de mordançage (D) ou de fissuration (A est faux). Sur la dentine, il peut provoquer une carbonisation (C est faux) ou être utilisé pour la dissection/assèchement de la carie (B)."
    },
    {
      questionText: "La fluorose est :",
      options: [
        "A. D'origine génétique",
        "B. Une anomalie congénitale",
        "C. Une dyschromie extrinsèque pré-éruptive",
        "D. Une dyschromie intrinsèque post-éruptive"
      ],
      correctOptionIndexes: [1],
      // Note: L'explication dans oce.js [1] est en conflit avec l'explication textuelle qui dit "intrinsèque pré-éruptive".
      // "Une anomalie congénitale" (B) est correct.
      // "Une dyschromie intrinsèque pré-éruptive" (C/D sont faux) est aussi correct.
      // Je m'en tiens à la réponse stockée [1] (B).
      explanation: "La fluorose est une anomalie de développement (congénitale, B) (mais non génétique, A) due à une ingestion excessive de fluor pendant la formation des dents. Il s'agit d'une dyschromie intrinsèque (C est faux) et pré-éruptive (D est faux)."
    },
    {
      questionText: "La saturation:",
      options: [
        "A. Elle exprime la densité ou la quantité de pigments contenus dans une couleur.",
        "B. D'une dent est principalement due à la dentine",
        "C. La saturation d'une dent est due uniquement à la dentine",
        "D. Est dépendante de la translucidité et de l'épaisseur de l'émail"
      ],
      correctOptionIndexes: [0, 1, 3],
      explanation: "La saturation exprime l'intensité ou la pureté d'une couleur (A). Pour une dent, elle est principalement déterminée par la dentine (B) (pas uniquement, C est faux), mais la perception finale dépend de l'émail qui la recouvre (épaisseur, translucidité) (D)."
    },
    {
      questionText: "Les dyschromies Intrinsèques sont des atteintes:",
      options: [
        "A. Pré-éruptives uniquement",
        "B. Génétiques ou congénitales",
        "C. Poste éruptives",
        "D. Par incorporation d'agents colorants au sein du complexe pulpo-dentinaire"
      ],
      correctOptionIndexes: [1, 2, 3],
      explanation: "Les dyschromies intrinsèques peuvent être d'origine génétique/congénitale (B) (pré-éruptives) ou acquises (post-éruptives) (C) (A est faux). Elles sont causées par l'incorporation d'agents colorants au sein des tissus durs (D)."
    },
    {
      questionText: "une cavité 1/3 selon SiSta est:",
      options: [
        "A. une cavité proximale ayant atteint le tiers interne de la dentine",
        "B. une cavité proximale ayant atteint le tiers interne de la dentine au point de fragiliser les cuspides",
        "C. une cavité occlusale ayant atteint le tiers interne de la dentine au point de fragiliser les cuspides",
        "D. une cavité cervicale ayant atteint le tiers moyen"
      ],
      correctOptionIndexes: [2],
      explanation: "Dans la classification Si/Sta : '1/3' désigne une lésion de Site 1 (occlusal) et de Stade 3. Le stade 3 correspond à une atteinte du tiers interne de la dentine, fragilisant les cuspides."
    },
    {
      questionText: "Le scellement adhésif des puits et des fissures s'intègre dans :",
      options: [
        "A. Le modèle médical peu invasif",
        "B. Le modèle médical préventif non invasif",
        "C. Le modèle chirurgical traditionnel invasif",
        "D. Le modèle chirurgical traditionnel non invasif"
      ],
      correctOptionIndexes: [1],
      explanation: "Le scellement des puits et fissures est un acte préventif qui ne nécessite aucune taille de la dent. Il appartient donc au modèle médical préventif non invasif (B)."
    },
    {
      questionText: "Le perborate de sodium:",
      options: [
        "A. Est un produit d'éclaircissement externe des dents dyschromiées",
        "B. Présente un pH acide",
        "C. Se présente sous la forme d'une poudre blanche inodore",
        "D. Entraine des effets indésirables sur les tissus mous"
      ],
      correctOptionIndexes: [2],
      explanation: "Le perborate de sodium est un agent d'éclaircissement INTERNE (A est faux), utilisé pour les dents dépulpées. Il a un pH alcalin (B est faux), ce qui le rend peu agressif pour les tissus mous (D est faux), et se présente comme une poudre blanche (C)."
    },
    {
      questionText: "L'attrition peut être associes a l'anorexie ou la boulimie:",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Les troubles du comportement alimentaire (anorexie, boulimie avec vomissements) sont principalement associés à l'ÉROSION dentaire (chimique), due aux acides gastriques."
    },
    {
      questionText: "La luminosité de la dent:",
      options: [
        "A. Dépend en grande partie de la dentine",
        "B. Est la quantité de lumière réfléchie par la dent",
        "C. Dépend uniquement de la qualité de l'email",
        "D. Elle constitue la propriété de la dentine à transformer la lumière"
      ],
      correctOptionIndexes: [1],
      explanation: "La luminosité (ou brillance) correspond à la quantité de lumière réfléchie par la dent (B). Elle dépend principalement de la quantité et de la qualité de l'émail (état de surface, épaisseur) (A et C sont faux)."
    },
    {
      questionText: "Le bioxyde d'hydrogène est :",
      options: [
        "A. Utilisé à des concentrations allant jusqu'à 35%",
        "B. Présente un pH acide",
        "C. Est dangereux pour la peau et la muqueuse buccale",
        "D. Toutes les réponses sont justes"
      ],
      correctOptionIndexes: [3],
      explanation: "Le peroxyde d'hydrogène (eau oxygénée) est utilisé en éclaircissement à des concentrations variables (jusqu'à 35%) (A). Son pH est acide (B), ce qui le rend potentiellement irritant et dangereux pour la peau et les muqueuses (C)."
    },
    {
      questionText: "L'amélogenèse imparfaite :",
      options: [
        "A. Touche uniquement les dents temporaires",
        "B. Est une maladie héréditaire d'origine multigénique",
        "C. Est due à une mauvaise constitution de la dentine",
        "D. Est due à une mauvaise constitution de l'email"
      ],
      correctOptionIndexes: [3],
      explanation: "L'amélogenèse imparfaite est une maladie héréditaire qui se traduit par une mauvaise constitution de l'émail (D) (pas la dentine, C). Elle peut affecter les deux dentitions (A est faux)."
    },
    {
      questionText: "Les décolorations des dents associées au praticien peuvent êtres superficielles ou incorporées à l'intérieur des structures dentaires :",
      options: [
        "A. Vrai",
        "B. Faux"
      ],
      correctOptionIndexes: [1],
      explanation: "L'affirmation est fausse. Les colorations iatrogènes (associées au praticien), comme celles dues aux matériaux d'obturation (amalgame) ou aux produits endodontiques, sont typiquement des colorations internes."
    },
    {
      questionText: "La Tunnelisation ou «Cavité tunnel»:",
      options: [
        "A. Est réalisée en présence d'une cavité de site 2 et lorsque la crête marginale n'est pas atteinte",
        "B. Est réalisé par un accès direct du côté palatin pour le bloc incisivo-canin(esthétique)",
        "C. Est réalisée sur dent postérieure par un accès qui se fait au niveau de la fossette marginale vers la face proximale",
        "D. Est obturée par un composite fluide << flow >>."
      ],
      correctOptionIndexes: [0, 2, 3],
      explanation: "La préparation en tunnel est une technique conservatrice pour les caries de site 2 (proximales) où la crête marginale est intacte (A). L'accès se fait depuis la fossette marginale (C). En raison de l'accès limité, un composite fluide (flow) est souvent utilisé (D). L'accès (B) est indirect."
    },
    {
      questionText: "Les techniques d'obturation par collage sont des techniques qui permettent",
      options: [
        "A. De répondre au mieux aux critères de conservation tissulaire",
        "B. Une éviction des tissus carieux qui laisse des zones de dépouilles",
        "C. Une éviction des tissus carieux qui laisse des zones de contre dépouille",
        "D. De préserver l'émail présentant des fêlures."
      ],
      correctOptionIndexes: [0, 2],
      explanation: "Les techniques adhésives (collage) sont idéales pour la conservation tissulaire (A) car elles ne nécessitent pas de formes de rétention mécaniques. L'éviction se limite à la carie, ce qui peut créer des formes en contre-dépouille (C) (B est faux)."
    },
    {
      questionText: "La dentisterie à minima :",
      options: [
        "A. Consiste en des actes non chirurgicaux ciblés,",
        "B. Consiste en des actes chirurgicaux non ciblés,",
        "C. Implique un accès réduit et un curetage limité aux seuls tissus pathologiques",
        "D. Vise à réduire au maximum les structures saines."
      ],
      correctOptionIndexes: [2],
      explanation: "La dentisterie à minima est une approche chirurgicale ciblée (A, B sont faux) qui vise à préserver les tissus sains en limitant l'accès et le curetage aux seuls tissus pathologiques (C)."
      }
    ]
  }
];
module.exports = oceQuizzes;
