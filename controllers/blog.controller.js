const blogModel = require("../model/blog.model")

const createBlog = async (req, res)=>{
    try{
        const body = req.body
        const blogObj = new blogModel({
            title: body.title,
            details: body.details
        })
        const result = await blogObj.save()
        if(result){
            res.status(201).json({
                success: true,
                message: "Blog Created Successfully.."
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog creation"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const getBlogs = async (req, res)=>{
    try{
        const result = await blogModel.find()
        if(result){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog get"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const getBlogById = async (req, res)=>{
    try{
        const result = await blogModel.findById(req.params.id)
        if(result){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog getBlogById"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const updateBlog = async (req, res)=>{
    try{
        const result = await blogModel.findByIdAndUpdate(req.params.id, req.body)
        if(result){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog updateBlog"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const deleteBlog = async (req, res)=>{
    try{
        const result = await blogModel.findByIdAndDelete(req.params.id)
        if(result){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog updateBlog"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

const deleteAll = async (req, res)=>{
    try{
        const result = await blogModel.deleteMany()
        if(result){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Error in blog updateBlog"
            })
        }

    }catch(error){
        res.status(503).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    deleteAll
}