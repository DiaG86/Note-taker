var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");

var app = express();

var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
app.use("/",htmlRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});