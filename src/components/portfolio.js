import React from 'react';
import zuzuThumb from '../projects/zuzu/dashboard.png';
import { PortfolioThumb } from './portfolio-thumb'

export const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="section-header">Portfolio</h3>
            <ul>
                <li><a>All</a></li>
            </ul>
            <div className="section-content">
                <PortfolioThumb src={zuzuThumb} title={'ZuZu Portal'} details={'ZuZu online survey admin portal'} />
                {/* <PortfolioThumb src={zuzuThumb} title={'Admin Panel'} />
                <PortfolioThumb src={zuzuThumb} title={'Admin Panel'} /> */}
            </div>
        </section>
    );
}