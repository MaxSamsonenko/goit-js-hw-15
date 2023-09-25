let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

const handleDecrement = (evt) => {
	counterValue -= 1;
	counter.textContent = counterValue;
};
const handleIncrement = (evt) => {
	counterValue += 1;
	counter.textContent = counterValue;
};

decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);
