const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3005;

// Middleware pour analyser les corps de requête JSON
app.use(bodyParser.json());

// Route pour récupérer des données
app.get('/api/data', (req, res) => {
  // Code pour récupérer des données depuis votre base de données ou un autre service tiers
  const data = { name: 'John Doe', age: 30 };

  res.json(data);
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
