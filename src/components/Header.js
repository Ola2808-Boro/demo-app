import React from 'react'
import logo from '../images/logo192.png'
function Header() {

    function helloReact() {
        alert('Hello React!')
    }
    return (

        <header className="App-header">
            <div className='App-logo'>
                <img src={logo} className="logo" alt="logo" />
                <button className="App-logo-btn" onClick={helloReact}>
                    Click on me!
                </button>
            </div>
            <a className="repo-link" href='https://github.com/Ola2808-Boro/demo-app'>Repo link</a>
        </header>
    )

}

export default Header