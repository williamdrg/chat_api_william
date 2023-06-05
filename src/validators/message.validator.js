const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const messageValidator = [
  check('content', 'Error con el campo title')
    .exists()
    .withMessage('No se esta enviando el contenido del mensaje')
    .notEmpty()
    .withMessage('El contenido no puede estar vacio')
    .isString()
    .withMessage('El tipo de dato debe ser un string'),
  check('createdBy', 'Error con el campo del creador del mensaje')
    .exists()
    .withMessage('No se esta enviando el id del usuario que crea el mensaje')
    .notEmpty()
    .withMessage('El campo createdBY no puede estar vacio')
    .isInt()
    .withMessage('El campo createdBy debe ser un número entero (ID del usuario)')
    .trim(),
  check('conversationId', 'Error con el campo de la conversación')
    .exists()
    .withMessage('No se esta enviando el id de la conversación')
    .notEmpty()
    .withMessage('El campo conversationId no puede estar vacio')
    .isInt()
    .withMessage('El campo conversationId debe ser un número entero (ID del usuario)')
    .trim(),
  validateResult
]

module.exports = {
  messageValidator
}