const { Router } = require('express');
const { 
  createUser,
  login, 
  getAllUsers, 
  uploadImage 
} = require('../controllers/users.controllers');
const { 
  createUserValidator,
  loginValidator, 
  uploadAvatarValidator 
} = require('../validators/users.validator')

const upload = require('../utils/uploadFiles')

const router = Router();

router.post('/users', createUserValidator, createUser)

router.post('/login', loginValidator, login)

router.get('/users', getAllUsers)

router.post('/users/:id/avatar', uploadAvatarValidator ,upload.single('avatar'), uploadImage)

module.exports = router;