import yts from 'yt-search';
import fs from 'fs';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.buscador_yts
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, text}) => {
  if (!text) throw `⚠️ *${tradutor.texto1}*`;
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_${tradutor.texto2[0]}_* ${v.url}
↳ 🕒 *_${tradutor.texto2[1]}_* ${v.timestamp}
↳ 📥 *_${tradutor.texto2[2]}_* ${v.ago}
↳ 👁 *_${tradutor.texto2[3]}_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
