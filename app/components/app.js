import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsList, mapDispatchToPropsList } from '../store';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { lists } = this.props;
        return (
            <div>
                {lists.map((item)=> <span>{item.name+'|'}{item.num}<br/></span>)}
            </div>
        );
    }
};

App = connect(mapStateToPropsList, mapDispatchToPropsList)(App);
export default App;