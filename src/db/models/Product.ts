import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: String,
});

export const ProductModel =
    mongoose.models?.Product || mongoose.model('Product', productSchema);
