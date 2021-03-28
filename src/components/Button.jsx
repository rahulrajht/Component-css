import React from "react";
import "../css/button.css";
import Iframe from "react-iframe";
function Button() {
  return (
    <div className="main-div">
      <div className="button-intro">
        <h2>Buttons</h2>
        <p className="para">
          Use several predefined button styles, each serving its own semantic
          purpose.{" "}
        </p>
      </div>

      <div className="btn">
        <button className="btn-pr">Primary</button>
        <a className="btn-link" href="http:// ">
          Link
        </a>
        <button className="btn-sr">Secondary</button>
        <button className="btn-ss">Success</button>
        <button className="btn-lg">Light</button>
        <button className="btn-dr">Dark</button>
        <button className="fab">+</button>
      </div>
      <div className="cod">
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%2520%253D%2520%2522btn-pr%2522%2520%253E%2520Primary%2520%2520%2520%253C%252Fbutton%253E%250A%253Ca%2520class%2520%253D%2520%2522btn-link%2522%2520href%253D%2522http%253A%252F%252F%2520%2522%253E%2520Link%2520%253C%252Fa%253E%250A%253Cbutton%2520class%2520%253D%2520%2522btn-sr%2522%2520%253E%2520Secondary%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%2520%253D%2520%2522btn-ss%2522%2520%253E%2520Success%2520%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%2520%253D%2520%2522btn-lg%2522%2520%253E%2520Light%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%2520%253D%2520%2522btn-dr%2522%2520%253E%2520Dark%2520%2520%253C%252Fbutton%253E%250A%253Cbutton%2520class%2520%253D%2520%2522fab%2522%2520%253E%2520%252B%2520%253C%252Fbutton%253E"
          width=" 100%"
          height="270px"
          border="0"
          transform="scale(1)"
          overflow="hidden"
          frameBorder="0"
        />
      </div>
      <h3>Icon</h3>

      <div className="icons">
        <i className="i-msg-L"></i>
        <i className="i-msg-M"></i>
      </div>
      <div className="cod">
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%2520%253Ci%2520class%2520%253D%2520%2522i-msg-L%2522%2520%253E%2520%253C%252Fi%253E%250A%2520%253Ci%2520class%2520%253D%2520%2522i-msg-M%2522%2520%253E%2520%253C%252Fi%253E"
          width=" 100%"
          height="167px"
          border="0"
          transform="scale(1)"
          overflow="hidden"
          sandbox="allow-scripts allow-same-origin"
          frameBorder="0"
        ></Iframe>
      </div>
    </div>
  );
}

export default Button;
