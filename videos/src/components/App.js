import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../apis/youtube';
import Videoslist from './Videolist';
import Videodetail from './Videodetail';
const KEY = 'AIzaSyBYeFnIN3rjAo8gQ_sws7jsSMRmap3eb9Y';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onTermSubmit('game of thrones');
    }
    onVideoItem = (video) => {
        console.log('Video', video);
        this.setState({selectedVideo: video});
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${KEY}`,
                q: term,
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }
    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Videodetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                           <Videoslist videos={this.state.videos} onVideoItemSelect={this.onVideoItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;