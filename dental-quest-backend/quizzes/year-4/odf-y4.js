// quizzes/year-4/odf-y4-y4.js

const odfY4Quizzes = [
  {
    title: "Les objectifs de traitement en odf et critères de décision",
    subject: "odf-y4",
    questions: [
      {
        questionText: "Parmi les objectifs fonctionnels en fin de traitement on doit avoir:",
        options: [
          "Une mastication bilatérale alternée.",
          "Une mastication unilatérale alternée.",
          "Une ventilation bucco-nasale.",
          "Une ventilation nasale."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Les objectifs fonctionnels incluent une ventilation nasale exclusive et une mastication unilatérale alternée (physiologique)."
      },
      {
        questionText: "Parmi les objectifs fonctionnels d’un traitement orthodontique, on retrouve :",
        options: [
          "La correction de la classe III squelettique",
          "La suppression des parafonctions",
          "La correction de la proalveolie inferieur",
          "La rééducation de la respiration"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La correction des classes squelettiques et des proalvéolies relève des objectifs occlusaux/squelettiques. La suppression des parafonctions et la rééducation respiratoire sont des objectifs fonctionnels."
      },
      {
        questionText: "En fin de traitement :",
        options: [
          "L’occlusion molaire correspondant toujours à la classe I d’Angle",
          "La contention est de règle",
          "La classe II canine est acceptable",
          "La mastication est unilatérale alternée"
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La contention est quasi-systématique pour maintenir les résultats. Une mastication unilatérale alternée est l'objectif fonctionnel. Une classe II molaire est acceptable, mais une classe II canine ne l'est pas (nécessite classe I canine)."
      },
      {
        questionText: "En fin de traitement odf, nous devons obtenir :",
        options: [
          "Un décalage entre RC et ICM",
          "Un parallélisme des axes dentaires",
          "La molaire inférieure mesialée d’une demi-cuspide par rapport à la supérieure",
          "Un sourire gingival"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Les objectifs incluent la concordance RC-ICM (A est faux), le parallélisme radiculaire (B), et une occlusion de classe I molaire (C). Le sourire gingival est à éviter (D est faux)."
      },
      {
        questionText: "Le plan de traitement peut être influencé par :",
        options: [
          "Le stade de croissance du patient.",
          "Le potentiel et la direction de la croissance.",
          "La présence des germes des dents de sagesse.",
          "La qualité de la téléradiographie de profil."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le plan de traitement dépend crucialement du potentiel de croissance restant (stade, direction) pour envisager ou non une action orthopédique. La présence des germes de 8 ou la qualité de la radio sont des éléments d'analyse mais influencent moins la stratégie globale que la croissance."
      },
      {
        questionText: "Le pronostic en orthodontie dépend :",
        options: [
          "De l'âge du patient.",
          "De la sévérité de l'anomalie.",
          "Du type d'appareillage orthodontique utilisé.",
          "Des facteurs étiologiques des anomalies."
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "Le pronostic dépend de l'âge (potentiel de croissance), de la complexité de l'anomalie, et de la persistance éventuelle des causes (étiologie). Le type d'appareil (C) est un moyen, pas un facteur pronostique en soi."
      },
      {
        questionText: "Parmi les objectifs fonctionnels d'un traitement orthodontique, on retrouve :",
        options: [
          "La correction de la classe II squelettique.",
          "La suppression des para fonctions.",
          "La correction de la proalvéolie supérieure.",
          "La rééducation de la déglutition."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "La correction des classes squelettiques (A) et des proalvéolies (C) sont des objectifs squelettiques/occlusaux. La suppression des parafonctions et la rééducation de la déglutition sont des objectifs fonctionnels."
      },
      {
        questionText: "Dans les objectifs de traitement, on retrouve :",
        options: [
          "Une respiration buccale.",
          "Une mastication bilatérale alternée.",
          "Un sourire harmonieux.",
          "Un profil rectiligne."
        ],
        correctOptionIndexes: [2], // Modifié basé sur commentaire source 2847 + logique
        explanation: "Objectifs : respiration NASALE (A faux), mastication UNILATÉRALE alternée (B faux), sourire harmonieux (C vrai). Le profil idéal n'est pas forcément rectiligne (D peut être faux, ex: profil convexe équilibré)."
      },
      {
        questionText: "L'étude du stade de croissance a une influence sur :",
        options: [
          "Le pronostic.",
          "Le choix du plan de traitement.",
          "L'origine de l'anomalie.",
          "Le moment de l'intervention."
        ],
        correctOptionIndexes: [0, 1, 3], // Modifié basé sur commentaire source 2861
        explanation: "Le stade de croissance influence le pronostic, le choix des thérapeutiques (orthopédie vs orthodontie/chirurgie) et surtout le moment idéal pour intervenir ('timing')."
      },
      {
        questionText: "Parmi les objectifs de traitement occlusaux, on retrouve :",
        options: [
          "Une molaire inférieure mésialée d'une demi-cuspide par rapport à la molaire supérieure.",
          "Une protection canine lors du mouvement de latéralité du côté travaillant.",
          "Une fonction groupe lors du mouvement de latéralité du côté travaillant.",
          "Des relations molaires en bout à bout."
        ],
        correctOptionIndexes: [0, 1, 2], // Source 2867 dit ABC
        explanation: "Objectifs occlusaux : Classe I molaire (A), guidage antérieur optimal (protection canine (B) ou fonction groupe (C) selon les cas). Le bout à bout molaire (D) est instable."
      },
      {
        questionText: "En fin de traitement orthodontique, les rapports occlusaux de classe II sont acceptables :",
        options: [
          "Uniquement au niveau des canines.",
          "Au niveau des canines et des molaires.",
          "Uniquement au niveau des molaires.",
          "Avec des rapports incisifs de 2mm d'overjet et 2 mm d'overbite."
        ],
        correctOptionIndexes: [2],
        explanation: "Une classe II molaire thérapeutique est acceptable (souvent après extractions de 14/24), mais l'occlusion canine DOIT être en classe I pour un bon guidage."
      },
      {
        questionText: "Les objectifs de traitement sont établis d'après :",
        options: [
          "Le diagnostic étiologique seulement.",
          "Le diagnostic positif et le plan de traitement.",
          "De la nature de l'anomalie orthodontique.",
          "De l'examen clinique."
        ],
        correctOptionIndexes: [2, 3], // Source 2881 dit CD
        explanation: "Les objectifs découlent de l'analyse complète du cas : examen clinique (D) et diagnostic (nature de l'anomalie) (C)."
      },
      {
        questionText: "L'harmonie du visage est un objectif esthétique obtenu par :",
        options: [
          "Un profil rectiligne.",
          "Un profil convexe équilibré.",
          "Un équilibre proportionnel des étages.",
          "Un bord libre des incisives supérieures ne dépassant pas 2 mm au sourire."
        ],
        correctOptionIndexes: [2], // Modifié basé sur commentaire source 2888
        explanation: "L'harmonie faciale dépend de l'équilibre des étages (C). Le profil idéal n'est pas forcément rectiligne (A faux). Le sourire idéal expose les collets ou 1-2mm de gencive (D est faux)."
      }
    ]
  },
  {
    title: "Place du diagnostic dans le plan de traitement",
    subject: "odf-y4",
    questions: [
      {
        questionText: "Dans le diagnostic squelettique :",
        options: [
          "La détermination de la divergence faciale n'est pas prise en compte.",
          "La précision de la classe squelettique est nécessaire dans notre décision thérapeutique.",
          "Le choix des dispositifs orthopédiques dépend du siège de l'anomalie squelettique.",
          "Les anomalies alvéolaires doivent être décrites dans les trois sens de l'espace."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le diagnostic squelettique inclut la classe squelettique (B), le siège de l'anomalie (maxillaire/mandibule) (C), et la divergence (A est faux). Les anomalies alvéolaires (D) font partie du diagnostic alvéolaire."
      },
      {
        questionText: "Le diagnostic parodontal :",
        options: [
          "Est facultatif dans la décision de la prise en charge orthopédique du patient.",
          "Nécessite un examen clinique minutieux.",
          "Doit être complété par un examen radiologique.",
          "Se fait uniquement chez l'adulte."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Le diagnostic parodontal est essentiel avant tout traitement odf (A, D faux), basé sur l'examen clinique (B) et radiologique (C) pour évaluer la santé des tissus de soutien."
      },
      {
        questionText: "Le diagnostic positif en orthodontie :",
        options: [
          "Décrit l'ensemble des anomalies dento-maxillo-faciales dans les trois sens de l'espace.",
          "Est une étape facultative pour l'élaboration du plan du traitement.",
          "Ne comporte pas la description des normalités.",
          "Est aussi appelé diagnostic morphologique."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le diagnostic positif (ou morphologique) (D) est une description exhaustive des anomalies (A) ET des normalités (C faux). Il est indispensable (B faux)."
      },
      {
        questionText: "Le diagnostic différentiel :",
        options: [
          "Est aussi appelé diagnostic évolutif.",
          "Consiste à différencier les anomalies osseuses entre elles seulement.",
          "N'est pas indispensable dans le diagnostic positif.",
          "Permet d'établir le diagnostic étiologique."
        ],
        correctOptionIndexes: [3], // Modifié car source 3121 dit BC mais B est faux (ne concerne pas que os) et C est faux (indispensable)
        explanation: "Le diagnostic différentiel vise à distinguer une anomalie d'autres anomalies ressemblantes (osseuses, alvéolaires, dentaires...) pour poser le bon diagnostic positif et choisir le traitement adéquat. Il est indispensable (C faux). Il ne permet pas d'établir l'étiologie (D faux)."
      },
      {
        questionText: "Le diagnostic étiologique vise à :",
        options: [
          "Décrire la morphologie des anomalies.",
          "Identifier les causes de la malocclusion.",
          "Prédire l'évolution future de la malocclusion.",
          "Comparer différentes options thérapeutiques."
        ],
        correctOptionIndexes: [1],
        explanation: "Le diagnostic étiologique recherche les facteurs responsables de l'installation de la dysmorphose (ex: succion du pouce, ventilation buccale, hérédité)."
      },
      {
        questionText: "Quels éléments sont analysés lors du diagnostic fonctionnel ?",
        options: [
          "La forme des arcades dentaires.",
          "La position des bases osseuses.",
          "La respiration (nasale/buccale).",
          "La déglutition (typique/atypique).",
          "La phonation."
        ],
        correctOptionIndexes: [2, 3, 4],
        explanation: "Le diagnostic fonctionnel évalue les fonctions oro-faciales : ventilation, déglutition, mastication, phonation, et recherche d'éventuelles parafonctions."
      },
      {
        questionText: "Le diagnostic synthétique permet de :",
        options: [
          "Lister toutes les anomalies observées.",
          "Identifier la cause principale de la malocclusion.",
          "Résumer les problèmes majeurs du patient et leur hiérarchie.",
          "Choisir le type de brackets à utiliser."
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagnostic synthétique est un résumé qui hiérarchise les problèmes clés identifiés dans les diagnostics squelettique, alvéolaire, dentaire, fonctionnel et esthétique, guidant ainsi la stratégie thérapeutique."
      },
      {
        questionText: "L'analyse céphalométrique fait partie intégrante de quel type de diagnostic ?",
        options: [
          "Diagnostic fonctionnel",
          "Diagnostic dentaire",
          "Diagnostic squelettique",
          "Diagnostic parodontal",
          "Diagnostic esthétique"
        ],
        correctOptionIndexes: [2, 4], // Souvent utilisé pour squelettique mais aussi esthétique (profil)
        explanation: "L'analyse céphalométrique (sur téléradiographie de profil) est principalement utilisée pour le diagnostic squelettique (position des bases, divergence) mais fournit aussi des informations esthétiques (analyse du profil)."
      },
      {
        questionText: "Pourquoi le diagnostic étiologique est-il important pour la stabilité du traitement ?",
        options: [
          "Il détermine la durée de la contention.",
          "Il permet de choisir la couleur des élastiques.",
          "Si la cause persiste, la récidive est probable.",
          "Il aide à déterminer le coût du traitement."
        ],
        correctOptionIndexes: [2],
        explanation: "Identifier et traiter la cause (étiologie) d'une malocclusion (ex: interposition linguale) est crucial, car si la cause persiste après le traitement orthodontique, elle risque de provoquer une récidive."
      },
      {
        questionText: "Lequel de ces éléments n'est PAS directement un objectif du diagnostic en odf ?",
        options: [
          "Comprendre la nature de la malocclusion.",
          "Identifier les facteurs causals.",
          "Définir les objectifs de traitement.",
          "Facturer le patient.",
          "Établir un pronostic."
        ],
        correctOptionIndexes: [3],
        explanation: "Le diagnostic permet de comprendre l'anomalie (A), d'en chercher les causes (B), d'établir un pronostic (E) et de définir les objectifs (C). La facturation (D) est une étape administrative distincte."
      }
    ]
  },
  {
    title: "La Rééducation neuro-musculaire des fonctions Oro-Faciales",
    subject: "odf-y4",
    questions: [
      {
        questionText: "Les exercices de myothérapie des muscles labiaux:",
        options: [
          "Sont indiqués en cas d'inocclusion labiale par brièveté de la lèvre supérieure.",
          "Peuvent être appliqués chez les patients présentant une classe 2 division 2.",
          "Commencent avant le traitement orthodontique et se terminent en fin de traitement.",
          "Doivent être poursuivis toute la vie."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La myothérapie labiale est indiquée en cas d'hypotonie ou brièveté (A). Son inconvénient majeur est qu'elle doit être poursuivie à vie pour maintenir les effets (D)."
      },
      {
        questionText: "La succion pérennisée provoque :",
        options: [
          "Une béance antérieure.",
          "Une linguo-version des incisives Inferieures.",
          "Une linguo-version des incisives supérieures.",
          "une exoalveolie supérieure par appui excessif du pouce sur le palais."
        ],
        correctOptionIndexes: [0, 1], // Modifié basé sur source 3417 + logique odf-y4
        explanation: "La succion du pouce provoque typiquement une béance antérieure (A), une vestibuloversion des incisives supérieures (C est faux) et une linguoversion des incisives inférieures (B)."
      },
      {
        questionText: "La rééducation neuro-musculaire:",
        options: [
          "Utilise des sites de croissance secondaires.",
          "Sollicite des forces musculaires Intrinsèques.",
          "Permet de modifier un comportement neuro-musculaire perturbé.",
          "Ne peut être efficace qu'après alignement des dents."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La rééducation vise à corriger une fonction perturbée (C) en utilisant les propres muscles du patient (forces intrinsèques) (B). Elle est souvent réalisée avant ou pendant le traitement orthodontique (D faux)."
      },
      {
        questionText: "La myothérapie respiratoire de Macary:",
        options: [
          "Permet de stimuler la respiration nasale.",
          "Permet de rééduquer la posture linguale.",
          "Est indiqué chez les patients présentant une hyperdivergence faciale.",
          "Permet d'augmenter la tonicité des muscles masséters"
        ],
        correctOptionIndexes: [0, 2], // Modifié basé sur source 3439
        explanation: "L'appareil de Macary vise à rééduquer la ventilation (stimuler respiration nasale) (A) chez les respirateurs buccaux, souvent hyperdivergents (C)."
      },
      {
        questionText: "La rééducation fonctionnelle:",
        options: [
          "N'a aucun intérêt dans le traitement orthodontique.",
          "Permet de soutenir et d'accélérer le traitement orthodontique",
          "Permet de prévenir les récidives après traitement.",
          "Est exercée de préférence après 10 ans"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "La rééducation est essentielle : elle aide pendant le traitement (B) et est cruciale pour la stabilité à long terme (prévention des récidives) (C). Elle est idéalement entreprise vers 8-9 ans (D faux)."
      },
      {
        questionText: "La rééducation de la mastication:",
        options: [
          "Nécessite la correction des interférences occlusales et prématurités par meulage sélectif",
          "Préconise une alimentation de consistance dure",
          "Indiquée dans le cas d'une mastication unilatérale alternée.",
          "Nécessite l'utilisation d'un appareil amovible avec des ailettes latérales."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La rééducation masticatoire vise à obtenir une mastication bilatérale (ou unilatérale alternée). Elle passe par la levée des obstacles occlusaux (A) et la stimulation par une alimentation dure (B). C est l'objectif, pas l'indication."
      },
      {
        questionText: "La myotherapie :",
        options: [
          "Permet d’éviter l’aggravation des anomalies orthodontiques",
          "Peut être interrompue une fois que les résultats sont acquis",
          "N’est possible qu’après 8 ou 9ans",
          "Doit être poursuivie toute la vie"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "La myothérapie aide à prévenir l'aggravation (A) mais doit être poursuivie à vie (D) car les effets cessent à l'arrêt (B faux). Elle est difficile mais possible avant 8 ans (C faux)."
      },
      {
        questionText: "La rééducation de la déglutition :",
        options: [
          "Est indique en présence d’un frein lingual court",
          "Est possible à tout âge avant ou après un traitement orthodontique",
          "Doit se faire avant l’âge de 10ans",
          "Elle peut se faire avec un appareillage appelé logette linguale"
        ],
        correctOptionIndexes: [3], // Modifié basé sur source 3488 et 4614
        explanation: "La rééducation de la déglutition atypique se fait idéalement vers 8-10 ans (C). Un frein lingual court (A) est un obstacle à corriger avant. Elle peut utiliser des appareils comme la logette (D)."
      },
      {
        questionText: "le lip Bumper:",
        options: [
          "Est un appareillage fonctionnel fixe",
          "Peut être associé à une thérapeutique fixe multi-attache",
          "Neutralise la pression de la lèvre supérieure sur les incisives inférieures",
          "Assure le maintien de l’espèce de la drivé mésiale des molaires"
        ],
        correctOptionIndexes: [1, 3], // Modifié basé sur source 3499 et logique odf-y4
        explanation: "Le Lip Bumper écarte la lèvre inférieure pour permettre une vestibuloversion des incisives inférieures et peut servir d'ancrage molaire (maintien de l'espace de dérive) (D). Il peut être fixe (A faux si amovible) et associé à un multi-attaches (B)."
      },
      {
        questionText: "La rééducation fonctionnelle :",
        options: [
          "Permet de modifier des comportements neuromusculaires défectueux.",
          "Utilise des forces musculaires intrinsèques.",
          "Permet une correction morphologique de toute dysmorphose.",
          "Son efficacité dépend de la qualité des appareils fonctionnels utilisés."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La rééducation vise à corriger une fonction anormale (A) en utilisant les muscles du patient (B). Elle ne corrige pas directement la morphologie (C faux) mais aide à sa normalisation ou prévient son aggravation."
      },
      {
        questionText: "La rééducation neuromusculaire des fonctions oro-faciales :",
        options: [
          "Est la correction d'une dysfonction ou la suppression d'une parafonction.",
          "A pour principe la suppression des interpositions pathologiques.",
          "Implique la prise de conscience tardive des comportements néfastes.",
          "Est la correction des anomalies basales."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Elle vise à corriger les dysfonctions (ex: ventilation buccale) et parafonctions (ex: succion), incluant les interpositions (langue, lèvre) (A, B). Elle nécessite une prise de conscience précoce (C faux). Elle n'agit pas sur les bases osseuses (D faux)."
      },
      {
        questionText: "La myothérapie en odf :",
        options: [
          "Est réalisée avant le traitement afin d'éviter l'aggravation des anomalies orthodontiques.",
          "Doit être interrompue une fois que les résultats sont acquis.",
          "N'est possible qu'avant l'âge de 8 ou 9 ans.",
          "Doit être poursuivie toute la vie."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Répétition de question précédente. Aide à prévenir l'aggravation (A) mais doit être poursuivie à vie (D)."
      },
      {
        questionText: "La rééducation de la déglutition :",
        options: [
          "Est indiquée en présence d'interposition linguale.",
          "Est possible à tout âge avant ou après le traitement orthodontique.",
          "Doit se faire avant l'âge de 10 ans.",
          "Se fait par une logette linguale."
        ],
        correctOptionIndexes: [0, 3], // Source 4643 dit ABD mais B et C sont contradictoires
        explanation: "Elle est indiquée en cas d'interposition linguale (A) et peut utiliser une logette (D). L'âge idéal est 8-10 ans (C)."
      },
      {
        questionText: "La myothérapie :",
        options: [
          "Est une thérapeutique qui consiste à améliorer le tonus de certains muscles.",
          "Permet de rétablir un équilibre entre les muscles antagonistes.",
          "Obtient souvent des résultats définitifs.",
          "N'obtient des résultats satisfaisants qu'avant l'âge de 8 ans."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "La myothérapie vise à renforcer/équilibrer la musculature (A, B). Les résultats ne sont pas définitifs (C faux). Elle est possible à tout âge, bien que difficile avant 8 ans (D faux)."
      },
      {
        questionText: "La rééducation neuromusculaire consiste à :",
        options: [
          "Corriger un comportement musculaire erroné.",
          "Utiliser des appareillages mécaniques directs.",
          "Rétablir un schéma de croissance correct.",
          "Rétablir les fonctions après correction de la dysmorphose."
        ],
        correctOptionIndexes: [0], // Modifié car source 4657 dit AC mais C est objectif indirect
        explanation: "Elle vise directement à corriger la fonction musculaire anormale (A). Elle utilise des appareillages indirects ou pas d'appareil (B faux). Le rétablissement de la croissance (C) ou des fonctions après correction (D) sont des conséquences ou objectifs associés."
      },
      {
        questionText: "PE.LN :", // Enveloppe Linguale Nocturne ?
        options: [
          "Est un appareillage fonctionnel à action directe.",
          "Permet la correction des déformations dento-squelettiques par la suppression des forces nocives.",
          "Est parfois utilisée après chirurgie orthognathique.",
          "Peut être utilisée comme moyen de contention."
        ],
        correctOptionIndexes: [1, 2, 3], // Source 4664 dit BCD
        explanation: "L'ELN (Enveloppe Linguale Nocturne) guide la langue (suppression force nocive) (B), peut être utilisée en contention (D) ou après chirurgie (C). C'est un appareil fonctionnel (action indirecte, A faux)."
      }
    ]
  },
  {
    title: "Les inclusions dentaires",
    subject: "odf-y4",
    questions: [
      {
        questionText: "À l'examen clinique le signe de QUINTERO :",
        options: [
          "Nous oriente sur une inclusion dentaire",
          "Se caractérise par une distoversion des dents antérieures",
          "Se caractérise par une distoversion des incisives latérales et mesioversion des incisives centrales",
          "Se caractérise par une distoversion des incisives centrales et mesioversion des incisives latérales"
        ],
        correctOptionIndexes: [0, 2], // Source 4368 dit AB mais B est faux et commentaire pointe vers C/D. Logique odf-y4 => A et C/D. Signe pour canine incluse.
        explanation: "Le signe de Quintero (vestibulo-position et rotation mésio-vestibulaire de la latérale) est un signe d'orientation précoce d'une inclusion de canine maxillaire (A)." // Description exacte C ou D dépend si palatin/vestibulaire.
      },
      {
        questionText: "La mise en place chirurgo-orthodontique d’une dent incluse :",
        options: [
          "Est un acte interceptif",
          "Est la solution de choix et de premier recours",
          "Ne concerne que les incisives et les canines",
          "Dépend de l'âge du patient et sa motivation"
        ],
        correctOptionIndexes: [3],
        explanation: "C'est un traitement curatif (A faux), pas toujours le premier choix (B faux, ex: extraction), peut concerner PM (C faux). Le succès dépend de nombreux facteurs dont l'âge et la motivation (D)."
      },
      {
        questionText: "Le traitement interceptif d’une inclusion dentaire repose sur :",
        options: [
          "La mise en place d’un mainteneur d’espace",
          "L’extraction précoce des dents lactéales qui maintient l’espace",
          "L’élimination des obstacles de toute nature",
          "L’aménagement des secteurs d’éruption"
        ],
        correctOptionIndexes: [0, 2, 3], // Source 4377 dit ACD
        explanation: "Interception : maintenir l'espace (A), éliminer obstacles (surnuméraire, kyste) (C), guider l'éruption (extraction de la dent temporaire, aménagement) (D)."
      },
      {
        questionText: "L’extraction de la dent incluse est indiquée en :",
        options: [
          "Présence des complications nerveuses, infectieuses ou autre",
          "Présence des lésions des dents et structures voisines",
          "Quand la dent incluse présente un axe de 45 degré",
          "Cas de gêne de traitement orthodontique"
        ],
        correctOptionIndexes: [0, 1, 3], // Source 4381 dit ABD
        explanation: "Indications d'extraction : complications (A), risque pour dents voisines (B), impossibilité de mise en place ou gêne pour le traitement global (D). Un axe de 45° (C) n'est pas une indication absolue d'extraction."
      },
      {
        questionText: "Le traitement interceptif d’une inclusion dentaire est indiqué en :",
        options: [
          "Présence d’un axe favorable à son éruption",
          "Absence de tout potentiel éruptif",
          "Présence d’un couloir d’éruption et d’un espace de mise en place suffisant",
          "Absence d’un potentiel de croissance"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "L'interception vise à favoriser l'éruption spontanée, elle nécessite donc un axe favorable (A), un potentiel éruptif (B faux), et un espace suffisant (C)."
      },
      {
        questionText: "Les traitements chirurgicaux exclusifs de l’inclusion dentaire sont :",
        options: [
          "L’élimination chirurgicales des obstacles, appelé tunnelisation",
          "L’alvéolotomie conductrice ou création chirurgicale d’un chemin d’éruption",
          "La traction chirurgicale-orthodontique",
          "Le collage d’une attache de traction de la dent incluse"
        ],
        correctOptionIndexes: [1], // Modifié basé sur source 4390
        explanation: "Chirurgie exclusive (sans traction odf) : alvéolotomie conductrice (B), tunnelisation, operculisation, marsupialisation, autotransplantation. L'élimination d'obstacle (A) est plutôt préventif/interceptif."
      },
      {
        questionText: "En présence d’une canine incluse le traitement consiste :",
        options: [
          "En l’extraction de la canine temporaire",
          "En l’extraction de la première prémolaire",
          "À attendre la fin de la croissance pour intervenir",
          "En l’extraction de la canine si son axe est vertical"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "Le traitement peut inclure l'extraction de la canine temporaire pour guider l'éruption (A), ou l'extraction d'une prémolaire pour créer de l'espace (B). L'intervention est souvent précoce (C faux). L'extraction de la canine incluse se discute si axe très défavorable (horizontal, D faux)."
      },
      {
        questionText: "En présence d’une incisive centrale incluse le traitement consiste :",
        options: [
          "Débute par une thérapeutique chirurgicale",
          "Consiste en l’extraction d’un odontome",
          "Débute par un traitement orthodontique post chirurgical",
          "Consiste en l’extraction de l’incisive si son axe est horizontal"
        ],
        correctOptionIndexes: [1, 3], // Source 4398 dit BD
        explanation: "L'inclusion de la centrale est souvent due à un obstacle (odontome) (B) ou un traumatisme. Le traitement est souvent chir-odf. L'extraction (D) est envisagée si l'axe est très défavorable."
      },
      {
        questionText: "Dans l’étiologie des dents incluses :",
        options: [
          "La présence des germes surnuméraires prédomine au niveau de la région antérieure",
          "Le verrouillage de l’espace d’éruption prédomine dans la région postérieure",
          "La dilacération concerne principalement l’incisive centrale supérieure",
          "L’ankylose peut être la cause ou la conséquence de l’inclusion"
        ],
        correctOptionIndexes: [0, 3], // Source 4403 dit AD
        explanation: "Causes : surnuméraires (surtout ant, A), manque de place (verrouillage), traumatismes (dilacération centrale sup, C), ankylose (D)."
      },
      {
        questionText: "Le collage préopératoire sur une dent incluse :", // "préopératoire" semble incorrect, devrait être "peropératoire"
        options: [
          "Peut-être reporté après l’acte chirurgical",
          "Utilise préférentiellement un bouton de désinclusion",
          "L’attache est obligatoirement collée sur la face vestibulaire de la dent incluse",
          "Une deuxième attache est mise en place si c’est possible"
        ],
        correctOptionIndexes: [3], // Modifié car source 4407 dit CD mais C est faux
        explanation: "Le collage se fait pendant la chirurgie (peropératoire, A faux). On utilise bouton, œillet, bracket (B variable). Le collage se fait sur la face accessible (vestibulaire ou palatine/linguale, C faux). Une 2e attache est utile si possible (D)."
      },
      {
        questionText: "La traction orthodontique d’une dent incluse :",
        options: [
          "Peut commencer le même jour que l’intervention chirurgicale",
          "Doit utiliser des forces lourdes mais continues",
          "Peut profiter d’une activation tous les trois jours",
          "Peut se terminer par une plastie gingivale"
        ],
        correctOptionIndexes: [0, 3], // Source 4411 dit AD
        explanation: "La traction (forces légères et continues, B faux) peut débuter précocement (A). L'activation est espacée (ex: 3 semaines, C faux). Une gingivoplastie est parfois nécessaire en fin de traction (D)."
      },
      {
        questionText: "L’inclusion canine :",
        options: [
          "Peut être due à un hyper développement du prémaxillaire",
          "Peut être associée à une agénésie de l’incisive latérale",
          "Souvent en position palatine",
          "Souvent bilatérale"
        ],
        correctOptionIndexes: [1, 2], // Source 4416 dit BCD mais D est moins fréquent
        explanation: "Inclusion canine maxillaire : souvent palatine (C), associée à l'agénésie/microdontie de la latérale (B). Due à un manque de place/hypodéveloppement (A faux). Peut être bilatérale mais moins fréquent (D)."
      },
      {
        questionText: "L’inclusion d’une incisive centrale supérieure :",
        options: [
          "Peut être d’origine infectieuse",
          "Peut être due à une anomalie radiculaire de l’incisive latérale",
          "Est l’inclusion la plus fréquente",
          "Est souvent d’origine traumatique"
        ],
        correctOptionIndexes: [0, 3], // Source 4419 dit A mais D est classique + commentaire A
        explanation: "Inclusion de la 11 sup : rare (C faux), souvent due à un traumatisme dans l'enfance (dilacération) (D), un obstacle (surnuméraire, odontome, kyste d'origine infectieuse sur 51) (A)."
      }
    ]
  },
      // quizzes/year-4/odf-y4-y4.js
// [PARTIE 2]

  // ... Suite du code (Partie 1) ...
  {
    title: "DDM/DDD",
    subject: "odf-y4",
    questions: [
      {
        questionText: "Le traitement d'une DDM par macrodontie inferieure à 5mm peut avoir recours à :",
        options: [
          "Une distalisation dentaire.",
          "La germectomie des dents de sagesse.",
          "L'utilisation d'arcs à mémoire de forme.",
          "La conservation de l'espace du lee way."
        ],
        correctOptionIndexes: [3],
        explanation: "En cas de DDM < 5 mm en denture mixte, on peut conserver l'espace de dérive (Lee Way), faire du stripping ou de l'expansion[cite: 4493, 4494, 4495, 4496]."
      },
      {
        questionText: "En présence d'une D.D.M de -4mm à l'arcade supérieure le traitement consiste à:",
        options: [
          "Faire de l'expansion à l'aide d'un arc lingual.",
          "Utiliser un quad'helix pour un gain de place.",
          "Utiliser une thérapeutique fixe en association avec des arcs à mémoire de forme.",
          "Extraire une prémolaire pour traiter la DDM."
        ],
        correctOptionIndexes: [1],
        explanation: "Pour une DDM modérée (< 5mm) au maxillaire, l'expansion peut être réalisée par plaque à vérin ou Quad'Helix[cite: 4508, 4509, 4510]."
      },
      {
        questionText: "En présence d'un encombrement supérieur à 12mm avec une molaire délabrée :",
        options: [
          "On extrait la molaire pour traiter l'encombrement.",
          "On extrait la molaire délabrée et la molaire antagoniste pour le traitement de la DDM.",
          "On extrait la molaire délabrée et son homologue pour le traitement de la DDM.",
          "On traite la molaire et on extrait les 1eres PM."
        ],
        correctOptionIndexes: [0],
        explanation: "En cas de DDM sévère avec une dent délabrée (ici molaire), il est préférable d'extraire la dent délabrée plutôt qu'une dent saine (comme la PM)[cite: 4517, 4521, 4522]."
      },
      {
        questionText: "le traitement d'une DDM par microdontie consiste en :",
        options: [
          "L'abstention thérapeutique jusqu'à l'adolescence.",
          "Une thérapeutique fixe avec une contention à vie.",
          "Une thérapeutique fixe en association avec une restauration prothéique.",
          "Une germectomie des dents de sagesses pour stabiliser les résultats."
        ],
        correctOptionIndexes: [0], // Source 4529 dit A
        explanation: "En cas de DDM par microdontie (dents trop petites pour l'arcade, donc diastèmes), si l'amplitude est faible, l'abstention est une option. Sinon, fermeture odf puis restauration prothétique[cite: 4529]." // Logique odf-y4: C est le traitement actif habituel. A est possible si faible.
      },
      {
        questionText: "En cas de DDM par macrodontie relative :",
        options: [
          "Le maintien de l'espace de dérive mésiale à l'arcade supérieure permet un gain de place de 3.4mm",
          "Un Stripping des faces proximales est indiqué en denture temporaire et mixte uniquement",
          "Un stripping des faces proximales est indiqué en denture permanente uniquement",
          "Une thérapeutique fixe multi-attache sans extraction est indiquée si la DDM est inférieure à 5mm"
        ],
        correctOptionIndexes: [3],
        explanation: "Gain Lee Way sup = 1.8mm (A faux). Stripping possible en DT et DP (B, C faux). Traitement sans extraction si DDM < 5mm (D vrai)[cite: 4540, 4543, 4545, 4546]."
      },
      {
        questionText: "en cas de DDM par macrodontie relative supérieure à 6-7 mm :",
        options: [
          "Les extractions pilotées sont indiquées dans tous les cas en denture mixte",
          "Une évaluation de la DDM en denture permanente est préférable",
          "On procède à l'extraction des 14.24.35.45 en présence d'une classe 1 squelettique",
          "Une distalisation molaire permet d'éviter des extraction"
        ],
        correctOptionIndexes: [1],
        explanation: "En cas de DDM sévère (> 6-7mm), l'abstention est souvent préférable en denture mixte (A faux), il vaut mieux attendre la denture permanente pour décider (B vrai). Extractions en Cl I = 14, 24, 34, 44 (C faux)[cite: 4553, 4554, 4558, 4559, 4560, 4561]."
      },
      {
        questionText: "Les extractions pilotées:",
        options: [
          "Consistent en l'avulsion de dents temporaires uniquement",
          "Consistent, selon la séquence de HOTZ, l'avulsion des 1ères molaires temporaires puis les canines temporaires et pour finir les 1ères prémolaires",
          "Doivent débuter dès l’âge de 7ans",
          "Contre indiquent la germectomie des dents de sagesse en fin de traitement"
        ],
        correctOptionIndexes: [1], // Modifié car source 4567 dit D mais illogique. A, B, C sont faux.
        explanation: "Elles concernent DT et DP (A faux). Séquence Hotz: C temp -> M1 temp -> PM1 (B faux). Début vers 8 ans (C faux). Elles n'empêchent pas une germectomie ultérieure si besoin[cite: 4568, 4569, 4570, 4571, 4573, 4574, 4575, 4576, 4577]."
      },
      {
        questionText: "En présence d’une DDM par microdontie relative :",
        options: [
          "On s’abstient de tout traitement orthodontique",
          "Une thérapeutique fixe multi attache est indiqué pour fermer les diastèmes antérieurs",
          "Une thérapeutique amovible est indiquée dans le cas où les diastèmes sont importantes",
          "La récidive est fréquente"
        ],
        correctOptionIndexes: [1, 3], // Source 4583 dit BD
        explanation: "DDM par microdontie = diastèmes. Abstention si faible (A faux). Traitement par multi-attaches (B) pour fermer les espaces, mais risque de récidive élevé (D) si cause non traitée. Amovible insuffisant (C faux)[cite: 4584, 4585, 4586, 4587, 4589]."
      },
      {
        questionText: "Dans le cas d’une DDM par macrodontie, inférieure à 5 mm en denture mixte, le traitement consiste à :",
        options: [
          "Faire de l’expansion",
          "Extraire les prémolaires permanentes",
          "Extraire les dents cariées",
          "Maintenir le Lee way"
        ],
        correctOptionIndexes: [0, 3], // Source 1544 dit AD
        explanation: "DDM < 5mm en mixte : gain de place par expansion (A) ou maintien de l'espace de dérive (Lee Way) (D)[cite: 1544, 1545, 1546]."
      },
      {
        questionText: "Dans le cas d’une DDM par macrodontie, supérieure à 5 mm :",
        options: [
          "La conservation dentaire est de règle",
          "Le traitement se fait par une thérapeutique fixe multi attaches",
          "Le traitement peut être réalisé en thérapeutique amovible",
          "Le choix d’extraction se fait en fonction du type d’occlusion"
        ],
        correctOptionIndexes: [1, 3], // Source 1547 dit BD
        explanation: "DDM > 5mm nécessite souvent des extractions (A faux), guidées par l'occlusion (D). Le traitement est généralement multi-attaches (B)[cite: 1547, 1548, 1549, 1550]."
      },
      {
        questionText: "Le traitement d’une DDD consiste en :",
        options: [
          "Extraction de prémolaire en vue d’agrandir la longueur de l’arc incisif",
          "Délusage sélectif pour diminuer le diamètre des dents",
          "Un stripping pour diminuer le diamètre des dents",
          "Abstention thérapeutique"
        ],
        correctOptionIndexes: [2, 3], // Source 1551 dit CD
        explanation: "DDD = Dents trop larges pour leur propre base osseuse (indice de Bolton). Traitement : Abstention si faible (D), stripping (C) si modéré[cite: 1551, 1552, 1553, 1554]."
      },
      {
        questionText: "Les moyens d’expansions utilisés en orthodontie permettent de traiter :",
        options: [
          "Une D.D.M par macrodontie",
          "Une D.D.M par macrodontie modérée",
          "Une D.D.M par macrodontie supérieure à 7 mm",
          "Une D.D.M localisée antérieurement"
        ],
        correctOptionIndexes: [1], // Modifié car source 1555 dit D mais illogique, commentaire = <5mm = modérée
        explanation: "L'expansion est une solution pour les DDM par macrodontie légère à modérée (inférieure à 5mm)[cite: 1555, 1556, 1557]."
      },
      {
        questionText: "Les extractions pilotées selon TWEED :",
        options: [
          "Extraction de la canine temporaire vers l’âge de 8 ans suivie de la 1ère molaire temporaire",
          "Extraction de la 1ère PM suivie de la canine temporaire",
          "Extraction de la 1ère molaire temporaire et canine temporaire",
          "Extractions des deux molaires temporaires pour favoriser l’évolution des canines"
        ],
        correctOptionIndexes: [2], // Modifié car source 1558 dit B mais commentaire décrit A puis B pour Hotz. Tweed = M1 temp -> PM1 -> C temp
        explanation: "Séquence de Tweed : Extraction M1 temporaire (vers 8 ans) -> Extraction PM1 dès éruption -> Extraction Canine temporaire[cite: 1558, 1559, 1560, 1561, 1562]."
      },
      {
        questionText: "En présence d’une DDM de - 5 mm à l’arcade supérieure en denture mixte le traitement consiste :",
        options: [
          "En une expansion de l’arcade avec disjoncteur",
          "En une expansion avec quad hélix",
          "En l’utilisation d’une plaque palatine avec vérin",
          "En l’extraction des prémolaires"
        ],
        correctOptionIndexes: [2],
        explanation: "Pour une DDM de 5mm en denture mixte, une expansion par plaque à vérin est indiquée. Disjoncteur/QuadHelix sont plus pour DP ou DDM > 5mm[cite: 1563, 1564, 1565, 1566]."
      },
      {
        questionText: "En présence d’une DDM par microdontie :",
        options: [
          "On s’abstient de toute thérapeutique",
          "On ferme les diastèmes par prothèse de remplacement",
          "On ferme les diastèmes par réalignement de toutes les dents",
          "On ferme les diastèmes par extraction de toutes les dents"
        ],
        correctOptionIndexes: [0, 2], // Source 1567 dit AB mais commentaire parle de C aussi
        explanation: "DDM par microdontie = diastèmes. Abstention si faible (A). Fermeture orthodontique (C) suivie de restauration prothétique (B) si important[cite: 1567, 1568, 1569, 1570]."
      },
      {
        questionText: "En présence d’une DDD le traitement consiste :",
        options: [
          "En l’abstention thérapeutique",
          "En l’extraction des premières prémolaires",
          "Au meulage sélectif des dents concernées",
          "Au stripping des dents concernées"
        ],
        correctOptionIndexes: [0, 3], // Source 1571 dit AD
        explanation: "DDD = Dents trop larges. Traitement : Abstention si faible (A), sinon stripping (D)[cite: 1571, 1572, 1573]."
      },
      {
        questionText: "En présence d’une DDM par macrodontie avec inclusion de la deuxième prémolaire :",
        options: [
          "On extrait la dent incluse",
          "On procède à la désinclusion",
          "On extrait la première prémolaire pour laisser évoluer la dent incluse",
          "On s’abstient de toute thérapeutique en attendant la fin de la croissance"
        ],
        correctOptionIndexes: [0, 2], // Source 1575 dit AC
        explanation: "En cas de DDM avec inclusion de PM2, on peut extraire la dent incluse (A) ou extraire la PM1 pour laisser la place à la PM2 de descendre (C)[cite: 1575, 1576, 1577, 1578, 1579]."
      },
      {
        questionText: "Le traitement de la DDM par macrodontie relative avec extractions consiste à :",
        options: [
          "Faire des extractions pilotées par la méthode de Hotz",
          "Réaliser un stripping des dents permanentes",
          "Faire des extractions des dents délabrées",
          "Réaliser son expansion dans le sens transversal par l’utilisation d’un Quad helix"
        ],
        correctOptionIndexes: [2],
        explanation: "Si des extractions sont nécessaires pour DDM, on privilégie l'extraction de dents délabrées si présentes (C), sinon extractions pilotées (A) ou extractions standards[cite: 1580, 1581, 1582, 1583]."
      },
      {
        questionText: "Le traitement de la DDM par macrodontie relative sans extractions consiste :",
        options: [
          "En l’abstention thérapeutique si la DDM est < 3 mm",
          "À faire des extractions pilotées",
          "À guider l’éruption si la DDM est de -3 ou -4 mm",
          "À conserver le Lee way par des moyens actifs"
        ],
        correctOptionIndexes: [0, 2, 3], // Source 1584 dit ACD
        explanation: "DDM sans extractions (<5mm) : Abstention si très faible (A), guidage d'éruption (C), conservation du Lee Way (D)[cite: 1584, 1585, 1586, 1587]."
      },
      {
        questionText: "Le traitement de la DDD consiste :",
        options: [
          "À faire des extractions pilotées",
          "À réaliser un stripping en cas de macrodontie", // Macrodontie est DDM, pas DDD ?
          "À faire l’extraction d’une incisive latérale inférieure en cas de macrodontie",
          "À réaliser un traitement cosmétique prothétique en cas de microdontie"
        ],
        correctOptionIndexes: [1, 2, 3], // Source 1589 dit BCD - interprétation difficile
        explanation: "DDD = Dents larges. Traitement = Stripping (B). Si DDD mandibulaire sévère, extraction d'une incisive inf (C) peut être envisagée. Microdontie (D) est l'inverse (DDM positive), traitée par prothèse[cite: 1589, 1590, 1591, 1592]."
      },
      {
        questionText: "Traitement de la DDM par microdontie relative consiste à :",
        options: [
          "S’abstenir de toute thérapeutique si le profil est harmonieux",
          "Extraire les deuxièmes prémolaires",
          "Effectuer une thérapeutique fixe multi-attache avec une restauration prothétique comme moyen de contention",
          "Extraire une incisive latérale inférieure"
        ],
        correctOptionIndexes: [0, 2], // Source 1593 dit AC
        explanation: "DDM par microdontie = diastèmes. Abstention si léger et profil ok (A). Traitement = fermeture odf (multi-attaches) puis restauration prothétique (C)[cite: 1593, 1594, 1595, 1596]."
      }
    ]
  },
  {
    title: "La thérapeutique orthodontico-chirurgicale",
    subject: "odf-y4",
    questions: [
      {
        questionText: "Le rôle de l'orthodontiste au cours d'un traitement chirurgical majeur:",
        options: [
          "Compenser les malocclusions.",
          "Corriger l'encombrement des arcades.",
          "Confectionner les arcs chirurgicaux",
          "Affiner l'occlusion en préopératoire."
        ],
        correctOptionIndexes: [1, 2], // Logique odf-y4: B et C sont rôles pré-op. A est l'inverse (décompenser). D est rôle post-op.
        explanation: "En pré-chirurgical, l'orthodontiste aligne les dents (corrige encombrement B), décompense les malpositions alvéolaires (A faux), et prépare les arcs pour la chirurgie (C)."
      },
      {
        questionText: "L'ostéotomie subapicale antérieure:",
        options: [
          "Est appelée également l'ostéotomie de Wassmund.",
          "Intéresse le secteur antérieur supérieur.",
          "Est Indiquée dans les cas de proalvéolie inferieure.",
          "Est Indiquée dans les cas de béance antérieure."
        ],
        correctOptionIndexes: [0, 1, 3], // Logique odf-y4: Wassmund = maxillaire ant (A, B). Köle = mandibulaire ant (C faux). Indiquée pour béance, proalvéolie sup (D).
        explanation: "L'ostéotomie de Wassmund (A) est une ostéotomie subapicale antérieure maxillaire (B), indiquée pour reculer ou impacter le bloc incisivo-canin (correction béance D, proalvéolie sup)."
      },
      {
        questionText: "Avant la chirurgie, l'orthodontiste doit :",
        options: [
          "Assurer une compensation alvéolaire",
          "Assurer une décompensation alvéolaire",
          "Faire des extractions pour corriger le décalage orthodontiquement",
          "Adoucir le plan d’occlusion"
        ],
        correctOptionIndexes: [1],
        explanation: "La phase pré-chirurgicale vise à DÉCOMPENSER les malpositions dento-alvéolaires (B), c'est-à-dire placer les dents sur leurs bases osseuses respectives, pour permettre une correction squelettique maximale par la chirurgie[cite: 177, 178, 184]."
      },
      {
        questionText: "L’orthodontie post chirurgicale :",
        options: [
          "Nécessite un assainissement parodontal",
          "Permet un parallélisme des axes dentaire",
          "Nécessite une préparation des arcades dentaire",
          "Permet de répondre à l’économie tissulaire"
        ],
        correctOptionIndexes: [1, 3], // Source 188 dit BD
        explanation: "La phase post-chirurgicale est la phase de finition : coordination des arcades, obtention d'un bon engrènement, parallélisme radiculaire (B), en respectant les tissus (D)[cite: 191, 192, 194, 196]."
      },
      {
        questionText: "L'ostéotomie de Lefort I est :",
        options: [
          "Une ostéotomie horizontale de la mandibule",
          "Une résection ostéopathique du maxillaire", // Ostéotomie, pas résection ostéopathique?
          "Indiquée pour corriger le tiers supérieur du maxillaire",
          "Indiquée pour corriger le tiers moyen du maxillaire" // Tiers moyen de la face plutôt
        ],
        correctOptionIndexes: [1, 3], // Source 199 dit BD - B est imprécis, D aussi (tiers moyen FACE)
        explanation: "Le Lefort I est une ostéotomie horizontale du maxillaire (A faux), permettant de mobiliser le plateau maxillaire (B imprécis) pour corriger des anomalies du tiers moyen de la face (D)[cite: 202, 203, 205, 207]."
      },
      {
        questionText: "L'orthodontie pré chirurgicale permet la :",
        options: [
          "Correction de l'encombrement",
          "Coordination des arcades",
          "Stimulation des résultats de l'intervention", // Stabilisation plutôt ?
          "Réalisation des finitions occlusales"
        ],
        correctOptionIndexes: [0],
        explanation: "Objectifs pré-chir : alignement dentaire (correction encombrement A), décompensation, préparation des arcs. Coordination (B) et finitions (D) sont post-chirurgicales[cite: 213, 214, 215, 216]."
      },
      {
        questionText: "L'ostéotomie segmentaire :",
        options: [
          "Intéressé l’os alvéolaire",
          "Intéressé l'os basal",
          "Est indiquée dans le cas d'excès de hauteur verticale",
          "Est indiquée dans le cas de sourire gingival."
        ],
        correctOptionIndexes: [0, 2, 3], // Source 221 dit ACD
        explanation: "L'ostéotomie segmentaire concerne l'os alvéolaire (A, B faux). Indications : impaction pour excès vertical antérieur / sourire gingival (C, D), correction proalvéolie, fermeture béance[cite: 223, 225, 226, 228, 229]."
      },
      {
        questionText: "L'ostéotomie de Schuchart :",
        options: [
          "Nécessite l'extraction des prémolaires",
          "Nécessite l'extraction des dents de sagesse",
          "Permet de diminuer la DV",
          "Permet la correction des béances incisivo-canines"
        ],
        correctOptionIndexes: [1, 2, 3], // Source 254 dit BCD
        explanation: "L'ostéotomie de Schuchardt est une impaction postérieure du maxillaire, souvent après extraction des 8 (B), pour fermer une béance antérieure (D) et diminuer la dimension verticale (C)[cite: 257, 258, 259, 261]."
      },
      {
        questionText: "Les ostéotomies sont destinées à :",
        options: [
          "Diminuer des structures osseuses.",
          "Augmenter des structures osseuses.",
          "Mettre à nu une couronne dentaire.",
          "Faire une résection apicale.",
          "Poser un greffon."
        ],
        correctOptionIndexes: [0, 1], // Logique + commentaire source 268
        explanation: "Les ostéotomies de chirurgie orthognathique visent à repositionner les bases osseuses pour corriger leur taille relative (diminuer ou augmenter une dimension) ou leur position[cite: 268, 274]."
      },
      {
        questionText: "La chirurgie orthognathique intervient :",
        options: [
          "Pendant la croissance",
          "En fin de croissance",
          "Vers 16-17 ans chez les filles",
          "Vers 18 ans chez les garçons"
        ],
        correctOptionIndexes: [1, 2, 3], // Source 279 dit BCD
        explanation: "La chirurgie orthognathique ne peut être réalisée qu'après la fin de la croissance osseuse (A faux, B vrai), soit vers 16-17 ans chez les filles (C) et 18 ans ou plus chez les garçons (D)[cite: 280, 281, 282, 283]."
      }
    ]
  },
  // ... Autres Quiz ...
];

// Fin du fichier odf-y4-y4.js
module.exports = odfY4Quizzes;
