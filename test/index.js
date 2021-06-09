const Client = require("../lib/Client.js");
const { Intents } = require("discord.js");
const all = require("require-all");

const client = new Client({ ws: { intents: Intents.NON_PRIVILEGED } }, { prefix: ".", owner: "userID_here" });

client.eventHandler.registerEvents(Object.values(all(`${__dirname}/events`)));
client.commandHandler.registerCommands(Object.values(all(`${__dirname}/commands`)));

client.login("token_here");