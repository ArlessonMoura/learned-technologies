const router = require('express').Router();
const controllerUsuario = require('../controllers/usuarioController');
const validates = require('../middleware');

const { checkName, checkEmail, checkPassword, checkToken } = validates;
const { insert, allUsers, userById, deleteMe } = controllerUsuario;

router.post('/', checkName, checkEmail, checkPassword, insert);
router.get('/', checkToken, allUsers);
router.get('/:id', checkToken, userById);
router.delete('/me', checkToken, deleteMe);
// router.post('/admin', insertAdm);

module.exports = router;
