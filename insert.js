const fs = require('fs');

const key = process.argv[2];
const value = process.argv[3];
const row = `${key}:${value}`;

fs.appendFileSync('db.txt', `${row}\n`);

console.log(`Row "${row}" was inserted successfully`);
