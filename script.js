function crearToDo() {
    
    const lista = document.getElementById('lista');
    
    const textInput = document.getElementById('texto');
    const text = textInput.value.trim();


    // Validar que se escribio una tarea
    if (text === '') {
        alert('Por favor, ingresa una tarea');
        return;
    }

    // Crear el div del todo
    const todo = document.createElement('div');
    todo.className= 'todo';

    const span = document.createElement('span');
    span.textContent = text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const botonB = document.createElement('button');
    botonB.textContent = '❌';
    botonB.className = 'boton-borrar';

    const eliminar = function () {
        lista.removeChild(todo);
    }

    span.addEventListener('click', function () {
        todo.classList.toggle('hecho');
        checkbox.checked = !checkbox.checked;
    });

    checkbox.addEventListener('change', function () {
        todo.classList.toggle('hecho');
    });

    botonB.addEventListener('click', eliminar);

    todo.appendChild(checkbox);
    todo.appendChild(span);
    todo.appendChild(botonB);

    lista.appendChild(todo);

    textInput.value = '';
}