const RIPEMD160 = require('ripemd160');
const crypto = require('crypto');


var Common = function () {

    this.GenerateSecret = function() {

        var secretBuffer = crypto.randomBytes(32);
        var secret = secretBuffer.toString('hex');
        var hashedSecret = new RIPEMD160().update(secretBuffer).digest('hex');

        console.log("\nSecret:\t\t\t", secret);
        console.log("\Hashed Secret:\t\t", hashedSecret, "\n");

        return { "secret": secret, "hashedSecret": hashedSecret };
    };

    this.Extend = function(target, source, exclude) {
        if (source) {
            for(var prop in source) {
                if (exclude && exclude.indexOf(prop) != -1) {
                    continue;
                }

                if(source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }
};

module.exports = Common;
