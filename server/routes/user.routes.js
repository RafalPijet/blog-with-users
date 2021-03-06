const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.route('/users/login').get(userController.getUserByLogin);
router.route('/users/add').post(userController.addUser);

module.exports = router;
