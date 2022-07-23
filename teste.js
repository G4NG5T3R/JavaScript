console.log("teste do sublime");

var texto = "Sublime studio";
var produto = "Notebook";
var preco = 2000;
var nome = "Lucas";
var anos = 26;
var estados = ["Rio Grande do Sul", "Santa Catarina", "Paraná"];
var posicao = 1;



function imprimir(impressao) {
	console.log( impressao)
}

function soma(a, b) {
	soma = a + b;
	console.log(soma)
}

function idade(d, c) {
	console.log(d + " tem "+ c + " anos!")
}

function tipoVar(variavel) {
	console.log(typeof variavel)
}

function estado(val,posicao) {
	console.log(val[posicao]);
}

function adiconaEstado(novoEstado){
	var num = estados.length;
	estados[num] = novoEstado;
	
}

adiconaEstado("Rio de Janeiro");
adiconaEstado("São Paulo");
adiconaEstado("Mato Grosso");
adiconaEstado("Brasilia");
imprimir(estados)