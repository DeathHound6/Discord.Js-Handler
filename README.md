# Discord-Handler
An NPM package to handle Commands and Events. Compatible with Discord.Js (v12)

## Installation
`npm i @deathhound/discord-handler`

## Documentation
### Classes
#### HandlerClient
`constructor(ClientOptions, HandlerOptions)`
- [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions)
- [HandlerOptions](#HandlerOptions)
##### Properties
- `eventHandler` (EventHandler) - The Events Handler for this Client
- `commandHandler` (CommandHandler) - The Commands Handler for this Client
- `prefix` (String) - Command prefix
- `clientOptions` (HandlerOptions) - The Client's options

#### EventHandler
`constructor(Client)`
- [Client](#HandlerClient)
##### Properties
- `client` (HandlerClient) - The Client that belongs to this Handler
##### Methods
`registerEvents(Events): EventHandler` - Register Events from the Specified array
- `Events` (Event[]) - An array of Event Classes to register

`registerEventsIn(EventsDirPath): EventHandler` - Register Events from the Specified file path
- `EventsDirPath` (String) - The absolute path to the events directory

#### CommandHandler
`constructor(Client)`
- [Client](#HandlerClient)
##### Properties
- `client` (HandlerClient) - The Client that belongs to this Handler
##### Methods
`registerCommands(Commands): CommandHandler` - Register Commands from the Specified array
- `Commands` (Command[]) - An array of Command Classes to register

`registerCommandsIn(CommandsDirPath): CommandHandler` - Register Commands from the Specified file path
- `CommandsDirPath` (String) - The absolute path to the commands directory

#### Command
`constructor(Client, CommandOptions)`
- [Client](#HandlerClient)
- [CommandOptions](#CommandOptions)
##### Properties
- `name` (String) - The command name
- `description` (String) - A description of the command
- `aliases` (String[]) - A String array containing Command Alias names
- `client` (HandlerClient) - The Client this command is registered with
##### Methods
`run(): any` - Run the command (on the base Command, this will throw an error. You should overwrite this method in extended classes)

#### Event
`constructor(Client, EventOptions)`
- [Client](#HandlerClient)
- [EventOptions](#EventOptions)
##### Properties
- `name` (String) - The event name
- `emit` (String) - When this event should be run (possible values are 'on' or 'once')
- `emitter` (EventEmitter) - The object that will emit the event (usually will be the Client)
- `client` (HandlerClient) - The Client this event is registered with
##### Methods
`run(): any` - Run the event (on the base Event, this will throw an error. You should overwrite this method in extended classes)

### TypeDefs
#### HandlerOptions
- Type: `object`
##### Properties
- `prefix` (String) - Command prefix. Defaults to `!`
- `commandEditTime` (Number) - Length of time after sending a message it can be edited to run a command. Defaults to `30000`
- `owner` (String | String[]) - Owner ID or array of owner IDs

#### CommandOptions
- Type: `object`
##### Properties
- `name` (String) - The command name
- `description` (String) - A description of the command
- `aliases` (String[]) - A String array containing Command Alias names

#### EventOptions
- Type: `object`
##### Propeties
- `name` (String) - The event name
- `emit` (String) - When this event should be run (possible values are 'on' or 'once')
- `emitter` (EventEmitter) - The object that will emit the event (usually will be the Client)
