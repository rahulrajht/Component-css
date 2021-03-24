import React from 'react'
import '../css/alert.css';
import Iframe from 'react-iframe'
function Alert() {
    return (
        <div className="main-div">
            <div className="button-intro">
                <h2>Alert</h2>
                <p className="para">Alert messages can be used to notify the user about something special: danger, success, information or warning. </p>
            </div>
            <div className="btn-example">
               
            </div>
            <div className="alert">
                <div className="alert-s">This is a success alert. </div>
                <div className="alert-d">This is a danger alert.</div>
                <div className="alert-w">This is a warning alert.</div>
                <div className="alert-i">This is a info alert.</div>
                <div className="alert-p">This is a primary alert.</div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13px&lh=118%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522alert-s%2522%2520%253E%2520This%2520is%2520a%2520success%2520alert.%2520%253C%252Fdiv%253E%250A%253Cdiv%2520class%2520%253D%2520%2522alert-d%2522%2520%253E%2520This%2520is%2520a%2520danger%2520alert.%2520%2520%253C%252Fdiv%253E%250A%253Cdiv%2520class%2520%253D%2520%2522alert-w%2522%2520%253E%2520This%2520is%2520a%2520warning%2520alert.%2520%253C%252Fdiv%253E%250A%253Cdiv%2520class%2520%253D%2520%2522alert-i%2522%2520%253E%2520This%2520is%2520a%2520info%2520alert.%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253Cdiv%2520class%2520%253D%2520%2522alert-p%2522%2520%253E%2520This%2520is%2520a%2520primary%2520alert.%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
                    width=" 100%" height="212px" border="0" transform="scale(1)" overflow="scroll"
                />

            </div>

        </div>
    )
}

export default Alert
