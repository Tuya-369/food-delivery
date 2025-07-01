import { model, Schema } from "mongoose";
enum UserRoleEnum {
  USER =  "USERID",
  ADMIN =  "ADMINID",
}
const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role:{ type: String,required:true,
    enum:Object.values(UserRoleEnum)},
    orderedFoods: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    ttl: { type: Date },
  },

  { timestamps: true }
);
const User = model("User", userSchema);

export default User;
