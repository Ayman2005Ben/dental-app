// quizzes/year-1/ssh.js

const sshQuizzes = [
  {
    title: "Relation soignant-soigné et concepts humains",
    subject: "ssh",
    questions: [
      {
        questionText: "Selon le cours, sur quels deux mots principaux la relation médecin-malade est-elle basée?",
        options: [
          "Guérison et reconnaissance",
          "Information et consentement",
          "Autorité et obéissance",
          "Confiance et dépendance"
        ],
        correctOptionIndexes: [1],
        explanation: "La relation médecin-malade moderne est principalement basée sur les deux maîtres mots que sont l'information fournie au patient et son consentement éclairé aux soins."
      },
      {
        questionText: "Quelle est la principale source du sentiment d'infériorité du malade face au médecin ?",
        options: [
          "L'état de santé du médecin",
          "Le coût des soins",
          "La dépendance due au savoir et au pouvoir du médecin",
          "L'architecture de l'hôpital"
        ],
        correctOptionIndexes: [2],
        explanation: "Le malade se sent souvent en position d'infériorité en raison de sa dépendance vis-à-vis du médecin, qui détient un pouvoir lié à ses connaissances, son jargon et sa capacité à agir sur sa vie privée et sa santé."
      },
      {
        questionText: "Quels types de demandes le malade peut-il adresser implicitement à son médecin ?",
        options: [
          "Une prescription de médicaments",
          "Un certificat médical",
          "Des compétences techniques précises",
          "De l'écoute et de la disponibilité"
        ],
        correctOptionIndexes: [3],
        explanation: "Les demandes du malade peuvent être explicites, comme les compétences techniques, ou implicites. citation: Ces dernières font appel aux qualités humaines du médecin, telles que l'écoute et la disponibilité."
      },
      {
        questionText: "Comment était qualifiée la relation médecin-malade dans l'antiquité selon le modèle hippocratique ?",
        options: [
          "Une relation contractuelle",
          "Une relation d'égal à égal",
          "Une relation où le malade est soumis et obéissant",
          "Une relation basée sur le consentement éclairé"
        ],
        correctOptionIndexes: [2],
        explanation: "Dans l'antiquité, le modèle hippocratique décrivait une relation où le malade était considéré comme soumis et obéissant, remettant sa confiance totale au médecin qui ordonnait les soins pour son bien."
      },
      {
        questionText: "Quelle est la principale évolution de la relation médecin-malade aujourd'hui par rapport au modèle antique ?",
        options: [
          "Elle est devenue plus autoritaire de la part du médecin.",
          "Elle a évolué vers une relation davantage contractuelle avec un patient actif.",
          "Elle n'implique plus la parole et les échanges.",
          "Le médecin n'a plus besoin de la reconnaissance du malade."
        ],
        correctOptionIndexes: [1],
        explanation: "Aujourd'hui, la relation a évolué d'un modèle paternaliste vers une relation davantage contractuelle. citation: Un contrat de soins est établi avec un patient devenu actif et détenteur d'une partie de l'information médicale."
      },
      {
        questionText: "Dans le modèle psychanalytique, que désigne le concept de 'transfert' ?",
        options: [
          "Les réactions affectives du médecin envers son patient.",
          "Le transfert du dossier médical d'un hôpital à un autre.",
          "Les réactions affectives, conscientes et inconscientes, du patient envers son médecin.",
          "Le transfert des connaissances du médecin vers le patient."
        ],
        correctOptionIndexes: [2],
        explanation: "La théorie psychanalytique définit le 'transfert' comme l'ensemble des réactions affectives, à la fois conscientes et inconscientes, que le patient éprouve à l'égard de son médecin."
      },
      {
        questionText: "Que désigne le concept de 'contre-transfert' dans la relation médecin-malade ?",
        options: [
          "Le refus du patient de suivre le traitement.",
          "Les réactions affectives du patient envers le médecin.",
          "Les réactions affectives, conscientes et inconscientes, du médecin vis-à-vis de son malade.",
          "L'avis d'un second médecin."
        ],
        correctOptionIndexes: [2],
        explanation: "Le 'contre-transfert' représente les réactions affectives, conscientes et inconscientes, que le médecin ressent envers son patient, influencées par sa propre personnalité et son histoire personnelle."
      },
      {
        questionText: "Quel est le risque principal d'un 'contre-transfert excessivement positif' ?",
        options: [
          "Une froideur excessive dans la relation.",
          "Une agressivité envers le malade.",
          "Une identification massive au malade et une perte d'objectivité.",
          "Un échec de la relation thérapeutique."
        ],
        correctOptionIndexes: [2],
        explanation: "Un contre-transfert excessivement positif peut conduire le médecin à une identification massive au malade, ce qui risque de lui faire perdre l'objectivité nécessaire à la prise de décisions thérapeutiques."
      },
      {
        questionText: "Quel modèle de relation médecin-malade est décrit comme le plus ancien et où le patient-objet est écarté de la décision médicale ?",
        options: [
          "Le modèle Empathique",
          "Le modèle Scientifique",
          "Le modèle Paternaliste",
          "Le modèle Autonome"
        ],
        correctOptionIndexes: [2],
        explanation: "Le modèle Paternaliste est le plus ancien. citation: Dans ce modèle, le patient est considéré comme un objet de soins, écarté de la décision médicale et n'ayant pas besoin d'une information poussée, ce qui le place en situation de dépendance."
      },
      {
        questionText: "Un médecin qui écarte tous les éléments psychologiques pour ne retenir que les données objectives de la maladie pratique quel type de relation ?",
        options: [
          "Le modèle Affectif",
          "Le modèle Scientifique",
          "Le modèle Autoritariste",
          "Le modèle Empathique"
        ],
        correctOptionIndexes: [1],
        explanation: "Dans le modèle 'Scientifique', le médecin se concentre uniquement sur les éléments objectifs et scientifiques de la maladie, écartant les aspects psychologiques. citation: Cela peut garantir la qualité technique des soins mais déçoit le patient sur le plan humain."
      },
      {
        questionText: "Quel modèle de relation se situe à l'extrême inverse du modèle paternaliste et représente une forme d'autoritarisme de la part du patient ?",
        options: [
          "Le modèle Américain (judiciaire)",
          "Le modèle Empathique",
          "Le modèle Scientifique",
          "Le modèle Autonome"
        ],
        correctOptionIndexes: [3],
        explanation: "Le modèle 'Autonome' se situe à l'extrême inverse du modèle paternaliste. citation: Il représente une forme d'autoritarisme du patient, où l'indépendance du médecin doit équilibrer le libre arbitre du malade."
      },
      {
        questionText: "Quel modèle de relation est considéré comme l'idéal, où médecin et malade interviennent à parts égales dans la construction d'une thérapeutique efficace ?",
        options: [
          "Le modèle Paternaliste",
          "Le modèle Autoritariste",
          "Le modèle Empathique",
          "Le modèle Affectif"
        ],
        correctOptionIndexes: [2],
        explanation: "Le modèle 'Empathique' représente le juste milieu et l'idéal. citation: Chaque acteur a sa place définie (le médecin comme sachant, le malade comme souffrant) et tous deux interviennent à parts égales pour une thérapeutique efficace et adaptée."
      },
      {
        questionText: "Désigner un patient par le nom de sa maladie ou entrer brutalement dans sa chambre sont des caractéristiques de quel modèle de relation ?",
        options: [
          "Le modèle Scientifique",
          "Le modèle Autoritariste",
          "Le modèle Autonome",
          "Le modèle Affectif"
        ],
        correctOptionIndexes: [1],
        explanation: "Ces pratiques, qui représentent une effraction de la sphère privée du patient, sont caractéristiques du modèle 'Autoritariste'. citation: Ce modèle est souvent le fait des structures d'hospitalisation."
      },
      {
        questionText: "Comment la théorie psychanalytique qualifie-t-elle une relation médecin-malade de qualité ?",
        options: [
          "Par l'absence de transfert.",
          "Par un contre-transfert négatif.",
          "Par un contre-transfert positif caractérisé par l'empathie.",
          "Par une absence totale de contre-transfert."
        ],
        correctOptionIndexes: [2],
        explanation: "Un contre-transfert positif du médecin, caractérisé par l'empathie, est ce qui engendre une relation de qualité et une action thérapeutique efficace."
      },
      {
        questionText: "Lequel des éléments suivants n'est PAS une source de 'pouvoir' du médecin sur le malade ?",
        options: [
          "Ses connaissances médicales.",
          "L'utilisation d'un jargon médical.",
          "Sa capacité à délivrer des certificats.",
          "Ses bénéfices financiers."
        ],
        correctOptionIndexes: [3],
        explanation: "Le pouvoir du médecin est lié à son savoir, son langage technique, son rôle administratif (certificats) et sa connaissance de l'intimité du patient. Les bénéfices financiers sont une conséquence de la relation, pas une source de pouvoir direct sur le patient dans ce contexte."
      },
      {
        questionText: "Dans la relation 'normale', que se passe-t-il si un échec simple survient ?",
        options: [
          "Un contentieux judiciaire est immédiatement engagé.",
          "Le médecin refuse de voir d'autres patients.",
          "Le malade change de médecin.",
          "Le médecin et le malade deviennent amis."
        ],
        correctOptionIndexes: [2],
        explanation: "Un échec simple de la relation, qui est qualifié d'anormal, conduit généralement le malade à chercher un autre médecin avec qui il se sentira plus en confiance."
      },
      {
        questionText: "Quel modèle de relation est caractérisé par une transparence absolue et des contrats formalisés, réduisant le soin à un objet de consommation ?",
        options: [
          "Le modèle Paternaliste",
          "Le modèle Américain (judiciaire)",
          "Le modèle Empathique",
          "Le modèle Scientifique"
        ],
        correctOptionIndexes: [1],
        explanation: "Le modèle 'Américain' ou judiciaire est issu du modèle autonome et se caractérise par une transparence absolue, des contrats, et une relation très encadrée juridiquement, ce qui a pour effet de détruire la relation de confiance en la réduisant à un avis technique."
      },
      {
        questionText: "Quelle est la principale raison de la mutation actuelle de la relation médecin-malade ?",
        options: [
          "La diminution des connaissances médicales.",
          "La mise en avant des droits de l'individu et le passage vers un modèle d'autonomie.",
          "Le refus des médecins de communiquer.",
          "L'augmentation du nombre de maladies."
        ],
        correctOptionIndexes: [1],
        explanation: "La relation est en pleine mutation principalement à cause de la mise en avant des droits de l'individu. citation: Cela pousse à faire évoluer la relation d'un modèle paternaliste vers un modèle d'autonomie, centré sur l'information et le consentement éclairé du patient."
      },
      {
        questionText: "Qu'est-ce qui caractérise l'inégalité fondamentale de la relation médecin-malade ?",
        options: [
          "Le médecin est toujours plus âgé que le patient.",
          "La relation part d'une demande d'un sujet souffrant adressée à un sujet disposant d'un savoir.",
          "Les consultations se déroulent toujours à l'hôpital.",
          "Le patient paie toujours pour les soins."
        ],
        correctOptionIndexes: [1],
        explanation: "La relation est qualifiée d'inégale car son point de départ est une demande d'une personne en état de souffrance et de vulnérabilité, adressée à une personne qui dispose d'un savoir et d'un pouvoir pour l'aider."
      },
      {
        questionText: "La dérive du modèle 'Empathique' peut mener à quel autre modèle de relation ?",
        options: [
          "Le modèle Scientifique",
          "Le modèle Autoritariste",
          "Le modèle Paternaliste",
          "Le modèle Affectif ou Sympathique"
        ],
        correctOptionIndexes: [3],
        explanation: "Le modèle 'Affectif' ou 'Sympathique' est considéré comme la dérive du modèle empathique. citation: Il y a une limite étroite entre l'empathie (comprendre l'autre) et l'affectivité (ressentir avec l'autre), cette dernière pouvant nuire à l'objectivité."
      },
      {
        questionText: "Selon le cours, qu'est-ce que le 'malade idéal' pour un médecin ?",
        options: [
          "Celui qui ne pose aucune question.",
          "Celui qui guérit le plus rapidement.",
          "Celui qui permettra au mieux de satisfaire sa vocation.",
          "Celui qui a les moyens financiers."
        ],
        correctOptionIndexes: [2],
        explanation: "Dans le cadre de l'idéalisation de la relation, le malade idéal pour un médecin est celui qui lui permet de satisfaire au mieux sa vocation de soignant."
      },
      {
        questionText: "Un contentieux judiciaire dans la relation médecin-malade est une conséquence de quel type d'échec ?",
        options: [
          "Un échec simple",
          "Un échec conflictuel",
          "Une relation normale",
          "Une relation idéale"
        ],
        correctOptionIndexes: [1],
        explanation: "Un échec conflictuel peut engendrer soit un contentieux humain simple, soit un contentieux judiciaire, qui est lourd pour les deux parties."
      },
      {
        questionText: "Pourquoi l'approche purement scientifique est-elle jugée insuffisante dans la relation de soin ?",
        options: [
          "Parce qu'elle est techniquement moins performante.",
          "Parce qu'elle est plus coûteuse.",
          "Parce qu'elle est insuffisante pour apporter le soulagement et la satisfaction espérés par le malade.",
          "Parce qu'elle est interdite par la déontologie."
        ],
        correctOptionIndexes: [2],
        explanation: "Même si elle est garante de la qualité technique, l'approche purement scientifique est insuffisante car elle ne répond pas aux besoins humains du patient, qui peut ressentir un sentiment de rejet ou d'abandon, le laissant déçu malgré la compétence technique."
      },
      {
        questionText: "Quelle est la principale différence entre la dépendance du malade et la dépendance du médecin ?",
        options: [
          "La dépendance du médecin est uniquement financière.",
          "La dépendance du malade est uniquement psychologique.",
          "La dépendance du malade est subie (due à la souffrance), tandis que celle du médecin est liée à sa profession (satisfaction, frustration).",
          "Il n'y a aucune différence."
        ],
        correctOptionIndexes: [2],
        explanation: "La dépendance du malade est une conséquence de son état de souffrance qui le met en position d'infériorité. citation: La dépendance du médecin est liée à l'exercice de sa profession : le malade est une source de satisfactions ou de frustrations professionnelles."
      },
      {
        questionText: "L'empathie, caractéristique d'un contre-transfert positif, est définie comme :",
        options: [
          "Ressentir exactement la même chose que le patient.",
          "S'identifier au patient tout en gardant une distance objective.",
          "Donner des ordres stricts au patient pour son bien.",
          "Ne montrer aucune émotion face au patient."
        ],
        correctOptionIndexes: [1],
        explanation: "L'empathie est la capacité du médecin à s'identifier au patient pour comprendre sa situation, tout en étant capable de garder la distance nécessaire pour maintenir son objectivité et prendre les bonnes décisions thérapeutiques."
      },
      {
        questionText: "Quelle situation peut conduire à une 'froideur excessive' dans la relation de soin, selon le modèle psychanalytique ?",
        options: [
          "Un contre-transfert excessivement positif.",
          "Un contre-transfert positif normal.",
          "Une absence de contre-transfert.",
          "Un transfert négatif du patient."
        ],
        correctOptionIndexes: [2],
        explanation: "Une absence de contre-transfert de la part du médecin peut conduire à une froideur excessive dans la relation, ce qui peut être aussi néfaste qu'un contre-transfert négatif."
      },
      {
        questionText: "Dans le modèle 'Autoritariste', l'utilisation du 3ème pronom personnel ('il' ou 'elle') pour parler d'un patient présent est un exemple de :",
        options: [
          "Respect de la confidentialité.",
          "Déshumanisation et non-respect de la personne.",
          "Communication empathique.",
          "Procédure standard d'hospitalisation."
        ],
        correctOptionIndexes: [1],
        explanation: "Le fait de désigner le patient par la troisième personne ou par le nom de sa maladie sont des exemples de pratiques déshumanisantes caractéristiques du modèle autoritariste, qui ne devraient plus avoir cours."
      },
      {
        questionText: "Sur quoi est fondée la relation de confiance classique entre un médecin et son malade ?",
        options: [
          "Sur une égalité parfaite de savoir.",
          "Sur une relation non égalitaire où le patient dépendant fait confiance au médecin.",
          "Sur un contrat écrit et détaillé.",
          "Uniquement sur les liens familiaux."
        ],
        correctOptionIndexes: [1],
        explanation: "La relation classique est décrite comme une relation de confiance, mais qui est fondamentalement non égalitaire et asymétrique, car la demande et la souffrance du patient le rendent passif et dépendant."
      },
      {
        questionText: "Quel est le principal moteur du modèle 'Américain' ou judiciaire de la relation médecin-malade ?",
        options: [
          "Le désir de créer des liens affectifs forts.",
          "La volonté de faire progresser la science médicale.",
          "Le besoin du médecin de se protéger face à la croissance des recours judiciaires.",
          "La tradition hippocratique."
        ],
        correctOptionIndexes: [2],
        explanation: "Ce modèle s'est développé principalement en réponse au besoin des médecins américains de protéger leurs intérêts face à l'augmentation des poursuites judiciaires, ce qui a conduit à une formalisation excessive de la relation."
      },
      {
        questionText: "Laquelle de ces affirmations décrit le mieux la 'relation d'idéalisation' ?",
        options: [
          "Le médecin et le patient ont des attentes réalistes l'un envers l'autre.",
          "La relation est purement technique et scientifique.",
          "Le patient attend un médecin à la hauteur de toutes ses espérances, et le médecin attend un malade qui satisfait sa vocation.",
          "La relation est vouée à l'échec dès le début."
        ],
        correctOptionIndexes: [2],
        explanation: "La relation peut être qualifiée d'idéalisation car chaque partie a une vision idéale de l'autre : le patient espère un médecin parfait, et le médecin espère un patient qui lui permette de réaliser sa vocation de soignant."
      }
    ]
  },
  {
    title: "Facteurs influençant la santé et la biodiversité",
    subject: "ssh",
    questions: [
      {
        questionText: "Quelle est la définition de la biodiversité selon le cours ?",
        options: [
          "Uniquement la diversité des espèces animales.",
          "La diversité des organismes vivants, regroupant la diversité des espèces, la diversité au sein d'une même espèce, et les écosystèmes.",
          "Le nombre total d'écosystèmes sur Terre.",
          "La capacité de la nature à se renouveler sans intervention humaine."
        ],
        correctOptionIndexes: [1],
        explanation: "La biodiversité ou diversité biologique est définie comme la diversité des organismes vivants. Elle regroupe la diversité des espèces, la diversité génétique au sein d'une même espèce, et la diversité des écosystèmes."
      },
      {
        questionText: "Quels sont les trois niveaux de la biodiversité décrits dans le cours ?",
        options: [
          "Génétique, spécifique et écosystémique",
          "Animale, végétale et microbienne",
          "Terrestre, marine et aérienne",
          "Locale, régionale et mondiale"
        ],
        correctOptionIndexes: [0],
        explanation: "Le cours définit trois niveaux de biodiversité : la diversité génétique (variabilité des gènes au sein d'une espèce), la diversité spécifique (diversité des espèces), et la diversité écosystémique (diversité des écosystèmes)."
      },
      {
        questionText: "Selon le cours, quelle est la principale raison pour laquelle l'homme transforme son environnement ?",
        options: [
          "Pour des raisons purement esthétiques.",
          "Pour répondre à ses besoins fondamentaux (se nourrir, se loger, se déplacer, etc.).",
          "Pour réduire le nombre d'espèces existantes.",
          "Pour étudier les effets de la pollution."
        ],
        correctOptionIndexes: [1],
        explanation: "L'homme, comme tous les êtres vivants, a des besoins pour survivre : se nourrir, se loger, se chauffer, se déplacer. citation: Pour satisfaire ces besoins, il met en place des projets qui exploitent les ressources et transforment l'environnement."
      },
      {
        questionText: "Laquelle de ces activités humaines n'est PAS mentionnée comme une influence directe sur la biodiversité ?",
        options: [
          "La déforestation",
          "L'agriculture intensive",
          "La pêche intensive",
          "La reforestation contrôlée"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cours mentionne la pêche intensive, la déforestation et l'agriculture intensive comme des actions humaines ayant des conséquences négatives sur la biodiversité. La reforestation contrôlée n'est pas citée comme une influence négative."
      },
      {
        questionText: "Qu'est-ce que la 'diversité spécifique' ?",
        options: [
          "La variabilité des gènes au sein d'une même espèce.",
          "La diversité des espèces.",
          "La diversité des écosystèmes.",
          "La diversité des couleurs de pelage chez les ours."
        ],
        correctOptionIndexes: [1],
        explanation: "La diversité spécifique correspond à la diversité des espèces présentes sur Terre. citation: Plus de 1 560 000 espèces ont été décrites."
      },
      {
        questionText: "Quel est l'impact de l'agriculture intensive mentionné dans le cours ?",
        options: [
          "Elle augmente la diversité génétique des cultures.",
          "Elle a un aspect négatif sur l'environnement à cause des engrais et pesticides.",
          "Elle n'utilise que des ressources renouvelables.",
          "Elle favorise la création de nouveaux écosystèmes."
        ],
        correctOptionIndexes: [1],
        explanation: "L'agriculture intensive utilise des engrais, des pesticides et des herbicides pour augmenter la production, mais cela compose un aspect négatif pour l'environnement."
      },
      {
        questionText: "Qu'est-ce que la 'diversité écosystémique' ?",
        options: [
          "La diversité des gènes chez les humains.",
          "Le nombre total d'animaux dans une forêt.",
          "La diversité des écosystèmes présents sur Terre, comme les forêts, les déserts ou les rivières.",
          "La variation de couleur au sein de l'espèce de l'ours."
        ],
        correctOptionIndexes: [2],
        explanation: "La diversité écosystémique correspond à la diversité des écosystèmes sur Terre, tels que les forêts tropicales, les déserts, les zones humides, les rivières et les montagnes."
      },
      {
        questionText: "Selon le cours, quelle est une conséquence directe de l'effet de serre provoqué par l'homme ?",
        options: [
          "Une augmentation de la biodiversité marine.",
          "La modification des températures et des climats (réchauffement climatique).",
          "La purification de l'air et de l'eau.",
          "La diminution du niveau des eaux."
        ],
        correctOptionIndexes: [1],
        explanation: "Les activités industrielles, urbaines et agricoles de l'homme contribuent à l'effet de serre, ce qui modifie les températures et les climats, avec comme exemple le réchauffement climatique."
      },
      {
        questionText: "Laquelle de ces affirmations sur la dynamique naturelle de la biodiversité est VRAIE ?",
        options: [
          "Les espèces et les écosystèmes sont stables et ne changent jamais.",
          "La biodiversité est capable de se renouveler toute seule, avec des espèces qui apparaissent et d'autres qui disparaissent.",
          "Seules les activités humaines peuvent faire disparaître une espèce.",
          "Les écosystèmes ne se renouvellent jamais une fois qu'ils ont disparu."
        ],
        correctOptionIndexes: [1],
        explanation: "Les études montrent que les espèces et les écosystèmes naissent, se développent et disparaissent naturellement. citation: La biodiversité est capable de se renouveler d'elle-même au cours du temps."
      },
      {
        questionText: "Qu'est-ce que la 'diversité génétique' ?",
        options: [
          "Le nombre d'espèces différentes dans un écosystème.",
          "La variabilité des gènes au sein d’une même espèce ou d’une population.",
          "La diversité des climats sur la planète.",
          "Le nombre total d'êtres vivants sur Terre."
        ],
        correctOptionIndexes: [1],
        explanation: "La diversité génétique se définit par la variabilité des gènes au sein d’une même espèce ou d’une population, ce qui explique par exemple les différentes couleurs de peau ou de pelage."
      },
      {
        questionText: "Quelle est l'une des conséquences de l'influence humaine sur la biodiversité listée dans le cours ?",
        options: [
          "La création d'équilibres naturels plus stables.",
          "L'augmentation du nombre total d'espèces.",
          "La transformation des paysages et la disparition d'espèces.",
          "La diminution de la pollution atmosphérique."
        ],
        correctOptionIndexes: [2],
        explanation: "L'influence de l'homme a plusieurs conséquences négatives, incluant la transformation des paysages et la disparition d'espèces."
      },
      {
        questionText: "Pourquoi un écosystème est-il considéré comme fragile ?",
        options: [
          "Parce qu'il ne contient qu'une seule espèce.",
          "Parce qu'il a besoin de tous ses composants pour fonctionner correctement.",
          "Parce qu'il est insensible aux activités humaines.",
          "Parce qu'il peut se déplacer facilement."
        ],
        correctOptionIndexes: [1],
        explanation: "Un écosystème est fragile car il a besoin de tous ses composants (vivants et non-vivants) qui sont en équilibre pour assurer son propre fonctionnement. citation: L'action humaine néglige souvent ces équilibres fragiles."
      },
      {
        questionText: "L'introduction de nouvelles espèces par l'homme dans un milieu est présentée comme une action :",
        options: [
          "Bénéfique qui augmente la biodiversité locale.",
          "Qui perturbe les milieux de vie existants.",
          "Sans aucune conséquence sur l'écosystème.",
          "Qui aide à la préservation des espèces menacées."
        ],
        correctOptionIndexes: [1],
        explanation: "Le cours mentionne que 'L’Homme a introduit des espèces qui perturbent les milieux de vie', ce qui est une influence négative sur la biodiversité."
      },
      {
        questionText: "Quel est l'enjeu principal que l'homme place sur la biodiversité ?",
        options: [
          "Un enjeu purement scientifique et de recherche.",
          "Un enjeu de préservation sans aucune exploitation.",
          "Un enjeu économique, social et culturel pour satisfaire ses besoins.",
          "Un enjeu de destruction volontaire."
        ],
        correctOptionIndexes: [2],
        explanation: "L'homme place la biodiversité comme un enjeu économique, social et culturel. citation: Il exploite les ressources pour satisfaire ses besoins, ce qui influence directement la biodiversité."
      },
      {
        questionText: "Quel exemple est donné pour illustrer la 'diversité d'une même espèce' ?",
        options: [
          "La différence entre une forêt et un désert.",
          "La différence entre un insecte et un mammifère.",
          "Les différentes espèces d'ours (polaire, brun, etc.).",
          "Le nombre total d'arbres dans le monde."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cours prend l'exemple de l'espèce de l'ours pour illustrer la diversité au sein d'une même espèce, montrant des variations de couleur, de pelage, etc.."
      },
      {
        questionText: "Laquelle de ces affirmations est FAUSSE concernant la biodiversité ?",
        options: [
          "Elle est influencée par les activités humaines.",
          "Elle ne concerne que les animaux visibles à l'œil nu.",
          "Elle inclut la diversité génétique.",
          "Elle est la base du fonctionnement des écosystèmes."
        ],
        correctOptionIndexes: [1],
        explanation: "La biodiversité inclut tous les organismes vivants, y compris les plantes, les champignons, les bactéries et autres micro-organismes, et pas seulement les animaux visibles. citation: Les autres affirmations sont vraies."
      },
      {
        questionText: "Quelle est la conclusion finale du cours concernant le futur de la biodiversité ?",
        options: [
          "Il est totalement indépendant des actions humaines.",
          "Il est entre les mains des hommes.",
          "Il est destiné à s'améliorer naturellement.",
          "Il ne concerne que les scientifiques."
        ],
        correctOptionIndexes: [1],
        explanation: "La conclusion du cours est claire : 'En définitive, le futur de la biodiversité est entre les mains des hommes'."
      },
      {
        questionText: "L'exploitation de la mer par la pêche intensive a pour conséquence :",
        options: [
          "L'augmentation des populations de poissons.",
          "L'amélioration de la santé des océans.",
          "La menace sur les espèces marines et l'épuisement des ressources.",
          "La création de nouveaux habitats marins."
        ],
        correctOptionIndexes: [2],
        explanation: "La pêche intensive influence les espèces marines en les menaçant et épuise les ressources de biodiversité des mers et des océans."
      },
      {
        questionText: "La déforestation est une action humaine menée dans le but de :",
        options: [
          "Planter plus d'arbres.",
          "Créer des parcs nationaux.",
          "Augmenter la couverture forestière.",
          "Obtenir des matières comme le bois et le papier."
        ],
        correctOptionIndexes: [3],
        explanation: "Le cours définit la déforestation comme 'L’action du déboisement des arbres d’une forêt afin d’avoir des matières comme le bois, le papier…etc.'."
      },
      {
        questionText: "Quel est le résultat final des activités humaines sur la biodiversité, selon le diagramme ?",
        options: [
          "La création de nouvelles espèces.",
          "L'augmentation des ressources naturelles.",
          "Les changements climatiques et la perte de diversité biologique.",
          "L'amélioration des cycles biogéochimiques."
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagramme à la fin du cours montre que les activités humaines mènent à deux conséquences finales principales : les changements climatiques et la perte de diversité biologique (extinctions, perte d'écosystème)."
      },
      {
        questionText: "L'un des objectifs du cours est de :",
        options: [
          "Promouvoir la déforestation.",
          "Évaluer les conséquences des activités humaines sur la biodiversité.",
          "Encourager l'agriculture intensive.",
          "Nier le changement climatique."
        ],
        correctOptionIndexes: [1],
        explanation: "L'un des deux objectifs listés au début du cours est d' 'Evaluer les conséquences des activités humaines sur la biodiversité'."
      },
      {
        questionText: "Comment la diversité d'une même espèce peut-elle être conditionnée ?",
        options: [
          "Uniquement par la couleur de la peau.",
          "Uniquement par la génétique pure.",
          "Par les milieux habités (écosystèmes).",
          "Elle n'est jamais conditionnée."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cours précise que 'la diversité d’une même espèce peut être conditionnée par les milieux habités'. Par exemple, un ours polaire est adapté à un milieu différent de celui d'un ours brun."
      },
      {
        questionText: "Quelle est l'affirmation du cours sur l'être humain en tant qu'espèce ?",
        options: [
          "Il est la seule espèce qui n'a pas besoin de la biodiversité.",
          "Il est une espèce animale qui ira peut-être jusqu'à sa propre autodestruction.",
          "Il est la seule espèce capable de restaurer la biodiversité.",
          "Il n'est pas considéré comme une espèce animale."
        ],
        correctOptionIndexes: [1],
        explanation: "La conclusion du cours suggère que 'l’être humain est une espèce animale qui ira peut-être jusqu'à sa propre autodestruction' en raison de son impact négatif sur la biodiversité dont il dépend."
      },
      {
        questionText: "Quelle action est proposée en conclusion pour préserver la nature ?",
        options: [
          "Arrêter toute activité humaine.",
          "Laisser la nature se renouveler seule.",
          "Mettre en place des projets de gestion mondiale et de prise de conscience.",
          "Se concentrer uniquement sur la diversité génétique."
        ],
        correctOptionIndexes: [2],
        explanation: "La conclusion propose que pour préserver la nature, 'on doit mettre en place des projets de gestion mondiale et de prise en conscience pour tout le monde avec des organismes nationaux et internationaux'."
      },
      {
        questionText: "Quel est l'impact de l'aménagement par l'Homme sur le niveau des eaux ?",
        options: [
          "Une diminution du niveau des eaux.",
          "Aucun impact.",
          "Une montée du niveau des eaux.",
          "Une stabilisation parfaite du niveau des eaux."
        ],
        correctOptionIndexes: [2],
        explanation: "La liste des impacts de l'aménagement par l'homme inclut la 'Montée du niveau des eaux', une conséquence du réchauffement climatique et de la fonte des glaces."
      },
      {
        questionText: "Le diagramme montre que la 'Modification des terres' est une conséquence de quelles activités humaines ?",
        options: [
          "Énergie et commerce uniquement.",
          "Agriculture, industrie et commerce.",
          "Agriculture uniquement.",
          "Industrie et énergie."
        ],
        correctOptionIndexes: [2],
        explanation: "Selon le diagramme, une flèche part de 'agriculture' pour pointer vers 'Modification des terres', qui inclut la déforestation et le pâturage."
      },
      {
        questionText: "Les 'Introductions et extinction d’espèces' sont une conséquence de quelles activités humaines selon le diagramme ?",
        options: [
          "Agriculture et industrie.",
          "Énergie et commerce.",
          "Agriculture, commerce et autres (chasse, pêche).",
          "Industrie et énergie."
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagramme montre des flèches partant de 'agriculture' et 'commerce' vers 'Introductions et extinction d’espèces'. citation: La case elle-même mentionne 'invasions biologiques, chasse, pêche, cueillette'."
      },
      {
        questionText: "Quel cycle biogéochimique est directement affecté par l'industrie et l'énergie selon le diagramme ?",
        options: [
          "Le cycle de l'eau uniquement.",
          "Les cycles du carbone, de l'azote, de l'eau, etc.",
          "Le cycle lunaire.",
          "Le cycle des saisons."
        ],
        correctOptionIndexes: [1],
        explanation: "Le diagramme montre que les activités humaines comme l'industrie et l'énergie impactent les 'Cycles biogéochimiques', qui incluent le carbone, l'azote, l'eau, et d'autres éléments chimiques."
      },
      {
        questionText: "Quelle est la relation entre les 'Changements climatiques' et la 'Perte de diversité biologique' selon le diagramme ?",
        options: [
          "Ils sont totalement indépendants l'un de l'autre.",
          "La perte de diversité cause les changements climatiques.",
          "Les changements climatiques contribuent à la perte de diversité biologique.",
          "Il n'y a aucune relation."
        ],
        correctOptionIndexes: [2],
        explanation: "Le diagramme montre une flèche allant de la case 'Changements climatiques' à la case 'Perte de diversité biologique', indiquant que les changements climatiques sont une des causes de la perte de biodiversité."
      },
      {
        questionText: "L'activité humaine globale est initialement déterminée par quels deux facteurs selon le diagramme ?",
        options: [
          "Agriculture et industrie.",
          "Taille de la population humaine et utilisation des ressources.",
          "Changements climatiques et perte de diversité.",
          "Énergie et commerce."
        ],
        correctOptionIndexes: [1],
        explanation: "Tout en haut du diagramme, la 'Population humaine', caractérisée par sa 'taille' et son 'utilisation des ressources', est montrée comme le point de départ qui mène aux 'Activités humaines'."
      }
    ]
  },
  {
    title: "Santé et société",
    subject: "ssh",
    questions: [
      {
        questionText: "Selon la constitution de l'OMS de 1946, comment la santé est-elle définie ?",
        options: [
          "Une absence de maladie ou d'infirmité.",
          "Un état de bien-être physique et mental uniquement.",
          "Un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie.",
          "La capacité de l'individu à résister aux épidémies."
        ],
        correctOptionIndexes: [2],
        explanation: "La définition de l'OMS de 1946 est large et positive : « La santé est un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d'infirmité »."
      },
      {
        questionText: "Quel est l'outil scientifique principal utilisé par la santé publique ?",
        options: [
          "La chirurgie expérimentale",
          "La psychologie clinique",
          "La sociologie",
          "L'épidémiologie"
        ],
        correctOptionIndexes: [3],
        explanation: "L'épidémiologie est définie comme la science qui représente le principal outil utilisé par la santé publique pour étudier la fréquence, la répartition et les déterminants des problèmes de santé dans les populations."
      },
      {
        questionText: "Laquelle de ces branches de l'épidémiologie a pour objectif d'étudier la fréquence et la répartition des maladies selon les caractéristiques de personnes, de temps et de lieux ?",
        options: [
          "L'épidémiologie analytique",
          "L'épidémiologie évaluative",
          "L'épidémiologie descriptive",
          "L'épidémiologie clinique"
        ],
        correctOptionIndexes: [2],
        explanation: "L'épidémiologie descriptive a pour objectif d'étudier la fréquence et la répartition des problèmes de santé en répondant aux questions 'qui ?', 'quand ?' et 'où ?'."
      },
      {
        questionText: "Une enquête qui suit deux groupes (l'un exposé à un facteur de risque, l'autre non) pour observer l'apparition d'une maladie est une enquête de type :",
        options: [
          "Cas-témoin",
          "Descriptive",
          "Transversale",
          "Exposés non exposés ou de cohorte"
        ],
        correctOptionIndexes: [3],
        explanation: "L'enquête 'exposés non exposés' ou 'de cohorte' est une étude analytique qui suit des groupes définis par leur exposition à un facteur de risque pour comparer la survenue de la maladie."
      },
      {
        questionText: "Que décrit la 'transition épidémiologique' théorisée par Abdel Omran ?",
        options: [
          "Le passage d'une population jeune à une population âgée.",
          "L'évolution de l'espérance de vie liée à la substitution progressive des maladies chroniques aux maladies infectieuses.",
          "L'augmentation des budgets alloués à la santé.",
          "La découverte de nouveaux vaccins."
        ],
        correctOptionIndexes: [1],
        explanation: "La théorie de la 'transition épidémiologique' explique l'amélioration de l'espérance de vie par le passage d'une ère où les maladies infectieuses prédominent à une ère où ce sont les maladies dégénératives et chroniques qui sont les principales causes de mortalité."
      },
      {
        questionText: "Selon Abdel Omran, quelle phase est caractérisée par une espérance de vie inférieure à 30 ans et la prédominance des épidémies et famines ?",
        options: [
          "L'âge des maladies dégénératives et chroniques",
          "L'âge du recul des maladies infectieuses",
          "L'âge de la pestilence et de la famine",
          "L'âge de la transition sanitaire"
        ],
        correctOptionIndexes: [2],
        explanation: "La première phase, 'L'âge de la pestilence et de la famine' (15ème au 18ème siècle), était caractérisée par une mortalité élevée due aux maladies infectieuses et aux famines, avec une espérance de vie moyenne sous les 30 ans."
      },
      {
        questionText: "À partir de quelle décennie la transition épidémiologique a-t-elle été observée en Algérie ?",
        options: [
          "Les années 60",
          "Les années 70",
          "Les années 80",
          "Les années 90"
        ],
        correctOptionIndexes: [3],
        explanation: "En Algérie, c'est à partir de la décennie 90 qu'on a constaté une nette diminution des maladies transmissibles et une augmentation des maladies chroniques non transmissibles."
      },
      {
        questionText: "Quelle est la principale différence entre la démographie 'statique' et 'dynamique' ?",
        options: [
          "La statique étudie les naissances et la dynamique les décès.",
          "La statique décrit l'état d'une population à un moment donné, tandis que la dynamique étudie son évolution dans le temps.",
          "La statique ne concerne que les pays développés.",
          "La dynamique n'utilise que les données du recensement."
        ],
        correctOptionIndexes: [1],
        explanation: "La démographie statique est comme une photographie de la population à un instant T (ex: population en 2024), tandis que la démographie dynamique est comme un film qui montre l'évolution de cette population dans le temps (ex: augmentation entre 2000 et 2024)."
      },
      {
        questionText: "Parmi les sources de données démographiques, laquelle est un système d'enregistrement continu, permanent et obligatoire ?",
        options: [
          "Le recensement",
          "Les enquêtes par sondage",
          "Le registre de l’état civil",
          "Les registres hospitaliers"
        ],
        correctOptionIndexes: [2],
        explanation: "Le registre de l’état civil est un système d'enregistrement continu et permanent des faits d'état civil (naissances, décès, mariages), ce qui en fait une source de données très précieuse pour la démographie dynamique."
      },
      {
        questionText: "Lequel des éléments suivants est un inconvénient majeur du recensement ?",
        options: [
          "Il offre une couverture statistique partielle.",
          "Son coût est très faible.",
          "Son contenu est très détaillé et complexe.",
          "Sa périodicité (tous les 10 ans) et les longs délais de publication rendent les données parfois dépassées."
        ],
        correctOptionIndexes: [3],
        explanation: "Les inconvénients majeurs d'un recensement sont sa longue périodicité (10 ans), les délais de publication qui peuvent rendre les données obsolètes au moment de leur sortie, et son coût très élevé."
      },
      {
        questionText: "Quelle est la différence entre un 'ménage' et une 'famille' en démographie ?",
        options: [
          "Il n'y a aucune différence.",
          "Une famille est l'ensemble des occupants d'un logement, un ménage est un lien de parenté.",
          "Un ménage est l'ensemble des occupants d'un même logement (même une seule personne), tandis qu'une famille est un groupe basé sur la parenté (père, mère, enfants).",
          "Un ménage ne peut pas contenir plus d'une famille."
        ],
        correctOptionIndexes: [2],
        explanation: "Un ménage est une unité économique et de logement; c'est l'ensemble des personnes vivant dans le même logement. Une famille est une unité sociale basée sur la parenté. citation: Un ménage peut donc contenir une personne seule, une famille, ou même plusieurs familles."
      },
      {
        questionText: "Une base large dans une pyramide des âges indique :",
        options: [
          "Une population vieillissante.",
          "Un faible taux de natalité.",
          "Une forte proportion de jeunes et des besoins futurs en écoles et emplois.",
          "Un grand nombre de décès."
        ],
        correctOptionIndexes: [2],
        explanation: "Une base large sur une pyramide des âges signifie qu'il y a un grand nombre de naissances et une forte proportion de jeunes dans la population, ce qui indique des besoins futurs importants en matière d'éducation et d'emploi."
      },
      {
        questionText: "Comment calcule-t-on le Taux d'Accroissement Naturel (TAN) ?",
        options: [
          "(Naissances / Population moyenne) x 1000",
          "(Décès / Population moyenne) x 1000",
          "((Naissances - Décès) / Population moyenne) x 1000",
          "(Naissances / Décès) x 100"
        ],
        correctOptionIndexes: [2],
        explanation: "Le Taux d'Accroissement Naturel (TAN) mesure l'évolution naturelle d'une population. citation: Il est calculé en soustrayant le nombre de décès du nombre de naissances, puis en rapportant ce solde à la population moyenne, généralement pour 1000 habitants."
      },
      {
        questionText: "Quelle a été la conséquence de la pandémie de COVID-19 sur la mortalité en Algérie selon le cours ?",
        options: [
          "Aucun impact notable.",
          "Une diminution record du nombre de décès.",
          "Un niveau record de décès durant les années 2020 et 2021.",
          "Une augmentation de l'espérance de vie."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cours indique clairement que les années 2020 et 2021 ont connu un niveau record de décès en Algérie sous l’effet de la pandémie de la COVID-19, ce qui a temporairement impacté l'espérance de vie à la baisse."
      },
      {
        questionText: "Selon les données de 2023 pour l'Algérie, quelle est la tendance observée pour la nuptialité (mariages) ?",
        options: [
          "Une augmentation record du nombre de mariages.",
          "Une stabilité parfaite.",
          "Une baisse qui se poursuit.",
          "Les mariages ne sont plus enregistrés."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cours mentionne une baisse de l'effectif des mariages qui se poursuit en 2023, en partie liée à la modification de la structure par âge de la population."
      },
      {
        questionText: "Qu'est-ce que le système de santé selon la loi algérienne de 1985 ?",
        options: [
          "Uniquement les hôpitaux publics.",
          "L'ensemble des activités et moyens pour assurer la protection et la promotion de la santé de la population.",
          "Les activités du secteur privé uniquement.",
          "Uniquement la prévention des maladies."
        ],
        correctOptionIndexes: [1],
        explanation: "L'article 4 de la loi 85-05 définit le système national de santé comme 'l'ensemble des activités et des moyens destinés à assurer la protection et la promotion de la santé de la population'."
      },
      {
        questionText: "Laquelle des préventions suivantes vise à arrêter la progression d'une maladie déjà existante par le dépistage ?",
        options: [
          "Prévention primaire",
          "Prévention secondaire",
          "Prévention tertiaire",
          "Prévention quaternaire"
        ],
        correctOptionIndexes: [1],
        explanation: "La prévention secondaire a pour but d'arrêter la progression ou l'évolution des maladies, notamment par des actions de dépistage précoce."
      },
      {
        questionText: "Selon le cours, qui sont les 'acteurs' du système de santé en Algérie ?",
        options: [
          "Uniquement les médecins et les infirmiers.",
          "Uniquement le Ministère de la Santé.",
          "Les institutions, les professionnels de santé, les établissements et les usagers.",
          "Uniquement les usagers (patients)."
        ],
        correctOptionIndexes: [2],
        explanation: "Le système de santé est composé de plusieurs acteurs interdépendants : les institutions (politiques, financement), les professionnels et établissements de santé (l'offre de soins), et les usagers (la demande)."
      },
      {
        questionText: "Quelle caractéristique d'un système de santé signifie que son coût ne doit pas être un obstacle à l'accès aux soins ?",
        options: [
          "Efficace",
          "Acceptable",
          "Souple et modifiable",
          "Accessible"
        ],
        correctOptionIndexes: [3],
        explanation: "La caractéristique 'Accessible' signifie que le système doit l'être sur le plan géographique mais aussi économique, c'est-à-dire que 'le coût ne devant pas lui faire obstacle'."
      },
      {
        questionText: "Quel type de système de santé, soumis à la loi du marché, est en place aux États-Unis ?",
        options: [
          "Système centralisé",
          "Système mixte",
          "Système décentralisé (libéral)",
          "Système socialiste"
        ],
        correctOptionIndexes: [2],
        explanation: "Le système décentralisé est un système libéral soumis à la loi du marché où le régulateur est le prix. citation: Les États-Unis et la Suisse en sont des exemples."
      },
      {
        questionText: "En Algérie, les Établissements Hospitaliers Spécialisés sont désignés par quel acronyme ?",
        options: [
          "CHU",
          "DSP",
          "EPH",
          "EHS"
        ],
        correctOptionIndexes: [3],
        explanation: "Les EHS sont les Etablissements Hospitaliers Spécialisés, qui se concentrent sur des pathologies spécifiques comme l'oncologie ou la psychiatrie."
      },
      {
        questionText: "Quel est l'objectif de la 'carte sanitaire' en Algérie ?",
        options: [
          "Uniquement de compter le nombre de médecins.",
          "Servir de carte d'identité pour les patients.",
          "Être un instrument de planification pour une répartition équitable des ressources de santé.",
          "Financer le secteur privé."
        ],
        correctOptionIndexes: [2],
        explanation: "La carte sanitaire est définie comme un instrument de planification et de programmation, ainsi qu'un 'instrument de répartition judicieuse et équitable des ressources humaines matérielles et financières affectées au secteur'."
      },
      {
        questionText: "Comment est financé principalement le secteur public de la santé en Algérie ?",
        options: [
          "Uniquement par les dons privés.",
          "Par l'ETAT, la CNAS (sécurité sociale) et la contribution des ménages.",
          "Uniquement par les assurances économiques.",
          "Uniquement par les patients non assurés."
        ],
        correctOptionIndexes: [1],
        explanation: "Le diagramme sur le financement montre que le secteur public est principalement financé par l'État, la Caisse Nationale des Assurances Sociales (CNAS), et les ménages."
      },
      {
        questionText: "Laquelle de ces professions n'est PAS listée comme une profession de santé dans le cours ?",
        options: [
          "Chirurgien-dentiste",
          "Sage-femme",
          "Orthophoniste",
          "Avocat"
        ],
        correctOptionIndexes: [3],
        explanation: "Le cours liste de nombreuses professions de santé, incluant les médecins, dentistes, sages-femmes, orthophonistes, etc. Un avocat est un professionnel du droit, pas de la santé."
      },
      {
        questionText: "La prévention tertiaire vise à :",
        options: [
          "Éviter la survenue d'une maladie.",
          "Arrêter la progression d'une maladie par le dépistage.",
          "Réduire l'impact d'une maladie chronique, éviter les rechutes et les complications.",
          "Accompagner la fin de vie."
        ],
        correctOptionIndexes: [2],
        explanation: "La prévention tertiaire a pour but de réduire l'impact des maladies, d'éviter les rechutes et les complications, par exemple à travers la rééducation ou l'éducation thérapeutique du patient (ETP)."
      },
      {
        questionText: "Quel est l'un des principes de référence des médecins libéraux mentionné dans le cours ?",
        options: [
          "Le paiement par salaire fixe.",
          "L'interdiction de s'installer librement.",
          "Le paiement à l'acte.",
          "Le contrôle par l'administration hospitalière."
        ],
        correctOptionIndexes: [2],
        explanation: "Le cours liste cinq principes de référence pour les médecins libéraux, parmi lesquels figure le 'paiement à l'acte'."
      },
      {
        questionText: "La loi 85-05 en Algérie est relative à :",
        options: [
          "La protection des consommateurs.",
          "L'organisation de la justice.",
          "La protection et à la promotion de la santé.",
          "Le code de la famille."
        ],
        correctOptionIndexes: [2],
        explanation: "La loi n°85-05 du 16 février 1985 est la loi sanitaire fondamentale en Algérie, relative à la protection et à la promotion de la santé."
      },
      {
        questionText: "La prévention quaternaire est définie comme :",
        options: [
          "La vaccination.",
          "Le dépistage du cancer.",
          "La rééducation après un accident.",
          "L'accompagnement de la fin de vie (soins palliatifs)."
        ],
        correctOptionIndexes: [3],
        explanation: "Le cours définit la prévention quaternaire comme l'ensemble des actions qui visent à accompagner la fin de vie, ce qui correspond aux soins palliatifs."
      },
      {
        questionText: "Quel est l'un des objectifs prioritaires du système de santé algérien selon l'article 3 de la loi de 1985 ?",
        options: [
          "Le développement du tourisme médical.",
          "La protection sanitaire prioritaire des groupes à risques.",
          "La construction d'hôpitaux de luxe.",
          "La réduction de l'éducation physique."
        ],
        correctOptionIndexes: [1],
        explanation: "L'article 3 de la loi 85-05 stipule que les objectifs en matière de santé visent notamment 'La protection sanitaire prioritaire des groupes à risques'."
      },
      {
        questionText: "Qu'est-ce que l'e-santé ?",
        options: [
          "La pratique de la chirurgie à distance.",
          "L'utilisation de cartes à puces pour les feuilles de soins.",
          "La fourniture d'informations et de prestations de santé sur internet, et la gestion en ligne des dossiers.",
          "La formation médicale par satellite."
        ],
        correctOptionIndexes: [2],
        explanation: "L'e-santé est définie comme la fourniture d'informations et de prestations sur le net, ainsi que la gestion en ligne des dossiers médicaux, offrant de nouveaux services aux praticiens et aux patients."
      },
      {
        questionText: "Lequel des éléments suivants est une caractéristique d'un système de santé 'efficace' ?",
        options: [
          "Que son coût ne soit pas un obstacle pour la population.",
          "Qu'il ait l'accord et le consentement volontaire de la population.",
          "Qu'il puisse être adapté à des situations nouvelles comme une épidémie.",
          "Qu'il ait une efficacité technique (obligation de résultats) et économique (bons choix financiers)."
        ],
        correctOptionIndexes: [3],
        explanation: "L'efficacité d'un système de santé est de deux ordres : technique (qualité des soins) et économique (choix compatibles avec les ressources financières du pays)."
      },
      {
        questionText: "La prévention qui vise à réduire l'impact d'une maladie, éviter les rechutes et les complications (ex: rééducation) est la prévention :",
        options: [
          "Primaire",
          "Secondaire",
          "Tertiaire",
          "Quaternaire"
        ],
        correctOptionIndexes: [2],
        explanation: "La prévention tertiaire a pour objectif de réduire l'impact des maladies chroniques ou des handicaps, d'éviter les rechutes et les complications, notamment par la rééducation ou l'éducation thérapeutique."
      },
      {
        questionText: "Quel type de système de santé est principalement financé par l'État et où la production de soins est un monopole public, comme au Royaume-Uni ?",
        options: [
          "Système décentralisé (libéral)",
          "Système mixte",
          "Système centralisé",
          "Système privé"
        ],
        correctOptionIndexes: [2],
        explanation: "Le système centralisé, adopté par les pays socialistes et le Royaume-Uni (NHS), est caractérisé par un monopole public de la production de soins et un financement par l'État."
      },
      {
        questionText: "En Algérie, les Directions de la Santé et de la Population au niveau des wilayas sont désignées par l'acronyme :",
        options: [
          "CHU",
          "EHS",
          "DSP",
          "SAMU"
        ],
        correctOptionIndexes: [2],
        explanation: "Les DSP (Directions de la Santé et de la Population) sont les structures administratives du ministère de la Santé au niveau de chaque wilaya."
      },
      {
        questionText: "Selon la loi 85-05, quel est l'objectif principal de la 'carte sanitaire' ?",
        options: [
          "Fournir une assurance maladie à chaque citoyen.",
          "Servir d'instrument de planification et de répartition équitable des ressources de santé.",
          "Lister les médecins disponibles dans chaque région.",
          "Payer les salaires des professionnels de santé."
        ],
        correctOptionIndexes: [1],
        explanation: "La carte sanitaire est définie comme le schéma directeur du système de santé, servant d'instrument de planification et de répartition judicieuse et équitable des ressources humaines, matérielles et financières."
      },
      {
        questionText: "L'ensemble des actions visant à accompagner la fin de vie correspond à la prévention :",
        options: [
          "Primaire",
          "Secondaire",
          "Tertiaire",
          "Quaternaire"
        ],
        correctOptionIndexes: [3],
        explanation: "La prévention quaternaire est un concept plus récent qui englobe l'ensemble des actions et soins (comme les soins palliatifs) visant à accompagner la fin de vie et à éviter l'acharnement thérapeutique."
      },
      {
        questionText: "Parmi les suivants, qui n'est pas considéré comme un 'acteur' direct du système de santé ?",
        options: [
          "Les institutions politiques",
          "Les professionnels de santé",
          "Les usagers (patients)",
          "Les entreprises de construction"
        ],
        correctOptionIndexes: [3],
        explanation: "Les acteurs du système de santé sont les institutions, les professionnels, les établissements et les usagers. Les entreprises de construction, bien qu'elles construisent des hôpitaux, ne sont pas des acteurs directs du système de soin lui-même."
      },
      {
        questionText: "L'organisation des services de santé en Algérie est caractérisée par le fait qu'ils sont :",
        options: [
          "Centralisés, non hiérarchisés et privés.",
          "Décentralisés, sectorisés et hiérarchisés.",
          "Uniquement focalisés sur les grandes villes.",
          "Entièrement gérés par le secteur privé."
        ],
        correctOptionIndexes: [1],
        explanation: "L'article 5 de la loi 85-05 stipule que le système national de santé est caractérisé par 'Des services de santé décentralisés, sectorisés et hiérarchisés, en vue d'une prise en charge totale des besoins sanitaires de la population'."
      },
      {
        questionText: "Quelle est la définition de la 'télé-médecine' ?",
        options: [
          "La vente de médicaments sur internet.",
          "La gestion en ligne des dossiers médicaux.",
          "La pratique d'activités médicales à distance (télé-diagnostic, télé-chirurgie, etc.).",
          "L'utilisation de cartes à puces pour les paiements."
        ],
        correctOptionIndexes: [2],
        explanation: "La télé-médecine est la pratique de nombreuses activités médicales à distance, comme le télé-diagnostic, la télé-surveillance, la télé-chirurgie, modifiant les pratiques et la relation praticien-patient."
      },
      {
        questionText: "Quel était l'objectif initial du système SESAM-Vitale en France ?",
        options: [
          "Permettre la télé-chirurgie.",
          "Permettre la télé-transmission des feuilles de soins.",
          "Stocker l'intégralité du dossier médical du patient.",
          "Vendre des médicaments en ligne."
        ],
        correctOptionIndexes: [1],
        explanation: "L'objectif initial du développement du système SESAM-Vitale, qui utilise la carte Vitale et la carte de professionnel de santé (CPS), a été de permettre la transmission informatisée des feuilles de soins pour simplifier les remboursements."
      },
      {
        questionText: "Quelle est l'une des principales interrogations éthiques posées par les Nouvelles Technologies de l'Information (NTIC) en santé ?",
        options: [
          "L'augmentation du coût des ordinateurs.",
          "La vitesse de la connexion internet.",
          "Le respect de la déontologie et la préservation du secret des informations médicales personnelles.",
          "La diminution du nombre de médecins."
        ],
        correctOptionIndexes: [2],
        explanation: "Le développement des NTIC en santé suscite de nombreuses interrogations, notamment sur le respect de la déontologie médicale et des droits de la personne, en particulier la protection du secret des informations médicales personnelles."
      },
      {
        questionText: "Que permet la 'télé-surveillance' ?",
        options: [
          "De réaliser une opération chirurgicale à distance.",
          "De surveiller en continu les paramètres vitaux d'un patient à domicile.",
          "De former des médecins via des conférences en ligne.",
          "De poser un diagnostic à partir d'images médicales transmises."
        ],
        correctOptionIndexes: [1],
        explanation: "La télé-surveillance est une application de la télé-médecine qui permet de suivre à distance les données médicales d'un patient, souvent pour des maladies chroniques, améliorant ainsi la continuité des soins."
      },
      {
        questionText: "Quel est le risque majeur de l'e-santé concernant l'information délivrée aux internautes ?",
        options: [
          "L'information est toujours payante.",
          "Il n'y a aucun dispositif garantissant la qualité et la fiabilité de l'information.",
          "L'information n'est disponible qu'en une seule langue.",
          "L'information est trop technique pour être comprise."
        ],
        correctOptionIndexes: [1],
        explanation: "Un des problèmes majeurs de l'e-santé est qu'aucun dispositif ne garantit à l'internaute la qualité de l'information qui lui est délivrée, ce qui peut l'exposer à des informations fausses ou dangereuses."
      },
      {
        questionText: "La loi française sur les droits des malades accorde au patient une liberté totale concernant :",
        options: [
          "Le choix du type de technologie utilisé par le médecin.",
          "Le tarif des consultations.",
          "L'autorisation d'accès et l'utilisation de son dossier médical personnel.",
          "La marque des médicaments prescrits."
        ],
        correctOptionIndexes: [2],
        explanation: "La loi accorde au patient une totale liberté pour autoriser ou non les professionnels de santé à accéder à son dossier médical, pour en décider le contenu et les utilisations qui peuvent en être faites."
      },
      {
        questionText: "Quel est l'un des 8 axes de mesures proposés pour encadrer les NTIC en santé ?",
        options: [
          "Interdire l'usage d'internet pour les médecins.",
          "Rendre toutes les informations médicales publiques.",
          "Préserver la confidentialité du dossier médical.",
          "Remplacer les médecins par l'intelligence artificielle."
        ],
        correctOptionIndexes: [2],
        explanation: "L'un des 8 axes de mesures cohérentes est de 'Préserver la confidentialité du dossier médical', en s'assurant que son informatisation se fasse dans le respect total des données personnelles."
      }
    ]
  }
];

module.exports = sshQuizzes;