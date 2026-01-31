# Utilisation d'une image légère de serveur Nginx
FROM nginx:alpine

# Copier tous les fichiers de votre projet actuel dans le dossier de Nginx
# Cela inclut vos dossiers /pages, /router, /js, /scss et index.html
COPY . /usr/share/nginx/html

# Exposer le port 80 pour le trafic web (port standard de Nginx)
EXPOSE 80

# Commande pour lancer Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]