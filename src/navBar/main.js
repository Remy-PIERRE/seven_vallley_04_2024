export function initNavBar(page) {
	const linkElementMobile = document.querySelector(`#linkElementMobile${page}`);
	linkElementMobile.classList.toggle("activated");

	const linkElementDesk = document.querySelector(`#linkElementDesk${page}`);
	linkElementDesk.classList.toggle("activated");
}
