const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    details: String,
    isPublished: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
}
)

module.exports = mongoose.model('blog', blogSchema)