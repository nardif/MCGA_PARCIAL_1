const schemacProducts = require('../models/Products')

//Método: para conseguir la lista entera de productos
const getProducts = async (req, res) => {
    try{
        const response = await schemacProducts.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Productos'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Método: para agregar un producto a la BD
const addProduct =  async (req, res) => {
    try{
        const Product = new schemacProducts(req.body)
         const newProduct = await Product.save()
         return res.status(200).json({
            data: newProduct,
            error: false,
            msg: 'Producto agregado'
         })
    }catch (error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

// Método: para conseguir un producto por id
const getProductsById = async (req, res) => {
    try{
        const response = await schemacProducts.findOne({ id: req.params.id })

        if(!response || response.length === 0){
             return res.status(404).json({
                 error: true,
                 msg: 'Producto inexistente'
             })
         }
        return res.status(200).json({
             data: response,
             error: false,
             msg: 'Producto encontrado'
         })
     }catch(error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

 // Método: para conseguir un producto por name
 const getProductsByName = async (req, res) => {
    try{
        const response = await schemacProducts.find({ name: req.params.name})

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'Producto inexistente'
            })
        }
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


// Método: para eliminar un producto
 const deleteProductById = async (req, res) => {
    try{
        const response = await schemacProducts.deleteOne({ id: req.params.id })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'Producto inexistente'
            })
        }
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto eliminado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Método: para editar algún campo de un producto
const updateProductById = async (req, res) => {
    try {
     
        const response = await schemacProducts.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error para actualizar el producto',
            });
        }
        return res.status(200).json({
            data: response,
            error: false,
            message: 'Producto actualizado'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsByName,
    addProduct,
    deleteProductById,
    updateProductById
}