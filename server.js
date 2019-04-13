const express = require('express');
const hbs = require('hbs');

var app = express();

//configure express for supporting HBS partials
hbs.registerPartials(__dirname+'/layout/partials')

//set hbs as the view engine for express templating
app.set('views','./layout')
app.set('view engine','hbs');

//serving static assets using express
// app.use(express.static(__dirname+'/public'))

//rendering templates using express' response.render
app.get('/',(request,response)=>{
    response.render('homepage.hbs',{
        pageTitle : 'Homepage',
        currentYear : new Date().getFullYear(),
        welcomeMsg : 'Hey there! Welcome to our website.'
    })
})

app.get('/about',(request,response)=>{
    response.render('about.hbs',{
        pageTitle : 'About Page',
        currentYear : new Date().getFullYear()
    })
})

//express' get http request route handling
// app.get('/bad',(req,res)=>{
//     res.send({
//         error : "Ah! Snap! Couldn't fetch the resource!",
//         errCode : 'ENOTFOUND'
//     })
// })

//configuring express to listen for connections on port 3000
app.listen(3000,()=>{
    console.log('Server fired up @ localhost:3000')
});