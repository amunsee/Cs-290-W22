Design: create a web application and server that sends some data from client to server and data from server to client.

For this project I used Node/express to create the server, i pulled a lot of stuff about api's/the leaflet maps from tutorials and made modifications but they may look similair to others found on the web.

The server host a static page, on loading the page the client page requests data from the server which the server loads from a json file, then sending the data back to the page and populating the search history, when a new search is made the map updates to show that location, updates the search history, and send the history to the server to be written to the json file.

