const { Client } = require("discord.js");

class Base {
    constructor(client) {
        if (!(client instanceof Client))
            throw new TypeError("Structure `client` property must be an instance of a HandlerClient");
        this.client = client;
    }
}

module.exports = Base;
