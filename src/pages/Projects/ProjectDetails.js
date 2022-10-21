import Case1Img from "../../assets/Images/WorkGoWhere/FrontPage.png";
import Case2Img from "../../assets/Images/LittleSingapore/FrontPage.png";
import Case3Img from "../../assets/Images/DJApp-img1.png";

export default function ProjectDetails() {
  const projects = [
    {
      img: Case1Img,
      title: "WorkGoWhere",
      description: "A web application that connect individuals to work spaces.",
      github: "https://github.com/AgileProjectY2",
      read: "/projects/wgw",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MongoDB",
        "ExpressJS",
        "ReactJS",
        "NodeJS",
      ],
    },
    {
      img: Case2Img,
      title: "Little Singapore",
      description:
        "A web application that provides information about a made-up themepark.",
      github: "https://github.com/WebDevGroup101",
      read: "/projects/ls",
      skills: ["JavaScript", "HTML", "CSS", "BootStrap"],
    },
    // {
    //     img: Case3Img,
    //     title: "DJ Application",
    //     description: "A software application that allow users to load music and mix-it up.",
    //     github: "",
    //     read: "/projects/djapplication",
    //     skills: ["C++", "JUCE"]
    // },
  ];

  return {
    projects,
  };
}
