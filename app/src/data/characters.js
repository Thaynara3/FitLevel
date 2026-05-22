//IMAGENS DOS PERSONAGENS AQUI

export const featuredCharacter = {
  id: 'f1',
  name: 'Pingu',
  title: 'Personagens Populares',
  image: require('../../assets/images/characters/pingu.jpg'),
};

export const listCharacters = [
  {
    id: '1',
    name: 'Oliver Queen',
    title: 'Alta Precisão',
    focus: 'Alta Precisão',
    level: 'Iniciante e Intermediário',
    frequency: '5×2',
    description:
      'A rotina envolve treino funcional, resistência, mobilidade e exercícios de precisão para melhorar força, controle corporal e foco.',
    avatar: require('../../assets/images/characters/oliver.jpg'),
    image: require('../../assets/images/characters/oliver.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Aquecimento',
        description: 'Alongamentos dinâmicos, mobilidade de ombros e ativação do core.',
        series: '-',
        videoUrl: 'https://www.youtube.com/watch?v=2L2lnxIcNmo',
      },

      {
        id: '2',
        name: 'Treino de Força',
        description: 'Flexões, agachamentos, prancha e remada com elástico.',
        series: '3 ~ 4',
        videoUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
      },

      {
        id: '3',
        name: 'Treino de Precisão',
        description: 'Exercícios de equilíbrio, coordenação, postura e controle de respiração.',
        series: '5',
        videoUrl: 'https://www.youtube.com/watch?v=UItWltVZZmE',
      },
    ],
  },

  {
    id: '2',
    name: 'Skye',
    title: 'Resistência',
    avatar: require('../../assets/images/characters/skye-icon.jpg'),
    image: require('../../assets/images/characters/skye.jpg'),
  },

  {
    id: '3',
    name: 'All Might',
    title: 'Resistência',
    avatar: require('../../assets/images/characters/all-might-icon.jpg'),
    image: require('../../assets/images/characters/all-might-icon.jpg'),
  },

  {
    id: '4',
    name: 'Cloud',
    title: 'Resistência',
    avatar: require('../../assets/images/characters/cloud.jpg'),
    image: require('../../assets/images/characters/cloud.jpg'),
  },

  {
    id: '5',
    name: 'Toph',
    title: 'Resistência',
    avatar: require('../../assets/images/characters/toph-icon.jpg'),
    image: require('../../assets/images/characters/toph-icon.jpg'),
  },
];

export const popularCharacters = [
  {
    id: '3',
    name: 'Maki Zenin',
    title: 'Força Funcional',
    avatar: require('../../assets/images/characters/maki.jpg'),
    image: require('../../assets/images/characters/maki.jpg'),
  },

  {
    id: '4',
    name: 'Sung Jin-Woo',
    title: 'Treino de Sombra',
    avatar: require('../../assets/images/characters/sung-icon.jpg'),
    image: require('../../assets/images/characters/sung.jpg'),
  },

  {
    id: '5',
    name: 'Spider Man',
    title: 'Mobilidade',
    avatar: require('../../assets/images/characters/spiderman-icon.jpg'),
    image: require('../../assets/images/characters/spiderman.jpg'),
  },

  {
    id: '6',
    name: 'Batman',
    title: 'Velocidade e Reflexo',
    avatar: require('../../assets/images/characters/batman.jpg'),
    image: require('../../assets/images/characters/batman.jpg'),
  },

  {
    id: '7',
    name: 'Mulher Maravilha',
    title: 'Mobilidade e Força',
    avatar: require('../../assets/images/characters/mulher-maravilha.jpg'),
    image: require('../../assets/images/characters/mulher-maravilha.jpg'),
  },
];