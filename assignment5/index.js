//this is my server file
//using node and express for this server

const fs = require('fs');

const express = require('express'); //pull in express framework could have just used node to mkae this instead  oh well
const { response } = require('express');
const { request } = require('http');
const app = express(); //assign express to a variable to make it easier to use
 
const port = 3000; //port 3000 will be used

app.listen(port, res => console.log('listening to port 3000')); //server is listening to any traffic on port 3000 now
app.use(express.static('public')); //using files from the public folder - where index.html is
 

app.use(express.json()); //json parser


app.post('/api', (request, response)=>{ //my api stuff to get the info from the web app(client page)
    console.log("i got a request");
    console.log(request.body); //what we want to get from the web app - json of longitude/latitude sent from client

   

    fs.writeFile('words.json', JSON.stringify(request.body), function(error){
        if(error){
            console.log("error");
        }
       else{
           response
           console.log("all done")
           response.json({
               status: "success"
           });
       }
    });

});


app.post('/api2', (req, response) =>{ //sends the data from file to the client to populat location searches
    console.log("populating history");

    let file_log = {};
    
    fs.readFile('words.json', function(error, rawdata){
        if(error){
            console.log("error 404");
        }
    
        else{
            //console.log(JSON.parse(rawdata)); //somesort of error happening here if the words json file is empty....
            file_log = JSON.parse(rawdata);
            console.log("printing file contents");
            console.log(file_log); //making sure the file was loaded into my object correctly

            response
            console.log("all done")

            response.send(file_log);
            
            /*response.json({
               "hi" : 555
            });*/
            
        }
    });

    
            
});
