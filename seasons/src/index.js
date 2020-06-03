import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDetail from './Seasondetail';
import Loader from './Loader';

class App extends React.Component {
    state = { lat: null, error: null };

    componentDidMount() {
       window.navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                lat: position.coords.latitude,
            });
        }, 
        (err) => this.setState({ error: err.message }));
    }

    render() {
        if (this.state.error && !this.state.lat) {
            return <div>Error: {this.state.error}</div>
        }
        if (!this.state.error && this.state.lat) {
            return <SeasonDetail lat={this.state.lat}/>
        }
        return <Loader text="Select location" />
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));