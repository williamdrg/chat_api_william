const { Router } = require('express');
const { createMessage } = require('../controllers/message.controllers')
const { messageValidator } = require('../validators/message.validator')

const router = Router();

router.post('/message', messageValidator, createMessage)

module.exports = router;