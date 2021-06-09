const Base = require("./Base.js");
const HandlerClient = require("../Client.js");

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
        this.name = name;

        if (typeof description != "string") throw new TypeError("Command `description` property must be String");
        this.description = description;

        if (!(aliases instanceof Array) || !aliases.every(e => typeof e == "string")) throw new TypeError("Command `aliases` property must be a String Array");
        this.aliases = aliases;
    }
    run() {
        throw new Error("Command `run` method can only be called from extended classes");
    }
}

module.exports = Command;
