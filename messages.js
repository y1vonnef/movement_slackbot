const image_vera = {};

const welcomemsg = [
  {
    type: "divider",
  },
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "I Need a Marg",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

const twominstretch = [
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "I Need a Marg",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

const skip1 = [
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
      image_url:
        "https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
      alt_text: "cute cat",
    },
  },
];

const skip2 = [
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "Skipped two sessions",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

const eod = [
  {
    type: "divider",
  },
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "I Need a Marg",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

const snooze = [
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
      image_url:
        "https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
      alt_text: "cute cat",
    },
  },
];

const morningmsg = [
  {
    type: "divider",
  },
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "I Need a Marg",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

const complete = [
  {
    type: "image",
    title: {
      type: "plain_text",
      text: "Skipped two sessions",
      emoji: true,
    },
    image_url:
      "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    alt_text: "marg",
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

export const messages = {
  welcomemsg,
  twominstretch,
  skip1,
  skip2,
  eod,
  snooze,
  complete,
  morningmsg,
};
