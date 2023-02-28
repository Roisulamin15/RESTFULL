const menuRoutes = require('express').Router();
const menuControllers = require('../controllers/menuControllers');
// const authMiddlleware = require ('../middleware/authMiddlleware');
const uploadMiddleware = require('../middleware/uploadMidlleware')
const cloudinaryMiddleware = require('../middleware/cloudinaryMiddleware')
const { searchBytiytle } = require('../controllers/menuControllers')


menuRoutes.get('/search', menuControllers.searchBytiytle)
menuRoutes.post('/', uploadMiddleware, cloudinaryMiddleware,
// authMiddlleware.checkLogin,
 menuControllers.postDataMenu)
menuRoutes.post('/', menuControllers.postDataMenu);
menuRoutes.get('/', menuControllers.getAllData)
menuRoutes.delete('/:id', menuControllers.DeletData) 
menuRoutes.put('/:id', menuControllers.updateData)
menuRoutes.get('/:id', menuControllers.GetById)

module.exports = menuRoutes;
