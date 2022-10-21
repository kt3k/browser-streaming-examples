import { CsvStream } from "https://deno.land/std@0.160.0/encoding/csv/stream.ts";

const file = await Deno.open("csv.txt");
const stream = file.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new CsvStream())

for await (const line of stream) {
  console.log(line);
}
