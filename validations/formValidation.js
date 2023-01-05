const {check} = require('express-validator')

module.exports = [
    check('nombre').notEmpty().withMessage('No puede estar vacio').bail()
    .isLength({min:3}).withMessage('El nombre debe ser más largo')
    .isLength({max:20}).withMessage('El nombre no puede ser tan largo'),

    check('color').notEmpty().withMessage('No puede estar vacio').bail(),

    check('email').notEmpty().withMessage('No puede estar vacio').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    check('edad').notEmpty().withMessage('No puede estar vacio').bail()
    .isInt().withMessage('Solo se acepta un valor numérico')
]