import React from 'react';
import { PortfolioImg } from './portfolio-img';
import img1 from '../../projects/ng-doc/ng-doc1.png';
import img2 from '../../projects/ng-doc/ng-doc2.png';

export const NgDocPortfolio = (props) => {

    const imgs = [img1, img2];

    return (
        <div className="portfolio-details">
            <h3>Document Builder</h3>
            <p>Documnet Builder is a drap drop featured tool to build document easily. This is my personal demo project</p>

            <h5>Technoloy</h5>
            <p><a target="_blank" rel="noopener noreferrer" href="https://v5.angular.io/docs">Angular 5</a>, <a target="_blank" rel="noopener noreferrer" href="https://material.angular.io/">Angular Material</a>, <a target="_blank" rel="noopener noreferrer" href="http://interactjs.io/">interact.js</a></p>

            <h5>Demo</h5>
            <p><a target="_blank" rel="noopener noreferrer" href="https://shaaheed.github.io/ng-doc-builder/">https://shaaheed.github.io/ng-doc-builder/</a></p>

            <h5>Screenshots</h5>
            <PortfolioImg imgs={imgs} />
        </div>
    );
}