/* eslint-disable no-undef */
const userModel = require('../Models/user.models');
const bcrypt = require('bcrypt');

const userUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const { currentPassword, newPassword, ...otherFields } = req.body;

        // Find the user in the database
        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password change is attempted
        if (currentPassword || newPassword) {
            // Both current and new password must be provided
            if (!currentPassword || !newPassword) {
                return res.status(400).json({ 
                    message: 'Both current and new password are required for password change' 
                });
            }

            // Verify current password
            const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Current password is incorrect' });
            }

            // Hash the new password
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);

            // Update password
            otherFields.password = hashedNewPassword;
        }

        // Update the user
        const updatedUser = await userModel.findByIdAndUpdate(
            id, 
            { $set: otherFields }, // Ensure we are updating only the fields passed
            { 
                new: true,  // Return the updated document
                select: '-password' // Exclude password from returned document
            }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);

    } catch (error) {
        console.error('User update error:', error);
        res.status(500).json({ 
            message: 'An error occurred while updating user', 
            error: error.message 
        });
    }
};

const getUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const  user = await userModel.findById(id);
        if(!user){
            res.status(404).send('user not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json(error.errmsg);
    }
}

module.exports = {userUpdate,getUser};