module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Don't change the link you dirty dick, copy and paste here and there, change the source, assol
				caption: `Bot name; *Cortana* 
Bot Script: *Https://GitHub.com/Krakinzlab/Cortana*  
Author: *Krakinzlab ?2022 Inc`,
				
			},
			{ quoted: msg }
		);
	},
};
