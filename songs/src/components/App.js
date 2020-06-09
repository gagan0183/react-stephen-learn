import React from 'react';
import SongList from './Songlist';
import Songdetail from './Songdetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <Songdetail />
                </div>
            </div>
        </div>
    );
};

export default App;