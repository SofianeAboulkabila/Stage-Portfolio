const express = require('express');
const fs = require('fs');

const app = express();
const port = 3005;

app.use(express.json());

// Route pour récupérer les données
app.get('/api/projets', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
    } else {
      const projets = JSON.parse(data);
      res.json(projets);
    }
  });
});

//  Route pour ajouter un nouveau projet 

app.post('/projets', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des projets');
    } else {
      const projets = JSON.parse(data);
      const newProjet = req.body;
      projets.push(newProjet);
      fs.writeFile('data.json', JSON.stringify(projets), err => {
        if (err) {
          console.error(err);
          res.status(500).send('Erreur lors de l\'ajout du projet');
        } else {
          res.send('Projet ajouté avec succès');
        }
      });
    }
  });
});

// Route pour modifier un projet existant 

app.put('/projets/:id', (req, res) => {
  const projetId = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des projets');
    } else {
      const projets = JSON.parse(data);
      const projetToUpdate = projets.find(projet => projet.id === projetId);
      if (!projetToUpdate) {
        res.status(404).send('Projet non trouvé');
      } else {
        const updatedProjet = req.body;
        Object.assign(projetToUpdate, updatedProjet);
        fs.writeFile('data.json', JSON.stringify(projets), err => {
          if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la mise à jour du projet');
          } else {
            res.send('Projet mis à jour avec succès');
          }
        });
      }
    }
  });
});


// Route pour supprimer un projet existant :

app.delete('/projets/:id', (req, res) => {
  const projetId = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération des projets');
    } else {
      const projets = JSON.parse(data);
      const projetIndex = projets.findIndex(projet => projet.id === projetId);
      if (projetIndex === -1) {
        res.status(404).send('Projet non trouvé');
      } else {
        projets.splice(projetIndex, 1);
        fs.writeFile('data.json', JSON.stringify(projets), err => {
          if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la suppression du projet');
          } else {
            res.send('Projet supprimé avec succès');
          }
        });
      }
    }
  });
});
``



// Lire le contenu de data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;

  // Convertir le contenu JSON en un objet JavaScript
  const projects = JSON.parse(data);

  // Utiliser les données récupérées
  console.log(projects);
});


// Endpoint par défaut pour toutes les autres requêtes
app.use((req, res) => {
  res.status(404).send('Page introuvable');
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
