const Messages = require('../models/messages.models')

const createMessage = async (content, createdBy, conversationId) => {
  return await Messages.create({ content, createdBy, conversationId });
}

module.exports = {
  createMessage
}