const {v4: uuidv4} = require("uuid");
const dbFile = require("../db/db");
const fs = require("fs");

module.exports=function(app){

let noteId = uuidv4();

console.log("Note ID: "+noteId);

app.post("/api/notes", function(req, res) {
    console.log(req.body)
    let newNote = {title: req.body.title, text: req.body.text, id: uuidv4()};
    dbFile.push(newNote);
    fs.writeFileSync("db/db.json",JSON.stringify(dbFile),"utf-8");
      res.json(dbFile);
});

app.get("/api/notes",function(req,res){
    var noteData = fs.readFileSync("db/db.json", "utf-8");
    var temp = JSON.parse(noteData);
    res.json(temp);
});

app.delete("/api/notes/:id", (req, res) => {
    console.log("WORK!");
    var noteData = fs.readFileSync("db/db.json","utf-8");
    var temp = JSON.parse(noteData);
    let newData=temp.filter((note) =>{ return note.id !==req.params.id})    
    fs.writeFileSync("db/db.json", JSON.stringify(newData));

    res.end()
  });

}

