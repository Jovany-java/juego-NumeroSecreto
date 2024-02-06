//let titulo = document.querySelector("h1").innerHTML = "Juego del numero secreto";
//let parrafo1 = document.querySelector("p").innerHTML = "Selecciona un numero del 1 al 10";
let numeroSecreto = 0
let i =0;
let numeroSorteados= [];
let numeroMaximo = 10;

function textoInicial(elemento, texto){

let Elemento8 = document.querySelector(elemento).innerHTML =  texto;

}

function numeroAlatorio(){
//let numnumeroSecreto = Math.floor(Math.random()*10)+1;
let numeroSorteado =  parseInt(Math.random()*numeroMaximo)+1;

console.log(numeroSorteado);

console.log(numeroSorteados);
   if(numeroSorteados.length != numeroMaximo){

      if(numeroSorteados.includes(numeroSorteado)){   
         return numeroAlatorio();

      }else{
         numeroSorteados.push(numeroSorteado);
         return numeroSorteado;
      }


   }else if(numeroSorteados.length == numeroMaximo){

      textoInicial("p","Ya se han sorteado todos los numeros de la lista");
      document.querySelector("#boton1").setAttribute("disabled","false");
      window.stop();

   }
}

function limpiar(){

document.querySelector("#valor1").value = "";

}


function condicionesIniciales() {
   
   textoInicial("h1", "Juego del numero secreto");
   textoInicial("p",`Selecciona un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = numeroAlatorio();
   i =1;
}


function verificacionIntentos(){
   let numeroUsario = parseInt(document.getElementById("valor1").value);
   

       if(numeroUsario == numeroSecreto) {

          textoInicial("p",`Felicidades has ganado en ${i} ${ (i == 1) ? "vez" : "veces"}`);
           document.getElementById("reiniciar").removeAttribute("disabled");
   
       }else{
           limpiar();
          if(numeroUsario < numeroSecreto){

           textoInicial ("p", "El numero es Mayor") ;

          }else{

           textoInicial ("p", "El numero es Menor");
          }

          i++;
       }
       
}


function newGame (){
   limpiar();
   condicionesIniciales();
 
   document.querySelector("#reiniciar").setAttribute("disabled","false");

}
condicionesIniciales();
