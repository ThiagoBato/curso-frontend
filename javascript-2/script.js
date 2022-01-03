// 1. Resolva as operações:
/*
10 + 15 = 25
"10" + 2 = "102" typeof = string
"10" * 2 = 20 typeof = number
"10" / 3 = 3.3333333333333335 typeof = number
"10" % 3 = 1 typeof = number
10 + true = 11 typeof = number
10 == "10" = true typeof = boolean
10 === "10" = false typeof = boolean
10 < 11 = true typeof = boolean
10 > 12 = false typeof = boolean
10 <= 10.1 = true typeof = boolean
10 > 9.99 = true typeof = boolean
10 != "dez" = true typeof = boolean
10 + true = 11 typeof = number
"dez" + true = "deztrue" typeof = string
10 + false = 10 typeof = number
10 * false = 0 typeof = number
true + true = 2 typeof = number
10++ = Error
10-- = Error
1 & 1 = 1 typeof = number
1 & 0 = 0 typeof = number
0 & 0 = 0 typeof = number
1 & 0 = 0 typeof = number
0 / 1 = 0 typeof = number
5 + 5 == 10 = true typeof = boolean
"5" + "5" == 10 = false typeof = boolean
"5" * 2 > 9 = true typeof = boolean
(10 + 10) * 2 = 40 typeof = number
10 + 10 * 2 = 30 typeof = number
*/

// 2. Responda as perguntas de acordo com as variáveis.
var branco = 'preto';
var preto = 'cinza';
var cinza = 'branco';
var carro = 'preto';
var valor = 30000;
var prestacao = 750;

// a) branco == “branco”
let verdadeiroFalso = branco == 'branco' ? true : false;
console.log(verdadeiroFalso);
// Resposta = false

// b) branco == cinza
verdadeiroFalso = branco == cinza ? true : false;
console.log(verdadeiroFalso);
// Resposta = false

// c) carro === branco
verdadeiroFalso = carro == branco ? true : false;
console.log(verdadeiroFalso);
//Resposta  = true

// d) var cavalo = carro == “preto” ? “cinza” : “marron”;
var cavalo = carro == 'preto' ? 'cinza' : 'marron';
//Resposta = 'cinza'

// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
// de 3.000? Demonstre a operação.
let entrada = 3000;
let prestacaoRestante = (30000 - 3000) / prestacao;
console.log(prestacaoRestante);
//Resposta = 36

// f) Somando as variáveis de cores é formada uma string de quantos caracteres?
const somaDasCores = branco + preto + cinza;
console.log(somaDasCores.length);
//Resposta = 16
