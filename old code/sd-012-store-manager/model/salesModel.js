const { ObjectId } = require('mongodb');
const connection = require('./connection');

const listSales = async () => connection()
.then((db) => db.collection('sales').find().toArray())
 .then((list) => list);

 const salesId = async (id) => connection()
.then((db) => db.collection('sales').findOne({ _id: ObjectId(id) }))
 .then((list) => list);

const insertSales = async (itensSold) => {
  const inserted = await connection().then((db) => db.collection('sales').insertOne({ itensSold }));
  return {
    _id: inserted.insertedId,
    itensSold,
  };
};

const updateSale = async (itensSold, id) => {
  await connection().then((db) => db.collection('sales').updateOne({ _id: ObjectId(id) },
    { $set: { itensSold } }));
    return {
      _id: id,
      itensSold,
    };
};

const deleteSale = async (id) => {
  await connection()
  .then((db) => db.collection('sales').deleteOne({ _id: ObjectId(id) }));
  return id;
};

 module.exports = {
   listSales,
   insertSales,
   salesId,
   updateSale,
   deleteSale,
 };
