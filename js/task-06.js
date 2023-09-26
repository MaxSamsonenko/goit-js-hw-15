const inputField = document.querySelector("#validation-input");

const handleInput = (evt) => {
	const inputStr = evt.currentTarget.value;
	const dataValue = inputField.dataset.length;
	if (inputStr.length === Number(dataValue)) {
		return (inputField.classList = "valid");
	}
	if (inputStr.length === 0) {
		return (inputField.classList = "");
	}
	return (inputField.classList = "invalid");
};

inputField.addEventListener("blur", handleInput);
