const resp = await fetch("https://dl.deno.land/canary/19e4e821d582b625797b8a17737dfa823a6aca21/deno-x86_64-apple-darwin.zip");
 
let i = 0;
let total = 0;
for await (const chunk of resp.body) {
  const len = chunk.byteLength;
  console.log(i, `${len}バイト、データ取得`);
  total += len;
  i++;
}
console.log(`合計${total}バイト`);
