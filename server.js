const express = require('express');
const serveStatic = require("serve-static")

const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

app.use(cors());
app.listen(port);

console.log('server started '+ port);