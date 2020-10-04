const {v4:uuidv4} = require("uuid");
const db = require("../db/db");
const fs = require("fs");



module.exports=function(app){
    let noteID = uuidv4()

    app.post("/api/notes", function(req, res) {
        let newNote = {
            
            title: req.body.title,
            text: req.body.text,
            id:uuidv4()};
        db.push(newNote);
        fs.writeFileSync("db/db.json", JSON.stringify(db),"utf-8");
        res.json(db);

    app.get("/api/notes", function(req, res) {
        var notes = fs.readFileSync("db/db.json", "utf-8");
        var temp = JSON.parse(notes)
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
)};