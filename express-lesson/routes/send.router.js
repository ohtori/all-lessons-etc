const {Router} = require('express');
const path = require('path');
const fs = require('fs');
const Busboy = require('busboy');

const router = Router();

router.post('/send', (req, res) => {
  console.log(req.body);
  const busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    var saveTo = path.join('./views/media', filename);
    console.log('Uploading: ' + saveTo, fieldname);
    file.pipe(fs.createWriteStream(saveTo));
  });
  busboy.on('finish', function() {
    console.log('Upload complete');
    console.log(path.join(__dirname, '../', 'views/index.html'));
    return res.redirect('/');
  });
  return req.pipe(busboy);
});

module.exports = router;