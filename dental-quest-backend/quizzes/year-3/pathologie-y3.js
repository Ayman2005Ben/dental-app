// quizzes/year-3/pathologie-y3.js

const pathologyY3Quizzes = [
  {
    title: "Physiopathologie de l'infection",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Dans la théorie infectieuse :",
        options: [
          "La bactériémie est toujours la cause de la dissémination des agents infectieux",
          "La notion d'épine irritative est retrouvée",
          "La propagation de l'infection peut se faire par pyophagie",
          "Le taux de VS est normal"
        ],
        correctOptionIndexes: [2],
        explanation: "Les agents infectieux peuvent se propager par diverses voies (lymphatiques, respiratoires, digestives). Le taux de vitesse de sédimentation (VS) est souvent élevé en cas d'infection."
      },
      {
        questionText: "L'infection se manifeste sur le plan général par:",
        options: [
          "chaleur",
          "Une sécrétion de TNF",
          "Une fièvre",
          "Une rougeur"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les manifestations générales de l'infection incluent la Fièvre et la Sécrétion de TNF. La Douleur, Rougeur, et Chaleur sont des signes locaux."
      },
      {
        questionText: "Parmi les facteurs suivants, lesquels caractérisent la propagation de l'infection à d'autres sites?",
        options: [
          "La production de toxines et d'enzymes",
          "Une augmentation du système immunitaire",
          "Une prise médicamenteuse type Antibiotique",
          "Le développement d'une résistance aux antimicrobiens"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La propagation est favorisée par la production de toxines/enzymes par le micro-organisme et le développement d'une résistance aux antimicrobiens."
      },
      {
        questionText: "Dans une infection chronique:",
        options: [
          "Les microorganismes submergent les défenses de l'organisme de l'hôte",
          "Un état d'équilibre est atteint entre les microorganismes et l'hôte.",
          "Les microorganismes sont détruits.",
          "Une multiplication des microorganismes est caractéristique"
        ],
        correctOptionIndexes: [1],
        explanation: "Dans une infection chronique, les microorganismes persistent dans le corps à long terme, établissant une relation d'équilibre dynamique avec le système immunitaire de l'hôte."
      },
      {
        questionText: "Un microorganisme qui devient pathogène en cas d'immunodépression est appelé:",
        options: [
          "Saprophyte",
          "Commensale",
          "Pathogène",
          "Opportuniste."
        ],
        correctOptionIndexes: [3],
        explanation: "Les microorganismes opportunistes peuvent devenir pathogènes et causer des infections en cas d'immunodépression."
      },
      {
        questionText: "La virulence d'un micro-organisme:",
        options: [
          "Concerne uniquement les virus",
          "Concerne tous les micro-organismes",
          "Est le degré de pouvoir pathogène",
          "Est le processus par lequel le germe induit une maladie"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La virulence concerne tous les micro-organismes et représente le degré de leur pouvoir pathogène. Le processus par lequel le germe induit la maladie est la pathogenèse."
      },
      {
        questionText: "L'évolution des infections se fait :",
        options: [
          "En fonctions de la tolérance de l'hôte",
          "Vers des infections récurrentes",
          "Toujours vers des infections persistantes",
          "En fonctions des défenses anatomiques immunitaires"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'évolution des infections peut être aiguë ou persistante, et peut se diriger vers des infections récurrentes en fonction de la tolérance de l'hôte."
      },
      {
        questionText: "Pour traiter les infections à point de départ buccodentaire, le choix se portera vers (cocher la réponse juste) :",
        options: [
          "Les pénicillines du groupe G",
          "Les pénicillines du groupe A",
          "Les pénicillines v",
          "Les Biclinocilline"
        ],
        correctOptionIndexes: [2],
        explanation: "Les pénicillines V (phénoxyméthylpénicilline) sont couramment utilisées pour traiter les infections d'origine buccodentaire."
      },
      {
        questionText: "Le degré de pathogénicité de germe est lié à :",
        options: [
          "L'élaboration des toxines",
          "L'envahissement des tissus par des enzymes non microbiennes",
          "L'effet pathogène des germes",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le degré de pathogénicité est lié à l'élaboration de toxines et à l'effet pathogène des germes. L'envahissement des tissus se fait par des enzymes microbiennes."
      },
      {
        questionText: "Les septico-pyohémies donnent le tableau d'une infection aigue :",
        options: [
          "A foyers métastasiques multiples",
          "A foyers métastasiques unique",
          "Avec irritation nerveuse, donc sans germes pathogènes",
          "Dont l'endocardite infectieuse est l'exemple"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les septico-pyohémies se caractérisent par des foyers métastatiques multiples, et l'endocardite infectieuse en est un exemple."
      },
      {
        questionText: "Les interférons :",
        options: [
          "Sont secrétés par les monocytes",
          "Sont libérés à partir de l'acide arachidonique",
          "Ont un rôle antiviral",
          "Facilitent la phagocytose et stimulent les macrophages"
        ],
        correctOptionIndexes: [2],
        explanation: "Les interférons ont un rôle antiviral et sont sécrétés par les cellules leucocytaires."
      },
      {
        questionText: "L'infection :",
        options: [
          "Est la prolifération d'un micro-organisme non-pathogène au sein d'un organisme",
          "Est toujours systémique",
          "Son initiation nécessite l'entrée du germe chez un hôte sensible",
          "Est toujours bactérienne"
        ],
        correctOptionIndexes: [2],
        explanation: "L'initiation d'une infection nécessite l'entrée d'un germe chez un hôte sensible. L'infection est la prolifération d'un micro-organisme pathogène et peut être causée par divers agents (bactéries, virus, etc.)."
      },
      {
        questionText: "Parmi les types de germes pathogènes, le pathogène strict est :",
        options: [
          "Un germe pathogène uniquement chez les individus à défense altérées de façon profonde et durable",
          "Un germe dont la présence signe obligatoirement une infection car n'a jamais de relation de commensalisme avec l'organisme humain",
          "Un germe de portage transitoire ou de la flore commensale, qui provoque une infection, en raison de facteur favorisant",
          "Un germe qui provoque une simple fièvre alors qu'il y a un inoculum extrêmement important"
        ],
        correctOptionIndexes: [1],
        explanation: "Un pathogène strict est un germe dont la présence signe obligatoirement une infection car il n'a jamais de relation de commensalisme avec l'organisme humain."
      }
    ]
  },
  {
    title: "Les anti-Inflammatoires : AINS et AIS",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Dans notre domaine les corticoïdes sont indiqués:",
            options: [
              "Pour limiter les suites opératoires d'une intervention chirurgicale",
              "Après un traumatisme important des ATM",
              "lors d'une réaction allergique à l'anesthésie dentaire",
              "Douleurs neuropathiques"
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "Les corticoïdes (AIS) sont indiqués pour limiter les suites opératoires (œdème), après un traumatisme des ATM, lors de réactions allergiques, et pour les douleurs neuropathiques."
        },
        {
            questionText: "les anti-inflammatoires non stéroïdiens (AINS) sont contre indiqués en cas de:",
            options: [
              "Insuffisance cardiaque ou insuffisance rénale grave",
              "Enfants moins de 15 ans",
              "Adultes plus de 60 ans",
              "Femme enceinte durant le troisième trimestre"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Les AINS sont contre-indiqués en cas d'insuffisance cardiaque ou rénale grave, et chez la femme enceinte à partir du 6ème mois (troisième trimestre)."
        },
        {
            questionText: "Les anti inflammatoires :",
            options: [
              "Sont utiliser uniquement pour lutter contre la douleur",
              "Réduisaient de l'inflammation et d'autres causes de la douleur",
              "Sont utilisés pout traiter les infections",
              "Sont prescrits systématiquement après toute extraction dentaire"
            ],
            correctOptionIndexes: [1],
            explanation: "Les anti-inflammatoires agissent en inhibant les processus inflammatoires, ce qui réduit la douleur, rougeur, chaleur et gonflement. Les antibiotiques sont utilisés pour traiter les infections."
        },
        {
            questionText: "Lors de la prescription des corticoïdes",
            options: [
              "Le malade doit être jeune",
              "On doit prendre en considération la demi vie biologique qui est entre 4à 6 h",
              "On doit prendre en considération la demi-vie biologique qui est entré 12à 24h",
              "On doit prendre en considération la demi-vie biologique qui est entre 12à 48h"
            ],
            correctOptionIndexes: [2],
            explanation: "Pour les corticoïdes, la demi-vie biologique se situe généralement entre 12 à 24 heures."
        },
        {
            questionText: "La connaissance de la demi-vie plasmatique de chaque produit renseigne sur :",
            options: [
              "Permet de déterminer la fréquence d'administration par jour",
              "La durée d'élimination du produit",
              "C'est l'intervalle de temps au cours duquel le taux plasmatique du produit tombe de 50%",
              "La durée d'absorption du produit"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La demi-vie plasmatique est l'intervalle de temps pendant lequel la concentration plasmatique du produit diminue de 50%, et elle permet de déterminer la fréquence d'administration."
        },
        {
            questionText: "Un anti inflammatoire stéroïdien est prescrit :",
            options: [
              "Pour limiter les suites post opératoires d'une intervention chirurgicale",
              "Pour soulager la douleur d'une pulpite aigue",
              "En association d'une antibiothérapie massive pour les cellulites diffuses",
              "Sans précaution d'une particulière chez le diabétique type 2"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "Les AIS sont prescrits pour limiter les suites post-opératoires et peuvent être utilisés en urgence (en association avec une antibiothérapie) dans les cellulites malignes pour éviter l'asphyxie. Des précautions sont nécessaires chez les diabétiques."
        },
        {
            questionText: "Les anti-inflammatoire non stéroïdiens sont :",
            options: [
              "des antigréfants plaquettaires",
              "des antis infectieux",
              "des antalgiques",
              "des antipyrétiques"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Les AINS ont des propriétés antiagrégants plaquettaires, antalgiques (contre la douleur), et antipyrétiques (contre la fièvre)."
        },
        {
            questionText: "cochez la ou les réponses justes:",
            options: [
              "peuvent être utilisés en association avec les corticoïdes",
              "les corticoïdes sont prescrits après une chirurgie osseuse importante",
              "L'association des deux AINS augmente leur efficacité",
              "les AINS peuvent être prescrits pendant toute la durée de la grossesse"
            ],
            correctOptionIndexes: [1],
            explanation: "Les corticoïdes sont prescrits après une chirurgie osseuse importante. Les AINS sont contre-indiqués à partir du 6ème mois de grossesse."
        }
    ]
  },
  {
    title: "Les Infections spécifiques de la muqueuse",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Dans la syphilis primaire :",
            options: [
              "Le chancre n'est pas contagieux",
              "un des ganglions est toujours plus important que les autres",
              "le chancre est très contagieux",
              "la lésion buccale fait suite à une extraction dentaire"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le chancre de la syphilis primaire est très contagieux, et il est typique qu'un des ganglions satellites soit plus volumineux que les autres."
        },
        {
            questionText: "Dans la tuberculose buccale, le chancre d'inoculation se présente sous la ou les forme(s) suivante(s) :",
            options: [
              "Une ulcération extensive et indolente, de contour régulier et surélevé, à fond uniforme, jaunâtre souple et sans halo périphérique rougeâtre comme pour l'aphte",
              "Un ulcère douloureux à bords fins et décollés, à une surface végétante et peu creusante recouverte d'un exsudat gris jaunâtre",
              "Une ulcération extensive à bords déchiquetés, à fond brun induré entouré par un halo périphérique reddish",
              "Un érythème sue lequel apparait une lésion blanchâtre riche en bacilles de koch visibles au microscope"
            ],
            correctOptionIndexes: [0],
            explanation: "Le chancre d'inoculation tuberculeux est une ulcération extensive et indolente, de contour régulier et surélevé, avec un fond uniforme, jaunâtre, souple et sans halo périphérique rougeâtre."
        },
        {
            questionText: "Une gomme est :",
            options: [
              "L'expression de la syphilis secondaire",
              "Le résultat d'une dissémination hématogène du BK à partir d'un foyer tuberculeux préexistant",
              "Une manifestation de la syphilis tertiaire",
              "Un nodule hypodermique indolore et mobile, se ramollissant, s'ulcérant et se vidant en laissant des cicatrices"
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "Une gomme peut être une manifestation de la syphilis tertiaire. La gomme tuberculeuse, quant à elle, résulte d'une dissémination hématogène du Bacille de Koch (BK) et se présente comme un nodule qui évolue vers le ramollissement et l'ulcération."
        },
        {
            questionText: "La syphilis secondaire est caractérisée par :",
            options: [
              "L'installation de gommes ulcéro mutilantes",
              "L'apparition de la roséole cutanée, de syphilides de plaques muqueuses",
              "La nécrose caséeuse",
              "L'apparition de lésions végétantes hyperkératosiques"
            ],
            correctOptionIndexes: [1],
            explanation: "La syphilis secondaire est caractérisée par des manifestations cutanées (roséole) et muqueuses (syphilides, plaques muqueuses). Les gommes sont caractéristiques de la syphilis tertiaire."
        },
        {
            questionText: "Le diagnostic différentiel de la tuberculose buccale se fait avec :",
            options: [
              "Cicatrice rétractile muqueuse",
              "Chancre de syphilis primaire",
              "Une ulcération atraumatique",
              "Une actinomycose"
            ],
            correctOptionIndexes: [3],
            explanation: "Le diagnostic différentiel d'une gomme ou d'un abcès froid tuberculeux inclut l'actinomycose et les gommes syphilitiques."
        },
        {
            questionText: "La syphilis est une infection, contagieuse dont les manifestations buccales",
            options: [
              "Se voient au stade primaire de la maladie",
              "Se voient au stade terminal de la maladie",
              "Se voient à tous les stades de son évolution",
              "Sont plus marqués lors de la syphilis congénitale"
            ],
            correctOptionIndexes: [2],
            explanation: "La syphilis peut présenter des manifestations buccales à tous les stades de son évolution (primaire, secondaire, tertiaire)."
        }
    ]
  },
  {
    title: "Les douleurs oro-faciales",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "La névralgie trigéminale essentielle est caractérisée par :",
            options: [
              "Une douleur paroxystique, souvent type décharges électriques avec des salves douloureuses brèves.",
              "Une absence de la zone de gâchette",
              "Un caractère unilatéral et une prépondérance dans le territoire du V2",
              "Une réponse favorable au traitement par le Carbamazépine"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "La névralgie trigéminale essentielle est caractérisée par une douleur paroxystique unilatérale, prédominant dans le V2, et répondant bien à la Carbamazépine. L'excitation d'une 'zone gâchette' est un signe typique."
        },
        {
            questionText: "L'algie vasculaire de la face est caractérisée par :",
            options: [
              "présence de prodrome",
              "Une douleur extrêmement sévère, continue, décrite comme une brûlure",
              "Une douleur accompagnée du syndrome de Claude Bernard-Hornerdans les formes légères",
              "Les crises sont surtout nocturnes ou très tôt le matin"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "L'algie vasculaire de la face se manifeste par une douleur très sévère et continue. Les crises sont souvent nocturnes ou matinales. Le syndrome de Claude Bernard-Horner peut apparaître dans les formes sévères."
        },
        {
            questionText: "Les algies vasculaires de la face sont caractérisées par:",
            options: [
              "la topographie occipitale de la douleur",
              "l'existence de phénomène vasomoteur et sécrétoire",
              "l'existence habituelle de prodrome",
              "Une allodynie"
            ],
            correctOptionIndexes: [1],
            explanation: "Les algies vasculaires de la face sont caractérisées par l'existence de phénomènes vasomoteurs et sécrétoires."
        },
        {
            questionText: "Concernant la Névralgie trigéminale essentielle, Laquelle (les quelles) de ces affirmations est (sont)",
            options: [
              "Les accès douloureux sont brefs",
              "La douleur peut être déclenchée par des stimuli indirects",
              "Persistance parfois de paresthésie ou d'hypoesthésie",
              "Son traitement est essentiellement chirurgical"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Les accès douloureux de la névralgie trigéminale essentielle sont brefs et peuvent être déclenchés par des stimuli directs ou indirects sur une 'zone gâchette'."
        },
        {
            questionText: "la douleur d'une alvéolite est considérée comme une douleur de type :",
            options: [
              "chirurgicale",
              "inflammatoire",
              "idiopathique",
              "aucune réponse n'est juste."
            ],
            correctOptionIndexes: [1],
            explanation: "La douleur associée à l'alvéolite est principalement due à l'inflammation de la zone affectée."
        },
        {
            questionText: "Dans la névralgie trigéminale essentielle, parmi les signes cliniques permettant le diagnostique positif :",
            options: [
              "La persistance d'un fond douloureux entre les accès avec parfois paresthésie et hypoesthésie",
              "La localisation unilatéral constante de la douleur dans le territoire carotidien",
              "L'existence de la zone de gâchette comme facteur déclenchant",
              "L'association de signe vasomoteurs"
            ],
            correctOptionIndexes: [2],
            explanation: "L'existence d'une 'zone gâchette' qui déclenche la douleur par simple effleurement est un signe clinique majeur pour le diagnostic positif de la névralgie trigéminale essentielle."
        },
        {
            questionText: "Le syndrome de CLAUDE-BERNARD-HORNER accompagne toujours",
            options: [
              "Les névralgies par désafférentation sensitive",
              "La forme sévères d'algie vasculaire",
              "La névralgie trigéminale essentielle",
              "La névralgie glossopharyngée secondaire à une tumeur glomique"
            ],
            correctOptionIndexes: [1],
            explanation: "Le syndrome de Claude Bernard-Horner peut accompagner les formes sévères d'algies vasculaires de la face."
        },
        {
            questionText: "Le traitement de 1ère intention de névralgie essentielle repose sur :",
            options: [
              "Les Benzodiazépines",
              "Les prégabaline",
              "L'amitriptyiline",
              "La carbamazépine"
            ],
            correctOptionIndexes: [3],
            explanation: "La carbamazépine (Tégrétol) est le traitement de première intention pour la névralgie essentielle et constitue aussi un test diagnostique."
        },
        {
            questionText: "Dans les algies vasculaires de la face, la douleur est causée par :",
            options: [
              "Un dysfonctionnement du système physiologique de transmission du message nociceptif",
              "Une dilatation vasculaire comprimant le VII",
              "Une dilatation vasculaire comprimant le VI",
              "Un dysfonctionnement du système nerveux périphérique"
            ],
            correctOptionIndexes: [1],
            explanation: "La douleur dans les algies vasculaires de la face est causée par une dilatation vasculaire qui comprime le nerf facial (VII)."
        }
    ]
  },
  {
    title: "Les paralysies faciales",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "La fonction végétative du facial est assurée par :",
            options: [
              "Le grand nerf pétreux superficiel et la corde du tympan",
              "L'anastomose avec les fibres motrices",
              "Le nerf lingual",
              "Le nerf grand hypoglosse"
            ],
            correctOptionIndexes: [0],
            explanation: "La fonction végétative du nerf facial (pour les glandes lacrymales et salivaires) est assurée par le grand nerf pétreux superficiel et la corde du tympan."
        },
        {
            questionText: "La sémiologie de la Paralysie faciale périphérique (PFP) est caractérisée par:",
            options: [
              "Une atteinte unilatérale et totale de tous les muscles de l'hémi face (étage supérieur et inferieur)",
              "Un signe de Charles Bell positif",
              "Une associée souvent à une hémiplégie homolatérale",
              "Des dysphagies"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La PFP est caractérisée par une atteinte unilatérale et totale de l'hémi-face et un signe de Charles Bell positif, où le globe oculaire se déplace en haut et en dehors lors de la tentative de fermeture des paupières."
        },
        {
            questionText: "Le VII bis ou intermédiaire de Wrisberg est constitué par :",
            options: [
              "Des fibres responsables des expressions et des émotions non verbales.",
              "Les fibres du VII proprement dit.",
              "Une racine sensitive, sensorielle et sécrétoire.",
              "Des fibres motrices."
            ],
            correctOptionIndexes: [2],
            explanation: "L'intermédiaire de Wrisberg (nerf VII bis) est la racine sensitive, sensorielle et sécrétoire du nerf facial."
        },
        {
            questionText: "Lors d'une paralysie faciale centrale, on a :",
            options: [
              "une prédominance des signes sur le territoire facial inférieur",
              "un signe de Charles Bell positif",
              "une dissociation automatico volontaire",
              "un signe de Charles Bell négatif."
            ],
            correctOptionIndexes: [0],
            explanation: "La paralysie faciale centrale se caractérise par une prédominance sur le territoire facial inférieur et l'absence du signe de Charles Bell."
        },
        {
            questionText: "Devant une paralysie faciale périphérique idiopathique, la conduite a tenir est basée sur :",
            options: [
              "une prescription d'une corticothérapie pour une longue durée",
              "une protection de la cornée par un collyre",
              "un examen clinique d'ORL",
              "une décompression chirurgicale en urgence du nerf facial"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La prise en charge inclut une corticothérapie, la protection de la cornée et un examen ORL."
        },
        {
            questionText: "Une paralysie faciale dite périphérique est provoquée :",
            options: [
              "par une lésion du nerf facial au-dessous de son noyau",
              "par une otite moyenne chronique",
              "par un AVC",
              "par le climat chaud dit « à frigoré »"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "La paralysie faciale périphérique est due à une lésion du nerf depuis son noyau jusqu'à sa terminaison, et peut être causée par une otite moyenne chronique."
        },
        {
            questionText: "La paralysie faciale virale zostérienne est :",
            options: [
              "Due a la résurgence du VZV (virus varicelle zona) du ganglion géniculé",
              "Une paralysie faciale centrale",
              "Associée à une éruption cutané vésiculaire dans la zone de Ramsay Hunt",
              "Précédée par des douleurs orbitaires"
            ],
            correctOptionIndexes: [0],
            explanation: "La paralysie faciale zostérienne (syndrome de Ramsay Hunt) est due à la résurgence du virus varicelle-zona (VZV) au niveau du ganglion géniculé."
        },
        {
            questionText: "Le traitement médical de la paralysie faciale fait appel :",
            options: [
              "Une antibiothérapie d'urgence",
              "Une corticothérapie précoce et forte dose",
              "Traitement antiviral",
              "Une vitaminothérapie BBL"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le traitement médical peut inclure une corticothérapie précoce à forte dose et un traitement antiviral. La vitaminothérapie B1, B6 est aussi mentionnée."
        }
    ]
  },
  {
    title: "Tumeurs bénignes de la muqueuse buccale",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Concernant le kératokyste :",
            options: [
              "La forme orthokérathosique est moins fréquente et peu agressive",
              "C'est le plus fréquent des kystes des maxillaires",
              "Sa présence avec neavibasocellulaire constituent le syndrome de Gardner",
              "Il peut englober une dent incluse"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "La forme orthokérathosique du kératokyste est moins fréquente. Il peut englober une dent incluse. Il représente 14% des kystes et sa présence avec la naevomatose basocellulaire constitue le syndrome de GORLIN GOLTZ, non Gardner."
        },
        {
            questionText: "Dans l'hyperplasie d'origine traumatique ou hyperplasie en feuillet de livre:",
            options: [
              "Il est important de confisquer la prothèse à l'origine du traumatisme.",
              "Il est important de réaliser une biopsie avant la chirurgie",
              "L'examen anatomopathologique n'est pas obligatoire",
              "L'examen anatomopathologique est obligatoire"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Il faut confisquer la prothèse traumatisante et l'examen anatomopathologique est obligatoire."
        },
        {
            questionText: "L'épulis est une tumeur bénigne de la muqueuse buccale:",
            options: [
              "Elle est due à une épine irritative dentaire",
              "Peut-être dues à un trouble hormonal",
              "Peut être d'origine virale à savoir le Papilloma virus (HPV)",
              "S'accompagne d'adénopathies satellite"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'épulis peut être due à une irritation dentaire ou à un trouble hormonal, mais ne s'accompagne jamais d'adénopathies satellites."
        },
        {
            questionText: "Le papillome:",
            options: [
              "S'accompagne d'une lésion osseuse sous-jacente.",
              "Siège exclusivement au niveau de la gencive.",
              "Peut-être spontanément résolutif.",
              "Est cliniquement confondu avec la verrue vulgaire"
            ],
            correctOptionIndexes: [3],
            explanation: "Le papillome est cliniquement confondu avec la verrue vulgaire."
        },
        {
            questionText: "L'epulis fissuratum:",
            options: [
              "A pour origine les papillomavirus humains.",
              "Est fréquente chez les sujets porteurs de prothèses amovibles inadaptées.",
              "Apparait au cours de la grossesse, après le 3ème mois.",
              "Prédomine dans la face interne des joues."
            ],
            correctOptionIndexes: [1],
            explanation: "L'epulis fissuratum (ou hyperplasie en feuillet de livre) est fréquente chez les porteurs de prothèses inadaptées."
        },
        {
            questionText: "Le traitement des tumeurs bénignes de la cavité buccale est essentiellement :",
            options: [
              "Médical",
              "Chirurgical",
              "Étiologique",
              "Symptomatique"
            ],
            correctOptionIndexes: [1],
            explanation: "Le traitement est essentiellement chirurgical pour des raisons vitales, fonctionnelles, esthétiques ou psychologiques."
        },
        {
            questionText: "Les condylomes acuminés, cocher la ou les réponses justes :",
            options: [
              "C'est une affection sexuellement transmissible",
              "Siege rare dans la cavité buccale où il peut être la conséquence d'une auto-inoculation à partir d'un condylome acuminé génital",
              "Il s'observe avec une incidence accrue chez les malades infectés par le VIH",
              "Aspect radio-clinique proche de l'hyperplasie du dentier"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Le condylome acuminé est une IST, son siège buccal est rare, et son incidence est accrue chez les patients VIH+."
        },
        {
            questionText: "Les hémangiomes et les malformations vasculaires sont caractérisés par :",
            options: [
              "La coloration de la lésion",
              "Le risque hémorragique",
              "L'incertitude évolutive et thérapeutique",
              "l'évolution rapide et incontrôlée"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Les hémangiomes sont caractérisés par leur coloration qui disparaît à la vitropression et par le risque hémorragique."
        },
        {
            questionText: "La diapneusie est :",
            options: [
              "Une pseudotumeur bénigne hyperplasique de la gencive",
              "Provoquée par des phénomènes de succion ou d'aspiration",
              "De siège de prédilection: la face interne de la joue",
              "Rencontré chez la femme enceinte"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La diapneusie est provoquée par des phénomènes de succion et siège le plus souvent sur la face interne des joues, des lèvres ou les bords de la langue."
        },
        {
            questionText: "La botrymycome :",
            options: [
              "Est rencontré chez le nouveau-né",
              "Est une réponse inflammatoire exagérée, face à un traumatisme ou suite à une effraction",
              "Serait associé à un facteur microbien (botryomyces)",
              "Résulte de l'accumulation de liquide dans l'espace sous gingival entourant la dent en éruption"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La botryomycome est une réponse inflammatoire exagérée à un traumatisme et serait associée à un facteur microbien (botryomyces). La description D correspond au kyste d'éruption."
        },
        {
            questionText: "Lesquels de ces médicaments peuvent être à l'origine d'une hypertrophie gingivale",
            options: [
              "céphalosporine",
              "ciclosporine",
              "naproxéne",
              "nifedipine"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "L'hypertrophie gingivale médicamenteuse est souvent associée à la Ciclosporine A (immunosuppresseur) et la Nifédipine (antagoniste du calcium)."
        }
    ]
  },
  {
    title: "Tumeurs bénignes des maxillaires",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "A propos des tumeurs bénignes des maxillaires :",
            options: [
              "Les tumeurs odontogènes se développent à partir des tissus embryologiques similaires au reste du squelette osseux",
              "La présence d'ostéomes multiples doit faire recherche le syndrome de GARDNER",
              "L'améloblastome appelée anciennement adénoaméloblastome est tumeur épithéliale",
              "L'odontome complexe est souvent à l'origine d'un retard d'éruption des incisives"
            ],
            correctOptionIndexes: [1],
            explanation: "La présence d'ostéomes multiples est un signe évocateur du syndrome de Gardner. L'odontome composé (et non complexe) est souvent lié à un retard d'éruption des incisives."
        },
        {
            questionText: "L'améloblastome :",
            options: [
              "Se présente comme une tuméfaction mandibulaire isolée",
              "Se présente comme une tuméfaction maxillaire isolée",
              "Dont le diagnostic différentiel se discute avec le kyste folliculaire",
              "Peut présenter une agressivité locale à cause du caractère récidivant"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "L'améloblastome se présente souvent comme une tuméfaction mandibulaire, son diagnostic différentiel inclut le kyste folliculaire, et il est connu pour son agressivité locale et son caractère récidivant."
        },
        {
            questionText: "La tumeur odontogénique adenomatoide (TOA) :",
            options: [
              "survient chez de jeunes patients dans 2/3 de cas",
              "est de localisation mandibulaire dans 2/3 des cas",
              "peut contenir des foyers radio-opaques",
              "est associée à des prémolaires incluses dans 2/3 des cas"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La TOA (anciennement adéno-améloblastome) survient chez de jeunes patients et peut contenir des foyers radio-opaques. Son siège de prédilection est la région canine maxillaire, non mandibulaire."
        },
        {
            questionText: "L'ostéome :",
            options: [
              "Est une lésion bénigne, propre au massif facial",
              "Est dit périphérique, s'il prend naissance à partir de la médullaire",
              "Se manifeste cliniquement par une tuméfaction de croissance rapide",
              "Fait partie des signes cliniques du syndrome de Gardner"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "L'ostéome est une lésion bénigne propre au massif facial et fait partie des signes du syndrome de Gardner. Sa croissance est lente."
        },
        {
            questionText: "Un améloblastome peut se développer à partir de l'épithélium d'un des kystes suivants :",
            options: [
              "radiculaire",
              "dentigére ou folliculaire",
              "résiduel",
              "parodental latéral"
            ],
            correctOptionIndexes: [1],
            explanation: "Il existe une théorie sur l'origine de l'améloblastome à partir de la paroi des kystes dentigères (folliculaires)."
        },
        {
            questionText: "L'odontome :",
            options: [
              "Est une tumeur épithéliale",
              "Se manifeste radiologiquement par un géode uniloculaire",
              "Entraine le plus souvent, un retard d'éruption dentaire",
              "Ressemble à une tumeur sans présenter les caractéristique vraies de la tumeur"
            ],
            correctOptionIndexes: [2, 3],
            explanation: "L'odontome est une hamartome (malformation pseudo-tumorale), pas une vraie tumeur. Il entraîne souvent un retard d'éruption dentaire."
        },
        {
            questionText: "Dans les tumeurs et pseudotumeurs non odontogénes des maxillaires on retrouve",
            options: [
              "Les tumeurs vasculaires",
              "Le fibrome cémento-ossifiant ( fibrome cémentifiant)",
              "Le cémentoblastome bénin",
              "Les tumeurs et pseudotumeurs riches en cellules géantes"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Les tumeurs vasculaires, le fibrome cémento-ossifiant et les tumeurs riches en cellules géantes sont des tumeurs non odontogènes. Le cémentoblastome est une tumeur odontogène."
        },
        {
            questionText: "Caractéristiques de processus tumoral bénin",
            options: [
              "Lenteur d'évolution",
              "Respectant ou refoulant les éléments voisins",
              "Les éléments cellulaires du tissu tumoral rappellent morphologiquement et sur le plan fonctionnel la cellule d'origine il n'y a pas d'anomalie cyto-nucléaire",
              "Bonne évolution après traitement, avec un pronostic généralement bon"
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "Toutes ces caractéristiques décrivent un processus tumoral bénin."
        }
    ]
  },
  {
    title: "Kystes des maxillaires",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Le kyste d'éruption:",
            options: [
              "Se manifeste cliniquement par une voussure d'aspect normal en regard de la dent retenue",
              "Se traduit radiologiquement par une image radioclaire",
              "Est souvent retrouvé chez le jeune enfant",
              "Le traitement de choix est l'abstention"
            ],
            correctOptionIndexes: [2],
            explanation: "Le kyste d'éruption est souvent retrouvé chez le jeune enfant. Cliniquement, c'est une voussure bleuâtre et n'a aucune traduction radiologique. Le traitement peut être l'abstention ou une simple incision."
        },
        {
            questionText: "Un kyste est une :",
            options: [
              "Cavité pathologique",
              "Dont le contenu liquide, semi-liquide, ou aérique",
              "Dont le contenu est principalement tissulaire ou dur",
              "Il est bordé par un épithélium"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Un kyste est une cavité pathologique bordée par un épithélium, contenant un fluide liquide, semi-liquide ou aérique."
        },
        {
            questionText: "Les réservoirs d'épithélium odontogénique sont :",
            options: [
              "Les restes épithéliaux de Malassez,",
              "L'épithélium adamantin réduit.",
              "Les résidus de la lame dentaire.",
              "Le follicule dentaire"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Les trois réservoirs d'épithélium odontogénique sont les restes épithéliaux de Malassez, l'épithélium adamantin réduit, et les résidus de la lame dentaire."
        },
        {
            questionText: "Kératokyste odontogénique :",
            options: [
              "De kyste épidermoide",
              "se développe aux dépens de restes de l'épithélium odontogène",
              "L'histologie est en faveur d une paroi kystique tapissée d’un épithélium non kératinisé",
              "Il se développe aux dépens de restes des bourgeon maxillaires"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Le kératokyste odontogénique est aussi appelé kyste épidermoïde et se développe à partir des restes de l'épithélium odontogène."
        },
        {
            questionText: "le kératokyste odontogénique",
            options: [
              "a une localisation préférentielle mandibulaire",
              "Son potentiel de récidive est faible",
              "son image radiologique contient toujours une dent incluse",
              "le diagnostique différentiel peut se faire avec le kyste dentigere"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le kératokyste a une localisation préférentielle à la mandibule, un potentiel de récidive élevé, et son diagnostic différentiel inclut le kyste dentigère (folliculaire)."
        },
        {
            questionText: "Parmi les affections suivantes quelles sont celles qui ont le plus de risque de transformation maligne :",
            options: [
              "kerato-acanthome",
              "botryomycome",
              "éléphantiasis des gencives",
              "papillomatose orale floride"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Le kérato-acanthome et la papillomatose orale floride présentent des risques de transformation maligne."
        },
        {
            questionText: "kyste radiculaire apical :",
            options: [
              "réalise une géode unique, homogène, appendue à l'apex de la dent vivante",
              "fait suite aux complications infectieuses des pulpopathies non ou insuffisamment traitées",
              "son évolution est lente",
              "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [2],
            explanation: "Le kyste radiculaire apical a une évolution lente. Il est appendu à l'apex d'une dent mortifiée (non vivante)."
        },
        {
            questionText: "L'image radiologique en carafe caractérise :",
            options: [
              "Le développement des résidus d'une paroi kystique",
              "Le kyste résiduel",
              "Le kyste latéral",
              "Se traite par marsupialisation"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "L'image en 'carafe' est caractéristique du kyste résiduel, qui correspond au développement des résidus d'une paroi kystique après extraction de la dent. Le traitement de choix est l'énucléation."
        },
        {
            questionText: "Le kyste d'éruption :",
            options: [
              "Est similaire au kyste péri-coronaire",
              "Est assimilé à un hématome d'éruption",
              "Son traitement fait appel parfois à l'abstention",
              "S'accompagne de lyse osseuse"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le kyste d'éruption est assimilé à un hématome d'éruption et le traitement peut être l'abstention."
        },
        {
            questionText: "La marsupialisation est le traitement :",
            options: [
              "Peut permettre l'éruption spontanée d'une dent mature",
              "Nécessite une biopsie de la paroi kystique a l'occasion de premier temps opératoire",
              "Des kystes radiculo-dentaires",
              "Des kystes épidermoïdes"
            ],
            correctOptionIndexes: [1],
            explanation: "La marsupialisation nécessite une biopsie de la paroi kystique lors du premier temps opératoire. Elle peut permettre l'éruption d'une dent immature (pas mature)."
        },
        {
            questionText: "Le kyste résiduel :",
            options: [
              "Est un kyste radiculo-dentaire inflammatoire",
              "Est caractérise par une image radio opaque",
              "Est similaire au kyste gingival de l'adulte",
              "Se traite par marsupialisation"
            ],
            correctOptionIndexes: [0],
            explanation: "Le kyste résiduel est un kyste radiculo-dentaire inflammatoire qui persiste après l'extraction de la dent causale."
        }
    ]
  },
  {
    title: "Infections spécifiques",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Une infection spécifique de la muqueuse buccale :",
            options: [
                "Est une infection provoquée par un seul germe spécifique produisant toujours la même maladie",
                "Se présente toujours sous le même tableau clinique",
                "Est toujours contagieuse",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [0],
            explanation: "Une infection spécifique est causée par un germe particulier qui provoque généralement un ensemble de symptômes caractéristiques, bien que la présentation clinique puisse varier."
        },
        {
            questionText: "Parmi les infections suivantes la quelle est due au bacille de koch ?:",
            options: [
                "La tuberculose",
                "La syphilis",
                "La condidose buccale",
                "Le paludisme"
            ],
            correctOptionIndexes: [0],
            explanation: "La tuberculose est due au bacille de Koch (Mycobacterium tuberculosis)."
        },
        {
            questionText: "Les condidoses buccales :",
            options: [
                "Sont de diagnostique clinique difficile",
                "Les examens mycologiques sont obligatoires pour établir le diagnostique positif",
                "Sont causées par le candida albicans",
                "Répondent à une antibiothérapie par voie systémique"
            ],
            correctOptionIndexes: [2],
            explanation: "Les candidoses buccales sont causées par le champignon Candida albicans."
        },
        {
            questionText: "La chlamydia est une bactérie ayant la spécificité :",
            options: [
                "De synthétiser des cytolysines pour détruire les hématies",
                "De vivre caché, se multiplier et survivre au sein de la cellule",
                "D'avoir plus de 70 variantes ou sérotypes",
                "D'avoir une capsule de type polysaccharide qui la protège des systèmes de défense"
            ],
            correctOptionIndexes: [1],
            explanation: "Les Chlamydia sont des bactéries intracellulaires obligatoires, ce qui signifie qu'elles vivent et se multiplient à l'intérieur des cellules de l'hôte."
        },
        {
            questionText: "Les condidose buccales sont :",
            options: [
                "Le résultat du passage du saprophytisme au parasitisme",
                "Souvent concomitante à une immunodépression",
                "Font suite à une contamination hématogène",
                "Toutes les réponses sont correctes"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "Les candidoses résultent du passage du Candida de l'état saprophyte à l'état parasite, souvent favorisé par une immunodépression."
        }
    ]
  },
  {
    title: "Prise en charge du patient cardiopathe et/ou sous anticoagulants",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "La prise en charge odontologique d'un patient sous AVK:",
        options: [
          "Se base sur le taux de l'hémoglobine glyquée (HbA1C).",
          "Se base sur la valeur de I'INRC.",
          "Impose la prescription d'une antibioprophylaxie.",
          "Impose la prescription d'une antibiothérapie curative post-extractionnelle."
        ],
        correctOptionIndexes: [1],
        explanation: "A: chez le diabétique"
      },
      {
        questionText: "L'antibioprophylaxie chez les patients présentant une cardiopathie:",
        options: [
          "Est nécessaire en cas de trouble du rythme cardiaque.",
          "Est nécessaire en cas de prothèse valvulaire cardiaque.",
          "Est nécessaire en cas d'antécédent d'endocardite infectieuse.",
          "Consiste à prescrire un antibiotique deux jours avant l'acte opératoire."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A: L'antibioprophylaxie est obligatoire chez les cardiopathies à risque infectieux. D: prescrire un antibiotique 1h/30min avant l'acte (dose flash) car le taux sérique de l'antibiotique le + élevé dans l'organisme est obtenu au bout d'une 30 min à 1h"
      },
      {
        questionText: "Un patient sous anti agrégeants plaquettaires candidat à une extraction dentaire, il est nécessaire:",
        options: [
          "D'arrêter le traitement 48h avant",
          "D'arrêter le traitement 1 semaine avant",
          "D'avoir une NFS avec taux de plaquettes",
          "D'assurer les moyens locaux d'hémostase"
        ],
        correctOptionIndexes: [3],
        explanation: "A/B: A l'heure actuelle, les recommandations ne préconisent pas leur arrêt. Les méthodes locales d'hémostase sont en général efficaces."
      },
      {
        questionText: "Les pathologies cardiaques susceptibles de provoquer un malaise cardio-respiratoire sont:",
        options: [
          "Cardiopathies ischémiques coronariennes.",
          "Antécédents d'endocardite infectieuse",
          "Cardiopathies congénitales cyanogènes",
          "Patient avec greffe cardiaque ayant développé une valvulopathie cardiaque."
        ],
        correctOptionIndexes: [0],
        explanation: "Cardiopathies à risque syncopal : Troubles de rythme, Cardiopathies gênant l’éjection du ventricule gauche, Cardiopathies gênant l’orifice mitral, Porteurs de prothèses valvulaires, Cardiopathies ischémiques coronariennes, Hypertension artérielle pulmonaire"
      },
      {
        questionText: "Les gestes bucco-dentaires classées non invasifs >>> devant un risque d'endocardite infectieuse sont:",
        options: [
          "Pose de digue",
          "Retrait des fils de suture",
          "Scellement de bagues orthodontiques",
          "Anesthésie intra ligamentaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Actes B-D non invasifs (prophylaxie non recommandée) : Traitement des caries superficielles, Préparations prothétiques supra-gingivales sur dents pulpées, Anesthésie locale (sauf l'intra-ligamentaire), Retrait des fils de suture, Prises d'empreintes et de radio, Traitement de fluoration"
      },
      {
        questionText: "L'antibioprophylaxie de l'endocardite infectieuse:",
        options: [
          "Est nécessaire en cas de troubles du rythme cardiaque",
          "Est indiquée devant tout geste bucco-dentaire",
          "Consiste à prescrire une dose unique journalière d'ATB pendant cinq jours",
          "Est indiquée avant une extraction dentaire"
        ],
        correctOptionIndexes: [3],
        explanation: "A: les troubles du rythme cardiaque n'appartiennent pas à la catégorie des cardiopathies à risques infectieux. B: Est indiquée devant les Actes B-D invasifs. C: Consiste à prescrire une dose 1h avant l'acte (dose flash)"
      },
      {
        questionText: "Les vasoconstricteurs sont contre indiqués chez les patients atteints de :",
        options: [
          "Valvulopathie",
          "Antécédent D'IDM (infarctus du myocarde)",
          "Pontage aorto-coronarien",
          "antécédent d'AVCR"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Contre-indications des vasoconstricteurs : Angine Instable, IDM récent (6 mois), Pontage aorto-coronarien récent, Arythmies réfractaires, HTA non contrôlée, Insuffisance cardiaque non contrôlée"
      },
      {
        questionText: "Patient porteur de prothèse valvulaire cardiaque nécessite pour l'extraction de la 46:",
        options: [
          "La prescription d'une antibioprophylaxie",
          "La prescription d'une antibiothérapie massive",
          "Le contrôle de l'INRD.",
          "La demande d'une NES, TPR"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Un patient porteur de prothèse valvulaire cardiaque est parmi les patients ayant un risque élevé de survenue d'une EI (risque infectieux) → d'une antibioprophylaxie et parmi les cardiopathies à risque hémorragique → le contrôle de l'INR"
      },
      {
        questionText: "L'anesthésie tronculaire à l'épine de spix est contre indiquée chez :",
        options: [
          "Le cardiopathie à risque infectieux et hémorragique",
          "Le cardiopathie à risque infectieux et syncopal",
          "Le cardiopathie à risque syncopal et hémorragique",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Dans la question on parle des anomalies squelettiques uniquement donc la réponse D est FAUSSE"
      },
      {
        questionText: "Chez un patient sous Aspégic et Plavix, il faut demander avant l'extraction dentaire:",
        options: [
          "INRB.",
          "TCAC.",
          "NFS et TSD.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Aspégic et Plavix sont des AAP = Pas d'arrêt de traitement. Moyens locaux d'hémostase. A: L'INR est demandé quand il s'agit des AVK"
      },
      {
        questionText: "Pour éviter le risque hémorragique chez un patient sous Sintrom, il faut:",
        options: [
          "Exiger un INR entre 4 et 5",
          "Utiliser un anesthésique avec vasoconstricteur",
          "Exiger un taux de plaquettes supérieur à 50000/mm³",
          "Prescrire une antibioprophylaxie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Sintrom est un AVK (anticoagulant de la famille des antivitamines K) = INR récent inférieur à 4 + Moyens locaux d'hémostase + Contrôle du patient 48 h après"
      },
      {
        questionText: "Les vasoconstricteurs sont contre indiqués chez les patients présentant :",
        options: [
          "Une endocardite infectieuse",
          "IDM récent",
          "HTA contrôlée",
          "Thrombophlébite"
        ],
        correctOptionIndexes: [1],
        explanation: "Cardiopathies à risque syncopal : Troubles de rythme, Cardiopathies gênant l’éjection du ventricule gauche, Cardiopathies gênant l’orifice mitral, Porteurs de prothèses valvulaires, Cardiopathies ischémiques coronariennes, Hypertension artérielle pulmonaire"
      },
      {
        questionText: "L'INR est demandé chez les patients sous :",
        options: [
          "Aspégic 300 mg/j",
          "Sintrom",
          "Plavix",
          "Lovenox",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Sintrom est un AVK = INR obligatoire (INR récent inférieur à 4). Aspégic et Plavix sont des AAP = pas besoin de l'INR. Lovenox est un anticoagulant de la famille des héparines = pas besoin de l'INR"
      },
      {
        questionText: "Les cardiopathies à risque syncopal sont :",
        options: [
          "L'insuffisance mitrale",
          "Le rétrécissement aortique serré",
          "L'angine de poitrine",
          "L'endocardite infectieuse"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Cardiopathies à risque syncopal : Troubles de rythme, Cardiopathies gênant l’éjection du ventricule gauche, Cardiopathies gênant l’orifice mitral, Porteurs de prothèses valvulaires, Cardiopathies ischémiques coronariennes, Hypertension artérielle pulmonaire"
      },
      {
        questionText: "L'utilisation du produit anesthésique avec vasoconstricteur est contre indiquée chez le patient présentant :",
        options: [
          "Un antécédent d'infarctus du myocarde (IDM) récent",
          "Un antécédent d'endocardite bactérienne",
          "Une hypertension artérielle équilibrée",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Contre-indications des vasoconstricteurs : Angine instable, IDM récent (6 mois), Pontage aorto-coronarien récent, Arythmies réfractaires, HTA non contrôlée, Insuffisance cardiaque non contrôlée"
      },
      {
        questionText: "L'antibioprophylaxie chez le cardiopathe à risque d'endocardite bactérienne consiste en la prescription de :",
        options: [
          "2g d'Amoxicilline 1 heure avant l'extraction dentaire",
          "3 g d'Amoxicilline 30 minutes avant l'extraction dentaire",
          "1 g de Pyostacine 1 heure avant l'extraction dentaire",
          "300 mg de Clindamycine 30 minutes avant l'extraction dentaire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Amoxicilline 3g per os ou 2g (patient < 60kg) 1h avant le geste BD. Clindamycine / Pristinamycine 600mg à 1g 1h avant le geste BD"
      },
      {
        questionText: "L'INR est demandé chez le patient cardiaque sous :",
        options: [
          "Un Anti agrégeant plaquettaire",
          "Un Anti vitamine KC.",
          "Un dérivé héparinique"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "Le vasoconstricteur est contre indiqué dans les cas suivants :",
        options: [
          "Angor instable",
          "Insuffisance cardiaque mal contrôlée",
          "Hypertension mal contrôlée",
          "Infarctus de myocarde récent de 6 mois"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Les cardiopathies sous héparine nécessitent :",
        options: [
          "La demande d'un INR récent",
          "La suppression de l'héparine 8 heures avant l'extraction dentaire",
          "L'application des moyens locaux d'hémostase",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Patient sous héparine : Pour des raisons médicales (urgence cardiovasculaire), il est conseillé de le prendre en charge une fois son état stabilisé et remis sous AVK.(L’héparine a une vie très courte donc vous pouvez prendre en charge le patient sous héparine le lendemain matin de sa dernière injection.)"
      },
      {
        questionText: "L'antibiothérapie qui prévient l'endocardite d'Osler :",
        options: [
          "Sera indiquée chez cardiopathie à risque infectieux",
          "Est préconisée chez patient diabétique",
          "Correspond à donner une dose flash d'antibiothérapie tous les jours",
          "Correspond à une prescription antibiotique au long court",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Les cardiopathies à risque infectieux : Prothèse valvulaire cardiaque, Antécédent d’Endocardite Infectieuse, Patient avec greffe cardiaque ayant développé une valvulopathie, Cardiopathie congénitale cyanogène"
      },
      {
        questionText: "L'endocardite infectieuse :",
        options: [
          "Est la conséquence d'une greffe bactérienne sur la paroi externe du cœur.",
          "Est la conséquence d'une greffe bactérienne ou fongique sur un endocarde le plus souvent sain.",
          "Peut survenir en présence d'une pathologie ou prothèse valvulaire.",
          "Peut être engendrée par une extraction dentaire dans certains types de cardiopathies."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L’endocardite infectieuse est la conséquence d’une greffe bactérienne ou fongique sur un endocarde sain ou le plus souvent lésé."
      },
      {
        questionText: "Les gestes bucco-dentaires classés << invasifs >>> devant un risque d'endocardite :",
        options: [
          "Soins parodontaux non chirurgicaux.",
          "Retrait des fils de suture.",
          "Tous les soins dentaires.",
          "Avulsion dentaire."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Ces interventions requièrent une antibioprophylaxie et une asepsie locale : Soins chirurgicaux (avulsion, biopsie…), ODF (scellement des bagues), Soins endodontiques sous digue en une seule séance, Soins parodontaux non chirurgicaux, Pose de digue"
      },
      {
        questionText: "L'antibioprophylaxie de l'endocardite infectieuse :",
        options: [
          "Est indiquée particulièrement chez le patient hypertendu.",
          "Est indiquée chez tous les patients cardiopathes.",
          "Sa durée est de huit jours.",
          "Consiste à prescrire une dose flash d'ATB."
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Un patient sous anti vitamine K candidat à une extraction dentaire, il est :",
        options: [
          "D'arrêter le traitement.",
          "D'avoir un INR récent inférieur à 4",
          "D'avoir un TCK inférieur à 30",
          "D'avoir un TP inférieur à 4 et TCK inférieur à 30."
        ],
        correctOptionIndexes: [1],
        explanation: ""
      }
    ]
  },
  {
    title: "Diabète",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "L'Hémoglobine glyquée (HbA1c):",
        options: [
          "Permet d'évaluer le taux d'hémoglobine dans le sang sur les 2 à 3 derniers mois.",
          "Permet d'évaluer l'équilibre du diabète sur les 2 à 3 derniers mois.",
          "Est normale lorsque son taux est compris entre 7% et 8%.",
          "Permet d'évaluer la concentration du glucose sanguin."
        ],
        correctOptionIndexes: [1],
        explanation: "C : est normal lorsque son taux est compris entre 4% et 6% chez un patient non diabétique et inférieur ou égal à 7 chez un diabétique. D : permet d’évaluer le glucose fixé à l’hémoglobine d’une façon irréversible durant les 120 jours de la vie moyenne d’un globule rouge."
      },
      {
        questionText: "L'hypoglycémie est un état :",
        options: [
          "Correspond à un abaissement de la glycémie <0.5 g/l",
          "Survient le plus souvent chez le diabétique de type 2.",
          "Est favorisée par l'emploi d'un anesthésique adrénaliné.",
          "Risque de survenir, lors des soins, lorsque le patient est à jeun"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B : survient le plus souvent chez le diabétique de type 1"
      },
      {
        questionText: "Le diabète de type 1:",
        options: [
          "Est dû à une destruction progressive des cellules pancréatiques bêta des îlots de Langerhans",
          "Entraîne une carence absolue en insuline",
          "Est dû à une diminution héréditaire ou acquise des capacités d'action de l'insuline",
          "Correspond à une intolérance au glucose survenant pendant la grossesse"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C : c’est le diabète sucré de type 2. D : c’est le diabète gestationnel"
      },
      {
        questionText: "L'Hémoglobine glyquée (HbA1c):",
        options: [
          "Permet d’évaluer le taux d’hémoglobine sur les 2 à 3 derniers mois.",
          "Permet d’évaluer l’équilibre du diabète sur les 2 à 3 derniers mois.",
          "Est un examen biologique demandé en cas de suspicion d’anémie.",
          "Permet d’évaluer la concentration du glucose sanguin au moment du prélèvement"
        ],
        correctOptionIndexes: [1],
        explanation: "Cette mesure permet d’évaluer l’équilibre du diabète sur les 2 à 3 derniers mois : le diabète est considéré comme équilibré lorsque le patient a une HbA1c <7%."
      },
      {
        questionText: "Le diabète est équilibré si :",
        options: [
          "La valeur de HbA1c est ≤7%",
          "La valeur de HbA1c est comprise entre 7 et 8%",
          "La glycémie est comprise entre 0.70 et 1.10 g",
          "La glycémie est comprise entre 0.70 et 1.50g"
        ],
        correctOptionIndexes: [0],
        explanation: "B : indique un déséquilibre léger"
      },
      {
        questionText: "Chez un patient qui présente une hypothyroïdie traitée et contrôlée :",
        options: [
          "Tous les soins sont possibles en respectant les précautions générales.",
          "Une prise en charge hospitalière est nécessaire pour les actes invasifs.",
          "Une antibioprophylaxie est réalisée lors des actes chirurgicaux.",
          "Les anesthésiques avec vasoconstricteur sont à proscrire."
        ],
        correctOptionIndexes: [0],
        explanation: "B/C : chez le patient non traité ou non contrôlé. D : les anesthésies avec vasoconstricteurs sont à proscrire chez le patient hyperthyroïdien non ou mal traité"
      },
      {
        questionText: "Chez un patient diabétique de type 1 bien équilibré :",
        options: [
          "La valeur de l’hémoglobine glyquée est supérieure à 7%",
          "Les avulsions dentaires se feront sous couverture antibiotique",
          "Le patient est considéré comme sain lors des soins bucco-dentaires",
          "L’anesthésie avec vasoconstricteur n’est pas contre-indiquée"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : le diabète est considéré comme équilibré lorsque le patient a une HbA1c <7%. B : couverture antibiotique seulement si mal contrôlé"
      },
      {
        questionText: "Avant de procéder à une avulsion dentaire chez un patient diabétique il convient de :",
        options: [
          "Prévoir une antibioprophylaxie quel que soit l’équilibre de son diabète",
          "Tenir compte de la glycémie à jeun du jour",
          "Tenir compte de la valeur de sa dernière HbA1c",
          "Prendre en compte le risque hémorragique"
        ],
        correctOptionIndexes: [2],
        explanation: ""
      },
      {
        questionText: "L’Hémoglobine glyquée :",
        options: [
          "Est aussi appelée hémoglobine glycosylée",
          "Est symbolisée par l’acronyme HBANC1",
          "Les valeurs normales sont comprises entre 14% et 16%",
          "Reflète la glycémie sur les 3 derniers mois"
        ],
        correctOptionIndexes: [0, 3],
        explanation: ""
      },
      {
        questionText: "Le diabète est considéré comme équilibré lorsque le patient a :",
        options: [
          "Une Hémoglobine glyquée supérieure à 7%.",
          "Le Glucose sérique à jeun est inférieur à 1,26g/L",
          "Aucune des réponses n’est juste"
        ],
        correctOptionIndexes: [2],
        explanation: "le diabète est considéré comme équilibré lorsque le patient a une HbA1c <7%."
      },
      {
        questionText: "Quelle est la sixième complication chronique du diabète :",
        options: [
            "La parodontite"
        ],
        correctOptionIndexes: [0],
        explanation: "la parodontite est considérée comme la sixième complication du diabète"
      },
      {
        questionText: "Les précautions vis-à-vis du risque infectieux ou du retard de cicatrisation :",
        options: [
          "Non usage de vasoconstricteurs",
          "Couverture ATB systématique",
          "Antibioprophylaxie débutée deux jours avant l’avulsion dentaire, poursuivie durant 8j",
          "Antibioprophylaxie en dose unique administrée une heure avant l’avulsion"
        ],
        correctOptionIndexes: [2],
        explanation: "Précautions si diabète non contrôlé : ATBp débutée 2 jours avant et poursuivie 7 jours. A : les vasoconstricteurs ne sont pas contre-indiqués chez un patient équilibré"
      },
      {
        questionText: "Le diabète de type 2 est principalement dû :",
        options: [
          "À une absence de sécrétion d’insuline par destruction auto-immune des cellules pancréatiques",
          "À une Insulino-résistance des cellules cibles",
          "Débute en général avant l’âge de 30 ans",
          "Débute en général après l’âge de 40 ans"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "dû à une diminution héréditaire ou acquise des capacités d’action de l’insuline"
      },
      {
        questionText: "Chez le patient diabétique équilibré de type 1 et 2 :",
        options: [
          "L’anesthésie avec vasoconstricteur est contre-indiquée",
          "L’antibioprophylaxie est systématique",
          "Les corticoïdes peuvent être prescrits avec précaution",
          "Anesthésie avec vasoconstricteur n’est pas contre-indiquée"
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "En présence d’une cellulite chez un patient diabétique :",
        options: [
          "Le traitement d’urgence doit être réalisé uniquement chez le patient bien équilibré",
          "Le traitement d’urgence doit être effectué quel que soit l’état d’équilibre du patient",
          "L’extraction dentaire est différée jusqu’à avoir rééquilibré la glycémie",
          "L’extraction dentaire doit être réalisée avec une anesthésie sans vasoconstricteur"
        ],
        correctOptionIndexes: [1],
        explanation: "La cellulite maxillo-faciale constitue une urgence médico-chirurgicale"
      },
      {
        questionText: "Les manifestations bucco-dentaires les plus fréquentes chez le patient diabétique sont :",
        options: [
          "Xérostomie",
          "Caries dentaires",
          "Parodontopathies",
          "Candidose buccale"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Les manifestations bucco-dentaires les plus observées chez le patient diabétique sont :",
        options: [
          "Les candidoses.",
          "Les lésions carieuses et parodontales.",
          "Les tumeurs brunes à cellules géantes.",
          "La sécheresse buccale."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Infections fongiques : à cause d’un dysfonctionnement salivaire et de l’altération des défenses immunitaires... Carie dentaire : lorsque le taux de glycémie est élevé... Xérostomie : la sécheresse buccale est due soit à la diminution de la sécrétion salivaire..."
      },
      {
        questionText: "La prise en charge odonto-stomatologique du patient diabétique :",
        options: [
          "Se base sur la valeur de la glycémie à jeun du jour",
          "Se base sur le taux de l’hémoglobine glyquée HBA1C.",
          "Impose la prescription d’une antibioprophylaxie avant toute extraction dentaire.",
          "Est indispensable chez un patient mal contrôlé afin d’éradiquer tous les foyers infectieux."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Connaître le dernier taux d’HbA1c du patient (valeur normale : 4%<HbA1c<6%)."
      },
      {
        questionText: "Hyperthyroïdie :",
        options: [
          "Est en rapport avec une forte production des T3 et T4.",
          "Expose le patient à un risque hémorragique sévère.",
          "Se manifeste au niveau de la sphère oro-faciale par l’apparition de tumeurs brunes",
          "Impose l’utilisation de produits anesthésiques sans vasoconstricteur chez les patients à risque élevé."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L’hyperthyroïdie : (thyrotoxicose) L’hyperthyroïdie est caractérisée par un excès de T3 et de T4... Se manifeste au niveau de la sphère oro-faciale par Exfoliation précoce des dents"
      }
    ]
  },
  {
    title: "FEMME ENCEINTE",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "L'anesthésie de choix chez la femme enceinte lors d'une avulsion dentaire est :",
        options: [
          "L'articaine.",
          "La mépivacaine.",
          "La prilocaïne.",
          "La bupivacaine."
        ],
        correctOptionIndexes: [0],
        explanation: "l'articaine: il s'agit de la molécule la moins toxique pour le fœtus, en raison de son faible taux de passage placentaire (<25%); ce qui en fait la molécule de choix chez la femme enceinte"
      },
      {
        questionText: "CHEZ LA FEMME ALLAITANTE le medicament a prescrire sans resque est :",
        options: [
          "La clindamycine",
          "Augmentin",
          "Aciclovir",
          "Corticotherapie prolongee"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "Les pathologies bucco-dentaires pouvant s'observer chez la femme enceinte sont :",
        options: [
          "La fluorose.",
          "La gingivite gravidique.",
          "L'hyposialie.",
          "Les caries dentaires."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Répercussions buccales: Gingivite gravidique, Epulis gravidique, Caries dentaires et abrasions, Mobilités dentaires, Modifications salivaires, Les parodontites"
      },
      {
        questionText: "L'utilisation des vasoconstricteurs chez la femme enceinte est",
        options: [
          "Autorisée",
          "Contre indiquée",
          "A éviter au premier trimestre",
          "Recommandée."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les vasoconstricteurs sont autorisés chez la femme enceinte, toutefois, il est recommandé : d'aspirer avant d'injecter et de préférer une concentration à 1/100000"
      },
      {
        questionText: "Les médicaments à ne pas prescrire chez la femme enceinte sont",
        options: [
          "Les salicylés",
          "Les macrolides",
          "Les tétracyclines",
          "Le paracétamol"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les salycilés et AINS: Ces molécules présentent un risque de fœtotoxicité et surtout en fin de grossesse."
      },
      {
        questionText: "Les caries dentaires chez la femme enceinte sont dues:",
        options: [
          "Au PH salivaire acide",
          "Aux vomissements",
          "Au manque de brossage",
          "A l'augmentation de la sécrétion salivaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "La prise en charge odontologique d'une femme enceinte doit tenir compte des précautions suivantes: QCS",
        options: [
          "Usage de l'anesthésie sans vasoconstricteur",
          "Installer la patiente en décubitus latéral droit pour éviter le syndrome cave",
          "Le traitement d'urgence doit être effectué quel que soit le stade de la grossesse",
          "Aucune de ces précautions n'est à prendre"
        ],
        correctOptionIndexes: [2],
        explanation: "A LES VASO CONSTRICTEUR SONT AUTORISER. B INSTALLER LE PATIENT EN DECUBITUS LATERAL GAUCHE"
      },
      {
        questionText: "Les soins dentaires chez la femme enceinte sont ::",
        options: [
          "Contre-indiqués au premier trimestre",
          "Souhaitables au deuxième trimestre",
          "Déconseillés au troisième trimestre",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A: le 1er trimestre peut être mis à profit pour évaluer l'état bucco-dentaire... B: Cette période est la plus appropriée pour réaliser les soins... C: risque d'accouchement prématuré devient élevé au cours des 2 derniers mois de la grossesse"
      },
      {
        questionText: "L'extraction dentaire chez la femme enceinte est",
        options: [
          "Contre-indiquée au troisième trimestre sous peine de survenue du « syndrome cave »",
          "Doit se faire sans anesthésie tronculaire pour l'extraction des molaires mandibulaires afin de minimiser le passage du produit anesthésique à travers la barrière placentaire",
          "Doit être reportée et réalisée juste après l'accouchement",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les précautions lors des soins dentaires chez la femme enceinte sont",
        options: [
          "Installer la patiente en décubitus latéral droit, pour éviter l'hypotension à l'origine de malaise",
          "Renoncer à l'emploi des vasoconstricteurs",
          "Limiter la dose maximale de Lidocaïne à quatre capsules",
          "Éviter la prescription d'AINS après le cinquième mois révolu"
        ],
        correctOptionIndexes: [2],
        explanation: "A: Installer la patiente en décubitus latéral gauche... B: Les vasoconstricteurs sont autorisés... C: Ils sont à éviter au cours des deux premiers trimestres de la grossesse et formellement contre-indiqués au cours du troisième."
      },
      {
        questionText: "Les médications prescrites autorisées pendant la grossesse sont",
        options: [
          "L'amoxicilline",
          "Le Tramadol",
          "La vitamine A",
          "Le paracétamol",
          "L'aspirine"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les antibiotiques et les antalgiques habituellement prescrits dans le cadre des soins buccodentaires ne sont pas contre-indiqués durant toute la grossesse."
      },
      {
        questionText: "L'extraction dentaire chez la femme enceinte",
        options: [
          "Est contre indiquée car les anesthésiques traversent la barrière placentaire",
          "Comporte risque d'avortement ou d'accouchement prématuré",
          "Doit être effectuée de n'importe quel stade de la grossesse dans le cas d'une urgence",
          "Est souhaitable au 2ème trimestre",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "La prescription médicale chez la femme enceinte est guidée par",
        options: [
          "Essentiellement, l'efficacité de la molécule",
          "Le stade de la gestation",
          "La concentration du passage de la molécule à travers la barrière placentaire",
          "Effet tératogène des médicaments",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Durant la 1ère trimestre de grossesse",
        options: [
          "Tous les soins sont possibles",
          "Seuls les soins d'urgence sont permis",
          "Le risque élevé de tératogénicité est plus élevé",
          "Tous les soins sont reportés après l'accouchement"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Durant les 3 premiers mois, la susceptibilité de l'embryon est accrue aux influences tératogènes et au risque d'avortement est donc pour les traitements invasifs, seules seront réalisées les thérapeutiques d'urgence."
      },
      {
        questionText: "L'utilisation des anesthésiques locaux chez la femme enceinte :",
        options: [
          "Seulement certaines molécules sont utilisées",
          "Présentent un risque toxique pour le fœtus",
          "Présentent un risque toxique pour la mère",
          "Ne présente aucun risque",
          "Ne passent pas la barrière placentaire."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "On distingue dans l'ordre croissant de toxicité... l'articaine: il s'agit de la molécule la moins toxique... suivie par la lidocaine... la bupivacaine: présente un risque de toxicité cardiaque pour le fœtus... la spartocaine mépivacaine et prilocaine sont totalement contre-indiquées..."
      },
      {
        questionText: "Chez la femme enceinte :",
        options: [
          "Les anesthésiques locaux sans vasoconstricteurs ne franchissent pas la barrière placentaire, ce qui les préfère de l'anesthésie avec vasoconstricteur.",
          "L'anesthésie générale est préférable durant toutes les phases de la gestation",
          "L'anesthésie avec vasoconstricteur est formellement contre indiquée",
          "Une quantité minimale doit être utilisée avec aspiration extra vasculaire"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Chez la femme enceinte, les actes dentaires urgents doivent être assurés durant:",
        options: [
          "Le 1er trimestre.",
          "Le 2ème trimestre.",
          "Le 3ème trimestre.",
          "Toute la période de grossesse."
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Le bilan biologique à demander chez la femme enceinte est le suivant :",
        options: [
          "Taux d'hémoglobine.",
          "Taux de plaquettes sanguines.",
          "TP, TCK.",
          "Taux de polynucléaires neutrophiles.",
          "INR récent."
        ],
        correctOptionIndexes: [0],
        explanation: "on observe une diminution de la concentration en hémoglobine responsable d'une anémie dite physiologique de la grossesse. Avant toute procédure comportant un risque de saignement buccal, il est important d'explorer le taux d'hémoglobine (une FNS sera demandée)."
      }
    ]
  },
  {
    title: "TRAUMATISMES DENTAIRES",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "L'expulsion dentaire",
        options: [
          "Est un déplacement latéral de la dent.",
          "Concerne souvent les dents matures.",
          "Le diagnostic différentiel se fait avec l'intrusion dentaire totale.",
          "A un pronostic qui dépend du temps extra alvéolaire et du milieu de conservation."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : c'est un déplacement de la dent en dehors de son alvéole. B : concerne souvent les dents immatures du fait de la racine soit courte et de la laxité ligamentaire particulière de ces dents"
      },
      {
        questionText: "Quelles sont les propositions exactes concernant la réimplantation dentaire ?",
        options: [
          "Il faut gratter la surface radiculaire de la dent afin de la nettoyer",
          "Si la dent est mature la revascularisation pulpaire est possible.",
          "La durée de la contention est de 4 semaines s'il y a une fracture alvéolaire associée.",
          "Il ne faut jamais réimplanter une dent temporaire expulsée."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : il ne faut jamais gratter sa surface... B : en cas d'une dent immature l'apex est ouvert permet une éventuelle revascularisation pulpaire"
      },
      {
        questionText: "Dans les traumatismes alvéolo-dentaires",
        options: [
          "Les luxations sont plus fréquemment retrouvées pour les dents permanentes immatures.",
          "Les fractures sont majoritaires pour les dents permanentes matures.",
          "Les dents du secteur postérieur sont les plus vulnérables.",
          "Les adultes sont fortement exposés aux traumatismes dentaires et alvéolaires."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "A : Elle est fréquente au niveau des dents immatures... C : Les dents les plus fréquemment touchées sont les incisives centrales supérieures... D : En denture temporaire, ce sont surtout les chutes liées à l'apprentissage de la marche (entre deux et quatre ans)..."
      },
      {
        questionText: "L'examen clinique d'un traumatisé de la face doit :",
        options: [
          "L'examen radiologique de choix est la TDM.",
          "Une réponse négative au test de vitalité est synonyme de mortification pulpaire.",
          "Un déplacement d'un groupe dentaire en monobloc fait suspecter une fracture radiculaire.",
          "Le temps extra-alvéolaire est capital pour le pronostic des dents luxées."
        ],
        correctOptionIndexes: [3],
        explanation: "Rx rétroalvéolaire : Réalisée en 1re intention... Une réponse (-) n'est pas synonyme de mortification (phénomène de sidération pulpaire). Un déplacement d'un groupe dentaire en monobloc fait suspecter une fracture de l'os alvéolaire."
      },
      {
        questionText: "En cas d'expulsion en denture permanente",
        options: [
          "Les cellules pulpaires sont capitales pour le pronostic de ces dents.",
          "Le traitement canalaire est toujours effectué dans les 2 semaines suivant la réimplantation.",
          "La résorption radiculaire est fréquente en cas de réimplantation retardée.",
          "Il faut toujours réimplanter la dent."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : Le délai entre la consultation et la survenue du traumatisme est capital... B : Dans le cas où la dent est immature, le traitement endodontique ne doit pas commencer sauf s'il y a des signes avérés de nécrose pulpaire."
      },
      {
        questionText: "Le diagnostic différentiel d'une expulsion dentaire se fait avec une QCSA",
        options: [
          "Concussion",
          "Intrusion",
          "Subluxation",
          "Luxation latérale"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "en cas de traumatisme alveolo dentaire",
        options: [
          "l examen radiographique de choix est le TDM",
          "UN REPONSE NEGATIVE AU teste de vitalite est le synonyme de mortification pulpaire",
          "Un deplacement de group dentaire en mono bloc fait suspecte un fracture radiculaire",
          "Le temps extra alveolaire est capital pour le pronostic des dents luxees"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les facteurs suivants prédisposent les jeunes enfants aux luxations",
        options: [
          "Maturité de l'os alvéolaire",
          "Présence de parodontopathies",
          "Rhisalyse physiologique",
          "Proalvéolie supérieure"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les facteurs suivants prédisposent les jeunes enfants aux luxations : la plasticité de l'os alvéolaire ; la faiblesse relative du ligament parodontal ; l'anatomie des racines... leur résorption physiologique."
      },
      {
        questionText: "Le diagnostic différentiel d'une extrusion se fait avec",
        options: [
          "Une concussion",
          "Une fracture radiculaire",
          "Une subluxation",
          "Une luxation latérale"
        ],
        correctOptionIndexes: [1],
        explanation: "Extrusion : Déplacement partiel de la dent hors de l'alvéole, en direction axiale. La dent est mobile et allongée."
      },
      {
        questionText: "Lors d'une contusion dentaire :",
        options: [
          "La dent est mobile.",
          "La dent se déplace légèrement en dehors de l'alvéole.",
          "La dent est sensible aux percussions.",
          "Le temps écoulé entre moment de l'accident et la consultation est primordial."
        ],
        correctOptionIndexes: [2],
        explanation: "Contusion : Consiste en une ecchymose... Le patient se plaint de douleurs au moindre contact. Les percussions axiales et transversales sont très positives."
      },
      {
        questionText: "La luxation extrusive",
        options: [
          "Correspond à un déplacement apical de la dent.",
          "Correspond à un déplacement vestibulo-lingual de la dent.",
          "S'accompagne toujours d'une fracture alvéolaire.",
          "S'accompagne d'une forte mobilité."
        ],
        correctOptionIndexes: [3],
        explanation: "Déplacement partiel de la dent en dehors de son alvéole (en direction coronaire). ... La dent est mobile."
      },
      {
        questionText: "Devant la luxation latérale d'une 21 sans fracture alvéolaire, il faut",
        options: [
          "Repositionner la dent par pression bidigitale.",
          "Faire une contention rigide pour une durée de 3 semaines.",
          "Contention semi-rigide pour une durée de 3 mois.",
          "Systématiser le traitement canalaire à l'hydroxyde de calcium."
        ],
        correctOptionIndexes: [0],
        explanation: "Repositionnement de la dent dans son alvéole + contention semi-rigide pendant 3 à 4 semaines..."
      },
      {
        questionText: "Devant une expulsion dentaire, le pronostic dépend essentiellement du",
        options: [
          "Temps extra alvéolaire",
          "Milieu de conservation",
          "La prise d’anti-inflammatoires",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Soit dent permanente exposée < 1h au sec ou conservée dans un milieu de conservation, soit dent permanente exposée > 1h au sec."
      },
      {
        questionText: "Devant un traumatisme alvéolo-dentaire, l'examen radiologique de choix est",
        options: [
          "Le scanner",
          "Le rétro alvéolaire",
          "Le maxillaire défilé",
          "Le panoramique"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "La luxation intrusive est",
        options: [
          "Un déplacement apical de la dent",
          "Un déplacement vestibulo-lingual de la dent",
          "Peut s'accompagner d'une fracture alvéolaire",
          "Fait suite à une fracture radiculaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La force du choc entraîne un déplacement axial de la dent vers le fond de l’alvéole... Elle provoque un écrasement du paquet vasculo-nerveux... et s’associe à une fracture alvéolaire très souvent."
      },
      {
        questionText: "Les milieux de conservation en cas d’expulsion sont",
        options: [
          "Le sang",
          "La salive",
          "Le sérum physiologique",
          "L’hydroxyde de calcium"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’un des meilleurs milieux... est l’HBSS... Si l’HBSS n’est pas disponible, le lait apparaît comme la meilleure alternative, suivie par la salive et le sérum physiologique."
      },
      {
        questionText: "En cas d'intrusion d'une dent mature",
        options: [
          "La vitalité de la dent est surveillée en cas d’éruption spontanée",
          "Le traitement endodontique n’est envisagé qu’en cas de nécrose",
          "Le pronostic de la vitalité pulpaire est favorable si le déplacement est inférieur à 7 mm",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Chez les dents avec édification radiculaire incomplète, la revascularisation pulpaire peut se produire. Chez les dents ayant terminé l’édification radiculaire, la pulpe devient presque toujours nécrotique."
      },
      {
        questionText: "En cas de subluxation d'une incisive centrale mature",
        options: [
          "La dent est mobile et déplacée",
          "Le saignement sulculaire est souvent présent"
        ],
        correctOptionIndexes: [1],
        explanation: "Une subluxation est un déplacement de celle-ci."
      },
      {
        questionText: "Dans le cas d'une luxation latérale d'une dent mature",
        options: [
          "La dent est déplacée verticalement vers le bord occlusal",
          "La dent est bloquée dans l’alvéole",
          "Le test à la percussion donne, le plus souvent, un son métallique",
          "La dent est déplacée, habituellement, en direction palatine, linguale ou vestibulaire"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La dent est déplacée en position palatin/linguale ou en direction labiale. La dent est souvent immobile dans cette nouvelle position car bloquée, d’où l’obtention d’un son métallique à la percussion."
      }
    ]
  },
  {
    title: "PATIENT SOUS CHIMIOTHÉRAPIE",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Les actes invasifs prévus chez le patient traité par chimiothérapie peuvent être réalisés :",
        options: [
          "Le 6ème jour de la cure.",
          "Avant la chimiothérapie.",
          "En inter-cure dans le cadre de l'urgence.",
          "En phase de rémission."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "A: Les soins dentaires invasifs peuvent être réalisés seulement lorsque les valeurs hématologiques s’améliorent... en intercure (correspondant à la semaine précédant une nouvelle cure). ...après 10 à 15 jours de la cure précédente..."
      },
      {
        questionText: "Le traitement de la mucite post-chimiothérapie repose sur :",
        options: [
          "Des bains de bouche antiseptiques.",
          "Une biopsie.",
          "L’application d’un anesthésique local en gel.",
          "La réalisation d’un examen bactériologique."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Traitement des mucites : ...bains de bouche au bicarbonate de sodium... Traitement de la douleur : à l’aide de gels à base d’anesthésiques, comme la Xylocaïne visqueuse..."
      },
      {
        questionText: "La toxicité liée à la chimiothérapie :",
        options: [
          "Est dose-dépendante",
          "Induit des ulcérations buccales et des mucites qui apparaissent aux environs de J3-J5.",
          "Conduit à un tableau d’hypo- ou d’aplasie médullaire qui s’installe entre le 5ème et le 12ème jour.",
          "Est irréversible."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La toxicité de la chimiothérapie est dose-dépendante... Le Méthotrexate : induit des ulcérations buccales et des mucites."
      },
      {
        questionText: "Lors de la chimiothérapie, les risques encourus lors d’une prise en charge en stomatologie sont d’ordre :",
        options: [
          "Hémorragique lié à la thrombopénie",
          "Infectieux lié à la leucopénie",
          "De toxicité médicamenteuse lié à la prescription médicamenteuse",
          "De contamination virale croisée"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "La chimiothérapie est responsable des effets secondaires suivants :",
        options: [
          "Des atrophies dues à la leucopénie",
          "Des infections dues à la thrombopénie",
          "Des hémorragies dues à l’anémie",
          "Des infections dues à la leucopénie"
        ],
        correctOptionIndexes: [3],
        explanation: "La leucopénie entraîne la survenue d’ulcérations et d’infections. La thrombopénie, la survenue d’hémorragies. L’anémie est responsable d’atrophie."
      },
      {
        questionText: "Après l’arrêt de la chimiothérapie : QCSA.",
        options: [
          "La prise en charge odonto-stomatologique est tributaire de la normalisation des constantes hématologiques",
          "Les risques hémorragiques et infectieux persistent",
          "Les extractions dentaires sont proscrites",
          "La sécheresse buccale persiste"
        ],
        correctOptionIndexes: [0],
        explanation: "Après chimiothérapie, toutes les valeurs hématologiques sont à nouveau normales, il n’y a donc plus aucune contre-indication aux soins dentaires..."
      },
      {
        questionText: "Le rôle du médecin dentiste avant la chimiothérapie anticancéreuse consiste en :",
        options: [
          "La prescription d’une fluorprophylaxie",
          "D’éradiquer tous les foyers infectieux",
          "De refroidir les foyers infectieux latents",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "La mise en état de la cavité buccale est d’autant plus indispensable... Supprimer les foyers infectieux par extraction ou soins conservateurs..."
      },
      {
        questionText: "Patient traité par chimiothérapie, dont la dernière cure remonte à 20 jours, consulte pour une extraction dentaire, pour cela avant, il faut demander systématiquement :",
        options: [
          "Un MRB.",
          "Une NFSC.",
          "Une Radio panoramique",
          "Un bilan d’hémostase complet"
        ],
        correctOptionIndexes: [1],
        explanation: "Les soins dentaires invasifs peuvent être réalisés seulement lorsque les valeurs hématologiques s’améliorent (NFS=WBC>2000/mm³ PLT>80000/mm³)..."
      },
      {
        questionText: "Pendant la chimiothérapie, les gingivites ulcéreuses ou ulcéronécrotiques sont en relation avec :",
        options: [
          "La neutropénie",
          "La calcémie",
          "L’hypoglycémie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Le traitement curatif d’une mucite installée associe :",
        options: [
          "Les bains de bouche avec un antifongique",
          "Les bains de bouche avec un antibiotique",
          "Les bains de bouche avec un corticoïde",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Des bains de bouche... à l’aide de solutions alcalines (bicarbonate de soude), associées à un antifongique (mycostatine, amphotéricine)."
      },
      {
        questionText: "Pendant la chimiothérapie, les extractions dentaires ne sont pas autorisées à cause du risque de :",
        options: [
          "Douleurs post-extractionnelles",
          "Alvéolites post-extractionnelles",
          "Hémorragies post-extractionnelles",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Deux risques majeurs doivent guider la conduite à tenir...: le risque hémorragique lié à la thrombopénie et le risque infectieux lié à la leucopénie et neutropénie."
      },
      {
        questionText: "Les effets toxiques aigus de la chimiothérapie sur l’organisme sont :",
        options: [
          "Une thrombopénie avec un risque infectieux et hémorragique",
          "Une toxicité vésicale avec une cystite hémorragique",
          "Une alopécie et une réfrigération du cuir chevelu",
          "Une toxicité pulmonaire",
          "Une stomatite et une destruction de l’épithélium buccal"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La thrombopénie, la survenue d’hémorragies."
      },
      {
        questionText: "Le risque hémorragique chez un patient sous chimiothérapies est :",
        options: [
          "Mineur, si le nombre des plaquettes est supérieur à 120 000/mm³ (hémostase locale)",
          "Mineur, si le nombre des plaquettes est supérieur à 75 000/mm³ (hémostase locale)",
          "Modéré, si le nombre des plaquettes est égal à 50 000/mm³ (hémostase locale ou une transfusion de plaquette peut être nécessaire)",
          "Majeur, si le nombre des plaquettes est inférieur à 50 000/mm³ (transfusion de plaquettes)",
          "Majeur, si le nombre des plaquettes est inférieur à 25 000/mm³ (transfusion de plaquettes)"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Parmi les complications directes de la chimiothérapie sur la muqueuse orale on retrouve :",
        options: [
          "Les ulcérations",
          "La xérostomie",
          "La chéilite angulaire",
          "La nécrose"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "(Sur la muqueuse BUCCAL ET NON PAS LA CAVITÉ BUCCAL). Grade 3 : ulcérations. Grade 4 : nécrose."
      },
      {
        questionText: "Une extraction dentaire prévue chez une patiente ayant reçu une cure de chimiothérapie il y a 20 jours, il faut systématiquement demander :",
        options: [
          "FNSB.",
          "TPC.",
          "Un bilan d’hémostase complet",
          "INRRéponse : A"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Un patient traité il y a 3 ans par une chimiothérapie anticancéreuse uniquement, il présente :",
        options: [
          "Aucun risque",
          "Un risque infectieux",
          "Un risque hémorragique",
          "Un risque infectieux et hémorragique"
        ],
        correctOptionIndexes: [0],
        explanation: "Après chimiothérapie, toutes les valeurs hématologiques sont à nouveau normales, il n’y a donc plus aucune contre-indication aux soins dentaires..."
      },
      {
        questionText: "Le rôle du médecin dentiste face à un patient avant la chimiothérapie est :",
        options: [
          "D’effectuer un radio-clinique complet",
          "D’éliminer tous les foyers infectieux bucco-dentaires",
          "De réaliser des soins non invasifs uniquement",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Il est indispensable d’éliminer toute source d’infection avant de débuter une chimiothérapie."
      },
      {
        questionText: "Avant la chimiothérapie :",
        options: [
          "Il est préférable d’éliminer toute source d’infection",
          "Les actes chirurgicaux doivent être réalisés au moins une semaine avant le début de la cure",
          "Le bilan dentaire associe un examen clinique et un Scanner",
          "La remise en état de la cavité buccale permet d’éviter l’activation des foyers chroniques"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Toutes les dents atteintes doivent être soignées... Les gestes chirurgicaux... doivent être entrepris au plus tôt... L’idéal serait de réaliser toutes les thérapeutiques... au moins 2 semaines avant le début de la cure..."
      },
      {
        questionText: "Chez un patient en cours de chimiothérapie, se présentant pour l’extraction de la 36 avec un taux de plaquettes à 80000 et de neutrophiles 1900 :",
        options: [
          "L’antibioprophylaxie n’est pas indiquée",
          "L’anesthésie locorégionale peut être utilisée",
          "Les moyens hémostatiques locaux sont indispensables",
          "Les AINS peuvent être utilisés"
        ],
        correctOptionIndexes: [2],
        explanation: "Taux de plaquettes 80000 = risque hémorragique mineur. Taux PNM 1900 = Les patients sous chimiothérapie sont considérés immunodéprimés. Les actes se font sous antibioprophylaxie... Anesthésies loco-régionales contre-indiquées..."
      },
      {
        questionText: "La toxicité de la chimiothérapie :",
        options: [
          "Est particulière à une famille thérapeutique lorsqu’elle est aigüe.",
          "Peut-être d’ordre hématologique aboutissant à une leucopénie.",
          "Entraîne des nausées lorsqu’elle est d’ordre digestif.",
          "Donne lieu à des mucites d’une façon chronique."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Toxicités aiguës : Toxicité hématologique : Anémie, Thrombopénie et leucopénie/neutropénie. Toxicité Digestives : Nausées, vomissements. Toxicité cutanéomuqueuse (mucite, alopécie). Toxicités chroniques : ..."
      },
      {
        questionText: "La chimiothérapie :",
        options: [
          "Adjuvante est réalisée avant un acte chirurgical et/ou radiothérapie.",
          "Est un moyen thérapeutique chirurgical.",
          "Palliative amène la guérison du patient.",
          "Agit tant sur les cellules cancéreuses que sur certaines cellules saines."
        ],
        correctOptionIndexes: [2],
        explanation: "La chimiothérapie est un traitement médical... La chimiothérapie adjuvante, qui est administrée aux patients qui ont déjà eu un traitement primaire... La chimiothérapie palliative, qui a pour objectif de faire régresser ou au moins de ralentir l’évolution..."
      },
      {
        questionText: "La mucite :",
        options: [
          "Affecte plus particulièrement les muqueuses kératinisées.",
          "Est le résultat de l’effet direct cytotoxique de la chimiothérapie.",
          "Est une lésion inflammatoire de la muqueuse oro-pharyngée.",
          "De grade I est caractérisée par l’apparition d’ulcères."
        ],
        correctOptionIndexes: [2],
        explanation: "Elle correspond à... une atteinte superficielle inflammatoire avec des érosions pouvant évoluer en ulcérations. Grade 1 : érythème et muqueuses sèches."
      }
    ]
  },
  {
    title: "Patient sous radiothérapie",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "L’ostéoradionécrose (ORN) : QCSA.",
        options: [
          "Est une nécrose osseuse des maxillaires secondaire à la radiothérapie cervico-faciale.",
          "Est dans 50% d’apparition spontanée.",
          "Touche l’os maxillaire plus que l’os mandibulaire.",
          "Présente un risque qui diminue avec le temps"
        ],
        correctOptionIndexes: [0],
        explanation: "B : Elle peut être d’apparition spontanée ou provoquée... C : Elle touche préférentiellement la mandibule."
      },
      {
        questionText: "L’avulsion dentaire après une radiothérapie cervico-faciale : QCSA.",
        options: [
          "Nécessite une antibiothérapie de couverture d’une semaine.",
          "Doit être non traumatique associée à des sutures.",
          "Peut-être entreprise le plus tôt possible après la fin de l’irradiation.",
          "Nécessite l’association de vasoconstricteurs à l’anesthésie locale"
        ],
        correctOptionIndexes: [1],
        explanation: "N’autoriser les extractions dentaires qu’après 6 mois de la fin de la radiothérapie. Prescrire une antibiothérapie de couverture... 2 jours avant et prolonger... jusqu’à cicatrisation complète (15–20 jours)... Éviter l’utilisation du vasoconstricteur."
      },
      {
        questionText: "Les caries post-radiques :",
        options: [
          "Apparaissent dès la première séance de radiothérapie",
          "Sont la conséquence de l’acidité salivaire",
          "Sont la conséquence de la xérostomie post-radique",
          "Sont moins agressives que les caries classiques"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A : Les lésions débutent dans les 3 mois qui suivent la radiothérapie. D : Ces caries post-radiques se distinguent des caries classiques par leur plus grande agressivité."
      },
      {
        questionText: "Une extraction dentaire après la radiothérapie des VADS :",
        options: [
          "Doit se faire au moins 6 mois après le délai de fin d’irradiation",
          "Doit se faire après une antibioprophylaxie une heure avant",
          "Doit se faire avec une anesthésie avec vasoconstricteur",
          "Doit être suivie de suture des berges alvéolaires"
        ],
        correctOptionIndexes: [0, 3],
        explanation: ""
      },
      {
        questionText: "Parmi les complications de la radiothérapie cervico-faciale nous citons :",
        options: [
          "La xérostomie",
          "La mucite",
          "L’endocardite d’Osler",
          "L’aplasie médullaire"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Complications immédiates : mucite, radiodermite, xérostomie, infections buccales, troubles du goût. Complications tardives : trismus, odontoradionécrose, trouble de la croissance et du développement, anomalies dentaires, ostéoradionécrose."
      },
      {
        questionText: "Les symptômes de l’ostéoradionécrose peuvent se manifester par :",
        options: [
          "Des douleurs avec des fistules cutanées ou muqueuses",
          "Une difficulté à ouvrir la bouche",
          "La présence d’un séquestre osseux",
          "Un os exposé dans la bouche avec des signes de mycoses virales"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "L’ostéite post-radique est :",
        options: [
          "Une séquelle récente et majeure de l’irradiation des maxillaires",
          "Grave et extensive ou bénigne et limitée",
          "Une complication qui peut mettre en jeu le pronostic vital du patient",
          "Dominée par une récidive tumorale de la sphère oro-faciale"
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      },
      {
        questionText: "Un patient irradié pour une tumeur de la langue, consulte pour une extraction dentaire doit prendre :",
        options: [
          "1 g d’amoxicilline 1 heure avant l’extraction",
          "1 g de pyostacine 1 heure avant l’extraction et poursuivre jusqu’à cicatrisation",
          "2 g d’amoxicilline à débuter 2 jours avant l’extraction et à poursuivre jusqu’à cicatrisation muqueuse",
          "2 g d’amoxicilline pendant 10 jours",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "Prescrire une antibiothérapie de couverture à large spectre (amoxicilline) 2 jours avant et prolonger la prise jusqu’à cicatrisation complète (15–20 jours)."
      },
      {
        questionText: "L’anesthésie avec vasoconstricteur est contre-indiquée chez le patient :",
        options: [
          "Candidat à une radiothérapie cervico-faciale",
          "Traité par biphosphate",
          "Irradié pour une néoplasie de l’estomac",
          "Sous chimiothérapie"
        ],
        correctOptionIndexes: [1],
        explanation: "A : après irradiation sur os irradié au-delà de 40 Gy. C : L’estomac est loin de la sphère oro-faciale."
      },
      {
        questionText: "Les manifestations bucco-dentaires de la radiothérapie sont représentées par :",
        options: [
          "Une hyposialie",
          "La limitation de l’ouverture buccale",
          "L’odonto-radionécrose",
          "L’aphtose buccale"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Manifestations : dysgueusie ou hypogueusie, hyposialie, caries post-radiques, mucite, infections oropharyngées, dysfonctions musculaires, altération osseuse."
      },
      {
        questionText: "Un patient irradié présentant une cellulite chronique en rapport avec la 36, l’extraction de cette dernière doit se faire :",
        options: [
          "Le jour même",
          "Sous couverture antibiotique débutée deux jours avant",
          "Après la prise d’une dose flash d’Amoxicilline",
          "Sous anesthésie locorégionale non adrénalinée"
        ],
        correctOptionIndexes: [1],
        explanation: "Aucun acte chirurgical n’est souhaitable pendant la radiothérapie ; en cas d’urgence, le traitement sera discuté avec l’oncologue (dans tous les cas il sera le plus conservateur possible)."
      },
      {
        questionText: "Parmi les complications post-radiques suivantes, laquelle (ou lesquelles) peuvent être responsable(s) d’une radionécrose :",
        options: [
          "Trismus",
          "Odontoradionécrose",
          "Mucite grade 4",
          "Xérostomie"
        ],
        correctOptionIndexes: [1],
        explanation: "L’ORN peut être spontanée ou provoquée (par une odontoradionécrose ; avulsion dentaire ; prothèse mal adaptée…)."
      },
      {
        questionText: "L’ostéoradionécrose (ORN) peut survenir :",
        options: [
          "Chez tous les patients qui ont bénéficié d’une radiothérapie",
          "Plusieurs années après la radiothérapie",
          "Chez les patients irradiés au niveau de la région maxillo-faciale",
          "Spontanément avant la radiothérapie"
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      }
    ]
  },
  {
    title: "Patient immunodéprimé (VIH, Corticothérapie)",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Les manifestations buccales fortement associées à l'infection par le VIH sont :",
        options: [
          "Les candidoses érythémateuses et pseudomembraneuses",
          "La gingivite ulcéronécrotiques aigüe (GUNA)",
          "La leucoplasie orale chevelue (LOC)",
          "Le sarcome de Kaposi"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "La corticothérapie prescrite au long court :",
        options: [
          "Est administrée pendant plus d'un mois.",
          "Consiste en la prescription de ciclosporine, tacrolimus, sirolimus ou d'everolimus.",
          "Peut donner des effets secondaires comme l'ostéoporose et l'hypertension artérielle.",
          "Ne demande aucune précaution particulière par rapport à l'anesthésie."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La ciclosporine, le tacrolimus, le sirolimus et l’évérolimus sont des immunosuppresseurs prescrits pour éviter le rejet du greffon..."
      },
      {
        questionText: "Parmi ces pathologies, lesquelles peuvent entraîner un déficit immunitaire secondaire :",
        options: [
          "Les anomalies génétiques altérant la maturation des lymphocytes",
          "L'infection à HIV",
          "Les déficits héréditaires des cellules phagocytaires",
          "L'insuffisance rénale chronique"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "A/C : parmi les déficits immunitaires primaires."
      },
      {
        questionText: "Parmi les manifestations buccales de l'infection par le VIH ; on cite :",
        options: [
          "Les candidoses",
          "Les poly caries",
          "Les dysmorphies maxillo-mandibulaires",
          "Les gingivites ulcero-nécrotiques"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Manifestations buccales fortement associées : candidoses (érythémateuse et pseudomembraneuse) ; affections parodontales (érythème gingival linéaire, gingivite et parodontite ulcéronécrotiques) ; leucoplasie chevelue ; sarcome de Kaposi ; lymphome non hodgkinien."
      },
      {
        questionText: "Un patient sous corticothérapie au long court :",
        options: [
          "Nécessite systématiquement une couverture antibiotique pour tout acte",
          "Nécessite une dose flash d'antibiotique seulement",
          "Appartient au patient à risque infectieux risque AD.",
          "Appartient au patient à risque infectieux risque BR"
        ],
        correctOptionIndexes: [2],
        explanation: "Les actes invasifs impliquant une cicatrisation de l’os ou de la muqueuse... devront être réalisés sous antibiothérapie, à démarrer deux jours avant l’intervention, et à poursuivre jusqu’à cicatrisation muqueuse (7 à 10 jours)."
      },
      {
        questionText: "La prise en charge des patients sous thérapeutique ciblées (TC) nécessite :",
        options: [
          "Elimination des foyers infectieux bucco-dentaires avant l’instauration d’une (TC)",
          "L’élimination des foyers infectieux bucco-dentaires après l’instauration d’une (TC)",
          "L’arrêt de la (TC) est obligatoire avant un acte invasif",
          "L’arrêt du traitement est obligatoire avant un acte non invasif"
        ],
        correctOptionIndexes: [0],
        explanation: "Elimination des foyers infectieux bucco-dentaires avant l’instauration d’une (TC) à visée immunosuppressive."
      },
      {
        questionText: "Un bilan sérologique suivant « Ag HBs+, Ag HBe+ », correspond à un patient :",
        options: [
          "En phase de guérison de l’hépatite B",
          "En phase d’activité virale, ou de contagiosité",
          "En phase aigüe de la maladie"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "Cochez les signes évocateurs du stade de SIDA maladie :",
        options: [
          "Taux des lymphocytes CD4 > 200",
          "Affections candidosiques récurrentes et persistantes",
          "Risque d’endocardite infectieuse",
          "Apparition de tumeurs malignes (sarcome de Kaposi – lymphomes)",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 3],
        explanation: ""
      },
      {
        questionText: "Le risque de contamination après un accident exposant au sang (AES) lors d’un geste sanglant est proportionnel :",
        options: [
          "À la profondeur de la plaie",
          "À la phase clinique de l’affection (aigüe ou chronique)",
          "Au statut sérologique du patient source",
          "À l’état psychique du praticien"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "Parmi les pathologies suivantes lesquelles provoquent une immunodépression :",
        options: [
          "La cirrhose du foie",
          "Leucémie",
          "Malnutrition",
          "Diabète"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Un patient HIV positif se présente à votre consultation pour cellulite quelle sera votre conduite à tenir :",
        options: [
          "Demander la charge virale",
          "Antibiothérapie probabiliste et contact avec le médecin traitant",
          "Précaution par rapport au risque de transmission croisée",
          "Traitement de la cellulite et extraction de la dent causale",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Une corticothérapie est dite au long cours :",
        options: [
          "Lorsqu'elle dépasse un mois de traitement.",
          "Lorsqu'elle dépasse une semaine de traitement.",
          "Lorsqu'elle dépasse une année de traitement.",
          "Lorsque la dose de corticoïde est supérieure à 10 mg par jour"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Chez un patient VIH positif candidat à l’extraction de la 48 :",
        options: [
          "La tronculaire à la lingual est contre indiquée.",
          "La prescription d’une antibiothérapie de couverture est recommandée",
          "Le risque de complications infectieuses post-extractionnelles est accru au stade C de la maladie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le SIDA correspond au stade avancé de l’infection par le VIH dont l’altération conséquente du système immunitaire se traduit par l’apparition de nombreuses pathologies, notamment de nombreuses infections opportunistes."
      },
      {
        questionText: "Facteurs qui influencent les effets de la thérapie ciblée anticancéreuse sont :",
        options: [
          "Le mode d’administration",
          "L’état de santé général",
          "Le type et la dose utilisée",
          "Le type de rayonnement",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      }
    ]
  },
  {
    title: "INSUFFISANCE RENALE",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Le patient insuffisant rénal chronique présente une pâleur gingivale en rapport avec:",
        options: [
          "Des troubles de l'hémostase",
          "Un déficit dans la production de l'érythropoïétine.",
          "La prise d'anticoagulants lors de l'hémodialyse.",
          "La baisse du débit de filtration glomérulaire."
        ],
        correctOptionIndexes: [1],
        explanation: "Paleur des muqueuse suite à l'anémie"
      },
      {
        questionText: "Le risque potentiellement retrouvé chez le patient greffé rénal est :",
        options: [
          "Le malaise hypoglycémique.",
          "Le retard de cicatrisation.",
          "La susceptibilité aux infections liée aux immunosuppresseurs.",
          "L'hémorragie post-extractionnelle."
        ],
        correctOptionIndexes: [2],
        explanation: "En pratique quotidienne, le praticien peut être confronté à 3 risques chez le patient insuffisant rénal chronique: Le risque infectieux qui il comprend les anomalies leucocytaires, le traitement immunosuppresseur pour les patients transplantés et le risque de transmission virale chez les hémodialysés."
      },
      {
        questionText: "De nombreux risques sont retrouvés chez le patient insuffisant rénal hémodialysé dans notre pratique odonto-stomatologique. Lesquels?",
        options: [
          "Le risque de développer une endocardite infectieuse.",
          "Le risque de transmission virale.",
          "Le risque de toxicité médicamenteuse aux substances néphrologiques.",
          "Le risque syncopal."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "En pratique quotidienne le praticien peut être confronté à 3 risques chez le patient insuffisant rénal chronique: -le risque infectieux -le risque hémorragique -risque lié à la prescription médicamenteuse"
      },
      {
        questionText: "L'insuffisance rénale chronique est définie par",
        options: [
          "Une augmentation progressive et irréversible du débit de filtration glomérulaire (DFG).",
          "Une diminution progressive et irréversible du débit de filtration glomérulaire.",
          "Un taux de DFG> 60 ml/min/1,73 m².",
          "Une augmentation de la clairance en créatinine"
        ],
        correctOptionIndexes: [1],
        explanation: "C: Diminution du DFG: DFG estimé < 60 ml/min/1,73 m2. D: se traduit par un abaissement de la clairance de la créatinine"
      },
      {
        questionText: "La prise en charge odontologique du patient insuffisant rénal QCS",
        options: [
          "Se base sur le taux de l'hémoglobine glyquée (HBA1c).",
          "Impose la prescription d'une antibioprophylaxie.",
          "Impose la prescription d'une antibiothérapie curative post-extractionnelle.",
          "Comporte une éradication de tous les foyers infectieux bucco-dentaires avant une greffe rénale"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Le patient greffé rénal présente une susceptibilité accrue au développement des infections en raison QCS",
        options: [
          "D'un trouble de l'hémostase",
          "Du polymicrobisme de la cavité orale",
          "De la prise d'anticoagulants",
          "De la prescription d'immunosuppresseurs"
        ],
        correctOptionIndexes: [3],
        explanation: "Le risque infectieux sera majoré par les immunosuppresseurs et les corticoïdes prescrits au long cours."
      },
      {
        questionText: "En cas de transplantation rénale",
        options: [
          "Le risque de toxicité médicamenteuse est nul.",
          "Le risque d'infection est nul.",
          "Un bilan bucco-dentaire devra être effectué, avec élimination des foyers infectieux bucco-dentaires après la greffe.",
          "Les actes invasifs devront être précédés d'une antibioprophylaxie"
        ],
        correctOptionIndexes: [3],
        explanation: "L'éradication, impérative, de tous les foyers infectieux dentaires avant la greffe car: Toute infection fait courir le risque de rejet de la greffe rénale."
      },
      {
        questionText: "Les risques potentiellement retrouvés chez un IRC au stade de l'hémodialyse sont",
        options: [
          "La contamination virale",
          "L'hémorragie",
          "La fracture osseuse lors de l'extraction dentaire",
          "La toxicité en cas de surdosage"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Quelles sont les complications de l'insuffisance rénale chronique",
        options: [
          "Hypertension artérielle",
          "Diabète",
          "Accident vasculo-cérébral",
          "Anémie"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "A: complication cardiovasculaire. D: complication hématologique"
      },
      {
        questionText: "Les examens biologiques demandés devant une insuffisance rénale chronique sont",
        options: [
          "Taux de l'hémoglobine glyquée",
          "Taux de l'hémoglobine",
          "INR",
          "TP"
        ],
        correctOptionIndexes: [1],
        explanation: "Lors des extractions dentaires ou actes chirurgicaux: Demander une numération de la formule sanguine (Anémie) avec le taux de plaquettes."
      },
      {
        questionText: "Dans l'insuffisance rénale chronique, une de ces propositions est fausse, laquelle:",
        options: [
          "Le vasoconstricteur n'est pas contre indiqué",
          "Une anesthésie tronculaire sans vasoconstricteur est à éviter",
          "L'antibiothérapie post-extractionnelle n'est pas systématique",
          "Une contamination virale est possible"
        ],
        correctOptionIndexes: [1],
        explanation: "Eviter le surdosage d'anesthésie locale à élimination rénale"
      },
      {
        questionText: "Le risque hémorragique chez le patient hémodialysé est inhérent à:",
        options: [
          "L'héparinothérapie",
          "La thrombopénie",
          "L'altération de la fonction plaquettaire",
          "La nature invasive de l'acte odontologique"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "un trouble de l'adhésion plaquettaire et une thrombopénie chez certains patients, une anémie et l'héparinothérapie chez les hémodialysés."
      },
      {
        questionText: "Parmi ces médications, cochez celle(s) qui ne nécessite(nt) pas d'ajustement dans le cas d'une IRC:",
        options: [
          "Amoxicilline",
          "Augmentin",
          "Paracétamol",
          "Clindamycine"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Amoxicilline 500 à 1000mg/8h -> 500 à 1000mg/8h-12h -> 500 à 1000mg/8h-24h. Amoxicilline/clavulanique... Pas d'ajustement. Clindamycine... Pas d'ajustement. Paracétamol... Pas d'ajustement, uniquement en cure courte"
      },
      {
        questionText: "Quel(s) est (sont) le(s) médicaments) contre-indiqué(s) en cas d'IRC:",
        options: [
          "Lidocaïne",
          "Tétracyclines",
          "Spiromycine",
          "Aspirine",
          "Ibuprofène"
        ],
        correctOptionIndexes: [3],
        explanation: "Aspirine Contre indiquée (rétention d'eau, détérioration de la fonction rénale, risque d'hémorragie gastrique et dentaire)"
      },
      {
        questionText: "Devant un patient qui présente une IRC au stade terminal, la CAT avant un acte odontologique est la suivante:",
        options: [
          "Contacter le médecin traitant",
          "Vérifier la sérologie (VIH-FIBS-VHC)",
          "Demander un TP",
          "Demander une NFS",
          "Évaluer sa Tension Artérielle"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: ""
      },
      {
        questionText: "Chez l'insuffisant rénal chronique",
        options: [
          "L'antibiothérapie post-extractionnelle est systématique",
          "L'ajustement de la dose d'amoxicilline est basé sur le taux de créatinine sanguine",
          "La molécule de choix est la spiramycine",
          "Éviter les médicaments néphrotoxiques notamment le paracétamol"
        ],
        correctOptionIndexes: [2],
        explanation: ""
      },
      {
        questionText: "L'avulsion chez un hémodialysé nécessite:",
        options: [
          "Un TP ou un INR",
          "Un bilan sérologique",
          "Une anesthésie locale avec vasoconstricteur",
          "Intervenir la veille de l'hémodialyse"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "A: Demander une NFS et un taux de plaquettes. Programmer l'acte dentaire le jour ou le malade ne fait pas de dialyse (en raison de l'anticoagulation héparinique)"
      },
      {
        questionText: "Parmi les ATB suivants quels sont ceux qu'on peut utiliser sans ajustage des doses chez l'insuffisance chronique:",
        options: [
          "La clindamycine",
          "La gentamycine",
          "L'azithromycine",
          "L'amoxicilline",
          "L'Augmentin",
          "Le métronidazole"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: ""
      },
      {
        questionText: "L'hyperplasie gingivale observée chez les transplantés rénaux est due:",
        options: [
          "L'accumulation de plaque bactérienne",
          "Aux beta bloquants destinés à traiter l'HTA",
          "A la cyclosporine"
        ],
        correctOptionIndexes: [2],
        explanation: "Hyperplasie gingivale observée chez les patients sous Ciclosporine, inhibiteurs calciques..."
      },
      {
        questionText: "Le risque hémorragique connu chez le patient hémodialysé est inhérent à ::",
        options: [
          "La prise d'anti agrégants plaquettaires",
          "Une thrombocytopénie et thrombopathie",
          "A la coexistence de l'anémie"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "Les problèmes potentiels rencontrés en pratique quotidienne lors de la prise en charge de l'insuffisant rénal sont :",
        options: [
          "L'intolérance aux substances néphrologiques métabolisées par le rein",
          "Risque de transmission virale chez les patients hémodialysés",
          "La susceptibilité aux infections",
          "La tendance au saignement",
          "Hypersalivation"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "La motivation à l'hygiène dans les foyers infectieux bucco-dentaire transplantation rénale est primordiale:",
        options: [
          "Car toute infection fait causer le risque de rejet de la greffe rénale",
          "Pour limiter les infections par rapport à la prise des immunosuppresseurs et des corticoles",
          "Car tout geste sanglante est à l'origine d'une hémorragie",
          "Car le risque de contamination virale est major",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "Parmi les manifestations buccales secondaires au traitement immunosuppresseur du transplants rénal on cite :",
        options: [
          "L'hyperplasie (accroissement) gingivale",
          "L'Hypersalivation",
          "La susceptibilité aux l'infections fongiques et virales",
          "La nécrose des maxillaires."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Manifestations orales chez les patients sous immunosuppresseurs: Candidoses, Herpès, infections au CMV. Hyperplasie gingivale observée chez les patients sous Ciclosporine, inhibiteurs calciques... Lymphomes, cancers cutanés, leucoplasie orale chevelue et sarcome de Kaposi."
      },
      {
        questionText: "Le patient hémodialysé présente des risques liés à:",
        options: [
          "La transmission virale d'où un contrôle sérologique (HIV-HBS-HCV)",
          "L'hémorragie majorée, en raison de la prise d'anti inflammatoire.",
          "La syncope",
          "L'intolérance aux substances métabolisées par le rein"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'éradication, impérative, de tous les foyers infectieux dentaires car: Toute Infection fait courir le risque de rejet de la greffe rénale. Le risque Infectieux sera majoré par les immunosuppresseurs et les corticoïdes prescrits au long cours."
      },
      {
        questionText: "Syndrome hémorragique que présente l'insuffisant rénale chronique (IRC) est inhérent :",
        options: [
          "A la baisse du son taux de d'hémoglobine.",
          "Au retard de cicatrisation.",
          "A l'atteinte de la qualité des plaquettes.",
          "A la diminution de la résistance capillaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: ""
      },
      {
        questionText: "Le retentissement de la maladie rénale (IRC) au niveau de la cavité buccale se traduit par :",
        options: [
          "Une anémie chronique",
          "Une anomalie leucocytaire.",
          "Une ostéolyse mandibulaire.",
          "Des Parodontopathies chroniques."
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "Les signes cliniques buccaux spécifiquement retrouvés chez l'insuffisant rénal chronique :",
        options: [
          "Haleine urémique.",
          "Pâleur des muqueuses.",
          "Une ostéodystrophie rénale.",
          "Des adénopathies cervicales."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C: est un signe radiographique et non pas clinique."
      }
    ]
  },
  {
    title: "PATIENT SOUS INHIBITEURS DE LA RÉSORPTION OSSEUSE",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Le stade 2 de l’ostéochimionécrose se caractérise par :",
        options: [
          "L’absence d’exposition osseuse.",
          "Les fractures osseuses spontanées.",
          "La suppuration osseuse.",
          "La présence de séquestre."
        ],
        correctOptionIndexes: [2],
        explanation: "Stade 0: Absence d’exposition osseuse, symptômes non spécifiques. Stade 1: Présence d’exposition osseuse, absence de douleur. Stade 2: Présence d’exposition osseuse + douleur + signes infection. Stade 3: Présence d’exposition osseuse + douleur + infection + fracture, fistule, extension."
      },
      {
        questionText: "Les inhibiteurs de la résorption osseuse sont des molécules médicamenteuses utilisées",
        options: [
          "Exclusivement par les oncologues.",
          "Dans le cadre des pathologies ostéolytiques malignes ou bénignes.",
          "Pour le traitement de certaines tumeurs malignes primitives.",
          "En cas de métastases osseuses."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L’utilisation de nouvelles molécules inhibitrices de la résorption osseuse dans plusieurs spécialités médicales [la pathologie osseuse bénigne comme l’ostéoporose] notamment en cancérologie."
      },
      {
        questionText: "Cochez les biphosphonates de 3ème génération : QCS",
        options: [
          "Acide zolédronique (Zometa)",
          "Alendronate",
          "Dénosumab",
          "Pamidronate"
        ],
        correctOptionIndexes: [0],
        explanation: "A : IRO & indication pathologique bénigne (2ème G). B : IRO & indication oncologique (Acanth-Rank L). C : IRO & indication oncologique (2ème G)"
      },
      {
        questionText: "Un patient candidat aux inhibiteurs de la résorption osseuse, nécessite : QCS",
        options: [
          "Une remise en état de la cavité buccale avant le début du traitement",
          "La confection de gouttières fluorées",
          "Des soins dentaires après le début du traitement",
          "Un traitement orthodontique en cas de DDM"
        ],
        correctOptionIndexes: [0],
        explanation: "Le traitement par IRO ne doit débuter qu’après la remise en état de la cavité buccale."
      },
      {
        questionText: "L’ostéonécrose des maxillaires représente une complication : QCS",
        options: [
          "Fréquente après tout acte invasif dentaire.",
          "Rare chez les patients prenant du dénosumab.",
          "Exclusivement observée chez les patients sous biphosphonates.",
          "Qui impacte la qualité de vie des patients atteints d’affections osseuses."
        ],
        correctOptionIndexes: [3],
        explanation: "B : L’ONM est très rare dans les traitements pour une pathologie bénigne... C : Les biphosphonates (BPs) et les anticorps monoclonaux anti-RANK-L (dénosumab)"
      },
      {
        questionText: "Chez un malade avec ostéoporose ayant reçu des biphosphonates pendant plus de 5 ans",
        options: [
          "Le risque d’ostéonécrose des maxillaires est considéré comme faible.",
          "Les co-morbidités sont des facteurs aggravants.",
          "L’antibioprophylaxie 48h avant tout acte est recommandée.",
          "L’association du Dénosumab n’influe pas sur l’évaluation du risque"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "A : La demi-vie osseuse est très longue pour les BPs... D : l’association à d’autres molécules comme le denosumab... augmente le risque d’ONM..."
      },
      {
        questionText: "Patiente traitée il y a 5 ans pour une tumeur du sein par chimio et radiothérapie ; actuellement sous Zometa, consulte pour une extraction dentaire, elle présente un risque",
        options: [
          "D’ostéonécrose",
          "D’ostéoradionécrose",
          "Hémorragique",
          "Ménorragique et infectieux à cause de l’aplasie médullaire"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Les biphosphonates",
        options: [
          "Stabilisent la perte osseuse",
          "Préviennent les fractures pathologiques",
          "Améliorent la qualité de vie des patients par leurs effets antiseptiques",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Pour action le blocage de la résorption osseuse... Leur rôle est préventif contre la survenue de fractures osseuses..."
      },
      {
        questionText: "Ostéonécrose des maxillaires peut être consécutive à un traitement par",
        options: [
          "Radiothérapie",
          "Chimiothérapie",
          "Biphosphonate",
          "Chirurgie mutilante"
        ],
        correctOptionIndexes: [0, 2],
        explanation: ""
      },
      {
        questionText: "Les biphosphonates",
        options: [
          "Peuvent être indiqués en cas d’ostéoporose",
          "Ont un effet anti-ostéoclastiques",
          "Leur demi-vie osseuse peut durer des années",
          "Leur administration nécessite une remise en état du caveau"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Sont en effet inhibiteur sur les ostéoclastes. Les BPs de deuxième et troisième générations ont une demi-vie osseuse très longue (10 ans en moyenne)"
      },
      {
        questionText: "Le risque de la nécrose osseuse d’origine médicamenteuse est plus élevé quand",
        options: [
          "La dose totale de l’irradiation est supérieure à 60 Gy",
          "Le biphosphonate est administré par voie intraveineuse, à forte dose",
          "La remise en état de la cavité buccale est faite après l’administration des biphosphonates",
          "La prophylaxie fluorée n’est pas réalisée"
        ],
        correctOptionIndexes: [1],
        explanation: "Les facteurs de risque de l’ONM : La puissance anti ostéoclastique... Voie IV à haut dose, prolongée ++..."
      },
      {
        questionText: "Cochez les molécules inhibitrices de la résorption osseuse",
        options: [
          "Acide zolédronique (Zometa)",
          "Alendronate.",
          "Dénosumab.",
          "Pamidronate."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Un patient candidat aux inhibiteurs de la réception osseuse, il convient de",
        options: [
          "Réaliser une remise en état de la cavité buccale avant le début du traitement.",
          "Confectionner des gouttières fluorées.",
          "Programmer les soins dentaires après le début du traitement.",
          "Éliminer tous les foyers infectieux bucco-dentaires."
        ],
        correctOptionIndexes: [0, 3],
        explanation: ""
      },
      {
        questionText: "L’ostéo-chimio-nécrose des maxillaires peut se manifester cliniquement par :",
        options: [
          "Une exposition osseuse.",
          "Une fistule muqueuse.",
          "Une chute spontanée des dents.",
          "La non cicatrisation d’une site extractionnel"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      }
    ]
  },
  {
    title: "LES HEMOPATHIES",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Un patient présentant un taux de plaquettes à 92 000/mm3 nécessite l’extraction de la 36, pour cela :",
        options: [
          "Une transfusion sanguine préalable n’est pas nécessaire.",
          "Une transfusion sanguine préalable est indispensable.",
          "Les moyens locaux d’hémostase sont indispensables.",
          "Les moyens locaux d’hémostase sont facultatifs en cas de transfusion sanguine."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B : La transfusion est indiquée dans le cas où le taux des plaquettes est inférieur à 50000/mm3. D : Les moyens locaux d’hémostase sont obligatoires en cas de transfusion sanguine."
      },
      {
        questionText: "Un patient hémophile A, se présente pour l’extraction de la 37",
        options: [
          "Il lui faut une substitution du facteur VIII en collaboration avec l’hématologue.",
          "Il présente un allongement des TP et TCA.",
          "Il nécessite une anesthésie tronculaire à l’épine de Spix.",
          "Il nécessite l’application des moyens locaux d’hémostase."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "B : Il présente un allongement isolé du TCA"
      },
      {
        questionText: "L’avulsion dentaire chez un patient qui présente une thrombopénie à 45000/mm3 nécessite",
        options: [
          "La demande du TS.",
          "L’application des moyens locaux d’hémostase.",
          "Une antibioprophylaxie vue le risque infectieux.",
          "Une transfusion des plaquettes en préopératoire."
        ],
        correctOptionIndexes: [1, 3],
        explanation: ""
      },
      {
        questionText: "Le Lymphome Hodgkinien QCS",
        options: [
          "Entraine une insuffisance médullaire.",
          "Est défini par la présence de cellules de reed-sternberg.",
          "Est plus fréquent que le lymphome non hodgkinien.",
          "Se manifeste par des adénopathies périphériques sans cause carieuse."
        ],
        correctOptionIndexes: [1],
        explanation: "Ces cellules anormales entrainent une réaction lymphocytaire non maligne"
      },
      {
        questionText: "Un patient hémophile B, se présente pour l’extraction de la 46",
        options: [
          "Il lui faut une substitution du facteur VIII en collaboration avec l’hématologue",
          "Il présente un allongement des TP et TCAC.",
          "L’anesthésie tronculaire est contre-indiquée",
          "Nécessite l’application des moyens locaux d’hémostase"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : Il lui faut une substitution du facteur IX. B : Il présente un allongement isolé du TCA"
      },
      {
        questionText: "Un patient présentant un taux de plaquettes à 92 000/mm3 nécessite l’extraction de la 36 pour cela",
        options: [
          "Une transfusion sanguine préalable n’est pas nécessaire.",
          "Une transfusion sanguine préalable est indispensable.",
          "Les moyens locaux d’hémostase sont indispensables.",
          "Les moyens locaux d’hémostase sont facultatifs en cas de transfusion sanguine"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Entre 80 000 – 150 000, le risque est modéré. Les soins chirurgicaux peuvent être réalisés en appliquant les moyens locaux d’hémostase (MLH). Une transfusion plaquettaire peut être nécessaire..."
      },
      {
        questionText: "Un patient présentant une hémophilie A sévère, nécessite l’extraction de la 48",
        options: [
          "L’anesthésie tronculaire est contre indiquée.",
          "L’anesthésie avec vasoconstricteur est contre indiquée",
          "Les soins chirurgicaux nécessitent une substitution du facteur manquant",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0],
        explanation: "Contre-indication absolue de l’anesthésie tronculaire à l’épine de spix car il y a un risque d’hématome asphyxiant laryngé ou pharyngé."
      },
      {
        questionText: "L’anémie de Biermer est",
        options: [
          "Une maladie caractérisée par un déséquilibre entre la production des différentes chaînes d’hémoglobine",
          "Une anémie par déficit en vitamine C.",
          "Une maladie génétique liée à une anomalie de la structure de la globine",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "Est une Anémie macrocytaire carentielle due à une carence Vit B12 C’est une anémie chronique d’installation lente"
      },
      {
        questionText: "En cas d'hémophilie, on retrouve:",
        options: [
          "TS augmenté INR augmenté TCA normal.",
          "TS normal, INR normal, TCA augmenté",
          "TS normal, INR augmenté TCA normal.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1],
        explanation: "Sur le plan biologique: TS normal. TQ et TP normaux. Allongement isolé du TCA... Diminution du facteur VIII ou IX."
      },
      {
        questionText: "Un patient présentant une thrombopénie idiopathique, nécessitant l'extraction de la 46",
        options: [
          "Doit bénéficier, systématiquement d'une transfusion sanguine au préalable.",
          "Si le taux de plaquettes est supérieur a 50000/mm3, la transfusion ne s'impose pas.",
          "L'intervention n'est possible que si le taux de plaquettes est supérieur a 100 000/mm3.",
          "Les moyens locaux d'hémostase s'imposent dans tous les cas."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Dans le cas de thrombopénie réfractaire ou idiopathique, une substitution plaquettaire est nécessaire, en plus des moyens locaux d'hémostase."
      },
      {
        questionText: "Dans les troubles de l'hémostase par anomalie vasculaire, on retrouve:",
        options: [
          "Un allongement du temps de Céphaline active.",
          "Un allongement du temps de saignement.",
          "Un taux de plaquettes normal.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      },
      {
        questionText: "La neutropénie:",
        options: [
          "Peut-titre consécutive a certaines médications telles que la chimiothérapie antimitotique.",
          "Correspond a un trouble prolifératif.",
          "Cette affection engendre un risque infectieux majeur.",
          "Les manifestations buccales sont traduites par des ulcérations persistantes, nécrotiques et extensives."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Est un Désordres leucocytaires non prolifératifs"
      },
      {
        questionText: "Un patient présentant un taux de plaquettes a 95 000/mm3, nécessite l'extraction de la 25, pour cela",
        options: [
          "Une transfusion sanguine préalable ne s'impose pas",
          "Les moyens locaux d'hémostase sont indispensables",
          "Une transfusion sanguine préalable est indispensable",
          "Les moyens locaux d'hémostase sont facultatifs en cas de transfusion sanguine"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "Un patient présentant une homophilie A, nécessite l'extraction de la 48",
        options: [
          "L'anesthésie tronculaire n'est pas contre indiquée",
          "L'anesthésie locale avec vasoconstricteur n'est pas contre indiquée",
          "Les sutures sont facultatives en cas de substitution du facteur manquant",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "La leucémie aigüe:",
        options: [
          "Est une hémopathie maligne",
          "Est le plus souvent rencontrée chez le sujet âgé",
          "Les manifestations buccales peuvent faire découvrir la maladie",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La leucémie est une hémopathie maligne... Leucémie aigüe myéloïde: le plus souvent chez l'adulte. Leucémie aigüe lymphoïde: elles sont plus fréquentes chez les enfants..."
      },
      {
        questionText: "Un patient présentant une thrombopénie, avec un taux de plaquettes a 100.000/mm3 nécessitant l'extraction de la 26; sa prise en charge impose",
        options: [
          "Une transfusion sanguine au préalable",
          "Des moyens locaux d'hémostase",
          "Un bilan sérologique au préalable s'il s'agit d'un patient polytransfusé",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      },
      {
        questionText: "Chez le patient hémophile, nécessitant extraction de la 46:",
        options: [
          "La substitution du facteur manquant est nécessaire",
          "L'anesthésie tronculaire a l'épine de Spix est contre indiquée",
          "L'emploi d'un anesthésique adrenaliné est contre indique",
          "Les moyens d'hémostase locaux ne sont pas nécessaires en cas de substitution de facteur"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Substitution: du facteur de coagulation qui fait défaut... Selon le type de déficit, la substitution sera différente."
      },
      {
        questionText: "En cas d'hémophilie, on retrouve:",
        options: [
          "TS augmenté INR augmenté TCA normal.",
          "TS normal, INR normal, TCA augmenté",
          "TS normal, INR augmenté TCA normal.",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Sur le plan biologique: TS normal. TQ et TP normaux. Allongement isolé du TCA... Diminution du facteur VIII ou IX."
      },
      {
        questionText: "Citez quatre (4) moyens locaux d'hémostase",
        options: [
          "Compression bi digitale",
          "Sutures",
          "Pose de pansement parodontal",
          "Dérivés cellulosés oxydés régénérés (Surgicel)",
          "Eponges de gélatine",
          "Colles biologiques"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4, 5],
        explanation: "Moyens extrinsèques: La compression bi digitale; Les sutures; La pose de pansement parodontal. Moyens intrinsèques: Dérivés cellulosés oxydés régénérés: Surgicel; Eponges de gélatine; Colles biologiques"
      },
      {
        questionText: "Patient atteint d'une hémophilie sévère se présente pour l'extraction de la 46:",
        options: [
          "Le vasoconstricteur est contre indique",
          "L'anesthésie tronculaire est recommandée",
          "La transfusion du facteur IX est obligatoire après l'extraction",
          "Les moyens locaux d'hémostase sont obligatoires"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les manifestations buccales des neutropénies sont :",
        options: [
          "Les ulcérations",
          "La fréquence des infections bactériennes et candidosique",
          "Des hémarthroses",
          "Des pétéchies"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Neutropénies sévères: on note des lésions ulcéro-nécrotiques... La neutropénie favorise les infections: bactérienne (gingivites), virales (herpès) et fongiques (candidoses)."
      },
      {
        questionText: "Un patient présentant une aplasie médullaire présente:",
        options: [
          "Un risque hémorragique",
          "Un risque infectieux",
          "Un risque de thrombose",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les aplasies médullaires... se caractérisent par une incapacité de la moelle osseuse à produire normalement les cellules sanguines (globules rouges, polynucléaires neutrophiles... et les plaquettes)."
      },
      {
        questionText: "L'anémie par carence martiale est caractérisée par un déficit en:",
        options: [
          "Acide folique",
          "Fer sérique",
          "Vitamine B12",
          "Vitamine B6"
        ],
        correctOptionIndexes: [1],
        explanation: "Appelé aussi Anémie ferriprive (est due à un manque de fer...)"
      },
      {
        questionText: "L'hémophilie A:",
        options: [
          "Est une coagulopathie dont le gène est porte par le père et exprime chez le garçon",
          "Est due déficit en facteur VIII de la coagulation",
          "Est moins fréquente que l'hémophilie B et C",
          "Est due au déficit en facteur IX de la coagulation"
        ],
        correctOptionIndexes: [1],
        explanation: "C'est une maladie récessive liée au chromosome X... Hémophilie A: Déficit du facteur VIII (80%-85% des malades)."
      },
      {
        questionText: "Une avulsion dentaire chez un patient présentant une thrombopénie a 70 000 plq/mm3 nécessite:",
        options: [
          "Une transfusion de plaquettes sanguines avant l'acte",
          "Des sutures hermétiques des berges",
          "La mise en place de plaque en résine pour protéger le site opératoire",
          "La prescription d'aspirine comme antalgique"
        ],
        correctOptionIndexes: [1],
        explanation: "Thrombopénies Modérée: > 50 000/mm3: Les soins chirurgicaux peuvent être réalisés en appliquant les moyens locaux d'hémostase (MLH)."
      },
      {
        questionText: "Un patient présentant une aplasie médullaire présente",
        options: [
          "Un risque hémorragique",
          "Un risque infectieux",
          "Un risque de thrombose",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      }
    ]
  },
  {
    title: "Lithiases salivaires",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Le diagnostic différentiel d'une sous - mandibulite se pose avec :",
            options: [
                "Une adénite",
                "Une cellulite",
                "Une tumeur de la glande parotide",
                "Un noyau résiduel dune cellulite chronique"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "Devant une sous-mandibulite aiguë, peuvent être discutées : une cellulite sous mylo-hyoïdienne abcédée d’origine dentaire ; une adénite ou un adéno-phlegmon. Devant une sous-mandibulite chronique, doivent être éliminés : une tumeur de la glande; une adénopathie; un noyau résiduel de cellulite chronique."
        },
        {
            questionText: "La lithiase sous - mandibulaire peut :",
            options: [
                "Être de découverte fortuite",
                "S'accompagner d'épisodes mécaniques",
                "Ne pas se compliquer d'épisodes infectieux",
                "S'accompagner d'épisodes douloureux"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: "La lithiase mandibulaire est le plus fréquemment révélée par des accidents mécaniques, compliqués ou non d’une greffe infectieuse."
        },
        {
            questionText: "Le mordu occlusal peut mettre en évidence : QCS",
            options: [
                "Une lithiase de la glande parotide",
                "Une lithiase parenchymateuse de la glande submandibulaire",
                "Une lithiase canalaire de la glande submandibulaire",
                "Une infection canalaire du plancher buccal"
            ],
            correctOptionIndexes: [2],
            explanation: ""
        },
        {
            questionText: "La colique salivaire :",
            options: [
                "Résulte d’une rétention de salive due a la présence d'un calcul",
                "Survient souvent avant les repas",
                "Résulte d’une obstruction avec spasme canalaire",
                "Est spontanément résolutive"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "la colique salivaires évolue pendant une période variable et elle est rythmées par les repas."
        },
        {
            questionText: "L'artère faciale:",
            options: [
                "Pénètre dans la glande parotide et se divise en artère temporale superficielle et artère maxillaire",
                "Naît de la face antérieure de l'artère carotide externe",
                "Est profonde dans sa partie cervicale et superficielle au niveau de la face",
                "Contourne la glande sublinguale et fait un crochet autour du bord inférieur de la mandibule",
                "Est l'artère principale de la face en donnant de nombreuses branches collatérales"
            ],
            correctOptionIndexes: [1, 2, 4], // Based on options 2, 3, 5 being correct in source.
            explanation: "1 : C’est l’artère carotide externe qui pénètre dans la glande parotide... 4: L’artère faciale contourne la glande submandibulaire (et non sublinguale)..."
        },
        {
            questionText: "Les lithiases salivaires :",
            options: [
                "S'accompagnent d’une sècheresse buccale",
                "Se produisent le plus souvent dans la glande sublinguale",
                "Se produisent le plus souvent de la glande parotide",
                "Sont toujours visibles sur les radiographies",
                "Peuvent être asymptomatiques"
            ],
            correctOptionIndexes: [4],
            explanation: "Les lithiases salivaires, concernent dans 75% des cas la glande sub-mandibulaire... 22% la glande parotide et 2% la glande sub-linguale. Le bilan radiologique est le moyen diagnostique le plus décisif..."
        },
        {
            questionText: "Prise en charge des lithiases des grandes salivaires fait appel a :",
            options: [
                "Une approche chirurgicale exclusive visant à limiter l'obstacle",
                "Un traitement médical permettant la fragmentation du calcul",
                "La lithotritie intra-canalaire",
                "Une prescription systématique d'antibiotiques pour prévenir l'infection du parenchyme glandulaire"
            ],
            correctOptionIndexes: [1, 2], // Options B and C had high percentages in source.
            explanation: "En présence de complications infectieuses, antibiothérapie à élimination salivaire et adaptée à ses germes;"
        },
        {
            questionText: "Devant un tableau clinique évoquant une lithiase submandibulaire, vous prescrivez en première intention :",
            options: [
                "Un cliché panoramique",
                "Une sialographie",
                "Un cliché occlusal antérieur",
                "Un cliché occlusal postérieur latéralisé du cote attein"
            ],
            correctOptionIndexes: [2, 3], // Options C and D had high percentages in source.
            explanation: "un film occlusal antérieur : rayon orthogonal ascendant... un film occlusal postérieur : rayon partant de l’angle mandibulaire..."
        },
        {
            questionText: "Quelle(s) est (sons) le (les) mode(s) de révélation possible(s) d'une lithiase parotidienne :",
            options: [
                "Hernie salivaire",
                "Colique salivaire",
                "Stenonite",
                "Sous-maxillite aigue",
                "Whartonite"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: ""
        },
        {
            questionText: "Le traitement chirurgical de lithiase submandibulaire :",
            options: [
                "L'indication dépend de la situation du calcul.",
                "Les calculs situes dans le tiers antérieur du Wharton s’enlèvent par vole exo buccale.",
                "Les calculs du tiers postérieur et les calculs Intra-parenchymateux nécessitent une sousmandibulectomie par vole cutané associée a une whertenectomie",
                "La voie endo buccale est réservée aux calculs du tiers antérieur"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: ""
        },
        {
            questionText: "La lithiase des glandes salivaires:",
            options: [
                "est la plus courante des affections salivaires de l'adulte",
                "est moins fréquente chez l'enfant",
                "touche préférentiellement la glande submandibulaire",
                "Est toujours asymptomatique et de découverte fortuite"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "D:peut etre suite à un accident mécaniqueet rythmés par les repas.ou accident infectieux"
        },
        {
            questionText: "La colique salivaire :",
            options: [
                "Résulte d'une rétention partielle de la salive",
                "S'accompagne de douleurs intenses et brutales",
                "Est rythmée par les repas",
                "Est occasionnée par une lithiase salivaire"
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "résulte d’une rétention complète de salive"
        },
        {
            questionText: "La hernie salivaire :",
            options: [
                "Se caractérise par une augmentation de la crête salivaire",
                "Est d'installation lente",
                "Se manifeste avant les repas",
                "Disparaît pendant les repas"
            ],
            correctOptionIndexes: [0],
            explanation: "salivaire caractérise une tuméfaction de la crête salivaire d’installation rapide lors d’un repas"
        },
        {
            questionText: "Le diagnostic différentiel d'une sous-mandibulite se pose avec :",
            options: [
                "Un kyste radiculo-dentaire",
                "Une cellulite",
                "Une tumeur de la glande",
                "Un kyste mucoïde du plancher"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Devant une sous-mandibulite aiguë, peuvent être discutées : une cellulite... une adénite... Devant une sous-mandibulite chronique, doivent être éliminés : une tumeur de la glande... une adénopathie... un noyau résiduel de cellulite chronique"
        }
    ]
  },
  {
    title: "Tumeurs des glandes salivaires",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Parmi les signes cliniques pouvant suspecter une pathologie tumorale bénigne de la parotide:",
        options: [
          "Tuméfaction parotidienne bilatérale",
          "Douleur et tuméfaction au moment des repas",
          "Nodule glandulaire encapsulé indolore",
          "Une tuméfaction latéro-laryngée refoulant l'amygdale"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A: tuméfaction unilatérale"
      },
      {
        questionText: "Devant une masse de la région parotidienne quels sont Les signes qui doivent faire évoquer la bénignité :",
        options: [
          "La croissance lente et progressive de la masse",
          "L’absence de paralysie faciale",
          "La présence de multiples adénopathies cervicales",
          "La présence d'une sécheresse buccale"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Tableau comparatif tumeurs bénignes vs malignes: Croissance lente, Pas de paralysie faciale, Pas d'adénopathies vs Croissance rapide, Paralysie faciale, Adénopathies."
      },
      {
        questionText: "Parmi les signes cliniques pouvant suspecter une pathologie tumorale des glandes salivaires :",
        options: [
          "Tuméfaction parotidienne bilatérale",
          "Douleur et tuméfaction sous mandibulaire per prandiale",
          "Nodule ulcéré en zone anatomique contenant du tissu salivaire",
          "Une tuméfaction latéro laryngée refoulant l’amygdale"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La localisation de la tuméfaction (latéropharyngée repoussant l’amygdale en bas et endedans, lèvre, face interne de joue, plancher buccal, langue, oropharynx latéral,palais, voile)"
      },
      {
        questionText: "Toutes les tumeurs des glandes salivaires sont des adénomes sauf une. Laquelle ?",
        options: [
          "La tumeur de Whartin",
          "La tumeur mixte",
          "L'oncocytome",
          "Le sialolipome"
        ],
        correctOptionIndexes: [1], // Tumeur mixte = Adénome Pléomorphe, qui est un adénome. Rechecking classification might be needed if this is the intended answer. Assuming the question implies malignancy or non-adenoma type.
        explanation: "" // No direct explanation in source, requires knowledge of classification.
      },
      {
        questionText: "L'adénome pléomorphe est le type histologique des tumeurs des glandes salivaires le plus fréquente Quelle est sa principale caractéristique: QCS",
        options: [
          "La présence de cellules oncocytaires",
          "La présence d double population cellulaire épithéliale et myoépithéliale",
          "La présence de cellules épithéliales basophiles",
          "La présence d'un stroma lymphoïde"
        ],
        correctOptionIndexes: [1],
        explanation: "L’adénome pléomorphe est composé de cellules épithéliales et myoépithéliales au sein d’un stroma..."
      },
      {
        questionText: "Les tumeurs des glandes salivaires :",
        options: [
          "Sont souvent malignes",
          "Touchent préférentiellement la glande parotide",
          "Touchent préférentiellement les glandes salivaires accessoires",
          "Surviennent souvent chez des adultes jeunes"
        ],
        correctOptionIndexes: [1],
        explanation: "Les tumeurs des glandes salivaires sont essentiellement localisées dans la glande parotide (80 % des tumeurs)... Environ 80% des tumeurs de la glande parotide... sont bénignes."
      },
      {
        questionText: "L'examen par résonance magnétique (IRM) dans les tumeurs :",
        options: [
          "Renseigne sur l'extension osseuse de la tumeur des glandes salivaires",
          "Est d'éliminer les lésions de contiguïté",
          "Est moins intéressant que la TDM",
          "Peut préciser le type histologique"
        ],
        correctOptionIndexes: [1],
        explanation: "L’IRM permet de : - Eliminer les lésions de contiguïté... - Distinguer les lésions tissulaires des lésions kystiques."
      },
      {
        questionText: "Les signes cliniques évoquant Ia malignité devant une tumeur de Ia parotide :",
        options: [
          "Une tuméfaction d’évolution lente",
          "La Paralysie faciale",
          "La présence d'adénopathies",
          "L'hypoesthésie labio mentonnière"
        ],
        correctOptionIndexes: [1, 2, 3], // Based on comparison table provided in source.
        explanation: "Tableau comparatif tumeurs bénignes vs malignes: Croissance lente vs rapide, Pas de paralysie faciale vs Paralysie faciale, Pas d'adénopathies vs Adénopathies."
      },
      {
        questionText: "Devant une tumeur des glandes salivaires l'imagerie est dominée :",
        options: [
          "La radiographie maxillaire défilé",
          "La Scintigraphie",
          "La sialographie",
          "L'imagerie par Résonance Magnétique ( IRM )"
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "La symptomatologie clinique d'un adénome pléomorphe a localisation parotidienne est dominée par un des symptômes suivants:",
        options: [
          "Présence de paralysie faciale",
          "Tuméfaction ferme soulevant le lobule de l'oreille",
          "Evolution rapide et douloureuse",
          "Ulcération cutanée irrégulière"
        ],
        correctOptionIndexes: [1],
        explanation: "Il s’agit d’une tuméfaction isolée et unilatérale, le plus souvent de la loge parotidienne, sous le lobe de l’oreille, de consistance ferme, arrondie, bien limitée, indolore..."
      },
      {
        questionText: "Quelle est localisation la plus fréquente des tumeurs bénignes des glandes salivaires:",
        options: [
          "Les glandes salivaires accessoires",
          "La glande parotide",
          "La glande sublinguale",
          "La glande submandibuiaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Les tumeurs des glandes salivaires sont essentiellement localisées dans la glande parotide (80 % des tumeurs)..."
      },
      {
        questionText: "Quel est le risque majeur de la chirurgie parotidienne ?",
        options: [
          "Le syndrome de Frey",
          "L'hyposialie",
          "La paralysie faciale",
          "La cicatrice cutanée de la voie d'abord",
          "L'Hématome jugal"
        ],
        correctOptionIndexes: [2],
        explanation: "Les complications neurologiques : - Une parésie ou paralysie faciale transitoire. - Paralysie faciale définitive massive... le risque principal et le plus redouté reste la lésion du nerf facial..."
      },
      {
        questionText: "Quelles sont les tumeurs parotidiennes les plus fréquentes ?",
        options: [
          "Le cystadénolymphome",
          "L'adénome oncocytaire",
          "L'adénome pléomorphe",
          "Le cylindrome",
          "L'adénocarcinome"
        ],
        correctOptionIndexes: [2],
        explanation: "Adénome pléomorphe: C’est la plus fréquente des tumeurs d'origine salivaire (50% des tumeurs salivaires), dont 2/3 des tumeurs de la parotide..."
      },
      {
        questionText: "Le carcinome adénoïde kystique :",
        options: [
          "Représente l'une des principales tumeurs malignes de la cavité buccale",
          "Touche particulièrement la glande sub mandibulaire",
          "N'engendre jamais de métastases à distance",
          "Est peu récidivant",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1], // Based on prevalence in accessory glands and overall ranking.
        explanation: "A: la tumeur maligne la plus fréquente des GSA. C/D : Les récidives sont présentes et des métastases... peuvent apparaitre tardivement. ...le second type de tumeur maligne (5 % à 10 %)... Les localisations préférentielles sont la glande parotide..., la glande submandibulaire..., les glandes salivaires accessoires..."
      },
      {
        questionText: "Les tumeurs de la glande parotide sont :",
        options: [
          "Malignes dans 80% des cas.",
          "Malignes dans un quart des cas.",
          "Souvent d'origine conjonctive",
          "Le plus souvent des tumeurs secondaires."
        ],
        correctOptionIndexes: [1],
        explanation: "Plus des trois quarts (80 %) des tumeurs des glandes salivaires affectent la glande parotide. Parmi elles, un quart (20 %) sont malignes" // Note: Source says 20%, answer B is 25%. Closest option.
      },
      {
        questionText: "L'imagerie des tumeurs des glandes salivaires est dominée par :",
        options: [
          "La radiographie standard sans préparation.",
          "La Scintigraphie.",
          "La sialographie.",
          "L'Imagerie par Résonance Magnétique (IRM)"
        ],
        correctOptionIndexes: [3],
        explanation: "L'IRM est l'examen de choix pour l'exploration... des glandes salivaires"
      },
      {
        questionText: "L'adénome pléomorphe parotidien :",
        options: [
          "Est une tumeur épithéliale pure",
          "Est une tumeur mixte",
          "Se présente sous forme d'un nodule ferme soulevant le lobule de l'oreille",
          "Se traduit a l'imagerie comme par une image arrondie en « balle dans la main"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "double composante épithéliale et mésenchymateuse,"
      },
      {
        questionText: "Les conséquences de la parotidectomie sont :",
        options: [
          "La paralysie faciale",
          "La rougeur cutanée du pavillon de l'oreille",
          "La sudation de la région temporo-jugale",
          "La dépression retro- mandibulaire"
        ],
        correctOptionIndexes: [0, 1, 2, 3], // Based on list provided. B and C relate to Frey's Syndrome.
        explanation: "Les complications neurologiques : - Une parésie ou paralysie faciale... - La diminution ou la perte de sensibilité du lobe de l’oreille... ✓ Des hématomes... ✓ La cicatrice... ✓ La dépression de la région parotidienne... ✓ La fistule salivaire... ✓ Le syndrome de Frey : Il est caractérisé par une rougeur cutanée du pavillon de l’oreille et de la région temporo-jugale voisine [et sudation]."
      },
      {
        questionText: "En ce qui concerne les tumeurs de glandes salivaires :",
        options: [
          "Environ 75% des tumeurs de glande salivaires surviennent dans Ia glande parotide",
          "Environ 75% des tumeurs des glandes salivaires surviennent dans les glandes salivaires accessoires",
          "Les tumeurs malignes sont plus observées dans la glande parotide",
          "La tumeur bénigne des glandes salivaires la plus courante est un carcinome adénoïde kystique"
        ],
        correctOptionIndexes: [0, 2], // Source states 80% for parotid. 75% is close. Malignancy rate varies by gland. Parotid has highest number but lower malignancy %.
        explanation: "L’adénome pléomorphe est le type histologique le plus fréquent."
      },
      {
        questionText: "Les séquelles observées après une parotidectomie sont :",
        options: [
          "Atteinte du nerf lingual avec anesthésie de l'hémi langue",
          "Paralysie faciale bilatérale",
          "Rougeur cutanée et sudation de la région temporo jugale au cours de la mastication",
          "hématome occasionnant l'obstruction des voies aériennes supérieures"
        ],
        correctOptionIndexes: [2, 3], // C is Frey's Syndrome. D is a possible complication.
        explanation: ""
      },
      {
        questionText: "Quel est le cancer le plus fréquent des grandes salivaires ?:",
        options: [
          "Carcinome épithélial myoépithélial",
          "Carcinome épidermoïde",
          "Carcinome sur adénome pléomorphe",
          "Carcinome adénoïde kystique"
        ],
        correctOptionIndexes: [1], // Mucoepidermoid carcinoma is generally considered the most common overall, but source doesn't explicitly state. Epidermoid is a high percentage response.
        explanation: "" // No direct statement in the provided source for this question.
      },
      {
        questionText: "Les signes cliniques évoquant la bénignité devant une tumeur de la parotide sont :",
        options: [
          "La présence éventuelle d'une paralysie faciale en fonction de l'ancienneté de la tumeur",
          "La mobilité par rapport au plan cutané",
          "La présence d'adénopathies réactionnelles",
          "L'hypoesthésie labiomentoniere",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "L'adénome pléomorphe est une tumeur :",
        options: [
          "Qui touche uniquement la parotide",
          "Dont les paralysies faciales périphériques sont fréquentes",
          "Les cellules myoépithéliales sont parfois disposées en nappe dans le stroma",
          "Le risque de récidive dépasse celui du myoépithéliale"
        ],
        correctOptionIndexes: [2],
        explanation: "Elle est totalement asymptomatique, elle fait corps en profondeur avec la glande mais la peau est souple et mobile en face d’elle, il n’y a jamais de paralysie faciale"
      },
      {
        questionText: "Lors de l'examen clinique des tumeurs bénignes des glandes salivaires :",
        options: [
          "La douleur est toujours en faveur avec la bénignité",
          "La présence d'une paralysie périphérique est systématique",
          "L'examen bi digital est de règle",
          "Le caractère multi focal peut être retrouve"
        ],
        correctOptionIndexes: [2, 3], // Based on high percentage responses. Multifocality can occur (e.g., Warthin's). Bimanual palpation is standard.
        explanation: "Asymptomatique / jamais de paralysie faciale"
      },
      {
        questionText: "L'examen complémentaires de choix pour le diagnostic des tumeurs des glandes salivaires sera :",
        options: [
          "La Sialographie.",
          "L'échographie pour les grosses tumeurs.",
          "L'IRM et la TDM pour les petites tumeurs.",
          "Le maxillaire défilé.",
          "Aucune réponse juste."
        ],
        correctOptionIndexes: [4], // IRM is generally preferred, TDM for bone. Echo first line. Options are poorly phrased. Assuming choice means definitive imaging.
        explanation: "1: Faux... 2: [Echo] permet au moins de différencier une tuméfaction liquidienne ou solide. 3: [TDM] n’est pas effectuée en première intention... [IRM] est l'examen le plus performant pour l'exploration des tumeurs des glandes salivaires..."
      },
      {
        questionText: "L'adénome pléomorphe de la parotide :",
        options: [
          "Est une tumeur, essentiellement, conjonctive",
          "Est une tumeur, essentiellement, epitheliale",
          "Est une tumeur epithelio-conjonctive ; la composante épithéliales et myoépithéliale est prédominante",
          "Toutes les réponses sont juste"
        ],
        correctOptionIndexes: [2],
        explanation: ""
      },
      {
        questionText: "L'adénome pléomorphe de la parotide se présente sous forme :",
        options: [
          "Une kyste a contenu liquidien",
          "Une boule pretragienne",
          "Un nodule fixe à la peau",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Nodule mobile dans les plans superficiels et profonds. Jamais fixé"
      },
      {
        questionText: "Les tumeurs malignes des glandes salivaires :",
        options: [
          "Touchent, surtout, la glande parotide",
          "Sont malignes, dans 80% des cas au niveau de la parotide",
          "Sont rares",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les tumeurs des glandes salivaires constituent moins de 1% de l’ensemble des tumeurs."
      },
      {
        questionText: "Le carcinome muco-épidermoïde :",
        options: [
          "Se développe, exceptionnellement, au niveau des maxillaires",
          "Touche les sujets Jeunes, entre 20 et 30 ans",
          "Associe deux types cellulaires, épidermoïde et claire",
          "Est la tumeur la plus fréquente, des tumeurs malignes de la glande parotide"
        ],
        correctOptionIndexes: [3],
        explanation: "il est observé souvent entre 30 et 60 ans"
      }
    ]
  },
  {
    title: "semiologie et les limitations de l’ouverture buccale",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Les DTM sont définis comme étant:",
            options: [
                "des troubles fonctionnelles des ATM.",
                "des troubles occlusaux ayant des répercussions sur les ATM.",
                "des dérangements discaux des ATM.",
                "Un ensemble de signes douloureux au niveau des ATM."
            ],
            correctOptionIndexes: [0, 2, 3], // Based on definition including pain, disc displacement, functional issues.
            explanation: "Les désordres temporo-mandibulaires (DTM)... désigne les douleurs musculaires, les déplacements discaux et les douleurs articulaires au niveau des ATM avec ou sans autres signes associés comme la limitation de l’ouverture buccale."
        },
        {
            questionText: "Les douleurs musculaires des DTM sont en rapport avec:",
            options: [
                "Des luxations discales irréductibles.",
                "Des luxations discales réductibles.",
                "Un spasme au niveau du ptérygoidien latéral.",
                "Un spasme au niveau du muscle myrtiforme."
            ],
            correctOptionIndexes: [2],
            explanation: "Douleurs Origine : ptérygoidien latéral, ligaments."
        },
        {
            questionText: "La palpation des muscles masticateurs dans le cas du trismus cherche à apprécier:",
            options: [
                "La mobilité condylienne et ses troubles éventuels.",
                "Les zones douloureuses et les faisceaux indurés en particulier au niveau de leurs insertions",
                "La consistance et le volume musculaire.",
                "Dans un contexte traumatique, les structures osseuses au niveau des corps mandibulaires et de la région zygomato-malaire."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "A:la palpation des ATM... D: la palpations des structure osseuse accessibles"
        },
        {
            questionText: "le trismus est 'il ?",
            options: [
                "Une contracture des muscles masticateurs",
                "Une contracture reflexe de défense",
                "une diminution permanente de l'ouverture buccale",
                "considéré comme un symptôme piège d'un processus malin",
                "un processus aigue, réversible"
            ],
            correctOptionIndexes: [0, 1, 3, 4],
            explanation: "C: limitation temporaire de l’ouverture buccale"
        },
        {
            questionText: "Les douleurs articulaires sont le signe d'une inflammation localisée au(à):",
            options: [
                "Ptérygoïdien latérale",
                "La synoviale",
                "La capsule",
                "Le conduit auditif interne"
            ],
            correctOptionIndexes: [1, 2], // Synovitis and capsulitis cause joint pain. Source mentions ligaments and lateral pterygoid for pain generally, not specifically 'articular'.
            explanation: "Origine : ptérygoïdien latéral, ligaments. Irradiantes à l’oreille..." // Source doesn't specify synoviale/capsule. This is inferred knowledge.
        },
        {
            questionText: "Les bruits articulaires sont le résultat d'un(e):",
            options: [
                "Bruxisme",
                "Contact entre les surfaces osseuses articulaires.",
                "Déplacement discale réductible.",
                "Déplacement discale irréductible"
            ],
            correctOptionIndexes: [1, 2], // Clicking (réductible) and crepitus (contact osseux). Irréductible often presents with locking, not noise.
            explanation: "Origine : déplacement discal. Claquements / Craquements /Crépitations"
        },
        {
            questionText: "Une constriction permanente des maxillaires lest provoquée par :",
            options: [
                "Une ankylose temporo-mandibulaire",
                "accident d'évolution de la dent de sagesse",
                "Par une synostose coronoido-malaire",
                "Une subluxation discale non réductible des ATM"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "A : constriction osseuse. C : par simple calcification d’un hématome intra temporale"
        },
        {
            questionText: "Parmi les lésions traumatiques ou infectieuses suivantes indiquez celles pouvant être à l'origine du trismus :",
            options: [
                "Arthrite temporo-mandibulaire",
                "Fracture zygomato-malaire avec déplacement",
                "Cellulite en rapport avec la canine (33) nécrosée",
                "Luxation condylienne antérieure"
            ],
            correctOptionIndexes: [0, 1], // Luxation Antérieure causes inability to close. Cellulite from anterior tooth less likely to cause trismus.
            explanation: ""
        },
        {
            questionText: "Les anomalies occlusales sont considérées comme un facteur:",
            options: [
                "isolé dans la genèse des troubles articulaires.",
                "Un facteur associé dans la genèse des troubles articulaires.",
                "Un facteur non déterminant dans la genèse des troubles articulaires.",
                "Un facteur favorisé par les déplacements du disque articulaire."
            ],
            correctOptionIndexes: [1],
            explanation: "L’étiologie occlusale est très évoqée... mais elle ne doit pas être isolée d’autres causes associées..."
        },
        {
            questionText: "L'examen radiologique de référence pour l'exploration du système disco-ligamentaire de l'ATM est :",
            options: [
                "Le Cône Beam",
                "La radiographie panoramique",
                "La tomodensitométrie",
                "L'imagerie par résonnance magnétique"
            ],
            correctOptionIndexes: [3],
            explanation: "l’étude statique et dynamique des disques articulaires et des structures intrinsèques (ligaments et capsule)..."
        },
        {
            questionText: "Le trismus ne fait pas intervenir :",
            options: [
                "Le muscle temporal",
                "Le muscle stylo-hyoïdien",
                "Le muscle masséter",
                "Le muscle ptérygoïdien interne"
            ],
            correctOptionIndexes: [1],
            explanation: "Le trismus est un symptôme caractérisé par la limitation temporaire de l’OB due à une contraction des muscles élévateurs de la mandibule..."
        },
        {
            questionText: "Parmi les causes suivantes une n’est pas à l'origine d'un trismus, laquelle ?:",
            options: [
                "La myosite rétractile",
                "La péricoronarite",
                "La mucite réactionnelle a la radiothérapie",
                "La fracture du col du condyle"
            ],
            correctOptionIndexes: [0], // Myositis Ossificans causes constriction, not trismus typically.
            explanation: ""
        },
        {
            questionText: "Le trismus :",
            options: [
                "Correspond à une limitation temporaire de l'ouverture buccale",
                "Est souvent dû à une contracture des muscles masticateurs au voisinage d'une lésion",
                "Peut-être causé par une fracture de l'angle mandibulaire",
                "Est rencontré lors de certains syndromes malformatifs",
                "Est rencontré au cours de l'ankylose temporo-mandibulaire"
            ],
            correctOptionIndexes: [0, 1, 2], // Options 1, 2, 3 selected in source.
            explanation: "5 : Ankylose temporo-mandibulaire : Perte plus ou moins totale de mobilité... liée à une entrave mécanique..."
        },
        {
            questionText: "La palpation des muscles masticateurs dans le cas de trismus cherche apprécier :",
            options: [
                "La mobilité condylienne et ses troubles éventuels.",
                "Les zones douloureuses et les faisceaux indures en particulier au niveau de leurs insertions.",
                "La consistance et le volume musculaire.",
                "Dans un contexte traumatique, les structures osseuses au niveau des corps mandibulaires et de la region zygomato-malaire."
            ],
            correctOptionIndexes: [1, 2],
            explanation: "A : lors de la palpation de l’ATM. D : lors de la palpation des structures osseuses"
        },
        {
            questionText: "Suite au bilan radio-clinique, la constriction permanente des maxillaires est évoquée, lorsque on est devant une forme :",
            options: [
                "Fixée, a évolution chronique.",
                "A caractère constant et indolore.",
                "D'installation rapide.",
                "Avec un processus de consolidation anormale en rapport avec une lésion récente d'origine (osseuse, musculaire, muqueuse ou cutanée)"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: ""
        },
        {
            questionText: "Nous citons les causes infectieuses extra dentaires les plus fréquentes du trismus:",
            options: [
                "La stomatite odontiasique en rapport avec une molaire en éruption.",
                "La sub-maxillite.",
                "L'arthrite temporo-mandibulaire",
                "La fracture angulaire déplacée de la mandibule"
            ],
            correctOptionIndexes: [1, 2], // Submandibulitis and TMJ arthritis. Pericoronitis is odontogenic. Fracture is trauma.
            explanation: ""
        },
        {
            questionText: "Les muscles élévateurs masticateurs sont :‎",
            options: [
                "‎Le temporal qui s'insère sur toute la hauteur du processus coronoïde mandibulaire‎",
                "‎Le ptérygoïdien latéral en mobilisant la mandibule en mouvement de propulsion et de‎ déduction",
                "‎Le masséter prend en sandwich le ramus mandibulaire‎",
                "‎Le ptérygoïdien latéral mobilise la mandibule en mouvements de propulsion, de bascule ‎et de diduction.‎",
                "‎Le temporal en compagnie du masséter est le plus puissant, étalant ses fibres sur l'écaille‎ du temporal, puis glissant dans la coulisse temporale en dedans de l'arcade zygomatique.‎"
            ],
            correctOptionIndexes: [3, 4], // Options 4, 5 selected in source. Lateral pterygoid is primarily protruder/depressor.
            explanation: "1: L’insertion osseuse se fait sur la fosse temporale. 3: masséter et ptérygoïdien médial prennent en sandwich le ramus mandibulaire. 5 : temporal : le plus puissant... il s’insère sur toute la hauteur du processus coronoïde de la mandibule"
        },
        {
            questionText: "Lors de l'exploration radiologique des ATM:",
            options: [
                "La TDM permet une bonne évaluation des disques articulaires",
                "La radiographie panoramique permet une très bonne appréciation.",
                "Le disque articulaire est bien visualisé sur l'incidence Schuller.",
                "L'IRM est le seul examen portant en évitant le ménisque" // Phrasing unclear, assuming "visualizing the meniscus".
            ],
            correctOptionIndexes: [3],
            explanation: "TDM permettent une étude morphologique et une évaluation de la densité osseuse... [Schuller] renseigne à la fois sur l’aspect morphologique et la cinétique articulaire..."
        },
        {
            questionText: "La physiopathologie de l'ankylose temporo-mandibulaire chez l'enfant est rattachée a la formation le plus souvent d'un cal osseux solidarisant l'os temporal et le bord supérieur de la branche montante de la mandibule:",
            options: [
                "Vrai",
                "Faux"
            ],
            correctOptionIndexes: [0],
            explanation: ""
        },
        {
            questionText: "Une ankylose temporo-mandibulaire unilatérale, observée à l'âge adulte, est caractérisée par les signes suivants :",
            options: [
                "Impossibilité permanente de l'ouverture de la bouche qui cède à la mécanothérapie forcée",
                "Etat déplorable de la denture (polycaries...)",
                "Rétromandibulie symétrique",
                "Découverte d'un gros bloc d'ankylose sur les coupes du scanner",
                "Une cicatrice cutanée sur le menton est souvent retrouvée."
            ],
            correctOptionIndexes: [1, 3, 4], // Options 2, 4, 5 selected in source.
            explanation: "Une ankylose temporo-mandibulaire unilatérale, observée à l'âge adulte, est caractérisée par une rétromandibulie asymétrique ."
        },
        {
            questionText: "Une pathologie de l'articulation temporo-mandibulaire peut se manifester cliniquement par:",
            options: [
                "Douleur",
                "Une infection",
                "Des bruits articulaires",
                "Une tumefaction"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Algies ou douleurs :Elles sont fréquentes... Les bruits articulaires sont fréquents..."
        },
        {
            questionText: "Dans l'exploration des pathologies des ATM, les examens radiologiques les plus indiques sont :",
            options: [
                "L'IRM",
                "L'incidence de Blondeau",
                "La TDM",
                "L'incidence de Hirtz"
            ],
            correctOptionIndexes: [0, 2],
            explanation: ""
        },
        {
            questionText: "Le Trismus :",
            options: [
                "Est un symptôme clinique irréversible",
                "Est souvent due à une infiltration des muscles masticateurs en rapport avec une lésion de voisinage",
                "Peut-être rencontre au tours de une sclérose cicatricielle",
                "Toutes les réponses sont fausse"
            ],
            correctOptionIndexes: [1],
            explanation: "Il est passager et disparait lors de la guérison. Il s’agit d’une contracture reflexe de défense contre la douleur"
        },
        {
            questionText: "Parmi les causes de la constriction permanente des maxillaires, on retient :",
            options: [
                "Le tétanos",
                "L'ankylose temporo-mandibulaire",
                "La prise de neuroleptiques",
                "une sclérose cicatricielle",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Constriction osseuse par L'ankylose temporo-mandibulaire. D : la constriction extra osseuses"
        },
        {
            questionText: "Dans l'examen clinique des ATM :",
            options: [
                "La profession du patient est un élément important a préciser",
                "On recherche la notion de traumatisme d'origine iatrogène",
                "On applique Ia pulpe des index a 1 cm du tragus pour la palpation endurable des ATM",
                "La palpation musculaire s'effectue a la recherche de zones douloureuses"
            ],
            correctOptionIndexes: [0, 1, 3],
            explanation: ""
        },
        {
            questionText: "Concernant l'exploration radiologique des ATM :",
            options: [
                "La radiographie panoramique est demandé en première intention",
                "Le scanner est moyen fiable d'évaluation du disque et des composantes musculaires",
                "Les données squelettiques sont mieux explorées par l'IRM",
                "L'IRM et le scanner sont demandes en deuxième intention"
            ],
            correctOptionIndexes: [0, 3],
            explanation: ""
        },
        {
            questionText: "Dans l'ankylose temporo-mandibulaire chez l'enfant :",
            options: [
                "Les formes bilatérales sont caractérisées par le signe du menton en regarde l’ankylose »",
                "Contrairement à l'adulte, il y a absence de troubles morphogéniques et occlusaux",
                "Le traitement préventif repose sur le diagnostic précoce et le traitement adéquat des fractures condyliennes",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [2],
            explanation: "chez l’enfant : conséquences graves sur la croissance mandibulaire. - Traitement prophylactique : • Dépistage précoce et traitement des lésions condyliennes..."
        },
        {
            questionText: "Une limitation de l'ouverture buccale dans sa forme aigue, peut se rencontrer en cas :",
            options: [
                "D'une cellulite aigue suppurée en rapport avec la 32",
                "Dune cellulite aigue séreuse en rapport avec la 47",
                "Une avulsion chirurgicale de la dent de sagesse maxillair",
                "Une fracture de l'angle mandibulaire"
            ],
            correctOptionIndexes: [1, 3],
            explanation: ""
        },
        {
            questionText: "Dans le traitement de la limitation de l'ouverture buccale :",
            options: [
                "La mécanothérapie est un complément indispensable au traitement",
                "Les procédés utilises sont les mime quel que soit la forme de la limitation",
                "La régression de la limitation se fait de façon progressive après suppression de l'étiologie",
                "Toutes les réponses sont justes"
            ],
            correctOptionIndexes: [0, 2],
            explanation: ""
        }
    ]
  },
  {
    title: "Les luxation de l’ATM",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "La luxation condylienne antérieure peut être déclenchée par :",
            options: [
                "Un choc direct sur la mandibule survenant lors d'une chute ou d'un bâillement",
                "Un traumatisme iatrogène lors d'une avulsion de dent de sagesse",
                "Une ouverture buccale forcée et prolongée lors de séances de soins dentaires",
                "Une édentation postérieure non compensée"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "La plupart des luxations de l’ATM surviennent au cour d’un acte physiologique exagéré ou forcé. D : parmi les facteurs favorisants"
        },
        {
            questionText: "La manœuvre « de Nélaton >> est :",
            options: [
                "Destinée à réduire la luxation condylienne antérieure",
                "Destinée à réduire la luxation condylienne latérale",
                "Effectuée alors que le patient est en position allongée",
                "Est exécutée par un mouvement de rétropulsion puis d'abaissement"
            ],
            correctOptionIndexes: [0],
            explanation: "Patient assis face à l’opérateur qui est debout. D : la mandibule est retirée vers le bas et pousssée postérieurement"
        },
        {
            questionText: "La plupart des luxations condyliennes, de l'ATM surviennent au cours d'un acte physiologique « exagéré » :",
            options: [
                "Un bâillement important,",
                "Un fou rire",
                "Des vomissements importants",
                "Un traumatisme maxillo-facial (région condylienne)."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Apparaissent souvent pendant les mouvements exagérés de la mandibule tel que : le rire, le bâillement, lors des vomissements, crise d’épilepsie,.....etc."
        },
        {
            questionText: "Dans la Luxation antérieure bloquée bilatérale :",
            options: [
                "Le condyle mandibulaire glisse en dessous du condyle temporal et reste bloqué",
                "Le ménisque reste solidaire au tubercule articulaire par les freins postérieurs",
                "La capsule est souvent déchirée à son bord antéroinférieur",
                "Le mouvement de rétro pulsion reste possible"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "D : impossible"
        },
        {
            questionText: "La luxation antérieure de l'articulation temporo-mandibulaire présente tous les éléments suivants sauf un, lequel ?",
            options: [
                "Elle s'accompagne toujours d'une fracture condylienne",
                "Elle se réduit par la manœuvre de Nélaton",
                "Elle se traduit par une ouverture buccale impossible", // Assuming this meant 'closure impossible' based on context
                "Elle n'est pas toujours traumatique"
            ],
            correctOptionIndexes: [0],
            explanation: "Luxation bloquée compliquée : C’est lorsqu’elle est associée à une fracture du condyle. C : La fermeture buccale reste impossible et pas l'ouverture ( faute dans le sujet)"
        },
        {
            questionText: "La luxation dynamique :",
            options: [
                "Est appelée également luxation discale",
                "Apparait souvent pendant les mouvements exagérés de la mandibule",
                "Le condyle mandibulaire quitte totalement la cavité glénoïde",
                "Est définie comme la dissociation du disque articulaire et condyle mandibulaire"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "appelée également luxation condylo-glénoïdienne. le condyle mandibulaire quitte totalement la cavité glénoïde et n’arrive plus à réintégrer sa place"
        },
        {
            questionText: "La luxation antérieures des articulations temporomandibulaire :",
            options: [
                "Peut-titre uni ou bilatérale.",
                "Est la plus fréquente des luxations des ATM.",
                "Requiert une réduction rapide suivie d'une contention avec une fronde.",
                "Est souvent récidivante en cas hyperlaxité ligamentaire"
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "La luxation antérieure bloquée c’est la plus fréquente. La réduction manuelle par la manœuvre de Nélaton"
        },
        {
            questionText: "La luxation condylienne postérieure est caractérisée par :",
            options: [
                "Une propulsion du menton vers l'avant",
                "Une ouverture buccale exagérée",
                "Une otorragie",
                "Une impossibilité de fermer la bouche",
                "Un enfoncement tympano-nasal"
            ],
            correctOptionIndexes: [2],
            explanation: "a) Une propulsion du menton vers l’avant : Faux, il s’agit plutôt d’une propulsion du menton vers l’arrière. b) et d) : Faux, il y aura une limitation de l’ouverture buccale... e) Un enfoncement tympano-nasal : Faux, il s’agit d’un enfoncement tympanal..."
        },
        {
            questionText: "Dans Ia luxation temporomandibulaire antérieure unilatérale:",
            options: [
                "Le menton est déporté du cote de la luxation.",
                "L'ouverture buccale devient impossible.",
                "Le menton est déporté du cote non luxe.",
                "II existe une fracture du tympan."
            ],
            correctOptionIndexes: [2],
            explanation: "le menton est déporté vers le côté sain. La bouche est déformée, entre ouverte sur un seul côté (déviée). associées à une fracture du tympan ou de la base du crâne" // Source conflicts on 'ouverture impossible'
        },
        {
            questionText: "L'étiologie de la luxation postérieure des articulations temporomandibulaire est représentée par:",
            options: [
                "Un trouble fonctionnel préexistant des ATM.",
                "Une ouverture exagérée de la cavité buccale",
                "Un choc violent en direction postérieure.",
                "Un choc violent vertical sur le menton en bouche ouverte."
            ],
            correctOptionIndexes: [2],
            explanation: "survient après un choc horizontal sur le menton"
        },
        {
            questionText: "La luxation temporo-mandibulaire supérieure :",
            options: [
                "Est la plus fréquente des luxations",
                "Est due à un choc horizontal sur le menton",
                "Retrouve en béance antérieures.",
                "Toute les réponses sont fausses"
            ],
            correctOptionIndexes: [3],
            explanation: "Les luxations condyliennes supérieures surviennent après un choc vertical très violent en bouche ouverte, L’ouverture buccale est d’emblée limitée"
        },
        {
            questionText: "La luxation temporo-mandibulaire antérieure :",
            options: [
                "S'exprime par le passage de la tête condylienne en avant de l'éminence temporale",
                "Peut-être uni ou bilatérale et se manifeste par une réductibilité des condyles temporaux et mandibulaires",
                "S'observe plus fréquemment chez la femme jeune après un choc antéro-postérieur",
                "Montre fréquemment des troubles occlusaux et perte des molaires qui en sont très souvent la cause",
                "Nécessite rarement une résection des condyles mandibulaires"
            ],
            correctOptionIndexes: [0, 3], // Options 1, 4 selected in source.
            explanation: "[Option 2 explanation]... se manifeste par une impossibilité de réintégration du condyl dans la cavité glénoïde. [Option 3 explanation] S'observe plus fréquemment au cours d'un acte physiologique exagérée ou forcé ."
        },
        {
            questionText: "La luxation temporo-mandibulaire postérieure se manifeste par :",
            options: [
                "Une fracture du tympan ou de la base du crane, après un choc horizontal sur le menton",
                "Une fracture du tympan ou de la base du crane, après un choc antéropostérieur sur le menton",
                "Une surdité légère et quelques fois d'hypoacousie",
                "Une irréductibilité nécessitant une résection des condyles"
            ],
            correctOptionIndexes: [0, 2],
            explanation: ""
        },
        {
            questionText: "La luxation temporo-mandibulaire bilatérale est facile à reconnaitre grâce aux signer suivants :",
            options: [
                "Les joues sont aplaties",
                "Le menton peut être abaisse par pression mais on ne peut pas le relever",
                "Une béance antérieures avec parfois un contact molaire",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "La béance incisive peut atteindre 4 à 5 cm alors que les molaires sont rapprochées et peuvent même se toucher"
        }
    ]
  },
  {
    title: "Diagnostic des ulcérations",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Devant une ulcération unique de la muqueuse buccale le diagnostic évoqué est :",
            options: [
                "Un aphte géant",
                "Une aphtose buccale récidivante idiopathique",
                "Une ulcération traumatique",
                "Une ulcération néoplasique"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "B:ulcérations multiple"
        },
        {
            questionText: "Le traitement de l'ulcération traumatique consiste en:",
            options: [
                "Une biopsie -exérèse",
                "Elimination de l'agent traumatique",
                "Prescription de bain de bouche antiseptique",
                "Prescription d'un antifongique anti candidosique"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Le traitement consiste en la suppression de l’étiologie et la prescription de bains de bouche antiseptiques"
        },
        {
            questionText: "L'ulcération muqueuse traumatique :",
            options: [
                "N’est pas douloureuse",
                "Présente une base indurée",
                "Disparaitre à la suite du traitement étiologique",
                "S’adapte à l’agent causale"
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Elle est très douloureuse, lisse, à base souple,"
        },
        {
            questionText: "L’ulcération muqueuse maline :",
            options: [
                "Présente un fond jaune en aspect de beurre frais",
                "S’accompagne souvent d’une adénopathie satellite",
                "Se distingue souvent, par des bords bourgeonnants et irréguliers",
                "se caractérise par une base souple"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Fond est d’aspect granuleux ; végétant ; boureonnant. Base indurée"
        },
        {
            questionText: "Le Zona :",
            options: [
                "Est l'expression de la récurrence du virus de la varicelle",
                "Est l'expression de la récurrence du virus de la rubéole.",
                "A une topographie strictement unilatérale.",
                "Au niveau de la face, il se manifeste par des lésions bulleuses sur le territoire d'innervation du trijumeau."
            ],
            correctOptionIndexes: [0, 2, 3], // D mentions bulles, source says vésicules. Assuming error in source/question and intending vesicular eruption.
            explanation: "D : vésicules"
        },
        {
            questionText: "L’aphte buccale :",
            options: [
                "Est, souvent, entouré par un halo inflammatoire érythémateux",
                "Se localise, habituellement, en muqueuse attachée.",
                "Présente un fond hémorragique",
                "Ne s'accompagne pas de douleurs"
            ],
            correctOptionIndexes: [0],
            explanation: "L’aphte est une lésion superficielle... Qui semanifeste par une ulcération très douloureuse... un fond nécrotique"
        },
        {
            questionText: "La primo-infection herpétique :",
            options: [
                "S'accompagne toujours d'une gingivo-stomatite aigue chez le jeune enfant.",
                "Passe souvent inaperçue.",
                "Se manifeste au niveau de la muqueuse buccale par des érosions post-bulleuses.",
                "Concerne surtout l'adulte jeune"
            ],
            correctOptionIndexes: [0], // Option A had highest % but B is also common. Source implies symptomatic is common GSA.
            explanation: "Survient chez l’enfant entre 06 mois et 5 ans. érosions post vésiculeuse"
        },
        {
            questionText: "Devant la suspicion d'un pemphigus les examens complémentaires réalisés sont :",
            options: [
                "Un examen virologique",
                "Une immunofluorescence directe (IFD)",
                "Un Examen cytobacteriologique (ECB) de pus",
                "Une Numération Formule Sanguine (NFS)"
            ],
            correctOptionIndexes: [1],
            explanation: "L'immunofluorescence directe (IFD) est une technique de microscopie permettant la détection d'immunoglobulines/complexes immuns..."
        },
        {
            questionText: "Une aphtose au tours d'un VIH se caractérise par:",
            options: [
                "Des aphtes géants nécrotiques très douloureux",
                "Un taux de CD4 élevé",
                "Une sérologie VDRL / TPHA positive",
                "La présence des érosions cutanées péribuccales"
            ],
            correctOptionIndexes: [0],
            explanation: "un taux bas de CD4; les ulcérations peuvent apparaître au niveau de la muqueuse kératinisée..."
        },
        {
            questionText: "Une ulcération carcinomateuse est suspectée fortement :",
            options: [
                "Chez l'adulte jeune",
                "Chez une personne âgée sans terrain d'alcoolo tabagisme",
                "Si l'ulcération est indurée à sa base",
                "Si l'ulcération siège en muqueuse kératinisée"
            ],
            correctOptionIndexes: [2],
            explanation: ""
        },
        {
            questionText: "Devant une ulcération de la muqueuse buccale, les signes évoquant une tumeur maligne sont :",
            options: [
                "Les bords surélevés",
                "Le fond jaune en beurre frais",
                "Un halo rouge périphérique constant",
                "Une base indurée",
                "Le saignement au contact"
            ],
            correctOptionIndexes: [0, 3, 4], // Options 1, 4, 5 selected in source.
            explanation: "1: L’ulcération... bords sont surélevés et éversés . 4: À la palpation, on décèle une base indurée... 5: Le fond est d’aspect... avec des zones nécrotiques et/ou hémorragiques ."
        },
        {
            questionText: "L'ulcération traumatique :",
            options: [
                "Evolue sur un mode aigu.",
                "Présente une base indurée et moulée sur un agent causal.",
                "Répond à un traitement qui consiste à l'exérèse-biopsie.",
                "Est suspecte de malignité si elle persiste au-delà de 14 jours après la suppression de la cause."
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Cette ulcération guérit en 7 à 8 jours si la cause est traitée."
        },
        {
            questionText: "L'Aphte géante:",
            options: [
                "Est une ulcération ronde ou ovalaire dont le diamètre est supérieur a 1cm",
                "Evolue vers la guérison sans cicatrice en 7 a 10 jours.",
                "Présente des bords irréguliers et entoures d'une large auréole érythémateuse Avec un fond nécrotique.",
                "A une prévalence nettement augmentée dans l'infection a VIH."
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: ""
        },
        {
            questionText: "L'aphtose buccale récidivante ou récurrente:",
            options: [
                "Est rarement idiopathique",
                "Doit faire rechercher pour son diagnostic une étiologie associée",
                "Nécessite souvent un traitement au long cours",
                "Se présente sous forme de lésions aphtoïdes associées à la maladie de Crohn",
                "Se présente sous forme de lésions aphtoïdes caractéristiques sur le plan histologique"
            ],
            correctOptionIndexes: [1, 3], // Options 2, 4 selected in source.
            explanation: "Aphtose buccale récidivante idiopathique: ▪ Ulcerations aphteuses nombreuses... 4: Aphtoses buccales récidivantes associées... Ces ulcérations... peuvent être en rapport avec: La maladie de behçet, Les maladies inflammatoires chroniques de l’intestin : crohn..."
        },
        {
            questionText: "Dans le cadre d’une recherche étiologique d’une aphtose buccale récurrente chez un patient, on pense que les éléments suivants peuvent être associes l'exception d'un facteur, lequel",
            options: [
                "Notion de tabagisme chronique",
                "Anémie par carence martiale",
                "Maladies inflammatoires chroniques intestinales",
                "Certains aliments",
                "VIH"
            ],
            correctOptionIndexes: [0], // Smoking is often protective against aphthae.
            explanation: "Aphtes géants isolés ou multiples souvent nécrotiques, rencontrés assez fréquemment au cours du sida..." // Source explains HIV link, not exclusion of smoking.
        },
        {
            questionText: "L'aphte géant :",
            options: [
                "Qui dure plus d'un mois et rétractile doit faire évoquer une sérologie HIV",
                "Est toujours de base souple",
                "Réalise une ulcération profonde supérieure a 1 mm avec un fond nécrotique",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [0, 2],
            explanation: "La taille de l’ulcération est nettement plus importante, de 1 à 5 cm"
        },
        {
            questionText: "Le carcinome épidermoïde réalise souvent une ulcération:",
            options: [
                "Bourgeonnante",
                "Chez un homme plus de 50 ans aux habitudes alcoolo-tabagiques",
                "Chez un malade prisonnier",
                "Chez un nourrisson dans le syndrome de Riga Fede"
            ],
            correctOptionIndexes: [0, 1],
            explanation: ""
        },
        {
            questionText: "La démarche diagnostique devant une ulcération de Ia muqueuse buccale doit déterminer :",
            options: [
                "L'aspect de la lésion initiale",
                "Son mode aigu ou chronique",
                "L'aspect de ses bords",
                "Sa forme unique ou multiple"
            ],
            correctOptionIndexes: [0, 1, 2, 3], // All seem relevant to diagnosis.
            explanation: ""
        },
        {
            questionText: "L'ulcération carcinomateuse :",
            options: [
                "Est une lésion aigue",
                "Est d'allure nécrotique dont la base est toujours souple",
                "Aucune cause évidente n'est retrouvée",
                "Est une lésion qui évolue depuis plusieurs semaines"
            ],
            correctOptionIndexes: [2, 3],
            explanation: ""
        }
    ]
  },
  {
    title: "Pathologie inflammatoire et infectieuse des glandes salivaires.",
    subject: "pathologie-y3",
    questions: [
      {
        questionText: "Dans la terminologie des infections des glandes salivaires :",
        options: [
          "le terme de sialites convient aux infections salivaires parenchymateuses et canalaires",
          "le terme de sialadénites convient aux infections salivaires parenchymateuses",
          "le terme sialodochite convient aux infections parenchymateuses",
          "les Oreillons correspondent aux infections bactériennes de la glande parotide"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "A:toutes les infections des glandes salivaires sont appelées sialites. D:Sialadènite ourlienne (oreillons) La parotidite ourlienne est l’infection virale la plus fréquente..."
      },
      {
        questionText: "La parotidite ourlienne :",
        options: [
          "Se manifeste par une tuméfaction uni- ou bilatérale",
          "Est l'infection virale la plus fréquente des glandes salivaires",
          "Touche uniquement les glandes submandibulaires",
          "Nécessite une antibiothérapie"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Il s’agit d’une tuméfaction parotidienne. Traitement: Le repos au lit, Les antalgiques et antipyrétiques."
      },
      {
        questionText: "Le syndrome de Gougerot-Sjogren:",
        options: [
          "Se manifeste par une sialorrhée en jet",
          "Est caractérisée par une dégénérescence progressive des glandes exocrines",
          "Peut-être primaire ou secondaire",
          "Ne touche pas les glandes salivaires accessoires"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le diagnostic de SGS primitif nécessite l’existence : ...ou la présence d’un infiltrat lymphocytaire sur une biopsie des glandes salivaires accessoires... Le syndrome est dit primaire... Il est dit secondaire..."
      },
      {
        questionText: "Le premier examen à pratiquer au décours d'une pathologie salivaire infectieuse est :",
        options: [
          "La sialographie",
          "La tomodensitométrie",
          "L'échographie",
          "L'imagerie par Résonance Magnétique"
        ],
        correctOptionIndexes: [2],
        explanation: "L’échographie est actuellement le premier examen à pratiquer au décours d’une pathologie salivaire."
      },
      {
        questionText: "En présence d'une pathologie salivaire, le premier examen à demander est :",
        options: [
          "Panoramique",
          "Echographie",
          "Sialographie",
          "IRM"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "L'arthrite des ATM peut être d'origine :",
        options: [
          "Immunologique.",
          "Infectieuse.",
          "Congénitale.",
          "Héréditaire."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Elle peut être d’origine infectieuse, immunologique ou métabolique."
      },
      {
        questionText: "La sialite ourlienne :",
        options: [
          "Est une infection salivaire virale des glandes submandibulaires.",
          "Est une infection salivaire microbienne causée par les germes de la cavité buccale",
          "Est à l'origine de tuméfaction inflammatoire parotidienne uni ou bilatérale",
          "Peut survenir plusieurs fois chez le même enfant."
        ],
        correctOptionIndexes: [2],
        explanation: "La parotidite ourlienne est l’infection virale la plus fréquente... causée par un paramyxovirus..."
      },
      {
        questionText: "La parotidite aigue suppurée de l'adulte :",
        options: [
          "Est l'apanage du sujet immunodéprimé",
          "Se manifeste par une suppuration a l'ostium du canal de Wharton.",
          "Peut avoir le mime tableau clinique qu'une parotidite aigue lithiasique",
          "Se manifeste toujours dans un tableau de fièvre et de tuméfaction bilatérale"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le massage de la glande induit une sécrétion purulente au niveau de son orifice Excréteur canal de Sténon"
      },
      {
        questionText: "La Sialadénite tuberculeuse de la parotide se manifeste cliniquement par :",
        options: [
          "Un module froid de la loge glandulaire, souvent pretragien",
          "Des douleurs lancinantes",
          "De la fièvre et une altération de l'état général",
          "Une salive purulente au niveau de L'orifice du Wharton"
        ],
        correctOptionIndexes: [0],
        explanation: "Il n’y a pas de douleur ; pas de fièvre ; la salive n’est pas purulente"
      },
      {
        questionText: "Le syndrome de Mikulicz est caractérisé par une :",
        options: [
          "Paralysie faciale, une chéilite et une langue plicaturée.",
          "Tuméfaction des glandes salivaires essentiellement les sublinguales.",
          "Augmentation de volume, le plus souvent indolore, des glandes salivaire (parotides) et des glandes lacrymales dont la cause est inconnue.",
          "Poly-adénopathie de cause virale simulant une parotidite ourlienne.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "Le syndrome de Mikulicz se manifeste par : Une hypertrophie bilatérale et indolore des glandes lacrymales et salivaires majeures, surtout les parotides. Il s'agit d’un syndrome, dont les causes peuvent être multiples..."
      },
      {
        questionText: "La glande sublinguale a comme canal excréteur :",
        options: [
          "Le sténon.",
          "Le rivinus.",
          "Le Bartholin.",
          "Le walther.", // Assuming Walther is another name for minor sublingual ducts.
          "Le Blandin." // Gland of Blandin-Nuhn has its own ducts, not sublingual gland proper.
        ],
        correctOptionIndexes: [1, 2, 3], // Options 2, 3, 4 selected in source.
        explanation: "Elle possède plusieurs canaux excréteurs des canaux mineurs (15 à 30)... un canal majeur (canal de RIVINIUS ou canal de BARTHOLIN)..."
      },
      {
        questionText: "La parotidite ourlienne a une étiologie :",
        options: [
          "Bactérienne.",
          "Virale.",
          "Lithiasique.",
          "Parasitaire.",
          "Aucune réponse juste."
        ],
        correctOptionIndexes: [1],
        explanation: "La parotidite ourlienne est l’infection virale la plus fréquente... causée par un paramyxovirus..."
      },
      {
        questionText: "Dans la parotidite ourlienne, nous retrouvons :",
        options: [
          "Une tuméfaction parotidienne.",
          "Quelques fois des adénopathies sous-maxillaires.",
          "Des taches lenticulaires de la cavité buccale.",
          "Une hypoesthésie du nerf alvéolaire inférieur.",
          "Un écoulement purulent au niveau du canal Wharton."
        ],
        correctOptionIndexes: [0, 1], // Options 1, 2 selected in source.
        explanation: "1: À l’inspection, il existe une tuméfaction uni- ou bilatérale... 2: On retrouve une rougeur à l’ostium du conduit parotidien avec une salive claire et rare et des adénopathies."
      },
      {
        questionText: "Dans la pathologie salivaire canalaire, nous retrouvons :",
        options: [
          "Les sialites.",
          "Les dyskinésies.",
          "Les sialodochites.",
          "Les sialites allergique et toxiques.",
          "La sialadénite ourlienne."
        ],
        correctOptionIndexes: [1, 2], // Options 2, 3 selected in source.
        explanation: "2: dyskinésie salivaire : Dilatation canalaire réflexe. 4: diagnostic différentiel des sialites ourliennes. 5: Il s’agit d’une sialadénite virale. Les sialites sont les inflammations des glandes salivaires : ...Si l’inflammation est essentiellement canalaire, c’est une sialodochite."
      },
      {
        questionText: "La sialadénite Ourlienne est :",
        options: [
          "Une infection virale",
          "Une Infection bactérienne",
          "Une infection mycosique",
          "Une infection spécifiques"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "L'exploration radiologique des glandes salivaires :",
        options: [
          "Les clichés standards s'adressent aux glandes salivaires accessoires essentiellement a la recherche d'opacités lithiasiques.",
          "L'image échographique n'a pas de spécificité, elle permet d'éliminer les processus tumoraux.",
          "La tomodensitométrie (TDM) trouve son intérêt dans la pathologie tumorale",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: ""
      }
    ]
  },
  {
    title: "Pathologies inflammatoires et degeneratives des atm",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Parmi les caractéristiques de la douleur observée dans l'arthrite temporo-mandibulaire :",
            options: [
                "importante raideur matinale",
                "Absence de raideur matinale",
                "Augmente durant la journée et atteint son maximum le soir",
                "Faible pendant la journée"
            ],
            correctOptionIndexes: [0],
            explanation: "Des douleurs, maximales le matin"
        },
        {
            questionText: "Lequel des signes radiologiques suivantes n'est pas retrouvé dans une arthrose temporomandibulaire ?",
            options: [
                "Un pincement articulaire",
                "Un épanchement intra-articulaire",
                "Une déminéralisation osseuse",
                "Une ostéonécrose"
            ],
            correctOptionIndexes: [3],
            explanation: "Les signes cardinaux classiques de l’arthrose sont une sclérose sous-chondrale plus ou moins associée à des géodes, une ostéophytose... et un pincement articulaire..."
        },
        {
            questionText: "Dans les atteintes inflammatoires des ATM, la recherche de troubles fonctionnel :",
            options: [
                "Ulcération linguale",
                "Occlusion instable",
                "Surcharge occlusale",
                "DDS incluse"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Surcharge fonctionnelle ; Parafonction (comme le bruxisme) ;Occlusion instable ; Micro- ou macro-trauma ;Anomalie de développement , Déplacement discal"
        },
        {
            questionText: "Le traitement des arthrites septiques des ATM est base sur :",
            options: [
                "Une mécanothérapie.",
                "Un blocage bi-maxillaire.",
                "Une antibiothérapie.",
                "Une injection locale de corticoïde."
            ],
            correctOptionIndexes: [1, 2], // Source mentions ATB as essential. Immobilization (BMM) might be used.
            explanation: "L’association initiale de deux antibiotiques bactéricides et synergiques administrés par voie intraveineuse est le plus souvent, indispensable..."
        },
        {
            questionText: "Le bilan biologique a demander en cas de pathologie inflammatoire des ATM comporte:",
            options: [
                "La vitesse de sédimentation (VS).",
                "L'hémoglobine Glyquée.",
                "L’INR/TP.",
                "La Protéine C Réactive CRP"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "la vitesse de sédimentation (VS), la protéine C réactive (CRP) et le taux de TNFα sont augmentés..."
        },
        {
            questionText: "L'atteinte de IATM dans spondylarthrite ankylosante :",
            options: [
                "Se traduit par un tableau clinique non spécifique",
                "Se traduit radiologiquement par un épanchement articulaire",
                "Donne lieu à un ostéophyte",
                "Toutes les réponses sent fausses."
            ],
            correctOptionIndexes: [0, 2], // Osteophytes can occur. Source mentions bone destruction/altered surfaces, which is non-specific.
            explanation: "La tomodensitométrie montre une altération des surfaces articulaires avec diminution de l’interligne articulaire et destruction osseuse"
        },
        {
            questionText: "En cas de polyarthrite rhumatoïde:",
            options: [
                "La limitation de l'ouverture buccale est d'installation progressive",
                "L'atteinte de l'ATM est fréquente et tardive",
                "Le bilan radiologique peut montrer une lyse osseuse",
                "L'ATM est toujours atteinte précocement."
            ],
            correctOptionIndexes: [0, 2],
            explanation: ""
        },
        {
            questionText: "La symptomatologie clinique de I'arthrose temporo-mandibulaire se manifeste par :",
            options: [
                "Crépitations intra-articulaires",
                "Claquements",
                "Crissement",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [0, 2], // Crepitus and potentially 'crissement' (grinding) fit arthrosis. Claquements usually disc displacement.
            explanation: ""
        },
        {
            questionText: "Le Arthrites aigues traumatiques sont :",
            options: [
                "Consécutives a un microtraumatisme, a un bâillement ou une ouverture prolongée",
                "Consécutives a une maladie de système.",
                "Marquées par des douleurs bilatérales intenses du cote lésé, atténuées par les tentatives de mobilisation",
                "La pression occlusale des molaires entre elles est non douloureuse"
            ],
            correctOptionIndexes: [0],
            explanation: "Marquées par des douleurs unilatérales intenses du cote lésé majoré par les tentatives de mobilisations. La pression occlusale des molaires entre elles est douloureuse du coté atteint"
        },
        {
            questionText: "Quels sont les ligaments accessoires de l'articulation temporo- mandibulaire parmi les suivants :",
            options: [
                "Le ligament latéral interne.",
                "Le ligament sphéno-maxillaire.", // Sphénomandibulaire
                "Le ligament orbito-maxillaire.",
                "Le ligament latéral externe.",
                "Le ligament ptérygo-maxillaire." // Ptérygomandibulaire
            ],
            correctOptionIndexes: [1, 4], // Options 2, 5 selected in source (renamed slightly).
            explanation: "Les ligaments extrinsèques : ...le ligament sphéno-mandibulaire... le ligament stylo-mandibulaire... le ligament ptérygo-mandibulaire..."
        },
        {
            questionText: "L'installation de l'arthrite septique au niveau de l'ATM est souvent consecutive a une infection de voisinage :",
            options: [
                "Une otite",
                "Une cellulite masseterine",
                "Une parotidite",
                "Une osteomyelit" // Osteomyelitis
            ],
            correctOptionIndexes: [0, 1, 2, 3],
            explanation: "(ostéite mandibulaire, otite, parotidite, péricoronarite des DDS...),"
        },
        {
            questionText: "L'examen scannographie dans le cas d'une spondylarthrite ankylosante met en évidence au niveau de l'ATM :",
            options: [
                "Une érosion osseuse du condyle",
                "Une présence d'ostéophytes",
                "Une inflammation synoviale",
                "Toutes les réponses sont juste"
            ],
            correctOptionIndexes: [0, 1],
            explanation: ""
        }
    ]
  },
  {
    title: "Les affections vésiculeuses et bulleuses",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Dans le zona:",
            options: [
                "Les lésions vésiculeuses en bouquet siègent au niveau de la commissure labiale",
                "Les vésicules sont disposées en bande suivant le trajet d'un nerf",
                "On retrouve une névralgie essentielle du nerf trijumeau",
                "Les douleurs sont unilatérales"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Image shows vesicles along nerve distribution, unilateral pain."
        },
        {
            questionText: "Les affections bulleuse la muqueuse buccale :",
            options: [
                "peuvent être d'origine auto-immune",
                "Sont souvent liées à une infection virale.",
                "Sont favorisées par l'immunodépression.",
                "Sont dominées par la pemphigoïde bulleus"
            ],
            correctOptionIndexes: [0],
            explanation: "La lésion élémentaire traduit la nature du processus pathologique - La Vésicule = Pathologie d’origine virale - La Bulle= Maladie bulleuse auto-immun"
        },
        {
            questionText: "L'érythème polymorphe se caractérise signe suivant :",
            options: [
                "La cocarde",
                "L'aspect de grand brule",
                "Le signe de Nikolsk",
                "Toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [0],
            explanation: "lésion dite en cocarde au niveau des extrémités (mains, poignets, coudes)"
        },
        {
            questionText: "Le clivage Intra épithéliales constitue le mécanisme de formation des bulles par :",
            options: [
                "Atteinte de la jonction dermo- épidermique",
                "Atteinte des ponts intercellulaires",
                "Atteinte de la lamina dura",
                "toutes les réponses sont fausses"
            ],
            correctOptionIndexes: [1],
            explanation: "Clivage intraéphitélial, par rupture des ponts intercellulaires appelés acantoliyse avec atteinte du complexe desmosometonofilament"
        },
        {
            questionText: "La cocarde est une lésion observée cliniquement dans :",
            options: [
                "Le pemphigus vulgaire.",
                "Le syndrome de Lyell.",
                "L'érythème polymorphe",
                "L'herpès récurrent."
            ],
            correctOptionIndexes: [2],
            explanation: ""
        },
        {
            questionText: "Parmi les signes suivants, lequel n’est pas un signe courant d'une gingivo-stomatite herpétique :",
            options: [
                "Une sècheresse buccale",
                "Vésicules intra-orales",
                "Croutes labiales",
                "Ulcérations intra-orale"
            ],
            correctOptionIndexes: [0],
            explanation: ""
        },
        {
            questionText: "Laquelle des médications suivantes est utilisée pour traiter les gingivostomatites herpétiques:",
            options: [
                "Un antibiotique à large spectre",
                "Un antiinflammatoire non stéroïdien",
                "Un antifongique",
                "Des Corticoïdes",
                "Aciclovir"
            ],
            correctOptionIndexes: [4],
            explanation: "Les infections virales évoluent favorablement et la prescription d’un antivirale (aciclovir®) par voie générale ne se justifie qu’en cas de récidive tout en évitant les anti inflammatoires."
        },
        {
            questionText: "Laquelle des pathologies suivantes est associée aux maladies bulleuses :",
            options: [
                "Zona",
                "Pemphigus",
                "Herpes",
                "La gingivite desquamative"
            ],
            correctOptionIndexes: [1],
            explanation: "C’est une dermatose bulleuse acquise intra-épithelial"
        },
        {
            questionText: "La primo-infection herpétique :",
            options: [
                "Est l'apanage de l'adulte",
                "L'agent pathogène est le virus d'herpès simplex",
                "Se présente sous forme de bulles fragiles laissent vite place à des érosions",
                "La coalescence des lésions donne des ulcérations polycycliques très douloureuses"
            ],
            correctOptionIndexes: [1, 3],
            explanation: "Touche l’enfant entre 06 mois et 5 ans"
        },
        {
            questionText: "L'érythème polymorphe est une affection cutané muqueuse:",
            options: [
                "Est une affection bulleuse chronique",
                "Les lésions cutanées caractéristiques, sous forme de « cocarde »",
                "Les lésions orales bulleuses se rompent rapidement et forment des lésions érosives et douloureuses",
                "Ces lésions siègent sur toutes les gencives et respectent la muqueuse buccale"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Maladie bulleuse aigue. siègent sur toutes la muqueuse buccale et respectent les gencives"
        },
        {
            questionText: "Les affections bulleuses de Ia muqueuse buccale :",
            options: [
                "Sont souvent d'origine infectieuse.",
                "Sont toujours liées à une infection virale.",
                "Peuvent être liées à une maladie auto-immune",
                "Sont favorisées par l'immunodépression"
            ],
            correctOptionIndexes: [2],
            explanation: "Ces conditions peuvent avoir différentes causes, mais elles ne sont pas toujours d'origine infectieuse."
        }
    ]
  },
  {
    title: "FRACTURES DU MASSIF FACIAL",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "La fracture de la tubérosité :",
            options: [
                "Est fréquente chez l’enfant.",
                "S’observe en cas de chute avec un objet en bouche.",
                "Se manifeste par un palais en fer à cheval.",
                "Peut survenir lors de l’extraction de la dent de sagesse supérieure."
            ],
            correctOptionIndexes: [3],
            explanation: "Fracture de la tubérosité : elle survient lors de l’extraction de la dent de sagesse supérieure. Elle se manifeste par un saignement important avec possibilité de CBS."
        },
        {
            questionText: "Dans la fracture Lefort I :",
            options: [
                "On retrouve une ecchymose périorbitaire en lunettes.",
                "La palpation est douloureuse à l’épine nasale antérieure.",
                "La pression des ptérygoïdes est douloureuse appelée \"signe de Guérin\".",
                "Le plateau dentoalvéolaire, saisi entre le pouce et l’index, est mobilisable par rapport au reste du massif facial."
            ],
            correctOptionIndexes: [1, 2, 3],
            explanation: "A : dans la fracture Lefort II"
        },
        {
            questionText: "L’examen clinique d’un traumatisé de la face doit :",
            options: [
                "Rechercher les dents vivantes",
                "Éliminer une urgence vitale",
                "Rechercher une plaie hémorragique",
                "Rechercher une atteinte parodontale avancée"
            ],
            correctOptionIndexes: [1, 2],
            explanation: "Avant tout examen, éliminer toute situation mettant en danger la vie du patient : asymétrie faciale, enfoncement du malaire, rétorsion nasale, ecchymoses, plaies, altération de la motricité faciale, point douloureux, mobilité osseuse."
        },
        {
            questionText: "Le massif facial est renforcé par les structures anatomiques suivantes :",
            options: [
                "Les poutres verticales",
                "Les lignes Lefort I, II et III",
                "Les piliers canins, les piliers malaires et les piliers ptérygoïdiens",
                "Le plateau palatin, le plateau maxillaire et le plateau malaire" // Horizontal beams, not vertical reinforcement structures.
            ],
            correctOptionIndexes: [2], // C represents vertical pillars. D represents horizontal beams. A is too general.
            explanation: "Le massif facial est renforcé par des poutres horizontales (plateau palatin, maxillaire, malaire) et des piliers verticaux (canins, malaires, ptérygoïdiens)."
        },
        {
            questionText: "Les déplacements observés lors des fractures du massif facial :",
            options: [
                "Dépendent du point d’application et de la direction de la force traumatisante",
                "Sont dits secondaires s’ils sont dus aux forces musculaires",
                "Sont dits primaires s’ils sont dus à l’agent traumatisant",
                "Sont dits secondaires s’ils sont dus à l’agent traumatisant"
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Le déplacement dépend de : la force, sa direction, le point et la surface d’application, l’énergie de l’impact."
        },
        {
            questionText: "La fracture de la tubérosité :",
            options: [
                "Est fréquente chez l’enfant",
                "S’observe en cas de chute avec un objet en bouche",
                "Se manifeste par un palais en fer à cheval",
                "Peut survenir lors de l’extraction de la dent de sagesse supérieure"
            ],
            correctOptionIndexes: [3],
            explanation: "A/B : correspondent à une fracture de la voûte palatine."
        },
        {
            questionText: "Les premiers gestes à envisager en cas de traumatisme maxillo-facial :",
            options: [
                "Concernent la réduction des fractures",
                "Doivent être faits après évacuation du patient",
                "Doivent être faits en milieu hospitalier",
                "Visent à éliminer une urgence vitale sur les lieux de l’accident"
            ],
            correctOptionIndexes: [3],
            explanation: ""
        },
        {
            questionText: "Quel examen radiologique de référence prescrivez-vous lors d’une suspicion d’une fracture disjonction cranio-faciale ?",
            options: [
                "Une tomodensitométrie",
                "Une téléradiographie de profil strict",
                "Une radiographie panoramique",
                "Une incidence de Waters"
            ],
            correctOptionIndexes: [0],
            explanation: "La tomodensitométrie (TDM) est l’examen de référence pour l’étude des lésions osseuses."
        },
        {
            questionText: "Un patient victime d’un traumatisme latéro-facial droit lors d’un match de football est orienté en urgence pour suspicion de fracture enfoncement du malaire. Quels sont les signes cliniques ?",
            options: [
                "Une épistaxis",
                "Une limitation de l’ouverture buccale",
                "Une ecchymose périorbitaire en lunettes",
                "Une fixité de l’œil droit"
            ],
            correctOptionIndexes: [0, 1],
            explanation: "C : concerne la fracture de Lefort II. Fracture du malaire : aplatissement de la pommette, hypoesthésie sous-orbitaire, énophtalmie, diplopie, hématome, limitation de l’ouverture buccale, douleur à la palpation."
        },
        {
            questionText: "Quel examen radiologique prescrivez-vous pour confirmer le diagnostic ?",
            options: [
                "Une face basse en bouche ouverte",
                "Une téléradiographie de profil strict",
                "Une radiographie panoramique",
                "Une incidence de Waters"
            ],
            correctOptionIndexes: [3],
            explanation: "L’incidence de Waters permet de visualiser les fractures du malaire et les discontinuités orbitaires (ligne de Campbell)."
        },
        {
            questionText: "Dans la fracture de Lefort I, on note :",
            options: [
                "Ecchymose périorbitaire",
                "Ecchymose labiale supérieure",
                "Diplopie",
                "Epistaxis"
            ],
            correctOptionIndexes: [1, 3],
            explanation: ""
        },
        {
            questionText: "En cas de traumatisme maxillo-facial, les premiers gestes à assurer :",
            options: [
                "Concernent la réduction des fractures",
                "Doivent être faits en milieu hospitalier",
                "Doivent être faits sur les lieux de l’accident",
                "Visent à éliminer une urgence vitale"
            ],
            correctOptionIndexes: [2, 3],
            explanation: ""
        },
        {
            questionText: "Les séquelles fonctionnelles des traumatismes maxillo-faciaux sont :",
            options: [
                "Un enfoncement de la pyramide nasale avec une obstruction nasale",
                "Une cicatrice rétractile ou hypertrophique",
                "Une ankylose temporo-mandibulaire"
            ],
            correctOptionIndexes: [0, 2],
            explanation: ""
        }
    ]
  },
  {
    title: "FRACTURES CONDYLIENNES ET ENFANT",
    subject: "pathologie-y3",
    questions: [
        {
            questionText: "Le traitement des fractures sous condylienne haute :",
            options: [
                "Implique un blocage maxillo-mandibulaire d'une durée de 45 jours.",
                "Ne doit pas prendre en compte le faible risque de l'ankylose temporo-mandibulaire.",
                "Doit être systématiquement et précocement suivi par une rééducation active.",
                "L'abstention thérapeutique peut être une option."
            ],
            correctOptionIndexes: [2],
            explanation: ""
        },
        {
            questionText: "Dans les fractures mandibulaires chez l'enfant :",
            options: [
                "La mise en place de PMV doit se faire à proximité de la crête.",
                "Le risque d'ankylose temporo-mandibulaire est important en cas de fracture condylienne.",
                "La présence de germes rend le traitement orthopédique difficile.",
                "Le blocage maxillo-mandibulaire de longue durée est indiqué en cas de fracture condylienne."
            ],
            correctOptionIndexes: [1],
            explanation: "Tout traumatisme avec ou sans trait de fracture sur la région mentonnière doit faire rechercher une lésion au niveau des condyles mandibulaires."
        },
        {
            questionText: "Le traitement orthopédique des fractures mandibulaires :",
            options: [
                "Nécessite un matériel sophistiqué.",
                "Permet de supprimer le traitement fonctionnel.",
                "Ne peut être réalisé chez l’édenté total.",
                "Peut durer 45 jours."
            ],
            correctOptionIndexes: [2, 3],
            explanation: "Ces méthodes ne nécessitent qu’un faible investissement matériel... Le traitement total de l’édenté est chirurgical..."
        },
        {
            questionText: "Dans les fractures mandibulaires chez l’enfant",
            options: [
                "La mise en place de plaque métallique vissée (PMV) doit se faire à proximité du rebord basilaire.",
                "Le risque d’ankylose temporo-mandibulaire est présent.",
                "La difficulté du traitement orthopédique est en rapport avec une denture lactéale ou mixte.",
                "La présence de germes rend le traitement ORTHOPEDIQUE." // Assuming "difficile" implied.
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Le traitement chirurgical doit prendre en compte la présence des germes des dents définitives"
        },
        {
            questionText: "Le traitement des fractures sous condyliennes hautes QCS",
            options: [
                "Ne tient pas compte du faible risque de l’ankylose temporo-mandibulaire.",
                "Doit être systématiquement et précocement suivi par une réduction active.",
                "L’abstention thérapeutique peut être une option.",
                "Implique un blocage maxillo-mandibulaire de longue durée."
            ],
            correctOptionIndexes: [1],
            explanation: "Traitement fonctionnel par Kiné : fracture articulaire et sous condylienne haute... rétablir l’occlusion, par traction élastique... associée à une rééducation active de 15 jours avec voire plus."
        },
        {
            questionText: "Le traitement des fractures sous condylienne haute QCS",
            options: [
                "Ne doit pas prendre en compte le faible risque de l’ankylose temporo-mandibulaire",
                "Doit être systématiquement et précocement suivi par une réduction active",
                "L’abstention thérapeutique peut être une option",
                "Implique un blocage maxillo-mandibulaire d’une durée de 45 jrs"
            ],
            correctOptionIndexes: [1],
            explanation: ""
        },
        {
            questionText: "Le traitement des fractures sous condylienne haute",
            options: [
                "Ne doit pas prendre en compte le faible risque de l’ankylose temporo-mandibulaire.",
                "Doit être systématiquement et précocement suivi par une réduction active.",
                "L’abstention thérapeutique peut être une option.",
                "Implique un blocage maxillo-mandibulaire d’une durée de 45 jours."
            ],
            correctOptionIndexes: [2], // Option C was selected in the source for this exact question wording.
            explanation: ""
        },
        {
            questionText: "Les fractures de la région dentée de la mandibule",
            options: [
                "Nécessitent un blocage maxillo-mandibulaire en cas de déplacement",
                "Nécessitent un traitement fonctionnel en absence de déplacement.",
                "Font appel à une ostéosynthèse en cas de fractures plurifocales.",
                "Provoquent toujours une lésion du nerf alvéolaire inférieur."
            ],
            correctOptionIndexes: [0, 1, 2],
            explanation: "Dans les fractures sans déplacement... l’immobilisation ne semble pas toujours indispensable. ... nécessite un contrôle fonctionnel... Dans les fractures avec déplacement... le blocage maxillo-mandibulaire indispensable. Une ostéosynthèse par miniplaque peut le remplacer..."
        },
        {
            questionText: "Le traitement orthopédique fait appel à l’utilisation de",
            options: [
                "Arc de contention",
                "Mini plaques vissées",
                "Gouttière",
                "Ligatures d’Ivy"
            ],
            correctOptionIndexes: [0, 2, 3],
            explanation: "Traitement fonctionnel : Ligatures d’Ivy" // Ligatures are functional/orthopedic, PMV are surgical. Arcs and splints (gouttière) are orthopedic.
        },
        {
            questionText: "Le traitement des fractures sous condyliennes hautes",
            options: [
                "Fait appel à l’abstention thérapeutique.",
                "Fais appel un blocage maxillo-mandibulaire prolongé",
                "Doit prendre en compte le risque de l’ankylose temporo-mandibulaire",
                "Doit être rapidement suivi par une rééducation active"
            ],
            correctOptionIndexes: [2, 3],
            explanation: ""
        },
        {
            questionText: "Un enfant âgé de 09 ans présentant une fracture sous condylienne basse doit bénéficier",
            options: [
                "D’un traitement fonctionnel seul",
                "D’une abstention thérapeutique vu le risque d’ankylose",
                "D’un blocage mono maxillaire pendant 15 jours suivi d’un traitement fonctionnel",
                "Toutes les réponses sont fausses" // Correct answer implies BMM + mobilization needed.
            ],
            correctOptionIndexes: [3],
            explanation: "Dans les fractures sous-condyliennes basses, faire une contention (BMM) (Traitement orthopédique) pendant 15 à 20 jours, puis mobiliser l’articulation progressivement."
        },
        {
            questionText: "Le traitement fonctionnel des fractures",
            options: [
                "Est indiqué en cas de fractures non déplacées",
                "Est indiqué en première intention en cas de fractures déplacées.",
                "Repose sur une alimentation solide pour solliciter les fragments fracturés",
                "Impose une surveillance clinique et radiologique"
            ],
            correctOptionIndexes: [0, 3],
            explanation: "Est indiqué en cas (fractures non déplacées ou avec déplacement minime...). L’alimentation doit être strictement liquide durant 1 semaine, puis pâteuse ou mixée..."
        }
    ]
  }
];

module.exports = pathologyY3Quizzes;