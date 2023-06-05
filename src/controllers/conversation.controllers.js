const { 
  createConversation, 
  getUserConversations, 
  getConversationWithParticipants, 
  deleteConversationService, 
  addUsersToGroupConversationService 
} = require('../services/conversation.services')

const createConversations = async (req, res, next) => {
  try {
    const { title, type, createdBy } = req.body
    const newConversation = await createConversation(title, type, createdBy)
    res.status(201).json(newConversation)
  } catch (error) {
    next(error)
  }
}

const getUserConversation  = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await getUserConversations(id)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const fetchConversationWithParticipants  = async (req, res, next) => {
  try {
    const { id } = req.params
    const conversation = getConversationWithParticipants(id)
    res.json(conversation)
  } catch (error) {
    next(error)
  }
}

const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteConversationService(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

const addUsersConversationGroup = async (req, res, next) => {
  try {
    const { id } = req.params
    const { userIds } = req.body
    const participants = await addUsersToGroupConversationService(id, userIds)
    res.status(201).json(participants)
  } catch (error) {
    next(error)
  }
}

const deleteUsersConversationGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userIds } = req.body;
    const deleteCount = await removeUsersFromGroupConversationService(id, userIds);
    return res.status(200).json({ message: `${deleteCount} users were removed from the conversation` })
  } catch (error) {
    next(error)
  }
}


module.exports = {
  createConversations,
  getUserConversation,
  fetchConversationWithParticipants,
  deleteConversation, 
  addUsersConversationGroup,
  deleteUsersConversationGroup 
}