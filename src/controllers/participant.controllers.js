const Conversations = require('../models/conversations.models')
const Users = require('../models/users.models')
const Participants = require('../models/participants.models');

const addParticipant = async (req, res, next) => {
  try {
    const { userId, conversationId } = req.body

    const conversation = await Conversations.findByPk(conversationId, { include: Users })
    if (!conversation) {
      return next({
        status: 404, 
        name: 'Error with the conversation field',
        message: 'Conversation not found'
      })
    }

    // Contar los participantes actuales
    const currentParticipantCount = await Participants.count({ where: { conversationId } });
    if (conversation.type === 'pair' && currentParticipantCount >= 2) {
      return next({
        status: 400,
        name: "Conversation full",
        message: "This conversation already has 2 participants",
      });
    }

    const user = await Users.findByPk(userId)
    if (!user) {
      return next({
        status: 404, 
        name: 'User not found',
        message: 'User does not exist in our database'
      })
    }

    // Verificar si el usuario ya es un participante en la conversación
    const existingParticipant = await Participants.findOne({ where: { userId, conversationId } });
    if (existingParticipant) {
      return next({
        status: 409, 
        name: 'Participant already exists',
        message: 'This user is already a participant in the conversation'
      });
    }

    // Añadir el usuario a la conversación
    const participant = await Participants.create({ userId, conversationId });

    res.status(200).json(participant)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addParticipant
}