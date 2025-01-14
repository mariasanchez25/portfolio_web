document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imgexp'); // Obtén todas las imágenes con clase .imgexp

    function zoomOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight; // La posición del scroll más la altura del viewport

        images.forEach(function(img) {
            // Obtenemos la posición de la imagen con respecto al documento
            const rect = img.getBoundingClientRect();
            const imagePosition = rect.top + window.scrollY;

            // Detecta si el scroll va hacia abajo o hacia arriba
            if (scrollPosition > imagePosition) {
                img.style.transition = 'transform 0.5s ease'; // Transición suave para el zoom
                img.style.transform = 'scale(1)'; // Aplica zoom cuando la imagen entra
            } else {
                img.style.transition = 'transform 0.5s ease'; // Transición suave
                img.style.transform = 'scale(0.8)'; // Vuelve a un tamaño más pequeño
            }
        });
    }

    // Llamar la función de zoom al hacer scroll
    window.addEventListener('scroll', zoomOnScroll);

    // Ejecuta la función cuando la página se carga por primera vez (para aplicar el zoom desde el principio si ya están visibles)
    zoomOnScroll();
});

// carrusel de imagenes imágenes //
    document.addEventListener('DOMContentLoaded', () => {
        let index = 0;
        const carrusel = document.querySelector('.carrusel');
        const prevButton = document.querySelector('.prev-btn');
        const nextButton = document.querySelector('.next-btn');
        const images = document.querySelectorAll('.carrusel img');
        const imageWidth = 625; // Ajusta el ancho de las imágenes

        // Duplicamos las imágenes al inicio y al final
        const firstClone = images[0].cloneNode(true);
        const lastClone = images[images.length - 1].cloneNode(true);
        carrusel.appendChild(firstClone);
        carrusel.insertBefore(lastClone, images[0]);

        const updatedImages = document.querySelectorAll('.carrusel img'); // Actualizamos la lista de imágenes
        const totalImages = updatedImages.length;

        // Ajustar posición inicial
        carrusel.style.transform = `translateX(-${imageWidth}px)`;

        function showImage() {
            carrusel.style.transition = 'transform 0.5s ease-in-out';
            carrusel.style.transform = `translateX(-${(index + 1) * imageWidth}px)`;
        }

        carrusel.addEventListener('transitionend', () => {
            // Verificar y ajustar sin transición si estamos en un clon
            if (index === totalImages - 2) {
                index = 0;
                carrusel.style.transition = 'none';
                carrusel.style.transform = `translateX(-${imageWidth}px)`;
            } else if (index === -1) {
                index = totalImages - 3;
                carrusel.style.transition = 'none';
                carrusel.style.transform = `translateX(-${(index + 1) * imageWidth}px)`;
            }
        });

        prevButton.addEventListener('click', () => {
            index--;
            showImage();
        });

        nextButton.addEventListener('click', () => {
            index++;
            showImage();
        });
    });
