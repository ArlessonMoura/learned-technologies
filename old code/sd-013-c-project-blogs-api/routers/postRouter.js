const router = require('express').Router();
const controllerPost = require('../controllers/postController');
const validates = require('../middleware');

const { checkToken, checkPost, checkUpdatePost } = validates;
const { insertPost, allPosts, postById, updatePost, deletePostById } = controllerPost;

router.post('/', checkToken, checkPost, insertPost);
router.get('/', checkToken, allPosts);
router.get('/:id', checkToken, postById);
router.put('/:id', checkUpdatePost, checkToken, updatePost);
router.delete('/:id', checkToken, deletePostById);
// router.post('/admin', insertAdm);

module.exports = router;
