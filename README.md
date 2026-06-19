# FitLevel

Aplicativo mobile desenvolvido em React Native com Expo para o Projeto Integrador 3A.

O FitLevel tem como objetivo apresentar treinos inspirados em personagens, permitindo ao usuário visualizar exercícios, favoritar personagens, calcular IMC e acompanhar o histórico dos cálculos por meio de integração com backend.

## Tecnologias utilizadas

### Frontend
- React Native
- Expo
- React Navigation
- Context API

### Backend
- Node.js
- Express
- CORS
- JSON para persistência simples de dados

## Funcionalidades

- Tela inicial com personagens populares
- Lista completa de personagens
- Favoritos / Minha Lista
- Tela de detalhes do personagem
- Vídeos dos treinos
- Tema claro e escuro
- Cálculo de IMC
- Histórico de IMC no perfil
- Exclusão do histórico de IMC
- Tela Sobre o FitLevel
- Integração entre app e backend

## Estrutura do projeto

```txt
FitLevel/
├── app/
│   ├── src/
│   ├── assets/
│   └── package.json
│
├── fitlevel-api/
│   ├── data/
│   │   └── imcHistory.json
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Como rodar o projeto

```bash
git clone <link-do-repositorio>
cd FitLevel/app
npm install
npx expo start 
```

## Para o Backend
```bash
cd fitlevel-api
npm install
node server.js
Para testar no celular, use o IP da máquina na rede local. Exemplo: http://192.168.15.138:3000