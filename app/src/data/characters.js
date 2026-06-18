// ACESSO AOS PERSONAGENS

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
    focus: 'Precisão, controle corporal e resistência',
    level: 'Iniciante e Intermediário',
    frequency: '5x por semana / 2 dias de descanso',
    description:
      'Rotina com treino funcional, resistência, mobilidade e exercícios de precisão para melhorar força, controle corporal e foco.',
    avatar: require('../../assets/images/characters/oliver.jpg'),
    image: require('../../assets/images/characters/oliver.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Aquecimento',
        description:
          'Alongamentos dinâmicos, mobilidade de ombros e ativação do core.',
        series: '5 a 8 minutos',
        videoUrl:
          'https://www.youtube.com/results?search_query=aquecimento+mobilidade+ombros+core',
      },
      {
        id: '2',
        name: 'Treino de Força',
        description:
          'Flexões, agachamentos, prancha e remada com elástico para fortalecer o corpo todo.',
        series: '3 a 4 séries',
        videoUrl:
          'https://www.youtube.com/results?search_query=treino+funcional+flexao+agachamento+prancha',
      },
      {
        id: '3',
        name: 'Treino de Precisão',
        description:
          'Exercícios de equilíbrio, coordenação, postura e controle de respiração.',
        series: '5 séries',
        videoUrl:
          'https://www.youtube.com/results?search_query=treino+equilibrio+coordenacao+postura+respiracao',
      },
    ],
  },

  {
    id: '2',
    name: 'Skye',
    title: 'Resistência e Condicionamento',
    focus: 'Condicionamento físico',
    level: 'Iniciante e Intermediário',
    frequency: '5x por semana / 2 dias de descanso',
    description:
      'Rotina voltada para resistência muscular e condicionamento físico, ajudando o corpo a manter atividades intensas por períodos mais longos.',
    avatar: require('../../assets/images/characters/skye-icon.jpg'),
    image: require('../../assets/images/characters/skye.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Aquecimento Cardiovascular',
        description:
          'Polichinelos, corrida estacionária e agachamentos livres leves para preparar o corpo.',
        series: '3 séries de 45 segundos',
        videoUrl:
          'https://www.youtube.com/results?search_query=aquecimento+cardiovascular+polichinelo+corrida+estacionaria',
      },
      {
        id: '2',
        name: 'Circuito de Resistência Muscular',
        description:
          'Passadas, flexões de braço e abdominais remador em formato de circuito, com pouco descanso.',
        series: '3 a 4 séries',
        videoUrl:
          'https://www.youtube.com/results?search_query=circuito+resistencia+muscular+passada+flexao+abdominal+remador',
      },
      {
        id: '3',
        name: 'Condicionamento Metabólico',
        description:
          'Burpees combinados com escaladores para melhorar fôlego, resistência e explosão corporal.',
        series: '4 séries de 30 segundos',
        videoUrl:
          'https://www.youtube.com/results?search_query=burpee+escalador+treino+condicionamento',
      },
    ],
  },

  {
    id: '3',
    name: 'All Might',
    title: 'Força Bruta',
    focus: 'Força máxima e exercícios compostos',
    level: 'Avançado',
    frequency: '3 a 4x por semana',
    description:
      'Rotina focada em erguer cargas altas, desenvolvendo força pura, densidade muscular e estabilização em exercícios compostos.',
    avatar: require('../../assets/images/characters/all-might-icon.jpg'),
    image: require('../../assets/images/characters/all-might-icon.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Desenvolvimento Militar',
        description:
          'Empurre a barra acima da cabeça mantendo o core contraído e a postura firme.',
        series: '4 séries de 4 a 6 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=desenvolvimento+militar+barra+como+fazer',
      },
      {
        id: '2',
        name: "Farmer's Walk",
        description:
          'Caminhe carregando halteres pesados para desenvolver força de pegada, trapézio e core.',
        series: '4 caminhadas de 30 metros',
        videoUrl:
          'https://www.youtube.com/results?search_query=farmers+walk+como+fazer',
      },
      {
        id: '3',
        name: 'Agachamento Frontal',
        description:
          'Agachamento com a barra posicionada na parte frontal dos ombros, trabalhando pernas e core.',
        series: '5 séries de 5 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+frontal+como+fazer',
      },
    ],
  },

  {
    id: '4',
    name: 'Cloud',
    title: 'Resistência e Isometria',
    focus: 'Resistência muscular e força isométrica',
    level: 'Intermediário',
    frequency: '4x por semana / 3 dias de descanso',
    description:
      'Treino focado em resistência, postura e força isométrica, simulando o controle necessário para sustentar cargas por mais tempo.',
    avatar: require('../../assets/images/characters/cloud.jpg'),
    image: require('../../assets/images/characters/cloud.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Elevação Frontal Isométrica',
        description:
          'Sustente uma barra ou halteres à frente do corpo na altura dos ombros, mantendo a postura estável.',
        series: '4 séries de 30 a 60 segundos',
        videoUrl:
          'https://www.youtube.com/results?search_query=elevacao+frontal+isometrica+halteres',
      },
      {
        id: '2',
        name: 'Remada Curvada com Barra',
        description:
          'Puxe a barra em direção ao abdômen mantendo a coluna alinhada, fortalecendo costas e postura.',
        series: '4 séries de 10 a 12 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=remada+curvada+com+barra+como+fazer',
      },
      {
        id: '3',
        name: 'Prancha com Peso',
        description:
          'Mantenha a posição de prancha com carga leve nas costas para fortalecer core e resistência.',
        series: '3 séries de 30 a 45 segundos',
        videoUrl:
          'https://www.youtube.com/results?search_query=prancha+com+peso+como+fazer',
      },
    ],
  },

  {
    id: '5',
    name: 'Toph',
    title: 'Powerlifting',
    focus: 'Potência muscular e força de base',
    level: 'Intermediário',
    frequency: '3 a 4x por semana',
    description:
      'Rotina focada em força de base, estabilidade e potência muscular, com ênfase em membros inferiores e levantamento de carga.',
    avatar: require('../../assets/images/characters/toph-icon.jpg'),
    image: require('../../assets/images/characters/toph-icon.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Aquecimento Articular',
        description:
          'Mobilidade de quadril, tornozelos e joelhos para preparar o corpo antes dos exercícios de força.',
        series: '8 a 10 minutos',
        videoUrl:
          'https://www.youtube.com/results?search_query=aquecimento+mobilidade+quadril+tornozelo+joelho',
      },
      {
        id: '2',
        name: 'Agachamento Livre',
        description:
          'Agachamento com barra focado em força de pernas, estabilidade do core e controle da descida.',
        series: '5 séries de 5 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+livre+com+barra+como+fazer',
      },
      {
        id: '3',
        name: 'Agachamento Pausado',
        description:
          'Agachamento com pausa no fundo do movimento para melhorar controle, força e estabilidade.',
        series: '4 séries de 4 a 6 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+pausado+como+fazer',
      },
      {
        id: '4',
        name: 'Levantamento Terra',
        description:
          'Exercício composto para fortalecer cadeia posterior, lombar, glúteos e pernas.',
        series: '4 séries de 5 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=levantamento+terra+como+fazer',
      },
      {
        id: '5',
        name: 'Agachamento Búlgaro',
        description:
          'Exercício unilateral para fortalecer pernas, glúteos, equilíbrio e estabilidade.',
        series: '3 séries de 8 a 10 repetições por perna',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+bulgaro+como+fazer',
      },
    ],
  },
];

export const popularCharacters = [
  {
    id: '6',
    name: 'Maki Zenin',
    title: 'Força Funcional',
    focus: 'Calistenia e potência',
    level: 'Avançado',
    frequency: '5x por semana / 2 dias de descanso',
    description:
      'Rotina baseada no peso corporal e em exercícios pliométricos para desenvolver força, agilidade e controle dos movimentos.',
    avatar: require('../../assets/images/characters/maki.jpg'),
    image: require('../../assets/images/characters/maki.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Barra Fixa com Carga',
        description:
          'Barras completas com peso extra para ganho de força explosiva na puxada.',
        series: '4 séries de 6 a 8 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=barra+fixa+com+carga+como+fazer',
      },
      {
        id: '2',
        name: 'Flexões Explosivas',
        description:
          'Flexões empurrando o chão com força, tirando as mãos do solo na subida.',
        series: '4 séries de 10 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=flexao+explosiva+como+fazer',
      },
      {
        id: '3',
        name: 'Subida na Corda',
        description:
          'Subida vertical em corda utilizando braços, costas e core para desenvolver força de tração.',
        series: '3 séries',
        videoUrl:
          'https://www.youtube.com/results?search_query=subida+na+corda+treino',
      },
    ],
  },

  {
    id: '7',
    name: 'Sung Jin-Woo',
    title: 'Condicionamento Físico',
    focus: 'Base física e resistência',
    level: 'Iniciante',
    frequency: 'Diariamente',
    description:
      'Rotina inspirada em desafio diário, com foco em alta repetição, resistência muscular e melhora do fôlego.',
    avatar: require('../../assets/images/characters/sung-icon.jpg'),
    image: require('../../assets/images/characters/sung.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Flexões de Braço',
        description:
          'Flexões tradicionais no chão, mantendo o alinhamento do corpo para fortalecer peito, ombros e tríceps.',
        series: '4 séries de 25 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=flexao+de+braco+como+fazer',
      },
      {
        id: '2',
        name: 'Agachamentos Livres',
        description:
          'Agachamentos sem peso, focando no condicionamento e na resistência das pernas.',
        series: '4 séries de 25 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+livre+sem+peso+como+fazer',
      },
      {
        id: '3',
        name: 'Corrida de Resistência',
        description:
          'Corrida contínua em ritmo moderado para melhorar a capacidade cardiorrespiratória.',
        series: '20 a 40 minutos',
        videoUrl:
          'https://www.youtube.com/results?search_query=corrida+de+resistencia+para+iniciantes',
      },
    ],
  },

  {
    id: '8',
    name: 'Homem-Aranha',
    title: 'Mobilidade',
    focus: 'Flexibilidade e calistenia dinâmica',
    level: 'Intermediário',
    frequency: '3x por semana, alternando treinos A e B',
    description:
      'Treino voltado para flexibilidade ativa, mobilidade articular e força em ângulos variados, simulando movimentos acrobáticos.',
    avatar: require('../../assets/images/characters/spiderman-icon.jpg'),
    image: require('../../assets/images/characters/spiderman.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Mobilidade Spiderman',
        description:
          'Passadas profundas alternadas, aproximando o cotovelo do chão ao lado do pé para melhorar mobilidade de quadril.',
        series: '3 séries de 12 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=spiderman+stretch+mobilidade+quadril',
      },
      {
        id: '2',
        name: 'Barra Fixa',
        description:
          'Exercício para fortalecer costas, braços e pegada, mantendo controle do corpo durante a subida.',
        series: '4 séries de 6 a 8 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=barra+fixa+como+fazer',
      },
      {
        id: '3',
        name: 'Mountain Climbers',
        description:
          'Movimento dinâmico em posição de prancha, alternando os joelhos em direção ao peito para trabalhar core e condicionamento.',
        series: '4 séries de 30 segundos',
        videoUrl:
          'https://www.youtube.com/results?search_query=mountain+climber+como+fazer',
      },
    ],
  },

  {
    id: '9',
    name: 'Batman',
    title: 'Velocidade e Reflexo',
    focus: 'Treino funcional e pliometria',
    level: 'Intermediário',
    frequency: '2x por semana, alternando treinos A e B',
    description:
      'Rotina focada em movimentos explosivos, agilidade multidirecional, reflexo e controle corporal.',
    avatar: require('../../assets/images/characters/batman.jpg'),
    image: require('../../assets/images/characters/batman.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Saltos na Caixa',
        description:
          'Salte sobre uma plataforma estável usando a extensão dos quadris e amortecendo bem a descida.',
        series: '4 séries de 6 a 8 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=box+jump+como+fazer',
      },
      {
        id: '2',
        name: 'Arremesso de Medicine Ball',
        description:
          'Eleve a bola medicinal acima da cabeça e arremesse contra o chão usando força do core.',
        series: '4 séries de 10 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=medicine+ball+slam+como+fazer',
      },
      {
        id: '3',
        name: 'Corrida com Mudança de Direção',
        description:
          'Sprints curtos com mudança rápida de direção para treinar reflexo, aceleração e desaceleração.',
        series: '5 séries',
        videoUrl:
          'https://www.youtube.com/results?search_query=treino+agilidade+mudanca+de+direcao',
      },
    ],
  },

  {
    id: '10',
    name: 'Mulher Maravilha',
    title: 'Mobilidade e Força',
    focus: 'Treino híbrido com força e mobilidade',
    level: 'Intermediário a Avançado',
    frequency: '3x por semana, com treinos A, B e C',
    description:
      'Rotina que combina potência, estabilidade e mobilidade para melhorar movimentos fluidos e fortalecer articulações.',
    avatar: require('../../assets/images/characters/mulher-maravilha.jpg'),
    image: require('../../assets/images/characters/mulher-maravilha.jpg'),

    workouts: [
      {
        id: '1',
        name: 'Power Snatch com Halter',
        description:
          'Puxe o halter do chão até acima da cabeça em um movimento fluido e explosivo.',
        series: '4 séries de 6 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=dumbbell+power+snatch+como+fazer',
      },
      {
        id: '2',
        name: 'Levantamento Turco',
        description:
          'Levante-se do chão segurando um peso acima da cabeça, trabalhando estabilidade, força e controle corporal.',
        series: '3 séries de 4 repetições por lado',
        videoUrl:
          'https://www.youtube.com/results?search_query=levantamento+turco+como+fazer',
      },
      {
        id: '3',
        name: 'Agachamento Lateral',
        description:
          'Movimento lateral profundo, transferindo o peso para uma perna enquanto a outra permanece estendida.',
        series: '3 séries de 12 repetições',
        videoUrl:
          'https://www.youtube.com/results?search_query=agachamento+lateral+mobilidade+como+fazer',
      },
    ],
  },
];