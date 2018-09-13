const express = require("express");
const mongoose = require("mongoose");
//to get the bodyparser for the data from backend
const bodyParser = require("body-parser");
//to get the items api file
const items = require("./routes/api/items");
const app = express();

//bodyparser
app.use(bodyParser.json());

//db config by using mongoURI
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose.connect(db)
.then(()=> console.log("mongodb connected"))
.catch(err => console.log(err));

//using the ports , should refer to item variable(api routes)declared above 
app.use("/api/items", items)

 //serve static assets if in production
 if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
 
    app.get('*', (req,res) => {
         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
 }
 
//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))