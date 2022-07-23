var usuario = {
    id:2,
    nome:"Joaquim",
    idade:12
};

var atendeAClassificacao = usuario.idade >= 18;

if(atendeAClassificacao === true) {
    console.log("Acesso permitido ao conteúdo");
}else{
    console.log("ACESSO NEGADO!");
}
