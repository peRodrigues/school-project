document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.main__form');
  const input = document.querySelector('.main__input');
  const output = document.querySelector('.main__output');

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = input.value.trim();

      if (isNaN(value) || value === '') {
          output.textContent = 'Digite um número válido';
      } else {
          const number = parseInt(value, 10);
          if (number % 2 === 0) {
              output.textContent = '>_ O número é par';
          } else {
              output.textContent = '>_ O número é ímpar';
          }
      }
      input.value = '';
  });
});
