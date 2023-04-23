import image from "../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import "../styles/Me.css";

function Me() {
  return (
    <div>
      <h1>I am Adel Al Qosi</h1>
      <p className="center">a Web Developer</p>
      <img src={image} className="home-page-image" alt="nice-pic" />
    </div>
  );
}

export default Me;
