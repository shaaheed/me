import React from 'react';
import d1 from '../../projects/dictionary/1.png';
import d2 from '../../projects/dictionary/2.png';
import d3 from '../../projects/dictionary/3.png';
import d4 from '../../projects/dictionary/4.png';
import d5 from '../../projects/dictionary/5.png';
import d6 from '../../projects/dictionary/6.png';
import d7 from '../../projects/dictionary/7.png';

export const DictionaryPortfolio = (props) => {
    return (
        <div className="portfolio-details">
            <h3>Dictionary</h3>
            <p>English to Bangla and Bangla to English dictionary. Find definitions, synonyms, audio pronunciations, example sentences etc. This is my demo project.</p>

            <h5>Technoloy</h5>
            <p>Android, Java, <a target="_blank" rel="noopener noreferrer" href="https://www.sqlite.org/index.html">SQLite</a></p>

            <h5>Screenshots</h5>
            <div className="app-screenshot">
                <img src={d1} alt="1" />
                <img src={d2} alt="1" />
                <img src={d3} alt="1" />
                <img src={d4} alt="1" />
                <img src={d5} alt="1" />
                <img src={d6} alt="1" />
                <img src={d7} alt="1" />
            </div>
        </div>
    );
}