import { tiktokdl } from '@bochilteam/scraper';
import fg from 'api-dylux';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0] && m.quoted && m.quoted.text) {
    args[0] = m.quoted.text;
  }
  if (!args[0] &&!m.quoted) {
    return conn.sendMessage(m.chat, `اعطني الرابط \n\nمثال: https://vm.tiktok.com/ZMMPhv9Fb/`, m);
  }
  if (!args[0].match(/tiktok/gi)) {
    return conn.sendMessage(m.chat, `تأكد من ان الرابط رابط تيك توك`, m);
  }

  let txt = 'انا لا اتحمل ذنب اغانيك ';

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;

    if (!url) {
      throw new Error('Failed to retrieve video URL');
    }

    await conn.sendMedia(m.chat, url, 'tiktok.mp4', txt, m);
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0]);
      await conn.sendMedia(m.chat, p.play, 'tiktok.mp4', txt, m);
    } catch (err) {
      conn.sendMessage(m.chat, '*An unexpected error occurred*', m);
    }
  }
};

handler.help = ['tiktok'].map((v) => v + 'url>');
handler.tags = ['downloader'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))|تيك|تيكتوك$/i;

export default handler;
