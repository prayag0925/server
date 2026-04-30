
const http = require("http");
const url = require("url");


const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const contactRoute = require("./routes/contact");
const notFoundRoute = require("./routes/notFound");
const userRoute = require("./routes/user");


const PORT = 3000;


const server = http.createServer((req, res) => {


  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/") {
    homeRoute(res);
  } else if (pathname === "/about") {
    aboutRoute(res);
  } else if (pathname === "/contact") {
    contactRoute(res);
  } else if (pathname === "/user") {
    userRoute(res, query);
  } else {
    notFoundRoute(res);
  }

});


server.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
