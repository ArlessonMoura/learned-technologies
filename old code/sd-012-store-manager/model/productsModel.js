const { ObjectId } = require('mongodb');
const connection = require('./connection');

// Query retorna todos os produtos
const allProducts = async () => connection()
.then((db) => db.collection('products').find().toArray())
 .then((list) => list);

// Query retorna produtos por _id
const productId = async (id) => connection()
.then((db) => db.collection('products').findOne({ _id: ObjectId(id) }))
 .then((list) => list);

 // Query insere um elemento com base em dados de requerimentos.
const insert = async (name, quantity) => {
  const inserted = await connection().then((db) => db.collection('products').insertOne({
    name,
    quantity,
  }));
  return {
    _id: inserted.insertedId,
    name,
    quantity,
  };
};

 // Query atualiza um elemento com base em dados de requerimentos.
const update = async (name, quantity, id) => {
  await connection()
  .then((db) => db.collection('products').updateOne({ _id: ObjectId(id) },
    { $set: { name, quantity } }));
    return {
      _id: id,
      name,
      quantity,
    };
};

const deleteProduct = async (id) => {
  const productDeleted = await productId(id);
  await connection()
  .then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
  return productDeleted;
};

const updateBySales = async (id, quantum) => {
  await connection().then((db) => db.collection('products')
  .updateOne({ $and: [{ _id: ObjectId(id) }, { quantity: { $gte: quantum } }] },
    { $inc: { quantity: -quantum } }));
  return { quantum };
};

const updateByDeleteSales = async (id, quantum) => {
  await connection().then((db) => db.collection('products').updateOne({ _id: ObjectId(id) },
    { $inc: { quantity: quantum } }));
    return { quantum };
};

module.exports = {
  allProducts,
  productId,
  insert,
  update,
  deleteProduct,
  updateBySales,
  updateByDeleteSales,
};
