
// Charger les documents depuis data.js
function generateResults() {
    const container = document.querySelector(".result-container");
    container.innerHTML = ""; // Nettoyer avant de remplir

    documents.forEach(doc => {
        const div = document.createElement("div");
        div.classList.add("result");
        div.setAttribute("data-keywords", doc.keywords);

        // Vérifier si un lien existe
        let content = doc.link 
            ? `${doc.icon} <span class="highlight"><a href="${doc.link}" target="_blank">${doc.text}</a></span>`
            : `${doc.icon} <span class="highlight">${doc.text}</span>`;

        div.innerHTML = content;
        container.appendChild(div);
    });

    setupSearch();
}

// Fonction de recherche dynamique
function setupSearch() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function() {
        let searchValue = this.value.toLowerCase().trim();
        let results = document.querySelectorAll(".result");
        let container = document.querySelector(".result-container");

        // Si le champ est vide, cacher tous les résultats
        if (searchValue === "") {
            results.forEach(result => result.style.display = "none");
            return;
        }

        // Filtrage dynamique des résultats
        let searchWords = searchValue.split(/\s+/); // Sépare les mots entrés par l'utilisateur

        results.forEach(result => {
            let keywords = result.getAttribute("data-keywords").toLowerCase();
            
            // Vérifier si tous les mots tapés existent dans n'importe quel ordre dans les mots-clés
            let match = searchWords.every(word => keywords.includes(word));

            result.style.display = match ? "block" : "none";
        });
    });

    // Cacher les résultats au chargement de la page
    document.querySelectorAll(".result").forEach(result => result.style.display = "none");
}

// Lancer la génération des résultats après que data.js ait été chargé
generateResults();

