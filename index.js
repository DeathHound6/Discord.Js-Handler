module.exports = {
    Client: require("./lib/Client.js"),
    Command: require("./lib/Structures/Command.js"),
    Event: require("./lib/Structures/Event.js"),
    HandlerClient: require("./lib/Client.js"),
    Version: require("./package.json").version,
    Util: require("./lib/Util.js")
}