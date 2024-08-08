const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000 || env.PORT;

// Serve the PDF file
app.get("/ResumeAfwan", (req, res) => {
  const filePath = path.join(__dirname, "../ResumeAfwan.pdf"); // Replace with your PDF file name
  res.sendFile(filePath);
});

// Serve the HTML file to display the PDF
app.get("/", (req, res) => {
  const fileName = path.join(__dirname, "./index.html");
  res.sendfile(fileName);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
