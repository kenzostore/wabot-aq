let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [Tanya Owner]
│ • Telkomsel [Tanya Owner]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Tanya Owner
│ • halloooo tanya owner aja
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
