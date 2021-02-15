
var AtomicSwap;
AtomicSwap = function (configuration, appConfiguration) {
    this.engine = null;

    this.construct = function (configuration, appConfiguration) {
        var Engine = require("./engine");
        this.engine = new Engine(configuration, appConfiguration);
        this.engine.common.Extend(this, this.engine);
    };

    this.construct(configuration, appConfiguration);

    this.Initiate = function (refundTime, secret, address, amount, extendedParams) {
        var conversion = (extendedParams && extendedParams.conversion) ? extendedParams.conversion : 'milliether';

        var params = {
            from: this.appConfig.defaultWallet,
            value: this.web3.utils.toWei(amount, conversion)
        };

        this.engine.common.Extend(params, extendedParams, ["conversion"]);
        return this.engine.callFunction("initiate", [refundTime, secret, address], params);
    };

    this.Participate = function (refundTime, secret, address, amount, extendedParams) {
        var conversion = (extendedParams && extendedParams.conversion) ? extendedParams.conversion : 'milliether';

        var params = {
            from: this.appConfig.defaultWallet,
            value: this.web3.utils.toWei(amount, conversion)
        };

        this.engine.common.Extend(params, extendedParams, ["conversion"]);
        return this.engine.callFunction("participate", [refundTime, secret, address], params);
    };

    this.Redeem = function (secret, hashedSecret, extendedParams) {

        var params = {
            from: this.appConfig.defaultWallet
        };

        this.engine.common.Extend(params, extendedParams);
        return this.callFunction("redeem", [secret, hashedSecret], params);
    };

    this.Refund = function (hashedSecret, extendedParams) {

        var params = {
            from: this.appConfig.defaultWallet
        };

        this.engine.common.Extend(params, extendedParams);
        return this.callFunction("refund", [hashedSecret], params);
    };
};

module.exports = AtomicSwap;
