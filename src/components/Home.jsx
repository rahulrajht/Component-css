import { Link } from "react-router-dom";
import "../css/home.css";
function Home() {
  return (
    <div className="parent">
     <div className="bg-home">
      <div className="main-ct">
        <h1 className="title"> Flick CSS </h1>
        <p className="para1">
          Flick CSS is a component library to build your projects easily. Now you
          don't need to focus too much on design things. Just copy the code and
          use it in your projects so that you can build your projects without
          mugging up how to align items in center{" "}
          <span role="img" aria-label="thinking">
            🤔
          </span>{" "}
          ? How to create cards, How to align cards vertically or Horizontally
          in a container{" "}
          <span role="img" aria-label="thinking">
            🤔
          </span>{" "}
          ?{" "}
        </p>
        <p
          style={{ margin: "0.7rem 0.5rem", lineHeight: "25px", width: "80%" }}
        >
          {" "}
          Flick CSS is a solution to your problems{" "}
          <span role="img" aria-label="smiling">
            😊
          </span>
          . It is user-friendly, customizable and Responsive.{" "}
        </p>

        <button className="btn-p">
          <Link className="link" to="/docs">
            Getting Started
          </Link>
        </button>
      </div>

      <footer>
        <nav>
          <ul>
            <a href="https://github.com/rahulrajht">
              <i className="fa fa-github"> </i>
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar-0bb7171a7/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/_nightmare_seeker_/">
              <i className="fa fa-instagram"></i>
            </a>
          </ul>
        </nav>
      </footer>
    </div>
    </div>
  );
}
export default Home;
