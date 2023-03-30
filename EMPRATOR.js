//===============EMPRATOR============//
const Discord = require("discord.js");
const EMPRATOR = new Discord.Client();
//===============EMPRATOR============//
EMPRATOR.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `Xera`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    EMPRATOR.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//===============EMPRATOR============//
EMPRATOR.on("ready", () => {
    var join = EMPRATOR.channels.get("1076413187978698792"); /// id voice
    if (join) join.join();
  });
//===============EMPRATOR============// 
EMPRATOR.login("OTIyMDc5NjE3Nzc3NTMyOTQ4.GFAxyg.1ucgVSX7Xid26diD9wo4tSYJyIlDpK-RSaiR_c");/////TOKEN DANE
//===============EMPRATOR============//
