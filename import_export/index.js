import http from 'http';
import sum from './sum.js';

console.log(sum(4 , 4))

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        // Assuming you have defined values for a and b
        const a = 5; // for example
        const b = 3; // for example
        res.end(`The sum is: ${sum(a, b)}`);
    } else if (req.url === "/contact") {
        res.end("This is the contact page");
    } else {
        res.end("Page not found");
    }
});

server.listen(8080, () => {
    console.log("The server is running on port 8080");
});
