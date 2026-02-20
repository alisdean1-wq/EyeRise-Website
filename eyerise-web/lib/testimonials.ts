export interface Testimonial {
  segment: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  story?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    segment: "Students",
    name: "Jordan K.",
    role: "Grad student",
    quote:
      "I used to get headaches after long study sessions. With EyeRise, I can push through late-night reading without that pressure behind my eyes.",
    story:
      "Jordan used to cut study sessions short when eye strain kicked in. Now they push through late-night reading without that pressure behind their eyes.",
  },
  {
    segment: "Students",
    name: "Sam T.",
    role: "College undergrad",
    quote:
      "Late Night Study mode is a game-changer for essay marathons. Screen feels softer and I actually fall asleep easier.",
    story:
      "Essay deadlines used to mean red eyes and restless sleep. Late Night Study mode made the screen feel softer and sleep actually come easier.",
  },
  {
    segment: "Creators",
    name: "Maria S.",
    role: "Designer",
    quote:
      "Focus Mode keeps colors true when I need them. I sleep better after late work. Best of both worlds.",
    story:
      "Maria needed accurate color for design work but also wanted to protect her eyes and sleep. Focus Mode gave her both without compromise.",
  },
  {
    segment: "Creators",
    name: "Alex P.",
    role: "Developer",
    quote:
      "Tension headaches gone. I get more done in 6 hours than I used to in 8.",
    story:
      "Long coding sessions used to end in tension headaches. With EyeRise, Alex gets more done in six hours than they used to in eight.",
  },
  {
    segment: "Professionals",
    name: "Priya M.",
    role: "Product manager",
    quote:
      "Back-to-back Zoom and docs used to drain my eyes by 3pm. EyeRise and the breaks help me stay sharp all day.",
    story:
      "Back-to-back Zooms and docs used to drain her eyes by 3pm. EyeRise and the smart breaks help her stay sharp until the end of the day.",
  },
  {
    segment: "Professionals",
    name: "David L.",
    role: "Writer",
    quote:
      "I write for hours. The warm tint and 20-20-20 reminders actually make a difference. Less rubbing my eyes.",
    story:
      "David writes for hours every day. The warm tint and 20-20-20 reminders actually made a difference—less rubbing his eyes, more words on the page.",
  },
  {
    segment: "Night readers",
    name: "Jonathan L.",
    role: "Parent",
    quote: "Like an eye-care coach for my kids. We all use it before bed now.",
    story:
      "Jonathan wanted something that felt like an eye-care coach for the whole family. Now they all use it before bed.",
  },
  {
    segment: "Night readers",
    name: "Chris R.",
    role: "Night owl",
    quote:
      "I read and browse late. Cinema mode makes dark UIs easier. I fall asleep faster than before.",
    story:
      "Chris reads and browses late. Cinema mode made dark UIs easier on the eyes, and falling asleep got noticeably faster.",
  },
];
