const { Router } = require('express');
const { 
  createConversations, 
  getUserConversation, 
  fetchConversationWithParticipants, 
  deleteConversation, 
  addUsersConversationGroup,
  deleteUsersConversationGroup
} = require('../controllers/conversation.controllers')
const { 
  conversationValidator, 
  getUserConversationValidator, 
  validateExistingConversation 
} = require('../validators/conversation.validator')

const router = Router();

router.post('/conversation', conversationValidator ,createConversations)

router.get('/user/:id/conversations', getUserConversationValidator ,getUserConversation)

router.get('/conversation/:id', validateExistingConversation, fetchConversationWithParticipants)

router.delete('/conversation/:id', validateExistingConversation, deleteConversation)

router.post('/addusers/conversation/:id', addUsersConversationGroup)

router.delete('/users/conversation/:id', deleteUsersConversationGroup)

module.exports = router;