const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003

app.use(bodyParser.json())

//MiddleWare

const combine = (req, res, next) =>{
    if (req.body.gender === 'Male'){
    req.body = {prefix: "Mr", ...req.body}
    } else (req.body.gender === 'female');
    {
    req.body = {prefix: "Ms", ...req.body}
    }
    next()
}

const attachId = (req, res, next) =>{
    let id = Math.floor(Math.random() * 10);
    req.body = {id, ...req.body}
    next()
}

app.use(combine)
app.use(attachId);

app.get('/' ,(req,res)=>{
    res.send('Hello World')
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port,() =>{
    console.log(`Hello app listening on port http://localhost:${port}`)
});