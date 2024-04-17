import { initData } from "./data/main.js";
import { initMenu } from "./menu/main.js";

window.addEventListener("load", initApp);

async function initApp() {
	// MENU MOBILE //
	initMenu();

	// FORMATIONS DATA //
	const formations = await initData();

	if (!formations.isFormationsValid()) {
		console.log("No formation present !");
	}

	console.log("Formations : ");
	console.table(formations.getFormations());

	// GET PAGE CURRENT //

	// HOME PAGE //

	// FORMATIONS PAGE //

	// FORMATION DETAILS PAGE //

	// FORMATION PAGE //
}
