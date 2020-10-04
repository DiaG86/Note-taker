const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')


const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

require("./routes/apiRoutes")(app);
app.use("/",htmlRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  