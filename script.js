document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const imagesContainer = document.getElementById('imagesContainer');

    async function loadDogImages() {
        loader.style.display = 'block';
        imagesContainer.innerHTML = ''; 
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
            const data = await response.json();
            displayImages(data.message);
        } catch (error) {
            console.error('Ошибка загрузки собак:', error);
        } finally {
            loader.style.display = 'none';
        }
    }

    async function loadCatImages() {
        loader.style.display = 'block';
        imagesContainer.innerHTML = ''; 
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            const data = await response.json();
            const catImages = data.map(cat => cat.url);
            displayImages(catImages);
        } catch (error) {
            console.error('Ошибка загрузки котов:', error);
        } finally {
            loader.style.display = 'none';
        }
    }

    function displayImages(images) {
        images.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Изображение';
            img.classList.add('gallery__image');
            imagesContainer.appendChild(img);
        });
    }

    document.getElementById('loadDogs').addEventListener('click', loadDogImages);
    document.getElementById('loadCats').addEventListener('click', loadCatImages);
});
