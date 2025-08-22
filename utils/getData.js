import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  try {
    const pathJSON = path.join("data", "data.json");
    const data = await fs.readFile(pathJSON, "utf8");
    const parsedData = JSON.parse(data);
    // console.log(`This is ${data} and its type is ${typeof data}`);
    // console.log(`This is ${parsedData} and its type is ${typeof parsedData}`);
    return parsedData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/** Q.
 * @server.js @utils/getData.js look at my return value of `data` in getData.js file. it isn't parsed yet, but when it gets printed out in server.js, it logs string represented output. so my question is, why do i need `parsedData`?
 *
 * A. You've spotted an excellent point.

  In the current code, you are correct: parsedData is created and then ignored, because the function proceeds to return the original, un-parsed data string.

  The console.log in server.js prints that string, which looks like the data, but it's just text.

  You need parsedData if you want to actually work with the data as a JavaScript object. For example, if your data.json contained {"name": "John"}, you would need to parse it to access the name like this:

   1 const myData = await getData(); // Assuming it returns the parsed object
   2 console.log(myData.name); // This would fail if myData is just a string

  So, the variable parsedData is necessary for using the data, but the function is currently bugged because it returns the raw string instead of the parsed object.
 */
