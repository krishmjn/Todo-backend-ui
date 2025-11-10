import "module-alias/register.js";
import app from "./app.js";
import { ConnectDb } from "./config.js";
import dotenv from "dotenv";
dotenv.config();
ConnectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
