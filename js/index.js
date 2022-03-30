//QUESTÃO 1
/*var valor = prompt("Digite um valor")

if(valor >10){
    document.write("VALOR MAIOR QUE 10!");
}else if (valor <10){
    document.write("VALOR MENOR QUE 10!")
}*/

// QUESTÃO 2
/*var nota1 = 4
var nota2 = 6
var nota3 = 7
var nota4 = 8
var media = (nota1 + nota2 + nota3 + nota4)/4;

if(media > 6 && media < 10){
    document.write("Aprovado");
    console.log(media)
}else if(media < 5){
    document.write("Reprovado");
    console.log(media)
}*/

//QUESTÃO 3
/*var numeroDoEmpregado = 20;
var anoDeNascimento = 1957;
var atual = 2022;
var anoDeEmpresa = 1989
var ano = atual - anoDeEmpresa
var idade = atual - anoDeNascimento

if(idade >60 && ano >=25){
    document.write("Requerer Aposentadoria");
}else{
    console.log("Não requerer");
}*/

//QUESTÃO 4
/*let nomeDoProduto = "Livro";
let preçoDaUnidade = 25.00;
let quantidadeAdiquirida = 2
let total = quantidadeAdirida * preçoDaUnidade
let preçoTotal = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

if(quantidadeAdiquirida <=5){
    let desconto = total * 0.02;
    let preçototal = total - desconto;
    let preçoTotal = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

    console.log{`
    <strong>
    Desconto de 2% recebido pelo cliente ${nomeDoProduto}.<br>
    valor da compra : ${total}
    total a se pagar(com o desconto): ${preçoTotal}
    </strong>
    `}

}else if(quantidadeAdiquirida > 5 && quantidadeAdiquirida <=10){
    let desconto = total * 0.03;
    let preçototal = total - desconto;
    let preçoTotal = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

    console.log{`
    <strong>
    Desconto de 3% recebido pelo cliente ${nomeDoProduto}.<br>
    valor da compra : ${total}
    total a se pagar(com o desconto): ${preçoTotal}
    </strong>
    `}
    
}else if(quantidadeAdiquirida > 5 && quantidadeAdiquirida <=10){
    let desconto = total * 0.05;
    let preçototal = total - desconto;
    let preçoTotal = total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});

    console.log{`
    <strong>
    Desconto de 5% recebido pelo cliente ${nomeDoProduto}.<br>
    valor da compra : ${total}
    total a se pagar(com o desconto): ${preçoTotal}
    </strong>
    `}
    
}*/

//QUESTÃO 5

/*var codigo = prompt("Digite o código");

if(cod == 1 ){
    alert("Alimento não perecível")

}else if(codigo >= 2 && codigo <=4){
    alert("Alimento perecível")

}else if(codigo >= 5 && codigo <=6){
    alert("Vestuário")

}else if(codigo == 7){
    alert("Higiene pessoal")

}else if(codigo >= 8 && codigo <=15){
    alert("Limpeza e utensílios domésticos")

}else{
    alert("Valor inválido")
}*/

//QUESTÃO 6
/*var codigo = prompt("Codigo do produto");
var quantidade = prompt("Quantidade");
var valor = prompt ("Valor");

var total100 = (1.70 * quantidade);
    document.write("Valor do lanche:" + total100);

var total101 = (2.30 * quantidade);
    document.write("Valor do lanche:" + total101);

var total102 = (2.60 * quantidade);
    document.write("Valor do lanche:" + total102);

var total103 = (2.40 * quantidade);
    document.write("Valor do lanche:" + total103);

var total104 = (2.50 * quantidade);
    document.write("Valor do lanche:" + total104);

var total105 = (1.00 * quantidade);
    document.write("Valor do lanche:" + total105);
 */ 

//QUESTÃO 7
/*var numero = 101;
while(numero <=110){
    document.write("<br>Número do cliente:"+ numero); numero++;
}*/

//QUESTÃO 8
/*let n = 10;  

for(let x = 1; x <= n; x++){
    console.log(`<strong>${ x }</strong>`);
}*/

//QUESTÃO 9 
function tabuCalc(){
    let intNumber = window.document.getElementById("intNumber");
    let IntNumber = Number.parseInt(intNumber.value);
    let tabuada =[
        1* intNumber,
        2* intNumber,
        3* intNumber,
        4* intNumber,
        5* intNumber,
        6* intNumber,
        7* intNumber,
        8* intNumber,
        9* intNumber,
        10* intNumber
    ];
    let resultado = window.document.getElementById("Resultado");
    resultado.innerHTML=`
    <strong>
    Tabuada: ${intNumber}<br>
    1 x ${intNumber} = ${tabuada[0]}<br>
    2 x ${intNumber} = ${tabuada[0]}<br></br>
    3 x ${intNumber} = ${tabuada[0]}<br></br>
    4 x ${intNumber} = ${tabuada[0]}<br></br>
    5 x ${intNumber} = ${tabuada[0]}<br></br>
    6 x ${intNumber} = ${tabuada[0]}<br></br>
    7 x ${intNumber} = ${tabuada[0]}<br>
    8 x ${intNumber} = ${tabuada[0]}<br></br>
    9 x ${intNumber} = ${tabuada[0]}<br></br>
    10 x ${intNumber} = ${tabuada[0]}<br></br>

    </strong>
    `;
    
} 

//QUESTÃO 10
/*console.log("<strong> Ordem crescente: </strong>")
for(let number = 1; number <=10; number++){
    console.log(`<strong>${number}</strong`);
}
console.log("<strong> Ordem crescente: </strong>")
for(let number2 = 10; number2 <=1; number2--){
    console.log(`<strong>${number2}</strong`);
}*/


