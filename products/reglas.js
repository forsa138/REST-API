const express = require('express');
const producto = require('./productos.js')

var precio_FullCobertura = 70;
var precio_MegaCobertura = 180;
var precio_FullSuperDuper = 80;
var precio_SuperAvance = 65;


//el precio de un producto nunca supera los 100 / El precio de un producto, nunca es negativo.


//Al final del dia, el sistema debe disminuir los valores de price y sellIn para cada producto.
function reglaDias(dias){
    var n_dias = req.params.dias;

}

//Una vez que la fecha de venta ha pasado, sellIn < 0 , los precios de cada producto, se degradan el doble de rapido.
function reglaRebajaPrecios(){
    if(producto.super_avance.sellIn = 0)
    {
        precio_SuperAvance - 2;

        if(producto.fc_superduper.sellIn = 0){
            precio_FullSuperDuper - 2;

            if(producto.f_cobertura.sellIn = 0){
                precio_FullCobertura - 2;
            }
        }
    }else{
    }
}

//el producto "Full cobertura" incrementa su precio a medida que pasa el tiempo
function reglaAumPrecioFullCobertura(){
    if(producto.f_cobertura.sellIn -1){
        precio_FullCobertura + 1;
    }else{

    }
}

 //el producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio. tiene un precio fijo de 180


/*el producto "Full cobertura Super duper", tal como el "Full Cobertura", 
incrementa su precio a medida que se acerca su fecha de vencimiento:
    El precio se incrementa en 2 cuando quedan 10 dias o menos y se incrementa en 3, cuando quedan 5 dias o menos.
    el precio disminuye a 0 cuando se vence el tiempo de venta.
*/
function reglaSuperDuper(){
    if(producto.fc_superduper.sellIn < 5){
        precio_FullSuperDuper + 3;
        
        if(producto.fc_superduper.sellIn <=10 || producto.fc_superduper.sellIn >5){
            precio_FullSuperDuper + 2;
        }
            if(producto.fc_superduper.sellIn = 0){
                precio_FullSuperDuper = 0;
            }
    }else{
        precio_FullSuperDuper < 100;
    }

}

//El producto "Super avance" dismuniye su precio el doble de rapido que un producto normal.
function reglaSuperAvance(){

}

module.exports={reglaAumPrecioFullCobertura,
     reglaDias, 
     reglaRebajaPrecios,
     reglaAumPrecioFullCobertura,
     reglaSuperAvance,
     reglaSuperDuper,
    precio_FullCobertura,
    precio_FullSuperDuper,
    precio_MegaCobertura,
    precio_SuperAvance
}