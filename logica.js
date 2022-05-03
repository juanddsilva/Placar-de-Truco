function aumentarPontosNos() {
    let pontosNos = document.getElementById("pontosNos")
    let pontosNosValor = parseInt(pontosNos.innerHTML)
    let pontosPartida = document.getElementById('pontosPartida')
    let truco = document.getElementById('trucobtn')

    if
        (pontosNosValor <= 12 && document.getElementById('trucobtn').value == 0) {
        pontosNosValor++
        pontosNos.innerHTML = pontosNosValor

        if (pontosNosValor >= 12) {

            setTimeout(() => {
                pontosNos.innerHTML = 0;
                pontosEles.innerHTML = 0;
                pontosPartida.innerHTML = '1'
                truco.value = 0
                alert('nós ganhamos a partida')
            }, 10);

            return;

        }
    }
    else if (document.getElementById('trucobtn').value > 0) {
        pontosNosValor = pontosNosValor + parseInt(document.getElementById('trucobtn').value);
        pontosNos.innerHTML = pontosNosValor

        if (pontosNosValor >= 12) {


            setTimeout(() => {
                pontosNos.innerHTML = 0;
                pontosEles.innerHTML = 0;
                truco.value = 0
                pontosPartida.innerHTML = '1'
                alert('nós ganhamos a partida')
            }, 10);

            return;
        }
    }
}


function aumentarPontosEles() {
    let pontosEles = document.getElementById("pontosEles")

    let pontosElesValor = parseInt(pontosEles.innerHTML)
    let pontosPartida = document.getElementById('pontosPartida')
    let truco = document.getElementById('trucobtn')

    if (pontosElesValor <= 12 && document.getElementById('trucobtn').value == 0) {
        pontosElesValor++
        pontosEles.innerHTML = pontosElesValor
        if (pontosElesValor >= 12) {
            setTimeout(() => {
                pontosEles.innerHTML = 0;
                pontosNos.innerHTML = 0;
                truco.value = 0
                pontosPartida.innerHTML = '1'
                alert('nós ganhamos a partida')
            }, 10);

        }
        return;
    }
    else if (document.getElementById('trucobtn').value > 0) {
        pontosElesValor = pontosElesValor + parseInt(document.getElementById('trucobtn').value);
        pontosEles.innerHTML = pontosElesValor

        if (pontosElesValor >= 12) {
            setTimeout(() => {
                pontosEles.innerHTML = 0;
                pontosNos.innerHTML = 0;
                truco.value = 0
                pontosPartida.innerHTML = '1'
                alert('Eles ganharam a partida')
            }, 10);
        }
    } return;
}

function diminuirPontosEles() {
    let pontosEles = document.getElementById('pontosEles')
    let pontosElesValor = parseInt(pontosEles.innerHTML)

    if (pontosElesValor > 0) {
        pontosElesValor--
        pontosEles.innerHTML = pontosElesValor
    }
}
function diminuirPontosNos() {
    let pontosNos = document.getElementById('pontosNos')
    let pontosNosValor = parseInt(pontosNos.innerHTML)

    if (pontosNosValor > 0) {
        pontosNosValor--
        pontosNos.innerHTML = pontosNosValor
    }
}



function truco() {
    let truco = document.getElementById('trucobtn')
    let trucoMais = parseInt(truco.value) + 3
    let pontosPartida = document.getElementById('pontosPartida')

    if (trucoMais < 12) {
        truco.value = trucoMais
        pontosPartida.innerHTML = truco.value
    }
    else if (trucoMais == 12) {
        truco.value = trucoMais
        pontosPartida.innerHTML = truco.value
    }
    else {
        truco.value = 0
        pontosPartida.innerHTML = '1'
    }
}




