const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const createUserValidator = [
  check("username", "Error con el atributo username")
    .exists()
    .withMessage("No se esta enviando el username")
    .notEmpty()
    .withMessage("Username no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser una cadena de texto")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener minimo 6 caracteres y máximo 30")
    .trim(),
  check("email", "Error con el campo email")
    .exists()
    .withMessage("El email es requerido")
    .notEmpty()
    .withMessage("El email no puede estar vacío")
    .isString()
    .withMessage("El email debe ser un string")
    .isEmail()
    .withMessage("El email debe ser válido")
    .isLength({min: 10, max: 50})
    .withMessage("El email debe tener minimo 10 caracteres y máximo 50")
    .trim(),
  check("password", "Error con el password")
    .exists()
    .withMessage("password es obligatorio")
    .notEmpty()
    .withMessage("password no puede estar vacio")
    .isString()
    .withMessage("El password debe ser una cadena de texto")
    .isLength({ min: 4 })
    .withMessage("El password debe tener minimo 4 caracteres"),
  validateResult
]

const loginValidator = [
  check("email", "Error con el campo email")
    .exists()
    .withMessage("El email es requerido")
    .notEmpty()
    .withMessage("El email no puede estar vacío")
    .isEmail()
    .withMessage("El email debe ser válido")
    .isLength({ min: 10, max: 50 })
    .withMessage("El email debe tener una longitud entre 10 y 50 caracteres")
    .trim(),
  check("password", "Error con el campo password")
    .exists()
    .withMessage("El password es requerido")
    .notEmpty()
    .withMessage("El password no puede estar vacío")
    .isString()
    .withMessage("El password debe ser una cadena de texto")
    .isLength({ min: 4 })
    .withMessage("El password debe tener una longitud mínima de 4 caracteres"),
    validateResult
]

const uploadAvatarValidator = [
  check("id", "Invalid user ID")
    .isInt()
    .withMessage("El id debe ser un valor numérico"),
  validateResult
]

module.exports = {
  createUserValidator,
  loginValidator,
  uploadAvatarValidator
}