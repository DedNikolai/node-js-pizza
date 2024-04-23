import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import {PizzaController} from './controllers/index.js';
import {handleValidationErrors} from './utils/index.js';
import { pizzaCreateValidation } from "./validations/validation.js";

const app = express();

mongoose.connect(process.env.DB_URL)
.then(() => console.log("DB OK"))
.catch((error) => console.log('DB error', error));

app.use(express.json());
app.use(cors());

app.get('/', (__, response) => {
    response.status(200).send('Hello Pizza App');
});
app.post('/pizzas', pizzaCreateValidation, handleValidationErrors, PizzaController.create);
app.get('/pizzas', PizzaController.getPizzas)

app.listen(process.env.PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Server OK');
})