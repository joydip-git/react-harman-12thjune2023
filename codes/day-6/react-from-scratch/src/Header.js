import React from 'react'

export function Header() {
    //code
    const message = 'Welcome to React JS'
    const changeMessage = (e) => {
        e.target.innerText = 'Welcome to React JS from Scratch'
    }

    //template/view/design
    return (
        <h2 id='mainHeader' onMouseOver={changeMessage}>
            <span>
                {message}
            </span>
        </h2>
    )
}