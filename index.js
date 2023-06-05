import pkg from "@slack/bolt";
import dotenv from "dotenv";
import { User, user_imglist } from "./messages.js";
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
const time1 = Math.floor((currentTime + 0.5 * 60 * 1000) / 1000);
const time2 = Math.floor((currentTime + 1 * 60 * 1000) / 1000);
const time3 = Math.floor((currentTime + 1.5 * 60 * 1000) / 1000);
const time4 = Math.floor((currentTime + 2 * 60 * 1000) / 1000);
const time5 = Math.floor((currentTime + 2.5 * 60 * 1000) / 1000);

const user_vera = new User("vera", "testuser1", user_imglist.vera);
const user_zoya = new User("zoya", "testuser2", user_imglist.zoya);

const user_group = [user_vera, user_zoya];

//define some functions
//conditional based on action_id
//another input is channel, probably need an object to keep track
async function respond_msg(user, id) {
  if (id === "button_skip") {
    user.time_skipped += 1;
    console.log(user.time_skipped);
  }
  app.client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks:
      id === "button_complete"
        ? user.gen_complete()
        : id === "button_snooze"
        ? user.gen_snooze()
        : id === "button_skip" && user.time_skipped <= 1
        ? user.gen_skip1()
        : id === "button_skip" && user.time_skipped >= 2
        ? user.gen_skip2()
        : "unknown",
  });
}

//add alt text for text
//TODO: change welcome to morning after the first day
for (var i = 0; i < user_group.length; i++) {
  var user = user_group[i];
  await app.client.chat.scheduleMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks: user.gen_welcome(),
    post_at: time1,
  });

  await app.client.chat.scheduleMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks: user.gen_stretch(),
    post_at: time2,
  });

  await app.client.chat.scheduleMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks: user.gen_stretch(),
    post_at: time3,
  });

  await app.client.chat.scheduleMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks: user.gen_stretch(),
    post_at: time4,
  });

  await app.client.chat.scheduleMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: user.channel,
    text: "",
    blocks: user.gen_eod(),
    post_at: time5,
  });
}

//Vera
app.action("button_completevera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_vera, "button_complete");
});

app.action("button_snoozevera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_vera, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipvera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_vera, "button_skip");
});

//Zoya
app.action("button_completezoya", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_zoya, "button_complete");
});

app.action("button_snoozezoya", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_zoya, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipzoya", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_zoya, "button_skip");
});
//Bot can automatically join public channels, but we need to manually invite it to a private channel
