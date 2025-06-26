import { Request, Response } from "express";
import FoodCategory from "../../model/foodCategory";

export const getDeletedCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedCategory = await FoodCategory.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: `${deletedCategory?.categoryName} deleted successfully`,
      deletedCategory,
    });
  } catch (error) {
    res.status(400).send({ message: "API error", error });
  }
};
