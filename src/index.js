const express = require('express')
const routes = require('./routes')
const connection = require('./database/connection')
const app = express();

app.use(express.json())
app.use(routes)



app.listen(3333);