const crypto = require('crypto');
var finalObj = {"title": "6 secure randoms", "randoms": [] }

crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
  let obj = { "length": buf.length, "random": buf.toString('hex')  };
  finalObj.randoms.push(obj);
  
  crypto.randomBytes(40, (err, buf) => {
    if (err) throw err;
    let obj = { "length": buf.length, "random": buf.toString('hex')  };
    finalObj.randoms.push(obj);

    crypto.randomBytes(32, (err, buf) => {
        if (err) throw err;
        let obj = { "length": buf.length, "random": buf.toString('hex')  };
        finalObj.randoms.push(obj);

        crypto.randomBytes(24, (err, buf) => {
            if (err) throw err;
            let obj = { "length": buf.length, "random": buf.toString('hex')  };
            finalObj.randoms.push(obj);
            console.log(finalObj) 
          });
      });
  });
});

 
