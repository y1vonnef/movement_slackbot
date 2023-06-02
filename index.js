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

//add alt text for text
//9AM
await app.client.chat.scheduleMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.morningmsg,
  post_at: "1685716740",
});

await app.client.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL1,
  text: "",
  blocks: messages.twominstretch,
});

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

app.action("button_skip", async ({ action, ack, say }) => {
  await ack();
  await respond_msg("button_skip");
});

//Bot can automatically join public channels, but we need to manually invite it to a private channel
