// DBD.JS Basic example.
// Created by lulwot352

// Defining bot.
const dbd = require("dbd.js");
const bot = new dbd.Bot({
 token: "TOKEN",
 prefix: "PREFIX"
 })

 bot.status({
     text: "DBD_Basic Bot",
     type: "PLAYING",
     status: "online" // This is where you define the type of status and the status text.
 })

bot.loadCommands("./commands") // Used to load commands from a directory/ a.k.a command handlers