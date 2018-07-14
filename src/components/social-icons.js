import React from 'react';
import constant from '../data'

export const SocialIcons = (props) => {
    return (
        <div className="social-icons">
            <a href={constant.github} target="_blank"><i className="fab fa-github"></i></a>
            <a href={constant.stackoverflow} target="_blank"><i className="fab fa-stack-overflow"></i></a>
            <a href={constant.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href={constant.blogspot} target="_blank"><i className="fab fa-blogger"></i></a>
        </div>
    );
}