const BaseHandler = require("./BaseHandler.js");
const Command = require("../Structures/Command.js");
const all = require("require-all");
const Util = require("../Util.js");
const { Collection } = require("discord.js");

/**
 * A class to handle commands
 */
class CommandHandler extends BaseHandler {
    constructor(client) {
        super(client);

        this._commands = new Collection();
    }
    /**
     * Add the provided Commands to a Collection, ready for executing
     * @param {(typeof Command)[]} commands 
     * @returns {this}
     */
    registerCommands(commands) {
        for (const commandConstruct of commands) {
            if (!Util.isConstruct(commandConstruct, Command)) {
                this.client.emit("warn", "[discord-handler] Cannot register a command as it is not a Command class. Skipping");
                continue;
            }
            const command = new commandConstruct(this.client);
            this._commands.set(command.name, command);
        }
        return this;
    }
    /**
     * Register all commands from a directory
     * @param {String} commandsDirPath 
     * @returns {this}
     */
    registerCommandsIn(commandsDirPath) {
        this.registerCommands(Object.values(all(commandsDirPath)));
        return this;
    }
}

module.exports = CommandHandler;
