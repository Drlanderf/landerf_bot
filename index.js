let MyToken = "MTAzNDE4NTk5MTUzMzEwOTI0OA.GmysuC.H0iahqlbSULND_VRtTcDsb3pG_Nu58rEJE58ic";

const { Client, GatewayIntentBits } = require("discord.js");
let MyTestingReplyVar = "quoi";
let MyWelcomeChannel = "1035551789833007237";
const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers
        ]
    });

client.login(MyToken).then(r => {
    console.log("Login Action SUCCEED !");
});
client.on("ready",() => {
    console.log("Bot OK");
})

client.on("messageCreate", message => {
    let test = message.content;
    let result = test.toLowerCase();
    if(result.includes(MyTestingReplyVar))
        message.reply("feur :stuck_out_tongue_closed_eyes: !",).then(r =>{
            console.log("Reply Action 'feur' SUCCEED !");
        }) ;
});

client.on("guildMemberAdd",member => {
    console.log("guildMemberAdd Action SUCCEED !");
    //"<@"+ member.id + ">"
    client.channels.cache.get(MyWelcomeChannel).send("<@"+ member.id + ">" + " est arrivé.");
});
client.on("guildMemberRemove",member => {
    console.log("guildMemberRemove Action SUCCEED !");
    //"<@"+ member.id + ">"
    client.channels.cache.get(MyWelcomeChannel).send("<@"+ member.id + ">" + " est parti.");
});
//client.emit("guildMemberAdd");
