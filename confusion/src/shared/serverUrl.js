//
// path to server
//
export const useHeroku = true;

//heroku server
let serverUrlHeruko = 'https://gs-reactaurant.herokuapp.com/';

// local json-server
let serverUrlJsonServer = 'http://localhost:3001/';

let theUrl;
if (useHeroku) {
    theUrl = serverUrlHeruko;
} else {
    theUrl = serverUrlJsonServer;
}

export const serverUrl = theUrl;


