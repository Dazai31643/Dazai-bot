// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js
import _translate from "./_translate.js" // Chamando o Modulo
const tradutor = _translate.plugins._antiprivado // Acessar somente os texto _antiprivado
   // Para configurar o idioma, na raiz do projeto altere o arquivo config.json
  // Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
  // To set the language, in the root of the project, modify the config.json file.

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(tradutor.texto1, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
