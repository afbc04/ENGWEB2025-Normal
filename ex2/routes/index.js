var express = require('express');
var router = express.Router();
const axios = require('axios');

const limite_registos = 50

// /
router.get('/', function(req, res, next) {

  var d = new Date().toISOString().substring(0, 10)

  axios.get('http://localhost:25000/edicoes')
    .then(resp => {
      res.status(200).render("ListPage", {elist: resp.data ,data: d, cor:"indigo", titulo:"Edições"})
    })
    .catch (error => {
      res.status(500).render("error", {error: error, data: d})
    })

});

//GET /paises/:id
router.get('/paises/:pais', function(req, res, next) {

  var d = new Date().toISOString().substring(0, 10)
  var pais = req.params.pais

  axios.get('http://localhost:25000/paises/' + pais)
    .then(resp => {

      var pais_obj = resp.data
      res.status(200).render("paisPage", {pais: pais_obj, data: d, cor:"indigo", titulo:"Ver País"})
          
    })
    .catch (error => {
      res.status(500).render("error", {error: error, data: d})
    })

});

// /:id
router.get('/:id', function(req, res, next) {

  var d = new Date().toISOString().substring(0, 10)
  var id = req.params.id

  axios.get('http://localhost:25000/edicoes/' + id)
    .then(resp => {

      var edicao = resp.data
      res.status(200).render("Page", {edicao: edicao, data: d, cor:"indigo", titulo:"Ver Edicao"})

    })
    .catch (error => {
      res.status(500).render("error", {error: error, data: d})
    })

});

module.exports = router;
