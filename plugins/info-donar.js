/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */
import _translate from "./_translate.js"
const tradutor = _translate.plugins.info_donar
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 ${tradutor.texto1[0]} 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ ${tradutor.texto1[1]} ${name}*
*┃*
*┃ ${tradutor.texto1[2]}*
*┃ ${tradutor.texto1[3]}*
*┃*
*┃ ${tradutor.texto1[4]}* 
*┃ ${tradutor.texto1[5]}*
*┃ ${tradutor.texto1[6]}*
*┃ ${tradutor.texto1[7]}* 
*┃ ${tradutor.texto1[8]}*  
*┃ ${tradutor.texto1[9]}* 
*┃*
*┃ ${tradutor.texto1[10]}* 
*┃ ${tradutor.texto1[11]}* 
*┃ ${tradutor.texto1[12]}* 
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
