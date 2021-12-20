import React from 'react';

const Button = ({ color, text }) => {
    return (
        <button className={`ui ${color ? color : 'green'} basic button`}>{text}</button>
    );
}

export default Button;