const express = require('express');
require('dotenv').config();

const routerUsuario = require('./routers/usuarioRouter');
const routerLogin = require('./routers/loginRouter');
const routerCategories = require('./routers/categoriesRouter');
const routerPost = require('./routers/postRouter');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routerUsuario);
app.use('/login', routerLogin);
app.use('/categories', routerCategories);
app.use('/post', routerPost);
