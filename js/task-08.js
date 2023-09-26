const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;

const handleSubmit = (evt) => {
	evt.preventDefault();
	if (email.value === "" || password.value === "") {
		return alert("Form fields cannot be empty!");
	}
	console.log({
		email: email.value,
		password: password.value,
	});
	form.reset();
};

form.addEventListener("submit", handleSubmit);
