import { Schema, model, models } from "mongoose";
// import { IUser } from "./user.model";

interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: String;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    // author: IUser;
    author: {
        _id: String,
        firstName: String,
        lastName: String,
    };
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema(
    {
        title: { type: String, required: true },
        transformationType: { type: String, required: true },
        publicId: { type: String, required: true },
        secureUrl: { type: String, required: true },
        width: { type: Number, required: false },
        height: { type: Number, required: false },
        config: { type: Object, required: false },
        transformationUrl: { type: String, required: false },
        aspectRatio: { type: String, required: false },
        color: { type: String, required: false },
        prompt: { type: String, required: false },
        author: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

const Image = models?.Image || model<IImage>('Image', ImageSchema);

export default Image;