const applyModel = require('../Models/apply.model');

const newApplication = async (req,res)=>{
        const { fullName, email,phone,coverLetters } = req.body;
        const CV = req.files['cv'][0]
        if(!fullName)
        {
            return res.send("Please provide the full Name!").status(400);
        }
        if(!email)
        {
            return res.send("Please provide the E-mail!").status(400);
        }
        if(!coverLetters)
        {
            return res.send("Please provide the coverLetters!").status(400);
        }
        if(!phone){
            return res.send("Please provide the phone!").status(400);
        }
        if(!CV){
            return res.send("Please provide the CV!").status(400);
        }
        const application = await applyModel.create(req.body);
        application.cv = CV.buffer;
        await application.save();
        res.send({msg:'Application Completed',application}).status(201);
}

const ApplicationUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const new_cv = req.files['cv'][0];
        const { fullName, email,phone,coverLetters } = req.body;
        
        if(!fullName)
        {
            return res.send("Please provide the full Name!").status(400);
        }
        if(!email)
        {
            return res.send("Please provide the E-mail!").status(400);
        }
        if(!coverLetters)
        {
            return res.send("Please provide the coverLetters!").status(400);
        }
        if(!phone){
            return res.send("Please provide the phone!").status(400);
        }
        if(!CV){
            return res.send("Please provide the CV!").status(400);
        }
       
        const applicationData = await applyModel.findById(id);
        if(!applicationData){
            return res.send("No Application exists!").status(400);
        }
       
        // Update the Application
        const updatedApplication = await applyModel.findByIdAndUpdate(
            id,
            { 
                $set: { 
                    ...otherFields,
                    cv: CV.buffer,
                }
            },
            { 
                new: true, // Return the updated document
                select: '-password' // Exclude password from returned document
            }
        );

        res.status(200).json(updatedApplication);

    } catch (error) {
        console.error('Application update error:', error);
        res.status(500).json({ 
            message: 'An error occurred while updating Application', 
            error: error.message 
        });
    }
};



module.exports = {newApplication , ApplicationUpdate};


