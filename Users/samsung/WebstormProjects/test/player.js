var express=require("express");
var router=express.Router();
var models=require("./models");
router.post("/set",models.setPlayer);
router.get("/get",models.getPlayer);

module.exports = router;