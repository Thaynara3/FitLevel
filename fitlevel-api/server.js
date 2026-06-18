const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let imcHistory = [];

const characters = [
  {
    id: '1',
    name: 'Oliver Queen',
    title: 'Alta Precisão',
    focus: 'Precisão, controle corporal e resistência',
    level: 'Iniciante e Intermediário',
    frequency: '5x por semana / 2 dias de descanso',
  },
  {
    id: '2',
    name: 'Skye',
    title: 'Resistência e Condicionamento',
    focus: 'Condicionamento físico',
    level: 'Iniciante e Intermediário',
    frequency: '5x por semana / 2 dias de descanso',
  },
];

function getIMCCategory(imc) {
  if (imc < 18.5) return 'Abaixo do Peso';
  if (imc < 25) return 'Peso Normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidade';
}

app.get('/', (req, res) => {
  res.json({ message: 'API FitLevel funcionando!' });
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  const character = characters.find((item) => item.id === req.params.id);

  if (!character) {
    return res.status(404).json({ error: 'Personagem não encontrado.' });
  }

  res.json(character);
});

app.post('/imc', (req, res) => {
  const { height, weight } = req.body;

  if (!height || !weight) {
    return res.status(400).json({ error: 'Altura e peso são obrigatórios.' });
  }

  const imc = weight / (height * height);
  const category = getIMCCategory(imc);

  const result = {
    id: Date.now().toString(),
    height,
    weight,
    imc: Number(imc.toFixed(1)),
    category,
    createdAt: new Date(),
  };

  imcHistory.push(result);

  res.status(201).json(result);
});

app.get('/imc-history', (req, res) => {
  res.json(imcHistory);
});

app.listen(PORT, () => {
  console.log(`API FitLevel rodando em http://localhost:${PORT}`);
});