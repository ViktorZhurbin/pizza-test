import mongoose from 'mongoose';

import { productSchema } from '../models';

export const schemas = {
    Product: productSchema,
};

const createModels = () => {
    try {
        const modelNames = mongoose.modelNames();

        Object.entries(schemas).forEach(([name, schema]) => {
            if (!modelNames.includes(name)) {
                mongoose.model(name, schema);
            }
        });
        console.log('Models are good now');
    } catch (error) {
        console.error('Error creating models', error);
    }
};

export const dbConnect = async (): Promise<void> => {
    const disconnected = mongoose.connection['_readyState'] === 0;
    if (disconnected) {
        try {
            await mongoose.connect(process.env.DATABASE_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });
        } catch (error) {
            console.error('dbConnect error: ', error);
        }
    }

    mongoose.connection.on(
        'error',
        console.error.bind(console, 'MongoDB connection error:')
    );

    mongoose.connection.once('connected', () =>
        console.log('Connected to MongoDB')
    );
};

export const initDb = async (): Promise<void> => {
    createModels();
    await dbConnect();
};
