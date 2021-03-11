module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nome: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      foto:{
        type: Sequelize.STRING
      }
    });
  
    return Usuario;
  };