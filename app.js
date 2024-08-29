let entradaAtual = '';
let operadorAtual = '';

function adicionarNumero(numero) {
    entradaAtual += numero;
    document.getElementById('campo').value = entradaAtual;
}

function adicionarOperador(operador) {
    if (entradaAtual !== '' && operadorAtual !== '') {
        entradaAtual += ` ${operadorAtual} `;
    }
    operadorAtual = operador;
    entradaAtual += ` ${operador} `;
    document.getElementById('campo').value = entradaAtual;
}

function calcular() {
    try {
        const resultado = eval(entradaAtual);
        
        const resultadoCientifico = resultado.toExponential();

        document.getElementById('campo').value = resultadoCientifico;
        entradaAtual = resultadoCientifico;
        operadorAtual = '';
    } catch (error) {
        document.getElementById('campo').value = 'Erro';
    }
}

function limparTela() {
    entradaAtual = '';
    operadorAtual = '';
    document.getElementById('campo').value = '';
}
