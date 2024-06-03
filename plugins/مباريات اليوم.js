const WhatsAPI = require('whatsapi');

// إعدادات البوت
const botNumber = '+994406151508'; // رقم الهاتف الخاص بك
const botName = '𝙳𝙰𝚉𝙰𝚒 𝙱𝙾𝚃'; // اسم البوت
const apiToken = 'YOUR_API_TOKEN'; // رمز_API الخاص بك

// إعدادات المباريات
const footballAPI = 'https://api.football-data.org/v2/matches'; // رابط API المباريات
const apiKey = 'YOUR_API_KEY'; // رمز_API الخاص بك

// إنشاء مثيل WhatsAPI
const wa = new WhatsAPI(botNumber, botName, apiToken);

// هاندلر WhatsAPI
const handler = {
  command: /^(مباريات اليوم)$/i,
  async execute(message) {
    const matches = await getTodayMatches();
    const messageText = `أهم المباريات اليومية:\n\n${matches.map((match) => `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}`).join('\n')}`;
    await wa.sendMessage(message.from, messageText);
  },
};

// دالة لجلب المباريات اليومية
async function getTodayMatches() {
  const response = await fetch(`${footballAPI}?date=${new Date().toISOString().split('T')[0]}`, {
    headers: {
      'X-Auth-Token': apiKey,
    },
  });
  const data = await response.json();
  const matches = data.matches;
  const importantMatches = matches.filter((match) => match.competition.name === 'English Premier League' || match.competition.name === 'La Liga' || match.competition.name === 'Bundesliga');
  return importantMatches;
}

// إضافة الهاندلر إلى WhatsAPI
wa.addHandler(handler);
