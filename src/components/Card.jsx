import React from 'react'
import '../css/card.css'
import Iframe from 'react-iframe'
function Card() {

    return (
        <div className="main-div">
            <div className="card-intro">
                <h2>Cards</h2>
                <p className="para">Card is a most important component when you think some elements design together.You can think a card as a container that have image, heading, information and a button. There are variety of cards you can use for style your component. </p>
            </div>
            <h2>Card With Images</h2>
            <div className="card">
                {/* This is Primary Card */}
                <div className="card-p" >
                    <img className="img" src="https://images.unsplash.com/photo-1615152387690-e2690878b3fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button className="btn-p">Click Me</button>
                </div>
                <div className="card-w" >
                    <img className="img" src="https://images.unsplash.com/photo-1615152387690-e2690878b3fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button className="btn-p">Click Me</button>
                </div>
                <div className="card-dismiss" >
                    <div className="card-p" >
                        <img className="img" src="https://images.unsplash.com/photo-1615152387690-e2690878b3fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                        <button>Click Me</button>

                    </div>
                    <span className="close">X</span>
                </div>


            </div>
            <div className="cod">
                <div>
                    <Iframe
                        url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520Primary%2520Card%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-p%2522%2520%253E%250A%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2520%2522%2520alt%2520%253D%2520%2522image%2522%2520%252F%253E%250A%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%2520reprehenderit%2520%250A%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                        width=" 100%" height="330px" border="0" transform="scale(1)" overflow="hidden"
                    />


                    <Iframe
                        url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520White%2520background%2520Card%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-w%2522%2520%253E%250A%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2520%2522image%2522%2520%252F%253E%250A%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                        width=" 100%" height="350px" border="0" transform="scale(1)" overflow="hidden"
                    />

                    <Iframe
                        url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520card%2520with%2520close%2520icon%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-dismiss%2522%2520%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2522card-p%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2520%2522image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cspan%2520class%2520%253D%2520%2522close%2522%2520%253E%2520X%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
                        width=" 100%" height="410px" border="0" transform="scale(1)" overflow="hidden"
                    />

                </div>
            </div>

            <h2>Card With Text </h2>

            <div className="card">
                <div className="card-simple">
                    <h2>Heading</h2>
                    <div> <em>08 March 2021 </em></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button>Subscribe</button>
                </div>

                <div className="card-w" >
                    <h2>Heading</h2>
                    <div> <em>08 March 2021 </em></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button>Click Me</button>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520simple%2520card%2520%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-simple%2522%2520%253E%250A%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cem%253E%252008%2520March%25202021%2520%253C%252Fem%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Subscribe%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="390px" border="0" transform="scale(1)" overflow="hidden"

                />

                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520simple%2520white%2520background%2520card%2520%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-w%2522%2520%253E%250A%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cem%253E%252008%2520March%25202021%2520%253C%252Fem%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="390px" border="0" transform="scale(1)" overflow="hidden"

                />

            </div>
            <h2>Card With Shadow </h2>
            <div className="card">
                <div className="card-p-shadow" >
                    <img className="img" src="https://images.unsplash.com/photo-1615152387690-e2690878b3fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                    <h2>Heading</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button>Click Me</button>
                </div>
                <div className="card-w-shadow" >
                    <h2>Heading</h2>
                    <span> <em>08 March 2021 </em></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                    <button>Click Me</button>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520card%2520with%2520shadow%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-p-shadow%2522%2520%253E%250A%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%253D%2522image%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Ch2%253EHeading%253C%252Fh2%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="350px" border="0" transform="scale(1)" overflow="hidden" />


                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520card%2520with%2520shadow%2520white%2520background%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-w-shadow%2522%2520%253E%250A%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%253Cspan%253E%2520%253Cem%253E%252008%2520March%25202021%2520%253C%252Fem%253E%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="350px" border="0" transform="scale(1)" overflow="hidden" />



            </div>
            <h2>Card With Text Overlay </h2>
            <div className="card">
                <div className="card-text">
                    <img className="img" src="https://images.unsplash.com/photo-1615136068144-2a4e92eefdb5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus blanditiis reiciendis labore suscipit aliquid?</p>
                    <button>See More</button>
                </div>
                <div className="card-text">
                    <img className="img" src="https://images.unsplash.com/photo-1615136068144-2a4e92eefdb5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus blanditiis reiciendis labore suscipit aliquid?</p>

                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520card%2520with%2520overlay%2520text%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-text%2522%2520%253E%250A%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2522%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Perferendis%250A%2520%2520%2520%2520%2520%2520%2520repellendus%2520blanditiis%2520reiciendis%2520labore%2520suscipit%2520aliquid%253F%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520See%2520More%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="330px" border="0" transform="scale(1)" overflow="hidden" />


                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520card%2520with%2520overlay%2520text%2520*%252F%250A%253Cdiv%2520class%2520%253D%2520%2522card-text%2522%2520%253E%250A%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2522%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Perferendis%250A%2520%2520%2520%2520%2520%2520%2520repellendus%2520blanditiis%2520reiciendis%2520labore%2520suscipit%2520aliquid%253F%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden" />
            </div>
        </div>
    )
}

export default Card
