const wrapAsync = require("../utils/wrapAsync.js");
const Listing=require("../models/listing");

module.exports.showFilter=wrapAsync(async(req,res)=>{
    let category=req.query.category;
    let allListings = await Listing.find({ category: category });
    res.render("filter.ejs",{allListings,category});
});

module.exports.showSearchFilter=wrapAsync(async(req,res)=>{
    let destination=req.query.destination.trim();

    let allListings = await Listing.find({
        location: { $regex: destination, $options: "i" }
    });
    
    res.render("search.ejs",{allListings});
});