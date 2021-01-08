const http=require('http');
const path=require('path');
const fs=require('fs');
const hostname='localhost';
const port=3000;

const server=http.createServer((req,res)=>{
    console.log("Request for "+ req.url + " by method "+ req.method);

    if(req.method=='GET'){
        var Fileurl;
        if(req.url=='/'){
            Fileurl='/index.html';
        }
        else{
            Fileurl=req.url;
        }
        var filepath=path.resolve('./public'+Fileurl);
        const fileext=path.extname(filepath);
        if(fileext=='.html'){
            fs.stat(filepath,(err)=>{
                if(err){
                    res.statusCode=404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error: 404 File not found</h1></body></html>');
                    return;
                }
                    res.statusCode=200;
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filepath).pipe(res);
            })
        }
        else{
            res.statusCode=404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error: 404 File not html file</h1></body></html>');
            return;
        }
    }
    else {
    res.statusCode=404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Error 400: Bad request ' + req.method+ ' not supported </h1></body></html>');
    return;
    }
});

server.listen(port,hostname,()=>{
    console.log(`server running on http://${hostname}:${port}`);
})
