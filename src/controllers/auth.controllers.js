import userRegistration from "../services/auth.services.js"

const createUser = async (req, res) => {
    try {
        const userInfoData = req.body;  


        const userInfo = await userRegistration(userInfoData);  


        res.status(200).json(userInfo);  // Send the successfully created user info
    } catch (error) {
        // If there is an error (e.g., validation error), send a 400 status with the error message
        res.status(400).json({ error: error.message });
    }
}

export default createUser;
