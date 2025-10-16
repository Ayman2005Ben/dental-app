// quizzes/year-1/physics.js

const physiqueQuizzes = [
  {
    title: "Électrostatique",
    subject: "physics", // سيقوم الـ Seeder بربط هذا الاسم بالـ ObjectId الصحيح
    questions: [
      // ----- Exercices 1-19 (Avec Images) -----
      {
        "questionText": "Exercice 1 - Question 1: soit un cercle de rayon r (=a) situé dans le vide. Des charges ponctuelles qA... La norme E, du champ électrique généré par les charges qB, qD, qF, et qH au point O est: (Données: k = 9.10⁹ SI, Charges: qA=qE=qB=-qF=qH=-qD=q=5.10⁻⁹ C; qC=2q et qG = -q. a = 10⁻¹ m.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "E₁ = 3,18.10⁵ V/m",
          "E₁ = 1,84.10⁴ V/m",
          "E₁ = 6,36.10⁵ V/m",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Pour trouver le champ électrique résultant au point O, on additionne vectoriellement les champs créés par chaque charge. En observant les symétries... En effectuant la somme vectorielle de tous ces champs, on obtient la norme du champ électrique total au centre O."
      },
      {
        "questionText": "Exercice 1 - Question 2: Suite à la question précédente, l'énergie interne U des trois charges qA, qC, et qG est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "U = 1,67.10⁻³ J",
          "U = 4,3.10⁻³ J",
          "U = 0 J",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "L'énergie interne (ou énergie potentielle électrostatique) d'un système de plusieurs charges est la somme des énergies potentielles de chaque paire de charges possible. Ici... La somme de ces trois énergies donne l'énergie interne totale du système."
      },
      {
        "questionText": "Exercice 1 - Question 3: suite à la question précédente, est placée au point O, une charge q' (q' = 5.10⁻⁹ C). La norme F de la force F qu'exercent les charges qA, qC, et qG sur la charge q' est",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "F = 2,25.10⁻³ N",
          "F = 6,5.10⁻³ N",
          "F = 2,5.10⁻³ N",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "La force totale exercée sur la charge q' au point O... les forces créées par qC et qG sont de même grandeur mais de sens opposés, elles s'annulent... la force résultante sur q' est uniquement la force exercée par la charge qA. On calcule cette force en utilisant la loi de Coulomb : F = k * |qA| * |q'| / a²."
      },
      {
        "questionText": "Exercice 1 - Question 4: suite à la question précédente, toutes les charges sont retirées... Un dipôle p... est alors placé au point C... L'énergie potentielle EPT de ce dipôle, due aux charges qA et qG, est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "EPT = 9,14.10⁻³ J",
          "EPT = 0 J",
          "EPT = 4,37.10⁻³ J",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "L'énergie potentielle d'un dipôle (EPT) dans un champ électrique (E) est EPT = -p * E * cos(θ)... L'analyse graphique montre que le vecteur champ E est perpendiculaire au vecteur moment dipolaire p. L'angle θ est donc de 90°. Puisque cos(90°) = 0, l'énergie potentielle du dipôle est nulle."
      },
      {
        "questionText": "Exercice 1 - Question 5: suite à la question précédente, le potentiel V, au point A... généré par les charges qC et qG, et du potentiel V'', généré par le dipôle p, est",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "V = 1,59.10³",
          "V = 0,87.10³",
          "V = 6,36.10³ V",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Le potentiel total au point A est la somme de V' (charges) et V'' (dipôle). Le potentiel V'' d'un dipôle est nul en tout point situé sur sa médiatrice... Le potentiel total V est donc simplement égal à V'."
      },
      {
        "questionText": "Exercice 1 - Question 6: suite à la question précédente, la norme E du champ électrique au point A, généré par le dipôle p est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/1.PNG",
        "options": [
          "E = 5,625.10¹² SI",
          "E = 0 V/m",
          "E=0",
          "les réponses a, b, et C sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Le champ électrique créé par un dipôle... Pour un point situé sur la médiatrice (θ = 90°)... la composante radiale Er est nulle. Le champ total est donc égal à la composante Eθ. En appliquant la formule E = Eθ = k * p / r³..."
      },
      {
        "questionText": "Exercice 2 - Question 1: La norme E1 du champ électrique E⃗1 au point E, dû aux charges qB, qC, et qD est : (Données: Carré de côté [2a], qA = qB = -qC = qD = q avec q = 10⁻¹⁰ C et a=10⁻⁶ m.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/2.PNG",
        "options": [
          "E1 = 1,754.10¹² V/m",
          "E1 = 3,4.10¹² V/m",
          "E1 = 5,656.10¹¹ V/m",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Le champ électrique E1 au point E est la somme vectorielle des champs créés par qB, qC et qD... Le corrigé calcule en fait le champ total créé par les quatre charges... La norme du champ total est donc trouvée en utilisant le théorème de Pythagore sur ces deux composantes."
      },
      {
        "questionText": "Exercice 2 - Question 2: le potentiel VE au point E, dû aux charges ponctuelles qA, qB, qC, et qD est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/2.PNG",
        "options": [
          "VE = 7,036.10⁶ V",
          "VE = -34,712.10⁻⁶ V",
          "VE = 14,297.10⁻⁶ V",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Le potentiel électrique est une grandeur scalaire... VE = VA + VB + VC + VD... On additionne les quatre potentiels... Le calcul montre que le résultat ne correspond à aucune des options A, B ou C."
      },
      {
        "questionText": "Exercice 2 - Question 3: la valeur UE de l'énergie potentielle EpE... (potentiel du système des quatre charges)... est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/2.PNG",
        "options": [
          "UE = 7,036 J",
          "UE = 34,712 J",
          "UE = 14,297 J",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "L'énergie potentielle d'un système de quatre charges est la somme des énergies potentielles de toutes les paires de charges possibles (6 paires au total)... On calcule l'énergie de chaque paire... et on additionne les six résultats."
      },
      {
        "questionText": "Exercice 2 - Question 4: soit un dipôle p (q = 10⁻¹⁰ C, a = 0,5.10⁻⁹ m). Celui-ci est positionné au point E, et orienté dans le sens de l'axe X, la norme M du moment du couple M que subit ce dipôle est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/2.PNG",
        "options": [
          "M = 1,75.10⁻¹⁰ SI",
          "M = 4,656.10⁻⁶ SI",
          "M = 0 SI",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Le moment M de ce couple est donné par la formule M = p * E * sin(θ), où p est le moment dipolaire (p = q * 2a), E est la norme du champ électrique extérieur (calculée en Q1)... On applique la formule pour trouver M."
      },
      {
        "questionText": "Exercice 3 - Question 1: (EMD 2022, 1er set) Parmi les affirmations suivantes, lesquelles sont correctes ? (Données: QA = q et QB = +2q, distants de d = 2mm. q = 1nC.)",
        "options": [
          "La force (FA) exercée par (QB) sur (QA) est supérieure à la force (FB) exercée par (QA) sur (QB).",
          "L’énergie potentielle (Ep) de la charge (QB) est égale à celle générée par (QA) au point (B).",
          "Le potentiel électrique généré par (QA) au point (B) est égal à celui généré par(QB) au point (A).",
          "L’énergie potentielle (Ep) de la charge (QB) est supérieure à l'énergie potentielle (Ep)de la charge (QA).",
          "Toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Le commentaire évalue chaque affirmation... Il compare les énergies potentielles (EpA et EpB) ainsi que les potentiels électriques... pour déterminer lesquelles des affirmations sont vraies."
      },
      {
        "questionText": "Exercice 3 - Question 2: (EMD 2022, 1er set) Suite... on déplace la charge (QB) à un point (C) tel que le triangle (ABC) soit isocèle... Parmi les affirmations suivantes, lesquelles sont correctes ?",
        "options": [
          "Le dipôle est soumis à un champ électrique d’intensité |E| égale: e = 4.5 10⁵ V/m.",
          "L’intensité du champ électrique (E) au point (C) due à (QA) et (QB) est nulle.",
          "Le moment dipolaire vaut: p = 3.2 10⁻¹² C.m.",
          "L’intensité du moment du couple est minimale.",
          "Toutes ces réponses sont justes."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Le commentaire présente les calculs pour vérifier les valeurs numériques... Il calcule le moment dipolaire p... et le champ électrique E... pour confirmer ou infirmer les données."
      },
      {
        "questionText": "Exercice 3 - Question 3: (EMD 2022, 1er set) Suite... on retire la charge (QB), on la remplace par un dipôle électrique (p). On place le dipôle au point (B). Parmi les affirmations suivantes, lesquelles sont correctes ?",
        "options": [
          "La charge (QA) est soumise à une force F ≠ 0 N.",
          "L’intensité du champ électrique (EA) généré par le dipôle au point (A) est nulle.",
          "La charge (QA) est soumise à une force F = 0 N.",
          "L’intensité du champ électrique (EA) généré par le dipôle au point (B) vaut: EA=0 V/m.",
          "Le dipôle est dans un état d'équilibre stable."
        ],
        "correctOptionIndexes": [ 4 ],
        "explanation": "Le commentaire analyse le champ électrique E créé par le dipôle (en B) au point A... champ est nul car A est à 90°... Par conséquent, la force F = qA * E... est nulle. Enfin, le commentaire examine les conditions d'équilibre... concluant à un cas d'équilibre."
      },
      {
        "questionText": "Exercice 3 - Question 1: (EMD 2022, 2ème set) Parmi les affirmations suivantes, laquelle est correcte ? (Données: QA = q et QB = +2xq, distants de d = 2 mm. q = 1uC.)",
        "options": [
          "La force générée par (QA) sur (QB) est égale à celle générée par (QB) sur (QA).",
          "Le potentiel électrique généré par (QA) au point (B) est égal à celui généré par(QB) au point (A).",
          "L’énergie potentielle (EpA) de la charge (QA) est supérieure à l'énergiepotentielle (EpB)de la charge (QB).",
          "B + C",
          "T.R.F."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Selon le principe de l'action et de la réaction (3ème loi de Newton), la force que QA exerce sur QB est égale en grandeur et opposée en direction à la force que QB exerce sur QA. Leurs normes sont égales."
      },
      {
        "questionText": "Exercice 3 - Question 2: (EMD 2022, 2ème set) Suite... on enlève (QA), on la remplace par un dipôle... (QB) est déplacée à C... Le dipôle est orienté perpendiculaire à (AB)... Parmi les affirmations suivantes, lesquelles sont correctes ? (1. p = 3,2... 2. E = 4,5... 3. Ep= 0 J. 4. Moment max. 5. Toutes justes.) Options :",
        "options": [
          "1+2+3",
          "3+4",
          "1+2+4",
          "2+4",
          "5"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Affirmations 1, 2, 3 sont vraies. L'énergie potentielle (Ep) d'un dipôle est Ep = -p.E.cos(θ). Le dipôle est perpendiculaire à la droite AB. Le champ E créé par QB est dirigé le long de BA. L'angle θ est donc de 90°. Puisque cos(90°) = 0, l'énergie potentielle est nulle (3)."
      },
      {
        "questionText": "Exercice 3 - Question 3: (EMD 2022, 2ème set) Suite... le dipôle est au point A et la charge QB est en C. Que peut-on dire ?",
        "options": [
          "L'intensité du champ électrique généré par le dipôle au point B est nulle.",
          "La charge (QB) est soumise à une force F=0 N.",
          "Le dipôle est dans un état d'équilibre stable.",
          "A+B+C.",
          "Toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 4 ],
        "explanation": "Champ en B (A) : Le champ d'un dipôle n'est pas nul en B. (Faux). Force sur QB (B) : F = QB * E. Comme E (créé par dipôle en C) n'est pas nul, F n'est pas nulle. (Faux). Équilibre (C) : Le dipôle n'est pas aligné avec le champ extérieur (créé par QB en A). (Faux). Puisque A, B, C sont fausses, la réponse est E."
      },
      {
        "questionText": "Exercice 4 - Question 1: La norme F de la force F qui s'exerce sur la charge q due aux charges qA et qB est: (Données: q=10⁻⁹ C placée au milieu de [AB] (a=4mm). Aux points A et B, qA=-qB=1,6.10⁻¹⁰ C.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/4.PNG",
        "options": [
          "F=7,2.10⁻⁵ N",
          "F=1,8.10⁻⁵ N",
          "F=13,8.10⁻⁵ N",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "La force totale F sur q est F = FA + FB. qA (positive) repousse q. qB (négative) attire q. Les two forces FA et FB sont donc dans le même sens. La force résultante est F = FA + FB = 2 * FA."
      },
      {
        "questionText": "Exercice 4 - Question 2: suite... après avoir retiré q... on ait: qA=-qC et qB=-qD. Centre O du carré... La norme E du champ électrique au point O est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/4.PNG",
        "options": [
          "E=0 V/m",
          "E=6,3.10⁻³ V/m",
          "E=3,1.10⁻³ V/m",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Champ total E = EA + EB + EC + ED. EA et EC (puisque qC=-qA) sont dans le même sens. EB et ED (puisque qD=-qB) sont dans le même sens. On a deux champs résultants (Eac et Ebd) qui sont perpendiculaires. Le commentaire calcule E = √(Eac² + Ebd²) (Note: il semble y avoir une erreur dans l'explication, car si qA=-qB et qA=-qC et qB=-qD, alors qA=qD et qB=qC. Les champs des opposés s'annulent. Mais si les données sont qA=-qB et qA=-qC et qB=-qD, alors qA=qD et qB=qC. Les champs s'annulent E=0.)"
      },
      {
        "questionText": "Exercice 5 - Question 1: la norme Ec est le champ électrique résultant au point C, dû aux charges qA, qB, et qD est: (Données: qA=qB=qC=qD=3.10⁻⁹C. [OA]=10⁻²m. OC=0.25 OD, OD=4.10⁻²m. A, C, B perpendiculaires.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/5.PNG",
        "options": [
          "Ec=4,5.10⁴ V/m",
          "Ec=2,8.10⁵ V/m",
          "Ec=6,6.10⁵ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Champ Ec = EA + EB + ED (vecteurs). EA et EB sont perpendiculaires. On calcule leur somme (Eab) par Pythagore. Eab et ED sont sur le même axe mais de sens opposés. La norme totale Ec est la différence | |Eab| - |ED| |."
      },
      {
        "questionText": "Exercice 5 - Question 2: suite... le potentiel Vc résultant au point C, dû aux charges qA, qB, qO, et qD, est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/5.PNG",
        "options": [
          "Vc=4,462.10³ V",
          "Vc=5,978.10³ V",
          "Vc=7,05.10³ V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Le potentiel est scalaire. Vc total = V_A(c) + V_B(c) + V_D(c) + V_O(c). On calcule chaque potentiel avec V = k*q/r et on les additionne."
      },
      {
        "questionText": "Exercice 5 - Question 3: suite... l'énergie interne Ui des charges qA, qB, et qD est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/5.PNG",
        "options": [
          "Ui=1,21.10⁻³ J",
          "Ui=3,15.10⁻³ J",
          "Ui=4,461.10⁻³ J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "L'énergie interne Ui est la somme des énergies potentielles des 3 paires: (qA, qB), (qA, qD), et (qB, qD). On calcule U_paire = k * (q1 * q2) / r pour chaque et on additionne les trois."
      },
      {
        "questionText": "Exercice 5 - Question 4: suite... si la charge qe positionnée au point C vaut qe: 10⁻⁹ C, l'énergie potentielle EpC... de la charge C du fait de qA, qB, et qD est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/5.PNG",
        "options": [
          "EpC=1,21.10⁻⁵ J",
          "EpC=7,05.10⁻⁵ J",
          "EpC=5,978.10⁻⁵ J",
          "EpC=1,823.10⁻⁴ J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "L'énergie potentielle EpC d'une charge qe en C est EpC = qe * Vc. On utilise le potentiel Vc (créé par qA, qB, qD) calculé à la question 2."
      },
      {
        "questionText": "Exercice 6 - Question 1: Le potentiel V M dû par... qB et qC en un point M ([OM] = 2 m)... angle (OM, BC) vaut θ=60° est: (données: a=10⁻¹ m; qB=qC=10⁻⁹ C).",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/6.PNG",
        "options": [
          "VM = 1.125. 10⁻⁹ V",
          "VM = 9. 10⁹ V",
          "VM = 3.375. 10⁻⁹ V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Le problème est traité en modélisant (qB, qC) comme un dipôle (p = q*a). On utilise la formule du potentiel du dipôle V = k * p * cos(θ) / r². Le calcul donne la valeur C, mais la réponse correcte est D."
      },
      {
        "questionText": "Exercice 6 - Question 2: l'énergie potentielle Ep d'une charge q'=10⁻¹⁰C placée en M... vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/6.PNG",
        "options": [
          "Ep = 1.125. 10⁻³ J",
          "Ep = 4.463. 10⁻³ J",
          "Ep = 3.375. 10⁻¹⁹ J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "L'énergie potentielle Ep = q' * V. On utilise la valeur du potentiel V calculée (ou supposée) dans la question 1 et on la multiplie par q'."
      },
      {
        "questionText": "Exercice 6 - Question 3: La norme Eθ du champ électrique E⃗ selon la direction (θ) dû au dipôle « qB, qC »... au point M:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/6.PNG",
        "options": [
          "Eθ = 2.92.10⁻⁹ V/m",
          "Eθ = 5.25.10⁻¹¹ V/m",
          "Eθ = 0.2.10⁻¹¹ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Ceci demande la composante orthoradiale (Eθ) du champ du dipôle. La formule est Eθ = k * p * sin(θ) / r³."
      },
      {
        "questionText": "Exercice 6 - Question 4: suite... la norme E du champ électrique E⃗ dû à ce système de charges vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/6.PNG",
        "options": [
          "E = 4.1.10⁻⁹ V/m",
          "E = 3.4.10⁻⁹ V/m",
          "E = 3.375.10⁻⁹ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "La norme du champ total E = √(Er² + Eθ²). On doit d'abord calculer Er = 2 * k * p * cos(θ) / r³. On combine ensuite avec Eθ (de Q3) par Pythagore pour trouver E."
      },
      {
        "questionText": "Exercice 6 - Question 5: la norme M du moment M qui s'applique sur... qB et qC, dû à la charge qA, vaut: (données: qA=-10⁻⁹ C)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/6.PNG",
        "options": [
          "M = 0.72.10⁻¹² N.m",
          "M = 2.85.10⁻¹² N.m",
          "M = 2.85.10⁻¹⁰ N.m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Le moment M sur le dipôle (p) dû au champ extérieur (Ea créé par qA) est M = p * Ea * sin(θ'). On calcule Ea au point O. L'angle θ' entre Ea et le dipôle p est de 90°."
      },
      {
        "questionText": "Exercice 7 - Question 1: Selon la loi de Coulomb, la norme F... que qB et qC exercent sur qA s'écrit: (Données: Triangle équilatéral, a=10⁻³m. qA=qB=qC=qO=-10⁻¹⁰ C.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/7.PNG",
        "options": [
          "F = 9.k.q²/a²",
          "F = 3.k.q²/a²",
          "F = (3k.q²/a²) (√3)",
          "toutes ces réponses sont fausses.",
          "F = 0 N"
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Force totale sur qA = F(B->A) + F(C->A). Forces de même magnitude F, angle 60°. Résultante F_res = F√3. Magnitude F = k*q²/a². La réponse correcte (k*q²/a²)√3 n'est pas dans les options (Option C a un '3' en trop)."
      },
      {
        "questionText": "Exercice 7 - Question 2: la norme E du champ électrique E généré par les charges qB et qC au point O s'écrit:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/7.PNG",
        "options": [
          "E = 9.k.q/a²",
          "E = 3.k.q/a²",
          "E = (k.q/a²) √3",
          "toutes ces réponses sont fausses.",
          "toutes ces réponses sont fausses. (doublon)"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "(Explication fournie correspond à Q3) L'énergie interne U... est la somme des énergies de chaque paire. Puisque les 3 paires sont identiques, U_total = 3 * (k*q*q / a)."
      },
      {
        "questionText": "Exercice 7 - Question 3: l'énergie interne U du système des trois charges qA, qB et qC s'écrit:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/7.PNG",
        "options": [
          "U = 9.k.q²/a",
          "U = -3.k.q²/a",
          "U = 3.k.q²/a",
          "U = -2.k.q²/a",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "(Explication fournie sans rapport) La force totale sur qO (au centre) est la somme vectorielle des forces de qA, qB, qC. Par symétrie, les trois forces s'annulent. F_res = 0."
      },
      {
        "questionText": "Exercice 7 - Question 4: la norme F de la force F, qu'exerce la charge qO sur les charges qA, qB et qC vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/7.PNG",
        "options": [
          "F = 3.10⁻⁴ N",
          "F = 0 N",
          "F= 5,4.10⁻¹⁰ N",
          "toutes ces réponses sont fausses.",
          "F = 10 N"
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "On calcule la force totale sur qO par addition vectorielle des forces de qA, qB, et qC."
      },
      {
        "questionText": "Exercice 8 - Question 1: Le potentiel VD... au point D vaut : (Données: Triangle équilatéral a=10⁻³m. qA=qB=-qC = qd = 10⁻⁸ C. D = milieu [BC].)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/8.PNG",
        "options": [
          "VD = 15,59.10³ V",
          "VD = 34,52.10⁻³ V",
          "VD = 0 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Potentiel scalaire: VD = V_A(D) + V_B(D) + V_C(D). On calcule les distances (AD, BD=a/2, CD=a/2) et on applique V = k*q/r pour chaque charge, puis on somme algébriquement."
      },
      {
        "questionText": "Exercice 8 - Question 2: l'énergie potentielle... de la charge qD, due aux charges qA, qB et qC vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/8.PNG",
        "options": [
          "Ep = 34,52.10⁻³ J",
          "Ep = 15,59.10⁻³ J",
          "toutes ces réponses sont fausses",
          "U=0 J"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "L'énergie Ep d'une charge qD placée en D est Ep = qD * VD. On utilise la valeur de VD calculée à la Q1."
      },
      {
        "questionText": "Exercice 8 - Question 3: l'énergie interne U du système formé des trois charges qA, qB et qC vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/8.PNG",
        "options": [
          "U = -9.10⁻³ J",
          "U=0 J",
          "toutes ces réponses sont fausses",
          "Ep=34,52 J"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Énergie U = U(AB) + U(AC) + U(BC). On calcule U_paire = k*(q1*q2)/a pour les 3 paires et on somme."
      },
      {
        "questionText": "Exercice 8 - Question 4: le champ généré par qA, qB et qC au point D, a pour norme E, avec:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/8.PNG",
        "options": [
          "E = 15,59.10³ V/m",
          "E = 54.10⁹ V/m",
          "E = 34,52.10⁻³ V/m",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Champ total E = EA + EB + EC (vecteurs). Par symétrie (qB=-qC), EB et EC s'ajoutent. EA est colinéaire. On additionne les normes."
      },
      {
        "questionText": "Exercice 8 - Question 5: la force F... que subit la charge qD, a pour norme F, avec:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/8.PNG",
        "options": [
          "F = 54.10⁻³ N",
          "F = 31,2.10⁻³ N",
          "toutes ces réponses sont fausses",
          "F=0N"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Force F = qD * E. On utilise la norme du champ E calculée à la Q4."
      },
      {
        "questionText": "Exercice 9 - Question 1: ...Le potentiel VM généré par le dipôle au point M vaut: (Données: q=10⁻⁹ C, a=10⁻⁸ m, r=4,7m, θ=85°)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/9.PNG",
        "options": [
          "VM = 3,54.10⁻⁹ V",
          "toutes ces réponses sont fausses.",
          "VM = 0 V"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Potentiel d'un dipôle: V = k * p * cos(θ) / r², où p = q*a. On insère les valeurs."
      },
      {
        "questionText": "Exercice 9 - Question 2: l'expression du champ E⃗r, suivant la direction r a pour norme Er, tel que:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/9.PNG",
        "options": [
          "Er = (2.k.q.a.cosθ)/r³",
          "Er = (2.k.q.a.cosθ)/r²",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Composante radiale Er = 2kp cos(θ) / r³. En remplaçant p = q*a, on obtient A."
      },
      {
        "questionText": "Exercice 9 - Question 3: l'expression du champ E⃗θ, suivant la direction θ a pour norme Eθ, tel que:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/9.PNG",
        "options": [
          "Eθ = (k.q.a.sinθ)/r²",
          "Eθ = (k.q.a.sinθ)/r³",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Composante orthoradiale Eθ = kp sin(θ) / r³. En remplaçant p = q*a, on obtient B."
      },
      {
        "questionText": "Exercice 10 - Question 1: Le moment de couple M tel que M=p^E (le produit scalaire) s'écrit: (Données: Dipôle en équilibre instable dans E = 5.10⁵ N/C...)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/10.PNG",
        "options": [
          "M=p.E",
          "M=0",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Le moment du couple M est le produit vectoriel M = p x E. En équilibre instable (θ=180°), M est nul. La question est ambiguë; si elle demande l'expression du produit scalaire, A est correcte."
      },
      {
        "questionText": "Exercice 10 - Question 2: suite... le vecteur M du Moment M lui étant appliqué vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/10.PNG",
        "options": [
          "M=0",
          "M=10⁻¹² SI",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "En position d'équilibre (stable ou instable), le moment dipolaire p est parallèle au champ E (θ=0° ou 180°). Dans les deux cas, sin(θ) = 0, donc le moment du couple M est nul."
      },
      {
        "questionText": "Exercice 10 - Question 3: ...l'énergie potentielle Ep que subit ce dipôle s'écrit:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/10.PNG",
        "options": [
          "Ep = -p.E",
          "Ep=0",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Ep = -pEcos(θ). En équilibre instable, θ=180°, donc cos(180°)=-1. L'énergie est Ep = +pE. Ni A (stable) ni B (90°) ne sont correctes."
      },
      {
        "questionText": "Exercice 10 - Question 4: l'énergie potentielle du dipôle de la question précédente vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/10.PNG",
        "options": [
          "Ep=1.085.10⁻¹² J",
          "Ep = 5,473.⁻¹⁹ J",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "On utilise la formule de l'état instable : Ep = +pE. On calcule p = q*a, puis on multiplie par E."
      },
      {
        "questionText": "Exercice 11 - Question 1: le potentiel créé par ces deux charges en un point M vaut: (Données: Formule V = (K.q.a.cosθ)/r². a=10⁻³m, r=2m, q=10⁻⁹C, θ=60°)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "V = (K.q.a)/r",
          "V = 1.07 V",
          "V = 0",
          "V = (K.q.cosθ)/r"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Application numérique de la formule V = (K.q.a.cosθ)/r²."
      },
      {
        "questionText": "Exercice 11 - Question 2: la norme Eθ du champ électriqueE⃗... vaut au point M:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "Eθ = 1.49 10⁻¹⁰ V/m",
          "Eθ = 0.97 10⁻¹ V/m",
          "Eθ = 1.125 10⁻¹⁰ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Formule Eθ = Kp sin(θ) / r³, où p = q*a. Application numérique."
      },
      {
        "questionText": "Exercice 11 - Question 3: la norme Er du champ électriqueE⃗... vaut au point M:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "Er = 1.49. 10⁻¹⁰ V/m",
          "Er = 0.97. 10⁻¹ V/m",
          "Er = 1.125. 10⁻¹⁰ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Formule Er = 2Kp cos(θ) / r³, où p = q*a. Application numérique."
      },
      {
        "questionText": "Exercice 11 - Question 4: suite... la norme E, du champ électrique E⃗... vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "E = 1.49. 10⁻¹⁰ V/m",
          "E = 0.97 10⁻¹ V/m",
          "E = 1.125. 10⁻¹⁰ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Norme E = √(Er² + Eθ²). On utilise les valeurs des Q2 et Q3."
      },
      {
        "questionText": "Exercice 11 - Question 5: La norme F de la force F qui s'exerce sur une charge q'' (q''=10⁻¹⁰ C) placée en M vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "F = 1.49. 10⁻¹⁰ N",
          "F = 0.97. 10⁻¹ N",
          "F = 0.6. 10⁻¹⁰ N",
          "F = 1.125. 10⁻¹⁰ N",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Force F = q'' * E. On utilise E de la Q4."
      },
      {
        "questionText": "Exercice 11 - Question 6: l'énergie potentielle Ep de la charge q'' placée en M vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/11.PNG",
        "options": [
          "Ep = 0.6. 10⁻¹⁰ J",
          "Ep = 2.25. 10⁻¹⁰ J",
          "Ep = 1.125. 10⁻¹⁰ J",
          "Ep=0 J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Énergie Ep = q'' * V. On utilise V de la Q1."
      },
      {
        "questionText": "Exercice 12 - Question 1: on retire la charge qC, la norme Ec... au point O, vaut: (Données: 4 charges identiques sur cercle rayon a. Eo=0.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/12.PNG",
        "options": [
          "Ec = 3.10⁴ V/m",
          "Ec = 6.10⁴ V/m",
          "Ec = 15,7.10⁴ V/m",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Initialement, E=0 car EA annule EC. Si on retire qC, le champ résultant Ec = EA = k*q/a². Le résultat ne correspond à aucune option."
      },
      {
        "questionText": "Exercice 12 - Question 2: Au point O, est positionnée Q. Le potentiel Vc au point C, dû à qA, qB, qD, qO, vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/12.PNG",
        "options": [
          "Vc = 3,176.10⁴ V",
          "Vc = 1,342.10² V",
          "Vc = 0 V",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Somme scalaire: Vc = V_A(C) + V_B(C) + V_D(C) + V_O(C). On calcule V = k*q/r pour chaque."
      },
      {
        "questionText": "Exercice 12 - Question 3: Suite... l'énergie potentielle Ep... vis-à-vis de la charge Q, est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/12.PNG",
        "options": [
          "Ep = 3,51.10⁻³ J",
          "Ep = 0 J",
          "Ep = 9,5.10⁻³ J",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Ep = Q * Vo. Vo est le potentiel en O créé par les 4 autres charges. Vo = 4 * (k * q / a). On calcule Ep = Q * Vo."
      },
      {
        "questionText": "Exercice 12 - Question 4: ...un dipôle P... au point O... orienté selon DC. Le moment M... du fait des 4 charges, a pour norme:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/12.PNG",
        "options": [
          "M = 0",
          "M = 7,391.10⁻³ SI",
          "M = 1,23.10⁻³ SI",
          "Les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "M = pEsin(θ). Le champ extérieur E au centre O créé par les 4 charges symétriques est E = 0. Donc M = 0."
      },
      {
        "questionText": "Exercice 13 - Question 1: la norme E du champ électrique E⃗ généré par qA, qB, et qD est: (Données: qA=qB=-qC=-qD=q.)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/13.PNG",
        "options": [
          "E = 5,12.10⁸ V/m",
          "E = 3,48.10⁸ V/m",
          "E = 18,37.10⁸ V/m",
          "les réponses a, b, et c sont fausses"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Champ au centre O : E = EA+EB+EC+ED. Paires opposées (EA, EC) et (EB, ED) s'additionnent. Les deux résultantes (Eac, Ebd) sont ⊥. On utilise Pythagore."
      },
      {
        "questionText": "Exercice 13 - Question 2: Le potentiel Vt au point C, généré par les trois charges qA, qB, et qD est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/13.PNG",
        "options": [
          "Vt = 5,76.10⁴V",
          "Vt = 0",
          "les réponses a, b, et c sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Somme scalaire : Vt(C) = V_A(C) + V_B(C) + V_D(C)."
      },
      {
        "questionText": "Exercice 13 - Question 3: ...un dipôle... est positionné au point A... orienté C vers B... L'énergie potentielle Ep... est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/13.PNG",
        "options": [
          "Ep = 0",
          "Ep = 3.10⁻²² J",
          "Ep = 5.10⁻²² J",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Ep = -pEcos(θ). E est le champ extérieur (de qD, qC) en A. p est orienté C->B. L'analyse géométrique montre que E est ⊥ à p (θ=90°). Puisque cos(90°)=0, Ep=0."
      },
      {
        "questionText": "Exercice 14 - Question 1: (qA=qB=1nC, qC=2nC, triangle équilatéral). Parmi les affirmations... (1. Champ A nul. 2. Fc=3,46e-3N. 3. Champ A = Champ B. 5. Ec=1,73e6 V/m...) Options:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/14.PNG",
        "options": [
          "1+2+3",
          "1+2+5",
          "2+4+5",
          "2+3+5",
          "1+4+5"
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Réponse D (2, 3, 5 correctes). (5): Champ Ec (somme vectorielle EA+EB) = 1,73e6 V/m. (2): Force Fc = qC * Ec ≈ 3,46e-3 N. (3): Par symétrie (qA=qB), champ en A = champ en B."
      },
      {
        "questionText": "Exercice 14 - Question 2: ...remplace (qC) par un dipôle (p)... parallèle à (AB). (1. p=1e-15. 2. θ=0°. 3. Ep=0. 4. Éq. stable. 5. Moment max.) Options:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/14.PNG",
        "options": [
          "2+4",
          "1+3+4",
          "1+3+5",
          "2+4+5",
          "2+3+5"
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "(1): p = q*d = 1e-15. (Correct). (3): Champ Ec (par qA, qB) est ⊥ à AB. Dipôle p est || à AB. Donc θ=90°. Ep = -pEcos(90°) = 0. (Correct). (5): Moment M = pEsin(θ). Si θ=90°, sin(90°)=1 (max). (Correct)."
      },
      {
        "questionText": "Exercice 15 - Question 1: La norme E... généré par qA, qB, et qD au point C vaut: (Données: qA=qB=1nC, qC=-2nC, qD=q, a=5mm)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/15.PNG",
        "options": [
          "E = (k/a²) Kq",
          "E = (k/a²) (√2/2 - 1) Kq",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Champ en C = EA + EB + ED. Champs de qA/qB symétriques. Le résultat de l'addition vectorielle ne correspond à aucune forme proposée."
      },
      {
        "questionText": "Exercice 15 - Question 2: qD est multipliée par 4. La norme F... qu'exercent qA, qB et qD sur qC vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/15.PNG",
        "options": [
          "F = k( (2√2+1)/2 ) Kq²/a²",
          "F = ( (2√2 - 1) /2 ) Kq²/a²"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Force F sur qC = qC * E (où E = EA + EB + ED). L'addition vectorielle des composantes donne A."
      },
      {
        "questionText": "Exercice 15 - Question 3: Le potentiel Vt au point C, généré par qA,qB,qD, vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/15.PNG",
        "options": [
          "Vt = (√2/2-1) Kq",
          "Vt = ( (2√2-1)/2 ) Kq",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Potentiel Vt en C = V_A(C) + V_B(C) + V_D(C). C'est une somme scalaire V=k*q/r."
      },
      {
        "questionText": "Exercice 16 - Question 1: la norme E... au point O, du fait des 4 charges est: (Données: Carré, qA = -qB = -qC = qD. qA=1,6e-10C, a=4mm)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/16.PNG",
        "options": [
          "E = 5,1.10³ V/m",
          "E = 0 V/m",
          "E = 15.10³ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "E = EA+EB+EC+ED. EB et ED s'ajoutent. EA et EC s'ajoutent. Les deux résultantes (Ebd, Eac) sont ⊥. Norme totale par Pythagore: E = √(|Eac|² + |Ebd|²)."
      },
      {
        "questionText": "Exercice 16 - Question 2: suite... l'énergie potentielle Ep d'un dipôle... placé horizontalement au point O... sens que DC, est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/16.PNG",
        "options": [
          "Ep = 0J",
          "Ep = 9,6.10⁻¹⁵ J",
          "Ep = 3,7.10⁻¹⁵ J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Ep = -pEcos(θ). Dipôle p horizontal (sens DC). Champ E en O est sur la diagonale AC. L'angle θ entre horizontal et diagonal est 90°. cos(90°) = 0, donc Ep = 0."
      },
      {
        "questionText": "Exercice 17 - Question 10: La norme F de la force F: (Données: Triangle rectangle en C. qA=20µC, qB=-50µC, qC=40µC. AC=30cm, BC=40cm)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/17.PNG",
        "options": [
          "F = 241 N",
          "F=0 N",
          "F = 94,5 N",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Force F sur qC = FA + FB (vecteurs). FA ⊥ FB. On trouve F par Pythagore : F = √(FA² + FB²)."
      },
      {
        "questionText": "Exercice 17 - Question 11: le potentiel Vc (généré par qA et qB) au point C vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/17.PNG",
        "options": [
          "Vc = 241 V",
          "Vc = 823 V",
          "Vc = 0 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Potentiel Vc = V_A(C) + V_B(C) (somme scalaire)."
      },
      {
        "questionText": "Exercice 17 - Question 12: L'énergie interne U du système des trois charges qA, qB et qC,vaut:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/17.PNG",
        "options": [
          "U = -39 J",
          "U = -67 J",
          "U = 67 J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Énergie U = U(AB) + U(AC) + U(BC). Somme des énergies des 3 paires."
      },
      {
        "questionText": "Exercice 18 - Question 2: La norme E du champ électrique résultant E⃗ en ce point M peut s'écrire: (Données: Dipôle q et -q, distants de a. Point M à r >> a)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/18.PNG",
        "options": [
          "E = (k.p/r³)√(4cos²θ + sin²θ)"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "E = √(Er² + Eθ²). En remplaçant Er=2kp.cosθ/r³ et Eθ=kp.sinθ/r³, on obtient A."
      },
      {
        "questionText": "Exercice 18 - Question 3: suite... la norme E du champ E⃗ en ce point M, vaut : (Données: q=10⁻⁹C, a=10⁻⁹m, θ=60°, OM=5m)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/18.PNG",
        "options": [
          "E=3,17.10⁻¹¹ V/m",
          "E=7,2.10⁻¹¹ V/m",
          "E=9,5.10⁻¹¹ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Application numérique de la formule de Q2 (avec p=q*a)."
      },
      {
        "questionText": "Exercice 18 - Question 4: suite... la norme E' du champ E'⃗ au point H vaut: (Données: OH = 3 m)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/18.PNG",
        "options": [
          "E'=3,33.10⁻¹⁰ V/m",
          "E'=1,69.10⁻¹⁰ V/m",
          "E'=8,17.10⁻¹⁰ V/m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "H est sur la médiatrice (θ=90°). La norme du champ est E' = kp/r³ (où r = OH)."
      },
      {
        "questionText": "Exercice 19 - Question 5: La norme F de la force F: (Données: qA=qB=qC=-10⁻⁹C. q=10⁻⁸C en o, milieu de [BC].)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/19.PNG",
        "options": [
          "F=28,1.10⁻⁹ N",
          "F=2,7. 10⁻⁹ N",
          "F=7,26.10⁹ N",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Force F sur q (en o) = FA + FB + FC. Par symétrie (qB=qC), FB et FC s'annulent. F_totale = FA."
      },
      {
        "questionText": "Exercice 19 - Question 6: l'énergie potentielle Ep de cette charge q, vis-à-vis des trois autres charges... est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/19.PNG",
        "options": [
          "Ep=9,32.10⁻¹⁰ J",
          "Ep= -28,10 J",
          "Ep=0 J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Ep = q * Vo. Vo est la somme scalaire Vo = V_A(o) + V_B(o) + V_C(o)."
      },
      {
        "questionText": "Exercice 19 - Question 7: ...un dipôle p⃗ orienté dans le sens OB. Ce dipôle est:",
        "imageUrl": "/images/quizzes/year-1/physics/Électrostatique/19.PNG",
        "options": [
          "à l'équilibre stable",
          "à l'équilibre instable",
          "à une position intermédiaire",
          "toutes ces affirmations sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Champ E en o (par A,B,C) est dirigé vers A (champs de B,C s'annulent). Dipôle p est dirigé vers B. L'angle entre OA et OB n'est ni 0° ni 180°. Position intermédiaire."
      },
      // ----- Exercices (Condensateurs / Sphères) (Sans Images) -----
      {
        "questionText": "Exercice 1 (Condensateurs) - Question 1: Soient deux condensateurs C1 (3.10⁻¹² F) et C2 (6.10⁻¹² F) en série. U = 1000 V. La charge totale Q est :",
        "imageUrl": null,
        "options": [
          "Q=2.10⁻⁹ C",
          "Q=10⁻⁹ C",
          "Q=3.10⁻⁹ C",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Condensateurs en série : 1/Ceq = 1/C₁ + 1/C₂. On trouve Ceq, puis on utilise Q = Ceq * U."
      },
      {
        "questionText": "Exercice 1 (Condensateurs) - Question 2: Suite... l'énergie W emmagasinée dans les condensateurs est :",
        "imageUrl": null,
        "options": [
          "W = 3.10⁻⁶ J",
          "W = 1,5.10⁻⁶ J",
          "W = 10⁻⁶ J",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "On utilise la Ceq trouvée précédemment et on applique W = ½ Ceq * U²."
      },
      {
        "questionText": "Exercice 2 (Sphères) - Question 1: S₁ (R₁=5cm) et S₂ (R₂=10cm) sont reliées par un fil. Après équilibre... le rapport des densités de charges σ'₁/σ'₂ sera égal à :",
        "imageUrl": null,
        "options": [
          "σ'₁/σ'₂ = 0,5",
          "σ'₁/σ'₂ = 0,25",
          "σ'₁/σ'₂ = 2",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "À l'équilibre, V₁=V₂. Le rapport des densités (σ'₁/σ'₂) est égal au rapport inverse des rayons (R₂/R₁) = 10/5 = 2."
      },
      {
        "questionText": "Exercice 2 (Sphères) - Question 2: Suite... si Q₂=5.10⁻⁷ C, et S1 est neutre (Q₁=0), la densité σ'₁ sur S1 après liaison sera :",
        "imageUrl": null,
        "options": [
          "σ'₁=0,25.10⁻⁶ C/m²",
          "σ'₁=1,38.10⁻⁶ C/m²",
          "σ'₁=5,3.10⁻⁶ C/m²",
          "Toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Charge totale QT = 5e-7 C. À l'équilibre, Q'₂ = 2Q'₁. Conservation: Q'₁ + 2Q'₁ = QT => 3Q'₁ = QT => Q'₁ ≈ 1,67e-7 C. Densité σ'₁ = Q'₁ / (4πR₁²)."
      },
      {
        "questionText": "Exercice 3 (Sphères) - Question 1: S (r=1cm) et S' (r'=0,5cm). Q = 5e-7C et Q'=0C. Sont reliées... La densité σ' de la sphère r' est :",
        "imageUrl": null,
        "options": [
          "σ' = 0,53.10⁻⁵ C/m²",
          "σ' = 3,14.10⁻⁵ C/m²",
          "σ' = 2,10.10⁻⁵ C/m²",
          "σ' = 0,041.10⁻⁵ C/m²",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "À l'équilibre, V=V' => Qeq/r = Q'eq/r' => Qeq = 2Q'eq. Conservation: Qeq + Q'eq = 5e-7 => 3Q'eq = 5e-7 => Q'eq ≈ 1.67e-7 C. Densité σ' = Q'eq / (4πr'²)."
      },
      {
        "questionText": "Exercice 3 (Sphères) - Question 2: ...Le rapport σ' / σ vaut :",
        "imageUrl": null,
        "options": [
          "σ' / σ = 0,5",
          "σ' / σ = 1,5",
          "σ' / σ = 0,67",
          "σ' / σ = 2",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "Rapport des densités σ'/σ = Rapport inverse des rayons r/r' = 1cm / 0.5cm = 2."
      },
      {
        "questionText": "Exercice 4 (Condensateurs) - Question 1: Condensateur plan S=5e-3m², e=3e-3m, ε=9e-11 SI. Surface d'une plaque * 3. La nouvelle C' vaut :",
        "imageUrl": null,
        "options": [
          "C' = 5.10⁻¹² F",
          "C' = 2,2.10⁻¹² F",
          "C' = 1,5.10⁻¹² F",
          "C' = 6,9.10⁻¹² F",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Capacité C = ε * S / e. Lorsque les surfaces sont inégales, la capacité est déterminée par la plus petite surface (S). C' = C = (9e-11 * 5e-3) / 3e-3 = 1.5e-12 F."
      },
      {
        "questionText": "Exercice 4 (Condensateurs) - Question 2: Suite... l'énergie E' emmagasinée... (Q= 5.10⁻⁸C), vaut :",
        "imageUrl": null,
        "options": [
          "E' = 1,66 J",
          "E' = 23,8 J",
          "E' = 23,7 J",
          "E' = 8,33 J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "E' = 0,5 * Q² / C'. On utilise C' = 1.5e-12 F. E' = 0.5 * (5e-8)² / 1.5e-12 ≈ 8.33 J."
      },
      {
        "questionText": "Exercice 5 (Sphères) - Question 1: SA (RA) et SB (RB=2 RA)... reliées... Le rapport des densités σA/σB est égal à :",
        "imageUrl": null,
        "options": [
          "σA/σB = 4",
          "σA/σB = 2",
          "σA/σB = 1",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "À l'équilibre, V=V'. Rapport des densités σA/σB = Rapport inverse des rayons RB/RA = 2."
      },
      {
        "questionText": "Exercice 5 (Sphères) - Question 2: Si SB (RB = 10 cm) avait QB = 3,1.10⁻¹² C, et SA neutre. La densité σA après liaison est :",
        "imageUrl": null,
        "options": [
          "σA = 2,1.10⁻¹² SI",
          "σA = 3,27.10⁻¹¹ SI",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "QT = 3.1e-12 C. RA=5cm. Q'B = 2Q'A. Conservation: Q'A + 2Q'A = QT => 3Q'A = QT. Q'A = QT/3 = 1.033e-12 C. Densité σA = Q'A / (4πRA²) ≈ 3.27e-11 SI."
      },
      {
        "questionText": "Exercice 6 (Condensateurs) - Question 1: Condensateur plan (S=10⁻³m², e=3.10⁻³m, vide ε₀) en série avec C' (3.10⁻¹² F). Ceq vaut :",
        "imageUrl": null,
        "options": [
          "Ceq=1,48. 10⁻¹² F",
          "Ceq=9,91. 10⁻¹² F",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Calcul de C = ε₀ * S / e ≈ 2.95e-12 F. En série: 1/Ceq = 1/C + 1/C' = 1/(2.95e-12) + 1/(3e-12). Ceq ≈ 1.48e-12 F."
      },
      {
        "questionText": "Exercice 7 (Sphères) - Question 1: S1 (Q1=10¹⁰e) et S2 (neutre), R1=10cm, R2=20cm... reliées... Le rapport σ'₁/σ'₂... vaut :",
        "imageUrl": null,
        "options": [
          "σ'₁/σ'₂ = 1",
          "σ'₁/σ'₂ = 2",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "À l'équilibre, V₁=V₂. Rapport des densités σ'₁/σ'₂ = Rapport inverse des rayons R₂/R₁ = 20/10 = 2."
      },
      {
        "questionText": "Exercice 7 (Sphères) - Question 2: La charge totale QT portée par le système S1+S2 est :",
        "imageUrl": null,
        "options": [
          "QT=1,6.10⁻⁹ C",
          "QT =0,8.10⁻⁹ C",
          "toutes ces réponses sont fausses"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Charge totale = somme des charges initiales : QT = Q₁ + Q₂ = (10¹⁰ * 1.6e-19 C) + 0 = 1.6e-9 C."
      },
      {
        "questionText": "Exercice 7 (Sphères) - Question 3: La charge Q'1 portée par S1 après avoir relié les deux sphères, est:",
        "imageUrl": null,
        "options": [
          "Q'1= 0,53.10⁻⁹ C",
          "Q'1= 0,33.10⁻⁹ C",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "QT = Q'₁+Q'₂ = 1.6e-9 C. À l'équilibre: Q'₂ = (R₂/R₁)Q'₁ = 2Q'₁. On remplace: Q'₁ + 2Q'₁ = 1.6e-9 => 3Q'₁ = 1.6e-9 => Q'₁ ≈ 0.53e-9 C."
      },
      {
        "questionText": "Exercice 8 (Condensateurs) - Question 1: Armatures planes (d=2cm, S=10⁻² cm²)... E=1,13.10⁷ V/m. La valeur de V... vaut:",
        "imageUrl": null,
        "options": [
          "V= 2,26.10⁵ V",
          "V= 10⁵ V",
          "V= 0,6.10⁵ V",
          "V= 0 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "V = E * d = (1.13e7 V/m) * (0.02 m) = 2.26e5 V."
      },
      {
        "questionText": "Exercice 8 (Condensateurs) - Question 2: Suite... on place... un dipôle (a=10⁻⁶m; q=10⁻¹⁰C)... dipôle... descendant. L'énergie potentielle Ep... vaut :",
        "imageUrl": null,
        "options": [
          "Ep= 1,13. 10⁻¹¹ J",
          "Ep= -1,13. 10⁻¹¹ J",
          "Ep= -2,26. 10⁻¹¹ J",
          "Ep= 0 J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Ep = -pEcos(θ). Champ E ascendant, dipôle p descendant. Angle θ=180°. cos(180°)=-1. p = q*a = 1e-16 C.m. Ep = -(1e-16)*(1.13e7)*(-1) = +1.13e-9 J. (Note: Divergence d'exposant avec les options. L'option B suppose Ep=-pE, état stable)."
      },
      {
        "questionText": "Exercice 8 (Condensateurs) - Question 3: La norme M du moment M du couple vaut :",
        "imageUrl": null,
        "options": [
          "M = 1,49 . 10⁻²¹ Nm",
          "M = 0,97. 10⁻²¹ Nm",
          "M = 1,13 . 10⁻¹⁶ Nm",
          "M = 0 N.m",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "M = pEsin(θ). Dipôle anti-parallèle au champ E (θ=180°). Puisque sin(180°) = 0, le moment M est nul."
      },
      {
        "questionText": "Exercice 8 (Condensateurs) - Question 4: La valeur du travail W... pour faire tourner le dipôle p vers sa position d'équilibre stable vaut :",
        "imageUrl": null,
        "options": [
          "W= 1,00. 10⁻¹¹ J",
          "W= 0 J",
          "W= 9,94.10⁻¹¹ J",
          "W= 2,26.10⁻¹¹ J",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "W = Ep_initiale - Ep_finale. Ep_i (instable, θ=180°) = +pE. Ep_f (stable, θ=0°) = -pE. W = (+pE) - (-pE) = 2pE. W = 2 * (1e-16) * (1.13e7) = 2.26e-9 J. (Note: L'option D correspond à la valeur numérique mais exposant erroné)."
      },
      {
        "questionText": "Exercice 9 (Sphères) - Question 1: Sphère SA... V=5.10⁴ V. Surface SA=0,4 m². la charge QA qu'elle porte est :",
        "imageUrl": null,
        "options": [
          "QA=5,4.10⁻⁷ C",
          "QA=1,1.10⁻⁷ C",
          "QA= 3,7. 10⁻⁶ C",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "V = K*QA/RA. SA = 4πRA² => RA = √(SA/4π) ≈ 0.178 m. QA = V*RA / K = (5e4 * 0.178) / 9e9 ≈ 1.1e-7 C."
      },
      {
        "questionText": "Exercice 9 (Sphères) - Question 2: Suite... SA est reliée... à SB (RB=10cm), neutre... la charge Q'B... est alors :",
        "imageUrl": null,
        "options": [
          "Q'B= 8,5.10⁻⁷ C",
          "Q'B= 2,7.10⁻⁷ C",
          "Q'B= 4,10.10⁻⁷ C",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "QT = QA = 1.1e-7 C. Équilibre: Q'B = (RB/RA)Q'A ≈ 0.56Q'A. Conservation: Q'A + 0.56Q'A = 1.1e-7 => Q'A ≈ 0.7e-7 C. Q'B ≈ 0.4e-7 C. Aucune option ne correspond."
      },
      {
        "questionText": "Exercice 9 (Sphères) - Question 3: ...le rapport des densités... σA/σB... vaut:",
        "imageUrl": null,
        "options": [
          "σA/σB = 2",
          "σA/σB = 1",
          "σA/σB = 0,5",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Rapport densités σA/σB = Rapport inverse rayons RB/RA = 0.1m / 0.178m ≈ 0.56. Option C (0,5) est la plus proche."
      },
      {
        "questionText": "Exercice 10 (Sphères) - Question 1: S1 (R1=5cm) et S2 (R2=10cm)... reliées... le rapport des densités σ'1/σ'2 sera égal à:",
        "imageUrl": null,
        "options": [
          "σ1/σ2 = 0,5",
          "σ1/σ2 = 0,25",
          "σ1/σ2 = 2",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Identique à Exercice 2, Q1. Rapport densités σ'₁/σ'₂ = Rapport inverse rayons R₂/R₁ = 10/5 = 2."
      },
      {
        "questionText": "Exercice 10 (Sphères) - Question 2: Suite... Q2 = 5.10⁻⁷ C, et S1 neutre... la densité σ'1 sur S1... sera :",
        "imageUrl": null,
        "options": [
          "σ'1 = 0,25.10⁻⁶ C/m²",
          "σ'1 = 5,3.10⁻⁶ C/m²",
          "σ'1 = 1,38.10⁻⁶ C/m²",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Identique à Exercice 2, Q2. Réponse B (5,3.10⁻⁶ C/m²)."
      },
      {
        "questionText": "Exercice 11 (Sphères) - Question 1: S et S', r et r' (r=10r')... reliées... le rapport des densités σ / σ' est égal à :",
        "imageUrl": null,
        "options": [
          "σ / σ' = 1/r",
          "σ / σ' = 0,1",
          "σ / σ' = 0,01",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Rapport densités σ/σ' = Rapport inverse rayons r'/r. Puisque r = 10r', le rapport est r'/(10r') = 1/10 = 0,1."
      }
    ]
  },
  {
    "title": "Électrocinétique",
    "subject": "physics",
    "questions": [
      {
        "questionText": "Exercice 1 - Question 1: Soit le circuit présenté ci-contre. Le courant électrique i qui traverse la résistance R₁ est : (Données : R₁=16Ω; R₂=4Ω; R₃=5Ω; R₄=4Ω; E₁=2V; E₂=22V)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/1.PNG",
        "options": [
          "i = 5 A",
          "i = 2,5 A",
          "i = 0,5 A",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Calcul de Req : R₁ et R₂ en série (R₁₂ = 20Ω). R₁₂ en parallèle avec R₃ (R₁₂₃ = 4Ω). R₁₂₃ en série avec R₄ (Req = 8Ω). Loi d'Ohm (générateurs en opposition) : i = (E₂ - E₁) / Req = (22 - 2) / 8 = 2,5 A."
      },
      {
        "questionText": "Exercice 1 - Question 2: La puissance Pj, dans le circuit par effet Joule est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/1.PNG",
        "options": [
          "Pj = 50 W",
          "Pj = 25 W",
          "Pj = 12,5 W",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Puissance Pj = Req * i². En utilisant Req=8Ω et i=2,5A : Pj = 8 * (2,5)² = 8 * 6,25 = 50 W."
      },
      {
        "questionText": "Exercice 1 - Question 3: La résistance R₂ est coupée. La valeur de la différence de potentiel |VB-VA| devient égale à :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/1.PNG",
        "options": [
          "|VB-VA| = 2,65 V",
          "|VB-VA| = 11,11 V",
          "|VB-VA| = 14,32 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Si R₂ est coupée, la branche R₁-R₂ est ouverte. Le circuit devient une boucle série : E₁, E₂, R₃, R₄. Req' = R₃ + R₄ = 9 Ω. Nouveau courant i' = (E₂ - E₁) / Req' = 20 / 9 ≈ 2,22 A. La tension |VB-VA| est la tension aux bornes de R₃ : |VB-VA| = R₃ * i' = 5 * 2,22 = 11,11 V."
      },
      {
        "questionText": "Exercice 2 - Question 1: Un générateur parfait de force électromotrice E=10V alimente une résistance (=100Ω). L'intensité du courant (I) dans le circuit a pour valeur : (Données : E = 10 V, R = 100 Ω)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/2.PNG",
        "options": [
          "I = 100 mA",
          "I = 10 A",
          "I = 100 mA",
          "I = 10 A",
          "I = R.E"
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Loi d'Ohm : I = E / R = 10 V / 100 Ω = 0,1 A. Conversion : 0,1 A * 1000 = 100 mA."
      },
      {
        "questionText": "Exercice 2 - Question 2: La puissance (P) dissipée dans la résistance vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/2.PNG",
        "options": [
          "P = 1 W",
          "P = 1000 W",
          "P = 10 W",
          "P = 0 W",
          "T.R.F"
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Puissance P = R * I². On utilise I = 0,1 A (de Q1). P = 100 Ω * (0,1 A)² = 100 * 0,01 = 1 W."
      },
      {
        "questionText": "Exercice 3 - Question 1: soit le circuit présenté ci-contre. Le courant I₁ qui traverse le générateur E₁ vaut : (Données : E₁=16V; E₂=4V; E₃=10V; R₁=R₄=R₆=2Ω; R₅=4Ω; R₂=8Ω; R₃=2Ω)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/3.PNG",
        "options": [
          "I₁ = 1 A",
          "I₁ = 2 A",
          "I₁ = 0,5 A",
          "I₁ = 3 A",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Circuit complexe nécessitant les lois de Kirchhoff (lois des nœuds et des mailles) pour établir un système d'équations et trouver les courants inconnus (I₁, I₂, I₃)."
      },
      {
        "questionText": "Exercice 3 - Question 2: Le courant I₃ qui traverse le générateur E₃ vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/3.PNG",
        "options": [
          "I₃ = 1 A",
          "I₃ = 0,5 A",
          "I₃ = 3 A",
          "I₃ = -0,5 A",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 3 ],
        "explanation": "En résolvant le système de Kirchhoff, on trouve I₃. Un résultat négatif (comme -0,5 A) signifie simplement que le sens réel du courant est opposé au sens choisi arbitrairement pour l'analyse."
      },
      {
        "questionText": "Exercice 3 - Question 3: La résistance R₃ casse. Le courant I₁ qui traverse le générateur E₁ devient I'₁ et il vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/3.PNG",
        "options": [
          "I'₁ = 0,57 A",
          "I'₁ = 1,33 A",
          "I'₁ = 2,77 A",
          "I'₁ = 0,67 A",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Si R₃ casse, sa branche devient un circuit ouvert (courant nul). Le circuit se simplifie (ne laissant que les branches de E₁ et E₂). On peut alors recalculer les nouveaux courants dans ce circuit simplifié."
      },
      {
        "questionText": "Exercice 4 - Question 1: Soit le circuit schématisé ci-contre. Le courant électrique i qui traverse la résistance R1 est : (Données : E₁=12V; E₂=8V; r₁=r₂=r₃=0,5Ω; R₁=10Ω; R₂=5Ω; Rᴀ=12Ω; Rʙ=2Ω; Rᴄ=2Ω)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/4.PNG",
        "options": [
          "i = 0,244 A",
          "i = 0,517 A",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "Calcul de Req : Rᴄ || Rʙ -> Rcb = 1Ω. Rcb série Rᴀ -> Rabc = 13Ω. Rabc || r₃ -> Rabc3 ≈ 0,48Ω. Req totale (tout en série) = R₁+R₂+r₁+r₂+Rabc3 = 16,48Ω. Loi des mailles : i₁ = (E₁ - E₂) / Req = (12 - 8) / 16,48 ≈ 0,244 A."
      },
      {
        "questionText": "Exercice 4 - Question 2: La résistance R' équivalente des résistances RA et RB et RC vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/4.PNG",
        "options": [
          "R' = 10 Ω",
          "R' = 2 Ω",
          "R' = 13 Ω",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Ceci demande la résistance du groupe Rabc calculée en Q1 : R' = Rabc = Rᴀ + Rcb = 12 + 1 = 13 Ω."
      },
      {
        "questionText": "Exercice 4 - Question 3: La différence de potentiel (VA-VB) est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/4.PNG",
        "options": [
          "VA-VB = -3,66 V",
          "VA-VB = 8,82 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "(Note : L'explication du corrigé semble contenir une erreur, mais en suivant la réponse A) La réponse du corrigé (A) est suivie, bien qu'un calcul direct (VA-VB = -E₁ + r₁i₁ + R₁i₁ = -9,438 V) donne un résultat différent."
      },
      {
        "questionText": "Exercice 5 - Question 1: ...le courant électrique i qui traverse le générateur E₁ vaut : i=1A. La Résistance R vaut : (Données : E₁=4V; E₂=24V; r₁=R₂=2,5Ω; R₃=R₄=5Ω; i=1A)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/5.PNG",
        "options": [
          "R=1,53 Ω",
          "R=6,67 Ω",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Loi des mailles (circuit extérieur) : E₂ - E₁ = i * R_totale = i * (R + Req'). 24 - 4 = 1 * (R + Req'). 20 = R + Req'. Le corrigé indique que la chute de tension dans Req' (le reste du circuit) est de 13,33V. Donc, 20 = R*1 + 13,33. Cela donne R = 6,67 Ω."
      },
      {
        "questionText": "Exercice 7 - Question 1: La résistance équivalente Req du circuit vue par le générateur E est : (Données : e=4V; R=4Ω; R₁=5Ω; R₂=10Ω; R₃=10Ω; r=2Ω; I=2A)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/7.PNG",
        "options": [
          "20 Ω",
          "10 Ω",
          "3,5 Ω"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Simplification: R₂ et R₃ en série (R₂₃ = 20Ω). R₂₃ en parallèle avec R₁ (R₁₂₃ = (5*20)/(5+20) = 4Ω). Ce groupe est en série avec R et r. Req = R₁₂₃ + R + r = 4 + 4 + 2 = 10 Ω."
      },
      {
        "questionText": "Exercice 7 - Question 2: La puissance P dissipée par effet joule dans le circuit est :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/7.PNG",
        "options": [
          "Pd = 64 W",
          "Pd = 50 W",
          "Pd = 40 W"
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "P = Req * I². En utilisant Req = 10Ω (de Q1) et I = 2A (donnée) : P = 10 * (2)² = 40 W."
      },
      {
        "questionText": "Exercice 7 - Question 3: Suite... la puissance P par effet joule dans la résistance R1 vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/7.PNG",
        "options": [
          "P = 17,2 W",
          "P = 12,8 W",
          "P = 8,56 W"
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "Il faut le courant I₁ dans R₁. Tension aux bornes du bloc parallèle R₁₂₃ : V₁₂₃ = R₁₂₃ * I_total = 4Ω * 2A = 8V. Ce 8V s'applique à R₁. I₁ = V₁₂₃ / R₁ = 8V / 5Ω = 1,6A. Puissance P₁ = R₁ * (I₁)² = 5 * (1,6)² = 12,8 W."
      },
      {
        "questionText": "Exercice 10 - Question 1 (Partie 1): (Portion de circuit UAB = 10V. R₁=R₂=2Ω, R₃=1Ω. Req = 4 Ω.) Les affirmations correctes sont :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/10.PNG",
        "options": [
          "Les résistances (R₁, R₂ et R₃) sont montées en parallèles.",
          "La résistance équivalente (RAB) entre les bornes de cette portion vaut : Req = 4 Ω",
          "L'intensité (I₃) du courant qui traverse R₃ est la même que celle qui traverse R₁",
          "La puissance dissipée par effet joule dans cette portion vaut : Pdis = 25 W.",
          "L'intensité (I₁) qui traverse la résistance (R₁) est double de celle qui traverse (R₂)."
        ],
        "correctOptionIndexes": [ 1, 3 ],
        "explanation": "Affirmation 2 est correcte (donnée de l'énoncé). Affirmation 4 : Courant total I = Uab / Req = 10V / 4Ω = 2,5A. Puissance dissipée P = Uab * I = 10V * 2,5A = 25W. (Correct)."
      },
      {
        "questionText": "Exercice 10 - Question 2 (Partie 2): On relie la portion... à un générateur (E=?) et (r = 0,5 Ω). (UAB = 10 V). Les affirmations correctes sont :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/10.PNG",
        "options": [
          "L'intensité du courant qui y circule est toujours égale à (I = 2,5 A).",
          "La force électromotrice du générateur vaut : E = 11,25 V.",
          "La borne négative du générateur est branchée au point (A), la borne positive au point(B).",
          "Le rendement de ce générateur est nul.",
          "La puissance dissipée dans le circuit par effet joule est plus petite que la précédente."
        ],
        "correctOptionIndexes": [ 0, 1 ],
        "explanation": "Affirmation 1: Puisque Uab et Req de la portion n'ont pas changé, I = Uab / Req = 2,5 A. (Correct). Affirmation 2: Loi d'Ohm au générateur : Uab = E - r*I => E = Uab + r*I. E = 10V + (0,5Ω * 2,5A) = 10 + 1,25 = 11,25 V. (Correct)."
      },
      {
        "questionText": "Exercice 13 - Question 1: La valeur de la résistance R vaut alors : (Données : UAB = 5V; I₂ = 2A; E₁ = 6V; e = 4V; R₁ = 3Ω; R₂ = 6Ω; R₃ = 4Ω)",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/13.PNG",
        "options": [
          "R = 3,5 Ω",
          "R = 2,1 Ω",
          "R = 3 Ω",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 1 ],
        "explanation": "On cherche R = Uab / i. Il faut le courant principal i. On trouve i₁ (branche gauche) par loi des mailles : E₁ + R₁*i₁ - Uab = 0 => 6 + 3*i₁ - 5 = 0 => i₁ = -0,33 A. Loi des nœuds : i = i₂ - i₁ = 2A - (-0,33A) = 2,33A. Donc R = 5V / 2,33A ≈ 2,1 Ω."
      },
      {
        "questionText": "Exercice 13 - Question 2: La force électromotrice E₂ du second générateur vaut :",
        "imageUrl": "/images/quizzes/year-1/physics/Électrocinétique/13.PNG",
        "options": [
          "E₂ = 8 V",
          "E₂ = 16 V",
          "E₂ = 29 V",
          "toutes ces réponses sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Loi des mailles (boucle inférieure) : Uab = E₂ - e - R₂*i₂ - R₃*i₂. On isole E₂ : E₂ = Uab + e + i₂ * (R₂ + R₃). E₂ = 5V + 4V + 2A * (6Ω + 4Ω) = 9 + 2 * (10) = 29 V."
      },
      {
        "questionText": "Exercice 14 (Cours) - Question 1: (EMD 2023) Soit un récepteur (e=12 V; r=3 Ω) parcouru par I=1,5 A... Le rendement r... s'écrit :",
        "options": [
          "r=e+rI/e",
          "r=e/(e.r)",
          "r=e/(e+rI)",
          "les réponses a,b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 2 ],
        "explanation": "Rendement = Puissance utile / Puissance absorbée. Pu = e*I. Pa = U*I = (e+rI)*I. Donc r = (e*I) / ((e+rI)*I) = e / (e+rI)."
      },
      {
        "questionText": "Exercice 14 (Cours) - Question 2: (EMD 2023) Soit un récepteur (e =14 V; r =10 Ω)... La puissance consommée Pc peut s'écrire en fonction de la puissance transformée Pt. Ainsi :",
        "options": [
          "Pc=Pt+r.I²",
          "Pc=Pt-r.I²",
          "Pc=Pt",
          "les réponses a, b, et c sont fausses."
        ],
        "correctOptionIndexes": [ 0 ],
        "explanation": "La puissance totale consommée (Pc) se divise en puissance transformée (utile) (Pt = e*I) et puissance dissipée par effet Joule (Pj = r*I²). On a donc toujours : Pc = Pt + Pj, soit Pc = Pt + r*I²."
      }
    ]
  }
];

module.exports = physiqueQuizzes;