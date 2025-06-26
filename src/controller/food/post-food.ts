import { Request, Response } from "express";
import Food from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { categoryName, foodName, price, ingredients, category, image } =
    req.body;
  try {
    const food = await new Food({
      categoryName: categoryName,
      foodName: foodName,
      price: price,
      category: category,
      image: image,
      ingredients: ingredients,
    }).save();

    res.status(200).send({ success: true, food });
  } catch (error) {
    console.log(error);

    res.status(400).send({ message: "API error", error });
  }
};
