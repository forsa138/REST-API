const express = require('express');

var precio = 50;

//el precio de un producto nunca supera los 100 / El precio de un producto, nunca es negativo.
function reglaPrecio(){
    precio < 100;
}


//Al final del dia, el sistema debe disminuir los valores de price y sellIn para cada producto.
function reglaDias(){
    var n_dias = req.params.dias;


}

//Una vez que la fecha de venta ha pasado, sellIn < 0 , los precios de cada producto, se degradan el doble de rapido.
function reglaRebajaPrecios(){

}

//el producto "Full cobertura" incrementa su precio a medida que pasa el tiempo
function reglaAumPrecioFullCobertura(){

}

//el producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio. tiene un precio fijo de 180
function reglaMegaCobertura(){
    const valor = 180

}


/*el producto "Full cobertura Super duper", tal como el "Full Cobertura", 
incrementa su precio a medida que se acerca su fecha de vencimiento:
    El precio se incrementa en 2 cuando quedan 10 dias o menos y se incrementa en 3, cuando quedan 5 dias o menos.
    el precio disminuye a 0 cuando se vence el tiempo de venta.
*/
function reglaSuperDuper(){

}

//El producto "Super avance" dismuniye su precio el doble de rapido que un producto normal.
function reglaSuperAvance(){

}

module.exports={reglaAumPrecioFullCobertura,
     reglaDias, 
     reglaMegaCobertura, 
     reglaPrecio, 
     reglaRebajaPrecios,
     reglaSuperAvance,
     reglaSuperDuper}