const pathoQuizzes = [
  {
    "title": "Examen clinique du patient et fiche d'observation",
    "subject": "patho",
    "questions": [
      {
        "questionText": "L'examen clinique exo-buccal",
        "options": [
          "Est une étape incontournable de la consultation initiale",
          "Permet de déceler les signes subjectifs d'une patho",
          "Est toujours précédé d'un bilan radiologique.",
          "Doit rechercher une réaction péri-apicale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'examen clinique exo-buccal est une étape essentielle de la consultation initiale pour observer les signes objectifs. Les signes subjectifs (symptômes) sont recueillis lors de l'interrogatoire. Le bilan radiologique est un examen complémentaire et non systématique."
      },
      {
        "questionText": "L'examen de la cinétique mandibulaire met en évidence:",
        "options": [
          "Le degré de l'ouverture buccale.",
          "Une suppuration",
          "L'état des muqueuses.",
          "Le jeu des condyles mandibulaires"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "L'examen de la cinétique mandibulaire évalue les mouvements de la mandibule, ce qui inclut le degré d'ouverture buccale et le jeu des condyles mandibulaires au sein de l'articulation temporo-mandibulaire."
      },
      {
        "questionText": "L'examen clinique endo-buccal:",
        "options": [
          "Permet de mettre en lumière un risque lié à une patho générale.",
          "Est une étape incontournable de la consultation initiale.",
          "Doit rechercher une réaction péri-apicale.",
          "Doit être précédé d'un bilan radiologique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'examen clinique endo-buccal est une étape initiale fondamentale. Les risques liés à une pathologie générale sont mis en évidence par l'interrogatoire. Bien qu'il puisse révéler des signes de réaction péri-apicale, un diagnostic fiable nécessite des examens radiographiques."
      },
      {
        "questionText": "En pratique quotidienne, l'interrogatoire:",
        "options": [
          "Permet souvent de déterminer un diagnostic de certitude.",
          "Permet de mettre en évidence les signes subjectifs d'une maladie.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Doit toujours être complété par des examens radiologiques et/ou biologiques"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'interrogatoire vise à recueillir les signes subjectifs (symptômes décrits par le patient), ce qui oriente le diagnostic. Il ne permet pas toujours une certitude et contient bien plus que l'état civil. Les examens complémentaires ne sont pas systématiques."
      },
      {
        "questionText": "La fiche d'observation clinique :",
        "options": [
          "Est un document optionnel.",
          "Est un document médico-légal.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Est rédigée par le patient."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La fiche d'observation est un document essentiel à la fois pédagogique, scientifique et surtout médico-légal. Elle est rédigée par le praticien et contient des informations complètes (état civil, antécédents, examens, etc.)."
      },
      {
        "questionText": "L'examen des aires ganglionnaires:",
        "options": [
          "Est obligatoire chez un patient diabétique déséquilibré",
          "Est systématique quel que soit le motif de consultation.",
          "Doit être complété par un examen radiologique.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Aucune des réponses n'est juste. L'examen des aires ganglionnaires n'est pas systématique, il est orienté par le contexte pathologique (infections, inflammations). C'est un examen clinique qui ne nécessite pas forcément de radiographie."
      },
      {
        "questionText": "L'examen clinique endo-buccal",
        "options": [
          "Permet de mettre en évidence un risque lié à une patho générale",
          "Doit être précédé d'un bilan radiologique",
          "Est une étape incontournable de la consultation initiale",
          "Doit rechercher une réaction péri-apicale"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'examen clinique endo-buccal est une étape essentielle et incontournable de la consultation initiale. La recherche d'un risque lié à une pathologie générale relève de l'interrogatoire, et le bilan radiologique est complémentaire et non systématique."
      },
      {
        "questionText": "Parmi ces propositions, laquelle (s) est (sont) juste(s):",
        "options": [
          "Les examens complémentaires sont prescrits systématiquement au terme de l'examen clinique",
          "Un examen bucco-facial rigoureux est une étape indispensable du bilan pré-opératoire,",
          "L'examen des aires ganglionnaires se fait lors de l'examen endo-buccal.",
          "L'examen de la cinétique mandibulaire met en évidence l'état des muqueuses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un examen bucco-facial rigoureux est effectivement indispensable avant une intervention. Les examens complémentaires ne sont pas systématiques. L'examen des aires ganglionnaires est exo-buccal, et la cinétique mandibulaire évalue les mouvements, pas l'état des muqueuses."
      },
      {
        "questionText": "Citez dans l'ordre les étapes de l'examen clinique",
        "options": [
          "Examen exo-buccal, Examen endo-buccal, Interrogatoire, Examen complémentaire",
          "Interrogatoire, Examen exo-buccal, Examen endo-buccal, Examen complémentaire",
          "Interrogatoire, Examen endo-buccal, Examen exo-buccal, Examen complémentaire",
          "Examen complémentaire, Interrogatoire, Examen exo-buccal, Examen endo-buccal"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'ordre logique et standard de l'examen clinique est : 1. Interrogatoire, 2. Examen exo-buccal, 3. Examen endo-buccal, 4. Examens complémentaires (si nécessaires)."
      }
    ]
  },
  {
    "title": "Anomalies dentaires",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°1 (2024 RATT - Q466\nLa gémination:",
        "options": [
          "Est une dysmorphie coronaire,",
          "Est le déplacement de la dent au sein du maxillaire.",
          "Est l'union de deux germes dentaires.",
          "Peut être confondue avec la fusion"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-faux : La gémination, lorsqu'elle est incomplète, touche principalement la couronne de la dent, créant une apparence élargie ou bifide. En revanche, si elle est complète, elle affecte l'ensemble de la dent, y compris la racine.b-faux :c’est l’éruption dentaire est le déplacement du la dent au sein de maxillairec-faux : c'est la fusion est l’union de deux germes dentaires.d-vrais ,Cliniquement, il est parfois difficile de différencier la fusion de la gémination dentaire. C'est pourquoi un nom unique est donné à ces deux anomalies: la «dent double »."
      },
      {
        "questionText": "N°20 (2018 Synthèse - Q2104\nDéfinissez : L'ectopie L'hétérotopie Anodontie La dilacération",
        "options": [
          "Est une anomalie de structure héréditaire",
          "Peut être confondue avec le taurodonitisme.",
          "Survient quand un traumatisme mécanique affecte une dent temporaire et se répercute au niveau du germe définitif.",
          "Est une dysmorphie coronaire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a-faux :La dilacération est une anomalies de forme de la racine .La c-c-vrais :la dilacération est une modification de l'axe llongitudinal de la dent et se caractérise par une angulation, qui peut être radiculaire, coronaire ou à la jonction corono-radiculaire, elle survient suite à un traumatisme sur le germe, on parle de dent en forme de « faux » ou de « faucille ».b-faux :la Taurodontisme est caractérisé par des dents dont la chambre pulpaire s'étend bien au- delà du collet, avec une hauteur apico-occlusale plus grande que normalement.d-faux :la dilacération est une dysmorphie radiculaire."
      },
      {
        "questionText": "N°6 (2024 EMD - Q570\nLa forme hypoplasique de l’amélogénèse imparfaite",
        "options": [
          "Correspond à une déficience de la quantité d'email",
          "Atteint particulièrement les molaires temporaires",
          "Est caractérisée par une minéralisation normale de l'émail contrairement aux autres formes",
          "Est une anomalie acquise"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le terme d'amélogenèse imparfaite regroupe un ensemble d'anomalies de structure de l'organe dentaire héréditaires, qui affecte l'émail pendant sa formation. Cette pathologie modifie l'apparence de l'émail (en qualité ou quantité) et s'accompagne souvent de sensibilités dentaires. Elle touche toutes ou quasi toutes les dents des deux dentures."
      },
      {
        "questionText": "N°7 (2024 RATT - Q584\nL'inclusion des dents permanentes est généralement due à :",
        "options": [
          "Une anomalie de croissance de l'os alvéolaire",
          "Une évolution d'une maladie carieuse,",
          "La présence d'un odontome ou dents surnuméraires.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les Inclusion des dents permanentes est généralement due à des facteurs locaux:-malposition du germe,-espace insuffisant sur l'arcade,-obstacle sur le chemin d'éruption (dent surnuméraire, odontome, kyste),-anomalie de morphologie du germe,-muqueuse gingivale épaisse et fibreuse,-anomalie de croissance de l'os alvéolaire."
      },
      {
        "questionText": "N°14 (2024 EMD - Q716\nDans la dentinogénèse imparfaite de type 1:",
        "options": [
          "La denture permanente est moins atteinte que la denture temporaire.",
          "Il n'y a pas d'atteinte osseuse",
          "La radiographie panoramique montre une anomalie de forme dentaire très caractéristique",
          "Présente les mêmes caractéristiques cliniques que la dentinogénèse imparfaite de type II."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "🡪 Dentinogénèse imparfaite de type I: Survient toujours chez un patient touché par une ostéogénèse imparfaite. La pathologie affecte les deux dentures à différents degrés, la denture temporaire est, dans de nombreux cas, plus touchée que la denture permanente. \n🡪Radiologiquement les dents présentent des racines courtes, étroites et une oblitération pulpaire qui a lieu soit avant soit juste après l'éruption."
      },
      {
        "questionText": "N°5 (2021 EMD - Q1636\nDans la dentinogénèse imparfaite de type I:",
        "options": [
          "Est toujours associée à des signes généraux.",
          "Est souvent confondue avec l'amélogénèse imparfaite",
          "Affecte les deux dentures à des degrés différents.",
          "Est une anomalie de structure où seules les couronnes dentaires présentent une altération."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a- vrai: Dans la dentinogénèse imparfaite de type 1, la denture permanent est moins atteinte que la denture temporaire. Les dents temporaires sont souvent plus sévèrement affectées.b-faux : La dentinogénèse imparfaite de type 1 est souvent associée à une ostéogenèse imparfaite, donc il peut y avoir une atteinte osseuse.c- vrai : La radiographie panoramique montre des anomalies de forme dentaire, comme des racines courtes, étroites coniques et des oblitérations pulpaire qui a lieu soit avant soit juste après l'éruption.d- vrai : la dentinogenèse imparfaite de type II présente de nombreuses similitudes cliniques et radiologiques avec le type I."
      },
      {
        "questionText": "L'amélogénèse imparfaite",
        "options": [
          "Regroupe un ensemble d'anomalies de structure de l'organe dentaire.",
          "Modifie l'apparence de l'émail et s'accompagne souvent de sensibilités dentaires",
          "Affecte toutes ou quasi toutes les dents des deux dentures.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L'amélogenèse imparfaite regroupe des anomalies héréditaires de la structure de l'émail, modifiant son apparence et sa résistance. Elle affecte généralement toutes les dents des deux dentures et s'accompagne de sensibilités."
      },
      {
        "questionText": "N°5 (2023 EMD - Q924\nLa dilacération dentaire :",
        "options": [
          "Est une modification de l'axe longitudinal de la dent.",
          "Se caractérise par une angulation, qui peut être radiculaire, coronaire ou à la jonction corono-radiculaire.",
          "Elle survient suite à un traumatisme sur le germe dentaire.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La dilacération est une modification de l'axe longitudinal de la dent et se caractérise par une angulation, qui peut être radiculaire, coronaire ou à la jonction corono-radiculaire, elle survient suite à un traumatisme sur le germe, on parle de dent en forme de faux ou de faucille »."
      },
      {
        "questionText": "N°17 (2023 RATT - Q1155\nLes agénésies dentaires:",
        "options": [
          "Concernent la denture définitive et/ou lactéale.",
          "Sont beaucoup moins fréquentes en denture temporaire qu'en denture permanente.",
          "Le diagnostic des agénésies repose sur plusieurs éléments cliniques et radiologiques.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les agénésies peuvent concerner la denture définitive et/ou lactéale Elles sont beaucoup moins fréquentes en denture temporaire qu'en denture permanente.Le diagnostic des agénésies ne repose pas sur un signe particulier mais sur plusieurs éléments cliniques et radiologiques.Agénésie dentaire"
      },
      {
        "questionText": "N°9 (2022 EMD - Q1364\nLa concrescence:",
        "options": [
          "Se présente cliniquement comme une large couronne avec une fente verticale.",
          "Se distingue de la fusion en comptant le nombre de dents présentes dans chaque arcade.",
          "Est due à une prolifération anormale du cément.",
          "Peut être mise en évidence lors d'un examen radiographique."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "a-faux : L'anomalie dentaire qui apparaît généralement comme une large couronne avec une fente verticale est la **dente en double** ou **dente fusionnée**.b-faux :la gémination se distingue de la fusion en comptant le nombre de dents présentes dans chaque arcade .c-vrai: La concrescence résulte de la soudure de deux dents par le cément. Elle est due à une prolifération anormale du cément .d- Vrai: La concrescence peut être mise en évidence par des radiographies, qui montrent la fusion des racines des dents concernées et permettent de visualiser la continuité du cément entre elles."
      },
      {
        "questionText": "N°7 (2021 EMD - Q1658\nLe taurodontisme:",
        "options": [
          "Est une dysmorphie coronaire.",
          "Survient quand un traumatisme mécanique affecte une dent temporaire.",
          "Affecte habituellement les molaires.",
          "Peut constituer une entité clinique isolée ou être associé à une amélogénèse imparfaite."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "A-faux : Le taurodontisme est mieux décrit comme une anomalie de forme radiculaire. Et non une dysmorphie coronaire.b-faux : Le taurodontisme n'est pas directement lié à des traumatismes mécaniques sur les dents temporaires. Il est une anomalie de développement d'origine génétique.c-vrai : Le taurodontisme est une anomalie principalement observée dans les molaires, caractérisée par une chambre pulpaire étendue.d-vrai :Le taurodontisme peut apparaître seul ou en association avec d'autres troubles dentaires comme l'amélogénèse imparfaite type 4."
      },
      {
        "questionText": "N°8 (2020 EMD - Q1916\nL'agénésie dentaire",
        "options": [
          "Est définie par l'absence d'une ou plusieurs dents sur arcade",
          "Est la conséquence de l'union de deux germes dentaires",
          "Affecte principalement la denture temporaire",
          "Peut être associée à plusieurs syndromes"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Voici une analyse des affirmations concernant l'agénésie dentaire :\n  \n A- **Vrai** : L'agénésie dentaire est définie par l'absence congénitale d'une ou plusieurs dents sur l'arcade dentaire, en raison du non-développement des germes dentaires correspondants.\n  \n B- **Faux** : L'agénésie n'est pas causée par l'union de deux germes dentaires. Ce phénomène est plutôt associé à la fusion dentaire, une anomalie de développement différente.\n  \n C- **Faux** : L'agénésie affecte plus fréquemment la denture permanente que la denture temporaire. Les dents les plus souvent concernées sont les incisives latérales supérieures et les deuxièmes prémolaires.\n  \n D- **Vrai** : L'agénésie dentaire peut être associée à plusieurs syndromes génétiques, comme le syndrome de Down, le syndrome d'Ellis-van Creveld ou la dysplasie ectodermique.\n  \n Donc, les réponses correctes sont : **A et D.**"
      },
      {
        "questionText": "La dentinogénèse imparfaite :",
        "options": [
          "Est une maladie héréditaire.",
          "Est transmise selon le mode autosomique récessif",
          "Se caractérise par un trouble de la minéralisation et par des défauts de la microstructure de la dentine.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "La dentinogenèse imparfaite est une maladie héréditaire de la dentine, transmise selon un mode autosomique dominant (non récessif), et se caractérise par des défauts de sa microstructure."
      },
      {
        "questionText": "N°20 (2020 EMD - Q1952\nParmi ces propositions, laquelle (lesquelles) est (sont) juste (s) :",
        "options": [
          "Le mésiodens est une dent dysmorphique, le plus souvent conoïde",
          "Le tubercule de Bolk est une dysmorphie corons radiculaire",
          "La dilacération peut être confondue avec le traurodonisme",
          "Une dent ectopique est une dent située en dehors de son couloir d'éruption"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Le mésiodens est une dent surnuméraire souvent de forme conoïde. Une dent ectopique est une dent qui a fait son éruption dans un site anormal, en dehors de son couloir d'éruption normal."
      },
      {
        "questionText": "N°10 (2019 EMD - Q2003\nLe mésiodens :",
        "options": [
          "Est une anomalie dentaire de structure",
          "Désigne une dent dysmorphique, le plus souvent conoïde.",
          "Est susceptible d'entraver l'éruption des dents permanente",
          "Siège le plus souvent en juxta-palatin des prémolaires."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "A- Faux : Le mésiodens est une anomalie dentaire de nombre, pas de structure. Il s'agit d'une dent surnuméraire.B- Vrai :Un mésiodens est généralement une dent dysmorphique, souvent de forme conoïde.C- faux : Il peut entraver l'éruption des incisives permanentes.D- Faux : Le mésiodens siège le plus souvent dans la région antérieure du maxillaire, entre les deux incisives centrales."
      },
      {
        "questionText": "N°15 (2019 EMD - Q2015\nL'agénésie:",
        "options": [
          "Est définie par i absence d'une dent sur arcade",
          "Est une anomalie beaucoup plus fréquente en dentur: temporaire",
          "Peut être associée à d'autres anomalies, dans de nombreux syndromes.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A-faux : L'agénésie est effectivement définie par l'absence d'une ou plusieurs dents sur l'arcade.B-faux :L'agénésie est plus fréquente en denture permanente qu'en denture temporaire.C-Vrai : L'agénésie peut être associée à d'autres anomalies dans divers syndromes génétiques, comme le syndrome de Down ou le syndrome de cleft lip and palate."
      },
      {
        "questionText": "Définissez : A. L'ectopie B. L'hétérotopie C. Anodontie D. La dilacération",
        "options": [
          "A: angulation, B: absence totale, C: hors maxillaire, D: site éloigné",
          "A: site éloigné, B: hors maxillaire, C: absence totale, D: angulation",
          "A: hors maxillaire, B: site éloigné, C: angulation, D: absence totale",
          "A: absence totale, B: angulation, C: site éloigné, D: hors maxillaire"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Ectopie: éruption dans un site éloigné mais au niveau du maxillaire. B. Hétérotopie: dent située en dehors des maxillaires. C. Anodontie: absence congénitale totale de dents. D. Dilacération: angulation anormale de la dent."
      }
    ]
  },
  {
    "title": "Anesthésie en odontostomatologie",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°2 (2024 EMD - Q487\nDans une carpule anesthésique, le produit est sous forme:",
        "options": [
          "Non ionisée",
          "Ionisée",
          "Diffusible",
          "Non diffusible."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Les caractéristiques d'un anesthésique dans une carpule incluent souvent sa capacité de diffusion et sa non-ionisation :\n🡪La diffusion se réfère à la capacité de l'anesthésique à se propager à travers les tissus pour atteindre les terminaisons nerveuses et produire l'analgésie. Un anesthésique diffusable est capable de se propager efficacement, ce qui est généralement souhaitable pour assurer une anesthésie adéquate.\n🡪Le produit anesthésique contenu dans la carpule est non ionisable , ce qui le rend moins sensible aux variations de pH des tissus qu'il traverse. Il ne devient ionisable qu'une fois qu'il atteint la membrane interne des fibres nerveuses, permettant ainsi d'exercer son effet."
      },
      {
        "questionText": "N°1 (2019 RATT - Q1967\nParmi les contre-indications des vasoconstricteurs :",
        "options": [
          "Hémophilie.",
          "Femme enceinte",
          "Diabète équilibré.",
          "Tumeur de la médullo-surrénale."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les vasoconstricteurs sont absolument contre-indiqués en cas de tumeur de la médullo-surrénale (phéochromocytome) et d'hypertension artérielle non équilibrée. Leur utilisation est possible avec précaution chez les diabétiques équilibrés."
      },
      {
        "questionText": "N°20 (2021 EMD - Q1885\nL'anesthésie tronculaire à l'épine de Spix:",
        "options": [
          "Complétée par une anesthésie muqueuse.",
          "Utilisée pour l'extraction des dents maxillaires.",
          "Utilisée pour l'extraction du bloc incisivo-canin mandibulaire.",
          "Toujours complétée par une anesthésie intra-septale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-la muqueuse vestibulaire est innervée par le nerf buccal, elle nécessite donc une anesthésie péri-apicale du coté vestibulaire.\nB et c -faux: l’anesthésie tranculaire à l’épine de spix indiquée pour l’extraction des molaires mandibulaires en raison de l’efficacité de l’anesthésie paraapicale à ce niveau (corticales épaisses)\n\nd- l’anesthésie intra-septale Indiquée en cas d’anesthésie conventionnelle inadaptée ou contre-indiquée, particulièrement dans les cas d’arthrite dentaire."
      },
      {
        "questionText": "N°12 (2024 RATT - Q684\nLors de phénomènes inflammatoires, le milieu dans lequel on injecte le produit anesthésique est déjà acide, le produit est donc :",
        "options": [
          "Immédiatement activé.",
          "Immédiatement diffusé.",
          "Ne diffuse pas",
          "Non ionisé"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "En cas d'inflammation, l'anesthésique ne se diffuse pas et activé immédiatement car la solution anesthésique est plus efficace dans un milieu acide. Normalement, elle trouve cet environnement en atteignant la paroi interne du nerf. Cependant, en cas de réaction inflammatoire, dès que la solution est injectée, elle rencontre un milieu acide, ce qui provoque sa ionisation et empêche sa diffusion, réduisant ainsi son efficacité."
      },
      {
        "questionText": "N°9 (2018 Synthèse - Q2071\nL'anesthésie de surface est :",
        "options": [
          "Indiquée en cas d'un drainage exobuccal",
          "Peut être utilisée au niveau cutané",
          "Généralement commercialisée sous formes de carpules de 1.8ml.",
          "Suffit pour l'avulsion des dents de lait"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "b-vrais : L'action de l'anesthésie de surface consiste à insensibiliser temporairement la muqueuse ou la peau par contact direct avec un anesthésique local.c-faux : Les solutions anesthésiques de surface sont conditionnées en sprays, sous forme de gel,de crème, de liquide ou imprégnants de boulettes de coton ou de buvard.d- faux : L'anesthésie de surface est généralement insuffisante pour une avulsion d'une dent de lait surtout si la dent est complète et que la rhizalyses de la racine ne s'est pas encore faite. Bien qu'elle puisse engourdir la muqueuse, elle ne pénètre pas assez profondément pour bloquer la douleur liée à l'extraction de la dent."
      },
      {
        "questionText": "N°17 (2024 EMD - Q770\nLe vasoconstricteur présente l'avantage:",
        "options": [
          "D'augmenter la résorption de la molécule.",
          "De diminuer la résorption de la molécule.",
          "D'augmenter la durée d'anesthésie.",
          "D'augmenter le saignement pendant les actes chirurgicaux."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Le vasoconstricteur (comme l'adrénaline) diminue le flux sanguin local, ce qui a deux avantages majeurs : il diminue la résorption de l'anesthésique (le maintenant plus longtemps sur site) et augmente ainsi sa durée d'action."
      },
      {
        "questionText": "N°7 (2019 RATT - Q1991\nL'anesthésie intra-ligamentaire : Cochez les réponses justes",
        "options": [
          "Consiste à infiltrer la solution analgésique dans le desmodonte.",
          "Est indiquée pour l'extraction des molaires.",
          "Est parfois utilisée en complément d'une anesthésie para-apicale.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "a-vrais : l’anesthésie intra-ligamentaire consiste à infiltrer l’anesthésie dans le desmodonte, à l’aide d’une aiguille fine et rigide.b-faux :L'anesthésie intra-ligamentaire ne suffit pas pour l'extraction des molaires, surtout des molaires inférieures, en raison de la complexité de l'innervation et de la densité osseuse dans cette région. Cependant, elle peut être utilisée pour compléter une autre anesthésie.c-vrais : L'anesthésie intra-ligamentaire est parfois utilisée pour compléter une anesthésie par infiltration para-apicale(ou anesthésie locale) dans des situations où une  desmodontite (inflammation du ligament alvéolo-dentaire) est présente.cette technique est donc utile pour renforcer l'effet anesthésique et améliorer le confort du patient lors de procédures comme l'extraction dentaire."
      },
      {
        "questionText": "N°19 (2024 RATT - Q800\nLes accidents allergiques immédiats liés aux anesthésiques locaux:",
        "options": [
          "Sont fréquents.",
          "Sont souvent dus aux conservateurs et aux stabilisants présents dans la carpule.",
          "Se voient surtout avec les molécules amino-esters.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "a-Faux :Les réactions allergiques immédiates aux anesthésiques locaux sont rares.b-vrais: Les réactions allergiques sont plus souvent dues aux conservateurs, comme le parahydroxybenzoate de méthyle (parabène) ou aux stabilisants, plutôt qu'à l'anesthésique lui-même.c-vrais : Les anesthésiques locaux de la famille des amino-esters, comme la procaïne, sont plus susceptibles de provoquer des réactions allergiques que les anesthésiques de la famille des amino-amides."
      },
      {
        "questionText": "N°10 (2023 RATT - Q1021\nLa dépolarisation est due à :",
        "options": [
          "La sortie du potassium de la fibre nerveuse à partir de liquide extracellulaire.",
          "La sortie du sodium de la fifre nerveuse,",
          "L'entrée du sodium de la fibre nerveuse",
          "L'entrée du potassium de la fibre nerveuse."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a-faux : La sortie de potassium (K⁺) de la fibre nerveuse se produit lors de la repolarisation, qui est la phase suivant la dépolarisation.\n b-faux : La sortie de sodium (Na⁺) ne provoque pas la dépolarisation. \n c-vrais :La dépolarisation est liée à l’entrée du sodium dans la fibre nerveuse à partir du fluide extracellulaire grâce.\n d-faux :l'entrée du potassium dans la fibre nerveuse n'est pas impliquée dans la dépolarisation."
      },
      {
        "questionText": "L'anesthésie tronculaire à l'épine de spix est complétée par une:",
        "options": [
          "Anesthésie muqueuse.",
          "Anesthésie para-apicale.",
          "Anesthésie intra-ligamentaire.",
          "Anesthésie intra-septale."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'anesthésie tronculaire du nerf alvéolaire inférieur doit être complétée par une anesthésie para-apicale (infiltration) vestibulaire pour anesthésier le nerf buccal qui innerve la muqueuse de cette région."
      },
      {
        "questionText": "N°4 (2023 EMD - Q919\nLa mépivacaine est :",
        "options": [
          "Une solution anesthésique de la famille des amino-esters",
          "Contre-indiquée chez tous les malades à risque.",
          "La plus récente des anesthésiques locaux.",
          "Moins vasodilatatrice que la lidocaïne."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-faux :la mépivacaine est une solution anesthésique de la famille des amino-amides.\n b-faux : elle est moins vasodilatatrice que la lidocaine et peut être utilisée sans adjonction d’adrénaline et indiqué chez les hypertendus, les cardiaques, les diabétiques.\n c-faux : la mépivacaïne n'est pas la plus récente des anesthésiques locaux. Introduite dans les années 1950, elle est un anesthésique local amide, similaire à la lidocaïne, mais avec quelques différences dans son profil pharmacologique."
      },
      {
        "questionText": "N°16 (2021 EMD - Q1812\nL'infiltration du produit anesthésique se fait toujours à distance du foyer infectieux, car:",
        "options": [
          "L'effet anesthésique est moindre.",
          "Le risque d'allergie est augmenté.",
          "Il y a un risque hémorragique important",
          "Elle peut provoquer un essaimage bactérien à distance"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "a-vrais : Dans la carpule, l'anesthésique est sous forme non ionisée donc inactif mais diffusible. Il ne s'active qu'en milieu acide (intérieur de l'axone, lors de phénomènes inflammatoires, le milieu dans lequel on injecte l'anesthésique est déjà acide, le produit est donc immédiatement ionisé, activé et ne diffuse pas jusqu'à l'axone, rendant l'anesthésie moins efficace.\n b-faux :Le risque d'allergie n'est pas directement lié à l'injection dans une zone infectée. L'allergie dépend plus de la sensibilité individuelle au produit anesthésique utilisé.\n c-faux :Le risque hémorragique n'est pas particulièrement augmenté par l'injection d'anesthésique dans une zone infectée, bien que l'infection puisse parfois entraîner une fragilité vasculaire. Toutefois, ce n'est pas la raison principale pour éviter l'infiltration à cet endroit.\n d-vrais :Infiltrer un produit anesthésique directement dans une zone infectée pourrait favoriser la dispersion des bactéries, entraînant une dissémination de l'infection à d'autres zones du corps."
      },
      {
        "questionText": "L'anesthésie tronculaire à l'épine de Spix est complétée par :",
        "options": [
          "Une anesthésie locale muqueuse.",
          "Une anesthésie para-apicale.",
          "Une anesthésie intra-ligamentaire.",
          "Une anesthésie intra-septale."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Pour une anesthésie complète, l'anesthésie tronculaire à l'épine de Spix (qui endort le nerf alvéolaire inférieur) doit être complétée par une anesthésie para-apicale vestibulaire pour endormir le nerf buccal."
      },
      {
        "questionText": "N°14 (2023 EMD - Q1088\nParmi les techniques anesthésiques suivantes, laquelle est réalisée en deux temps:",
        "options": [
          "L'anesthésie intra-ligamentaire.",
          "L'anesthésie intra-pulpaire.",
          "L'anesthésie muqueuse.",
          "L'anesthésie para-apicale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les techniques anesthésiques mentionnées sont réalisées en une seule temps , à l'exception de la para-apicale, qui se réalise en deux étapes : d'abord avec 3/4 de la dose anesthésique du côté vestibulaire, puis 1/4 du côté palatin."
      },
      {
        "questionText": "N°18 (2023 RATT - Q1171\nL'adjonction d'adrénaline aux anesthésiques locaux présente l'avantage:",
        "options": [
          "De diminuer la résorption de la molécule.",
          "D'augmenter la résorption de la molécule",
          "D'augmenter la durée d'anesthésie.",
          "D'augmenter le saignement pendant les actes chirurgicaux."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'adrénaline (vasoconstricteur) diminue le calibre des vaisseaux sanguins, ce qui diminue la résorption de l'anesthésique et prolonge ainsi sa durée d'action. Cela diminue également le saignement."
      },
      {
        "questionText": "N°20 (2023 RATT - Q1194\nLes anesthésiques locaux sont différents par:",
        "options": [
          "Le pKa",
          "La capacité de liaison aux protéines",
          "Le mode de conditionnement des carpules d'anesthésie.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Les AL sont différents par :\n a-Leur pKa (valeur du pH pour laquelle la solution est à 50 % ionisée), qui détermine le délai d’installation.\n b- Leur capacité de liaison aux protéines, qui détermine la durée d’action."
      },
      {
        "questionText": "N°5 (2022 EMD - Q1291\nL'influx nerveux est bloqué par les anesthésiques locaux :",
        "options": [
          "En inhibant le flux potassique entrant.",
          "En inhibant le flux sodique entrant.",
          "En inhibant le flux potassique sortant.",
          "En inhibant le flux sodique sortant."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le mécanisme d'action des anesthésiques locaux est de bloquer les canaux sodiques de la membrane nerveuse, empêchant ainsi l'entrée du sodium (flux sodique entrant) et la dépolarisation nécessaire à la propagation de l'influx nerveux."
      },
      {
        "questionText": "N°6 (2021 EMD - Q1641\nLe Tétrafluorodichloroethane (Friljeta):",
        "options": [
          "Est utilisé pour une anesthésie par réfrigération.",
          "Est utilisé pour une anesthésie par infiltration,",
          "Est indiquée en pré anesthésie chez les sujets anxieux.",
          "Est indiqué pour l'avulsion de dent monoradiculée."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "a-vrai : Le FRIJET est un produit de réfrigération utilisé pour obtenir une anesthésie de surface par refroidissement rapide des tissus, ce qui réduit la douleur au moment des interventions.b-faux : Le FRIJET n'est pas utilisé pour l'anesthésie par infiltration. Il s'agit d'une méthode de réfrigération et non d'une technique d'infiltration.c-vrai : L’utilisation de FRIJET en pré-anesthésie chez les patients anxieux est justifiée par ses propriétés sédatives et anxiolytiques. En effet, FRIJET aide à réduire l'anxiété préopératoire, facilitant ainsi l'induction anesthésique et améliorant l'expérience globale du patientd-faux : Bien que le FRIJET puisse être utilisé pour diverses procédures dentaires comme :- Incision d’abcès- Préparation à l’anesthésie par injection- Taille de moignons, pose de couronne…- Détartrage juxta et sous gingival.- Élimination de séquestres osseux très mobiles.- Serrage des fils de blocage maxillaire.- L’abolition du réflexe nauséeux.il n'est pas spécifiquement indiqué pour l'extraction des dents,L'avulsion de dents peut nécessiter d'autres types d'anesthésie plus adaptés."
      },
      {
        "questionText": "N°12 (2022 EMD - Q1408\nLe risque d'une nécrose osseuse peut être retrouvé suite:",
        "options": [
          "A une anesthésie tronculaire à l'épine de Spix.",
          "A une anesthésie intra-osseuse.",
          "A une anesthésie locale au niveau du palais.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "a-faux :  L'anesthésie tronculaire à l'épine de Spix (nerf mandibulaire) est généralement bien tolérée et n'est pas associée à un risque significatif de nécrose osseuse.b-vrai: L'anesthésie intra-osseuse implique l'injection de l'anesthésique directement dans l'os alvéolaire. Si elle est mal effectuée ou si une infection se développe, cela peut potentiellement entraîner une nécrose osseuse.c-vrai :le risque de nécrose osseuse peut également être associé à une anesthésie locale au niveau du palais."
      },
      {
        "questionText": "L'anesthésie tronculaire à l'épine de Spix:",
        "options": [
          "Est indiquée pour l'avulsion des incisives mandibulaires",
          "Est réalisée chez les patients sous anticoagulants",
          "Se fait avec vasoconstricteur.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Aucune réponse n'est juste. Elle est indiquée pour les molaires mandibulaires, elle est contre-indiquée chez les patients sous anticoagulants sans précaution (risque d'hématome), et se fait souvent sans vasoconstricteur."
      },
      {
        "questionText": "N°2 (2020 EMD - Q1900\nL'analgésie du nerf alvéolaire inférieur:",
        "options": [
          "Nécessite une technique d'anesthésie tronculaire à la lingula (épine de Spix)",
          "Peut être obtenue par une technique d'anesthésie locale",
          "Est indiquée pour l'extraction des molaires mandibulaires",
          "Se fait à l'aide d'un porte campule ordinaire"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "A-Vrai :L'analgésie du nerf alvéolaire inférieur nécessite en effet une technique d'anesthésie tronculaire au niveau de la lingula, également connue sous le nom d'épine de Spix, où passe ce nerf.B- Faux : L'anesthésie locale (infiltration) n'est généralement pas suffisante pour atteindre le nerf alvéolaire inférieur en raison de la densité de l'os mandibulaire. Une anesthésie tronculaire est nécessaire pour engourdir efficacement les structures innervées par ce nerf.C- Vrai :L'analgésie du nerf alvéolaire inférieur est indiquée pour les extractions des molaires mandibulaires.D-faux : L'anesthésie se fait avec un port carpule I.M, jetable à aiguille longue"
      },
      {
        "questionText": "N°10 (2021 EMD - Q1713\nLes vasoconstricteurs:",
        "options": [
          "Diminuent le saignement per-opératoire.",
          "Son contre-indiqués chez l'hémophile",
          "Augmentent la durée d'anesthésie",
          "Augmentent la diffusion de l’anesthésie."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "a-vrai: Les vasoconstricteurs, réduisent le flux sanguin local, ce qui aide à diminuer le saignement pendant les interventions chirurgicales.b-faux. Les vasoconstricteurs ne sont pas contre-indiqués chez les hémophiles. En fait, ils peuvent être utiles pour minimiser les saignements. Cependant, a ne pas utiliser chez les malades sous biphosohonates, en cas d’irradiation cervico-faciale, ou certaines cardiopathies.c-vrai :En réduisant la vascularisation de la zone, les vasoconstricteurs retardent l'absorption de l'anesthésique, prolongeant ainsi son effet.D-faux : Les vasoconstricteurs réduisent la diffusion de l'anesthésie en diminuant le flux sanguin local, ce qui permet de maintenir l'anesthésique sur le site d'injection plus longtemps, augmentant son efficacité locale et non sa diffusion."
      },
      {
        "questionText": "N°12 (2020 EMD - Q1927\nL'anesthésie para-apicale:",
        "options": [
          "Est une technique régionale courante",
          "Est indiquée pour l'extraction des mobiles supérieure",
          "Est suffisante pour les prémolaires inférieure",
          "peut être complétée par une infiltration"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'anesthésie para-apicale est une technique d'infiltration locale (non régionale). Elle est efficace pour les dents supérieures. Elle peut être complétée par une autre infiltration (palatine/linguale) si nécessaire."
      },
      {
        "questionText": "N°15 (2020 EMD - Q1937\nL'articaine est :",
        "options": [
          "Faiblement dosée en vasoconstricteur",
          "Est métabolisée au niveau hépatique",
          "Fait partie de la famille des amino ester",
          "Est réservée à l'adulte"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "C : Faux. L'articaine fait partie de la **famille des amino-amides**, bien qu'elle ait une structure unique avec un groupement ester supplémentaire qui la rend plus rapidement métabolisée.\n  \n B- Faux. L'articaine peut être utilisée chez les enfants, à condition de respecter les doses appropriées. Elle n'est donc pas exclusivement réservée aux adultes."
      },
      {
        "questionText": "N°2 (2019 EMD - Q1971\nL'anesthésie tronculaire à la Lingula:",
        "options": [
          "Est indiquée pour l'extraction de la 36,",
          "Est contre indiquée en cas de trouble d'hémostase chez le patient",
          "Se fait souvent avec VC",
          "Est utilisée de préférence pour une chirurgie au maxillaire supérieur."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "A- Vrai :L'anesthésie tronculaire à la Lingula (ou anesthésie du nerf alvéolaire inférieur) est couramment utilisée pour les extractions des molaires mandibulaires, comme la 36.B- Vrai :L'anesthésie tronculaire effectivement contre-indiquée en cas de troubles de l'hémostase,( chez les hémophiles, malade sous anticoagulant…)C-Faux : la décision d'utiliser un vasoconstricteur dans le cadre de l'anesthésie à l'épine de Spix est souvent basée sur les besoins spécifiques de la chirurgie et les caractéristiques individuelles du patient.D-faux : L'anesthésie tronculaire à la Lingula est utilisée pour la mandibule, pas pour des interventions au niveau du maxillaire supérieur."
      },
      {
        "questionText": "Les vasoconstricteurs",
        "options": [
          "Permettent d'accélérer la diffusion des AL",
          "A forte dose peuvent entrainer un malaise cardiaque",
          "Sont contre indiqués en cas d'hypertension artérielle non équilibré",
          "L'adrénaline est un vasoconstricteur de synthèse"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "À forte dose, les vasoconstricteurs peuvent causer un malaise cardiaque. Ils sont contre-indiqués en cas d'hypertension non contrôlée. Ils ralentissent la diffusion des anesthésiques locaux."
      },
      {
        "questionText": "N°6 (2019 EMD - Q1986\nLes anesthésiques locaux doivent avoir:",
        "options": [
          "Une activité spécifique transitoire et irréversible.",
          "Une action non irritante pour les tissus",
          "Un délai d'action lent",
          "Solubles dans l'eau et les graisses"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "A-Faux : L'activité spécifique des anesthésiques locaux doit être transitoire et réversible pas irréversible. Ils doivent bloquer temporairement la conduction nerveuse sans causer de dommages permanents.B-Vrai :Un bon anesthésique local doit être non irritant pour les tissus afin de minimiser les réactions inflammatoires.C-faux : délai d'action doit être rapide, pas lent, pour que l'anesthésie soit efficace en un temps raisonnable.D-Vrai : L'anesthésie doit être soluble dans l'eau (pour être injecté) et dans les graisses (pour traverser les membranes cellulaires et atteindre les nerfs)."
      },
      {
        "questionText": "N°12 (2019 EMD - Q2008\nParmi les causes d'échec d'une anesthésie buccale:",
        "options": [
          "Abaissement du pH des tissus (l'anesthésique ne pénètre pas les tissus nerveux).",
          "L'importance de l'épaisseur de la table externe du maxillaire.",
          "Absence d'anastomoses.",
          "Injection d'une quantité insuffisante d'anesthésique"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "A-Vrai :Un pH bas dans les tissus peut réduire l'efficacité de l'anesthésie en empêchant le médicament de ionisée et pénétrer correctement dans les nerfs .\n  \n B-faux  Les tables osseuses sont plus minces dans le maxillaire que dans la mandibule .\n  \n C-Faux :l’absence d'anastomose nerveuse est généralement un facteur moins influent dans l'échec de l'anesthésie, puisque l'anesthésie est souvent ciblée sur des nerfs spécifiques.\n D-Vrai : Une quantité insuffisante d'anesthésique peut effectivement mener à un échec de l'anesthésie, car elle peut ne pas couvrir suffisamment la zone nécessaire."
      },
      {
        "questionText": "N°9 (2019 RATT - Q1999\nPour l'extraction de la 46, quelle technique d'anesthésie peut-on utiliser ?",
        "options": [
          "Une anesthésie loco-régionale du nerf alvéolaire inférieur",
          "Une anesthésie para-apicale vestibulaire",
          "Une anesthésie tronculaire de l'épine de spix avec complément du coté lingual",
          "Une anesthésie loco-régionale au foramen mandibulaire"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "A :Vrai : C'est une technique appropriée pour des extractions des molaires  mandibulaires, car elle anesthésie l'ensemble de la moitié inférieure de la mâchoire,B- Faux : Cette technique complète l'anesthésie tronculaire pour l'avulsion de la 46 (molaire inférieure droite).C- Faux :Une anesthésie tronculaire de l'épine de Spix avec complément du côté vestibulaire car la muqueuse vestibulaire est innervée par le nerf buccalD- Vrai: Cette technique est également connue sous le nom d'anesthésie du nerf alvéolaire inférieur et est très appropriée pour les extractions des molaires et prémolaires mandibulaires."
      },
      {
        "questionText": "Avec une carpule de 3% de scandicaine, et pour une personne de poids moyen de 65kg la dose toxique est atteinte à :",
        "options": [
          "10 carpules de 1.8ml",
          "06 carpules de 1.8ml",
          "08 carpules de 1.8ml",
          "04 carpules de 1.8ml"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Dose max recommandée = 6 mg/kg. Pour 65kg, la dose max est 390mg. Une carpule de 1.8ml à 3% contient 54mg (1.8 * 30). Donc, 390 / 54 ≈ 7.22 carpules. La dose toxique est atteinte à la 8ème carpule."
      },
      {
        "questionText": "N°8 (2018 Synthèse - Q2070\nLa durée d'action de l'anesthésique local dépend de :",
        "options": [
          "Le vasoconstricteur",
          "La vitesse d'injection",
          "Le site d'injection",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-Vrai: L'ajout d'un vasoconstricteur (comme l'adrénaline) permet de prolonger la durée d'action en réduisant la vascularisation locale, ce qui ralentit l'absorption de l'anesthésique et prolonge son effet.\n B et C sont fausses : La durée d’action :\n - Elle est conditionnée par la réserve des molécules qui constitue la quantité de substances liées aux protéines et dans les graisses"
      },
      {
        "questionText": "N°10 (2018 Synthèse - Q2074\nDans le cas d'une pulpectomie sur la 23:",
        "options": [
          "L'anesthésie de la muqueuse palatine est nécessaire",
          "L'anesthésie vestibulaire est complétée par une injection palatine",
          "L'anesthésie palatine se fait au trou rétro incisif",
          "L'anesthésie vestibulaire peut être complétée par une anesthésie intrapulpaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La pulpectomie d'une dent est un soin courant qui consiste, sous anesthésie locale, à retirer la pulpe de la dentA-faux :une anesthésie vestibulaire (pour couvrir la dent et ses tissus adjacents) est nécessaire et peut complétée par une injection palatine pour un confort optimal.D- Vrai.Pour des procédures telles qu'une pulpectomie, une anesthésie intra-pulpaire est parfois nécessaire si l'anesthésie vestibulaire n'est pas suffisante."
      },
      {
        "questionText": "N°11 (2018 Synthèse - Q2077\nL'anesthésie du nerf alvéolaire inférieur :",
        "options": [
          "Utilise un anesthésique avec vasoconstricteur",
          "Peut avoir comme complication un hématome latéro-pharyngé",
          "Doit être complétée par une injection vestibulaire pour une pulpectomie sur la 46",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A:Faux.L'anesthésique utilisé pour le bloc du nerf alvéolaire inférieur contient souvent un vasoconstricteur (comme l'adrénaline) pour prolonger l'effet anesthésique et réduire la saignabilité.B-Vrai.Une complication potentielle de l'anesthésie du nerf alvéolaire inférieur est l'hématome latéro-pharyngé, qui peut survenir si l'aiguille endommage un vaisseau sanguin près du nerf.Hématome﻿C-faux :Pour une procédure comme une pulpectomie sur la 46 (première molaire mandibulaire),Cependant,**une anesthésie vestibulaire peut être nécessaire en complément si l'extraction de la dent est prévue**"
      },
      {
        "questionText": "N°12 (2018 Synthèse - Q2081\nL'anesthésie intraosseuse :",
        "options": [
          "Peut remplacer une anesthésie du nerf alvéolaire inférieur à la lingula pour l'avulsion d'une 38",
          "Est réalisé avec le même matériel qu'une anesthésie tronculaire",
          "L'anesthésie de la muqueuse vestibulaire n'est pas nécessaire",
          "L'injection se fait au contact de la corticale vestibulaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-Vrai :L'anesthésie intra-osseuse s’agit de porter directement le produit anesthésique au contact des nerfs pour un effet anesthésique plus rapide, plus important et moins dangereux donc elle anesthésie le nerf alvéolaire inférieur.B- Faux.L'anesthésie intra-osseuse nécessite un matériel spécifique, notamment un dispositif d'injection qui permet de perforer la corticale osseuse et de délivrer l'anesthésique directement dans la cavité osseuse.C : Faux.L'anesthésie intra-osseuse ne couvre généralement pas les tissus mous vestibulaires, donc une anesthésie complémentaire dans cette zone est nécessaire pour des procédures telles que les extractions.D: Faux.Pour l'anesthésie intra-osseuse, en perforant la corticale osseuse (généralement la corticale vestibulaire) pour injecter le produit directement dans l’os spongieux ."
      },
      {
        "questionText": "L'anesthésie intra-ligamentaire : Cochez les réponses justes",
        "options": [
          "Est une anesthésie de surface",
          "Est indiqué en cas de desmodontite",
          "Est indiqué pour l'extraction des molaires",
          "Utilise une seringue spécifique"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "L'anesthésie intra-ligamentaire est utile en complément en cas de desmodontite. Elle nécessite une seringue spécifique à haute pression. Elle est insuffisante seule pour l'extraction de molaires."
      },
      {
        "questionText": "N°6 (2018 Synthèse - Q2061\nAvec une carpule de 3% de scandicaine, et pour une personne de poids moyen de 65kg/////toxique est atteinte à :",
        "options": [
          "10 carpules de 1.8ml",
          "06 carpules de 1.8ml",
          "08 carpules de 1.8ml",
          "04 carpules de 1.8ml"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "il est important de calculer la dose maximale tolérée de Scandicaine (mépivacaïne) pour une personne de 65 kg.\n  \n - La dose maximale recommandée de mépivacaïne (sans vasoconstricteur) est généralement de **6 mg/kg**.\n - Pour une personne de **65 kg**, la dose maximale sera de :\n  6×65=390mg\n  \n Chaque carpule de 1,8 ml de Scandicaine à 3 % contient :\n 3g/100ml=30mg/ml\n 1.8×30=54mg/carpule\n  \n Maintenant, pour trouver combien de carpules sont nécessaires pour atteindre la dose toxique de 390 mg :\n 390/54=7.22\n Donc, la dose toxique est atteinte à **un peu plus de 7 carpules**.\n  \n La réponse correcte est donc :\n **C- 08 Carpules de 1,8 ml**."
      }
    ]
  },
  {
    "title": "Techniques simples d'extractions dentaires",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°3 (2024 EMD - Q503\nLe temps alvéolaire:",
        "options": [
          "Consiste à éliminer le tissu de granulation",
          "Sera suivi obligatoirement par la réalisation de sutures afin de prévenir une éventuelle hémorragie.",
          "Permet de retirer le fragment osseux fracturé",
          "Ne concerne que les dents pluriradiculées."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Temps alvéolaire= Révision alvéolaire = Curetage alvéolaire : À l'aide de curettes, il s'agit d'explorer l'alvéole vide pour retirer les débris tissulaires éventuels, qu'ils soient osseux, dentaires, kystiques ou granulaires, après l'extraction de toutes les dents.\n\nb-Pendant le temps gingival, en cas de trouble de l’hémostase, il faut suturer la muqueuse après avoir placé un produit hémostatique résorbable à l'intérieur de l’alvéole."
      },
      {
        "questionText": "N°2 (2019 RATT - Q1973\nPour les conseils post-opératoires, il faut prescrire :",
        "options": [
          "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse,",
          "Une alimentation chaude le premier jour.",
          "Un antalgique type salicylé pour diminuer les douleurs post-extractionnelles.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A -Faux :. Il estt conseillé d'éviter les bains de bouche dans les 24 premières heures après l'intervention, car cela pourrait perturber la formation du caillot sanguin nécessaire à la cicatrisation.\n  \n B- :Faux. Il est conseillé de privilégier une alimentation froide ou tiède dans les premières heures/jours pour éviter d'augmenter l'inflammation ou de perturber la cicatrisation.\n  \n C-Faux : Les médicaments à base de salicylés, comme l'aspirine, peuvent augmenter le risque de saignement. Il est donc préférable d'utiliser d'autres antalgiques comme le paracétamol."
      },
      {
        "questionText": "N°9 (2021 EMD - Q1692\nLors de la luxation:",
        "options": [
          "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent voisine.",
          "Le maintien des tables osseuses est nécessaire.",
          "L'opérateur se place devant et à gauche du patient pour les dents maxillaires",
          "L'instrument utilisé est un élévateur tenu à plein main"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A-vrai: La position du praticien est essentielle pour bien contrôler l'instrument et appliquer les forces de manière appropriée lors de la luxation dentaire, afin de minimiser les risques de complications.b-vrai :L'élévateur est généralement utilisé pour luxer la dent et est tenu à pleine main pour permettre un meilleur contrôle et une application précise des forces.c-faux : L'élévateur n'est pas utilisé pour sectionner les fibres épithéliales. Cet acte est réalisé avec un syndesmotome . L'élévateur sert à mobiliser la dent en exerçant une pression et en luxant progressivement la dent hors de son alvéole.d-faux : IL est déconseillé de prendre appui directement sur la dent adjacente, car cela pourrait causer des dommages à cette dent, comme une luxation ou des microfissures. L'élévateur doit être utilisé avec précaution pour minimiser le traumatisme sur les dents voisines."
      },
      {
        "questionText": "N°8 (2024 RATT - Q601\nL'instrumentation nécessaire pour l'avulsion dentaire simple est :",
        "options": [
          "Le syndesmotome.",
          "Le bistouri",
          "Le décolleur.",
          "La pince gouge."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "a-le syndesmotome permet de sectionner les fibres desmodontales de la dent à extraire, ce qui évite toute déchirure de la gencive lors de l’avulsion de la dent.b-faux : Bistouri : Appelé aussi scalpel, est un instrument utilisé en chirurgie pour faire des incisions.c-faux : Décolleurs : sont utilisés pour rétracter les tissus mous dans les procédures dentaires (décolle la muqueuse incisée du support osseux sous-jacent.d-faux : La pince gouge fait partie de l'instrumentation particulière utilisée en chirurgie buccale et en chirurgie buccale et en chirurgie parodontale dans les actes nécessitant des résections."
      },
      {
        "questionText": "N°16 (2024 RATT - Q745\nLe davier utilisé pour l'extraction de la 1 molaire supérieure comporte des :",
        "options": [
          "Mors symétriques, égaux, jointifs.",
          "Mors symétriques, égaux, sous forme de S allongé",
          "Mors asymétriques avec un ergot médian qui vient s'insérer dans la furcation vestibulaire",
          "Mors larges et longs, sans ergot médian."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "- Le davier pour l'extraction de la 1ère molaire supérieure est conçu avec des mors asymétriques sous forme de S allongé, dont un est plus large et comporte un ergot médian qui vient s'insérer dans la furcation vestibulaire.Ce type de mors permet une meilleure prise sur la dent, en particulier dans la région de la furcation, ce qui facilite l'extraction."
      },
      {
        "questionText": "N°14 (2018 Synthèse - Q2086\nApres une avulsion dentaire simple:",
        "options": [
          "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse.",
          "Une alimentation chaude le premier jour",
          "Systématiquement un antibiotique afin d'éviter une surinfection post-extractionnelle",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-faux : après une avulsion dentaire simple, il est recommandé d'éviter les bains de bouche pendant les 24 premières heures. Cela permet au caillot sanguin de se former et de se stabiliser dans le site d'extraction, ce qui est essentiel pour une bonne cicatrisation.\n b-faux :après une avulsion dentaire, il est conseillé de proscrire l\n  les boissons chaudes le premier jour. \n èles boissons chaudes peuvent dissoudre le caillot sanguin formé dans le site d'extraction, ce qui peut entraîner des complications comme l'alvéolite sèche.\n c-faux : La décision de prescrire un antibiotique dépend de divers facteurs, tels que le risque d'infection, l'état général du patient, et la complexité de l'extraction. Dans de nombreux cas, une bonne hygiène bucco-dentaire et des soins appropriés suffisent à prévenir une surinfection post-extractionnelle."
      },
      {
        "questionText": "N°18 (2022 EMD - Q1517\nL'extraction des incisives maxillaires droites:",
        "options": [
          "Le pouce est du côté vestibulaire, l'index en palatin.",
          "Le pouce est du côté palatin et l'index en vestibulaire.",
          "Les mouvements à effectuer sont une traction dans l'axe de la dent et une rotation.",
          "Les mouvements à effectuer sont des mouvements transversaux vestibulo-palatins à majoration vestibulaire."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Pour les incisives maxillaires, le pouce est placé côté vestibulaire et l'index côté palatin pour maintenir les tables osseuses. Les mouvements sont une combinaison de traction axiale et de rotation, car les racines sont généralement coniques."
      },
      {
        "questionText": "N°17 (2023 EMD - Q1148\nLe davier utilisé pour l'extraction de la 1ère prémolaire supérieure:",
        "options": [
          "Comporte des mors asymétriques avec un ergot médian qui vient s'insérer dans la furcation vestibulaire.",
          "Comporte des mors symétriques, égaux, jointifs.",
          "Comporte des mors symétriques, égaux, sous forme de S allongé.",
          "Sert indifféremment pour le côté droit et gauche."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "a-faux: Le davier utilisé pour l'extraction de Ia 1er prémolaire supérieure comporte des mors symétriques sans ergot médian.b-faux: comporte des mors symétriques, égaux, non jointifs.c-vrais:d-vrais:les daviers pour prémolaires supérieures servent indifféremment pour le côté droit ou gauche, contrairement aux daviers pour molaires qui sont spécifiques à chaque côté ."
      },
      {
        "questionText": "L'instrumentation nécessaire pour l'avulsion dentaire simple est:",
        "options": [
          "Le syndesmotome.",
          "Le bistouri",
          "Le décolleur.",
          "La curette"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Pour une avulsion simple, le syndesmotome est utilisé pour la syndesmotomie (couper le ligament) et la curette est utilisée pour le nettoyage de l'alvéole (temps alvéolaire) après l'extraction."
      },
      {
        "questionText": "Lors de la luxation:",
        "options": [
          "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent voisine.",
          "Le maintien des tables osseuses est nécessaire.",
          "L'opérateur se place devant et à gauche du patient pour les dents maxillaires.",
          "L'instrument utilisé est un élévateur tenu à plein main."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "Lors de la luxation, il est essentiel de maintenir les tables osseuses. L'élévateur est tenu fermement dans la paume de la main pour un meilleur contrôle. Il ne faut jamais prendre appui sur la dent voisine. L'opérateur se place à droite du patient."
      },
      {
        "questionText": "N°10 (2020 EMD - Q1921\nLa syndesmotomie:",
        "options": [
          "Consiste à couper les fibres du ligament alvéolo-dentaire autour de la dent.",
          "L'instrument utilisé est appelé élévateur tenu comme un stylo.",
          "L'instrument est introduit entre la sertissure gingivale et le collet des dents.",
          "L'instrument est introduit entre l'os alvéolaire et le cément de la racine."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Voici une analyse des affirmations concernant la syndesmotomie :\n  \n A- **Faux** : La syndesmotomie n'est pas une étape facultative uniquement pour les dents pluriradiculées. C'est une procédure réalisée avant toute extraction dentaire, qu'il s'agisse de dents monoradiculées ou pluriradiculées, afin de couper les fibres du ligament parodontal.\n  \n B- **Faux** : La syndesmotomie ne permet pas d'exposer totalement la racine de la dent. Elle consiste seulement à séparer les attaches gingivales et les fibres du ligament parodontal autour de la dent, mais elle n'expose pas la racine en elle-même.\n  \n C- **Vrai** : La syndesmotomie se réalise à l'aide d'un syndesmotome, et les mouvements à imprimer peuvent varier selon la dent et sa localisation dans l'arcade (antérieure ou postérieure, monoradiculaire ou pluriradiculaire).\n  \n D- **Vrai** : La syndesmotomie permet effectivement de couper la sertissure gingivale tout autour de la dent, ce qui facilite son extraction en réduisant la résistance des tissus environnants.\n  \n Les réponses correctes sont donc : **C et D.**"
      },
      {
        "questionText": "N°15 (2021 EMD - Q1804\nAvant toute extraction dentaire:",
        "options": [
          "L'examen clinique est obligatoire.",
          "L'examen radiologique n'est pas systématique.",
          "La difficulté opératoire est déterminée par l'évaluation de l'état parodontal",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-vrai :l’examen clinique demeure l’étape initiale essentielle dans l’approche diagnostique de toute pathologie médicale donc il est systématique avant une avulsion dentaire.\n b-faux : Il est important de mentionner l’importance du bilan pré\n oprératoire clinique et para-clinique (essentiellement radiologique) qui permet de recueillir des renseignements opératoires d’ordre \n anatomique sur la ou les dents à extraire.\n c-faux : les difficultés opératoires est déterminé par le contexte  environnemental (rapport avec les structures anatomiques sus ou sous-jacentes, rapport avec les dents adjacentes)"
      },
      {
        "questionText": "La syndesmotomie:",
        "options": [
          "Est une étape facultative, qui ne concerne que les dents pluriradiculées",
          "Permet d'exposer totalement la racine de la dent concernée",
          "Utilise un syndesmotome dont les mouvements à imprimer sont variables selon la dent",
          "Permet de couper la sertissure gingivale tout autour de la dent"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "La syndesmotomie est une étape obligatoire avant toute extraction. Elle consiste à couper la sertissure gingivale autour de la dent avec un syndesmotome, dont les mouvements sont adaptés à la dent concernée."
      },
      {
        "questionText": "N°14 (2020 EMD - Q1933\nLors de l'avulsion d'une dent lactate",
        "options": [
          "La luxation se fait uniquement en vestibulo linguale afin d'éviter la lésion du germe définitive",
          "Le praticien se positionne en face et à droite de l'opéré pour la mandibule",
          "Le curetage alvéolaire n'est pas recommandé",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le curetage de l'alvéole après l'extraction d'une dent de lait (lactéale) n'est pas recommandé car il y a un risque élevé de léser le germe de la dent permanente sous-jacente."
      },
      {
        "questionText": "N°16 (2020 EMD - Q1939\nLe davier utilisé pour l'extraction de 36",
        "options": [
          "Est parfaitement rectiligne",
          "Est un davier coudé avec des mors jumelée et parfaitement fermée",
          "Présente des mors asymétriques ; le mors possède un éperon médian qui s’insère dans l’espace inter radiculaire",
          "Sert indifféremment pour le coté de droit et gauche"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le davier pour la molaire mandibulaire (36) est coudé pour un meilleur accès. Ses mors sont symétriques (jumelés) et présentent chacun un éperon médian qui s'insère dans la furcation vestibulaire et linguale."
      },
      {
        "questionText": "N°6 (2019 RATT - Q1985\nLe mouvement imprimé au davier pour extraire une 45 est :",
        "options": [
          "Un mouvement de rotation combiné à une traction vers le haut",
          "Un mouvement de traction vers le haut uniquement",
          "Un mouvement vestibulo-linguale",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Pour extraire une 45 (première prémolaire mandibulaire), qui a généralement une racine aplatie mésio-distalement, le mouvement principal de luxation est un mouvement de bascule vestibulo-lingual. La rotation est contre-indiquée."
      },
      {
        "questionText": "Lors de la luxation d'une dent:",
        "options": [
          "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent voisine",
          "L'opérateur se place devant et à gauche du patient pour les dents de l'arcade supérieure.",
          "L'opérateur se place derrière et à droite du patient pour les dents de l'arcade inférieure droite.",
          "L'instrument utilisé est le syndesmotome tenu à plein main."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Pour les dents de l'arcade inférieure droite, la position correcte de l'opérateur est derrière et à droite du patient. Il ne faut jamais prendre appui sur la dent voisine. L'instrument de luxation est l'élévateur, pas le syndesmotome."
      },
      {
        "questionText": "Lors de la luxation:",
        "options": [
          "La position du praticien est capitale pour effectuer un mouvement adéquat.",
          "L'instrument utilisé est un élévateur tenu à plein main",
          "L'instrument est inséré dans le sillon gingivo-dentaire et permet, en contournant la dent, de sectionner l'attache épithéliale.",
          "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent adjacente"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La position du praticien est essentielle pour un bon contrôle. L'élévateur est l'instrument de luxation et est tenu fermement dans la paume de la main. Il ne faut jamais prendre appui sur la dent voisine."
      },
      {
        "questionText": "N°5 (2018 Synthèse - Q2056\nLe davier pour la dent 26",
        "options": [
          "Est munie d'une pointe du côté gauche",
          "Est munie d'une pointe du côté droit",
          "Peut être utilisé pour extraire la 16",
          "Peut être utilisé pour extraire la 28"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "26 : 1er molaire maxillaire gauche.A-Vrai :Le davier pour la dent 26 est muni d'une pointe du côté gauche, où cette pointe s'insère du côté vestibulaire. cette pointe dans la furcation entre les racines .C-Faux:Le davier utilisé pour la **dent 16** (première molaire supérieure droite) est différent, car la pointe doit être du côté opposé (droit)D-Faux :Le davier pour la dent 26 n'est pas approprié pour l'extraction de la **dent 28** (troisième molaire supérieure gauche, dent de sagesse), qui nécessite un instrument spécifique en fonction de la forme et de l'accès à la dent."
      },
      {
        "questionText": "N°16 (2018 Synthèse - Q2093\nLa révision alvéolaire :",
        "options": [
          "N'est pas systématique après une avulsion dentaire",
          "Doit toujours comprendre un curetage alvéolaire",
          "Permet une hémostase locale",
          "Permet d'éliminer les débris dentaires et osseux"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La 36 (première molaire mandibulaire gauche)A- Pour l'extraction de la 36, qui est une molaire mandibulaire gauche, le praticien se place généralement devant le patient pour avoir un bon accès et une meilleure visibilité.B- Faux. Pour les molaires mandibulaires, surtout du côté gauche, le praticien se place devant le patient.C- Faux. Le mouvement d'extraction pour une molaire ne se fait pas par rotation, car les molaires ont plusieurs racines qui empêchent ce type de mouvement. L'extraction implique des mouvements de bascule vestibulaire et linguale.D- Faux. Le davier utilisé pour les molaires mandibulaires a des mors adaptés à la forme des racines, il présente un bec central qui s’adapte à  l’espace inter radiculaire"
      },
      {
        "questionText": "N°15 (2018 Synthèse - Q2090\nDans le cas d'avulsions simple de la 46 :",
        "options": [
          "Le praticien est placé devant le patient",
          "La main libre ( gauche ) du praticien maintient uniquement les tables osseuses",
          "le davier effectue un mouvement essentiellement vestibulaire",
          "le davier présente un éperon sur les mors vestibulaire"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "A : Faux. Une révision alvéolaire est souvent réalisée après toute avulsion dentaire.\n B-Faux. Le curetage alvéolaire n'est pas toujours nécessaire. Il est indiqué dans certains cas, comme en présence de tissus nécrotiques, mais une révision alvéolaire simple peut parfois se limiter à l'élimination des débris sans curetage agressif.\n  \n C-Faux . L'hémostase est généralement assurée par la compression ou l'utilisation de moyens hémostatiques pendant le temps gingival.\n  \n - D: Vrai. La révision alvéolaire permet effectivement d'éliminer les débris dentaires, osseux et les tissus pathologiques résiduels, assurant ainsi une meilleure cicatrisation de l'alvéole."
      },
      {
        "questionText": "Lors de la luxation:",
        "options": [
          "Le maintien des tables osseuses est obligatoire",
          "La lèvre et la joue sont écartées à l'aide d'un miroir",
          "Le praticien est toujours placé devant le patient",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le maintien des tables osseuses avec les doigts est obligatoire pour éviter leur fracture. La position du praticien varie en fonction de la dent à extraire. Les joues sont écartées avec les doigts ou un écarteur, pas un miroir."
      },
      {
        "questionText": "Apres une avulsion dentaire simple:",
        "options": [
          "Les anti-inflammatoires et l'aspirine sont prescrits",
          "L'utilisation de bains de bouche est recommandée dès le premier jour",
          "La prescription d'un antibiotique est systématique",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les propositions sont fausses. L'aspirine est contre-indiquée (risque de saignement). Les bains de bouche sont à éviter les 24 premières heures. Les antibiotiques ne sont pas systématiques."
      },
      {
        "questionText": "Lors de la luxation:",
        "options": [
          "L'instrument utilisé est un élévateur",
          "L'instrument est maintenu dans la paume de la mains",
          "Le praticien est toujours placé devant le patient pour le secteur molaire mandibulaire gauche",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les affirmations sont justes : l'instrument est l'élévateur, il est tenu dans la paume de la main, et pour le secteur molaire mandibulaire gauche, le praticien se place devant et à droite du patient."
      }
    ]
  },
  {
    "title": "Complications avulsionnelles",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°7 (2024 EMD - Q588\nL'atteinte du nerf lingual:",
        "options": [
          "Fait suite à l'extraction d'une dent mandibulaire",
          "Est une complication sans conséquence, rapidement résolutive.",
          "Entraine une séduction de la mobilité linguale.",
          "Aucune réponse n'est juste."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-faux : La lésion du nerf lingual est une complication classique de l'avulsion des 3èmes molaires inférieures au vu de ses diverses localisations lors de son passage dans la région de la DDS mandibulaire.\n Elle peut survenir lors:\n àDe l'anesthésie par blessure accidentelle;\n àD'une syndesmotomie trop appuyée sur le versant lingual de la mandibule;\n àdes instruments rotatifs; Lors d'une suture trop large sur le versant lingual de l'incision.\n àDe l'ostéotomie et la séparation coronaire par l'utilisation intempestive et mal contrôlée.\n b-faux :une lésion du nerf lingual entraîne une anesthésie, une hypoesthésie ou des paresthésies du bord latéral de l'hémi-langue homolatérale, causant des problèmes comme une baisse des capacités masticatoires ou la morsure de la langue. la récupération peut prendre du temps, et dans certains cas, les symptômes peuvent être permanents ou nécessiter une intervention chirurgicale.\n c-faux : L'atteinte du nerf lingual affecte principalement la sensation de la langue, mais elle n'entraîne pas de réduction de la mobilité linguale. Le nerf lingual est sensitif, non moteur."
      },
      {
        "questionText": "N°10 (2024 EMD - Q641\nLa communication bucco-sinusienne:",
        "options": [
          "Fait suite à l'extraction de dents antrales.",
          "Se manifeste par un test de Valsalva positif",
          "Se manifeste par un test de Valsalva négatif.",
          "Se traduit cliniquement par un refoulement de liquide par le nez."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La communication bucco-sinusienne (CBS) peut survenir après l'extraction de dents maxillaires postérieures (dents antrales). Elle est diagnostiquée par un test de Valsalva positif (passage d'air) et peut se manifester par un reflux de liquide de la bouche vers le nez."
      },
      {
        "questionText": "N°10 (2024 RATT - Q642\nLa manœuvre de Valsalva est pratiquée devant",
        "options": [
          "Une avulsion d'une dent antrale",
          "Une avulsion dentaire faite au maxillaire",
          "Toute extraction dentaire",
          "Une sinusite maxillaire d'origine dentaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-vrais: La manœuvre de Valsalva est pratiquée principalement pour diagnostiquer ou traiter une communication bucco-sinusienne (CBS), souvent résultant d'une extraction dentaire, en particulier des dents antrales qui sont les dents situées en relation avec le sinus maxillaire, généralement les prémolaires et les molaires supérieures.Les dents antralesb-b-faux : ce ne sont pas toutes les dents Maxillaires, maisseulement les dents antrales.c-faux: car la manœuvre est plus ciblée sur les dents antrales et les complications associées, plutôt que sur toutes les extractions dentaires.d-faux: d-faux: Les sinusites maxillaires d'origine dentaire résultent d'une inflammation de la muqueuse du sinus maxillaire consécutive à une infection d'origine dentaire.Pour une sinusite maxillaire d'origine dentaire, le diagnostic repose plutôt sur un examen clinique, une imagerie comme une radiographie ou un scanner, et l'évaluation des symptômes tels que la douleur faciale, la congestion nasale, et parfois une douleur dentaire ou un abcès."
      },
      {
        "questionText": "N°13 (2024 RATT - Q695\nLa projection d'une dent de sagesse supérieure dans le sinus maxillaire:",
        "options": [
          "S'accompagne d'une communication bucco-sinusienne.",
          "Se traduit cliniquement par une hypoesthésie de la région naso-génienes",
          "Suit une manœuvre de luxation mal contrôlée.",
          "Nécessite une abstention thérapeutique en raison de la complexité des suites post-opératoires."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "b-faux : L'hypoesthésie naso-génienne serait plus typiquement \n liée à des atteintes du nerf infra-orbitaire, qui n'est pas \n directement affecté par une dent de sagesse dans le sinus \n maxillaire.\n d-faux :la complexité des suites post-opératoires peut nécessiter \n une évaluation minutieuse, mais cela n'implique pas \n nécessairement une abstention thérapeutique."
      },
      {
        "questionText": "N°16 (2024 EMD - Q751\nL'alvéolite suppurée:",
        "options": [
          "Est une surinfection du caillot at parfois de l'alvéole.",
          "Est due à une anomalie de fibrinolyse déstabilisant le caillot",
          "Se manifeste par des douleurs plus intenses que l'alvéolite sèche",
          "Entraine une fièvre et adénopathie régionale."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "a-faux : l'alvéolite suppurée peut survenir après l'extraction de n'importe quelle dent.b-Normalement Correct. l'alvéolite suppurée est en effet une infection de l'alvéole dentaire, souvent provoquée par la perte du caillot sanguin ou par sa dégradation prématurée, due à l'action de la flore bactérienne présente dans la bouche.c-vraisd :faux : contrairement à l'alvéolite sèche, l'alvéolite suppurée ne présente aucune évolution spontanée favorable car L'alvéolite suppurée est une infection active qui ne se résout pas d'elle-même. Sans traitement, l'infection peut s'aggraver, entraînant des complications plus graves, telles qu'une extension de l'infection aux tissus voisins ou même une ostéomyélite (infection de l'os)."
      },
      {
        "questionText": "L'alvéolite suppurée est :",
        "options": [
          "Le plus souvent rencontrée sur les prémolaires mandibulaires",
          "Associée à une perte partielle ou totale du caillot sanguin",
          "Accompagnée de douleurs d'intensité moins importante que dans l'alvéolite sèche",
          "Généralement spontanément résolutive"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'alvéolite suppurée est une infection. Contrairement à une idée reçue, les douleurs, bien que présentes, sont souvent moins intenses que les douleurs fulgurantes de l'alvéolite sèche. Elle n'est pas spontanément résolutive et nécessite un traitement."
      },
      {
        "questionText": "N°5 (2023 RATT - Q925\nL'ouverture accidentelle du sinus maxillaire lors de l'avulsion d'une dent antrale, se traduit par:",
        "options": [
          "Un œdème de la lèvre supérieure.",
          "Un reflux de liquide par le nez",
          "Une hypoesthésie de la région naso-génienne.",
          "Des douleurs sinusiennes per-opératoires"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a-faux :Un œdème de la lèvre supérieure n'est pas directement lié à l'ouverture du sinus maxillaire. Cela peut survenir en raison d'un traumatisme chirurgical ou d'une réaction inflammatoire, mais ce n'est pas le signe spécifique de l'ouverture du sinus maxillaire.b-vrais : La communication bucco-sinusienne se manifeste par des symptômes comme le reflux de liquide par le nez, notamment lors du rinçage buccal ou de la consommation de boissons.c-faux : Une hypoesthésie de la région naso-génienne pourrait survenir en cas de lésion nerveuse, notamment du nerf infra-orbitaire, mais ce n'est pas un signe direct de l'ouverture du sinus maxillaire.d-faux :les douleurs sinusiennes peuvent survenir si le sinus est touché ou enflammé, mais elles ne sont pas spécifiques à l'ouverture accidentelle du sinus."
      },
      {
        "questionText": "N°3 (2022 EMD - Q1260\nPour prévenir l'apparition d'une CBS:",
        "options": [
          "La radiographie pré-opératoire est obligatoire.",
          "Le curetage est systématique.",
          "L'extraction doit être atraumatique.",
          "Une attention particulière pour les dents maxillaires antérieures."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "A-vrai: Une radiographie pré-opératoire est essentielle pour évaluer la situation de la dent, la qualité de l'os alvéolaire, la forme et la taille des racines, ainsi que la proximité des structures anatomiques comme le sinus maxillaire. Cela aide à prévenir les complications telles que la communication bucco-sinusienne (CBS) et informer le patient.b-Faux:Le curetage n'est pas systématique pour prévenir une CBS. Le curetage est souvent pratiqué pour éliminer les tissus pathologiques ou les débris dans l'alvéole après l'extraction.c-Vrai : Une extraction atraumatique est cruciale pour prévenir une CBS. Cela signifie utiliser des techniques douces pour retirer la dent sans causer de fracture de l'os alvéolaire ou d'ouverture du sinus maxillaire.d-faux: les dents maxillaires antrales, sont proches du sinus maxillaire. Une extraction dans cette région nécessite une attention particulière pour éviter d'ouvrir le sinus et causer une CBS."
      },
      {
        "questionText": "N°18 (2021 EMD - Q1843\nla fracture d'une table osseuse externe au cours d'une extraction dentaire:",
        "options": [
          "Est parfois mutilante dans la mesure où elle compromet la réhabilitation prothétique.",
          "Peut-être à l'origine d'une dénudation des racines des dents adjacentes.",
          "Le praticien se doit de retirer le fragment osseux qui pourrait venir perturber In cicatrisation osseuse.",
          "Survient fréquemment lors de l'avulsion d'une dent lactéale."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "A-vrai :Une fracture de la table osseuse externe, notamment au niveau de la mâchoire, peut effectivement compromettre la réhabilitation prothétique future, en affectant le support osseux nécessaire pour une prothèse ou un implant.B-vrai: Une fracture de la table osseuse externe peut exposer les racines des dents adjacentes.Dénudation des racinesC-vrai: Le praticien se doit de retirer le fragment osseux qui pourrait venir perturber la cicatrisation osseuse, Retirer systématiquement un fragment osseux peut entraîner des complications supplémentaires.D-faux :les dents lactéales ont une structure radiculaire plus légère et sont moins susceptibles de provoquer une fracture osseuse significative lors de l'extraction."
      },
      {
        "questionText": "N°11 (2022 EMD - Q1392\nLa paralysie faciale transitoire peut être une complication:",
        "options": [
          "De l'anesthésie péri-apicale.",
          "De l'extraction des dents de sagesse mandibulaires.",
          "De l'anesthésie tronculaire à l'épine de Spix.",
          "De l'extraction des dents de sagesse maxillaires."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a-Faux :L'anesthésie péri-apicale est une technique qui cible la région autour de l'apex de la dent seulement pour traiter les douleurs dentaire localisées.b-Faux : L'anesthésie des dents de sagesse mandibulaires, généralement réalisée par injection dans la région de la mandibule, peut entraîner des complications comme une anesthésie prolongée ou des saignements, mais la paralysie faciale transitoire n'est pas une complication typique.c-Vrai: L'anesthésie tronculaire de l'épine de Spix (ou le nerf mandibulaire) est une technique qui peut entraîner une paralysie faciale transitoire si l'anesthésique est mal administré ou se propage vers les nerfs faciaux. Cela est dû à la proximité de certains nerfs avec le site d'injection.D-Faux :bien que l'extraction des dents de sagesse maxillaires puisse entraîner des complications comme des infections ou des saignements, la paralysie faciale transitoire est généralement associée à des techniques d'anesthésie plutôt qu'à l'extraction elle-même.- une paralysie faciale transitoire peut être observée en cas d'injection de volume trop important ou dans une zone trop proche du rameau mentonnier du nerf facial."
      },
      {
        "questionText": "N°19 (2022 EMD - Q1532\nLa luxation de l'ATM:",
        "options": [
          "Peut survenir suite à une ouverture buccale prolongée lors de l'extraction.",
          "Se résout par la manœuvre de Nelaton.",
          "Se manifeste par une limitation de l'ouverture buccale.",
          "L'atteinte de l'ATM est irréversible."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "a-vrai: La luxation de l'ATM peut se produire lors d'une ouverture excessive et prolongée de la bouche.b- vrai : luxation de l'ATM peut être réduite manuellement par une manœuvre de Nelaton, qui consiste à repositionner la mandibule en appliquant une pression vers le bas puis vers l'arrière.c-Faux : Au contraire, la luxation de l'ATM se manifeste par une incapacité à fermer la bouche, plutôt qu'une limitation de l'ouverture. Le patient est souvent \"bloqué\" avec la bouche ouverte.d- Faux. La luxation de l'ATM n'est pas irréversible. Une fois réduite correctement, l'articulation peut retrouver son fonctionnement normal, bien que des récidives soient possibles chez certains patients."
      },
      {
        "questionText": "N°11 (2021 EMD - Q1723\nL'ouverture accidentelle du sinus maxillaire lors de l'avulsion d'une dent antrale se manifeste cliniquement par",
        "options": [
          "Un œdème de la lèvre supérieure.",
          "Des douleurs sinusiennes homolatérales per-opératoires:",
          "Une hypoesthésie de la région sous-orbitaire.",
          "Un reflux de liquide par le nez"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A-faux :L'ouverture du sinus maxillaire ne provoque pas directement un œdème de la lèvre supérieure. Cet œdème est plus souvent associé à une infection ou à un traumatisme de la région péri-labiale.b-faux : l'ouverture accidentelle du sinus maxillaire lors de l'avulsion d'une dent antrale **ne se manifeste pas toujours par des douleurs sinusiennes homolatérales per-opératoires**. En fait, la douleur n'est pas un signe systématique ou immédiat d'une telle ouverture.Les douleurs sinusiennes peuvent apparaître ultérieurement si une infection sinusienne secondaire (sinusite) se développe, mais elles ne sont pas systématiquement présentes au moment de l'ouverture accidentelle.c-faux : Une hypoesthésie de la région sous-orbitaire est liée à des lésions du nerf infra-orbitaire, mais elle n'est pas un signe d'ouverture du sinus maxillaire lors de l'avulsion d'une dent antrale.D- vrai :Un signe classique d'une communication oro-sinusienne est le passage de liquides (comme de l'eau) du site d'extraction vers le nez lors du rinçage ou de la déglutition."
      },
      {
        "questionText": "N°1 (2020 EMD - Q1897\nLa fracture de la tubérosité:",
        "options": [
          "Survient fréquemment à la suite de l'extraction de la 2ème molaire supérieure",
          "Se traduit cliniquement par une hypoesthésie de la région nasogénienne",
          "Fait suite à un mouvement de luxation mal contrôlé",
          "Peut-être prévenue par la réalisation d'un examen radiologique"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "A-faux : La fracture de la tubérosité survient plus fréquemment lors de l'extraction de la 3ème molaire supérieure.B-faux :la  fracture de la tubérosité se traduit cliniquement par un tubérosité mobile ou adhérente à la dent de sagesse. Une hypoesthésie dans cette région serait plutôt liée à une atteinte du nerf infra-orbitaire.C-Vrai :La fracture de la tubérosité peut survenir à la suite d'un mouvement de luxation mal contrôlé lors de l'extraction d'une molaire, en particulier si la dent est ankylosée ou si les structures osseusesenvironnantes sont fragiles.D- vrai: La réalisation d'un examen radiologique, tel qu'une radiographie panoramique ou un cone beam, peut aider à identifier des anomalies anatomiques, la fragilité osseuse, ou une fusion de la dent avec l'os (ankylose), permettant ainsi de prévenir les fractures de la tubérosité en adaptant la technique d'extraction."
      },
      {
        "questionText": "N°18 (2020 EMD - Q1946\nl'effraction accidentelle de sinus maxillaire",
        "options": [
          "Est diagnostiquée par la manœuvre de Nelaton",
          "Est une complication immédiate de l'avulsion dentaire",
          "Se manifeste cliniquement par un reflux des liquides par le nez",
          "Est d'évolution favorable, ne nécessitant aucun traitement"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "L'effraction du sinus (CBS) est une complication immédiate de l'avulsion, se manifestant par un reflux de liquide par le nez. Elle nécessite une prise en charge pour éviter les complications. La manœuvre de Nelaton concerne la luxation de l'ATM."
      },
      {
        "questionText": "N°13 (2020 EMD - Q1930\nL'alvéolite sèche : invisible",
        "options": [
          "Est une complication immédiate de l'avulsion dentaire",
          "Est la conséquence d'une surinfection de l'alvéole ou du caillot sanguin.",
          "Se caractérise par une alvéole comblée par des détritus d'odeur fétide.",
          "Son traitement est à base de bain de bouche antiseptique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A-Faux :L’alvéolite sèche n'est pas une complication immédiate. Elle apparaît généralement quelques jours après l'extraction dentaire, souvent entre le 2e et le 4e jour.B-Faux : Ce n'est pas directement une surinfection, mais plutôt la conséquence d'une mauvaise cicatrisation due à la perte du caillot sanguin qui protège l'alvéole, exposant l'os.C-Vrai : L'alvéolite sèche se manifeste par une alvéole béante avec un os visible, blanchâtre et une absence de cicatrisation.D-Faux :Le traitement consiste en un curetage, sous anesthésie sans vasoconstricteur, de l'alvéole pour éliminer les débris, faire saigner et favoriser la formation d'un caillot de bonne qualité .Mise en place de pansement à base d'eugenol, renouvelable jusqu'à disparitiondes douleurs (Régression en 3-4 jour),traitement antibiotique + antalgiques puissants."
      },
      {
        "questionText": "L'alvéolite sèche : invisible",
        "options": [
          "Se caractérise par un alvéole comblée par un tissu granulomateux faiblement hémorragique",
          "Est une affection indolore",
          "Sont traitement repose sur l’utilisation de moyens locaux d’hémostase",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les réponses sont fausses. L'alvéolite sèche se caractérise par une alvéole vide (os à nu), est extrêmement douloureuse, et son traitement vise à provoquer un saignement pour reformer un caillot, pas à l'arrêter."
      },
      {
        "questionText": "N°20 (2019 EMD - Q2024\nUne atteinte du nerf lingual:",
        "options": [
          "Survient fréquemment à la suite de l'extraction de la 1 molaire mandibulaire.",
          "Se traduit cliniquement par une paralysie de l'hémi-langue homolatérale.",
          "S'améliore habituellement lentement au cours des six premiers mois post-opératoires.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A-faux : L'atteinte du nerf lingual est une complication potentielle de l'extraction de la 3 ème molaire mandibulaire .B-Faux :Sur le plan sensitif, une lésion du nerf lingual entraîne une anesthésie, une hypoesthésie ou des paresthésies du bord latéral de l'hémi-langue homolatérale, causant des problèmes comme une baisse des capacités masticatoires ou la morsure de la langue.C-Vrai :Les lésions du nerf lingual peuvent s'améliorer lentement, souvent sur une période de plusieurs mois, y compris les six premiers mois post-opératoires."
      },
      {
        "questionText": "N°2 (2018 Synthèse - Q2045\nDans le cas d'une alvéolite sèche :",
        "options": [
          "Le curetage se fera sous anesthésie locale sans vasoconstricteur.",
          "Le curetage se fera sous anesthésie locale avec vasoconstricteur.",
          "Le traitement antibiotique est systématique.",
          "Le curetage permet d'éliminer un tissu de granulation."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-vrai: Le curetage se fera sous anesthésie locale sans vasoconstricteur, afin d'éviter toute vasoconstriction qui pourrait perturber la circulation sanguine dans la région.\n  \n B-faux: car l'utilisation de vasoconstricteur est généralement évitée.\n  \n C-faux: En cas d'**alvéolite sèche**, le traitement ne consiste généralement pas en une prescription systématique d'antibiotiques. La gestion de l'alvéolite sèche implique :\n 1. Le curetage : de l'alvéole pour éliminer les débris et les tissus nécrotiques.\n 2. La mise en place d'un pansement : médicamenteux dans l'alvéole pour protéger la zone et favoriser la guérison.\n 3. Des antalgiques : puissants pour soulager la douleur, comme les AINS ou les opioïdes, en fonction de l'intensité de la douleur.\n Les antibiotiques ne sont pas toujours nécessaires à moins qu'il y ait une infection secondaire. Le traitement est principalement axé sur le soulagement de la douleur et la protection de la cavité osseuse pour favoriser la guérison.\n  \n D-faux : car l'alvéolite sèche est caractérisée par l'absence de tissu de granulation, et le curetage n'a pas pour but d'éliminer ce type de tissu."
      },
      {
        "questionText": "N°3 (2018 Synthèse - Q2050\nUne de ces complications ne peut pas survenir après l'extraction d'une molaire inferieure:",
        "options": [
          "Une communication bucco-sinusienne.",
          "Un refoulement de dent de sagesse dans le plancher buccal.",
          "Une fracture de la table osseuse.",
          "Une hypoesthésie labio-mentonnière par lésion nerveuse."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "CA-faux : Cette complication ne peut pas survenir après l'extraction d'une molaire inférieure, car il n'y a pas de proximité directe entre les molaires inférieures et le sinus maxillaire. Cette complication est plus fréquente avec les molaires supérieures.\n  \n B : Vrai. Lors de l'extraction d'une dent de sagesse mandibulaire, il est possible que la dent soit déplacée dans le plancher buccal en raison de sa position profonde.\n  \n C : Vrai. La fracture de la table osseuse (vestibulaire ou linguale) est une complication possible, notamment lors de l'extraction de molaires inférieures, en particulier si les racines sont larges ou s'il y a une fragilité osseuse.\n  \n D: Vrai. Une lésion du nerf alvéolaire inférieur lors de l'extraction d'une molaire inférieure peut entraîner une hyperesthésie ou une paresthésie de la région labio-mentonnière."
      }
    ]
  },
  {
    "title": "Éruption dentaire normale et pathologique",
    "subject": "patho",
    "questions": [
      {
        "questionText": "L'éruption dentaire:",
        "options": [
          "Est un processus biologique par lequel une dent en développement émerge à travers l'os et la muqueuse orale.",
          "Est us processus continu qui ne se termine qu'avec la perte de la dent.",
          "Correspond aux phénomènes liés à l'évolution des dents sur l'arcade.",
          "Désigne l'ensemble des dents en place sur l'arcade"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'éruption est le processus biologique d'émergence de la dent à travers les tissus, et c'est un processus continu qui se poursuit lentement toute la vie. Le terme 'dentition' correspond aux phénomènes évolutifs, et 'denture' à l'ensemble des dents présentes."
      },
      {
        "questionText": "La chute prématurée des dents temporaires :",
        "options": [
          "Est due au développement précoce du germe d'une dent permanente.",
          "Est généralement associée à des pathologies générales telles que le Chérubisme",
          "Concerne préférentiellement les canines maxillaires, l'incisive latérale maxillaire.",
          "Concerne l'ensemble des dents temporaires."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La chute prématurée peut être due à une éruption précoce du germe permanent ou être un symptôme de pathologies générales comme le Chérubisme. Elle n'affecte pas préférentiellement une zone et peut concerner une ou plusieurs dents."
      },
      {
        "questionText": "La phase post-éruptive:",
        "options": [
          "Débute lorsque les dents sont fonctionnelles et continue lentement tant que la dent reste sur l'arcade.",
          "Débute de l'émergence dans la cavité buccale jusqu'au contact occlusal",
          "Commence du début du développement radiculaire jusqu'à l'émergence dans la cavité buccale.",
          "Commence du début de l'édification radiculaire et se termine lorsque la dent atteint un contact occlusal"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La phase post-éruptive (fonctionnelle) débute une fois que la dent atteint le plan d'occlusion. La phase d'éruption fonctionnelle (supra-osseuse) débute à l'émergence et se termine au contact occlusal."
      },
      {
        "questionText": "L'éruption dentaire :",
        "options": [
          "Est un processus unifactoriel.",
          "Est un processus biologique qui se termine des l’émergence de la couronne dans la cavité buccale.",
          "Est un processus biologique par lequel une dent en développement émerge à travers l'os et la muqueuse orale.",
          "Fait partie intégrante de la croissance cranio-faciale."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "L'éruption dentaire est un processus biologique multifactoriel par lequel la dent émerge. Les mouvements pré-éruptifs s'adaptent à la croissance des maxillaires, faisant de l'éruption une partie intégrante de la croissance cranio-faciale."
      },
      {
        "questionText": "Dans la dentition temporaire :",
        "options": [
          "L’éruption a lieu plus tôt chez les garçons que chez les filles.",
          "L'éruption chez les filles précède celle des garçons sauf pour les molaires et incisives.",
          "Les dents mandibulaires précèdent les dents maxillaires",
          "Les incisives centrales mandibulaires précèdent leurs homologues maxillaires"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Contrairement à la dentition permanente, l'éruption des dents temporaires est légèrement plus précoce chez les garçons. De manière générale, les incisives centrales mandibulaires sont les premières dents à faire leur éruption, avant leurs homologues maxillaires."
      },
      {
        "questionText": "Une dent néo-natale:",
        "options": [
          "Est présente dans in cavité buccale à la naissance,",
          "Est habituellement peu développée avec peu ou pas de formation radiculaire.",
          "Se situe uniquement au niveau de la région des incisives mandibulaires",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La dent néo-natale fait son éruption dans les 30 premiers jours de vie (la dent présente à la naissance est une dent natale). Elle est souvent peu développée, mobile, avec une formation radiculaire incomplète."
      },
      {
        "questionText": "L'éruption tardive d'une dent unitaire:",
        "options": [
          "Est relativement fréquente",
          "Est liée généralement à un facteur local tel une malposition dentaire.",
          "Est liée à un facteur systémique comme une carence vitaminique A et D.",
          "Toutes les réponses sont justes,"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Le retard d'éruption d'une seule dent est un phénomène fréquent, généralement causé par un facteur local (obstacle, malposition, kyste). Les facteurs systémiques entraînent plutôt un retard d'éruption de plusieurs dents."
      },
      {
        "questionText": "L'éruption dentaire:",
        "options": [
          "Processus biologique par lequel une dent en développement émerge à travers l'os et la muqueuse orale.",
          "Processus continu qui ne se termine qu'avec la perte de la dent.",
          "Correspond aux phénomènes liés à l'évolution des dents sur l'arcade.",
          "Désigne l'ensemble des dents en place sur l'arcade."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'éruption est le processus biologique d'émergence de la dent à travers les tissus, et c'est un processus continu qui se poursuit lentement toute la vie. Le terme 'dentition' correspond aux phénomènes évolutifs, et 'denture' à l'ensemble des dents présentes."
      },
      {
        "questionText": "Parmi les anomalies chronologiques, nous citons:",
        "options": [
          "Les dents néonatales qui sont présentes à la naissance,",
          "La folliculite expulsive de Capdepont.",
          "Le défaut primaire d'éruption.",
          "La transposition qui est la permutation des positions de deux dents souvent adjacentes."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La folliculite expulsive (élimination spontanée du follicule) et le défaut primaire d'éruption (trouble du mécanisme d'éruption) sont des anomalies chronologiques. La transposition est une anomalie de position (topographique)."
      },
      {
        "questionText": "Une éruption dentaire est retardée :",
        "options": [
          "Lorsqu'elle survient 6 mois après les dates normales d'éruption pour les dents temporaires",
          "Lorsqu'elle survient 6 mois après les dates normales d'éruption pour les dents permanentes.",
          "Lorsque l'homologue de la dent permanente évolue depuis plus de 6 mois,",
          "Plus fréquemment en dentition permanente qu'en dentition temporaire"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "On parle de retard d'éruption si une dent temporaire apparaît 6 mois après la date normale, ou si une dent permanente apparaît plus de 6 mois après son homologue controlatérale. Les retards sont plus fréquents en dentition permanente."
      },
      {
        "questionText": "L'éruption dentaire est:",
        "options": [
          "Un mécanisme physiologique qui permet de déplacer la dent depuis son site initial jusqu'à l'occlusion.",
          "Un phénomène mécanique qui permet l'émergence de la dent sur l'arcade.",
          "Coordonnée et régulée par le sac folliculaire.",
          "Coordonnée et régulée par la croissance radiculaire et la pression intra pulpaire."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "L'éruption est un mécanisme physiologique complexe qui déplace la dent jusqu'à sa position fonctionnelle. Le sac folliculaire joue un rôle régulateur essentiel, notamment en créant le chemin d'éruption dans l'os durant la phase intra-osseuse."
      },
      {
        "questionText": "La phase d'éruption:",
        "options": [
          "Comporte deux phases, intra-osseuse et supra-osseuse",
          "Commence lors de la formation coronaire.",
          "Début de l'édification radiculaire et se termine lorsque la dent atteint un contact occlusal",
          "Durant cette phase, l'organe de l'email réduit fusionne avec l'épithélium oral."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "La phase d'éruption, qui débute avec l'édification radiculaire et se termine au contact occlusal, comporte deux phases (intra et supra-osseuse). Durant cette phase, l'épithélium réduit de l'émail fusionne avec l'épithélium oral pour permettre l'émergence."
      },
      {
        "questionText": "L'éruption tardive des dents permanentes est liée:",
        "options": [
          "A la calcification du follicule dentaire hyperplasique",
          "A la carence en vitamine Bet D",
          "A une anomalie morphologique de l'os alvéolaire",
          "Au syndrome de Turner"
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'éruption tardive peut être liée à des facteurs locaux comme une calcification du follicule ou une anomalie osseuse, ou à des facteurs généraux comme le syndrome de Turner. Une carence en vitamines A et D (pas B) est également un facteur."
      },
      {
        "questionText": "Une dent natale:",
        "options": [
          "Est la présence d'une dent sur l'arcade à la naissance",
          "Est une dent faisant son éruption dans les 30 premiers jours de vie.",
          "Concerne rarement l'incisive centrale mandibulaire",
          "Est due à une position très superficielle du germe"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Une dent natale est une dent déjà présente à la naissance. C'est souvent dû à une position très superficielle du germe, et elle concerne le plus fréquemment les incisives centrales mandibulaires."
      },
      {
        "questionText": "Parmi les causes du retard d'éruption des dents lactéales:",
        "options": [
          "Une anomalie morphologique de la dent",
          "Une surcharge nutritionnelle.",
          "Une hyperfonction endocrinienne",
          "Une origine héréditaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le retard d'éruption des dents lactéales peut avoir une origine héréditaire. Les déficits nutritionnels et les hypofonctions endocriniennes (et non l'inverse) peuvent également être des causes."
      },
      {
        "questionText": "Le follicule dentaire joue un rôle essentiel dans le phénomène éruptif de la dent:",
        "options": [
          "Durant la phase intra-osseuse",
          "Durant la phase extra-osseuse",
          "Durant la formation de la racine",
          "Durant la formation du ligament parodontal"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le follicule dentaire est particulièrement essentiel durant la phase intra-osseuse de l'éruption, car il est responsable de la résorption osseuse qui crée le chemin d'éruption pour la dent."
      }
    ]
  },
  {
    "title": "Cabinet dentaire et dispositifs chirurgicaux",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°19 (2024 EMD - Q801\nLes conditions d'ouverture d'un cabinet dentaire sont, un local:",
        "options": [
          "Equipé d'un laboratoire dentaire.",
          "Avec un sol imperméable permettant un nettoyage fréquent et facile.",
          "Possédant une aération permanente.",
          "Avec au moins un lavabo."
        ],
        "correctOptionIndexes": [
          1,
          2,
          3
        ],
        "explanation": "a-faux :un laboratoire dentaire intégré au cabinet est un avantage, mais ce n'est pas une nécessité absolue pour la plupart des cabinets dentaires, qui peuvent fonctionner efficacement en collaborant avec des laboratoires dentaires externes."
      },
      {
        "questionText": "N°4 (2021 EMD - Q1618\nParmi les conditions d'ouverture d'un cabinet dentaire :",
        "options": [
          "Local équipé d'appareil de radiographie panoramique obligatoire.",
          "Le médecin dentiste doit être inscrit au conseil de l'ordre.",
          "Un local suffisamment aéré et éclairé (lumière naturelle).",
          "Doit être installé au rez-de-chaussée."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "A-faux : L'équipement radiographique n'est pas obligatoire pour tous les cabinets dentaires. Il dépend des besoins spécifiques et des pratiques du cabinet.b-vrai:L'inscription au conseil de l'ordre est une obligation légale pour l'exercice de la profession.le conseil d’ordre: Il s'agit, dans tous les cas, d'un organisme professionnel, administratif et juridictionnel, de défense et de régulation d'une profession.c-vrais : Un bon éclairage et une ventilation adéquate sont essentiels pour un environnement de travail sain et sûr.d-faux :Il n'est pas obligatoire que le cabinet dentaire soit au rez-de-chaussée."
      },
      {
        "questionText": "Le micromoteur:",
        "options": [
          "Est un accessoire facultatif du fauteuil dentaire,",
          "Permet l'insertion de la turbine.",
          "Permet l'insertion des contre-angles et de pièces à main",
          "Son sens de rotation peut être choisi"
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le micromoteur est un instrument essentiel (non facultatif) qui permet d'insérer les contre-angles et les pièces à main. Son sens de rotation (horaire/anti-horaire) peut être choisi. La turbine fonctionne indépendamment."
      },
      {
        "questionText": "N°9 (2020 EMD - Q1918\nEclairage :",
        "options": [
          "La lumière préconisée est celle que assure une répartition graduelle",
          "L'asthénie visuelle n'est pas en rapport avec l'éclairage",
          "La lumière de la salle doit être plus intense que le scialytique",
          "La loupe binoculaire est d'une grande utilisé"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Voici une analyse des affirmations concernant l'éclairage en milieu médical (ou dentaire) :\n  \n A- **Vrai** : La lumière préconisée doit effectivement assurer une répartition graduelle, c’est-à-dire un éclairage uniforme et bien réparti pour éviter les zones d'ombre ou les contrastes trop marqués qui peuvent fatiguer les yeux.\n  \n B- **Faux** : L'asthénie visuelle, qui est la fatigue oculaire, peut être en rapport avec un mauvais éclairage (éclairage insuffisant, trop intense ou mal réparti). Un bon éclairage est essentiel pour éviter cette fatigue.\n  \n C- **Faux** : La lumière de la salle ne doit pas être plus intense que celle du scialytique. Le scialytique est spécialement conçu pour fournir une lumière très intense et concentrée sur la zone de travail (bouche, zone opératoire), tandis que l'éclairage général de la salle doit être moins intense pour éviter les éblouissements.\n  \n D- **Vrai** : La loupe binoculaire est d'une grande utilité pour le professionnel, car elle permet de mieux visualiser les détails avec un grossissement adéquat et un éclairage ciblé, ce qui améliore la précision des gestes et réduit la fatigue oculaire.\n  \n Les réponses correctes sont donc : **A et D.**"
      },
      {
        "questionText": "N°17 (2020 EMD - Q1943\nLa posture:",
        "options": [
          "La posture ne constitue pas une mesure pour le confort du praticien",
          "Le transfert de charge de plus de 60% au niveau de la zone charnière lombo sacrée",
          "La position debout est la position la plus admise",
          "Le Médecin dentiste doit se déplacé dans son cabinet"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une mauvaise posture peut entraîner un transfert de charge important vers la zone lombo-sacrée. La posture est donc cruciale pour le confort du praticien, et la position assise est généralement préférée."
      },
      {
        "questionText": "N°3 (2019 EMD - Q1975\nLes instruments rotatifs qui accompagnent le fauteuil dentaire:",
        "options": [
          "La turbine qui fonctionne à grande vitesse à 160000/420000 tr/m.",
          "La turbine qui fonctionne à faible vitesse.",
          "Le micromoteur qui fonctionne par air comprimé qui tourne à 400000 tr/mn",
          "Le micromoteur qui fonctionne par courant électrique qui tourne à 400000 tr/mn"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A- Vrai: La turbine dentaire est un instrument rotatif fonctionnant à grande vitesse, typiquement entre 160 000 et 420 000 tours par minute.B-faux: Les turbines ne fonctionnent pas à faible vitesse. elles sont conçues pour fonctionner à des vitesses élevées, ce qui les rend particulièrement efficaces pour traiter les tissus durs comme l'émail dentaire .C-Vrai: Un micromoteur fonctionnant par air comprimé peut atteindre40 000 tr/min.D-Vrai: Le micromoteur électrique peut atteindre des vitesses allant jusqu'à environ40 000 tr/min, mais pas400000 tr/min."
      },
      {
        "questionText": "N°7 (2022 EMD - Q1320\nLa turbine:",
        "options": [
          "Tourne à une vitesse de 10000 tour/min.",
          "Peut être utilisée aussi bien sur le tissu dentaire que sur l'os.",
          "Est un instrument rotatif.",
          "Il existe des turbines bague rouge, verte et bleue."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a-faux : Les turbines dentaires fonctionnent à des vitesses beaucoup plus élevées, entre300 000 et 450 000 tours/min.b-Faux :La turbine est utilisée principalement pour les tissus durs, comme le tissu dentaire (émail et dentine), mais elle n'est pas utilisée pour travailler sur l'os. Pour l'os, des instruments spécifiques comme les pièces à main à basse vitesse ou des dispositifs de chirurgie osseuse.c-vrai: La turbine est un instrument rotatif à haute vitesse utilisé en dentisterie pour tailler et préparer les cavités sur les dents.d-Faux :Les bagues de couleur (rouge, verte, bleue) sont associées aux contre-angles, et non aux turbines."
      },
      {
        "questionText": "N°8 (2019 EMD - Q1995\nLe fauteuil dentaire est toujours équipé :",
        "options": [
          "D'une aspiration chirurgicale.",
          "D'une pompe à salive.",
          "D'un laser.",
          "D'un piezotome."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "A-Vrai :Le fauteuil dentaire est toujours équipé d'une aspiration chirurgicale pour éliminer les fluides pendant les interventions.B-Vrai :Une pompe à salive est également un élément de base pour aspirer la salive et assurer un champ opératoire sec.C-Faux :Un laser n'est pas un équipement systématique du fauteuil dentaire. C'est un outil spécialisé, utilisé dans certaines cliniques.D-Faux :Le piézotome, utilisé pour les chirurgies osseuses, n'est pas toujours présent sur tous les fauteuils dentaires. Il est réservé à certaines interventions spécifiques."
      },
      {
        "questionText": "N°1 (2018 Synthèse - Q2043\nLes instruments rotatifs (turbines, contre angle..)",
        "options": [
          "Sont autoclavables.",
          "Ne sont pas autoclavables.",
          "Leur désinfection suffit pour une autre réutilisation.",
          "Leur stérilisation se fait uniquement par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-Vrai. Les instruments rotatifs dentaires tels que les turbines et les contre-angles sont conçus pour être autoclavés afin d'assurer une stérilisation efficace. \n  \n C : Faux. La désinfection seule n'est pas suffisante pour ces instruments. Ils nécessitent une stérilisation complète pour être sûrs pour une utilisation ultérieure, en raison du risque de contamination croisée.\n  \n D : Faux. Bien que certains instruments puissent être stérilisés par chaleur sèche, l'autoclavage est la méthode la plus courante et recommandée pour les instruments rotatifs en dentisterie."
      },
      {
        "questionText": "N°5 (2019 RATT - Q1981\nLa pince gouge :",
        "options": [
          "Est une pince qui sert à suturé la muqueuse",
          "Est une pince qui sert à la dissection",
          "Est une pince qui sert à réséquer l'os alvéolaire",
          "Est une pince qui sert à extraire les racines"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La pince gouge est un instrument utilisé en chirurgie dentaire, notamment pour les interventions sur l'os alvéolaire. Elle permet de**réséquer**ou**remodeler**l'os, particulièrement dans le cadre des extractions complexes."
      },
      {
        "questionText": "Citez dans l'ordre les étapes de la stérilisation",
        "options": [
          "Stérilisation, Conditionnement, Nettoyage, Pré-désinfection, Stockage",
          "Pré-désinfection, Nettoyage, Rinçage + Séchage, Conditionnement, Stérilisation, Stockage",
          "Nettoyage, Rinçage, Stérilisation, Stockage, Conditionnement",
          "Pré-désinfection, Stérilisation, Nettoyage, Conditionnement, Stockage"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'ordre correct et complet de la chaîne de stérilisation est : Pré-désinfection, Nettoyage, Rinçage et Séchage, Conditionnement (emballage), Stérilisation, et enfin Stockage."
      },
      {
        "questionText": "N°13 (2021 EMD - Q1765\nLe micronsoleur:",
        "options": [
          "Est un accessoire facultatif du fauteuil dentaire.",
          "Permet l'insertion de la turbine,",
          "Permet l'insertion des contre-angles et de pièces à main",
          "Son sens de rotation peut être choisi"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A-faux : Le micromoteur est un instrument essentiel dans les cabinets dentaires, utilisé pour de nombreuses procédures comme la préparation de cavités et la finition de prothèses.b-faux : Le micromoteur n'est pas utilisé pour insérer la turbine. La turbine fonctionne indépendamment du micromoteur et est utilisée pour des vitesses plus élevées, tandis que le micromoteur est utilisé pour des vitesses plus basses avec des contre-angles ou des pièces à main.C-vrai: le micromoteur est utilisé pour faire fonctionner les contre-angles et les pièces à main, qui sont des instruments rotatifs essentiels pour divers actes dentaires, comme le fraisage ou le polissage.d- Le micromoteur permet de choisir le sens de rotation (horaire ou antihoraire), selon l'intervention ou l'instrument utilisé."
      }
    ]
  },
  {
    "title": "Approche psychologique du patient au cabinet dentaire",
    "subject": "patho",
    "questions": [
      {
        "questionText": "La prémédication sédative",
        "options": [
          "Remplace efficacement l'approche psychologique de patios ayant soul",
          "Doit tenir compte des prescriptions médicamenteuses en cours",
          "Est systématique en présence d'un état infectieux local",
          "Permet le bon déroulement de l'intervention"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La prémédication sédative ne remplace pas l'approche psychologique, mais la complète. Il est impératif de vérifier les médicaments du patient pour éviter les interactions. Elle n'est pas systématique, mais peut grandement faciliter le déroulement de l'intervention en réduisant l'anxiété."
      }
    ]
  },
  {
    "title": "Antisepsie, asepsie et stérilisation au cabinet de",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°9 (2024 EMD - Q628\nLa pré-désinfection :",
        "options": [
          "Permet d'obtenir des instruments en état de stérilisation",
          "A pour objectif de faciliter le nettoyage en évitant le séchage des matières organiques",
          "Se fait d'abord au poupinel puis à l'autoclave afin de renforcer ce procédé",
          "Se fait par immersion des instruments dans un bac contenant un produit détergent-désinfectant pendant 15 min minimum"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "A-faux: La pré-désinfection est une étape préalable qui réduit la charge microbienne et prépare les instruments pour le nettoyage et la stérilisation ultérieurs.b-Vrai: la pré-désinfection empêche les matières organiques comme le sang et les débris tissulaires de sécher sur les instruments, ce qui facilite le nettoyage.c-vrai: La pré-désinfection se fait généralement par immersion des instruments dans un bac contenant une solution détergente désinfectante, ce qui permet d'éliminer une grande partie des contaminants avant le nettoyage.d-Faux: La pré-désinfection ne se fait pas à la chaleur sèche. La chaleur sèche est une méthode de stérilisation, et non de pré-désinfection. La pré-désinfection se fait typiquement par immersion dans une solution liquide."
      },
      {
        "questionText": "N°4 (2019 RATT - Q1978\nLe cabinet dentaire doit être équipé :",
        "options": [
          "D'un autoclave de classe S.",
          "D'un autoclave de classe B",
          "D'un poupinel",
          "D'un stérilisateur ultrasonique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a. faux : Les autoclaves de classe S sont moins polyvalents et ne conviennent pas pour stériliser tous les types d'instruments. Un cabinet dentaire nécessite un autoclave capable de traiter une large gamme de matériels.b-vrais : • La stérilisation à la vapeur d'eau Fait appel aux. Cette technique est le procédé de référence à l'état actuel de nos connaissances: L'association de chaleur et vapeur d'eau saturée provoque la destruction des germes.c-faux : La stérilisation à la chaleur sèche: Communément connu sous le nom de ,Actuellement il est abandonné car d'efficacité aléatoire, en outre l'air est un moins bon conducteur de la chaleur, la fiabilité de la stérilisation n'est pas garantie.Poupineld-faux :Un stérilisateur ultrasonique n'est pas réellement un stérilisateur, mais plutôt un nettoyeur. Il est utilisé pour éliminer les débris et contaminants par des vibrations ultrasoniques, mais il ne remplace pas la stérilisation par autoclave, qui est nécessaire pour assurer la destruction complète des microorganismes.\tAntisepsie, asepsie et stérilisation au cabinet dentaire"
      },
      {
        "questionText": "N°13 (2024 EMD - Q689\nConditionnement:",
        "options": [
          "Est l'étape finale de la chaine d'asepsie.",
          "N'est nécessaire que si la stérilisation se fait par la chaleur séche",
          "A pour but de protéger le matériel propre avant stérilisation.",
          "Permet de conserver l'état stérile après stérilisation."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "A-Faux: L'étape finale de la chaîne d'asepsie est le **stokage**. \n🡪les étapes de la chaîne d'asepsie sont:\n1. **Pré-désinfection**\n2. **Nettoyage**\n3. **Désinfection**\n4. **Rinçage **\n5.**Séchage**\n6.**Conditionnement**\n7.**stérilisation**\n\n8.**stokage**\nB-Le conditionnement ne concerne que le matériel propre et sec. Il permet de maintenir la stérilité après la stérilisation, quelle que soit la méthode utilisée, jusqu'à la prochaine utilisation."
      },
      {
        "questionText": "N°11 (2024 RATT - Q656\nParmi ces propositions, laquelle(s) est (sont) juste(s):",
        "options": [
          "La pré-désinfection a pour but d'éviter le séchage des souillures sur le matériel",
          "Le nettoyage assure l'élimination de toute forte microbienne",
          "Le traitement requis en zone Test un bionettoyage quotidien",
          "Le conditionnement des dispositifs médicaux n'est nécessaire que si la stérilisation se fait par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-vrais :-Pré-désinfection: permet de diminuer la quantité de salissures, de réduire la charge microbienne initiale du matériel contaminé et de faciliter son nettoyage.\nb-faux : Le nettoyage permet de réduire la présence de saletés, de débris et d'autres contaminants visibles, mais il ne permet pas d'éliminer toutes les formes de microbes (bactéries, virus, champignons, etc.). Pour éliminer efficacement les microbes, il est souvent nécessaire de désinfecter les matériaux après les avoir nettoyées. Le nettoyage seul ne garantit pas la destruction des micro-organismes pathogènes.\nc-faux: Zone 1: Nettoyage quotidien dit domestique;\nd:faux: le conditionnement est une étape critique et indispensable pour tous les dispositifs médicaux, quel que soit le procédé de stérilisation utilisé. Il garantit la stérilité, la sécurité et l'intégrité du dispositif jusqu'à son utilisation finale."
      },
      {
        "questionText": "N°2 (2023 EMD - Q883\nLa gestion des OPCT:",
        "options": [
          "Répond à une réglementation bien spécifique..",
          "Est la même que pour les DASRI",
          "Se fait à l'aide de conteneurs rigides.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "a-vraisb- Ce n'est pas correct. Le bac à déchets permet d'évacuer au fur et à mesure de l'intervention les déchets à risque infectieux (DASRI) comme le matériel souillé par le sang ou la salive (dents extraites, compresses, tuyaux d'aspiration, etc.). En revanche, il faut prévoir un conteneur spécial (récupéré et éliminé par des sociétés spécialisées) pour les objets piquants, tranchants, coupants (OPCT) tels que les lames de bistouri, aiguilles, etc.c-vrais :"
      },
      {
        "questionText": "N°2 (2023 RATT - Q872\nDans un cabinet dentaire.",
        "options": [
          "La zone 2 nécessite un nettoyage quotidien avec un produit détergent",
          "La zone 3 nécessite un bionettoyage après toute intervention avec un produit détergent désinfectant nomé",
          "La circulation à sens unique du patient est préconisée",
          "Le risque de contamination aérienne se situe uniquement dans la salle de soin"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "a-faux : la zone 2 nécessite un Bionettoyage quotidien avec un produit détergent désinfectant normé\n b-vrais :la Zone 3 nécessite un Bionettoyage après toute intervention avec un produit détergent désinfectant normé.\n c-vrais : Dans le cadre du meilleur contrôle des règles d'hygiène et d'asepsie, il devient logique d'établir une circulation à sens unique du patient.\n d-faux :le risque de contamination aérienne ne se limite pas uniquement à la salle de soins. Bien que cette dernière soit l'endroit principal où des procédures générant des aérosols peuvent se produire, d'autres zones du cabinet, comme la salle d'attente, les couloirs ou les bureaux, peuvent également présenter un risque de contamination, surtout si les protocoles de désinfection et de ventilation ne sont pas strictement suivis."
      },
      {
        "questionText": "N°11 (2023 EMD - Q1036\nLes instruments réutilisables dits critiques:",
        "options": [
          "Sont représentés par les instruments chirurgicaux",
          "Nécessitent une stérilisation sans emballage.",
          "Sont les instruments qui sont en contact avec la muqueuse buccale.",
          "Nécessitent une stérilisation avec emballage"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Les instruments critiques sont ceux qui pénètrent les tissus stériles, comme les instruments chirurgicaux. Ils doivent impérativement être stérilisés avec un emballage (conditionnement) pour maintenir leur stérilité."
      },
      {
        "questionText": "N°12 (2023 RATT - Q1064\nLe lavage des mains:",
        "options": [
          "Se fait avec une solution hydroalcoolique.",
          "Peut remplacer le port des gants",
          "Se fait après chaque soin.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "a-faux : c'est L'antisepsie ou la désinfection des mains qui réalisée avec une solution hydroalcoolique est une méthode très efficace pour éliminer les micro-organismes présents sur la peau.b-faux :Le lavage des mains, ne remplace pas le port de gants. Les gants servent de barrière physique supplémentaire contre les infections et les contaminations croisées.c-vrais"
      },
      {
        "questionText": "La pré-désinfection:",
        "options": [
          "Permet d'obtenir des instruments en état de stérilisation.",
          "A pour objectif de faciliter le nettoyage en évitant le séchage des matières organiques.",
          "Se fait par immersion des instruments dans un bac contenant un produit détergent- désinfectant pendant 15 min minimum.",
          "Peut se faire à la chaleur sèche."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "La pré-désinfection facilite le nettoyage en évitant le séchage des matières organiques et se fait par immersion dans un produit détergent-désinfectant. Ce n'est pas une méthode de stérilisation."
      },
      {
        "questionText": "N°2 (2021 EMD - Q1581\nLa stérilisation:",
        "options": [
          "Se fait grâce à la vapeur d'eau saturée.",
          "Le plateau thermique peut atteindre 134°C.",
          "Concerne seulement les instruments.",
          "Ne nécessite pas une désinfection préalable."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "Voici une analyse des affirmations concernant la stérilisation :A- **Vrai** : La stérilisation a pour but de prévenir la contamination croisée en éliminant tous les micro-organismes, incluant bactéries, virus et champignons, afin de casser le cycle de l'infection.B- **Faux** : La stérilisation ne concerne pas uniquement les surfaces souillées. Elle concerne principalement les instruments et matériaux réutilisables, qui doivent être stérilisés avant leur utilisation.C- **Faux** : L'immersion des instruments dans un bac avec un produit détergent-désinfectant est une étape de **désinfection** ou de pré-désinfection, mais pas de stérilisation. La stérilisation suit cette étape, généralement dans un autoclave.D- **Faux** : La chaleur sèche n'est plus la méthode de référence. Actuellement, la méthode de référence est la stérilisation à la chaleur humide, en autoclave, qui est plus efficace pour éliminer les micro-organismes.Les réponses correctes sont donc : **A uniquement.**"
      },
      {
        "questionText": "N°13 (2022 EMD - Q1435\nParmi ces propositions, laquelle/lesquelles est/sont juste(s):",
        "options": [
          "La stérilisation des instruments doit se faire à la chaleur humide, en respectant généralement une température de 134°",
          "Le nettoyage assure l'élimination de toute forme microbienne.",
          "Le traitement requis en zone lest un bionettoyage quotidien.",
          "Le conditionnement des dispositifs médicaux n'est nécessaire que si la stérilisation se fait par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "a-vrai: La stérilisation des instruments à la chaleur humide (autoclave) est généralement effectuée à une température de 134°C pendant un certain temps (habituellement 18 minutes), ce qui est conforme aux recommandations pour éliminer les micro-organismes.b- Faux : Le nettoyage seul n'assure pas l'élimination de toutes les formes microbiennes. Il permet d'éliminer la saleté, les matières organiques et certaines bactéries, mais la désinfection ou la stérilisation sont nécessaires pour éliminer les agents pathogènes.c- Faux : En zone 1 (zone à haut risque d'infection, comme les salles opératoires), un **Nettoyage quotidien** dit domestique est généralement requis pour maintenir une hygiène stricte.d- Faux : Le conditionnement des dispositifs médicaux est nécessaire quel que soit le mode de stérilisation (chaleur sèche, chaleur humide, etc.), afin de préserver la stérilité des dispositifs jusqu'à leur utilisation."
      },
      {
        "questionText": "La stérilisation:",
        "options": [
          "A pour objectif de prévenir le risque infectieux, tant pour le patient que pour l'équipe soignante.",
          "Vise à obtenir un état propreté microscopique à la surface de l'instrumentation.",
          "S'effectue au moyen d'un thermo-désinfecteur dont le principe est de combiner la chaleur et pression élevée",
          "S'adresse uniquement aux dispositifs médicaux non dynamiques."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'objectif principal et ultime de la stérilisation est d'éliminer tous les micro-organismes (bactéries, virus, spores) pour prévenir le risque infectieux. La propreté est l'objectif du nettoyage."
      },
      {
        "questionText": "La stérilisation:",
        "options": [
          "A pour objectif l'élimination de la contamination croisée , on cassant le cycle de l'infection",
          "Ne concerne que les surfaces souillées",
          "Se fait par immersion des instruments dans un bac content un produis détergent désinfectant",
          "A la chaleur sèche, est actuellement la méthode de référence"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'objectif de la stérilisation est de casser le cycle de l'infection en éliminant la contamination croisée. Elle concerne les instruments réutilisables, pas seulement les surfaces. La méthode de référence est la chaleur humide (autoclave)."
      },
      {
        "questionText": "N°7 (2020 EMD - Q1912\nEn pratique quotidienne, les instruments rotatif:",
        "options": [
          "Ne sont pas autoclavables",
          "Leur désinfection suffit pour une autre réutilisation",
          "Leur stérilisation se fait uniquement à la chaleur sèche afin d'assurer leur longévité",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Voici une analyse des affirmations concernant les instruments rotatifs en pratique quotidienne :A- **Faux** : Les instruments rotatifs modernes (comme les turbines et contre-angles) sont généralement autoclavables, à condition de respecter les instructions du fabricant.B- **Faux** : La désinfection seule n'est pas suffisante pour réutiliser les instruments rotatifs. Ils doivent être stérilisés pour assurer la sécurité des patients et prévenir toute contamination croisée.C- **Faux** : La stérilisation des instruments rotatifs ne se fait pas uniquement à la chaleur sèche. La méthode de stérilisation par chaleur humide (autoclave) est souvent préférée, car elle est plus efficace. Cependant, il est important de respecter les recommandations des fabricants pour éviter d'endommager les instruments.D- **Vrai** : Aucune des réponses proposées n'est correcte.Donc, la réponse correcte est **D**."
      },
      {
        "questionText": "La stérilisation des instruments doit se faire:",
        "options": [
          "A la chaleur sèche",
          "Par immersion dans un bac contenant un produit détergent-désinfection. en respectant un temps minimum de 30 min",
          "A la chaleur humide avec une température de 134, maintenu au moins 18 minutes",
          "D'abord au poupinel puis à l'autoclave afin de renforcer ce procédé"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La méthode de référence pour la stérilisation en cabinet dentaire est la chaleur humide (autoclave de classe B) avec un cycle à 134°C maintenu pendant au moins 18 minutes."
      }
    ]
  },
  {
    "title": "Indications et contre-indications des extractions",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°11 (2024 EMD - Q657\nLes contre-indications de l’extraction dentaire sont:",
        "options": [
          "Une dent de sagesse incluse asymptomatique",
          "Une résorption radiculaire.",
          "Une dent fonctionnelle cariée.",
          "Une dent de lait mobile"
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "parmi les indications d’extraction d’ordre local La maladie parodontale non prise en charge est responsable d’une perte osseuse importante entrainant des mobilités dentaires avec dénudation radiculaire dont le traitement échoue le plus souvent.\nc- Les dents cariées fonctionnelles récupérables, c'est-à-dire qui peuvent être traitées et conservées, sont cotre-indiquées pour l’extraction."
      },
      {
        "questionText": "N°14 (2024 RATT - Q720\nL’avulsion d'une dent de lait est indiquée, si:",
        "options": [
          "Elle est à l'origine d'une parulie",
          "Elle siège sur le trait de fracture",
          "Elle est cariée.",
          "La dent permanente est absente"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "a-vrais : Une parulie (ou abcès gingival) indique une infection dentaire qui peut affecter la santé bucco-dentaire de l'enfant. L'extraction de la dent infectée est souvent nécessaire pour éliminer la source de l'infection et prévenir la propagation.\n b-vrais :Si une dent de lait est située sur un trait de fracture de la mâchoire, elle peut gêner la guérison ou causer des complications. Son extraction est souvent indiquée pour faciliter la consolidation de la fracture.\n  \n c-faux :Une carie seule n'est pas une indication suffisante pour extraire une dent de lait. Les dents de lait cariées peuvent être traitées par des restaurations (plombages), sauf si la carie est très avancée et compromet la structure de la dent ou provoque une infection et la dent jugées irrécupérables.\n  \n d-faux :Si la dent permanente est absente (agénésie), on essaie généralement de conserver la dent de lait aussi longtemps que possible pour maintenir l'espace et la fonction. L'extraction n'est pas indiquée dans ce cas."
      },
      {
        "questionText": "N°3 (2023 EMD - Q905\nAvant une avulsion dentaire, le risque hémorragique est évalué chez:",
        "options": [
          "Les malades souffrant d'un trouble plaquettaire.",
          "Les malades sous anticoagulants.",
          "Les malades traités par radiothérapie cervico-faciale.",
          "Les hémophiles."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "A-vrais : Les patients souffrant d’un trouble plaquettaire, il faut\n s’assurer que le taux de plaquettes  est supérieur à l00000/m1 en pratique de ville et est supérieur à 50000/m1 en milieu hospitalier.\n b-vrais : la prise de médicaments anticoagulants, \n type Sintrom, nécessitent une attention particulière avant tout geste sanglant telle qu’une avulsion dentaire. Celle-ci ne doit être réalisée avant de s’assurer que le risque hémorragique est maitrisé.\n c-faux : la mise en état de la cavité orale avant la chimiothérapie et la radiothérapie cervico-faciale est une étape cruciale dans la prise en charge des patients atteints de cancer. Cela inclut souvent des avulsions dentaires pour prévenir des complications graves qui pourraient survenir en raison des traitements anticancéreux.\n d-vrais : L’hémophile modéré et sévère, il faut s’assurer que celui-ci a bien bénéficié d’une transfusion du facteur manquant."
      },
      {
        "questionText": "N°12 (2023 EMD - Q1066\nParmi les propositions suivantes, quelle(s) est(sont) celle(s) qui est(sont) vraie(s)?",
        "options": [
          "Les cardiopathes à risque infectieux peuvent subir une extraction dentaire avec un INR égale à 2.",
          "Une dent responsable d'un épisode infectieux type cellulite doit être extraite.",
          "Toute dent en malposition doit être extraite",
          "L'avulsion de la dent de sagesse mandibulaire peut être indiquée pour maintenir le résultat esthétique et éviter les récidives."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-faux : Les cardiopathes à risque infectieux peuvent subir une extraction dentaire avec un INR entre 2 et 4.b-faux : Toutes les dents normalement évoluées sur l’arcade lorsqu’elles sont jugées irrécupérables, lorsqu’elles sont responsables d’accidents infectieux type cellulite ou ostéite, et lorsque le traitement conservateur est impossible ou si elles présentent des lésions apicales importantes ou avancées.c-faux : Les dents en malposition qui ne participent pas à la fonction, telle que la mastication, ou qui créent une disgrâce esthétique, doivent être extraites en cas d'échec ou d'impossibilité d'une thérapeutique orthodontiqued-vrais:"
      },
      {
        "questionText": "N°11 (2023 RATT - Q1033\nPar définition, une dent ectopique:",
        "options": [
          "Est située au niveau du maxillaire mais éloignée du site normal",
          "Est située en dehors des maxillaires",
          "Occupe une place normale sur l'arcade mais elle a subi une rotation de 45° à 180° autour de son axe longitudinal",
          "A subi une rotation de 180° autour de Faxe mésio-distal plaçant ainsi la racine en position buccale et la couronne en position apicale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "a-vrais :Une dent ectopique est une dent dont l'éruption se fait dans un site plus ou moins éloigné de la normale.Dent ectopiqueb-faux : Bien qu'une dent ectopique soit mal positionnée, elle est toujours située au niveau du maxillaire ou de la mandibule.c-faux : Ce cas correspond à une dent avec une rotation anormale, mais cela n'implique pas une éruption ectopique. La dent est toujours à l'emplacementattendu, bien qu'elle soit mal orientée.Dent en rotationd-faux :Cette description correspond à une inversion dentaire, pas à une éruption ectopique. ."
      },
      {
        "questionText": "N°8 (2022 EMD - Q1346\nParmi les indications d'extraction des dents temporaires :",
        "options": [
          "Dents cariées présentant une pulpite irréversible.",
          "Dents temporaires à l'origine de parulies.",
          "Dents temporaires qui bloquent l'éruption physiologique des dents permanentes.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "a-Vrai :Lorsque les dents temporaires sont sévèrement cariées et que la pulpe est atteinte de manière irréversible (pulpite irréversible), l'extraction peut être nécessaire pour éviter la propagation de l'infection et la douleur.b-Vrai: les parulies sont souvent le signe d'une infection chronique autour de la dent. Si une dent temporaire est à l'origine d'une parulie (abcès), cela justifie son extraction pour traiter l'infection.c-vrai: Si une dent temporaire empêche l'éruption normale d'une dent permanente, son extraction est indiquée pour permettre à la dent permanente de prendre sa place correctement."
      },
      {
        "questionText": "N°10 (2022 EMD - Q1376\nChez les patients présentant un risque hémorragique, l'extraction dentaire est effectuée:",
        "options": [
          "Avec un taux d'INR récent compris entre 2-4.",
          "Avec un taux d'INR récent supérieur à 4.",
          "Avec un taux de plaquettes inférieur à 50 000 /mm².",
          "Avec un taux de plaquettes supérieur à 100 000/mm."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "b-faux : Chez les patients présentant un risque hémorragique, l'extraction dentaire est effectuée avec un taux d’INR entre 2-4\n c :faux : Chez les patients présentant un risque hémorragique, l'extraction dentaire est effectuée avec un taux de plaquettes supérieur à 100000/mm³"
      },
      {
        "questionText": "N°14 (2022 EMD - Q1451\nL'antibioprophylaxie lors de l'extraction dentaire chez les cardiopathies à risque d'endocardite infectieuse est:",
        "options": [
          "Obligatoire.",
          "Facultative.",
          "Basée sur l'administration de 2 gr d'amoxicilline 30 min à 1h avant l'acte.",
          "Basée sur l'administration de 2gr d'amoxicilline 48 h avant l'acte."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "a-vrai : l'antibioprophylaxie est obligatoire  pour les patients présentant un risque élevé d'endocardite infectieuse, notamment ceux avec des antécédents de cardiopathies spécifiques.\n  \n b- Faux :elle n'est pas facultative chez les patients à risque élevé d'endocardite.\n  \n c- vrai: La recommandation est l'administration de 2 g d'amoxicilline 30 minutes à 1 heure avant l'acte pour une prophylaxie efficace.\n  \n d- Faux :L'administration 48 heures avant l'acte n'est pas recommandée."
      },
      {
        "questionText": "N°3 (2021 EMD - Q1601\nParmi les indications locales de l'extraction de la dent de 6 ans, nous citons:",
        "options": [
          "Une atteinte de la furcation par lésion carieuse avancée",
          "La présence d'une lésion péri-apicale volumineuse à l'origine d'une cellulite..",
          "Une dyschromie.",
          "Une fracture longitudinale radiculaire sous une couronne coulée"
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "a-vrai. Une atteinte avancée de la furcation par carie peut justifier l'extraction.b-vrai. Une lésion péri-apicale importante avec des complications telles qu'une cellulite nécessiter l'extraction.c-faux : La dyschromie (changement de couleur d'une dent) n'est pas une indication d’extraction.d-Vrai . Une fracture radiculaire importante peut nécessiter l'extraction de la dent."
      },
      {
        "questionText": "N°14 (2021 EMD - Q1787\nParmi les contre-indications de l'extraction d'une dent de sagesse, nous citons",
        "options": [
          "Evolution avec positionnement correcte de la dent sur l'arcade.",
          "Dent cariée à l'origine d'accidents infectieux récurrents.",
          "Dent située sur un trait de fracture de l'angle mandibulaire,",
          "Dent saine entravant l'éruption physiologique de la dent adjacente."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A-vrai: Parmi les contre-indications de l'extraction d'une dent de sagesse :Dents bien positionnées sur l’arcade, fonctionnelles, asymptomatiques, sans pathologie carieuse avec un parodonte sain.b-faux : Une dent de sagesse à l'origine d'infections récurrentes constitue une indication pour l'extraction.c-faux : dans le cas d'une dent de sagesse située sur un trait de fracture de l'angle mandibulaire , il peut être recommandé d'extraire les dents de sagesse pour favoriser la consolidation de la fracture.D-faux : Si une dent de sagesse empêche l'éruption normale des autres dents, il est indiqué de l'extraire."
      },
      {
        "questionText": "N°19 (2021 EMD - Q1871\nLes extractions dentaires sont contre-indiquées dans les cas suivants:",
        "options": [
          "Une péricoronarite suppurée en rapport avec une 38 enclavée.",
          "Un patient porteur de prothèse valvulaire avec un INR égale à 4.90.",
          "Un patient porteur d'une prothèse valvulaire avec un INR égale à 2.30.",
          "Un patient diabétique mal équilibré sans aucune précaution particulière."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "AB et D normalement correcteA- vrai : le cas d'une infection suppurée, il est recommandé de drainer l'infection en premier lieu et d'administrer une antibiothérapie avant de procéder à l'extraction. Toutefois, une fois l'infection contrôlée, l'extraction de la dent enclavée peut être réalisée pour éviter des récidives.B-vrai :Un INR (International Normalized Ratio) de 4.90 indique un risque hémorragique élevé. Dans ce cas, l'extraction est contre-indiquée tant que l'INR n'est pas stabilisé à un niveau acceptable (en général, entre 2et4)C-faux : Un INR de 2.30 est dans la plage thérapeutique pour les patients sous anticoagulants (en général entre 2.0 et 4.0). Dans ce cas, l'extraction peut être réalisée avec des précautions spécifiques (comme une gestion hémostatique adaptée).D- vrai :Un patient diabétique mal contrôlé présente un risque accru d'infection et de mauvaise cicatrisation. L'extraction dentaire est contre-indiquée dans ce cas sans un contrôle préalable de la glycémie et des précautions adaptées (par exemple, ajustement du traitement et suivi médical).Le diabète non équilibré ou l’antibiotique est prescrit 02 jours avant l’avulsion dentaire et est maintenue jusqu’à cicatrisation muqueuse du site opératoire."
      },
      {
        "questionText": "N°5 (2019 EMD - Q1984\nDans quel cas l'indication de l'avulsion parait indiscutable",
        "options": [
          "A chaque fois qu'il y a un processus caricux",
          "Devant toutes anomalies de position.",
          "Lorsqu'il ya une maladie parodontale avec une perte osseuse et mobilité dentaire",
          "Lors d'une cellulite séreuse"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A- Faux: Un processus carieux n'indique pas toujours une avulsion dentaire. La dent peut souvent être restaurée par des traitements conservateurs . si le dommage n'est pas trop avancé.B-faux: Les anomalies de position ne nécessitent pas systématiquement une extraction. D'autres options comme l'orthodontie peuvent être envisagées.Traitement orthodontique de mal position dentaireC-Vrai:Une maladie parodontale avancée avec perte osseuse et mobilité dentaire est une indication claire pour une extraction, car la dent ne peut plus être maintenue en place.D-faux: Une cellulite séreuse est une infection qui peut être traitée médicalement ou avec drainage chirurgical, mais cela ne justifie pas toujours une extraction dentaire."
      },
      {
        "questionText": "N°11 (2019 EMD - Q2004\nUne femme enceinte de 04 mois se présente pour l'avulsion de la 36:",
        "options": [
          "Il est préférable d'attendre après l'accouchement pour réaliser l'avulsion",
          "L'avulsion est possible mais avec une prémédication sédative",
          "L'avulsion peut être réalisée mais en évitant l'anesthésie tronculaire",
          "L'avulsion peut être réalisée en toute sécurité"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A-Vrai :il est préférable d'éviter les interventions non urgentes pendant la grossesse si possible.\n  \n B-faux : L'avulsion dentaire peut être réalisée pendant la grossesse, et l'utilisation de prémédications sédatives n'est pas nécessaire.\n  \n C-faux :L'anesthésie tronculaire peut être utilisée chez les femmes enceintes, et son administration dépend principalement de l'état de santé général du patient, plutôt que de la grossesse elle-même. \n  \n D- Vrai :Les dernières études ont montré que l'avulsion dentaire chez la femme enceinte est tout à fait possible."
      },
      {
        "questionText": "N°18 (2019 EMD - Q2020\nParmi ces propositions, laquelle est vraie ?",
        "options": [
          "L'avulsion est contre indiquée chez toutes les personnes âgées sans bilan sanguin préalable",
          "Chez un patient sous anticoagulants, il convient d'évaluer le risque hémorragique avant d'intervenir.",
          "L'avulsion dentaire expose à un risque hémorragique tous les patients qui présentent un antécédent d'endocardite d'Osler",
          "L'avulsion dentaire peut être réalisée en toute sécurité chez les patients sous immuno- suppresseurs."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A-Faux. Bien que le bilan sanguin soit recommandé pour évaluer la santé générale dans certains cas, l'avulsion n'est pas automatiquement contre-indiquée chez les personnes âgées sans bilan préalable. La décision doit être basée sur l'évaluation clinique individuelle.\n  \n - B : Vrai. Les patients sous anticoagulants présentent un risque accru de saignement. Il est crucial d'évaluer ce risque et de gérer les anticoagulants correctement avant toute intervention, y compris les avulsions dentaires.\n  \n C-Faux. Les antécédents d'endocardite d'Osler nécessitent des précautions pour prévenir les infections, mais le risque hémorragique n'est pas nécessairement élevé. L'évaluation des risques doit être spécifique au patient.\n  \n D- Faux. Les patients sous immunosuppresseurs ont un risque accru d'infections et de complications. Des précautions spécifiques doivent être prises pour réduire ces risques."
      }
    ]
  },
  {
    "title": "EMD Patho 2024",
    "subject": "patho",
    "questions": [
      {
        "questionText": "L'examen clinique exo-buccal :",
        "options": [
          "A. Est une étape incontournable de la consultation initiale.",
          "B. Permet de déceler les signes subjectifs d'une pathologie.",
          "C. Est toujours précédé d'un bilan radiologique.",
          "D. Doit rechercher une réaction péri-apicale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'examen exo-buccal est une étape fondamentale de l'examen clinique initial. Il permet de déceler les signes objectifs (observables par le clinicien), tandis que les signes subjectifs sont recueillis lors de l'interrogatoire. Le bilan radiologique est un examen complémentaire."
      },
      {
        "questionText": "Dans une carpule anesthésique, le produit est sous forme:",
        "options": [
          "A. Non ionisée",
          "B. Ionisée",
          "C. Diffusible",
          "D. Non diffusible."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Pour traverser les membranes nerveuses, la molécule anesthésique doit être sous sa forme non ionisée (liposoluble) et donc diffusible. Elle ne devient ionisée (active) qu'à l'intérieur de la fibre nerveuse pour bloquer les canaux sodiques."
      },
      {
        "questionText": "Le temps alvéolaire (curetage) après une extraction :",
        "options": [
          "A. Consiste à éliminer le tissu de granulation pathologique.",
          "B. Est systématique et obligatoire pour toutes les extractions.",
          "C. Permet de retirer un fragment osseux ou dentaire fracturé.",
          "D. Ne concerne que les dents pluriradiculées."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le temps alvéolaire consiste à explorer l'alvéole pour retirer tout tissu pathologique (granulome, kyste) et les éventuels fragments résiduels. Il n'est pas systématique si l'alvéole est saine."
      },
      {
        "questionText": "L'éruption dentaire:",
        "options": [
          "A. Est un processus biologique par lequel une dent en développement émerge à travers l'os et la muqueuse orale.",
          "B. Est un processus continu qui ne se termine qu'avec la perte de la dent.",
          "C. Correspond aux phénomènes liés à l'évolution des dents sur l'arcade (dentition).",
          "D. Désigne l'ensemble des dents en place sur l'arcade (denture)."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "L'éruption est le processus d'émergence de la dent (A) et il continue tout au long de la vie pour compenser l'usure (B). La dentition (C) est le phénomène dynamique d'éruption, tandis que la denture (D) est l'état statique des dents présentes."
      },
      {
        "questionText": "L'examen de la cinétique mandibulaire met en évidence:",
        "options": [
          "A. Le degré de l'ouverture buccale.",
          "B. Une suppuration.",
          "C. L'état des muqueuses.",
          "D. Le jeu des condyles mandibulaires."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "La cinétique mandibulaire évalue les mouvements de la mâchoire, ce qui inclut l'amplitude de l'ouverture et le mouvement des condyles dans l'articulation. La suppuration et l'état des muqueuses sont évalués lors de l'examen endo-buccal."
      },
      {
        "questionText": "La forme hypoplasique de l’amélogénèse imparfaite :",
        "options": [
          "A. Correspond à une déficience de la quantité d'émail.",
          "B. Atteint particulièrement les molaires temporaires.",
          "C. Est caractérisée par une minéralisation normale de l'émail présent.",
          "D. Est une anomalie acquise."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Le type hypoplasique est une anomalie héréditaire (D est faux) caractérisée par une matrice d'émail en quantité insuffisante (A), mais la matrice qui est présente a une minéralisation normale (C)."
      },
      {
        "questionText": "La chute prématurée des dents temporaires:",
        "options": [
          "A. Peut être due au développement précoce du germe d'une dent permanente.",
          "B. Peut être associée à des pathologies générales comme le Chérubisme.",
          "C. Est une indication pour la pose d'un mainteneur d'espace.",
          "D. Concerne préférentiellement la canine maxillaire."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La chute prématurée peut avoir une cause locale (éruption précoce du germe sous-jacent) ou générale (pathologies). Pour éviter la perte d'espace, la pose d'un mainteneur d'espace est souvent indiquée."
      },
      {
        "questionText": "La pré-désinfection :",
        "options": [
          "A. Est une forme de stérilisation à froid.",
          "B. A pour objectif de faciliter le nettoyage en évitant le séchage des matières organiques.",
          "C. Rend le port de gants inutile lors du nettoyage.",
          "D. Se fait par immersion des instruments dans un produit détergent-désinfectant."
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "La pré-désinfection est la première étape de la chaîne d'asepsie. Elle se fait par trempage dans un bac de décontamination pour réduire la charge microbienne et faciliter le nettoyage ultérieur. Elle ne remplace ni la stérilisation ni le port d'équipements de protection."
      },
      {
        "questionText": "La communication bucco-sinusienne:",
        "options": [
          "A. Fait suite à l'extraction de dents antrales (maxillaires postérieures).",
          "B. Se manifeste par un test de Valsalva positif.",
          "C. Se manifeste par un reflux de liquide par le nez.",
          "D. Guérit toujours spontanément sans intervention."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "La CBS est une complication de l'extraction des dents maxillaires postérieures. Elle est confirmée par le test de Valsalva et peut provoquer un reflux de liquide. Si elle est large, une fermeture chirurgicale est nécessaire pour éviter une sinusite."
      },
      {
        "questionText": "Les contre-indications de l’extraction dentaire sont:",
        "options": [
          "A. Une dent de sagesse incluse asymptomatique.",
          "B. Une résorption radiculaire avancée.",
          "C. Une dent fonctionnelle avec une carie traitable.",
          "D. Une dent de lait présentant une mobilité physiologique avant son remplacement."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Une dent incluse asymptomatique ou une dent cariée mais restaurable ne sont pas des indications d'extraction. La résorption et la mobilité physiologique sont des phénomènes normaux menant à l'extraction ou la chute de la dent."
      },
      {
        "questionText": "Le conditionnement des instruments (emballage) :",
        "options": [
          "A. Est l'étape finale de la chaîne d'asepsie.",
          "B. N'est pas nécessaire si on utilise un autoclave de classe B.",
          "C. A pour but de protéger le matériel avant la stérilisation.",
          "D. Permet de conserver l'état stérile après la stérilisation."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": "Le conditionnement protège les instruments propres et secs avant de passer à l'autoclave (C) et, surtout, maintient la barrière stérile après la stérilisation jusqu'à l'utilisation (D). Il est obligatoire pour la stérilisation en autoclave."
      }
    ]
  },
  {
    "title": "RATT Patho 2023",
    "subject": "patho",
    "questions": [
      {
        "questionText": "Concernant l'éruption en dentition temporaire :",
        "options": [
          "A. L’éruption a lieu plus tôt chez les garçons que chez les filles.",
          "B. L'éruption chez les filles précède toujours celle des garçons.",
          "C. Les dents mandibulaires précèdent systématiquement les dents maxillaires.",
          "D. Les incisives centrales mandibulaires précèdent généralement leurs homologues maxillaires."
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Contrairement à la denture permanente, l'éruption des dents temporaires est légèrement plus précoce chez les garçons (A). Il est très fréquent que les incisives centrales mandibulaires soient les premières à apparaître (D)."
      },
      {
        "questionText": "Après une avulsion dentaire simple, quels conseils sont incorrects ?",
        "options": [
          "A. Éviter les bains de bouche pendant les 24 premières heures.",
          "B. Consommer une alimentation chaude et liquide le premier jour.",
          "C. Prescrire systématiquement un antibiotique.",
          "D. Appliquer de la glace sur la joue par intermittence."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Il faut conseiller une alimentation froide ou tiède pour ne pas dissoudre le caillot (B est incorrect). La prescription d'antibiotiques n'est pas systématique (C est incorrect). Éviter les bains de bouche et appliquer de la glace sont des conseils corrects."
      },
      {
        "questionText": "L'amélogénèse imparfaite :",
        "options": [
          "A. Est une anomalie de structure de l'émail.",
          "B. Est d'origine héréditaire.",
          "C. Affecte toutes ou la quasi-totalité des dents des deux dentures.",
          "D. Se manifeste uniquement par des taches blanches sur les dents."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L'amélogénèse imparfaite est une maladie génétique (B) qui affecte la structure de l'émail (A) sur l'ensemble des deux dentures (C). Ses manifestations sont variées (émail fin, rugueux, décoloré, fragile) et ne se limitent pas à de simples taches blanches (D est faux)."
      },
      {
        "questionText": "L'ouverture accidentelle du sinus maxillaire (CBS) :",
        "options": [
          "A. Est une complication possible lors de l'extraction d'une molaire maxillaire.",
          "B. Se diagnostique en demandant au patient de souffler fort par le nez en le pinçant.",
          "C. Se traduit par un saignement nasal immédiat.",
          "D. Guérit toujours spontanément si elle est de petite taille."
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "La CBS est un risque lors de l'extraction des molaires et prémolaires supérieures (A). Le test de Valsalva (B) confirme le diagnostic en montrant un passage d'air. Le saignement nasal n'est pas un signe constant. La guérison spontanée n'est pas garantie et une fermeture est souvent nécessaire."
      },
      {
        "questionText": "L'anesthésie tronculaire à l'épine de Spix est complétée par une:",
        "options": [
          "A. Anesthésie muqueuse vestibulaire (anesthésie du nerf buccal).",
          "B. Anesthésie para-apicale linguale.",
          "C. Anesthésie intra-ligamentaire.",
          "D. Anesthésie intra-septale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'anesthésie à l'épine de Spix endort le nerf alvéolaire inférieur (dents, os, gencive linguale) et le nerf lingual. Cependant, la gencive vestibulaire des molaires est innervée par le nerf buccal, qui doit être anesthésié séparément par une infiltration locale."
      },
      {
        "questionText": "L'avulsion d'une dent de lait est indiquée si :",
        "options": [
          "A. Elle est à l'origine d'une infection (abcès, parulie).",
          "B. Elle est située sur un trait de fracture.",
          "C. Elle présente une simple carie de l'émail.",
          "D. Elle persiste sur l'arcade alors que sa remplaçante a fait éruption."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "L'infection (A), la présence sur un trait de fracture (B), ou la persistance anormale qui gêne la dent permanente (D) sont des indications d'extraction. Une simple carie de l'émail (C) est une indication de soin conservateur."
      },
      {
        "questionText": "L'anesthésie est moins efficace en milieu infectieux car :",
        "options": [
          "A. L'acidité du tissu infecté ionise la molécule anesthésique avant qu'elle ne pénètre le nerf.",
          "B. L'inflammation augmente la vascularisation, ce qui élimine plus rapidement le produit.",
          "C. La pression de l'œdème empêche la diffusion du produit.",
          "D. Les bactéries détruisent la molécule d'anesthésique."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L'échec de l'anesthésie en milieu infectieux est multifactoriel : le pH acide ionise prématurément la molécule (A), l'hypervascularisation l'élimine plus vite (B), et l'œdème gêne sa diffusion (C)."
      }
    ]
  },
  {
    "title": "Examen Blanc Patho EMD 1",
    "subject": "patho",
    "questions": [
      {
        "questionText": "Lors de l'examen clinique exo-buccal, quels éléments doivent être systématiquement évalués ?",
        "options": [
          "A. La symétrie et les proportions du visage.",
          "B. La palpation des aires ganglionnaires cervico-faciales.",
          "C. La palpation et l'auscultation des articulations temporo-mandibulaires (ATM).",
          "D. L'indice de plaque et l'indice de saignement."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "L'examen exo-buccal comprend l'inspection du visage (symétrie), la palpation des aires ganglionnaires et des ATM. Les indices de plaque et de saignement font partie de l'examen endo-buccal."
      },
      {
        "questionText": "La dentinogénèse imparfaite se caractérise cliniquement et radiologiquement par :",
        "options": [
          "A. Une coloration ambrée ou opalescente des dents.",
          "B. Une oblitération progressive des chambres pulpaires et des canaux.",
          "C. Un émail de mauvaise qualité qui s'écaille facilement.",
          "D. Des racines courtes et frêles."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "La DI est une anomalie de la dentine. L'émail est de qualité normale mais s'écaille car il n'est pas soutenu par une dentine saine (C est faux mais la conséquence est vraie). La coloration (A), l'oblitération pulpaire (B) et les racines courtes (D) sont des signes typiques."
      },
      {
        "questionText": "Quelles sont les complications possibles d'une anesthésie tronculaire à l'épine de Spix mal conduite ?",
        "options": [
          "A. La formation d'un hématome dans l'espace ptérygo-mandibulaire.",
          "B. Une paralysie faciale a frigore transitoire si l'injection est trop postérieure.",
          "C. Un trismus (limitation douloureuse de l'ouverture buccale).",
          "D. Une communication bucco-sinusienne."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Une injection trop profonde peut léser des vaisseaux (hématome) ou atteindre le nerf facial dans la parotide (paralysie). Une blessure du muscle ptérygoïdien médial peut causer un trismus. La CBS est une complication de l'extraction maxillaire."
      },
      {
        "questionText": "Une éruption tardive de plusieurs dents permanentes peut être liée à :",
        "options": [
          "A. Un obstacle local comme un odontome.",
          "B. Des pathologies générales comme le rachitisme (carence en Vit D).",
          "C. Certains syndromes génétiques comme la dysostose cléido-crânienne.",
          "D. Un manque de place sévère sur l'arcade."
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "Un retard d'éruption généralisé à plusieurs dents oriente vers une cause systémique (B, C). Les obstacles locaux (A) ou le manque de place (D) affectent généralement une ou quelques dents de manière localisée."
      },
      {
        "questionText": "L'avulsion d'une dent est contre-indiquée (temporairement ou absolument) dans quelles situations ?",
        "options": [
          "A. Patient sous anticoagulants avec un INR de 5.",
          "B. Dent située sur un trait de fracture mandibulaire.",
          "C. Patient ayant subi une radiothérapie cervico-faciale récente (risque d'ostéoradionécrose).",
          "D. Dent temporaire présentant une pulpite irréversible."
        ],
        "correctOptionIndexes": [
          0,
          2
        ],
        "explanation": "Un INR>4 (A) et une radiothérapie récente (C) sont des contre-indications majeures. Une dent sur un trait de fracture (B) est souvent une indication d'extraction pour éviter l'infection du foyer. Une pulpite irréversible sur une dent de lait (D) est une indication d'extraction."
      }
    ]
  },
  {
    "title": "Examen Blanc Patho EMD 2",
    "subject": "patho",
    "questions": [
      {
        "questionText": "La chaîne de stérilisation des instruments réutilisables comprend les étapes essentielles suivantes :",
        "options": [
          "A. Pré-désinfection par immersion pour éviter le séchage des souillures.",
          "B. Nettoyage manuel ou en cuve à ultrasons pour éliminer les débris.",
          "C. Conditionnement (emballage) des instruments avant la stérilisation.",
          "D. Stérilisation au Poupinel (chaleur sèche) comme méthode de référence."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Les étapes A, B et C sont des maillons indispensables et corrects de la chaîne d'asepsie. La méthode de référence pour la stérilisation en odontologie est la chaleur humide sous pression (Autoclave de classe B), le Poupinel (D) étant obsolète."
      },
      {
        "questionText": "L'alvéolite sèche est caractérisée par :",
        "options": [
          "A. Une douleur intense, pulsatile et irradiante survenant 2 à 4 jours après l'extraction.",
          "B. La présence d'un caillot sanguin surinfecté et purulent dans l'alvéole.",
          "C. Une halitose (mauvaise haleine) caractéristique.",
          "D. Une alvéole osseuse mise à nu, vide de caillot."
        ],
        "correctOptionIndexes": [
          0,
          2,
          3
        ],
        "explanation": "L'alvéolite sèche se définit par la perte du caillot sanguin, laissant l'os alvéolaire exposé (D), ce qui provoque des douleurs très intenses (A) et une halitose (C). La présence de pus (B) caractérise l'alvéolite suppurée, qui est une complication différente."
      },
      {
        "questionText": "L'ajout d'un vasoconstricteur (ex: adrénaline) à une solution anesthésique permet de :",
        "options": [
          "A. Augmenter la durée et la profondeur de l'anesthésie.",
          "B. Diminuer le saignement dans le champ opératoire.",
          "C. Ralentir le passage de l'anesthésique dans la circulation générale, diminuant ainsi le risque de toxicité.",
          "D. Accélérer le délai d'action de l'anesthésique."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Le vasoconstricteur maintient l'anesthésique localement, ce qui prolonge et approfondit son effet (A), diminue le saignement (B) et réduit son absorption systémique (C). Il ne modifie pas significativement le délai d'action, qui dépend du pKa de la molécule."
      },
      {
        "questionText": "Une 'dent double' (fusion ou gémination) sur une dent temporaire peut entraîner :",
        "options": [
          "A. Des problèmes esthétiques.",
          "B. Un risque carieux accru au niveau du sillon de jonction.",
          "C. Un retard ou une modification de la trajectoire d'éruption de la dent permanente sous-jacente.",
          "D. Systématiquement l'agénésie de la dent permanente correspondante."
        ],
        "correctOptionIndexes": [
          0,
          1,
          2
        ],
        "explanation": "Une dent double pose des problèmes esthétiques (A) et d'hygiène (B). La racine anormale peut interférer avec la rhizalyse normale et perturber l'éruption de la dent de remplacement (C). L'agénésie de la dent permanente peut être associée, mais ce n'est pas systématique (D est faux)."
      },
      {
        "questionText": "Le davier pour une première molaire maxillaire (ex: 16) se caractérise par :",
        "options": [
          "A. Des mors asymétriques.",
          "B. Un ergot sur le mors vestibulaire destiné à s'insérer dans la furcation.",
          "C. Des mors symétriques et jointifs.",
          "D. Une forme générale avec une courbure (type baïonnette ou en S) pour dégager les dents antérieures."
        ],
        "correctOptionIndexes": [
          0,
          1,
          3
        ],
        "explanation": "Pour s'adapter à l'anatomie de la 16 (deux racines vestibulaires, une palatine), le davier a des mors asymétriques (A), avec un ergot vestibulaire pour la furcation (B). Sa forme est courbée pour permettre un accès correct en postérieur (D). Les mors ne sont pas jointifs (C)."
      }
    ]
  },
  {
    "title": "Approche psychologique de l’enfant",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°19 (2022 3°EMD - Q1524\nDevant un enfant timide et émotif, nous devons :",
        "options": [
          "nous montrer autoritaire.",
          "absolument le séparer des parents lors de la première consultation.",
          "essayer de gagner sa confiance.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Devant un enfant timide et émotif, nous devons :\n  A. Nous montrer autoritaire. Faux. Il faut être rassurant plutôt qu'autoritaire.\n B. Absolument le séparer des parents lors de la première consultation. Faux. Il est souvent préférable de ne pas forcer la séparation.\n C. Essayer de gagner sa confiance. Vrai. La confiance est essentielle dans ce contexte."
      },
      {
        "questionText": "N°20 (2022 3°EMD - Q1545\nLa petite enfance est une période : .",
        "options": [
          "où la communication verbale n’est pas possible.",
          "qui correspond aux trois premières années de la vie.",
          "qui correspond au stade oral de Freud.",
          "qui se caractérise par une grande dépendance à la mère"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La petite enfance est une période :\n  A. Où la communication verbale n’est pas possible. Faux. La communication verbale commence à se développer.\n B. Qui correspond aux trois premières années de la vie. Vrai. La petite enfance couvre cette période.\n C. Qui correspond au stade oral de Freud. Vrai. Freud décrit cette période comme le stade oral.\n D. Qui se caractérise par une grande dépendance à la mère. Vrai. La dépendance à la mère est une caractéristique clé."
      },
      {
        "questionText": "N°15 (2021 3°EMD - Q1796\nSelon la classification du comportement de l'enfant au cabinet dentaire de Frankl et coll:",
        "options": [
          "Le stade Il correspond à «l'enfant extrêmement positif».",
          "Est une classification fiable à 100%.",
          "Le stade III correspond à une: «attitude positive» l'enfant accepte le traitement.",
          "Tous les enfants sont retissant au premier RDV."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Selon la classification du comportement de l'enfant au cabinet dentaire de Frankl et coll.:\n  A. Le stade II correspond à «l'enfant extrêmement positif». Faux. Le stade II correspond à un comportement négatif, mais avec une acceptation de traitement.\n B. Est une classification fiable à 100 %. Faux. Aucune classification n'est fiable à 100 %.\n C. Le stade III correspond à une «attitude positive» ; l'enfant accepte le traitement. Vrai. Le stade III décrit un enfant coopératif qui accepte le traitement.\n D. Tous les enfants sont réticents au premier RDV. Faux. Les enfants peuvent avoir des comportements variés au premier RDV, certains étant coopératifs."
      },
      {
        "questionText": "N°16 (2021 3°EMD - Q1817\nLa méthode Tell- Show- Do de ADLESTON :",
        "options": [
          "Est une méthode pour contrôler le comportement de l'enfant au cabinet dentaire.",
          "Consiste à cacher les instruments et le matériel aux jeunes patients.",
          "Consiste à expliquer le rôle de chaque instrument avant son utilisation.",
          "Consiste à installer confortablement l'enfant sur le fauteuil."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La méthode Tell-Show-Do de ADLESTON :\n  A. Est une méthode pour contrôler le comportement de l'enfant au cabinet dentaire. Vrai. Cette méthode aide à gérer le comportement des enfants.\n B. Consiste à cacher les instruments et le matériel aux jeunes patients. Faux. La méthode consiste à montrer et expliquer les instruments, pas à les cacher.\n C. Consiste à expliquer le rôle de chaque instrument avant son utilisation. Vrai. \"Tell\" implique d'expliquer le rôle des instruments avant leur utilisation.\n D. Consiste à installer confortablement l'enfant sur le fauteuil. Faux. Bien qu'installer confortablement l'enfant soit important, ce n'est pas l'essence de la méthode."
      },
      {
        "questionText": "N°17 (2021 3°EMD - Q1826\nL'approche psychologique d'un enfant repose sur les moyens suivants :",
        "options": [
          "Soigner par la parole.",
          "Capter l'attention.",
          "Dédramatiser les instruments.",
          "Observer une progression dans les soins."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'approche psychologique d'un enfant repose sur les moyens suivants :\n  A. Soigner par la parole. Vrai. La communication est essentielle dans l'approche psychologique de l'enfant.\n B. Capter l'attention. Vrai. Garder l'attention de l'enfant est crucial pour une bonne coopération.\n C. Dédramatiser les instruments. Vrai. Il est important de rendre les instruments moins intimidants pour l'enfant.\n D. Observer une progression dans les soins. Faux."
      },
      {
        "questionText": "N°1 (2024 RATT - Q478\nLe stade I de la classification de FRANKL et Call, du comportement de l'enfant au cabinet dentaire, correspond à:",
        "options": [
          "Attitude extrêmement positive: l'enfant s'intéresse au traitement, plaisante.",
          "Attitude positive: enfant accepte le traitement mais reste méfiant.",
          "L'enfant est négatif : éprouve de la répugnance à accepter le traitement, peu coopératif.",
          "L'enfant est définitivement négatif : refuse le traitement, pleure et tremble de peur."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le stade I de la classification de FRANKL et Coll, du comportement de l'enfant au cabinet dentaire, correspond à :\n  A. Attitude extrêmement positive : l'enfant s'intéresse au traitement, plaisante. Faux. Cela correspond au stade IV.\n B. Attitude positive : l'enfant accepte le traitement mais reste méfiant. Faux. Cela correspond au stade III.\n C. L'enfant est négatif : éprouve de la répugnance à accepter le traitement, peu coopératif. Faux. Cela correspond au stade II.\n D. L'enfant est définitivement négatif : refuse le traitement, pleure et tremble de peur. Vrai. Le stade I correspond à un comportement définitivement négatif."
      },
      {
        "questionText": "N°19 (2024 2°EMD - Q798\nLors de la prise en charge de l'enfant au cabinet dentaire, il faut :",
        "options": [
          "Ne jamais dire ce que l'on va faire.",
          "Toujours dire ce que l'on doit faire et le faire.",
          "Détourner son attention et agir par surprise.",
          "Cacher le matériel au jeune patient pour ne pas l'effrayer.",
          "Elaborer un mensonge avec les parents pour contraindre l'enfant aux soins."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Lors de la prise en charge d’un enfant il faut\n -toujours dire ce qu’on va faire.\n -toujours faire ce qu’on a dis.\n -familiariser l’enfant avec le matériel pour éviter la peur de l’inconnue."
      },
      {
        "questionText": "N°20 (2024 2°EMD - Q821\nPendant les soins dentaires, l'enfant fatigué est :",
        "options": [
          "Plus coopératif et permet un meilleur déroulement des soins.",
          "Irritable, peut crier et pleurer.",
          "Moins agité et se tient tranquille.",
          "Plus sensible à la douleur : acuité sensorielle accrue."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un enfant fatigué est évidemment moins facile a gérer."
      },
      {
        "questionText": "N°6 (2023 3°EMD - Q946\nSelon la classification de Frankl et coll des comportements des enfants au cabinet dentaire :",
        "options": [
          "Le stade 1 correspond à un enfant extrêmement positif.",
          "Le stade 2 correspond à un enfant négatif qui éprouve de la répugnance à accepter le traitement.",
          "Le stade 3 correspond à un enfant qui accepte le traitement mais reste méfiant.",
          "Le stade 4 correspond à un enfant définitivement négatif."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Selon la classification de Frankl et coll des comportements des enfants au cabinet dentaire :\n  A. Le stade 1 correspond à un enfant extrêmement positif. Faux. Le stade 1 correspond à un enfant définitivement négatif.\n B. Le stade 2 correspond à un enfant négatif qui éprouve de la répugnance à accepter le traitement. Vrai. Ce stade décrit un enfant négatif mais non complètement opposé au traitement.\n C. Le stade 3 correspond à un enfant qui accepte le traitement mais reste méfiant. Vrai.\n D. Le stade 4 correspond à un enfant définitivement négatif. Faux. Le stade 4 représente un enfant qui s’interesse aux soins."
      },
      {
        "questionText": "N°7 (2023 3°EMD - Q972\nLa méthode Tell-Show- Do mise au point par ADLESTON consiste à :",
        "options": [
          "Dire ce que l'on va faire et faire ce que l'on dit.",
          "Expliquer, montrer puis faire.",
          "Montrer, faire puis expliquer.",
          "Faire, expliquer puis montrer."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La méthode Tell-Show-Do mise au point par ADLESTON consiste à :\n  A. Dire ce que l'on va faire et faire ce que l'on dit. Vrai. Cette approche correspond à l'essence de la méthode Tell-Show-Do.\n B. Expliquer, montrer puis faire. Vrai. Cette approche est également représentative de la méthode.\n C. Montrer, faire puis expliquer. Faux. L'ordre est incorrect, car l'explication vient avant l'action.\n D. Faire, expliquer puis montrer. Faux. L'ordre est incorrect, la démonstration précède l'action."
      },
      {
        "questionText": "N°8 (2023 3°EMD - Q995\nLors de la prise en charge d'un enfant au cabinet dentaire :",
        "options": [
          "Il faut éviter de parler à l'enfant et de le faire parler.",
          "Il faut l'appeler par son prénom.",
          "Il faut utiliser des termes agressifs comme douleur, mal et piqûre.",
          "Il faut dédramatiser les instruments en permettant à l'enfant de toucher et manipuler certains instruments."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Lors de la prise en charge d'un enfant au cabinet dentaire :\n  A. Il faut éviter de parler à l'enfant et de le faire parler. Faux. Parler avec l'enfant est crucial pour établir la confiance.\n B. Il faut l'appeler par son prénom. Vrai. Cela aide à créer un lien de confiance avec l'enfant.\n C. Il faut utiliser des termes agressifs comme douleur, mal et piqûre. Faux. Ces termes doivent être évités pour ne pas effrayer l'enfant.\n D. Il faut dédramatiser les instruments en permettant à l'enfant de toucher et manipuler certains instruments. Vrai. Cela aide à réduire l'anxiété de l'enfant."
      }
    ]
  },
  {
    "title": "Approche psychologique de patient",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°3 (2020 EMD - Q1901\nLa prémédication sédative",
        "options": [
          "Remplace efficacement l'approche psychologique de patios ayant soul",
          "Doit tenir compte des prescriptions médicamenteuses en cours",
          "Est systématique en présence d'un état infectieux local",
          "Permet le bon déroulement de l'intervention"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A- Faux: prémédication sédative ne remplace pas l'approche psychologique du patient. Une approche psychologique reste essentielle pour gérer l'anxiété et préparer le patient, en complément de toute prémédication.\n  \n B- Vrai. Il est crucial de tenir compte des prescriptions médicamenteuses en cours avant d'administrer une prémédication sédative, car des interactions médicamenteuses peuvent se produire.\n  \n C- Faux : La prémédication sédative n'est pas systématique en présence d'un état infectieux local. La gestion de l'infection locale doit être la priorité, et l'usage de sédatifs dépendra de l'état général du patient et de la procédure envisagée.\n  \n D- Vrai :La prémédication sédative peut permettre un meilleur déroulement de l'intervention, en réduisant l'anxiété et en facilitant la coopération du patient."
      }
    ]
  },
  {
    "title": "Articulation Temporo-Mandibulaire",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°18 (2022 1°EMD - Q1505\nConcernant l'articulation temporo-mandibulaire",
        "options": [
          "C'est une articulation solide",
          "Elle est profonde",
          "Un seul groupe musculaire assure sa mobilité",
          "C'est une bi-condylienne",
          "C'est une articulation à mobilité réduite"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A. Faux. C'est une articulation mobile, pas particulièrement solide.B. Faux. Elle n'est pas particulièrement profonde mais plutôt superficiel .C. Faux. Plusieurs groupes musculaires assurent sa mobilité.D. Juste. C'est une articulation bi-condylienne.E. Faux. C'est une articulation à grande mobilité."
      },
      {
        "questionText": "N°19 (2022 1°EMD - Q1521\nConcernant l'articulation temporo-mandibulaire : le disque inter-condylien",
        "options": [
          "C'est un fibrocartilage",
          "Il est biconcave",
          "Il est avasculaire",
          "Il permet la concordance des surfaces articulaires",
          "Il divise l'articulation en 02 parties"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Juste. C'est un fibrocartilage.\n B. Juste. Il est biconcave.\n C. Juste. Il est avasculaire.\n D. Juste. Il permet la concordance des surfaces articulaires.\n E. Juste. Il divise l'articulation en deux compartiments."
      },
      {
        "questionText": "N°20 (2022 1°EMD - Q1540\nConcernant l'articulation temporo-mandibulaire la fosse mandibulaire :",
        "options": [
          "Est située sur la branche montante de la mandibule",
          "Est située sur l'os temporal",
          "Est divisée en 02 parties",
          "Seule sa partie antérieure est articulaire",
          "Seule sa partie postérieure est articulaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A. Faux. La fosse mandibulaire n'est pas située sur la branche montante de la mandibule, mais sur l'os temporal.\n B. Juste. Elle est bien située sur l'os temporal.\n C. Juste. La fosse mandibulaire est divisée en deux parties.\n D. Juste. Seule la partie antérieure est articulaire.\n E. Faux. La partie postérieure n'est pas articulaire."
      },
      {
        "questionText": "N°9 (2021 1°EMD - Q1700\nConcernant l'articulation temporo-mandibulaire (ATM)",
        "options": [
          "seule articulation mobile du massif facial",
          "située aux confins de la région temporale en haut, massétérine en arrière et parotidienne en avant",
          "elle fait intervenir la fosse mandibulaire, cavité elliptique creusée dans la pyramide pétreuse du temporale",
          "seule le versant antérieur du condyle mandibulaire est articulaire",
          "c'est une diarthrose à disque interposé"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A. C'EST JUSTE - C'est la seule articulation mobile du massif facial.B. C'EST FAUX - Elle est située aux confins de la région temporale en haut, massétérine en avant, et parotidienne en arrière.C. C'EST JUSTE -D. C'EST FAUX - Les deux versants du condyle mandibulaire sont articulaires.E. C'EST JUSTE - C'est une diarthrose avec un disque interposé."
      },
      {
        "questionText": "N°10 (2021 1°EMD - Q1711\nles ligaments extrinsèques de l'ATM sont",
        "options": [
          "Le ligament sylo mandibulaire",
          "Le ligament sphéno- mandibulaire",
          "Le ligament zygomato mandibulaire",
          "Le ligament ptérygo mandibulaire",
          "Le ligament mastoido-mandibulaire"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "A. C'EST JUSTE - Le ligament stylo-mandibulaire est extrinsèque.\n  \n  B. C'EST JUSTE - Le ligament sphéno-mandibulaire est extrinsèque. \n  \n C. C'EST FAUX - Il n'y a pas de ligament zygomato-mandibulaire. \n  \n D. C'EST JUSTE \n  \n  E. C'EST FAUX - Il n'y a pas de ligament mastoïdo-mandibulaire."
      },
      {
        "questionText": "N°11 (2021 1°EMD - Q1726\nl'insertion capsulaire temporale dans l'ATM se fait comme suit:",
        "options": [
          "Sur le bord antérieur du condyle en avant,",
          "Sur la scissure de Glaser en arrière,",
          "À la base de l'épine du sphénoïde en dehors,",
          "Sur les deux tubercules zygomatiques en dedans",
          "Sur le bord postérieur du condyle en avant"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. C'EST JUSTE - Sur le bord antérieur du condyle. \n  \n B. C'EST JUSTE - Sur la scissure de Glaser en arrière. \n  \n C. C'EST FAUX - L'insertion ne se fait pas à la base de l'épine du sphénoïde. \n  \n D. C'EST FAUX - Il n'y a pas de tubercules zygomatiques à ce niveau. \n  \n E. C'EST FAUX - Sur le bord postérieur du condyle, pas antérieur."
      },
      {
        "questionText": "N°14 (2025 1°EMD - Q305\nConcernant l'articulation temporo-mandibulaire",
        "options": [
          "Articulation diarthrose à disque interposé",
          "Le disque articulaire est une lentille biconcave dont il joue un rôle proprioceptif.",
          "Le condyle mandibulaire est saillie ellipsoïde à grand axe antéro-postérieur",
          "La fosse mandibulaire est divisé en deux partie par la scissure tympano-squameuse une parie antérieure non articulaire et une postérieure articulaire",
          "Les ligaments passifs sont au nombre de 5"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A. Vrai : est une articulation diarthrose à ménisque interposé.B. Vrai : le disque articulaire est une lentille biconcave dont il joue un rôle proprioceptif.C. Faux : le condyle mandibulaire est une saillie ellipsoïde à grand axe transversale.D. Faux : la cavité glénoïde est divisée en deux parties par la scissure tympano-squameuse : une partie antérieure articulaire et une partie postérieure non articulaire.E. Faux : les ligaments passifs sont en nombres de 4."
      },
      {
        "questionText": "N°3 (2024 RATT - Q516\nConcernant l'articulation temporo-mandibulaire",
        "options": [
          "C'est une articulation de type ginglyme",
          "Le versant postérieur du condyle mandibulaire est aplati et articulaire",
          "Il existe deux ligaments intrinsèques et trois ligaments extrinsèques",
          "Seul le versant antérieur doit être considéré comme articulaire",
          "La lame tendineuse pré-discale est une zone richement innervée et bien vascularisée"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "- A: C’EST JUSTE, effectivement L'articulation temporo-mandibulaire (ATM) est souvent décrite comme une articulation de type ginglymo-arthrodial. Cela signifie qu'elle combine des caractéristiques de deux types d'articulations :Ginglyme (ou articulation en charnière) : Cette composante permet des mouvements de rotation, tels que l'ouverture et la fermeture de la bouche. C'est comparable au mouvement d'une porte qui s'ouvre et se ferme sur ses gonds.Arthrodiale (ou articulation plane) : Cette composante permet des mouvements de glissement, tels que les mouvements antéro-postérieurs (protrusion et rétrusion) et les mouvements latéraux (diduction).- B: C’EST FAUX, le versant postérieur est aplati et non articulaire- C: C’EST JUSTE- D: C’EST JUSTE- E: C’EST JUSTE"
      },
      {
        "questionText": "N°10 (2024 1°EMD - Q635\nConcernant l'Articulation temporo-mandibulaire 1- C'est une articulation de type ginglyme 2- Le versant postérieur du condyle mandibulaire est aplati et articulaire 3- Il existe deux ligaments intrinseques et trois ligaments extrinsèques 4- Seul le versant antérieur doit être considéré comme articulaire 5- La lame tendineuse pré-discale est une zone richement innervée et bien vascularisée",
        "options": [
          "(3,5)",
          "(2,3,4)",
          "(1,2,4)",
          "(2,3)",
          "(3,4,5)"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "- a:C'EST FAUX; L'articulation temporo-mandibulaire (ATM) n'est pas généralement classée comme une articulation de type ginglyme, mais plutôt comme une articulation synoviale de type arthrodie ou articulation plane- b:C'EST FAUX; le versant postérieur du condyle est aplati et non articulaire contrairement à son versant antérieur qui est articulaire formant avec l'os temporal (la cavité glénoïde) l'articulation temporomandibulaire ATM--- c: C’EST JUSTE; il est vrai que dans l'ATM il existe deux ligaments intrinsèques (Ligament latéral externe ou ligament temporo-mandibulaire et Ligament latéral interne oucourt ligament interne de Morris) et trois extrinsèques(Le ligament sphéno-mandibulaire ou le sphéno maxillaire,ligament stylo-mandibulaire ou stylo-maxillaire et Le ligament ptérygo-- mandibulaire ou ptérygo-maxillaire ou raphé ptérygo-mandibulaire)- d:C'EST JUSTE; effectivement seul le versant antérieur est articulaire- e:C’EST JUSTE ; la lame tendineuse pré-discale est une zone très innervée et bien vascularisée-"
      },
      {
        "questionText": "N°13 (2023 1°EMD - Q1070\nConcernant l'articulation temporo-mandibulaire",
        "options": [
          "Articulation diarthrose à disque interposé",
          "Située à la partie latérale de la face, en arrière du massif facial, et sous la base du crâne",
          "Elle fait intervenir la fosse mandibulaire, cavité elliptique creusée dans la pyramide pétreuse du temporale",
          "Seule le versant postérieure du condyle mandibulaire est articulaire",
          "Le disque articulaire est une lentille biconvexe qui s'insere sur la capsule"
        ],
        "correctOptionIndexes": [
          0,
          1
        ],
        "explanation": "A. Juste. C'est une articulation de type diarthrose avec un disque interposé qui permet des mouvements complexes.B. Juste. L'articulation est située à la partie latérale de la face, en arrière du massif facial, sous la base du crâne.C. Faux. La fosse mandibulaire est une cavité elliptique creusée dans la partie squameuse du temporal,.D. Faux. Les deux versants (antérieur et postérieur) du condyle mandibulaire participent à l'articulation.E. Faux. Le disque articulaire est en forme de lentille biconcave, pas biconvexe. Il est inséré à la capsule, mais la description de sa forme est incorrecte ici."
      }
    ]
  },
  {
    "title": "Biodynamique basi-crânienne",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°93 (2022 Résidanat - Q1559\nLa flexion basicrânienne 1- Intervient dans le décalage maxillo-mandibulaire 2- Est liée aux phénomènes de rotation horaire du sphénoide et anti-horaire de l'occipital 3- Est liée aux phénomènes de rotation anti-horaire du sphénoïde et horaire de l'occipital 4- Est liée aux phénomènes de rotations horaires du sphénoïde et de l'occipital 5- Est indépendante de l'activité de la synchondrose sphéno-occipitale.",
        "options": [
          "A (1,3)",
          "B (1,2)",
          "C (1,5)",
          "D (1,4)",
          "E (3,5)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°10 (2021 2°EMD - Q1714\nLa rotation antéro-externe de l'os temporal signifie :",
        "options": [
          "Qu'il effectue un mouvement vers le haut.",
          "Qu'il fait un déplacement vers l'avant uniquement.",
          "Qu'il se déplace vers l'avant et vers l'extérieur,",
          "Qu’il se déplace dans le sens opposé aux aiguilles d'une montre."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La rotation antéro-externe de l'os temporal signifie :· A. Qu'il effectue un mouvement vers le haut : Vrai.· B. Qu'il fait un déplacement vers l'avant uniquement : Faux.· C. Qu'il se déplace vers l'avant et vers l'extérieur : Vrai. C'est exactement ce qu'indique ce terme.· D. Qu’il se déplace dans le sens opposé aux aiguilles d'une montre : Vrai. Son déplacement antérieur est antihoraire."
      },
      {
        "questionText": "N°11 (2021 2°EMD - Q1734\nLa bascule sphénoïdale est « positive» pour la flexion si elle se fait :",
        "options": [
          "En rotation antérieure.",
          "En rotation horaire.",
          "En rotation antihoraire.",
          "En rotation postéro-externe."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La bascule sphénoïdale est « positive» pour la flexion si elle se fait :· A. En rotation antérieure : Vrai. Cela signifie que la base du crâne est en flexion.· B. En rotation horaire : Vrai.· C. En rotation antihoraire : Faux.· D. En rotation postéro-externe : Faux."
      },
      {
        "questionText": "N°12 (2021 2°EMD - Q1754\nUne rotation antérieure de l'occipital signifie:",
        "options": [
          "Un déplacement vers l'arrière de l'occipital.",
          "Un déplacement vers l'avant de la partie basse de l'écaille occipitale.",
          "Un déplacement vers l'avant et vers le bas de la partie basse de l'écaille occipitale.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une rotation antérieure de l'occipital signifie :· A. Un déplacement vers l'arrière de l'occipital : Faux.· B. Un déplacement vers l'avant de la partie basse de l'écaille occipitale : Vrai. C’est exactement ca.· C. Un déplacement vers l'avant et vers le bas de la partie basse de l'écaille occipitale : Faux."
      },
      {
        "questionText": "N°17 (2025 2°EMD - Q363\nLorsque la base du crâne est en flexion, elle entraîne",
        "options": [
          "La fermeture de l'angle sphénoidal.",
          "Un allongement du champs crânio-facial.",
          "La fermeture de l'angle antérieur de la face.",
          "Un abaissement de l'occiput et de l'odontoide."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Lorsque la base du crane est en flexion, elle entraine :\n A : VRAI : la fermeture de l’angle sphénoïdal\n B : FAUX : raccourcissement du champ cranio facial\n C : FAUX : ouverture de l’angle antérieur de la face \n D : VRAI : un abaissement de l’occiput et de l’odontoide"
      },
      {
        "questionText": "N°7 (2024 RATT - Q587\nL'établissement d'une malocclusion de classe ill squelettique est lié à :",
        "options": [
          "L'hyper flexion de la base du crâne",
          "L'hypo flexion de la base du crâne",
          "Une fermeture de l'angle sphénoïdal",
          "Une ouverture de l'angle sphénoïdal"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'établissement d'une malocclusion de classe III squelettique est lié à :A. L'hyper flexion de la base du crâne. Vrai.B. L'hypo flexion de la base du crâne. Faux.C. Une fermeture de l'angle sphénoïdal. Vrai. Une classe III est liée à une fermeture de l'angle.D. Une ouverture de l'angle sphénoïdal. Faux. Une ouverture de l'angle sphénoïdal est associée à une classe 2."
      },
      {
        "questionText": "N°15 (2024 2°EMD - Q733\nLa flexion basicrânienne est un phénomène :",
        "options": [
          "Physiologique spécifique à l'être humain.*",
          "Pathologique lié aux grands syndromes.",
          "Lié à la croissance du cerveau",
          "Lié à la bipédie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La flexion basi crânienne est :-physiologique (non lié a une pathologie)-spécifique a l’homme car on a remarqué que la base du crane des grands singes et autres animaux était plate.Voici une comparaison entre un crane humain et un crane de primate :-La bipédie et la croissance du cerveau sont des facteurs qui induisent cette flexion."
      },
      {
        "questionText": "N°16 (2024 2°EMD - Q749\nLe remodelage de l'occipital est dit positif lorsque ce dernier réalise :",
        "options": [
          "Une rotation horaire.",
          "Une rotation anti horaire.",
          "Un élargissement de la base du crâne.",
          "Un recul du trou occipital."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Un remodelage occipital positif se caractérise par :-une rotation anti horaire.-un élargissement de la base du crane.-une avancée du trou occipital."
      },
      {
        "questionText": "N°17 (2024 2°EMD - Q763\nLa contraction cranio faciale :",
        "options": [
          "Correspond à une pliure au niveau de la base du crâne.",
          "Correspond à une pliure au niveau de la voute du crâne,",
          "Se poursuit après l'âge de 6 ans.",
          "S'achève avec l'éruption des dents de 6 ans."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La flexion s’arrête a l’âge de 6 ans."
      },
      {
        "questionText": "N°18 (2024 2°EMD - Q783\nUne rotation exagérée de l'os sphénoïdal dans le sens horaire implique:",
        "options": [
          "Un recul du maxillaire.",
          "Une avancée de la mandibule.",
          "Un arrêt de la croissance des deux maxillaires.",
          "Une rotation externe des maxillaires."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La rotation du secteur ethmoido-sphenoidal dans le sens horaire a un impact sur les maxillaires uniquement et son exagération se traduit par :-une rotation externe des maxillaires.-une avancée des maxillaires."
      },
      {
        "questionText": "N°1 (2023 2°EMD - Q858\nLe premier moteur de la flexion bas crânienne est :",
        "options": [
          "L'os occipital.",
          "L'os sphénoïde.",
          "L'os temporal.",
          "La suture sphéno-occipitale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le premier moteur de la flexion bas crânienne est :A. L'os occipital. Vrai.B. L'os sphénoïde. Faux. L'os sphénoïde est le 2eme moteur de la flexion basi crânienne.C. L'os temporal. Faux. L'os temporal n'est pas le moteur principal de la flexion bas crânienne.D. La suture sphéno-occipitale. Faux. La suture sphéno-occipitale n'est pas un moteur mais une structure passive dans ce mouvement."
      },
      {
        "questionText": "N°2 (2023 2°EMD - Q880\nLe maxillaire supérieur est rattaché à la base du crâne par :",
        "options": [
          "L'unité occipito-temporale.",
          "L'unité sphéno- éthmoïdale.",
          "L'unité sphéno-occipitale.",
          "L'unité temporo-mandibulaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le maxillaire supérieur est rattaché à la base du crâne par :\n  A. L'unité occipito-temporale. Faux. Cette unité n'est pas directement impliquée dans la connexion du maxillaire supérieur à la base du crâne.\n B. L'unité sphéno- éthmoïdale. Vrai. Le maxillaire supérieur est rattaché à la base du crâne via cette unité.\n C. L'unité sphéno-occipitale. Faux. L'unité sphéno-occipitale concerne la connexion entre le sphénoïde et l'occipital, non le maxillaire supérieur.\n D. L'unité temporo-mandibulaire. Faux. Cette unité concerne l'articulation de la mandibule, pas le maxillaire supérieur."
      },
      {
        "questionText": "N°3 (2023 2°EMD - Q904\nLors de la flexion basi-cranienne l'occipital fait :",
        "options": [
          "Une rotation antérieure antihoraire.",
          "Une rotation postérieure horaire.",
          "Une rotation antérieure horaire.",
          "Une rotation postérieure antihoraire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Lors de la flexion basi-crânienne l'occipital fait :A. Une rotation antérieure antihoraire. Vrai.B. Une rotation postérieure horaire. Faux. Ce mouvement n'est pas correct pour l'occipital dans ce contexte.C. Une rotation antérieure horaire. Faux. L'occipital fait une rotation antérieure antihoraire lors de la flexion basi-crânienne.D. Une rotation postérieure antihoraire. Faux. Ce n'est pas le mouvement observé lors de la flexion basi-crânienne."
      },
      {
        "questionText": "N°4 (2023 2°EMD - Q921\nLa classe ll squelettique s'accompagne :",
        "options": [
          "D'une hyperflexion de l'angle basi-cranien.",
          "D'une hyperextention de l'angle basi-cranien.",
          "D'un recul des cavités glénoïdes.",
          "D'une position en avant des cavités glénoïdes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "La classe II squelettique s'accompagne :A. D'une hyperflexion de l'angle basi-crânien. Faux. La classe II squelettique est souvent associée à une hyperextension, non une hyperflexion.B. D'une hyperextention de l'angle basi-crânien. Vrai. La classe II squelettique s'accompagne souvent d'une hyperextension de l'angle basi-crânien.C. D'un recul des cavités glénoïdes. Vrai.D. D'une position en avant des cavités glénoïdes. Faux. Les cavités glénoïdes ne se positionnent pas en avant dans cette classe."
      },
      {
        "questionText": "N°5 (2023 2°EMD - Q929\nLa classe Ili squelettique s'accompagne:",
        "options": [
          "D'une hyperflexion de l'angle basi-cranien.",
          "D'une hyperextention de l'angle basi-cranien.",
          "D'un recul des cavités glénoïdes.",
          "D'une position en avant des cavités glénoïdes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La classe III squelettique s'accompagne:A. D'une hyperflexion de l'angle basi-crânien. Vrai. La classe III squelettique est souvent associée à une hyperflexion de l'angle basi-crânien.B. D'une hyperextention de l'angle basi-crânien. Faux. L'hyperextension est associée à la classe II, pas à la classe III.C. D'un recul des cavités glénoïdes. Faux. Cette classe est caractérisée par une avancée des cavités glénoïdes.D. D'une position en avant des cavités glénoïdes. Vrai."
      },
      {
        "questionText": "N°16 (2023 1°EMD - Q1135\nUne flexion exagérée de la synchondrose sphéno-occipitale peut participer à l'installation:",
        "options": [
          "D'une classe 2 squelettique.",
          "D'une classe 3 squelettique.",
          "D'une classe 1 squelettique.",
          "D'une anomalie du sens vertical."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une flexion exagérée de la synchondrose sphéno-occipitale peut participer à l'installation :A. D'une classe 2 squelettique : Faux.B. D'une classe 3 squelettique : Vrai. Une flexion exagérée, favoriserait une classe 3.C. D'une classe 1 squelettique : Faux. Classe 1 est neutre, non liée à une flexion exagérée.D. D'une anomalie du sens vertical : Vrai. Une flexion exagérée peut affecter la croissance verticale."
      },
      {
        "questionText": "N°19 (2023 2°EMD - Q1176\nLors de la flexion basi-crânienne le sphénoïde fait :",
        "options": [
          "Une rotation antérieure antihoraire.",
          "Une rotation postérieure horaire.",
          "Une rotation antérieure horaire.",
          "Une rotation postérieure antihoraire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Lors de la flexion basi-crânienne le sphénoïde fait :A. Une rotation antérieure antihoraire. Faux. Cette rotation n'est pas correcte pour le sphénoïde lors de la flexion basi-crânienne.B. Une rotation postérieure horaire. Faux. Ce mouvement n'est pas observé pour le sphénoïde lors de cette flexion.C. Une rotation antérieure horaire. Vrai. Le sphénoïde fait une rotation antérieure horaire lors de la flexion basi-crânienne.D. Une rotation postérieure antihoraire. Faux. Cette rotation est incorrecte pour le sphénoïde dans ce contexte."
      },
      {
        "questionText": "N°1 (2022 3°EMD - Q1227\nLa rotation antérieure de l’occipital est :",
        "options": [
          "Une rotation antihoraire",
          "Une rotation horaire avec déplacement vers le bas de l’écaille occipitale",
          "Un déplacement vers l’avant de la partie basse de l’écaille occipitale",
          "Une rotation antihoraire avec déplacement vers le bas de l’écaille occipitale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La rotation antérieure de l’occipital est :A. Une rotation antihoraire. Faux. La rotation antérieure de l'occipital est une rotation horaire.B. Une rotation horaire avec déplacement vers le bas de l’écaille occipitale. Faux.  La rotation antérieure de l’occipital implique une rotation horaire, avec un déplacement vers l’avant de l'écaille occipitale.C. Un déplacement vers l’avant de la partie basse de l’écaille occipitale. Vrai.D. Une rotation antihoraire avec déplacement vers le bas de l’écaille occipitale. Faux. La rotation antérieure est horaire, pas antihoraire."
      },
      {
        "questionText": "N°2 (2022 3°EMD - Q1243\nlors d’une flexion basi-crânienne modérée, l’os temporal effectue :",
        "options": [
          "Une rotation postéro-interne",
          "Une rotation antéro-externe",
          "Un mouvement vers le haut et vers l’extérieur",
          "Un mouvement vers le haut et vers l’intérieur."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Lors d’une flexion basi-crânienne modérée, l’os temporal effectue :A. Une rotation postéro-interne. Faux. Ce mouvement n'est pas associé à une flexion basi-crânienne modérée.B. Une rotation antéro-externe. Vrai. Lors d'une flexion basi-crânienne, l'os temporal effectue une rotation antéro-externe.C. Un mouvement vers le haut et vers l’extérieur. Faux. Ce mouvement est partiellement correct mais n'englobe pas totalement le mouvement du temporal.D. Un mouvement vers le haut et vers l’intérieur. Faux. Le mouvement est plutôt vers l'extérieur."
      },
      {
        "questionText": "N°3 (2022 3°EMD - Q1258\nUne rotation horaire du sphénoïde est :",
        "options": [
          "Une bascule ethmoïdale positive",
          "Une bascule sphénoïdale négative",
          "Une rotation sphénoïdale antérieure",
          "Une rotation sphénoïdale postérieure."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Une rotation horaire du sphénoïde est :A. Une bascule ethmoïdale positive. Faux. La rotation horaire du sphénoïde n'est pas une bascule ethmoïdale.B. Une bascule sphénoïdale négative. Faux. La rotation horaire n'est pas décrite comme une bascule négative.C. Une rotation sphénoïdale antérieure. Vrai. La rotation horaire du sphénoïde correspond à une rotation antérieure.D. Une rotation sphénoïdale postérieure. Faux. La rotation horaire est une rotation antérieure."
      },
      {
        "questionText": "N°4 (2022 3°EMD - Q1271\nUne flexion modérée de la Synchondrose Sphéno-Occipitale se traduit par :",
        "options": [
          "Une rotation horaire du sphénoïde",
          "Une rotation antihoraire de l’occipital",
          "Une rotation antéro-externe des temporaux",
          "Une rotation externe des maxillaires."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Une flexion modérée de la Synchondrose Sphéno-Occipitale se traduit par :A. Une rotation horaire du sphénoïde. Faux. antihoraireB. Une rotation antihoraire de l’occipital. Faux. L'occipital effectue une rotation horaire avec le sphénoïde.C. Une rotation antéro-externe des temporaux. Vrai. Les temporaux effectuent une rotation antéro-externe.D. Une rotation externe des maxillaires. Vrai."
      }
    ]
  },
  {
    "title": "Drainage Lymphatique",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°20 (2021 2°EMD - Q1881\nLes lymphonoeuds sub mandibulaire drainent les organes Suivants:",
        "options": [
          "La glande parotide",
          "La langue",
          "La glande submandibulaire",
          "Les lèvres",
          "La gencive"
        ],
        "correctOptionIndexes": [
          2,
          4
        ],
        "explanation": "A. Faux. La glande parotide est drainée par d'autres lymphonoeuds.B. Juste. Ils drainent la langue.C.FAUXD.FAUXE. Juste. Ils drainent la gencive."
      },
      {
        "questionText": "N°18 (2025 2°EMD - Q396\nConcernant le cercle lymphatique péri-cervical :",
        "options": [
          "Draine la lymphe de la tête et du cou",
          "Composé de 8 groupes de lymphonoeuds",
          "Les lymphonoeuds faciaux drainent la muqueuse buccale",
          "Les lymphonoeuds occipitaux drainent l'oreille",
          "Les lymphonoeuds mastoïdiens drainent la langue"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A. Faux :  le cercle péri-cervical draine la lymphe uniquement de la tête.B. Faux : composé de 6 groupes non 8.C. Vrai : les lymphonoeuds faciaux drainent la muqueuse buccale.D. Faux : les lymphonoeuds occipitaux drainent la région postérieure du crane.E. Faux : les lymphonoeuds mastoïdiens dites rétro-auriculaires drainent l’oreille et la région latérale de la tête."
      },
      {
        "questionText": "N°19 (2024 2°EMD - Q812\nles lymphonoeuds cervicaux latéraux drainent les territoires suivants :",
        "options": [
          "la trompe auditive",
          "la glande parotide",
          "le nasopharynx",
          "l'oreille",
          "la région cervicale latérale"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "- les lymphonoeuds cervicaux latéraux drainent les territoires suivant:- Parotide, Oreille, Région cervicale latérale."
      },
      {
        "questionText": "N°11 (2023 2°EMD - Q1032\nle nœuds faciaux sont formés par les lymphonoeuds suivant:",
        "options": [
          "Nœuds mandibulaires..",
          "Nœuds mastoïdiens.",
          "Nœuds buccinateurs.",
          "Nœuds naso-labials",
          "Nœuds submentaux"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "11. Les nœuds faciaux sont formés par les lymphonœuds suivants :\n  \n A. Juste. Noeuds mandibulaires.\n  \n B. Faux. Nœuds mastoïdiens ne font pas partie des nœuds faciaux.\n  \n C. Juste. Noeuds buccinateurs.\n  \n D. Juste. Nœuds naso-labiaux.\n  \n E.FAUX"
      },
      {
        "questionText": "N°12 (2023 2°EMD - Q1061\nles lymphocentres du cou ou système verticale",
        "options": [
          "Se jettent à droite dans le conduit thoracique",
          "Suit les gros vaisseaux formant un triangle lymphatique.",
          "Les nœuds jugulaires externes drainent la parotide et l'oreille.",
          "Les nœuds cervicaux transverses sont situés le long de la veine sub-claviére.",
          "Le triangle de Fouvière est formé par les nœuds jugulaires cervicaux transverses, et spinaux"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "12. Les lymphocentres du cou ou système vertical :\n  \n A. Faux. À droite, ils se jettent dans le conduit lymphatique droit , pas thoracique.\n  \n B. Juste. Ils suivent les gros vaisseaux formant un triangle lymphatique.\n  \n C. Juste. Les nœuds jugulaires externes drainent la parotide et l'oreille.\n  \n D. FAUX \n E. JUSTE \n  \n Réponse : B, C, D"
      },
      {
        "questionText": "N°2 (2022 2°EMD - Q1246\nCes propositions concernant les lymphatiques de la tête et du cou 1- la langue est drainée par lymphonœuds sub-mentaux 2- la gencive est drainée par lymphonœuds sub- mandibulaires 3- le cercle péri cervicale comprend 5 groupes de lympho- nœuds 4- le palais mou est drainé par les lymphonoeuds parotidiens 5- les lymphonoeuds occipitaux drainent la région de la nuque",
        "options": [
          "(1,3,4)",
          "(1,2,4)",
          "(3,4)",
          "(1,3)",
          "(2,3,5)"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "A. Juste. La langue est bien drainée par les lymphonœuds sub-mentaux, surtout pour la pointe de la langue.B. Juste. La gencive est drainée par les lymphonœuds sub-mandibulaires.C. FAUX .COMPREND 6D. JUSTE. Le palais mou est drainé principalement par les lymphonœuds parotidiens.E. Juste. Les lymphonœuds occipitaux drainent bien la région de la nuque.Réponse : B (a,b;d)"
      },
      {
        "questionText": "N°3 (2022 2°EMD - Q1254\nles lymphonoeuds cervicaux latéraux drainent les territoires suivants : 1- la trompe auditive 2- la glande parotide 3- le nasopharynx 4- l'oreille 5- la région cervicale latérale",
        "options": [
          "(3,4)",
          "(1,4,5)",
          "(1,3,4)",
          "(1,3)",
          "(2,4,5)"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Les lymphonœuds cervicaux latéraux drainent les territoires suivants :A. faux .B. juste  La glande parotide est drainée par les lymphonœuds parotidiens.C. Juste. Ils drainent le nasopharynx.D. Juste. Ils drainent l'oreille.E. juste ."
      },
      {
        "questionText": "N°4 (2022 2°EMD - Q1279\nCes propositions concernant les lymphonoeuds sub mandibulaire 1- sont des nœuds adjacents à la glande sub-mandibulaire 2- c'est le groupe le plus important du cercle péri cervical 3- ils se situent près du muscle sternocléidomastoïdien 4- ils suivent le trajet du nerf facial 5- ils se situent entre les ventres antérieur et postérieur du muscle digastrique",
        "options": [
          "(1,3.4)",
          "(1,4,5)",
          "(3,4)",
          "(1.5)",
          "(2,3.5)"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Les lymphonœuds submandibulaires :A. Juste. Ils sont adjacents à la glande sub-mandibulaire.B. Faux. Ce n'est pas le groupe le plus important du cercle péri-cervical, ce rôle revient aux lymphonœuds cervicaux profonds.C. Faux. Ils ne sont pas situés près du muscle sternocléidomastoïdien.D. faux .E. Juste. Ils se situent entre les ventres antérieur et postérieur du muscle digastrique."
      }
    ]
  },
  {
    "title": "Examen du patient et fiche d'observation",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°17 (2022 EMD - Q1502\nLa fiche d'observation clinique:",
        "options": [
          "Est un document optionnel.",
          "Est un document médico-légal.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Est rédigée par le patient."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a-faux : il s'agit d'un document pédagogique, scientifique, médico-légal.\n b-vrai : Est un document médico - légal\n c- faux :  contient en plus de les informations sur l'état civil du patient des résultats d'examens cliniques et complémentaires.\n d-faux :est rédigée par le praticien"
      },
      {
        "questionText": "N°8 (2021 EMD - Q1674\nL'examen des aires ganglionnaires:",
        "options": [
          "Est obligatoire chez un patient diabétique déséquilibré.",
          "Est systématique quel que soit le motif de consultation.",
          "Doit être complété par un examen radiologique",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A-faux :Bien que les patients diabétiques aient un risque accru d'infections, l'examen ganglionnaire n'est pas spécifique à cette condition.B-faux : l'examen clinique est orienté en fonction du contexte pathologique. L'examen des aires ganglionnaires n'est pas toujours systématique dans tous les cas, mais il est recommandé dans certaines situations spécifiques comme :*Présence d'infections*,*Pathologies inflammatoires*.Dans ces situations, l'examen des aires ganglionnaires est pertinent pour évaluer la propagation de l'infection ou d'autres pathologies.-faux :L'examen des aires ganglionnaires est clinique et ne nécessite pas forcément d'examen radiologique, sauf si une anomalie est détectée et nécessite une investigation plus poussée."
      },
      {
        "questionText": "N°5 (2020 EMD - Q1908\nL'examen clinique endo-buccal",
        "options": [
          "Permet de mettre en évidence un risque lié à une pathologie générale",
          "Doit être précédé d'un bilan radiologique",
          "Est une étape incontournable de la consultation initiale",
          "Doit rechercher une réaction péri-apicale"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A- Faux : l’interrogatoire permet de mettre en lumière un risque liée à une pathologie générale.B- Faux*: L'examen clinique endo-buccal n'a pas besoin d'être précédé d'un bilan radiologique. Ce dernier peut être effectué si l'examen clinique révèle des anomalies nécessitant des investigations complémentaires.D- Faux: d'un examen clinique endo-buccal, il est important de vérifier la présence de réactions péri-apicales, qui peuvent indiquer des infections ou des inflammations à l'extrémité des racines dentaires."
      },
      {
        "questionText": "N°4 (2019 EMD - Q1980\nParmi ces propositions, laquelle (s) est (sont) juste(s):",
        "options": [
          "Les examens complémentaires sont prescrits systématiquement au terme de l'examen clinique",
          "Un examen bucco-facial rigoureux est une étape indispensable du bilan pré-opératoire,",
          "L'examen des aires ganglionnaires se fait lors de l'examen endo-buccal.",
          "L'examen de la cinétique mandibulaire met en évidence l'état des muqueuses"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A-Faux: les examens complémentaires ne sont pas systématiquement prescrits après l'examen clinique. Ils sont demandés en fonction des besoins diagnostiques spécifiques et des suspicions cliniques.B-Vrai: Un examen endo-buccal rigoureux est effectivement une étape clé pour évaluer l'état des structures internes de la cavité buccale avant toutes intervention .C-Faux: L'examen des aires ganglionnaires se fait lors de l'examen exo-buccal (palpation des ganglions cervicaux et régionaux).D-faux: L'examen de la cinétique mandibulaire évalue les mouvements de la mandibule et l'articulation temporo-mandibulaire, pas l'état des muqueuses."
      },
      {
        "questionText": "N°1 (2024 EMD - Q463\nL'examen clinique exo-buccal",
        "options": [
          "Est une étape incontournable de la consultation initiale",
          "Permet de déceler les signes subjectifs d'une pathologie",
          "Est toujours précédé d'un bilan radiologique.",
          "Doit rechercher une réaction péri-apicale"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B- Les signes subjectifs : les signes subjectifs sont les symptômes que le patient ressent et décrit au cours de l'interrogatoire. Ces signes sont basés sur l'expérience personnelle du patient. Par contre , les signes objectifs sont les manifestations cliniques observables et mesurables par le clinicien au cours de l’examen clinique proprement dite (exo_buccal et endo-buccal).\nC-le bilan radiologique est un examen complémentaire de l'examen clinique, c'est-à-dire qu'il ne suffit pas à lui seul pour établir un diagnostic. Il n'est nécessaire qu'en cas de doute et ne doit pas être systématique, notamment en raison du rapport coût + risque / bénéfice qui doit être évalué à chaque prescription.\nD-Les réactions périapicales sont des réponses osseuses à une irritation ou une infection au niveau de l'apex (extrémité) de la racine dentaire. Ces réactions sont identifiées généralement par des examens radiographiques."
      },
      {
        "questionText": "N°5 (2024 EMD - Q555\nL'examen de la cinétique mandibulaire met en évidence:",
        "options": [
          "Le degré de l'ouverture buccale.",
          "Une suppuration",
          "L'état des muqueuses.",
          "Le jeu des condyles mandibulaires"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A-\nb- faux : Une suppuration buccale se produit lorsqu'il y a une accumulation de pus dans la cavité buccale due à une infection.\nc-Faux. C'est l'examen de la muqueuse buccale qui permet d'apprécier l'état de la muqueuse à l'intérieur des joues, des lèvres, du palais et du plancher de la bouche."
      },
      {
        "questionText": "N°9 (2023 EMD - Q996\nL'examen clinique endo-buccal:",
        "options": [
          "Permet de mettre en lumière un risque lié à une pathologie générale.",
          "Est une étape incontournable de la consultation initiale. -",
          "Doit rechercher une réaction péri-apicale.",
          "Doit être précédé d'un bilan radiologique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a-faux : c’est l'interrogatoire médical qui permet de mettre en lumière les risques liés à une pathologie générale avant de procéder à des soins dentaires.b-l'examen clinique demeure l'étape initiale essentielle dans l'approche diagnostique de toute pathologie médicale.c-Bien que l'examen clinique endo-buccal soit essentiel pour détecter des signes indirects de réaction péri-apicale, il doit être complété par des examens radiographiques pour diagnostiquer de manière fiable les conditions péri-apicales.D-faux : le bilan radiologique est un examen complémentaire de l'examen clinique, c'est-à-dire qu'il ne suffit pas à lui seul pour établir un diagnostic. Il n'est nécessaire qu'en cas de doute et ne doit pas être systématique, notamment en raison du rapport coût + risque / bénéfice qui doit être évalué à chaque prescription."
      },
      {
        "questionText": "N°20 (2023 EMD - Q1202\nEn pratique quotidienne, l'interrogatoire:",
        "options": [
          "Permet souvent de déterminer un diagnostic de certitude.",
          "Permet de mettre en évidence les signes subjectifs d'une maladie.",
          "Ne contient que les informations sur l'état civil du patient.",
          "Doit toujours être complété par des examens radiologiques et/ou biologiques"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "a-faux:L'interrogatoire permet d'orienter le diagnostic dès le départ, grâce à la qualité des informations recueillies, mais elle conditionne les rapports de confiance ultérieurs avec le patient.\n b-vrais: les signes subjectifs sont les symptômes que le patient ressent et décrit au cours de l'interrogatoire. Ces signes sont basés sur l'expérience personnelle du patient.\n c-faux:Il permet de déterminer, après avoir enregistré les données concernant l'état civil (nom, âge, profession...): Le motif de la consultation, État général, Antécédents médicaux et chirurgicaux, Historique bucco-dentaire, Habitudes de vie.\n d-faux: Le bilan radiologique ou biologique est un examen complémentaire à l'examen clinique, c'est-à-dire qu'il ne suffit pas à lui seul pour établir un diagnostic. Il n'est nécessaire qu'en cas de doute et ne doit pas être systématique ni obligatoire."
      }
    ]
  },
  {
    "title": "Fosse pterygo-palatine",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°4 (2021 1°EMD - Q1612\nConcernant la fosse ptérygo-palatine:",
        "options": [
          "C'est l'arrière fond de la fosse infra-temporale",
          "Elle contient le corps adipeux de la joue",
          "Livre passage au nerf mandibulaire",
          "Livre passage au nerf maxillaire (V2)",
          "Livre passage aux branches de l'artère maxillaire"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "A. C'EST JUSTE - C'est l'arrière-fond de la fosse infra-temporale.\n B. C'EST FAUX - Elle ne contient pas le corps adipeux de la joue, celui-ci se trouve dans la région buccale.\n C. C'EST FAUX - Le nerf mandibulaire (V3) ne passe pas par la fosse ptérygo-palatine, mais par la fosse infra-temporale.\n D. C'EST JUSTE - Elle livre passage au nerf maxillaire (V2).\n E. C'EST JUSTE - Elle livre passage aux branches de l'artère maxillaire."
      },
      {
        "questionText": "N°13 (2025 1°EMD - Q293\nConcernant la fosse ptérygo-palatine",
        "options": [
          "C'est l'arrière fond de la fosse infra-temporale",
          "C'est la partie postérieure de la fosse infra-temporale",
          "Elle communique avec l'orbite par la fissure orbitaire inférieure",
          "Elle est limitée en avant par la tubérosité maxillaire",
          "Livre passage au nerf maxillaire (V2"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A. Vrai : la fosse ptérygopalatine est l’arrière fond de la fosse infra-temporale.B. Faux : la partie postérieure de la fosse infra temporale c’est la région des muscles ptérygoïdiens.C. Vrai : elle communique avec l’orbite par la fissure orbitaire inférieure.D. Faux : elle est limitée en avant par la face infra temporale du maxillaire.E. Vrai : livre passage au nerf maxillaire (V2)."
      },
      {
        "questionText": "N°16 (2023 1°EMD - Q1125\nConcernant la fosse ptérygo-palatine",
        "options": [
          "Elle contient les muscles ptérygoïdiens",
          "Elle est traversée par le nerf maxillaire",
          "Elle est traversée par le nerf mandibulaire",
          "Elle communique en haut avec l'orbite.",
          "Elle communique en médial avec la cavité nasale"
        ],
        "correctOptionIndexes": [
          1,
          3
        ],
        "explanation": "16. Concernant la fosse ptérygo-palatine :A. Faux. Les muscles ptérygoïdiens se trouvent dans la fosse infra-temporale, pas dans la fosse ptérygo-palatine.B. Juste. Le nerf maxillaire traverse la fosse ptérygo-palatine.C. Faux. Le nerf mandibulaire traverse la fosse infra-temporale, pas la fosse ptérygo-palatine.D. Juste. La fosse ptérygo-palatine communique avec l'orbite par la fissure orbitaire inférieure.E. Juste. Elle communique aussi avec la cavité nasale par le foramen sphéno-palatin."
      },
      {
        "questionText": "N°9 (2022 1°EMD - Q1355\nConcernant la fosse infra-temporale:",
        "options": [
          "La fosse pterygo-palatine est l'arrière fond de la fosse infra-temporale",
          "La fosse pterygo-palatine livre passage au nerf mandibulaire (V3)",
          "La région des muscles ptérygoïdiens livre pas nerf maxillaire (V2)",
          "La fosse pterygo-palatine communique avec infra temporale",
          "Les branches de l'artère maxillaire traverse la fosse pterygo-palatine"
        ],
        "correctOptionIndexes": [
          0,
          3
        ],
        "explanation": "Concernant la fosse ptérygo-palatine :A. Juste. La fosse ptérygo-palatine est l'arrière-fond de la fosse infra-temporale.B. Faux. C'est le nerf maxillaire (V2) qui traverse la fosse ptérygo-palatine, pas le nerf mandibulaire (V3).C. Faux. La région des muscles ptérygoïdiens n'est pas traversée par le nerf maxillaire (V2).D. Juste. La fosse ptérygo-palatine communique avec la fosse infra-temporale.E. Juste. Les branches de l'artère maxillaire traversent la fosse ptérygo-palatine."
      }
    ]
  },
  {
    "title": "La Fosse Intra-Temporale",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°7 (2021 1°EMD - Q1667\nConcernant Concernant la fosse infra-temporale:",
        "options": [
          "Est Située en bas et en arrière de la mandibule",
          "Présente un rapport direct avec le sinus maxillaire",
          "Est situé au-dessous de la base du crane",
          "Est de forme quadrangulaire",
          "Présente 04 parois et 04 bords"
        ],
        "correctOptionIndexes": [
          1,
          2
        ],
        "explanation": "A. C'EST JUSTE - Elle est située en bas et en arrière de la mandibule.B. C'EST JUSTE - Elle présente un rapport direct avec le sinus maxillaire.C. C'EST JUSTE - Elle est située au-dessous de la base du crâne.D. C'EST FAUX - Elle est de forme irrégulière, pas quadrangulaire.E. C'EST FAUX - Elle présente plusieurs parois mais pas exactement 4 parois et 4 bords."
      },
      {
        "questionText": "N°18 (2025 1°EMD - Q384\nConcernant la fosse infra-temporale",
        "options": [
          "Est limitée en latéral par le Ramus mandibulaire",
          "Communiqueen dedans avec la fosse ptérygo-palatine",
          "Est divisée en 02 régions",
          "Communique avec les fosses nasales en latéral",
          "Est limitée en arrière par la tubérosité maxillaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A. Vrai : est limitée en latéral par le Ramus mandibulaire.B. Vrai : communiques en dedans avec la fosse ptérygo-palatine.C. Faux : est divisée en 3 régions.D. Faux : ne communique pas avec les fosses nasales en latéral.E. Faux : limitée en avant par la tubérosité maxillaire."
      },
      {
        "questionText": "N°13 (2024 1°EMD - Q703\nConcernant la fosse ptérygo-palatine 1- C'est l'arrière-fond de la fosse infra-temporale 2- C'est la partie postérieure de la fosse infra-temporale 3- Elle communique avec l'orbite par la fissure orbitaire inférieure 4- Elle est limitée en avant par la tubérosité maxillaire 5- Livre passage au nerf maxillaire (V2)",
        "options": [
          "(1, 3, 5)",
          "(2, 3,4)",
          "(2, 4)",
          "(2, 3)",
          "(3, 4,5)"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "- a:C'EST JUSTE; la fosse ptérygo palatine est effectivement l'arrière fond de la fosse infra temporal-- b:C'EST FAUX; la fosse temporal communique en médial avec la fosse ptérygo-palatine par la fissure ptérygo-maxillaire.-- c: C’EST JUSTE ; il vrai qu'elle communique avec l'orbite par la fissure orbitaire inférieure (voir l'illustration précédente)- d: C’EST FAUX ;sur sa antérieure se trouve la face infra-temporale de l'os maxillaire- e:C'EST JUSTE; il est vrai que la fosse ptérygo palatine livre passage au nerf maxillaire-"
      },
      {
        "questionText": "N°18 (2024 1°EMD - Q794\nConcernant la fosse infra-temporale : 1- Est Située en dehors des apophyses ptérygoïdes 2- Présente un rapport direct avec le sinus sphénoïde 3- Est traversée par l'artère maxillaire 4- Est de forme quadrangulaire 5- Contient les muscles ptérygoïdes",
        "options": [
          "(2,3)",
          "(3,4,5)",
          "(2,4)",
          "(1,2,3)",
          "(1,3,5)"
        ],
        "correctOptionIndexes": [
          4
        ],
        "explanation": "- a: C’EST JUSTE ; en effet la fosse infra temporal est située en dehors des apophyses ptérygoïdes- b:C’EST FAUX; la fosse temporal a un rapport direct avec le sinus maxillaire- c:C’EST JUSTE ; oui la fosse temporal est traversé par l'artère maxillaire- d:C’EST FAUX ; La fosse infra-temporale est une cavité complexe, large et irrégulière- e:C’EST JUSTE; la fosse infra temporal contient effectivement les muscles ptérygoïdiens-"
      },
      {
        "questionText": "N°12 (2023 1°EMD - Q1054\nConcernant la fosse infra-temporale, elle est limitée par",
        "options": [
          "La tubérosité du maxillaire en avant",
          "la petite aile du sphénoïde en haut",
          "La lame latérale du processus ptérygoïde en dehors",
          "La lame latérale du processus ptérygoïde en médial",
          "La face maxillaire de la grande aile du sphénoïde en haut"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Concernant la fosse infra-temporale, elle est limitée par :A. Juste. La tubérosité du maxillaire forme la limite antérieure de la fosse infra-temporale.B. Faux. C'est la grande aile du sphénoïde qui forme la limite supérieure, pas la petite aile.C. Faux. La lame latérale du processus ptérygoïde forme la paroi médiale, pas latérale.D. Juste. La lame latérale du processus ptérygoïde forme la paroi médiale.E. Juste. La face maxillaire de la grande aile du sphénoïde forme la limite supérieure."
      }
    ]
  },
  {
    "title": "Le plâtre",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°5 (2021 1°EMD - Q1627\nLe plâtre est un produit manufacturé à partir",
        "options": [
          "D'un minéral naturel le gypse.",
          "D'un minéral synthétique le gypse",
          "Du dihydraté de sulfate de calcium.",
          "De CaSo4 ½ H20."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ A : C’EST JUSTE, le gypse constitue la matière première du plâtre\n  \n _ C : C’EST JUSTE, le di hydrate de sulfate de calcium est déshydraté de deux pour se transformer en plâtre"
      },
      {
        "questionText": "N°6 (2021 1°EMD - Q1640\nL'hémihydrate 𝛃 constitue",
        "options": [
          "L'essentiel du plâtre à empreinte",
          "Une contre-indication d'empreinte en prothèse amovible complète",
          "Une indication d'empreinte en prothèse conjointe",
          "Le matériau de moulage au laboratoire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2021 1°EMD - Q1670\nla réaction de prise de l'hémihydrate 𝛂 et 𝛃:",
        "options": [
          "Est réversible",
          "Est irréversible.",
          "Est ré hydratable ce qui permet de donner la réaction de prise",
          "N'est pas ré hydratable."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2025 1°EMD - Q95\nQuel type de plâtre est utilisé pour la réalisation des empreintes ?",
        "options": [
          "Plâtre de type I.",
          "Plâtre de type II.",
          "Plâtre de type III.",
          "Plâtre de type IV."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A. Vrai : le plâtre de type I est le plâtre à empreinte (plâtre moulable à prise rapide) pour enregistrer de manière statique, lors de l'empreinte primaire, les surfaces muqueuses de l'édenté total.B. Faux : le plâtre de type II est utilisé pour modèles d’étude pas pour empreintes.C. Faux : le plâtre de type III est pour modèles de travail.D. Faux : le plâtre de type IV est pour modèles haute résistance (prothèse fixe)."
      },
      {
        "questionText": "N°4 (2025 1°EMD - Q104\nComment un rapport eau/poudre élevé de plâtre influence t-il le produit final ?",
        "options": [
          "Il ralentit le temps de prise.",
          "Il rend le produit final trop fragile.",
          "Il améliore la résistance à la compression.",
          "Il n'a aucun impact sur le produit final."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "* Rapport eau/poudre élevé du plâtre :A. Vrai : plus d’eau → cristallisation plus lente → temps de prise retardé.B. Vrai : excès d’eau → structure poreuse → fragilité accrue.C. Faux : au contraire, la résistance diminue.D. Faux : il a un impact important sur la prise et la résistance."
      },
      {
        "questionText": "N°9 (2025 1°EMD - Q217\nLa manipulation du plâtre de coulée se fait",
        "options": [
          "Par saturation progressive avec spatulation.",
          "Par un mélange pré dosé en respectant le prospectus du fabricant.",
          "En mettant de la poudre du plâtre qui sera saturée par de l'eau.",
          "En mélangeant énergiquement et en écrasant le mélange contre les parois du bol."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : la saturation progressive avec spatulation n’est pas la méthode recommandée, elle entraîne un mauvais rapport eau/poudre mais plutôt la saturation progressive sans spatulation qui est la méthode optimale.B. Vrai : il faut respecter les proportions indiquées par le fabricant (mélange pré-dosé) pour garantir la prise et la résistance optimales.C. Faux : on ne verse pas l’eau sur la poudre jusqu’à saturation mais plutôt on ajoute la poudre dans l’eau mesurée.D. Faux : le mélange énergique et l’écrasement contre les parois se fait lors la préparation de l'alginate et non pas le plâtre qu'il suffit de le mettre sur un vibrateur ou de tapoter le bol afin d'échapper les bulles d'air."
      },
      {
        "questionText": "N°5 (2024 1°EMD - Q557\nLes cires d'origine naturelle:",
        "options": [
          "Sont peu fragiles",
          "Leurs coefficients de dilatation thermique sont élevés",
          "Présentent des intervalles de fusion faibles",
          "Sont les plus utilisées et dans différents domaines."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_ A : c’est faux, le gypse constitue la matière première du plâtres \n  \n _ C et D : sont fausses , la formule chimique du plâtre : hémi hydrate de sulfate de calcium( CaSo4, ½H2O)"
      },
      {
        "questionText": "N°6 (2024 1°EMD - Q572\nLes élastoméres de synthèse :",
        "options": [
          "Sont des caoutchoucs synthétiques",
          "Se présentent sous la forme d'un système auto-mélangeant ;",
          "Se présentent sous forme de poudre et liquide ;",
          "Se présentent sous forme de pâte emballée dans deux tubes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ le di hydrate de sulfate de calcium , se transforme en platre dur et extra dur , ou ƥ hémi-hydrate de sulfate , par cuisson au four"
      },
      {
        "questionText": "N°7 (2024 1°EMD - Q592\nSelon la nature de la molécule de base et la réaction chimique de polymérisation, on distingue deux types de silicones",
        "options": [
          "Les polysiloxanes",
          "Les polyéthers",
          "Les polysulfures",
          "Les polyvinyles."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2024 1°EMD - Q604\nLes pâtes zinquénoléines pour usage prothétique, sont fournies sous forme de",
        "options": [
          "Plaques",
          "Pâtes dans des tubes souples ;",
          "Gel",
          "Granulés."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°15 (2023 1°EMD - Q1114\nLe Plâtre Dur est :",
        "options": [
          "obtenu par déshydratation du Gypse dans un autoclave (sous pression de vapeur);",
          "En présence d'eau et de température de 120 à 130°C on obtient un plâtre de \"type lll\";",
          "Son principal constituent est le et hémi hydrate de sulfate de calcium;",
          "Indiqué pour les empreintes secondaires."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ Ce dihydrate de sulfate de calcium, est déshydraté de deux manières: soit par une cuisson au four ; soit à l’air libre.\n  \n _ D : C’EST FAUX, c’est le plâtre tendre qui est indiqué pour l’empreinte"
      },
      {
        "questionText": "N°16 (2023 1°EMD - Q1129\nLe plâtre de Paris",
        "options": [
          "est obtenu par réhydratation du gypse à l’air libre;",
          "est Obtenu par déshydratation du Gypse à l’air libre,",
          "c'est le a hem hydrate de sulfate de calcium;",
          "c'est du plâtre de Pierre."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°6 (2022 1°EMD - Q1301\nLe plâtre dentaire de paris est:",
        "options": [
          "Obtenue par déshydratation du GYPSE à l'aire libre;",
          "Utilisé seulement pour la confection des modèles d'études",
          "Peut être utilisé pour l'empreinte dans le cas de crêtes flottantes",
          "Caractérisé par sa fluidité et son excellente stabilité dimensionnelle."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°7 (2022 1°EMD - Q1324\nle plâtre dur de Pierre est:",
        "options": [
          "Obtenue par déshydratation du GYPSE dans un autoclave",
          "Constitué principalement de β hémihydrate de sulfate de calcium",
          "Peut être utilisé pour la coulée des empreintes secondaires en prothèse totale",
          "Peut être utilisé pour la prise des empreintes secondaires en prothèse totale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2022 1°EMD - Q1337\nDans la manipulation du plâtre dentaire en général",
        "options": [
          "Plus le rapport eau/poudre est élevé, plus le temps de prise sera long et le produit final sera fragile",
          "Plus la taille des particules de l'hémihydrate de sulfate de calcium est gosse, plus il durcira rapidement",
          "Nous observons toujours une expansion de la masse durant sa prise",
          "Sa réaction de prise est obtenue par transformation de l'hemihydrate en bi hydrate de sulfate de calcium"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ augmentation du temps de prise si : \n - utilisation d’eau froide \n - utilisation de retardateurs chimiques \n - rapport eau/poudre augmenté"
      },
      {
        "questionText": "N°13 (2022 1°EMD - Q1421\nLes pâtes zinquénoléines sont:",
        "options": [
          "De l'oxyde de zinc eugénol sous forme pâte/pate;",
          "De l'oxyde de zinc-eugénol sous forme poudre/liquide,",
          "Destinées à l'odontologie",
          "Hydrophobes."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE composition ; pâte base et pâte catalyseur \n  \n _ C : C’EST FAUX, ce sont des matériaux à empreintes"
      }
    ]
  },
  {
    "title": "Les hydrocolloïdes",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°3 (2021 1°EMD - Q1607\nLa manipulation des Hydro colloïdes réversibles:",
        "options": [
          "Est simple.",
          "Ne nécessite pas un équipement spécifique",
          "Nécessite des bacs de conditionnement à différentes températures.",
          "Nécessite un porte empreinte perforé"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": ""
      },
      {
        "questionText": "N°4 (2021 1°EMD - Q1611\nLors de la manipulation des Hydro colloïdes irréversibles alginate",
        "options": [
          "Le rapport poudre/eau élevé augmente la résistance du gel.",
          "Le rapport poudre/eau élevé diminue la résistance du gel",
          "Le rapport eau /poudre élevé diminue le temps de gélification",
          "Le rapport eau /poudre élevé augmente le temps de gélification"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°8 (2021 1°EMD - Q1686\nL'état colloïdal est:",
        "options": [
          "Un état de dispersion de la matière au sein d'un liquide",
          "Un état solide",
          "Un état solide enchevêtré emprisonnant le liquide dans les interstices",
          "Une solution moléculaire."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ un état colloïdal correspond à un état de dispersion de la matière au sein d’un liquide , caractérisé par des granules de dimension moyenne"
      },
      {
        "questionText": "N°10 (2025 1°EMD - Q231\nLes alginates sont des matériaux à empreinte de type.",
        "options": [
          "Hydrocolloide réversible.",
          "Hydrocolloide irréversible.",
          "Elastomères de synthèse.",
          "Elastique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : un hydrocolloïde réversible est l’agar-agar pas l’alginate.B. Vrai : ce sont des hydrocolloïdes irréversibles (prise chimique par réaction avec sulfate de calcium).C. Faux : les élastomères de synthèse sont silicones, polyéthers, polysulfures.D. Vrai : ils sont classés dans les matériaux élastiques car ils peuvent se déformer et revenir à leur forme initiale après démoulage."
      },
      {
        "questionText": "N°14 (2025 1°EMD - Q319\nLes hydrocolloides irréversibles sont indiqués pour",
        "options": [
          "La prise d'empreinte secondaire.",
          "La prise d'empreinte d'étude.",
          "La prise d'empreinte de l'arcade antagoniste.",
          "La prise d'empreinte préliminaire."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : empreintes secondaires nécessitent plus de précision (élastomères).B. Vrai : pour empreintes d’étude.C. Vrai : pour empreinte de l’arcade antagoniste.D. Vrai : pour empreintes préliminaires."
      },
      {
        "questionText": "N°15 (2025 1°EMD - Q324\nL'hystérèse:",
        "options": [
          "Est un processus de gélification du matériau.",
          "Est le phénomène de prise de l'hydrocolloide réversible.",
          "Est la liquéfaction du gel après chauffage.",
          "Est le décalage entre la température de gélification et la température de liquéfaction de l'hydrocolloide réversible."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A. Faux : la gélification c’est un écart thermique.B. Faux : ce n’est pas le processus complet de prise, mais un phénomène thermique.C. Faux : ce n’est pas uniquement la liquéfaction après chauffage.D. Vrai : c’est le décalage entre la température de gélification et la température de liquéfaction d’un hydrocolloïde réversible (comme l’agar)."
      },
      {
        "questionText": "N°3 (2024 1°EMD - Q505\nLa manipulation du plâtre:",
        "options": [
          "Par saturation progressive sans spatulation ,",
          "Par un mélange pré dosé en respectant le prospectus du fabricant ;",
          "Le mélange obtenu est placé sur un vibreur pour chasser toutes Inclusions d'air",
          "la poudre du plâtre est placée en premier ensuite saturée par de l'eau."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ A : c’est faux , elle est compliqué_ B : c’est faux , elle nécessite un porte empreinte perforé muni d’une système de refroidissement sous la forme d’une tuyauterie_ C : c’est faux, leur conditionnement dans des bains thermostats_ D : c’est juste"
      },
      {
        "questionText": "N°4 (2024 1°EMD - Q520\nLe temps de prise du plâtre est influencé par :",
        "options": [
          "La taille des particules, plus c'est fin plus la prise sera rapide:",
          "La température de l'eau plus elle est frolde, la prise sera rapide",
          "La spatulation plus elle est rapide, le temps de prise sera court ;",
          "L'utilisation d'accélérateurs ou de retardateurs de prise."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_ B : c’est faux, un rapport poudre/eau plus élevé augmente la résistance générale"
      },
      {
        "questionText": "N°1 (2023 1°EMD - Q860\nLes hydro colloïdes sont",
        "options": [
          "Des matériaux à empreinte",
          "Des matériaux de coulée",
          "Des élastomères",
          "Des compositions thermoplastiques."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE, les hydrocolloïdes utilisés pour les empreintes sont des solutions colloïdales de polysaccharides dans de l’eau."
      },
      {
        "questionText": "N°2 (2023 1°EMD - Q876\nLes hydro colloïdes irréversibles sont indiqués pour:",
        "options": [
          "La prise d'empreinte secondaire;",
          "La prise d'empreinte de situation en prothèse fixée;",
          "La prise d'empreinte de l'arcade antagoniste;",
          "La prise d'empreinte préliminaire."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_ D’après l’utilisation : \n - classe A : haute définition: pour les empreintes pour obtenir les prothèse uni-dentaires\n - classe B : traditionnels: pour les empreintes d’arcade ou hémi-arcade\n - classe C : pour la réalisation de modèles d’études et de modèles antagonistes et les port empreintes individuel\n -"
      },
      {
        "questionText": "N°3 (2023 1°EMD - Q893\nLes hydro colloïdes sont des matériaux:",
        "options": [
          "Qui présentent une stabilité dimensionnelle très basse;",
          "Qui présentent une stabilité dimensionnelle très bonne;",
          "Pour lesquels la coulée de l'empreinte peut être effectuée le lendemain;",
          "Pour lesquels la coulée de l'empreinte doit être effectuée juste après sa prise."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_ A : C’EST JUSTE, les variations dimensionnelles des hydrocolloïdes irréversibles s’expliquent principalement par les mouvements de l’eau qu’ils renferment en grande quantité.\n  \n _ D : C’EST JUSTE, si les alginates de classe A sont capables de reproduire des détails de 20 microns, cette précision ne peut être conservée au-delà d’une heure, même dans un milieu saturé d’humidité."
      },
      {
        "questionText": "N°9 (2022 1°EMD - Q1360\nLes Hydro colloïdes sont:",
        "options": [
          "Des matériaux à empreinte plastiques",
          "Destinées uniquement aux empreintes secondaires",
          "Des matériaux avec une faible stabilité dimensionnelle",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ A : C’EST FAUX, sont des matériaux à empreinte élastique \n  \n _ B : C’EST FAUX, déstinées aussi aux empreintes primaires"
      },
      {
        "questionText": "N°10 (2022 1°EMD - Q1368\nLes hydro colloïdes réversibles sont :",
        "options": [
          "A base d'agar-agar",
          "Commercialisées à l'état de gel",
          "Forme avec l'eau une solution sous forme de sol;",
          "Se déforme par la température."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Les matériaux de coulée _ les revêtements",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°18 (2025 1°EMD - Q381\nQuelle est la principale fonction des revêtements compensateurs ?",
        "options": [
          "Augmenter la résistance mécanique des alliages.",
          "Compenser les contractions thermiques des métaux lors de la solidification.",
          "Améliorer l'esthétique des prothèses.",
          "Faciliter le polissage des surfaces métalliques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : ce n’est pas leur but principal.\n B. Vrai : ils compensent la contraction thermique du métal pendant solidification.\n C. Faux : pas d’effet esthétique direct.\n D. Faux : ne servent pas au polissage."
      }
    ]
  },
  {
    "title": "Les pâtes zinquénoleines",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°18 (2021 1°EMD - Q1848\nles pâtes zinquénoleines:",
        "options": [
          "Sont des matériaux à empreinte secondaire",
          "Nécessitent l'emploi d'un porte empreinte individués",
          "Sont constituées principalement d'oxyde de zinc eugénol",
          "Dont le principe est l'eugénol"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ A : C’EST JUSTE, ce sont des matériaux à empreinte utilisés en prothèse \n  \n _ B : C’EST JUSTE, une fois mélangé, le matériau doit avoir une couleur uniforme et sera placé dans un porte empreinte individuel\n  \n _ C : C’EST JUSTE, la composition : \n - pâte base : l’oxyde de zinc \n - pâte catalyseur : eugénol"
      },
      {
        "questionText": "N°19 (2025 1°EMD - Q407\nQuels sont les composants principaux de la pâte base et de la pâte catalyseur des ZOE ?",
        "options": [
          "Base : Oxyde de zinc ; Catalyseur : Silicone.",
          "Base Eugénol ; Catalyseur : Oxyde de zinc.",
          "Base : Oxyde de zinc ; Catalyseur : Eugénol.",
          "Base : Colophane ; Catalyseur : Huile de lin."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A. Faux : catalyseur n’est pas silicone.B. Faux : base n’est pas eugénol.C. Vrai : la base c'est l'oxyde de zinc et le catalyseur c'est l'eugénol.D. Faux : colophane et huile de lin ne sont pas la composition standard."
      },
      {
        "questionText": "N°18 (2024 1°EMD - Q787\nUne résine dentaire comporte :",
        "options": [
          "Une poudre de couleur rose, blanche ou transparente appelée monomère et un liquide ou polymère",
          "Une poudre de couleur rose, blanche ou transparente appelée polymère et un liquide ou monomère",
          "Ce sont des méthacrylates de méthyle thermo polymérisables",
          "Ce sont des polymères de méthacrylates de méthyle pour la fabrication des dents prothétiques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_B : c’est juste, une fois mélangé, le matériau doit avoir une couleur uniforme et sera placé sur dans un porte empreinte individuelle_A : c’est juste, est indiqué pour la prise d’empreintes secondaires en prothèse totale"
      },
      {
        "questionText": "N°19 (2024 1°EMD - Q804\nLes résines thermo polymérisable ont :",
        "options": [
          "Une résistance à l'abrasion faible avec l'apparition de fissures et de craquelures avec le temps",
          "L'esthétique à long terme car la teinte reste stable ;",
          "Un inconvénient qui favorise l'adhésion, plus la croissance d'une plaque bactérienne sous la prothèse",
          "Une dureté supérieure à celle de l'email."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_A : c’est faux, se présente sous forme de taille différente \n  \n _C : c’est juste, on utilise les deux pates en quantité égales"
      },
      {
        "questionText": "N°6 (2023 1°EMD - Q958\nLa réaction de prise des pâtes à oxyde de zinc est:",
        "options": [
          "A Retardée par la présence d'eau;",
          "Accélérée par l'adjonction de chlorure de magnésium;",
          "Accélérée par la chaleur:",
          "Accélérée en milieu sec"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_ A et D : C’EST FAUX, l'humidité accélère la prise du matériau \n  \n _ C : C’EST JUSTE, la température également accélère la prise du matériau"
      },
      {
        "questionText": "N°7 (2023 1°EMD - Q968\nLa manipulation des pâtes à oxyde de zinc eugénol:",
        "options": [
          "Nécessite un porte empreinte de série:",
          "Nécessite un porte empreinte individuel",
          "Nécessite une longueur de catalyseur double à celle de la base;",
          "Consiste à mélanger la poudre et le liquide pour obtenir un mélange homogène."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_ A : C’EST FAUX, une fois mélangé, le matériau doit avoir une couleur uniforme et sera placé dans un porte empreinte individuel.\n  \n _ C et D : C’EST FAUX, on utilise les deux pâtes en quantités égales"
      },
      {
        "questionText": "N°8 (2023 1°EMD - Q983\nles pites à oxyde de Zinc eugénol sont",
        "options": [
          "Des pâtes à usage clinique;",
          "Conditionnées dans deux tubes (base/catalyseur);",
          "Des matériaux de coulée,",
          "Considérées comme un matériau de correction de l'empreinte"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°17 (2023 1°EMD - Q1141\nLes pâtes thermoplastiques sont des matériaux à empreinte:",
        "options": [
          "Qui comptes parmi les plus ressent matériaux;",
          "Leur ramollissement s'accompagne d'un changement chimique;",
          "Leur utilisation répond à toutes les situations cliniques:",
          "Se ramollissent à la chaleur et durcissent lorsqu'on les refroidi"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°14 (2022 1°EMD - Q1444\nPrécautions d'emploi relative aux pâtes zinquénoléines:",
        "options": [
          "Vaseliner les téguments en extra-buccal",
          "Vaseliner les téguments en intra-buccal",
          "La consistance de la pâte doit être épaisse",
          "Malaxer la pâte sur une plaque en plastique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Les résines",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°18 (2022 1°EMD - Q1513\nLes résines dentaires sont:",
        "options": [
          "Des résines naturelles",
          "Des résines synthétiques",
          "Des Poly méthacrylates de méthyle",
          "Des diméthacrylates de méthyle."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_ B : C’EST JUSTE, les résines sont des matériaux synthétiques\n  \n _ C : C’EST JUSTE, ce sont des méthacrylates de méthyle avec une double liaison d’acrylate"
      },
      {
        "questionText": "N°19 (2022 1°EMD - Q1525\nLes résines thermopolymérisables:",
        "options": [
          "Sont opaques",
          "Sont transparentes",
          "Possèdent une grande résistance à l'abrasion;",
          "Présentent une excellente résistance à la corrosion."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_ C : C’EST FAUX, la résistance à l’abrasion est faible"
      },
      {
        "questionText": "N°20 (2022 1°EMD - Q1541\nDans la composition chimique des Polyméthacrylates de méthyle:",
        "options": [
          "La poudre est constituée de particules sphériques de polymère",
          "Le liquide est constitué de peroxyde de benzoyle",
          "La poudre contient des plastifiants",
          "Le liquide contient un inhibiteur qui est l'hydroquinone."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE, la poudre ; polymères: PMMA déjà polymérisé et réduit en poudre de couleur rosatre \n  \n _ C : C’EST JUSTE, un plastifiant : le dibutyl-phatalate"
      },
      {
        "questionText": "N°17 (2021 1°EMD - Q1828\nLa résine ou le polyméthacrylate de méthyle",
        "options": [
          "Se présente sous forme de poudre et liquide",
          "Se présente sous forme de pâtes conditionnées dans deux tubes.",
          "Sa polymérisation se fait uniquement par cuisson",
          "Est composée d'une charge réfractaire et d'un liquide"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE, la plupart de ces polymères sont sous forme de poudre et de liquide \n  \n _ C : C’EST FAUX, y’a aussi des résines autopolymérisable"
      },
      {
        "questionText": "N°11 (2025 1°EMD - Q244\nLa polymérisation des résines acryliques est :",
        "options": [
          "Un processus de fusion.",
          "Une réaction chimique de durcissement par liaison de monomères.",
          "Une évaporation de solvant.",
          "Une cristallisation."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : la fusion est un changement physique, pas chimique tandis que la polymérisation c'est un phénomène chimique.B. Vrai : c’est une réaction chimique où les monomères se lient en polymères (durcissement).C. Faux : ce n'est pas une simple évaporation de solvant.D. Faux : ni une cristallisation, mais une polymérisation."
      },
      {
        "questionText": "N°12 (2025 1°EMD - Q272\nDans quel cas utilise-t-on des résines auto-polymérisables en prothèse dentaire ?",
        "options": [
          "Pour les couronnes métallo-résineuses.",
          "Pour la réparation des prothèses totales (réparations directes).",
          "Pour la réalisation des porte-empreintes individuels.",
          "Pour la réalisation des prothèses partielles amovibles."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "* Cas d’utilisation des résines auto-polymérisables : \n A. Faux : pour les couronnes métallo-résineuses on utilise souvent des résines photopolymérisables ou thermopolymérisables.\n B. Vrai : elles sont idéales pour les réparations directes de prothèses totales.\n C. Vrai : utilisées aussi pour porte-empreintes individuels.\n D. Faux : pour les prothèses partielles amovibles la base est généralement en métal + résine thermopolymérisable."
      },
      {
        "questionText": "N°13 (2025 1°EMD - Q282\nLe PEEK est-il allergène?",
        "options": [
          "Oui, il provoque souvent des réactions allergiques.",
          "Non, il est considéré comme hypoallergénique.",
          "Seulement en présence de métaux.",
          "Seulement sous forme de poudre."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : il ne provoque pas souvent de réactions allergiques.\n B. Vrai : le PEEK (PolyEtherEtherKetone) est considéré comme hypoallergénique.\n C. Faux : il n'est pas conditionné par la présence de métaux.\n D. Faux : sa forme (poudre ou bloc) n’influence pas sa tolérance."
      },
      {
        "questionText": "N°17 (2025 1°EMD - Q372\nParmi les affirmations suivantes concernant les résines utilisées en prothèse dentaire, laquelle ou lesquelles sont correctes ?",
        "options": [
          "La résine chémopolymérisable est principalement utilisée pour les réparations immédiates des prothèses adjointes.",
          "La résine thermopolymérisable est employée lors de la mise en moufle des prothèses amovibles.",
          "La polymérisation des résines n'atteint jamais un taux de conversion complet.",
          "La résine utilisée pour la mise en moufle est manipulée à l'état plastique."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "A. Vrai : la chémopolymérisable est rapide et idéale pour les réparations immédiates des prothèses adjointes.\n B. Vrai : la thermopolymérisable est la référence pour la mise en moufle des prothèses amovibles.\n C. Vrai : la conversion n’est jamais totale on trouve toujours la présence de monomère résiduel.\n D. Vrai : lors de la mise en moufle la résine est manipulée à l’état plastique."
      },
      {
        "questionText": "N°20 (2025 1°EMD - Q440\nQuelle propriété du PEEK le rend adapté aux applications en prothèse dentaire ?",
        "options": [
          "Sa faible résistance à l'usure.",
          "Sa rigidité et sa résistance aux chocs.",
          "Sa solubilité dans l'eau.",
          "Sa transparence optique parfaite."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Faux : il a une bonne résistance à l’usure non pas faible.\n B. Vrai : sa rigidité et sa résistance aux chocs le rendent adapté.\n C. Faux : il est insoluble dans l’eau.\n D. Faux : il n’est pas totalement transparent."
      },
      {
        "questionText": "N°17 (2024 1°EMD - Q765\nLes hydro colloïdes dans la forme de sol :",
        "options": [
          "Sont fluides",
          "De faible viscosité",
          "Avec des chaines polysaccharidiques qui s'alignent comme des fibrilles",
          "Sont très volatiles."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_B : c’est faux, se présente sous forme de poudre et liquide_C : c’est faux, sa polymérisation peut se faire chimiquement ( auto polymérisable )"
      },
      {
        "questionText": "N°20 (2024 1°EMD - Q829\nLes résines auto polymérisables ont :",
        "options": [
          "Une dureté inférieure à celle des résines thermo polymérisables",
          "Une dureté supérieure à celle des résines thermo polymérisables ;",
          "Une dureté égale à celle des résines thermo polymérisables ;",
          "Les mêmes propriétés que les résines souples."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_   B et C : SONT FAUSSES, dureté inférieur à celle des résines thermo polymérisable"
      },
      {
        "questionText": "N°11 (2023 1°EMD - Q1045\nLes résines thérapeutiques sont à polymerisation",
        "options": [
          "Rapide:",
          "Exothermique;",
          "Retardée;",
          "Favorisent le rétablissement anatomo-physiologique des tissus par sa mise au repos."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°12 (2023 1°EMD - Q1060\nLe processus de polymérisation est :",
        "options": [
          "Un pré-polymère:",
          "Un monomère;",
          "Une molécule simple:",
          "Les monomères qui s'assemblent pour former des polymères."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": ""
      },
      {
        "questionText": "N°13 (2023 1°EMD - Q1080\nLes parasités sont.",
        "options": [
          "Des bulles microscopiques;",
          "Des bulles macroscopiques de formes et de dimension variées,",
          "Dues au chauffage trop rapide de la pâte contenue dans le moufle;",
          "Dues a un mélange homogène."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ chaque pore interne ou bulle est une zone de concentration de contrainte, entraînant un risque de déformation des bases si les contraintes sont libérées"
      },
      {
        "questionText": "N°14 (2023 1°EMD - Q1087\nLes résines autodurcissante sont appelées :",
        "options": [
          "Résine thermo polymérisable p",
          "Résine durcissant à la chaleur",
          "Résine auto polymérisable",
          "Résine chémopolymérisable."
        ],
        "correctOptionIndexes": [
          2,
          3
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Les élastomères",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°9 (2021 1°EMD - Q1702\nles polysulfures:",
        "options": [
          "Sont des matériaux hydrophobes",
          "Sont composés d'une base brune.",
          "Sont composés d'une pâte catalyseur blanche",
          "Se présentent en 3 viscosités, basse, moyenne et aile"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE, ces matériaux sont hydrophobes \n  \n _ B et C : SONT FAUSSES, sont composés : \n - pate base : de couleur blanche \n - pate catalyseur : de couleur brune"
      },
      {
        "questionText": "N°10 (2021 1°EMD - Q1710\nles silicones polysiloxanes:",
        "options": [
          "Réticulent par réaction de condensation",
          "Leur réaction de prise s'effectue avec dégagement des invisible alcool",
          "Il en résulte une expansion (augmentation de Voline de l’empreinte)",
          "Ont une très bonne stabilité dimensionnelle."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "_ A : C’EST JUSTE, ils réticulent par réaction de condensation\n  \n _ D : C’EST FAUX, faible"
      },
      {
        "questionText": "N°11 (2021 1°EMD - Q1721\nLes silicones polyvinyles:",
        "options": [
          "Leur réaction de prise s'effectue avec formation de sous-produits volatiles.",
          "Ont une très bonne stabilité dimensionnelle.",
          "Ont une bonne reproduction des détails",
          "Sont de nature hydrophyle"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_ A : C’EST FAUX, sans formation de sous produit, elle aboutit à un matériau d’une grande stabilité dimensionnelle"
      },
      {
        "questionText": "N°5 (2025 1°EMD - Q135\nLes élastomères silicone polymérisant par condensation",
        "options": [
          "Se caractérisent par la présence de groupements organiques hydrocarbonés.",
          "Utilisent un catalyseur contenant un ester métallique organique.",
          "Contiennent du polydiméthylsiloxane dans leur prépolymère.",
          "Aucune des réponses ci-dessus n'est correcte."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A. Vrai : ils se caractérisent par la présence de groupements organiques hydrocarbonés (méthyle....).B. Vrai : catalyseur à base d’étain organique (ex. octoate d’étain).C. Vrai : le prépolymère est du polydiméthylsiloxane (base silicone).D. Faux : Toutes les réponses sont justes."
      },
      {
        "questionText": "N°6 (2025 1°EMD - Q144\nLes élastomères polymérisant par addition :",
        "options": [
          "Sont commercialisés exclusivement en tubes ou en cartouches.",
          "Sont disponibles en 3 viscosités.",
          "Sont disponibles en 5 viscosités.",
          "Contiennent du polysiloxane dans leur catalyseur."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "A. Faux : ils sont disponibles en tubes, cartouches ou automix, pas exclusivement en tubes ou cartouches.B. Faux : ils sont disponibles en plusieurs viscosités pas 3.C. Vrai : généralement 5 viscosités standards (très haute, haute, moyenne, basse, très basse).D. Vrai : le catalyseur contient des sels de platine ou de Nickel, du polysiloxane, ainsi que des pigments et des plastifiants."
      },
      {
        "questionText": "N°7 (2025 1°EMD - Q164\nLors de la manipulation des polyéthers",
        "options": [
          "Le port de gants en latex est contre indiqué.",
          "Il est conseillé d'utiliser un adhésif.",
          "L'uniformité de la couleur permet de contrôler la qualité de la spatulation.",
          "Toutes les réponses ci-dessus sont correctes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "A. Faux : le latex inhibe la polymérisation lors l'utilisation des A.silicone et non pas les polyéthers.B. Vrai : un adhésif spécial est nécessaire pour la rétention optimale du matériau dans le porte-empreinte.C. Vrai : couleur uniforme = mélange homogène.D. Faux : la réponse A est fausse."
      },
      {
        "questionText": "N°8 (2025 1°EMD - Q194\nLa réaction de prise des élastomères polysulfure:",
        "options": [
          "Se fait selon un mode de réticulation appelé vulcanisation.",
          "Implique une augmentation de la taille des chaines de polymère.",
          "Aboutit à une diminution de viscosité du mélange.",
          "Toutes les réponses ci-dessus sont correctes."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A. Vrai : la réaction de prise des thiocols se fait par une réticulation par vulcanisation oxydative avec oxyde du plomb ou de cuivre.B. Vrai : elle exige une augmentation de la taille des chaînes de polymère ce qui donne un allongement des chaînes en formant un réseau tridimensionnel.C. Faux : la viscosité augmente pendant la prise.D. Faux : la réponse C est fausse."
      },
      {
        "questionText": "N°9 (2024 1°EMD - Q632\nLa mise en revêtement :",
        "options": [
          "Consiste à la coulée des empreintes en plâtre :",
          "Consiste à enrober la maquette prothétique en cire d'un matériau permettant sa reproduction;",
          "C'est L'obtention d'un élément métallique coulé à partir d'une maquette en cire ;",
          "C'est une étape à la fois clinique et laboratoire."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "_A : c’est juste, les polysulfures sont hydrophobes_B et C : sont fausses, pate base de couleur blanche et pate catalyseur de couleur brune_ D : c’est juste, disponible de 3 viscosités : basse,moyenne et haute"
      },
      {
        "questionText": "N°10 (2024 1°EMD - Q639\nLes revêtements à liant phosphate",
        "options": [
          "Sont utilisés pour la coulée des métaux non précieux ;",
          "Résistent à des températures très élevées",
          "Leur expansion est contrôlable ;",
          "Leur capacité de reproduction de détails est faible"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_B : c’est juste, la réaction de prise s’effectue avec dégagement d’un résidu (alcool) , il s’ensuit une contraction du matériau \n  \n _C : c’est faux, il en résulte une contraction du matériau \n  \n _D :c’est faux, la réaction de prise s’effectue avec dégagement d’un résidu (alcool) , il s’ensuit une contraction du matériau \n  -La contraction durant les premières 24h = 0,6"
      },
      {
        "questionText": "N°11 (2024 1°EMD - Q666\nLes pâtes de Kerr :",
        "options": [
          "sont des matériaux de revêtement thermoplastiques",
          "Nécessite une température très Importante pour leur déformation ;",
          "Utilisées en bouche à une température de 37\"",
          "Leur ramollissement exige un chauffage au bain marie."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "_A : c’est faux, sans formation de sous-produit \n  \n _B : c’est juste, elle aboutit à un matériau d’une grande stabilité dimensionnelle \n  \n _D : c’est faux, elles sont de nature hydrophobe"
      },
      {
        "questionText": "N°20 (2023 1°EMD - Q1203\nLes caoutchoucs type polyéthers.",
        "options": [
          "Sont des silicones qui peuvent être indiqués aussi bien en PPAC qu'en prothèse conjointe",
          "Présentent un temps de travail assez court;",
          "Présentent d'excellentes propriétés élastiques:",
          "Présentent de très mauvaises variations dimensionnelles."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": ""
      },
      {
        "questionText": "N°1 (2022 1°EMD - Q1228\nLes trois différentes familles des élastomères sont:",
        "options": [
          "Les Polysulfures-Les hydro colloïdes-Les Silicones",
          "Les Polysulfures-Les Silicones-Les Polyéthers",
          "Les Thiocols-Les Polyéthers-Les Silicones",
          "Les Thiocols-Les Silicones-Les compositions thermoplastiques."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "_ on distingue 3 grandes familles d’élastomères : \n - les polysulfures \n - les silicones \n - les polyéthers"
      },
      {
        "questionText": "N°2 (2022 1°EMD - Q1234\nPlus on augmente les charges pour un élastomère:",
        "options": [
          "Plus sa stabilité dimensionnelle augmente:",
          "Plus sa capacité d'enregistrement des détails augmente;",
          "Plus la viscosité augmente;",
          "6 Plus il est difficile à manipuler."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      },
      {
        "questionText": "N°3 (2022 1°EMD - Q1261\nLes Silicones «A»:",
        "options": [
          "Ont une stabilité dimensionnelle supérieure:",
          "Sont des Vinylpolysiloxanes réticulant par addition;",
          "Sont des Diméthylpolysiloxanes polycondensés",
          "Sont des polysiloxanes polycondensés."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": ""
      }
    ]
  },
  {
    "title": "Occluso-dontie",
    "subject": "patho",
    "questions": [
      {
        "questionText": "N°16 (2025 2°EMD - Q351\nQuelle est la fonction principale des cuspides primaires (d'appui) ?",
        "options": [
          "Stabilisation et calage des arcades dentaires",
          "Protection des lèvres et des joues",
          "Participation à l'écrasement du bol alimentaire",
          "Limitation du mouvement de la langue"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "B- faux  Ce rôle est plutôt assuré par les incisives/canines.C– Ce n’est pas leur fonction principale, ce rôle est assuré par les structures linguales."
      },
      {
        "questionText": "N°17 (2025 2°EMD - Q361\nQue représente la courbe de Spee ?",
        "options": [
          "Une ligne courbe passant par les cuspides vestibulaires et linguales des molaires",
          "Une ligne fictive passant par le bord libre des incisives, la pointe des canines et les cuspides vestibulaires des prémolaires et molaires",
          "Une courbe horizontale représentant l'alignement parfait des dents sur l'arcade",
          "une courbe à concavité inférieure"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "A- Mélange entre Spee (sagittal) et Wilson (transversal).C- Ce serait plutôt l’alignement idéal, pas la courbe de Spee.D - La courbe a une concavité supérieure, pas inférieure"
      },
      {
        "questionText": "N°18 (2025 2°EMD - Q400\nl'occlusion est une des cinq entités de l'appareil manducateur, lorsqu'elles sont harmonieuses nous conduisent à une fonction équilibrée de la mandibule avec:",
        "options": [
          "Un chemin de fermeture droit",
          "Mastication uni-latérale",
          "L'absence totale de surplomb incisif",
          "Occlusion en classe I d'Angle avec overjet et overbite de 2 mm"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "B - La mastication unilatérale est pathologique.\n C– Il faut un surplomb incisif modéré (overjet)."
      },
      {
        "questionText": "N°19 (2025 2°EMD - Q404\nEn propulsion, quelles dents sont normalement en contact ?",
        "options": [
          "Les 2 incisives supérieures et les 4 incisives inférieures",
          "Toutes les dents postérieures",
          "Les prémolaires maxillaires et mandibulaires",
          "Les canines et incisives mandibulaires"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "B. Fausse – Les postérieures se désoccluent en propulsion.C. Fausse – Les prémolaires ne sont pas concernées ici.D. Fausse – Les canines ne sont pas en contact frontalement lors de la propulsion."
      },
      {
        "questionText": "N°20 (2025 2°EMD - Q422\nQuelles sont les fonctions principales de l'occlusion dentaire ?",
        "options": [
          "Fonction de calage",
          "Fonction de guidage",
          "Fonction de mastication uniquement",
          "Fonction de déglutition uniquement"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "C. Fausse – Ce n’est pas la seule fonction.D. Fausse – La déglutition n’est pas une fonction exclusive de l’occlusion."
      }
    ]
  }
];

module.exports = pathoQuizzes;
