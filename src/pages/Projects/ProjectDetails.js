import SW1_img1 from '../../assets/Images/WGW-img1.png';
import SW2_img1 from '../../assets/Images/LS-img1.png';
import SW3_img1 from '../../assets/Images/DJApp-img1.png';

export default function ProjectDetails() {

    const projects = [
        {
            img: SW1_img1,
            title: "WorkGoWhere",
            description: "A web application that connect individuals to work spaces.",
            github: "https://github.com/AgileProjectY2",
            read: "/projects/workgowhere",
            skills: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "MongoDB", "ExpressJS", "ReactJS", "NodeJS"]
        },
        {
            img: SW2_img1,
            title: "Little Singapore",
            description: "A web application that provides information about a made-up themepark.",
            github: "https://github.com/WebDevGroup101",
            read: "/projects/littlesingapore",
            skills: ["JavaScript", "HTML", "CSS", "BootStrap"]
        },
        {
            img: SW3_img1,
            title: "DJ Application",
            description: "A software application that allow users to load music and mix-it up.",
            github: "",
            read: "/projects/djapplication",
            skills: ["C++", "JUCE"]
        },
    ]

  return {
    projects
  };
}