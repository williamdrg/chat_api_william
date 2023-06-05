const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Participants = db.define('participants', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field:'conversation_id'
  }
},
{
  timestamps: false
}
);


module.exports = Participants