import React from 'react'
import '../css/textUtil.css'
import Iframe from 'react-iframe'
function TextUtils() {
    return (
        <div className="main-div">
            <div >
                <h2>Text Utilities</h2>
                <p className="para">Here are some example of different types of text, text with gray color and center align texts. </p>
            </div>
          
            <h3 style={{ paddingBottom: "1rem" }}>Headings</h3>
            <div className="text">
                <h1>This is a h1 Heading</h1>
                <h2>This is a h2 Heading</h2>
                <h3>This is a h3 Heading</h3>
                <h4>This is a h4 Heading</h4>
                <h5>This is a h5 Heading</h5>
                <h6>This is a h6 Heading</h6>

            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Ch1%253E%2520This%2520is%2520a%2520h1%2520Heading%2520%253C%252Fh1%253E%250A%253Ch2%253E%2520This%2520is%2520a%2520h2%2520Heading%2520%253C%252Fh2%253E%250A%253Ch3%253E%2520This%2520is%2520a%2520h3%2520Heading%2520%253C%252Fh3%253E%250A%253Ch4%253E%2520This%2520is%2520a%2520h4%2520Heading%2520%253C%252Fh4%253E%250A%253Ch5%253E%2520This%2520is%2520a%2520h5%2520Heading%2520%253C%252Fh5%253E%250A%253Ch6%253E%2520This%2520is%2520a%2520h6%2520Heading%2520%253C%252Fh6%253E"
                    width=" 100%" height="255px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>



            </div>
            <div className="text">
                <p>This is a small size text.</p>
                <em>This is a emphasis text.</em>
                <p>This is a small size text with <span className="gray-text">gray color text</span> inside span tag.</p>
                <div>
                    <p className="center-text">This is a center text</p>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cp%253E%2520This%2520is%2520a%2520small%2520size%2520text.%2520%253C%252Fp%253E%250A%253Cem%253E%2520This%2520is%2520a%2520emphasis%2520text.%2520%253C%252Fem%253E%250A%253Cp%253E%2520This%2520is%2520a%2520small%2520size%2520text%2520with%2520%253Cspan%2520class%2520%253D%2520%2522gray-text%2522%2520%253E%2520gray%2520color%2520text%253C%252Fspan%253E%2520inside%2520span%2520tag.%2520%253C%252Fp%253E%250A%253Cdiv%253E%250A%2520%2520%253Cp%2520class%2520%253D%2520%2522center-text%2522%2520%253E%2520This%2520is%2520a%2520center%2520text%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
                    width=" 100%" height="264px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>

            </div>
        </div>
    )
}
export default TextUtils
