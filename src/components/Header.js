import React from 'react'

function Header() {

    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={helloReact}>
                Click on me!
            </button>
            <a href='https://github.com/Ola2808-Boro/demo-app'>Repo link</a>
        </header>
    )

}

export default Header