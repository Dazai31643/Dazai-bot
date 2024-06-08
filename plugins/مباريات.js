handler.help = ['yallashoot'];
handler.tags = ['matches'];
handler.command = /^(مباريات)$/i;

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  const apiEndpoint = 'https://api.yallashoot.com/v1/matches/schedule';
  try {
    const response = await axios.get(apiEndpoint);
    const matches = response.data.matches;
    let message = `Today's match schedule:\n`;
    matches.forEach(match => {
      message += `- ${match.home_team} vs ${match.away_team} at ${match.time}\n`;
    });
    await conn.reply(m.chat, message, m);
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, `Error: ${error.message}`, m);
  }
};
