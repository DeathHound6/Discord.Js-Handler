const { Client, ClientOptions } = require("discord.js");
const EventHandler = require("./Handlers/EventHandler.js");
const CommandHandler = require("./Handlers/CommandHandler.js");
const all = require("require-all");

/**
 * A custom Discord Bot Client for handling commands and events
 */
class HandlerClient extends Client {
    /**
     * @param {ClientOptions} ClientOptions 
     * @param {Object} options
     */
    constructor(ClientOptions, options) {
        super(ClientOptions);

        this.eventHandler = new EventHandler(this);

        this.commandHandler = new CommandHandler(this);

        if (typeof options.prefix != "string") throw new TypeError("HandlerClient `prefix` property must be String");
        this.prefix = options.prefix ? options.prefix.toLowerCase() : "!";

        this.clientOptions = {
            owner: options.owner,
            commandEditTime: options.commandEditTime || 30000
        };

        this.eventHandler.registerEvents(Object.values(all(`${__dirname}/built_in/events`)));
    }
}

module.exports = HandlerClient;
