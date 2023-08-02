import { validador } from "./validaciones.js";

export function valida(input) {
	const tipoInput = input.dataset.tipo;
	// console.log(input.validity);
	console.log("tipo de input =", tipoInput);

	// primero se hacen validaciones de campo para los errores personalizados
	if (validador[tipoInput]) {
		console.log("validity =", input.validity.valid); // imprime el estado valides global, puede ser true o false
		validador[tipoInput](input); // se accede al objeto, en la propiedad tipoInput, se pasa parametro input
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove("contacto__input-container--invalid");
		input.parentElement.querySelector(".contacto__input-message-error").innerHTML = "";
	} else {
		input.parentElement.classList.add("contacto__input-container--invalid");
		input.parentElement.querySelector(".contacto__input-message-error").innerHTML = input.validationMessage;
	}
}