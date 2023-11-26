var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function registrar(pontuacao, tempo, id, dataTentativa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", pontuacao, tempo, id, dataTentativa);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO pontuacao(pontuacao, tempo, fkUsuario, dtTentativa) VALUES ('${pontuacao}', '${tempo}', '${id}', '${dataTentativa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function BuscarPorcentagem(id) {
    var query = `SELECT max(round((pontuacao / 15) * 100)) porcentagem,
    min(round(100 - (pontuacao / 15) * 100))porcentagemRestante,
    max(pontuacao) pontuacaoMax FROM pontuacao
		WHERE fkUsuario = '${id}';`;
    return database.executar(query);
}
module.exports = {
    registrar,
    BuscarPorcentagem
};