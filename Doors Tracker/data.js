"use strict";

window.DOORS_DATA = {

  site: {
    name: "DOORS Tracker",
    description:
      "An unofficial DOORS update, development and floor tracker.",
    lastChecked: "2026-08-27"
  },


  nextUpdate: {
    name: "The Archives",
    date: "2026-08-28T18:00:00Z",
    image: "assets/updates/archives.png",
    status: "Upcoming",
    description:
      "The upcoming Archives subfloor update."
  },


  /*
    Roblox experiences being tracked.

    The frontend displays the information stored here.
    Live Roblox update history should be supplied by a
    server-side/API source rather than fabricated in the browser.
  */

  gameUpdates: [

    {
      name: "DOORS",
      universeId: "6839171747",
      placeId: "6516141723",

      status: "Tracking",

      lastUpdated: "Not confirmed",

      latestVersion: "Not confirmed",

      changelog: [
        "Live Roblox update information has not been confirmed.",
        "Check the official Roblox experience for the current version."
      ],

      url:
        "https://www.roblox.com/games/6516141723/DOORS"
    },


    {
      name: "DOORS",
      universeId: "6516141723",
      placeId: "6839171747",

      status: "Tracking",

      lastUpdated: "Not confirmed",

      latestVersion: "Not confirmed",

      changelog: [
        "Live Roblox update information has not been confirmed.",
        "Check the official Roblox experience for the current version."
      ],

      url:
        "https://www.roblox.com/games/6839171747/DOORS"
    }

  ],


  floors: [

    {
      name: "The Hotel",
      type: "Floor 1",
      status: "Released",
      image: "assets/icons/hotel.png",
      description:
        "The first main floor of DOORS."
    },

    {
      name: "The Mines",
      type: "Floor 2",
      status: "Released",
      image: "assets/icons/mines.png",
      description:
        "The second main floor of DOORS."
    },

    {
      name: "The Backdoor",
      type: "Subfloor",
      status: "Released",
      image: "assets/icons/backdoor.png",
      description:
        "A DOORS subfloor."
    },

    {
      name: "The Rooms",
      type: "Subfloor",
      status: "Reworked",
      image: "assets/icons/rooms.png",
      description:
        "The Rooms subfloor."
    },

    {
      name: "The Outdoors",
      type: "Subfloor",
      status: "Released",
      image: "assets/icons/outdoors.png",
      description:
        "The Outdoors subfloor."
    },

    {
      name: "The Archives",
      type: "Subfloor",
      status: "Upcoming",
      image: "assets/icons/archives.png",
      description:
        "The upcoming Archives subfloor."
    }

  ],


  developers: [

    {
      name: "Lightning_Splash",
      displayName: "LSPLASH",
      role:
        "Creator / programming / design / writing / audio / graphics",
      image: "assets/devs/lsplash.png",
      profile:
        "https://x.com/LightningSplash"
    },

    {
      name: "RediblesQW",
      displayName: "Redibles",
      role:
        "Co-creator / building / modelling / environment art / design / writing",
      image: "assets/devs/redibles.png",
      profile:
        "https://x.com/RediblesQW"
    },

    {
      name: "NormallyAve",
      displayName: "NormallyAve",
      role:
        "Entity AI / room generation / death tips / graphics",
      image: "assets/devs/normallyave.png",
      profile: ""
    },

    {
      name: "jasper_creations",
      displayName: "jasper_creations",
      role:
        "Animation / additional programming",
      image: "assets/devs/jasper.png",
      profile: ""
    },

    {
      name: "Ghostly_Wowzers",
      displayName: "Ghostly_Wowzers",
      role:
        "Graphics / artwork / entity contributions",
      image: "assets/devs/ghostly.png",
      profile: ""
    },

    {
      name: "Echidenpai",
      displayName: "Echidenpai",
      role:
        "Entity AI / Mines and Outdoors systems",
      image: "assets/devs/echidenpai.png",
      profile: ""
    }

  ],


  updates: [

    {
      name: "The Archives",
      date: "2026-08-28",
      type: "Major Update",
      status: "Upcoming",
      image: "assets/updates/archives.png",
      confidence: "Official"
    },

    {
      name: "The Mines",
      date: "2024-08-30",
      type: "Floor 2",
      status: "Released",
      image: "assets/updates/mines.png",
      confidence: "Official"
    },

    {
      name: "The Backdoor",
      date: "2024-03-15",
      type: "Subfloor",
      status: "Released",
      image: "assets/updates/backdoor.png",
      confidence: "Official"
    }

  ],


  minorUpdates: [

    {
      name: "Minor Development Update",
      date: "2026-08-27",
      type: "Development",
      status: "Tracked",
      description:
        "Minor development information and additions being monitored.",
      image:
        "assets/updates/archives.png",
      confidence:
        "Official"
    }

  ],


  messages: [

    {
      author: "LSPLASH",
      handle: "@LightningSplash",
      date: "2026",
      image:
        "assets/devs/lsplash.png",
      message:
        "Public developer activity and Archives information.",
      confidence:
        "Official",
      link:
        "https://x.com/LightningSplash"
    },

    {
      author: "Redibles",
      handle: "@RediblesQW",
      date: "2026",
      image:
        "assets/devs/redibles.png",
      message:
        "Public developer activity and development information.",
      confidence:
        "Official",
      link:
        "https://x.com/RediblesQW"
    }

  ],


  status: {
    game: "Monitoring",
    archives: "Upcoming",
    note:
      "Roblox update information is only marked confirmed when a reliable source is available."
  },


  sources: [

    {
      name: "DOORS — Roblox",
      type: "Official",
      url:
        "https://www.roblox.com/games/6516141723/DOORS"
    },

    {
      name: "DOORS — Roblox",
      type: "Official",
      url:
        "https://www.roblox.com/games/6839171747/DOORS"
    },

    {
      name: "DOORS — Official X",
      type: "Official",
      url:
        "https://x.com/DoorsRoblox"
    },

    {
      name: "LSPLASH",
      type: "Developer",
      url:
        "https://x.com/LightningSplash"
    },

    {
      name: "Redibles",
      type: "Developer",
      url:
        "https://x.com/RediblesQW"
    },

    {
      name: "DOORS Wiki",
      type: "Secondary",
      url:
        "https://doors-wiki.wiki/"
    }

  ]

};