function multiplicacao(a: number, b: number): number {

    return a * b;
}

function saudacao(nome: String): String {

    return `Óla ${nome}`;
}

let resultadoMultiplicacao = multiplicacao(4, 8);

console.log(resultadoMultiplicacao);

let mostraSaudacao = saudacao('Marcelo Oliveira');

console.log(mostraSaudacao);