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
                    <p>Since 2015, I am working as a software engineer in professional software industry, where I have been developing innovative solutions, software and systems. I am excellent on requirement gathering to design, coding, testing, documentation and implementation.</p>
                </div>
                <br />
                <br />
                <h3 className="section-header">Summary</h3>
                <div className="section-content">
                    <ul>
                        <li>Extensive experienced to build backend web application using <strong>ASP.NET MVC</strong>, <strong>ASP.NET CORE MVC</strong>, and <strong>ASP.NET CORE WEB API</strong>.</li>

                        <li>Highly experienced in frontend development to build any web app using <strong>ES6 JavaScript</strong>, <strong>Angular 2+</strong>, <strong>React</strong>, <strong>jQuery</strong> etc.</li>

                        <li>Experienced with <strong>.NET Core</strong>, <strong>.NET Framework</strong> and worked on various <strong>WPF</strong> applications with <strong>DevExpress</strong> UI tool and <strong>MVVM</strong> design pattern.</li>

                        <li>Ability to build mobile app using <strong>Android</strong>, <strong>Java</strong> and <strong>Android Studio</strong>.</li>

                        <li>Ability to build web application using <strong>PHP</strong> and <strong>Laravel</strong> framework.</li>

                        <li>Good understanding with <strong>Multi Tenant</strong> web app, <strong>Job Scheduling</strong>, <strong>Real Time Messaging</strong>, <strong>Message Queuing</strong> etc.</li>

                        <li>Good knowledge in <strong>OOP</strong> and programming <strong>Design Patterns</strong>.</li>

                        <li>Strong ability to integrate any third party library by the help of their documentation.</li>

                        <li>Experienced with <strong>Git</strong>, <strong>GitHub</strong>, <strong>BitBucket</strong> and tools <strong>TGit</strong>, <strong>Git Bash</strong>, <strong>Source Tree</strong>. </li>

                        <li>Experienced with various package manager such as <strong>NuGet</strong>, <strong>Chocolaty</strong> <strong>npm</strong>, <strong>Composer</strong> etc.</li>

                        <li>Familiar with <strong>Command Line Interface</strong>, <strong>Terminal</strong>, <strong>Bash Script</strong>.</li>

                        <li>Familiar with <strong>Unit Testing</strong> and automated testing processes tools like <strong>Selenium</strong>.</li>

                        <li>Ability to work individually and independently with minimal supervision.</li>

                        <li>Self motivated, independent, open to learn new technology, relatively quick learner.</li>
                    </ul>
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
            {/* <section className="skill-section">
                <SkillSet title={'Backend'} skills={skills.backend} />
                <SkillSet title={'Frontend'} skills={skills.frontend} />
            </section> */}
        </React.Fragment >
    )
}