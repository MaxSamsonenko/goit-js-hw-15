const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const handleInput = (evt) => {
	if (evt.currentTarget.value === "") {
		return (span.textContent = "Anonymous!");
	}
	span.textContent = evt.currentTarget.value;
};

input.addEventListener("input", handleInput);
