function qrcode(ok){
  var qrChartUrl = "http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl="+ok+"&chld=H|0"
} return qrcode(ok)

var qr = qrcode(message)
Api.sendPhoto({
  photo: qr,
  caption: "<b>📝 Here Is Your QR Code With Text: " +message + "\n\n🆔 QR Code Generated By @" + bot.name + "</b> ",
  parse_mode: "HTML"
})

publish({ 
  MakeQr: qrcode
})
