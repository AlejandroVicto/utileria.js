const form = document.getElementById('registroForm');
const modal = document.getElementById('modalResult');
const btnCerrarModal = document.getElementById('btnCerrarModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalIcon = document.getElementById('modalIcon');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const numeroControl = document.getElementById('numeroControl').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validación nombre (usa soloLetras)
    if (!nombre || !soloLetras(nombre)) {
        document.getElementById('grupo-nombre').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-nombre').classList.remove('invalido');
    }

    // Validación número de control (usa validarNumeroControl)
    if (!numeroControl || !validarNumeroControl(numeroControl)) {
        document.getElementById('grupo-control').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-control').classList.remove('invalido');
    }

    // Validación teléfono (usa validarLongitud)
    if (!telefono || !validarLongitud(telefono, 10)) {
        document.getElementById('grupo-telefono').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-telefono').classList.remove('invalido');
    }

    // Validación fecha
    if (!fecha) {
        document.getElementById('grupo-fecha').classList.add('invalido');
        isValid = false;
    } else {
        document.getElementById('grupo-fecha').classList.remove('invalido');
    }

    // Validación correo institucional
    if (!correo || !validarCorreoInstitucional(correo)) {
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
        // usa calcularEdad y esMayorDeEdad
        const edad = calcularEdad(fecha);
        const esMayor = esMayorDeEdad(fecha);

        modalTitle.textContent = esMayor ? "¡Acceso Permitido!" : "Acceso Denegado";
        let msj = `Hola ${nombre}.<br><br>Tienes <strong>${edad} años</strong>.`;
        if (esMayor) {
            msj += "<br><br>Eres mayor de edad, puedes continuar.";
        } else {
            msj += "<br><br>Lo sentimos, debes ser mayor de 18 años.";
        }

        modalMessage.innerHTML = msj;
        modal.classList.add('active');
    }
});

btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('active');
});
