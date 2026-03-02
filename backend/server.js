const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;

  if (operation === "add") result = num1 + num2;
  if (operation === "subtract") result = num1 - num2;
  if (operation === "multiply") result = num1 * num2;
  if (operation === "divide") result = num1 / num2;

  res.json({ result });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});