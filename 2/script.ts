import * as fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);

(async () => {
  const data = await readFile("input.txt");
  const cleanedData = data.toString("utf-8").split("\n");
  // console.log(cleanedData);

  const correctPasswords = cleanedData
    .map((v: string) => {
      const [_, minStr, maxStr, letter, password] = v.match(
        /^(\d+)-(\d+) (\w{1}): (\w*)$/
      );

      console.log(password);

      const min = parseInt(minStr);
      const max = parseInt(maxStr);

      let letterAmount = 0;
      for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) letterAmount++;
      }
      console.log(letterAmount);
      return letterAmount >= min && letterAmount <= max ? password : null;
    })
    .filter((v) => v !== null);

  console.log("ans: ", correctPasswords.length);
  process.exit(0);
})();
