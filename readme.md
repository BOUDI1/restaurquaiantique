# 🍽️ Quai Antique - Restaurant Gastronomique

Ce projet est une application web de type **SPA (Single Page Application)** développée dans le cadre de la validation du **Titre Professionnel Développeur Web et Web Mobile (DWWM)**.

## 📝 Présentation du projet
Le projet consiste à créer l'interface utilisateur d'un restaurant gastronomique situé en Savoie. L'accent a été mis sur la performance, la sécurité et une expérience utilisateur fluide sans rechargement de page.

## 🚀 Technologies utilisées
* **Frontend :** HTML5, SCSS (Sass), JavaScript (ES6+)
* **Framework CSS :** Bootstrap 5.3
* **Architecture :** Vanilla JavaScript Router (SPA)
* **Données :** Fetch API avec fichiers JSON locaux
* **Versioning :** Git & GitHub

## 📂 Structure du projet
Le projet est organisé de manière modulaire pour faciliter la maintenance :
* `/router` : Logique du routeur personnalisé (Route.js, allRoutes.js, router.js).
* `/pages` : Vues HTML injectées dynamiquement.
* `/js` : Logique métier (galerie dynamique, fetch JSON).
* `/scss` : Fichiers de styles compilés.

## ⚙️ Fonctionnalités clés
1. **Routage Dynamique :** Navigation fluide sans rechargement de la page via un routeur JavaScript personnalisé.
2. **Galerie Dynamique :** Récupération et affichage des photos du restaurant via l'API Fetch et un fichier JSON.
3. **Design Adaptatif (Responsive) :** Interface optimisée pour Mobile, Tablette et Desktop grâce à Bootstrap.
4. **Sécurité (CSP) :** Mise en place d'une Content Security Policy pour sécuriser les flux de données.

## 🛠️ Installation et test en local...
1. Cloner le dépôt :
   ```bash
   git clone [https://github.com/BOUDI1/restaurquaiantique.git](https://github.com/BOUDI1/restaurquaiantique.git)