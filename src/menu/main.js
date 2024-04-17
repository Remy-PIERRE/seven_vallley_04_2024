import { MenuMobile } from "./menuMobile.js";

export function initMenu() {
	// menu mobile buttons //
	// document
	// .querySelector("#menuMobileButton")
	// .addEventListener("click", handleMenuButtonClick);
	new MenuMobile();
}

// MENU MOBILE //
function handleMenuButtonClick() {
	const menuMobile = document.querySelector("#menuMobileContainer");

	if (isMenuMobileIsOPen()) {
		closeMenuMobile();
	}

	openMenuMobile();

	// menu mobile cross button //
	document
		.querySelector("#menuMobileCrossButton")
		.addEventListener("click", closeMenuMobile);

	function isMenuMobileIsOPen() {
		return menuMobile.classList.contains("opened") ? true : false;
	}

	function openMenuMobile() {
		if (!menuMobile.classList.contains("opened")) {
			menuMobile.classList.toggle("opened");
		}
	}

	function closeMenuMobile() {
		if (menuMobile.classList.contains("opened")) {
			menuMobile.classList.toggle("opened");
		}
	}
}
