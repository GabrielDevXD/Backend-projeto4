const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(
      'mongodb+srv://root:admin@hamburguer.oziw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('Conectado ao banco de dados com sucesso');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
