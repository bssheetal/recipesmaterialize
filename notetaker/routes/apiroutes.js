var router = require("express").Router();
const store = require("../db/store");
// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
    store
      .getNotes()
      .then(notes => res.json(notes))  //send objects to the browser
      .catch(err => res.status(500).json(err));
  });
  
  router.post("/notes", (req, res) => {
    store
      .addNote(req.body)
      .then((note) => res.json(note)) //send objects to the browser
      .catch(err => res.status(500).json(err));
  });

  router.delete("/notes/:id",(req,res)=>{
    store.deleteNote(req.params.id)
    .then(res.send(200))//send sucess status to browser
      .catch(err => res.status(500).json(err));
  });


  
  module.exports = router;