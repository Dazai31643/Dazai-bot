import _translate from "./_translate.js"
const tradutor = _translate.plugins.info_instalarbot
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1}`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': tradutor.texto2,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
