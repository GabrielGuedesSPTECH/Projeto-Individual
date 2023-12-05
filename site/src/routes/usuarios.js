var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/cadastrarLogin", function (req, res) {
    usuarioController.cadastrarLogin(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.get("/autenticarLogin/:email/:senha", function (req, res) {
    usuarioController.autenticarLogin(req, res);
});

router.post("/favoritar", function (req, res) {
    usuarioController.favoritar(req, res);
});
router.get("/buscarDadosChart", function (req, res) {
    usuarioController.buscarDadosChart(req, res);
});

module.exports = router;