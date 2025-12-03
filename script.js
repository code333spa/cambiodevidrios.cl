// Carrusel automático de imágenes de fondo
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        // Remover clase active de la slide actual
        slides[currentSlide].classList.remove('active');
        
        // Calcular el índice de la siguiente slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Agregar clase active a la nueva slide
        slides[currentSlide].classList.add('active');
    }
    
    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Efecto de parallax suave al mover el mouse (opcional)
    /*
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
    
    slides.forEach(slide => {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        slide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });
    });
*/
    
    // Agregar evento al botón de WhatsApp para tracking (opcional)
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    whatsappBtn.addEventListener('click', function() {
        console.log('Click en botón de WhatsApp');
        // Aquí puedes agregar analytics si lo necesitas
    });
});
