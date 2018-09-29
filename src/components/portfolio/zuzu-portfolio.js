import React from 'react';
import { PortfolioImg } from './portfolio-img';
import img1 from '../../projects/zuzu/login.png';
import img2 from '../../projects/zuzu/dashboard.png';
import img3 from '../../projects/zuzu/builder.png';
import img4 from '../../projects/zuzu/projects.png';
import img5 from '../../projects/zuzu/map.png';
import img6 from '../../projects/zuzu/result.png';

export const ZuZuPortfolio = (props) => {

    const imgs = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="portfolio-details">
            <h3>ZuZu Portal</h3>
            <p>ZuZu is a survey portal site that process users survey data, generate report in many visual format and give download ability to users.</p>

            <h5>Front End Technoloy</h5>
            <p>React, Redux, Google Map, <a target="_blank" rel="noopener noreferrer" href="https://www.chartjs.org/">Chart.js</a>, <a target="_blank" rel="noopener noreferrer" href="https://materializecss.com/">Materialize</a> etc</p>

            <h5>Screenshots</h5>
            <PortfolioImg imgs={imgs} />
        </div>
    );
}