// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao MongoDB
const mongoURI = 'mongodb+srv://gaureliorodrigues:paraiba162@gabis.oh10e.mongodb.net/?retryWrites=true&w=majority&appName=gabis'; // Substitua pela string de conexão do MongoDB Atlas

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definição do modelo
const actionSchema = new mongoose.Schema({
  userId: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});

const Action = mongoose.model('Action', actionSchema);

// Rota para registrar ações
app.post('/api/record-action', async (req, res) => {
  const { userId, action } = req.body;

  if (!userId || !action) {
    return res.status(400).json({ error: 'userId e action são necessários' });
  }

  try {
    const newAction = new Action({ userId, action });
    await newAction.save();
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar a ação' });
  }
});

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
