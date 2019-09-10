import mongoose from 'mongoose'

const Bill = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	cep: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	status:{
		type:Boolean,
		default:false
	},
	date: {
		type: Date,
		default: Date.now 
	}
})

export default mongoose.model('Bill', Bill)