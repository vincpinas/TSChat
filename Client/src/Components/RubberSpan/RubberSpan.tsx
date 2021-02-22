import React from 'react';

import './RubberSpan.css'

interface rubberSpanProps {
    letters: string;
    margin?: number;
    hero?: boolean;
    emoji?: string;
}


function RubberSpan(props: rubberSpanProps) {
    let letterArray: string[] = [];

    let split = props.letters.split("");
    split.forEach(item => {
        letterArray.push(item)
    });

    // Set the animation on hovering over the target
    function changeAnimation(e: any) {
        e.target.style.animationName = 'rubberBand'
        e.target.style.animationDuration = '1s'
    }

    // Remove the animation after a set time to reset it so it can be played again later.
    function resetAnimation(e: any) {
        setTimeout(() => {
            e.target.style.animation = 'none';
            e.target.style.animation = '';
        }, 900);
    }

    const rubberContainerStyles = {
        marginRight: props.margin + "px"
    }

    const heroLetter: React.CSSProperties = {
        textShadow: "-1px 0 0px #222222, 0 1px 0px #0f0f0f, -2px 1px 0px #222222, -1px 2px 0px #0f0f0f, -3px 2px 0px #222222, -2px 3px 0px #0f0f0f, -4px 3px 0px #222222"
    }

    return (
        <span style={rubberContainerStyles}>
            { letterArray.map((item, index) => {
                return (
                    <span key={index} className="blast-text" style={props.hero ? heroLetter : {}} onMouseOver={changeAnimation} onMouseLeave={resetAnimation}>{item}</span>
                )
            })}
            <span className="blast-text" onMouseOver={changeAnimation} style={props.hero ? heroLetter : {}} onMouseLeave={resetAnimation}>{props.emoji}</span>
        </span>
    )
}

export default RubberSpan