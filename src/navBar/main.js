export function initNavBar(page) {
	const linkElementMobile = document.querySelector(`#linkElementMobile${page}`);
	if (linkElementMobile) {
		linkElementMobile.classList.toggle("activated");
	}

	const linkElementDesk = document.querySelector(`#linkElementDesk${page}`);
	if (linkElementDesk) {
		linkElementDesk.classList.toggle("activated");
	}
}
