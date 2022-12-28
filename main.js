const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
  <h1>what color the sky on a clear day</h1>
  <form action="/result" method="POST">
  <input type="text" name="color">
  <button type="submit">Submit Answer</button>
  </form>
  `);
});

app.get("/about", (req, res) => {
  res.send("welcome to aboutus page");
});

app.post("/result", (req, res) => {
  if (req.body.color.trim().toLowerCase() === "blue") {
    res.send("Answwr is Correct");
  } else {
    res.send("Answwr is InCorrect");
  }
  res.send("Value is.....?");
});

app.listen(3000);
