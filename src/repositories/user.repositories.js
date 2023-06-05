const Users = require('../models/users.models')

const createUser = async (username, email, hashedPassword) => {
  return await Users.create({ username, email, password: hashedPassword })
}

const findUserByEmail = async (email) => {
  return await Users.findOne({ where: { email } })
}

const findUserByUsername = async (username) => {
  return await Users.findOne({ where: { username } })
}

const getAllUsers = async () => {
  return await Users.findAll({ attributes: { exclude: 'password' } })
}

const findUserById = async (id) => {
  return await Users.findByPk(id)
}

const findAllUsers = async (ids) => {
  return await Users.findAll({ where: { id: ids } })
}

const updateUserAvatar = async (user, avatarUrl) => {
  user.avatar = avatarUrl
  return await user.save()
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
  getAllUsers,
  findUserById,
  updateUserAvatar,
  findAllUsers
}