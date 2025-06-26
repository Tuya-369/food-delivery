import { model, Schema } from "mongoose";

const foodOrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalPrice: { type: String, required: true },

    //   foodOrderItems : {}
    // status:{}
  },
  { timestamps: true }
);
const foodOrder = model("FoodOrder", foodOrderSchema);
export default foodOrder;
