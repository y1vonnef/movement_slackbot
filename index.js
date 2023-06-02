import pkg from "@slack/bolt";
import dotenv from "dotenv";
import { messages } from "./messages.js";
const { App } = pkg;

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

//Bolt uses express js under the hood
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("Bolt app is running");
})();

const currentTime = new Date().getTime();
const time1 = Math.floor((currentTime + 2 * 60 * 1000) / 1000);
const time2 = Math.floor((currentTime + 4 * 60 * 1000) / 1000);
const time3 = Math.floor((currentTime + 6 * 60 * 1000) / 1000);
const time4 = Math.floor((currentTime + 8 * 60 * 1000) / 1000);
const time5 = Math.floor((currentTime + 10 * 60 * 1000) / 1000);

var times_skipped = 0;

//add alt text for text
// Test user 1 Vera
await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.morningmsg,
  post_at: time1,
});

await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.twominstretch,
  post_at: time2,
});

await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.twominstretch,
  post_at: time3,
});

await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.twominstretch,
  post_at: time4,
});

await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.eod,
  post_at: time5,
});

// Test user 2 Zoya
// await app.client.chat.scheduleMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL1,
//   text: "",
//   blocks: messages.morningmsg,
//   post_at: time1,
// });

// await app.client.chat.scheduleMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL1,
//   text: "",
//   blocks: messages.twominstretch,
//   post_at: time2,
// });

// await app.client.chat.scheduleMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL1,
//   text: "",
//   blocks: messages.twominstretch,
//   post_at: time3,
// });

// await app.client.chat.scheduleMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL1,
//   text: "",
//   blocks: messages.twominstretch,
//   post_at: time4,
// });

// await app.client.chat.scheduleMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL1,
//   text: "",
//   blocks: messages.eod,
//   post_at: time5,
// });

//conditional based on action_id
//another input is channel, probably need an object to keep track
async function respond_msg(id) {
  app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL1,
    text: "",
    blocks:
      id === "button_complete"
        ? messages.complete
        : id === "button_snooze"
        ? messages.snooze
        : id === "button_skip"
        ? messages.skip1
        : "unknown",
  });
}

//Basic messaging logic
app.action("button_complete", async ({ action, ack, say }) => {
  await ack();
  await respond_msg("button_complete");
});

app.action("button_snooze", async ({ action, ack, say }) => {
  await ack();
  await respond_msg("button_snooze");
});

//Add +1 to time skipped here
app.action("button_skip", async ({ action, ack, say }) => {
  await ack();
  await respond_msg("button_skip");
});

//Bot can automatically join public channels, but we need to manually invite it to a private channel
