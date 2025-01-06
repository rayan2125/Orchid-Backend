import MemberPaymentDetails from "../models/mmberPyDtls.models.js";


const saveMemberPaymentDetails = async (paymentData) => {
    try {
        // Destructure input data
        const {
            mp_id,
            membership_id,
            product_id,
            payment_mode,
            payment_status,
            payment_type,
            amount,
            cheque_date,
            cheque_number,
            swipe_date,
            card_number_4digit,
            authorization_number,
            payment_date,
            receipt_number,
            reference_number,
            asf_applicable,
            asf_remarks,
            asf_year,
            referral_benefit,
        } = paymentData;

        // Perform validation
        if (!mp_id || !membership_id || !product_id || !payment_mode || !payment_status || !payment_type || !amount) {
            throw new Error("Required fields are missing.");
        }

        // Check for valid date formats
        const isValidDate = (date) => !isNaN(Date.parse(date));
        if (!isValidDate(cheque_date) || !isValidDate(swipe_date) || !isValidDate(payment_date)) {
            throw new Error("Invalid date format.");
        }

        // Insert data into the database
        const savedPaymentDetails = await MemberPaymentDetails.create({
            mp_id,
            membership_id,
            product_id,
            payment_mode,
            payment_status,
            payment_type,
            amount,
            cheque_date,
            cheque_number,
            swipe_date,
            card_number_4digit,
            authorization_number,
            payment_date,
            receipt_number,
            reference_number,
            asf_applicable,
            asf_remarks,
            asf_year,
            referral_benefit,
        });

        // Return saved record
        return {
            success: true,
            data: savedPaymentDetails,
        };
    } catch (error) {
        // Handle errors
        return {
            success: false,
            message: error.message,
        };
    }
};

export default saveMemberPaymentDetails;
