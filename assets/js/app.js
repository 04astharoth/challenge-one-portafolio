import { valida } from "./validacion.js";
import { deshabilitarSubmit } from "./deshabilitarSubmit.js";

const inputs = document.querySelectorAll(".contacto__input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", (evento) => {
		valida(evento.target);
	});

	inputs[i].addEventListener("keyup", () => {
		deshabilitarSubmit(inputs);
	});
}
