import _translate from "./_translate.js"
const tradutor = _translate.plugins.owner_reporte
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `${tradutor.texto1[0]}\n*${usedPrefix + command} ${tradutor.texto1[1]} ${usedPrefix}play ${tradutor.texto1[2]}`;
  if (text.length < 10) throw tradutor.texto2;
  if (text.length > 1000) throw tradutor.texto3;
  const teks = `${tradutor.texto4[0]} wa.me/${m.sender.split`@`[0]}\n${tradutor.texto4[1]} ${text}\n*┴*`;
  conn.reply('201552413139@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('201552413139@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(tradutor.texto5);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(ابلاغ|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
