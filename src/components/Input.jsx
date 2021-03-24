import React from 'react'
import '../css/input.css'
import Iframe from 'react-iframe'

function Input() {
    return (
        <div className="main-div">
            <div className="input-intro">
                <h2>Input Box</h2>
                <p className="para">When you think to interaction with website Inputs fields are most common component to take value from users.
                    Here are some predefined input type fileds. Copy the code and use it in your projects.
                 </p>
            </div>
        
            <div className="input-box">
                <div className="text-field">
                    <input className="input-t" type="text" placeholder="Your Input Here" id="name" name="name" required />
                    <div className="btn-input">Submit</div>
                </div>

                <div className="password">
                    <input className="input-p" type="password" name="password" placeholder="Password" id="password" name="password" required />
                    <div className="btn-submit">Submit</div>
                </div>

            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Text%2520Input%2520Box%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522text-field%2522%253E%250A%2520%2520%253Cinput%250A%2520%2520%2520%2520class%2520%253D%2520%2522input-t%2522%250A%2520%2520%2520%2520type%2520%253D%2520%2522text%2522%250A%2520%2520%2520%2520placeholder%2520%253D%2520%2522Your%2520Input%2520Here%2522%250A%2520%2520%2520%2520id%2520%253D%2520%2522name%2522%250A%2520%2520%2520%2520name%2520%253D%2520%2522name%2522%250A%2520%2520%2520%2520required%250A%2520%2520%252F%253E%250A%2520%2520%253Cdiv%2520class%2520%253D%2520%2522btn-input%2522%2520%253E%2520Submit%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="390px" border="0" transform="scale(1)" overflow="hidden"
                />

                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Password%2520Input%2520Box%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522password%2522%253E%250A%2520%2520%253Cinput%250A%2520%2520%2520%2520class%2520%253D%2520%2522input-p%2522%250A%2520%2520%2520%2520type%2520%253D%2520%2522password%2522%250A%2520%2520%2520%2520name%2520%253D%2520%2522password%2522%250A%2520%2520%2520%2520placeholder%2520%253D%2520%2522Password%2522%250A%2520%2520%2520%2520id%2520%253D%2520%2522password%2522%250A%2520%2520%2520%2520name%2520%253D%2520%2522password%2522%250A%2520%2520%2520%2520required%250A%2520%2520%252F%253E%250A%2520%2520%253Cdiv%2520class%2520%253D%2520%2522btn-submit%2522%2520%253E%2520Submit%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="410px" border="0" transform="scale(1)" overflow="hidden"
                />

            </div>

        </div>
    )
}

export default Input
