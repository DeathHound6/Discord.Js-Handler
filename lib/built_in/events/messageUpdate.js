const Event = require("../../Structures/Event.js");
const HandlerClient = require("../../Client.js");
const { Message } = require("discord.js");

/**
 * The built-in MessageUpdate Event for handling running commands
 */
class MessageUpdateEvent_BuiltIn extends Event {
    /**
     * @param {HandlerClient} client
     */
    constructor(client) {
        super(client, { name: "messageUpdate", emitter: client, emit: "on" });
    }
    /**
     * Run the event
     * @param {Message} oldMessage
     * @param {Message} newMessage
     */
    run(oldMessage, newMessage) {
        if ((newMessage.editedTimestamp - oldMessage.createdTimestamp) <= this.client.clientOptions.commandEditTime)
            this.client.emit("message", newMessage);
    }
}

module.exports = MessageUpdateEvent_BuiltIn;
