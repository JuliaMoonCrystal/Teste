// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;
// 	enquanto K < INDICE faça
// 	{
// 		K = K + 1;
// 		SOMA = SOMA + K;
// 	}
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// Resposta: O valor da soma será 91

var INDICE = 13
var SOMA = 0;
var K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: 
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
var num =10
var pertence = false

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (var i = 2; i <= num; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  if(fibonacci[i] == num){
    console.log('número informado pertence a sequência.'); 
  }
  else{
    console.log('número informado não pertence a sequência.');
  }
}

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// 	• O menor valor de faturamento ocorrido em um dia do mês;
// 	• O maior valor de faturamento ocorrido em um dia do mês;
// 	• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// 	a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// 	b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

var faturamentoMensal = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

var menorValor = {
    "dia": '',
    "valor": 1
}
var maiorValor = {
    "dia": '',
    "valor": 1
}

var valorSuperiorMediaMensal = 0
var media = 0.0
var total = 0.0

for (let index = 0; index < faturamentoMensal.length; index++) {
    media = media + faturamentoMensal[index].valor
    total = total + faturamentoMensal[index].valor

    if (faturamentoMensal[index].valor <= menorValor.valor) {
        menorValor = faturamentoMensal[index]
    }
    else if (faturamentoMensal[index].valor >= maiorValor.valor) {
        maiorValor = faturamentoMensal[index]
    }

}

media = media / faturamentoMensal.length
for (let index = 0; index < faturamentoMensal.length; index++) {
    if (faturamentoMensal[index].valor > media) {
        valorSuperiorMediaMensal++
    }
}

console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ' + valorSuperiorMediaMensal);
console.log('O menor valor de faturamento ocorrido em um dia do mês é ' + menorValor.valor);
console.log('O maior valor de faturamento ocorrido em um dia do mês é ' + maiorValor.valor);


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// 	SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve 
// dentro do valor total mensal da distribuidora.

var porcentagem = 0
var faturamento = [
    { state: 'SP', value: 67836.43 },
    { state: 'RJ', value: 36678.66 },
    { state: 'MG', value: 29229.88 },
    { state: 'ES', value: 27165.48 },
    { state: 'Outros', value: 19849.53 },]
for (let index = 0; index < faturamento.length; index++) {
    porcentagem = (100 * faturamento[index].value) / total
    console.log('O faturamento de ' + faturamento[index].state + ' representa ' + porcentagem.toFixed(2) + '% do total mensal');
}

// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// 	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// 	b) Evite usar funções prontas, como, por exemplo, reverse;

var frase = 'PALINDROMO';
var array = frase.split('');
var arrayInvertido = [];
var cont = 0
console.log('FRASE : ' + frase);

for (let index = array.length - 1; index >= 0; index--) {
    arrayInvertido[cont] = array[index]
    cont++
}
var fraseInvertida = arrayInvertido.join("")
console.log('FRASE INVERTIDA: ' + fraseInvertida);

