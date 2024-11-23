// things to do on discord.com/developers/applications
// 1. create an application
// 2. avatar
// 3. bot, then add bot
// 4. reset token, add token to .env
// 5. message content intent turn on 
// 6. OAuth2, custom URL
//https://discord.com/oauth2/authorize?scope=bot&permissions=8&client_id=1071980540837765320

//create a discord bot
require('dotenv').config();
//npm i dotenv
//npm i discord.js
//npm i discord-player

//define
const dotenv = require("dotenv");
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, SlashCommandAssertions } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
]});

//commands path
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
};

//commands interaction
client.once(Events.ClientReady, () => {
    console.log("Ready to accept commands!")
});

//commands interaction
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (err){
        console.log(err);
        await interaction.reply({
            content: "There was an error while executing this command!"
        })
    }
});

//react to ping
client.on("messageCreate", async (message) => {
    
    if(message.author.bot) return;
    if(message.author.system) return;

    //console.log(message);

    try {
        //
        if(message.content.toLowerCase().startsWith("hi") || message.content.toLowerCase().startsWith("hello")){
            message.react("<:loopy3:1309092866592604220>");
            message.reply("<:loopy3:1309092866592604220>");
            return;
            //<:loopy3:1309092866592604220>
        };

    } catch (err) {
        console.log("index.js, reply message error");
        console.log("error message below".padEnd(50, "-"));
        console.log(err);
        console.log("-".padEnd(50, "-"));
    };
});

// log bot onto discord
client.login(process.env.DISCORD_TOKEN);
console.log("ginger is Online on Discord")

//node .\index.js
//"start": "node bot.js"
//
