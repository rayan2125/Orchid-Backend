import saveMemberPaymentDetails from "../services/mmberPyDtls.services.js";


export const addPaymentDetails = async (req, res) => {
    try {
        // Call the service with request data
        const result = await saveMemberPaymentDetails(req.body);

        // Check service result and respond
        if (!result.success) {
            return res.status(400).json({
                message: "Failed to save payment details",
                error: result.message,
            });
        }

        // Successful response
        return res.status(201).json({
            message: "Payment details saved successfully",
            data: result.data,
        });
    } catch (error) {
        // Handle unexpected errors
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
