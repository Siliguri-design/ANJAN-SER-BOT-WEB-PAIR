const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

IMG: process.env.IMG=`https://i.imgur.com/ltPPMTh.jpeg`,
CAPTION: process.env.CAPTION=`*»͜͡𝐀𝐍𝐉𝐀𝐍-𝐒𝐄𝐑-𝐁𝐎𝐓☪︎ੵ᷒ᰰ 𝐒𝐄𝐒𝐒𝐈𝐎𝐍-𝐈𝐃*\n\n_🪄 ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ_`,
//----------------------------------------------------------------------------------------

EMAIL: process.env.EMAIL=`dharanjan22@gmail.com`,
PASS: process.env.PASS=`dharanjan22@gmail.com`,
    
};
