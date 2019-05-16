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
  removeTaskFromList=(index)=>{
    let newList = this.state.list;
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
  checkItemFromList=(index)=>{
    let newList = this.state.list;
    newList[index].complete = !newList[index].complete
    this.setState({
      list: newList
    })
    console.log(this.state.list[index])
  }
  render() {
    return (
      <div className="container">
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
        <Content 
          listItems={
            this.state.list
          }
          removeTaskFromList={
            this.removeTaskFromList
          }
          checkItemFromList={
            this.checkItemFromList
          }
          />
      </div>
    );
  }
}

export default App;
