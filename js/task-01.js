const itemElems = document.querySelectorAll(".item");
console.log(`Number of categories ${itemElems.length}`);
itemElems.forEach((item) => {
	const firstElem = item.firstElementChild;
	const lastElem = item.lastElementChild;
	console.log(`Category: ${firstElem.textContent}`);
	console.log(`Elements: ${lastElem.children.length}`);
});
