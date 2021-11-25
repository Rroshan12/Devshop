import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/products.js'
import Category from '../models/category.js';

import dotenv from 'dotenv';

dotenv.config();


const router = express.Router();


//get list of product

export const getProducts = async (req, res) => {

    const page = req.query.page;
    const limit = req.query.limit;
    const category_id = req.query.category_id;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    try {
        if (!category_id) {

            if (page && limit) {
                const product = await Product.find();
                res.status(200).json(product.slice(startIndex, endIndex));


            }
            else {
                const product = await Product.find();
                res.status(200).json(product);

            }

        }
        else{
            const inserty = await Category.findById(category_id);
        
            await Product.findOneAndUpdate({category_id:category_id},{category_detail:inserty},{new:true});
            const product = await Product.find();
            res.status(200).json(product.slice(startIndex, endIndex));
        
        }

        await Product.findOneAndUpdate({category_id:category_id},{category_detail:{}},{new:true});







    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//get singel product

export const getProduct = async (req, res) => {
    const { id } = req.params;
    const category_id = req.query.category_id;

    try {
        if(!category_id){
            const product = await Product.findById(id);
            res.status(200).json(product);

        }
        else{
            const inserty = await Category.findById(category_id);
        
            await Product.findOneAndUpdate({category_id:category_id},{category_detail:inserty},{new:true});
            const product = await Product.findById(id);
            res.status(200).json(product);
        
        }

        await Product.findOneAndUpdate({category_id:category_id},{category_detail:{}},{new:true});





    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//create the Product

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product({ ...product, createdAt: new Date().toISOString() });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//update Product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, category_id, description, image, status } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with this id: ${id}`);

    const updateProduct = { title, category_id, description, image, status, _id: id };
    await Product.findByIdAndUpdate(id, updateProduct, { new: true });

    res.json(updateProduct);

}

//delete Product

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with this id: ${id}`);
    await Product.findByIdAndRemove(id);
    res.json({ message: "Product deleted successfully." });

}

