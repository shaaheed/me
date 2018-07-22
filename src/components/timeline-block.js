import React from 'react';

export const TimelineBlock = (props) => {
    return (
        <li className="block">
            <h3>{props.title}</h3>
            {props.degree ? <span>{props.degree}</span> : null}
            <span>{props.duration}</span>
            <p>{props.description}</p>
        </li>
    );
}