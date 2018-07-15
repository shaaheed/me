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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sit! Qui
                    inventore saepe ipsam in ipsa alias molestiae iste repudiandae facere quos,
          veniam nostrum quaerat commodi enim cum at ducimus.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officia eos
          ullam facere ducimus accusamus. Consectetur optio sint doloremque molestiae id, consequuntur ipsum, officia quaerat cumque magni perspiciatis suscipit iusto?</p>
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