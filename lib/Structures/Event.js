const Base = require("./Base.js");
const Emitter = require("events").EventEmitter;
const HandlerClient = require("../Client.js");

/**
 * Represents an event
 */
class Event extends Base {
    /**
     * @param {HandlerClient} client 
     * @param {Object} EventOptions 
     * @param {String} EventOptions.name
     * @param {String} EventOptions.emit
     * @param {Emitter} EventOptions.emitter
     */
    constructor(client, { name, emit, emitter }) {
        super(client);

        if (typeof name != "string")
            throw new TypeError("Event `name` property must be String");
        this.name = name;

        if (typeof emit != "string" || !["on", "once"].includes(emit.toLowerCase()))
            throw new TypeError("Event `emit` property must be either 'on' or 'once'");
        this.emit = emit;

        if (!(emitter instanceof Emitter))
            throw new TypeError("Event `emitter` property must be an instance of an EventEmitter");
        this.emitter = emitter;
    }
    run() {
        throw new Error("Event `run` method can only be called from extended classes");
    }
}

module.exports = Event;
