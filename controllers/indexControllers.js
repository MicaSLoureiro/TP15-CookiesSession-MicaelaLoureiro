const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res, next) => {
        let colorFondo
        if(req.session.colorFondo !== '#FFF') {
            colorFondo = req.session.colorFondo
        }else{
             return colorFondo = '#FFF'
        }
        res.render('index', {
            colorFondo: colorFondo,
            texto: ' '
        })
    },
    form: (req, res, next) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let { nombre, color, email, edad, recordarColor } = req.body

            req.session.colorFondo = color
            req.session.nombre = nombre

            let colorFondo = req.session.colorFondo

            let texto = `Hola ${nombre}, elegiste el color: ${color}, tu email es: ${email} y tu edad es: ${edad}.`

            if (recordarColor) {
                res.cookie('cookieColor', color, {
                    maxAge: 1000 * 60 * 60 * 24 * 30
                })
            }
            /* return console.log(req.body); */
            return res.render('index', {
                colorFondo: colorFondo,
                texto: texto
            });
        } else {
            return res.render('index', {
                errors: errors.mapped(),
                old: req.body,
                texto: ' '
            })
        }
    },
    hello: (req, res, next) => {
        let colorFondo = req.session.colorFondo
        let nombre = req.session.nombre
        return res.render('helloUser', {
            colorFondo: colorFondo,
            nombre : nombre
        })
    },
    notColor: (req, res) => {
        let colorFondo = '#FFF'
        req.session.destroy();
        if (req.cookies.cookieColor) {
            res.cookie('cookieColor', '', { maxAge: -1 })
        }
        res.render('index', {
            colorFondo: colorFondo,
            texto: ' '
        })
    }
}