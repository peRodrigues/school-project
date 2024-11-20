// Array para armazenar os números
const numeros = [];

// Seleciona elementos do DOM
const form = document.querySelector('.main__form');
const input = document.querySelector('.main__input');
const output = document.querySelector('.main__output');

// Adiciona evento ao formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const numero = Number(input.value); // Obtém o valor digitado
    if (!isNaN(numero)) {
        numeros.push(numero); // Adiciona o número ao array
        output.innerHTML = `&#62_ Números no array: ${numeros.join(', ')}`; // Exibe os números
        input.value = ''; // Limpa o campo de entrada
    } else {
        output.innerHTML = `&#62_ Por favor, insira um número válido.`; // Mensagem de erro
    }
});