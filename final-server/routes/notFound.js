
function notFoundRoute(res) {

    res.writeHead(404, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Page</title>
            <style>
                body {
                    background-color: skyblue;
                }
                h1 {
                    color: black;
                    text-align: center;
                    font-size: 85px;
                }
            </style>
        </head>
        <body>
            <h1>404 Not Found</h1>
        </body>
        </html>
    `)

}

module.exports = notFoundRoute