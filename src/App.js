import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  constructor (props){
    super(props)
    this.state={
      task: "",
      list: []
    }
  };
  updateTask=(e)=>{
    this.setState({
      task:e.target.value
    })
    console.log(this.state.task)
  }
  addTaskToList=()=>{
    let newList = this.state.list;
    newList.push({
      task:this.state.task,
      complete:false
    })
    this.setState({
        task: "",
        list: newList
    })
    console.log(this.state.list)
  }
  render() {
    return (
      <div className="App">
        <p>NETO  ya despierta y opina!!!!!</p>
        <Header 
        inputHandler={
          this.updateTask
        }
        taskValue={
          this.state.task
        }
        clickHandler={
          this.addTaskToList
        }
        />
        <Content listItems={
          this.state.list
          }
          />
      </div>
    );
  }
}

export default App;
