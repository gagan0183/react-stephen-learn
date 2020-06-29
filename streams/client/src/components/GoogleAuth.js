import React from "react";

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }
    componentDidMount() {
        console.log(window.gapi);
        window.gapi.load('client:auth2', () => {
           window.gapi.client.init({
                clientId: '15017445446-r82jmel8eafsecaisnat33333idc2jl9.apps.googleusercontent.com',
                scope: 'email'
           }).then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({isSignedIn: this.auth.isSignedIn.get()});
           });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know whether I am signed in or not</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
