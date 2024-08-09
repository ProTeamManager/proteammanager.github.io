const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response, {
	  public: 'build'
  });
});

server.listen(3333, () => {
  console.log('Running at http://localhost:3333');
});
