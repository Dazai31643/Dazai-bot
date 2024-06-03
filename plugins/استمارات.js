let handler = async (m, { conn, args, usedPrefix, command }) => {
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
                            header: 'استمارة الاستقبال 🎭',
                            title: 'اسـتـقـبـال',
                            description: '',
                            id: '.1'
                          },
                          {
                            header: 'استمارة الترحيب 🎊',
                            title:'الـتـرحـيـب',
                            description: '',
                            id: '.2'
                          },
                           {
                            header: 'استمارة النشر 🎩',
                            title:'استمارة النشر 🎩',
                            description: '',
                            id: '.3'
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
handler.command = ['اغوتي']

export default handler
