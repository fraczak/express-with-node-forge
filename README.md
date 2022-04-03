# Exercice "Cryptographie asymétrique"

Pour faire marcher la correction il faut:

1. exécuter `npm install` pour télécharger les modules `express.js` et
   `node-forge`:

		> npm install
	   
2. copier fichier `forge.min.js` dans le répertoire de ressources
   statiques:

		> cp node_modules/node-forge/dist/forge.min.js public/
	   
3. démarrer	le serveur:

		> node index.js
	   
4. ouvrir la page web <http://localhost:3333/index.html> dans un
   navigateur.

# Fichiers de la solution


		├── index.js         --- code js du serveur
		├── package.json     --- fichier de dépendances 
		├── public           --- répertoire avec ressources statiques
		│   ├── client.css
		│   ├── client.js
		│   ├── forge.min.js    -- fichier copié de 'node-forge'
		│   └── index.html      -- document copié de l'énoncé 
		└── README.md


