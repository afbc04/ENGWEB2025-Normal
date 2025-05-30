var express = require('express');
var router = express.Router();
var Controller = require('../controllers/controller');



// GET /
router.get('/edicoes', function(req, res) {

  if (req.query.org) {
    Controller.getEdicoesOrganizacao(req.query.org)
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json({ error: error.message }));
  }
  
  else {
    Controller.getAllEdicoes()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json({ error : error.message}))
  }


  

});

router.get('/edicoes/:id', function(req, res) {

  Controller.getEdicaoById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error : error.message}))

});

router.get('/paises/:id', function(req, res) {

  Controller.getPaisById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error : error.message}))

});

router.get('/paises', function(req, res) {

  if (req.query.papel == "org") {
    Controller.getPaisesOrganizadores()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json({ error: error.message }));
  } 

  else if (req.query.papel == "venc") {
    Controller.getPaisesVencedores()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json({ error: error.message }));
  }
  
  else {
    res.status(500).json({ error: error.message });
  }

});

router.get('/interpretes', function(req, res) {

  Controller.getInterpretes()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ error : error.message}))

});

router.post('/edicoes', function(req, res, next) {
  Controller.addEdicao(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

router.put('/edicoes/:id', function(req, res) {
  Controller.updateEdicao(req.params.id, req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp({ error: error.message }));
});

router.delete('/edicoes/:id', function(req, res) {
  Controller.deleteEdicao(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp({ error: error.message }));
});

module.exports = router;