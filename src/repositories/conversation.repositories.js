const Conversations = require('../models/conversations.models');
const Participants = require('../models/participants.models');
const Users = require('../models/users.models');
const Messages = require('../models/messages.models');

const createNewConversation = async (conversationData) => {
  return await Conversations.create(conversationData)
}

const findUserByIdWithConversation = async (id) => {
  return await Users.findByPk(id, {
    attributes: {exclude: 'password'},
    include: { model: Conversations }
  });
};

const findConversationByIdWithParticipants = async (id) => {
  return await Conversations.findByPk(id, {
    include: [
      {
        model: Participants,
        include: { 
          model: Users,
          attributes: { exclude: 'password' } 
        }
      },
      {
        model: Messages
      }
    ]
  });
}

const findConversationById = async (id) => {
  return await Conversations.findByPk(id)
}

const deleteConversation = async (id) => {
  return await Conversations.destroy({where: {id}})
}

 const deleteParticipants = async (conversationId, userIds) => {
  return await Participants.destroy({
    where: {
      conversationId: conversationId,
      userId: userIds
    }
  });
}

module.exports = {
  createNewConversation,
  findUserByIdWithConversation,
  findConversationByIdWithParticipants,
  findConversationById,
  deleteConversation,
  deleteParticipants
}