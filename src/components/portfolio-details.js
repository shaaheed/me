import React from 'react';
import login from '../projects/zuzu/login.png';
import dashboard from '../projects/zuzu/dashboard.png';
import builder from '../projects/zuzu/builder.png';
import projects from '../projects/zuzu/projects.png';
import map from '../projects/zuzu/map.png';
import result from '../projects/zuzu/result.png';

export const PortfolioDetails = (props) => {
    return (
        <div className="portfolio-details">
            <h3>ZuZu Portal</h3>
            <p>This is a survey portal site built on React, Chart.js, Google Map, Materialize, FontAwesome etc</p>
            <img src={login} alt="1" />
            <img src={dashboard} alt="1" />
            <img src={builder} alt="1" />
            <img src={projects} alt="1" />
            <img src={map} alt="1" />
            <img src={result} alt="1" />
        </div>
    );
}