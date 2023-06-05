const Participants = require('../models/participants.models')

const bulkAddParticipants = async (data) => {
  return await Participants.bulkCreate(data);
}

const findParticipant = async (userId, conversationId) => {
  return await Participants.findOne({ where: { userId, conversationId } });
}

const createParticipant = async (userId, conversationId) => {
  return await Participants.create({ userId, conversationId });
}

const countParticipants = async (conversationId) => {
  return await Participants.count({ where:  { conversationId } });
}

module.exports = {
  bulkAddParticipants,
  findParticipant,
  createParticipant,
  countParticipants
}