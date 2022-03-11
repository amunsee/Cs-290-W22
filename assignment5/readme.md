Note: index.html needs to be in a subfolder named public from the folder index.js is in to be found. index.js is looking for the contents of a subfolder named public.
added new words.json file - server will crash if it cant find a file already existing and has to have an empty array or array of json objects in it.

Design: create a web application and server that sends some data from client to server and data from server to client.

For this project I used Node/express to create the server, i pulled a lot of stuff about api's/the leaflet maps from tutorials and made modifications but they may look similair to others found on the web.

The server host a static page, on loading the page the client page requests data from the server which the server loads from a json file, then sending the data back to the page and populating the search history, when a new search is made the map updates to show that location, updates the search history, and send the history to the server to be written to the json file.

![assignment5design](https://user-images.githubusercontent.com/97048406/156111302-e116a410-f749-409f-964d-cd562f189f60.jpg)
