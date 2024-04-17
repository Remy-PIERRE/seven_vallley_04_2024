import { setDataIntoStorage } from "./storage.js";

export async function getDataFromJson() {
	try {
		const response = await fetch("../../public/json/formations.json");
		const data = await response.json();

		setDataIntoStorage(data);
		return data;
	} catch (error) {
		console.log("Error getting formations.json !");
	}
}
