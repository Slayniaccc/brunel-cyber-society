/* ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE CONTENT
   ============================================================

   HOW IT WORKS
   - Events listed here appear on the events page (all of them)
     and on the homepage (the first 3) automatically.
   - Blog posts appear on the blog page. The FIRST post in the
     list becomes the big featured card.

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
      when:  "wed 17 jun",
      where: "18:00 · LC265",
      title: "Intro to web exploitation",
      desc:  "SQL injection, XSS and how to practise legally on purpose-built labs.",
      tag:   "workshop",
      tone:  "cool"
    },
    {
      when:  "sat 27 jun",
      where: "10:00 · online",
      title: "Summer CTF qualifier",
      desc:  "Team-based capture the flag — beginners welcome, teams assigned on the day.",
      tag:   "ctf",
      tone:  "warm"
    },
    {
      when:  "thu 2 jul",
      where: "17:30 · ESGW201",
      title: "Careers in security · guest talk",
      desc:  "A penetration tester and a SOC analyst on how they got their first roles.",
      tag:   "talk",
      tone:  ""
    },
    {
      when:  "wed 8 jul",
      where: "18:00 · LC265",
      title: "Password cracking 101",
      desc:  "Hashes, wordlists and why your password is probably terrible.",
      tag:   "workshop",
      tone:  "cool"
    },
    {
      when:  "wed 15 jul",
      where: "18:00 · LC265",
      title: "Digital forensics night",
      desc:  "Recover deleted files and follow an attacker through a disk image.",
      tag:   "workshop",
      tone:  "cool"
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
  ]

};
