const express = require('express');
require('dotenv').config();
const routerProducts = require('./routers/productsRouter');
const routerSales = require('./routers/salesRouter');

const app = express();
app.use(express.json());

// const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

app.use('/products', routerProducts);
app.use('/sales', routerSales);
