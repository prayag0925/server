function aboutRoute(res) {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Page</title>
            <style>
                body {
                    background-color: purple;
                }
                h1 {
                    color: black;
                    text-align: center;
                    font-size: 85px;
                }
            </style>
        </head>
        <body>
            <h1>About Page</h1>
        </body>
        </html>
    `)

}

module.exports = aboutRoute