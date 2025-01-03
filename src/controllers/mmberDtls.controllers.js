
import { MembersDetailsService } from "../services/mmbrDtls.services.js";


export const MembersDetailsController = async (req, res) => {
    try {
        const response = await MembersDetailsService(req.body);

        if (response.success) {
            return res.status(200).json({
                message: "Member details processed successfully",
                data: response.data,
            });
        } else {
            return res.status(400).json({
                message: "Validation failed",
                errors: response.errors,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
