/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuwani Rashipaba",
  title: "Hi all, I'm Yuwani",
  subTitle: emoji(
    "🚀 A passionate IT Undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), currently sharpening my skills through an internship at North Sails. I bring hands-on experience across a diverse tech stack—including Web Development, Quality Assurance, Data Analytics, Machine Learning, and Programming. Whether it's crafting dynamic web apps or exploring data-driven solutions, I thrive on building impactful digital experiences using modern technologies like JavaScript, React.js, Node.js, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yuwanirashipaba",
  linkedin: "https://www.linkedin.com/in/yuwani-rashipaba-0ba009264/",
  gmail: "yuwanirashipaba@gmail.com",
  medium: "https://medium.com/@yuwanirashipaba",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIAST IT UNDERGRADUATE FOCUSED ON QUALITY ASSURANCE AND DATA SCIENCE",
  skills: [
    emoji(
      "💻 IT undergraduate at SLIIT with hands-on experience in Web Development, QA, Data Analytics, and Machine Learning."
    ),
    emoji("🚀 Currently interning at North Sails, focusing on Quality Assurance and Project Management."),
    emoji(
      "⚡ Skilled in modern technologies like JavaScript, React.js, Node.js, and passionate about building impactful digital solutions."
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SLIIT",
      logo: require("./assets/images/sliit.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "Jul 2022 - Present",
      desc: "CGPA - 3.35",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Quality Assurance",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "React",
      progressPercentage: "75%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "80%"
    },
    {
      Stack: "Figma",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Project Intern",
      company: "North Sails",
      companylogo: require("./assets/images/northsails.png"),
      date: "March 2025 – Present",
      desc: "As an IT Project Intern, I contribute to both Quality Assurance and Project Management activities. My work involves designing and executing test cases, identifying bugs, and collaborating with development teams to ensure software quality. I also assist in planning, monitoring project progress, and ensuring timely delivery of key milestones.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  githubUserName: "yuwanirashipaba", // Add your GitHub username here
  githubToken: atob("Z2l0aHViX3BhdF8xMUJBQVVOUlkwZDU5OWpYZnd3QVVQX2JBMm82eGwydjlDbVZ5QmNzdnNySUp2azd6VmRZbVd4UUg1Z04ycmcwNG5KVVlMWFFTSWYxTDBmQ28y"), // Add your GitHub Personal Access Token here
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      subtitle:
        "Issued by Oracle | 2023",
      image: require("./assets/images/oracle.png"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://media.licdn.com/dms/document/media/v2/D562DAQEWNwFFCfKsUA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1720864332863?e=1749081600&v=beta&t=89odZXuSYx3SL3C1Z2TyIzzzuvC-G41-uFjubRiNp7U"
        }
      ]
    },
    {
      title: "Web Design For Beginners",
      subtitle:
        "Issued by University of Moratuwa | 2024",
      image: require("./assets/images/mora.jpeg"),
      imageAlt: "University of Moratuwa Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://media.licdn.com/dms/document/media/v2/D562DAQFo8Q7KK8yGjg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1721737591189?e=1749081600&v=beta&t=zm2eZ8NeenKoWcodzaulelIed4hHCd_R10n-tB-kJzE"
        }
      ]
    },

    {
      title: "Test Automation Foundations",
      subtitle: "Issued by LinkedIn | 2024",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "Linkedin Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/07af0c5e0de131a2608f5565f6dd59c74a0076a7cc865063805beb8a6b17df49"
        }
      ]
    },

    {
      title: "Agile Project Management with Jira Cloud: Projects, Boards, and Issues",
      subtitle: "Issued by LinkedIn | 2024",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "Linkedin Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/98f24002e87342cb5e9b43d8b26715d02ce83d232d97c25ac48a6b1bec8d0383"
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
    "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@yuwanirashipaba/when-you-download-an-app-and-it-just-works-you-rarely-think-about-what-went-on-behind-the-scenes-555f5cc7374b",
      title: "🤔 What is Quality Assurance?",
      description:
        "When you download an app and it just works, you rarely think about what went on behind the scenes...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/understanding-the-software-testing-life-cycle-stlc-d9d31de6cfc4",
      title: "🧪 Understanding the Software Testing Life Cycle (STLC)",
      description:
        "In the software world, testing isn't just a one-time task — it's a cycle. The Software Testing Life Cycle (STLC) is a ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/types-of-software-testing-a-comprehensive-guide-for-qa-professionals-e72c25134265",
      title: "💻 Types of Software Testing: A Comprehensive Guide for QA Professionals",
      description:
        "Software testing is a cornerstone of Quality Assurance (QA), ensuring that applications meet specified requirements, function ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/the-soft-skills-every-qa-engineer-needs-to-thrive-71415e9bd65a",
      title: "🧠 The Soft Skills Every QA Engineer Needs to Thrive",
      description:
        "In the world of software development, QA (Quality Assurance) is often seen as the gatekeeper of quality. We write test cases, log bugs, ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/will-ai-replace-qa-engineers-c8c5a847c9bc",
      title: "🤖 Will AI Replace QA Engineers?",
      description:
        "The rise of artificial intelligence has sparked a wave of speculation across every industry — and software testing is no exception. ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/from-test-cases-to-prompts-the-evolution-of-qa-in-the-age-of-generative-ai-1198e506033b",
      title: "🚀 Automation from Test Cases to Prompts: The Evolution of QA in the Age of Generative AI",
      description: "Just a few years ago, being a QA engineer meant meticulously writing test cases, running automated scripts, and manually verifying software ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/exploratory-testing-why-it-matters-more-than-you-think-f18cae6f61e0",
      title: "🔍 Exploratory Testing: Why It Matters More Than You Think",
      description: "Exploratory testing is a simultaneous process of learning, test design, and execution. Unlike traditional scripted testing — where test cases are predefined ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/why-agile-is-the-superpower-your-development-team-needs-802accae3840",
      title: "💡 Why Agile is the Superpower Your Development Team Needs",
      description: "In a world where technology evolves faster than ever, software teams can’t afford to move slowly. That’s where Agile swoops in ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/manual-vs-automation-testing-which-one-truly-delivers-quality-b5aa43b4bce2",
      title: "🧪 Manual vs. Automation Testing: Which One Truly Delivers Quality?",
      description:
        "In the software testing world, there’s an ongoing debate: manual testing vs. automation testing — which one’s better? ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/getting-started-with-automation-testing-a-beginners-guide-0157782e2980",
      title: "🤖 Getting Started with Automation Testing: A Beginner's Guide",
      description: "In a world driven by speed, quality, and digital-first experiences, manual testing is no longer enough. Whether you’re building web apps, mobile apps, or APIs, ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/understanding-non-functional-testing-performance-security-usability-in-qa-0d1837549a66",
      title: "🎯 Understanding Non-Functional Testing: Performance, Security & Usability in QA",
      description: "In the QA world, functional testing often gets the spotlight — checking whether the app behaves as expected. But what about the experience of using it? ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/the-role-of-qa-in-ci-cd-pipelines-ensuring-quality-at-speed-e0b59fa0e631",
      title: "🚀 The Role of QA in CI/CD Pipelines: Ensuring Quality at Speed",
      description: "In the era of Agile and DevOps, speed is everything. But speed without quality? That’s a recipe for disaster."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/introduction-to-data-analytics-turning-data-into-insights-99cd8fff1260",
      title: "📊 Introduction to Data Analytics: Turning Data into Insights",
      description: "In today’s digital world, data is everywhere. From the apps we use daily to global business operations, data is constantly being, ...."
    },
    {
      url: "https://medium.com/@yuwanirashipaba/real-world-applications-of-data-analytics-across-industries-6aa5970e650f",
      title: "🌍 Real-World Applications of Data Analytics Across Industries",
      description: "We live in a world where data is the new oil — a valuable resource that powers insights and innovation across nearly every sector. From predicting customer preferences ...."
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: "yuwanirashipaba@gmail.com",
};

const twitterDetails = {
  userName: "YuwaniR8985", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
