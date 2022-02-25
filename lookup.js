const fs = require('fs');

const key = process.argv[2];

const data = fs.readFileSync('db.txt', 'utf-8').split('\n');

const result = data.find(l => l.startsWith(`${key}:`));

console.log(`Value for key "${key}" was: "${result.split(':')[1]}"`);
