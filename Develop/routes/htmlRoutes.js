const express = require("express");
var path = require("path");
const router = require("express").Router();


module.exports = function(app) {

    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
      router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    };