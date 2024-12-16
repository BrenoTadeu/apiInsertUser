const express = require('express');
const router = express.Router();
const controllerUser = require('../Controller/controller');

router.get('/', (req, res)=>{
    res.send("bem vindo a api, de cadastro e login de usuarios");
})

router.post('/cadastro', controllerUser.insertUser);

module.exports = router;