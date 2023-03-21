var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // First implimantation before streaming the data in chunks but as one big chunk
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (error) => {
      res.end(error);
    })
  })
  .listen(5000);