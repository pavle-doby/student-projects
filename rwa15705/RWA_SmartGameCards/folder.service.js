var faker = require('faker');

var db = { folder: [] };

for (var i=1; i<=25; i++) {
  db.folder.push({
    id: i,
    pojam: "pojam " + i,
    definicija: "defincija " + i,
    tezina: Math.floor(Math.random()*100+1)/10
  });
}

console.log(JSON.stringify(db));
