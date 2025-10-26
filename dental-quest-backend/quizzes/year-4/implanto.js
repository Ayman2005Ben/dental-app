// quizzes/year-5/implanto.js

const implantoQuizzes = [
  {
    title: "Bases Fondamentales et Résorption",
    subject: "implanto",
    questions: [
      {
        questionText: "La résorption alvéolaire moyenne serait de 44 % à :",
        options: [
          "3 mois",
          "6 mois",
          "9 mois",
          "12 mois"
        ],
        correctOptionIndexes: [3],
        explanation: "La résorption est particulièrement rapide la première année suivant l’extraction ; en moyenne on observe environ 25 % de résorption à 3 mois, 36 % à 6 mois et 44 % à 12 mois."
      },
      {
        questionText: "La résorption osseuse alvéolaire est :",
        options: [
          "Rapide et progressive",
          "Plus importante chez le sujet jeune",
          "Chronique et cumulative",
          "Progressive et réversible avec les matériaux de comblement osseux"
        ],
        correctOptionIndexes: [2],
        explanation: "La résorption alvéolaire après extraction est chronique, progressive, irréversible et cumulative. Elle est généralement plus accentuée chez les sujets âgés."
      },
      {
        questionText: "La résorption osseuse post-extractionnelle:",
        options: [
          "Est plus rapide en lingual au niveau maxillaire.",
          "Est plus importante en largeur qu'en hauteur.",
          "Est influencée par la nature du biotype gingival existant.",
          "Survient uniquement durant les trois premiers mois qui suivent l'extraction."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La résorption horizontale (en largeur) est plus importante que la résorption verticale ; un biotype épais tend à résister mieux à la résorption comparé à un biotype fin."
      },
      {
        questionText: "Selon la classification de LEKHOLM et ZARB, l'os de type II:",
        options: [
          "Est constitué d'une épaisse couche d'os cortical qui entoure un noyau trabeculaire dense",
          "Est un os très mou avec une minéralisation incomplète",
          "Présente une faible vascularisation.",
          "Se situe quasi systématiquement dans les zones postérieures maxillaires."
        ],
        correctOptionIndexes: [0],
        explanation: "Le type II est formé d’une corticale épaisse entourant un noyau trabéculaire dense, ce qui offre une bonne stabilité primaire. On le rencontre surtout au niveau de l’arcade mandibulaire (fraîchement édentée)."
      },
      {
        questionText: "La lésion per-opératoire de l'artère sublinguale:",
        options: [
          "Fait suite à une effraction de la corticale basale.",
          "Peut survenir après la mise en place de l'implant dans la région symphysaire.",
          "Est à l'origine d'une hémorragie contrôlable par la mise en place de l'implant.",
          "Provoque des paresthésies voire des phénomènes douloureux."
        ],
        correctOptionIndexes: [1],
        explanation: "Dans la région symphysaire, les éléments anatomiques à risque sont le nerf incisif et les artères sublinguale et sous-mentale. L’atteinte de l’artère sublinguale survient après perforation de la corticale linguale."
      },
      {
        questionText: "Dans la classification de LEKHOLM et ZARB, l'os de densité 1 :",
        options: [
          "Correspond à l'association d'une corticale dense et d'un os spongieux intermédiaire à l'intérieur.",
          "Est situé principalement dans la région antérieure mandibulaire.",
          "Présente un excellent apport sanguin.",
          "Il est difficile d'obtenir une bonne stabilité primaire."
        ],
        correctOptionIndexes: [1],
        explanation: "L’os de type 1 est un os compact homogène essentiellement cortical situé dans la région symphysaire mandibulaire. Il est peu vascularisé mais offre une excellente stabilité primaire."
      },
      {
        questionText: "La résorption osseuse post-extractionnelle :",
        options: [
          "Peut atteindre en moyenne 10 mm au bout d'une année à la mandibule.",
          "Est quatre fois plus importante au maxillaire.",
          "Est à caractère centripète à la mandibule.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [3],
        explanation: "A : Elle peut atteindre 10 mm... sur une période de 25 ans. B : la résorption à la mandibule est quatre fois plus rapide que celle du maxillaire. C : Est à caractère centripète au maxillaire."
      },
      {
        questionText: "La résorption osseuse :",
        options: [
          "Au niveau maxillaire se fait essentiellement dans le sens vertical",
          "Débute tardivement après la perte de l'organe dentaire",
          "Complique ou empêche la pose d'un implant",
          "Peut entraine une inversion des rapports maxillo-mandibulaires"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La résorption survient inévitablement après l’extraction des dents. Elle est associée à une résorption plus importante du coté vestibulaire (mouvement centripète) et peut compliquer la pose d'implants ou inverser les rapports."
      },
      {
        questionText: "La rupture involontaire du pédicule naso-palatin au niveau du foramen incisif :",
        options: [
          "N'a pas de conséquences cliniques",
          "Est à l'origine de troubles neurosensoriels au niveau du tiers antérieur de la voute platine",
          "Ne permet pas la pose d'implants dans cette région",
          "Peut être maitrisée par une imagerie sectionnelle préopératoire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Un foramen incisif large ne présente pas de risque anatomique majeur. Une imagerie sectionnelle préopératoire permet de prévenir cette rupture."
      },
      {
        questionText: "La perforation de la corticale interne dans la région symphysaire :",
        options: [
          "Provoque une hémorragie du plancher buccal",
          "Aboutit à la non obtention de la stabilité primaire de l'implant",
          "Entraine la lésion de l'artère sublinguale",
          "Représente un danger vasculaire potentiellement grave"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Des perforations de la corticale interne peuvent léser un rameau de l’artère sublinguale et provoquer une hémorragie ; c’est un danger vasculaire potentiellement grave."
      },
      {
        questionText: "Lors de la pose d'implant en remplacement des dents 34 et 35, avez-vous un risque de lésion :",
        options: [
          "De l'artère linguale",
          "Du pédicule mentonnier",
          "Du pédicule mandibulaire",
          "Aucun risque"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La région prémolaire est une zone frontière. Le foramen mentonnier (pédicule mentonnier) est l’élément prépondérant. En arrière, la position du pédicule mandibulaire peut compliquer la chirurgie."
      },
      {
        questionText: "La région incisive maxillaire :",
        options: [
          "Contient une corticale vestibulaire est épaisse",
          "Contient les nerfs naso palatins qui ont un rôle essentiel dans la trophicité et l’Innervation",
          "Présente un risque d'accident vasculo nerveux majeur au niveau foramen incisif",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [3],
        explanation: "L’os alvéolaire de la paroi vestibulaire des incisives est très fin. Les nerfs naso palatins ont un rôle accessoire. Il n'y a pas de risques anatomiques majeurs au niveau du foramen."
      },
      {
        questionText: "L’une des conditions nécessaires à l'obtention d'une réparation osseuse satisfaisante est :",
        options: [
          "Une densité osseuse obligatoirement de type D2",
          "Une technique chirurgicale toujours en deux temps",
          "La présence de cellules adéquates (cellules souches mésenchymateuse)",
          "Un stimuli important sur L'Implant"
        ],
        correctOptionIndexes: [2],
        explanation: "La réparation osseuse est un processus biologique qui nécessite la présence de cellules ostéogéniques, comme les cellules souches mésenchymateuses."
      }
    ]
  },
  {
    title: "Ostéointégration",
    subject: "implanto",
    questions: [
      {
        questionText: "La réaction osseuse après implantation",
        options: [
          "Est spécifique aux implants",
          "L'os néoformé est dispos d'une histologie particulière",
          "Elle suit les mêmes règles et séquences de réparation osseuse",
          "Est régulé principalement par l'hormone de croissance."
        ],
        correctOptionIndexes: [2],
        explanation: "La réaction osseuse à l'implantation n'est pas spécifique ; l'os néoformé ne se distingue plus de l'os préexistant et suit les étapes classiques de la réparation osseuse."
      },
      {
        questionText: "Après pose d'implant et dans l'ostéogénèse de contact",
        options: [
          "La réaction aboutit à une immobilisation de l'implant.",
          "Les cellules vont apposer de l'os de manière centrifuge et centripète.",
          "Les cellules vont fabriquer de l'os de manière centripète",
          "Les cellules vont apposer de l'os de manière centrifuge."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Dans l’ostéogénèse de contact, l’os est déposé à la surface de l’implant (centrifuge) et depuis l’os environnant (centripète), ce qui immobilise l’implant."
      },
      {
        questionText: "L'état de surface d'un implant dentaire implique:",
        options: [
          "La composition chimique de la surface implantaire",
          "La rugosité de surface",
          "L'énergie de surface",
          "La forme des spires et du col implantaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L’état de surface concerne la composition chimique, la rugosité et l’énergie de surface. La forme des spires et du col relève de la macrogéométrie."
      },
      {
        questionText: "L'échec de l'ostéointégration peut être dû à :",
        options: [
          "Un échauffement de l'os pendant la préparation du site receveur.",
          "Une infection per-opératoire.",
          "Manque stabilité primaire.",
          "Une mise en charge prématurée."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tous ces facteurs peuvent compromettre l'ostéointégration : l'échauffement (>47°C) cause une nécrose, l'infection empêche la guérison, l'instabilité primaire génère un tissu fibreux, et la mise en charge prématurée perturbe le processus."
      },
      {
        questionText: "Cochez-la ou les réponses justes (critères de succès):",
        options: [
          "L'implant doit rester immobile pendant l'ostéointegrations",
          "La perte osseuse autour de l'implant doit être inférieure à 0,2 mm entre deux examens espacés d'un an (après la 1ère année).",
          "L'implant doit rester mobile pendant l'ostéointegration",
          "L'absence de zones radio-claires autour de l'implant doit être évidente."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les critères de succès (selon Albrektsson/Buser) incluent : absence de mobilité, absence de radioclarté, et une perte osseuse annuelle limitée à < 0.2 mm après la première année de mise en charge."
      },
      {
        questionText: "Pour évaluer la qualité de l'ostéointégration d'un implant:",
        options: [
          "Il ne doit y avoir aucune mobilité de l'implant",
          "La mobilité ne doit pas dépasser 1 mm",
          "La mobilité doit être inferieure a 1 mm",
          "Il faut entendre un son clair à la percussion"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La mobilité doit être nulle (critère absolu) et l’implant doit produire un son clair et aigu à la percussion, signant une ankylose fonctionnelle."
      },
      {
        questionText: "Dans la classification de K. MISCH, l'os de densité 3 correspond à :",
        options: [
          "Os alvéolaire spongieux aere (D4)",
          "Os spongieux dense (D3)",
          "Os alvéolaire spongieux très aéré (D4)",
          "Os cortical compact (D1)"
        ],
        correctOptionIndexes: [1],
        explanation: "La densité D3 selon Misch correspond à un os spongieux dense, typiquement une fine corticale entourant un noyau trabéculaire dense."
      },
      {
        questionText: "L'ostéointégration:",
        options: [
          "Est une jonction anatomique directe entre l'os et l'implant",
          "Fait intervenir les cellules du desmodonte",
          "Repose sur la mobilité de l'implant",
          "Est une jonction anatomique indirecte entre l'os et l'Implant"
        ],
        correctOptionIndexes: [0],
        explanation: "L’ostéointégration est définie comme une jonction structurelle et fonctionnelle directe entre l’os vivant et la surface de l’implant, sans interposition de tissu conjonctif (contrairement au desmodonte)."
      }
    ]
  },
  {
    title: "Biomécanique",
    subject: "implanto",
    questions: [
      {
        questionText: "Pour minimiser l'effet des contraintes il faut:",
        options: [
          "Diminuer le nombre d'implants",
          "Individualiser les implants",
          "Solidariser les implants sous la même prothèse",
          "Orienter les forces dans l'axe implantaire"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La solidarisation (splinting) permet de mieux répartir les charges entre les implants, et les forces axiales sont beaucoup mieux supportées par l'os péri-implantaire que les forces latérales."
      },
      {
        questionText: "L'utilisation d'un implant à surface rugueuse:",
        options: [
          "Diminue l'effet des contraintes",
          "Permet une supraocclusion",
          "Augmente la charge occlusale",
          "Renforce la connexion"
        ],
        correctOptionIndexes: [0],
        explanation: "Une surface rugueuse augmente la surface de contact os-implant (BIC), ce qui améliore la répartition des charges et diminue les contraintes transmises à l'interface."
      },
      {
        questionText: "L'étude de la biomécanique implantaire:",
        options: [
          "N'est pas nécessaire pour le praticien",
          "Permet une meilleure gestion des effets des contraintes sur le complexe implant/prothèse",
          "Remplace le bilan pré implantaire",
          "Est indispensable"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La compréhension de la biomécanique est indispensable pour la planification (nombre, position, diamètre des implants) et la réussite à long terme des traitements implantaires."
      },
      {
        questionText: "Le patient qui présente un bruxisme",
        options: [
          "Constitue une contre-indication au traitement implantaire",
          "Nécessite des précautions particulières",
          "Nécessite la réduction de l'inclinaison des pentes cuspidiennes",
          "Le port d'une gouttière de protection sera Indispensable"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le bruxisme n'est pas une contre-indication formelle, mais un facteur de risque majeur. Il impose des précautions : réduire les pentes cuspidiennes, (parfois) augmenter le nombre d'implants, et le port d'une gouttière est indispensable."
      },
      {
        questionText: "Les résultantes des forces appliquées au niveau d'un implant sont:",
        options: [
          "Amorties puis transmises à l'os environnant.",
          "Concentrés au niveau du 1/3 supérieur de l'implant.",
          "Reparties homogènement tout au long de la surface implantaire.",
          "Transmises directement à l'os environnant."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Contrairement à la dent (avec le desmodonte), les forces sont transmises directement à l'os (ankylose) et se concentrent principalement au niveau du tiers cervical de l'implant (os cortical)."
      },
      {
        questionText: "L'interface os/implant:",
        options: [
          "Peut être augmenté en jouant sur la longueur et le diamètre de l'implant.",
          "N'a aucune relation avec la surface portante implantaire.",
          "Peut être augmenté en augmentant la hauteur prothétique",
          "La qualité de cette interface dépend aussi de la densité osseuse"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La surface de contact os-implant (BIC) est augmentée par un plus grand diamètre et une plus grande longueur. La *qualité* de l'intégration (rigidité) dépend fortement de la densité osseuse du site receveur."
      },
      {
        questionText: "La Mobilité physiologique des dents et des implants est",
        options: [
          "identique dans le sens transversal",
          "Différente dans le sens vertical de 25μ sur une dent et 5μ sur un implant.",
          "Plus importante au niveau d'une dent naturelle",
          "L'amortissement desmodontal des forces est assuré au niveau de l'implant."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La dent naturelle a une mobilité axiale de 25-100 μm (grâce au desmodonte), tandis que l'implant (ostéointégré) a un déplacement de 3-5 μm. La mobilité de la dent est donc bien plus importante."
      },
      {
        questionText: "Le complexe implantaire est constitué de:",
        options: [
          "L'os péri implantaire",
          "L'implant proprement dit",
          "La structure prothétique",
          "De la dent antagoniste"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le complexe implantaire, d'un point de vue biomécanique, inclut l'implant, l'os qui le soutient, et la prothèse qui reçoit les forces."
      },
      {
        questionText: "La proprioception au niveau d’un implant est",
        options: [
          "Minimale",
          "Vague et diffuse",
          "Absente",
          "Transformée en implantoperception"
        ],
        correctOptionIndexes: [3],
        explanation: "Il n’existe pas de desmodonte (riche en propriocepteurs) autour des implants. Les récepteurs de la muqueuse, de l'os et des muscles persistent, créant une 'implantoperception' différente."
      },
      {
        questionText: "Relier un implant et une dent sur la même prothèse",
        options: [
          "Est sécuritaire",
          "Est fortement indiqué chez les bruxomanes",
          "Peut engendrer des complications biologiques",
          "Peut engendrer des complications mécaniques"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Cette pratique est controversée et souvent déconseillée en raison de la différence de mobilité entre la dent (mobile) et l'implant (rigide), pouvant causer des intrusions de la dent ou des fractures/dévissages côté implant."
      },
      {
        questionText: "La résistance d’un complexe implantoprothétique est majorée par un positionnement",
        options: [
          "Aligné",
          "Tripodique",
          "Quadratique",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "Un positionnement en tripode (ou en polygone) crée un polygone de sustentation stable, optimal pour résister aux forces non axiales, bien supérieur à un alignement linéaire."
      }
    ]
  },
  {
    title: "Examen et Planification",
    subject: "implanto",
    questions: [
      {
        questionText: "L’examen radiologique préimplantaire permet :",
        options: [
          "De déterminer le diamètre et la longueur de l’implant.",
          "De préciser l’axe de l’implant.",
          "D’apprécier l’espace de la zone édentée.",
          "De calculer le volume osseux disponible."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "L'examen radiologique (surtout CBCT) permet d'évaluer le volume osseux (quantité) et la qualité, et de planifier la taille et l'axe de l'implant. L'appréciation de l'espace édenté (mésio-distal) se fait cliniquement."
      },
      {
        questionText: "Parmi les propositions suivantes, quelles sont celles qui sont justes ?",
        options: [
          "Le diamètre du canal alvéolaire inférieur doit être calculé avant l’acte chirurgical.",
          "L’épaisseur de la gencive est mesurée à partir d’un guide radiologique.",
          "Le wax-up est une prothèse à visée diagnostique.",
          "Le Cone beam permet la recherche des obstacles anatomiques."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le wax-up (projet prothétique) est essentiel pour le diagnostic et la planification. Le Cone Beam (CBCT) est l'examen de choix pour localiser les obstacles (nerfs, sinus). L'épaisseur de la gencive est mesurée cliniquement (sondage) ou via le guide."
      },
      {
        questionText: "Parmi les coupes tridimensionnelles suivantes, laquelle est réalisée sur le patient (irradiante) ?",
        options: [
          "Coupe axiale.",
          "Coupes coronales.",
          "Coupe sagittale.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0],
        explanation: "Lors d'un examen CBCT ou scanner, seules les coupes axiales sont acquises directement sur le patient et sont irradiantes. Les coupes coronales, sagittales et panoramiques sont des reconstructions informatiques (calculs) à partir des données axiales."
      },
      {
        questionText: "Le guide radiologique permet :",
        options: [
          "La prévisualisation de l’axe et de la position des futurs implants.",
          "De rectifier l’axe de l’implant en cas d’erreur.",
          "De vérifier la position de l’implant après la chirurgie.",
          "De calculer le volume osseux et le nombre d’implants à poser."
        ],
        correctOptionIndexes: [0],
        explanation: "Le guide radiologique, porté lors du scanner, contient des repères radio-opaques matérialisant le projet prothétique (l'axe des futures dents) et permet de le superposer au volume osseux."
      },
      {
        questionText: "Un guide radiologique :",
        options: [
          "Peut être transformé en guide chirurgical.",
          "Doit être stable et non rétentif.",
          "Doit être porté en bouche lors du scanner.",
          "Ne doit jamais être porté lors du scanner."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les guides radiologiques (comportant des repères) doivent être portés lors de l'examen radiologique (CBCT) et peuvent ensuite être modifiés (ajout de puits de forage) pour devenir des guides chirurgicaux."
      },
      {
        questionText: "L’examen clinique préimplantaire permet :",
        options: [
          "De déterminer la longueur et le diamètre de l’implant.",
          "De préciser l’axe de l’implant.",
          "D’apprécier l’espace de la zone édentée.",
          "De calculer le volume osseux disponible."
        ],
        correctOptionIndexes: [2],
        explanation: "L'examen clinique permet de mesurer l'espace mésio-distal (entre les dents) et l'espace inter-arcade (hauteur). Les options A, B et D relèvent de l'examen radiologique."
      }
    ]
  },
  {
    title: "Composants Implantaires",
    subject: "implanto",
    questions: [
      {
        questionText: "La connexion active :",
        options: [
          "Se situe dans l'épaisseur de la gencive.",
          "Est une connexion plat à plat (butt joint).",
          "Est essentiellement conique.",
          "Entraîne une diminution du risque de dévissage et/ou de fracture de la vis de transfixation"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les connexions actives sont des connexions coniques (type cône morse) qui créent une friction importante. Cette 'soudure à froid' augmente la stabilité et réduit le risque de dévissage de la vis."
      },
      {
        questionText: "Le titane:",
        options: [
          "De grade 4 est le moins riche en O2 et le plus résistant mécaniquement.",
          "De grade 5 possède une plus grande résistance mécanique que le Ti-CP.",
          "Est un matériau dont la biocompatibilité est assurée par une couche d’hydroxyapatite.",
          "Est toxique au contact des ostéoblastes."
        ],
        correctOptionIndexes: [1],
        explanation: "Le Grade 5 (Ti6Al4V) est un alliage plus résistant que le titane commercialement pur (Ti-CP, Grades 1-4). La biocompatibilité vient de la couche d'oxyde de titane (TiO2), pas d'hydroxyapatite."
      },
      {
        questionText: "Le concept de platform switching:",
        options: [
          "Est caractéristique des implants monoblocs.",
          "Permet de préserver les contours des tissus mous péri-implantaires.",
          "Fait référence à l’utilisation d’un pilier sous-dimensionné par rapport au diamètre de la plate-forme de l’implant.",
          "Permet de simplifier les étapes prothétiques."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le platform switching est l'utilisation d'un pilier de diamètre inférieur à celui de la plateforme de l'implant. Cela déplace le micro-gap et préserve l'os crestal et les tissus mous."
      },
      {
        questionText: "L’implant bone-level:",
        options: [
          "Est implanté en juxta-osseux ou infra-osseux.",
          "Est dit non enfoui.",
          "Est destiné uniquement à une approche chirurgicale en un temps.",
          "Présente en général un col évasé et lisse afin de limiter l’adhésion bactérienne"
        ],
        correctOptionIndexes: [0],
        explanation: "Les implants 'Bone Level' (BL) sont conçus pour que leur col (plateforme) soit positionné au niveau de la crête osseuse, voire légèrement en dessous (infra-osseux)."
      },
      {
        questionText: "Ti6Al4V :",
        options: [
          "Est un alliage de titane.",
          "N’est pas biocompatible.",
          "Présente de meilleures qualités mécaniques.",
          "Est un Ti grade 5."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le Ti6Al4V est l'alliage de titane de Grade 5 (90% Titane, 6% Aluminium, 4% Vanadium). Il est très utilisé pour ses excellentes propriétés mécaniques (résistance)."
      },
      {
        questionText: "Le cône morse :",
        options: [
          "Est un système autobloquant",
          "Est un système dans lequel la connexion se fait par friction",
          "Correspond à l’emboîtement de deux éléments dont les parois sont parallèles",
          "Est une connexion interne"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le cône Morse est une connexion interne conique (parois non parallèles) qui assure un autoblocage par friction, offrant une grande stabilité et étanchéité."
      },
      {
        questionText: "La connexion passive :",
        options: [
          "Est caractéristique des implants monoblocs.",
          "Fait référence à l’emboîtement de deux structures coniques.",
          "Présente une meilleure résistance mécanique par rapport à la connexion active.",
          "Est une connexion dont le principe de rétention est obtenu grâce à la vis de transfixation"
        ],
        correctOptionIndexes: [3],
        explanation: "Dans une connexion passive (ex: hexagone externe), il y a un léger jeu. La stabilité et la rétention sont assurées *uniquement* par la vis de transfixation, et non par la friction des parois."
      },
      {
        questionText: "Les spires présentes le long de l’implant :",
        options: [
          "N’ont pas d’impact sur la stabilité primaire.",
          "Permettent d’augmenter la stabilité primaire.",
          "Augmentent les contraintes transmises à l’os cortical.",
          "Assurent une bonne répartition des contraintes."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le design des spires est crucial pour la stabilité primaire (ancrage mécanique initial) et pour la dissipation/répartition des contraintes fonctionnelles le long de l'implant."
      },
      {
        questionText: "Le choix du pilier prothétique est fonction :",
        options: [
          "Du volume osseux disponible",
          "De l’espace inter-occlusal",
          "De l’inclinaison de l’implant",
          "De la hauteur des tissus mous (gencive)"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le choix du pilier dépend de l'espace prothétique (hauteur inter-occlusale), de l'axe de l'implant (on utilise un pilier angulé si besoin), et de la hauteur de la gencive (pour choisir la hauteur transgingivale du pilier)."
      },
      {
        questionText: "Parmi les propositions suivantes, laquelle(s) est/sont juste(s) ?",
        options: [
          "La hauteur du col du pilier implantaire est choisie en fonction de la hauteur de la muqueuse périimplantaire.",
          "Les implants tissue-level sont implantés en juxta-osseux ou infra-osseux.",
          "Les implants monobloc peuvent être utilisés dans toutes les situations cliniques.",
          "Le pilier angulé permet de différencier l’axe implantaire de l’axe prothétique."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La hauteur transgingivale du pilier doit correspondre à l'épaisseur de la muqueuse. Les piliers angulés corrigent un mauvais axe implantaire pour l'aligner avec l'axe prothétique."
      }
    ]
  },
  {
    title: "Tissus Péri-implantaires",
    subject: "implanto",
    questions: [
      {
        questionText: "La muqueuse périimplantaire :",
        options: [
          "Est caractérisée par une vascularisation moins importante que la gencive.",
          "Est caractérisée par une quantité de fibres plus importante que la gencive.",
          "Contient plus de collagène que la gencive.",
          "Est considérée comme un tissu cicatriciel."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La muqueuse périimplantaire est un tissu cicatriciel, moins vascularisé, pauvre en fibres (mais riche en collagène) et avec des fibres parallèles à l'implant (pas d'insertion de type Sharpey), la rendant moins résistante."
      },
      {
        questionText: "Une récession des tissus périimplantaires peut se développer :",
        options: [
          "Lorsque la table osseuse vestibulaire est résorbée.",
          "Lorsque la prothèse est très convexe.",
          "Lorsque l’implant est positionné en vestibulaire.",
          "Dans tous ces cas."
        ],
        correctOptionIndexes: [3],
        explanation: "Tous ces facteurs (résorption osseuse, positionnement trop vestibulaire, profil d'émergence prothétique convexe) augmentent le risque de récession gingivale autour de l'implant."
      },
      {
        questionText: "La greffe gingivale est indiquée :",
        options: [
          "Pour augmenter la hauteur de la gencive kératinisée.",
          "Pour augmenter l’épaisseur de la gencive.",
          "Pour éviter la greffe osseuse.",
          "Pour toutes ces raisons."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une greffe (épithélio-conjonctive ou conjonctive) vise à augmenter la quantité (hauteur) ou la qualité (épaisseur/biotype) de la gencive kératinisée pour améliorer l'esthétique et la résistance."
      },
      {
        questionText: "Lors de la conception des lambeaux mucopériostés en implantologie, certains critères importants doivent être respectés :",
        options: [
          "Préserver la topographie de la crête et les replis mucosaire.",
          "Augmenter l’apport vasculaire du lambeau.",
          "Planifier la fermeture à distance de la zone implantaire.",
          "Faciliter l’identification des structures anatomiques."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Un lambeau doit préserver l'apport vasculaire (base large), non l'augmenter. Il doit permettre une bonne visibilité et une fermeture sans tension, idéalement à distance des greffons ou implants."
      },
      {
        questionText: "Lors d’un bilan préimplantaire, la présence des crêtes flottantes :",
        options: [
          "Exige leur élimination avant la pose de l’implant.",
          "Exige leur élimination lors de la pose de l’implant.",
          "Peut entraîner une mauvaise protection contre les forces mécaniques.",
          "Peut provoquer un déficit esthétique."
        ],
        correctOptionIndexes: [0],
        explanation: "Les crêtes gingivales flottantes (tissu fibreux non soutenu par l'os) doivent être supprimées lors d'une chirurgie préalable, car elles sont instables et peuvent entraîner une résorption osseuse."
      },
      {
        questionText: "La muqueuse kératinisée assure un rôle de protection contre les forces mécaniques de mastication :",
        options: [
          "Vrai.",
          "Faux."
        ],
        correctOptionIndexes: [0],
        explanation: "Une hauteur suffisante de gencive kératinisée (tissu fixe) est nécessaire pour protéger l'implant des forces mécaniques (brossage, mastication) et maintenir la santé périimplantaire."
      }
    ]
  },
  {
    title: "Facteurs de Risque et Contre-indications",
    subject: "implanto",
    questions: [
      {
        questionText: "La pose d’un implant chez les patients sous bisphosphonates",
        options: [
          "Est contre-indiquée quelle que soit la voie d’administration.",
          "Doit tenir compte de la durée du traitement.",
          "Ne nécessite aucune précaution particulière.",
          "Peut se compliquer par la survenue d’une infection bactérienne systémique."
        ],
        correctOptionIndexes: [1],
        explanation: "Ce n'est pas une CI absolue (surtout par voie orale), mais le risque d'ostéonécrose (ONJ) augmente avec la durée du traitement. Une discussion avec le médecin traitant est nécessaire."
      },
      {
        questionText: "Quelle est la contre-indication locale absolue à la pose d’un implant dans la région postérieure du maxillaire ?",
        options: [
          "Un réflexe nauséeux.",
          "Un bruxisme.",
          "Un sinus procident.",
          "Une limitation chronique de l’ouverture buccale."
        ],
        correctOptionIndexes: [3],
        explanation: "Une limitation chronique (ex: trismus sévère, ankylose) rend l'accès chirurgical impossible. Les autres (A, B, C) sont des contre-indications relatives ou des situations à gérer (sédation, greffe de sinus)."
      },
      {
        questionText: "Chez un patient en croissance, la mise en place d’implants peut entraîner :",
        options: [
          "Une proximité des germes dentaires.",
          "Un déplacement horizontal de l’implant.",
          "Une interruption de l’ostéointégration.",
          "Une infraocclusion à long terme."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L'implant s'ostéointègre (ankylose) mais ne suit pas la croissance alvéolaire comme les dents naturelles. Il reste 'bloqué', entraînant une infraocclusion et pouvant gêner l'éruption des dents voisines."
      },
      {
        questionText: "La radiothérapie cervico-faciale est une contre-indication relative car elle entraîne :",
        options: [
          "Un assèchement sévère des muqueuses.",
          "Une trophicité diminuée des muqueuses.",
          "Des modifications irréversibles de la trame médullaire osseuse.",
          "Une faiblesse immunitaire transitoire."
        ],
        correctOptionIndexes: [2],
        explanation: "La radiothérapie (surtout > 40 Gy) provoque une hypovascularisation et des modifications irréversibles de l'os, augmentant drastiquement le risque d'ostéoradionécrose (ORN)."
      },
      {
        questionText: "Chez le patient diabétique, le paramètre à évaluer avant l’implantation est :",
        options: [
          "L’hémoglobine glyquée (HbA1c).",
          "La glycémie capillaire.",
          "Le test d’hyperglycémie provoquée.",
          "Le traitement insulinique."
        ],
        correctOptionIndexes: [0],
        explanation: "L'HbA1c reflète l'équilibre glycémique sur les 3 derniers mois. Un diabète non équilibré (HbA1c > 8%) est une contre-indication relative (risque d'infection, mauvaise cicatrisation) et l'intervention doit être reportée."
      },
      {
        questionText: "Parmi les propositions suivantes, quelles sont celles qui peuvent être à l’origine d’une fracture de l’implant ?",
        options: [
          "Les parafonctions.",
          "Les parodontites chroniques.",
          "La bruxomanie.",
          "Le diamètre de l’implant."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les parafonctions (serrement, crispation) et le bruxisme exercent des charges excessives (intensité, durée) qui peuvent entraîner la fatigue mécanique et la fracture de l'implant ou des composants prothétiques."
      },
      {
        questionText: "Quels sont les facteurs de risque d’échec de la pérennité de l’implant ?",
        options: [
          "L’hygiène orodentaire.",
          "Le tabagisme chronique.",
          "La prise d’anticoagulants.",
          "L’échauffement de l’os lors du forage."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Une mauvaise hygiène (péri-implantite), le tabagisme (mauvaise cicatrisation, risque accru de péri-implantite) et la surchauffe osseuse (nécrose) sont des facteurs majeurs d'échec."
      },
      {
        questionText: "Concernant l’implant chez le fumeur :",
        options: [
          "La stabilité de l’implant est compromise.",
          "Seul le tabagisme chronique constitue un facteur de risque.",
          "Une bonne hygiène empêche toute interférence.",
          "Le sevrage tabagique améliore les résultats implantaires."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le tabac (surtout chronique > 10 cig/jour) réduit le taux de succès en compromettant la cicatrisation et la stabilité osseuse. Un sevrage (même temporaire) améliore significativement les résultats."
      }
    ]
  },
  {
    title: "Protocoles et Consentement",
    subject: "implanto",
    questions: [
      {
        questionText: "Le consentement éclairé :",
        options: [
          "Est un prérequis à toute intervention chirurgicale.",
          "Impose au praticien une information loyale.",
          "N’est nécessaire que si le patient présente des facteurs de risque.",
          "Est formalisé verbalement."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le consentement est obligatoire avant *tout* acte chirurgical. Il doit être *écrit* (pas seulement verbal) et obtenu après que le patient ait reçu une information claire et loyale sur l'acte, les risques et les alternatives."
      },
      {
        questionText: "Le protocole en un temps :",
        options: [
          "Est une technique utilisable au niveau molaire sans contrainte esthétique.",
          "Est une approche moins avantageuse que le protocole en deux temps.",
          "Nécessite une seule chirurgie.",
          "Se réalise uniquement avec les implants monoblocs."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le protocole en un temps (où l'implant n'est pas enfoui) s'emploie dans les secteurs postérieurs (moins esthétiques) et évite une seconde chirurgie (pour découvrir l'implant)."
      },
      {
        questionText: "La technique flapless (sans lambeau) :",
        options: [
          "Est moins chronophage que la technique conventionnelle.",
          "Peut être utilisée par un praticien expérimenté dans toutes les situations cliniques.",
          "Expose au risque de perforation des corticales.",
          "Permet de minimiser les traumatismes chirurgicaux."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La technique 'flapless' réduit le temps opératoire et les suites (traumatisme minimal). Cependant, elle se fait 'à l'aveugle' (risque de perforation) et nécessite des conditions anatomiques strictes (volume osseux suffisant)."
      },
      {
        questionText: "Parmi les circonstances cliniques défavorables à l’extraction-implantation immédiate :",
        options: [
          "Défaut osseux vestibulaire.",
          "Sourire gingival.",
          "Patient à biotype gingival épais.",
          "Édentement unitaire."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Pour une extraction-implantation immédiate, une paroi vestibulaire intacte est cruciale. Un défaut osseux ou un sourire gingival (haute exigence esthétique) sont des situations défavorables. Un biotype épais est au contraire favorable."
      },
      {
        questionText: "Parmi les propositions suivantes, cochez la/les proposition(s) juste(s) :",
        options: [
          "L’enfouissement de l’implant sous la gencive a pour seul but de diminuer le protocole chirurgical.",
          "La prothèse scellée induit un risque d’excès de ciment.",
          "La mise en charge immédiate est contre-indiquée dans le secteur antérieur.",
          "Lors d’une extraction-implantation immédiate, un minimum de 2 mm d’os vestibulaire doit être conservé."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les excès de ciment sous-gingivaux sont un risque majeur de péri-implantite. Une paroi vestibulaire d'au moins 2mm est recommandée pour compenser la résorption post-extractionnelle."
      },
      {
        questionText: "Les barres de conjonction en prothèse amovible stabilisée sur implants :",
        options: [
          "Nécessitent un espace intercrête réduit.",
          "Ne nécessitent pas un parallélisme des implants.",
          "Sont contre-indiquées si la forme d’arcade est trop courbe voire triangulaire.",
          "Sont les moins rétentifs."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les barres nécessitent au contraire un espace intercrête important (10-15mm). Elles sont contre-indiquées pour les arcades en V (triangulaires) et peuvent compenser un léger défaut de parallélisme entre implants."
      }
    ]
  }
];

module.exports = implantoQuizzes;