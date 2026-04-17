import imgURL from "../assets/profile0.jpg";

export function Home() {
  return (
    <section
      id="home"
      style={{ height: "90vh"}}
      className="home"
    >
      <div className="heading-section">
        <div className="heading">Nivedita Naskar</div>
        <div className="describe">Hello World😁 I develop websites for fun!!</div>
      </div>
      <div className="profile-image-section">
        <img className="profile-image-section" src={imgURL} />
      </div>
    </section>
  );
}
