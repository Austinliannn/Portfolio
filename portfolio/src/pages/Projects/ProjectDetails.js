import SW1_img1 from '../../assets/WGW-img1.png';
import SW2_img1 from '../../assets/LS-img1.png';
import SW3_img1 from '../../assets/DJApp-img1.png';

export default function ProjectDetails() {

    const projects = [
        {
            img: SW1_img1,
            title: "WorkGoWhere",
            description: "A web application that connect individuals to work spaces.",
            github: "",
            video: "",
            read: ""
        },
        {
            img: SW2_img1,
            title: "Little Singapore",
            description: "A web application that provides information about a made-up themepark.",
            github: "",
            video: "",
            read: ""
        },
        {
            img: SW3_img1,
            title: "DJ Application",
            description: "A software application that allow users to load music and mix-it up.",
            github: "",
            video: "",
            read: ""
        },
    ]

  return {
    projects
  };
}