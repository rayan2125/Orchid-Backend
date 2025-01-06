import * as Yup from "yup";

export const MembersDetailsService = async (mmbrDtls) => {
    const schema = Yup.object().shape({
        application_date: Yup.date().required("Application date is required"),
        login_date: Yup.date().required("Login date is required"),
        member_name: Yup.string().required("Member name is required"),
        member_dob: Yup.date().required("Member DOB is required"),
        // mobile_no: Yup.string()
        //     .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        //     .required("Mobile number is required"),
        // email_id: Yup.string().email("Invalid email address").required("Email is required"),
        member_address: Yup.string().required("Member address is required"),
        state: Yup.string().required("State is required"),
        country: Yup.string().required("Country is required"),
        // coapplicant_name: Yup.string().required("Co-applicant name is required"),
        // coa_dob: Yup.date().required("Co-applicant DOB is required"),
        // coa_mobile: Yup.string()
        //     .matches(/^\d{10}$/, "Co-applicant mobile must be 10 digits")
        //     .required("Co-applicant mobile is required"),
        // coa_email_id: Yup.string()
        //     .email("Invalid co-applicant email address")
        //     .required("Co-applicant email is required"),
        product_name: Yup.string().required("Product name is required"),
        // offer_given: Yup.string().required("Offer details are required"),
        // membership_status: Yup.mixed()
        //     .oneOf(["active", "deactive", "cancelled", "refunded"], "Invalid membership status")
        //     .required("Membership status is required"),
    });

    try {
        const validatedData = await schema.validate(mmbrDtls, { abortEarly: false });
        // Add logic to save data to the database or perform other tasks
        return { success: true, data: validatedData };
    } catch (error) {
        return { success: false, errors: error.errors };
    }
};
