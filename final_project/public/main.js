
    const history = [];

        console.log("im loaded")

    //add end of file so it loads after the html is done loading
    var map = L.map('map').setView([51.505, -0.09], 13);

    const attribution = '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreet</a> contributors';

    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, {attribution});
    tiles.addTo(map);

    let locate = navigator.geolocation;
    let latitude;
    let longitude;
        

        console.log('hello');

    function ion(){
        if ('geolocation' in navigator){ //if geolocation is available when button is pushed.
            console.log('geolocation available'); //message to confirm
            locate.getCurrentPosition(async position =>{ //used locate to = naviagtor.geolocation above for a shortuct - async function (look into more) but calls the below code
            console.log(position);
            
            
            //(position.coords.latitude, position.coords.longitude);
            latitude = position.coords.latitude; //variable latitude = the latitude from the map
            longitude = position.coords.longitude; //longitude of above line
            document.getElementById("lat").textContent = latitude; //set html to equal lat
            document.getElementById("long").textContent = longitude; //set html to equal long

            const data = {latitude, longitude}; //create tuple of latitude and longitude data
            const options = { //posting data as json info for server -- post is the info being sent to the server.
            method: 'Post', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) //body key contains the json version of data (lat/long)
            }
            const response = await fetch('/api', options); //need to look into await... but waiting for the fetch o grab stuff from the /api that we made? 
            const json = await response.json(); //waiting for response to send info from server
            console.log(json); //log that info to console.
            }); //end of async function
    
        }

        else{
            console.log('geolocation not available'); //cant get geolocation then nothing happens except this message
        }

     
    };

    function update_array(history){
        const loc = {
            longitude: null,
            latitude: null
        }

        loc.latitude = document.getElementById("lat-box").value;
        loc.longitude = document.getElementById('lon-box').value;

        if(loc.latitude != "" || loc.longitude != ""){
            if(history.length < 5){
            history.push(loc); //add newest search to end
        }

        else{
            history.shift(); //get rid of first (oldest search)
            history.push(loc); //add newest search to end
        }
          map.setView([loc.latitude, loc.longitude], 13);

        }

       
        //remove after testing
        console.log(history);

        
        const options = {
            method: 'POST',
            body: JSON.stringify(history, null, 2),
            headers: {
                'Content-Type': 'application/json'
            }

        };

        fetch('/api', options)
            .then(response =>{
                console.log("reponse");
            });

        update_history(history);
        
      }
      

    function update_history(history){ //update displayed most recent 5 searchs on web page each time a new search is done
        for(let i = 0; i < history.length; i++){
            let selected = "item" + i;
            let data = history.longitude + history.latitude;
            document.getElementById(selected).innerHTML = JSON.stringify(history[i]);
        }
    }

    async function load_history(){
               
        const options2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await fetch('/api2', options2)
        const newvar = await response.json();
        console.log(newvar);
            for(let i = 0; i < newvar.length; i++){
                history[i] = newvar[i];
            }
            
            //console.log(history[0])
            console.log(history)
            update_array(history)
            console.log("into the beast");
       

    };
   



