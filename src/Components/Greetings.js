import React from 'react'

function Greetings() {
    const date = new Date();
    const currentTime = date.getHours();
    let greetings;
    const customStyle = {
        color: ''
    }
    if (currentTime < 12) {
        greetings = 'Good Morning';
        customStyle.color = 'blue'
    } else
    if (currentTime < 18) {
        greetings = 'Good Afternoon';
        customStyle.color = 'green'
    } else {
        greetings = 'Good Night';
        customStyle.color = 'red'
    }
    return ( <div>
        <h1 style = { customStyle } > { greetings } </h1> 
        </div>
    )
}

export default Greetings