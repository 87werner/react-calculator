
import React from "react"
import "./App.css"
 // top do this
 // - display
 // - function buttons (*, -, /, *, +, = clear)
 // - number buttons (1,2,3,4......)

class App extends React.Component{
  state = {
      result: [],
     keys: [
        { value: "clear", styleName: "clearButton"},
        { value: "/", styleName: "operatorButton"},
        { value: "7", styleName: "numberButton"},
        { value: "8", styleName: "numberButton"},
        { value: "9", styleName: "numberButton"},
        { value: "*", styleName: "operatorButton"},
        { value: "4", styleName: "numberButton"},
        { value: "5", styleName: "numberButton"},
        { value: "6", styleName: "numberButton"},
        { value: "-", styleName: "operatorButton"},
        { value: "1", styleName: "numberButton"},
        { value: "2", styleName: "numberButton"},
        { value: "3", styleName: "numberButton"},
        { value: "+", styleName: "operatorButton"},
        { value: "0", styleName: "zeroButton"},
        { value: ".", styleName: "operatorButton"},
        { value: "=", styleName: "operatorButton"},
     ],
  };

  handleButton = (value) => {
    if (value === "clear" ){
      this.setState({result: []});
    }else if(value === "="){
      this.setState({result: [eval(this.state.result.join(""))]});
    } else {
      this.setState({result: [...this.state.result, value]});
    }
  };

  render(){
    const {result, keys} = this.state
    return (
          <div className="container">
            <h1 className ="display">{result.length === 0 ? "0" : result}</h1>
            <div className ="keyboard-container">
              {keys.map((key) => {
                return (
                  <button 
                      className={key.styleName}
                      onClick={() => this.handleButton(key.value)}>
                      {key.value}
                  </button>
                )
              })}
            </div>
        </div>
    )
  }
}





export default App;



// handleClear = () => { //Both of these function have been summerised in the handlebutton Function with if() statements
  //   this.setState({result: []})
  // };
  // handleEquals = ( ) => {
  //   this.setState({result: [eval(this.state.result.join(""))]})
  // }

// original this was in the return statement we change this to the state as set it key valuie pairs 
// {<button onClick={this.handleClear}>Clear</button>
//             <button onClick = {() => this.handlButton("CE")}>CE</button> 
//             <button onClick = {() => this.handlButton("%")}>%</button> 
//             <button onClick = {() => this.handlButton("/")}>÷</button> 
//             <button onClick = {() => this.handlButton(7)}>7</button> 
//             <button onClick = {() => this.handlButton(8)}>8</button> 
//             <button onClick = {() => this.handlButton(9)}>9</button> 
//             <button onClick = {() => this.handlButton("*")}>X</button> 
//             <button onClick = {() => this.handlButton(4)}>4</button> 
//             <button onClick = {() => this.handlButton(5)}>5</button> 
//             <button onClick = {() => this.handlButton(6)}>6</button> 
//             <button onClick = {() => this.handlButton("-")}>-</button> 
//             <button onClick = {() => this.handlButton(1)}>1</button> 
//             <button onClick = {() => this.handlButton(2)}>2</button> 
//             <button onClick = {() => this.handlButton(3)}>3</button> 
//             <button onClick = {() => this.handlButton("+")}>+</button> 
//             <button onClick = {() => this.handlButton(0)}>0</button> 
//             <button>.</button>
//             <button onClick = {this.handleEquals}>=</button> }