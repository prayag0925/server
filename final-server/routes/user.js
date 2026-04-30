
const userRoute = (res, query) => {


    res.writeHead(200, { "Content-Type": "text/html" });


    const name = query.name ? query.name : "Guest";



    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>User Page</title>
      <style>
        body {
          background-color: lavender;
          text-align: center;
        }
        h1 {
          color: black;
          font-size: 60px;
        }
      </style>
    </head>
    <body>
      <h1>Hello, ${name}!</h1>
    </body>
    </html>
  `);

};


module.exports = userRoute;