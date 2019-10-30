const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const authMiddleware = require('./middlewares/auth');
const SessionController = require('./controllers/SessionController');
const RestaurantController = require('./controllers/RestaurantController');
const OrderController = require('./controllers/OrderController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/login', SessionController.login);
routes.post('/register', SessionController.register);

routes.use(authMiddleware);

routes.get('/profile', SessionController.profile);

routes.get('/dashboard', RestaurantController.fetchRestaurantsByUser);

routes.get('/restaurants', RestaurantController.fetchRestaurants);
routes.get('/restaurants/:id', RestaurantController.viewRestaurant);
routes.post('/restaurants', upload.single('thumbnail'), RestaurantController.addRestaurant);
routes.put('/restaurants/:id', upload.single('thumbnail'), RestaurantController.updateRestaurant);
routes.delete('/restaurants/:id', RestaurantController.deleteRestaurant);

routes.post('/restaurants/:id/orders', OrderController.order);

routes.post('/orders/:id/approvals', ApprovalController.store);
routes.post('/orders/:id/rejections', RejectionController.store);

module.exports = routes;
