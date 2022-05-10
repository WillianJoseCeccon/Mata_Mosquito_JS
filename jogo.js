var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
    // Essa função pega a largura e altura da tela do usuario, a chamada dela também é realizada 
    //no evento onresize do body, então mesmo que o usuario redimensione a tela não havera estouro 
    // nos calculos das posicoes da tela; 
    altura = window.innerHeight
    largura = window.innerWidth
    
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
    // remover o mosquito anterior caso exista.... 
    //na 1 execucao não existira mosquito ... ou caso o usuario clique no mosquito para mataló
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" 
            vidas++
        }
        
    }
    
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    // nesse if ternario existe pelo seguinte no calculo do ramdom acima diminuimos 90 para que não 
    // tenha estouro no limite da tela.... ai surge o problema se o ramdom pegar um numero 0 ou proximo dele 
    // diminuindo os 90 ficara um valor negativo e nao sera apresentado o mosquito na tela.
    // por isso essa verificação se uma das posicoes for menor que 0 seto 0 para a posição;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    
    // criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)

    
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) 

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2) 

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
       
    }
}