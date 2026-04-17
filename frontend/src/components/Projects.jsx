import { useEffect, useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Project(props) {
  return (
    <div className="project-info">
      <div className="project-title">{props.name}</div>
      <div className="project-describe">{props.describe}</div>
      <div className="gallery">
        <img src={props.image_link} className="project-gallery-image" />
      </div>
    </div>
  );
}
export function Projects() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const textContainer = document.querySelector(".projects-heading");
      const gallery = document.querySelector(".projects-info");
      if (window.scrollY > 350 && window.scrollY < 750) {
        const scrollPosition = (window.scrollY - 408) / 3.1;
        const opac = (window.scrollY-408) / 350;
        console.log(window.scrollY);
        console.log(scrollPosition);
        textContainer.style.transform = "translateX(-" + scrollPosition + "%)";
        gallery.style.opacity = opac;
      }
    });
  }, [window.scrollY]);
  return (
    <section id="projects" style={{ height: "100vh" }} className="projects">
      <div className="section-heading-container projects-heading">
        <div className="section-heading-text">Projects</div>
      </div>
      <div className="section-content"></div>
      <div className="projects-info">
        
        <Project
          name="YTripoff"
          describe="A Youtube Design Clone"
          image_link={project1}
        />
        <Project
          name="Online Booking Webpage"
          describe="An online ticket booking webpage made with Figma"
          image_link={project2}
        />
        <Project
          name="Website home page synchronicity season 2"
          describe="A Basic home page using figma"
          image_link={project3}
        />
        <Project
          name="FIFA WC 2022"
          describe=""
          image_link={project4}
        />
        <Project
          name="Museum"
          describe="Meseum page using Figma"
          image_link={project5}
        />
      </div>
    </section>
  );
}
