import React from 'react'
import '../css/modal.css'
import Iframe from 'react-iframe'
function Modal() {
    return (
        <div className="main-div">
            <div className="modal-intro">
                <h2>Modal</h2>
                <p className="para">A modal is a dialog box/popup window that is displayed on top of the current page. </p>
            </div>
            
            <div className="modal">
                <div className="modal-container">
                    <h1 >Modal Title</h1>
                    <p className="md-text">Modal body text goes here</p>
                    <div className="modal-btns">
                        <button className="btn-pr">OK</button>
                    </div>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%250A%253Cdiv%2520class%2520%253D%2520%2522modal-container%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Ch1%253E%2520Modal%2520Title%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%253Cp%2520class%2520%253D%2520%2522md-text%2522%2520%253E%2520Modal%2520body%2520text%2520goes%2520here%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522modal-btns%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-pr%2522%2520%253E%2520OK%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>

            </div>
            <div className="modal">
                <div className="modal-container">
                    <h1 className="tm">Delete Account</h1>
                    <p className="md-text">Are you sure you want to delete your account?</p>
                    <div className="modal-btns">
                        <button className="btn-cancel">Cancel</button>
                        <button className="btn-delete">Delete</button>
                    </div>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522modal-container%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Ch1%2520class%2520%253D%2520%2522tm%2522%2520%253E%2520Delete%2520Account%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%253Cp%2520%2520class%2520%253D%2520%2522md-text%2522%2520%253E%2520Are%2520you%2520sure%2520you%2520want%2520to%2520delete%2520your%2520account%253F%2520%253C%252Fp%253E%250A%2520%2520%2509%2520%253Cdiv%2520class%2520%253D%2520%2522modal-btns%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-cancel%2522%253E%2520Cancel%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-delete%2522%253E%2520Delete%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden"

                    sandbox="allow-scripts allow-same-origin">
                </Iframe>

            </div>
        </div>
    )
}

export default Modal
