

const requestBus = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>`);
        res.write(`<head><title>Enter Username</title></head>`);
        res.write(`<body>
                    <h1>Hello there!</h1>
                    <form action="/create-user" method="POST"><label for="username">Username </label><input type="text" name="username" id="name"></input> <button type="submit">Submit</button></form>
                </body>`);
        res.write(`</html>`);
        return res.end();
    }
    if (url === '/users') {
        res.write(`<html>
                    <head><title>List of Users</title></head>
                    <body>
                        <ul id="list">
                            <li>Joe</li>
                            <li>Havica</li>
                            <li>Supero</li>
                            <li>Awecool</li>
                        </ul>
                        <script>let listItem = 
                        <script>document.getElementById("list").appendChild;</script>
                    </body>
                </html>`);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (info) => {
            console.log(info);
            body.push(info);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=') [1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        res.end();
    }
}

exports.handler = requestBus;