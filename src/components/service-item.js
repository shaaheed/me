import React from 'react';

export const ServiceItem = (props) => {
    return (
        <div className="service-box box-shadow">
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <div>{props.details}</div>
        </div>
    );
}