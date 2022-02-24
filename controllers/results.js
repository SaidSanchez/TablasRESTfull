const express = require('express');

function list (req, res, next){
    res.send('Tabla RESTfull');
}

function sum(req, res, next){
    const n1=req.params.n1;
    const n2=req.params.n2;
    res.send(`Sumar ${n1} + ${n2}`);
}

function mult(req, res, next){
  const n1=req.params.n1;
  const n2=req.params.n2;
    res.send(`Multiplicar ${n1} * ${n2}`);
}

function div(req, res, next){
  const n1=req.params.n1;
  const n2=req.params.n2;
    res.send(`Dividir ${n1} / ${n2}`);
}

function pot(req, res, next){
  const n1=req.params.n1;
  const n2=req.params.n2;
    res.send(`Potencia de ${n1} ^ ${n2}`);
}

function res(req, res, next){
  const n1=req.params.n1;
  const n2=req.params.n2;
    res.send(`Restar ${n1} - ${n2}`);
}

module.exports = {
    list,sum,mult,div,pot,res
};
