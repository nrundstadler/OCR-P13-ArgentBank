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

# English

# Project 13: Argent Bank - Banking Application

This project is part of the OpenClassrooms "JavaScript React Application Developer" training program and aims to:

- Develop a front-end banking application with React
- Implement user authentication using a REST API
- Design a global state management system with Redux
- Create a responsive and dynamic user interface
- Design API specifications for future features (transactions)

### Installation

#### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Argent Bank Backend API](./backend)

1. **Clone the project**

```bash
git clone https://github.com/nrundstadler/OCR-P13-ArgentBank
cd OCR-P13-ArgentBank/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Launch the application**

```bash
npm run dev
```

The application will be accessible at http://localhost:5173/ (or another port indicated by Vite).

### Technologies used

- **React 19** : JavaScript library for creating the user interface
- **Redux Toolkit** : Global state management for the application
- **RTK Query** : API request management and caching
- **React Router** : Navigation between different pages
- **SCSS Modules** : Modular and scoped styles
- **Vite** : Fast build tool for development

### Available scripts

- `npm run dev` : Starts the development server
- `npm run build` : Compiles the application for production
- `npm run lint` : Checks code with ESLint
- `npm run preview` : Previews the production version

### Test user accounts

#### Tony Stark

- Email: tony@stark.com
- Password: password123

#### Steve Rogers

- Email: steve@rogers.com
- Password: password456

### Phase 2: Transactions API

The second phase of the project involved designing API specifications for transaction management. You can find my specifications in the [`swagger_v2.yaml`](./backend/swagger_v2.yaml).
