/* Testando o JavaScript
const nota1 = 7;
const nota2 = 5;
const nota3 = 9;

const media = Math.floor((nota1 + nota2 + nota3) / 3);
if (media >= 7) {
    console.log('Você passou por média! Parabéns, sua nota foi ' + media + '.');
} else {
    console.log('Você reprovou! Sinto muito, sua nota foi ' + media + '.');
}
*/
function obterMedia() {
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let numero3 = document.querySelector('#numero3').value;

    let mediaDosNumeros = (+numero1 + +numero2 + +numero3) / 3;
    if (isNaN(mediaDosNumeros)) {
        document.querySelector('#resultado').innerHTML = 'Você precisa digitar números no campo!';
    } else {
        document.querySelector('#resultado').innerHTML = 'Resultado é ' + mediaDosNumeros.toFixed(2);
    }
}

const botao = document.querySelector('#botao');
botao.addEventListener('click', obterMedia);
