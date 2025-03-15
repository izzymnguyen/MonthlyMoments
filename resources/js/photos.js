document.addEventListener('DOMContentLoaded', function() {
    // Manually define images for each category
    const images = {
        all: [
            './resources/media/images/jan.jpg',
            './resources/media/images/feb.png'
        ],
        jan: [
            './resources/media/images/jan.jpg'

        ],
        feb: [
            './resources/media/images/feb.png'
        ]
    };

    const galleryContainer = document.getElementById('photoWall');
    const categorySelect = document.getElementById('months');

    // Function to display images for a selected category
    function displayImages(category) {
        galleryContainer.innerHTML = '';  // Clear the gallery first

        const categoryImages = images[category] || [];

        categoryImages.forEach(filename => {
            const imgElement = document.createElement('img');
            imgElement.src = filename; // Use the complete path directly
            imgElement.alt = `Image - ${filename}`;
            galleryContainer.appendChild(imgElement);
        });
    }

    // Display all images initially
    displayImages('all');

    // Add an event listener to the dropdown to filter images
    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        displayImages(selectedCategory);
    });
});
