import TodoItem from '../pages/todoitem'
import React, { Component} from "react"

class TodoList extends Component{
  render(){
    const {items, handleClear, handleDelete} = this.props
    const clearButton = {marginTop:"5px"}
    return(
        <ul>
        
        {items.map(item => {
          return (
            <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)}/>
          )
          })}
          
          <button type="button" onClick={handleClear} className="btn btn-danger" style={clearButton}>Clear list</button>
        </ul>
    )
  }
}

export default TodoList