import React from 'react';
import ImageLoader from '../ImageLoader';
import InfoLoader from '../InfoLoader';
import './styles.scss';

const SearchCardLoader = () => (
    <div className="search-card-loader-container">
        <div className="search-card-loader-user">
            <ImageLoader />
        </div>

        <div className="search-card-loader-infos">
            <InfoLoader />
        </div>
    </div>
);

export default SearchCardLoader;