import React from 'react'
import Iframe from 'react-iframe'
import '../css/lists.css'
function Lists() {
    return (
        <div className="main-div">
            <div className="list-intro">
                <h2>Lists</h2>
                <p className="para">Lists is useful when you have to bundle things. It can be used to show stacked lists, grocery items, or the way you want to use. </p>
            </div>
           
            <h3>Normal List</h3>
            <div className="list">
                <ul className="ul-lists">
                    <li>This is list Item 1</li>
                    <li>This is list Item 2</li>
                    <li>This is list Item 3</li>
                    <li>This is list Item 4</li>
                    <li>This is list Item 5</li>
                </ul>

            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520Simple%2520Unordered%2520List%2520*%252F%250A%253Cul%2520class%2520%253D%2520%2522ul-lists%2522%2520%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25201%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25202%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25203%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25204%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25205%2520%253C%252Fli%253E%250A%253C%252Ful%253E%250A"
                    width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>
            </div>
            <h3>List with box</h3>
            <div className="list">
                <ul className="box-list">
                    <li > This is list Item 1 <input type="checkbox" /> </li>
                    <li > This is list Item 2 <input type="checkbox" /> </li>
                    <li > This is list Item 3 <input type="checkbox" /> </li>
                    <li > This is list Item 4 <input type="checkbox" /> </li>
                    <li > This is list Item 5 <input type="checkbox" /> </li>
                </ul>

            </div>
            <div className="cod">
                <Iframe
                    url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=14px&lh=144%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520%2520Unordered%2520List%2520Box%2520*%252F%250A%253Cul%2520class%2520%253D%2520%2522box-list%2522%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25201%2520%253Cinput%2520type%2520%253D%2520%2522checkbox%2522%2520%252F%253E%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25202%2520%253Cinput%2520type%2520%253D%2520%2522checkbox%2522%2520%252F%253E%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25203%2520%253Cinput%2520type%2520%253D%2520%2522checkbox%2522%2520%252F%253E%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25204%2520%253Cinput%2520type%2520%253D%2520%2522checkbox%2522%2520%252F%253E%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25205%2520%253Cinput%2520type%2520%253D%2520%2522checkbox%2522%2520%252F%253E%2520%253C%252Fli%253E%250A%253C%252Ful%253E%250A"
                    width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden"
                    sandbox="allow-scripts allow-same-origin">
                </Iframe>
            </div>
            <div className="list">
            {/* This is a simple stacked list with hover effect. */}
                <ul className="stack-list">
                    <li > This is list Item 1  </li>
                    <li > This is list Item 2  </li>
                    <li > This is list Item 3  </li>
                    <li > This is list Item 4  </li>
                    <li > This is list Item 5  </li>
                </ul>


            </div>
            <div className="cod">
            <Iframe
  url="https://carbon.now.sh/embed?bg=rgba%2852%2C73%2C85%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=27px&ph=22px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=146%25&si=false&es=2x&wm=false&code=%252F*%2520This%2520is%2520a%2520simple%2520stacked%2520list%2520with%2520hover%2520effect.%2520*%252F%250A%253Cul%2520class%2520%253D%2520%2522stack-list%2522%2520%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25201%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25202%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25203%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25204%2520%253C%252Fli%253E%250A%2520%2520%253Cli%253E%2520This%2520is%2520list%2520Item%25205%2520%253C%252Fli%253E%250A%253C%252Ful%253E%250A"
  width=" 100%" height="310px" border="0" transform="scale(1)" overflow="hidden"
  sandbox="allow-scripts allow-same-origin">
</Iframe>

            </div>



        </div>
    )
}

export default Lists
