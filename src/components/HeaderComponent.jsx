import React from 'react'

const currentUrl = "http://localhost:3000/";

const HeaderComponent = () => {
  return (
    <div className='container'>
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brend"href={currentUrl}>Home</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent