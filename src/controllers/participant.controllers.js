const { addParticipantService } = require('../services/participant.services');

const addParticipant = async (req, res, next) => {
  try {
    const participant = await addParticipantService(req.body)
    res.status(200).json(participant)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addParticipant
}