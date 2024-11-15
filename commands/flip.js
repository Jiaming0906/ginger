//flips a coin and returns heads or tails

const { SlashCommandBuilder, EmbedBuilder, inlineCode } = require('discord.js');
//const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote, inlineCode, codeBlock, time } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flip')
        .setDescription('Flips a coin')
        .setIntegrationTypes(0, 1)
        .setContexts(0, 1, 2),
        
    async execute(interaction) {
        
        //Coin flip
        const n = Math.random();
        let coinFlip = "Tails";

        // console.log(n);

        if (n < 0.5){
            coinFlip = "Heads";
        };

        //return team and coin flip results for embed builder
        const results1 = `n = ${n.toFixed(5)}¹\n🪙 Coin Flip: **${coinFlip} 🪙**\n-# ¹n = [0, 1)\n-# n is a randomly generated number larger or equals to 0 but smaller than 1.\n-# Heads when 0 ≤ n < 0.5; Tails when 0.5 ≤ n < 1.`

        const embed = new EmbedBuilder()
        .setColor(`#fcdf8d`)
        .setDescription(results1)

        await interaction.reply({ embeds: [ embed ] });
        return;
    }
};
