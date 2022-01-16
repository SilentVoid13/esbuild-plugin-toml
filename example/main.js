const tomlObject = require('example.toml');

console.log(tomlObject);
console.log(tomlObject.owner.name);
console.log(tomlObject.database.temp_targets.cpu);
console.log(tomlObject.servers.alpha.ip);
