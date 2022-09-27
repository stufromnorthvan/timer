const args = process.argv.slice(2).sort(function(a, b){return a - b})


let timer = function(args) {
  for (let time of args) {
    setTimeout(() => {
      process.stdout.write('\x07');}
      , time * 1000);
  }
};

timer(args);


