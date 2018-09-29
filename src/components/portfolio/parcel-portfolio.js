import React from 'react';
import { PortfolioImg } from './portfolio-img';
import img1 from '../../projects/parcel/1.jpg';
import img2 from '../../projects/parcel/2.png';
import img3 from '../../projects/parcel/3.png';
import img4 from '../../projects/parcel/4.png';
import img5 from '../../projects/parcel/5.png';
import img6 from '../../projects/parcel/6.png';

export const ParcelPortfolio = (props) => {

    const imgs = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="portfolio-details">
            <h3>Parcel Delivery System</h3>
            <p>Online parcel delivery system and management software.</p>

            <h5>Technoloy</h5>
            <p>ASP.NET Core 2 MVC Web API, EntityFrameworkCore, MS-SQL, Angular 4 etc</p>

            <h5>Screenshots</h5>
            <PortfolioImg imgs={imgs} />
        </div>
    );
}