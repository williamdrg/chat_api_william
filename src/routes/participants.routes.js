const { Router } = require('express');
const { addParticipant } = require('../controllers/participant.controllers')
const { validateparticipant } = require('../validators/participant.validator')
const router = Router();

router.post('/addusers/conversation', validateparticipant, addParticipant)

module.exports = router;