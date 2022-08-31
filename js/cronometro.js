window.onload = () => {
    btnStart.addEventListener('click',startCronometro)
    circulo.addEventListener('click', adicionaPontos)

}

let btnStart = document.getElementById('btn-start')
let cronometro = document.getElementById('cronometro')
let btnReset = document.getElementById('btn-reset')
let circulo = document.getElementById('circulo')
let pontuacao = document.getElementById('pontos')
let temp;
let temp2;

let tempoFixoCronometro = 30
cronometro.textContent = tempoFixoCronometro;


var posicaoAleatoria = (element) =>{
    let t =  Math.floor(Math.random() * 500)
    let l =  Math.floor(Math.random() * 850)
    element.style.marginTop = t +'px'
    element.style.marginLeft = l +'px'
}

var mudaCor = (element) => {
    element.style.background =  '#'  + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')
}

function startCronometro(){
    let tempCrono = setInterval(() => {
        cronometro.textContent --;
        circulo.style.display = 'block'        
        posicaoAleatoria(circulo)
        mudaCor(circulo)
        
        if (cronometro.textContent <= 0 ){
            clearInterval(tempCrono)
        }
        
    }, 1000)
    temp = tempCrono
    
    let tempCirculo = setInterval(() => {
        
        if (cronometro.textContent <= 0 ){
            circulo.style.display = 'none'
            clearInterval(tempCirculo)

        }
        
        
    }, 1000)
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
    // mudaCor(circulo)    
    posicaoAleatoria(circulo)


}










































































