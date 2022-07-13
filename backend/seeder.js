import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import connectDBHandler from "./config/db.js";

dotenv.config();

connectDBHandler();

const importDataHandler = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);
    await Product.insertMany(products);

    console.log("Data Imported to DB!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const removeDataHandler = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-delete") {
  removeDataHandler();
} else {
  importDataHandler();
}
