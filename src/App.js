import React, { Component } from 'react';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import Equals from './components/Equals';
import Decimal from './components/Decimal';
import AC from './components/AC';
import Output from './components/Output';
import Smile from './components/Smile'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '0',
      formula: '',
      allowDecimal: true,
      
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(e) {
    if (e.target.className == 'number') {
      this.handleNumber(e)
    }

    if (e.target.className == 'decimal') {
      this.handleDecimal(e)
    }

    if (e.target.className == 'operator') {
      this.handleOperator(e)
    }
    if (e.target.className == 'clear') {
      this.handleClear()
    }

    if (e.target.className == 'equals') {
      this.handleEqual(e)
    }
  }

  handleNumber(e) {
    
    if (this.state.expression == '0') {
      if (e.target.textContent !== '0') {
        this.setState({
          expression: e.target.textContent
        })
      }
    } else if (/[\+\-\*\/]$/.test(this.state.expression)) {
      this.setState({
        expression: this.state.expression + ' ' + e.target.textContent
      })
    } else {
      this.setState({
        expression: this.state.expression + e.target.textContent
      })
    }

  }

  handleDecimal(e) {
    if (this.state.allowDecimal) {
      this.setState({
        expression: this.state.expression + e.target.textContent,
        allowDecimal: false
      })
    }
  }

  handleOperator(e) {
    let currOperator = e.target.textContent == 'x' ? '*' : e.target.textContent
  
      if (/([\+\-\*\/]\s-)$/.test(this.state.expression)) {
        this.setState({
          expression: this.state.expression.replace(/([\+\-\*\/]\s-)$/, currOperator)
        })
      } else {
        if (currOperator == '-') {
          this.setState({
            expression: this.state.expression + ' ' + currOperator
          })
        } else {
          if (/[\+\-\*\/]$/.test(this.state.expression)) {
            this.setState({
              expression: this.state.expression.slice(0, -1) + currOperator
            })
          } else {
            this.setState({
              expression: this.state.expression + ' ' + currOperator
            })
          }
        }
      }
    

    
    this.setState({
      allowDecimal: true
    })
  }

  handleEqual(e) {
    let result = eval(this.state.expression);

    this.setState({
      formula: this.state.expression + ' ' + '=' + ' ' + result,
      expression: '' + result,
      allowDecimal: true
    })
  }

  handleClear() {
    this.setState({
      expression: '0',
      formula:'',
      allowDecimal: true
    })
  }

  
  render() {
    return (
      <div id = 'calculator'>
        <Output formula = {this.state.formula} expression = {this.state.expression} />
        <Smile />
        <Numbers handleClick = {this.handleClick} />
        <Operators handleClick = {this.handleClick} />
        <Equals handleClick = {this.handleClick} />
        <Decimal handleClick = {this.handleClick} />
        <AC handleClick = {this.handleClick} />
      </div>
    );
  }
}

export default App;




