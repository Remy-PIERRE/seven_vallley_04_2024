import { Formations } from "./Formations.js";
import { getDataFromJson } from "./json.js";
import {
	areDataInStorage,
	getDataFromStorage,
	isDataDurationValid,
} from "./storage.js";

export async function initData() {
	let data;

	if (areDataInStorage() && isDataDurationValid()) {
		data = await getDataFromStorage();
	} else {
		data = await getDataFromJson();
	}

	const formations = new Formations(data);
	return formations;
}
