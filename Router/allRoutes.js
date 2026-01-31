import { Route } from "./Route.js";

// Définition de la liste des routes
export const allRoutes = [
    // Route(URL, Titre, Chemin HTML, Chemin JS optionnel)
    new Route("/", "Accueil", "/pages/home.html"),
    
    new Route("/galerie", "Galerie Photos", "/pages/galerie.html", "/js/galerie.js"),
    
    new Route("/signin", "Connexion", "/pages/signin.html"),
    
    new Route("/reserver", "Réserver une table", "/pages/reserver.html")
];