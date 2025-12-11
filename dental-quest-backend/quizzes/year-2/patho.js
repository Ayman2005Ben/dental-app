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
        "questionText": "La gémination:",
        "options": [
          "Est une dysmorphie coronaire,",
          "Est le déplacement de la dent au sein du maxillaire.",
          "Est l'union de deux germes dentaires.",
          "Peut être confondue avec la fusion"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La gémination est la tentative de division d'un seul germe dentaire. Cliniquement, il est très difficile de la différencier de la fusion (union de deux germes distincts), c'est pourquoi on les regroupe parfois sous le nom de 'dent double'."
      },
      {
        "questionText": "La dilacération:",
        "options": [
          "Est une anomalie de structure héréditaire",
          "Peut être confondue avec le taurodonitisme.",
          "Survient quand un traumatisme mécanique affecte une dent temporaire et se répercute au niveau du germe définitif.",
          "Est une dysmorphie coronaire"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La dilacération est une angulation anormale de la racine ou de la couronne, généralement causée par un traumatisme sur la dent temporaire qui déplace le germe de la dent permanente en formation. C'est une anomalie de forme, non héréditaire."
      },
      {
        "questionText": "La forme hypoplasique de l'amélogénèse imparfaite",
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
        "explanation": "L'amélogenèse imparfaite de type hypoplasique est une anomalie héréditaire caractérisée par une déficience de la quantité d'émail (il est trop fin), mais la matrice d'émail présente est normalement minéralisée."
      },
      {
        "questionText": "L'inclusion des dents permanentes est généralement due à :",
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
        "explanation": "L'inclusion dentaire est souvent due à des facteurs locaux comme un manque de place, un obstacle sur le chemin d'éruption (odontome, dent surnuméraire), ou une anomalie de croissance de l'os alvéolaire."
      },
      {
        "questionText": "Dans la dentinogénèse imparfaite de type 1:",
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
        "explanation": "La DI de type I est associée à l'ostéogenèse imparfaite, et affecte plus sévèrement la denture temporaire. Radiologiquement, on observe des racines courtes et une oblitération pulpaire. Ses caractéristiques cliniques sont très similaires à celles du type II."
      },
      {
        "questionText": "La dentinogénèse imparfaite:",
        "options": [
          "Est toujours associée à des signes généraux.",
          "Est souvent confondue avec l'amélogénèse imparfaite",
          "Affecte les deux dentures à des degrés différents.",
          "Est une anomalie de structure où seules les couronnes dentaires présentent une altération."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La dentinogenèse imparfaite est une anomalie de la dentine qui affecte les deux dentures, souvent de manière plus sévère sur les dents temporaires. Seul le type I est associé à des signes généraux (ostéogenèse imparfaite)."
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
        "questionText": "La dilacération dentaire :",
        "options": [
          "Est une modification de l'axe longitudinal de la dent.",
          "Se caractérise par une angulation, qui peut être radiculaire, coronaire ou à la jonction corono-radiculaire.",
          "Elle survient suite à un traumatisme sur le germe dentaire.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La dilacération est une modification de l'axe longitudinal de la dent, se caractérisant par une angulation (coronaire ou radiculaire) qui survient généralement suite à un traumatisme sur le germe en développement."
      },
      {
        "questionText": "Les agénésies dentaires:",
        "options": [
          "Concernent la denture définitive et/ou lactéale.",
          "Sont beaucoup moins fréquentes en denture temporaire qu'en denture permanente.",
          "Le diagnostic des agénésies repose sur plusieurs éléments cliniques et radiologiques.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les affirmations sont correctes. Les agénésies (absences de dents) peuvent toucher les deux dentures, mais sont plus rares en denture temporaire. Le diagnostic se base sur l'examen clinique et la confirmation radiologique."
      },
      {
        "questionText": "La concrescence:",
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
        "explanation": "La concrescence est la soudure de deux dents par le cément, due à une prolifération anormale de celui-ci. Elle est souvent diagnostiquée par un examen radiographique qui montre la fusion des racines."
      },
      {
        "questionText": "Le taurodontisme:",
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
        "explanation": "Le taurodontisme est une anomalie de forme radiculaire (pas coronaire) qui affecte principalement les molaires. Il peut être une anomalie isolée ou être associé à d'autres troubles du développement comme certaines formes d'amélogénèse imparfaite."
      },
      {
        "questionText": "L'agénésie dentaire",
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
        "explanation": "L'agénésie est l'absence congénitale d'une ou plusieurs dents. C'est une anomalie qui peut être isolée ou associée à de nombreux syndromes génétiques. Elle affecte plus fréquemment la denture permanente."
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
        "questionText": "Parmi ces propositions, laquelle (lesquelles) est (sont) juste (s) :",
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
        "questionText": "Le mésiodens :",
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
        "explanation": "Le mésiodens est une dent surnuméraire (anomalie de nombre), souvent de forme conoïde. Il siège dans la région des incisives centrales supérieures et peut entraver leur éruption."
      },
      {
        "questionText": "L'agénésie:",
        "options": [
          "Est définie par i absence d'une dent sur arcade",
          "Est une anomalie beaucoup plus fréquente en dentur: temporaire",
          "Peut être associée à d'autres anomalies, dans de nombreux syndromes.",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'agénésie (absence d'une ou plusieurs dents) est plus fréquente en denture permanente et peut être une anomalie isolée ou associée à d'autres anomalies dans le cadre de syndromes génétiques."
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
        "questionText": "Dans une carpule anesthésique, le produit est sous forme:",
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
        "explanation": "Pour être efficace, le produit anesthésique dans la carpule est sous forme non-ionisée, ce qui lui permet d'être diffusible à travers les tissus. Il ne devient ionisé (actif) qu'une fois qu'il atteint la membrane interne des fibres nerveuses."
      },
      {
        "questionText": "Parmi les contre-indications des vasoconstricteurs:",
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
        "questionText": "L'anesthésie tronculaire à l'épine de Spix est:",
        "options": [
          "Complétée par une anesthésie muqueuse.",
          "Utilisée pour l'extraction des dents maxillaires.",
          "Utilisée pour l'extraction du bloc incisivo-canin mandibulaire.",
          "Toujours complétée par une anesthésie intra-septale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'anesthésie à l'épine de Spix anesthésie le nerf alvéolaire inférieur. Cependant, la muqueuse vestibulaire est innervée par le nerf buccal. Il faut donc la compléter par une anesthésie para-apicale vestibulaire pour un confort total."
      },
      {
        "questionText": "Lors de phénomènes inflammatoires, le milieu dans lequel on injecte le produit anesthésique est déjà acide, le produit est donc :",
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
        "explanation": "Normalement, l'anesthésique devient ionisé (activé) à l'intérieur du nerf. En milieu inflammatoire acide, il est ionisé dès l'injection, ce qui l'empêche de diffuser efficacement à travers la membrane nerveuse, d'où l'échec de l'anesthésie."
      },
      {
        "questionText": "L'anesthésie de surface est:",
        "options": [
          "Indiquée en cas d'un drainage exobuccal",
          "Peut être utilisée au niveau cutané",
          "Généralement commercialisée sous formes de carpules de 1.8ml.",
          "Suffit pour l'avulsion des dents de lait"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'anesthésie de surface (gel, spray) insensibilise temporairement la muqueuse ou la peau. Elle est insuffisante pour un acte chirurgical comme un drainage ou une avulsion et n'est pas commercialisée en carpules."
      },
      {
        "questionText": "Le vasoconstricteur présente l'avantage:",
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
        "questionText": "L'anesthésie intra-ligamentaire;",
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
        "explanation": "L'anesthésie intra-ligamentaire consiste à injecter l'anesthésique directement dans le desmodonte. Elle n'est pas assez puissante seule pour une molaire mais est un excellent complément à une anesthésie para-apicale insuffisante."
      },
      {
        "questionText": "Les accidents allergiques immédiats liés aux anesthésiques locaux:",
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
        "explanation": "Les vraies allergies aux anesthésiques locaux sont rares. Quand elles surviennent, elles sont plus souvent dues aux conservateurs (parabènes) et sont historiquement plus fréquentes avec l'ancienne famille des amino-esters."
      },
      {
        "questionText": "La dépolarisation est due à :",
        "options": [
          "La sortie du potassium de la fibre nerveuse à partir de liquide extracellulaire.",
          "La sortie du sodium de la fifre nerveuse,",
          "L'entrée du sodium de la fibre nerveuse",
          "L'entrée du potassium de la fibre nerveuse."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La dépolarisation de la membrane de la fibre nerveuse, qui déclenche l'influx nerveux, est causée par une entrée massive et rapide d'ions sodium (Na+) dans la cellule."
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
        "questionText": "La mépivacaine est :",
        "options": [
          "Une solution anesthésique de la famille des amino-esters",
          "Contre-indiquée chez tous les malades à risque.",
          "La plus récente des anesthésiques locaux.",
          "Moins vasodilatatrice que la lidocaïne."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La mépivacaïne (famille des amino-amides) est moins vasodilatatrice que la lidocaïne. Cette propriété lui permet d'être utilisée sans vasoconstricteur chez les patients à risque (cardiaques, hypertendus, etc.)."
      },
      {
        "questionText": "L'infiltration du produit anesthésique se fait toujours à distance du foyer infectieux, car:",
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
        "explanation": "Injecter dans une zone infectée pose deux problèmes majeurs : le pH acide du tissu réduit l'efficacité de l'anesthésique, et surtout, il y a un risque de disséminer les bactéries (essaimage bactérien) dans la circulation sanguine."
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
        "questionText": "Parmi les techniques anesthésiques suivantes, laquelle est réalisée en deux temps:",
        "options": [
          "L'anesthésie intra-ligamentaire.",
          "L'anesthésie intra-pulpaire.",
          "L'anesthésie muqueuse.",
          "L'anesthésie para-apicale"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L'anesthésie para-apicale au maxillaire se fait en deux temps : une première injection vestibulaire (la plus grande partie de la carpule) suivie d'une seconde injection palatine ou linguale pour anesthésier complètement la zone."
      },
      {
        "questionText": "L'adjonction d'adrénaline aux anesthésiques locaux présente l'avantage:",
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
        "questionText": "Les anesthésiques locaux sont différents par:",
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
        "explanation": "Les anesthésiques locaux diffèrent par leur pKa (qui détermine leur délai d'action) et leur capacité de liaison aux protéines plasmatiques (qui détermine leur durée d'action)."
      },
      {
        "questionText": "L'influx nerveux est bloqué par les anesthésiques locaux :",
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
        "questionText": "Le Tétrafluorodichloroethane (Friljet):",
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
        "explanation": "Le Friljet est un spray réfrigérant qui provoque une anesthésie de surface très courte par le froid. Il est utile comme pré-anesthésie pour diminuer la douleur de la piqûre, notamment chez les patients anxieux."
      },
      {
        "questionText": "Le risque d'une nécrose osseuse peut être retrouvé suite:",
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
        "explanation": "Une nécrose osseuse peut survenir suite à une anesthésie intra-osseuse (si mal réalisée ou infectée) ou à une anesthésie au palais (si injectée trop rapidement ou avec une concentration trop élevée de vasoconstricteur, coupant l'apport sanguin)."
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
        "questionText": "L'analgésie du nerf alvéolaire inférieur:",
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
        "explanation": "L'anesthésie du nerf alvéolaire inférieur est obtenue par une anesthésie tronculaire à la lingula (épine de Spix). Elle est principalement indiquée pour les soins et extractions des molaires mandibulaires."
      },
      {
        "questionText": "Les vasoconstricteurs:",
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
        "explanation": "Les vasoconstricteurs réduisent le flux sanguin, ce qui diminue le saignement et ralentit l'absorption de l'anesthésique, augmentant ainsi sa durée d'action. Ils ne sont pas contre-indiqués chez les hémophiles."
      },
      {
        "questionText": "L'anesthésie para-apicale:",
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
        "questionText": "L'articaine est :",
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
        "explanation": "L'articaine est une molécule de la famille des amino-amides (pas ester), rapidement métabolisée par les estérases plasmatiques et hépatiques. Elle est efficace même avec de faibles doses de vasoconstricteur et peut être utilisée chez l'enfant avec des doses adaptées."
      },
      {
        "questionText": "L'anesthésie tronculaire à la Lingula:",
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
        "explanation": "L'anesthésie tronculaire à la Lingula (épine de Spix) est indiquée pour les extractions des molaires mandibulaires (ex: 36). En raison du risque élevé d'hématome, elle est contre-indiquée en cas de troubles de l'hémostase (hémophilie, anticoagulants)."
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
        "questionText": "Les anesthésiques locaux doivent avoir:",
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
        "explanation": "Un anesthésique local idéal doit être non irritant pour les tissus, soluble dans l'eau et les graisses (pour l'injection et la pénétration membranaire), avoir un délai d'action rapide et une action transitoire et réversible."
      },
      {
        "questionText": "Parmi les causes d'échec d'une anesthésie buccale:",
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
        "explanation": "Les deux causes les plus fréquentes d'échec sont l'injection d'une quantité insuffisante de produit anesthésique et l'injection dans un tissu inflammatoire (infecté) où le pH acide empêche la diffusion de l'anesthésique."
      },
      {
        "questionText": "Pour l'extraction de la 46, quelle technique d'anesthésie peut-on utiliser ?",
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
        "explanation": "Pour la 46, une anesthésie loco-régionale (tronculaire) du nerf alvéolaire inférieur est indispensable. Elle doit être complétée par une anesthésie para-apicale vestibulaire pour anesthésier le nerf buccal qui innerve la gencive."
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
        "questionText": "La durée d'action de l'anesthésique local dépend de :",
        "options": [
          "Le vasoconstricteur",
          "La vitesse d'injection",
          "Le site d'injection",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La durée d'action est principalement conditionnée par la capacité de liaison aux protéines et la présence d'un vasoconstricteur, qui ralentit l'absorption du produit et le maintient plus longtemps sur le site."
      },
      {
        "questionText": "Dans le cas d'une pulpectomie sur la 23:",
        "options": [
          "L'anesthésie de la muqueuse palatine est nécessaire",
          "L'anesthésie vestibulaire est complétée par une injection palatine",
          "L'anesthésie palatine se fait au trou rétro incisif",
          "L'anesthésie vestibulaire peut être complétée par une anesthésie intrapulpaire"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Pour une pulpectomie, l'anesthésie de la pulpe est l'objectif. Une anesthésie vestibulaire est essentielle. Si celle-ci est insuffisante (pulpite hyperalgique), elle peut être complétée efficacement par une injection intrapulpaire directe."
      },
      {
        "questionText": "L'anesthésie du nerf alvéolaire inférieur :",
        "options": [
          "Utilise un anesthésique avec vasoconstricteur",
          "Peut avoir comme complication un hématome latéro-pharyngé",
          "Doit être complétée par une injection vestibulaire pour une pulpectomie sur la 46",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Une complication classique mais rare de l'anesthésie du nerf alvéolaire inférieur est la lésion d'un vaisseau sanguin, pouvant provoquer un hématome dans l'espace ptérygo-mandibulaire (latéro-pharyngé)."
      },
      {
        "questionText": "L'anesthésie intraosseuse",
        "options": [
          "Peut remplacer une anesthésie du nerf alvéolaire inférieur à la lingula pour l'avulsion d'une 38",
          "Est réalisé avec le même matériel qu'une anesthésie tronculaire",
          "L'anesthésie de la muqueuse vestibulaire n'est pas nécessaire",
          "L'injection se fait au contact de la corticale vestibulaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'anesthésie intra-osseuse, en déposant l'anesthésique directement dans l'os spongieux, peut être une alternative efficace à l'anesthésie tronculaire. Elle nécessite un matériel spécifique pour perforer la corticale et une anesthésie de la muqueuse au préalable."
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
      }
    ]
  },
  {
    "title": "Techniques simples d'extractions dentaires",
    "subject": "patho",
    "questions": [
      {
        "questionText": "Le temps alvéolaire:",
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
        "explanation": "Le temps alvéolaire, aussi appelé révision ou curetage, consiste à explorer l'alvéole pour éliminer les débris, le tissu de granulation pathologique, et permet de retirer un éventuel fragment osseux fracturé. La suture n'est pas systématique."
      },
      {
        "questionText": "Pour les conseils post-opératoires, il faut prescrire :",
        "options": [
          "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse,",
          "Une alimentation chaude le premier jour.",
          "Un antalgique type salicylé pour diminuer les douleurs post-extractionnelles.",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les réponses sont fausses. Il faut éviter les bains de bouche pendant 24h (pour protéger le caillot), éviter les aliments et boissons chaudes, et proscrire les salicylés (aspirine) qui augmentent le risque de saignement."
      },
      {
        "questionText": "Lors de la luxation:",
        "options": [
          "Il faut mobiliser la dent dans son alvéole en prenant appui sur la dent voisine.",
          "Le maintien des tables osseuses est nécessaire.",
          "L'opérateur se place devant et à gauche du patient pour les dents maxillaires",
          "L'instrument utilisé est un élévateur tenu à plein main"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Lors de la luxation, il est essentiel de maintenir les tables osseuses entre les doigts pour éviter leur fracture. L'opérateur se place devant et à droite pour l'arcade supérieure. L'élévateur est tenu fermement dans la paume de la main."
      },
      {
        "questionText": "L'instrumentation nécessaire pour l'avulsion dentaire simple est :",
        "options": [
          "Le syndesmotome.",
          "Le bistouri",
          "Le décolleur.",
          "La pince gouge."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Pour une avulsion simple, le syndesmotome est l'instrument clé utilisé en premier pour sectionner les fibres desmodontales (ligament) et faciliter l'extraction. Les autres instruments sont utilisés en chirurgie."
      },
      {
        "questionText": "Le davier utilisé pour l'extraction de la 1 molaire supérieure comporte des :",
        "options": [
          "Mors symétriques, égaux, jointifs.",
          "Mors symétriques, égaux, sous forme de S allongé",
          "Mors asymétriques avec un ergot médian qui vient s'insérer dans la furcation vestibulaire",
          "Mors larges et longs, sans ergot médian."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le davier pour la première molaire supérieure est spécifique : il a des mors asymétriques avec un ergot (pointe) sur le mors vestibulaire, conçu pour s'insérer dans la furcation entre les racines vestibulaires et assurer une meilleure prise."
      },
      {
        "questionText": "Après une avulsion dentaire simple, il faut prescrire:",
        "options": [
          "Des bains de bouche pendant 24 heures, afin d'accélérer la cicatrisation muqueuse.",
          "Une alimentation chaude le premier jour",
          "Systématiquement un antibiotique afin d'éviter une surinfection post-extractionnelle",
          "Toutes les réponses sont fausses."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes les réponses sont fausses. Il faut éviter les bains de bouche pendant 24h pour protéger le caillot. L'alimentation doit être froide ou tiède. Les antibiotiques ne sont pas systématiques pour une avulsion simple."
      },
      {
        "questionText": "L'extraction des incisives maxillaires droites:",
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
        "questionText": "Le davier utilisé pour l'extraction de la 1ère prémolaire supérieure:",
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
        "explanation": "Le davier pour la 1ère prémolaire supérieure a des mors symétriques, non jointifs, et une forme en S allongé pour faciliter l'accès. Il est universel et peut être utilisé pour les deux côtés (droit et gauche)."
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
        "questionText": "La syndesmotomie :",
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
        "explanation": "La syndesmotomie est l'acte de couper les fibres du ligament alvéolo-dentaire. Elle se réalise avec un syndesmotome (et non un élévateur), tenu comme un stylo, que l'on introduit dans le sulcus, entre la gencive et le collet de la dent."
      },
      {
        "questionText": "Avant toute extraction dentaire:",
        "options": [
          "L'examen clinique est obligatoire.",
          "L'examen radiologique n'est pas systématique.",
          "La difficulté opératoire est déterminée par l'évaluation de l'état parodontal",
          "Toutes les réponses sont justes"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "L'examen clinique est une étape initiale essentielle et systématique avant toute avulsion dentaire. L'examen radiologique est fortement recommandé mais pas toujours obligatoire. La difficulté dépend de plusieurs facteurs."
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
        "questionText": "Lors de l'avulsion d'une dent lactate",
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
        "questionText": "Le davier utilisé pour l'extraction de 36",
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
        "questionText": "Le mouvement imprimé au davier pour extraire une 45 est :",
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
        "questionText": "Le davier pour la dent 26",
        "options": [
          "Est munie d'une pointe du côté gauche",
          "Est munie d'une pointe du côté droit",
          "Peut être utilisé pour extraire la 16",
          "Peut être utilisé pour extraire la 28"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le davier pour la 26 (première molaire maxillaire gauche) est spécifique : il possède une pointe (ergot) sur le mors vestibulaire gauche pour s'engager dans la furcation. Il ne peut donc pas être utilisé pour la 16 (côté droit)."
      },
      {
        "questionText": "La révision alvéolaire :",
        "options": [
          "N'est pas systématique après une avulsion dentaire",
          "Doit toujours comprendre un curetage alvéolaire",
          "Permet une hémostase locale",
          "Permet d'éliminer les débris dentaires et osseux"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "La révision alvéolaire est une étape systématique qui permet d'inspecter et de nettoyer l'alvéole en éliminant les débris dentaires et osseux. Le curetage n'est pas toujours nécessaire, et l'hémostase se fait principalement au temps gingival."
      },
      {
        "questionText": "Dans le cas d'avulsions simple de la 46 :",
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
        "explanation": "Pour la 46, le mouvement principal est vestibulo-lingual avec une majoration vestibulaire. Le davier pour molaire mandibulaire présente un éperon sur chaque mors pour s'insérer dans les furcations vestibulaire et linguale."
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
    "title": "Complications avulsionnelles (per et post opératoires)",
    "subject": "patho",
    "questions": [
      {
        "questionText": "L'atteinte du nerf lingual:",
        "options": [
          "Fait suite à l'extraction d'une dent mandibulaire",
          "Est une complication sans conséquence, rapidement résolutive.",
          "Entraine une séduction de la mobilité linguale.",
          "Aucune réponse n'est juste."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Aucune des affirmations n'est juste. La lésion du nerf lingual est une complication possible lors de l'extraction des 3èmes molaires mandibulaires. Elle entraîne des troubles sensitifs (anesthésie, paresthésie) et non une réduction de la mobilité. La récupération peut être lente et incomplète."
      },
      {
        "questionText": "La communication bucco-sinusienne:",
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
        "questionText": "La manœuvre de Valsalva est pratiquée devant",
        "options": [
          "Une avulsion d'une dent antrale",
          "Une avulsion dentaire faite au maxillaire",
          "Toute extraction dentaire",
          "Une sinusite maxillaire d'origine dentaire"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La manœuvre de Valsalva est un test diagnostique utilisé spécifiquement après l'extraction d'une dent antrale (maxillaire postérieure) pour vérifier s'il existe une communication bucco-sinusienne."
      },
      {
        "questionText": "La projection d'une dent de sagesse supérieure dans le sinus maxillaire:",
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
        "explanation": "La projection d'une dent dans le sinus maxillaire est souvent le résultat d'une manœuvre de luxation mal contrôlée. Cet accident crée obligatoirement une communication bucco-sinusienne et nécessite une intervention pour récupérer le fragment."
      },
      {
        "questionText": "L'alvéolite suppurée:",
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
        "explanation": "L'alvéolite suppurée est une infection du caillot sanguin et de l'alvéole, se manifestant par des signes infectieux généraux comme la fièvre et une adénopathie. L'alvéolite sèche est due à une anomalie de fibrinolyse."
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
        "questionText": "L'ouverture accidentelle du sinus maxillaire lors de l'avulsion d'une dent antrale, se traduit par:",
        "options": [
          "Un œdème de la lèvre supérieure.",
          "Un reflux de liquide par le nez",
          "Une hypoesthésie de la région naso-génienne.",
          "Des douleurs sinusiennes per-opératoires"
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Le signe clinique le plus caractéristique d'une communication bucco-sinusienne est le reflux de liquide (eau, salive) de la bouche vers le nez lors d'un rinçage ou en buvant. Les autres signes ne sont pas spécifiques."
      },
      {
        "questionText": "Pour prévenir l'apparition d'une CBS:",
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
        "explanation": "Pour prévenir une communication bucco-sinusienne (CBS), une radiographie pré-opératoire est essentielle pour évaluer les rapports entre la dent et le sinus. L'extraction doit être la plus atraumatique possible, en particulier pour les dents maxillaires postérieures (antrales)."
      },
      {
        "questionText": "la fracture d'une table osseuse externe au cours d'une extraction dentaire:",
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
        "explanation": "La fracture d'une table osseuse peut compromettre la future réhabilitation prothétique, dénuder les racines des dents voisines, et le fragment fracturé doit être retiré. C'est une complication rare lors de l'extraction de dents de lait."
      },
      {
        "questionText": "La paralysie faciale transitoire peut être une complication:",
        "options": [
          "De l'anesthésie péri-apicale.",
          "De l'extraction des dents de sagesse mandibulaires.",
          "De l'anesthésie tronculaire à l'épine de Spix.",
          "De l'extraction des dents de sagesse maxillaires."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Une paralysie faciale transitoire peut survenir si, lors d'une anesthésie tronculaire à l'épine de Spix, l'anesthésique diffuse dans la loge parotidienne, atteignant le nerf facial."
      },
      {
        "questionText": "La luxation de l'ATM:",
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
        "explanation": "La luxation de l'articulation temporo-mandibulaire (ATM) peut survenir après une ouverture buccale excessive et prolongée. Elle se manifeste par une incapacité à fermer la bouche et se réduit manuellement par la manœuvre de Nelaton."
      },
      {
        "questionText": "L'ouverture accidentelle du sinus maxillaire lors de l'avulsion d'une dent antrale se manifeste cliniquement par",
        "options": [
          "Un œdème de la lèvre supérieure.",
          "Des douleurs sinusiennes homolatérales per-opératoires:",
          "Une hypoesthésie de la région sous-orbitaire.",
          "Un reflux de liquide par le nez"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Un signe classique d'une communication bucco-sinusienne est le passage de liquides (comme de l'eau) du site d'extraction vers le nez. La douleur n'est pas un signe systématique au moment de l'ouverture."
      },
      {
        "questionText": "La fracture de la tubérosité:",
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
        "explanation": "La fracture de la tubérosité maxillaire survient le plus souvent lors de l'extraction de la 3ème molaire supérieure suite à un mouvement mal contrôlé. Un examen radiologique pré-opératoire peut aider à l'anticiper."
      },
      {
        "questionText": "l'effraction accidentelle de sinus maxillaire",
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
        "questionText": "L'alvéolite sèche:",
        "options": [
          "Est une complication immédiate de l'avulsion dentaire",
          "Est la conséquence d'une surinfection de l'alvéole ou du caillot sanguin.",
          "Se caractérise par une alvéole comblée par des détritus d'odeur fétide.",
          "Son traitement est à base de bain de bouche antiseptique"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "L'alvéolite sèche se manifeste par une alvéole vide, avec os à nu, et des débris alimentaires dégageant une odeur fétide. Elle n'est pas une surinfection mais une perte du caillot. Son traitement nécessite un curetage et un pansement."
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
        "questionText": "Une atteinte du nerf lingual:",
        "options": [
          "Survient fréquemment à la suite de l'extraction de la 1 molaire mandibulaire.",
          "Se traduit cliniquement par une paralysie de l'hémi-langue homolatérale.",
          "S'améliore habituellement lentement au cours des six premiers mois post-opératoires.",
          "Toutes les réponses sont fausses"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La récupération d'une lésion du nerf lingual, si elle a lieu, est souvent lente et progressive au cours des premiers mois. Elle cause une atteinte sensitive (pas une paralysie) et survient surtout lors de l'extraction de la 3ème molaire."
      },
      {
        "questionText": "Dans le cas d'une alvéolite sèche :",
        "options": [
          "Le curetage se fera sous anesthésie locale sans vasoconstricteur.",
          "Le curetage se fera sous anesthésie locale avec vasoconstricteur.",
          "Le traitement antibiotique est systématique.",
          "Le curetage permet d'éliminer un tissu de granulation."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Le traitement de l'alvéolite sèche inclut un curetage pour faire saigner l'alvéole. Il se fait sous anesthésie locale sans vasoconstricteur pour ne pas entraver la circulation sanguine. L'alvéolite sèche est caractérisée par l'absence de tissu de granulation."
      },
      {
        "questionText": "Une de ces complications ne peut pas survenir après l'extraction d'une molaire inferieure:",
        "options": [
          "Une communication bucco-sinusienne.",
          "Un refoulement de dent de sagesse dans le plancher buccal.",
          "Une fracture de la table osseuse.",
          "Une hypoesthésie labio-mentonnière par lésion nerveuse."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Une communication bucco-sinusienne ne peut survenir qu'après l'extraction d'une dent maxillaire (supérieure) en contact avec le sinus maxillaire. Les molaires inférieures ne sont pas en rapport avec le sinus."
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
        "questionText": "Les conditions d'ouverture d'un cabinet dentaire sont, un local:",
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
        "explanation": "Un sol imperméable, une aération permanente et la présence d'au moins un lavabo sont des conditions essentielles pour l'hygiène. Un laboratoire dentaire est un équipement facultatif."
      },
      {
        "questionText": "Parmi les conditions d'ouverture d'un cabinet dentaire :",
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
        "explanation": "L'inscription au conseil de l'ordre est une obligation légale pour exercer. Un local bien aéré et éclairé est une condition essentielle. L'équipement radiographique et l'installation au rez-de-chaussée ne sont pas des obligations."
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
        "questionText": "Eclairage:",
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
        "explanation": "Un bon éclairage doit avoir une répartition graduelle. L'asthénie visuelle (fatigue oculaire) est directement liée à un mauvais éclairage. L'utilisation de loupes binoculaires est très utile. La lumière ambiante doit être moins intense que celle du scialytique."
      },
      {
        "questionText": "La posture:",
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
        "questionText": "Les instruments rotatifs qui accompagnent le fauteuil dentaire:",
        "options": [
          "La turbine qui fonctionne à grande vitesse à 160000/420000 tr/m.",
          "La turbine qui fonctionne à faible vitesse.",
          "Le micromoteur qui fonctionne par air comprimé qui tourne à 400000 tr/mn",
          "Le micromoteur qui fonctionne par courant électrique qui tourne à 400000 tr/mn"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les turbines dentaires sont conçues pour fonctionner à de très grandes vitesses (160 000 à 420 000 tr/min). Les micromoteurs fonctionnent à des vitesses bien inférieures (environ 40 000 tr/min)."
      },
      {
        "questionText": "La turbine:",
        "options": [
          "Tourne à une vitesse de 10000 tour/min.",
          "Peut être utilisée aussi bien sur le tissu dentaire que sur l'os.",
          "Est un instrument rotatif.",
          "Il existe des turbines bague rouge, verte et bleue."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La turbine est un instrument rotatif à très haute vitesse (300 000 - 450 000 tr/min), utilisée sur les tissus durs dentaires (émail). Les bagues de couleur sont associées aux contre-angles, pas aux turbines."
      },
      {
        "questionText": "Le fauteuil dentaire est toujours équipé :",
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
        "explanation": "L'aspiration chirurgicale et la pompe à salive sont des équipements standards et essentiels sur tout fauteuil dentaire. Le laser et le piézotome sont des équipements spécialisés et non systématiques."
      },
      {
        "questionText": "Les instruments rotatifs (turbines, contre angle..)",
        "options": [
          "Sont autoclavables.",
          "Ne sont pas autoclavables.",
          "Leur désinfection suffit pour une autre réutilisation.",
          "Leur stérilisation se fait uniquement par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Les instruments rotatifs modernes sont conçus pour être stérilisés à l'autoclave (chaleur humide), qui est la méthode de référence. La simple désinfection est insuffisante."
      },
      {
        "questionText": "La pince gouge :",
        "options": [
          "Est une pince qui sert à suturé la muqueuse",
          "Est une pince qui sert à la dissection",
          "Est une pince qui sert à réséquer l'os alvéolaire",
          "Est une pince qui sert à extraire les racines"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "La pince gouge est un instrument chirurgical spécifiquement utilisé pour réséquer (couper) ou remodeler l'os alvéolaire, notamment après des extractions dentaires."
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
    "title": "Antisepsie, asepsie et stérilisation au cabinet dentaire",
    "subject": "patho",
    "questions": [
      {
        "questionText": "La pré-désinfection :",
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
        "explanation": "La pré-désinfection vise à réduire la charge microbienne et à empêcher le séchage des souillures sur les instruments avant le nettoyage. Elle s'effectue par immersion dans une solution détergente-désinfectante."
      },
      {
        "questionText": "Le cabinet dentaire doit être équipé :",
        "options": [
          "D'un autoclave de classe S.",
          "D'un autoclave de classe B",
          "D'un poupinel",
          "D'un stérilisateur ultrasonique."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "L'autoclave de classe B est la référence pour les cabinets dentaires car il permet de stériliser tous types d'instruments (y compris creux et emballés). Le Poupinel (chaleur sèche) est obsolète et le bac à ultrasons est un nettoyeur, pas un stérilisateur."
      },
      {
        "questionText": "Conditionnement:",
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
        "explanation": "Le conditionnement (emballage) est une étape cruciale qui protège les instruments propres avant la stérilisation et, surtout, maintient leur état stérile après la stérilisation jusqu'à leur utilisation. L'étape finale de la chaîne est le stockage."
      },
      {
        "questionText": "Parmi ces propositions, laquelle(s) est (sont) juste(s):",
        "options": [
          "La pré-désinfection a pour but d'éviter le séchage des souillures sur le matériel",
          "Le nettoyage assure l'élimination de toute forte microbienne",
          "Le traitement requis en zone Test un bionettoyage quotidien",
          "Le conditionnement des dispositifs médicaux n'est nécessaire que si la stérilisation se fait par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La pré-désinfection empêche le séchage des souillures organiques, facilitant le nettoyage. Le nettoyage réduit la saleté mais ne garantit pas l'élimination de tous les microbes. Le conditionnement est toujours nécessaire."
      },
      {
        "questionText": "La gestion des OPCT:",
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
        "explanation": "Les OPCT (Objets Piquants, Coupants, Tranchants) doivent être jetés dans des conteneurs rigides spécifiques et leur gestion répond à une réglementation distincte de celle des autres déchets à risque infectieux (DASRI)."
      },
      {
        "questionText": "Dans un cabinet dentaire.",
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
        "explanation": "La Zone 3 (zone opératoire) nécessite un bionettoyage (nettoyage + désinfection) après chaque intervention. Pour un meilleur contrôle de l'hygiène, une circulation à sens unique du patient est recommandée."
      },
      {
        "questionText": "Les instruments réutilisables dits critiques:",
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
        "questionText": "Le lavage des mains:",
        "options": [
          "Se fait avec une solution hydroalcoolique.",
          "Peut remplacer le port des gants",
          "Se fait après chaque soin.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Le lavage des mains doit être effectué avant et après chaque soin. Il ne remplace jamais le port de gants. L'antisepsie se fait avec une solution hydroalcoolique, mais le lavage simple se fait à l'eau et au savon."
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
        "questionText": "La stérilisation à l'autoclave:",
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
        "explanation": "La stérilisation à l'autoclave utilise la vapeur d'eau saturée sous pression. Le cycle standard atteint 134°C. Elle concerne tous les dispositifs médicaux réutilisables et doit être précédée d'un nettoyage complet."
      },
      {
        "questionText": "Parmi ces propositions, laquelle/lesquelles est/sont juste(s):",
        "options": [
          "La stérilisation des instruments doit se faire à la chaleur humide, en respectant généralement une température de 134°",
          "Le nettoyage assure l'élimination de toute forme microbienne.",
          "Le traitement requis en zone lest un bionettoyage quotidien.",
          "Le conditionnement des dispositifs médicaux n'est nécessaire que si la stérilisation se fait par la chaleur sèche"
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "La stérilisation de référence se fait à la chaleur humide (autoclave) à 134°C. Le nettoyage seul n'élimine pas toutes les formes microbiennes, et le conditionnement est toujours nécessaire."
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
        "questionText": "En pratique quotidienne, les instruments rotatif:",
        "options": [
          "Ne sont pas autoclavables",
          "Leur désinfection suffit pour une autre réutilisation",
          "Leur stérilisation se fait uniquement à la chaleur sèche afin d'assurer leur longévité",
          "Aucune réponse n'est juste"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Aucune des propositions n'est juste. Les instruments rotatifs modernes sont autoclavables (stérilisation à la chaleur humide), leur simple désinfection est insuffisante, et la chaleur sèche n'est plus la méthode de référence."
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
    "title": "Indications et contre-indications des extractions dentaires",
    "subject": "patho",
    "questions": [
      {
        "questionText": "Les contre-indications de l’extraction dentaire sont:",
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
        "explanation": "Une dent de sagesse incluse qui ne cause aucun symptôme et une dent fonctionnelle qui peut être soignée sont des contre-indications à l'extraction. En revanche, la résorption radiculaire et la mobilité d'une dent de lait sont des indications."
      },
      {
        "questionText": "L’avulsion d'une dent de lait est indiquée, si:",
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
        "explanation": "L'extraction d'une dent de lait est indiquée si elle est infectée (provoquant une parulie) ou si elle se trouve sur un trait de fracture. Une simple carie peut être traitée, et si la dent permanente est absente, on cherche à conserver la dent de lait."
      },
      {
        "questionText": "Avant une avulsion dentaire, le risque hémorragique est évalué chez:",
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
        "explanation": "Le risque hémorragique doit être impérativement évalué chez les patients ayant des troubles de la coagulation (hémophiles), des troubles plaquettaires, ou ceux prenant des anticoagulants."
      },
      {
        "questionText": "Parmi les propositions suivantes, quelle(s) est(sont) celle(s) qui est(sont) vraie(s)?",
        "options": [
          "Les cardiopathes à risque infectieux peuvent subir une extraction dentaire avec un INR égale à 2.",
          "Une dent responsable d'un épisode infectieux type cellulite doit être extraite.",
          "Toute dent en malposition doit être extraite",
          "L'avulsion de la dent de sagesse mandibulaire peut être indiquée pour maintenir le résultat esthétique et éviter les récidives."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "L'extraction d'une dent de sagesse peut être indiquée pour des raisons orthodontiques. Une dent causant une cellulite est extraite seulement si elle est irrécupérable. Un INR de 2 est acceptable, mais la plage va jusqu'à 4."
      },
      {
        "questionText": "Par définition, une dent ectopique:",
        "options": [
          "Est située au niveau du maxillaire mais éloignée du site normal",
          "Est située en dehors des maxillaires",
          "Occupe une place normale sur l'arcade mais elle a subi une rotation de 45° à 180° autour de son axe longitudinal",
          "A subi une rotation de 180° autour de Faxe mésio-distal plaçant ainsi la racine en position buccale et la couronne en position apicale."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Une dent ectopique est une dent dont l'éruption se produit dans une position anormale, éloignée de son site habituel, mais toujours au niveau des maxillaires (maxillaire ou mandibule)."
      },
      {
        "questionText": "Parmi les indications d'extraction des dents temporaires :",
        "options": [
          "Dents cariées présentant une pulpite irréversible.",
          "Dents temporaires à l'origine de parulies.",
          "Dents temporaires qui bloquent l'éruption physiologique des dents permanentes.",
          "Toutes les réponses sont justes."
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Toutes ces situations sont des indications valides pour l'extraction des dents temporaires : une pulpite irréversible, une infection (parulie), ou un obstacle à l'éruption de la dent permanente."
      },
      {
        "questionText": "Chez les patients présentant un risque hémorragique, l'extraction dentaire est effectuée:",
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
        "explanation": "Pour une intervention sécuritaire, l'INR doit être dans la fourchette thérapeutique (entre 2 et 4) et le taux de plaquettes doit être supérieur à 100 000/mm³. Un INR > 4 ou un taux de plaquettes < 50 000/mm³ représentent des contre-indications."
      },
      {
        "questionText": "L'antibioprophylaxie lors de l'extraction dentaire chez les cardiopathies à risque d'endocardite infectieuse est:",
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
        "explanation": "Chez les patients à haut risque d'endocardite infectieuse, l'antibioprophylaxie est obligatoire. Le protocole standard est de 2g d'amoxicilline par voie orale, une heure avant l'intervention."
      },
      {
        "questionText": "Parmi les indications locales de l'extraction de la dent de 6 ans, nous citons:",
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
        "explanation": "Une atteinte de la furcation, une lésion péri-apicale compliquée de cellulite ou une fracture radiculaire sont des situations où la dent est généralement considérée comme irrécupérable. Une simple dyschromie (coloration) n'est pas une indication d'extraction."
      },
      {
        "questionText": "Parmi les contre-indications de l'extraction d'une dent de sagesse, nous citons",
        "options": [
          "Evolution avec positionnement correcte de la dent sur l'arcade.",
          "Dent cariée à l'origine d'accidents infectieux récurrents.",
          "Dent située sur un trait de fracture de l'angle mandibulaire,",
          "Dent saine entravant l'éruption physiologique de la dent adjacente."
        ],
        "correctOptionIndexes": [
          0
        ],
        "explanation": "Si une dent de sagesse est bien positionnée sur l'arcade, fonctionnelle et saine, il n'y a aucune raison de l'extraire. C'est une contre-indication. Les autres options sont toutes des indications d'extraction."
      },
      {
        "questionText": "Les extractions dentaires sont contre-indiquées dans les cas suivants:",
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
        "explanation": "Un INR de 4.90 indique un risque hémorragique très élevé, et un diabète mal équilibré augmente les risques d'infection. Ce sont des contre-indications temporaires qui nécessitent une stabilisation avant l'acte. Un INR de 2.30 est acceptable."
      },
      {
        "questionText": "Dans quel cas l'indication de l'avulsion parait indiscutable",
        "options": [
          "A chaque fois qu'il y a un processus caricux",
          "Devant toutes anomalies de position.",
          "Lorsqu'il ya une maladie parodontale avec une perte osseuse et mobilité dentaire",
          "Lors d'une cellulite séreuse"
        ],
        "correctOptionIndexes": [
          2
        ],
        "explanation": "Une maladie parodontale avancée avec perte osseuse importante et mobilité rend le pronostic de la dent très mauvais, l'extraction est alors indiscutable. Les autres situations (carie, malposition) peuvent souvent être traitées de manière conservatrice."
      },
      {
        "questionText": "Une femme enceinte de 04 mois se présente pour l'avulsion de la 36:",
        "options": [
          "Il est préférable d'attendre après l'accouchement pour réaliser l'avulsion",
          "L'avulsion est possible mais avec une prémédication sédative",
          "L'avulsion peut être réalisée mais en évitant l'anesthésie tronculaire",
          "L'avulsion peut être réalisée en toute sécurité"
        ],
        "correctOptionIndexes": [
          3
        ],
        "explanation": "Le deuxième trimestre (4ème mois) est la période la plus sûre pour réaliser des soins dentaires. L'avulsion peut être réalisée en toute sécurité, bien qu'il soit souvent préférable de reporter les actes non urgents après l'accouchement."
      },
      {
        "questionText": "Parmi ces propositions, laquelle est vraie ?",
        "options": [
          "L'avulsion est contre indiquée chez toutes les personnes âgées sans bilan sanguin préalable",
          "Chez un patient sous anticoagulants, il convient d'évaluer le risque hémorragique avant d'intervenir.",
          "L'avulsion dentaire expose à un risque hémorragique tous les patients qui présentent un antécédent d'endocardite d'Osler",
          "L'avulsion dentaire peut être réalisée en toute sécurité chez les patients sous immuno- suppresseurs."
        ],
        "correctOptionIndexes": [
          1
        ],
        "explanation": "Il est absolument crucial d'évaluer le risque hémorragique (via l'INR) chez un patient sous anticoagulants avant toute intervention sanglante. Les autres propositions sont des généralisations incorrectes."
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
  }
];

module.exports = pathoQuizzes;