/* eslint-disable no-undef */
import mongoose from "mongoose";

mongoose.connect(process.env.STRING_MONGODB);

let data_base = mongoose.connection;

export default data_base;