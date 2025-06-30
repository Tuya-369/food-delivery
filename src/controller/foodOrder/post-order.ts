import { Request, Response } from "express";
import foodOrder from "../../model/foodOrder";

export const createOrder = async (req: Request, res: Response) => {
  const { foodId,user, totalPrice,foodOrderItems,status,quantity ,price} = req.body;

  try {
    const order = await new foodOrder({
      user,
      foodOrderItems:foodOrderItems,
     quantity:quantity,
     food:foodId,
      totalPrice:totalPrice,
      status:status,
      price:price
    }).save();
    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
