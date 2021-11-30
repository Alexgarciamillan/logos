const { 
    WAConnection,
    MessageType,
    Presence, 
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    ChatModification,
    waChatKey,
    WA_DEFAULT_EPHEMERAL,
    mentionedJid,
    prepareMessageFromContent, 
    Browsers,
    processTime
    } = require("@adiwajshing/baileys")
//
const fs = require('fs');
const prefix = '.'
const { color } = require("./lib/color");
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
//
async function iniciar () { 
	const senpai = new WAConnection()
        senpai.logger.level = 'warn'
        senpai.version = [2, 2143, 3]
	console.log('>', color('INFO','blue'),'Escanea el código ( qr ) a continuación...')
	senpai.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el código qr'))
	})

	fs.existsSync('./session.json') && senpai.loadAuthInfo('./session.json')
	senpai.on('connecting', () => {
	console.log(color('> INFO ', 'white'), color('Conectando...'))
	})
	senpai.on('open', () => {
	console.log(color('> INFO ', 'white'), color('Conectado'))
	})
		await senpai.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(senpai.base64EncodedAuthInfo(), null, '\t'))
  
senpai.on('chat-update', async (mek) => {
try {	  
if (!mek.hasNewMessage) return
if (!mek.messages) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return

mek = mek.messages.all()[0]
if (!mek.message) return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]        
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(mek.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || ""
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

const reply = (teks) => {	
          senpai.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})
          }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
                    }

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = senpai.user.jid
const botNumber = senpai.user.jid.split("@")[0]
const ownerNumber = ['522213261679@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? senpai.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = mek.key.fromMe ? senpai.user.jid : senpai.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? senpai.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
senpai.sendMessage(from, '*Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo?*', text, {quoted: mek, sendEphemeral: true})
break
case 'hola':
senpai.sendMessage(from, '*Hola, ¿Como estás?*', text, {quoted: mek, sendEphemeral: true})
break
case 'bien':
senpai.sendMessage(from, '*oh me alegro, yo súper*', text, {quoted: mek, sendEphemeral: true})
break
case 'gracias':
senpai.sendMessage(from, '*de nada, para servirte 🙇*', text, {quoted: mek, sendEphemeral: true})
break
case ':b':
senpai.sendMessage(from, '*:D*', text, {quoted: mek, sendEphemeral: true})
break
case 'menu':
senpai.sendMessage(from, '*Hola, esto es solo una base de bot, pronto estara completo :D*', text, {quoted: mek})
break
}

.catch (err => console.log("unexpected error: " + err))
default:

if (budy.startsWith('$')){
                        if (!isMe) return 
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderme.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderme.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }

                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ PRIV]', 'red'), 'DE', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
}
iniciar ()
