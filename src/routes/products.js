const express = require("express");
const router = express.Router();
const productSchema = require("../models/Products");

//GET: para conseguir la lista entera de productos
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//POST: para agregar un producto a la BD
router.post("/products", (req, res) => {
    const product = productSchema(req.body);
    product
      .save(product)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//GET: para conseguir un producto por name O id
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/products/name/:name", (req, res) => {
  const { name } = req.params;
  productSchema
    .findOne({name: name})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//PUT: para editar algún campo de un producto
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, stock, description } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, price, stock, description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE: para eliminar un producto
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;