module.exports = {
  name: "leave",
  use: "leave",
  desc: "Cortana will leave this group.",
  category: "group",
  isOwner: false,
  isGroup: true,
  isAdmin: true,
  async run({ msg, conn }, { q }) {
  	await
await conn.sendMessage(msg.from, {text: "Good bye...👋 I hipe you had a humble time using Cortana. To add me back use *!join <group link>.                                    Krakinzlab ©2022 Inc 🦀 *"})
await require("delay")(3000);
await conn.groupLeave(msg.from)
    },
}
