import React from 'react';
import { PortfolioImg } from './portfolio-img';
import img1 from '../../projects/postal/1.png';
import img2 from '../../projects/postal/2.png';
import img3 from '../../projects/postal/3.png';
import img4 from '../../projects/postal/4.png';
import img5 from '../../projects/postal/5.png';
import img6 from '../../projects/postal/6.png';
import img7 from '../../projects/postal/7.png';
import img8 from '../../projects/postal/8.png';
import img9 from '../../projects/postal/9.png';
import img10 from '../../projects/postal/10.png';
import img11 from '../../projects/postal/11.png';
import img12 from '../../projects/postal/12.png';
import img13 from '../../projects/postal/13.png';

export const PostalPortfolio = (props) => {

    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

    return (
        <div className="portfolio-details">
            <h3>Post Office Management System</h3>
            <p>Post office / Courier Service management system</p>

            <h5>Technoloy</h5>
            <p>ASP.NET Core 2 MVC Web API, EntityFrameworkCore, MS-SQL, Angular 5 etc</p>

            <h5>Screenshots</h5>
            <PortfolioImg imgs={imgs} />
        </div>
    );
}