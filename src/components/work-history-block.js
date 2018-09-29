import React from 'react';

export const WorkHistoryBlock = (props) => {
    return (
        <li className="block">
            <h3>{props.title}</h3>
            {props.company ? <span className="company"><i>{props.company}</i></span> : null}
            {props.duration ? <span className="duration">{props.duration}</span> : null}
            <ul>
                {
                    props.description.map((data, index) => {
                        return <li key={index}>{data}</li>
                    })
                }
            </ul>
        </li>
    );
}