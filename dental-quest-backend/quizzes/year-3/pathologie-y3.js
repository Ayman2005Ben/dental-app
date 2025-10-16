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
              "Une ulcération extensive à bords déchiquetés, à fond brun induré entouré par un halo périphérique rougeâtre",
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
  }
];

module.exports = pathologyY3Quizzes;