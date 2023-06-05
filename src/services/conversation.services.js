const { findUserById, findAllUsers } = require('../repositories/user.repositories')
const {
  createNewConversation,
  findUserByIdWithConversation,
  findConversationByIdWithParticipants,
  findConversationById,
  deleteConversation,
  deleteParticipants
}= require('../repositories/conversation.repositories')
const { bulkAddParticipants } = require('../repositories/participant.repositories')

const createConversation = async (title, type, createdBy) => {
  const user = await findUserById(createdBy)
  if (!user) {
    throw { status: 404, message: 'user does no exist'}
  }

  const newConversation = await createNewConversation({title, type, createdBy})
  return newConversation
}

const getUserConversations = async (userId) => {
  const user = await findUserByIdWithConversation(userId)
  if (!user) {
   throw { status: 404, message: 'user does no exist'} 
  }
  return user
}

const getConversationWithParticipants = async (conversationId) => {
  const conversation = await findConversationByIdWithParticipants(conversationId)
  if (!conversation) {
    throw {status: 404, message: 'Conversation not found'}
  }
  return conversation
}

const deleteConversationService = async (id) => {
  const conversation = await findConversationById(id);
  
  if (!conversation) {
    throw { status: 404, message: 'Conversation not found' };
  }

  await deleteConversation(id);
}

const addUsersToGroupConversationService = async (id, userIds) => {
  const conversation = await findConversationById(id);

  if (!conversation) {
    throw { status: 404, message: 'Conversation not found' };
  }

  if (conversation.type !== 'group') {
    throw { status: 400, message: 'The conversation is not of a group nature' };
  }

  const users = await findAllUsers(userIds);

  if (users.length !== userIds.length) {
    throw { status: 404, message: 'Some users do not exist' };
  }

  const participants = await bulkAddParticipants(
    users.map((user) => ({
      userId: user.id,
      conversationId: conversation.id,
    }))
  );

  return participants;
}

const removeUsersFromGroupConversationService = async (id, userIds) => {
  const conversation = await findConversationById(id);

  if (!conversation) {
    throw { status: 404, message: 'Conversation not found' };
  }

  if (conversation.type !== 'group') {
    throw { status: 400, message: 'The conversation is not of a group nature' };
  }

  const deleteCount = await deleteParticipants(conversation.id, userIds);

  if (deleteCount === 0) {
    throw { status: 404, message: 'Users not found in the conversation' };
  }

  return deleteCount;
}

module.exports = {
  createConversation,
  getUserConversations,
  getConversationWithParticipants,
  deleteConversationService,
  addUsersToGroupConversationService,
  removeUsersFromGroupConversationService
}