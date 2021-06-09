const Event = require("../../lib/Structures/Event.js");

class ReadyEvent extends Event {
    constructor(client) {
        super(client, { name: "ready", emitter: client, emit: "once" });
    }
    run() {
        console.log("Logged in");
    }
}

module.exports = ReadyEvent;
