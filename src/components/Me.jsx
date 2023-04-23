import image from "../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import "../styles/Me.css";

function Me() {
  return (
    <div>
      <h1>I am Adel Al Qosi</h1>
      <p className="center">a Web Developer</p>
      <img src={image} className="home-page-image" alt="nice-pic" />
      <div className="corner-shape">
      <svg
        id="visual2"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle cx="625" cy="200" r="100" fill="#4CAF50" />
        <circle cx="700" cy="500" r="60" fill="#4CAF50" />
        <circle cx="750" cy="350" r="80" fill="#4CAF50" />
      </svg>
        <svg
          viewBox="0 0 900 600"
          width="900"
          height="600"
          className="svg-curly-shape2"
        >
          <g transform="translate(55.73991191171626 599.4108960601251)">
            <path
              d="M164.9 -263.2C200.5 -233.8 206.8 -165.6 214.4 -109.5C222 -53.4 230.8 -9.5 229.7 36.6C228.7 82.8 217.9 131.1 190.5 168.1C163.1 205 119.2 230.6 69.6 252C20 273.5 -35.2 290.7 -86.9 282C-138.6 273.2 -186.8 238.4 -233.6 196C-280.4 153.6 -325.8 103.5 -337.9 46.1C-349.9 -11.2 -328.7 -75.8 -293.1 -125.5C-257.4 -175.2 -207.4 -210 -156.1 -232.3C-104.9 -254.5 -52.4 -264.3 6.1 -273.8C64.7 -283.3 129.4 -292.7 164.9 -263.2"
              fill="#4CAF50"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Me;
