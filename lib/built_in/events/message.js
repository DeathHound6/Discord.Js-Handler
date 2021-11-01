const Event = require("../../Structures/Event.js");
const HandlerClient = require("../../Client.js");
const { Message } = require("discord.js");

/**
 * The built-in Message Event for handling running commands
 */
class MessageEvent_BuiltIn extends Event {
    /**
     * @param {HandlerClient} client
     */
    constructor(client) {
        super(client, { name: "message", emitter: client, emit: "on" });
    }
    /**
     * Run the event
     * @param {Message} message
     */
    run(message) {
        if (!message.content.toLowerCase().startsWith(this.client.prefix)) return;
        const args = message.content.slice(this.client.prefix.length).split(/ +/g);
        const cmdName = args.shift()?.toLowerCase();
        const cmd = this.client.commandHandler._commands.find(c => c.name == cmdName || c.aliases.includes(cmdName));
        if (!cmd) return;
        try {
            cmd.Run(message, args);
        } catch (err) {
            this.client.emit("error", err);
            message.author.send(err);
        }
    }
}

module.exports = MessageEvent_BuiltIn;
