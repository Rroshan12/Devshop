import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({

    title: { type: String, trim: true, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },





})

var Category = mongoose.model('Category', categorySchema);

export default Category;