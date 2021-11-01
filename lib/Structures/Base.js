const HandlerClient = require("../Client.js");

class Base {
    constructor(client) {
        if (!(client instanceof HandlerClient))
            throw new TypeError("Structure `client` property must be an instance of a HandlerClient");
        this.client = client;
    }
}

module.exports = Base;
