window.onload = () => {
    btnStart.addEventListener('click',startCronometro)
    circulo.addEventListener('click', adicionaPontos)

}

let btnStart = document.getElementById('btn-start')
let cronometro = document.getElementById('cronometro')
let btnReset = document.getElementById('btn-reset')
let circulo = document.getElementById('circulo')
let pontuacao = document.getElementById('pontos')
let temp
let temp2

let tempoFixoCronometro = 10
cronometro.textContent = tempoFixoCronometro;


var posicaoAleatoria = (element) =>{
    let t =  Math.floor(Math.random() * 550)
    let l =  Math.floor(Math.random() * 700)
    element.style.marginTop = t +'px'
    element.style.marginLeft = l +'px'
}

function startCronometro(){
    var tempCrono = setInterval(() => {
        cronometro.textContent --;
        posicaoAleatoria(circulo)

        if (cronometro.textContent <= 0 ){
            clearInterval(tempCrono)
        }
    
    }, 1000)
    temp = tempCrono

    let tempCirculo = setInterval(() => {
        
        if (cronometro.textContent <= 0 ){
            clearInterval(tempCirculo)
        }

        
    }, 2000)
    temp2 = tempCirculo

}

btnReset.addEventListener('click', () => {
    cronometro.textContent = tempoFixoCronometro;
    pontuacao.textContent = 00
    circulo.style.marginTop = 100+'px'
    circulo.style.marginLeft = 100+'px'
    clearInterval(temp)
    clearInterval(temp2)

})

function adicionaPontos(){   
    var somaPonto = parseInt(pontuacao.textContent);
    pontuacao.textContent = 5 + somaPonto

}










































































