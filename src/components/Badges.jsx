import React from "react";
import "../css/badges.css";
import Iframe from "react-iframe";
function Badges() {
  return (
    <div className="main-div">
      <div>
        <h2>Badges</h2>
        <p className="para">
          Badges are the counters that appear on an app's or folder's icon to
          let you know how many new of something you have, such as email
          messages, texts, event invitations, and so on.{" "}
        </p>
      </div>

      <div>
        <h3>Badges on Avatar</h3>
      </div>
      <div className="avatar">
        <div className="avt-online">
          <img className="avt-img-100" src="https://bit.ly/2OCOMVx" alt="img" />
          <span className="online"></span>
        </div>

        <div className="avt-edit">
          <img className="avt-img-100" src="https://bit.ly/2OCOMVx" alt="img" />

          <svg
            className="edit"
            width="78"
            height="79"
            viewBox="0 0 78 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="24"
              y="41.5685"
              width="40"
              height="18"
              transform="rotate(-45 24 41.5685)"
              fill="#0F0E0E"
            />
            <path
              d="M54 10.6066L58.2426 6.36396C61.7574 2.84924 67.4558 2.84924 70.9706 6.36396V6.36396C74.4853 9.87868 74.4853 15.5772 70.9706 19.0919L66.7279 23.3345L54 10.6066Z"
              fill="#0F0E0E"
            />
            <path
              d="M13.9737 69.005C9.90054 71.4374 7.86395 72.6536 7.03758 71.8273C6.21121 71.0009 7.42744 68.9643 9.8599 64.8911L21.2191 45.8699C22.1277 44.3485 22.582 43.5878 23.3093 43.4975C24.0366 43.4072 24.6631 44.0337 25.9161 45.2868L33.5781 52.9487C34.8311 54.2018 35.4576 54.8283 35.3673 55.5556C35.277 56.2828 34.5163 56.7371 32.9949 57.6457L13.9737 69.005Z"
              fill="#151515"
            />
          </svg>
        </div>

        <div className="avt-sq-online">
          <img className="avt-sq-100" src="https://bit.ly/2OCOMVx" alt="img" />
          <span className="online"></span>
        </div>
      </div>

      <div className="cod">
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522avt-online%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-100%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520alt%2520%253D%2520%2522img%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cspan%2520class%2520%253D%2520%2522online%2522%2520%253E%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
          width=" 100%"
          height="227px"
          border="0"
          transform="scale(1)"
          overflow="hidden"
          sandbox="allow-scripts allow-same-origin"
          frameBorder="0"
        ></Iframe>
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522avt-edit%2522%253E%250A%2520%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-100%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%2520%253Csvg%2520class%2520%253D%2520%2522edit%2522%2520width%2520%253D%252278%2522%2520height%253D%252279%2522%2520viewBox%253D%25220%25200%252078%252079%2522%2520fill%253D%2522none%2522%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%2520%253E%250A%2520%2520%253Crect%2520x%253D%252224%2522%2520y%253D%252241.5685%2522%2520width%253D%252240%2522%2520%2520height%253D%252218%2522%2520transform%253D%2522rotate%28-45%252024%252041.5685%29%2522%2520fill%253D%2522%25230F0E0E%2522%2520%252F%253E%250A%2520%2520%253Cpath%2520%250A%2520%2520%2520%2520%2520%2520d%253D%2522M54%252010.6066L58.2426%25206.36396C61.7574%25202.84924%252067.4558%25202.84924%252070.9706%25206.36396V6.36396C74.4853%25209.87868%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252074.4853%252015.5772%252070.9706%252019.0919L66.7279%252023.3345L54%252010.6066Z%2522%2520fill%253D%2522%25230F0E0E%2522%2520%252F%253E%250A%2520%2520%253Cpath%250A%2520%2520%2520%2520%2520%2520d%253D%2522M13.9737%252069.005C9.90054%252071.4374%25207.86395%252072.6536%25207.03758%252071.8273C6.21121%252071.0009%25207.42744%252068.9643%25209.8599%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252064.8911L21.2191%252045.8699C22.1277%252044.3485%252022.582%252043.5878%252023.3093%252043.4975C24.0366%252043.4072%252024.6631%252044.0337%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252025.9161%252045.2868L33.5781%252052.9487C34.8311%252054.2018%252035.4576%252054.8283%252035.3673%252055.5556C35.277%252056.2828%252034.5163%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252056.7371%252032.9949%252057.6457L13.9737%252069.005Z%2522%2520fill%253D%2522%2523151515%2522%2520%2520%252F%253E%250A%2520%2520%253C%252Fsvg%253E%250A%253C%252Fdiv%253E%250A"
          width=" 100%"
          height="424px"
          border="0"
          transform="scale(1)"
          overflow="hidden"
          frameBorder="0"
        ></Iframe>
        <Iframe
          url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522avt-sq-online%2522%253E%250A%2520%2520%253Cimg%2520class%2520%253D%2520%2522avt-sq-100%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%2520%253Cspan%2520class%2520%253D%2522online%2522%253E%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
          width=" 100%"
          height="227px"
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

export default Badges;
