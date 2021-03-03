import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './Join.css'

import RubberSpan from '../RubberSpan/RubberSpan'
import Alert from '../Alert/Alert'

const Join = () => {
    // Input Variables
    const [name, setName] = useState('');

    // Footer Variables
    const date = new Date();
    const year = date.getFullYear();

    // Error Conditionals
    const [nameError, setNameError] = useState(false);
    const ErrorSetter = (setError: any) => {
        setError(true)
        const timer = setTimeout(() => setError(false), 8500)

        return () => {
            clearTimeout(timer)
        }
    }

    return (
        <div className="joinOuterContainer">
            <div className="c-alert-container">
                { nameError ? <Alert text="Please fill in a name between 4 - 9 characters." timer={7500} delay={0} error={true} /> : null }
            </div>
            <h1 className="heading">
                <RubberSpan letters="TypeScript" hero={true} margin={10}/> 
                <RubberSpan letters="Chat" hero={true}/> 
            </h1>
                <input placeholder="Enter Name.." className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
            <Link onClick={event => (!name || name.length < 4 || name.length > 9) ? (event.preventDefault(), ErrorSetter(setNameError)) : null} to={`/chat?name=${name}&room=rules`}>
                <button className="joinButton margetop-20" type="submit">Click to Join</button>
            </Link>
            <div className="Footer">
                <p id="copyright">&#169; Super Guild Chat. {year}</p>
                <ul className="Socials">
                    <li><a href="https://github.com/vincpinas/TSChat" target="_blank" rel="noreferrer"><FaIcons.FaGithub/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Join
