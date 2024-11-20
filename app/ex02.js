const form = document.querySelector('.main__form');
const input = document.querySelector('.main__input');
const output = document.querySelector('.main__output');
const MAX_DISPLAY = 50;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = parseInt(input.value);

    if (isNaN(value) || value < 0) {
        output.textContent = '>_ Digite um número válido';
        return;
    }

    const primes = [];
    for (let i = 2; i <= value; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }

    if (primes.length > MAX_DISPLAY) {
        const visiblePrimes = primes.slice(0, MAX_DISPLAY).join(', ');
        output.textContent = `>_ ${visiblePrimes}, ... (${primes.length - MAX_DISPLAY} mais)`;
    } else {
        output.textContent = primes.length > 0 ? primes.join(', ') : 'Nenhum número primo encontrado';
    }
});