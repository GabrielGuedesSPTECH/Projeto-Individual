var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrar(req, res);
})
router.post("/BuscarPorcentagem", function (req, res) {
    quizController.BuscarPorcentagem(req, res);
})


module.exports = router;