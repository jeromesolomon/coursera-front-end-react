//
// firebase node.js server w/ CRUD for cousera project
//

// get the required libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

// allow access across-origins w/ express via CORS
app.use(cors({ origin: true }));

// hello-world endpoint
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});


//
// read any of the top level json lists
//
app.get('/api/v1/get/:listName', (req, res) => {
    (async () => {
        try {
            let query = db.collection('req.params.listName');
            let response = [];
            await query.get().then(
                (snapshot) => {
                let docs = snapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        item: doc.data().item
                    };
                    response.push(selectedItem);
                }
                return res.status(200).send(response);
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });
      
exports.app = functions.https.onRequest(app);