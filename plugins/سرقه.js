import {addExif} from '../lib/sticker.js';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.sticker_wm
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*😉 اعمل ريب علي الملصق الي عاوز تسرقه*'
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*😉 اعمل ريب علي الملصق الي عاوز تسرقه*';
    const img = await m.quoted.download();
    if (!img) throw '*😉 اعمل ريب علي الملصق الي عاوز تسرقه*'
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*حدث خطأ يرجي اعادة المحاوله لاحقا..*'
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^حقوق|سرقه|سرقة$/i;
export default handler;
