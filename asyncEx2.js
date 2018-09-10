const crypto = require('crypto');

function makeSecureRandom(size) {
    return new Promise(function (resolve, reject) {
        crypto.randomBytes(size, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                let obj = { "length": buf.length, "random": buf.toString('hex') };
                resolve(obj);
            }
        });
    })
}

async function finish() {
    let finalObj = { "title": "6 secure randoms", "randoms": [] }
    let promises = [makeSecureRandom(48), makeSecureRandom(40), makeSecureRandom(32), makeSecureRandom(24), makeSecureRandom(16), makeSecureRandom(8)];
    finalObj.randoms = await Promise.all(promises);
    console.log(finalObj);
}

finish();

