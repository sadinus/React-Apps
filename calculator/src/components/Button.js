import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <button
                className={this.props.isLongButton ? "" : "calcButton"}
                onClick={this.props.onClick}
                value={this.props.value} >
                {this.props.value}
            </button>
        );
    }
};

export default Button;