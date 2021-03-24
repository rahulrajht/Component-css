import React from "react";
import Iframe from "react-iframe";
import "../css/nav.css";
function Nav() {
  return (
    <div className="main-div">
      <div className="nav-intro">
        <h2>Navbar</h2>
        <p className="para">
          {" "}
          Navbar is a common useful component to start with any kind of project.
          Use custom Nav to give style to your html elements.{" "}
        </p>
      </div>
      <h3 style={{ margin: "0.5rem 0" }}>Simple Navbar with hover effect</h3>
      <div className="nav-container">
        <nav className="navbar">
          <ul className="left-item">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>{" "}
            </li>
          </ul>
          <ul className="right-item">
            <li>
              <span>LogIn</span>
            </li>
            <li>
              <span>Sign Up</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cod">
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%252F*%2520A%2520Simple%2520Navbar%2520with%2520hover%2520Effect%2520*%252F%250A%253Cnav%2520class%2520%253D%2520%2522navbar%2522%2520%253E%250A%2520%2520%2520%2520%253Cul%2520class%2520%253D%2520%2522left-item%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%2520%253Ca%2520href%253D%2522%2523%2522%253E%2520Home%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%2520%253Ca%2520href%253D%2522%2523%2522%253E%2520About%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%2520%253Ca%2520href%253D%2522%2523%2522%253E%2520Contact%2520Us%2520%2520%253C%252Fa%253E%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253Cul%2520class%2520%253D%2520%2522right-item%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%2520%2520%253Cspan%253E%2520LogIn%2520%2520%2520%253C%252Fspan%253E%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%2520%2520%253Cspan%253E%2520Sign%2520Up%2520%253C%252Fspan%253E%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%253C%252Fnav%253E%250A"
          width=" 100%"
          height="390px"
          border="0"
          transform="scale(1)"
          overflow="hidden"
          sandbox="allow-scripts allow-same-origin"
        ></Iframe>
      </div>
    </div>
  );
}

export default Nav;
