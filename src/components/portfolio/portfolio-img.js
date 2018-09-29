import React from 'react';

export const PortfolioImg = (props) => {
    return (
        <div className={props.class}>
            {
                props.imgs.map((img, index) => {
                    return (
                        <a key={index} target="_blank" rel="noopener noreferrer" href={img}>
                            <img src={img} alt="1" />
                        </a>
                    )
                })
            }
        </div>
    );
}