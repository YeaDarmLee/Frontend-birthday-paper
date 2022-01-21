const express = require('express');
const serveStatic = require("serve-static")

const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3000;

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(cors());
app.listen(port);

console.log('server started '+ port);