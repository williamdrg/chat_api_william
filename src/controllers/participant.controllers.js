const { addParticipantService } = require('../services/participant.services');

const addParticipant = async (req, res, next) => {
  try {
    const { userId, conversationId } = req.body
    const participant = await addParticipantService(userId, conversationId)
    res.status(200).json(participant)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addParticipant
}
