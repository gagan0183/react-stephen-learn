import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div>
        Page one
        <Link to="/pagetwo">Page two</Link>
    </div>;
};

const PageTwo = () => {
    return <div>
        Page two
        <Link to="/">Page one</Link>
    </div>;
};

const App = () => {
    return <div>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" component={PageTwo}/>
            </div>
        </BrowserRouter>
    </div>
};

export default App;
