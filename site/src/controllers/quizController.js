var quizModel = require("../models/quizModel");


function registrar(req, res) {

    var id = req.body.idServer;
    var tempo = req.body.tempoServer;
    var pontuacao = req.body.pontuacaoServer;
    var dataTentativa = req.body.dataServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if (dataTentativa == undefined) {
        res.status(400).send("Sua dataTentativa está undefined!")
    } else {
        quizModel.registrar(pontuacao, tempo, id, dataTentativa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o registro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function BuscarPorcentagem(req, res) {
    var id = req.params.id;
    quizModel.BuscarPorcentagem(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}


module.exports = {
    registrar,
    BuscarPorcentagem,
}