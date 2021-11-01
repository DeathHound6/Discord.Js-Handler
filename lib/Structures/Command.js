const Base = require("./Base.js");
const HandlerClient = require("../Client.js");
const { Message } = require("discord.js");

/**
 * Represents a Command
 */
class Command extends Base {
    /**
     * @param {HandlerClient} client
     * @param {Object} CommandOptions
     * @param {String} CommandOptions.name
     * @param {String} CommandOptions.description
     * @param {String[]} CommandOptions.aliases
     */
    constructor(client, { name, description, aliases = [] }) {
        super(client);

        if (typeof name != "string") throw new TypeError("Command `name` property must be String");
        this.name = name.toLowerCase();

        if (typeof description != "string") throw new TypeError("Command `description` property must be String");
        this.description = description;

        if (!(aliases instanceof Array) || !aliases.every(e => typeof e == "string")) throw new TypeError("Command `aliases` property must be a String Array");
        this.aliases = aliases.map(e => e.toLowerCase());
    }
    /**
     * Pre-run method for permission checks
     * @param {Message} message
     * @param {String[]} args
     */
    Run(message, args) {
        this.run(message, args);
    }
    /**
     * Run the command
     */
    run() {
        throw new Error("Command `run` method is an Abstract Method");
    }
}

module.exports = Command;
