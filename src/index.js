require('dotenv').config()

const axios = require("axios");
const cors = require('cors')

// check if relaxed

const DISCORD_API_BASE_URL = "https://discord.com/api/v10"
const API_KEY = process.env.PUBLIC_KEY;
const APPLICATION_ID = process.env.APPLICATION_ID;
const TOKEN = process.env.TOKEN;
const CHAN_ID = process.env.CHAN_ID;
const MESSAGE = "hi";

async function sendMessage(CHAN_ID, message) {
    try {
      const response = await axios.post(
        `${DISCORD_API_BASE_URL}/channels/${CHAN_ID}/messages`,
        { content: message },
        {
          headers: {
            Authorization: `Bot ${TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
    //   console.log('Message sent successfully:', response.data);
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
    }
  }

function main() {

    sendMessage(CHAN_ID, MESSAGE);

}

main();

// sendMessage(CHAN_ID, MESSAGE);