const express= require('express');
const app = express();

// a route handler that watching for incoming http requests for getting information.
// route is 'localhost:5000/'
app.get('/', (req, res)=>{
    res.send({hi:'there'});
});

// express tell node to listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT);