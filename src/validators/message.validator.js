const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const messageValidator = [
  check('content', 'Error with the content field')
    .exists()
    .withMessage('The message content is not being sent')
    .notEmpty()
    .withMessage('The content field cannot be empty')
    .isString()
    .withMessage('The data type must be a string'),
  check('createdBy', 'Error with the message creator field')
    .exists()
    .withMessage('The creator ID is not being sent')
    .notEmpty()
    .withMessage('The createdBy field cannot be empty')
    .isInt()
    .withMessage('The createdBy field should be an integer (User ID)')
    .trim(),
  check('conversationId', 'Error with the conversation field')
    .exists()
    .withMessage('The conversation ID is not being sent')
    .notEmpty()
    .withMessage('The conversationId field cannot be empty')
    .isInt()
    .withMessage('The conversationId field should be an integer (Conversation ID)')
    .trim(),
  validateResult
]

module.exports = {
  messageValidator
}