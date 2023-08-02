export function deshabilitarSubmit(input) {
	const [nombre, email, asunto, mensaje] = input;
	const botonSubmit = document.getElementById("botonSubmit");

	const camposValidados =
		nombre.validity.valid && email.validity.valid && asunto.validity.valid && mensaje.validity.valid;

	console.log("nombre: ", nombre.validity.valid);
	console.log("email: ", email.validity.valid);
	console.log("asunto: ", asunto.validity.valid);
	console.log("mensaje: ", mensaje.validity.valid);
	console.log("camposValidados: ", camposValidados);

	if (camposValidados) {
		botonSubmit.disabled = false;
	} else {
		botonSubmit.disabled = true;
	}
}
