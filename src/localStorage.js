export const saveToLocal = (key, value) => {
	const stringValue = JSON.stringify(value);
	localStorage.setItem(key, stringValue);
};

export const getFromLocal = (key) => {
	const storedValue = localStorage.getItem(key);
	if (storedValue === null && key === "ID"){
		return 0
	}
	if (storedValue === null) {
		return [];
	} else{
	try {
		const parsedValue = JSON.parse(storedValue);
		return parsedValue;
	} catch (error) {
		console.error("Error Parsing JSON", error);
		return [];
	}
}
};
