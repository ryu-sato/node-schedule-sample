const { setTimeout } = require('timers/promises');

const schedule = require('node-schedule');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

schedule.scheduleJob('* * * * *', async () => {
  console.log(`Tick1: ${Date.now()}`);

  await setTimeout(60 * 1000);

  console.log(`Tick2: ${Date.now()}`);
});
