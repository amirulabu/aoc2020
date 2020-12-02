import * as fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);

(async () => {
  const data = await readFile("input.txt");
  const cleanedData = data.toString("utf-8").split("\n");
  console.log(cleanedData);

  let flag: boolean = false;

  for (let i = 0; i < cleanedData.length; i++) {
    if (flag) break;
    const a: number = parseInt(cleanedData[i]);
    for (let j = 0; j < cleanedData.length; j++) {
      const b: number = parseInt(cleanedData[j]);
      if (a + b === 2020) {
        console.log(a, b);
        console.log("ans: ", (a * b).toString());
        flag = true;
      }
      if (flag) break;
    }
  }
  process.exit(0);
})();
