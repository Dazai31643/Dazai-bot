//هه
// هه
// هه

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^دازاي سان|دازاي$/i.test(m.text)) { 
     responses = [ 
'*هلا🌚❤*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير دامك بخير*'
     ]; 
   }else if (/^اورهارا|فانتياس|دوما|غوجو$/i.test(m.text)) { 
     responses = [ 
'*اعز الناس ❤*'
   ]; 
   }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
'*يمكن 🌚❤*',
'*اكيد برو ❤*',
'*احب دازاي بس 😉*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهك حبي 🙁*',
'*لا بس لا تتعب نفسك  عشان احبك 🤨*',
'*اي اكرهك ☻*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*انا اكثر🌚❤*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'حره دائما وابدا 🇵🇸'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*اذا تحبني وتحب دازاي فانا اعشقك🌚❤*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'مدري',  

     ];
     }else if (/^وينه البوت$/i.test(m.text)) { 
     responses = [ 
       'موجود',  

     ];
     }else if (/^بوت|بوت$/i.test(m.text)) { 
     responses = [ 
       '*ليا اسم يا عسل🐤*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*نورت*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/Dazai$/i.test(m.text)) { 
     responses = [ 
       '*عمك*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
     '*مرحبا🧸*',  
     ];
   
   }else if (/^مين عمك$/i.test(m.text)) { 
     responses = [ 
       '*كريستيانو 🇵🇹🐐*',  
     ];
      }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
