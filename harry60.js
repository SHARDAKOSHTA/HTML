const http =require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;
const home=fs.readFile('./idx.html');
const about=fs.readFile('./about.html');
const contact =fs.readFile('./contact.html');
const services=fs.readFile('./services.html');

const server=http.createServer((req,res)=>{
    console.log(req.url)

    res.statuscode=200;
    res.setHeader('content-Type','text/html');
    if(url=='/'){
    res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
      else if(url=='/services'){
        res.end(services);
    }
      else if(url=='/contact'){
        res.end(contact);
    }
    else{
         res.statuscode=404;
        res.end("<h1>404 not found </h1>")
    }
});

server.listen(port,hostname,()=>{
    console.log
})