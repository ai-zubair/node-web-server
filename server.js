const express = require('express');
const hbs = require('hbs');

var app = express();

//set hbs as the view engine for express
app.set('views','./layout')
app.set('view engine','hbs');

// app.use(express.static(__dirname+'/public'))

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

// app.get('/bad',(req,res)=>{
//     res.send({
//         error : "Ah! Snap! Couldn't fetch the resource!",
//         errCode : 'ENOTFOUND'
//     })
// })
app.listen(3000,()=>{
    console.log('Server fired up @ localhost:3000')
});