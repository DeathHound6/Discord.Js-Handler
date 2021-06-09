const { Client } = require("discord.js");

class BaseHandler {
    constructor(client) {
        if (!(client instanceof Client))
            throw new TypeError("Handler `client` property must be an instance of a HandlerClient");
        this.client = client;
    }
}

module.exports = BaseHandler;
