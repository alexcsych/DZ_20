const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
