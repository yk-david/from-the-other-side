import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost, handleNews } from "./handlers/routeHandlers.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return await handleGet(res);
    } else if (req.method === "POST") {
      handlePost(req, res);
    }
  } else if (req.url === "/api/news") {
    return await handleNews(req, res);
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, console.log(`Server is running on port: ${PORT}`));
