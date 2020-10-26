let arr = [];
const simbolos = ['&#9830;', '&#9829;', '&#9827;', '&#9824;'];
const colors = ['red', 'red', 'black', 'black'];
const numLetras = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];


function drawCards() {
    arr = [];// esto es para que se reinicie en blanco cada vez que se llame la funcion.
    
    // obtengo la cantidad de cartas a pintar
    let cantCard = document.getElementById('number').value;

    // obtengo el div donde voy a pintar las cartas
    let filaDeCarta = document.getElementById('filaCartas');

    // antes de pintar limpio el div 
    // para que no salgan las cartas anteriores
    filaDeCarta.innerHTML = ""; // esto es para que se reinicie en blanco cada vez que se llame la

    let cuerpoOrden = document.getElementById('cuerpoOrden');
    cuerpoOrden.innerHTML = '';

    for (let i = 1; i <= cantCard; i++) {
        // creo la carta
        let carta = crearCarta(i);

        // agrego la carta al div
        filaDeCarta.appendChild(carta);
    }
}

function crearCarta(posicion) {
    // Generar numero aleatorio del contenido de la carta
    let randNumCarta = parseInt(Math.random() * (numLetras.length));

    // Generar simbolo aleatorio
    let randSimbolo = parseInt(Math.random() * (simbolos.length));

    // creamos div de la carta blanca
    let divCard = document.createElement('div');
    divCard.id = "card" + posicion; //`card${posicion}`;
    divCard.className = "card";

    // creamos spanUp
    let spanUp = document.createElement('span');
    spanUp.style.color = colors[randSimbolo];
    spanUp.innerHTML = simbolos[randSimbolo];

    // creamos simbolo superior
    let divSimboloUp = document.createElement('div');
    divSimboloUp.className = "simboloUp";
    divSimboloUp.appendChild(spanUp);
    divCard.appendChild(divSimboloUp);

    // creamos el parrafo
    let p = document.createElement('p');
    p.className = "numb";
    p.innerHTML = numLetras[randNumCarta];
    p.style.color = colors[randSimbolo];
    divCard.appendChild(p);

    // creamos spanDown
    let spanDown = document.createElement('span');
    spanDown.style.color = colors[randSimbolo];
    spanDown.innerHTML = simbolos[randSimbolo];;

    // creamos simbolo inferior
    let divSimboloDown = document.createElement('div');
    divSimboloDown.className = "simboloDown";
    divSimboloDown.appendChild(spanDown);
    divCard.appendChild(divSimboloDown);

    arr.push(
        {
            'pos': randNumCarta,
            'card': divCard,
            'value': numLetras[randNumCarta]
        }
    )

    return divCard;

}

function dibujarCartasOrdenadas(posicion) {
    let divFilaOrdenada = document.createElement('div');
    divFilaOrdenada.id = 'filaOrdenCartas' + posicion;
    divFilaOrdenada.className = 'filaOrdenCartas';

    let divFilaNumero = document.createElement('div');
    divFilaNumero.innerHTML = posicion;
    divFilaOrdenada.append(divFilaNumero);

    for(let i = 0; i < arr.length; i++) {
        let newCard = arr[i].card.cloneNode(4);
        divFilaOrdenada.appendChild(newCard);
    }

    let cuerpoOrden = document.getElementById('cuerpoOrden');
    cuerpoOrden.appendChild(divFilaOrdenada);
}

//ordenar cartas con metodo bubble
const ordenarCard = () => {
    let contSwap = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j].pos < arr[i].pos) {
                let tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
                dibujarCartasOrdenadas(contSwap);
                contSwap = contSwap + 1;
            }
        }
    }
    // let wall = arr.length - 1;
    // for (let i = wall; i > 0; i--) {
    //     for (let j = 0; j < wall; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let aux = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = aux;
    //             console.log("object");
    //         }
    //     }
    // }
}









