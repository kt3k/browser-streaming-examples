const http = require("http");

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
const WAIT = 100;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<p>hello</p>\n");
  await delay(WAIT);
  res.write("<h1>end</h1>");
  res.end();
});

server.listen(3000);

