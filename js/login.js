const form = document.getElementById('loginForm');
const modal = document.getElementById('modalResult');
const btnCerrarModal = document.getElementById('btnCerrarModal');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validación correo
    if (!correo || !validarCorreo(correo)) {
        document.getElementById('grupo-correo').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-correo').classList.remove('invalido');
    }

    // Validación password
    if (!password || !validarPassword(password)) {
        document.getElementById('grupo-password').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-password').classList.remove('invalido');
    }

    if (isValid) {
        document.getElementById('modalTitle').textContent = "¡Bienvenido!";
        document.getElementById('modalTitle').style.color = "var(--success)";
        document.getElementById('modalMessage').innerHTML = `Has iniciado sesión correctamente con:<br><strong>${correo}</strong>`;
        modal.classList.add('active');
    }
});

btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('active');
});
