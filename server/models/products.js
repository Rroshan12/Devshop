import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    category_id:
    { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
,
title: {type: String,trim:true, required: true },
price: {type: String, required: true },
image: String,
description: {type: String},
count: Number,
createdAt: {
    type: Date,
    required: true,
    default: new Date(),
},
updatedAt: {
    type: Date,
    required: true,
    default: new Date(),
},
category_detail: {
    type: Object,

}





})

var Product = mongoose.model('Product', productSchema);

export default Product;