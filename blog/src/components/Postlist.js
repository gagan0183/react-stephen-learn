import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";

class Postlist extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props);
        return <div>Post list</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
};

export default connect(mapStateToProps, { fetchPosts })(Postlist);
