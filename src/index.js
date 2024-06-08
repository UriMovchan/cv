const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Компіляція SCSS до CSS
exec("node-sass src/assets/stylesheet/style.scss -o src/assets/stylesheet");

app.use(express.static(path.join(__dirname, "assets")));
app.use("/pdf", require("./pdf"));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
