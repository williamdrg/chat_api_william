const { findConversationById } = require('../repositories/conversation.repositories')
const { findUserById } = require('../repositories/user.repositories')
const { findParticipant } = require('../repositories/participant.repositories')
const { createMessage } = require('../repositories/messaje.repositories')

const createMessageService = async (content, createdBy, conversationId) => {
  const conversation = await findConversationById(conversationId);

  if (!conversation) {
    throw { status: 404, message: 'Conversation not found' };
  }

  const participant = await findUserById(createdBy);

  if (!participant) {
    throw { status: 404, message: 'User does not exist in our database' };
  }

  const isParticipant = await findParticipant(createdBy, conversationId);

  if (!isParticipant) {
    throw { status: 403, message: 'User is not a participant in this conversation' };
  }

  return await createMessage(content, createdBy, conversationId);
}

module.exports = {
  createMessageService
}