const questions: Array<Question> = [
  {
    id: 1,
    question: "Quelle est la plus grande forêt tropicale du monde ?",
    answers: [
      { id: 1, answer: "Forêt amazonienne" },
      { id: 2, answer: "Forêt du Congo" },
      { id: 3, answer: "Forêt de Bornéo" },
    ],
    difficulty: "easy",
  },
  {
    id: 2,
    question:
      "Quel est le principal gaz à effet de serre responsable du réchauffement climatique ?",
    answers: [
      { id: 1, answer: "Dioxyde de carbone (CO2)" },
      { id: 2, answer: "Méthane (CH4)" },
      { id: 3, answer: "Protoxyde d'azote (N2O)" },
    ],
    difficulty: "medium",
  },
  {
    id: 3,
    question:
      "Lequel des éléments suivants est une source d'énergie renouvelable ?",
    answers: [
      { id: 1, answer: "Charbon" },
      { id: 2, answer: "Gaz naturel" },
      { id: 3, answer: "Énergie solaire" },
    ],
    difficulty: "easy",
  },
  {
    id: 4,
    question:
      "Quel est le processus de conversion des déchets en matériaux réutilisables ?",
    answers: [
      { id: 1, answer: "Recyclage" },
      { id: 2, answer: "Incinération" },
      { id: 3, answer: "Enfouissement" },
    ],
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Quelle est la principale cause de la déforestation ?",
    answers: [
      { id: 1, answer: "Urbanisation" },
      { id: 2, answer: "Exploitation minière" },
      { id: 3, answer: "Exploitation forestière" },
    ],
    difficulty: "medium",
  },
  {
    id: 6,
    question: "Quelle est la principale cause du trou dans la couche d'ozone ?",
    answers: [
      { id: 1, answer: "Émissions de carbone" },
      { id: 2, answer: "Déforestation" },
      { id: 3, answer: "Chlorofluorocarbones (CFC)" },
    ],
    difficulty: "medium",
  },
  {
    id: 7,
    question: "Lequel des éléments suivants est une ressource renouvelable ?",
    answers: [
      { id: 1, answer: "Combustibles fossiles" },
      { id: 2, answer: "Gaz naturel" },
      { id: 3, answer: "Énergie éolienne" },
    ],
    difficulty: "easy",
  },
  {
    id: 8,
    question:
      "Quel est le processus de restauration des écosystèmes dégradés ?",
    answers: [
      { id: 1, answer: "Conservation" },
      { id: 2, answer: "Atténuation" },
      { id: 3, answer: "Restauration écologique" },
    ],
    difficulty: "easy",
  },
  {
    id: 9,
    question:
      "Lequel des éléments suivants est une ressource non renouvelable ?",
    answers: [
      { id: 1, answer: "Énergie solaire" },
      { id: 2, answer: "Énergie géothermique" },
      { id: 3, answer: "Pétrole" },
    ],
    difficulty: "easy",
  },
  {
    id: 10,
    question: "Quelle est la principale cause de l'acidification des océans ?",
    answers: [
      { id: 1, answer: "Pollution plastique" },
      { id: 2, answer: "Émissions de carbone" },
      { id: 3, answer: "Déchets nucléaires" },
    ],
    difficulty: "medium",
  },
  {
    id: 11,
    question:
      "Lequel des éléments suivants est une pratique agricole durable ?",
    answers: [
      { id: 1, answer: "Monoculture" },
      { id: 2, answer: "Utilisation d'agrochimiques" },
      { id: 3, answer: "Rotation des cultures" },
    ],
    difficulty: "medium",
  },
  {
    id: 12,
    question:
      "Quel terme désigne l'augmentation progressive de la température moyenne de la Terre ?",
    answers: [
      { id: 1, answer: "Changement climatique" },
      { id: 2, answer: "Refroidissement global" },
      { id: 3, answer: "Réchauffement atmosphérique" },
    ],
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Lequel des éléments suivants est un matériau renouvelable ?",
    answers: [
      { id: 1, answer: "Plastique" },
      { id: 2, answer: "Aluminium" },
      { id: 3, answer: "Bambou" },
    ],
    difficulty: "easy",
  },
  {
    id: 14,
    question:
      "Quelle est la principale cause de la pollution de l'air dans les villes ?",
    answers: [
      { id: 1, answer: "Émissions industrielles" },
      { id: 2, answer: "Échappement des véhicules" },
      { id: 3, answer: "Déforestation" },
    ],
    difficulty: "medium",
  },
  {
    id: 15,
    question: "Quelle est la conséquence de la surpêche ?",
    answers: [
      { id: 1, answer: "Biodiversité réduite" },
      { id: 2, answer: "Résilience accrue de l'écosystème" },
      {
        id: 3,
        answer: "Augmentation de la population de poissons",
      },
    ],
    difficulty: "medium",
  },
  {
    id: 16,
    question:
      "Quel est le processus de conversion de la lumière solaire en électricité à l'aide de cellules photovoltaïques ?",
    answers: [
      { id: 1, answer: "Énergie éolienne" },
      { id: 2, answer: "Énergie géothermique" },
      { id: 3, answer: "Énergie solaire" },
    ],
    difficulty: "hard",
  },
  {
    id: 17,
    question:
      "Lequel des éléments suivants est un matériau de construction renouvelable ?",
    answers: [
      { id: 1, answer: "Béton" },
      { id: 2, answer: "Acier" },
      { id: 3, answer: "Bambou" },
    ],
    difficulty: "easy",
  },
  {
    id: 18,
    question: "Quelle est la principale cause du trou dans la couche d'ozone ?",
    answers: [
      { id: 1, answer: "Émissions de carbone" },
      { id: 2, answer: "Déforestation" },
      { id: 3, answer: "Chlorofluorocarbones (CFC)" },
    ],
    difficulty: "hard",
  },
  {
    id: 19,
    question: "Quelle est la conséquence de l'érosion des sols ?",
    answers: [
      { id: 1, answer: "Productivité agricole améliorée" },
      {
        id: 2,
        answer: "Diminution de la pollution de l'eau",
      },
      {
        id: 3,
        answer: "Perte de la couche fertile supérieure du sol",
      },
    ],
    difficulty: "hard",
  },
  {
    id: 20,
    question:
      "Quel est le processus de transformation des déchets organiques en sol riche en nutriments ?",
    answers: [
      { id: 1, answer: "Compostage" },
      { id: 2, answer: "Incinération" },
      { id: 3, answer: "Enfouissement" },
    ],
    difficulty: "hard",
  },
];

export default questions;
