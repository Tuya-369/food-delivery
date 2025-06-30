import { model, Schema } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING ="PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED"
}
const foodOrderItem = new Schema({
  food:{type:Schema.ObjectId,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true}
})
const foodOrderSchema = new Schema({
  // foodName: { type: String, required:true},
  user: {
    type: Schema.Types.ObjectId,
    required :true,
    ref: "User",
  },
  totalPrice: { type: String, required: true },
  foodOrderItems: { type:[foodOrderItem]  },
  status:{type:String,required :true, default:FoodOrderStatusEnum.PENDING,
    enum:Object.values(FoodOrderStatusEnum)
  },
},
{ timestamps: true }
);
const foodOrder = model("FoodOrder", foodOrderSchema);
export default foodOrder;
