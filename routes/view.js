const router = require("express").Router();
const path = require("path");



//Open index page on startup
router.get("/", (req, res) =>{
    res.sendFile(__dirname, "../public/index.html");
});


module.exports = router;