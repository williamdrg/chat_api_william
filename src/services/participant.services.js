const { findConversationById } = require("../repositories/conversation.repositories");
const { countParticipants, findParticipant } = require("../repositories/participant.repositories");
const { findUserById } = require("../repositories/user.repositories");


const addParticipantService = async (userId, conversationId) => {
  const conversation = await findConversationById(conversationId)
  if (!conversation) {
    throw new Error('Conversation not found');
  }

  const currentParticipantCount = await countParticipants(conversationId)
  if (conversation.type === 'pair' && currentParticipantCount >= 2) {
    throw new Error('This conversation already has 2 participants')
  }

  const user = await findUserById(userId)
  if (!user) {
    throw new Error('User does not exist in our database');
  }

  const existingParticipant = await findParticipant(userId, conversationId)
  if (existingParticipant) {
    throw new Error('This user is already a participant in the conversation')
  }

  return await createParticipant(userId, conversationId)
}

module.exports = {
  addParticipantService,
}
