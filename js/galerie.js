export async function loadGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    // Photos de secours si le fichier JSON ne répond pas
    const backupPhotos = [
        { "titre": "Image Secours 1", "url": "https://picsum.photos/800/600?random=1" },
        { "titre": "Image Secours 2", "url": "https://picsum.photos/800/600?random=2" }
    ];

    try {
        const response = await fetch('/js/galerie.json');
        if (!response.ok) throw new Error("Fichier JSON introuvable");
        
        const photos = await response.json();
        renderHtml(photos, container);
    } catch (error) {
        console.error("Erreur Fetch, chargement des images de secours :", error);
        renderHtml(backupPhotos, container);
    }
}

function renderHtml(data, container) {
    container.innerHTML = data.map(photo => `
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm border-0">
                <img src="${photo.url}" class="card-img-top rounded" alt="${photo.titre}" style="height:250px; object-fit:cover;">
                <div class="card-body bg-dark text-white text-center">
                    <p class="mb-0">${photo.titre}</p>
                </div>
            </div>
        </div>
    `).join('');
}