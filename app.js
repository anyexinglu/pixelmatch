const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("./index");

const img1 = PNG.sync.read(fs.readFileSync("./test/fixtures/1a.png"));
const img2 = PNG.sync.read(fs.readFileSync("./test/fixtures/1b.png"));

const { width, height } = img1;

const diff = new PNG({ width, height });

const result = pixelmatch(img1.data, img2.data, diff.data, width, height, {
  threshold: 0.1
});

console.log("...wh", width, height, result);

fs.writeFileSync("diff.png", PNG.sync.write(diff));
