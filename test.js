var cron = require('node-cron');
console.log("starting ...")
cron.schedule("1 * * * * *", () => {
  console.log(`this message logs every minute`);
});