import TodoList from '../pages/todolist'
import TodoInput from '../pages/todoinput'
//import TodoItem from '../pages/todoitem'
import React, { Component} from "react"
import uuid from 'uuid'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'

export default class App extends Component{
  state = {
    items:[],
    id:uuid(),
    item:"",
    editable:false,
  }
  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    //console.log(newItem)
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:"",
      id:uuid(),
      editItem:false
    })
  }
  handleClear = () => {
    this.setState({
      items:[]
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    })
  }
  render(){
    return (
      <div>
      <Head>
      <title>Todo App</title>
      
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

      </Head>
        <div style={{width:"100vw", height:"50px", backgroundColor:"steelBlue", color:"white", textAlign:"center"}}><h3>Todo App</h3></div>
        <div  className="container">
          <div className="row">
            <div className="col-md-6">
              <TodoInput
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}/>
            </div>
          
          
            <div className="col-md-6">
              <TodoList 
              items={this.state.items} 
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              toggleClear={this.toggleClear}
              />
            </div>
          </div>
        </div>
        
      </div>
      
    )
  }
}

