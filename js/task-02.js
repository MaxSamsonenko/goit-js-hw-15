const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const ul = document.querySelector("#ingredients");

const markup = ingredients.map((item) => {
	const li = document.createElement("li");
	li.innerText = item;
	li.classList = "item";
	return li;
});
ul.append(...markup);
