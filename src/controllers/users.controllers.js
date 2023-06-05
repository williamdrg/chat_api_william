const { 
  registerUser, 
  loginUser, 
  fetchAllUsers, 
  uploadUserAvatar 
} = require('../services/user.services');
const fs = require('fs')

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await registerUser(username, email, password);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await loginUser(email, password);
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await fetchAllUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      throw { status: 400, message: 'Seleccione la imagen que desea subir' };
    }

    const avatarPath = req.file.path

    try {
      await uploadUserAvatar(id, avatarPath);
      res.json({ message: 'Avatar cargado exitosamente' });
    } catch (error) {
      // Si hay un error, borra el archivo
      fs.unlinkSync(avatarPath);
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers, 
  uploadImage,
};
