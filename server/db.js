import mongoose, { mongo } from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://b4rr1gameplay:Pedro2007@spotify.smm0e.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Spotify")
    return mongoose.connection;
}