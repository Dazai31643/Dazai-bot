let handler = async (m, { conn, args, usedPrefix, command }) => {
   var imageUrl = "Menu2.jpg";
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الـنـظـام',
                            title: 'اوامر',
                            description: '',
                            id: '.اوامر'
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title:'المطور',
                            description: '',
                            id: '.المطور'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['المهام']

export default handler
