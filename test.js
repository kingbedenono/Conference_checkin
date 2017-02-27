var Canvas = require('canvas')
      , Image = Canvas.Image
      , qrcode = require('jsqrcode')(Canvas)

    var filename = __dirname + '/qr2.png'
    console.log(filename);
    var image = new Image();
    image.onload = function(){
      var result;
       console.log("here");
      try{
        result = qrcode.decode(image);
        console.log('result of qr code: ' + result);
      }catch(e){
        console.log('unable to read qr code');
      }
    }
    image.src = filename