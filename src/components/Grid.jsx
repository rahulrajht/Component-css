import React from 'react'
import '../css/grid.css'
import Iframe from 'react-iframe'
function Grid() {
    return (
        <div className="main-div">
            <div>
                <h2>Grid</h2>
                <p className="para">CSS Grid Layout is a CSS layout method designed for the two-dimensional layout of items on a webpage or application. </p>
            </div>
            
            <h3 style={{ paddingBottom: "1rem" }}>Grid with 2 Items in a column</h3>
            <div className="grid-container">

                <div className="grid-col-2">
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
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522grid-col-2%2522%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522card-p%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2520%2522image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%2520fuga%2520eveniet%2520recusandae%252C%2520repellat%2520quasi%2520doloribus%2520corporis%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520suscipit%2520saepe%2520qui%2520ea%2520itaque%2520voluptas%2520magni%2520quod%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522card-w%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%2520%253D%2520%2522img%2522%2520src%2520%253D%2520%2522%2522%2520alt%2520%253D%2520%2522image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%2520fuga%2520eveniet%2520recusandae%252C%2520repellat%2520quasi%2520doloribus%2520corporis%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520suscipit%2520saepe%2520qui%2520ea%2520itaque%2520voluptas%2520magni%2520quod%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="582px" border="0" transform="scale(1)" overflow="hidden"

                    sandbox="allow-scripts allow-same-origin">
                </Iframe>


            </div>
            <h3 style={{ paddingBottom: "1rem" }}>Grid with 3 Items in a column</h3>
            <div className="grid-container">

                <div className="grid-col-3">
                    <div className="card-p" >
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                        <button className="btn-p">Click Me</button>
                    </div>
                    <div className="card-w" >
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                        <button className="btn-p">Click Me</button>
                    </div>
                    <div className="card-p" >
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima reprehenderit fuga eveniet recusandae, repellat quasi doloribus corporis suscipit saepe qui ea itaque voluptas magni quod!</p>
                        <button className="btn-p">Click Me</button>
                    </div>
                </div>
            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%2520%253D%2520%2522grid-col-3%2522%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522card-p%2522%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%2520fuga%2520eveniet%2520recusandae%252C%2520repellat%2520quasi%2520doloribus%2520corporis%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520suscipit%2520saepe%2520qui%2520ea%2520itaque%2520voluptas%2520magni%2520quod%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522card-w%2522%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%2520fuga%2520eveniet%2520recusandae%252C%2520repellat%2520quasi%2520doloribus%2520corporis%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520suscipit%2520saepe%2520qui%2520ea%2520itaque%2520voluptas%2520magni%2520quod%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%2520%253D%2520%2522card-p%2522%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%2520Heading%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%252C%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Minima%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520reprehenderit%2520fuga%2520eveniet%2520recusandae%252C%2520repellat%2520quasi%2520doloribus%2520corporis%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520suscipit%2520saepe%2520qui%2520ea%2520itaque%2520voluptas%2520magni%2520quod%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%2520%253D%2520%2522btn-p%2522%2520%253E%2520Click%2520Me%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
                    width=" 100%" height="720px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>

            </div>
        </div>
    )
}

export default Grid
