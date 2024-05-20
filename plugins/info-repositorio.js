import moment from 'moment-timezone';
import fetch from 'node-fetch';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.info_repositorio
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, args, usedPrefix }) => {
   const res = await fetch('https://api.github.com/repos/BrunoSobrino/TheMystic-Bot-MD');
   const json = await res.json();
   let txt = `${tradutor.texto1[0]}\n\n`;
      txt += `${tradutor.texto1[1]} ${json?.name || tradutor.texto1[2]}\n\n`;
      txt += `${tradutor.texto1[3]} ${json?.watchers_count || '-'}\n\n`;
      txt += `${tradutor.texto1[4]} ${(json?.size / 1024).toFixed(2) || '-'} MB\n\n`;
      txt += `${tradutor.texto1[5]} ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n\n`;
      txt += `${tradutor.texto1[6]} ${json?.html_url || tradutor.texto1[7]}\n\n`;
      txt += `${json?.forks_count || '-'} ${tradutor.texto1[8]} ${json?.stargazers_count || '-'} ${tradutor.texto1[9]} ${json?.open_issues_count || '-'} ${tradutor.texto1[10]}`;
      txt += `${tradutor.texto1[11]}\n_${usedPrefix}gitclone ${json?.html_url || 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'}_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});
};
handler.command = ['script', 'repositorio', 'repo']
export default handler;
