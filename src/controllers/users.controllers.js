const { 
  registerUser, 
  loginUser, 
  fetchAllUsers, 
  uploadUserAvatar 
} = require('../services/user.services')
const uploadToCloudinary = require('../utils/uploadFieldCloudinary')


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

    const file = req.file;
    const fileName = `${id}-${Date.now()}.${file.mimetype.split('/')[1]}`;

    // Subir la imagen a Cloudinary
    const uploadResult = await uploadToCloudinary(file.buffer, fileName);

    // Una vez que la imagen se ha subido con éxito a Cloudinary,
    // actualizar el avatar del usuario en la base de datos
    await uploadUserAvatar(id, fileName);

    res.json({ message: 'Avatar cargado exitosamente', url: uploadResult.url });
  } catch (error) {
    next(error);
  }
}


module.exports = {
  createUser,
  login,
  getAllUsers, 
  uploadImage,
};
