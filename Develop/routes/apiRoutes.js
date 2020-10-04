const {v4:uuidv4} = require("uuid");
const dbFile = require("../db/db");
const fs = require("fs");



module.exports=function(app){
    let noteID =uuidv4()

console.log("Note ID: "+noteID);

app.post("/api/notes", function(req, res) {
    console.log(req.body)
    let newEntry = {title: req.body.title, text: req.body.text, id: uuidv4()};
    dbFile.push(newEntry);
    fs.writeFileSync("db/db.json",JSON.stringify(dbFile),"utf-8");
      res.json(dbFile);
});

app.get("/api/notes",function(req,res){
    var noteData = fs.readFileSync("db/db.json", "utf-8");
    var temp = JSON.parse(noteData);
    res.json(temp);
});
    
      
app.delete("/api/notes/:id", (req, res) => {
    console.log("anything");
    var notes = fs.readFileSync("db/db.json","utf-8");
    var temp = JSON.parse(notes);
    let newData=temp.filter((note) =>{ return note.id !==req.params.id})    
    fs.writeFileSync("db/db.json", JSON.stringify(newData));

    res.end()
  });

}
