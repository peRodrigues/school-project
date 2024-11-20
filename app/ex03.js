function numAoQuadrado(num) {
  return num ** 2
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".main__form");
  const input = document.querySelector(".main__input");
  const output = document.querySelector(".main__output");

  const processInput = (event) => {
      event.preventDefault(); 
      const inputValue = input.value;

      if (isNaN(inputValue) || inputValue.trim() === "") {
          output.textContent = ">_ Digite um número válido";
      } else {
          const number = Number(inputValue);
          const squared = numAoQuadrado(number); 
          output.textContent = `>_ O quadrado de ${number} é ${squared}`;
      }
  };

  form.addEventListener("submit", processInput);

  input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          processInput(event);
      }
  });
});