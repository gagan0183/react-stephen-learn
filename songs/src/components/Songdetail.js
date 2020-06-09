import React from 'react';
import { connect } from 'react-redux';

const Songdetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Detail:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>            
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(Songdetail);