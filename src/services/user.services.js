const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { 
  createUser, 
  findUserByEmail, 
  findUserByUsername, 
  getAllUsers, 
  findUserById, 
  updateUserAvatar 
} = require('../repositories/user.repositories');

const registerUser = async (username, email, password) => {
  const exitingEmail = await findUserByEmail(email)
  const existingUsername = await findUserByUsername(username)
  if (exitingEmail || existingUsername) {
    throw {
      status: 400,
      message: "Email or username already in use"  
    }
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser(username, email, hashedPassword);
};

const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw { status: 400, message: "Invalid email or password" };
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw { status: 400, message: "Invalid email or password" };
  }
  const { id, username, firstname, lastname } = user;
  const userData = { id, username, firstname, lastname, email };
  const token = jwt.sign(userData, process.env.JWT_LOGIN, { algorithm: 'HS512', expiresIn: "1h" });
  return { ...userData, token };
};

const fetchAllUsers = async () => {
  return await getAllUsers();
};

const uploadUserAvatar = async (userId, avatarPath) => {
  const user = await findUserById(userId);
  
  if (!user) {
    throw { status: 404, message: 'User not found' };
  }

  return await updateUserAvatar(user, avatarPath);
};

module.exports = {
  registerUser,
  loginUser,
  fetchAllUsers,
  uploadUserAvatar,
};