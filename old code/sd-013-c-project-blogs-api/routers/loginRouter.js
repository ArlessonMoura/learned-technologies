const router = require('express').Router();
const controllerLogin = require('../controllers/loginController');
const validates = require('../middleware');

const { checkLoginEmail, checkLoginPass } = validates;
const { login } = controllerLogin;

router.post('/', checkLoginEmail, checkLoginPass, login);
// router.get('/', );
// router.get('/:id', );

module.exports = router;
