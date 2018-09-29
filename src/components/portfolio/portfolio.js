import React from 'react';
import zuzuThumb from '../../projects/zuzu/thumb.jpg';
import ngDocThumb from '../../projects/ng-doc/thumb.jpg';
import dictionaryThumb from '../../projects/dictionary/thumb.jpg';
import ngLibThumb from '../../projects/ng-lib/thumb.jpg';
import parcelThumb from '../../projects/parcel/thumb.jpg';
import postalThumb from '../../projects/postal/thumb.jpg';
import { PortfolioThumb } from './portfolio-thumb'

export const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="section-header">Portfolio</h3>
            {/* <ul>
                <li><a>All</a></li>
            </ul> */}
            <div className="section-content">
                <PortfolioThumb link={'/me/portfolio-zuzu'} src={zuzuThumb} title={'ZuZu Portal'} details={'Online survey admin portal'} technology="#React, #Redux" />
                <PortfolioThumb link={'/me/portfolio-parcel'} src={parcelThumb} title={'Parcel Delivery System'} details={'Online parcel delivery system'} technology="#ASP.NET CORE 2, #Angular 4" />
                <PortfolioThumb link={'/me/portfolio-postal'} src={postalThumb} title={'Post Office Management'} details={'Post Office Management System'} technology="#ASP.NET CORE 2, #Angular 5" />
                <PortfolioThumb link={'/me/portfolio-ng-doc'} src={ngDocThumb} title={'Document Builder'} details={'Drag Drop Document Builder'} technology="#Angular 5" />
                <PortfolioThumb link={'/me/portfolio-ng-lib'} src={ngLibThumb} title={'Angular Library'} details={'Angular resuable components'} technology="#Angular 5" />
                <PortfolioThumb link={'/me/portfolio-dictionary'} src={dictionaryThumb} title={'Dictionary'} details={'English to Bangla dictionary'} technology="#Java, #Android" />
            </div>
        </section>
    );
}