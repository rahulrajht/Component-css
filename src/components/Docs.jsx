import React from "react";
import { useState } from "react";
import "../index.css";
import Button from "./Button";
import Avatar from "./Avatar";
import Alert from "./Alert";
import Card from "./Card";
import Image from "./Image";
import Input from "./Input";
import Badges from "./Badges";
import Lists from "./Lists";
import logo from "../images/Login.svg";
import Nav from "./Nav";
import Installation from "./Installation";
import Modal from "./Modal";
import Grid from "./Grid";
import TextUtils from "./TextUtils";
import { Link } from "react-router-dom";
function Docs() {
  const [screen, setScreen] = useState(<Installation />);
  return (
    <div>
      <nav className="nav-bar">
        <div className="left">
          <li>
            {" "}
            <img src={logo} alt="Flick" />
          </li>
          <li>Flick css</li>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/docs">
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="side-bar">
          <div>
            <li onClick={() => setScreen(<Installation />)}> Installation </li>
          </div>
          <h3> Components</h3>
          <ul>
            <li onClick={() => setScreen(<Avatar />)}> Avatar </li>
            <li onClick={() => setScreen(<Alert />)}> Alert </li>
            <li onClick={() => setScreen(<Badges />)}> Badges </li>
            <li onClick={() => setScreen(<Button />)}> Button </li>
            <li onClick={() => setScreen(<Card />)}> Card </li>
            <li onClick={() => setScreen(<Image />)}> Image </li>
            <li onClick={() => setScreen(<Input />)}> Input Box </li>
            <li onClick={() => setScreen(<Lists />)}> Lists </li>
            <li onClick={() => setScreen(<Nav />)}> Navigation </li>
            <li onClick={() => setScreen(<Modal />)}> Modal </li>
            <li onClick={() => setScreen(<Grid />)}> Grid </li>
            <li onClick={() => setScreen(<TextUtils />)}> Text Utils </li>
          </ul>
        </div>

        <div className="main">{screen}</div>
      </section>
    </div>
  );
}

export default Docs;
