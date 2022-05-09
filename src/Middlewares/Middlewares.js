const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const roupas = req.body;
  if (
    !roupas ||
    !roupas.nome ||
    !roupas.descricao ||
    !roupas.foto ||
    !roupas.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da roupas!' });
  }
  next();
};

const validObjectBodyCart = (req, res, next) => {
  const cart = req.body;
  carrinho.forEach((item) => {
    if (!item || !item.obraId || !item.quantidade) {
      return res.status(400).send({ message: 'Envie todos os campos!' });
    }
  });
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCart,
};
