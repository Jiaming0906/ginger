//define

const { SlashCommandBuilder, EmbedBuilder, inlineCode } = require('discord.js');
//const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, inlineCode, codeBlock, time } = require('discord.js');
const { Dictionary } = require("en-dictionary");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('define')
        .setDescription('Defines the given word')
        .addStringOption(option => option.setName('word')
            .setDescription('The word to define'))
        .setRequired(true)
        .setIntegrationTypes(0, 1)
        .setContexts(0, 1, 2),

    async execute(interaction) {
        
        //

        await interaction.reply({ content: `` });
        return;
    }
};
