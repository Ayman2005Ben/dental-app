const pharmacologyQuizzes = [
  {
    "title": "Absorption Des médicaments",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°4 (2025 1°EMD - Q68\nL'absorption d'un médicament est :",
        "options": [
          "Le passage du principe actif de sa forme pharmaceutique au milieux extracellulaire",
          "Le transfert du principe actif du médicament de la forme pharmaceutique aux cellules tissulaires des organes internes",
          "Le passage du principe actif de son site d'administration à la circulation générale",
          "Le transfert du médicament du sang vers les organes et tissus."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : L’absorption est le passage d’un médicament de son site d’administration vers la circulation généraleB : Cela correspond à la distribution, pas à l’absorption.« La distribution est un processus de transfert (réversible) du PA, à partir de la circulation vers les organes et tissus »."
      },
      {
        "questionText": "N°5 (2025 1°EMD - Q101\nLa forme chimique du principe actif la plus sujette. à être absorbée est :",
        "options": [
          "La forme solide tel que les comprimés",
          "La forme non ionisée",
          "La forme liquide tel que les solutions buvables",
          "La forme hydrosoluble"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Les formes solides doivent d’abord se désintégrer et se dissoudre« Hydro solubilité : limite la dissolution des médicaments à partir de leur forme pharmaceutique généralement solide »."
      },
      {
        "questionText": "N°7 (2025 1°EMD - Q128\nLors de la liaison aux protéines plasmatiques, les médicaments acide faibles se lient :",
        "options": [
          "A l'albumine",
          "Aux lipoprotéines uniquement",
          "Avec une liaison forte et irréversible",
          "A un grand nombre de site sur l'albumine."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : Les acides faibles (ex : AINS, anticoagulants) se lient principalement à l’albumineC :  La liaison aux protéines plasmatiques est réversibleD : Faible nombre de sites."
      },
      {
        "questionText": "N°12 (2025 1°EMD - Q236\nConcernant l'absorption des médicaments:",
        "options": [
          "Les cations bivalents réduisent l'absorption des Cyclines",
          "Les antiacides améliorent la biodisponibilité des médicaments qui leur sont associés",
          "La modification de l'état d'ionisation d'un médicament n'a aucune influence sur l'absorption de ce dernier",
          "L'absorption via des systèmes de transport et n'est pas sujette aux interactions médicamenteuses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : « Tétracyclines – Antiacides (Al³+, Ca²+, Mg²+), lait, Zn²+, Fe²+ → Formation de chélates peu solubles entraînant une réduction de l’absorption des cyclines. »B : « Antiacides (oxydes et hydroxydes d’aluminium, calcium, magnésium…) → formation de complexes peu solubles entraînant ↓ biodisponibilité. »C : « Modification de l’état d’ionisation des médicaments → influence leur dissolution et absorption. »"
      },
      {
        "questionText": "N°14 (2024 1°EMD - Q597\nPourquoi l'absorption des médicaments pris par voie per os se fait essentiellement en milieux intestinal ?",
        "options": [
          "La surface intestinale dépasse les 200 mètres carré ;",
          "Le pH acide de l'intestin;",
          "Le débit sanguin modéré irriguant l'intestin;",
          "Les sécrétions enzymatiques intestinales"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2024 1°EMD - Q603\nConcernant l'état d’ionisation des molécules médicamenteuses:",
        "options": [
          "Seule la forme ionisée est absorbé par diffusion;",
          "Dépend du pH de la molécule;",
          "Dépend du poids moléculaire de la molécule;",
          "Permet à un acide faible d'être mieux absorbé en milieux acide."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A: les deux formes sont absorbé en faveur de la forme non ioniséB:L’état d’ionisation dépend du pH du milieuC: c’est la Vitesse de transfert qui  dépend de la masse moléculaire des particules"
      },
      {
        "questionText": "N°1 (2023 1°EMD - Q693\nL'absorption d'un médicament est plus importante quand :",
        "options": [
          "Le médicament est polaire",
          "Le médicament est acide faible en milieu acide",
          "Le médicament est base faible en milieu acide",
          "Le médicament a une masse moléculaire élevé"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Lorsque le médicament est un acide faible, il peut être ionisé en milieu acide, ce qui le rend plus soluble et favorise son absorption dans l'estomac, par exemple. Cela augmente l'absorption du médicament."
      },
      {
        "questionText": "N°2 (2023 1°EMD - Q703\nConcernant l'absorption des médicaments par voie orale:",
        "options": [
          "Implique les mécanismes de transport, transmembranaire passif",
          "Implique les mécanismes de transport transmembranaire actif",
          "Se fait essentiellement au niveau des intestins",
          "Entraine toujours des cycles entéro-hépatique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le passage des principes actifs à travers la muqueuse gastro-intestinal fait intervenir tous les mécanismes de transport transmembranaire : diffusion passive ; transport actif ; diffusion facilité ; filtration et pinocytosL’intestin grêle est le site le plus important pour l’absorption du médicament"
      },
      {
        "questionText": "N°15 (2023 1°EMD - Q913\nParmi les propriétés des médicaments suivantes quelle(s) est (sont) celle(s) qui influence(nt) leur absorption",
        "options": [
          "La forme galènique",
          "Le volume liquidien de l'organisme",
          "Le polymorphisme génétique de CYP450",
          "L'administration par voie intra veineuse"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2022 1°EMD - Q1202\nl’absorption des médicaments :",
        "options": [
          "Concerne toutes les voies d’administrations",
          "Ne concerne que les voies d’administration indirecte",
          "N’implique que des mécanismes de diffusion actifs et passifs",
          "Est influencée par la fonction rénale du patient"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ce phénomène concerne toutes les voies d’administration à visé systémique sauf lavoie intraveineuse, intra-artérielle et intracardiaqueC : implique  des mécanismes de diffusion actifs ,passifs et facilitéeD : Est influencée par la Vitesse de vidange gastrique transit"
      },
      {
        "questionText": "N°17 (2021 1°EMD - Q1582\nquelle est la propriété physic-chimique impliquée dans l’absorption des médicaments et qui dépend du pH du milieu :",
        "options": [
          "Etat d’ionisation",
          "Liposolubilité",
          "Hydrosolubilité",
          "Masse molaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L’état d’ionisation dépend du pH du milieuLe Ks (coefficient de partage) renseigne sur la liposolubilitéHydrosolubilité : Limite la dissolution des médicaments.Masse molaire : Vitesse de transfert dépend de la masse moléculaire des particules"
      },
      {
        "questionText": "N°19 (2021 1°EMD - Q1617\nla résorption d’un médicament acide faible devient indépendante du pH du milieu quand son pKa est :",
        "options": [
          "Au-dessous de 3.5",
          "De 3.5 à 6",
          "De 6 à 8.5",
          "Au-delà de 8.5"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2020 1°EMD - Q1706\nL'absorption des médicaments :",
        "options": [
          "Concerne toutes les voies d'administration",
          "Concerne les voies d'administration indirecte",
          "N'implique que des mécanismes de diffusion actifs et passifs",
          "Est influencée par la fonction rénale du patient"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2018 1°EMD - Q2369\nLe transport passif des médicaments à travers les membranes cellulaires :",
        "options": [
          "Nécessite de l'énergie",
          "Est saturable",
          "Ne concerne que les formes non ionisées",
          "Peut être diminué par compétition"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La diffusion passive concerne les molécules liposolubles non ionisées, capables de se dissoudre dans les constituants membranaires.C'est un phénomène qui n'a pas besoin d'énergie et de transporteur, donc les phénomènes de saturation et d'inhibition compétitive sont inexistants"
      },
      {
        "questionText": "N°6 (2018 1°EMD - Q2380\nLes molécules acides faibles:",
        "options": [
          "Se trouvent l'état ionisé en milieu alcalin",
          "Se trouvent l'état ionisé en milieu acide",
          "Sont absorbés essentiellement en milieu alcalin",
          "Leur absorption est indépendante de la vidange gastrique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "En milieu basique: l’ionisation est importante, d’où une fraction ionisée plus grande, ce qui limitera le passage transmembranaire de cette substance,"
      },
      {
        "questionText": "N°7 (2018 1°EMD - Q2404\nA propos de l'absorption des médicaments par voie rectale:",
        "options": [
          "La surface d'absorption est plus importante que celle de la voie orale",
          "Elle n'est pas concernée par l'effet de premier passage hépatique",
          "La vitesse d'absorption est plus grande que celle de la voie orale",
          "Elle n'est pas recommandée pour les nourrissons"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2016 1°EMD - Q2847\nA propos du phénomène de l'absorption des médicaments:",
        "options": [
          "Il nécessite à la fois une liposolubilité et une hydrosolubilité de la molécule",
          "Il se fait essentiellement par transport actif",
          "Il se produit pour toutes les voies d’administrations",
          "Il est toujours suivis par l’effet de premier passage"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La liposolubilité est importante pour que les médicaments traversent les membranes cellulaires, tandis que l'hydrosolubilité est importante pour que les médicaments se dissolvent dans les fluides corporels"
      }
    ]
  },
  {
    "title": "Anesthésie local et pharmacologie",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°13 (2025 EMD - Q262\nA propos du mécanisme d'action des anesthésiques locaux :",
        "options": [
          "A forte concentration péri-neuronale, l'axone devient hyper-éxcitable",
          "Leur chaîne intermédiaire détermine le métabolisme de l'anesthésique",
          "Leur pôle hydrophile est un dérivé soufré responsable de la fixation aux lipides.",
          "Ils empêchent l'entrée du sodium (Na) dans le neurone.",
          "Ils diminuent l'amplitude du potentiel d'action"
        ],
        "correctOptionIndexes": [],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2025 EMD - Q288\nLes effets II aires des AL à forte dose :",
        "options": [
          "Confusion et délire",
          "Effets anticonvulsivants",
          "Coma",
          "Dépression cardiaque",
          "Hyperventilation"
        ],
        "correctOptionIndexes": [],
        "explanation": "SYMPTOMES DE L’INTOXICATION AUX ANESTHESIQUES LOCAUX :•\tLes accidents sont dus au surdosage ou passage dans la circulation sanguine.•\tEffets neurologiques : confusion, délire, convulsions, coma•\tEffets cardiovasculaires : hypotension, dépression cardiaque, choc"
      },
      {
        "questionText": "N°16 (2025 EMD - Q313\nA propos de l'élimination des anesthésiques locaux :",
        "options": [
          "Elle se fait uniquement par voie hépatique",
          "Dans 95 elle est rénale",
          "Dans 95  elle est hépatique",
          "Les amino-amides subissent une conjugaison hépatique avant élimination",
          "Une partie se fait sous forme inchangée"
        ],
        "correctOptionIndexes": [],
        "explanation": "REMEDICATION PHARMACOLOGIQUE et connaissances pharmacologiques :•\tAmino-amides : métabolisés dans le foie, une partie éliminée inchangée, la majorité (~95%) de l’élimination est hépatique."
      },
      {
        "questionText": "N°20 (2025 EMD - Q399\nConcernant le métabolisme des anesthésiques locaux :",
        "options": [
          "La toxicité est diminuée par l'ajout d' un vasoconstricteur",
          "la toxicité des AL amides est augmenté lors de l'insuffisance hépatique",
          "l'acidose augmente la diffusion",
          "L'hyperthermie ralentit le métabolisme des anesthésiques de type amide",
          "L'hyperthermie augmente le métabolisme des AL"
        ],
        "correctOptionIndexes": [],
        "explanation": ""
      }
    ]
  },
  {
    "title": "distribution des médicaments",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°6 (2025 1°EMD - Q122\nLors de la phase de distribution des médicaments, la fixation aux éléments figurés du sang englobe:",
        "options": [
          "Les formes fixées sur les hématies",
          "La fixation sur les récepteurs cellulaires des organes",
          "La liaison aux protéines plasmatiques",
          "La fixation sur les membranes des globules blancs."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A : La liaison du médicament aux éléments figurés du sang : hématies, leucocytesB : Cela fait partie de la pharmacodynamie (interaction médicament–récepteur)C : ce n’est pas un élément figuré, mais une composante du plasma"
      },
      {
        "questionText": "N°1 (2024 1°EMD - Q407\nLa fixation aux protéines plasmatiques est caractérisée par:",
        "options": [
          "La formation de complexes «< Médicament- Protéine »> actifs, diffusibles et éliminables;",
          "La formation d'une forme liée de transport ou de stockage;",
          "La liaison des médicaments exclusivement à l'albumine",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2024 1°EMD - Q420\nConcernant la diffusion tissulaire des médicaments:",
        "options": [
          "Elle est influencée par le débit sanguin irrigant les tissus;",
          "C'est le passage de la forme liée active vers les tissus;",
          "Le passage des médicaments du plasma vers les tissus se fait diffusion passive uniquement; par",
          "Elle n'est pas influencée par les caractéristiques physico-chimiques du médicament."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B:C’est la forme libre active qui diffuse dans les tissus.C:Mécanismes de passage:Transfert passifTransfert actifD:Facteurs influençant la diffusion tissulaire: Caractéristiques physico-chimique: la fraction liposoluble non ionisée est la fraction diffusible. L’etat d’ionisation dépend du pKa du médicament et du pH dans lequel il se trouve."
      },
      {
        "questionText": "N°3 (2023 1°EMD - Q715\nConcernant la diffusion tissulaire des médicaments :",
        "options": [
          "Elle est influencée par le débit sanguin irrigant les tissus",
          "C'est le passage de la forme liée active des médicaments du sang vers les tissus",
          "Le passage des médicaments du plasma vers les tissus se fait par diffusion passive uniquement",
          "Elle n'est pas influencée par les caractéristiques physico-chimiques du médicament"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : C’est la forme libre active qui diffuse dans les tissus.C : Le passage des médicaments du plasma vers les tissus se fait par diffusion passive/actif"
      },
      {
        "questionText": "N°18 (2022 1°EMD - Q1236\nquel est parmi ces facteurs celui ne limitant pas la diffusion tissulaire des médicaments :",
        "options": [
          "La vidange gastrique",
          "Fixation protéique plasmatique",
          "Caractéristiques physico-chimiques de la molécule médicamenteuse",
          "Irrigations est affinité des organes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Fixation aux protéines plasmatiques: Seule la forme libre fl est diffusible.C : Propriétés physico-chimiques de la molécule: Les molécules lipophiles et les plus petites diffusent mieux.D :Irrigation des organes Tissus richement vascularisés moyennement vascularisés  peu vascularisés"
      },
      {
        "questionText": "N°19 (2022 1°EMD - Q1255\nlors de la phase de distribution des médicaments , la forme liée aux protéines plasmatiques est la forme :",
        "options": [
          "Diffusible",
          "Pharmacologiquement active",
          "Métabolisable",
          "De stockage et transport"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La forme libre : -Forme diffusible dans les tissus et les compartiments liquidiens.-Forme pharmacologiquement active.Forme liée (Fl) : Forme de stockage et de transport dans le plasma."
      },
      {
        "questionText": "N°18 (2021 1°EMD - Q1603\nconcernant la diffusion facilitée :",
        "options": [
          "Se fait contre un gradient de concentration",
          "Nécessite une protéine de transport",
          "N’est pas saturable ni spécifique",
          "Nécessite la consommation d’énergie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les molécules se diffusent à travers la membrane plasmique grâce à des protéines membranaires"
      },
      {
        "questionText": "N°20 (2021 1°EMD - Q1641\nlors de la phase de distribution des médicaments, la forme liée aux protéine plasmatique est la forme :",
        "options": [
          "Diffusable",
          "Pharmacologiquement active",
          "De stockage et transport",
          "Métabolisable"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2020 1°EMD - Q1724\nLa Fixation des médicaments sur les éléments figures du sang concerne plus :",
        "options": [
          "Les médicaments hydrophiles",
          "Les médicaments lipophiles",
          "Les médicaments à gros poids moléculaire",
          "Les médicaments à faible fixation protéique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les médicaments lipophiles ont tendance à se fixer davantage aux éléments figurés du sang, tels que les globules rouges, en raison de leur capacité à se lier aux lipides et aux protéines présents dans ces cellules"
      },
      {
        "questionText": "N°4 (2020 1°EMD - Q1741\nLa forme libre (non fixé aux protéines plasmatiques) des médicaments est la forme:",
        "options": [
          "Diffusible dans les tissus et les compartiments liquidiens",
          "De transport dans le plasma",
          "De stockage dans le plasma",
          "Pharmacologiquement inactive"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B/C : concerne la forme liée (Fl)"
      }
    ]
  },
  {
    "title": "Introduction à la pharmacologie",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°1 (2025 1°EMD - Q12\nConcernant les médicaments appartenant à la liste I:",
        "options": [
          "Ils sont obligatoirement à prescription hospitalière",
          "Ils sont délivrés uniquement sur ordonnance",
          "Ce sont des substances toxicomanogènes",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les médicaments à prescription obligatoire sont inscrits sur deux listes distinctes : la liste I ou la liste II.Les médicaments inscrits sur la liste I ne peuvent être délivrés qu'une seule fois par le pharmacien avec la même ordonnance, sauf si le médecin mentionne expressément la possibilité d'un renouvellement.A : Les médicaments à prescription hospitalière : ils ne peuvent être prescrits qu'à l'hôpital."
      },
      {
        "questionText": "N°4 (2024 1°EMD - Q455\nLa pharmacovigilance permet:",
        "options": [
          "D'identifier les risques liés à l'utilisation d'un médicament seulement lors de développement clinique;",
          "D'évaluer le rapport bénéfice/ risque seulement lors de soumission du dossier d'enregistrement d'un médicament;",
          "De suivre la sécurité de médicament uniquement avant sa commercialisation;",
          "La réévaluation du rapport bénéfice/ risque et l'ajustement des conditions d'utilisation du médicament pendant toute la durée de sa commercialisation."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La pharmacovigilance permet le suivi d’un plus grand nombre de patients, de diverses populations et sur toute la durée de commercialisation du médicament."
      },
      {
        "questionText": "N°5 (2024 1°EMD - Q471\nConcernant la déclaration des effets indésirables, quelle est la bonne réponse:",
        "options": [
          "Seuls les professionnels de santé peuvent déclarer un effet indésirable;",
          "On ne déclare que les effets indésirables graves;",
          "La déclaration des effets indésirables suspectés est importante car elle permet une surveillance continue du rapport bénéfice/risque du médicament;",
          "En Algérie, la déclaration des effets indésirables au centre national de pharmacovigilance et de matériovigilance se fait uniquement via mail électronique."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "qui déclare?–Proprofessionnels de la santé: médecin, dentiste, pharmacien, sage femme,… Patients"
      },
      {
        "questionText": "N°18 (2024 1°EMD - Q651\nConcernant les médicaments stupéfiants:",
        "options": [
          "Ils peuvent être achetés sans ordonnance;",
          "Ce sont des médicaments non listés;",
          "Ils appartiennent à la liste I;",
          "e sont des substances toxicomanogènes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2023 1°EMD - Q799\nLa pharmacodynamie::",
        "options": [
          "Etudie le devenir des médicaments dans l'organisme",
          "Etudie l'effet des médicaments sur l'organisme",
          "N'étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l'étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La pharmacodynamie se concentre sur la façon dont les médicaments interagissent avec le corps et produisent leurs effets, y compris les mécanismes par lesquels ils agissent sur les cellules, les tissus et les organes pour atteindre leurs objectifs thérapeutiques."
      },
      {
        "questionText": "N°20 (2022 1°EMD - Q1268\nLa pharmacocinétique :",
        "options": [
          "C’est l’étude du devenir du médicament dans l’organisme en fonction",
          "du temps",
          "C’est l’étude de ce que fait le médicament à l’organisme qui le reçoit",
          "C’est l’emploi des médicaments pour traiter les maladies",
          "C’est l’étude  du prix des médicaments"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : c’est La pharmacodynamieC : c’est La pharmaco-thérapeutiqueD : c’est  La pharmaco-économie"
      },
      {
        "questionText": "N°9 (2021 1°EMD - Q1468\nla pharmacodynamie :",
        "options": [
          "Etudie le devenir des médicaments dans l’organisme",
          "Etudie l’effet des médicaments sur l’organisme",
          "N’étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l’étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2021 1°EMD - Q1471\nla pharmacodynamie :",
        "options": [
          "Etudie le devenir des médicaments dans l’organisme",
          "Etudie l’effet des médicaments sur l’organisme",
          "N’étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l’étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2021 1°EMD - Q1509\nLa pharmacogénétique :",
        "options": [
          "Peut être responsable de la variabilité pharmacocinétique à une mutation au niveau des enzymes du métabolisme",
          "Peut être responsable de la variabilité pharmacodynamique à une mutation au niveau de la cible pharmacologique",
          "Peut être responsable d’une absence de réponse au traitement (notion de non répondeurs )",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2018 2°EMD - Q2337\nLa pharmacovigilance :",
        "options": [
          "regroupe l'ensemble des activités relatives à la détection, l'évaluation prévention des risques liés aux médicaments avant et après leur mise sur le marche",
          "Les autorités compétentes après avoir reçu les notification des effets indésirables  systématiquement l'autorisation de mise sur le marché du produit (AMM)",
          "La déclaration des effets indésirables médicamenteux se limite aux médecins",
          "La notification spontanée est la méthode la plus utilisée en pharmacovigilance"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2018 1°EMD - Q2425\nLa connaissance de la cinétique d'un médicament n'apporte pas des informations permettant de :",
        "options": [
          "Choisir les voies d'administration",
          "Choisir les formes pharmaceutiques",
          "Adapter la posologie",
          "Connaitre son mode d'action"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2018 1°EMD - Q2519\nLa pharmacométrie est :",
        "options": [
          "L'étude de ce que l'organisme fait au médicament en fonction du temps",
          "L'étude de ce que le médicament fait à l'organisme qui le reçoit",
          "L'étude des influences de l'appartenance ethnique sur les propriétés pharmacologiques des médicaments",
          "L'analyse quantitative et mathématique de la pharmacodynamie"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2016 1°EMD - Q2948\nLa pharmaco-vigilance:",
        "options": [
          "Est la surveillance des médicaments avant l'obtention de l'autorisation de mise sur le marche",
          "Est la détection des effets indésirables durant les essais précliniques",
          "Est la détection des effets indésirables avant les essais précliniques",
          "Est considérée comme la phase IV des essais cliniques"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Elle concerne la surveillance des effets indésirables et la sécurité des médicaments après leur mise sur le marché."
      }
    ]
  },
  {
    "title": "Les antalgiques _ les vitamines",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°5 (2025 2°EMD DENTAIRE - Q100\nLes antalgiques sont efficaces contre :",
        "options": [
          "La composante nociceptive de la douleur.",
          "La composante neuropathique de la douleur.",
          "La composante psychogène de la douleur.",
          "Toutes les composantes de la douleur."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les analgésiques appartiennent aux médicaments du système nerveux ; modificateurs de la perception douloureuse. Ils suppriment ou atténuent la douleur par action périphérique ou centrale, sans provoquer une perte de conscience."
      },
      {
        "questionText": "N°8 (2025 2°EMD DENTAIRE - Q151\nParmi les médicaments suivants, les quels sont du palier II:",
        "options": [
          "La codéine.",
          "La tramadol.",
          "L'asprine.",
          "La morphine."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Antalgiques de palier II : Sont des médicaments ayant une activité similaire à celle de la morphine, tout en ayant une puissance antalgique moindre: Ce sont des opioïdes faiblesCodéine/ Tramadol  / DextropropoxyphèneD : la morphine : Antalgiques de palier III"
      },
      {
        "questionText": "N°9 (2025 2°EMD DENTAIRE - Q172\nAfin d'assurer une bonne efficacité d'un antalgique:",
        "options": [
          "Administrer l'antalgique à posologie suffisamment élevée.",
          "Lorsque le traitement est inefficace, passer à un produit de niveau immédiatement supérieur.",
          "Lorsque le traitement est inefficace, donner un produit du même niveau plus efficace.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Principes essentiels du traitement antalgique :•\tUne prescription antalgique ne doit jamais remplacer un geste approprié (pulpotomie, pulpectomie, extraction, etc.)•\tEspacer régulièrement les prises selon la pharmacocinétique du médicament choisi :o\tpour couvrir les 24h en cas de douleur permanenteo\tou administrer en fonction de l’apparition des prodromes en cas de douleurs paroxystiques•\tAdministrer l’antalgique à posologie suffisamment élevée pour être efficace•\tSi le traitement est inefficace à posologie maximale, ne pas prescrire un autre antalgique du même niveau, mais passer à un niveau immédiatement supérieur"
      },
      {
        "questionText": "N°10 (2024 1°EMD - Q538\nLe paracétamol est",
        "options": [
          "Un antalgique non morphinique pur",
          "Un antalgique non morphinique antipyrétique",
          "Un dérivés du para-aminophenol",
          "Un dérivés de la pyrazolone"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Est parmi les Antalgiques non morphiniques antipyrétiques"
      },
      {
        "questionText": "N°20 (2024 1°EMD - Q673\nacide acétylsalicylique est :",
        "options": [
          "Un anti inflammatoire non stéroïdien",
          "Un antalgique pur",
          "Un antalgique de deuxième intention après une extraction dentaire",
          "Un antipyrétique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2021 2°EMD - Q1395\nLe paracétamol est :",
        "options": [
          "Un antalgique non morphinique pur",
          "Un antalgique morphinique antipaytérique",
          "Un dérivée de para-aminophénol",
          "Un dérivé de l pyracolone"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Antalgiques non morphiniques antipyrétiques"
      },
      {
        "questionText": "N°18 (2019 2°EMD - Q2247\nles critères de choix d’un antalgique sont selon :",
        "options": [
          "les caractère aigu ou chronique",
          "le type du germe",
          "la durée d’action et ses effets indésirables",
          "le siège de l’inflammation"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le choix d’un antalgique se fait selon : Types de douleurs : Par excès de nociception et Neurogène Intensité de la douleur Caractère aigu ou chronique Effets indésirables, contre-indication, Risque d’accoutumance"
      },
      {
        "questionText": "N°20 (2019 2°EMD - Q2262\nquel antalgique peut-on prescrire pour le femme enceinte ou allaitante :",
        "options": [
          "tramadol",
          "paraccétamol",
          "paracétamol codéiné",
          "paracétamol caféiné"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le paraccétamol est particulièrement indiqué chez la femme enceinte ou allaitante."
      },
      {
        "questionText": "N°5 (2018 2°EMD - Q2366\nLes antalgiques non-opioïdes s’opposent à :",
        "options": [
          "La synthèse de l’acide arachidonique qui sensibilise les nocicepteurs périphériques",
          "La synthèse des prostaglandines qui sensibilisent les nocicepteurs périphériques",
          "L’action de la lipocortine",
          "L’action de toutes les substances algogénes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ils s’opposent à :La synthèse des prostaglandines qui sensibilisent les nocicepteurs périphériquesL’action d’autres substances algogènes (histamine, bradykinine, etc.).Ce qui va entrainer une diminution de la sensibilisation des fibres nerveuses aux médiateurs de la douleur"
      },
      {
        "questionText": "N°6 (2018 2°EMD - Q2385\nLe paracétamol est :",
        "options": [
          "Un antalgique non morphinique pur",
          "Un antalgique morphinique antipyrétique",
          "In dérivés du para-aminophénol",
          "Un dérivés de la pyrazolone"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Les antibiotiques",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°1 (2025 2°EMD DENTAIRE - Q15\nLes règles de prescriptions des antibiotiques incluent:",
        "options": [
          "La durée du traitement.",
          "La diffusion de l'antibiotique dans le site infecté.",
          "Le spectre d'action de l'antibiotique.",
          "L'origine de l'antibiotique."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La prescription est orientée par les caractéristiques pharmacologiques des molécules antibiotiques.Leurs différentes caractéristiques permettent d’orienter la prescription d’une spécialité plutôt qu’une autre.Il faut prendre en compte le spectre moyen d’activitéLa diffusion sanguine et/ou tissulaire,La disponibilité par rapport à la dose initiale (dans le sang et les tissus en fonction de l’effet souhaité),la tolérance (préférer une molécule qui présente le moins d’effets secondaires) et le coût du traitement."
      },
      {
        "questionText": "N°2 (2025 2°EMD DENTAIRE - Q41\nUne association d'antibiotiques est indiquée pour :",
        "options": [
          "Couvrir une infection pluri-microbienne.",
          "Tester les antibiotiques utilisés dans l'association.",
          "Elargir le spectre d'activité.",
          "Infections sévères."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Intérêt des associations:- élargir le spectre microbien de chaque ATB ;- prescrire des doses faibles de chaque ATB ;-exploiter la synergie qui découle de cette association."
      },
      {
        "questionText": "N°4 (2025 2°EMD - Q75\nConcernant le métronidazole, quelle est l'affirmation fausse ?",
        "options": [
          "C'est un inhibiteur du CYP2C9;",
          "il y a un risque de thrombose lors de son association aux anticoagulants comme les AVK;",
          "Il peut être associé à la spiramycine;",
          "Il possède une bonne diffusion au niveau du tissu buccodentaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "B : risque hémorragique lors de l’association avec les anticoagulants oraux (AVK)"
      },
      {
        "questionText": "N°9 (2025 2°EMD - Q173\nChez un patient à haut risque d'endocardite infectieuse, quand faut-il instaurer une antibioprophylaxie?",
        "options": [
          "Pour traiter une infection avec fièvre, trismus ou œdème persistant;",
          "Lors d'un simple examen clinique :",
          "Avant tout acte dentaire invasif impliquant une manipulation de la gencive;",
          "Uniquement en cas de fièvre."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : c’est un traitement curatif (infection déjà installée)C : L’antibioprophylaxie est indiquée chez les patients à haut risque d’endocardite infectieuse avant tout acte invasif : détartrage, extraction, chirurgie parodontale… impliquant une manipulation de la gencive ou de la région péri-apicale"
      },
      {
        "questionText": "N°10 (2025 2°EMD - Q193\nQuelle est l'antibiothérapie de première intention recommandée chez la femme enceinte ?",
        "options": [
          "Clindamycine 600 mg, 1h avant l'intervention;",
          "Amoxicilline 2 g, 1h avant l'intervention;",
          "Azithromycine 500 mg, le jour de l'intervention;",
          "Aucune antibioprophylaxie n'est possible pendant la grossesse."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A/C : sont utilisées en cas d’allergie à la pénicillineB : « L’amoxicilline reste l’antibiotique de première intention, y compris chez la femme enceinte (sauf allergie). »"
      },
      {
        "questionText": "N°11 (2025 2°EMD - Q224\nQuelle est la contre-indication formelle à l'utilisation des cyclines?",
        "options": [
          "Infection urinaire non compliquée;",
          "Enfant de moins de 8 ans :",
          "Allergie aux céphalosporines:",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "« Les cyclines sont formellement contre-indiquées chez l’enfant de moins de 8 ans et chez la femme enceinte, car elles se fixent sur l’émail et l’os → coloration définitive des dents + retard de croissance osseuse. »﻿"
      },
      {
        "questionText": "N°5 (2024 2°EMD - Q472\nConcernant le métronidazole :",
        "options": [
          "C'est un antiparasitaire efficace contre les bactéries aérobies strictes",
          "C'est un inducteur du CYP2C9",
          "Il n'est jamais utilisé en monothérapie",
          "Il est associé à la spiramycine afin de réduire la posologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2024 1°EMD - Q635\nL'association d'antibiotiques:",
        "options": [
          "Est privilégiée en première intention",
          "Permet l'obtention d'un spectre antibactérien plus large",
          "A pour but la prévention de la sélection de germes résistants",
          "Doit avoir comme objectif un effet antagoniste limitant les risques d'effets indésirables de chaque médicament"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2024 1°EMD - Q648\nParmi les antibiotiques suivants, quels sont ceux qui agissent par perturbation de la synthèse de la paroi bactérienne?",
        "options": [
          "Les aminopénicillines",
          "Les céphalosporines",
          "Les aminosides",
          "Les fluoroquinolones"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2023 2°EMD - Q723\nConcernant le patient souffrant de mycoses buccale et porteur de prothèse :",
        "options": [
          "Il doit nettoyer sa prothèse au complet avec un dérivé azolé comme le miconazole ou avec de l'amphotéricine B",
          "Il doit appliquer l'antifongique par voie topique sur les tissus buccaux infectés juste avant les repas",
          "Il doit enlever sa prothèse avant l'application de l'antifongique sur les lésions buccales",
          "Réponse a+b"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2023 2°EMD - Q732\nConcernant le métronidazole: :",
        "options": [
          "Il n'entraine pas de troubles digestifs",
          "C'est un inhibiteur du CYP 2C9 d'ou le risque d'hémorragies en cas d'association aux AVK",
          "C'est un inducteur du CYP 2C9 d'ou le risque de thromboses en cas d'association aux AVK",
          "Il agit uniquement sur les bactéries aérobies"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2023 2°EMD - Q854\nConcernant les antibiotiques utilisés en odontologie :",
        "options": [
          "L'antibiotique de choix utilisé en première intention en odontologie est l'ampicilline",
          "L'antibiotique de choix utilisé en première intention en odontologie est l'amoxicilline",
          "Les macrolides sont des antibiotiques de première intention",
          "Les beta-lactamines doivent être utilisés pendant une durée de 3 jours"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2023 2°EMD - Q869\nConcernant les effets indésirables retrouvés avec les antibiotiques :",
        "options": [
          "Les cyclines entrainent une dyschromie dentaire",
          "Les allergies ne sont pas retrouvées avec les pénicillines",
          "Les macrolides peuvent entrainer une hypoplasie de l'émail chez les enfants de moins de 8 ans",
          "Toutes les réponses précédentes sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2023 2°EMD - Q889\nL'antibiothérapie prophylactique est:",
        "options": [
          "Indiquée chez tous les patients qui doivent subir un acte dentaire invasif",
          "Administrée par voie locale uniquement",
          "Recommandée chez les patients recevant un traitement par les biphosphates par voie orale",
          "Indiquée chez les patients transplantés avant tout acte invasif"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2023 2°EMD - Q900\nL'antibiothérapie curative en odontologie",
        "options": [
          "Est instaurée systématiquement devant toute infection endodontique",
          "Est indiquée chez tous les patients ayant un abcès apical aigu",
          "N'est pas indiquée chez les patients ayant un abcès apical chronique",
          "Est indiquée en cas d'infections évolutives"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2023 2°EMD - Q919\nConcernant le traitement par la doxycyline en odontologie:",
        "options": [
          "C'est un antibiotique utilisé par voie locale en première intention",
          "Elle est indiquée dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Elle est indiquée pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "C'est un antibiotique de la classe des aminosides indiqué dans les infections sévères"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2022 2°EMD - Q1032\nConcernant la prescription d'un antibiotique en odontologie :",
        "options": [
          "Elle ne peut se faire qu'après l'identification du germe en cause",
          "Les antibiotiques prescrits en préventif différent de ceux utilisés dans le traitement curatif.",
          "Les antibiotiques utilisés en première intention appartiennent à la famille des bétalactamines",
          "La doxycycline est prescrite en seconde intention lors de la prévention du risque d'endocardite infectieuse"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "D : utilisé en cas d’Allergie à la pénicilline"
      },
      {
        "questionText": "N°4 (2022 2°EMD - Q1060\nCochez la réponse fausse concernant les caractéristiques des antibiotiques prescrits en odontologie:",
        "options": [
          "Les cyclines peuvent entrainer une dyschromie dentaire chez l'enfant de moins de 8 ans",
          "Tous les antibiotiques utilisés peuvent entrainer des manifestations allergiques",
          "Les macrolides sont prescrits en seconde intention en cas d'allergie aux béta-lactamines",
          "La doxycycline a plusieurs indications en odontologie."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les cyclines trouvent une seule indication en odontologie. La doxycycline est prescrite à une posologie de 200mg/j en une prise unique pendant 14 jours dans le traitement de la parodontite agressive juvénile localisée"
      },
      {
        "questionText": "N°5 (2022 2°EMD - Q1071\nConcernant les modalités de prise en charge odontologique des personnes à risque d'endocardite infectieuses:",
        "options": [
          "Un suivi bucco-dentaire est préconisé tous les 12 mois",
          "La mise en place d'une antibioprophylaxie suite à tout acte invasif",
          "L'instauration de l'antibiothérapie préventive se fait 7 jours avant l'intervention",
          "L'administration d'antibiotiques se fait par voie locale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2022 2°EMD - Q1085\nConcernant la prescription des antibiotiques dans le but de traiter une infection en odontologie:",
        "options": [
          "L'amoxicilline est prescrite en première intention à cause de 2g/j pendant trois jours chez le patient sain",
          "La doxicyline pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "La doxicyline pendant 14 jours dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Les antibiotiques de la classe des aminosides sont prescrits pour les infections sévères en milieu hospitalier"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°21 (2022 Résidanat - Q1273\nLes antibiotiques de choix de première intention en médecine dentaire sont :",
        "options": [
          "Les penicillines M",
          "Les Pénicillines A",
          "Les Nitri-imidazoles",
          "La Pénicilline G",
          "Les Tétracyclines"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A: Pénicillines M ou pénicillines anti-staphylocoquesb (oxacilline et cloxacilline):ATB résistants aux pénicillinases des staphylocoques et autres souches, spectre d’actionétroit(staphylocoque et certains streptocoques)B: Pénicillines du groupe A ou aminopénicillines :D’administration orale ou  parentérale, elles sont très efficaces, indiquées pour toutes les infections à cocci  pyogènes (dont les infections streptococciques de la sphère ORL et de leurs complications)C:Les Nitro-Imidazolés (métronidazole : Flagyl ®):Leur mode d’action particulier (réduction intracellulaire en produits cytotoxiques) explique leur spectre d’activité original (germes anaérobies strictes et protozoaires).D:Pénicilline G retard (benzathine pénicilline: extencilline®):Libération lente  par hydrolyse de la pénicilline G, ceci assure des taux sériques efficaces sur les  streptocoques A avec des injections espacées, est indiquée pour prévenir le RAA au cours des angines streptococciquesE:Tétracyclines:ATB à spectre très large, bactériostatiques en se fixant sur les ribosomes bactériens, inhibant  la synthèse des protéines. Des échecs thérapeutiques causés par le phénomène de résistance sont de plus en plus fréquents. Bonne diffusion tissulaire notamment dans les tissus enintense activité métabolique particulièrement les germes dentaires, ceci va engendrer une dysplasie de l’émail par fixation de la molécule sur les dents immatures (ce qui contre-indique leur prescription chez la femme enceinte et l’enfant de moins de 7ans)."
      },
      {
        "questionText": "N°22 (2022 Résidanat - Q1275\nLes modalités de prescription de l'antibiothérapie curative en ambulatoire chez l'adulte sont : 1- L'Amoxicilline 6 g par jour en 4 prises pendant 7 jours 2- L'Amoxicilline 2 à 3 g par jour en 2 à 3 prises pendant 7 jours 3- 'Azithromycine 300 mg par jour en une prise pendant 3 jours 4- La Spiramycine 6 à 9 MUI par jour en 2 à 3 prises pendant 7 jours 5- La Clindamycine 600 mg par jour en 4 prises pendant 7 jours",
        "options": [
          "(2,3)",
          "(4,5)",
          "(2,4)",
          "(3,5)",
          "(1.2)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "1:L’Amoxicilline2 g par jour en 2 prises pendant 7 jours,3:l’Azithromycine500 mg par jour en une prise pendant 3 jours,5: laClindamycine1200 mg par jour en 2 prises pendant 7 jours."
      },
      {
        "questionText": "N°2 (2021 2°EMD - Q1356\nConcernant le métronidazole:",
        "options": [
          "C'est un antiparasitaire efficace contre les bactéries aérobies strictes",
          "C'est un antiviral efficace contre les bactéries anaérobies strictes",
          "Il diffuse très peu dans le tissu bucco-dentaire",
          "Il est associé à la spiramycine afin de réduire la pathologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2021 2°EMD - Q1409\nConcernant l'antibiothérapie en odontologie :",
        "options": [
          "L'antibiothérapie par voie locale n'est pas indiquée en odontologie",
          "Lors d'une germectomie chez un patient immunodéprimé, une antibioprophylaxie n'est pas systématique",
          "L'antibiothérapie curative doit être différer du traitement chirurgical du foyer infectieux",
          "L'antibiotique doit être choisi selon la liaison aux protéines plasmatiques"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L’antibiothérapie par voie locale n’est pas indiquée en odontologie >>> faiblesse du niveau de preuve en termes de bénéfice thérapeutique + sécurité d’emploi problématique par risque de sélection de mutants résistants"
      },
      {
        "questionText": "N°5 (2021 2°EMD - Q1412\nLes propriétés pharmacologiques des nitro imédazoles sont :",
        "options": [
          "Une résorption digestive lente est importante",
          "Une mauvaise diffusion tissulaire",
          "Une demi vie de 4 à 6 heures",
          "Leur spectre d’activité originale : germes anaérobie strictes et protozoaires"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Leur mode d’action particulier (réduction intracellulaire en produits cytotoxiques) explique leur spectre d’activité original (germes anaérobies strictes et protozoaires).une résorption digestive rapide et importante, une excellente diffusion tissulaire, une élimination urinaire et biliaire, une demi-vie de 8 à 12heures."
      },
      {
        "questionText": "N°6 (2021 2°EMD - Q1422\nLes antibiotiques sont :",
        "options": [
          "Des médicaments utilisés pour traiter toutes les infections",
          "Des médicaments active sur la virus",
          "Des médicament inactifs sur les bactéries",
          "Des substances d’origine biologique hémi-synthétique ou synthétique"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "traiter les infections bactériennes.Les antibiotiques ne sont pas efficaces contre d'autres microbes comme les virus ou les champignons."
      },
      {
        "questionText": "N°6 (2021 2°EMD - Q1426\nL'antibiothérapie prophylactique en odontologie est:",
        "options": [
          "Indiquée chez toute personne qui doit subir un acte dentaire invasif",
          "Prescrite pendant une longue durée",
          "Recommandée chez le patient à haut risque d'endocardite infectieuse",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L’antibioprophylaxie: consiste en l’administration d’un ATB dans l’objectif de prévenir le développement d’une infection locale, générale ou à distance.Champ d’indication et durée de prescription réduits."
      },
      {
        "questionText": "N°7 (2021 2°EMD - Q1434\nConcernant l'antibiotique utilisés en odontologie:",
        "options": [
          "Les macrolides provoquent une dyschromie dentaire chez les enfants de moins de 8 ans",
          "L'amoxicilline est associée à l'acide clavulanique pour avoir action sur les bactéries de béta\u0002lactamases",
          "Les cyclines sont toujours prescrites en deuxième intention après les pénicillines",
          "Les bêta-lactamines doivent être utilisés pendant une durée de 3 jours"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Amoxicilline+ Acide clavukanique: utilisés en deuxieme intention afin d’avoir une action sur les bactéries productrices de bêta-lactamases"
      },
      {
        "questionText": "N°7 (2021 2°EMD - Q1440\nLes antibiotiques bactériostatiques :",
        "options": [
          "Perturbent en inhibent la synthèse de la paroi bactérienne",
          "Altèrent la perméabilité de la membrane cytoplasmique",
          "Perturbent la synthèse protéique au niveau des ribosomes",
          "Inhibent la transcription de l’ADN en ARN"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les macrolides et les cyclines perturbent la synthèse protéique au niveau des ribosomes.ils bloquent temporairement la multiplication microbienne,"
      },
      {
        "questionText": "N°8 (2021 2°EMD - Q1450\nConcernant la prescription d'une antibiothérapie curative en odontologie:",
        "options": [
          "Les macrolides sont utilisés en première intention",
          "La doxycyline est utilisée dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "La doxycyline est prescrite pendant 14 jours dans la parodontite agressive localisée juvénile",
          "Les antibiotiques de la classe des aminosides sont réservés aux infections sévères en milieu hospitalier"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2021 2°EMD - Q1459\nLes antibiotiques de choix de première intention en médecine dentaire :",
        "options": [
          "La pénicillines A",
          "Les nitro imidazoles",
          "Pénicillines G",
          "Les tétracyclines"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Ou aminopénicillines : D’administration orale ou parentérale, elles sont très efficaces, indiquées pour toutes les infections à cocci pyogènes comme L’Amoxicilline"
      },
      {
        "questionText": "N°1 (2020 2°EMD - Q1695\npour traiter les infections à point de départ bucco-dentaire, le choix se portera vers :",
        "options": [
          "les pénicillines du groupe G",
          "les pénicillines du groupes A",
          "les pénicillines V",
          "la bicnlinocilline"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2020 2°EMD - Q1862\nLors d'une infection bactérienne, la prescription d'antibiotiques:",
        "options": [
          "Repose sur l'identification du germe en cause quel que soit la gravité de l'infection",
          "Est possible même si l'antibiotique ne diffuse pas dans le tissu infecté",
          "Doit tenir compte de l'état physiopathologique du patient",
          "La prescription de deux antibiotiques est obligatoire dès le début de l'infection pour assurer une meilleure efficacité"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le traitement de deuxième intention est envisagé en casBd’échec du traitement de première intention."
      },
      {
        "questionText": "N°14 (2020 2°EMD - Q1876\nConcernant les antibiotiques utiles en odontologie:",
        "options": [
          "Les pénicillines associées aux aminosides sont utilisées en première intention",
          "L'amoxicilline est associée à l'acide clavulanique pour avoir une action sur les bactéries productrices de béta-lactamases",
          "Les macrolides provoquent une dyschromie dentaire chez les enfants de moins de 8 ans",
          "Les cyclines sont toujours prescrites en deuxième intention après les pénicillines"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2020 2°EMD - Q1903\nLe traitement des infections odontologiques se fait par:",
        "options": [
          "L'amoxicilline en première intention à dose de 2g/j pendant trois jours pour un patient sain",
          "La doxycycline pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "La doxycytine pendant 14 jours dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Des antibiotiques de la classe des aminosides pour les infections sévères en milieu hospitalier"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2020 2°EMD - Q1910\nToutes les propositions suivantes sont des principes de prescription des antibiotiques sauf une:",
        "options": [
          "Choisir l'antibiotique efficace avec un spectre le plus large possible",
          "Choisir l'antibiotique efficace avec un spectre le plus étroit possible",
          "Choisir l'antibiotique selon la sévérité de l'infection et sa localisation",
          "Respecter la posologie de l'antibiotiques dose et durée du traitement"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2020 2°EMD - Q1929\nConcernant l'association spiramycine-métronidazole dans le traitement des infections buccodentaires:",
        "options": [
          "Le métronidazole est utilisé pour son action sur les aérobies",
          "La spiramycine est utilisée pour son action sur les anaérobies",
          "L'association spiramycine/métronidazole permet d'augmenter la posologie prescrite",
          "L'association spiramycine/métronidazole permet d'élargir le spectre d'action"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2019 2°EMD - Q2000\nParmi les antibiotiques suivants, lequel n'est pas prescrit en odontologie à cause de son spectre d'action étroit:",
        "options": [
          "La pénicilline A",
          "La pénicilline G",
          "La doxycycline",
          "La pristiniamycine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pénicilline G et V sensibles aux pénicillinase : Activité sur : Bactéries Gram+, Cocci Gram-, Treponème , R staph producteur pénicillinase : spectre étroit"
      },
      {
        "questionText": "N°10 (2019 2°EMD - Q2131\nL'antibiothérapie en odontologie:",
        "options": [
          "Est une alternative aux règles d'hygiènes bucco-dentaires",
          "Est toujours instaurée après les résultats de l'antibiogramme",
          "A titre prophylactique, elle nécessite une prise unique d'Antibiotique qu'heure avant le reste thérapeutique",
          "À titre curatif, elle est instaurée par voie locale juste après le geste thérapeutique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2019 2°EMD - Q2172\nL’Augmentin est :",
        "options": [
          "Est l’association : amoxicilline – acide clavulanique",
          "Est l’association : amoxicilline – métrnidazole",
          "Est très efficace, indiquée pour toutes les infections oro- faciales",
          "Est in ATB à libération prolongée"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Amoxicilline-acide clavulanique (augmentin) : l’acide clavulanique est un puissant inhibiteur des pénicillinases, cette association permet d’élargir le spectre d’action aux bactérires résistantes productrices de pénicillinases."
      },
      {
        "questionText": "N°14 (2019 2°EMD - Q2183\nDans ces cas, l’antibiothérapie préventive s’impose :",
        "options": [
          "Chez les immunodéprimés",
          "Chez les cardiopathes à risque syncopal",
          "Chez les malades sous corticoïdes à long cours",
          "Chez les hypertendues non équilibré"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2019 2°EMD - Q2190\nDans ces cas, l’antibiothérapie préventive s’impose",
        "options": [
          "Chez les immunodéprimés",
          "Chez les cardiopathes à risque syncopal",
          "Chez les malades sous corticoïdes à long cours",
          "Chez les hypertendues non équilibré"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Antibiothérapie préventive :Est indispensable s’il existe une tare qui affaiblit les défenses naturelles de l’organismeB : Chez les cardiopathes à risque infectieux"
      },
      {
        "questionText": "N°1 (2018 3°EMD - Q2291\nEn odontologie, l'antibioprophylaxie:",
        "options": [
          "Permet de traiter une infection avérée",
          "Nécessite une prise unique d'antibiotique, un jour avant le geste clinique",
          "Pour la population générale, la plupart des actes invasifs ne nécessitent pas d'antibiothérapie prophylactique",
          "Doit être instaurée pour tout acte non invasif; chez un patient à risque d'endocardite infectieuse"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2018 3°EMD - Q2310\nUne antibiothérapie curative idéale:",
        "options": [
          "Ne doit être instaurée qu'après prélèvement bactériologique et antibiogramme",
          "En cas d'allergie aux bêtalactamines, le métronidazole est utilisé",
          "En cas d'insuffisance rénale; les tétracyclines peuvent être prescrits",
          "De deuxième intention, est l'association amoxicilline- acide clavulanique"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2018 2°EMD - Q2316\nLa posologie d’un antibiotique prescrit en ambulatoire est diminuée dans les cas suivants :",
        "options": [
          "Déficience de terrain",
          "Foyers infectieux osseux bien enkystés",
          "Insuffisance hépatique",
          "Endocardite d’Osler"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'insuffisance hépatique, qui représente une diminution de la fonction hépatique, peut affecter le métabolisme des médicaments, y compris des antibiotiques. Lorsque le foie ne fonctionne pas correctement, cela peut entraîner une accumulation de médicaments dans le corps, augmentant ainsi le risque d'effets indésirables."
      },
      {
        "questionText": "N°19 (2018 2°EMD - Q2588\nLe rythme d’administration d’un antibiotique dépend :",
        "options": [
          "De la gravité de l’infection et de la pharmacocinétique de la molécule choisie",
          "Du caractère pathogène de certain germes",
          "De la nature du terrain",
          "Du spectre de l’antibiotique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2017 2°EMD - Q2651\nLes Nitro-imidazolés (métronidazole) sont:",
        "options": [
          "Des antibiotiques et antiparasitaires à lourds effets secondaires",
          "Indiqués dans les infections à bactéries aéro-anaérobies et dans l'amibiase",
          "Contre indiqués en cas d'hypersensibilité ou d'association aux antivitamines K, rifampicine, fluorouracile et anticonvulsivants inducteurs enzymatiques;",
          "Activés par une réduction intracellulaire donnant des produits cytotoxiques qui entraînent la mort de la bactérie ou du protozoaire."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2017 2°EMD - Q2740\nCertains facteurs pharmacocinétiques et biologiques vont guider la décision de l'adaptation posologique, parmi lesquels:",
        "options": [
          "Les propriétés physico-chimiques du médicament",
          "La demi-vie d'absorption du médicament",
          "La concentration minimale inhibitrice C.M.I de l'antibiotique prescrit",
          "La clairance de la créatinine"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2017 2°EMD - Q2757\nAu cours des infections buccodentaires de sévérité moyenne, les antibiotiques recommandés en première intention sont:",
        "options": [
          "Les pénicillines A (amoxicilline)",
          "Les macrolides en cas d'allergie aux bêta-lactamines",
          "La doxycyclines",
          "Les céphalosporines"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2017 2°EMD - Q2767\nParmi les propositions suivantes, concernant l'antibiothérapie, indiquez quelles sont celles qui sont vraies :",
        "options": [
          "L'antibiothérapie prophylactique est indiquée avant tout acte invasif ou non invasif",
          "L'antibiothérapie prophylactique est recommandée chez le patient à haut risque d'endocardite infectieuse, en cas d'effraction de la muqueuse orale",
          "L'antibiothérapie curative est indiquée en présence d'une infection accompagnée de fièvre, d'adénopathie ou d'œdème en complément du traitement local",
          "L'antibiothérapie curative seule sans traitement local est recommandée en cas de suspension d'une infection bactérienne."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2016 2°EMD - Q2886\nQuels sont les antibiotiques agissants sur la synthèse des protéines et bactériostatiques:",
        "options": [
          "Lactamines Macrolides et apparentés et Chloramphenicol",
          "Macrolides et apparentés, Chloramphénicol, Aminosides et Tétracycline",
          "Fluoroquinolones, Aminosides et Tétracyclines",
          "Macrolides et apparentes, Chloramphénicol et Tétracyclines."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2016 2°EMD - Q2891\nL'antibioprophylaxie en odontologie est indiquée lors de:",
        "options": [
          "Actes non invasifs chez les patients à haut risque",
          "Actes invasifs chez les patients à haut risque d'endocardite infectieuse",
          "Actes non invasifs avec prise unique d'antibiotique une heure avant le geste clinique",
          "Actes invasifs avec deux prises d'antibiotique deux heures avant le geste clinique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2016 2°EMD - Q2902\nLes macrolides et apparentés sont prescrits en deuxième intention dans les infections odontologiques car:",
        "options": [
          "Leurs spectre d'action est étroit et ils présentent de nombreuses interactions médicamenteuses",
          "Ils présentent une excellente diffusion amygdalienne et dans la cavité buccale",
          "Ils sont de puissant inhibiteur enzymatique",
          "L'azithromycine présente une durée de traitement de 3 jours"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2016 2°EMD - Q2906\nLes effets secondaires non communs aux antibiotiques utilisés en odontologie sont:",
        "options": [
          "Les affections hématologiques",
          "Les troubles gastro-intestinaux",
          "Les troubles cutanéomuqueux",
          "Les réactions allergiques."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2016 2°EMD - Q2914\nL'association spiramycine/métronidazole:",
        "options": [
          "Faite d'un macrolide bactéricide buccodentaire et d'un antiparasitaire antimycosique actif sur les bactéries anaérobies strictes du groupe des 5-nitroimidazolés",
          "Permet de réduire la posologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice",
          "Indiquée dans le traitement des infections aiguës et chroniques ou récidivantes telles que cellulites, parodontites et dans la prévention des infections postopératoires",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2016 2°EMD - Q2918\nL'amoxicilline indiquée en première intention dans les infections buccodentaires est contre indiquée dans le cas de:",
        "options": [
          "Insuffisance hépatique grave et association au Méthotrexate",
          "Allergies et de mononucléose infectieuse.",
          "Allergie, grossesse et allaitement",
          "Hypersensibilité allergique et chez l'enfant de moins de 8 ans."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°22 (2016 Résidanat - Q2973\nParmi les propositions suivantes laquelle ne s'applique pas à l'amoxicilline",
        "options": [
          "C'est un macrolide",
          "Elle est active par voie orale",
          "Elle peut provoquer des réactions allergiques",
          "Elle peut être administrée chez l'enfant",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "a : c'est un Bêta-lactamineMode d’action et spectre antibactérien :L’amoxicilline (Amoxicilline®) agit de façon bactéricide en inhibant la synthèse du peptidoglycane de la paroi bactérienne.Le spectre d’activité de l’amoxicilline est très large et comprend les coccis à Gram positif et à Gram négatif, les bacilles à Gram négatif, les anaérobies à Gram positif et certains Spirochètes.- Usage thérapeutique : L’amoxicilline est l’antibiotique de choix en première intention à chaque fois qu’une indication d’antibiothérapie ou d’antibioprophylaxie est posée et qu’il n’y a pas de contre-indication à sa prescription.- Propriétés pharmacocinétiques :L’amoxicilline possède une bonne diffusion dans les tissus infectés, sa biodisponibilité est d’environ 75% et sa demi-vie de 1h.Étant donné la demi-vie assez courte de l’amoxicilline, la dose quotidienne devra être fractionnée en 2 prises minimum, voir 3 prises.- Effets indésirables et contre-indications :Il est à noter que cette classe d’antibiotiques présente peu d’effets indésirables et contre-indications.L’allergie aux bêtalactamines est une contre-indication absolue. L’association avec des anti-vitamines K (risque de potentialisation des effets de ces derniers), du méthotrexate ou avec l’allopurinol (traitement contre la goutte) peut entrainer des interactions médicamenteuses.Une insuffisance rénale avec une clairance rénale sous les 50 ml/min peut amener à revoir la posologie."
      }
    ]
  },
  {
    "title": "les antiseptiques_ antifongique _ antiviraux",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°3 (2025 2°EMD - Q51\nQuel médicament peut être utilisé pour traiter les lésions fongiques étendues buccales chez le patient immunodéprimé?",
        "options": [
          "Miconazole gel 2%,",
          "Fluconazole gélule 150 mg;",
          "Métronidazole comprimé 500 mg.",
          "Aciclovir crème 5%."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "« Traitement systémique :Lésions muqueuses étendues, inaccessibles au traitement local, qui surviennent dans un contexte de déficit immunitaire génétique ou acquis.Exemple : fluconazole : Triflucan®, de 50 à 100 mg par jour pendant 1 à 2 semaines. »"
      },
      {
        "questionText": "N°15 (2025 3°EMD DENTAIRE - Q305\nConcernant les principes généraux d'utilisation des antiseptiques :",
        "options": [
          "L'utilisation doit être précise et illimitée dans le temps;",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés;",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale;",
          "On peut mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : L’utilisation thérapeutique des antiseptiques doit être précise et limitée dans le temps.B : distinction : antiseptiques = tissus vivants, désinfectants = milieux inertes.D : Il ne faut pas mélanger ou employer successivement deux antiseptiques différents en raison du risque d’inactivation ou de toxicité."
      },
      {
        "questionText": "N°16 (2025 3°EMD DENTAIRE - Q314\nLes ammoniums quaternaires sont :",
        "options": [
          "Des antiseptiques majeurs;",
          "Des agents antiseptiques inhibiteurs de la plaque de catégorie B;",
          "Des antiseptiques ne présentant aucun effet rémanent;",
          "Des antiseptiques qui peuvent être conservés au maximum 30 jours après ouverture."
        ],
        "correctOptionIndexes": [],
        "explanation": "A : es antiseptiques majeurs sont surtout les biguanides (chlorhexidine) et les dérivés iodés/halogénés.B : Catégorie B – agents antiseptiques inhibiteurs de la plaque : ammoniums quaternaires, phénols (listérine, triclosan). »C : ils présentent un effet rémanent brefD : les solutions aqueuses se contaminent très facilement → bien conserver au maximum 8 jours après ouverture."
      },
      {
        "questionText": "N°17 (2025 3°EMD DENTAIRE - Q330\nLes biguanides ne sont pas des :",
        "options": [
          "Antiseptiques majeurs;",
          "Antiseptiques de catégorie A;",
          "Agents antiseptiques antiplaque;",
          "Bactéricides à spectre étroit."
        ],
        "correctOptionIndexes": [],
        "explanation": "A : Les antiseptiques majeurs, bactéricides à large spectre, sont surtout représentés par les biguanides et les dérivés iodés ou chlorésB : catégorie A – agents antiseptiques antiplaque : biguanides.C : Ils inhibent la formation du biofilm et diminuent par conséquent le risque d’apparition de maladies parodontales et carieusesD : e sont des bactéricides à large spectre,"
      },
      {
        "questionText": "N°4 (2024 2°EMD - Q456\nConcernant la prise en charge des mycoses buccales non étendues:",
        "options": [
          "Les antifongiques par voie systémique sont prescrits en première intention",
          "La désinfection des prothèses dentaires se fait avec de la bétadine rouge",
          "Il ne faut pas consommer d'aliment ou de liquide dans les 30 minutes suivant l'application d'un gel antifongique",
          "L'utilisation du métronidazole en gargarisme est préconisée en cas d'échec thérapeutique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A:Les antifongiques par voie locale sont prescrits en première intentionB:Patients portant une prothèse dentaire : Nettoyer la prothèse et éviter de la porter la nuit. Faire tremper la prothèse dans une solution diluée d'eau de javel ou de gluconate de chlorhexidine 0,12 % . Bien rincer avant de porter la prothèse dentaire."
      },
      {
        "questionText": "N°17 (2024 2°EMD - Q629\nParmi ces propositions, laquelle ne constitue pas une différence entre un antiseptique et un antibiotique:",
        "options": [
          "Ils ont une action non spécifique",
          "Ils ont un effet local",
          "Ils sont utilisés à visée préventive",
          "Permettent au niveau des tissus vivants d'inhiber la croissance ou de tuer les micro organismes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A ;  Les antiseptiques se distinguent des antibiotiques par des mécanismes d’action peu spécifiques, voire non spécifiques.C: Opération au résultat momentané"
      },
      {
        "questionText": "N°18 (2024 2°EMD - Q638\nQuelle est l'élément qui n'est pas inhibiteur des antiseptiques Biguanides:",
        "options": [
          "Matières organiques",
          "Savons",
          "Antiseptiques Ammoniums Quaternaires",
          "Antiseptiques Dérivés Halogénés"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2023 2°EMD - Q974\nConcernant les principes d'utilisation des antiseptiques :",
        "options": [
          "L'utilisation thérapeutique doit être précise",
          "L'utilisation thérapeutique peut être illimitée",
          "Ils doivent être utilisés sur les tissus vivants et propres",
          "Nécessite le repérage des incompatibilités et interaction des différents produits"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2023 2°EMD - Q994\nLes biguanides ne sont pas des :",
        "options": [
          "Antiseptiques majeurs",
          "Antiseptiques de catégorie A",
          "Agents antiseptiques antiplaque",
          "Bactéricides à spectre étroit"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2022 2°EMD - Q1182\nLe patient porteur de prothèse dentaire et atteint de mycose buccale ne doit pas:",
        "options": [
          "Enlever la prothèse avant l'administration du traitement local",
          "Appliquer une mince couche sur le coté de la prothèse en contact avec les tissus buccaux",
          "Nettoyer la prothèse avec de gluconate de Chlorhexidine",
          "Boire de l'eau immédiatement après avoir appliqué miconazole gel sur la muqueuse buccale infectée"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Prise en charge des patients porteurs de prothèse dentaire et atteints de candidose buccale•\tAvant application du traitement local antifongique :o\tEnlever la prothèse.o\tAppliquer une mince couche du gel antifongique (ex. miconazole) sur le côté de la prothèse en contact avec les tissus buccaux.o\tAppliquer également sur la muqueuse buccale infectée.•\tNettoyage de la prothèse :o\tTremper dans une solution diluée d’eau de Javel ou de gluconate de chlorhexidine à 0,12 %.o\tBien rincer avant de remettre la prothèse pour éviter altération des tissus et contamination.•\tAlimentation et liquide :o\tÉviter de manger ou de boire dans les 30 minutes suivant l’application du traitement topique, pour permettre une bonne efficacité du médicament."
      },
      {
        "questionText": "N°14 (2022 2°EMD - Q1194\nConcernant le patient souffrant d'un herpès labial (RF ):",
        "options": [
          "Les soins dentaires non urgents drivent être reportés à cause du risque d'aérosolisation du virus et de contamination",
          "L'application de l'acyclovir en crème à 5% sur les lésions est recommandée",
          "La prescription du valaciclovir en comprimé est recommandée",
          "La prise d'antalgiques est possible pour soulager la douleur"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'application d'un antiviral topique( voie locale ) peut être envisagée, selon la fréquence et la gravité des lésions : Penciclovir 1 % crème ; Acyclovir 5 % crème"
      },
      {
        "questionText": "N°19 (2022 2°EMD - Q1256\nConcernant les principes généraux d'utilisation des antiseptiques):",
        "options": [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale",
          "On peut mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2022 2°EMD - Q1265\nLes ammoniums quaternaires sont:",
        "options": [
          "Des antiseptiques majeurs",
          "Des agents antiseptiques inhibiteurs de la plaque de catégorie B",
          "Des antiseptiques ne présentant aucun effet rémanent",
          "Des antiseptiques qui peuvent être conservés au maximum 30 jours après ouverture."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2021 2°EMD - Q1340\nConcernant l'utilisation des antifongiques par voie locale:",
        "options": [
          "Il ne faut pas enlever la prothèse avant l'administration du traitement locale",
          "Il faut appliquer le traitement local après les repas",
          "Ils sont utilisés pour traiter les lésions muqueuses étendues",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "-Enlever lesprothèse avant l'administration du traitement local, Appliquer une mince couche sur le côté de la prothèse en contact avec les tissus buccaux ainsi que sur la muqueuse buccale infectée.Ce sont donc des médicaments capables de traiter les mycoses"
      },
      {
        "questionText": "N°1 (2020 2°EMD - Q1697\nLe patient porteur de prothèse dentaire et atteint de mycose buccale doit:",
        "options": [
          "Laver sa prothèse avec de l'eau savonneuse uniquement",
          "Appliquer le miconazole gel sur la muqueuse buccale infectée sans enlever sa prothèse",
          "Boire de l'eau immédiatement après avoir appliqué miconazole gel sur la muqueuse buccale infectée",
          "Nettoyer la prothèse avec du gluconate de Chlorhexidine"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°2 (2020 2°EMD - Q1709\nConcernant l'herpès buccal:",
        "options": [
          "Il est traité par l'application locale de l'Aciclovir crème sur les lésions",
          "Il n'est pas nécessaire de retarder un détartrage jusqu'à la guérison de l'herpes",
          "Il est plus fréquent chez les personnes en bonne santé",
          "Il est traité par le valaciclovir par voie générale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Acyclovir 5 % crème : appliquer sur la lésion toutes les 2 heures, depuis l'apparition des picotements jusqu'à la guérison de la lésion"
      },
      {
        "questionText": "N°4 (2019 2°EMD - Q2037\nConcernant les principes généraux d'utilisation des antiseptiques:",
        "options": [
          "L'utilisation doit être précise et illimitée dans le temps.",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2019 2°EMD - Q2038\nL'amphotéricine B est:",
        "options": [
          "Un azolés de type Imidazolés",
          "Indiqué en première intention par voie locale dans les mycoses buccales",
          "Réservée aux mycoses graves et systémiques",
          "Doté d'une toxicité moyenne type fièvres, frissons, nausées, vomissements, hypotension"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Un polyènes"
      },
      {
        "questionText": "N°1 (2017 2°EMD - Q2633\nLes antiseptiques majeurs, bactéricides à large spectre, sont:",
        "options": [
          "Les Ammoniums quaternaires",
          "Les biguanides",
          "Les halogénés",
          "Les phénols"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "des antiseptiques majeurs, bactéricides à large spectre : biguanides et halogénés essentiellement ;• des antiseptiques intermédiaires, bactéricides à spectre étroit : ammoniums quaternaires ;• des antiseptiques mineurs, bactériostatiques à spectre étroit :notamment carbanilides, diamidines et dérivés métalliques ;• d’autres produits variés, dont certains sont considérés à tort comme antiseptiques (peroxyde d’hydrogène, colorants)."
      },
      {
        "questionText": "N°2 (2017 2°EMD - Q2644\nConcernant les principes généraux d'utilisation des antiseptiques, quelle(s) est (sont) la (les) proposition(s) juste(s)",
        "options": [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2016 2°EMD - Q2929\nParmi les principes généraux d'utilisation des antiseptiques:",
        "options": [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance local"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2016 2°EMD - Q2936\nL'agent antiseptique anti-plaque en supra- et sous-gingivales le plus utilisé est",
        "options": [
          "Un ammonium quaternaire (le chlorhydrate de cetylpyridinium)",
          "Les dérivés halogènes (Povidone iodée, Soluté de Dakin)",
          "Un biguanide (Chlorhexidine)",
          "Les phénols (la listérine et le triclosan),"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2016 2°EMD - Q2943\nParmi les antiseptiques majeurs, bactéricides à large spectre, on a",
        "options": [
          "Les biguanides",
          "Les Ammoniums quaternaires",
          "Les hexahydropyrimidines",
          "Les phénols essentiellemen"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°16 (2016 2°EMD - Q2945\nLes échecs thérapeutiques aux antifongiques utilisés pour le traitement des mycoses buccales ne sont pas dus",
        "options": [
          "À l'effet du débit salivaire et de l'action de détersion de la muqueusebuccale",
          "Aux résistances à ces agents",
          "À la durée de traitement de moins de deux semaines",
          "Aux interactions avec CYP des dérivés azoléS"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2016 2°EMD - Q2952\nL'amphotéricine B est",
        "options": [
          "Un azolés du type Imidazoles",
          "Indiquée en première intention par voie locale dans les mycoses buccales",
          "Réservée aux mycoses graves et systémiques",
          "Doté d'une toxicité moyenne type fièvres, frissons, nausées, vomissements, hypotension."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Les interactions médicamenteuses",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°11 (2025 1°EMD - Q225\nUne interaction médicamenteuse :",
        "options": [
          "Est toujours d'ordre pharmacocinétique",
          "Peut entrainer, par majoration de l'activité d'un médicament, une efficacité moindre de ce traitement",
          "Se produisent uniquement aux posologies normalement utilisées",
          "Peut nécessiter une adaptation de la posologie de l'un des médicaments."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A :•\tIM pharmacocinétiques (absorption, distribution, métabolisme, excrétion)•\tIM pharmacodynamiques (récepteurs, systèmes physiologiques, synergie, antagonisme).B : Provoquer ou majorer des effets indésirables, ou provoquer une toxicité, ou entraîner par réduction de l'activité une moindre efficacitéD : Ceci va nécessiter : modification de la posologie, arrêt du traitement ou une autre intervention médicale."
      },
      {
        "questionText": "N°12 (2024 1°EMD - Q560\nLors de l'administration simultanée d'antiacides à un autre médicament (Tétracyclines), on observe",
        "options": [
          "Une augmentation de l'absorption des Tétracyclines;",
          "Une diminution de la biodisponibilités des Tétracyclines;",
          "Une augmentation de la biodisponibilité des antiacides;",
          "Une augmentation de l'absorption des antiacides"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2023 1°EMD - Q881\nOn parle d'interaction médicamenteuse :",
        "options": [
          "Lorsque deux ou plusieurs médicaments sont pris simultanément",
          "Uniquement lorsque la prise simultanée de deux médicaments est contre-indiquée",
          "Lorsque l'administration la prise de deux médicaments simultanément entraime la modification de devenir de l'un ou l'autre dans l'organisme",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les interactions médicamenteuses peuvent survenir lorsque deux médicaments pris ensemble influencent l'absorption, la distribution, le métabolisme ou l'élimination d'un ou des deux médicaments, ce qui peut avoir des conséquences sur leur efficacité ou leur sécurité."
      },
      {
        "questionText": "N°14 (2023 1°EMD - Q886\nConcernant les interactions médicamenteuses d'ordre pharmacodynamique :",
        "options": [
          "C'est des interactions qui ont lieu pendant la phase d'absorption du médicament",
          "Peuvent être évitées en espaçant les prises des deux médicaments",
          "L'antagonisme est une forme d'interaction médicamenteuse souvent bénéfique et recherchée",
          "La synergie est quand l'effet des deux médicaments pris simultanément est supérieur à la somme des effets de chacun"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La synergie se produit lorsque deux médicaments pris ensemble ont un effet combiné qui est plus puissant que la simple addition de leurs effets individuels"
      },
      {
        "questionText": "N°17 (2023 1°EMD - Q950\nUn effet indésirable de type A est un effet:",
        "options": [
          "Imprévisible",
          "Dose indépendant",
          "Non bé aux propriétés pharmacologiques du médicament",
          "Qui peut être directement ou indirectement lié à l'effet pharmacologique du médicament"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°18 (2023 1°EMD - Q960\nUn effet indésirable dit grave s'il est à l'origine d'un",
        "options": [
          "Décès, une menace pour la vie du patient au moment de l'apparition de l'événement",
          "Effet gênant sans aucune gravité",
          "Effet sévère mais sans engager le pronostic vital du patient",
          "Effet indésirable gênant mais qui ne nécessite pas l'arrêt du traitement"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Un effet indésirable grave est une réaction indésirable sévère qui met en danger la vie du patient, peut entraîner la mort ou exige une hospitalisation immédiate ou une intervention médicale urgente pour prévenir de graves conséquences."
      },
      {
        "questionText": "N°1 (2022 1°EMD - Q1004\nles interactions médicamenteuse sont :",
        "options": [
          "Toute indésirables et contre indiquées",
          "Souhaitées pour certaines prises en charge thérapeutiques",
          "Ne peut pas améliorer l’observance",
          "A éviter dans tous les cas de prises en charge de pathologie graves"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : soit Souhaitées soit IndésirablesC : Les interactions médicamenteuses peuvent avoir un impact significatif sur l'observance d'un traitement médicamenteuxD : Dans la prise en charge de pathologies graves, il est essentiel de trouver un équilibre entre les avantages des médicaments prescrits et les risques potentiels d'interactions médicamenteuses"
      },
      {
        "questionText": "N°2 (2022 1°EMD - Q1018\nla compétition au niveau du site de transport actif intestinal est une interaction médicamenteuse qui :",
        "options": [
          "Concerne le transport plasmatique des médicaments",
          "Apparait lors de l’élimination de certains médicaments",
          "Est d’ordre pharmacocinétique",
          "Est d’ordre pharmacodynamique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2022 1°EMD - Q1128\nconcernant le mode d’action des médicaments :",
        "options": [
          "Ils peuvent agir par le biais de leurs propriétés physico-chimiques",
          "Ils ont toujours une action spécifiques",
          "Ils se fixent toujours sur un récepteur membranaire",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Les médicaments peuvent avoir divers modes d'action en fonction de leur classe  thérapeutique et de l'objectif de traitementC : leur cible peut être un récepteur membranaire, une enzyme, une protéine  intracellulaire.."
      },
      {
        "questionText": "N°1 (2021 1°EMD - Q1338\nparmi les interactions médicamenteuses suivantes quelle est celle qui souhaitée :",
        "options": [
          "Les associations médicamenteuses incompatibles et contre indiquée",
          "Association pour l’amélioration d’une thérapeutique",
          "Associations médicamenteuses de deux médicaments l’un antagoniste de l’autre dans le cadre de traiter une maladie",
          "Association de médicaments inscrits dans la rubrique association déconseillée"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "C : elles peuvent réduire l'efficacité du traitementD : Cette classification signifie que l'association de ces médicaments peut présenter des risques ou des effets indésirables significatifs."
      },
      {
        "questionText": "N°2 (2021 1°EMD - Q1350\nquel est l’interaction médicamenteuse qui est d’ordre pharmacodynamique :",
        "options": [
          "Salbutamol ( agoniste B2 adrénergique ) et propranolol ( B bloquant )",
          "Associations de deux ralentisseurs du transit intestinal",
          "Association de deux médicaments compétiteurs au niveau du site de transporteurs plasmatiques",
          "Association des inducteurs enzymatiques"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B/C/D : sont d’ordre pharmacocinétiques"
      },
      {
        "questionText": "N°11 (2020 1°EMD - Q1839\nUne interaction médicamenteuse lors de la phase d'absorption des médicaments peut être due à :",
        "options": [
          "Une compétition pour les liaisons aux protéines plasmatiques pour les médicaments fortement liés",
          "Une compétition au niveau d'un système de transport actif intestinal",
          "Une compétition pour le même système enzymatique hépatique",
          "Une compétition pour la réaction tubulaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2020 1°EMD - Q1849\nLes interactions médicamenteuses en phase pharmacodynamique :",
        "options": [
          "Surviennent suite à la modification de l'effet pharmacodynamique d'un médicament par modification de sa concentration plasmatique",
          "Sont toujours à éviter",
          "Peuvent conduire à la diminution de l'efficacité thérapeutique d'un médicament cas d'antagonisme",
          "Uniquement les formes injectables sont concernées"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : surviennent lorsque deux médicaments ont en commun un effet sur un même récepteur ou une même fonction physiologique. Cela entraine une modification quantitative de l'effetB : Certaines interactions pharmacodynamiques peuvent être souhaitéesD : Ces interactions peuvent survenir avec des médicaments sous différentes formesd'administration, qu'il s'agisse d'injections, de comprimés, de gélules ou d'autres formes galéniques"
      }
    ]
  },
  {
    "title": "Les voies d’administrations",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°2 (2025 1°EMD - Q31\nParmi les avantages de la voie orale",
        "options": [
          "Elle est pratique chez les patients comateux",
          "Elle est peu onéreuse",
          "Certains médicaments administrés par cette voie peuvent être détruits par le suc gastrique",
          "C'est la voie recommandée chez un patient en cas de crise d'épilepsie"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Impossibilité d'administration si trouble de la déglutition (coma, vomissement)C : ceci n’est pas un avantage mais une limite ; Limites : … possible destruction PA par sucs digestifs (insuline)D : Ce n’est pas une voie d’urgence"
      },
      {
        "questionText": "N°3 (2025 1°EMD - Q44\nConcernant les collyres:",
        "options": [
          "La solution doit être isotonique au plasma et stérile",
          "Ils ont une durée de vie illimitée après ouverture du flacon",
          "Ils sont appliqués au niveau de la muqueuse nasale",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A : stérilité, isotonicité aux larmes et neutralitéB : En pratique : – durée de vie limitée après ouverture du flaconC : Mdt administré au niveau de l’œil : collyre, pommade ophtalmique, action locale"
      },
      {
        "questionText": "N°19 (2024 1°EMD - Q654\nParmi les avantages de la voie intraveineuse :",
        "options": [
          "Simple et facile à administrer;",
          "Adaptée aux traitements pris en ambulatoire;",
          "Permet l'administration des médicaments chez les patients inconscients;",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A;Voie IV : rapide , dose préciseB:Thérapeutique d’urgence"
      },
      {
        "questionText": "N°19 (2023 1°EMD - Q980\nParmi les inconvénients de la voie orale:",
        "options": [
          "Impossibilité d'administration si trouble de la déglutition",
          "Inadaptée aux traitements pris en ambulatoire",
          "Elle nécessite un personnel qualifié",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°20 (2023 1°EMD - Q992\nConcernant les sirops:",
        "options": [
          "Leur conservation n'est pas limitée après ouverture du flacon",
          "Ils contiennent obligatoirement du sucre",
          "Ils doivent être stériles et apyrogènes",
          "C'est la dispersion d'un ou plusieurs principes actifs solides sous forme de poudre insoluble dans un liquide"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Ils doivent être stériles et apyrogènes - Les sirops doivent être préparés de manière stérile et ne doivent pas contenir de pyrogènes pour garantir leur sécurité d'utilisation."
      },
      {
        "questionText": "N°16 (2022 1°EMD - Q1214\nla voie d’administrations sous-cutanée :",
        "options": [
          "Une voie d’administration parentérale indirecte",
          "Faite par injection de médicaments en solution aqueuse et huileuse",
          "A effet retardé et progressif",
          "Une voie d’urgence"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : La voie parentérale est l'administration la plus directe car elle évite le passage par le tube digestif.B : Possibilité d’administration de solutions huileusesD : La voie intraveineuse est la voie d’urgence"
      },
      {
        "questionText": "N°17 (2022 1°EMD - Q1231\nla voie d’administration intra-ligamentaire est une administration est une administration dans :",
        "options": [
          "Le septum osseux intermédiaire",
          "Le desmodonte",
          "Le sulcus gingival",
          "La muqueuse buccale"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : c’est la voie intra-septaleC : c’est l’irrigation intra-gingivale"
      },
      {
        "questionText": "N°15 (2021 1°EMD - Q1560\nquel est l’avantage des voies parentérales :",
        "options": [
          "Administration facile",
          "Coût faible",
          "Rapidité de l’effet",
          "Evite le risque infectieux"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : Administration uniquement par une infirmière ou un médecin, sauf chez le patient diabétique pour l'injection d'insuline.D : Risques infectieux liés à l'injection."
      },
      {
        "questionText": "N°16 (2021 1°EMD - Q1577\nles préparations injectables et les formes ophtalmiques doivent être :",
        "options": [
          "Stériles",
          "Pyrogènes",
          "Hypotonique",
          "A pH alcalin"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Apyrogènes (pour les préparations de grand volume) = absence de substance pyrogènes provoquant un choc thermique après injection,C : Isotoniques ou hypertoniques (pression osmotique = ou > celle milieu physiologique), Une préparation hypotonique provoque une hémolyseD : pH proche du pH physiologique."
      },
      {
        "questionText": "N°1 (2020 1°EMD - Q1696\nLa voie d'administration Intra-ligamentaire est une administration dans :",
        "options": [
          "Le septum osseux intermédiaire",
          "Le sulcus gingival",
          "La muqueuse buccale",
          "Le desmodonte"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2018 1°EMD - Q2287\nLa forme pharmaceutique d'un médicament permet de :",
        "options": [
          "Prédire ses effets indésirables",
          "Déterminer son mode d'administration",
          "Connaitre sa composition",
          "Prédire son mécanisme d'action"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2018 1°EMD - Q2321\nL'avantage principal de la voie per os est:",
        "options": [
          "Pas de risque d'action ou de dégradation du médicament",
          "Cout modérément élevé",
          "Administration facile",
          "Rapidité de l'effet"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : Risque de dégradation du foie : hépatotoxicité.B : Coût faible.C : Le médicament est absorbé par l'appareil digestif, est transformé dans le foie, puis passe dans la circulation sanguine pour arriver vers les organes où il exerce son action."
      },
      {
        "questionText": "N°4 (2018 1°EMD - Q2341\nLa voie d'administration intra-ligamentaire est une administration dans",
        "options": [
          "Le septum osseux intermédiaire",
          "Le sulcus gingival",
          "La muqueuse buccale",
          "Le desmodonte"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2016 1°EMD - Q2851\na propos des voies d’administrations des médicaments :",
        "options": [
          "La voie intraveineuse peut s’associer à un effet de premier passage hépatique",
          "La voie rectale est utilisée pour avoir une réaction in situ",
          "La voie intra-artérielle n’est accompagnée d’aucun effet de premier passage",
          "La voie sous-cutanée est une voie à biodisponibilité absolue"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : La voie intraveineuse évite le passage hépatiqueB :La voie rectale est une voie générale ou systémique ( in situ = voie locale )D : La voie sous-cutanée est une voie à biodisponibilité absolue"
      },
      {
        "questionText": "N°4 (2016 1°EMD - Q2866\nl’absence de substances pyrogènes est obligatoire pour les formes destinées à la/aux voie(s)",
        "options": [
          "Intraveineuse",
          "Transcutanée",
          "Transdermique",
          "Respiratoire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les préparations injectables et les formes ophtalmiques doivent être Apyrogènes"
      }
    ]
  },
  {
    "title": "Médicaments de l’app digestif",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°1 (2025 3°EMD DENTAIRE - Q01\nQuel médicament utilisé dans les maladies inflammatoires chroniques de l'intestin peut entraîner une hypertrophie gingivale?",
        "options": [
          "Méthotrexate;",
          "Azathioprine;",
          "Ciclosporine;",
          "Sulfasalazine."
        ],
        "correctOptionIndexes": [],
        "explanation": "B : « Azathioprine (AZA) Imurel® Cp 25-50 mg 2 mg/kg/j »Effets indésirables :• Hématologiques (anémie, leucopénie…) dose-dépendants• Pancréatite (AZA, 6MP, TG)• Troubles hépatiquesC : IR; HTA, hypertrophie gingivale... ciclosporine »"
      },
      {
        "questionText": "N°2 (2025 3°EMD DENTAIRE - Q34\nQuelle manifestation buccale est fréquemment observée chez les patients atteints de maladie de Crohn?",
        "options": [
          "Langue géographique;",
          "Lésions aphteuses profondes",
          "Candidose pseudomembraneuse;",
          "Lichen plan buccal."
        ],
        "correctOptionIndexes": [],
        "explanation": "Pathologie inflammatoire chronique de l’intestin (MICI). Caractérisées par des ulcérations chroniques récurrentes de différents segments duTD (de la bouche à l’anus).▪ Plan clinique:Evolue en Poussée/Rémission.Symptômes digestifs et extradigestifs (articulaires 25% et Cutanéomuqueux 15% ulcères aphteux de la bouche 8%...)"
      },
      {
        "questionText": "N°3 (2025 3°EMD DENTAIRE - Q49\nQuel effet indésirable buccal peut être associé à la prise prolongée d'inhibiteurs de la pompe à protons (IPP)?",
        "options": [
          "Hypersalivation;",
          "Xérostomie",
          "Hyperplasie gingivale",
          "Pigmentation dentaire"
        ],
        "correctOptionIndexes": [],
        "explanation": "« Les inhibiteurs de la pompe à protons (IPP)… peuvent entraîner une xérostomie lors d’un traitement prolongé. »C : plutôt ciclosporine, nifédipine, phénytoïne.D : plutôt tétracyclines"
      },
      {
        "questionText": "N°4 (2024 3°EMD - Q460\nParmi les pathologies digestives suivantes la quelle peut entrainer une érosion de l'émail dentaire ?",
        "options": [
          "La diarrhée",
          "La constipation",
          "La maladie de Crohn",
          "Le reflux gastroesophagien"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La principale manifestation buccale du reflux acide causé par des affections telles que le reflux gastro-œsophagien (RGO) pathologique et la hernie hiatale est l’érosion de l’émail dentaire."
      },
      {
        "questionText": "N°5 (2024 3°EMD - Q465\nParmi les molécules pouvant être utilisées dans le traitement de la maladie de Crohn la quelle a un impact odontologique en entrainant une hypertrophie gingivale ?",
        "options": [
          "Infliximab",
          "Ciclosporine",
          "Vedolizumab",
          "Ustékinumab"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2024 3°EMD - Q483\nParmi les molécules suivantes, utilisées dans le traitement du reflux gastroesophagien la quelle pourrait induire une xérostomie?",
        "options": [
          "Oméprazole",
          "Nizatidine",
          "Famotidine",
          "Hydroxydes d'aluminium et de magnésium"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2022 2°EMD - Q1129\nLes médicaments neutralisants gastriques ont une influence sur:",
        "options": [
          "La distribution des médicaments au niveau des tissus inflammatoires",
          "L'absorption gastrique des médicaments bases faible par augmentation du pH",
          "L'effet antalgique du paracétamol",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Interactions médicamenteuses des Neutralisants gastriques [prise 1 h après le repas; seconde prise 3 h après le repas]diminution de l'absorption de nb médicaments par formation de complexes (antibiotiques: tétracyclines, …) → dissocier les prises modification du pH gastrique peut modifier l'absorption de médicaments (antifongiques azolés) alcalinisation de l'urine peut moduler l'élimination de médicaments (salicylés)"
      },
      {
        "questionText": "N°10 (2022 2°EMD - Q1151\nQuelles est la pathologie gastroduodénale que le médecin dentiste peut diagnostiquer suit au diagnostic de l'érosion dentaire:",
        "options": [
          "L'ulcère gastrique",
          "Le reflux gastro-œsophagien",
          "La constipation",
          "La diarrhée."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les dentistes sont souvent les premiers professionnels de la santé à diagnostiquer une maladie systémique par l’observation de ses manifestations buccales. Une de ces affections est le reflux gastro-œsophagien pathologique (RGOP) qui peut être décelé à la présence de l’érosion dentaire."
      },
      {
        "questionText": "N°1 (2019 3°EMD - Q1978\nLes pansements digestifs pris simultanément avec d'autres médicaments par voie orale",
        "options": [
          "Améliorent leur absorption digestive.",
          "Peuvent conduire à leur inefficacité.",
          "Augmentent leur dégradation.",
          "Accélèrent leur excrétion rénale."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "↘ l’absorption d’autres mdts pris par VO administrés simultanément."
      },
      {
        "questionText": "N°2 (2019 3°EMD - Q1988\nLes inhibiteurs de la pompe à proton (IPP):",
        "options": [
          "Ne sont utilisés que dans le traitement de l'ulcère gastro-duodénal.",
          "Ne peuvent être utilisés dans la prévention de l'ulcère induit par les AINS.",
          "Agissent par inhibition réversible de la pompe à proton de la lumière pariétale des cellules de la muqueuse gastrique",
          "Peuvent inhiber le métabolisme hépatique de certains médicaments le système du Cytp450"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2019 2°EMD - Q2136\nQuelle est la conséquence de l'association des AINS et des inhibiteurs de l'enzyme de conversion:",
        "options": [
          "Augmentation de l'effet des AINS jusqu'à la toxicité",
          "Risque d'aggravation des effets indésirables digestifs",
          "Risque d'une insuffisance rénale",
          "Diminution de l'effet antihypertenseur par rétention hydro-sodée"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2018 3°EMD - Q2389\nConcernant les médicaments indiqués en gastrologie:",
        "options": [
          "Les pansements digestifs peuvent diminuer l'absorption d'autres médicaments administrés simultanément par voie orale",
          "Les inhibiteurs de pompe à proton peuvent induire une alcalinisation de l'urine ce qui peut moduler l'élimination de certains médicaments (salicylés)",
          "Les IPP et les anti-H2 sont des inducteurs enzymatiques du CYP450 et ceci est à l'origine d'interactions médicamenteuses avec les médicaments métabolisés par ces enzymes",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2018 3°EMD - Q2391\nLa conduite à tenir lors de diagnostic de RGOP notamment par la présence d'érosion dentaire consiste en un:",
        "options": [
          "Traitement symptomatique à base d'antiacides et topiques gastro- intestinaux",
          "Traitement curatif à base d'antiacide",
          "Traitement symptomatique à base d'antiémétiques",
          "Traitement à base d'enzymes pancréatiques"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Lors de diagnostique de RGOP → traitement symptomatique (antiacide, topique gastro-intestinaux) + revoie chez gastro-entérologue"
      },
      {
        "questionText": "N°12 (2018 3°EMD - Q2493\nL'ulcère gastroduodénal (UGD) peut être traité par les:",
        "options": [
          "Anti-histaminiques H2 (Ranitidine)",
          "Inhibiteurs de pompe à proton IPP (Omeprazole)",
          "Antagonistes sérotoninergiques (Sétrons)",
          "Analogues de prostaglandine (Misoprostol)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Pharmacodynamie et Pharmacométrie",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°17 (2025 1°EMD - Q328\nLa pharmacodynamie:",
        "options": [
          "Etudie le devenir des médicaments dans l'organisme",
          "Etudie l'effet des médicaments sur l'organisme",
          "N'étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l'étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Pharmacodynamie = effets des médicaments sur l’organismeC : effets thérapeutiques et effets secondaires"
      },
      {
        "questionText": "N°18 (2025 1°EMD - Q360\nConcernant les récepteurs couplés à la protéine G:",
        "options": [
          "Ce sont des récepteurs intracellulaires",
          "Leur effecteurs sont toujours des canaux ioniques",
          "La fixation d'un ligand changent leur conformation et activent une cascade d'événements intracellulaires",
          "Leur second messager est toujours le calcium"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : récepteurs membranairesB :C : « Fixation mdt → Activation protéine G → Activation de l’effecteur → Synthèse 2nd messager → Amplification du signal → Réponse cellulaire »."
      },
      {
        "questionText": "N°6 (2024 1°EMD - Q476\nLa modification de la cible pharmacologique de la substance médicamenteuse entraine:",
        "options": [
          "Une modification du taux d'absorption du médicament ;",
          "Une modification de la repose pharmacodynamique ;",
          "Une modification des paramètres pharmacocinétique du médicament;",
          "Aucune modification dans la réponse pharmacologique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2024 1°EMD - Q528\nSoit A un médicament agoniste partiel de récepteurs X, ceci sous-entend que",
        "options": [
          "L'activité intrinsèque de A est nulle;",
          "L'activité intrinsèque de A est comprise entre 0 et 1;",
          "L'efficacité de A est maximale;",
          "Le médicament A ne se lie pas au récepteur X"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2024 1°EMD - Q533\nL'affinité d'un agoniste vis-à-vis d'un type de récepteur:",
        "options": [
          "Se mesure relativement à l'effet maximal d'une substance endogène;",
          "Est différente de la puissance d'effet de cet agoniste;",
          "Diminue en présence d'un antagoniste compétitif réversible pour le mêmes récepteur;",
          "Se mesure par la concentration de l'agoniste occupant la totalité des récepteurs"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "C’est la concentration de ligand nécessaire pour obtenir la moitié de l’occupation des récepteurs"
      },
      {
        "questionText": "N°16 (2024 1°EMD - Q615\nConcernant les protéines cibles à rôle enzymatique :",
        "options": [
          "C'est des molécules transmembranaires;",
          "Porte l'activité enzymatique dans la partie intracellulaire;",
          "Peuvent être ciblées par un faut substrat induisant la production d'un métabolite anormal;",
          "Permettent toujours la phosphorylation de différentes protéines cibles effectrices."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A:Il s’agit de récepteurs transmembranaires"
      },
      {
        "questionText": "N°17 (2024 1°EMD - Q625\nParmi les protéines cibles assurant le passage d'un ion/ métabolite on retrouve :",
        "options": [
          "Les effecteurs canaux ioniques ;",
          "Les ionophores;",
          "Les porines;",
          "Les transporteurs ioniques"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2023 1°EMD - Q808\nConcernant les récepteurs couplés à la protéine G:",
        "options": [
          "Ce sont des récepteurs intracellulaires",
          "leur effecteurs sont toujours des canaux ioniques",
          "La fixation d'un ligand changent leur conformation et activent une cascade d'événements intracellulaires",
          "Leur second messager est toujours le calcium"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : Ce sont des récepteurs métabotropiques, De nature glycoprotéiques, monomère réparti en 7 segments transmembranairesB : canaux ioniques / enzymes"
      },
      {
        "questionText": "N°11 (2023 1°EMD - Q845\nUn agoniste partiel d'un type de récepteurs :",
        "options": [
          "Son affinité à ces récepteurs est faible relativement à l'agoniste parfait",
          "La valeur de son PD2 est supérieure à celle du PD2 de l'agoniste parfait",
          "Son activité intrinsèque est inférieure à celle de l'agoniste parfait",
          "Son activité intrinsèque est supérieure à celle de l'agoniste parfait"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2023 1°EMD - Q866\nUn antagoniste compétitif réversible d'un agoniste vis-à-vis d'un type de récepteurs:",
        "options": [
          "Possède une affinité supérieure que celle de l'agoniste pour ces récepteurs",
          "Possède une affinité inférieure que celle de l'agoniste pour ces récepteurs",
          "Induit une diminution de l'effet maximal de l'agoniste",
          "Son mode d'action est identique à celui de l'agoniste"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2022 1°EMD - Q1140\nconcernant les récepteurs intracellulaires :",
        "options": [
          "Leurs ligands sont de nature lipophile",
          "Ils agissent par un couplage à la protéine G",
          "Leurs effecteurs sont exclusivement des canaux ioniques",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : Les récepteurs intracellulaires se trouvent à l'intérieur de la cellule, contrairement N aux récepteurs membranaires qui sont situés sur la membrane cellulaire. Par  conséquent, leur mécanisme d'action est différent de celui des récepteurs membranaires, qui sont généralement associés à la signalisation par protéines G.C : Les canaux ioniques / Les pompes ioniques"
      },
      {
        "questionText": "N°11 (2022 1°EMD - Q1161\na fin de comparer la puissance de deux antagonistes compétitifs réversibles d’une molécule à vis-à-vis des récepteurs X :",
        "options": [
          "On compare les concentrations des antagonistes quelque soit les déplacements de A",
          "On compare les déplacements de la molécule A dans la courbe dose-effet quelque soit les concentrations de ces antagonistes",
          "La molécule la plus puissante aura le PA2 la plus fort",
          "La molécule la plus puissante aura le PA2 le plus faible"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Plus PA2 est plus l’antagoniste est puissant"
      },
      {
        "questionText": "N°12 (2022 1°EMD - Q1172\nun agoniste parfait de récepteurs Y est caractérisé par :",
        "options": [
          "Un rapport effet du médicament / effet maximal égale à 0.1",
          "Un rapport effet du médicament / effet maximale supérieure à 0.5",
          "Une valeur basse de PD2",
          "Une valeur élevée de PD2"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2021 1°EMD - Q1483\nconcernant les récepteurs couplés à la protéine G :",
        "options": [
          "Ce sont des récepteurs membranaires",
          "Ce sont des récepteurs intracellulaires",
          "Les effecteurs sont exclusivement des canaux ioniques",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C : Les canaux ioniques / des enzymes"
      },
      {
        "questionText": "N°13 (2021 1°EMD - Q1530\nL'affinité d’un médicament A vis à vis de son récepteur R :",
        "options": [
          "Est un paramètre évaluant l’effet pharmacologique de A",
          "Se mesure par le calcul du PD2",
          "Permet de distinguer s'il s'agit d’un agoniste parfait ou partiel",
          "Diminue en présence d'un agoniste fonctionnel"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2021 1°EMD - Q1545\nsoit : B un antagoniste compétitif réversible de A vis-à-vis des récepteurs X :",
        "options": [
          "L’affinité de A vis-à-vis les récepteurs X augmente en présence de B",
          "La valeur de pD2 de A diminue en présence de B",
          "L’activité intrinsèque de A est influencée en présence de B",
          "La puissance de l’antagoniste B s’estime par la valeur de pD2"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2020 1°EMD - Q1801\nConcernant l'antagonisme non compétitif :",
        "options": [
          "L'antagoniste se fixe sur le même récepteur que l'agoniste",
          "L'affinité de l'agoniste diminue en présence de l'antagoniste",
          "L'activité intrinsèque de l'agoniste diminue en présence de l'antagoniste",
          "C'est un antagonisme surmontable en augmentant la dose de l'agoniste"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A : Site de fixation de l’agoniste et de l’antagoniste différentD : n'est généralement pas surmontable en augmentant simplement la dose de l'agoniste, car il est souvent caractérisé par des effets irréversibles ou difficilement réversibles sur le récepteur."
      },
      {
        "questionText": "N°2 (2018 2°EMD - Q2314\nDans l'Antagonisme compétitif réversible:",
        "options": [
          "L'augmentation de la concentration de l'agoniste permet de surmonter le blocage (antagonisme surmontable)",
          "Le profil initial est toujours perdu",
          "Les sites de fixation sont différents de ceux de l'agoniste",
          "Les récepteurs les plus rares qui sont concernés monter le blocage"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2018 1°EMD - Q2536\nConcernant l'agoniste, il :",
        "options": [
          "Provoque un effet comparable à celui du médiateur naturel",
          "S'oppose partiellement ou totalement aux effets d'un autre médicament",
          "Donne une activité intrinsèque (efficacité) maximale",
          "Induit toujours un agoniste partie par rapport au médiateur endogène"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B : un agoniste n'agit pas en s'opposant aux effets d'un autre médicament, mais plutôt en imitant les effets du médiateur naturelD : l'efficacité d'un agoniste par rapport au médiateur endogène peut varier en fonction de plusieurs facteurs"
      },
      {
        "questionText": "N°15 (2018 1°EMD - Q2550\nL'affinité d'un médicament (ligand):",
        "options": [
          "Réduit l'efficacité et la puissance d'un médicament",
          "Est l'aptitude d'un ligand à se fixer sur son récepteur spécifique",
          "Ne dépend pas de la structure chimique de chacun des partenaires",
          "Est corrélée avec son activité intrinsèque"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Elle n'a pas pour effet intrinsèque de réduire l'efficacité et la puissance d'un médicament, mais d'autres facteurs peuvent influencer ces aspects de l'action d'un médicament.C : dépend en réalité de la structure chimique à la fois du médicament et du récepteur"
      },
      {
        "questionText": "N°16 (2018 1°EMD - Q2554\nConcernant l'antagonisme compétitif réversible :",
        "options": [
          "L’agoniste et l'antagoniste occupent le même récepteur sur des sites différents par liaison réversible",
          "L’affinité de l'agoniste est maintenue en présence de l'antagoniste",
          "L’affinité intrinsèque de l'agoniste est diminuée en présence de l'antagoniste",
          "l'augmentation de la concentration de l'agoniste permet de surmonter le blocage (antagonisme surmontable)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2018 1°EMD - Q2571\nConcernant l'antagonisme fonctionnel :",
        "options": [
          "L’agoniste et l'antagoniste ont une même action sur la fonction physiologique mais dans le sens inverse",
          "L’agoniste et l'antagoniste ont des récepteurs différents",
          "L’agoniste et l'antagoniste donnent des effets biologiques opposés",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2016 1°EMD - Q2965\nSoit un agoniste A avec un PD2-6, et un agoniste B du même récepteur avec un PD2=4:",
        "options": [
          "Le médicament A a plus d'affinité que le médicament B pour ce récepteur",
          "Le médicament B a plus d'affinité que le médicament A pour ce récepteur",
          "Le médicament A est plus efficace que le médicament B",
          "Le médicament B est plus efficace que le médicament A"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "( - Q3086\nParmi les cibles de médicaments de nature protéique on retrouve:",
        "options": [
          "Le suc gastrique",
          "Les acides nucléiques",
          "Les symporteurs",
          "Les ions métalliques"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "prescreption medicamenteuse",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°6 (2025 2°EMD DENTAIRE - Q103\nParmi les molécules antibiotiques suivantes, quelle est la molécule de choix pour t maladies parodontales nécrosantes:",
        "options": [
          "les cyclines",
          "les B-lactamines",
          "le métronidazole",
          "les macrolides",
          "Association: Amoxicilline + acide clavulanique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Traitement des maladies parodontales nécrosantes :Chez l’adulte: 1500 mg/jour de métronidazole, en 2 ou 3 prises, pendant 7 jours."
      },
      {
        "questionText": "N°11 (2025 2°EMD DENTAIRE - Q220\nParmi ces molécules antiseptiques suivantes, laquelle est recommandée en sous-gingivale?",
        "options": [
          "La Chlorhexidine",
          "La Povidone iodée",
          "Le triclosan",
          "L'héxitidine",
          "La listerine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A : Chlorhexidine : très efficace en supragingival, mais rapidement inactivée en sous-gingival par le pus, sang, Pg.B : Povidone iodée : efficacité persiste même en présence de sang, donc antiseptique de référence en sous-gingival.C/D/E : Triclosan, Héxitidine, Listerine : utilisés en bains de bouche/dentifrice → efficacité limitée, pas indiqués spécifiquement en sous-gingival."
      },
      {
        "questionText": "N°16 (2025 2°EMD DENTAIRE - Q316\nLes antiseptiques à base de chlorhexidine:",
        "options": [
          "Sont contre indiqués chez la femme enceinte",
          "Ont une activité bactéricide et fongicide",
          "ne possède pas de capacité de rétention sur les surfaces buccales",
          "Sont des antiseptiques de référence en sous-gingival",
          "Ont une activité d'altération de la paroi bactérienne"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A : C’est plutôt la povidone iodée qui est contre-indiquée après le 1er trimestreB : Chlorhexidine : l’agent antiplaque le + utilisé, bactéricide à large spectre.C : Chlorhexidine : capacité d’adhérence aux surfaces buccales.(C’est l’héxitidine qui ne possède pas cette capacité).D : Rapidement inactivée en sous-gingival : inactivée par le pus, le sang et certaines bactéries (Pg)."
      },
      {
        "questionText": "N°6 (2024 2°EMD - Q482\nL'antibiothérapie en parodontie :",
        "options": [
          "Est systématique dans le cas de parodontites",
          "Est systématique dans le cas de gingivites",
          "Est indiquée dans le cas de parodontite agressive",
          "Peut-être indiqué après chirurgie parodontale"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Indications de l’antibiothérapie⮚ Parodontite agressive⮚ Récidive pendant le thérapeutique de soutien⮚ Réponse clinique mauvaise ou moyenne après traitement conventionnel (notamment pour les poches profondes et LIR)⮚ Possibilité de surinfection à partir d’autres sites oropharyngés infectés"
      },
      {
        "questionText": "N°8 (2024 2°EMD - Q509\nLa Chlorhexidine est un antiseptique:",
        "options": [
          "Bactériostatique à large spectre",
          "Utilisé en bain de bouche uniquement",
          "Ne possède pas de capacité d'adhérence aux surfaces buccales",
          "Est Antiseptique de choix en parodontie"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Bactéricide à large spectreCapacité d’adhérence aux surfaces buccales"
      },
      {
        "questionText": "N°14 (2024 2°EMD - Q595\nLe métronidazole",
        "options": [
          "Est un antibiotique bactériostatique",
          "Est actif sur les bactéries aérobies",
          "Est actif sur les anaérobies",
          "Peut être associé à un autre antibiotique"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "il est considéré comme bactéricide.-Il peut être utilisé seul mais il est le plus souvent associé à la spiramycine ou aux pénicillines."
      },
      {
        "questionText": "N°19 (2024 2°EMD - Q657\nLes AINS:",
        "options": [
          "Ont une propriété antalgique",
          "Sont indiqués en cas de parodontite chronique",
          "Peuvent être prescrits après chirurgie parodontale",
          "Permettent d'éliminer l'inflammation gingivale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les propriétés :❑ Antalgique❑ Antipyrétique❑ Anti-inflammatoire❑ Antiagrégant plaquettaireA visée antalgique en post chirurgie"
      },
      {
        "questionText": "N°8 (2023 2°EMD - Q793\nLa Chlorhexidine:",
        "options": [
          "Est des agents anti-plaque.",
          "Peut remplacer le traitement local type brossage dentaire.",
          "Est l'antiseptique de choix en supra-gingival.",
          "Est l'antiseptique de choix en supra- et sous gingival."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°11 (2023 2°EMD - Q849\nParmi les associations antibiotiques suivantes, laquelle est inhibitrice de l'action des Bétalactamases:",
        "options": [
          "Métronidazole + spiramycine.",
          "Métronidazole + fluoroguinolone.",
          "Amoxicilline + acide clavulanique.",
          "Amoxicilline + métronidazole"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2023 2°EMD - Q893\nL'antibioprophylaxie:",
        "options": [
          "Consiste à administrer une dose flash d'antibiotique avant chaque acte invasif.",
          "Commence la veille de l'intervention et se poursuit le jour de l'intervention.",
          "Débute 30 min avant l'acte et est prolongée jusqu'à cicatrisation.",
          "Correspond à une dose flash d'antibiotique prise dans l'heure qui précède l'acte invasif."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°19 (2023 2°EMD - Q973\nLa Povidone lodée est un antiseptique utilisé en traitement prophylactique:",
        "options": [
          "Faux",
          "Vrai"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les auteurs recommandent cet antiseptique en cours de traitement parodontal et non en prophylaxie."
      },
      {
        "questionText": "N°5 (2022 2°EMD - Q1078\nDans le plan de traitement, la prescription médicamenteuse:",
        "options": [
          "Trouve toujours sa place avant le traitement étiologique",
          "Complète une thérapeutique initiale dans tous les cas",
          "Est indispensable pour les patients immunodéprimés",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "le traitement médical donne des résultats limité et ne doit être considérée qu’en supplément au traitement mécanique.patients immunodéprimés : patients présentant une susceptibilité élevée aux infections, pathologies acquises ou congénitales (déficits immunitaires, cancer, corticothérapie, diabète non ou mal équilibré, syndrome d’immunodéficience acquise...)."
      },
      {
        "questionText": "N°54 (2022 Résidanat - Q1311\nLe Métronidazole : 1- Est un antibiotique bactéricide 2- Est un antibiotique bactériostatique 3- Seul, peut éliminer l'Aggregatibacter actinomycetem comitans (Aa) 4- Seul, peut éliminer le Porphyromonas gingivalis 5- Est actif sur les anaérobies",
        "options": [
          "(1.2)",
          "(1.3)",
          "(1,4.5)",
          "(2.3)",
          "(1.5)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le métronidazole est unantibiotiquebactéricide. Il pénètre dans les parois cellulaires bactériennes, destructure l'ADN et inhibe la synthèse de l'ADN dans certains microrganismes.3 :Faux→ Aa est une bactérieaérobie facultative, etle métronidazole seul n’est pas efficace."
      },
      {
        "questionText": "N°1 (2021 3°EMD - Q1331\nL'antibiothérapie prophylactique en parodontie consiste en:",
        "options": [
          "L'administration d'antibiotique(s) par voie systémique en présence d'une infection.",
          "L'administration d'un antibiotique dans l'objectif de prévenir le développement d'une infection locale, générale ou à distance.",
          "L'administration par voie systémique d'une dose unique d'antibiotique dans l'heure qui précède l'acte invasif",
          "L'administration d'un antibiotique par voie systémique lors de la réalisation d'un acte parodontal invasif, pour les patients à haut risque d'endocardite infectieuse et les patients immunodéprimés"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2021 2°EMD - Q1365\nLa prescription d'antibiotique, dans le cadre de l'urgence est systématique en cas de péricoronarite aigüe:",
        "options": [
          "VRAI",
          "FAUX"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2021 3°EMD - Q1376\nLa prescription d'une antibiothérapie curative en Parodontie pour la population générale est recommandée dans le cas de:",
        "options": [
          "Parodontites agressives",
          "Maladies parodontales nécrosantes",
          "Mucosite péri-implantaire",
          "Abcès parodontal"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2021 3°EMD - Q1391\nLes anti-Inflammatoires les plus utilisés en Parodontie sont plus particulièrement :",
        "options": [
          "Ceux qui ont une action sur le métabolisme des prostaglandines",
          "Les anti-inflammatoires stéroïdiens",
          "Les anti-inflammatoires non stéroïdiens",
          "Les salicylés dont la molécule de choix est l'aspirine"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Les anti-inflammatoires les plus utilisés et étudiés dans le cadre des maladies parodontales sont ceux qui ont une action sur le métabolisme des prostaglandines, et plus particulièrement les anti-inflammatoires non stéroïdiens"
      },
      {
        "questionText": "N°65 (2021 Résidanat - Q1674\nLa prescription d'une antibiothérapie curative en Parodontie pour la population‎ générale est recommandée dans le cas de :‎ 1- ‎Parodontites agressives.‎ 2- ‎Maladies parodontales nécrosantes.‎ 3- ‎Mucosite péri-implantaire.‎ 4- ‎Abcès parodontal‎ 5- ‎Toutes les réponses sont justes‎",
        "options": [
          "(1,3)‎",
          "‎ (1,2)‎",
          "(1,4)‎",
          "(1,2,4)‎",
          "(5)‎"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’antibiothérapie curative• L’antibiothérapie curative consiste en l’administration d’antibiotiques par voie systémique dans l’objectif de traiter une infection.Indications des antibiotiques en parodontie• Parodontite agressive : vu leur progression rapide, l’usage d’une antibiothérapie curative est recommandé en adjonction au débridement mécanique.• Récidive pendant le thérapeutique de soutien• Réponse clinique mauvaise ou moyenne après traitement conventionnel (notamment pour les poches profondes et LIR)• Possibilité de surinfection à partir d’autres sites oropharyngés infectés• En urgence :o Abcés parodontal avec altération de l’état généralo Suppuration• Antibioprophylaxie chez les patients à risque infectieux• GUN , PUN4 : Abcés parodontal avec altération de l’état général"
      },
      {
        "questionText": "N°72 (2021 Résidanat - Q1678\nLa molécule antibiotique de choix, pour traiter la parodontite ulcéro-nécrotique, est :‎",
        "options": [
          "Le métronidazole",
          "La tétracycline",
          "L'amoxicilline",
          "Association amoxicilline + acide clavulanique",
          "L'azithromycine"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "le métronidazole :-Bien que son mécanisme d'ction soit mal connu, il est considéré commebactéricide. Il est particulièrement efficace, par l'intermédiaire de ses métabolites actifs, contre Aa, Pi et Pg.-Il présente une demi-vie longue (10-12h) et une excellente diffusion tissulaire salivaire et dans le fluide gingival.indiqué en cas de GUN et de PUN : Flagyl 250mg 3fois/jour pendant 7 à 20 jours"
      },
      {
        "questionText": "N°2 (2020 3°EMD - Q1705\nL'antibiothérapie curative est indiquée:",
        "options": [
          "Pour diminuer le risque infectieux",
          "Pour traiter une infection déclarer",
          "Pour prévenir l'endocardite infectieuse",
          "Chez le sujet diabétique"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L’antibiothérapie curative• L’antibiothérapie curative consiste en l’administration d’antibiotiques par voie systémique dans l’objectif de traiter une infection.• L’antibiothérapie curative ne devra ni différer, ni se substituer au traitement étiologique non médicamenteux, en particulier chirurgical, du foyer infectieux."
      },
      {
        "questionText": "N°6 (2020 3°EMD - Q1773\nLa molécule d'antibiotique de choix, pour traiter la parodontite ulcéro nécrotique, est:",
        "options": [
          "Le métronidazole",
          "La tétracycline",
          "L'amoxicilline",
          "L'association amoxicilline + acide clavulanique"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Métronidazole : 1 500 mg/jour en deux ou trois prises"
      },
      {
        "questionText": "N°52 (2020 Résidanat - Q1945\nParmi les antibiotiques bactériostatiques on distingue : 1- Macrolides 2- Beta-lactamines 3- Tetracylines 4- Vancomycine 5- Amoxycilline",
        "options": [
          "(1,4)",
          "(1,5)",
          "(1,3)",
          "(1,2)",
          "(4,5)"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "2.Bêta-lactamines(ex : pénicillines, céphalosporines) → bactéricide4.Vancomycine→ bactéricide5.Amoxicilline(qui est une bêta-lactamine) → bactéricide"
      },
      {
        "questionText": "N°54 (2020 Résidanat - Q1946\nLe METRONIDAZOLE :",
        "options": [
          "A un mécanisme d'action bien connu.",
          "Est bactériostatique.",
          "A une demi-vie de deux à quatre heures.",
          "A une excellente diffusion tissulaire salivaire.",
          "Agit uniquement sur les germes aérobies."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Métronidazole:A:  son mécanisme d'action soit mal connu,B: il est considéré comme bactéricide. Il est particulièrement efficace, par l'intermédiaire de ses métabolites actifs, contre Aa, Pi et Pg.C: Il présente une demi-vie longue (10-12h) et une excellente diffusion tissulaire salivaire et dans le fluide gingival.-Il peut être utilisé seul mais il est le plus souventassocié à la spiramycine ou aux pénicillines.POSOLOGIE:750 à 1 g/ J en deux prises chez l’adulte 30 -40mg/kg/j en 3 prises chez l’enfant"
      },
      {
        "questionText": "N°57 (2020 Résidanat - Q1948\nLes tétracyclines utilisées en parodontologie sont :",
        "options": [
          "Deux fois plus concentrées dans le sérum que dans le fluide gingival.",
          "Efficaces à de faibles concentrations.",
          "Actives uniquement sur les bactéries gram positif.",
          "Actives uniquement sur les bactéries gram négatif.",
          "Caractérisées par un spectre antimicrobien très large."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Ce sont des antibiotiques à potentialité bactériostatique par inhibition de la synthèse protéique et s'opposant à la multiplication cellulaire. Elles sont actives sur Aa, Pg et Pi. (Golubet coll1983)leur concentration est généralement plus élevée dans le fluide gingival que dans le sérum, pas l'inverse"
      },
      {
        "questionText": "N°2 (2019 3°EMD - Q1989\nLe biofilm bactérien est sensible aux antibiotiques à large spectre:",
        "options": [
          "vrai",
          "faux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2019 3°EMD - Q2021\nLes anti-inflammatoires les plus utilisés et étudiés dans le cadre des maladies parodontales sont:",
        "options": [
          "Les anti-inflammatoires non stéroïdiens",
          "Les anti-inflammatoires stéroïdiens",
          "Ceux qui ont une action sur le métabolisme des prostaglandines",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2019 3°EMD - Q2034\nLe métronidazole:",
        "options": [
          "Est un antibiotique bactéricide, actif sur les germes aérobies",
          "Est un antibiotique Bactériostatique, actif sur les germes anaérobies",
          "Seul, peut éliminer l'Aggregati bacter actinomycetemcomitans (A.a.)",
          "Seul peut éliminer le Porphyromonas gingivalis (Pg"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "1-4-le métronidazole :-Bien que son mécanisme d'action soit mal connu, il est considéré commebactéricide.Il est particulièrement efficace, par l'intermédiaire de ses métabolites actifs,contre Aa, Pi et Pg.( anaérobies)-Il présente une demi-vie longue (10-12h) et une excellente diffusion tissulaire salivaire et dans le fluide gingival.-Il peut être utilisé seul mais il est le plus souvent associé à la spiramycine ou aux pénicillines.POSOLOGIE : 750 à 1 g/ J en deux prises chez l’adulte 30 -40mg/kg/j en 3 prises chez l’enfant"
      },
      {
        "questionText": "N°10 (2019 3°EMD - Q2118\nL'antibiotique de choix dans le traitement de la parodontite agressive est:",
        "options": [
          "Amoxicilline",
          "Azithromycine",
          "Métronidazole",
          "Association amoxicilline métronidazole"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Parodontites agressives localisées :La bactérie responsable est A.actinomycetemcomitens, en l’absence d’antibiogrammedoxicycline ou amoxicillinesont conseillées, en associant chirurgie parodontale et antibiothérapie.Parodontite agressives généralisées :L’association d’un traitement local chirurgical et d’une antibiothérapie, prescrite pendant la phase initiale du traitement,amoxicilline et métronidazolepuis pendant la phase chirurgicale, en adaptant de préférence l’antibiothérapie avec les résultats d’un antibiogramme"
      },
      {
        "questionText": "N°14 (2019 3°EMD - Q2187\nEn parodontologie, la prescription d'antibiotiques est indiquée dans le cas:",
        "options": [
          "Gingivite induite par la plaque",
          "Parodontite agressive",
          "Parodontite chronique",
          "Parodontite ulcéro-nécrotique"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Indications des antibiotiques en parodontie• Parodontite agressive : vu leur progression rapide, l’usage d’une antibiothérapie curative est recommandé en adjonction au débridement mécanique.• Récidive pendant le thérapeutique de soutien• Réponse clinique mauvaise ou moyenne après traitement conventionnel (notamment pour les poches profondes et LIR)• Possibilité de surinfection à partir d’autres sites oropharyngés infectés• En urgence :o Abcés parodontal avec altération de l’état généralo Suppuration• Antibioprophylaxie chez les patients à risque infectieux• GUN , PUN"
      },
      {
        "questionText": "N°41 (2018 Résidanat - Q2609\nLes cyclines :",
        "options": [
          "Sont des antibiotiques à potential bactéricide.",
          "INHIBENT la synthèse protéique.",
          "Aident à la multiplication cellulaire.",
          "Augmentent la destruction du tissu conjonctif.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a: agents bactériostatiques agissant sur la synthèse des protéines.c : s'opposant à la multiplication cellulaire.d : les cyclines avaient des capacités anticollagénases et réduisaient ainsi la destruction du tissu conjonctif."
      },
      {
        "questionText": "N°42 (2018 Résidanat - Q2610\nDans le traitement des parodontites, la prescription d'un antibiotique doit tenir compte : 1- De la profondeur de la poche parodontale. 2- De l'état général du patient. 3- Des bactéries impliquées dans la maladie parodontale. 4- Du degré de lyse osseuse. 5- Toutes les réponses sont justes.",
        "options": [
          "(1-2-3)",
          "(2-3-4)",
          "(1-3)",
          "(2-3)",
          "(5)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le but d'un traitement antibiotique par voie générale lors d'une parodontopathie est la suppression maximale des germes pathogènes.Les candidats prioritaires pour ces thérapies sont des patients chez quila perte d'attache progresse malgré un traitement mécanique conventionnel bien conduit,des patients avec des PJLou d'autres types deparodontites d'apparition précoce, oudes patients dont l'état général prédispose à l'apparition de parodontopathies."
      },
      {
        "questionText": "N°46 (2018 Résidanat - Q2611\nLes BETA LACTAMINES :",
        "options": [
          "INHABENT les BETA-LACTAMASES.",
          "Provoquent une lyse cellulaire.",
          "Ont un spectre réduit.",
          "Sont efficaces sur les germes positifs.",
          "Sont inefficaces sur les germes anaérobies."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a : Elles inhibent la formation de la paroi bactérienne aboutissant à une lyse cellulaire et ont de ce fait un mécanisme bactéricidec : . Elles ont un spectre larged : sont efficaces sur les germes G-e : rencontrent de nombreuses résistances dues à la production de b lactamases.L'adjonction d'un inhibiteur de b lactamases (acide clavulanique) permet de lutter contre la majorité des bactéries parodontopathogènes"
      },
      {
        "questionText": "N°50 (2018 Résidanat - Q2612\nL'association des antibiotiques dans le traitement de la maladie parodontale : 1- Permet d'élargir le spectre microbien de chaque ATB. 2- Permet de prescrire des doses faibles de chaque ATB. 3- Permet d'exploiter la synergie qui découle de cette association. 4- A un but préventif. 5- Toutes les réponses sont justes.",
        "options": [
          "(1-2-4)",
          "(1-3-4)",
          "(1-2)",
          "(1-2-3)",
          "(5)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Intérêt des associations:- élargir le spectre microbien de chaque ATB ;- prescrire des doses faibles de chaque ATB ;- exploiter la synergie qui découle de cette association.Les associations les plus utilisées :1. Amoxicilline + métronidazole : Pendant 7 à 10 jmétronidazole à 250mg : 1 cp 2fois par jourAmoxicilline à 500mg : 1 gélules 3 fois par jour. Cette association est indiquée en cas de parodontite agressive généralisée ou localisée selon la classification ARMITAGE2. Amoxicilline + acide clavulanique (Augmentin à 250mg ou à 500mg):- Utilisé en cas de parodontites réfractaires et de GUN, à raison d'un cp de 500mg 3fois par jour, en vue d'inhiber l'action des ß-lactamases.- il est actif sur Pg, Pi, Fn et sur peptostreptococcus.3. Métronidazole + spiramycine (rodogyl ou orogyl):-actif sur Pg et sur l'Aa.-Utilisé à raison de 2g/ jour pendant 10 jours.4. Métronidazole + fluoroguinolone :Le métronidazole potentialise l'action du fluoroquinolone contre les bactéries."
      },
      {
        "questionText": "N°2 (2017 2°EMD - Q2647\nParmi ces familles antibiotiques, lequel possède une action d'inhibition de collagène:",
        "options": [
          "Les B-lactamines.",
          "Les cyclines",
          "Les macrolides",
          "Métronidazole"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2017 2°EMD - Q2672\nLe choix d'un antibiotique dépend de la spécificité bactérienne:",
        "options": [
          "VRAI",
          "FAUX"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2017 2°EMD - Q2710\nLe gel de Minocycline « dentomycine >> à 2%",
        "options": [
          "Est un métronidazole",
          "A une libération prolongée",
          "A une concentration augmentée dépassant les 24h",
          "Est utilisé à raison de 2 applications par semaine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Il présente les même caractéristiques que le gel métronidazoleEst utilisé à raison de 4 applications par semaine"
      },
      {
        "questionText": "N°7 (2017 2°EMD - Q2711\nLa prescription d'un antibiotique chez un cardiopathie à risque infectieux",
        "options": [
          "A un but curatif",
          "A un but préventif",
          "Permet d'accélérer le processus de cicatrisation",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "patients à haut risque d’endocardite infectieuse (prothèse valvulaire, antécédent d’endocardite infectieuse, cardiopathie congénitale cyanogène)= Antibiothérapie prophylactique"
      },
      {
        "questionText": "N°17 (2017 2°EMD - Q2811\nParmi ces associations d'antibiotiques suivantes, laquelle est utilisé dans le cas de parodontite agressive",
        "options": [
          "Amoxicilline +acide clavulanique",
          "Amoxicilline + métronidazole",
          "Métronidazole + fluoroquinolone",
          "Métronidazole + spíramycine"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Cette association est indiquée en cas de parodontite agressive généralisée ou localisée selon la classification ARMITAGE"
      }
    ]
  },
  {
    "title": "URGENCE _ VITAMINE ET HORMONE",
    "subject": "pharmacologie",
    "questions": [
      {
        "questionText": "N°4 (2025 3°EMD DENTAIRE - Q66\nQuel médicament peut être utilisé pour prévenir un malaise vagal chez un adulte anxieux ?",
        "options": [
          "Paracétamol;",
          "Diazepam;",
          "Hydroxyzine;",
          "Loratadine."
        ],
        "correctOptionIndexes": [],
        "explanation": "Prévention :•\tProgrammer les patients à risque le matin…•\tRassurer le patient et expliquer toutes les étapes du traitement.•\tPrivilégier des séances de courte durée.•\tHydroxyzine 100 à 200 mg/J (adulte) max 1 mg/kg/J enfant 6-15 ans"
      },
      {
        "questionText": "N°5 (2025 3°EMD DENTAIRE - Q89\nParmi les mesures ci-dessous, laquelle contribue à prévenir un malaise vagal chez un patient anxieux au cabinet dentaire ?",
        "options": [
          "Programmer les soins le matin ;",
          "Retarder les soins en fin de journée:",
          "Augmenter la durée de la séance pour rassurer le patient;",
          "Éviter toute explication du traitement pour ne pas inquiéter le patient."
        ],
        "correctOptionIndexes": [],
        "explanation": "B : Programmer les patients à risque le matin pour éviter le stress de l’attente et la fatigue.C : Privilégier des séances de courte durée.D : Rassurer le patient et expliquer toutes les étapes de traitement."
      },
      {
        "questionText": "N°6 (2025 3°EMD DENTAIRE - Q123\nQuel médicament est recommandé en première intention pour traiter une réaction anaphylactique aiguë au cabinet dentaire ?",
        "options": [
          "Diphenhydramine;",
          "Adrénaline (épinephrine);",
          "Salbutamol;",
          "Loratadine."
        ],
        "correctOptionIndexes": [],
        "explanation": "B : Programmer les patients à risque le matin pour éviter le stress de l’attente et la fatigue.C : Privilégier des séances de courte durée.D : Rassurer le patient et expliquer toutes les étapes de traitement."
      },
      {
        "questionText": "N°7 (2024 3°EMD - Q496\nLe malaise hypoglycémique (chez le patient) au cabinet dentaire :",
        "options": [
          "Est une urgence médicale où l'appel au Service d'Aide Médicale Urgente (SAMU) est systématique",
          "N'est pas une urgence médicale",
          "Est une urgence médicale ne nécessitant pas un appel au SAMU",
          "Toutes les propositions ci-dessus sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Urgences susceptibles de nécessiter l’interventiondu SAMUMalaise hypoglycémique.Crise d’asthme/Convulsive/HypertensiveUrgences allergiques"
      },
      {
        "questionText": "N°8 (2024 3°EMD - Q511\nL'appel au Service d'Aide Médicale Urgente (SAMU) est systématique en cas de :",
        "options": [
          "Crise hypertensive",
          "Crise convulsive",
          "Syndrome coronarien aigu",
          "Crise d'asthme"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Urgences où l’appel au SAMU est systématiqueSyncope.Syndrome coronarien aigueArrêt cardiaque"
      },
      {
        "questionText": "N°9 (2024 3°EMD - Q518\nEn cas de crise de spasmophilie :",
        "options": [
          "le médecin dentiste pourra poursuivre les soins",
          "Le médecin dentiste devra allonger le patient en position latérale de sécurité (PLS)",
          "Il faudra faire respirer le patient dans un sac en papier afin de contrôler sa respiration",
          "Toutes les propositions sont justes"
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "onduite à tenir - Arrêter immédiatement les soins dentaires en cours; - Isoler le patient en position semi-assise, le rassurer et libérer ses voies aériennes  supérieures; - Obtenir un contrôle de sa respiration : faire respirer le patient dans un sac en papier (Augmentation CO2 et réduction des contractions musculaires); - Si crise persistante : Appeler le service des secours et médiquer le patient par injection de 10 à 15 mg de Diazépam en IV. - Reprendre les soins si le patient est rassuré."
      },
      {
        "questionText": "N°2 (2023 2°EMD - Q699\nLa prise en charge thérapeutique du choc anaphylactique aigu se fait par :",
        "options": [
          "L'adrénaline par voie injectable",
          "L'atropine par voie injectable",
          "Les corticoïdes par voie orale",
          "Réponse a+c"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2022 2°EMD - Q1109\nLorsqu' un patient fait un malaise au cabinet dentaire(RF ) :",
        "options": [
          "La ventilation est préconisée en première intention quelque soit le type de malaise",
          "L'insuline est administrée en cas d'un malaise hypoglycémique chez un diabétique",
          "Le malaise vagal peut être maitrisé en faisant respirer au patient un air enrichi en CO2",
          "L'atropine peut être administrée par voie sous-cutanée en cas de syncope"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2022 2°EMD - Q1124\nEn cas d'hypertension artérielle paroxystique au cabinet dentaire:",
        "options": [
          "Une administration sublinguale de trinitrine est nécessaire",
          "Une administration sublinguale de nifedipine est nécessaire",
          "Une administration d'adrénaline par voie sous cutanée est préconisée",
          "Toutes les réponses précédentes sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2021 2°EMD - Q1469\nLorsqu'un patient fait un malaise au niveau cabinet dentaire:",
        "options": [
          "La ventilation est préconisée en première intention quelque soit le type de malaise",
          "L'insuline est administrée en cas d'un malaise hypoglycémique chez un diabétique",
          "Le malaise vagal peut être pris en charge en faisant respirer au patient un air enrichi en CO2",
          "L'atropine peut être administré par voie sous-cutanée an cas de bradycardie lors de la syncope"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2021 2°EMD - Q1491\nSi un patient présente des douleurs thoraciques au cabinet dentaire :",
        "options": [
          "Un diagnostic d'angor est directement posé",
          "Un massage cardiaque est préconisé",
          "L'administration de trinitrine en sublinguale est préconisée si le diagnostic de l'angor est posé",
          "La trinitrine est utilisée pour augmenté la fréquence cardiaque"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2021 2°EMD - Q1536\nEn cas de choc anaphylactique quel est le médicament à ne pas injecter",
        "options": [
          "L'adrénaline",
          "L'atropine",
          "Un corticoide",
          "Un antihistaminique"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°9 (2020 2°EMD - Q1813\nLes médecins-dentistes doivent être capables de prendre en charge une situation d'urgence survenant dans leur cabinet. Par conséquent, il est obligatoire de posséder des médicaments d'urgence comme",
        "options": [
          "Atropine. La trinitrine, Epinéphrine (adrénaline)",
          "Paracétamol injectable",
          "Antiémétique",
          "Ibuprofène"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2020 2°EMD - Q1826\nConcernant les urgences au cabinet dentaire, on peut utiliser",
        "options": [
          "La trinitrine pour soulager une crise d'angor même chez un patient ayant une pression artérielle systolique inférieur à 100 mmHg",
          "La voie intramusculaire chez les patients sous anticoagulant ou ayant des troubles de la coagulation",
          "L'atropine lors d'un arrêt ventilatoire (le patient ne respire plus)",
          "Le salbutamol qui a une action immédiate pour soulager une crise d'asthme simple et la terbutaline si l'asthme est aigu et grave"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°5 (2019 3°EMD - Q2046\nLes antithyroïdiens de synthèse, comme le Méthimazole",
        "options": [
          "Sont utilisés dans le traitement des hypothyroïdies.",
          "Peuvent donner comme effets indésirables des hépatites",
          "Ont comme effet indésirable l'agranulocytose qui se manifeste principalement par des ulcérations buccales, et les lésions gingivales et palatines couvertes d'une membrane grisâtre.",
          "Dans le cas d'apparition de ces ulcérations et lésions il faut immédiatement alerter le médecin traitant sans procéder à un traitement local comme le nettoyage des lésions nécrotiques à l'eau oxygénée."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2019 3°EMD - Q2063\nLa carence en acide folique ou la vitamine B9 peut se traduire par",
        "options": [
          "Le rachitisme",
          "L'ostéomalacie",
          "Des Anémies macrocytaires ou mégaloblastique.",
          "Le scorbut"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2019 3°EMD - Q2079\nLes médecins-dentistes doivent être capables de prendre en charge une situation d'urgence survenant dans leur cabinet. Par conséquent, ils sont dans l'obligation de posséder des médicaments d'urgence comme",
        "options": [
          "Atropine, trinitrine, Epinéphrine (adrénaline).",
          "Paracétamol injectable.",
          "Antiémétiques.",
          "Insulines."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2019 3°EMD - Q2088\nFace aux états d'urgences au cabinet dentaire, on peut utiliser",
        "options": [
          "La trinitrine pour soulager une crise d'angor même chez un patient ayant une pression artérielle systolique inférieur à 100 mmHg.",
          "La voie intramusculaire chez les patients sous anticoagulant ou ayant des troubles de la coagulation.",
          "L'atropine lors d'un arrêt ventilatoire (le patient ne respire plus).",
          "Le salbutamol qui a une action immédiate pour soulager une crise d'asthme simple et la terbutaline si l'asthme est aigu et grave."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      }
    ]
  }
];

module.exports = pharmacologyQuizzes;
