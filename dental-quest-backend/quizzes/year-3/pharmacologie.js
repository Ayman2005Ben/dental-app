// quizzes/year-3/pharmacologie.js

const pharmacologyQuizzes = [
  {
    title: "Introduction à la pharmacologie",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant les médicaments appartenant à la liste 1 :",
        options: [
          "Ils sont obligatoirement à prescription hospitalière",
          "Ils sont délivrés uniquement sur ordonnance",
          "Ce sont des substances toxicomanogènes",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Les médicaments de liste 1 regroupent les substances potentiellement dangereuses nécessitant une ordonnance médicale obligatoire. Ils ne sont pas tous réservés à l’hôpital ni tous toxicomanogènes."
      },
      {
        questionText: "La pharmacocinétique :",
        options: [
          "C'est l'étude du devenir du médicament dans l'organisme en fonction du temps",
          "C'est l'étude de ce que fait le médicament à l'organisme qui le reçoit",
          "C'est l'emploi des médicaments pour traiter les maladies",
          "C'est l'étude du prix des médicaments"
        ],
        correctOptionIndexes: [0],
        explanation: "La pharmacocinétique analyse le devenir du médicament dans l’organisme : absorption, distribution, métabolisme, excrétion (ADME)."
      },
      {
        questionText: "La pharmacométrie est :",
        options: [
          "L'étude de ce que l'organisme fait au médicament en fonction du temps",
          "L'étude de ce que le médicament fait à l'organisme qui le reçoit",
          "L'étude des influences de l'appartenance ethnique sur les propriétés pharmacologiques des médicaments",
          "L'analyse quantitative et mathématique de la pharmacodynamie"
        ],
        correctOptionIndexes: [3],
        explanation: "La pharmacométrie correspond à l’analyse quantitative et mathématique de la pharmacodynamie. Elle est utile pour modéliser l’effet du médicament."
      }
    ]
  },
  {
    title: "Formes pharmaceutiques et voies d'administration",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Parmi les avantages de la voie orale :",
        options: [
          "Elle est pratique chez les patients comateux",
          "Elle est peu onéreuse",
          "Certains médicaments administrés par cette voie peuvent être détruits par le suc gastrique",
          "C’est la voie recommandée chez un patient en cas de crise d’épilepsie"
        ],
        correctOptionIndexes: [1],
        explanation: "La voie orale est simple et économique, mais n’est pas adaptée aux patients comateux ou lors de crises d’épilepsie, et certains médicaments peuvent être inactivés par le suc gastrique."
      },
      {
        questionText: "La voie d’administration sous-cutanée :",
        options: [
          "Une voie d’administration parentérale indirecte",
          "Faite par injection de médicaments en solution aqueuse et huileuse",
          "À effet retardé et progressif",
          "Une voie d’urgence"
        ],
        correctOptionIndexes: [2],
        explanation: "La voie sous-cutanée permet une absorption lente et prolongée, idéale pour certains traitements à action retardée."
      },
      {
        questionText: "Préparations injectables et formes ophtalmiques doivent être :",
        options: [
          "Stériles",
          "Pyrogènes",
          "Hypotoniques",
          "À pH alcalin"
        ],
        correctOptionIndexes: [0],
        explanation: "Ces préparations doivent impérativement être stériles pour éviter les infections et assurer la sécurité du patient."
      },
      {
        questionText: "La forme pharmaceutique d'un médicament permet de :",
        options: [
          "Prédire ses effets indésirables",
          "Déterminer son mode d'administration",
          "Connaître sa composition",
          "Prédire son mécanisme d'action"
        ],
        correctOptionIndexes: [1],
        explanation: "La forme galénique d’un médicament (comprimé, sirop, solution injectable…) définit comment le médicament sera administré et influence sa libération et son absorption."
      },
      {
        questionText: "L'absence de substances pyrogènes est obligatoire pour les formes destinées à la/aux voie(s) :",
        options: [
          "Intraveineuse",
          "Transcutanée",
          "Transdermique",
          "Respiratoire"
        ],
        correctOptionIndexes: [0],
        explanation: "Les formes destinées à la voie intraveineuse doivent être apyrogènes pour éviter toute réaction fébrile."
      }
    ]
  },
  {
    title: "Pharmacocinétique : Absorption",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "L'absorption d'un médicament est :",
        options: [
          "Le passage du principe actif de sa forme pharmaceutique au milieu extracellulaire",
          "Le transfert du principe actif du médicament de la forme pharmaceutique aux cellules tissulaires des organes internes",
          "Le passage du principe actif de son site d'administration à la circulation générale",
          "Le transfert du médicament du sang vers les organes et tissus"
        ],
        correctOptionIndexes: [2],
        explanation: "L’absorption correspond au passage du médicament depuis le site d’administration vers la circulation sanguine, ce qui permet sa distribution dans l’organisme."
      },
      {
        questionText: "La forme chimique du principe actif la plus sujette à être absorbée est :",
        options: [
          "La forme solide telle que les comprimés",
          "La forme non ionisée",
          "La forme liquide telle que les solutions buvables",
          "La forme hydrosoluble"
        ],
        correctOptionIndexes: [1],
        explanation: "Les formes non ionisées des médicaments traversent plus facilement les membranes biologiques par diffusion passive."
      },
      {
        questionText: "Concernant l'absorption des médicaments :",
        options: [
          "Les cations bivalents réduisent l’absorption des cyclines",
          "Les antiacides améliorent la biodisponibilité des médicaments qui leur sont associés",
          "La modification de l’état d’ionisation d’un médicament n’a aucune influence sur l’absorption de ce dernier",
          "L’absorption via des systèmes de transport actif n’est pas sujette aux interactions médicamenteuses"
        ],
        correctOptionIndexes: [0],
        explanation: "Les cations bivalents (Ca²⁺, Mg²⁺, Fe²⁺) peuvent former des complexes avec certaines molécules (ex. cyclines), réduisant ainsi leur absorption intestinale."
      },
      {
        questionText: "L’absorption d’un médicament est plus importante quand :",
        options: [
          "Le médicament est polaire",
          "Le médicament est acide faible en milieu acide",
          "Le médicament est base faible en milieu acide",
          "Le médicament a une masse moléculaire élevée"
        ],
        correctOptionIndexes: [1],
        explanation: "Les acides faibles sont mieux absorbés dans un milieu acide (comme l’estomac) car ils sont principalement sous forme non ionisée, facilitant leur passage à travers les membranes."
      },
      {
        questionText: "La connaissance de la cinétique d’un médicament n’apporte pas d’informations permettant de :",
        options: [
          "Choisir les voies d’administration",
          "Choisir les formes pharmaceutiques",
          "Adapter la posologie",
          "Connaître son mode d’action"
        ],
        correctOptionIndexes: [3],
        explanation: "La cinétique médicamenteuse (pharmacocinétique) aide à choisir la voie d’administration, la forme pharmaceutique et la posologie, mais ne renseigne pas directement sur le mécanisme d’action du médicament."
      }
    ]
  },
  {
    title: "Pharmacocinétique : Distribution",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Lors de la phase de distribution des médicaments, la fixation aux éléments figurés du sang englobe :",
        options: [
          "Les formes fixées sur les hématies",
          "La fixation sur les récepteurs cellulaires des organes",
          "La liaison aux protéines plasmatiques",
          "La fixation sur les membranes des globules blancs"
        ],
        correctOptionIndexes: [0],
        explanation: "La fixation aux éléments figurés du sang concerne surtout les globules rouges (hématies). Elle influence la biodisponibilité du médicament et peut limiter sa diffusion vers les tissus."
      },
      {
        questionText: "Lors de la liaison aux protéines plasmatiques, les médicaments acides faibles se lient :",
        options: [
          "À l'albumine",
          "Aux lipoprotéines uniquement",
          "Avec une liaison forte et irréversible",
          "À un grand nombre de sites sur l'albumine"
        ],
        correctOptionIndexes: [0],
        explanation: "L’albumine est la principale protéine plasmique impliquée dans le transport des médicaments acides faibles."
      },
      {
        questionText: "Concernant la diffusion tissulaire des médicaments :",
        options: [
          "Elle est influencée par le débit sanguin irrigant les tissus",
          "C'est le passage de la forme liée active des médicaments du sang vers les tissus",
          "Le passage des médicaments du plasma vers les tissus se fait par diffusion passive uniquement",
          "Elle n'est pas influencée par les caractéristiques physico-chimiques du médicament"
        ],
        correctOptionIndexes: [0],
        explanation: "Le débit sanguin des tissus est un facteur clé : les organes très perfusés (foie, reins, cœur) reçoivent rapidement le médicament."
      },
      {
        questionText: "La fixation des médicaments sur les éléments figurés du sang concerne plus :",
        options: [
          "Les médicaments hydrophiles",
          "Les médicaments lipophiles",
          "Les médicaments à gros poids moléculaire",
          "Les médicaments à faible fixation protéique"
        ],
        correctOptionIndexes: [1],
        explanation: "Les médicaments lipophiles ont tendance à se fixer sur les éléments figurés, ce qui peut ralentir leur élimination et modifier leur distribution dans l’organisme."
      }
    ]
  },
  {
    title: "Pharmacocinétique : Métabolisme",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant le métabolisme des médicaments :",
        options: [
          "C'est l'ensemble des modifications chimiques que subit le médicament dans l'organisme pour donner naissance à un ou plusieurs composés",
          "Conduit à la formation de substances liposolubles et polaires plus facilement éliminées par les milieux aqueux (urine, salive, sueur)",
          "Conduit toujours à la formation de métabolites inactifs",
          "C'est le processus par lequel les médicaments et/ou leurs métabolites sont transférés de manière irréversible de l'environnement interne vers l'environnement externe"
        ],
        correctOptionIndexes: [0],
        explanation: "Le métabolisme médicamenteux correspond aux transformations chimiques qu’un médicament subit dans l’organisme pour former un ou plusieurs métabolites."
      },
      {
        questionText: "Parmi ces propositions concernant la biotransformation des médicaments, indiquer celle qui est vraie :",
        options: [
          "Les réactions de phase I permettent de transformer un médicament hydrophile en un métabolite lipophile, via le cytochrome P450",
          "Les réactions de conjugaison résultent en un transfert de groupements polaires sur la molécule par l’acide glucuronique",
          "La biotransformation des médicaments peut être inhibée par induction enzymatique",
          "Une prodrogue est un composé thérapeutique nécessitant une biotransformation dans l’organisme pour exercer son action thérapeutique"
        ],
        correctOptionIndexes: [3],
        explanation: "Les prodrogues sont inactives à l’état initial et nécessitent une transformation enzymatique pour devenir actives."
      },
      {
        questionText: "L'inhibition enzymatique du cytochrome P450 :",
        options: [
          "C'est un mécanisme lent",
          "C'est une augmentation de l'activité des enzymes du CYP450",
          "Lorsque le médicament est une prodrogue, elle peut diminuer son effet thérapeutique",
          "Elle n'entraîne jamais de surdosage"
        ],
        correctOptionIndexes: [2],
        explanation: "L’inhibition enzymatique diminue la transformation des prodrogues en forme active, ce qui peut réduire l’efficacité du traitement."
      },
      {
        questionText: "La biotransformation des médicaments :",
        options: [
          "Aboutit à la formation de substances plus polaires liposolubles et facilement éliminables par les milieux aqueux",
          "Donnent naissance à des métabolites toujours inactifs",
          "A lieu essentiellement au niveau hépatique",
          "Passe par des réactions de conjugaison, faisant intervenir essentiellement des cytochromes P450"
        ],
        correctOptionIndexes: [2],
        explanation: "Le foie est le principal site de biotransformation. Les métabolites peuvent être actifs ou inactifs."
      }
    ]
  },
  {
    title: "Pharmacocinétique : Élimination",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quelle est la proposition juste ?",
        options: [
          "L'élimination des médicaments par sécrétion tubulaire se fait par des mécanismes essentiellement passifs",
          "L'élimination des médicaments par réabsorption tubulaire se fait par des mécanismes essentiellement actifs",
          "La clairance hépatique est le volume de sang hépatique débarrassé d’un médicament par unité de temps",
          "La biodisponibilité est la perte de médicament par métabolisme avant son arrivée dans la circulation générale"
        ],
        correctOptionIndexes: [2],
        explanation: "La clairance hépatique mesure l’efficacité du foie à éliminer un médicament par unité de temps."
      },
      {
        questionText: "Sachant que le temps de demi-vie d’élimination d’un médicament M est de 1 heure, quelle est la proposition juste ?",
        options: [
          "100 % du médicament M est éliminé après 2 heures",
          "Le médicament M est complètement éliminé après 1 heure",
          "50 % du médicament M est éliminé après 30 minutes",
          "75 % du médicament M est éliminé après 2 heures"
        ],
        correctOptionIndexes: [3],
        explanation: "Le temps de demi-vie (1h) est le temps pour éliminer 50%. Après 2h (deux demi-vies), 50% + 25% = 75% du médicament est éliminé."
      },
      {
        questionText: "La filtration glomérulaire :",
        options: [
          "Les médicaments passent de la lumière tubulaire rénale vers la circulation sanguine",
          "Nécessite la présence de transporteurs sélectifs",
          "Permet le passage de la forme libre du médicament et de la forme liée aux protéines plasmatiques",
          "Processus qui concerne seulement les médicaments dont le poids moléculaire ne dépasse pas 68 000 daltons"
        ],
        correctOptionIndexes: [3],
        explanation: "La filtration glomérulaire est un processus passif. Seule la fraction libre des médicaments de faible poids moléculaire (<68 kDa) peut être filtrée."
      }
    ]
  },
  {
    title: "Cible des médicaments",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant les récepteurs couplés à la protéine G :",
        options: [
          "Ce sont des récepteurs intracellulaires",
          "Leurs effecteurs sont toujours des canaux ioniques",
          "La fixation d’un ligand change leur conformation et active une cascade d’événements intracellulaires",
          "Leur second messager est toujours le calcium"
        ],
        correctOptionIndexes: [2],
        explanation: "Ces récepteurs membranaires changent de conformation lorsqu’un ligand se fixe et activent des cascades intracellulaires via des seconds messagers variés."
      },
      {
        questionText: "Concernant les récepteurs intracellulaires :",
        options: [
          "Leurs ligands sont de nature lipophile",
          "Ils agissent par un couplage à la protéine G",
          "Leurs effecteurs sont exclusivement des canaux ioniques",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "Ces récepteurs, situés dans le cytoplasme ou le noyau, nécessitent des ligands lipophiles (hormones stéroïdiennes, thyroïdiennes, vitamine D) et régulent la transcription génétique."
      },
      {
        questionText: "La fixation du GABA sur son récepteur permet :",
        options: [
          "L’ouverture du canal et l’entrée du Cl⁻",
          "L’entrée des ions Cl⁻ induit une dépolarisation donnant un potentiel membrane inhibiteur",
          "Le récepteur GABA-B est un récepteur canal",
          "Le récepteur GABA-A est couplé à la protéine G"
        ],
        correctOptionIndexes: [0],
        explanation: "La liaison du GABA au récepteur GABA-A ouvre le canal Cl⁻, provoquant une hyperpolarisation et un effet inhibiteur."
      }
    ]
  },
  {
    title: "Pharmacodynamie et Pharmacometrie",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "La pharmacodynamie :",
        options: [
          "Etudie le devenir des médicaments dans l'organisme",
          "Etudie l'effet des médicaments sur l'organisme",
          "N'étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l'étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        correctOptionIndexes: [1],
        explanation: "La pharmacodynamie étudie l'effet des médicaments sur l'organisme, incluant l'intensité, la durée et les mécanismes d'action."
      },
      {
        questionText: "Un agoniste partiel d'un type de récepteurs :",
        options: [
          "Son affinité à ces récepteurs est faible relativement à l'agoniste parfait",
          "La valeur de son PD2 est supérieure à celle du PD2 de l'agoniste parfait",
          "Son activité intrinsèque est inférieure à celle de l'agoniste parfait",
          "Son activité intrinsèque est supérieure à celle de l'agoniste parfait"
        ],
        correctOptionIndexes: [2],
        explanation: "Un agoniste partiel n'active pas complètement la réponse corporelle même lorsqu'il occupe tous les récepteurs. Son activité intrinsèque est donc inférieure à celle de l'agoniste complet."
      },
      {
        questionText: "Un antagoniste compétitif réversible d'un agoniste vis-à-vis d'un type de récepteurs :",
        options: [
          "Possède une affinité supérieure à celle de l'agoniste pour ces récepteurs",
          "Possède une affinité inférieure à celle de l'agoniste pour ces récepteurs",
          "Induit une diminution de l'effet maximal de l'agoniste",
          "Son mode d'action est identique à celui de l'agoniste"
        ],
        correctOptionIndexes: [0],
        explanation: "L'antagoniste compétitif réversible se lie aux mêmes récepteurs que l'agoniste et possède souvent une affinité supérieure pour bloquer temporairement son activité."
      }
    ]
  },
  {
    title: "Facteurs modifiants l'activité des médicaments",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Une exposition à un médicament X est contre-indiquée lors du premier trimestre de la grossesse parce qu'elle peut entraîner :",
        options: [
          "Un effet tératogène chez le fœtus",
          "Un syndrome de sevrage chez le nouveau-né",
          "Les réponses A et B sont justes",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [0],
        explanation: "Le premier trimestre correspond à la période critique de l’organogenèse; certains médicaments peuvent provoquer des malformations congénitales (effet tératogène)."
      },
      {
        questionText: "Le favisme est une « sensibilité anormale » ou idiosyncrasie aux agents oxydants (fève, antipaludéens) qui :",
        options: [
          "Est secondaire à un surdosage",
          "Se manifeste par une augmentation de la taille des globules rouges",
          "Est dû à un déficit en CYP3A4",
          "Est dû à un déficit en glucose-6-phosphate déshydrogénase"
        ],
        correctOptionIndexes: [3],
        explanation: "Le favisme est lié à un déficit génétique en G6PD, entraînant une hémolyse en présence de certains médicaments ou aliments oxydants."
      }
    ]
  },
  {
    title: "Les interactions médicamenteuses",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Une interaction médicamenteuse :",
        options: [
          "Est toujours d'ordre pharmacocinétique",
          "Peut entraîner, par majoration de l'activité d'un médicament, une efficacité moindre de ce traitement",
          "Se produit uniquement aux posologies normally utilisées",
          "Peut nécessiter une adaptation de la posologie de l'un des médicaments"
        ],
        correctOptionIndexes: [3],
        explanation: "Une interaction médicamenteuse peut modifier le devenir ou l’effet d’un médicament. Dans certains cas, il est nécessaire d’adapter la dose pour maintenir l’efficacité ou éviter la toxicité."
      },
      {
        questionText: "Concernant les interactions médicamenteuses d'ordre pharmacodynamique :",
        options: [
          "Ce sont des interactions qui ont lieu pendant la phase d'absorption du médicament",
          "Peuvent être évitées en espaçant les prises des deux médicaments",
          "L'antagonisme est une forme d'interaction médicamenteuse souvent bénéfique et recherchée",
          "La synergie est quand l'effet des deux médicaments pris simultanément est supérieur à la somme des effets de chacun"
        ],
        correctOptionIndexes: [3],
        explanation: "En pharmacodynamie, la synergie potentialisatrice se produit lorsque l’effet combiné de deux médicaments dépasse la simple addition de leurs effets individuels."
      }
    ]
  },
  {
    title: "Médicaments de l'inflammation",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel est le médicament pour lequel un surdosage peut être observé dans l’association à un anti-inflammatoire non stéroïdien ?",
        options: [
          "Bêtabloquant",
          "Diurétique",
          "Anticoagulant oral",
          "Antibiotique"
        ],
        correctOptionIndexes: [2],
        explanation: "Les AINS augmentent le risque de saignement lorsqu’ils sont associés aux anticoagulants oraux, en raison de leurs effets sur l’agrégation plaquettaire et la muqueuse digestive."
      },
      {
        questionText: "Les anti-inflammatoires stéroïdiens (glucocorticoïdes) agissent :",
        options: [
          "Comme antalgiques en absence de processus inflammatoire",
          "Sur l’inflammation quel que soit son étiologie ou sa localisation",
          "En inhibant les cyclo-oxygénases (enzymes impliquées dans le processus inflammatoire)",
          "Uniquement par voie locale"
        ],
        correctOptionIndexes: [1],
        explanation: "Les glucocorticoïdes ont un large spectre d’activité anti-inflammatoire, utilisables pour diverses étiologies et localisations."
      }
    ]
  },
  {
    title: "Médicaments du système nerveux",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel est l’intérêt d’ajouter l’adrénaline aux anesthésiques locaux en chirurgie dentaire (Réponse fausse) ?",
        options: [
          "Prolonger la durée d’action de l’anesthésique local",
          "Réduire le risque de toxicité systémique de l’anesthésique local",
          "Augmenter la perméabilité vasculaire au site d’injection",
          "Réduire les saignements pendant l’intervention chirurgicale"
        ],
        correctOptionIndexes: [2],
        explanation: "L’adrénaline réduit la perméabilité vasculaire (vasoconstriction), prolonge l’effet anesthésique et diminue les saignements. Elle n'augmente pas la perméabilité."
      },
      {
        questionText: "L’addition d’adrénaline à la lidocaïne (anesthésique local) en injection sous-cutanée :",
        options: [
          "Prolonge la durée de l’anesthésie locale par inhibition enzymatique",
          "Prolonge la durée de l’anesthésie locale par vasoconstriction locale",
          "Diminue le risque d’effets indésirables systémiques de la lidocaïne",
          "Augmente la perméabilité de l’endothélium vasculaire"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’adrénaline agit comme vasoconstricteur, ce qui réduit l’absorption systémique de la lidocaïne, prolonge son effet et diminue le risque d’effets indésirables."
      }
    ]
  },
  {
    title: "Médicaments de troubles de l'hémostase",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Les antivitamines K (AVK) :",
        options: [
          "Sont des antiagrégants plaquettaires",
          "Sont utilisés généralement par voie injectable pour des traitements de courte durée",
          "La surveillance du traitement est basée sur le dosage régulier de l’INR",
          "Sont des médicaments à marge thérapeutique large"
        ],
        correctOptionIndexes: [2],
        explanation: "Les AVK sont des anticoagulants oraux qui nécessitent un suivi régulier de l’INR du fait de leur marge thérapeutique étroite."
      },
      {
        questionText: "Quand un patient sous antivitamines K (AVK) vient en cabinet, le chirurgien-dentiste doit vérifier :",
        options: [
          "Le taux de plaquettes",
          "Son état d’hémostase par la mesure de l’INR",
          "Son état d’hémostase par la mesure du temps de céphaline activée (TCA)",
          "Sa numération formule sanguine (NFS)"
        ],
        correctOptionIndexes: [1],
        explanation: "L’INR (International Normalized Ratio) est l’examen de référence pour évaluer l’efficacité et la sécurité d’un traitement par AVK avant tout geste chirurgical."
      }
    ]
  },
  {
    title: "Médicaments de l'appareil cardio-vasculaire",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Les bêtabloquants :",
        options: [
          "Peuvent aggraver un asthme préexistant",
          "Certains sont cardio-sélectifs à forte dose",
          "Les molécules hydrophiles sont privilégiées en cas d’insuffisance rénale",
          "Sont des anti-arythmiques de classe I"
        ],
        correctOptionIndexes: [0],
        explanation: "Les bêtabloquants sont contre-indiqués chez l’asthmatique car ils peuvent provoquer un bronchospasme. Ils appartiennent à la classe II des anti-arythmiques."
      },
      {
        questionText: "Concernant les médicaments du système cardio-vasculaire :",
        options: [
          "Les inhibiteurs de l’enzyme de conversion sont utilisés dans le traitement de l’angor",
          "Les corticoïdes augmentent l’effet des antihypertenseurs",
          "La trinitrine est utilisée dans le traitement de la crise d’angor",
          "Les AINS réduisent l’effet des antihypertenseurs"
        ],
        correctOptionIndexes: [3],
        explanation: "Les AINS réduisent l’efficacité des antihypertenseurs en provoquant une rétention hydrosodée et une vasoconstriction rénale."
      }
    ]
  },
  {
    title: "Médicaments de l'appareil digestif",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Parmi les pathologies digestives suivantes, laquelle peut entraîner une érosion de l’émail dentaire ?",
        options: [
          "La diarrhée",
          "La constipation",
          "La maladie de Crohn",
          "Le reflux gastro-œsophagien"
        ],
        correctOptionIndexes: [3],
        explanation: "Le reflux acide chronique (RGO) est la cause principale d’érosion de l’émail, due à l’exposition répétée aux acides gastriques."
      },
      {
        questionText: "Les pansements digestifs pris simultanément avec d’autres médicaments par voie orale :",
        options: [
          "Améliorent leur absorption digestive",
          "Peuvent conduire à leur inefficacité",
          "Augmentent leur dégradation",
          "Accélèrent leur excrétion rénale"
        ],
        correctOptionIndexes: [1],
        explanation: "Les pansements digestifs réduisent l’efficacité d’autres médicaments par diminution de leur absorption."
      }
    ]
  },
  {
    title: "Les hypoglycémiants",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "La prise en charge dentaire d’un patient diabétique équilibré (HbA1c ≤ 7%) au cabinet dentaire :",
        options: [
          "Nécessite l’instauration systématique d’une antibioprophylaxie",
          "Contre-indique l’utilisation d’anesthésie locale",
          "Doit faire prévoir une séance courte, le matin, en s’assurant que le patient a pris une collation et ses médicaments pour le diabète",
          "Se fait exclusivement en milieu hospitalier quel que soit le niveau de risque du soin dentaire"
        ],
        correctOptionIndexes: [2],
        explanation: "Chez le patient diabétique équilibré, les soins dentaires peuvent être réalisés au cabinet, mais avec certaines précautions : privilégier une séance courte, le matin, et vérifier la prise des repas et du traitement."
      },
      {
        questionText: "La relation entre les maladies parodontales et le diabète est une relation :",
        options: [
          "Bi-directionnelle : le diabète favorise l’apparition des parodontites, et les parodontites contribuent au mécanisme d’insulino-résistance",
          "Les parodontites constituent la deuxième complication du diabète",
          "La prévention des affections dentaires n’a aucun effet sur l’équilibre glycémique",
          "Le processus d’ostéointégration risque d’être perturbé même chez le patient diabétique bien contrôlé"
        ],
        correctOptionIndexes: [0],
        explanation: "La relation est bidirectionnelle : le diabète et les parodontites s’influencent mutuellement."
      }
    ]
  },
  {
    title: "Les antibiotiques",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quelle est la contre-indication formelle à l’utilisation des cyclines ?",
        options: [
          "Infection urinaire non compliquée",
          "Enfant de moins de 8 ans",
          "Allergie aux céphalosporines",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "Les cyclines sont contre-indiquées chez l’enfant de moins de 8 ans et la femme enceinte car elles entraînent une coloration définitive des dents et des atteintes osseuses."
      },
      {
        questionText: "L’antibiothérapie prophylactique est :",
        options: [
          "Indiquée chez tous les patients qui doivent subir un acte dentaire invasif",
          "Administrée par voie locale uniquement",
          "Recommandée chez les patients recevant un traitement par les biphosphonates par voie orale",
          "Indiquée chez les patients transplantés avant tout acte invasif"
        ],
        correctOptionIndexes: [3],
        explanation: "L’antibioprophylaxie est réservée aux patients à haut risque infectieux, comme les transplantés, et non à tous les patients."
      }
    ]
  },
  {
    title: "Les antiseptiques, antifongiques, et antiviraux",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel médicament peut être utilisé pour traiter les lésions fongiques étendues buccales chez le patient immunodéprimé ?",
        options: [
          "Miconazole gel 2 %",
          "Fluconazole gélule 150 mg",
          "Métronidazole comprimé 500 mg",
          "Aciclovir crème 5 %"
        ],
        correctOptionIndexes: [1],
        explanation: "Le fluconazole par voie systémique est recommandé dans les mycoses buccales étendues, notamment chez les patients immunodéprimés."
      },
      {
        questionText: "L’agent antiseptique anti-plaque en supra- et sous-gingival le plus utilisé est :",
        options: [
          "Un ammonium quaternaire (chlorhydrate de cétylpyridinium)",
          "Les dérivés halogénés (povidone iodée, soluté de Dakin)",
          "Un biguanide (chlorhexidine)",
          "Les phénols (listérine, triclosan)"
        ],
        correctOptionIndexes: [2],
        explanation: "La chlorhexidine (biguanide) est l’antiseptique de référence pour contrôler la plaque supra- et sous-gingivale."
      }
    ]
  },
  {
    title: "Patient souffrant d'insuffisance rénale chronique",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant l'utilisation des AINS chez l’insuffisant rénal chronique (IRC) :",
        options: [
          "Les AINS ne nécessitent pas d’adaptation posologique en cas d’altération de la fonction rénale",
          "Ils entraînent une rétention hydrosodée",
          "Ce sont des médicaments néphrotoxiques, à éviter en usage prolongé",
          "En odontologie, il ne faudra pas dépasser 3 à 5 jours de traitement"
        ],
        correctOptionIndexes: [1],
        explanation: "Les AINS sont néphrotoxiques et favorisent une rétention hydrosodée, justifiant leur utilisation prudente et limitée dans le temps chez l'IRC."
      },
      {
        questionText: "Concernant l’utilisation des antibiotiques chez l’insuffisant rénal chronique :",
        options: [
          "Le temps de demi-vie d’élimination de l’amoxicilline est augmenté car elle est éliminée par voie rénale",
          "Les métabolites toxiques de l’azithromycine sont éliminés par voie rénale, nécessitant une adaptation posologique",
          "Le temps de demi-vie d’élimination de la spiramycine est augmenté car elle est éliminée principalement par voie rénale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "L’amoxicilline est éliminée essentiellement par voie rénale, son élimination est donc retardée en cas d’IRC, ce qui augmente son temps de demi-vie."
      }
    ]
  }
];

module.exports = pharmacologyQuizzes;