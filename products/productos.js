const precios = require('./reglas.js');

/*Notas
Productos:
    -Full cobertura
    -Mega cobertura
    -Full cobertura Super duper
    -Super avance  
*/


//SellIn indica la cantidad de dias que tenemos para vender ese producto
var SellIn = 20;

var f = new Date();
var day = f.getDay();
var month = f.getMonth()+1;
var year = f.getFullYear();

var fecha = day+"/"+month+"/"+year

const f_cobertura ={
    nombre : "Full cobertura",
    sellIn : SellIn,
    Price : precios.precio_FullCobertura,
    Fecha_inicio: fecha

};

const m_cobertura ={
    nombre : "Mega cobertura",
    sellIn : SellIn,
    Price : precios.precio_MegaCobertura,
    Fecha_inicio: fecha

};

const fc_superduper ={
    nombre : "Full cobertura Super duper",
    sellIn : SellIn,
    Price : precios.precio_FullSuperDuper,
    Fecha_inicio: fecha

};

const super_avance ={
    nombre : "Super avance",
    sellIn : SellIn,
    Price : precios.precio_SuperAvance,
    Fecha_inicio: fecha

};


module.exports={f_cobertura,m_cobertura,fc_superduper,super_avance}