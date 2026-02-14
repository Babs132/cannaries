export const fetchCanaryPhotos = async (query) => {
    // ON TESTE EN DUR (Remplace par ta clé si j'ai fait une erreur de recopie)
    const apiKey = "xQ961i4wVl6X3juedgl0fZvdBpaqEeK1yrJ0TjeEJN1wIZwyVryJthCf";

    try {
        const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': apiKey,
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            console.error(`❌ Erreur API (${res.status})`);
            return [];
        }

        const data = await res.json();
        return data.photos || [];
    } catch (error) {
        console.error("❌ Erreur de connexion :", error.message);
        return [];
    }
};