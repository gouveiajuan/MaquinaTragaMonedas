(()=>{
  "use strict";

  //Arrays para los tres slots de la máquina
  const slot1 = [
    "aubergine",
    "banana",
    "carrots",
    "cherries",
    "dollar",
    "lemon",
    "orange",
    "peach",
    "potato",
    "tomato",
  ];
  const slot2 = [
    "aubergine",
    "banana",
    "carrots",
    "cherries",
    "dollar",
    "lemon",
    "orange",
    "peach",
    "potato",
    "tomato",
  ];
  const slot3 = [
    "aubergine",
    "banana",
    "carrots",
    "cherries",
    "dollar",
    "lemon",
    "orange",
    "peach",
    "potato",
    "tomato",
  ];
  
  //Inicialización de variables
  let jugada = []; 
  let contadorMonedas = 0; 
  let monedasInicial = 0;  
  
  //Aqui encontramos las referencias al DOM
  const divFruta1 = document.querySelector("#fruta1");
  const divFruta2 = document.querySelector("#fruta2");
  const divFruta3 = document.querySelector("#fruta3");
  const btnJugar = document.querySelector("#btnJugar");
  const contador = document.querySelector("#contador");
  const btnMonedas = document.querySelector("#ahoraSi");
  const filasResultados = document.querySelector("#resultados-jugadas");
  const btnSalir = document.querySelector("#salir");

  //Al cargar la página: pinta el contador de monedas y desactiva el botón de jugar y salir.
  contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
  btnJugar.disabled = true;
  btnSalir.disabled = true;
  
  divFruta1.innerHTML = '<img src="img/pingu.png" alt="">';
  divFruta2.innerHTML = '<img src="img/pingu.png" alt="">';
  divFruta3.innerHTML = '<img src="img/pingu.png" alt="">';


  // Función para insertar moneda:
  const insertarMoneda = () => {
    contadorMonedas = document.getElementById("mon").value;
    monedasInicial = document.getElementById("mon").value;
    contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
    btnJugar.disabled = false;
    btnMonedas.disabled = true;
    filasResultados.innerHTML = "";
    divTabla.classList.add("oculto");

    filasResultados.innerHTML="Has introducido monedas";
    
  };
  
  // Función para obtener un número al azar con el límite de la longitud del array
  function shuffle(array) {
    let  i;
    i = Math.floor(Math.random() * array.length);
    console.log(i);
    return i;
  }
  
  //Función que borra los contenedores de las frutas
  const vaciarFrutas = ()=>{
    divFruta1.innerHTML = "";
    divFruta2.innerHTML = "";
    divFruta3.innerHTML = "";
  }
  
  // funcion para jugar

  const jugar = () => {

    if (contadorMonedas==0) { 
      alert("Debes insertar monedas para jugar.");
    }
      
      else if (contadorMonedas>0){

        //activa y desactiva los botones que corresponden
        btnSalir.disabled = false;
        btnMonedas.disabled = true;
        btnJugar.disabled = true;
        divTabla.classList.remove("oculto"); 
        --contadorMonedas;
        
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        
        //Vacío el contenedor de las frutas
        vaciarFrutas();
        
        //Tirada aleatoria de 3 frutas
        const fruta1 = slot1[shuffle(slot1)];
        const fruta2 = slot2[shuffle(slot2)];
        const fruta3 = slot3[shuffle(slot3)];
        
        //Almacena resultado en un array para comprobar premio
        jugada[0] = fruta1;
        jugada[1] = fruta2;
        jugada[2] = fruta3;
      
        console.log(jugada);
        console.log(fruta1);
        console.log(fruta2);
        console.log(fruta3);
        
        //Pinta en el html la imagen correspondiente a la fruta aleatoria
        {
          const imgFruta1 = document.createElement("img");
          imgFruta1.id = "fruta1";
          imgFruta1.src = `img/${fruta1}.png`;
          imgFruta1.classList.add("slot-fruta");
          divFruta1.append(imgFruta1);
        };
      
        {
          const imgFruta2 = document.createElement("img");
          imgFruta2.id = "fruta2";
          imgFruta2.src = `img/${fruta2}.png`;
          imgFruta2.classList.add("slot-fruta");
          divFruta2.append(imgFruta2);
        };
      
       {
          const imgFruta3 = document.createElement("img");
          imgFruta3.id = "fruta3";
          imgFruta3.src = `img/${fruta3}.png`;
          imgFruta3.classList.add("slot-fruta");
          divFruta3.append(imgFruta3);
          btnJugar.disabled = false;
        };
      }

    const cantidadFrutas = jugada.reduce((contadorFruta, fruta) => {
      contadorFruta[fruta] = (contadorFruta[fruta] || 0) + 1;
      return contadorFruta;
    }, {});
  
    console.log(cantidadFrutas);

    // creare un boque de if anidados para otorgar los premios segun corresponda
    if (cantidadFrutas.dollar == 2) {
      
      contadorMonedas += 4;
      {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
          `<tr>
          <li>"¡Enhorabuena! Has ganado 4 monedas"</li>
          </tr>`
        );
      };
    } else if (cantidadFrutas.dollar == 3) {

      contadorMonedas += 10;
      {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",

          `<tr>
          <li>¡PLENO! Has ganado 10 monedas</li>
          </tr>`
        );
      };
    } else if (
      cantidadFrutas.aubergine == 3 ||
      cantidadFrutas.banana == 3 ||
      cantidadFrutas.carrots == 3 ||
      cantidadFrutas.cherries == 3 ||
      cantidadFrutas.lemon == 3 ||
      cantidadFrutas.orange == 3 ||
      cantidadFrutas.peach == 3 ||
      cantidadFrutas.potato == 3 ||
      cantidadFrutas.tomato == 3
    ) {
      
      contadorMonedas += 3;
      {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
        `<tr>
          <td>3 iguales ganas 3 monedas</td>
        </tr>`
        );
      };
    } else if (
      (cantidadFrutas.aubergine == 2 ||
        cantidadFrutas.banana == 2 ||
        cantidadFrutas.carrots == 2 ||
        cantidadFrutas.cherries == 2 ||
        cantidadFrutas.lemon == 2 ||
        cantidadFrutas.orange == 2 ||
        cantidadFrutas.peach == 2 ||
        cantidadFrutas.potato == 2 ||
        cantidadFrutas.tomato == 2 ) &&
      cantidadFrutas.dollar == 1
    ) {
      
      contadorMonedas += 3;
      {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
          `<tr class="has-background-success">
          <li>Genial ganas 3 monedas</li>
      </tr>`
        );
      };
    } else if (
        cantidadFrutas.aubergine == 2 ||
        cantidadFrutas.banana == 2 ||
        cantidadFrutas.carrots == 2 ||
        cantidadFrutas.cherries == 2 ||
        cantidadFrutas.lemon == 2 ||
        cantidadFrutas.orange == 2 ||
        cantidadFrutas.peach == 2 ||
        cantidadFrutas.potato == 2 ||
        cantidadFrutas.tomato == 2
    ) {
      
      contadorMonedas += 2;
     {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
        `<tr>
          <li>Ganas dos monedas</li>
        </tr>`
        );

      };
    } else if (cantidadFrutas.dollar == 1) {
      
      contadorMonedas += 1;
      {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
          `<tr>
          <li>No ganas ni pierdes monedas</li>
      </tr>`
        );

      };
    } else if (contadorMonedas > 0){
     {
        contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
        filasResultados.insertAdjacentHTML(
          "beforeend",
          `<tr>
          <li>Gastas una moneda</li>
      </tr>`
        );
          '';
      };
    }
  
    //Comprobación de si se han agotado las monedas para concluir el juego
    {
      if (contadorMonedas == 0) {
        btnJugar.disabled = true;
        btnMonedas.disabled = false;
        monedasInicial = 0;
        alert("Te has gastado todas las monedas.");
        btnSalir.disabled = true;
      }
    };
  };
  
  
  //Función del botón salir, reinicia el juego y nos da un alert con el resultado obtenido.
  function salir() {
    btnJugar.disabled = true;
    btnMonedas.disabled = false;
    alert(
      `Fin del juego. Empezaste con ${monedasInicial} monedas y ahora tienes ${contadorMonedas}.`
    );
    filasResultados.insertAdjacentHTML(
      "beforeend",

      `<tr>
      <li>Has sacado todas las monedas</li>
      </tr>`);

    contadorMonedas = 0;
    monedasInicial = 0;
    contador.innerHTML = `<h3>${contadorMonedas}</h3>`;
    divFruta1.innerHTML = '<img src="img/pingu.png" alt="">';
    divFruta2.innerHTML = '<img src="img/pingu.png" alt="">';
    divFruta3.innerHTML = '<img src="img/pingu.png" alt="">';
    btnSalir.disabled = true;
  }
  
  // Eventos para los botones.
  btnJugar.addEventListener("click", jugar);
  btnMonedas.addEventListener("click", insertarMoneda);
  btnSalir.addEventListener("click", salir);
  
})();

