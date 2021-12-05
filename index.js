const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const port = 8000;
const app = express();

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(expressLayouts);
app.use(express.static('./assets'));

app.use('/', require('./routes/index'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the servor: ${err}`);
    }
    console.log(`Server started at port ${port}`);
});