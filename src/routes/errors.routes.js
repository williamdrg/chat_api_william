const { 
  displayError,
  ormErrorHandler,
  errorHandler 
} = require('../middlewares/errorHandlers.middlewares')

const errorRoutes = (app) => {
  app.use(displayError, ormErrorHandler, errorHandler)

  app.use('*', (req, res) => {  
    res.status(404).json({
      message: 'Lo sentimos, la página que estás buscando no se encuentra disponible en este momento. Es posible que el contenido haya sido eliminado, movido o que hayas ingresado una dirección incorrecta. Por favor, verifica la URL e intenta nuevamente.'
    })
  })
}

module.exports = errorRoutes