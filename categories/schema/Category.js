import mongoose from 'mongoose'

const Category = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
})

export default mongoose.model('Category', Category)