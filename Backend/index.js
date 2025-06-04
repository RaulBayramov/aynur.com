import http from "http";
import fs from "fs";
import { getFilePath } from "./modules/getFIlePath.js";
import { errorHandler } from "./modules/errorHandling.js";
import getContentType from "./modules/getContentType.js";
const server = http.createServer((req, res) => {
  let filePath = getFilePath(req.url);
  if (filePath === null) {
    errorHandler(res, 404);
    return;
  }
  const contentType = getContentType(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      errorHandler(res, 500);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
