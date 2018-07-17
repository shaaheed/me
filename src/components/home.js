import React from 'react';
import { SkillSet } from './skill-set';
import { ServiceItem } from './service-item';
import { skills, services } from '../data'

export const Home = () => {
    return (
        <React.Fragment>
            <section>
                <h3 className="section-header">About Me</h3>
                <div className="section-content">
                    <p>Since 2017, I am working as a software engineer in professional software industry, where I have been developing innovative solutions, software and systems. I am excelent on requirement gathering to design, coding, testing, documentation and implementation.</p>

                    <p>I am skilled in .NET Core, .NET Framework, ASP.NET Core MVC, ASP.NET Core MVC Web API, React, Angular etc</p>
                </div>
            </section>
            <section className="service-section">
                <h3 className="section-header">My Services</h3>
                <div className="section-content">
                    {
                        services.map((data, index) => {
                            return <ServiceItem key={index} icon={data.icon} title={data.title} details={data.details} />
                        })
                    }
                </div>
            </section>
            <section className="skill-section">
                <SkillSet title={'Backend'} skills={skills.backend} />
                <SkillSet title={'Frontend'} skills={skills.frontend} />
            </section>
        </React.Fragment>
    )
}