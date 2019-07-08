import React from 'react';
import Button from './Button';
import { calculate } from './MathLogic';
import './Calculator.css';

class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
            number: 0,
            number2: 0,
            operation: '',
            result: 0,
            showedValue: 0
        };
    }

    onNumberClick = (e) => {
        const numValue = e.target.value;

        if (this.state.number === 0) {
            this.setState(prevState => {
                return {
                    number: numValue,
                    showedValue: numValue
                }
            });
        }
        else if (this.state.number2 === 0 && this.state.operation !== '') {
            this.setState(prevState => {
                return {
                    number2: numValue,
                    showedValue: prevState.showedValue + ` ${numValue}`
                }
            });
        }
    }

    onOperationClick = (e) => {
        const numValue = e.target.value;

        if (this.state.number !== 0 && this.state.operation === '') {
            this.setState(prevState => {
                return {
                    operation: numValue,
                    showedValue: prevState.showedValue + ` ${numValue}`
                }
            });
        }
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
            showedValue: 0
        });
    }

    render() {
        return (
            <div className="calculator">
                <div className="result">
                    {this.state.result === 0 ? this.state.showedValue : this.state.result}
                </div>
                <div className="numbers">
                    <Button onClick={(e) => this.onNumberClick(e)} value="7" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="8" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="9" />
                    <br />
                    <Button onClick={(e) => this.onNumberClick(e)} value="4" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="5" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="6" />
                    <br />
                    <Button onClick={(e) => this.onNumberClick(e)} value="1" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="2" />
                    <Button onClick={(e) => this.onNumberClick(e)} value="3" />
                </div>
                <div className="operations">
                    <Button
                        className='resultButton'
                        onClick={this.onResultClick}
                        value="Result"
                        isLongButton />
                    <br />
                    <Button onClick={(e) => this.onOperationClick(e)} value="+" />
                    <Button onClick={(e) => this.onOperationClick(e)} value="-" />
                    <br />
                    <Button onClick={(e) => this.onOperationClick(e)} value="*" />
                    <Button onClick={(e) => this.onOperationClick(e)} value="/" />
                </div>
                <br />
                <br />
                <Button
                    className='clearButton'
                    onClick={this.onClearClick}
                    value="Clear"
                    isLongButton />
            </div>
        );
    }
}

export default Calculator;