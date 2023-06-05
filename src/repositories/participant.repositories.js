const Participants = require('../models/participants.models')

const bulkAddParticipants = async (data) => {
  return await Participants.bulkCreate(data);
}

const findParticipant = async (userId, conversationId) => {
  return await Participants.findOne({ where: { userId, conversationId } });
}

module.exports = {
  bulkAddParticipants,
  findParticipant
}