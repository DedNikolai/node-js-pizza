import PizzaModel from '../models/Pizza.js';

export const create = async (request, response) => {
    const {...pizza} = request.body;

    try {
        const data = new PizzaModel({...pizza});
        const newPizza = await data.save();
        response.status(200).json(newPizza)
    } catch (error) {
        console.log(error);
        response.status(500).json({message: 'Pizza wasn\'t created'})
    }
};

export const getPizzas = async (request, response) => {
    try {
        const data = await PizzaModel.find({});
        console.log(data)
        response.status(200).json(data)

    } catch (error) {
        console.log(error);
        response.status(500).json({message: 'Pizzas can\'t get'})
    }
}