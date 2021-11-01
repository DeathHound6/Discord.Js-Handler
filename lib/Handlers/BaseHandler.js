const HandlerClient = require("../Client.js");

class BaseHandler {
    constructor(client) {
        if (!(client instanceof HandlerClient))
            throw new TypeError("Handler `client` property must be an instance of a HandlerClient");
        this.client = client;
    }
}

module.exports = BaseHandler;
