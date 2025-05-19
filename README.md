# Projet 13 : Argent Bank - Application bancaire

Ce projet s'inscrit dans le cadre de la formation "Développeur d'application JavaScript React" d'OpenClassrooms et vise à :

- Développer une application bancaire front-end avec React
- Implémenter l'authentification des utilisateurs en utilisant une API REST
- Concevoir un système de gestion d'état global avec Redux
- Créer une interface utilisateur responsive et dynamique
- Concevoir des spécifications d'API pour de futures fonctionnalités (transactions)

## Installation

### Prérequis

- [Node.js](https://nodejs.org/en/)
- [Backend API Argent Bank](./backend)

1. **Cloner le projet**

```bash
git clone https://github.com/nrundstadler/OCR-P13-ArgentBank
cd OCR-P13-ArgentBank/frontend
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer l'application**

```bash
npm run dev
```

L'application sera accessible à l'adresse http://localhost:5173/ (ou autre port indiqué par Vite).

## Technologies utilisées

- **React 19** : Bibliothèque JavaScript pour créer l'interface utilisateur
- **Redux Toolkit** : Gestion de l'état global de l'application
- **RTK Query** : Gestion des requêtes API et du cache
- **React Router** : Navigation entre les différentes pages
- **SCSS Modules** : Styles modulaires et scoped
- **Vite** : Build tool rapide pour le développement

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run lint` : Vérifie le code avec ESLint
- `npm run preview` : Prévisualise la version de production

## Comptes utilisateurs de test

### Tony Stark

- Email: tony@stark.com
- Mot de passe: password123

### Steve Rogers

- Email: steve@rogers.com
- Mot de passe: password456

## Phase 2 : API Transactions

La deuxième phase du projet consistait à concevoir les spécifications d'API pour la gestion des transactions. Vous pouvez retrouver mes spécifications dans le fichier [`swagger_v2.yaml`](./backend/swagger_v2.yaml).
