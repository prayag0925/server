const http = require("http");
const url = require("url");

const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const contactRoute = require("./routes/contact");
const notFoundRoute = require("./routes/notFound");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;

  if (pathname === "/") homeRoute(res);
  else if (pathname === "/about") aboutRoute(res);
  else if (pathname === "/contact") contactRoute(res);
  else notFoundRoute(res);
});

server.listen(3000, () => {
  console.log(`✅ Server running at http://localhost:3000`);
});
