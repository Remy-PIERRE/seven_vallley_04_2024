// CHECK STORAGE //

// 24 hours duration limit //
const durationLimit = 24 * 60 * 60 * 1000;

export function areDataInStorage() {
	return window.localStorage.getItem("timestamp") &&
		window.localStorage.getItem("formations")
		? true
		: false;
}

export function isDataDurationValid() {
	return Date.now() - window.localStorage.getItem("timestamp") < durationLimit
		? true
		: false;
}

// GET DATA FROM STORAGE //

export async function getDataFromStorage() {
	const dataFromStorage = window.localStorage.getItem("formations");
	const data = await JSON.parse(dataFromStorage);

	return data;
}

// SET DATA INTO STORAGE //

export function setDataIntoStorage(data) {
	const dataStringified = JSON.stringify(data);

	window.localStorage.setItem("timestamp", Date.now());
	window.localStorage.setItem("formations", dataStringified);
}
