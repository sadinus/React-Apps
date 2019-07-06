import React from 'react';
import Button from './Button';
import { calculate } from './MathLogic';

class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
            number: 0,
            number2: 0,
            operation: '',
            result: 0,
            showedValue: ''
        };
    }

    onNumberClick = (e) => {
        const numValue = e.target.value;

        if (this.state.number === 0) {
            this.setState({ number: numValue });
        }
        else {
            this.setState({ number2: numValue });
        }
        this.setState(prevState => {
            return {
                showedValue: prevState.showedValue + ` ${numValue}`
            }
        });
    }

    onOperationClick = (e) => {
        const numValue = e.target.value;

        this.setState(prevState => {
            return {
                operation: numValue,
                showedValue: prevState.showedValue + ` ${numValue}`
            }
        });
    }

    onResultClick = () => {
        console.log(this.state);
        const calculatedResult = calculate(
            Number(this.state.number),
            Number(this.state.number2),
            this.state.operation
        );

        this.setState({ result: calculatedResult });
    }

    onClearClick = (e) => {
        this.setState({
            number: 0,
            number2: 0,
            operation: '',
            result: 0,
            showedValue: ''
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.result === 0 ? this.state.showedValue : this.state.result}</div>
                <Button onClick={this.onClearClick} value="Clear" isLongButton />
                <Button onClick={this.onResultClick} value="Result" isLongButton />
                <br />
                <Button onClick={(e) => this.onNumberClick(e)} value="7" />
                <Button onClick={(e) => this.onNumberClick(e)} value="8" />
                <Button onClick={(e) => this.onNumberClick(e)} value="9" />
                <Button onClick={(e) => this.onOperationClick(e)} value="+" />
                <br />
                <Button onClick={(e) => this.onNumberClick(e)} value="4" />
                <Button onClick={(e) => this.onNumberClick(e)} value="5" />
                <Button onClick={(e) => this.onNumberClick(e)} value="6" />
                <Button onClick={(e) => this.onOperationClick(e)} value="-" />
                <br />
                <Button onClick={(e) => this.onNumberClick(e)} value="1" />
                <Button onClick={(e) => this.onNumberClick(e)} value="2" />
                <Button onClick={(e) => this.onNumberClick(e)} value="3" />
                <Button onClick={(e) => this.onOperationClick(e)} value="*" />
                <Button onClick={(e) => this.onOperationClick(e)} value="/" />
            </div>
        );
    }
}

export default Calculator;