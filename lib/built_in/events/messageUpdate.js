const Event = require("../../Structures/Event.js");

class MessageUpdateEvent_BuiltIn extends Event {
    constructor(client) {
        super(client, { name: "messageUpdate", emitter: client, emit: "on" });
    }
    run(oldMessage, newMessage) {
        if ((newMessage.editedTimestamp - oldMessage.createdTimestamp) > this.client.clientOptions.commandEditTime) return;
        this.client.emit("message", newMessage);
    }
}

module.exports = MessageUpdateEvent_BuiltIn;
