const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const validateparticipant = [
  check('userId', 'Error con el campo userId')
    .exists()
    .withMessage('No se esta enviando el id del usuario')
    .notEmpty()
    .withMessage('El campo userId no puede estar vacio')
    .isInt()
    .withMessage('El campo userId debe ser un número entero (ID del usuario)')
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
  validateparticipant
}