const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const PORT = process.env.PORT || 3000 ;

//Creating an express app
var app = express();

//configure express for supporting HBS partials
hbs.registerPartials(__dirname+'/layout/partials')

//set hbs as the view engine for express templating
app.set('views','./layout')
app.set('view engine','hbs');

//using the hbs helpers
hbs.registerHelper('getCurrentYear',(username , mood)=>`Hey ${username} why so ${mood} in ${new Date().getFullYear()}?`)

hbs.registerHelper('screamIt',(welcomeMsg)=>welcomeMsg.toUpperCase());

//request logger middleware func
app.use((req,res,next)=>{
    var now = Date();
    var reqLog = `${now} : ${req.method} ${req.originalUrl} from IP: ${req.ip}`;
    console.log(reqLog);
    fs.appendFile('server.log',reqLog+'\n',(err)=>{
        if(err){
            console.log('Oops! An error ocurred writing the server log!')
        }
    })
    next();
})

//maintainance middleware function
// app.use((req,res)=>{
//     res.render('maintainence.hbs');
// })


//serving static assets using express' built in middleware
app.use(express.static(__dirname+'/public'))


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

app.get('/projects',(request,response)=>{
    response.render('projects',{
        pageTitle : 'Projects Page'
    })
})

//express' get http request route handling
app.get('/bad',(req,res)=>{
    res.send({
        error : "Ah! Snap! Couldn't fetch the resource!",
        errCode : 'ENOTFOUND'
    })
})

//configuring express to listen for connections on port 3000
app.listen(PORT,()=>{
    console.log(`Server is fired up @ port ${PORT}`);
});