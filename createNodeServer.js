const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("This is the about page");
    } else if (req.url === "/contact") {
        res.end("This is the contact page");
    } else {
        res.end("Page not found");
    }
});

server.listen(8080, () => {
    console.log("The server is running on port 8080");
});
