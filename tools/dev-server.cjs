const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.argv[2] || process.env.PORT || 5500);
const host = "127.0.0.1";
const publicDir = path.resolve(__dirname, "..", "public");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".manifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function sendFile(response, filePath, statusCode = 200) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("No se pudo cargar el archivo solicitado.");
      return;
    }

    response.writeHead(statusCode, { "Content-Type": contentType });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  const rawPath = request.url ? request.url.split("?")[0] : "/";
  const safePath = path.normalize(decodeURIComponent(rawPath)).replace(/^(\.\.[/\\])+/, "");
  let filePath = path.join(publicDir, safePath);

  if (safePath === "/" || safePath === ".") {
    filePath = path.join(publicDir, "index.html");
  }

  if (!filePath.startsWith(publicDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Acceso denegado.");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isDirectory()) {
      sendFile(response, path.join(filePath, "index.html"));
      return;
    }

    if (!error && stats.isFile()) {
      sendFile(response, filePath);
      return;
    }

    sendFile(response, path.join(publicDir, "404.html"), 404);
  });
});

server.listen(port, host, () => {
  console.log(`Starting dev server for ${publicDir}`);
  console.log(`Server running at http://${host}:${port}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} ya está en uso.`);
  } else {
    console.error("No se pudo iniciar el servidor:", error.message);
  }
  process.exit(1);
});
