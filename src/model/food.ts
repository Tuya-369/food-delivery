import { model, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    foodName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
  },

  { timestamps: true }
);
const Food = model("Food", foodSchema);

export default Food;
