import React from 'react';
import { PortfolioImg } from './portfolio-img';
import img1 from '../../projects/ng-lib/1.png';

export const NgLibPortfolio = (props) => {

    const imgs = [img1];

    return (
        <div className="portfolio-details">
            <h3>Angular Library</h3>
            <p>Angular resuabe component library. I am creating all form controls and component for later use.</p>

            <h5>Technoloy</h5>
            <p>Angular 6, HTML, CSS</p>

            <h5>Demo</h5>
            <p><a target="_blank" rel="noopener noreferrer" href="https://shaaheed.github.io/ng-library/">https://shaaheed.github.io/ng-library/</a></p>

            <h5>Screenshots</h5>
            <PortfolioImg imgs={imgs} />
        </div>
    );
}