import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
            <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'}></img>
            </header>
        </div>
    )
}
