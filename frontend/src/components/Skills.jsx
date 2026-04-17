import { useEffect } from "react";
import Backend from "../assets/Backend.jpg";
import Frontend from "../assets/Frontend.jpg";
import Design from "../assets/Design.jpg";

function OneSkill(props) {
  return (
    <div className="one-skill-section">
      <div className="skill-info">
        <div className="skill-heading">{props.name}</div>
        <div className="skill-describe"></div>
      </div>
      <div className="skill-image-container">
        <img src={props.img} className="skill-image" />
      </div>
    </div>
  );
}

export function Skills() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const textContainer = document.querySelector(".skills-heading");
      console.log(window.scrollY);
      if (window.scrollY > 1000 && window.scrollY < 1800) {
        const scrollPosition = (window.scrollY - 1000) / 4.2;
        textContainer.style.transform = "translateX(-" + scrollPosition + "%)";
      }
    });
  }, [window.scrollY]);

  return (
    <section id="skills" style={{ height: "100vh" }} className="skills">
      <div className="section-heading-container skills-heading">
        <div className="section-heading-text">Skills</div>
      </div>
      <div className="section-content"></div>
      <div className="skills-info">
        <OneSkill name="Backend" img={Backend} />
        <OneSkill name="Frontend" img={Frontend} />
        <OneSkill name="Design" img={Design}/>
      </div>
    </section>
  );
}
