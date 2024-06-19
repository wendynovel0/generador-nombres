document.getElementById('generate').addEventListener('click', generateRandomName);

function generateRandomName() {
    const nombres = [
        'Juan', 'Lucía', 'Pablo', 'Miguel', 'Daphne', 'Carlos', 'Maribel',
        'María', 'Luis', 'Ana', 'Sofía', 'Diego', 'Patricia', 'Ricardo',
        'Gabriela', 'Fernando', 'Teresa', 'José', 'Carmen', 'Raúl',
        'Diana', 'Alejandro', 'Verónica', 'Hugo', 'Sandra', 'Oscar',
        'Daniela', 'Alberto', 'Mónica', 'David', 'Eduardo'
    ];
    
    const apellidos = [
        'Pérez', 'Flores', 'Novelo', 'Solís', 'Herrera', 'Ruíz',
        'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez',
        'Morales', 'Navarro', 'Díaz', 'Álvarez', 'Vázquez',
        'Castillo', 'Jiménez', 'Moreno', 'Romero'
    ];
    

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido1Aleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
    const apellido2Aleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

    document.getElementById('random-name').textContent = `${nombreAleatorio} ${apellido1Aleatorio} ${apellido2Aleatorio}`;
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.width = `${Math.random() * 100 + 50}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    bubble.style.animationName = 'float';
    document.body.appendChild(bubble);
}

for (let i = 0; i < 40; i++) {
    createBubble();
}

