const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/") {
    filePath = path.join(__dirname, "../HTML/index.html");
  } else if (req.url === "/styles/variables.css") {
    filePath = path.join(__dirname, "../styles/variables.css");
  } else if (req.url === "/styles/index.css") {
    filePath = path.join(__dirname, "../styles/index.css");
  } else if (req.url === "/styles/general_styles.css") {
    filePath = path.join(__dirname, "../styles/general_styles.css");
  } else if (req.url === "/styles/hero.css") {
    filePath = path.join(__dirname, "../styles/hero.css");
  } else if (req.url === "/javascript/header.js") {
    filePath = path.join(__dirname, "../javascript/header.js");
  } else if (req.url === "/images/logo.png") {
    filePath = path.join(__dirname, "../images/logo.png");
  } else if (req.url === "/images/hero/2681.jpeg") {
    filePath = path.join(__dirname, "../images/hero/2681.jpeg");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - not found");
    return;
  }
  const ext = path.extname(filePath);
  const contentTypeMap = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".json": "application/json",
  };
  const contentType = contentTypeMap[ext] || "text/plain";
  // console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Sunucu hatası");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
