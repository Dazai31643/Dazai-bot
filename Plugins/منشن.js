let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير دازاي
let pesan = args.join` `
let oi = `*الرساله:* ${pesan}`
let teks = `*  * \n\n ${oi}\n\n*🌀┇االاعضاء :⇣*\n`
for (let mem of participants) {
teks += `*تفاعل ↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝐷𝐴𝑍𝐴𝐼-𝐵𝛩𝑇*\n\n*𝐷𝐴𝑍𝐴𝐼*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
