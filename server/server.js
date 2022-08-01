'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const weatherData=require('./Weather.json');


const app = express();

app.use(cors());

const port = process.env.PORT || 3001;

app.get(`/weather`, (req, res)=>{
    res.send(weatherData);
})
app.get('/', (req, res) => {
  res.send('Hello, this the first server side')
})



app.get('*', (req, res) => {
  res.json({'error': 'Page not found!'})
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
