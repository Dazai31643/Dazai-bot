handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))|تيك|تيكتوك$/i
handler.limit = 1

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  if (!text) return conn.reply(m.chat, `*عاوز تحميل ايه يحب ؟🤔*\n*ضيف رابط الفديو يحب*\n*مثال:*\n*${usedPrefix + command} https://www.tiktok.com/@ox__zoro__ox?_t=8ggRMe37f9y&_r=1*`, m)
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*رابط التيكتوك غير صحيح*`, m)
  try {
    await conn.reply(m.chat, `⌛ _جاري الارسال..._\n▰▰▱▱▱\nالفديو بيتبعت ( احب افكرك انا خالي المسئولية من ذنوب اغانيك ) 🔰`, m)
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
     .catch(async _ => await tiktokdlv2(args[0]))
     .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) return conn.reply(m.chat, `*اوووف, خطأ أثناء محاولة تنزيل الفيديو ، يرجى المحاولة مرة أخرى*`, m)
    // هنا هو المكان الذي يجب أن ترسل الملف من هنا
    conn.sendMessage(m.chat, { video: { url: url }, caption: `*تمت المهمة* 🫡💚`.trim() }, { quoted: m })
  } catch {
  }
}
