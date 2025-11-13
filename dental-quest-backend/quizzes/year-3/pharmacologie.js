// quizzes/year-3/pharmacologie.js
// PART 1/3
// Note: Correct answers are determined based on the provided commentary/explanation.

const pharmacologyQuizzes = [
  {
    title: "Introduction à la pharmacologie",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant les médicaments appartenant à la liste I:",
        options: [
          "Ils sont obligatoirement à prescription hospitalière",
          "Ils sont délivrés uniquement sur ordonnance",
          "Ce sont des substances toxicomanogènes",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>Les médicaments à prescription obligatoire sont inscrits sur deux listes distinctes : la liste I ou la liste II.</strong></p><p><strong>Les médicaments inscrits sur la liste I ne peuvent être délivrés qu'une seule fois par le pharmacien avec la même ordonnance, sauf si le médecin mentionne expressément la possibilité d'un renouvellement.</strong></p><p><strong>A : Les médicaments à prescription hospitalière : ils ne peuvent être prescrits qu'à l'hôpital.</strong></p>"
      },
      {
        questionText: "La pharmacovigilance permet:",
        options: [
          "D'identifier les risques liés à l'utilisation d'un médicament seulement lors de développement clinique;",
          "D'évaluer le rapport bénéfice/ risque seulement lors de soumission du dossier d'enregistrement d'un médicament;",
          "De suivre la sécurité de médicament uniquement avant sa commercialisation;",
          "La réévaluation du rapport bénéfice/ risque et l'ajustement des conditions d'utilisation du médicament pendant toute la durée de sa commercialisation."
        ],
        correctOptionIndexes: [3],
        explanation: "<p> La pharmacovigilance permet le suivi d’un plus grand nombre de patients, de diverses populations et sur toute la durée de commercialisation du médicament. </p>"
      },
      {
        questionText: "Concernant la déclaration des effets indésirables, quelle est la bonne réponse:",
        options: [
          "Seuls les professionnels de santé peuvent déclarer un effet indésirable;",
          "On ne déclare que les effets indésirables graves;",
          "La déclaration des effets indésirables suspectés est importante car elle permet une surveillance continue du rapport bénéfice/risque du médicament;",
          "En Algérie, la déclaration des effets indésirables au centre national de pharmacovigilance et de matériovigilance se fait uniquement via mail électronique."
        ],
        correctOptionIndexes: [2],
        explanation: "<p> qui déclare?</p><p> –Proprofessionnels de la santé: médecin, dentiste, pharmacien, sage femme,… Patients </p><p><img src=\"https://medspacedz.com/client/data/qimages/78d17104-1be0-11f0-a4a7-960004386930/g3zgcji1jLag9eDyH53o.png\"></p>"
      },
      {
        questionText: "Concernant les médicaments stupéfiants:",
        options: [
          "Ils peuvent être achetés sans ordonnance;",
          "Ce sont des médicaments non listés;",
          "Ils appartiennent à la liste I;",
          "Ce sont des substances toxicomanogènes."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La pharmacodynamie::",
        options: [
          "Etudie le devenir des médicaments dans l'organisme",
          "Etudie l'effet des médicaments sur l'organisme",
          "N'étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l'étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>La pharmacodynamie se concentre sur la façon dont les médicaments interagissent avec le corps et produisent leurs effets, y compris les mécanismes par lesquels ils agissent sur les cellules, les tissus et les organes pour atteindre leurs objectifs thérapeutiques. </p>"
      },
      {
        questionText: "La pharmacocinétique :",
        options: [
          "C’est l’étude du devenir du médicament dans l’organisme en fonction",
          "du temps",
          "C’est l’étude de ce que fait le médicament à l’organisme qui le reçoit",
          "C’est l’emploi des médicaments pour traiter les maladies",
          "C’est l’étude du prix des médicaments"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : c’est La pharmacodynamie </p><p>C : c’est La pharmaco-thérapeutique </p><p>D : c’est  La pharmaco-économie </p>"
      },
      {
        questionText: "la pharmacodynamie :",
        options: [
          "Etudie le devenir des médicaments dans l’organisme",
          "Etudie l’effet des médicaments sur l’organisme",
          "N’étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l’étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La pharmacogénétique :",
        options: [
          "Peut être responsable de la variabilité pharmacocinétique à une mutation au niveau des enzymes du métabolisme",
          "Peut être responsable de la variabilité pharmacodynamique à une mutation au niveau de la cible pharmacologique",
          "Peut être responsable d’une absence de réponse au traitement (notion de non répondeurs )",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La pharmacovigilance :",
        options: [
          "regroupe l'ensemble des activités relatives à la détection, l'évaluation prévention des risques liés aux médicaments avant et après leur mise sur le marche",
          "Les autorités compétentes après avoir reçu les notification des effets indésirables systématiquement l'autorisation de mise sur le marché du produit (AMM)",
          "La déclaration des effets indésirables médicamenteux se limite aux médecins",
          "La notification spontanée est la méthode la plus utilisée en pharmacovigilance"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La connaissance de la cinétique d'un médicament n'apporte pas des informations permettant de :",
        options: [
          "Choisir les voies d'administration",
          "Choisir les formes pharmaceutiques",
          "Adapter la posologie",
          "Connaitre son mode d'action"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
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
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La pharmaco-vigilance:",
        options: [
          "Est la surveillance des médicaments avant l'obtention de l'autorisation de mise sur le marche",
          "Est la détection des effets indésirables durant les essais précliniques",
          "Est la détection des effets indésirables avant les essais précliniques",
          "Est considérée comme la phase IV des essais cliniques"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Elle concerne la surveillance des effets indésirables et la sécurité des médicaments après leur mise sur le marché. </p>"
      }
    ]
  },
  {
    title: "Les voies d’administrations",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Parmi les avantages de la voie orale",
        options: [
          "Elle est pratique chez les patients comateux",
          "Elle est peu onéreuse",
          "Certains médicaments administrés par cette voie peuvent être détruits par le suc gastrique",
          "C'est la voie recommandée chez un patient en cas de crise d'épilepsie"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Impossibilité d'administration si trouble de la déglutition (coma, vomissement)</strong></p><p><strong>C : ceci n’est pas un avantage mais une limite ; Limites : … possible destruction PA par sucs digestifs (insuline)</strong></p><p><strong>D : Ce n’est pas une voie d’urgence</strong></p>"
      },
      {
        questionText: "Concernant les collyres:",
        options: [
          "La solution doit être isotonique au plasma et stérile",
          "Ils ont une durée de vie illimitée après ouverture du flacon",
          "Ils sont appliqués au niveau de la muqueuse nasale",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "<p><strong>A : stérilité, isotonicité aux larmes et neutralité</strong></p><p><strong>B : En pratique : – durée de vie limitée après ouverture du flacon</strong></p><p><strong>C : Mdt administré au niveau de l’œil : collyre, pommade ophtalmique, action locale</strong></p>"
      },
      {
        questionText: "Parmi les avantages de la voie intraveineuse :",
        options: [
          "Simple et facile à administrer;",
          "Adaptée aux traitements pris en ambulatoire;",
          "Permet l'administration des médicaments chez les patients inconscients;",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A;Voie IV : rapide , dose précise </p><p>B:Thérapeutique d’urgence </p>"
      },
      {
        questionText: "Parmi les inconvénients de la voie orale:",
        options: [
          "Impossibilité d'administration si trouble de la déglutition",
          "Inadaptée aux traitements pris en ambulatoire",
          "Elle nécessite un personnel qualifié",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les sirops:",
        options: [
          "Leur conservation n'est pas limitée après ouverture du flacon",
          "Ils contiennent obligatoirement du sucre",
          "Ils doivent être stériles et apyrogènes",
          "C'est la dispersion d'un ou plusieurs principes actifs solides sous forme de poudre insoluble dans un liquide"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Ils doivent être stériles et apyrogènes - Les sirops doivent être préparés de manière stérile et ne doivent pas contenir de pyrogènes pour garantir leur sécurité d'utilisation.</p>"
      },
      {
        questionText: "la voie d’administrations sous-cutanée :",
        options: [
          "Une voie d’administration parentérale indirecte",
          "Faite par injection de médicaments en solution aqueuse et huileuse",
          "A effet retardé et progressif",
          "Une voie d’urgence"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : La voie parentérale est l'administration la plus directe car elle évite le passage par le tube digestif. </p><p>B : Médicaments en solution aqueuse seulement </p><p>D : La voie intraveineuse est la voie d’urgence  </p>"
      },
      {
        questionText: "la voie d’administration intra-ligamentaire est une administration est une administration dans :",
        options: [
          "Le septum osseux intermédiaire",
          "Le desmodonte",
          "Le sulcus gingival",
          "La muqueuse buccale"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : c’est la voie intra-septale  </p><p>C : c’est l’irrigation intra-gingivale </p>"
      },
      {
        questionText: "quel est l’avantage des voies parentérales :",
        options: [
          "Administration facile",
          "Coût faible",
          "Rapidité de l’effet",
          "Evite le risque infectieux"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : Administration uniquement par une infirmière ou un médecin, sauf chez le patient diabétique pour l'injection d'insuline. </p><p>D : Risques infectieux liés à l'injection. </p>"
      },
      {
        questionText: "les préparations injectables et les formes ophtalmiques doivent être :",
        options: [
          "Stériles",
          "Pyrogènes",
          "Hypotonique",
          "A pH alcalin"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : Apyrogènes (pour les préparations de grand volume) = absence de substance pyrogènes provoquant un choc thermique après injection, </p><p>C : Isotoniques ou hypertoniques (pression osmotique = ou > celle milieu physiologique), Une préparation hypotonique provoque une hémolyse </p><p>D : pH proche du pH physiologique. </p>"
      },
      {
        questionText: "La voie d'administration Intra-ligamentaire est une administration dans :",
        options: [
          "Le septum osseux intermédiaire",
          "Le sulcus gingival",
          "La muqueuse buccale",
          "Le desmodonte"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La forme pharmaceutique d'un médicament permet de :",
        options: [
          "Prédire ses effets indésirables",
          "Déterminer son mode d'administration",
          "Connaitre sa composition",
          "Prédire son mécanisme d'action"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'avantage principal de la voie per os est:",
        options: [
          "Pas de risque d'action ou de dégradation du médicament",
          "Cout modérément élevé",
          "Administration facile",
          "Rapidité de l'effet"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>A : Risque de dégradation du foie : hépatotoxicité. </p><p>B : Coût faible. </p><p>C : Le médicament est absorbé par l'appareil digestif, est transformé dans le foie, puis passe dans la circulation sanguine pour arriver vers les organes où il exerce son action.</p>"
      },
      {
        questionText: "La voie d'administration intra-ligamentaire est une administration dans",
        options: [
          "Le septum osseux intermédiaire",
          "Le sulcus gingival",
          "La muqueuse buccale",
          "Le desmodonte"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "a propos des voies d’administrations des médicaments :",
        options: [
          "La voie intraveineuse peut s’associer à un effet de premier passage hépatique",
          "La voie rectale est utilisée pour avoir une réaction in situ",
          "La voie intra-artérielle n’est accompagnée d’aucun effet de premier passage",
          "La voie sous-cutanée est une voie à biodisponibilité absolue"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>A : La voie intraveineuse évite le passage hépatique </p><p>B :La voie rectale est une voie générale ou systémique ( in situ = voie locale ) </p><p>D : La voie sous-cutanée est une voie à biodisponibilité absolue</p>"
      },
      {
        questionText: "l’absence de substances pyrogènes est obligatoire pour les formes destinées à la/aux voie(s)",
        options: [
          "Intraveineuse",
          "Transcutanée",
          "Transdermique",
          "Respiratoire"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Les préparations injectables et les formes ophtalmiques doivent être Apyrogènes </p>"
      }
    ]
  },
  {
    title: "Absorption Des médicaments",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "L'absorption d'un médicament est :",
        options: [
          "Le passage du principe actif de sa forme pharmaceutique au milieux extracellulaire",
          "Le transfert du principe actif du médicament de la forme pharmaceutique aux cellules tissulaires des organes internes",
          "Le passage du principe actif de son site d'administration à la circulation générale",
          "Le transfert du médicament du sang vers les organes et tissus."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : L’absorption est le passage d’un médicament de son site d’administration vers la circulation générale</strong></p><p><strong>B : Cela correspond à la distribution, pas à l’absorption.</strong></p><p><strong>« La distribution est un processus de transfert (réversible) du PA, à partir de la circulation vers les organes et tissus ».</strong></p>"
      },
      {
        questionText: "La forme chimique du principe actif la plus sujette. à être absorbée est :",
        options: [
          "La forme solide tel que les comprimés",
          "La forme non ionisée",
          "La forme liquide tel que les solutions buvables",
          "La forme hydrosoluble"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Les formes solides doivent d’abord se désintégrer et se dissoudre</strong></p><p><strong>« Hydro solubilité : limite la dissolution des médicaments à partir de leur forme pharmaceutique généralement solide ».</strong></p>"
      },
      {
        questionText: "Lors de la phase de distribution des médicaments, la fixation aux éléments figurés du sang englobe:",
        options: [
          "Les formes fixées sur les hématies",
          "La fixation sur les récepteurs cellulaires des organes",
          "La liaison aux protéines plasmatiques",
          "La fixation sur les membranes des globules blancs."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong> A : La liaison du médicament aux éléments figurés du sang : hématies, leucocytes</strong></p><p><strong>B : Cela fait partie de la pharmacodynamie (interaction médicament–récepteur)</strong></p><p><strong>C : ce n’est pas un élément figuré, mais une composante du plasma</strong></p>"
      },
      {
        questionText: "Lors de la liaison aux protéines plasmatiques, les médicaments acide faibles se lient :",
        options: [
          "A l'albumine",
          "Aux lipoprotéines uniquement",
          "Avec une liaison forte et irréversible",
          "A un grand nombre de site sur l'albumine."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>A : Les acides faibles (ex : AINS, anticoagulants) se lient principalement à l’albumine</strong></p><p><strong>C :  La liaison aux protéines plasmatiques est réversible</strong></p><p><strong>D : Faible nombre de sites.</strong></p><p class=\"ql-align-center\"><img src=\"https://medspacedz.com/client/data/qimages/438d3565-b306-4660-9d15-4acae0e4741f/zbDRc6vWXeLKUVbYLXs6.png\"></p>"
      },
      {
        questionText: "Concernant l'absorption des médicaments:",
        options: [
          "Les cations bivalents réduisent l'absorption des Cyclines",
          "Les antiacides améliorent la biodisponibilité des médicaments qui leur sont associés",
          "La modification de l'état d'ionisation d'un médicament n'a aucune influence sur l'absorption de ce dernier",
          "L'absorption via des systèmes de transport et n'est pas sujette aux interactions médicamenteuses."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>A : « Tétracyclines – Antiacides (Al³+, Ca²+, Mg²+), lait, Zn²+, Fe²+ → Formation de chélates peu solubles entraînant une réduction de l’absorption des cyclines. »</strong></p><p><strong>B : « Antiacides (oxydes et hydroxydes d’aluminium, calcium, magnésium…) → formation de complexes peu solubles entraînant ↓ biodisponibilité. »</strong></p><p><strong>C : « Modification de l’état d’ionisation des médicaments → influence leur dissolution et absorption. »</strong></p>"
      },
      {
        questionText: "Pourquoi l'absorption des médicaments pris par voie per os se fait essentiellement en milieux intestinal ?",
        options: [
          "La surface intestinale dépasse les 200 mètres carré ;",
          "Le pH acide de l'intestin;",
          "Le débit sanguin modéré irriguant l'intestin;",
          "Les sécrétions enzymatiques intestinales"
        ],
        correctOptionIndexes: [0],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d3d90d-1be0-11f0-a4a7-960004386930/PshbGh5ptneFD5kioFD8.png\"></p>"
      },
      {
        questionText: "Concernant l'état d’ionisation des molécules médicamenteuses:",
        options: [
          "Seule la forme ionisée est absorbé par diffusion;",
          "Dépend du pH de la molécule;",
          "Dépend du poids moléculaire de la molécule;",
          "Permet à un acide faible d'être mieux absorbé en milieux acide."
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A: les deux formes sont absorbé en faveur de la forme non ionisé </p><p>B:L’état d’ionisation dépend du pH du milieu </p><p>C: c’est la Vitesse de transfert qui  dépend de la masse moléculaire des particules</p>"
      },
      {
        questionText: "L'absorption d'un médicament est plus importante quand :",
        options: [
          "Le médicament est polaire",
          "Le médicament est acide faible en milieu acide",
          "Le médicament est base faible en milieu acide",
          "Le médicament a une masse moléculaire élevé"
        ],
        correctOptionIndexes: [1],
        explanation: "<p> Lorsque le médicament est un acide faible, il peut être ionisé en milieu acide, ce qui le rend plus soluble et favorise son absorption dans l'estomac, par exemple. Cela augmente l'absorption du médicament. </p>"
      },
      {
        questionText: "Concernant l'absorption des médicaments par voie orale:",
        options: [
          "Implique les mécanismes de transport, transmembranaire passif",
          "Implique les mécanismes de transport transmembranaire actif",
          "Se fait essentiellement au niveau des intestins",
          "Entraine toujours des cycles entéro-hépatique"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Le passage des principes actifs à travers la muqueuse gastro-intestinal fait intervenir tous les mécanismes de transport transmembranaire : diffusion passive ; transport actif ; diffusion facilité ; filtration et pinocytos </p><p>L’intestin grêle est le site le plus important pour l’absorption du médicament </p>"
      },
      {
        questionText: "Parmi les propriétés des médicaments suivantes quelle(s) est (sont) celle(s) qui influence(nt) leur absorption",
        options: [
          "La forme galènique",
          "Le volume liquidien de l'organisme",
          "Le polymorphisme génétique de CYP450",
          "L'administration par voie intra veineuse"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "l’absorption des médicaments :",
        options: [
          "Concerne toutes les voies d’administrations",
          "Ne concerne que les voies d’administration indirecte",
          "N’implique que des mécanismes de diffusion actifs et passifs",
          "Est influencée par la fonction rénale du patient"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Ce phénomène concerne toutes les voies d’administration à visé systémique sauf la </p><p>voie intraveineuse, intra-artérielle et intracardiaque</p><p>C : implique  des mécanismes de diffusion actifs ,passifs et facilitée  </p><p>D : Est influencée par la Vitesse de vidange gastrique transit </p>"
      },
      {
        questionText: "quelle est la propriété physic-chimique impliquée dans l’absorption des médicaments et qui dépend du pH du milieu :",
        options: [
          "Etat d’ionisation",
          "Liposolubilité",
          "Hydrosolubilité",
          "Masse molaire"
        ],
        correctOptionIndexes: [0],
        explanation: "<p> L’état d’ionisation dépend du pH du milieu </p><p>Le Ks (coefficient de partage) renseigne sur la liposolubilité </p><p>Hydrosolubilité : Limite la dissolution des médicaments. </p><p>Masse molaire : Vitesse de transfert dépend de la masse moléculaire des particules </p>"
      },
      {
        questionText: "la résorption d’un médicament acide faible devient indépendante du pH du milieu quand son pKa est :",
        options: [
          "Au-dessous de 3.5",
          "De 3.5 à 6",
          "De 6 à 8.5",
          "Au-delà de 8.5"
        ],
        correctOptionIndexes: [0],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d3e2b5-1be0-11f0-a4a7-960004386930/WTKqprtTmqUCnKTNUTcd.png\"></p>"
      },
      {
        questionText: "L'absorption des médicaments :",
        options: [
          "Concerne toutes les voies d'administration",
          "Concerne les voies d'administration indirecte",
          "N'implique que des mécanismes de diffusion actifs et passifs",
          "Est influencée par la fonction rénale du patient"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Le transport passif des médicaments à travers les membranes cellulaires :",
        options: [
          "Nécessite de l'énergie",
          "Est saturable",
          "Ne concerne que les formes non ionisées",
          "Peut être diminué par compétition"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>La diffusion passive concerne les molécules liposolubles non ionisées, capables de se dissoudre dans les constituants membranaires. </p><p>C'est un phénomène qui n'a pas besoin d'énergie et de transporteur, donc les phénomènes de saturation et d'inhibition compétitive sont inexistants</p>"
      },
      {
        questionText: "Les molécules acides faibles:",
        options: [
          "Se trouvent l'état ionisé en milieu alcalin",
          "Se trouvent l'état ionisé en milieu acide",
          "Sont absorbés essentiellement en milieu alcalin",
          "Leur absorption est indépendante de la vidange gastrique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>En milieu basique: l’ionisation est importante, d’où une fraction ionisée plus grande, ce qui limitera le passage transmembranaire de cette substance, </p>"
      },
      {
        questionText: "A propos de l'absorption des médicaments par voie rectale:",
        options: [
          "La surface d'absorption est plus importante que celle de la voie orale",
          "Elle n'est pas concernée par l'effet de premier passage hépatique",
          "La vitesse d'absorption est plus grande que celle de la voie orale",
          "Elle n'est pas recommandée pour les nourrissons"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos du phénomène de l'absorption des médicaments:",
        options: [
          "Il nécessite à la fois une liposolubilité et une hydrosolubilité de la molécule",
          "Il se fait essentiellement par transport actif",
          "Il se produit pour toutes les voies d’administrations",
          "Il est toujours suivis par l’effet de premier passage"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>La liposolubilité est importante pour que les médicaments traversent les membranes cellulaires, tandis que l'hydrosolubilité est importante pour que les médicaments se dissolvent dans les fluides corporels </p>"
      }
    ]
  },
  {
    title: "distribution des médicaments",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "La fixation aux protéines plasmatiques est caractérisée by:",
        options: [
          "La formation de complexes «< Médicament- Protéine »> actifs, diffusibles et éliminables;",
          "La formation d'une forme liée de transport ou de stockage;",
          "La liaison des médicaments exclusivement à l'albumine",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d3e88b-1be0-11f0-a4a7-960004386930/zTgeV9WKMQ9nsxaB9MP7.png\"></p>"
      },
      {
        questionText: "Concernant la diffusion tissulaire des médicaments:",
        options: [
          "Elle est influencée par le débit sanguin irrigant les tissus;",
          "C'est le passage de la forme liée active vers les tissus;",
          "Le passage des médicaments du plasma vers les tissus se fait diffusion passive uniquement; par",
          "Elle n'est pas influencée par les caractéristiques physico-chimiques du médicament."
        ],
        correctOptionIndexes: [0],
        explanation: "<p> B:C’est la forme libre active qui diffuse dans les tissus. </p><p>C:Mécanismes de passage: </p><p>Transfert passif   </p><p>Transfert actif </p><p> </p><p>D:Facteurs influençant la diffusion tissulaire: </p><p> Caractéristiques physico-chimique: la fraction </p><p> liposoluble non ionisée est la fraction diffusible. </p><p> L’etat d’ionisation dépend du pKa du médicament et du pH dans lequel il se trouve.</p>"
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
        explanation: "<p>B : C’est la forme libre active qui diffuse dans les tissus. </p><p>C : Le passage des médicaments du plasma vers les tissus se fait par diffusion passive/actif </p>"
      },
      {
        questionText: "quel est parmi ces facteurs celui ne limitant pas la diffusion tissulaire des médicaments :",
        options: [
          "La vidange gastrique",
          "Fixation protéique plasmatique",
          "Caractéristiques physico-chimiques de la molécule médicamenteuse",
          "Irrigations est affinité des organes"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : Fixation aux protéines plasmatiques: Seule la forme libre fl est diffusible. </p><p>C : Propriétés physico-chimiques de la molécule: Les molécules lipophiles et les plus petites diffusent mieux. </p><p>D :Irrigation des organes Tissus richement vascularisés moyennement vascularisés  peu vascularisés </p>"
      },
      {
        questionText: "lors de la phase de distribution des médicaments , la forme liée aux protéines plasmatiques est la forme :",
        options: [
          "Diffusible",
          "Pharmacologiquement active",
          "Métabolisable",
          "De stockage et transport"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>La forme libre : -Forme diffusible dans les tissus et les compartiments liquidiens. </p><p>                            -Forme pharmacologiquement active. </p><p>Forme liée (Fl) : Forme de stockage et de transport dans le plasma.</p>"
      },
      {
        questionText: "concernant la diffusion facilitée :",
        options: [
          "Se fait contre un gradient de concentration",
          "Nécessite une protéine de transport",
          "N’est pas saturable ni spécifique",
          "Nécessite la consommation d’énergie"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les molécules se diffusent à travers la membrane plasmique grâce à des protéines membranaires </p>"
      },
      {
        questionText: "lors de la phase de distribution des médicaments, la forme liée aux protéine plasmatique est la forme :",
        options: [
          "Diffusable",
          "Pharmacologiquement active",
          "De stockage et transport",
          "Métabolisable"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La Fixation des médicaments sur les éléments figures du sang concerne plus :",
        options: [
          "Les médicaments hydrophiles",
          "Les médicaments lipophiles",
          "Les médicaments à gros poids moléculaire",
          "Les médicaments à faible fixation protéique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les médicaments lipophiles ont tendance à se fixer davantage aux éléments figurés du sang, tels que les globules rouges, en raison de leur capacité à se lier aux lipides et aux protéines présents dans ces cellules </p>"
      },
      {
        questionText: "La forme libre (non fixé aux protéines plasmatiques) des médicaments est la forme:",
        options: [
          "Diffusible dans les tissus et les compartiments liquidiens",
          "De transport dans le plasma",
          "De stockage dans le plasma",
          "Pharmacologiquement inactive"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B/C : concerne la forme liée (Fl) </p>"
      }
    ]
  },
  {
    title: "Élimination des médicaments : métabolisme et excrétion",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant le métabolisme des médicaments:",
        options: [
          "C'est l'ensemble des modifications chimiques que subit le médicament dans l'organisme pour donner naissance à un ou plusieurs composés",
          "Conduit à la formation de substances liposolubles et polaires plus facilement éliminées par les milieux aqueux (urine, salive, sueur)",
          "Conduit toujours à la formation de métabolites inactifs",
          "C'est le processus par lequel les médicaments et / ou leurs métabolites sont transférés de manière irréversible de l'environnement interne vers l'environnement externe."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>B : Il conduit à la formation de substances hydrosolubles et polaires plus facilement éliminées par les milieux aqueux</strong></p><p><strong>C : Conséquences du métabolisme : métabolite inactif… métabolite actif… métabolite toxique…</strong></p><p><strong>D : correspond à la définition de l’excrétion</strong></p>"
      },
      {
        questionText: "Quelle est la proposition juste ?",
        options: [
          "L'élimination des médicaments par sécrétion tubulaire se fait par des mécanismes essentiellement passifs",
          "L'élimination des médicaments par réabsorption tubulaire se fait par des mécanismes essentiellement actifs",
          "La clairance hépatique est le volume de sang hépatique débarrassé d'un médicament par unité de temps",
          "La biodisponibilité est la perte de médicament par métabolisme avant son arrivée dans la circulation générale dès son premier contact avec un organe ou tissu pourvu d'un équipement enzymatique nécessaire."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : la sécrétion tubulaire est active</strong></p><p><strong> </strong></p><p><strong><img src=\"https://medspacedz.com/client/data/qimages/6370aff8-d092-431d-a99b-6ecd738386e0/K6UmFPe1JQjZg1BE2GaE.png\"></strong></p><p><strong>B : Réabsorption (passive) ou (active)</strong></p><p><strong>D : Effet de premier passage : Perte de médicament par métabolisme avant son arrivée dans la circulation générale dès son premier contact avec un organe…</strong></p>"
      },
      {
        questionText: "Sachant que le temps de demi-vie d'élimination d'un médicament M est de 1 heure, quelle est la proposition juste?",
        options: [
          "100% du médicament M est éliminé après 2 heures",
          "Le médicament M est complétement éliminé après 1 heure",
          "50% du médicament M est éliminé après 30minutes",
          "75% du médicament M est éliminé après 2 heures."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>Ce paramètre correspond au temps nécessaire pour que, après l’administration d’un médicament, sa concentration diminue de moitié. La demi-vie est exprimée en unité de temps…</strong></p><p><strong>→ 1h = 50% éliminé (reste 50%)</strong></p><p><strong>→ 2h = encore 50% de 50% = 25% reste → donc 75% éliminé.</strong></p>"
      },
      {
        questionText: "Parmi ces affirmations concernant le métabolisme des médicaments, indiquer quelle est celle qui est vraie",
        options: [
          "Le métabolisme des médicaments se déroule uniquement dans le foie;",
          "Le métabolisme des médicaments consiste seulement à transformer des médicaments actifs en métabolites inactifs(réaction d'inactivation);",
          "Les réactions de phase I permettent de transformer un médicament lipophile en un métabolite hydrophile, via le cytochrome P450;",
          "Aucune réponse n'est vraie."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d5064b-1be0-11f0-a4a7-960004386930/LNw6QnCjXi432JXDEHpW.png\"></p><p>B:Médicament actif → métabolite inactif (inactivation+++ </p><p>Médicament actif → métabolite actif (potentialisation) </p><p>Médicament inactif (prodrogue) → métabolite actif (activation </p>"
      },
      {
        questionText: "L'élimination des médicaments par filtration glomérulaire:",
        options: [
          "Est un processus actif suivant le gradient de concentrations ;",
          "Est une diffusion passive de la forme liée du médicament ;",
          "Est la diffusion passive de la forme libre du médicament se trouvant dans l'urine primitive;",
          "Les réponses précédentes sont fausses."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>B Diffusion passive de la forme libre   (non liée aux protéines plasmatiques) </p><p>C:Processus permettant l’apparition de constituants non filtrés dans l’urine définitive</p>"
      },
      {
        questionText: "Parmi ces propositions concernant la biotransformation des médicaments, indiquer quelle est celle qui est vraie:",
        options: [
          "Les réactions de phase I permettent de transformer un médicament hydrophile en un métabolite lipophile, via le cytochrome P450",
          "Les réactions de conjugaison résultent en un transfert de groupements apolaires sur la molécule par l'acide glucuronique",
          "La biotransformation des médicaments peut être inhibée par induction enzymatique",
          "Une prodrogue est un composé thérapeutique nécessitant une biotransformation dans l’organisme pour exercer son action thérapeutique"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A : permettant de transformer un médicament lipophile en un métabolite hydrophile </p><p>B : Les réactions de conjugaison résultent en un transfert de groupements polaires sur la molécule par l’acide glucuronique </p><p>C : La biotransformation des médicaments peut être inhibée par Inhibition enzymatique </p>"
      },
      {
        questionText: "Concernant l'excrétion des médicaments:",
        options: [
          "C'est un processus pharmacodynamique qui vise à éliminer les médicaments de l'organisme",
          "C'est un processus qui assure le transfert du médicament de son site d'administration vers la circulation générale",
          "C'est un processus pharmacodynamique qui met en jeu trois processus d'élimination : La filtration glomérulaire, la réabsorption tubulaire et l’excrétion tubulaire",
          "C'est un processus qui peut être modifié par la variation du débit ventilatoire"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La clairance rénale:",
        options: [
          "Dépend du coefficient d'extraction rénal",
          "Est toujours égale à la clairance totale",
          "Est un paramètre pharmacodynamique reflétant le processus d'élimination rénale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les protéines à rôle enzymatique:",
        options: [
          "Les médicaments substrat de ces protéines sont toujours des promédicaments",
          "Elles agissent par un couplage à la protéine G",
          "Leur inhibition peut être irréversible",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A l'état physiologique, chez un sujet âgé sain, le métabolisme des médicaments est",
        options: [
          "Très diminué",
          "Constamment élevé",
          "Normal ou diminué",
          "Tout à fait normal comme pour un adulte sain"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "les réactions de phases 2 du métabolismes :",
        options: [
          "Sont des réactions de conjugaisons",
          "Elles n’ont jamais lieu au niveau du foie",
          "Sont des réactions de fonctionnalisation",
          "Sont toujours précédées de réactions de phase 1"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B :Les 2 phases ont lieu au niveau du fois  </p><p>C : les réactions de phases 2 sont des réactions de fonctionnalisation </p><p>D : Les réactions de phase 1 et de phase 2 du métabolisme des médicaments et des toxines ne sont pas toujours consécutives l'une à l'autre </p>"
      },
      {
        questionText: "les réactions de phase 1 du métabolisme :",
        options: [
          "Sont des réactions de conjugaison",
          "Elles n’ont jamais lieu au niveau du foie",
          "Sont des réactions de fonctionnalisation",
          "Sont toujours suivis de réactions de phase 2"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : réactions de fonctionnalisation (Les réactions de phase 1 du métabolisme sont des réactions de biotransformation qui modifient chimiquement les substances étrangères pour les rendre plus solubles dans l'eau.) </p><p>B : les réactions de biotransformation se produisent principalement dans le foie </p><p>D : Les réactions de phase 1 et de phase 2 du métabolisme des médicaments et des toxines ne sont pas toujours consécutives l'une à l'autre </p>"
      },
      {
        questionText: "l’inhibition enzymatique du CYP450 :",
        options: [
          "C’est un mécanisme lent",
          "C’est une augmentation de l’activité des enzymes du CYP450",
          "Lorsque le médicament est une prodrogue, il y a un risque d’inefficacité thérapeutique",
          "Elle n’entraine jamais de surdosage"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : C’est un mécanisme rapide  </p><p>B : c’est l’induction enzymatique et non pas l’inhibition  </p>"
      },
      {
        questionText: "l’excrétion rénale des médicaments :",
        options: [
          "Se fait uniquement par filtration glomérulaire",
          "Se fait uniquement par sécrétion tubulaire",
          "Ne permet pas l’excrétion des métabolites",
          "Permet l’élimination des médicaments sous forme inchangée ou après biotransformation"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A / B : se fait soit par filtration glomérulaire, sécrétion tubulaire , réabsorption tubulaire  </p>"
      },
      {
        questionText: "concernant l’élimination des médicaments de l’organisme :",
        options: [
          "Le médicament peut être réabsorbé après élimination complète de l’organisme",
          "Le rein est le seul organe responsable de l’excrétion",
          "La filtration glomérulaire est un mécanisme d’excrétion actif",
          "Ils peuvent être excrétés dans la salive"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A  : une fois qu'un médicament a été éliminé de manière complète et efficace de l'organisme, il ne devrait plus avoir d'effet pharmacologique ou d'interaction médicamenteuse est donc  </p><p>La réabsorption d'un médicament après son élimination complète de l'organisme est impossible  </p><p>B : Excrétion urinaire (rénale) / Excrétion digestive / Excrétion pulmonaire……. </p><p>C : un mécanisme de filtration passive qui se produit dans les reins </p>"
      },
      {
        questionText: "l’induction enzymatique du CYP450 :",
        options: [
          "C’est un mécanisme rapide",
          "C’est une diminution de l’activité des enzymes du CYP450",
          "Lorsque le médicament est une prodrogue, il y a un risque d’inefficacité thérapeutique",
          "Lorsque le médicament est métabolites actifs, il y a un risque d’effet thérapeutique important"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A : C’est un mécanisme Progressif </p><p>B : Augmentation de l’activité enzymatique </p><p>C : Lorsque des médicaments inducteurs du CYP450 sont pris en même temps qu'une prodrogue, l'induction enzymatique peut entraîner une diminution de la concentration du médicament actif dans le sang. Cela peut conduire à une inefficacité thérapeutique</p>"
      },
      {
        questionText: "l’excrétion rénale des médicaments par filtration glomérulaire :",
        options: [
          "Concerne la fraction du médicament liée aux protéines plasmatiques",
          "C’est un processus actif",
          "C’est un processus saturable",
          "Concerne la fraction libre des médicaments dont le poids moléculaire PM˂68KD"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A : Concerne la fraction du médicament non liée aux protéines plasmatiques </p><p>B/C : C’est un processus passif (diffusion passive ) et non saturable</p>"
      },
      {
        questionText: "concernant le temps de demi-vie d’élimination des médicaments :",
        options: [
          "C’est le temps nécessaire pour que après l’administration d’un médicament, sa concentration diminue de moitié",
          "C’est le temps nécessaire pour que après l’administration d’un médicament, sa concentration diminue de 3/4",
          "Il est de quelques heures pour tous les médicaments",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>C : La demi-vie est exprimée en unité de temps et peut varier de quelques minutes à plusieurs semaines selon les médicament </p>"
      },
      {
        questionText: "Le métabolisme des médicaments:",
        options: [
          "Est la transformation de tous les médicaments en métabolites inactifs",
          "Peut diminuer par l'administration d'un autre médicament inducteur enzymatique",
          "Peut être influencé par l'âge des patients et par leur état pathologique",
          "A lieu exclusivement au niveau du foie"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : le métabolisme des médicaments n'implique pas nécessairement la transformation de tous les médicaments en métabolites inactifs. </p><p>D :  Bien que le foie soit l'organe principal impliqué dans le métabolisme des médicaments, d'autres tissus et organes peuvent également jouer un rôle : intestin /rein … </p><p><img src=\"https://medspacedz.com/client/data/qimages/78d524dd-1be0-11f0-a4a7-960004386930/TEEdDaeh4WToeei6TKvz.png\"></p><p><img src=\"https://medspacedz.com/client/data/qimages/78d524dd-1be0-11f0-a4a7-960004386930/WEqjq9TgkpbadeHN3TNT.png\"></p>"
      },
      {
        questionText: "Concernant l'élimination des médicaments de l'organisme :",
        options: [
          "Le médicament peut être réabsorbé après élimination complète de l'organisme",
          "Le rein est le seul organe responsable de l'excrétion",
          "In filtration glomérulaire est un mécanisme d'excrétion actif",
          "L’excrétion salivaire peut être la cause d'effets indésirables de certains médicaments"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La biotransformation des médicaments:",
        options: [
          "Aboutit à la formation de substances plus polaires liposolubles plus facilement éliminées par les milieux aqueux",
          "Donnent naissance à des métabolites qui sont toujours inactifs",
          "A lieu essentiellement au niveau hépatique",
          "Passe par des réactions de conjugaison, faisant intervenir essentiellement des Cytochromes P450"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : Il conduit à la formation de substances hydrosolubles et polaires plus facilement éliminées par les milieux aqueux </p><p>B : La biotransformation des médicaments peut donner naissance à des métabolites qui sont actifs, inactifs en fonction de la nature chimique du médicament </p><p>C :  La biotransformation des médicaments ne passent pas nécessairement par toutes les phases</p>"
      },
      {
        questionText: "L'inhibition enzymatique :",
        options: [
          "Conduit à l'augmentation de la synthèse et de l'activité des cytochromes P450 suite à l'exposition à une substance inhibitrice",
          "L'effet inhibiteur n'apparait pas immédiatement",
          "Entraine toujours une diminution de l'effet thérapeutique",
          "L'arrêt de la prise de l'inhibiteur conduit à l'arrêt immédiat de son effet"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "<p>A : elle réduit la synthèse et l'activité des CYP450 suite à l'exposition à une substance inhibitrice. </p><p>C : elle peut entrainer une diminution , Augmentation ou même Pas d'impact  significatif </p>"
      },
      {
        questionText: "La filtration glomérulaire :",
        options: [
          "Les médicaments passent de la lumière tubulaire rénale vers la circulation",
          "Nécessite la présence de transporteurs sélectifs",
          "Permet le passage de la forme libre du médicament et de la forme liée aux protéines plasmatiques",
          "Processus qui concerne seulement les médicaments dont le poids moléculaire ne dépasse pas 68000 daltons."
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A : Les médicaments ne passent généralement pas directement de la lumière tubulaire rénale vers la circulation sanguine </p><p>C: Permet le passage de la forme libre du médicament et de la forme non liée aux protéines plasmatiques </p>"
      },
      {
        questionText: "L'élimination biliaire:",
        options: [
          "C'est l'excrétion des médicaments hors de l'organisme par le biais du système rénal",
          "Elle est d'autant plus importante que la molécule présente un PM < 300D",
          "Le cycle entéro-hépatique accélère l'élimination du médicament de l'organisme",
          "Toutes les propositions sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : excrétés hors de l'organisme par le biais de la bile </p><p>C : Le cycle entéro-hépatique est un processus biologique par lequel certaines substances, généralement des produits métaboliques, sont excrétées dans la bile par le foie, puis réabsorbées dans l'intestin grêle, puis retransportées vers le foie, où elles peuvent être réexcrétées dans la bile En général, le cycle entéro-hépatique n'accélère pas l'élimination d'un médicament de l'organisme, mais plutôt le ralentit </p>"
      },
      {
        questionText: "Le métabolisme des médicaments:",
        options: [
          "Met en jeu des réactions de phase III",
          "Fait appel à des réactions de phase I et de phase II",
          "Conduit à la formation de produits lipophiles",
          "Entraine une baisse de biodisponibilité du principe actif."
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'excrétion salivaire :",
        options: [
          "Des sulfamides: par mécanisme passif ne dépend pas de son pka",
          "Des médicaments, est diminuée par les médicaments atropiniques",
          "Du lithium se fait par diffusion passive",
          "De la fraction liée des médicaments se fait par diffusion passive"
        ],
        correctOptionIndexes: [1],
        explanation: "<p> A : L'excrétion salivaire est principalement influencée par des facteurs physico chimiques tels que la solubilité du médicament dans l'eau et les membranes cellulaires, plutôt que par le pKa </p><p>B : lorsque ces médicaments sont administrés, ils peuvent entraîner une diminution de la production de salive </p><p>C : L'excrétion salivaire du lithium se fait principalement par diffusion passive, mais d'autres mécanismes interviennent également.</p>"
      },
      {
        questionText: "A propos du polymorphisme génétique des enzymes de métabolisation des médicaments:",
        options: [
          "Les acétyleurs rapides de l'Isoniazide souffrent de plus de toxicité que les acétyleurs lents",
          "Le métabolisme lent de la codème est source de toxicité à cette derniere",
          "le métabolisme rapide de la codéine est responsable d'une diminution du taux de morphine",
          "Le métabolisme lent de la succinylcholine est source d'une diminution du temps de sa demi vie"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : Les \"acétyleurs lents\" ont tendance à être plus susceptibles de souffrir de toxicité liée à l'INH que les \"acétyleurs rapides\". </p><p>C :. En réalité, le métabolisme rapide de la codéine est responsable d'une augmentation du taux de morphine dans le corps. </p><p>D : Le métabolisme lent de la succinylcholine n'est généralement pas associé à une diminution du temps de sa demi-vie, mais plutôt à une prolongation de ses effets.</p>"
      }
    ]
  },
  // quizzes/year-3/pharmacologie.js
// PART 2/3
// Note: Correct answers are determined based on the provided commentary/explanation.

  {
    title: "Pharmacodynamie et Pharmacométrie",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "La pharmacodynamie:",
        options: [
          "Etudie le devenir des médicaments dans l'organisme",
          "Etudie l'effet des médicaments sur l'organisme",
          "N'étudie que les effets indésirables et leurs mécanismes",
          "Se focalise sur l'étude des gènes responsables de la variabilité de la réponse pharmacologique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Pharmacodynamie = effets des médicaments sur l’organisme</strong></p><p><strong>C : effets thérapeutiques et effets secondaires</strong></p>"
      },
      {
        questionText: "Concernant les récepteurs couplés à la protéine G:",
        options: [
          "Ce sont des récepteurs intracellulaires",
          "Leur effecteurs sont toujours des canaux ioniques",
          "La fixation d'un ligand changent leur conformation et activent une cascade d'événements intracellulaires",
          "Leur second messager est toujours le calcium"
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : récepteurs membranaires</strong></p><p><strong>B :</strong></p><p><img src=\"https://medspacedz.com/client/data/qimages/7be8fbfa-557f-4779-84d0-7f75bceba5f2/i4QYzVaVWa1qBvANwpaa.png\"></p><p><strong>C : « Fixation mdt → Activation protéine G → Activation de l’effecteur → Synthèse 2nd messager → Amplification du signal → Réponse cellulaire ».</strong></p>"
      },
      {
        questionText: "La modification de la cible pharmacologique de la substance médicamenteuse entraine:",
        options: [
          "Une modification du taux d'absorption du médicament ;",
          "Une modification de la repose pharmacodynamique ;",
          "Une modification des paramètres pharmacocinétique du médicament;",
          "Aucune modification dans la réponse pharmacologique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d64a12-1be0-11f0-a4a7-960004386930/DXu1kkotDubjrrgNt2dx.png\"></p>"
      },
      {
        questionText: "Soit A un médicament agoniste partiel de récepteurs X, ceci sous-entend que",
        options: [
          "L'activité intrinsèque de A est nulle;",
          "L'activité intrinsèque de A est comprise entre 0 et 1;",
          "L'efficacité de A est maximale;",
          "Le médicament A ne se lie pas au récepteur X"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d6447d-1be0-11f0-a4a7-960004386930/eF2woNQsAezCHCXA8HBi.png\"></p>"
      },
      {
        questionText: "L'affinité d'un agoniste vis-à-vis d'un type de récepteur:",
        options: [
          "Se mesure relativement à l'effet maximal d'une substance endogène;",
          "Est différente de la puissance d'effet de cet agoniste;",
          "Diminue en présence d'un antagoniste compétitif réversible pour le mêmes récepteur;",
          "Se mesure par la concentration de l'agoniste occupant la totalité des récepteurs"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>C’est la concentration de ligand nécessaire pour obtenir la moitié de l’occupation des récepteurs</p>"
      },
      {
        questionText: "Concernant les protéines cibles à rôle enzymatique :",
        options: [
          "C'est des molécules transmembranaires;",
          "Porte l'activité enzymatique dans la partie intracellulaire;",
          "Peuvent être ciblées par un faut substrat induisant la production d'un métabolite anormal;",
          "Permettent toujours la phosphorylation de différentes protéines cibles effectrices."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A:Il s’agit de récepteurs transmembranaires</p>"
      },
      {
        questionText: "Parmi les protéines cibles assurant le passage d'un ion/ métabolite on retrouve :",
        options: [
          "Les effecteurs canaux ioniques ;",
          "Les ionophores;",
          "Les porines;",
          "Les transporteurs ioniques"
        ],
        correctOptionIndexes: [3],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78d64d97-1be0-11f0-a4a7-960004386930/EMsYKjKZwj6eTHA5fvc2.png\"></p>"
      },
      {
        questionText: "Concernant les récepteurs couplés à la protéine G:",
        options: [
          "Ce sont des récepteurs intracellulaires",
          "leur effecteurs sont toujours des canaux ioniques",
          "La fixation d'un ligand changent leur conformation et activent une cascade d'événements intracellulaires",
          "Leur second messager est toujours le calcium"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : Ce sont des récepteurs métabotropiques, De nature glycoprotéiques, monomère réparti en 7 segments transmembranaires</p><p>B : canaux ioniques / enzymes</p>"
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
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Un antagoniste compétitif réversible d'un agoniste vis-à-vis d'un type de récepteurs:",
        options: [
          "Possède une affinité supérieure que celle de l'agoniste pour ces récepteurs",
          "Possède une affinité inférieure que celle de l'agoniste pour ces récepteurs",
          "Induit une diminution de l'effet maximal de l'agoniste",
          "Son mode d'action est identique à celui de l'agoniste"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "concernant les récepteurs intracellulaires :",
        options: [
          "Leurs ligands sont de nature lipophile",
          "Ils agissent par un couplage à la protéine G",
          "Leurs effecteurs sont exclusivement des canaux ioniques",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : Les récepteurs intracellulaires se trouvent à l'intérieur de la cellule, contrairement N aux récepteurs membranaires qui sont situés sur la membrane cellulaire. Par  conséquent, leur mécanisme d'action est différent de celui des récepteurs membranaires, qui sont généralement associés à la signalisation par protéines G.</p><p>C : Les canaux ioniques / Les pompes ioniques</p>"
      },
      {
        questionText: "a fin de comparer la puissance de deux antagonistes compétitifs réversibles d’une molécule",
        options: [
          "On compare les concentrations des antagonistes quelque soit les déplacements de A",
          "On compare les déplacements de la molécule A dans la courbe dose-effet quelque soit les concentrations de ces antagonistes",
          "La molécule la plus puissante aura le PA2 la plus fort",
          "La molécule la plus puissante aura le PA2 le plus faible"
        ],
        correctOptionIndexes: [2],
        explanation: "<p> Plus PA2 est plus l’antagoniste est puissant</p>"
      },
      {
        questionText: "un agoniste parfait de récepteurs Y est caractérisé par :",
        options: [
          "Un rapport effet du médicament / effet maximal égale à 0.1",
          "Un rapport effet du médicament / effet maximale supérieure à 0.5",
          "Une valeur basse de PD2",
          "Une valeur élevée de PD2"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "concernant les récepteurs couplés à la protéine G :",
        options: [
          "Ce sont des récepteurs membranaires",
          "Ce sont des récepteurs intracellulaires",
          "Les effecteurs sont exclusivement des canaux ioniques",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>C : Les canaux ioniques / des enzymes </p>"
      },
      {
        questionText: "L'affinité d’un médicament A vis à vis de son récepteur R :",
        options: [
          "Est un paramètre évaluant l’effet pharmacologique de A",
          "Se mesure par le calcul du PD2",
          "Permet de distinguer s'il s'agit d’un agoniste parfait ou partiel",
          "Diminue en présence d'un agoniste fonctionnel"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "soit : B un antagoniste compétitif réversible de A vis-à-vis des récepteurs X :",
        options: [
          "L’affinité de A vis-à-vis les récepteurs X augmente en présence de B",
          "La valeur de pD2 de A diminue en présence de B",
          "L’activité intrinsèque de A est influencée en présence de B",
          "La puissance de l’antagoniste B s’estime par la valeur de pD2"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'antagonisme non compétitif :",
        options: [
          "L'antagoniste se fixe sur le même récepteur que l'agoniste",
          "L'affinité de l'agoniste diminue en présence de l'antagoniste",
          "L'activité intrinsèque de l'agoniste diminue en présence de l'antagoniste",
          "C'est un antagonisme surmontable en augmentant la dose de l'agoniste"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : Site de fixation de l’agoniste et de l’antagoniste différent</p><p>D : n'est généralement pas surmontable en augmentant simplement la dose de l'agoniste, car il est souvent caractérisé par des effets irréversibles ou difficilement réversibles sur le récepteur.</p>"
      },
      {
        questionText: "Dans l'Antagonisme compétitif réversible:",
        options: [
          "L'augmentation de la concentration de l'agoniste permet de surmonter le blocage (antagonisme surmontable)",
          "Le profil initial est toujours perdu",
          "Les sites de fixation sont différents de ceux de l'agoniste",
          "Les récepteurs les plus rares qui sont concernés monter le blocage"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'agoniste, il :",
        options: [
          "Provoque un effet comparable à celui du médiateur naturel",
          "S'oppose partiellement ou totalement aux effets d'un autre médicament",
          "Donne une activité intrinsèque (efficacité) maximale",
          "Induit toujours un agoniste partie par rapport au médiateur endogène"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : un agoniste n'agit pas en s'opposant aux effets d'un autre médicament, mais plutôt en imitant les effets du médiateur naturel</p><p>D : l'efficacité d'un agoniste par rapport au médiateur endogène peut varier en fonction de plusieurs facteurs</p>"
      },
      {
        questionText: "L'affinité d'un médicament (ligand):",
        options: [
          "Réduit l'efficacité et la puissance d'un médicament",
          "Est l'aptitude d'un ligand à se fixer sur son récepteur spécifique",
          "Ne dépend pas de la structure chimique de chacun des partenaires",
          "Est corrélée avec son activité intrinsèque"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : Elle n'a pas pour effet intrinsèque de réduire l'efficacité et la puissance d'un médicament, mais d'autres facteurs peuvent influencer ces aspects de l'action d'un médicament.</p><p>C : dépend en réalité de la structure chimique à la fois du médicament et du récepteur</p>"
      },
      {
        questionText: "Concernant l'antagonisme compétitif réversible :",
        options: [
          "L’agoniste et l'antagoniste occupent le même récepteur sur des sites différents par liaison réversible",
          "L’affinité de l'agoniste est maintenue en présence de l'antagoniste",
          "L’affinité intrinsèque de l'agoniste est diminuée en présence de l'antagoniste",
          "l'augmentation de la concentration de l'agoniste permet de surmonter le blocage (antagonisme surmontable)"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'antagonisme fonctionnel :",
        options: [
          "L’agoniste et l'antagoniste ont une même action sur la fonction physiologique mais dans le sens inverse",
          "L’agoniste et l'antagoniste ont des récepteurs différents",
          "L’agoniste et l'antagoniste donnent des effets biologiques opposés",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Soit un agoniste A avec un PD2-6, et un agoniste B du même récepteur avec un PD2=4:",
        options: [
          "Le médicament A a plus d'affinité que le médicament B pour ce récepteur",
          "Le médicament B a plus d'affinité que le médicament A pour ce récepteur",
          "Le médicament A est plus efficace que le médicament B",
          "Le médicament B est plus efficace que le médicament A"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les cibles de médicaments de nature protéique on retrouve:",
        options: [
          "Le suc gastrique",
          "Les acides nucléiques",
          "Les symporteurs",
          "Les ions métalliques"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
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
          "Peut entrainer, par majoration de l'activité d'un médicament, une efficacité moindre de ce traitement",
          "Se produisent uniquement aux posologies normalement utilisées",
          "Peut nécessiter une adaptation de la posologie de l'un des médicaments."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>A : </strong></p><p><strong>• IM pharmacocinétiques (absorption, distribution, métabolisme, excrétion)</strong></p><p><strong>• IM pharmacodynamiques (récepteurs, systèmes physiologiques, synergie, antagonisme).</strong></p><p><strong>B : Provoquer ou majorer des effets indésirables, ou provoquer une toxicité, ou entraîner par réduction de l'activité une moindre efficacité</strong></p><p><strong>D : Ceci va nécessiter : modification de la posologie, arrêt du traitement ou une autre intervention médicale.</strong></p>"
      },
      {
        questionText: "Lors de l'administration simultanée d'antiacides à un autre médicament (Tétracyclines), on observe",
        options: [
          "Une augmentation de l'absorption des Tétracyclines;",
          "Une diminution de la biodisponibilités des Tétracyclines;",
          "Une augmentation de la biodisponibilité des antiacides;",
          "Une augmentation de l'absorption des antiacides"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "On parle d'interaction médicamenteuse :",
        options: [
          "Lorsque deux ou plusieurs médicaments sont pris simultanément",
          "Uniquement lorsque la prise simultanée de deux médicaments est contre-indiquée",
          "Lorsque l'administration la prise de deux médicaments simultanément entraime la modification de devenir de l'un ou l'autre dans l'organisme",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Les interactions médicamenteuses peuvent survenir lorsque deux médicaments pris ensemble influencent l'absorption, la distribution, le métabolisme ou l'élimination d'un ou des deux médicaments, ce qui peut avoir des conséquences sur leur efficacité ou leur sécurité.</p>"
      },
      {
        questionText: "Concernant les interactions médicamenteuses d'ordre pharmacodynamique :",
        options: [
          "C'est des interactions qui ont lieu pendant la phase d'absorption du médicament",
          "Peuvent être évitées en espaçant les prises des deux médicaments",
          "L'antagonisme est une forme d'interaction médicamenteuse souvent bénéfique et recherchée",
          "La synergie est quand l'effet des deux médicaments pris simultanément est supérieur à la somme des effets de chacun"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>La synergie se produit lorsque deux médicaments pris ensemble ont un effet combiné qui est plus puissant que la simple addition de leurs effets individuels</p>"
      },
      {
        questionText: "Un effet indésirable de type A est un effet:",
        options: [
          "Imprévisible",
          "Dose indépendant",
          "Non bé aux propriétés pharmacologiques du médicament",
          "Qui peut être directement ou indirectement lié à l'effet pharmacologique du médicament"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Un effet indésirable dit grave s'il est à l'origine d'un",
        options: [
          "Décès, une menace pour la vie du patient au moment de l'apparition de l'événement",
          "Effet gênant sans aucune gravité",
          "Effet sévère mais sans engager le pronostic vital du patient",
          "Effet indésirable gênant mais qui ne nécessite pas l'arrêt du traitement"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Un effet indésirable grave est une réaction indésirable sévère qui met en danger la vie du patient, peut entraîner la mort ou exige une hospitalisation immédiate ou une intervention médicale urgente pour prévenir de graves conséquences.</p>"
      },
      {
        questionText: "les interactions médicamenteuse sont :",
        options: [
          "Toute indésirables et contre indiquées",
          "Souhaitées pour certaines prises en charge thérapeutiques",
          "Ne peut pas améliorer l’observance",
          "A éviter dans tous les cas de prises en charge de pathologie graves"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : soit Souhaitées soit Indésirables</p><p>C : Les interactions médicamenteuses peuvent avoir un impact significatif sur l'observance d'un traitement médicamenteux</p><p>D : Dans la prise en charge de pathologies graves, il est essentiel de trouver un équilibre entre les avantages des médicaments prescrits et les risques potentiels d'interactions médicamenteuses</p>"
      },
      {
        questionText: "la compétition au niveau du site de transport actif intestinal est une interaction médicamenteuse qui :",
        options: [
          "Concerne le transport plasmatique des médicaments",
          "Apparait lors de l’élimination de certains médicaments",
          "Est d’ordre pharmacocinétique",
          "Est d’ordre pharmacodynamique"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "concernant le mode d’action des médicaments :",
        options: [
          "Ils peuvent agir par le biais de leurs propriétés physico-chimiques",
          "Ils ont toujours une action spécifiques",
          "Ils se fixent toujours sur un récepteur membranaire",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "<p> B : Les médicaments peuvent avoir divers modes d'action en fonction de leur classe  thérapeutique et de l'objectif de traitement</p><p>C : leur cible peut être un récepteur membranaire, une enzyme, une protéine  intracellulaire..</p>"
      },
      {
        questionText: "parmi les interactions médicamenteuses suivantes quelle est celle qui souhaitée :",
        options: [
          "Les associations médicamenteuses incompatibles et contre indiquée",
          "Association pour l’amélioration d’une thérapeutique",
          "Associations médicamenteuses de deux médicaments l’un antagoniste de l’autre dans le cadre de traiter une maladie",
          "Association de médicaments inscrits dans la rubrique association déconseillée"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>C : elles peuvent réduire l'efficacité du traitement</p><p>D : Cette classification signifie que l'association de ces médicaments peut présenter des risques ou des effets indésirables significatifs.</p>"
      },
      {
        questionText: "quel est l’interaction médicamenteuse qui est d’ordre pharmacodynamique :",
        options: [
          "Salbutamol ( agoniste B2 adrénergique ) et propranolol ( B bloquant )",
          "Associations de deux ralentisseurs du transit intestinal",
          "Association de deux médicaments compétiteurs au niveau du site de transporteurs plasmatiques",
          "Association des inducteurs enzymatiques"
        ],
        correctOptionIndexes: [0],
        explanation: "<p> B/C/D : sont d’ordre pharmacocinétiques</p>"
      },
      {
        questionText: "Une interaction médicamenteuse lors de la phase d'absorption des médicaments peut être due à :",
        options: [
          "Une compétition pour les liaisons aux protéines plasmatiques pour les médicaments fortement liés",
          "Une compétition au niveau d'un système de transport actif intestinal",
          "Une compétition pour le même système enzymatique hépatique",
          "Une compétition pour la réaction tubulaire"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les interactions médicamenteuses en phase pharmacodynamique :",
        options: [
          "Surviennent suite à la modification de l'effet pharmacodynamique d'un médicament par modification de sa concentration plasmatique",
          "Sont toujours à éviter",
          "Peuvent conduire à la diminution de l'efficacité thérapeutique d'un médicament cas d'antagonisme",
          "Uniquement les formes injectables sont concernées"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A : surviennent lorsque deux médicaments ont en commun un effet sur un même récepteur ou une même fonction physiologique. Cela entraine une modification quantitative de l'effet</p><p>B : Certaines interactions pharmacodynamiques peuvent être souhaitées</p><p>D : Ces interactions peuvent survenir avec des médicaments sous différentes formes </p><p>d'administration, qu'il s'agisse d'injections, de comprimés, de gélules ou d'autres formes galéniques</p>"
      }
    ]
  },
  {
    title: "Effets indésirables des médicaments",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Les effets indésirables des médicaments sont définis comme:",
        options: [
          "Des réactions bénéfiques et attendues lors de la prise d'un médicament",
          "Des manifestations nocives et non voulues se produisant à des posologies normales",
          "Des manifestations nocives et non voulues se produisant lors d'un mésusage du médicament",
          "Des réactions uniquement dues à une surdose médicamenteuse."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : C’est une réaction non voulue se produisant à des posologies normales ou lors d’un mésusage du médicament, syndrome de sevrage, de pharmacodépendance ou d’erreur médicamenteuse.</strong></p><p><strong>B : Ce sont des manifestations nocives pour le malade, conséquence de la prise d’un ou de plusieurs médicaments.</strong></p>"
      },
      {
        questionText: "La gravité des effets indésirables des médicaments peut:",
        options: [
          "Être toujours mineure et sans conséquence",
          "Varier d'un simple inconfort à une atteinte organique laissant des séquelles permanentes ou même entraîner un risque de décès",
          "Nécessite toujours l'arrêt du traitement",
          "Etre prédite avec certitude pour chaque patient"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : « Leur gravité est très variable, peut aller d’un simple inconfort jusqu’à une atteinte organique laissant des séquelles permanentes ou même risque de décès. »</strong></p><p><strong>C : « Ils peuvent être évités (ajuster les doses et respecter les précautions d’emploi). Parfois sont inévitables (mais sans gravité).</strong></p>"
      },
      {
        questionText: "Pour prévenir les accidents de type A, il est recommandé de :",
        options: [
          "Administrer des doses plus élevées que celles recommandées",
          "Suivre les précautions d'emploi du médicament",
          "Ajuster les doses",
          "Arrêter la prise du médicament dès l'apparition de l'effet indésirable"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "<p><strong>Accidents de type A :</strong></p><p><strong>« Survenue prévisible.</strong></p><p><strong>Ils peuvent être évités (ajuster les doses et respecter les précautions d’emploi). »</strong></p>"
      },
      {
        questionText: "Lequel des exemples suivants illustre un accide inhérent à l'effet pharmacologique (mécanisme d'action d'un médicament?",
        options: [
          "Utilisation des anti-inflammatoires non stéroïdiens (AINS) entraînant un ulcère gastro duodenal",
          "Prise d'un antihypertenseur provoquant une hypotension",
          "Administration d'un antibiotique causant une réaction allergique",
          "Consommation de paracétamol entraînant une hépatotoxicité."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A&nbsp;:Accidents sans rapport avec l’effet thérapeutique</strong></p>"
      },
      {
        questionText: "Cochez la réponse fausse à la question suivante : Quels sont les autres synonymes du terme",
        options: [
          "Hyperréactivité aux médicaments;",
          "Désensibilisation aux médicament;",
          "Hyporéactivité aux médicaments;",
          "Accoutumance aux médicaments"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Tolérance = Accoutumance = Hyporéactivité=désensibilisation</p><p>Tolérance = adaptation de l’organisme à un effet d’une substance chimique par la même dose ou « mithridatisation » (adaptation par des doses croissantes) diminution de l’effet pharmacologique d’une dose répétée</p>"
      },
      {
        questionText: "A quoi peut être due la tolérance aux médicaments:",
        options: [
          "Une évolution de la pathologie;",
          "Une mauvaise qualité du médicament ;",
          "Une diminution des doses du médicament;",
          "Une diminution du taux de inétabolisation du médicament"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>La toléran ce peut être d u e à :</p><p>- une évolution de la pathologie,</p><p>- une modification du métabolisme (tolérance pharmacocinétique)</p><p>- une modification du signal sur le récepteur (tolérance pharmacodynamique)</p>"
      },
      {
        questionText: "la classification des effets indésirables des médicaments est fait selon se qui suit sauf :",
        options: [
          "La gravité",
          "L’indication du médicament",
          "La fréquence",
          "Le mécanisme de survenue"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "les effets indésirables de type B sont :",
        options: [
          "Des réactions immuno-allergique",
          "Dues à leurs mécanismes d’actions",
          "Prévisibles",
          "Très fréquents avec tous les médicaments"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : pas de rapport avec le mécanisme d’action du médicament </p><p>C : Imprévisible</p><p>D : rare et inévitable</p>"
      },
      {
        questionText: "selon la classification des effets indésirables des médicaments par fréquence quel est celle qui est dite très fréquente :",
        options: [
          "Le nombre de cas est de 0.01-0.1%",
          "Le nombre de cas est de 0.1-1%",
          "Le nombre de cas est de 1-10%",
          "Le nombre de cas est ˃ 10%"
        ],
        correctOptionIndexes: [3],
        explanation: "<p> A : Rares : (ex : fièvre et anti histaminiques).</p><p>B : Peu fréquents : (ex : neutropénie sous Augmentin)</p><p>C : Fréquents : (ex : nausée et ciprofloxacine)</p>"
      },
      {
        questionText: "les effets indésrables de type A sont :",
        options: [
          "Prévisibles",
          "Imprévisibles",
          "D’ordre immunologique",
          "D’apparition retardée par rapport à la prise des médicaments"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B/C : elles concernent les effets indésirables de type B</p>"
      },
      {
        questionText: "Les effets indésirables des médicaments:",
        options: [
          "Surviennent uniquement lors de l'utilisation non conforme des médicaments",
          "Peuvent survenir aux posologies normally utilisées chez l'homme",
          "Leur apparition nécessite l'arrêt du traitement dans tous les cas",
          "Les effets de type B sont prévisibles et évitables"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : Il n'est pas nécessaire d'utiliser un médicament de manière non conforme pour que des effets indésirables se produisent.</p><p>C : Les effets indésirables peuvent parfois être gérés sans interrompre complètement le traitement, en ajustant la posologie, en changeant de médicament ou en mettant en place d'autres mesures appropriées.</p><p>D : Les effets de type B sont généralement considérés comme imprévisibles et non liés à la dose du médicament</p>"
      },
      {
        questionText: "Une exposition à un médicament X est contre-indiquée lors du premier trimestre de grossesse parce qu'elle peut entrainer :",
        options: [
          "Une tératogenèse avec un risque de malformation congénitale",
          "Une fœtopathie avec des anomalies fonctionnelles ou organiques",
          "Une fœto-toxicité",
          "Un syndrome de sevrage"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Lorsqu'un médicament est contre-indiqué pendant la grossesse, cela signifie généralement qu'il existe un risque potentiel de tératogenèse, c'est-à-dire qu'il peut provoquer des malformations congénitales chez le fœtus si la mère est exposée au médicament pendant cette période critique du développement fœtal.</p>"
      },
      {
        questionText: "A propos des effets indésirables médicamenteux :",
        options: [
          "Les effets indésirables résultent de la prise d'un médicament utilisé dans les conditions no recommandées, ils ne peuvent donc pas être dus à un mauvais usage",
          "Les effets indésirables non-attendus sont les effets de type A",
          "Les effets indésirables de type B ne peuvent pas être expliqués par les propriétés pharmacologiques connues du médicament.",
          "On ne peut classer un effet indésirable comme «grave » que s'il provoque le décès"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "<p>A : Ils peuvent également survenir lorsque le médicament est utilisé conformément aux recommandations, mais que le patient réagit de manière inattendue.</p><p>B : Les effets indésirables non-attendus sont en effet généralement associés aux effets de type B, pas aux effets de type A</p><p>C : Les effets indésirables de type B sont en effet souvent difficiles à expliquer par les propriétés pharmacologiques connues du médicament.</p>"
      },
      {
        questionText: "Lors du développement d'un médicament : les essais de toxicité qu'on peut réaliser parallèlement aux essais cliniques sont ceux :",
        options: [
          "De la toxicité aigue",
          "De la mutagénèse",
          "De la toxicité sub-chronique"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Un effet indésirable de type c est :",
        options: [
          "Lié à l'effet pharmacologique",
          "Imprévisible, rare et inévitable",
          "Lié à la prise chronique du médicament",
          "D'apparition retardée"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Médicaments de l'inflammation",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Parmi les effets pharmacologique suivants, lequel n'est pas attribué aux AINS?",
        options: [
          "Anti agrégants plaquettaires;",
          "Anti inflammatoires;",
          "Antalgiques;",
          "Anti arythmiques."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>« Un effet anti-inflammatoire par inhibition de la synthèse des PG.</strong></p><p><strong>Effet analgésique périphérique à des doses plus faibles que les doses anti-inflammatoires.</strong></p><p><strong>Effet antipyrétique (…)</strong></p><p><strong>Effet antiagrégant plaquettaire par inhibition de la synthèse des Thromboxanes A2. » </strong></p><p><strong>________________________________________</strong></p><p><strong>Donc, les AINS ont bien les effets suivants :</strong></p><p><strong>• Anti-inflammatoires (B)</strong></p><p><strong>• Antalgiques (C)</strong></p><p><strong>• Antiagrégants plaquettaires (A)</strong></p>"
      },
      {
        questionText: "Concernant les propriétés pharmacocinétiques des AINS:",
        options: [
          "Ce sont des bases faibles;",
          "Ils sont fortement liés aux protéines plasmatiques;",
          "Ce sont des anti pyrétiques;",
          "Ce sont des molécules qui ont un temps de demi-vie d'élimination assez court."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Les AINS sont des acides faibles.</strong></p><p><strong>C : Propriété pharmacologique</strong></p><p><strong>D :  La demi-vie est très variable :</strong></p><p><strong>– AINS à demi-vie courte &lt; 8h (salicylés, kétoprofène)</strong></p><p><strong>– AINS à demi-vie moyenne (10-18 h : sulindac, naproxène)</strong></p><p><strong>– AINS à demi-vie longue &gt; 48h : oxicams, pyrazolés. » </strong></p>"
      },
      {
        questionText: "Parmi les effets métaboliques des AIS:",
        options: [
          "Effet hypoglycémiant par diminution de la synthèse hépatique ;",
          "La redistribution des graisses;",
          "Augmentation de la masse musculaire;",
          "Effet hypolipidémique."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Action métabolique : effet diabétogène »</strong></p><p><strong>C : Action métabolique : catabolisme protidique »</strong></p>"
      },
      {
        questionText: "Dans l'objectif de prévenir les manifestations inflammatoire en odontologie, les glucocorticoïdes:",
        options: [
          "Sont prescrits en première intention;",
          "Les molécules à action longue sont privilégiées;",
          "Sont prescrits en cas d'inefficacité ou contre indication des AINS;",
          "Le traitement corticoïdes doit être arrêté progressivement."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>En odontologie, les corticoïdes peuvent être prescrits en cas :</strong></p><p><strong>– d'inefficacité ou d'efficacité médiocre des AINS</strong></p><p><strong>– de contre-indications des AINS</strong></p><p><strong>B : Choix de la molécule : Molécule à action intermédiaire en une seule prise le matin</strong></p><p><strong>D  : Le traitement ne doit pas dépasser 4 jours avec un arrêt brutal le quatrième jour.</strong></p>"
      },
      {
        questionText: "Le mécanisme d'action commun des anti-inflammatoires non stéroïdiens AINS est la diminution de la production des prostaglandines par :",
        options: [
          "L'inhibition de la cyclo-oxygénase (COX 1 et COX 2)",
          "L'activation de la cyclo-oxygénase (COX 1 et COX 2)",
          "L'inhibition de la lipoxygénase",
          "La régulation de l'expression génique de ces médiateurs"
        ],
        correctOptionIndexes: [0],
        explanation: "<p> Les AINS agissent en inhibant l'activité de l'enzyme cyclo-oxygénase (COX), qui est responsable de la production des prostaglandines à partir de l'acide arachidonique. </p><p>Cette inhibition de la COX réduit la synthèse des prostaglandines, ce qui contribue à réduire l'inflammation</p>"
      },
      {
        questionText: "Concernant les AINS, quelle est la réponse fausse :",
        options: [
          "Ils sont utilisables par voie orale, injectable ou locale",
          "Ils ont des effets antalgiques et antipyrétiques",
          "Ils sont utilisables au 3e trimestre de la grossesse",
          "Ils sont contre-indiqués en cas d'ulcère gastroduodénal en évolution"
        ],
        correctOptionIndexes: [2],
        explanation: "<p> En général, les AINS sont contre-indiqués pendant le troisième trimestre de la grossesse en raison du risque potentiel pour le fœtus, en particulier en ce qui concerne le développement du système cardiovasculaire et pulmonaire du fœtus.</p>"
      },
      {
        questionText: "En odontologie,face aux doleurs dentaires, on recommande :",
        options: [
          "L'utilisation des AINS en première intention; en cas de douleurs dues aux cellulites faciales non collectées dont l'état infectieux est non maitrisé",
          "L'utilisation des AINS ayant une AMM pour leur effet antalgique afin de prévenir la douleur post-opératoire",
          "L'association de deux AINS à dose efficace pour traiter les douleurs dentaires aigues",
          "dL'association des AINS et glucocorticoïde (AIS) pour traiter les algies inflammatoires"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Dans la prise en charge des algies inflammatoires aigues en odontologie, il est recommandé de prescrire :",
        options: [
          "Des anti-inflammatoire stéroïdiens en cure courte",
          "Des anti-inflammatoire non stéroïdiens en cure courte",
          "Des corticoïdes en cure prolongée",
          "Une antibioprophylaxie systématique"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Une corticothérapie prolongée peut être responsable:",
        options: [
          "D’une ostéonécrose aseptique de la tête fémorale",
          "D’une hypoglycémie",
          "D’une stimulation de l'axe hypothalamo-hypophysaire-corticosurrénalien",
          "D’une hyponatrémie"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>B : Les corticoïdes peuvent en réalité augmenter les niveaux de glucose dans le sang, ce qui peut entraîner une hyperglycémie plutôt qu'une hypoglycémie</p><p>C : Les corticoïdes, en particulier lorsqu'ils sont utilisés à fortes doses ou de manière prolongée, peuvent supprimer l'axe hypothalamo-hypophysaire-corticosurrénalien.</p><p>D : il est plus courant de voir une augmentation de la rétention de sodium et une élévation de la natrémie avec l'utilisation de corticoïdes, plutôt qu'une hyponatrémie.</p>"
      },
      {
        questionText: "l’action anti-inflammatoire des anti-inflammatoires non stéroïdiens ( AINS) provient de :",
        options: [
          "L’inhibition de l’enzyme COX-1",
          "L’inhibition de l’enzyme COX-2",
          "L’inhibition de l’enzyme phospholipase A2",
          "L’inhibition de l’enzyme lipoxygenase"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les AINS agissent en inhibant l'enzyme cyclooxygénase-2 (COX-2), ce qui réduit la production de prostaglandines, des substances chimiques impliquées dans l'inflammation. Cette inhibition de la COX-2 contribue à réduire l'inflammation</p>"
      },
      {
        questionText: "indiquer la proposition fausses : l’indication des ANIS en odontologie dans les algies inflammatoires aigues :",
        options: [
          "Les AINS peuvent augmenter le risque de diffusion de cellulites infectieuse cervico-faciales",
          "N’est envisagée que lorsque le risque infectieux est maitrisé",
          "L’antibiothérapie est y associée systématiquement",
          "La duré du traitement recommandée est de 3 jours avec un maximum de 5 jours"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>les AINS peuvent être utilisés pour réduire l'inflammation et la douleur dans de nombreuses situations dentaires, mais leur prescription n'implique pas nécessairement  l'utilisation d'antibiotiques, sauf en cas d'infection bactérienne</p>"
      },
      {
        questionText: "Parmi les effets indésirables des AINS on peut citer:",
        options: [
          "Le risque d'ulcère gastroduodénal",
          "Stimulation de la motricité utérin contractions)",
          "La base du flux sanguin hépatique ,insuffisance hépatique",
          "La baisse d'huile visuelle"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>les AINS peuvent irriter la muqueuse de l'estomac et du duodénum, ce qui peut entraîner la formation d'ulcères, de saignements gastro-intestinaux et d'autres problèmes digestifs</p>"
      },
      {
        questionText: "Que faut-il recommander au patient auquel ou prescrit des corticoïdes (AIS):",
        options: [
          "Prendre l'AIS le soir pour éviter l'insuffisance surrénalienne",
          "Adopter un régime hyperglucosé pour éviter l'hypoglycémie",
          "Durée de prise la plus courte possible pour éviter la panoplie des effets indésirables",
          "Associer un AINS pour renforcer l'effet anti-inflammatoire"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Il est recommandé de prescrire les corticoïdes (AIS) pour la durée la plus courte possible, car une utilisation prolongée peut entraîner de nombreux effets indésirables</p>"
      },
      {
        questionText: "Entre anti-inflammatoires stéroïdiens (ATS) et non stéroïdiens et AINS,laquelle des propositions suivantes est juste:",
        options: [
          "Les AIS ont une durée d'action plus courte",
          "les AINS ont un effet anti-inflammatoire plus puissant",
          "Les AINS peuvent conduire à un plus grand nombre d'effets indésirables",
          "les AIS ont un plus grand nombre"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les effets pharmacologiques suivant, lequel est retrouve avec les AINS:",
        options: [
          "Effet hypoglycémiant",
          "Effet hypnotique Effet",
          "anti agrégant plaquettaire",
          "Effet anorexigène"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Les AINS (anti-inflammatoires non stéroïdiens) ont un effet pharmacologique connu d'inhibition de l'agrégation plaquettaire, ce qui signifie qu'ils réduisent la capacité des plaquettes sanguines à s'agréger et à former des caillots</p>"
      },
      {
        questionText: "Les Anti Inflammatoires stéroïdiens (glucocorticoïdes) agissent :",
        options: [
          "Comme antalgiques en absence de processus inflammatoire",
          "Sur l'inflammation quel que soit son étiologie ou sa localisation",
          "En Inhibant les cyclo-oxygénase (enzymes impliqués dans le processus inflammatoire)",
          "Uniquement par voie locale"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Ils ont un large spectre d'activité anti-inflammatoire et peuvent être utilisés pour traiter diverses conditions inflammatoires, y compris celles de différentes origines.</p><p>Les anti-inflammatoires stéroïdiens, tels que les glucocorticoïdes, n'inhibent pas directement les cyclo-oxygénases (COX) comme le font les anti-inflammatoires non stéroïdiens (AINS)</p>"
      },
      {
        questionText: "L'utilisation d'anti-inflammatoires stéroïdiens en odontologie doit être de courte durée en raison:",
        options: [
          "De leurs effets indésirables en cure longue",
          "De leur durée d'action rapide",
          "De leur efficacité sur l'inflammation post-opératoire",
          "Aucune réponse n'est correcte"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>L'utilisation prolongée d'anti-inflammatoires stéroïdiens (glucocorticoïdes) peut être associée à un risque accru d'effets indésirables, notamment des effets systémiques tels que l'ostéoporose, l'hyperglycémie, la suppression du système immunitaire, etc.</p>"
      },
      {
        questionText: "L'activité anti-agrégante plaquettaire des AINS:",
        options: [
          "Due à la formation de thromboxane anti-agrégant",
          "Marquée avec les AINS sélectifs COX 2",
          "Les COXIBS ne sont pas concernés par cette activité",
          "N'apparait qu'a forte dose"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les anti-inflammatoires non stéroïdiens (AINS):",
        options: [
          "augmentent la synthèse de la prostaglandine par inhibition de la cyclooxygénase",
          "Augmentent la synthèse de la prostaglandine par inhibition de la phospholipase A2",
          "ne traversent pas la barrière placentaire",
          "en odontologie, ils sont utilisés principalement pour leur effet antalgique"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les antiinflammatoires stéroïdiens ou corticoïdes :",
        options: [
          "Ont une action anti-inflammatoire moins importante que les AINS",
          "Entrainent une hyperglycémie par augmentation de la synthèse hépatique",
          "Entrainent une hyperglycémie par augmentation de la masse musculaire",
          "Diminuent le risque infectieux"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les corticoïdes (ou anti-inflammatoires stéroïdiens) peuvent augmenter la glycémie en stimulant la synthèse hépatique de glucose (néoglucogenèse) et en diminuant l'utilisation périphérique du glucose, ce qui peut entraîner une hyperglycémie.</p>"
      },
      {
        questionText: "Lors d'antécédents ulcéreux :",
        options: [
          "La corticothérapie est contre indiquée",
          "La corticothérapie peut être prescrite sous surveillance clinique rapprochée",
          "Les AINS peuvent être prescris à la dose la plus faible en association avec un inhibiteur de la pompe à proton (IPP) à pleine dose",
          "Les AINS sont contre indiqués."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Lorsque des patients ont des antécédents ulcéreux ou sont à risque élevé de développer des ulcères gastro-intestinaux lorsqu'ils prennent des AINS, il est parfois recommandé de prescrire des AINS à la dose la plus faible efficace et en association avec un inhibiteur de la pompe à proton (IPP) à pleine dose</p>"
      },
      {
        questionText: "\"Les anti-inflammatoires non stéroïdiens (AINS) sont contre indiqués pendant le 1\"\" et le 3 trimestre de la grossesse, en raison entre autres de :\"",
        options: [
          "Sa toxicité fœtale",
          "Son passage via la barrière placentaire",
          "La diminution de la durée de la grossesse",
          "L'activation de la motricité utérine (inhibent la synthèse des prostaglandines)"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les anti-inflammatoires non stéroïdiens (AINS) sont utilisés en stomatologie, pour:",
        options: [
          "Leur action anti-inflammatoire",
          "Le traitement de courte durée de la douleur post-opératoire",
          "Eviter les inflammations post-chirurgicales",
          "Leur action anti-agrégante plaquettaire"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les AINS sont couramment prescrits en stomatologie pour soulager la douleur post opératoire après des procédures dentaires ou buccales. Leur action anti-inflammatoire  peut également contribuer à réduire l'enflure et l'inconfort associés à ces procédures. </p><p>Cependant, il est important de noter que leur utilisation doit être limitée à une courte durée pour éviter les effets indésirables potentiels</p><p>D : les AINS peuvent avoir un effet anti-agrégant plaquettaire, mais ce n'est pas leur principal rôle en stomatologie</p>"
      },
      {
        questionText: "En cas d'atteinte infectieuse, les corticoïdes (AIS):",
        options: [
          "Augmentent le risque infectieux",
          "Sont associés systématiquement à un antibiotique",
          "Augmentent le risque inflammatoire",
          "Masquent les signes d'une infection et en retardent le diagnostic"
        ],
        correctOptionIndexes: [3],
        explanation: "<p> Les corticoïdes (AINS) peuvent masquer les signes cliniques d'une infection en réduisant l'inflammation et en modulant la réponse immunitaire. Cela peut rendre plus difficile le diagnostic précoce d'une infection, car les symptômes typiques de l'infection, tels que la fièvre et la douleur, peuvent être atténués en présence de corticoïdes</p>"
      },
      {
        questionText: "Parmi les AINS suivants, lequel est sélectif pour la cyclooxygénase 2 :",
        options: [
          "Celecoxib",
          "Naproxen",
          "Piroxicam",
          "Aspirine"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>b : Naproxène : Le naproxène est un AINS qui inhibe à la fois la cyclooxygénase 1 (COX 1) et la cyclooxygénase 2 (COX-2), il n'est donc pas sélectif pour la COX-2.</p><p>c) Piroxicam : Le piroxicam est un AINS non sélectif qui inhibe à la fois la COX-1 et la COX-2, il n'est donc pas sélectif pour la COX-2.</p><p>d) Aspirine : L'aspirine est un AINS non sélectif qui inhibe à la fois la COX-1 et la COX-2, il n'est donc pas sélectif pour la COX-2.</p>"
      },
      {
        questionText: "Identifier dans cette liste la contre-indication formelle à l'emploi d'un AINS:",
        options: [
          "Allaitement",
          "Insuffisance rénale sévère",
          "Antécédents d'ulcère digestif",
          "Trouble de rythme cardiaque"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "<p>Les AINS peuvent affecter la fonction rénale, en particulier chez les patients ayant une insuffisance rénale préexistante</p>"
      },
      {
        questionText: "Quel est le médicament pour lequel un surdosage peut être observé dans l'association à un anti inflammatoire non stéroïdien :",
        options: [
          "Bétabloquant",
          "Diurétique",
          "Anticoagulant oral",
          "Antibiotique"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Les AINS peuvent affecter la fonction plaquettaire et la coagulation sanguine, ce qui peut augmenter le risque de saignement, en particulier lorsque pris en association avec des anticoagulants</p>"
      },
      {
        questionText: "Les anti-inflammatoires stéroïdiens sont :",
        options: [
          "Contre indiqués en cas d'infection bactérienne buccale",
          "Utilisés à court terme en odontologie",
          "Déconseillés avec les anti-inflammatoires non stéroïdiens",
          "Indiqués pour leur effet antalgique en post-chirurgie buccale"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Médicaments du sysème nerveux",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel est l'intérêt d'ajouter l'adrénaline aux anesthésiques locaux en chirurgie dentaire (Réponse fausse)?",
        options: [
          "Prolonger la durée d'action de l'anesthésique local",
          "Réduire le risque de toxicité systémique de l'anesthésique local;",
          "Augmenter la perméabilité vasculaire au site d'injection;",
          "Réduire les saignements pendant l'intervention chirurgicale."
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Quels récepteurs sont principalement impliqués dans l'action de l'adrénaline lorsqu'elle est utilisée en association avec un anesthésique local en chirurgie dentaire ? :",
        options: [
          "Récepteurs alpha-1 adrénergiques;",
          "Récepteurs beta-2 adrénergiques;",
          "Récepteurs muscariniques M3;",
          "Récepteurs nicotiniques N2."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Quelle affirmation est correcte concernant l'usage des benzodiazépines en odontologie?",
        options: [
          "Elles sont indiquées comme prémédication anxiolytique avant un acte dentaire ;",
          "Elles sont contre-indiquées pour toute intervention dentaire :",
          "Elles sont prescrites uniquement en cas de convulsions;",
          "Elles remplacent l'anesthésie locale."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>A : « Les BZD sont les molécules de choix en odontologie pour la PEC des anxiétés légères à modérées. (…) Les BZD sont prescrits la veille et 1h avant l’intervention. »</strong></p><p><strong>B : Elles ne sont pas contre-indiquées, au contraire, elles sont recommandées pour réduire l’anxiété en odontologie.</strong></p><p><strong>C : « Indication : Diazépam → prémédication anxiolytique ET traitement des convulsions chez l’enfant > 6 ans. »</strong></p><p><strong>D : Les benzodiazépines sont anxiolytiques et sédatives, mais elles ne remplacent jamais une anesthésie locale, nécessaire pour supprimer la douleur opératoire.</strong></p>"
      },
      {
        questionText: "Quel effet secondaire buccal est fréquemment observé avec les antipsychotiques?",
        options: [
          "Saignement gingival;",
          "Ulcère de la langue;",
          "Sécheresse buccale;",
          "Eruption cutanée péri-buccale."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>« Les neuroleptiques/antipsychotiques provoquent fréquemment une sécheresse buccale (effet anticholinergique), pouvant entraîner caries, candidoses et difficultés prothétiques. »</strong></p>"
      },
      {
        questionText: "Quelle médicament est à éviter au cabinet dentaire chez un patient sous IMAO ?",
        options: [
          "Paracétamol;",
          "Amoxicilline;",
          "Anesthésique adrenaliné;",
          "Lidocaïne sans adrénaline."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>L‘anesthésique local adrénalinée + IMAO: Contre-indication au cabinet dentaire. Pour pouvoir réaliser une AL chez un patient sous IMAO non sélectif, il faut soit arrêter l'IMAO 15 jours avant l'anesthésie, soit utiliser un anesthésique sans vasoconstricteur</strong></p>"
      },
      {
        questionText: "A propos des analgésiques centraux agonistes forts",
        options: [
          "Ils sont indiqués pour les douleurs du troisième palier M",
          "Ils incluent la morphine et la buprénorphine",
          "Ce sont des antagonistes des récepteurs Kappa",
          "Ils sont indiqués pour les douleurs du deuxième palier"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les médicaments du système nerveux central:",
        options: [
          "L'association d'un anesthésique local adrénaliné avec un antidépresseur de type IMAO-A est à prendre en compte",
          "Les antiépileptiques peuvent provoquer une sécheresse buccale",
          "Les benzodiazépines peuvent être prescrites par le médecin dentiste comme prémédication anxiolytique",
          "Les doses des benzodiazépines sont les mêmes chez les personnes âgées que chez l'adulte"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Un médicament parasympathomimétique n'aura pas comme effet Pharmacologique :",
        options: [
          "Une dilatation de la pupille",
          "une stimulation de la salivation",
          "Un ralentissement de la fréquence cardiaque (FC)",
          "Un rétrécissement des bronches"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Les médicaments parasympathomimétiques, également appelés cholinergiques, ont  tendance à stimuler le système nerveux parasympathique, ce qui provoque généralement des effets tels que la constriction de la pupille, l'augmentation de la salivation </p><p>Par conséquent, un médicament parasympathomimétique n'entraînera pas une dilatation de la pupille, mais plutôt une constriction (miosis).</p>"
      },
      {
        questionText: "En cas de choc vagal, on peut injecter en sous cutané:",
        options: [
          "L'adrénaline",
          "L'atropine",
          "Un corticoïde",
          "la dopamine"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>L'atropine est souvent utilisée pour traiter le choc vagal, car elle bloque l'effet du système parasympathique, qui est suractivé dans cette situation. Cela permet de restaurer l'équilibre autonome et de traiter les symptômes du choc vagal.</p>"
      },
      {
        questionText: "L'adrénaline est un médicament utilisé :",
        options: [
          "Dans le traitement du choc vagal",
          "Dans le traitement du choc anaphylactique",
          "Toujours en association avec de la lidocaïne",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>L'adrénaline est couramment utilisée dans le traitement du choc anaphylactique, une réaction allergique grave et potentiellement mortelle. Elle provoque la vasoconstriction, augmente la fréquence cardiaque et améliore la fonction cardiaque, ce qui peut aider à inverser les effets du choc anaphylactique.</p><p>C : L'adrénaline n'est pas toujours utilisée en association avec de la lidocaïne, cela dépend de l'indication spécifique et du protocole de traitement.</p>"
      },
      {
        questionText: "L'adrénaline est un sympathomimétique :",
        options: [
          "indiqué dans le traitement de l'hypertension artérielle HTA",
          "associé à un anesthésique local (lidocaine) pour prolonger la durée de l'effet de ce dernier",
          "possède des effets cardiaques inotrope et chronotrope négatifs",
          "utilisé dans le traitement de l'asthme"
        ],
        correctOptionIndexes: [1],
        explanation: "<p> L'adrénaline provoque une vasoconstriction locale, ce qui ralentit l'absorption de l'anesthésique local par les vaisseaux sanguins et prolonge ainsi son efficacité.</p>"
      },
      {
        questionText: "Le phénobarbital est un médicament destiné à traiter l'épilepsie, il agit par :",
        options: [
          "Inhibition de la recapture pré-synaptique du GABA",
          "Blocage des récepteurs glutaminergiques ;",
          "Blocage des canaux-sodiques voltage-dépendants ;",
          "Action gaba-mimétique sur les récepteurs GABAergique"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>A : augemente de l’action du GABA.</p>"
      },
      {
        questionText: "Concernant les médicaments de la classe des benzodiazépines:",
        options: [
          "Possèdent des effets anxiolytiques, hypnotiques et anticonvulsivants ;",
          "La durée de la prescription d'une benzodiazépine anxiolytique ne doit pas dépasser 4 semaines y compris la période de réduction des doses;",
          "L'arrêt de la prise des benzodiazépines doit se faire progressivement pour éviter le risque de survenue du syndrome de sevrage",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'addition d'adrénaline à la lidocaïne (anesthésique local) en injection sous cutanée :",
        options: [
          "Prolonge la durée de l'anesthésie locale par inhibition enzymatique ;",
          "Prolonge la durée de l'anesthésie locale par vasoconstriction locale",
          "Diminue le risque d'effets indésirables systémiques de la lidocaïne;",
          "Augmente la perméabilité de l'endothélium vasculaire"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les affirmations suivantes concernant les médicaments du système nerveux autonomie (SNA), laquelle est inexacte :",
        options: [
          "L'adrénaline stimule les récepteurs adrénergiques alpha et béta",
          "La prazosine stimule les récepteurs béta-1 adrénergique",
          "Les bétabloquants sont contre indiqués chez l'asmathique",
          "La pilocarpine est utilisée dans le traitement du glaucome"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>La prazosine est un alpha-bloquant, ce qui signifie qu'elle bloque les récepteurs adrénergiques alpha-1</p>"
      }
    ]
  },
  {
    title: "Les antibiotiques",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Concernant le métronidazole, quelle est l'affirmation fausse ?",
        options: [
          "C'est un inhibiteur du CYP2C9;",
          "il y a un risque de thrombose lors de son association aux anticoagulants comme les AVK;",
          "Il peut être associé à la spiramycine;",
          "Il possède une bonne diffusion au niveau du tissu buccodentaire."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>B : risque hémorragique lors de l’association avec les anticoagulants oraux (AVK)</strong></p>"
      },
      {
        questionText: "Chez un patient à haut risque d'endocardite infectieuse, quand faut-il instaurer une antibioprophylaxie?",
        options: [
          "Pour traiter une infection avec fièvre, trismus ou œdème persistant;",
          "Lors d'un simple examen clinique :",
          "Avant tout acte dentaire invasif impliquant une manipulation de la gencive;",
          "Uniquement en cas de fièvre."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : c’est un traitement curatif (infection déjà installée)</strong></p><p><strong>C : L’antibioprophylaxie est indiquée chez les patients à haut risque d’endocardite infectieuse avant tout acte invasif : détartrage, extraction, chirurgie parodontale… impliquant une manipulation de la gencive ou de la région péri-apicale</strong></p>"
      },
      {
        questionText: "Quelle est l'antibiothérapie de première intention recommandée chez la femme enceinte ?",
        options: [
          "Clindamycine 600 mg, 1h avant l'intervention;",
          "Amoxicilline 2 g, 1h avant l'intervention;",
          "Azithromycine 500 mg, le jour de l'intervention;",
          "Aucune antibioprophylaxie n'est possible pendant la grossesse."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A/C : sont utilisées en cas d’allergie à la pénicilline</strong></p><p><strong>B : « L’amoxicilline reste l’antibiotique de première intention, y compris chez la femme enceinte (sauf allergie). »</strong></p>"
      },
      {
        questionText: "Quelle est la contre-indication formelle à l'utilisation des cyclines?",
        options: [
          "Infection urinaire non compliquée;",
          "Enfant de moins de 8 ans :",
          "Allergie aux céphalosporines:",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>« Les cyclines sont formellement contre-indiquées chez l’enfant de moins de 8 ans et chez la femme enceinte, car elles se fixent sur l’émail et l’os → coloration définitive des dents + retard de croissance osseuse. »﻿</strong></p>"
      },
      {
        questionText: "Concernant le métronidazole :",
        options: [
          "C'est un antiparasitaire efficace contre les bactéries aérobies strictes",
          "C'est un inducteur du CYP2C9",
          "Il n'est jamais utilisé en monothérapie",
          "Il est associé à la spiramycine afin de réduire la posologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant le patient souffrant de mycoses buccale et porteur de prothèse :",
        options: [
          "Il doit nettoyer sa prothèse au complet avec un dérivé azolé comme le miconazole ou avec de l'amphotéricine B",
          "Il doit appliquer l'antifongique par voie topique sur les tissus buccaux infectés juste avant les repas",
          "Il doit enlever sa prothèse avant l'application de l'antifongique sur les lésions buccales",
          "Réponse a+b"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant le métronidazole: :",
        options: [
          "Il n'entraine pas de troubles digestifs",
          "C'est un inhibiteur du CYP 2C9 d'ou le risque d'hémorragies en cas d'association aux AVK",
          "C'est un inducteur du CYP 2C9 d'ou le risque de thromboses en cas d'association aux AVK",
          "Il agit uniquement sur les bactéries aérobies"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les antibiotiques utilisés en odontologie :",
        options: [
          "L'antibiotique de choix utilisé en première intention en odontologie est l'ampicilline",
          "L'antibiotique de choix utilisé en première intention en odontologie est l'amoxicilline",
          "Les macrolides sont des antibiotiques de première intention",
          "Les beta-lactamines doivent être utilisés pendant une durée de 3 jours"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les effets indésirables retrouvés avec les antibiotiques :",
        options: [
          "Les cyclines entrainent une dyschromie dentaire",
          "Les allergies ne sont pas retrouvées avec les pénicillines",
          "Les macrolides peuvent entrainer une hypoplasie de l'émail chez les enfants de moins de 8 ans",
          "Toutes les réponses précédentes sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'antibiothérapie prophylactique est:",
        options: [
          "Indiquée chez tous les patients qui doivent subir un acte dentaire invasif",
          "Administrée par voie locale uniquement",
          "Recommandée chez les patients recevant un traitement par les biphosphates par voie orale",
          "Indiquée chez les patients transplantés avant tout acte invasif"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'antibiothérapie curative en odontologie",
        options: [
          "Est instaurée systématiquement devant toute infection endodontique",
          "Est indiquée chez tous les patients ayant un abcès apical aigu",
          "N'est pas indiquée chez les patients ayant un abcès apical chronique",
          "Est indiquée en cas d'infections évolutives"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant le traitement par la doxycyline en odontologie:",
        options: [
          "C'est un antibiotique utilisé par voie locale en première intention",
          "Elle est indiquée dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Elle est indiquée pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "C'est un antibiotique de la classe des aminosides indiqué dans les infections sévères"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant la prescription d'un antibiotique en odontologie :",
        options: [
          "Elle ne peut se faire qu'après l'identification du germe en cause",
          "Les antibiotiques prescrits en préventif différent de ceux utilisés dans le traitement curatif.",
          "Les antibiotiques utilisés en première intention appartiennent à la famille des bétalactamines",
          "La doxycycline est prescrite en seconde intention lors de la prévention du risque d'endocardite infectieuse"
        ],
        correctOptionIndexes: [2],
        explanation: "<p> D : utilisé en cas d’Allergie à la pénicilline</p>"
      },
      {
        questionText: "Cochez la réponse fausse concernant les caractéristiques des antibiotiques prescrits en odontologie:",
        options: [
          "Les cyclines peuvent entrainer une dyschromie dentaire chez l'enfant de moins de 8 ans",
          "Tous les antibiotiques utilisés peuvent entrainer des manifestations allergiques",
          "Les macrolides sont prescrits en seconde intention en cas d'allergie aux béta-lactamines",
          "La doxycycline a plusieurs indications en odontologie."
        ],
        correctOptionIndexes: [3],
        explanation: "<p>Les cyclines trouvent une seule indication en odontologie. La doxycycline est prescrite à une posologie de 200mg/j en une prise unique pendant 14 jours dans le traitement de la parodontite agressive juvénile localisée</p>"
      },
      {
        questionText: "Concernant les modalités de prise en charge odontologique des personnes à risque d'endocardite infectieuses:",
        options: [
          "Un suivi bucco-dentaire est préconisé tous les 12 mois",
          "La mise en place d'une antibioprophylaxie suite à tout acte invasif",
          "L'instauration de l'antibiothérapie préventive se fait 7 jours avant l'intervention",
          "L'administration d'antibiotiques se fait par voie locale"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant la prescription des antibiotiques dans le but de traiter une infection en odontologie:",
        options: [
          "L'amoxicilline est prescrite en première intention à cause de 2g/j pendant trois jours chez le patient sain",
          "La doxicyline pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "La doxicyline pendant 14 jours dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Les antibiotiques de la classe des aminosides sont prescrits pour les infections sévères en milieu hospitalier"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant le métronidazole:",
        options: [
          "C'est un antiparasitaire efficace contre les bactéries aérobies strictes",
          "C'est un antiviral efficace contre les bactéries anaérobies strictes",
          "Il diffuse très peu dans le tissu bucco-dentaire",
          "Il est associé à la spiramycine afin de réduire la pathologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'antibiothérapie en odontologie :",
        options: [
          "L'antibiothérapie par voie locale n'est pas indiquée en odontologie",
          "Lors d'une germectomie chez un patient immunodéprimé, une antibioprophylaxie n'est pas systématique",
          "L'antibiothérapie curative doit être différer du traitement chirurgical du foyer infectieux",
          "L'antibiotique doit être choisi selon la liaison aux protéines plasmatiques"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>L’antibiothérapie par voie locale n’est pas indiquée en odontologie >>> faiblesse du niveau de preuve en termes de bénéfice thérapeutique + sécurité d’emploi problématique par risque de sélection de mutants résistants</p>"
      },
      {
        questionText: "L'antibiothérapie prophylactique en odontologie est:",
        options: [
          "Indiquée chez toute personne qui doit subir un acte dentaire invasif",
          "Prescrite pendant une longue durée",
          "Recommandée chez le patient à haut risque d'endocardite infectieuse",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>L’antibioprophylaxie: consiste en l’administration d’un ATB dans l’objectif de prévenir le développement d’une infection locale, générale ou à distance.</p><p>Champ d’indication et durée de prescription réduits.</p>"
      },
      {
        questionText: "Concernant l'antibiotique utilisés en odontologie:",
        options: [
          "Les macrolides provoquent une dyschromie dentaire chez les enfants de moins de 8 ans",
          "L'amoxicilline est associée à l'acide clavulanique pour avoir action sur les bactéries de béta lactamases",
          "Les cyclines sont toujours prescrites en deuxième intention après les pénicillines",
          "Les bêta-lactamines doivent être utilisés pendant une durée de 3 jours"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Amoxicilline+ Acide clavukanique: utilisés en deuxieme intention afin d’avoir une action sur les bactéries productrices de bêta-lactamases</p>"
      },
      {
        questionText: "Concernant la prescription d'une antibiothérapie curative en odontologie:",
        options: [
          "Les macrolides sont utilisés en première intention",
          "La doxycyline est utilisée dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "La doxycyline est prescrite pendant 14 jours dans la parodontite agressive localisée juvénile",
          "Les antibiotiques de la classe des aminosides sont réservés aux infections sévères en milieu hospitalier"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Lors d'une infection bactérienne, la prescription d'antibiotiques:",
        options: [
          "Repose sur l'identification du germe en cause quel que soit la gravité de l'infection",
          "Est possible même si l'antibiotique ne diffuse pas dans le tissu infecté",
          "Doit tenir compte de l'état physiopathologique du patient",
          "La prescription de deux antibiotiques est obligatoire dès le début de l'infection pour assurer une meilleure efficacité"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Le traitement de deuxième intention est envisagé en casBd’échec du traitement de première intention.</p>"
      },
      {
        questionText: "Concernant les antibiotiques utiles en odontologie:",
        options: [
          "Les pénicillines associées aux aminosides sont utilisées en première intention",
          "L'amoxicilline est associée à l'acide clavulanique pour avoir une action sur les bactéries productrices de béta-lactamases",
          "Les macrolides provoquent une dyschromie dentaire chez les enfants de moins de 8 ans",
          "Les cyclines sont toujours prescrites en deuxième intention après les pénicillines"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Le traitement des infections odontologiques se fait par:",
        options: [
          "L'amoxicilline en première intention à dose de 2g/j pendant trois jours pour un patient sain",
          "La doxycycline pendant 14 jours dans le traitement de la parodontite agressive localisée juvénile",
          "La doxycytine pendant 14 jours dans le traitement de la parodontite agressive localisée de la femme enceinte",
          "Des antibiotiques de la classe des aminosides pour les infections sévères en milieu hospitalier"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Toutes les propositions suivantes sont des principes de prescription des antibiotiques sauf une:",
        options: [
          "Choisir l'antibiotique efficace avec un spectre le plus large possible",
          "Choisir l'antibiotique efficace avec un spectre le plus étroit possible",
          "Choisir l'antibiotique selon la sévérité de l'infection et sa localisation",
          "Respecter la posologie de l'antibiotiques dose et durée du traitement"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'association spiramycine-métronidazole dans le traitement des infections buccodentaires:",
        options: [
          "Le métronidazole est utilisé pour son action sur les aérobies",
          "La spiramycine est utilisée pour son action sur les anaérobies",
          "L'association spiramycine/métronidazole permet d'augmenter la posologie prescrite",
          "L'association spiramycine/métronidazole permet d'élargir le spectre d'action"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les antibiotiques suivants, lequel n'est pas prescrit en odontologie à cause de son spectre d'action étroit:",
        options: [
          "La pénicilline A",
          "La pénicilline G",
          "La doxycycline",
          "La pristiniamycine"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Pénicilline G et V sensibles aux pénicillinase : Activité sur : Bactéries Gram+, Cocci Gram-, Treponème , R staph producteur pénicillinase : spectre étroit</p>"
      },
      {
        questionText: "L'antibiothérapie en odontologie:",
        options: [
          "Est une alternative aux règles d'hygiènes bucco-dentaires",
          "Est toujours instaurée après les résultats de l'antibiogramme",
          "A titre prophylactique, elle nécessite une prise unique d'Antibiotique qu'heure avant le reste thérapeutique",
          "À titre curatif, elle est instaurée par voie locale juste après le geste thérapeutique"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "En odontologie, l'antibioprophylaxie:",
        options: [
          "Permet de traiter une infection avérée",
          "Nécessite une prise unique d'antibiotique, un jour avant le geste clinique",
          "Pour la population générale, la plupart des actes invasifs ne nécessitent pas d'antibiothérapie prophylactique",
          "Doit être instaurée pour tout acte non invasif; chez un patient à risque d'endocardite infectieuse"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Une antibiothérapie curative idéale:",
        options: [
          "Ne doit être instaurée qu'après prélèvement bactériologique et antibiogramme",
          "En cas d'allergie aux bêtalactamines, le métronidazole est utilisé",
          "En cas d'insuffisance rénale; les tétracyclines peuvent être prescrits",
          "De deuxième intention, est l'association amoxicilline- acide clavulanique"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les Nitro-imidazolés (métronidazole) sont:",
        options: [
          "Des antibiotiques et antiparasitaires à lourds effets secondaires",
          "Indiqués dans les infections à bactéries aéro-anaérobies et dans l'amibiase",
          "Contre indiqués en cas d'hypersensibilité ou d'association aux antivitamines K, rifampicine, fluorouracile et anticonvulsivants inducteurs enzymatiques;",
          "Activés par une réduction intracellulaire donnant des produits cytotoxiques qui entraînent la mort de la bactérie ou du protozoaire."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Certains facteurs pharmacocinétiques et biologiques vont guider la décision de l'adaptation posologique, parmi lesquels:",
        options: [
          "Les propriétés physico-chimiques du médicament",
          "La demi-vie d'absorption du médicament",
          "La concentration minimale inhibitrice C.M.I de l'antibiotique prescrit",
          "La clairance de la créatinine"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Au cours des infections buccodentaires de sévérité moyenne, les antibiotiques recommandés en première intention sont:",
        options: [
          "Les pénicillines A (amoxicilline)",
          "Les macrolides en cas d'allergie aux bêta-lactamines",
          "La doxycyclines",
          "Les céphalosporines"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les propositions suivantes, concernant l'antibiothérapie, indiquez quelles sont celles qui sont vraies :",
        options: [
          "L'antibiothérapie prophylactique est indiquée avant tout acte invasif ou non invasif",
          "L'antibiothérapie prophylactique est recommandée chez le patient à haut risque d'endocardite infectieuse, en cas d'effraction de la muqueuse orale",
          "L'antibiothérapie curative est indiquée en présence d'une infection accompagnée de fièvre, d'adénopathie ou d'œdème en complément du traitement local",
          "L'antibiothérapie curative seule sans traitement local est recommandée en cas de suspension d'une infection bactérienne."
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Quels sont les antibiotiques agissants sur la synthèse des protéines et bactériostatiques:",
        options: [
          "Lactamines Macrolides et apparentés et Chloramphenicol",
          "Macrolides et apparentés, Chloramphénicol, Aminosides et Tétracycline",
          "Fluoroquinolones, Aminosides et Tétracyclines",
          "Macrolides et apparentes, Chloramphénicol et Tétracyclines."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'antibioprophylaxie en odontologie est indiquée lors de:",
        options: [
          "Actes non invasifs chez les patients à haut risque",
          "Actes invasifs chez les patients à haut risque d'endocardite infectieuse",
          "Actes non invasifs avec prise unique d'antibiotique une heure avant le geste clinique",
          "Actes invasifs avec deux prises d'antibiotique deux heures avant le geste clinique."
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les macrolides et apparentés sont prescrits en deuxième intention dans les infections odontologiques car:",
        options: [
          "Leurs spectre d'action est étroit et ils présentent de nombreuses interactions médicamenteuses",
          "Ils présentent une excellente diffusion amygdalienne et dans la cavité buccale",
          "Ils sont de puissant inhibiteur enzymatique",
          "L'azithromycine présente une durée de traitement de 3 jours"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les effets secondaires non communs aux antibiotiques utilisés en odontologie sont:",
        options: [
          "Les affections hématologiques",
          "Les troubles gastro-intestinaux",
          "Les troubles cutanéomuqueux",
          "Les réactions allergiques."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'association spiramycine/métronidazole:",
        options: [
          "Faite d'un macrolide bactéricide buccodentaire et d'un antiparasitaire antimycosique actif sur les bactéries anaérobies strictes du groupe des 5-nitroimidazolés",
          "Permet de réduire la posologie prescrite, d'élargir le spectre d'action et d'obtenir une synergie potentialisatrice",
          "Indiquée dans le traitement des infections aiguës et chroniques ou récidivantes telles que cellulites, parodontites et dans la prévention des infections postopératoires",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'amoxicilline indiquée en première intention dans les infections buccodentaires est contre indiquée dans le cas de:",
        options: [
          "Insuffisance hépatique grave et association au Méthotrexate",
          "Allergies et de mononucléose infectieuse.",
          "Allergie, grossesse et allaitement",
          "Hypersensibilité allergique et chez l'enfant de moins de 8 ans."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  // quizzes/year-3/pharmacologie.js
// PART 3/3
// Note: Correct answers are determined based on the provided commentary/explanation.

  {
    title: "les antiseptiques/ antifongique / antiviraux",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel médicament peut être utilisé pour traiter les lésions fongiques étendues buccales chez le patient immunodéprimé?",
        options: [
          "Miconazole gel 2,",
          "Fluconazole gélule 150 mg;",
          "Métronidazole comprimé 500 mg.",
          "Aciclovir crème 5."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>« Traitement systémique :</strong></p><p><strong>Lésions muqueuses étendues, inaccessibles au traitement local, qui surviennent dans un contexte de déficit immunitaire génétique ou acquis.</strong></p><p><strong>Exemple : fluconazole : Triflucan®, de 50 à 100 mg par jour pendant 1 à 2 semaines. »</strong></p>"
      },
      {
        questionText: "Concernant les principes généraux d'utilisation des antiseptiques :",
        options: [
          "L'utilisation doit être précise et illimitée dans le temps;",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés;",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale;",
          "On peut mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : L’utilisation thérapeutique des antiseptiques doit être précise et limitée dans le temps.</strong></p><p><strong>B : distinction : antiseptiques = tissus vivants, désinfectants = milieux inertes.</strong></p><p><strong>D : Il ne faut pas mélanger ou employer successivement deux antiseptiques différents en raison du risque d’inactivation ou de toxicité.</strong></p>"
      },
      {
        questionText: "Les ammoniums quaternaires sont :",
        options: [
          "Des antiseptiques majeurs;",
          "Des agents antiseptiques inhibiteurs de la plaque de catégorie B;",
          "Des antiseptiques ne présentant aucun effet rémanent;",
          "Des antiseptiques qui peuvent être conservés au maximum 30 jours après ouverture."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : es antiseptiques majeurs sont surtout les biguanides (chlorhexidine) et les dérivés iodés/halogénés.</strong></p><p><strong>B : Catégorie B – agents antiseptiques inhibiteurs de la plaque : ammoniums quaternaires, phénols (listérine, triclosan). »</strong></p><p><strong>C : ils présentent un effet rémanent bref</strong></p><p><strong>D : les solutions aqueuses se contaminent très facilement → bien conserver au maximum 8 jours après ouverture.</strong></p>"
      },
      {
        questionText: "Les biguanides ne sont pas des :",
        options: [
          "Antiseptiques majeurs;",
          "Antiseptiques de catégorie A;",
          "Agents antiseptiques antiplaque;",
          "Bactéricides à spectre étroit."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>A : Les antiseptiques majeurs, bactéricides à large spectre, sont surtout représentés par les biguanides et les dérivés iodés ou chlorés</strong></p><p><strong>B : catégorie A – agents antiseptiques antiplaque : biguanides.</strong></p><p><strong>C : Ils inhibent la formation du biofilm et diminuent par conséquent le risque d’apparition de maladies parodontales et carieuses</strong></p><p><strong>D : e sont des bactéricides à large spectre,</strong></p>"
      },
      {
        questionText: "Concernant la prise en charge des mycoses buccales non étendues:",
        options: [
          "Les antifongiques par voie systémique sont prescrits en première intention",
          "La désinfection des prothèses dentaires se fait avec de la bétadine rouge",
          "Il ne faut pas consommer d'aliment ou de liquide dans les 30 minutes suivant l'application d'un gel antifongique",
          "L'utilisation du métronidazole en gargarisme est préconisée en cas d'échec thérapeutique"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A:Les antifongiques par voie locale sont prescrits en première intention </p><p>B:Patients portant une prothèse dentaire : Nettoyer la prothèse et éviter de la porter la nuit. Faire tremper la prothèse dans une solution diluée d'eau de javel ou de gluconate de chlorhexidine 0,12 % . Bien rincer avant de porter la prothèse dentaire.</p>"
      },
      {
        questionText: "Parmi ces propositions, laquelle ne constitue pas une différence entre un antiseptique et un antibiotique:",
        options: [
          "Ils ont une action non spécifique",
          "Ils ont un effet local",
          "Ils sont utilisés à visée préventive",
          "Permettent au niveau des tissus vivants d'inhiber la croissance ou de tuer les micro organismes"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A ;  Les antiseptiques se distinguent des antibiotiques par des mécanismes d’action peu spécifiques, voire non spécifiques. </p><p>C: Opération au résultat momentané</p>"
      },
      {
        questionText: "Quelle est l'élément qui n'est pas inhibiteur des antiseptiques Biguanides:",
        options: [
          "Matières organiques",
          "Savons",
          "Antiseptiques Ammoniums Quaternaires",
          "Antiseptiques Dérivés Halogénés"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les principes d'utilisation des antiseptiques :",
        options: [
          "L'utilisation thérapeutique doit être précise",
          "L'utilisation thérapeutique peut être illimitée",
          "Ils doivent être utilisés sur les tissus vivants et propres",
          "Nécessite le repérage des incompatibilités et interaction des différents produits"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les biguanides ne sont pas des :",
        options: [
          "Antiseptiques majeurs",
          "Antiseptiques de catégorie A",
          "Agents antiseptiques antiplaque",
          "Bactéricides à spectre étroit"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Le patient porteur de prothèse dentaire et atteint de mycose buccale ne doit pas:",
        options: [
          "Enlever la prothèse avant l'administration du traitement local",
          "Appliquer une mince couche sur le coté de la prothèse en contact avec les tissus buccaux",
          "Nettoyer la prothèse avec de gluconate de Chlorhexidine",
          "Boire de l'eau immédiatement après avoir appliqué miconazole gel sur la muqueuse buccale infectée"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>Prise en charge des patients porteurs de prothèse dentaire et atteints de candidose buccale</p><p>• Avant application du traitement local antifongique :</p><p>o Enlever la prothèse.</p><p>o Appliquer une mince couche du gel antifongique (ex. miconazole) sur le côté de la prothèse en contact avec les tissus buccaux.</p><p>o Appliquer également sur la muqueuse buccale infectée.</p><p>• Nettoyage de la prothèse :</p><p>o Tremper dans une solution diluée d’eau de Javel ou de gluconate de chlorhexidine à 0,12 %.</p><p>o Bien rincer avant de remettre la prothèse pour éviter altération des tissus et contamination.</p><p>• Alimentation et liquide :</p><p>o Éviter de manger ou de boire dans les 30 minutes suivant l’application du traitement topique, pour permettre une bonne efficacité du médicament.</p>"
      },
      {
        questionText: "Concernant le patient souffrant d'un herpès labial (RF ):",
        options: [
          "Les soins dentaires non urgents drivent être reportés à cause du risque d'aérosolisation du virus et de contamination",
          "L'application de l'acyclovir en crème à 5% sur les lésions est recommandée",
          "La prescription du valaciclovir en comprimé est recommandée",
          "La prise d'antalgiques est possible pour soulager la douleur"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>L'application d'un antiviral topique( voie locale ) peut être envisagée, selon la fréquence et la gravité des lésions : Penciclovir 1 % crème ; Acyclovir 5 % crème</p>"
      },
      {
        questionText: "Concernant les principes généraux d'utilisation des antiseptiques):",
        options: [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale",
          "On peut mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les ammoniums quaternaires sont:",
        options: [
          "Des antiseptiques majeurs",
          "Des agents antiseptiques inhibiteurs de la plaque de catégorie B",
          "Des antiseptiques ne présentant aucun effet rémanent",
          "Des antiseptiques qui peuvent être conservés au maximum 30 jours après ouverture."
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'utilisation des antifongiques par voie locale:",
        options: [
          "Il ne faut pas enlever la prothèse avant l'administration du traitement locale",
          "Il faut appliquer le traitement local après les repas",
          "Ils sont utilisés pour traiter les lésions muqueuses étendues",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>-Enlever lesprothèse avant l'administration du traitement local, Appliquer une mince couche sur le côté de la prothèse en contact avec les tissus buccaux ainsi que sur la muqueuse buccale infectée. </p><p>Ce sont donc des médicaments capables de traiter les mycoses </p>"
      },
      {
        questionText: "Le patient porteur de prothèse dentaire et atteint de mycose buccale doit:",
        options: [
          "Laver sa prothèse avec de l'eau savonneuse uniquement",
          "Appliquer le miconazole gel sur la muqueuse buccale infectée sans enlever sa prothèse",
          "Boire de l'eau immédiatement après avoir appliqué miconazole gel sur la muqueuse buccale infectée",
          "Nettoyer la prothèse avec du gluconate de Chlorhexidine"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'herpès buccal:",
        options: [
          "Il est traité par l'application locale de l'Aciclovir crème sur les lésions",
          "Il n'est pas nécessaire de retarder un détartrage jusqu'à la guérison de l'herpes",
          "Il est plus fréquent chez les personnes en bonne santé",
          "Il est traité par le valaciclovir par voie générale"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "<p>Acyclovir 5 % crème : appliquer sur la lésion toutes les 2 heures, depuis l'apparition des picotements jusqu'à la guérison de la lésion</p>"
      },
      {
        questionText: "Concernant les principes généraux d'utilisation des antiseptiques:",
        options: [
          "L'utilisation doit être précise et illimitée dans le temps.",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'amphotéricine B est:",
        options: [
          "Un azolés de type Imidazolés",
          "Indiqué en première intention par voie locale dans les mycoses buccales",
          "Réservée aux mycoses graves et systémiques",
          "Doté d'une toxicité moyenne type fièvres, frissons, nausées, vomissements, hypotension"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Un polyènes </p>"
      },
      {
        questionText: "Les antiseptiques majeurs, bactéricides à large spectre, sont:",
        options: [
          "Les Ammoniums quaternaires",
          "Les biguanides",
          "Les halogénés",
          "Les phénols"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>des antiseptiques majeurs, bactéricides à large spectre : biguanides et halogénés essentiellement ; </p><p>• des antiseptiques intermédiaires, bactéricides à spectre étroit : ammoniums quaternaires ; </p><p>• des antiseptiques mineurs, bactériostatiques à spectre étroit :notamment carbanilides, diamidines et dérivés métalliques ; </p><p>• d’autres produits variés, dont certains sont considérés à tort comme antiseptiques (peroxyde d’hydrogène, colorants). </p>"
      },
      {
        questionText: "Concernant les principes généraux d'utilisation des antiseptiques, quelle(s) est (sont) la (les) proposition(s) juste(s)",
        options: [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance locale."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les principes généraux d'utilisation des antiseptiques:",
        options: [
          "L'utilisation doit être précise et illimitée dans le temps",
          "Ils doivent être utilisés sur les tissus vivants (peau et les muqueuses) propres et les milieux inertes contaminés",
          "Mélanger ou employer successivement deux antiseptiques différents pour augmenter l'efficacité",
          "Il faut bien repérer les incompatibilités des différents produits et surveiller la tolérance local"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'agent antiseptique anti-plaque en supra- et sous-gingivales le plus utilisé est",
        options: [
          "Un ammonium quaternaire (le chlorhydrate de cetylpyridinium)",
          "Les dérivés halogènes (Povidone iodée, Soluté de Dakin)",
          "Un biguanide (Chlorhexidine)",
          "Les phénols (la listérine et le triclosan),"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les antiseptiques majeurs, bactéricides à large spectre, on a",
        options: [
          "Les biguanides",
          "Les Ammoniums quaternaires",
          "Les hexahydropyrimidines",
          "Les phénols essentiellemen"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les échecs thérapeutiques aux antifongiques utilisés pour le traitement des mycoses buccales ne sont pas dus",
        options: [
          "À l'effet du débit salivaire et de l'action de détersion de la muqueusebuccale",
          "Aux résistances à ces agents",
          "À la durée de traitement de moins de deux semaines",
          "Aux interactions avec CYP des dérivés azoléS"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'amphotéricine B est",
        options: [
          "Un azolés du type Imidazoles",
          "Indiquée en première intention par voie locale dans les mycoses buccales",
          "Réservée aux mycoses graves et systémiques",
          "Doté d'une toxicité moyenne type fièvres, frissons, nausées, vomissements, hypotension."
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "les analgésiques",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Laquelle des molécules suivantes est un agoniste partiel et de forte affinité pour les récepteurs opioïdes :",
        options: [
          "La codéine;",
          "Le tramadol;",
          "La buprénorphine;",
          "Le Fentanyl."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>Buprénorphine</strong></p><p><strong>– Elle est agoniste partielle des récepteurs µ</strong></p><p><strong>– Possède une très forte affinité pour ces récepteurs, mais a une activité stimulante intrinsèque plus faible que celle de la morphine</strong></p><p><strong>– Elle est antagoniste des récepteurs kappa</strong></p><p><strong>– Utilisée palier III traitement de la douleur</strong></p><p><strong>A : Analgésique morphinique faible</strong></p><p><strong>B : Analgésique central, agoniste µ mais faible.</strong></p><p><strong>D : Analgésique morphinique fort, agoniste pur µ.</strong></p>"
      },
      {
        questionText: "A propos du tramadol",
        options: [
          "Il s'agit d'un agoniste partiel des récepteurs mu des opioïdes ;",
          "C'est un médicament stupéfiant;",
          "Il est employé pour le traitement des douleurs de deuxième palier;",
          "Aucune réponse n'est juste."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>Tramadol</strong></p><p><strong>• Analgésique central par action sur les récepteurs µ.</strong></p><p><strong>• Inhibiteur de recapture de noradrénaline et sérotonine.</strong></p><p><strong>• Aux doses recommandées, ne provoque ni dépression respiratoire, ni constipation.</strong></p><p><strong>• Classe : analgésique morphinique faible, correspondant au pallier II de l’OMS.﻿</strong></p>"
      },
      {
        questionText: "Laquelle des molécules suivantes est un agoniste parfait et de forte affinité pour les récepteurs opioïdes",
        options: [
          "La codéine",
          "Le tramadol",
          "La buprenorphine",
          "Le fentanyl"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les effets indésirables des analgésiques opioïdes on retrouve:",
        options: [
          "Troubles digestifs type vomissements et diarrhées",
          "Hypertension artérielle",
          "Dépression respiratoire",
          "Dilatation pupillaire"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos du tramadol:",
        options: [
          "C'est un analgésique central fort",
          "Il est contre-indiqué en association avec un analgésique central ou périphérique",
          "Son affinité aux récepteurs u est égale à celle de la morphine pour les mêmes récepteurs",
          "Appartient à la liste I"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos des analgésiques centraux agonistes forts :",
        options: [
          "Ils sont indiqués pour les douleurs du troisième palier",
          "Ils incluent la morphine et la buprénorphine",
          "Ce sont des antagonistes des récepteurs Kappa",
          "Ils sont indiqués pour les douleurs du deuxième palier"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La morphine est un analgésique central:",
        options: [
          "Ayant une activité intrinsèque inférieure à 10",
          "Indiqué dans les douleurs du troisième palier",
          "Qui appartient à la liste 1",
          "Agoniste des 30 minutes",
          "Agonistes des récepteurs u et antagoniste des récepteurs Kappa."
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos du tramadol :",
        options: [
          "C'est un analgésique central fort",
          "Il n'est commercialisé que sous forme non associée",
          "Son affinité aux récepteurs u est supérieure à celle de la morphine pour les mêmes récepteurs",
          "Son activité intrinsèque est identique à celle de la morphine."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "À propos de la bupernorphine:",
        options: [
          "Il s'agit d'un agoniste partiel des récepteurs de Kappa",
          "Elle possède une affinité plus faible que celle de la morphine vis-à-vis des récepteurs Mu (4)",
          "Elle est utilisée comme antidote en cas d'intoxication par la morphine",
          "Son activité intrinsèque est plus faible que celle de la morphine"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>Elle est agoniste partielle des récepteurs µ </p><p>une très forte affinité / Utilisée palier III traitement de la douleur </p>"
      },
      {
        questionText: "Concernant le mode d'action des analgésiques opioïdes :",
        options: [
          "Les récepteurs opioïdes se trouvent uniquement au niveau du système nerveux central",
          "La stimulation des récepteurs opioïdes induit l'activation des canaux potassiques hyperplasiant",
          "Les récepteurs opioïdes ont une localisation exclusivement post- synaptique",
          "La stimulation des récepteurs opioïdes induit une augmentation de la formation de l'AMP cyclique"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos de la morphine:",
        options: [
          "Il s'agit d'un analgésique central pur et fort",
          "Il s'agit d'un analgésique central et périphérique",
          "Est un analgésique central partiel",
          "La durée maximale de sa prescription est de 06 semaines"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La buprénorphine:",
        options: [
          "Est un analgésique central opiacé",
          "Est un analgésique central moins puissant que la morphine",
          "Appartient à la famille des agonistes purs",
          "Est un analgésique central partiel"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>   ANALGÉSIQUES CENTRAUX OPIOIDES </p>"
      },
      {
        questionText: "A propos des analgésiques morphiniques:",
        options: [
          "Ils sont tous des opiacés",
          "L'activation de leurs récepteurs induit une hyperexcitabilité neuronale",
          "Certains d'eux sont des analgésiques périphériques",
          "La buprenorphine fait partie de cette classe"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "A propos de la morphine:",
        options: [
          "Elle est délivrée pour une durée maximale d'un mois",
          "Il s'agit d'un agoniste Kappa et antagoniste Mu",
          "Elle appartient à la liste des stupéfiants",
          "Est un analgésique du deuxième palier de la douleur"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "MÉDICAMENTS DE L’APPAREIL CARDIO- VASCULAIRE",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Lors de la planification d'une chirurgie buccale chez un patient sous traitement antithrombotique",
        options: [
          "Ceci engage uniquement une stratification sur le risque hémorragique;",
          "L'arrêt de l'antithrombotique est systématique lorsque le risque hémorragique est élevé;",
          "La chirurgie doit être programmée avant la prochaine prise de l'antithrombotique lorsque celui-ci n'est pas arrêté;",
          "Le délai d'interruption de l'antithrombotiquene dépend que du risque thrombotique"
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : « Le chirurgien évalue le risque hémorragique […] Le médecin prescripteur de l’antithrombotique évalue le risque thrombotique. »</strong></p><p><strong>B : « Chirurgie à risque hémorragique élevé : le médecin prescripteur de l’antithrombotique doit évaluer le risque thrombotique, si le risque thrombotique est faible : arrêt temporaire… si le risque thrombotique est élevé : prise en charge hospitalière est recommandée. »</strong></p><p><strong>D : Le délai d’interruption est précisé selon la molécule (AVK, AOD, antiagrégants) et dépend à la fois du risque thrombotique et du risque hémorragique lié à la chirurgie.</strong></p>"
      },
      {
        questionText: "Dans le traitement de l'hypertension artérielle chez le sujet âgé:",
        options: [
          "les antihypertenseurs centraux sont privilégiés dans le cas d'une cardiopathie associée;",
          "l'hypotension orthostatique peut être aggravée par l'usage d'un bétabloquant;",
          "les inhibiteurs calciques sont indiqués en première intention en cas de néphropathie diabétique associé;",
          "Les diuritiques thiazidiques et les inhibiteurs calciques dihydropiridiniques sont les classes thérapeutiques préférentielles chez cette catégorie."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>A : les antihypertenseurs centraux (clonidine, méthyldopa, rilménidine, moxonidine) ne sont pas de première intention, surtout chez le sujet âgé (effets indésirables : sécheresse buccale, hypotension orthostatique, somnolence, syndrome dépressif).</strong></p><p><strong>D : chez le sujet âgé hypertendu, les diurétiques thiazidiques et les inhibiteurs calciques (type amlodipine, nifédipine) sont les plus utilisés.</strong></p>"
      },
      {
        questionText: "les inhibiteurs de l'enzyme de conversion:",
        options: [
          "Provoquent une toux sèche par accumulation de l'histamine au niveau bronchique;",
          "Inhibent la synthèse de la rénine;",
          "C'est des médicaments hypokaliémiants;",
          "Peuvent être associé au diurétiques thiazidiques."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>A : la toux est liée à la bradykinine, pas à l’histamine.</strong></p><p><strong>Les IEC inhibent la conversion de l’angiotensine I en angiotensine II et augmentent les concentrations de bradykinine.</strong></p><p><strong>Effets indésirables : … toux sèche et angio-œdème (IEC).</strong></p><p><strong>B : IEC : inhibent la conversion de l’angiotensine I en angiotensine II… »</strong></p><p><strong>C : Effets indésirables : … hyperkaliémie, insuffisance rénale aiguë en cas de sténose des artères rénales…</strong></p>"
      },
      {
        questionText: "les bétabloquants :",
        options: [
          "Peuvent aggraver un asthme préexistant;",
          "Certains sont cardiosélectifs à forte dose;",
          "Les molécules hydrophiles sont privilégiés en cas d'insuffisance rénale;",
          "Sont des anti-arythmiques de classe I."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>B : Les bêtabloquants cardiosélectifs (ex : aténolol, bisoprolol, métoprolol) sont sélectifs des récepteurs β1 mais perdent leur sélectivité à forte dose.</strong></p><p><strong>C : </strong></p><p><strong>• Hydrosolubles (aténolol, nadolol) → élimination rénale → ⚠️ accumulation si insuffisance rénale.</strong></p><p><strong>• Liposolubles (propranolol, métoprolol) → métabolisme hépatique → privilégiés si insuffisance rénale.</strong></p><p><strong>D : Classe II : bêtabloquants (métoprolol, bisoprolol…) → blocage des récepteurs β adrénergiques des fibres à réponse lente.</strong></p>"
      },
      {
        questionText: "Parmi les effets secondaires buccodentaires suivants, lequel est l'administration des antihypertenseur:",
        options: [
          "Dysgénésie",
          "Hyposialie",
          "Xérostomie",
          "Hyperplasie gingivale"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Xérostomie (sécheresse buccale ) ou Hyposialie (Diminution de la production de salive) réversibles à l’arrêt du traitement </p>"
      },
      {
        questionText: "Les bétabloquants sont une classe de médicaments :",
        options: [
          "Qui peuvent être utilisés en toute sécurité chez une personne asthmatique",
          "Dont l'effet augmente par l'association à l'adrénaline comme adjuvant en anesthésie",
          "Leur association à la lidocaïne est à éviter.",
          "Qui peuvent entrainer une hyperplasie gingivale."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Contre-indication : Asthme, Insuffisance cardiaque, La maladie de RAYNAUD et les artérites périphériques, Bloc auriculo-ventriculaire </p>"
      },
      {
        questionText: "Dans le traitement de l'hypertension artérielle (HTA) :",
        options: [
          "La nifedipine peut entrainer une hyperplasie gingivale réversible",
          "Une hyposialie peut être provoquée par les inhibiteurs de l'enzyme de conversion",
          "En cas d'apparition d'une hyposialie, il est recommandé d'arrêter le traitement",
          "La dysgueusie est un effet indésirable irréversible de certains antihypertenseurs"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les médicaments du système cardio-vasculaire :",
        options: [
          "Les inhibiteurs de l'enzyme de conversion sont utilisés dans le traitement de l'angor",
          "les corticoïdes augmentent l’effet des antihypertenseurs",
          "La trinitrine est utilisée dans le traitement de la crise d'angor",
          "Les AINS réduisent l'effet des antihypertenseurs"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "L'hyperplasie gingivale se manifeste par une gencive molle et hémorragique, elle peut être provoquée par la prise de:",
        options: [
          "Diurétiques (ex furosemide)",
          "Nifedipine",
          "Sartans",
          "Inhibiteurs calciques2"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Les hypoglycémiants",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "La prise en charge dentaire d'un patient diabétique équilibré (HbA1c ≤7%) au cabinet dentaire:",
        options: [
          "Nécessite l'instauration systématique d'une antibioprophylaxie:",
          "Contre-indique l'utilisation d'anesthésie locale:",
          "Doit faire prévoir une séance courte, le matin en s'assurant que le patient a pris une collation et ses médicaments pour le diabète;",
          "Se fait exclusivement en milieu hospitalier quel que soit le niveau de risque du soin dentaire."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>A : « HbA1c ≤ 7% : Tous les soins sont possibles en respectant les précautions générales. </strong></p><p><strong>Antibioprophylaxie uniquement pour les actes invasifs chez les patients atteints de diabète mal contrôlé. » </strong></p><p><strong>D : le patient équilibré (HbA1c ≤7%) peut être pris en charge au cabinet. Le milieu hospitalier est réservé aux diabétiques mal contrôlés</strong></p>"
      },
      {
        questionText: "La maladie parodontale survenant chez le sujet diabétique:",
        options: [
          "Peut-être une complication orale du diabète;",
          "N'a aucune incidence sur l'équilibre glycémique chez le sujet diabétique;",
          "Proscrit l'utilisation d'analgésie en début du soin dentaire;",
          "Sa prise en charge est indépendante du niveau de contrôle glycémique chez le sujet diabétique."
        ],
        correctOptionIndexes: [0],
        explanation: "<p> <strong>« Complications orales : maladie parodontale.</strong></p><p><strong>Relation de cause-effet bidirectionnelle :</strong></p><p><strong>– Constitue une complication du diabète.</strong></p><p><strong>– Aggrave le déséquilibre glycémique. »</strong></p>"
      },
      {
        questionText: "La mise en route d'un traitement hypoglycémiant chez le diabétique:",
        options: [
          "Présente la particularité d'être dépourvu du risque de retard cicatriciel;",
          "S'accompagne d'un risque d'hypoglycémie notamment lors des soins dentaires de longue durée ;",
          "Supprime l'hyperglycémie lié au stress précédent les gestes invasifs;",
          "Permet la poursuite du soin dentaire en cas de survenue d'hypoglycémie."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>A : Retard de cicatrisation et risque infectieux en cas de non contrôle du diabète</strong></p><p><strong>C : le stress reste un facteur d’hyperglycémie, même sous traitement.</strong></p><p><strong>D : Arrêt immédiat du traitement dentaire et administrer des glucides à action rapide</strong></p>"
      },
      {
        questionText: "Les sulfamides hypoglycémiants:",
        options: [
          "Ne présentent pas d'interactions médicamenteuses avec les antifongiques lorsque ces derniers sont utilisés par voie locale;",
          "Sont dotés d'un risque d'hypoglycémie lorsqu'ils sont associés aux anti-inflammatoires stéroïdiens;",
          "Sont dépourvus de risque d'interactions médicamenteuses;",
          "Exposent à une majoration du risque hypoglycémique lorsqu'ils sont déplacés de leur site de liaison à l'albumine."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong> Sulfamides hypoglycémiants</strong></p><p><strong>• Ils se lient fortement à l’albumine plasmatique.</strong></p><p><strong>• Certains médicaments (ex. anti-inflammatoires non stéroïdiens, anticoagulants, salicylés) peuvent déplacer les sulfamides de leur site de liaison, augmentant ainsi la fraction libre active.</strong></p><p><strong>• Ce mécanisme expose à une majoration du risque d’hypoglycémie.</strong></p>"
      },
      {
        questionText: "Chez les diabétiques de type 2 :",
        options: [
          "Les cellules ẞ des ilots de Langerhans sont détruites par les auto-anticorps dans 90% des cas",
          "L'insuline est le traitement de première intention dés que le diagnostic est posé",
          "Les manifestations bucco-dentaires sont présentes chez tous les patients",
          "Les complications bucco-dentaires peuvent se manifester si le diabète n'est pas équilibré"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>A:c’est la physiopathologie du diabète type 1  </p><p>B; le diabète type 2 est -Insulino-résistant</p>"
      },
      {
        questionText: "Les manifestations bucco-dentaires liées au diabète :",
        options: [
          "Entrainent des parodontites qui peuvent être réversibles si le diabète est équilibré",
          "Sont provoqués par une résistance à l'insuline au niveau des glandes salivaires",
          "Sont responsables de l'augmentation de la résistance à l'insuline",
          "Représentent un facteur de risque d'apparition du diabète"
        ],
        correctOptionIndexes: [0],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78e5bc41-1be0-11f0-a4a7-960004386930/2rX3ZVU6dQ5VcBDUvYJP.png\"></p>"
      },
      {
        questionText: "La prise en charge du risque infectieux chez un patient diabétique en odontologie n'implique pas:",
        options: [
          "La prescription d'une antibioprophylaxie dans l'heure qui précède les soins",
          "La poursuite de l'antibiotique pendant la phase de cicatrisation muqueuse (7 à 10 j)",
          "La prescription des bains de bouche antiseptiques pendant 30 jours",
          "(Chlorhexidine 0.12 %)",
          "Faire l'anesthésie à distance des foyers infectieux s'ils existent"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>-Prescrire des BB antiseptiques pendant 7J (Chlorhexidine 0.12%), </p>"
      },
      {
        questionText: "Le quelle est la conduite à tenir en cas de malaise hypoglycémique chez un patient inconscient:",
        options: [
          "Manger un nutriment à l'index glycémique faible",
          "Administrer un sucre en per os du donner une boisson sucrée",
          "Injecter du glucagon en IM ou SC",
          "Injecter un soluté glucosé en IV plus en perfusion"
        ],
        correctOptionIndexes: [2],
        explanation: "<p> Patient conscient: arrêt des soins---allonger le patient--- boisson sucrée. </p><p>Patient inconscient: l’injection intra veineuse d’un soluté glucosé à 50% ou du Glucagon® </p>"
      },
      {
        questionText: "La prise en charge odontologique des patients diabétiques:",
        options: [
          "Elle se base seulement sur l'équilibre de la glycémie à jeun",
          "En cas d'HbA1c >7.5: les actes très invasifs peuvent se faire sous couverture d'antibiotiques",
          "L'antibioprophylaxie n'est pas nécessaire pour les actes peu invasifs (caries, détartrage, etc...)",
          "La chirurgie devra être réalisée de la manière la moins traumatisante possible sous couverture d'agents antimicrobiens (antibioprophylaxie pré ou postopératoire, bains de bouche à la Chlorhexidine par exemple), et sous une glycémie contrôles"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La relation entre les maladies parodontales et le diabète est une relation:",
        options: [
          "Bi-directionnelle le diabète favorise l'apparition des parodontites, et les parodontites contribuent au mécanisme d'insulino-résistance",
          "Les parodontites constituent la deuxième complication du diabète",
          "La prévention des affections dentaires n'a aucun effet sur l'équilibre glycémique",
          "Le processus d'ostéointégration risque d'être perturbé même chez le patient diabétique bien contrôle"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les affirmations suivantes, concernant le traitement du diabète, indiquer celle qui est juste:",
        options: [
          "Les analogues d'insulines ont des structures totalement différentes del'insuline humaine.",
          "Les insulines ultra-rapides s'administrent 60 min avant le repas.",
          "Les sulfamides hypoglycémiants sont utilisés en cas de diabète non insulino-dépendant et ils sont actifs même en absence de pancréas fonctionnel.",
          "Les insulines lentes sont des analogues \"sans pic\", et elles ont moins de risque d'hypoglycémie."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Analogues d’insuline : </p><p>Insulines issues de génie génétique dont la structure réfère de l’insuline humaine mais qui présente des modifications dans la structure chimique afin d’améliorer la cinétique de libération de l’insuline </p><p>Sulfamides hypoglycémiants : Diabète de type 2 non-insulinodépendant. </p>"
      },
      {
        questionText: "La relation entre les maladies parodontales et le diabète est une relation:",
        options: [
          "Bidirectionnelle : le diabète favorise l'apparition des parodontites, et les parodontites contribuent au mécanisme d'insulino-résistance.",
          "Les parodontites constituent la deuxième complication du diabète.",
          "La prévention des affections dentaires n'a aucun effet sur l'équilibre glycémique.",
          "Le processus d'ostéointégration risque d'être perturbé même chez le patient diabétique bien contrôlé."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Lors d'un traitement médico-dentaire, il y a un risque que les patients atteints d'un trouble du métabolisme du glucose présentent une décompensation métabolique, notamment une hypoglycémie qui se traite par:",
        options: [
          "L'administration de glucose lorsque le patient est inconscient, et qui sera réalisée, lentement, par voie intraveineuse.",
          "L'administration de glucagon même en cas d'hypoglycémie survenant chez les diabétiques non insulinodépendants sous sulfamides.",
          "L'administration d'une solution glucosée même si le patient perd connaissance et tombe dans un coma hypoglycémique.",
          "L'administration du glucagon par voie intramusculaire même chez les patients sous anticoagulant."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant la prise en charge odontologique des patients diabétiques:",
        options: [
          "Elle se base seulement sur l'équilibre de la glycémie à jeun",
          "Elle se base sur : Le taux d'hémoglobine glyquée HbA1c et la glycémie à jeun",
          "En cas d'HbA1c> 7.5, les actes très invasifs peuvent se faire sous couverture d'antibiotiques",
          "L'antibioprophylaxie n'est pas nécessaire pour les actes peu invasifs (carries, détartrage etc...)"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Médicaments de troubles de l’hémostase",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "les hémostatiques locaux en odontologie:",
        options: [
          "Agissent tous par une action purement mécanique;",
          "Ne sont utilisés que lors des actes de soin sans risque hémorragique;",
          "Ne sont pas inclus dans les mesures d'hémostase chirurgicale conventionnelle;",
          "Peuvent englober l'acide tranexamique en solution pour bain de bouche passif."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>A : « Les moyens locaux (éponge de gélatine, collagène, oxycellulose, fibrine, colle biologique, acide tranexamique…) agissent soit par une action mécanique, soit par une action biologique. »</strong></p><p><strong>B : doivent être utilisés lors des actes avec risque hémorragique. »</strong></p><p><strong>C : « Les moyens locaux (compression, hémostatiques, sutures) constituent les mesures d’hémostase chirurgicale conventionnelle. »</strong></p>"
      },
      {
        questionText: "Les antivitamines K (AVK): SC IMX",
        options: [
          "Sont des antiagrégants plaquettaires",
          "Sont utilisés généralement par voie injectable pour des traitements de courte durée",
          "La surveillance du traitement est basée sur le dosage régulier de l'INR",
          "Sont des médicaments à marge thérapeutique large"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A: sont des anticoagulants </p><p>B:-Utilisés par voie oral pour des traitements prolongés et la prévention de la maladie thromboembolique. </p>"
      },
      {
        questionText: "Les antiagrégants plaquettaires comme l'aspirine, clopidogrel:",
        options: [
          "Empêchent la formation du thrombus plaquettaire",
          "Inhibent l'agrégation des plaquettes en inhibant leur adhésion aux parois des vaisseaux",
          "Ils sont indiqués pour la prévention des complications thromboemboliques artérielle AVC TOM",
          "Toutes les propositions précédentes sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78e5e601-1be0-11f0-a4a7-960004386930/qhbn2jufxDEfjDNGmoAF.png\"></p>"
      },
      {
        questionText: "Parmi les affirmations suivantes concernant l'attitude thérapeutique à adopter en odontologie, laquelle est vraie :",
        options: [
          "Chez les patients sous différents traitements anticoagulants, l'arrêt de ce traitement est systématique avant toute chirurgie",
          "La décision de prendre en charge un patient sous traitements anticoagulants en ville ou dans une structure hospitalière doit être prise selon le risque hémorragique de l'acte chirurgical",
          "La prise en charge d'un patient porteur d'une anomalie congénitale de l'hémostase comme l'hémophilie n'impose aucune mesure particulière",
          "Un INR est nécessaire avant toute extraction chez un patient sous anticoagulants oraux directs"
        ],
        correctOptionIndexes: [1],
        explanation: "<p> A:Chez les patients sous différents traitements anticoagulants l’arrêt n’est pas systématique (selon le type de chirurgie) et la décision de l’arrêt partiel ou total avant une chirurgie doit être prise en concertation avec le médecin traitant. </p><p>D : Un INR est nécessaire avant toute extraction chez un patient sous AVK </p>"
      },
      {
        questionText: "Les antiagrégants plaquettaires sont indiqués dans:",
        options: [
          "Le traitement des complications thromboemboliques artérielles",
          "La prévention des thromboses veineuses profondes",
          "La prévention des complications thromboembolique artérielles",
          "Aucune réponse n'est correcte"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Quand un patient sous antivitamines K (AVK) vient en cabinet, le chirurgien-dentiste doit vérifier:",
        options: [
          "Le taux de plaquettes",
          "Son état d'hémostase par la mesure de l'international normalized ration (INR)",
          "Son état d'hémostase par la mesure du temps de céphaline activé (TCA)",
          "Sa numération formule sanguine (NFS)"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Chez une femme enceinte ayant un risque de thrombose, quel anti thrombotique peut-être utilisé:",
        options: [
          "Acénocoumarol (Sintrom)",
          "Héparine sodique",
          "Clopidogrel",
          "Warfarine"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Le Clopidogrel est un:",
        options: [
          "Inhibiteur des cyclo-oxygénases",
          "Inhibiteur de l'agrégation à l'ADP",
          "Inhibiteur de GP Ilb/Illa",
          "Intervenant au niveau de l'hémostase secondaire"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Le clopidogrel est une prodrogue dont l'un des métabolites est un inhibiteur de l'agrégation plaquettaire </p>"
      },
      {
        questionText: "Les Anti Vitamine K (AVK):",
        options: [
          "Interagissent avec le processus de réduction de la vitamine K oxydée",
          "Possèdent une action sur les facteurs circulants",
          "Peuvent être utilisés, en cas de nécessité tout au long de la grossesse",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Les antivitamines K: diminuent la synthèse des facteurs de la coagulation</p>"
      },
      {
        questionText: "Parmi les propositions concernant les anticoagulants, lesquelles sont exactes:",
        options: [
          "Ils sont indiqués dans la prévention des événements thromboemboliques veineux",
          "Les héparines inhibent la synthèse de la thrombine",
          "Les antivitamines K (AVK) sont contre-indiquées en cas de grossesse",
          "Le rivaroxaban inhibe la voie du thromboxane A2 (TXA2)"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Traitement préventif : Thromboses veineuses profondes en chirurgie viscérale ou orthopédiques. </p><p>Traitement curatif :-Embolie pulmonaire non grave.-Angor instable. </p><p>B : Potentialisation de l’action inhibitrice de l’Antithrombine </p>"
      },
      {
        questionText: "Quelles propositions concernant les hémostatiques, sont correctes:",
        options: [
          "L'etamsylate est préconisé en cas d'hémorragies par déficit en facteurs de coagulation",
          "L'adrénaline est indiquée dans les hémorragies post-extractionnelles",
          "La thromboplastine est un hémostatique vasculo-plaquettaire",
          "Ce sont des médicaments capables de réduire le temps de saignement"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>- L’etamsylate Il maintient l'intégrité des capillaires en diminuant leur perméabilité, ↗ la résistance vasculaire et ↗ l'adhésivité des plaquettes.. </p>"
      },
      {
        questionText: "Les anticoagulants (A.T.C.) sont :",
        options: [
          "Destinés à agissant en amont de la formation du caillot en freinant l'hémostase primaire",
          "Représentés par les héparines, antivitamines K et le clopidogrel",
          "Indiqués dans le traitement des Syndromes hémorragiques.",
          "Susceptibles d'entrainer des manifestations hémorragiques de diverses gravités"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi antiagrégants plaquettaires ont retrouvé:",
        options: [
          "Les héparines à bas poids moléculaire",
          "L'acide acétyle salicylique",
          "Les anti-vitamine K",
          "Les fibrinolytiques"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La compression intrinsèque (intra-alvéolaire) des hémorragies buccales comprend:",
        options: [
          "Les solutions hémostatiques (eau oxygénée, alcool, les vasoconstricteurs et l'acide tranexamique) et des pansements et mèches hémostatiques",
          "Techniques reposant sur la formation et la protection du caillot d'hémostase",
          "Des sutures des berges et des gouttières de compression hémostatique",
          "L'antidote de surdosage aux AVK (la vitamine K) et les anti-fibrinolytiques"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Médicaments de l’app digestif",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel médicament utilisé dans les maladies inflammatoires chroniques de l'intestin peut entraîner une hypertrophie gingivale?",
        options: [
          "Méthotrexate;",
          "Azathioprine;",
          "Ciclosporine;",
          "Sulfasalazine."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>B : « Azathioprine (AZA) Imurel® Cp 25-50 mg 2 mg/kg/j »</strong></p><p><strong>Effets indésirables :</strong></p><p><strong>• Hématologiques (anémie, leucopénie…) dose-dépendants</strong></p><p><strong>• Pancréatite (AZA, 6MP, TG)</strong></p><p><strong>• Troubles hépatiques </strong></p><p><strong>C : IR; HTA, hypertrophie gingivale... ciclosporine »</strong></p>"
      },
      {
        questionText: "Quelle manifestation buccale est fréquemment observée chez les patients atteints de maladie de Crohn?",
        options: [
          "Langue géographique;",
          "Lésions aphteuses profondes",
          "Candidose pseudomembraneuse;",
          "Lichen plan buccal."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>Pathologie inflammatoire chronique de l’intestin (MICI). Caractérisées par des ulcérations chroniques récurrentes de différents segments duTD (de la bouche à l’anus).</strong></p><p><strong>▪ Plan clinique:</strong></p><p><strong>Evolue en Poussée/Rémission.</strong></p><p><strong>Symptômes digestifs et extradigestifs (articulaires 25% et Cutanéomuqueux 15% ulcères aphteux de la bouche 8%...)</strong></p>"
      },
      {
        questionText: "Quel effet indésirable buccal peut être associé à la prise prolongée d'inhibiteurs de la pompe à protons (IPP)?",
        options: [
          "Hypersalivation;",
          "Xérostomie",
          "Hyperplasie gingivale",
          "Pigmentation dentaire"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>« Les inhibiteurs de la pompe à protons (IPP)… peuvent entraîner une xérostomie lors d’un traitement prolongé. »</strong></p><p><strong>C : plutôt ciclosporine, nifédipine, phénytoïne.</strong></p><p><strong>D : plutôt tétracyclines</strong></p>"
      },
      {
        questionText: "Parmi les pathologies digestives suivantes la quelle peut entrainer une érosion de l'émail dentaire ?",
        options: [
          "La diarrhée",
          "La constipation",
          "La maladie de Crohn",
          "Le reflux gastroesophagien"
        ],
        correctOptionIndexes: [3],
        explanation: "<p> La principale manifestation buccale du reflux acide causé par des affections telles que le reflux gastro-œsophagien (RGO) pathologique et la hernie hiatale est l’érosion de l’émail dentaire.</p>"
      },
      {
        questionText: "Parmi les molécules pouvant être utilisées dans le traitement de la maladie de Crohn la quelle a un impact odontologique en entrainant une hypertrophie gingivale ?",
        options: [
          "Infliximab",
          "Ciclosporine",
          "Vedolizumab",
          "Ustékinumab"
        ],
        correctOptionIndexes: [1],
        explanation: "<p><img src=\"https://medspacedz.com/client/data/qimages/78e60add-1be0-11f0-a4a7-960004386930/c38ER44Vx6Ev6idtvrrg.png\"></p>"
      },
      {
        questionText: "Parmi les molécules suivantes, utilisées dans le traitement du reflux gastroesophagien la quelle pourrait induire une xérostomie?",
        options: [
          "Oméprazole",
          "Nizatidine",
          "Famotidine",
          "Hydroxydes d'aluminium et de magnésium"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les médicaments neutralisants gastriques ont une influence sur:",
        options: [
          "La distribution des médicaments au niveau des tissus inflammatoires",
          "L'absorption gastrique des médicaments bases faible par augmentation du pH",
          "L'effet antalgique du paracétamol",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Interactions médicamenteuses des Neutralisants gastriques [prise 1 h après le repas; seconde prise 3 h après le repas] </p><p>diminution de l'absorption de nb médicaments par formation de complexes (antibiotiques: tétracyclines, …) → dissocier les prises modification du pH gastrique peut modifier l'absorption de médicaments (antifongiques azolés) alcalinisation de l'urine peut moduler l'élimination de médicaments (salicylés) </p>"
      },
      {
        questionText: "Quelles est la pathologie gastroduodénale que le médecin dentiste peut diagnostiquer suit au diagnostic de l'érosion dentaire:",
        options: [
          "L'ulcère gastrique",
          "Le reflux gastro-œsophagien",
          "La constipation",
          "La diarrhée."
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Les dentistes sont souvent les premiers professionnels de la santé à diagnostiquer une maladie systémique par l’observation de ses manifestations buccales. Une de ces affections est le reflux gastro-œsophagien pathologique (RGOP) qui peut être décelé à la présence de l’érosion dentaire.</p>"
      },
      {
        questionText: "Les pansements digestifs pris simultanément avec d'autres médicaments par voie orale",
        options: [
          "Améliorent leur absorption digestive.",
          "Peuvent conduire à leur inefficacité.",
          "Augmentent leur dégradation.",
          "Accélèrent leur excrétion rénale."
        ],
        correctOptionIndexes: [1],
        explanation: "<p>↘ l’absorption d’autres mdts pris par VO administrés simultanément.</p>"
      },
      {
        questionText: "Les inhibiteurs de la pompe à proton (IPP):",
        options: [
          "Ne sont utilisés que dans le traitement de l'ulcère gastro-duodénal.",
          "Ne peuvent être utilisés dans la prévention de l'ulcère induit par les AINS.",
          "Agissent par inhibition réversible de la pompe à proton de la lumière pariétale des cellules de la muqueuse gastrique",
          "Peuvent inhiber le métabolisme hépatique de certains médicaments le système du Cytp450"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Quelle est la conséquence de l'association des AINS et des inhibiteurs de l'enzyme de conversion:",
        options: [
          "Augmentation de l'effet des AINS jusqu'à la toxicité",
          "Risque d'aggravation des effets indésirables digestifs",
          "Risque d'une insuffisance rénale",
          "Diminution de l'effet antihypertenseur par rétention hydro-sodée"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les médicaments indiqués en gastrologie:",
        options: [
          "Les pansements digestifs peuvent diminuer l'absorption d'autres médicaments administrés simultanément par voie orale",
          "Les inhibiteurs de pompe à proton peuvent induire une alcalinisation de l'urine ce qui peut moduler l'élimination de certains médicaments (salicylés)",
          "Les IPP et les anti-H2 sont des inducteurs enzymatiques du CYP450 et ceci est à l'origine d'interactions médicamenteuses avec les médicaments métabolisés par ces enzymes",
          "Toutes les réponses sont fausses."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La conduite à tenir lors de diagnostic de RGOP notamment par la présence d'érosion dentaire consiste en un:",
        options: [
          "Traitement symptomatique à base d'antiacides et topiques gastro- intestinaux",
          "Traitement curatif à base d'antiacide",
          "Traitement symptomatique à base d'antiémétiques",
          "Traitement à base d'enzymes pancréatiques"
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Lors de diagnostique de RGOP → traitement symptomatique (antiacide, topique gastro-intestinaux) + revoie chez gastro-entérologue</p>"
      },
      {
        questionText: "L'ulcère gastroduodénal (UGD) peut être traité par les:",
        options: [
          "Anti-histaminiques H2 (Ranitidine)",
          "Inhibiteurs de pompe à proton IPP (Omeprazole)",
          "Antagonistes sérotoninergiques (Sétrons)",
          "Analogues de prostaglandine (Misoprostol)"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "Patient souffrant d’insuffisance rénale chronique",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Parmi les propositions suivantes, laquelle est exacte concernant l'adaptation posologique chez un patient insuffisant rénal chronique IRC?",
        options: [
          "Elle consiste à prescrire systématiquement la moitié de la dose standard;",
          "Elle a pour objectif de majorer la dose pour compenser la diminution de l'élimination;",
          "Elle ne concerne que les médicaments dont la dose est administrée en une seule prise;",
          "Aucune réponse n'est juste."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong>Qu’est-ce que l’adaptation de la posologie ?</strong></p><p><strong>Elle consiste à adapter la prescription à l’état du patient au lieu d’appliquer les doses standard.</strong></p><p><strong>Cette adaptation peut se faire soit en :</strong></p><p><strong>• réduisant les doses journalières ou</strong></p><p><strong>• espaçant les prises</strong></p><p><strong>• ou de faire les deux. »</strong></p>"
      },
      {
        questionText: "Concernant l'utilisation des anti-inflammatoires non stéroïdiens (AINS) chez un patient IRC:",
        options: [
          "Ce sont les antalgiques de choix à utiliser chez le patient souffrant d'une maladie rénale chronique ;",
          "Ils sont dépourvus de toute toxicité rénale:",
          "Leur utilisation permet de ralentir la progression de l'insuffisance rénale;",
          "Il est impératif de ne pas les utiliser pour une durée supérieure à 5 jours."
        ],
        correctOptionIndexes: [3],
        explanation: "<p><strong> « Les AINS ne nécessitent pas d’adaptation de posologie en cas d’IRC néanmoins c’est des médicaments néphrotoxiques surtout chez les patients dont la fonction rénale est altérée, il est recommandé de ne pas les prescrire chez ces patients pour des durées de traitement longues.</strong></p><p><strong>En odontologie, il faudra les utiliser pour une durée de 3 à 5 jours. »</strong></p><p><strong>﻿</strong></p>"
      },
      {
        questionText: "Concernant les interactions médicamenteuses en odontologie :",
        options: [
          "Les AINS aggravent la bradycardie induite par les bêtabloquants",
          "L'association AINS/IEC peut provoquer une insuffisance rénale aigue",
          "Les corticoïdes en association avec les diurétiques de l'anse provoquent une hyperkaliémie",
          "Les anesthésiques locaux adrénalinés sont référés en association avec les bêtabloquant"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'adaptation de la posologie des médicaments chez le patient insuffisant rénal chronique IRC:",
        options: [
          "Elle ne concerne que les insuffisants rénaux à partir du stade 3",
          "Elle peut se faire en diminuant la dose journalière",
          "Elle peut se faire en rapprochant les prises",
          "Toutes les réponses sont juste"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>C elle peut se faire en espacant les prises  </p>"
      },
      {
        questionText: "Parmi les facteurs suivants lequel va influencer le fait d'adapter la posologie chez le patient IRC:",
        options: [
          "La forme pharmaceutique du médicament",
          "La néphrotoxicité du médicament",
          "Le fait que le médicament est inhibiteur ou inducteur enzymatique du CYP450",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'utilisation du tramadol chez le patient IRC:",
        options: [
          "Pas de précautions particulières car le tramadol est métabolisé et éliminé par le foie",
          "Le tramadol est formellement contre indique en cas d'IRC",
          "La demie vie d'élimination du tramadol et de ses métabolites actifs doublent à partir du stade 3 d'IRC d'où la nécessité d'adapter la posologie à partir de ce stade",
          "Le tramadol entraine une rétention hydrosodée nécessitant des précautions d'emploi chez l'IRC"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>A:La molécule et ses métabolites actifs sont principalement éliminés par voie rénale, leurs demie vie d’élimination doublent à partir du stade 3 d’IRC : risque de surdosage ( dépression respiratoire) </p><p>B:prolonger l’intervalle thérapeutique </p><p>C:<img src=\"https://medspacedz.com/client/data/qimages/78e63352-1be0-11f0-a4a7-960004386930/UwZHD8uXgbPRkd96sspt.png\"></p>"
      },
      {
        questionText: "Concernant l'adaptation de la posologie des médicaments chez l'insuffisant rénal:",
        options: [
          "Il y a un risque d'accumulation des médicaments éliminés par voie rénale",
          "Elle peut se faire en réduisant la dose journalière",
          "Elle peut se faire en espaçant les prises",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>Cette adaptation peut se faire soit en ;réduisant les doses journalières ou espaçant les prises ou de faire les deux. </p>"
      },
      {
        questionText: "Concernant l'utilisation des AINS chez l'insuffisant rénal chronique( RF ):",
        options: [
          "Les AINS ne nécessitent pas d'adaptation de la posologie en cas d'altération de la fonction rénale",
          "Ils entrainent une rétention hydrosodée",
          "Ce sont des médicaments nephrotoxiques, il ne faudra pas les utiliser sur une longue durée",
          "En odontologie, il ne faudra pas dépasser de 3 à 5jours de traitement"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'utilisation des antibiotiques chez l'insuffisant rénal chronique:",
        options: [
          "Le temps de demi-vie d'élimination de l'amoxicilline est augmenté en cas d'insuffisance rénal chronique car elle est éliminée principalement par voie rénal",
          "Les métabolites toxiques de l'azithromycine sont éliminés par voie rénal d'où la nécessité d'adapter la posologie en cas d'insuffisance rénale chronique",
          "Le temps de demi-vie d'élimination de spiramycine est augmenté en cas d'insuffisance rénale chronique car elle est éliminée principalement par voie rénale",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'utilisation des antalgiques chez l'insuffisance rénal chronique",
        options: [
          "Le tramadol ne nécessite aucune adaptation de la posologie quel que soit le stade d'insuffisance rénale",
          "La codéine est l'antalgique de choix à donner en cas d'insuffisance rénale chronique",
          "Le temps de demi-vie d'élimination du paracétamol triple lors de l'insuffisance rénale chronique voilà pourquoi il ne faut pas dépasser 1g/)",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>paracétamol : ne nécessite pas d’adaptation de posologie si IRC car métabolisme hépatique et élimination biliaire sans dépasser 3g/ </p>"
      },
      {
        questionText: "Parmi ces facteurs pharmacocinétiques et biologiques, quel est celui qui ne guidera pas la décision d'adaptation posologique chez l'insuffisant rénal:",
        options: [
          "La durée de la demi-vie du médicament chez le sujet normorénal",
          "Le volume de distribution du médicament chez le sujet normorénal",
          "La C.M.I. de l'antibiotique prescrit",
          "La clairance en creatinine"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant la prescription de codéine chez l'insuffisant rénal:",
        options: [
          "Ne nécessite pas d'adaptation de la posologie.",
          "Est une contre-indication.",
          "Une simple surveillance est conseillée.",
          "Nécessite une adaptation en fonction des taux sériques de son métabolite M6G (morphine-6-glucuronide)."
        ],
        correctOptionIndexes: [2],
        explanation: "<p>La codéine est transformée en morphine via le CYP2D6, et la demi‑vie de la morphine peut quadrupler en cas d’IRC stade 3.</p><p>Du fait de cette variabilité et du risque d’accumulation, la codéine expose à des effets imprévisibles chez les insuffisants rénaux.</p><p>Il est donc préférable de l’éviter ou d’adapter la posologie en fonction des métabolites actifs.</p>"
      },
      {
        questionText: "La posologie requise de l'amoxicilline après adaptation chez un insuffisant rénal sévère (clairance en créatinine de 29 à 10 ml/mn) est de:",
        options: [
          "2 g/24h",
          "g/24h",
          "1.25 g/24h",
          "750 mg/24h"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Chez un sujet présentant une insuffisance rénale:",
        options: [
          "La Doxycycline présente un allongement de sa demi-vie",
          "L'amoxicilline induira une néphrotoxicité élevée",
          "Les macrolides nécessitent une adaptation posologique",
          "Le Métronidazole présente une accélération de son élimination rénale"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>Amoxicilline : modérément néphrotoxique </p>"
      },
      {
        questionText: "Chez le sujet insuffisant rénal:",
        options: [
          "L'amoxicilline est modérément néphro-toxique",
          "Les macrolides nécessitent une adaptation posologique",
          "Le Métronidazole présente un phénomène d'accumulation (retard d'élimination rénale)",
          "La demi-vie de la doxycycline est raccourcie."
        ],
        correctOptionIndexes: [0],
        explanation: "<p>Les macrolides et apparentés Clindamycine : métabolisme hépatique et élimination principalement , sans accumulation si IRC 🢧 aucune adaptation posologique n’est indiquée en cas d’IR.</p>"
      }
    ]
  },
  {
    title: "médicaments de l’appareil respiratoire",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Un malade atteint de tuberculose pulmonaire se présente à vous pour des soins dentaires, quel(s) est le comportement à adopter dans votre prise en charge :",
        options: [
          "Le prendre en charge come tout autre malade avec les mêmes exigences professionnels cliniques;",
          "Utiliser les équipements de soins conventionnels;",
          "Demander l'état de contagiosité du malade pour décider de la prise en charge;",
          "Ne prendre en charge que les patient qui sont sous antituberculeux."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>Demander l’avis du médecin traitant qui va définir le degré de contagion du malade, s’il est jugé contagieux des précautions s’imposent :</strong></p><p><strong>– port des gants, masque, lunettes et casque de protection ;</strong></p><p><strong>– utilisation réduite des instruments rotatifs et sprays ;</strong></p><p><strong>– instruments à usage unique de préférence ;</strong></p><p><strong>– vaccination du personnel. </strong></p>"
      },
      {
        questionText: "Dans les cas d'asthme; quel est le stade ou type représentant une contre-indication absolue pour un acte chirurgical :",
        options: [
          "Asthme instable;",
          "Le stade 2;",
          "Le stade 1 ;",
          "Aucune réponse n'est juste."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>« L’asthme instable : constitue une réelle contre-indication à toute chirurgie buccale.</strong></p><p><strong>L’asthme de stade 4 : chirurgie exclusivement en milieu hospitalier afin de faire face à une crise sévère éventuelle. »</strong></p>"
      },
      {
        questionText: "Une anesthésie chez un asthmatique doit être :",
        options: [
          "Avec une intubation quel que soit son type, local ou général ;",
          "Faite par voie locale;",
          "Faite dans un milieu hospitalier exclusivement;",
          "Faite par voie générale obligatoirement"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>«<strong> Préférer l’anesthésie locale ou locorégionale à l’anesthésie générale avec intubation → ↓ risque de bronchospasme. »﻿</strong></p>"
      },
      {
        questionText: "La corticothérapie en préopératoire chez un asthmatique préconise:",
        options: [
          "Le Prédnisolone sans sulfites;",
          "La Bétaméthasone sans sulfite;",
          "La corticothérapie d'urgence avec le Bètaméthasone:",
          "Tous les corticoïdes sans exceptions."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>« Corticothérapie courte en préopératoire : une molécule sans sulfites comme la prednisolone (Solupred) est privilégiée et éliminer la bêtaméthasone (Célestène) renfermant des sulfites.</strong></p><p><strong>B : la bétaméthasone contient des sulfites</strong></p><p><strong>C : Corticothérapie d’urgence : pour les mêmes raisons, la méthylprednisolone (Solumédrol) est préférée à la dexaméthasone (Soludécadron) contenant des sulfites. »</strong></p>"
      },
      {
        questionText: "Lors de la prise en charge d'un patient asthmatique dans votre cabinet dentaire, quelle est l'action prioritaire s'il présente une crise d'asthme pendant le geste de soin :",
        options: [
          "Appeler le médecin traitant",
          "Evacuation vers un service hospitalier",
          "Administration de son bronchodilatateur",
          "Attendre que la crise d'asthme passe"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Administrer 1 double bouffée de B2-adrénergique en spray : </p><p>—salbutamol (Ventoline) ; </p><p>—terbutaline (Bricanyl) </p>"
      },
      {
        questionText: "Si un patient atteint de tuberculose pulmonaire se présente pour des soins dentaire, quelle est la précaution majeure à respecter:",
        options: [
          "Ne pas le traiter jusqu'à sa guérison",
          "Commencer par se protéger et protéger l'environnement de soin pour éviter toute contamination",
          "Demander l'état de contagiosité du patient",
          "Utiliser les instruments de rotation les plus performants et les stériliser juste après leur utilisation"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>C; Demander l’avis du médecin traitant qui va définir le degré de contagion du malade, </p><p>D ;-Utiliser des instruments À usage unique de préférence </p>"
      },
      {
        questionText: "Parmi les composants des médicaments suivants utilisés lors de l'anesthésie d'un asthmatique, quels sont ceux qui sont contre-indiqués :",
        options: [
          "Les produits contenant les anti-inflammatoires stéroïdiens",
          "Les excipients de la famille des parabènes et sulfites",
          "L'adrénaline et les anticholériques",
          "Tous les anti-inflammatoires et tous les sympathomimétiques"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>-Excipients allergisants : </p><p>Les parabens : rôle bactériostatique et antifongique : contre indiqué chez le patient asthmatique </p>"
      },
      {
        questionText: "Parmi les médicaments suivants lequel pourrait aggraver la sécheresse buccale ?",
        options: [
          "L'ipratropium",
          "La phénylephrine",
          "Le salbutamol",
          "L'adrénaline"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les risques nécessitant des précautions à prendre par le médecin dentiste chez les patients déjà sous corticothérapie ne concernent pas :",
        options: [
          "Le risque ulcérogène",
          "Le risque hémorragique",
          "Le risque bronchospastique",
          "Le risque infectieux local et général"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Dans les pathologies respiratoires d'origine inflammatoire le médecin dentiste doit:",
        options: [
          "Demander un bilan médical préopératoire avant tout geste chirurgical",
          "Procéder au geste chirurgical sans aucune précaution particulière",
          "Procéder au geste chirurgicale même en période de crise",
          "Aucune réponse n'est juste"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant l'anesthésie chez un patient asthmatique:",
        options: [
          "Om préfère l'anesthésie général à locorégionale",
          "L'anesthésie général peut provoquer un bronchospasme",
          "Les parabènes bactériostatiques et antifongiques sont sans danger",
          "Les sulfites antioxydants et conservateurs sont contre-indiqués pour leurs effets sédatifs"
        ],
        correctOptionIndexes: [1],
        explanation: "<p>-Préférer l’anesthésie locale ou locorégionale à l’anesthésie généraleavec intubation </p><p>→↓ risque bronchospasme. </p>"
      },
      {
        questionText: "Le salbutamol (ventoline):",
        options: [
          "Est un anti inflammatoire stéroïdien",
          "Est utilisé dans le traitement de la crise d'asthme par voie orale chez l'adulte",
          "Peut être utilisé dans le traitement de la crise d'asthme par voie souscutanée",
          "Peut être utilisé dans le traitement de fond de l'asthme par voie inhalée"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les médicaments suivants, quel(s) est (sont) celui (ceux) qui peut (vent) être prescrit(s) sans danger à un patient asthmatique",
        options: [
          "Codéine",
          "Ibuprofène",
          "Paracétamol",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi ces propositions concernant les médicaments de l'appareil respiratoire une seule est fausse, laquelle",
        options: [
          "Les corticostéroïdes inhalés provoquent des candidoses oropharyngées",
          "Les AINS diminuent le risque d'ulcération et d'hémorragie gastro- intestinale induite par corticoïdes",
          "Corticoïdes systémiques entrainement une diminution de la densité osseuse et un retard de cicatrisation",
          "L'usage des anesthésiques avec vasoconstricteurs contenant des sulfites est conte indiqué chez les asthmatiques cortico-dépendants"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi les médicaments suivants, quel(s) est (sont) celui (ceux) qui peut (vent) être prescrit(s) sans danger à un patient asthmatique:",
        options: [
          "Codéine",
          "Ibuprofène",
          "Spiramycine",
          "Paracétamol"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Parmi la (les) situation(s) clinique(s) suivante(s), quelle(s) est(sont) celle(s) qui contre indique (ent) des soins dentaires:",
        options: [
          "Patient se présentant avec une angine à staphylocoque",
          "Patient atteint d'asthme instable",
          "Patient attient de sarcoïdose",
          "Patient ayant fait une crise d'asthme une heure avant son arrivée au cabinet dentaire"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      }
    ]
  },
  {
    title: "URGENCE / VITAMINE ET HORMONE",
    subject: "pharmacologie",
    questions: [
      {
        questionText: "Quel médicament peut être utilisé pour prévenir un malaise vagal chez un adulte anxieux ?",
        options: [
          "Paracétamol;",
          "Diazepam;",
          "Hydroxyzine;",
          "Loratadine."
        ],
        correctOptionIndexes: [2],
        explanation: "<p><strong>Prévention :</strong></p><p><strong>• Programmer les patients à risque le matin…</strong></p><p><strong>• Rassurer le patient et expliquer toutes les étapes du traitement.</strong></p><p><strong>• Privilégier des séances de courte durée.</strong></p><p><strong>• Hydroxyzine 100 à 200 mg/J (adulte) max 1 mg/kg/J enfant 6-15 ans</strong></p>"
      },
      {
        questionText: "Parmi les mesures ci-dessous, laquelle contribue à prévenir un malaise vagal chez un patient anxieux au cabinet dentaire ?",
        options: [
          "Programmer les soins le matin ;",
          "Retarder les soins en fin de journée:",
          "Augmenter la durée de la séance pour rassurer le patient;",
          "Éviter toute explication du traitement pour ne pas inquiéter le patient."
        ],
        correctOptionIndexes: [0],
        explanation: "<p><strong>B : Programmer les patients à risque le matin pour éviter le stress de l’attente et la fatigue.</strong></p><p><strong>C : Privilégier des séances de courte durée.</strong></p><p><strong>D : Rassurer le patient et expliquer toutes les étapes de traitement.</strong></p>"
      },
      {
        questionText: "Quel médicament est recommandé en première intention pour traiter une réaction anaphylactique aiguë au cabinet dentaire ?",
        options: [
          "Diphenhydramine;",
          "Adrénaline (épinephrine);",
          "Salbutamol;",
          "Loratadine."
        ],
        correctOptionIndexes: [1],
        explanation: "<p><strong>B : Programmer les patients à risque le matin pour éviter le stress de l’attente et la fatigue.</strong></p><p><strong>C : Privilégier des séances de courte durée.</strong></p><p><strong>D : Rassurer le patient et expliquer toutes les étapes de traitement.</strong></p>"
      },
      {
        questionText: "Le malaise hypoglycémique (chez le patient) au cabinet dentaire :",
        options: [
          "Est une urgence médicale où l'appel au Service d'Aide Médicale Urgente (SAMU) est systématique",
          "N'est pas une urgence médicale",
          "Est une urgence médicale ne nécessitant pas un appel au SAMU",
          "Toutes les propositions ci-dessus sont fausses"
        ],
        correctOptionIndexes: [3],
        explanation: "<p>Urgences susceptibles de nécessiter l’interventiondu SAMU </p><p>Malaise hypoglycémique. </p><p>Crise d’asthme/Convulsive/Hypertensive </p><p>Urgences allergiques </p>"
      },
      {
        questionText: "L'appel au Service d'Aide Médicale Urgente (SAMU) est systématique en cas de :",
        options: [
          "Crise hypertensive",
          "Crise convulsive",
          "Syndrome coronarien aigu",
          "Crise d'asthme"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>Urgences où l’appel au SAMU est systématique </p><p>Syncope. </p><p>Syndrome coronarien aigue </p><p>Arrêt cardiaque </p>"
      },
      {
        questionText: "En cas de crise de spasmophilie :",
        options: [
          "le médecin dentiste pourra poursuivre les soins",
          "Le médecin dentiste devra allonger le patient en position latérale de sécurité (PLS)",
          "Il faudra faire respirer le patient dans un sac en papier afin de contrôler sa respiration",
          "Toutes les propositions sont justes"
        ],
        correctOptionIndexes: [2],
        explanation: "<p>onduite à tenir - Arrêter immédiatement les soins dentaires en cours; - Isoler le patient en position semi-assise, le rassurer et libérer ses voies aériennes  supérieures; - Obtenir un contrôle de sa respiration : faire respirer le patient dans un sac en papier (Augmentation CO2 et réduction des contractions musculaires); - Si crise persistante : Appeler le service des secours et médiquer le patient par injection de 10 à 15 mg de Diazépam en IV. - Reprendre les soins si le patient est rassuré.</p>"
      },
      {
        questionText: "La prise en charge thérapeutique du choc anaphylactique aigu se fait par :",
        options: [
          "L'adrénaline par voie injectable",
          "L'atropine par voie injectable",
          "Les corticoïdes par voie orale",
          "Réponse a+c"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Lorsqu' un patient fait un malaise au cabinet dentaire(RF ) :",
        options: [
          "La ventilation est préconisée en première intention quelque soit le type de malaise",
          "L'insuline est administrée en cas d'un malaise hypoglycémique chez un diabétique",
          "Le malaise vagal peut être maitrisé en faisant respirer au patient un air enrichi en CO2",
          "L'atropine peut être administrée par voie sous-cutanée en cas de syncope"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "En cas d'hypertension artérielle paroxystique au cabinet dentaire:",
        options: [
          "Une administration sublinguale de trinitrine est nécessaire",
          "Une administration sublinguale de nifedipine est nécessaire",
          "Une administration d'adrénaline par voie sous cutanée est préconisée",
          "Toutes les réponses précédentes sont fausses."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Lorsqu'un patient fait un malaise au niveau cabinet dentaire:",
        options: [
          "La ventilation est préconisée en première intention quelque soit le type de malaise",
          "L'insuline est administrée en cas d'un malaise hypoglycémique chez un diabétique",
          "Le malaise vagal peut être pris en charge en faisant respirer au patient un air enrichi en CO2",
          "L'atropine peut être administré par voie sous-cutanée an cas de bradycardie lors de la syncope"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Si un patient présente des douleurs thoraciques au cabinet dentaire :",
        options: [
          "Un diagnostic d'angor est directement posé",
          "Un massage cardiaque est préconisé",
          "L'administration de trinitrine en sublinguale est préconisée si le diagnostic de l'angor est posé",
          "La trinitrine est utilisée pour augmenté la fréquence cardiaque"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "En cas de choc anaphylactique quel est le médicament à ne pas injecter",
        options: [
          "L'adrénaline",
          "L'atropine",
          "Un corticoide",
          "Un antihistaminique"
        ],
        correctOptionIndexes: [1],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les médecins-dentistes doivent être capables de prendre en charge une situation d'urgence survenant dans leur cabinet. Par conséquent, il est obligatoire de posséder des médicaments d'urgence comme",
        options: [
          "Atropine. La trinitrine, Epinéphrine (adrénaline)",
          "Paracétamol injectable",
          "Antiémétique",
          "Ibuprofène"
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Concernant les urgences au cabinet dentaire, on peut utiliser",
        options: [
          "La trinitrine pour soulager une crise d'angor même chez un patient ayant une pression artérielle systolique inférieur à 100 mmHg",
          "La voie intramusculaire chez les patients sous anticoagulant ou ayant des troubles de la coagulation",
          "L'atropine lors d'un arrêt ventilatoire (le patient ne respire plus)",
          "Le salbutamol qui a une action immédiate pour soulager une crise d'asthme simple et la terbutaline si l'asthme est aigu et grave"
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les antithyroïdiens de synthèse, comme le Méthimazole",
        options: [
          "Sont utilisés dans le traitement des hypothyroïdies.",
          "Peuvent donner comme effets indésirables des hépatites",
          "Ont comme effet indésirable l'agranulocytose qui se manifeste principalement par des ulcérations buccales, et les lésions gingivales et palatines couvertes d'une membrane grisâtre.",
          "Dans le cas d'apparition de ces ulcérations et lésions il faut immédiatement alerter le médecin traitant sans procéder à un traitement local comme le nettoyage des lésions nécrotiques à l'eau oxygénée."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "La carence en acide folique ou la vitamine B9 peut se traduire par",
        options: [
          "Le rachitisme",
          "L'ostéomalacie",
          "Des Anémies macrocytaires ou mégaloblastique.",
          "Le scorbut"
        ],
        correctOptionIndexes: [2],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Les médecins-dentistes doivent être capables de prendre en charge une situation d'urgence survenant dans leur cabinet. Par conséquent, ils sont dans l'obligation de posséder des médicaments d'urgence comme",
        options: [
          "Atropine, trinitrine, Epinéphrine (adrénaline).",
          "Paracétamol injectable.",
          "Antiémétiques.",
          "Insulines."
        ],
        correctOptionIndexes: [0],
        explanation: "I'm not sure of the answer."
      },
      {
        questionText: "Face aux états d'urgences au cabinet dentaire, on peut utiliser",
        options: [
          "La trinitrine pour soulager une crise d'angor même chez un patient ayant une pression artérielle systolique inférieur à 100 mmHg.",
          "La voie intramusculaire chez les patients sous anticoagulant ou ayant des troubles de la coagulation.",
          "L'atropine lors d'un arrêt ventilatoire (le patient ne respire plus).",
          "Le salbutamol qui a une action immédiate pour soulager une crise d'asthme simple et la terbutaline si l'asthme est aigu et grave."
        ],
        correctOptionIndexes: [3],
        explanation: "I'm not sure of the answer."
      }
    ]
  }
];

module.exports = pharmacologyQuizzes;