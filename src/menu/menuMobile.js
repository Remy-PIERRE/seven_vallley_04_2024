export class MenuMobile {
	menu;
	buttonHamburger;
	buttonCross;
	opened;
	openedClassName = "opened";

	constructor() {
		this.setupMenu();
		this.setupButtonHamburger();
		this.setupButtonCross();

		this.opened = false;
	}

	// SETUP ELEMENTS //

	setupMenu() {
		this.menu = document.querySelector("#menuMobile");
		this.menu.addEventListener("opened", this.handleMenuOpening.bind(this));
	}

	setupButtonHamburger() {
		this.buttonHamburger = document.querySelector("#buttonHamburger");
		this.buttonHamburger.addEventListener(
			"click",
			this.switchMenuStateOpened.bind(this)
		);
	}

	setupButtonCross() {
		this.buttonCross = document.querySelector("#buttonCross");
		this.buttonCross.addEventListener(
			"click",
			this.setMenuStateOpenedFalse.bind(this)
		);
	}

	// STATE //

	switchMenuStateOpened() {
		this.opened = !this.opened;
		this.menu.dispatchEvent(new CustomEvent("opened"));
	}

	setMenuStateOpenedFalse() {
		this.opened = false;
		this.menu.dispatchEvent(new CustomEvent("opened"));
	}

	setMenuStateOpenedTrue() {
		this.opened = true;
		this.menu.dispatchEvent(new CustomEvent("opened"));
	}

	// HANDLE MENU OPENING //

	handleMenuOpening() {
		if (this.opened) this.openMenu();
		else this.closeMenu();
	}

	openMenu() {
		if (!this.menu.classList.contains(this.openedClassName)) {
			this.menu.classList.toggle(this.openedClassName);
		}
	}

	closeMenu() {
		if (this.menu.classList.contains(this.openedClassName)) {
			this.menu.classList.toggle(this.openedClassName);
		}
	}
}
