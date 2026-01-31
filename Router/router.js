import { Route } from "./Route.js"; // Vérifie si c'est Route.js ou route.js
import { allRoutes } from "./allRoutes.js";
// Titre par défaut du site
const titreApplication = "Quai Antique";

// Fonction pour gérer les clics sur les liens de navigation
window.route = (event) => {
    event = event || window.event;
    event.preventDefault(); // Empêche le rechargement de la page
    window.history.pushState({}, "", event.target.href);
    chargerContenuPage();
};

// Fonction principale qui charge le HTML et le JS de la page demandée
const chargerContenuPage = async () => {
    const path = window.location.pathname;
    
    // On cherche la route correspondante dans allRoutes.js
    const route = allRoutes.find((r) => r.url === path) || allRoutes[0];

    try {
        // 1. Récupération du fichier HTML (ex: pages/galerie.html)
        const response = await fetch(route.pathHtml);
        if (!response.ok) throw new Error("Page introuvable");
        const html = await response.text();

        // 2. Injection du HTML dans la zone "main-page" de ton index.html
        document.getElementById("main-page").innerHTML = html;

        // 3. Mise à jour du titre de l'onglet du navigateur
        document.title = route.title + " - " + titreApplication;

        // 4. Si la route a un fichier JS (comme la galerie), on le charge
        if (route.pathJS) {
            // On importe dynamiquement le module JS
            import("../" + route.pathJS).then((module) => {
                // On appelle la fonction de chargement spécifique (ex: loadGallery)
                if (path === "/galerie") {
                    module.loadGallery();
                }
                // Tu pourras ajouter d'autres conditions ici pour d'autres pages
            });
        }
    } catch (error) {
        console.error("Erreur de routage :", error);
        document.getElementById("main-page").innerHTML = "<h1>Erreur 404</h1><p>Page non trouvée.</p>";
    }
};

// Gère le bouton "Précédent/Suivant" du navigateur
window.onpopstate = chargerContenuPage;

// Charge la page initiale au démarrage
document.addEventListener("DOMContentLoaded", chargerContenuPage);