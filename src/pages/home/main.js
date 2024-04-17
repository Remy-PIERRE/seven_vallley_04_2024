import { Carrousel } from "./Carrousel.js";

export function initHomePage(formations) {
	// FORMATIONS INTRA CARROUSEL //
	const carrouselIntra = document.querySelector("#carrouselIntra");
	const formationsIntra = formations.getFormationsIntra();
	new Carrousel(carrouselIntra, formationsIntra);

	// COURS EN LIGNE //
	// const carrouselEnLigne = document.querySelector("#carrouselEnLigne");
	// const formationsEnLigne = formations.getFormationsEnLigne();
	// new Carrousel(carrouselEnLigne, formationsEnLigne);
}
