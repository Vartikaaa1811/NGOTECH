const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/mongo");
const cookieParser = require("cookie-parser");
// const router = require("./routes/authRoute");

dotenv.config();
connectDB();


const app = express();
app.use(cors());
//middleware
app.use(express.json());
app.use(cookieParser());




app.get("/", (req, res) => {
  res.send("back with express my love  for backend");
});

app.use("/api/auth", require("./routes/authroute"));




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});


















