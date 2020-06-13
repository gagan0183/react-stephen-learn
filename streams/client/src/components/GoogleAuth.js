import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
           window.gapi.client.init({
                clientId: '15017445446-r82jmel8eafsecaisnat33333idc2jl9.apps.googleusercontent.com',
                scope: 'email'
           });
        });
    }

    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;
