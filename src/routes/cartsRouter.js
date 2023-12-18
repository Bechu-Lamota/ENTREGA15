const { Router } = require('express')
const CartsController = require('../controllers/cartsController')

const cartsController = new CartsController()
const cartsRouter = Router()

cartsRouter.get('/', cartsController.getCarts.bind(cartsController))
cartsRouter.get('/:cid', cartsController.getCartById.bind(cartsController))
cartsRouter.post('/', cartsController.addCart.bind(cartsController))
cartsRouter.post('/:id/product/:pid', cartsController.addProductCart.bind(cartsController))
cartsRouter.post('/:id/purchase', cartsController.purchaseCart.bind(cartsController))
cartsRouter.put('/:cid', cartsController.updateCart.bind(cartsController));
cartsRouter.put('/:cid/:pid', cartsController.updateCart.bind(cartsController))
cartsRouter.put('/:cid/product/:pid', cartsController.updateCartProduct.bind(cartsController))
cartsRouter.delete('/:id', cartsController.deleteCart.bind(cartsController))
cartsRouter.delete('/:cid/product/:pid', cartsController.deleteCartProduct.bind(cartsController))
cartsRouter.delete('/:cid/products', cartsController.deleteCartProducts.bind(cartsController))

module.exports = cartsRouter