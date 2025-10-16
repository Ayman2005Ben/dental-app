// quizzes/year-1/embryology.js

const embryologyQuizzes = [
  {
    title: "Introduction à l'embryologie / Les divisions cellulaires",
    subject: "embryology",
    questions: [
      {
        questionText: "L'embryologie descriptive est définie comme suit : cocher la réponse juste",
        options: [
          "Etudie le développement d'un point de vue physiologique",
          "Etudie le développement des étapes qui se succèdent selon une chronologie rigoureuse",
          "Etudie les mécanismes du développement ultra-structural cellulaire",
          "Etudie les perturbations du développement normal",
          "Etudie l'expression des gènes en relation avec le développement"
        ],
        correctOptionIndexes: [1],
        explanation: "L'embryologie descriptive (ou morphologique) se contente de décrire la séquence chronologique des événements du développement. L'embryologie causale étudie les mécanismes (A, C), la tératologie étudie les perturbations (D), et l'embryologie moléculaire étudie l'expression des gènes (E)."
      },
      {
        questionText: "A propos des cellules de la lignée germinale: cocher la réponse juste",
        options: [
          "C'est un type cellulaire diploïde qui donne naissance aux gamètes",
          "C'est un type cellulaire haploïde qui aboutit à la naissance des gamètes",
          "Ces cellules sont retrouvées au niveau de la plupart des organes",
          "Ces cellules entreprennent la méiose au tout début de leur formation",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "Les cellules de la lignée germinale primordiale sont diploïdes (2n chromosomes) et donneront naissance aux gamètes par méiose. Elles ne sont pas haploïdes, se trouvent spécifiquement dans les gonades après migration, et se multiplient d'abord par mitose avant d'entamer la méiose plus tard."
      },
      {
        questionText: "La période embryonnaire au cours du développement s'étend du: cocher la réponse juste",
        options: [
          "1er jour au 30ème jour",
          "Du 60ème jour à la naissance",
          "1er au 60ème jour",
          "Du 30ème jour à la naissance",
          "30ème au 60ème jour"
        ],
        correctOptionIndexes: [2],
        explanation: "La période embryonnaire (ou embryogenèse) est la phase de formation de tous les organes (organogenèse). Elle débute à la fécondation (jour 1) et s'achève à la fin de la 8ème semaine de développement (soit environ le 60ème jour). La période suivante est la période fœtale."
      },
      {
        questionText: "La mitose se caractérise par les événements suivants, indiquez la réponse juste ?\n1- Est une division qui concerne surtout les cellules somatiques.\n2- Se déroule durant toute la vie de l’individu.\n3- Aboutit à la formation de deux cellules filles diploïdes différentes génétiquement.\n4- Permet la séparation des chromatides sœurs lors de l’anaphase.\n5- Elle n’est jamais précédée par la réplication de l’ADN.",
        options: [
          "1-2-3",
          "1-2-4",
          "1-2-5",
          "2-3-4",
          "2-3-5"
        ],
        correctOptionIndexes: [1],
        explanation: "Les points 1, 2 et 4 sont vrais. La mitose concerne les cellules somatiques, se déroule toute la vie, et sépare les chromatides sœurs. Le point 3 est faux car les cellules filles sont identiques. Le point 5 est faux car la mitose est toujours précédée par la réplication de l'ADN (phase S)."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la mélose, indiquez celle qui est juste ?\n1-Aboutit à la formation de deux cellules filles haploïdes à n chromosomes doubles lors de la téléphase II.\n2-Permet la séparation des chromosomes homologues lors de l’anaphase I.\n3-Formation des bivalents qui sont des complexes à 2 chromatides au stade pachytene.\n4-Le brassage intra chromosomique s’observe lors de la prophase I.\n5-Les chromosomes apparaissent plus courts et plus épais au stade pachytene.",
        options: [
          "1-2-3",
          "1-2-4",
          "1-2-5",
          "2-3-4",
          "2-4-5"
        ],
        correctOptionIndexes: [4],
        explanation: "Les points 2, 4 et 5 sont vrais. Le point 1 est faux car la méiose II aboutit à quatre cellules à n chromosomes simples. Le point 3 est faux car un bivalent est formé de quatre chromatides."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la méiose II, laquelle est juste ?\n1-Aboutit à la formation de 4 cellules filles à n chromosomes simples.\n2-Est dite division équationnelle.\n3-Permet la séparation des chromatides sœurs de chaque chromosome au niveau du centromère lors de l’anaphase II.\n4-Elle est précédée par la réplication de l’ADN.\n5-Période durant laquelle s’observe le phénomène de crossing over.",
        options: [
          "1-2-3",
          "1-2-4",
          "1-2-5",
          "2-3-4",
          "2-3-5"
        ],
        correctOptionIndexes: [0],
        explanation: "Les points 1, 2 et 3 sont vrais. La méiose II est une division équationnelle produisant 4 cellules haploïdes simples. Le point 4 est faux car il n'y a pas de réplication d'ADN avant la méiose II. Le point 5 est faux car le crossing-over a lieu en prophase I."
      },
      {
        questionText: "Laquelle parmi ces propositions concernant la mitose est juste?",
        options: [
          "Elle concerne uniquement les cellules somatiques",
          "Permet la séparation des chromosomes homologues lors de l’anaphase",
          "Permet l’échange de segments chromosomiques entre les génomes paternel et maternel",
          "Permet la formation de 2 cellules filles diploïdes",
          "Les cellules filles sont différentes génétiquement"
        ],
        correctOptionIndexes: [3],
        explanation: "La mitose produit deux cellules filles diploïdes et génétiquement identiques. Elle ne concerne pas que les cellules somatiques (les cellules germinales se divisent aussi par mitose). La séparation des homologues et le crossing-over sont des caractéristiques de la méiose."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la méiose, laquelle est juste ?\n1. Comprend deux divisions nucléaires précédée par une réplication de l’ADN\n2. Comprend une division réductionnelle suivie d’une division équationnelle\n3. Permet la séparation des chromatides sœurs lors de l’anaphase II\n4. Se déroule durant toute la vie de l’individu\n5. Assure la formation de deux cellules filles à 2 n chromosomes doubles lors de l’anaphase",
        options: [
          "1,2,3",
          "1,2,5",
          "1,3,5",
          "2,3,4",
          "2,3,5"
        ],
        correctOptionIndexes: [0],
        explanation: "Les points 1, 2 et 3 sont corrects. Le point 4 est faux car la méiose est spécifique à la gamétogenèse et n'est pas continue toute la vie. Le point 5 est faux, la méiose I donne deux cellules à n chromosomes doubles."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la méiose, laquelle est juste ?",
        options: [
          "C’est une division cellulaire spécifique des cellules somatiques.",
          "Elle se déroule durant toute la vie de l’individu.",
          "Le brassage inter chromosomique s’observe lors de la métaphase I.",
          "Elle aboutit à la formation de 4 cellules filles haploïdes à n chromosomes doubles.",
          "Elle permet la séparation des chromosomes homologues lors de l’anaphase II."
        ],
        correctOptionIndexes: [2],
        explanation: "Le brassage interchromosomique est dû à l'alignement aléatoire des paires de chromosomes homologues à la métaphase I. Les autres options sont fausses : la méiose est pour les cellules germinales, n'est pas continue, produit des cellules à n chromosomes simples, et la séparation des homologues a lieu en anaphase I."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la mitose, laquelle est fausse ?",
        options: [
          "Elle se déroule durant toute la vie.",
          "Elle concerne uniquement les cellules somatiques",
          "Permet la séparation des chromatides sœurs lors de l’anaphase.",
          "Correspond à 1 division nucléaire après une phase G2",
          "Permet la cicatrisation et la réparation des tissus."
        ],
        correctOptionIndexes: [1],
        explanation: "La proposition B est fausse car les cellules germinales immatures (spermatogonies, ovogonies) se multiplient également par mitose avant de commencer la méiose."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la 1ère division méiotique: Cochez la réponse fausse.",
        options: [
          "Elle est précédée par la duplication de l’ADN.",
          "Sa prophase est la plus longue et la plus complexe de la méiose.",
          "Aboutit à la formation de 2 cellules filles haploïdes à n chromosomes doubles.",
          "Permet la séparation des chromatides sœurs lors de l’anaphase.",
          "Il y a formation des bivalents au stade pachytene de la prophase."
        ],
        correctOptionIndexes: [3],
        explanation: "La proposition D est fausse. Lors de l'anaphase I, ce sont les chromosomes homologues qui se séparent. La séparation des chromatides sœurs a lieu lors de l'anaphase II."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la 2ème division méiotique, indiquez celle qui est fausse :",
        options: [
          "Permet la séparation des chromatides sœurs lors de l’anaphase.",
          "Sa prophase est plus courte et plus simple que celle de la méiose I.",
          "Aboutit à la formation de 4 cellules filles à n chromosomes simples.",
          "Elle est précédée par la duplication de l’ADN.",
          "Elle est dite équationnelle."
        ],
        correctOptionIndexes: [3],
        explanation: "La proposition D est fausse. La méiose II n'est pas précédée d'une duplication de l'ADN. La réplication a lieu une seule fois, avant le début de la méiose I."
      },
      {
        questionText: "Lors de la prophase de la 1ère division méiotique, le crossing-over est observé : Cochez la réponse juste :",
        options: [
          "Au stade pachytene.",
          "Au stade zygotène.",
          "Au stade leptotène.",
          "Au stade diplotène.",
          "Au stade diacinèse."
        ],
        correctOptionIndexes: [0],
        explanation: "Le crossing-over (échange de matériel génétique) se produit au stade pachytene de la prophase I, lorsque les chromosomes homologues sont parfaitement appariés."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la première division méiotique, indiquez celle qui est fausse :",
        options: [
          "Elle fait suite à une réplication d’ADN",
          "C’est l’étape la plus longue de la méiose",
          "Elle aboutit à la formation de 2 cellules filles haploïdes à N chromosomes doubles",
          "Elle permet la séparation des chromatides sœurs de chaque chromosome",
          "Elle permet le brassage génétique"
        ],
        correctOptionIndexes: [3],
        explanation: "La proposition D est fausse. Lors de la première division méiotique (anaphase I), ce sont les chromosomes homologues qui se séparent. La séparation des chromatides sœurs est l'événement clé de l'anaphase II."
      },
      {
        questionText: "Le brassage intrachromosomique se produit, cochez la réponse juste:",
        options: [
          "Lors de la prophase I",
          "Lors de la métaphase I",
          "Lors de la téléphase I",
          "Lors de la métaphase II",
          "Lors de la prophase II"
        ],
        correctOptionIndexes: [0],
        explanation: "Le brassage intrachromosomique est dû au phénomène de crossing-over. Cet échange de segments entre chromatides homologues a lieu exclusivement pendant la prophase I de la méiose."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la première division méiotique indiquez la réponse fausse:",
        options: [
          "Elle fait suite à une réplication d’ADN.",
          "C’est l’étape la plus longue de la méiose.",
          "Elle est appelée réductionnelle.",
          "Elle aboutit à la formation de 2 cellules filles haploïdes à N chromosomes simples.",
          "Elle permet le brassage génétique."
        ],
        correctOptionIndexes: [3],
        explanation: "La proposition D est fausse. La première division méiotique aboutit à deux cellules filles haploïdes (n) où chaque chromosome est encore constitué de deux chromatides (chromosomes 'doubles')."
      },
      {
        questionText: "Parmi les évènements suivants concernant la méiose: cochez la réponse juste.",
        options: [
          "C’est une division spécifique de la lignée somatique.",
          "Permet la formation des gamètes identiques génétiquement.",
          "Aboutit à la formation de 4 cellules filles haploïdes à N chromosomes simples.",
          "S’observe durant toute la vie de l’individu.",
          "Permet la séparation des chromosomes homologues lors de l’anaphase II."
        ],
        correctOptionIndexes: [2],
        explanation: "La méiose aboutit à la formation de 4 cellules filles haploïdes à n chromosomes simples. Les autres options sont fausses : elle est spécifique aux cellules germinales (A), produit des gamètes différents (B), n'est pas continue (D), et la séparation des homologues a lieu en anaphase I (E)."
      },
      {
        questionText: "Lors de la prophase de la première division méiotique, l’apparition des chiasmas est observée : cochez la réponse juste.",
        options: [
          "Au stade leptotène.",
          "Au stade zygotène.",
          "Au stade pachytene.",
          "Au stade diplotène.",
          "Au stade diacinèse."
        ],
        correctOptionIndexes: [3],
        explanation: "Les chiasmas (points de crossing-over visibles) apparaissent au stade diplotène, lorsque les chromosomes homologues commencent à se séparer mais restent liés par ces points."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la méiose: indiquez celle qui est juste :",
        options: [
          "Aboutit à la formation de 2 cellules filles haploïdes à N chromosomes doubles lors de la téléphase I.",
          "Aboutit à la formation de 4 cellules filles haploïdes à N chromosomes doubles lors de la téléphase I.",
          "Aboutit à la formation de 2 cellules filles haploïdes à N chromosomes simples lors de la téléphase I.",
          "Aboutit à la formation de 4 cellules filles haploïdes à N chromosomes doubles lors de la téléphase II.",
          "Aboutit à la formation de 2 cellules filles haploïdes à N chromosomes simples lors de la téléphase II."
        ],
        correctOptionIndexes: [0],
        explanation: "La téléphase I aboutit à la formation de 2 cellules filles haploïdes à n chromosomes doubles. La téléphase II, quant à elle, aboutit à 4 cellules filles haploïdes à n chromosomes simples."
      },
      {
        questionText: "Le brassage inter-chromosomique se produit: cochez la réponse juste.",
        options: [
          "Lors de la prophase I.",
          "Lors de la métaphase I.",
          "Lors de la téléphase I.",
          "Lors de la métaphase II.",
          "Lors de la prophase II."
        ],
        correctOptionIndexes: [1],
        explanation: "Le brassage interchromosomique est dû à l'alignement aléatoire des paires de chromosomes homologues sur la plaque équatoriale lors de la métaphase I."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la 2ème division méiotique indiquez celle qui est juste?",
        options: [
          "Permet la séparation des chromosomes homologues lors de l’anaphase.",
          "Aboutit à la formation de quatre cellules filles à n chromosomes doubles.",
          "Sa prophase est plus longue et plus complexe que celle de la méiose I.",
          "Est une période durant laquelle s’observe le phénomène de crossing-over.",
          "Elle n’est jamais précédée par la duplication de l’ADN."
        ],
        correctOptionIndexes: [4],
        explanation: "La méiose II n'est jamais précédée par une duplication d'ADN. La réplication a lieu une seule fois, avant le début de la méiose I."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la mitose laquelle est juste:",
        options: [
          "Permet la formation de deux cellules filles diploïdes différentes génétiquement.",
          "Correspond à la totalité du cycle cellulaire.",
          "Permet la séparation des chromatides sœurs par rupture du centromère lors de l’anaphase.",
          "Elle ne concerne pas les cellules somatiques.",
          "Se déroule durant la gamétogenèse."
        ],
        correctOptionIndexes: [2],
        explanation: "La mitose permet la séparation des chromatides sœurs lors de l’anaphase. Les autres options sont fausses : les cellules filles sont identiques (A), le cycle inclut aussi l'interphase (B), elle concerne principalement les cellules somatiques (D), et c'est la méiose qui intervient dans la gamétogenèse (E)."
      },
      {
        questionText: "L’interphase est formée d’une ou des phase(s) suivante(s). Cochez la réponse juste:",
        options: [
          "De la phase S seulement.",
          "M et S seulement.",
          "G1 et M seulement.",
          "G1, G2 et S.",
          "G1, G2, S et M."
        ],
        correctOptionIndexes: [3],
        explanation: "L'interphase est la période du cycle cellulaire qui précède la mitose (phase M). Elle est constituée des phases G1, S (synthèse/réplication de l'ADN) et G2."
      },
      {
        questionText: "Laquelle des affirmations suivantes est juste (cochez la réponse juste):",
        options: [
          "L’ADN est répliqué durant la phase G2 du cycle cellulaire.",
          "La phase S peut être raccourcie ou annulée.",
          "L’interphase est une période de repos cellulaire.",
          "Le cycle cellulaire est d’une durée constante entre les différentes cellules.",
          "Les chromosomes sont davantage condensés en phase M qu’en interphase."
        ],
        correctOptionIndexes: [4],
        explanation: "La condensation des chromosomes atteint son maximum pendant la phase M (mitose/méiose) pour permettre leur ségrégation correcte. Ils sont sous forme de chromatine décondensée pendant l'interphase."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la deuxième division méiotique, indiquez celle qui est juste :",
        options: [
          "Elle est précédée par la duplication de l’ADN.",
          "Elle aboutit à la formation de quatre cellules à n chromosomes simples.",
          "Sa prophase est la plus longue de la méiose.",
          "Elle aboutit à la formation de deux cellules filles à n chromosomes doubles.",
          "C’est une période durant laquelle s’observe le phénomène de crossing-over."
        ],
        correctOptionIndexes: [1],
        explanation: "La deuxième division méiotique (équationnelle) part des deux cellules à n chromosomes doubles issues de la méiose I et aboutit à la formation de quatre cellules à n chromosomes simples. Les autres options sont fausses."
      },
      {
        questionText: "Dans le cycle cellulaire la phase S est (cocher la réponse juste)",
        options: [
          "La phase dite de pré-synthèse ou de préduplication.",
          "La phase de repos post synthétique.",
          "Une phase de division cellulaire.",
          "La phase de duplication de l'ADN.",
          "Aucune de ces réponses n'est juste."
        ],
        correctOptionIndexes: [3],
        explanation: "La phase S (S pour Synthèse) est la phase du cycle cellulaire durant laquelle l'ADN de la cellule est répliqué (dupliqué)."
      },
      {
        questionText: "Cocher la bonne réponse correspondant au bon ordre des étapes de la mitose",
        options: [
          "Prophase, Anaphase, Métaphase, Télophase",
          "Prophase, Métaphase, Télophase, Anaphase",
          "Métaphase, Prophase, Anaphase, Télophase",
          "Métaphase, Anaphase, Prophase, Télophase"
        ],
        correctOptionIndexes: [4],
        explanation: "Aucune des options n'est correcte. L'ordre correct des phases de la mitose est : Prophase, Métaphase, Anaphase, Télophase. Aucun des choix ne présente cette séquence exacte."
      },
      {
        questionText: "La première division méiotique est caractérisée par sa prophase cette 1ere division aura pour conséquences essentielles (cochez la réponse juste) :",
        options: [
          "L’échange de matériel héréditaire sans réduction de nombre de chromosomes",
          "La réduction de moitié du nombre de chromosomes, la disjonction des chromosomes X et Y sans échange de matériel héréditaire",
          "La conservation du nombre de chromosomes, la disjonction de X et Y et l’échange de matériel héréditaire paternel et maternel",
          "La réduction de moitié du nombre de chromosomes, la disjonction des chromosomes X et Y, et échange de matériel héréditaire paternel et maternel",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "La méiose I a trois conséquences majeures : 1) Réduction du nombre de chromosomes (diploïde → haploïde). 2) Séparation (disjonction) des chromosomes homologues, y compris les chromosomes sexuels. 3) Échange de matériel génétique (crossing-over), ce qui correspond à la proposition D."
      },
      {
        questionText: "Parmi les propositions suivantes laquelle correspond à la mitose:",
        options: [
          "Permet la séparation des chromosomes homologues lors de l’anaphase.",
          "Permet l’échange de segments chromosomiques entre les génomes paternel et maternel.",
          "Permet la formation de deux cellules filles haploïdes identiques génétiquement.",
          "Elle se déroule durant la gamétogenèse.",
          "Elle concerne surtout les cellules somatiques."
        ],
        correctOptionIndexes: [4],
        explanation: "La mitose est le mode de division principal des cellules non reproductrices (somatiques). Les autres options décrivent des caractéristiques de la méiose (A, B, D) ou sont incorrectes (C, car la mitose produit des cellules diploïdes)."
      },
      {
        questionText: "Laquelle parmi les propositions suivantes correspond à la méiose:",
        options: [
          "Permet la formation de gamètes identiques génétiquement.",
          "Permet la séparation des chromatides sœurs lors de l’anaphase 1.",
          "La première division mélotique aboutit à la formation de 2 cellules filles à 2n chromosomes.",
          "La deuxième division mélotique aboutit à la formation de 4 cellules filles à n chromosomes simple.",
          "Est un phénomène de division cellulaire propre aux cellules somatiques."
        ],
        correctOptionIndexes: [3],
        explanation: "La deuxième division méiotique (équationnelle) aboutit à 4 cellules filles haploïdes à n chromosomes simples. Les autres options sont fausses : les gamètes sont uniques (A), l'anaphase I sépare les homologues (B), la méiose I aboutit à des cellules n (C), et elle est propre aux cellules germinales (E)."
      },
      {
        questionText: "L’observation au M.O d’images de mitoses permet de voir: Une fragmentation de l’enveloppe nucléaire. Une apparition de Kinetochores. Une amorce d’organisation de fuseau mitotique. Un rassemblement des chromosomes a l’équateur. S’agit-il ?",
        options: [
          "De la prophase.",
          "De la métaphase.",
          "De la prophase et de la prométaphase.",
          "De la prométaphase.",
          "De la fin de la métaphase"
        ],
        correctOptionIndexes: [2],
        explanation: "Les événements décrits (fragmentation de l'enveloppe, apparition des kinétochores, formation du fuseau) sont caractéristiques de la prophase et de la prométaphase. Le rassemblement à l'équateur est la métaphase."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la méiose, cocher la ou les réponses juste(s) :",
        options: [
          "Elle concerne les ovocytes 1 et les auxocytes.",
          "Elle a lieu au cours de la phase de maturation de la gamétogenèse.",
          "Elle aboutit à la formation de cellules filles identiques à la cellule mère.",
          "Elle réduit la charge d’ADN et conserve le nombre de chromosomes.",
          "Elle se déroule uniquement au niveau des gonades"
        ],
        correctOptionIndexes: [1],
        explanation: "La méiose se déroule bien au cours de la phase de maturation de la gamétogenèse. Les autres options sont fausses : les cellules filles sont différentes et haploïdes (C), elle réduit le nombre de chromosomes (D), et elle peut se poursuivre en dehors des gonades (ex: ovulation) (E)."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la gamétogenèse: (Cocher la réponse juste)",
        options: [
          "La gonade pour seule fonction la production de gamètes",
          "La mélose permet d'obtenir des cellules haploïdes à partir de cellules diploïdes",
          "Les gamètes sont des cellules diploïdes (2n chromosomes)",
          "Chez la femme, le stade de la différenciation est absent de la gamétogénèse",
          "Les réponses B et C sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "La méiose est le processus de division qui réduit le nombre de chromosomes de diploïde (2n) à haploïde (n). Les autres options sont fausses : les gonades ont aussi une fonction endocrine (A), les gamètes sont haploïdes (C), et la différenciation existe chez la femme (D)."
      },
      {
        questionText: "Au cours de la spermatogenèse, la première division de la méiose : cocher la ou les réponses juste(s) :",
        options: [
          "Fait suite à une réplication d’ADN.",
          "Est appelée “réductionnelle”.",
          "Donne 2 cellules filles haploïdes.",
          "Permet le brassage inter-chromosomique.",
          "C’est l’étape la plus courte de la méiose"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La méiose I est précédée d'une réplication d'ADN, est réductionnelle, produit 2 cellules haploïdes (à chromosomes doubles) et permet le brassage. Seule l'option E est fausse, car c'est l'étape la plus longue et la plus complexe."
      },
      {
        questionText: "La différentiation des Kinetochores lors de la mitose est observée?",
        options: [
          "Durant la prophase.",
          "Durant le début de la métaphase.",
          "Pendant l’anaphase.",
          "En fin de téléphase.",
          "Les réponses B et D sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "Les kinétochores se différencient et commencent à capter les microtubules du fuseau durant la prométaphase, qui est la transition entre la prophase et la métaphase. 'Début de la métaphase' est l'option la plus proche."
      },
      {
        questionText: "Lors de la division réductionnelle l’apparition des chiasma chromosomiques est observée:",
        options: [
          "Au stade leptotène de la prophase.",
          "Au stade zygotène de la prophase.",
          "Au stade pachytene de la prophase.",
          "Au stade diplotène de la prophase.",
          "Au stade Diacinèse de la prophase."
        ],
        correctOptionIndexes: [3],
        explanation: "Les chiasmas, qui sont la manifestation visible des crossing-over, deviennent apparents au stade diplotène de la prophase I, lorsque les chromosomes homologues commencent à se séparer."
      },
      {
        questionText: "Parmi ces propositions concernant la mélose, laquelle est juste?",
        options: [
          "Mode de division concernant principalement les cellules somatiques.",
          "Deux divisions successives avec deux réplications d’ADN.",
          "A partir d’une cellule mère diploïde, on obtient 4 cellules filles haploïdes.",
          "Le crossing-over se déroule pendant la 2ème division méiotique.",
          "La séparation des chromosomes homologues se fait lors la prophase de la première division méiotique."
        ],
        correctOptionIndexes: [2],
        explanation: "Le résultat final de la méiose est la production de 4 cellules filles haploïdes à partir d'une cellule mère diploïde. Les autres options sont fausses : elle concerne les cellules germinales (A), il n'y a qu'une seule réplication d'ADN (B), le crossing-over a lieu en prophase I (D), et la séparation des homologues en anaphase I (E)."
      },
      {
        questionText: "Concernant le déroulement de la méiose, laquelle des propositions suivantes est juste?",
        options: [
          "Les cellules qui commencent la méiose sont à n chromosomes.",
          "La première division est équationnelle.",
          "La deuxième division est réductionnelle.",
          "La prophase I est plus longue que la prophase II.",
          "La prophase II est précédée d’une réplication d’ADN"
        ],
        correctOptionIndexes: [3],
        explanation: "La prophase I est significativement plus longue et plus complexe que la prophase II en raison des événements d'appariement des chromosomes homologues et du crossing-over. Les autres options sont fausses."
      },
      {
        questionText: "Laquelle parmi les propositions suivantes définit le mieux la méiose?",
        options: [
          "C’est un mode de division spécifique des cellules germinales avec conservation du nombre de chromosomes.",
          "C’est un mode de division intéressant aussi bien les cellules somatiques et les cellules germinales avec réduction du nombre de chromosomes.",
          "C’est un mode de division spécifique des cellules somatiques avec deux divisions successive, une hiétérophique et une homotypique.",
          "C’est un mode de division spécifique des cellules germinales avec 02 divisions successives aboutissant à une réduction du nombre de chromosomes.",
          "C’est une division spécifique des cellules germinales comportant une seule division avec réduction du nombre de chromosomes."
        ],
        correctOptionIndexes: [3],
        explanation: "Cette proposition résume parfaitement la méiose : elle est spécifique aux cellules germinales, comprend deux divisions successives (I et II), et son résultat principal est la réduction du nombre de chromosomes de diploïde à haploïde."
      },
      {
        questionText: "Concernant la phase G2 du cycle cellulaire, toutes ces réponses sont justes sauf une, laquelle ?",
        options: [
          "Précède immédiatement la mitose",
          "Est une phase pendant laquelle la cellule synthétise des protéines",
          "Concerne toutes les cellules d’un organisme",
          "Son déroulement peut être stoppé et conduite à une phase GO",
          "Est de durée très variable selon les types cellulaires"
        ],
        correctOptionIndexes: [2],
        explanation: "La proposition C est fausse. De nombreuses cellules hautement différenciées, comme les neurones, sortent du cycle cellulaire (phase G0) et ne passent donc pas par la phase G2 car elles ne se divisent plus."
      }
    ]
  },
  {
    title: "La gamétogenèse : Spermatogenèse",
    subject: "embryology",
    questions: [
      {
        questionText: "À propos des spermatozoïdes, donnez la réponse fausse :",
        options: [
          "Les spermatozoïdes baignent dans le liquide séminal.",
          "Les spermatozoïdes acquièrent leur capacitation dans les voies génitales femelles.",
          "Les spermatozoïdes deviennent mobiles dans les tubes droits.",
          "La prostate sécrète des nutriments nécessaires à la survie des spermatozoïdes.",
          "Les spermatozoïdes sont sensibles à la chaleur."
        ],
        correctOptionIndexes: [2],
        explanation: "Les spermatozoïdes acquièrent leur mobilité dans l'épididyme, et non dans les tubes droits. Les autres affirmations sont correctes."
      },
      {
        questionText: "Donnez la réponse juste concernant la structure du spermatozoïde :",
        options: [
          "La chromatine nucléaire est inhomogène.",
          "La hyaluronidase se trouve dans le noyau.",
          "Le cytoplasme au niveau de la tête du spermatozoïde est très abondant.",
          "Le col est une portion élargie située entre la tête et la pièce intermédiaire.",
          "La pièce intermédiaire est riche en mitochondries."
        ],
        correctOptionIndexes: [4],
        explanation: "La pièce intermédiaire contient de nombreuses mitochondries disposées en spirale qui fournissent l'énergie (ATP) nécessaire à la mobilité du flagelle. Les autres affirmations sont fausses."
      },
      {
        questionText: "Concernant le spermogramme, donnez la réponse fausse :",
        options: [
          "Dans l’azoospermie, il y a absence de spermatozoïdes dans l’éjaculat.",
          "L’hyperspermie désigne un volume de l’éjaculat supérieur à 6 ml.",
          "L’asthénospermie est une anomalie du sperme affectant la mobilité.",
          "Un sperme normal contient au maximum 10% de spermatozoïdes de forme anormale.",
          "50% ou plus des spermatozoïdes doivent avoir une mobilité normale 1 heure après l’éjaculation."
        ],
        correctOptionIndexes: [3],
        explanation: "Selon les critères de l'OMS, un sperme est considéré normal si au moins 4% des spermatozoïdes ont une morphologie normale. Un taux de formes anormales peut donc atteindre 96%. La proposition D est donc fausse."
      },
      {
        questionText: "À propos des spermatozoïdes, donnez la réponse juste :",
        options: [
          "L’annulus ou anneau de Jansen est un épaississement de la membrane du flagelle.",
          "La pièce principale est la portion la plus longue.",
          "Le flagelle est entouré par une membrane plasmique.",
          "Le rôle de l’acrosome est important au moment de la fécondation.",
          "Toutes ces réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les affirmations sont correctes : l’annulus est un épaississement, la pièce principale est la plus longue, le flagelle a une membrane plasmique, et l’acrosome est essentiel pour la fécondation."
      },
      {
        questionText: "Dans la paroi des tubes séminifères, on retrouve tous ces éléments, sauf :",
        options: [
          "Les cellules de Leydig.",
          "Les spermatocytes I.",
          "Les spermatides.",
          "Les spermatogonies.",
          "Les cellules de Sertoli."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cellules de Leydig se trouvent dans le tissu interstitiel, c'est-à-dire entre les tubes séminifères, et non dans leur paroi. Elles sont responsables de la production de testostérone."
      },
      {
        questionText: "Le noyau du spermatozoïde mature comporte : Donnez la réponse juste.",
        options: [
          "23 chromosomes, n ADN.",
          "23 chromosomes, 2n ADN.",
          "46 chromosomes, 2n ADN.",
          "46 chromosomes, 4n ADN.",
          "23 chromosomes, 4n ADN."
        ],
        correctOptionIndexes: [0],
        explanation: "Le spermatozoïde mature est une cellule haploïde issue de la méiose. Il contient 23 chromosomes (22 autosomes + 1 gonosome) et chaque chromosome est simple (une seule chromatide), donc la quantité d'ADN est n."
      },
      {
        questionText: "Concernant l’interprétation du spermogramme : Cochez la réponse juste.\n1. Dans l’oligospermie le nombre de spermatozoïdes est inférieur à 20 millions par ml.\n2. L’hypospermie désigne un volume de l’éjaculat inférieur à 02 ml.\n3. L’asthénospermie désigne les spermatozoïdes trop rapides.\n4. Un sperme normal contient au maximum 50% de spermatozoïdes de formes anormales.\n5. 1 heure après l’éjaculation 50% des spermatozoïdes doivent avoir une mobilité normale.",
        options: [
          "1,2,4",
          "1,2,5",
          "2,3,5",
          "1,3,4",
          "2,3,4"
        ],
        correctOptionIndexes: [1],
        explanation: "Les affirmations 1, 2 et 5 sont correctes. L'asthénospermie (3) désigne une faible mobilité, pas trop rapide. Un sperme normal peut contenir jusqu'à 96% de formes anormales (4)."
      },
      {
        questionText: "Concernant la structure du spermatozoïde : Cochez la réponse juste.\n1. Les mitochondries de la pièce intermédiaire sont disposées en spirale.\n2. C’est une cellule très différenciée de 60 µ de long.\n3. La chromatine nucléaire est homogène.\n4. Le cytoplasme de la tête du spermatozoïde est abondant.\n5. La tête du spermatozoïde est arrondie.",
        options: [
          "1,4,5",
          "1,2,5",
          "2,3,4",
          "1,2,3",
          "2,3,5"
        ],
        correctOptionIndexes: [3],
        explanation: "Les affirmations 1, 2 et 3 sont correctes. Le cytoplasme (4) est très réduit et la tête (5) est piriforme (en forme de poire), pas arrondie."
      },
      {
        questionText: "Dans un spermogramme normal : Cochez la réponse fausse.",
        options: [
          "Le volume de l'éjaculat varie entre 02 et 06 ml.",
          "Le nombre de spermatozoïdes est entre 20 et 250 millions par ml.",
          "30% ou plus de spermatozoïdes doivent avoir une mobilité normale 03 heures après l'éjaculation.",
          "L'azoospermie désigne l'absence de spermatozoïdes à l'éjaculation.",
          "Un sperme normal contient au maximum 50 % de spermatozoïdes de morphologie atypique."
        ],
        correctOptionIndexes: [4],
        explanation: "Un sperme normal peut contenir un très grand nombre de formes atypiques (jusqu'à 96%). La limite de 50% est incorrecte."
      },
      {
        questionText: "Parmi ces propositions concernant le spermatozoïde : Laquelle est juste ?",
        options: [
          "C’est une cellule reproductrice mobile, indifférenciée qui mesure 60 µ de longueur.",
          "Le noyau du spermatozoïde n’a pas encore complété sa maturation.",
          "La spirale mitochondriale se trouve au niveau de la pièce intermédiaire.",
          "Le centriole proximal donne naissance aux microtubules du flagelle.",
          "L’acrosome riche en enzymes recouvre les 2/3 postérieurs du noyau."
        ],
        correctOptionIndexes: [2],
        explanation: "La spirale mitochondriale est bien située dans la pièce intermédiaire. Le spermatozoïde est une cellule très différenciée (A faux), son noyau est mature (B faux), le centriole distal forme le flagelle (D faux), et l'acrosome recouvre les 2/3 antérieurs du noyau (E faux)."
      },
      {
        questionText: "Concernant la structure du spermatozoïde : Cochez la Réponse fausse.",
        options: [
          "La chromatine nucléaire est hétérogène.",
          "Le flagelle est entouré par une membrane plasmique.",
          "La hyaluronidase se trouve dans l’acrosome.",
          "L’annulus ou anneau de Jensen est un épaississement de la membrane du flagelle.",
          "La pièce intermédiaire est riche en mitochondries."
        ],
        correctOptionIndexes: [0],
        explanation: "La chromatine du noyau du spermatozoïde est extrêmement condensée et homogène pour protéger l'ADN et réduire le volume de la tête."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la structure du spermatozoïde, laquelle est fausse ?",
        options: [
          "L’acrosome est situé sur le pôle antérieur du noyau.",
          "Le centriole distal forme les filaments du flagelle.",
          "La pièce intermédiaire comporte des mitochondries.",
          "C’est une cellule différenciée comportant un cytoplasme réduit.",
          "En ME, le flagelle présente une structure identique sur toute la longueur."
        ],
        correctOptionIndexes: [4],
        explanation: "La structure du flagelle n'est pas identique sur toute sa longueur. La pièce intermédiaire contient des mitochondries et des fibres denses, la pièce principale est plus simple, et la pièce terminale ne contient que l'axonème."
      },
      {
        questionText: "L’analyse du sperme d’un patient retrouve : un nombre de spermatozoïdes <20 millions/ml, un taux de spermatozoïdes mobiles après 1h <50%. Il s’agit : Cochez la réponse juste.",
        options: [
          "D’une azoospermie.",
          "D’une oligospermie.",
          "D’une oligo-asthénospermie.",
          "D’une asthénospermie.",
          "D’une tératospermie."
        ],
        correctOptionIndexes: [2],
        explanation: "Le patient présente à la fois une faible concentration de spermatozoïdes (oligospermie) et une faible mobilité (asthénospermie). Le terme combiné est oligo-asthénospermie."
      },
      {
        questionText: "Parmi les propositions suivantes concernant les spermatozoïdes, cochez la réponse juste :",
        options: [
          "Les spermatozoïdes acquièrent leur capacitation dans les voies génitales femelles.",
          "Les spermatozoïdes peuvent persister 15 jours dans l’épididyme.",
          "La survie des spermatozoïdes se fait grâce à des éléments nutritifs sécrétés par les glandes annexes.",
          "La durée de vie des spermatozoïdes est de 05 jours.",
          "Toutes ces réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes ces affirmations sont correctes concernant la biologie du spermatozoïde."
      },
      {
        questionText: "Concernant la structure du spermatozoïde : donnez la réponse fausse.",
        options: [
          "La tête du spermatozoïde est allongée et aplatie.",
          "L’acrosome est une sac membraneux riche en enzymes.",
          "Le cytoplasme de la tête du spermatozoïde est très abondant.",
          "La pièce intermédiaire comporte de nombreuses mitochondries.",
          "La chromatine du noyau de la tête du spermatozoïde est très condensée et homogène."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cytoplasme de la tête du spermatozoïde est en réalité très réduit pour minimiser la taille et le poids. La tête est principalement constituée du noyau et de l'acrosome."
      },
      {
        questionText: "À propos des spermatozoïdes : donnez la réponse fausse.",
        options: [
          "Les mitochondries de la pièce intermédiaire sont disposées en spirale.",
          "L’annulus est un épaississement membranaire au niveau de la pièce intermédiaire du flagelle.",
          "Le col est la zone de jonction entre la tête et le flagelle.",
          "L’acrosome n’est pas important lors de la fécondation.",
          "La pièce principale est entourée par une membrane plasmique."
        ],
        correctOptionIndexes: [3],
        explanation: "L'acrosome est absolument crucial pour la fécondation, car il contient les enzymes (comme l'acrosine et la hyaluronidase) nécessaires pour pénétrer les enveloppes de l'ovocyte."
      },
      {
        questionText: "Dans un spermogramme normal : donnez la réponse juste.",
        options: [
          "Le volume de l’éjaculat varie entre 2 à 6 ml.",
          "L’azoospermie désigne l’absence de spermatozoïdes.",
          "Le nombre de spermatozoïdes varie entre 20 et 250 millions par ml.",
          "50 % ou plus des spermatozoïdes doivent avoir une mobilité normale après une heure après l’éjaculation.",
          "Toutes ces réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes ces affirmations sont correctes et correspondent aux critères standards de l'OMS pour un spermogramme normal."
      },
      {
        questionText: "Concernant le spermogramme : donnez la réponse juste.",
        options: [
          "Dans l’oligospermie le nombre de spermatozoïdes est inférieur à 20 millions par ml.",
          "L’hypospermie désigne un volume de l’éjaculat inférieur à 02 ml.",
          "L’asthénospermie est une anomalie du sperme affectant la mobilité.",
          "Un sperme normal contient au maximum 30% de spermatozoïdes de forme anormale.",
          "Toutes ces réponses sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes ces définitions sont correctes selon les standards de l'OMS pour l'analyse du sperme. Note: Le critère pour les formes anormales est en réalité que 4% ou plus doivent être normales, donc jusqu'à 96% peuvent être anormales."
      },
      {
        questionText: "À propos des spermatozoïdes : donnez la réponse fausse.",
        options: [
          "Le sperme est composé de spermatozoïdes et de liquide séminal.",
          "Les spermatozoïdes résident 15 jours dans l’épididyme.",
          "Les spermatozoïdes acquièrent leur capacitation dans les voies génitales mâles.",
          "Des facteurs extérieurs agissent sur le sperme.",
          "Les spermatozoïdes sont produits au niveau des tubes séminifères."
        ],
        correctOptionIndexes: [2],
        explanation: "La capacitation, qui est une étape finale de maturation rendant le spermatozoïde apte à féconder, a lieu dans les voies génitales féminines, et non masculines."
      },
      {
        questionText: "Dans un spermogramme normal : cochez la réponse fausse.",
        options: [
          "Le volume de l’éjaculat varie de 2 à 6 ml.",
          "Le volume de l’éjaculat n’est pas important pour l’interprétation des résultats.",
          "Option corrompue",
          "Option corrompue",
          "Le nombre des spermatozoïdes varie entre 20 et 250 millions."
        ],
        correctOptionIndexes: [1],
        explanation: "Le volume de l'éjaculat est un paramètre très important. Un volume trop faible (hypospermie) ou trop élevé (hyperspermie) peut indiquer des problèmes."
      },
      {
        questionText: "À propos de la structure du spermatozoïde, donnez la réponse fausse :",
        options: [
          "La pièce intermédiaire est riche en mitochondries.",
          "L’annulus ou noyau dépensen est un épaississement de la membrane du flagelle.",
          "La hyaluronidase se trouve dans l’acrosome.",
          "Les spermatozoïdes acquièrent leur capacitation dans l’épididyme.",
          "La chromatine nucléaire est homogène."
        ],
        correctOptionIndexes: [3],
        explanation: "La capacitation se produit dans les voies génitales féminines, pas dans l'épididyme. Dans l'épididyme, les spermatozoïdes acquièrent leur mobilité."
      },
      {
        questionText: "Parmi les propositions suivantes sur le spermogramme, cochez la réponse juste :",
        options: [
          "Le volume de l'éjaculat n'est pas important pour l'interprétation des résultats.",
          "L'azoospermie désigne l'absence de spermatozoïdes.",
          "70% des spermatozoïdes doivent être mobiles 03 heures après l'éjaculation.",
          "Le nombre des spermatozoïdes est supérieur à 250 millions par ml dans l'oligospermie.",
          "Un sperme normal contient au maximum 10% de spermatozoïdes de morphologie atypique."
        ],
        correctOptionIndexes: [1],
        explanation: "L'azoospermie est la définition correcte de l'absence de spermatozoïdes. Les autres options sont fausses : le volume est important (A), la mobilité requise est >50% après 1h (C), l'oligospermie est <20 millions/ml (D), et les formes atypiques peuvent être majoritaires (E)."
      },
      {
        questionText: "Dans un spermogramme normal (cochez la réponse fausse) :",
        options: [
          "Le nombre de spermatozoïdes varie entre 20 et 250 millions par ml.",
          "50% des spermatozoïdes doivent avoir une mobilité normale 02 heures après l'éjaculation.",
          "L'azoospermie désigne l'absence de spermatozoïdes.",
          "Le volume de l'éjaculat varie de 2 à 6 ml.",
          "L'aspermie est l'absence d'éjaculation."
        ],
        correctOptionIndexes: [1],
        explanation: "L'évaluation standard de la mobilité des spermatozoïdes se fait 1 heure après l'éjaculation, et non 2 heures."
      },
      {
        questionText: "À propos du spermatozoïde (cochez la réponse juste) :",
        options: [
          "L’acrosome possède 03 membranes.",
          "La chromatine nucléaire est inhomogène.",
          "La hyaluronidase se trouve dans l’acrosome.",
          "Le cytoplasme au niveau de la tête du spermatozoïde est très abondant.",
          "Le centriole proximal fait partie de la pièce intermédiaire."
        ],
        correctOptionIndexes: [2],
        explanation: "La hyaluronidase est l'une des enzymes clés contenues dans l'acrosome, essentielle pour traverser les cellules de la corona radiata. Les autres options sont fausses."
      },
      {
        questionText: "Concernant la structure du spermatozoïde (cochez la réponse juste) :",
        options: [
          "La pièce intermédiaire est pauvre en mitochondries.",
          "Le col est une portion élargie située entre la tête et la pièce intermédiaire.",
          "L’annulus ou anneau de Jensen est un épaississement de la membrane du flagelle.",
          "La cape post-acrosomique appartient au col du spermatozoïde.",
          "Le flagelle n’est pas entouré par une membrane plasmique."
        ],
        correctOptionIndexes: [2],
        explanation: "L'annulus est bien un épaississement membranaire qui sépare la pièce intermédiaire de la pièce principale du flagelle. Les autres options sont incorrectes."
      },
      {
        questionText: "La structure du spermatozoïde (cocher la réponse fausse) :",
        options: [
          "En microscope électronique, le flagelle est composé de 3 parties : pièce intermédiaire, pièce principale, pièce terminale.",
          "La pièce principale est plus longue que la pièce intermédiaire.",
          "Le col est une portion rétrécie comprise entre la pièce intermédiaire et le flagelle.",
          "En microscopie électronique, la tête en forme de poire aplatie possède un noyau à chromatine dense.",
          "L’acrosome possède une membrane externe et une membrane interne."
        ],
        correctOptionIndexes: [2],
        explanation: "Le col est la portion rétrécie qui se trouve entre la tête et la pièce intermédiaire, et non entre la pièce intermédiaire et le reste du flagelle."
      },
      {
        questionText: "L’acrosome du spermatozoïde est (cochez les réponses justes) :",
        options: [
          "Assure sa mobilité.",
          "Fait partie de son noyau.",
          "Est issu de l’appareil de Golgi.",
          "Est situé à la face antérieure de la tête du spermatozoïde.",
          "Assure l’énergie du spermatozoïde."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "L'acrosome est une vésicule spécialisée qui se forme à partir de l'appareil de Golgi pendant la spermiogenèse et est positionné à l'avant de la tête. La mobilité et l'énergie sont assurées par le flagelle et les mitochondries."
      },
      {
        questionText: "Parmi les propositions suivantes concernant l'interprétation d’un spermogramme laquelle est fausse ?",
        options: [
          "50% des spermatozoïdes doivent être mobiles une heure après l’éjaculation.",
          "Une oligospermie signifie une numération des spermatozoïdes inférieurs à la normale.",
          "Le pH du sperme est acide.",
          "La présence de formes anormales de spermatozoïdes peut atteindre 30%.",
          "Le volume d’un éjaculat est de 2 à 6 ml."
        ],
        correctOptionIndexes: [2],
        explanation: "Le pH normal du sperme est légèrement alcalin (basique), généralement entre 7,2 et 8,0, pour neutraliser l'acidité du vagin."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la structure du spermatozoïde laquelle est juste ?",
        options: [
          "Le centriole proximal donne naissance au flagelle.",
          "L’acrosome est moulé sur le pôle postérieur du noyau.",
          "En microscopie électronique, le flagelle présente la même structure sur toute sa longueur.",
          "C’est une cellule différenciée comportant un cytoplasme abondant.",
          "La pièce intermédiaire du flagelle comporte des mitochondries disposées en hélice."
        ],
        correctOptionIndexes: [4],
        explanation: "La pièce intermédiaire est caractérisée par un manchon de mitochondries disposées en spirale (hélice) autour de l'axonème, fournissant l'énergie pour le mouvement."
      },
      {
        questionText: "La structure du spermatozoïde (cocher la réponse fausse) :",
        options: [
          "En microscope électronique, le flagelle est composé de 3 parties : pièce intermédiaire, pièce principale, pièce terminale.",
          "La pièce principale est plus longue que la pièce intermédiaire.",
          "En microscopie électronique, la tête en forme de poire aplatie possède un noyau à chromatine dense.",
          "Le col est une portion rétrécie comprise entre la pièce intermédiaire et le flagelle.",
          "L’acrosome possède une membrane externe et une membrane interne."
        ],
        correctOptionIndexes: [3],
        explanation: "Le col est la jonction rétrécie entre la tête et la pièce intermédiaire, pas entre la pièce intermédiaire et le reste du flagelle."
      },
      {
        questionText: "À propos du spermatozoïde (cochez la réponse juste) :",
        options: [
          "L’annulus se trouve juste en arrière de l’acrosome.",
          "Le centriole proximal donne l’axonème du flagelle.",
          "L’acrosome se situe au niveau du col du spermatozoïde.",
          "La pièce intermédiaire est composée d’un complexe filamentieux axial entouré de fibres et de mitochondries.",
          "La pièce terminale ne comporte pas de membrane plasmique."
        ],
        correctOptionIndexes: [3],
        explanation: "La pièce intermédiaire est correctement décrite comme ayant un complexe filamentieux axial (axonème), des fibres denses externes, et le manchon mitochondrial. Toutes les autres propositions sont incorrectes."
      },
      {
        questionText: "Concernant les spermatozoïdes : cocher la ou les réponses fausse(s) :",
        options: [
          "L’acrosome est moulé sur le pôle postérieur du noyau.",
          "Le centriole distal donne naissance au flagelle.",
          "Ils acquièrent leur mobilité propre lors de l’éjaculation.",
          "Les sécrétions épididymaires répriment leur pouvoir fécondant.",
          "En M.E, le flagelle présente la même structure de la pièce intermédiaire jusqu’à la pièce terminale."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Sont fausses : L'acrosome est antérieur (A). La mobilité est acquise dans l'épididyme, avant l'éjaculation (C). La structure du flagelle varie le long de ses différentes pièces (E)."
      },
      {
        questionText: "Laquelle (lesquelles) parmi ces propositions concernant le spermogramme est (sont) juste(s) ?",
        options: [
          "Il doit se faire après minimum 4 jours d’abstinence.",
          "Le pH du sperme est acide.",
          "Un pourcentage de 60% de spermatozoïdes immobiles 1h après le prélèvement désigne une oligospermie.",
          "Un volume de sperme < 2 ml par éjaculat témoigne d’une hypospermie.",
          "Le spermiocytogramme étudie la morphologie des spermatozoïdes."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "L'hypospermie est un volume < 2 ml (D vrai). Le spermiocytogramme est l'étude de la morphologie (E vrai). L'abstinence recommandée est de 2-4 jours (A est à la limite). Le pH est alcalin (B faux). Le manque de mobilité est l'asthénospermie, pas l'oligospermie (C faux)."
      },
      {
        questionText: "Parmi les propositions suivantes laquelle représente une caractéristique du spermatozoïde :",
        options: [
          "Ils sont issus des spermatides par réduction chromosomique.",
          "Ils sont tous identiques.",
          "Ils sont issus des spermatides après une différenciation qui dure environ 03 semaines.",
          "Ils sont mobiles dès leur arrivée dans les tubes séminifères.",
          "La pièce principale des spermatozoïdes est remplie de mitochondries."
        ],
        correctOptionIndexes: [2],
        explanation: "La spermiogenèse, la différenciation d'une spermatide en spermatozoïde, dure environ 21-23 jours (environ 3 semaines). Les autres options sont fausses : la réduction chromosomique a lieu avant, ils sont génétiquement uniques, la mobilité s'acquiert dans l'épididyme, et les mitochondries sont dans la pièce intermédiaire."
      },
      {
        questionText: "Parmi les résultats suivants concernant le spermogramme d’un adulte jeune lequel est perturbé ?",
        options: [
          "Le volume du sperme éjaculé = 4 ml.",
          "Le pH du sperme = 7,5.",
          "La concentration du sperme en spermatozoïdes = 60 m/ml de sperme.",
          "30% des spermatozoïdes sont mobiles 1 heure après l’éjaculation.",
          "20% des spermatozoïdes émis présentent des malformations."
        ],
        correctOptionIndexes: [3],
        explanation: "Un taux de mobilité de 30% une heure après l'éjaculation est anormalement bas (asthénospermie). La norme est de 50% ou plus."
      },
      {
        questionText: "Parmi ces propositions concernant la structure de spermatozoïde, laquelle est juste?",
        options: [
          "C’est une cellule pauvre en cytoplasme.",
          "Le flagelle dérive du centriole proximal.",
          "L’acrosome dérive du réticulum endoplasmique.",
          "Les mitochondries se disposent le long de la pièce principale.",
          "Le noyau est en mitose."
        ],
        correctOptionIndexes: [0],
        explanation: "Le spermatozoïde est une cellule hautement spécialisée avec un cytoplasme très réduit. Le flagelle dérive du centriole distal (B faux), l'acrosome de l'appareil de Golgi (C faux), les mitochondries sont dans la pièce intermédiaire (D faux), et le noyau est haploïde et quiescent (E faux)."
      },
      {
        questionText: "Laquelle parmi ces propositions concernant les spermatozoïdes est juste?",
        options: [
          "Ils sont mobiles dans les tubes séminifères.",
          "Ils sont tous identiques.",
          "Ils sont capacités lors du passage dans l'épididyme.",
          "Acquièrent leur mobilité propre lors du passage dans l'épididyme.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [3],
        explanation: "L'acquisition de la mobilité progressive est l'une des étapes clés de la maturation qui a lieu dans l'épididyme. La capacitation a lieu dans les voies femelles, et ils ne sont ni mobiles dans les tubes séminifères ni identiques."
      },
      {
        questionText: "Le spermatozoïde :",
        options: [
          "Ne possède pas de mobilité propre.",
          "Est issu d’une spermatide lors de la spermiation.",
          "Voit son flagelle apparaitre lors de spermiogenèse.",
          "Peut féconder le gamète femelle après décapacitation.",
          "Pacitation."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le spermatozoïde est le résultat de la différenciation (spermiogenèse) d'une spermatide, processus durant lequel le flagelle se forme. Il a une mobilité propre, et a besoin de la capacitation (pas décapacitation) pour féconder."
      },
      {
        questionText: "Parmi ces propositions laquelle n'appartiennent pas à la lignée germinale de la spermatogenèse :",
        options: [
          "La spermatogonie.",
          "La cellule de Sertoli",
          "La spermatide.",
          "Le spermatocyte primaire",
          "Le spermatocyte secondaire."
        ],
        correctOptionIndexes: [1],
        explanation: "La cellule de Sertoli est une cellule somatique de soutien, indispensable à la spermatogenèse mais ne faisant pas partie de la lignée germinale elle-même (qui évolue de spermatogonie à spermatozoïde)."
      },
      {
        questionText: "Toutes ces étapes appartiennent à la spermatocytogénèse sauf une laquelle :",
        options: [
          "La Multiplication.",
          "L’Accroissement.",
          "La Différenciation",
          "La Maturation.",
          "La Phase de division méiotique."
        ],
        correctOptionIndexes: [2],
        explanation: "La différenciation (ou spermiogenèse) est la dernière grande étape de la spermatogenèse, mais elle est distincte de la spermatocytogenèse, qui comprend la multiplication (mitoses) et la maturation (méiose)."
      },
      {
        questionText: "Concernant le déroulement de la spermatogenèse: Cochez la réponse fausse.",
        options: [
          "La phase de multiplication correspond à la division des spermatogonies par mitoses.",
          "Elle est stimulée par la testostérone sécrétée par les cellules de Sertoli.",
          "Elle a lieu dans la paroi des tubes séminifères.",
          "La phase de maturation correspond à la méiose.",
          "La spermiogénèse correspond à la transformation des spermatides en spermatozoïdes."
        ],
        correctOptionIndexes: [1],
        explanation: "La proposition B est fausse car la testostérone est sécrétée par les cellules de Leydig (cellules interstitielles), et non par les cellules de Sertoli."
      },
      {
        questionText: "La spermiogénèse assure : Cochez la réponse fausse.",
        options: [
          "La formation du flagelle.",
          "La formation de l’acrosome.",
          "Le dédoublement de la quantité de l’ADN.",
          "La condensation de la chromatine",
          "Une réorganisation du cytoplasme."
        ],
        correctOptionIndexes: [2],
        explanation: "La spermiogenèse est un processus de différenciation morphologique, elle ne comporte aucune division ni réplication d'ADN. Le dédoublement de l'ADN a lieu avant la méiose I."
      },
      {
        questionText: "Concernant l'étude du sperme: indiquez la proposition fausse",
        options: [
          "Une azoospermie correspond à l'absence de spermatozoïdes dans le sperme.",
          "Le volume de l'éjaculation est compris entre 2 et 6 ml.",
          "Un sperme normal peut contenir au maximum 30% de spermatozoïdes anormaux.",
          "Une asthenospermie désigne des spermatozoïdes trop peu mobiles.",
          "Une heure après l'éjaculation 30% des spermatozoïdes sont mobiles."
        ],
        correctOptionIndexes: [4],
        explanation: "La norme de mobilité pour un sperme normal est de 50% ou plus de spermatozoïdes mobiles une heure après l'éjaculation. Une valeur de 30% est donc anormale."
      },
      {
        questionText: "Concernant la formation des spermatozoïdes: Cochez la réponse fausse.",
        options: [
          "Les gamètes mâles sont des cellules haploïdes.",
          "Le spermatocyte I est une cellule diploïde.",
          "La méiose produit 02 populations de spermatozoïdes à X ou Y.",
          "La 2ème division de méiose réduit de moitié la garniture chromosomique.",
          "La spermatide est une cellule à n chromosomes."
        ],
        correctOptionIndexes: [3],
        explanation: "C'est la première division de méiose (réductionnelle) qui réduit de moitié la garniture chromosomique (de 2n à n). La deuxième division (équationnelle) sépare les chromatides sœurs sans changer le nombre de chromosomes."
      },
      {
        questionText: "Quel facteur peut perturber la spermatogenèse ?",
        options: [
          "Une cryptorchidie bilatérale.",
          "Certaines infections virales.",
          "Les troubles endocriniens.",
          "Un manque de vitamine A.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Tous les facteurs mentionnés peuvent effectivement perturber la spermatogenèse : la température élevée due à la cryptorchidie, des infections comme les oreillons, des déséquilibres hormonaux, et des carences vitaminiques."
      },
      {
        questionText: "Lors de la spermatogenèse, les spermatozoïdes traversent toutes ces voies sauf une:",
        options: [
          "Les canaux efférents.",
          "Les tubes droits.",
          "Le canal épididymaire.",
          "La vésicule séminale.",
          "Le Rete testis."
        ],
        correctOptionIndexes: [3],
        explanation: "Les spermatozoïdes sont produits dans les tubes séminifères, puis passent par les tubes droits, le rete testis, les canaux efférents et le canal épididymaire. Ils ne traversent pas la vésicule séminale, qui est une glande annexe sécrétant une partie du liquide séminal."
      },
      {
        questionText: "La spermatogenèse nécessite la présence de la testostérone produite par: Donnez la réponse juste.",
        options: [
          "Les cellules germinales des tubes séminifères.",
          "Les vésicules séminales.",
          "Les cellules de Leydig situées entre les tubes séminifères.",
          "Les cellules de Sertoli.",
          "Les cellules de Leydig situées dans les tubes séminifères."
        ],
        correctOptionIndexes: [2],
        explanation: "La testostérone, essentielle à la spermatogenèse, est produite par les cellules de Leydig, qui sont localisées dans le tissu interstitiel, entre les tubes séminifères."
      },
      {
        questionText: "Donnez la réponse juste concernant les modifications cytoplasmiques de la spermiogénèse:\n1. Dédoublement de la membrane plasmique.\n2. Formation d'une vacuole acrosomiale.\n3. Alignement des deux centrioles.\n4. Les mitochondries s'orientent parallèlement aux filaments du flagelle.\n5. Le cytoplasme est pauvre en réticulum endoplasmique lisse.",
        options: [
          "1+2+3",
          "1+2+4",
          "1+2+5",
          "2+3+4",
          "1+3+4"
        ],
        correctOptionIndexes: [3],
        explanation: "Durant la spermiogenèse, il y a formation de l'acrosome (2), alignement des centrioles (3), et formation du manchon mitochondrial (4). Il n'y a pas de dédoublement de la membrane (1) et le cytoplasme est riche en REL (5)."
      },
      {
        questionText: "Concernant les modifications cytoplasmiques de la spermiogénèse : précisez la réponse fausse.",
        options: [
          "Formation d'une vacuole acrosomiale.",
          "Alignement des deux centrioles.",
          "Dédoublement de la membrane plasmique.",
          "Formation des filaments du futur flagelle.",
          "Formation du manchon mitochondrial."
        ],
        correctOptionIndexes: [2],
        explanation: "Il n'y a pas de dédoublement de la membrane plasmique. La membrane est remodelée et une partie du cytoplasme est éliminée, mais il n'y a pas de dédoublement."
      },
      {
        questionText: "Tous ces éléments sont retrouvés dans un lobule testiculaire sauf:",
        options: [
          "Les cellules de Leydig.",
          "Les cellules de Sertoli.",
          "Un canal déférent.",
          "Des cellules germinales.",
          "Des vaisseaux sanguins."
        ],
        correctOptionIndexes: [2],
        explanation: "Le canal déférent est une voie excrétrice extra-testiculaire qui transporte le sperme de l'épididyme. Il ne se trouve pas à l'intérieur d'un lobule testiculaire."
      },
      {
        questionText: "La phase de spermatocytogenèse comporte toutes ces cellules sauf:",
        options: [
          "Des spermatozoïdes.",
          "Des spermatogonies.",
          "Des spermatocytes primaires.",
          "Des spermatocytes secondaires.",
          "Des spermatides."
        ],
        correctOptionIndexes: [0],
        explanation: "Les spermatozoïdes sont le produit final de la spermiogenèse (différenciation), qui suit la spermatocytogenèse. La spermatocytogenèse s'arrête au stade de la spermatide."
      },
      {
        questionText: "La spermiogenèse se définit par : donnez la réponse juste.",
        options: [
          "La réorganisation du cytoplasme.",
          "La migration des mitochondries.",
          "Formation du flagelle.",
          "Réorganisation et maturation nucléaire.",
          "Toutes ces propositions sont correctes."
        ],
        correctOptionIndexes: [4],
        explanation: "La spermiogenèse est un processus complexe de transformation qui inclut toutes ces modifications : réorganisation du cytoplasme (élimination d'une partie), formation de l'acrosome, condensation du noyau, et formation du flagelle avec son manchon mitochondrial."
      },
      {
        questionText: "Concernant la spermatogenèse : cochez la réponse fausse (RF)",
        options: [
          "La phase de multiplication commence pendant la vie foetale.",
          "Les spermatogonies sont situées à la périphérie des tubes séminifères.",
          "Les spermatogonies peuvent se renouveler en spermatogonies.",
          "Les spermatozoïdes sont à n chromosomes.",
          "Les spermatides comportent 46 chromosomes."
        ],
        correctOptionIndexes: [4],
        explanation: "Les spermatides sont des cellules haploïdes (n), elles comportent donc 23 chromosomes et non 46. Elles sont le résultat de la méiose II."
      },
      {
        questionText: "Concernant la structure du spermatozoïde : cochez la réponse fausse (RF)",
        options: [
          "La chromatine nucléaire est homogène.",
          "Le flagelle est entouré par une membrane plasmique.",
          "La pièce intermédiaire est pauvre en mitochondries.",
          "De l'hyaluronidase se trouve dans l'acrosome.",
          "L'annulus ou anneau de Jensen est un épaississement de la membrane du flagelle."
        ],
        correctOptionIndexes: [2],
        explanation: "La pièce intermédiaire est au contraire très riche en mitochondries, qui sont organisées en manchon spiralé pour fournir l'énergie nécessaire à la motilité du flagelle."
      },
      {
        questionText: "La spermatogenèse : (cocher la réponse juste)",
        options: [
          "Débute à la naissance et se déroule dans les tubes séminifères.",
          "Débute à la puberté et se déroule dans l'épididyme.",
          "Débute à la puberté et se déroule dans les tubes séminifères.",
          "Débute à la naissance et se déroule dans l'épididyme.",
          "Débute à la puberté et se déroule dans la rete testis."
        ],
        correctOptionIndexes: [2],
        explanation: "La spermatogenèse est le processus de production de spermatozoïdes qui commence à la puberté et a lieu dans les tubes séminifères des testicules."
      },
      {
        questionText: "Concernant la spermatogenèse: donnez la réponse juste.",
        options: [
          "C'est la gamétogenèse masculine.",
          "Elle a lieu au niveau des tubes séminifères.",
          "C'est un processus limité dans le temps.",
          "Elle produit des gamètes diploïdes.",
          "A et B sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Les propositions A et B sont toutes deux correctes. C'est la gamétogenèse masculine (A) et elle se déroule dans les tubes séminifères (B). Elle est continue (C faux) et produit des gamètes haploïdes (D faux)."
      },
      {
        questionText: "La spermiogenèse: donnez la réponse juste.",
        options: [
          "C'est la phase de différenciation de la spermatogenèse.",
          "Elle permet la transformation d'une cellule arrondie en une cellule effilée.",
          "Elle entraîne des transformations nucléaires et cytoplasmiques.",
          "Elle dure à peu près 23 jours.",
          "Toutes ces propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les affirmations décrivent correctement la spermiogenèse, qui est la dernière phase de la spermatogenèse où les spermatides se transforment en spermatozoïdes."
      },
      {
        questionText: "Sur une coupe transversale d'un testicule observée en microscopie optique on peut observer tous ces éléments sauf :",
        options: [
          "Des sections de tubes séminifères.",
          "Des voies excrétrices.",
          "Des capillaires.",
          "Des cellules de Leydig.",
          "Des spermatozoïdes."
        ],
        correctOptionIndexes: [1],
        explanation: "Les voies excrétrices principales (comme l'épididyme ou le canal déférent) sont situées à l'extérieur du testicule et ne sont donc pas visibles sur une coupe transversale du testicule lui-même."
      },
      {
        questionText: "À propos de la régulation de la spermatogenèse : cocher la réponse fausse",
        options: [
          "La FSH stimule les cellules de Sertoli.",
          "La LH stimule les cellules de Leydig.",
          "La cellule de Sertoli sécrète l'activine qui stimule la production de FSH.",
          "La cellule de Sertoli sécrète la testostérone.",
          "La testostérone est indispensable à l'initiation et au maintien de la spermatogenèse."
        ],
        correctOptionIndexes: [3],
        explanation: "La testostérone est sécrétée par les cellules de Leydig, qui sont stimulées par la LH. Les cellules de Sertoli ont besoin de la testostérone pour fonctionner mais ne la produisent pas."
      },
      {
        questionText: "Les cellules de Leydig : cocher la réponse juste",
        options: [
          "Sont des cellules en contact étroit avec les cellules de la lignée germinales.",
          "Sont des cellules interstitielles des tubes séminifères et ont une fonction endocrine.",
          "Sont des cellules interstitielles des tubes séminifères et ont une fonction de soutien.",
          "Sont des cellules des tubes séminifères et ont une fonction de soutien.",
          "Sont des cellules des tubes séminifères et ont une fonction endocrine."
        ],
        correctOptionIndexes: [1],
        explanation: "Les cellules de Leydig sont localisées dans le tissu interstitiel (entre les tubes) et leur fonction principale est endocrine : la production de testostérone."
      },
      {
        questionText: "Les spermatogonies souches (cocher la réponse juste) :",
        options: [
          "Sont les spermatogonies Ad et vont se diviser en donnant 02 spermatogonies B.",
          "Sont les spermatogonies Ad qui entrent en mitose et se transforment en spermatogonies Ad et spermatogonies Ap.",
          "Sont les spermatogonies Ad qui entrent en mitose et se transforment en spermatogonies B.",
          "Sont les spermatogonies Ap qui entrent en mitose et se transforment en spermatogonies Ad et spermatogonies Ap.",
          "Sont les spermatogonies B qui entrent en mitoses en donnant les spermatogonies Ap et les spermatogonies Ad."
        ],
        correctOptionIndexes: [1],
        explanation: "Les spermatogonies Ad (dark) sont les cellules souches de réserve. Par mitose, elles s'auto-renouvellent (donnant une autre Ad) et donnent une spermatogonie Ap (pale) qui s'engagera dans le processus de spermatogenèse."
      },
      {
        questionText: "Les différentes phases de la spermatogenèse se déroulent comme suit (cocher la réponse juste)",
        options: [
          "Phase de maturation, phase de croissance, phase de multiplication, phase de différenciation",
          "Phase de multiplication, phase de croissance, phase de différenciation, phase de maturation",
          "Phase de croissance, phase de multiplication, phase de maturation, phase de différenciation",
          "Phase de multiplication, phase de croissance, phase de maturation, phase de différenciation",
          "Phase de croissance, Phase de multiplication, phase de, phase de différenciation, maturation"
        ],
        correctOptionIndexes: [3],
        explanation: "L'ordre chronologique correct est : 1. Multiplication (mitoses des spermatogonies), 2. Croissance (spermatocytes I), 3. Maturation (méiose), 4. Différenciation (spermiogenèse)."
      },
      {
        questionText: "Le testicule endocrine (cocher la réponse juste):",
        options: [
          "Est représenté par les cellules de Sertoli.",
          "Est représenté par les cellules de Leydig.",
          "Est représenté par les cellules de Sertoli et les cellules de Leydig.",
          "Est représenté par les cellules souches.",
          "Est représenté par les cellules de Leydig et les cellules souches."
        ],
        correctOptionIndexes: [1],
        explanation: "La fonction endocrine du testicule (production d'hormones, principalement la testostérone) est assurée par les cellules de Leydig."
      },
      {
        questionText: "Les cellules de Sertoli sont (cochez la réponse juste) :",
        options: [
          "De grandes cellules somatiques de soutien.",
          "Est un constituant de la barrière hémato-séminale.",
          "Contrôle l'évolution de la spermatogenèse.",
          "Les réponses A B C sont justes.",
          "Aucune des réponses n'est juste."
        ],
        correctOptionIndexes: [3],
        explanation: "Les cellules de Sertoli sont de grandes cellules de soutien (A), elles forment la barrière hémato-testiculaire (B) et jouent un rôle crucial dans le contrôle de la spermatogenèse (C). Donc A, B et C sont justes."
      },
      {
        questionText: "Concernant la spermatogenèse : cochez la réponse fausse :",
        options: [
          "Dans les testicules, les tubes séminifères assurent la maturation des spermatozoïdes et les cellules de Leydig sécrètent de la testostérone.",
          "Est un processus continu qui dure 74 jours chez l'Homme.",
          "Est contrôlée par des hormones hypophysaires FSH, LH et la testostérone.",
          "La phase de maturation permet la réduction de moitié de la garniture chromosomique.",
          "Elle démarre à la puberté et se poursuit sans interruption."
        ],
        correctOptionIndexes: [0],
        explanation: "La maturation des spermatozoïdes (acquisition de la mobilité) a lieu dans l'épididyme, pas dans les tubes séminifères où ils sont produits."
      },
      {
        questionText: "Parmi les voies excrétrices suivantes, lesquelles sont de situation intra testiculaire : cochez la réponse juste :",
        options: [
          "Tube droit et canal déférent.",
          "Tube séminifère, tubes droits et rete testis.",
          "Tube séminifère, canaux efférents et canal épididymaire.",
          "Canal déférent et canal éjaculateur.",
          "Rete testis et canal épididymaire."
        ],
        correctOptionIndexes: [1],
        explanation: "Les voies spermatiques situées à l'intérieur du testicule sont les tubes séminifères, les tubes droits et le rete testis. Les canaux efférents et l'épididyme sont extra-testiculaires."
      },
      {
        questionText: "Parmi les propositions suivantes relatives à la spermiogenèse, laquelle est juste?",
        options: [
          "Elle a une durée de 24 jours.",
          "Au cours de la spermiogenèse une partie du noyau se transforme en acrosome.",
          "La spermiogenèse aboutit à la formation de spermatozoïdes immédiatement fécondants.",
          "Il y a transformation des 4 spermatides issues d'un spermatocyte II en 4 spermatozoïdes.",
          "Les mitochondries et les centrioles entrent dans la formation du flagelle."
        ],
        correctOptionIndexes: [4],
        explanation: "Les mitochondries forment le manchon de la pièce intermédiaire du flagelle, et le centriole distal est à l'origine de l'axonème du flagelle. L'acrosome dérive du Golgi (B faux). Les spermatozoïdes doivent subir la maturation épididymaire et la capacitation pour être fécondants (C faux). Les 4 spermatides viennent d'un spermatocyte I (via deux spermatocytes II) (D faux)."
      },
      {
        questionText: "Un spermatocyte I est (cochez la réponse juste) :",
        options: [
          "Haploïde et chaque chromosome comporte deux chromatides.",
          "Diploïde et chaque chromosome comporte une chromatide.",
          "Haploïde et chaque chromosome comporte une chromatide.",
          "Diploïde et chaque chromosome comporte deux chromatides.",
          "Aucune des réponses n'est juste."
        ],
        correctOptionIndexes: [3],
        explanation: "Le spermatocyte I est une cellule diploïde (2n) qui entre en méiose I. Comme la réplication de l'ADN a déjà eu lieu (phase S), chaque chromosome est constitué de deux chromatides sœurs."
      },
      {
        questionText: "La testostérone est sécrétée par (cochez la réponse juste) :",
        options: [
          "Les cellules de Leydig.",
          "Les cellules de Sertoli.",
          "Les cellules germinales.",
          "Les cellules conjonctives des tubes séminifères.",
          "Les spermatides."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cellules de Leydig, situées dans le tissu interstitiel des testicules, sont les principales cellules productrices de testostérone."
      },
      {
        questionText: "À la fin de la spermatogenèse les spermatozoïdes dérivent des (cochez la réponse juste) :",
        options: [
          "spermatogonies.",
          "spermatides.",
          "spermatocytes I.",
          "spermatocytes II.",
          "spermatocytes III."
        ],
        correctOptionIndexes: [1],
        explanation: "Les spermatozoïdes sont le résultat de la dernière phase de la spermatogenèse, la spermiogenèse, qui est la différenciation morphologique des spermatides."
      }
    ]
  },
  {
    title: "Ovogenèse, folliculogenèse et ovulation",
    subject: "embryology",
    questions: [
      {
        questionText: "Le follicule secondaire est constitué par tous ces éléments sauf un, lequel ?",
        options: [
          "Ovocyte | augmenté de volume.",
          "Granulosa formée de 2 à 4 couches de cellules folliculaires cubiques.",
          "La membrane de Slavjanskí sépare la granulosa de la thèque interne.",
          "Apparition de la zone pellucide.",
          "Le tissu conjonctif de l’ovaire entoure le follicule secondaire."
        ],
        correctOptionIndexes: [2],
        explanation: "La membrane de Slavjanskí n'apparaît qu'au stade du follicule tertiaire (antral), et non au stade secondaire. Les autres propositions décrivent correctement le follicule secondaire."
      },
      {
        questionText: "Concernant l’hormone FSH : Donnez la réponse fausse",
        options: [
          "Induit la maturation des follicules.",
          "Stimule les cellules de la thèque interne.",
          "Entraine la reprise de la 1ère division méiotique de l’ovocyte.",
          "Secrétée par la glande hypophysaire.",
          "Assure la régulation de la sécrétion des estrogènes."
        ],
        correctOptionIndexes: [2],
        explanation: "C'est le pic de LH, et non la FSH, qui déclenche la reprise de la première division méiotique de l'ovocyte I. La FSH est principalement responsable de la croissance folliculaire."
      },
      {
        questionText: "Au cours de l'ovulation\n1. L'ovocyte I se divise en 2 cellules haploïdes.\n2. L'ovocyte I se transforme en ovocyte II avec émission du 1er globule polaire.\n3. L'ovocyte II émis hors de l'ovaire est récupéré par le pavillon de la trompe utérine.\n4. L'ovocyte II subit une maturation cytoplasmique et nucléaire.\n5. Le pic de LH induit la reprise de la 1ere division méiotique de l'ovocyte I.",
        options: [
          "1-2-3",
          "1-2-4",
          "1-2-5",
          "1-4-5",
          "2-3-5"
        ],
        correctOptionIndexes: [4],
        explanation: "Les affirmations 2, 3 et 5 sont correctes. L'affirmation 1 est vague, la division donne des cellules de tailles inégales. L'affirmation 4 (maturation) a lieu avant, sous l'effet du pic de LH."
      },
      {
        questionText: "Un des événements suivants fait partie de l’ovulation, lequel ?",
        options: [
          "Formation de la fente péri vitelline entre la zone pellucide et les cellules de la corona radiata.",
          "Migration des granules corticaux vers le centre de l’ovocyte.",
          "Expulsion du deuxième globule polaire.",
          "Reprise de la Méiose I, 26 h après le pic de LH.",
          "Rétraction des prolongements cellulaires des cellules de la corona radiata de la surface de l’ovule."
        ],
        correctOptionIndexes: [4],
        explanation: "La rétraction des prolongements des cellules de la corona radiata est une modification cellulaire qui facilite la libération de l'ovocyte pendant l'ovulation. Les autres événements se produisent soit bien avant (D), soit après la fécondation (C)."
      },
      {
        questionText: "Parmi ces propositions relatives aux ovocytes I, laquelle est fausse ?",
        options: [
          "Les ovocytes I restent bloqués au stade pachytène de la prophase I.",
          "Le stock d’ovocyte I n’est pas renouvelable.",
          "L’ovocyte I s’entoure d’une couche de cellules folliculaires aplaties devenant un follicule primordial.",
          "A la naissance les ovaires ne contiennent que des ovocytes I.",
          "Un stock de 400.000 ovocytes I est retrouvé à la puberté."
        ],
        correctOptionIndexes: [0],
        explanation: "Les ovocytes I sont bloqués au stade diplotène (dictyotène) de la prophase I, et non au stade pachytène."
      },
      {
        questionText: "Concernant la folliculogenèse : Quelle est la proposition fausse ?",
        options: [
          "La folliculogenèse correspond à l’évolution d’un follicule primordial en follicule mûr.",
          "C’est la transformation d’un follicule mûr en corps jaune.",
          "Le follicule primaire renferme un ovocyte I.",
          "La folliculogenèse a lieu au sein du cortex ovarien.",
          "L’association folliculogenèse et ovogenèse commence à partir de l’ovocyte I."
        ],
        correctOptionIndexes: [1],
        explanation: "La transformation du follicule rompu en corps jaune est appelée lutéinisation et se produit après l'ovulation ; elle ne fait pas partie de la folliculogenèse, qui est le processus de maturation du follicule jusqu'à l'ovulation."
      },
      {
        questionText: "Parmi les propositions suivantes laquelle correspond au follicule de DE GRAAF ?",
        options: [
          "La presque totalité du follicule est occupé par l’ovocyte I.",
          "Il n’y a presque plus de thèques au niveau de ce follicule.",
          "L’ovocyte I se trouve au centre du follicule.",
          "C’est au stade de ce follicule que se forme la membrane pellucide.",
          "C’est un follicule prêt pour l’ovulation."
        ],
        correctOptionIndexes: [4],
        explanation: "Le follicule de De Graaf est le stade final de maturation folliculaire, il est donc prêt pour l'ovulation. Il est majoritairement rempli de liquide folliculaire (A faux), entouré de thèques bien développées (B faux), et l'ovocyte est excentré (C faux)."
      },
      {
        questionText: "Précisez la proposition exacte concernant l’ovulation",
        options: [
          "C’est l’émission hors de l’ovaire du follicule mature.",
          "Elle est provoquée par la rupture de la paroi folliculaire puis ovarienne.",
          "Elle est suivie d’une maturation finale de l’ovocyte ainsi que du follicule.",
          "Elle précède le pic de LH de 36 heures.",
          "Elle survient au niveau du stigma."
        ],
        correctOptionIndexes: [4],
        explanation: "L'ovulation se produit en un point précis de la paroi ovarienne qui s'amincit, appelé le stigma. L'ovulation suit le pic de LH (D faux) et c'est l'ovocyte qui est émis, pas le follicule entier (A faux)."
      },
      {
        questionText: "L'observation d'une préparation histologique d'un ovaire à la naissance retrouve :",
        options: [
          "Des ovocytes de premier ordre et des ovogonies.",
          "Des ovocytes de premier ordre ayant achevé leur division réductionnelle.",
          "Seulement des ovogonies.",
          "A la fois des ovogonies et des gonocytes.",
          "Seulement des ovocytes de premier ordre bloqués en prophase de division réductionnelle."
        ],
        correctOptionIndexes: [4],
        explanation: "À la naissance, toutes les ovogonies se sont déjà transformées en ovocytes de premier ordre (ovocytes I), et ces derniers sont tous bloqués au stade diplotène de la prophase I de la méiose."
      },
      {
        questionText: "L'ovocyte de premier ordre reprend sa première division réductionnelle :",
        options: [
          "Lors de la phase de croissance durant la vie fœtale.",
          "Immédiatement après la naissance.",
          "A la puberté en l’absence de fécondation.",
          "Lors de la phase de multiplication durant la vie fœtale.",
          "A la puberté seulement en cas de fécondation."
        ],
        correctOptionIndexes: [2],
        explanation: "La reprise de la méiose I est déclenchée par le pic de LH qui survient à chaque cycle menstruel à partir de la puberté, indépendamment de la fécondation."
      },
      {
        questionText: "Concernant le pic de LH Cochez la réponse fausse.",
        options: [
          "Il induit la croissance des follicules ovariens.",
          "Il déclenche la 2ème division de méiose.",
          "Il induit la formation du corps jaune.",
          "Il entraîne la reprise de la première division de méiose.",
          "Il déclenche l’ovulation 36 heures plus tard."
        ],
        correctOptionIndexes: [0],
        explanation: "La croissance des follicules ovariens (folliculogenèse) est principalement stimulée par la FSH, pas par la LH. Le pic de LH a pour rôle de déclencher l'ovulation et la reprise de la méiose I."
      },
      {
        questionText: "Cochez la proposition juste concernant l'ovulation :\n1. Se fait grâce à une autodestruction des parois folliculaires et ovariennes par les prostaglandines.\n2. La contraction de l'ovaire participe à son mécanisme.\n3. A pour but l'expulsion du follicule mature hors de l'ovaire.\n4. A lieu au niveau du stigma.\n5. L'acide hyaluronique ne joue aucun rôle dans son déroulement.",
        options: [
          "(1-3)",
          "(2-5)",
          "(4-5)",
          "(2-4)",
          "(3-4)"
        ],
        correctOptionIndexes: [3],
        explanation: "Les propositions 2 et 4 sont justes. La contraction de l'ovaire (stimulée par les prostaglandines) participe au mécanisme, et l'ovulation a lieu au niveau du stigma. La proposition 1 est fausse (ce sont des enzymes protéolytiques), la 3 est fausse (on expulse l'ovocyte), et la 5 est fausse (l'acide hyaluronique est important pour la dispersion du cumulus)."
      },
      {
        questionText: "Concernant les follicules ovariens : Cochez la réponse fausse.",
        options: [
          "La zone pellucide sépare l’ovocyte des cellules folliculeuses.",
          "Les follicules primordiaux renferment un ovocyte de 1er ordre.",
          "La membrane de Slavianski sépare les follicules du stroma ovarien.",
          "À la puberté, l’ovaire contient environ 1 million de follicules primordiaux.",
          "Le follicule mûr est appelé follicule de De Graaf."
        ],
        correctOptionIndexes: [3],
        explanation: "À la puberté, le stock de follicules primordiaux a considérablement diminué par atrésie et il n'en reste qu'environ 300 000 à 400 000, et non 1 million."
      },
      {
        questionText: "Parmi les propositions suivantes concernant le gamète femelle : Cochez la réponse juste.",
        options: [
          "C’est une petite cellule pauvre en ARN.",
          "Achève sa maturation nucléaire suite à une fécondation.",
          "C’est un ovocyte I bloqué en prophase de première division méiotique.",
          "L’espace périvitellin est situé entre l’ovocyte et les cellules folliculeuses.",
          "C’est un ovocyte I bloqué en prophase de deuxième division méiotique."
        ],
        correctOptionIndexes: [1],
        explanation: "L'ovocyte II est bloqué en métaphase II et n'achève sa maturation nucléaire (fin de la méiose II) que si la fécondation par un spermatozoïde a lieu."
      },
      {
        questionText: "Précisez la réponse juste concernant le corps jaune :\n1. Il est constitué de grandes et de petites cellules lutéiniques qui proviennent respectivement des cellules folliculaires et des cellules de la thèque interne.\n2. Il régresse à la fin du cycle en absence de fécondation et se transforme en corps jaune gestatif.\n3. Il est responsable de la sécrétion de la progestérone au cours de la phase folliculaire du cycle.\n4. Il provient du follicule déhiscent.\n5. Il se maintient pendant les trois premiers mois de grossesse et il est appelé corps jaune gestatif.",
        options: [
          "(1-4-5)",
          "(2-3-5)",
          "(4-5)",
          "(3-4)",
          "(1-2-3)"
        ],
        correctOptionIndexes: [0],
        explanation: "Les propositions 1, 4 et 5 sont justes. Le corps jaune se forme à partir du follicule rompu (déhiscent) et est maintenu en cas de grossesse. Il est faux qu'il se transforme en corps gestatif en l'absence de fécondation (il devient corps albicans), et il sécrète la progestérone en phase lutéale, pas folliculaire."
      },
      {
        questionText: "Précisez la réponse juste concernant le corps jaune:",
        options: [
          "(1-4-5)",
          "(2-3-5)",
          "(4-5)",
          "(3-4)",
          "(1-2-3)"
        ],
        correctOptionIndexes: [0],
        explanation: "Les affirmations 1, 4 et 5 sont justes. L'affirmation 2 est fausse car, en l'absence de fécondation, le corps jaune régresse pour former un corps blanc (corpus albicans). L'affirmation 3 est fausse car le corps jaune sécrète de la progestérone pendant la phase lutéale du cycle."
      },
      {
        questionText: "Concernant l’ovogenèse: Cochez la réponse juste.",
        options: [
          "Elle se déroule à l’intérieur des follicules ovariens.",
          "C’est un phénomène discontinu de la vie fœtale à la ménopause.",
          "Le 1er globule polaire est émis juste avant l’ovulation.",
          "Elle produit un gamète femelle n’ayant pas achevé sa maturation nucléaire.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les propositions sont correctes : l'ovogenèse a lieu dans les follicules, elle est discontinue (avec deux blocages méiotiques), le 1er globule polaire est émis juste avant l'ovulation, et l'ovocyte II n'achève sa méiose qu'après fécondation."
      },
      {
        questionText: "Concernant le corps jaune : Cochez la réponse fausse.",
        options: [
          "Une hémorragie intra folliculaire forme le coagulum central.",
          "Les cellules de la thèque interne se transforment en grandes cellules lutéales.",
          "La progestérone est secrétée par le corps jaune après l’ovulation.",
          "Après régression le corps jaune se transforme en corpus albicans.",
          "En cas de fécondation le corps jaune se maintient pendant 3 mois."
        ],
        correctOptionIndexes: [1],
        explanation: "La proposition B est fausse. Ce sont les cellules de la granulosa qui se transforment en grandes cellules lutéales. Les cellules de la thèque interne forment les petites cellules lutéales."
      },
      {
        questionText: "Précisez la réponse juste concernant l'ovulation.",
        options: [
          "Elle permet l'expulsion du follicule mature hors de l'ovaire.",
          "Le follicule mature se transforme en corps jaune puis en follicule déhiscent.",
          "Une autodestruction des parois des follicules et de l'ovaire par des enzymes en est le principal mécanisme.",
          "Elle induit la maturation finale de l'ovocyte.",
          "Elle a lieu 24h après le pic de LH."
        ],
        correctOptionIndexes: [2],
        explanation: "L'ovulation est principalement due à l'action d'enzymes protéolytiques qui dégradent la paroi du follicule et de l'ovaire, permettant la rupture. Les autres propositions sont fausses."
      },
      {
        questionText: "A propos de la phase de maturation de l'ovocyte, cochez la réponse juste :",
        options: [
          "L'ovocyte reprend sa méiose.",
          "La maturation est nucléaire.",
          "L'ovocyte termine sa maturation en 5 jours.",
          "La maturation commence après la décharge de la LH hypophysaire.",
          "Aucune des propositions n'est juste."
        ],
        correctOptionIndexes: [4],
        explanation: "Aucune proposition n'est entièrement juste. La maturation est à la fois nucléaire et cytoplasmique (B incomplet), elle dure environ 14 jours (C faux), et la reprise de la méiose est déclenchée par le pic de LH, mais la maturation folliculaire débute bien avant (D faux)."
      },
      {
        questionText: "Parmi les propositions suivantes concernant l'ovogenèse, indiquez celle qui est juste:",
        options: [
          "L'ovogenèse et la folliculogénèse sont des processus qui se déroulent de manière asynchrone",
          "La maturation terminale de l'ovocyte se fait avant la fécondation",
          "L'ovogenèse a lieu au niveau de la médullaire de l'ovaire",
          "A la naissance les ovocytes sont toutes bloquées au stade diplotène de la première division méiotique",
          "L'ovogenèse est un phénomène continu"
        ],
        correctOptionIndexes: [3],
        explanation: "A la naissance, le stock d'ovocytes est constitué d'ovocytes I bloqués au stade diplotène de la prophase I. Les autres options sont fausses : les processus sont synchrones (A), la maturation finale a lieu après fécondation (B), l'ovogenèse se déroule dans le cortex (C), et elle est discontinue (E)."
      },
      {
        questionText: "Cochez la réponse juste parmi les propositions suivantes concernant la maturation finale ovocytaire et folliculaire:",
        options: [
          "Un couplage métabolique est établi entre les cellules de la corona radiata et l’ovocyte",
          "La fenêtre périvitelline apparait entre la zone pellucide et la corona radiata",
          "Les granules corticaux migrent vers la périphérie de l’ovocyte sous la membrane plasmique",
          "La deuxième division méiotique est achevée",
          "La synthèse des organites cellulaires diminue."
        ],
        correctOptionIndexes: [2],
        explanation: "La migration des granules corticaux vers la périphérie est une étape clé de la maturation ovocytaire en préparation à la réaction corticale après la fécondation. Les autres options sont incorrectes."
      },
      {
        questionText: "Cochez la réponse juste parmi les propositions suivantes concernant l’ovulation:",
        options: [
          "Elle est déclenchée par les œstrogènes",
          "Elle survient toujours au 14ème jour du cycle",
          "Elle est principalement due à une hyperpression intra folliculaire",
          "Elle a lieu au niveau du stigma",
          "Elle est provoquée par une rupture des parois folliculaire et ovarienne par les prostaglandines"
        ],
        correctOptionIndexes: [3],
        explanation: "Le stigma est la zone avasculaire et amincie de la paroi ovarienne où la rupture se produit lors de l'ovulation. Elle est déclenchée par le pic de LH (A faux)."
      },
      {
        questionText: "Au cours d'un cycle sexuel normal d'une durée moyenne de 28 jours, l'ovulation se produit",
        options: [
          "Entre le 14ème et le 28ème jour",
          "Entre le 1er et le 5ème jour",
          "Entre 9ème et le 14ème jour",
          "Entre le 1er et le 14ème jour",
          "Vers le 14ème jour"
        ],
        correctOptionIndexes: [4],
        explanation: "Dans un cycle menstruel de référence de 28 jours, l'ovulation se produit généralement autour du 14ème jour, marquant la transition entre la phase folliculaire et la phase lutéale."
      },
      {
        questionText: "A propos du follicule antral: cochez la réponse juste :\n1. Il comporte un ovocyte I\n2. Il comporte une cavité folliculaire\n3. Il comporte un ovocyte II\n4. On retrouve la granulosa et la membrane de Slavjansky\n5. Le follicule mur forme le stigma au niveau de la paroi de l’ovaire",
        options: [
          "1+2+4",
          "2+3+4",
          "3+4+5",
          "2+3+5",
          "1+2+5"
        ],
        correctOptionIndexes: [0],
        explanation: "Le follicule antral (ou cavitaire) contient un ovocyte I (1 vrai, 3 faux), possède une cavité appelée antrum (2 vrai), et est constitué de la granulosa et de la thèque interne (membrane de Slavjansky) (4 vrai). Le stigma ne se forme qu'au stade pré-ovulatoire (follicule de De Graaf) (5 faux)."
      },
      {
        questionText: "La première division méiotique est caractérisée par sa prophase cette 1ere division aura pour conséquences essentielles (cocher la réponse juste) :",
        options: [
          "L’échange de matériel héréditaire sans réduction de nombre de chromosomes",
          "La réduction de moitié du nombre de chromosomes, la disjonction des chromosomes X et Y sans échange de matériel héréditaire",
          "La conservation du nombre de chromosomes, la disjonction de X et Y et l’échange de matériel héréditaire paternel et maternel",
          "La réduction de moitié du nombre de chromosomes, la disjonction des chromosomes X et Y, et échange de matériel héréditaire paternel et maternel",
          "Toutes ces réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "La méiose I a trois conséquences majeures: 1) Réduction du nombre de chromosomes (2n à n), 2) Séparation des chromosomes homologues (disjonction), 3) Échange de matériel génétique (crossing-over). La proposition D résume ces trois points."
      },
      {
        questionText: "Parmi les propositions suivantes concernant les follicules primordiaux: cochez la réponse juste.",
        options: [
          "Renferment un ovocyte de deuxième ordre.",
          "Mesurent environ 12 mm de diamètre.",
          "Contient un ovocyte de premier ordre.",
          "Entoures d'une assise de cellules cubiques.",
          "Apparition de la zone pellucide."
        ],
        correctOptionIndexes: [2],
        explanation: "Le follicule primordial est l'unité de base du stock ovarien et contient un ovocyte de premier ordre (ovocyte I). Il est très petit et entouré de cellules folliculaires aplaties, non cubiques."
      },
      {
        questionText: "A propos des cellules germinales primordiales: cochez la réponse fausse",
        options: [
          "Proviennent de la paroi de la cavité amniotique",
          "Sont douées de mobilité.",
          "Elles apparaissent vers la troisième semaine du développement embryonnaire",
          "S’entourent de cellules épithéliales",
          "Se différencient en ovocytes de premier ordre."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cellules germinales primordiales apparaissent dans la paroi de la vésicule vitelline, et non dans la paroi de la cavité amniotique."
      },
      {
        questionText: "A quel stade de développement se trouve le gamète femelle au moment de la ponte ovulaire: cochez la réponse juste.",
        options: [
          "Ovocyte I bloqué en première division de mélose.",
          "Ovocyte II en métaphase de deuxième division méiotique",
          "Ovocyte II en fin de deuxième division méiotique.",
          "Ovocyte II bloqué en division équationnelle avec un nombre n de chromosomes.",
          "Ovocyte I bloqué en première division réductionnelle."
        ],
        correctOptionIndexes: [1],
        explanation: "Au moment de l'ovulation, le gamète femelle est un ovocyte II qui a terminé sa méiose I et qui est bloqué en métaphase de la deuxième division méiotique. Il ne terminera cette division que s'il y a fécondation."
      },
      {
        questionText: "A propos de la régulation du cycle menstruel: cochez la réponse juste",
        options: [
          "Le cycle menstruel est composé de deux phases œstrogéniques",
          "La progestérone secrétée au cours de la deuxième phase assure la régénération de la couche fonctionnelle",
          "L’œstrogène agit uniquement sur l’ovaire",
          "La FSH est secrétée par l’hypothalamus sous le contrôle de l’hypophyse",
          "Les œstrogènes sont secrétés par les cellules de la thèque interne sous l’influence de la FSH"
        ],
        correctOptionIndexes: [4],
        explanation: "La production d'œstrogènes est un processus coopératif : les cellules de la thèque interne (stimulées par la LH) produisent des androgènes, qui sont ensuite convertis en œstrogènes par les cellules de la granulosa (stimulées par la FSH)."
      },
      {
        questionText: "A propos de l'ovogenèse:cocher la réponse fausse",
        options: [
          "Il existe environ 400 000 ovocytes au début de la puberté",
          "A la naissance les ovocytes de premier ordre sont bloqués à la prophase de la première division méiotique",
          "L'ovocyte de premier ordre donne un ovocyte de deuxième ordre et un globule polaire suite à la seconde division méiotique",
          "De la naissance à la puberté c'est la phase de repos pendant laquelle l'ovocyte ne se divise pas",
          "Les ovogonies sont à l'origine des ovocytes de premier ordre"
        ],
        correctOptionIndexes: [2],
        explanation: "La proposition C est fausse. L'ovocyte de premier ordre donne un ovocyte de deuxième ordre et le premier globule polaire à l'issue de la PREMIÈRE division méiotique, pas de la seconde."
      },
      {
        questionText: "Concernant l’ovogenèse : cocher la réponse juste :",
        options: [
          "C’est la formation du gamète femelle",
          "Elle débute pendant la vie fœtale",
          "C’est un processus continu depuis la vie fœtale jusqu’à la ménopause",
          "Elle se déroule dans la zone médullaire centrale de l’ovaire",
          "Les réponses C et D sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "L'ovogenèse est un processus discontinu (C est faux) et elle se déroule dans le cortex ovarien, pas la médullaire (D est faux). Par conséquent, l'option E est la bonne réponse."
      },
      {
        questionText: "A propos des follicules ovariens : cocher la réponse fausse",
        options: [
          "Le follicule primaire contient un ovocyte de premier ordre entouré par des cellules épithéliales cubiques",
          "Le follicule secondaire est caractérisé par la présence de plusieurs cavités liquidiennes",
          "Le follicule mûr ou de De Graaf est très volumineux il mesure 1,5 cm",
          "L’ovocyte de premier ordre est entouré par la zone pellucidée dans le follicule tertiaire",
          "Dans le follicule primordial la membrane de Slavjanski sépare les cellules folliculeuses du tissu conjonctif"
        ],
        correctOptionIndexes: [1],
        explanation: "Le follicule secondaire est caractérisé par l'apparition de petites cavités qui confluent pour former une seule grande cavité (l'antrum) au stade de follicule tertiaire. Il ne possède donc pas 'plusieurs cavités liquidiennes' à proprement parler."
      },
      {
        questionText: "A propos du cycle génital féminin : cocher la réponse fausse",
        options: [
          "Il est contrôlé par le système hypothalamo-hypophysaire",
          "L’hypophyse produit la FSH et LH",
          "Les taux des hormones féminines sont invariables au cours du cycle menstruel.",
          "La FSH induit la maturation du follicule tertiaire en follicule de DE GRAAF",
          "La FSH induit la stimulation des cellules de la théque interne qui secrètent des œstrogènes."
        ],
        correctOptionIndexes: [2],
        explanation: "Les taux d'hormones féminines (œstrogènes, progestérone, LH, FSH) varient considérablement et de manière cyclique pour orchestrer les différentes phases du cycle. Ils ne sont donc pas invariables."
      },
      {
        questionText: "A propos du pic de LH: cocher la réponse fausse",
        options: [
          "Il entraîne la reprise de la première division méiotique de l’ovocyte !",
          "Il entraîne le début de la deuxième division méiotique avec la formation d’un ovocyte !",
          "L’ovulation survient environ 36 heures plus tard",
          "Il induit la transformation du follicule rompu en corps jaune",
          "Par la suite, le corps jaune produit l’œstrogène"
        ],
        correctOptionIndexes: [4],
        explanation: "Le corps jaune produit principalement de la progestérone, bien qu'il produise aussi un peu d'œstrogène. Sa production principale et caractéristique est la progestérone."
      },
      {
        questionText: "L’ovulation est un phénomène (cochez la réponse juste) :",
        options: [
          "Qui se déroule de façon cyclique de la naissance à la ménopause",
          "Contrôlée par la glande hypophysaire qui produit la LH et la FSH à des taux constants au cours du cycle ovarien",
          "Survient 12 h après le pic de LH",
          "Le pic de LH entraîne la reprise de la première division méiotique",
          "Au moment de l’ovulation l’ovocyte comprend 2n chromosome"
        ],
        correctOptionIndexes: [3],
        explanation: "Le pic de LH est le déclencheur hormonal direct de la reprise de la méiose I de l'ovocyte, qui était bloqué en prophase I depuis la vie fœtale. Les autres options sont fausses : l'ovulation débute à la puberté, les taux hormonaux varient, elle survient 24-36h après le pic, et l'ovocyte est haploïde (n)."
      },
      {
        questionText: "L’ovulation normale correspond à l’émission d’un: cochez la réponse juste :",
        options: [
          "Ovotide",
          "Ovocyte I en métaphase I",
          "Ovocyte II en métaphase II",
          "Ovocyte II accompagne du 2ème globule polaire",
          "Ovocyte I accompagne du 1er globule polaire"
        ],
        correctOptionIndexes: [2],
        explanation: "L'ovulation correspond à l'expulsion d'un ovocyte II bloqué en métaphase II. L'ovotide et le 2ème globule polaire ne se forment qu'après la fécondation."
      },
      {
        questionText: "Au cours l’un cycle génital féminin normal d’une durée moyenne de 28 jours, l’ovulation se produit:",
        options: [
          "Entre le 1ère et le 5ème jour",
          "Entre le 1ère et le 14ème jour",
          "Vers le 14ème jour",
          "Vers le 17ème et le 18ème jour",
          "Entre le 14ème et le 26ème jour"
        ],
        correctOptionIndexes: [2],
        explanation: "Dans un cycle menstruel standard de 28 jours, l'ovulation se produit vers le 14ème jour, séparant la phase folliculaire de la phase lutéale."
      },
      {
        questionText: "Parmi les propositions suivantes concernant l’ovulation, indiquez celle qui est juste",
        options: [
          "Elle est induite par une contraction de l’ovaire due aux prostaglandines",
          "Elle a lieu 36 à 40 heures après le pic LH",
          "Elle provoquée par une hyperpression intrafolliculaire due à l’acide hyaluronique",
          "Elle est induite par une autodestruction des parois folliculaires et ovariennes",
          "Elle laisse une cicatrice sur la surface de l’ovaire appelée “stigma”"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Tous les mécanismes décrits participent au processus d'ovulation : les prostaglandines provoquent des contractions, le pic LH la déclenche 36-40h après, l'acide hyaluronique augmente la pression, l'autodestruction des parois permet la rupture, et le 'stigma' est le point de rupture."
      },
      {
        questionText: "L’observation au microscopie optique d’une préparation d’ovaire riche en follicules dont certains présentent une ou plusieurs assisses de cellules folliculeuses cubiques renfermant un ovocyte de premier ordre. S’agit-il (cochez la réponse juste):",
        options: [
          "D’un follicule primordial.",
          "D’un follicule secondaire.",
          "D’un follicule paucicellulaire.",
          "D’un follicule antral.",
          "D’un follicule mûr."
        ],
        correctOptionIndexes: [1],
        explanation: "Le follicule secondaire est caractérisé par un ovocyte I entouré de plusieurs couches (2 à 4) de cellules folliculaires cubiques. C'est l'étape qui suit le follicule primaire (une seule couche) et précède le follicule antral (avec une cavité)."
      },
      {
        questionText: "Au cours d’un cycle sexuel normal d’une durée moyenne de 28 jours, l’ovulation se produit (cochez la réponse juste):",
        options: [
          "Entre le 14ème et le 28ème jour.",
          "Entre le 1er et le 8ème jour.",
          "Entre le 1er et le 14ème jour.",
          "Vers le 14ème jour.",
          "Vers le 17ème et le 18ème jour."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ovulation se produit typiquement au milieu d'un cycle de 28 jours, soit vers le 14ème jour, marquant la fin de la phase folliculaire et le début de la phase lutéale."
      },
      {
        questionText: "A propos de la folliculogénèse (cochez la réponse juste):",
        options: [
          "Elle se déroule en partie dans les ovaires et en partie dans les trompes.",
          "Elle est définie par l’évolution des ovocytes.",
          "Elle évolue de façon continue.",
          "Le follicule rompu expulse un ovocyte de type I.",
          "Elle est observée uniquement dans le cortex ovarien."
        ],
        correctOptionIndexes: [4],
        explanation: "La folliculogenèse, qui est le processus de maturation des follicules ovariens, a lieu exclusivement dans le cortex (la partie externe) de l'ovaire. Elle est discontinue et expulse un ovocyte de type II."
      },
      {
        questionText: "Laquelle parmi les propositions suivantes correspond le mieux au corps jaune(cochez la réponse juste):",
        options: [
          "Proviant du follicule mûr et élabore les œstrogènes et la progestérone.",
          "Secrète de la progestérone tout le long du cycle.",
          "Dégénère en cas de grossesse.",
          "Renferme un coagulum et des cellules lutéales.",
          "Elabore la progestérone seulement."
        ],
        correctOptionIndexes: [3],
        explanation: "Après l'ovulation, le follicule rompu se remplit d'un caillot de sang (coagulum) et ses cellules (granulosa et thèque) se transforment en cellules lutéales, formant ainsi le corps jaune."
      },
      {
        questionText: "Parmi les propositions suivantes, laquelle n'a pas lieu après le pic de LH (cochez la réponse fausse):",
        options: [
          "La migration des granules corticaux sous la membrane plasmique.",
          "Le couplage métabolique entre les cellules de la corona radiata et l'ovocyte.",
          "La formation de la fente périvitelline.",
          "La mucification du complexe cumulo-ovocytaire.",
          "La reprise de la méiose."
        ],
        correctOptionIndexes: [1],
        explanation: "Le couplage métabolique entre les cellules de la corona radiata et l'ovocyte (via des jonctions gap) est essentiel pour la maturation de l'ovocyte AVANT le pic de LH. Le pic de LH entraîne justement la rupture de ce couplage."
      },
      {
        questionText: "Concernant l’ovulation, quelle est la proposition exacte ? (cochez la réponse juste):",
        options: [
          "Elle a toujours lieu au 14ème jour du cycle menstruel.",
          "Elle est déclenchée par un pic d’œstrogènes.",
          "L’ovocyte II contient 23 chromosomes formés chacun de deux chromatides.",
          "Elle est surtout due à une hyperpression intrafolliculaire.",
          "Au moment de l’ovulation, le gamète femelle se sépare de ses enveloppes."
        ],
        correctOptionIndexes: [2],
        explanation: "L'ovocyte II, bloqué en métaphase II, est haploïde (23 chromosomes), mais chaque chromosome est encore constitué de deux chromatides sœurs. La séparation de ces chromatides n'aura lieu qu'après la fécondation."
      },
      {
        questionText: "Cochez la réponse juste parmi les propositions suivantes:",
        options: [
          "Le corps jaune se forme avant l’ovulation à partir du follicule déhiscent.",
          "Les petites cellules lutéales proviennent des cellules de la granulosa.",
          "En cas de grossesse, le corps jaune est appelé corps jaune progestatif.",
          "La formation du corps jaune est déclenchée par la LH.",
          "Dans le corps jaune en formation, les cellules de la théque interne se chargent en pigment jaune (la lutéine) d’où son nom."
        ],
        correctOptionIndexes: [3],
        explanation: "La transformation du follicule rompu en corps jaune (processus appelé lutéinisation) est directement déclenchée par le pic massif de LH qui a provoqué l'ovulation."
      },
      {
        questionText: "Parmi les propositions suivantes concernant le gamète femelle mature (cochez la réponse juste):",
        options: [
          "C’est un ovocyte bloqué en prophase I.",
          "Il est riche en polyribosomes.",
          "Il contient peu de molécules ARN.",
          "L’espace périvitellin sépare l’ovocyte de la corona radiata.",
          "Il ne possède pas de centriole."
        ],
        correctOptionIndexes: [4],
        explanation: "Contrairement au spermatozoïde, l'ovocyte mature ne possède pas de centrioles. Le centriole nécessaire à la formation du premier fuseau mitotique du zygote sera apporté par le spermatozoïde lors de la fécondation."
      },
      {
        questionText: "A propos de la régulation du cycle menstruel (cochez la réponse juste) :",
        options: [
          "Le cycle menstruel est composé de deux phases œstrogéniques.",
          "La progestérone secrétée au cours de la deuxième phase assure la régénération de la couche fonctionnelle.",
          "L’œstrogène agit uniquement sur l’ovaire.",
          "Les œstrogènes sont secrétés par les cellules de la thèque interne sous l’influence de la FSH.",
          "La FSH est secrétée par l’hypothalamus sous le contrôle de l’hypophyse."
        ],
        correctOptionIndexes: [3],
        explanation: "C'est un processus coopératif : les cellules de la thèque interne (stimulées par la LH) produisent des androgènes, qui sont convertis en œstrogènes par les cellules de la granulosa (stimulées par la FSH)."
      },
      {
        questionText: "A propos de l’ovogenèse (cochez la réponse fausse) :",
        options: [
          "Commence de la troisième semaine de développement embryonnaire jusqu’à la fin la ménopause.",
          "Entre dans une phase de quiescence après la naissance.",
          "C’est un phénomène indissociable de la folliculogénèse.",
          "Le nombre de gamètes femelles augmente considérablement à la fin de l’ovogénèse.",
          "Les anomalies de l’ovogénèse se voient dans les perturbations hormonales."
        ],
        correctOptionIndexes: [3],
        explanation: "Le stock d'ovocytes est fixé à la naissance et ne fait que diminuer tout au long de la vie (atrésie). Il n'y a pas de production de nouveaux ovocytes après la naissance, donc le nombre ne peut pas augmenter."
      },
      {
        questionText: "Structure du follicule secondaire (cochez la réponse juste) :",
        options: [
          "L’ovocyte a doublé de volume et est entouré d’une seule couche cellulaire.",
          "L’ovocyte a doublé de volume et la membrane de Slayjanski est fragmentée.",
          "L’ovocyte a triplé de volume, entouré de trois couches de cellules folliculaires et la zone pellucide est en voie de formation.",
          "L’ovocyte a triplé de volume, la membrane de Slayjanski est bien visible et est entouré d’une seule couche de cellules folliculaire.",
          "L’ovocyte I a doublé de volume, la membrane de Slayjanski et la zone pellucide sont mieux visibles."
        ],
        correctOptionIndexes: [4],
        explanation: "Dans le follicule secondaire, l'ovocyte I a augmenté de taille. La zone pellucide et la membrane basale (Slavjanski) deviennent clairement visibles. Il est entouré de plusieurs couches de cellules folliculaires."
      },
      {
        questionText: "Concernant la structure ovarienne au microscope optique faible grossissement (cochez la réponse juste)",
        options: [
          "Les follicules ovariens sont situées au niveau de la médullaire",
          "La zone médullaire est pauvre en vaisseaux sanguins",
          "L’épithélium ovarien est représenté par les follicules",
          "La zone pellucidée disparaît au niveau du follicule de De Graaf",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les propositions sont incorrectes : les follicules sont dans le cortex (A), la médullaire est riche en vaisseaux (B), l'épithélium ovarien est une couche de cellules en surface (C), et la zone pellucide persiste dans le follicule de De Graaf (D)."
      },
      {
        questionText: "L’ovulation est un phénomène(cochez la réponse juste) :",
        options: [
          "Qui se déroule de façon cyclique de la naissance à la ménopause",
          "Contrôlée par la glande hypophysaire qui produit la LH et la FSH à des taux constants au cours du cycle ovarien",
          "Survient 12 h après le pic de LH",
          "Au moment de l’ovulation l’ovocyte comprend 2n chromosome",
          "Le pic de LH entraîne la reprise de la première division méiotique"
        ],
        correctOptionIndexes: [4],
        explanation: "Le pic préovulatoire de LH est le signal hormonal qui lève le blocage de la méiose I, permettant à l'ovocyte I de terminer sa première division pour devenir un ovocyte II."
      },
      {
        questionText: "L’examen au M.O FG d’une préparation d’ovaire à la puberté montre un cortex ovarien:",
        options: [
          "Constitut exclusivement de follicules gamétogènes (FG).",
          "Constitué à la fois de FG et de follicules non gamétogènes (FNG) avec un stock de FG dépassant les 2000 follicules.",
          "Constitué à la fois de FG et de FNG pour la majorité de type de DE GRAAF.",
          "Constitué à la fois de FG et de FNG avec un stock de FG compris entre 350 et 500 follicules.",
          "Constitué à la fois de FG et de FNG dans les mêmes proportions"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cortex ovarien contient un grand stock de follicules primordiaux (~400 000) et, à chaque cycle, une cohorte de follicules entre en croissance (gamétogènes), tandis que d'autres dégénèrent (non gamétogènes). Le chiffre de 350-500 fait référence au nombre total de follicules qui ovuleront au cours de la vie reproductive."
      },
      {
        questionText: "Parmi les propositions suivantes concernant la folliculogenèse: cochez la réponse juste:",
        options: [
          "Les follicules primordiaux renferment un ovocyte de deuxième ordre.",
          "Le membrane pellucidé sépare les cellules folliculeuses du tissu conjonctif.",
          "Le follicule antral contient un ovocyte de premier ordre.",
          "Environ un million de follicules sont présents à la puberté.",
          "La corona radiata apparait au niveau du follicule antral."
        ],
        correctOptionIndexes: [2],
        explanation: "Le follicule antral (tertiaire) contient toujours un ovocyte de premier ordre (ovocyte I). La méiose I ne s'achèvera que juste avant l'ovulation."
      },
      {
        questionText: "Parmi les propositions suivantes concernant l’ovogenèse qu’elle est celle qui est fausse:",
        options: [
          "Les gonocytes primordiaux se différencient en ovogonies.",
          "L’ovogenèse se déroule dans le follicule.",
          "L’ovogenèse se déroule de façon cyclique.",
          "Le stock d’ovocytes à la puberté est estimé à 400 000.",
          "Le deuxième globule polaire est émis seulement en cas de fécondation."
        ],
        correctOptionIndexes: [2],
        explanation: "L'ovogenèse est un processus discontinu (avec des arrêts), et non cyclique. C'est la folliculogenèse et l'ovulation qui sont des phénomènes cycliques à partir de la puberté."
      },
      {
        questionText: "Concernant le corps jaune : cochez la réponse juste",
        options: [
          "Est responsable de la libération d’œstrogènes et de progestérone juste après les règles.",
          "Est constitué de cellules folliculaires ayant expulsées l’ovocyte.",
          "Le corps jaune gestatif est maintenu par la HCG placentaire.",
          "Le corps jaune persiste lorsque les règles apparaissent."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le corps jaune est formé à partir des cellules folliculaires restantes après l'ovulation (B est juste). En cas de grossesse, il est maintenu par l'HCG (C est juste). Il libère des hormones après l'ovulation, pas après les règles (A faux), et il dégénère s'il n'y a pas fécondation, ce qui provoque les règles (D faux)."
      },
      {
        questionText: "A propos de la régulation du cycle menstruel (cochez la réponse juste) :",
        options: [
          "Le cycle menstruel est composé de deux phases œstrogéniques",
          "La progestérone secrétée au cours de la deuxième phase assure la régénération de la couche fonctionnelle",
          "Les œstrogènes sont secrétés par les cellules de la théque interne sous l’influence de la FSH",
          "L’œstrogène agit uniquement sur l’ovaire",
          "La FSH est secrétée par l’hypothalamus sous le contrôle de l’hypophyse"
        ],
        correctOptionIndexes: [2],
        explanation: "La production d'œstrogènes est une collaboration entre les cellules de la thèque (qui produisent des androgènes sous l'effet de la LH) et les cellules de la granulosa (qui convertissent ces androgènes en œstrogènes sous l'effet de la FSH)."
      },
      {
        questionText: "Les cellules germinales primordiales (cochez la réponse juste) :",
        options: [
          "Sont des ovogonies qui apparaissent vers la troisième semaine de développement embryonnaire",
          "Sont des ovocytes I qui prennent naissance au niveau de la paroi de la vésicule vitelline",
          "leur nombre diminue dès leur arrivée au niveau des crêtes génitales",
          "C’est au niveau des crêtes génitales que les cellules germinales primordiales se différencient en spermatogonies ou en ovogonies",
          "C’est grâce à la méiose que les cellules germinales primordiales deviennent des ovogonies"
        ],
        correctOptionIndexes: [3],
        explanation: "Les cellules germinales primordiales migrent vers les crêtes génitales (ébauches des gonades). C'est là que, selon le sexe génétique de l'embryon, elles se différencient soit en ovogonies (femelle) soit en spermatogonies (mâle) par mitose."
      },
      {
        questionText: "A propos de l’ovogenèse (cochez la réponse fausse) :",
        options: [
          "Commence de la troisième semaine de développement embryonnaire jusqu’à la fin de la vie de l’individu",
          "Entre dans une phase de quiescence après la naissance",
          "C’est un phénomène indissociable de la folliculogénèse",
          "Le nombre de gamètes femelle diminue considérablement à la fin de l’ovogénèse",
          "Les anomalies de l’ovogénèse se voient dans les perturbations hormonales"
        ],
        correctOptionIndexes: [0],
        explanation: "L'ovogenèse s'arrête à la ménopause, elle ne continue pas jusqu'à la fin de la vie de l'individu."
      },
      {
        questionText: "Quelle est la proposition fausse concernant l’ovocyte?",
        options: [
          "Avant l’ovulation, l’ovocyte est bloqué en prophase I",
          "Après l’ovulation, l’ovocyte continue sa méiose en cas de fécondation",
          "L’ovocyte 1 contient 23 chromosomes",
          "C’est le gamète femelle qui a un rôle dans la fécondation",
          "Il est un constituant du follicule primaire"
        ],
        correctOptionIndexes: [2],
        explanation: "L'ovocyte I est une cellule diploïde, il contient donc 46 chromosomes (23 paires). Il ne devient haploïde (23 chromosomes) qu'après avoir complété la première division méiotique pour devenir un ovocyte II."
      },
      {
        questionText: "A propos du corps jaune (cochez la réponse fausse) :",
        options: [
          "Déférent du follicule déhiscent",
          "Les cellules de la granulosa sont envahies par des vaisseaux sanguins",
          "Le corps jaune gestatif disparait vers le troisième mois de la grossesse",
          "Les cellules de la théque interne secrètent les estrogènes",
          "Comporte un coagulum intra-folliculaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Ce sont principalement les cellules de la thèque qui sont déjà vascularisées. La granulosa, initialement avasculaire, est ensuite vascularisée lors de la formation du corps jaune, mais la formulation 'envahies' est trompeuse. La principale erreur est que les cellules de la thèque produisent les précurseurs des oestrogènes."
      },
      {
        questionText: "Parmi ces structures du follicule ovarien, laquelle est responsable de la reconnaissance du spermatozoïde en tant que gamète de la même espèce ?",
        options: [
          "La membrane plasmique de l’ovocyte",
          "Le cumulus oophorus",
          "La corona radiata",
          "La membrane nucléaire de l’ovocyte",
          "La membrane pellucide"
        ],
        correctOptionIndexes: [4],
        explanation: "La zone pellucide (ou membrane pellucide) contient des glycoprotéines spécifiques (notamment ZP3) qui agissent comme des récepteurs pour les spermatozoïdes de la même espèce, assurant ainsi la spécificité de la fécondation."
      },
      {
        questionText: "L'examen au M.O d'une préparation histologique d'ovaire permet d'observer la présence quasi essentielle d'une population d'ovocytes entourées de cellules folliculaires avec de rares images de mitose il s'agit d'un ovaire:",
        options: [
          "Entre de 4ème et le 7ème mois de grossesse",
          "De la fin de grossesse",
          "À la naissance",
          "Après la puberté",
          "Durant l'enfance"
        ],
        correctOptionIndexes: [0],
        explanation: "C'est pendant la période fœtale (4ème au 7ème mois) que la multiplication active des ovogonies par mitose a lieu, avant qu'elles n'entrent toutes en méiose pour devenir des ovocytes I. C'est donc à ce stade qu'on observerait des mitoses."
      },
      {
        questionText: "Laquelle parmi les propositions suivantes concernant la régulation de l’ovogenèse est exacte?",
        options: [
          "Elle est contrôlée par la FSH",
          "Elle dépend exclusivement de l’hypophyse",
          "La FSH intervient dans la maturation lobiculaire et de la stimulation des cellules thécales",
          "Le pic de FSH induit la reprise de la 1ère division méiotique",
          "L’ovulation est provoquée 20h après le pic de LH"
        ],
        correctOptionIndexes: [0],
        explanation: "La FSH joue un rôle central dans la régulation en stimulant la croissance des follicules (folliculogenèse), qui est indissociable de l'ovogenèse. La régulation est cependant complexe et implique aussi la LH et d'autres hormones."
      },
      {
        questionText: "L'examen au M.0 d'une préparation d'ovaire d'une femme jeune permet d'observer des follicules à différents stades évolutifs dont le plus volumineux (environ 12 mm de diamètre) situé juste sous l'épithélium ovarien présente : A- Un ovocyte 1 très augmenté de taille. B- Un aspect en couronne des cellules de la granulosa autour de l'ovocyte C- Une zone pellucide bien individualisée. D- Le tout faisant légèrement hernie dans une cavité de volume modérée en forme de croissant. Sagit-il ?",
        options: [
          "D'un follicule cavitaire en début de formation",
          "D'un follicule cavitaire en fin de formation",
          "D'un follicule mûr en début de formation",
          "D'un follicule mûr en fin de formation",
          "Les propositions B et C sont exactes"
        ],
        correctOptionIndexes: [4],
        explanation: "La description correspond à un follicule antral (cavitaire) mature en fin de formation, qui est prêt à devenir un follicule de De Graaf. L'aspect en couronne (B) est la corona radiata et le follicule est mûr (C)."
      },
      {
        questionText: "Sur le schéma représentant la structure en M.O d’un gamète femelle au moment de l’ovulation, lesquelles parmi les combinaisons suivantes de légendes sont exactes ?",
        options: [
          "1 : cellules périvacuolaires, 3 : zone pellucide, 5 : granules corticaux, 8 : noyau, 10 : cytoplasme",
          "2 : zone pellucide, 4 : membrane plasmique, 6 : 1er globule polaire, 8 : matériel nucléaire, 9 : ribosomes",
          "1 : cellules périvacuolaires, 2 : zone pellucide, 5 : ribosomes, 8 : matériel nucléaire, 10 : cytoplasme",
          "2 : zone pellucide, 4 : membrane plasmique, 6 : 1er globule polaire, 7 : espace périvitellin, 8 : ribosomes",
          "1+2 : enveloppes ovocytaires, 3 : espace périvitellin, 5 : granules corticaux, 8 : image mitotique, 10 : cytoplasme"
        ],
        correctOptionIndexes: [4],
        explanation: "Cette combinaison décrit correctement les structures clés de l'ovocyte II au moment de l'ovulation: ses enveloppes (corona radiata + zone pellucide), l'espace périvitellin, les granules corticaux, la plaque métaphasique (image mitotique) et le cytoplasme."
      },
      {
        questionText: "A quel stade de développement se trouve le gamète femelle au moment de l’ovulation?",
        options: [
          "C’est un ovocyte 1 en fin de première division de méiose",
          "C’est un ovocyte 2 en fin de deuxième division de méiose",
          "C’est un ovocyte 2 en métaphase de deuxième division de méiose 2n ADN",
          "C’est un ovocyte 1 bloqué en première division réductionnelle",
          "C’est un ovocyte 2 bloqué en division équationnelle avec un nombre haploïde de chromosomes"
        ],
        correctOptionIndexes: [4],
        explanation: "Le gamète ovulé est un ovocyte II, bloqué en métaphase de la 2ème division méiotique (qui est une division équationnelle). Il est haploïde en nombre de chromosomes (n=23)."
      },
      {
        questionText: "Lesquelles parmi les propositions suivantes correspondent le mieux à la définition du corps jaune en dehors de la grossesse?",
        options: [
          "Proviant de la transformation du follicule mûr et élaboré des estrogènes et de la progestérone.",
          "Proviant du follicule mûr juste après l’ovulation et élaboré des œstrogènes et la progestérone.",
          "Proviant de la transformation du follicule déhiscent et élaboré les œstrogènes seulement.",
          "Proviant de la transformation du follicule déhiscent et régressé en fin de cycle ovarien.",
          "Comporté sur le plan structural un coagulum central et des cellules lutéales."
        ],
        correctOptionIndexes: [3],
        explanation: "Le corps jaune cyclique (en dehors de la grossesse) se forme à partir du follicule déhiscent (rompu) après l'ovulation et sa caractéristique principale est de régresser à la fin du cycle menstruel en l'absence de fécondation."
      },
      {
        questionText: "Laquelle parmi les propositions suivantes concernant l’appareil génital féminin est fausse?",
        options: [
          "Le cortex ovarien conforme uniquement des follicules gametogenes.",
          "La paroi utérine offre à décrire 3 tuniques : endomètre, myomètre et séreuse.",
          "La glaire cervicale est sécrétée par les glandes du col utérin.",
          "Le cortex ovarien renferme à la fois des follicules Gamétogenes et des follicules non Gamétogenes avec prédominance de ces derniers.",
          "Le cortex ovarien renferme à la fois des follicules gamétogenèse et des follicules non gamétogenèse."
        ],
        correctOptionIndexes: [0],
        explanation: "Le cortex ovarien contient des follicules à différents stades de développement (gamétogènes) mais aussi une grande majorité de follicules en dégénérescence (follicules atrétiques, non gamétogènes). La proposition A est donc fausse."
      },
      {
        questionText: "L'observation d'une préparation histologique d'un ovaire à la naissance retrouve:",
        options: [
          "Seulement des ovogonies.",
          "A la fois des ovogonies et des gonocytes.",
          "Seulement des ovocytes de premier ordre bloqués en prophase de division réductionnelle.",
          "Des ovocytes de premier ordre et des ovogonies.",
          "A la fois des ovocytes de premier ordre et des ovocytes bloqués en prophase de division réductionnelle et des ovocytes ayant achevés leur division."
        ],
        correctOptionIndexes: [2],
        explanation: "À la naissance, toutes les cellules germinales de l'ovaire sont des ovocytes I (premier ordre) qui ont commencé la méiose I et sont bloqués en prophase (stade diplotène). Il n'y a plus d'ovogonies."
      },
      {
        questionText: "L’ovocyte de premier ordre reprend sa première division réductionnelle:",
        options: [
          "Immédiatement après la naissance.",
          "Lors de la phase de multiplication durant la vie fœtale.",
          "Lors de la phase de croissance durant la vie fœtale.",
          "À la puberté en l’absence de fécondation.",
          "À la puberté seulement en cas de fécondation."
        ],
        correctOptionIndexes: [3],
        explanation: "La levée du blocage de la méiose I se produit à chaque cycle menstruel à partir de la puberté, sous l'effet du pic de LH, que la fécondation ait lieu ou non par la suite."
      },
      {
        questionText: "Les cellules paralutéiniques sont observées:",
        options: [
          "Au niveau du follicule déhiscent et dérivent des cellules de la granulosa.",
          "Au niveau du follicule déhiscent et dérivent des cellules thécales.",
          "Au niveau du corps jaune et prenant naissance à partir des cellules du cumulus oophorus.",
          "Au niveau du corps jaune prenant naissance à partir des cellules thécales.",
          "Au niveau du corps jaune et dérivent des cellules de la granulosa."
        ],
        correctOptionIndexes: [3],
        explanation: "Le corps jaune est composé de deux types de cellules lutéinisées : les grandes cellules lutéales (provenant de la granulosa) et les petites cellules lutéales ou paralutéiniques (provenant des cellules de la thèque interne)."
      },
      {
        questionText: "La rupture folliculaire est provoquée par:",
        options: [
          "La lyse enzymatique de la paroi folliculaire.",
          "La contraction de l’ovaire et l’augmentation de la pression intra folliculaire.",
          "La lyse concomitante des parois folliculaires et ovariennes.",
          "Les propositions A et B sont justes.",
          "Les propositions A, B et C sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "L'ovulation est un processus multifactoriel impliquant l'action d'enzymes protéolytiques (A), des contractions de la paroi ovarienne (B) et une augmentation de la pression, ce qui aboutit à la lyse des parois (C)."
      },
      {
        questionText: "L’observation au M.O FG d’une préparation d’ovaire d'un follicule très augmenté de volume enfermant un ovocyte de grande taille entouré d’une zone pellucide marquée de nombreuses cellules folliculeuses et apparition de Cavité liquidienne. S'agit-il :",
        options: [
          "D’un follicule primaire.",
          "D’un follicule secondaire.",
          "D’un follicule paucicellulaire.",
          "D’un follicule antral."
        ],
        correctOptionIndexes: [3],
        explanation: "La présence d'une cavité liquidienne (l'antrum) est la caractéristique distinctive qui définit le follicule antral (ou follicule tertiaire)."
      },
      {
        questionText: "L’ovulation est un phénomène cyclique survenant:",
        options: [
          "Après le pic de FSH.",
          "Avant le pic de FSH.",
          "Avant le pic de LH.",
          "Après le pic de LH."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ovulation est le résultat direct du pic préovulatoire de l'hormone lutéinisante (LH). Elle se produit environ 24 à 36 heures après ce pic."
      },
      {
        questionText: "Parmi des propositions suivantes relatives aux ovocytes I: Cochez la réponse juste\n1- Le stock d'ovocytes I n'est pas renouvelable.\n2- Les ovocytes I s'entourent d'une couche de cellules folliculaires, devenant ainsi des follicules primordiaux.\n3- Les cellules folliculaires sont des cellules nourricières\n4- Les ovocytes qui ne s'entourent pas de cellules folliculaires se multiplient pour augmenter le stock.\n5- Les ovocytes I restent bloqués au stade de métaphase I jusqu'à la puberté.",
        options: [
          "1-5",
          "1-2+3",
          "2-4",
          "1-2-5"
        ],
        correctOptionIndexes: [1],
        explanation: "Les propositions 1, 2 et 3 sont correctes. Le stock est fixe, ils forment les follicules primordiaux, et les cellules folliculaires sont nourricières. La proposition 4 est fausse (pas de multiplication) et la 5 est fausse (blocage en prophase I)."
      },
      {
        questionText: "Le stock d'ovocytes présent dans l'ovaire à la puberté est estimé à:",
        options: [
          "5 à 6 millions d'ovocytes.",
          "Un million d'ovocytes.",
          "400.000 ovocytes.",
          "Entre 400.000 et 4 millions d'ovocytes.",
          "4 millions d'ovocytes."
        ],
        correctOptionIndexes: [2],
        explanation: "Le stock initial à la naissance est d'environ 1 à 2 millions, mais il diminue fortement par atrésie pendant l'enfance, pour atteindre environ 400 000 au début de la puberté."
      },
      {
        questionText: "L’observation au M.O au fort grossissement d’un ovaire retrouve un épithélium ovarien avec un parenchyme constitué de nombreux amas de cellules germinales (ovogonies et ovocytes de premier ordre) entourés de cellules épithéliales aplaties, s’agit-il ?",
        options: [
          "D’un ovaire d’un embryon de 01 mois.",
          "D’un ovaire d’un embryon de 04 mois.",
          "D’un ovaire d’un embryon de 07 mois.",
          "D’un ovaire d’un embryon de 08 mois.",
          "D’un ovaire à la naissance."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est pendant la période fœtale (autour du 4ème mois) que l'ovaire est le plus actif en termes de multiplication des ovogonies par mitose et de formation des ovocytes I. C'est à ce stade qu'on observerait ces amas de cellules germinales en division."
      },
      {
        questionText: "Parmi les propositions suivantes, laquelle ne correspond pas au follicule secondaire :",
        options: [
          "C’est un follicule comportant un ovocyte.",
          "C’est un follicule avec une membrane pellucide bien individualisée.",
          "C’est un follicule comportant une granulosa formée de 2 à 4 couches de cellules folliculaires.",
          "C’est un follicule avec des thèques bien individualisées.",
          "C’est un follicule possédant une membrane de Slavjanski."
        ],
        correctOptionIndexes: [3],
        explanation: "Les thèques (interne et externe) deviennent clairement individualisées et bien organisées plus tard, au stade de follicule tertiaire (antral)."
      },
      {
        questionText: "L’ovulation est un phénomène cyclique survenant:",
        options: [
          "36 heures après le pic de FSH.",
          "36 heures avant le pic de FSH.",
          "36 heures avant le pic de LH.",
          "36 heures après le pic de LH.",
          "Les propositions B et D sont justes."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ovulation est déclenchée par le pic de LH et se produit environ 24 à 36 heures après ce pic."
      },
      {
        questionText: "Parmi les propositions suivantes marquant le processus de l’ovulation, quelle proposition correspond le mieux aux transformations du 1er groupe (modifications du cumulus oophorus) ?",
        options: [
          "Apparition d’espaces entre les cellules folliculeuses.",
          "Isolement du cumulus oophorus.",
          "Apparition d’un œdème des parois folliculaire et ovarienne.",
          "Apparition d’un stigma à la surface de l’ovaire.",
          "Les propositions A et B sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Les modifications du cumulus oophorus (1er groupe) incluent sa dissociation (apparition d'espaces par mucification) et son détachement (isolement) du reste de la paroi folliculaire, préparant sa libération avec l'ovocyte."
      },
      {
        questionText: "Parmi les propositions suivantes, laquelle ne caractérise pas le gamète femelle?",
        options: [
          "Possède une faible espérance de vie.",
          "Possède une mobilité propre.",
          "C’est une cellule riche en ARN.",
          "C’est une cellule riche en granules corticaux.",
          "Possède 22 autosomes et un chromosome sexuel."
        ],
        correctOptionIndexes: [1],
        explanation: "L'ovocyte est une cellule immobile. Son déplacement dans les voies génitales féminines est passif, assuré par les cils et les contractions de la trompe utérine."
      },
      {
        questionText: "Sur le lot d’ovocytes de 1er ordre présents au niveau de l’ovaire à la puberté. On retrouve :",
        options: [
          "Uniquement des follicules évolutifs (gamétogenes)",
          "Uniquement des follicules involutifs (non gamétogenes)",
          "À la fois des follicules involutifs et évolutifs avec des proportions égales",
          "À la fois des follicules évolutifs et involutifs avec prédominance de follicules gamétogenes.",
          "À la fois des follicules évolutifs et des follicules involutifs avec un faible pourcentage de follicules évolutifs."
        ],
        correctOptionIndexes: [4],
        explanation: "Sur les ~400 000 follicules présents, seule une très petite proportion (15 à 20 par cycle) est recrutée pour devenir évolutive. La grande majorité des follicules restants sont involutifs (en atrésie ou en repos)."
      },
      {
        questionText: "Immédiatement après l’ovulation, le follicule déhiscent subit les transformations sauf une, laquelle ?",
        options: [
          "Formation d’un coagulum central.",
          "Lutéinisation des cellules thécales.",
          "Disparition de la membrane de Slavjanski.",
          "Prend un aspect kystique.",
          "Prend un aspect plissé."
        ],
        correctOptionIndexes: [3],
        explanation: "Après l'ovulation, le follicule rompu s'affaisse et prend un aspect plissé. Il ne prend pas un aspect kystique ; c'est le follicule antral avant l'ovulation qui a un aspect kystique dû à sa cavité remplie de liquide."
      },
      {
        questionText: "La progestérone:",
        options: [
          "Est une hormone sécrétée par l’hypothalamus.",
          "Est une gonadostimuline.",
          "Régresse en phase lutéale.",
          "Est une hormone provenant principalement du corps jaune."
        ],
        correctOptionIndexes: [3],
        explanation: "La progestérone est l'hormone stéroïdienne caractéristique de la phase lutéale du cycle, et elle est sécrétée en grande quantité par le corps jaune après l'ovulation."
      },
      {
        questionText: "Au cours du cycle menstruel, le pic de LH provoque:",
        options: [
          "Le fin des règles.",
          "La croissance du follicule.",
          "L’ovulation.",
          "Le début des règles."
        ],
        correctOptionIndexes: [2],
        explanation: "Le pic de l'hormone lutéinisante (LH) est le déclencheur hormonal direct de l'ovulation."
      },
      {
        questionText: "A quelle période du cycle menstruel la sécrétion de la glaire cervicale est elle maximale chez une femme avant des cycles réguliers de 28 jours?",
        options: [
          "8ème jour.",
          "14ème jour.",
          "18ème jour.",
          "24ème jour."
        ],
        correctOptionIndexes: [1],
        explanation: "La glaire cervicale devient la plus abondante, fluide, filante et perméable aux spermatozoïdes au moment de l'ovulation (vers le 14ème jour), sous l'effet du pic d'œstrogènes."
      },
      {
        questionText: "Le taux du 17 bêta estradiol plasmatique chez la femme normale sans contraception est le plus bas lors de:",
        options: [
          "Phase folliculaire.",
          "Phase pré-ovulatoire.",
          "Phase lutéale.",
          "Menstruation."
        ],
        correctOptionIndexes: [3],
        explanation: "Les niveaux d'œstradiol et de progestérone chutent drastiquement à la fin de la phase lutéale en l'absence de fécondation, ce qui déclenche la menstruation. Les taux sont donc au plus bas pendant les règles."
      },
      {
        questionText: "Le pic de LH s’accompagne des évènements suivants:",
        options: [
          "Le reprise de la méiose II de l’ovocyte.",
          "La reprise de la folliculogenèse.",
          "La synthèse par l’ovocyte de la zone pellucide.",
          "La rupture du follicule de De Graaf."
        ],
        correctOptionIndexes: [3],
        explanation: "Le pic de LH déclenche la cascade d'événements menant à l'ovulation, qui est la rupture du follicule de De Graaf et l'expulsion de l'ovocyte."
      },
      {
        questionText: "L’ovulation est déclenchée à la fin du cycle menstruel: Il y a une chute brutale du taux des hormones ovariennes dans les derniers jours du cycle :",
        options: [
          "Les deux informations sont justes mais n’ont pas de relation de cause à effet.",
          "Les deux informations sont justes et ont une relation de cause à effet.",
          "Les deux informations sont fausses.",
          "Une des deux informations est juste, l’autre est fausse."
        ],
        correctOptionIndexes: [3],
        explanation: "La première information est fausse : l'ovulation a lieu au milieu du cycle. La seconde information est juste : la chute des hormones en fin de cycle provoque les règles."
      },
      {
        questionText: "Dans les ovaires d’une fille non pubère, on peut trouver dans la zone corticale:",
        options: [
          "Des follicules primordiaux.",
          "Aucun follicule.",
          "Une unique follicule mûr de De Graaf.",
          "Des follicules primaires."
        ],
        correctOptionIndexes: [0],
        explanation: "Avant la puberté, les ovaires sont au repos et le cortex ovarien ne contient que des follicules primordiaux, qui sont des ovocytes I entourés d'une seule couche de cellules folliculaires aplaties."
      },
      {
        questionText: "Concernant le follicule de De Graaf:",
        options: [
          "La thèque externe produit des œstrogènes.",
          "Le gamète est un ovocyte II.",
          "Son diamètre est de 120 à 150 µm.",
          "Les cellules du cumulus oophorus entourent le gamète femelle."
        ],
        correctOptionIndexes: [3],
        explanation: "Le cumulus oophorus est un amas de cellules de la granulosa qui entoure l'ovocyte et le relie à la paroi du follicule. Les autres options sont fausses : le gamète est encore un ovocyte I juste avant l'ovulation, son diamètre est de 1.5-2 cm (15000-20000 µm)."
      },
      {
        questionText: "Concernant les ovocytes: (Cocher l’association juste)\n1-Le stock d’ovocytes I n’est pas renouvelable\n2-Les ovocytes I s’entourent d’une couche de cellules folliculaires, devenant ainsi des follicules primordiaux\n3-Les cellules folliculaires sont des cellules nourricières\n4-Les ovocytes I Qui ne s’entourent pas de cellules folliculaires se multiplient pour augmenter le stock\n5-Les ovocytes I restent bloqués au stade de métaphase I jusqu’à la puberté",
        options: [
          "1+5",
          "2+3+4",
          "2+4",
          "1+2+3",
          "1+4+3"
        ],
        correctOptionIndexes: [3],
        explanation: "Les propositions 1, 2 et 3 sont correctes. La 4 est fausse car il n'y a pas de multiplication post-natale et la 5 est fausse car le blocage se fait en prophase I."
      },
      {
        questionText: "Parmi les différents types de follicules cités ci-après, quel est celui qui ne participe pas à la sécrétion d’œstrogènes de l’ovaire adulte normal: (Cochez la réponse juste)",
        options: [
          "Le follicule atrésique.",
          "Le follicule hémorragique.",
          "Le follicule kystique.",
          "Le follicule plissé.",
          "Le follicule gamétogène."
        ],
        correctOptionIndexes: [0],
        explanation: "Un follicule atrésique est un follicule en cours de dégénérescence. Il a perdu sa fonction endocrine et ne participe donc plus à la sécrétion d'œstrogènes."
      },
      {
        questionText: "Concernant les follicules ovariens primordiaux?(Cochez l’association juste)\n1-Ils mesurent environ 150µ micronètre de diamètre.\n2-Ils contiennent un ovocyte I.\n3-Les cellules folliculaires forment une seule assise de 3 à 4 cellules aplaties.\n4-Ils sont limités par une membrane externe (la membrane de Slavjansky).\n5-Ils possèdent une cavité centrale: l’antrum.",
        options: [
          "1+2",
          "2+3",
          "4+5",
          "3+4",
          "1+5"
        ],
        correctOptionIndexes: [1],
        explanation: "Les propositions 2 et 3 sont correctes. Les follicules primordiaux contiennent un ovocyte I et sont entourés d'une seule couche de cellules folliculaires aplaties. Ils sont très petits (~50 µm), n'ont pas d'antrum ni de membrane de Slavjanski."
      },
      {
        questionText: "Sur quel(s)critère(s) morphologique(s) vous basez-vous pour affirmer la transformation du follicule ovarien déhiscent en corps jaune? (Cochez la réponse juste)",
        options: [
          "Hypertrophie de la granulosa et son envahissement par des vaisseaux sanguins.",
          "Rétraction du coagulum fibrineux central.",
          "Hypertrophie des cellules de la granulosa.",
          "Persistance de la thèque interne.",
          "Envahissement de la granulosa par des capillaires sanguins."
        ],
        correctOptionIndexes: [0],
        explanation: "La lutéinisation est caractérisée par deux phénomènes majeurs : l'hypertrophie des cellules de la granulosa (qui se transforment en grandes cellules lutéales) et une vascularisation intense de cette structure, qui était auparavant avasculaire."
      }
    ]
  },
  {
    title: "La première semaine du développement embryonnaire",
    subject: "embryology",
    questions: [
      {
        questionText: "Parmi les propositions suivantes concernant le corps jaune, laquelle est juste\n1. Est dit progestatif en absence de fécondation.\n2. Dégénère si l’ovule est fécondé.\n3. Dégénère s’il y a fécondation.\n4. Persiste seulement s’il y a une grossesse.\n5. Le corps jaune progestatif régresse à la fin du cycle ovarien.",
        options: [
          "1-2-3",
          "1-2-4",
          "1-2-5",
          "1-4-5",
          "2-3-5"
        ],
        correctOptionIndexes: [3],
        explanation: "Le corps jaune produit de la progestérone (donc progestatif) (1). Il persiste en cas de grossesse (4) et régresse en fin de cycle s'il n'y a pas de fécondation (5). Il ne dégénère pas si l'ovule est fécondé (2, 3 faux)."
      },
      {
        questionText: "Concernant les phénomènes de la fécondation: cochez la réponse juste:",
        options: [
          "Elle s'effectue au niveau du 1/3 interne de la trompe utérine.",
          "La réaction acrosomique permet la fixation du spermatozoïde à la ZP3 puis à ZP2.",
          "La période de fécondité chez la femme se situe du 14ème au 16ème jour du cycle.",
          "Il y a transformation de la membrane plasmique du spermatozoïde en membrane de fécondation.",
          "Il n'existe pas d'anomalies de la fécondation."
        ],
        correctOptionIndexes: [1],
        explanation: "La réaction acrosomique est déclenchée par la liaison à ZP3, permettant ensuite la liaison à ZP2 pour la pénétration. La fécondation a lieu dans le tiers externe de la trompe (A faux). La période de fécondité est plus large (C faux)."
      },
      {
        questionText: "À propos de la segmentation de l'œuf fécondé ; cochez la réponse fausse:",
        options: [
          "Elle est holoblastique.",
          "Les deux 1ers blastomères n'ont pas la même taille.",
          "Au stade 32 blastomères, la zone pellucide disparaît.",
          "Le stade morula précède le stade blastocyste.",
          "Elle correspond à des divisions mitotiques successives."
        ],
        correctOptionIndexes: [2],
        explanation: "La zone pellucide ne disparaît qu'au stade de blastocyste (J5-J6) lors de l'éclosion, juste avant la nidation. Au stade morula (16-32 blastomères), elle est toujours présente."
      },
      {
        questionText: "Concernant la période de fécondité chez la femme: cochez la réponse fausse:",
        options: [
          "Elle dépend de la durée de survie de l'ovocyte ovulé qui est de 24 à 48h.",
          "Elle est calculée en prenant en compte la date de l'ovulation.",
          "Dans le tractus génital féminin les spermatozoïdes deviennent non fécondants after quelques heures.",
          "Elle a une durée qui s'étend en moyenne du 9ème au 16ème jour du cycle.",
          "Elle correspond à la période du cycle ou une grossesse est possible."
        ],
        correctOptionIndexes: [2],
        explanation: "La proposition C est fausse. Au contraire, les spermatozoïdes deviennent fécondants (capacitation) et peuvent survivre plusieurs jours (3 à 5 jours) dans le tractus génital féminin."
      },
      {
        questionText: "Parmi ces propositions concernant les conditions de la fécondation, laquelle est fausse?",
        options: [
          "Le pH vaginal est défavorable à la survie des spermatozoïdes.",
          "L’ovocyte est fécondé du 9ème au 16ème jour du cycle.",
          "Les spermatozoïdes sont décapacités dans les voies génitales féminines.",
          "Les spermatozoïdes présentent une mobilité progressive dans les voies génitales de la femme.",
          "Une centaine de spermatozoïdes entourent l'ovocyte au niveau du 1/3 externe de la trompe."
        ],
        correctOptionIndexes: [2],
        explanation: "Les spermatozoïdes subissent une capacitation (ils deviennent aptes à féconder) dans les voies génitales féminines, ils ne sont pas 'décapacités'."
      },
      {
        questionText: "Concernant le déroulement de la fécondation: Cochez la réponse fausse.",
        options: [
          "L'acrosome déverse son contenu suite à la reconnaissance de la glycoprotéine ZP3 par le spermatozoïde.",
          "La hyaluronidase dissocie les cellules folliculeuses.",
          "L'ovocyte fécondé se réveille et achève sa deuxième division de méiose.",
          "La réaction acrosomique correspond à une exocytose du contenu de l'acrosome.",
          "La réaction acrosomique se déroule après contact du SPZ avec la MP de l'ovocyte."
        ],
        correctOptionIndexes: [4],
        explanation: "La réaction acrosomique se déroule au contact de la zone pellucide, avant que le spermatozoïde n'atteigne et ne fusionne avec la membrane plasmique (MP) de l'ovocyte."
      },
      {
        questionText: "Au cours de la fécondation quelle structure joue le rôle de barrière d'espèce?",
        options: [
          "La membrane plasmique de l'ovocyte.",
          "La couche de cellules folliculeuses entourant l'ovocyte.",
          "La corona radiata.",
          "La membrane plasmique du spermatozoïde.",
          "La zone pellucide."
        ],
        correctOptionIndexes: [4],
        explanation: "La zone pellucide contient des glycoprotéines (ZP3) qui sont des récepteurs spécifiques à l'espèce, empêchant ainsi la fécondation par des spermatozoïdes d'autres espèces."
      },
      {
        questionText: "Concernant la fécondation: Cochez la réponse juste.",
        options: [
          "A lieu habituellement au niveau du tiers interne de la trompe.",
          "Peut se produire à n'importe quel moment du cycle génital de la femme.",
          "Nécessite la décapacitation des spermatozoïdes au niveau des voies génitales de la femme.",
          "Comporte une digestion partielle de la zone pellucide entourant l'ovocyte.",
          "Débute par la dissociation des cellules folliculeuses entourant l'ovocyte grâce à l'acrosome."
        ],
        correctOptionIndexes: [3],
        explanation: "Pour traverser la zone pellucide, le spermatozoïde libère des enzymes (comme l'acrosine) qui digèrent partiellement cette enveloppe. La fécondation a lieu dans le tiers externe, pendant la période de fécondité, et nécessite la capacitation."
      },
      {
        questionText: "Parmi ces propositions concernant le déroulement de la fécondation : Cochez la réponse juste.\n1. La réaction acrosomique nécessite la reconnaissance de la glycoprotéine ZP3 par le spermatozoïde\n2. Les cellules folliculeuses entourant l’ovocyte sont dissociées par l’acrosine\n3. La zone pellucide est partiellement digérée par l'hyaluronidase\n4. Une centaine de spermatozoïdes décapacités entourent l’ovocyte\n5. La réaction acrosomique correspond à une exocytose du contenu de l’acrosome",
        options: [
          "1,4,5",
          "1,3,5",
          "2,3,5",
          "3,4,5",
          "1,2,4"
        ],
        correctOptionIndexes: [1],
        explanation: "Les propositions 1, 3 et 5 sont justes. C'est la hyaluronidase qui dissocie les cellules folliculeuses (2 faux). Ce sont des spermatozoïdes capacités qui entourent l'ovocyte (4 faux)."
      },
      {
        questionText: "L'activation de l'ovocyte suite à la pénétration du spermatozoïde comporte: Cochez la réponse fausse.",
        options: [
          "L'augmentation de la concentration intra-ovocytaire du calcium",
          "Exocytose des granules corticaux appelée réaction acrosomique.",
          "Formation du pronucleus femelle.",
          "Achèvement de la deuxième division de méiose.",
          "Emission du deuxième globule polaire."
        ],
        correctOptionIndexes: [1],
        explanation: "L'exocytose des granules corticaux est appelée 'réaction corticale', pas 'réaction acrosomique'. La réaction acrosomique concerne le spermatozoïde, avant la fusion."
      },
      {
        questionText: "Le réveil de l'ovocyte suite à la pénétration du spermatozoïde se manifeste par : Cochez la réponse juste.\n1. Reprise et achèvement de la 1ère division de méiose\n2. Augmentation de la concentration intracytoplasmique de calcium\n3. Emission du 2ème globule polaire\n4. Le déclenchement de la réaction acrosomique\n5. Blocage de la polyspermie",
        options: [
          "1, 3, 5",
          "2, 3, 4",
          "1, 4, 5",
          "2, 3, 5",
          "2, 4, 5"
        ],
        correctOptionIndexes: [3],
        explanation: "Le réveil de l'ovocyte inclut l'augmentation du calcium (2), l'achèvement de la méiose II et donc l'émission du 2ème globule polaire (3), et le blocage de la polyspermie via la réaction corticale (5). La méiose I est déjà terminée (1 faux) et la réaction acrosomique concerne le spermatozoïde (4 faux)."
      },
      {
        questionText: "Les événements suivants représentent des conséquences de la fécondation sauf un lequel ?",
        options: [
          "La détermination du sexe du zygote grâce au chromosome sexuel apporté par le spermatozoïde.",
          "La détermination du génome du futur bébé identique à celui des parents.",
          "La formation d'une cellule diploïde appelée zygote.",
          "L'initiation de la segmentation du zygote.",
          "Le blocage de la polyspermie."
        ],
        correctOptionIndexes: [1],
        explanation: "Le génome du futur bébé est unique et non identique à celui de ses parents, car il est le résultat d'une nouvelle combinaison du matériel génétique des deux gamètes."
      },
      {
        questionText: "Les événements suivants caractérisent la 1ère semaine du D.E sauf un, lequel ?",
        options: [
          "La formation du blastocyste.",
          "La fécondation.",
          "La formation du zygote.",
          "La formation de la cavité amniotique.",
          "La migration tubaire."
        ],
        correctOptionIndexes: [3],
        explanation: "La formation de la cavité amniotique est un événement clé qui débute au cours de la deuxième semaine du développement embryonnaire."
      },
      {
        questionText: "La migration tubaire de l'œuf fécondé est facilitée par : cochez la réponse juste.",
        options: [
          "Les battements des cils de l'épithélium tubaire.",
          "La persistance de la zone pellucide autour du zygote.",
          "Le flux du liquide péritonéal vers la cavité utérine.",
          "Le péristaltisme tubaire.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "La migration est un processus actif facilité par les battements ciliaires et les contractions péristaltiques de la trompe. Le flux de liquide et la protection par la zone pellucide y contribuent également."
      },
      {
        questionText: "Concernant la segmentation du zygote : Cochez la réponse fausse.",
        options: [
          "Correspond à des mitoses successives immédiatement après la fécondation.",
          "Les divisions des blastomères sont asynchrones.",
          "C'est un phénomène qui précède la migration tubaire du zygote.",
          "La taille des blastomères est progressivement réduite.",
          "Elle aboutit à la formation de la morula."
        ],
        correctOptionIndexes: [2],
        explanation: "La segmentation (division) et la migration tubaire se produisent simultanément. Le zygote se divise tout en se déplaçant le long de la trompe utérine."
      }
    ]
  },
  {
    title: "La deuxième semaine du développement embryonnaire",
    subject: "embryology",
    questions: [
      {
        questionText: "La nidation : donner la réponse fausse.",
        options: [
          "Se déroule au cours de la 2ème semaine du développement embryonnaire.",
          "S'effectue souvent au niveau de la paroi supéro-postérieur de la muqueuse utérine.",
          "Les interleukines Alpha et Béta interviennent dans son bon déroulement.",
          "Toutes les nidations ectopiques sont des urgences chirurgicales immédiates.",
          "Se déroule au cours de la phase sécrétoire ou post-ovulatoire."
        ],
        correctOptionIndexes: [3],
        explanation: "Toutes les grossesses ectopiques ne sont pas forcément des urgences chirurgicales immédiates. Certaines peuvent être surveillées ou traitées médicalement si elles sont détectées tôt et sans complication grave."
      },
      {
        questionText: "Tous ces phénomènes sont observés au début de la 2ème semaine du développement embryonnaire (entre le 8ème et 10ème jour), sauf lequel ?",
        options: [
          "Transformation du blastocète en vésicule vitelline primaire.",
          "Apparition des villosités trophoblastiques secondaires.",
          "Les amnioblastes sécrètent le liquide amniotique.",
          "Le bouton embryonnaire donne le disque didermique.",
          "Le toit de la cavité amniotique est en contact avec le cytotrophoblaste."
        ],
        correctOptionIndexes: [1],
        explanation: "Les villosités trophoblastiques secondaires, caractérisées par un axe mésenchymateux, apparaissent plus tard, vers le 15ème-16ème jour. Au début de la 2ème semaine, ce sont les villosités primaires qui se forment."
      },
      {
        questionText: "À la fin de la 2ème semaine (entre le 13ème et 15ème jour) : Donnez la réponse fausse.",
        options: [
          "Apparition du mésenchyme extra-embryonnaire.",
          "Transformation de la vésicule vitelline primaire en vésicule vitelline secondaire.",
          "L'orifice d'implantation est obturé par un bouchon fibreux.",
          "L'embryon mesure environ 2,5 mm de diamètre.",
          "La somatopleure est le mésenchyme extra embryonnaire entourant la cavité amniotique."
        ],
        correctOptionIndexes: [2],
        explanation: "Vers J12, l'orifice d'implantation est refermé par la régénération de l'épithélium utérin. Le bouchon fibreux est une étape antérieure qui n'est plus présente à la fin de la 2ème semaine."
      },
      {
        questionText: "Indiquer la proposition exacte concernant la nidation.\n1. Elle nécessite d'abord l'activation du blastocyste.\n2. Le début de la nidation est marqué par l'augmentation de la Beta HCG plasmatique vers le 8ème jour après le pic de LH.\n3. Au cours de la nidation, le blastocyste reste inchangé.\n4. L'implantation s'effectue le plus souvent au niveau de la paroi supérieure et postérieure de l'utérus.\n5. Un taux bas de la progestérone signifie le bon déroulement de la nidation.",
        options: [
          "1,2,3",
          "1,2,4",
          "1,3,4",
          "1,4,5",
          "1,2,4"
        ],
        correctOptionIndexes: [1],
        explanation: "Le blastocyste subit d'importantes transformations (3 faux). Un taux de progestérone élevé est essentiel pour la nidation (5 faux). Les propositions 1, 2 et 4 sont correctes."
      },
      {
        questionText: "Concernant le syncitiotrophoblaste : Cochez la réponse fausse.",
        options: [
          "Il dérive du trophoblaste.",
          "Il est plus développé du côté du disque embryonnaire.",
          "De très nombreuses mitoses sont observées au niveau des cellules syncitiales.",
          "Il se creuse d'espaces lacunaires vers le 10ème jour du développement embryonnaire.",
          "Ses espaces lacunaires communiquent avec les capillaires sinusoïdes maternels entre le 11ème et 13ème du D."
        ],
        correctOptionIndexes: [2],
        explanation: "Le syncitiotrophoblaste est un syncytium, une masse cytoplasmique multinucléée où les cellules ont fusionné. Il n'y a donc pas de division cellulaire (mitose) en son sein. Sa croissance se fait par ajout de cellules provenant du cytotrophoblaste sous-jacent."
      },
      {
        questionText: "Concernant les villosités choriales : Cochez la réponse juste.",
        options: [
          "Les villosités primaires apparaissent vers le 13ème jour développement embryonnaire.",
          "L'axe des villosités primaires est constitué par le cytotrophoblaste.",
          "Des îlots vasculo-sanguins apparaissent dans l'axe des villosités tertiaires.",
          "Vers le 15ème jour du développement embryonnaire se forment les villosités secondaires.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes les propositions sont justes. Les villosités primaires (axe de cytotrophoblaste) apparaissent vers J13. Elles deviennent secondaires avec l'invasion du mésenchyme vers J15, puis tertiaires avec l'apparition des vaisseaux sanguins."
      },
      {
        questionText: "Concernant l'implantation de l'embryon au cours de la 2ème semaine : Cochez la réponse juste.",
        options: [
          "La progestérone est une hormone indispensable à la nidation.",
          "L'épaisseur de l'endomètre augmente au cours de la 2ème phase du cycle menstruel.",
          "Le trophoblaste se différencie en syncitiotrophoblaste et cytotrophoblaste.",
          "La nidation s'accompagne de la formation du disque embryonnaire didermique.",
          "Toutes les propositions précédents sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes ces propositions sont correctes et décrivent les événements et conditions nécessaires à l'implantation durant la 2ème semaine."
      },
      {
        questionText: "Au cours de la 2ème semaine du développement embryonnaire : Cochez la réponse fausse.",
        options: [
          "Le cœlome externe apparaît dans le mésenchyme extra embryonnaire.",
          "La membrane de Heuser délimite la cavité amniotique.",
          "Le trophoblaste se différencie en cytotrophoblaste et syncitiotrophoblaste.",
          "Le disque embryonnaire est didermique.",
          "Le zygote s'implante à la partie supéro-postérieure de la cavité utérine."
        ],
        correctOptionIndexes: [1],
        explanation: "La membrane de Heuser (ou membrane exocœlomique) délimite la vésicule vitelline primaire (ex-blastocèle). La cavité amniotique est délimitée par les amnioblastes et l'épiblaste."
      },
      {
        questionText: "Concernant le syncitiotrophoblaste : Cochez la réponse fausse.",
        options: [
          "Il provient de la différenciation du bouton embryonnaire.",
          "C'est un tissu où on n'observe pas de mitoses.",
          "Il provient de la différenciation du trophoblaste.",
          "Il assure la nidation de l'œuf par érosion de l'endomètre.",
          "Il recouvre les villosités choriales."
        ],
        correctOptionIndexes: [0],
        explanation: "Le syncitiotrophoblaste provient de la différenciation du trophoblaste (la couche cellulaire externe du blastocyste), et non du bouton embryonnaire (masse cellulaire interne qui donnera l'embryon)."
      },
      {
        questionText: "Quelle est la proposition fausse concernant la membrane de Heuser ?",
        options: [
          "Apparaît vers le 9ème - 10ème jours du développement embryonnaire.",
          "Délimite la vésicule vitelline secondaire.",
          "Elle est remplacée complètement par une autre membrane vers le 13ème jours du développement embryonnaire.",
          "Peut persister et donner des kystes exocœlomiques.",
          "Elle est issue de l'hypoblaste."
        ],
        correctOptionIndexes: [1],
        explanation: "La membrane de Heuser délimite la vésicule vitelline primaire. La vésicule vitelline secondaire est une nouvelle cavité qui se forme plus tard."
      },
      {
        questionText: "Le blastocyste subit toutes ces transformations au cours du 8ème jours du développement embryonnaire, sauf une laquelle ?",
        options: [
          "Apparition du cytotrophoblaste.",
          "Mise en place du disque didermique.",
          "Apparition de la cavité amniotique.",
          "Nidation partielle du blastocyste.",
          "Mise en place de la circulation utéro-placentaire."
        ],
        correctOptionIndexes: [4],
        explanation: "La circulation utéro-placentaire primitive se met en place plus tard, vers J11-J13, lorsque les lacunes du syncytiotrophoblaste fusionnent avec les capillaires sinusoïdes de l'endomètre."
      },
      {
        questionText: "Au cours de l'implantation du blastocyste, quel élément joue le rôle principal dans la pénétration de l'endomètre ?",
        options: [
          "L'entoblaste.",
          "L'ectoblaste.",
          "La somatopleure extra-embryonnaire.",
          "Le syncitiotrophoblaste.",
          "La splanchnopleure extra-embryonnaire."
        ],
        correctOptionIndexes: [3],
        explanation: "Le syncytiotrophoblaste est la structure invasive de l'embryon. Il sécrète des enzymes qui digèrent la matrice extracellulaire de l'endomètre, permettant au blastocyste de s'enfouir dans la paroi utérine."
      },
      {
        questionText: "Donner la réponse fausse concernant l'implantation (nidation) de l'œuf fécondé.",
        options: [
          "Commence le 9ème jour du développement embryonnaire et se termine au 15ème jour.",
          "C'est le cytotrophoblaste qui pénètre en premier dans l'épithélium utérin.",
          "Il y accolement du blastocyste à l'épithélium utérin grâce aux molécules d'adhérence puis à des cadhérines.",
          "Au 10ème jour le blastocyste est entièrement enchâssé dans le chorion.",
          "La progestérone et les cytokines sont nécessaires au bon déroulement de la nidation."
        ],
        correctOptionIndexes: [1],
        explanation: "C'est le syncitiotrophoblaste, par ses propriétés invasives, qui pénètre en premier dans l'épithélium utérin, et non le cytotrophoblaste."
      }
    ]
  },
  {
    title: "La troisième semaine du développement embryonnaire",
    subject: "embryology",
    questions: [
      {
        questionText: "Parmi ces propositions concernant la gastrulation, laquelle est fausse ?",
        options: [
          "Le mésoderme apparaît dans la totalité du disque embryonnaire.",
          "L'hypoblaste est remplacé par l'endoderme au début de la gastrulation.",
          "Les cellules épiblastiques migrent à travers la ligne primitive suite à l'inhibition des E-cadhérines.",
          "L'épiblaste devient ectoderme à la fin de la gastrulation.",
          "Le disque embryonnaire devient tridermique suite à la formation du chordo-mésoderme."
        ],
        correctOptionIndexes: [0],
        explanation: "Le mésoderme n'apparaît pas dans la totalité du disque embryonnaire ; il est absent au niveau des membranes buccopharyngienne (en avant) et cloacale (en arrière) où l'ectoderme et l'endoderme restent accolés."
      },
      {
        questionText: "Concernant la mise en place de la chorde, quelle proposition est fausse ?",
        options: [
          "Elle se forme et prolifère en direction crâniale.",
          "Elle se forme par invagination des cellules épiblastiques à travers la ligne primitive.",
          "Elle joue un rôle primordial lors de l'induction neurale.",
          "Elle se met en place au cours de la gastrulation.",
          "Elle évolue en canal, en plaque, puis en tige chordale."
        ],
        correctOptionIndexes: [1],
        explanation: "La chorde (ou notochorde) se forme à partir de l'invagination des cellules épiblastiques au niveau du nœud de Hensen, et non de la ligne primitive."
      },
      {
        questionText: "Parmi ces événements se déroulant à la 3ème semaine du développement embryonnaire, quelle proposition est fausse ?",
        options: [
          "Les gonocytes primordiaux dérivent de l'épiblaste.",
          "Les cellules centrales des îlots de Wolff et Pander forment les cellules souches sanguines.",
          "Les îlots de Wolff et Pander apparaissent dans le mésenchyme intra-embryonnaire.",
          "Les cellules germinales primordiales se regroupent au voisinage de l'allantoïde.",
          "Les villosités choriales tertiaires permettent le début de la circulation extra-embryonnaire."
        ],
        correctOptionIndexes: [2],
        explanation: "Les îlots de Wolff et Pander, qui sont à l'origine des premiers vaisseaux et cellules sanguines, apparaissent dans le mésenchyme extra-embryonnaire, notamment au niveau de la vésicule vitelline."
      },
      {
        questionText: "Concernant l'induction neurale au cours de la 3ème semaine du DE, cocher la réponse fausse.",
        options: [
          "La formation de la plaque neurale se fait sous l'effet inducteur de la chorde.",
          "Le gouttière neurale se forme vers la 22ème jour du développement embryonnaire.",
          "La protéine BMP4 sécrétée par les amnioblastes possède une action neuralisante sur l'ectoderme.",
          "La chorde sécrète des molécules inhibant l'action de la protéine BMP4.",
          "Les cellules des crêtes neurales apparaissent sur les bords de la gouttière neurale."
        ],
        correctOptionIndexes: [2],
        explanation: "La protéine BMP4 a une action anti-neurale (elle favorise la différenciation en épiderme). La chorde induit la formation de la plaque neurale en sécrétant des inhibiteurs de BMP4 (comme Noggin, Chordin), ce qui permet à l'ectoderme de suivre sa voie par défaut, qui est neurale."
      },
      {
        questionText: "Concernant la gastrulation : Cochez la réponse juste.\n1. Elle survient à la fin de la troisième semaine du développement embryonnaire.\n2. Elle correspond à la formation des trois feuillets embryonnaires.\n3. Elle implique des migrations de cellules dans différentes directions.\n4. Elle commence par l'apparition de la ligne primitive.\n5. Elle aboutit à la formation d'un disque embryonnaire tridermique.",
        options: [
          "1, 2, 3",
          "2, 3, 5",
          "2, 3, 4",
          "1, 3, 5",
          "2, 4, 5"
        ],
        correctOptionIndexes: [1],
        explanation: "La gastrulation commence au début de la 3ème semaine (1 faux). Elle aboutit bien à la formation des 3 feuillets (2), par migration cellulaire (3), et forme un disque tridermique (5). L'apparition de la ligne primitive (4) marque le début de la gastrulation."
      },
      {
        questionText: "Concernant la formation de la chorde : Cochez la réponse juste.\n1. Elle se forme à partir du nœud de Hensen.\n2. Elle se dirige en direction crâniale, entre l'ectoderme et l'endoderme.\n3. La plaque chordale se forme après fusion de la partie ventrale du canal chordal avec l'endoderme.\n4. Elle se forme par invagination des cellules épiblastiques à partir de la ligne primitive.\n5. Elle joue un rôle primordial dans l'induction de l'ectoderme.",
        options: [
          "1, 3, 4",
          "2, 3, 5",
          "2, 3, 4",
          "1, 2, 3, 5",
          "2, 4, 5"
        ],
        correctOptionIndexes: [3],
        explanation: "La chorde se forme à partir du noeud de Hensen (1), se dirige en direction crâniale (2), passe par le stade de plaque chordale (3) et a un rôle inducteur sur l'ectoderme (5). Elle ne se forme pas à partir de la ligne primitive elle-même (4 faux)."
      },
      {
        questionText: "Tous ces événements se déroulent à la 3ème semaine du développement embryonnaire, sauf un, lequel ?",
        options: [
          "La mise en place des axes de l'embryon.",
          "L'apparition de la ligne primitive et du nœud de Hensen.",
          "L'induction neurale.",
          "La formation du mésenchyme extra-embryonnaire.",
          "La formation de la chorde."
        ],
        correctOptionIndexes: [3],
        explanation: "La formation du mésenchyme extra-embryonnaire est un événement caractéristique de la deuxième semaine du développement."
      },
      {
        questionText: "Concernant la gastrulation : Cochez la réponse fausse.",
        options: [
          "C'est un événement majeur au cours du développement embryonnaire.",
          "Les cellules hypoblastiques migrent à travers la ligne primitive.",
          "L'hypoblaste est remplacé par des cellules épiblastiques.",
          "Le mésoderme s'étend dans tout le disque embryonnaire sauf au niveau des membranes délicates.",
          "L'ectoderme est le dernier feuillet à se mettre en place."
        ],
        correctOptionIndexes: [1],
        explanation: "Ce sont les cellules de l'épiblaste qui migrent à travers la ligne primitive pour former l'endoderme et le mésoderme. Les cellules de l'hypoblaste sont remplacées et ne migrent pas."
      },
      {
        questionText: "Parmi ces propositions concernant la notochorde, laquelle est fausse ?",
        options: [
          "Elle se forme à partir du nœud de Hensen.",
          "Elle se dirige vers la membrane cloacale.",
          "Elle persiste au cours de l'organogenèse au niveau des disques intervertébraux.",
          "Elle se dirige vers la membrane pharyngienne.",
          "Elle se forme par prolifération des cellules épiblastiques."
        ],
        correctOptionIndexes: [1],
        explanation: "La notochorde se développe en direction crâniale (vers la tête), en direction de la membrane pharyngienne. La membrane cloacale est à l'extrémité caudale (vers la queue)."
      },
      {
        questionText: "Concernant l'épiblaste : Cochez la réponse juste.",
        options: [
          "Il apparaît au cours de la 3ème semaine du développement embryonnaire.",
          "Il constitue le toit de la cavité amniotique.",
          "Il est le siège de l'apparition de la ligne primitive au cours de la 3ème semaine.",
          "est à l'origine des 3 feuillets primitifs de l'embryon.",
          "Les propositions C et D sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "L'épiblaste est le feuillet à l'origine de tout l'embryon. La ligne primitive apparaît en son sein (C), et c'est par la migration de ses cellules que les 3 feuillets (ectoderme, mésoderme, endoderme) sont formés (D)."
      }
    ]
  },
  {
    title: "Le développement embryonnaire (4ème semaine)",
    subject: "embryology",
    questions: [
      {
        questionText: "Concernant la neurulation: Cochez la réponse fausse.",
        options: [
          "Elle débute par l'apparition de la plaque neurale vers la fin de la 3ème semaine du DEV.",
          "Le neuropore antérieur se ferme après le neuropore postérieur.",
          "Les crêtes neurales se détachent des bords de la gouttière neurale.",
          "La fermeture du tube neurale est bidirectionnelle à partir de 21ème jour du DE."
        ],
        correctOptionIndexes: [1],
        explanation: "Le neuropore antérieur (crânial) se ferme avant le neuropore postérieur (caudal), vers le 25ème jour, tandis que le postérieur se ferme vers le 28ème jour."
      },
      {
        questionText: "Parmi les évènements suivants, un seul se déroule au cours de la 4ème semaine du développement embryonnaire lequel?",
        options: [
          "Il y a mise en place de la chorde et du mésoblaste",
          "Le gastroderme va former le tube neural et les crêtes neurale",
          "On assiste à l'apparition de la vésicule vitelline flaire et du coelome externe",
          "Les gonocytes primordiaux apparaissent au voisinage du diverticule allantoïdien"
        ],
        correctOptionIndexes: [1],
        explanation: "La neurulation, formation du tube neural et des crêtes neurales à partir de l'ectoderme (neurectoderme), est un événement majeur de la 4ème semaine. Les autres événements sont caractéristiques des 2ème et 3ème semaines."
      },
      {
        questionText: "Concernant le développement des 3 feuillets embryonnaires: Cochez la combinaison juste.\n1. Les placodes sont des épaississements localisés de l'ectoderme.\n2. Le feuillet mésodermique dans sa partie para-axiale subit une métamérisation.\n3. L'endoderme dans sa portion antérieure communique avec la vésicule ombilicale.\n4. Entre la splanchnopleure et somatopleure de la lame latérale se trouve le cœlome intra-embryonnaire.\n5. Le feuillet ectodermique donnera le neurectoderme et l'ectoderme de surface.",
        options: [
          "1, 2, 3",
          "2, 4, 5",
          "1, 2, 4",
          "3, 4, 5",
          "1, 2, 4, 5"
        ],
        correctOptionIndexes: [4],
        explanation: "La proposition 3 est fausse, c'est l'intestin moyen qui communique avec la vésicule ombilicale via le canal vitellin. Toutes les autres propositions (1, 2, 4, 5) sont correctes."
      }
    ]
  },
  {
    title: "L'appareil branchial",
    subject: "embryology",
    questions: [
      {
        questionText: "Concernant les arcs branchiaux : Cochez la réponse juste.",
        options: [
          "Chaque arc est composé par un contingent musculaire propre, un nerf, une artère et un cartilage.",
          "Des cellules des crêtes neurales migrent dans les arcs branchiaux contribuent à la formation du squelette de la face.",
          "Le processus mandibulaire forme le marteau et l'étrier.",
          "Le nerf facial correspond au 3ème arc branchial.",
          "L'os hyoïde provient du 2ème arc branchial."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "A et B sont correctes. C est faux (l'étrier vient du 2ème arc). D est faux (le nerf facial est du 2ème arc). E est faux (l'os hyoïde vient des 2ème et 3ème arcs)."
      },
      {
        questionText: "L'épiglotte prend naissance à partir de : Cochez la réponse juste.",
        options: [
          "Du 1er arc branchial.",
          "Du massif médian du 2ème arc.",
          "Du massif médian du 4ème arc.",
          "De la copula.",
          "Du massif médian du 3ème arc."
        ],
        correctOptionIndexes: [2],
        explanation: "L'épiglotte se développe à partir de l'éminence hypobranchiale, principalement de la partie issue du 4ème arc branchial."
      },
      {
        questionText: "Parmi les propositions suivantes concernant le premier arc branchial. Indiquez celle qui est juste.",
        options: [
          "Son processus mandibulaire est à l'origine de l'os zygomatique.",
          "Il est à l'origine des 3 os de l'oreille moyenne.",
          "Il est innervé par le nerf facial.",
          "Il est également nommé cartilage de Reichert.",
          "Il participe à la formation du ligament sphéno-mandibulaire."
        ],
        correctOptionIndexes: [4],
        explanation: "Le premier arc (cartilage de Meckel) donne le marteau et l'enclume, et participe à la formation du ligament sphéno-mandibulaire. L'os zygomatique vient du processus maxillaire. Il est innervé par le trijumeau (V). Le cartilage de Reichert correspond au 2ème arc."
      }
    ]
  },
  {
    title: "Les malformations congénitales",
    subject: "embryology",
    questions: [
      {
        questionText: "Concernant les causes génétiques des malformations : Cochez la réponse juste.",
        options: [
          "Les mutations génétiques portent sur la composition des molécules d'ADN.",
          "On réalise un arbre généalogique pour évaluer le risque des mutations sur la descendance.",
          "On réalise un caryotype pour rechercher des aberrations chromosomiques.",
          "Les anomalies des chromosomes peuvent survenir lors de la gamétogenèse.",
          "Toutes les propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Toutes ces propositions sont correctes et décrivent les différents aspects et outils d'étude des causes génétiques des malformations."
      },
      {
        questionText: "Concernant les facteurs tératogènes : Cochez la réponse fausse.",
        options: [
          "La dépakine utilisée pour traiter l'épilepsie augmente le risque de spina-bifida.",
          "Un médicament est mis sur le marché après plusieurs essais de tératogénicité.",
          "La thalidomide a provoqué une épidémie de phocomélie dans les années 60.",
          "Une exploration radiologique chez la femme enceinte peut avoir un effet tératogène.",
          "La tératogénicité d'un facteur est sa capacité à causer un avortement."
        ],
        correctOptionIndexes: [4],
        explanation: "La tératogénicité est la capacité d'un agent à provoquer des malformations congénitales (anomalies du développement), et non spécifiquement un avortement, bien que cela puisse en être une conséquence."
      },
      {
        questionText: "Les propositions suivantes concernant les malformations congénitales sont justes, sauf une. laquelle?",
        options: [
          "Ce sont des anomalies survenant in utero ou bien liées à une affection post-natale.",
          "Elles peuvent être liées à l'état de santé de la mère.",
          "Elles ne sont pas toujours héréditaires.",
          "Les embryopathies sont plus graves que les fœtopathies.",
          "Elles sont dans 40% à 60% des cas de cause inconnue."
        ],
        correctOptionIndexes: [0],
        explanation: "Une malformation congénitale est par définition une anomalie présente à la naissance, survenue pendant le développement prénatal (in utero). Elle n'est pas liée à une affection post-natale."
      }
    ]
  },
  {
    title: "Annexes embryonnaires et Les cellules souches",
    subject: "embryology",
    questions: [
      {
        questionText: "Tous ces éléments font partie du placenta sauf un, lequel ?",
        options: [
          "Les villosités secondaires",
          "Les chambres inter-villeuses",
          "Le cytotrophoblaste",
          "Le syncytiotrophoblaste",
          "Le chorion chevelu"
        ],
        correctOptionIndexes: [0],
        explanation: "Les villosités secondaires sont un stade de développement transitoire. Le placenta fonctionnel est constitué de villosités tertiaires. Les autres éléments sont des composants du placenta mature."
      },
      {
        questionText: "Cochez la réponse juste à propos de la structure de la vésicule vitelline.",
        options: [
          "Elle possède une paroi faite du mésenchyme intra-embryonnaire et de l'entoblaste",
          "Elle communique avec l'intestin primitif postérieur",
          "La composante entoblastique donne les îlots de Wolff et Pander",
          "Elle est issue de l'hypoblaste",
          "Elle dégénère à partir de la 2ème semaine et sera incluse dans le cordon ombilical"
        ],
        correctOptionIndexes: [3],
        explanation: "La vésicule vitelline (ou lécithocèle) se forme à partir des cellules de l'hypoblaste qui tapissent l'ex-blastocèle. Elle communique avec l'intestin moyen. Les îlots de Wolff et Pander sont d'origine mésenchymateuse."
      },
      {
        questionText: "Cochez la réponse fausse à propos du cordon ombilical.",
        options: [
          "Il contient les vestiges de la portion embryonnaire de l'allantoïde",
          "Il contient les vaisseaux ombilicaux",
          "Il contient les vestiges de la vésicule vitelline secondaire",
          "Il relie la face maternelle du placenta au fœtus",
          "Les vaisseaux ombilicaux sont contenus dans la gelée de Wharton"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cordon ombilical relie la face fœtale du placenta à l'ombilic du fœtus, pas la face maternelle."
      },
      {
        questionText: "Toutes ces structures correspondent à des annexes embryonnaires sauf une, laquelle ?",
        options: [
          "L'amnios et la cavité amniotique",
          "Les caduques pariétales et basilaires",
          "La vésicule vitelline",
          "L'allantoïde",
          "Le placenta et le cordon ombilical"
        ],
        correctOptionIndexes: [1],
        explanation: "Les caduques (basilaire, ovulaire, pariétale) sont des modifications de l'endomètre utérin maternel en réponse à la grossesse. Elles sont donc d'origine maternelle, et non des annexes embryonnaires."
      },
      {
        questionText: "Concernant la cavité amniotique : Cochez la réponse fausse.",
        options: [
          "Elle se met en place à partir du 8ème jour du développement embryonnaire",
          "Elle est délimitée par des cellules appelées amnioblastes",
          "Elle augmente considérablement de volume au cours de la 3ème semaine du DI",
          "Elle assure la protection du fœtus au cours du développement embryonnaire",
          "Elle est remplie de liquide amniotique"
        ],
        correctOptionIndexes: [2],
        explanation: "La cavité amniotique augmente de volume de façon très importante, mais cette croissance spectaculaire se produit surtout à partir de la 4ème semaine, notamment avec le processus de délimitation de l'embryon."
      },
      {
        questionText: "Le placenta est un organe : Cochez la réponse juste.",
        options: [
          "D'échange entre le fœtus et la maman",
          "Hémochorial",
          "Chorio-allantoïdien",
          "Villeux",
          "Toutes ces propositions sont justes."
        ],
        correctOptionIndexes: [4],
        explanation: "Le placenta humain possède toutes ces caractéristiques : il est le site d'échange, de type hémochorial (contact direct entre sang maternel et chorion), chorio-allantoïdien (vascularisation issue de l'allantoïde) et villeux (structuré en villosités)."
      },
      {
        questionText: "Concernant la cellule souche IPS : Cochez la réponse juste.",
        options: [
          "C'est une cellule souche multipotente",
          "Provient d'une cellule souche adulte",
          "Pose des problèmes éthiques",
          "Elles peuvent donner tous les types de cellules de l'organisme",
          "C'est une cellule induite et non naturelle"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Les cellules iPS sont des cellules pluripotentes (D), pas multipotentes. Elles sont créées artificiellement (E) à partir de cellules adultes (B), ce qui évite les problèmes éthiques liés à l'utilisation d'embryons (C faux)."
      },
      {
        questionText: "Parmi ces propositions lesquelles correspondent à des avantages des cellules souches embryonnaires ?",
        options: [
          "Grande capacité de prolifération in vitro",
          "Elles gardent leur caractère de pluripotence lors de leur multiplication",
          "Ne présentent pas de risque lors de leur prolifération",
          "Présentent un risque de rejet",
          "Présentent un risque carcinogène élevé"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les avantages des cellules souches embryonnaires sont leur grande capacité de prolifération et le maintien de leur pluripotence. Leurs inconvénients majeurs sont le risque de rejet immunitaire (4) et le risque de former des tumeurs (tératomes) (5)."
      },
      {
        questionText: "Parmi ces cellules souches, lesquelles sont multipotentes ?",
        options: [
          "Les cellules embryonnaires (ES).",
          "Les cellules fœtales somatiques.",
          "Les cellules germinales.",
          "Les cellules IPS.",
          "Les cellules MAPC."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Les cellules fœtales somatiques et les cellules MAPC (Multipotent Adult Progenitor Cells) sont multipotentes. Les cellules ES et iPS sont pluripotentes."
      }
    ]
  }
];

module.exports = embryologyQuizzes;