import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Streamedit from "./streams/Streamedit";
import Streamcreate from "./streams/Streamcreate";
import Streamdelete from "./streams/Streamdelete";
import Streamlist from "./streams/Streamlist";
import StreamShow from "./streams/StreamShow";
import Header from "./header";

const App = () => {
    return <div className="ui container">
        <BrowserRouter>
            <div>
                <Header/>
                <Route path="/" exact component={Streamlist}/>
                <Route path="/streams/new" exact component={Streamcreate} />
                <Route path="/streams/edit" exact component={Streamedit} />
                <Route path="/streams/delete" exact component={Streamdelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>
};

export default App;
