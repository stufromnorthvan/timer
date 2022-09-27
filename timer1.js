const args = process.argv.slice(2).sort(function(a, b){return a - b}).filter(word => word > 0 && word !== NaN)

let timer = function(args) {
  if (args.length === 0) {
    return;
  }
  for (let time of args) {
    setTimeout(() => {
      process.stdout.write('\x07');}
      , time * 1000);
  }
};

timer(args);


