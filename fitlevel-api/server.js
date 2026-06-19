const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const imcHistoryPath = path.join(__dirname, 'data', 'imcHistory.json');

function readImcHistory() {
  try {
    const data = fs.readFileSync(imcHistoryPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveImcHistory(history) {
  fs.writeFileSync(imcHistoryPath, JSON.stringify(history, null, 2));
}

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
  const { height, weight, gender } = req.body;

  if (!height || !weight) {
    return res.status(400).json({
      error: 'Altura e peso são obrigatórios.',
    });
  }

  const imc = weight / (height * height);
  const category = getIMCCategory(imc);

  const result = {
    id: Date.now().toString(),
    height,
    weight,
    gender: gender || null,
    imc: Number(imc.toFixed(1)),
    category,
    createdAt: new Date().toISOString(),
  };

  const history = readImcHistory();
  history.push(result);
  saveImcHistory(history);

  res.status(201).json(result);
});

app.get('/imc-history', (req, res) => {
  const history = readImcHistory();
  res.json(history);
});

app.delete('/imc-history', (req, res) => {
  saveImcHistory([]);

  res.json({
    message: 'Histórico apagado com sucesso.',
  });
});

app.listen(PORT, () => {
  console.log(`API FitLevel rodando em http://localhost:${PORT}`);
});
