const express = require ('express');
const fs = require ('fs');
const path = require ('path');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running",PORT);
});

const outputFolder="./output";

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}
 app.get('/createFile', (req, res) => {
    const currentTime =new Date();
    const year =currentTime.getFullYear().toString();
    const month =(currentTime.getMonth()+1).toString();
    const date = currentTime.getDate().toString();
    const hours =currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const sec = currentTime.getSeconds().toString();
    
    const dateTimeForFileName =`${year}-${month}-${date}-${hours}-${mins}-${sec}.txt`;

    const filePath = path.join(outputFolder, dateTimeForFileName);

    fs.writeFile(filePath, currentTime.toISOString(),(err) => {
        if(err) {
            res.status(500).send(`Error creating filw: ${err}`);
            return;
        }
        res.send(`File created sucessfully at: ${filePath}`)
    });
});

app.get("/getFiles", (req, res) => {
  fs.readdir(outputFolder, (err, files) => {
    if (err) {
      res.status(500).send(`Error reading directory: ${err}`);
      return;
    }
    console.log("files", files);
    const textFiles = files.filter((file) => path.extname(file) === ".txt");

    res.json(textFiles);
  });
});