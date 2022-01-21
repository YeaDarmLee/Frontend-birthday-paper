const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');

app = express();
app.use(serveStatic(path.join(__dirname, '/')));

const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.listen(port);

console.log('server started '+ port);