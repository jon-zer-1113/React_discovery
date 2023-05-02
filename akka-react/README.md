- Les commandes (npm) sont écrites dans le fichier "package.json" (dans la partie "scripts")
CE FICHIER ("package.json") contient les dépendances, les versions, etc...
---------------------------------------------------------------------------------------------------------------------
- Le "package-lock.json" contient un "snap" de tout ce qui a été installé lors de la création de l'app React,
cela fait référence aussi aux modules, dépendances (de "node_modules"), etc... ON Y TOUCHE JAMAIS !...
---------------------------------------------------------------------------------------------------------------------

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans votre navigateur.

La page se rechargera lorsque vous ferez des changements.
Vous pouvez également voir les erreurs lint dans la console.

### `npm test`

Lance le programme de test en mode interactif (watch).
Voir la section sur [l'exécution des tests] (https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.
Il intègre correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

Le build est minifié et les noms de fichiers incluent les hashs.
Votre application est prête à être déployée !

Voir la section [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Note : c'est une opération à sens unique. Une fois que vous avez `eject`, vous ne pouvez plus revenir en arrière!**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez `ejecter` à tout moment. Cette commande supprimera la seule dépendance de construction de votre projet.

A la place, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes, à l'exception de `eject`, fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. A ce stade, vous êtes seul.

Vous n'aurez jamais à utiliser `eject`. L'ensemble des fonctionnalités est adapté aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt à le faire.

## En savoir plus

Pour en savoir plus, consultez la [documentation sur la création d'une application React] (https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [documentation React](https://reactjs.org/).

### Fractionnement du code

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyse de la taille du paquet

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Créer une application Web progressive

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuration avancée

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Déploiement

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` ne parvient pas à minifier

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
