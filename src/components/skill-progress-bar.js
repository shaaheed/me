import React from 'react';

export const SkillProgressBar = (props) => {
    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            <div className="progress">
                <div className="percentage" style={{ width: `${props.percentage}%` }}></div>
            </div>
        </React.Fragment>
    );
}