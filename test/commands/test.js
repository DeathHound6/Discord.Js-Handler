const Command = require("../../lib/Structures/Command.js");

class TestCommand extends Command {
    constructor(client) {
        super(client, { name: "test", description: "A testing command", aliases: [] });
    }
    run(message, args) {
        message.channel.send("Test Success");
    }
}

module.exports = TestCommand;
