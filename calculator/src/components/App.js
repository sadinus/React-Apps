import React from 'react';
import Calculator from './Calculator';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h1>Calculator App</h1>
                <Calculator />
            </div>
        );
    }
};

export default App;