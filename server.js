const express = require('express');
const serveStatic = require("serve-static")

const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.get('/write', function (req,res) {
  console.log('write',req,res)
});
app.use(cors());
app.listen(port);

console.log('server started '+ port);