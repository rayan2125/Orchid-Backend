import MembershipProductServices from "../services/mmbrPrdt.services.js";


// Create a new membership product
export const createMembershipProductHandler = async (req, res) => {
    try {
        const membershipProductData = req.body; // Validate input data
        const newMembershipProduct = await MembershipProductServices.createMembershipProduct(membershipProductData);
        res.status(201).json(newMembershipProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all membership products
export const getAllMembershipProductsHandler = async (req, res) => {
    try {
        const membershipProducts = await MembershipProductServices.getAllMembershipProducts();
        res.status(200).json(membershipProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single membership product by ID
export const getMembershipProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const membershipProduct = await MembershipProductServices.getMembershipProductById(id);
        res.status(200).json(membershipProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
