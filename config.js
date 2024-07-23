const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348135252741";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_24_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRFlBTVdjdjNVdWJhU0p5SG14aDRqVG5wUTc2YzgwVXhZNkJDek5tTk9DUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM1MjUyNzQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRjU1NzBBQUFDRUNCQUJBNTlCNzVCQTY2NURFODlBNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3NjYyNjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM1MjUyNzQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRTM1NkExMUNGMTZGREVBRTA3NjlGN0E5QkNBRUQyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3NjYyNjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmRWRlVzZkxSTEd4OGNZMllyTzBDZ1wiLFxuICBcInBob25lSWRcIjogXCJjZTJiNGI4Yi1lYTFiLTRiZDUtYTc0My04OWRiMGM4OTRkZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMzcsXG4gICAgICAyMjMsXG4gICAgICA2OSxcbiAgICAgIDIwLFxuICAgICAgMjMwLFxuICAgICAgMTY4LFxuICAgICAgMjIzLFxuICAgICAgMTQ4LFxuICAgICAgMjAsXG4gICAgICAxNjcsXG4gICAgICA5OCxcbiAgICAgIDE5OCxcbiAgICAgIDk0LFxuICAgICAgNDAsXG4gICAgICAxNzAsXG4gICAgICAyMzEsXG4gICAgICAzNyxcbiAgICAgIDQwLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTcwLFxuICAgICAgMTMzLFxuICAgICAgMTk5LFxuICAgICAgMTEsXG4gICAgICAxMzUsXG4gICAgICAyMjcsXG4gICAgICAzOSxcbiAgICAgIDYxLFxuICAgICAgMzgsXG4gICAgICAxMjEsXG4gICAgICAyMDAsXG4gICAgICAyNDUsXG4gICAgICAyMDQsXG4gICAgICAxMjMsXG4gICAgICAxNTQsXG4gICAgICA0OSxcbiAgICAgIDE3LFxuICAgICAgMjUyLFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhXV1hKV01XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM1MjUyNzQxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNDk4NzQwNzQ0NDIxOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHU2eklRQkVQV2lnTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJTHJza1JENlpSV2llSFR1R05Ia2Q5bzVLMVY5dUhHbTRnWkh3S3lZVTBBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhYQnhEMmJTYTFCSENYaVp3SWZSaDlhRjdGU0xrRzFoY21GRFRBTCt0RENnUlRQSjc4Sm5JRzB5TUwyTkVEV2hzZU9RZEZHSDlXOUVUYmhQQUVMZERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlQSFh0eDdwTllEcWtnZE1ZVHhVOXgwdldYT3V2b25RUlJxTWFxY2k3SU5TS0VCTCttSEZYZWZMOTlPV2dKSVY4S1BZR2RoUURMY0E3MG1yNUxHTUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzUyNTI3NDE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2NjI2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJmb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmZvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSk9yOGNaVWpLa3QyUDUrOENzSnNQVnFEazVoOXFIbWN0dmhkRVRYRE90OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzgwNzY3OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2NjI3MTExMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
