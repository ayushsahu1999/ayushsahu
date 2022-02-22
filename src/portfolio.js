/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ayush's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ayush Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ayush Sahu",
  logo_name: "AyushSahu",
  nickname: "relaxed_coder",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ayushsahu1999",
  githubProfile: "https://github.com/ayushsahu1999",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ayushsahu1999",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayush-sahu-700689170/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC9T5o-N885FqyAXULFINuCw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ayushsahu99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/asahu100",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ayush.sahu.37/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ayush__s_a_h_u/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "School ERP",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various statistical use cases",
        "⚡ Worked with NodeJs, MySQL and GraphQL",
        "⚡ Complex backend infrastructure for best throughput of operations",
        "⚡ This application is hosted live and you can check it out",
        "⚡ https://thehightable-test-26df0.web.app/#/",
        "⚡ user: principal123, pass: 12345"
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "ion-logo-vue",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Deep Learning",
      fileName: "DesignImg",
      skills: [
        "⚡ Had worked on various deep learning projects",
        "⚡ Had made various projects like Currency Detector, Unusual Activity Detection, Sleep Detection and many more",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Trying to optimize my projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ayushsahu99",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://leetcode.com/ayush1601/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ayush1896",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ayushsahu99",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Vadodara",
      subtitle: "M.Tech. in Artificial Intelligence",
      logo_path: "iiitv.png",
      alt_name: "IIIT VADODARA",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied about basic AI/DS concepts",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://www.iiitvadodara.ac.in/",
    },
    {
      title: "SRM University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "srm.png",
      alt_name: "SRM",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I also participated in various hackathons and fests and came 2nd in our institute's internal hackathon.",
      ],
      website_link: "https://www.srmist.edu.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fundamentals on Deep Learning",
      subtitle: "- Nvidia Deep Learning Institute",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://courses.nvidia.com/certificates/567ecf972b7247be8cc784720cd33849",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "- Hong Kong University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/f3319ac48dcb0d459f4aace623be6940",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/1171997921d20030fbeeea80b35b2f4f",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/2ff13e30c66e77ce0775e94f7db2d4bc",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      subtitle: "- Laurence Moroney",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/a3cd04fd2c09b88ed9ade22f63a9e704",
      alt_name: "Laurence Moroney",
      color_code: "#1F70C199",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Laurence Moroney",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://coursera.org/share/bd7dfd3013995314dec9f4fe7feeac79",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Analytics vidhya",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1wHRFqJzVy85mdwTH2iE3r3xeyBhLqD9Q/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Machine Learning A-Z",
      subtitle: "- Kirill Eremenko",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-EYAOCF6A/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "TA DIGITAL Junior Dev",
          company: "TA DIGITAL",
          company_url: "https://www.tadigital.com/",
          logo_path: "tad-logo.jpg",
          duration: "June 2021 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I was working on Java Developer.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Image Processing Intern",
          company: "Medtrail Pvt. Ltd.",
          company_url: "https://medtrail.in/",
          logo_path: "medtrail-logo.jpg",
          duration: "Dec 2019 - Jan 2019",
          location: "Delhi",
          description:
            "I worked on doctor's prescriptions to extract doctor's signature and identify which doctor's signature is it.",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ayush-logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@ayushsahu99",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
