const express = require('express');
const app = express();
const request = require('request');
var producto = require('../products/productos.js');
var reglas = require('../products/reglas');

//Lista productos vendidos
app.get('/listProduct',(req, res)=>{
    res.json(producto)
})

//Agregar producto
app.post('/addProduct',(req, res)=>{
    res.json({'Agregar_producto':'funcionando'});

})

//simulacion de productos relacionado con los dias
app.get('/evaluateProducts/:dias',(req, res)=>{
    var dias = req.params.dias;
    res.json({'el dia es': + dias});

})

app.listen('4000',()=>{
    console.log('Listening port 4000');
})