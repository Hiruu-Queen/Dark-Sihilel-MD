const fs = require('fs')
const chalk = require('chalk')

//Api Website\\ 
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '5b6a9902b1',
}


global.OWNER_REACT = 'πΈ'
global.REACT_NUMBER = '94704101989'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94704101989'] //ur owner number
global.ownername = "ΰΌΊS_I_H_I_L_E_LΰΌ» " //ur owner name
global.ytname = "YT: Haven't Channel" //ur yt chanel name
global.socialm = "GitHub: HIRUU-QUEEN" //ur github or insta name
global.location = "Sri Lanka, Matara, Deiyandara." //ur location

//bot bomdy 
global.owner = ['704101989']
global.ownertag = '704101989' //ur tag number
global.botname = 'π₯ΰΌΊπππππβ¬πππππΰΌ»π₯' //ur bot name
global.linkz = "https://github.com/Hiruu-Queen/Dark-Sihilel-MD.git" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/Hiruu-Queen/Dark-Sihilel-MD.git" //ur website to be displayed
global.botscript = 'https://github.com/Hiruu-Queen/Dark-Sihilel-MD.git' //script link
global.reactmoji = "π" //ur menu react emoji
global.themeemoji = "π§" //ur theme emoji
global.packname = "β₯οΈS_I_H_I_L_E_Lβ₯οΈ" //ur sticker watermark packname
global.author = "β₯οΈHIRUU-QUEENβ₯οΈ" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/Sihilel.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Sihilel.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/Sihilel.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Sihilel.jpg") //ur thumb pic

//damtabase
global.premium = ['704101989'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','π¦','π€','π','sh','/']
global.sp = 'π'
global.mess = {
    success: 'Done β',
    admin: 'This Feature Is Only For Admin! π₯',
    botAdmin: 'Bot Must Be Admin First! π₯Ί',
    owner: 'This Feature Is Only For Owner! π',
    group: 'Feature Used Only For Groups! π«',
    private: 'Features Used Only For Private Chat! π«',
    bot: 'This Feature Is Only For Bot π',
    wait: 'In wait β',
    linkm: 'Where is the link? π€',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the ownerπ₯΅, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this groupπ₯΅, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/Sihilel.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
