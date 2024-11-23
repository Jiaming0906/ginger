//flips a coin and returns heads or tails

const { SlashCommandBuilder, EmbedBuilder, inlineCode } = require('discord.js');
//const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, inlineCode, codeBlock, time } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set-timestamp')
        .setDescription('Set a timestamp from now up to 60 minutes')
        .addIntegerOption(option => option.setName("minutes")
            .setDescription("Choose a number between 1 and 60")
            .setMinValue(1)
            .setMaxValue(60)
            .setRequired(true))
        .setIntegrationTypes(0, 1)
        .setContexts(0, 1, 2),
        
    async execute(interaction) {
        
        //
        const { options } = interaction;
        const min = options.getInteger("minutes");

        //
        const currentTime = Date.now();
        const time = `${Math.ceil(currentTime/1000) + min*60}`;
        
        // <t:00000000000:R>
        await interaction.reply({ content: `<t:${time}:R>` });
        return;
    }
};
