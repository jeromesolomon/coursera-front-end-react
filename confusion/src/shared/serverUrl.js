//
// path to server
//
export const useHeroku = true;

//heroku server
let  serverUrlHeruko = 'https://gs-reactaurant.herokuapp.com/';

// local json-server
let serverUrlJsonServer = 'http://localhost:3001/';


if (useHeroku) {
    serverUrl = serverUrlHeruko;
} else {
    serverUrl = serverUrlJsonServer;
}

export var serverUrl;


