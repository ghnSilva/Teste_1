function inteiros(numero) {
    let somatorio = 0;
    
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    
    return somatorio;
}

const numeroDigitado = prompt("Digite um número inteiro positivo:");
const resultado = inteiros(Number(numeroDigitado));
console.log(`O somatório dos números divisíveis por 3 ou 5 abaixo de ${numeroDigitado} é: ${resultado}`);
