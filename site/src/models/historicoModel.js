var database = require("../database/config");

function buscarUltimosRegistros(id) {

    instrucaoSql = `
        select
            pontuacao as acertos,
        DATE_FORMAT(dtTentativa,'%d %b %Y') dtTentativa
        from pontuacao
        where fkUsuario = ${id}
        order by id desc limit 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimosRegistros,
}
