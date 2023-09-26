function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const body = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector("button");

const handleClick = (evt) => {
	body.style.backgroundColor = getRandomHexColor();
	color.textContent = body.style.backgroundColor;
};

btn.addEventListener("click", handleClick);
