import React from "react";
import Iframe from "react-iframe";
import "../css/installation.css";

function Installation() {
  return (
    <div className="main-div ">
      <div className="ct">
        <h1>Getting Started</h1>
        <h4>CSS Style</h4>
        <p className="para">
          To get the styles of the components, add the following line of code in
          the head tag of your html document.
        </p>
      </div>
      <div className="cod">
          <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=css&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fflick-css.netlify.app%252Fcss%252Fstyle.css%2522%253E%250A"
          width=" 100%"
          height="116px"
          transform="scale(1)"
          overflow="hidden"
          sandbox="allow-scripts allow-same-origin"
        ></Iframe>

        <h2 style={{ margin: "1rem 0" }}>
          {" "}
          An example file would look something like this{" "}
        </h2>
        <Iframe
         url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=css&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253C%21DOCTYPE%2520html%253E%250A%253Chtml%2520lang%253D%2522en%2522%253E%250A%253Chead%253E%250A%2520%2520%2520%2520%253Cmeta%2520charset%253D%2522UTF-8%2522%253E%250A%2520%2520%2520%2520%253Cmeta%2520name%253D%2522viewport%2522%2520content%253D%2522width%253Ddevice-width%252C%2520initial-scale%253D1.0%2522%253E%250A%2520%2520%2520%2520%253Cmeta%2520http-equiv%253D%2522X-UA-Compatible%2522%2520content%253D%2522ie%253Dedge%2522%253E%250A%2520%2520%2520%2520%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fflick-css.netlify.app%252Fcss%252Fstyle.css%2522%253E%250A%2520%2520%2520%2520%253Ctitle%253ELocus%253C%252Ftitle%253E%250A%250A%253C%252Fhead%253E%250A%253Cbody%253E%250A%2520%2520%2520%2520%2520%2520%250A%253C%252Fbody%253E%250A%253C%252Fhtml%253E"
          width=" 100%"
          height="368px"
          transform="scale(1)"
          overflow="hidden"
          sandbox="allow-scripts allow-same-origin"
        ></Iframe>
      </div>
    </div>
  );
}

export default Installation;
