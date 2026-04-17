import React, { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import "../styles/General.css";

function App() {
  useEffect(() => {
    const trigger = document.querySelector("body");

    trigger.addEventListener("mousemove", function (e) {
      const smoke = document.createElement("div");
      smoke.classList.add("smoke");
      document.body.appendChild(smoke);

      const x = e.clientX - trigger.getBoundingClientRect().left;
      const y = e.clientY - trigger.getBoundingClientRect().top;

      smoke.style.left = `${x}px`;
      smoke.style.top = `${y}px`;

      setTimeout(() => {
        smoke.remove();
      }, 3000);
    });
  }, []);
  return (
    <>
      <Navigation />
      <div className="body">
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <div className="footer">
          <div className="foot">
            <a href="/">
              <button className="tabbutton2">PRIVACY POLICY</button>
            </a>
            <a href="/">
              <button className="tabbutton2">TERMS OF SERVICE</button>
            </a>
          </div>
          <div className="copyright">
            Copyright&#169; 2024 Arnab Das. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
