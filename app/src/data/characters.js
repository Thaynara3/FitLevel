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
    title: 'Resistência e Condicionamento',
    focus: 'Condicionamento Fisíco',
    level: 'Iniciante e Intermediario',
    frequency: 'A/B/Descanso',
    description:
      'A rotina envolve treinos de resistencia muscular, com o objetivo de melhorar a capacidade do seu corpo de estar engajado em atividade fisícas intensas por longos periodos',
    avatar: require('../../assets/images/characters/skye-icon.jpg'),
    image: require('../../assets/images/characters/skye.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Aquecimento Cardiovascular',
        description: 'Polichinelos, corrida estacionária e agachamentos livres leves',
        series: '3 de 45s',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Circuito de resistência Muscular',
        description: 'Passadas (lunges), flexões de braço e abdominais remador realizados em formato de circuito sem descanso.',
        series: '3 ~ 4',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Condicionamento Metaólico',
        description: 'Burpees combinados com escaladores',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '3',
    name: 'All Might',
    title: 'Força Bruta',
    focus: 'Strongman',
    level: 'Avancado',
    frequency: 'A/B/C',
    description:
      'Rotina focada em erguer o máximo de peso possível, desenvolvendo força pura, densidade muscular e estabilização bruta em exercícios compostos.',
    avatar: require('../../assets/images/characters/all-might-icon.jpg'),
    image: require('../../assets/images/characters/all-might-icon.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Desenvolvimento Militar (OHP)',
        description: 'Empurre a barra acima da cabeça mantendo o core contraído.',
        series: '4 séries de 4 ~ 6',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Carregamento de peso (Farme\'s Walk',
        description: 'Caminhe carregando halteres para desenvolver força de pegada, trapézio e core.',
        series: '4 de 30m',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Agachamento Frontal',
        description: 'Agachamento com a barra posicionada nos ombros anteriores.',
        series: '5 séries de 5',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '4',
    name: 'Cloud',
    title: 'Resistência',
    focus: 'Resistência e Isometria',
    level: 'Intermediario',
    frequency: 'A/B',
    description:
      'Treino focado em resistência e força isométrica.',
    avatar: require('../../assets/images/characters/cloud.jpg'),
    image: require('../../assets/images/characters/cloud.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Elevação Frontal Isométrica',
        description: 'Sustente uma barra ou halteres à frente do corpo na altura dos ombros.',
        series: '4 de 1min',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Remada Curvada com Barra',
        description: 'Puxe a barra em direção ao abdômen mantendo a coluna ereta, fortalecendo as costas e a postura.',
        series: '4 séries de 10 ~ 12',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: '*Treino de XX*',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  
  {
    id: '5',
    name: 'Toph',
    title: 'Powerlifiting',
    focus: 'Potencia muscular',
    level: 'Intermediario',
    frequency: 'A/B',
    description:
      'Descrição.',
    avatar: require('../../assets/images/characters/toph-icon.jpg'),
    image: require('../../assets/images/characters/toph-icon.jpg'),
    workouts: [
      {
        id: '1',
        name: '*Aquecimento*',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Agachamento livre',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Agachamento fundo (Pausado)',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '4',
        name: 'Levantamento Terra',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '5',
        name: 'Agachamento Bulgaro',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },
];

export const popularCharacters = [
  {
    id: '3',
    name: 'Maki Zenin',
    title: 'Força Funcional',    
    focus: 'Calestenia e potencia',
    level: 'Avancado',
    frequency: '5x2',
    description:
      'Uma rotina baseada no peso do corpo e pliometria para desenvolver força, agilidade e controle total dos movimentos.',
    avatar: require('../../assets/images/characters/maki.jpg'),
    image: require('../../assets/images/characters/maki.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Barra Fixa com Carga (Weighted Pull-ups)',
        description: 'Execução de barras completas adicionando peso extra na cintura para ganho de força explosiva na puxada.',
        series: '4 séries de 6 ~ 8',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Flexões Explosivas (Plyo Push-ups)',
        description: 'Flexões empurrando o chão com as mãos perdendo o contato com o solo na subida.',
        series: '4 séries de 10',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Subida na Corda (Rope Climb) ou Pull-ups Supinados',
        description: 'Subida vertical em corda utilizando apenas os braços ou execução de barras estritas focando na força de tração.',
        series: '3',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '4',
    name: 'Sung Jin-Woo',
    title: 'Condicionamento Fisíco',
    focus: 'Construir uma base',
    level: 'Iniciante',
    frequency: 'Todo dia',
    description:
      'Inspirado no clássico desafio diário para construir uma base física, focado em alta repetição e ganho de fôlego.',
    avatar: require('../../assets/images/characters/sung-icon.jpg'),
    image: require('../../assets/images/characters/sung.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Flexões de Braço',
        description: 'Flexões tradicionais no chão mantendo o alinhamento do corpo para fortalecer peito e tríceps.',
        series: '4 séries de 25',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Agachamentos Livres',
        description: 'Agachamentos sem peso focando no condicionamento e resistência das pernas.',
        series: '4 séries de 25',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Corrida de Resistência',
        description: 'Corrida contínua em ritmo moderado para melhora da capacidade cardiorrespiratória.',
        series: '10km',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '5',
    name: 'Homem-Aranha',
    title: 'Mobilidade',
    focus: 'Flexibilidade e Calistenia Dinâmica',
    level: 'Intermediario',
    frequency: 'A/B/A',
    description:
      'Treino voltado para flexibilidade ativa, mobilidade articular profunda e força em ângulos complexos, permitindo movimentos acrobáticos.',
    avatar: require('../../assets/images/characters/spiderman-icon.jpg'),
    image: require('../../assets/images/characters/spiderman.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Mobilidade de Quadril e Espaçamento Spiderman',
        description: 'Passadas profundas alternadas tocando o cotovelo no chão ao lado do pé para destravar a pelve.',
        series: '3 séries de 12',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Barra fixa',
        description: 'Barra fixa',
        series: '4 séries de 8',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: '*Treino de XX*',
        description: '*descricao*',
        series: '*X ~ X*',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '6',
    name: 'Batman',
    title: 'Velocidade e Reflexo',
    focus: 'Treino Funcional e Pliometria',
    level: 'Intermediario',
    frequency: 'A/B',
    description:
      'Rotina focada em movimentos explosivos e agilidade multidirecional.',
    avatar: require('../../assets/images/characters/batman.jpg'),
    image: require('../../assets/images/characters/batman.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Saltos na Caixa (Box Jumps)',
        description: 'Salte sobre uma plataforma estável usando a extensão máxima dos quadris e amorteça a queda na descida.',
        series: '4 séries de 6 ~ 8',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Arremesso de Medicine Ball no Chão',
        description: 'Eleve a bola medicinal acima da cabeça e jogue-a contra o chão usando o core.',
        series: '4 séries de 10',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Corrida com Mudança de Direção',
        description: 'Sprints curtos de 10 metros tocando o chão e mudando de direção rapidamente para treinar reflexo e desaceleração.',
        series: '5',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },

  {
    id: '7',
    name: 'Mulher Maravilha',
    title: 'Mobilidade e Força',
    focus: 'Treino Híbrido (Ginástica + Peso Livre)',
    level: 'Intermediário a Avancado',
    frequency: 'A/B/C',
    description:
      'Uma combinação de potência e rotinas de mobilidade para garantir movimentos fluidos e fortalecer articulações.',
    avatar: require('../../assets/images/characters/mulher-maravilha.jpg'),
    image: require('../../assets/images/characters/mulher-maravilha.jpg'),
    workouts: [
      {
        id: '1',
        name: 'Arranco Potência (Power Snatch) com Halteres',
        description: 'Puxe o haltere do chão até acima da cabeça em um único movimento fluido e explosivo.',
        series: '4 séries de 6',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '2',
        name: 'Levantamento Turco',
        description: 'Deitado no chão segurando um peso acima da cabeça, levante-se completamente sem flexionar o cotovelo, trabalhando estabilidade total.',
        series: '3 séries de 4',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },

      {
        id: '3',
        name: 'Alongamento em Cacho',
        description: 'Agachamento lateral profundo jogando o peso em uma perna enquanto a outra estende completamente, gerando força e flexibilidade no adutor.',
        series: '3 séries de 12',
        videoUrl: '*https://www.youtube.com/videonaoseique*',
      },
    ],
  },
];