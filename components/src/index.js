import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './Commentdetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard sample="sample">
                <CommentDetail author="Sam" timeAgo="Yesterday at 9PM" imageURL={faker.image.avatar()} commentText="Nice blog post" />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));