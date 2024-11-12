
window.onload = function() {
    
    const miniImages = document.querySelectorAll('.miniImage');
    const grandeImage = document.getElementById('grandeImage');

    
    function updateGrandeImage(src, alt) {
        grandeImage.style.backgroundImage = `url('${src}')`;
        grandeImage.textContent = alt;
    }

    
    function resetGrandeImage() {
        grandeImage.style.backgroundImage = 'none';
        grandeImage.textContent = 'Sélectionner une image';
    }

    
    miniImages.forEach((image) => {
        image.addEventListener('mouseover', function() {
            updateGrandeImage(image.src, image.alt);
        });
        image.addEventListener('mouseleave', function() {
            resetGrandeImage();
        });

        
        image.addEventListener('focus', function() {
            updateGrandeImage(image.src, image.alt);
        });

        image.addEventListener('blur', function() {
            resetGrandeImage();
        });
    });

    
    miniImages.forEach((image, index) => {
        image.setAttribute('tabindex', index + 1);
    });
};
