export class Filter {
	formations;
	buttons;

	constructor(formations) {
		this.formations = formations.getFormations();
		this.formationCards = [
			...document.querySelectorAll(".formationCard--container"),
		];

		this.setupButtons();
	}

	// SETUP //

	setupButtons() {
		this.buttons = [...document.querySelectorAll(".filter--button button")];

		this.buttonTousActivation();

		this.buttons.map((button) =>
			button.addEventListener("click", this.handleButtonClick.bind(this))
		);
	}

	handleButtonClick(event) {
		const buttonSelected = event.currentTarget;

		if (!this.isActivated(buttonSelected)) {
			this.buttonActivation(event.target);
		} else {
			this.buttonTousActivation();
		}
	}

	resetButtons() {
		this.buttons.map((button) => {
			if (button.classList.contains("activated"))
				button.classList.toggle("activated");
		});
	}

	buttonTousActivation() {
		this.resetButtons();
		this.resetDisplayedCards();

		const buttonTous = this.buttons.find(
			(button) => button.innerText === "Tous"
		);
		if (buttonTous && !buttonTous.classList.contains("activated")) {
			buttonTous.classList.toggle("activated");
		}
	}

	buttonActivation(button) {
		this.resetButtons();
		this.resetDisplayedCards();

		button.classList.toggle("activated");
		this.setDisplayedCards(button.dataset["category"]);
	}

	// CHECK //

	isActivated(button) {
		return button.classList.contains("activated") ? true : false;
	}

	// FORMATIONS //

	resetDisplayedCards() {
		this.formationCards.map((card) => {
			if (card.classList.contains("hidden")) card.classList.toggle("hidden");
		});
	}

	setDisplayedCards(category) {
		this.formationCards.map((card) => {
			const formation = this.formations.find(
				(formation) =>
					formation["id"].toString() === card.dataset["id"].toString()
			);

			console.table(this.formations);
			console.log(formation);
			console.log(formation["techno"], category);

			if (formation["techno"] !== category) {
				card.classList.toggle("hidden");
			}
		});
	}
}
