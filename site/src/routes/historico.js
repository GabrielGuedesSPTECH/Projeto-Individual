var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/ultimas/:idUsuario", function (req, res) {
    historicoController.buscarUltimosRegistros(req, res);
});

module.exports = router;