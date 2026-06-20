/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE CONTENT
   ============================================================

   New here? Read HOW-TO-EDIT.md (same folder as index.html) first.

   HOW IT WORKS
   - Events listed here appear on the events page (all of them)
     and on the homepage (the first 3) automatically.
   - Blog posts appear on the blog page. The FIRST post in the
     list becomes the big featured card.
   - Committee members appear on the committee page.

   HOW TO EDIT
   - To add an event/post: copy one of the { ... } blocks,
     paste it where you want it in the list, change the text.
   - To remove one: delete its { ... } block (including the comma).
   - Keep events in date order, soonest first.
   - Delete events once they've happened.

   "tone" controls the tag colour:
     "cool" = teal   (we use it for workshops/guides)
     "warm" = orange (we use it for ctf/opinion)
     ""     = grey   (talks, news, anything else)

   Don't use double quotes inside your text — use ' instead.
   ============================================================ */

window.SITE_DATA = {

  events: [
    {
      when:  "21 Sept - 02 Oct",
      where: "Brunel University of London",
      title: "Brunel Freshers 2026",
      desc:  "Brunel Freshers 2026 is coming... full events list dropping Summer 2026.",
      tag:   "freshers",
      tone:  "",
      /* optional: hover over this event to show a rich card.
         Add an image at assets/freshers.jpg, or remove 'img' to keep the gradient. */
      preview: {
        pill:  "collab",
        cap:   "OUR FIRST COLLABORATION EVENT",
        title: "Freshers Week 2026",
        desc:  "We're opening the year with a freshers collaboration built to welcome new faces, show off the society, and kick things off with a proper first impression.",
        img:   "assets/freshers.jpg",
        link:  "#"
      }
    },
    {
      when:  "05 Oct",
      where: "7:00pm",
      title: "Meet and Greet",
      desc:  "Come say hi, meet the committee and other members, and hear what we have planned for the year.",
      tag:   "social",
      tone:  "",
      preview: {
        pill:  "social",
        cap:   "FIRST SOCIAL OF THE YEAR",
        title: "Meet and Greet",
        desc:  "An informal evening to meet the committee and fellow members, hear what's planned for the year, and settle in before the workshops kick off. Snacks, introductions and zero pressure.",
        img:   "assets/meetandgreet.jpg",
        link:  "#"
      }
    }
  ],

  posts: [
    /* the first post here becomes the big featured card */
    {
      date:  "30 may 2026",
      title: "How we solved 'rusty_lock' at the spring inter-uni CTF",
      desc:  "A 400-point reversing challenge, one stubborn Rust binary, and the three wrong turns we took before spotting the obvious. Full walkthrough with the tooling we used, so you can replay it yourself.",
      tag:   "writeup",
      tone:  "warm",
      link:  "#"
    },
    {
      date:  "22 may 2026",
      title: "Society wrap-up: the year in flags",
      desc:  "Every competition we entered this year, how we placed, and what we're changing for next season.",
      tag:   "news",
      tone:  "",
      link:  "#"
    },
    {
      date:  "14 may 2026",
      title: "Five things first-years should do before September",
      desc:  "Free labs, one good book, and the single most useful habit for anyone starting in security.",
      tag:   "guide",
      tone:  "cool",
      link:  "#"
    },
    {
      date:  "2 may 2026",
      title: "What the latest UK cyber bill means for students",
      desc:  "A plain-English summary of the changes and why responsible disclosure just got more interesting.",
      tag:   "opinion",
      tone:  "warm",
      link:  "#"
    },
    {
      date:  "18 apr 2026",
      title: "Writeup: phishing our own committee (with permission)",
      desc:  "We ran an internal phishing exercise. The click rate was humbling. Here's what we learned.",
      tag:   "writeup",
      tone:  "",
      link:  "#"
    }
  ],

  /* "Further reading" links shown at the bottom of the blog page.
     These are EXTERNAL sites — edit freely. Only list sources you genuinely
     recommend. Add/remove with the same { } pattern; comma after each but
     the last. */
  reads: [
    { name: "The Hacker News",            url: "https://thehackernews.com/",                       note: "Daily security news" },
    { name: "Krebs on Security",          url: "https://krebsonsecurity.com/",                     note: "Investigative writeups" },
    { name: "PortSwigger Academy",        url: "https://portswigger.net/web-security",             note: "Free hands-on web labs" },
    { name: "CTFtime",                    url: "https://ctftime.org/",                             note: "Upcoming CTFs & rankings" }
  ],

  /* "Learn with" platforms on the resources page. Edit freely.
     level is just a label: use "beginner", "intermediate", "advanced"
     or "reference" (or anything short). Comma after each but the last. */
  learn: [
    { name: "OverTheWire",  url: "https://overthewire.org/wargames/", level: "beginner",    note: "Wargames played over SSH, starting from absolute zero. Bandit is where we tell every beginner to start." },
    { name: "picoCTF",      url: "https://picoctf.org/",              level: "beginner",    note: "Carnegie Mellon's permanent beginner CTF. Gentle difficulty curve, great for your first hundred flags." },
    { name: "TryHackMe",    url: "https://tryhackme.com/",            level: "beginner",    note: "Guided rooms with built-in virtual machines. The free tier covers more than enough for the first year." },
    { name: "Hack The Box", url: "https://www.hackthebox.com/",       level: "intermediate", note: "Less hand-holding, more realism. Where to go once TryHackMe starts feeling comfortable." },
    { name: "CTFtime",      url: "https://ctftime.org/",              level: "all levels",  note: "The calendar of every CTF competition worldwide, and where our team's ranking lives." },
    { name: "OWASP",        url: "https://owasp.org/",                level: "reference",   note: "The reference for web security. The Top 10 list and Juice Shop project come up in half our workshops." }
  ],

  /* ----------------------------------------------------------
     COMMITTEE  (shown on the committee page)
     ----------------------------------------------------------
     One { } block per person, in the order they should appear.
       name     : full name. Leave "" to show a 'Your name here' placeholder.
       role      : their title, e.g. "secretary".
       initials  : 1-3 letters shown when there is no photo (or while it loads).
       photo     : path to their picture, e.g. "assets/parm.jpg".
                   Leave "" for no photo (the initials show instead).
                   The file must exist in the assets folder with EXACTLY
                   this name (capitals matter). See HOW-TO-EDIT.md.
       accent    : "warm" or "cool" — just alternates the card tint. Keep
                   them alternating (warm, cool, warm, cool...) for a tidy grid.
       bio       : optional short paragraph. Leave "" to hide it.
       duties    : optional list of responsibilities. Use [] for none.
     ---------------------------------------------------------- */
  committee: [
    {
      name: "Mohammed Zuoriki",
      role: "chair / president",
      initials: "MZ",
      photo: "assets/pfp_Mohammed.png",
      accent: "warm",
      bio: "",
      duties: [
        "Provide society leadership",
        "Ensure effective committee management",
        "Be the public face of the society",
        "Be the main point of contact for the Union",
        "Ensure all members have society memberships"
      ]
    },
    {
      name: "",
      role: "vice chair / president",
      initials: "VC",
      photo: "",
      accent: "cool",
      bio: "",
      duties: [
        "Support the Chair/President in running the society",
        "Help with effective committee management",
        "Act as Union contact when the Chair and Secretary are unavailable"
      ]
    },
    {
      name: "Abdirahman Abdikadir",
      role: "secretary",
      initials: "AA",
      photo: "assets/abdirahman.jpg",
      accent: "warm",
      bio: "",
      duties: [
        "Ensure all meetings are effectively organised",
        "Take committee meeting minutes and share them with the Union",
        "Be the secondary point of contact for the Union"
      ]
    },
    {
      name: "",
      role: "web officer",
      initials: "WO",
      photo: "",
      accent: "cool",
      bio: "",
      duties: [
        "Coordinate digital promotion with the Societies' Administrator",
        "Run the society's social media accounts",
        "Present the society in a respectable manner"
      ]
    },
    {
      name: "Parmbir Singh Nandha",
      role: "treasurer / co-founder",
      initials: "PN",
      photo: "assets/Parm.JPG",
      accent: "warm",
      bio: "Hey! I'm your Treasurer and one of the co-founders of the Cyber Security Society. I make sure our money is where it's supposed to be, keep an eye on the finances, chase sponsorships, and ensure our members are well supplied with pizza. If the budget goes missing... I'll investigate (after finishing my slice). :)",
      duties: []
    },
    {
      name: "",
      role: "events officer",
      initials: "EO",
      photo: "",
      accent: "cool",
      bio: "",
      duties: [
        "Plan society activities and events with the Societies' Administrator",
        "Make sure event-planning tasks are completed on time",
        "With the committee, ensure event information reaches members"
      ]
    }
  ]

};
