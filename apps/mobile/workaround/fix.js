const util = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFile);

async function fixIosBuild() {
  const src = './find-node.sh';
  const target = '../node_modules/react-native/scripts/find-node.sh';
  const exec = copyFilePromise(
    path.join(__dirname, src),
    path.join(__dirname, target)
  );
  exec.then(() => console.log('done'));
  exec.catch(console.error);
}

try {
  fixIosBuild();
} catch (error) {
  console.log(error);
}
