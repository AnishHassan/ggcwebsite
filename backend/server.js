const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
    
require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,

    useUnifiedTopology: true
}
);


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
const contactFormRouter = require('./routes/contactform');

app.use('/contactform',contactFormRouter)

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})