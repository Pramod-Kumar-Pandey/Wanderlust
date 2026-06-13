const express=require("express");
const router=express.Router();
const filterContrller=require("../controllers/filter.js");

router.route("/")
.get(filterContrller.showFilter);

router.route("/search")
.get(filterContrller.showSearchFilter);

module.exports=router;