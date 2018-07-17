import React from 'react';
import { Link } from "react-router-dom";

export const PortfolioThumb = (props) => {
    return (
        <div className="thumb-box box-shadow">
            <Link to="/me/portfolio-details">
                <div className="thumb">
                    <img src={props.src} alt="zuzu" />
                    <div className="navigate">
                        <i class="fa fa-clone"></i>
                    </div>
                </div>
                <div className="description">
                    <span className="title">{props.title}</span>
                    <span className="info">{props.details}</span>
                </div>
            </Link>
        </div>
    );
}