const EmiServices = async (emiDetails) => {
    const errors = [];

    // Validate required fields
    if (!emiDetails.mp_id) {
        errors.push({ field: "mp_id", message: "mp_id is required" });
    }
    if (!emiDetails.membership_id) {
        errors.push({ field: "membership_id", message: "membership_id is required" });
    }
    if (!emiDetails.emi_amount || emiDetails.emi_amount <= 0) {
        errors.push({ field: "emi_amount", message: "emi_amount must be a positive number" });
    }
    if (!emiDetails.emi_tenure || emiDetails.emi_tenure <= 0) {
        errors.push({ field: "emi_tenure", message: "emi_tenure must be a positive number" });
    }
    if (!emiDetails.emi_start_date) {
        errors.push({ field: "emi_start_date", message: "emi_start_date is required" });
    }
    if (!emiDetails.emi_end_date) {
        errors.push({ field: "emi_end_date", message: "emi_end_date is required" });
    }
    if (!emiDetails.emi_mode) {
        errors.push({ field: "emi_mode", message: "emi_mode is required" });
    }
    if (!emiDetails.cheque_cc_number_from_to) {
        errors.push({ field: "cheque_cc_number_from_to", message: "cheque_cc_number_from_to is required" });
    }
    if (!emiDetails.expiry_date) {
        errors.push({ field: "expiry_date", message: "expiry_date is required" });
    }

    // Validate date range (emi_end_date should be after emi_start_date)
    if (emiDetails.emi_start_date && emiDetails.emi_end_date) {
        const startDate = new Date(emiDetails.emi_start_date);
        const endDate = new Date(emiDetails.emi_end_date);
        if (endDate <= startDate) {
            errors.push({
                field: "emi_end_date",
                message: "emi_end_date must be after emi_start_date",
            });
        }
    }

    // Return validation errors if any
    if (errors.length > 0) {
        return {
            success: false,
            errors,
        };
    }

    // If validation passes, return success
    return {
        success: true,
        data: emiDetails,
    };
};

export default EmiServices;
