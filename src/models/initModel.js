const Users = require('../models/users.models')
const Conversations = require('../models/conversations.models')
const Messages = require('../models/messages.models')
const Participants = require('../models/participants.models')


const initModel = () => {
  Users.hasMany(Conversations, { foreignKey: "createdBy" })
  Conversations.belongsTo(Users, { foreignKey: "createdBy" })

  Users.hasMany(Messages, { foreignKey: "createdBy" })
  Messages.belongsTo(Users, { foreignKey: "createdBy" })

  Conversations.hasMany(Messages, { foreignKey: "conversationId" })
  Messages.belongsTo(Conversations, { foreignKey: "conversationId" })

  Conversations.hasMany(Participants, { foreignKey: "conversationId" })
  Participants.belongsTo(Conversations, { foreignKey: "conversationId" })

  Users.hasMany(Participants, { foreignKey: "userId" })
  Participants.belongsTo(Users, { foreignKey: "userId" })

}

module.exports = initModel