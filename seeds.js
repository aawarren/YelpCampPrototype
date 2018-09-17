var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image:"https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false",
        description:"Clouds hang beutifully in this valley. Interesting formations"
    },
    {
        name:"Desert Mesa",
        image: "https://www.nps.gov/jotr/planyourvisit/images/Black-Rock-Campground-web-Schwalbe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
        description: "Climb the plateaus to see the layers of the red rocks."
    },
    {
        name: "Canyon Floor",
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Walk with the river at the bottom of this orange and yellow canyon."
    }
    ];
    
    function seedDB() {
        //remove all campgrounds
        Campground.remove({}, function(err) {
            if(err){
                console.log(err);
            } 
            console.log("removed campgrounds");
            Comment.remove({}, function(err) {
                if(err) {
                    console.log(err);
                }
                    console.log("removed comments");
                    //add a few campgrounds
                    data.forEach(function(seed){
                        Campground.create(seed, function(err, campground) {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log("added a campground");
                                //create a comment
                                Comment.create(
                                    {
                                        text: "This place is greate, but I wish there was internet.",
                                        author: "Homer"
                                    }, function(err, comment) {
                                        if(err){
                                            console.log(err);
                                        } else {
                                            campground.comments.push(comment);
                                            campground.save();
                                            console.log("Created new comment");
                                        }
                                    });
                            }
                        });
                    });
        });
    });
    }
    
    module.exports = seedDB;
    
    
    
    
    
    