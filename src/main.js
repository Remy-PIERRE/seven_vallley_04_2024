import { getPageCurrent } from "./getPageCurrent/main.js";
import { initData } from "./data/main.js";
import { initMenu } from "./menu/main.js";
import { initHomePage } from "./pages/home/main.js";
import { initNavBar } from "./navBar/main.js";
import { initSearchPage } from "./pages/search/main.js";

window.addEventListener("load", initApp);

async function initApp() {
	// ALL PAGES //

	// GET PAGE CURRENT //
	const page = getPageCurrent();

	// MENU MOBILE //
	initMenu();

	// NAV BAR //
	initNavBar(page);

	// FORMATIONS DATA //
	const formations = await initData();

	if (!formations.isFormationsValid()) {
		return console.log("No formation present !");
	}

	console.log("Formations : ");
	console.table(formations.getFormations());

	// HOME PAGE //
	if (page === "Home") {
		initHomePage(formations);
	}

	// FORMATIONS PAGE //
	if (page === "Formations" || page === "CoursEnLigne") {
		initSearchPage(formations);
	}

	// FORMATION DETAILS PAGE //

	// FORMATION PAGE //
}
