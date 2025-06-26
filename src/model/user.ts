import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    // role:{ Type: UserRoleEnum,required:true},
    orderedFoods: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    ttl: { type: Date },
    // isVerified: { type: Boolean },
  },

  { timestamps: true }
);
const User = model("User", userSchema);

export default User;
