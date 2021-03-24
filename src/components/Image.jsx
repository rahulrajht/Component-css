import React from 'react'
import '../css/image.css'
import Iframe from 'react-iframe'
function Image() {
    return (
        <div className="main-div">
            <div className="image-intro">
                <h2>Responsive Images</h2>
                <p className="para">Use Responsive images that work well on devices with widely differing screen sizes, resolutions, and other such features.  </p>
            </div>
            
            <h2>Square Box Image</h2>
            <div className="images">
                <div className="container-L">
                    <img className="img-L-R" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className="container-M">
                    <img className="img-M-R" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Large%2520size%2520Responsive%2520Image%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522container-L%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img-L-R%2522%2520src%2520%253D%2520%2522%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="230px" border="0" transform="scale(1)" overflow="hidden"
                />


                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Medium%2520size%2520Responsive%2520Image%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522container-M%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img-M-R%2522%2520src%2520%253D%2520%2522%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="230px" border="0" transform="scale(1)" overflow="hidden"
                />

            </div>
            <h2>Circle Image</h2>
            <div className="images">
                <div className="container-L-C">
                    <img className="img-L-R-C" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className="container-M-C">
                    <img className="img-M-R-C" src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Large%2520Circle%2520size%2520Responsive%2520Image%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522container-L-C%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img-L-R-C%2522%2520src%2520%253D%2520%2522%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="230px" border="0" transform="scale(1)" overflow="hidden"
                />


                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Medium%2520Circle%2520size%2520Responsive%2520Image%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522container-M-C%2522%2520%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img-M-R-C%2522%2520src%2520%253D%2520%2522%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="230px" border="0" transform="scale(1)" overflow="none"
                />
            </div>

        </div>
    )
}

export default Image
