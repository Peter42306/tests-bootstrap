import { Col, Row } from "react-bootstrap";
import MainProjectCard from "./MainProjectCard/MainProjectCard";

const MainProjectsSection = () => {

    return(
        <section id="main-projects" className="mt-3">
            <h4>Projects</h4>
            <p>Projects build...</p>            
            <Row className="g-4">
                {allProjects.map((project) => (
                    <Col xs={12} key={project.id}>
                        <MainProjectCard {...project}/>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

const allProjects = [
    {
        id: "draught-survey",
        title: "PhotoMap",

        subtitle:
            "PhotoMap is a web application for storing, organizing and exploring photo collections.",

        images: [
            `${process.env.PUBLIC_URL}/images/Thumbnail_Draught_Survey_Web_App_20250316_111106_resized.jpg`,
            `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_213826.jpg`,
            `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_213946.jpg`,
            `${process.env.PUBLIC_URL}/images/Screenshot_2025-11-05_214001.jpg`,
        ],

        description:
            "PhotoMap is a web application for storing, organizing and exploring photo collections. Designed to create collections, upload photos, add notes, view them on an interactive map, generate archives, and securely share collections with others.",

        features: [
            "Photo collections",
            "Interactive map",
            "Notes",
            "ZIP archives", 
            "Secure sharing",
            "Object Storage (S3)",
            "JWT Authentication",
            "Google Sign-In",
            "Collection statistics",
            "Background workers",            
        ],

        stack:[
            "C#",
            "ASP.NET Core 8",
            "Entity Framework Core",
            "ASP.NET Core Identity",
            "JWT Authentication",
            "Google OAuth 2.0",
            "PostgreSQL",
            "Amazon S3 API (Hetzner Object Storage)",
            "ImageSharp",
            "SendGrid",
            "Background Services",
            "React",
            "Vite",
            "React Router",            
            "Bootstrap Icons",
            "React Bootstrap",
            "Bootstrap 5",
            "MapTiler",
            "Ubuntu",
            "Nginx",
            "systemd",
            "Git"
        ],
            

        architecture:
            "Server-rendered ASP.NET Core MVC application using EF Core and PostgreSQL.",

        administration:
            "The application includes an administration panel for managing users and monitoring system usage. Features: User management, Enable or disable Pro Storage plans, Activate or deactivate user accounts, Collection, photo and archive statistics, Storage usage monitoring, Last login tracking, Registration date tracking, System-wide totals",

        liveUrl:
            "https://draught-survey.p.zalizko.site/",

        gitHubUrl:
            "https://github.com/Peter42306/DraughtSurveyWebApp",

        youTubeUrl:
            "https://youtu.be/w-mKc8zRkAc",
    },
];

export default MainProjectsSection;