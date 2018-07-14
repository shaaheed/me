import React from 'react';
import { SkillProgressBar } from './skill-progress-bar'

export const SkillSet = (props) => {
    return (
        <div className="skill-set">
            <h3 className="section-header">{props.title} Skills</h3>
            <div className="section-content">
                {props.skills.map((data, index) => {
                    return <SkillProgressBar key={index} title={data.name} percentage={data.value} />
                })}
            </div>
        </div>
    );
}