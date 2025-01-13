# Démarrage rapide avec Express

Express offre une très grande flexibilité et une très bonne intégration avec la plupart de l'écosystème Node.js, ainsi qu'avec TypeScript. L'avantage de cette approche est qu'elle ne nécessite d'apprendre qu'un seul langage de programmation, pour le côté client et serveur. Ce kit de démarrage inclut un front-end `Vanilla`, ce qui correspond à des fichiers HTML, CSS et JavaScript simples, sans framework ou librairie préfaite.

## Commencer

Premièrement, il vous faudra récupérer vos identifiants d'Application Synapse sur le portail développeur (SDK) ou via un ticket sur le serveur discord de Synapse. Une fois la manipulation effectuée, assignez à `SYNAPSE_ID` et `SYNAPSE_SECRET` dans un fichier `.env` (qui définit les variables d'environnement) les identifiants obtenus pendant l'étape précédente.

```bash
SYNAPSE_ID=<your_synapse_client_id>
SYNAPSE_SECRET=<your_synapse_client_secret>
```

Ensuite, récupérez les fichiers de [Synapsic/Vanilla-front](https://github.com/Synapsic/Vanilla-front) et placez-les dans le dossier `public/`. Il ne vous reste plus qu'à installer les dépendances et à lancer le projet ! Si c'est exécuté localement, vous trouverez votre application à l'adresse [`localhost:8080`](https://localhost:8080/).

```bash
npm install
npm run start
```