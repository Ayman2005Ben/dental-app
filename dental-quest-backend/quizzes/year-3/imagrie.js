// quizzes/year-3/imagrie.js

const imagrieQuizzes = [
  {
    title: "Principes fondamentaux de la radiologie",
    subject: "imagrie",
    questions: [
      {
        questionText: "Le tube à rayons X est composé de :",
        options: [
          "Une cathode qui est la source de production des rayons X",
          "Une cathode responsable de l’émission des électrons",
          "Une anode où se compose d’une cible en tungstène noyée dans du cuivre",
          "Une ampoule en verre assurant le vide et permettant l’évacuation de la chaleur"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La cathode est la source des électrons, qui, lorsqu’ils frappent l’anode, produisent les rayons X. L'anode a pour but de transformer l’énergie cinétique des électrons en photons de rayons X."
      },
      {
        questionText: "Les facteurs qui permettent le contrôle du faisceau de rayons X sont :",
        options: [
          "Le temps de pose modifie le nombre de photons qui atteint la cible",
          "Lorsque le voltage est diminué, l’énergie des électrons augmente ainsi que la quantité de photons émis",
          "Lorsque le courant augmente, la quantité de photons émis augmente",
          "Lorsque le voltage augmente, l’énergie des électrons augmente"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Lorsque le voltage augmente (et non diminue), l’énergie de chacun des électrons augmente également ainsi que la quantité de photons émis."
      },
      {
        questionText: "L’imagerie médicale :",
        options: [
          "Est une branche de la radiologie",
          "Utilise dans ses techniques exclusivement les rayons",
          "Est le terme le plus employé aujourd’hui pour remplacer la radiologie",
          "Fait appel à un tube halogène pour produire des ondes acoustiques"
        ],
        correctOptionIndexes: [2],
        explanation: "L'imagerie médicale est un terme plus large qui englobe la radiologie et d'autres techniques. Elle n'utilise pas exclusivement les rayons X (ex: IRM, échographie) et n'utilise pas de tube halogène pour les ondes acoustiques (échographie)."
      },
      {
        questionText: "Parmi les techniques d’imagerie médicale, nous retrouvons :",
        options: [
          "L’imagerie isotopique",
          "L’échographie",
          "L’imagerie par résonance magnétique",
          "Tomographie par émission de Positrons"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Toutes ces techniques font partie de l'imagerie médicale moderne."
      },
      {
        questionText: "L’imagerie médicale :",
        options: [
          "Doit bénéficier d’une interprétation à la fois technique et clinique",
          "Est basée sur l’utilisation des sources de rayonnements pas nécessairement ionisants.",
          "Est basée sur l’utilisation des sources de rayonnements nécessairement ionisants.",
          "Utilise des sources externes ou internalisées."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'imagerie médicale utilise des rayonnements ionisants (rayons X) et non ionisants (ultrasons, ondes radio). Les sources peuvent être externes (tube à rayons X) ou internes (médecine nucléaire)."
      },
      {
        questionText: "Les rayons X :",
        options: [
          "Ont été découverts par Coolidge",
          "Sont des ondes électromagnétiques",
          "Ont une longueur d’onde très longue",
          "Ne font pas partie du spectre électromagnétique comme la lumière visible"
        ],
        correctOptionIndexes: [1],
        explanation: "Les rayons X ont été découverts par Röntgen. Ce sont des ondes électromagnétiques de très courte longueur d'onde, faisant partie du spectre électromagnétique."
      },
      {
        questionText: "L’effet thermo-ionique d’Edison est provoqué :",
        options: [
          "À 1000°",
          "À 1500°",
          "À 20000°",
          "À 200°"
        ],
        correctOptionIndexes: [3],
        explanation: "Il convient de noter que l’effet Edison se produit généralement à des températures encore plus élevées, généralement supérieures à 2000 °C."
      },
      {
        questionText: "Le rayon X traverse tous les corps sauf :",
        options: [
          "Le plomb",
          "Le phosphate",
          "Le calcium",
          "Le manganèse",
          "Les tissus muqueux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le plomb est bien connu pour son fort pouvoir d’absorption des rayons X, c’est pourquoi il est couramment utilisé comme matériau de protection contre les radiations."
      },
      {
        questionText: "L’effet thermo-ionique d’Edison est provoqué :",
        options: [
          "À 1000°",
          "À 1500°",
          "À 20000°",
          "À 200°"
        ],
        correctOptionIndexes: [2],
        explanation: "L'effet thermo-ionique, ou effet Edison, est l'émission d'électrons par un métal chauffé à une température très élevée. Dans le contexte d'un tube à rayons X, le filament de la cathode est chauffé à plus de 2000°C pour libérer les électrons qui seront ensuite accélérés vers l'anode."
      }
    ]
  },
  {
    title: "Le film dentaire : supports, critères de choix, traitements",
    subject: "imagrie",
    questions: [
      {
        questionText: "Dans l’imagerie numérique :",
        options: [
          "Les capteurs sont plus sensibles que les films conventionnels.",
          "L’obtention de l’image est généralement inférieure à celle de l’imagerie conventionnelle.",
          "L’obtention d’image nécessite une dose d’irradiation plus importante.",
          "L’obtention d’image nécessite une dose d’irradiation moins importante."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les capteurs numériques sont plus sensibles, ce qui permet de réduire la dose d'irradiation et le temps d'obtention de l'image par rapport aux films conventionnels."
      },
      {
        questionText: "De quoi est formé le film argentique en radiologie dentaire ?",
        options: [
          "De cristaux de plomb",
          "De cristaux de bromure de cuivre",
          "De cristaux d’argent",
          "De cristaux de bromure d’argent"
        ],
        correctOptionIndexes: [3],
        explanation: "Le film argentique se compose d’un support en plastique sur lequel est déposée l’émulsion de grains de bromure d’argent (AgBr) sensibles aux rayons X."
      },
      {
        questionText: "Les films intra-oraux sont-ils présentés dans une enveloppe opaque et étanche pour :",
        options: [
          "Éviter toute surexposition aux rayons",
          "Éviter toute exposition à la lumière et à l’humidité",
          "Améliorer la qualité de l’image radiologique",
          "Réduire le coût de fabrication"
        ],
        correctOptionIndexes: [1],
        explanation: "L'enveloppe est une pochette thermo-soudée étanche à la lumière et à l'eau, pour protéger le film de la lumière et de la contamination par la salive ou le sang."
      },
      {
        questionText: "Les capteurs numériques :",
        options: [
          "Permettent de réduire le temps d’exposition.",
          "Sont moins sensibles que les films",
          "Permettent une réduction de dose d’irradiation d’environ 40 à 50 % par rapport aux films",
          "Leurs temps d’exposition est égal à 0,32 secondes pour une prémolaire"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les capteurs numériques sont plus sensibles que les films, ce qui permet de réduire significativement le temps d'exposition et la dose de radiation (de 40 à 50% ou plus)."
      },
      {
        questionText: "Quel est le principal avantage de la radiographie numérique par rapport à la radiographie conventionnelle ?",
        options: [
          "Permet de réduire l’exposition aux rayons X",
          "Permet d’avoir une image nette et d’établir ainsi un diagnostic plus fiable.",
          "Nécessite une formation pour être utilisé correctement.",
          "Permet l’archivage des données."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La radiographie numérique réduit l'exposition aux rayons X, permet un traitement d'image pour un meilleur diagnostic, et facilite l'archivage. Cependant, elle nécessite une formation pour son utilisation correcte."
      },
      {
        questionText: "Parmi les caractéristiques techniques du film argentique :",
        options: [
          "Plus les grains de bromure d’argent sont fins plus la définition de l’image produite est bonne.",
          "Plus les grains de bromure d’argent sont gros plus la définition de l’image produite est bonne.",
          "Les films ISO E et F sont les plus utilisés de nos jours",
          "Le film argentique E permet une réduction de la dose d’irradiation."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Des grains fins donnent une meilleure définition. Des grains plus gros augmentent la sensibilité (rapidité) mais diminuent la définition. Les films rapides (ISO E/F) sont utilisés pour réduire la dose d'irradiation."
      },
      {
        questionText: "Dans l’imagerie numérique ;",
        options: [
          "Les capteurs sont plus sensibles que les films conventionnels",
          "L’obtention de l’image nécessite une dose importante d’irradiation",
          "La résolution de l’image est généralement inférieure par rapport l’imagerie conventionnelle",
          "Le capteur CCD utilise la technologie des microprocesseurs et des mémoires"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les capteurs numériques sont plus sensibles (donc moins de dose requise), mais leur résolution spatiale peut être inférieure à celle des meilleurs films argentiques."
      },
      {
        questionText: "Le capteur qui dispose de la technologie ACE (Automatic Control Exposure) :",
        options: [
          "Permet un meilleur centrage du faisceau primaire",
          "Calcule en temps réel l’énergie nécessaire pour obtenir une image de qualité",
          "Envoie le capteur instantanément, une fois la dose suffisante obtenue",
          "Stoppe l’émission des rayons X suite à une information au générateur"
        ],
        correctOptionIndexes: [1],
        explanation: "La technologie ACE analyse en temps réel l'exposition reçue par le capteur et arrête l'émission de rayons X dès que la dose est suffisante, optimisant ainsi la qualité de l'image tout en minimisant la dose."
      },
      {
        questionText: "Le film argentique :",
        options: [
          "Est de haute définition, sans écran, en plastique",
          "Doit être contenu dans une pochette étanche",
          "Sur le support en plastique il y a l’émulsion de grains de bromure de cuivre (Br-Cu).",
          "Sera souple, ce qui lui permet de s’adapter facilement aux structures anatomiques."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le film argentique est constitué de grains de bromure d'argent (AgBr) et non de bromure de cuivre."
      },
      {
        questionText: "Les caractéristiques techniques du film argentique indiquent que :",
        options: [
          "Plus les grains de bromure d’argent sont fins, plus la définition de l’image produite est bonne.",
          "Plus les grains de bromure d’argent sont gros, moins la définition de l’image produite est bonne.",
          "Plus les grains de bromure d’argent sont gros moins le film est sensible",
          "Les films ISO E et F sont les plus utilisés de nos jours."
        ],
        correctOptionIndexes: [],
        explanation: "Des grains plus fins donnent une meilleure définition (A, B). Des grains plus gros rendent le film plus sensible (plus rapide), donc C est faux. Les films E et F sont rapides et donc très utilisés pour la réduction de dose (D)."
      },
      {
        questionText: "Le capteur numérique :",
        options: [
          "Subit un procédé physique et non chimique pour l’obtention du cliché,",
          "Pour sa lecture nécessite obligatoirement l’informatisation du cabinet dentaire",
          "Possède un Dispositif à Transfert de Charge obligatoirement.",
          "Donne toujours une image lisible instantanément."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le capteur numérique utilise un procédé physique (conversion des rayons X en signal électrique) et nécessite un ordinateur. Il n'utilise pas obligatoirement un CCD (il peut être CMOS). L'imagerie indirecte (plaque au phosphore) n'est pas instantanée."
      },
      {
        questionText: "L’imagerie numérique :",
        options: [
          "Possède des capteurs plus sensibles que les films conventionnels",
          "Nécessite une dose d’irradiation importante.",
          "La résolution d’image est généralement inférieure par rapport à l’imagerie conventionnelle.",
          "L’imagerie indirecte nécessite un traitement supplémentaire du capteur, une fois soumis aux rayons X"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les capteurs numériques sont plus sensibles, donc la dose d'irradiation est réduite (B est faux). La résolution peut être inférieure aux films. L'imagerie indirecte (plaques au phosphore) nécessite une étape de lecture (scan) après l'exposition."
      },
      {
        questionText: "Le film dentaire contient une plaque de plomb :",
        options: [
          "Pour éviter le flou radial",
          "Pour éviter le flou dû aux radiations secondaires",
          "Pour protéger l’image",
          "Pour protéger les autres dents",
          "Pour protéger le patient"
        ],
        correctOptionIndexes: [2],
        explanation: "La plaque de plomb à l'arrière du film absorbe les rayons X résiduels après qu'ils aient traversé le film, empêchant ainsi le rétrodiffusion des rayons (backscatter) qui pourrait voiler et dégrader l'image."
      },
      {
        questionText: "La dimension des films intra buccaux est de :",
        options: [
          "31x41",
          "23x36",
          "27x54",
          "28x55",
          "75x90"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les dimensions standards pour les films intra-buccaux incluent 31x41 mm (taille 2, standard adulte) et 27x54 mm (pour les clichés Bite-Wing longs)."
      },
      {
        questionText: "Le film dentaire contient une plaque de plomb :",
        options: [
          "Pour éviter le flou radial",
          "Pour éviter le flou dû aux radiations secondaires",
          "Pour protéger le patient",
          "Pour protéger les autres dents"
        ],
        correctOptionIndexes: [1],
        explanation: "La plaque de plomb absorbe les radiations secondaires (rétrodiffusées) qui, sans elle, pourraient revenir vers le film et créer un flou, dégradant la qualité de l'image."
      },
      {
        questionText: "Le film 57x76 est un film :",
        options: [
          "Rétro alvéolaire",
          "Rétro coronaire",
          "Bite Wing",
          "Occlusal"
        ],
        correctOptionIndexes: [3],
        explanation: "La dimension 57x76 mm correspond à la taille standard des films occlusaux pour adultes."
      }
    ]
  },
  {
    title: "Facteurs influençant la qualité de l’image radiographique",
    subject: "imagrie",
    questions: [
      {
        questionText: "Les caractéristiques des images radiologiques :",
        options: [
          "Les zones non exposées matérialisent les structures ayant arrêté sélectivement le faisceau de rayons",
          "Les zones non exposées vont apparaître en blanc.",
          "Les zones exposées, qui n’ont rencontré aucun obstacle, apparaissent en blanc",
          "Les nombreuses variations de gris témoignent de la densité atomique de chaque structure."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les zones exposées, où les rayons X ont traversé sans être absorbés, noircissent le film radiographique et apparaissent en noir (radio-claires)."
      },
      {
        questionText: "L’agrandissement de l’image radiographique désigne :",
        options: [
          "L’allongement (élongation) de l’image.",
          "Le raccourcissement de l’image.",
          "Une image modifiée sans distorsion et n’est pas de forme géométrique.",
          "Un agrandissement permet que la structure anatomique apparaît plus grande sur l’image qu’en réalité."
        ],
        correctOptionIndexes: [3],
        explanation: "L'agrandissement est une augmentation homothétique de la taille de l'image par rapport à l'objet réel. L'élongation et le raccourcissement sont des distorsions de forme."
      },
      {
        questionText: "La ou les principales causes du flou en radiologie sont :",
        options: [
          "Un mouvement du patient.",
          "Le mouvement du tube radiogène lors de la prise de la radiographie.",
          "La grande distance objet-film.",
          "La sous exposition de la structure à radiographier."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Tout mouvement relatif entre le patient, le tube à rayons X ou le récepteur pendant l'exposition entraîne un flou cinétique qui dégrade la netteté de l'image."
      },
      {
        questionText: "L’agrandissement :",
        options: [
          "Augmente si la distance objet-film augmente et la distance source-objet diminue",
          "Diminue si la distance objet-film diminue et la distance source-objet augmente",
          "A pour conséquence une augmentation du flou géométrique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Pour minimiser l'agrandissement, il faut diminuer la distance objet-film et augmenter la distance source-objet. L'agrandissement est directement lié à l'augmentation du flou géométrique."
      },
      {
        questionText: "Les facteurs liés à la qualité de l’image radiographique numérique sont :",
        options: [
          "La luminosité.",
          "La résolution du contraste.",
          "La taille du capteur.",
          "La taille de l’écran d’affichage."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les qualités intrinsèques d'une image numérique sont sa luminosité, sa résolution en contraste (capacité à distinguer les niveaux de gris), sa résolution spatiale (netteté) et l'absence de distorsion."
      },
      {
        questionText: "Une image radiographique floue peut être obtenue dans le(s) cas suivant(s) :",
        options: [
          "Le mouvement du patient.",
          "Le mouvement du tube radiogène ou du film lors de la prise de la radiographie.",
          "La température du révélateur trop élevée.",
          "La surexposition de la structure à radiographier."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le flou est principalement causé par le mouvement (flou cinétique) ou par des facteurs géométriques (flou géométrique). Les erreurs de traitement (température) ou d'exposition affectent la densité et le contraste, pas la netteté."
      }
    ]
  },
  {
    title: "Contrôle de la qualité en radiologie dentaire",
    subject: "imagrie",
    questions: [
      {
        questionText: "La protection de l’opérateur des rayonnements est possible si le praticien :",
        options: [
          "Évite les clichés inutiles",
          "S’éloigne le plus possible du patient",
          "Maintient le film dans la bouche du patient",
          "Utilise des angulateurs ou des portes-films"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le praticien ne doit jamais maintenir le film dans la bouche du patient pour éviter une exposition directe de ses mains. L'utilisation d'angulateurs, l'éloignement et la justification des clichés sont des principes de base de la radioprotection."
      },
      {
        questionText: "Parmi les critères de qualité d’un générateur dentaire :",
        options: [
          "L’utilisation d’un générateur de haute fréquence est recommandée",
          "Plus la tension est importante (10mA), moins le nombre d’électrons produits est grand",
          "Une collimation de 1,5 mm d’aluminium est recommandée pour les générateurs de 50 à 70 kV.",
          "Le cône d’espacement doit être long afin d’augmenter le volume irradié."
        ],
        correctOptionIndexes: [0],
        explanation: "Un cône long diminue le volume irradié et améliore le parallélisme. L'intensité (en mA) et non la tension (en kV) détermine le nombre d'électrons. La filtration est de 1.5mm pour <70kV et 2.5mm pour >70kV."
      },
      {
        questionText: "Maintenance et contrôles de qualité du matériel en radiologie dentaire :",
        options: [
          "Le contrôle de qualité est dit interne, S’il est réalisé par l’exploitant ou sous sa responsabilité par un prestataire.",
          "Le contrôle de qualité est dit externe, S’il est réalisé par un organisme indépendant de l’exploitant",
          "Le contrôle de qualité externe comprend des contrôles trimestriels puis annuels",
          "Le contrôle de qualité est obligatoire à la réception des équipements, avant leur première utilisation."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les contrôles trimestriels et annuels sont caractéristiques du contrôle de qualité interne, et non externe."
      },
      {
        questionText: "Le rayonnement X a des effets biologiques :",
        options: [
          "Il a la propriété d’ioniser la matière.",
          "Il peut provoquer une exposition interne lorsqu’il est employé en médecine dentaire",
          "L’exposition provoquée par rayonnement direct (provenant du tube radiogène concerne toute personne présente dans la salle de soins.",
          "La dose efficace est la dose équivalente reçue par tout l’organisme calculée à partir de l’irradiation partielle d’un tissu"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "En médecine dentaire, l'exposition est externe (la source est hors du corps). Le rayonnement direct est collimaté vers le patient ; le risque pour les autres personnes vient du rayonnement diffusé."
      },
      {
        questionText: "La qualité de l’image radiographique est affectée par :",
        options: [
          "Le temps d’exposition est court.",
          "Le développement du film radiographique.",
          "La tension des rayons émis et l’intensité faible du courant électrique.",
          "La distance focale (foyer-objet)."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Un temps d'exposition trop court peut entraîner une sous-exposition, mais c'est un paramètre à optimiser. Il faut choisir des temps d'exposition les plus bas possibles tout en garantissant une qualité d'image suffisante au diagnostic."
      }
    ]
  },
  {
    title: "Les repères anatomiques sur radiographies",
    subject: "imagrie",
    questions: [
      {
        questionText: "Un repère anatomique peut être :",
        options: [
          "Un point.",
          "Un plan.",
          "Une structure anatomique.",
          "Une incidence."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Un repère anatomique est une structure (point, ligne, plan, volume) identifiable et spécifique utilisée comme référence. Une incidence est une technique de prise de vue, pas un repère."
      },
      {
        questionText: "Les structures anatomiques radio-claires sont :",
        options: [
          "La suture palatine.",
          "La cloison nasale.",
          "Les fosses nasales.",
          "L’épine nasale antérieure.",
          "L’orifice lacrymo-nasal"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les structures radio-claires (noires sur le film) sont celles qui absorbent peu les rayons X, comme les cavités (fosses nasales), les foramens ou les sutures. La cloison nasale et l'épine nasale sont des structures osseuses denses et donc radio-opaques."
      },
      {
        questionText: "Les structures anatomiques radio-opaques sont :",
        options: [
          "Visibles à la radiographie.",
          "Invisibles à la radiographie.",
          "Des structures résistantes au passage des rayons X.",
          "Des structures non résistantes au passage des rayons X.",
          "Des structures minéralisées."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les structures radio-opaques (blanches sur le film) sont visibles car elles résistent au passage des rayons X en les absorbant. C'est le cas des tissus denses et minéralisés comme l'os ou l'émail."
      },
      {
        questionText: "Sur une radiographie panoramique, les structures anatomiques nettement visibles sont :",
        options: [
          "Le maxillaire",
          "Le mandibulaire",
          "Les glandes salivaires",
          "Les apophyses coronoïdes",
          "Les apophyses glénoïdes"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Une radiographie panoramique offre une vue d'ensemble du maxillaire, de la mandibule (et ses apophyses coronoïdes) et des dents. Les glandes salivaires sont des tissus mous peu visibles, sauf en cas de pathologie (lithiase)."
      },
      {
        questionText: "Les images radio-opaques sont des zones :",
        options: [
          "Plus foncées",
          "Blanches",
          "Pâles",
          "Bleues"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les zones radio-opaques apparaissent blanches ou pâles sur une radiographie, car elles ont absorbé les rayons X et n'ont pas impressionné le film."
      },
      {
        questionText: "Les clichés rétro-alvéolaires apportent au praticien des renseignements sur :",
        options: [
          "L’anatomie des racines",
          "Les condyles mandibulaires",
          "Le sinus maxillaire",
          "La lamina dura"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le cliché rétro-alvéolaire donne une vue détaillée de la dent, de ses racines, du ligament alvéolo-dentaire et de l'os environnant, y compris la lamina dura. Il ne permet pas de voir les condyles."
      },
      {
        questionText: "Les structures mandibulaires visibles sur un Orthopantomogramme sont les :",
        options: [
          "Les fosses nasales",
          "La ligne mylo-hyoïdienne",
          "Les trigones rétromolaires",
          "Le canal dentaire inférieur et le foramen mentonnier"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Les fosses nasales sont des structures du maxillaire supérieur. Les autres options sont toutes des structures mandibulaires visibles sur une radiographie panoramique."
      }
    ]
  },
  {
    title: "Tomodensitométrie (Scanner à rayons X)",
    subject: "imagrie",
    questions: [
      {
        questionText: "Le voxel :",
        options: [
          "Est un pixel",
          "Est de forme cubique",
          "Est de forme sphérique",
          "Est mesuré en micromètres",
          "Détermine l’image 3D"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Le voxel (contraction de volumetric pixel) est l'équivalent tridimensionnel (3D) d'un pixel (2D). Il représente un petit volume cubique de tissu et est la base de la reconstruction de l'image 3D."
      },
      {
        questionText: "La tomodensitométrie repose sur :",
        options: [
          "L’absorption différentielle du rayonnement par les différentes structures anatomiques traversées",
          "L’obtention des images en coupes, d’épaisseurs variables adaptées à la structure à étudier",
          "L’obtention des images en coupes, lors d’une seule rotation autour de la zone à radiographier",
          "L’acquisition hélicoïdale",
          "L’émission d’un faisceau des rayons X de forme conique"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La TDM classique utilise un faisceau fin (en éventail) et nécessite de multiples rotations pour acquérir un volume (acquisition hélicoïdale). Le faisceau conique est caractéristique du Cone Beam (CBCT)."
      },
      {
        questionText: "Parmi les caractéristiques d’un scanner moderne :",
        options: [
          "Une vitesse d’acquisition très élevée.",
          "Les détecteurs sont en cristaux de céramique photoluminescents.",
          "Un détecteur structuré en « anneau »",
          "Un pas de coupe standard est de 1,5 à 1,625",
          "Une réduction de la dose d’exposition au moyen de détecteurs <<monocoupe>>"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Un scanner moderne est dit 'multi-barrettes' ou 'multicoupe' (et non monocoupe), ce qui permet une acquisition rapide. Les détecteurs sont structurés en barrettes qui tournent, pas en anneau fixe."
      },
      {
        questionText: "Les facteurs influençant la qualité de l’image d’un denta-scanner :",
        options: [
          "L’orientation correcte et l’immobilité du patient.",
          "L’absence de déglutition pendant l’acquisition.",
          "L’utilisation d’un champ d’acquisition conforme au diamètre de la structure examinée.",
          "Le taux de teneur radiculaire métallique engendre des artefacts.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tous ces facteurs sont cruciaux. Les mouvements (y compris la déglutition) créent du flou. Un champ d'acquisition bien choisi limite la dose. Les objets métalliques créent des artefacts (stries) qui dégradent l'image."
      },
      {
        questionText: "Lors de la réalisation d’un scanner dentaire :",
        options: [
          "On doit faire au maximum une dizaine de coupes axiales.",
          "L’épaisseur de ces coupes est de 1 millimètre.",
          "Les coupes sont espacées la plupart du temps de 02 cm.",
          "Le logiciel informatique n’est pas nécessaire."
        ],
        correctOptionIndexes: [1],
        explanation: "Un scanner dentaire réalise un grand nombre de coupes très fines (de l'ordre du millimètre ou moins) et très rapprochées (jointives ou chevauchantes) pour permettre une reconstruction 3D précise. Un logiciel est indispensable."
      },
      {
        questionText: "Le scanner à rayon X ou denta scanner en endodontie permet de :",
        options: [
          "Étudier les rapports des lésions péri apicales avec les racines.",
          "Mesurer la longueur de travail au cours du traitement endodontique.",
          "Visualiser une obturation incomplète ou un dépassement de pâte",
          "Est un examen radiologique systématique en OC/E"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le scanner est un examen de deuxième ou troisième intention, non systématique. Il est très utile pour l'analyse complexe des anatomies radiculaires, des lésions et des complications de traitement, mais la mesure de la longueur de travail se fait avec un localisateur d'apex."
      }
    ]
  },
  {
    title: "Rayon X et image radiologique",
    subject: "imagrie",
    questions: [
      {
        questionText: "L’interaction électrostatique avec un électron atomique est appelée :",
        options: [
          "Ionisation",
          "Excitation",
          "Freinage",
          "Collision"
        ],
        correctOptionIndexes: [3],
        explanation: "Dans le contexte de la production de rayons X, lorsque les électrons incidents entrent en collision avec les électrons des atomes de la cible (anode), cela fait partie des interactions qui génèrent le rayonnement."
      },
      {
        questionText: "L’image radiante en radiologie dentaire désigne une image :",
        options: [
          "Non interprétable.",
          "Formée sur le récepteur.",
          "Au niveau de l’objet examiné.",
          "Formée au niveau du foyer."
        ],
        correctOptionIndexes: [0],
        explanation: "L'image radiante est la distribution invisible du faisceau de rayons X après avoir traversé l'objet. Elle n'est pas encore visible ou interprétable ; elle le devient après avoir interagi avec le récepteur (film ou capteur)."
      },
      {
        questionText: "La formation de l’image radiologique se fait par :",
        options: [
          "Une interaction des photons avec la matière",
          "Une augmentation progressive des photons",
          "Une atténuation progressive du faisceau des rayons X",
          "Toutes ces réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'image se forme parce que le faisceau de rayons X est atténué différemment selon les tissus qu'il traverse (interaction photons-matière), créant une image de contraste."
      },
      {
        questionText: "L’atténuation des rayons X dépend de :",
        options: [
          "L’épaisseur de l’objet à radiographier",
          "La composition des structures",
          "La densité et numéro atomique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L’atténuation des RX dépend de l’épaisseur traversée, mais aussi de la composition des structures, en particulier la densité (masse volumique) et le numéro atomique des atomes constituants."
      },
      {
        questionText: "La source usuelle des rayons X :",
        options: [
          "Il s’agit d’un tube où règne un vide poussé et dans lequel se trouvent trois électrodes",
          "Est le tube de Coolidge",
          "Sa tension accélératrice varie selon les besoins de l’utilisation",
          "Il s’agit d’un tube où règne un vide poussé et dans lequel se trouvent deux électrodes"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le tube de Coolidge est la source standard. Il contient deux électrodes : la cathode (négative) et l'anode (positive). Il n'y a pas de troisième électrode."
      },
      {
        questionText: "Le spectre continu de rayons X :",
        options: [
          "Se traduit par l’émission d’un photon de rayon X qui rayonne à partir du site de la collision",
          "Est appelé le rayonnement de freinage",
          "Est appelé le spectre de raies",
          "Se traduit par l’émission d’un photon de rayon X qui rayonne à partir du site de freinage"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le spectre continu est produit par le ralentissement (freinage) des électrons lorsqu'ils passent près des noyaux de la cible. Le spectre de raies est produit par la collision avec les électrons des couches internes."
      },
      {
        questionText: "En imagerie médicale :",
        options: [
          "L’interprétation des images est à sens unique soit technique soit clinique",
          "Nous utilisons des sources de rayonnement exclusively ionisantes.",
          "En soignant un patient, on ne soigne pas des images.",
          "L’image obtenue est fidèle"
        ],
        correctOptionIndexes: [2],
        explanation: "L'interprétation est à la fois technique et clinique. L'imagerie utilise des rayonnements ionisants et non-ionisants. L'image n'est jamais parfaitement fidèle (distorsions, artefacts). La proposition C rappelle que l'image est un outil au service du soin du patient."
      },
      {
        questionText: "Une anode dans un tube à rayons X :",
        options: [
          "Est la source de production de rayons.",
          "Appelée aussi “cible ou anticathode”",
          "Elle est responsable de l’émission des électrons.",
          "Composée généralement de tungstène et de trace de thorium."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'anode (ou cible) est le lieu de production des rayons X. C'est la cathode qui est responsable de l'émission des électrons."
      },
      {
        questionText: "Une gaine dans un tube à rayons X :",
        options: [
          "Assure une protection mécanique de l’enveloppe du tube.",
          "S’éloigne le plus possible du patient",
          "Permet une isolation électrique du tube et elle est reliée à la terre.",
          "Facilite le raccordement des câbles pour l’anode et la cathode."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La gaine plombée a de multiples rôles : protection mécanique, isolation électrique, dissipation de chaleur, et support pour les connexions, tout en contenant le rayonnement parasite."
      },
      {
        questionText: "L’application des rayons X en pratique médicale :",
        options: [
          "Radiographie standard du squelette osseux.",
          "Imagerie par résonance magnétique (IRM).",
          "Tomodensitométrie.",
          "Radiothérapie."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'IRM n'utilise pas les rayons X, mais un champ magnétique et des ondes radio."
      },
      {
        questionText: "L’absorption de photons X :",
        options: [
          "Aboutit à une image finale",
          "Développe le film radiographique",
          "Aboutit à une image latente",
          "Se fait sur les deux faces du film",
          "Permet de visualiser une image"
        ],
        correctOptionIndexes: [2],
        explanation: "Lorsque les photons X sont absorbés par l'émulsion du film, ils créent une modification physico-chimique invisible appelée 'image latente'. Cette image ne deviendra visible (image finale) qu'après le processus de développement chimique."
      },
      {
        questionText: "L’absorption de photons X :",
        options: [
          "Aboutit à une image finale",
          "Développe le film radiographique",
          "Aboutit à une image latente",
          "Se fait sur les deux faces du film"
        ],
        correctOptionIndexes: [2],
        explanation: "L'interaction des photons X avec les cristaux de bromure d'argent crée une image latente, qui est une modification invisible. Le développement chimique est nécessaire pour la transformer en image visible."
      }
    ]
  },
  {
    title: "Techniques conventionnelles d'imagerie",
    subject: "imagrie",
    questions: [
      {
        questionText: "L’ouverture buccale dans l’incidence face base bouche ouverte nous permet de :",
        options: [
          "Dégager les condyles des mastoïdes",
          "Dégager les parties antérieures et postérieures de la mandibule",
          "Dégager les DDS inférieures et supérieures",
          "Bien visualiser la région de l’apophyse coronoïde"
        ],
        correctOptionIndexes: [0],
        explanation: "L'incidence face base (ou Hirtz) bouche ouverte est spécifiquement conçue pour déplacer les condyles mandibulaires vers l'avant et vers le bas, les dégageant ainsi des structures osseuses denses de la base du crâne comme les mastoïdes, pour une meilleure visualisation."
      },
      {
        questionText: "L’incidence maxillaire défilé permet de visualiser :",
        options: [
          "Les cavités pneumatiques de la face, en particulier les sinus maxillaires.",
          "Des fractures de la région symphysaire.",
          "La branche montante et apophyse coronoïde.",
          "La région molaire et angulaire."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'incidence maxillaire défilé (ou mandibule défilée) est une technique oblique visant à projeter un côté de la mandibule sans superposition de l'autre, ce qui est idéal pour visualiser la région de l'angle, la branche montante et l'apophyse coronoïde."
      },
      {
        questionText: "L’incidence Hirtz latéralisée a pour intérêt :",
        options: [
          "Étude de la base du crâne.",
          "Étude de l’arcade zygomatique.",
          "Étude de l’arc mandibulaire.",
          "Étude des sinus sphénoïdaux."
        ],
        correctOptionIndexes: [0],
        explanation: "L'incidence de Hirtz, qu'elle soit standard ou latéralisée, est l'incidence de choix pour l'étude de la base du crâne et la mise en évidence d'éventuelles asymétries."
      },
      {
        questionText: "La radiographie Bitewing est une technique qui :",
        options: [
          "Permet le diagnostic des traumatismes alvéolodentaires.",
          "Autorise le diagnostic et le contrôle des lésions parodontales.",
          "Permet le dépistage de caries dentaires proximales.",
          "Ignore les couronnes pour donner une image précise des racines."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le Bitewing (ou rétrocoronaire) est spécifiquement conçu pour visualiser les couronnes des dents supérieures et inférieures sur un même cliché, ce qui en fait l'examen de référence pour le dépistage des caries interproximales et l'évaluation du niveau de l'os alvéolaire."
      },
      {
        questionText: "Le mordu occlusal permet de :",
        options: [
          "Visualiser les déplacements fracturaires dans le plan coronal axiale",
          "Visualiser les déplacements des fractures basiliaires",
          "Visualiser aux maxillaires la position dans le plan vestibulo-palatin d’un élément inclus",
          "Détecter une lithiase salivaire dans la portion terminale du canal excréteur des glandes sub-mandibulaires."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le cliché occlusal donne une vue 'par-dessus' (maxillaire) ou 'par-dessous' (mandibule), ce qui est idéal pour localiser un objet (dent incluse, corps étranger) dans le sens vestibulo-lingual/palatin et pour visualiser les calculs (lithiases) dans les canaux salivaires."
      },
      {
        questionText: "La radio Orthopantomogramme :",
        options: [
          "Est un examen de deuxième intention.",
          "Permet une évaluation globale des maxillaires et des dents.",
          "Permet de visualiser les cavités pneumatiques de la face.",
          "Permet de détecter les lithiases salivaires."
        ],
        correctOptionIndexes: [1],
        explanation: "L'orthopantomogramme (panoramique) est typiquement un examen de première intention qui offre une vue d'ensemble des arcades dentaires, du maxillaire et de la mandibule."
      }
    ]
  },
  {
    title: "L'imagerie numérique : Principes et intérêts",
    subject: "imagrie",
    questions: [
      {
        questionText: "La radiologie numérique, à la différence de la radiologie argentique :",
        options: [
          "Utilise un procédé chimique pour l’obtention de l’image",
          "Utilise un procédé informatique pour le traitement d’image",
          "Permet une visualisation instantanée de l’image",
          "Utilise des capteurs numériques"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La radiologie numérique utilise un procédé informatique (et non chimique) pour l'obtention et le traitement de l'image, grâce à des capteurs numériques qui remplacent le film argentique."
      },
      {
        questionText: "Les systèmes de radiographie numérisée (DR) avec conversion indirecte :",
        options: [
          "Permettent l’obtention instantanée de l’image",
          "Permettent l’acquisition différée de l’image",
          "Impliquent l’utilisation d’un scintillateur qui transforme les rayons X en signal électrique",
          "Impliquent l’utilisation d’un scintillateur qui transforme la lumière en signal électrique",
          "Impliquent l’utilisation d’un scintillateur qui transforme les rayons X en lumière"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Dans la conversion indirecte, un scintillateur transforme d'abord les rayons X en lumière visible. Ensuite, un photodétecteur (comme un capteur CCD ou une photodiode) transforme cette lumière en signal électrique. L'image est obtenue instantanément."
      },
      {
        questionText: "La radiographie numérique est :",
        options: [
          "Un système avec film.",
          "Un système avec capteur.",
          "Un système où la soustraction est de règle.",
          "Un système où le développement de l’image se fait dans des bains spéciaux."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La radiographie numérique est un système sans film qui utilise un capteur. Elle ne nécessite pas de développement chimique. La soustraction numérique est une possibilité de traitement d'image, mais pas une règle systématique."
      },
      {
        questionText: "Dans l’image numérique directe nous retrouvons :",
        options: [
          "Une machine à rayon X",
          "Un capteur intra-oral",
          "Un écran central",
          "Un ordinateur"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le système de radiographie numérique directe se compose d'un générateur de rayons X, d'un capteur (souvent relié par un fil) et d'un ordinateur avec un écran pour visualiser et traiter l'image."
      },
      {
        questionText: "Les techniques d’imagerie numérique intra-orale :",
        options: [
          "Utilisent seulement entre 16 et 25 nuances de gris pour obtenir des résolutions supérieures",
          "Augmentent l’exposition aux rayonnements",
          "Ont l’inconvénient d’utiliser des capteurs volumineux",
          "Présentent un coût d’installations initial élevé"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La radiographie numérique permet d'obtenir une bien meilleure résolution en contraste (jusqu'à 256 niveaux de gris ou plus) et réduit l'exposition aux rayonnements. Ses principaux inconvénients sont le coût initial et la rigidité/volume des capteurs directs."
      }
    ]
  },
  {
    title: "Imagerie par Résonance Magnétique (IRM)",
    subject: "imagrie",
    questions: [
      {
        questionText: "L’IRM utilise :",
        options: [
          "Les neutrons",
          "La résonance suite à une stimulation de type onde radio",
          "Les rayons X",
          "Les protons",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La formation de l'image IRM repose sur l'interaction d'un champ magnétique puissant et d'une onde de radiofréquence pour exciter les protons (noyaux d'atomes d'hydrogène) présents dans les tissus."
      },
      {
        questionText: "L’image claire sur une coupe IRM est dite :",
        options: [
          "Radio-claire",
          "Radio-sombre",
          "Radio-opaque",
          "Hyper-intense",
          "Hypo-intense"
        ],
        correctOptionIndexes: [3],
        explanation: "En IRM, on ne parle pas de 'radio-claire' ou 'radio-opaque'. Un signal fort, qui apparaît clair ou blanc sur l'image, est qualifié d'hyper-intense ou en hypersignal."
      },
      {
        questionText: "L’IRM permet de différencier :",
        options: [
          "Au sein d’un même tissu, le tissu physiologique du pathologique",
          "Deux tissus tumoraux",
          "Le ménisque ou le ligament des ATM",
          "Les vaisseaux conjoints",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "L'IRM a une excellente résolution en contraste des tissus mous, ce qui lui permet de différencier avec précision des structures anatomiques fines (ligaments, ménisques) et de distinguer les tissus sains des tissus pathologiques."
      },
      {
        questionText: "Lors de la réalisation d’une IRM pour obtenir une résonance, les éléments qu’il faut réunir sont :",
        options: [
          "Un rayonnement laser.",
          "Un champ magnétique.",
          "Une onde électromagnétique.",
          "Une antenne.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "La réalisation d'une IRM nécessite un champ magnétique puissant pour aligner les protons, une onde électromagnétique (radiofréquence) pour les exciter, et une antenne pour émettre cette onde et recevoir le signal en retour."
      },
      {
        questionText: "L’IRM est un examen radiologique qui :",
        options: [
          "Permet d’obtenir des images uniquement en 2 dimensions",
          "Permet une étude morphologique et fonctionnelle des organes",
          "Utilise les rayons x"
        ],
        correctOptionIndexes: [1],
        explanation: "L'IRM est une technique d'imagerie en coupes qui permet des reconstructions en 2D et 3D. Elle n'utilise pas de rayons X et offre une excellente analyse morphologique et, avec des séquences spécifiques, une analyse fonctionnelle."
      },
      {
        questionText: "L’IRM est indiquée pour :",
        options: [
          "Les pathologies traumato-orthopédiques",
          "L’exploration de l’appareil génital et de la pelvis",
          "Les pathologies osseuses"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L'IRM excelle dans l'étude des tissus mous (pathologies ostéo-articulaires comme les ligaments/ménisques, appareil génito-urinaire, système nerveux). Pour l'étude de l'os pur, le scanner (TDM) est souvent plus performant."
      },
      {
        questionText: "Les Contre Indications Absolues de l’IRM sont :",
        options: [
          "Pacemaker/défibrillateur cardiaque implantable",
          "Corps étranger métallique intraoculaire ou intracrânien",
          "Valve cardiaque biologiques",
          "Les femmes enceintes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les contre-indications absolues concernent les dispositifs électroniques (pacemaker) et les corps étrangers ferromagnétiques dans des zones critiques (œil, cerveau) à cause du risque de déplacement par le champ magnétique. Les valves biologiques et la grossesse (après le 1er trimestre) sont des contre-indications relatives."
      }
    ]
  },
  {
    title: "Tomographie volumique par faisceau conique (Cône Beam)",
    subject: "imagrie",
    questions: [
      {
        questionText: "Le cone-beam ou CBCT :",
        options: [
          "Est une tomographie volumique numérique à faisceau cylindrique.",
          "Est un examen de 2ème intention.",
          "Est plus irradiant que la tomodensitométrie classique.",
          "Est moins sujet aux artefacts métalliques que le scanner."
        ],
        correctOptionIndexes: [3],
        explanation: "Le CBCT utilise un faisceau de rayons X de forme conique. C'est une technique 'low dose', moins irradiante que le scanner conventionnel, et généralement moins sensible aux artefacts générés par les restaurations métalliques."
      },
      {
        questionText: "Lors de la réalisation d’un cone-beam :",
        options: [
          "Le patient doit être en position debout uniquement.",
          "L’émetteur de rayons X et le détecteur sont solidaires et alignés.",
          "L’appareil subit une rotation autour du sujet.",
          "Les constantes d’acquisition sont définies en fonction de la corpulence du sujet.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'acquisition se fait généralement en position assise ou debout, pas seulement debout. Le couple émetteur/détecteur tourne autour de la tête du patient pour acquérir le volume."
      },
      {
        questionText: "Le cone-beam est réalisé, dans le cas :",
        options: [
          "D’endodontie guidée.",
          "De fractures radiculaires verticales.",
          "Dentaire entièrement stade 2.",
          "D’anomalies de structures dentaires.",
          "Des pathologies des ATM."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Le CBCT a de nombreuses indications en odontologie pour l'analyse 3D fine. Pour une carie de stade 2 non complexe, une radiographie rétro-alvéolaire est généralement suffisante et préférable en raison de la dose plus faible."
      }
    ]
  },
  {
    title: "Dosimétrie et radioprotection",
    subject: "imagrie",
    questions: [
      {
        questionText: "Les dispositifs de mesure des taux d’irradiations sont :",
        options: [
          "Le dosimètre personnel.",
          "Les paravents plombés.",
          "Le dosimètre d’ambiance.",
          "Le COEMA.",
          "Le dosimètre témoin."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les dosimètres (personnel, d'ambiance, témoin) sont des dispositifs de mesure de dose. Les paravents plombés sont des équipements de protection collective (moyens de protection), pas des instruments de mesure."
      },
      {
        questionText: "Lors d’une prise de radiographie, l’enfant doit être protégé par :",
        options: [
          "Un tablier plombé",
          "Un collier thyroïdien (collier cervical)",
          "Des Gants plombés",
          "Des Lunettes plombées",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La protection du patient, et en particulier de l'enfant qui est plus radiosensible, implique l'utilisation systématique d'un tablier plombé et d'un cache-thyroïde pour protéger les organes les plus sensibles qui ne sont pas dans le champ d'examen."
      },
      {
        questionText: "La radiosensibilité des tissus dépend des facteurs suivants :",
        options: [
          "Le sexe",
          "La dose",
          "L’âge",
          "La valeur dosimétrique",
          "L’organe"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "La radiosensibilité varie en fonction de nombreux facteurs : le type de tissu (organe), l'âge (les enfants sont plus sensibles), le sexe, et les caractéristiques du rayonnement lui-même (dose, débit de dose)."
      },
      {
        questionText: "Il existe des organes plus radiosensibles que d’autres, tels que :",
        options: [
          "La peau",
          "Le sein",
          "La thyroïde",
          "La moelle osseuse"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La moelle osseuse (cellules hématopoïétiques), la thyroïde et le sein font partie des tissus les plus radiosensibles du corps. La peau est considérée comme ayant une radiosensibilité modérée."
      },
      {
        questionText: "Les équipements de protection collective (EPC), sont :",
        options: [
          "Le tablier plombé de protection radiologique",
          "Les lunettes plombées de protection radiologique",
          "Les paravents plombés ou les parois en verre plombé",
          "Le plateau ou écran cervical plombé"
        ],
        correctOptionIndexes: [2],
        explanation: "Les équipements de protection collective (EPC) sont des dispositifs fixes ou mobiles qui protègent plusieurs personnes ou l'environnement (ex: paravents, murs). Les tabliers, lunettes et caches-thyroïde sont des équipements de protection individuelle (EPI)."
      },
      {
        questionText: "Quelles sont les règles de la radioprotection :",
        options: [
          "Le dosimètre personnel",
          "Le temps",
          "L’écran",
          "Collier thyroïdien ou collier cervical"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les trois grands principes de la radioprotection pour les sources externes sont : réduire le TEMPS d'exposition, augmenter la DISTANCE à la source, et utiliser des ÉCRANS de protection. Le dosimètre et le collier sont des outils de mesure et de protection, pas des principes."
      }
    ]
  }
];

module.exports = imagrieQuizzes;