const express =  require('express');
const view =  require('./router/view');
const edit = require('./router/update');
const insert =  require('./router/insert');
const deletes = require('./router/delete');
const bodyParser = require("body-parser");
const app =  express();


app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(insert);
app.use(view);
app.use(edit);
app.use(deletes);



app.listen('3000',() => {
    console.log('Start on port 3000');
})