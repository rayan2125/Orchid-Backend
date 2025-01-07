import MembershipProduct from "../models/mmbrPrdt.models.js";


class MembershipProductServices {
    // Create a new membership product
    static async createMembershipProduct(data) {
        try {
            const membershipProduct = await MembershipProduct.create(data);
            return membershipProduct;
        } catch (error) {
            throw new Error(`Error creating membership product: ${error.message}`);
        }
    }

    // Get all membership products
    static async getAllMembershipProducts() {
        try {
            const membershipProducts = await MembershipProduct.findAll();
            return membershipProducts;
        } catch (error) {
            throw new Error(`Error fetching membership products: ${error.message}`);
        }
    }

    // Get a membership product by ID
    static async getMembershipProductById(mpId) {
        try {
            const membershipProduct = await MembershipProduct.findByPk(mpId);
            if (!membershipProduct) {
                throw new Error("Membership product not found");
            }
            return membershipProduct;
        } catch (error) {
            throw new Error(`Error fetching membership product: ${error.message}`);
        }
    }

    // Update a membership product by ID
    static async updateMembershipProduct(mpId, data) {
        try {
            const membershipProduct = await MembershipProduct.findByPk(mpId);
            if (!membershipProduct) {
                throw new Error("Membership product not found");
            }
            await membershipProduct.update(data);
            return membershipProduct;
        } catch (error) {
            throw new Error(`Error updating membership product: ${error.message}`);
        }
    }

    // Delete a membership product by ID
    static async deleteMembershipProduct(mpId) {
        try {
            const membershipProduct = await MembershipProduct.findByPk(mpId);
            if (!membershipProduct) {
                throw new Error("Membership product not found");
            }
            await membershipProduct.destroy();
            return { message: "Membership product deleted successfully" };
        } catch (error) {
            throw new Error(`Error deleting membership product: ${error.message}`);
        }
    }
}

export default MembershipProductServices;
