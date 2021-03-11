const db = require("../models/index");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Preencha todas as informações!"
    });
    return;
  }

  const usuario = {
    nome: req.body.nome,
    data_nascimento: req.body.data_nascimento,
    foto: req.body.foto
  };

  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao cadastrar usuário."
      });
    });
};

exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Usuario.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro ao listar usuários."
        });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao encontrar o usuario de id=" + id
      });
    });
};

exports.update = (req, res) => {   
    const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuário atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não foi possivel alterar o usuário de código ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar usuário de código" + id
      });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

  Usuario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuário deletado com sucesso"
        });
      } else {
        res.send({
          message: `Não foi possivel deletar o usuário de código ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao deletar usuário de código" + id
      });
    });    
};

