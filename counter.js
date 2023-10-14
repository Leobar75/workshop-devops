import isEven from "is-even";
let counter = 0;

export function setupCounter(element, add = 1) {
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter} | El numero es ${
      isEven(counter) ? "par" : "impar"
    }`;
  };
  element.addEventListener("click", () => setCounter(counter + add));
  setCounter(0);
}


export function addNumber(a, b) {
  return a - b;
}