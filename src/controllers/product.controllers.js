import ProductServices from "../services/product.services.js";


// Example: Create a new product
export const createProductHandler = async (req, res) => {
    try {
        const productData = req.body; // Ensure body data validation is performed
        const newProduct = await ProductServices.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Example: Get all products
export const getAllProductsHandler = async (req, res) => {
    try {
        const products = await ProductServices.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
