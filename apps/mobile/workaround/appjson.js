const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const plist = require('plist');
const { red, cyan } = require('chalk');

const appJson = require('../app.json');

const androidName = () => {
  const file = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res', 'values', 'strings.xml');
  if (!appJson.displayName) return;
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const $ = cheerio.load(data, { xmlMode: true });
    const el = $('[name="app_name"]');
    if (el.text() !== appJson.displayName) {
      console.log(cyan('\nUpdating Android App name based on "app.json"\n'));
      el.text(appJson.displayName);
      fs.writeFile(file, $.xml(), (err) => {
        if (err) throw err;
      });
    }
  });
};

const iosName = () => {
  const file = path.join(__dirname, '..', 'ios', 'Mobile', 'Info.plist');
  if (!appJson.displayName) return;
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const doc = plist.parse(data.toString());

    if (doc.CFBundleDisplayName !== appJson.displayName) {
      console.log(cyan('\nUpdating iOs App name based on "app.json"\n'));
      doc.CFBundleDisplayName = appJson.displayName;
      fs.writeFile(file, plist.build(doc), (err) => {
        if (err) throw err;
      });
    }
  });
};

const main = () => {
  androidName();
  iosName();
  // more to come to automate for a whitelabel project
};

try {
  main();
} catch (error) {
  console.log('');
  console.log(red(String(error)));
  console.log('');
}
