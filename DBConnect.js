const mongoose = require("mongoose")

module.exports = mongoose.connect('mongodb://localhost/abdul',{ useNewUrlParser: true } ,function(err){
   if(err){
       throw err;
   }
   console.log("Database connected");
});