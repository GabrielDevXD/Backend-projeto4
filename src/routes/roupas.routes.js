const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../Middlewares/Middlewares');
const controllerCart = require('../controllers/cart.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const controllerRoupas = require('../controllers/roupas.controller');

router.get('/all-hamburguer', controllerRoupas.findAllRoupasController);
router.get(
  '/one-hamburguer/:id',
  validId,
  controllerRoupas.FindByIdRoupasController,
);
router.post(
  '/create-hamburguer',
  validObjectBody,
  controllerRoupas.createroupasController,
);
router.put(
  '/update-hamburguer/:id',
  validId,
  validObjectBody,
  controllerRoupas.updateroupasController,
);
router.delete(
  '/delete-hamburguer/:id',
  validId,
  controllerRoupas.deleteroupasController,
);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.get('/all-cart', controllerCart.findAllCartController);
router.post('/create-cart', controllerCart.createManyItemsCartController);
router.delete('/finish-cart', controllerCart.deleteAllItemsCartController);
module.exports = router;
