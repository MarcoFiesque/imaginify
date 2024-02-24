import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    userName: string;
    photo?: string;
    firstName: number;
    lastName: number;
    planId?: number;
    creditBalance?: number;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema(
    {
        clerkId: { type: String, required: true, unique: true, },
        email: { type: String, required: true, unique: true, },
        userName: { type: String, required: true, unique: true, },
        photo: { type: String, required: false },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        planId: { type: Number, required: false, default: 1, },
        creditBalance: { type: Number, required: false, default: 10, },
    },
    { timestamps: true }
);

const User = models?.Image || model<IUser>('User', UserSchema);

export default User;