//vai definir os typings gerais da minha aplicação.
//pode-se repetir as interfaces com mesmo nome pois ele vai "somar" os atributos e metodos 
//das duas interfaces iguais q foram definidas.
//Ex:

interface Estudante {
    nome: string;
    idade: number;
}

interface Estudante {
    serie: string;
}

interface JQuery {
    novaFuncao(): void; //cria a nova Funcao no aos métodos nativos do jquery.
    //é necessário o comando npm i --save-dev @types/jquery; para poder verificar erros caso n seja definido a nova 
    //função aqui irá dar erro no index.ts ao chamá-la;
}