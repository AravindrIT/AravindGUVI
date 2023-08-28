document.getElementById('getDogImage').addEventListener('click', () => {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the dog image
            const dogImage = document.getElementById('dogImage');
            dogImage.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
});