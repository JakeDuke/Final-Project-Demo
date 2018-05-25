const express = require("express");
let router = express.Router();
let controller = require("./controller");
let model = require("./model");


controller.model = model;

router.post("/create", function(req, res) {

    let artist = req.body.newArtist;
    model.create(artist);
    res.send(artist)
})

router.post("/update", function(req, res) {

    let artist = req.body.newArtist;
    let id = req.body.id;
    model.update(id, artist);
    res.send(artist)
})

router.post("/remove", function(req, res) {

    let id = req.body.id;
    model.remove(id);
    res.send(String(id))
})

router.post("/read_all", function(req, res) {
  
    let db = model.read_all();
    res.send(db)
})

router.post("/:operation", (req, res) => {

    let operation = req.params.operation;
    
});



module.exports = router;