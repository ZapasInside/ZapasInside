document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`);
        
        form.reset();
    });
});