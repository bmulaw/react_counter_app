import logo from './logo.svg';
import './App.css';
import React from "react";

// import Vacation from "./component/Vacation.js"

// function App() {
//   return (
//     <div>
//       <h1> Bernard the Nerd!</h1>
//       <div class = "link"> <a href = "https://www.github.com/bmulaw">Projects</a></div>
//       <h3> 
//         Grad Year: 2022 (hopefully)
//       </h3>
//       <h2>
//         Major: Computer Science
//       </h2>
//       <Vacation></Vacation>
//     </div>
//   );
// }


class App extends React.Component 
{
  constructor(props) 
  {
    super(props)
    this.state = 
    {
      startingCount: 0,
      name: props.name
    };
  }

  addOne = ()=>
  {
    this.setState((prevstate) =>
    {
      return {
        startingCount: prevstate.startingCount + 1
      }
    })
  }

  minusOne = ()=>
  {
    this.setState((prevstate) =>
    {
      return {
        startingCount: prevstate.startingCount - 1
      }
    })
  }

  reset = ()=>
  {
    this.setState((prevstate) =>
    {
      return {
        startingCount: prevstate.startingCount - prevstate.startingCount
      }
    })
  }

  // componentDidMout() {
  //   console.log("hello");
  // }

  render() 
  {
    return (
      <div>
        <div>Count: {this.state.startingCount}</div>
        <button onClick= {this.addOne}>add 1</button>
        <button onClick= {this.minusOne}>minus 1</button>
        <button onClick= {this.reset}>reset</button>
      </div>
    )
  }


}

export default App;
