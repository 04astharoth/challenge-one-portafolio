function verificarNombre(input) {
	const nombre = input.value;
	const regEx = /^[A-Za-z\s]+$/; // descartando caracteres especiales.
	// console.log("tiene caracteres especiales?", !regEx.test(nombre));

	if (input.validity.valueMissing) {
		// console.log("A");
		input.setCustomValidity("El campo nombre debe diligenciarse.");
	} else if (nombre.length > 50) {
		// console.log("B");
		input.setCustomValidity("El campo nombre debe tener maximo 50 caracteres.");
	} else if (!regEx.test(nombre)) {
		// console.log("C");
		input.setCustomValidity("El campo nombre solo puede contener letras.");
	} else {
		// console.log("D");
		input.setCustomValidity("");
	}
	// console.log(input.validationMessage); //viendo el mensaje almacenado en la propiedad validationMessage
}

function verificarEmail(input) {
	const email = input.value;
	const regEx =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	console.log("correo invalido: ", !regEx.test(email));

	if (input.validity.valueMissing) {
		// console.log("A");
		input.setCustomValidity("El campo Email debe diligenciarse.");
	} else if (!regEx.test(email)) {
		// console.log("B");
		input.setCustomValidity("Email invalido. Ej: email@example.com.");
	} else {
		// console.log("D");
		input.setCustomValidity("");
	}
}

function verificarAsunto(input) {
	const asunto = input.value;

	if (input.validity.valueMissing) {
		// console.log("A");
		input.setCustomValidity("El campo Asunto debe diligenciarse.");
	} else if (asunto.length > 50) {
		// console.log("B");
		input.setCustomValidity("El campo Asunto debe tener maximo 50 caracteres.");
	} else {
		// console.log("D");
		input.setCustomValidity("");
	}
}

function verificarMensaje(input) {
	const mensaje = input.value;

	if (input.validity.valueMissing) {
		// console.log("A");
		input.setCustomValidity("El campo Mensaje debe diligenciarse.");
	} else if (mensaje.length > 300) {
		// console.log("B");
		input.setCustomValidity("El campo Mensaje debe tener maximo 300 caracteres.");
	} else {
		// console.log("D");
		input.setCustomValidity("");
	}
}
// contador de caracteres para el mensaje
const textArea = document.getElementsByName("mensaje")[0];

textArea.addEventListener("input", function () {
	contadorTextArea(textArea);
});

function contadorTextArea(input) {
	const contador = document.querySelector(".contacto__contador");
	contador.innerText = `${input.value.length}/300`;
}

export const validador = {
	nombre: (input) => verificarNombre(input),
	email: (input) => verificarEmail(input),
	asunto: (input) => verificarAsunto(input),
	mensaje: (input) => verificarMensaje(input),
};
