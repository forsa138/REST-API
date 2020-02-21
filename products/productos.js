const mongoose = require('mongoose');
/*Notas
Productos:
    -Full cobertura
    -Mega cobertura
    -Full cobertura Super duper
    -Super avance  
*/


//SellIn indica la cantidad de dias que tenemos para vender ese producto
var SellIn = 20;


//price indica el costo del producto
var price = 80;


const f_cobertura ={
    nombre : "Full cobertura",
    sellIn : SellIn,
    Price : price
};

const m_cobertura ={
    nombre : "Mega cobertura",
    sellIn : SellIn,
    Price : price
};

const fc_superduper ={
    nombre : "Full cobertura Super duper",
    sellIn : SellIn,
    Price : price
};

const super_avance ={
    nombre : "Super avance",
    sellIn : SellIn,
    Price : price
};


module.exports={f_cobertura,m_cobertura,fc_superduper,super_avance}