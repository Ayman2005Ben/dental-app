// quizzes/year-4/og.js
// REMARQUE : Les fichiers sources (Word) fournis pour ce module ne contenaient pas les 'Réponses' explicites (ex: 'Réponse: AC').
// Les 'correctOptionIndexes' ont été déduits à partir des explications fournies et des connaissances cliniques pertinentes.

const ogQuizzes = [
  {
    title: "Notions générales sur le vieillissement",
    subject: "og",
    questions: [
      {
        questionText: "Les affections rencontrées chez le sujet âgé sont :",
        options: [
          "La perlèche",
          "L'hyperplasie en feuillets de livre",
          "La stomatite sous prothétique",
          "Le syndrome sec"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "A : Chéilite ou perlèche: inflammation de la muqueuse buccale au niveau des commissures labiales qui peut s’étendre jusqu’à la peau adjacente."
      },
      {
        questionText: "Le vieillissement clinique de la sphère oro-faciale s'accompagne de :",
        options: [
          "Perte de l'élasticité gingivale",
          "Une hypertrophie des muqueuses récession",
          "Modifications de l'aspect de l'émail par l'abrasion",
          "Un élargissement des canaux radiculaires"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "B : Le parodonte voit ses fibres gingivales disparaître et l’os alvéolaire se résorber causant ainsi une récession gingivale.\nD : Minéralisation de la chambre et des canaux pulpaires"
      },
      {
        questionText: "Les modifications fonctionnelles dues à la senescence rénale sont :",
        options: [
          "Une diminution de l'activité enzymatique.",
          "Une diminution de la filtration glomérulaire.",
          "Une diminution du nombre d'hépatocytes fonctionnelles.",
          "Une diminution de la sécrétion glomérulaire."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "Le rein devient plus sensible à l’action toxique de certains médicaments.\nUne attitude de prudence consiste à réduire la dose de drogues à élimination rénale."
      },
      {
        questionText: "La myopathie dégénérative chez la personne âgée se caractérise par:",
        options: [
          "Une diminution en nombre des fibres musculaires.",
          "Une diminution en taille des fibres musculaires",
          "Une diminution des vaisseaux sanguin.",
          "Une augmentation de l'activité des enzymes musculaire"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "D : L'activité enzymatique musculaire diminue avec l'âge"
      },
      {
        questionText: "Le vieillissement :",
        options: [
          "Est un processus pathologique inéluctable, lent et progressif",
          "Aboutit à l'affaiblissement de l'organisme",
          "Est un processus physiologique rapide et agressif",
          "Est consécutif aux effets imbriqués des facteurs intrinsèques et extrinsèques"
        ],
        correctOptionIndexes: [1, 3],
        explanation: ""
      }
    ]
  },
  {
    title: "L’examen clinique",
    subject: "og",
    questions: [
      {
        questionText: "La senescence est responsable des modifications suivantes:",
        options: [
          "Diminution de la motilité gastro-intestinale.",
          "Augmentation du pH gastrique.",
          "Diminution du pH gastrique.",
          "Augmentation de la surface d'absorption."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "D : les capacités d'absorption peuvent diminuer en raison de changements structuraux et fonctionnels dans l'intestin"
      },
      {
        questionText: "Les motifs de consultation en odontologie gériatrique sont généralement:",
        options: [
          "Les cellulites",
          "La recherche des foyers infectieux d'origine buccodentaire",
          "Des douleurs buccales exprimées ou supposées",
          "Des prothèses dentaires défectueuses"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      },
      {
        questionText: "L'avancée en Age s'accompagne souvent de:",
        options: [
          "Douleurs algues récurrentes",
          "Douleurs chroniques pouvant durer parfois plusieurs années",
          "Douleurs en coup de poignard localisées",
          "Douleurs décrites comme des douleurs fantômes"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "L'anamnèse chez les personnes âgées doit porter sur:",
        options: [
          "La présence de pathologies psychiatriques graves",
          "La présence pathologies gastrointestinales",
          "La présence d'insuffisances cardio-respiratoires",
          "Toutes les réponses sont justes"
        ],
        correctOptionIndexes: [3],
        explanation: "L’anamnèse gériatrique doit être exhaustive et inclure toutes les comorbidités, y compris psychiatriques, gastro-intestinales et cardio-respiratoires."
      }
    ]
  },
  {
    title: "Sécheresse buccale",
    subject: "og",
    questions: [
      {
        questionText: "Parmi les étiologies à l'origine d'une sécheresse orale chez la personne âgée, nous citons:",
        options: [
          "La maladie de Parkinson",
          "Le diabète gestationnel",
          "L'endocardite infectieuse",
          "Certains traitements médicamenteux"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Le diabète gestationnel n’affecte pas les personnes âgées. L’endocardite n’est pas une cause directe de xérostomie. La maladie de Parkinson et les médicaments (ex. anticholinergiques) sont des causes reconnues."
      },
      {
        questionText: "La xérostomie se traduit par:",
        options: [
          "Uniquement, une atteinte directe des glandes salivaires.",
          "Une diminution du flux salivaire ou hyposialie.",
          "Une sécrétion salivaire normale avec diminution de la qualité de la salive.",
          "Une dégénérescence des acini glandulaires peu à peu remplacés par du tissu fibreux."
        ],
        correctOptionIndexes: [1],
        explanation: "Les autres propositions sont incorrectes car la xérostomie n'est pas uniquement liée à une atteinte directe des glandes salivaires mais peut avoir diverses causes comme les médicaments ou la radiothérapie."
      },
      {
        questionText: "On parle d'hyposialle ou hypo-salivation lorsque le débit salivaire est :",
        options: [
          "0,7 ml de salive/min après stimulation",
          "≤ 0,3 ml de salive/min sans stimulation",
          "≤1 ml de salive/min sans stimulation",
          "≤5 ml de salive/min lors des repas"
        ],
        correctOptionIndexes: [1],
        explanation: "L'hyposialie est définie par un débit salivaire ≤ 0,3 ml/min sans stimulation.Les autres valeurs sont incorrectes :0,7 ml/min correspond à une mesure après stimulation≤1 ml/min sans stimulation est un seuil trop élevé≤5 ml/min pendant les repas n'est pas le critère diagnostique retenu"
      },
      {
        questionText: "La cavité orale du sujet âgé souffrant de sécheresse buccale présente les caractéristiques suivantes :",
        options: [
          "Une langue fisse et dépapillée",
          "Une macroglossie",
          "Une déminéralisation de la surface de l'email",
          "Des érosions et fractures amélaires"
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "La langue dépapillée, la déminéralisation et les érosions sont des conséquences fréquentes de la xérostomie. La macroglossie n’est pas typique."
      }
    ]
  },
  {
    title: "Soins conservateurs et endodontiques",
    subject: "og",
    questions: [
      {
        questionText: "Chez le sujet âgé, les douleurs pulpaires sont généralement :",
        options: [
          "Très fréquentes et sévères",
          "Discrètes à cause de la calcification pulpaire",
          "Accompagnées d'un œdème facial important",
          "Intenses et irradiantes"
        ],
        correctOptionIndexes: [1],
        explanation: "« Chez le sujet âgé, la douleur pulpaire est souvent discrète en raison de la calcification pulpaire qui diminue la réactivité. »"
      },
      {
        questionText: "La dentine, chez le sujet âgé, est caractérisée par :",
        options: [
          "Une hypominéralisation hyper",
          "La diminution de son épaisseur",
          "L'augmentation de son épaisseur",
          "Des tubulis largement ouverts"
        ],
        correctOptionIndexes: [2],
        explanation: "Caractéristiques de la dentine chez le sujet âgé\nModifications chez le sujet âgé dues à 2 processus indépendants :\n▪ Obturation des tubuli dentinaires par dentine péritubulaire\n▪Dentine devient plus minéralisée avec l’âge + aspect translucide → « Hyperminéralisation » des tubulis → influence sur l’efficacité des adhésifs en dentisterie restauratrice."
      },
      {
        questionText: "L'un des inconvénients majeurs en endodontie chez le sujet âgé est:",
        options: [
          "La fréquence des canaux pulpo-parodontaux",
          "La difficulté à localiser les canaux radiculaires",
          "La forte vascularisation",
          "L'hypersensibilité pulpaire"
        ],
        correctOptionIndexes: [1],
        explanation: "* l’inconvénient majeur en endodontie → difficulté de localiser la chambre pulpaire et le canal radiculaire."
      },
      {
        questionText: "Chez les personnes âgées, les caries sont:",
        options: [
          "En général des lésions peu profondes.",
          "Symptomatiques.",
          "Actives ou inactives.",
          "De forme inactive seulement"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "Les caries sont en général des lésions peu profondes, asymptomatiques et se présentent sous forme active ou inactive"
      },
      {
        questionText: "L'attrition est:",
        options: [
          "La modification la plus cachée de l'email liée à l'âge.",
          "Une usure rapide de l'email.",
          "Une usure lente de l'émail puis de la dentine.",
          "Fréquente sur la surface occlusale et les points de contact."
        ],
        correctOptionIndexes: [2, 3],
        explanation: "A : L’attrition est la modification la plus apparente de l’email liée à l’âge"
      },
      {
        questionText: "La lésion carieuse chez les personnes âgées :",
        options: [
          "Elle est de prédominance proximale que cervicale.",
          "La calcification des dents du sujet âgé s'oppose à cette lésion carieuse",
          "Se présente sous forme active ou inactive",
          "Favorisée par la xérostomie due à l'âge"
        ],
        correctOptionIndexes: [2, 3],
        explanation: ""
      },
      {
        questionText: "L'érosion est parmi les pathologies de l'organe dentaire spécifiques de la personne âgée :",
        options: [
          "Due principalement à une attaque de substances chimiques",
          "Une usure mécanique peut accentuer cette érosion",
          "La progression de l'érosion s'accélère avec l'âge",
          "C'est une lésion carieuse inactive"
        ],
        correctOptionIndexes: [0, 1],
        explanation: ""
      },
      {
        questionText: "Le traitement endodontique est contre indiqué :",
        options: [
          "Chez un patient de troisième âge",
          "En cas de support parodontal insuffisant",
          "Si la reconstitution corono-radiculaire est impossible",
          "En cas de fracture verticale"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      }
    ]
  },
  {
    title: "Traitements parodontaux",
    subject: "og",
    questions: [
      {
        questionText: "Le vieillissement de la gencive se traduit par :",
        options: [
          "Une augmentation du nombre de fibroblastes",
          "Un amincissement de l'épithélium gingival",
          "Une perte d'élasticité",
          "Une augmentation de la hauteur de gencive attachée après 45 ans"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Elles sont principalement représentées par :\n• Une perte d’élasticité ;\n• Un aspect plus lisse ;\n• Une légère récession ;\n• La hauteur de gencive attachée n’évolue plus après 45 ans ;\n• L’épithélium gingival présente un amincissement d’environ 30% par rapport àl’adulte jeune ;"
      },
      {
        questionText: "Concernant la flore parodontale chez la personne âgée :",
        options: [
          "Le nombre relatif de Porphyromonasgingivalis augmente",
          "Le flux salivaire augmente avec l'âge",
          "La prévalence d'Aggregatibacterpictinomycetemcomitans diminue",
          "Les enterocoques sont plus fréquemment retrouvés ."
        ],
        correctOptionIndexes: [0, 2, 3],
        explanation: "B : -Le flux salivaire diminue par les médicaments et le régime alimentaire mou.\nD : Les sujets âgés présentent une prévalence plus importante de Pseudomonas et d'entérocoques."
      },
      {
        questionText: "Chez le sujet âgé :",
        options: [
          "Les dépôts de plaque supragingivale sembleraient plus importants.",
          "La prévalence d'Aggrégatibacter actinomycetemcomitans (Aa) augmente.",
          "La prévalence de Porphyromonas gingivalis (Pg) augmente.",
          "La composition de la flore cultivable sous-gingivale du parodonte sain est différente de celle observée chez le sujet jeune"
        ],
        correctOptionIndexes: [0, 2],
        explanation: "B : La prévalence et le nombre relatif de (Aa) diminuent\nD : La composition de la flore cultivable sous-gingivale du parodonte sain est similaire à celle observée chez le sujet jeune."
      },
      {
        questionText: "Chez la personne âgée, le traitement parodontal non chirurgical permet de:",
        options: [
          "Instaurer un dépistage systématique et un suivi régulier",
          "Limiter la durée des séances des soins parodontaux au fauteuil dentaire.",
          "Assainir la cavité buccale en éliminant les facteurs étiologiques.",
          "Eliminer les poches parodontales de plus de 6mm de profondeur"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "A : Traitement Prophylactique\nD : Traitement chirurgical"
      },
      {
        questionText: "La cicatrisation parodontale chez la personne âgée semble être affectée par :",
        options: [
          "L'âge",
          "La manipulation tissulaire",
          "Le contrôle de plaque",
          "L'état général du patient"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: ""
      }
    ]
  },
  {
    title: "La rehabilitation prothetique",
    subject: "og",
    questions: [
      {
        questionText: "La réhabilitation prothétique du sujet âgé:",
        options: [
          "Nécessite souvent le recours à la chirurgie préprothétique.",
          "Nécessite impérativement le recours à la chirurgie préprothétique.",
          "Exige une empreinte piézographique.",
          "Correspond à la prothèse totale amovible bimaxillaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Le recours à la chirurgie pré prothétique devient nécessaire dans un certain nombre de cas cliniques pour améliorer la stabilité de la prothèse\""
      },
      {
        questionText: "La réhabilitation prothétique du sujet âgé:",
        options: [
          "Nécessite souvent le recours à la chirurgie préprothétique.",
          "Nécessite impérativement le recours à la chirurgie préprothétique.",
          "Exige une empreinte piézographique.",
          "Correspond à la prothèse totale amovible bimaxillaire."
        ],
        correctOptionIndexes: [0],
        explanation: "Le recours à la chirurgie pré prothétique devient nécessaire dans un certain nombre de cas cliniques pour améliorer la stabilité de la prothèse\""
      },
      {
        questionText: "En prothèse gériatrique:",
        options: [
          "La technique piezographique est une technique d'empreinte qui permet d'augmenter la stabilité des prothèses.",
          "La technique piezographique permet d'augmenter l'esthétique",
          "Les crêtes flottantes sont dues à une prothèse mal ajustée.",
          "La piézographie mandibulaire est toujours indiqué"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Les pathologies liées au port de prothèses dentaires chez le sujet âgé sont:",
        options: [
          "La macroglossie.",
          "La stomatite sous prothétique",
          "L'ulcération aphteuse.",
          "L'hyperplasie fibro-épithéliale."
        ],
        correctOptionIndexes: [1, 3],
        explanation: "C : Ulcération traumatique\nAutre : Chéilite commissurale (perlèche, chéilite angulaire)"
      },
      {
        questionText: "Dans la réhabilitation prothétique du sujet âgé en bonne santé générale:",
        options: [
          "Tous les traitements prothétiques sont permis.",
          "La prothèse totale adjointe est la seule indiquée",
          "Aucun traitement prothétique amovible n'est autorisé.",
          "Les implants sont contre indiqués"
        ],
        correctOptionIndexes: [0],
        explanation: "si la personne âgée ne présente pas d'altération de son état général, les réhabilitations implantaires avec ou sans augmentation osseuse sont une des stratégies pour prévenir le vieillissement."
      },
      {
        questionText: "L'édentation terminale on totale non compensée s'accompagne de :",
        options: [
          "Une diminution de la hauteur de l'étage moyen et inférieur de la face.",
          "Une résorption objectivée par une diminution de la hauteur des procès alvéolaires.",
          "Une résorption limitée par l'action des brides fibreuses et des freins.",
          "Déplacement du foramen mentonnier vers une position plus postérieure"
        ],
        correctOptionIndexes: [0, 1, 3],
        explanation: "La perte des dents provoque une résorption des arcades alvéolaires.\nCe sont essentiellement la réduction de volume et la modification de la forme des arcades, la hauteur des arcades est diminuée.\nprognathie mandibulaire, avec pr"
      },
      {
        questionText: "En prothèse gériatrique:",
        options: [
          "La technique piézographique est une technique d'empreinte qui permet d'augmenter la stabilité des prothèses",
          "La technique piézographique permet d'augmenter l'esthétique",
          "Les crêtes flottantes sont dues à une prothèse mal ajustée",
          "La piézographie mandibulaire est toujours indiquée"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "En odontologie gériatrique :",
        options: [
          "Le passage d'une classe I squelettique à une classe II squelettique se fait par l'ouverture de l'angle goniaque mandibulaire",
          "Le passage d'une classe I squelettique à une classe Ill squelettique se fait par la résorption centripete mandibulaire",
          "Le passage d'une classe I squelettique à une classe Ill squelettique se fait par la résorption centrifuge maxillaire",
          "Les dysfonctionnements de l'appareil manducateur sont les premiers motifs de consultation"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      },
      {
        questionText: "La réhabilitation prothétique du sujet âgé:",
        options: [
          "Nécessite souvent le recours à la chirurgie préprothétique",
          "Nécessite impérativement le recours à la chirurgie préprothétique",
          "Exige une empreinte piézographique",
          "Correspond à la prothèse totale amovible bi-maxillaire"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "Concernant L'entretien des prothèses, laquelle des affirmations est fausse :",
        options: [
          "Le lavage de la prothèse s'effectue par l'usage du dentifrice et la brosse",
          "Le lavage de la prothèse au savon de Marseille, sous eau courante",
          "Le port de la prothèse nocturne est déconseillé",
          "L'élimination d'un bord tranchant"
        ],
        correctOptionIndexes: [0],
        explanation: "Le dentifrice est abrasif et abîme la résine. Il est déconseillé."
      },
      {
        questionText: "Chez un ancien porteur de prothèse adjointe complète au maxillaire, une crête flottante antérieure est due à :",
        options: [
          "Une sous extension des bords prothétiques15%",
          "Une sur extension du bord antérieur de la prothése12%",
          "Une dimension verticale d'occlusion augmentée18%",
          "Un contact dento-dentaire antérieur exagéré45%",
          "Toutes les réponses sont fausses9%"
        ],
        correctOptionIndexes: [3],
        explanation: "a et b  :  Faux .\nUne  sous-extension  ou une  sur-extension  des bords de la prothèse a des effets négatifs sur la  rétention  et la  stabilité  de celle-ci.\nc- Une dimension verticale d'occlusion augmentée:  Faux, toujours la DVO est en relation avec le contact molaire postérieur.\nSi ce dernier est le paramètre qui détermine la DVO donc toute DVO altérée a des effets sur les secteurs postérieurs.\nd. Un contact dento-dentaire antérieur exagéré  :  Correct .\nCela a un effet direct sur les  tissus mous et durs  du secteur antérieur."
      }
    ]
  },
  {
    title: "Le traitement implantaire",
    subject: "og",
    questions: [
      {
        questionText: "Les indications du traitement implantaire chez le sujet âgé doivent prendre en compte :",
        options: [
          "Le degré de résorptions osseuse",
          "La présence de troubles cognitifs mental",
          "La motivation à l'hygiène bucco-dentaire du patient",
          "Sa prise médicamenteuse"
        ],
        correctOptionIndexes: [0, 1, 2, 3],
        explanation: "Évaluation pré-implantaire spécifique\n• État cognitif et autonomie\n• Comorbidités fréquentes : diabète, maladies cardiovasculaires, ostéoporose, etc.\n• Médications (anticoagulants, bisphosphonates, corticoïdes, etc.)\n• Coordination avec le médecin traitant ou spécialiste.\n• Risque anesthésique et chirurgical\n• Volume osseux disponible.\n• État des muqueuses et de l’os alvéolaire.\n• Présence de pathologies (parodontite, lésion muqueuses...).\n• Capacité à maintenir une bonne hygiène orale"
      },
      {
        questionText: "Le Protocole chirurgical adapté pour le traitement implantaire du sujet âgé :",
        options: [
          "Chirurgie mini-invasive privilégiée",
          "Temps opératoires réduits",
          "Protocole simplifié pour limiter le stress chirurgical",
          "Antibioprophylaxie systématique"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "Protocole chirurgical adapté\n• Chirurgie mini-invasive privilégiée.\n• Temps opératoires réduits.\n• Protocole simplifié pour limiter le stress chirurgical.\n• Antibioprophylaxie adaptée.\n• Surveillance post-opératoire rigoureuse."
      },
      {
        questionText: "Chez le patient âgé, édenté total, les critères cliniques déterminants l'indication de l'attachement prothétique pour une prothèse amovible supra-implantaire sont:",
        options: [
          "Le bouton-pression est recommandé en cas de faible espace prothétique",
          "Le système Locator est particulièrement adapté aux implants ayant une divergence > a 10°",
          "La barre est indiquée en cas de divergence axiale entre les implants",
          "Le système bouton-pression est composé d'une partie male et femelle"
        ],
        correctOptionIndexes: [1, 2, 3],
        explanation: ""
      },
      {
        questionText: "Au niveau mandibulaire et dans le cadre d'une PACSI, l'emplacement des implants doit :",
        options: [
          "Symétrique.",
          "Dans la région parasymphysaire",
          "Entre les deux foramens mentonniers",
          "Asymétrique."
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "L'emplacement des implants doit être symétrique dans la région parasymphysaire, ils se situent entre les deux foramens mentonniers = site est très favorable de part l'absence d'obstacles anatomiques et les possibilités fréquente d'appuis"
      },
      {
        questionText: "Indication de PACSI chez les personnes âgées:",
        options: [
          "Décalage important des bases osseuses.",
          "Résorption osseuse est avancée.",
          "Incapacité d'assurer un entretien quotidien des prothèses fixes.",
          "Endentement partiel bilatéral."
        ],
        correctOptionIndexes: [1, 2],
        explanation: "Autre : La durée du traitement : leur courage et leur patiente ne correspondent pas toujours aux ambitions des praticiens;\nles PACSI semble plus indiques."
      },
      {
        questionText: "L'implant dentaire permet une :",
        options: [
          "Nette diminution de la capacité masticatoire",
          "Préservation du capital osseux",
          "Détérioration de la qualité de vie des patients",
          "Augmentation des cycles masticatoires"
        ],
        correctOptionIndexes: [1],
        explanation: ""
      }
    ]
  },
  {
    title: "Soins à domicile",
    subject: "og",
    questions: [
      {
        questionText: "Dans la prise en charge des sujets âgés à domicile:",
        options: [
          "Le plan de traitement adopté doit être pratique et modifiable en fonction de l'état du malade.",
          "Les soins complexes et chirurgicaux doivent être simples et efficaces.",
          "Les soins sont fournis par une équipe formée à gérer les situations complexes.",
          "La collaboration avec le médecin traitant et la famille est facultative"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: "La collaboration avec le médecin traitant et la famille est d’une grande nécessité."
      },
      {
        questionText: "La classification des personnes âgées d'Ettinger est essentiellement basée sur :",
        options: [
          "L'accès aux soins.",
          "Les capacités physiques de la personne âgée.",
          "La composante psychologique de la personne âgée.",
          "L'état de santé de la personne âgée."
        ],
        correctOptionIndexes: [3],
        explanation: ""
      },
      {
        questionText: "Les objectifs des soins à domicile pour les personnes âgées dépendantes rechercheront:",
        options: [
          "L'élimination des foyers infectieux potentiels",
          "L'extraction des dents restantes et la réalisation d'une réhabilitation prothétique",
          "Une insertion sociale et une vie affective plus réussies",
          "Pratiquer des gestes chirurgicaux"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      }
    ]
  },
  {
    title: "Prescription médicamenteuse",
    subject: "og",
    questions: [
      {
        questionText: "Laquelle ou lesquelles des situations suivantes peuvent être à l'origine d'une latrogénie médicamenteuse chez le sujet âgé ?",
        options: [
          "Mauvaise observance du traitement",
          "Respect strict des contre-indications",
          "Posologie adaptée au terrain",
          "Polymédication"
        ],
        correctOptionIndexes: [0, 3],
        explanation: "« Chez le sujet âgé (> 65 ans), on observe souvent une polymédication, ce qui augmente le risque d’interactions médicamenteuses et d’iatrogénie.\nDe plus, la mauvaise observance est une cause fréquente de complications thérapeutiques. »"
      },
      {
        questionText: "La polymédication chez le sujet âgé peut entraîner:",
        options: [
          "Une diminution du risque d'interactions",
          "Une augmentation de l'iatrogénie médicamenteuse",
          "Une modification de la pharmacodynamie",
          "Une réduction du nombre d'effets indésirables"
        ],
        correctOptionIndexes: [1, 2],
        explanation: "« Le sujet âgé est souvent polymédiqué : cela favorise l’iatrogénie médicamenteuse.\nLes modifications pharmacocinétiques et pharmacodynamiques liées à l’âge amplifient ce phénomène. »"
      },
      {
        questionText: "Parmi les mesures suivantes, lesquelles sont essentielles pour prévenir les interactions eviter médicamenteuses?",
        options: [
          "Adapter la posologie selon la fonction rénale",
          "Consulter une base de données fiables",
          "Éviter l'automédication chez le sujet âgé",
          "Prescrire plusieurs antalgiques en même temps par principe de précaution"
        ],
        correctOptionIndexes: [0, 1, 2],
        explanation: ""
      },
      {
        questionText: "Parmi les médicaments sialoprives nous avons :",
        options: [
          "Les neuropsychotropes anxiolytiques et stupéfiants.",
          "Les anti-inflammatoires stéroïdiens.",
          "Les antibiotiques et les antimitotiques.",
          "Les antihistaminiques."
        ],
        correctOptionIndexes: [0, 3],
        explanation: "Autre :\nLes antihypertenseurs sympathoplégiques\nLes hypotenseurs centraux ; les anti-arythmique ; les diurétique ………"
      },
      {
        questionText: "Les Interactions médicamenteuses sont classées en 5 catégories de gravité, dans la catégorie 1:",
        options: [
          "Les risques sont supérieurs aux bénéfices, donc contre-indication absolue",
          "L'association est déconseillée il faut choisir d'autre molécules de préférence",
          "Pas d'interactions entres les médicaments",
          "Toutes les réponses sont fausses"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      }
    ]
  },
  {
    title: "Douleurs oro-faciales et sédation",
    subject: "og",
    questions: [
      {
        questionText: "A propos de La stomatodynie, lesquelles de ces affirmations sont justes?",
        options: [
          "La douleur est secondaire aux affections bucco-dentaires",
          "Elle est liée à une infection virale",
          "Elle est aggravée par l'ingestion des aliments épicés",
          "Le diagnostic différentiel se pose avec la névralgie glossopharyngienne"
        ],
        correctOptionIndexes: [2, 3],
        explanation: "« La stomatodynie est une douleur chronique sans lésion organique évidente, souvent aggravée par les aliments épicés."
      },
      {
        questionText: "Parmi les éléments suivants, lequel évoque une névralgie symptomatique plutôt qu'essentiel",
        options: [
          "L'âge > 50 ans",
          "Douleur avec paresthésies entre les crises",
          "Absence de signes neurologiques",
          "Un test thérapeutique par la carbamazepine positif"
        ],
        correctOptionIndexes: [1],
        explanation: "Diagnostic différentiel avec une névralgie secondaire (symptomatique) : on évoque une névralgie secondaire devant :\n● Un âge de survenue jeune,\n● Des décharges moins intenses,\n● Une prépondérance dans le territoire V1,\n● La persistance d’un fond douloureux entre les accès avec parfois paresthésie et hypoesthésie ;\n● L’examen clinique recherche une diminution du réflexe cornéen, ou une atteinte d’autres nerfs crâniens du même côté."
      },
      {
        questionText: "La stomatodynie chez le sujet âgé est :",
        options: [
          "D'origine neuropathique.",
          "D'ordre idiopathique.",
          "Intense, continue, et nocturne.",
          "Diminuée par la nourriture"
        ],
        correctOptionIndexes: [0, 1],
        explanation: "c’est une sensation de brûlure intra-orale pour laquelle aucune cause médicale ou dentaire ne peut être trouvée.\nC : Douleur continue, chronique"
      },
      {
        questionText: "La douleur oro-faciale chez le sujet âgé est:",
        options: [
          "D'évaluation difficile.",
          "Souvent chronique.",
          "De diagnostic étiologique aisé.",
          "Toutes les réponses sont justes."
        ],
        correctOptionIndexes: [0, 1],
        explanation: "C : Il implique diverses causes potentielles qui compliquent le processus diagnostique"
      },
      {
        questionText: "la douleur est :",
        options: [
          "L'expérience sensorielle ou émotionnelle désagréable associée à un dommage tissulaire",
          "L'expérience sensorielle désagréable associées dommage tissulaire",
          "L'expérience émotionnelle désagréable sans dommage tissulaire",
          "L'expérience sensorielle sans dommage tissulaire"
        ],
        correctOptionIndexes: [0],
        explanation: ""
      },
      {
        questionText: "La stomatodynie idiopathique est une douleur:",
        options: [
          "De la muqueuse buccale sans cause organique identifiable",
          "De la muqueuse linguale sans cause organique identifiable",
          "De la muqueuse linguale d'origine traumatique",
          "De la muqueuse buccale d'origine organique"
        ],
        correctOptionIndexes: [0],
        explanation: "La stomatodynie idiopathique est définie comme une douleur chronique de la muqueuse buccale sans cause organique identifiable ce qui correspond exactement à la première option. Elle peut affecter différentes zones de la cavité buccale notamment la langue les lèvres ou le palais mais elle n’est pas limitée uniquement à la muqueuse linguale donc la deuxième option est trop restrictive. La troisième option est incorrecte car la stomatodynie idiopathique n’est pas d’origine traumatique par définition le terme idiopathique signifie justement l’absence de cause identifiable y compris traumatique. Enfin la quatrième option est fausse car elle mentionne une origine organique alors que cette affection est précisément caractérisée par l’absence de toute cause organique décelable."
      }
    ]
  }
];

module.exports = ogQuizzes;