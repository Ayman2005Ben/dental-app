// quizzes/year-3/odf-y3.js

const odfY3Quizzes = [
  {
    title: "Terminologie en ODF",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Le mouvement de gression:",
        options: [
          "Est une anomalie de siège qui indique une inclinaison anormale du grand axe de la dent",
          "Est un mouvement de translation pure",
          "Est dit axial si le mouvement a lieu autour du grand axe de la dent",
          "Est un mouvement qui se fait uniquement dans le sens horizontal"
        ],
        correctOptionIndexes: [1],
        explanation: "La gression est un mouvement de translation pure. L'inclinaison anormale est la 'version', et le mouvement autour de l'axe est la 'rotation axiale'."
      },
      {
        questionText: "En terminologie orthodontique:",
        options: [
          "Le radical designe soit la structure anatomique soit la dysmorphose",
          "Chaque radical est précédé d'un qualificatif qui precise la situation dans l'espace",
          "Le radical céphalie designe l'ensemble du crâne",
          "Le terme hypo designe une reduction d'ensemble du volume"
        ],
        correctOptionIndexes: [0],
        explanation: "Le radical désigne la structure anatomique ou la dysmorphose. Il est précédé par un préfixe. 'Céphalie' c'est la tête. 'Hypo' c'est une insuffisance de volume."
      },
      {
        questionText: "La brachygnathie maxillaire :",
        options: [
          "Se manifeste par un maxillaire trop court",
          "Est une anomalie de forme",
          "Accompagne souvent les décalages",
          "Est une anomalie de position"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La brachygnathie maxillaire est une anomalie de forme du maxillaire, caractérisée par un raccourcissement de sa longueur. Elle peut entraîner un décalage mais n’est pas une anomalie de position."
      },
      {
        questionText: "En cas de gression dentaire :",
        options: [
          "La couronne et la racine se déplacent dans le même sens",
          "La couronne et la racine se déplacent dans deux sens opposés",
          "La dent se déplace parallèlement à son grand axe",
          "La dent est souvent située sur la ligne d’arcade"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La gression correspond à un déplacement dentaire dans le sens de l’éruption, c’est-à-dire parallèlement à l’axe longitudinal de la dent, avec la couronne et la racine allant dans le même sens."
      },
      {
        questionText: "La supraclusie:",
        options: [
          "Est causée par la succion du pouce",
          "Est souvent d'origine héréditaire",
          "Est liée à des troubles de la position de la langue",
          "Peut être en rapport avec une carence en vitamine"
        ],
        correctOptionIndexes: [1],
        explanation: "La supraclusion se manifeste par un recouvrement trop important des incisives. La succion du pouce cause plutôt une béance (infraclusion)."
      },
      {
        questionText: "Dans le sens antéro postérieur un maxillaire court est désigné par :",
        options: [
          "Une rétrognathie maxillaire",
          "Une endognathie maxillaire",
          "Une brachygnathie maxillaire",
          "Une infragnathie maxillaire"
        ],
        correctOptionIndexes: [2],
        explanation: "Brachygnathie désigne un maxillaire court dans le sens antéro-postérieur. Endognathie concerne le sens transversal."
      },
      {
        questionText: "Une mésio-vestibulo-rotation axiale de la 11 signifie que :",
        options: [
          "La face mésiale est déplacée en vestibulaire",
          "La face distale est sur la courbe d'arcade",
          "L'axe de rotation de la dent c'est la face mésiale",
          "L'axe de rotation de la dent c'est la face distale"
        ],
        correctOptionIndexes: [0],
        explanation: "La face mésiale est déplacée en vestibulaire et la distale en palatin. L'axe de rotation est l'axe longitudinal de la dent."
      },
      {
        questionText: "Une infra-position de la canine supérieure signifie :",
        options: [
          "Que la canine se situe au-dessus de la ligne d'arcade",
          "Que la canine se situe au-dessous de la ligne d'arcade",
          "Que la canine se situe en dedans de la ligne d'arcade",
          "Que la canine se situe en dehors de la ligne d'arcade"
        ],
        correctOptionIndexes: [0],
        explanation: "En cas d’infra-position, la canine est incluse ou non éruptée dans l’os, donc située au-dessus du plan d’occlusion, c’est-à-dire plus haute que la ligne d’arcade normale."
      }
    ]
  },
  {
    title: "Examen Clinique en orthodontie",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Le test utilisé pour évaluer la perméabilité nasale chez un patient est :",
        options: [
          "Le test de Gudin",
          "Le test du miroir de Glatzel",
          "Le test de Rosenthal",
          "Le test de la déglutition"
        ],
        correctOptionIndexes: [1],
        explanation: "Ce test consiste à placer un miroir sous les narines pour observer la condensation et ainsi vérifier le passage de l’air."
      },
      {
        questionText: "La position des lèvres au repos considérée comme normale est :",
        options: [
          "Lèvres jointes sans effort",
          "Lèvres écartées de 5 mm",
          "Lèvre inférieure recouvrant les incisives supérieures",
          "Lèvre supérieure découvrant le bord libre des incisives supérieures"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les lèvres doivent être fermées sans contraction musculaire; la lèvre supérieure peut découvrir légèrement (1-2mm) le bord libre des incisives."
      },
      {
        questionText: "La respiration buccale se caractérise par :",
        options: [
          "Une typologie faciale longue.",
          "Une typologie faciale longue avec la langue en position basse.",
          "Une forme en V de l’arcade maxillaire.",
          "La présence de buée sur le miroir placé sous les orifices narinaires (test de Glatzel)."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Lorsque la respiration devient buccale, la langue adopte une posture basse, ce qui entraîne un développement maxillaire insuffisant (arcade en V). Le test de Glatzel montrerait une absence ou une faible buée."
      },
      {
        questionText: "L’examen endo-buccal permet :",
        options: [
          "Déterminer le type de la denture.",
          "Décider du moment opportun d’entreprendre le traitement.",
          "Affirmer la présence ou non d’inclusion dentaire.",
          "Étudier l’occlusion dynamique."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'affirmation de la présence d'une inclusion dentaire relève de l’examen radiologique."
      },
      {
        questionText: "Le test de Glatzel :",
        options: [
          "Permet d’analyser la tonicité labiale.",
          "Permet d’évaluer la perméabilité narinaire.",
          "Permet d’examiner le type de respiration du patient.",
          "Sert à contrôler la musculature péribuccale au cours de la déglutition."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Test du miroir de Glatzel : lors de l’expiration, un miroir refroidi placé sous les narines se charge de buée. L’importance des traces et leur symétrie permettent d’évaluer la perméabilité narinaire."
      },
      {
        questionText: "L’examen clinique en ODF :",
        options: [
          "Permet de décrire l’occlusion dynamique.",
          "Permet d’évaluer la formule dentaire sur radiographie panoramique.",
          "Permet d’examiner les fonctions.",
          "Est toujours complété par des examens complémentaires."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La formule dentaire s'évalue cliniquement, pas sur la radiographie panoramique."
      }
    ]
  },
  {
    title: "Le dossier orthodontique",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La radiographie panoramique :",
        options: [
          "Est un examen de dépistage indispensable",
          "Fournit une vision partielle des arcades dentaires",
          "Constitue un examen de deuxième intention",
          "Permet d’avoir une vue d’ensemble des maxillaires, des dents et des ATM"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La radiographie panoramique est une imagerie de dépistage en première intention, qui donne une vue globale des structures dento-maxillaires, y compris les articulations temporo-mandibulaires (ATM)."
      },
      {
        questionText: "Les photographies :",
        options: [
          "Permettent de compléter et de détailler l’examen clinique",
          "De face, doivent être réalisées en relation centrée",
          "De profil, donnent le diagnostic esthétique",
          "En endo-buccal, sont optimisées par l’utilisation de miroir"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les photographies permettent une analyse esthétique et diagnostique, et les vues intra-buccales sont améliorées grâce aux miroirs. La relation centrée n'est pas une exigence pour les photos de face."
      },
      {
        questionText: "La téléradiographie de profil :",
        options: [
          "Est une technique basée sur la standardisation des clichés.",
          "Est un examen complémentaire de première intention.",
          "Est réalisée à une distance variable de la source d’émission.",
          "Donne un diagnostic squelettique dans les trois sens de l’espace."
        ],
        correctOptionIndexes: [0],
        explanation: "C'est un examen de seconde intention qui donne un diagnostic dans le sens antéropostérieur et vertical, mais pas transversal."
      },
      {
        questionText: "La photographie de profil :",
        options: [
          "Permet de détecter une asymétrie de la forme mandibulaire.",
          "Permet d’apprécier l’angle naso-labial.",
          "Peut montrer une brièveté de la lèvre supérieure.",
          "Peut montrer une progénie."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La photographie de profil permet l’évaluation esthétique du visage. L’asymétrie mandibulaire est mieux appréciée sur la photographie de face."
      },
      {
        questionText: "Le scanner à rayons X :",
        options: [
          "Permet l’exploration de situations complexes.",
          "Permet l’analyse des inclusions dentaires.",
          "Permet la recherche d’un foyer d’ankylose.",
          "Est un examen incontournable du dossier orthodontique."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le scanner n'est pas un examen incontournable (de routine) mais il donne une vue en 3D précise pour l’analyse des inclusions et la recherche d'ankylose."
      }
    ]
  },
  {
    title: "Céphalométrie",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La ligne axe Y :",
        options: [
          "Est appelée ligne de la croissance faciale",
          "Est appelée ligne de la hauteur faciale",
          "Est définie par le point S et le point gonion osseux",
          "Est appelée ligne de référence de la base du crâne"
        ],
        correctOptionIndexes: [0],
        explanation: "L’axe Y représente la direction de la croissance faciale et est un indicateur du type de développement (horizontal ou vertical)."
      },
      {
        questionText: "Le plan de Francfort cutané passe par :",
        options: [
          "Le point sous-orbitaire et le point porion",
          "Le point sous-orbitaire et le point tragus",
          "Le point sous-orbitaire et le point nasion",
          "Le point sous-orbitaire et le point S"
        ],
        correctOptionIndexes: [1],
        explanation: "En clinique, on utilise le tragus comme repère externe du porion pour tracer le plan de Francfort."
      },
      {
        questionText: "Dans un décalage de classe III squelettique, on trouve :",
        options: [
          "Un angle SNA augmenté et SNB diminué",
          "Un angle de convexité supérieur à 11°",
          "Un angle SNB augmenté, et ANB inférieur à 2°",
          "Une valeur de A’B’ inférieure à -1 mm"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Ces valeurs indiquent un positionnement mandibulaire en avant (ou un maxillaire en arrière) par rapport au maxillaire, typique de la classe III squelettique."
      },
      {
        questionText: "L’angle I/F :",
        options: [
          "Est formé par le plan de Francfort et l’axe de l’incisive supérieure",
          "Objective une pro-alvéolie si sa valeur est supérieure à 109°",
          "Donne un diagnostic dentaire dans le sens antéro-postérieur",
          "Objective le degré de protrusion du bloc incisif"
        ],
        correctOptionIndexes: [0],
        explanation: "Cet angle est utilisé pour évaluer l’inclinaison des incisives maxillaires par rapport au plan de Francfort. Une valeur supérieure à la norme indique une pro-alvéolie."
      },
      {
        questionText: "L’angle goniaque :",
        options: [
          "Est formé par une tangente au bord inférieur de la mandibule.",
          "A une valeur moyenne de 128° ± 6°.",
          "Influence — par son ouverture ou sa fermeture — la dimension de l’étage inférieur.",
          "Permet la description antéro-postérieure de la position mandibulaire."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’angle goniaque est formé par la tangente au bord postérieur de la branche montante et la tangente au bord inférieur de la branche horizontale; son ouverture/fermeture modifie la hauteur de l’étage inférieur du visage."
      }
    ]
  },
  {
    title: "Physiologie de l'occlusion chez l'enfant",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Le plan terminal :",
        options: [
          "Est une ligne continue ou à baïonnette tangente aux faces distales des deuxièmes molaires temporaires",
          "Préfigure les rapports des premières molaires permanentes",
          "Définit les rapports maxillaires dans le sens sagittal",
          "Se présente en denture mixte ou permanente"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le plan terminal est une référence en denture temporaire qui permet de prévoir les relations molaires permanentes futures (classe I, II, III) selon la position des deuxièmes molaires temporaires."
      },
      {
        questionText: "La classification d’Angle :",
        options: [
          "Est une classification exclusivement dentaire",
          "Décrit les rapports des canines et des molaires dans les sens transversal et sagittal",
          "Décrit les mouvements mandibulaires en propulsion et latéralité",
          "Décrit les rapports maxillo-mandibulaires dans le sens sagittal"
        ],
        correctOptionIndexes: [0],
        explanation: "La classification d’Angle est une classification dentaire statique, basée uniquement sur la relation des premières molaires permanentes dans le sens sagittal."
      },
      {
        questionText: "Le mouvement de propulsion :",
        options: [
          "Est un trajet de la mandibule depuis la position de repos jusqu’au bout-à-bout incisif",
          "Dépend de la pente incisive",
          "Est guidé par les faces palatines des incisives inférieures",
          "Est guidé par les faces palatines des canines supérieures"
        ],
        correctOptionIndexes: [1],
        explanation: "Le mouvement de propulsion mandibulaire est principalement guidé par les faces palatines des incisives maxillaires, et dépend fortement de l’inclinaison de ces dents (pente incisive)."
      },
      {
        questionText: "Le guide incisif :",
        options: [
          "Est conduit dans sa partie antérieure par la pente incisive.",
          "Est conduit dans sa partie postérieure par la pente condylienne.",
          "Permet une désocclusion totale et immédiate des dents antérieures.",
          "Permet une désocclusion totale et immédiate des dents postérieures."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le guide incisif (pente incisive) assure la désocclusion des secteurs postérieurs lors des mouvements de propulsion."
      }
    ]
  },
  {
    title: "L'étiologie des anomalies dento-maxillo-faciales",
    subject: "odf-y3",
    questions: [
      {
        questionText: "En présence d’un décalage de classe II division 1, les facteurs étiologiques :",
        options: [
          "Sont des facteurs purement héréditaires.",
          "Peuvent être en rapport avec une position haute et antérieure de la langue.",
          "Peuvent être aggravés par la succion du pouce.",
          "Peuvent s’inscrire dans un contexte syndromique."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les causes peuvent être fonctionnelles (habitudes orales, dysfonction linguale), environnementales ou génétiques. L’hérédité seule n’explique pas toutes les classes II division 1."
      },
      {
        questionText: "Les anomalies alvéolaires sont souvent :",
        options: [
          "D’origine génétique",
          "Dues à un trouble fonctionnel",
          "Causées par des parafonctions",
          "Causées par des dyspraxies"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La plupart des anomalies alvéolaires trouvent leur origine dans des troubles fonctionnels, des parafonctions (succion digitale, etc.), et des dyspraxies."
      }
    ]
  },
  {
    title: "Etude diagnostique des anomalies de nombre (excès ou défaut)",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Parmi les étiologies de l’agénésie, on retrouve :",
        options: [
          "Un excès de multiplication des cellules odontoblastiques.",
          "Une mutation du gène MSX1.",
          "Un défaut de multiplication des cellules odontoblastiques.",
          "Un traumatisme dentaire."
        ],
        correctOptionIndexes: [1],
        explanation: "L’agénésie est souvent liée à des causes génétiques, notamment des mutations de gènes comme MSX1 ou PAX9."
      },
      {
        questionText: "Parmi les étiologies des dents surnuméraires, on retrouve :",
        options: [
          "Un traumatisme dentaire en denture lactéale chez le nourrisson.",
          "Un excès de multiplication des cellules odontoblastiques.",
          "Une brachygnathie maxillaire avec rétromaxillie.",
          "L’irradiation."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les dents surnuméraires peuvent résulter d’un trouble du développement dentaire lié à un traumatisme précoce, à une hyperactivité du germe dentaire (excès de cellules odontoblastiques) ou à des facteurs environnementaux comme l’irradiation."
      },
      {
        questionText: "L’hyperdontie se caractérise par :",
        options: [
          "Une agénésie de 6 dents permanentes.",
          "La présence de dents surnuméraires en denture permanente.",
          "Une agénésie partielle des dents permanentes.",
          "La présence de dents surnuméraires au niveau des deux dentures."
        ],
        correctOptionIndexes: [3],
        explanation: "L’hyperdontie désigne un excès de dents, pouvant toucher la denture temporaire et/ou permanente."
      }
    ]
  },
  {
    title: "Etude diagnostique des dents incluses",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La méthode de Simpson détermine la position :",
        options: [
          "De la dent incluse par rapport à la ligne d’arcade.",
          "De la dent par rapport au plan d’occlusion.",
          "Le rayon directeur est horizontal par rapport au plan du film.",
          "Le rayon directeur est plus antérieur de 15°."
        ],
        correctOptionIndexes: [0],
        explanation: "La méthode de Simpson est une technique radiographique qui permet de localiser la position d’une dent incluse en fonction de la ligne d’arcade."
      },
      {
        questionText: "La méthode de CLARK permet :",
        options: [
          "D’évaluer le risque de résorption radiculaire",
          "De situer la dent incluse dans le plan frontal",
          "De déterminer la situation vestibulaire de la dent incluse",
          "De déterminer la situation linguale de la dent incluse"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La règle de Clark permet de savoir si la dent incluse est en position vestibulaire ou linguale/palatine, ce qui la situe dans le plan frontal."
      },
      {
        questionText: "L’hypodontie se caractérise par :",
        options: [
          "Une agénésie totale des dents permanentes",
          "Une agénésie de moins de six dents permanentes",
          "Une agénésie de plus de six dents permanentes",
          "Une atteinte des prémolaires et des incisives latérales"
        ],
        correctOptionIndexes: [1],
        explanation: "Hypodontie : agénésie partielle (< 6 dents). Oligodontie : > 6 dents absentes. Anodontie : absence totale."
      },
      {
        questionText: "La persistance d’une dent de lait sur l’arcade nous oriente sur :",
        options: [
          "Un retard d’éruption",
          "Agénésie dentaire",
          "DDM future par microdontie relative",
          "Ankylose dentaire"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La persistance d’une dent temporaire peut traduire un retard d’éruption, une agénésie de la dent permanente correspondante ou encore une ankylose."
      }
    ]
  },
  {
    title: "Etude diagnostique des DDM et DDD",
    subject: "odf-y3",
    questions: [
      {
        questionText: "L’encombrement secondaire est dû à :",
        options: [
          "Une poussée mésialante des dents de 6 ans.",
          "Une perte prématurée des dents temporaires.",
          "Une perte prématurée des dents permanentes.",
          "Une pathologie d’origine iatrogène."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L’encombrement secondaire apparaît après l’éruption des dents permanentes, souvent à cause d’une poussée mésiale des molaires, de pertes prématurées des dents temporaires ou de facteurs iatrogènes."
      },
      {
        questionText: "La macrodontie vraie est caractérisée par :",
        options: [
          "Un excès dentaire.",
          "Une DDM négative.",
          "Un périmètre d’arcade réduit.",
          "Un maxillaire petit par rapport aux dents."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Dans la macrodontie vraie, les dents sont réellement plus grandes que la normale, ce qui entraîne un excès dentaire et donc une Dysharmonie Dento-Maxillaire (DDM) négative."
      },
      {
        questionText: "Le signe de Quintero est caractérisé par une :",
        options: [
          "Disto-version des incisives centrales permanentes.",
          "Disto-version des incisives latérales permanentes.",
          "Disto-version des incisives latérales temporaires.",
          "Vestibulo-version des incisives centrales permanentes."
        ],
        correctOptionIndexes: [1],
        explanation: "Le signe de Quintero désigne spécifiquement la disto-version (inclinaison distale) des incisives latérales permanentes, souvent signe d'une inclusion canine."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies dento-alvéolaires dans le sens transversal",
    subject: "odf-y3",
    questions: [
      {
        questionText: "L’endoalvéolie maxillaire asymétrique :",
        options: [
          "Présente seulement une linguoclusion unilatérale et correspond à un développement asymétrique du maxillaire.",
          "Présente une forme asymétrique de l’arcade maxillaire.",
          "Est caractérisée par la non-coïncidence des milieux incisifs en RC et en ICM.",
          "Présente un chemin de fermeture droit."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L’endoalvéolie maxillaire asymétrique se traduit par une différence de largeur entre les deux côtés du maxillaire, avec linguoclusion unilatérale. Elle présente une forme d’arcade asymétrique et un chemin de fermeture droit."
      },
      {
        questionText: "Une endoalvéolie maxillaire symétrique avec linguoclusion unilatérale est caractérisée par :",
        options: [
          "Une coïncidence des milieux inter-incisifs supérieur et inférieur en occlusion d’intercuspidation maximale.",
          "Un chemin de fermeture droit.",
          "Une linguoclusion unilatérale du côté dévié.",
          "Des molaires projetées lingualement par rapport à la ligne d’arcade selon l’incidence de Bouvet."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Dans ce cas, on observe une linguoclusion unilatérale et un déplacement lingual des molaires du côté atteint visible sur le cliché de Bouvet."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies dento-alvéolaires dans le sens vertical",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La dysfonction orale la plus fréquemment associée à la béance antérieure est :",
        options: [
          "La succion digitale.",
          "La déglutition atypique.",
          "Le grincement des dents.",
          "La mastication unilatérale."
        ],
        correctOptionIndexes: [1],
        explanation: "La déglutition atypique, caractérisée par l’interposition de la langue entre les arcades, est la dysfonction la plus souvent retrouvée dans les cas de béance antérieure."
      },
      {
        questionText: "La langue est souvent basse en cas :",
        options: [
          "D’endognathie mandibulaire",
          "D’endognathie maxillaire",
          "De deep bite (supraclusie)",
          "D’open bite (béance)"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Une position basse de la langue est associée à l'endognathie maxillaire (faute de stimulation transversale) et à l'open bite (interposition linguale)."
      },
      {
        questionText: "La supraclusion est :",
        options: [
          "Une anomalie essentiellement postérieure",
          "Observée dans toutes les classes d’Angle",
          "Le plus souvent symétrique",
          "Souvent d’origine génétique"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La supraclusion est un recouvrement incisif excessif, le plus souvent symétrique et d'origine héréditaire."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies dento-alvéolaires dans le sens sagittal",
    subject: "odf-y3",
    questions: [
      {
        questionText: "En cas de profil convexe, on peut retrouver :",
        options: [
          "Une proalvéolie supérieure associée.",
          "Une proalvéolie inférieure.",
          "Une biproalvéolie.",
          "Un angle d’attaque augmenté."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Un profil convexe traduit souvent un déséquilibre sagittal avec proalvéolie supérieure et/ou biproalvéolie."
      },
      {
        questionText: "Le diagnostic différentiel de la rétroalvéolie supérieure se fait avec :",
        options: [
          "La rétroalvéolie inférieure.",
          "La proalvéolie inférieure.",
          "La rétrognathie maxillaire.",
          "La classe I squelettique."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La rétroalvéolie supérieure se différencie principalement de la proalvéolie inférieure et de la rétrognathie maxillaire."
      },
      {
        questionText: "Une anomalie dento-alvéolaire du sens sagittal :",
        options: [
          "Peut aggraver une anomalie basale.",
          "Peut compenser un décalage osseux.",
          "Est souvent isolée.",
          "Concerne surtout le maxillaire."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les anomalies dento-alvéolaires sagittales peuvent soit aggraver un décalage squelettique, soit le compenser."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies basales dans le sens transversal",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Une respiration buccale :",
        options: [
          "Donne toujours une insuffisance de croissance transversale.",
          "Peut être due à la présence d’une endognathie sévère.",
          "Peut aggraver une endognathie débutante.",
          "Influence peu le sens transversal."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La respiration buccale est souvent une conséquence ou un facteur aggravant d’une endognathie. Elle peut résulter d’un rétrécissement maxillaire sévère et accentuer un déficit déjà débutant."
      },
      {
        questionText: "Le diagnostic différentiel d’une endognathie maxillaire :",
        options: [
          "Se fait en tenant compte de l’indice d’Izard.",
          "Tient compte de D4G4 et D6G6.",
          "Varie selon le décalage sagittal.",
          "Dépend de la croissance verticale."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le diagnostic différentiel repose sur l’indice d’Izard (rapport transversal) et l’analyse des écarts intercanins (D4G4) et intermolaires (D6G6)."
      },
      {
        questionText: "L’endognathie maxillaire est :",
        options: [
          "Une anomalie squelettique due à une insuffisance de développement transversal",
          "Peut être symétrique ou asymétrique",
          "Se manifeste par un encombrement incisif",
          "Se caractérise par une inclinaison anormale des secteurs latéraux"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'endognathie est une anomalie basale (squelettique) caractérisée par une inclinaison normale des molaires et prémolaires, associée ou non à un encombrement."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies basales dans le sens vertical",
    subject: "odf-y3",
    questions: [
      {
        questionText: "L’insuffisance du développement vertical des maxillaires :",
        options: [
          "Est due à une posture linguale basse.",
          "Est causée par l’avancée du maxillaire par succion du pouce.",
          "Est d’origine héréditaire.",
          "Est due à une musculature hypertonique."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Une insuffisance de développement vertical (face courte) peut avoir une cause héréditaire ou résulter d’une hypertonie musculaire qui empêche la croissance verticale normale."
      },
      {
        questionText: "La béance fonctionnelle :",
        options: [
          "Est constamment associée à une anomalie osseuse",
          "Est souvent associée à une atteinte de la dimension verticale",
          "Nécessite une interception précoce",
          "Peut être causée par une parafonction ou une dysfonction"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L’infraclusion antérieure fonctionnelle n’est pas associée à une anomalie majeure des bases squelettiques, elle est causée par une parafonction et nécessite une interception précoce."
      },
      {
        questionText: "Dans l’excès basal vertical, on retrouve :",
        options: [
          "Une face étroite",
          "Une langue basse",
          "Une interposition linguale",
          "Des fonctions perturbées"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L'excès vertical (face longue) est associé à une face étroite, une langue basse, une interposition linguale et des fonctions perturbées (déglutition atypique, respiration buccale)."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies basales dans le sens sagittal classe II div1",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La classe II/1 à responsabilité mandibulaire se caractérise par :",
        options: [
          "Une rétrognathie.",
          "Un angle SNB diminué.",
          "Un profil osseux concave.",
          "Un angle I/M diminué."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Quand le problème vient de la mandibule, elle est en position reculée (rétrognathie) avec un angle SNB diminué. Le profil est convexe."
      },
      {
        questionText: "Dans la classe II/1 face courte, on retrouve :",
        options: [
          "Un angle goniaque fermé.",
          "Un surplomb et un recouvrement incisifs exagérés.",
          "Des lèvres hypertoniques.",
          "Un angle V/F normal ou augmenté."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La face courte s’accompagne d’un angle goniaque fermé et d’un recouvrement incisif important (supraclusie)."
      },
      {
        questionText: "La classe II division 1 face longue est caractérisée par :",
        options: [
          "Une face longue et étroite",
          "Un profil convexe",
          "Une croissance mandibulaire à tendance horizontale",
          "La présence du stomion"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La classe II/1 face longue se caractérise par une face longue et étroite avec un profil convexe. La croissance est à tendance verticale."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies basales dans le sens sagittal classe II div2",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Parmi les signes cliniques suivants, quels sont les signes faciaux de la classe II/2 :",
        options: [
          "Un profil sous-nasal plus ou moins concave.",
          "Des rapports de classe II molaire.",
          "Une supraclusion incisive.",
          "Une vestibulo-version des incisives centrales supérieures et une linguo-version des incisives latérales."
        ],
        correctOptionIndexes: [0],
        explanation: "Les signes faciaux en II/2 incluent surtout un profil sous-nasal concave. Les autres propositions sont des signes dentaires et occlusaux."
      },
      {
        questionText: "Dans la classe II division 2 :",
        options: [
          "L'examen de l’occlusion dynamique reste correct",
          "La courbe de Spee maxillaire est accentuée",
          "Des rapports occlusaux de classe I sont possibles",
          "On retrouve parfois un sourire gingival"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le chemin de fermeture est souvent distalé. La courbe de Spee peut être accentuée. Des rapports de classe I sont possibles."
      },
      {
        questionText: "Dans l’occlusion de classe II division 2, on retrouve :",
        options: [
          "Vestibulo-version des incisives avec une classe II molaire",
          "Vestibulo-version des incisives centrales et linguo-version des incisives latérales",
          "Linguo-version des incisives centrales et vestibulo-version des incisives latérales",
          "Linguo-version des incisives avec classe I molaire"
        ],
        correctOptionIndexes: [2],
        explanation: "Une des formes cliniques classiques est la palato-version (linguo-version) des 2 incisives centrales et la vestibulo-version des 2 latérales."
      }
    ]
  },
  {
    title: "Diagnostic des anomalies basales dans le sens sagittal classe III",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La classe III squelettique :",
        options: [
          "Est une anomalie affectant les bases osseuses.",
          "Est caractérisée par une linguoversion des incisives supérieures.",
          "L’angle ANB est diminué.",
          "L’angle de convexité est inférieur à 21°."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "En classe III squelettique, il y a un décalage osseux avec un angle ANB diminué. La linguoversion des incisives supérieures est une compensation possible, mais pas une caractéristique systématique."
      },
      {
        questionText: "La classe III par prognlissement mandibulaire :",
        options: [
          "Est une anomalie fonctionnelle",
          "Permet de retrouver une classe I molaire en RC",
          "Est une anomalie basale",
          "Se présente très souvent comme le point de départ d’une prognathie vraie"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le prognlissement mandibulaire est une anomalie cinétique (fonctionnelle) pouvant évoluer vers une vraie prognathie squelettique s’il persiste sans traitement."
      },
      {
        questionText: "La prognathie mandibulaire est caractérisée par :",
        options: [
          "Un angle SNA diminué",
          "Un articulé inverse antérieur",
          "Un profil osseux convexe",
          "Un angle I/M diminué"
        ],
        correctOptionIndexes: [1],
        explanation: "La prognathie mandibulaire est caractérisée par un articulé inverse antérieur. L'angle SNA est normal, le profil est concave, et l'angle I/M peut être augmenté en cas de proalvéolie inférieure."
      }
    ]
  },
  {
    title: "Les grands syndromes en ODF",
    subject: "odf-y3",
    questions: [
      {
        questionText: "Le syndrome de Cauhépe-Fieux se caractérise par :",
        options: [
          "Une latérodéviation fonctionnelle.",
          "Une constriction de l’arcade mandibulaire.",
          "Un maxillaire hyper large.",
          "Une endoalvéolie supérieure avec un articulé croisé unilatéral."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Ce syndrome associe un déséquilibre fonctionnel latéral (latérodéviation) et une endoalvéolie maxillaire unilatérale, entraînant souvent un articulé croisé d’un côté."
      },
      {
        questionText: "Le syndrome de Crouzon se caractérise par :",
        options: [
          "Exophtalmie avec strabisme divergent.",
          "Hypertélorisme.",
          "Une syndactylie avec fusion osseuse et cutanée des phalanges.",
          "Hypoplasie ou absence d’épine nasale antérieure."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Crouzon est une craniosténose avec exophtalmie et hypertélorisme, mais sans syndactylie (qui est caractéristique du syndrome d’Apert)."
      },
      {
        questionText: "Le syndrome du respirateur buccal se caractérise par :",
        options: [
          "Une occlusion croisée dans les secteurs latéraux",
          "Une rotation postérieure de la mandibule",
          "Une déglutition typique avec mastication alternée bilatérale",
          "Une position basse de la langue"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le respirateur buccal présente souvent une endognathie (occlusion croisée), une rotation postérieure mandibulaire et une position basse de la langue. La déglutition est atypique."
      },
      {
        questionText: "Dans le syndrome de Cauhépe-Fleux, on retrouve une :",
        options: [
          "Coïncidence des points inter-incisifs en ICM",
          "Coïncidence des points inter-incisifs au repos",
          "Endoalvéolie unilatérale",
          "Endoalvéolie bilatérale"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Ce syndrome orthodontique est caractérisé par une endoalvéolie supérieure unilatérale ou bilatérale, une latéro-déviation fonctionnelle, et souvent une déglutition infantile avec interposition linguale."
      }
    ]
  },
  {
    title: "La biomécanique appliquée en ODF",
    subject: "odf-y3",
    questions: [
      {
        questionText: "En biomécanique orthodontique, les forces intrinsèques sont délivrées par :",
        options: [
          "Les appareillages fixes.",
          "Les appareillages amovibles.",
          "Les appareillages amovibles stimulant la musculature oro-faciale.",
          "Les appareillages orthopédiques."
        ],
        correctOptionIndexes: [2],
        explanation: "Les forces intrinsèques proviennent de l’activité musculaire du patient, souvent stimulée par des dispositifs fonctionnels comme les activateurs."
      },
      {
        questionText: "Pour un déplacement adéquat, la force orthodontique doit :",
        options: [
          "Être lourde et continue.",
          "Passer par le centre de résistance de la dent.",
          "Passer par le centre de rotation de la dent.",
          "Être légère et continue."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Une force orthodontique légère et continue, appliquée au plus près du centre de résistance, permet un mouvement contrôlé et physiologique."
      },
      {
        questionText: "Le centre de résistance d’une dent :",
        options: [
          "Est situé au tiers occlusal ou au milieu de la racine dentaire",
          "Permet un déplacement en translation",
          "Dépend de la longueur et du nombre de racines",
          "Se trouve au niveau de l’apex"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le centre de résistance d’une dent est le point où une force appliquée produit un déplacement en translation pure. Sa position dépend de la morphologie radiculaire et de l'os alvéolaire."
      },
      {
        questionText: "Dans le dispositif fixe, l’utilisation de fils superélastiques délivre :",
        options: [
          "Des forces continues légères",
          "Des forces discontinues légères",
          "Des forces continues et discontinues",
          "Des forces continues et intermittentes"
        ],
        correctOptionIndexes: [0],
        explanation: "Les fils superélastiques (NiTi) libèrent des forces faibles mais constantes sur une longue durée, ce qui permet un déplacement dentaire physiologique."
      }
    ]
  },
  {
    title: "Réaction tissulaire au cours du déplacement dentaire",
    subject: "odf-y3",
    questions: [
      {
        questionText: "La résorption directe au cours d’un déplacement dentaire :",
        options: [
          "Se fait par voie centripète.",
          "Apparaît après application d’une force orthodontique importante.",
          "Apparaît latéralement et frontalement dans des zones de moindre pression.",
          "Fait intervenir des ostéoblastes qui résorbent la lame criblée."
        ],
        correctOptionIndexes: [2],
        explanation: "La résorption directe se produit dans des zones de pression modérée, latérales ou frontales. Elle est réalisée par les ostéoclastes (et non ostéoblastes)."
      },
      {
        questionText: "Au cours du phénomène de hyalinisation :",
        options: [
          "Il y a un écrasement vasculaire avec dégénérescence cellulaire.",
          "L’activité des ostéoclastes est frontale et latérale à la zone hyaline.",
          "La résorption a lieu dans les espaces médullaires par voie centrifuge.",
          "Une diminution partielle ou totale de la vascularisation est observée."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La zone hyaline est une zone nécrotique due à une compression excessive avec interruption vasculaire. La résorption y est retardée et se fait par voie indirecte (centripète)."
      },
      {
        questionText: "L’apposition osseuse indirecte :",
        options: [
          "Se fait au niveau de la partie profonde de l’alvéole",
          "Se fait au niveau de la face interne de l’os alvéolaire",
          "Permet de maintenir l’épaisseur de l’os alvéolaire",
          "Est caractérisée par la formation des cristaux d’apatite"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Elle intervient lors de la tension ligamentaire, favorisant la formation d’os du côté opposé à la pression pour maintenir l'épaisseur de l'os alvéolaire."
      },
      {
        questionText: "La résorption osseuse indirecte :",
        options: [
          "Se fait par voie centripète",
          "Les ostéoclastes responsables de la résorption osseuse proviennent des espaces médullaires",
          "Débute au niveau de la lame criblée",
          "La compression desmodontale stimule l’activité ostéogénique"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Dans la résorption indirecte (suite à une hyalinisation), les ostéoclastes migrent depuis la moelle osseuse vers la surface alvéolaire, résorbant l’os à distance du ligament comprimé (voie centripète)."
      }
    ]
  }
];

module.exports = odfY3Quizzes;