import { Request, Response } from "express";
import Food from "../../model/food";


export const getFood = async (req: Request, res: Response) => {
  const foodWithCategories = await Food.aggregate([
  {
    $lookup: {
      from: "foodcategories",
      localField: "category",
      foreignField: "_id",
      as: "categoryDetails"
    }
  },
  {
    $unwind: "$categoryDetails"
  },
  {
    $group: {
      _id: "$categoryDetails._id",
      categoryName: {
        $first: "$categoryDetails.categoryName"
      },
      foods: {
        $push: {
          _id: "$_id",
          foodName: "$foodName",
          price: "$price",
          image: "$image",
          ingredients: "$ingredients"
        }
      },
      count: {
        $sum: 1
      }
    }
  }
])
  try {
    const foods = await Food.find().populate("category");

    res.status(200).send({ success: true, foodWithCategories });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
