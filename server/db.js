import mongoose, { mongo } from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://adm:adm@adm.arqu1.mongodb.net/Spotfy?retryWrites=true&w=majority&appName=adm")
    return mongoose.connection;
}