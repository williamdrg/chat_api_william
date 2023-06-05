const { createMessageService } = require('../services/message.services')

const createMessage = async (req, res, next) => {
  try {
    const { content, createdBy, conversationId } = req.body
    const message = await createMessageService(content, createdBy, conversationId);
    res.json(message)
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createMessage
}