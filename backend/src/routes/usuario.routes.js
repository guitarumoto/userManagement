module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    //Cadastra usuário
    router.post("/", usuarios.create);

    //Lista usuários
    router.get("/", usuarios.findAll);

    //Seleciona um usuario por id
    router.get("/:id", usuarios.findOne);

    //Deleta usuário
    router.delete("/:id", usuarios.delete);

    //Atualiza usuário
    router.put("/:id", usuarios.update);

    app.use('/api/usuarios', router);

};