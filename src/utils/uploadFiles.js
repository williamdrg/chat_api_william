const multer = require('multer');

const storage = multer.diskStorage({
  // destinación: indicarle a multer que cuando cargue un archivo donde lo va a guardar
  // el cb se utiliza para retorar un error y luego se le indica el lugar donde se van a guardar las imagenes
  destination: (req, file, cb) => {
    cb(null, './fields');
  },
  // filename: sirve para renombrar los archivos subidos
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    cb(null, `${Date.now()}.${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  
  const imageFormat = allowedFormats.includes(file.mimetype);

  if (!imageFormat) {
    cb(new Error('The file must be an image (jpeg, jpg, png, gif).'));
  } else {
    cb(null, true);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;