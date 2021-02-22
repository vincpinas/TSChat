import React, { useState, useEffect } from 'react'
import './Alert.css'
 
interface alertProps {
    text: string;
    delay: number;
    timer: number;
    error?: boolean;
}

function Alert(props: alertProps) {
    const [alertActive, setAlertActive] = useState(false);

    useEffect(() => {
        // Alert Timing Functionality.
        const delay = setTimeout(() => setAlertActive(true), 300 + props.delay);
        const timer = setTimeout(() => setAlertActive(false), props.timer + props.delay);

        // Clean up function.
        return () => {
            clearTimeout(delay);
            clearTimeout(timer);
        };
      }, [props.delay, props.timer]);

    const errorStyle = {
        backgroundColor: "#ff00007e"
    }

    return (
        <div className={alertActive ? 'c-alert active' : 'c-alert'} style={props.error ? errorStyle : {}}>
            <p>{props.text}</p>
        </div>
    )
}

export default Alert
