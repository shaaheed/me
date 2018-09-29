import React from 'react';
import { Link } from "react-router-dom";

export const PortfolioThumb = (props) => {
    return (
        <div className="thumb-box box-shadow">
            <Link to={props.link}>
                <div className="thumb">
                    <img src={props.src} alt="zuzu" />
                    <div className="navigate">
                        <i className="fa fa-clone"></i>
                    </div>
                </div>
                <div className="description">
                    <span className="title">{props.title}</span>
                    <span className="info">{props.details}</span>
                    <span className="info"><b>{props.technology}</b></span>
                </div>
            </Link>
        </div>
    );
}