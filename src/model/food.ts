import { model, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    categoryName: { type: String, require: true },
    foodName: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String },
    ingredients: { type: String, require: true },
  },

  { timestamps: true }
);
const Food = model("Food", foodSchema);

export default Food;
