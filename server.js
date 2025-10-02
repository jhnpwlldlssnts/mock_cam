console.log(' Bcknd server is running... ');
const express = require('express');
const app   = express();
const PORT  = 5000;

app.use(express.static(__dirname));

app. listen(PORT, () => {
    console.log(`mck kiosk running at http://localhost:${PORT}`);
    
});