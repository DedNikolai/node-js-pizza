import {body} from 'express-validator';

export const pizzaCreateValidation = [
    body('title', 'Invalid title').isLength({min: 5}).isString(),
    body('description', 'Invalid description').isLength({min: 10}).isString(),
    body('price', 'Invalid price').isNumeric(),
    body('weight', 'Invalid price').isNumeric(),
    body('types', 'Invalid title').isLength({min: 5}).isString(),
];