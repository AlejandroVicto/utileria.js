/**
 * Valida el formato de un correo electrónico.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * Valida si el texto contiene solo letras (mayúsculas y minúsculas), incluyendo vocales acentuadas.
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Valida si un número (como texto) cumple con una longitud máxima.
 */
function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

/**
 * Calcula la edad a partir de una fecha de nacimiento.
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * Valida si una persona es mayor de edad a partir de su fecha de nacimiento.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida si una contraseña cumple con los requisitos de seguridad:
 * Al menos una mayúscula, una minúscula, un número, un carácter especial y mínimo 8 caracteres.
 */
function validarPassword(password) {
    const minLongitud = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLongitud && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}

/**
 * Valida un número de control escolar, permitiendo solo alumnos de 7mo semestre en adelante.

 */
function validarNumeroControl(numeroControl) {
    const numStr = String(numeroControl).trim();
    if (numStr.length != 8) return false;

    const anioIngreso = parseInt(numStr.substring(0, 2), 10);

    if (isNaN(anioIngreso)) return false;

    return anioIngreso <= 23 || anioIngreso >= 50;
}

/**
 * Valida que un correo electrónico pertenezca a la institución (terminación @itoaxaca.edu.mx).
 */
function validarCorreoInstitucional(correo) {
    const regex = /^[^\s@]+@itoaxaca\.edu\.mx$/i;
    return regex.test(correo);
}
