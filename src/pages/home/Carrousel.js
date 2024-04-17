export class Carrousel {
	carrousel;
	formations;
	template = document.querySelector("#templateFormationCard");
	index = 0;
	maxCardsDisplay = 5;
	isAnimated = false;

	constructor(carrousel, formations) {
		this.carrousel = carrousel;
		this.formations = formations;

		this.setupCards();
		this.setupButtons();
	}

	// SETUP INDEX //
	setIndexPrev() {
		this.index =
			this.index - 1 < 0 ? this.formations.length - 1 : this.index - 1;
	}

	setIndexNext() {
		this.index = this.index + 1 >= this.formations.length ? 0 : this.index + 1;
	}

	// SETUP CARDS //

	setupCards() {
		this.resetCardsDisplayed();

		const formationsToDisplay = this.getFormationsToDisplay();
		formationsToDisplay.map((formation) => this.displayCard(formation));
	}

	resetCardsDisplayed() {
		const container = this.carrousel.querySelector(".carroussel--cards");
		container.innerHTML = ``;
	}

	displayCard(formation) {
		const template = this.template.content.cloneNode(true);

		template.querySelector(".formationCard--container").href =
			formation["slug"];
		template.querySelector(".formationCardTitle").innerHTML =
			formation["title"];
		template.querySelector(".formationCardTitleDescription").innerHTML =
			formation["titleDescription"];
		template.querySelector(".formationCardDuration").innerHTML =
			formation["duration"]["hours"];

		const container = this.carrousel.querySelector(".carroussel--cards");
		container.appendChild(template);
	}

	// SETUP BUTTONS //

	setupButtons() {
		this.carrousel
			.querySelector(".btn-prev")
			.addEventListener("click", this.goToPrevCard.bind(this));
		this.carrousel
			.querySelector(".btn-next")
			.addEventListener("click", this.goToNextCard.bind(this));
		this.carrousel
			.querySelector(".carroussel--cards")
			.addEventListener("transitionend", this.handleAnimationEnd.bind(this));
	}

	goToPrevCard() {
		if (this.isAnimated) return;
		this.isAnimated = true;

		this.carrousel.querySelector(".carroussel--cards").style.left = "0";

		this.setIndexPrev();
	}

	goToNextCard() {
		if (this.isAnimated) return;
		this.isAnimated = true;

		if (window.innerWidth < 976) {
			this.carrousel.querySelector(".carroussel--cards").style.left = "-200%";
		} else {
			this.carrousel.querySelector(".carroussel--cards").style.left = "-66.6%";
		}

		this.setIndexNext();
	}

	handleAnimationEnd() {
		this.isAnimated = false;
		this.carrousel.querySelector(".carroussel--cards").style.transition =
			"none";

		if (window.innerWidth < 976) {
			this.carrousel.querySelector(".carroussel--cards").style.left = "-100%";
		} else {
			this.carrousel.querySelector(".carroussel--cards").style.left = "-33.3%";
		}

		setTimeout(() => {
			this.carrousel.querySelector(".carroussel--cards").style.transition =
				"all 0.4s ease-in-out";
		}, 0);

		this.setupCards();
	}

	// GETTERS //

	getFormationsToDisplay() {
		const formationsToDisplay = [];
		console.log("index : ", this.index);

		for (let i = 0; i < this.maxCardsDisplay; i++) {
			const index =
				this.index + i <= this.formations.length - 1
					? this.index + i
					: this.index + i - this.formations.length;

			formationsToDisplay.push(this.formations[index]);
		}

		console.log("Formations to display : ");
		console.table(formationsToDisplay);
		return formationsToDisplay;
	}
}
