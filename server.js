//Install express server
const express = require('express');
const app = express();
const path = require('path');


// Serve only the static files form the dist directory
app.use(express.static('./dist/operantic-dev-test'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/operantic-dev-test/index.html'));
});

app.listen(process.env.PORT || 8080);