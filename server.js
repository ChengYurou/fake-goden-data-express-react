const express = require('express');
const app = new express();

app.use(express.static(__dirname + '/public'));
app.get('/forms/id/1',(req,res)=>{
    res.json(['date','text']);
})
app.listen(3000,()=> {
    console.log('listening port 3000...');
})