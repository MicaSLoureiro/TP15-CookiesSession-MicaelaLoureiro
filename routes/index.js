const express = require('express');
const router = express.Router();
const formValidation = require('../validations/formValidation')
const colorCheck = require('../middlewares/colorCheck')

const {index, form, hello, notColor} = require('../controllers/indexControllers')
/* GET home page. */
router.get('/', index);
router.post('/', formValidation, form);
router.get('/hello', colorCheck,hello);
router.delete('/hello', notColor)

module.exports = router;
