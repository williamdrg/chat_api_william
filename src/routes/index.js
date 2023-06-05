const conversationRoutes = require('./conversations.routes')
const userRoutes = require('./users.routes')
const messageRoutes = require('./messages.routes')
const participantRoutes = require('./participants.routes')

const apiRoutes = (app) => {
  app.use(userRoutes)
  app.use(conversationRoutes)
  app.use(messageRoutes)
  app.use(participantRoutes)
}

module.exports = apiRoutes