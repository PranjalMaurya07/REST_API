const User = require('../Models/userSchema');

async function handleGetRequest(req,res){
    const students = await User.find({});
    return res.status(200).json(students);
}

async function handleGetRequestById(req,res){
    const student = await User.findById(req.params.id);
    return res.status(200).json(student);
}

async function handlePostRequest(req,res){
    const body = req.body;
    const result = await User.create({
        name : body.name,
        email : body.email,
        phone : body.phone,
        address :body.address,
    })
    return res.status(201).send('Student details added successfully');
}

async function handlePatchRequest(req,res){
    const updatedStudent = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});
    return res.status(200).send('Student details updated successfully');
}

async function handleDeleteRequest(req,res){
    const student = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send('Student deleted successfully');
}

module.exports = {
    handleGetRequest,
    handleGetRequestById,
    handlePostRequest,
    handlePatchRequest,
    handleDeleteRequest,
}