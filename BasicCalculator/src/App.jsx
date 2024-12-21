import './App.css'
import React from "react";

export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
        first:0,
        second:0,
        result:0,
        operation:"+"
      }
    }

    changeOperation = (e) => {
      this.setState({operation:e.target.innerText})
    }

    calculate = (e) => {
      e.preventDefault();
      let ans = 0 ;
      if(this.state.operation === "+"){
        ans = this.state.first + this.state.second;
      } else if(this.state.operation === "-"){
        ans = this.state.first - this.state.second;
      }else if(this.state.operation === "*"){
        ans = this.state.first * this.state.second;
      } else {
        if(this.state.second !== 0)
          ans = this.state.first / this.state.second;
        else if(this.state.first !== 0 && this.state.second === 0){
          alert("Division by zero is not allowed");
          return;
        }
      }

      this.setState({result:ans})
    }

    handleChange = (event) =>{
      let name = event.target.name;
      let value = event.target.value;

      this.setState({[name]:value});
    }

    render(){
      return (
        <>
          <form action="" id="form">
    
            <div className="form">
    
              <section id="inputContainer">
                <section id="first">
                  <input type="number" name="first" value={this.state.first} className="input" onChange={(e) => this.handleChange(e)}/>
                </section>
    
                <section id="second">
                  <input type="number" name="second" value={this.state.second} className="input" onChange={(e) => this.handleChange(e)}/>
                </section>
    
                <section id="result">
                  <input type="number" name="result" value={this.state.result} className="input" />
                </section>
    
              </section>
    
              <section id="buttonContainer">
    
                <button type="button" className="operation" onClick={this.changeOperation}>+</button>
                <button type="button" className="operation" onClick={this.changeOperation}>-</button>
                <button type="button" className="operation" onClick={this.changeOperation}>*</button>
                <button type="button" className="operation" onClick={this.changeOperation}>/</button>
    
              </section>
    
              <section id="calc">
    
                <button className="calcButton" onClick={this.calculate}>Calculate</button>
    
              </section>
    
            </div>
          </form>
        </>
      )
    }
}