const imageContainer = document.getElementById('images');

fetch('images/images.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP-fout: ${response.status}`);
        }
        return response.json();
    })
    .then(imageFiles => {
        imageFiles.forEach(file => {
            const img = document.createElement('img');
            img.src = `images/${file}`;
            img.alt = file;
            img.style.maxWidth = '300px';
            img.style.margin = '10px';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            imageContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Fout bij het laden van de afbeeldingslijst:', error);
        imageContainer.innerHTML = "<p style='color: white;'>Kon de afbeeldingen niet laden.</p>";
    });
