const userRegistration = async (userInfoData) => {
    // Destructure the fields from userInfoData
    let { name, email, phone } = userInfoData;
    
    // Check if all required fields are present
    if (!name) {
        throw new Error('Name is required');
    }
    if (!email) {
        throw new Error('Email is required');
    }
    if (!phone) {
        throw new Error('Phone number is required');
    }

    // If all validations pass, create the userInfo object
    const userInfo = {
        name: name,
        email: email,
        phone: phone
    };

    return userInfo;
}

export default userRegistration;
