//1- he made a even larger file 3h34min with loop 
//file #17
//used the http server to listen 
//res.end has the name 'text'
//now look at local server and its HUGE- not smart to send over the wire, just large hunks of data 
//1.8megs 

//SENDS IN CHUNKS!!!! KEY NOTE 
//in the Response Header, Transfer-Encoding: chunked 

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //const text = fs.readFileSync('./temporary/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./temporary/big.txt', 'utf8');
    fileStream.on('open', () =>{
        //write data here, in hunks
fileStream.pipe(res)
    })
    fileStream.on('error', (err) =>{
        res.end(err)
    })
})

.listen(5000)