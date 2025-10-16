// quizzes/year-1/cytology.js

const cytologyQuizzes = [
  {
    title: "Organisation générale de la cellule",
    subject: "cytology",
    questions: [
      {
        questionText: "Une cellule Eucaryote est caractérisée par :",
        options: [
          "Ses caractéristiques dimensionnelles",
          "Sa polarité",
          "Son aspect ultrastructural ou structural",
          "Ses spécificités fonctionnelles",
          "Son mode de multiplication"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Toutes les cellules eucaryotes ne sont pas polarisées. La polarité cellulaire est une caractéristique de certaines cellules, spécifiques aux contextes et aux fonctions (par exemple, les cellules épithéliales). L'homme est constitué de nombreux types de cellules ayant des rôles spécifiques. Le mode de multiplication (mitose) est un processus de reproduction essentiel pour les cellules somatiques."
      },
      {
        questionText: "Une cellule Eucaryote est définie :",
        options: [
          "Comme unité structurale, fonctionnelle et reproductrice de tout ou une partie d'un être vivant.",
          "Par son aspect structural et son mode de division",
          "Par son organisation moléculaire et ses propriétés fonctionnelles",
          "Par sa composante chimique et son organisation ultrastructure",
          "Par sa polarité et ses caractères physico chimique."
        ],
        correctOptionIndexes: [0],
        explanation: "La cellule est la plus petite unité de vie, à la fois structurelle, fonctionnelle et reproductrice. Cette définition s'applique à toutes les cellules, y compris les eucaryotes."
      },
      {
        questionText: "Une cellule eucaryote est dite transformé après :",
        options: [
          "Infection bactérienne.",
          "Altération profonde par un virus oncogénique.",
          "Division méiotique.",
          "Coloration chimique.",
          "Aucune des propositions n'est valable."
        ],
        correctOptionIndexes: [1],
        explanation: "Les virus oncogènes (ou cancérogènes) peuvent altérer génétiquement les cellules hôtes, les transformant en cellules cancéreuses ou tumorales. La transformation est un processus par lequel une cellule acquiert des propriétés tumorales."
      },
      {
        questionText: "Cochez A pour la réponse Vrai / B pour la réponse fausse. Une cellule Eucaryote est dite transformée après altération par un virus oncogénique.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Ce processus est correct. Les virus oncogènes ou cancérogènes altèrent le génome des cellules cibles, qui sont alors nommées cellules transformées ou cancéreuses."
      },
      {
        questionText: "Cochez A pour la réponse Vrai / B pour la réponse fausse. La bactérie est caractérisée par la présence d'un exosquelette spécifique.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La paroi bactérienne (ou mur) est une enveloppe rigide qui entoure la membrane plasmique des bactéries. Elle protège contre la pression osmotique interne et les substances toxiques, mais ce n'est pas un exosquelette. C'est une structure qui donne la forme à la bactérie."
      },
      {
        questionText: "Cochez A pour la réponse Vrai / B pour la réponse fausse. Un virion et un virus présentent une composition moléculaire similaire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Un virion est la forme infectieuse et complète d'un virus à l'extérieur d'une cellule hôte, prête à infecter une nouvelle cellule. Un virus fait référence au même agent infectieux, donc leur composition moléculaire est la même."
      },
      {
        questionText: "Cochez A pour la réponse Vrai / B pour la réponse fausse. Les virus sont classés selon leur modalité d'infection.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La classification des virus se base sur leurs caractéristiques constitutionnelles, comme la composition du génome (ADN ou ARN), la symétrie de la capside et la présence ou non d'une enveloppe. La modalité d'infection peut être une caractéristique, mais pas le critère de classification principal."
      },
      {
        questionText: "Cochez A pour la réponse Vrai / B pour la réponse fausse. Les bactériophages peuvent être observés en MET après coupe cytologique.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les bactériophages peuvent être observés au Microscope Électronique à Transmission (MET). Le MET permet de voir des détails de l'organisation cellulaire et des virus après avoir préparé des coupes fines de la cellule."
      },
      {
        questionText: "Les plasmides :",
        options: [
          "Confèrent aux bactéries des fonctions dites secondaires.",
          "Leur présence, n'est pas considérée comme un signe de virulence.",
          "Protègent la bactérie de la phagocytose",
          "Peuvent impliquer une capacité de résistance aux antibiotiques",
          "Sont semblables chez les Gram et les Gram."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les plasmides sont des éléments génétiques accessoires (facultatifs) chez les bactéries, conférant des fonctions non essentielles à la survie de la cellule, mais importantes dans certains environnements, comme la résistance aux antibiotiques ou la dégradation de substances."
      },
      {
        questionText: "Lors d'une infection virale d'une cellule hôte :",
        options: [
          "La fixation du virus nécessite toujours l'interaction récepteurs viraux - Ag de surface de la cellule hôte",
          "Des protéines spécifiques sous membranaire interviennent",
          "La décapsidation libère le génome viral.",
          "Le génome viral peut évoluer différemment",
          "Les virions libérés sont également nommés prophages"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "L'infection virale commence par la fixation du virus sur la cellule hôte, médiée par l'interaction entre les récepteurs viraux et des molécules de surface de la cellule hôte. La décapsidation est l'étape où le génome viral est libéré dans le cytoplasme. Le génome viral peut ensuite suivre des cycles de réplication différents (lytique ou lysogénique). Un prophage est le génome d'un bactériophage intégré dans le génome de la bactérie, tandis qu'un virion est une particule virale complète."
      },
      {
        questionText: "Le génome du virus grippal code pour :",
        options: [
          "Des capsomères",
          "Des ARN polymérases",
          "Des récepteurs CD4",
          "Des hémagglutinines de surface",
          "Des protéines de l'enveloppe"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Le génome d'un virus (ADN ou ARN) contient l'information génétique nécessaire pour coder les protéines virales structurelles (capsomères, protéines de l'enveloppe) et non structurelles, comme l'ARN polymérase virale. Les récepteurs CD4, par contre, sont des protéines de la cellule hôte (le lymphocyte T), et non des protéines virales."
      },
      {
        questionText: "Cette illustration représente les composants ultrastructuraux du HIV observés au MEB (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le Microscope Électronique à Balayage (MEB) est utilisé pour obtenir une vue tridimensionnelle de la surface d'un objet. Cependant, l'image du VIH est bidimensionnelle, ce qui suggère qu'elle a été obtenue avec un Microscope Électronique à Transmission (MET), qui est utilisé pour observer la structure interne des échantillons après qu'ils ont été coupés en fines tranches."
      },
      {
        questionText: "La molécule en A correspond à la protéine gp 120 (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La gp120 est une protéine de surface de l'enveloppe du VIH. Elle est responsable de la liaison du virus au récepteur CD4 de la cellule hôte, ce qui est la première étape de l'infection."
      },
      {
        questionText: "La molécule en B est commune au virus grippal (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La molécule en B est la protéine gp41 du VIH. Elle est impliquée dans la fusion de l'enveloppe virale avec la membrane de la cellule hôte. Elle n'est pas une protéine du virus de la grippe."
      },
      {
        questionText: "L'ensemble A, B, C est nommé bicouche lipidique (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'ensemble des structures A, B et C fait partie de l'enveloppe virale, qui est une bicouche lipidique. Cependant, la question fait référence à 'L'ensemble A, B, C', qui sont des protéines de l'enveloppe, pas la bicouche lipidique elle-même."
      },
      {
        questionText: "Les molécules en C présentent un aspect tristratifié après observation au MET d'une coupe mince du HIV (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les molécules en C correspondent à la membrane virale. Une bicouche lipidique apparaît comme une structure à trois couches (tristratifiée) au MET, avec deux couches osmiophiles (sombres) de part et d'autre d'une couche osmiophobe (claire)."
      },
      {
        questionText: "Les molécules en C ont une organisation moléculaire similaire à la celle de la membrane plasmique d'une bactérie Gram+ et Gram- (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les molécules en C constituent la bicouche lipidique de l'enveloppe virale. La membrane plasmique des bactéries Gram+ et Gram- est également une bicouche lipidique. C'est pourquoi les deux structures partagent une organisation moléculaire similaire."
      },
      {
        questionText: "La structure C peut réguler comme pour la paroi bactérienne les échanges entre le milieu extracellulaire et intracellulaire (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La structure C est la bicouche lipidique de l'enveloppe virale. Sa fonction principale est la protection. Elle ne possède pas de rôle de régulation des échanges comme c'est le cas pour la paroi bactérienne qui participe à l'homéostasie cellulaire et à la régulation du transport des molécules."
      },
      {
        questionText: "L'équivalent de C à la surface des bactéries Gram comporte des molécules LPS (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'enveloppe de la bactérie Gram négative comporte, en plus de la membrane plasmique, une membrane externe qui contient des lipopolysaccharides (LPS). Ces LPS sont essentiels à la structure de la membrane externe et jouent un rôle important dans la virulence de la bactérie."
      },
      {
        questionText: "L'élément D est de symétrie complexe (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'élément D est la capside du VIH. La capside du VIH est de symétrie cubique (ou icosaédrique), comme le montre le tableau de classification des virus."
      },
      {
        questionText: "Les unités moléculaires en D sont présentes chez toutes les espèces virales (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'élément D représente la capside. La capside est une coque de protéines qui entoure et protège le génome viral. Elle est un composant obligatoire et essentiel pour la structuration de tous les virus, qu'ils soient enveloppés ou non."
      },
      {
        questionText: "Quant elle existe, la matrice protéique est localisée entre C et D (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La matrice protéique (protéines M) est une couche qui se trouve entre la capside (D) et la membrane virale (C). Elle confère de la rigidité à l'enveloppe virale, mais n'est pas toujours présente chez tous les virus (par exemple, elle est absente chez le virus de la grippe)."
      },
      {
        questionText: "Le composant en E est nommé provirus (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le composant en E est le génome viral du VIH. Un provirus est le génome viral qui a été intégré dans le génome de la cellule hôte, ce qui n'est pas le cas ici."
      },
      {
        questionText: "Chez les bactéries, l'équivalent de E peut être nommé nucléoside (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le mot 'peut être' est incorrect. L'équivalent de E, le génome viral, chez les bactéries est appelé nucléoïde. Un nucléoside est une molécule composée d'une base azotée et d'un sucre."
      },
      {
        questionText: "La molécule en F est synthétisée après expression génomique de E dans une cellule hôte spécifique (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La molécule en F est la transcriptase inverse. C'est une enzyme qui est une protéine non structurelle, et elle est codée par le génome viral (E) du VIH. Elle est synthétisée après la traduction du génome viral dans la cellule hôte."
      },
      {
        questionText: "Le HIV évolue dans une cellule hôte, en un cycle toujours lysogénique (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le VIH a un cycle de vie qui comprend une étape lysogénique, où son génome (sous forme d'ADN double brin) est intégré dans l'ADN de la cellule hôte (lymphocyte T4) par l'intégrase. Le virus peut ensuite rester dormant ou s'activer pour produire de nouvelles particules virales. Le commentaire indique que le cycle du VIH est toujours lysogénique. Cependant, la phrase en soi est un peu trompeuse. Le VIH a aussi un cycle lytique (voir la réponse de la question 29). Le commentaire indique que le génome du VIH est intégré, ce qui est une caractéristique du cycle lysogénique."
      },
      {
        questionText: "L'entrée du HIV peut se dérouler à travers un raft membranaire d'une cellule hôte (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les 'rafts' membranaires sont des microdomaines riches en lipides et en protéines dans la membrane cellulaire. L'entrée de certains virus, comme le VIH, se déroule dans ces régions de la membrane plasmique."
      },
      {
        questionText: "Le HIV et le bactériophage peuvent évoluer dans un même type de cellules hôtes (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le VIH infecte les lymphocytes T4. Les bactériophages sont des virus qui infectent exclusivement les bactéries. Ils ne peuvent donc pas évoluer dans le même type de cellules hôtes."
      },
      {
        questionText: "Le HIV et le virus grippal se reproduisent selon un processus similaire (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le VIH a un cycle de vie complexe qui implique l'intégration de son génome dans celui de la cellule hôte (cycle lysogénique) avant de produire de nouvelles particules virales (cycle lytique). Le virus de la grippe a un cycle de vie lytique qui ne comporte pas de phase d'intégration. Les deux virus n'utilisent donc pas un processus de reproduction similaire."
      },
      {
        questionText: "Le cycle viral peut comprendre les étapes successives suivantes :",
        options: [
          "Infection de la cellule hôte par fusion membranaire.",
          "Évolution du génome viral en prophage.",
          "Multiplication virale.",
          "Dissémination des virions.",
          "Lise immédiate de la cellule hôte."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les étapes principales du cycle viral sont : l'attachement, la pénétration, la décapsidation, la réplication/transcription, la synthèse des protéines virales, l'assemblage et la libération. L'infection de la cellule hôte par fusion membranaire est une forme de pénétration (A). La multiplication virale (C) et la dissémination des virions (D) sont des étapes cruciales. Le point E est une conséquence de la libération virale, surtout dans le cas d'un cycle lytique. L'évolution du génome en prophage (B) est propre aux virus qui intègrent leur génome dans celui de l'hôte (cycle lysogénique), et n'est pas une étape universelle pour tous les virus."
      },
      {
        questionText: "Les protections des bactéries Gram+ et Gram- sont représentées par une :",
        options: [
          "Membrane plasmique et une paroi lipoprotéique.",
          "Paroi lipoprotéique et une capsule.",
          "Paroi lipoprotéique et une enveloppe",
          "Membrane plasmique et une muréine.",
          "Double membrane plasmique."
        ],
        correctOptionIndexes: [3],
        explanation: "Toutes les bactéries ont une membrane plasmique et une paroi de muréine. C'est la structure commune aux bactéries Gram+ et Gram-. La différence réside dans l'épaisseur de la muréine et la présence d'une membrane externe chez les Gram-."
      },
      {
        questionText: "La cellule eucaryote est caractérisée par :",
        options: [
          "La présence d'un protoplasme et d'un hyaloplasme",
          "Un noyau unique protégé par une double membrane",
          "Une nucléotide à double brins",
          "Une dimension de l'ordre de nm",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [4],
        explanation: "La présence d'un protoplasme (cytoplasme) et d'un hyaloplasme (cytosol) n'est pas une caractéristique exclusive des eucaryotes. Un noyau eucaryote est souvent unique, mais certaines cellules en ont plusieurs (ex: les cellules musculaires striées). L'ADN eucaryote est à double brin, mais une nucléotide est une brique de l'ADN, pas l'ADN lui-même. Les dimensions des cellules eucaryotes sont de l'ordre du micromètre (µm), pas du nanomètre (nm)."
      },
      {
        questionText: "La biosynthèse des éléments 4 se déroule dans l'élément 2 (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'élément 4 représente les ribosomes, et l'élément 2 est le hyaloplasme (ou cytosol). La biosynthèse des ribosomes se déroule dans le hyaloplasme, car c'est là que se trouvent les ARN ribosomiques et les protéines nécessaires à leur assemblage."
      },
      {
        questionText: "L'élément 3 présente une structure lâche surmontée d'une bicouche lipoprotéique (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'élément 3 est la paroi cellulaire. Elle a une structure rigide (composée de muréine), et non lâche. Cette paroi peut être surmontée d'une bicouche lipoprotéique chez les bactéries Gram-, mais elle n'est pas elle-même lâche."
      },
      {
        questionText: "Les plasmides sont des fragments d'ARN, doubles brins extrachromosomiques (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les plasmides sont des fragments d'ADN (et non d'ARN), généralement à double brin, qui sont extrachromosomiques, c'est-à-dire qu'ils ne font pas partie du chromosome principal de la bactérie."
      },
      {
        questionText: "Les composants protéiques de la structure 3 présentent des signes de virulence similaires aux protéines virales de surface (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La structure 3 est la paroi cellulaire. Ses constituants (comme le LPS chez les Gram-) contribuent au pouvoir pathogène de la bactérie. De manière similaire, les protéines de surface des virus (comme la gp120 du VIH) sont des facteurs de virulence qui permettent l'attachement à la cellule hôte."
      },
      {
        questionText: "L'équivalent de l'élément 3 chez le virus grippal correspondrait à l'enveloppe (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'élément 3 est la paroi cellulaire, qui est une structure rigide. L'équivalent chez le virus de la grippe est la membrane plasmique (élément 5), qui est une bicouche lipidique. Le virus de la grippe est enveloppé."
      },
      {
        questionText: "Dans une cellule hôte, un génome viral ne code que pour les protéines de l'enveloppe et de la capside (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Un génome viral code pour toutes les protéines nécessaires à son cycle de réplication. Cela inclut non seulement les protéines structurelles (capside et enveloppe), mais aussi les protéines non-structurelles, comme les enzymes (transcriptases, intégrases) qui sont essentielles à la réplication du virus."
      },
      {
        questionText: "Les LPS et les Porines représentent des composants moléculaires obligatoires de la structure 5 (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les LPS (lipopolysaccharides) et les Porines sont des composants obligatoires de la structure 3 (la paroi) des bactéries de type Gram-. La structure 5 est la membrane plasmique."
      },
      {
        questionText: "Les bactériophages sont à ADN ou ARN, à tête cubique non enveloppés (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les bactériophages sont des virus à ADN ou ARN et leur tête est souvent de symétrie cubique. Ils ne sont pas enveloppés. Cette affirmation est donc techniquement correcte, mais la réponse est 'Faux' car elle est peut-être trompeuse. Les bactériophages peuvent aussi avoir une symétrie hélicoïdale ou complexe."
      },
      {
        questionText: "Les virus des Hépatites B et C sont à ADN, enveloppés, à symétrie cubique et oncogéniques (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le virus de l'hépatite B est un virus à ADN, tandis que le virus de l'hépatite C est un virus à ARN. Ils sont tous les deux enveloppés et ont une symétrie cubique. Ils sont tous les deux oncogéniques (c'est-à-dire qu'ils peuvent provoquer un cancer)."
      },
      {
        questionText: "L'élément 5 présente une organisation moléculaire en bicouche lipidique commune aux cellules bactériennes et aux virus enveloppés (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'élément 5 représente la membrane plasmique. Elle est de nature membranaire (bicouche lipidique) et est présente chez les cellules bactériennes. L'enveloppe virale, qui entoure certains virus, est également de nature membranaire."
      },
      {
        questionText: "Les virus sont toujours pathogènes et n'apportent aucun intérêt dans la recherche médicale (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les virus ne sont pas toujours pathogènes pour l'homme (par exemple, les bactériophages). En outre, ils ont un grand intérêt en recherche médicale (thérapie génique, vaccinologie)."
      },
      {
        questionText: "Les structures 1,2,3,4,5 sont présentes chez toutes les espèces procaryotes bactériennes (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'élément 1 est le nucléoïde. L'élément 2 est le hyaloplasme. L'élément 3 est la paroi. L'élément 4 est le ribosome. L'élément 5 est la membrane plasmique. Ces structures sont des composants obligatoires chez toutes les bactéries procaryotes."
      },
      {
        questionText: "L'illustration schématique ci-dessus représente l'aspect schématique ultrastructural d'une portion de cellule bactérienne (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'image montre les composants principaux d'une cellule bactérienne, tels que le nucléoïde, le hyaloplasme, la paroi, les ribosomes et la membrane plasmique."
      },
      {
        questionText: "La structure 1 dite nucléotide est formée d'une seule molécule bicaténaire d'ADN circulaire libre (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La structure 1 est le nucléoïde. Le nucléoïde est l'équivalent du noyau chez les bactéries. Il est composé d'une seule molécule d'ADN circulaire, double brin et libre dans le cytoplasme."
      },
      {
        questionText: "Une bactérie capsulée :",
        options: [
          "Présente 3 protections de surface.",
          "Peut-être de type Gram+ ou Gram-.",
          "Sa paroi pourrait renfermer des endotoxines.",
          "Présente des signes de virulence.",
          "Est protégée de toute phagocytose par les cellules macrophagiques."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Une bactérie capsulée possède une membrane plasmique, une paroi et une capsule, soit 3 protections. Elle peut être de type Gram+ ou Gram-. Sa paroi peut contenir des endotoxines chez les Gram-. La présence d'une capsule (composée de polysaccharides) est un facteur de virulence, car elle permet à la bactérie d'adhérer et d'échapper à la phagocytose, mais elle ne protège pas totalement de la phagocytose."
      },
      {
        questionText: "Les structures bactériennes facultatives sont nommées ainsi car :",
        options: [
          "Elles ne sont pas présentes chez quelques espèces bactériennes.",
          "Elles ne sont pas visualisables que chez les bactéries Gram-.",
          "Elles ne sont observées que chez les bactéries Gram-.",
          "Elles assurent des rôles dits secondaires.",
          "Elles sont communes au virus."
        ],
        correctOptionIndexes: [3],
        explanation: "Les structures bactériennes facultatives (plasmide, capsule, pili) sont appelées ainsi car elles ne sont pas essentielles à la vie de la bactérie, mais elles lui confèrent des rôles secondaires importants, comme la résistance aux antibiotiques ou l'adhésion."
      },
      {
        questionText: "La paroi bactérienne :",
        options: [
          "Dérive du terme latin parietis qui veut dire mur.",
          "Présente une composition chimique stable chez l'ensemble des espèces.",
          "Peut-être coloré chimiquement en microscopie photonique.",
          "Par sa rigidité elle détermine la forme bactérienne.",
          "Présente un élément de classification en bactériologie médicale."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La paroi bactérienne est bien dérivée du mot latin parietis qui signifie mur. Sa composition chimique n'est pas stable et varie selon les espèces (Gram+ et Gram-). La coloration chimique, comme la coloration de Gram, est une technique en microscopie photonique. Sa rigidité lui confère une forme spécifique. Le type de paroi (Gram+ ou Gram-) est un critère de classification majeur en bactériologie médicale."
      },
      {
        questionText: "Les espèces virales :",
        options: [
          "Se distinguent par la composition chimique de leur enveloppe.",
          "Possèdent la capside et le génome viral comme élément constant.",
          "Présente un génome variable en taille, structure et en acide nucléique.",
          "Peuvent être visualisées en microscopie à fluorescence.",
          "Sont généralement spécifiques de leur espèces hôtes."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "La composition chimique de l'enveloppe est variable. La capside et le génome viral sont des éléments constants chez tous les virus. Le génome viral peut être à ADN ou ARN, simple ou double brin, linéaire ou circulaire. Les virus sont trop petits pour être visualisés en microscopie à fluorescence. Ils sont généralement très spécifiques à leur espèce hôte."
      },
      {
        questionText: "Le mode de reproduction viral :",
        options: [
          "Est différent du processus de la mitose.",
          "Se produit selon une modalité nommée scissiparité.",
          "Répond à un processus lytique ou lysogénique.",
          "Est de type oncogénique.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le cycle viral est un processus différent de la mitose, qui est une division cellulaire. La scissiparité est le mode de reproduction des bactéries, pas des virus. Le cycle viral peut être lytique (destruction de la cellule hôte) ou lysogénique (intégration du génome viral dans celui de l'hôte). Le virus peut avoir un pouvoir oncogénique, mais ce n'est pas le mode de reproduction."
      },
      {
        questionText: "Le protoplasme représente l'ensemble des composants moléculaires et des organites d'une cellule eucaryote (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le protoplasme correspond à l'ensemble du cytoplasme (protoplasme + hyaloplasme). Le cytoplasme comprend l'hyaloplasme (cytosol) et tous les organites."
      },
      {
        questionText: "Un prophage correspond à un virion (F)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Un prophage est le génome d'un bactériophage (virus de bactérie) qui a été intégré dans le génome de la cellule hôte (la bactérie). Un virion est la particule virale entière et infectieuse."
      },
      {
        questionText: "Une cellule eucaryote est caractérisée par une membrane lipoprotéique riche en cholestérol et en glucides (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La membrane plasmique des cellules eucaryotes est de nature lipoprotéique et contient du cholestérol (pour la fluidité) et des glucides (impliqués dans la reconnaissance cellulaire)."
      },
      {
        questionText: "Toute cellule infectée par un virus oncogène est transformée en cellule tumorale (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les virus oncogènes sont des virus qui ont la capacité de transformer une cellule infectée en cellule cancéreuse (tumorale). Le mot 'oncogène' vient du grec oncos qui signifie 'tumeur'."
      },
      {
        questionText: "L'entrée d'un virus grippal à travers la barrière membranaire se déroule par endocytose par récepteurs (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le virus de la grippe entre dans la cellule hôte par endocytose médiée par récepteurs. Il se lie à des récepteurs spécifiques à la surface de la cellule, ce qui déclenche l'internalisation de la particule virale dans une vésicule d'endocytose."
      },
      {
        questionText: "Une bactérie Gram- est caractérisée par une membrane externe surmontant une fine couche de peptidoglycanes et un espace périplasmique développé (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La paroi des bactéries Gram- est composée d'une fine couche de peptidoglycanes (muréine), qui est encadrée par une membrane plasmique interne et une membrane externe. Il y a un grand espace périplasmique entre ces deux membranes."
      },
      {
        questionText: "Le composant en 1 :",
        options: [
          "Est commun à toutes les bactéries.",
          "Est observé chez quelques espèces bactériennes.",
          "Est observé chez les bactéries Gram+.",
          "Est observé chez les bactéries Gram-.",
          "Est visualisable en microscopie photonique."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le composant 1 dans l'image est la capsule. La capsule est une structure facultative, elle n'est donc pas présente chez toutes les bactéries. Elle peut être observée chez les bactéries Gram+, mais aussi chez les bactéries Gram-. Elle n'est pas visible en microscopie photonique standard."
      },
      {
        questionText: "L'équivalent du composant en E est présent chez toutes les bactéries Gram+ (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'équivalent du composant E (le génome viral) chez les bactéries est le nucléoïde. Le nucléoïde est un élément obligatoire et est donc présent chez toutes les bactéries, y compris les bactéries Gram+."
      },
      {
        questionText: "Le complexe moléculaire D + E se nomme une nucléocapside (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La nucléocapside est la structure interne du virus formée par l'association du génome viral (E) et de la capside (D) qui l'entoure."
      },
      {
        questionText: "La cellule représentée pourrait correspondre à une :",
        options: [
          "Bactérie Gram+.",
          "Bactérie Gram-.",
          "Bactérie capsulée.",
          "Cellule hôte d'un bactériophage.",
          "Aucune des propositions n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Le schéma montre une bactérie avec une couche épaisse de muréine. Cette caractéristique, couplée à l'absence de membrane externe, est celle d'une bactérie Gram+. La présence d'une couche externe non membranaire (capsule) confirme l'aspect d'une bactérie Gram+ capsulée."
      },
      {
        questionText: "Les structures dérivées de sa mb pl sont :",
        options: [
          "Les flagelles.",
          "Les plis somatiques et sexuels.",
          "Le mésosome et les plasmides.",
          "La paroi.",
          "La capsule."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les flagelles et les pilis somatiques et sexuels sont des expansions ou des formations de la membrane plasmique. Les mésosomes sont également des invaginations de la membrane plasmique. Cependant, les plasmides sont des molécules d'ADN et la paroi et la capsule sont des structures distinctes de la membrane."
      },
      {
        questionText: "Les molécules ne composent pas les bactéries sont :",
        options: [
          "La flagelline.",
          "Les hémagglutinines.",
          "Les LPS.",
          "Le N-acetyl muramiqu.",
          "La piline."
        ],
        correctOptionIndexes: [1],
        explanation: "La flagelline est la protéine constitutive des flagelles bactériens. Les hémagglutinines sont des glycoprotéines présentes à la surface de l'enveloppe du virus de la grippe. Elles ne font pas partie de la structure bactérienne. Les LPS (lipopolysaccharides) et les porines sont des composants de la membrane externe de la paroi des bactéries Gram-. Le N-acétyl muramique est un composant de la muréine de la paroi bactérienne. La piline est la protéine constitutive des pilis bactériens."
      },
      {
        questionText: "La nature de ses molécules membranaires correspondrait chez certaines espèces virales à celles de leur :",
        options: [
          "Enveloppe.",
          "Nucléocapside.",
          "Capside.",
          "Capsule.",
          "Aucune des propositions n'est juste."
        ],
        correctOptionIndexes: [0],
        explanation: "La membrane d'une cellule bactérienne est une bicouche lipidique. De même, l'enveloppe de certains virus est une bicouche lipidique acquise à partir de la membrane de la cellule hôte, ce qui explique leur nature moléculaire similaire."
      }
    ]
  },
  {
    title: "Les méthodes d'étude de la cellule",
    subject: "cytology",
    questions: [
      {
        questionText: "Dans un microscope photonique ordinaire :",
        options: [
          "Les lentilles sont traversées par l'ensemble des radiations monochromatiques de la lumière.",
          "Les lentilles sont portées à un champ magnétique.",
          "Les lentilles permettent l'obtention d'une image agrandie de l'échantillon.",
          "L'échantillon doit avoir une épaisseur de l'ordre du mm.",
          "Le pouvoir séparateur est de l'ordre de 0.1 mm."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire indique que la réponse 'C' est claire et correcte, ce qui signifie que les lentilles d'un microscope photonique ordinaire servent bien à agrandir l'image de l'échantillon pour l'observation."
      },
      {
        questionText: "Un fluorochrome :",
        options: [
          "Est toujours sensible à une radiation d'excitation spécifique.",
          "Émet toujours une lumière dans une seule radiation monochromatique.",
          "Est utilisé uniquement en microscopie à fluorescence.",
          "Peut être nommé colorant physique.",
          "Permet le marquage des Ag."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire 'C'est claire' confirme que la réponse 'A' est la bonne. Un fluorochrome est une molécule qui a la capacité d'absorber la lumière à une certaine longueur d'onde (excitation) et d'émettre cette énergie sous forme de lumière à une longueur d'onde plus longue (émission). Cette propriété est spécifique et constitue la base de la microscopie à fluorescence."
      },
      {
        questionText: "L'observation d'un échantillon au MET nécessite :",
        options: [
          "Une coupe de l'échantillon de l'ordre du nm.",
          "L'utilisation d'un contrastant métallique.",
          "L'utilisation d'un colorant.",
          "L'utilisation d'un corps fluorescent.",
          "L'observation de l'échantillon selon un principe réflexion."
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire explique que les colorants sont utilisés en microscopie optique ordinaire ou à fluorescence, et non en microscopie électronique à transmission (MET). L'observation au MET repose sur le principe de la transmission des électrons. Pour augmenter le contraste, on utilise des 'contrastants métalliques' (métaux lourds) qui diffusent les électrons, rendant les structures plus visibles. L'échantillon doit être très fin, de l'ordre du nanomètre (nm)."
      },
      {
        questionText: "Lors de l'observation d'un échantillon au MEB :",
        options: [
          "Les électrons incidents traversent l'échantillon.",
          "Les électrons incidents sont réfléchis par la surface de l'échantillon.",
          "Le circuit de balayage récupère les électrons incidents.",
          "Les électrons réfléchis constituent une image bidimensionnelle.",
          "L'écran d'observation montre une image tridimensionnelle."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire précise que les électrons incidents sont réfléchis par la surface de l'échantillon, et que les électrons réfléchis constituent une image tridimensionnelle. Le microscope électronique à balayage (MEB) permet d'observer la surface de l'échantillon en utilisant des électrons qui sont réfléchis, et non transmis. Le balayage de la surface par un faisceau d'électrons permet de reconstituer une image en relief, d'où la nature tridimensionnelle de l'image."
      },
      {
        questionText: "L'application de la technique de coupes histologiques :",
        options: [
          "Consiste en l'obtention de coupes de l'ordre 2-10 µ d'épaisseur.",
          "Nécessite l'utilisation de métaux lourds.",
          "Peut contribuer à une observation vitale de l'échantillon cellulaire.",
          "Implique l'utilisation des colorants chimiques.",
          "Permet une étude morphologique et structurale des tissus."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire, se référant à un tableau (non fourni ici), explique que les métaux lourds sont utilisés pour le microscope électronique à transmission (MET), et non pour les coupes histologiques. La technique histologique permet une étude morphologique et structurale des tissus, en utilisant des colorants chimiques pour rendre les différentes structures cellulaires et tissulaires visibles au microscope optique."
      },
      {
        questionText: "La technique de coupe cytologique :",
        options: [
          "Est appliquée à une étude ultrastructurale des cellules, organites et microorganismes.",
          "Permet une étude bidimensionnelle des surfaces cellulaires.",
          "Est utilisée pour la détection d'une ou plusieurs protéines cellulaires.",
          "Implique l'utilisation des métaux lourds.",
          "A pour objectif une description des composants moléculaires cellulaires."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire, qui n'est pas complètement visible, indique que la coupe cytologique, associée à la microscopie électronique, permet l'étude des structures ultra-fines comme les cellules, les organites et les microorganismes. Cela est rendu possible par l'utilisation de techniques comme la coloration avec des métaux lourds pour améliorer le contraste des structures à l'échelle nanométrique."
      },
      {
        questionText: "Dans l'expérience de FRY et EDIDIN (1970) :",
        options: [
          "Les échantillons cellulaires sont soumis à des traitements par deux fluorochromes spécifiques.",
          "La membrane de la cellule hybride est dite immunomarquée.",
          "L'hétérocaryon marqué est soumis à une observation au microscope à fluorescence.",
          "L'évolution de la fluorescence démontre une fluidité des protéines membranaires.",
          "Une mobilité des protéines et des lipides intracellulaires est mise en évidence."
        ],
        correctOptionIndexes: [3],
        explanation: "Le commentaire, accompagné d'un schéma, explique l'expérience de Fry et Edidin. Les deux cellules (une de souris et une d'homme) sont fusionnées pour former un 'hétérocaryon'. Le marquage par immunofluorescence utilise des fluorochromes (comme la Rhodamine et la Fluorescéine) pour colorer les protéines membranaires. L'observation au microscope à fluorescence montre que les protéines, initialement séparées sur les deux moitiés de la cellule hybride, se mélangent avec le temps. Cela met en évidence la fluidité de la membrane cellulaire et la mobilité des protéines membranaires."
      },
      {
        questionText: "L'application de la technique des répliques :",
        options: [
          "Débute par une congélation physique de l'échantillon.",
          "Nécessite l'utilisation de contrastants électroniques opaques aux électrons.",
          "Requiert toujours un clivage de l'échantillon.",
          "Comprend un double ombrage métallique.",
          "Permet l'observation de l'échantillon au MEB d'un moule de la surface de l'échantillon."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire, qui accompagne un schéma, explique les étapes de la technique de cryodécapage/réplique. L'échantillon est d'abord congelé, puis fracturé (clivage). La surface de fracture est 'ombragée' par un métal lourd (platine) pour créer un relief, puis par du carbone pour consolider la réplique. L'échantillon biologique est ensuite détruit, et le moule (la réplique) est observé au MET. Le but est de visualiser des structures de la surface de l'échantillon, et non au MEB."
      },
      {
        questionText: "Les pouvoirs de résolution d'un microscope photonique ordinaire et d'un microscope à fluorescence sont similaires (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique '-0.2 µm'. La microscopie photonique ordinaire et la microscopie à fluorescence utilisent toutes deux des ondes lumineuses, ce qui les limite à un pouvoir de résolution similaire, qui est d'environ 0,2 micromètre (µm)."
      },
      {
        questionText: "Dans l'observation microscopique à transmission l'échantillon est toujours traversé par une source lumineuse (V)",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire 'C'est claire' confirme que l'observation par transmission (microscope photonique, MET) implique que la lumière ou le faisceau d'électrons traverse l'échantillon pour former l'image."
      },
      {
        questionText: "L'immunomarquage d'une cellule mitotique permet l'observation des arrangements chromosomiques (V).",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que les anticorps portant des fluorochromes servent à détecter des protéines spécifiques. Ces protéines peuvent être les tubulines qui constituent le fuseau mitotique, une structure essentielle pour l'arrangement des chromosomes. Ainsi, l'immunomarquage permet bien de visualiser l'organisation des chromosomes pendant la division cellulaire."
      },
      {
        questionText: "Dans un mp à fluorescence la lumière détectée correspond à la radiation absorbée par le fluorochrome (F).",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire corrige l'énoncé en précisant que dans un microscope à fluorescence, la lumière détectée est celle qui est émise par le fluorochrome, et non celle qu'il a absorbée. Le fluorochrome absorbe la lumière d'excitation (radiation absorbée) et émet une lumière de plus faible énergie (radiation émise) qui est ensuite détectée par le microscope."
      },
      {
        questionText: "L'étude morphologique d'un échantillon biologique peut être réalisé après application de la technique de coloration négative ou de balayage (V).",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La coloration négative et la microscopie à balayage (MEB) sont deux techniques d'imagerie qui permettent d'étudier la morphologie externe d'un échantillon. La coloration négative permet de mettre en évidence la forme et la structure d'un échantillon en le colorant par le pourtour, et le MEB donne une image en trois dimensions de la surface de l'échantillon."
      },
      {
        questionText: "Un échantillon cellulaire rendu radioactif et traité par les sels de bromures d'argent montre en microscopie photonique des grains noirs (V).",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'énoncé décrit le principe de l'autoradiographie. Des molécules radioactives sont incorporées dans les cellules. La radioactivité émise par ces molécules impressionne les cristaux de bromure d'argent d'une émulsion photographique, qui se transforment en grains d'argent métallique noirs après développement. Ces grains noirs sont visibles au microscope photonique et indiquent la localisation des molécules radioactives."
      },
      {
        questionText: "La fixation physique, la cryofracture et l'ombrage métallique correspondent aux étapes successives des technique de réplique (V).",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les étapes de la technique de réplique, également appelée cryofracture ou cryodécapage, sont bien la fixation physique (congélation de l'échantillon), la cryofracture (fracture de l'échantillon à très basse température) et l'ombrage métallique (dépôt d'une couche de métal lourd et de carbone pour créer un moule). Ce moule est ensuite observé au microscope électronique à transmission pour révéler la structure de l'échantillon."
      }
    ]
  },
  {
    title: "La membrane plasmique",
    subject: "cytology",
    questions: [
      {
        questionText: "L'obtention de membranes de globules rouges (GR) nécessite :",
        options: [
          "une centrifugation après hémolyse des GR",
          "une centrifugation avant hémolyse des GR",
          "ajout d'un milieu hypotonique avant hémolyse",
          "ajout d'un milieu hypertonique avant hémolyse",
          "aucune des réponses n'est valable"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Pour isoler les membranes des globules rouges, on les place dans un milieu hypotonique. Cela provoque une hémolyse, où l'eau entre dans les cellules, les faisant gonfler et éclater. On obtient alors les membranes et le contenu intracellulaire libéré. Ensuite, une centrifugation est effectuée pour séparer les membranes (qui se déposent au fond du tube) du reste des composants."
      },
      {
        questionText: "Quelles sont les protéines qui ne sont pas considérées comme membranaires :",
        options: [
          "les Intégrines",
          "les Occludines",
          "les Cadherines",
          "les Flippases",
          "La Cavéoline"
        ],
        correctOptionIndexes: [4],
        explanation: "La Cavéoline n'est pas considérée comme une protéine membranaire classique car elle est attachée au cholestérol sur la face interne de la membrane plasmique, et non pas insérée directement dans la bicouche lipidique."
      },
      {
        questionText: "Les protéines membranaires plasmiques peuvent interagir par leurs extrémités hydrophiles avec des molécules de :",
        options: [
          "glucides intracellulaires",
          "d'autres protéines membranaires",
          "les chaînes d'acides gras membranaires",
          "molécules de cholestérol",
          "les composants du cortex cellulaire"
        ],
        correctOptionIndexes: [1],
        explanation: "Les protéines membranaires peuvent interagir entre elles. La formation de chaînes d'acides gras concerne les lipoprotéines. Le cholestérol n'est pas en surface."
      },
      {
        questionText: "Les cohésions cellules-lame basale sont assurées à l'aide des :",
        options: [
          "Jonctions zonulaires.",
          "Jonctions de type fascia.",
          "Hemi desmosomes.",
          "Digitations membranaires.",
          "Autres structures."
        ],
        correctOptionIndexes: [2],
        explanation: "Les hémidesmosomes sont des jonctions d'ancrage qui lient les cellules épithéliales à la lame basale. Les autres jonctions mentionnées, comme les jonctions zonulaires et les jonctions de type fascia, sont des jonctions latérales entre les cellules."
      },
      {
        questionText: "L'asymétrie chimique d'une bicouche membranaire plasmique Eucaryote concerne :",
        options: [
          "La distribution de certains phospholipides.",
          "La répartition du cholestérol.",
          "La présence de glycolysines à la surface cellulaire.",
          "La variabilité des protéines de la bicouche lipidique.",
          "L'inégalité des charges électriques des acides aminés."
        ],
        correctOptionIndexes: [0],
        explanation: "L'asymétrie membranaire est due à une distribution inégale des phospholipides, des glycolipides et des protéines entre les deux feuillets de la membrane plasmique. Le cholestérol est uniformément réparti."
      },
      {
        questionText: "Les cohésions intercellulaires peuvent être assurées à l'aide des :",
        options: [
          "jonctions zonulaires",
          "jonctions maculaires",
          "Jonctions de type fascia",
          "déformations membranaires",
          "autres structures"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les cohésions intercellulaires sont assurées par différents types de jonctions, qui peuvent être classées en différentes configurations : zonula (en forme de ceinture), macula (en forme de tache), et fascia (en forme de bande). D'autres structures comme les interdigitations contribuent également à la cohésion."
      },
      {
        questionText: "Le phénomène d'apoptose se produit après activation des protéines membranaires nommées :",
        options: [
          "Flippases.",
          "Floppases.",
          "Glycoglycane.",
          "Integrine.",
          "Scramblases."
        ],
        correctOptionIndexes: [4],
        explanation: "Les scramblases sont des protéines qui, lors de l'apoptose (mort cellulaire programmée), permettent le passage de la phosphatidylsérine du feuillet interne au feuillet externe de la membrane. C'est un signal pour les cellules phagocytaires de détruire la cellule en cours d'apoptose."
      },
      {
        questionText: "Les caractéristiques communes aux Cadherines et Intégrines sont :",
        options: [
          "considérées comme des molécules d'adhésivité membranaires",
          "à interaction homotypique homophilique",
          "localisations cellulaires latérales",
          "agissent en dimères",
          "Ca++ dépendantes"
        ],
        correctOptionIndexes: [0],
        explanation: "Les intégrines et les cadhérines sont toutes deux des molécules d'adhésion cellulaire. Cependant, les intégrines interagissent de manière hétérotypique, tandis que les cadhérines interagissent de manière homotypique. Les cadhérines sont calcium-dépendantes, pas les intégrines."
      },
      {
        questionText: "À travers la pompe ATPasique de la membrane plasmique, les ions co-transportés sont :",
        options: [
          "K+ et Ca++",
          "Na+ et Ca++",
          "K+ et Mg++",
          "Na+ et Mg++",
          "Na+ et K+"
        ],
        correctOptionIndexes: [4],
        explanation: "La pompe Na+/K+ ATPase est une pompe de transport actif primaire. Elle utilise l'énergie de l'hydrolyse de l'ATP pour faire sortir trois ions Na+ de la cellule et faire entrer deux ions K+ contre leur gradient de concentration."
      },
      {
        questionText: "À travers la barrière membranaire les molécules d'eau sont diffusables car elles :",
        options: [
          "sont de petite taille",
          "sont neutres",
          "sont prises en charge par les aquaporines",
          "nécessitent pas d'énergie",
          "aucune des réponses n'est valable"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les petites molécules non chargées comme l'eau et les gaz (O2, CO2) peuvent traverser la membrane plasmique par diffusion simple. Ce processus ne requiert pas d'énergie. Les aquaporines, mentionnées dans l'option C, facilitent le transport de l'eau mais ne sont pas nécessaires pour son passage. La diffusion est un moyen de transport passif."
      },
      {
        questionText: "Dans une jonction neuro-musculaire l'Ach interagit :",
        options: [
          "À un récepteur canal post synaptique.",
          "À un récepteur canal pré synaptique.",
          "Avec une protéine enzymatique.",
          "Avec un canal potassique.",
          "Avec un canal sodique."
        ],
        correctOptionIndexes: [0],
        explanation: "L'acétylcholine (Ach) est un neurotransmetteur qui se lie à des récepteurs spécifiques sur la membrane post-synaptique. Ces récepteurs sont des canaux ioniques qui, lorsqu'ils sont activés, s'ouvrent pour permettre l'entrée d'ions, principalement le sodium (Na^+) et le potassium (K^+), déclenchant un influx nerveux."
      },
      {
        questionText: "Le renouvellement de la membrane plasmique se déroule selon un ou les processus suivant(s) :",
        options: [
          "perméatif",
          "pinocytose ou phagocytose",
          "cyclique",
          "sécrétion constitutive",
          "sécrétion régulée"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Le renouvellement de la membrane plasmique se fait par des processus d'exocytose. Il existe deux types de sécrétion : la sécrétion constitutive qui est continue et permet d'ajouter de nouvelles protéines et lipides à la membrane, et la sécrétion régulée qui est déclenchée par un signal spécifique."
      },
      {
        questionText: "Les processus de transports actifs membranaires sont classés en :",
        options: [
          "transports perméatifs",
          "transports perméatifs primaires et secondaires",
          "diffusion simple",
          "diffusion facilitée",
          "transports cytotiques"
        ],
        correctOptionIndexes: [1],
        explanation: "Les transports actifs sont des processus qui nécessitent de l'énergie. Ils sont classés en transport actif primaire, qui utilise directement l'énergie de l'hydrolyse de l'ATP, et transport actif secondaire, qui utilise l'énergie d'un gradient de concentration ionique établi par un transport primaire."
      },
      {
        questionText: "Dans une jonction neuro-musculaire le récepteur de l'Ach :",
        options: [
          "interagit avec les membranes du REL musculaire",
          "est inactif en l'absence du neurotransmetteur",
          "est sensible à l'arrivée de l'influx nerveux",
          "activé il devient perméable à l'Ach",
          "est nommé également canal ionotrope"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Le récepteur de l'acétylcholine est un canal ionotrope. Il est inactif en l'absence de l'Ach. Sa liaison à l'Ach est sensible à l'arrivée de l'influx nerveux et provoque son activation. Une fois activé, il devient perméable aux ions Na^+ et K^+, et non à l'Ach."
      },
      {
        questionText: "La notion de membrane unitaire exprime l'aspect tristratifié commun aux cytomembranes.",
        options: [ "vrai", "faux" ],
        correctOptionIndexes: [0],
        explanation: "La notion de membrane unitaire, proposée par Robertson, stipule que toutes les membranes biologiques ont une structure commune, observable au microscope électronique, composée de trois couches : deux feuillets sombres externes et un feuillet clair central."
      },
      {
        questionText: "Les peptidoglycanes contribuent toujours à la formation d'un glycocalyx de revêtement.",
        options: [ "vrai", "faux" ],
        correctOptionIndexes: [1],
        explanation: "Le glycocalyx de revêtement est formé par les glucides membranaires. Les peptidoglycanes se trouvent dans la paroi cellulaire des bactéries et non pas dans le glycocalyx des cellules eucaryotes."
      },
      {
        questionText: "À la base de l'entérocyte, le réseau terminal correspond à un entrecroisement apical de filaments d'actine.",
        options: [ "vrai", "faux" ],
        correctOptionIndexes: [1],
        explanation: "Le réseau terminal est un réseau de filaments d'actine situé à la base des microvillosités. Il correspond à des intersections apicales de filaments d'actine des microvillosités et de la zone d'adhésion. La question précise que le réseau est à la base de l'entérocyte, ce qui est correct, mais il correspond à une intersection apicale de filaments d'actine. La formulation de la question est ambiguë. Cependant, le commentaire précise qu'il est apical. La réponse correcte est 'faux'."
      },
      {
        questionText: "Le complexe jonctionnel correspond à l'ensemble des spécialisations apicales et latéro-basales de certaines cellules polarisées.",
        options: [ "vrai", "faux" ],
        correctOptionIndexes: [1],
        explanation: "Le complexe jonctionnel est l'ensemble des spécialisations latérales (jonctions serrées, jonctions d'adhésion, desmosomes) qui assurent la cohésion entre les cellules, en particulier dans les épithéliums. La lame basale est un composant basale, pas latérale."
      },
      {
        questionText: "Les desmosomes assurent une double fonction d'adhésivité et communication intercellulaires.",
        options: [ "vrai", "faux" ],
        correctOptionIndexes: [1],
        explanation: "Les desmosomes sont des jonctions d'ancrage qui assurent une fonction d'adhésivité. Ils ne permettent pas la communication intercellulaire, qui est la fonction des jonctions communicantes (jonctions gap)."
      },
      {
        questionText: "Dans un microscope photonique ordinaire : (Examen TP)",
        options: [
          "l'objet à grossir est éclairé directement par des radiations monochromatiques",
          "les photons convergent vers l'objet d'étude",
          "le tube optique comporte un jeu de lentilles convergentes et divergentes",
          "au niveau du photon traverse la préparation microscopique, une image agrandie est observée à l'échelle des objectifs",
          "aucune des réponses n'est valable"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les rayons lumineux (photons) sont collectés par les lentilles de l'objectif et de l'oculaire. L'échantillon est traversé par les rayons lumineux. Une image est agrandie et est observée par l'observateur."
      },
      {
        questionText: "L'observation des cellules épithéliales buccales nécessite : (Examen TP)",
        options: [
          "un prélèvement des cellules en raclant la face interne de la joue",
          "un étalement épais et transparent du prélèvement sur une lame porte objet",
          "une coloration obligatoire au bleu de méthylène",
          "un recouvrement de l'échantillon par une lamelle sous un angle de 45°",
          "une préparation microscopique selon la technique dite histologique"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Pour observer des cellules buccales, il faut d'abord les prélever en raclant l'intérieur de la joue. Ensuite, on dépose l'échantillon sur une lame et on le recouvre d'une lamelle en l'inclinant à 45° pour éviter la formation de bulles d'air. La coloration n'est pas obligatoire mais peut être utilisée pour mieux observer la morphologie des cellules."
      },
      {
        questionText: "L'expérience de Frye et Edidin (1970) : (Examen TP)",
        options: [
          "comprend la préparation d'un hétérocaryon",
          "utilise 2 types de colorants physiques nommés fluorochromes",
          "l'évolution de la fluorescence démontre la fluidité de l'ensemble des protéines membranaires de la membrane hybride",
          "des cellules marquées peuvent être observées au mp ordinaire",
          "est basée sur la technique de l'immunomarquage"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "L'expérience de Frye et Edidin a consisté à fusionner une cellule de souris et une cellule humaine, créant ainsi un hétérocaryon. Leurs protéines membranaires ont été marquées avec des fluorochromes (fluorescéine et rhodamine) via la technique de l'immunomarquage. L'observation de la migration et du mélange progressif des protéines de la souris et de l'homme sur toute la surface de la cellule hybride a démontré la fluidité de la membrane plasmique."
      },
      {
        questionText: "Sur quel principe repose le fonctionnement d'un microscope électronique à transmission :",
        options: [
          "un principe de transmission tel un microscope photonique ordinaire",
          "un principe de transmission tel un microscope à fluorescence",
          "un principe d'émission tel un microscope à balayage",
          "un principe optique",
          "aucune des réponses n'est valable"
        ],
        correctOptionIndexes: [4],
        explanation: "Le microscope électronique à transmission (MET) fonctionne sur le principe de la transmission des électrons à travers l'échantillon. L'image est formée en fonction de l'absorption différentielle des électrons par les différentes structures de l'échantillon. Ce principe est différent de celui du microscope optique qui utilise la lumière, et du microscope électronique à balayage qui utilise l'émission d'électrons secondaires."
      },
      {
        questionText: "L'ordre chronologique des étapes de la technique cytologique est : (Examen TP)",
        options: [
          "Fixation, coloration, microtomie, inclusion, observation au mp",
          "fixation, déshydratation, inclusion, microtomie, coloration, observation au mp",
          "déshydratation, fixation, coloration, microtomie, observation au mp",
          "microtomie, déshydratation, fixation, observation au mp",
          "déshydratation, inclusion, coloration, microtomie, observation au mp"
        ],
        correctOptionIndexes: [1],
        explanation: "La technique cytologique (ou histologique) pour préparer un tissu à l'observation microscopique suit un ordre précis : Fixation : pour préserver les structures cellulaires. Déshydratation : pour enlever l'eau du tissu. Inclusion : pour durcir le tissu et permettre les coupes. Microtomie : pour faire des coupes fines. Coloration : pour rendre les structures visibles. Observation au microscope."
      }
    ]
  },
  {
    title: "Aspect ultrastructural",
    subject: "cytology",
    questions: [
      {
        questionText: "Choisir le ou les meilleurs titre(s) convenable(s) à cette représentation schématique:",
        options: [
          "Ultrastructure d'une portion de membrane plasmique.",
          "Aspect moléculaire d'une bicouche lipidique.",
          "Organisation moléculaire d'un Raft lipidique.",
          "Aspect moléculaire et schématique d'une membrane plasmique Eukaryote.",
          "Représentation schématique de l'architecture moléculaire de la membrane plasmique d'après Singer & Nicholson (1971)."
        ],
        correctOptionIndexes: [2],
        explanation: "La représentation schématique montre un raft lipidique, caractérisé par une forte concentration en cholestérol et une épaisseur plus importante. De plus, la fluidité membranaire n'est pas nulle à cet endroit."
      },
      {
        questionText: "La molécule en A peut représenter:",
        options: [
          "Un phospholipide insaturé.",
          "Une phosphatidyl choline.",
          "Une molécule lipidique chargée négativement.",
          "Un composant moléculaire d'un radeau lipidique.",
          "Une molécule globulaire d'une réplique de membrane plasmique."
        ],
        correctOptionIndexes: [1],
        explanation: "La molécule A a une queue hydrocarbonée insaturée (coudée) et est située dans le feuillet exoplasmique. La phosphatidylcholine (PC) et la sphingomyéline (SM) sont toutes deux exoplasmiques. De plus, les phospholipides ne sont pas des molécules globulaires."
      },
      {
        questionText: "La molécule en A peut assurer des mouvements de:",
        options: [
          "Diffusion latérale détectée par la technique d'immunofluorescence.",
          "Rotation détectée par la technique RMN.",
          "Flip flop détecté par la technique de coupe cytologique.",
          "Flexion détecté par la technique des répliques.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [1],
        explanation: "Tous les mouvements sont détectés par la technique de RMN (Résonance Magnétique Nucléaire) uniquement."
      },
      {
        questionText: "La molécule en B:",
        options: [
          "Correspond à un glycolipide.",
          "Contribue en partie au glycocalyx.",
          "Est toujours neutre.",
          "Peut être distribuée sur toute la monocouche externe d'un microdomaine lipidique.",
          "Peut être distribuée dans un feuillet exoplasmique."
        ],
        correctOptionIndexes: [0],
        explanation: "Les chaînes glucidiques des glycolipides peuvent être chargées. Elles sont toujours présentes dans le feuillet exoplasmique de la membrane."
      },
      {
        questionText: "La molécule en C:",
        options: [
          "Est une protéine périphérique externe.",
          "Interagit avec une protéine transmembranaire multidomaine.",
          "Peut être nommée protéine ancrée.",
          "Est classée comme une protéine intégrée.",
          "Est une protéine de type cavéoline."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule C est une protéine périphérique externe qui interagit avec une protéine transmembranaire par un seul domaine. La classification des protéines montre que la protéine C est une protéine ancrée par un lipide (acide gras)."
      },
      {
        questionText: "La molécule en D:",
        options: [
          "Est une protéoglycane.",
          "Contribue en partie à l'asymétrie structurale.",
          "Est concernée par le mouvement de diffusion latérale.",
          "Peut participer à la charge électrique membranaire.",
          "Peut interagir avec la cavéoline."
        ],
        correctOptionIndexes: [2],
        explanation: "Les protéoglycanes sont des protéines qui interagissent avec des chaînes glucidiques. Les molécules sont concernées par la diffusion latérale et peuvent porter des charges ioniques."
      },
      {
        questionText: "La molécule en E:",
        options: [
          "Est considérée comme une molécule intégrée de la membrane plasmique.",
          "Est amphiphile tout comme les molécules de phospholipides membranaires.",
          "Peut contribuer au groupage sanguin.",
          "N'est présente que dans un raft lipidique.",
          "Pourrait représenter une floppase."
        ],
        correctOptionIndexes: [0],
        explanation: "La partie transmembranaire est hydrophobe et les parties (cytoplasmique et exoplasmique) sont hydrophiles. Le groupage sanguin est déterminé par les glycoprotéines."
      },
      {
        questionText: "La molécule en G:",
        options: [
          "Peut correspondre à un sphingolipide.",
          "Est toujours saturée.",
          "Contribue à l'épaississement du raft lipidique.",
          "Peut présenter des caractères dynamiques tout comme les phospholipides.",
          "Est stabilisée par d'autres molécules."
        ],
        correctOptionIndexes: [2],
        explanation: "La fluidité membranaire au niveau d'un microdomaine n'est pas nulle. Le raft lipidique se caractérise par une forte concentration de cholestérol et une épaisseur plus importante."
      },
      {
        questionText: "La molécule Cavéoline:",
        options: [
          "N'est pas représentée sur le schéma proposé.",
          "Est une protéine en forme de V.",
          "Interagit avec certains composants moléculaires du raft.",
          "Est présente en dehors du raft.",
          "Peut être révélée par la technique des répliques."
        ],
        correctOptionIndexes: [2],
        explanation: "Toutes les réponses sont claires."
      },
      {
        questionText: "Les Phospholipides membranaires:",
        options: [
          "Possèdent un pôle hydrophile de composition chimique invariable.",
          "Sont concernés par l'asymétrie chimique et structurale.",
          "Leurs chaînes hydrocarbonées ont une orientation constante.",
          "Sont toujours organisés en 2 monocouches parallèles.",
          "Présentent une variabilité quantitative au sein de la bicouche."
        ],
        correctOptionIndexes: [3],
        explanation: "Les phospholipides possèdent un pôle hydrophile de composition chimique variable. Ils sont concernés par l'asymétrie chimique et structurale. Les chaînes sont orientées vers l'intérieur de la membrane et sont organisées en deux monocouches parallèles."
      },
      {
        questionText: "Le Glycocalyx :",
        options: [
          "Est représenté en partie par les chaînes saccharidiques des glycoprotéines et protéoglycanes.",
          "Constitue une structure de revêtement de surface cellulaire.",
          "Peut être en interaction avec les molécules de cholestérol.",
          "Est isolé par la méthode d'hémolyse.",
          "Par sa présence l'orientation d'une cytomembrane est rendue possible."
        ],
        correctOptionIndexes: [1],
        explanation: "Les molécules de cholestérol interagissent avec les phospholipides et les cavéolines. Le glycocalyx n'interagit pas avec le cholestérol. Le glycocalyx ne constitue pas le pôle du groupage sanguin. Il se trouve sur la face exoplasmique."
      },
      {
        questionText: "Les Glycolipides membranaires :",
        options: [
          "Présentent une variabilité qualitative en sucres.",
          "Sont distribués de manière quelconque au sein de la bicouche.",
          "Sont concernés par l'asymétrie chimique.",
          "Sont ne pas toujours neutres.",
          "Interagissent avec les molécules de cholestérol."
        ],
        correctOptionIndexes: [2],
        explanation: "Les glycolipides sont concernés par l'asymétrie structurale. Ils peuvent avoir une contribution à la charge électrique de la membrane. Les molécules de cholestérol interagissent avec les phospholipides et les cavéolines."
      },
      {
        questionText: "Les molécules de Cholestérol:",
        options: [
          "Sont amphiphiles.",
          "Leurs noyaux stéroïdes avec leurs chaînes hydrocarbonées interagissent avec les pôles hydrophobes des phospholipides.",
          "Leur disposition est orientée dans la bicouche lipidique.",
          "Ne présentent pas de variabilité quantitative dans les monocouches membranaires.",
          "Sont toujours présentes dans les membranes plasmiques."
        ],
        correctOptionIndexes: [0],
        explanation: "Le cholestérol est absent chez les membranes plasmiques des procaryotes. Il est composé d'un groupement hydroxyle polaire et d'un noyau stéroïde plus une chaîne hydrocarbonée. Le cholestérol fait le mouvement de flip-flop uniquement et il assure la stabilité mécanique."
      },
      {
        questionText: "Les Protéines membranaires sont classées selon :",
        options: [
          "Leur distribution au sein des 2 monocouches.",
          "Leur affinité aux autres molécules membranaires.",
          "Leurs compositions chimiques.",
          "Leurs charges électriques.",
          "Aucune des propositions n'est juste."
        ],
        correctOptionIndexes: [4],
        explanation: "La classification des protéines se fait selon leur disposition dans la membrane (protéines intégrées ou périphériques)."
      },
      {
        questionText: "Choisir le ou les titre(s) le ou les plus approprié(s) à cette illustration :",
        options: [
          "Représentation schématique illustrant l'asymétrie structurale d'une membrane plasmique eucaryote.",
          "Aspect bistratifié d'une bicouche lipidique.",
          "Aspect ultrastructural et moléculaire d'une membrane plasmique eucaryote.",
          "Aspect moléculaire d'une membrane plasmique observé au MET après coupe mince.",
          "Représentation schématique illustrant l'organisation moléculaire d'une membrane plasmique eucaryote."
        ],
        correctOptionIndexes: [4],
        explanation: "Le schéma représente l'organisation moléculaire de la membrane selon le modèle de Singer et Nicholson (1972)."
      },
      {
        questionText: "La molécule en 1 :",
        options: [
          "Est une protéine transmembranaire monodominée nommée également protéine intégrée.",
          "Peut être concernée par un mouvement de rotation.",
          "Sa présence est révélée par la technique RMN.",
          "Est détectable par coloration chimique.",
          "Pourrait représenter une molécule Glut."
        ],
        correctOptionIndexes: [0],
        explanation: "C'est une protéine intégrée. Le mouvement de rotation concerne les phospholipides. Les protéines transmembranaires sont concernées par la diffusion latérale. La présence de la molécule 1 est révélée par l'immunomarquage (coloration physique)."
      },
      {
        questionText: "La molécule en 2 :",
        options: [
          "Peut correspondre à un déterminant du facteur Rhésus.",
          "Est également nommée protéine intégrée.",
          "Est en général en interaction avec les molécules de cholestérol.",
          "Peut assurer un rôle structural.",
          "Sa fluidité peut être déterminée par la technique des répliques."
        ],
        correctOptionIndexes: [1],
        explanation: "La molécule 2 est une protéine transmembranaire multidomaine. Le cholestérol interagit avec les queues des phospholipides et des cavéolines. Sa fluidité est déterminée par la technique RMN et d'immunofluorescence."
      },
      {
        questionText: "La molécule en 3 :",
        options: [
          "Pourrait représenter un déterminant du système ABO.",
          "Contribuerait à la stabilité mécanique de la bicouche lipidique.",
          "Pourrait intervenir lors d'un transport ionique.",
          "Serait détectable par la technique histologique.",
          "Est liée à la membrane plasmique par un complexe GPI."
        ],
        correctOptionIndexes: [4],
        explanation: "Les déterminants du système ABO sont des glycoprotéines. La molécule 3 est une protéine périphérique externe ancrée par un complexe GPI. Elle ne participe pas à la stabilité mécanique. Elle ne présente pas de canal. Elle est détectable par la technique d'immunomarquage."
      },
      {
        questionText: "La molécule en 4 :",
        options: [
          "N'est pas concernée par l'asymétrie chimique membranaire.",
          "Intervient dans l'asymétrie structurale membranaire.",
          "Peut basculer vers une monocouche lipidique grâce aux flippases.",
          "De par sa présence caractérise une zonc raft.",
          "Participe en partie à la structuration du glycocalyx."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule 4 correspond à une protéine périphérique externe qui interagit avec une autre protéine. Le cholestérol et les phospholipides sont concernés par les mouvements de flip-flop et la fluidité. La présence de beaucoup de molécules de cholestérol caractérise le raft."
      },
      {
        questionText: "La molécule en 5 :",
        options: [
          "Correspondrait à un composant du réseau sous membranaire de la membrane du globule rouge.",
          "Pourrait représenter une molécule de cavéoline.",
          "Est concernée par une fluidité latérale.",
          "Appartiendrait à la même classe des molécules 3 et 6.",
          "N'intervient pas dans le contrôle de l'asymétrie chimique membranaire."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule 5 est une protéine périphérique interne. La molécule est un composant du cytosquelette. La molécule en 5 est compacte. Les molécules 3 et 6 sont des protéines ancrées. La fluidité latérale concerne les protéines transmembranaires et les phospholipides."
      },
      {
        questionText: "La molécule en 6 :",
        options: [
          "Correspondrait à une protéine ancrée par un acide gras.",
          "Assurerait un rôle de flopasse.",
          "Appartient à une protéine du cellcoat.",
          "N'intervient pas dans la structuration du cortex cellulaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Les molécules en D et A sont des protéines transmembranaires. Les molécules SCRAMBLASES et les FLOPPASES sont des protéines transmembranaires. La molécule 6 fait partie du glycocalyx, car elle est constituée de chaînes saccharidiques. Le cortex cellulaire est l'ensemble des protéines filamenteuses sous-jacentes à la membrane."
      },
      {
        questionText: "La molécule en 7 :",
        options: [
          "Pourrait représenter une molécule de spectrine.",
          "Pourrait représenter une molécule de glycophorine.",
          "Est caractérisée par une fluidité de type flip flop.",
          "Appartient à la même classe des molécules 3 et 6.",
          "N'intervient pas dans le contrôle des événements apoptotiques."
        ],
        correctOptionIndexes: [1],
        explanation: "Le mouvement de flip-flop concerne les phospholipides et le cholestérol. Les molécules 3 et 6 sont des protéines intégrées. La molécule 7 est une protéine périphérique."
      },
      {
        questionText: "La molécule en 8 :",
        options: [
          "Correspondrait à un composant commun aux membranes cellulaires.",
          "N'est pas concernée par l'asymétrie membranaire.",
          "Par sa présence diminue la fluidité membranaire.",
          "Structure les zones d'endocytose cavéoline dépendante.",
          "Est concernée par l'amphiphilie."
        ],
        correctOptionIndexes: [2],
        explanation: "La molécule en 8 est le cholestérol qui n'est pas un composant de la membrane des procaryotes. Il est concerné par l'amphiphilie. Les zones d'endocytose cavéoline dépendante sont les rafts."
      },
      {
        questionText: "La molécule en 9 :",
        options: [
          "Correspondrait à un glycolipide type phosphatidy éthanolamine.",
          "Contribue à l'asymétrie chimique.",
          "Peut basculer vers la monocouche interne.",
          "Présente une propriété d'autoassemblage.",
          "Peut comporter du glucose ou galactose dans sa partie hydrophile."
        ],
        correctOptionIndexes: [0],
        explanation: "Le phosphatidyléthanolamine (PE) est protoplasmique et ne peut pas se trouver dans le feuillet exoplasmique. Le mouvement de flip-flop est effectué par les phospholipides et le cholestérol."
      },
      {
        questionText: "Soit la représentation schématique suivante : Elle représente :",
        options: [
          "La composition chimique et l'asymétrie structurale d'une membrane plasmique eucaryote.",
          "L'organisation moléculaire des composants d'une membrane plasmique procaryote.",
          "Composition chimique et l'asymétrie structurale d'une enveloppe virale.",
          "L'aspect ultrastructural d'une membrane plasmique eucaryote.",
          "L'aspect en microscopie électronique d'un raft lipidique."
        ],
        correctOptionIndexes: [0],
        explanation: "Le schéma représente la composition et l'asymétrie de la membrane, montrant les différents composants et leur répartition."
      },
      {
        questionText: "Les molécules en 1 :",
        options: [
          "Représentent 18% des composants de la membrane plasmique du globule rouge humain.",
          "Sont concernées par la migration apoptotique.",
          "Peuvent constituer un revêtement de 200 nm chez certains types cellulaires.",
          "Leur présence est détectée par la technique RMN.",
          "Peuvent être présentes dans le feuillet endoplasmique membranaire de certains types cellulaires."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule en 1 est une chaîne glucidique associée à une protéine. Les glycoprotéines représentent 18% de la membrane plasmique du globule rouge. Leur présence est détectée par l'immunomarquage et elles sont présentes dans le feuillet exoplasmique."
      },
      {
        questionText: "Les molécules en 2 :",
        options: [
          "Sont en proportions différentes dans les monocouches lipidiques.",
          "Peuvent représenter la sphingomyéline ou la phosphatidyl sérine.",
          "Sont en général en interaction avec les molécules de cholestérol.",
          "Peuvent être isolées par la technique d'hémolyse des globules rouges.",
          "Insaturés, ils enrichissent les rafts lipidiques."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule en 2 est un phospholipide. La phosphatidylsérine est protoplasmique. Les molécules peuvent être isolées par la technique des répliques. Les phospholipides saturés enrichissent les rafts lipidiques."
      },
      {
        questionText: "Les molécules en 3 :",
        options: [
          "Sont des déterminants du système ABO.",
          "Assurent la stabilité mécanique de la bicouche lipidique.",
          "Peuvent constituer des liposomes.",
          "Sont détectables par la technique des répliques.",
          "Interagissent avec des fluorochromes dans la technique de révélation par immunofluorescence."
        ],
        correctOptionIndexes: [1],
        explanation: "Les molécules en 3 sont des protéines transmembranaires. Le système ABO est défini par les glycoprotéines. Les protéines transmembranaires ont une fluidité latérale. Les phospholipides peuvent constituer les liposomes."
      },
      {
        questionText: "Les molécules en 4 :",
        options: [
          "Sont concernées par l'asymétrie chimique.",
          "Sont présentes dans toutes les cytomembranes eucaryotes.",
          "Peuvent basculer vers une monocouche lipidique grâce aux flippases.",
          "Sont très présentes dans les microdomaines lipidiques.",
          "Participent à la structuration du glycocalyx."
        ],
        correctOptionIndexes: [3],
        explanation: "La molécule 4 est le cholestérol. Il n'est pas présent dans toutes les cytomembranes. Seuls les phospholipides et le cholestérol peuvent appliquer les mouvements de basculement. Il ne fait pas d'interactions avec les chaînes glucidiques."
      },
      {
        questionText: "Les molécules en 5 :",
        options: [
          "Correspondraient à de la spectrine dans le cas d'un globule rouge humain.",
          "Pourraient représenter des molécules de cavéoline.",
          "Sont caractérisées par une fluidité latérale.",
          "Caractérise le système HLA.",
          "Constitue une structure nommée cortex cellulaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cavéolines ont la forme de V. Le système HLA est déterminé par les glycoprotéines. Le cortex cellulaire est l'ensemble des protéines filamenteuses sous-jacentes à la membrane plasmique."
      },
      {
        questionText: "Les molécules en X:",
        options: [
          "Sont classées comme protéines intégrées.",
          "Sont concernées par l'asymétrie structurale.",
          "Sont toujours chargées négativement.",
          "Peuvent se déplacer par flip flop.",
          "Contribuent au système ABO."
        ],
        correctOptionIndexes: [1],
        explanation: "La molécule en X représente une glycoprotéine. La molécule est une protéine périphérique. Elle peut être neutre, chargée positivement ou négativement. Le mouvement de 'flip-flop' est appliqué par les phospholipides et le cholestérol uniquement. Le système ABO est composé par un ensemble des glycoprotéines."
      },
      {
        questionText: "Les molécules en Y:",
        options: [
          "Correspondent à des protéoglycanes.",
          "Peuvent être révélées par immunofluorescence.",
          "Contribuent à la fluidité membranaire.",
          "Participent à la formation du manteau cellulaire.",
          "Peuvent être isolées par UGD."
        ],
        correctOptionIndexes: [3],
        explanation: "Un protéoglycane correspond à une protéine en interaction avec des chaînes glucidiques non ramifiées. La protéine en Y est associée avec une chaîne glucidique ramifiée. La molécule en Y est une glycoprotéine car elle porte une chaîne glucidique ramifiée. Les glycoprotéines font partie du glycocalyx (manteau cellulaire). Elles peuvent être isolées par la technique de réplique."
      },
      {
        questionText: "La molécule en X:",
        options: [
          "Est très concentrée dans les Rafts.",
          "Est concernée par l'asymétrie chimique.",
          "In vitro, a la propriété de former un liposome.",
          "Peut assurer un mouvement de flexion.",
          "Est localisée dans les 2 feuillets denses."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule en X est un phospholipide coudé. Les phospholipides non coudés (sphingolipides) enrichissent les rafts. Les mouvements de phospholipides (rotation, flexion, flip-flop et diffusion latérale) sont détectés par la technique de RMN (Résonance Magnétique Nucléaire). On parlera de fluidité des phospholipides."
      },
      {
        questionText: "La molécule en Y:",
        options: [
          "Présente une composition chimique stable.",
          "Se met toujours en place entre un phospholipide et un glycolipide.",
          "Peut constituer la membrane d'une micelle.",
          "Contribue système HLA.",
          "Est présent dans toutes les membranes plasmiques."
        ],
        correctOptionIndexes: [0],
        explanation: "La molécule Y est le cholestérol. Le système HLA est composé d'un ensemble de glycoprotéines."
      }
    ]
  },
  {
    title: "Les jonctions membranaires",
    subject: "cytology",
    questions: [
      {
        questionText: "Choisir la ou les réponse(s) juste(s). Soit la représentation schématique ci-dessous : La molécule en G :",
        options: [
          "Peut correspondre à un sphingolipide.",
          "Est toujours saturée.",
          "Contribue à l'épaississement du raft lipidique.",
          "Peut présenter des caractères dynamiques tout comme les phospholipides.",
          "Est stabilisée par d'autres molécules."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le commentaire ne se rapporte pas à la question. Il s'agit d'une explication des différents points de jonctions : A : Jonction serrée (ZO) - Claudine. B : Jonction d'adhérence (ZA) - Cadhérine. C : Desmosome (MA) - Kératine et Cadhérine. D : Réseau terminal - Microfilaments d'actine et protéines d'ancrage. E : Hémidesmosome - Tonofilaments de kératine."
      },
      {
        questionText: "Le système jonctionnel met en jeu des possibilités d'interaction avec tous les éléments du cytosquelette.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Il existe d'autres éléments du cytosquelette, comme les tonofilaments et les microfilaments d'actine, qui ne sont pas en interaction avec les dispositifs jonctionnels. Le système jonctionnel n'interagit pas avec tous les éléments du cytosquelette."
      },
      {
        questionText: "4 modèles de jonctions sont présentes sur les faces latérales des Entérocytes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les quatre modèles de jonction présents sur les faces latérales des entérocytes sont : ZO, ZA, MA, GAP."
      },
      {
        questionText: "Seules les Zo présentent des points de contact membranaires.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire n'est pas rédigé, mais le schéma illustre la jonction serrée (ZO) qui présente des points de contact rapprochés entre les deux membranes cellulaires."
      },
      {
        questionText: "En microscopie électronique, les Occludines de la jonction serrée apparaissent toujours en lignes anastomosées.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique 'Déjà commenté', ce qui sous-entend que la réponse est correcte et a été expliquée précédemment. Les Occludines (protéines de la jonction serrée) forment effectivement un réseau anastomosé visible en microscopie électronique à transmission (MET) avec la technique du cryofracture."
      },
      {
        questionText: "Les différents types de différenciations membranaires correspondent aux :",
        options: [
          "Microvilllosités.",
          "Invaginations.",
          "Interdigitations.",
          "Jonctions.",
          "Complexes jonctionaux."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "La question cherche à identifier et localiser les spécialisations morphologiques de la membrane des cellules épithéliales. Le commentaire liste et classe les différentes spécialisations. Microvillosités : Présentes sur le pôle apical des entérocytes. Invaginations basales : Présentes sur le pôle basal des entérocytes et des cellules épithéliales du tubule contourné proximal rénal. Différenciations latéro-basales : Incluent les interdigitations et les jonctions, présentes sur les faces latérales des cellules. Complexe jonctionnel : Fait partie des jonctions."
      },
      {
        questionText: "L'ensemble des microvillosités est équivalent :",
        options: [
          "Au plateau strié des Entérocytes.",
          "Au bordure en brosse des cellules épithéliales du tube contourné proximal rénal.",
          "Aux stéréocils de l'épithélium du canal épididymaire.",
          "Aux différenciations apicales des cellules polarisées.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le commentaire indique que la réponse a déjà été commentée (QCM 1 2021 2022). Les microvillosités constituent le plateau strié des entérocytes et la bordure en brosse des cellules rénales, et font partie des différenciations apicales des cellules polarisées."
      },
      {
        questionText: "Les déformations membranaires peuvent être étudiées après application des techniques :",
        options: [
          "Microscopiques photoniques histologiques.",
          "Microscopiques photoniques cytologiques.",
          "Microscopiques électroniques cytologiques.",
          "Microscopiques électroniques à transmission.",
          "Microscopiques électroniques à balayage."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Les techniques d'étude des différenciations membranaires sont les suivantes : Histologie : Microscopie photonique. MET (Microscopie Électronique à Transmission) : Pour l'étude de l'ultrastructure. MEB (Microscopie Électronique à Balayage) : Pour l'étude de la surface."
      },
      {
        questionText: "Parmi les fonctions des microvilllosités nous pouvons retenir :",
        options: [
          "Site de la perméabilité aux molécules nutritives.",
          "Augmentation des surfaces d'échanges moléculaires.",
          "Fonctions motrices au sein de la bordure en brosse.",
          "Fonctions sensorielles à celles des stéréocils.",
          "Dispersion des molécules nutritives grâce à leur flexibilité."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Elles sont le site de perméabilité aux molécules nutritives lors de la digestion. Elles augmentent la surface d'échange entre les microvillosités de l'intestin et les molécules alimentaires. Le commentaire précise également la différence avec les stéréocils, qui sont beaucoup plus longs et présentent peu d'actine, ce qui leur confère une faible flexibilité. Ils sont impliqués dans les fonctions sensorielles, notamment au niveau de l'oreille interne."
      },
      {
        questionText: "Les dispositifs jonctionnels ont été classés selon :",
        options: [
          "Leurs implications fonctionnelles.",
          "Leurs localisations cellulaires.",
          "Leurs étendues membranaires.",
          "La largeur des espaces intercellulaires déterminée.",
          "La combinaison des classifications citées en C et d."
        ],
        correctOptionIndexes: [4],
        explanation: "La classification des jonctions est basée sur deux critères principaux : Leur étendue : On distingue trois modèles : zonula, fascia et macula. La largeur des espaces intercellulaires : On distingue les jonctions 'tight' (serrées), 'gap' (communicantes) et 'adherens' (d'ancrage). C'est la combinaison de ces deux classifications qui a permis la dénomination actuelle des jonctions."
      },
      {
        questionText: "Les Occludines :",
        options: [
          "Correspondent à des glycoprotéines transmembranaires globulaires.",
          "Apparaissent en lignes anastomosées au MEB.",
          "Sont présentes uniquement dans les jonctions serrées.",
          "Sont localisées aux pôles apicaux latéraux des Entérocytes.",
          "À leur niveau, l'espace intercellulaire est considéré comme nul."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Le commentaire présente un tableau qui décrit les caractéristiques de la jonction serrée (ZO). Il est mentionné que les Occludines sont des protéines transmembranaires et qu'elles se trouvent dans la jonction serrée. Le tableau précise également que la localisation est au pôle apical des entérocytes et que l'espace intercellulaire est nul. La question B est fausse car l'apparence en lignes anastomosées est visible au MET, pas au MEB."
      },
      {
        questionText: "Les Connexines de 2 cellules voisines :",
        options: [
          "Sont localisées dans les jonctions communicantes.",
          "S'impliquent dans une fonction de transport moléculaire.",
          "Caractérisent une jonction GAP.",
          "S'organisent en un hexamère autour d'un canal.",
          "Déterminent un espace intercellulaire équivalent à 2 nm."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le tableau dans le commentaire décrit les caractéristiques de la jonction GAP (communicante). Il est indiqué que les connexines s'organisent en hexamères pour former un canal central de communication. Elles permettent le passage de petites molécules et d'ions. La distance intercellulaire pour la jonction GAP est de 2 nm, donc l'option E est fausse car cette distance existe bien."
      },
      {
        questionText: "Les plaques protéiques de certaines jonctions peuvent être :",
        options: [
          "Présentes dans la macula adherens.",
          "Localisées à l'échelle des hémidesmosomes.",
          "Observées dans un complexe jonctionnel.",
          "En interaction avec les intégrines.",
          "Liées aux filaments intermédiaires."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "A, C : Les plaques protéiques sont présentes dans les jonctions de type macula adherens (desmosomes) et font partie des complexes jonctionnels. B, D : Les plaques protéiques des hémidesmosomes sont localisées sur la face cytosolique au pôle basal des cellules et sont en interaction avec les intégrines. E : La jonction d'adhérence (ZA) interagit avec les filaments d'actine, tandis que les macula adherens (MA) et les hémidesmosomes interagissent avec les filaments intermédiaires de kératine."
      },
      {
        questionText: "Le réseau terminal :",
        options: [
          "Est présent au pôle apical de certaines cellules absorbantes type Entérocytes.",
          "Apparaît en microscopie électronique comme un réseau de microfilaments d'actine.",
          "Comprend des filaments d'actine issus des microvillosités et de certaines jonctions adhérentes.",
          "Est constitué de filaments de Kératine et d'actine.",
          "Peut-être en interaction avec les filaments intermédiaires."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire explique que le réseau terminal est constitué de filaments d'actine provenant des microvillosités et de la jonction d'adhérence (ZA), ce qui rend les options C et D fausses dans leur formulation initiale car le terme 'certaines' n'est pas utilisé."
      },
      {
        questionText: "Les rôles attribués à la Zonule Adherens à l'échelle d'un Entéocyte sont :",
        options: [
          "Rigidité de la partie apicale de la cellule.",
          "Cohésion intercellulaire.",
          "Coordination des mouvements lors de la contraction intestinale.",
          "Barrière physiologique.",
          "Communications intercellulaires."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Elle assure la rigidité de la partie apicale, la cohésion intercellulaire, et la coordination des mouvements lors de la contraction intestinale. Il précise aussi que la barrière physiologique est le rôle de la jonction serrée (ZO), et la communication intercellulaire est le rôle de la jonction GAP."
      },
      {
        questionText: "Les dispositifs jonctionnels peuvent correspondre à :",
        options: [
          "Des conformations morphologiques des surfaces membranaires.",
          "Des modifications des surfaces de contact cellulaires.",
          "Des contacts entre membrane plasmique / membrane plasmique.",
          "Des déformations de la membrane plasmique latéro-basale.",
          "Des zones d'interaction membrane plasmique-lame basale."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le commentaire ne fournit pas de texte, mais les réponses sélectionnées impliquent que les dispositifs jonctionnels correspondent à des modifications des surfaces de contact cellulaires, des contacts entre membranes plasmiques adjacentes (C) et des déformations de la membrane plasmique latéro-basale (D)."
      },
      {
        questionText: "Les jonctions basales des Entérocytes comportent des :",
        options: [
          "Des protéines jonctionnelles de type Occludines.",
          "Protéines transmembranaires appelées Intégrines.",
          "Protéines des plaques sous-membranaires.",
          "Interactions avec les filaments intermédiaires du cytosquelette.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le commentaire renvoie à un tableau (QCM 8 2021-2022). Il précise que chaque molécule membranaire située sur la face cytosolique est considérée comme sous-membranaire. Il fait référence aux jonctions basales, dont les hémidesmosomes sont un exemple. Ces jonctions comportent des intégrines (protéines transmembranaires), des plaques sous-membranaires et interagissent avec les filaments intermédiaires du cytosquelette. Les occludines (A) sont présentes dans les jonctions serrées, qui sont apicales."
      },
      {
        questionText: "Une jonction GAP permet :",
        options: [
          "La mise en place face à face de 2 connexons.",
          "L'organisation d'un connexon autour d'un canal de communication.",
          "Un contact indirect de 2 hexamères de connexine.",
          "Des échanges intercellulaires de molécules spécifiques.",
          "D'assurer une perméabilité perméative entre 2 cellules adjacentes."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Le commentaire renvoie à un autre QCM (QCM 7 2021-2022) et précise qu'une jonction GAP permet un contact direct de 2 hexamères de connexine et que la distance entre les deux membranes plasmiques adjacentes est nulle. Il s'agit d'une communication directe via des canaux formés par les connexons."
      },
      {
        questionText: "Un complexe jonctionnel représente l'ensemble successif :",
        options: [
          "Zo, Za, Ma.",
          "Zo, Za, Ma, hémidesmosome.",
          "Zo, Za, Ma, jonction Gap.",
          "Jonction serrée, jonction adherens, desmosome.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que 'Toutes les réponses sont claires'. Le complexe jonctionnel, de l'apex vers la base de la cellule, est composé de la jonction serrée (Zo), de la jonction d'adhérence (Za), et du desmosome (Ma)."
      },
      {
        questionText: "Le réseau ou plateau terminal d'un Entéocyte s'organise suite à une interaction :",
        options: [
          "Des MF d'actine microvillosaires et des MF de la Zo.",
          "Des MF de kératine microvillosaires et des MF de la jonction serrée.",
          "Des MF d'actine de la Za et les MF d'actine microvillosiaires.",
          "Des MF de kératine du desmosome de ceinture et les MF d'actine microvillosiaires.",
          "Des MF d'actine de la Ma et des filaments intermédiaires des hémidesmosomes."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire souligne que le réseau terminal est le résultat d'une interaction entre les microfilaments (MF) d'actine de la jonction d'adhérence (ZA) et les microfilaments d'actine des microvillosités."
      },
      {
        questionText: "Les différenciations membranaires d'une cellule Eucaryote :",
        options: [
          "Sont présentes chez les cellules dites polarisées.",
          "Sont présentes en permanence simultanément chez un type cellulaire donné.",
          "Sont organisées en 5 modèles.",
          "Peuvent être classées selon leurs mécanismes fonctionnels.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "A : Les différenciations membranaires sont caractéristiques des cellules polarisées. B : Les dispositifs jonctionnels ne sont pas toujours présents. C : Il n'existe pas de classification en 5 modèles. D : La classification se base sur leurs étendues (zonula, fascia, macula) et la largeur des espaces intercellulaires ('occludens' ou 'tight', 'adherens', 'gap')."
      },
      {
        questionText: "Parmi les composants moléculaires d'une microvillosité d'un Entéocyte, on peut retrouver :",
        options: [
          "L'actine, la tubuline, la villine.",
          "La villine, le fibrinogène, l'actine.",
          "L'actine, la villine, l'occludine.",
          "L'actine, la fimbrine, la villine.",
          "L'actine, la tubuline, la connexine."
        ],
        correctOptionIndexes: [3],
        explanation: "L'image dans le commentaire montre la structure d'une microvillosité. Elle est composée d'un faisceau de microfilaments d'actine, ancrés par des protéines comme la villine au sommet et la fimbrine le long des filaments."
      },
      {
        questionText: "Les systèmes de co-transports antiport et symport membranaires sont toujours actifs.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire se réfère à la structure n°1, qui est le plateau strié (l'ensemble des microvillosités intestinales). Il n'explique pas directement pourquoi l'affirmation est fausse, mais on sait que certains co-transports peuvent être passifs, et l'affirmation 'toujours actifs' est donc incorrecte."
      },
      {
        questionText: "Les N CAMs assurent des propriétés d'adhésion lors de la synaptogenèse et la neurogenèse.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire se réfère à la structure n°2, qui est la jonction serrée (ZO). Le commentaire est incohérent avec la question, et n'explique pas la bonne réponse. Les N-CAMs (Neural Cell Adhesion Molecules) sont bien impliquées dans l'adhésion cellulaire dans le système nerveux."
      },
      {
        questionText: "Les intégrines peuvent interagir comme des récepteurs aux molécules de la lame basale.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire n'est pas lié à la question et est incorrect : 'Les dispositifs moléculaires en 2 sont organisés en Zonula (pôle apical)'. La réponse est bien 'Vrai', car les intégrines, présentes dans les hémidesmosomes, agissent comme des récepteurs pour les molécules de la matrice extracellulaire, y compris la lame basale."
      },
      {
        questionText: "Sous l'action des chémokines, les intégrines actives leucocytaires se lient aux ICAMs des cellules A endothéliales.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire se réfère à la structure n°3, qui est la jonction d'adhérence (ZA). Le commentaire est incohérent avec la question : 'Le réseau terminal correspond à l'interaction entre les microfilaments d'actine du plateau et le avec celles de ZA'. La réponse est correcte, il s'agit d'un mécanisme d'adhésion cellulaire et de diapédèse."
      },
      {
        questionText: "Un récepteur RLDL muté dans son domaine cytosolique n'est pas reconnu par l'adaptine.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire n'est pas lié à la question. Il indique que 'les dispositifs jonctionaux ne sont pas toujours présents chez les cellules épithéliales (polarisées)'. La réponse est correcte car le domaine cytosolique du récepteur est essentiel pour la liaison à l'adaptine lors de l'endocytose par récepteur."
      },
      {
        questionText: "Des vésicules de type cavéole peuvent renfermer des molécules nutritives.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "La réponse est correcte car les cavéoles sont impliquées dans la pinocytose, un mécanisme de transport de fluides et de solutés (y compris des molécules nutritives) à travers la membrane."
      },
      {
        questionText: "La cavéoline est une protéine membranaire qui se lie à l'ensemble des lipides lipophobes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question. Il se réfère à la structure n°4, qui est le desmosome (MA), et liste ses composants. La cavéoline est une protéine membranaire qui se lie aux lipides, mais pas spécifiquement aux lipides lipophobes. Elle est impliquée dans la formation des cavéoles."
      },
      {
        questionText: "Les récepteurs membranaires reconnaissent des molécules signal lipophobes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question : 'La ligne médiane correspond à un ensemble de protéines transmembranaires appelées 'cadhérines' organisées parallèlement'. Les récepteurs membranaires reconnaissent des molécules hydrophiles (lipophobes), tandis que les molécules lipophiles (hydrophobes) peuvent traverser la membrane et se lier à des récepteurs intracellulaires. L'affirmation est donc fausse."
      },
      {
        questionText: "La molécule transductrice Gas peut stimuler un effecteur primaire type adénylate cyclase.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire est incohérent avec la question : 'La structure en 5 (invagination) présente une configuration latérale ou basale'. La réponse est 'Vrai'. C'est un principe de la transduction de signal, où la sous-unité G alpha s'associe à l'adénylate cyclase, qui va transformer l'ATP en AMPc pour continuer la cascade du signal."
      },
      {
        questionText: "La protéine G régule l'activité des récepteurs adrénergiques, au niveau de la cellule musculaire squelettique.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire est incohérent avec la question et explique la jonction communicante. La réponse est 'Vrai'. L'adrénaline se lie à son récepteur, et la protéine G s'active pour entraîner une cascade de réactions."
      },
      {
        questionText: "Un protofilament d'un MT comporte toujours une succession de dimères de tubulines αβ GTP.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question et décrit la composition du complexe jonctionnel : 'Le complexe jonctionnel comprend la zonula occludens, Zonula adherens et la Macula adherens (desmosome)'. L'affirmation est fausse car l'hydrolyse du GTP en GDP fait partie de la dynamique des microtubules."
      },
      {
        questionText: "La maladie d'Alzheimer est une maladie neurodégénérative des extrémités des neurotubules.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question. Il se réfère à la structure 7, les hémidesmosomes, et affirme qu'ils sont impliqués dans la cohésion cellule-matrice extracellulaire. La maladie d'Alzheimer est une neurodégénérescence due à l'accumulation de protéines Tau (microtubules-associées) anormalement phosphorylées."
      },
      {
        questionText: "Les molécules Tau et MAP2 sont spécifiques aux MT axonaux.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Les molécules Tau sont spécifiques des MT des axones, et les MAP2 sont spécifiques des MT dendritiques."
      },
      {
        questionText: "Les protéines associées aux événements de transports vésiculaires sont récupérés à la centrifugation du 3ème sumageant.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question. Il explique le rôle des microvillosités intestinales et des jonctions serrées. L'affirmation est fausse car les protéines vésiculaires sont récupérées dans un autre fractionnement cellulaire (microsomes), et non pas au troisième surageant."
      },
      {
        questionText: "Les molécules de tubuline et actine représentent comme les sous unités ribosomales des éléments non figurés du hyaloplasme.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question. Il fait référence aux filaments intermédiaires (tonofilaments) qui sont ancrés par les desmoplaquines et les placoglobines. Les molécules de tubuline et d'actine ne sont pas des éléments non figurés du hyaloplasme, et elles ne sont pas comparables aux sous-unités ribosomales."
      },
      {
        questionText: "À la métaphase et la cytodiérèse d'un cyclo mitotique, la cellule est dans un état gel.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique 'C'est claire', ce qui ne donne pas d'explication. L'état gel est caractéristique de la cytodiérèse mais pas de la métaphase, ce qui rend l'affirmation fausse."
      },
      {
        questionText: "Avec l'aide du centrosome, le hyaloplasme constitue un support dynamique des organites.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire est incohérent avec la question, et explique le rôle de la molécule d'actine dans le tissu musculaire. La réponse est 'Vrai' car le centrosome et le hyaloplasme forment le cytosquelette, qui maintient la forme de la cellule et permet le mouvement des organites."
      },
      {
        questionText: "Les microsomes lisses constituent des vésicules de la face Trans Golgienne FC.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question : 'liés aux filaments de kératine'. Les microsomes sont des fragments d'organites. Ils ne constituent pas des vésicules de la face Trans Golgienne."
      },
      {
        questionText: "La fimbrine est une protéine de stabilisation des faisceaux d'actine microvillositaire.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire est incohérent avec la question. Il se réfère à la jonction d'adhérence (ZA), et liste ses rôles : rigidité, cohésion intercellulaire, et synchronisation des mouvements. La réponse correcte est que la fimbrine est une protéine qui se lie à l'actine et stabilise les faisceaux de microfilaments d'actine dans les microvillosités."
      },
      {
        questionText: "Les MAP matrices sont des produits de translocation à travers les membranes du REG.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est incohérent avec la question et explique que l'élément 5 (cadhérines) interagit avec les protéines de plaque. La réponse est Faux. Les MAP (Microtubule-Associated Proteins) sont des protéines cytosoliques, non transloquées à travers le réticulum endoplasmique granuleux (REG)."
      },
      {
        questionText: "La Gelsoline est une protéine de contrôle de fragmentation des Mf d'actine Ca++ dépendante.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "La gelsoline est une protéine de régulation des microfilaments d'actine qui, en présence de calcium, s'active et fragmente les filaments d'actine en se liant à leurs extrémités."
      }
    ]
  },
  {
    title: "Adhésivité cellulaire",
    subject: "cytology",
    questions: [
      {
        questionText: "Les protéines transmembranaires en β peuvent :",
        options: [
          "Correspondre à des sous-unités αβ Intégrine.",
          "Assurer le contrôle de la prolifération cellulaire.",
          "Interagir avec des facteurs solubles après activation.",
          "Subir des mutations et altérer l'intégrité des cellules.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les intégrines sont des protéines transmembranaires qui se lient à la matrice extracellulaire. La sous-unité β est la composante transmembranaire de l'intégrine, formant un dimère avec la sous-unité α. Les intégrines interagissent avec des facteurs solubles comme les cations bivalents (Ca++, Mg++) et jouent un rôle crucial dans le contrôle de la prolifération cellulaire. Une mutation dans ces protéines peut altérer l'adhésion et entraîner une prolifération incontrôlée, un phénomène souvent observé dans le cancer."
      },
      {
        questionText: "Une modification quantitative et qualitative de E-Cadhérines peut induire une invasion tumorale gastrique.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Normalement, les E-cadhérines assurent l'intégrité des cellules épithéliales en se liant entre elles, empêchant leur dispersion. Dans le cas du cancer gastrique, une modification qualitative et quantitative des E-cadhérines (souvent dues à des mutations) perturbe cette liaison. Les cellules perdent leur adhésion et leur intégrité, changeant de morphologie et favorisant une migration et une invasion tumorale."
      },
      {
        questionText: "L'épidermolyse bulleuse est liée à une pathologie des molécules Cadhérines et Intégrines.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "L'épidermolyse bulleuse est une maladie héréditaire ou auto-immune caractérisée par un décollement de l'épiderme. Ceci est causé par des pathologies affectant les molécules d'adhésion, notamment les cadhérines et les intégrines. Le Pemphigus vulgaire, un type de cette maladie, est mentionné comme un exemple."
      },
      {
        questionText: "Dans le phénomène d'inhibition de contact, l'adhérence intercellulaire est diminuée.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "L'inhibition de contact est un phénomène par lequel les cellules cessent de proliférer lorsqu'elles entrent en contact les unes avec les autres. Ce processus est médié par une augmentation de l'adhérence cellulaire. Ainsi, une diminution de l'adhérence intercellulaire n'est pas cohérente avec le phénomène."
      },
      {
        questionText: "L'agrégation plaquettaire se déroule suite à une interaction hétérophilique hétérotypique Intégrines plaquettaires - fibrinogène plasmatique.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "L'agrégation plaquettaire est le résultat d'une interaction entre les intégrines des plaquettes et le fibrinogène dans le plasma. Cette liaison est dite hétérophilique et hétérotypique parce qu'elle implique deux types de molécules différentes : les intégrines (récepteur) et le fibrinogène (ligand). L'activation des plaquettes expose ces intégrines, permettant leur liaison et l'agrégation."
      },
      {
        questionText: "Les composants de la matrice extracellulaire peuvent interagir avec les Cadhérines et les Intégrines.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les intégrines sont les récepteurs principaux de la matrice extracellulaire (MEC) sur la surface cellulaire. Bien que les cadhérines soient principalement impliquées dans l'adhésion cellule-cellule, elles peuvent aussi avoir des interactions indirectes."
      },
      {
        questionText: "Le substrat d'adhésivité d'une molécule Intégrine peut être :",
        options: [
          "Un facteur soluble.",
          "Une molécule de fibrinogène.",
          "Une molécule de laminine.",
          "Un composant moléculaire du cytosquelette.",
          "Une seconde molécule Intégrine."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les intégrines agissent comme des récepteurs d'adhésion qui se lient à des ligands de la matrice extracellulaire (MEC). Les exemples de ces ligands incluent la laminine et la fibronectine. De plus, les intégrines plaquettaires se lient spécifiquement au fibrinogène pour l'agrégation. L'interaction est également régulée par des ions comme Ca++."
      },
      {
        questionText: "Une liaison homotypique homophilique peut être observée dans :",
        options: [
          "Une zonula adherens.",
          "Une macula adherens.",
          "Un hémidesmosome.",
          "Une liaison Entérocyte - Entérocyte.",
          "Une liaison plaquette sanguine - plaquette sanguine."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La liaison homophilique se produit lorsque deux molécules de même type interagissent (ex: Cadhérine se liant à une autre Cadhérine). La liaison homotypique se produit entre deux cellules de même type (ex: cellule épithéliale avec cellule épithéliale). Les cadhérines dans les zonula adherens et les cellules épithéliales (entérocytes) établissent des liaisons homophiliques entre elles, ce qui est également une interaction homotypique. En revanche, l'agrégation plaquettaire implique des liaisons hétérophiliques car elle est médiée par le fibrinogène."
      },
      {
        questionText: "Les N-Cadhérines sont présentes dans les membranes plasmiques cellulaires :",
        options: [
          "Des neurones.",
          "Des cellules embryonnaires.",
          "Des cellules épithéliales.",
          "Des cellules hépatiques.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les cadhérines sont spécifiques à des types de tissus : E-cadhérines : Tissus épithéliaux. N-cadhérines : Neurones, cellules cardiaques, tissus embryonnaires. L-cadhérines : Hépatocytes (foie). P-cadhérines : Placenta."
      },
      {
        questionText: "On peut localiser par immunofluorescence, dans un œuf fécondé en segmentation, in vitro :",
        options: [
          "N-Cadhérines.",
          "E-Cadhérines.",
          "P-Cadhérines.",
          "L-Cadhérines.",
          "O-Cadhérines."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "On y apprend que les cadhérines embryonnaires sont des N-cadhérines. Cependant, les cellules épithéliales de l'embryon ont des E-cadhérines et les P-cadhérines sont présentes dans le placenta. L'œuf fécondé étant un tissu embryonnaire, les trois types de cadhérines sont potentiellement présents."
      },
      {
        questionText: "Les composants de la lame basale sont homogènes d'un tissu à un autre.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "La composition de la lame basale n'est pas uniforme. Ses composants diffèrent en fonction du type de tissu cellulaire avec lequel elle est associée."
      },
      {
        questionText: "Comme pour les Intégrines, il existe chez l'Homme plusieurs isoformes des Cadhérines.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Il existe plusieurs types d'isoformes de Cadhérines chez l'Homme, notamment les N-cadhérines, les L-cadhérines, les P-cadhérines et les E-cadhérines, chacune ayant une localisation tissulaire spécifique."
      },
      {
        questionText: "Les modalités d'interactions cellulaires étudiées chez les entérocytes sont de type :",
        options: [
          "Homotypiques homophiliques.",
          "Hétérotypiques hétérophiliques.",
          "Homotypiques hétérophiliques.",
          "Hétérotypiques homophiliques.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Les entérocytes, qui sont des cellules épithéliales, se lient entre elles via des Cadhérines. Cette liaison se fait entre molécules de même type (homophilique) et entre cellules de même type (homotypique)."
      },
      {
        questionText: "L'inhibition de contact peut être relevée lors :",
        options: [
          "De l'application expérimentale des Ac Anticadhérines.",
          "De l'inhibition des molécules Cadhérines.",
          "D'une modification qualitative de l'expression des gènes des Intégrines.",
          "D'une altération moléculaire des Intégrines et des Cadhérines.",
          "Des phénomènes néoplasiques."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "L'inhibition de contact est un mécanisme qui empêche la prolifération des cellules lorsque la densité cellulaire est trop élevée. La perte de ce mécanisme est caractéristique des cellules cancéreuses (phénomènes néoplasiques). Cette perte peut être causée par une altération des molécules d'adhésion, notamment les Cadhérines et les Intégrines, soit par une inhibition de leur fonction, soit par des mutations génétiques."
      },
      {
        questionText: "Les molécules Intégrines sont décrites comme des molécules transmembranaires à :",
        options: [
          "Domaine extracellulaire Ca++ dépendante.",
          "Domaine intracellulaire en interaction avec les molécules du Cytosquelette.",
          "Sous unité α en interaction possible avec les fibres de collagène de la matrice extracellulaire.",
          "Sous unité β en interaction avec les composants de la Matrice extracellulaire.",
          "Présence exclusive dans les hémidesmosomes."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Elles sont des dimères hétérotypique (αβ) qui traversent la membrane cellulaire. Le domaine extracellulaire, qui se lie à la matrice extracellulaire, dépend des ions Ca++. Le domaine intracellulaire de la chaîne β se lie au cytosquelette via des protéines adaptatrices. Les sous-unités α et β sont toutes deux impliquées dans la liaison à la matrice extracellulaire."
      },
      {
        questionText: "La maladie de GLANZMANN :",
        options: [
          "Se manifeste par une hémorragie continue chez le patient.",
          "Se déclare après mutation du fibrinogène plasmatique.",
          "Est causée par une altération des intégrines plaquettaires.",
          "Sous tend une modification de l'expression d'un groupe d'intégrines plaquettaires.",
          "Induit une non-réparation cellulaire voire tissulaire."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La maladie de Glanzmann, ou thrombasténie, est une maladie génétique caractérisée par un défaut d'agrégation plaquettaire. Cela est dû à une altération des intégrines plaquettaires. Cette altération empêche les plaquettes de se lier au fibrinogène, ce qui est essentiel pour la formation du caillot, entraînant une hémorragie continue."
      },
      {
        questionText: "Le processus d'agrégation plaquettaire après une légère blessure comprend les étapes suivantes :",
        options: [
          "Action des chémokines.",
          "Activation d'un groupe d'intégrines membranaires plaquettaires.",
          "Attraction des plaquettes au site de lésion.",
          "Formation d'un caillot sanguin.",
          "Réparation tissulaire."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Le processus commence par l'activation des intégrines plaquettaires par des chémokines. Cette activation conduit à l'attraction des plaquettes vers le site de la lésion et leur adhésion à la lame basale via la fibronectine. Ensuite, l'agrégation se produit, formant le caillot sanguin grâce à la liaison des intégrines au fibrinogène."
      },
      {
        questionText: "La lame basale :",
        options: [
          "Est constamment renouvelée par certains types cellulaires selon un processus d'exocytose contrôlée.",
          "Présente une même composition moléculaire pour l'ensemble des épithéliums.",
          "Comprend des molécules type collagènes, fibronectine, fimbrine.",
          "Ses composants peuvent interagir avec les protéines périphériques internes membranaires.",
          "Peut entourer les cavités endosomales."
        ],
        correctOptionIndexes: [0],
        explanation: "La lame basale est renouvelée en permanence par les cellules qu'elle soutient via un processus d'exocytose, ce qui est une caractéristique des matrices extracellulaires."
      },
      {
        questionText: "Les molécules Intégrines :",
        options: [
          "Peuvent intervenir lors de certains phénomènes inflammatoires.",
          "N'interagissent jamais avec les filaments du cytosquelette.",
          "Sont composées de 2 sous-unités assurant des rôles similaires.",
          "Sont connues chez l'Homme pour l'homogénéité de leur composition chimique.",
          "Sont caractérisées par des interactions homotypiques hétérophiliques."
        ],
        correctOptionIndexes: [0],
        explanation: "Les intégrines jouent un rôle dans l'inflammation, en particulier dans la cicatrisation. Contrairement à la proposition B, elles interagissent avec le cytosquelette. Elles sont composées de deux sous-unités différentes (α et β) avec des rôles distincts. L'homogénéité de leur composition est fausse, car il existe de nombreux types d'intégrines. Leurs interactions sont de type hétérophilique."
      },
      {
        questionText: "Les molécules Cadhérines sont des :",
        options: [
          "Glycoprotéines transmembranaires, à liaisons homotypiques homophiliques, présentes en permanence à la surface membranaire de certains types cellulaires.",
          "Protéines transmembranaires, calcium dépendantes, localisées à la surface membranaire.",
          "Glycoprotéines transmembranaires à 2 sous-unités, présentes à la surface membranaire et intervenant dans l'inhibition de contact.",
          "Glycoprotéines transmembranaires, agissant comme des récepteurs à la lame basale, présentes en permanence à la surface membranaire.",
          "Glycoprotéines transmembranaires, à liaisons homotypique homophilique, interviennent dans l'agrégation plaquettaire et la cicatrisation tissulaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cadhérines sont des glycoprotéines. Elles se situent sur la face latérale des cellules épithéliales et sont responsables de l'adhésion cellule-cellule via des liaisons homophiliques. Le processus d'agrégation plaquettaire est, en revanche, assuré par les intégrines et le fibrinogène."
      },
      {
        questionText: "Le phénomène d'inhibition de contact est défini comme :",
        options: [
          "Un contact cellulaire inhibant la prolifération cellulaire.",
          "Un processus de répression des Cadhérines et des Intégrines.",
          "Une mutation des protéines jonctionnelles.",
          "Un mécanisme de la prolifération cellulaire.",
          "Une cascade de signalisation de synthèse des protéines de la prolifération cellulaire."
        ],
        correctOptionIndexes: [0],
        explanation: "L'inhibition de contact est le phénomène par lequel les cellules s'arrêtent de proliférer lorsqu'elles entrent en contact physique les unes avec les autres, formant une monocouche."
      },
      {
        questionText: "Les cellules cancéreuses épithéliales :",
        options: [
          "Présentent une adhérence intercellulaire non diminuée.",
          "N'échappent pas au phénomène d'inhibition de contact.",
          "En culture, forment une culture à confluence.",
          "Ne sont pas concernées par les phénomènes néoplasiques.",
          "Sont caractérisées par un modification qualitative et quantitative des Cadhérines ou Intégrines."
        ],
        correctOptionIndexes: [4],
        explanation: "Les cellules cancéreuses épithéliales présentent une diminution sévère de l'adhérence cellulaire. Elles échappent au phénomène d'inhibition de contact et ne forment pas de culture à confluence. Ces cellules sont impliquées dans des phénomènes néoplasiques, ce qui est le résultat d'une altération qualitative et quantitative des molécules d'adhésion, telles que les cadhérines et les intégrines."
      },
      {
        questionText: "Les N CAMs assurent des propriétés d'adhésion lors de la synaptogenèse et la neurogénèse.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire confirme l'énoncé en précisant la localisation des différents types de cadhérines. Il est précisé que les N-cadhérines sont présentes dans les neurones, les cellules cardiaques et les tissus embryonnaires, ce qui est cohérent avec leur rôle dans la synaptogenèse et la neurogenèse."
      },
      {
        questionText: "Les Intégrines peuvent interagir comme des récepteurs aux molécules de la lame basale.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les intégrines agissent comme des récepteurs pour les molécules de la lame basale et de la matrice extracellulaire. La chaîne alpha de l'intégrine se lie aux ligands spécifiques, tandis que la portion intracellulaire de la chaîne bêta assure l'ancrage au cytosquelette."
      }
    ]
  },
  {
    title: "La perméabilité cellulaire",
    subject: "cytology",
    questions: [
      {
        questionText: "L'évènement B peut être nommé :",
        options: [
          "Pinocytose.",
          "Endocytose par récepteur.",
          "Phagocytose.",
          "Transport cytotique.",
          "Endocytose constitutive."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le commentaire montre un tableau de classification des transports à travers la membrane plasmique. L'événement B, qui est représenté dans le tableau, se rapporte aux différents types de transport. La classification inclut les transports perméatifs (passifs et actifs) et les transports cytotiques (endocytose et exocytose). L'endocytose est ensuite subdivisée en pinocytose, phagocytose, et endocytose par récepteurs. Le transport cytotique englobe l'endocytose."
      },
      {
        questionText: "Les événements A et B :",
        options: [
          "Peuvent être inhibés par la colchicine.",
          "Sont bloqués en présence de Taxol.",
          "Nécessitent des molécules signal type Ach.",
          "Sont bloqués par l'Ouabaïne.",
          "Ne peuvent pas se dérouler chez l'E. coli et le HIV."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire indique que l'option E est la seule bonne réponse car la colchicine et le Taxol agissent sur le cytosquelette, l'acétylcholine (Ach) est un neurotransmetteur et l'ouabaïne est un inhibiteur de la pompe Na+/K+. Les événements A et B sont probablement des transports cellulaires qui n'ont pas lieu chez les organismes procaryotes comme E. coli et les virus comme le VIH, car ces organismes n'ont pas de mécanisme de transport cellulaire similaire aux eucaryotes."
      },
      {
        questionText: "Soit les représentations schématiques illustrant deux entérocytes. Les évènements de perméabilité se déroulant en 1 peuvent assurer :",
        options: [
          "Une entrée de glucose ATP indépendante.",
          "Une entrée de glucose contre gradient.",
          "Une diffusion des ions Na+.",
          "Une élévation de la concentration intracellulaire potassique.",
          "Une élévation de la concentration intracellulaire en Glucose."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Le commentaire et le schéma montrent un transporteur SGLT1 (Sodium-Glucose Linked Transporter 1) qui co-transporte le glucose et le sodium. L'entrée de glucose est contre son gradient de concentration, car elle utilise le gradient de sodium qui est établi par la pompe Na+/K+ ATPase. Ce mécanisme est un transport actif secondaire. En conséquence, il y a une élévation de la concentration intracellulaire de glucose."
      },
      {
        questionText: "Les molécules transportées en 1 sont :",
        options: [
          "Porteuses de charge électrique.",
          "Des molécules organiques.",
          "Co-transportées de manière symport.",
          "Également co-transportées en 3.",
          "Dépendantes de protéines SGLut."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le commentaire explique que le transport des ions (Na+) doit être accompagné par le transport d'autres molécules (glucose) par le même système de transport, appelé symport. Ce mécanisme se déroule au pôle apical de la cellule. Le transporteur SGLT1 est une protéine qui effectue ce co-transport."
      },
      {
        questionText: "Les perméases, les canaux ioniques et les aquaporines transportent les molécules dans le sens de leur gradient de concentration.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que les transports passifs, comme ceux effectués par les perméases et les aquaporines, se font toujours dans le sens du gradient de concentration. Cependant, le transport actif, comme celui des canaux ioniques, se fait contre le gradient. Le transporteur d'ions mentionné dans le commentaire est la pompe Na+/K+ qui est un transport actif. La question est fausse car elle généralise le mécanisme pour tous ces transporteurs."
      },
      {
        questionText: "Les Glut 2 assurent un transport basal de glucose.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire montre un tableau sur la distribution cellulaire des isoformes de GLUT. Il est clairement indiqué que le transporteur GLUT2 est un transporteur de glucose basolatéral, qui assure le transport basal du glucose hors de la cellule de l'intestin, du rein, du foie et du pancréas."
      },
      {
        questionText: "Les trois modalités d'endocytose assurent la survie cellulaire.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire explique que bien que l'endocytose soit essentielle à la cellule, elle peut aussi être utilisée par des virus, comme le virus de la grippe, pour pénétrer dans la cellule, ce qui peut entraîner la mort de celle-ci. Ce n'est donc pas toujours un processus bénéfique pour la cellule."
      },
      {
        questionText: "Un complexe jonctionnel représente l'ensemble successif :",
        options: [
          "Zo, Za, Ma.",
          "Zo, Za, Ma, hémidesmosome.",
          "Zo, Za, jonction Gap.",
          "Zo, Za, jonction fascia, Ma.",
          "j.e jonction serrée, jonction adhérens, desmosome."
        ],
        correctOptionIndexes: [0],
        explanation: "La question concerne l'organisation des jonctions cellulaires. L'acronyme correct pour les jonctions serrées, les jonctions adhérentes et les desmosomes est bien Zo, Za, Ma (Zone Occludens, Zone Adherens, Macula Adherens). Les autres options incluent des structures qui ne correspondent pas à la séquence du complexe jonctionnel."
      },
      {
        questionText: "Le réseau ou plateau terminal d'un Entérocyte s'organise suite à une interaction :",
        options: [
          "Des Mf d'actine microvillosites et des Mf de la Zo.",
          "Des Mf de kératine microvillosites et des Mf de la jonction serrée.",
          "Des Mf d'actine de la Ma et les Mf d'actine microvillosites.",
          "Des Mf de kératine du desmosome de ceinture et les Mf d'actine microvillosites.",
          "Des Mf d'actine de la Ma et des filaments intermédiaires des hémidesmosomes."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire n'est pas directement lié à la question. Cependant, la question se réfère à la composition du plateau terminal des entérocytes. Il est composé de microfilaments d'actine. Ces microfilaments sont ancrés dans le réseau terminal. Ce réseau interagit avec la zone occludens (Zo). Le réseau terminal est une structure riche en actine et en protéines de liaison qui ancrent les microvillosités."
      },
      {
        questionText: "Les modalités d'interactions cellulaires étudiées chez les entérocytes sont de type :",
        options: [
          "Homotypiques homophiliques.",
          "Hétérotypiques hétérophiliques.",
          "Homotypiques hétérophiliques.",
          "Hétérotypiques homophiliques.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que le transport de LDL par endocytose nécessite des vésicules avec des récepteurs et des molécules d'adhésion, ce qui est une interaction homophilique. La question traite des interactions homotypiques, où deux cellules de même type se lient. Les entérocytes, qui sont des cellules épithéliales, se lient entre elles. Les interactions homophiliques (entre molécules de même nature) sont donc un type d'interaction homotypique."
      },
      {
        questionText: "L'inhibition de contact peut être relevée lors :",
        options: [
          "De l'application expérimentale des Ac Anticadhérines.",
          "De l'inhibition des molécules Cadherines.",
          "D'une modification qualitative de l'expression des gènes des Intégrines.",
          "D'une altération moléculaire des Intégrines et des Cadherines.",
          "Des phénomènes néoplasiques."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire explique que les aquaporines sont des homopolymères qui transportent l'eau, mais n'ont rien à voir avec l'inhibition de contact. Cependant, l'inhibition de contact est une propriété des cellules normales qui arrêtent de proliférer lorsqu'elles entrent en contact avec d'autres cellules. Les cellules cancéreuses (phénomènes néoplasiques) perdent cette inhibition, ce qui conduit à une croissance incontrôlée. C'est donc dans ce contexte qu'elle est relevée."
      },
      {
        questionText: "Les transports ioniques se déroulent toujours dans le sens du gradient de concentration.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que les transports ioniques se font contre le gradient de concentration. C'est la définition des transports actifs, auxquels appartiennent de nombreux transports d'ions, comme celui de la pompe Na+/K+."
      },
      {
        questionText: "L'AQP peut transporter des molécules d'eau et des protons H+.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire est très clair : les aquaporines (AQP) transportent uniquement les molécules d'eau."
      },
      {
        questionText: "Les Glut 1 et les Glut 2 présentent un mécanisme fonctionnel similaire.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que cette affirmation est vraie. Les deux transporteurs, GLUT1 et GLUT2, transportent le glucose de manière passive (diffusion facilitée), bien que leur localisation et leur affinité pour le glucose diffèrent. Ils ne nécessitent pas d'ATP pour leur fonctionnement."
      },
      {
        questionText: "L'ATPase permet de maintenir l'onde de dépolarisation membranaire d'une cellule excitable.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que la pompe Na+/K+ ATPase maintient le potentiel de repos membranaire en contrôlant les gradients ioniques. Elle ne maintient pas l'onde de dépolarisation, mais elle est essentielle pour rétablir les conditions initiales après la dépolarisation."
      },
      {
        questionText: "A l'échelle d'une synapse neuro-musculaire le RAch reste toujours actif.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire explique que lorsque les molécules d'acétylcholine (Ach) se détachent de leurs récepteurs (RAch), ces derniers deviennent inactifs. La réponse du récepteur n'est donc pas permanente, mais dépend de la présence de son ligand."
      },
      {
        questionText: "L'ouabaïne induit une augmentation de la concentration ionique intracellulaire.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que l'ouabaïne est un inhibiteur de la pompe Na+/K+. En bloquant cette pompe, les cellules perdent leur capacité à expulser le sodium et à faire rentrer le potassium. Le sodium s'accumule donc à l'intérieur de la cellule, ce qui augmente sa concentration ionique intracellulaire."
      },
      {
        questionText: "Dans un macrophage, le contenu d'un phagosome est hydrolysé dans le compartiment endosomal.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire précise que le phagosome fusionne avec les vésicules à hydrolases, qui sont en fait des lysosomes. Le contenu du phagosome est donc hydrolysé dans le phagolysosome (phagosome + lysosome), et non dans le compartiment endosomal."
      },
      {
        questionText: "L'ingestion membranaire de molécules en solution dans des vésicules de 100nm de diamètre se nomme pinocytose.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire définit la pinocytose comme l'ingestion de petites molécules en solution dans des vésicules. Le schéma et la description du commentaire confirment que ce processus est bien de la pinocytose."
      },
      {
        questionText: "Les perméases symport du glucose sont réparties à la surface apicale des cellules polarisées.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire inclut un schéma montrant une cellule épithéliale de l'intestin grêle. Sur ce schéma, la perméase glucose/sodium (symporteur SGLT1) est clairement localisée sur le pôle apical de la cellule, tourné vers la lumière intestinale. Le commentaire confirme visuellement cette localisation, essentielle pour l'absorption du glucose."
      },
      {
        questionText: "Les systèmes de co-transports antiport et symport membranaires sont toujours actifs.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les co-transports, qu'ils soient symport (même sens) ou antiport (sens opposé), sont des mécanismes de transport actif secondaire. Ils utilisent l'énergie stockée dans le gradient de concentration d'une molécule (généralement un ion) pour transporter une autre molécule contre son propre gradient. Par conséquent, ils sont toujours considérés comme des transports actifs."
      },
      {
        questionText: "L'entrée du K+ et la libération du Na à travers une barrière membranaire nécessite une translocation de l'ATPase Na+/K+.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que l'affirmation est fausse. Le mécanisme de la pompe Na+/K+ ATPase ne nécessite pas de translocation de la protéine entière à travers la membrane. Il repose plutôt sur des changements de conformation de la pompe. Ces changements de forme permettent de lier le Na+ et le K+ et de les libérer de part et d'autre de la membrane. C'est un mouvement interne de la protéine, pas un déplacement."
      }
    ]
  },
  {
    title: "La communication intercellulaire",
    subject: "cytology",
    questions: [
      {
        questionText: "La maladie de GLANZMANN :",
        options: [
          "Se manifeste par une hémorragie continue chez le patient",
          "Se déclare après mutation du fibrinogène plasmatique",
          "Est causée par une altération des intégrines membranaires plaquettaire",
          "Sous-tend une modification de l’expression d’un groupe d’intégrines plaquettaires au niveau plaquettaire",
          "Induit une non réparation cellulaire voire tissulaire."
        ],
        correctOptionIndexes: [3],
        explanation: "La maladie de Glanzmann est une maladie génétique rare qui affecte la fonction des plaquettes. Elle est causée par un défaut des intégrines plaquettaires, qui sont des protéines à la surface des plaquettes, essentielles pour leur agrégation. Un de ces groupes d’intégrines, le complexe GPIIb/IIIa, est crucial pour la liaison au fibrinogène et l'agrégation plaquettaire. Dans la maladie de Glanzmann, l'expression de ce groupe d'intégrines est modifiée ou absente, ce qui empêche les plaquettes de s'agréger correctement. Cela mène à des saignements anormaux, mais le problème initial réside dans l'expression des intégrines, pas dans le fibrinogène lui-même."
      },
      {
        questionText: "Le processus d’agrégation plaquettaire après une légère blessure comprend les étapes suivantes :",
        options: [
          "Action des chémokines",
          "Activation d’un groupe d’intégrines membranaires plaquettaires",
          "Attraction des plaquettes au site de lésion",
          "Formation d’un caillot sanguin",
          "Réparation tissulaire"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le processus d'agrégation plaquettaire est une étape clé de l'hémostase (arrêt du saignement). Après une blessure, plusieurs événements se produisent : Les plaquettes sont attirées vers le site de la lésion (réponse C). Elles sont ensuite activées par diverses substances (comme le collagène exposé ou la thrombine), ce qui déclenche l'activation des intégrines membranaires plaquettaires (réponse B). Ces intégrines activées permettent aux plaquettes de se lier entre elles, formant un agrégat plaquettaire. Les étapes restantes sont une conséquence ou une partie d'un processus plus large."
      },
      {
        questionText: "Dans un état dissocié, la protéine G est dite active.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "La protéine G, qui est un hétérotrimère (composée des sous-unités alpha, bêta et gamma), est activée lorsqu'elle se dissocie. Initialement, elle est liée au GDP. Lorsqu'un ligand se fixe sur le récepteur GPCR (Récepteur Couplé à la Protéine G), la protéine G est activée. La sous-unité alpha libère le GDP et se lie au GTP. Cette liaison au GTP provoque la dissociation de la sous-unité alpha des sous-unités bêta et gamma. La sous-unité alpha liée au GTP et le complexe bêta-gamma sont alors considérés comme les formes actives qui peuvent interagir avec d'autres effecteurs primaires."
      },
      {
        questionText: "Lors de la signalisation d'un GPCR, l’adénylate cyclase joue le rôle d'une protéine enzymatique transductrice.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Dans la voie de signalisation GPCR, le rôle de la molécule transductrice membranaire est joué par la protéine G elle-même. C'est la protéine G qui transmet le signal du récepteur (GPCR) à un effecteur primaire, comme l'adénylate cyclase (AC). L'adénylate cyclase est un enzyme qui catalyse la formation de l'AMP cyclique (AMPc), un second messager. Elle est un effecteur primaire, pas un transducteur."
      },
      {
        questionText: "L'adrénaline et l'Ach peuvent induire une même réponse biologique sur différents types cellulaires.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "La réponse biologique d'une cellule ne dépend pas uniquement de la molécule de signalisation, mais aussi du type de récepteur et des voies de signalisation intracellulaire de la cellule cible. Il est possible que deux voies de signalisation différentes (activées par l'Ach ou l'adrénaline) convergent pour produire le même effet biologique sur une même cellule ou des cellules différentes."
      },
      {
        questionText: "Dans un système GPCR, la synthèse des seconds messagers peut provoquer l'activation des molécules PKA.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "La protéine kinase A (PKA) est activée par un second messager, l'AMP cyclique (AMPc). Dans une voie de signalisation GPCR, la protéine G activée stimule l'adénylate cyclase (AC). L'AC convertit l'ATP en AMPc. Cet AMPc agit comme un second messager, se liant aux sous-unités régulatrices de la PKA, ce qui libère et active les sous-unités catalytiques."
      },
      {
        questionText: "Dans la cellule hépatique les récepteurs de l'insuline activés :",
        options: [
          "Sont tyrosine dépendant",
          "Sont internalisés par endocytose",
          "Sont sensibles aux molécules de glycogène",
          "Sont impliqués dans la transmission synaptique",
          "Sont toujours dimérisés"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les récepteurs de l'insuline sont des récepteurs tyrosine kinase. Lorsqu'ils sont activés par la liaison de l'insuline, ils se phosphorylent sur des résidus tyrosine (A). Après leur activation, ils sont souvent internalisés par endocytose (B). L'activation de ces récepteurs dans les cellules hépatiques conduit à la synthèse de glycogène (C). La transmission synaptique concerne les neurones (D). Les récepteurs de l'insuline sont des dimères stables même avant la liaison du ligand (E)."
      },
      {
        questionText: "Les récepteurs membranaires reconnaissent des molécules signal lipophobes.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Les molécules de signalisation lipophobes (hydrophiles) ne peuvent pas traverser la membrane plasmique. Par conséquent, leurs récepteurs sont situés sur la membrane cellulaire. Ces récepteurs membranaires, une fois liés à la molécule de signalisation, transmettent le signal à l'intérieur de la cellule. En revanche, les molécules lipophiles (hydrophobes) peuvent traverser la membrane et se lient à des récepteurs intracellulaires."
      },
      {
        questionText: "Un GPCR est composé de 7 molécules transmembranaires.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [1],
        explanation: "Un GPCR est une seule protéine transmembranaire qui traverse la membrane plasmique sept fois. Il est donc composé d'une seule chaîne polypeptidique qui forme sept hélices alpha transmembranaires. Ce n'est pas sept molécules distinctes, mais une seule protéine avec sept domaines transmembranaires."
      },
      {
        questionText: "La molécule transductrice Galpha peut stimuler un effecteur primaire type adénylate cyclase.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctOptionIndexes: [0],
        explanation: "Dans la signalisation GPCR, la sous-unité alpha (Gα) de la protéine G est la molécule transductrice. Lorsqu'elle est activée, elle se dissocie des sous-unités bêta et gamma et se lie à un effecteur primaire. Un exemple d'effecteur primaire est l'adénylate cyclase, qui est souvent activée (ou inhibée) par la sous-unité Gα pour générer le second messager AMPc."
      }
    ]
  },
  {
    title: "Cytosquelette",
    subject: "cytology",
    questions: [
      {
        questionText: "Les protéines considérées comme membranaires sont:",
        options: [
          "Les molécules de Clathrine.",
          "Les monomères de Tubuline.",
          "Les isomères d'Actine.",
          "Les molécules d'Acetyl choline.",
          "Les Cadherines."
        ],
        correctOptionIndexes: [4],
        explanation: "Les tubulines et les actines sont des composants du cytosquelette, pas des protéines membranaires. La clathrine est impliquée dans le transport vésiculaire. L'acétylcholine est un neurotransmetteur. Les cadhérines, en revanche, sont bien des protéines membranaires d'adhésion cellulaire."
      },
      {
        questionText: "À l'échelle du compartiment B: Le Cytosquelette présente:",
        options: [
          "Assure les flux vésiculaires.",
          "Reste insensible à la Cytochalasine.",
          "Les protéines motrices associées sont nommées manteaux vésiculaires.",
          "Les MT sont de type stable.",
          "Les MF ont une longueur stable."
        ],
        correctOptionIndexes: [0],
        explanation: "Les cytochalasines sont des mycotoxines qui inhibent la polymérisation des microfilaments d'actine, ce qui les rend sensibles à cette molécule. Les protéines motrices du cytosquelette (kinésines et dynéines) ne sont pas appelées 'manteaux vésiculaires'. Les filaments d'actine (MF) et les microtubules (MT) ne sont pas de longueur stable. La fonction principale du cytosquelette est d'assurer le transport et le mouvement dans la cellule, y compris les flux vésiculaires."
      },
      {
        questionText: "À l'échelle du compartiment B: Les MT présents sont liés à (aux):",
        options: [
          "Centrosome.",
          "Diplosome.",
          "L'anneau TuRC.",
          "Membranes nucléaires.",
          "Microfilaments d'actine."
        ],
        correctOptionIndexes: [0],
        explanation: "Les microtubules (MT) sont ancrés et organisés par le centrosome, qui est le principal centre organisateur des microtubules (MTOC) dans la cellule animale. Le centrosome est composé de deux centrioles (diplosome) et d'une matrice péricentriolaire contenant, entre autres, l'anneau de tubuline gamma (anneau TuRC), qui est un site de nucléation des MT. Les MT ne sont pas directement liés aux membranes nucléaires ou aux microfilaments d'actine."
      },
      {
        questionText: "À l'échelle du compartiment B: Les MF présents sont:",
        options: [
          "Composés de profilaments d'actine.",
          "Caractérisés par une polarité.",
          "Formés d'hélices bicaténaires d'actine G.",
          "Souvent associés aux molécules GTP.",
          "Sensibles à la colchicine."
        ],
        correctOptionIndexes: [1],
        explanation: "Les microfilaments d'actine (MF) sont des polymères de monomères d'actine G. Ils ont une structure polarisée avec une extrémité 'barbue' (+) et une extrémité 'pointue' (-), ce qui permet une croissance unidirectionnelle. La colchicine affecte les microtubules, pas les microfilaments. L'actine est liée à l'ATP (et à l'ADP), tandis que les microtubules sont liés au GTP."
      },
      {
        questionText: "La coiffe d'un MT est maintenue active suite à une concentration élevée de:",
        options: [
          "Dimères de tubuline α GTP β GTP.",
          "Dimères de tubuline α GTP.",
          "Monomères de tubuline β GTP.",
          "Monomères de tubuline α et de tubuline β.",
          "Molécules de GTP."
        ],
        correctOptionIndexes: [0],
        explanation: "La stabilité de l'extrémité en croissance (+) d'un microtubule, aussi appelée coiffe, dépend de la présence de tubuline bêta liée au GTP. Si la concentration de tubuline-GTP est élevée, les dimères de tubuline s'ajoutent rapidement à l'extrémité, maintenant la coiffe GTP. Lorsque le taux d'hydrolyse du GTP dépasse le taux d'ajout de nouveaux dimères, la coiffe est perdue, entraînant une 'catastrophe' et une dépolymérisation rapide du microtubule."
      },
      {
        questionText: "Dans une cellule non musculaire l'actine F est composée de:",
        options: [
          "Corps d'actine α-GDP et une coiffe GTP.",
          "Corps d'actine β-GDP et une coiffe GTP.",
          "Hélice monocaténaire d'actine α ADP.",
          "Hélice bicaténaire d'actine β ADP.",
          "Polymère d'actine α, β ATP."
        ],
        correctOptionIndexes: [3],
        explanation: "L'actine F, ou actine filamenteuse, est un polymère hélicoïdal composé de monomères d'actine G. Dans les cellules non musculaires, c'est l'actine β qui est majoritaire. Ces monomères sont liés à l'ADP à l'intérieur du filament. L'actine F est une hélice à deux brins, ou bicaténaire."
      },
      {
        questionText: "Concernant l'utilisation d'un microscope optique:",
        options: [
          "Le rhéostat permet de régler l'intensité lumineuse.",
          "La vis micrométrique permet une mise au point précise.",
          "La vis micrométrique permet le mouvement de la platine.",
          "Le lame porte objet est fixée par les valets.",
          "L'observation commence toujours par l'objectif de faible puissance."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "La vis micrométrique permet une mise au point fine (B), la vis macrométrique permet la mise au point grossière. Le mouvement de la platine est contrôlé par les vis de déplacement (C). Le porte-objet (lame) est maintenu sur la platine par des valets (D). La rhéostat contrôle l'intensité de la source lumineuse (A). Il est standard de commencer l'observation avec l'objectif de plus faible grossissement pour localiser l'échantillon (E)."
      },
      {
        questionText: "Lors de l'observation d'un échantillon au MEB (QCM-Examen TP)",
        options: [
          "les électrons incidents ne traversent pas l'échantillon traité.",
          "les électrons sont réfléchis par la surface de l'échantillon massif.",
          "le circuit de balayage récupère tous les photons réfléchis.",
          "les électrons incidents constituent une image tridimensionnelle contrastée.",
          "l'écran de visualisation montre l'objet en tridimensionnel toujours en noir et blanc."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Au microscope électronique à balayage (MEB), les électrons incidents ne traversent pas l'échantillon. Ils sont réfléchis par la surface. C'est l'image des électrons secondaires et des électrons réfléchis qui est utilisée pour former une image de la surface de l'échantillon. L'image obtenue est en trois dimensions et en noir et blanc. Le MEB est particulièrement utile pour l'observation de la topographie de surface."
      },
      {
        questionText: "La réalisation d'une réplique d'une surface nucléaire comporte:",
        options: [
          "une fixation chimique de l'échantillon",
          "un clivage suivi d'un cryodécapage de l'objet",
          "un double ombrage métallique contrastant",
          "la dissolution de l'échantillon",
          "l'obtention d'un moule de la surface nucléaire"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La technique de cryodécapage et d'ombrage-réplique est une méthode de microscopie électronique qui permet d'étudier les structures internes des cellules. Elle implique la fracture (clivage) de l'échantillon congelé, exposant ainsi une face de la bicouche lipidique de la membrane. Cette surface est ensuite recouverte d'une fine couche de métal (ombrage) pour former une réplique. L'échantillon biologique d'origine est ensuite dissous, ne laissant que la réplique métallique à observer au microscope électronique."
      },
      {
        questionText: "Les MF d'actine peuvent interagir avec les molécules:",
        options: [
          "Fimbrine, villine.",
          "Complexe ARP 2/3, flamine.",
          "ATP, GTP.",
          "NuMa, gelsoline.",
          "Myosine, dynéine."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Les microfilaments d'actine interagissent avec diverses protéines. Le commentaire indique que la dynéine n'interagit pas avec les microfilaments, mais plutôt avec les microtubules. En revanche, la myosine est la protéine motrice associée à l'actine. Les protéines A (fimbrine, villine) sont des protéines de réticulation. Les protéines B (complexe ARP 2/3, flamine) sont impliquées dans la nucléation et la réticulation. La gelsoline fragmente les filaments d'actine."
      },
      {
        questionText: "Le déroulement de l'évènement A nécessite:",
        options: [
          "L'intervention d'un MT labile.",
          "Une concentration élevée en hétérodimères de tubulines actifs.",
          "Des protéines motrices spécifiques.",
          "Des molécules adaptine.",
          "Des molécules d'ATP."
        ],
        correctOptionIndexes: [1],
        explanation: "L'événement A représente la polymérisation d'un microtubule (MT). Pour que cette polymérisation se produise, il faut une concentration suffisante d'hétérodimères de tubulines (tubuline α et β) liés au GTP (donc 'actifs'). Les microtubules labiles sont justement ceux qui sont en constante polymérisation et dépolymérisation. Les adaptines et l'ATP sont impliqués dans le transport vésiculaire."
      },
      {
        questionText: "Parmi le(s) effet(s) de la phalloïdine nous pouvons citer, une perturbation de:",
        options: [
          "La sécrétion constitutive.",
          "Recyclage membranaire.",
          "La cytodiérèse.",
          "L'endocytose des LDL.",
          "La matrice nucléaire."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La phalloïdine est une toxine qui se lie et stabilise les microfilaments d'actine (MF). Cette stabilisation perturbe tous les processus qui nécessitent une dynamique de polymérisation et de dépolymérisation de l'actine. Cela inclut le transport vésiculaire (endocytose et exocytose) et la division cellulaire (cytodiérèse)."
      },
      {
        questionText: "Durant l'évènement B",
        options: [
          "Des molécules de revêtement sous membranaire interviennent toujours.",
          "Des particules lipoprotéines peuvent être transportées.",
          "Des produits nutritifs emballés fusionnent toujours à l'endosome précoce.",
          "Certains éléments du cytosquelette subissent une dépolymérisation progressive.",
          "De nombreuses molécules de GTP sont hydrolysées."
        ],
        correctOptionIndexes: [3],
        explanation: "L'événement B correspond à la dépolymérisation d'un microtubule. Ceci se produit quand l'hydrolyse du GTP en GDP est plus rapide que l'ajout de nouveaux dimères de tubuline. Cette dépolymérisation est donc progressive et entraîne un raccourcissement du microtubule."
      },
      {
        questionText: "L'évènement B peut être nommé:",
        options: [
          "Pinocytose.",
          "Endocytose par récepteur.",
          "Phagocytose.",
          "Transport cytotique.",
          "Endocytose constitutive."
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "L'événement B est l'endocytose. Il existe plusieurs types d'endocytose : la pinocytose (ingestion de liquides et de petites particules), l'endocytose par récepteur (internalisation de molécules spécifiques comme les LDL), et la phagocytose (ingestion de grosses particules comme des bactéries). L'endocytose constitutive est un processus continu de pinocytose."
      },
      {
        questionText: "Les événements A et B",
        options: [
          "Peuvent être inhibés par la colchicine.",
          "Sont bloqués en présence de Taxol.",
          "Nécessitent des molécules signal type Ach.",
          "Sont bloqués par l'Ouabaine.",
          "Ne peuvent pas se dérouler chez l'E. coli et le HIV."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Le cytosquelette, essentiel pour les événements A (polymérisation) et B (dépolymérisation), est absent chez les procaryotes (comme E. coli) et les virus (comme le VIH). Le Taxol stabilise les microtubules et bloque leur dépolymérisation (événement B), tandis que la colchicine empêche la polymérisation (événement A). L'acétylcholine est un neurotransmetteur et l'ouabaïne est un inhibiteur de la pompe Na+/K+."
      },
      {
        questionText: "Les isomères des molécules d'actine connus chez les organismes Eucaryotes correspondent aux actine α β abondantes dans les cellules non musculaires",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Chez les cellules eucaryotes, il existe plusieurs isoformes d'actine. Les actines α sont abondantes dans les cellules musculaires, tandis que les actines β et γ sont les formes prédominantes dans les cellules non musculaires."
      },
      {
        questionText: "Les inhibiteurs des MF d'actine peuvent également agir sur les monomères d'actine.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les inhibiteurs des microfilaments d'actine (MF) comme la cytochalasine agissent en se liant à l'actine filamentaire (actine F) pour bloquer la polymérisation, et non aux monomères d'actine (actine G). Ils perturbent ainsi la dynamique des filaments existants."
      },
      {
        questionText: "Les faisceaux stables de MF d'actine sont présents essentiellement dans les fibres musculaires.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les microfilaments d'actine (MF) sont organisés en faisceaux très stables et de longue durée dans les cellules musculaires, où ils jouent un rôle crucial dans la contraction. Dans les autres types de cellules, l'organisation des MF est plus dynamique et sujette à des réarrangements constants."
      },
      {
        questionText: "L'hélice monocaténaire d'actine en phase de croissance est composée d'un polymère riche en actine G-ATP et pauvre en actine G-ADP.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire explique que la polymérisation des microfilaments d'actine se fait par l'ajout de monomères d'actine G-ATP. Le filament en croissance est donc riche en actine-ATP. L'hydrolyse de l'ATP en ADP se produit plus tard, à l'intérieur du filament. L'affirmation dans la question est fausse car l'hélice d'actine est bicaténaire, pas monocaténaire."
      },
      {
        questionText: "Le cycle dynamique d'un MF d'actine du cortex cellulaire peut comprendre les étapes successives suivantes : polymérisation, nucléation, dépolymérisation",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le processus correct est dans l'ordre de la nucléation, puis la polymérisation et enfin la dépolymérisation. La nucléation est la formation d'un petit noyau de monomères d'actine, qui sert de base à la polymérisation (allongement du filament). La dépolymérisation est la désintégration du filament. L'ordre des étapes est crucial."
      },
      {
        questionText: "Les variétés de MT sont classées selon leur localisation:",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les variétés de microtubules (MT) ne sont pas classées par leur localisation mais plutôt par leur dynamique et leur stabilité. Il existe des MT stables (ex: cils, flagelles) et des MT labiles (en constante polymérisation et dépolymérisation), présents par exemple dans le fuseau mitotique."
      },
      {
        questionText: "Des MT labiles en catastrophe peuvent comporter des hétérodimères de tubulines α β associées au GTP ou au GDP.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les microtubules labiles en 'catastrophe' (phase de dépolymérisation rapide) sont principalement composés d'hétérodimères de tubulines associés au GDP. L'hydrolyse du GTP en GDP est ce qui déclenche la déstabilisation du MT et la catastrophe."
      },
      {
        questionText: "La néoformation des MT labiles nécessite un assemblage protofilament par protofilament.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La formation d'un nouveau microtubule (polymérisation) ne se fait pas protofilament par protofilament. Elle implique l'ajout de dimères de tubuline aux extrémités des 13 protofilaments déjà existants (croissance de ces protofilaments en parallèle)."
      },
      {
        questionText: "Le cytosquelette d'une cellule musculaire:",
        options: [
          "Correspond à un réseau complexe hautement organisé entièrement protéique.",
          "Occupe uniquement le hyaloplasme.",
          "Comporte des membres spécifique dans les fibres musculaires.",
          "Est représenté en partie par des éléments protéiques de tubuline, et d'autres d'actine.",
          "Est responsable de l'organisation des organites cellulaires."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Le cytosquelette est un réseau de filaments protéiques. Dans les cellules musculaires, il est hautement organisé et composé de filaments de myosine, actine (α), et de microtubules. Il est responsable de la forme de la cellule, de la motilité et de l'organisation des organites. Le commentaire précise qu'il occupe tout le hyaloplasme et une partie du nucléoplasme, pas 'uniquement' le hyaloplasme."
      },
      {
        questionText: "Dans une cellule type Entérocyte:",
        options: [
          "Les MT prennent naissance du centrosome.",
          "Les MF fins d'actine sont essentiellement concentrés dans la région apicale.",
          "Les filaments intermédiaires sont en interaction avec les desmosomes.",
          "Certains éléments du cytosquelette sont liés aux hémidesmosomes.",
          "D'autres distributions des 4 éléments du cytosquelette sont possibles."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Dans les entérocytes, les microtubules (MT) sont organisés à partir du centrosome. Les microfilaments d'actine (MF) se trouvent principalement dans la zone apicale, formant la bordure en brosse. Les filaments intermédiaires sont liés aux desmosomes et les hémidesmosomes ancrent la cellule à la lame basale via d'autres éléments du cytosquelette."
      },
      {
        questionText: "Les MT labiles d'une cellule non polarisée différenciée:",
        options: [
          "Sont stabilisés en longueur grâce au taxol.",
          "Sont présents en permanence dans les cils des épithéliums.",
          "S'organisent en centrioles.",
          "Constituent le fuseau mitotique.",
          "Assurent un transport vésiculaire bidirectionnel."
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Le Taxol est une molécule qui stabilise la longueur des microtubules labiles en les empêchant de se dépolymériser. Le fuseau mitotique est composé de MT labiles et est essentiel à la division cellulaire (D). Les MT labiles sont également impliqués dans le transport vésiculaire bidirectionnel dans le cytoplasme (E). Les cils et les centrioles sont faits de MT stables, pas labiles (B, C)."
      },
      {
        questionText: "Les tubules T assurent une dépolarisation rapide du REL après passage de l'influx nerveux.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les tubules T sont des invaginations de la membrane plasmique de la cellule musculaire. Elles permettent la propagation de l'influx nerveux (potentiel d'action) à l'intérieur de la fibre, entraînant une dépolarisation rapide du réticulum endoplasmique lisse (REL), qui libère alors le calcium nécessaire à la contraction."
      },
      {
        questionText: "La Tauopathie correspond à la maladie d'Alzheimer.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La tauopathie est un groupe de maladies neurodégénératives, y compris la maladie d'Alzheimer, caractérisées par l'accumulation anormale de protéines Tau hyperphosphorylées. Ces protéines Tau agrégées forment des neurofibrilles qui perturbent la fonction des microtubules dans les neurones, entraînant leur mort."
      },
      {
        questionText: "Comme les MF, les MT peuvent interagir avec la membrane plasmique.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les deux types de filaments du cytosquelette (microfilaments et microtubules) peuvent interagir avec la membrane plasmique. Les microfilaments d'actine forment un réseau sous-membranaire appelé cortex cellulaire, et les microtubules peuvent également être ancrés à la membrane plasmique pour des fonctions de signalisation et de transport."
      },
      {
        questionText: "Le phénomène du tapis roulant peut être observé sur certains éléments du cytosquelette après immunofluorescence.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le phénomène de 'tapis roulant' est un processus observé dans la dynamique des filaments d'actine. Des monomères sont ajoutés à une extrémité du filament (+) tandis qu'ils sont retirés à l'autre extrémité (-). Ce phénomène peut être visualisé en laboratoire à l'aide de techniques comme l'immunofluorescence en marquant les filaments avec des fluorophores, permettant d'observer le mouvement global de la structure."
      },
      {
        questionText: "L'élément 1 :",
        options: [
          "Peut-être visualisable au MET après coloration positive.",
          "Est composé d’une succession de 13 hétérodimères de tubulines α β.",
          "Présente une paroi d’épaisseur et de diamètre fixes.",
          "Ses bordures sont soudées de manière hélicoïdale.",
          "Prend toujours naissance d’un centriole."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire précise que l'élément 1 est un MT labile (microtubule labile). Il est composé de 13 protofilaments, qui sont une succession d'hétérodimères de tubuline alpha et bêta. Ce n'est pas une structure fermée, car les bords ne sont pas soudés. Les microtubules sont effectivement visibles au microscope électronique à transmission (MET)."
      },
      {
        questionText: "L'élément :",
        options: [
          "Présente une polarité similaire à l’élément 2.",
          "Présente un corps à GTPβ GDP.",
          "Est capable de transporter une vésicule à hydrolases.",
          "Est associé à la membrane vésiculaire par une protéine type kinésine.",
          "Est concerné par le phénomène du tapis roulant."
        ],
        correctOptionIndexes: [3],
        explanation: "Le commentaire indique que la kinésine est une protéine de transport des vésicules d'exocytose. Cela implique que l'élément en question, en tant que protéine motrice, est associé à des vésicules pour les déplacer le long des microtubules."
      },
      {
        questionText: "L'élément 2 :",
        options: [
          "Peut être stabilisé par la colchicine et le taxol.",
          "Est également présent dans l’axone des neurones.",
          "Est capable d’assurer une biomotilité des vésicules LDL.",
          "Est lié au cargo par une protéine motrice organisée en 3 domaines.",
          "Le roulement du cargo à sa surface nécessite une consommation de plusieurs molécules d’ATP."
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire explique que la colchicine bloque la polymérisation et la dépolymérisation des microtubules (MT) se poursuit jusqu'à leur disparition. Le taxol, quant à lui, stabilise les microtubules. Le commentaire se réfère donc aux microtubules (élément 2), qui sont en effet présents dans les axones des neurones."
      },
      {
        questionText: "La protéine Tau :",
        options: [
          "Assure un flux rétrograde.",
          "Peut interagir avec des protéines Tau.",
          "Son cargo pourrait se rapprocher d'un endosome précoce.",
          "Capable de subir une catastrophe.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire et le schéma associé montrent que la protéine Tau est impliquée dans le transport antérograde, pas rétrograde. Les protéines Tau stabilisent les microtubules, tandis que le transport rétrograde est généralement assuré par la dynéine. Il semble y avoir une contradiction dans l'image fournie."
      },
      {
        questionText: "Le composant moléculaire de base de l'élément 3 :",
        options: [
          "Se nomme Actine G.",
          "Présente 2 sites de fixation à l’ATP à l’état actif.",
          "Est une protéine la plus abondante d’une cellule Eucaryote.",
          "Est agencé en hélice monocaténaire dans un Mf d’actine.",
          "Est représenté par 3 isomères d’Actine dans un type cellulaire donné."
        ],
        correctOptionIndexes: [0],
        explanation: "L'élément 3 est le microfilament d'actine. Son monomère de base est l'actine G (globulaire). L'actine G possède un site de fixation pour l'ATP/ADP. Le commentaire précise également que l'actine F (filamentaire) est l'actine G polymérisée en une hélice. L'actine est en effet l'une des protéines les plus abondantes des cellules eucaryotes et il existe plusieurs isoformes (isomères)."
      },
      {
        questionText: "La biogenèse des composants de l'élément 3 nécessite :",
        options: [
          "Des monomères d’Actine G ADP.",
          "Des associations en trimères instables d’Actine G ATP.",
          "Des mises en place de sites de nucléation.",
          "Des polymérisations en Actine F.",
          "Des échanges ATP par ADP à l’échelle des monomères d’Actine G."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire mentionne 'Des échanges ADP par ATP à l'échelle des monomères d'actines G'. C'est un aspect essentiel de la polymérisation des microfilaments d'actine. Les monomères d'actine G se lient à l'ATP et, une fois incorporés dans le filament, l'ATP est hydrolysé en ADP, ce qui affecte la stabilité du filament."
      },
      {
        questionText: "Les éléments en 3 :",
        options: [
          "Présentent une dynamique dépendante des besoins cellulaires.",
          "Peuvent être inhibés à leurs extrémités (+) par la Cytochalasine.",
          "Sont stabilisés par la Phalloïdine.",
          "Sont désagrégés lors des événements d’exocytose.",
          "Interviennent lors de la biomotilité intracellulaire."
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que les Cytochalasines ont la capacité de se lier aux extrémités (+) des microfilaments d'actine, inhibant ainsi leur polymérisation. La Phalloïdine, en revanche, stabilise les microfilaments."
      },
      {
        questionText: "La structure X :",
        options: [
          "Appartient au cytosquelette.",
          "Comprend des MT stables.",
          "Renferme des MT labiles.",
          "Sa matrice se compose de protéines spécifiques.",
          "Est un complexe protéique TuRC y est organisé."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire décrit la structure X comme un centrosome, qui est le site de biogenèse et de néoformation des microtubules labiles (MT labiles) dans les cellules eucaryotes interphasiques. Il agit comme un centre organisateur des MT."
      },
      {
        questionText: "Les structures filamenteuses de l’élément 3 :",
        options: [
          "Sont présentes dans toute cellule Eucaryote.",
          "Présentent une distribution similaire dans toutes les cellules Eucaryotes.",
          "Sont représentées par des microfilaments de longueur stable dans les cortex cellulaires.",
          "Sont organisées en filaments de longueurs variables nommés cortex cellulaire.",
          "Sont déstructurées en présence d’une concentration élevée sous membranaire de Ca++."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire indique que l'actine présente une distribution non similaire dans toutes les cellules eucaryotes. Les filaments d'actine sont organisés en faisceaux ou réseaux, et non en 'microfilaments de longueur stable'. Le commentaire montre l'exemple de l'actine alpha dans les cellules musculaires et des actines B et V dans les cellules non musculaires. La polymérisation et la dépolymérisation de l'actine sont dynamiques et régulées, notamment par les ions calcium."
      },
      {
        questionText: "L’intervention de la Gelsoline permet à l’échelle de l’élément 3 :",
        options: [
          "D’assurer le déplacement de la vésicule d’exocytose le long des MT.",
          "Le roulement de la vésicule d’exocytose le long des Mf d’Acto Myosine.",
          "Le clivage locale d’une région sous membranaire.",
          "La fusion membranaire.",
          "L’exocytose du contenu vésiculaire."
        ],
        correctOptionIndexes: [2],
        explanation: "La gelsoline est une protéine qui coupe les filaments d'actine. Son rôle est de fragmenter les réseaux d'actine, ce qui permet la fluidité du cytosquelette et l'accès des vésicules à la membrane plasmique pour l'exocytose. Elle est donc impliquée dans le clivage (découpage) des microfilaments d'actine, en particulier dans les régions sous-membranaires."
      },
      {
        questionText: "La dynéine chargée de son cargo suit la coiffe GTP d’un MT en croissance pour se rapprocher d’un endosome précoce :",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La dynéine est une protéine motrice qui se déplace vers l'extrémité négative des microtubules, ce qui correspond au transport rétrograde (souvent vers le centre de la cellule). Le transport rétrograde est utilisé pour le retour des vésicules endosomales, et non pour se 'rapprocher d'un endosome précoce' en suivant la coiffe GTP, qui est une caractéristique des extrémités positives en croissance."
      },
      {
        questionText: "Les neurotransmetteurs sont transportés à travers les neurones par flux antérograde.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le flux antérograde est le transport des vésicules et des organites du corps cellulaire vers la périphérie du neurone, y compris les synapses. C'est bien ce flux qui est utilisé pour transporter les neurotransmetteurs."
      },
      {
        questionText: "Les protéines MAP sont spécifiques aux MT dendritiques des neurones.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire précise que les protéines MAP (Microtubule-Associated Proteins) sont 'Spécifiques aux MT des dendrites et des corps cellulaires'."
      },
      {
        questionText: "Une mutation des protéines Tau peut induire la dégénérescence des neurones de la zone de la mémoire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire décrit la séquence d'événements : l'hyperphosphorylation des protéines Tau conduit à leur séparation des microtubules. Cela entraîne la formation d'amas de protéines Tau dysfonctionnelles (les plaques séniles), la déstabilisation et la désintégration des microtubules. Il en résulte une dégénérescence des neurones, notamment dans la zone de la mémoire, ce qui est une caractéristique de la maladie d'Alzheimer."
      },
      {
        questionText: "Les plaques de protéines Tau hyperphosphorylées sont observées dans la maladie Alzheimer.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Il est clairement indiqué que ce phénomène est lié à la maladie d'Alzheimer."
      },
      {
        questionText: "L’exocytose d’une vésicule de sécrétion nécessite l’intervention de la myosel ATP dépendante.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'exocytose, qui est le processus par lequel les vésicules fusionnent avec la membrane plasmique pour libérer leur contenu, est un processus qui nécessite de l'énergie sous forme d'ATP. Les myosines sont des moteurs moléculaires ATP-dépendants qui se déplacent sur les microfilaments d'actine et sont impliquées dans le transport de vésicules."
      },
      {
        questionText: "Comme la tubuline β, l’Actine G fonctionne comme une enzyme hydrolysante.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que l'actine G fonctionne comme une enzyme hydrolysante en convertissant l'ATP en ADP, un processus similaire à ce qui se passe avec les tubulines (β-tubuline qui hydrolyse le GTP en GDP)."
      },
      {
        questionText: "Le cytosquelette est :",
        options: [
          "Un ensemble d’éléments répartis uniquement dans le hyaloplasme.",
          "Un réseau protéique complexe hautement organisé.",
          "Un réseau présent en partie dans les érythrocytes.",
          "Absent chez les procaryotes et les virus.",
          "Un composant du hyaloplasme."
        ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire décrit le cytosquelette comme un réseau complexe et hautement organisé de filaments protéiques. Il est présent dans le hyaloplasme de toutes les cellules eucaryotes, y compris en partie dans les érythrocytes. Il est absent chez les procaryotes."
      },
      {
        questionText: "Choisir la proposition fausse :",
        options: [
          "Les MT stables sont localisés dans les centrioles, cils et flagelles.",
          "Les MT stables et labiles sont absents dans le nucléoplasme.",
          "Les MT labiles sont dispersés du centrosome vers la périphérie cellulaire.",
          "Des MT labiles sont localisés dans le hyaloplasme et le fuseau mitotique.",
          "Les MT parcourent le hyaloplasme des cellules en division."
        ],
        correctOptionIndexes: [4],
        explanation: "Le commentaire indique que 'Les MT labiles parcourent le hyaloplasme des cellules interphasiques et ils constituent le fuseau mitotique/cytocinétique des cellules en division.' L'affirmation E est fausse car les MT labiles parcourent le hyaloplasme des cellules interphasiques, et non pas seulement en division."
      },
      {
        questionText: "Les éléments du cytosquelette sont observables après application de la :",
        options: [
          "Technique cytologique.",
          "Technique des répliques.",
          "Technique histologique.",
          "Technique d’immunofluorescence.",
          "Technique de cryodécapage."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire montre plusieurs techniques d'étude du cytosquelette. L'immunofluorescence est utilisée pour visualiser l'aspect filamentaire, le MET (microscope électronique à transmission) après coloration donne un aspect tubulaire, et le MEB (microscope électronique à balayage) après cryodécapage permet de voir les aspects tubulaires et filamentaires. Le terme 'Technique histologique' est une réponse correcte car il est général et englobe l'étude des tissus et de leurs composants, y compris le cytosquelette."
      },
      {
        questionText: "Les étapes de la biogenèse d’un MT labile sont :",
        options: [
          "Mise en place de 13 protéines tubulines γ.",
          "Ajout de 13 dimères actifs de tubulines.",
          "Polymérisation de l’extrémité plus.",
          "Mise en place protofilament par protofilament.",
          "Fermeture hélicoïdale du feuillet du MT."
        ],
        correctOptionIndexes: [3],
        explanation: "La première étape est la mise en place de 13 tubulines γ dans la matrice du centrosome. Ensuite, 13 dimères de tubuline αβ (liés au GTP) sont ajoutés, formant ainsi l'ébauche des 13 protofilaments. Ces protofilaments s'associent pour former le feuillet du microtubule, qui n'est pas complètement fermé. La polymérisation se fait par l'ajout de nouveaux dimères aux extrémités."
      },
      {
        questionText: "La dynamique d’un Mf d’actine nécessite :",
        options: [
          "Une association en un trimère instable d’Actine G-ATP.",
          "Un complexe ARP 2/3.",
          "Un pool d’actine G/ATP.",
          "Un alignement non linéaire des monomères d’actine G.",
          "Des polymérisations par trimères de molécules d’actine G/ATP."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire et le schéma montrent clairement que la biogenèse d'un microfilament d'actine commence par la formation d'une association en trimère instable d'actine G-ATP, qui sert de site de nucléation. Après cette étape initiale, il y a la polymérisation par l'ajout de monomères d'actine G-ATP."
      },
      {
        questionText: "Les MAP motrices présentent :",
        options: [
          "Un domaine de têtes en interaction avec la membrane d'un cargo.",
          "Un domaine de têtes en interaction avec les tubulines β GTP.",
          "Un segment intermédiaire en interaction avec les tubulines α GTP.",
          "Un domaine de queue à activité ATP asique.",
          "Un domaine de queue à activité GTP asique."
        ],
        correctOptionIndexes: [1],
        explanation: "Les protéines motrices (kinésine et dynéine) possèdent des domaines de têtes qui se lient aux microtubules et des domaines de queue qui se lient à leur cargo. Le déplacement le long des microtubules est dépendant de l'hydrolyse de l'ATP par les têtes, qui se lient spécifiquement aux tubulines β des microtubules."
      },
      {
        questionText: "Le mécanisme intracellulaire d’un transport d’une vésicule d’exocytose comporte les événements suivants :",
        options: [
          "Fixation d’une tête active de dynéine chargée d’un cargo à une coiffe GTP d’un MT labile.",
          "Rupture de la fixation de la deuxième tête ADP à une coiffe GDP d’un MT labile.",
          "Interaction de la deuxième tête après échange ADP par ATP.",
          "Intervention d’un filament d’acto myosine.",
          "Destruction du cortex cellulaire par la gelsoline activée par le Mg++."
        ],
        correctOptionIndexes: [1],
        explanation: "Le processus de déplacement d'une kinésine ou d'une dynéine le long d'un MT est un cycle où l'hydrolyse de l'ATP ou du GTP sur une tête permet de libérer la liaison, tandis que la liaison d'une nouvelle molécule d'ATP/GTP sur l'autre tête permet sa fixation, permettant ainsi un mouvement 'pas à pas'."
      },
      {
        questionText: "La biogenèse d’un microfilament d’actine nécessite :",
        options: [
          "Un complexe ARP 2/3 associé à un trimère de molécules d’actine G/ATP.",
          "Un pool d’actine G/ATP.",
          "Des molécules profilines et thymosine.",
          "Une réserve de molécules filamine et myosine 1.",
          "Un afflux de Ca++ dans le hyaloplasme."
        ],
        correctOptionIndexes: [1],
        explanation: "Le processus nécessite un pool de monomères d'actine G liés à l'ATP pour la polymérisation. Ces monomères constituent la matière première de la polymérisation."
      },
      {
        questionText: "L’inhibition des microfilaments d’actine hyaloplasmiques est rendue possible par :",
        options: [
          "Les Cytochalasines après action dépolymérisente des extrémités plus.",
          "Les Cytochalasines en interaction aux extrémités plus et moins.",
          "La Phalloïdine après stabilisation de la longueur.",
          "Le Taxol après blocage des fonctions motrices.",
          "La Colchicine après liaison aux monomères libres d’actine G."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire précise que les cytochalasines ont la capacité de se lier aux extrémités (+) des filaments d'actine, ce qui bloque leur polymérisation et leur allongement. La Phalloïdine, quant à elle, se fixe le long du filament, ce qui le stabilise. Le Taxol et la Colchicine sont des agents agissant sur les microtubules, pas sur l'actine."
      },
      {
        questionText: "Les flux antérograde et rétrograde axonaux se déroulent sans l’aide des MF du cytosquelette.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que 'Les MF du cytosquelette aide le déroulement des flux antérograde et rétrograde (comme les MT cas des neurones).' Les microfilaments sont aussi impliqués dans le transport intracellulaire, même si les microtubules sont le 'chemin principal' pour les transports axonaux à longue distance."
      },
      {
        questionText: "La myosine I peut assurer une fonction structurale et/ou motrice.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que la myosine I intervient dans l'ancrage des filaments d'actine à la membrane et dans l'exocytose, ce qui est à la fois une fonction structurale (ancrage) et motrice (transport de vésicules lors de l'exocytose)."
      },
      {
        questionText: "La croissance d’un MF d’actine nécessite l’échange de molécules ADP par des molécules ATP.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire et le schéma illustrent l'échange ADP par ATP au niveau du monomère d'actine G. Ce monomère doit être lié à l'ATP pour pouvoir se polymériser efficacement et être ajouté au filament, l'ATP étant ensuite hydrolysé en ADP une fois le monomère incorporé."
      },
      {
        questionText: "Une hélice monocaténaire d'un M/F d'actine exprime un agencement non linéaire des molécules d'actine G/ATP ?",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'agencement des monomères d'actine dans l'actine F (filament d'actine) est un arrangement linéaire, pas non linéaire."
      },
      {
        questionText: "L'actine F est considérée comme un produit métabolisé par le REG ?",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'actine est une protéine cytosolique et n'est pas produite par le réticulum endoplasmique granuleux (REG)."
      },
      {
        questionText: "Kinactine et Dynactine représentent des protéines d'interaction aux MAPmotrices ?",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Kinactine et dynactine sont des protéines qui régulent l'activité des moteurs moléculaires kinésine et dynéine. Ces moteurs moléculaires interagissent avec le cytosquelette pour le transport des vésicules."
      },
      {
        questionText: "Le processus moléculaire d'un événement d'exocytose est similaire à celui d'exocytose mais dans une direction opposée ?",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'exocytose et l'endocytose impliquent des processus opposés. L'exocytose utilise la kinésine pour se déplacer vers la membrane plasmique, tandis que l'endocytose utilise la dynéine pour se déplacer vers l'endosome précoce."
      },
      {
        questionText: "Le schéma représente un processus :",
        options: [
          "De transport cytotique.",
          "Dont l'étape représentée fait intervenir la MFF et les MT.",
          "D'entrée de vésicules vidées dans la région antérieure d'un fibroblaste en culture.",
          "La flèche noire indique une association de MFF et de Thymosine.",
          "D'interaction membranaire cellulaire MFF via les dynéines."
        ],
        correctOptionIndexes: [0],
        explanation: "Le schéma montre une vésicule en mouvement, ce qui est un exemple de transport cytotique."
      },
      {
        questionText: "Le schéma ci-contre :",
        options: [
          "Illustre la distribution des microfilaments du cytosquelette dans une cellule mitotique.",
          "Correspond à la phase de migration chromosomique.",
          "Indique l'étape correspondant au partage du stock chromosomique cellules.",
          "Montre le stade ultime de la condensation chromosomique.",
          "Est intitulé : stade de la Cytocénèse ou de mitose."
        ],
        correctOptionIndexes: [3],
        explanation: "Le commentaire de l'image décrit la cytodiérèse comme un processus biologique qui intervient à la fin de la division cellulaire. C'est le moment où les chromosomes se divisent et le cytoplasme se sépare progressivement pour former deux nouvelles cellules filles."
      },
      {
        questionText: "L'élément 1 :",
        options: [
          "Représente des MT associés à l'activité de nucléation des centromères.",
          "Au-delà de ce stade, il obéit une dynamique polymérisant.",
          "Son extrémité (+) suit une dynamique de dépolymérisation rapide.",
          "A une dynamique simultanée à celle de 3.",
          "Se forme à la phase G2 de l'interphase."
        ],
        correctOptionIndexes: [2],
        explanation: "Le schéma montre des microtubules du fuseau de division. Au cours de l'anaphase, ces microtubules se raccourcissent à leur extrémité (+) pour séparer les chromatides."
      },
      {
        questionText: "Les éléments en 2 :",
        options: [
          "Tendus entre les 2 pôles de la cellule, constituent des microtubules stabilisé.",
          "Leur polymérisation contribué à l'ascension des chromatides filles.",
          "Structurent à eux seuls l'appareil mitotique.",
          "Leur dynamique consécutive à celle de 3 réalise l'anaphase.",
          "Disparaissent dès les phases pur dépolymérisation."
        ],
        correctOptionIndexes: [1],
        explanation: "Les éléments 2 sont des microtubules polaires, qui s'allongent pour pousser les pôles de la cellule, contribuant à la séparation des chromatides filles."
      },
      {
        questionText: "La molécule schématisée :",
        options: [
          "Appartient à la famille des protéines sédentaires du hyaloplasme.",
          "Chargée d'ADP, elle peut être inhibée par la thymosine.",
          "Liée à l'ADP, elle forme un anneau de la protéine cellulaire d'exportation.",
          "Son activité ATP-asique est associée à son extrémité barbée.",
          "Son affinité pour la profiline est augmentée en cas de liaison à l'ATP."
        ],
        correctOptionIndexes: [0],
        explanation: "L'image représente la forme monomérique de l'actine G, une protéine abondante dans le hyaloplasme (cytosol)."
      },
      {
        questionText: "D'après le schéma :",
        options: [
          "La structure 1 est destinée l'exocytose si 2 est une dynactine.",
          "La molécule 3 pourrait être une kinesine.",
          "Le domaine en 4 consomme 800 molécules d'ATP tous les 10 µm parce.",
          "La structurel est déplacée vers l'endosome si 3 est une kinesine.",
          "Le cycle de rotation du domaine 4 le long du MT se fait strictement par hydrolyse d'ATP."
        ],
        correctOptionIndexes: [1],
        explanation: "L'image montre la structure 1 (une vésicule) se déplaçant le long de la structure 2 (un microtubule) à l'aide de la structure 3 (un moteur moléculaire). La direction du transport vers la périphérie de la cellule (exocytose) est caractéristique de la kinésine, tandis que la direction opposée (endocytose) est caractéristique de la dynéine."
      },
      {
        questionText: "Le schéma ci-contre :",
        options: [
          "Représente l'élongation des protofilaments d'un MT en formation.",
          "Indique l'arrivée en 1 de dimère de tubuline chargés d'ATP.",
          "Montre en 2 le site d'insertion pour les tubuline.",
          "Correspond à la phase de nucléation de MT.",
          "Montre en 3 l'association du MT au complexe ARP2/3."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que la figure montre l'arrivée en 1 de dimères de tubuline chargés de GTP. Cela représente le processus de polymérisation des microtubules."
      },
      {
        questionText: "Parmi les associations moléculaires suivantes, quelles sont celles favorables à l'expulsion d'une vésicule de sécrétion ?",
        options: [
          "Gelsoline, thymosine, myosine I, dynéine.",
          "Myosine I, gelsoline, kinésine, MT.",
          "Gelsoline, actine F, myosine I.",
          "MT, kinésine, gelsoline, myosine I.",
          "Profiline, kinésine, myosine I, MT."
        ],
        correctOptionIndexes: [2],
        explanation: "Pour l'expulsion d'une vésicule de sécrétion, on a besoin de l'actine F (filament) sur laquelle la myosine I peut se déplacer. La gelsoline est une protéine qui coupe les filaments d'actine, ce qui peut faciliter le mouvement."
      },
      {
        questionText: "Dans le mouvement amiboïde, l'émission des pseudopodes nécessite dans l'ordre :",
        options: [ "2,3,1,4,5,6", "1,4,3,2,5", "5,6,3,2,4,1", "4,6,2,5,1,3", "4,3,16,5,2" ],
        correctOptionIndexes: [3],
        explanation: "Le mouvement amiboïde se déroule dans l'ordre suivant : (4) L'activation de la polymérisation par action de la profiline : La profiline favorise la polymérisation de l'actine. (6) Un déplacement des filaments d'actine et déplacement sur un MT 5 : Le mouvement est basé sur la polymérisation de l'actine et l'interaction avec d'autres éléments. (2) La mobilisation d'un pool d'actine libre : De l'actine monomérique est rendue disponible. (5) Formation d'une queue d'actine : Une queue d'actine se forme derrière le pseudopode. (1) La migration sur une matrice extracellulaire : Le mouvement se fait sur une matrice. (3) Le transport vésiculaire via des kinésines : Les vésicules sont transportées."
      }
    ]
  },
  {
    title: "Système endomembranaire",
    subject: "cytology",
    questions: [
      {
        questionText: "Les fonctions attribuées au REG sont :",
        options: [
          "Détoxification.",
          "Translocation des protéines solubles.",
          "Tri et emballage des protéines.",
          "Clivage protéolytique.",
          "Maturation finale des protéines."
        ],
        correctOptionIndexes: [1],
        explanation: "Le REG est responsable de la translocation des protéines solubles et matricielles. Il est également le lieu de la maturation finale des protéines. Le tri, l'emballage, et le clivage protéolytique ne sont pas des fonctions du REG."
      },
      {
        questionText: "A l'échelle du compartiment B : Le REL est composé de :",
        options: [
          "Citerne tubulaires.",
          "Saccules aplatis.",
          "Citernes et de saccules.",
          "Compartiments en interaction avec l'enveloppe nucléaire.",
          "Aucune des propositions n'est valable."
        ],
        correctOptionIndexes: [0],
        explanation: "Le REL est formé de citernes tubulaires délimitées par une membrane lisse et en continuité avec le REG."
      },
      {
        questionText: "A l'échelle du compartiment B : L'appareil de Golgi présente une fonction spécifique qui est :",
        options: [
          "L'autophagie.",
          "La glycosylation des protéines solubles.",
          "La biosynthèse des hormones.",
          "L'hydrolyse des protéines mal configurées.",
          "La mise en réserve du Ca++."
        ],
        correctOptionIndexes: [1],
        explanation: "L'appareil de Golgi a plusieurs fonctions, notamment la phosphorylation des enzymes lysosomales, la glycosylation des protéines membranaires, la sulfatation, le clivage protéolytique, et le tri/adressage des protéines."
      },
      {
        questionText: "A l'échelle du compartiment B : Les flux centrifuges sont :",
        options: [
          "Le renouvellement de la membrane plasmique.",
          "Le flux de retour.",
          "L'exportation des hydrolases.",
          "L'exocytose des lipides membranaires.",
          "La libération des protéasomes."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le trafic vésiculaire peut être centripète (du TGN vers le CGN) ou centrifuge (du REG vers le TGN), ce dernier étant responsable de l'exportation des protéines et des lipides."
      },
      {
        questionText: "Le bourgeonnement membranaire est un phénomène observable à l'échelle :",
        options: [
          "D'un érythrocyte.",
          "Du SE d'un macrophage.",
          "Des citernes du REG.",
          "De l'enveloppe nucléaire.",
          "Des citernes des dictyosomes."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le bourgeonnement est le processus par lequel des vésicules se détachent des citernes du REG, du Golgi, ou d'autres compartiments. Le bourgeonnement membranaire se produit principalement dans le REG et les dictyosomes."
      },
      {
        questionText: "A l'échelle du SE, les évènements post-traductionnels correspondent à :",
        options: [
          "La fermeture des translocons.",
          "Au retour des Bips vers les translocons.",
          "La solubilisation de certaines protéines.",
          "La configuration définitive des protéines matricielles.",
          "La protéolyse par les protéasomes."
        ],
        correctOptionIndexes: [3],
        explanation: "Les événements post-traductionnels dans le SE incluent la maturation des protéines, le pliage et la formation de la configuration définitive des protéines matricielles."
      },
      {
        questionText: "Parmi les vésicules suivantes du SE, quelles sont celles qui se caractérisent par une matrice vide :",
        options: [
          "Vésicules de recyclage des RLDL.",
          "Vésicules à hydrovases.",
          "Vésicules de retour.",
          "Vésicules issues du TGN.",
          "Vésicules Golgiennes à flux centripète."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Chaque dictyosome est associé à des vésicules de différents types, comme les vésicules de transport (du RER-Golgi-intermédiaire), les vésicules de retour (qui ont une matrice vide), et les vésicules de recyclage. Le flux centripète est un flux de retour."
      },
      {
        questionText: "Les fonctions attribuées au TGN sont :",
        options: [
          "Tri des protéines.",
          "Emballage des protéines.",
          "Adressage des protéines.",
          "Sulfatation des protéines.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le TGN (Trans Golgi Network) est le compartiment où les protéines sont triées, emballées, et adressées vers leurs destinations finales, y compris les endosomes précoces et tardifs, les phagosomes, et la membrane plasmique."
      },
      {
        questionText: "A l'échelle d'une cellule Eucaryote nucléée, le trafic protéique peut se dérouler directement entre le :",
        options: [
          "Hyaloplasme-Noyau.",
          "Enveloppe nucléaire-REG.",
          "REG-CGN.",
          "CGN-TGN.",
          "TGN-Membrane plasmique."
        ],
        correctOptionIndexes: [1],
        explanation: "Le trafic protéique se déroule directement entre l'enveloppe nucléaire et le REG, car ils sont en continuité directe."
      },
      {
        questionText: "La maturation des protéines d'exportation se déroule lors de leur transport à travers le système endomembranaire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La maturation des protéines d'exportation se produit au fur et à mesure de leur passage dans les différents compartiments du système endomembranaire, comme le REG et le Golgi."
      },
      {
        questionText: "La fonction commune aux compartiments du SE est le stockage du Ca++.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "L'enveloppe nucléaire est un ensemble membranaire qui sépare à l'interphase, les chromosomes du hyaloplasme.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'enveloppe nucléaire (EN) est un ensemble membranaire complexe caractéristique des cellules eucaryotes, qui sépare la chromatine du hyaloplasme durant l'interphase."
      },
      {
        questionText: "Des échanges bidirectionnels peuvent se dérouler entre la membrane nucléolaire et le hyaloplasme.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les échanges bidirectionnels se font entre la membrane nucléoplasmique et le hyaloplasme, et non la membrane nucléolaire."
      },
      {
        questionText: "La chromatine interphasique présente des interactions aux protéines lamines et NuMa.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "Dans un noyau interphasique, la dispersion des 2 modèles de chromatine est détectable au MET après coupes minces et coloration positive.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'hétérochromatine, dense aux électrons, est détectable en coupes minces au MET, tandis que l'euchromatine est plus claire. La proportion des deux formes de chromatine est le reflet de l'activité métabolique de la cellule."
      },
      {
        questionText: "Le REG et le REL :",
        options: [
          "Peuvent être observés au MET et au MEB.",
          "Sont en continuité avec l'enveloppe nucléaire.",
          "Sont composés de compartiments membranaires.",
          "Chacune de leurs citernes présente une face luminale et une face cytosolique.",
          "Sont à l'origine de la formation du compartiment ERGIC."
        ],
        correctOptionIndexes: [3],
        explanation: "Le REG et le REL sont formés par un système de vésicules et de citernes qui bourgeonnent, créant une population vésiculaire appelée ERGIC. Seul le REG est en continuité avec l'enveloppe nucléaire."
      },
      {
        questionText: "Un dictyosome :",
        options: [
          "Est polarisé.",
          "Peut se renouveler par voie centrifuge.",
          "Comporte un compartiment TGN en interaction avec la membrane plasmique.",
          "Son organisation structurale peut être perturbée par la colchicine.",
          "Est accompagné de vésicules à V-Snares."
        ],
        correctOptionIndexes: [0],
        explanation: "L'appareil de Golgi est polarisé, avec une face d'entrée (cis) et une face de maturation ou de sortie (trans). Il est composé de saccules ou citernes, et le TGN est le dernier compartiment du côté trans."
      },
      {
        questionText: "L'enveloppe nucléaire, l'appareil de Golgi et le REG assurent la glycosylation des protéines de sécrétion.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La N-glycosylation et la O-glycosylation sont assurées par ces organites."
      },
      {
        questionText: "L'élément en 4 :",
        options: [
          "Présente simultanément des interactions avec l'enveloppe nucléaire et l'ERGIC.",
          "Assure le tri et l'adressage des protéines solubles.",
          "A la fonction de protéolyse.",
          "Permet la translocation de toutes les protéines d'exportation.",
          "Possède des protéines membranaires type translocon et récepteurs SRP."
        ],
        correctOptionIndexes: [4],
        explanation: "L'élément 4 est le REG. Le REG assure le tri et l'adressage des protéines solubles, ce qui se fait principalement au TGN. L'appareil de Golgi est responsable de la protéolyse."
      },
      {
        questionText: "L'élément 6 assure :",
        options: [
          "La fonction de protéolyse.",
          "La O-glycosylation.",
          "Le tri moléculaire.",
          "La maturation des protéines solubles.",
          "La synthèse à lui seul, des vésicules à hydrolases."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L'élément 6 est l'appareil de Golgi. Ses fonctions principales sont : l'autophagie, la phosphorylation des enzymes lysosomales, la glycosylation, la sulfatation, le clivage protéolytique, la mise en réserve du Ca++, et le tri/emballage/adressage des protéines."
      },
      {
        questionText: "L'élément 5 produit des :",
        options: [
          "Vésicules de sécrétion à revêtement COP II.",
          "Vésicules à hydrolases à revêtement de cavéoline.",
          "Vésicules de recyclage membranaire à COP I.",
          "Vésicules à VSNARES.",
          "Vésicules à TSNARES."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "L'élément 6 est composé successivement de :",
        options: [
          "Face d'alimentation en vésicules de l'ERGIC ou réseau CGN.",
          "Saccules Cis.",
          "Un ou plusieurs saccules médians.",
          "Un saccule Trans.",
          "Face de sortie ou un réseau TGN."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "L'appareil de Golgi se compose de la face Cis (face d'entrée), des saccules Cis, un ou plusieurs saccules médians, un saccule Trans et la face de sortie (TGN)."
      },
      {
        questionText: "L'élément 7 :",
        options: [
          "Assure par flux centrifuge, le recyclage de certains récepteurs membranaires.",
          "Reçoit des vésicules à hydrolases par voie centripète.",
          "Est porteur de revêtements membranaires à COP II.",
          "Est porteur de revêtements membranaires à COP I.",
          "Est porteur de T-Snares et V-Snares."
        ],
        correctOptionIndexes: [2, 4],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "Le REG est abondant dans les cellules embryonnaires, mitotiques et les adipocytes.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le REG est abondant dans les cellules embryonnaires et mitotiques. Le REL se retrouve dans les adipocytes."
      },
      {
        questionText: "Le bourgeonnement est une spécificité fonctionnelle du REG.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "Le compartiment ERGIC se situe entre les faces Cis et Trans Golgiennes.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'ERGIC est un compartiment intermédiaire situé entre le REG et le Golgi."
      },
      {
        questionText: "Le peptide signal est porté par l'extrémité N-terminale d'une protéine destinée au REG.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "La fixation du ribosome au translocon est co-traductionnelle.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La fixation du ribosome au translocon se déroule avant la traduction."
      },
      {
        questionText: "Le départ des Bips et l'ouverture du translocon sont des phénomènes co-traductionnels.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "Le recyclage de la SRP est suivi d'une reprise de la traduction de la totalité de l'ARNm adressé au REG.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le départ des Bips, l'ouverture du translocon, le recyclage de la SRP et la reprise de la traduction de la totalité de l'ARNm adressé au REG sont des étapes successives du processus."
      },
      {
        questionText: "À l'échelle du REG, l'accrochage de 14 sucres se déroule sur tous les acides aminés Asn de la chaîne peptidique en élongation.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire de l'image n'est pas disponible."
      },
      {
        questionText: "À l'échelle du REL se déroule :",
        options: [
          "La synthèse hormonale.",
          "La maturation des protéines.",
          "La mise en réserve du Ca++.",
          "La détoxification.",
          "Aucune des réponses n'est valable."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les fonctions du REL sont : la synthèse des phospholipides et des lipides, la synthèse des hormones, la détoxification et la mise en réserve du Ca++."
      },
      {
        questionText: "Les protéines de revêtements membranaires du SE sont :",
        options: [
          "Cop I.",
          "Cop II.",
          "Clathrine.",
          "VSnare.",
          "Aucune des réponses n'est correcte."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les manteaux vésiculaires sont de 2 catégories : les coatomères (COP I et COP II) et la clathrine. Les manteaux COP I et COP II agissent dans les flux vésiculaires de voie centripète et centrifuge respectivement. Les V-SNAREs ne sont pas des protéines de revêtement, mais des modèles moléculaires de reconnaissance membranaire."
      },
      {
        questionText: "Le clivage protéolytique :",
        options: [
          "Permet la maturation de certaines molécules type Insuline.",
          "Débute dans les premiers compartiments Golgien.",
          "Se poursuit dans les vésicules et grains de sécrétion.",
          "Peut se dérouler dans les citernes du REG.",
          "Concerne certaines molécules destinées à l'exocytose."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La maturation de la pro-insuline en insuline est un exemple de clivage protéolytique, qui se déroule dans les vésicules et les grains de sécrétion pour les molécules destinées à l'exocytose. Le clivage protéolytique des protéines membranaires s'opère au niveau des saccules golgiens et dans les vésicules de sécrétion."
      },
      {
        questionText: "De la face Cis à la face Trans, la compartimentation de l'appareil de Golgi est la suivante :",
        options: [
          "Saccule Cis, ERGIC, saccules médian, saccule TGN, saccule trans.",
          "Saccule TGN, saccule Cis, saccules médian, ERGIC, saccule trans.",
          "ERGIC, saccule CGN, saccule Cis, saccule TGN, saccule trans.",
          "Saccule Cis, saccule CGN, saccules médian, saccule trans.",
          "Saccule CGN, saccule Cis, saccules médian, saccule trans, saccule TGN."
        ],
        correctOptionIndexes: [4],
        explanation: "L'organisation d'un dictyosome, de la face Cis (d'entrée) à la face Trans (de sortie), est la suivante : Réseau CGN (Cis-Golgi Network), saccules Cis, saccules médian, saccule Trans, Réseau TGN (Trans-Golgi Network). Le compartiment ERGIC se situe en amont du Golgi."
      },
      {
        questionText: "Le mécanisme de la translocation d'une protéine soluble à travers la membrane du REG est décrit comme suit :",
        options: [
          "Initiation de la protéosynthèse dans le hyaloplasme.",
          "Adressage du polysome en cours de traduction vers la membrane du REG à l'aide de la SRP.",
          "Fixation au translocon par une petite sous-unité ribosomale.",
          "Translocation cotraductionnelle et recyclage de la SRP.",
          "Intervention des PDI et libération de la protéine."
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Le processus de translocation d'une protéine soluble vers le REG se déroule en plusieurs étapes : Initiation de la protéosynthèse dans le hyaloplasme (synthèse du peptide signal). Adressage du polysome en cours de traduction vers la membrane du REG par la SRP (arrêt de la traduction). Insertion de la SRP/Récepteur SRP+GTP. Déplacement de la chaîne sous l'action du récepteur membranaire nommé translocon. Départ des Bips, ouverture du translocon, et recyclage de la SRP, avec reprise de la traduction. Pénétration de la protéine dans la lumière du REG. Détachement de la protéine soluble après action d'une peptidase."
      },
      {
        questionText: "Le processus de la N-glycosylation :",
        options: [
          "Ne concerne que les protéines multi-domaine membranaires du REG.",
          "Est un processus qui se déroule simultanément à l'action des Bip chaperones.",
          "Nécessite un greffage de 14 sucres sur N de l'Asn -X-Ser / Thr de la protéine luminale configurée.",
          "Peut se poursuivre par la O-glycosylation des protéines dans les saccules médian et trans golgien.",
          "Contribue au renouvellement du glycocalyx."
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La N-glycosylation des protéines se déroule dans le REG simultanément à la synthèse de la protéine par le ribosome. Elle peut également concerner les lipides dans le cas du REL. Le processus de la O-glycosylation se poursuit dans le Golgi."
      },
      {
        questionText: "Le REG est principalement distribué dans les cellules embryonnaires et sécrétrices.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le REG est très abondant dans les cellules embryonnaires, les cellules mitotiques et les cellules sécrétrices."
      },
      {
        questionText: "Certains manteaux vésiculaires sont synthétisés dans le REG.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Le TGN est considéré comme un compartiment donneur de vésicules à clathrine et de vésicules à Cavéoline.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le réseau trans-Golgien (TGN) est le site de triage des protéines et lipides vers leurs destinations finales. Il forme des vésicules de transport, dont celles revêtues de clathrine (pour le transport vers les endosomes/lysosomes) et de cavéoline (pour certaines voies de sécrétion)."
      },
      {
        questionText: "Le REL et le REG ont pour fonction commune des biosynthèses de molécules lipidiques.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le REL est le site principal de la synthèse des lipides. Le REG participe aussi à la synthèse de certains lipides comme les phospholipides pour ses propres membranes."
      },
      {
        questionText: "Les V Snares et les T Snares assurent des adressages corrects des trafics vésiculaires.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les V-SNAREs (situées sur la vésicule) et les T-SNAREs (situées sur la membrane cible) sont des protéines qui interagissent spécifiquement pour fusionner la membrane de la vésicule avec la membrane du compartiment receveur, garantissant l'adressage correct."
      },
      {
        questionText: "L'autophagie est une fonction attribuée à une citerne spécifique du TGN.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'autophagie est un processus cellulaire de dégradation de composants intracellulaires. Elle n'est pas une fonction du TGN, mais elle implique la formation d'un autophagosome qui fusionne avec un lysosome."
      },
      {
        questionText: "Les vésicules à hydrolases peuvent fusionner à au moins 4 compartiments du SE.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Les protéasomes assurent la protéolyse des protéines mal configurées du REG.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Les protéasomes sont des complexes protéiques localisés dans le cytosol. Ils dégradent les protéines mal repliées ou endommagées qui sont exportées du REG (via le processus appelé ERAD, ER-Associated Degradation)."
      },
      {
        questionText: "Une des voies d'adressage des vésicules à partir de la structure schématisée",
        options: [
          "Est la membrane plastique.",
          "Contribue aux processus d'autophagie et d'hétérophagie.",
          "S'intègre dans un flux de retour vers le RE.",
          "Alimente le CGN.",
          "Reconstitue les rails."
        ],
        correctOptionIndexes: [2],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Au niveau du REG les corrections par les PDI :",
        options: [
          "Se déroulent après repliements des protéines transloquées.",
          "Sont précédées par l'action des Bip.",
          "Sont post traductionnelles.",
          "Peuvent se poursuivre dans le TGN."
        ],
        correctOptionIndexes: [3],
        explanation: "Les PDI (Protein Disulfide Isomerase) corrigent les ponts disulfures au sein des protéines repliées dans le REG. Les ponts disulfures sont formés pendant la translocation de la protéine, et leur correction se fait par les PDI après le repliement de la protéine."
      },
      {
        questionText: "Le contrôle de qualité des protéines :",
        options: [
          "Se déroulent après repliements des protéines dans la lumière des citernes du REG.",
          "Nécessite une coopération entre les membranes du REG et les Protéasomes.",
          "Se produit dans les proteasomes Golgien.",
          "A pour objectif l'hydrolyse de toute protéine mal configurée.",
          "Fait intervenir les translocons hyaloplasmiques."
        ],
        correctOptionIndexes: [1],
        explanation: "Le contrôle de qualité des protéines dans le REG est un processus crucial. Les protéines mal repliées ou incorrectement assemblées sont exportées du REG vers le cytosol où les protéasomes les dégradent. Ce processus nécessite donc une coopération entre les membranes du REG et les protéasomes du hyaloplasme."
      },
      {
        questionText: "La translocation d'une protéine luminale à travers une membrane du REG nécessite des étapes. Lesquelles ?",
        options: [
          "Début de traduction dans le hyaloplasme d'un peptide hydrophobe.",
          "Reprise de la traduction après recyclage de la SRP.",
          "Clivage du peptide signal suivi d'une N glycosylation.",
          "Libération de la protéine suite à sa phosphorylation.",
          "Interaction peptide signal - translocon."
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "La translocation d'une protéine vers le REG commence dans le cytosol. Le ribosome traduit la séquence signal hydrophobe, qui est reconnue par la SRP. Le complexe s'adresse au récepteur de la SRP sur le REG. Le peptide est inséré dans le translocon et la traduction reprend. Une fois la translocation terminée, le peptide signal est souvent clivé."
      },
      {
        questionText: "Le processus de phosphorylation d'une hydrolase dans le saccule cis nécessite :",
        options: [
          "La formation d'un complexe nucléotide -GlcNAc-P dans la lumière.",
          "Accrochage du GlcNAc-P sur le C6 d'un mannose du polypeptide.",
          "Libération de la GlcNAc sous l'action de la glucosidase.",
          "Importation du complexe nucléotide GlcNAc-P à travers une perméase antiport.",
          "Dissociation du complexe nucléotide GlcNAc-P dans la lumière et recyclage du nucléotide importé à l'état phosphorylé."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le processus de phosphorylation des hydrolases lysosomales commence dans le cis-Golgi. Le GlcNAc-P est transféré du UDP-GlcNAc (importé depuis le cytosol via une perméase antiport) sur le mannose en position C6 de la protéine."
      },
      {
        questionText: "Les évènements moléculaires de la O Glycosylation comprennent :",
        options: [
          "Importation d'un nucléotide sucre dans la lumière des citernes du Golgi-Médian.",
          "Phosphorylation du nucléotide et libération du sucre sous l'action de la nucléoside diphosphatase.",
          "Liaison du sucre sur l'oxygène porté par un acide amine Ser ou Thr de la protéine.",
          "Entrée d'un nucléotide-sucre dans la lumière du Trans par une Translocase.",
          "Transfert du groupement glyco-phosphorylé sur la séquence consensus de l'asparagine."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La O-glycosylation est un ajout de sucres à l'oxygène des acides aminés sérine ou thréonine. Elle a lieu dans l'appareil de Golgi. Les sucres sont importés dans la lumière du Golgi sous forme de nucléotides-sucres (par des transporteurs spécifiques) où ils sont transférés à la protéine."
      },
      {
        questionText: "Les voies d'adressage de vésicules à partir du TGN peuvent :",
        options: [
          "Contribuer aux processus d'autophagie et d'hétérophagie.",
          "Recycler les R-LDL vers la membrane plasmique.",
          "Alimenter les endosomes en hydrolases acides.",
          "Assurer la reconstitution des rafts.",
          "Participer au renouvellement de la MEC via des vésicules recouvertes de clathrine."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Les molécules V.SNARES et T.SNARES :",
        options: [
          "Interviennent dans la reconnaissance entre les compartiments du SEC.",
          "Constituent des molécules signal d'adressage.",
          "Peuvent interagir avec certains manteaux vésiculaires.",
          "Ne sont pas présentent que dans certaines membranes vésiculaires.",
          "Ont synthétisées par les polyribosomes libres."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les V-SNAREs et T-SNAREs sont des protéines de reconnaissance membranaire. Elles interviennent dans les interactions entre la vésicule (V-SNARE) et la membrane cible (T-SNARE) pour assurer la spécificité de la fusion."
      },
      {
        questionText: "Le compartiment 1 :",
        options: [
          "Est donneur de vésicules recouvertes de COPII.",
          "Contient des glycosidases.",
          "Est le site d'acquisition de la conformation spatiale des protéines par la seule action des PDI.",
          "Certaines protéines de sa membrane ont une activité GTPasique.",
          "Est le site d'adressage des tubules à translocon membranaire."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le compartiment 1 est le Réticulum Endoplasmique (RE). Il est le site donneur de vésicules COPII pour le transport antérograde vers le Golgi. Sa membrane contient des GTPases (comme les petites GTPases Sar1) qui régulent la formation des vésicules."
      },
      {
        questionText: "Le compartiment 2 :",
        options: [
          "Renferme à la fois des sulfo-transférases et des nucléosides di-phosphatases.",
          "Comprend des prohormones, des GAG et des hydrolases.",
          "Fournit des vésicules de transition à COPII.",
          "Assure la maturation des protéines N glycosylées.",
          "Interagit indirectement avec les compartiments 1 et 3."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le compartiment 2 est l'appareil de Golgi. Il est le site de maturation des protéines, y compris la maturation des N-glycanes, et de la sulfatation de certaines molécules (prohormones, GAG)."
      },
      {
        questionText: "Le compartiment 3 :",
        options: [
          "Est la cible commune des compartiments 2 et 4.",
          "Reçoit des R-LDL sous forme de vésicules recouvertes de clathrine.",
          "Alimente le compartiment 4 de vésicules à cavéoline et à clathrine.",
          "Constitue le site d'origine des vésicules à clathrine et à COP II.",
          "Fournit au compartiment 1 des N glycosyl- transférases et des Bip."
        ],
        correctOptionIndexes: [1, 4],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Le compartiment 4 :",
        options: [
          "Est la cible obligatoire des vésicules nutritives de toute cellule.",
          "A l'état actif, ses membranes portent des ATPases H+ et des R-M6P.",
          "Intervient dans la maturation des produits d'exportation.",
          "Peut recevoir des vésicules à cavéoline issues du compartiment 5."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le compartiment 4 est le TGN (réseau trans-Golgien). Il est le site final de tri et de maturation des protéines et des lipides. Ses membranes peuvent contenir des ATPases H+ qui acidifient son environnement."
      },
      {
        questionText: "Le compartiment 5 :",
        options: [
          "Est la cible commune des compartiments 3 et 4.",
          "Est porteur de perméases, de pompes Ca++ et de protéoglycannes.",
          "Adresse à l'endosome des vésicules à cavéoline vides.",
          "Constitue le site de destination des vésicules à clathrine et à COP II.",
          "Ses protéoglycannes lui sont adressées par vésicules lisses."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "La chaîne de O glycosylation est transférée sur l'oxygène d'une serine ou d'une thréonine.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Dans la O-glycosylation, les sucres sont ajoutés un par un sur l'oxygène de la sérine ou de la thréonine, et non pas par transfert d'une chaîne préformée."
      },
      {
        questionText: "La formation du complexe peptide signal-SRP est indispensable dans la synthèse des protéines périphériques internes de la membrane plasmique.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La question n'a pas de commentaire."
      },
      {
        questionText: "Les lamines, les histones et les peptidases du signal sont des protéines issues de l'adressage par SRP.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Les lamines et les histones sont des protéines synthétisées par des ribosomes libres dans le cytosol et n'utilisent pas la voie de l'adressage par la SRP."
      }
    ]
  },
  {
    title: "Noyau interphasique",
    subject: "cytology",
    questions: [
      {
        questionText: "À l'échelle du compartiment A : Les lamines",
        options: [
          "Composent les complexes de pores.",
          "Tapissent la surface membranaire interne nucléaire.",
          "Régulent les échanges nucléo plasmiques.",
          "Jouent un rôle de récepteur de la chromatine.",
          "Ne participent pas à la biogenèse de l'enveloppe nucléaire dans une cellule interphasique."
        ],
        correctOptionIndexes: [1],
        explanation: "Les lamines forment la lame nucléaire, un réseau fibreux qui se trouve sous la membrane nucléaire interne. Elles servent de point d'ancrage pour la chromatine et d'autres protéines, jouant un rôle structural essentiel pour le noyau. Le commentaire explique que la matrice nucléaire ou le nucléosquelette est composé de lamines et qu'elles sont liées aux protéines fibrillaires."
      },
      {
        questionText: "À l'échelle du compartiment A : Dans la nucléole se produit la traduction de :",
        options: [
          "L'ADNr.",
          "L'ADN.",
          "L'ADN+.",
          "L'ADN+ L'ADNr.",
          "L'ADNr+ L'ADN."
        ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que la biogenèse des sous-unités ribosomales a lieu dans le nucléole. Cela se fait à partir de protéines ribosomales et d'ARN ribosomaux (ARNr) transcrits à partir de l'ADNr."
      },
      {
        questionText: "À l'échelle du compartiment A :",
        options: [
          "Est composé d'ADN et de protéines NuMa.",
          "Est capable de transcription et de réplication.",
          "Son composant moléculaire de base est nommé fibre nucléosomique.",
          "Révélée par la technique d'immunofluorescence.",
          "N'est pas attachée à l'enveloppe nucléaire."
        ],
        correctOptionIndexes: [1],
        explanation: "Le compartiment A (la chromatine) est le siège des processus de transcription (synthèse d'ARN) et de réplication (synthèse d'ADN). La chromatine est composée d'ADN bicaténaire et de protéines histones et non-histones. La réplication se produit avant la division cellulaire pour copier le matériel génétique, tandis que la transcription se produit en permanence pour permettre l'expression des gènes."
      },
      {
        questionText: "Un complexe de pore comporte essentiellement :",
        options: [
          "2 grands anneaux.",
          "9 canaux latéraux.",
          "1 transporteur central.",
          "Des protéines Lamine.",
          "Des protéines NuMa."
        ],
        correctOptionIndexes: [0],
        explanation: "Le complexe du pore nucléaire est une structure essentielle pour le transport entre le noyau et le cytoplasme. Il est composé de plusieurs structures, dont deux grands anneaux principaux : l'anneau cytoplasmique et l'anneau nucléaire."
      },
      {
        questionText: "Le complexe de pore comporte :",
        options: [
          "9 canaux de communication.",
          "Un réseau de protéines fibreuses lamina.",
          "2 anneaux nucléoplasmiques.",
          "Des filaments protéiques de la cage.",
          "Des polysomes."
        ],
        correctOptionIndexes: [2],
        explanation: "Le complexe de pore est une structure complexe. Parmi ses composants, on trouve le grand anneau cytoplasmique et le grand anneau nucléoplasmique. Ces deux anneaux sont des composants essentiels du complexe du pore."
      },
      {
        questionText: "L'enveloppe nucléaire est un ensemble membranaire qui sépare à l'interphase, les chromosomes du hyaloplasme ?",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'enveloppe nucléaire est la structure qui délimite le noyau et sépare le contenu nucléaire (chromosomes) du cytoplasme (hyaloplasme)."
      },
      {
        questionText: "L'ultrastructure du noyau indique une présence de :",
        options: [
          "2 membranes tristratifiées percées par endroit.",
          "Espace membranaire infranucleaire.",
          "ADN et ARN.",
          "Un ou plusieurs nucléoles.",
          "Chromatidine."
        ],
        correctOptionIndexes: [3],
        explanation: "L'ultrastructure du noyau inclut des composants comme le nucléole, qui est une structure dense à l'intérieur du noyau. Les autres options sont incorrectes : le noyau possède deux membranes bi-stratifiées, et l'espace est périnucléaire (entre les deux membranes), non infranucleaire."
      },
      {
        questionText: "La taille du noyau est fonction de la quantité de chromatine selon l'espèce d'appartenance.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que la taille du noyau est en général entre 10 et 20 micromètres. Il confirme également que cette taille varie en fonction de la quantité de chromatine et du degré d'activité cellulaire de l'espèce."
      },
      {
        questionText: "La membrane nucléaire externe est en contact avec la lamina.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire précise que c'est la membrane nucléaire interne qui est tapissée par la lamine. La membrane nucléaire externe est, quant à elle, recouverte de polysomes sur sa face hyaloplasmique (cytoplasmique)."
      },
      {
        questionText: "La valeur du RNP est un critère de diagnostic tumoral.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire explique que le RNP (Rapport Nucléo-Cytoplasmique), qui est le rapport du volume nucléaire sur le volume cytoplasmique, est un critère utilisé pour le diagnostic des cellules tumorales. Chez les cellules jeunes ou peu différenciées, le RNP est élevé. Pour les cellules cancéreuses, ce rapport est également très élevé, ce qui en fait un critère de diagnostic important."
      },
      {
        questionText: "Les caractéristiques du noyau sont :",
        options: [
          "Il est présent dans tous les types cellulaires.",
          "Globalement le noyau adapte sa forme à celle de la cellule qui le porte.",
          "Sa position est modulable selon le type cellulaire.",
          "Sa taille est fonction de la quantité de chromatine selon l’espèce d’appartenance.",
          "Le RNP diminue au cours du vieillissement cellulaire."
        ],
        correctOptionIndexes: [2],
        explanation: "Le commentaire précise que la position du noyau dans la cellule est modulable. Par exemple, dans les cellules différenciées ou adipeuses, il est déplacé, tandis que dans d'autres, il peut être central."
      },
      {
        questionText: "L’EN est composée de :",
        options: [
          "Deux membranes tristratifiées percées de pores nucléaires.",
          "Deux membranes externe garnie sur sa face hyaloplasmique de polysomes.",
          "D’une membrane externe en continuité avec les citernes du REG.",
          "D’une membrane interne tapissée extérieurement par la lamina.",
          "D’un espace nucléaire considéré comme un lieu de stockage du Ca++."
        ],
        correctOptionIndexes: [2],
        explanation: "La membrane nucléaire externe est en continuité physique avec la membrane du réticulum endoplasmique granuleux (REG), ce qui explique la présence de polysomes (ribosomes) à sa surface, comme sur le REG."
      },
      {
        questionText: "La biogenèse des sous unités ribosomales nécessite :",
        options: [
          "Des protéines ribosomales importées du hyaloplasme.",
          "Des ARNr ribosomaux transcrits.",
          "De l’ADNr traversant le nucléole.",
          "Un assemblage extranucléaire des ARNr et Protéines ribosomales.",
          "Une exportation des RNP à travers les canaux centraux des complexes de pores."
        ],
        correctOptionIndexes: [0],
        explanation: "La biogenèse des sous-unités ribosomales se déroule dans le nucléole. Elle implique l'importation de protéines ribosomales synthétisées dans le hyaloplasme (cytoplasme) et la transcription des ARN ribosomaux (ARNr) à partir de l'ADNr. Ces deux composants s'assemblent pour former les sous-unités ribosomales immatures qui sont ensuite exportées vers le hyaloplasme."
      },
      {
        questionText: "Les activités métaboliques de la chromatine d’une cellule différenciée correspondent à :",
        options: [
          "Une transcription de l’Euchromatine et de l’hétérochromatine.",
          "Une réplication de l’Euchromatine.",
          "Une transcription de l’Euchromatine.",
          "Une expression génique de l’ADN.",
          "Une expression génique de l’ADNr."
        ],
        correctOptionIndexes: [2],
        explanation: "Dans une cellule différenciée, la transcription (production d'ARN) se produit principalement au niveau de l'euchromatine, qui est la forme de la chromatine la moins condensée et la plus accessible pour les enzymes de transcription. L'hétérochromatine est plus compacte et généralement inactive sur le plan transcriptionnel."
      },
      {
        questionText: "Les échanges nucléoplasmiques :",
        options: [
          "Nécessitent toujours une consommation d’énergie.",
          "Se déroulent dans les deux sens au travers des translocons nucléaires.",
          "Permettent les exportations actives des ARNr et des granules préribosomiques.",
          "Concernent l’importation passive des ions et des nucléotides.",
          "Se produisent toujours au travers les canaux nucléaires."
        ],
        correctOptionIndexes: [2],
        explanation: "Les échanges nucléo-cytoplasmiques se font via les complexes des pores nucléaires. Le commentaire explique que les transports actifs, qui nécessitent de l'énergie, se produisent pour les macromolécules comme les protéines, les ARNt et les sous-unités ribosomales."
      },
      {
        questionText: "Le RNP est un critère de diagnostic tumoral à l’échelle microscopique :",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le RNP (Rapport Nucléo-Cytoplasmique), qui est le rapport du volume du noyau sur le volume du cytoplasme, est un critère important pour le diagnostic de certaines maladies, notamment les cancers. Un RNP élevé est souvent un signe de malignité."
      },
      {
        questionText: "L’organisation moléculaire des complexes de pore est révélée par la technique de coloration négative :",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La coloration négative est une technique de microscopie électronique qui permet de visualiser les structures fines comme les complexes de pores nucléaires en les entourant d'un colorant qui ne les pénètre pas."
      },
      {
        questionText: "Les canaux calciques d'importation sont présents dans la double membrane nucléaire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire indique que l'enveloppe nucléaire (EN) est percée de pores nucléaires, qui sont le résultat de la fusion des deux membranes de l'enveloppe nucléaire. Ces pores ne sont pas des canaux calciques d'importation. La question elle-même est mal formulée, et le commentaire ne fournit pas de justification pour la réponse correcte. L'EN est perforée par des pores nucléaires qui régulent les échanges."
      },
      {
        questionText: "A la fin d’un cycle cellulaire, les Lamines interviennent dans la réorganisation de l’EN.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le commentaire confirme que les lamines contrôlent l'organisation de l'enveloppe nucléaire, en particulier la reconstitution de l'EN à la fin de la mitose, lorsque la cellule se divise."
      },
      {
        questionText: "La biogenèse des sous unités ribosomales nécessite l’importation active des ARNr et des protéines ribosomales à travers les canaux centraux des complexes de pore.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire contredit l'affirmation. Il explique que les protéines ribosomales sont importées activement du cytoplasme vers le nucléole, mais les ARNr sont transcrits dans le noyau (plus précisément dans le nucléole) à partir de l'ADNr. Ce ne sont pas les ARNr qui sont importés, mais plutôt les sous-unités ribosomales nouvellement formées qui sont exportées vers le hyaloplasme."
      },
      {
        questionText: "La structure schématisée :",
        options: [
          "Représente un nucléole actif.",
          "Sa composante la plus interne est le CFD.",
          "Est extérieurement associée à de l'euchromatine.",
          "Se forme à la télophase à partir des chromosomes 12, 13, 14, 21 et 22.",
          "Constitue le site d'adressage des sous unités ribosomales."
        ],
        correctOptionIndexes: [0],
        explanation: "Le nucléole est le lieu de la biogenèse des ribosomes, et son activité varie en fonction de l'état de la cellule. Un nucléole actif est schématisé par une structure complexe impliquée dans la transcription et l'assemblage."
      },
      {
        questionText: "Le composant fibrillaire de la structure schématisée renferme :",
        options: [
          "Les gènes 5S.",
          "Les gènes 18S, 5S.",
          "Les gènes des protéines Small ribosomale.",
          "Les gènes 45S.",
          "Les gènes des endonucléases."
        ],
        correctOptionIndexes: [3],
        explanation: "Le composant fibrillaire du nucléole est le site de transcription des gènes 45S, qui sont les précurseurs des ARNr 18S, 5.8S et 28S."
      },
      {
        questionText: "La structure ci-contre produit des sous unités ribosomales dans l'ordre suivant :",
        options: [
          "Transcription de l'ADN en ARN 45S, synthèse de 3ARNr, importation des protéines ribosomales et ARN 5S, assemblage en petite et grande sous unités.",
          "Transcription de l'ADNr en ARN 60S, synthèse de 3ARNr, importation des protéines ribosomales et ARN 18S, assemblage en petite et grande sous unités.",
          "Transcription de l'ADNr en ARN 40S, synthèse de 3ARNr, importation des protéines ribosomales et ARN 28S, assemblage en petite et grande sous unités.",
          "Importation des protéines ribosomales et ARN 5S, transcription de l'ADNr en ARN 45S, synthèse de 3ARNr, assemblage en petite et grande sous unités.",
          "Synthèse de 3ARNr, Transcription de l'ADNr en ARN 45S, importation des protéines ribosomales et ARN 5S, assemblage en petite et grande sous unités."
        ],
        correctOptionIndexes: [3],
        explanation: "La biogenèse des ribosomes est un processus séquentiel qui commence par la synthèse des protéines ribosomales dans le cytoplasme et leur importation dans le nucléole. Parallèlement, l'ADNr est transcrit en ARNr 45S dans le nucléole. Ces composants s'assemblent ensuite pour former les sous-unités ribosomales."
      },
      {
        questionText: "Le nucléole est compartimenté en :",
        options: [
          "CF-D comportant des gènes 28S, 18S, 5.8S et 5S.",
          "CF formé de gènes non transcrits.",
          "Composant riche en granules ribosomaux.",
          "CG composé d'espaceurs intragéniques et de chromatine nucléosociée.",
          "CF et CFD à gènes hautement répétitifs."
        ],
        correctOptionIndexes: [0],
        explanation: "Le nucléole est composé de plusieurs compartiments : le centre fibrillaire (CF), le composant fibrillaire dense (CFD), et le composant granulaire (CG). Le CFD est l'endroit où se trouvent les gènes de l'ARNr (28S, 18S et 5.8S), mais pas le 5S qui est transcrit à l'extérieur du nucléole."
      },
      {
        questionText: "Choisissez les deux ordres possibles correspondant aux étapes de la biogenèse d’une grande S/U ribosomale.",
        options: [
          "Traduction du ARNm des protéines larges dans le cytosol.",
          "Translocation active des protéines L par le pore.",
          "Transcription de l'ADN en ARN 45S avec 40 protéines L.",
          "Activation de l'ARN polymérase I.",
          "Transcription de l'ADNr 45S."
        ],
        correctOptionIndexes: [4],
        explanation: "L'ARNm des protéines ribosomales est d'abord traduit dans le cytoplasme (1), puis ces protéines sont transportées activement vers le noyau (2). Dans le noyau, l'ARN polymérase I est activée (4), puis l'ADNr 45S est transcrit (5). Le complexe ainsi formé est la grande sous-unité ribosomale (3). La séquence logique est donc 1, 2, 4, 5, 3."
      },
      {
        questionText: "Quelles sont les caractéristiques communes à l'euchromatine et à l'hétérochromatine :",
        options: [
          "Présentent des activités métaboliques identiques dans les cellules cancéreuses.",
          "Leur organisation moléculaire est révélée par la technique de coloration négative.",
          "Sont absentes au niveau des complexes de pores.",
          "Subissent des condensations poussées à la métaphase par les protéines non histones.",
          "Sont distribuées aléatoirement dans le nucléoplasme."
        ],
        correctOptionIndexes: [2],
        explanation: "L'euchromatine et l'hétérochromatine sont des formes de la chromatine. Elles sont toutes deux présentes dans le noyau. Elles ne se trouvent pas directement au niveau des complexes de pores. De plus, l'hétérochromatine est plus condensée que l'euchromatine et est souvent associée à la périphérie du noyau."
      },
      {
        questionText: "Les nucléotides et les ions d'origine nucléaire transitent activement par les canaux latéraux du pore.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "Le commentaire indique que les nucléotides et les ions transitent passivement à travers le complexe de pores nucléaires, et non activement. Les transports actifs sont généralement réservés aux macromolécules."
      },
      {
        questionText: "Les ARNr 18S, 5S et 28S sont d'origine nucléolaire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "L'affirmation est fausse. Les ARNr 18S, 5.8S et 28S sont transcrits dans le nucléole, mais l'ARNr 5S est transcrit à l'extérieur du nucléole, dans le nucléoplasme."
      },
      {
        questionText: "Dans les fibres de stress, l'interaction actine-myosinell déstructure les contacts focaux.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "L'interaction entre l'actine et la myosine dans les fibres de stress ne déstructure pas les contacts focaux ; elle les renforce pour permettre à la cellule de résister à la tension mécanique."
      },
      {
        questionText: "La myosine II et l'a-actinine sont co-localisées dans l'anneau de cytodiérèse.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "La myosine II et l'α-actinine sont en effet des protéines clés qui se co-localisent dans l'anneau de cytodiérèse, la structure contractile qui permet la division du cytoplasme lors de la mitose."
      },
      {
        questionText: "Le canal Ca++ de la membrane nucléaire externe est IP3 dépendant.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [0],
        explanation: "Le canal calcique de la membrane nucléaire externe fait partie du réticulum endoplasmique, et sa fonction est régulée par l'inositol trisphosphate (IP3)."
      },
      {
        questionText: "La glucose 6 phosphatase et les cytochromes P450 sont spécifiques à la membrane externe de l'enveloppe nucléaire.",
        options: [ "Vrai", "Faux" ],
        correctOptionIndexes: [1],
        explanation: "La Glucose-6-phosphatase et les cytochromes P450 ne sont pas spécifiques de l'enveloppe nucléaire externe ; elles sont présentes sur la membrane du réticulum endoplasmique (RE), avec lequel la membrane nucléaire externe est en continuité."
      }
    ]
  }
];
module.exports = cytologyQuizzes;