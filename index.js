const express = require('express');
const port = 8000;
const app = express();
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the servor: ${err}`);
    }
    console.log(`Server started at port ${port}`);
});