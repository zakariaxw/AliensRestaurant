const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

let commands = [
    { id: 1, clientId: 1, items: ['Produit A', 'Produit B'] },
    { id: 2, clientId: 2, items: ['Produit C', 'Produit D'] },
    { id: 3, clientId: 3, items: ['Produit E', 'Produit F'] }
];

// Obtenir les commandes d'un client par son ID
app.get('/commands/:clientId', (req, res) => {
    const clientId = parseInt(req.params.clientId);
    const clientCommands = commands.filter(c => c.clientId === clientId);

    if (clientCommands.length > 0) {
        res.json(clientCommands);
    } else {
        res.status(404).json({ message: 'Aucune commande trouvée pour ce client' });
    }
});

// Mettre à jour une commande par son ID
app.put('/commands/:id', (req, res) => {
    const commandId = parseInt(req.params.id);
    const updatedCommand = req.body;

    commands = commands.map(command => (command.id === commandId ? updatedCommand : command));

    res.json(updatedCommand);
});

// Supprimer une commande par son ID
app.delete('/commands/:id', (req, res) => {
    const commandId = parseInt(req.params.id);
    commands = commands.filter(command => command.id !== commandId);
    res.json({ message: 'Commande supprimée avec succès' });
});

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
