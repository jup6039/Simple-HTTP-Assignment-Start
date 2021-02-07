const fs = require('fs'); // file system module

const spongeImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`); // image path

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeImage);
  response.end();
};

module.exports.getImage = getImage;
