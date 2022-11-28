const servicePost = require('../services/postServices ');

const insertPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;
    const response = await servicePost.insertPost(title, content, categoryIds, token);
    if (!response) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    return res.status(201).json(response);
};

const allPosts = async (_req, res) => {
  const response = await servicePost.allPosts();
  return res.status(200).json(response);
};

const postById = async (req, res) => {
  const { id } = req.params;
  const response = await servicePost.postById(id);
  if (!response) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(response);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const token = req.headers.authorization;
  const { id } = req.params;
  const response = await servicePost.updatePost({ title, content, id, token });
  if (!response) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.status(200).json(response);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const response = await servicePost.deletePostById(id, token);
  if (response === 'error type 1') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  if (response === 'error type 2') {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(204).json(response);
};

// const insertAdm = async (req, res) => {
//   const { name, email, password } = req.body;
//   const response = await serviceUsuario.insertAdm(name, email, password);
//   if (!response) {
//     return res.status(409).json({ message: 'Email already registered' });
//   }
//   return res.status(201).json(response);
// };

module.exports = {
  insertPost,
  allPosts,
  postById,
  updatePost,
  deletePostById,
  // insertAdm,
};
