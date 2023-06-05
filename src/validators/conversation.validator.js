const { check } = require('express-validator')
const validateResult = require('../utils/validate')


const conversationValidator = [
  check('title', 'Error con el campo title')
    .exists()
    .withMessage('No se esta enviando el titulo de la conversación')
    .notEmpty()
    .withMessage('el campo titulo no puede estar vacio')
    .isString()
    .withMessage('El tipo de dato debe ser un string')
    .isLength({ min: 3})
    .withMessage('El titulo debe contener minimo 3 caracteres')
    .trim(),
  check('type', 'Error con el campo type')
    .exists()
    .withMessage('No se esta enviando el tipo de conversación')
    .notEmpty()
    .withMessage('el campo type no puede estar vacio')
    .isString()
    .withMessage('El tipo de dato debe ser un string')
    .trim()
    .isIn([ 'pair', 'group' ])
    .withMessage("El tipo de conversación debe ser 'pair' or 'group'."),
  check('createdBy', 'Error con el campo del creador de la conversación')
    .exists()
    .withMessage('No se esta enviando el id del usuario que crea la conversación')
    .notEmpty()
    .withMessage('El campo createdBY debe ser un número entero válido')
    .isInt()
    .withMessage('El campo createdBy debe ser un número entero (ID del usuario)')
    .trim(),
    validateResult
]

const getUserConversationValidator = [
  check("id", "Invalid user ID")
    .isInt()
    .withMessage("El ID de usuario debe ser un número entero válido"),
  validateResult
]

const validateExistingConversation = [
  check("id", "Invalid conversation ID")
  .isInt()
  .withMessage("El ID de la conversación debe ser un número entero válido"),
  validateResult
]

module.exports = {
  conversationValidator,
  getUserConversationValidator,
  validateExistingConversation
}