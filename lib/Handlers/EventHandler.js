const BaseHandler = require("./BaseHandler.js");
const Event = require("../Structures/Event.js");
const all = require("require-all");
const Util = require("../Util.js");

/**
 * A class to handle events
 */
class EventHandler extends BaseHandler {
    constructor(client) {
        super(client);
    }
    /**
     * Begin listening to the Events provided in an Array
     * @param {(typeof Event)[]} events 
     * @returns {this}
     */
    registerEvents(events) {
        for (const eventConstruct of events) {
            if (!Util.isConstructor(eventConstruct, Event)) {
                this.client.emit("warn", "[discord-handler] Cannot register an event as it is not an Event class. Skipping");
                continue;
            }
            const event = new eventConstruct(this.client);
            event.emitter[event.emit](event.name, (...args) => event.run(...args));
        }
        return this;
    }
    /**
     * Listen to all events within a directory
     * @param {String} eventsDirPath 
     * @returns {this}
     */
    registerEventsIn(eventsDirPath) {
        this.registerEvents(Object.values(all(eventsDirPath)));
        return this;
    }
}

module.exports = EventHandler;
