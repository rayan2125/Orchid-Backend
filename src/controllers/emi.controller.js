import EmiDetails from "../models/emiDtls.models.js";
import EmiServices from "../services/emi.services.js"


export const  CreateEmi = async(req,res)=>{

    try {
        const response = await EmiServices(req.body)
        if (!response.success) {
            return res.status(400).json({
                message: "Service validation failed",
                errors: response.errors,
            });
        }
        const saved = await EmiDetails.create(req.body);
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
}