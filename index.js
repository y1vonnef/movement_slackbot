import dotenv from "dotenv";
import { User, user_imglist } from "./messages.js";
import pkg from "@slack/bolt";
const { App, HTTPReceiver } = pkg;

dotenv.config();

const app = new App({
  receiver: new HTTPReceiver({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
    stateSecret: "my-secret",
    scopes: [
      "channels:join",
      "channels:read",
      "chat:write",
      "chat:write.customize",
      "chat:write.public",
      "incoming-webhook",
    ],
    unhandledRequestHandler: async ({ logger, response }) => {
      logger.info(
        "Acknowledging this incoming request because 2 seconds already passed..."
      );
      // acknowledge it anyway!
      response.writeHead(200);
      response.end();
    },
    dispatchErrorHandler: async ({ error, logger, response }) => {
      logger.error(`dispatch error: ${error}`);
      response.writeHead(404);
      response.write("Something is wrong!");
      response.end();
    },
    processEventErrorHandler: async ({ error, logger, response }) => {
      logger.error(`processEvent error: ${error}`);
      // acknowledge it anyway!
      response.writeHead(200);
      response.end();
      return true;
    },
    unhandledRequestTimeoutMillis: 2000, // the default is 3001
  }),
});

//Bolt uses express js under the hood
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("Bolt app is running");
})();

const currentTime = new Date().getTime();
// const time1 = Math.floor((currentTime + 0.5 * 60 * 1000) / 1000);
// const time2 = Math.floor((currentTime + 1 * 60 * 1000) / 1000);
// const time3 = Math.floor((currentTime + 1.5 * 60 * 1000) / 1000);
// const time4 = Math.floor((currentTime + 2 * 60 * 1000) / 1000);
// const time5 = Math.floor((currentTime + 2.5 * 60 * 1000) / 1000);
const time1 = Math.floor((currentTime + 0.5 * 60 * 1000) / 1000); //welcome  9:00AM
const time2 = Math.floor((currentTime + 3 * 60 * 60 * 1000) / 1000); //1st stretch 12:00PM
const time3 = Math.floor((currentTime + 5 * 60 * 60 * 1000) / 1000); //2nd stretch 14:00PM
const time4 = Math.floor((currentTime + 7 * 60 * 60 * 1000) / 1000); //3rd stretch 16:00PM
const time5 = Math.floor((currentTime + 9 * 60 * 60 * 1000) / 1000); //eod 18:00PM

const user_vera = new User("vera", "testuser1", user_imglist.vera);
const user_zoya = new User("zoya", "testuser2", user_imglist.zoya);
const user_nicole = new User("nicole", "testuser3", user_imglist.nicole);
const user_archana = new User("archana", "testuser4", user_imglist.archana);
const user_jacob = new User("jacob", "testuser5", user_imglist.jacob);
const user_a = new User("usera", "testuser6", user_imglist.meeku);
const user_b = new User("userb", "testuser7", user_imglist.meeku);
const user_c = new User("userc", "testuser8", user_imglist.meeku);
const user_d = new User("userd", "testuser9", user_imglist.meeku);
const user_e = new User("usere", "testuser10a", user_imglist.meeku);
const user_f = new User("userf", "testuser11", user_imglist.meeku); //Control channel
const user_g = new User("userg", "testuser12", user_imglist.meeku);

const user_group = [
  user_vera,
  user_zoya,
  user_nicole,
  user_archana,
  user_jacob,
  user_a,
  user_b,
  user_c,
  user_d,
  user_e,
  user_f,
  user_g,
];

//const user_group = [user_f];

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

//Where we send messages!
//TODO: change welcome to morning after the first day
// for (var i = 0; i < user_group.length; i++) {
//   var user = user_group[i];
//   await app.client.chat.scheduleMessage({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: user.channel,
//     text: "",
//     blocks: user.gen_welcome(),
//     post_at: time1,
//   });

//   await app.client.chat.scheduleMessage({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: user.channel,
//     text: "",
//     blocks: user.gen_stretch1(),
//     post_at: time2,
//   });

//   await app.client.chat.scheduleMessage({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: user.channel,
//     text: "",
//     blocks: user.gen_stretch2(),
//     post_at: time3,
//   });

//   await app.client.chat.scheduleMessage({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: user.channel,
//     text: "",
//     blocks: user.gen_stretch3(),
//     post_at: time4,
//   });

//   await app.client.chat.scheduleMessage({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: user.channel,
//     text: "",
//     blocks: user.gen_eod(),
//     post_at: time5,
//   });
// }

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

//nicole
app.action("button_completenicole", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_nicole, "button_complete");
});

app.action("button_snoozenicole", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_nicole, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipnicole", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_nicole, "button_skip");
});

//archana
app.action("button_completearchana", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_archana, "button_complete");
});

app.action("button_snoozearchana", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_archana, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skiparchana", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_archana, "button_skip");
});

//jacob
app.action("button_completejacob", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_jacob, "button_complete");
});

app.action("button_snoozejacob", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_jacob, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipjacob", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_jacob, "button_skip");
});

//usera
app.action("button_completeusera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_a, "button_complete");
});

app.action("button_snoozeusera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_a, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipusera", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_a, "button_skip");
});

//userb
app.action("button_completeuserb", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_b, "button_complete");
});

app.action("button_snoozeuserb", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_b, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipuserb", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_b, "button_skip");
});

//userc
app.action("button_completeuserc", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_c, "button_complete");
});

app.action("button_snoozeuserc", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_c, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipuserc", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_c, "button_skip");
});

//userd
app.action("button_completeuserd", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_d, "button_complete");
});

app.action("button_snoozeuserd", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_d, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipuserd", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_d, "button_skip");
});

//usere
app.action("button_completeusere", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_e, "button_complete");
});

app.action("button_snoozeusere", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_e, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipusere", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_e, "button_skip");
});

//userf
app.action("button_completeuserf", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_f, "button_complete");
});

app.action("button_snoozeuserf", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_f, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipuserf", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_f, "button_skip");
});

//userg
app.action("button_completeuserg", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_g, "button_complete");
});

app.action("button_snoozeuserg", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_g, "button_snooze");
});

//Add +1 to time skipped here
app.action("button_skipuserg", async ({ action, ack }) => {
  await ack();
  await respond_msg(user_g, "button_skip");
});
//Bot can automatically join public channels, but we need to manually invite it to a private channel
