module.exports = (req,res,next) => {
    if (req.cookies.cookieColor) {
        req.session.colorFondo = req.cookies.cookieColor
    }
    next()
}