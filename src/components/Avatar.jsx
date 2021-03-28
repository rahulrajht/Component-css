import React from 'react'
import '../css/avatar.css'
import Iframe from 'react-iframe'
function Avatar() {
    return (
        <div className="main-div">
            <div>
                <h2>Avatar</h2>
                <p className="para">Use custom avatar to give stylish look to your html elements. </p>
            </div>
          
            <div>
                <h3>Simple Circle Avatar with 2px border</h3>
            </div>
            <div className="avatar">
                <img className="avt-img-150" src="https://bit.ly/2OCOMVx"  alt="img" />
                <img className="avt-img-100" src="https://bit.ly/2OCOMVx"  alt="img" />
                <img className="avt-img-50" src="https://bit.ly/2OCOMVx" alt="img" />
                <img className="avt-img-25" src="https://bit.ly/2OCOMVx" alt="img" />
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13px&lh=118%25&si=false&es=2x&wm=false&code=%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-150%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-100%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-50%2522%2520%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-img-25%2522%2520%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
                width = "100%" height="205px" border="0"  overflow ="scroll" frameBorder="0"
                />
              
            </div>
            <div>
                <h3>Avatar with square shape</h3>
            </div>
            <div className="avatar-sq">
                <img className="avt-sq-150"  src="https://bit.ly/2OCOMVx" alt="img" />
                <img className="avt-sq-100"  src="https://bit.ly/2OCOMVx" alt="img" />
                <img className="avt-sq-50"  src="https://bit.ly/2OCOMVx"alt="img" />
                <img className="avt-sq-25" src="https://bit.ly/2OCOMVx" alt="img" />
            </div>
            <div className="cod">
                <Iframe
                url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13px&lh=118%25&si=false&es=2x&wm=false&code=%2520%253Cimg%2520class%2520%253D%2520%2522avt-sq-150%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-sq-100%2522%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-sq-50%2522%2520%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%253Cimg%2520class%2520%253D%2520%2522avt-sq-25%2522%2520%2520src%253D%2522https%253A%252F%252Fbit.ly%252F2OCOMVx%2522%2520%2520alt%253D%2522img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
                width=" 100%" height="205px" border="0" transform="scale(1)" overflow="hidden" frameBorder="0"
                />
              
              

            </div>

        </div>
    )
}

export default Avatar
