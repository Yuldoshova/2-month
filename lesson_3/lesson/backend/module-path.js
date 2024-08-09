import path from "path"

const filePath = '/backend/data/users.json';

console.log("Basename:", path.basename(filePath))
console.log("Dirname:", path.dirname(filePath))
console.log("Extname:", path.extname(filePath))

console.log(path.join(filePath,'user' ,'users.json'))