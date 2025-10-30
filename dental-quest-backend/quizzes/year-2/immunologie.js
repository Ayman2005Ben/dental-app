const immunologieQuizzesY2 = [
    {
    title: "Introduction à l'immunologie & Organes lymphoïdes",
    subject: "immunologie",
    questions: [
      {
        questionText: "Quelles sont les cellules de l'immunité adaptative?",
        options: [
          "Les lymphocytes T",
          "Les lymphocytes",
          "Les mastocytes",
          "Les cellules dendritiques",
          "Les interleukines",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "L'immunité adaptative repose sur l'action des lymphocytes T (LT) et des lymphocytes B (LB). Les options A et B (supposant B pour LB) couvrent ces deux types de cellules.",
      },
      {
        questionText: "Quelles sont les cellules de l'immunité adaptative?",
        options: [
          "Les macrophages",
          "Les cellules cytotoxiques naturelles",
          "Les mastocytes",
          "Les plasmocytes",
        ],
        correctOptionIndexes: [3],
        explanation:
          "L'immunité adaptative (acquise) repose sur les lymphocytes T et B. Les lymphocytes B se transforment en plasmocytes pour produire des anticorps (immunité humorale). Les macrophages, cellules NK et mastocytes sont de l'immunité innée.",
      },
      {
        questionText: "Quelles sont les cellules de l'immunité innée :",
        options: [
          "Les polynucléaires neutrophiles",
          "Les macrophages",
          "Les lymphocytes T cytotoxiques",
          "Les lymphocytes T helpers",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "L'immunité innée repose sur des cellules comme les polynucléaires neutrophiles et les macrophages. Les lymphocytes T (cytotoxiques et helpers) appartiennent à l'immunité adaptative.",
      },
      {
        questionText:
          "Quelle cellule est responsable de la réponse immunitaire à la médiation humorale?",
        options: [
          "Le lymphocyte B",
          "Le granulocyte éosinophile",
          "Le granulocyte basophile",
          "Le granulocyte neutrophile",
        ],
        correctOptionIndexes: [0],
        explanation:
          "Les lymphocytes B sont les cellules responsables de l'immunité humorale. Au contact de l'antigène, ils s'activent et se transforment en plasmocytes pour fabriquer les anticorps.",
      },
      {
        questionText:
          "Quelle cellule est responsable de la réponse immunitaire à la médiation humorale?",
        options: [
          "Le lymphocyte B",
          "Le granulocyte éosinophile",
          "Le granulocyte basophile",
          "Le granulocyte neutrophile",
          "Le lymphocyte T",
        ],
        correctOptionIndexes: [0],
        explanation:
          "Les lymphocytes B sont le support de l'immunité adaptative humorale. Les granulocytes (B, C, D) font partie de l'immunité innée, et le lymphocyte T (E) est responsable de l'immunité à médiation cellulaire.",
      },
      {
        questionText:
          "Quelles sont les principales cellules présentatrices d'antigène:",
        options: [
          "Neutrophiles et lymphocytes T activés",
          "Les lymphocytes B activés",
          "Les cellules dendritiques d'origine myéloïde et lymphoïde",
          "Les cellules microgliales au niveau du système nerveux central",
          "Les Cellules cytotoxiques naturelles",
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation:
          "Les CPA professionnelles sont les cellules dendritiques (principales), les lymphocytes B activés, et les macrophages (y compris les cellules microgliales dans le SNC).",
      },
      {
        questionText: "Parmi les organes lymphoïdes primaires :",
        options: ["Moelle osseuse", "Thymus", "Rate", "Ganglions"],
        correctOptionIndexes: [0, 1],
        explanation:
          "Les organes lymphoïdes primaires (où les lymphocytes maturent) sont la moelle osseuse (pour les LB) et le thymus (pour les LT). La rate et les ganglions sont des organes lymphoïdes secondaires.",
      },
      {
        questionText: "Le Thymus est:",
        options: [
          "Un organe lympho-épithélial et bilobé",
          "Composé d'une zone corticale et d'une zone médullaire",
          "Le site de maturation des lymphocytes T",
          "Le site d'activation et de différentiation des cellules cytotoxiques NK",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "A: Le thymus est un organe lympho-épithélial bilobé. B: Chaque lobe est organisé en un cortex (thymocytes immatures) et une médullaire (cellules plus matures). C: Le thymus est le site de maturation des lymphocytes T (les LB maturent dans la moelle osseuse).",
      },
      {
        questionText: "Les amygdales:",
        options: [
          "représentent un organe lymphoïde primaire.",
          "représentent un organe lymphoïde secondaire",
          "sont un lieu d'instruction des Lymphocytes",
          "sont un lieu de rencontre avec les Antigènes.",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "Les amygdales sont des organes lymphoïdes secondaires (B). C'est là que les lymphocytes B et T rencontrent les agents pathogènes (antigènes) et initient la réponse immunitaire (D).",
      },
      {
        questionText: "Une thymectomie chez le poulet entraîne :",
        options: [
          "une diminution du taux d'Ac Thymo-indépendants.",
          "une diminution du taux d'Ac Thymo-dépendants.",
          "un déficit de la réponse immunitaire cellulaire.",
          "une augmentation des lymphocytes",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "La thymectomie (ablation du thymus) à la naissance provoque un déficit total de l'immunité cellulaire (C) et une diminution importante des lymphocytes T. Cela affecte la production d'anticorps Thymo-dépendants (B), car ils nécessitent l'aide des T helpers.",
      },
      {
        questionText:
          "Lorsque les lymphocytes sont stimulés par un Antigène ils se transforment en",
        options: ["ostéoblastes", "trophoblastes", "ostéoclaste", "lnmunoblastes"],
        correctOptionIndexes: [3],
        explanation:
          "Un immunoblaste est un lymphocyte qui a été activé par un antigène. Il va ensuite subir une expansion clonale pour augmenter le nombre de lymphocytes spécifiques à cet antigène.",
      },
      {
        questionText: "le ganglion lymphatique :",
        options: [
          "est un lieu d'instruction des lymphocytes.",
          "est un lieu de rencontre avec les Antigènes",
          "est un lieu de production des lymphocytes",
          "est classé comme organe lymphoïde primaire",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Le ganglion lymphatique est un organe lymphoïde secondaire, servant de lieu de rencontre entre les lymphocytes et les antigènes pour initier la réponse immunitaire.",
      },
      {
        questionText: "La Bourse de Fabricius:",
        options: [
          "est un organe lymphoïde secondaire",
          "est un organe lymphoïde primaire.",
          "est un lieu d'instruction des Lymphocytes B",
          "est un lieu de rencontre avec les Antigènes.",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "La Bourse de Fabricius (chez les oiseaux) est un organe lymphoïde primaire (B), équivalent de la moelle osseuse chez les mammifères. C'est le lieu d'instruction (maturation) des lymphocytes B (C).",
      },
      {
        questionText: "Une thymectomie chez le poulet entraine",
        options: [
          "une diminution des lymphocytes T.",
          "une diminution de production des lymphokines.",
          "un déficit de la réponse immunitaire cellulaire.",
          "un augmentation des lymphocytes",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "La thymectomie (ablation du thymus) chez le souriceau (ou poulet) entraîne un déficit de l'immunité cellulaire (C), une diminution des lymphocytes T (A) et, par conséquent, une diminution des lymphokines (B) qu'ils produisent.",
      },
      {
        questionText: "le ganglion lymphatique:",
        options: [
          "A est un lieu d’instruction des lymphocytes",
          "est lieu de rencontre avec les Antigènes",
          "est un lieu de production des lymphocytes",
          "est classé come organe lymphoïde primaire",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Le ganglion lymphatique est un organe lymphoïde secondaire. Sa fonction principale est d'être un lieu de rencontre avec les antigènes pour activer la réponse immunitaire adaptative.",
      },
      {
        questionText: "Le thymus est un organe lymphoïde",
        options: [
          "Secondaire",
          "Primaire",
          "les d'instruction des Lymphocytes T",
          "lieu de rencontre avec les Antigènes",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "Le thymus est un organe lymphoïde primaire (B) dont le rôle est la maturation et l'instruction (sélection) des lymphocytes T (C).",
      },
      {
        questionText: "Une ba…………………. Entraine :",
        options: [
          ";;;;;;;;;;;;;;;;;;;;;;;;;;;; (absence d'Ig)",
          "Une augmentation de production d'Ig",
          "un déficit de la réponse immunitaire cellulaire",
          "déficit des lymphocytes T et des mastocytes",
        ],
        correctOptionIndexes: [2],
        explanation:
          "En supposant que la question concerne la thymectomie (basé sur le commentaire), l'ablation du thymus à la naissance provoque un déficit total de l'immunité à médiation cellulaire.",
      },
      {
        questionText:
          "Lorsque les lymphocytes sont stimulés par un antigene ils se transforment en :",
        options: ["monocytes", "plasmoblastes", "histiocytes", "immunoblastes"],
        correctOptionIndexes: [3],
        explanation:
          "L'immunoblaste est un lymphocyte (B ou T) activé par un antigène, qui entre en prolifération. Le plasmoblastes est un précurseur du plasmocyte (stade de différenciation du LB).",
      },
      {
        questionText: "Les organes lymphoïdes périphériques ou secondaires sont :",
        options: [
          "le lieu où les lymphocytes ne sont pas produits.",
          "le foie et la prostate.",
          "le lieu où les lymphocytes ne subissent pas leur instruction.",
          "les reins et le pancréas.",
          "l'équivalent de la bourse de Fabricius, le thymus et la bourse de Fabricius.",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "Les organes lymphoïdes secondaires (ganglions, rate) sont les sites de la réponse immunitaire (rencontre avec l'Ag). L'instruction (maturation) et la production se font dans les organes primaires (thymus, moelle osseuse).",
      },
    ],
  },
  {
    title: "Lymphocytes B",
    subject: "immunologie",
    questions: [
      {
        questionText: "Une fois activés, les lymphocytes B se différencient en:",
        options: [
          "En plasmocytes et lymphocytes B mémoire.",
          "En macrophages et lymphocytes B mémoire.",
          "En mastocytes et lymphocytes B mémoire,",
          "En leucocytes et lymphocytes B mémoire.",
          "En basophiles et lymphocytes B mémoire.",
        ],
        correctOptionIndexes: [0],
        explanation:
          "Lorsque les lymphocytes B sont activés, ils se différencient en deux types de cellules : les plasmocytes (qui produisent les anticorps) et les lymphocytes B mémoires (qui assurent une réponse plus rapide lors d'une future exposition).",
      },
      {
        questionText: "Au cours de la lymphopoïèse B:",
        options: [
          "Le stade pro-B est caractérisé par l'expression des marqueurs B CD19 et CD20",
          "Le stade pré-B est caractérisé par le réarrangement des gènes codant pour la chaine lourde et la chaine légère du pré-BCR.",
          "Le LB immature exprime un BCR non fonctionnel sous forme d'IgM membranaire.",
          "Le LB mature co-exprime à sa surface deux classes d'immunoglobulines membranaires IgM et IgD (de même spécificité antigénique).",
        ],
        correctOptionIndexes: [3],
        explanation:
          "D: Le lymphocyte B mature est caractérisé par la co-expression des IgM et IgD membranaires (de même spécificité). A: Pro-B exprime CD19, CD79. B: Pré-B réarrange la chaîne lourde. C: LB immature exprime un BCR *fonctionnel* (IgM).",
      },
      {
        questionText: "Les lymphocytes B",
        options: [
          "deviennent immuno-compétents dans la moelle osseuse chez les êtres humains.",
          "deviennent immuno-compétents dans la Bourse de Fabricius.",
          "recirculent par les ganglions, la rate et le foie.",
          "recirculent par la Bourse de Fabricius chez les oiseaux.",
          "rencontrent les Ag dans la Bourse de Fabricius.",
          "fabriquent des lymphokines qui agissent à distance sur les lymphocytes T",
        ],
        correctOptionIndexes: [0],
        explanation:
          "A: Chez l'humain, la moelle osseuse est l'équivalent de la Bourse de Fabricius (oiseaux) ; c'est là que les lymphocytes B deviennent immunocompétents. B/D/E: La Bourse de Fabricius concerne les oiseaux. C: La recirculation se fait par les ganglions, la rate et le sang/lymphe, pas le foie. F: Les LT fabriquent des lymphokines.",
      },
    ],
  },
  {
    title: "Etats d'Hypersensibilité",
    subject: "immunologie",
    questions: [
      {
        questionText:
          "Quelles cellules libèrent des médiateurs chimiques tels que l'histamine?",
        options: [
          "Les mastocytes",
          "Les lymphocytes B",
          "Les lymphocytes TCD4+",
          "Les lymphocytes TCD8+",
          "Les basophiles",
        ],
        correctOptionIndexes: [0, 4],
        explanation:
          "L'histamine est un médiateur chimique clé, notamment dans les réactions d'hypersensibilité. Elle est stockée dans les granules des mastocytes et des basophiles, puis libérée lors de leur activation (par exemple, par des IgE).",
      },
      {
        questionText:
          "Un mécanisme d'hypersensibilité de type 1 est observé au cours :",
        options: [
          "Asthme allergique",
          "Rhinite saisonnière",
          "Polyarthrite Rhumatoïde",
          "Le rejet de greffe",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "L'hypersensibilité de type 1 (immédiate) est observée dans des pathologies comme l'asthme allergique, la rhinite allergique, les allergies alimentaires et la dermatite atopique.",
      },
      {
        questionText: "Le diagnostic de l'hypersensibilité de type 1 comprends:",
        options: [
          "Des tests cutanés",
          "Dosage des IgE totales",
          "Formule de numération sanguine",
          "Test de Coombs",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "Le diagnostic de l'hypersensibilité de type 1 repose sur : 1. Les tests cutanés (Prick tests). 2. Les tests de provocation. 3. La biologie, incluant le dosage des IgE totales et la Formule de Numération Sanguine (NFS) pour rechercher une hyperéosinophilie.",
      },
      {
        questionText: "Un mastocyte a toutes les propriétés suivantes sauf:",
        options: [
          "sécrétion d'histamine.",
          "inhibition des activités cytolytiques du Complément.",
          "fixation des IgE sur sa membrane.",
          "phagocytose",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Les mastocytes n'ont pas pour rôle d'inhiber le complément (B). Leurs propriétés incluent la sécrétion d'histamine (A) et la fixation des IgE sur leur membrane (C).",
      },
      {
        questionText: "L'hypersensibilité immédiate fait intervenir :",
        options: [
          "le phénomène ADC",
          "les mastocytes et les basophiles",
          "les IgA sériques.",
          "les Ig",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "L'hypersensibilité immédiate (type 1) implique les mastocytes et les basophiles (B) qui sont activés par les IgE (D) lors de la rencontre avec l'allergène.",
      },
      {
        questionText:
          "L'incompatibilité sanguine fœto-maternelle dans le système Rhésus:",
        options: [
          "survient chez une mère Rh+ portant un fœtus Rh+.",
          "survient chez une mère Rh+ portant un fœtus Rh-.",
          "survient chez une mère Rh- portant un fœtus Rh-.",
          "survient chez une mère Rh- portant un fœtus Rh+.",
        ],
        correctOptionIndexes: [3],
        explanation:
          "L'incompatibilité Rhésus survient lorsque la mère est Rhésus négatif (Rh-) et que le fœtus est Rhésus positif (Rh+).",
      },
      {
        questionText: "Le phénomène d'Arthus est classe comme",
        options: [
          "une hypersensibilité de type cytotoxique.",
          "une Hypersensibilité Complexes Immuns",
          "une hypersensibilité immédiate",
          "une Hypersensibilité médiation cellulaire",
        ],
        correctOptionIndexes: [1],
        explanation:
          "L'hypersensibilité de type III (semi-retardée) est médiée par des complexes immuns (antigène-anticorps). Le phénomène d'Arthus est l'exemple local de ce type de réaction.",
      },
      {
        questionText:
          "L'incompatibiline sanguine fœto-maternel dans le système Rhésus",
        options: [
          "survient à partir de la 1 grossesse.",
          "survient chez une mère Rh+ portant un fœtus Rh+.",
          "peut être prévenue par injection d'Ig anti-lg",
          "est provoquée par passage transplacentaire d'lgD",
        ],
        correctOptionIndexes: [0],
        explanation:
          "L'incompatibilité sanguine fœto-maternelle (mère Rh-, fœtus Rh+) peut survenir dès la première grossesse, bien que la maladie hémolytique soit plus fréquente lors des grossesses suivantes.",
      },
      {
        questionText:
          "l'histamine est la sérotonine sont présentes dans:",
        options: [
          "les polynucléaires neutrophiles.",
          "les lymphocytes B et T.",
          "les polynucléaires basophilles.",
          "les mastocyes",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "L'histamine et la sérotonine sont des médiateurs chimiques stockés et libérés par les mastocytes (D) et les polynucléaires basophiles (C), notamment lors de l'hypersensibilité de type 1.",
      },
      {
        questionText: "l'hypersensibilité de type 1 fait intervenir:",
        options: [
          "le phénomène ADC",
          "les mastocytes et les basophiles",
          "les IgA sériques.",
          "les Ig",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "La réaction d’hypersensibilité de type 1 (anaphylactique) fait intervenir les cellules (mastocytes et basophiles) et les anticorps IgE.",
      },
      {
        questionText:
          "L'incompatibilité sanguine fœto-maternelle dans le système Rhésus",
        options: [
          "survient à partir de la 3éme grossesse.",
          "survient chez une mère Rh+ portant un fœtus Rh-",
          "peut être prévenue par injection d'Ig anti-D",
          "est liée au passage transplacentaire d'IgM",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La maladie survient chez une mère Rh- avec un fœtus Rh+ (A et B faux). Elle peut être prévenue par l'injection d'anticorps anti-D (qui neutralisent les hématies fœtales Rh+ passées chez la mère). La maladie est causée par des IgG (pas IgM) maternels qui traversent le placenta (D faux).",
      },
      {
        questionText: "Le phénomènes de Koch caractérise:",
        options: [
          "Une hypersensibilise de type immédiat",
          "Une hyper sensibilisé complexes immuns",
          "une hypersensibilité retardé",
          "une hypersensibilité à médiation cellulaire",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "L'hypersensibilité retardée (HSR) est de type IV. C'est une réaction à médiation cellulaire (D). Le phénomène de Koch (réaction à la tuberculine) chez le cobaye est l'exemple classique de l'HSR (C).",
      },
      {
        questionText: "l'histamine est présente dans :",
        options: [
          "les mastocytes",
          "les lymphocytes T",
          "les polymacléaires basophilies",
          "les polynucléaires neutrophiles",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "L'histamine est principalement synthétisée et stockée dans les mastocytes et les polynucléaires basophiles.",
      },
      {
        questionText: "l'hypersensibilité de type I fait intervenir:",
        options: [
          "le complément",
          "les lymphocytes cytotoxiques.",
          "les cellules NK.",
          "les igE fixés sur les mastocytes et les basophiles",
        ],
        correctOptionIndexes: [3],
        explanation:
          "L'hypersensibilité de type I (immédiate) est définie par l'action des IgE, qui se fixent sur les récepteurs à haute affinité des mastocytes et des basophiles. La liaison de l'allergène à ces IgE provoque la dégranulation.",
      },
      {
        questionText:
          "Dans les Réactions d'Hypersensibilité cytotoxique type II, ADCC signe………..",
        options: [
          "Antigen Dépendant Cell Cytoxicity.",
          "Antigen Dépendant Complement Cytoxicity",
          "Antibody Dépendant Cell Cytoxicity.",
          "Antibody Dépendant Complement Cytoxicity.",
          "Allo-Ag Dépendant Cell Cytoxicity.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "ADCC signifie 'Antibody-Dependent Cell-mediated Cytotoxicity' (Cytotoxicité Cellulaire Dépendante des Anticorps). C'est un mécanisme de l'hypersensibilité de type II.",
      },
      {
        questionText:
          "Les médiateurs des états d'hypersensibilité de type I (immédiate) sont :",
        options: [
          "La papaïne et la pepsine.",
          "Les leucotriènes et les prostaglandines.",
          "La sérotonine.",
          "L'ocytocine et la gastrine.",
          "L'histamine.",
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation:
          "Les médiateurs de l'allergie immédiate (type I) sont des substances vasoactives libérées par les mastocytes/basophiles. Ils incluent l'histamine (E), la sérotonine (C), ainsi que des médiateurs néoformés comme les prostaglandines et les leucotriènes (B).",
      },
      {
        questionText:
          "Les formes cliniques de l'allergie type I de Gel et Coombs (à IgE) peuvent être :",
        options: [
          "des maladies à complexes immuns.",
          "des réactions cytotoxiques Ac dépendantes.",
          "un choc anaphylactique.",
          "des maladies à médiation cellulaire.",
          "des maladies sériques.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "L'hypersensibilité de type I (médiée par les IgE) peut se manifester par des réactions locales (rhinite, asthme) ou une réaction systémique sévère appelée choc anaphylactique.",
      },
    ],
  },
  {
    title: "Système HLA",
    subject: "immunologie",
    questions: [
      {
        questionText:
          "Les gènes du locus HLA-DR humain codent pour des antigènes décelables sur :",
        options: [
          "Toutes les cellules de l'organisme, à l'exception des hématies",
          "Les lymphocytes B",
          "Les hématies",
          "Les plaquettes",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Les antigènes HLA-DR (CMH de classe II) se trouvent sur les cellules présentatrices d'antigènes (CPA) professionnelles, qui incluent les cellules dendritiques, les monocytes/macrophages et les lymphocytes B (LB).",
      },
      {
        questionText:
          "A propos des antigènes de classe du complexe majeur d'histocompatibilité:",
        options: [
          "Sont codés par des gènes situés sur le bras court du chromosome 6.",
          "Sont formés d'une chaîne lourde associée de façon non covalente à une molécule de bêta 2 microglobuline",
          "Ne sont pas exprimés sur les lymphocytes T au repos",
          "Sont exprimés par les macrophages.",
          "Leur expression est augmentée par l'IFN-gamma",
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation:
          "A: Le CMH est localisé sur le bras court du chromosome 6. B: Le CMH de classe I est formé d'une chaîne lourde α et de la β2-microglobuline. C: Le CMH I est exprimé sur les lymphocytes T, même au repos (C faux). D: Le CMH I est exprimé sur la plupart des cellules nucléées, y compris les macrophages. E: L'IFN-gamma augmente l'expression du CMH I.",
      },
      {
        questionText:
          "La probabilité de semi-identité pour les groupes HLA parmi les enfants d'une famille est de :",
        options: [
          "Un sur deux",
          "Un sur quatre",
          "Un sur huit",
          "Un sur seize",
          "Un sur trente-deux 1/32",
        ],
        correctOptionIndexes: [0],
        explanation:
          "La probabilité de semi-identité HLA (partageant un haplotype) entre enfants de la même famille est de 50%, soit 1 sur 2.",
      },
      {
        questionText:
          "Les gènes du Complexe Majeur d'Histocompatibilité (CMH) ont les propriétés suivantes :",
        options: [
          "Un polymorphisme réduit",
          "Chaque gène est mono allélique",
          "L'haplotype parental est transmis en bloc à la descendance",
          "Certains allèles HLA d'un locus sont associés préférentiellement avec des allèles d'un autre locus",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "A, B: Le CMH présente un polymorphisme extrême (polyallélique). C: L'haplotype parental (ensemble des gènes CMH sur un chromosome) est transmis en bloc. D: Il existe un déséquilibre de liaison : certains allèles de locus différents sont associés plus fréquemment que par hasard.",
      },
    ],
  },
  {
    title: "Le système du complément",
    subject: "immunologie",
    questions: [
      {
        questionText:
          "La ou les classes d'immunoglobulines suivantes active(nt) le complément par la voie classique après liaison avec antigène multivalent:",
        options: ["IgM", "IgA", "IgG", "IgE"],
        correctOptionIndexes: [0, 2],
        explanation:
          "La voie classique du complément est principalement activée par les immunoglobulines IgM et IgG.",
      },
      {
        questionText:
          "Parmi les constituants suivants, quel est celui qui n'est impliqué que dans la voie alterne d'activation du complément?",
        options: ["C1", "C2", "C3", "B"],
        correctOptionIndexes: [3],
        explanation:
          "Le facteur B est un composant spécifique à la voie alterne du complément. C1 et C2 sont spécifiques à la voie classique, et C3 est commun aux deux voies.",
      },
      {
        questionText:
          "La ou les classes d'immunoglobulines suivantes active(nt) le complément par la voie classique après liaison avec antigène multivalent:",
        options: ["IgM", "IgA", "IgG", "IgE", "IgD"],
        correctOptionIndexes: [0, 2],
        explanation:
          "Le complément est activé par la voie classique principalement grâce aux immunoglobulines IgM et IgG.",
      },
      {
        questionText:
          "L'activation de la voie classique du complément par des complexes immuns peut entraîner une baisse de certains constituants. Quels sont les deux constituants dont la baisse éventuelle est la plus précoce ?",
        options: ["C2", "C1q", "C3", "C4", "C9"],
        correctOptionIndexes: [1, 3],
        explanation:
          "La voie classique est initiée par C1q, qui clive C4 puis C2. Par conséquent, C1q et C4 sont les constituants consommés le plus précocement.",
      },
      {
        questionText:
          "Parmi les constituants suivants, quel est celui qui n'est impliqué que dans la voie alterne d'activation du complément ?",
        options: ["C1", "C2", "C3", "C4", "B"],
        correctOptionIndexes: [4],
        explanation:
          "Le facteur B est un composant spécifiquement impliqué dans la voie alterne d'activation du complément.",
      },
      {
        questionText: "La voie classique du complément :",
        options: [
          "Tous les isotypes d'immunoglobulines peuvent activer la voie classique du complément.",
          "Seule les IgG et IgM peuvent activer la voie classique du complément.",
          "C'est une composante de l'immunité adaptative.",
          "Elle est régulée par le C1 inhibiteur, le facteur I et le facteur H.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "A, B: La voie classique est *principalement* activée par IgM et IgG. C: Elle est considérée comme une composante de l'immunité adaptative car elle est souvent initiée par des anticorps. D: Le facteur H régule la voie alterne, pas la voie classique (régulée par C1inh, C4bp, Facteur I).",
      },
      {
        questionText: "La voie alterne du complément:",
        options: [
          "Elle est activée en permanence (système de patrouille) à la surface des cellules de l'organisme.",
          "Elle est régulée par le facteur H et le facteur I.",
          "La C3 convertase d'initiation est stabilisée par la properdine.",
          "Elle intervient dans la clairance des corps apoptotiques.",
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation:
          "Toutes ces propositions sont vraies. La voie alterne est un système de patrouille activé en permanence (A), régulé par les facteurs H et I (B), stabilisé par la properdine (C) et impliqué dans la clairance des débris (D). (Le commentaire ne validait que B, mais toutes sont correctes).",
      },
      {
        questionText:
          "Le phénomène d'immuno- adhérence est lié à la fixation sur des récepteurs cellulaires du fragment:",
        options: ["C3a.", "C5a", "C3b.", "C5b."],
        correctOptionIndexes: [2],
        explanation:
          "L'immuno-adhérence (ou opsonisation) est assurée par le fragment C3b du complément, qui se fixe sur les pathogènes et est reconnu par les récepteurs C3b des phagocytes.",
      },
      {
        questionText:
          "Un prélèvement de sang pour dosage du complément total reste 2 jours à température ambiante avant d'arriver au laboratoire, conduite à tenir :",
        options: [
          "faire l'examen.",
          "demander un nouveau prélèvement sur un anticoagulant (EDTA et/ou citrate de sodium).",
          "demander un nouveau prélèvement sur tube sec acheminé dans de la glace.",
          "chauffer le sérum 30 mn à 37° degrés",
        ],
        correctOptionIndexes: [2],
        explanation:
          "Le complément est thermolabile (détruit par la chaleur, 56°C pendant 30 min) et est inhibé par les anticoagulants (EDTA, citrate). Un échantillon resté 2 jours à température ambiante est dégradé (A, D faux). Il ne faut pas d'anticoagulant pour doser le complément (B faux). Il faut un nouveau prélèvement sur tube sec, transporté au froid (glace).",
      },
      {
        questionText: "le complément",
        options: [
          "est un ensemble de protéines qui sont produites après une agression antigénique.",
          "est un ensemble de protéines qui existent dans l'organisme avant toute agression antigénique",
          "est appelé ainsi par ce qu'il complète l'action des antigènes",
          "certaines de ses fractions ont des propriétés non hémolytiques",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "B: Le complément est un système de protéines qui existe déjà dans le plasma (inné) avant l'immunisation. D: Outre la lyse (activité hémolytique), le complément a des activités non cytolytiques importantes (opsonisation, chimiotactisme, anaphylatoxine).",
      },
      {
        questionText: "Le Complément :",
        options: [
          "Existent normalement à l'état actif dans I'organisme avant toute agression par un antigène.",
          "Existent normalement à l'état inactif dans I'organisme avant toute agression par un antigène.",
          "Est activé par les immunoglobulines e type IgM.",
          "Est activé par les immunoglobulines de type IgA agrégées par la voie classique.",
          "Est activé par les immunoglobulines de type IgA agrégées par la voie alterne.",
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation:
          "B: Le complément circule sous forme inactive. C: L'IgM active la voie classique. E: Les IgA agrégées activent la voie alterne (pas la voie classique).",
      },
      {
        questionText: "Le complément :",
        options: [
          "existe dans le sang sous forme active.",
          "est activé par le complexe Ag-Ig",
          "existe dans le sang en dehors de tout contact avec un Ag.",
          "il existe sous forme d'une seule molécule.",
          "est inhibé par les anticoagulants et la chaleur.",
          "existe dans le sang sous forme inactive",
        ],
        correctOptionIndexes: [1, 2, 4, 5],
        explanation:
          "B: Le complexe Antigène-Immunoglobuline (Ag-Ig) active la voie classique. C, F: Le complément existe sous forme inactive dans le sang, en dehors de toute immunisation. E: Il est thermolabile (inhibé par la chaleur) et inhibé par les anticoagulants (EDTA, citrate).",
      },
      {
        questionText:
          "Dans la réaction à médiation cellulaire, la cytolyse des cellules cibles, nécessite:",
        options: [
          "La présence du Compliment",
          "La fixation préalable des Ac à la surface des cellules",
          "un contact direct entre cellule effectrice cellule cible",
          "la production d'Anticorps cytolytiques",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La cytolyse à médiation cellulaire (par les LT cytotoxiques ou les NK) nécessite un contact direct 'cellule à cellule' (synapse immunologique) pour délivrer le signal de mort (ex: perforine/granzyme).",
      },
      {
        questionText: "Le complément:",
        options: [
          "est produit après stimulation antigénique.",
          "est activé par les venins et les toxines.",
          "certains de ses constituants ont une activité anaphylactique.",
          "est activé par un complexe IgA sécrétoires-Ag.",
          "existe dans l'organisme en absence de toute immunisation.",
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation:
          "E: Le complément existe en absence d'immunisation (immunité innée). C: Les fragments C3a et C5a sont des anaphylatoxines (pro-inflammatoires). B: Certains venins et toxines peuvent activer la voie alterne.",
      },
    ],
  },
  {
    title: "Lymphocytes T",
    subject: "immunologie",
    questions: [
      {
        questionText: "Les lymphocytes T CD8:",
        options: [
          "Peuvent être inducteurs d'apoptose",
          "Peuvent tuer des cellules infectées par un virus",
          "Peuvent tuer des cellules tumorales",
          "Ne produisent pas de cytokines",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "Les lymphocytes T CD8+ sont cytotoxiques et jouent un rôle majeur dans l'immunité anti-virale (en tuant les cellules infectées) et anti-tumorale (en tuant les cellules cancéreuses), notamment en induisant l'apoptose.",
      },
      {
        questionText: "On peut identifier les lymphocytes T dans le sang humain par:",
        options: [
          "Morphologie particulière après coloration de Giemsa",
          "Présence d'antigènes HLA de classe 1 à leur surface",
          "Réactivité avec un anticorps anti-CD2",
          "Réactivité avec un anticorps anti-CD3.",
          "Présence de récepteurs de membrane pour le Fc des IgG",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "A: Les lymphocytes T ne sont pas distinguables morphologiquement. B: Le CMH I n'est pas spécifique aux LT. C/D: Le CD2 et le CD3 sont des marqueurs pan-T (présents sur tous les lymphocytes T). E: Les récepteurs Fc des IgG se trouvent sur d'autres cellules, comme les NK.",
      },
      {
        questionText: "Les lymphocytes T CD8:",
        options: [
          "Peuvent être inducteurs d'apoptose",
          "Peuvent tuer des cellules infectées par un virus",
          "Peuvent tuer des cellules tumorales",
          "Ne produisent pas de cytokines",
          "Sont restreints habituellement par les molécules de classe II du CMH (DR, DQ, DP)",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "A, B, C: Les LT CD8+ sont cytotoxiques et essentiels contre les virus et les tumeurs, en induisant l'apoptose. D: Ils produisent des cytokines (ex: IFN-gamma). E: Ils sont restreints par le CMH de classe I (pas II).",
      },
      {
        questionText: "Parmi les marqueurs retrouvés à la surface des lymphocytes T :",
        options: ["ATCR/CD3", "CD25", "CD20", "CD56"],
        correctOptionIndexes: [0, 1],
        explanation:
          "Le marqueur principal définissant les lymphocytes T est le complexe TCR/CD3 (A). Le CD25 (récepteur de l'IL-2) est également un marqueur des LT, en particulier les LT activés et les LT régulateurs. Le CD20 est un marqueur B et le CD56 est un marqueur NK.",
      },
      {
        questionText:
          "Dans la réaction à médiation cellulaire, la cytolyse des cellules cibles, nécessite :",
        options: [
          "La présence du Complément.",
          "La fixation préalable des Ag aux Ac.",
          "un contact direct entre la cellule effectrice et la cellule cible.",
          "la présence d'Anticorps cytolytiques.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La cytolyse à médiation cellulaire (par les LT cytotoxiques ou les NK) nécessite un contact direct 'cellule à cellule' (synapse immunologique) pour délivrer le signal de mort.",
      },
      {
        questionText: "L'immunité cellulaire peut être transmise par",
        options: [
          "le sérum",
          "les Lympbocytes",
          "les polynucléaires basophiles et mastocytes.",
          "les Lymphocytes T.",
        ],
        correctOptionIndexes: [3],
        explanation:
          "L'immunité cellulaire (contrairement à l'immunité humorale qui est dans le sérum) est transmise par les cellules, et plus spécifiquement par les lymphocytes T.",
      },
      {
        questionText:
          "Dans la réaction à médiation cellulaire, cytolyse des cellules cibles, nécessite:",
        options: [
          "La présence du Complément",
          "La fixation préalable des Ag aux Ac.",
          "Un contact direct entre cellule effectrice et cellule cible",
          "La présence d'Anticorps cytolytiques",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La cytolyse à médiation cellulaire (par les LT cytotoxiques) requiert un contact physique direct entre le lymphocyte T effecteur et la cellule cible pour induire l'apoptose.",
      },
      {
        questionText: "l'immunité cellulaire peut être transmise par",
        options: [
          "Le sérum",
          "les Lymphocytes",
          "les polynucléaires basophiles et mastocytes",
          "les Lymphocytes T",
        ],
        correctOptionIndexes: [3],
        explanation:
          "L'immunité cellulaire est assurée par les lymphocytes T et ne peut être transférée que par ces cellules (contrairement à l'immunité humorale transférée par le sérum/anticorps).",
      },
      {
        questionText:
          "Les formules suivantes k2α2, λ2 α2 et k2 γ2, λ2 γ2 correspondent à deux chaînes lourdes et deux chaines légères des immunoglobulines de types:",
        options: [
          "IgM et Ig",
          "IgA sécrétoires et Ig",
          "IgG et IgA sériques.",
          "IgA sécrétoires et Ig",
          "IgD et Ig",
        ],
        correctOptionIndexes: [2],
        explanation:
          "k2γ2/λ2γ2 : Chaîne lourde gamma (γ) = IgG. k2α2/λ2α2 : Chaîne lourde alpha (α) = IgA (sérique, car monomère).",
      },
    ],
  },
  {
    title: "Cellules cytotoxiques naturelles (NK)",
    subject: "immunologie",
    questions: [
      {
        questionText:
          "La reconnaissance des cellules cibles par les cellules NK se fait par :",
        options: [
          "La balance de signaux",
          "Est restreinte par le CMH",
          "Est non restreinte par le CMH",
          "Les molécules d'adhésion cellulaire",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "La reconnaissance des cellules cibles par les cellules NK n'est pas restreinte par le CMH (C). Elle est décidée par une 'balance' de signaux reçus par des récepteurs activateurs (lyse) et des récepteurs inhibiteurs (tolérance) (A).",
      },
      {
        questionText: "Les mécanismes de lyse des cellules NK sont:",
        options: [
          "L'ADCC",
          "Les récepteurs de mort cellulaire",
          "Dépendants du complément",
          "Perforine/granzyme",
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "Les cellules NK tuent leurs cibles via plusieurs mécanismes : l'ADCC (cytotoxicité dépendante des anticorps), l'utilisation de perforine/granzyme, et l'activation des récepteurs de mort (comme Fas/FasL et TRAIL/TRAIL-R).",
      },
      {
        questionText:
          "Les cellules impliquées dans la destruction des cellules tumorales sont représentées par :",
        options: [
          "Les cellules NK",
          "Les polynucléaires éosinophiles",
          "Les lymphocytes T",
          "Les polynucléaires basophiles",
          "Les polynucléaires neutrophiles",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "Les cellules NK et les lymphocytes T (cytotoxiques) sont les principales cellules impliquées dans la destruction des cellules tumorales. Les polynucléaires (B, D, E) ne sont pas les acteurs principaux de cette apoptose.",
      },
      {
        questionText:
          "La reconnaissance des cellules cibles par les cellules NK se fait par :",
        options: [
          "La balance de signaux",
          "Est restreinte par le CMH",
          "Est non restreinte par le CMH",
          "Les molécules d'adhésion cellulaire",
          "Les chimiokines",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "La reconnaissance des cellules NK n'est pas restreinte par le CMH (C) et dépend d'une 'balance' de signaux entre récepteurs activateurs et inhibiteurs (A).",
      },
      {
        questionText: "Les mécanismes de lyse des cellules NK sont :",
        options: [
          "La cytotoxicité cellulaire anticorps dépendante",
          "Les récepteurs de mort cellulaire",
          "Dépendants du complément",
          "Perforine/granzyme",
          "La phagocytose",
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "Les mécanismes de lyse des cellules NK incluent : l'ADCC (A), les récepteurs de mort (B, ex: Fas/FasL), et le système perforine/granzyme (D).",
      },
      {
        questionText: "Activation des cellules NK:",
        options: [
          "L'absence du signal inhibiteur entraine l'activation des cellules NK..",
          "La surexpression des molécules activatrices peut entrainer l'activation des cellules NK.",
          "Si co-engagement du d'un KIR activateur et d'un KIR inhibiteur à la surface des NK, c'est le signal activateur qui l'emporte.",
          "Les cellules tumorales peuvent diminuer l'expression des molécules CHM de classe | et exprimer des ligands activateurs entrainant l'activation des cellules NK.",
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "A, B, D: L'activation NK dépend d'une balance. Elle est activée si les signaux inhibiteurs (ex: liaison au CMH I) sont absents (A, D) ou si les signaux activateurs sont surexprimés (B, D). C: Faux, en cas de co-engagement, c'est le signal inhibiteur qui l'emporte (tolérance).",
      },
    ],
  },
  {
    title: "Les Antigènes",
    subject: "immunologie",
    questions: [
      {
        questionText: "Définition des haptènes en immunologie:",
        options: [
          "Molécules chimiques de faible immunogénicité",
          "haut poids moléculaire avec absence d'antigénécité",
          "composé généralement des carbohydrates ou de lipides",
          "nécessite son attachement avec une protéine carrier pour devenir immunogénétique",
        ],
        correctOptionIndexes: [3],
        explanation:
          "Un haptène est un antigène incomplet (antigénique mais non immunogène par lui-même). Il doit être attaché à une molécule porteuse (carrier) pour devenir immunogène (capable de déclencher une réponse immunitaire).",
      },
      {
        questionText: "Définition des haptènes en immunologie :",
        options: [
          "Molécules chimiques de faible immunogénicité",
          "haut poids moléculaire avec absence d'antigénécité",
          "composé généralement des carbohydrates ou de lipides",
          "nécessite son attachement avec une protéine carrier pour devenir immunogénétique",
          "peuvent être présenté directement par les CPA aux lymphocytes T",
        ],
        correctOptionIndexes: [0, 3],
        explanation:
          "A: Les haptènes sont des molécules trop petites pour induire une réponse immunitaire seules (faible/non immunogène). D: Ils nécessitent d'être couplés à une molécule porteuse (carrier) pour devenir immunogènes.",
      },
      {
        questionText: "Définition des haptènes en immunologie :",
        options: [
          "une action autocrine",
          "une action à distance via la lymphe",
          "un effet endocrine",
          "un effet paracrine.",
          "un effet cytotoxique",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "Cette question semble erronée (elle ne concerne pas les haptènes mais les cytokines). En supposant qu'elle porte sur l'action systémique des cytokines : L'action systémique signifie que les cytokines circulent dans le système lymphatique (B) et la circulation sanguine (effet endocrine, C) pour atteindre des cellules cibles distantes.",
      },
      {
        questionText: "Un haptène est :",
        options: [
          "Un antigène de faible poids moléculaires.",
          "Capable de stimuler le système immunitaire afin de produire des effecteurs spécifiques.",
          "Capable de se lier aux récepteurs des lymphocytes T et B (TCR et BCR) et au paratope des anticorps.",
          "Constitué de plusieurs déterminants antigéniques ou épitopes.",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "A: Les haptènes sont des antigènes de faible poids moléculaire. C: Un haptène (une fois la réponse immunitaire établie grâce à un carrier) peut se lier aux anticorps (paratope). Le complexe haptène-protéine peut se lier aux récepteurs B et T.",
      },
      {
        questionText: "Un antigène de nature polysaccharidique :",
        options: [
          "Induit la production d'anticorps d'isotype IgM +++.",
          "Ne peut activer une réponse immunitaire thymo-dépendante que s'il se lie à une protéine porteuse (carrier).",
          "Peut activer une réponse thymo-indépendante.",
          "Induit une mémoire immunologique.",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "Les antigènes polysaccharidiques sont des antigènes T-indépendants (C). Ils induisent une réponse B produisant principalement des IgM (A) et ne créent pas de mémoire immunologique (D faux). Pour induire une réponse T-dépendante (avec mémoire et switch de classe), ils doivent être liés à une protéine porteuse (B).",
      },
      {
        questionText:
          "A propos des facteurs influençant l'immunogénicité d'un antigène :",
        options: [
          "Les protéines sont plus immunogènes que les acides nucléiques.",
          "L'ajout des adjuvants augmente l'immunogénicité de l'antigène.",
          "La voie intramusculaire est la moins immunogène des voies d'administration de l'antigène.",
          "Les facteurs liés à l'hôte n'ont aucune influence sur l'immunogénicité de l'antigène.",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "L'immunogénicité dépend de la nature de l'antigène (protéines > polysaccharides > acides nucléiques) (A) et de la méthode d'administration (les adjuvants l'augmentent) (B). Les facteurs liés à l'hôte (génétique, âge) jouent aussi un rôle (D faux).",
      },
      {
        questionText:
          "quelle est l'autre appellation d'un déterminant antigénique :",
        options: ["Aparatope.", "isotope.", "allotype.", "épitope"],
        correctOptionIndexes: [3],
        explanation:
          "Le déterminant antigénique, la partie de l'antigène reconnue par l'anticorps, est aussi appelé 'épitope'. Le 'paratope' est la partie de l'anticorps qui reconnaît l'épitope.",
      },
      {
        questionText: "Un allo-antigène :",
        options: [
          "est présent chez toutes les espèces.",
          "est présent chez tous les individus normaux,",
          "définit des groupes dans une même population.",
          "peut être responsable de manifestations pathologiques.",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "Les allo-antigènes (ou iso-antigènes) proviennent d'un individu de la même espèce. Ils définissent des groupes au sein d'une espèce (ex: groupes sanguins, HLA) (C). Une allo-immunisation (ex: mère Rh- / fœtus Rh+) peut causer des pathologies (D).",
      },
      {
        questionText:
          "Une molécule capable de réagir avec un Ac mais incapable d'induire une production d'Ac est:",
        options: ["antigène.", "un immunogène.", "un haptène.", "un adjuvant."],
        correctOptionIndexes: [2],
        explanation:
          "Un haptène est antigénique (peut réagir avec un Ac) mais n'est pas immunogène (ne peut pas induire la production d'Ac *seul*). Il le devient s'il est couplé à une protéine porteuse.",
      },
      {
        questionText: "Les Antigènes HLA",
        options: [
          "sont des allo-antigènes.",
          "permettent l'étude des mouvements de population dans le monde.",
          "sont responsables des rejets de greffes.",
          "existent sur les globules rouges.",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "Les antigènes HLA (Human Leukocyte Antigen) sont des allo-antigènes (A) responsables du rejet de greffe (C). Ils sont utilisés en anthropologie pour l'étude des populations (B). Ils n'existent pas sur les globules rouges (qui n'ont pas de noyau) (D faux).",
      },
      {
        questionText: "Le mot Antigène (Ag) vient de",
        options: [
          "Anti génome",
          "Anti génétique",
          "Anti-body generator.",
          "Anti-génome-generator.",
        ],
        correctOptionIndexes: [2],
        explanation: "Le terme 'antigène' est une contraction de l'anglais 'antibody generator' (générateur d'anticorps).",
      },
      {
        questionText: "Un haptène:",
        options: [
          "est une substance qui, couplée à ……………………porteur devient antigénique",
          "est une substance de types allergique.",
          "est une substance qui, couplée à une protéine porteur devient antigénique",
          "est un xéno-antigène.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "Un haptène seul n'est pas immunogène. Il doit être couplé à une molécule porteuse (généralement une protéine) pour devenir antigénique (et immunogénique).",
      },
      {
        questionText: "Les Antigènes HLA",
        options: [
          "sont des iso et allo-antigènes.",
          "permettent l'étude des mouvements de population dans le monde.",
          "sont responsables des rejets de greffes",
          "existent sur les globules rouges.",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "Les Ag HLA sont des allo-antigènes (A) situés sur les cellules nucléées (D faux), responsables du rejet de greffe (C). Leur étude est utilisée en anthropologie (étude des populations) (B).",
      },
      {
        questionText: "Les Antigènes HLA",
        options: [
          "sont des iso et allo-antigènes",
          "permettent l'étude des mouvements de population dans le monde.",
          "sont responsables des rejets de greffes",
          "existent sur les globules rouges",
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation:
          "A, B, C: Les Ag HLA sont des allo-antigènes (A) responsables du rejet de greffe (C) et utilisés pour l'étude des populations (B). D: Ils n'existent pas sur les globules rouges (non nucléés).",
      },
      {
        questionText: "Un haptène:",
        options: [
          "est une substance qui, couplée à un lipide porteur devient antigénique.",
          "est en général une substance de faible poids moléculaire.",
          "est une substance qui, couplée à une cellule porteuse devient antigénique.",
          "est un auto-antigène",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Un haptène est un antigène incomplet, non immunogène seul, caractérisé par son faible poids moléculaire.",
      },
      {
        questionText: "Un haptène :",
        options: [
          "est une substance qui, couplée à un lipide porteur devient antigénique.",
          "est un Ag incomplet.",
          "est une substance qui, couplée à une cellule porteuse devient antigénique.",
          "seul, provoque la production d'anticorps (Ac).",
          "est une substance qui, couplée à une protéine porteuse devient antigénique.",
        ],
        correctOptionIndexes: [1, 4],
        explanation:
          "Un haptène est un antigène incomplet (B) de faible poids moléculaire. Il n'est pas immunogène seul (D faux), mais le devient après couplage avec une molécule porteuse (carrier), généralement une protéine (E).",
      },
      {
        questionText: "L'abréviation HLA signific:",
        options: [
          "Human Lymphocyte Antigen (Ag)",
          "Human Lymphocyte Antibody (Ac)",
          "Human Leucocyte Antigen",
          "Human Leucocyte Antibody.",
          "Human Leucocyte Activated",
        ],
        correctOptionIndexes: [2],
        explanation: "HLA est l'abréviation de 'Human Leucocyte Antigen' (Antigène Leucocytaire Humain).",
      },
      {
        questionText: "Les HLA:",
        options: [
          "permettent l'étude et la classification des populations en différents types,",
          "permettent d'aider au diagnostic de certaines maladies.",
          "permettent de faire une corrélation avec les caries dentaires.",
          "permettent de faire une corrélation avec les parodontites.",
          "existent sur les globules rouges.",
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "L'étude HLA permet l'étude des populations (A) et de l'association avec certaines maladies (B), notamment la spondylarthrite ankylosante. En stomatologie, une corrélation existe avec la susceptibilité aux parodontites (D) (ex: HLA-DR4).",
      },
      {
        questionText:
          "Dans le système HLA :",
        options: [
          "les lettres HLA signifient Human Leucocyte Antibody.",
          "il existe une relation entre certains Ag HLA et certaines maladies.",
          "en stomatologie les Ag HLA jouent un rôle dans la susceptibilité aux parodontites.",
          "les Ag HLA permettent d'étudier le mouvement des populations dans le monde.",
          "les lettres HLA signifient Human Lymphokin Antigen.",
          "les Ag HLA ne jouent aucun rôle dans les rejet de greffe.",
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation:
          "B, C, D: L'étude des HLA (Human Leucocyte Antigen) est cruciale pour l'étude génétique des maladies (B), y compris les parodontites (C), et pour l'anthropologie (étude des populations) (D). Ils sont le facteur principal du rejet de greffe (F faux).",
      },
      {
        questionText: "Les antigènes :",
        options: [
          "les Xéno-Ag sont des Ag qui correspondent à des espèces différentes.",
          "les hétéro-Ag sont des Ag qui existent au sein d'une même espèce.",
          "les Iso-Ag sont des Ag qui correspondent à une même espèces.",
          "les auto-Ag sont des Ag qui existent au sein d'une même espèce.",
          "les Allo-Ag sont des Ag qui existent au sein d'un même individu.",
          "les Ag figurés ou particulaires sont représentés par les hormones et les venins.",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "A: Les xéno-antigènes (ou hétéro-antigènes) proviennent d'une espèce différente. B: Faux. C: Les iso-antigènes (ou allo-antigènes) existent chez certains individus d'une *même* espèce (ex: groupes sanguins). E: Faux (allo = autre individu, auto = même individu).",
      },
      {
        questionText: "Un haptène est :",
        options: [
          "un antigène (Ag) complet couplé à une protéine porteuse.",
          "un Ag HLA couplé à une protéine porteuse.",
          "un anticorp (Ac) couplé à une protéine porteuse.",
          "un Ag incomplet.",
          "une substance que l'on peut retrouver dans les amalgames dentaires.",
        ],
        correctOptionIndexes: [3, 4],
        explanation:
          "Un haptène est un antigène incomplet (D) non immunogène seul. Certains matériaux dentaires (comme les métaux dans les amalgames) peuvent agir comme des haptènes, se liant à des protéines du corps et provoquant une allergie (E).",
      },
      {
        questionText: "Dans le système HLA:",
        options: [
          "les lettres H, L et A signifient: Human Lymphocytes Antigen (Ag).",
          "les lettres H, L et A signifient: Human Leucocytes Antigen.",
          "les lettres H, L et A signifient: Human Lymphokin Antigen.",
          "les Ag HLA se trouvent sur les cellules mononucléées.",
          "les Ag HLA ne se trouvent pas sur les cellules non nuclées.",
        ],
        correctOptionIndexes: [1, 4],
        explanation:
          "B: HLA signifie Human Leucocyte Antigen. E: Les antigènes HLA (CMH I et II) se trouvent à la surface des cellules nucléées, ils ne sont donc pas présents sur les cellules non nucléées comme les globules rouges.",
      },
    ],
  },
  {
    title: "Cellules phagocytaires",
    subject: "immunologie",
    questions: [
      {
        questionText: "Les neutrophiles sont des cellules phagocytaires :",
        options: [
          "De mobilisation rapide et en nombre intense grâce aux pools médullaires et marginales",
          "Synthétisent et secrètent fortement les cytokines pro-inflammatoires au cours d'une réponse immune",
          "De courte durée de vie à cause de leur contenu granulaire cytotoxique",
          "Les dernières cellules mobilisées au site inflammatoire après les monocytes",
          "Peuvent capter des agents infectieux extracellulaires grâce au processus 'Netosis'",
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation:
          "A, C: Les neutrophiles sont des cellules phagocytaires à courte durée de vie, mobilisées rapidement et en grand nombre (première vague). E: Ils peuvent piéger des pathogènes extracellulaires via le processus de 'Netosis' (libération de fibres d'ADN).",
      },
      {
        questionText: "Les facteurs de croissance G-CSF et GM-CSF:",
        options: [
          "agissent sur le développement d'organes lymphoïdes périphériques ~",
          "induisent le chimiotactisme des neutrophiles vers le site inflammatoire...",
          "facteurs important pour l'hématopoïèse de la lignée myéloïde",
          "synthétisés de novo au cours d'une réaction inflammatoire -",
          "exercent un effet antagoniste au TGF-beta",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "Le G-CSF et le GM-CSF sont des facteurs importants pour l'hématopoïèse de la lignée myéloïde (C) (production de granulocytes et monocytes) et jouent un rôle dans le chimiotactisme (migration) des neutrophiles (B).",
      },
      {
        questionText: "Les macrophages peuvent détruire un Antigène par:",
        options: [
          "Cytotoxicité à l’aide des défensines",
          "Phagocytose",
          "des mécanismes activant le complément",
          "utilisation de substances appelées perforines",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Le mécanisme de destruction principal des macrophages est la phagocytose : ils capturent (phagocytent) l'antigène (ex: bactérie) et le détruisent en interne grâce au contenu de leurs lysosomes (phagolysosome).",
      },
    ],
  },
  {
    title: "Réaction inflammatoire",
    subject: "immunologie",
    questions: [
      {
        questionText: "La phase terminale d'une réaction inflammatoire :",
        options: [
          "dépende de l'activation des mastocytes et des éosinophiles tissulaires",
          "déclenchée par le recrutement des lymphocytes T activés",
          "correspond à l'activation de la réparation tissulaire et la synthèse de la matrice extracellulaire",
          "nécessite l'inhibition et l'induction d'apoptose des lymphocytes effecteurs",
          "fait intervenir des macrophages de profile M2 et des lymphocytes T régulateurs",
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation:
          "La phase terminale (résolution) implique l'arrêt de l'inflammation (apoptose des cellules effectrices, D) et l'initiation de la réparation tissulaire (C). Ce processus est activement médié par des cellules anti-inflammatoires comme les macrophages M2 et les lymphocytes T régulateurs (E).",
      },
      {
        questionText:
          "Parmi les effecteurs cellulaires circulants de la réaction inflammatoire :",
        options: [
          "Polynucléaires neutrophiles",
          "Monocytes",
          "Mastocytes",
          "Fibroblastes",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "Les effecteurs cellulaires *circulants* de l'inflammation sont ceux qui arrivent par le sang, principalement les polynucléaires neutrophiles (première vague) et les monocytes (qui deviennent macrophages dans les tissus). Les mastocytes et les fibroblastes sont des cellules *résidentes* du tissu.",
      },
      {
        questionText: "Les cytokines douées de propriétés pro-inflammatoires:",
        options: ["L'Interleukine 6", "TNF alpha", "L'interleukine 10", "GM-CSF"],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "L'IL-6, le TNF-alpha et le GM-CSF sont des cytokines pro-inflammatoires. L'IL-10 est une cytokine anti-inflammatoire (régulatrice).",
      },
      {
        questionText: "Les marqueurs de l'inflammation sont :",
        options: [
          "la VS (vitesse de sédimentation).",
          "La FNS (Formule de Numération Sanguine)",
          "L'électrophorèse de l'hémoglobine.",
          "La PCR (Protéase Chain Reaction).",
        ],
        correctOptionIndexes: [0, 1],
        explanation:
          "Les marqueurs biologiques de l'inflammation incluent la Vitesse de Sédimentation (VS), la Protéine C-Réactive (CRP, pas PCR), la Numération Formule Sanguine (NFS) et l'électrophorèse des protéines sériques.",
      },
      {
        questionText: "Les marqueurs de l'inflammation sont:",
        options: [
          "la VS (vitesse de sédimentation)",
          "La PCR (Polymérase Chain Reaction).",
          "L'électrophorèse de l'hémoglobine.",
          "La CRP (Protéin C Reactive).",
        ],
        correctOptionIndexes: [0, 3],
        explanation:
          "Les marqueurs biologiques standards de l'inflammation sont la Vitesse de Sédimentation (VS) et la Protéine C-Réactive (CRP). La PCR (B) est une technique de biologie moléculaire, pas un marqueur inflammatoire.",
      },
      {
        questionText: "Dans l'inflammation :",
        options: [
          "à la fin (après le 8e jours), la VS est élevée tandis que la CRP est nomale.",
          "à la fin (après le 8e jours), la VS est normale tandis que la CRP est encore élevée.",
          "au début (les 2 premiers jours), la VS est nomale tandis que la CRP est déjà élevée.",
          "au début, la VS est déjà élevée tandis que la CRP est normale.",
          "l'électrophorèse de l'hémoglobine est aussi un marqueur de l'inflammation.",
        ],
        correctOptionIndexes: [0, 2],
        explanation:
          "La CRP (Protéine C-Réactive) augmente très rapidement (dès les premières heures) et baisse rapidement. La VS (Vitesse de Sédimentation) augmente plus lentement et reste élevée plus longtemps. Donc, au début, la CRP est élevée mais la VS est encore normale (C). À la fin, la CRP est normalisée mais la VS peut rester élevée (A).",
      },
      {
        questionText: "Au cours d'une inflammation aigue:",
        options: [
          "le profil de séparation des protéines sériques par électrophorèse donne cinq fractions",
          "l'augmentation de la fractions al (alpha1) est observée dans un processus inflammatoire aigu.",
          "l'augmentation de la fractions a2 (alpha2) est observée dans un processus inflammatoire constitué (chronique).",
          "l'augmentation de la fractions y (gamma) peut être monoclonale ou polyclonale",
          "si l'augmentatation au niveau de la fractiopn y est monoclonale elle correspond à un processus infectieux.",
          "si l'augmentatation au niveau de la fraction y est polyclonale elle correspond à un myélome.",
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation:
          "A: L'électrophorèse sépare en 5 fractions (Albumine, α1, α2, β, γ). B: L'augmentation des α1 est vue au début de l'inflammation. C: L'augmentation des α2 évoque un syndrome inflammatoire constitué (chronique). D: L'hypergammaglobulinémie peut être mono- ou polyclonale. E, F: Faux (c'est l'inverse : Polyclonale = infection/inflammation chronique ; Monoclonale = myélome).",
      },
      {
        questionText: "La diapédèse :",
        options: [
          "est un processus utilisé par un macrophage pour éliminer les bactéries.",
          "est un processus utilisé par un lymphocyte cytotoxique pour éliminer une cellule cancéreuse.",
          "est une substance chimiotactique qui attire les lymphocytes vers le lieu de l'inflammation.",
          "est une technique de séparation des protéines sériques.",
          "est un processus utilisé par certaines cellules pour migrer des voies sanguines vers le lieu d'une inflammation.",
          "est une protéine activée du complément qui active d'autres fractions dans la voie classique.",
        ],
        correctOptionIndexes: [4],
        explanation:
          "La diapédèse est le mécanisme par lequel un leucocyte (cellule immunitaire circulante) traverse la paroi d'un vaisseau sanguin (capillaire) pour migrer vers un site d'inflammation dans les tissus.",
      },
      {
        questionText: "Les cellules résidentes de l'inflammation sont:",
        options: [
          "les monocytes.",
          "les mastocytes.",
          "les histiocytes",
          "les plasmocytes.",
          "les fibroblastes.",
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation:
          "Les cellules résidentes (déjà présentes dans le tissu avant l'inflammation) incluent les mastocytes, les histiocytes (macrophages résidents) et les fibroblastes. Les monocytes (A) sont circulants. Les plasmocytes (D) arrivent plus tard.",
      },
      {
        questionText: "au cours d'une inflammation:",
        options: [
          "au début (les 2 premiers jours), la CRP est encore normale tandis que la VS est déjà élevée.",
          "au début, la CRP est déjà élevée tandis que la VS est encore normale.",
          "à la fin (après le 8e jours), la CRP est encore élevée tandis que la VS est normale.",
          "à la fin (après le 8e jours), la CRP est normale tandis que la VS est encore élevée.",
          "La VS et la CRP sont des marqueurs biologiques de l'inflammation.",
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation:
          "E: La VS et la CRP sont deux marqueurs biologiques clés de l'inflammation. B: La CRP augmente très vite (cinétique rapide), elle est donc élevée au début, alors que la VS est encore normale. D: La VS a une cinétique lente, elle reste donc élevée plus longtemps, alors que la CRP peut déjà être redescendue à la normale.",
      },
    ],
  },
  {
    title: "Immunité innée anti bactérienne",
    subject: "immunologie",
    questions: [
      {
        questionText:
          "Parmi les mécanismes de défense innés antibactériens, on cite:",
        options: [
          "Les peptides anti-microbiens tels que les protéines du complément.",
          "Les phagocytes (macrophages et polynucléaires neutrophiles).",
          "Les cellules NK (Natural Killer).",
          "La peau et les muqueuses.",
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation:
          "Les défenses innées incluent les barrières physiques (peau, muqueuses) (D), les cellules phagocytaires (macrophages, neutrophiles) (B), et les peptides anti-microbiens (comme les défensines et les protéines du complément) (A). Les NK (C) sont plutôt anti-virales/tumorales.",
      },
      {
        questionText: "Le pneumocoque (Streptococcus pneumoniae):",
        options: [
          "Est résistant aux effecteurs de l'immunité innée.",
          "Peut-être phagocyté par les macrophages sans l'intervention des protéines C3b et C4b du complément.",
          "Présente une capsule polysaccharidique résistante à la phagocytose par les macrophages et les polynucléaires neutrophiles.",
          "Ne peut être éliminé qu'après production des dérivés réactifs de l'oxygène, tels que le monoxyde d'azote, par le polynucléaire neutrophile.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La capsule polysaccharidique du pneumocoque est un facteur de virulence majeur qui lui permet d'échapper à l'immunité innée (A est trop général) en empêchant la phagocytose (C). L'opsonisation (par C3b ou anticorps) est nécessaire pour la phagocytose (B faux).",
      },
      {
        questionText:
          "Dans l'immunité spécifique anti-bactérienne, les anticorps:",
        options: [
          "Constituent des effecteurs efficaces pour l'élimination des bactéries à multiplication intracellulaire.",
          "Peuvent activer le système du complément pour entrainer la lyse de la paroi bactérienne, c'est le cas des bactéries GRAM négatif.",
          "Sont d'isotype IgG, quel que soit la nature chimique de l'antigène ayant induit leur production.",
          "Peuvent neutraliser les toxines bactériennes telles que la toxine diphtérique et la toxine tétanique.",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "A: Faux, les Ac sont efficaces contre les bactéries extracellulaires (l'immunité cellulaire gère l'intracellulaire). B: Vrai, les Ac (IgM, IgG) activent le complément (voie classique), formant le MAC qui lyse les bactéries (surtout Gram-). C: Faux, l'isotype dépend de l'Ag (IgM pour T-indépendant). D: Vrai, la neutralisation des toxines est une fonction majeure des Ac.",
      },
    ],
  },
  {
    title: "Immunoglobulines",
    subject: "immunologie",
    questions: [
      {
        questionText: "Les immunoglobulines IgG ont les propriétés suivantes :",
        options: [
          "L'isotype le plus prédominant au niveau sérique",
          "Formé de 02 Chaînes lourdes (alpha) et 02 chaînes légères к ou λ",
          "N'activent pas le complément",
          "Ne traversent pas la barrière placentaire",
        ],
        correctOptionIndexes: [0],
        explanation:
          "A: L'IgG est l'isotype le plus prédominant dans le sérum. B: La chaîne lourde est gamma (γ), pas alpha (α = IgA). C: Faux, les IgG (1, 2, 3) activent le complément (voie classique). D: Faux, les IgG sont les seules à traverser la barrière placentaire.",
      },
      {
        questionText: "Les immunoglobulines IgA:",
        options: [
          "Existent sous forme sériques et sécrétoires",
          "La première immunoglobuline exprimée au cours de l'ontogenèse",
          "Intervient dans l'opsonisation et la phagocytose",
          "Sont des anticorps agglutinants et neutralisants",
        ],
        correctOptionIndexes: [0],
        explanation:
          "A: L'IgA existe sous deux formes : sérique (monomère) et sécrétoire (dimère). B: Faux, l'IgM est la première exprimée. C/D: La fonction principale de l'IgA (surtout sécrétoire) est la défense des muqueuses (immunité locale) en empêchant l'adhésion bactérienne.",
      },
      {
        questionText: "Cavité buccale: Le composant sécrétoire",
        options: [
          "se fixe à 5 molécules d'IgA monomériques.",
          "se fixe sur les fragments Fab.",
          "(est synthétisé par les cellules épithéliales.",
          "se fixe au niveau des fragments Fc.",
        ],
        correctOptionIndexes: [2, 3],
        explanation:
          "Le composant sécrétoire (ou pièce sécrétoire) est une glycoprotéine synthétisée par les cellules épithéliales (C) (ex: glandes salivaires). Il se fixe sur le dimère d'IgA (au niveau des fragments Fc) (D) pour former l'IgA sécrétoire, la protégeant de la dégradation.",
      },
      {
        questionText: "Le fragment Fab:",
        options: [
          "permet la fixation du Complément par la voie classique.",
          "possède 2 sites Ac.",
          "permet la fixation d'Ag.",
          "permet la fixation aux mastocytes.",
        ],
        correctOptionIndexes: [2],
        explanation:
          "Le fragment Fab ('Fragment antigen-binding') est la partie de l'anticorps qui contient le paratope et assure la reconnaissance et la fixation de l'antigène (C). Le fragment Fc (D) fixe le complément (A). Un Fab a 1 site de liaison (B faux, l'Ac entier en a 2).",
      },
      {
        questionText:
          "Parmi les classes d'immunoglobulines, indiquer celle qui passent dans la circulation fœtale par transfert placentaire :",
        options: ["IgM", "Ig", "IgA monomere.", "IgG."],
        correctOptionIndexes: [3],
        explanation:
          "Les IgG sont les seules immunoglobulines capables de traverser la barrière placentaire, conférant une immunité passive au fœtus et au nouveau-né.",
      },
      {
        questionText: "Les IgA sériques :",
        options: [
          "se présentent sous forme pentamérique.",
          "ne possèdent pas de pièce jointive J.",
          "ne jouent pas un rôle important au niveau des muqueuses.",
          "traversent la barrière placentaire.",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Les IgA sériques sont *monomériques* (A faux), tandis que les IgA sécrétoires sont dimériques (liées par la chaîne J). Les IgA sériques n'ont donc pas de pièce J (B vrai) et ne jouent pas le rôle majeur de défense des muqueuses (C faux, c'est l'IgA sécrétoire). Elles ne traversent pas le placenta (D faux).",
      },
      {
        questionText: "Le nouveau-né, à la naissance, présente :",
        options: [
          "un taux d'IgG égal à celui du père.",
          "un taux d'IgG égal à celui de la mère.",
          "un taux d'IgA égal à celui de la mère.",
          "une immunité cellulaire identique à celle d'un adulte.",
        ],
        correctOptionIndexes: [1],
        explanation:
          "À la naissance, le nouveau-né possède les IgG maternelles (passées par le placenta), son taux d'IgG est donc égal (voire supérieur) à celui de la mère (B). Il n'a quasiment pas d'IgM ou d'IgA (qu'il commencera à produire lui-même) (C faux).",
      },
      {
        questionText: "Les formules k2a2 et 2a2 représentent :",
        options: [
          "les immunoglobulines M.",
          "les immunoglobulines A sériques.",
          "les immunoglobulines",
          "les Immunoglobulines A sécrétoires.",
        ],
        correctOptionIndexes: [1],
        explanation:
          "La formule représente 2 chaînes légères (k ou λ, ici k2 et λ2) et 2 chaînes lourdes alpha (α2). La chaîne lourde alpha (α) caractérise les IgA. Comme il s'agit d'une structure monomérique (2+2), cela correspond aux IgA sériques.",
      },
      {
        questionText: "Les hybridomes",
        options: [
          "sont des cellules obtenues par fusion d'un lymphocyte T et d'un lymphocyte",
          "possèdent des propriétés identiques à celles des cellules mères.",
          "sont des maladies de système.",
          "sont producteurs d'Anticorps monoclonaux.",
        ],
        correctOptionIndexes: [3],
        explanation:
          "Un hybridome est une cellule hybride créée en laboratoire par la fusion d'un lymphocyte B (producteur d'anticorps) et d'une cellule de myélome (tumorale et immortelle). Le résultat est une 'usine' immortelle produisant une grande quantité d'un seul type d'anticorps : un anticorps monoclonal (D).",
      },
      {
        questionText: "Les IgA sériques:",
        options: [
          "se présentent sous forme pentamérique.",
          "ne possèdent pas de pièce jointive 1.",
          "ne jouent pas un rôle important au niveau des muqueuses.",
          "traversent la barrière placentaire.",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Les IgA sériques sont des monomères (A faux, IgM=pentamère). N'étant pas des polymères, elles n'ont pas de chaîne J (pièce jointive) (B vrai). C'est l'IgA sécrétoire (dimère+J+pièce S) qui protège les muqueuses (C faux).",
      },
      {
        questionText: "Le nouveau-né, à la naissance, présente",
        options: [
          "un taux d'IgG égal à celui du père.",
          "un taux d'IgG égal à celui de la mère",
          "un taux d'IgA égal à celui de la mère",
          "une immunité cellulaire identique à celle d'un adulte,",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Grâce au transfert placentaire, le nouveau-né possède à la naissance un taux d'IgG égal à celui de sa mère. Il n'a presque pas d'IgM ou d'IgA (qu'il produira lui-même).",
      },
      {
        questionText: "Les hybridomes",
        options: [
          "sont des cellules obtenues par fusion d'un lymphocyte et d'un histiocyte.",
          "ne possèdent pas de propriétés identiques à celles des cellules mères.",
          "ne synthétisent pas les fractions du complément.",
          "sont producteurs d'Anticorps monoclonaux.",
        ],
        correctOptionIndexes: [3],
        explanation:
          "Les hybridomes sont des cellules immortelles (propriété du myélome) qui produisent des anticorps spécifiques (propriété du lymphocyte B). Ces anticorps sont dits monoclonaux (D).",
      },
      {
        questionText: "Las IgA sériques:",
        options: [
          "Se présente sous forme dimérique",
          "Ne possèdent pas de pièce jointive 1.",
          "jouent un rôle important au niveau des ;,,,,,,,,,,,",
          "ne traversent pas le placenta",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "Les IgA sériques sont monomériques (A faux), donc elles n'ont pas de chaîne J (B vrai). Les IgA (sériques ou sécrétoires) ne traversent pas le placenta (D vrai, seules les IgG le font).",
      },
      {
        questionText: "Les formules k2 γ2 et λ2 γ2 représentent",
        options: [
          "les immunoglobulines M.",
          "les immunoglobulines A",
          "les immunoglobulines G.",
          "les Immunoglobulines",
        ],
        correctOptionIndexes: [2],
        explanation:
          "La formule représente 2 chaînes légères (k ou λ) et 2 chaînes lourdes gamma (γ). La chaîne lourde gamma (γ) caractérise les Immunoglobulines G (IgG).",
      },
      {
        questionText: "Le nouveau-né, à la naissance présente",
        options: [
          "Un taux d'IgM égal à celui de la mère",
          "Un taux d'IgG égal à celui de la mère",
          "Un taux d'IgA égal à celui de la mère",
          "Une immunité cellulaire identique à celle d'un adulte",
        ],
        correctOptionIndexes: [1],
        explanation:
          "À la naissance, le bébé a un taux d'IgG égal à celui de sa mère (transfert placentaire). Les IgM et IgA ne traversent pas le placenta ; le bébé commence à peine à synthétiser les siennes (taux très bas).",
      },
      {
        questionText: "Les hybridomes",
        options: [
          "sont des cellules obtenues par fusion d'un lymphocyte et d'un histiocyte.",
          "possèdent de propriétés identiques à celles des cellules mères.",
          "synthétisent pas les fractions du complément.",
          "sont producteurs d'Anticorps polyclonaux.",
        ],
        correctOptionIndexes: [1],
        explanation:
          "Un hybridome est une fusion d'un lymphocyte B et d'une cellule de myélome. Il possède les propriétés des deux cellules mères : immortalité (myélome) et production d'anticorps (lymphocyte B). Ils produisent des anticorps *monoclonaux* (D faux).",
      },
      {
        questionText: "La chaine J des IgA sécrétoires:",
        options: [
          "est produite par les plasmocytes.",
          "est produite au niveau des cellules acineuses et canalaires des galandes",
          "protègent la molécule d'IgA contre la dégradation par les enzymes sécrétions.",
          "est produite au niveau du tissus conjonctif périglandulaire.",
          "est produite par les fibroblastes.",
        ],
        correctOptionIndexes: [0],
        explanation:
          "L'IgA (dimère) et la chaîne J (qui lie le dimère) sont produites par le plasmocyte dans le tissu conjonctif (A). Le composant sécrétoire (qui protège l'IgA, C faux) est produit par les cellules épithéliales (B faux).",
      },
      {
        questionText: "Les hybridomes:",
        options: [
          "produisent des Ac dits Ac monoclonaux utilisés dans le traitement des cancers.",
          "sont des cellules obtenues par fusion d'une cellule myélomateuse et d'un lymphocytes T.",
          "sont des cellules obtenues par fusion d'une cellule myélomateuse et d'un lymphocytes",
          "possèdent à la fois les propriétés des lymphocytes T et des cellules cancéreuses fusionnés.",
          "possèdent à la fois les propriétés des lymphocytes B et des cellules cancéreuses fusionnés.",
        ],
        correctOptionIndexes: [0, 4],
        explanation:
          "Un hybridome est une fusion d'un lymphocyte B (pas T) et d'une cellule de myélome (tumorale). Il possède les propriétés des deux (E) : immortalité et production d'anticorps. Ces anticorps, dits monoclonaux, sont utilisés en thérapie, notamment contre le cancer (A).",
      },
      {
        questionText:
          "La formule suivante 32k2 et 9262 correspond à une immunoglobuline:",
        options: [
          "de type Ig",
          "de type IgA sérique.",
          "de type IgM.",
          "de type IgA sécrétoire.",
          "de type Ig",
          "de type IgG",
        ],
        correctOptionIndexes: [4],
        explanation:
          "En supposant des typos, si la chaîne lourde est epsilon (ε), (k2ε2 / λ2ε2), cela correspond aux IgE. Les IgE ont 5 domaines (4 domaines constants CH1-4).",
      },
      {
        questionText: "Les IgE",
        options: [
          "sont produites par les monocytes.",
          "existent normalement dans le sang en dehors de toute présence d'allergène.",
          "il faut une fixation d'une seule molécule sur un mastocyte ou un basophile pour provoquer leur dégranulation.",
          "fixent le complément et traversent la barrière placentaire.",
          "il faut une fixation de deux molécule sur un mastocyte ou un basophile pour provoquer leur dégranulation.",
          "n'apparaissent dans le sang que lorsqu'il y a pénétration d'un allergène.",
        ],
        correctOptionIndexes: [1, 4],
        explanation:
          "B: Les IgE se trouvent à de très faibles concentrations dans le sérum de sujets sains (non allergiques). E: La dégranulation des mastocytes/basophiles nécessite le *pontage* de deux récepteurs IgE par l'allergène. D: Les IgE ne fixent pas le complément et ne traversent pas le placenta.",
      },
      {
        questionText: "Les hybridomes:",
        options: [
          "sont appelés aussi lymphomes à lymphocytes T ou à lymphocytes",
          "sont des cellules obtenues par fusion d'une cellule myelomateuse et d'un lymphocytes T.",
          "sont des cellules obtenues par fusion d'une cellule myelomateuse et d'un lymphocytes",
          "possèdent à la fois les propriétés des lymphocytes et des cellules cancéreuses fusionnés.",
          "sont des cellules qui produisent des Ac monoclonaux.",
          "sont utilisés dans le diagnostic et le traitement de certaines maladies.",
        ],
        correctOptionIndexes: [3, 4, 5],
        explanation:
          "Un hybridome est une fusion d'un lymphocyte B (producteur d'Ac) et d'une cellule de myélome (cancéreuse). Il possède les propriétés des deux (D) : immortalité et production d'anticorps. Il produit des anticorps monoclonaux (E) utilisés en diagnostic et en thérapie (F).",
      },
      {
        questionText: "Les hybridomes:",
        options: [
          "sont des maladies des lymphocytes appelées aussi lymphomes.",
          "sont des cellules obtenues par fusion d'une cellule myélomateuse (cancéreuse) et d'un lymphocyte.",
          "sont des cellules obtenues par fusion d'une cellule myélomatose et d'un mastocyte.",
          "possèdent à la fois les propriétés des lymphocytes et des cellules cancéreuses fusionnés.",
          "sont aussi appelés Ac monoclonaux.",
        ],
        correctOptionIndexes: [1, 3],
        explanation:
          "Un hybridome est une cellule de laboratoire (pas une maladie), créée par fusion d'un lymphocyte (B) et d'une cellule de myélome (cancéreuse) (B). Il possède les propriétés des deux cellules parentales (D). L'hybridome *produit* des Ac monoclonaux, il n'est pas appelé ainsi (E faux).",
      },
      {
        questionText: "Les Immunoglobulines:",
        options: [
          "se fixent sur les cellules par le fragment Fab.",
          "se fixent sur les cellules par le fragment Fc.",
          "sont formés par 2 fragments Fab et un fragment Fc.",
          "sont formés par 2 fragments Fc et un fragment Fab.",
          "sont formés par 4 chaînes identiques.",
        ],
        correctOptionIndexes: [1, 2],
        explanation:
          "Une immunoglobuline monomère (type IgG) est formée de 4 chaînes (2 lourdes, 2 légères) (E faux). Sa digestion enzymatique donne 2 fragments Fab (liaison Ag) et 1 fragment Fc (liaison aux récepteurs cellulaires, complément) (B, C).",
      },
      {
        questionText: "Dans la cavité buccale:",
        options: [
          "la chaîne jointive J des IgA sécrétoires est synthétisée dans les cellules épithéliales acineuses et canalaires des glandes salivaires.",
          "la pièce sécrétoire est synthétisée dans le tissus conjonctif périglandulaire.",
          "la transferrine inhibe la croissance des bactéries par privation nutritionnelle.",
          "les IgA sécrétoires sont sous forme de pintamères.",
          "les IgA sécrétoires sont sous forme de dimères.",
        ],
        correctOptionIndexes: [4],
        explanation:
          "E: Les IgA sécrétoires (IgAs) sont des dimères (D faux). A, B: C'est l'inverse : la chaîne J est faite par le plasmocyte (tissu conjonctif), la pièce sécrétoire est faite par la cellule épithéliale. C: Faux, c'est la Lactoferrine qui a ce rôle dans la salive (privation de fer).",
      },
    ],
  },
];
module.exports = immunologieQuizzesY2;