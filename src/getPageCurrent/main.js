export function getPageCurrent() {
	let pageCurrent;

	switch (window.location.pathname) {
		case "/":
			pageCurrent = "Home";
			break;
		case "/index.html":
			pageCurrent = "Home";
			break;
		case "/nos-formations.html":
			pageCurrent = "Formations";
			break;
		case "/nos-cours-en-ligne.html":
			pageCurrent = "CoursEnLigne";
			break;
		case "/formation-details.html":
			pageCurrent = "FormationDetails";
			break;
		case "/formation.html":
			pageCurrent = "Formation";
			break;
		default:
			console.log("Error when getting current page !");
			break;
	}

	return pageCurrent;
}
