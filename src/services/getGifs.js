const API_KEY = 'ORW0lH7Jwr1zeH9rLPXEoNMkw9xaixHN';

export default function getGifs ({search = 'darksouls'} = {}) {

    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=5&offset=0&rating=g&lang=en`;

    return (
            fetch(API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
            const {data = []} = jsonResponse; // Destructure

            if (Array.isArray(data))
            {
                const gifs = data.map(element => {
                    const {id, title, images} = element;
                    const { url } = images.downsized_medium;
                    return { id, title, url }
                });
                return gifs;
            }
        })
    )
}