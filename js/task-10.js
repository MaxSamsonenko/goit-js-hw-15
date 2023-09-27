function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
	let boxes = [];
	let boxSize = 30;
	for (let i = 0; i < amount; i++) {
		if (i !== 0) {
			boxSize += 10;
		}
		let box = document.createElement("div");
		box.style.backgroundColor = getRandomHexColor();
		box.style.width = `${boxSize}px`;
		box.style.height = `${boxSize}px`;
		boxes.push(box);
	}
	return boxes;
};

const destroyBoxes = () => {
	boxesContainer.innerHTML = "";
};

const handleCreate = (e) => {
	const boxes = createBoxes(input.value);
	boxesContainer.append(...boxes);
	input.value = "";
};
const handleDestroy = (e) => {
	destroyBoxes();
};

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);
