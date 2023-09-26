const sizeCtrl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
text.style.fontSize = `${sizeCtrl.value}px`;

const handleCtrl = (evt) => {
	text.style.fontSize = `${evt.currentTarget.value}px`;
};

sizeCtrl.addEventListener("input", handleCtrl);
