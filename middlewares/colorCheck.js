module.exports = (req,res,next) => {
    if (req.session.colorFondo) {
        return next()
    }else{
        res.redirect('/')
    }
}