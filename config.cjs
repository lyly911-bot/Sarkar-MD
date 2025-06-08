// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0t6dnExaWkrMGRRVVFobFV3TUN5SnlEUHU1UlFJejNTY3ByU3ZJWTBFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEwxWTZTRkNSSVlIL1ZnUVRCSHVKSEJqQnF0QWFGQjFUVGtaUTJXcW14ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQm11VHhsT2dqMTRRYVJYb3Z5TzBCWXhTbU5JaGNPOUpacVJsd0d6WkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJVmpQSkVrYXA5Y0VVUERtanBVNE5YVWIwWkkzeDByem1yYnI2bXFSYmkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGSGN6dDRXTjRJU1J1OTQvMXZJYkJqenVsSExjc25YRUg2MElXV2cySG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhONFk2ODIvMWZ2UmVIVVAyTXRhV1ZXbDhvcUpaei81K0UraFJ4K3ZGekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0t3SkFOMWxZbGVSSG8ydjcxNEFKRHJrNVl1SWRUNVFqMXhxdk9icjRtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWw3TXJUbmhpbWZwV0p0STR2N1d3dkZOQUIrdUNDNlV5bWd0aGU5dDhGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo3RFdnNnpDQnZScE9LakdwS2FoZ0UzdTc1eGhlTWRCYzdFT3ExckJZd2ROWkJ2eE1oWHJtUWtZb2lNNmxqMEJLYjJtNVphYW1OVXUwOE1NbWZlMERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJJekVDb2V2UThxcWZESXY4MTZwdTYvdlY1WWZhUVBBQkJETnJtMkxpWE9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjM0OTAxMjQ2NDAxMjoxMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwMjk1NDc5NTI5NDkwNToxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvbjRMTURFUCt3azhJR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhvOFFsdlMrY1VjQnhyeTY1SXcyZkpzUk96bE9NY1FNTTFsTm00NkVyUm89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJSUE1BT0V4VHdJVnBHMlI5VnRyTWhUTXNSNjR2U1BtRml5U2Nhb0YzdUtkZXRKbDErUnNrNnllWXpraDV2UUQyTlZjT0txYzlOWVVCczg1NDdBRkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNbjJwcnVwc20xVmY3bzhCZ0pMQ2xBdkFXaWx5Z0tPeE1CbmlmeW1GMkZYZ05FN1I3Z0tETlRwendBaURhNmdCeEtuNGNHQmV1SjZwM01Nc0RqUEZEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTI0NjQwMTI6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjZQRUpiMHZuRkhBY2E4dXVTTU5ueWJFVHM1VGpIRURETlpUWnVPaEswYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5MzQyMzM5LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTFuIn0=",
  PREFIX: process.env.PREFIX || ',',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'false' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "❌G҉O҉D҉W҉I҉N҉❌",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2349012464012",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
