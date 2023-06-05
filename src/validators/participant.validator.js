const { check } = require('express-validator')
const validateResult = require('../utils/validate')

const validateparticipant = [
  check('userId', 'Error with the userId field')
    .exists()
    .withMessage('The user ID is not being sent')
    .notEmpty()
    .withMessage('The userId field cannot be empty')
    .isInt()
    .withMessage('The userId field should be an integer (User ID)')
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
  validateparticipant
}