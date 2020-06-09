import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return <div>User header</div>;
    }
}

function mapStateToProps() {
    return { }
}

export default connect(null, { fetchUser })(UserHeader);
