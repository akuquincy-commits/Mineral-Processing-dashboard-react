
  
  const express = require('express');
   const app = express(); // Start an Express app
   const port = 3000; // Choose a port for your server

   app.get('/', (req, res) => {
       res.send('Hello from Express! This is your starting point.');
   });

   app.listen(port, () => {
       console.log(`Listening on port ${port}`);
   });