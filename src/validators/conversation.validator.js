const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const conversationValidator = [
  check('title', 'Error with the title field')
    .exists()
    .withMessage('The conversation title is not being sent')
    .notEmpty()
    .withMessage('The title field cannot be empty')
    .isString()
    .withMessage('The data type must be a string')
    .isLength({ min: 3})
    .withMessage('The title must contain at least 3 characters')
    .trim(),
  check('type', 'Error with the type field')
    .exists()
    .withMessage('The conversation type is not being sent')
    .notEmpty()
    .withMessage('The type field cannot be empty')
    .isString()
    .withMessage('The data type must be a string')
    .trim()
    .isIn([ 'pair', 'group' ])
    .withMessage("The conversation type must be 'pair' or 'group'."),
  check('createdBy', 'Error with the creator field')
    .exists()
    .withMessage('The creator ID is not being sent')
    .notEmpty()
    .withMessage('The createdBy field must be a valid integer')
    .isInt()
    .withMessage('The createdBy field should be an integer (User ID)')
    .trim(),
    validateResult
]

const getUserConversationValidator = [
  check("id", "Invalid user ID")
    .isInt()
    .withMessage("The user ID must be a valid integer"),
  validateResult
]

const validateExistingConversation = [
  check("id", "Invalid conversation ID")
  .isInt()
  .withMessage("The conversation ID must be a valid integer"),
  validateResult
]

module.exports = {
  conversationValidator,
  getUserConversationValidator,
  validateExistingConversation
}