// quizzes/year-1/genetics.js

const geneticsQuizzes = [
  {
    title: "Structure de l'ADN",
    subject: "genetics",
    questions: [
      {
        questionText: "Parmi ces chercheurs, quel est le premier qui a découvert la structure en double hélice de l'ADN ?",
        options: [
          "Phoebus Levene",
          "Alexander Robert Todd",
          "Rosalind Franklin",
          "Erwin Chargaff",
          "Watson et Crick"
        ],
        correctOptionIndexes: [2],
        explanation: "Bien que Watson et Crick aient publié le modèle de la double hélice, c'est Rosalind Franklin qui a fourni la preuve cruciale de cette structure grâce à ses clichés de diffraction des rayons X. Son travail a été essentiel à la découverte finale."
      },
      {
        questionText: "À propos de la structure de l'ADN (Donnez la réponse juste): 1. L'ADN humain est uniquement situé dans le noyau des cellules. 2. L'appariement entre les 2 brins d'ADN s'effectue grâce à des liaisons hydrogènes. 3. L'appariement entre les 2 brins d'ADN s'effectue grâce à des liaisons phosphodiester. 4. Une base C s'apparie avec une base G par 3 liaisons hydrogènes.",
        options: [
          "1+2",
          "3+2",
          "1+4",
          "1+4+3",
          "2+4"
        ],
        correctOptionIndexes: [4],
        explanation: "L'ADN est également présent dans les mitochondries, donc l'énoncé 1 est faux. L'appariement des brins se fait via des liaisons hydrogènes (énoncé 2 juste). Les liaisons phosphodiester lient les nucléotides d'un même brin (énoncé 3 faux). Les bases C et G s'apparient avec trois liaisons hydrogènes (énoncé 4 juste)."
      },
      {
        questionText: "Un ADN de structure normale contient tous ces éléments sauf lequel ?",
        options: [
          "Des bases puriques",
          "Des bases pyrimidiques",
          "Des nucléosides triphosphates",
          "Du sucre le désoxyribose",
          "Des groupements phosphate"
        ],
        correctOptionIndexes: [2],
        explanation: "Un ADN de structure normale est constitué de désoxyribonucléotides monophosphates. Les nucléosides triphosphates sont les précurseurs (molécules de construction) utilisés pour synthétiser l'ADN, mais ne font pas partie de sa structure finale."
      },
      {
        questionText: "Le nucléosome est composé : 1. De 146 paires de bases. 2. D'une fibre de chromatine de 11 nm de diamètre. 3. D'histone H1. 4. D'un octamère d'histones (H2A, H2B, H3 et H4).",
        options: [
          "1+4",
          "2+3",
          "3+4",
          "1+4+3",
          "1+2+3"
        ],
        correctOptionIndexes: [0],
        explanation: "Le nucléosome est l'unité de base de la chromatine, composée d'environ 146 paires de bases d'ADN enroulées autour d'un octamère d'histones (H2A, H2B, H3, H4). L'histone H1 se lie à l'ADN de liaison entre les nucléosomes pour aider à la compaction."
      },
      {
        questionText: "Préciser la réponse FAUSSE concernant la famille de gènes :",
        options: [
          "Ont une fonction protéique identique.",
          "Ont une homologie de séquences de nucléotides.",
          "Les gènes d'histones sont une famille de gènes.",
          "Sont des copies non fonctionnelles d'un gène fonctionnel.",
          "Sont généralement présents en plusieurs copies dans le génome nucléaire."
        ],
        correctOptionIndexes: [3],
        explanation: "Une famille de gènes est un ensemble de gènes avec une homologie de séquence et des fonctions souvent similaires. La définition D correspond aux 'pseudogènes', qui sont des copies non fonctionnelles."
      },
      {
        questionText: "Les bases pyrimidiques qui forment les nucléotides de l'ADN sont :",
        options: [
          "Représentées par la cytosine (C) et la thymine (T).",
          "Représentées par la cytosine (C) et la guanine (G).",
          "Formées par 2 noyaux cycliques accolés.",
          "Formées d'un noyau aromatique pentagonal.",
          "Formées par un noyau aromatique hexagonal."
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Les bases pyrimidiques de l'ADN sont la Cytosine et la Thymine (A). Elles sont formées d'un seul noyau aromatique hexagonal (E). Les purines (Adénine, Guanine) sont formées de deux cycles."
      },
      {
        questionText: "La propriété de dénaturation de la molécule d'ADN correspond à :",
        options: [
          "L'association spontanée des deux brins d'ADN.",
          "L'association réversible des deux brins d'ADN.",
          "L'antiparallélisme des deux brins d'ADN.",
          "L'hybridation.",
          "La séparation des deux brins d'ADN."
        ],
        correctOptionIndexes: [4],
        explanation: "La dénaturation est la séparation des deux brins d'ADN, généralement par la chaleur, en rompant les liaisons hydrogènes. Le processus inverse est la renaturation ou l'hybridation."
      },
      {
        questionText: "La forme B de l'ADN est observée dans les échantillons d'ADN :",
        options: [
          "Riches en paires G-C",
          "Faiblement hydratés",
          "Fortement hydratés",
          "Sous forme d'hélice gauche",
          "Avec un diamètre de 1,8 nm"
        ],
        correctOptionIndexes: [2],
        explanation: "La forme B de l'ADN est la forme la plus courante dans les conditions physiologiques, c'est-à-dire en présence de beaucoup d'eau (fortement hydraté). Elle a un diamètre d'environ 2 nm."
      },
      {
        questionText: "L'ADN de la plupart des bactéries se présente sous la forme d'un :",
        options: [
          "Pili",
          "Mésosome",
          "Chromosome",
          "Chromosome unique circulaire",
          "ADN nucléaire"
        ],
        correctOptionIndexes: [3],
        explanation: "Contrairement aux eucaryotes (ADN linéaire dans un noyau), la plupart des bactéries possèdent un unique chromosome circulaire localisé dans le nucléoïde."
      },
      {
        questionText: "Les bases puriques présentent les caractéristiques suivantes : 1. Elles sont formées par deux (02) noyaux cycliques accolés. 2. Sont représentées par la thymine et l'uracile. 3. Leur quantité est égale à la quantité des bases pyrimidiques. 4. Elles sont toujours liées entre elles par trois liaisons hydrogènes.",
        options: [
          "1+2",
          "2+4",
          "3+4",
          "1+3",
          "1+2+3"
        ],
        correctOptionIndexes: [3],
        explanation: "Les purines (A, G) ont bien deux cycles (1). D'après la règle de Chargaff, la quantité totale de purines (A+G) égale celle des pyrimidiques (T+C) (3). L'énoncé 2 est faux (ce sont des pyrimidiques). L'énoncé 4 est faux (A-T a 2 liaisons H, G-C en a 3)."
      },
      {
        questionText: "La forme la plus courante de l'ADN (forme B) correspond à : 1. Un pas d'hélice de 2,8 nm. 2. Une hélice droite de 2 nm de diamètre. 3. Un tour d'hélice de 10,5 paires de bases. 4. Des régions riches en paires guanine-cytosine.",
        options: [
          "1+4",
          "2+3",
          "3+4",
          "2+4",
          "1+2+3"
        ],
        correctOptionIndexes: [1],
        explanation: "La forme B est une hélice droite de 2 nm de diamètre (2) et contient environ 10.5 paires de bases par tour (3). Son pas d'hélice est de 3,4 nm."
      },
      {
        questionText: "Le plasmide est :",
        options: [
          "Monocaténaire.",
          "Présent dans les mitochondries.",
          "Une petite molécule d'ADN, souvent circulaire.",
          "Toujours linéaire.",
          "Associé à l'ADN chromosomique."
        ],
        correctOptionIndexes: [2],
        explanation: "Un plasmide est une petite molécule d'ADN bicaténaire, généralement circulaire, qui est distincte de l'ADN chromosomique principal d'une bactérie."
      },
      {
        questionText: "La structure de l'ADN en double hélice a été établie par :",
        options: [
          "Griffith.",
          "Hershey et chase.",
          "Watson et Crick.",
          "Avery.",
          "Rosalind Franklin."
        ],
        correctOptionIndexes: [2],
        explanation: "Bien que le travail de Rosalind Franklin ait été crucial, le modèle final de la double hélice a été publié et établi par James Watson et Francis Crick en 1953."
      },
      {
        questionText: "Parmi ces réponses, précisez celle qui correspond à la forme Z de l'ADN :",
        options: [
          "L'axe de l'hélice passe au centre de l'appariement.",
          "Double hélice droite.",
          "11 paires de bases par tour d'hélice.",
          "Un tour d'hélice a une longueur de 3,4 nm.",
          "Son diamètre est de 1,8 nm."
        ],
        correctOptionIndexes: [4],
        explanation: "La forme Z de l'ADN est une hélice GAUCHE, plus étroite (diamètre de 1,8 nm) et plus allongée que la forme B. Elle contient 12 paires de bases par tour."
      }
    ]
  },
  {
    title: "Organisation du génome humain",
    subject: "genetics",
    questions: [
      {
        questionText: "Concernant les éléments transposables : 1. Représentent 3% du génome humain. 2. Peuvent modifier la structure d'un gène par leurs insertions. 3. Représentent 15% du génome humain. 4. Leur mobilisation est plus marquée dans la lignée germinale.",
        options: [
          "1+2",
          "2+3",
          "3+4",
          "2+4",
          "1+2+4"
        ],
        correctOptionIndexes: [4],
        explanation: "Les transposables (transposons) représentent environ 3% du génome (1). Leur insertion peut interrompre un gène et modifier sa structure (2). Leur activité est plus importante dans les cellules germinales, pouvant créer de nouvelles mutations héritables (4)."
      },
      {
        questionText: "L'ADN hautement répétitif : 1. Est situé dans les centromères des chromosomes. 2. Représente 10% du génome nucléaire. 3. Est un transposon. 4. Inclut les minisatellites (10 à 25 pb répétés de 1000 à 2000 fois).",
        options: [
          "1+2",
          "2+4",
          "3+4",
          "1+2+4",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ADN hautement répétitif (comme l'ADN satellite) représente environ 10% du génome (2) et inclut les minisatellites (4). Il est souvent localisé dans les régions centromériques et télomériques, mais l'énoncé 1 n'est pas une vérité absolue pour toute la classe."
      },
      {
        questionText: "Les rétrotransposons sont : 1. Des séquences d'ADN répétées dispersées. 2. SINE a une taille comprise entre 150 à 500 pb. 3. De l'ADN hautement répétitif. 4. Synthétisés grâce à la transcription inverse.",
        options: [
          "1+2+4",
          "1+2+3",
          "2+3+4",
          "1+3+4",
          "1+2+3+4"
        ],
        correctOptionIndexes: [0],
        explanation: "Les rétrotransposons sont des séquences répétées dispersées (1). Ils se répliquent via un intermédiaire ARN et une transcription inverse (4). Les SINEs (comme Alu) sont un type de rétrotransposons de cette taille (2). Ils ne sont pas classés comme 'hautement répétitifs' mais 'moyennement'."
      },
      {
        questionText: "Dans le modèle du solénoïde : 1. Les nucléosomes sont des brins codants. 2. Les nucléosomes s'enroulent en deux hélices. 3. Les fibres de chromatine font 30 nm de diamètre. 4. Chaque tour de spire contient 6 nucléosomes.",
        options: [
          "1+2",
          "2+3",
          "3+4",
          "1+3+4",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [2],
        explanation: "Le modèle du solénoïde décrit l'enroulement de la fibre de nucléosomes (11 nm) pour former une fibre plus épaisse de 30 nm de diamètre (3). Cet enroulement forme une super-hélice où chaque tour contient environ 6 nucléosomes (4)."
      },
      {
        questionText: "Toutes ces séquences sont des séquences répétées dispersées SAUF une, laquelle ?",
        options: [
          "Transposons",
          "Rétrotransposons",
          "SINE",
          "LINE",
          "Minisatellite"
        ],
        correctOptionIndexes: [4],
        explanation: "Les transposons, rétrotransposons, SINEs et LINEs sont des éléments dispersés à travers le génome. Les minisatellites et microsatellites sont des séquences répétées en tandem (les unes à la suite des autres)."
      },
      {
        questionText: "Lors de la mitose, les boucles de chromatine de 300 nm de diamètre se compactent en spirale formant :",
        options: [
          "Des rosettes de 700 nm de diamètre.",
          "Un chromosome à 1400 nm de diamètre.",
          "Une fibre chromatinienne de 400nm de diamètre.",
          "Des boucles de nucléosomes de 800 nm de diamètre.",
          "Des rosettes de 1400 nm de diamètre."
        ],
        correctOptionIndexes: [0],
        explanation: "La compaction de l'ADN est hiérarchique. Les boucles de 300 nm s'organisent en rosettes, qui forment une structure d'environ 700 nm de diamètre. Cette structure correspond à une seule chromatide. Un chromosome métaphasique complet (deux chromatides) a donc un diamètre de 1400 nm."
      },
      {
        questionText: "Quelle est la réponse fausse sur les protéines d'empaquetage de l'ADN ?",
        options: [
          "Les histones nucléosomiques sont des protéines basiques.",
          "Les histones H3 et H4 sont riches en arginine.",
          "La protéine histone H1 est un histone internucléosomique.",
          "La protéine histone H1 regroupe les protéines histones en octamère.",
          "Les histones H2A, H2B, H3, et H4 se regroupent en octamère."
        ],
        correctOptionIndexes: [3],
        explanation: "L'octamère est formé par 2 copies de H2A, H2B, H3 et H4. L'histone H1 n'en fait pas partie ; elle se lie à l'ADN 'linker' entre les nucléosomes pour aider à compacter la fibre de 11 nm en fibre de 30 nm."
      }
    ]
  },
  {
    title: "La réplication de l'ADN",
    subject: "genetics",
    questions: [
      {
        questionText: "Pourquoi le brin tardif des télomères n'est-il pas répliqué jusqu'au dernier nucléotide ?",
        options: [
          "Car il y a une séquence supplémentaire au niveau du brin matrice 5'-3'.",
          "À cause de la non-expression de la télomérase dans les cellules somatiques.",
          "Car son extrémité 3' est constituée de séquences non codantes.",
          "À cause du raccourcissement naturel des chromosomes.",
          "Car l'amorce d'ARN ne peut être placée au-delà de l'extrémité 3' du brin matrice."
        ],
        correctOptionIndexes: [4],
        explanation: "La réplication du brin tardif nécessite une amorce d'ARN pour démarrer. À l'extrémité du chromosome, il n'y a plus de place pour poser cette dernière amorce. Après son retrait, un petit segment d'ADN simple brin reste non répliqué, ce qui cause un raccourcissement à chaque division."
      },
      {
        questionText: "La télomérase est un des facteurs qui contribuent à :",
        options: [
          "L'immortalisation des cellules cancéreuses.",
          "L'apoptose des cellules.",
          "Le raccourcissement des chromosomes.",
          "La mort des cellules cancéreuses.",
          "La réparation des mutations."
        ],
        correctOptionIndexes: [0],
        explanation: "La télomérase est une enzyme qui allonge les télomères. Elle est normalement inactive dans la plupart des cellules somatiques. Dans 90% des cancers, elle est réactivée, ce qui permet aux cellules cancéreuses d'éviter le raccourcissement des télomères et de se diviser indéfiniment."
      },
      {
        questionText: "Concernant l'élongation de la réplication chez E. coli : 1. L'ADN polymérase III a besoin d'une extrémité 3'-OH libre fournie par l'amorce. 2. L'action de l'ADN polymérase III se fait que dans le sens 5'->3'. 3. Le brin précoce est synthétisé en continu. 4. L'ADN ligase soude tous les fragments d'ADN.",
        options: [
          "1+3+4",
          "1+4",
          "1+2+3",
          "1+2+4",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [2],
        explanation: "L'ADN Pol III a bien besoin d'une amorce (1), synthétise en 5'->3' (2) et le brin précoce est continu (3). L'ADN ligase ne soude que les fragments d'Okazaki sur le brin tardif, pas 'tous les fragments' (4 est imprécis)."
      },
      {
        questionText: "La séparation des deux brins d'ADN lors de l'initiation de la réplication chez E. coli est assurée par :",
        options: [
          "Une primase.",
          "La protéine epsilon.",
          "Les protéines SSB.",
          "La topoisomérase II.",
          "L'hélicase."
        ],
        correctOptionIndexes: [4],
        explanation: "L'hélicase est l'enzyme qui agit comme une 'fermeture éclair', en se déplaçant le long de l'ADN et en rompant les liaisons hydrogènes pour séparer les deux brins au niveau de la fourche de réplication."
      },
      {
        questionText: "L'élongation du brin complémentaire au brin parental orienté 5'->3' se fait :",
        options: [
          "De manière amorcée.",
          "De manière continue.",
          "De manière directe.",
          "Sous la forme d'une série de petits fragments d'Okazaki.",
          "De manière bidirectionnelle."
        ],
        correctOptionIndexes: [3],
        explanation: "Le brin parental 5'->3' est la matrice du brin tardif. Comme la synthèse doit se faire en 5'->3', l'ADN polymérase doit synthétiser 'à reculons' par rapport à l'avancée de la fourche, produisant ainsi de courts fragments discontinus, les fragments d'Okazaki."
      },
      {
        questionText: "Quelle affirmation sur la réplication est FAUSSE ?",
        options: [
          "Elle est semi-conservatrice.",
          "Elle est bidirectionnelle.",
          "Chaque brin parental est copié en un brin complémentaire.",
          "L'expérience de Meselson et Stahl a permis de mettre en évidence l'origine de réplication (Ori).",
          "Le brin tardif est complémentaire du brin parental orienté 5'->3'."
        ],
        correctOptionIndexes: [3],
        explanation: "L'expérience de Meselson et Stahl, utilisant des isotopes d'azote lourd (N15) et léger (N14), a brillamment démontré que la réplication est semi-conservatrice, et non pas conservative ou dispersive."
      },
      {
        questionText: "Chez les eucaryotes, quelles enzymes interviennent dans la réplication ? 1. L'ADN polymérase β (bêta) a une activité exonucléasique. 2. L'ADN polymérase γ (gamma) réplique l'ADN mitochondrial. 3. L'ADN polymérase α (alpha) a une activité exonucléasique. 4. L'ADN polymérase δ (delta) assure l'élongation de l'ADN nucléaire.",
        options: [
          "Toutes sont justes",
          "Toutes sont fausses",
          "3+4",
          "1+3",
          "1+2+4"
        ],
        correctOptionIndexes: [4],
        explanation: "L'ADN Pol β est impliquée dans la réparation (1). L'ADN Pol γ est bien mitochondriale (2). L'ADN Pol δ est responsable de l'élongation du brin tardif et précoce (4). L'ADN Pol α (alpha) synthétise les amorces mais n'a PAS d'activité de relecture (exonucléase 3'->5'), donc (3) est faux."
      }
    ]
  },
  {
    title: "La Transcription (ADN en ARN)",
    subject: "genetics",
    questions: [
      {
        questionText: "La fixation des facteurs de transcription au promoteur chez les eucaryotes se fait dans cet ordre :",
        options: [
          "TFIID, TFIIB, TFIIA, TFIIE, TFIIH",
          "TFIID, TFIIA, TFIIB, TFIIE, TFIIH",
          "TFIID, TFIIA, TFIIB, TFIIF, TFIIE, TFIIH",
          "TFIIA, TFIID, TFIIB, TFIIF, TFIIE, TFIIH",
          "TFIID, TFIIB, TFIIF, TFIIA, TFIIE, TFIIH"
        ],
        correctOptionIndexes: [2],
        explanation: "L'ordre de fixation des facteurs de transcription généraux est séquentiel : TFIID (via TBP) se lie d'abord à la TATA box, stabilisé par TFIIA, suivi par TFIIB, puis le complexe TFIIF-ARN Pol II, et enfin TFIIE et TFIIH."
      },
      {
        questionText: "La sous-unité U2 du splicéosome assure :",
        options: [
          "La coupure à l’extrémité 5’ de l’intron.",
          "La coupure de l’extrémité 3’ de l’intron.",
          "La reconnaissance et l'attachement au site de branchement A de l’intron.",
          "La formation de la structure en lasso finale.",
          "L’épissage des exons."
        ],
        correctOptionIndexes: [2],
        explanation: "Le snRNP U2 joue un rôle crucial en reconnaissant et en se liant au site de branchement (contenant une Adénine clé) au sein de l'intron, ce qui est une étape essentielle pour initier la réaction d'épissage."
      },
      {
        questionText: "L'ARN-polymérase III assure la transcription de : 1. ARNr 5,8S, 2. ARNt, 3. ARNr 5S, 4. ARNm.",
        options: [
          "1+4",
          "2+3",
          "1+2+3",
          "Seulement 2",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [1],
        explanation: "L'ARN polymérase III est spécialisée dans la transcription des petits ARN, principalement les ARNt (ARN de transfert) et l'ARNr 5S. L'ARNm est transcrit par la Pol II et les autres ARNr par la Pol I."
      },
      {
        questionText: "Concernant la terminaison de la transcription rho-dépendante chez E. coli : 1. L’ARNm se détache grâce à l’hybridation ARN/ARN. 2. Le facteur rho est une protéine qui utilise l'ATP. 3. Se fait grâce à la fixation de la protéine rho au site 'rut' de l’ARN. 4. Se fait grâce à un terminateur riche en G-C.",
        options: [
          "1+4",
          "1+3",
          "3+4",
          "2+3",
          "1+2+3"
        ],
        correctOptionIndexes: [3],
        explanation: "La terminaison rho-dépendante requiert la protéine Rho, une hélicase qui hydrolyse l'ATP pour son énergie (2). Elle reconnaît et se lie à une séquence spécifique sur l'ARN naissant appelée site 'rut' (3), puis migre vers l'ARN polymérase pour dissocier le complexe de transcription."
      },
      {
        questionText: "L'épissage alternatif est un processus qui permet à partir d'un transcrit primaire d'avoir :",
        options: [
          "Deux ou plusieurs ARNm matures différents.",
          "Uniquement l'auto-épissage.",
          "Un seul transcrit mature unique.",
          "Une seule protéine mature unique.",
          "Uniquement un site de branchement A."
        ],
        correctOptionIndexes: [0],
        explanation: "L'épissage alternatif est un mécanisme majeur de régulation chez les eucaryotes. En combinant différemment les exons d'un même gène (en en incluant ou en en excluant certains), une cellule peut produire plusieurs ARNm matures, et donc plusieurs protéines (isoformes) à partir d'un seul gène."
      }
    ]
  },
  {
    title: "Les types d'ARN",
    subject: "genetics",
    questions: [
      {
        questionText: "Les acides ribonucléiques nucléaires de petite taille (ARNsn) sont :",
        options: [
          "Des intermédiaires clés dans la traduction.",
          "Des ARN qui permettent aux organismes de se défendre.",
          "Liés spécifiquement à une séquence d'ARN messagers.",
          "Responsables de l'activité de l'ARN polymérase III.",
          "Des petits ARN nucléaires qui participent au processus de l'épissage."
        ],
        correctOptionIndexes: [4],
        explanation: "Les ARNsn (Small Nuclear RNA) sont les composants ARN du splicéosome, la machinerie moléculaire qui reconnaît et excise les introns des pré-ARNm dans le noyau."
      },
      {
        questionText: "La durée de vie des ARNm chez les eucaryotes est de :",
        options: [
          "Quelques heures.",
          "Quelques minutes.",
          "Quelques jours.",
          "Quelques secondes.",
          "Quelques semaines."
        ],
        correctOptionIndexes: [0],
        explanation: "La durée de vie des ARNm eucaryotes est variable mais se compte généralement en heures, permettant une régulation fine de l'expression des gènes. Chez les procaryotes, elle est beaucoup plus courte (quelques minutes)."
      },
      {
        questionText: "Les acides ribonucléiques de transfert (ARNt) sont : 1. Formés de 70 à 100 nucléotides. 2. Des ARN simple brin comportant plusieurs tiges-boucles. 3. Formés d'une tige acceptrice sur laquelle l'acide aminé est estérifié. 4. Des acides ribonucléiques double brin.",
        options: [
          "1+2+3",
          "2+3+4",
          "1+3+4",
          "1+2+4",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [0],
        explanation: "Les ARNt sont de petits ARN (1) simple brin qui se replient en une structure caractéristique en 'feuille de trèfle' (2). Leur extrémité 3' (tige acceptrice) est le site de fixation de l'acide aminé (3). Ils ne sont pas double brin (4 est faux)."
      },
      {
        questionText: "Les ARN de transfert (ARNt) sont constitués de toutes ces régions, SAUF une. Laquelle ?",
        options: [
          "La tige acceptrice.",
          "Le bras TψC.",
          "La région acceptatrice de la coiffe.",
          "La boucle de l'anticodon.",
          "La région variable."
        ],
        correctOptionIndexes: [2],
        explanation: "La structure d'un ARNt inclut la tige acceptrice, la boucle de l'anticodon, la boucle TψC, la boucle D et une région variable. La 'coiffe' est une modification spécifique de l'extrémité 5' des ARNm, pas des ARNt."
      },
      {
        questionText: "Parmi ces propositions sur le rôle des ARN polymérases, donnez la réponse juste :",
        options: [
          "L'ARN polymérase I synthétise tous les ARNr.",
          "L'ARN polymérase II synthétise les ARNt.",
          "L'ARN polymérase II synthétise les ARNm.",
          "L'ARN polymérase III synthétise les ARNm.",
          "L'ARN polymérase I synthétise l'ARNt."
        ],
        correctOptionIndexes: [2],
        explanation: "Chez les eucaryotes, les tâches sont réparties : Pol I transcrit les grands ARNr (28S, 18S, 5.8S). Pol II transcrit les pré-ARNm. Pol III transcrit les petits ARN comme les ARNt et l'ARNr 5S."
      }
    ]
  },
  {
    title: "La Traduction (ARN en Protéines)",
    subject: "genetics",
    questions: [
      {
        questionText: "La fixation d'un acide aminé à son ARNt correspondant est réalisée :",
        options: [
          "À l'extrémité 5' de l'ARNt par l'aminoacyl-ARNt synthétase.",
          "À l'extrémité 3' de l'ARNt par le facteur de traduction (IF3).",
          "À l'extrémité 3' de l'ARNt par une liaison ester grâce à l'aminoacyl-ARNt synthétase.",
          "À l'extrémité 5' de l'ARNt par le facteur de traduction (IF2).",
          "À l'extrémité 3' de l'ARNt par une liaison phosphodiester."
        ],
        correctOptionIndexes: [2],
        explanation: "Cette étape cruciale de 'chargement' est catalysée par une enzyme spécifique, l'aminoacyl-ARNt synthétase, qui lie le bon acide aminé à l'extrémité 3'-OH de son ARNt correspondant via une liaison ester riche en énergie."
      },
      {
        questionText: "Concernant le code génétique : 1. Est une correspondance entre un triplet de bases et un acide aminé. 2. Un codon peut correspondre à plusieurs acides aminés. 3. La méthionine est codée par un seul codon. 4. Le codon AUG est le codon d'initiation.",
        options: [
          "1+4",
          "2+4",
          "1+3+4",
          "3+4",
          "1+2+4"
        ],
        correctOptionIndexes: [2],
        explanation: "Le code génétique est un dictionnaire triplet-acide aminé (1). Il est non-ambigu (un codon = un seul acide aminé, donc 2 est faux) mais redondant. La Méthionine (codée par AUG) et le Tryptophane sont les seules exceptions à la redondance (3). AUG est le codon d'initiation universel (4)."
      },
      {
        questionText: "La séquence Shine-Dalgarno est :",
        options: [
          "Située dans l'ARNt.",
          "Le site de fixation de l'ARNt.",
          "Une séquence riche en purines sur l'ARNm procaryote, en amont du codon AUG.",
          "Située au niveau de l'ARNr 18S eucaryote.",
          "Le codon stop."
        ],
        correctOptionIndexes: [2],
        explanation: "Chez les procaryotes, la séquence Shine-Dalgarno sur l'ARNm est complémentaire d'une séquence sur l'ARNr 16S de la petite sous-unité ribosomale. Cette interaction permet de positionner correctement le ribosome sur le codon d'initiation AUG."
      },
      {
        questionText: "Quel facteur est responsable de la translocation (déplacement du ribosome le long de l'ARNm) chez les eucaryotes ?",
        options: [
          "eEF1A (EF-Tu)",
          "eIF2",
          "eRF1",
          "eEF2 (EF-G)",
          "eIF4E"
        ],
        correctOptionIndexes: [3],
        explanation: "Après la formation de la liaison peptidique, le facteur eEF2 (homologue du EF-G procaryote) utilise l'énergie du GTP pour faire avancer le ribosome d'exactement un codon sur l'ARNm."
      },
      {
        questionText: "Quel est le rôle du facteur IF2 dans la traduction chez les procaryotes ?",
        options: [
          "Il se fixe à la sous-unité 30S pour empêcher la liaison de la 50S.",
          "Il reconnaît la séquence Shine-Dalgarno.",
          "Il lie le GTP et l'ARNt initiateur (fMet-ARNt) et les amène au complexe d'initiation.",
          "Il catalyse la liaison peptidique.",
          "Il assure la translocation."
        ],
        correctOptionIndexes: [2],
        explanation: "IF2 est un facteur d'initiation clé qui, une fois lié au GTP, escorte l'ARNt spécial initiateur (formylméthionine-ARNt) jusqu'à la petite sous-unité ribosomale positionnée sur le codon AUG."
      },
      {
        questionText: "Le facteur de libération (Release Factor) RF1 chez les procaryotes reconnaît les codons stop :",
        options: [
          "UAA et UAG",
          "UAA et UGA",
          "UGA uniquement",
          "AUG",
          "Tous les codons stop"
        ],
        correctOptionIndexes: [0],
        explanation: "Les facteurs de libération miment la structure d'un ARNt et reconnaissent les codons stop. Chez les procaryotes, RF1 reconnaît UAA et UAG, tandis que RF2 reconnaît UAA et UGA."
      }
    ]
  },
  {
    title: "La régulation de l'expression des gènes",
    subject: "genetics",
    questions: [
      {
        questionText: "Le répresseur de l'opéron lactose est inactivé par : (cocher la réponse fausse)",
        options: [
          "Un activateur",
          "Un inducteur",
          "La β-galactosidase",
          "Le lactose",
          "Une mutation du gène I"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Le répresseur est inactivé par l'inducteur (l'allolactose, un dérivé du lactose). Une mutation du gène qui le code (LacI) peut aussi l'inactiver. Un activateur (comme CAP) a l'effet inverse. La β-galactosidase est une enzyme produite par l'opéron, elle ne régule pas le répresseur."
      },
      {
        questionText: "Tous ces facteurs sont des activateurs de la transcription de l'opéron lac SAUF un, lequel ?",
        options: [
          "L'allolactose",
          "Une concentration faible de glucose",
          "Une concentration élevée de glucose",
          "L'inducteur",
          "Le lactose"
        ],
        correctOptionIndexes: [2],
        explanation: "Une faible concentration de glucose mène à une haute concentration d'AMPc, qui forme le complexe activateur AMPc-CAP. L'allolactose (dérivé du lactose) est un inducteur qui inactive le répresseur. Une concentration élevée de glucose inhibe la production d'AMPc, et donc empêche l'activation de l'opéron."
      },
      {
        questionText: "Concernant l'opéron : 1. Le répresseur se lie à l'opérateur. 2. L'expression est coordonnée par plusieurs promoteurs. 3. Les gènes structuraux sont transcrits en une seule molécule d'ARNm. 4. Présent uniquement chez les procaryotes.",
        options: [
          "1+2",
          "2+3",
          "2+4",
          "1+2+3",
          "1+3+4"
        ],
        correctOptionIndexes: [4],
        explanation: "Un opéron est une unité fonctionnelle typique des procaryotes (4) où plusieurs gènes sont sous le contrôle d'un seul promoteur (donc 2 est faux) et sont transcrits en un ARNm polycistronique (3). La régulation se fait via un opérateur où se lie un répresseur (1)."
      },
      {
        questionText: "Chez les eucaryotes, les protéines régulatrices qui se fixent aux séquences d'ADN pour moduler la transcription sont des :",
        options: [
          "Éléments agissant en cis.",
          "Éléments cis capables de moduler l'expression.",
          "Facteurs de contrôle agissant en trans.",
          "Séquences régulatrices.",
          "Promoteurs proximaux."
        ],
        correctOptionIndexes: [2],
        explanation: "Les protéines (comme les activateurs ou répresseurs) sont des facteurs 'trans' car elles sont codées par des gènes qui peuvent être très éloignés de leur cible. Elles se lient aux séquences d'ADN régulatrices, qui sont les éléments 'cis'."
      },
      {
        questionText: "Les 'enhancers' (amplificateurs) sont des :",
        options: [
          "Opérons",
          "Séquences d'ADN agissant en cis, souvent à grande distance du promoteur.",
          "Opérateurs",
          "Protéines activatrices",
          "Séquences proximales"
        ],
        correctOptionIndexes: [1],
        explanation: "Les enhancers sont des séquences d'ADN (éléments cis) qui peuvent être situées très loin d'un gène. En se liant à des protéines activatrices, ils peuvent former une boucle pour interagir avec le promoteur et augmenter considérablement le taux de transcription."
      }
    ]
  },
  {
    title: "Les mutations",
    subject: "genetics",
    questions: [
      {
        questionText: "Les mutations dynamiques sont des mutations :",
        options: [
          "Instables.",
          "Silencieuses.",
          "De transition.",
          "De transversion.",
          "Ponctuelles."
        ],
        correctOptionIndexes: [0],
        explanation: "Les mutations dynamiques sont des mutations instables dues à l'expansion d'une séquence de nucléotides répétée (souvent un triplet), comme dans la maladie de Huntington."
      },
      {
        questionText: "Une mutation 'Frameshift' (décalage du cadre de lecture) est causée par :",
        options: [
          "Une mutation silencieuse.",
          "Une substitution.",
          "Une mutation non-sens.",
          "Une insertion ou une délétion d'un nombre de bases non multiple de 3.",
          "Une mutation faux-sens."
        ],
        correctOptionIndexes: [3],
        explanation: "Une mutation Frameshift résulte de l'ajout (insertion) ou du retrait (délétion) de nucléotides en un nombre qui n'est pas un multiple de 3. Cela décale tout le cadre de lecture, modifiant tous les acides aminés en aval et menant souvent à un codon stop prématuré."
      },
      {
        questionText: "Quelle affirmation sur les mutations géniques est juste ?",
        options: [
          "Elles affectent uniquement les séquences codantes.",
          "Les mutations touchant les cellules germinales sont transmises à la descendance.",
          "Elles génèrent l'homogénéité d'une population.",
          "Les mutations naturelles sont provoquées par des agents mutagènes.",
          "Les mutations somatiques sont toujours mortelles."
        ],
        correctOptionIndexes: [1],
        explanation: "Seules les mutations qui se produisent dans les cellules germinales (spermatozoïdes, ovules) peuvent être héritées par les générations suivantes. Les mutations somatiques affectent l'individu mais ne sont pas transmises."
      },
      {
        questionText: "À propos de la mutation par substitution, quelle est l'affirmation FAUSSE ?",
        options: [
          "C'est une mutation ponctuelle.",
          "Dans la mutation non-sens, il y a un arrêt prématuré de la traduction.",
          "La mutation de transition est le remplacement d'une base purique par une pyrimidique.",
          "Une mutation même-sens peut toucher une région non codante.",
          "Il y a modification de l'acide aminé dans la mutation faux-sens."
        ],
        correctOptionIndexes: [2],
        explanation: "Une transition est le remplacement d'une base par une autre de la même famille (purine par purine, ou pyrimidine par pyrimidine). Le remplacement d'une purine par une pyrimidique (ou vice-versa) est une transversion."
      },
      {
        questionText: "Dans la Myotonie de Steinert, l'anomalie génétique est :",
        options: [
          "Une mutation située dans un exon.",
          "Une mutation du gène de la huntingtine.",
          "Une expansion du triplet CTG dans une région non-codante du gène DMPK.",
          "Une répétition de plus de 35 fois la séquence CAG.",
          "Une mutation du gène FMR1."
        ],
        correctOptionIndexes: [2],
        explanation: "La myotonie de Steinert est due à une expansion instable du triplet CTG situé dans la région 3' non traduite (3' UTR) du gène DMPK."
      }
    ]
  },
  {
    title: "Les systèmes de réparation de l'ADN",
    subject: "genetics",
    questions: [
      {
        questionText: "Le système SOS chez E.coli intervient dans la réparation des lésions :",
        options: [
          "Des mésappariements d'une base.",
          "Des mésappariements d'un nucléotide.",
          "Par relecture (proofreading).",
          "Qui bloquent la réplication (dommages majeurs).",
          "Des bases alkylées."
        ],
        correctOptionIndexes: [3],
        explanation: "Le système SOS n'est pas un mécanisme de réparation précis. C'est une réponse d'urgence qui s'active lorsque l'ADN est massivement endommagé au point de bloquer la fourche de réplication, permettant à la cellule de survivre au prix de nombreuses erreurs."
      },
      {
        questionText: "Dans le mécanisme de réparation SOS, la protéine RecA sert de :",
        options: [
          "ADN glycosylase.",
          "ADN polymérase.",
          "Endonucléase.",
          "Ligase.",
          "Signal activateur qui induit l'expression des gènes de réparation."
        ],
        correctOptionIndexes: [4],
        explanation: "En cas de dommage, la protéine RecA s'active et agit comme un signal qui déclenche l'autoclivage du répresseur LexA, ce qui permet l'expression des gènes de la réponse SOS (comme UmuC, UmuD)."
      },
      {
        questionText: "Quelle est la voie de réparation principale pour une cassure double brin de l'ADN ?",
        options: [
          "Jonction des extrémités non-homologues (NHEJ) où les bouts sont ligaturés, souvent avec perte de nucléotides.",
          "Production d'une région simple-brin qui attire la protéine SSB.",
          "Polymérisation de l'ADN au-delà de la cassure.",
          "Action d'une ligase seule.",
          "Action d'une endonucléase seule."
        ],
        correctOptionIndexes: [0],
        explanation: "Il existe deux voies majeures : la recombinaison homologue (précise) et la jonction des extrémités non-homologues (NHEJ, plus rapide mais sujette aux erreurs). Le NHEJ consiste à 'recoller' les deux extrémités cassées, ce qui peut entraîner la perte de quelques bases."
      },
      {
        questionText: "Quel système de réparation corrige les erreurs qui ont échappé à la relecture de l'ADN polymérase juste après la réplication ?",
        options: [
          "Réparation par excision de base (BER).",
          "Photoréactivation.",
          "Réparation des mésappariements (MMR).",
          "Le système S.O.S.",
          "Réparation par excision de nucléotides (NER)."
        ],
        correctOptionIndexes: [2],
        explanation: "Le système MMR (Mismatch Repair) agit comme un 'correcteur orthographique' post-réplication. Il scanne l'ADN nouvellement synthétisé pour trouver et corriger les bases mal appariées (ex: un T face à un G)."
      },
      {
        questionText: "Les rayons UV induisent principalement quel type d'altération de l'ADN ?",
        options: [
          "La dimérisation de deux pyrimidines adjacentes (ex: T-T).",
          "Pontage ADN-protéines.",
          "Formation de photodimères.",
          "Un pontage intra-brin.",
          "Toutes ces réponses sont des conséquences possibles des UV."
        ],
        correctOptionIndexes: [4],
        explanation: "L'effet le plus connu des UV est la formation de liaisons covalentes entre deux pyrimidines adjacentes sur le même brin (dimères de pyrimidine), ce qui est un type de pontage intra-brin. Ces lésions sont aussi appelées photodimères. Les pontages ADN-protéines sont aussi possibles."
      },
      {
        questionText: "Quel est le rôle de l'enzyme MutS (et ses homologues humains comme MSH2) dans la réparation des mésappariements ?",
        options: [
          "Couper le brin d'ADN erroné.",
          "Synthétiser le nouvel ADN.",
          "Lier les fragments d'ADN.",
          "Reconnaître et se fixer au mésappariement.",
          "Protéger le brin d'ADN simple."
        ],
        correctOptionIndexes: [3],
        explanation: "La première étape du MMR est la reconnaissance de l'erreur. La protéine MutS (ou le complexe MSH2/MSH6 chez l'homme) scanne l'ADN et se fixe spécifiquement à l'endroit où se trouve la paire de bases incorrecte, initiant ainsi le processus de réparation."
      }
    ]
  },
  {
    title: "Les Lois de Mendel & Hérédité Monogénique",
    subject: "genetics",
    questions: [
      {
        questionText: "La première loi de Mendel est la loi de :",
        options: [
          "L'uniformité des parents.",
          "La pureté des parents.",
          "L'uniformité des hybrides de la 1ère génération (F1).",
          "La ségrégation indépendante des caractères.",
          "La pureté des gamètes."
        ],
        correctOptionIndexes: [2],
        explanation: "La première loi de Mendel, ou loi d'uniformité des hybrides de la F1, stipule que le croisement de deux individus de lignées pures (homozygotes) pour un caractère donné produit des descendants (F1) tous identiques entre eux."
      },
      {
        questionText: "Un phénotype qui n'apparaît pas en F1 mais qui réapparaît chez 1/4 des individus en F2 est un phénotype :",
        options: [
          "Dominant",
          "Hybride",
          "Hétérozygote",
          "Codominant",
          "Récessif"
        ],
        correctOptionIndexes: [4],
        explanation: "Le caractère récessif est masqué par le caractère dominant chez les hétérozygotes de la génération F1. Il ne réapparaît dans la génération F2 que chez les individus homozygotes récessifs, qui représentent statistiquement 1/4 de la descendance."
      },
      {
        questionText: "La troisième loi de Mendel est la loi de la :",
        options: [
          "Ségrégation des allèles dans les gamètes.",
          "Uniformité des gamètes.",
          "Ségrégation indépendante des caractères (assortiment indépendant).",
          "Liaison génétique (Linkage).",
          "Pénétrance incomplète."
        ],
        correctOptionIndexes: [2],
        explanation: "La troisième loi de Mendel, ou loi de l'assortiment indépendant des caractères, stipule que les allèles de gènes situés sur des paires de chromosomes différentes se séparent de manière indépendante les uns des autres lors de la formation des gamètes."
      },
      {
        questionText: "Un couple, où les deux parents sont sains mais porteurs d'un allèle morbide autosomique récessif, a un risque d'avoir un enfant malade de :",
        options: [
          "100%",
          "25%",
          "50%",
          "0%",
          "75%"
        ],
        correctOptionIndexes: [1],
        explanation: "Si les deux parents sont hétérozygotes (Aa), la probabilité d'avoir un enfant homozygote récessif (aa) et donc malade est de 1/4, soit 25%."
      },
      {
        questionText: "Un couple hétérozygote pour une maladie autosomique récessive a un risque d'avoir un enfant phénotypiquement sain de :",
        options: [
          "100%",
          "0%",
          "75%",
          "25%",
          "50%"
        ],
        correctOptionIndexes: [2],
        explanation: "Si les deux parents sont hétérozygotes (Aa), les enfants ont 25% de chance d'être homozygotes dominants (AA, sains) et 50% de chance d'être hétérozygotes (Aa, porteurs sains). Le risque total d'avoir un enfant phénotypiquement sain est donc de 25% + 50% = 75%."
      },
      {
        questionText: "Un homme atteint d'une maladie autosomique dominante (hétérozygote) épouse une femme saine. Quelle est la probabilité pour leurs enfants d'être malades ?",
        options: [
          "100%",
          "0%",
          "50%",
          "75%",
          "25%"
        ],
        correctOptionIndexes: [2],
        explanation: "L'homme (Aa) produit des gamètes A et a. La femme (aa) produit des gamètes a. Les enfants seront soit Aa (malades, 50% de probabilité) soit aa (sains, 50% de probabilité)."
      },
      {
        questionText: "Quelle est la caractéristique principale d'une maladie récessive liée à l'X ?",
        options: [
          "Elle ne touche que les femmes.",
          "Un père atteint la transmet à tous ses fils.",
          "Elle est beaucoup plus fréquente chez les hommes que chez les femmes.",
          "Elle est transmise par le chromosome Y.",
          "Les femmes ne peuvent jamais être atteintes."
        ],
        correctOptionIndexes: [2],
        explanation: "Les hommes (XY) n'ont qu'un seul chromosome X. S'il porte l'allèle récessif, ils seront malades. Les femmes (XX) ont besoin de deux copies de l'allèle pour être malades, ce qui est beaucoup plus rare. La transmission père-fils est impossible."
      },
      {
        questionText: "Un homme atteint d'une maladie récessive liée à l'X épouse une femme saine (non porteuse). Quelle sera la situation de leurs enfants ?",
        options: [
          "Tous les enfants seront malades.",
          "Tous les garçons seront malades, toutes les filles seront saines.",
          "Tous les garçons seront sains, toutes les filles seront conductrices.",
          "50% des garçons seront malades.",
          "Toutes les filles seront malades."
        ],
        correctOptionIndexes: [2],
        explanation: "Le père (X^dY) donne son Y à ses fils (qui seront sains car ils reçoivent un X sain de la mère X^NX^N) et son X^d à toutes ses filles (qui seront X^NX^d, donc conductrices saines)."
      }
    ]
  },
  {
    title: "Modes de Transmission Complexes & Exceptions",
    subject: "genetics",
    questions: [
      {
        questionText: "Quelle est la caractéristique principale d'une maladie mitochondriale ?",
        options: [
          "Elle est transmise par le père à tous ses enfants.",
          "Elle est transmise exclusivement par la mère à tous ses enfants (filles et garçons).",
          "Elle ne touche que les hommes.",
          "Elle saute systématiquement une génération.",
          "Elle suit les lois de Mendel."
        ],
        correctOptionIndexes: [1],
        explanation: "L'ADN mitochondrial est contenu dans les mitochondries de l'ovocyte. Par conséquent, il est transmis uniquement par la mère à toute sa descendance."
      },
      {
        questionText: "Lorsqu'un gène s'exprime différemment selon qu'il a été hérité du père ou de la mère, on parle de :",
        options: [
          "Codominance",
          "Pénétrance incomplète",
          "Pléiotropie",
          "Empreinte parentale",
          "Mutation de novo"
        ],
        correctOptionIndexes: [3],
        explanation: "L'empreinte parentale est un phénomène épigénétique où l'un des deux allèles d'un gène est 'silencé' (inactivé par méthylation) en fonction de son origine parentale. Les syndromes de Prader-Willi et Angelman en sont des exemples classiques."
      },
      {
        questionText: "Dans le syndrome de l'X fragile, l'anomalie est une expansion du triplet CGG. Lorsque le nombre de répétitions est supérieur à 200, on parle de :",
        options: [
          "Allèle normal",
          "Prémutation",
          "Mutation complète",
          "Zone grise",
          "Allèle stable"
        ],
        correctOptionIndexes: [2],
        explanation: "La mutation complète (>200 répétitions CGG) entraîne l'hyperméthylation du promoteur du gène FMR1, ce qui bloque sa transcription et cause les symptômes de la maladie."
      },
      {
        questionText: "Lorsqu'un individu porteur du génotype d'une maladie dominante ne présente aucun symptôme, on parle de :",
        options: [
          "Expressivité variable",
          "Mutation de novo",
          "Pénétrance incomplète",
          "Anticipation",
          "Codominance"
        ],
        correctOptionIndexes: [2],
        explanation: "La pénétrance incomplète décrit le phénomène où un génotype donné ne produit pas toujours le phénotype attendu. C'est un concept de 'tout ou rien' : soit l'individu est malade, soit il ne l'est pas, même en ayant le gène."
      },
      {
        questionText: "Lorsque les individus atteints d'une maladie dans une famille présentent des symptômes de sévérité très différente, on parle de :",
        options: [
          "Expressivité variable",
          "Mutation de novo",
          "Pénétrance incomplète",
          "Anticipation",
          "Hérédité mitochondriale"
        ],
        correctOptionIndexes: [0],
        explanation: "L'expressivité variable signifie que l'intensité des symptômes varie d'une personne à l'autre, même au sein d'une même famille et avec la même mutation."
      },
      {
        questionText: "Lorsque deux allèles différents s'expriment tous les deux complètement chez un hétérozygote (ex: groupe sanguin AB), on parle de :",
        options: [
          "Dominance incomplète",
          "Récessivité",
          "Pléiotropie",
          "Épistasie",
          "Codominance"
        ],
        correctOptionIndexes: [4],
        explanation: "Dans la codominance, aucun allèle ne masque l'autre; les deux s'expriment pleinement. Dans le groupe sanguin AB, les antigènes A et B sont tous deux présents à la surface des globules rouges."
      }
    ]
  },
  {
    title: "Le Caryotype",
    subject: "genetics",
    questions: [
      {
        questionText: "Qu'est-ce qu'un caryotype ?",
        options: [
          "L'ensemble des gènes d'un individu.",
          "La représentation ordonnée de l'ensemble des chromosomes d'une cellule.",
          "L'étude d'un seul gène.",
          "Une maladie génétique.",
          "L'ADN mitochondrial."
        ],
        correctOptionIndexes: [1],
        explanation: "Le caryotype est une 'photographie' des chromosomes d'une cellule, bloquée en métaphase, où ils sont classés par paires selon leur taille, la position du centromère et le motif de bandes."
      },
      {
        questionText: "À quelle phase de la mitose les chromosomes sont-ils les mieux visibles pour réaliser un caryotype ?",
        options: [
          "Interphase",
          "Prophase",
          "Métaphase",
          "Anaphase",
          "Télophase"
        ],
        correctOptionIndexes: [2],
        explanation: "C'est en métaphase que la condensation des chromosomes est maximale, ce qui les rend courts, épais et facilement identifiables."
      },
      {
        questionText: "Quelle est la formule chromosomique normale d'un homme ?",
        options: [
          "46, XX",
          "46, XY",
          "47, XY, +21",
          "45, X",
          "47, XXY"
        ],
        correctOptionIndexes: [1],
        explanation: "Un homme a 46 chromosomes au total : 22 paires d'autosomes et une paire de chromosomes sexuels composée d'un X et d'un Y."
      },
      {
        questionText: "Quelle est la formule chromosomique normale d'une femme ?",
        options: [
          "46, XX",
          "46, XY",
          "47, XX, +21",
          "45, Y",
          "47, XXX"
        ],
        correctOptionIndexes: [0],
        explanation: "Une femme a 46 chromosomes au total : 22 paires d'autosomes et une paire de chromosomes sexuels composée de deux X."
      },
      {
        questionText: "La technique de marquage des chromosomes en bandes G est réalisée après traitement des chromosomes par :",
        options: [
          "La chaleur",
          "La trypsine",
          "Une solution argentique",
          "Une solution hypotonique",
          "Un mélange d'éthanol et acide acétique"
        ],
        correctOptionIndexes: [1],
        explanation: "Le 'banding G' utilise un traitement enzymatique doux avec de la trypsine pour digérer partiellement les protéines chromosomiques, révélant des bandes sombres (riches en A-T) et claires (riches en G-C) après coloration au Giemsa."
      },
      {
        questionText: "Un chromosome est dit 'acrocentrique' si le centromère est situé :",
        options: [
          "Exactement au milieu.",
          "Très près d'une extrémité, créant des bras courts (p) très petits.",
          "Légèrement décalé du centre.",
          "À l'extrémité (télocentrique).",
          "Il n'y a pas de chromosome acrocentrique chez l'humain."
        ],
        correctOptionIndexes: [1],
        explanation: "Les chromosomes acrocentriques chez l'humain (13, 14, 15, 21, 22) ont un centromère situé très près d'une des extrémités. Leurs petits bras courts portent les gènes des ARN ribosomiques."
      }
    ]
  },
  {
    title: "Les mutations chromosomiques",
    subject: "genetics",
    questions: [
      {
        questionText: "Deux cassures sur le même bras d’un chromosome, suivies d'un recollement après inversion du segment, est une :",
        options: [
          "Chromosome en anneau",
          "Inversion péricentrique",
          "Délétion intercalaire",
          "Inversion paracentrique",
          "Translocation robertsonienne"
        ],
        correctOptionIndexes: [3],
        explanation: "Une inversion est dite 'paracentrique' car les deux points de cassure se situent sur le même bras chromosomique, donc 'à côté' (para) du centromère, qui n'est pas inclus dans le segment inversé."
      },
      {
        questionText: "Deux cassures sur deux chromosomes différents avec recollement après échange des segments distaux, est une :",
        options: [
          "Translocation réciproque",
          "Duplication directe",
          "Délétion intercalaire",
          "Inversion péricentrique",
          "Délétion terminale"
        ],
        correctOptionIndexes: [0],
        explanation: "La translocation réciproque est un échange de matériel génétique entre deux chromosomes non-homologues. C'est généralement une anomalie équilibrée si aucun gène n'est perdu ou altéré."
      },
      {
        questionText: "La fusion centrique de deux chromosomes acrocentriques est une :",
        options: [
          "Inversion paracentrique",
          "Translocation réciproque",
          "Chromosome en anneau",
          "Délétion",
          "Translocation Robertsonienne"
        ],
        correctOptionIndexes: [4],
        explanation: "La translocation Robertsonienne est une fusion de deux chromosomes acrocentriques (13, 14, 15, 21, 22) au niveau de leur centromère, avec perte des bras courts. C'est un mécanisme important pouvant mener à des trisomies comme la trisomie 21."
      },
      {
        questionText: "Une cassure à chaque extrémité d’un chromosome suivie par un recollement avec perte des segments distaux forme un :",
        options: [
          "Isochromosome",
          "Inversion péricentrique",
          "Chromosome en anneau",
          "Délétion intercalaire",
          "Translocation"
        ],
        correctOptionIndexes: [2],
        explanation: "Un chromosome en anneau est une anomalie de structure déséquilibrée (car il y a perte des télomères et des régions distales) et souvent instable lors des mitoses."
      },
      {
        questionText: "Quelle anomalie chromosomique de structure est dite 'déséquilibrée' ?",
        options: [
          "Translocation réciproque équilibrée",
          "Inversion paracentrique",
          "Inversion péricentrique",
          "Délétion ou Duplication",
          "Porteur sain d'une translocation Robertsonienne"
        ],
        correctOptionIndexes: [3],
        explanation: "Une anomalie est déséquilibrée s'il y a un gain (duplication) ou une perte (délétion) de matériel génétique. Les inversions et les translocations équilibrées ne modifient pas la quantité de gènes."
      }
    ]
  },
  {
    title: "Les maladies chromosomiques",
    subject: "genetics",
    questions: [
      {
        questionText: "Quelle est l'anomalie cytogénétique la plus fréquente observée dans le syndrome de Down ?",
        options: [
          "Trisomie 21 en mosaïque",
          "Translocation robertsonienne 14;21",
          "Trisomie 21 libre et homogène",
          "Duplication partielle du chromosome 21",
          "Isochromosome 21"
        ],
        correctOptionIndexes: [2],
        explanation: "La trisomie 21 libre (un chromosome 21 supplémentaire non attaché) est la cause dans environ 95% des cas de syndrome de Down. Elle résulte le plus souvent d'une non-disjonction méiotique."
      },
      {
        questionText: "Le diagnostic prénatal de la trisomie 21 peut inclure tous ces signes SAUF un. Lequel ?",
        options: [
          "L'hyperclarté nucale à l'échographie.",
          "La diminution du taux de l'alpha-fœto protéine (AFP) maternelle.",
          "L'augmentation du taux de l'hCG maternelle.",
          "Une translocation robertsonienne équilibrée chez le fœtus.",
          "L'hyperéchogénicité des anses intestinales."
        ],
        correctOptionIndexes: [3],
        explanation: "Une translocation équilibrée est une anomalie de structure sans perte ni gain de matériel, le porteur est phénotypiquement normal. Un fœtus atteint de trisomie 21 par translocation a une translocation DÉSÉQUILIBRÉE."
      },
      {
        questionText: "L'anomalie cytogénétique la plus fréquente dans le syndrome de Patau est :",
        options: [
          "Une translocation robertsonienne",
          "La trisomie 18 libre",
          "La trisomie 13 libre et homogène",
          "La trisomie 13 en mosaïque",
          "Une délétion sur le chromosome 13"
        ],
        correctOptionIndexes: [2],
        explanation: "Le syndrome de Patau est défini par la présence de trois copies du chromosome 13. La forme la plus commune est la trisomie 13 libre et homogène."
      },
      {
        questionText: "Le syndrome de Wolf-Hirschhorn est dû à :",
        options: [
          "Une fente palatine.",
          "Une malformation cardiaque.",
          "Une délétion du bras court du chromosome 4 (4p-).",
          "Une délétion du bras long du chromosome 4 (4q-).",
          "Une trisomie 4."
        ],
        correctOptionIndexes: [2],
        explanation: "Le syndrome de Wolf-Hirschhorn est un syndrome microdélétionnel causé par la perte d'un segment du bras court (p) du chromosome 4. Les signes cliniques incluent un faciès caractéristique ('en casque de guerrier grec'), un retard de croissance et un déficit intellectuel."
      },
      {
        questionText: "Un enfant de 2 ans présentant obésité, petite taille, hypogonadisme et une délétion de la région 15q11-q13 d'origine PATERNELLE est porteur du syndrome de :",
        options: [
          "Angelman",
          "Prader-Willi",
          "Leber",
          "Steinert",
          "Beckwith-Wiedemann"
        ],
        correctOptionIndexes: [1],
        explanation: "C'est un exemple d'empreinte parentale. La délétion de la région 15q11-q13 cause le syndrome de Prader-Willi si elle est héritée du père, et le syndrome d'Angelman si elle est héritée de la mère."
      }
    ]
  },
  {
    title: "Conseil Génétique",
    subject: "genetics",
    questions: [
      {
        questionText: "Le risque de récurrence de toutes ces pathologies est calculé par le risque empirique SAUF une. Laquelle ?",
        options: [
          "La fente labiale.",
          "Les malformations cardiaques congénitales.",
          "L'hypertension artérielle.",
          "La mucoviscidose.",
          "Le spina bifida."
        ],
        correctOptionIndexes: [3],
        explanation: "Le risque empirique (basé sur l'observation de populations) est utilisé pour les maladies multifactorielles (options A, B, C, E). La mucoviscidose est une maladie monogénique autosomique récessive, son risque est calculé théoriquement selon les lois de Mendel (25% si les 2 parents sont porteurs)."
      },
      {
        questionText: "Le conseil génétique est un processus NON-DIRECTIF. Qu'est-ce que cela signifie ?",
        options: [
          "Le conseiller ne donne aucune information.",
          "Le conseiller impose une décision au couple.",
          "Le conseiller fournit toutes les informations nécessaires pour que le patient/couple prenne sa propre décision éclairée.",
          "Le processus n'a pas de direction claire.",
          "L'information médicale est divulguée à des tiers."
        ],
        correctOptionIndexes: [2],
        explanation: "Le principe fondamental du conseil génétique est le respect de l'autonomie du patient. Le rôle du conseiller est d'informer, d'expliquer et de soutenir, mais jamais de dicter ou d'imposer un choix."
      }
    ]
  },
  {
    title: "Outils de la biologie moléculaire",
    subject: "genetics",
    questions: [
      {
        questionText: "La technique de Southern blot permet de visualiser :",
        options: [
          "Des didésoxyribonucléotides.",
          "Des mutations ponctuelles.",
          "Le site d'un gène sur le chromosome.",
          "Des séquences d'ADN spécifiques par hybridation avec une sonde marquée.",
          "Des protéines."
        ],
        correctOptionIndexes: [3],
        explanation: "Le Southern blot est utilisé pour détecter un fragment d'ADN spécifique dans un mélange complexe. Il combine l'électrophorèse (séparation par taille), le transfert sur membrane et l'hybridation avec une sonde complémentaire à la séquence recherchée."
      },
      {
        questionText: "Quel est l'objectif de la technique PCR (Polymerase Chain Reaction) ?",
        options: [
          "Couper l'ADN à des sites spécifiques.",
          "Séparer les fragments d'ADN par la taille.",
          "Amplifier de manière exponentielle une séquence d'ADN cible.",
          "Séquencer l'ADN.",
          "Détecter des ARN."
        ],
        correctOptionIndexes: [2],
        explanation: "La PCR est une technique de 'photocopie moléculaire'. Elle permet de générer des milliards de copies d'un segment d'ADN spécifique à partir d'une très faible quantité de matériel de départ."
      },
      {
        questionText: "Dans le séquençage de Sanger, les didésoxyribonucléotides (ddNTPs) sont essentiels car ils :",
        options: [
          "Marquent le début de la séquence.",
          "Sont fluorescents.",
          "Provoquent l'arrêt de l'élongation de la chaîne d'ADN une fois incorporés.",
          "Sont reconnus par les enzymes de restriction.",
          "Permettent la dénaturation de l'ADN."
        ],
        correctOptionIndexes: [2],
        explanation: "Les ddNTPs n'ont pas de groupement hydroxyle en 3'. Lorsque l'ADN polymérase en incorpore un, elle ne peut plus ajouter de nucléotide suivant, ce qui termine la chaîne. En utilisant les 4 ddNTPs marqués différemment, on peut déterminer la séquence."
      },
      {
        questionText: "Un plasmide utilisé en génie génétique comme vecteur de clonage doit contenir :",
        options: [
          "Uniquement le gène d'intérêt.",
          "Une origine de réplication, un site de clonage multiple et un gène de sélection (ex: résistance à un antibiotique).",
          "Un promoteur viral puissant.",
          "Des télomères et un centromère.",
          "De l'ARN double brin."
        ],
        correctOptionIndexes: [1],
        explanation: "Pour être utile, un vecteur doit pouvoir se répliquer dans la bactérie (origine de réplication), permettre d'insérer facilement un gène (site de clonage multiple / polylinker), et permettre de sélectionner les bactéries qui l'ont reçu (gène de sélection)."
      },
      {
        questionText: "La technique du Western Blot est utilisée pour détecter :",
        options: [
          "Des séquences d'ADN spécifiques.",
          "Des séquences d'ARN spécifiques.",
          "Des protéines spécifiques en utilisant des anticorps.",
          "Des mutations ponctuelles.",
          "Le poids moléculaire des lipides."
        ],
        correctOptionIndexes: [2],
        explanation: "Le Western blot est une technique d'immunodétection. Elle sépare les protéines par taille, les transfère sur une membrane, puis utilise un anticorps spécifique pour identifier la protéine d'intérêt."
      }
    ]
  },
  {
    title: "Transfert de gènes chez les bactéries",
    subject: "genetics",
    questions: [
      {
        questionText: "Le processus par lequel une bactérie capte de l'ADN nu depuis son environnement est la :",
        options: [
          "Conjugaison",
          "Transduction",
          "Transformation",
          "Réplication",
          "Transcription"
        ],
        correctOptionIndexes: [2],
        explanation: "La transformation est l'un des trois modes de transfert horizontal de gènes. Elle nécessite que la bactérie soit dans un état dit 'compétent' pour pouvoir importer de l'ADN de l'extérieur."
      },
      {
        questionText: "Le transfert de matériel génétique via un contact direct (pilus sexuel) entre deux bactéries est la :",
        options: [
          "Conjugaison",
          "Transduction",
          "Transformation",
          "Mutation",
          "Mitose"
        ],
        correctOptionIndexes: [0],
        explanation: "La conjugaison est souvent comparée à un 'accouplement bactérien'. Une bactérie donneuse (F+) transfère une copie d'un plasmide (le facteur F) à une bactérie receveuse (F-)."
      },
      {
        questionText: "Le transfert de gènes bactériens d'une bactérie à une autre via un virus (bactériophage) est la :",
        options: [
          "Conjugaison",
          "Transduction",
          "Transformation",
          "Lysogénie",
          "PCR"
        ],
        correctOptionIndexes: [1],
        explanation: "Lors du cycle lytique, un bactériophage peut encapsuler par erreur un morceau de l'ADN de la bactérie hôte. S'il infecte une nouvelle bactérie, il lui injecte cet ADN, réalisant ainsi une transduction."
      },
      {
        questionText: "Pourquoi, lors d'un croisement entre une souche Hfr et une souche F-, la souche F- reste-t-elle F- ?",
        options: [
          "La souche Hfr n'a pas de facteur F.",
          "Le contact physique est impossible.",
          "Le pont de conjugaison se rompt généralement avant le transfert complet du chromosome et du facteur F intégré.",
          "La souche F- détruit le plasmide entrant.",
          "Seul de l'ARN est transféré."
        ],
        correctOptionIndexes: [2],
        explanation: "Dans une souche Hfr (Haute Fréquence de Recombinaison), le facteur F est intégré dans le chromosome bactérien. Lors de la conjugaison, le transfert commence par une partie du chromosome, et le facteur F est transféré en dernier. Le processus est si long que le pont cytoplasmique se casse presque toujours avant la fin."
      }
    ]
  },
  {
    title: "Génétique du cancer",
    subject: "genetics",
    questions: [
      {
        questionText: "La mutation du gène RB1 est principalement incriminée dans l'apparition de :",
        options: [
          "Le rétinoblastome.",
          "Le cancer du sein.",
          "Le lymphome de Burkitt.",
          "Le syndrome de Down.",
          "La leucémie myéloïde chronique."
        ],
        correctOptionIndexes: [0],
        explanation: "Le gène RB1 est le premier gène suppresseur de tumeur découvert. Sa mutation (inactivation des deux allèles) est la cause du rétinoblastome, une tumeur de la rétine chez l'enfant."
      },
      {
        questionText: "Quelle est l'affirmation FAUSSE concernant le gène P53 ?",
        options: [
          "Il régule le cycle cellulaire en l'arrêtant en cas de dommage à l'ADN.",
          "Il peut déclencher l'apoptose (mort cellulaire programmée).",
          "Une fois muté, il est capable de conférer à lui seul le phénotype cancéreux.",
          "C'est un gène suppresseur de tumeur.",
          "Il est muté dans plus de 50% des cancers humains."
        ],
        correctOptionIndexes: [2],
        explanation: "P53 est le 'gardien du génome'. Son inactivation est une étape cruciale dans le développement de nombreux cancers, mais la cancérogenèse est un processus multi-étapes qui nécessite l'accumulation de plusieurs mutations dans différents gènes (oncogènes et autres suppresseurs de tumeurs)."
      },
      {
        questionText: "Quelle anomalie cytogénétique est caractéristique de la Leucémie Myéloïde Chronique (LMC) ?",
        options: [
          "Une translocation entre le chromosome 9 et 22.",
          "La naissance du gène p53.",
          "Une translocation entre le chromosome 8 et 14.",
          "Une délétion du chromosome 5.",
          "La fusion du proto-oncogène myc et du gène Rb."
        ],
        correctOptionIndexes: [0],
        explanation: "La LMC est caractérisée par la translocation t(9;22), qui génère un chromosome anormal appelé 'chromosome Philadelphie'. Cette translocation crée le gène de fusion BCR-ABL, un oncogène qui code pour une tyrosine kinase hyperactive."
      },
      {
        questionText: "Les proto-oncogènes sont des gènes qui, dans une cellule normale :",
        options: [
          "Stoppent la division cellulaire.",
          "Réparent l'ADN.",
          "Sont impliqués dans la stimulation de la prolifération et de la différenciation cellulaire.",
          "Sont toujours inactifs.",
          "N'existent que dans les virus."
        ],
        correctOptionIndexes: [2],
        explanation: "Les proto-oncogènes sont des gènes cellulaires normaux essentiels qui codent pour des protéines impliquées dans les voies de signalisation qui contrôlent la croissance et la division cellulaire. Leur mutation ou leur surexpression peut les transformer en oncogènes."
      },
      {
        questionText: "La mutation des gènes BRCA1 et BRCA2 prédispose principalement au cancer :",
        options: [
          "De la prostate.",
          "Du sein et de l'ovaire.",
          "Du poumon.",
          "Du côlon.",
          "De la peau (mélanome)."
        ],
        correctOptionIndexes: [1],
        explanation: "BRCA1 et BRCA2 sont des gènes suppresseurs de tumeur impliqués dans la réparation de l'ADN. L'héritage d'une mutation dans l'un de ces gènes augmente considérablement le risque de développer un cancer du sein et de l'ovaire au cours de sa vie."
      }
    ]
  },
  {
    title: "Gènes des globines",
    subject: "genetics",
    questions: [
      {
        questionText: "La molécule d'hémoglobine adulte normale (HbA) est un hétérotétramère composé de :",
        options: [
          "Quatre chaînes alpha (α4).",
          "Quatre chaînes bêta (β4).",
          "Deux chaînes alpha (α) et deux chaînes bêta (β).",
          "Deux chaînes alpha (α) et deux chaînes gamma (γ).",
          "Deux chaînes bêta (β) et deux chaînes delta (δ)."
        ],
        correctOptionIndexes: [2],
        explanation: "L'hémoglobine A (HbA), qui constitue environ 97% de l'hémoglobine chez l'adulte, est formée de quatre chaînes polypeptidiques : deux de type alpha et deux de type bêta (α2β2)."
      },
      {
        questionText: "Où sont situés les clusters (groupes) de gènes des globines α et β chez l'humain ?",
        options: [
          "Tous sur le chromosome 11.",
          "Tous sur le chromosome 16.",
          "Le cluster α sur le chromosome 16, le cluster β sur le chromosome 11.",
          "Le cluster α sur le chromosome 11, le cluster β sur le chromosome 16.",
          "Tous sur le chromosome X."
        ],
        correctOptionIndexes: [2],
        explanation: "Les gènes des globines sont organisés en deux clusters sur deux chromosomes différents : le cluster alpha-globine est sur le chromosome 16 et le cluster bêta-globine est sur le chromosome 11."
      },
      {
        questionText: "Une thalassémie est une maladie génétique causée par :",
        options: [
          "Une mutation ponctuelle qui change la structure de l'hémoglobine (ex: HbS).",
          "Un défaut quantitatif : une production réduite ou absente d'une ou plusieurs chaînes de globine.",
          "Une carence en fer.",
          "Une anomalie du nombre de chromosomes.",
          "Une infection virale."
        ],
        correctOptionIndexes: [1],
        explanation: "Les thalassémies sont des défauts de 'quantité'. Une production insuffisante de chaînes alpha cause une alpha-thalassémie. Une production insuffisante de chaînes bêta cause une bêta-thalassémie. Cela crée un déséquilibre entre les chaînes, menant à une anémie."
      }
    ]
  }
];

module.exports = geneticsQuizzes;
