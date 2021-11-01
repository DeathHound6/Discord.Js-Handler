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
     * @param {String} options.prefix The bot's command prefix
     * @param {String | String[]} options.owner Am ID as string, or string array of the bot's owner IDs
     * @param {Number} options.commandEditTime The time, in ms, when messages edited after their creation should still be run as commands
     * @param {Object} options.defaults
     * @param {Boolean} options.defaults.events Whether the default events should be listened to
     * @param {Boolean} options.defaults.commands Whether the default commands should be loaded
     */
    constructor(ClientOptions, options = {}) {
        super(ClientOptions);

        this.eventHandler = new EventHandler(this);

        this.commandHandler = new CommandHandler(this);

        if (typeof options.prefix != "string") throw new TypeError("HandlerClient `prefix` property must be String");
        this.prefix = options.prefix ? options.prefix.toLowerCase() : "!";

        if (!options.defaults) options.defaults = { events: true, commands: true };

        this.clientOptions = {
            owner: options.owner || "",
            commandEditTime: options.commandEditTime || 30000
        };

        if (options.defaults.events) 
            this.eventHandler.registerEvents(Object.values(all(`${__dirname}/built_in/events`)));
        if (options.defaults.commands)
            this.commandHandler.registerCommands(Object.values(all(`${__dirname}/built_in/commands`)));
    }
}

module.exports = HandlerClient;
