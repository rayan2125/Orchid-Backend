




import MembersDetails from "../models/mmbrDtls.models.js";
import { MembersDetailsService } from "../services/mmbrDtls.services.js";

export const MembersDetailsController = async (req, res) => {
    try {
        const response = await MembersDetailsService(req.body);

        if (!response.success) {
            return res.status(400).json({
                message: "Service validation failed",
                errors: response.errors,
            });
        }

        const saved = await MembersDetails.create(req.body);
        console.log("Saved Member Details:", saved);

        return res.status(200).json({
            message: "Member details processed and saved successfully",
            data: response.data,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
export const ViewMember = async (req, res) => {
    const mmberView = await MembersDetails.findAll()
    res.status(200).send({
        mmberView
    })
}
export const UpdateMember = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the `id` is passed as a URL parameter
        const updateData = req.body; // Data to update should be sent in the request body

        if (!id) {
            return res.status(400).json({
                message: "Member ID is required",
            });
        }
        let member_id = id
        // Perform the update
        const [updatedRowsCount] = await MembersDetails.update(updateData, {
            where: { member_id }, // Match the member by ID
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({
                message: `Member with ID ${id} not found or no changes made`,
            });
        }

        // Fetch the updated member details
        const updatedMember = await MembersDetails.findByPk(id);

        return res.status(200).json({
            message: `Member with ID ${id} updated successfully`,
            data: updatedMember,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


export const DeletMember = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the `id` is passed as a URL parameter

        if (!id) {
            return res.status(400).json({
                message: "Member ID is required",
            });
        }
        let member_id = id
        const deleted = await MembersDetails.destroy({
            where: { member_id }, // Specify the condition to find the member
        });

        if (deleted) {
            return res.status(200).json({
                message: `Member with ID ${id} deleted successfully`,
            });
        } else {
            return res.status(404).json({
                message: `Member with ID ${id} not found`,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


