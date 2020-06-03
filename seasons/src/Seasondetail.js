import React from 'react';
import './Seasondetail.css';

const config = {
    winter: {
        text: "It's chill",
        icon: 'snowflake'
    },
    summer: {
        text: "hit the beach",
        icon: 'sun'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }
};

const SeasonDetail = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, icon} = config[season];
    return <div className={`season-detail ${season}`}>
        <i className={`massive icon-left ${icon} icon`}></i>
        {text}
        <i className={`massive icon-right ${icon} icon`}></i>
    </div>
};

export default SeasonDetail;