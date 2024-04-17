export class Formations {
	formations;

	constructor(data) {
		this.formations = data;
	}

	// CHECK //

	isFormationsValid() {
		return this.formations.length > 0 ? true : false;
	}

	// GETTERS //

	getFormations() {
		return this.formations;
	}
}
