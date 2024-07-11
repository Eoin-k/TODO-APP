export const saveToLocal = (key, value) => {
	const stringValue = JSON.stringify(value);
	localStorage.setItem(key, stringValue);
};

export const getFromLocal = (key) => {
	const storedValue = localStorage.getItem(key);
	if (storedValue === null) {
		return [];
	}
	try {
		const parsedValue = JSON.parse(storedValue);
		return parsedValue;
	} catch (error) {
		console.error("Error Parsing JSON", error);
		return [];
	}
};
