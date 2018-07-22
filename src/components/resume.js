import React from 'react';
import { TimelineBlock } from './timeline-block'
import { timeline } from '../data'

export const Resume = () => {
    return (
        <section className="resume">
            <h3 className="section-header">Resume</h3>
            <div className="section-content">
                <ul className="work-history">
                    <li className="header">
                        <h2>Working History</h2>
                        <i class="fa fa-suitcase"></i>
                    </li>
                    {
                        timeline.work.map((data, index) => {
                            return <TimelineBlock key={index} title={data.title} duration={data.duration} description={data.description} />
                        })
                    }
                </ul>
                <ul className="education-history">
                    <li className="header">
                        <h2>Education History</h2>
                        <i class="fa fa-graduation-cap"></i>
                    </li>
                    {
                        timeline.education.map((data, index) => {
                            return <TimelineBlock key={index} title={data.title}  degree={data.degree} duration={data.duration} description={data.description} />
                        })
                    }
                </ul>
            </div>
        </section>
    );
}