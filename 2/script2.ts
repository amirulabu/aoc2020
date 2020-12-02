import * as fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);

(async () => {
  const data = await readFile("input.txt");
  const cleanedData = data.toString("utf-8").split("\n");
  // console.log(cleanedData);

  const correctPasswords = cleanedData
    .map((v: string) => {
      const [_, pos1Str, pos2Str, letter, password] = v.match(
        /^(\d+)-(\d+) (\w{1}): (\w*)$/
      );

      const pos1 = parseInt(pos1Str) - 1;
      const pos2 = parseInt(pos2Str) - 1;
      let pass: boolean;
      if (
        password.charAt(pos1) === letter &&
        password.charAt(pos2) === letter
      ) {
        pass = false;
      } else if (
        password.charAt(pos1) === letter ||
        password.charAt(pos2) === letter
      ) {
        pass = true;
      } else {
        pass = false;
      }

      return pass ? password : null;
    })
    .filter((v) => v !== null);

  console.log("ans: ", correctPasswords.length);
  process.exit(0);
})();
