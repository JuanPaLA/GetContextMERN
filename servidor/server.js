const express = require("express");
const app = express();
var mongoose = require('mongoose');
const port = process.env.PORT || 5001;
const bodyParser = require("body-parser");
const cors = require("cors");

//BASE DE DATOS CON LLAVES DE ACCESO ESECIFICAS
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected mother fucker'))
  .catch(err => console.log(err));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
extended: true
})
);
app.use(cors());

const test = require('./routes/test');
const testMod = require('./routes/modulos/test');

app.use(test);
app.use(testMod);

app.listen(port, () => {
    console.log("Server is running on " + port + "port");
});
    