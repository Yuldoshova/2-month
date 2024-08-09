import os from "os"

console.log('Platforma:', os.platform())
console.log('Arxitektura:', os.arch())
console.log('CPU:', os.cpus())
console.log('Umumiy xotira:', os.totalmem())
console.log('Bo\'sh xotira:', os.freemem())
console.log('Tarmoq interfeyslari:', os.networkInterfaces())
console.log('Tizim ish vaqti:', os.uptime())
console.log('Temp katalogi:', os.tmpdir())
console.log('Host nomi:', os.hostname())