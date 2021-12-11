/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hasham Javed",
  title: "Hi all, I'm Hasham Javed",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 having 5+ years of experience in building Web and Hybrid applications with JavaScript / Reactjs / Nodejs / Vuejs / React-Native and many other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hwqOonbXMAMRhuIVkOWofcKqarcCpHUG/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hashamjavedofficial",
  linkedin: "https://www.linkedin.com/in/hashamjaved/",
  gmail: "hasham.hasham1@gmail.com",
  twitterDetails: "https://twitter.com/1_hasham1",
  facebook: "https://www.facebook.com/HashamJavedOfficial/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / GCP / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    // {
    //   skillName: "angular",
    //   fontAwesomeClassname: "fab fa-angular"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Gujrat",
      logo: require("./assets/images/uog.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2015 - June 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Hybrid Apps",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Folio3 Software",
      companylogo: require("./assets/images/folio3.png"),
      date: "July 2021 – Present",
      desc: "Working as a Software Engineer whose responsible for developing the large scale web application for Healthcare systems in North America and more.",
      descBullets: [
        "Responsible for the implementation, development and maintenance of the various healthcare apps including (MyTrueCare web, MyTrueCare Clinical, MyTrueCare Mobile App)",
        "Manage unit testing and bug fixes for these project"
      ]
    },
    {
      role: "Software Engineer",
      company: "codeFulcrum",
      companylogo: require("./assets/images/codefulcrum.jpg"),
      date: "March 2021 – July 2021",
      desc: "Worked as a Software Engineer whose responsible for the implementing and maintaining the diverse array of application related to Sports Events and Energy sector",
      descBullets: [
        "Build efficient Frontend features in Reactjs, Vuejs, Nextjs and more",
        "Manage unit testing and bug fixes for the various project"
      ]
    },
    {
      role: "Software Engineer",
      company: "OneClout ",
      companylogo: require("./assets/images/oneclout.png"),
      date: "Jan 2020 – March 2021",
      desc: "Worked as a Full stack javascript developer responsible for the implementation, development and maintenance of the various web apps most of them are related to GIS.",
      descBullets: [
        "Implement various features and fixed bugs for multiple projects like (Mayor's Dededo E-community portal, Guam land record system & Enernite).",
        "Implement software enhancements and suggest improvements"
      ]
    },
    {
      role: "Javascript Developer",
      company: "Logicman Pvt Ltd",
      companylogo: require("./assets/images/logicman.png"),

      date: "June 2018 – Jan 2020",
      desc: "Full stack web developer responsible for end-to-end web app development.",
      descBullets: [
        "Write well designed, testable, efficient code by using best software development practices.",
        "Created website interfaces using frameworks and libraries like React & Vue.",
        "Integrating data from various back-end services and databases."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "FEW PROJECTS ON WHICH I WORKED ON DURING MY CAREER",
  projects: [
    {
      image: require("./assets/images/treackhero.png"),
      projectName: "TrackHero",
      projectDesc:
        "TrackHero is the all-in-one platform which provide the individuals and organizations to directly book the reservation for their sport car event and also book different vehicles from vast catalog of different dealers based upon on their need.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.trackhero.io/"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/15qWG6EGT5RmPH_bW59KyPCL-roBkxFy0?usp=sharing"
        }
      ],
      stack: [
        "Nextjs",
        "Typescript",
        "Redux toolkit",
        "Material UI",
        "Openlayers"
      ]
    },
    {
      image: require("./assets/images/esgtree.png"),
      projectName: "ESGTree",
      projectDesc:
        "ESGTree aims to bring technology which is used to compare and track the performance of the Companies all around the world, providing companies with the information they need to optimize their productivity and yield based on different indicators.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://esgtree.com/"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1ILJSF9alFVgMfVr6ZhcZcf7trthOTi7p?usp=sharing"
        }
      ],
      stack: ["Nuxtjs", "Vuex", "Ant Design", "Highcharts", "Nodejs", "MySQL"]
    },
    {
      image: require("./assets/images/pg.jpg"),
      projectName: "Precision Glass",
      projectDesc:
        "Precision Glass mobile app aims to resolve the delivery and order system for PGI, so clients can easily place their orders and decide time for the pickups based upon their availability. Clients can also track their order in realtime using push notifications.",
      footerLink: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.precisionglass.app"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/pgi-next-level/id1554050002"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1Wb19q2wRu4IiKvtuKcO9t87bNwTvf3yC?usp=sharing"
        }
      ],
      stack: ["React-Native", "Redux", "Native Base", "Firebase"]
    },
    {
      image: require("./assets/images/truecare-web.png"),
      projectName: "MyTrueCare Web",
      projectDesc:
        "MyTrueCare is the platform which is used by the healthcare services in USA to easily manage the appointment of patients and also efficiently maintain the clinical records and patients history while patient can easily book the physical or online appointment in different health care centers across USA in few clicks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qa-env.portal.truecare4you.com/login"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1s1Zp6DroFv5mmWh1ZKZDQ-Wvbi__j1_1?usp=sharing"
        }
      ],
      stack: ["React", "Redux", "Redux Saga", "Ant Design", "GraphQL", "Nodejs"]
    },
    {
      image: require("./assets/images/mayor-pilot.png"),
      projectName: "E-Community Portal Mayro's Dededo",
      projectDesc:
        "E-Community is a platform which helps the people of GUAM to easily logged the complains regarding their common issue like animal control, street light repairs, road repairs, transfer of residence etc, Directly using the application forms and map.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://community.mgtechx.com/"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/17BjYra7drUC-q3wihMnh92wwUhdjEokl?usp=sharing"
        }
      ],
      stack: [
        "React",
        "Redux",
        "Redux Thunk",
        "Material UI",
        "Openlayers",
        "Mapbox"
      ]
    },
    {
      image: require("./assets/images/enernite.png"),
      projectName: "Enernite",
      projectDesc:
        "Enernite is an online GIS software, that displays the geospatial information in a very simple and elegant way. Enernite is also capable and allow user to download specific area of map along with different basemaps and power grid data for offline usage.",
      footerLink: [
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1L1grpkwJRpR8RpyG5xR6ULIN3VYGwkKW?usp=sharing"
        }
      ],
      stack: [
        "React",
        "Redux",
        "Redux Thunk",
        "Ant Design",
        "Openlayers",
        "Mapbox"
      ]
    },
    {
      image: require("./assets/images/onclout-attendance.png"),
      projectName: "OneClout Attendance Portal",
      projectDesc:
        "In house attendance system for the company having the feature to mark attendance using Qr and facial scanner. User can see the stats of monthly attendance and admin can also manage and monitor the attendance and also visualise through multiple graphs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://attendance.oneclout.com/"
        },
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1qsS5REQD8sz2Ic4ny6HVtcKDP44tARrG?usp=sharing"
        }
      ],
      stack: [
        "React",
        "Redux",
        "Redux Thunk",
        "Ant Design",
        "MongoDB",
        "Nodejs"
      ]
    },
    {
      image: require("./assets/images/truecare-mobile.jpg"),
      projectName: "MyTrueCare Mobile",
      projectDesc:
        "MyTrueCare is the platform which is used by the healthcare services in USA to easily manage the appointment of patients and also efficiently maintain the clinical records and patients history while patient can easily book the physical or online appointment in different health care centers across USA in few clicks.",
      footerLink: [
        {
          name: "More Images",
          url: "https://drive.google.com/drive/folders/1VK5B8RiD0tqZMYJoL0i7TkWnl39RdWHX?usp=sharing"
        }
      ],
      stack: ["React-Native", "Native Base", "Redux thunk", "Firebase"]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Front-End Web Development with React",
      subtitle: "The Hong Kong University of Science and Technology.",
      image: require("./assets/images/react-coursera.png"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.coursera.org/account/accomplishments/verify/HG44CCFRJLKH"
        }
      ]
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      subtitle: "Google Cloud",
      image: require("./assets/images/google-coursera.png"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.coursera.org/account/accomplishments/verify/8JHMTT8KWV8X"
        }
      ]
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle: "Udemy",
      image: require("./assets/images/react-udemy.jpeg"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.udemy.com/certificate/UC-2c4c1530-c645-4a41-861c-d121ce3a3e2d/"
        }
      ]
    },
    {
      title: "The Complete Node.js Developer Course (3rd Edition)",
      subtitle: "Udemy",
      image: require("./assets/images/udmey-node.jpeg"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.udemy.com/certificate/UC-a6af1965-dfea-44b4-810b-882809a5378d/"
        }
      ]
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "The Hong Kong University of Science and Technology.",
      image: require("./assets/images/bootstrap-coursera.png"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.coursera.org/account/accomplishments/verify/MB8VXX664NX9"
        }
      ]
    },
    {
      title: "The Complete Git Guide: Understand and master Git and GitHub",
      subtitle: "Udemy",
      image: require("./assets/images/git-idemy.jpeg"),
      footerLink: [
        {
          name: "Certification Detail",
          url: "https://www.udemy.com/certificate/UC-1fbfc344-61c7-4383-a04b-0c8bcbbb32df/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3014498244",
  email_address: "hasham.hasham1@gmail.com",
  image: require("./assets/images/profile-pic.jpg")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
