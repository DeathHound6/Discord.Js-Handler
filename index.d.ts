import { Client, ClientOptions } from "discord.js";
import * as EventEmitter from "events";

declare module "discord.js-handler" {
    // Handlers
    class BaseHandler {
        constructor(client: HandlerClient);
        public client: HandlerClient;
    }
    class CommandHandler extends BaseHandler {
        constructor(client: HandlerClient);
        public registerCommands(commands: (typeof Command)[]): CommandHandler;
        public registerCommandsIn(commandsDirPath: String): CommandHandler;
    }
    class EventHandler extends BaseHandler {
        constructor(client: HandlerClient);
        public registerEvents(events: (typeof Event)[]): EventHandler;
        public registerEventsIn(eventsDirPath: String): EventHandler;
    }

    // Structures
    class Base {
        constructor(client: HandlerClient);
        public client: HandlerClient;
    }
    export class Command extends Base {
        constructor(client: HandlerClient, options: CommandOptions);
        public name: String;
        public description: String;
        public aliases: String[];
    }
    export class Event extends Base {
        constructor(client: HandlerClient, options: EventOptions);
        public name: String;
        public emitter: EventEmitter;
        public emit: String;
    }

    interface CommandOptions {
        name: String;
        description: String;
        aliases?: String[];
    }
    interface EventOptions {
        name: String;
        emitter?: EventEmitter;
        emit?: String;
    }

    // Utility
    export class HandlerClient extends Client {
        constructor(ClientOptions: ClientOptions, HandlerOptions: HandlerOptions);
        public eventHandler: EventHandler;
        public commandHandler: CommandHandler;
        public prefix: String;
        public options: Object;
    }
    export const Version: String;

    interface HandlerOptions {
        prefix: String | "!";
        commandEditTime: Number | 30000;
        owner?: String | String[]
    }
}