import ProductMaster from "../models/products.models.js";


class ProductServices {
    // Create a new product
    static async createProduct(data) {
        try {
            const product = await ProductMaster.create(data);
            return product;
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    // Get all products
    static async getAllProducts() {
        try {
            const products = await ProductMaster.findAll();
            return products;
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }

    // Get a single product by ID
    static async getProductById(productId) {
        try {
            const product = await ProductMaster.findByPk(productId);
            if (!product) {
                throw new Error("Product not found");
            }
            return product;
        } catch (error) {
            throw new Error(`Error fetching product: ${error.message}`);
        }
    }

    // Update a product by ID
    static async updateProduct(productId, data) {
        try {
            const product = await ProductMaster.findByPk(productId);
            if (!product) {
                throw new Error("Product not found");
            }
            await product.update(data);
            return product;
        } catch (error) {
            throw new Error(`Error updating product: ${error.message}`);
        }
    }

    // Delete a product by ID
    static async deleteProduct(productId) {
        try {
            const product = await ProductMaster.findByPk(productId);
            if (!product) {
                throw new Error("Product not found");
            }
            await product.destroy();
            return { message: "Product deleted successfully" };
        } catch (error) {
            throw new Error(`Error deleting product: ${error.message}`);
        }
    }
}

export default ProductServices;
