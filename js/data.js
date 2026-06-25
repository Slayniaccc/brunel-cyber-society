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
        img:   "assets/freshers.png",
        link:  "https://brunel.native.fm/event/brunel-freshers-2026/284387"
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
        img:   "assets/meet_and_greet.jpg",
        link:  "#"
      }
    }
  ],

  /* ----------------------------------------------------------
     BLOG POSTS  (shown on blog.html)
     ----------------------------------------------------------
     These mirror our CyberTutor newsletter on Substack. The first
     post becomes the big featured card. To add the newest post,
     copy a { } block to the TOP of the list and fill it in:
       link : the full Substack URL (https://...). Any https link
              opens in a new tab automatically.
       desc : a one-line teaser. Keep it short.
     This list is AUTO-GENERATED from the CyberTutor Substack feed.
     Everything between the CYBERTUTOR markers is overwritten on sync
     (the daily GitHub Action, or: node tools/sync-cybertutor.mjs),
     so edit posts on Substack, not here. First post = featured card.
     ---------------------------------------------------------- */
  /* CYBERTUTOR:START */
  posts: [
    {
      date:  "24 jun 2026",
      title: "'Cordyceps': Mushrooming Malicious Pull Requests Threaten Developer Workflows",
      desc:  "A new vulnerability called “Cordyceps” exposes weaknesses in CI/CD workflows across organizations, allowing attackers to exploit pull requests to compromise software supply chains by targeting high-privilege…",
      tag:   "supply chain",
      tone:  "warm",
      image: "https://substackcdn.com/image/fetch/$s_!HfvI!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8f37ee36-f405-4601-827d-d08ff6f0d318_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/cordyceps-mushrooming-malicious-pull"
    },
    {
      date:  "23 jun 2026",
      title: "Crypto Heist Fueled by Elaborate Fake Reputation-Boosting Campaign",
      desc:  "Cybercriminals have orchestrated a sophisticated, global reputation manipulation campaign involving GitHub, SourceForge, fake YouTube channels, and fake news sites to distribute a RUST-based clipboard hijacking…",
      tag:   "breach",
      tone:  "",
      image: "https://substackcdn.com/image/fetch/$s_!3ebG!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcab1040f-c0b7-4658-9036-024db9d13daa_1600x900.jpeg",
      link:  "https://mohammedzuoriki.substack.com/p/crypto-heist-fueled-by-elaborate"
    },
    {
      date:  "22 jun 2026",
      title: "Operation Escaneo Signals Shift in LatAm Threat Landscape",
      desc:  "A new cyber intrusion campaign, “Operation Escaneo,” indicates a shift in Latin America’s threat landscape, with a financially motivated threat actor known as MexicanMafia demonstrating advanced tactics, techniques,…",
      tag:   "malware",
      tone:  "warm",
      image: "https://substackcdn.com/image/fetch/$s_!Ah5F!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd6ef070f-cda2-4256-8647-41ec23e236af_6663x4665.jpeg",
      link:  "https://mohammedzuoriki.substack.com/p/operation-escaneo-signals-shift-in-cb2"
    },
    {
      date:  "21 jun 2026",
      title: "EU Gets a Head Start in Developing 6G Network Security",
      desc:  "European researchers and 19 organizations, through the EU-funded Shield-6G project, are proactively developing cybersecurity measures for the upcoming 6G wireless technology, anticipated around 2030. 6G will be…",
      tag:   "policy",
      tone:  "",
      image: "https://substackcdn.com/image/fetch/$s_!ea4V!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd9dee5b9-62c8-4a8c-9f39-d3743df0d8e0_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/eu-gets-a-head-start-in-developing"
    },
    {
      date:  "19 jun 2026",
      title: "FIFA Bug Exposes World Cup Streams to Remote Takeover",
      desc:  "An ethical hacker uncovered a critical vulnerability in FIFA’s Microsoft Entra environment that could have allowed malicious actors to gain full control over World Cup broadcasts, match management, and related…",
      tag:   "vuln",
      tone:  "warm",
      image: "https://substackcdn.com/image/fetch/$s_!PQX7!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4c3d816-bda5-4c4d-b7c7-4f5c94cb4e35_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/fifa-bug-exposes-world-cup-streams"
    },
    {
      date:  "18 jun 2026",
      title: "Sweeping Credential-Harvesting Heist Compromises 30K+ Fortinet Devices",
      desc:  "A major credential harvesting campaign called “FortiBleed” is actively targeting Fortinet firewalls and VPN gateways, compromising over 30,000 devices across nearly 200 countries, primarily through credential reuse,…",
      tag:   "breach",
      tone:  "",
      image: "https://substackcdn.com/image/fetch/$s_!D-la!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7030a500-806d-4403-8d61-8b8888efa6a0_1024x576.jpeg",
      link:  "https://mohammedzuoriki.substack.com/p/sweeping-credential-harvesting-heist"
    },
    {
      date:  "17 jun 2026",
      title: "SprySOCKS Windows Variant Abuses Kernel Drivers to Evade Detection",
      desc:  "FishMonger, a notorious threat group linked to a Chinese tech company, has expanded its toolkit by developing a sophisticated Windows backdoor that employs kernel drivers for stealth, following its previous Linux…",
      tag:   "news",
      tone:  "",
      image: "https://substackcdn.com/image/fetch/$s_!mJn7!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff2705f0b-b957-49f7-846d-b13c02fc1651_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/sprysocks-windows-variant-abuses"
    },
    {
      date:  "16 jun 2026",
      title: "Copilot 'SearchLeak' Attack Allows 1-Click Data Theft",
      desc:  "Researchers from Varonis Threat Labs uncovered a critical Microsoft Copilot vulnerability dubbed “SearchLeak,” which allows attackers to silently exfiltrate sensitive user files, emails, and organizational documents…",
      tag:   "breach",
      tone:  "",
      image: "https://substackcdn.com/image/fetch/$s_!-lnp!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0def5b03-5d85-4e86-9390-255376596d06_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/copilot-searchleak-attack-allows"
    },
    {
      date:  "15 jun 2026",
      title: "Miasma Supply Chain Worm Burrows Into 73 Microsoft Repositories",
      desc:  "In June, Microsoft’s code repositories were targeted by the Miasma variant of the Shai-Hulud worm, causing widespread disruptions to CI/CD workflows, especially affecting GitHub Actions like Azure/functions-action,…",
      tag:   "supply chain",
      tone:  "warm",
      image: "https://substackcdn.com/image/fetch/$s_!Wn_A!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F44e65711-0989-4d7b-9a13-5298e5ab499e_1536x1024.png",
      link:  "https://mohammedzuoriki.substack.com/p/miasma-supply-chain-worm-burrows"
    }
  ],
  /* CYBERTUTOR:END */

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
      role: "founder / president",
      initials: "MZ",
      photo: "assets/IMG_4556.jpg",
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
        "Support the Founder/President in running the society",
        "Help with effective committee management",
        "Act as Union contact when the Founder/President and Secretary are unavailable"
      ]
    },
    {
      name: "Abdirahman Abdikadir",
      role: "secretary",
      initials: "AA",
      photo: "assets/abdirahman.jpg",
      accent: "warm",
      bio: "Hello! I'm taking on the Secretary role this year.I'm here to keep things running smoothly behind the scenes, taking notes during meetings so nothing gets lost, sharing them with the Union so everyone's in the loop, and stepping in as a friendly point of contact whenever the Founder's not around. If you've ever got a question about what was discussed or decided, don't hesitate to reach out, that's exactly what I'm here for.",
      duties: []
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
