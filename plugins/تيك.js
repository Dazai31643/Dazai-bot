//مقدمه من قناه Zoro Codes ' https://whatsapp.com/channel/0029VaYMyqu4CrfgGRLXfv3c '
import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*يجب عليك إعطاء رابط أي فيديو أو صورة من TikTok*`;
  m.reply('*الرجاء الانتظار...*');

  try {
    let mediaURL = await zoro(text);

    if (!mediaURL) throw 'لم يتم العثور على فيديو للرابط المعطى';

    conn.sendFile(m.chat, mediaURL, '', 'هذا هو الفيديو ⚡', m, false, { mimetype: 'video/mp4' });
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }
};

async function zoro(text) {
  let res = await fetch(`https://api-me-4ef1b6491458.herokuapp.com/api/tiktok?url=${encodeURIComponent(text)}`);
  if (!res.ok) return false;

  const fileName = 'Zoro_tiktok_video.mp4';
  const fileStream = fs.createWriteStream(fileName);
  res.body.pipe(fileStream);

  await new Promise((resolve, reject) => {
    fileStream.on('finish', resolve);
    fileStream.on('error', reject);
  });

  return fileName;
}

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(تيكتوك|تيك)$/i;

export default handler;
