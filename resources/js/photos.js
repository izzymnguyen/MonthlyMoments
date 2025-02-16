document.addEventListener('DOMContentLoaded', function() {
    // Manually define images for each category
    const images = {
        all: [
            './resources/media/images/photoWall/Jan/20241231_203436.jpg',
            './resources/media/images/photoWall/Jan/20241231_203603.jpg',
            './resources/media/images/photoWall/Jan/20241231_203848.jpg',
            './resources/media/images/photoWall/Jan/20241231_204054.jpg',
            './resources/media/images/photoWall/Jan/20241231_204241.jpg',
            './resources/media/images/photoWall/Jan/20241231_204726.jpg',
            './resources/media/images/photoWall/Jan/20250101_000335.jpg',
            './resources/media/images/photoWall/Jan/20250101_000937.jpg',
            './resources/media/images/photoWall/Jan/20250119_203645 (1).jpg',
            './resources/media/images/photoWall/Jan/20250119_203645.jpg',
            './resources/media/images/photoWall/Jan/20250120_135303.jpg',
            './resources/media/images/photoWall/Jan/20250123_171127.jpg',
            './resources/media/images/photoWall/Jan/20250125_180508.jpg',
            './resources/media/images/photoWall/Jan/20250131_225035.jpg',
            './resources/media/images/photoWall/Jan/20250201_104251.jpg',
            './resources/media/images/photoWall/Jan/20250201_122100.jpg',
            './resources/media/images/photoWall/Jan/20250201_181215.jpg',
            './resources/media/images/photoWall/Jan/DSC05741.JPG',
            './resources/media/images/photoWall/Jan/DSC05745.JPG',
            './resources/media/images/photoWall/Jan/DSC05749.JPG',
            './resources/media/images/photoWall/Jan/DSC05757.JPG',
            './resources/media/images/photoWall/Jan/DSC05762.JPG',
            './resources/media/images/photoWall/Jan/DSC05768.JPG',
            './resources/media/images/photoWall/Jan/DSC05774.JPG',
            './resources/media/images/photoWall/Jan/DSC05791.JPG',
            './resources/media/images/photoWall/Jan/DSC05799.JPG',
            './resources/media/images/photoWall/Jan/DSC05805.JPG',
            './resources/media/images/photoWall/Jan/DSC05809.JPG',
            './resources/media/images/photoWall/Jan/IMG_8154.jpg',
            './resources/media/images/photoWall/Jan/VideoCapture_20250101-022657.jpg'
        ],
        jan: [
            './resources/media/images/photoWall/Jan/20241231_203436.jpg',
            './resources/media/images/photoWall/Jan/20241231_203603.jpg',
            './resources/media/images/photoWall/Jan/20241231_203848.jpg',
            './resources/media/images/photoWall/Jan/20241231_204054.jpg',
            './resources/media/images/photoWall/Jan/20241231_204241.jpg',
            './resources/media/images/photoWall/Jan/20241231_204726.jpg',
            './resources/media/images/photoWall/Jan/20250101_000335.jpg',
            './resources/media/images/photoWall/Jan/20250101_000937.jpg',
            './resources/media/images/photoWall/Jan/20250119_203645 (1).jpg',
            './resources/media/images/photoWall/Jan/20250119_203645.jpg',
            './resources/media/images/photoWall/Jan/20250120_135303.jpg',
            './resources/media/images/photoWall/Jan/20250123_171127.jpg',
            './resources/media/images/photoWall/Jan/20250125_180508.jpg',
            './resources/media/images/photoWall/Jan/20250131_225035.jpg',
            './resources/media/images/photoWall/Jan/20250201_104251.jpg',
            './resources/media/images/photoWall/Jan/20250201_122100.jpg',
            './resources/media/images/photoWall/Jan/20250201_181215.jpg',
            './resources/media/images/photoWall/Jan/DSC05741.JPG',
            './resources/media/images/photoWall/Jan/DSC05745.JPG',
            './resources/media/images/photoWall/Jan/DSC05749.JPG',
            './resources/media/images/photoWall/Jan/DSC05757.JPG',
            './resources/media/images/photoWall/Jan/DSC05762.JPG',
            './resources/media/images/photoWall/Jan/DSC05768.JPG',
            './resources/media/images/photoWall/Jan/DSC05774.JPG',
            './resources/media/images/photoWall/Jan/DSC05791.JPG',
            './resources/media/images/photoWall/Jan/DSC05799.JPG',
            './resources/media/images/photoWall/Jan/DSC05805.JPG',
            './resources/media/images/photoWall/Jan/DSC05809.JPG',
            './resources/media/images/photoWall/Jan/IMG_8154.jpg',
            './resources/media/images/photoWall/Jan/VideoCapture_20250101-022657.jpg'
        ],
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
