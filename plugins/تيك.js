import { tiktokdl } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0] && m.quoted && m.quoted.text) {
    args[0] = m.quoted.text;
  }
  if (!args[0] &&!m.quoted) throw `Provide the TikTok video URL \n\nExample: https://vm.tiktok.com/ZMMPhv9Fb/`;
  if (!args[0].match(/tiktok/gi)) throw `Make sure the URL is a TikTok video URL`;

  let txt = 'I do not take responsibility for your video';

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;

    if (!url) throw `Failed to retrieve video URL`;

    await conn.sendMedia(m.chat, url, 'tiktok.mp4', txt, m);
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0]);
      await conn.sendMedia(m.chat, p.play, 'tiktok.mp4', txt, m);
    } catch {
      m.reply('*An unexpected error occurred*');
    }
  }
};

handler.help = ['tiktok'].map((v) => v + 'url>');
handler.tags = ['downloader'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))|تيك|تيكتوك$/i;

export default handler;
