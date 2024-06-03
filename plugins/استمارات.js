let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        imageMessage: {
          url: 'https://telegra.ph/file/c91d0366e69b33f7e3618.jpg' // <-- Add the URL of your image here
        },
        interactiveMessage: {
          header: {
            type: 'image',
            imageUrl: 'https://telegra.ph/file/c91d0366e69b33f7e3618.jpg', // <-- Add the URL of your image here
            buttons: [
              {
                buttonId: '.1',
                buttonText: {
                  displayText: 'اسـتـقـبـال'
                }
              },
              {
                buttonId: '.2',
                buttonText: {
                  displayText: 'الـتـرحـيـب'
                }
              },
              {
                buttonId: '.3',
                buttonText: {
                  displayText: 'استمارة النشر 🎩'
                }
              }
            ]
          },
          body: {
            text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
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
