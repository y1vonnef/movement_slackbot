const vera = {
  welcome:
    "https://drive.google.com/file/d/12bYzm8ilYkNoltwJFNzJGs6fV0zc_0dz/view?usp=drive_link",
  morning:
    "https://drive.google.com/file/d/1oyCAkHZuQbW9rYlYK2rcMkB7ZDs7_61n/view?usp=drive_link",
  stretch:
    "https://drive.google.com/file/d/1zhRxkRExvI1ZjWp_RnzcfJRsWXuTizkE/view?usp=drive_link",
  snooze:
    "https://drive.google.com/file/d/18kkjlW7JZLnqAvNtsnhA3-G9znSfCRZh/view?usp=drive_link",
  skip1:
    "https://drive.google.com/file/d/1sNt7t_XAJjTsqXxLECj-ZCnMoSoMdUXg/view?usp=drive_link",
  skip2:
    "https://drive.google.com/file/d/1wuzBkpPOIgRM1EBDynqqS7ncMPmQG7cB/view?usp=drive_link",
  eod: "https://drive.google.com/file/d/1AozOr5JAErfXudYCp7tm5w0Fq2RMXJ7X/view?usp=drive_link",
  complete:
    "https://drive.google.com/file/d/1CWDfZFjw7d0Fl-M2NWU_HfZKLZ4ECTUG/view?usp=drive_link",
};

const zoya = {
  welcome:
    "https://drive.google.com/file/d/15y0cCXnBaDxfQP-WsTzP0u7uJgc3POQK/view?usp=drive_link",
  morning:
    "https://drive.google.com/file/d/1CO_KJ7Dge26NXj12MnOB8Up05ZInK1mS/view?usp=drive_link",
  stretch:
    "https://drive.google.com/file/d/1dmWJ0RojqcXqrEUtqieT2as6wXJXv0VS/view?usp=drive_link",
  snooze:
    "https://drive.google.com/file/d/17ggDygAxaZILzYRmTLF1RL2weJ90jq-S/view?usp=drive_link",
  skip1:
    "https://drive.google.com/file/d/1th0U31qsNnHOGqCIAHNL0p0vXoXGbljV/view?usp=drive_link",
  skip2:
    "https://drive.google.com/file/d/19KX4aTt9mMsTVdbP_yhWzaoPqWtRBiAH/view?usp=drive_link",
  eod: "https://drive.google.com/file/d/1IZl5706fWjt9KOdK7P9mNj0N76Mx0HrH/view?usp=drive_link",
  complete:
    "https://drive.google.com/file/d/1ZQeNV6EuNXnPpDP4pLmwAXEsrH9t4Z-3/view?usp=drive_link",
};

//initialize users
//move this class code to messages.js
class User {
  constructor(name, channel, imglist) {
    this.name = name;
    this.channel = channel;
    this.imglist = imglist;
    this.time_skipped = 0;
  }

  gen_welcome() {
    return [
      {
        type: "divider",
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "",
          emoji: true,
        },
        image_url: this.imglist.welcome,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: ":robot_face: Welcome to Meeku, your neck-stretching companion! :tada::muscle:",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "This week, we're all about neck stretches. Get ready to pamper your neck and experience the joy of a relaxed, flexible spine. Let's make neck stretches the star of your fitness routine! :star2::mechanical_arm:",
            emoji: true,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Get ready to unleash the power of a happy, stretchy neck. Welcome to Meeku! :rocket::hugging_face:",
            emoji: true,
          },
        ],
      },
      {
        type: "divider",
      },
    ];
  }

  gen_stretch() {
    return [
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "",
          emoji: true,
        },
        image_url: this.imglist.stretch,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "2 min stretch message!",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Give your neck the care it deserves with our rejuvenating 2-minute stretch session!",
            emoji: true,
          },
        ],
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Work out now",
            },
            style: "primary",
            value: "click_me_123",
            action_id: "button_complete",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Snooze",
            },
            value: "click_me_123",
            action_id: "button_snooze",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Skip",
            },
            style: "danger",
            value: "click_me_123",
            action_id: "button_skip",
          },
        ],
      },
    ];
  }

  gen_skip1() {
    return [
      {
        type: "divider",
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Skip the neck stretch?* \n\n Your neck is giving you the bombastic side-eye. Show it some love!",
        },
        accessory: {
          type: "image",
          image_url: this.imglist.skip1,
          alt_text: "avatar",
        },
      },
    ];
  }

  gen_skip2() {
    [
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "Skipped two sessions",
          emoji: true,
        },
        image_url: this.imglist.skip2,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Uh-oh! We’ve got a case of the neck neglector here! What’s the deal? ",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Why did you skip?",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select a reason",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "I’m busy as a bee",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Got late to work today",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Other",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "static_select-action",
        },
      },
    ];
  }

  gen_eod() {
    return [
      {
        type: "divider",
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "",
          emoji: true,
        },
        image_url: this.imglist.eod,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: ":robot_face: You rocked it, superstar! Meeku is beaming with pride! :tada::muscle:",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Your accomplishments today are ------- absolutely incredible!\n Take a moment to revel in success :star2::fire:",
            emoji: true,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Rest up, recharge, and get ready to conquer tomorrow with the same determination.:crescent_moon::rocket:",
            emoji: true,
          },
        ],
      },
      {
        type: "divider",
      },
    ];
  }

  gen_snooze() {
    return [
      {
        type: "divider",
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*I never pictured you to be a snoozer!* \n\n A few moments of stretching can work wonders for your neck, helping you feel refreshed and ready to tackle the day. So, let's give those neck muscles a wake-up call and start the day on the right note in 10 min!",
        },
        accessory: {
          type: "image",
          image_url: this.imglist.snooze,
          alt_text: "avatar",
        },
      },
    ];
  }

  gen_morning() {
    [
      {
        type: "divider",
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "",
          emoji: true,
        },
        image_url: this.imglist.morning,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: ":robot_face: Good morning, superstar! Meeku is here to turbocharge your day! :sun_with_face:",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Get ready to unleash your inner awesomeness and make today absolutely epic! :boom::rocket: Take a deep breath, put on your game face, and let's conquer the world together with stretches! You've got this! :smile::dizzy:",
            emoji: true,
          },
        ],
      },
      {
        type: "divider",
      },
    ];
  }

  gen_complete() {
    [
      {
        type: "image",
        title: {
          type: "plain_text",
          text: "",
          emoji: true,
        },
        image_url: this.imglist.complete,
        alt_text: "avatar",
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Whoop! Whoop! Look at you, neck exercise champion! You conquered the workout like a boss.",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Victory dance or a gentle neck stretch to celebrate? It’s your call. Keep up the fantastic work!",
            emoji: true,
          },
        ],
      },
    ];
  }
}

const user_vera = new User("Vera", "testuser1", vera);
const user_zoya = new User("Zoya", "testuser2", zoya);

export const user_group = [user_vera, user_zoya];
