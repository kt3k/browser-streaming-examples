const http = require("http");

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
const rand = (x, y) => Math.random() * (y - x) + x;
const WAIT = 100;

const server = http.createServer(async (req, res) => {
  let hue = rand(0, 360);
  res.setHeader("Content-Type", "text/html")
  res.write(style);
  for (const x of Array(30)) {
    const diff = rand(60, 120);
    hue += Math.random() < 0.5 ? diff : -diff;
    res.write(`<div style="background-color: hsl(${hue} ${rand(90, 100)}% 50%)">&nbsp;</div>\n`);
    await delay(WAIT);
  }
  res.write("<h1>end</h1>");
  res.end();
});

const style = `
<style>
body { margin: 0; }

div { height: 35px; }
</style>
`

server.listen(3000);

