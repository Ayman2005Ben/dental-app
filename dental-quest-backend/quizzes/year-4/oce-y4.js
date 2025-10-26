// quizzes/year-4/oce-y4.js

const oceQuizzes = [
  {
    title: "Cicatrisation Dentino-Pulpaire",
    subject: "oce",
    questions: [
      {
        questionText: "La dentine :",
        options: [
          "Est une structure acellulaire",
          "Contient de l’émail",
          "Est traversée par des canalicules tubulaires",
          "Est constituée de tissus minéralisés et organiques"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La dentine est un tissu minéralisé contenant de nombreux tubules (canalicules) où circulent les prolongements odontoblastiques[cite: 211]. Sa composition est à la fois minérale (70 % d’hydroxyapatite) et organique (20 % de collagène et 10 % d’eau), contrairement à l’émail[cite: 212]."
      },
      {
        questionText: "Les paramètres permettant d’estimer l’état pulpaire :",
        options: [
          "Symptômes cliniques",
          "Tests de sensibilité",
          "Radiographie",
          "Tests thermiques",
          "Toutes les réponses sont vraies"
        ],
        correctOptionIndexes: [4],
        explanation: "L’évaluation du statut pulpaire repose sur l’analyse de la symptomatologie (douleurs provoquées/spontanées), des tests de sensibilité (électrique ou thermique) et des examens radiographiques pour rechercher des signes d’atteinte pulpaire[cite: 221]."
      },
      {
        questionText: "La dentine :",
        options: [
          "Ne contient pas de facteurs de croissance.",
          "Devient réactionnelle quand les tubules se resserrent.",
          "Contient des facteurs de croissance (TGFβ, BMP2…)",
          "Quand les tubules se sclérosent on parle de dentine sclérotique.",
          "Les odontoblastes ne peuvent pas élaborer de dentine secondaire."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "la dentine est un tissu vivant ; elle renferme des facteurs de croissance et peut s’adapter — en s’épaississant (dentine sclérotique) — en réaction aux agressions [cite: 2076-2077]. Les odontoblastes produisent de la dentine secondaire ou réactionnelle selon l’intensité de l’agression[cite: 2077]."
      },
      {
        questionText: "Éléments pour évaluer l’état pulpaire :",
        options: [
          "L’épaisseur résiduelle de dentine.",
          "La symptomatologie (douleur, sensibilité).",
          "L’évolution de la carie.",
          "L’âge du patient et les antécédents.",
          "Le contexte d’apparition (traumatisme, infection…)."
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "l’estimation de l’état de la pulpe repose sur l’épaisseur dentinaire résiduelle, l’historique de la dent, la symptomatologie, l’évolution de la carie et l’âge du patient[cite: 2080]."
      },
      {
        questionText: "Réponse à une carie à évolution lente :",
        options: [
          "L’odontoblaste sécrète une dentine réactionnelle.",
          "L’agression entraîne une nécrose pulpaire.",
          "La dentine formée est appelée dentine cicatricielle.",
          "La dentine est constituée de différentes couches d’ostéodentine.",
          "Une dentine de cicatrisation se forme sans intervention thérapeutique."
        ],
        correctOptionIndexes: [0, 4],
        explanation: "face à une carie lente, l’odontoblaste sort de sa phase quiescente et produit une dentine réactionnelle[cite: 2083]. Il n’y a pas de destruction pulpaire ; une cicatrisation peut se faire spontanément[cite: 2084]."
      },
      {
        questionText: "Dentine de réparation :",
        options: [
          "Se forme après coiffage pulpaire direct (Ca(OH)₂, MTA…).",
          "Résulte d’une agression intense nécessitant l’apparition de néoodontoblastes.",
          "Est identique à la dentine réactionnelle.",
          "Est une dentine secondaire physiologique.",
          "Est formée par des odontoblastes de première génération."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "la dentine de réparation est produite par des odontoblastes de remplacement après destruction des odontoblastes primaires[cite: 2087]. Elle est déclenchée par des agressions sévères (coiffage direct) et se compose de couches d’ostéodentine et d’orthodentine[cite: 2088]."
      },
      {
        questionText: "Formation de la dentine cicatricielle après Ca(OH)₂ :",
        options: [
          "Indique un effet bioinducteur direct du matériau.",
          "Résulte d’une réaction pulpaires à la nature irritante du Ca(OH)₂.",
          "N’a pas de rapport avec une inflammation pulpaire.",
          "Le mécanisme est comparable à celui de la MTA.",
          "Se forme toujours en absence de salicylates."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "la dentine cicatricielle après utilisation de Ca(OH)₂ est due à la réponse défensive de la pulpe face à l’agressivité alcaline du ciment, et non à une action bioinductive intrinsèque[cite: 2091]."
      },
      {
        questionText: "Indications du coiffage dentinaire :",
        options: [
          "Plaies pulpaire totales.",
          "Caries à évolution lente.",
          "Fractures pénétrantes.",
          "Plaies pulpaires.",
          "Plaies vives de la dentine (caries rapides non pénétrantes, fractures non pénétrantes, dénudations du collet)."
        ],
        correctOptionIndexes: [4],
        explanation: "le coiffage dentinaire s’indique pour des caries à évolution rapide qui n’atteignent pas la pulpe, des fractures coronaires non pénétrantes, des dénudations cervicales ou des pulpites aiguës primaires sur dent saine[cite: 2094]."
      },
      {
        questionText: "Coiffage naturel :",
        options: [
          "Thérapeutique propre aux caries à évolution rapide.",
          "Le curetage dentinaire doit être parfait.",
          "Est un coiffage pulpaire indirect.",
          "Est un coiffage pulpaire direct."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "le coiffage naturel correspond à un coiffage pulpaire indirect indiqué dans les caries rapides ; un matériau protecteur est placé audessus d’une fine couche de dentine afin de préserver la pulpe [cite: 2097-2098]."
      },
      {
        questionText: "Indications du coiffage pulpaire indirect :",
        options: [
          "Lésions carieuses actives atteignant la pulpe (caries rapides).",
          "Fractures pénétrantes.",
          "Caries à évolution lente.",
          "Pulpite réversible.",
          "Pulpite chronique hyperplasique."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "le coiffage pulpaire indirect est indiqué en cas de carie rapide proche de la pulpe, de pulpite réversible ou chronique fermée, et pour éviter l’exposition pulpaire lors du curetage[cite: 2101]."
      },
      {
        questionText: "L’oxyde de zinc-eugénol :",
        options: [
          "Est acide (pH ≈ 4).",
          "Peut nécroser la pulpe.",
          "Provoque une douleur intense.",
          "Est utilisé comme MTA.",
          "Toutes les réponses sont vraies."
        ],
        correctOptionIndexes: [4],
        explanation: "le ciment oxyde de zinceugénol a un pH quasi neutre (~7) et n’est pas agressif pour la pulpe[cite: 2104]."
      },
      {
        questionText: "Réponse pulpaire aux thérapeutiques : (Propositions 3 et 4 sont correctes)",
        options: [
          "La cicatrisation se fait par la dentine réactionnelle.",
          "La dentine réparatrice se forme sans intervention.",
          "La réaction à forte intensité détruit les odontoblastes et recrute des cellules progénitrices.",
          "Les cellules progénitrices se différencient en odontoblastes secondaires.",
          "La dentine secondaire se forme dans le canal radiculaire."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "les agressions sévères détruisent les odontoblastes et induisent la différenciation des cellules progénitrices en odontoblastes de remplacement[cite: 2107]."
      },
      {
        questionText: "Réponse pulpodentinaire (formation de dentine) : (Propositions 1, 3, 5 sont correctes)",
        options: [
          "La dentine réactionnelle est formée par la 1ère génération d’odontoblastes.",
          "La dentine secondaire se forme après la naissance.",
          "La dentine de réparation est produite par de nouveaux odontoblastes.",
          "La dentine tertiaire est identique à la dentine réactionnelle.",
          "La dentine élaborée par les cellules progénitrices est de réparation."
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "la dentine réactionnelle est produite par les odontoblastes en réponse à une agression modérée, tandis que la dentine de réparation est produite par des odontoblastes de remplacement issus de cellules progénitrices après une agression sévère[cite: 2110]."
      },
      {
        questionText: "Curetage dentinaire pour coiffage :",
        options: [
          "Réalisation à la fraise boule ou excavateur manuel.",
          "Se fait jusqu’à obtenir le cri dentinaire (dentine dure).",
          "Ne doit laisser que de la dentine saine.",
          "Utilisation d’une fraise diamant sur turbine.",
          "Le curetage est facultatif."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "l’excavateur manuel ou la fraise boule sont utilisés pour éliminer la dentine infectée jusqu’au “cri dentinaire”[cite: 2113]. L’anesthésie peut masquer ce signe et provoquer une sousexcavation[cite: 2114]."
      },
      {
        questionText: "Dentine réactionnelle :",
        options: [
          "Est appelée dentine affectée.",
          "N’est pas sécrétée par des odontoblastes.",
          "Se retrouve sous un fond de cavité après coiffage.",
          "Est sécrétée par les fibroblastes.",
          "Toutes les réponses sont vraies."
        ],
        correctOptionIndexes: [2],
        explanation: "la dentine réactionnelle est sécrétée par des odontoblastes en réponse à une agression modérée et est retrouvée sous le fond d’une cavité coiffée[cite: 2117]."
      },
      {
        questionText: "Rôle du fond protecteur sous une obturation :",
        options: [
          "Protège l’obturation contre la salive.",
          "Empêche les transmissions thermiques et l’intoxication de la pulpe par les acides.",
          "Protège la dent du milieu buccal.",
          "Protège la pulpe.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "un fond protecteur a pour but principal de protéger la pulpe contre les chocs thermiques et l’action acide des matériaux restaurateurs[cite: 2120]."
      },
      {
        questionText: "Thérapeutiques dentinogènes :",
        options: [
          "Intéressent l’émail et la dentine.",
          "Intéressent la pulpe.",
          "Intéressent le complexe pulpodentinaire.",
          "Intéressent seulement la dentine.",
          "Ont pour but la cicatrisation de la pulpe."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "les thérapeutiques dentinogènes s’adressent à l’ensemble du complexe pulpodentinaire pour permettre à la pulpe enflammée de retrouver une structure normale[cite: 2123]."
      },
      {
        questionText: "Hydroxyde de calcium :",
        options: [
          "Est très peu soluble dans l’eau et les fluides tissulaires.",
          "A un pouvoir antiseptique.",
          "A un pH = 10.",
          "Est toxique pour la pulpe.",
          "Est très radioopaque."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "le Ca(OH)₂ est fortement alcalin (pH ≈ 12,4), faiblement soluble et possède une action antiseptique et sédative[cite: 2126]. Il est peu radioopaque[cite: 2127]."
      },
      {
        questionText: "Indications majeures du coiffage pulpaire direct :",
        options: [
          "Cas d’inflammation pulpaire totale.",
          "Fractures radiculaires accidentelles.",
          "Caries juxtapulpaire.",
          "Fractures radiculaires horizontales ou obliques.",
          "Mise à nu iatrogène de la pulpe."
        ],
        correctOptionIndexes: [4],
        explanation: "le coiffage pulpaire direct est indiqué principalement lors d’expositions accidentelles pendant l’ablation d’une dentine cariée ou un traumatisme, à condition que la pulpe soit saine et que l’isolement puisse être réalisé[cite: 2130]."
      },
      {
        questionText: "Biodentine :",
        options: [
          "Biocompatible pour des restaurations sur dent à pulpe vivante.",
          "Possède un pouvoir dentinogène.",
          "A un pouvoir antibactérien.",
          "Est radioopaque.",
          "Sa prise n’est pas influencée par l’humidité."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "la Biodentine est biocompatible, antibactérienne et stimule la formation de dentine[cite: 2133]. Elle n’apprécie pas l’humidité pendant sa prise ; une humidité prolongée (> 12 minutes) perturbe sa cristallisation[cite: 2134]."
      },
      {
        questionText: "Coiffage d’un opercule décalcifié :",
        options: [
          "Se fait avec de l’oxyphosphate de calcium.",
          "Est un coiffage pulpaire direct.",
          "Le curetage doit être parfait (cri dentinaire).",
          "Est un coiffage pulpaire indirect.",
          "La restauration se fait à la même séance."
        ],
        correctOptionIndexes: [3],
        explanation: "lors d’un coiffage indirect d’un opercule décalcifié, on n’élimine que la dentine périphérique jusqu’au « cri dentinaire »[cite: 2141]. On laisse au fond un couvercle de dentine décalcifiée afin d’éviter une exposition pulpaire[cite: 2142]."
      },
      {
        questionText: "Indications du coiffage pulpaire direct :",
        options: [
          "Inflammation pulpaire totale.",
          "Caries juxtapulpaire.",
          "Pulpites irréversibles.",
          "Caries à évolution rapide (signe du cerne laiteux).",
          "Cas de mise à nu iatrogène de la pulpe."
        ],
        correctOptionIndexes: [4],
        explanation: "la mise à nu accidentelle de la pulpe est l’indication principale du coiffage direct[cite: 2137]. Le « signe du cerne laiteux de Marmasse » est plutôt un argument pour un coiffage indirect[cite: 2138]."
      },
      {
        questionText: "Dentine réactionnelle :",
        options: [
          "Survient lors du vieillissement de la dent.",
          "Est appelée dentine physiologique.",
          "Est appelée dentine affectée.",
          "Se retrouve sous un fond de cavité ayant subi un coiffage.",
          "Est sécrétée par les fibroblastes."
        ],
        correctOptionIndexes: [3],
        explanation: "la dentine réactionnelle est produite par les odontoblastes de première génération en réponse à une agression modérée[cite: 2147]. On la retrouve sous les caries initiales ou profondes d’évolution chronique[cite: 2148]."
      },
      {
        questionText: "Curetage lors d’un coiffage dentinaire :",
        options: [
          "Le curetage de toute la cavité doit être parfait.",
          "Le premier temps du curetage est réalisé manuellement (excavateur).",
          "On laisse un opercule de dentine infiltrée.",
          "Le curetage doit être parfait aux parois mais pas au niveau pulpaire.",
          "L’anesthésie est obligatoire."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "le curetage dentinaire doit être complet jusqu’à retrouver une dentine saine (« cri dentinaire »)[cite: 2151]. L’anesthésie peut masquer ce signe et entraîner un curetage insuffisant[cite: 2152]."
      },
      {
        questionText: "Coiffage naturel :",
        options: [
          "Est une thérapeutique particulière à la carie à évolution rapide.",
          "Est un coiffage pulpaire indirect.",
          "Le curetage doit être parfait.",
          "Est un coiffage pulpaire direct."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "le coiffage pulpaire indirect est indiqué dans les caries à évolution rapide atteignant la pulpe (pulpite réversible/hyperhémie)[cite: 2155]. Le matériau protecteur est placé sur une fine couche de dentine pour protéger les odontoblastes et favoriser la formation de dentine réactionnelle[cite: 2156]."
      },
      {
        questionText: "Indication du coiffage dentinaire :",
        options: [
          "Fractures coronaires pénétrantes.",
          "Caries à évolution rapide.",
          "Présence d’un opercule de dentine décalcifiée.",
          "Plaies pulpaires."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "le coiffage dentinaire est indiqué pour toutes les plaies dentinaires sans atteinte du parenchyme pulpaire (caries rapides non pénétrantes, fractures coronaires obliques ou horizontales, dénudations cervicales, pulpites aiguës primaires après traumatisme)[cite: 2159]."
      },
      {
        questionText: "Coiffage pulpaire direct :",
        options: [
          "Les fibroblastes se différencient en odontoblastes.",
          "Le pont dentinaire se forme à partir de la 3ème semaine.",
          "Indiqué en cas de caries profondes.",
          "Indiqué pour les atteintes pulpaires totales.",
          "L’alcalinité du Ca(OH)₂ provoque une nécrose pulpaire superficielle."
        ],
        correctOptionIndexes: [4],
        explanation: "lors d’un coiffage pulpaire direct, l’alcalinité du Ca(OH)₂ entraîne une nécrose superficielle de la pulpe [cite: 2161-2162]. L’objectif est d’assainir la pulpe et de recruter des cellules progénitrices pour former une dentine de réparation[cite: 2163]."
      },
      {
        questionText: "Cellules de synthèse :",
        options: [
          "Participent au processus de réparation.",
          "Participent au processus de résorption.",
          "Sont quiescentes.",
          "Sont les cellules épithéliales de Malassez."
        ],
        correctOptionIndexes: [0],
        explanation: "lors de la dentinogenèse réparatrice, les cellules issues de la zone sousodontoblastique se divisent, migrent vers la zone nécrosée et se différencient en odontoblastes de remplacement ou de seconde génération[cite: 2166]."
      },
      {
        questionText: "Dentine décalcifiée :",
        options: [
          "Est appelée dentine infectée.",
          "Est appelée dentine affectée.",
          "Est appelée boue dentinaire.",
          "Se retrouve dans une lésion suprainférieure."
        ],
        correctOptionIndexes: [1],
        explanation: "la dentine affectée est une dentine déminéralisée conservant la trame collagénique[cite: 2169]. Elle contient des métabolites bactériens et quelques bactéries en faible quantité[cite: 2170]."
      },
      {
        questionText: "Dentine péripulpaire : (Proposition 5 est correcte)",
        options: [
          "dentine réactionnelle",
          "dentine canaliculaire",
          "dentine secondaire",
          "formée par les néoodontoblastes",
          "toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [4],
        explanation: "la dentine péripulpaire réactionnelle est sécrétée à l’interface dentine-pulpe par les odontoblastes de première génération à partir de la prédentine[cite: 2175]. Elle conserve la structure tubulaire de la dentine secondaire et n’est ni canaliculaire, ni produite par des néoodontoblastes[cite: 2176]."
      },
      {
        questionText: "Dentine de réparation :",
        options: [
          "Est due à une stimulation plus agressive.",
          "Ressemble à la dentine réactionnelle.",
          "Résulte de nouveaux odontoblastes.",
          "Provient des cellules progénitrices.",
          "Résulte de la réactivation des odontoblastes."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "la dentine de réparation se forme après destruction des odontoblastes primaires[cite: 2179]. Elle résulte d’une agression forte qui recrute des cellules progénitrices capables de se différencier en odontoblastes de remplacement[cite: 2180]."
      },
      {
        questionText: "Pulpite réversible :",
        options: [
          "Est une urgence inflammatoire.",
          "Est une urgence infectieuse.",
          "Représente le stade ultime au-delà duquel une pulpectomie devient obligatoire.",
          "Nécessite la préparation d’un antalgique.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "la pulpite réversible correspond à une urgence inflammatoire. C’est le dernier stade avant pulpectomie, caractérisé par une douleur brève et réversible à l’arrêt du stimulus thermique ou sucré[cite: 2183]."
      },
      {
        questionText: "Concernant la dentine réparatrice :",
        options: [
          "Elle est formée par des odontoblastes secondaires dits odontoblastes-like",
          "Possède deux couches : une couche superficielle ostéodentine et une couche profonde orthodentine",
          "Dérive de la réaction d’odontoblastes primaires",
          "A une structure identique à la dentine réactionnelle",
          "Toutes les propositions sont fausses"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Après une agression intense, les odontoblastes initiaux meurent et des cellules mésenchymateuses se différencient en « odontoblastes de seconde génération » produisant une dentine réparatrice en deux couches (ostéodentine puis orthodentine)[cite: 241]."
      },
      {
        questionText: "L’hydroxyde de calcium (Ca(OH)₂) :",
        options: [
          "Est très peu soluble",
          "Est antiseptique",
          "A un pH légèrement acide",
          "Est radioopaque"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le Ca(OH)₂ est un matériau très alcalin (pH ≈ 12,4) et légèrement soluble[cite: 356]. Il possède des propriétés antiseptiques et stimule la formation de dentine[cite: 357]. Il n’est pas radioopaque par lui-même[cite: 357]."
      }
    ]
  },
  {
    title: "Principes et Indications du Traitement Endodontique",
    subject: "oce",
    questions: [
      {
        questionText: "On appelle LAM :",
        options: [
          "Le premier instrument qui atteint la limite apicale",
          "Le dernier instrument qui atteint librement la limite apicale",
          "L’instrument avec lequel on réalise le cathétérisme",
          "L’instrument avec lequel on réalise la récapitulation",
          "Une lime mécanisée de petit diamètre"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Dans la préparation des canaux, la LAM (lime apicale majeure) correspond à la dernière lime qui atteint librement la limite apicale et qui sert à la récapitulation, c’est-à-dire au réajustement régulier du trajet de la lime jusqu’à l’apex[cite: 505]."
      },
      {
        questionText: "Le traitement endodontique est contre-indiqué :",
        options: [
          "Chez le patient âgé",
          "Chez le patient immunodéprimé",
          "Temporairement chez le patient sous chimiothérapie",
          "Temporairement chez le diabétique jusqu’à équilibrer son diabète",
          "Temporairement chez la femme enceinte durant le troisième trimestre"
        ],
        correctOptionIndexes: [2],
        explanation: "Le traitement endodontique est temporairement contre-indiqué chez un patient sous chimiothérapie en raison du risque infectieux accru[cite: 513]. L’âge seul ne constitue pas une contre-indication[cite: 514]."
      },
      {
        questionText: "Le traitement endodontique consiste :",
        options: [
          "À extirper uniquement le paquet vasculonerveux",
          "À dévitaliser la dent puis à obturer le système canalaire",
          "À nettoyer (cleaning) le système endocanalaire",
          "À obturer (filling) le réseau canalaire sans irriter le périapex",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Un traitement endodontique comporte trois étapes indissociables : Éliminer et neutraliser toutes les substances organiques du réseau canalaire (débridement) ; Élargir le canal principal en suivant sa forme initiale ; Obturer tridimensionnellement le système canalaire afin d’empêcher toute réinfection[cite: 522]."
      },
      {
        questionText: "La réussite du traitement endodontique est assurée par :",
        options: [
          "La pose du diagnostic précis",
          "Un examen radiologique de qualité",
          "Une étanchéité apicale uniquement",
          "Une étanchéité coronaire uniquement",
          "Une étanchéité apicale et coronaire"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Une obturation hermétique tant au niveau apical qu’au niveau coronaire est essentielle[cite: 530]. Elle repose sur un diagnostic précis et un contrôle radiographique de qualité[cite: 531]."
      },
      {
        questionText: "Le traitement endodontique est indiqué dans le cas de :",
        options: [
          "Pulpite symptomatique",
          "Pulpite asymptomatique",
          "Gangrène pulpaire",
          "Syndrome du septum",
          "Atteinte pulpaire superficielle sur dent permanente immature"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement endodontique est indiqué face à une pulpite irréversible (symptomatique ou non) et à la nécrose pulpaire (gangrène)[cite: 539]. Les situations où la pulpe est superficiellement exposée sur dent permanente immature relèvent plutôt de techniques de protection pulpaire[cite: 540]."
      },
      {
        questionText: "Le traitement endodontique conventionnel ne peut être réalisé dans le cas de :",
        options: [
          "Cardiopathie à haut risque infectieux quand la pulpe est nécrosée",
          "Dent de sagesse non fonctionnelle",
          "Dent immature",
          "Présence de lésion apicale",
          "Support parodontal insuffisant"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Les contre-indications sont : cardiopathie à haut risque infectieux (risque d’endocardite), dents de sagesse non fonctionnelles, dents immatures ou dont le développement radiculaire est incomplet, et dents présentant une mobilité importante liée à un support parodontal insuffisant[cite: 548]."
      },
      {
        questionText: "Les objectifs de traitement endodontique sont :",
        options: [
          "Éliminer toutes les substances organiques du réseau canalaire",
          "Préparer le canal principal en suivant sa forme initiale",
          "Obturer le réseau canalaire de façon tridimensionnelle",
          "Obtenir l’élongation radiculaire",
          "Obtenir la formation d’un pont dentinaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le traitement endodontique vise à nettoyer, désinfecter et obturer hermétiquement le système endocanalaire[cite: 556]. L’élongation radiculaire et la formation d’un pont dentinaire ne sont pas des objectifs d’un traitement endodontique[cite: 557]."
      },
      {
        questionText: "La pulpectomie est indiquée :",
        options: [
          "Dans la catégorie II de Baume",
          "Dans la catégorie IV de Baume",
          "Dans les échecs de coiffage pulpaire",
          "Dans tous les cas de symptomatologie",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "La pulpectomie consiste à retirer la pulpe d’une dent temporaire ou permanente et s’indique lorsque l’exposition pulpaire ou l’échec d’un coiffage ne permet pas de conserver la vitalité pulpaire[cite: 565]."
      },
      {
        questionText: "La lime de perméabilité est utilisée pour :",
        options: [
          "Mesurer la longueur de travail",
          "Explorer le canal (« cathétérisme »)",
          "La préparation canalaire",
          "Libérer le canal de toute obstruction",
          "Vérifier la vacuité apicale après le passage de tout instrument actif"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La lime de perméabilité est une petite lime qui maintient et vérifie la perméabilité de l’extrémité apicale ; elle sert à libérer le canal de débris et à s’assurer qu’il n’y a pas d’obstruction après l’instrumentation [cite: 574-575]."
      },
      {
        questionText: "Le traitement endodontique est réalisé dans le cas de :",
        options: [
          "Échecs des coiffages pulpares directs",
          "Échecs des coiffages pulpares indirects",
          "Dyschromie d’origine carieuse",
          "Polypes pulpalaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Un endodonte est indiqué lorsque le coiffage pulpaire direct a échoué (exposition accidentelle irréversible) ou lorsqu’une dyschromie carieuse révèle une nécrose pulpaire[cite: 587]."
      },
      {
        questionText: "Le traitement endodontique est nécessaire dans les cas suivants :",
        options: [
          "Fracture amélodentinaire avec exposition pulpaire sur dent immature",
          "Dans un but prothétique",
          "Dyschromie d’origine traumatique sans fracture sur dent mature",
          "Pulpite purulente",
          "Parodonte apicale aiguë"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "But prothétique : préparer un ancrage radiculaire. Dyschromie traumatique (sur dent mature) : la nécrose pulpaire nécessite un traitement. Pulpite purulente : inflammation irréversible. Parodontite apicale aiguë : inflammation périapicale secondaire à une nécrose[cite: 596]. La fracture sur dent immature nécessite plutôt une conservation pulpaire[cite: 596]."
      },
      {
        questionText: "Le traitement endodontique est contre-indiqué dans les cas suivants :",
        options: [
          "Atteinte pulpaire sur dent temporaire au stade II",
          "Maladie générale à risque infectieux majeur",
          "Ankylose endocanalaire",
          "Dent de sagesse fonctionnelle",
          "Mobilité dentaire importante"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Maladies générales (ex. endocardite, immunodépression majeure), ankylose endocanalaire (calcification totale) et mobilité importante (insuffisance parodontale) sont des contre-indications[cite: 604]."
      }
    ]
  },
  {
    title: "Reconstitutions Corono-Radiculaires",
    subject: "oce",
    questions: [
      {
        questionText: "L’objectif du coffrage lors d’une reconstitution complexe sur dent vivante est :",
        options: [
          "Préserver la vitalité pulpaire",
          "Empêcher le débordement cervical",
          "Reproduire le point de contact interdentaires",
          "Assurer une rétention extrinsèque",
          "Assurer une rétention intrinsèque"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "le coffrage permet un bon ajustage cervical, obtient un état de surface aussi bon que possible dans une zone qui deviendra inaccessible au polissage et restaure le point de contact[cite: 615]."
      },
      {
        questionText: "Les moyens de coffrage pour une reconstitution complexe sur dent vivante sont :",
        options: [
          "Les tenons dentaires",
          "Les tenons radiculaires",
          "Les matrices",
          "Les coins interdentaires",
          "Les moules préformés"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "les tenons dentinaires et radiculaires servent à la rétention et ne sont pas des moyens de coffrage[cite: 627]. Les matrices, les coins interdentaires et les moules préformés permettent d’assurer un coffrage adapté[cite: 628]."
      },
      {
        questionText: "Les avantages des tenons fibrés par rapport aux tenons métalliques :",
        options: [
          "Ils sont moins rigides, ce qui diminue les risques de fracture radiculaire",
          "Ils ne sont pas sujets à la corrosion qui est une source de descellement",
          "Ils répondent aux exigences esthétiques",
          "Peuvent être utilisés lorsque la limite cervicale est sous-gingivale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "les tenons fibrés possèdent un module d’élasticité voisin de celui de la dentine, ce qui réduit les contraintes et le risque de fracture radiculaire[cite: 639]. Ils ne se corrodent pas et sont esthétiques[cite: 640]. L'option D est fausse car le collage est difficile en sous-gingival[cite: 641]."
      },
      {
        questionText: "Une reconstitution coronoradiculaire est :",
        options: [
          "Une technique qui se réalise sur une dent vivante",
          "Une simple obturation coronaire",
          "Une obturation radiculaire en gutta-percha",
          "Une technique de restauration sur dents non vivantes",
          "Elles peuvent être coulées ou foulées"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "la reconstitution coronoradiculaire (RCR) est une restauration qui reconstruit à la fois la portion coronaire et la portion radiculaire d’une dent dépulpée[cite: 652]. Deux techniques existent : la RCR coulée (indirecte) et la RCR foulée (directe)[cite: 653]."
      },
      {
        questionText: "Quels sont les critères de choix d’un tenon radiculaire :",
        options: [
          "La forme",
          "La radio-opacité",
          "La nature du matériau",
          "Le diamètre",
          "Toutes réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "le choix du tenon dépend de la forme et de la conicité du canal, de la radio-opacité (pour le contrôle), de la nature (métal, fibre...), et du diamètre qui doit respecter l’anatomie radiculaire[cite: 665]."
      },
      {
        questionText: "Qu’est-ce que l’endocouronne :",
        options: [
          "Une reconstitution coronoradiculaire coulée",
          "Une restauration en céramique monobloc collée",
          "Une reconstitution coronaire complexe sur dent vivante",
          "Une facette en résine composite",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "les endocouronnes sont des restaurations monobloc en céramique ou en composite usiné, collées dans la chambre pulpaire d’une dent endodontiquement traitée (souvent molaire)[cite: 676]."
      },
      {
        questionText: "Quel avantage présente le tenon fibré par rapport au tenon métallique ?",
        options: [
          "Il est plus rigide que la dentine",
          "Il a un module d’élasticité proche de celui de la dentine",
          "Il se visse directement dans la racine",
          "Il permet une mise en place sans adhésif",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "les tenons fibrés (verre ou quartz) présentent un module d’élasticité voisin de la dentine, ce qui permet une meilleure répartition des contraintes et diminue le risque de fracture radiculaire[cite: 688]. Leur mise en place nécessite une technique adhésive[cite: 690]."
      },
      {
        questionText: "Concernant la reconstitution coronoradiculaire coulée :",
        options: [
          "Elle nécessite la réalisation d’une empreinte et une étape de laboratoire",
          "Elle est indiquée lorsque la destruction coronaire est limitée (< la moitié du volume)",
          "Elle utilise un tenon fibre collé en direct",
          "Elle est indiquée lorsque la destruction coronoradiculaire dépasse la moitié de la couronne clinique",
          "Elle est contre-indiquée en cas de nécessité d’une couronne périphérique"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "la RCR coulée est une technique indirecte indiquée lorsque la destruction coronaire est importante (plus de la moitié de la couronne)[cite: 702]. Elle requiert une empreinte du canal et un passage au laboratoire[cite: 703]."
      },
      {
        questionText: "Le phénomène galvanique au contact de deux métaux différents dans la cavité buccale provoque :",
        options: [
          "Une perte d’étanchéité entre dent et restauration",
          "Un phénomène de corrosion anodique se produisant uniquement dans l’alliage noble",
          "Un courant électrique et une tension potentielle pouvant entraîner une douleur",
          "Une dégradation de la restauration ou du matériau d’obturation",
          "Aucune de ces réponses"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "la présence simultanée de deux métaux de potentiel électrochimique différent peut provoquer la création d’une pile galvanique[cite: 715]. Il en résulte une circulation de courant électrique (douleur) et une corrosion accélérée (perte d’étanchéité) [cite: 716-717]."
      },
      {
        questionText: "Dans une restauration complexe sur dent vivante, le coffrage permet :",
        options: [
          "De transformer la cavité complexe en cavité simple pour un meilleur contrôle du matériau",
          "De prévenir le débordement cervical et de respecter les marges",
          "De rétablir le point de contact interproximal",
          "D’assurer l’adhésion du tenon radiculaire",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "le coffrage (matrice, coin) a pour but de reconstituer les parois manquantes (transformer en cavité simple), d’empêcher les débordements et de rétablir le point de contact[cite: 729]."
      },
      {
        questionText: "Au sujet du tenon en fibre de verre :",
        options: [
          "Il est utilisé sans couronne périphérique",
          "Il améliore la rétention et la solidité de la couronne collée",
          "Il est vissé dans la racine",
          "Il n’est pas compatible avec les composites",
          "Il n’a aucune radio-opacité"
        ],
        correctOptionIndexes: [1],
        explanation: "le tenon en fibre de verre est collé dans le canal radiculaire et sert de support à la reconstitution coronaire collée[cite: 741]. Il présente une bonne radio-opacité et compatibilité avec les adhésifs[cite: 742]."
      },
      {
        questionText: "Parmi les affirmations suivantes concernant l’onlay, quelle(s) proposition(s) est/sont vraie(s) ?",
        options: [
          "Il correspond à une couronne périphérique complète",
          "Il est indiqué lorsque la restauration recouvre au moins une cuspide",
          "Il ne nécessite pas d’empreinte et est réalisé directement au fauteuil",
          "Son insertion nécessite une préparation supra-gingivale avec recouvrement occlusal",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "l’onlay est une restauration partielle (céramique ou composite) qui recouvre une ou plusieurs cuspides[cite: 754]. Il est réalisé indirectement (nécessite une empreinte) et s’insère sur une préparation supra-gingivale[cite: 755]."
      },
      {
        questionText: "La reconstitution coronoradiculaire foulée est :",
        options: [
          "Une technique indirecte nécessitant une étape de laboratoire",
          "Une technique directe utilisant un matériau inséré à l’état plastique dans le canal radiculaire",
          "Une technique pratiquée exclusivement avec des alliages métalliques coulés",
          "Une technique nécessitant une empreinte du canal",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "la RCR foulée consiste à modeler directement un matériau (ex. CVI renforcé, composite) autour d’un tenon dans la chambre pulpaire et l’entrée du canal[cite: 767]. Elle est réservée aux dents peu délabrées[cite: 768]."
      },
      {
        questionText: "Une restauration complexe :",
        options: [
          "Est indiquée lorsque la dent est vitale et faiblement délabrée",
          "Peut nécessiter la mise en place d’un tenon radiculaire pour redistribuer les contraintes dans la dentine",
          "Est toujours réalisée sans anesthésie",
          "Est une simple obturation de cavité de classe II",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "on parle de restauration « complexe » lorsqu’il manque des parois, rendant nécessaire l’utilisation de rétentions (rainures, tenons)[cite: 780]. L’usage d’un tenon radiculaire (sur dent dévitalisée) permet de répartir les contraintes[cite: 782]."
      },
      {
        questionText: "Quels sont les moyens de rétention intrinsèque lors d’une restauration complexe ?",
        options: [
          "Les épingles dentinaires (cannelures)",
          "Les tenons radiculaires vissés",
          "Les tenons préfabriqués en carbone",
          "Les tenons en zirconia",
          "Les rainures et inserts taillés dans la dentine résiduelle"
        ],
        correctOptionIndexes: [4],
        explanation: "les moyens de rétention intrinsèque sont directement réalisés dans la dentine résiduelle : rainures, inserts, cannelures[cite: 793]. Les tenons (B, C, D) sont des moyens extrinsèques [cite: 794-795]."
      },
      {
        questionText: "L’endocouronne est :",
        options: [
          "Une obturation intracoronaire en amalgame",
          "Une restauration monobloc collée placée dans la chambre pulpaire de molaires délabrées",
          "Une couronne métallique coulée avec tenon",
          "Un inlay composite collé intracoronaire",
          "Toutes les propositions sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "l’endocouronne est un type de couronne partielle en céramique ou composite usiné qui s’ancre dans la chambre pulpaire d’une dent dépulpée (souvent molaire) sans s’engager dans les canaux[cite: 806]."
      },
      {
        questionText: "Dans la préparation d’une reconstitution coronoradiculaire collée en technique directe, quel paramètre est primordial ?",
        options: [
          "Réduire le diamètre du canal pour adapter un tenon métallique",
          "Réaliser une empreinte radiculaire pour la coulée",
          "Choisir le diamètre du tenon fibré en fonction du canal et veiller à ce qu’il reste au moins 2 mm d’apex obturé",
          "Utiliser une couronne provisoire en résine pendant la mise en place",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "pour une RCR collée directe, on prépare le logement radiculaire en respectant un bouchon apical de gutta-percha (minimum 2 mm)[cite: 819]. On choisit un tenon fibré d’un diamètre adapté sans fragiliser la dent[cite: 820]."
      },
      {
        questionText: "Comparé à un tenon métallique, le tenon en fibre de verre :",
        options: [
          "A un module d’élasticité plus faible et donc plus proche de celui de la dentine",
          "Exige d’élargir davantage le canal pour son insertion",
          "Provoque davantage de fractures radiculaires",
          "Est susceptible de provoquer la corrosion par galvanisme",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "le tenon fibré possède un module d’élasticité voisin de celui de la dentine, ce qui favorise l’absorption des contraintes et limite le risque de fracture[cite: 832]. Les réponses B, C et D sont fausses[cite: 834]."
      },
      {
        questionText: "Quel matériau est recommandé pour coller un tenon fibré ?",
        options: [
          "Un ciment verre-ionomère modifié à haute viscosité",
          "Un composite photopolymérisable (mastic photopolymérisable)",
          "Un ciment à l’oxyphosphate de zinc",
          "Un ciment à l’eugénate de zinc",
          "Un composite dual (photopolymérisable et autopolymérisable)"
        ],
        correctOptionIndexes: [4],
        explanation: "les tenons fibrés doivent être collés avec un ciment composite dual : sa polymérisation débute par la lumière puis se poursuit chimiquement afin d’assurer un durcissement même en profondeur[cite: 845]."
      },
      {
        questionText: "À propos de l’endocouronne :",
        options: [
          "C’est une obturation intracoronaire directe en amalgame",
          "Elle est indiquée pour les dents endodontiquement traitées et très délabrées",
          "Elle s’utilise uniquement sur les prémolaires",
          "Elle est surtout indiquée au niveau des molaires où la chambre pulpaire offre un volume important",
          "Sa réalisation nécessite une étape de laboratoire (empreinte ou CFAO) avant collage"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "l’endocouronne est une restauration monobloc collée indiquée pour les dents très délabrées[cite: 857]. Elle est indiquée lorsque l’espace de la chambre pulpaire est suffisant pour la rétention (cas des molaires)[cite: 858]. Elle est réalisée indirectement (labo/CFAO)[cite: 859]."
      },
      {
        questionText: "Dans la reconstitution coronoradiculaire foulée, on peut affirmer que :",
        options: [
          "Elle nécessite une empreinte radiculaire et la coulée d’un alliage",
          "Elle est réalisée directement au fauteuil sans étape de laboratoire",
          "Elle utilise un tenon préfabriqué en fibre collé",
          "Elle n’est indiquée que sur dents antérieures",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "selon le site, toutes les propositions de cette question étaient considérées correctes[cite: 870]. En pratique clinique, la RCR foulée est une technique directe... [cite: 871]"
      },
      {
        questionText: "Pour restaurer une dent antérieure non vivante selon une technique directe, il est conseillé :",
        options: [
          "D’utiliser un tenon en alliage coulé",
          "D’utiliser un tenon en fibre de verre ou en quartz collé",
          "D’utiliser un tenon en fibre de carbone noir",
          "De coller le tenon avec un système adhésif et un composite de collage",
          "Toutes les propositions sont fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "dans les dents antérieures dévitalisées, l’esthétique oriente vers des tenons fibrés translucides[cite: 883]. La fixation doit être réalisée par un collage adhésif avec un composite dual[cite: 885]."
      },
      {
        questionText: "Les moyens de rétention extrinsèque peuvent être :",
        options: [
          "Des tenons scellés",
          "Des tenons à friction",
          "Des tenons vissés",
          "Des tenons autoforants",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "les moyens de rétention extrinsèque correspondent aux tenons rapportés, qu’ils soient scellés, vissés, autoforants ou autotaraudants[cite: 896]. Toutes les catégories proposées sont donc correctes[cite: 897]."
      },
      {
        questionText: "Choisissez la ou les affirmations exactes concernant les tenons en fibre de verre :",
        options: [
          "Ils sont moins résistants à la fatigue que les tenons métalliques",
          "Leur module d’élasticité est proche de celui de la dentine",
          "Ils sont cylindriques et totalement rigides",
          "Ils absorbent et dissipent une partie des contraintes coronaires",
          "Ils sont opaques en radiographie"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "les tenons en fibre de verre présentent des propriétés mécaniques proches de la dentine et absorbent les contraintes, ce qui réduit l’effet de coin et les fractures[cite: 908]. Ils sont radiopaques[cite: 909]."
      },
      {
        questionText: "À propos du composite dual :",
        options: [
          "C’est un composite fluide utilisé pour coller des tenons fibrés",
          "Il ne polymérise que sous l’action de la lumière",
          "Il se présente uniquement en capsule d’amalgame",
          "Il permet un collage en l’absence de lumière grâce à sa composante autopolymérisable",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "un composite dual associe une polymérisation photo-initiée à une polymérisation chimique[cite: 921]. Il est fluide et permet de coller des tenons fibrés, notamment en zone profonde où la lumière ne pénètre pas[cite: 922]."
      },
      {
        questionText: "Parmi les propositions suivantes, lesquelles désignent des tenons radiculaires métalliques ?",
        options: [
          "Tenon en acier inoxydable",
          "Tenon en fibre de verre",
          "Tenon en titane",
          "Tenon en fibre de quartz",
          "Tenon en acier doré (ou acier plaqué or)"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "les tenons radiculaires métalliques peuvent être en acier inoxydable, en titane ou en alliage d’acier doré[cite: 934]. Les tenons en fibre de verre ou de quartz sont des tenons composites[cite: 935]."
      },
      {
        questionText: "Les éléments de rétention intrinsèque lors d’une restauration complexe comprennent :",
        options: [
          "Les cannelures ou épingles dentinaires",
          "Les tenons en zirconia vissés",
          "Les tenons en carbone collés",
          "Les rainures taillées dans les parois dentinaires",
          "La couronne de recouvrement des cuspides"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "les rétentions intrinsèques se font directement dans la dentine : cannelures, rainures, inserts[cite: 946]. Les tenons (zirconia, carbone) sont des éléments extrinsèques[cite: 946]."
      },
      {
        questionText: "Dans une restauration composite complexe sur une dent postérieure vivante, on utilise généralement :",
        options: [
          "Une couronne ou bague en polyester (matrice) associée à un coin interdentaire",
          "Une couronne métallique coulée",
          "Un tenon radiculaire vissé",
          "Un inlay en céramique",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "sur dent vivante, la restauration composite complexe nécessite un coffrage adapté[cite: 958]. La matrice en polyester (ou bague) combinée à un coin interdentaire permet d’obtenir un point de contact[cite: 959]."
      },
      {
        questionText: "Quelle est la forme la plus courante des tenons fibrés préfabriqués ?",
        options: [
          "Cylindrique pure",
          "Cylindro-conique (conique vers l’extrémité)",
          "Fusiforme avec renflement au milieu",
          "Cylindrique avec rainures croisées",
          "Ils se présentent en forme d’anneau"
        ],
        correctOptionIndexes: [1],
        explanation: "la plupart des tenons en fibre de verre ou de quartz présentent une forme cylindro-conique qui s’adapte à la conicité du canal radiculaire [cite: 971-972]."
      },
      {
        questionText: "La silanisation consiste à :",
        options: [
          "Appliquer un agent d’adhésion (silane) sur la surface du tenon en fibre pour améliorer le collage du composite",
          "Protéger le tenon avec du vernis fluoré",
          "Recouvrir le tenon de ciment verre-ionomère",
          "Graver la dentine avec un acide",
          "Aucune de ces réponses"
        ],
        correctOptionIndexes: [0],
        explanation: "la silanisation est l’application d’un agent de couplage (silane) sur la surface du tenon fibré[cite: 983]. Ce traitement crée des liaisons chimiques entre la résine de collage et les fibres du tenon[cite: 984]."
      },
      {
        questionText: "Lors de la réalisation d’une reconstitution coronoradiculaire collée (ou RCR adhésive), quelles sont les étapes indispensables ?",
        options: [
          "Nettoyer le canal avec l’EDTA pour éliminer le smear-layer avant la mise en place du tenon",
          "Utiliser un adhésif dual compatible avec la dentine et la résine",
          "Employer un composite de collage dual (photo et autopolymérisable)",
          "Reconstituer la portion coronaire avec un composite photopolymérisable",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "l’adhésion en endodontie nécessite la décontamination (EDTA), l’application d’un système adhésif dual, et l’utilisation d’un composite dual pour coller le tenon[cite: 996]. La partie coronaire est ensuite reconstituée[cite: 997]."
      },
      {
        questionText: "Le tenon radiculaire métallique :",
        options: [
          "Est un substitut de racine (il remplace la racine)",
          "Permet une rétention intrinsèque par rainures",
          "Est un moyen de rétention extrinsèque (rapporté)",
          "Ne fragilise jamais la racine",
          "Risque de fragiliser la racine et peut transparaître sous la couronne"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "le tenon radiculaire métallique est un élément extrinsèque scellé ou vissé[cite: 1009]. S’il est trop large ou rigide, il peut fragiliser la racine[cite: 1010]. Sa couleur peut transparaître[cite: 1011]."
      },
      {
        questionText: "Les moyens de rétention extrinsèques peuvent être :",
        options: [
          "Des tenons scellés",
          "Des tenons à friction",
          "Des tenons vissés",
          "Des tenons autoforants",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "cette question rappelle que les différents types de tenons rapportés (scellés, à friction, vissés ou autoforants) constituent tous des moyens de rétention extrinsèque[cite: 1022]."
      },
      {
        questionText: "Les tenons fibres :",
        options: [
          "Sont moins résistants à la fatigue/aux tenons métalliques",
          "Sont moins radio-opaques que la dentine",
          "Sont cylindriques",
          "Augmentent l’effet de coin et les fractures",
          "Sont très esthétiques"
        ],
        correctOptionIndexes: [4],
        explanation: "les tenons fibrés présentent des avantages : propriétés mécaniques proches de la dentine, absorption des contraintes, absence de corrosion, radio-opacité suffisante et esthétique supérieure [cite: 1034-1035]."
      },
      {
        questionText: "Dans la technique d’une reconstitution coronoradiculaire collée (RCR collée ou adhésive) nous utilisons :",
        options: [
          "Des tenons métalliques",
          "Des tenons fibrés",
          "Des ciments de scellement de type oxyphosphate de zinc",
          "Des colles de type DUAL (adhésifs/composites duals)",
          "Des tenons vissés ou scellés (métalliques)"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "la technique adhésive fait appel à des tenons fibrés collés et à des colles/composites duals[cite: 1046]. Les tenons métalliques et les ciments classiques sont exclus[cite: 1047]."
      },
      {
        questionText: "Les tenons fibrés sont collés à l’aide de :",
        options: [
          "Ciment verre-ionomère",
          "Composite photopolymérisable seul",
          "Ciment à l’oxyphosphate de zinc",
          "Hydroxyde de calcium",
          "Composite dual (photo et autopolymérisable)"
        ],
        correctOptionIndexes: [4],
        explanation: "le collage d’un tenon fibré nécessite l’utilisation d’un composite dual qui polymérise à la fois par photo-activation et par réaction chimique[cite: 1059]."
      }
    ]
  },
  {
    title: "Dentisterie Préventive et ICDAS",
    subject: "oce",
    questions: [
      {
        questionText: "Selon le concept médical préventif :",
        options: [
          "Les restaurations usagées sont remplacées systématiquement.",
          "Les restaurations usagées peuvent être réparées.",
          "La reprise des restaurations se fait après réduction du RCI.",
          "Les tissus déminéralisés sont présumés infect.",
          "Les tissus déminéralisés sont présumés reminéralisés."
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "En dentisterie moderne, on privilégie la réparation des restaurations usagées plutôt que leur remplacement, et on ne refait les restaurations qu’après réduction du risque carieux (RCI)[cite: 1176]. Les tissus déminéralisés sont considérés comme potentiellement reminéralisables[cite: 1177]."
      },
      {
        questionText: "La classification ICDAS :",
        options: [
          "Est topographique.",
          "Est visuelle.",
          "Se base sur les signes radiographiques.",
          "Se base sur la sensibilité pulpaire."
        ],
        correctOptionIndexes: [1],
        explanation: "L’ICDAS (International Caries Detection and Assessment System) est une classification visuelle standardisée des lésions carieuses[cite: 1182]."
      },
      {
        questionText: "La dentisterie préventive :",
        options: [
          "Synonyme de dentisterie restauratrice.",
          "Un ensemble de moyens pour éviter l’expansion d’une carie.",
          "Une alternative à la dentisterie esthétique.",
          "Un ensemble de moyens préventifs.",
          "Son objectif est d’éviter l’apparition d’une carie."
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "La dentisterie préventive regroupe l’ensemble des moyens mis en œuvre pour prévenir l’apparition, l’expansion ou l’aggravation des caries[cite: 1188]."
      },
      {
        questionText: "Le code 0 selon l’ICDAS :",
        options: [
          "Correspond à une surface déminéralisée.",
          "Correspond à une cavité visible.",
          "Correspond à une lésion carieuse initiale.",
          "Correspond à une tache blanche.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [4],
        explanation: "Le code 0 indique une surface dentaire saine, sans aucune trace de lésion carieuse[cite: 1194]."
      },
      {
        questionText: "La rupture localisée de l’émail sans exposition dentinaire (ICDAS) :",
        options: [
          "Code 2",
          "Code 3",
          "Code 4",
          "Code 5"
        ],
        correctOptionIndexes: [1],
        explanation: "Le code 3 de l’ICDAS représente une rupture localisée de l’émail, sans exposition de la dentine[cite: 1199]."
      },
      {
        questionText: "Quels sont les principes de base de la dentisterie moderne ?",
        options: [
          "Économie tissulaire.",
          "Fluoration systématique.",
          "Adhésion.",
          "Bio-intégration.",
          "Application systématique du vernis fluoré."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La dentisterie moderne privilégie l’économie des tissus, l’adhésion des matériaux restaurateurs et la bio-intégration[cite: 1204]."
      },
      {
        questionText: "Quels sont les effets des fluorures topiques sur la prévention de la carie dentaire ?",
        options: [
          "Ils inhibent l’activité bactérienne du biofilm.",
          "Ils rendent l’émail plus soluble.",
          "Ils favorisent la déminéralisation.",
          "Ils rendent l’émail moins soluble aux attaques acides.",
          "Ils stoppent l’évolution des caries."
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Les fluorures topiques inhibent l’activité bactérienne de la plaque, rendent l’émail moins soluble aux attaques acides et favorisent la reminéralisation, ce qui peut arrêter l’évolution des lésions carieuses[cite: 1211]."
      },
      {
        questionText: "Quelles sont les indications du scellement prophylactique des puits et fissures dentaires ?",
        options: [
          "Les lésions carieuses occlusales.",
          "Une mauvaise hygiène bucco-dentaire.",
          "Les sillons occlusaux profonds.",
          "Des patients à risque carieux modéré ou sévère.",
          "Les dents en cours d’éruption."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le scellement est indiqué sur des sillons profonds chez des patients à risque carieux élevé ; il retarde la survenue d’une lésion carieuse [cite: 1218-1219]."
      },
      {
        questionText: "La classification ICDAS est basée sur :",
        options: [
          "Les signes visuels.",
          "Les signes radiographiques.",
          "Les signes pulpaires.",
          "Les signes microbiologiques."
        ],
        correctOptionIndexes: [0],
        explanation: "L’ICDAS est une classification purement visuelle[cite: 1224]."
      },
      {
        questionText: "Le score 4 de l’ICDAS correspond à :",
        options: [
          "Une déminéralisation de l’émail.",
          "Une déminéralisation du tiers externe de la dentine.",
          "Un point blanc visible après séchage.",
          "Une cavité franche."
        ],
        correctOptionIndexes: [1],
        explanation: "Cette notation indique que la lésion atteint la partie externe de la dentine[cite: 1230]."
      },
      {
        questionText: "Le traitement des lésions Site 2 – Stade 2 (classification Si/Sta) :",
        options: [
          "Scellement.",
          "Infiltration.",
          "Minipréparation et obturation composite.",
          "Microdentisterie."
        ],
        correctOptionIndexes: [2],
        explanation: "Pour une cavité détectée au niveau du point de contact (site 2 – stade 2), une minipréparation par voie occlusale et une obturation composite sont indiquées[cite: 1235]."
      },
      {
        questionText: "Les dentifrices en dentisterie préventive :",
        options: [
          "Sont essentiellement curatifs.",
          "Ne contiennent jamais de fluor.",
          "S’utilisent pour dissoudre les tissus carieux.",
          "Sont utilisés en topique pour reminéraliser les lésions initiales de l’émail."
        ],
        correctOptionIndexes: [3],
        explanation: "Les dentifrices sont utilisés localement pour reminéraliser les lésions initiales grâce à des fluorures et autres composants[cite: 1241]."
      },
      {
        questionText: "Les gels fluorés :",
        options: [
          "Ne s’utilisent qu’au cabinet.",
          "Sont contre-indiqués chez l’enfant.",
          "S’utilisent à domicile à faible concentration.",
          "S’appliquent uniquement en gouttière orthodontique."
        ],
        correctOptionIndexes: [2],
        explanation: "Les gels fluorés peuvent être appliqués par le praticien ou par le patient avec des gouttières adaptées ; on recommande une utilisation quotidienne à domicile [cite: 1247-1248]."
      },
      {
        questionText: "Le scellement thérapeutique est indiqué pour :",
        options: [
          "Les lésions occlusales cavitées.",
          "Les caries profondes (ICDAS 4).",
          "Les lésions ICDAS 3-4.",
          "Les lésions occlusales initiales."
        ],
        correctOptionIndexes: [3],
        explanation: "Le scellement est réservé aux lésions non cavitées (ICDAS 1-2). En présence de cavitation (ICDAS 3-4), une microdentisterie est nécessaire[cite: 1253]."
      },
      {
        questionText: "Le vernis fluoré :",
        options: [
          "Est utilisé par le patient à la maison.",
          "Est appliqué par le chirurgien-dentiste au fauteuil.",
          "Est appliqué par l’orthodontiste en laboratoire.",
          "Est contre-indiqué en cas de risque carieux élevé."
        ],
        correctOptionIndexes: [1],
        explanation: "Le vernis est appliqué par le praticien à l’aide d’un minipinceau, notamment chez les patients à risque carieux élevé[cite: 1259]."
      },
      {
        questionText: "L’infiltration (technique ICON) est indiquée :",
        options: [
          "Pour les lésions ICDAS 3-4.",
          "Pour les lésions cavitaires.",
          "Uniquement pour les lésions occlusales initiales.",
          "Pour les lésions de puits et fissures.",
          "Pour les lésions initiales de surfaces lisses et proximales."
        ],
        correctOptionIndexes: [4],
        explanation: "L’infiltration est un traitement de prévention secondaire des taches blanches (ICDAS 1-2) ; une résine de faible viscosité imprègne l’émail déminéralisé des surfaces lisses et proximales [cite: 1265-1266]."
      },
      {
        questionText: "Concernant le scellement prophylactique :",
        options: [
          "C’est un acte invasif.",
          "Il concerne les dents temporaires.",
          "Il peut être réalisé avec du verre ionomère.",
          "Il s’agit d’une thérapie non invasive.",
          "Il peut être réalisé avec un CVI."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "Le scellement prophylactique est une technique non invasive indiquée en dentition permanente ou mixte, utilisant des résines de scellement ou du ciment verre-ionomère (CVI)[cite: 1272]."
      },
      {
        questionText: "Dans la classification Si/Sta, les techniques de reminéralisation s’appliquent aux lésions :",
        options: [
          "Site 1 – Stade 3",
          "Site 2 – Stade 3",
          "Site 1 – Stade 1",
          "Site 1 – Stade 2",
          "Site 1 – Stade 0"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les méthodes de reminéralisation (fluorures, vernis, infiltration) sont indiquées pour les lésions initiales (stade 1) et certaines lésions de stade 2[cite: 1277]."
      },
      {
        questionText: "La microdentisterie :",
        options: [
          "Traite les lésions débutantes.",
          "Se base sur l’extension de la cavité.",
          "Est guidée par l’économie tissulaire.",
          "Vise à préserver les tissus dentaires.",
          "Utilise des minipréparations."
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La microdentisterie (ou dentisterie minimale) est une approche de prévention tertiaire qui intervient sur des lésions débutantes en conservant au maximum les tissus et en utilisant de petites cavités guidées par la lésion elle-même[cite: 1284]."
      },
      {
        questionText: "Le code 1 de l’ICDAS correspond à :",
        options: [
          "Une surface saine.",
          "Une surface déminéralisée.",
          "Un changement visuel après séchage à l’air.",
          "Une surface cavitaire.",
          "Nécessite forcément un traitement invasif."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le code 1 correspond à une altération visuelle légère de l’émail visible seulement après séchage et indiquant une déminéralisation sans cavitation[cite: 1290]."
      },
      {
        questionText: "Les apports de fluorures pour la reminéralisation de la lésion carieuse se font par : (Combinaison 1-3-5)",
        options: [
          "Dentifrices",
          "L’eau fluorée",
          "Gels",
          "Le lait",
          "Vernis"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les apports topiques comprennent dentifrices, gels, vernis, bains de bouche, chewing-gums ou pastilles fluorées[cite: 1295]."
      },
      {
        questionText: "L’évaluation du risque carieux se base sur : (Combinaison 1-2-5)",
        options: [
          "La présence de lésions actives",
          "Une hygiène orale déficiente",
          "La quantité de salive",
          "Le pH de la salive",
          "L’absence de brossage"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "L’évaluation du risque carieux classe les patients selon les facteurs comme le nombre de lésions actives, l’accumulation de plaque et l’absence de brossage[cite: 1301]."
      },
      {
        questionText: "La reminéralisation de la lésion carieuse : (Combinaison 4-5)",
        options: [
          "Est indiquée uniquement pour les lésions initiales.",
          "Est assurée par l’usage de fluorures topiques.",
          "Est assurée par l’absorption de fluorures systémiques.",
          "S’applique aussi aux dents temporaires.",
          "N’est pas limitée aux surfaces lisses."
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La reminéralisation s’applique aussi bien aux dents temporaires qu’aux dents permanentes et aux surfaces lisses ou occlusales[cite: 1312]. Les fluorures systémiques ont un rôle préventif mais non curatif[cite: 1313]."
      },
      {
        questionText: "La prévention tertiaire consiste :",
        options: [
          "À supprimer les facteurs de risque.",
          "À reminéraliser les lésions initiales.",
          "À restaurer les lésions dentinaires.",
          "À instaurer un suivi de contrôle.",
          "À appliquer le vernis fluoré."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La prévention tertiaire vise à restaurer les cavités dentinaires tout en conservant un maximum de tissu et à instaurer un suivi régulier pour prévenir les récidives[cite: 1320]."
      },
      {
        questionText: "Indications des sealants des puits et fissures :",
        options: [
          "Molaire avec hypominéralisation (MIH).",
          "Enfant à risque carieux élevé.",
          "Sur dents non saines.",
          "Sillons occlusaux anfractueux.",
          "Chez le patient à faible risque carieux."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le scellement est indiqué sur les molaires avec hypominéralisation MIH, chez l’enfant à risque carieux élevé et pour les fissures profondes[cite: 1326]."
      },
      {
        questionText: "Les fluorures systémiques :",
        options: [
          "S’administrent par voie orale.",
          "Sont apportés par l’eau ou le lait.",
          "S’administrent par voie topique.",
          "Sont ingérés."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les fluorures systémiques sont ingérés par voie orale via l’eau fluorée, les comprimés, le sel ou le lait[cite: 1332]."
      },
      {
        questionText: "Le vernis fluoré :",
        options: [
          "S’utilise pour la fluoration systémique.",
          "Est un concentré de fluorures dans une base résineuse.",
          "Son action est optimisée par sa forte adhésion sur les surfaces dentaires.",
          "N’est pas indiqué pour l’émail."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le vernis est un matériau visqueux riche en fluorures qui adhère bien à l’émail et à la dentine et assure une libération prolongée de fluor[cite: 1339]."
      },
      {
        questionText: "La cavité tunnel :",
        options: [
          "S’adresse aux classes III.",
          "Préserve le point de contact.",
          "Préserve les crêtes marginales.",
          "Est indiquée pour les cavités de classe II.",
          "Est contre-indiquée sur les dents temporaires."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La cavité tunnel (stade 1 du site 2) permet une restauration ultraconservative en préservant les crêtes marginales et le point de contact[cite: 1346]."
      },
      {
        questionText: "Les fluorures topiques :",
        options: [
          "Sont administrés par voie orale et ne sont pas ingérés.",
          "Sont apportés par les dentifrices cosmétiques et pharmaceutiques.",
          "Sont apportés uniquement par les bains de bouche.",
          "Sont apportés par l’eau fluorée.",
          "Favorisent la reminéralisation des lésions initiales."
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les fluorures topiques (dentifrices, gels, bains de bouche) sont appliqués localement et non ingérés ; ils favorisent la reminéralisation [cite: 1352-1353]."
      },
      {
        questionText: "L’aéro-abrasion :",
        options: [
          "Utilise un jet de poudre d’alumine.",
          "Ne s’utilise que sur site 2.",
          "Utilise des particules de taille 100 μm.",
          "Utilise des particules d’alumine d’environ 27 μm.",
          "Ne doit pas être utilisée sur site 1."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L’aéro-abrasion emploie un jet d’air et de poudre (alumine 27 μm) à grande vitesse ; elle est adaptée pour les sites 1 et 3 [cite: 1359-1360]."
      },
      {
        questionText: "Le traitement non invasif de la lésion carieuse :",
        options: [
          "Consiste à restaurer la cavité.",
          "Vise à arrêter l’évolution de la lésion.",
          "Inclut l’application de vernis fluoré.",
          "S’applique aux lésions cavitaires.",
          "Est réalisé par pulpotomie."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le traitement non invasif (prévention primaire et secondaire) vise à stopper la progression des lésions initiales et à renforcer la reminéralisation grâce aux fluorures topiques[cite: 1366]."
      },
      {
        questionText: "Le traitement invasif de la lésion carieuse :",
        options: [
          "Est indiqué pour les lésions initiales.",
          "Est indiqué pour les lésions cavitaires.",
          "Utilise la microdentisterie.",
          "Se limite à l’application de fluor.",
          "Ne concerne pas la dentisterie préventive."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le traitement invasif (prévention tertiaire) vise à retirer le tissu infecté en réalisant des préparations minimales (microdentisterie) et à restaurer la dent[cite: 1373]."
      },
      {
        questionText: "Concernant la Carie de la Petite Enfance (CPE) :",
        options: [
          "Le traitement invasif consiste en un ciment verre-ionomère (CVI).",
          "Le traitement invasif consiste en une extraction.",
          "La couronne préformée (CPP) a des indications.",
          "La prise en charge commence par l’arrêt des habitudes nocives.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "le CVI est indiqué pour les traitements conservateurs des CPE, que les couronnes préformées ont des indications spécifiques et que l’arrêt des habitudes nocives est la première étape[cite: 1380]."
      },
      {
        questionText: "Concernant le ciment verre-ionomère (CVI) :",
        options: [
          "Son application nécessite l’utilisation d’un conditionneur.",
          "La cavité est désinfectée à l’hypochlorite de sodium 1,5 %.",
          "Il est indiqué chez l’enfant à haut risque carieux.",
          "Il peut être une restauration définitive.",
          "Toutes les propositions sont correctes."
        ],
        correctOptionIndexes: [4],
        explanation: "Le site n’offre pas de commentaire spécifique ; il précise simplement que toutes les affirmations sont correctes[cite: 1386]."
      },
      {
        questionText: "Concernant la couronne préformée pédiatrique (CPP) :",
        options: [
          "Sa pose nécessite une préparation minimale.",
          "Elle peut être réalisée après une pulpotomie ou un traitement endodontique.",
          "Elle ne doit pas être scellée avec un eugénate.",
          "Elle doit être scellée en bouche avec un CVI contenant de la chlorhexidine.",
          "Toutes les propositions sont correctes."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "la préparation est minimale, qu’elle peut suivre une pulpotomie ou un traitement endodontique et qu’on évite les ciments à base d’eugénol pour la sceller[cite: 1393]."
      }
    ]
  },
  {
    title: "Lésions Iatrogènes et Perforations",
    subject: "oce",
    questions: [
      {
        questionText: "Parmi les lésions suivantes, laquelle n’est pas d’origine iatrogène ?",
        options: [
          "Sensibilité postopératoire",
          "Nécrose pulpaire",
          "Érosion suite à un reflux gastro-œsophagien (RGO)",
          "Exposition pulpaire",
          "Blessures gingivales"
        ],
        correctOptionIndexes: [2],
        explanation: "L’érosion induite par un reflux gastro-œsophagien provient d’un phénomène physiopathologique et non d’un acte médical, contrairement aux autres lésions qui sont provoquées par des traitements (iatrogénie)[cite: 1962]."
      },
      {
        questionText: "La sensibilité postopératoire :",
        options: [
          "Est favorisée par une photopolymérisation insuffisante du composite",
          "Est liée à une restauration de faible étendue",
          "Est due à la contraction du composite",
          "Apparaît en l’absence d’un fond protecteur sous un amalgame",
          "Touche plus volontiers les dents postérieures"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "La sensibilité postopératoire est accentuée lorsque la restauration est volumineuse (B est fausse)[cite: 1971]. Une photopolymérisation incomplète, la contraction du composite, l'absence de base protectrice et l'atteinte des dents postérieures sont des facteurs de risque [cite: 1972-1975]."
      },
      {
        questionText: "La prévention des expositions pulpaires iatrogènes consiste à :",
        options: [
          "Procéder à un curetage dentinaire allant du fond de la cavité vers la périphérie",
          "Évaluer radiographiquement l’épaisseur de dentine résiduelle (EDR)",
          "Contrôler visuellement et tactilement les zones dentinaires altérées ou saines lors du fraisage",
          "Avoir une bonne connaissance des épaisseurs des tissus dentaires coronaires",
          "Réaliser un curetage dentinaire à vitesse élevée"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Il faut cureter du bord vers le fond (A est faux) et à vitesse réduite (E est faux)[cite: 1983]. L'évaluation de l'EDR, le contrôle visuel/tactile et la connaissance de l'anatomie sont essentiels [cite: 1983-1984]."
      },
      {
        questionText: "Les facteurs limitant les conséquences iatrogènes des préparations, peuvent être :",
        options: [
          "Formation de la boue dentinaire (smear layer)",
          "Formation de dentine déminéralisée",
          "Épaisseur de dentine résiduelle (EDR) importante",
          "Épaisseur de dentine résiduelle très faible",
          "Formation de dentine sclérotique"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "La boue dentinaire (smear layer) joue un rôle protecteur[cite: 1996]. Une EDR ≥ 2 mm protège la pulpe[cite: 1997]. La dentine sclérotique, plus dense, limite aussi les effets iatrogènes[cite: 1998]."
      },
      {
        questionText: "Les pulpites iatrogènes :",
        options: [
          "Sont le plus souvent de caractère infectieux",
          "Peuvent survenir à tout moment d’une intervention à visée diagnostique",
          "Peuvent avoir des conséquences irréversibles sur l’organe dentaire",
          "Résultent d’une pratique agressive ou du choix de matériaux inappropriés",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Ces inflammations résultent d’une technique trop agressive ou de matériaux inadéquats (origine physique ou chimique)[cite: 2007, 2009]. Elles ne sont pas d’origine infectieuse (A est faux) et surviennent lors d'actes thérapeutiques (B est faux)[cite: 2007, 2010]."
      },
      {
        questionText: "L’élévation de température au cours d’un fraisage est liée :",
        options: [
          "À la capacité de coupe de la fraise",
          "Au sens de rotation de la fraise",
          "À la vitesse de rotation",
          "À la forme de la fraise",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Une fraise mal affûtée (capacité de coupe), tournée dans le mauvais sens ou utilisée à une vitesse excessive augmente la friction et donc la température[cite: 2019]."
      },
      {
        questionText: "Les perforations du plancher :",
        options: [
          "Surviennent au cours de la recherche des entrées canalaires",
          "Mettent en communication l’endodontie et le parodonte",
          "Ce sont des perforations sous forme de stripping",
          "Peuvent être apicales ou coronaires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une perforation du plancher peut se produire lorsqu’on cherche l’entrée des canaux et crée une communication accidentelle entre la cavité pulpaire et le ligament parodontal[cite: 2030]."
      },
      {
        questionText: "Le traitement des perforations se fait : (Combinaison 1, 2)",
        options: [
          "Avec le MTA",
          "Avec la biodentine",
          "À l’oxyde de zinc-eugénol",
          "À la gutta-percha",
          "À l’amalgame d’argent"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Aujourd’hui, deux matériaux montrent une excellente biocompatibilité et une bonne étanchéité : Le MTA (Mineral Trioxide Aggregate) et la Biodentine [cite: 2045-2047]. Les autres matériaux ne sont plus recommandés[cite: 2048]."
      }
    ]
  },
  {
    title: "Adhésion et Techniques Sandwich",
    subject: "oce",
    questions: [
      {
        questionText: "L’effet du mordançage au niveau dentinaire est :",
        options: [
          "Préserver la boue dentinaire.",
          "Déminéraliser la dentine péritubulaire et élargir les canalicules.",
          "Déminéraliser la dentine intertubulaire et exposer les fibres de collagène.",
          "Toutes les réponses sont justes.",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le mordançage élimine la smear layer, déminéralise la dentine (péri et intertubulaire) et expose le réseau de collagène[cite: 172]."
      },
      {
        questionText: "L’application du primer au niveau de la dentine aura pour effet de :",
        options: [
          "Provoquer le collapsus des fibres de collagène",
          "Empêcher le collapsus des fibres de collagène",
          "Faciliter la pénétration de la résine",
          "Rendre la surface hydrophobe"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le primer (hydrophile) augmente la mouillabilité, maintient l’intégrité du collagène (empêche le collapsus) et aide la résine (hydrophobe) à s’infiltrer[cite: 176]."
      },
      {
        questionText: "Caractéristiques de la boue dentinaire (smear layer) :",
        options: [
          "Est une source d’infection sous les restaurations",
          "Est une barrière protectrice",
          "Augmente l’énergie de surface",
          "Possède une forte adhésion à la dentine"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La smear layer est faible en adhésion, peut contenir des bactéries (source d'infection) mais agit aussi comme une barrière[cite: 179, 178]."
      },
      {
        questionText: "Adhésion des ciments verre ionomère (CVI) :",
        options: [
          "Nécessite un mordançage à l'acide phosphorique",
          "Est une adhésion chimique",
          "Implique une couche hybride",
          "Ne nécessite pas d'agent de liaison",
          "Se fait par échanges ioniques"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Les CVI adhèrent chimiquement aux tissus dentaires via des échanges ioniques ; on utilise un traitement à l’acide polyacrylique (conditionneur) plutôt qu’un mordançage phosphorique [cite: 182-183]."
      },
      {
        questionText: "Systèmes adhésifs :",
        options: [
          "Les SAM (auto-mordançants) réduisent la sensibilité postopératoire",
          "Les M&R (mordançage-rinçage) ont une moins bonne adhésion à l'émail",
          "Le système M&R est privilégié en antérieur",
          "Les SAM stabilisent la boue dentinaire",
          "Les M&R l’éliminent"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Les systèmes mordançage-rinçage (M&R) offrent une meilleure adhésion à l’émail que les auto-mordançants (SAM)[cite: 186]. Les SAM dissolvent/stabilisent la smear layer, les M&R l'éliminent[cite: 185]."
      },
      {
        questionText: "Composition d’un système adhésif :",
        options: [
          "Uniquement une résine adhésive",
          "Présence d’un acide (mordançage)",
          "Résine adhésive pour l’adhésion mécanique à l’émail",
          "Présence d’un primer",
          "Pas de solvant"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Un système adhésif combine un mordançage (acide), un primer (solvant + monomères hydrophiles) et une résine qui forme des tags résineux (adhésion mécanique)[cite: 189]."
      },
      {
        questionText: "La couche hybride :",
        options: [
          "Est formée grâce au primer",
          "Est un réseau de collagène imprégné de primer et de résine",
          "Contient des tags résineux",
          "Est altérée par un assèchement excessif",
          "Est spécifique aux CVI"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La couche hybride provient de l’entrelacement collagène–adhésif (primer + résine) ; un séchage excessif provoque son affaissement (collapsus) et réduit la pénétration de l’adhésif[cite: 192]."
      },
      {
        questionText: "Restauration adhésive :",
        options: [
          "L’adhésion du composite est chimique",
          "Les restaurations indirectes sont faites au fauteuil",
          "Les restaurations directes concernent micro-cavités et cavités moyennes",
          "La technique sandwich s’applique aux cavités proximales postérieures",
          "La technique sandwich est une restauration indirecte"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Les restaurations indirectes requièrent une empreinte et une étape de laboratoire[cite: 195]. L'adhésion du composite est micromécanique. Le sandwich est une technique directe pour cavités profondes[cite: 194]."
      },
      {
        questionText: "Technique sandwich ouverte :",
        options: [
          "Placer un CVI MAR sur la paroi cervicale",
          "Le CVI MAR remplace toute la dentine",
          "Positionner le CVI MAR en dessous du point de contact",
          "Le composite ne recouvre pas le CVI"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Dans le sandwich ouvert, le CVI MAR est posé sur 2 mm d’épaisseur en demeurant sous le point de contact ; le composite restaure la crête marginale [cite: 198-199]."
      },
      {
        questionText: "Matériaux de la technique sandwich :",
        options: [
          "Amalgame et composite",
          "Deux types de composites",
          "Un verre ionomère et un composite",
          "Un CVI et un amalgame"
        ],
        correctOptionIndexes: [2],
        explanation: "La technique sandwich associe un ciment verre ionomère (en base) à un composite (en surface) [cite: 201-202]."
            }
    ]
  },

      {
    title: "Urgences Endodontiques",
    subject: "oce",
    questions: [
      {
        questionText: "Objectifs du traitement d’urgence :",
        options: [
          "Soulager la douleur",
          "Stopper le processus pathologique",
          "Prévenir les complications",
          "Rétablir au plus vite la fonction"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les urgences endodontiques visent à éliminer la douleur et à empêcher l’aggravation (pulpite, parodontite) tout en rétablissant la fonction masticatoire [cite: 1543-1548]."
      },
      {
        questionText: "Traitement d’urgence de la pulpite irréversible :",
        options: [
          "Analgésiques seuls",
          "Antibiothérapie systématique",
          "Sédatif provisoire",
          "Traitement conservateur",
          "Aucune des réponses"
        ],
        correctOptionIndexes: [4],
        explanation: "L’urgence consiste à réaliser une pulpotomie ou pulpectomie sous anesthésie ; les sédatifs ou antibiotiques seuls ne suffisent pas [cite: 1551-1557]."
      },
      {
        questionText: "Parodontite apicale aiguë :",
        options: [
          "Douleur continue, pulsatile",
          "Douleur à la percussion uniquement",
          "Traitement par analgésiques",
          "Drainage et désinfection canalaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La parodontite apicale se manifeste par une douleur intense ; le traitement d’urgence comporte l’ouverture de la chambre, la désinfection et la décompression [cite: 1560-1566]."
      },
      {
        questionText: "Catégorie III de Baume (pulpite irréversible) :",
        options: [
          "Pulpectomie bio",
          "Pulpotomie partielle",
          "Pulpectomie partielle",
          "Dévitalisation sans obturation"
        ],
        correctOptionIndexes: [0],
        explanation: "Les dents de catégorie III (pulpite irréversible) requièrent la dévitalisation et l’obturation radiculaire immédiate [cite: 1569-1574]."
      },
      {
        questionText: "Complications de la nécrose pulpaire :",
        options: [
          "Pulpite hyperhémique",
          "Parodontite apicale aiguë",
          "Abcès alvéolaire",
          "Cellulite diffuse",
          "Abcès phoenix"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Une pulpe nécrosée peut évoluer vers une parodontite apicale, un abcès aigu ou une poussée « phoenix » [cite: 1577-1583]."
      },
      {
        questionText: "Urgence sur dent monoradiculée avec pulpite aiguë :",
        options: [
          "Sédatif",
          "Pulpotomie",
          "Pulpectomie totale",
          "Extraction"
        ],
        correctOptionIndexes: [2],
        explanation: "Sur une dent mono-radiculée, l’urgence est la pulpectomie complète pour éliminer le tissu pulpaire enflammé [cite: 1586-1591]."
      },
      {
        questionText: "Dent pluriradiculée avec pulpite aiguë et parodontite :",
        options: [
          "Sédatif",
          "Antibiothérapie",
          "Pulpectomie partielle",
          "Pulpectomie + mise en forme sous irrigation"
        ],
        correctOptionIndexes: [3],
        explanation: "Il convient d’éliminer la pulpe camérale et d’instrumenter les canaux jusqu’à au moins la lime 25 avec irrigation, tout en plaçant la dent en infra-occlusion [cite: 1594-1599]."
      },
      {
        questionText: "Voies d’extériorisation du pus :",
        options: [
          "Transcanalaire",
          "Transligamentaire",
          "Osseuse",
          "Par voie sinusienne",
          "Transcutanée"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "Le drainage peut se faire à travers le canal, le ligament, l’os ou, plus rarement, la peau [cite: 1602-1608]."
      },
      {
        questionText: "Traitement d’urgence de la parodontite apicale aiguë :",
        options: [
          "Drainage de la collection",
          "Mise en infra-occlusion",
          "Antibiothérapie systématique",
          "Extraction immédiate"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "On draine le pus et l’on met la dent en infra-occlusion ; l’antibiotique est réservé aux signes généraux [cite: 1611-1616]."
      },
      {
        questionText: "Prise en charge de la pulpite irréversible (si pulpotomie insuffisante) :",
        options: [
          "Déboucher un canal",
          "Antibiothérapie seule",
          "Pulpectomie partielle",
          "Pulpectomie de l’unique canal saignant"
        ],
        correctOptionIndexes: [3],
        explanation: "Lorsque la pulpotomie est insuffisante (saignement persistant), on réalise une pulpectomie [cite: 1619-1624]."
      },
      {
        questionText: "Début de parodontite apicale aiguë (pulpodesmodontite) :",
        options: [
          "Pulpectomie",
          "Analgésiques",
          "Infra-occlusion",
          "Même traitement que la pulpodesmodontite"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Le traitement est le même que la pulpodesmodontite, incluant pulpectomie et mise en infra-occlusion [cite: 1627-1631]."
      },
      {
        questionText: "Syndrome du septum :",
        options: [
          "Mauvais scellement coronaire",
          "Inflammation papillaire",
          "Contact occlusal prématuré",
          "Absence de point de contact interdentaire"
        ],
        correctOptionIndexes: [3],
        explanation: "L’impaction alimentaire due à l’absence de contact interdentaire entraîne une inflammation de la papille (syndrome du septum) [cite: 1634-1639]."
      },
      {
        questionText: "Pluriradiculée avec pulpite aiguë et parodontite (Q13) :",
        options: [
          "Sédatif",
          "Pulpectomie",
          "Antibiothérapie",
          "Extraction"
        ],
        correctOptionIndexes: [1],
        explanation: "Il s'agit d'une pulpite irréversible, l'urgence est la pulpectomie [cite: 1642-1646]."
      },
      {
        questionText: "Fracture d’une dent immature âgée de quelques mois :",
        options: [
          "Dévitalisation",
          "Couronne provisoire",
          "Sédatif",
          "Obturateur radiculaire",
          "Apexification"
        ],
        correctOptionIndexes: [4],
        explanation: "Une fracture sur dent immature (dent non-vitale) nécessite un traitement d’apexification pour permettre la formation de la barrière apicale [cite: 1648-1655]."
      },
      {
        questionText: "Fracture amélo-dentinaire avec large exposition pulpaire sur dent immature :",
        options: [
          "Extraction",
          "Pulpectomie",
          "Avulsion",
          "Application de Ca(OH)₂",
          "Pulpotomie partielle (Cvek)"
        ],
        correctOptionIndexes: [4],
        explanation: "La pulpotomie partielle (technique de Cvek) est indiquée pour conserver la vitalité radiculaire et permettre l'apexogénèse [cite: 1658-1664]."
      },
      {
        questionText: "Traitement d’un abcès apical aigu :",
        options: [
          "Analgésiques",
          "Antibiotiques",
          "Décompression",
          "Drainage et désinfection"
        ],
        correctOptionIndexes: [3],
        explanation: "L’urgence consiste à ouvrir la dent, drainer le pus et désinfecter ; les antibiotiques sont réservés aux complications [cite: 1667-1672]."
      },
      {
        questionText: "Étiologie iatrogène du syndrome du septum :",
        options: [
          "Épaisseur de la digue",
          "Excès de matériau d’obturation",
          "Mauvais point de contact suite à une restauration surplombante"
        ],
        correctOptionIndexes: [2],
        explanation: "Un mauvais point de contact ou une restauration surplombante crée une zone de tassement alimentaire [cite: 1675-1678]."
      },
      {
        questionText: "Syndrome du septum (Q18) :",
        options: [
          "Peut survenir après une obturation surplombante",
          "Est dû à un traumatisme occlusal",
          "Peut se manifester dans les cavités proximales",
          "Provoque une gingivite papillaire douloureuse",
          "Se voit dans les restaurations coronaires"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "L’impaction alimentaire dans une cavité proximale non étanche ou à cause d'une restauration coronaire défaillante provoque une inflammation de la papille gingivale [cite: 1681-1687]."
      },
      {
        questionText: "Mesures d’urgence possibles en endodontie :",
        options: [
          "Drainage",
          "Réimplantation",
          "Obturations temporaires",
          "Médication sédative",
          "Pulpotomie"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Selon la situation : drainage (abcès), réimplantation (avulsion), pulpotomie/pulpectomie (pulpite), sédatifs après traitement [cite: 1690-1696]."
      },
      {
        questionText: "Traitement d’une PAA aiguë (Parodontite Apicale Aiguë) :",
        options: [
          "Drainage de la collection",
          "Analgésiques seuls",
          "Laisser la dent ouverte",
          "Pulpectomie complète",
          "Mise en infra-occlusion"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "On ouvre la chambre, on laisse la dent ouverte 24h pour drainage et on réduit l’occlusion [cite: 1699-1705]."
      },
      {
        questionText: "Urgences endodontiques les plus fréquentes :",
        options: [
          "Pulpite aiguë irréversible",
          "Abcès apical aigu",
          "Pulpite hyperhémique",
          "Gingivite ulcéro-nécrotique",
          "Cellulite d’origine endodontique"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "Les urgences les plus communes sont les pulpites irréversibles, les abcès apicaux et les cellulites qui en découlent [cite: 1708-1713]."
      },
      {
        questionText: "Traitement d’une pulpite irréversible avec desmodontite sur dent pluriradiculée :",
        options: [
          "Sédatif",
          "Pulpectomie totale",
          "Pulpotomie partielle",
          "Drainage"
        ],
        correctOptionIndexes: [1],
        explanation: "La pulpectomie totale est le traitement indiqué pour soulager une pulpite irréversible [cite: 1716-1720]."
      },
      {
        questionText: "Motifs de consultation en urgence (Combinaison 1, 3, 5) :",
        options: [
          "Processus inflammatoire (pulpite, parodontite)",
          "Séquelles de traumatisme",
          "Syndrome infectieux (abcès)",
          "Échec de traitement prothétique",
          "Traumatisme (fracture, luxation)"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Les patients consultent en urgence pour des douleurs inflammatoires, des infections et des traumatismes récents [cite: 1723-1729]."
      },
      {
        questionText: "Abcès apical aigu (Combinaison 1, 4) :",
        options: [
          "Drainage transcanalaire",
          "Drainage chirurgical",
          "Antibiothérapie systématique",
          "Laisser la dent ouverte",
          "Mise en place d’un pansement sédatif"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L’abcès apical aigu nécessite un drainage transcanalaire avec ouverture de la dent pour évacuer le pus. Le but est de réduire la douleur [cite: 1732-1740]."
      },
      {
        questionText: "Coiffage pulpaire indirect (indication post-traumatique) :",
        options: [
          "Pulpite réversible",
          "Exposition dentinaire post-traumatique",
          "Pulpite irréversible",
          "Exposition pulpaire post-traumatique",
          "Parodontite apicale aiguë"
        ],
        correctOptionIndexes: [1],
        explanation: "En cas d’exposition dentinaire sans ouverture pulpaire suite à un traumatisme, on réalise un coiffage indirect avec Ca(OH)₂ ou Biodentine [cite: 1743-1749]."
      },
      {
        questionText: "Recrudescence d’une parodontite apicale chronique (Abcès Phoenix) : (Combinaison 2, 5)",
        options: [
          "Ré-instrumentation avec irrigation",
          "Dépassement contrôlé au-delà du foramen",
          "Médication intracanalaire (Ca(OH)₂)",
          "Laisser la dent ouverte",
          "Mise en sous-occlusion"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "En première intention, on effectue un dépassement contrôlé pour diminuer la pression et on met la dent en sous-occlusion [cite: 1752-1760]."
      },
      {
        questionText: "Pulpite irréversible : prise en charge (Combinaison 3, 5) :",
        options: [
          "Pulpotomie sur monoradiculée",
          "Pulpectomie sur pluriradiculée",
          "Éliminer les irritants bactériens",
          "Médication sédative systématique",
          "Diminuer la surpression"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "L’urgence consiste à éliminer les irritants, réduire la surpression et réaliser une pulpectomie (sur monoradiculée) ou pulpotomie (sur pluriradiculée) [cite: 1763-1771]."
      },
      {
        questionText: "Douleur d’origine endodontique :",
        options: [
          "À l’origine de 95 % des consultations d’urgence",
          "Due à la surpression",
          "Uniquement pulpaire",
          "Pulpaire et/ou parodontale",
          "Pulpaire et parodontale"
        ],
        correctOptionIndexes: [1],
        explanation: "Les douleurs endodontiques (pulpite ou périapicale) représentent 70–90 % des urgences. La surpression intracanalaire est l’élément déclencheur majeur [cite: 1783-1789]."
      }
    ]
  },
  {
    title: "Traumatologie Dentaire",
    subject: "oce",
    questions: [
      {
        questionText: "Quel est le traitement de choix pour une fracture coronaire compliquée récente chez un enfant ?",
        options: [
          "Pulpectomie immédiate et coiffage pulpaire",
          "Coiffage pulpaire direct ou pulpotomie partielle",
          "Extraction systématique de la dent",
          "Contention rigide pendant 6 semaines",
          "Antibiothérapie systématique et suivi radiographique uniquement"
        ],
        correctOptionIndexes: [1],
        explanation: "Chez un enfant avec dent immature, la conservation de la pulpe est indispensable (apexogénèse). Le traitement est un coiffage pulpaire direct ou une pulpotomie partielle [cite: 2568-2573]."
      },
      {
        questionText: "Patient de 9 ans, fracture radiculaire du 1/3 moyen sur incisive maxillaire immature. Meilleure conduite à tenir ?",
        options: [
          "Extraction immédiate et mise en place d’un mainteneur d’espace",
          "Traitement endodontique complet suivi d’une contention prolongée",
          "Repositionnement du fragment coronaire et contention souple pendant 4 semaines",
          "Coiffage pulpaire direct et surveillance de la fermeture apicale",
          "Application de MTA pour favoriser la cicatrisation osseuse"
        ],
        correctOptionIndexes: [2],
        explanation: "En cas de fracture radiculaire du tiers moyen, on repositionne le fragment coronaire déplacé et on stabilise par une contention souple environ quatre semaines [cite: 2577-2582]."
      },
      {
        questionText: "Quel facteur influence le pronostic de réimplantation d’une dent expulsée ?",
        options: [
          "L’âge du patient uniquement",
          "Le temps extra-alvéolaire, le milieu de conservation et le stade d’édification radiculaire",
          "Le type de fracture alvéolaire présente uniquement",
          "La technique de réimplantation, indépendamment du temps hors de l’alvéole",
          "Le type de contention utilisée après la réimplantation"
        ],
        correctOptionIndexes: [1],
        explanation: "Le pronostic dépend de la survie des cellules du ligament parodontal, liée au temps extra-oral (idéalement < 60 min), au milieu de stockage (humide) et au stade d’édification (immature > mature) [cite: 2586-2592]."
      },
      {
        questionText: "Lors d’une fracture coronaire pénétrante sur dent permanente immature vivante :",
        options: [
          "Le rétablissement de l’esthétique n’est pas recherché",
          "Le choix thérapeutique dépend de la taille d’exposition pulpaire",
          "L’objectif principal est la poursuite de l’édification radiculaire",
          "Le traitement pourra être une apexogénèse",
          "Le traitement pourra être une apexification"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "L’objectif est de préserver la vitalité pulpaire (apexogénèse) pour permettre la croissance de la racine. Le choix (coiffage, pulpotomie) dépend de la taille de l'exposition [cite: 2595-2600]."
      },
      {
        questionText: "Dans le cas de fracture coronaire amélo-dentinaire non pénétrante :",
        options: [
          "La dent peut être restaurée par collage du fragment fracturé",
          "La dent peut être restaurée à l’aide d’un composite collé",
          "Un coiffage pulpaire direct s’impose",
          "La réalisation d’un bandeau de verre ionomère est le traitement de choix",
          "Un coiffage de la plaie dentinaire est de rigueur"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "On protège la plaie dentinaire (coiffage dentinaire). Si le fragment est retrouvé, on le recolle ; sinon, une restauration composite est réalisée [cite: 2602-2608]."
      },
      {
        questionText: "Prise en charge des traumatismes des dents permanentes immatures avec exposition pulpaire :",
        options: [
          "L’apexogénèse est indiquée en première intention",
          "Le coiffage pulpaire direct est réalisé si l’exposition est minime depuis moins de 7 jours",
          "La pulpotomie partielle est indiquée d’emblée",
          "La technique d’apexification est conditionnée par la taille de l’exposition pulpaire",
          "La pulpotomie cervicale est indiquée en absence d’hémostase lors de la pulpotomie partielle"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Le coiffage direct est indiqué si exposition < 1 mm et < 24h. La pulpotomie cervicale est indiquée si l’hémostase échoue lors de la pulpotomie partielle [cite: 2611-2616]."
      },
      {
        questionText: "Le protocole de la réimplantation d’une dent expulsée consiste à réaliser :",
        options: [
          "Un rinçage délicat de l’alvéole avec du sérum physiologique",
          "Un curetage de l’alvéole pour éliminer le caillot sanguin",
          "Le traitement canalaire est extra-oral si le temps extra-alvéolaire à sec dépasse les 2 heures",
          "Une contention pendant 1 à 2 semaines (sans fracture alvéolaire associée)",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "On rince doucement l’alvéole sans cureter. Le TTT canalaire extra-oral est indiqué si > 2h à sec. Contention souple de 1-2 semaines [cite: 2619-2625]."
      },
      {
        questionText: "La prise en charge des intrusions des dents permanentes matures :",
        options: [
          "La ré-éruption spontanée est possible si le déplacement est inférieur à 7 mm",
          "L’extrusion orthodontique doit être entreprise en présence de déplacement de 3 à 7 mm",
          "Une contention est indiquée pendant 4 semaines",
          "L’extrusion chirurgicale sera réalisée d’emblée lors d’un déplacement supérieur à 7 mm",
          "Le repositionnement traumatique de la dent par traction digitale peut être réalisé"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Ré-éruption spontanée : < 3 mm (mature) ou < 7 mm (immature). Extrusion ortho : 3-7 mm. Extrusion chirurgicale : > 7 mm [cite: 2628-2634]."
      },
      {
        questionText: "La contention en cas de traumatisme :",
        options: [
          "Maintient les dents traumatisées dans leur position physiologique",
          "Est réalisée du côté palatin pour des raisons esthétiques",
          "Nécessite un fil collé d'abord sur les dents traumatisées puis sur les distales",
          "Est maintenue 1 à 2 semaines après réimplantation (dent immature, pas de fracture alvéolaire)",
          "Nécessite des étapes au laboratoire"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Elle maintient la position, posée en palatin. Le fil est collé d'abord sur les dents saines (distales) PUIS sur les dents traumatisées (C est faux). Durée de 1-2 semaines pour réimplantation simple [cite: 2637-2643]."
      },
      {
        questionText: "Traitement d’urgence d’une fracture coronaire avec exposition pulpaire d’une dent mature :",
        options: [
          "Une pulpotomie",
          "Coiffage pulpaire direct",
          "Coiffage pulpaire indirect",
          "Une pulpectomie dans un traitement endodontique conventionnel",
          "Une contention"
        ],
        correctOptionIndexes: [3],
        explanation: "Pour une dent mature avec exposition pulpaire, un traitement endodontique complet (pulpectomie) est indiqué [cite: 2646-2649]."
      },
      {
        questionText: "Les signes de guérison pulpaire après traitement d’une fracture coronaire pénétrante (apexogénèse) sont :",
        options: [
          "Absence de symptôme clinique",
          "Absence de pathologies intra ou périradiculaires",
          "Absence de réponse aux tests de sensibilité pulpaire",
          "Présence d’un pont dentinaire visible à la radiographie",
          "Présence de réponse aux tests de sensibilité pulpaire"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "Une évolution favorable est marquée par l’absence de symptômes, la poursuite du développement radiculaire, un pont dentinaire visible, et le maintien de la réponse aux tests de vitalité [cite: 2652-2656]."
      },
      {
        questionText: "Lors d’une fracture radiculaire au niveau apical :",
        options: [
          "La dent est très mobile",
          "La dent n’est pas du tout mobile",
          "Le traitement consiste en l’extraction de la dent",
          "Le traitement consiste à faire une résection apicale",
          "Le traitement consiste en l’abstention et surveillance"
        ],
        correctOptionIndexes: [4],
        explanation: "La fracture apicale est la plus favorable ; il n’y a généralement ni mobilité ni déplacement. Le traitement consiste en l'abstention et la surveillance [cite: 2659-2665]."
      },
      {
        questionText: "Lors d’une pulpotomie sur dent traumatisée : (Combinaison 3, 5)",
        options: [
          "L’amputation est réalisée à l’aide d’une fraise diamantée cylindrique sous irrigation",
          "L’amputation est réalisée sur une hauteur de 1 mm",
          "Apparition d’une couche d’odontoblastes après la 4e semaine",
          "Les tests de vitalité pulpaire sont négatifs lors des contrôles",
          "Le Biodentine est également utilisé comme matériau de reconstitution temporaire"
        ],
        correctOptionIndexes: [2, 4],
        explanation: "L’amputation se fait à la fraise boule (1 est faux). L'amputation partielle est de 2 mm (2 est faux). Un pont dentinaire (odontoblastes) apparaît vers la 4e semaine. Le Biodentine sert de matériau de restauration [cite: 2668-2673]."
      },
      {
        questionText: "En traumatologie, traitement d’une... (Combinaison 2, 3)",
        options: [
          "Extrusion : repositionnement par traction orthodontique",
          "Luxation latérale : repositionnement digital",
          "Intrusion sur dent permanente immature : abstention (ré-éruption spontanée)",
          "Subluxation : réaliser toujours une contention"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Extrusion : repositionnement par pression digitale (1 est faux). Luxation latérale : repositionnement manuel. Intrusion (immature) : abstention. Subluxation : contention si besoin (pas toujours) [cite: 2676-2681]."
      },
      {
        questionText: "La réimplantation est contre-indiquée en cas de :",
        options: [
          "Dent temporaire expulsée quel que soit le temps extra-alvéolaire",
          "Dent temporaire expulsée au stade 2",
          "Dent temporaire expulsée au stade 3",
          "Dent permanente mature expulsée depuis plus de 24 heures",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Les dents temporaires ne doivent jamais être réimplantées (risque pour le germe permanent). Une dent mature hors bouche > 24h a un pronostic nul [cite: 2684-2688]."
      },
      {
        questionText: "La pulpotomie partielle sur dent traumatisée : (Combinaison 1, 4, 5)",
        options: [
          "Consiste à amputer la pulpe camérale sur une hauteur de 2 mm",
          "Est indiquée sur dent permanente mature",
          "Est indiquée si le temps entre consultation et traumatisme est > 3 jours",
          "Est une thérapeutique intermédiaire",
          "Induit la formation d’un pont dentinaire"
        ],
        correctOptionIndexes: [0, 3, 4],
        explanation: "Pulpotomie partielle (Cvek) : retrait de 2 mm de pulpe. Indiquée sur dents immatures (2 est faux), dans un délai < 72h (3 est faux). C'est une solution intermédiaire qui induit un pont dentinaire [cite: 2691-2696]."
      },
      {
        questionText: "Le traitement d’une dent à la suite d’une luxation latérale consiste en :",
        options: [
          "Un repositionnement digital de la dent dans sa position alvéolaire initiale",
          "Une réimplantation",
          "Il se fera sous anesthésie",
          "Sera obligatoirement suivi d’une contention",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La luxation latérale se traite par repositionnement manuel (digital) sous anesthésie et doit être suivie d’une contention souple [cite: 2699-2703]."
      },
      {
        questionText: "Traitement dent permanente immature, exposition pulpaire minimale, sans symptomatologie :",
        options: [
          "Une apexification à l’hydroxyde de calcium",
          "Un coiffage pulpaire indirect",
          "Une pulpotomie cervicale",
          "Une pulpotomie partielle",
          "Un coiffage pulpaire direct"
        ],
        correctOptionIndexes: [4],
        explanation: "Un coiffage pulpaire direct est indiqué lorsque l’exposition est très minime (< 1 mm) et que la consultation a lieu moins de 24 h après le traumatisme [cite: 2706-2709]."
      },
      {
        questionText: "En traumatologie, la pulpotomie cervicale est indiquée si :",
        options: [
          "La dent est mature",
          "L’exposition pulpaire est minime",
          "Le patient consulte immédiatement après le traumatisme",
          "La dent est immature",
          "L’exposition pulpaire est importante"
        ],
        correctOptionIndexes: [3, 4],
        explanation: "La pulpotomie cervicale est indiquée pour les dents immatures lorsque l’exposition est importante ou le délai > 72h, ou en cas d’échec d’hémostase lors d'une pulpotomie partielle [cite: 2711-2715]."
      },
      {
        questionText: "Après réimplantation, le TTT endodontique au Ca(OH)₂ est fait obligatoirement :",
        options: [
          "Au bout de 7 jours si la dent est immature",
          "Avant la revascularisation",
          "Au bout de 7 jours si la dent est mature",
          "En extra alvéolaire",
          "Après dépose de la contention"
        ],
        correctOptionIndexes: [2],
        explanation: "Sur une dent mature, la nécrose est inévitable. Le TTT endodontique doit commencer rapidement (environ 1 semaine après réimplantation) [cite: 2718-2722]."
      },
      {
        questionText: "À la suite d’une expulsion dentaire, la revascularisation pulpaire :",
        options: [
          "Est possible si la dent est mature",
          "Elle est possible si l’ouverture apicale est supérieure à 1 mm",
          "Elle débute quinze jours après le traumatisme",
          "Elle débute 4 jours après le traumatisme",
          "Elle intéresse le tissu pulpaire et le tissu parodontal"
        ],
        correctOptionIndexes: [1, 3, 4],
        explanation: "Chez les dents immatures (ouverture apicale > 1 mm), une revascularisation pulpaire et parodontale est espérée. Elle débute environ 4 jours après le traumatisme [cite: 2725-2731]."
      }
    ]
  },
  {
    title: "Lésions Apicales (Parodontites)",
    subject: "oce",
    questions: [
      {
        questionText: "La symptomatologie d’une parodontite apicale chronique :",
        options: [
          "Douleurs à la mastication",
          "Gonflement douloureux",
          "Tests de sensibilité négatifs",
          "Saignement au sondage"
        ],
        correctOptionIndexes: [2],
        explanation: "La parodontite apicale chronique est souvent asymptomatique et les tests de sensibilité pulpaire sont négatifs [cite: 1014-1019]."
      },
      {
        questionText: "Étiologies des parodontites apicales :",
        options: [
          "Carie pénétrante non traitée",
          "Traumatisme dentaire",
          "Instrumentation iatrogène contaminée",
          "Pulpite irréversible et gangrène",
          "Anachorèse"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Toutes ces situations peuvent entraîner une nécrose pulpaire puis une parodontite apicale [cite: 1021-1027]."
      },
      {
        questionText: "Le traitement des parodontites apicales :",
        options: [
          "Purement symptomatique",
          "Étiologique",
          "Endodontique de première intention",
          "Chirurgical d’emblée"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’objectif est de supprimer l’infection (étiologique) en réalisant un traitement endodontique. La chirurgie est une seconde intention [cite: 1029-1034]."
      },
      {
        questionText: "L’abcès Phoenix :",
        options: [
          "Exacerbation d’une lésion chronique préexistante",
          "Parodontite apicale aiguë d’emblée",
          "Affection strictement localisée",
          "Ne montre pas d’image radioclaire",
          "Peut fistuliser et donner une parodontite chronique fistulisée"
        ],
        correctOptionIndexes: [0, 4],
        explanation: "Le “Phoenix” est la poussée aiguë (exacerbation) d’un granulome (lésion chronique) existant ; on observe une douleur aiguë avec possibilité de fistule [cite: 1036-1042]."
      },
      {
        questionText: "Sans traitement, le granulome évolue vers :",
        options: [
          "Kyste en poche",
          "Abcès Phoenix",
          "Parodontite apicale chronique fistulisée",
          "Kyste vrai",
          "Abcès apical aigu"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le granulome peut persister, s’infecter (abcès Phoenix) et se transformer en kyste radiculaire (en poche ou vrai) ou fistuliser [cite: 1044-1050]."
      },
      {
        questionText: "Indication d’une obturation intermédiaire à l’hydroxyde de calcium :",
        options: [
          "Parodontite apicale chronique",
          "Pulpite",
          "Parodontite apicale aiguë",
          "Traitement conservateur",
          "Abcès Phoenix"
        ],
        correctOptionIndexes: [0, 2, 4],
        explanation: "Le Ca(OH)₂ est utilisé comme pansement (médication inter-séance) dans les infections endodontiques (PA chronique, PAA, Abcès Phoenix) [cite: 1052-1058]."
      },
      {
        questionText: "Présence d’une fistule :",
        options: [
          "Signe de gravité",
          "Signe de chronicité",
          "Valve de sécurité",
          "Indication d’extraction immédiate"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La fistule traduit un drainage spontané (valve de sécurité) d'une infection chronique [cite: 1060-1065]."
      },
      {
        questionText: "Synonyme de parodontite apicale aiguë primaire :",
        options: [
          "Parodontite apicale aiguë d’origine pulpaire",
          "Pulpite aiguë",
          "Pulpo-desmodontite",
          "Gingivite ulcéro-nécrotique"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Aussi appelée “pulpodesmodontite aiguë”, c’est l’atteinte initiale du ligament apical d'origine pulpaire [cite: 1067-1072]."
      },
      {
        questionText: "Gravité des dépassements de matériau d’obturation :",
        options: [
          "Dépend de la résorption du matériau",
          "Dépend de l’état général du patient",
          "Dépend du volume débordé",
          "Dépend de l’anatomie de la zone apicale",
          "Peut provoquer une parodontite chronique"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "Un débordement volumineux, non résorbable, dans un foramen étroit, près d'un obstacle anatomique ou chez un patient fragile, est plus nuisible [cite: 1074-1080]."
      },
      {
        questionText: "Parodontite apicale fistulisée :",
        options: [
          "Un abcès péri-apical avec fistule",
          "Un granulome fistulisant",
          "Un abcès pulpaire",
          "Une gingivite ulcéro-nécrotique"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Il s'agit d'une lésion chronique (granulome ou abcès chronique) qui a créé un trajet de drainage (fistule) [cite: 1088-1092]."
      },
      {
        questionText: "Test de sensibilité dans la parodontite apicale chronique fistulisée :",
        options: [
          "Positif",
          "Toujours négatif",
          "Parfois négatif",
          "Non fiable"
        ],
        correctOptionIndexes: [1],
        explanation: "La lésion est d'origine endodontique, impliquant une nécrose pulpaire, donc les tests de sensibilité sont négatifs [cite: 1094-1098]."
      },
      {
        questionText: "L’abcès apical aigu :",
        options: [
          "Suppuration aiguë péri-apicale",
          "Se traite par drainage endocanalaire",
          "N’entraîne pas de fistule",
          "Doit être obturé immédiatement"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C'est une collection purulente aiguë traitée en urgence par drainage via le canal. L'obturation se fait plus tard [cite: 1100-1105]."
      },
      {
        questionText: "Signes de parodontites symptomatiques (aiguës) : (Combinaison 1, 2, 4)",
        options: [
          "Douleur intense et continue",
          "Tests de vitalité négatifs",
          "Tuméfaction systématique",
          "Percussion positive",
          "Absence de fistule"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Les parodontites symptomatiques (aiguës) donnent des douleurs violentes, une percussion positive, et des tests pulpaires négatifs [cite: 1107-1113]."
      },
      {
        questionText: "Les parodontites apicales :",
        options: [
          "Sont des lésions inflammatoires du parodonte profond",
          "Ne sont jamais douloureuses",
          "Résultent d’une infection pulpaire",
          "Se déclinent en formes aiguës et chroniques",
          "Nécessitent un traitement étiologique"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Ce sont des inflammations du péri-apex (parodonte profond) [cite: 1115], résultant d'une infection pulpaire[cite: 1117]. Elles peuvent être aiguës (douloureuses) ou chroniques (indolores) [cite: 1116, 1118] et nécessitent un TTT endodontique (étiologique)[cite: 1119]."
      },
      {
        questionText: "La jonction cémento-dentinaire :",
        options: [
          "Partie la plus étroite du canal",
          "Limite entre endodontium et parodontium",
          "Située au niveau de l’apex radiographique",
          "Est souvent détruite par l’infection",
          "Devient le point d’arrêt de l’instrumentation"
        ],
        correctOptionIndexes: [0, 1, 3, 4],
        explanation: "C'est la constriction apicale (plus étroite) [cite: 1122], limite entre pulpe et desmodonte[cite: 1123]. Elle est la limite de l'instrumentation [cite: 1126], mais est souvent détruite par l'infection[cite: 1125]. Elle est en deçà de l'apex radio[cite: 1124, 1128]."
      },
      {
        questionText: "La parodontite apicale aiguë :",
        options: [
          "Peut être primaire",
          "Résulte d’une hypercémentose",
          "Peut évoluer vers une parodontite chronique",
          "Est une urgence dentaire"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Elle peut être primaire (sans lésion chronique) [cite: 1130], est une urgence [cite: 1133], et peut s'installer dans la chronicité si non traitée[cite: 1132]. L'hypercémentose est chronique[cite: 1131]."
      },
      {
        questionText: "Abcès péri-apical aigu :",
        options: [
          "Guérit spontanément",
          "Douleur intense et pulsatile",
          "Peut évoluer vers une cellulite",
          "Affecte l’état général",
          "Ne saigne pas"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Douleur intense [cite: 1137], risque d'évolution en cellulite [cite: 1138] et affecte l'état général (fièvre)[cite: 1139]. Ne guérit pas seul[cite: 1136]."
      },
      {
        questionText: "Le kyste péri-apical :",
        options: [
          "Lésion inflammatoire avec épithélium",
          "Peut se développer à partir d’un granulome",
          "Provoque une résorption osseuse",
          "Infection primaire desodonto-périodontale"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "C'est une lésion inflammatoire chronique cavitaire bordée d'épithélium [cite: 1143], souvent issue d'un granulome [cite: 1144], causant une résorption osseuse[cite: 1145]."
      },
      {
        questionText: "Signification de la fistule :",
        options: [
          "Signifie guérison",
          "Indique une infection aiguë",
          "Témoigne d’une évolution chronique",
          "Sert de valve de sécurité",
          "Nécessite une exploration à la gutta"
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Témoigne d'une infection chronique [cite: 1151], sert de drainage (valve) [cite: 1152], et doit être explorée avec un cône de gutta pour tracer l'origine[cite: 1153]."
      },
      {
        questionText: "Étiologies majeures des parodontites apicales : (Combinaison 1, 2, 3)",
        options: [
          "Micro-organismes pulpaires",
          "Micro-organismes parodontaux",
          "Micro-fuites coronaires",
          "Choc traumatique"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'origine est le plus souvent bactérienne, venant de la pulpe nécrosée, d'une poche parodontale profonde, ou d'une infiltration sous restauration [cite: 1158-1162]."
      },
      {
        questionText: "Parodontites symptomatiques : (Combinaison 3, 4)",
        options: [
          "Peuvent résulter d’une exacerbation d’un granulome",
          "Sont exclusivement dues aux traumatismes occlusaux",
          "Impliquent des bactéries anaérobies et aérobies spécifiques",
          "Résultent d’une carie non traitée ou de facteurs iatrogènes"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Elles sont causées par une flore polymicrobienne (anaérobies G- et cocci G+) [cite: 1166, 1169], résultant de caries ou d'actes iatrogènes[cite: 1167]."
      },
      {
        questionText: "Dans l’abcès apical aigu :",
        options: [
          "La dent est très mobile",
          "Le patient n’a pas de douleur spontanée",
          "La tuméfaction est toujours visible",
          "Les radiographies montrent d’emblée une lacune"
        ],
        correctOptionIndexes: [0],
        explanation: "Douleur continue, fièvre éventuelle, mobilité accrue et percussion positive. La tuméfaction peut manquer au début [cite: 1171, 1175-1176]."
      },
      {
        questionText: "Parodontite apicale aiguë liée au traumatisme occlusal :",
        options: [
          "Douleur en décubitus",
          "Sensibilité à la percussion axiale",
          "Résulte d’une lésion carieuse",
          "Présente une fistule"
        ],
        correctOptionIndexes: [1],
        explanation: "Un amalgame surplombant ou une couronne haute (traumatisme occlusal) entraîne une inflammation du desmodonte, douloureuse à la percussion axiale [cite: 1178-1183]."
      },
      {
        questionText: "Parodontite apicale aiguë primaire :",
        options: [
          "Forme débutante",
          "Accompagnée de fièvre systématique",
          "Appelée pulpo-desmodontite",
          "Montre toujours une image radioclaire",
          "Toutes les propositions justes"
        ],
        correctOptionIndexes: [4],
        explanation: "Le signe pathognomonique est la douleur à la percussion associée à un test thermique positif (stade de pulpo-desmodontite) [cite: 1185-1191]."
      },
      {
        questionText: "La desmodontite médicamenteuse :",
        options: [
          "Due à un médicament intra-canal",
          "Se manifeste par une percussion douloureuse",
          "Résulte de l’écoulement de l’exsudat",
          "Est d’origine non iatrogène",
          "Est iatrogène"
        ],
        correctOptionIndexes: [0, 1, 2, 4],
        explanation: "C'est une inflammation iatrogène [cite: 1197] due à un produit irritant (médicament) [cite: 1193] ou à l'exsudat [cite: 1195], provoquant une douleur à la percussion[cite: 1194]."
      },
      {
        questionText: "Causes physiques des LIPOE (Lésions Inflammatoires Périodontales d'Origine Endodontique) :",
        options: [
          "Traumatisme alvéolo-dentaire",
          "Accidents endodontiques",
          "Débordement de pâte ou de gutta",
          "Dépassement d’instrument",
          "Troubles endocriniens"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Les causes physiques incluent les traumatismes, les accidents (dépassement d'instrument) et les irritations par matériaux (débordement) [cite: 1200-1204]."
      },
      {
        questionText: "Le granulome péri-apical :",
        options: [
          "Est une cicatrisation osseuse",
          "Est un foyer de destruction bactérienne",
          "Est une séquelle de traumatisme",
          "Est une forme aiguë"
        ],
        correctOptionIndexes: [1],
        explanation: "Le granulome est une réaction inflammatoire chronique (pas aiguë) où l’équilibre bactéries / défenses est établi [cite: 1207-1212]."
      },
      {
        questionText: "Parodontite apicale aiguë : forme primaire vs secondaire (Combinaison 2, 4)",
        options: [
          "Évolue toujours vers la chronicité",
          "N’a pas d’image radiologique en primaire",
          "Inflammation autour du foramen",
          "Forme secondaire appelée Phoenix",
          "Toutes fausses"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La forme primaire (sans lésion préexistante) peut ne pas produire de lacune visible. La forme secondaire est l'exacerbation d'une lésion chronique (Phoenix) [cite: 1214-1217]."
      },
      {
        questionText: "Changements histo-physio-pathologiques pulpaires et parodontaux (Causes) :",
        options: [
          "Infectieux",
          "Physiques",
          "Chimiques",
          "Bactériens uniquement",
          "Toutes les réponses"
        ],
        correctOptionIndexes: [4],
        explanation: "Les infections, le traumatisme (physique) ou les produits chimiques (médicaments) peuvent provoquer des lésions pulpaires et péri-apicales [cite: 1219-1225]."
      },
      {
        questionText: "Les LIPOE (lésions infectieuses périodontales d’origine endodontique) : (Combinaison 1, 3)",
        options: [
          "Peuvent être aiguës ou chroniques",
          "Ne donnent jamais d’image radioclaire",
          "S’accompagnent d’une lacune apicale",
          "Se traitent toujours chirurgicalement"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Elles existent en formes aiguës ou chroniques [cite: 1227] et se manifestent souvent par une lacune apicale (radioclarté)[cite: 1229]. Le TTT est d'abord endodontique[cite: 1230, 1232]."
      },
      {
        questionText: "Les bactéries sont à l’origine de :",
        options: [
          "Toutes les lésions endodontiques",
          "Toutes les inflammations pulpaires",
          "Toutes les parodontites",
          "Abcès dentaires"
        ],
        correctOptionIndexes: [3],
        explanation: "Les causes des lésions endodontiques peuvent aussi être virales, fongiques, physiques ou chimiques. Les bactéries sont la cause principale des abcès [cite: 1234-1239]."
      },
      {
        questionText: "La parodontite apicale aiguë :",
        options: [
          "Est une lésion primaire du ligament",
          "Résulte d’une nécrose pulpaire",
          "Présente une forte hypercémentose",
          "Toujours visible radiographiquement"
        ],
        correctOptionIndexes: [1],
        explanation: "La nécrose pulpaire libère des toxines qui irritent le desmodonte (ligament) [cite: 1241-1246]."
      },
      {
        questionText: "Étiologie de la parodontite apicale aiguë :",
        options: [
          "Débordement de pâte ou gutta",
          "Dépassement d’instrument",
          "Sursaturation en Ca(OH)₂",
          "Infection d’une dent dépulpée ou d’origine parodontale"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "L’irritation chimique (pâte, Ca(OH)₂) ou mécanique (instrument, gutta) du péri-apex et la migration de bactéries sont les principales causes [cite: 1248-1253]."
      },
      {
        questionText: "La parodontite apicale chronique :",
        options: [
          "Le granulome comporte une poche liquidienne",
          "Le granulome évolue vers un kyste vrai",
          "Le diagnostic différentiel granulome/kyste est radiologique",
          "Est de découverte fortuite"
        ],
        correctOptionIndexes: [3],
        explanation: "Elle est souvent découverte à la radiographie car indolore (fortuite). Seul l'examen histologique distingue kyste et granulome [cite: 1255-1260]."
      },
      {
        questionText: "Signes principaux des parodontites symptomatiques (aiguës) :",
        options: [
          "Douleur spontanée",
          "Tests de vitalité négatifs",
          "Tuméfaction constante",
          "Percussion négative"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Douleur spontanée et tests de vitalité négatifs. La percussion est généralement positive et douloureuse [cite: 1262-1267]."
      },
      {
        questionText: "La parodontite apicale aiguë peut être :",
        options: [
          "Primaire débutante",
          "Primaire, primaire",
          "Pulpo-desmodontite",
          "Parodontite avec hypercémentose"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "« Pulpodesmodontite » est le terme commun de la PAA primaire (débutante). L’hypercémentose est le signe d’une parodontite chronique [cite: 1269-1274]."
      },
      {
        questionText: "La LIPOE :",
        options: [
          "Est une lésion infectieuse",
          "Est une LOE (lésion odontogène exogène)",
          "Est toujours chronique",
          "Nécessite toujours un drainage"
        ],
        correctOptionIndexes: [1],
        explanation: "LIPOE signifie Lésion Inflammatoire Périodontale d'Origine Endodontique [cite: 1276-1280]."
      },
      {
        questionText: "L’abcès apical aigu :",
        options: [
          "Douleur calmée par les antalgiques",
          "L’état général peut être altéré",
          "Test de percussion positif",
          "La tuméfaction est pathognomonique"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Fièvre (altération état général) et adénopathie accompagnent souvent cette suppuration. Percussion positive [cite: 1282-1287]."
      },
      {
        questionText: "Parodontite apicale aiguë secondaire abcédée (Phoenix) :",
        options: [
          "Exacerbation d’une lésion chronique",
          "Exacerbation d’un abcès apical aigu",
          "Évolue vers une parodontite chronique",
          "Évolue vers une cellulite aiguë"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "On parle d’abcès Phoenix : c’est une poussée aiguë (exacerbation) d’un granulome chronique, qui peut évoluer vers une cellulite [cite: 1289-1294]."
      },
      {
        questionText: "Parodontite apicale chronique granulomateuse :",
        options: [
          "Évolue toujours vers un kyste",
          "Se diagnostique par son volume radiologique",
          "Réaction inflammatoire de faible intensité et longue durée",
          "Contient des cellules épithéliales"
        ],
        correctOptionIndexes: [2],
        explanation: "Le granulome est une réaction hyperplasique chronique due à une irritation continue. Seul un examen histologique distingue kyste et granulome [cite: 1296-1302]."
      },
      {
        questionText: "Traitements des LIPOE :",
        options: [
          "Traitement endodontique",
          "Retraitement en deuxième intention",
          "Chirurgie endodontique en première intention",
          "Suppression de l’infection endocanalaire"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le traitement de choix est étiologique : la suppression de l'infection par TTT endodontique [cite: 1304-1308]."
      },
      {
        questionText: "Le cône dentinaire :",
        options: [
          "Réunion de plusieurs tubules dentinaires",
          "Espace contenant la pulpe radiculaire",
          "Aussi appelé espace de Black",
          "Limité par la dentine et le cément"
        ],
        correctOptionIndexes: [1],
        explanation: "Il s’étend de la chambre pulpaire à la jonction cémento-dentinaire ; sa base est cervicale et son sommet à la jonction [cite: 1310-1316]."
      }
    ]
  },
  {
    title: "Accidents et Complications en Endodontie",
    subject: "oce",
    questions: [
      {
        questionText: "Chaleur émise par les instruments rotatifs (lors du fraisage) :",
        options: [
          "Élévation de la température pulpaire",
          "Élaboration de dentine réactionnelle",
          "Dénaturation de la dentine",
          "Thrombose vasculaire",
          "Nécrose pulpaire localisée"
        ],
        correctOptionIndexes: [0, 1, 2, 3, 4],
        explanation: "La chaleur générée lors du fraisage peut entraîner un échauffement pulpaire, des lésions tissulaires (thrombose, nécrose) et une réaction défensive (dentine tertiaire) [cite: 976-977]."
      },
      {
        questionText: "Prévention des bouchons dentinaires :",
        options: [
          "Respect de la récapitulation",
          "Respect de la séquence opératoire",
          "Utilisation d'une irrigation abondante",
          "Ordre progressif des limes",
          "Utilisation souple des instruments"
        ],
        correctOptionIndexes: [0, 1, 4],
        explanation: "L’irrigation abondante, l’ordre progressif des limes et la récapitulation empêchent l’accumulation de débris. Les bonnes pratiques incluent le respect de la récapitulation, de la séquence et l'utilisation souple des instruments [cite: 978-979]."
      },
      {
        questionText: "Fracture instrumentale :",
        options: [
          "Ne survient jamais en apical",
          "Due à une instrumentation trop rapide",
          "Est toujours évitable",
          "Liée à une mauvaise technique",
          "Peut survenir au niveau apical"
        ],
        correctOptionIndexes: [4],
        explanation: "La fatigue du métal, une mauvaise technique ou une anatomie complexe peuvent provoquer une rupture au tiers apical [cite: 980-981]."
      },
      {
        questionText: "Prévention des perforations (cavité d'accès) :",
        options: [
          "Bonne lecture de la radiographie préopératoire",
          "Élimination des zones d’interférence lors de la cavité d’accès",
          "Utilisation de fraises non-travaillantes en bout",
          "Travailler sans irrigation"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Une bonne lecture de la radiographie préopératoire et l’élimination des zones d’interférence (accès droit) lors de la cavité d’accès contribuent à éviter les perforations[cite: 982]."
      },
      {
        questionText: "Exposition pulpaire lors du curetage dentinaire :",
        options: [
          "Est toujours due à la carie",
          "Peut être un acte iatrogène",
          "Peut être due à un mouvement brusque du patient",
          "Est prise en charge par coiffage direct",
          "Nécessite une pulpectomie immédiate"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "Une exposition peut survenir lors d’un curetage profond (iatrogène) ou mouvement brusque ; elle est traitée par un coiffage pulpaire direct si les conditions le permettent [cite: 983-984]."
      },
      {
        questionText: "Perforation du plancher :",
        options: [
          "Survient au début du traitement, lors de l'ouverture de la cavité d'accès",
          "Survient lors de la recherche des orifices canalaires",
          "Est plus fréquente sur les molaires mandibulaires",
          "Survient lors de l'obturation",
          "Est fréquente sur les incisives"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les perforations du plancher surviennent au début du traitement, lors de l’ouverture de la cavité d’accès, lors de la recherche des orifices canalaires et sont plus fréquentes sur les molaires mandibulaires[cite: 985]."
      },
      {
        questionText: "Bouchon dentinaire :",
        options: [
          "Constitué de débris organiques et minéraux",
          "Favorisé par une bonne irrigation",
          "Provient d’une coupe brusque (instrumentation agressive)",
          "Favorisé par l’absence de récapitulation",
          "Constitué uniquement de bactéries"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Un bouchon est constitué de débris organiques et minéraux, provient d’une coupe brusque et est favorisé par l’absence de récapitulation [cite: 986-987]."
      },
      {
        questionText: "Stripping (endodontie) :",
        options: [
          "Est une perforation apicale",
          "Est un amincissement de la paroi externe",
          "Peut conduire à une perforation (zipping)",
          "Est un synonyme de faux canal"
        ],
        correctOptionIndexes: [2],
        explanation: "Le stripping est l’amincissement excessif de la paroi interne d’un canal incurvé, pouvant conduire à une perforation latérale (zipping) [cite: 988-989]."
      },
      {
        questionText: "Élément influençant la température pendant le fraisage :",
        options: [
          "La capacité de coupe de la fraise",
          "Le sens de rotation",
          "La vitesse",
          "L'irrigation utilisée"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La capacité de coupe de la fraise, le sens de rotation et la vitesse étaient déterminants. Une mauvaise coupe ou une vitesse excessive chauffe la dent [cite: 990-991]."
      },
      {
        questionText: "Prévention des accidents biologiques (contamination) :",
        options: [
          "Travailler sans digue",
          "Travailler sous digue",
          "Irriguer en continu",
          "Utiliser des instruments non stériles",
          "Rincer la cavité avec une solution antiseptique"
        ],
        correctOptionIndexes: [1, 2, 4],
        explanation: "Il faut travailler sous digue, irriguer en continu et rincer la cavité avec une solution antiseptique[cite: 992]."
      },
      {
        questionText: "Perforation du plancher pulpaire :",
        options: [
          "Apparaît lors de la recherche des entrées canalaires",
          "Met en communication l’endodonte et le parodonte",
          "Est toujours apicale",
          "Se traite avec de la gutta-percha"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les perforations apparaissent lors de la recherche des entrées canalaires et mettent en communication l’endodonte (chambre pulpaire) et le parodonte[cite: 993]."
      },
      {
        questionText: "Concernant la perforation du plancher :",
        options: [
          "La perforation doit être obturée après la fermeture des canaux",
          "Un amincissement interne (stripping) constitue une perforation",
          "Le MTA n'est pas indiqué",
          "Elle est sans conséquence"
        ],
        correctOptionIndexes: [0],
        explanation: "La perforation doit être obturée après la fermeture des canaux. Un amincissement interne (stripping) ne constitue pas une perforation[cite: 994]."
      },
      {
        questionText: "Perforations iatrogènes :",
        options: [
          "Sont causées par le patient",
          "Sont causées par le praticien",
          "Sont dues à la carie",
          "Sont toujours symptomatiques"
        ],
        correctOptionIndexes: [1],
        explanation: "Elles résultent d’une manœuvre opératoire inadéquate du praticien [cite: 995-996]."
      },
      {
        questionText: "Matériaux d’obturation des perforations :",
        options: [
          "Amalgame",
          "CVI",
          "MTA (Mineral Trioxide Aggregate)",
          "Biodentine",
          "Oxyde de Zinc Eugénol"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "Le MTA et la Biodentine sont les matériaux de choix pour l'obturation des perforations[cite: 997]."
      },
      {
        questionText: "Production de chaleur au fraisage :",
        options: [
          "Vitesse de rotation",
          "Pression exercée",
          "Dimension et forme de la fraise",
          "Durée de contact",
          "Absence d'irrigation"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tous les facteurs proposés – vitesse de rotation, pression, dimension/forme de la fraise, durée de contact – influencent l’échauffement[cite: 998]."
      },
      {
        questionText: "Faux canal (définition) :",
        options: [
          "Un trajet artificiel créé par une instrumentation inappropriée",
          "S’ouvre dans le desmodonte",
          "Doit être obturé comme un vrai canal",
          "Est un canal accessoire naturel"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le faux canal est un trajet artificiel créé par une instrumentation inappropriée qui s’ouvre dans le desmodonte. Il doit être obturé [cite: 999-1000]."
      },
      {
        questionText: "Bouchon apical :",
        options: [
          "Apparaît quand l’irrigation est insuffisante",
          "Résulte d’un transport interne (tassement de débris)",
          "Peut former une butée apicale",
          "Est bénéfique pour l'étanchéité"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Ce bouchon (tassement de débris) apparaît quand l’irrigation est insuffisante et peut former une butée apicale[cite: 1001]."
      },
      {
        questionText: "Accidents localisés au tiers apical :",
        options: [
          "Le bouchon apical",
          "Perforation du plancher",
          "Le faux canal",
          "La butée",
          "Le transport externe du canal (zipping)"
        ],
        correctOptionIndexes: [0, 2, 3, 4],
        explanation: "Les accidents du tiers apical comprennent le bouchon apical, le faux canal, la butée et le transport externe du canal (zipping)[cite: 1002]."
      },
      {
        questionText: "Perforation du plancher pulpaire (prise en charge) :",
        options: [
          "Peut être obturée après l’obturation des canaux",
          "Est traitée au MTA ou à la Biodentine",
          "Doit toujours être traitée chirurgicalement",
          "Peut être évitée avec une fraise Endo Z (Zekrya)",
          "Est laissée ouverte pour drainer"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Une perforation du plancher peut être obturée (MTA, Biodentine) après l’obturation des canaux, et peut être évitée avec une fraise à bout mousse (Endo Z)[cite: 1003]."
      },
      {
        questionText: "Zones concernées par les perforations endodontiques :",
        options: [
          "L'émail",
          "Le plancher de la chambre pulpaire",
          "La gencive",
          "La dentine radiculaire",
          "Le cément"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Lors du traitement endodontique, les perforations touchent surtout le plancher de la chambre pulpaire et la dentine radiculaire[cite: 1004]."
      },
      {
        questionText: "Retrait d’un instrument fracturé (techniques) :",
        options: [
          "By-pass (contournement)",
          "Trousse de Masseran",
          "Système LARS (Laser)",
          "Utilisation d'aimants"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les techniques proposées comprennent le By-pass (contourner l'instrument), la trousse de Masseran (préhension) et le système LARS[cite: 1005]."
      },
      {
        questionText: "Risques liés à l’anesthésie :",
        options: [
          "Perforation du plancher",
          "Œdème de Quincke (allergie)",
          "Fracture d'instrument",
          "Bouchon apical",
          "Prise en compte des antécédents médicaux (interaction)"
        ],
        correctOptionIndexes: [1, 4],
        explanation: "Les risques évoqués étaient l’œdème de Quincke (réaction allergique grave) et la prise en compte des antécédents médicaux [cite: 1006-1007]."
      },
      {
        questionText: "Conduite à tenir lors d’un dépassement de pâte canalaire :",
        options: [
          "Extraction immédiate",
          "Petit dépassement péri-apical : surveillance",
          "Dépassement important : traitement chirurgical (si symptomatique)",
          "Informer le patient d’une éventuelle réaction postopératoire",
          "Ré-instrumenter immédiatement"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "En cas de petit dépassement, on surveille. Pour un dépassement important, la chirurgie peut être envisagée. Le patient doit être informé de la réaction postopératoire [cite: 1008-1009]."
      },
      {
        questionText: "Le faux canal :",
        options: [
          "Est un canal accessoire",
          "Provoque une hémorragie",
          "Doit être traité (obturé) comme un vrai canal",
          "Aboutit dans le desmodonte",
          "Constitue un accident iatrogène"
        ],
        correctOptionIndexes: [1, 2, 3, 4],
        explanation: "Ce trajet accidentel (iatrogène) n’est pas un canal accessoire, il provoque une hémorragie, aboutit dans le desmodonte et nécessite une obturation adaptée [cite: 1010-1011]."
      }
    ]
  },
  {
    title: "Cicatrisation Apicale",
    subject: "oce",
    questions: [
      {
        questionText: "Concernant la cicatrisation apicale :",
        options: [
          "Elle entraîne une régénération complète de l’os alvéolaire.",
          "Elle implique systématiquement la formation d’un tissu conjonctif fibreux avant la réparation osseuse.",
          "Elle ne se réalise qu’après une chirurgie endodontique.",
          "Elle passe par : disparition de l’inflammation, formation d’un tissu conjonctif, réparation tissulaire."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La cicatrisation apicale est un processus de réparation (non une régénération complète). Elle comporte trois phases : disparition de l’inflammation, formation d’un tissu conjonctif fibreux, puis réparation osseuse et cémentaire [cite: 2341-2347]."
      },
      {
        questionText: "Toute infection endodontique entraîne au niveau apical une réaction inflammatoire qui a pour conséquence :",
        options: [
          "Une augmentation des phénomènes ostéoblastiques.",
          "Une augmentation des phénomènes ostéoclastiques.",
          "Une augmentation de l’activité synthétique des ostéoblastes.",
          "Une néoformation cémentaire."
        ],
        correctOptionIndexes: [1],
        explanation: "L’infection entraîne une baisse de l’activité synthétique des ostéoblastes et une augmentation des phénomènes ostéoclastiques et cémentoclastiques [cite: 2350-2355]."
      },
      {
        questionText: "Les critères de cicatrisation apicale sont :",
        options: [
          "Absence de symptomatologie.",
          "Présence de fistule.",
          "Absence d’image apicale.",
          "Une percussion douloureuse."
        ],
        correctOptionIndexes: [0],
        explanation: "Les critères cliniques incluent l’absence de douleur (spontanée et provoquée) et de fistule. Radiologiquement, on observe un desmodonte normal et aucune image péri-apicale [cite: 2358-2364]."
      },
      {
        questionText: "La guérison des lésions périradiculaires après un traitement endodontique est :",
        options: [
          "Fibroblastique.",
          "Régénérative.",
          "Réparatrice.",
          "Ostéocémentogénique."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La cicatrisation est un processus de réparation (plus que de régénération) comprenant fibrogenèse, cémentogenèse et ostéogenèse [cite: 2367-2373]."
      },
      {
        questionText: "Dans une infection endodontique, il y a :",
        options: [
          "Une augmentation de l’activité ostéoblastique.",
          "Une augmentation des phénomènes ostéoclastiques et cémentoclastiques.",
          "Un accroissement de l’activité des fibroblastes.",
          "Une augmentation de la formation de néocément."
        ],
        correctOptionIndexes: [1],
        explanation: "L’infection entraîne une diminution de la synthèse et une augmentation de l’activité résorptive (ostéoclastes/cémentoclastes) [cite: 2376-2381]."
      },
      {
        questionText: "Parmi les processus de réparation potentiellement retrouvés dans la zone péri-apicale, on retrouve :",
        options: [
          "Inflammation chronique.",
          "Fibrogenèse.",
          "Cémentogenèse.",
          "Ostéogenèse."
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: "La cicatrisation fait appel à la fibrogenèse (tissu conjonctif), à la cémentogenèse (néocément) et à l’ostéogenèse (néoos) [cite: 2384-2390]."
      },
      {
        questionText: "Au niveau périradiculaire, la cicatrisation passe par :",
        options: [
          "Fibrogenèse.",
          "Néoplasie.",
          "Cémentogenèse.",
          "Ostéogenèse."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "Les fibroblastes réorganisent les fibres, tandis que les cémentoblastes et ostéoblastes forment du néocément et du néoos [cite: 2393-2398]."
      },
      {
        questionText: "Parmi les critères de cicatrisation apicale, on retient :",
        options: [
          "Absence de symptomatologie.",
          "Présence de fistule.",
          "Absence d’image péri-apicale.",
          "Absence d’image apicale radioclaire."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "L’absence d’une radiolucidité apicale et l’absence de symptôme ou de fistule constituent des critères majeurs de cicatrisation [cite: 2401-2406]."
      },
      {
        questionText: "Parmi les cellules présentatrices d’antigènes et phagocytaires, on trouve :",
        options: [
          "Les lymphocytes.",
          "Les macrophages.",
          "Les fibroblastes.",
          "Les odontoblastes."
        ],
        correctOptionIndexes: [1],
        explanation: "Les macrophages jouent un rôle central en reconnaissant et présentant les antigènes aux lymphocytes T et en produisant des cytokines [cite: 2409-2414]."
      },
      {
        questionText: "Quelles affirmations traduisent la cicatrisation apicale ? (Combinaison 1, 4)",
        options: [
          "La dent est asymptomatique.",
          "Présence de fistule.",
          "Présence d’image périapicale.",
          "Absence d’image périapicale."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Les dents fonctionnelles cicatrisées sont cliniquement asymptomatiques et ne montrent pas de lacune radiologique [cite: 2417-2422]."
      },
      {
        questionText: "L’infection endodontique entraîne : (Combinaison 2, 3)",
        options: [
          "Une augmentation de l’activité synthétique.",
          "Une augmentation de l’activité ostéoclastique.",
          "Une diminution de l’activité synthétique.",
          "Une augmentation de l’activité ostéoblastique."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La réaction inflammatoire accroît l’activité des cellules résorptives (ostéoclastes/cémentoclastes) et diminue la synthèse [cite: 2425-2430]."
      },
      {
        questionText: "La cicatrisation apicale :",
        options: [
          "Ne fait pas intervenir la cicatrisation, seulement la régénération.",
          "Est obtenue uniquement par traitement chirurgical.",
          "Inclut des phénomènes de régénération et de réparation.",
          "Est stimulée par le matériau d’obturation."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "La cicatrisation est un processus physiologique de réparation (fibro, cémento et ostéogénèse) favorisé par l’élimination de l’infection et l’obturation hermétique (matériau) [cite: 2433-2438]."
      },
      {
        questionText: "Une dent est considérée comme fonctionnelle en cicatrisation apicale lorsque :",
        options: [
          "L’image de résorption apicale se stabilise ou diminue.",
          "La symptomatologie persiste.",
          "On observe toujours une fistule.",
          "Le patient est asymptomatique malgré une persistance de l’image."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Même si l’image radiologique ne disparaît pas totalement (cicatrice fibreuse), une dent asymptomatique avec une image stable ou diminuée est considérée en cicatrisation [cite: 2441-2446]."
      },
      {
        questionText: "Le tissu de granulation riche en capillaires :",
        options: [
          "Peut être observé histologiquement lors de la cicatrisation.",
          "Résulte de la stimulation thérapeutique (désinfection).",
          "Défend la zone périapicale."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Le tissu de granulation constitue une défense active de la zone périapicale et se transforme ensuite en tissu fibreux lors de la réparation [cite: 2449-2453]."
      },
      {
        questionText: "Les critères cliniques de la cicatrisation apicale comprennent :",
        options: [
          "Absence de symptomatologie.",
          "Absence de fistule ou de tuméfaction.",
          "Percussion non douloureuse.",
          "Présence d’hypersensibilité thermique."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Clinique : silence symptomatique (pas de douleur, pas de fistule) et percussion non douloureuse [cite: 2456-2461]."
      },
      {
        questionText: "Lors de la cicatrisation apicale, il y a : (Combinaison 1, 2, 4)",
        options: [
          "Formation d’une trame organique.",
          "Absence de symptomatologie.",
          "Percussion douloureuse.",
          "Élargissement du ligament alvéolo-dentaire (transitoire).",
          "Régénération osseuse."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Phases : disparition inflammation, formation tissu conjonctif (trame organique), puis réparation. Critères : absence de symptôme. L'élargissement du ligament est transitoire (phase de granulation) [cite: 2468-2475]."
      },
      {
        questionText: "Le siège de la réparation apicale est : (Combinaison 1, 4)",
        options: [
          "L’espace de Black (centre nourricier).",
          "Le cône cémentaire de Kuttler.",
          "Le ligament alvéolo-dentaire.",
          "Le tissu de transition entre pulpe et desmodonte.",
          "Le centre nourricier."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La réparation se déroule essentiellement dans l’espace de Black (centre nourricier) et dans le tissu de transition pulpe-desmodonte, riches en cellules [cite: 2478-2484]."
      },
      {
        questionText: "Au niveau apical, lors d’une désinfection canalaire, il y a :",
        options: [
          "Prolifération des ostéoclastes.",
          "Transformation du tissu fibreux en tissu inflammatoire.",
          "Diminution des cellules inflammatoires.",
          "Diminution de l’activité synthétique.",
          "Minéralisation des fibres de Sharpey."
        ],
        correctOptionIndexes: [2],
        explanation: "La désinfection réduit la charge bactérienne et entraîne la diminution des cellules inflammatoires, première étape de la cicatrisation [cite: 2487-2494]."
      },
      {
        questionText: "La régénération apicale se produit après une :",
        options: [
          "Désinfection canalaire.",
          "Mise en forme et obturation canalaire.",
          "Obturation canalaire.",
          "Médication interséance.",
          "Chirurgie endodontique."
        ],
        correctOptionIndexes: [2],
        explanation: "La fermeture hermétique du système canalaire par l’obturation (après désinfection et mise en forme) crée les conditions de la régénération et de la cicatrisation apicale [cite: 2497-2503]."
      },
      {
        questionText: "Les critères de cicatrisation de la lésion apicale sont :",
        options: [
          "Absence de symptomatologie.",
          "Présence de fistule.",
          "Absence d’image apicale.",
          "Percussion douloureuse."
        ],
        correctOptionIndexes: [0, 2],
        explanation: "La cicatrisation se traduit par un silence clinique (aucune douleur ni fistule) et l’absence d’image radioclaire apicale [cite: 2506-2511]."
      },
      {
        questionText: "La réparation tissulaire de la région périapicale :",
        options: [
          "Se fait au niveau du tissu de transition entre la pulpe et le desmodonte.",
          "Engendre de la néodentine.",
          "Aboutit à la formation de néocément.",
          "Concerne l’os alvéolaire."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La réparation rétablit la continuité par formation de nouveau cément et d’os alvéolaire au niveau du tissu de transition pulpe-desmodonte. Elle ne produit pas de néo-dentine [cite: 2514-2520]."
      },
      {
        questionText: "L’induction de la cicatrisation apicale se fait :",
        options: [
          "Par la prise d’anti-inflammatoires.",
          "Par la suppression de l’étiologie (infection).",
          "Par fermeture hermétique du système canalaire.",
          "Par l’irrigation au sérum physiologique du canal."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Aucune cicatrisation ne se produira tant que les irritants (étiologie) ne sont pas éliminés et tant que le système n’est pas isolé par une obturation étanche [cite: 2523-2528]."
      }
    ]
  },
  {
    title: "Éclaircissement et Esthétique",
    subject: "oce",
    questions: [
      {
        questionText: "Le mécanisme de l’éclaircissement consiste en :",
        options: [
          "La diffusion du produit éclaircissant au niveau de l’émail.",
          "Les dents jeunes permettent une bonne diffusion du produit.",
          "Les restaurations coronaires empêchent la diffusion du produit.",
          "Une abrasion de la surface de l'émail."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L’éclaircissement se fait par diffusion du produit à travers l’émail et la dentine puis dissociation des pigments. Les restaurations bloquent cette diffusion [cite: 358-362, 467-471]."
      },
      {
        questionText: "La technique d’éclaircissement externe :",
        options: [
          "Est indiquée en cas de sensibilité dentinaire.",
          "Est contre-indiquée en cas de sensibilité dentinaire.",
          "Elle utilise l’H₂O₂ ou le peroxyde de carbamide.",
          "Ne fonctionne que sur dents dépulpées."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "L’éclaircissement externe (ambulatoire) est indiqué pour des dyschromies modérées sur dents vitales, utilise des agents peroxydés, et est contre-indiqué si sensibilité [cite: 364-367, 473-476]."
      },
      {
        questionText: "Les risques d’un éclaircissement :",
        options: [
          "Les hypersensibilités dentinaires.",
          "Les résorptions cervicales externes.",
          "L'amélioration de l'adhésion des composites.",
          "Le renforcement de l'émail."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Un éclaircissement peut entraîner hypersensibilité, résorption cervicale (surtout interne/dents dépulpées), inflammation pulpaire et gingivale [cite: 369-372, 478-481]."
      },
      {
        questionText: "Durant l’éclaircissement sur dent à pulpe vitale :",
        options: [
          "L’action est un processus d’oxydo-réduction.",
          "Il y a destruction des doubles liaisons et des cycles aromatiques.",
          "Les péroxydes permettent l’éclaircissement par production de radicaux libres.",
          "Le produit ne pénètre que l'émail."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Les radicaux oxygénés (issus des peroxydes) détruisent les molécules pigmentées (chromophores) en brisant leurs doubles liaisons et leurs cycles aromatiques (oxydo-réduction) [cite: 375-378, 484-487]."
      },
      {
        questionText: "Lors de l’éclaircissement interne (au fauteuil) :",
        options: [
          "Le produit est activé par la lumière des lampes LED.",
          "Le produit est activé avec une fibre laser.",
          "La technique thermocatalytique (chaleur) est la plus sûre.",
          "On utilise uniquement du perborate de sodium."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "L'activation laser ou LED est utilisée pour certains produits au fauteuil. La technique thermocatalytique (chaleur) est non recommandée [cite: 381-384, 490-493]."
      },
      {
        questionText: "La facette en résine composite :",
        options: [
          "Est indiquée en présence d’hypoplasie.",
          "La technique indirecte nécessite des étapes de collage.",
          "Est contre-indiquée pour les dyschromies type tétracyclines.",
          "Ne peut pas corriger les malformations amélaires."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les facettes composites (directes ou indirectes) sont indiquées pour les dyschromies (tétracyclines, MIH) et les malformations (hypoplasie). La technique indirecte exige un collage [cite: 387-390, 496-499]."
      },
      {
        questionText: "La technique ambulatoire d’éclaircissement interne :",
        options: [
          "Indiquée en cas de nécrose pulpaire.",
          "Contre-indiquée chez les patients de moins de 16 ans.",
          "Le produit utilisé est le perborate de sodium (mélangé à de l’eau).",
          "Se fait sur dent vivante."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'éclaircissement interne (walking bleach) est indiqué pour les dents dépulpées (nécrose) et utilise souvent du perborate de sodium. Contre-indiqué chez les jeunes [cite: 393-395, 502-504]."
      },
      {
        questionText: "Les résorptions cervicales externes :",
        options: [
          "Sont de nature inflammatoire.",
          "Peuvent survenir après un éclaircissement (interne).",
          "Surviennent surtout sur des dents dévitalisées.",
          "Sont un risque de l'éclaircissement externe uniquement."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L’utilisation d’H₂O₂ en interne (dents dévitalisées) peut diffuser vers la jonction amélo-cémentaire et entraîner une résorption cervicale inflammatoire [cite: 398-402, 507-511]."
      },
      {
        questionText: "Le peroxyde d’hydrogène est :",
        options: [
          "De l’eau oxygénée.",
          "Un agent d’éclaircissement dentaire.",
          "Un agent de collage.",
          "Utilisé uniquement en interne."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le peroxyde d'hydrogène (H₂O₂) est le nom chimique de l'eau oxygénée, un agent d'éclaircissement commun [cite: 405-406, 514-515]."
      },
      {
        questionText: "La technique thermocatalytique d’éclaircissement dentaire :",
        options: [
          "Une source de chaleur est utilisée.",
          "L’eau oxygénée à 100 volumes (30%) est employée.",
          "Est la technique interne la plus recommandée.",
          "Est sans risque pour la dent."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La technique thermocatalytique (abandonnée) utilise un peroxyde très concentré activé par un insert chauffé ; les risques (résorption, surchauffe) l’ont fait proscrire [cite: 410-413, 519-522]."
      },
      {
        questionText: "La technique immédiate d’éclaircissement (au fauteuil) :",
        options: [
          "Elle se fait au peroxyde de carbamide à 35 %.",
          "Elle se pratique sur dents pulpées.",
          "Utilise des faibles concentrations de peroxyde.",
          "Ne nécessite pas de protection gingivale."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La technique immédiate (in-office) utilise des concentrations élevées (ex: peroxyde de carbamide 35%) sur dents pulpées, nécessitant une protection gingivale [cite: 416-418, 525-527]."
      },
      {
        questionText: "Le perborate de sodium :",
        options: [
          "Est utilisé pour l’éclaircissement externe (ambulatoire).",
          "Est utilisé par voie intra-coronaire.",
          "Sert pour l’éclaircissement des dents dépulpées.",
          "Est un synonyme de peroxyde de carbamide."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le perborate de sodium est utilisé en interne (voie intra-coronaire) pour la technique ambulatoire (walking bleach) sur dents dépulpées [cite: 421-424, 530-533]."
      },
      {
        questionText: "Les facettes collées peuvent être :",
        options: [
          "Des facettes en céramique confectionnées au laboratoire.",
          "Des facettes directes stratifiées en composite.",
          "Des facettes directes par estampage (moulage).",
          "Des facettes préfabriquées en composite.",
          "Uniquement en céramique."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Il existe plusieurs types : céramique (indirecte), composite direct stratifié, composite direct par estampage, et facettes préfabriquées [cite: 427-430, 536-539]."
      },
      {
        questionText: "L’éclaircissement sur dents pulpées est indiqué :",
        options: [
          "Dans les fluoroses (légères à modérées).",
          "Pour des colorations dues au vieillissement.",
          "Pour des colorations congénitales (légères).",
          "Pour des dyschromies très accentuées (ex: tétracycline stade 3)."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Indiqué pour fluoroses, vieillissement, colorations congénitales. Contre-indiqué pour les dyschromies très accentuées qui y répondent mal [cite: 434-437, 543-546]."
      },
      {
        questionText: "Éclaircissement des dents dépulpées au fauteuil :",
        options: [
          "Le perborate de sodium.",
          "Le peroxyde de carbamide.",
          "Le peroxyde d’hydrogène.",
          "L’utilisation d’une digue étanche.",
          "Ne nécessite pas de digue."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Tous ces produits peuvent être utilisés en interne au fauteuil. L'isolation par la digue est indispensable pour protéger les tissus mous [cite: 440-444, 549-553]."
      },
      {
        questionText: "Technique d’éclaircissement sur dents pulpées en ambulatoire (home bleaching) :",
        options: [
          "Se fait par voie externe.",
          "Utilise le peroxyde de carbamide (ex: 10-22%).",
          "Utilise une gouttière confectionnée au laboratoire.",
          "Nécessite une fluoration en fin de traitement.",
          "Utilise du perborate de sodium."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Le home bleaching (externe) consiste à maintenir un gel de peroxyde de carbamide via des gouttières thermoformées ; un traitement au fluor est conseillé [cite: 447-452, 556-561]."
      },
      {
        questionText: "La micro-abrasion amélaire :",
        options: [
          "Élimine uniquement la couche superficielle de l’émail.",
          "Est indiquée pour les séquelles de traumatismes (taches blanches).",
          "Utilise une ponce à base d’oxyde de silicium (ou alumine).",
          "Utilise un acide (ex: acide chlorhydrique)."
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "La micro-abrasion élimine la couche superficielle de l'émail [cite: 564] pour traiter des taches (ex: traumatismes sur dent temporaire)[cite: 565]. Elle emploie une pâte abrasive (oxyde de silicium/alumine) [cite: 566] incorporée à un acide (ex: HCl)[cite: 567]."
      },
      {
        questionText: "Indications de la micro-abrasion :",
        options: [
          "Avant l’éclaircissement (pour optimiser).",
          "Dans les cas de MIH (hypominéralisation) légère.",
          "Pour les caries profondes.",
          "Pour les fluoroses sévères (taches brunes profondes)."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Les indications comprennent des anomalies de structure/couleur. La MIH légère et certaines fluoroses peuvent bénéficier d’une micro-abrasion, souvent avant un blanchiment [cite: 461-464, 570-573]."
      }
    ]
  }
];

module.exports = oceQuizzes;