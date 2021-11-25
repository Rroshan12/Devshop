import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    category_id:
        {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
      ,
  title: String,
  image: String,
  descrpition: String,
  status: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
},
updatedAt: {
    type: Date,
    default: new Date(),
},
category_detail:{
    type :Object,

}
   






})

var Product = mongoose.model('Product', productSchema);

export default Product;