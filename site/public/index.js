function redirecionarLogin() {
    window.location = "login.html";
}

function sermaoSeneca() {
    var magoa = txtarea_magoa.value;
    var magoaSoerteada = parseInt(Math.random()* frasesSeneca.length)
    var displayErro = document.getElementById('error').style.display = 'block';

    if (magoa == "") {
        displayErro
        error.innerHTML = `<h2>Nenhuma infomação inserida, escreva algo antes de enviar</h2><br><br>
                                <button class="botao-login" onclick="reescrever()">Voltar</button>`
    } else if (magoa.length <= 10) {
        displayErro
        error.innerHTML = `<h2>Poucas informações inseridas, adicione contexto</h2><br><br>
                                <button class="botao-login" onclick="reescrever()">Voltar</button>`
    } else if (magoa.length > 300) {
        displayErro
        error.innerHTML = `<h2>Muitas informações inseridas, Seja mais especifico</h2><br><br>
                                <button class="botao-login" onclick="reescrever()">Voltar</button>`
    } else {
        sermao.innerHTML = `<div class="conte">${frasesSeneca[magoaSoerteada]}</div>
            `
    }
}
function reescrever() {
    document.getElementById('error').style.display = 'none';
}

var frasesSeneca = [
    "<span><i>Não adianta lamentar e chorar por acontecimentos de um universo incansavelmente fora do seu controle. você deveria ter pensado em situações de muita desgraça e ter se animado com a escassez ao invés de ter cultivado vícios prazeres inconstantes e ter sido escravizado pelas suas ambições agora, aconselho que seja mais racional, que aprenda sobres as virtudes e tenha a coragem e sabedoria de aceitar a inevitabilidade dos eventos da vida com tanta apatia quanto for possível.</i></span>",
    
    "<span><i>Põe a tua inteligência em ação, observa como é na realidade a nossa vida, e não o que dizemos ela ser, e verificarás que muitos males nos são mais benéficos do que prejudiciais.</i></span>",
    
    "<span><i>É grande quem usa vasos de argila como se fossem de prata, mas não é inferior quem usa vasos de prata como se fossem de argila. Uma alma fraca não sabe suportar a riqueza.</i></span>",

    ""
]