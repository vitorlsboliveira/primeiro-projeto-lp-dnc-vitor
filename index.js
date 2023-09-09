var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireta = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireta.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireta.style = "display:flex"
    setaEsquerda.style = "display:none"
}