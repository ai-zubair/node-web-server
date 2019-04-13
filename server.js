const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

//request logger middleware func
app.use((req,res,next)=>{
    var now = Date();
    var reqLog = `${now} : ${req.originalUrl}`;
    console.log(reqLog);
    fs.appendFile('server.log',reqLog+'\n',(err)=>{
        if(err){
            console.log('Oops! An error ocurred writing the server log!')
        }
    })
    next();
})

//maintainance middleware function
app.use((req,res)=>{
    res.render('maintainence.hbs');
})

//configure express for supporting HBS partials
hbs.registerPartials(__dirname+'/layout/partials')

//set hbs as the view engine for express templating
app.set('views','./layout')
app.set('view engine','hbs');

//using the hbs helpers
hbs.registerHelper('getCurrentYear',(username , mood)=>`Hey ${username} why so ${mood} in ${new Date().getFullYear()}?`)

hbs.registerHelper('screamIt',(welcomeMsg)=>welcomeMsg.toUpperCase());

//serving static assets using express' built in middleware
// app.use(express.static(__dirname+'/public'))


//rendering templates using express' response.render
app.get('/',(request,response)=>{
    response.render('homepage.hbs',{
        pageTitle : 'Homepage'
    })
})

app.get('/about',(request,response)=>{
    response.render('about.hbs',{
        pageTitle : 'About Page'
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