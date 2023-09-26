const sizeCtrl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const handleCtrl = (evt) => {
	text.style.fontSize = `${evt.currentTarget.value}px`;
};

sizeCtrl.addEventListener("input", handleCtrl);
