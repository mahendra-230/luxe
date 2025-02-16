import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
           <div className="left">
           <div className="logo">
           <img src="#" alt="logo" />
           </div>
           <div className="logoName">
           <h2 className='shopping'>LUXE</h2>
           </div>
           </div>
           <div className="menu">
            <ul>
                <li><a href="#">Mens</a></li>
                <li><a href="#">womens</a></li>
                <li><a href="#">Childerns</a></li>
                <li><a href="#">Beauty</a></li>
            </ul>
           </div>
           <div className="search">
            <input type="text" placeholder='search' />
            <button>search</button>
           </div>
           <div className='sign'>
            <button>signIn</button>
            <button>signUp</button>
           </div>
           <div className="cart">
            <button>cart</button>
           </div>

        </header>
    </div>
  )
}

export default Header