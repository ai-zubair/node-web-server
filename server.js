const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'))

// app.get('/',(request,response)=>{
//     response.send({
//         name: 'Zubair',
//         age: 21,
//         subjects :['eng','math','hindi','science','sst'],
//         pass :true,
//         parents :{
//             mother : 'Rifat ara',
//             father : 'Bashir Ahmad'
//         }
//     })
// })

// app.get('/about',(request,response)=>{
//     response.send('<h1>This is the about route!</h1>')
// })

// app.get('/bad',(req,res)=>{
//     res.send({
//         error : "Ah! Snap! Couldn't fetch the resource!",
//         errCode : 'ENOTFOUND'
//     })
// })
app.listen(3000,()=>{
    console.log('Server fired up @ localhost:3000')
});