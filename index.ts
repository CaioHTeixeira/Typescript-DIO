//function
function soma (a: number, b: number) {
    return a + b;
}

//console.log(soma(3, 2));

//--------------------------------------------------------------------------------
//types e interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    //executaRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; //tipo IDomestico pode ser felino ou canino.

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    tipo: 'terrestre',
    porte: 'medio',
    visaoNoturna: true
}
console.log(animal)
// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     //executaRugido: (alturaEmDecibeis) => (console.log(`${alturaEmDecibeis}dB`))
// }

// animal.executaRugido('s');

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

//--------------------------------------------------------------------------------
//inputs
const input = document.getElementById('input') as HTMLInputElement; // pega o input como um input element;
//é usado assim e não com input: HTMLInputElement = document... pois ele n tem o retorno ainda. Nesse caso usa-se o as.
input.addEventListener('input', event => {
    console.log('digitei');
    // console.log(event.currentTarget) //não tem .value, devemos indicar ao TS o tipo.

    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})

//--------------------------------------------------------------------------------
//Generic types
function adicionaApendiceALista<T>(array: any[], valor: T) {//<T> representa um tipo generico qualquer a ser recebido.
    //o any[] também é qualquer valor.
    return array.map(item => item + valor);
}
adicionaApendiceALista([1, 2, 3], 'd');

// function adicionaApendiceALista<T>(array: T[], valor: T) {//<T> representa um tipo generico qualquer a ser recebido.
//     //o any[] também é qualquer valor.
//     return array.map(() => valor);
// }
// adicionaApendiceALista([1, 2, 3], 'd'); //dá erro pois substitui 1,2,3(number) por 'd'(string);

//--------------------------------------------------------------------------------
//Desenvolvendo condicionais a partir de parâmetros:
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para área de administração.
    }
    //redirecionar para area do usuario.
}

//--------------------------------------------------------------------------------
//caracter "?" para variaveis opcionais
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario) {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo)
    }
    //redirecionar para area do usuario.
}

//--------------------------------------------------------------------------------
//criando variaveis com propriedade readonly e private
interface Cachorro {
    nome: string;
    idade: string;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Caio', 5);
//cao.idade = 2;
console.log(cao);

//--------------------------------------------------------------------------------
//como importar bibliotecas com typescript
import $ from 'jquery';
$.fn.extend({
    novaFuncao() { //ira adicionar a novaFunção aos métodos nativos do jquery no typings.d.ts
        console.log('Chamou nova funcao');
    }
})

$('body').novaFuncao();

//--------------------------------------------------------------------------------
//Exemplo de como usar o Omit
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string; 
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    //aqui aparece apenas nome e idade e "omite" a nacionalidade
}