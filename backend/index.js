const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("back with express my love  for backend");
});

app.get("/home", (req, res) => {
  res.send("back with express my love  love love love for backend");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
