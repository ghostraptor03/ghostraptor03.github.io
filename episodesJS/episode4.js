document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const episode4 = data.episodes.find(episode => episode.episodeId === 4);
            if (episode4) {
                const title = document.createElement('h1');
                title.textContent = episode4.title;
                document.body.appendChild(title);

                const description = document.createElement('p');
                description.textContent = episode4.description;
                document.body.appendChild(description);

                episode4.texts.forEach((text, index) => {
                    const container = document.createElement('div');
                    container.classList.add('text-image-container');

                    const textElement = document.createElement('div');
                    textElement.classList.add('text');
                    const title = document.createElement('h2');
                    title.textContent = text.title;
                    const content = document.createElement('p');
                    content.textContent = text.content;
                    textElement.appendChild(title);
                    textElement.appendChild(content);
                    container.appendChild(textElement);

                    const imageUrl = episode4.images[index];
                    if (imageUrl) {
                        const image = document.createElement('img');
                        image.src = imageUrl;
                        image.classList.add('episode-image'); 
                        container.appendChild(image);
                    }

                    document.body.appendChild(container);
                });
            } else {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Episode 4 data not found.';
                document.body.appendChild(errorMessage);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
